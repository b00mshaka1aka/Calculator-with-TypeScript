import { parser } from "./parser";

describe("Parser tests", () => {
  it("1 + 32", () => {
    expect(parser("1 + 32")).toEqual([1, "+", 32]);
  });

  it("11 + 3 * 22", () => {
    expect(parser("11 + 3 * 22")).toEqual([11, "+", 3, "*", 22]);
  });

  it("1 + 32 - 2 + 2", () => {
    expect(parser("1 + 32 - 2 + 2")).toEqual([1, "+", 32, "-", 2, "+", 2]);
  });

  it("7! + 4** * 3 ^ 8", () => {
    expect(parser("7! + 4** * 3 ^ 8")).toEqual([
      7,
      "!",
      "+",
      4,
      "**",
      "*",
      3,
      "^",
      8,
    ]);
  });

  it("(2 + 2) * 2", () => {
    expect(parser("(2 + 2) * 2")).toEqual(["(", 2, "+", 2, ")", "*", 2]);
  });

  it("sin(1)", () => {
    expect(parser("sin(1)")).toEqual(["sin", 1]);
  });
});
