import { 
  CHANGE_QUANTITY,
 } from '../actionsType';

export var increase_product = (id) => (dispatch, getState) => {
  let Col = Number(getState().AppCart.number.find(e => e.id === id).col) + 1;
  let value = String(Col);
  if(value > 50) value = 50;
  return dispatch({type: CHANGE_QUANTITY, paiload: {id:id, col:value}});
}

export let decrease_product = (id) => (dispatch, getState) => {
  let Col = Number(getState().AppCart.number.find(e => e.id === id).col) - 1;
  let value = String(Col);
  if(value <= 0) value = 1;
  return dispatch({type: CHANGE_QUANTITY, paiload: {id:id, col:value}});
}

export let colChange = (value, id) => (dispatch) => {
  if(value > 50) value = 50;
  if(value <= 0) value = 1;
  return dispatch({type: CHANGE_QUANTITY, paiload: {id:id, col:value}});
}

