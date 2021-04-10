class Game {
    constructor(){}
    
    getState(){
        var gameref = database.ref('gameState');
        gameref.on('value',function(data){
            gameState = data.val();

        })

    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var pc = await database.ref('playerCount').once("value");
            if(pc.exists()){
                playerCount = pc.val();
                player.getCount();           
                    }
            form = new Form();
            form.display();
        }
        var img1 = loadImage("1.png")
        var img2 = loadImage("2.png")
        var img3 = loadImage("3.png")
        var img4 = loadImage("4.png")
        var bgimg = loadImage("5.png")
        // bg = createSprite(0,0,10000,500)
        // bg.addImage(bgimg)
        car1 = createSprite(100,200);
        car1.addImage(img1)
        car1.scale = 0.1
        car2 = createSprite(300,200);
        car2.addImage(img2)
        car2.scale = 0.6
        car3 = createSprite(500,200);
        car3.addImage(img3)
        car3.scale = 0.6
        car4 = createSprite(700,200);
        car4.addImage(img4)
        car4.scale = 0.3
        cars = [car1,car2,car3,car4]
        // drawSprites();
    }

    play(){
        form.hide()
        // textSize(30);
        // text("Game Start",120,100)
        Player.getPlayerInfo()
        if(allPlayers!==undefined){
            var index = 0
            var x = 0
            var y;
            // var displayPos = 130

            for (var plr in allPlayers){
                index = index+1;
                x = x+200;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index === player.index){
                    cars[index-1].shapeColor = "red"
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                // if(plr === "player"+ player.index)
                //     fill ("red")
                // else
                //     fill("black")
                

            
                // displayPos += 20;
                // textSize(15)
                // text(allPlayers[plr].name + ":" + allPlayers[plr].distance , 120,displayPos)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            
            player.distance += 50
            player.update()
        
        }
        drawSprites();
    }

}
