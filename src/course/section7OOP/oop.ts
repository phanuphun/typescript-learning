type BirthDateData = Date | string;

class Person {
    // เวลาใช้งานไม่จำเป็นต้องสร้าง instant
    static version: string = "1.5.25";

    // property (variable)
    private rootPasword: string = "Password";
    firstName: string = "";
    lastName: string = "";
    private readonly bithDate?: BirthDateData;

    // constructor
    constructor(Fname: string, Lname: string, bDate?: BirthDateData) {
        this.firstName = Fname;
        this.lastName = Lname;
        this.bithDate = bDate;
    }

    // method
    getDetail(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getBirthDate(password: string): string | undefined {
        if (password !== this.rootPasword) {
            throw new Error("Password Inccorrect");
        }
        return this.bithDate instanceof Date
            ? this.bithDate.toString()
            : this.bithDate;
    }

    // getter setter
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(data: string) {
        const dataSplitted = data.split(" ");
        if (dataSplitted.length !== 2) {
            throw new Error("Full name incorrect!");
        } else {
            this.firstName = dataSplitted[0];
            this.lastName = dataSplitted[1];
        }
    }
}

// inheritance
class Teacher extends Person {
    schools: string[] = [];
}


class Student extends Person {
    grade:number = 0
    schools: string[] = [];

    // method overriding
    getDetail(): string {
        return `${this.firstName} ${this.lastName} ,(GRADE = ${this.grade})`;
    }
}

console.log("Persion Version ", Person.version);

const john = new Student("john", "Doe", new Date());
console.log(john.getBirthDate("Password"));
console.log(john.getDetail());
john.schools = ["phuriphat", "rmuti"];
john.grade = 4
console.log(john.schools);
console.log(john.getDetail);

export default "---- Section 7 OOP ----";
