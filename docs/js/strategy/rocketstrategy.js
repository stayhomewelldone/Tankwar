import { Rocket } from "../projectiles/rocket.js";
export class RocketStrategy {
    fire(tank) {
        tank.game.gameObjects.push(new Rocket(tank));
    }
}
