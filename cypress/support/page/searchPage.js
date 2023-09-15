class searchPage {
  errorLessChar() {
    cy.get('.warning').should('be.visible')
  }

  errorNotFound() {
    cy.get('.result').should('be.visible')
  }

  searchFound() {
    cy.get('.search-results').should('be.visible')
    cy.log('Barang ditemukan')
  }

  listView() {
    cy.get('#products-viewmode').select('List')
    cy.url().should('include', 'viewmode=list')
    cy.log('View saat ini adalah List')
  }

  gridView() {
    cy.get('#products-viewmode').select('Grid')
    cy.url().should('include', 'viewmode=grid')
    cy.log('View saat ini adalah Grid')
  }
}
export default new searchPage()
