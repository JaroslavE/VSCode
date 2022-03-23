// Simple Button implementation
class Button extends Widget {
  constructor(text, x, y, w, h) {
    // Construct Widget
    super(x, y, w, h)

    // Button specific
    this.text = text
    this.pressed = false
  }

  // Redefine ondraw function
  ondraw(context) {
    context.fillStyle = "blue"
    if (this.pressed)
      context.fillStyle = "green"
    context.fillRect(0, 0, this.w, this.h)
    context.font = "20px Arial";
    context.fillStyle = "white"
    context.textAlign = 'center';
    context.fillText(this.text, this.w / 2, this.h / 2);
  }

  // Redefine onclick function
  onclick(event) {
    this.pressed = !this.pressed
    if (this.action) return this.action()
  }


  // By default do nothing
  action() {}
}