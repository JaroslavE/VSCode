// JavaScript ES6 class
// You might need to use an up to date browser

class Ball {
    // Initialization
    constructor(canvas) {
      this.image = document.getElementById("image")
  
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.dx = Math.random() * 50 - 25
      this.dy = Math.random() * 50 - 25
      this.size = Math.random() + .3
      this.rotation = 0
    }
  
    // Movement logic
    move(dt, canvas) {
      console.log("hello")
      if (this.x > canvas.width) {
        this.x = canvas.width
        this.dx = -Math.abs(this.dx)
      }
      if (this.x < 0) {
        this.x = 0
        this.dx = Math.abs(this.dx)
      }
      if (this.y > canvas.height) {
        this.y = canvas.height
        this.dy = -Math.abs(this.dy) * 0.9
      }
      if (this.y < 0) {
        this.y = 0
        this.dy = Math.abs(this.dy) * 0.9
      }
  
      // Movement
      this.x += this.dx * dt
      this.y += this.dy * dt
  
      // Gravity
      this.dy += 9.8 * dt
  
      // Rotation
      this.rotation += dt
    }
  
    // Render self
    draw(context) {
      context.save()
      context.translate(this.x, this.y)
      context.rotate(this.rotation)
      context.scale(this.size, this.size)
      context.drawImage(this.image, -20, -20, 40, 40)
      context.restore()
    }
  }
  