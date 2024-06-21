# CODTECH-Task1 


* **Project Name:** To-Do List
* **Name:** Nihal Kiran Shetty 
* **ID:** CT08DS1986
* **Company:** CODTECH IT SOLUTIONS
* **Domain:** Web Development
* **Duration:** June - July 2024
* **Mentor:** SRAVANI GOUNI

# Overview of the project

**Objective:**

This application aims to be a user-friendly tool that helps users:

* Improve organization and task management by creating and maintaining a list of tasks.
* Enhance productivity by breaking down goals into smaller tasks and providing a visual representation of the to-do list.
* Increase efficiency by allowing users to add, remove, and mark tasks as complete, helping them prioritize work and manage time effectively.
* Gain a sense of accomplishment by seeing completed tasks checked off the list, motivating them to keep moving forward.

**Technologies Used:**

* **HTML:** Defines the structure of the web page, including the input box, button, and list container.
* **CSS:** Styles the visual elements of the application, such as the background color, fonts, and layout.
* **JavaScript:** Provides interactivity, allowing users to add tasks, mark them complete, and remove them.
* **Local Storage (Optional):** Saves the task list even after the page is refreshed.

**User Interface (UI) Elements:**

* **Input Box:** Users enter new tasks here.
* **Add Button:** Clicking this button adds the task to the list.
* **Task List:** Displays all entered tasks.
* **Task Items:** Individual tasks displayed in the list.
* **"×" Symbol (Optional):** Clicking this symbol next to a task removes it from the list. (Implemented with a span element containing the unicode character '×')
* **Checked Status:** Clicking on a task marks it as completed (strikethrough text).

**Functionality:**

1. **Adding Tasks:** Users enter a task description in the input box and click the "Add" button.
2. **Displaying Tasks:** Entered tasks are displayed in the list container.
3. **Marking Tasks Complete:** Clicking on a task toggles its "checked" class, applying a strikethrough style to the text.
4. **Removing Tasks (Optional):** Clicking the "×" symbol next to a task removes it from the list.
5. **Saving Tasks (Optional):** Local storage can be used to save the current task list, allowing it to persist even after the page is refreshed. (The provided code includes a `savedata` function but may not have a corresponding `loaddata` function to implement this functionality)
