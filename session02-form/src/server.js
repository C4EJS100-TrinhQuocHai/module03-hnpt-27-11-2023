var http = require("http");
var url  = require ("url")
// tải thư viện http có sẵn trong nodejs
var port = 8081;
var domain = "http://localhost:8081/hellorikkei-academy?username=binh&email=binh@gmail.com";
var q= url.parse(domain,true);
console.log("qqqqq",q);
// lấy tên
var userName= q.query.username;
console.log("userName",userName);
var server = http.createServer(function (req, res) {
    console.log(22222, req);
    console.log("1111111", req.url);
    res.write("<h1>nodejs basic1111</h1>");
    res.end();// kết thúc việc gọi server
})
server.listen(port, function (params) {
    console.log(`server đang gọi trên port : http://localhost:${port}`);
})
