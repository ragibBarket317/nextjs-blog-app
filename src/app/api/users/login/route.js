import { connectDB } from '@/dbConfig/mongodb'
import User from '@/models/userModel.js'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

connectDB()

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json()
    const { email, password } = reqBody

    console.log(reqBody)

    //check if user exists
    const user = await User.findOne({ email })

    if (!user) {
      return NextResponse.json(
        { error: 'User does not exist' },
        { status: 400 }
      )
    }

    //check if password is correct
    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 400 })
    }

    //create token data
    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    }

    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: '1d',
    })

    //send token in response
    const response = NextResponse.json(
      {
        message: 'Login successful',
        success: true,
      },
      {
        status: 200,
      }
    )

    response.cookies.set('token', token, {
      httpOnly: true,
    })

    return response
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
