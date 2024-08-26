import { Tank } from "../tank.js";
import { FireStrategy } from "./firestrategy.js";
import { Bullet } from "../projectiles/bullet.js";

export class BulletStrategy implements FireStrategy {
  fire(tank: Tank) {
    tank.game.gameObjects.push(new Bullet(tank));
  }
}
