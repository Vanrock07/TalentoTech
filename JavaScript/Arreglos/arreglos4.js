//parametro ES5 usando argumentos,esta es la forma antigua de manejar arreglos
//rest 
function listar (a,b){
    console.log("hola k ase");
    console.log(a);
    console.log(b);
    console.log("fin:",arguments); //entrega un objeto JSON
    console.log("tamaño: ",arguments.length);
    console.log(arguments[2]); //imprime el elemento de la posicion 2
}
listar("pera","manzana","melon", "limon","fresa");


//La misma accion pero usando Rest
function listar2(a,b,...z){
    console.log("hola k ase, ahora usamos Rest");
    console.log(a);
    console.log(b);
    console.log("fin", z); // muestra un arreglo iniciando desde el indice z
                           //es decir omite a y b
    console.log("tamaño: ", z.length); // el resultado es 3 ya que cuenta los 
                                       //elemeentos desde el indice z
    console.log(z[0]); //muestra "melon" ya que toma la posicion 0 a partir de z
}
listar2("pera","manzana","melon", "limon","fresa");