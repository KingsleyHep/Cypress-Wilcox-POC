/// <reference types="cypress" />



beforeEach(() => { 
cy.visit('https://wilcoxtest.poultrymanager.com/');
});

afterEach(() => {
  
});


it('rejects invalid passwords for each USER1 ', () => {
  cy.login('USER1', 'wrongpassword');
  cy.get('#ErrorText').should('have.value', 'Logon unsuccessful');
});

it('rejects invalid passwords for each USER2 ', () => {
  cy.login('USER2', 'wrongpassword');
  cy.get('#ErrorText').should('have.value', 'Logon unsuccessful');
});

it('rejects invalid passwords for each USER3 ', () => {
cy.login('USER3', 'wrongpassword');
cy.get('#ErrorText').should('have.value', 'Logon unsuccessful');
});




//! Test which farms users have access to
//Test user1 can login and see only their farm data
it('tests the site is displayed correctly for user1', () => {
  cy.login('USER1', 'SunnyBeach42');
  cy.wait(3000)
  //? how would i validate which farms are NOT shown?
  //? how would i validate the correct farm is shown?
  //validate dashboard graphs are shown
  // todo return to problem when production test data is available
  //todo check snapshot feature integration after test data is mapped

  //hen production table
  //todo canvas element validation
  //cy.get('#PrdChart').should('be.visible');
  //egg weight table
  //cy.get('#EggWeightContainer').should('be.visible')

  //todo remove comment once test body written
  // cy.logout();
  // cy.wait(3000)
});

it('tests the site is displayed correctly for user2', () => {
  cy.login('USER2', 'StarryNight99');
  cy.wait(3000)
  // cy.logout();
  // cy.wait(3000)
  
});

it('tests the site is displayed correctly for user3', () => {
  cy.login('USER3', 'HappyDance123');
  cy.wait(3000)
  // cy.logout();
  // cy.wait(3000)
});