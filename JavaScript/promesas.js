//promesas: Espera la respuesta de servicios de terceros  
//funciones asincronas:

// const peliculas = [
// {"nombre": "Duro de matar", "año": 1987},
// {"nombre": "Star Wars","año": 1981},
// {"nombre": "Pulp Fiction", "año": 1992},
// {"nombre": "El Quinto Elemento","año": 1996}

// ];
// function getPeliculas(){
//     return peliculas;

// }
//console.log(getPeliculas())

// function getPeliculas(){
//     return new Promise((resolve, reject) => {
//         if(peliculas === 0){
//             reject (new Error("No hay peliculas"))
//         }
//         setTimeout(() => {resolve(peliculas);}, 2000);   //tiempo de espera 2 segs       
//     })
// }
// getPeliculas()
//   .then(peliculas => console.log(peliculas))
//   .catch(err => console.error(err.message));


//  const mostrarPeliculas = async() => {
//     try{
//         const peli = await getPeliculas(); //
//         console.log(peli);
//     }
//     catch(err){
//         console.error(err.message);
//     }
//  }
//  mostrarPeliculas();

print("HOLA")