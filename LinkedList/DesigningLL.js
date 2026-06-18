class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertAtFirst(val) {
    this.size++;
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  insertAtLast(val) {
    this.size++;
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }
  deleteAtFirst() {
    if (this.head == null) {
      console.log("Empty list");
      return;
    }
    this.size--;
    this.head = this.head.next;
  }
  deleteAtLast() {
    if (this.head == null) {
      console.log("Empty list");
      return;
    }
    this.size--;
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let temp = this.head;
    while (temp.next.next != null) {
      temp = temp.next;
    }
    temp.next = null;
  }
  insertAtIndex(val, index) {
    if (index < 0 || index > this.size) {
      console.log("Index is invalid");
      return;
    }
    this.size++;
    const newNode = new Node(val);
    let temp = this.head;
    for (let i = 0; i < index - 1; i++) {
      temp = temp.next;
    }
    newNode.next = temp.next;
    temp.next = newNode;
  }
  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index is invalid");
      return;
    }
    this.size--;
    let temp = this.head
    for (let i = 0; i < index - 1; i++) {
      temp=temp.next
    }
    temp.next = temp.next.next;
  }
  printLL() {
    if (this.head == null) {
      console.log("Empty list");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.val + "->");
      temp = temp.next;
    }
    console.log(temp);
  }
}

let obj = new LinkedList();
obj.insertAtFirst(1);
obj.insertAtFirst(2);
obj.insertAtFirst(3);
obj.insertAtFirst(4);
obj.insertAtFirst(5);
obj.insertAtFirst(6);
obj.insertAtLast(0);
obj.deleteAtFirst();
obj.deleteAtLast();
obj.insertAtIndex(100, 4);
obj.deleteAtIndex(1);
obj.printLL();
