function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result :: " + num);
}

// let combineValues: Function;

// function type
// function types define the parameters and return type of a function
let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult;
printResult(combineValues(4, 12));

// function type with callBack
function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 3, (result) => {
  console.log(result);
  return result;
});
