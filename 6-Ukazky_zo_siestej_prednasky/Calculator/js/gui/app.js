// Application abstraction that generates control events
class App extends Widget {
    // Initialize Application
    // @id - canvas element id
    constructor(id) {
        var canvas = window.document.getElementById(id)
        var context = canvas.getContext("2d")

        // Initialize the widget
        super(0, 0, canvas.width, canvas.height)
        this.canvas = canvas
        this.context = context

        // Register mouse handler
        var app = this
        this.canvas.onclick = function(event) {
            var point = {
                x: event.offsetX,
                y: event.offsetY,
            }
            // Send click message
            app.click(point)
        }

        // Register keyboard handler
        this.canvas.onkeydown = function(event) {
            // Prevent browser from handling backspace key press
            event.cancelBubble = true
            if (event.stopPropagation) event.stopPropagation()

            // Send key message
            app.key(event)
            return false
        }
    }

    // Handle the draw event
    // @ontext - canvas context
    ondraw(context) {
        context.fillStyle = "white"
        context.fillRect(0, 0, this.width, this.height)
    }

    // Update the application content
    update() {
        this.draw(this.context)
    }

    // Initialize application handlers
    start() {
        // Update 30fps
        var app = this
        setInterval(function() {
            app.update()
        }, 1000 / 30)
    }
}
