import { IAnimal } from "./IAnimal";
import { IVisitor } from "./IVisitor";

export class Dog implements IAnimal {

    accept(visitor: IVisitor): void {
        visitor.visit(this)
    }

}