import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import WalletService from "../../../domain/wallet/wallet.service";
import AddNewWallet from "../../../domain/wallet/dto/addNewWallet.dto";
import GetOneByHolderId from "../../../domain/wallet/dto/getOneByHolderId.dto";
import UpdateWallet from "../../../domain/Wallet/dto/updateWallet.dto";
const addWalletAddress = async (req, res) => {
  const { holderId, walletAddress } = req.body;
  try {
    const getOneByHolderId = new GetOneByHolderId(holderId);
    const foundHolderWallet = await WalletService.getOne(getOneByHolderId);
    console.log(foundHolderWallet);
    const updatedWallet = await WalletService.getOneByIdAndUpdate(holderId, { walletAddress: walletAddress });
    res.status(201).send(updatedWallet);

  } catch (error) {
    console.log(error)
    try {
      const addNewWallet = new AddNewWallet(holderId, walletAddress);
      const newWallet = await WalletService.addWalletAddress(addNewWallet);
      res.status(201).send(newWallet);
    } catch (error) {
      res.status(400).send(parseErrorIntoMessage(error));
    }
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default addWalletAddress;
