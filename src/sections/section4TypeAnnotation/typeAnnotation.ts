import cowsay from "cowsay";
// inferemce
let fullNameIn = "phanuphun namwong";
let ageIn = 16;

// reference
let fullName: string = "phanuphun namwong";
let age: number = 16;

const str: string = "avxsa010";
const num: number = 2 | NaN | Infinity;
const bool: boolean = true;
const nill: null = null;
const und: undefined = undefined;
const data: any = {};
const obj: object = { a: 1, c: 2 };
const arrSrt: string[] = ["a", "b", "c", "aa", "bb", "cc"];
const arrNum: number[] = [1, 2, 3];
const resultArrStr = arrSrt.filter((item) => {
  return item.length === 1;
});

const resultArrNum = arrNum.map((item) => {
  return item * 10;
});

// console.log(resultArrNum);

let grade: number | string = "A"; // union
let grades: (number | string)[] = [2, "A", "D", "C"];
const rgb: [number, number, number] = [111, 222, 333]; // tuple
const role: "admin" | "user" | "premium" = "admin"; // literal

enum Role {
  "ADMIN",
  "USER",
  "PREMUIM",
}
const role2: Role = Role.ADMIN;

type passWordType = number | string;
const password: passWordType = "123456789";
const confPasswprd: passWordType = "123456789";

interface Employee {
  [key: string]: any;
  id: number;
  fullname: string;
  birthDeath: Date;
  summary?: string;
}

interface EmployeeProgramer extends Employee {
  githubId: string;
}

interface EmployeeSupport extends Employee {
  phone: string;
}

const john: EmployeeProgramer = {
  id: 123456,
  fullname: "john price",
  birthDeath: new Date("2000-10-16"),
  summary: "programmer",
  salary: 40000,
  githubId: "SAdasdasda4654656@github.com",
};

const joe: EmployeeSupport = {
  id: 965478,
  fullname: "joe momont",
  birthDeath: new Date("1665-13-16"),
  phone: "0955646543",
};

// console.table(john);
// console.table(joe);

interface MyMath {
  version: string;
  sum(a: number, b: number, c?: number): number;
  sumOutPut(a: number, b: number, c?: number): void;
}

const myMath: MyMath = {
  version: "1.2.5",
  sum(a, b, c?) {
    return Math.round(a + b + (c || 0));
  },
  sumOutPut(a,b,c?){ console.log('caculated!');
  }
};
console.log(myMath.version);
console.log(myMath.sum(2,3,9.6));
myMath.sumOutPut(2,3,9.6)


// function sum(a: number, b: number, c?: number): number {
//   return Math.round(a + b + (c || 0));
// }

// console.log(sum(2, 3, 9.6));

export default "---- section 4 type annotation ----"
