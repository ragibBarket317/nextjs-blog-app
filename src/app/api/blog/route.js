import connectCloudinary from '@/cloudinaryConfig/cloudinary'
import { connectDB } from '@/dbConfig/mongodb'
import Blog from '@/models/blogModel.js'
import { NextRequest, NextResponse } from 'next/server'

connectDB()
connectCloudinary()

export async function GET(NextRequest) {
  try {
    const blogs = await Blog.find()
    return NextResponse.json(
      {
        message: 'Blogs fetched successfully',
        success: true,
        data: blogs,
      },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
  }
}

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json()
    const { title, description, category, image } = reqBody

    const newBlog = new Blog({
      title,
      description,
      category,
      image,
    })

    const savedBlog = await newBlog.save()

    return NextResponse.json(
      {
        message: 'Blog created successfully',
        success: true,
        data: savedBlog,
      },
      { status: 201 }
    )
  } catch (error) {
    console.log(error)
  }
}
