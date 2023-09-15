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

//! use when inside an iframe render promise
Cypress.Commands.add("waitForIframe", (iframeSelector) => {
  cy.get(iframeSelector)
    .should("be.visible")
    .should(($iframe) => {
      const iframeLoaded = $iframe.prop("contentDocument");
      expect(iframeLoaded.readyState).to.eq("complete");
    });
});
//! use when pop up is present
Cypress.Commands.add("selectAnyFarm", () => {
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get('iframe[id="content"]').then(function ($innerframe) {
          const $innerbody = $innerframe.contents().find("body");
          cy.wrap($innerbody).within(() => {
            cy.get("table#FarmersList").first().click();
          });
        });
      });
    });
  });
});
