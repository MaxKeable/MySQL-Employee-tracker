import inquirer from "inquirer";
import mysql from "mysql2";
import start from '../server.js';

// Create variable to connect to mysql
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "qqy#QGYJCMPueVETRv9V",
    database: "employeeTracker_db",
});


// function to update an employee role
function updateEmployeeRole() {
    const queryEmployees =
        "SELECT employee.id, employee.first_name, employee.last_name, roles.title FROM employee LEFT JOIN roles ON employee.role_id = roles.id";
    const queryRoles = "SELECT * FROM roles";
    connection.query(queryEmployees, (err, resEmployees) => {
        if (err) throw err;
        connection.query(queryRoles, (err, resRoles) => {
            if (err) throw err;
            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "employee",
                        message: "Select the employee to update:",
                        choices: resEmployees.map(
                            (employee) =>
                                `${employee.first_name} ${employee.last_name}`
                        ),
                    },
                    {
                        type: "list",
                        name: "role",
                        message: "Select the new role:",
                        choices: resRoles.map((role) => role.title),
                    },
                ])
                .then((answers) => {
                    const employee = resEmployees.find(
                        (employee) =>
                            `${employee.first_name} ${employee.last_name}` ===
                            answers.employee
                    );
                    const role = resRoles.find(
                        (role) => role.title === answers.role
                    );
                    const query =
                        "UPDATE employee SET role_id = ? WHERE id = ?";
                    connection.query(
                        query,
                        [role.id, employee.id],
                        (err, res) => {
                            if (err) throw err;
                            console.log(
                                `Updated ${employee.first_name} ${employee.last_name}'s role to ${role.title} in the database!`
                            );
                            // restart the application
                            start();
                        }
                    );
                });
        });
    });
}


function updateEmployeeManager() {
    const queryEmployees =
        "SELECT employee.id, employee.first_name, employee.last_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee LEFT JOIN employee AS manager ON employee.manager_id = manager.id";
    connection.query(queryEmployees, (err, resEmployees) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "employee",
                    message: "Select the employee to update:",
                    choices: resEmployees.map(
                        (employee) =>
                            `${employee.first_name} ${employee.last_name}`
                    ),
                },
                {
                    type: "list",
                    name: "manager",
                    message: "Select the new manager:",
                    choices: resEmployees.map(
                        (employee) => 
                        `${employee.manager_name}`
                    ),
                },
            ])
            .then((answers) => {
                const employee = resEmployees.find(
                    (employee) =>
                        `${employee.first_name} ${employee.last_name}` ===
                        answers.employee
                );
                const manager = resEmployees.find(
                    (employee) =>
                        `${employee.first_name} ${employee.last_name}` ===
                        answers.manager
                );
                const query =
                    "UPDATE employee SET manager_id = ? WHERE id = ?";
                connection.query(
                    query,
                    [manager.id, employee.id],
                    (err, res) => {
                        if (err) throw err;
                        console.log(
                            `Updated ${employee.first_name} ${employee.last_name}'s manager to ${manager.first_name} ${manager.last_name} in the database!`
                        );
                        // restart the application
                        start();
                    }
                );
            });
    });
}




// export function
export { updateEmployeeRole, updateEmployeeManager }; 