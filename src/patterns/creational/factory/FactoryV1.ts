import { Addition } from "./operators/addition";
import { Division } from "./operators/division";
import { Multiplication } from "./operators/multiplication";
import { Operators } from "./operators/operators.enum";
import { Subtraction } from "./operators/subtraction";

export class FactoryV1 {
    public static get(operatorId: Operators, data: {num1: number, num2: number}){
        switch(operatorId){
            case Operators.ADDITION:
                return new Addition(data.num1, data.num2)
            case Operators.SUBTRACTION:
                return new Subtraction(data.num1, data.num2)
            case Operators.MULTIPLICATION:
                return new Multiplication(data.num1, data.num2)
            case Operators.DIVISION:
                return new Division(data.num1, data.num2)
        }
    }
}