import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import WalletService from "../../../domain/wallet/wallet.service";
import AddNewWallet from "../../../domain/wallet/dto/addNewWallet.dto";

const addWalletAddress = async (req, res) => {
  const { holderId, walletAddress } = req.body;
  try {
    const addNewWallet = new AddNewWallet(holderId, walletAddress);
    const newWallet = await WalletService.addWalletAddress(addNewWallet);

    res.status(201).send(newWallet);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default addWalletAddress;
