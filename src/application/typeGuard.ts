type Bird = {
  type: "bird";
  speed: number;
  flyingSpeed: number;
};
type Snail = {
  type: "snail";
  speed: number;
  crawlingSpeed: number;
};

function accelerateAnimal(animal: Snail | Bird): void {
  let { type, speed } = animal;
  if ('flyingSpeed' in animal) {
    console.log('Privileges: ' + animal.flyingSpeed);
  }
  if ('crawlingSpeed' in animal) {
    console.log('Start Date: ' + animal.crawlingSpeed);
  }
  // switch (type) {
  //   case "bird":
  //     {
  //       speed += animal.flyingSpeed;
  //     }
  //     break;
  //   case "snail":
  //     speed += animal.crawlingSpeed;
  //     break;
  //   default:
  //     break;
  // }
  console.log("Speed:", speed);
}

accelerateAnimal({ type: "bird", speed: 0, flyingSpeed: 3 });
