
describe("Access the create activity page and create an activity", () => {
  it("successfully create activity in the create-activity form and send it to the data base", () => {
    cy.visit("/"); 
    cy.get("input").click();
    cy.get("#loginButton").click();
    cy.wait(1000);
    cy.visit("/create-activity");
    cy.get('#location').type('London');
    cy.get('#activityTime').type('2022-04-05T10:00');
    cy.get('select').select('cycle');
    cy.get('#activityDescription').type('20km cycling around London');
    cy.get("#activityMaxAttendees").type('5');
    cy.get("button[type=submit]").click();
    cy.wait(2000);
    cy.get("#successText").should('include.text',"Thanks for creating your activity 🙂");
  });
});
