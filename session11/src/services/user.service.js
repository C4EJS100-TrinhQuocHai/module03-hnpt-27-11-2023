// nơi tương tác với database
// function lấy hết user
const database = require("../configs/db.config");
// function lấy tất cả user
async function getAllUser() {
    const query = "select * from user";
    let result = await database.execute(query);
    return result[0];
}
// lấy 1 user thì làm như thế nào? 
//
async function getOneUser(id) {
    const query = `select * from user where id = ${id}`;
    let result = await database.execute(query);
    return result[0];
}
module.exports = {
    getAllUser,
    getOneUser
}