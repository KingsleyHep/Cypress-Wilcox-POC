/// <reference types="cypress" />

const currentDate = new Date();

//navigates to test site and signs in using valid credentials
beforeEach(() => {});

afterEach(() => {});

it("takes a screenshot of main page in wilcox test", () => {
  //login to wilcox test site
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  // Take a screenshot of top of the main page
  cy.wait(1500);
  //cy.screenshot("WCmain", { overwrite: true });
  cy.compareSnapshot("WCmain", 0.0);
});

it("takes a screenshot of the top of the admin menu page on wilcox test", () => {
  //login to wilcox test site
  cy.visit("https://wilcoxtest.poultrymanager.com/");
  cy.login("unitassup", "D?cQ&TE8!9");
  // Navigate to admin menu from front page
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Admin");
  });
  // Take a screenshot of top of admin menu page
  //wait required to allow page to load before screenshot is taken
  cy.wait(1500);
  //cy.screenshot("WCadmin", { overwrite: true });
  cy.compareSnapshot("WCadmin", 0.0);
});

it("takes a screenshot of the top of the admin menu page on VF test", () => {
  //login to VF test site
  cy.visit("https://vitalfarmstest.poultrymanager.com/");
  cy.login("unitassup", "$5qA#fSHE6Arc3Eb");
  // Navigate to admin menu from front page
  cy.get("#DropDownContainer").within(() => {
    cy.get("#menuIconsDD").select("Admin");
  });
  // Take a screenshot of top of admin menu page
  //wait required to allow page to load before screenshot is taken
  cy.wait(1500);
  //cy.screenshot("VFadmin", { overwrite: true });
  cy.compareSnapshot("VFadmin", 0.0);
});

//test to check against baseline WCmain and fail because it's looking at Google
it("should compare the image google homepage to WCmain and fail", () => {
  cy.visit("www.google.com");
  cy.wait(1500);
  //cy.screenshot("WCmain", { overwrite: true });
  cy.compareSnapshot("WCmain", 0.0);
});
