const User = requier('../models/User')
const Note = require('../models/Note')
const asyncHandler = require('express-async-handler')

// @desc Get All Users
// @route GET /users
// @access Prvate

const getAllUsers = asyncHandler(async (req, res) => {

})

// @desc Create User
// @route POST /users
// @access Prvate

const createNewUser = asyncHandler(async (req, res) => {

})

// @desc Upate User
// @route PATCH /users
// @access Prvate

const updateUser = asyncHandler(async (req, res) => {

})

// @desc Delete User
// @route DELETE /users
// @access Prvate

const deleteUser = asyncHandler(async (req, res) => {

})


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}

