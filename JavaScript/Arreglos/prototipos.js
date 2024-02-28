
// const Persona ={

//     Nombre: "Rocco",
//     Edad: 22,

//     estudiar(){
//         console.log("Estoy estudiando")
//     }
// }
// console.log(Persona);

// Funcion constructora y asignacion del metodo al prototipo

function Persona(nombre, edad){
    this.Nombre = nombre;
    this.Edad = edad;
}

//metodo fuerade la funcion constructora
Persona.prototype.estudiar = function(){
    console.log("Estoy estudiando de lunes a viernes")
}

const admin = new Persona("Rocco", 22);
const tecnico = new Persona("MIguel", 27);

console.log(admin);
console.log(tecnico);

//herencia prototipica
function Ingeniero(nombre, edad, correo){
    this.super = Persona;
    this.super(nombre, edad);
    this.Correo = correo;
}
//Ingeniero hereda de Persona y trae todo lo del prototipo principal
Ingeniero.prototype = new Persona();
Ingeniero.prototype.constructor = Ingeniero;

//sobreescritura del metodo principal
Ingeniero.prototype.estudiar = function(){
    console.log("El ingeniero estudia");
}

//metodo propio
Ingeniero.prototype.enviarCorreo = function(){
    console.log("El ingeniero envia el correo");
}

const ingeniero = new Ingeniero("Rocco", 22, "inge@gmail.com");
const inge2 = new Ingeniero("Mia", 22, "inge2@gmail.com")

console.log(ingeniero);
console.log(inge2)
ingeniero.estudiar();
inge2.enviarCorreo(); 