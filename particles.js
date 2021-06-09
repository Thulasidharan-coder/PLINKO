class particle {

constructor(x, y) {

    var op = {

        isStatic: true
    }

this.body = Bodies.circle(x, y, this.r, op);

   this.color = color(random(0, 225), random(0, 225), random(0, 225))

    World.add(world, this.body);

}

display() {

    var pos = this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.w, this.h);

}

}