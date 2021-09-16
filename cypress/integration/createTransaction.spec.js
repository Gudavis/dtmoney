before(function () {
  cy.fixture('transactionData').then(function (transaction) {
    this.transaction = transaction
  })
})
describe('Create transaction', () => {
  it('should be able to create a new transaction', function () {
    cy.get('[data-cy="new-transaction"]').click()
    cy.get('[data-cy=title]').type(this.transaction.title)
    cy.get('[data-cy=amount]').type(this.transaction.amount)
    cy.get('[data-cy=deposit]').click()
    cy.get('[data-cy=category]').type(this.transaction.category)
    cy.get('[data-cy=submit-new-transaction]').click()
  })

  it('should be able to read a new created transaction', function () {
    cy.get('[data-cy="new-transaction"]').click()
    cy.get('[data-cy=title]').type(this.transaction.title)
    cy.get('[data-cy=amount]').type(this.transaction.amount)
    cy.get('[data-cy=withdraw]').click()
    cy.get('[data-cy=category]').type(this.transaction.category)
    cy.get('[data-cy=submit-new-transaction]').click()

    cy.wait(500)

    cy.get('[data-cy=transaction-title]').last().contains(this.transaction.title)
    cy.get('[data-cy=transaction-amount]').last().contains(this.transaction.amount)
    cy.get('[data-cy=transaction-category]').last().contains(this.transaction.category)
  })
})