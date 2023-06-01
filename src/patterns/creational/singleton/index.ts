import { SingletonObject } from "./SingletonObject";
import chalk from "chalk";

export const singletonIndex = () => {
    // Instance 1
    console.log(chalk.green("Instance 1:"))
    const intance1 = SingletonObject.getInstance()
    console.log(`${chalk.blue('- Add')} "Value 1"`)
    intance1.addValue("Value 1")
    console.log(`${chalk.blue('- Result:')} ${JSON.stringify(intance1.getValues())}`)

    console.log("--------------")
    // Instance 2
    console.log(chalk.green("Instance 2:"))
    const intance2 = SingletonObject.getInstance()
    console.log(`${chalk.blue('- Add')} "Value 2"`)
    intance2.addValue("Value 2")
    console.log(`${chalk.blue('- Result:')} ${JSON.stringify(intance1.getValues())}`)
}