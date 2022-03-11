Cypress._.times(2, () => {
describe("Access the view-activity page and swipe activities n times ", () => {
  it("successfully swipe an activity and make it disaper", () => {
    cy.visit("/");
    cy.get("input").click();
    cy.get("#loginButton").click();
    cy.wait(1000);
    cy.visit("/view-activities");
    cy.get(".cardActivity")
      .last()
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 0, clientY: 600 })
      .trigger("mouseup", { force: true });
    cy.get(".cardActivity").last().should("be.visible");
    // cy.contains(
    //   "Sorry there are no more activities to show, How about you"
    // ).should("be.visible");
  });
});
});