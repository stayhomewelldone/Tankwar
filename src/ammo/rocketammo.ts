import { GameObject } from "../gameobject.js";
import { RocketStrategy } from "../firebehavior/rocketstrategy.js";
import { Tank } from "../tank.js";
import { Vector } from "../vector.js";
import { Ammunition } from "./ammunition.js";

export class RocketAmmo extends Ammunition {
  constructor(position: Vector) {
    super("ammo-rocket", position);
  }

  public onCollision(target: GameObject): void {
    if (target instanceof Tank) {
      target.Firestrategy = new RocketStrategy();
    }
  }
}
