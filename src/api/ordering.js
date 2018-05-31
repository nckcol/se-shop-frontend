/** @module ordering */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Return product list in user's cart
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Success cart response
 */
export function getCart(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(getCartOperation, parameters)
}

/**
 * Add product to cart
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Success product adding to cart
 */
export function postCartProductSlug(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(postCartProductSlugOperation, parameters)
}

/**
 * Delete product from cart
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Success product deleting from cart
 */
export function deleteCartProductSlug(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(deleteCartProductSlugOperation, parameters)
}

/**
 * Change product count in cart
 * 
 * @param {string} Authorization User authentication token
 * @param {number} count New quantity of products in cart
 * @return {Promise<object>} Success product count changing in cart
 */
export function putCartProductSlug(Authorization, count) {
  const parameters = {
    header: {
      Authorization
    },
    query: {
      count
    }
  }
  return gateway.request(putCartProductSlugOperation, parameters)
}

/**
 * Place order
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Success order placing
 */
export function postOrders(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(postOrdersOperation, parameters)
}

/**
 * Orders list
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Success return orders list for user
 */
export function getOrders(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(getOrdersOperation, parameters)
}

/**
 * Order
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Success return order details for user
 */
export function getOrdersId(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(getOrdersIdOperation, parameters)
}

/**
 * Get delivery info (price, expected date)
 * 
 * @param {string} cityRecipientRef City reference
 * @param {number} cost Product cost
 * @param {number} amount Amount of packages/places
 * @param {string} date City reference
 * @return {Promise<object>} Success return cities for city by name
 */
export function getDelivery(cityRecipientRef, cost, amount, date) {
  const parameters = {
    query: {
      cityRecipientRef,
      cost,
      amount,
      date
    }
  }
  return gateway.request(getDeliveryOperation, parameters)
}

/**
 * Create delivery
 */
export function postDelivery() {
  return gateway.request(postDeliveryOperation)
}

/**
 * Return delivery method details
 */
export function getDeliveryId() {
  return gateway.request(getDeliveryIdOperation)
}

/**
 * Nova poshta available city list
 * 
 * @param {string} city City name or starting letters of the city
 * @return {Promise<object>} Success return cities for city by name
 */
export function getDeliveryCities(city) {
  const parameters = {
    query: {
      city
    }
  }
  return gateway.request(getDeliveryCitiesOperation, parameters)
}

/**
 * Nova poshta available warehouses list
 * 
 * @param {string} cityRef City reference
 * @return {Promise<object>} Success return warehouses for cityRef
 */
export function getDeliveryWarehouses(cityRef) {
  const parameters = {
    query: {
      cityRef
    }
  }
  return gateway.request(getDeliveryWarehousesOperation, parameters)
}

const getCartOperation = {
  path: '/cart',
  method: 'get'
}

const postCartProductSlugOperation = {
  path: '/cart/product/{slug}',
  method: 'post'
}

const deleteCartProductSlugOperation = {
  path: '/cart/product/{slug}',
  method: 'delete'
}

const putCartProductSlugOperation = {
  path: '/cart/product/{slug}',
  method: 'put'
}

const postOrdersOperation = {
  path: '/orders/',
  method: 'post'
}

const getOrdersOperation = {
  path: '/orders/',
  method: 'get'
}

const getOrdersIdOperation = {
  path: '/orders/{id}',
  method: 'get'
}

const getDeliveryOperation = {
  path: '/delivery/',
  method: 'get'
}

const postDeliveryOperation = {
  path: '/delivery/',
  method: 'post'
}

const getDeliveryIdOperation = {
  path: '/delivery/{id}',
  method: 'get'
}

const getDeliveryCitiesOperation = {
  path: '/delivery/cities/',
  method: 'get'
}

const getDeliveryWarehousesOperation = {
  path: '/delivery/warehouses/',
  method: 'get'
}
