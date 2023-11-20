const inquirer = require("inquirer");
const fs = require('fs');

inquirer
     .prompt([
          {
               name: "appName",
               message:"Please share your application name ",
               type:"input"
          },
          {
               name: "appRepositoryURL",
               message:"Please share your application repository URL ",
               type:"input"
          },
          {
               name: "appDescription",
               message: "Please tell us about your application. ",
               type:"input"
          },
          {
               name: "appInstallationInstruction",
               message: "Are there any specific installations to be noted? ",
               type: "input"
          },
          {
               name: "appUsage",
               message: "Please share with us how to use the application. ",
               type: "input"
          },
          {
               name: "appContribution",
               message: "Would you like others to contribute to your work? If yes, share the contribution guidelines. ",
               type: "input"
          },
          {
               name: "appTestInstructions",
               message: "Kindly share how to test the application. ",
               type: "input"
          },
          {
               name: "appUserEmail",
               message: "Please share with us your email associated with the GitHub. ",
               type: "input"
          }
     ])
     .then((answers) => {
          const readmeString = `# ${answers.appName}

## Description

${answers.appDescription}

## Installation

${answers.appInstallationInstruction}

## Usage

The application source code can be accessed using the link ${answers.appRepositoryURL}

${answers.appUsage}

`;

          fs.writeFile('Readme1.md', readmeString, (err) =>
               err ? console.error(err) : console.log('Success!')
          );
          
     })


     






