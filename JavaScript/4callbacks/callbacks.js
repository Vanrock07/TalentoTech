//callbacks
// Una función de callback es una función que se pasa a otra función como un argumento, 
// que luego se invoca dentro de la función externa para completar algún tipo de rutina 
// o acción.

// En JavaScript, la forma de crear una función callback es pasándola como parámetro a otra
// función, y luego llamarla de vuelta justo después de que haya ocurrido algo o se haya 
// completado alguna tarea.
//****************** EJEMPLO 1*********************
//CALLBACK SINCRONICA

function crearCita (cita, callback) {
    var miCita = "como yo siempre digo:" + cita;
    callback(miCita);    
}
function logCita(cita) {
    console.log(cita);
}

crearCita(" come tus vegetales", logCita);


 //**************ejemplo 2********************

 function datosServidor (consulta, callback) {
    setTimeout(function () {
        let miConsulta = "Consultando:" + consulta;
        callback(miConsulta);}, 3000);   
 }
function respuestaServidor(consulta) {
    console.log(consulta);
}
datosServidor("Respuesta:",respuestaServidor);


//****************ejemplo 3************************

 function modificar (array, callback) {
    console.log("El arreglo original es:");
    console.log(array);
        array.push("red");
        setTimeout(() => {callback(); }, 3000);  
 }

var partes = ["black", "yellow", "blue"];

 modificar(partes, function(){
     console.log(`se modificó el array a ${partes.length} elementos`)
     console.log(partes)
    })



//*************** ejemplo 4************************
console.log("****Await Llamada*****")
function resolveLlamada(){
  return new Promise((resolve) => {setTimeout(() => {resolve("resolved")}, 3000);
  });
}
async function asyncLlamada(){
    console.log("calling");
    const result = await resolveLlamada();
    console.log(result);
}
asyncLlamada();


//tareas: hacer funcionar todos estos codigos!!!!