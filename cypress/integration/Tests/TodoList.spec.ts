describe('E2E Tests for simple TODO List Web App', () => {
	before(() => {
		cy.visit('/');
	});
	beforeEach(() => {
		cy.fixture('data').as('data');
	});

	it('Add one ToDo list, verify added in the list and ToDo list count', function () {
		cy.get('[test-data="textbox"]').type(this.data.oneProduct);
		cy.get('[test-data="Add"]').click();
		cy.get('[test-data="todo-list"]').find('label').should('contain.text', this.data.oneProduct);
		cy.get('[test-data="length"]').should('have.text', 1);
	});

	it('Delete the added ToDo list, verify it is removed and verify the list count', () => {
		cy.get('[test-data="todo-list"]').find('label').click();
		cy.get('[test-data="length"]').should('have.text', 0);
	});

	it('Add multiple ToDo and verify', function () {
		cy.addMultipleToDo(this.data.multipleProduct);
		cy.verifyMultipleToDo(this.data.multipleProduct);
	});

	it('Delete multiple ToDo and verify it is removed and verify the list count', function () {
		cy.removeMultipleToDo(this.data.multipleProduct);
		cy.get('[test-data="length"]').should('have.text', 0);
	});
});
