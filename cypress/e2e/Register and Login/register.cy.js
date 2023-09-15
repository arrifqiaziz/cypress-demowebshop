describe('Register to application', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it.only('Verify URL', () => {
    cy.url().should('include', 'demowebshop.tricentis.com')
  })
})
