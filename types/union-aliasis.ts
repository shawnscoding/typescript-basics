// union types

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: string | number;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion) return +result;
  return result.toString();
}

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

// type aliasis
type Combinable = string | number;
type ConversionDescriptor = "as-number" | "as-text";

// example
function greet1(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// to
type User = { name: string; age: number };

function greet2(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder2(user: User, checkAge: number) {
  return checkAge > user.age;
}
