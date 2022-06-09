import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        //ref: "Post"
    },
    url:{
        type: String
    },
    order:{
        type: Number
    }
})

const Image = mongoose.model('Image', imageSchema);
export default Image