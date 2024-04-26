// cách 1 tạo class
//  class UserController{
//     constructor(){

//     }
//     // những cái hàm 
//     // lấy tất cả user
//     getAllUser(){

//     }
//     // lấy 1 user theo id
//     getOneUser(){

//     }
//  }
//  let user= new UserController().getAllUser
//  module.exports=UserController
// cách 2: tạo các function 
// function lấy tất cả các user
// const database= require("../connection/connectionMysql");
const userService= require("../service/user.service");
 async function  getAllUser(req,res) {
    const users= await userService.getAllUser()
    // res.status(200).json({
    //     data:users
    // })
    console.log(111111,users);
    res.send("ok");
}
module.exports={
    getAllUser,
}
