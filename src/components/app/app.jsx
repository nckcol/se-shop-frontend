import React, { Component } from 'react';
import CatalogRoute from '../catalog-route/catalog-route';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
`;

const Header = styled.header`
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
          <Header>
            <h1>Welcome to RTFMarket</h1>
          </Header>

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
