declare namespace Cypress {
  interface Chainable {
    /**
     * login with Google API
     */
    loginByGoogleApi(): Chainable<Element>;
  }
}
