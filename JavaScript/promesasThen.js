//promesas y funciones asincronas
// las promesas se usan para crear un tiempo de espera a una solicitud que
//se realice a una base de datos o una api de terceros que puedan llegar a 
//tardar en responder
 

const libros =[

    {"nombre":"La voragine", "autor":"Gabriel Garcia Marquez"},
    {"nombre":"El viejo y el mar","autor":"Ernest Hemingway"},
    {"nombre":"La Odisea","autor":"Homero"},
    {"nombre":"La Divina Comedia","autor":"Dante Alligeri"}
    
    ];
    
    const getLibros = () => {
        return new Promise((resolve, reject) => {
            if(libros == 0){
                reject (new Error("No hay libros"))
            }
            setTimeout(() => {resolve(libros);}, 1500);   //tiempo de espera 2 segs       
        })      
    }
    
    getLibros()
      .then(libros => console.log(libros)) //el metodo then ejecuta la accion 
                                           //en caso de que el resultado de la 
                                           //promesa sea exitoso
      .catch(err => console.error(err.message)); //El metodo Catch captura el error
                                                 //y ejecuta el reject que definimos
                                                 //en la promesa 
    
    
    //El metodo then puede anidarse con otros then de tal forma que retorna
    //el valor al siguiente then y al final el catch evalua el error para todos
    //los then anidados.