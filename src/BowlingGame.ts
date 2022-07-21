export class BowlingGame {
  currentRoll = 0;
  rollsArray = [];

  roll(pins: number): void {
    this.rollsArray[this.currentRoll++] = pins;
  }

  score(): number {
    this.currentRoll = 0;
    let scoreResult = 0;
    let i = 0;
    for (let frame = 0; frame < 10; frame++) {
      const scoreResultNext = this.checkAndCalculateSpareAndStrike(
        this.rollsArray,
        i,
        scoreResult
      )[0];
      i = this.checkAndCalculateSpareAndStrike(
        this.rollsArray,
        i,
        scoreResult
      )[1];
      scoreResult = scoreResultNext;
    }
    return scoreResult;
  }

  rollTime(n: number, pin: number) {
    for (let i = 0; i < n; i++) {
      this.roll(pin);
    }
  }

  private checkAndCalculateSpareAndStrike(
    rolls: number[],
    i: number,
    score: number
  ): [number, number] {
    if (rolls[i] === 10) {
      return [(score += 10 + rolls[i + 1] + rolls[i + 2]), (i += 1)];
    }
    if (rolls[i] + rolls[i + 1] === 10) {
      return [(score += 10 + rolls[i + 2]), (i += 2)];
    }
    return [(score += rolls[i] + rolls[i + 1]), (i += 2)];
  }
}
