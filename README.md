
<h1 align="center">Employee Tracker</h1>
   
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/BlakeGeo/Employee-Tracker" />
    <img src="https://img.shields.io/github/languages/top/BlakeGeo/Employee-Tracker"  />
    <img src="https://img.shields.io/github/issues/BlakeGeo/Employee-Tracker" />
    <img src="https://img.shields.io/github/last-commit/BlakeGeo/Employee-Tracker" >
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/VisualStudioCode-blue"  />
    <img src="https://img.shields.io/badge/-Node.js-green" />
    <img src="https://img.shields.io/badge/-Inquirer-red" >
    <img src="https://img.shields.io/badge/-Screencastify-lightgrey" />
    <img src="https://img.shields.io/badge/-MySQL-orange" />
    <img src="https://img.shields.io/badge/-sequelize-brightgreen" />

</p>
   
## Description
  
🔍 A node.js app that allows you to track all employees in a database, whilst also using inquirer to prompt the user of anything they want shown or any updates to be made. Including departments and roles within the company.
  
💻 Below is a gif showing the functionality of the application:
  
![Employee Tracker](assets/Employee-tracker.gif)
  
🎥 The full movie file showing functionality of the application can be found [here](https://drive.google.com/file/d/1gUn3GAVwaSPsoiAPqFO4719lK-tn-rUB/view)
  
## User Story
  
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```
  
## Acceptance Criteria
  
``` 
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
  
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation
💾 Run the following commands to install this application
  
`npm init`
  
`npm i inquirer mysql2 sequelize dotenv console.table`
  
## Usage
💻 Run the following command at the root of your project and answer the prompted questions:
  
`node index.js`

## Contributing
[Blake Georgeff](https://github.com/BlakeGeo)

## Contact
✉️ Contact me with any questions: [email](mailto:georgeffb@hotmail.com) , [GitHub](https://github.com/BlakeGeo)<br />

    