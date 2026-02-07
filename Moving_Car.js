// Car position variable
let carX = 0;
let carY=0;
let carSpeed = 10;

function setup() {
  createCanvas(800, 400);
  // Start car in the middle vertically
  carY = height / 2;
}

function draw() {
  // ===== DRAW BACKGROUND =====
  // Sky (light blue)
  background(135, 206, 235);
fill('grey')
rect(255, 110, 20, 200)
fill('yellow')
rect(145, 15, 260, 160)
fill('red')
rect(150, 20, 250, 150)
ellipse(50, 50, 80, 80)
fill('yellow')
textAlign(LEFT, CENTER);
  textFont('roboto');
  textSize(37);
text('China is number one', 190, 100, 250);
textAlign(LEFT, CENTER);
  textFont('roboto');
  textSize(20);
fill('red')
text('Red Sun in the Sky  (Mao Zedong)', 15, 150, 100);



  
  // ===== END BILLBOARD HERE =====

  // ===== DRAW GRASS =====
  fill(34, 139, 34); // Green grass
  rect(0, height / 2 + 50, width, height);

  // ===== DRAW ROAD =====
  fill(70, 70, 70); // Gray road
  rect(0, carY + 30, width, 60);
  
  // Road lines (dashed yellow line)
  stroke(255, 255, 0);
  strokeWeight(3);
  for (let i = 0; i < width; i += 40) {
    line(i, carY + 60, i + 20, carY + 60);
  }
  noStroke();

  // ===== DRAW CAR =====
  drawCar(carX, carY);

  // ===== MOVE CAR =====
  carX = carX + carSpeed;

  // Reset car when it goes off the right side
  if (carX > width + 50) {
    carX = -100;
  }
}

// Function to draw the car
function drawCar(x, y) {
  // Car body (red)
  fill(50, 50, 50);
  rect(x, y, 100, 40, 5);

  // Car top (red)
  fill(55, 55, 55);
  rect(x + 20, y - 25, 60, 30, 5);

  // Windows (light blue)
  fill(135, 206, 250);
  rect(x + 25, y - 20, 20, 18);
  rect(x + 55, y - 20, 20, 18);

  // Wheels (black)
  fill(0);
  circle(x + 25, y + 40, 20);
  circle(x + 75, y + 40, 20);

  // Wheel rims (gray)
  fill(150);
  circle(x + 25, y + 40, 10);
  circle(x + 75, y + 40, 10);

  // Headlight (yellow)
  fill(255, 255, 0);
  circle(x + 95, y + 15, 8);
fill(255, 0, 0);
  rect(x, y + 15, 6);

fill('green')
textSize(48);
text('grass (real)', 200, 350, 4000);


}