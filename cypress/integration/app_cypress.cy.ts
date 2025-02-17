describe('Test Data Display and Loading State', () => {

    beforeEach(() => {
        cy.visit('http://reasonable-clerissa-backend-mag-2f86a963.koyeb.app/table');
    });

    it('should display loading message when data is loading', () => {
        cy.intercept('GET', 'http://reasonable-clerissa-backend-mag-2f86a963.koyeb.app/table', {
            statusCode: 200,
            body: [],
        }).as('getData');


        cy.get('table').should('not.exist');
    });

    it('should display data table when data is loaded', () => {
        cy.intercept('GET', 'http://reasonable-clerissa-backend-mag-2f86a963.koyeb.app/table', {
            statusCode: 200,
            body: [
                { Ime: 'Janez', Starost: 30, Mesto: 'Ljubljana' },
                { Ime: 'Maja', Starost: 25, Mesto: 'Maribor' },
            ],
        }).as('getData');

        cy.wait('@getData');

        cy.get('div[ng-reflect-ng-if="true"]')
            .should('not.exist');

        cy.get('table').should('be.visible');
        cy.get('table tr').should('have.length', 3);

        cy.get('td').first().should('contain', 'Janez');
        cy.get('td').eq(1).should('contain', '30');
        cy.get('td').eq(2).should('contain', 'Ljubljana');
    });

});
