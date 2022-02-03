const express = require('express')
const router = express.Router()
const CartController = require('./../controllers/CartController')

router
.route('/')
.post(CartController.CreateCart)
.get(CartController.getAllCart)


router.route('/:id')

module.exports = router;