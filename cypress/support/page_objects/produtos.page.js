class produtosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

}

export default new produtosPage()