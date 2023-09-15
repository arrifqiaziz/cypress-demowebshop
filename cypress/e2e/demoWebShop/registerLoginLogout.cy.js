import registerPage from '../../support/page/registerPage'

describe('Feature Register, Login and Logout', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Register with random data', () => {
    cy.get('.ico-register').should('be.visible').click()
    cy.url().should('include', '/register')

    // Initialization every random variable
    let gender = registerPage.randomGender()
    let firstName = registerPage.randomString()
    let lastName = registerPage.randomString()
    let email = firstName + '@gmail.com'
    let password = registerPage.randomString()

    // Fill register form
    cy.get('#gender-' + gender).should('be.visible').click()
    cy.get('#FirstName').should('be.visible').type(firstName)
    cy.get('#LastName').should('be.visible').type(lastName)
    cy.get('#Email').should('be.visible').type(email)
    cy.get('#Password').should('be.visible').type(password)
    cy.get('#ConfirmPassword').should('be.visible').type(password)
    cy.get('#register-button').should('be.visible').click()
    cy.get('.result').should('be.visible')
    cy.url().should('include', '/registerresult')
    cy.log('Register Berhasil')

    // Create JSON file to save the credential random account
    cy.writeFile('cypress/fixtures/accountRandom.json', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
  })

  it('Login only with random data', () => {
    // Read JSON file random account
    cy.readFile('cypress/fixtures/accountRandom.json').then((account) => {
      cy.get('.ico-login').should('be.visible').click()
      cy.login(account.email, account.password)
      cy.log('Login Berhasil')
    })
  })

  it('Login and Logout with random data', () => {
    // Read JSON file random account
    cy.readFile('cypress/fixtures/accountRandom.json').then((account) => {
      cy.get('.ico-login').should('be.visible').click()
      cy.login(account.email, account.password)
    })
    cy.logout()
  })

  it('Login and Logout with spesific data', () => {
    // Read JSON file random account
    cy.readFile('cypress/fixtures/accountData.json').then((account) => {
      cy.get('.ico-login').should('be.visible').click()
      cy.login(account.email, account.password)
    })
    cy.logout()
  })
})
