import chalk from "chalk";
import { FactoryV1 } from "./FactoryV1";
import { FactoryV2 } from "./FactoryV2";
import { Operators } from "./operators/operators.enum";

export const factoryIndex = () => {
    const data = {
        num1: 5,
        num2: 9
    }
    // Factory V1
    console.log(chalk.green("Factory V1:"))
    // Addition
    const additionV1 = FactoryV1.get(Operators.ADDITION, data)
    console.log(`${chalk.blue(`- Addition:`)} ${data.num1} + ${data.num2} = ${additionV1.execute()}`)
    // Subtraction
    const subtractionV1 = FactoryV1.get(Operators.SUBTRACTION, data)
    console.log(`${chalk.blue(`- Subtraction:`)} ${data.num1} - ${data.num2} = ${subtractionV1.execute()}`)
    // Multiplication
    const multiplicationV1 = FactoryV1.get(Operators.MULTIPLICATION, data)
    console.log(`${chalk.blue(`- Multiplication:`)} ${data.num1} * ${data.num2} = ${multiplicationV1.execute()}`)
    // Division
    const divisionV1 = FactoryV1.get(Operators.DIVISION, data)
    console.log(`${chalk.blue(`- Division:`)} ${data.num1} / ${data.num2} = ${divisionV1.execute()}`)

    console.log("------------------")

    // Factory V2
    console.log(chalk.green("Factory V2:"))
    // Addition
    const additionV2 = FactoryV2.get(Operators.ADDITION, data)
    console.log(`${chalk.blue(`- Addition:`)} ${data.num1} + ${data.num2} = ${additionV2.execute()}`)
    // Subtraction
    const subtractionV2 = FactoryV2.get(Operators.SUBTRACTION, data)
    console.log(`${chalk.blue(`- Subtraction:`)} ${data.num1} - ${data.num2} = ${subtractionV2.execute()}`)
    // Multiplication
    const multiplicationV2 = FactoryV2.get(Operators.MULTIPLICATION, data)
    console.log(`${chalk.blue(`- Multiplication:`)} ${data.num1} * ${data.num2} = ${multiplicationV2.execute()}`)
    // Division
    const divisionV2 = FactoryV2.get(Operators.DIVISION, data)
    console.log(`${chalk.blue(`- Division:`)} ${data.num1} / ${data.num2} = ${divisionV2.execute()}`)
}