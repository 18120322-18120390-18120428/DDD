import { Post } from "../../../domain/post/post.entity";
import { Image } from "../../../domain/image/image.entity";
import { CreatePost } from "../../../domain/post/dto/createPost.dto";
import { UploadImage } from "../../../domain/image/dto/uploadImage.dto";
import { UploadAdapter } from "../../../infrac/cloundinary/uploadAdapter";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const createPost = async (req, res) => {
    try {
        const { authorId, content, fee, images } = req.body;
        const post = await Post.createPost(new CreatePost(authorId, content, fee, images.length, 0));
        if (post != null) {
            for (let i = 0; i < req.body.images.length; i++) {
                const fileStrImage = req.body.images[i].image;
                if (fileStrImage !== '') {
                    const uploadResponseImage = await UploadAdapter.uploadImage(fileStrImage)
                    let url = uploadResponseImage.public_id;
                    await Image.uploadImage(new UploadImage(post._id, url, i))
                }
            }
        }
        res.status(200).send(post);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};
export default createPost;