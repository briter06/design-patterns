import { Operator } from "./operator";

export class Division extends Operator {

    public execute(): number {
        return this.num1 / this.num2
    }

}