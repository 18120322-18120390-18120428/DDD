import express from "express";
import scheduleControllers from "./controllers";
const userRoutes = express.Router();

//======================== GET ========================
userRoutes.get("/login", scheduleControllers.getSchedule);

//======================== POST ========================
userRoutes.post("/", scheduleControllers.scheduleReservationAvailability);
//======================== PUT ========================
//======================== DELETE ========================

export default userRoutes;
