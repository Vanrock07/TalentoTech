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
console.log(getLibros()); 

getLibros()
 






