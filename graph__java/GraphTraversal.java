package graph__java;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

/**
 * This is an implementation of the depth first search algorithm.
 * Time complexity: O(V + E)
 */

public class GraphTraversal {
    public static void depthFirstSearch(Vertex startVertex, ArrayList<Vertex> visited) {
        System.out.println(startVertex.getData());
        visited.add(startVertex);

        for (Edge e : startVertex.getEdges()) {
            Vertex neighbors = e.getEndVertex();

            if (!visited.contains(neighbors)) {
                visited.add(neighbors);
                GraphTraversal.depthFirstSearch(neighbors, visited);
            }
        }
    }

    public static void breadthFirstSearch(Vertex startVertex, ArrayList<Vertex> visited) {
        Queue<Vertex> queue = new LinkedList<Vertex>();
        queue.add(startVertex);

        while (!queue.isEmpty()) {
            Vertex currentVertex = queue.remove();

            if (!visited.contains(currentVertex)) {
                System.out.println(currentVertex.getData());
                visited.add(currentVertex);

                for (Edge e : currentVertex.getEdges()) {
                    queue.add(e.getEndVertex());
                }

            }

        }
    }

    public static void main(String[] args) {
        TestGraph testGraph = new TestGraph();
        Vertex startVertex = testGraph.getStartingVertex();

        ArrayList<Vertex> dfsVisited = new ArrayList<>();
        System.out.println("----DFS-----");
        depthFirstSearch(startVertex, dfsVisited);

        System.out.println("\n----BFS-----");
        ArrayList<Vertex> bfsVisited = new ArrayList<>();
        breadthFirstSearch(startVertex, bfsVisited);
    }
}
