const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getrole() {
    return "Manager";
  }
  getofficeNum() {
    return (this.officeNum = this.officeNum);
  }
}

module.exports = Manager;
