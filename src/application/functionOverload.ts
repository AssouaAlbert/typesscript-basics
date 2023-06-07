type Combinable = number | string;

function a(a: number, b: number): number;
function a(a: string, b: string): string;
function a(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
