import { Image } from "../../../domain/image/image.entity";
import { QueryImageById } from "../../../domain/image/dto/queryImageById.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const getImageById = async (req, res) => {
    const {id} = req.query;
    try {
        const image = await Image.getImageById(new QueryImageById(id))
        res.status(200).send(image);
    } catch (error) {
        res.status(400).send(parseErrorIntoMessage(error));
    }
};
export default getImageById;