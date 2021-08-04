class Ball{
    constructor(x,y,w,h){
        var opt={
            restitution:0.8
        }

        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,w,h,opt);
        World.add(world,this.body);
    }
    show(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push ();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        stroke(1);
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h);
        pop ();
    }
}