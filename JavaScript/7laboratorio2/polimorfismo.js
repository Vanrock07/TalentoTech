// El polimorfismo permite personalizar un metodo para que pueda ser 
// usado por otra clase que lo ejecutará a su manera

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    datos(){
        return `Nombre ${this.nombre}, edad ${this.edad}`;
    }
    polimorfismo(){
        return this.datos();
    }
}
  
class Profesor extends Persona {
       constructor(nombre, edad, materia){
        super(nombre, edad);
        this.materia = materia;
    } 
    polimorfismo(){
        return `${super.datos()} es profesor y dicta ${this.materia}`;

    }
}  
class Estudiante extends Persona {
    constructor(nombre, edad, grado){
        super(nombre, edad);
        this.grado = grado;
    }
    polimorfismo(){
        return `${super.datos()} es estudiante y cursa el ${this.grado} grado`           ;
    }
}

let profe = new Profesor("Julian Diaz", 35 ,"matematicas")
let chino = new Estudiante("Pablito Perez", 14 , 9)
console.log(profe);
console.log(profe.polimorfismo());
console.log(chino);
console.log(chino.polimorfismo());
