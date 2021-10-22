function genTeam(teamData) {
  function genManager(manager) {
    // HTML for manager card goes inside literal return statement
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getrole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getofficeNum()}</li>
            </ul>
        </div>
    </div>
        `
  }
  function genIntern(intern) {
    // HTML for intern card goes inside literal return statement
    return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">
          <i class="fas fa-mug-hot mr-2"></i>${intern.getrole()}
        </h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">
            Email:
            <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
          </li>
          <li class="list-group-item">
            School: ${intern.getschool()}
          </li>
        </ul>
      </div>
    </div>;
    `
  }
  function genEngineer(engineer) {
    // HTML for engineer card goes inside literal return
    return `
        <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">
          <i class="fas fa-mug-hot mr-2"></i>${engineer.getrole()}
        </h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">
            Email:
            <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
          </li>
          <li class="list-group-item">
            Github:
            <a href="https://github.com${engineer.getgithub()}">${engineer.getgithub()}</a>
          </li>
        </ul>
      </div>
    </div>;
        `
  }
  const html = [];

  html.push(
    teamData
      .filter((employee) => employee.getrole() === "Manager")
      .map((manager) => genManager(manager))
  );
  html.push(
    teamData
      .filter((employee) => employee.getrole() === "Engineer")
      .map((engineer) => genEngineer(engineer))
      .join("")
  );
  html.push(
    teamData
      .filter((employee) => employee.getrole() === "Intern")
      .map((intern) => genIntern(intern))
      .join("")
  );

  return html.join("");
}
module.exports = (newTeam) => {
  // console.log(newTeam)
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link
      href="https://fonts.googleapis.com/css2?family=Georama:wght@300&display=swap"
      rel="stylesheet"
    />
    <title>Team Profile</title>
</head>
<body>
<div class="card">
    <div id="header" class="card-body" style="background-image: linear-gradient(-90deg, #e2b7ff, #a706f1)">
      <h1 class="mb-3" style="text-align: center;">My Team</h1>
    </div>
   
  <div class="card">
    <div class="card" style="width: 18rem;" style="justify-content:center">
      <div class="card-body" >

${genTeam(newTeam)}
</body>
</html>
 `
  // return statement literal for HTML header
  // HTML that tells the card where it goes on the page
};
