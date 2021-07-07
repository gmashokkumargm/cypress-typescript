declare namespace Cypress {
	interface Chainable {
		/**
		 * To add multiple ToDo you can simply use addMultipleToDo
		 * @example
		 *    cy.addMultipleToDo(list)
		 *    cy.addMultipleToDo(['one','two','three'])
		 * --------------------
		 */
		addMultipleToDo(value: string[]): void;

		/**
		 * To verify multiple ToDo you can use verifyMultipleToDo method
		 * @example
		 *    cy.verifyMultipleToDo(list)
		 *    cy.verifyMultipleToDo(['one','two','three'])
		 * --------------------
		 */
		verifyMultipleToDo(value: string[]): void;

		/**
		 * To remove multiple ToDo you can use removeMultipleToDo method
		 * @example
		 *    cy.removeMultipleToDo(list)
		 *    cy.removeMultipleToDo(['one','two','three'])
		 * --------------------
		 */
		removeMultipleToDo(value: string[]): void;
	}
}
