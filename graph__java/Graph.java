package graph__java;

import java.util.ArrayList;

/**
 * This class represents a collection of node in a network
 */
public class Graph {
    private ArrayList<Vertex> vertices;
    private Boolean isWeighted;
    private Boolean isDirected;

    public Graph(Boolean isWeighted, Boolean isDirected) {
        this.vertices = new ArrayList<Vertex>();
        this.isWeighted = isWeighted;
        this.isDirected = isDirected;
    }

    public Boolean isWeighted() {
        return isWeighted;
    }

    public Boolean isDirected() {
        return isDirected;
    }

    public Vertex addVertex(String data) {
        Vertex vertex = new Vertex(data);
        this.vertices.add(vertex);
        return vertex;
    }

    public void removeVertex(Vertex vertex) {
        this.vertices.remove(vertex);
    }

    public void addEdge(Vertex startVertex, Vertex endVertex, Integer weight) {
        if (!isWeighted) {
            weight = null;
        }
        startVertex.addEdge(endVertex, weight);

        if (!isDirected) {
            endVertex.addEdge(startVertex, weight);
        }
    }

    public void removeEdge(Vertex startVertex, Vertex endVertex) {
        startVertex.removeEdge(endVertex);

        if (!isDirected) {
            endVertex.removeEdge(startVertex);
        }
    }

    public Vertex getVertexByValue(String value) {
        for (Vertex v : vertices) {
            if (v.getData() == value) {
                return v;
            }
        }

        return null;
    }

    public void print() {
        String graph_rep = "";

        for (int i = 0; i < this.vertices.size(); i++) {
            Vertex v = this.vertices.get(i);
            graph_rep += "(" + v.print(isWeighted) + ")";

            if (i < this.vertices.size() - 1) {
                graph_rep += " --> ";
            }
        }

        System.out.println(graph_rep);
    }

    public static void main(String[] args) {
        Graph peopleNetwork = new Graph(true, true);
        Vertex adams = peopleNetwork.addVertex("adams");
        Vertex sean = peopleNetwork.addVertex("sean");

        peopleNetwork.addEdge(adams, sean, 200);

        peopleNetwork.print();
    }
}