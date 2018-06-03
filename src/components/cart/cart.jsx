import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';

class Cart extends Component {
  render() {
    const { cart, clearCart, checkout } = this.props;

    return (
      <Box>
        {cart.length ? (
          <div>
            <Heading>Your cart</Heading>
            <List>
              {cart.map(product => (
                <ListItem justify="between" separator="horizontal">
                  <span>{product.title}</span>
                  <span className="secondary">{product.price} UAH</span>
                </ListItem>
              ))}
            </List>
            <br />
            <ListItem justify="between" separator="false">
              <span />
              <span>
                Summary: &nbsp; &nbsp;
                <b>{cart.reduce((acc, item) => acc + item.price, 0)} UAH</b>
              </span>
            </ListItem>
            <br />
            <Button
              onClick={() => clearCart()}
              accent={false}
              primary={false}
              label="Clear cart"
              margin="small"
            />
            &nbsp; &nbsp; &nbsp;
            <Button
              path="/ordering/"
              accent={false}
              primary={true}
              label="Checkout"
              margin="small"
            />
          </div>
        ) : (
          <Heading>Your cart is empty</Heading>
        )}
      </Box>
    );
  }
}

export default Cart;
