// ***********************************************
import "cypress-file-upload";

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://45.33.16.36:9051/login");
  cy.get("#basic_user").type(username).should("have.value", username);
  cy.get("#basic_password").type(password).should("have.value", password);
  cy.get('.ant-form-item-control-input-content button[type="submit"]').click();
  cy.url().should("include", "http://45.33.16.36:9051/home/dashboard");
});

//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
