import React, { Component } from 'react';
import Catalog from '../catalog/catalog';

class CatalogCategoryRoute extends Component {
  render() {
    const { match, product, addToCart } = this.props;

    const category = this.getCategoryById(parseInt(match.params.id, 10));

    return <Catalog addToCart={addToCart} category={category} />;
  }

  getCategoryById(id) {
    const { categories } = this.props;

    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id === id) {
        return categories[i];
      }
    }

    return null;
  }
}

export default CatalogCategoryRoute;
