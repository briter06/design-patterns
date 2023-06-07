export class Phone {
    public operatingSystem: string
    public integratedWithGoogle: boolean

    constructor(operatingSystem: string, integratedWithGoogle: boolean){
        this.operatingSystem = operatingSystem
        this.integratedWithGoogle = integratedWithGoogle
    }
}