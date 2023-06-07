import { AbstractFactory } from "../../abstractFactory"
import { PC } from "../PC";
import { Phone } from "../Phone";
import { ApplePC } from "./ApplePC";
import { ApplePhone } from "./ApplePhone";

export class AppleFactory extends AbstractFactory{

    public createPC(): PC {
        return new ApplePC()
    }
    public createPhone(): Phone {
        return new ApplePhone()
    }

}