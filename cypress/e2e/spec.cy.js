describe('Open w3schools - python tutorial - run example', () => {
  before(() => {
    // Common setup code - runs once before all it blocks
    cy.visit('https://www.w3schools.com/');
    cy.get('#accept-choices').click();
  });

  it('searches for Python tutorial', () => {
    // Type 'python' into the search box and press 'Enter'
    cy.get('#search2').should('be.visible').type('python{enter}');
  });

  it('opens Python Booleans tutorial', () => {
    // Click on the 'Python Booleans' link
    cy.contains('a', 'Python Booleans').click();
  });
/*
  it('runs Python example', () => {
    // Scroll to the 'Try it Yourself »' link
    cy.contains('p', 'When you compare two values,').scrollIntoView();

    // Click on the 'Try it Yourself »' link
    cy.contains('a', 'Try it Yourself »').should('be.visible').click();

    // Add assertions to verify the behavior of the example, if needed
    // Example:
    // cy.contains('h1', 'Python Boolean Example').should('be.visible');
  });*/
});
