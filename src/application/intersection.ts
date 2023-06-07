interface DOB {
  month: number;
  day: number;
  year: number;
}

interface Student {
  firstName: string;
  lastName: string;
}

type StudentIntersection = Student & DOB;
interface StudentInterface extends Student,DOB {}

let StudentA: Student & DOB = {
  firstName: "A",
  lastName: "B",
  month: 12,
  day: 12,
  year: 2023,
};
let StudentB: StudentIntersection = {
  firstName: "A",
  lastName: "B",
  month: 12,
  day: 12,
  year: 2023,
};
let StudentC: StudentInterface = {
  firstName: "A",
  lastName: "B",
  month: 12,
  day: 12,
  year: 2023,
};


type CombineA = number|string|boolean;
type CombineB = number|string;
type Comnined = CombineA & CombineB //type Comnined = string | number
