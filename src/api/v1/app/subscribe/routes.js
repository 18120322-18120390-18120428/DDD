import express from "express";
import subscribeControllers from "./controllers";
const subscribeRoutes = express.Router();
//======================== GET ========================
subscribeRoutes.get("/is-subscribe",subscribeControllers.getOne);

//======================== subscribe ========================
subscribeRoutes.post("/add-new-subscriber",subscribeControllers.addNewSubscriber);
//======================== PUT ========================

//======================== DELETE ========================

export default subscribeRoutes;