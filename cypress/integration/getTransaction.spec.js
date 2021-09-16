describe('Read a transaction in transactions table', () => {
  it('should be able to read a transaction', () => {
    cy.get('[data-cy=transaction-title]').first().contains('Desenvolvimento de Site')
    cy.get('[data-cy=transaction-amount]').first().contains('6.000,00')
    cy.get('[data-cy=transaction-category]').first().contains('Dev')
  })
})