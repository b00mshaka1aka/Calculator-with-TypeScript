export interface BinaryOperator {
  (first: number, second: number): number;
}

export interface UnaryOperator {
  (number: number): number;
}

export interface Operator {
  priority: Priority;
  type: TypeOperation;
  execute: UnaryOperator | BinaryOperator;
}

export type TableOperators = {
  [key: string]: Operator;
};

const factorial = (number: number): number => {
  if (number == 0) return 1;
  else return number * factorial(number - 1);
};

const powSquare = (number: number): number => Math.pow(number, 2);

const mul = (first: number, second: number): number => {
  return first * second;
};

const div = (first: number, second: number): number => {
  return first / second;
};

const add = (first: number, second: number): number => {
  return first + second;
};

const sub = (first: number, second: number): number => {
  return first - second;
};

const sin = (number: number): number => {
  return Math.sin(number);
};

const cos = (number: number): number => {
  return Math.cos(number);
};

const tan = (number: number): number => {
  return Math.tan(number);
};

const fib = (number: number): number => {
  if (number == 0) return 0;
  if (number == 1) return 1;

  return fib(number - 1) + fib(number - 2);
};

const empty = (): number => {
  return 0;
};

export enum Priority {
  HARD = "6",
  MEDIUM = "4",
  EASY = "2",
  PARENTHES = "1",
}

export type TypeOperation =
  | "prefix"
  | "postfix"
  | "binary"
  | "all"
  | "function";

export const operators: TableOperators = {
  // eslint-disable-next-line prettier/prettier
  "fib": {
    priority: Priority.HARD,
    type: "function",
    execute: fib,
  },
  // eslint-disable-next-line prettier/prettier
  "cos": {
    priority: Priority.HARD,
    type: "function",
    execute: cos,
  },
  // eslint-disable-next-line prettier/prettier
  "tan": {
    priority: Priority.HARD,
    type: "function",
    execute: tan,
  },
  // eslint-disable-next-line prettier/prettier
  "sin": {
    priority: Priority.HARD,
    type: "function",
    execute: sin,
  },
  "!": {
    priority: Priority.HARD,
    type: "postfix",
    execute: factorial,
  },
  "**": {
    priority: Priority.HARD,
    type: "postfix",
    execute: powSquare,
  },
  "^": {
    priority: Priority.HARD,
    type: "binary",
    execute: Math.pow,
  },
  "*": {
    priority: Priority.MEDIUM,
    type: "binary",
    execute: mul,
  },
  "/": {
    priority: Priority.MEDIUM,
    type: "binary",
    execute: div,
  },
  "+": {
    priority: Priority.EASY,
    type: "binary",
    execute: add,
  },
  "-": {
    priority: Priority.EASY,
    type: "binary",
    execute: sub,
  },
  "(": {
    priority: Priority.PARENTHES,
    type: "all",
    execute: empty,
  },
  ")": {
    priority: Priority.PARENTHES,
    type: "all",
    execute: empty,
  },
};
