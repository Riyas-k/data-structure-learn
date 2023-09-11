class Graph {
  constructor() {
    this.adjacencyList = [];
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    while (this.adjacencyList[vertex].length) {
      let adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }
  hasEdge(v1, v2) {
    console.log(
      this.adjacencyList[v1].includes(v2) && this.adjacencyList[v2].includes(v1)
    );
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " => " + this.adjacencyList[vertex]);
    }
  }
  depthFirst(start) {
    let stack = [start],
      result = [],
      visited = {},
      currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    console.log(result);
  }
  breadthFirst(start) {
    let queue = [start],
      result = [],
      visited = {},
      currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log(result);
  }
}
let gr = new Graph();
gr.addVertex("A");
gr.addVertex("B");
gr.addVertex("C");
gr.addEdge("A", "B");
// gr.hasEdge('A','B')
// gr.depthFirst("A");
gr.breadthFirst('A')
