import { operators } from "./operators";

describe("Operators tests", () => {
  it("4 ^ 4 = 256", () => {
    expect(operators["^"].execute(4, 4)).toEqual(256);
  });

  it("9 ^ 3 = 729", () => {
    expect(operators["^"].execute(9, 3)).toEqual(729);
  });

  it("3 ^ 8 = 6561", () => {
    expect(operators["^"].execute(3, 8)).toEqual(6561);
  });

  it("3** = 9", () => {
    expect(operators["**"].execute(3, 0)).toEqual(9);
  });

  it("5** = 25", () => {
    expect(operators["**"].execute(5, 0)).toEqual(25);
  });

  it("7! = 5040", () => {
    expect(operators["!"].execute(7, 0)).toEqual(5040);
  });

  it("6! = 720", () => {
    expect(operators["!"].execute(6, 0)).toEqual(720);
  });

  it("3 * 8 = 24", () => {
    expect(operators["*"].execute(3, 8)).toEqual(24);
  });

  it("7 * -6 = -42", () => {
    expect(operators["*"].execute(7, -6)).toEqual(-42);
  });

  it("6 / 3 = 2", () => {
    expect(operators["/"].execute(6, 3)).toEqual(2);
  });

  it("50 / 10 = 5", () => {
    expect(operators["/"].execute(50, 10)).toEqual(5);
  });

  it("2 + 2 = 4", () => {
    expect(operators["+"].execute(2, 2)).toEqual(4);
  });

  it("29 + 7 = 36", () => {
    expect(operators["+"].execute(29, 7)).toEqual(36);
  });

  it("23 - 19 = 4", () => {
    expect(operators["-"].execute(23, 19)).toEqual(4);
  });

  it("14 - 43 = -29", () => {
    expect(operators["-"].execute(14, 43)).toEqual(-29);
  });
});
