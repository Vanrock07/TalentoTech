class Graph {
    constructor() {
        this.adjList = {};
    }
    addNode(node) {
        if (!this.adjList[node]) {
            this.adjList[node] = [];
        }
    }
    addConexion(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }

    //recorrer el grafo desde un nodo dado
    dfRecursive(node, visited = {}) {  //método dfsRecursive Toma un argumento node
        //que es el nodo inicial.
        //para comenzar la búsqueda DFS, y un objeto visited que almacena los 
        //nodos visitados durante la búsqueda. El objeto visited se inicializa 
        //por defecto como un objeto vacío si no se proporciona.
        if (!node || visited[node]) return; //verifica si el vértice actual es nulo 
        //o si ya ha sido visitado. Si es así, la función retorna, ya que no es 
        //necesario visitar este vértice nuevamente.
            visited[node] = true; //marca el vértice actual como visitado, 
            //estableciendo su propiedad correspondiente en el objeto visited como true.
            console.log(node); //imprime el valor del nodo
            this.adjList[node].forEach(neighbor => { //Itera sobre todos los vecinos del 
                //vértice actual utilizando el método forEach. this.adjList[vertex] accede 
                //a la lista de adyacencia del vértice actual, que contiene los vecinos del mismo.
            if (!visited[neighbor]) { // se verifica si el vecino actual no ha sido visitado antes.
                //si es así, se procede a explorar ese vecino llamando recursivamente a la función
                // dfsRecursive.
                this.dfRecursive(neighbor, visited); //Llama recursivamente a dfsRecursive con el 
                //vecino actual como nuevo vértice inicial, y pasa el objeto visited para mantener 
                //un registro de los nodos visitados.
            }
        })
    }
}

//crear un grafo
const graph = new Graph();

//crear vertices
graph.addNode("Alumno");
graph.addNode("Bibliotecario");
graph.addNode("Coordinador");

//crear aristas

//graph.addConexion("Alumno", "Bibliotecario");
graph.addConexion("Bibliotecario", "Coordinador");

console.log(graph.adjList);

//llamando metodo de busqueda
graph.dfRecursive('Alumno');
