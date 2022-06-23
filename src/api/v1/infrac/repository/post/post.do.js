import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    content: {
      type: String,
    },
    fee: {
      type: Boolean,
    },
    numberOfImages: {
      type: Number,
    },
    numberOfVideos: {
      type: Number,
    },
    likeCount: {
      type: Number,
    },
    commentCount: {
      type: Number,
    },
    shareCount: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
