//teste Suite
describe('Testes de Postagens', () =>{
 
// Cenário1: Inserção de nova postagem

it('Deve inserir uma nova postagem', () =>{
    cy.visit('http://localhost:4200/post/create')
    cy.title().should('eq', 'MyNewApp')
})









})