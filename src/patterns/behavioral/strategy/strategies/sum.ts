import { IStrategy } from './strategy'

export class Sum implements IStrategy {

    execute(a: number, b: number): number {
        return a + b
    }

}