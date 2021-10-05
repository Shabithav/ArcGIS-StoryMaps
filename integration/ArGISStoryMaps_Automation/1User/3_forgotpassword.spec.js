import loginpage from '../../../support/PageObjects/loginpage';
import forgotuserpage from '../../../support/PageObjects/forgotuserpage';


describe('ArcGIS StoryMaps', () =>{

    //Setup part
    before( function (){
        cy.fixture('storymapsdata').then(function (storymapsdata) {
            this.storymapsdata = storymapsdata
        })
        cy.loginPageURL()      
    })

    //Verify workflow for Forgot Password link in Login page.
    it('Forgot Password' , () =>{
        //Object Creation for PageObject Page Class and assigning it to a constant variable
        const loginPage = new loginpage();
        const forgotuserPage = new forgotuserpage();

        //Forgot Username link
        loginPage.getForgotPassword().contains(loginPage.getForgotPasswordText()).click();
        forgotuserPage.getPageTitle().invoke('text').should('include', 'Forgot password');
        forgotuserPage.getUsername().should('be.enabled').type('this.storymapsdata.username{enter}');
        forgotuserPage.getEmailConfirmation().should('contain', loginPage.getEmailMessage());
        forgotuserPage.getReturnSigin().should('contain',  loginPage.getReturnSigin()).click();   
        loginPage.getLoginPage().should('contain', loginPage.getArcGISLoginTitle());                

    })
})