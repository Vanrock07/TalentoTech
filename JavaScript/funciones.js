//forma 1
function imprimir(){

    console.log("Funcion imprimir");
    console.log(57+90);
    return 80/2;
}
const  imp = imprimir();
console.log(imp);

//forma 2
function sumar(){
    let num1 = 25;
    let num2 = 50;
    return num1 + num2;
}
console.log(sumar());


//forma 3
const sum = function(){
    console.log(76+90);
}
sum();

//forma 4 funcion con parametros
function sumar(num1, num2){
    return num1 + num2;
}
console.log(sumar(25, 50));

//funcion flecha
const sumar2 = (num1, num2) => {return num1 + num2;}
console.log(sumar2(25, 50));

//mensaje con funcion flecha
const saludar = (nombre) => {return "Hola " + nombre + 
", esta es una funcion flecha";}
console.log(saludar("Ivan"));