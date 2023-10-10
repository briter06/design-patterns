import { IAnimal } from "./IAnimal";
import { IVisitor } from "./IVisitor";

export class Cat implements IAnimal {

    accept(visitor: IVisitor): void {
        visitor.visit(this)
    }

}