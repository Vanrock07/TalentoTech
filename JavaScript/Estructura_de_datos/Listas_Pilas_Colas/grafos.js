//funcion para grafos con la propiedad lista adyacente
function Graph(){
    this.adjList = {};
}
//añadir un nuevo nodo al grafo 
Graph.prototype.addVertex = function(vertex){
    if (!this.adjList[vertex]){
        this.adjList[vertex] =[];
    }
}
//crea una conexion bidireccional entre nodos
Graph.prototype.addEdge = function(vertex1, vertex2){
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
}
//recorrer el grafo desde un nodo dado
Graph.prototype.dfsRecursive = function(vertex, visited = {}) {
    if (!vertex || visited[vertex]) return;
    visited[vertex] = true;
    console.log(vertex);
    this.adjList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
            this.dfsRecursive(neighbor, visited);
        }
    })
}

//crear un grafo
const graph = new Graph();
//agregar vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

//agregar aristas (conexion entre vertices)
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

console.log(graph.adjList);
graph.dfsRecursive('A'); //recorre el grafo desde el nodo 'A'