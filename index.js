import inquirer from 'inquirer';
import cTable from 'console.table';
import departmentObj from './commands/viewDepartments.js';
// import viewRoles from './commands/viewRoles.js';
// import viewEmployees from './commands/viewEmployees.js';
// import addRole from './commands/addRole.js';
// import addDept from './commands/addDepartment.js';
// import addEmployee from './commands/addEmployee.js';
// import updateRole from './commands/updateEmpRole.js';

//variable to ask navigating question
const commandPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'command',
            message: 'What would you like to do?',
            choices:
                ['view all departments',
                    'view all roles',
                    'view all employees',
                    'add a department',
                    'add a role',
                    'add an employee',
                    'update an employee role',
                    'quit'],
        }
    ]);
}

function commandNavigation(command) {
    switch (command) {
        case 'view all departments':
            return departmentObj.viewDept();
        case 'view all roles':
            viewRoles;
            break;
        case 'view all employees':
            viewEmployees;
            break;
        case 'add a department':
            addDept;
            break;
        case 'add a role':
            addRole;
            break;
        case 'add an employee':
            addEmployee();
            break;
        case 'update an employee role':
            updateRole();
            break;
        case 'quit':
            console.log('Till next time!');
            return;
    }
};

//function to ask user for command and do request accordingly
function navigateUser() {
    commandPrompt()
        .then((response) => {
            let data = commandNavigation(response.command);
            return data;
        }).then((data) => {
            const table = cTable.getTable(data);
            console.log('\n');
            console.table(table);
            navigateUser();
        })
};


function start() {
    console.log("\nWelcome to Employee Tracker!\n");
    navigateUser();
    return;
}

start();