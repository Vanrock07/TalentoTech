let array1 = [3,6,9];
const array = [1, 2,true, "String", "nombre", array1];
console.log(array);
console.log(array[3]);
console.log(array[5][2]); //traer un dato del arreglo que esta como elemento del
                          //arreglo principal.
console.log(array.length);

const arreglo = Array.of("x","y","z",)
console.log(arreglo);

const valor = Array(10).fill(true); //rellena 10 posiciones con el valor true
console.log(valor);

//funcion flecha 
const arreglo2 = Array.from({length: 10}, (v, i) => i);
console.log(arreglo2);

//recorrer un array con for each 

const frutas = ["pera", "manzana", "banana", "mora","mango"]

frutas.forEach(function(elemento,indice){
    console.log(`<li id = "${indice}">${elemento}</li>`);
   
})

const numeros = [10, 20,30,40,50,60,70]; 

numeros.forEach(function(elemento){
    console.log(elemento);
    
})
//funcion flecha

frutas.forEach( e => console.log(e));
numeros.forEach(e => console.log(e));

//filter
let filtro = frutas.filter(value => value.length > 4);
console.log(filtro);

    
//traer impares y pares de un arreglo

const numeros2 = [1,2,3,4,5,6,7,11,34,12,26,15]; 

const pares = numeros2.filter(value => value % 2 === 0);
const impares = numeros2.filter(value => value % 2!== 0);
console.log(pares);
console.log(impares);

//llenar un array
const nums = [];
function iterar(){
    for(let i = 1; i < 21; i++){
        nums.push(i);
    }
}
iterar();
console.log(nums);




