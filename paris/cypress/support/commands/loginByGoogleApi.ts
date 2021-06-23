Cypress.Commands.add("loginByGoogleApi", () => {
  cy.log("Logging in to Google");
  cy.request({
    method: "POST",
    url: "https://www.googleapis.com/oauth2/v4/token",
    body: {
      grant_type: "refresh_token",
      client_id:
        "826665490492-72np8fdstq09nkrodlgchsb3idaka95c.apps.googleusercontent.com",
      client_secret: "yBSnfL0M6TFDER5WZ5102kAR",
      refresh_token:
        "1//048J4n4Qf39YRCgYIARAAGAQSNwF-L9IrqyVZKngAP5HmgA7xToalrHUnhmYhXbpkJaUr3Uy73KTbk4Nj9IeN1_zOMQBkll-eagg",
    },
  }).then(({ body }) => {
    const { access_token, id_token } = body;

    cy.request({
      method: "GET",
      url: "https://www.googleapis.com/oauth2/v3/userinfo",
      headers: { Authorization: `Bearer ${access_token}` },
    }).then(({ body }) => {
      cy.log(body);
      const userItem = {
        token: id_token,
        user: {
          googleId: body.sub,
          email: body.email,
          givenName: body.given_name,
          familyName: body.family_name,
          imageUrl: body.picture,
        },
      };

      window.localStorage.setItem("googleCypress", JSON.stringify(userItem));
      cy.visit("/home");
    });
  });
});
