class Hello extends Node {
    constructor(name) {
      // Initialize node
      super();
      this.name = name
    }
  
    // Example messages
    hello(parent) {
      this.onHello(parent)
      // Pass message to children
      this.notify("hello", this)
    }
  
    // Execute code when message has been received
    onHello(parent) {
      // Determine who is parent
      var name = "no parent"
      if (parent)
        name = parent.name
  
      // Print hello message
      console.log("hello from : " + this.name + " parent: " + name)
    }
  }