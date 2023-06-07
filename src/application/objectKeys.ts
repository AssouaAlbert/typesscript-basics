interface Teacher {
  firstName: string;
  lastName: string;
}

// class Teacher implements Teacher{
class Teacher { //Shorthand
    firstName;
    lastName;
  constructor() {
    //Must initialize variables in the scope of class or out 
    this.firstName ="A";
    this.lastName ="B";
  }
}
class StudentE implements DOB {
  month;
  day;
  year;
  constructor(f: number, l:  number) {
//   constructor(f: string | number, l: string | number) {
    // this.firstName = f;
    // this.lastName = l;
    this.month = f;
    this.day = l;
    this.year = f;
  }
}

let t1 = new Teacher();
console.log("🚀 ~ file: objectKeys.ts:12 ~ t1:", t1);
