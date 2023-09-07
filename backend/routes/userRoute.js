const express = require("express");
const {
  loginController,
  logoutController,
  getUser,
  myProfile,
  contact,
  updateUser,
  addTimeline,
  addAchivements,
  addProject,
  deleteTimeline,
  deleteProject,
  deleteAchivement,
} = require("../controller/userController");
const { isAuthenticated } = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/login", loginController);
userRouter.get("/logout", logoutController);
userRouter.get("/users", getUser);
userRouter.get("/me", isAuthenticated, myProfile);
userRouter.put("/admin/update", isAuthenticated, updateUser);
userRouter.post("/admin/timeline/add", isAuthenticated, addTimeline);
userRouter.post("/admin/achivements/add", isAuthenticated, addAchivements);
userRouter.post("/admin/projects/add", isAuthenticated, addProject);

userRouter.delete("/admin/timeline/:id", isAuthenticated, deleteTimeline);
userRouter.delete("/admin/project/:id", isAuthenticated, deleteProject);
userRouter.delete("/admin/achivements/:id", isAuthenticated, deleteAchivement);

userRouter.post("/contact", contact);

module.exports = { userRouter };
