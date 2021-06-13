class polygon  {
    constructor (x,y,width,height) {
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:false});
        this.width=width;
        this.height=height;
        this.image=loadImage("polygon.png");
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        image(this.image, pos.x,pos.y,this.width,this.height);
    }
}