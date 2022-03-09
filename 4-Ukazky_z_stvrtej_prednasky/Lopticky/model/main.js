var canvas
var ctx
var time

// Model
var scene = []

// View
function draw() {
  // Clear canvas
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Render all objects in scene
  for (i in scene) {
    scene[i].draw(ctx)
  }
}

// Controller
function move(dt) {
  for (var i in scene) {
    scene[i].move(dt, canvas)
  }
}

// Main loop
function step() {
  console.log("Step")

  // Get time delta
  var now = Date.now()
  var dt = (now - time) / 100
  time = now

  move(dt)
  draw()

  requestAnimationFrame(step)
}

// Initialization
window.onload = function() {
  // Set up canvas for 2D rendering
  canvas = document.getElementById("canvas")
  ctx = canvas.getContext("2d")

 // Create 5 dots
  for (i = 0; i < 5; i++) {
    scene.push(new Dot(canvas))
  }
  // Create 5 balls
  for (i = 0; i < 15; i++) {
    scene.push(new Ball(canvas))
  }
   time = Date.now()
  requestAnimationFrame(step)
}
