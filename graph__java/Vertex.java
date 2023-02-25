package graph__java;

import java.util.ArrayList;

/**
 * This class represent a node in a graph it contains:
 * data - represent the value it stores
 * edges - represent a list of neighbors
 */
public class Vertex implements Comparable<Vertex> {
    private String data;

    private ArrayList<Edge> edges;

    public Vertex(String data) {
        this.data = data;
        this.edges = new ArrayList<Edge>();
    }

    public String getData() {
        return data;
    }

    public ArrayList<Edge> getEdges() {
        return this.edges;
    }

    public void addEdge(Vertex endVertex, Integer weight) {
        getEdges().add(new Edge(this, endVertex, weight));
    }

    public void removeEdge(Vertex endVertex) {
        getEdges().removeIf(currentEdge -> currentEdge.getEndVertex().equals(endVertex));
    }

    public String print(Boolean showWeighted) {
        String message = "";

        // return the data if there is no neighbors
        if (getEdges().size() == 0) {
            message += this.getData() + "-->";

            return message;
        }

        // creates a chain of collections
        for (int i = 0; i < getEdges().size(); i++) {
            // get the first data for the first vertex
            if (i == 0) {
                message += getEdges().get(i).getStartVertex().getData() + " --> ";
            }

            // append the end vertex's data
            message += getEdges().get(i).getEndVertex().getData();

            // append weight in a bracket if specified
            if (showWeighted) {
                message += "(" + getEdges().get(i).getWeight() + ")";
            }

            // add commas until the second to the last item
            if (i < getEdges().size() - 1) {
                message += ", ";
            }
        }

        return message;
    }

    @Override
    public int compareTo(Vertex o) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'compareTo'");
    }

}