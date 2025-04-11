describe('currency converter functionality', () => {
  it('should convert currency successfully if api call is successfull', ()=>{
    cy.visit('http://localhost:4200/')
    cy.get('#amount').clear()
    cy.get('#amount').type('100');
    cy.get('#fromCurrency').select('CAD');
    cy.get('#toCurrency').select('USD');
    cy.get('button').click();
    cy.get('#convertedAmount').should('exist');
  })
  
})