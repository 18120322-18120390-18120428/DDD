import { Image } from "../../../domain/image/image.entity";
import { QueryImageById } from "../../../domain/image/dto/queryImageById.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const deletePostById = async (req, res) => {
    try {
        res.status(200).send();
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};
export default deletePostById;