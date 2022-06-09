import express from "express";
import imageControllers from "./controllers";
const imageRoutes = express.Router();
//======================== GET ========================
imageRoutes.get("/image-id",imageControllers.getImageById);
imageRoutes.get("/post-id", imageControllers.getImageByPostId);
//======================== POST ========================
//======================== PUT ========================
//======================== DELETE ========================

export default imageRoutes;