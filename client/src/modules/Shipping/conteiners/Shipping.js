import React, {Component} from 'react';
import {connect} from 'react-redux';
import { ErrorMessage } from '../../../components/index';
import axios from 'axios';
import {inputEmail,  inputPhone, enterAddress, validEmail, 
  inputName, validName, validAddress, validPhone, selection, 
  select, privilege, optionKey, cleaningForma } from '../actions';

import '../Shipping.scss';

class Shipping extends Component {

  componentDidMount() {
    let {total, privilege, optionKey} = this.props;
    if(total > 300) privilege();
    optionKey();
  }

  Submit =  async (e) => {
    e.preventDefault();
    let {AppCart, Form} = this.props;
    let data_ = {
      basket: AppCart,
      data: Form.data,
      delivery: Form.option_key.key
    };
    try {
      let response = await axios.post('/shipping/pay', {data_});
      cleaningForma();
      console.log('response', response.message)
    } catch (error) {
      console.log('erroe', error);
    }
  }

  Select = (e) => {
    e.preventDefault();
    let {select} = this.props;
    select();
  }

  ValidButton = () => {
    let {Form} = this.props;
    if(Form.valid.name === '' || Form.valid.address === '') {
      if(!Form.valid.name === 'NoN' && !Form.valid.email === 'NoN' && !Form.valid.address === 'NoN' && !Form.valid.phone === 'NoN') {
        return false
      } else {
        return true
      }
    }
  }
  
  render () {
    let {inputEmail, inputName, inputPhone, enterAddress, validEmail, Form, validName, validAddress, validPhone, selection, select} = this.props;
    return (
      <div className="shipping">
        <div className="shipping_form">
          <form className="form" metod="post" onSubmit={(e) => this.Submit(e)}>
            <div className="name">
              <p>Name*</p>
              <input name="name" type="text" placeholder="Name"
              style = {{borderColor: Form.valid_color.name}} 
              onBlur={() => validName(Form.data.name) } 
              onChange={(e)=>inputName(e.target.value)}/>
              {Form.valid.name ? <ErrorMessage message={Form.message_error.name}/> : ''}
            </div>
            <div className="address">
              <p>Address*</p>
              <input name="address" type="text" placeholder="Address" 
                style = {{borderColor: Form.valid_color.address}} 
                onBlur={() => validAddress(Form.data.address) } 
                onChange={(e)=>enterAddress(e.target.value)}
              />
              {Form.valid.address ? <ErrorMessage message={Form.message_error.address}/> : ''}
            </div>
            <div className="phone">
              <p>Phone</p>
              <input name="phone" type="tel" placeholder="+3(095) 255 14 87" 
                style = {{borderColor: Form.valid_color.phone}} 
                onBlur={() => validPhone(Form.data.phone) } 
                onChange={(e)=>inputPhone(e.target.value)}
              />
              {Form.valid.phone ? <ErrorMessage message={Form.message_error.phone}/> : ''}
            </div>
            <div className="email">
              <p>E-mail</p>
              <input name="email" type="email" placeholder="good@net.com" 
                style = {{borderColor: Form.valid_color.email}}
                onBlur={() => validEmail(Form.data.email) } 
                onChange={(e)=>inputEmail(e.target.value)}
              />
              {Form.valid.email ? <ErrorMessage message={Form.message_error.email}/> : ''}
            </div>
            <div className="select_options">
              <p>Sipping options</p>
              <div className="gh">
              <button className="select" onClick={(e) => this.Select(e)} >{Form.option_key.key}</button>
              <div className="option" style={Form.option_key.display ? {display: 'block'} : {display: 'none'}}>
                  <ul>
                    {Form.option.map((e, index) => {
                      return <li onClick={(j) => {
                        selection(j.target.innerText);
                        select(Form.option_key.display);
                      }} key={index}>{e}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="button">
              <button disabled={this.ValidButton()}>PAY</button>
            </div>
            
          </form>
        </div>
      </div>
    );
  }
}

let mapStateToProps = ({Form, AppCart}) => ({
  AppCart: AppCart,
  Form: Form,
  total: AppCart.total
})

let mapDispatchToProps = {
  inputEmail,
  inputPhone,
  enterAddress,
  validEmail,
  inputName,
  validName,
  validAddress,
  validPhone,
  selection,
  select,
  privilege,
  optionKey,
  cleaningForma
}

export default connect(mapStateToProps, mapDispatchToProps)(Shipping);