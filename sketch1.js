var canvas,database;
var gameState =0;
var playerCount =0;
var distance=0;
var allPlayers;
var car1,car2,car3,car4,cars;
var form,game,player,name;

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database(); 

    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("cyan")
    if(playerCount ===4 ){
        game.update(1);


    }
    if(gameState === 1){
        clear();
        game.play();
    }
}