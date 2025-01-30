describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('bianca')
    cy.get('#lastName').type('bianca')
    cy.get('#username').type('bianca')
    cy.get('#password').type('1234')
    cy.get('#confirmPassword').type('1234')
    cy.get('[data-test="signup-submit"]').click()
    cy.get('#username').type('bianca')
    cy.get('#password').type('1234')
    cy.get('[data-test="signin-submit"]').click()

  })
})