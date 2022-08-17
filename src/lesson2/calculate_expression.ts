import { calculate } from "./calculate";
import { parser } from "./parser";
import { reversePolishNotationExecute } from "./polish_notation";

export const calculateExpression = (string: string): number => {
  const parse = parser(string);
  const polishNotation = reversePolishNotationExecute(parse);
  return calculate(polishNotation);
};
