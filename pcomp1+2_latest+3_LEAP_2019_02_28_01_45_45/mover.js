class Movers{
	constructor(input){
   this.x=random(width/2-(10+input/1),width/2+(10+input/1));
   this.y=-20;
  this.partial=map(this.y,0,height,0.2,2)
  this.speedx=random(-this.partial*2,this.partial*2);
    this.speedxx=random(-0.15,0.15)
  this.speedy=0;
    this.size=random(5,20);
    //this.h=height;
    this.addh=0
    this.input=input;
    this.lifespan=255;
    this.a=0;
     //this.col=map(ys,20,1023,0,255);
    
  }
  display(){
  	noStroke();
     
    fill(this.col,360,360,120);
    ellipse(this.x,this.y,this.size);
    // if(movers.length>1000){
    // rect(width/2,height,width,this.h);
    // this.addh=map(movers.length,0,500,-0.2,0.8);
    //   this.h=this.h+this.addh;
    // }
    //console.log(this.x)
    //stroke(0)
    //line(0,this.h,width,this.h);
    
    
  }
  move(){
  //this.a=int(map(this.input,0,20,3.5,2));
    
    this.a=(map(h,0,height,0.2,2.0))
    //speed x changing 
  this.x=this.x+this.speedx*20/this.size;
    //speed y changing
  this.y=this.y+this.speedy*10/this.size;
  this.speedy=this.speedy+0.5;
  //hit the bottom,change speed
    if(this.y+this.size/2>h){
  this.speedy=-this.speedy;
  this.speedy=this.speedy+this.a*this.size
      this.speedx+=this.speedxx;
  this.y=constrain(this.y,-20,h-this.size/2);
  }
    //this.h--;
  }

  finished(){
 return this.x<0||this.x>width;
}
  
}