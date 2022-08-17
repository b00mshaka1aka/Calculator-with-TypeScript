import { operators } from "./operators";
import { Expression, isBinaryOperator, isUnaryOperator } from "./parser";
import { isNumber } from "./polish_notation";

export const calculate = (expression: Expression): number => {
  const stack: Expression = [];

  for (const item of expression) {
    const lastIndex = stack.length - 1;

    if (isNumber(item)) stack.push(Number(item));
    else if (isUnaryOperator(item)) {
      stack[lastIndex] = operators[item].execute(Number(stack[lastIndex]), 0);
    } else if (isBinaryOperator(item)) {
      stack[lastIndex - 1] = operators[item].execute(
        Number(stack[lastIndex - 1]),
        Number(stack[lastIndex])
      );
      stack.length = stack.length - 1;
    }
  }

  return Number(stack[0]);
};
