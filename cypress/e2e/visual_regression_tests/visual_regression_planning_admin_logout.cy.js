/// <reference types="cypress" />
//todo replace hardcoded waits with rendering waits
it("takes a screenshot of planning admin and logout options in wilcox test", () => {
  //login to wilcox test site
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  // Take a screenshot of top of the main page
  cy.wait(1500);
  cy.compareSnapshot("WC test opening page", 0.2);

  //switch to planning menu
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Planning");
  });
  cy.wait(1500);
  cy.compareSnapshot("WC test planning", 0.2);

  //switch to admin menu
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Admin");
  });
  cy.wait(1500);
  cy.compareSnapshot("WC test admin", 0.2);

  //logout
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Log Out");
  });
  cy.wait(1500);
  cy.compareSnapshot("WC test logout", 0.2);
  //end of test
});
