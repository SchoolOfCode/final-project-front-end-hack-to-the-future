

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/"); // change URL to match your dev URL
    cy.get('input').click();
    cy.get('#loginButton').click();
    //cy.url().should('include','/home')
  });
});
