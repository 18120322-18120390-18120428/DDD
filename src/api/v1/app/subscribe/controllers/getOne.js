import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import SubscribeService  from "../../../domain/subscribe/subscribe.service";
import GetOne from "../../../domain/subscribe/dto/getOne.dto";

const getOne = async (req, res) => {
  const { subscriberId, idolId } = req.query;

  try {
    const getOne = new GetOne(subscriberId, idolId);
    const foundSubscribe = await SubscribeService.getOne(getOne);

    res.status(200).send({
      subscribe: foundSubscribe,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getOne;
