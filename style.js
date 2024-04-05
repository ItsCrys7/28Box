function setup() {
    createCanvas(350, 200);
    noLoop();
  }
  
  function draw() {
    background(255);
    let count = 0;
    let boxSize = 50;
  
    for (let i = 0; i < 28; i++) {
      let x = (i % 7) * boxSize;
      let y = floor(i / 7) * boxSize;
      fill(random(100, 255), random(100, 255), random(100, 255)); // Culori mai vii
      rect(x, y, boxSize, boxSize);
      fill(0);
      textSize(20);
      textAlign(CENTER, CENTER);
      text(i + 1, x + boxSize / 2, y + boxSize / 2);
    }
  }
  