import { calculateExpression } from "./calculate_expression";

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("> ", (expression: string) => {
  const result = calculateExpression(expression);
  console.log(`Result: ${result}`);
  readline.close();
});
