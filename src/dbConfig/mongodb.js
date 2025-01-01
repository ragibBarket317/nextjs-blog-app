import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/blog-app`)
    const connection = mongoose.connection

    connection.on('connected', () => {
      console.log('MongoDB connected successfully')
    })

    connection.on('error', (err) => {
      console.log('MongoDB connection error', err)
      process.exit()
    })
  } catch (error) {
    console.log('Database connection failed')
    console.log(error)
  }
}
