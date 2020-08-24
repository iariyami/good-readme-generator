const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// array of questions for user
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project name?",
        },
        {
            type: "editor",
            name: "description",
            message: "Provide a description of your project.",
        },
        {
            type: "list",
            name: "license",
            message:
                "Choose a license.",
            choices: ["MIT", "Apache", "ISC", "None"],
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors?",
        },
        {
            type: "editor",
            name: "installation",
            message: "How do you install the application?",
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address",
        },
        {
            type: "input",
            name: "usage",
            message: "What are the instructions for using this application?",
        },
    ]);
}
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
