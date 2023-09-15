
class trieNode{
   constructor(){
    this.child = new Map();
    this.end= false
   }
   markAsLeaf(){
    this.end = true
   }
   unMark(){
    this.end = false
   }
}
class Trie{
    constructor(){
        this.root = new trieNode()
    }
    insert(word){
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            let ch = word[i];
            let node = curr.child.get(ch)
            if(!node){
                node = new trieNode()
                curr.child.set(ch,node)
            }
            curr = node
        }
        curr.markAsLeaf()
    }
    search(word){
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            let ch = word[i];
            let node = curr.child.get(ch)
            if(!node){
                return false
            }
            curr = node
        }
        return curr.end;
    }
    display(curr=this.root,prefix=""){
        if(curr.end){
            console.log(prefix);
        }
        for(let [ch,node] of curr.child){
            this.display(node,prefix+ch)
        }
    }
}