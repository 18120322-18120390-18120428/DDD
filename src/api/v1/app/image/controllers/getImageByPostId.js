import { Image } from "../../../domain/image/image.entity";
import { QueryImageByPostId } from "../../../domain/image/dto/queryImageByPostId.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const getImageByPostId = async (req, res) => {
    const {postId} = req.query;
    try {
        const images = await Image.getImageByPostId(new QueryImageByPostId(postId));
        res.status(200).send(images);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};
export default getImageByPostId;