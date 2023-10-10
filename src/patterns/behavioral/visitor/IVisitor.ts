import { IAnimal } from "./IAnimal"

export interface IVisitor {
    visit(visitedElement: IAnimal): void
}