import React, { Component } from 'react';
import Cart from '../cart/cart';

class CartRoute extends Component {
  render() {
    const { cart, clearCart, checkout } = this.props;
    return <Cart cart={cart} clearCart={clearCart} checkout={checkout} />;
  }
}

export default CartRoute;
