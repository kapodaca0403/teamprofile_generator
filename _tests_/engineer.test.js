const Engineer = require("./lib/engineer");

test("creates new Engineer", () => {
  const eng = new Engineer("ktrina", 1, "ktrinaapodaca@yahoo.com", 3);
  expect(eng.name).toBe("ktrina");
});
