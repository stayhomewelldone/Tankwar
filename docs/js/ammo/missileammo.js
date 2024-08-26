import { MissileStrategy } from "../firebehavior/missilestrategy.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class MissileAmmo extends Ammunition {
    constructor(position) {
        super("ammo-missile", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.Firestrategy = new MissileStrategy();
        }
    }
}
