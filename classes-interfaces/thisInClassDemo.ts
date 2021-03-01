class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("this ::", this);
    console.log("describe called Department: " + this.name);
  }

  print = () => {
    console.log("this ::", this);

    console.log("print called Department: " + this.name);
  };
}

const accounting = new Department("Accounting");

// accounting.describe();

const accountingCopy = {
  name: "DUMMY",
  describe: accounting.describe,
  print: accounting.print,
};

accountingCopy.describe();
accountingCopy.print();

// const test: () => void = accounting.print;
// const test2: () => void = accounting.describe;

// test();
// test2(); //this will error with cannt find name on undefined

// 1. the reason print method always point to accounting instance is the this in arrow fn points to the internal _this variable
// which assigns to 'this' of the  original instance
// 2. the reason the describe method now point to DUMMY is now accountingCopy have gotton describe method from the class
