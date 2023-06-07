function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log("🚀 ~ file: decoratorsExampleGPT.ts:2 ~ log ~ target:", target);
  console.log(
    "🚀 ~ file: decoratorsExampleGPT.ts:2 ~ log ~ propertyKey:",
    propertyKey
  );
  console.log(
    "🚀 ~ file: decoratorsExampleGPT.ts:2 ~ log ~ descriptor:",
    descriptor
  );
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${propertyKey} with arguments ${args}`);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${propertyKey} returned ${result}`);
    return result;
  };
  return descriptor;
}

class MyClass {
  @log
  greet(name: string) {
    return `Hello, ${name}!`;
  }
}

const instance = new MyClass();
let pop:any = instance.greet("John");
console.log("🚀 ~ file: decoratorsExampleGPT.ts:30 ~ pop:", pop)

