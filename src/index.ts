import chalk from "chalk";
import pascalcase from "pascalcase";
import { factoryIndex } from "./patterns/creational/factory";
import { singletonIndex } from "./patterns/creational/singleton";
import { abstractFactoryIndex } from "./patterns/creational/abstractFactory";

const patterns: {[key: string]: () => void} = {
    singleton: singletonIndex,
    factory: factoryIndex,
    abstractFactory: abstractFactoryIndex
}

const pattern: string = process.argv[2]
if(patterns[pattern]){
    console.log(chalk.yellow(`${pascalcase(pattern)} pattern:`))
    patterns[pattern]()
}else{
    throw new Error('Invalid pattern')
}