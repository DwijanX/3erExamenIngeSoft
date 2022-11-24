describe("Sumador", () => {
  it("Shows the user message", () => {
    cy.visit("/");
    cy.get("#Message").type("hello");
    cy.get("#publish-form").submit();
    cy.get("#messages-Div").should('not.be.empty');
  });
  it("Shows an error", () => {
    cy.visit("/");
    cy.get("#Message").type(" ");
    cy.get("#publish-form").submit();
    cy.get("#errorDiv").should('contain',"No se puede ingresar un post sin texto");
  });
});
