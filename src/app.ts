// can't use map with es5 target
const map = new Map();

const button = document.querySelector("button")!;
console.log(button);
button.addEventListener("click", () => {
  console.log("clicked ! ");
});
