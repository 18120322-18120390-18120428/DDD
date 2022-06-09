import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    authorId: {
        type: String
        //type: mongoose.Schema.Types.ObjectId,
        // ref: "User"
    },
    content: {
        type: String
    },
    fee:{
        type: Number
    },
    numberOfImages: {
        type: Number
    },
    numberOfVideos: {
        type: Number
    },
    likeCount: {
        type: Number
    },
    commentCount: {
        type: Number
    },
    shareCount: {
        type: Number
    }
})
const Post = mongoose.model('Post', postSchema);
export default Post;