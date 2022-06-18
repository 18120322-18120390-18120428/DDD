export default class Subscribe {
    constructor(id, subscriberId, idolId, feeSubscribe, expiredTime, subScriberWalletAddress, idolWalletAddress) {
        this._id = id;
        this.subscriberId = subscriberId;
        this.idolId = idolId;
        this.feeSubscribe = feeSubscribe;
        this.expiredTime = expiredTime;
        this.subScriberWalletAddress = subScriberWalletAddress;
        this.idolWalletAddress = idolWalletAddress;

    }

    static mappingFromSubscribeRepository = (subscribeRepo) => {
        const subscribe = new Subscribe();

        const keys = Object.keys(subscribe);

        keys.forEach(key => {
            subscribe[key] = subscribeRepo[key];
        })

        return subscribe;
    }
}
