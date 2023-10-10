import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { IAnimal } from "./IAnimal";
import { IVisitor } from "./IVisitor";

export class Visitor1 implements IVisitor {
  visit(visitedElement: IAnimal): void {
    if (visitedElement instanceof Dog) {
      console.log("I'm a Dog");
    } else if(visitedElement instanceof Cat) {
      console.log("I'm a Cat");
    } else {
      throw new Error("No valid type");
    }
  }
}
