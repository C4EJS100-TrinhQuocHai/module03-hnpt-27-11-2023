var express = require("express");
var router = express.Router();
router.get("/",(req, res) => {
    // res.write('Hello World222!');
    // res.write('Hello World111!');
    res.send("lấy tất cả user");
})
router.post('/', (req, res) => {
    // res.write('Hello World222!');
    // res.write('Hello World111!');
    console.log("req", req.body);
    // let userId = req.params.idUser;
    // console.log("22222",userId);
    // có thể dùng destructoring để lấy giá trị
    const { idUser } = req.params;
    console.log(idUser);
    res.send("thêm mới user");
})

module.exports = router
// module.exports = {router}

/* 
    export default router
 */