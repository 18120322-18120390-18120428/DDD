import Subscribe from "./subscribe.entity";
import SubscribeDao from "../../infrac/repository/subscribe/subscribe.dao";



export default class SubscribeService {

    static addNewSubscribe = async (subscribeInfo) => {
        try {
            const savedSubscribe = await new SubscribeDao().save(subscribeInfo);
            if (savedSubscribe == null) {
                throw new Error('Subscribe is not exist');
            }

            return Subscribe.mappingFromSubscribeRepository(savedSubscribe);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Add Subscribe address failed: ${err.message}`);
        }
    }



    static getOne = async (getOne) => {
        try {
            const foundSubscribe = await new SubscribeDao().findOne(getOne);
            if (foundSubscribe == null) {
                throw new Error('Subscribe is not exist');
            }

            return Subscribe.mappingFromSubscribeRepository(foundSubscribe);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Get Subscribe addressfailed: ${err.message}`);
        }
    }

    static getOneByIdAndUpdate = async (_id, updateSubscribe) => {
        try {
            const updatedSubscribe = await new SubscribeDao().getOneAndUpdate({ _id }, updateSubscribe);

            return Subscribe.mappingFromSubscribeRepository(updatedSubscribe);
        }
        catch (err) {
            // Error handling logic should go here
            throw new Error(`Update Subscribe failed: ${err.message}`);
        }
    }
}