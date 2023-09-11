class Stack{
    constructor(){
        this.values = []
    }
    push(value){
        this.values.push(value)
    }
    pop(){
        this.values.pop()
    }
    print(){
        for(let i =0 ;i<this.values.length;i++){
            console.log(this.values[i]);
        }
    }
}
let st = new Stack()
st.push(10)
st.push(20)
st.pop()
st.print()