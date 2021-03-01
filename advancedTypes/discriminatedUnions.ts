interface Bird {
  type: "bird";
  flyingSpead: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if (animal.type === "bird") console.log(animal.flyingSpead);
  if (animal.type === "horse") console.log(animal.runningSpeed);
}

moveAnimal({ type: "bird", flyingSpead: 200 });
moveAnimal({ type: "horse", runningSpeed: 100 });
