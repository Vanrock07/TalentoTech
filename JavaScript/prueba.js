//lista de personas con tres propiedades
let lista_personas = [{"nombre": "Carlos", "tipo": "profesor", "id": 435}
                     ,{"nombre": "Juan","tipo": "estudiante","id": 436}
                     ,{"nombre": "Pedro","tipo": "trabajador","id": 437}]


//Iterar sobre la lista para obtener las propiedades de cada elemento
for (var persona of lista_personas) {  
    for (var propiedad in persona) {
        console.log(persona[propiedad]);
      
  }
} 





