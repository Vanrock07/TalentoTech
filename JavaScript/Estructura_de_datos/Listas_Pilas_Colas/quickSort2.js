const quickSort = (list) => {

    if (list.length == 0) return [];
    if (list.length == 1) return list;

    let i = Math.floor(list.length / 2); //elige la posicion de i a la mitad del array
    let pivot = list[i]; //asigna el valor de pivot
    list.splice(i, 1); //elimina el elemento del array en la posicion i

    return [
        ...quickSort(list.filter(y => y < pivot)), //list filter crea 
        //un nuevo array con los elementos de filter menores a pivot
        pivot,  
        ...quickSort(list.filter(y => y >= pivot)), //se concatena con
        //un nuevo array con los elementos de filter mayores o iguales a pivot
        
    ]
} 
let lista = [1,5,-2,6,4,3,-4,7];
console.log(lista);
console.log(quickSort(lista));
