describe("Counter Tests", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/todo");
  });
  it("Should show basic structure", () => {
    cy.get(".new-todo").should("exist");
    cy.get(".todo-count").should("exist");
    cy.get(".toggle").should("exist");
    cy.get(".destroy").should("exist");
    cy.get(".todo-button").should("exist");
    cy.get(".filters").should("exist");
  });

  it("Should be able to add todo", () => {
    cy.get(".todo-list").children().should("have.length", 2);
    cy.get(".new-todo").type("Automated tests{enter}");
  });
});
