let lista = ["Name",43,"apellido"];

//lista.push: agrega elementos en la ultima posicion

lista.push("last")
console.log(lista);

//traer un objeto de la lista
console.log(lista[2]);

//Longitud de la lista
console.log(lista.length);

//eliminar un elemento de la lista
lista.pop(); //por default elimina el ultimo elemento de la lista
console.log(lista);

//copia de una lista
const lista2 = lista.slice();
console.log(lista2);

//ordenar una lista
lista.sort();
console.log(lista);

//eliminar un elemento especifico de lista
lista.splice(1,1);
console.log(lista);