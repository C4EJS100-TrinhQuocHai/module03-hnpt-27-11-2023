const checkAdmin = (req, res, next) => {
    // lấy data ở trên db về
    // kiểm tra role của user xem có phải là admin hay không
    const role = "ADMIN";
    if (role === "ADMIN") {
        next();
    } else {
        res.send("bạn không có quyền truy cập");
    }
}
module.exports=checkAdmin;