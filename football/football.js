// Add the event listener for onload event
window.onload = function () {
  const teams = [
    { code: "Default", name: "Choose a Team", plays: "No Where" },
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
  ];

  const submitBtn = document.querySelector("#submit");
  const selectMenu = document.querySelector("#footballTeams");

  //display array through select object
  let numOfTeams = teams.length;
  for (let i = 0; i < numOfTeams; i++) {
    let theOption = new Option(teams[i].name, teams[i].code);
    selectMenu.appendChild(theOption);
  }

  submitBtn.addEventListener("click", getTeamName);

  function getTeamName() {
    let teamCode = selectMenu.value;
    console.log(teamCode)
  }

  //<select-object>.options[index] == specific option objects within select options
  let itemToDelete = "DAL";
  let selectOptions = selectMenu.options;
  let numberOfOptionNodes = selectOptions.length;

  for (let i = 0; i < numberOfOptionNodes; i++) {
    if (itemToDelete == selectOptions[i].value) {
      selectMenu.remove(i);
      break;
    }
  }
};
