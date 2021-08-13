class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB
     World.add(world,this.sling)
    }
    fly() {
         this.sling.bodyA=null
    }
    display(){
        if(this.sling.bodyA){
            var pointB=this.pointB
            var bodyA = this.sling.bodyA.position;
         line (bodyA.x,bodyA.y,pointB.x,pointB.y)
        }


    }


}