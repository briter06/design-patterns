import { Addition } from "./operators/addition";
import { Division } from "./operators/division";
import { Multiplication } from "./operators/multiplication";
import { Operator } from "./operators/operator";
import { Operators } from "./operators/operators.enum";
import { Subtraction } from "./operators/subtraction";

type Data = { num1: number, num2: number }

type Factory = {
    [key in Operators]: (data: Data) => Operator
}

export class FactoryV2 {

    private static factory: Factory = {
        [Operators.ADDITION]: (data: Data) => new Addition(data.num1, data.num2),
        [Operators.SUBTRACTION]: (data: Data) => new Subtraction(data.num1, data.num2),
        [Operators.MULTIPLICATION]: (data: Data) => new Multiplication(data.num1, data.num2),
        [Operators.DIVISION]: (data: Data) => new Division(data.num1, data.num2)
    }

    public static get(operatorId: Operators, data: Data) {
        return FactoryV2.factory[operatorId](data)
    }
}