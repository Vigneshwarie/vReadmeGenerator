const inquirer = require("inquirer");

inquirer
     .prompt([
          {
               name: "Testing",
               message:"What is your name? ",
               type:"input"
          }
     ])
     .then((answers) => {
          console.log(answers.Testing);
     })
