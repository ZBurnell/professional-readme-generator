// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [ Title , Description , Installation , Usage , Credits , License , Features , Contribute];

const prompt = inquirer.createPromptModule();
inquirer.prompt([
{
   type: "input",
   message: "What do you want to call your app",
   name: "Title",
},
{
  type: "input",
  message: "give a brief description of your app",
  name: "Description",
},
{
  type: "input",
  message: "How does a user access your app(URL or Link to download)?",
  name: "Installation",
},
{
  type: "input",
  message: "Did you get code or help from anyone you need to give credit to?",
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
    type: "list",
    message: "Do you want people to be able to contribute to your app?",
    name: "License",
    choices: ["OH YEAH", "NAH"]
  },
])
.then((answers) => {
const README = generatedREADME(questions)



// TODO: Create a function to write README file
fs.writeFile('README.md', generatedREADME, (err) => {
    if (err) {
      console.error('Error creating your file:', err);
    } else {
      console.log('All data added to file successfully.');
    }
  })
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
