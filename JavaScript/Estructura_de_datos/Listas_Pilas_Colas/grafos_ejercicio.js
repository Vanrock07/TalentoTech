//grafo para agregar departamento y municipio

class Grafo {
    constructor() {
        this.adjList = {};
    }
    agregarNodo(vertice) {
        if (!this.adjList[vertice]){
        this.adjList[vertice] = [];
        }
    }
    agregarConexion(vertice1, vertice2) {
        this.adjList[vertice1].push(vertice2);
        this.adjList[vertice2].push(vertice1);
    }
    eliminarConexion(vertice1, vertice2) {
        this.adjList[vertice1].push(vertice2);
        this.adjList[vertice2].push(vertice1);
    }
}

const lista = new Grafo();
lista.agregarNodo("Cundinamarca")
lista.agregarNodo("Bogotá")
lista.agregarNodo("Tolima")
lista.agregarNodo("Ibagué")
lista.agregarNodo("Santander")
lista.agregarNodo("Bucaramanga")
lista.agregarNodo("Antioquia")
lista.agregarNodo("Medellin")
lista.agregarNodo("Boyaca")
lista.agregarNodo("Tunja")

lista.agregarConexion("Cundinamarca", "Bogotá")
lista.agregarConexion("Tolima","Ibagué")
lista.agregarConexion("Santander","Bucaramanga")
lista.agregarConexion("Antioquia","Medellin")
lista.agregarConexion("Boyaca","Tunja")

console.log(lista);