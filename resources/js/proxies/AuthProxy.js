import Proxy from './BaseProxy'

class AuthProxy extends Proxy {
  /**
   * The constructor for the ArtistProxy.
   *
   * @param {Object} parameters The query parameters.
   */
  constructor (parameters = {}) {
    super('login', parameters)
  }

  /**
   * Method used to login.
   *
   * @param {String} username The username.
   * @param {String} password The password.
   *
   * @returns {Promise} The result in a promise.
   */
  login ({ username, password }) {
    const data = {
      username,
      password
    }

    return this.submit('post', `${this.endpoint}`, data)
  }
}

export default AuthProxy
