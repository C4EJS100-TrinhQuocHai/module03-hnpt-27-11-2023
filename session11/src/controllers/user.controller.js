const userService = require("../services/user.service");
async function getAllUser(req, res) {
    const users = await userService.getAllUser()
    res.status(200).json({
        data: users
    })

}

async function getOneUser(req, res) {
    const { id } = req.params
    const user = await userService.getOneUser(id)
    res.status(200).json({
        data: user
    })
}
module.exports = {
    getAllUser,
    getOneUser
}