import { Cat } from "./Cat";
import { Dog } from "./Dog";
import { IAnimal } from "./IAnimal";
import { IVisitor } from "./IVisitor";

export class Visitor2 implements IVisitor {
  visit(visitedElement: IAnimal): void {
    if (visitedElement instanceof Dog) {
      console.log("I bark");
    } else if(visitedElement instanceof Cat) {
      console.log("I meow");
    } else {
      throw new Error("No valid type");
    }
  }
}
