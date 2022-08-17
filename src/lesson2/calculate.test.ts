import { calculate } from "./calculate";

describe("Calculate tests", () => {
  it("1 32 + to 33", () => {
    expect(calculate([1, 32, "+"])).toEqual(33);
  });

  it("11 3 22 * + to 77", () => {
    expect(calculate([11, 3, 22, "*", "+"])).toEqual(77);
  });

  it("1 32 + 2 - 2 + to 33", () => {
    expect(calculate([1, 32, "+", 2, "-", 2, "+"])).toEqual(33);
  });

  it("7! + 4** * 3 ^ 8 to 110016", () => {
    expect(calculate([7, "!", 4, "**", 3, 8, "^", "*", "+"])).toEqual(110016);
  });

  it("sin(1) to 0.8414709848078965", () => {
    expect(calculate([1, "sin"])).toEqual(0.8414709848078965);
  });
});
