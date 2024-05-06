const mysql= require("mysql2");

const pool = mysql.createPool({
    database: process.env.DB_NAME_USER,
    host:process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    user:"root",
})
/* 
     host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    user:process.env.DB_USER,
 */
const database= pool.promise();
module.exports=database;