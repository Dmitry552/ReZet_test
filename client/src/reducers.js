import {combineReducers} from 'redux';
import AppCart from './modules/CartList/reducer';
import Form from './modules/Shipping/redecer';

export default combineReducers({
  AppCart,
  Form
});