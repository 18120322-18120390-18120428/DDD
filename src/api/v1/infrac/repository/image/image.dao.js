import Image from "./image.do";

export class ImageDao {
    save = async (data) => {
        const image = new Image(data);
        await image.save();
        return image;
    }
    findById = async (_id) => {
        return await Image.findById({ _id: _id });
    }
    findByPostId = async (postId) => {
        return await Image.findById({ postId: postId })
    }
    updateImage = async (image) => {
        return await Image.findOneAndUpdate({ _id: image._id }, image);
    }
    deleteImageById = async (_id) => {
        return Image.deleteOne({ _id: _id })
    }
    deleleImageByPostId = async (postId) => {
        return Image.deleteMany({ postId: postId })
    }
}