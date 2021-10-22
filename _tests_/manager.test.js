const Manager = require("../lib/manager");

test("creates new Manager", () => {
  const mang = new Manager("ktrina", 1, "ktrinaapodaca@yahoo.com", 3);
  expect(mang.name).toBe("ktrina");
});
