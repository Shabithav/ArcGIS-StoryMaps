class forgotuserpage{

    getPageTitle(){
        return cy.get('#pageTitle');
    }

    getEmail(){
        return cy.get('#user');
    }

    getEmailConfirmation(){
        return cy.get('#primary');
    }

    getReturnSigin(){
        return cy.get('#returnLink');
    }

    getUsername(){
         return cy.get('#user');
    }

    getURL(){
        return cy.get(URL);
    }
    
}
export default forgotuserpage

