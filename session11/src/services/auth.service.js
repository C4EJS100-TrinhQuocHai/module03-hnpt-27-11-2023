const database = require("../configs/db.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
async function register(data) {
    const { username, password, role, email } = data;
    // trước khi thêm vào database thì phải mã hóa mật khẩu của user đi
    // để mã hóa dùng thư viện bcrypt
    bcrypt.hash(password,10, async (err,hashPassword)=>{
        // console.log("mã mật khẩu sau khi được mã hóa",hashPassword);
        if(err){
        }else{
            const query = `INSERT INTO user (username, password, role, email) 
                VALUES ('${username}', '${hashPassword}', '${role}', '${email}')`;
            let result = await database.execute(query);
            if (result) {
                return result[0].insertId;
            }
            return false;
        }
    })
}
async function login(email, password) {
    const query = `SELECT * FROM user WHERE email = '${email}'`;
    let result = await database.execute(query);
    const user = result[0][0];
    if (user) {
         console.log("3333333",user);
        // console.log("mật khẩu khi login",password);
        // lấy thông tin của user ra rồi
        /* 
            tiến hành lấy mật khẩu người dùng login đi so  sánh với
            mật khẩu đã được mã hóa (nhờ bcrypt) ở trong database
            - để giải mã dùng hàm compare
         */
      let mk=  bcrypt.compare(password,user.password)
        mk.then((result)=>{
             console.log("kết quả sau khi so sánh mật khẩu", result);
            if(result){
                // tạo jwt cho user
                // không nên gửi mật khẩu về 
                const token = jwt.sign({
                    id: user.id,
                    username: user.username,
                    role: user.role,
                },
                    "secret", { expiresIn: "1h" }
                );
                console.log(11111,token);
                return {
                    token,
                };
            }else{
                console.log("tài khoản không hợp lệ!");
            }
        }).catch((err)=>{
            console.log(err);
        })
    }else{
        console.log("user không tồn tại!");
        return null;
    }
}
module.exports = {
    login,
    register,
};