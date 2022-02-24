class Ninja {
    constructor (nombre){
        this.velocidad = 3;
        this.fuerza = 3;
        this.nombre = nombre;
        this.salud = 100;
    }
    sayName(){
        console.log(`El ninja se llama ${this.nombre}`);
    }
    showStats(){
        console.log(`${this.nombre}, tiene una fuerza de ${this.fuerza}, una velocidad de ${this.velocidad} y su salud es de ${this.salud}`);
    }
    drinkRice(){
        this.salud += 10;
        console.log(`Ahora la salud de Hyabusa es de ${this.salud}`);
    }
    drinkSake(){
        this.fuerza +=10;
        this.velocidad +=10;
        console.log (`La fuerza incremento a ${this.fuerza} y la velocidad incremento a ${this.velocidad}`);
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkRice();
ninja1.drinkSake();