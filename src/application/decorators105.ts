function Logger(target: any) {
  console.log("🚀 ~ file: decorators105.ts:2 ~ Logger ~ target:", target);
  console.log("Logger is called");
  target.prototype.age = 32;
}
function Logger2(arg: { mess: string }) {
  return (target: Function & typeof Person2) => {
    target.mess = arg.mess;
  };
}

@Logger
class Person {
  name = "Mark";
  constructor() {
    console.log("🚀 ~Person Created");
  }
}
const person = new Person();
console.log("🚀 ~ file: decorators105.ts:14 ~ person:", person);

@Logger2({ mess: "Hello world" })
class Person2 {
  static mess = "";
  name = "Max";
  constructor() {
    console.log("🚀 ~Person2 Created");
  }
}

console.log(
  "🚀 ~ file: decorators105.ts:33 ~ new Person2().mess:",
  Person2.mess
);
