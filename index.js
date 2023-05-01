//packages/classes needed for application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const employees = [];

const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee would you like to add to the team?',
            choices: ['Engineer', 'Intern', 'Finished building my team']
        }])
        .then(managerSelection => {
            switch (managerSelection.role) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                case 'Finished building my team':
                    generateTeam()
            }
        })
}

const promptManager = () => {
    console.log('Come on in Manager')
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        },

    ]).then(responses => {
        const manager = new Manager(responses.name, responses.id, responses.email, responses.officeNumber)
        employees.push(manager);
        console.log(manager)
        addTeamMember()

    })
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?'
        },
    ]).then(responses => {
        const engineer = new Engineer(responses.name, responses.id, responses.email, responses.github)
        employees.push(engineer);
        addTeamMember()

    })
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did you attend?'
        },
    ]).then(responses => {
        const intern = new Intern(responses.name, responses.id, responses.email, responses.school)
        employees.push(intern);
        addTeamMember()

    })
}

function generateTeam() {
    fs.writeFileSync('./dist/index.html', writeHTML(employees), 'utf-8');
}

promptManager()