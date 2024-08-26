import { Homing } from "../projectiles/homing.js";
import { Tank } from "../tank.js";
import { FireStrategy } from "./firestrategy.js";

export class HomingStrategy implements FireStrategy {
  fire(tank: Tank) {
    tank.game.gameObjects.push(new Homing(tank));
  }
}
