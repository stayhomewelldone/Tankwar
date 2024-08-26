import { BulletStrategy } from "../firebehavior/bulletstrategy.js";
import { Tank } from "../tank.js";
import { Ammunition } from "./ammunition.js";
export class BulletAmmo extends Ammunition {
    constructor(position) {
        super("ammo-bullet", position);
    }
    onCollision(target) {
        if (target instanceof Tank) {
            target.Firestrategy = new BulletStrategy();
        }
    }
}
