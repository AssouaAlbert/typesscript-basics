function Logger(logString: string) {
    return function (constructor: Function) {
      console.log(logString);
      console.log(constructor);
    };
  }
  
  function WithTemplate(template: string, hookId: string) {
    return function (constructor: Function & typeof Person) {
      console.log("🚀 ~ file: decoratorsAdvance107.ts:10 ~ constructor:", constructor)
      const hookEl = document.getElementById(hookId);
      const p = new constructor();
      console.log("🚀 ~ file: decoratorsAdvance107.ts:12 ~ p:", p)
      if (hookEl) {
        hookEl.innerHTML = template;
        hookEl.querySelector("h1")!.textContent = p.name;
      }
    };
  }
  
  // @Logger('LOGGING - PERSON')
  @WithTemplate("<h1>My Person Object</h1>", "app")
  class Perso {
    name = "Max";
  
    constructor() {
      console.log("Creating person object...");
    }
  }
  
  const pers = new Perso();
  
  console.log(pers);
  