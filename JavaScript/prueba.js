//callbacks****************** EJEMPLO 1*********************: 


// function crearCita (cita, callback) {
//     var miCita = "como yo siempre digo:" + cita;
//     callback(miCita);    
// }
// function logCita(cita) {
//     console.log(cita);
// }

// crearCita(" come tus vegetales", logCita);


 //**************ejemplo 2********************

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

//****************ejemplo 3************************

//  function modificar (array, callback) {
//      array.push = ["red"]
//       setTimeout(() => {
//          callback();
//       },1000);

// //     callback();
//  }

//  const partes = ["conexion", "caidas", "servidor"];

//  modificar(partes, function(){
//      console.log(`se modificó el array de ${partes.length} elementos`);
//      console.log(partes);
//  })


//*************** */ ejemplo 5************************
// console.log("Await Llamada")
// function resolveLlamada(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 3000);
//   });
// }
// async function asyncLlamada(){
//     console.log(`calling`);
//     const result = await resolveLlamada();
//     console.log(result);
// }
// asyncLlamada();

//***********FUNCION EXPORT*********************

function sumar(num1, num2){
    return num1 + num2;
}
export{sumar} //exportacion de la función