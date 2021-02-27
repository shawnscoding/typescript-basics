// unknown type
// unknown type is similar to any type but has some restriction to it
// unknown is not assignable to type string and number

let userInput: unknown;
let userName: string;

userInput = 1;
userInput = "hello";

if (typeof userInput === "string") {
  userName = userInput;
}

// never type
// it never returns anything

function generateError(message: string, code: number): never {
  throw { message, erroCode: code };
  // this doesn't return anything
}

const result = generateError("An error occurred!", 500);
console.log(result);
// this doesn't return anything
