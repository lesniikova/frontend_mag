describe('AppComponent', () => {
    beforeEach(() => {
        cy.intercept('GET', 'http://crucial-kali-backend-mag-8b88b11c.koyeb.app/table', {
            statusCode: 200,
            body: [
                { id: 1, name: 'Item 1', value: 'Value 1' },
                { id: 2, name: 'Item 2', value: 'Value 2' }
            ]
        }).as('getTableData');

        cy.visit('/');
    });

    it('handles error if data fails to load', () => {
        cy.intercept('GET', 'http://crucial-kali-backend-mag-8b88b11c.koyeb.app/table', {
            statusCode: 500,
            body: { message: 'Server error' }
        }).as('getTableDataError');

        cy.visit('/');

        cy.wait('@getTableDataError');

        cy.get('.error-message')
            .should('contain', 'Napaka pri nalaganju podatkov');
    });
});
