import searchPage from '../../support/page/searchPage'

describe('Feature Register, Login and Logout', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Search with less than 3 character', () => {
    cy.search('a')
    searchPage.errorLessChar()
    cy.log('Search harus minimal 3 karakter')
  })

  it('Search not found', () => {
    cy.search('Computer with High End Spesification')
    searchPage.errorNotFound()
    cy.log('Tidak dapat menemukan barang')
  })

  it('Search found', () => {
    cy.search('Computer')
    searchPage.searchFound()
  })

  it('Change view of product from Grid to List', () => {
    cy.search('Computer')
    searchPage.searchFound()
    cy.log('View saat ini adalah Grid')
    searchPage.listView()
  })

  it('Change view of product from List to Grid', () => {
    cy.search('Computer')
    searchPage.searchFound()
    searchPage.listView()
    searchPage.gridView()
  })

})
