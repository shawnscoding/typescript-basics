interface Named {
  readonly name: string;
  // but can't use private public and protected
  nickName?: string;
  getNickName?(): string;
}

interface Greetable extends Named {
  // interface can be used to describe schema of object and class
  age: number;
  greet(phrase: string): string;
}

class Person implements Greetable {
  name: string;
  age = 20;
  nickName?: string;

  constructor(n: string, nickName?: string) {
    this.name = n;
    if (nickName) this.nickName = nickName;
  }

  greet(phrase: string) {
    return phrase + " " + this.name;
  }

  getNickName() {
    if (this.nickName) return this.nickName;
    return "no nickName";
  }
}

const user1: Greetable = {
  name: "Shawn",
  age: 20,
  greet(phrase: string) {
    return phrase + " " + this.name;
  },
};

const user2: Greetable = new Person("Josh");

console.log(user1.greet("Hi My name is "));
console.log(user2.greet("Hi My name is "));

interface AddFn {
  (a: number, b: number): number;
}

let addFn: AddFn;

addFn = (a: number, b: number) => {
  return a + b;
};
