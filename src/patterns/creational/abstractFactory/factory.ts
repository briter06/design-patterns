import { AndroidFactory } from "./factories/android/AndroidFactory";
import { AppleFactory } from "./factories/apple/AppleFactory";
import { FACTORIES } from "./factories/factories.enum";

export class Factory {

    public static getFactory(factoryId: FACTORIES) {
        switch(factoryId){
            case FACTORIES.APPLE:
                return new AppleFactory()
            case FACTORIES.ANDROID:
                return new AndroidFactory()
        }
    }

}