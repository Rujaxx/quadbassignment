const User = require('../models/User')

// @desc      get all user
// @route     GET /
// @access    Public
exports.getAll = async(req,res,next) => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] } 
    })

    res.status(201).json({ success : true, data : users})
}

// @desc      get single user
// @route     GET /details
// @access    Public
exports.getUser = async(req,res,next) => {
    const user = await User.findOne({
        where: {
            user_id: req.params.id
          }
    })

    res.status(201).json({ success : true, data : user})
}