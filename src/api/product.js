/** @module product */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Get Categories
 */
export function GetCategories() {
  return gateway.request(GetCategoriesOperation)
}

/**
 * Get Category
 * 
 * @param {object} options Optional options
 * @param {string[]} [options.filter] Filter options
 * @param {string} [options.sort] Sorting parameter
 * @param {string} [options.order] Sorting order
 * @return {Promise<object>} Сategory response
 */
export function GetCategory(options) {
  if (!options) options = {}
  const parameters = {
    query: {
      filter: options.filter,
      sort: options.sort,
      order: options.order
    }
  }
  return gateway.request(GetCategoryOperation, parameters)
}

/**
 * Returns product details for product with given product slug
 */
export function getProductsSlugDetails() {
  return gateway.request(getProductsSlugDetailsOperation)
}

/**
 * Return base product information for given product slug
 */
export function getProductsSlug() {
  return gateway.request(getProductsSlugOperation)
}

const GetCategoriesOperation = {
  path: '/categories',
  method: 'get'
}

const GetCategoryOperation = {
  path: '/products/category/{id}',
  method: 'get'
}

const getProductsSlugDetailsOperation = {
  path: '/products/{slug}/details',
  method: 'get'
}

const getProductsSlugOperation = {
  path: '/products/{slug}',
  method: 'get'
}
