class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Tree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
        }else{
            this.insertNode(this.root,value)
        }
       
    }
    insertNode(root,value){
        
        if(root.left.value < value){
            this.insertNode(root.left,value)
        } 
        if(root.right.value > value){
            this.insertNode(root.right,value)
        }

    }
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right)
        }
    }
}
const tr = new Tree()
tr.insert(10)
tr.preOrder(tr.root)