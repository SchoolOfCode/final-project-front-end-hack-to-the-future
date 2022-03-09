describe("Access the view-activity page and swipe activities until no more activities", () => {
  it("successfully swipe an activity and see the message no more cards", () => {
    cy.visit("/"); 
    cy.get("input").click();
    cy.get("#loginButton").click();
    cy.wait(1000);
    cy.visit("/view-activities");
    cy.get("#card").first()
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { clientX: 0, clientY: 400 })
      .trigger("mouseup", { force: true });
    cy.contains(
      "Sorry there are no more activities to show, How about you"
    ).should("be.visible");
  });
});