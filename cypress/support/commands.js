Cypress.Commands.add('preencherInput', (elemento, texto) => {
    if (elemento.startsWith("//")) {
        cy.xpath(elemento)
          .should('be.visible')
          .type(texto);
    } else {
        cy.get(elemento)
          .should('be.visible')
          .type(texto);
    }      
});
Cypress.Commands.add('clicarElemento', (elemento) => {
    if (elemento.startsWith("//")) {
        cy.xpath(elemento)
          .should('be.visible')
          .click();
    } else {
        cy.get(elemento)
          .should('be.visible')
          .click();
    }
});
Cypress.Commands.add('validarTexto', (texto) => {
    cy.contains(texto)
      .should('be.visible');
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
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