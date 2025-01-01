import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  content: { type: String, required: true },
  image: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
})

const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)
export default Blog
