import { Post } from "../../../domain/post/post.entity";
import { QueryPostByAuthorId } from "../../../domain/post/dto/queryPostByAuthorId.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const getPostByAuthorId = async (req, res) => {
    try {
        const { authorId } = req.query;
        console.log(req.query)
        const posts = await Post.getPostByAuthorId(authorId);
        console.log(posts);
        res.status(200).send(posts);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};
export default getPostByAuthorId;