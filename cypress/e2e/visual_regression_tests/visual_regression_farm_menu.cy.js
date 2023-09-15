/// <reference types="cypress" />
//todo replace hardcoded waits with rendering waits
describe("visual regression tests for farm navigation bar options", () => {
  beforeEach(() => {
    cy.visit("https://wilcoxtest.poultrymanager.com/");
    cy.login("unitassup", "D?cQ&TE8!9");
  });
  it("takes a screenshot of farm navigation bar options in wilcox test", () => {
    //login to wilcox test site
    //cy.visit("https://wilcoxtest.poultrymanager.com/");
    //cy.login("unitassup", "D?cQ&TE8!9");

    //!login to gftest site to check differences in run
    // cy.visit("https://gftest.poultrymanager.com/");
    //cy.login("unitassup", "k7T&JzTS4?9sge5j");

    // Take a screenshot of top of the main page
    //todo find a better wait method for here
    cy.wait(1500);
    cy.compareSnapshot("WC test opening page", 0.2);

    //select farm in menu to close pop up
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
          //take a screenshot of dashboard page after closing pop up
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("WC test dashboard page", 0.2);
          //
        });
      });
    });
    //todo: make selecting page content a reusable function

    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Group").click();
          //take a screenshot of group page
          cy.waitForIframe("iframe#content");
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
          cy.waitForIframe("iframe#content");
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
          cy.waitForIframe("iframe#content");
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
          cy.waitForIframe("iframe#content");
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
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("WC test reports page", 0.2);
        });
      });
    });
    //end of first test
  });
});
