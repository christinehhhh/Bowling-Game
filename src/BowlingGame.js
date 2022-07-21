let currentRoll = 0;
let rollsArray = [];

function Roll(pins) {
  return (rollsArray[currentRoll++] = pins);
}
function Score() {
  currentRoll = 0;
  let score = 0;
  let scoreNext = 0;
  let i = 0;
  for (let frame = 0; frame < 3; frame++) {
    scoreNext = checkAndCalculateSpareAndStrike(rollsArray, i, score)[0];
    i = checkAndCalculateSpareAndStrike(rollsArray, i, score)[1];
    score = scoreNext;
  }
  return score;
}

function rollTime(n, pin) {
  for (let i = 0; i < n; i++) {
    Roll(pin);
  }
}

function checkAndCalculateSpareAndStrike(rolls, i, score) {
  if (rolls[i] === 10) {
    return [(score += 10 + rolls[i + 1] + rolls[i + 2]), i++];
  }
  if (rolls[i] + rolls[i + 1] === 10) {
    return [(score += 10 + rolls[i + 2]), (i += 2)];
  }
  return [(score += rolls[i] + rolls[i + 1]), (i += 2)];
}

rollTime(2, 2);
Roll(10);
Roll(5);
rollTime(1, 3);
Score();
