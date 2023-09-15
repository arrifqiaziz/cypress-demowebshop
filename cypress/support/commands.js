Cypress.Commands.add('login', (email, password) => {
  cy.get('#Email').should('be.visible').type(email)
  cy.get('#Password').should('be.visible').type(password)
  cy.get('form > .buttons > .button-1').should('be.visible').click()
  cy.contains(email).should('be.visible')
  cy.contains('Log out').should('be.visible')
  cy.log('Login Berhasil')
})

Cypress.Commands.add('logout', () => {
  cy.contains('Log out').should('be.visible').click()
  cy.contains('Log in').should('be.visible')
  cy.log('Logout Berhasil')
})

Cypress.Commands.add('search', (search) => {
  cy.get('#small-searchterms').should('be.visible').clear().type(search)
  cy.get('form > .button-1').should('be.visible').click()
  cy.url().should('include', '/search')
})
