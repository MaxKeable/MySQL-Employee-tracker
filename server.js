// Import all pagackes and funcitons 

import mysql from "mysql2";
import cfonts from 'cfonts';
import inquirer from 'inquirer';
import { addDepartment, addRole, addEmployee, addManager } from './js/addActions.js';
import { deleteDepartmentsRolesEmployees, deleteEmployee, deleteRole, deleteDepartment } from './js/deleteActions.js';
import updateEmployeeRole from './js/updateAction.js';
import { viewAllDepartments, viewAllRoles, viewAllEmployees, viewEmployeesByManager, viewEmployeesByDepartment, viewTotalUtilizedBudgetOfDepartment } from './js/viewActions.js';


// Create variable to connect to mysql
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "qqy#QGYJCMPueVETRv9V",
    database: "employeeTracker_db",
});

// establish connection with database
connection.connect((err) => {
    if (err) throw err;
    console.log("You are connected to the database!");
    // start the application
    start();
});

// starts and styles the cfont 
cfonts.say('Maxs \nSQL Employee Tracker', {
	font: 'block',            
	align: 'center',            
	colors: ['yellow'],         
	background: 'transparent',  
	letterSpacing: 1,           
	lineHeight: 1,             
	space: true,                
	maxLength: '0',             
	gradient: false,            
	independentGradient: false, 
	transitionGradient: false,  
	env: 'node'                 
});

// Function to Start the employee tracker
function start() {
    inquirer
        .prompt({
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "Add a department",
                "View all employees",
                "Add an employee",
                "View all roles",
                "Add a role",
                "Add a Manager",
                "Update an employee role",
                "View Employees by Manager",
                "View Employees by Department",
                "Delete Departments | Roles | Employees",
                "View the total utilized budget of a department",
                "Exit",
            ],
            useArrowKeys: true,
        })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Add a Manager":
                    addManager();
                    break;
                case "Update an employee role":
                    updateEmployeeRole();
                    break;
                case "View Employees by Manager":
                    viewEmployeesByManager();
                    break;
                case "View Employees by Department":
                    viewEmployeesByDepartment();
                    break;
                case "Delete Departments | Roles | Employees":
                    deleteDepartmentsRolesEmployees();
                    break;
                case "View the total utilized budget of a department":
                    viewTotalUtilizedBudgetOfDepartment();
                    break;
                case "Exit":
                    connection.end();
                    console.log("Goodbye!");
                    break;
            }
        });
}

// close the connection
process.on("exit", () => {
    connection.end();
});

// export start function
export default start; 

export{};