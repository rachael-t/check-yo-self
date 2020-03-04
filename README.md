# Check Yo' Self

## Overview of Project & Goals

### Abstract
Building a checklist application called Check Yo'Self.

![check-yo-self-comp](https://user-images.githubusercontent.com/54180641/75841905-cd731300-5dc6-11ea-8bfa-b7363386e071.jpg)

### Learning Goals
  * Solidify and demonstrate your understanding of:
  * DRY JavaScript
  * localStorage to persist data
  * Iterate through/filter DOM elements using for loops
  * Understand the difference between the data model and how the data is displayed on the DOM


### Iteration 0: Beginning User Flow
#### Viewing the List of To-Dos
When visiting the application, the user should:
  * See a list of all existing to-dos, including the title, list of tasks to be checked off, and state of urgency.
  * To-dos should appear in descending chronological order (with the most recently created todo at the top left).
    * If there are no to-dos yet, then there should be an indication to the user to create a todo list, displayed in the empty section.

#### Adding a New Checklist
On the left side of the page, a user should see:
  * Two inputs for entering the title and adding a new task to the list.
  * Two buttons including a Make Task List button for committing the checklist and a Clear All button to clear the title and checklist.
  * Lastly, there should be a Filter by Urgency button.

When a user adds a new Task Item:
  * The task is added to the bottom of the checklist in between the Task Title and Task Item inputs
  * Each task on the checklist should also be able to be removed by clicking the respective “delete” button.
  * It should not add a task to the checklist if the input is empty.
  * Tasks on the checklist of the form do not need to persist.

When a user clicks Make Task List:
  * A new card with the provided title and tasks should appear in the todo list.
  * The text fields and checklist in the form should be cleared and ready to accept a new todo.
  * The Make Task List button should be disabled if either the title input or checklist is empty.
  * The page should not reload.
  * The todo card should be persisted. It should still be present upon reloading the page.
  * The todo should be added to localStorage using the saveToStorage method defined in the ToDoList class.

When a user clicks Clear All:
  * Both the title input and list of tasks should be cleared.
  * The Clear All button should be disabled if both the title input and checklist are empty.


### Iteration 1: Completing The MVP (Minimum Viable Product)
#### Checking Off A Task
After a user has completed a task on their checklist, they should be able to check it off.
  * There should be a visual cue so that the user knows what they have completed and what is still left to do.
  * Tasks that are checked off should persist upon reloading the page.
  * The update of the data model should occur in the updateTask method that is defined in the ToDoList class.
  * How the DOM gets updated using JavaScript should happen in the main.js file.

#### Deleting an Existing ToDo Card
After creating a todo card, the user should be able to remove it once they have completed their checklist.
  * Each todo card on the todo list should have a button to remove it from both the data model and the DOM.
  * The “Delete” button should only be enabled if all of the tasks on the checklist have been checked off.
  * Upon clicking the “Delete” button, the appropriate todo list should be removed from the DOM.
  * The update of the data model should happen in the deleteFromStorage method that is defined in the ToDoList class.
  * How the DOM gets updated using JavaScript should happen in the main.js file

#### Marking a ToDo Card Urgent
A user should be able to mark their todo cards urgent so that they know which they need to complete first.
  * When the user clicks on the Urgent button, the button should stay in the active state.
  * Todo cards that are marked as urgent should persist upon reloading the page.
  * This update of the data model should occur in the updateToDo method that is defined in the ToDoList class.
  * How the DOM gets updated using JavaScript should happen in the main.js file


### Iteration 2: Specifying what Content is Viewed
#### Filtering and Searching by Text
We’d like our users to be able to easily find their to-dos, so let’s provide them a search bar to filter through their list.
  * At the top of the application, include a text field labeled Search.
  * As a user types in the search box, the list of to-dos on the DOM should filter in real time to only display todo cards whose title include the user’s text. The page should not reload.
  * Clearing the search box should restore all todo cards on the list.
  * There is no need to make persisting changes to the data model to achieve this functionality.

#### Viewing Urgent ToDo Cards
Let’s also allow our user be able to view their urgent todo cards only.
  * The user should only see the urgent todo cards when they click on the Filter by Urgency button. (consequently, the button should be highlighted)
  * Clicking on the Filter by Urgency button again, the button should no longer be highlighted, and all of the user’s to-dos should be displayed.
  * When viewing urgent to-dos, the search field should only search through the urgent to-dos.
  * If there are no urgent to-dos yet, then there should be an indication displayed in the empty todo section notifying the user to mark some to-dos urgent.
  * These changes do not need to persist in between sessions.


### Iteration 3 (Extensions): Improving on the Experience
#### Editing Our Tasks
A user would likely want to edit the title of a todo or update their task later on.
  * When a user clicks the title or any of the tasks on the checklist of a todo card, that text should become an editable text field, pre-populated with the existing todo title or task.
  * The user should be able to “commit” their changes by pressing “Enter/Return” and by clicking outside of the text field.
  * This change should be saved in localStorage using the updateTodo method for the title and updateTask method for the task defined in the ToDoList class.

#### Improving The Search Functionality
Our user might want to be able to search their cards not only by their title, but by their tasks as well.
  * The user should have a drop down next to the search bar to select if they want to filter their list by Title, Tasks, or All.
  * Searching by the Title will be the original functionality where it filters the todo cards by their title based on the user’s text.
  * Searching by the Tasks will filter the todo cards by their tasks based on the user’s text.
  * Searching by the All will filter the todo cards by both their title and tasks based on the user’s text.

#### Adding More Tasks To Each Card
The user might also might to add more tasks to their checklist after they have created a todo card.
  * Add an input to the bottom of each card so that the user can add more tasks later.
  * Each task added should appear at the bottom of the list unchecked.
  * The user should not be able to add blank tasks if the input is empty.


## Technologies Used
For this project, I used HTML, CSS, and JavaScript.

I also used Trello as a project management board: [Check-YoSelf](https://trello.com/invite/b/LzeSuI6S/87b23d36e23b54bb65c04d23e91846eb/check-yoself)

## Project Reflection

### Wins
During this project I learned a lot about how local storage works with objects, and the process that goes with storing, retrieving, and manipulating data saved within local storage.

I was also really proud of how I got the basic functionality set up to take the user input and show between the two input fields fairly quickly.

Another personal win is knowing how much JavaScript I was able to type and the functionality I was able to build out on my own. Compared to the first solo project, I am very proud of how far I have come the last few weeks in my understanding of JavaScript, despite the numerous challenges I faced with this project.

### Challenges
This project presented itself with more challenges than any other project I have had during Module 1 at Turing.

The first challenge came with the initial CSS styling taking more time than I anticipated. Knowing that was not a focus of this project, I had to leave it in an unfinished state to focus on my JavaScript, but the impact it had upfront in the project was difficult.

The majority of the resulting challenges I encountered were dealing with learning new concepts, implementing them correctly, and knowing whether or not I would create downstream bugs. I felt a lot of pressure with this project's timeline, and thus felt rushed. This resulted in my code not being as DRY and readable as I would like it to be. It also resulted in code that wasn't as dynamic as it should be, which caused a lot of downstream errors.

Specifically, when I initially set up the method saveToStorage, I didn't think at the time how that would need to be called on in later functions after data had been manipulated and would need to be saved back to local storage. This mostly became an issue when I was trying to build out my functionality to handle the urgent button. I was getting the property to update for the object correctly, but I wasn't able to get it to save to local storage and persist in a way that on page reload would result in a smooth user experience. Instead, it wouldn't have the card load on the DOM on reload, nor would it allow the user to add a new todo list card after page reload.

### Reflection
This project really showed me how much I have learned during my first module at Turing, and how much I can continue to learn while working on projects. This project also presented a lot of challenges that were difficult for me to overcome working solo compared with working with a partner or group in the last projects. This taught me how important it is to ask questions as well as showed me how difficult it can be getting input from others who haven't been as immersed in your code as a partner or group would be.

I spent a lot of the last day of the project attempting to get the urgent functionality working, but was not able to make it work successfully without impacting the user experience significantly, so that was left out of my final master code. It it under a new branch **not merged** to master to revisit and continue working on.
