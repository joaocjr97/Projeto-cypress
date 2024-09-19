/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('produto')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
      cy.get('[class="product-block grid"]')
      .contains('Arcadio Gym Short')
      .click()
      cy.wait(2000)
      cy.get('.button-variable-item-32').click()
      cy.get('.button-variable-item-Blue').click()
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('exist') //Primeiro produto
      cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()
      cy.get('.product').first().click()
      cy.wait(2000)
      cy.get('.button-variable-item-XL').click()
      cy.get('.button-variable-item-Green').click()
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('exist') //Segundo produto
      cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()
      cy.get('.products .product').eq(4).click()
      cy.wait(2000)
      cy.get('.button-variable-item-36').click()
      cy.get('.button-variable-item-Black').click()
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('exist') //Terceiro produto
      cy.get('.tbay-woocommerce-breadcrumb > :nth-child(3) > a').click()
      cy.get('.products .product').first().click()
      cy.wait(2000)
      cy.get('.button-variable-item-M').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.single_add_to_cart_button').click()
      cy.get('.woocommerce-message').should('exist') //Quarto produto
      cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
      cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
      cy.get('.showlogin').click()
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste.com')
      cy.get('.woocommerce-button').click()
      cy.get('#payment_method_cod').click()
      cy.get('#terms').click()
      cy.get('#place_order').click()
      cy.wait(3000)
      cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });


})