class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(name) {
        /*
            I think the I/O part of this function is that it accepts a name and simple set it up like so
            {
            name: []
            }

            Edge case:
            - The name might not be of type string, in that case, convert it
        */
        if (typeof name !== "string") name = String(name)
        if (!this.adjacencyList[name]) this.adjacencyList[name] = []
    }

    addEdge(vertex, edge) {
        /*
            Since we are implementing an undirected graph, you have to make both vertices list each other in their adjacency list
        
        */
        if (this.adjacencyList[vertex]) this.adjacencyList[vertex].push(edge)
        if (this.adjacencyList[edge]) this.adjacencyList[edge].push(vertex)
    }

    removeEdge(vertex1, vertex2) {
        /* 
        {	
            A: [B, C],	
            B: [A, D],	
            C: [A, D ],	
            D: [B, C],
         }
         Removing the edge removes both node occurrence, in each other's adjacency list
        */

        let firstVertexAdjacencyList = this.adjacencyList[vertex1]
        let secondVertexAdjacencyList = this.adjacencyList[vertex2]

        for (let i = 0; i < firstVertexAdjacencyList.length; i++) {
            let vertex = firstVertexAdjacencyList[i]
            if (vertex === vertex2) {
                firstVertexAdjacencyList.splice(i, 1)
            }
        }
        for (let i = 0; i < secondVertexAdjacencyList.length; i++) {
            let vertex = secondVertexAdjacencyList[i]
            if (vertex === vertex1) {
                secondVertexAdjacencyList.splice(i, 1)
            }
        }

    }

    removeVertex(removedVertex) {
        /* 
        {	
            A: [B, C],	
            B: [A, D],	
            C: [A, D ],	
            D: [B, C],
         }
         Removing a vertex should
         - use each vertex in it's adjacency list to figure out it's occurrence in other adjacency list then remove them
         - whilst doing that, you can empty the target vertex adjacency list
        */

        if (!this.adjacencyList[removedVertex]) return undefined

        for (let vertex of this.adjacencyList[removedVertex]) {
            this.removeEdge(removedVertex, vertex)
        }

        delete this.adjacencyList[removedVertex]

        return this
    }
}

// Examples demonstrating the Graph class and addVertex method
// Create a new graph
const graph = new Graph();

// Add vertices
graph.addVertex("Tokyo");
graph.addVertex("San Francisco");
graph.addVertex("London");
graph.addVertex("New York");
graph.addVertex("Paris");
graph.addVertex("Sydney");

// Add a numeric vertex which will be converted to string
graph.addVertex(123);

// Log the graph structure to see the adjacency list
console.log("Graph structure after adding vertices:");
console.log(graph.adjacencyList);

// Examples demonstrating the addEdge method
// Add edges between cities
console.log("\nAdding edges between cities:");
graph.addEdge("Tokyo", "San Francisco");
graph.addEdge("San Francisco", "New York");
graph.addEdge("London", "New York");
graph.addEdge("London", "Paris");
graph.addEdge("Paris", "Tokyo");
graph.addEdge("Sydney", "Tokyo");
graph.addEdge("Sydney", "New York");

// Add edge with the numeric vertex
graph.addEdge("123", "Tokyo");

// Log the updated graph structure with edges
console.log("Graph structure after adding edges:");
console.log(graph.adjacencyList);

// Visualize connections for specific cities
console.log("\nConnections for specific cities:");
console.log("Tokyo connections:", graph.adjacencyList["Tokyo"]);
console.log("London connections:", graph.adjacencyList["London"]);
console.log("New York connections:", graph.adjacencyList["New York"]);
console.log("Sydney connections:", graph.adjacencyList["Sydney"]);

// Examples demonstrating the removeEdge functionality
console.log("\n--- Demonstrating removeEdge functionality ---");

// Remove edge between Tokyo and San Francisco
console.log("\nRemoving edge between Tokyo and San Francisco:");
graph.removeEdge("Tokyo", "San Francisco");
console.log("Tokyo connections after removal:", graph.adjacencyList["Tokyo"]);
console.log("San Francisco connections after removal:", graph.adjacencyList["San Francisco"]);

// Remove edge between London and Paris
console.log("\nRemoving edge between London and Paris:");
graph.removeEdge("London", "Paris");
console.log("London connections after removal:", graph.adjacencyList["London"]);
console.log("Paris connections after removal:", graph.adjacencyList["Paris"]);

// Remove edge between Paris and Tokyo
console.log("\nRemoving edge between Paris and Tokyo:");
graph.removeEdge("Paris", "Tokyo");
console.log("Paris connections after removal:", graph.adjacencyList["Paris"]);
console.log("Tokyo connections after removal:", graph.adjacencyList["Tokyo"]);

// Show the final graph structure after all edge removals
console.log("\nFinal graph structure after removing edges:");
console.log(graph.adjacencyList);

// Examples demonstrating the removeVertex functionality
console.log("\n--- Demonstrating removeVertex functionality ---");

// Create a copy of the graph for removeVertex demonstration
const vertexRemovalGraph = new Graph();
vertexRemovalGraph.addVertex("Tokyo");
vertexRemovalGraph.addVertex("San Francisco");
vertexRemovalGraph.addVertex("London");
vertexRemovalGraph.addVertex("New York");
vertexRemovalGraph.addVertex("Paris");
vertexRemovalGraph.addVertex("Sydney");

// Add edges
vertexRemovalGraph.addEdge("Tokyo", "San Francisco");
vertexRemovalGraph.addEdge("San Francisco", "New York");
vertexRemovalGraph.addEdge("London", "New York");
vertexRemovalGraph.addEdge("London", "Paris");
vertexRemovalGraph.addEdge("Paris", "Tokyo");
vertexRemovalGraph.addEdge("Sydney", "Tokyo");
vertexRemovalGraph.addEdge("Sydney", "New York");

// Show the initial graph structure
console.log("\nInitial graph structure for removeVertex demonstration:");
console.log(vertexRemovalGraph.adjacencyList);

// Remove Tokyo vertex
console.log("\nRemoving Tokyo vertex from the graph:");
vertexRemovalGraph.removeVertex("Tokyo");
console.log("Graph structure after removing Tokyo:");
console.log(vertexRemovalGraph.adjacencyList);

// Remove New York vertex
console.log("\nRemoving New York vertex from the graph:");
vertexRemovalGraph.removeVertex("New York");
console.log("Graph structure after removing New York:");
console.log(vertexRemovalGraph.adjacencyList);

// Final graph structure after removing vertices
console.log("\nFinal graph structure after removing vertices:");
console.log(vertexRemovalGraph.adjacencyList);
