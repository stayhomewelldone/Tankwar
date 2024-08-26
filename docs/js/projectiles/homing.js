import { Projectile } from "./projectile.js";
export class Homing extends Projectile {
    constructor(tank) {
        super("homing", tank);
        this.Speed = 2;
        this.game = tank.game;
    }
}
