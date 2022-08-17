import { reversePolishNotationExecute } from "./polish_notation";

describe("Reverse polish notation test", () => {
  it("1 + 32 to 1 32 +", () => {
    expect(reversePolishNotationExecute([1, "+", 32])).toEqual([1, 32, "+"]);
  });

  it("11 + 3 * 22 to 11 3 22 * +", () => {
    expect(reversePolishNotationExecute([11, "+", 3, "*", 22])).toEqual([
      11,
      3,
      22,
      "*",
      "+",
    ]);
  });

  it("1 + 32 - 2 + 2 to 1 32 + 2 - 2 +", () => {
    expect(reversePolishNotationExecute([1, "+", 32, "-", 2, "+", 2])).toEqual([
      1,
      32,
      "+",
      2,
      "-",
      2,
      "+",
    ]);
  });

  it("7! + 4** * 3 ^ 8 to 7! 4** 3 8 ^ * +", () => {
    expect(
      reversePolishNotationExecute([7, "!", "+", 4, "**", "*", 3, "^", 8])
    ).toEqual([7, "!", 4, "**", 3, 8, "^", "*", "+"]);
  });

  it("(2 + 2) * 2 to 2 2 + 2 *", () => {
    expect(
      reversePolishNotationExecute(["(", 2, "+", 2, ")", "*", 2])
    ).toEqual([2, 2, "+", 2, "*"]);
  });

  it("sin(1) to 1 sin", () => {
    expect(reversePolishNotationExecute(["sin", 1])).toEqual([1, "sin"]);
  });
});
