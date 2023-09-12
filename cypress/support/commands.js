//adds snapshot function for reusuability
require("@cypress/snapshot").register();
const compareSnapshotCommand = require("cypress-image-diff-js/dist/command");
compareSnapshotCommand();

//Login function to be used in tests
Cypress.Commands.add("login", (username, password) => {
  cy.get("#UserName").type(username);
  cy.get("#Password").type(password);
  cy.get("#LoginBtn").click();
});

Cypress.Commands.add("logout", () => {
  cy.get("select").eq(0).should("be.visible");
  cy.get("select").eq(0).select("Log Out", { force: true });
});
