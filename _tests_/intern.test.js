const Intern = require("./lib/intern");

test("creates new Intern", () => {
  const int = new Intern("ktrina", 1, "ktrinaapodaca@yahoo.com", 3);
  expect(int.name).toBe("ktrina");
});
