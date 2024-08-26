import { HomingStrategy } from "../firebehavior/homingstrategy.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class HomingAmmo extends Ammunition {
    constructor(position) {
        super("ammo-homing", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.Firestrategy = new HomingStrategy();
        }
    }
}
