# JSL05 Project Brief: Task Board with Local Storage Persistence and Task Creation

## Overview

In this task multiple technologies have been used, and new elemets and functionality have been added to the previos Khanban board made for JSL04. 
HTML, with empty divs poppulated by array data in itiial scripts are present. There are also two dialog modal boxes whcih are "hidden" elements.
CSS is used for styling, as well as media queries for responsive changes depending on screen sizes.
JavaScript is used for interactivity. There is one script for array data called initialData. The other, scripts, is for functionalk code that completes tasks.
Functions are created to perform specific tasks, such as rendering data on the browser. There are also functions for on click events to bring up the modals. Data is  stored in local storage and is avaialable on page refresh. 

## Key Objectives

Clean and maintanable code.
Responsive design that adapts based on screen size.
JavaScript functionality


## Design & Responsiveness

- The **"Add New Task" modal** should match the [Figma design](https://www.figma.com/design/y7bFCUYL5ZHfPeojACBXg2/Challenges-%7C-JSL?node-id=0-1&p=f&t=NNqgDPlU1PNLLh8i-0), including mobile-responsive behavior.
- Ensure that the modal and task board are **fully responsive** and function properly on both desktop and mobile devices.
- The "Add Task" button should **transform** appropriately on mobile devices to match the Figma design.

## Code Structure & Maintainability

- **Modularize your JavaScript code**: Break your code into separate modules, each handling a **single responsibility** (e.g., local storage handling, task rendering, modal management).
- Use **descriptive variable and function names** to ensure the code is clear and easy to maintain.
- Include **JSDoc comments** for every major function and module to describe their functionality, parameters, and return values.

## Expected Outcome

A fully functional task management system where tasks are dynamically loaded from **local storage**, tasks can be **added through a modal**, and the application **remains consistent** after refreshing the page. The code will be modular, well-documented, and easy to maintain, following best practices for JavaScript development.
