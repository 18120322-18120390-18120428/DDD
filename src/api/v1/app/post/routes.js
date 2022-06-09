import express from "express";
import postControllers from "./controllers";
const postRoutes = express.Router();
//======================== GET ========================
postRoutes.get("/post-id",postControllers.getPostById);
postRoutes.get("/author-id", postControllers.getPostByAuthorId);
//======================== POST ========================
postRoutes.post("/create-post",postControllers.createPost);
//======================== PUT ========================
postRoutes.put("/", postControllers.updatePost);
//======================== DELETE ========================
postRoutes.delete("/post-id", postControllers.deletePostById);
postRoutes.delete("/author-id", postControllers.deletePostByAuthorId);
export default postRoutes;