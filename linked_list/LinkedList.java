package linked_list;

import java.util.NoSuchElementException;

public class LinkedList {
    private class Node {
        private int value;
        private Node next;

        public Node(int value) {
            this.value = value;

        }

        @Override
        public String toString() {
            return Integer.toString(value);
        }
    }

    private Node first;
    private Node last;

    public void addFirst(int value) {
        Node node = new Node(value);

        if (isEmpty()) {
            first = last = node;
        } else {
            node.next = first;
            first = node;
        }

    }

    public void addLast(int value) {
        Node node = new Node(value);

        if (isEmpty())
            first = last = node;
        else {
            this.last.next = node;
            this.last = node;
        }

    }

    public int indexOf(int value) {
        int index = 0;
        Node current = first;
        while (current != null) {
            if (current.value == value)
                return index;

            current = current.next;
            index++;
        }

        index = -1;

        return index;
    }

    public void deleteFirst() throws Exception {
        if (isEmpty())
            throw new NoSuchElementException("this element is not accessible");

        if (first.next == null) {
            first = last = null;
            return;
        }

        Node temp = first.next;
        first.next = null;
        first = temp;
    }

    public void deleteLast() {
        if (isEmpty())
            throw new NoSuchElementException();

        if (first == last) {
            first = last = null;
            return;
        }

        Node previous = getPreviousNode(last);
        last = previous;
        last.next = null;

    }

    public Node getPreviousNode(Node node) {
        Node current = first;

        while (current != null) {
            if (current.next == node)
                return current;
            current = current.next;
        }

        return null;
    }

    public boolean contains(int value) {
        return indexOf(value) != -1;
    }

    private boolean isEmpty() {
        return this.first == null;
    }
}
