class newstoriespage{

  
    getStoryDescription(){
        return cy.get('[aria-label= "Start with a short introduction or subtitle (optional)"]');
    }

    getStoryDescriptionLabel(){
        return 'Start with a short introduction or subtitle (optional)';
    }

    getStoryTitle(){
        return cy.get('[aria-label= "Title your story"]');
    }

    getStoryTitleLabel(){
        return 'Title your story';
    }

    getStoryUser(){
        return cy.get('[aria-label="Add a byline (optional)"]');
    }

    getPublishbutton(){
        return cy.get('button');
    }
    getPublishLabel(){
        return 'Publish';
    }

    getPublishStorybutton(){
        return cy.get('button');
    }
    getPublishStoryLabel(){
        return 'Publish story';
    }

    getStorytitleVerify(){
        return cy.get('.sc-title');
    }
    getSignout(){
        return cy.get('.dropdown-target');
    }

    
    
}
export default newstoriespage