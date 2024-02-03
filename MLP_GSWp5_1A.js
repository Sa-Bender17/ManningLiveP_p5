// file named MLP_GSWp5_1A.js sample for first submission.

function setup() {
  // https://p5js.org/reference/#/p5/createCanvas
  // (width, height) of canvas
  createCanvas(400, 400);
}

function draw() {
  // https://p5js.org/reference/#/p5/background
  // lf prefix for vars that are local to function.
  let lfCenter = 200;  // midpoint of canvas, same in X and Y
  let lfWidth = 40;  // rectangle width
  let lfHeight = 40; // rectangle height
  let lfMargin = 5;  // margin from left/top to drawing side.
  background(220);
  fill('red');
  // noStroke();
  rect(lfCenter-lfWidth/2, lfMargin, lfWidth, lfHeight);
  fill('blue');
  rect(lfMargin, lfCenter-lfHeight/2, lfWidth, lfHeight )
  line(lfCenter-lfHeight/2,lfMargin+lfHeight/2,lfMargin+lfWidth
       , lfCenter);
}