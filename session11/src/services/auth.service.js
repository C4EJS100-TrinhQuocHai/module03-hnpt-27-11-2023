const database = require("../configs/db.config");
const jwt = require("jsonwebtoken");

async function register(data) {
    const { username, password, role, email } = data;
    const query = `INSERT INTO user (username, password, role, email) 
  VALUES ('${username}', '${password}', '${role}', '${email}')`;
    let result = await database.execute(query);
    if (result) {
        return result[0].insertId;
    }

    return false;
}

async function login(username, password) {
    const query = `SELECT * FROM user WHERE username = '${username}' AND password = '${password}'`;
    let result = await database.execute(query);
    const user = result[0][0];
    if (user) {
        const token = jwt.sign({
                id: user.id,
                username: user.username,
                role: user.role,
            },
            "secret", { expiresIn: "1h" }
        );
        return {
            token,
        };
    }
    return null;
}

module.exports = {
    login,
    register,
};