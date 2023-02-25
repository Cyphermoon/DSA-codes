package linked_list;

public class Main {
    public static void main(String[] args) {
        MyLinkedList linkedList = new MyLinkedList();
        // linkedList.addFirst(1);
        linkedList.addFirst(5);
        linkedList.addFirst(10);
        linkedList.addFirst(50);
        linkedList.deleteLast();
    }
}
