import { connectDB } from '@/dbConfig/mongodb'
import Category from '@/models/categoryModel'
import { NextRequest, NextResponse } from 'next/server'

connectDB()

export async function GET(NextRequest) {
  try {
    const categories = await Category.find()
    return NextResponse.json(
      {
        message: 'Categories fetched successfully',
        success: true,
        data: categories,
      },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
  }
}
