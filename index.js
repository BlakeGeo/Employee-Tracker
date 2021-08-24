const sequelize = require('./config/connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const { start } = require('repl');

// Connect to db
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    console.log("Successfully connected to employee_db database")
);

// Run funciton on connection to db
db.connect(err => {
    if (err) throw err;
    afterConnection();
});

afterConnection = () => {
    console.log(`
    ********************
    ******Employee******
    ******Tracker*******
    ********************`)
    startQuestions()
};

function startQuestions() {
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: Object.keys(operations)
    })
    .then(({ task }) => operations[task]())
}

// Choices for the user to select which function they want
const operations = {
    "View Employees": viewEmployees,
	// "View Employees By Manager": viewEmployeesByManager,
	// "View Employees By Department": viewEmployeesByDept,
	// "View Roles": viewRoles,
	// "View Departments": viewDepartments,
	// "View utilized budget of a department": departmentBudget,
	// "Add Employee": addEmployees,
	// "Add Department": addDepartments,
	// "Add Roles": addRoles,
	// "Update Employee Role": updateEmployees,
	// "Update Employee's Manager": updateEmployeeManager,
	// "Delete Department": deleteDept,
	// "Delete Employee": deleteEmployee,
	// "Delete Role": deleteRoles,
	// "Exit App": process.exit
}

// View all employees
function viewEmployees() {
    let query = `SELECT e.id, e.first_name AS "First Name", e.last_name AS "Last Name", r.title AS "Role Title", r.salary AS Salary, d.name AS "Department Name", IFNULL(CONCAT (em.first_name,' ',em.last_name),"No Manager") AS Manager
    FROM employee e
    LEFT OUTER JOIN employee em ON e.manager_id = em.id
    JOIN roles r ON e.role_id = r.id
    JOIN department d ON r.department_id = d.id`
    db.query(query, function (err, results) {
        if (err) throw err;
        console.table(results);
        startQuestions();
    });

}