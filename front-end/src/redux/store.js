import {configureStore} from '@reduxjs/toolkit'
import CartReducer from  './CartRedux'
import UserReducer from './userRedux'
import RegisterUserReducer from './RegisterRedux'
export default configureStore({
  reducer : {
    cart : CartReducer,
    user : UserReducer,
    registeruser : RegisterUserReducer,

  }
})
