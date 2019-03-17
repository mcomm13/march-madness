function makeRandomPick(highSeedTeam, lowSeedTeam, highSeedWinPercentage) {
  let pickPool = [];
  let randomIndex = 0;
  let randomPick = '';
  for (let i = 1; i <= highSeedWinPercentage; i++) {
    pickPool.push(highSeedTeam.name);
  }

  for (let j = 1; j <= 100 - highSeedWinPercentage; j++) {
    pickPool.push(lowSeedTeam.name);
  }

  randomIndex = Math.floor(Math.random() * 101);
  console.log(randomIndex);
  randomPick = pickPool[randomIndex];
  console.log(randomPick);
}
