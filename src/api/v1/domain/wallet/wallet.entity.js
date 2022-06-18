export default class Wallet {
    constructor(id, holderId, walletAddress) {
        this._id = id;
        this.holderId = holderId;
        this.walletAddress = walletAddress;
    }

    static mappingFromWalletRepository = (walletRepo) => {
        const wallet = new Wallet();

        const keys = Object.keys(wallet);

        keys.forEach(key => {
            wallet[key] = walletRepo[key];
        })

        return wallet;
    }
}
