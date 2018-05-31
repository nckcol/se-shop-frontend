import React, { Component } from 'react';
import CatalogRoute from '../catalog-route/catalog-route';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import Actions from 'grommet/components/icons/base/Actions';
import Cart from 'grommet/components/icons/base/Cart';

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
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <HeaderHolder>
            <Header fixed={false} float={false} splash={false}>
              <Title>Welcome to RTFMarket</Title>

              <Box flex={true} justify="end" direction="row" responsive={false}>
                <Menu
                  responsive={true}
                  inline={true}
                  primary={false}
                  closeOnClick={false}
                  direction="row"
                  size="medium"
                >
                  <Anchor href="#" className="active">
                    Catalog
                  </Anchor>
                  <Anchor href="#">Home</Anchor>
                  <Anchor href="#">Ordering</Anchor>
                </Menu>
              </Box>

              <Box flex={true} justify="end" direction="row" responsive={false}>
                <Button
                  icon={<Cart />}
                  plain={true}
                  path="/cart/"
                  accent={false}
                  primary={false}
                />
                <Menu icon={<Actions />} dropAlign={{ right: 'right' }}>
                  <Anchor href="#" className="active">
                    First
                  </Anchor>
                  <Anchor href="#">Second</Anchor>
                  <Anchor href="#">Third</Anchor>
                </Menu>
              </Box>
            </Header>
          </HeaderHolder>

          <Content>
            <Switch>
              <Route path="/catalog" exact component={CatalogRoute} />
              <Route path="/catalog/{slug}" exact component={CatalogRoute} />

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
}

export default App;
