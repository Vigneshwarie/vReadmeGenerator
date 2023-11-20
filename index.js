const inquirer = require("inquirer");
const fs = require('fs');

inquirer
     .prompt([
          {
               name: "appName",
               message: "Please share your application name ",
               type: "input"
          },
          {
               name: "appRepositoryURL",
               message: "Please share your application repository URL ",
               type: "input"
          },
          {
               name: "appDeployedURL",
               message: "In the case if application deployed, please the deployed URL ",
               type: "input"
          },
          {
               name: "appDescription",
               message: "Please tell us about your application. ",
               type: "input"
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
               message: "Please share the guidelines for others to contribute to the application. ",
               type: "input"
          },
          {
               name: "appTestInstructions",
               message: "Kindly share how to test the application. ",
               type: "input"
          },
          {
               name: "appLicense",
               message: "Please choose the license information. ",
               type: "checkbox",
               choices: ["Apache License 2.0", "GNU General Public License V3.0", "MIT Licenses", "Open Software License 3.0"]
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

The application deployed at ${answers.appDeployedURL}

The application source code can be accessed using the link ${answers.appRepositoryURL}

${answers.appUsage}

## Contribution Guidelines

${answers.appContribution}

## Application Test Instructions

${answers.appTestInstructions}

## License

${answers.appName} is available under the ${answers.appLicense}.


`;
          
          var vApplicationName = answers.appName.split(" ").join('');
          vApplicationName = vApplicationName + "_README.md";
          fs.writeFile(vApplicationName, readmeString, (err) =>
               err ? console.error(err) : console.log('Success!')
          );
          
     });


     






