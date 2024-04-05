var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var app = express();
const port = 8080;

// xác định định dạng dữ liệu dạng application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// xác định định dạng dữ liệu dạng json application/json
app.use(bodyParser.json());
// lấy tất cả users
const server = app.get("/api/v1/users", (req, res) => {
    // console.log("server trả dữ liệu");
    const getData = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    // getData vẫn là định dạng JSON 
    // tiến hành parse dữ liệu về dạng object

    res.send(getData);
})
app.get("/api/v1/users/:id", (req, res) => {
    // console.log("11111",req.params);
    const { id } = req.params;
    /* 
        đầu tiên phải đọc được file db.json
        dùng hàm find  lọc theo id
     */
    const getData = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    const response = getData.users.find((user) => {
        return user.id == id
    })
    // trả về
    res.send(response);
})
// thêm user 
app.post("/api/v1/users", (req, res) => {
    // lấy thông tin user
    // thêm vào file db.json
    const dataUser = req.body;
    const getData = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    getData.users.push(dataUser);
    fs.writeFileSync("./data/db.json", JSON.stringify(getData))
    return res.status(201).json({
        message: "thêm dữ liệu thành công!",
    })
    /* 
        Các bước làm để thêm 
        1.đọc file db.json
        2. push thông tin user vào file vừa đọc
        3. dùng writeFileSyn để ghi đè file cũ
     */
})
// xóa user
app.delete("/api/v1/users/:id", (req, res) => {
    const { id } = req.params;
    const getData = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    const response = getData.users.filter((user) => {
        return user.id != id;
    })
    // ghi đè dữ liệu lên file db.json
    fs.writeFileSync("./data/db.json", JSON.stringify(response));
    return res.status(200).json({
        message: "xóa dữ liệu thành công!"
    })
})
// update tất cả
app.put("/api/v1/users/:id", (req, res) => {
    // lấy id
    const { id } = req.params;
    const dataUpdate = req.body;
    const getData = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
   // tìm vị trí
   let index= getData.users.findIndex((user)=>{
        return user.id==id
   });
   getData.users[index]=dataUpdate;
    fs.writeFileSync("./data/db.json", JSON.stringify(getData));
    return res.status(200).json({
        message: "cập nhật thành công!"
    })
})
// update 1 trường (field)
app.patch("/api/v1/users/:id", (req, res) => {
    // lấy id
    const { id } = req.params;
    const dataUpdate = req.body;
    const getData = JSON.parse(fs.readFileSync("./data/db.json", "utf-8"));
    // tìm vị trí
    let index = getData.users.findIndex((user) => {
        return user.id == id
    });
    const newData = { ...getData.users[index], ...dataUpdate };
    /* 
    dataUpdate={
        "name":"thái hà",
        "address": "sơn la",
    }
        {
            "name": "thái hà",
             "id": 68, 
             "address": "đà nẵng",
              "name": "thái hà",
              "address": "sơn la"

           
        }
    */
    getData.users[index]=newData;
    fs.writeFileSync("./data/db.json", JSON.stringify(getData));
    return res.status(200).json({
        message: "cập nhật thành công!"
    })
})
server.listen(port, () => {
    console.log("đang gọi server");
})
