class Stone {
    constructor(x,y) {
    var options = {
        'restitution' : 0.8,
        'friction' : 0.9,
        'density' : 12
    }
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(this.x,this.y,70,70,options);
        World.add(world,this.body);

    }
    display() 
    {
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER);
        strokeWeight(4);
		stroke("black");
		fill("black");
        rect(0,0,70,70);
        pop();
    }
}