//**************creacion basica de un objeto******************

//  const animal = {

//     id: 1,
//     nombre: "perro",
//     color: "negro"

//  };

//  console.log(animal.nombre);
//  console.log(animal.color);


 //************Objetos a partir de una clase*****************

// class animal {

//     constructor() {    //el constructor define los atributos
//         this.id = 1;
//         this.nombre = "perro";
//         this.color = "negro";
//  }
// }
// const perro = new animal();
// console.log(perro);

//****************creacion de objeto************************ 
 class Animal{
   //constructor con parametros
    constructor(id, nombre, color) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }
    //metodos de la clase
    resultado(){
        return `el animal es un ${this.nombre} de color ${this.color}`
    };
 }

const animal1 = new Animal(1,"perro", "negro")
console.log(animal1.resultado())

//***************Herencia***********************
class Tigre extends Animal{  //herencia

    constructor(id, nombre, color, tipo, peso) {
        super(id, nombre, color);   //super trae los atributos heredados
        this.tipo = tipo;           //se definen los atributos propios
        this.peso = peso;
  }
  atacar(){
    return(`el ${this.nombre} de ${this.tipo} está atacando`);

  }
}
let tigre1 = new Tigre(3, "tigre", "naranja", "bengala", 80);
console.log(tigre1.atacar());










 
