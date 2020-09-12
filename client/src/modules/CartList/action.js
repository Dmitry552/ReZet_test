import {
  APP_CART,
  DELETE_ITEM,
  TOTAL
} from '../actionsType';

export var Total = () => (dispatch, getState) => {
  let total = 0, total_;
  let cart = getState().AppCart.app_cart;
  let col = getState().AppCart.number;
  cart.forEach((e)=>{
    total_= Number(col.find((g)=> g.id === e.id).col) * Number(e.price);
    total = total + total_;
    return total.toFixed(2)
  })
  return dispatch({type: TOTAL, paiload: total});
}

export var addCart = (cart)  => (dispatch) => {
  let number = cart.map((e)=>{
    return {id: e.id, col: '1'}
  })
  return dispatch({
    type: APP_CART, 
    paiload: { cart, number }
  });
}

export var delet = (id) => (dispatch, getState) => {
  let cart = getState().AppCart.app_cart;
  let number = getState().AppCart.number;
  cart.splice(cart.findIndex((item) => item.id === id), 1);
  number.splice(number.findIndex((item) => item.id === id), 1);
  return dispatch({type: DELETE_ITEM, paiload: { cart,  number }});
}

