let _this = {
  highSeedTeam: {},
  lowSeedTeam: {},
  highSeedWinPercentage: 0
};

function makeRandomPick() {
  let pickPool = [];
  let randomIndex = 0;
  let randomPick = '';
  for (let i = 1; i <= _this.highSeedWinPercentage; i++) {
    pickPool.push(_this.highSeedTeam.name);
  }

  for (let j = 1; j <= 100 - _this.highSeedWinPercentage; j++) {
    pickPool.push(_this.lowSeedTeam.name);
  }

  randomIndex = Math.floor(Math.random() * 101);
  randomPick = pickPool[randomIndex];
  document.getElementById('picked-team-container').style.display = 'block';
  document.getElementById('random-pick').innerHTML = randomPick;
}

function handleSelections() {
  let teamA = document.getElementById('select-teamA');
  let teamB = document.getElementById('select-teamB');
  teamA = {
    name: teamA.options[teamA.options.selectedIndex].text,
    seed: parseInt(teamA.value, 10)
  };
  teamB = {
    name: teamB.options[teamB.options.selectedIndex].text,
    seed: parseInt(teamB.value, 10)
  };
  document.getElementById('picked-team-container').style.display = 'none';
  displayMatchupValues(teamA, teamB);
}

function displayMatchupValues(teamA, teamB) {
  const matchupHistory = getWinOdds(teamA, teamB);
  _this.highSeedTeam = {
    name: matchupHistory.highSeedName,
    seed: matchupHistory.highSeedNumber
  };
  _this.lowSeedTeam = {
    name: matchupHistory.lowSeedName,
    seed: matchupHistory.lowSeedNumber
  };
  _this.highSeedWinPercentage = matchupHistory.highSeedWinPercentage;
  document.getElementById('teamA-name').innerHTML = teamA.name;
  document.getElementById('teamA-seed').innerHTML = `Seed: ${teamA.seed}`;
  document.getElementById('teamB-name').innerHTML = teamB.name;
  document.getElementById('teamB-seed').innerHTML = `Seed: ${teamB.seed}`;

  // Total contests
  const contestCountElements = document.getElementsByClassName('contest-count');
  for (let i = 0; i < contestCountElements.length; i++) {
    contestCountElements[i].innerHTML = matchupHistory.totalContests;
    animateElementsByClassName('contest-count', 'pulse');
  }

  // High seed number
  const highSeedNumberElements = document.getElementsByClassName(
    'high-seed-number'
  );
  for (let i = 0; i < highSeedNumberElements.length; i++) {
    highSeedNumberElements[i].innerHTML = `Seed ${
      matchupHistory.highSeedNumber
    }`;
    animateElementsByClassName('high-seed-number', 'pulse');
  }

  // Low seed number
  const lowSeedNumberElements = document.getElementsByClassName(
    'low-seed-number'
  );
  for (let i = 0; i < lowSeedNumberElements.length; i++) {
    lowSeedNumberElements[i].innerHTML = `Seed ${matchupHistory.lowSeedNumber}`;
    animateElementsByClassName('low-seed-number', 'pulse');
  }

  // High seed name
  const highSeedNameElements = document.getElementsByClassName(
    'high-seed-name'
  );
  for (let i = 0; i < highSeedNameElements.length; i++) {
    highSeedNameElements[i].innerHTML = matchupHistory.highSeedName;
    animateElementsByClassName('high-seed-name', 'pulse');
  }

  // High seed win percentage
  const winPercentageElements = document.getElementsByClassName(
    'win-percentage'
  );
  for (let i = 0; i < winPercentageElements.length; i++) {
    winPercentageElements[i].innerHTML = `${
      matchupHistory.highSeedWinPercentage
    } %`;
    animateElementsByClassName('win-percentage', 'pulse');
  }

  function animateElementsByClassName(className, animationStyle) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('animated');
      elements[i].classList.add(animationStyle);
      setTimeout(() => {
        elements[i].classList.remove('animated');
        elements[i].classList.remove(animationStyle);
      }, 2000);
    }
  }
}
