import React, { Component } from 'react';
import styled from 'styled-components';
import * as fromProduct from '../../api/product';
import ProductPreview from '../product-preview/product-preview';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

const Block = styled.div``;

class Catalog extends Component {
  render() {
    return (
      <Block>
        <Box pad="medium" colorIndex="light-2">
          Show me your categories
          <Tiles fill={true} flush={false} size="small">
            <Tile>
              <ProductPreview />
            </Tile>
            <Tile>
              <ProductPreview />
            </Tile>
            <Tile>
              <ProductPreview />
            </Tile>
            <Tile>
              <ProductPreview />
            </Tile>
            <Tile>
              <ProductPreview />
            </Tile>
          </Tiles>
        </Box>
      </Block>
    );
  }

  componentDidMount() {
    this.fetchCategories();
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
