import { combineReducers } from 'redux'
import productsReducer from './products-reducer'
import cartItemsReducer from './cart-items-reducer'
import notificationReducer from './notification-reducer'
import modalReducer from './modal-reducer'

export default combineReducers({
  products: productsReducer,
  cartItems: cartItemsReducer,
  hasNewNotification: notificationReducer,
  modal: modalReducer,
})
