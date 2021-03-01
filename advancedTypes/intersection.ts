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
