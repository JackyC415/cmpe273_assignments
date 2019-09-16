class Universe {
    constructor(planet, temperature, gravity) {
        this.planet = planet;
        this.temperature = temperature;
        this.gravity = gravity;
    }

    getAvgTemperature() {
        return "Average temperature of the Universe: " + this.temperature + " kelvins";
    }

    getGravity() {
        return "Gravity of Universe: " + this.gravity;
    }
}

//subclass inheritance
class Earth extends Universe {
    constructor(planet, temperature, gravity) {
        super();
        Object.assign(this, {planet, temperature, gravity});
    }

    //method overriding
    getAvgTemperature() {
        const tempConst = "celsius";
        return "Average temperature on " + this.planet + ": " + this.temperature + " " + tempConst;
    }   

    //method overriding
    getGravity() {
        const gravityConst = "m/s^2"
        return "Gravity on Earth: " + this.gravity + gravityConst;
    }

}

const universe = new Universe("MultiDimension", 2.73, "StackOverFlow!!!");
const earth = new Earth("Earth", 12.5, 9.8);
console.log(universe.getGravity());
console.log(universe.getAvgTemperature());
console.log(earth.getGravity());
console.log(earth.getAvgTemperature());