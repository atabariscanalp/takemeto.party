import "../../support/commands/loginByGoogleApi";

describe("Google", () => {
  it("renders the login page", () => {
    cy.visit("/");
  });

  it("logins with google", () => {
    cy.loginByGoogleApi();
  });
});
