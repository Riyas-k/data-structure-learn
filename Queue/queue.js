class Queue{
    constructor(){
        this.values = []
    }
    enqueue(value){
        this.values.unshift(value)
    }
    dequeue(){
        this.values.pop()
    }
    print(){
        for(let i=0;i<this.values.length;i++){
            console.log(this.values[i]);
        }
    }
}
const q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.dequeue()
q.print()