class Iron{
    constructor(x,y) {
    var options = {
        'restitution' : 0.8,
        'friction' : 3,
        'density' : 30
    }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,50,50,options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        strokeWeight(4);
		stroke("brown");
		fill("red");
        rect(0,0,50,50);
        pop();
    }
}