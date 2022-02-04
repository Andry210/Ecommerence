import React, { useState } from 'react'
import Nav from './components/Nav'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Mens from './Pages/Mens'
import Productdetail from './Pages/Productdetail'
import MenHoodies from './Pages/MenHoodies'
import Products from './Pages/Products'
import Womens from './Pages/Womens'
import Register from './Pages/Register'
import MenTshirts from './Pages/MenTshirts'
import MenShirt from './Pages/MenShirts'
import WomenHoodies from './Pages/WomenHoodies'
import WomenTshirts from './Pages/WomenTshirts'
import WomenSweaters from './Pages/WomenSweaters'
import Success from './Pages/Success'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
import DiscountProducts from './Pages/DiscountProducts'

const App = () => {

  const user = useSelector((state) =>state.user.currentUser)
  const registeruser = useSelector((state) =>state.registeruser.currentUser)

  return (
      <Router>
        <Nav/>
          <Switch>
          <Route exact  path ="/">
            <Home/>
          </Route>
          <Route   path ="/products">
            <Products/>
          </Route>
          <Route   path ="/men-categories">
            <Mens/>
          </Route>
          <Route   path ="/mT-shirts">
            <MenTshirts/>
          </Route>
          <Route   path ="/mHoodies">
            <MenHoodies/>
          </Route>
          <Route   path ="/mShirts">
            <MenShirt/>
          </Route>

          <Route  path ="/women-categories">
            <Womens/>
          </Route>
          <Route  path ="/wSweater">
            <WomenSweaters/>
          </Route>
          <Route  path ="/wHoodies">
            <WomenHoodies/>
          </Route>
          <Route  path ="/wT-shirts">
            <WomenTshirts/>
          </Route>
          <Route  path ="/products">
            <Products/>
          </Route>
         
          <Route  path ="/cart">
          {
          user || registeruser ? <Cart/> : <Login/>
          }
            </Route>
          <Route  path ="/product/:id">
          {
          user || registeruser ?  <Productdetail/> : <Login/>
          }
           
          </Route>
          <Route  path ="/discount">
            <DiscountProducts/>
          </Route>
          <Route  path ="/success">
            <Success/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signin">
          <Register/>
          </Route>
        </Switch>
      <Footer/>
      </Router>
  )
}

export default App
