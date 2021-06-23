/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  console.log("r token", process.env.GOOGLE_REFRESH_TOKEN);
  config.env.googleRefreshToken =
    "1//048J4n4Qf39YRCgYIARAAGAQSNwF-L9IrqyVZKngAP5HmgA7xToalrHUnhmYhXbpkJaUr3Uy73KTbk4Nj9IeN1_zOMQBkll-eagg";
  config.env.googleClientId =
    "826665490492-72np8fdstq09nkrodlgchsb3idaka95c.apps.googleusercontent.com";
  config.env.googleClientSecret = "yBSnfL0M6TFDER5WZ5102kAR";

  return config;
};
