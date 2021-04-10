class Ball{
    constructor(x,y,w,h,angle){
        var options={
            frictionAir:0.005,
            density:1
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        World.add(world,this.body)

    }
    display(){
        var position=this.body.position
        var angle=this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)
      //  rectMode(CENTER)
        stroke("red")
        fill ("yellow")
        strokeWeight(4)
        ellipse(0,0,this.w,this.h)
        pop()
    }
}