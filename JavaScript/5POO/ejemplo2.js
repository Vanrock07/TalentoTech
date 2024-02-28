
class Vehiculo {
    constructor(id, marca, color, modelo, estado) {
        this.id = id;
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.estado = estado;
    }
    arrancar(){
        console.log(`el vehiculo ${moto1.id} está encendido`);
    };
}

// let vehiculo1 = new Vehiculo(1, "Nissan","Negro","Sentra","nuevo")
// vehiculo1.arrancar()

class Moto extends Vehiculo {
    constructor(id, marca, color, modelo, estado,cilindraje){
        super(id, marca, color, modelo, estado);
        this.cilindraje = cilindraje;   
    }
    arrancar(){
        console.log(`la motocicleta ${moto1.marca} ${moto1.modelo} está encendida`);
    };
}
let moto1 = new Moto(2,"Yamaha","azul","XTZ250","usada","250cc");
moto1.arrancar();
console.log(moto1)
