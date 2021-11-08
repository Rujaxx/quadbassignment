const User = require('../models/User')

// @desc      register
// @route     POST /register
// @access    Public
exports.register = async(req,res,next) => {
    const { user_name,user_email,user_password } = req.body

    //Create User
    const user = await User.create({ 
        user_name,
        user_email,
        user_password  
    });

    res.status(201).json({ success: true, message : "User created successfully"})
}

