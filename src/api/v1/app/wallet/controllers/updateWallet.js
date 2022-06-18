import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import Walletervice from "../../../domain/Wallet/Wallet.service";
import UpdateWallet from "../../../domain/Wallet/dto/updateWallet.dto";
const updateWallet = async (req, res) => {
  try {
    const { _id, dataUpdate } = req.body;
    const { walletAddress } = dataUpdate;

    const updateWallet = new UpdateWallet();
    const keys = Object.keys(updateWallet);

    keys.forEach(key => {
      if (dataUpdate.key == null) {
        delete updateWallet[key];
      }
      else {
        updateWallet[key] = dataUpdate.key;
      }
    })

    const updatedWallet = await Walletervice.getOneByIdAndUpdate(_id, updateWallet);

    res.status(200).send(updatedWallet);
  } catch (error) {
    console.log(parseErrorIntoMessage(error));
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateWallet;
