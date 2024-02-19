//callbacks : 


// function crearCita (cita, callback) {
//     var miCita = "como yo siempre digo:" + cita;
//     callback(miCita);    
// }
// function logCita(cita) {
//     console.log(cita);
// }

// crearCita(" come tus vegetales", logCita);


 //ejemplo2

// function solicitudServidor(consulta, callback) {
//         setTimeout(function(){
//             let respuestaServidor = (consulta + "ejecutando");
//             callback(respuestaServidor)
//  },2000);
// }
// function resultadoServidor(resultado) { 
//     console.log("Respuesta: " + resultado);
// }

// solicitudServidor("El servidor está " + resultadoServidor);

//ejemplo 3

function modificar (array, callback) {
    array.push = ["red"]
    setTimeout(function(){
        callback();
    },1000);
}

const partes = ["conexion", "caidas", "servidor"];

modificar (partes, function(){
    console.log(`se modificó el array de ${partes.length} elementos`);
    console.log(partes);
})




