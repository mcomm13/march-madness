function getWinOdds(teamA, teamB) {
  const highSeed = teamA.seed <= teamB.seed ? teamA.seed : teamB.seed;
  const lowSeed = teamA.seed > teamB.seed ? teamA.seed : teamB.seed;
  let highSeedWinPercentage = 100;

  if (highSeed === 1) {
    if (lowSeed === 1) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 2) {
      highSeedWinPercentage = 54;
    } else if (lowSeed === 3) {
      highSeedWinPercentage = 62;
    } else if (lowSeed === 4) {
      highSeedWinPercentage = 70;
    } else if (lowSeed === 5) {
      highSeedWinPercentage = 85;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 69;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 86;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 80;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 90;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 86;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 57;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null; // No contest
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = 99;
    }
  }

  if (highSeed === 2) {
    if (lowSeed === 2) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 3) {
      highSeedWinPercentage = 62;
    } else if (lowSeed === 4) {
      highSeedWinPercentage = 44;
    } else if (lowSeed === 5) {
      highSeedWinPercentage = 20;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 72;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 70;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 44;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 61;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 88;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = 94;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 3) {
    if (lowSeed === 3) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 4) {
      highSeedWinPercentage = 63;
    } else if (lowSeed === 5) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 56;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 61;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 69;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 69;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 85;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 4) {
    if (lowSeed === 4) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 5) {
      highSeedWinPercentage = 56;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 33;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 33;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 36;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 69;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 80;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 5) {
    if (lowSeed === 5) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 25;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 25;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 68;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 82;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 6) {
    if (lowSeed === 6) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 63;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 25;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 60;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 64;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 88;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 7) {
    if (lowSeed === 7) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 50;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 61;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 0;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = 67;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 8) {
    if (lowSeed === 8) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 53;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 0;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 9) {
    if (lowSeed === 9) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 0;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = 100;
    }
  }

  if (highSeed === 10) {
    if (lowSeed === 10) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 33;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 11) {
    if (lowSeed === 11) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 100;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 12) {
    if (lowSeed === 12) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 73;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 13) {
    if (lowSeed === 13) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 14) {
    if (lowSeed === 14) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 15) {
    if (lowSeed === 15) {
      highSeedWinPercentage = null;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  if (highSeed === 16) {
    if (lowSeed === 16) {
      highSeedWinPercentage = null;
    }
  }

  return highSeedWinPercentage;
}
