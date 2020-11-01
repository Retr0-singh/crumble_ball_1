class Paper{

constructor(x,y,width,hieght){
var options = {
    isStatic=false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
ellipse(200,150,20,20);
}
};

function display(){
    var pos= this.body.position;
    ellipse(200,150,20,20);
}