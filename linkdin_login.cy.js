///<reference types="cypress">
describe('this is lindin login functionality',()=>{
    it("Should log in without issues", () => {
        cy.visit("https://www.linkedin.com/checkpoint/lg/sign-in-another-account");
        cy.get('#username').type('mayankraghav314@gmail.com')
        cy.get('#password').type('Myan')
        cy.get('button[type="submit"]').click()
    });
   



})

  