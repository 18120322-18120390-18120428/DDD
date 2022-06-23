import express from "express";
import verifyToken from "../../interfaces/middlewares/verifyToken";
import userControllers from "./controllers";
const userRoutes = express.Router();

//======================== GET ========================
userRoutes.get("/get-all", userControllers.getUsers);
userRoutes.get("/get-info", verifyToken, userControllers.getInfo);
userRoutes.get("/get-user", userControllers.getUserByNickName);

//======================== POST ========================
userRoutes.post("/register", userControllers.register);
userRoutes.post("/login", userControllers.login);
userRoutes.post("/refresh-token", userControllers.refreshToken);
userRoutes.post("/search", userControllers.searchUser);

//======================== PUT ========================
userRoutes.put("/update", userControllers.updateUser);

//======================== DELETE ========================

export default userRoutes;
