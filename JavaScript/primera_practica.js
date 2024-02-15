let mensaje;  
let numero;                 //Variable
mensaje = "Hola Mundo";     //asigna un valor a la variable
numero = 67   
alert(mensaje);             //saca mensaje como alerta
console.log(mensaje)        //Imprime por consola 
console.log(typeof(numero)) //type of indica el tipo de la variable

//operadores
let operador = 3;
let operador2 = 5.56;
let result = operador2 + operador;
alert(result); 

//modulo
let numero1 = 10;
let numero2 = 5;
let resto = numero1 % numero2;
alert(resto);

//exponent
let numero3 = 10;
let numero4 = 5;
let exponente = numero1 ** numero2;
alert(exponente);

//incremental
let numero5 = 10;
let numero6 = 5;
let incremento = numero5++;
alert(incremento);

//decremental
let numero7 = 10;
let numero8 = 5;
let decremento = numero7--;
alert(decremento);

//diferente
let numero9 = 10;
let numero10 = 5;
let diferente = numero9!= numero10;
alert(diferente);

//if
let numero11 = 10;
let numero12 = 5;
if (numero11 == numero12) {     // si el primer numero es igual al segundo
    alert("Son iguales");
} else {
    alert("No son iguales");
}

//for
for (let i = 0; i < 10; i++) {   //ciclo de 10 iteraciones
    alert(i);
}

//while
let i = 0;
while (i < 10) {    //mientras que i sea menor a 10 ejecute 
    alert(i);
    i++;
}

//do while
let j = 0;
do {               //ejecuta al menos una vez y luego evalua
    alert(i);
    i++;
} while (i < 10);

//if con dos condiciones
if (Y>2 && y<=5){

    alert("mayor que 2 y menor o igual a 5 ")
    

} else if (Y <=2 || Y >5) {

    alert("menor o igual a 2 o mayor a 5 ")
}

//switch
let numero13 = 3;

switch (numero13) {
    case 1:
        alert("uno");
        break;
    case 2:
        alert("dos");
        break;
    case 3:
        alert("tres");
        break;
    default:
        alert("no reconocido");
        break;
}
//for in
let lista = ["a", "b", "c", "d", "e", "f"];
for (let i in lista) {
    alert(lista[i]);
}

//for of
for (let elemento of lista) {
    alert(elemento);
}

//for each
lista.forEach(function(elemento){
    alert(elemento);
});

