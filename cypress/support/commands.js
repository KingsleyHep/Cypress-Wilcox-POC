
//Login function to be used in tests
Cypress.Commands.add('login', (username, password) => {
  cy.get('#UserName').type(username);
  cy.get('#Password').type(password);
  cy.get('#LoginBtn').click();
});

Cypress.Commands.add('logout', () => {
  cy.get('#mainMenuContainer').click();
  cy.wait(1000);

  cy.get('#17').click();
});

