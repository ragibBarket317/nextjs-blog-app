import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
  content: { type: String, required: true },
  createAt: { type: Date, default: Date.now },
})

const Comment =
  mongoose.models.Comment || mongoose.model('Comment', commentSchema)
export default Comment
