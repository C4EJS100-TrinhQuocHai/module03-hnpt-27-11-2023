const express= require("express");
const app=express();
const port=8080;
app.set("view engine","ejs");

let text="bình tommy";
let address="hà nội";
let users=[
    {
        name:"minh thu",
        address:"hà nội",
        email:"thu@gmail.com"
    },
    {
        name: "nam phong",
        address: "hà giang",
        email: "phong@gmail.com"
    },
    {
        name: "hồng vân",
        address: "ninh bình",
        email: "van@gmail.com"
    }

]
const server= app.get("/home",(req,res)=>{
    // res.send("hello");
    res.render("index",{text,address,users})
})

server.listen(port,(req,res)=>{

})