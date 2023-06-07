export class PC {
    public operatingSystem: string
    public isTouchable: boolean

    constructor(operatingSystem: string, isTouchable: boolean){
        this.operatingSystem = operatingSystem
        this.isTouchable = isTouchable
    }
}