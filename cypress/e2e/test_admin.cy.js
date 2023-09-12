/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('https://wilcoxtest.poultrymanager.com/');
  cy.login('unitassup', 'D?cQ&TE8!9');
});
afterEach(() => {
  //commented to allow for inspection at end of test
  //cy.logout();
});


it('tests the site is displayed for Farm 1', () => {
  cy.wait(1000);
  cy.get('#FarmerDisplay').invoke('html').then((content) => {
    // Log the content to the console
    console.log('%cContent of element is:', 'color: green', content);
  });

  //cy.get('.ui-dialog-content.ui-widget-content.ui-icon-myCloseButton');
  //cy.get('#FarmerDisplay').click();
  //cy.contains('Test Farm 1').click();
 // cy.contains('close').click();
  //cy.get('#FarmCode').click();
  //cy.get('#FarmersList_filter input[type="search"]')
  //cy.get('input.FarmDTSearchbar').type('ABC');
  //cy.get('input.FarmDTSearchbar.Search').type('ABC');
  //cy.pause();

});