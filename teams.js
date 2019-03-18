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
    if (allTeams[i].name === 'NDS/NCC') {
      optionB.setAttribute('selected', 'selected');
    }
    teamBDropDown.appendChild(optionB);
  }
}

function getAllTeams() {
  return [
    {
      name: 'Duke',
      seed: 1
    },
    {
      name: 'Gonzaga',
      seed: 1
    },
    {
      name: 'Virginia',
      seed: 1
    },
    {
      name: 'North Carolina',
      seed: 1
    },
    {
      name: 'Michigan State',
      seed: 2
    },
    {
      name: 'Michigan',
      seed: 2
    },
    {
      name: 'Tennessee',
      seed: 2
    },
    {
      name: 'Kentucky',
      seed: 2
    },
    {
      name: 'LSU',
      seed: 3
    },
    {
      name: 'Texas Tech',
      seed: 3
    },
    {
      name: 'Purdue',
      seed: 3
    },
    {
      name: 'Houston',
      seed: 3
    },
    {
      name: 'Virginia Tech',
      seed: 4
    },
    {
      name: 'Florida St',
      seed: 4
    },
    {
      name: 'Kansas St',
      seed: 4
    },
    {
      name: 'Kansas',
      seed: 4
    },
    {
      name: 'Mississippi St',
      seed: 5
    },
    {
      name: 'Marquette',
      seed: 5
    },
    {
      name: 'Wisconsin',
      seed: 5
    },
    {
      name: 'Auburn',
      seed: 5
    },
    {
      name: 'Maryland',
      seed: 6
    },
    {
      name: 'Buffalo',
      seed: 6
    },
    {
      name: 'Villanova',
      seed: 6
    },
    {
      name: 'Iowa State',
      seed: 6
    },
    {
      name: 'Louisville',
      seed: 7
    },
    {
      name: 'Nevada',
      seed: 7
    },
    {
      name: 'Cincinnati',
      seed: 7
    },
    {
      name: 'Wofford',
      seed: 7
    },
    {
      name: 'VCU',
      seed: 8
    },
    {
      name: 'Syracuse',
      seed: 8
    },
    {
      name: 'Ole Miss',
      seed: 8
    },
    {
      name: 'Utah State',
      seed: 8
    },
    {
      name: 'UCF',
      seed: 9
    },
    {
      name: 'Baylor',
      seed: 9
    },
    {
      name: 'Oklahoma',
      seed: 9
    },
    {
      name: 'Washington',
      seed: 9
    },
    {
      name: 'Minnesota',
      seed: 10
    },
    {
      name: 'Florida',
      seed: 10
    },
    {
      name: 'Iowa',
      seed: 10
    },
    {
      name: 'Seton Hall',
      seed: 10
    },
    {
      name: 'BEL/TEM',
      seed: 11
    },
    {
      name: 'ASU/SJU',
      seed: 11
    },
    {
      name: "Saint Mary's",
      seed: 11
    },
    {
      name: 'Ohio State',
      seed: 11
    },
    {
      name: 'Liberty',
      seed: 12
    },
    {
      name: 'Murray State',
      seed: 12
    },
    {
      name: 'Oregon',
      seed: 12
    },
    {
      name: 'New Mexico St',
      seed: 12
    },
    {
      name: 'Saint Louis',
      seed: 13
    },
    {
      name: 'Vermont',
      seed: 13
    },
    {
      name: 'UC Irvine',
      seed: 13
    },
    {
      name: 'Northeastern',
      seed: 13
    },
    {
      name: 'Yale',
      seed: 14
    },
    {
      name: 'N Kentucky',
      seed: 14
    },
    {
      name: 'Old Dominion',
      seed: 14
    },
    {
      name: 'Georgia State',
      seed: 14
    },
    {
      name: 'Bradley',
      seed: 15
    },
    {
      name: 'Montana',
      seed: 15
    },
    {
      name: 'Colgate',
      seed: 15
    },
    {
      name: 'Abil Christian',
      seed: 15
    },
    {
      name: 'NDS/NCC',
      seed: 16
    },
    {
      name: 'FDU/PV',
      seed: 16
    },
    {
      name: 'Gardner-Webb',
      seed: 16
    },
    {
      name: 'Iona',
      seed: 16
    }
  ];
}
