describe('Create transaction', () => {
  it('should be able to create a new transaction', () => {
    cy.get('[type="button"]').click()
    cy.get('#title').type('Venda de PC')
    cy.get('#amount').type(2400)
    cy.get('#deposit').click()
    cy.get('#category').type('Vendas')
    cy.get('[type="submit"]').click()
  })

  it('should be able to read a new created transaction', () => {
    cy.get('[type="button"]').click()
    cy.get('#title').type('TV a cabo')
    cy.get('#amount').type(300)
    cy.get('#withdraw').click()
    cy.get('#category').type('Entretenimento')
    cy.get('[type="submit"]').click()

    cy.wait(500)

    cy.get('.transaction-title').last().contains('TV a cabo')
    cy.get('.withdraw').last().contains('300,00')
    cy.get('.transaction-category').last().contains('Entretenimento')
  })
})