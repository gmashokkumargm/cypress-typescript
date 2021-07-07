// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addMultipleToDo', (multipleTodo: string[]) => {
	multipleTodo.forEach((data) => {
		cy.get('[test-data="textbox"]').type(data);
		cy.get('[test-data="Add"]').click();
	});
});

Cypress.Commands.add('verifyMultipleToDo', (toDoList: string[]) => {
	toDoList.forEach((data) => {
		cy.get('[test-data="todo-list"]').find('label').should('contain.text', data);
	});
	cy.get('[test-data="length"]').should('have.text', toDoList.length);
});

Cypress.Commands.add('removeMultipleToDo', (toDoList: string[]) => {
	toDoList.forEach((list) => {
		cy.get('[test-data="todo-list"]').find('label').contains(list).click();
	});
});
