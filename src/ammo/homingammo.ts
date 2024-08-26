import { GameObject } from "../gameobject.js";
import { HomingStrategy } from "../firebehavior/homingstrategy.js";
import { Tank } from "../tank.js";
import { Vector } from "../vector.js";
import { Ammunition } from "./ammunition.js";

export class HomingAmmo extends Ammunition {
  constructor(position: Vector) {
    super("ammo-homing", position);
  }
  public onCollision(target: GameObject): void {
    if (target instanceof Tank) {
      target.Firestrategy = new HomingStrategy();
    }
  }
}
