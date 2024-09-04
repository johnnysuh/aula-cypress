const { beforeEach } = require("node:test")

describe('template spec', () => {
  it('visitar a pagina', () => {
    cy.visit('https://127.0.0.1:5500/index.html')
  })
  beforeEach(() => {
    cy.visit('https://127.0.0.1:5500/index.html')
  })

it('Senha errada', () => {
  cy.get('#username').type('admin');
  cy.get('#password').type('admin');
  cy.get('button').click()
  cy.get('#mensagemErro').should('be.visible')
})

it('Senha errada', () => {
  cy.get('#username').type('admin');
  cy.get('#password').type('admin');
  cy.get('button').click()
  cy.on('window.alert', (text) =>{
    expect(text).to.contains('Login efetuado com sucesso!')
  })
})
})