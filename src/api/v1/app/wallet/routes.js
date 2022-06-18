import express from "express";
import walletControllers from "./controllers";
const walletRoutes = express.Router();
//======================== GET ========================
walletRoutes.get("/holder-id",walletControllers.getOneByHolderId);

//======================== wallet ========================
walletRoutes.post("/add-new-wallet",walletControllers.addWalletAddress);
//======================== PUT ========================
walletRoutes.put("/update-wallet", walletControllers.updateWallet);
//======================== DELETE ========================

export default walletRoutes;