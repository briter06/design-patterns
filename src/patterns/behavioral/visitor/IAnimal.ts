import { IVisitor } from "./IVisitor";

export interface IAnimal {
    accept(visitor: IVisitor): void
}