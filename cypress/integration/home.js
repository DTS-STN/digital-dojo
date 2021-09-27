describe('Test the home page', function() {

    it('loads the home page with expected links', function() {
        cy.visit(`http://127.0.0.1:4000/digital-dojo/`);

//         cy.injectAxe();
//         cy.checkA11y();   

        cy.get('title').should('contain', 'Dojo');
    });
});