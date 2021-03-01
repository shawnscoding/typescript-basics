type Admin = {
  name: string;
  priviliges: number[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

enum Role {
  READ,
  CREATE,
}

const e1: ElevatedEmployee = {
  name: "shawn",
  priviliges: [Role.READ, Role.CREATE],
  startDate: new Date(),
};

type Combinable = string | number;
type NumericOrBoolean = number | boolean;
type Univeral = Combinable | NumericOrBoolean;
// called union type
type UnkownEmployee = Admin | Employee;

function printEmployeeInfo(emp: UnkownEmployee): void {
  console.log("Name :", emp.name);
  if ("priviliges" in emp) {
    console.log("priviliges ::", emp.priviliges);
  }
  if ("startDate" in emp) console.log("startDate ::", emp.startDate);
}

printEmployeeInfo(e1);
printEmployeeInfo({ name: "Martin", startDate: new Date() });

class Car {
  drive() {
    console.log("driving ...");
  }
}

class Truck {
  drive() {
    console.log("driving ... ");
  }

  loadCargo(things: number) {
    console.log("loading ...", things);
  }
}

type Vihicle = Car | Truck;

const car = new Car();
const truck = new Truck();

function useVehicle(vehicle: Vihicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) vehicle.loadCargo(100);
}

useVehicle(car);
useVehicle(truck);
