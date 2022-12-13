img="";
status="";
object=[]

function preload(){
    imgloadimage('dog_cat.jpg');
}

function setUp(){
    canvas=createCanvas (640,420);
    canvas.center;
    objetDetector=ml5.objetDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:Detectando objetos";
}

function modelLoaded(){
    console.log("¡Modelo cargado!");
    status=true;
    objetDetector.detect(img,gotResult);
}

function gotResults(){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image(img,0,0,640,420);

    if (status !="") {
    }
    for (i=0; i<objects.length, i++){
        document.getElementById("status").innerHTML="status:objeto detectado";
        
        fill("cyan");
        porcent=floor(objects[i].confidence*100);
        text(objects[i].label+""+porcent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("cyan");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    
    fill("cyan");
    text("perro",45,75);
    
    rect(30,60,150,400,350);

    fill("pink");
    text("perro",320,120);
    noFill();
    stroke("pink");
    rect(300,90,270,520)
}

