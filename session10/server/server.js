const express =require ("express");
const router = require("./routers/user.routes");
const dotenv= require("dotenv");
const app= express();
dotenv.config();
const PORT= 8080;

app.use("/",router);
app.listen(PORT,()=>{
    console.log(`server đang lắng nghe http://localhost:${PORT}`);
})
