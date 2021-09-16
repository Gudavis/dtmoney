describe('Read a transaction in transactions table', () => {
  it('should be able to read a transaction', () => {
    cy.get('.transaction-title').contains('Desenvolvimento de Site')
    cy.get('.deposit').contains('6.000,00')
    cy.get('.transaction-category').contains('Dev')
  })
})