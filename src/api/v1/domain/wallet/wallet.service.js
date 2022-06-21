import Wallet from "./wallet.entity";
import WalletDao from "../../infrac/repository/wallet/wallet.dao";



export default class WalletService {

    static addWalletAddress = async (walletInfo) => {
        try {
            const savedWallet = await new WalletDao().save(walletInfo);
            if (savedWallet == null) {
                throw new Error('Wallet is not exist');
            }

            return Wallet.mappingFromWalletRepository(savedWallet);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Add wallet address failed: ${err.message}`);
        }
    }



    static getOne = async (getOne) => {
        try {
            const foundWallet = await new WalletDao().findOne(getOne);
            if (foundWallet == null) {
                throw new Error('Wallet is not exist');
            }

            return Wallet.mappingFromWalletRepository(foundWallet);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Get wallet addressfailed: ${err.message}`);
        }
    }

    static getOneByIdAndUpdate = async (_id, updateWallet) => {
        try {
            console.log(_id, updateWallet);
            const updatedWallet = await new WalletDao().getOneAndUpdate({ holderId: _id }, updateWallet);

            return Wallet.mappingFromWalletRepository(updatedWallet);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Update Wallet failed: ${err.message}`);
        }
    }
}