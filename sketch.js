var player1,player2;
var database;
var player1Position,player2Position;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(800,800);
    player1=new Player(10,400,20,20);
    player1.shapeColor="green";
    var player1positionref = database.ref('player1/position');
    player1positionref.on("value",player1.readPosition1,showError);
}   player2=new Player(10,400,20,20);
    player2.shapeColor="red";
    var player2positionref = database.ref('player2/position');
    player2positionref.on("value",player2.readPosition1,showError);

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0,1);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0,1);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1,1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1,1);
    }
    if(keyDown("A")){
        writePosition(-1,0,2);
    }
    else if(keyDown("D")){
        writePosition(1,0,2);
    }
    else if(keyDown("W")){
        writePosition(0,-1,2);
    }
    else if(keyDown("X")){
        writePosition(0,+1,2);
    }
    drawSprites();
}


function showError(){
    console.log("error in loading Database");
}