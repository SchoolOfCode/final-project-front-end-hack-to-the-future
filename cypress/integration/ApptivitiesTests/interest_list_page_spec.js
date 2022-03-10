

Cypress._.times(1, () => {
describe("Access the view-activity page and swipe activities until no more activities", () => {
  it("successfully swipe an activity and see the message no more cards", () => {

    let randonNumber = Math.floor(Math.random() * 9);

    cy.visit("/");
    cy.get("input").click();
    cy.get("#loginButton").click();
    cy.wait(1000);
    cy.visit("/interest-activities");
    cy.get("ul>li").eq(randonNumber).find("button").first().click();
    cy.get("ul>li").eq(randonNumber).contains("Location:");
    cy.get("ul>li")
      .eq(randonNumber)
      .find("button").eq(1)
      .should("be.visible")
      .click();
    cy.get("ul>li").eq(randonNumber).contains("Location:")
      .should('not.be.visible');
});
});
});