// Button widget
class Button extends Widget {
    constructor(text, x, y, width, height) {
        // Construct the widget
        super(x, y, width, height)

        this.fontSize = 10
        this.font = "Arial";
        this.fillStyle = "black"
        this.textAlign = "center";

        this.text = text
        this.pressed = false
    }

    // Redefine ondraw function
    // @context - Context to draw to
    ondraw(context) {
        context.font = this.fontSize + "px " + this.font;
        context.fillStyle = this.fillStyle
        context.textAlign = this.textAlign
        context.fillText(this.text, this.width / 2, this.height / 2);
    }

    // Redefine onclick function
    // @event - event structure
    onclick(event) {
        this.pressed = !this.pressed
        if (this.action) return this.action()
    }
}
