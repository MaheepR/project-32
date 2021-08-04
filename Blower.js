class Blower{
    constructor(x,y,w,h){
        var opt={
            isStatic:true
        }

        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body)
    }
    show(){

        var pos=this.body.position;

        push();
        fill("#654321 ");
        translate(pos.x,pos.y);
        strokeWeight(2);
        stroke(0);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}