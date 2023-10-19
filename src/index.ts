import chalk from "chalk";
import pascalcase from "pascalcase";
import { factoryIndex } from "./patterns/creational/factory";
import { singletonIndex } from "./patterns/creational/singleton";
import { abstractFactoryIndex } from "./patterns/creational/abstractFactory";
import { visitorIndex } from "./patterns/behavioral/visitor";
import { strategyIndex } from "./patterns/behavioral/strategy";

const patterns: {[key: string]: () => void} = {
    singleton: singletonIndex,
    factory: factoryIndex,
    abstractFactory: abstractFactoryIndex,
    visitor: visitorIndex,
    strategy: strategyIndex
}

const pattern: string = process.argv[2]
if(patterns[pattern]){
    console.log(chalk.yellow(`${pascalcase(pattern)} pattern:\n`))
    patterns[pattern]()
}else{
    throw new Error('Invalid pattern')
}