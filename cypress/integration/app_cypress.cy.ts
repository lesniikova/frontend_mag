// describe('AppComponent', () => {
//     beforeEach(() => {
//         // Intercept the HTTP request and provide mock data
//         cy.intercept('GET', 'http://127.0.0.1:5000/table', {
//             statusCode: 200,
//             body: [
//                 { id: 1, name: 'Item 1', value: 'Value 1' },
//                 { id: 2, name: 'Item 2', value: 'Value 2' }
//             ]
//         }).as('getTableData');
//
//         // Visit the Angular app (assuming it's running locally)
//         cy.visit('/');
//     });
//
//     it('displays loading state initially', () => {
//         // Check if loading indicator is visible
//         cy.get('.loading-spinner') // Change this to whatever element you use for loading state
//             .should('be.visible');
//     });
//
//     it('fetches and displays data', () => {
//         // Wait for the HTTP request to complete
//         cy.wait('@getTableData');
//
//         // Ensure loading is finished and data is displayed
//         cy.get('.loading-spinner') // Again, update with correct class for loading spinner
//             .should('not.exist');
//
//         // Assuming your table is in a <table> or some div with a class like `.data-table`
//         cy.get('.data-table').should('be.visible');
//
//         // Check that data rows are displayed
//         cy.get('.data-table tr').should('have.length', 2); // Number of mock items in the response
//
//         // Check if the mock data is shown in the table
//         cy.get('.data-table')
//             .contains('Item 1')
//             .should('exist');
//         cy.get('.data-table')
//             .contains('Item 2')
//             .should('exist');
//     });
//
//     it('handles error if data fails to load', () => {
//         // Simulate an error response
//         cy.intercept('GET', 'http://127.0.0.1:5000/table', {
//             statusCode: 500,
//             body: { message: 'Server error' }
//         }).as('getTableDataError');
//
//         cy.visit('/');
//
//         // Wait for the error response
//         cy.wait('@getTableDataError');
//
//         // Check if error message is displayed
//         cy.get('.error-message') // Ensure this is the actual selector for error messages in your template
//             .should('contain', 'Napaka pri nalaganju podatkov');
//     });
// });
