// TextField widget
class Label extends Widget {
    // Initialize new TextField
    constructor(text, x, y, width, height) {
        // Construct Widget
        super(x, y, width, height)
        this.text = text

        this.fontSize = 10
        this.font = "Arial";
        this.fillStyle = "black"
        this.textAlign = "center";
    }

    // Define draw event
    // @context - context to draw to
    ondraw(context) {
        context.font = this.fontSize + "px " + this.font;
        context.fillStyle = this.fillStyle
        context.textAlign = this.textAlign
        if(this.textAlign === "right")
          context.fillText(this.text, this.width - this.fontSize, this.height / 2);
        if(this.textAlign === "left")
          context.fillText(this.text, this.fontSize, this.height / 2);
        if(this.textAlign === "center")
          context.fillText(this.text, this.width / 2, this.height / 2);
    }
}
