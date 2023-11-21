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
               type: "list",
               choices: ["Apache License 2.0",
                    "GNU General Public License V3.0",
                    "MIT Licenses",
                    "Mozilla Public License 2.0"]
          },
          {
               name: "appUserEmail",
               message: "Please share with us your email associated with the GitHub. ",
               type: "input"
          }
     ])
     .then((answers) => {
          var vApplicationName = answers.appName.split(" ").join('');
          vApplicationName = vApplicationName + "_README.md";
          let licenseBadge;
          let vtblofcontent = "https://github.com/Vigneshwarie/vReadmeGenerator/blob/main/";

          if (answers.appLicense === "Apache License 2.0") {
               licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
          }
          else if (answers.appLicense === "GNU General Public License V3.0") {
               licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
          }
          else if (answers.appLicense === "MIT Licenses") {
               licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
          }
          else {
               licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
          }

          const readmeString = `# ${answers.appName}      ${licenseBadge}

## Description

${answers.appDescription}

### Table of Contents

     * [Description] (#description)
     * Installation (#installation)
     * [Usage] (#usage)
     * [Contribution Guidelines] (#contribution-guidelines)
     * [Testing Instructions] (#testing-instructions)
     * [License] (#license)
     * [Questions] (#questions)

## Installation

${answers.appInstallationInstruction}

## Usage

The application deployed at ${answers.appDeployedURL}

The application source code can be accessed using the link ${answers.appRepositoryURL}

${answers.appUsage}

## Contribution Guidelines

${answers.appContribution}

## Testing Instructions

${answers.appTestInstructions}

## License

${answers.appName} is available under the ${answers.appLicense}.

## Questions

For additional questions please reach me at ${answers.appUserEmail}

`;
          
          
          fs.writeFile(vApplicationName, readmeString, (err) =>
               err ? console.error(err) : console.log('Success!')
          );
          
     });


     






