import {
  MAIL_INPUT,
  ENTER_ADDRESS,
  PHONE_INPUT,
  NAME_INPUT,
  VALID_EMAIL,
  VALID_NAME,
  VALID_ADDRESS,
  VALID_PHONE,
  SECTION_SELECTION,
  OPEN_CLOSE,
  PRIVILEGE,
  APP_KEY,
  CLEANING
} from '../actionsType';

import validator from 'validator';
import isEmail from 'validator/lib/isEmail'; 
import isMobilePhone from 'validator/lib/isMobilePhone';

let validColor = (e) => {
  if(e === 'Ok') {
    return '#49ff5f'; //Зеленый
  } else if (e === 'NoN'){
    return '#ff4949'; //Красный
  } else {
    return '#c0c0c0';} //Серый
}

export var inputEmail = (email) => (dispatch) => {
  return dispatch({type: MAIL_INPUT, paiload: email})
}

export var inputName = (name) => (dispatch) => {
  return dispatch({type: NAME_INPUT, paiload: name})
}

export var inputPhone = (phone) => (dispatch) => {
  return dispatch({type: PHONE_INPUT, paiload: phone})
}

export var enterAddress = (address) => (dispatch) => {
  return dispatch({type: ENTER_ADDRESS, paiload: address})
}

export var validEmail = (email) => (dispatch) => {
  let message;
  let valid_email = validator.isEmail(email) === true ? 'Ok' : 'NoN';
  if(valid_email === 'NoN') {
    message='Введите корректный E-mail!';
  } else { message=''};
  if(!email) { 
    message='' 
    valid_email='jn'
  };
  let color =  validColor(valid_email);
  return dispatch({type: VALID_EMAIL, paiload: {valid_email, message, color}})
}

export var validName = (name) => (dispatch) => {
  let message, text;
  if(name.length <= 2 || name.length > 10) {
    message='Имя должно быть в пределах от 2-ч до 10-ти символов!';
    text = 'NoN';
  } else {
    message='';
    text = 'Ok';
  }
  if(name === '') message='Заполните поле!';
  let color =  validColor(text);
  return dispatch({type: VALID_NAME, paiload: {text, message, color}})
}

export var validAddress = (address) => (dispatch) => {
  let message, text;
  if(address.length <= 10 || address.length > 100) {
    message='Введите корректный адресс!';
    text = 'NoN';
  } else {
    message='';
    text = 'Ok';
  }
  if(address === '') message='Заполните поле!';
  let color =  validColor(text);
  return dispatch({type: VALID_ADDRESS, paiload: {text, message, color}})
}

export var validPhone = (phone) => (dispatch) => {
  let message;
  let valid_phone = validator.isMobilePhone(phone) === true ? 'Ok' : 'NoN';
  if(valid_phone === 'NoN') {
    message='Номер не корректен!';
  } else { message=''};
  if(phone === '') {
    message=''
    valid_phone='nj'
  };
  let color =  validColor(valid_phone);
  return dispatch({type: VALID_PHONE, paiload: {valid_phone, message, color}})
}

export var selection = (e) => (dispatch) => {
  return dispatch({type: SECTION_SELECTION, paiload: e})
}

export var select = () => (dispatch, getState) => {
  if(getState().Form.option_key.display) {
    return dispatch({type: OPEN_CLOSE, paiload: false})
  } else {return dispatch({type: OPEN_CLOSE, paiload: true})}
}

export var privilege = () => (dispatch, getState) => {
  let options_ = getState().Form.option;
  if(getState().AppCart.total > 300) {
    return dispatch({type: PRIVILEGE, paiload: getState().Form.privilege})
  } else {return dispatch({type: PRIVILEGE, paiload: options_})}
}

export var optionKey = () => (dispatch, getState) => {
  if(getState().AppCart.total > 300) {
    return dispatch({type: APP_KEY, paiload: getState().Form.privilege});
  } else { return dispatch({type: APP_KEY, paiload: getState().Form.option[0]}) }
}

export var cleaningForma = () => (dispatch) => {
  return dispatch({type: CLEANING})
}