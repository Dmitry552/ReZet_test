import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increase_product, decrease_product, colChange} from '../action';

import './Cart.scss';

import Pig from '../../../images/ic_insert.png'

class Cart extends Component {

  render() {
    let {title, img, description, price, id, delet, increase_product, decrease_product, colChange, Number} = this.props;
    return (
      <div className="cart"> 
        <div className="img">
          <img src={Pig} alt="Название товара"/>
        </div>
        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className="kakto_nazv">
          <div className="renouncement" onClick={() => delet(id)}><i className="far fa-trash-alt"></i></div>
          <div className="koll">
            <div className="quantity_of_goods">
              <button className="decrease" onClick={() => decrease_product(id)}>-</button>
              <input className={id} max="50" min="1" id={id} type="number" value={Number} onChange={(e) => colChange(e.target.value, id)}/>
              <button className="increase" onClick={()=> increase_product(id)}>+</button>
            </div>
            <div className="price"><p>{price}<span><i className="fas fa-euro-sign"></i></span></p> </div>
          </div>
        </div>
      </div>
    )
  } 
}

let mapStateToProps = ({}) => ({});

let mapDispatchToProps = {
  increase_product,
  decrease_product,
  colChange
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);