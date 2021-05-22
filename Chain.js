class Chain {
    constructor (mya,myb) {
        var option = {
            bodyA:mya,
            bodyB:myb,
            length:10,
            stiffness:0.04
        }
        this.chain= Constraint.create(option);
        World.add (world,this.chain);
}
display(){
    var pointa = this.chain.bodyA.position;
    var pointb = this.chain.bodyB.position;
    push ();
    stroke ("purple");
    strokeWeight(3);
    line (pointa.x,pointa.y,pointb.x,pointb.y);
    pop ();
}
}