// Canvas base Widget
class Widget extends Node {
    // Construct new widget
    // @x - horizontal position
    // @y - vertical position
    // @width - horizontal size
    // @height - vertical size
    constructor(x, y, width, height) {
        // Construct Node
        super()

        // Initialize the widget
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.rotation = 0
        this.visible = true
        this.focus = false
        this.border = true
    }

    // Draw handling
    // @context - Canvas context to draw to
    draw(context) {
        if (!this.visible) return

        // Each widget contained in its parent
        context.save()
        // Clipping
        context.translate(this.x, this.y)
        context.rotate(this.rotation)
        context.beginPath()
        context.rect(0, 0, this.width, this.height)
        context.clip()
        // Draw
        this.ondraw(context)
        // Send draw event to other Widgets
        this.notify("draw", context)

        // Draw border
        if (this.border) {
            context.beginPath()
            context.rect(0, 0, this.width, this.height)
            context.lineWidth = 5
            context.strokeStyle = "red"
            context.stroke()
        }

        context.restore()
    }

    // Draw event
    // @canvas contaxt to draw to
    ondraw(context) {}

    // Click handling
    // @point - pointer status structure
    click(point) {
        if (!this.visible) return

        // Point needs to be converted to local coordinates
        var localPoint = {
            x: point.x - this.x,
            y: point.y - this.y
        }

        // Check localPoint is inside Widget boundary
        if (0 < localPoint.x && localPoint.x < this.width)
            if (0 < localPoint.y && localPoint.y < this.height) {
                this.focus = true
                // Call onclick function
                this.onclick(localPoint)
            } else
                this.focus = false

        // Send click event to other Widgets
        this.notify("click", localPoint)
    }

    // Click event
    // @point - pointer status structure
    onclick(point) {}

    // Keyboard handling
    // @key - key code that was pressed
    key(key) {
        if (!this.visible) return
        if (this.focus) this.onkey(key)

        // Send key message to other Widgets
        this.notify("key", key)
    }

    // Keyboard event
    // @key - key code that was pressed
    onkey(key) {}
}
