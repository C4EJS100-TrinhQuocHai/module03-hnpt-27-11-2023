const authService = require("../services/auth.service");

async function login(req, res) {
    const { username, password } = req.body;
    const user = await authService.login(username, password);
    console.log(user, 'user');
    res.status(200).json({
        data: user
    })
}

async function register(req, res) {
    const data = req.body;
    const user = await authService.register(data);
    res.status(200).json({
        message: 'Create new user success with ID: ' + user,
    })
}
module.exports = {
    login,
    register
}