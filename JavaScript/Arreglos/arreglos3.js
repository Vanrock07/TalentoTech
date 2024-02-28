const Empleados = [
{
    nombre: "Juan",
    correo: "juan@gmail.com",
    cedula: "12345",
    salario: 1200
},
{
    nombre: "Pedro",
    correo: "pedro@gmail.com",
    cedula: "45678",
    salario: 1300

},
{
    nombre: "Miguel",
    correo: "miguel@gmail.com",
    cedula: "98745",
    salario: 1400
},
{
    nombre: "Roberto",
    correo: "rocket@gmail.com",
    cedula: "563214",
    salario: 1500
},
{
    nombre: "Claudia",
    correo: "claudia@gmail.com",
    cedula: "89562",
    salario: 1600
}
];

const salarioMayor = Empleados.filter(valor => valor.salario>1500);
console.log(salarioMayor);


//rest = argumentos indefinidos como un arreglo

function rest(x, y, z, ...args) {
    suma = x + y + z;

    args.forEach(arg => suma +=arg)
    return suma;
}

console.log(rest(1, 2, 3));
console.log(rest(1, 2,3, 4));
console.log(rest(1, 2, 3, 4, 5));