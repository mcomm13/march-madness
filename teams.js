function populateDropDowns() {
  const allTeams = getAllTeams();
  const teamADropDown = document.getElementById('select-teamA');
  const teamBDropDown = document.getElementById('select-teamB');
  let optionA = null;
  let optionB = null;

  for (let i = 0; i < allTeams.length; i++) {
    optionA = document.createElement('option');
    optionA.value = allTeams[i].seed;
    optionA.innerHTML = allTeams[i].name;
    teamADropDown.appendChild(optionA);

    optionB = document.createElement('option');
    optionB.value = allTeams[i].seed;
    optionB.innerHTML = allTeams[i].name;
    teamBDropDown.appendChild(optionB);
  }
}

function getAllTeams() {
  return [
    {
      name: 'Team A',
      seed: 1
    },
    {
      name: 'Team A',
      seed: 1
    },
    {
      name: 'Team A',
      seed: 1
    },
    {
      name: 'Team A',
      seed: 1
    },
    {
      name: 'Team A',
      seed: 2
    },
    {
      name: 'Team A',
      seed: 2
    },
    {
      name: 'Team A',
      seed: 2
    },
    {
      name: 'Team A',
      seed: 2
    },
    {
      name: 'Team A',
      seed: 3
    },
    {
      name: 'Team A',
      seed: 3
    },
    {
      name: 'Team A',
      seed: 3
    },
    {
      name: 'Team A',
      seed: 3
    },
    {
      name: 'Team A',
      seed: 4
    },
    {
      name: 'Team A',
      seed: 4
    },
    {
      name: 'Team A',
      seed: 4
    },
    {
      name: 'Team A',
      seed: 4
    },
    {
      name: 'Team A',
      seed: 5
    },
    {
      name: 'Team A',
      seed: 5
    },
    {
      name: 'Team A',
      seed: 5
    },
    {
      name: 'Team A',
      seed: 5
    },
    {
      name: 'Team A',
      seed: 6
    },
    {
      name: 'Team A',
      seed: 6
    },
    {
      name: 'Team A',
      seed: 6
    },
    {
      name: 'Team A',
      seed: 6
    },
    {
      name: 'Team A',
      seed: 7
    },
    {
      name: 'Team A',
      seed: 7
    },
    {
      name: 'Team A',
      seed: 7
    },
    {
      name: 'Team A',
      seed: 7
    },
    {
      name: 'Team A',
      seed: 8
    },
    {
      name: 'Team A',
      seed: 8
    },
    {
      name: 'Team A',
      seed: 8
    },
    {
      name: 'Team A',
      seed: 8
    },
    {
      name: 'Team A',
      seed: 9
    },
    {
      name: 'Team A',
      seed: 9
    },
    {
      name: 'Team A',
      seed: 9
    },
    {
      name: 'Team A',
      seed: 9
    },
    {
      name: 'Team A',
      seed: 10
    },
    {
      name: 'Team A',
      seed: 10
    },
    {
      name: 'Team A',
      seed: 10
    },
    {
      name: 'Team A',
      seed: 10
    },
    {
      name: 'Team A',
      seed: 11
    },
    {
      name: 'Team A',
      seed: 11
    },
    {
      name: 'Team A',
      seed: 11
    },
    {
      name: 'Team A',
      seed: 11
    },
    {
      name: 'Team A',
      seed: 12
    },
    {
      name: 'Team A',
      seed: 12
    },
    {
      name: 'Team A',
      seed: 12
    },
    {
      name: 'Team A',
      seed: 12
    },
    {
      name: 'Team A',
      seed: 13
    },
    {
      name: 'Team A',
      seed: 13
    },
    {
      name: 'Team A',
      seed: 13
    },
    {
      name: 'Team A',
      seed: 13
    },
    {
      name: 'Team A',
      seed: 14
    },
    {
      name: 'Team A',
      seed: 14
    },
    {
      name: 'Team A',
      seed: 14
    },
    {
      name: 'Team A',
      seed: 14
    },
    {
      name: 'Team A',
      seed: 15
    },
    {
      name: 'Team A',
      seed: 15
    },
    {
      name: 'Team A',
      seed: 15
    },
    {
      name: 'Team A',
      seed: 15
    },
    {
      name: 'Team A',
      seed: 16
    },
    {
      name: 'Team A',
      seed: 16
    },
    {
      name: 'Team A',
      seed: 16
    },
    {
      name: 'Team A',
      seed: 16
    }
  ];
}
