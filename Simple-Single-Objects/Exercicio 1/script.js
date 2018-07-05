class Ventilator {
    constructor(watts, brand, minRPM, maxRPM){
        this.watts = watts;
        this.brand = brand;
        this.minRPM = minRPM;
        this.maxRPM = maxRPM;
        this.onc = false;
        this.offc = true;
        this.velocityc = 0;
        this.rpm = 0;
    }
    speedUp() {
        if (this.velocityc > 0 && this.velocityc < 3) {
            this.velocityc += 1;
            this.rpm += (this.maxRPM - this.minRPM) / 2;
        }
        if (this.velocityc === 0) {
            this.velocityc = 1;
            this.onc = true;
            this.offc = false;
            this.rpm = this.minRPM;
        }
        return;
    }
    slowDown() {
        if (this.velocityc === 1) {
            this.velocityc = 0;
            this.onc = false;
            this.offc = true;
            this.rpm = 0;
        }
        if (this.velocityc > 1 && this.velocityc <= 3) {
            this.velocityc -= 1;
            this.rpm -= (this.maxRPM - this.minRPM) / 2;
        }
        return;
    }
    turnOff() {
        this.velocityc = 0;
        this.onc = false;
        this.offc = true;
        this.rpm = 0;
        return;
    }
    get on() {
        return this.onc;
    }
    get off() {
        return this.offc;
    }
    get velocity() {
        return this.velocityc;
    }
}
