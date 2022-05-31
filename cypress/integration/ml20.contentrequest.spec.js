/// <reference types="cypress" />


describe('ml20 login', () => {

  beforeEach(() => {
    cy.viewport(1920, 1080)
  })
 
  before(() => {
    cy.visit('https://soundmouse.net/admintools/ml-test/signin')
  })

  it('User Login', () => {

   cy.get('#email').type('jasith@adelanka.com')
   cy.get('#password').type('Jasith123!@#')

   cy.get('.MuiButtonBase-root').click()
    

  })

  it('Send Created Content Request-Track', () => {

   
    
    cy.get('[aria-label="Messages"]').click()
    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > [title="Create Content Request"]').click()
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('.MuiList-root > .Mui-selected').click()
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(2) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="5"]').click()
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="3"]').click()

    cy.get(':nth-child(2) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Title')
    cy.get(':nth-child(3) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Performer')
    cy.get(':nth-child(4) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Album')
    cy.get(':nth-child(5) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Catalog#')
    cy.get(':nth-child(6) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Record Label')
    cy.get(':nth-child(7) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Publisher')
    cy.get(':nth-child(8) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Alternate Title')
    cy.get(':nth-child(9) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Distributor Name')
    cy.get('[rows="1"]').type('Test Notes')

    cy.wait(3000) // wait for 3 seconds
    //Send Created Content Request
    cy.get('.jss762 > :nth-child(2)').click()


  
  })


  it('Send and Create New Content Request-Track', () => {

    cy.get('[aria-label="Messages"]').click()
    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > [title="Create Content Request"]').click()
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('.MuiList-root > .Mui-selected').click()
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(2) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="5"]').click()
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="3"]').click()

    cy.get(':nth-child(2) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Title')
    cy.get(':nth-child(3) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Performer')
    cy.get(':nth-child(4) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Album')
    cy.get(':nth-child(5) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Catalog#')
    cy.get(':nth-child(6) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Record Label')
    cy.get(':nth-child(7) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Publisher')
    cy.get(':nth-child(8) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Alternate Title')
    cy.get(':nth-child(9) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Distributor Name')
    cy.get('[rows="1"]').type('Test Notes')

    //Send and Create New Content Request
    cy.get('.jss762 > :nth-child(3)').click()

    cy.wait(3000) // wait for 3 seconds
    cy.get('.jss766 > .MuiButtonBase-root').click()

  })


  it('Send Created Content Request-Album', () => {

    cy.get('[aria-label="Messages"] > .MuiButton-label').click()
    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > [title="Create Content Request"]').click()
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="1"]').click()
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(2) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="2"]').click()
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="4"]').click()

    cy.get(':nth-child(2) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Title')
    cy.get(':nth-child(3) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Album Artist')
    cy.get(':nth-child(4) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Catalog #')
    cy.get(':nth-child(5) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Record Label')
    cy.get(':nth-child(6) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Publisher')
    cy.get(':nth-child(7) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Distributor Name')
    cy.get('[rows="1"]').type('Test Notes')

    cy.wait(3000) // wait for 3 seconds
    //Send Created Content Request
    cy.get('.jss762 > :nth-child(2)').click()
  })


  it('Send and Create New Content Request-Album', () => {

    cy.get('[aria-label="Messages"]').click()
    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiPaper-root > .MuiList-root > [title="Create Content Request"]').click()
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(1) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="1"]').click()
    cy.get('.MuiGrid-container > :nth-child(1) > :nth-child(2) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="2"]').click()
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiSelect-root').click()
    cy.get('[data-value="4"]').click()

    cy.get(':nth-child(2) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Title')
    cy.get(':nth-child(3) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Album Artist')
    cy.get(':nth-child(4) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Catalog #')
    cy.get(':nth-child(5) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Record Label')
    cy.get(':nth-child(6) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Publisher')
    cy.get(':nth-child(7) > .jss776 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Test Distributor Name')
    cy.get('[rows="1"]').type('Test Notes')

    //Send and Create New Content Request
    cy.get('.jss762 > :nth-child(3)').click()

    cy.wait(3000) // wait for 3 seconds
    cy.get('.jss766 > .MuiButtonBase-root > .MuiButton-label > .MuiSvgIcon-root').click()


  })



})