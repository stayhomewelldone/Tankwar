import { Missile } from "../projectiles/missile.js";
import { Tank } from "../tank.js";
import { FireStrategy } from "./firestrategy.js";

export class MissileStrategy implements FireStrategy {
  fire(tank: Tank) {
    tank.game.gameObjects.push(new Missile(tank));
  }
}
