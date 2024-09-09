let heroStartLoc=[{x:550,y:120},{x:300,y:300},{x:120,y:120}];function randArray(e){return e[Math.floor(Math.random()*e.length)]}let writeStat=function(e,a,l,i,n){e.fillText(i,a,l),a+=e.measureText(i).width,e.fillText(n,a,l)},makeStats=function(e){var a=canvas.getContext("2d");a.font="30px Arial",a.fontWeight="bold",a.fillStyle="white",a.textAlign="start",a.textBaseline="top";writeStat(a,20,20,"Health: ",e.health),writeStat(a,220,20,"Floor: ",gameState.floor),writeStat(a,360,20,"Enemy KOs: ",gameState.enemiesKilled),writeStat(a,20,65,"Time: ",gameState.getTimeMin()),writeStat(a,20+a.measureText("Time: "+gameState.getTimeMin()).width,65,":",gameState.getTimeSec()),writeStat(a,220,65,"Items: ",e.itemCount),writeStat(a,360,65,"Sword Atks: ",gameState.swordHealth)},startLevels=function(e,a){if(!e.floorStarted)switch(e.floor){case 7:level7(e,a);break;case 6:level6(e,a);break;case 5:level5(e,a);break;case 4:level4(e,a);break;case 3:level3(e,a);break;case 2:level2(e,a);break;case 1:level1(e,a);break;default:e.floorStarted=!1,e.state="end"}},initializeLevel=function(e,a){e.floorStarted=!0,new Wall("w1","h",0,0,canvas.width).addToPieces(a),new Wall("w2","v",0,0,canvas.height).addToPieces(a),new Wall("w3","h",0,canvas.height-10,canvas.width).addToPieces(a),new Wall("w4","v",canvas.width-10,0,canvas.height).addToPieces(a),new Wall("w5","h",0,100,canvas.width).addToPieces(a),new Wall("w6","v",100,100,canvas.height-100).addToPieces(a);for(let e=0;e<7;e++)new Tower("tower"+e,"tower",25,170+60*e).addToPieces(a);return new FastGP("marker","marker",45,150+480/e.maxFloor*(e.maxFloor-e.floor),20,20,"green").addToPieces(a),a.getPiece("hero")},level7=function(e,a){let l=initializeLevel(e,a);l.sprite.x=550,l.sprite.y=550,new Heart("h2",300,150).addToPieces(a),new SwordItem("s1",120,330).addToPieces(a),new Enemy("e_purple0","enemy",120,200,20,20,"purple","vertical",220,5).addToPieces(a),new Enemy("e_purple1","enemy",120,400,20,20,"purple","vertical",220,5).addToPieces(a),new Enemy("e_purple2","enemy",160,200,20,20,"purple","vertical",100,5).addToPieces(a),new Enemy("e_purple3","enemy",200,300,20,20,"purple","vertical",200,5).addToPieces(a),new Enemy("e_purple4","enemy",240,200,20,20,"red","vertical",100,5).addToPieces(a),new Enemy("e_purple5","enemy",280,300,20,20,"purple","vertical",150,5).addToPieces(a),new Enemy("e_purple11","enemy",340,300,20,20,"purple","vertical",150,5).addToPieces(a),new Enemy("e_purple12","enemy",400,300,20,20,"red","vertical",185,5).addToPieces(a),new Enemy("e_purple13","enemy",440,300,20,20,"red","vertical",185,7).addToPieces(a),new Enemy("e_purple16","enemy",550,300,20,20,"purple","vertical",185,1).addToPieces(a),new Enemy("e_purple10","enemy",400,400,20,20,"yellow","horizontal",150,1).addToPieces(a),new Enemy("e_purple9","enemy",340,380,20,20,"yellow","horizontal",150,6).addToPieces(a),new Enemy("e_purple6","enemy",280,300,20,20,"purple","horizontal",150,5).addToPieces(a),new Enemy("e_purple7","enemy",280,340,20,20,"purple","horizontal",150,5).addToPieces(a),new Enemy("e_purple8","enemy",280,120,20,20,"yellow","horizontal",150,5).addToPieces(a),new Enemy("e_purple14","enemy",280,500,20,20,"yellow","horizontal",150,5).addToPieces(a),new Enemy("e_purple15","enemy",300,550,20,20,"yellow","horizontal",150,5).addToPieces(a),new Stairs("stair1",120,120).addToPieces(a)},level6=function(e,a){let l=initializeLevel(e,a);l.sprite.x=550,l.sprite.y=550,new Wall("w7","h",200,200,500).addToPieces(a),new Wall("w9","h",200,240,340).addToPieces(a),new Wall("w10","v",530,250,120).addToPieces(a),new Wall("w11","h",530,370,60).addToPieces(a),new Move("b0",500,550,20,20,"grey").addToPieces(a),new Move("b1",220,210,20,20,"grey").addToPieces(a),new Move("b2",240,220,20,20,"grey").addToPieces(a),new Move("b3",260,220,20,20,"grey").addToPieces(a),new Enemy("e_purple15","enemy",460,550,20,20,"yellow","horizontal",150,5).addToPieces(a),new Enemy("e_purple16","enemy",300,210,20,20,"yellow","horizontal",150,1).addToPieces(a),new Enemy("e_purple17","enemy",555,300,20,20,"yellow","vertical",150,1).addToPieces(a),new Stairs("stair1",550,330).addToPieces(a)},level5=function(e,a){e.floorStarted=!0;let l=initializeLevel(e,a);l.sprite.x=120,l.sprite.y=400;[{a:"h",x:280,y:270,l:90},{a:"h",x:280,y:350,l:80},{a:"v",x:280,y:280,l:80},{a:"v",x:350,y:280,l:50},{a:"v",x:310,y:230,l:40},{a:"v",x:310,y:360,l:30},{a:"h",x:360,y:310,l:50},{a:"h",x:240,y:310,l:40},{a:"v",x:410,y:220,l:200},{a:"h",x:220,y:410,l:190},{a:"h",x:270,y:210,l:50},{a:"h",x:340,y:210,l:40},{a:"h",x:240,y:210,l:10},{a:"v",x:240,y:170,l:50},{a:"v",x:370,y:170,l:50},{a:"v",x:240,y:420,l:50},{a:"v",x:370,y:420,l:50},{a:"h",x:240,y:470,l:140},{a:"h",x:240,y:160,l:140},{a:"v",x:210,y:230,l:190}].forEach((e,l)=>new Wall(`w1${l}`,e.a,e.x,e.y,e.l).addToPieces(a));[{x:320,y:260},{x:290,y:260},{x:330,y:350},{x:300,y:350},{x:350,y:300},{x:350,y:300},{x:350,y:270},{x:270,y:340},{x:270,y:310},{x:270,y:280},{x:320,y:260},{x:320,y:260},{x:320,y:260},{x:350,y:330},{x:350,y:300},{x:350,y:270},{x:300,y:220},{x:310,y:390},{x:390,y:300},{x:220,y:310},{x:380,y:200},{x:400,y:210},{x:320,y:200},{x:350,y:200},{x:280,y:200},{x:250,y:200},{x:220,y:200},{x:330,y:400},{x:360,y:400},{x:280,y:400},{x:240,y:400},{x:410,y:230},{x:410,y:270},{x:410,y:350},{x:410,y:400},{x:210,y:210},{x:210,y:270},{x:210,y:350},{x:210,y:400}].forEach((e,l)=>new Move(`m1${l}`,e.x,e.y,20,20,"grey").addToPieces(a)),new Stairs("stair1",300,300).addToPieces(a)},level4=function(e,a){let l=initializeLevel(e,a);l.sprite.x=340,l.sprite.y=550,new Wall("w_1","v",345,100,440).addToPieces(a);let i=0;for(i=0;i<=10;i++)new Enemy("e"+i,"enemy",220,200+40*i,20,20,"red","horizontal",100,i+1).addToPieces(a);for(i=0;i<=10;i++)new Enemy("e"+i+10,"enemy",460,200+40*i,20,20,"red","horizontal",100,10-i).addToPieces(a);new Stairs("stair1",220,120).addToPieces(a),new SwordItem("sw1",460,120).addToPieces(a)},level3=function(e,a){let l=initializeLevel(e,a);l.sprite.x=565,l.sprite.y=565;let i=0,n=0;for(i=0;i<=10;i++)for(n=0;n<=10;n++)new Enemy(n+"e"+i,"enemy",120+60*i,120+60*n,20,20,"red",(i+n)%2==0?"horizontal":"vertical",10,5).addToPieces(a);new Wall("w_1","h",145,220,400).addToPieces(a),a.getPiece("w_1"),a.getPiece("w_1").renderMe=!1,new Heart("h1",153,253).addToPieces(a),new Heart("h2",203,403).addToPieces(a),new SwordItem("sw1",140,120).addToPieces(a),new Stairs("stair1",110,145).addToPieces(a)},level2=function(e,a){let l,i,n=initializeLevel(e,a);for(n.sprite.x=120,n.sprite.y=120,new Stairs("stair1",335,455).addToPieces(a),new Wall("w_1","h",100,150,450).addToPieces(a),new Wall("w_2","v",550,150,400).addToPieces(a),new Wall("w_3","v",480,200,400).addToPieces(a),new Wall("w_4","h",100,200,300).addToPieces(a),new Enemy("e1","enemy",150,125,20,20,"red","vertical").addToPieces(a),new Enemy("e2","enemy",150,175,20,20,"red","vertical").addToPieces(a),new Enemy("e3","enemy",250,175,20,20,"red","vertical").addToPieces(a),new Enemy("e4","enemy",350,175,20,20,"red","vertical").addToPieces(a),new SwordItem("sw1",110,165).addToPieces(a),new Heart("h2",200,165).addToPieces(a),new Enemy("e5","enemy",360,400,20,20,"red","vertical",0,0).addToPieces(a),new Heart("h3",250,350).addToPieces(a),l=0;l<10;l++)for(i=0;i<10;i++)new Move(i+"b"+l,220+20*l,300+20*i,20,20,"grey").addToPieces(a)},level1=function(e,a){let l,i=initializeLevel(e,a);for(i.sprite.x=550,i.sprite.y=120,new SwordItem("sw1",510,125).addToPieces(a),l=0;l<10;l++)new Stairs("stair"+l,120+48*l,550).addToPieces(a),0!=l&&new Enemy("e"+l,"enemy",520-40*l,125,20,20,"red","vertical",0,0).addToPieces(a),new Enemy("1e"+l,"enemy",570-48*l,500,20,20,"red","vertical",0,0).addToPieces(a),new Enemy("2e"+l,"enemy",546-48*l,500,20,20,"red","vertical",0,0).addToPieces(a),new Wall(l+"w","v",105+48*l,525,100).addToPieces(a),6!==l&&(new Wall(l+"w2","h",105+48*l,525,50).addToPieces(a),a.getPiece(l+"w2").renderMe=!1);new Wall("w_1","h",150,150,550).addToPieces(a)};