import chalk from "chalk";
import { FACTORIES } from "./factories/factories.enum";
import { Factory } from "./factory";

export const abstractFactoryIndex = () => {

    // Apple Factory
    const appleFactory = Factory.getFactory(FACTORIES.APPLE)

    // Apple PC
    const applePC = appleFactory!.createPC()
    console.log(`${chalk.blue(`- Apple PC -`)} Operating System: ${chalk.green(applePC.operatingSystem)} - Is touchable: ${chalk.green(applePC.isTouchable)}`)

    // Applce Phone
    const applePhone = appleFactory!.createPhone()
    console.log(`${chalk.blue(`- Apple Phone -`)} Operating System: ${chalk.green(applePhone.operatingSystem)} - Is integrated with Google: ${chalk.green(applePhone.integratedWithGoogle)}`)

    console.log("-----------------------")

    // Android Factory
    const androidFactory = Factory.getFactory(FACTORIES.ANDROID)

    // Android PC
    const androidPC = androidFactory!.createPC()
    console.log(`${chalk.blue(`- Android PC -`)} Operating System: ${chalk.green(androidPC.operatingSystem)} - Is touchable: ${chalk.green(androidPC.isTouchable)}`)

    // Android Phone
    const androidPhone = androidFactory!.createPhone()
    console.log(`${chalk.blue(`- Android Phone -`)} Operating System: ${chalk.green(androidPhone.operatingSystem)} - Is integrated with Google: ${chalk.green(androidPhone.integratedWithGoogle)}`)
}