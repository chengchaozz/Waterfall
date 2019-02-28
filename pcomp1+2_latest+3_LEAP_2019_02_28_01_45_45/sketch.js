let movers = [];
let input = 5;
let h;
let index = 0;
let p, started;
let waters = [];
let lever;

// let inData
// var serial,x,ys;          // variable to hold an instance of the serialport library
// var portName = '/dev/cu.usbmodem1421'; 
// //let col=0;
//let song1,song2,song3,song4;

// function preload(){
// song1=loadSound("small.mp3");
//   song2=loadSound("medium.mp3");
//   song3=loadSound("strong.mp3");
//   song4=loadSound("stronger.mp3");
// }

function setup() {
  //frameRate(10)
  createCanvas(400, 600);
  noStroke();
  //rectMode(CENTER);
  h = height;
  p = [];
  started = false;
  lever = false;
  //colorMode(HSB,360);
  //   serial = new p5.SerialPort();       // make a new instance of the serialport library
  //   //serial.on('list', printList);  // set a callback function for the serialport list event

  //   serial.on('data', serialEvent);     // callback for when new data arrives

  //  // serial.list();                      // list the serial ports
  //   serial.open(portName);     
  //  // song1.play();


}




function draw() {

  //console.log(movers.length);
  index++;
  //input=int(map(x,75,420,0,20));
  //console.log(input);
  //col=map(ys,20,1023,0,255);
  //console.log(h);
  // if(keyIsPressed){
  // lever=!lever
  // console.log(lever)
  // }
  if (h > 0) {
    background(255, 100);
    fill(0, 120);
    for (let i = 0; i < input; i++) {

      movers.push(new Movers(input));
    }

    //fill(255,120);
    for (let j = movers.length - 1; j >= 0; j--) {
      fill(0, 120)
      movers[j].display();

      movers[j].move();
      if (movers[j].finished()) {
        movers.splice(j, 10);
        j--;
      }

      //console.log(index);
      // if(index>100){
      if (frameCount > 100) {


        //line(0,h-10,width,h-10);
        if (!lever) {
          h = h - 0.001;
        } else {
          h = h + 0.001
        }
        
        // rect(0,300,width,height - 300);
        //console.log(h)
      }
      h = constrain(h, -10, height);
      //console.log(h)
      //console.log(movers.length)

    }
		fill(0);
        rect(0, h, width, height - h + 5);
  } else {
    //col+=2;
    for (let i = 0; i <= 5; i++) {
      waters.push(new Water());
    }
    for (let j = waters.length - 1; j >= 0; j--) {
      //fill(0,120)
      waters[j].show();

      waters[j].update();
      if (waters[j].finished()) {
        waters.splice(j, 10);
        j--;
      }
    }


    //fill(255,0);
    //rect(0, 0, width, height);

    recordParticles();
    drawParticles();
    killParticles();
  }
}

function keyPressed() {
  lever = !lever;
  console.log(lever);
  // if (lever===false) {
  //   lever = true;
  // }
}
// function serialEvent() {
//  inData=serial.readLine();
//   if(inData.length>0){
//  // print(inData);

//     let values=inData.split(',');
//     x=int(values[0]);
//     ys=int(values[1]);



//   }
// }
function recordParticles() {
  if (mouseIsPressed) {
    // noCursor();
    //col=0
    fill(255);
    // line (0,0,mouseX,mouseY)
    for (i = 0; i < 2; i++) {
      p.push(new Particle(mouseX, mouseY));
    }
  }
}




function drawParticles() {
  p.forEach(function(i) {
    let noise = createVector(random(-0.2, 0.2), random(-0.1, .5));
    i.applyForce(noise);
    let friction = i.vel.copy();
    friction.mult(-.015);
    i.applyForce(friction);
    i.update();
    i.show();
  });
}


function killParticles() {
  for (i = p.length - 1; i >= 0; i--) {
    if (p[i].pos.y > height+10||p[i].r<=0) {
      p.splice(i, 1);
    }
  }
}



function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(5, 10);;
  this.maxR = random(5, 10);
  this.bl = random(122, 255);
  this.rd = 255
  this.switch = false;
  this.pos = createVector(this.x, this.y);
  this.vel = createVector(random(-0.1, 0.1), random(0, 10));
  this.acc = createVector(0, random(0.5));
  this.col = 0;
  this.lifespan=255;


  this.show = function() {
    //noStroke();
    this.col += 2
    this.lifespan-=5
    this.col = constrain(this.col, 0, 200);
    this.lifespan=constrain(this.lifespan,10,255)
    fill(0,this.lifespan);
 		this.r-=0.01
    this.r=constrain(this.r,1,10)
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(1);
    this.pos.add(this.vel);
    this.acc.mult(0);
    // if (this.switch == false) {
    //   if (this.r < this.maxR) {
    //     this.r += 1;
    //   } else {
    //     this.switch = true;
    //   }
    // } else {
    //   if (this.r > 0) {
    //     this.r -= .05;
    //     this.r=constrain(this.r,0.5,20);
    //     this.rd -= 6;
    //   } 
    //   else {
    //     this.r = 0;
    //   }
    // }
  }

  this.applyForce = function(f) {
    this.acc.add(f);
  }
}
Leap.loop(function(frame) {
  //console.log("hello");
  frame.hands.forEach(function(hand, index) {
    console.log(hand);
    if (hand == "right") {
      
    }
    //debugger;
    pos_x = hand.indexFinger.tipPosition[0];
    pos_y = hand.indexFinger.tipPosition[1];
    fill(255);
    // line (0,0,mouseX,mouseY)
    for (i = 0; i < 2; i++) {
      p.push(new Particle(pos_x, pos_y));
    }
    // pos_x = hand.screenPosition()[0];
    // pos_y = hand.screenPosition()[1];
    // grabStrength = hand.grabStrength;

  });

}).use('screenPosition', {scale: 0.35});