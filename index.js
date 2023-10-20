//Packages used to be able to create a new file from Node
const inquirer = require('inquirer');
const fs = require('fs')
const generatedREADME = require('./utils/generateMarkdown.js')

  inquirer
    .prompt([
{
   type: "input",
   message: "What are you going to call your new app?",
   name: "Title",
},
{
  type: "input",
  message: "give a brief description of your project and any inspiration for creating it",
  name: "Description",
},
{
  type: "input",
  message: "Provide a link to install your app",
  name: "Installation",
},
{
  type: "input",
  message: "How can this be used?",
  name: "usage",
},
{
  type: "input",
  message: "list any links or resources used to create your app. if none were used give yourself credit!",
  name: "Credits",
},
{
  type: "list",
  message: "Choose a license for your Repo",
  name: "License",
  choices: ["MIT", "Apache", "GPL"]
},
{
  type: "input",
  message: "Did you add anything cool the world should know about??",
  name: "Features",
},
{
  type: "input",
  message: "What new features still need added or bugs fixed? if none input 'N/A'",
  name: "Contribute",
},
    ])
  .then((questions) => {
 const YourREADME = generatedREADME (questions)


// Function that creates the new README.md file for you to copy and paste to your own Repo
fs.writeFile('YourREADME.md', YourREADME , (err) => {
    if (err) {
      console.error('Error creating your file:', err);
    } else {
      console.log('All data added to file successfully.');
    }
  })
});

function init() {}

init();
