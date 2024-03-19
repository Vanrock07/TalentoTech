class Graph {
    constructor() {
        this.adjList = {};
    }
    addNode(node) {
        if (!this.adjList[node]) {
            this.adjList[node] = [];
        }
    }
    addConexionUndirected(node1, node2) {
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }
    addConexionDirected(node1, node2) {
        this.adjList[node1].push(node2);
    }
}
const graph1 = new Graph();

graph1.addNode(3);
graph1.addNode(5);
graph1.addNode(6);
graph1.addNode(7);
graph1.addNode(8);
graph1.addNode(9);

console.log(graph1);
 graph1.addConexionUndirected(9,3);
graph1.addConexionUndirected(3,5);
graph1.addConexionUndirected(3,7);
graph1.addConexionUndirected(6,7);
graph1.addConexionUndirected(5,6);
graph1.addConexionUndirected(8,5);
graph1.addConexionUndirected(8,6);

const graph2 = new Graph;

graph2.addNode(1);
graph2.addNode(2);
graph2.addNode(3);
graph2.addNode(4);
graph2.addNode(6);
graph2.addNode(7);
console.log(graph2);

graph2.addConexionDirected(1,3);
graph2.addConexionDirected(3,7);
graph2.addConexionDirected(4,3);
graph2.addConexionDirected(4,2);
graph2.addConexionDirected(2,6);
graph2.addConexionDirected(7,6);




