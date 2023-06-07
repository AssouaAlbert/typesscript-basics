const names = ["Max", "Luck"];
const names1: Array<string> = ["Max", "Luck"]; //string[]
const promise: Promise<string> = Promise.resolve("I am a string");

promise.then((data) => {
  data.split(""); // Typescript knows about the generic datatype returned by the promise
});

const merge = (A: object, B: object): object => {
  return Object.assign(A, B);
};

function merge2 <T extends object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

function merge3 <T extends object, U extends keyof T>(objA: T, objB: U) {
  return objA[objB]
}

merge3({name: "Paul"}, "name") // Name has to be a key in the object

const example = <T>(a: T) => { //const example: <T>(a: T) => number
 return 0;
}