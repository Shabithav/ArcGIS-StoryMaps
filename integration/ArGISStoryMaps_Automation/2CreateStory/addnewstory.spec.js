
/// <reference types="cypress" />

import loginpage from '../../../support/PageObjects/loginpage';
import forgotusername from '../../../support/PageObjects/forgotuserpage';
import storiespage from '../../../support/PageObjects/storiespage';
import newstoriespage from '../../../support/PageObjects/newstoriespage';


describe('ArGISStory Maps', () =>{

    //Setup Part
    beforeEach( function (){
        cy.fixture('storymapsdata').then(function (storymapsdata) {
            this.storymapsdata = storymapsdata
        })
        cy.loginPageURL()   
    })

    //Adding New Story
    it('Add New Story', function() {
        
        const storiesPage = new storiespage();
        const newstoriesPage =new newstoriespage();
        //Login
        cy.loginstorymaps(this.storymapsdata.username,this.storymapsdata.password); 
        //Verify Login
        storiesPage.getTitle().should('contain',storiesPage.getStoryPageLabel());
        storiesPage.getStoriesURL().should('eq',storiesPage.getStoriesURLValue());
        //Add New Story
        storiesPage.getNewStoryButton().contains(storiesPage.getNewStoryLabel()).click();
        storiesPage.getStoryScratch().contains(storiesPage.getStoryScratchLabel()).click()
        //Add Story Title
        newstoriesPage.getStoryTitle().invoke('attr', 'placeholder').should('contain', newstoriesPage.getStoryTitleLabel());
        newstoriesPage.getStoryTitle().type(this.storymapsdata.storytitle);
        //Add Story description
        newstoriesPage.getStoryDescription().invoke('attr', 'placeholder').should('contain', newstoriesPage.getStoryDescriptionLabel());
        newstoriesPage.getStoryDescription().type(this.storymapsdata.description);
        //Modify User name
        newstoriesPage.getStoryUser().invoke('attr', 'placeholder');
        newstoriesPage.getStoryUser().clear().type(this.storymapsdata.user);
        //Publish Story
        newstoriesPage.getPublishbutton().contains(newstoriesPage.getPublishLabel()).click();
        newstoriesPage.getPublishStorybutton().contains(newstoriesPage.getPublishStoryLabel()).click();
        //Verify Story title published
        newstoriesPage.getStorytitleVerify().should('contain', this.storymapsdata.storytitle);
    })

    //Tear down
    it('Delete New Story', function() {
        const storiesPage = new storiespage();
        cy.loginstorymaps(this.storymapsdata.username,this.storymapsdata.password); 
        //Select the story created and delete
        storiesPage.getStorycontextMenu().last().click(); 
        storiesPage.getDeletbutton().contains('Delete').click();
        storiesPage.getConfirmDeletebutton().contains('Yes, delete').click();
        cy.logOut();
    })
    
    

    //ToDo Verify all links in Stories Page

})