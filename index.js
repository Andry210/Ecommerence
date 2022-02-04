const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const ProductsRouter  = require('./routes/RouteProducts')
const UserRouter = require('./routes/userRouters')
const stripeRoute = require("./routes/stripe");
const cartRoute = require('./routes/CartRoute')
const cors = require('cors');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/photos', express.static(__dirname + '/public/photos'));
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });


app.use('/api/v1/products',ProductsRouter);
app.use('/api/v1/users',UserRouter)
app.use('/api/v1/checkout',stripeRoute);
app.use('/api/v1/carts',cartRoute)

app.use(express.static(path.join(__dirname, "/front-end/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front-end/build', 'index.html'));
});

app.listen(process.env.PORT || 8000,() =>{
    console.log(`Backend is running`)
})