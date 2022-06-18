import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import SubscribeService from "../../../domain/subscribe/subscribe.service";
import AddNewSubscriber from "../../../domain/subscribe/dto/addNewSubscriber.dto";

const addNewSubscriber = async (req, res) => {
  const { subscriberId, idolId, feeSubscribe, expiredTime, subScriberWalletAddress, idolWalletAddress } = req.body;
  try {
    const addNewSubscriber = new AddNewSubscriber(subscriberId, idolId, feeSubscribe, expiredTime, subScriberWalletAddress, idolWalletAddress);
    const newSubscribe = await SubscribeService.addNewSubscribe(addNewSubscriber);

    res.status(201).send(newSubscribe);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default addNewSubscriber;
