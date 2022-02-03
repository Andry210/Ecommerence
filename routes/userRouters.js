const express = require('express')
const router = express.Router()
const UserController = require('./../controllers/UserController') 
const authController = require('./../controllers/authController')

router
.route('/signup')
.post(authController.signup)

router
.route('/login')
.post(authController.login)
router
.route('/')
.get(UserController.getAllUsers)
.post(UserController.CreateUser)


router
.route('/:id')
.get(UserController.getUser)
.patch(UserController.UpdateUser)
.delete(authController.protectTo,
    authController.restrictTo('admin'),
    UserController.DeleteUser)

module.exports = router;