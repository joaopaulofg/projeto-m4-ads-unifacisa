import { slowCypressDown } from 'cypress-slow-down'

slowCypressDown()

//teste Suite






describe('Testes de Postagens', () =>{
 
  // Cenário1: Inserção de nova postagem
  
  it('Deve inserir uma nova postagem', () =>{
      cy.visit('http://localhost:4200/post/create')
      cy.title().should('eq', 'MyNewApp')
  
  
      //Preencher formulário de inserção com os dados solicitados
      cy.get('input#title') //localiza o campo titulo
      .type ('Nova Postagem'); // Preenche o titulo
  
      cy.get('textarea#body') //Localiza o campo de corpo
      .type('Este é o corpo da nova postagem.'); //Preenche o corpo do textp
  
      //enviar formulario
     cy.get('button[type="submit"]').click()

     //cy.location('pathname').should('eq', '/newthing/:id')

      //verificar se a pagina foi redirecionada para a lista de postagens
      //cy.url('http://localhost:4200').should('eq', ''); 
      cy.url().should('contain', '/post/index')

      });
    
      // Cenário 2: Edição de uma postagem existente
      it('Deve editar uma postagem existente', () => {
        // Visitar a página principal onde a lista de postagens é exibida
        cy.visit(`http://localhost:4200/post/index` )
        
        cy.get('#editBtn').click()

        const id  = 1;
        cy.visit(`http://localhost:4200/post/${id}/edit` )
    
        cy.get('input#title').click().focused().clear()
        cy.get('input#title') //localiza o campo titulo
        .type ('Novo título'); // Preenche o titulo
    
        cy.get('textarea#body').click().focused().clear()
        cy.get('textarea#body') //Localiza o campo de corpo
        .type('Atualizar campo de texto'); //Preenche o corpo do textp
    
        //enviar formulario
       cy.get('button[type="submit"]').click()
       
        // Selecionar o primeiro botão "Editar"
       // cy.contains('Editar').first().click(); // Clica no primeiro botão "Editar"
    
        // Alterar os dados da postagem
      //  cy.get('input#title')
        //  .clear() // Limpa o título atual
       //   .type('Postagem Editada'); // Digita o novo título
      //  cy.get('textarea#body')
        //  .clear() // Limpa o corpo atual
        //  .type('Este é o corpo da postagem editada.'); // Digita o novo corpo
    
        // Enviar o formulário de edição
      //  cy.get('button[type="submit"]').click(); // Envia a alteração
    
        // Verificar se a página foi redirecionada para a lista de postagens
      //  cy.url().should('eq', Cypress.config().baseUrl + '/'); 
    
        // Verificar se o título editado da postagem foi atualizado corretamente na lista
      //  cy.contains('Postagem Editada').should('exist'); 
      });
    
    });
  
  
  
  