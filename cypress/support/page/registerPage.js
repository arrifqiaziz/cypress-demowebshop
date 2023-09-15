class registerPage {
  randomGender() {
    const gender = ['male', 'female']
    const random = Math.floor(Math.random() * gender.length)
    cy.log(random, gender[random])
    return gender[random]
  }

  // This is function for String Generator
  randomString() {
    let result = ''
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    const charactersLength = characters.length
    let counter = 0
    while (counter < 8) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
    return result
  }
}

export default new registerPage()
