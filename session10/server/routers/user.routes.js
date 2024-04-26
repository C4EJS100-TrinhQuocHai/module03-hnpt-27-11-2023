const express= require("express");
const database= require("../connection/connectionMysql");
const userController= require("../controllers/user.controller");
const userRouter= express.Router();
// tạo api lấy hết tất cả danh sách các user
userRouter.get("/api/v1/users",(req,res)=>{
    userController.getAllUser(req,res)
});

module.exports=userRouter;