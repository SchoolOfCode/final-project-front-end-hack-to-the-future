

Cypress._.times(1, () => {
describe("Access the Interest-List page and open and collapse random activities ", () => {
  it("successfully open an activity card, show the information and close it back", () => {

    let randonNumber = Math.floor(Math.random() * 9);

    cy.visit("/");
    cy.get("input").click();
    cy.get("#loginButton").click();
    cy.wait(1000);
    cy.visit("/interest-activities");
    cy.get("ul>li").eq(randonNumber).find("button").eq(1).click();
    cy.get("ul>li").eq(randonNumber).contains("Location:");
    cy.get("ul>li")
      .eq(randonNumber)
      .find("button").eq(2)
      .should("be.visible")
      .click();
    cy.get("ul>li").eq(randonNumber).contains("Location:")
      .should('not.be.visible');
    });
  });
});