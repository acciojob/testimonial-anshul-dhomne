it("Checking tags", () => {
    cy.get('h1').should('have.length', 1)
    cy.get('div').should('have.length', 7) // updated from 3 to 7
    cy.get('p').should('have.length', 6) // updated from 4 to 6
});
