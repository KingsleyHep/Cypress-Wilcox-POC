/// <reference types="cypress" />

it("takes a screenshot of main navigation bar options in wilcox test", () => {
  //login to wilcox test site
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  // Take a screenshot of top of the main page
  cy.wait(1500);
  cy.compareSnapshot("WC test main page", 0.0);
  //select first farm in menu

  //todo navigate to child from parent

  //take a screenshot of dashboard page
  cy.wait(1500);
  cy.compareSnapshot("WC test dashboard page", 0.0);
  //take a screenshot of group page

  //take a screenshot of production page

  //take a screenshot of schedule page

  //take a screenshot of documents page

  //take a screenshot of reports page
});
