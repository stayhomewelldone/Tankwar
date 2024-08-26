class Accelerate {
    constructor(tank) {
        this.tank = tank;
    }
    move() {
        if (this.tank.accelerate) {
            if (this.tank.speed.x < 5)
                this.tank.speed.x += this.tank.ACCELERATION;
            if (this.tank.speed.y < 5)
                this.tank.speed.y += this.tank.ACCELERATION;
        }
        else {
            if (this.tank.speed.x > 0)
                this.tank.speed.x -= this.tank.FRICTION;
            if (this.tank.speed.y > 0)
                this.tank.speed.y -= this.tank.FRICTION;
        }
        if (this.tank.speed.x < 0)
            this.tank.speed.x = 0;
        if (this.tank.speed.y < 0)
            this.tank.speed.y = 0;
    }
}
