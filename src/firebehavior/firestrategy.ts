import { Tank } from "../tank";

export interface FireStrategy {
  fire(tank: Tank): void;
  
}
