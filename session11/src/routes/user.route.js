const express = require("express");
const database = require("../configs/db.config");
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");
const userRouter = express.Router();
// tạo api lấy hết tất cả danh sách các user
userRouter.get("/api/v1/users", (req, res) => {
    userController.getAllUser(req, res)
});

userRouter.get("/api/v1/users/:id", (req, res) => {
    userController.getOneUser(req, res)
});

userRouter.post("/api/v1/login", (req, res) => {
    authController.login(req, res)
});

userRouter.post("/api/v1/register", (req, res) => {
    authController.register(req, res)
});

module.exports = userRouter;