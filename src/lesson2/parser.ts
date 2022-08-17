import { operators } from "./operators";

export type ExpressionElement = number | string;
export type Expression = ExpressionElement[];

export const isBinaryOperator = (operator: ExpressionElement): boolean => {
  if (
    operators.hasOwnProperty(operator) &&
    (operators[operator].type == "binary" || operators[operator].type == "all")
  )
    return true;

  return false;
};

export const isUnaryOperator = (operator: ExpressionElement): boolean => {
  if (
    operators.hasOwnProperty(operator) &&
    (operators[operator].type == "prefix" ||
      operators[operator].type == "postfix" ||
      operators[operator].type == "function")
  )
    return true;

  return false;
};

const isNumber = (number: string): boolean => {
  return number >= "0" && number <= "9";
};

const isFunction = (prefix: string, postfix: string): boolean => {
  return prefix[prefix.length - 1] == "(" && postfix == ")";
};

const partitionPrefixPostfixNumber = (expression: string): Expression => {
  let prefix = "";
  let postfix = "";
  let number = "";

  let i = 0;
  while (!isNumber(expression[i]) && i < expression.length) {
    prefix += expression[i];
    i++;
  }

  while (isNumber(expression[i]) && i < expression.length) {
    number += expression[i];
    i++;
  }

  while (i < expression.length) {
    postfix += expression[i];
    i++;
  }

  if (isFunction(prefix, postfix)) {
    postfix = "";
    prefix = prefix.slice(0, prefix.length - 1);
  }

  return [prefix, Number(number), postfix];
};

export const parser = (expressionString: string): Expression => {
  const stack: Array<string> = expressionString.split(" ");

  return stack.reduce<Expression>((result, item) => {
    if (isBinaryOperator(item)) result.push(item);
    else
      result.push(
        ...partitionPrefixPostfixNumber(item).reduce<Expression>(
          (result, item) => {
            if (item != "") result.push(item);
            return result;
          },
          []
        )
      );

    return result;
  }, []);
};
