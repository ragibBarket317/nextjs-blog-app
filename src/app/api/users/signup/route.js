import { connectDB } from '@/dbConfig/mongodb'
import User from '@/models/userModel.js'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

connectDB()

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json()
    const { name, email, password } = reqBody

    console.log(reqBody)

    //check if user exists
    const user = await User.findOne({ email })

    if (user) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      )
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    })

    const savedUser = await newUser.save()

    return NextResponse.json(
      {
        message: 'User created successfully',
        success: true,
        savedUser,
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
