import { Missile } from "../projectiles/missile.js";
export class MissileStrategy {
    fire(tank) {
        tank.game.gameObjects.push(new Missile(tank));
    }
}
