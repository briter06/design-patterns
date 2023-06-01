export class SingletonObject {

    private static uniqueInstance: SingletonObject = new SingletonObject()

    private values: string[]

    constructor(){
        this.values = []
    }

    public static getInstance() {
        return SingletonObject.uniqueInstance
    }

    public getValues(){
        return this.values
    }

    public addValue(value: string){
        this.values.push(value)
    }

}