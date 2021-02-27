class Department {
  protected employees: string[] = [];
  static fiscalYear = 2020;
  // you can't access static property and method in none static area
  // but can be done with calling with the Class itself like Department.fiscalYear

  constructor(public name: string, private readonly id: string) {}

  static createEmployee(name: string) {
    // static method can be called directly in the class without the new keyword
    // console.log(Department.fiscalYear);
    return { name: name };
  }

  describe(this: Department) {
    console.log("this ::", this);
    console.log("describe: " + this.id + this.name);
  }

  addEmployee(employee: string) {
    // this.id = "121212"
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    // has to return something
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(employee: string) {
    if (employee === "Max") return;
    this.employees.push(employee);
  }
}

const employee1 = Department.createEmployee("Max");
console.log(employee1);

const it = new ITDepartment("it", ["admin"]);

// it.describe();

const accounting = new AccountingDepartment("123", []);

// console.log(accounting.mostRecentReport);
accounting.addReport("something wrong");
console.log(accounting.mostRecentReport);
accounting.mostRecentReport = "Year end report";

accounting.addReport("solved it");
accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Menu");

accounting.printReports();

// static method and property
// simple example is Math.pow Math.floor() and so on
