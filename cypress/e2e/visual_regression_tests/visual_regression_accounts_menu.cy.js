/// <reference types="cypress" />
//todo replace hardcoded waits with rendering waits
it("takes a screenshot of farm navigation bar options in wilcox test", () => {
  //login to wilcox test site
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  // Take a screenshot of top of the main page
  cy.wait(1500);
  cy.compareSnapshot("WC test opening page", 0.2);

  //switch to accounts menu
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Accounts");
  });

  //snapshot of accounts menu before closing farm popup
  cy.wait(1500);
  cy.compareSnapshot("WC test accounts menu opening", 0.2);
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
        cy.waitForIframe('iframe[id="content"]');
        cy.compareSnapshot("WC test egg grading", 0.2);
      });
    });
  });
  //todo: make selecting page content a reusable function
  //? may be menu item specific
  //! page container different for each menu item
  //navigate to transactions page
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("#Tab").contains("Transactions").click();
        cy.waitForIframe('iframe[id="content"]');
        cy.compareSnapshot("WC test transactions page", 0.2);
      });
    });
  });

  //navigate to payments page
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("#Tab").contains("Payments").click();
        cy.waitForIframe('iframe[id="content"]');
        cy.compareSnapshot("WC test payments page", 0.2);
      });
    });
  });

  //navigate to reports page
  cy.get("#pageContainer").within(() => {
    cy.get('iframe[id="pageContent"]').then(function ($iframe) {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).within(() => {
        cy.get("#Tab").contains("Reports").click();
        cy.waitForIframe('iframe[id="content"]');
        cy.compareSnapshot("WC test reports page", 0.2);
      });
    });
  });
  //end of test
});
