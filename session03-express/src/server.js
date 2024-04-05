const express = require('express');
var bodyParser = require('body-parser');
var router= require("../router/index.js")
const app = express();
// tạo ra một đối tượng app
// phân tích các yêu cầu có dạng parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// phân tích các yêu cầu parse application/json
app.use(bodyParser.json())
const port = 8080
// trong đối tượng app cung cấp các phương thức
// ví dụ lấy tất cả users
// lấy dữ liệu

//lấy 1 user thì làm như thế nào
//  tiêu chuẩn resful API
// thêm dữ liệu,lấy dữ liệu
console.log(111111,router);
app.use('/api/v1/users',router);
// xóa dữ liệu
app.delete('/api/v1/users/:idUser', (req, res) => {
    res.send("trả về 1 users");
})
// update put update hết các trường dữ liệU
/* 
     nếu đối tượng có 5 trường mà mình đi update 1 trường
     thì đối tượng còn 1 trường 4 trường kia mất
 */
app.put('/api/v1/users/:idUser', (req, res) => {
    res.send("trả về 1 users");
})
// update patch update trường mà mình cần update
// nếu đối tượng cần update có 5 trường mình đi update 1 trường thì
// 4 trường còn lại vẫn giữ nguyên
app.patch('/api/v1/users/:idUser', (req, res) => {
    res.send("trả về 1 users");
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})