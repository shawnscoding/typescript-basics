// object

// good practice
const person1 = {
  name: "John",
  age: 10,
};
// // if you hover mouse over person in vscode env, you can see  type oject
// // this is used to descript the types of object.
console.log(person1.name);
// bad practice
const person2: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 10,
};
console.log(person2.name);

// bad practice
const person3: {
  name: string;
  age: 20;
} = {
  name: "John",
  age: 20,
};
// if you hover mouse over person3 in vscode env, you can see  type oject
// this is used to descript the types of object.

console.log(person3.name);

// Nested Objects & Types
// Of course object types can also be created for nested objects.
const product1: {
  id: string;
  price: number;
  tags: string[];
  //   nested array of strings
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

// array
let arr: (string | number)[];
arr = ["hello", "world", 111];

// turple
// fixed length & types
let role: [number, string];
role = [1, "test"];
// note that typescript can't catch error for push method

// enum
//

enum Role {
  ADMIN = 0,
  READ_ONLY = 1,
  AUTHOR = 2,
}
// `= num` is not mandatory, it assigns those to 0, 1,2, ... under the hood,
// automatically enumerated global constant identifiers
// use number instead of string when suitable can save memory and performance
const person4 = {
  name: "John",
  age: 10,
  role: Role.ADMIN,
};

if (person4.role === Role.ADMIN) {
  console.log("person4 is admin");
}

// any
// with this, typescript never yell at us about the type we assign to value.
