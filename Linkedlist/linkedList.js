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
  insertAt(index,val){
    if(index<0 || index>this.length){
        return
    }
    if(index==0){
        this.prepend(val)
        return
    }
    const newNode = new Node(val)
      let current = this.head
      for(let i=0;i<index-1;i++){
        if(!current){
            return
        }
        current = current.next
      }
      newNode.next = current.next
      current.next = newNode
      if(!newNode.next){
        this.tail = newNode
      }
      this.length++ 
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.insertAt(0,90)
linkedList.prepend(30);
linkedList.print();
