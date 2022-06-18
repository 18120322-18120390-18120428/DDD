import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/wallet/wallet.service";
import GetOneByHolderId from "../../../domain/wallet/dto/getOneByHolderId.dto";

const getOneByHolderId = async (req, res) => {
  const { holderId } = req;

  try {
    const getOneByHolderId = new GetOneByHolderId(holderId);
    const foundHolderWallet = await UserService.getOne(getOneByHolderId);

    res.status(200).send({
      wallet: foundHolderWallet,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getOneByHolderId;
