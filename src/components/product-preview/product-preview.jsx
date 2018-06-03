import React, { Component } from 'react';
import styled from 'styled-components';

import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import LinkNext from 'grommet/components/icons/base/LinkNext';

const Block = styled.div`
  background-color: #fff;
`;

class ProductPreview extends Component {
  render() {
    const { product, onAddToCart } = this.props;
    return (
      <Block>
        <Card
          contentPad="medium"
          description={product.description.substr(0, 250) + '...'}
          heading={product.title}
          link={
            <Anchor
              icon={<LinkNext />}
              label="Add to cart"
              primary={true}
              onClick={() => onAddToCart(product)}
            />
          }
          label={`${product.price} UAH`}
          thumbnail={product.media.main}
        />
      </Block>
    );
  }
}

export default ProductPreview;
