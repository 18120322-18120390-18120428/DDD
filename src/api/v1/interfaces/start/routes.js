// import tutorRoutes from "../components/tutor/routes";
// import userRoutes from "../components/users/routes";
import verifyToken from "../middlewares/verifyToken";
import imageRoutes from "../../app/image/routes";
import postRoutes from "../../app/post/routes";
import userRoutes from "../../app/user/router";
const startRoutes = (app) => {
  // routes
  app.use("/post", postRoutes);
  app.use("image", imageRoutes);
  app.use("/user", userRoutes);
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
