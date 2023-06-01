import { SingletonObject } from "./SingletonObject";

export const singletonIndex = () => {
    // Instance 1
    const intance1 = SingletonObject.getInstance()
    intance1.addValue("Value 1")
    console.log(intance1.getValues())
}