
function quickSort(lista){
    if (lista.length ==0)return [];
    if (lista.length ==1)return lista;

    let left =[];
    let right = [];
    let pivot = lista.pop();
    let long = lista.length;
    let d = [];

    for (let i=0; i<long; i++){
        if (lista[i] <= pivot)
        {
            left.push(lista[i]);
        }else{
            right.push(lista[i]);
        }   
    }
return quickSort(left).concat(pivot, quickSort(right));
}

let lista = [1,5,-2,6,4,3,-4,7];
console.log(lista);

let listaOrg = quickSort(lista);
console.log(listaOrg);
