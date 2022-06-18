import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema(
    {
        subscriberId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        idolId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        feeSubscribe: {
            type: Number,
            enum: [0, 10],
            default: 0,
        },
        expiredTime: {
            type: Date,
        },
        subScriberWalletAddress:{
            type: String,
        },
        idolWalletAddress:{
            type: String,
        }
    }
);



const Subscribe = mongoose.model("Subscribe", subscribeSchema);
export default Subscribe;
