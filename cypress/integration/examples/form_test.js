describe('Testing Lambda Eats Order form', () => {
    it('Open page found at port 3000', () => {
        cy.visit('http://localhost:3000/')
    })
    
    it('Open page found at port 3000/pizza', () => {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Checking form validation if name is too short', () => {
        cy.get('input[name="custName"]').type('P')
            .should('have.value', 'P')

            cy.get('.errorMessages')
                .contains('Your name must be at least 2 characters')
                .should('exist')
    })

    it('Enters a name', () => {
        cy.get('input[name="custName"]').type('eter Wood')
            .should('have.value', 'Peter Wood')
    })

    it('Enters an address', () => {
        cy.get('input[name="custAddr"]').type('1234 Main St')
            .should('have.value', '1234 Main St')
    })

    it('Enters a phone number', () => {
        cy.get('input[name="custPhone"]').type('3035551234')
            .should('have.value', '3035551234')
    })

    it('Chooses the Delivery option', () => {
        cy.get('input[name="puDelivery"]').check('Delivery')
            .should('have.value', 'Delivery')
    })

    it('Chooses a Pizza size (Medium)', () => {
        cy.get('select').select('Medium')
            .should('have.value', 'Medium')
    })

    it('Chooses a Pizza Sauce (BBQ)', () => {
        cy.get('input[name="sauce"]').check('BBQ Sauce')
            .should('have.value', 'BBQ Sauce')
    })

    it('Chooses the following toppings (Pulled Pork, Breakfast Bacon, Green Peppers, Jalapeno)', () => {
        cy.get('input[name="pulledPork"]').check()
            .should('have.value', 'on')
            
        cy.get('input[name="breakfastBacon"]').check()
        .should('have.value', 'on')
        
        cy.get('input[name="greenPeppers"]').check()
            .should('have.value', 'on')
            
        cy.get('input[name="jalapeno"]').check()
        .should('have.value', 'on')
    })

    it('Enters in some special instructions', () => {
        cy.get('textarea').type('I live in a heavily fortified area. You will need the following: gate key 1 is 9576, gate key 2 is 4821965, pass phrase to the guard is I need to drop this egg')
            .should('have.value', 'I live in a heavily fortified area. You will need the following: gate key 1 is 9576, gate key 2 is 4821965, pass phrase to the guard is I need to drop this egg')
    })

    it('Clicks the Confirm button', () => {
        cy.get('button[name="submitOrder"]').click()
    })
})