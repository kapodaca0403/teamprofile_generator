const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getrole() {
    return "Engineer";
  }
  getgithub() {
    return (this.github = github);
  }
}
module.exports = Engineer;
