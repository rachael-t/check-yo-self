# Check Yo' Self

##Abstract
Building a checklist application called Check Yo'Self.


##Learning Goals
  * Solidify and demonstrate your understanding of:
  * DRY JavaScript
  * localStorage to persist data
  * Iterate through/filter DOM elements using for loops
  * Understand the difference between the data model and how the data is displayed on the DOM
  
  
##Architecture
Your entire application will consist of one HTML page or template. You will have three JavaScript files:

A todo-list.js file that contains a ToDoList class.
ToDoList methods must include, but are not limited to:
constructor
saveToStorage
deleteFromStorage
updateToDo (should update the todo’s title and urgency)
updateTask (should update a task’s content and if it has been completed)
A task.js file that contains a Task class. We aren’t giving you any requirements about what methods or properties should be on it.
A main.js file that contains all DOM related JavaScript


##Data Model
A to-do list has an id, title, tasks, and urgent property.
The id property should be a unique identifier
title is a string
urgent is a boolean value
tasks should be an array of objects
Each task in the array should be an object (you’ll need a way to identify these objects, track whether the task has been completed, and store the task’s text…)
See above for the required methods of the ToDoList class.
Each todo list on the page should be created as an instance of the ToDoList class.


##Iteration 0: Beginning User Flow
Viewing the List of To-Dos
When visiting the application, the user should:

See a list of all existing to-dos, including the title, list of tasks to be checked off, and state of urgency.
To-dos should appear in descending chronological order (with the most recently created todo at the top left).
If there are no to-dos yet, then there should be an indication to the user to create a todo list, displayed in the empty section.
Adding a New Checklist
On the left side of the page, a user should see:

Two inputs for entering the title and adding a new task to the list.
Two buttons including a Make Task List button for committing the checklist and a Clear All button to clear the title and checklist.
Lastly, there should be a Filter by Urgency button.
When a user adds a new Task Item:

The task is added to the bottom of the checklist in between the Task Title and Task Item inputs
Each task on the checklist should also be able to be removed by clicking the respective “delete” button.
It should not add a task to the checklist if the input is empty.
Tasks on the checklist of the form do not need to persist.
When a user clicks Make Task List:

A new card with the provided title and tasks should appear in the todo list.
The text fields and checklist in the form should be cleared and ready to accept a new todo.
The Make Task List button should be disabled if either the title input or checklist is empty.
The page should not reload.
The todo card should be persisted. It should still be present upon reloading the page.
The todo should be added to localStorage using the saveToStorage method defined in the ToDoList class.
When a user clicks Clear All:

Both the title input and list of tasks should be cleared.
The Clear All button should be disabled if both the title input and checklist are empty.


##Iteration 1: Completing The MVP (Minimum Viable Product)
Checking Off A Task
After a user has completed a task on their checklist, they should be able to check it off.

There should be a visual cue so that the user knows what they have completed and what is still left to do.
Tasks that are checked off should persist upon reloading the page.
The update of the data model should occur in the updateTask method that is defined in the ToDoList class.
How the DOM gets updated using JavaScript should happen in the main.js file.
Deleting an Existing ToDo Card
After creating a todo card, the user should be able to remove it once they have completed their checklist.

Each todo card on the todo list should have a button to remove it from both the data model and the DOM.
The “Delete” button should only be enabled if all of the tasks on the checklist have been checked off.
Upon clicking the “Delete” button, the appropriate todo list should be removed from the DOM.
The update of the data model should happen in the deleteFromStorage method that is defined in the ToDoList class.
How the DOM gets updated using JavaScript should happen in the main.js file
Marking a ToDo Card Urgent
A user should be able to mark their todo cards urgent so that they know which they need to complete first.

When the user clicks on the Urgent button, the button should stay in the active state.
Todo cards that are marked as urgent should persist upon reloading the page.
This update of the data model should occur in the updateToDo method that is defined in the ToDoList class.
How the DOM gets updated using JavaScript should happen in the main.js file


##Iteration 2: Specifying what Content is Viewed
Filtering and Searching by Text
We’d like our users to be able to easily find their to-dos, so let’s provide them a search bar to filter through their list.

At the top of the application, include a text field labeled Search.
As a user types in the search box, the list of to-dos on the DOM should filter in real time to only display todo cards whose title include the user’s text. The page should not reload.
Clearing the search box should restore all todo cards on the list.
There is no need to make persisting changes to the data model to achieve this functionality.
Viewing Urgent ToDo Cards
Let’s also allow our user be able to view their urgent todo cards only.

The user should only see the urgent todo cards when they click on the Filter by Urgency button. (consequently, the button should be highlighted)
Clicking on the Filter by Urgency button again, the button should no longer be highlighted, and all of the user’s to-dos should be displayed.
When viewing urgent to-dos, the search field should only search through the urgent to-dos.
If there are no urgent to-dos yet, then there should be an indication displayed in the empty todo section notifying the user to mark some to-dos urgent.
These changes do not need to persist in between sessions.


##Iteration 3 (Extensions): Improving on the Experience
Editing Our Tasks
A user would likely want to edit the title of a todo or update their task later on.

When a user clicks the title or any of the tasks on the checklist of a todo card, that text should become an editable text field, pre-populated with the existing todo title or task.
The user should be able to “commit” their changes by pressing “Enter/Return” and by clicking outside of the text field.
This change should be saved in localStorage using the updateTodo method for the title and updateTask method for the task defined in the ToDoList class.
Improving The Search Functionality
Our user might want to be able to search their cards not only by their title, but by their tasks as well.

The user should have a drop down next to the search bar to select if they want to filter their list by Title, Tasks, or All.
Searching by the Title will be the original functionality where it filters the todo cards by their title based on the user’s text.
Searching by the Tasks will filter the todo cards by their tasks based on the user’s text.
Searching by the All will filter the todo cards by both their title and tasks based on the user’s text.
Adding More Tasks To Each Card
The user might also might to add more tasks to their checklist after they have created a todo card.

Add an input to the bottom of each card so that the user can add more tasks later.
Each task added should appear at the bottom of the list unchecked.
The user should not be able to add blank tasks if the input is empty.
