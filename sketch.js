var data1;
var data2;
var i=-1;
var n=0;
var x=211;


function preload() {
  img1 = loadImage ('com.png');
  img2 = loadImage ('mac.png');
  data1 = loadJSON ('words.json');
  data2 = loadJSON ('binary.json');
}

function setup () {
  createCanvas (1100, 700);
  background(50,100,200);
  frameRate(6);
  // Old pc
  image(img1, 30, 240, 400, 300);
  // New Mac
  image(img2, 700, 250, 350, 290);

  var words = data1.words;
  var numbers = data2.number;

  fill(0);
  rect(205,273,161,128);
}

function draw () {
//Timeline
stroke(0);
strokeWeight(2);
line(50,150,1050,150);
/*for (var i = 5; i < 700; i += 100){
  line(i, 365, 50, 10);
}*/


//text for poem
if(n%8==0){
  push();
  fill(0);
  rect(717,269,319,186);
  pop();
  i=i+1;

  textSize(50);
  textAlign(CENTER);
  fill(255);
  text(data1.words[i], 874,367);

}

//numbers for binarycode
push();
fill(0,255,0);
textSize(15);
  text(data2.number[n],x,290);
  pop();
  n++;
  x=x+10;
  if (n%8 == 0) {
    x=211;
    fill(0);
    rect(205,273,161,128);
  }
}

  function mousePressed () {
    console.log (mouseX, mouseY);
  }
