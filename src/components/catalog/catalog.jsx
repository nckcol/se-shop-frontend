import React, { Component } from 'react';
import styled from 'styled-components';
import ProductPreview from '../product-preview/product-preview';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

const Block = styled.div``;

class Catalog extends Component {
  render() {
    const { category, addToCart } = this.props;

    return (
      <Block>
        {category ? (
          <Section>
            <Heading>{category.title}</Heading>
            <Box pad="medium" colorIndex="light-2">
              <Tiles fill={true} flush={false} size="small">
                {category.products.map(product => (
                  <Tile>
                    <ProductPreview product={product} onAddToCart={addToCart} />
                  </Tile>
                ))}
              </Tiles>
            </Box>
          </Section>
        ) : (
          <Section>
            <Heading>Choose some category</Heading>
          </Section>
        )}
      </Block>
    );
  }
}

export default Catalog;
