# Max's MySQL Employee Tracker

  
## Description:

Max's MySql Employee Tracker allows you to interact with the employee data base and complete tasks for example: delete, update, add and view different parts of the database. 

## Table of Contents:
- [Max's MySQL Employee Tracker](#maxs-mysql-employee-tracker)
  - [Description:](#description)
  - [Table of Contents:](#table-of-contents)
- [Overview](#overview)
  - [The Task](#the-task)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Usage Instructions](#usage-instructions)
  - [Repository Link:](#repository-link)
  - [Walkthrough Video:](#walkthrough-video)
  - [Screenshots.](#screenshots)
    - [Figure 1. Command line interface](#figure-1-command-line-interface)
  - [Installation Process](#installation-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Author](#author)

# Overview

## The Task

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story
```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input


WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```


## Usage Instructions

1. Open 'Intergrated Terminal' on 'server.js' and enter 'node server.js'
2. Use the 'UP' and 'DOWN' arrow keys to navigate the command line. 
3. Click 'enter' or 'return' on your respective choice.
4. Follow all commad line prompts as directed until desired choice has been met.


## Repository Link:
[Repository Link 'Click Here'.](https://github.com/MaxKeable/MySQL-Employee-tracker.git)

## Walkthrough Video:
[Click Here to Watch.](https://drive.google.com/file/d/1CFrbppg7c1kKWVZ9TQvwLpIxw5ljNXdk/view)

## Screenshots.
### Figure 1. Command line interface
![screen shot 1](./assets/Image%209-5-2023%20at%203.17%20pm.jpg)

![screen shot 2](./assets/Image%209-5-2023%20at%203.19%20pm.jpg)

## Installation Process
1. Clone or download the zip.folder of the repository: [MySQL-Employee-Tracker](https://github.com/MaxKeable/MySQL-Employee-tracker)
2. Install the following: 
- Inquirer.js: [Version 9.2.2](https://www.npmjs.com/package/inquirer/v/9.2.2)
- MySQL2: [Version 3.3.0](https://www.npmjs.com/package/mysql2)
- Console.table: [Version 0.10.0](https://www.npmjs.com/package/console.table)
3. Open the repository in a source code editor.
4. Open the integrated terminal for the document and complete the installation.

## Built With

- JavaScript 
- Cfonts: [Cfonts 3.1.1](https://www.npmjs.com/package/cfonts)
- Inquirer.js: [Version 9.2.2](https://www.npmjs.com/package/inquirer/v/9.2.2)
- MySQL2: [Version 3.1.2](https://www.npmjs.com/package/mysql2)
- Console.table: [Version 0.10.0](https://www.npmjs.com/package/console.table)
- Visual Studio Code: [Website](https://code.visualstudio.com/)

## What I Learned
1. How to build a command-line application from scratch to manage an employee database, using Node.js, Inquirer, and MySQL.
2. Creating a content management systems (CMS). 
3. Create walkthrough video that demonstrates the interfaces functionality and acceptance criteria along with the BONUS acceptance criteria.

## Author

Follow me on Github at [MaxKeable](https://github.com/MaxKeable)! Additional questions or concerns? feel free to contact me at keabledev@gmail.com


© 2023 [MaxKeable](https://github.com/MaxKeable). Confidential and Proprietary. All Rights Reserved.