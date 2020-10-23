class Box {
  constructor(x, y, width, height) {
    var options = {
     // isStatic:true,
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.Visiblity=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display(){
    console.log(this.body.speed);
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility -5;
        pop();
        
      }
    }
    displayScore(){
      console.log("shashank")
      if(this.Visibility<0 && this.Visibility>-1005)
        score++
        console.log(score);
     }
    
    
    };

