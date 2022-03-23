// Object Node
class Node {
    constructor() {
      this.nodes = []
    }
    // Add node
    add(node) {
      this.nodes.push(node)
    }
  
    // Remove node
    remove(node) {
      var index = this.nodes.indexOf(node)
      delete this.nodes[index]
    }
  
    // Pass message "event" to child nodes
    notify(event, argument) {
      for (var index in this.nodes) {
        var node = this.nodes[index]
        // If node has defined message method
        if (typeof (node[event]) == "function")
          node[event](argument)
      }
    }
  }