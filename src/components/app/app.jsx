import React, { Component } from 'react';
import CatalogRoute from '../catalog-route/catalog-route';
import CatalogCategoryRoute from '../catalog-category-route/catalog-category-route';
import CartRoute from '../cart-route/cart-route';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import User from 'grommet/components/icons/base/User';
import Cart from 'grommet/components/icons/base/Cart';
import * as fromProduct from '../../api/product';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`;

const HeaderHolder = styled.header`
  flex: 0 0 auto;
  padding: 24px;
`;

const Content = styled.section`
  flex: 1 1 auto;
  padding: 24px;
`;

const Footer = styled.footer`
  flex: 0 0 auto;
  padding: 24px;
  text-align: center;
  font-size: 14px;
  color: #ddd;
`;

class App extends Component {
  state = {
    categories: [],
    cart: []
  };
  render() {
    const { categories, cart } = this.state;

    console.log(categories);
    return (
      <BrowserRouter>
        <Layout>
          <HeaderHolder>
            <Header fixed={false} float={false} splash={false}>
              <Title>RTFMarket</Title>

              <Box
                flex={true}
                justify="start"
                direction="row"
                responsive={false}
              >
                <Menu
                  responsive={true}
                  inline={true}
                  primary={false}
                  closeOnClick={false}
                  direction="row"
                  size="medium"
                >
                  {categories.length &&
                    categories.map(item => (
                      <Anchor path={`/catalog/${item.id}`}>{item.title}</Anchor>
                    ))}
                </Menu>
              </Box>

              <Box
                flex="shrink"
                justify="end"
                direction="row"
                responsive={false}
              >
                <Button
                  icon={<Cart />}
                  plain={true}
                  path="/cart/"
                  accent={false}
                  primary={false}
                />
                <Menu icon={<User />} dropAlign={{ right: 'right' }}>
                  <Anchor path="/profile">Profile</Anchor>
                  <Anchor path="/profile">Logout</Anchor>
                  <Anchor path="/signin">Sign In</Anchor>
                  <Anchor path="/signup">Sign Up</Anchor>
                </Menu>
              </Box>
            </Header>
          </HeaderHolder>

          <Content>
            <Switch>
              <Route
                path="/catalog/"
                exact
                render={props => (
                  <CatalogRoute {...props} addToCart={this.addToCart} />
                )}
              />
              <Route
                path="/catalog/:id/"
                exact
                render={props => (
                  <CatalogCategoryRoute
                    {...props}
                    addToCart={this.addToCart}
                    categories={categories}
                  />
                )}
              />
              <Route
                path="/cart/"
                exact
                render={props => (
                  <CartRoute
                    {...props}
                    cart={cart}
                    clearCart={this.clearCart}
                    checkout={this.checkout}
                  />
                )}
              />

              {/* <Route path="/cart" exact component={} /> */}
              {/* <Route path="/ordering" exact component={} /> */}

              {/* <Route path="/profile" exact component={} /> */}
            </Switch>
          </Content>

          <Footer>From nothing with coffee</Footer>
        </Layout>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    fromProduct.GetCategories().then(response => {
      this.setCategories(response.data);
    });
  }

  setCategories = categories => {
    this.setState({
      categories
    });
  };

  addToCart = product => {
    console.log(this.state);

    this.setState(state => ({
      cart: [...state.cart, product]
    }));
  };

  clearCart = () => {
    this.setState({
      cart: []
    });
  };

  checkout = () => {};
}

export default App;
