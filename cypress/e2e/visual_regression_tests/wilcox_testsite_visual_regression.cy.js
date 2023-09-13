/// <reference types="cypress" />

it("takes a screenshot of main navigation bar options in wilcox test", () => {
  //login to wilcox test site
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  // Take a screenshot of top of the main page
  cy.wait(1500);
  cy.compareSnapshot("WC test main page", 0.2);
  //select first farm in menu to close pop up
  //? navigate to child from parent

  //take a screenshot of dashboard page
  cy.wait(1500);
  cy.compareSnapshot("WC test dashboard page", 0.2);
  //todo: make selecting page content a reusable function
  //navigate to groups page
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("#Tab").contains("Group").click();
        //take a screenshot of group page
        cy.wait(1500);
        cy.compareSnapshot("WC test group page", 0.2);
        //
      });
    });
  });

  //navigate to production page
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("#Tab").contains("Production").click();
        //take a screenshot of production page
        cy.wait(1500);
        cy.compareSnapshot("WC test production page", 0.2);
      });
    });
  });

  //navigate to schedule page
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("#Tab").contains("Schedule").click();
        //take a screenshot of schedule page
        cy.wait(1500);
        cy.compareSnapshot("WC test schedule page", 0.2);
      });
    });
  });

  //navigate to documents page
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("#Tab").contains("Documents").click();
        //take a screenshot of documents page
        cy.wait(1500);
        cy.compareSnapshot("WC test documents page", 0.2);
      });
    });
  });

  //navigate to reports page
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("#Tab").contains("Reports").click();
        //take a screenshot of reports page
        cy.wait(5500);
        cy.compareSnapshot("WC test reports page", 0.2);
      });
    });
  });
  //end of first test
});
