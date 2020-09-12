import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addCart, delet, Total} from '../action';
import Cart from '../../Cart/conteiners/Cart'
import './CartList.scss';

import a from './Prais.json'

class CartList extends Component {


  UNSAFE_componentWillMount() {
    let {addCart} = this.props;
    addCart(a);
  }

  componentDidMount() {
    let {Total} = this.props;
    Total();
  }

  componentDidUpdate() {
    let {Total} = this.props;
    Total();
  }

  render () {
    let {appcart, delet, total, number, leanth} = this.props;
    
    return (
      <div className="cartList">
        {
        appcart ? 
        appcart.map((e, i) => {
          return <Cart 
          key={i} 
          id={e.id} 
          title={e.title} 
          img={e.img} 
          Number = {number.find(f => f.id === e.id).col}
          description={e.description} 
          price={e.price}
          delet={delet}/>
        }) : 
          "loading"
        }
        <div className="Buy">
          <div className="purchase">
          <div className="full_cost"><p>{total}</p><i className="fas fa-euro-sign"/></div>
            <Link to='/shipping'><button className="buy" >BUY</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = ({AppCart}) => ({
  appcart: AppCart.app_cart,
  leanth: AppCart.app_cart.length,
  total: AppCart.total,
  number: AppCart.number
});

let mapDispatchToProps = {
  addCart,
  delet,
  Total
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);