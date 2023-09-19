import searchPage from '../../support/page/searchPage'

describe('Feature Add and Check Cart', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Add and check cart', () => {
    cy.search('simple computer')
    searchPage.searchFound()
    cy.get('.product-title > a').should('be.visible')
    cy.get('.button-2').should('be.visible').click()
    cy.get('#product_attribute_75_5_31_96').should('be.visible').click()
    cy.get('#add-to-cart-button-75').should('be.visible').click()
    cy.get('#product_attribute_75_8_35_107').should('be.visible').click()
    cy.get('#product_attribute_75_8_35_108').should('be.visible').click()
    cy.get('.content').should('be.visible')

    cy.get('.ico-cart > .cart-label').should('be.visible').click()
    cy.get('.product-name').should('be.visible')
  })
})
