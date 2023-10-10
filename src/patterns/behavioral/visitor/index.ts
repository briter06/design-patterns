import chalk from "chalk";
import { Cat } from "./Cat"
import { Dog } from "./Dog"
import { Visitor1 } from "./Visitor1"
import { Visitor2 } from "./Visitor2"

export const visitorIndex = () => {

    const dog = new Dog()
    const cat = new Cat()

    console.log(chalk.blue(`- Visitor 1 -`))
    console.log(chalk.green(`Dog`))
    dog.accept(new Visitor1())
    console.log(chalk.green(`Cat`))
    cat.accept(new Visitor1())

    console.log(chalk.red("======================="))

    console.log(chalk.blue(`- Visitor 2 -`))
    console.log(chalk.green(`Dog`))
    dog.accept(new Visitor2())
    console.log(chalk.green(`Cat`))
    cat.accept(new Visitor2())


}