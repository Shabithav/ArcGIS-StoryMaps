ArcGIS Story Maps Automation with Cypress

Test Coverage includes User Login Validations, Adding New Story and Tear Down.

Test framework:
1.	Fixtures: Used Fixtures to set up data for login and story creation
2. 	Integrations: Tests for User Validations and Creating Stories.
3.	Support/Page Objects: For code reusability and maintainability, used Page Objects Model with Page classes for Loginpage, Storiespage, NewStoriespage and Forgotuserpage
4.	Support/commands: To add reusable tests functions like Login and tear down.
5.	Cypress.json: Cypress test runner configuration modified for Timeout and video as false .

Test Coverage:

User Login Validations:

1.	Successful login page using page objects loginpage.js
2.	Successful login  test Using Fixtures and functions from commands.js
3.	Signing without username and password
4.	Signing with valid Username and enter key
5.	Signing with valid Username and wrong Password
6.	Verify links in Login  page

User Forgot username and Password Validations:

1.	Verify workflow for Forgot Username link in Login page.
2.	Verify workflow for Forgot Password link in Login page.

Story creation-Add new Story, Delete story and Sign out:
1.	Login to ArcGIS story maps Using Fixtures and functions from commands.js
2.	Add a New Story from Scratch
3.	Add title, description, Username using  the data from fixture
4.	Publish Story and verify the Title.
5.	Delete the Story created and Signout.
