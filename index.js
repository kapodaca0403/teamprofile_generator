// i need a header that says TEAM with color
//i need a card that contains the info for engineer, intern, manager << these will be in a header as well with color
// intern should have school, manager should have office number
// all of them should include the name, ID number, email and for engineers will have github link
// github link should deploy and the email should generate a email

// i should have a test for emoployee, manager, intern, and engineer
// need a static css for HTML

//The other three classes will extend `Employee`.
// `getRole()`&mdash;returns `'Employee'`

// these are the three roles
//getRole()`&mdash;overridden to return `'Intern'`
//getRole()`&mdash;overridden to return `'Manager'`
//getRole()`&mdash;overridden to return `'Engineer'`

//  all of these should deploy and create an HMTL

// const employData = require("./employee");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const outputdir = path.resolve(__dirname, "output");
const outputPath = path.join(outputdir, "index.html"); // change if HMTL name is diff
const render = require("./src/index.js");

const TeamMem = [];

function app() {
  function createMan() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "TeamManager",
          validate: (input) => {
            if (input !== "") {
              return true;
            } else {
              return "Please enter your name.";
            }
          },
        },
        {
          type: "input",
          message: "What is your ID number?",
          name: "ManagerID",
          validate: (input) => {
            // const success = input.match(/^[1-9]d$/);
            if (input !== "") {
              return true;
            } else {
              return "Please enter a number greater than 0";
            }
          },
        },
        {
          type: "input",
          message: "What is your email address?",
          name: "ManagerEmail",
          validate: (input) => {
            const success = input.match(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (success) {
              return true;
            } else {
              return "Please enter a valid email";
            }
          },
        },
        {
          type: "input",
          message: "What is your office number?",
          name: "ManagerOfficenum",
          validate: (input) => {
            // const success = input.match(/^[1-9]d$/);
            if (input !== "") {
              return true;
            } else {
              return "Please enter a number greater than 0";
            }
          },
        },
      ])
      .then((data) => {
        const manager = new Manager(
          data.TeamManager,
          data.ManagerID,
          data.ManagerEmail,
          data.ManagerOfficenum
        );
        TeamMem.push(manager);
        createTeam();
      });
  }
  
  function newbie() {
    console.log("here is newbie")
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your intern's name?",
          name: "InternName",
          validate: (input) => {
            if (input !== "") {
              return true;
            } else {
              return "Please enter your intern's name.";
            }
          },
        },
        {
          type: "input",
          message: "What is your intern's ID number?",
          name: "InternID",
          validate: (input) => {
            // const success = input.match(/^[1-9]d$/);
            if (input !== "") {
              return true;
            } else {
              return "Please enter a number greater than 0";
            }
          },
        },

        {
          type: "input",
          message: "What is your intern's email address?",
          name: "InternEmail",
          validate: (input) => {
            const success = input.match(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (success) {
              return true;
            } else {
              return "Please enter a valid email";
            }
          },
        },
        {
          type: "input",
          message: " What is the name of the school your intern attends?",
          name: "InternSchool",
          validate: (input) => {
            if (input !== "") {
              return true;
            } else {
              return "Please enter a school's name";
            }
          },
        },
      ])
      .then((data) => {
        const intern = new Intern(
          data.InternName,
          data.InternID,
          data.InternEmail,
          data.InternSchool
        );
        TeamMem.push(intern);
        createTeam();
      });
  }
  function tenured() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your engineer's name?",
          name: "EngineerName",
          validate: (input) => {
            if (input !== "") {
              return true;
            } else {
              return "Please enter engineer's name.";
            }
          },
        },
        {
          type: "input",
          message: "What is your Engineer's ID number?",
          name: "engineerID",
          validate: (input) => {
            // const success = input.match(/^[1-9]d$/);
            if (input !== "") {
              return true;
            } else {
              return "Please enter a number greater than 0";
            }
          },
        },

        {
          type: "input",
          message: "What is your Engineer's email address?",
          name: "EngineerEmail",
          validate: (input) => {
            const success = input.match(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (success) {
              return true;
            } else {
              return "Please enter a valid email";
            }
          },
        },
        {
          type: "input",
          message: " What is Engineer's Github?",
          name: "EngineerGithub",
          validate: (input) => {
            if (input !== "") {
              return true;
            } else {
              return "Please enter a valid github";
            }
          },
        },
      ])
      .then((data) => {
        const engineer = new Engineer(
          data.EngineerName,
          data.engineerID,
          data.EngineerEmail,
          data.EngineerGithub
        );
        TeamMem.push(engineer);
        createTeam();
      });
  }
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "TeamPos",
          message: "What member are you adding?",
          choices: ["None", "Intern", "Engineer"],
        },
      ])
      .then((data) => {
        // console.log(data)
        if (data.TeamPos === "Intern") {
          newbie();
        } else if (data.TeamPos === "Engineer") {
          tenured();
        } else {
          newTeam();
        }
      });
  }
  function newTeam() {
    if (!fs.existsSync(outputdir)) {
      fs.mkdirSync(outputdir);
    }
    console.log(render(TeamMem),"test")
    fs.writeFileSync(outputPath, render(TeamMem), "utf-8");
    // html
  
  }
  createMan();
}
app();
