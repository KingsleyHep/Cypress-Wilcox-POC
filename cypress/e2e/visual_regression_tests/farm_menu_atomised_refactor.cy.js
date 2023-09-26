/// <reference types="cypress" />

//todo: make selecting page content a reusable function
beforeEach(() => {
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  cy.selectAnyFarm();
});
describe.only("visual regression tests for farm navigation bar options", () => {
  it("takes a picture of the dashboard page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("WC test dashboard page", 0.2);
        });
      });
    });
  });

  it("takes a picture of the group page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Group").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("WC test group page", 0.2);
        });
      });
    });
  });

  it("takes a picture of the production page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Production").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("WC test production page", 0.2);
        });
      });
    });
  });

  it("takes a picture of the schedule page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Schedule").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("WC test schedule page", 0.2);
        });
      });
    });
  });

  it("takes a picture of the documents page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Documents").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("WC test documents page", 0.2);
        });
      });
    });
  });

  it("takes a picture of the farm reports page", () => {
    cy.get("#pageContainer").within(() => {
      cy.get('iframe[id="pageContent"]').then(function ($iframe) {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).within(() => {
          cy.get("#Tab").contains("Reports").click();
          cy.waitForIframe("iframe#content");
          cy.compareSnapshot("WC test farm reports page", 0.2);
        });
      });
    });
  });

  //todo: replace with reusable function - wait for egg grading
  // it("takes a picture of the accounts/egg grading page", () => {
  //   cy.get("#DropDownContainer").within(() => {
  //     cy.get("#menuIconsDD").select("Accounts");
  //   });
  //   cy.get("#pageContainer").within(() => {
  //     cy.get('iframe[id="pageContent"]').then(function ($iframe) {
  //       const $body = $iframe.contents().find("body");
  //       cy.wrap($body).within(() => {
  //         //!falling over at navigation bar despite being the same iframe structure as the farm menu bar
  //         cy.get("#Tab").contains("Egg Grading").click();
  //         cy.waitForIframe("iframe#content");
  //         cy.compareSnapshot("WC test accounts EGG GRADING", 0.2);
  //       });
  //     });
  //   });
  // });

  // //transactions
  // it("takes a picture of the transactions page", () => {
  //   cy.get("#DropDownContainer").within(() => {
  //     cy.get("#menuIconsDD").select("Accounts");
  //   });
  //   //todo: replace with reusable function - wait for transactions
  // });

  // //payments
  // it("takes a picture of the payments page", () => {
  //   cy.get("#DropDownContainer").within(() => {
  //     cy.get("#menuIconsDD").select("Accounts");
  //   });
  //   //todo: replace with reusable function - wait for payments
  // });

  // //reports
  // it("takes a picture of the accounts reports page", () => {
  //   cy.get("#DropDownContainer").within(() => {
  //     cy.get("#menuIconsDD").select("Accounts");
  //     //todo: replace with reusable function - wait for accounts reports
  //   });
  // });

  // it("takes a picture of the planning page", () => {
  //   cy.get("#DropDownContainer").within(() => {
  //     cy.get("#menuIconsDD").select("Planning");
  //   });
  //   //todo: replace with reusable function - wait for planning
  //   cy.wait(1500);
  //   cy.compareSnapshot("WC test planning page", 0.2);
  // });

  // it("takes a picture of the admin page", () => {
  //   cy.get("#DropDownContainer").within(() => {
  //     cy.get("#menuIconsDD").select("Admin");
  //   });
  //   //todo: replace with reusable function - wait for admin
  //   cy.wait(1500);
  //   cy.compareSnapshot("WC test admin", 0.2);
  // });
  //! logout is not taking picture of logout page
  // it("takes a picture of the logout page", () => {
  //   cy.get("#DropDownContainer").within(() => {
  //     cy.wait(1500);
  //     cy.compareSnapshot("WC test logout", 0.2);
  //     cy.get("#menuIconsDD").select("Log Out");
  //   });
  //todo: replace with reusable function - wait for logout
});
//end of describe scope
