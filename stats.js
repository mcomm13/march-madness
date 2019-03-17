function getWinOdds(teamA, teamB) {
  const highSeed = teamA.seed <= teamB.seed ? teamA.seed : teamB.seed;
  const lowSeed = teamA.seed > teamB.seed ? teamA.seed : teamB.seed;
  let highSeedWinPercentage = 100;
  let totalContests = 0;

  if (highSeed === 1) {
    if (lowSeed === 1) {
      highSeedWinPercentage = 50;
      totalContests = 46;
    } else if (lowSeed === 2) {
      highSeedWinPercentage = 54;
      totalContests = 74;
    } else if (lowSeed === 3) {
      highSeedWinPercentage = 62;
      totalContests = 37;
    } else if (lowSeed === 4) {
      highSeedWinPercentage = 70;
      totalContests = 73;
    } else if (lowSeed === 5) {
      highSeedWinPercentage = 85;
      totalContests = 52;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 69;
      totalContests = 16;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 86;
      totalContests = 7;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 80;
      totalContests = 86;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 90;
      totalContests = 76;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 86;
      totalContests = 7;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 57;
      totalContests = 7;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 100;
      totalContests = 19;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 100;
      totalContests = 4;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null; // No contest
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = 99;
      totalContests = 136;
    }
  }

  if (highSeed === 2) {
    if (lowSeed === 2) {
      highSeedWinPercentage = 50;
      totalContests = 6;
    } else if (lowSeed === 3) {
      highSeedWinPercentage = 62;
      totalContests = 63;
    } else if (lowSeed === 4) {
      highSeedWinPercentage = 44;
      totalContests = 9;
    } else if (lowSeed === 5) {
      highSeedWinPercentage = 20;
      totalContests = 5;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 72;
      totalContests = 36;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 70;
      totalContests = 96;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 44;
      totalContests = 9;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 50;
      totalContests = 2;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 61;
      totalContests = 57;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 88;
      totalContests = 16;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = 94;
      totalContests = 136;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 3) {
    if (lowSeed === 3) {
      highSeedWinPercentage = 50;
      totalContests = 2;
    } else if (lowSeed === 4) {
      highSeedWinPercentage = 63;
      totalContests = 8;
    } else if (lowSeed === 5) {
      highSeedWinPercentage = 50;
      totalContests = 4;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 56;
      totalContests = 87;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 61;
      totalContests = 18;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 100;
      totalContests = 2;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 100;
      totalContests = 3;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 69;
      totalContests = 13;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 69;
      totalContests = 54;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 85;
      totalContests = 136;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 4) {
    if (lowSeed === 4) {
      highSeedWinPercentage = 50;
      totalContests = 2;
    } else if (lowSeed === 5) {
      highSeedWinPercentage = 56;
      totalContests = 94;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 33;
      totalContests = 6;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 33;
      totalContests = 6;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 36;
      totalContests = 11;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 50;
      totalContests = 4;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 100;
      totalContests = 2;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 69;
      totalContests = 39;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 80;
      totalContests = 136;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 5) {
    if (lowSeed === 5) {
      highSeedWinPercentage = 50;
      totalContests = 2;
    } else if (lowSeed === 6) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 25;
      totalContests = 4;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 25;
      totalContests = 4;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 68;
      totalContests = 136;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 82;
      totalContests = 17;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 6) {
    if (lowSeed === 6) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 7) {
      highSeedWinPercentage = 63;
      totalContests = 8;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 25;
      totalContests = 4;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 60;
      totalContests = 10;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 64;
      totalContests = 156;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 88;
      totalContests = 16;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 7) {
    if (lowSeed === 7) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 8) {
      highSeedWinPercentage = 50;
      totalContests = 2;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 61;
      totalContests = 160;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 0;
      totalContests = 4;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = 67;
      totalContests = 3;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 8) {
    if (lowSeed === 8) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 9) {
      highSeedWinPercentage = 53;
      totalContests = 160;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = 0;
      totalContests = 1;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 9) {
    if (lowSeed === 9) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 10) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 0;
      totalContests = 1;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    }
  }

  if (highSeed === 10) {
    if (lowSeed === 10) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 11) {
      highSeedWinPercentage = 33;
      totalContests = 3;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 100;
      totalContests = 1;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = 100;
      totalContests = 5;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 11) {
    if (lowSeed === 11) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 12) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = 100;
      totalContests = 5;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 12) {
    if (lowSeed === 12) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 13) {
      highSeedWinPercentage = 73;
      totalContests = 11;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 13) {
    if (lowSeed === 13) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 14) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 14) {
    if (lowSeed === 14) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 15) {
    if (lowSeed === 15) {
      highSeedWinPercentage = null;
      totalContests = 0;
    } else if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  if (highSeed === 16) {
    if (lowSeed === 16) {
      highSeedWinPercentage = null;
      totalContests = 0;
    }
  }

  return {
    highSeedWinPercentage: highSeedWinPercentage,
    totalContests: totalContests
  };
}
