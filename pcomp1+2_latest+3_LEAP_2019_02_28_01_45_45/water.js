class Water{
 constructor(){
 this.x=random(0,width);
   this.y=0;
   this.w=random(30);
   this.speedy=random(5);
    this.triw=random(10,12);
   this.speedx=random(-0.1,0.1);
   
 }
  update(){
  this.y=this.y+this.speedy
    this.speedy+=0.01
  }
  show(){
  noStroke();
    fill(255,50)
    triangle(this.x,this.y,this.x-this.triw,this.y-this.triw/10,this.x+this.triw,this.y-this.triw/10);
  }
  finished(){
 return this.y>height+10;
}
}