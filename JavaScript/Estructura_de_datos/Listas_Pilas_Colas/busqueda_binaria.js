function bBinaria(arr, value) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let num = arr[mid];

        if (num === value) return mid;
        else if (num < value) left = mid + 1;
        else right = mid - 1;

    }
}
let arr = [3, 4, 5, 6, 8, 9, 10, 11]; //la lista debe estar ordenada para 
//realizar la busqueda binaria
console.log("El valor buscado esta en la posicion",bBinaria(arr, 4));


//********metodo busqueda binaria 2**************/

function bBinaria2(arr, ri, le, val) {
    if (ri>le) return -1;
    let midian = Math.floor((le + ri) / 2);
    if (arr[midian] == val) {
        return midian;
    }
    if (arr[midian] < val) {
        return bBinaria2(arr, midian + 1, le, val);
    }else{
        return bBinaria2(arr, ri, midian - 1, val);
    }
}
    let arr1 = [3, 4, 5, 6, 8, 9, 10, 11];
    console.log(bBinaria2(arr1,0,arr1.length-1,4));
