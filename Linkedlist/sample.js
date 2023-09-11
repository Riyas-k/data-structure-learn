class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }
  insertAt(index, value) {
    if (index < 0 || index > this.length) {
      console.log("Invalid Index");
      return;
    }
    if (index == 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    if (!newNode.next) {
      this.tail = newNode;
    }
    this.length++;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  shift() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    this.length--;
  }
  pop() {
    if (!this.head) {
      return;
    }
    if (this.length == 1) {
      return this.shift();
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null
    this.length--
  }
  change(index,value){
    if(!this.head){
        return
    }
    let current = this.head;
    for(let i=0;i<index;i++){
        current = current.next
    }
    current.value = value
  }
}
const li = new LinkedList();
li.append(10);
li.prepend(5);
li.append(20);
li.insertAt(1, 8);
// li.shift();
// li.pop();
// li.clear()
li.change(2,90000)
li.print();
