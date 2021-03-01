interface ErrorContainer {
  id: string;
  [prop: string]: string;
  // string number or symbol
}

const errorObj: ErrorContainer = {
  id: "id123",
  email: "Not a valid email!",
  name: "Not a valid name",
};
