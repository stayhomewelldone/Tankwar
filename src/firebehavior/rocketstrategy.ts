import { Rocket } from "../projectiles/rocket.js";
import { Tank } from "../tank.js";
import { FireStrategy } from "./firestrategy.js";

export class RocketStrategy implements FireStrategy {
  fire(tank: Tank) {
    tank.game.gameObjects.push(new Rocket(tank));
  }
}
