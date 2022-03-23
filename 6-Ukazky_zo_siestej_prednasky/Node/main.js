window.onload = function() {
    console.log("\n>>> ROOT Message")
    // Add root node
    var root = new Hello("root")
    // Send hello message
    root.hello()
  
    console.log("\n>>>> Children Message")
    // Add two children to root
    var child1 = new Hello("child1")
    var child2 = new Hello("child2")
    root.add(child1)
    root.add(child2)
    // Send hello message
    root.hello()
  
    console.log("\n>>>> Grandchildren Message")
    // Add grandchildren
    var grandChild = new Hello("grandChild")
    var blackSheep = new Hello("blackSheep")
    /*blackSheep.onHello = function(parent) {
      console.log("I don't want to tell.")
    }*/
    child1.add(grandChild)
    child1.add(blackSheep)
    //child2.add(child2)
  
    // Send hello message
    root.hello()
  }
  