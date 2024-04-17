const express= require("express");
const checkAdmin= require("../middleware/checkAdmin")
const app= express();
const port=8080;

// function kiểm tra xem có phải là admin hay không

const server=app.get("/admin",checkAdmin,(req,res,next)=>{
    res.send("đi làm tính năng của admin!")
}
)
/* 
    middleware : phần mềm trung gian
    chỉ là những cái hàm hay còn gọi là function
    ứng dụng: mình có kiểm tra xem user đã đăng nhập hay chưa
    hoặc kiểm tra (phân quyền): role: user có chức năng gì, admin có chức năng gì
    trong 1 đường dẫn (routing) thì có nhiều middleware
 */
server.listen(port,()=>{
    console.log(`server đang lắng nghe trên cổng http://localhoast:${port}`);
})