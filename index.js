const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

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
            name: "usage",
            message: "What is this application used for?",
        },
        {
            type: "editor",
            name: "installation",
            message: "How do you install the application?",
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors?",
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
        }
    ]);
}

// function to initialize program
async function init() {
    console.log("Welcome to the README.md file Generator");
    try {
        const answers = await promptUser();

        const markDown = generateMarkdown(answers);

        await writeFileAsync("README.md", markDown);

        console.log("Successfully completed the README.md");
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
