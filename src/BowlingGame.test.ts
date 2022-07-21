import { BowlingGame } from "./BowlingGame";

describe("BowlingGame", () => {
  const bowlingGame = new BowlingGame();

  // Test 1:
  describe("No hit at all", () => {
    it("should be finished in 20 rolls and gets 0 point", () => {
      bowlingGame.rollTime(20, 0);
      expect(bowlingGame.score()).toEqual(0);
    });
  });

  // Test 2:
  describe("One hit in every roll", () => {
    it("should be finished in 20 rolls and gets 20 points", () => {
      bowlingGame.rollTime(20, 1);
      expect(bowlingGame.score()).toEqual(20);
    });
  });

  // Test 3:
  describe("The first two hits lead to a spare, 1 hit in all the rest", () => {
    it("should be finished in 20 rolls and gets 29 points", () => {
      bowlingGame.roll(1);
      bowlingGame.roll(9);
      bowlingGame.rollTime(18, 1);
      expect(bowlingGame.score()).toEqual(29);
    });
  });

  // Test 4:
  describe("The second frame is a spare, 1 hit for the first frame, 3 hits for the rest", () => {
    it("should be finished in 20 rolls and gets 62 points", () => {
      bowlingGame.roll(0);
      bowlingGame.roll(1);
      bowlingGame.roll(4);
      bowlingGame.roll(6);
      bowlingGame.rollTime(16, 3);
      expect(bowlingGame.score()).toEqual(62);
    });
  });

  // Test 5:
  describe("The third frame is a strike, 1 hit for the next roll, 3 hits for the next next roll, 4 hits for the rest", () => {
    it("should be finished in 19 rolls and gets 82 points", () => {
      bowlingGame.rollTime(4, 4);
      bowlingGame.roll(10);
      bowlingGame.roll(1);
      bowlingGame.roll(3);
      bowlingGame.rollTime(12, 4);
      expect(bowlingGame.score()).toEqual(82);
    });
  });

  // Test 6:
  describe("The last frame is a spare, 2 hit for the bonus roll, 5 hits for the rest", () => {
    it("should be finished in 21 rolls and gets 144 points", () => {
      bowlingGame.rollTime(18, 5);
      bowlingGame.roll(2);
      bowlingGame.roll(8);
      bowlingGame.roll(2);
      expect(bowlingGame.score()).toEqual(144);
    });
  });

  // Test 6:
  describe("Every frame is strike, the bonus hit was also strike", () => {
    it("should be finished in 12 rolls and gets 300 points", () => {
      bowlingGame.rollTime(12, 10);
      expect(bowlingGame.score()).toEqual(300);
    });
  });

  // Test 7:
  describe("A really complicated test case", () => {
    it("should be finished in 21 rolls and gets 133 points", () => {
      bowlingGame.roll(1);
      bowlingGame.rollTime(2, 4);
      bowlingGame.roll(5);
      bowlingGame.roll(6);
      bowlingGame.roll(4);
      bowlingGame.rollTime(2, 5);
      bowlingGame.roll(10);
      bowlingGame.roll(0);
      bowlingGame.roll(1);
      bowlingGame.roll(7);
      bowlingGame.roll(3);
      bowlingGame.roll(6);
      bowlingGame.roll(4);
      bowlingGame.roll(10);
      bowlingGame.roll(2);
      bowlingGame.roll(8);
      bowlingGame.roll(6);
      expect(bowlingGame.score()).toEqual(133);
    });
  });
});
