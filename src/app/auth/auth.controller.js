const authservice = require('./auth.service')

const login = async (req, res) => {
  try {
    let { email, password } = req.body
    let token = await authservice.login(email, password)
    res.status(201).json({
      message: "user login successfully",
      data: token
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
      success: false
    })
  }
}
module.exports = { login }