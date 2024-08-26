import { Bullet } from "../projectiles/bullet.js";
export class BulletStrategy {
    fire(tank) {
        tank.game.gameObjects.push(new Bullet(tank));
    }
}
