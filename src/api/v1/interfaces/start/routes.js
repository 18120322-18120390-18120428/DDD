import verifyToken from "../middlewares/verifyToken";
import imageRoutes from "../../app/image/routes";
import postRoutes from "../../app/post/routes";
import userRoutes from "../../app/user/routes";
import walletRoutes from "../../app/wallet/routes";
import subscribeRoutes from "../../app/subscribe/routes";

const startRoutes = (app) => {
  // routes
  app.use("/post", postRoutes);
  app.use("image", imageRoutes);
  app.use("/user", userRoutes);
  app.use("/wallet", walletRoutes);
  app.use("/subscribe", subscribeRoutes);
  //404
  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  //500 - Error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
      message: err.message,
      status: err.status || 500,
    });
  });
};

export default startRoutes;
