import { SingletonObject } from "./SingletonObject";

export const singletonIndex = () => {
    // Instance 1
    console.log("Instance 1:")
    const intance1 = SingletonObject.getInstance()
    console.log('- Add "Value 1"')
    intance1.addValue("Value 1")
    console.log(`- Result: ${JSON.stringify(intance1.getValues())}`)

    console.log("--------------")
    // Instance 2
    console.log("Instance 2:")
    const intance2 = SingletonObject.getInstance()
    console.log('- Add "Value 2"')
    intance2.addValue("Value 2")
    console.log(`- Result: ${JSON.stringify(intance1.getValues())}`)
}