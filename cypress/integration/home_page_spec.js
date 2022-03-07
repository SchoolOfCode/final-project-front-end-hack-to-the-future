
describe("The Home Page", () => {
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
