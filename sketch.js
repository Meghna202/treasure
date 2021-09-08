var bg,bg2,bg3, form,system,code,security, treasure;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
  bg3 = loadImage("treasure.png")
}

function setup() {
createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    treasure=createSprite(130, 420, 10, 10);
    treasure.addImage(bg3);
    treasure.scale=0.5
    background(bg2)
    fill("gold")
    textSize(40);
    text("GOOD JOB! YOU UNLOCKED THE TREASURE",50, 200);
  }

  drawSprites()
}