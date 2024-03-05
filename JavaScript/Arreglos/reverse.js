//reverse invierte los elementos de un arreglo

const numeros = [1,2,3,4,5,6,7,8,9]
numeros.reverse();
console.log(numeros);

//splice agrega o elimina elementos en la una posicion definida

const numeros2 = [1,2,3,4,5,6,7,8,9,10];
numeros2.splice(2,0,"dato"); //splice(indice, funcion, dato) funcion 0 para agregar 
                             // 1 para eliminar, dato = elemento a agregar
console.log(numeros2);

const numeros3 = [1,2,3,4,5,6,7,8,9,10];

// numeros3.splice(3,1); //elimina el dato de la posicion 3
// console.log(numeros3) //elimina el 4

numeros3.splice(3,1,"reemplazo") //reemplaza el elemento en la posicion 3
console.log(numeros3);

//lastIndexOf busca un elemento y retorna su posicion

const array = ["pc","impresora","disco","memoria","scanner"];
console.log(array.lastIndexOf("disco"));  //devuelve la posicion de "disco"


//flat crea un solo arreglo con los elementos de los subarreglos internos

const arrayf = [["a","b","c"],"pc","impresora","disco","memoria","scanner",[1,2,3,4,5]];
console.log(arrayf.flat())

// isArray entrega un valor boolean al validar si la variable es o no un arreglo

console.log(Array.isArray([1,2,3,4,5])); //true
console.log(Array.isArray(1)); //false


//from crea un array
console.log(Array.from("esto es un array")); //descompone la frase en elementos
                                             //del nuevo array


 //find recorre el array hasta encontrar el valor solicitado
 const numero = numeros.find(a => {
        console.log("n", a);   
        return a === 7; 
})

//findLast hace lo mismo que find pero en sentido contrario   
const numero2 = numeros.findLast(b => {
        console.log("fl", b);   
        return b === 7; 
})   

//findIndex busca el indice y retorna el elemento
const listaNumeros = [1,2,3,4,5,6,7,8,9]
const numero3 = listaNumeros.findIndex(c => c===4);
console.log(`el indice del elemento es: ${numero3}`);

//toReversed invierte la matriz y la guarda en una matriz nuev
const matriz = [[1,2,3],[4,5,6],[7,8,9]]; //la matriz original no se altera
const matriz2 = matriz.toReversed(); 
console.log(matriz2);

//toSorted genera un arreglo nuevo con los elementos ordenados

const listaNumeros2 = [1,5,3,4,2,6,7,11,9,10,8]
//ordenar la lista omitiendo el unicode 
const listaOrdenada = listaNumeros2.toSorted((a,b) => a-b);
console.log(listaOrdenada);


//to Spliced reemplaza valores en una copia de la matriz original
const a3 = ["name", "lastName", "Email","addrees"]; //la matriz original no se altera
const a4 = a3.toSpliced(2,2,"profesion","nacionalidad"); 
console.log(a4);

//forma de toSpliced
//array.toSpliced("indice donde inicia","cantidad a eliminar", "items a ingresar")
        
