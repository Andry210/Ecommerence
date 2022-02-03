const express = require('express')
const router = express.Router();
const app = express();
const ProductsController = require('../controllers/ProductsController')
const authController = require('./../controllers/authController')
app.use('/photos', express.static(__dirname + '../public/photos'));

router
.route('/')
.get(ProductsController.getProducts)
.post(ProductsController.createProduct)


router
.route('/:id')
.get(ProductsController.getProduct)
.patch(ProductsController.updateProduct)
.delete(ProductsController.deleteProduct)

module.exports = router;