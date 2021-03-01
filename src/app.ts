interface Greetable {
  // interface can be used to describe schema of object and class
  name: string;
  age: number;
  greet(phrase: string): string;
}

const user1: Greetable = {
  name: "Shawn",
  age: 20,
  greet(phrase: string) {
    return phrase + " " + this.name;
  },
};

console.log(user1.greet("Hi My name is "));
