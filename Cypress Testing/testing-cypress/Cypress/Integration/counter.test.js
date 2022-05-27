describe("Counter Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Button should exists", () => {
    cy.get(".counterBtn").should("exist");
    cy.get(".doesnexists").should("not.exist");
  });
  it("Should increment counter", () => {
    cy.get(".counterBtn").should("have.text", "count is: 0");
    cy.get(".counterBtn").click();
    cy.get(".counterBtn").click();
    cy.get(".counterBtn").click();
    cy.get(".counterBtn").click();
    cy.get(".counterBtn").click();
    cy.get(".counterBtn").should("have.text", "count is: 5");
  });

  // it.only("basic", () => {

  //   cy.intercept("GET", "https://localhost:8080/counter", {
  //     value: 100,
  //   }).as("counterReq");

  //   cy.intercept("POST", "https://localhost:8080/counter").as("counterReq");

  // cy.get(".counterBtn").click();

  // cy.wait("@counterReq");

  // cy.get(".counter-value").should("have.text", "count is: 1");

  // });
});
