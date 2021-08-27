const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getrole() {
    return "Intern";
  }
  getschool() {
    return (this.school = school);
  }
}

module.exports = Intern;
