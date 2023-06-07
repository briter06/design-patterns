import { PC } from "./factories/PC";
import { Phone } from "./factories/Phone";

export abstract class AbstractFactory {

    public abstract createPC(): PC

    public abstract createPhone(): Phone

}