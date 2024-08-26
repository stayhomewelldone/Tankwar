class Rotate {
    constructor(tank) {
        this.tank = tank;
    }
    move() {
        if (this.tank.turnLeft)
            this.tank.rotation -= this.tank.rotationSpeed;
        else if (this.tank.turnRight)
            this.tank.rotation += this.tank.rotationSpeed;
    }
}
