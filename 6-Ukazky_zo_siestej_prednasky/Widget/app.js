// Simple application abstraction
class App extends Widget {
  constructor(element) {
    var canvas = window.document.getElementById(element)
    var context = canvas.getContext("2d")
    super(0, 0, canvas.width, canvas.height)
    this.canvas = canvas
    this.context = context
  }

  // Redefine draw
  ondraw(context) {
    context.fillStyle = "gray"
    context.fillRect(0, 0, this.w, this.h)
  }

  // Redraw everything
  update() {
    this.draw(this.context)
  }

  // Initialize application handlers
  start() {
    var app = this

    // Register mouse handler
    window.onclick = function (event) {
      var point = {
        x: event.layerX,
        y: event.layerY,
      }
      // Send click message
      app.click(point)
    }

    // Register keyb handler
    window.onkeydown = function (event) {
      // Prevent browser from handling backspace key press
      event.cancelBubble = true
      if (event.stopPropagation) event.stopPropagation()

      // Send key message
      app.key(event)
      return false
    }

    // Update 30time per second
    setInterval(function () {
      app.update()
    }, 1000 / 30)
  }
}