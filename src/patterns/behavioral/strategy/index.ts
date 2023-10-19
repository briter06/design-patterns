import chalk from "chalk";
import strategyMapper from "./strategyMapper";
export const strategyIndex = () => {

    console.log(chalk.blue(`Sum Strategy`))
    console.log(strategyMapper.SUM.execute(5,6))
    console.log(chalk.blue(`Substract Strategy`))
    console.log(strategyMapper.SUBSTRACT.execute(5,6))

}