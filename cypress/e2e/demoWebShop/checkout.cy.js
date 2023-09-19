import searchPage from '../../support/page/searchPage'

describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Checkout Cart', () => {
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

    cy.get('#CountryId').should('be.visible').select('Indonesia')
    cy.get('#StateProvinceId').should('be.visible').clear().type('12345')
    cy.get('#termsofservice').should('be.visible').click()
    cy.get('#checkout').should('be.visible').click()
    cy.get('#billing-buttons-container > .button-1').should('be.visible').click()
    cy.get('#shipping-buttons-container > .button-1').should('be.visible').click()
    cy.get('#shipping-method-buttons-container > .button-1').should('be.visible').click()
    cy.get('#payment-method-buttons-container > .button-1').should('be.visible').click()
    cy.get('#payment-info-buttons-container > .button-1').should('be.visible').click()
    cy.get('#confirm-order-buttons-container > .button-1').should('be.visible').click()
    cy.get('strong').should('be.visible').click()
  })
})
