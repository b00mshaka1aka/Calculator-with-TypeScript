import { operators } from "./operators";
import { Expression, ExpressionElement } from "./parser";

export const isNumber = (number: ExpressionElement): boolean => {
  return !isNaN(Number(number));
};

export const isOperator = (operator: ExpressionElement): boolean => {
  return operators.hasOwnProperty(operator);
};

const isOpenParenthes = (item: ExpressionElement): boolean => {
  return item == "(";
};

const isCloseParenthes = (item: ExpressionElement): boolean => {
  return item == ")";
};

export const reversePolishNotationExecute = (
  expression: Expression
): Expression => {
  const output: Expression = [];
  let stack: Expression = [];

  for (const item of expression) {
    if (isNumber(item)) output.push(item);
    else if (isOpenParenthes(item)) stack.push(item);
    else if (isCloseParenthes(item)) {
      let el = stack.pop();
      while (el != undefined && el != "(") {
        output.push(el);
        el = stack.pop();
      }
      stack.pop();
      console.log(stack);
    } else if (isOperator(item)) {
      stack = stack.reduce<Expression>((result, el) => {
        if (operators[el].priority >= operators[item].priority) output.push(el);
        else result.push(el);

        return result;
      }, []);

      stack.push(item);
    }
  }

  stack.reverse();
  stack.forEach((item) => output.push(item));

  return output;
};
