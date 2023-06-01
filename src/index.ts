import chalk from "chalk";
import pascalcase from "pascalcase";
import { singletonIndex } from "./patterns/creational/singleton";

const patterns: {[key: string]: () => void} = {
    singleton: singletonIndex
}

const pattern: string = process.argv[2]
if(patterns[pattern]){
    console.log(chalk.yellow(`${pascalcase(pattern)} pattern:`))
    patterns[pattern]()
}else{
    throw new Error('Invalid pattern')
}