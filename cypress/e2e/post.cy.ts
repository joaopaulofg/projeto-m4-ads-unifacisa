import { slowCypressDown } from 'cypress-slow-down';

slowCypressDown();

//teste Suite

describe('Testes de Postagens', () => {
  // Cenário1: Inserção de nova postagem

  it('Deve inserir uma nova postagem', () => {
    cy.visit('http://localhost:4200');
    cy.get('#newPostBtn').click();

    cy.title().should('eq', 'MyNewApp');

    //Preencher formulário de inserção com os dados solicitados
    cy.get('input#title') //localiza o campo titulo
      .type('Nova Postagem'); // Preenche o titulo

    cy.get('textarea#body') //Localiza o campo de corpo
      .type('Este é o corpo da nova postagem.'); //Preenche o corpo do textp

    //enviar formulario
    cy.get('button[type="submit"]').click();

    //cy.location('pathname').should('eq', '/newthing/:id')

    //verificar se a pagina foi redirecionada para a lista de postagens
    //cy.url('http://localhost:4200').should('eq', '');
    cy.url().should('contain', '/post/index');
  });

  // Cenário 2: Edição de uma postagem existente
  it('Deve editar uma postagem existente', () => {

    cy.visit('http://localhost:4200');
    cy.get('#editBtn').click();

    cy.get('input#title').click().focused().clear(); //Limpa os campos de titulo
    cy.get('input#title') //localiza o campo titulo
      .type('Novo título'); // Preenche o titulo

    cy.get('textarea#body').click().focused().clear();//Limpa os campos de conteúdo
    cy.get('textarea#body') //Localiza o campo de corpo
      .type('Atualizar campo de texto'); //Preenche o corpo do textp

    //enviar formulario
    cy.get('button[type="submit"]').click();
  });
});
