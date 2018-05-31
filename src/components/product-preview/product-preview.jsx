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
    return (
      <Block>
        <Card
          contentPad="small"
          description="sooooooo"
          heading="Product 1"
          label="category"
          link={
            <Anchor
              icon={<LinkNext />}
              label="Show full"
              primary={true}
              path="/"
            />
          }
          thumbnail=""
        />
      </Block>
    );
  }
}

export default ProductPreview;
