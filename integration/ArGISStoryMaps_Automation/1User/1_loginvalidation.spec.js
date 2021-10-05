import loginpage from '../../../support/PageObjects/loginpage';

describe('Login Validation', () =>{
    beforeEach( function (){
        cy.fixture('storymapsdata').then(function (storymapsdata) {
            this.storymapsdata = storymapsdata
        })      
        cy.loginPageURL()
    })

    //Strategy #1: Successful login page using pageobjects loginpage.js
    it ('Strategy 1: Successfull Login Validations with POM', function() {
    //Object Creation for PageObject Page Class and assigning it to a constant variable
        const loginPage = new loginpage();

        loginPage.getUserName().type('this.storymapsdata.username');
        loginPage.getPassword().type('this.storymapsdata.password');
        loginPage.getSignInButton().click;
        loginPage.getUserName().should('have.value', 'this.storymapsdata.username');
        loginPage.getPassword().should('have.value', 'this.storymapsdata.password');
    })

    //Strategy #2: Successful  login  Using Fixtures and functions from commands.js
    it ('Strategy 2: Successfull  Login Validations using commands.js', function() {
        cy.loginstorymaps(this.storymapsdata.username,this.storymapsdata.password); //login function
        cy.get("h2", { timeout: 10000 }).should('contain', 'Stories');
    })  
    
    //Strategy #3: Signing without username and password
    it('Strategy #3: Requires username', () =>{
        const loginPage = new loginpage();
        loginPage.getSignInButton().click();
        loginPage.getUsernameError().should('contain', loginPage.getUsernameErrorText());
        loginPage.getPasswordError().should('contain', loginPage.getPasswordErrorText());
     })

    //Strategy #4: Signing  with valid Username and enter key
    it ('Strategy #4: Requires password', function() {
        const loginPage = new loginpage();
        loginPage.getUserName().should('be.visible').should('be.enabled').type('this.storymapsdata.username{enter}');
        loginPage.getPasswordError().should('contain', loginPage.getPasswordErrorText());
    })

    //Strategy #5: Signing  with valid Username and wrong Password
    it('Strategy #5: Requires valid user name and password' , () =>{
        const loginPage = new loginpage();
        loginPage.getUserName().should('be.visible').should('be.enabled').type('this.storymapsdata.username');
        loginPage.getPassword().should('be.visible').should('be.enabled').type('this.storymapsdata.invalidpassword{enter}');
        loginPage.getErrormessage().should('contain', loginPage.getUsernamePasswordErrorText());
        //loginPage.getErrormessage().should('contain', loginPage.getToomanyLoginErrorText());
    })

    //Strategy #6: Verify links in Login  page
    it ('Strategy #6: Links to forgot username and password', () =>{
        const loginPage = new loginpage();
        loginPage.getArcGISLogin().contains('ArcGIS login')
        loginPage.getForgotUserName().contains('Forgot username?');
        loginPage.getForgotPassword().contains('Forgot password?');
        loginPage.getCreateAccount().contains('#createAcctLink' , 'Create a public account.');
        loginPage.getOrganizationalURL().contains("Your ArcGIS organization's URL");
    })
  
    //ToDo strategy #7: Too many login validations

    //Todo Sttrategy #8: Session time out

    //ToDo Strategy #9: Login with ArcGIS Organization's URL

    //ToDo Strategy #10: Links to different signin options
})