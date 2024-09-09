function Bullet(t,e,i,s,h){this.types={Normal:{damage:2,speed:5,color:"black",size:3},Military:{damage:2,speed:3,color:"black",size:3},Heavy:{damage:4,speed:3,color:"red",size:4},Sniper:{damage:3,speed:5,color:"red",size:4}},this.damage=this.types[s].damage,this.angle=i,this.size=this.types[s].size,this.color=this.types[s].color,Entity.call(this,t,e,this.size,this.size,this.color),this.name="Bullet",this.speed=this.types[s].speed,this.xSpeed=0,this.ySpeed=0,this.target=h}function Item(t,e,i){this.types={Ammo:{bullets:40,color:"Item"},Health:{health:10,color:"Health"},Batteries:{carry:!0,color:"Batteries"},Trap:{traps:2,color:"Item"},Box:{bullets:30,health:10,traps:1,color:"Item"}},this.size=10,Entity.call(this,t,e,this.size,this.size,this.types[i].color),this.name="Item",this.type=i;var s=this.types[i];this.plusHealth=s.health||0,this.plusBullets=s.bullets||0,this.plusTraps=s.traps||0,this.carryable=s.carry||!1,this.weight=s.weight||0}Bullet.prototype=Object.create(Entity.prototype),Bullet.prototype.update=function(){this.xSpeed=this.speed*Math.cos(this.angle),this.ySpeed=this.speed*Math.sin(this.angle);var t=this.x+this.xSpeed,e=this.y+this.ySpeed;if(!Map.isWalkable(t,e,this.name)&&15!=Map.getTileNumber(t,e))return Map.isShootable(t,e)&&Map.changeTile(t,e,0),void(this.alive=!1);this.x+=this.xSpeed,this.y-=this.ySpeed},Bullet.prototype.draw=function(){ctx.fillStyle=this.color,ctx.fillRect(this.x-this.width/2,this.y-this.height/2,this.width,this.height)},Item.prototype=Object.create(Entity.prototype),Item.prototype.update=function(){this.bulletCollision()&&(this.alive=!1)},Item.prototype.draw=function(){ImageLoader.drawIMG(this.color,this.x-this.width/2,this.y-this.height/2)};var GUI={sHealth:null,sMaxHealth:null,sTraps:null,sBullets:null,sBatteries:null,sCarry:null,player:null,server:null,top:0,left:0,init:function(){this.sHealth=document.getElementById("health"),this.sMaxHealth=document.getElementById("maxHealth"),this.sTraps=document.getElementById("traps"),this.sBullets=document.getElementById("bullets"),this.sBatteries=document.getElementById("batteries"),this.sCarry=document.getElementById("carry"),this.player=GameEngine.getEntity("Player"),this.server=GameEngine.getEntity("Server"),this.top=-height/4,this.left=-width/4,document.getElementById("start").style.display="block",GameEngine.pause=!0},update:function(){this.sHealth.innerHTML=this.player.health,this.sMaxHealth.innerHTML="/"+this.player.maxHealth,this.sTraps.innerHTML=this.player.traps,this.sBullets.innerHTML=this.player.bullets,this.sBatteries.innerHTML=this.server.energy,this.sCarry.innerHTML=null==this.player.carrying?"&#x2716;":"&#10004;",canvas.style.top=this.top+"px",canvas.style.left=this.left+"px"},gameOver:function(){document.getElementById("gameOver").style.display="block"},restart:function(){document.getElementById("start").style.display="none",GameEngine.pause=!1,GameEngine.loop()}};document.getElementById("start").onclick=GUI.restart;var ImageLoader={loc:"atlass.png",atlass:null,data:{Ground:{x:0,y:0,width:5,height:5,scale:4},Water:{x:15,y:10,width:5,height:5,scale:4},Bridge:{x:20,y:10,width:5,height:5,scale:4},Grass:{x:10,y:15,width:5,height:5,scale:4},YellowFlower:{x:15,y:15,width:5,height:5,scale:4},RedFlower:{x:20,y:15,width:5,height:5,scale:4},Wall:{x:5,y:0,width:5,height:5,scale:4},WallLeft:{x:0,y:20,width:5,height:5,scale:4},WallTop:{x:5,y:20,width:5,height:5,scale:4},WallRight:{x:10,y:20,width:5,height:5,scale:4},WallBottom:{x:15,y:20,width:5,height:5,scale:4},WallLeftTop:{x:0,y:25,width:5,height:5,scale:4},WallRightTop:{x:5,y:25,width:5,height:5,scale:4},WallRightBottom:{x:10,y:25,width:5,height:5,scale:4},WallLeftBottom:{x:15,y:25,width:5,height:5,scale:4},ShootWall:{x:0,y:5,width:5,height:5,scale:4},Trap:{x:5,y:5,width:5,height:5,scale:4},Player:{x:10,y:0,width:10,height:10,scale:2},Item:{x:20,y:0,width:5,height:5,scale:4},Health:{x:20,y:5,width:5,height:5,scale:4},Batteries:{x:10,y:10,width:5,height:5,scale:4},Server:{x:0,y:10,width:10,height:10,scale:5}},init:function(t){this.atlass=new Image,this.atlass.onload=t,this.atlass.src=this.loc},drawIMG:function(t,e,i){ctx.msImageSmoothingEnabled=!1,ctx.imageSmoothingEnabled=!1;var s=this.data[t];ctx.drawImage(this.atlass,s.x,s.y,s.width,s.height,e,i,s.width*s.scale,s.height*s.scale)}},GameEngine={entities:[],pause:!1,loop:function(){Map.draw();for(var t=0;t<this.entities.length;t++){var e=this.entities[t];e.alive||this.entities.splice(t,1);var i=this.getEntity("Player");("Player"==e.name||"Server"==e.name||Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2))<=450)&&e.update(),e.draw()}mouseLeft=!1,mouseRight=!1,GUI.update(),this.pause||window.requestAnimationFrame(this.loop.bind(this))},init:function(){var t=new Server(width/2,height/2),e=new Player(width/2,height/2),i=new Item(525,605,"Health"),s=new Item(285,505,"Ammo"),h=new Item(85,65,"Health"),a=new Item(850,410,"Trap"),l=new Item(635,30,"Ammo"),o=new Item(1030,50,"Health"),n=new Item(330,1060,"Box"),r=new Item(1150,1150,"Box"),y=new Enemy(320,490,"Centry"),p=new Enemy(280,130,"Trooper"),c=new Enemy(290,1090,"Trooper"),d=new Enemy(580,1120,"Trooper"),m=new Enemy(1050,1050,"Tank"),u=new Enemy(960,960,"Centry"),g=new Enemy(820,240,"Trooper"),w=new Enemy(90,160,"Tank"),x=new Enemy(1090,130,"Centry"),f=new Enemy(870,70,"Tank"),v=new Enemy(350,1080,"Trooper"),M=new Enemy(610,730,"Trooper"),T=new Enemy(60,640,"Trooper");this.entities.push(t,i,s,h,a,l,o,n,r,e,y,p,c,d,m,u,g,w,x,f,v,M,T),GUI.init(),ImageLoader.init(this.loop.bind(this))},getEntity:function(t){for(var e=0;e<this.entities.length;e++){var i=this.entities[e];if(i.name==t)return i}}};window.onload=function(){canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),width=canvas.width,height=canvas.height,keys=[],mouseLeft=!1,mouseRight=!1,mouseX=0,mouseY=0,GameEngine.init()},window.onkeydown=function(t){var e=t.keyCode||t.which;keys[e]=!0,t.preventDefault()},window.onkeyup=function(t){var e=t.keyCode||t.which;keys[e]=!1,t.preventDefault()},canvas.oncontextmenu=function(t){t.preventDefault()},canvas.onmousedown=function(t){var e=t.button;0==e&&(mouseLeft=!0),2==e&&(mouseRight=!0),mouseX=t.offsetX,mouseY=t.offsetY,t.preventDefault()};var Map={tilemap:[[2,2,2,2,2,2,2,2,2,2,8,8,8,8,8,2,2,2,8,8,8,8,8,8,8,8,8,8,8,2,2,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2,2,2],[2,2,2,2,2,2,2,2,8,12,1,0,4,0,0,11,2,7,1,0,0,0,4,0,0,0,0,0,0,5,7,4,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,15,15,13,11,8,2],[2,2,2,8,8,2,2,7,0,0,0,0,0,0,4,0,11,12,0,0,0,0,0,0,0,0,0,4,0,5,7,0,0,0,0,4,0,1,1,0,0,4,13,0,0,0,0,4,0,0,0,0,0,0,15,15,15,4,0,5],[2,2,12,4,0,5,2,7,0,4,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,15,15,15,15,15,5],[2,7,0,0,0,5,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,6,10,0,0,0,0,0,15,15,15,15,15,5],[2,12,13,4,0,5,2,2,10,1,0,0,0,0,0,0,0,0,0,13,0,0,9,6,10,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,9,6,6,6,2,2,7,1,0,0,0,0,15,15,15,15,15,5],[7,0,0,0,0,11,8,2,7,1,0,0,0,4,0,0,0,0,0,0,0,0,11,8,2,10,0,0,0,0,0,0,0,13,0,0,0,0,0,4,0,0,11,2,2,8,8,8,12,1,0,0,0,0,0,15,15,15,15,5],[7,0,0,0,0,0,0,11,12,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,5,7,1,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,11,12,14,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,4,0,0,5,7,1,0,0,0,4,0,0,0,9,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,4,0,13,5],[7,4,0,14,0,0,0,0,0,0,0,0,0,0,0,0,9,10,0,0,0,0,0,0,5,7,0,4,0,0,0,0,0,0,5,7,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,1,1,0,0,0,0,4,0,0,0,0,5,7,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,9,2,7,1,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,4,0,0,0,0,0,0,0,9,6,2,2,6,10,0,0,0,0,0,0,0,0,0,0,0,0,9,2,2,12,0,0,0,0,0,4,0,0,0,0,0,0,0,9,10,0,0,0,0,0,1,1,1,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,11,8,8,8,2,7,0,0,14,0,0,0,0,0,0,4,0,0,5,2,12,0,0,0,0,0,0,0,0,0,0,0,0,0,9,2,2,10,0,0,0,0,1,1,1,5],[7,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,9,2,12,0,0,0,0,4,0,0,0,0,13,0,0,0,9,2,2,2,7,0,0,4,0,0,0,0,5],[2,6,6,6,10,1,0,0,0,4,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0,4,0,5,2,2,8,12,0,0,0,0,0,0,0,5],[2,2,2,2,12,1,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,5,2,7,0,0,0,0,0,0,0,0,0,5],[2,8,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,6,10,0,0,0,4,0,0,0,0,0,0,0,4,0,0,0,1,0,0,0,0,0,0,5,2,7,0,13,0,0,0,0,14,0,4,5],[7,0,0,14,0,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,5,2,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,5,2,7,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,8,2,10,0,0,0,0,0,13,4,0,0,0,0,1,1,1,1,1,0,0,4,0,14,5,2,2,10,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,0,0,0,0,1,1,15,15,15,16,16,16,15,15,15,1,1,0,11,2,6,6,10,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,5,2,2,7,1,0,0,0,0,9,6,6,2],[7,0,0,4,0,0,0,0,0,0,15,15,15,15,15,16,16,16,15,15,15,15,15,1,0,11,8,8,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,2,7,1,0,0,0,0,11,2,2,2],[7,13,0,0,0,0,0,0,15,15,15,15,15,15,15,16,16,16,15,15,15,15,15,15,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,5,2,2,7,0,0,0,0,0,0,11,8,2],[7,0,0,0,0,0,0,15,15,15,15,15,15,15,15,16,16,16,15,15,15,15,15,15,15,0,0,0,0,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,4,5,2,2,12,0,0,0,4,0,0,0,1,5],[7,0,0,0,9,10,0,15,15,15,15,15,15,15,15,0,0,0,15,15,15,15,15,15,15,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,7,0,0,0,0,0,0,14,0,0,5],[7,0,0,0,5,7,15,15,15,15,15,15,15,15,1,0,0,0,15,15,15,15,15,15,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0,9,2,2,7,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,5,7,15,15,15,15,15,15,15,1,0,0,0,1,15,15,15,15,15,15,15,0,0,9,10,0,0,0,9,6,10,0,0,0,0,0,0,0,4,0,9,6,2,2,2,7,0,0,0,0,1,1,0,4,0,5],[7,1,1,1,5,7,15,15,15,15,15,15,15,1,0,13,1,15,15,15,15,15,15,15,15,0,9,2,12,0,0,0,11,2,7,1,1,1,4,0,0,0,0,0,11,8,2,2,2,12,0,0,0,4,1,1,0,0,0,5],[7,1,1,1,5,7,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,9,2,12,0,0,0,0,0,5,7,1,1,0,0,0,0,0,0,0,0,0,11,8,12,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,5,7,0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,9,2,12,13,0,0,0,4,0,5,7,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,11,2,10,0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,14,5,7,0,0,0,0,0,0,9,2,12,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,11,2,10,0,15,15,15,15,15,15,15,15,15,15,15,15,15,0,9,2,7,4,0,0,0,0,9,2,12,0,0,0,0,4,0,0,0,0,4,0,0,1,1,4,0,0,0,0,9,6,10,13,0,4,5],[7,0,0,0,4,13,11,2,10,0,0,15,15,15,15,15,15,15,0,0,0,0,1,11,2,2,10,0,0,0,9,2,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,2,2,6,6,6,2],[7,0,0,0,0,0,0,5,2,10,0,0,0,0,0,0,0,0,0,0,0,0,0,1,11,8,2,6,6,6,2,12,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,11,2,2,2,2,2],[7,14,4,0,0,0,0,11,8,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,11,8,8,8,12,0,0,0,0,0,13,0,9,10,0,0,0,0,13,0,0,0,0,0,4,0,0,0,0,11,8,8,8,2],[7,0,0,0,0,0,0,0,0,0,0,0,4,0,0,14,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,9,6,2,2,10,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,5],[2,6,6,10,0,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,4,9,2,2,2,2,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,5],[2,2,2,2,10,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,9,6,2,2,2,8,12,0,4,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,5],[2,8,8,8,2,10,0,0,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,9,10,0,0,4,0,0,0,0,9,2,2,2,2,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,11,12,0,0,0,0,0,1,1,1,1,1,0,0,0,4,0,0,0,5,2,10,0,0,0,0,4,9,2,2,2,8,12,4,0,0,4,0,0,0,14,4,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,4,0,0,0,0,9,6,2,2,12,0,0,0,0,9,2,2,2,12,13,0,0,0,0,0,0,0,0,0,0,1,1,1,15,15,15,15,15,15,15,16,16,16,5],[7,0,0,0,0,0,14,0,0,0,0,0,1,1,1,0,0,0,0,0,9,2,2,8,12,0,0,0,4,0,5,2,2,12,4,0,0,0,0,0,0,0,0,0,1,1,15,15,15,15,15,15,15,15,15,15,16,16,16,5],[7,0,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,5,2,12,0,0,0,0,0,0,0,11,2,7,0,0,0,0,0,0,0,4,0,1,1,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,12,0,0,0,0,4,0,0,0,0,11,12,0,0,0,0,0,0,0,0,1,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,5],[7,0,13,0,0,4,0,0,9,6,6,6,6,6,10,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,4,15,15,15,15,15,15,15,15,0,0,0,4,0,0,15,16,16,16,5],[7,4,0,0,0,0,9,6,2,2,2,2,2,2,2,6,10,0,0,4,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,15,15,0,9,6,10,9,6,10,0,0,0,0,5],[7,0,0,0,0,0,5,2,2,8,8,8,8,2,2,2,2,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,14,0,0,0,0,15,15,15,15,15,15,15,0,0,11,2,2,2,2,12,0,0,0,0,5],[7,0,0,0,0,9,2,8,12,0,0,0,0,11,8,2,2,2,10,0,0,0,13,4,0,0,1,1,0,4,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,0,4,0,0,0,11,12,0,0,0,0,4,0,5],[7,0,0,4,1,5,7,0,0,0,0,0,0,1,1,11,2,2,2,10,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,15,15,15,15,15,15,15,0,0,13,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,1,11,12,0,13,0,4,0,0,0,0,1,11,2,2,7,0,0,0,0,0,0,9,6,10,0,0,0,4,0,0,0,1,1,1,15,15,15,15,15,15,15,9,10,0,0,4,0,0,0,0,0,0,0,0,5],[7,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,1,11,2,2,10,0,0,0,0,0,11,2,2,10,0,0,0,0,0,0,1,1,1,15,15,15,15,15,15,15,5,7,0,0,0,0,0,0,0,0,0,1,1,5],[7,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,1,5,2,7,0,0,0,0,0,0,11,2,2,10,0,0,0,0,0,0,0,0,15,15,15,15,15,15,15,5,7,0,0,4,0,0,4,0,0,0,1,9,2],[7,4,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,11,2,7,0,4,0,0,0,0,0,5,2,7,0,0,0,4,0,0,0,0,15,15,15,15,15,15,15,11,12,0,0,0,0,0,0,0,0,0,0,11,2],[7,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,10,0,0,0,4,0,0,5,2,7,0,0,0,0,0,0,0,0,15,15,15,15,15,15,15,1,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,7,0,0,0,0,0,0,11,8,12,0,0,4,0,0,0,0,4,16,16,16,16,16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0,5],[7,1,0,0,0,0,0,0,4,0,0,0,0,0,0,4,0,0,0,11,2,2,10,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,16,16,16,16,16,16,16,0,0,0,0,0,4,0,0,0,4,0,0,4,5],[2,10,1,0,4,0,0,0,13,0,9,10,0,0,0,0,0,13,0,0,5,2,7,0,0,0,0,0,0,0,0,13,0,0,0,0,4,0,0,16,16,16,16,16,16,16,0,4,0,14,0,0,9,10,0,0,0,0,13,5,null,null,null,null,6],[2,2,10,1,0,0,0,0,0,9,2,7,0,0,0,0,0,0,4,0,5,2,7,0,0,0,4,0,0,0,4,0,0,0,0,0,0,9,10,15,15,15,15,15,15,15,1,0,0,0,0,0,5,7,0,0,0,0,0,5],[2,2,2,10,0,0,4,0,0,5,2,7,0,0,0,0,4,0,1,1,5,2,2,6,10,0,0,0,0,0,0,0,0,0,0,1,9,2,7,15,15,15,15,15,15,15,1,0,0,0,0,9,2,7,0,0,0,0,9,2],[2,2,2,2,6,6,6,6,6,2,2,2,6,6,6,6,6,6,6,6,2,2,2,2,2,6,6,6,6,6,6,6,6,6,6,6,2,2,2,6,6,6,6,6,6,6,6,6,6,6,6,2,2,2,6,6,6,6,2,2]],tileinfo:{0:{walk:!0,transp:!0,color:"Ground"},1:{shoot:!0,transp:!0,color:"ShootWall"},2:{color:"Wall"},3:{walk:!0,shoot:!0,transp:!0,trap:!0,color:"Trap"},4:{walk:!0,transp:!0,color:"Grass"},5:{color:"WallLeft"},6:{color:"WallTop"},7:{color:"WallRight"},8:{color:"WallBottom"},9:{color:"WallLeftTop"},10:{color:"WallRightTop"},11:{color:"WallLeftBottom"},12:{color:"WallRightBottom"},13:{walk:!0,transp:!0,color:"YellowFlower"},14:{walk:!0,transp:!0,color:"RedFlower"},15:{transp:!0,color:"Water"},16:{walk:!0,transp:!0,color:"Bridge"}},tilesize:20,draw:function(){ctx.fillStyle="#2dcc5f",ctx.fillRect(-GUI.left-this.tilesize,-GUI.top-this.tilesize,640,640);for(var t=0;t<this.tilemap.length;t++){var e=t*this.tilesize;if(!(e<-GUI.top-this.tilesize||e>600-GUI.top))for(var i=0;i<this.tilemap[0].length;i++)if(0!=this.tilemap[t][i]){var s=i*this.tilesize;s<-GUI.left-this.tilesize||s>600-GUI.left||ImageLoader.drawIMG(this.tileinfo[this.tilemap[t][i]].color,s,e)}}},getTileNumber:function(t,e){return t<0||t>=width||e<0||e>=height?1:(xTile=Math.floor(t/this.tilesize),yTile=Math.floor(e/this.tilesize),this.tilemap[yTile][xTile])},isWalkable:function(t,e,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++){var h=this.getTileNumber(t[s],e);if(!this.tileinfo[h].walk)return!1}return!0}if(Array.isArray(e)){for(s=0;s<e.length;s++){h=this.getTileNumber(t,e[s]);if(!this.tileinfo[h].walk)return!1}return!0}h=this.getTileNumber(t,e);return this.tileinfo[h].walk},isShootable:function(t,e){var i=this.getTileNumber(t,e);return this.tileinfo[i].shoot},isTransparent:function(t,e){if(t<=0||t>=width||e<=0||e>=height)return!1;var i=this.getTileNumber(t,e);return this.tileinfo[i].transp},isTrap:function(t,e){var i=this.getTileNumber(t,e);return this.tileinfo[i].trap},changeTile:function(t,e,i){xTile=Math.floor(t/this.tilesize),yTile=Math.floor(e/this.tilesize),this.tilemap[yTile][xTile]=i}};function Entity(t,e,i,s,h){this.name="Entity",this.x=t,this.y=e,this.width=i,this.height=s,this.color=h,this.alive=!0,this.bulletRadius=12}function Server(t,e){this.size=50,this.color="Server",this.energy=0,Entity.call(this,t,e,this.size,this.size,this.color),this.name="Server"}function Enemy(t,e,i){this.types={Trooper:{walk:!0,walkToPlayer:!0,color:"Player",speed:.6,health:8,shootDistance:300,ticksToShoot:50,ticksBetweenShots:50,moveDistance:50,bullet:"Normal"},Centry:{walk:!1,color:"Player",health:20,shootDistance:500,ticksToShoot:50,ticksBetweenShots:100,bullet:"Sniper"},Tank:{walk:!0,walkToPlayer:!0,color:"Player",speed:.3,health:60,shootDistance:200,ticksToShoot:1,ticksBetweenShots:50,moveDistance:60,bullet:"Heavy"}},this.type=i;var s=this.types[i];Entity.call(this,t,e,20,20,s.color),this.name="Enemy",this.shootTimer=0,this.ticksToShoot=s.ticksToShoot,this.betweenShotTimer=0,this.ticksBetweenShots=s.ticksBetweenShots,this.maxVisibleDistance=400,this.shootDistance=s.shootDistance,this.maxHealth=s.health,this.health=this.maxHealth,this.speed=s.speed,this.xD=0,this.yD=0,this.moveTimer=0,this.ticksToMove=0}function Player(t,e){Entity.call(this,t,e,20,20,"Player"),this.name="Player",this.maxHealth=10,this.health=this.maxHealth,this.traps=1,this.speed=1.2,this.bullets=30,this.carrying=null,this.reloadTimer=0,this.ticksToReload=25}Entity.prototype.update=function(){},Entity.prototype.draw=function(){ImageLoader.drawIMG(this.color,this.x-this.width/2,this.y-this.height/2),void 0!==this.health&&(ctx.fillStyle="red",ctx.fillRect(this.x-this.width/2,this.y-this.height/2-10,30,4),ctx.fillStyle="green",ctx.fillRect(this.x-this.width/2,this.y-this.height/2-10,this.health/this.maxHealth*30,4))},Entity.prototype.isColliding=function(t){return t.x-t.width/2<this.x+this.width/2&&t.x+t.width/2>this.x-this.width/2&&t.y-t.height/2<this.y+this.height/2&&t.y+t.height/2>this.y-this.height/2},Entity.prototype.getDistance=function(t){return Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2))},Entity.prototype.bulletCollision=function(){for(var t=!1,e=0;e<GameEngine.entities.length;e++){var i=GameEngine.entities[e];if("Bullet"===i.name&&(i.target===this.name&&this.getDistance(i)<=this.bulletRadius)){if(i.alive=!1,this.health-=i.damage,this.health<=0){this.health=0,this.alive=!1;var s=new Item(this.x,this.y,"Batteries");GameEngine.entities.push(s),"Player"===this.name&&(GameEngine.pause=!0,GUI.gameOver())}t=!0}}return t},Server.prototype=Object.create(Entity.prototype),Server.prototype.update=function(){var t=GameEngine.getEntity("Player");this.isColliding(t)&&("Batteries"==(null==t.carrying?"":t.carrying.type)&&this.energy++,13==this.energy&&alert("SERVER REBOOTING\nYou have brought all batteries back to the helipad."),t.carrying=null)},Enemy.prototype=Object.create(Entity.prototype),Enemy.prototype.update=function(){this.bulletCollision();var t=GameEngine.getEntity("Player");if(this.isPlayerVisible()){this.shootTimer++,this.betweenShotTimer++;var e=Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2));if(e<=this.maxVisibleDistance&&this.types[this.type].walkToPlayer&&this.moveToPlayer(),this.shootTimer>=this.ticksToShoot&&this.betweenShotTimer%this.ticksBetweenShots==0&&e<=this.shootDistance){var i=0,s=t.x-this.x,h=this.y-t.y;0<=s&&0<=h?i=Math.atan(Math.abs(h/s)):s<=0&&0<=h?i=Math.PI/2+Math.atan(Math.abs(s/h)):s<=0&&h<=0?i=Math.PI+Math.atan(Math.abs(h/s)):0<=s&&h<=0&&(i=1.5*Math.PI+Math.atan(Math.abs(s/h)));var a=new Bullet(this.x,this.y,i,this.types[this.type].bullet,"Player");GameEngine.entities.push(a)}}else this.shootTimer=0,this.betweenShotTimer=0;if(this.types[this.type].walk){this.moveTimer++,this.moveTimer>=this.ticksToMove&&(this.moveTimer=0,this.changeMove(),this.ticksToMove=Math.round(700*Math.random()+500)),Map.isTrap(this.x,this.y)&&(this.alive=!1,Map.changeTile(this.x,this.y,0));var l=[this.x-this.width/2,this.x+this.width/2],o=[this.y-this.height/2,this.y+this.height/2];0<this.speed*this.yD&&(Map.isWalkable(l,this.y+this.height/2+this.speed,this.name)||(this.y+=Map.tilesize-this.y%Map.tilesize-this.height/2-1,this.changeMove())),this.speed*this.yD<0&&(Map.isWalkable(l,this.y-this.height/2-this.speed,this.name)||(this.y-=this.y%Map.tilesize-this.height/2,this.changeMove())),this.speed*this.xD<0&&(Map.isWalkable(this.x-this.width/2-this.speed,o,this.name)||(this.x-=this.x%Map.tilesize-this.width/2,this.changeMove())),0<this.speed*this.xD&&(Map.isWalkable(this.x+this.width/2+this.speed,o,this.name)||(this.x+=Map.tilesize-this.x%Map.tilesize-this.width/2-1,this.changeMove())),this.getDistance(t)>=this.types[this.type].moveDistance&&(this.x+=this.speed*this.xD,this.y+=this.speed*this.yD)}},Enemy.prototype.isPlayerVisible=function(){var t=GameEngine.getEntity("Player"),s=t.x,h=t.y;if(this.x==s)return!0;var e=function(t,e,i){return i+(h-i)/(s-e)*(t-e)},i=Math.sqrt(Math.pow(s-this.x,2)+Math.pow(h-this.y,2))/Map.tilesize,a=s-this.x,l=a/i;if(0<=a)for(var o=this.x;o<=s;o+=l){var n=e(o,this.x,this.y);if(!Map.isTransparent(o,n))return!1}else for(o=this.x;s<=o;o+=l){n=e(o,this.x,this.y);if(!Map.isTransparent(o,n))return!1}return!0},Enemy.prototype.changeMove=function(){for(var t=this.xD,e=this.yD;this.xD==t&&this.yD==e;)t=2*Math.random()-1,e=2*Math.random()-1;this.xD=t,this.yD=e},Enemy.prototype.moveToPlayer=function(){var t=GameEngine.getEntity("Player"),e=t.x,i=t.y,s={d1:{xd:0,yd:-1},d2:{xd:1,yd:-1},d3:{xd:1,yd:0},d4:{xd:1,yd:1},d5:{xd:0,yd:1},d6:{xd:-1,yd:1},d7:{xd:-1,yd:0},d8:{xd:-1,yd:-1}},h=width;for(var a in s){var l=s[a].xd,o=s[a].yd,n=Math.sqrt(Math.pow(this.x-(e-l),2)+Math.pow(this.y-(i-o),2));n<h&&(h=n,this.xD=l/1,this.yD=o/1)}this.moveTimer=0},Player.prototype=Object.create(Entity.prototype),Player.prototype.update=function(){this.bulletCollision()&&(this.carrying=null);var t=[this.x-this.width/2,this.x+this.width/2],e=[this.y-this.height/2,this.y+this.height/2];if((keys[40]||keys[83])&&(Map.isWalkable(t,this.y+this.height/2+this.speed,this.name)?(this.y+=this.speed,GUI.top-=this.speed):this.y+=Map.tilesize-this.y%Map.tilesize-this.height/2-1),(keys[38]||keys[90])&&(Map.isWalkable(t,this.y-this.height/2-this.speed,this.name)?(this.y-=this.speed,GUI.top+=this.speed):this.y-=this.y%Map.tilesize-this.height/2),(keys[37]||keys[81])&&(Map.isWalkable(this.x-this.width/2-this.speed,e,this.name)?(this.x-=this.speed,GUI.left+=this.speed):this.x-=this.x%Map.tilesize-this.width/2),(keys[39]||keys[68])&&(Map.isWalkable(this.x+this.width/2+this.speed,e,this.name)?(this.x+=this.speed,GUI.left-=this.speed):this.x+=Map.tilesize-this.x%Map.tilesize-this.width/2-1),mouseLeft){var i=0,s=mouseX-this.x,h=this.y-mouseY;if(0<=s&&0<=h?i=Math.atan(Math.abs(h/s)):s<=0&&0<=h?i=Math.PI/2+Math.atan(Math.abs(s/h)):s<=0&&h<=0?i=Math.PI+Math.atan(Math.abs(h/s)):0<=s&&h<=0&&(i=1.5*Math.PI+Math.atan(Math.abs(s/h))),this.reloadTimer>=this.ticksToReload){if(0<this.bullets){var a=new Bullet(this.x,this.y,i,"Military","Enemy");GameEngine.entities.push(a),this.bullets--}else console.log("Out of bullets!");this.reloadTimer=0}}if(mouseRight)if(0<this.traps){var l=this.x+this.width/2,o=this.y+this.height/2,n=Math.sqrt(Math.pow(l-mouseX,2)+Math.pow(o-mouseY,2));n>=Map.tilesize&&n<4*Map.tilesize&&(Map.changeTile(mouseX,mouseY,3),this.traps--)}else console.log("Out of traps!");this.reloadTimer++,this.itemCollision()},Player.prototype.itemCollision=function(){for(var t=0;t<GameEngine.entities.length;t++){var e=GameEngine.entities[t];"Item"===e.name&&(this.isColliding(e)&&(this.health<this.maxHealth&&(this.health+=e.plusHealth),this.health>this.maxHealth&&(this.health=this.maxHealth),this.bullets+=e.plusBullets,this.traps+=e.plusTraps,e.carryable&&(this.carrying=e),e.alive=!1))}};