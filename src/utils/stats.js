export function setGameStats(status, currentRow) {
  const gameStats = JSON.parse(localStorage.getItem('gameStats')) || {
    totalGamesPlayed: 0,
    tries: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 },
    loses: 0,
  };

  gameStats.totalGamesPlayed += 1;

  if (status === 'win') {
    gameStats.tries[currentRow] += 1;
  } else {
    gameStats.loses += 1;
  }

  localStorage.setItem('gameStats', JSON.stringify(gameStats));
}
