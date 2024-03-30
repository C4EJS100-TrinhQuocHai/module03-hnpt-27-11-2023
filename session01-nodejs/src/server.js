// console.log("hello nodejs");

// alert("xin chào nodejs");
var http = require('http');// cú pháp ES5
var fs = require('fs');
// import http from "http"
var port = 8080;
var server = http.createServer(function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    let dataUser=[
        {
            userId:1,
            name:"hoa",
            address: "hà nội"

        },
        {
            userId: 2,
            name: "minh thu",
            address:"sài gòn"
        },
        {
            userId: 3,
            name: "linh",
            address: "hà nội"

        }
    ]
    let html="";
    dataUser.forEach((item,index)=>{
        html+=
        `
             <tr>
                <td>${index+1}</td>
                <td>${item.name}</td>
                <td>${item.address} </td>
            </tr>
        `
    })
    console.log("11111",html);
  let file1=fs.readFileSync("test.html","utf-8")
    file1= file1.replace("&binh",html)
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.end(file1);
})
server.listen(8080, function name(params) {
    console.log(`gọi server ở port : http://localhost:${port}`);
})
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8080);