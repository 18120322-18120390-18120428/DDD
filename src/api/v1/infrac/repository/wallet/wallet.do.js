import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    holderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    walletAddress: {
        type: String,
        required: true
    }
})
const Wallet = mongoose.model('Wallet', walletSchema);
export default Wallet;