
Cypress._.times(1, () => {
describe("Acces the home page and press and test the 2 mains buttons 5 times", () => {
  it("successfully loads & click the main buttons", () => {
    cy.visit("/"); // change URL to match your dev URL
    cy.get('input').click();
    cy.get("#loginButton").click();
    cy.get('a[href*="view-activities"]').click();
    cy.url().should("include", "/view-activities");
    cy.visit("/");
    cy.get('a[href*="create-activity"]').click();
    cy.url().should("include", "/create-activity");
  });
});
});