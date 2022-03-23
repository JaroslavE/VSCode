// Simple Widget implementation
class Widget extends Node {
  constructor(x, y, w, h) {
    // Construct Node
    super();

    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.rotation = 0
    this.visible = true
    this.focus = false
    this.border = true
  }

  // Drawing widgets using canvas
  draw(context) {
    if (!this.visible) return

    // Each widget contained in its parent
    context.save()

    context.translate(this.x, this.y)
    context.rotate(this.rotation)
    context.beginPath()
    context.rect(0, 0, this.w, this.h)
    context.clip()

    // Draw border
    if (this.border) {
      context.beginPath()
      context.rect(0, 0, this.w, this.h)
      context.lineWidth = 5
      context.strokeStyle = "red"
      context.stroke()
    }

    // Draw
    this.ondraw(context)
    // Send draw event to other Widgets
    this.notify("draw", context)

    context.restore()
  }

  // Widget specific drawing
  ondraw(context) {}

  // Click handling
  click(point) {
    if (!this.visible) return

    // Point needs to be converted to local coordinates
    var localPoint = {
      x: point.x - this.x,
      y: point.y - this.y
    }

    // Check localPoint is inside Widget boundary
    if (0 < localPoint.x && localPoint.x < this.w)
      if (0 < localPoint.y && localPoint.y < this.h) {
        this.focus = true
        // Call onclick function
        this.onclick(localPoint)
      } else
        this.focus = false

    // Send click event to other Widgets
    this.notify("click", localPoint)
  }

  onclick(point) {}

  // Keyboard handling
  key(key) {
    if (!this.visible) return

    if (this.focus) this.onkey(key)

    // Send key message to other Widgets
    this.notify("key", key)
  }

  onkey(key) {}
}