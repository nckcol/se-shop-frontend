import React, { Component } from 'react';
import styled from 'styled-components';
import * as fromProduct from '../../api/product';

const Block = styled.div``;

class Catalog extends Component {
  render() {
    return <Block>Show me your categories;</Block>;
  }

  fetchCategories() {
    fromProduct.GetCategories().then(data => {
      console.log(data);
    });
  }

  setCategories(categories) {
    this.setState({
      categories
    });
  }
}

export default Catalog;
