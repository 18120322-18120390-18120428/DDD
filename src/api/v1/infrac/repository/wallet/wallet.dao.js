import Wallet from "./wallet.do";

export default class WalletDao {
  save = async (data) => {
    const user = new Wallet(data);
    await user.save();
    return user;
  }

  findById = async (id) => {
    return await Wallet.findOne({ _id: id });
  }

  findOne = async (filter) => {
    const foundWallet = await Wallet.findOne(filter);
    return foundWallet;
  }

  queryByCondition = async (number = 0, page = 0, filter = {}) => {
    const listWallets = await Wallet.find(filter).limit(number).skip(page);

    return listWallets;
  }

  getOneAndUpdate = async (filter, update) => {
    const updatedWallet = await Wallet.findOneAndUpdate(filter, update);

    return updatedWallet;
  }
}