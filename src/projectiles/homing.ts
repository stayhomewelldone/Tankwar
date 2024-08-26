import { Game } from "../game.js";
import { Tank } from "../tank.js";
import { Projectile } from "./projectile.js";

export class Homing extends Projectile {
  private game: Game;

  constructor(tank: Tank) {
    super("homing", tank);
    this.Speed = 2;
    this.game = tank.game;
  }
}
