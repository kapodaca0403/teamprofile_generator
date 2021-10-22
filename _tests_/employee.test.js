const Employee = require("../lib/employee"); 

test("creates new Employee", () => { 
    const employ = new Employee("ktrina", 1, "ktrinaapodaca@yahoo.com", 3); 
    expect(employ.name).toBe("ktrina")
});