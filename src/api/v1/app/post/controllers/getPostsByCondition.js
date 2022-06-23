import { Post } from "../../../domain/post/post.entity";
import GetPostsByCondition from "../../../domain/post/dto/getPostsByCondition.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const getPostsByCondition = async (req, res) => {
  try {
    const query = req.query;
    const { number, page } = query;

    const getPostsByCondition = new GetPostsByCondition(Number(number), Number(page));
    const listPosts = await Post.getPostsByCondition(getPostsByCondition);

    res.status(200).send(listPosts);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getPostsByCondition;
