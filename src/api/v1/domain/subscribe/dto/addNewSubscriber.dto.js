export default class AddNewSubscribe {
    constructor( subscriberId, idolId, feeSubscribe, expiredTime, subScriberWalletAddress, idolWalletAddress) {
        this.subscriberId = subscriberId;
        this.idolId = idolId;
        this.feeSubscribe = feeSubscribe;
        this.expiredTime = expiredTime;
        this.subScriberWalletAddress = subScriberWalletAddress;
        this.idolWalletAddress = idolWalletAddress;
    }
}