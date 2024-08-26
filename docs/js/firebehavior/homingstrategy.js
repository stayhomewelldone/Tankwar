import { Homing } from "../projectiles/homing.js";
export class HomingStrategy {
    fire(tank) {
        tank.game.gameObjects.push(new Homing(tank));
    }
}
