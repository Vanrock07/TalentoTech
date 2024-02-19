//funciones asincronas
//Son funciones que esperan que las condiciones se cumplan 
//haciendo uso del metodo "await" para mantener la promesa mientras
//el dato es entregado
 

const libros =[

    {"nombre":"La voragine", "autor":"Gabriel Garcia Marquez"},
    {"nombre":"El viejo y el mar","autor":"Ernest Hemingway"},
    {"nombre":"La Odisea","autor":"Homero"},
    {"nombre":"La Divina Comedia","autor":"Dante Alligeri"}
    
    ];

    //const libros = [];

    //declaracion de la promesa
    console.log("Declaracion de la promesa");
    const getLibros = () => {
        return new Promise((resolve, reject) => {
            if(libros == 0){
                reject (new Error("No hay libros"))
            }
            setTimeout(() => {resolve(libros);}, 1500);   //tiempo de espera 1.5 segs       
        })      
    }
    
    //declaracion de la funcion asincrona
    console.log("Declaracion de la funcion asincrona");
    
    //async function asincronaGetLibros() {   //declaracion funcion normal
        const asincronaGetLibros = async() => {  //declaracion funcion flecha
      try {
        console.log("Inicio de funcion asincrona");
        const lib = await getLibros();
        console.log(lib);

      }catch(err){
        console.log("Error");
        console.log(err.message);
      }
    }
   //llamado a la funcion asincrona
   asincronaGetLibros();

     