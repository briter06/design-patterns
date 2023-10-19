import { IStrategy } from './strategy'

export class Substract implements IStrategy {

    execute(a: number, b: number): number {
        return a - b
    }

}