// nơi tương tác với database
// function lấy hết user
const database = require("../connection/connectionMysql");
// function lấy tất cả user
async function getAllUser() {
    const query = "select * from user";
    let result = await database.execute(query);
    // database.execute("CREATE DATABASE users")
    // console.log(222,result);
    // console.log("22222222");
    return result[0];
}
// lấy 1 user thì làm như thế nào? 
//
module.exports={
    getAllUser,
}