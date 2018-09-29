function preload() {
  rbFont = loadFont('../src/Almendra-Italic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  strokeWeight(10);
  var hours = hour();
  var hoursAngle = map(hours % 12, 0, 12, 0, 360);
  var hoursX = map(hours% 12, 0, 12, 0, windowWidth);

  var minutes = minute();
  var minutesAngle = map(minutes, 0, 60, 0, 360);
  var minutesX = map(minutes, 0, 60, 0, windowWidth);

  var seconds = second();
  var secondsAngle = map(seconds, 0, 60, 0, 360);
  var secondsX = map(seconds, 0, 60, 0, windowWidth);

  // var hoursInTwelve = hours % 12;
  // var hoursStringLength = hoursInTwelve.toString().length;
  // var minutesStringLength = minutes.toString().length;
  // var secondsStringLength = seconds.toString().length;
  //
  // var hoursString = hoursStringLength > 1 ? `${hoursInTwelve}` : `0${hoursInTwelve}`;
  // var minuteString = minutesStringLength > 1 ? `${minutes}` : `0${minutes}`;
  // var secondsString = secondsStringLength > 1 ? `${seconds}` : `0${seconds}`;
  //
  // var timeString = `${hoursString} : ${minuteString} : ${secondsString}`;

  push();
    translate(windowWidth / 2, windowHeight / 2 - (windowHeight/ 8));
    rotate(-90);

    push();
      noFill();
      stroke(255, 0, 150);
      strokeWeight(16);
      arc(0, 0, 275, 275, 0, hoursAngle);
      rotate(hoursAngle);
      line(0, 0 , 60, 0);
    pop();

    push();
      noFill();
      stroke(0, 255, 100);
      strokeWeight(12);
      arc(0, 0, 300, 300, 0, minutesAngle);
      rotate(minutesAngle);
      line(0, 0 , 80, 0);
    pop();

    push();
      noFill();
      stroke(150, 0, 255);
      strokeWeight(8);
      arc(0, 0, 320, 320, 0, secondsAngle);
      rotate(secondsAngle);
      line(0, 0 , 100, 0);
    pop();

    stroke(255);
    point(0,0);

    // fill(255)
    // rotate(90);
    // textAlign(CENTER, CENTER);
    // textFont(rbFont);
    // textSize(35);
    // text(timeString, 0, 200);
  pop();

  push();
    translate(0, windowHeight - (3 * (windowHeight / 16)));
    strokeWeight(windowHeight/16);
    blendMode(LIGHTEST);
    push();
      stroke(255, 0, 150);
      line(0, 0, hoursX, 0);
    pop();

    push();
      stroke(0, 255, 100);
      line(0, windowHeight/16, minutesX, windowHeight/16);
    pop();

    push();
      stroke(150, 0, 255);
      line(0, (windowHeight/16) * 2, secondsX, (windowHeight/16) * 2);
    pop();
  pop();
}
