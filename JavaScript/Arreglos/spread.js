//La sintaxis Spread permite expandir los elementos de un objeto iterable 
//(ej: arreglos etc) en otro iterable. Se denota con 3 puntos (...) 

//1. concatenar Arrays

const array1 = [1,2,3,4,5,6,7,];
const array2 = [8,9,10,11,12,13,14,15];

const concatNormal = array1.concat(array2); //concatenacion normal
const concatenadoSpread = [...array1,...array2];
console.log(concatenadoSpread);
console.log(concatNormal);

//unir dos objetos

const objeto1 = {
    nombre: "Pedro",
    apellido: "Pascal"
}
const objeto2 = {
    edad: 22,
    correo: "pedro@gmail.com"
}
const objetoUnido = Object.assign({}, objeto1, objeto2); //metodo assign
console.log(objetoUnido);

const objetoFinal = {...objeto1,...objeto2};  //usando Spread
console.log(objetoFinal);

//2. Extender cadenas de texto

//3. Fusionar y clonar objetos

//4. Extender argumentos de una funcion

//5. Combinar Spread y Rest



//conversion de objetos usando stringify y parse 
const objeto = {
        nombre: "Manuel",
        cedula: 23654,
        correo: "manuel@gmail.com",
        telefono: 25974531
};
console.log(objeto);
console.log(typeof(objeto));

const texto = JSON.stringify(objeto);
console.log(texto);
console.log(typeof(texto));

const objetoAgain = JSON.parse(texto);
console.log(objetoAgain);
console.log(typeof(objetoAgain));


