import userRoutes from "../../app/user/router";
import scheduleRoutes from "../../app/schedule/routes";
import bookingRoutes from "../../app/booking/routes";
import verifyToken from "../middlewares/verifyToken";

const startRoutes = (app) => {
  // routes
  app.use("/user", userRoutes);
  app.use("/schedule", verifyToken, scheduleRoutes);
  app.use("/booking", verifyToken, bookingRoutes);

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
