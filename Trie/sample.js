class trieNode {
  constructor() {
    this.child = new Map();
    this.endOfWord = false;
  }
  markAsLeaf() {
    this.endOfWord = true;
  }
  unMarkAsLeaf() {
    this.endOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new trieNode();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word[i];
      let node = curr.child.get(ch);
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
            return 
        }
        curr = node
      }
      return curr.endOfWord
  }
  display(curr = this.root,prefix=""){
     if(curr.endOfWord){
        console.log(prefix);
     }
     for(let [ch,node] of curr.child){
        this.display(node,prefix+ch)
     }
  }
}
let tr = new Trie();
tr.insert("Hello");
tr.display()
tr.search('e')
