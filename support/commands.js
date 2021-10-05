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

Cypress.Commands.add('loginPageURL', () =>{
    cy.visit('https://storymaps.arcgis.com/')
   // cy.get(".signed-out-actions > .jsx-42443724").click()
    cy.get(".signed-out-actions").click()
})

//Function to Login Into ArcGIS StoryMaps.
Cypress.Commands.add('loginstorymaps', (username,password) => {
    cy.get('#user_username').type(username);
    cy.get('#user_password').type(password);
    cy.get('#signIn').click();
})

//Function To Signout of ArcGIS StoryMaps.
Cypress.Commands.add('logOut', () => {
    cy.get('.dropdown-target').click();
    cy.get('.dropdown-menu-item-content').contains('Sign out').click();        
})
    
