/** @module user */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Registers new user in the system
 */
export function createUser() {
  return gateway.request(createUserOperation)
}

/**
 * Get current user
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} User successfully returned
 */
export function getUserByName(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(getUserByNameOperation, parameters)
}

/**
 * This can only be done by the logged in user.
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Successfully updated user
 */
export function updateUser(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(updateUserOperation, parameters)
}

/**
 * This can only be done by the logged in user.
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Successfully deleted user
 */
export function deleteUser(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(deleteUserOperation, parameters)
}

/**
 * Logs user into the system
 */
export function loginUser() {
  return gateway.request(loginUserOperation)
}

/**
 * Logs out current logged in user session
 * 
 * @param {string} Authorization User authentication token
 * @return {Promise<object>} Successfully logged out
 */
export function logoutUser(Authorization) {
  const parameters = {
    header: {
      Authorization
    }
  }
  return gateway.request(logoutUserOperation, parameters)
}

const createUserOperation = {
  path: '/user',
  method: 'post'
}

const getUserByNameOperation = {
  path: '/user',
  method: 'get'
}

const updateUserOperation = {
  path: '/user',
  method: 'put'
}

const deleteUserOperation = {
  path: '/user',
  method: 'delete'
}

const loginUserOperation = {
  path: '/user/login',
  method: 'post'
}

const logoutUserOperation = {
  path: '/user/logout',
  method: 'get'
}
