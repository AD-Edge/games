let{init:init,GameLoop:GameLoop,Sprite:Sprite,initKeys:initKeys,keyPressed:keyPressed,keyMap:keyMap,bindKeys:bindKeys,on:on,emit:emit}=kontra;initKeys();let{canvas:canvas}=init();canvas.width=600,canvas.height=600,canvas.parentElement.style.textAlign="center",gameState=new Game;let showMenu=function(){var e=canvas.getContext("2d");let t;for(e.font="100px Helvetica",e.fontWeight="bold",e.fillStyle="white",e.textAlign="center",e.textBaseline="top",e.fillText("Back Down",canvas.width/2,50),e.fillText("The Tower",canvas.width/2,150),e.font="30px Arial",e.fillText("Press Enter To Play",canvas.width/2,250),e.font="20px Arial",e.fillText("Press Backspace For Backstory",canvas.width/2,300),e.textAlign="left",e.fillText("[arrows] to move",canvas.width/4,400),e.fillText("[a] to attack non-gray (pick up sword first)",canvas.width/4,450),e.fillText("[z] to move gray boxes",canvas.width/4,500),e.fillText("[esc] to restart",canvas.width/4,550),keyPressed("enter")&&(gameState.state="game"),keyPressed(keyMap[8])&&(gameState.state="backstory"),t=0;t<7;t++)new Tower("tower"+t,"tower",25,200+60*t).sprite.render()},backStory=function(){var e=canvas.getContext("2d");e.textAlign="left",e.font="20px Arial";e.fillText("In this game, you've most definitely defeated the boss.",50,50),e.fillText("You just need to go back down the tower to go home,",50,100),e.fillText("buy groceries and walk your dog.",50,150),e.fillText("Unfortunately, you've used a cheat code to get to the boss",50,250),e.fillText("and all of the enemies and traps are still there.",50,300),e.fillText("Too bad the cheat code was a one-way ticket.",50,350),e.fillText("It was bought from a shady cube.",50,400),e.font="30px Arial",e.textAlign="center",e.fillText("Press Enter To Play",canvas.width/2,500),keyPressed("enter")&&(gameState.state="game")},endGame=function(){var e=canvas.getContext("2d");e.font="100px Helvetica",e.fontWeight="bold",e.fillStyle="white",e.textAlign="center",e.textBaseline="top",e.font="60px Arial",gameState.win?(e.fillText("You Win!",canvas.width/2,100),e.fillText("You Went Back",canvas.width/2,200),e.fillText("Down The Tower",canvas.width/2,300)):(e.fillText("You Lost!",canvas.width/2,100),e.fillText("Your Health",canvas.width/2,200),e.fillText("Reached 0",canvas.width/2,300)),e.font="30px Arial",e.fillText("Press Enter To Play Again",canvas.width/2,400),keyPressed("enter")&&(gameState.resetGame(),gameState.state="menu",resetHero(pieces,hero))};