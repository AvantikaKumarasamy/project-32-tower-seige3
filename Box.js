class Box{
    constructor(x,y,width,height){
      var options={
        isStatic :false,
          restitution : 0.5,
          friction:0
      }

      this.body= Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.visiblity=255;

      World.add(world,this.body);
    }

    score(){
      if(this.visiblity<0&& this.visiblity>=-105){
        score++;
      }
    }
 
  display(){
      var pos =this.body.position;
      var ang=this.body.angle;

      if(this.body.speed <6){
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("brown");
        strokeWeight(5);
        stroke("blue");
        rect(0, 0, this.width, this.height);
        pop();

      }
      else{

        World.remove(world, this.body);
        push();
        this.visiblity= this.visiblity-6;
        tint(255,this.visiblity);
        pop();
    }
  }

}
