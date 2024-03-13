class Vehiculo {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;  
    }
    encender(){
        console.log(`el vehiculo tipo está encendido`);
    };
}

class Moto extends Vehiculo{
    constructor(cilindraje, marca, modelo){
        super(marca, modelo)
        this.cilindraje = cilindraje;
    }
    encender(){
     console.log
     (`la moto ${moto1.marca} ${moto1.modelo}${moto1.cilindraje} está encendida`);
    }
    validaCilindraje(){
        switch(this.cilindraje){

            case 1:
                console.log("Moto de bajo cilindraje")
                break;
            case 2:
                console.log("Moto de medio cilindraje")
                break;
            case 3:
                console.log("Moto de alto cilindraje")
                break;
            default:
                console.log("Cilindraje indeterminado ")
                break;
        }      
    }
 }

class Auto extends Vehiculo{
    constructor(pasajeros, marca, modelo){
        super(marca, modelo)
        this.pasajeros = pasajeros;
    }
    encender(){
        console.log(`el auto ${auto1.marca} ${auto1.modelo} está encendido`);
    }
}
let vehiculo1 = new Vehiculo("Nissan", "patrol")
console.log(vehiculo1)
vehiculo1.encender()

let moto1 = new Moto(1, "Yamaha", "XTZ");
console.log(moto1);
moto1.encender();
moto1.validaCilindraje();

let auto1 = new Auto(5,"Toyota", "Corolla")
console.log(auto1)
auto1.encender()

