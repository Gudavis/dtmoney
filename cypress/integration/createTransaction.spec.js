before(function () {
  cy.fixture('transactionData').then(function (transaction) {
    this.transaction = transaction
  })
})
describe('Create transaction', () => {
  it('should be able to create a new transaction', function () {
    cy.get('[type="button"]').click()
    cy.get('#title').type(this.transaction.title)
    cy.get('#amount').type(this.transaction.amount)
    cy.get('#deposit').click()
    cy.get('#category').type(this.transaction.category)
    cy.get('[type="submit"]').click()
  })

  it('should be able to read a new created transaction', function () {
    cy.get('[type="button"]').click()
    cy.get('#title').type(this.transaction.title)
    cy.get('#amount').type(this.transaction.amount)
    cy.get('#withdraw').click()
    cy.get('#category').type(this.transaction.category)
    cy.get('[type="submit"]').click()

    cy.wait(500)

    cy.get('.transaction-title').last().contains(this.transaction.title)
    cy.get('.withdraw').last().contains(this.transaction.amount)
    cy.get('.transaction-category').last().contains(this.transaction.category)
  })
})