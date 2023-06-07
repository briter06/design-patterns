import { AbstractFactory } from "../../abstractFactory"
import { PC } from "../PC";
import { Phone } from "../Phone";
import { AndroidPC } from "./AndroidPC";
import { AndroidPhone } from "./AndroidPhone";

export class AndroidFactory extends AbstractFactory{

    public createPC(): PC {
        return new AndroidPC()
    }
    public createPhone(): Phone {
        return new AndroidPhone()
    }

}