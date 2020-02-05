var form,player,game,gameState=0,playerCount=0;
var database,position;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
   
}

