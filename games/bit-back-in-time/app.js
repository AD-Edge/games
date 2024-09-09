'use strict';class Player$$module$src$modules$player{constructor(b,a){this.posX=b;this.posY=a;this.dirX=-1;this.planeX=this.dirY=0;this.planeY=.66;this.rot=0;this.turn=this.right=this.left=this.backward=this.forward=!1;this.collision=15}}var module$src$modules$player={};module$src$modules$player.Player=Player$$module$src$modules$player;class Map$$module$src$modules$map{constructor(){this.res=3;this.path=[]}getMap(b,a){let c=this.createMaze(b,a);this.path=this.aStar(c,{x:1,y:1},{x:b-3,y:a-3});b=[];for(let a of c)b.push([...a]);for(let a of this.path)b[a.x][a.y]="#";console.log("So..you like it the easy way, don't you?");for(let a of b)console.log(a.toString());return c}createMaze(b,a){let c=[];for(let d=0;d<b;d++){c[d]=[];for(let e=0;e<a;e++)c[d][e]=0,1==d|d==b-1|1==e|e==a-1&&(c[d][e]=1)}c[1][2]=4;c[a-1][b-2]=3;this.createVerticalWall(c,
1,1,b-1,a-1);for(let a of c)a.shift();c.shift();return c}createVerticalWall(b,a,c,d,e){let f=(a+d)/2;0==f%2&&(f+=1);let g=c-1+2*Math.ceil((e-c)/2*Math.random());for(let a=c+1;a<e;a++)b[f][a]=a==g?0:2;f-a>this.res&&this.createHorizontalWall(b,a,c,f,e);d-f>this.res&&this.createHorizontalWall(b,f,c,d,e)}createHorizontalWall(b,a,c,d,e){let f=(c+e)/2;0==f%2&&--f;let g=a-1+2*Math.ceil((d-a)/2*Math.random());for(let c=a+1;c<d;c++)b[c][f]=c==g?0:2;f-c>this.res&&this.createVerticalWall(b,a,c,d,f);e-f>this.res&&
this.createVerticalWall(b,a,f,d,e)}aStar(b,a,c){Array.prototype.remove=function(a){for(let b=this.length-1;0<=b;b--)this[b]===a&&this.splice(b,1)};var d=[],e=[];let f=[];for(let d=0;d<b.length;d++)for(let e=0;e<b[0].length;e++)f.push({x:d,y:e,wall:0!=b[d][e]?!0:!1,neighbours:[],f:0,g:0,h:Math.sqrt(Math.pow(c.x-d,2)+Math.pow(c.y-e,2)),start:d==a.x&&e==a.y?!0:!1,end:d==c.x&&e==c.y?!0:!1});for(let a of f){let c=a.x-1,d=a.x+1,e=a.y-1,g=a.y+1;0<=c&&a.neighbours.push(f.find(b=>b.x==c&&b.y==a.y));d<b.length-
1&&a.neighbours.push(f.find(b=>b.x==d&&b.y==a.y));0<=e&&a.neighbours.push(f.find(b=>b.y==e&&b.x==a.x));g<b[0].length-1&&a.neighbours.push(f.find(b=>b.y==g&&b.x==a.x))}for(d.push(f.find(a=>1==a.start));0<d.length;){b=0;for(a=0;a<d.length;a++)d[a].f<d[b].f&&(b=a);b=d[b];if(1==b.end){d=[];e=b;for(d.push(e);e.previous;)d.push(e.previous),e=e.previous;return d}d.remove(b);e.push(b);for(let f of b.neighbours)e.find(a=>a===f)||0!=f.wall||(a=b.g+1,c=!1,d.find(a=>a===f)?a<f.g&&(f.g=a,c=!0):(f.g=a,c=!0,d.push(f)),
1==c&&(f.f=f.g+f.h,f.previous=b))}}}var module$src$modules$map={};module$src$modules$map.Map=Map$$module$src$modules$map;class Engine$$module$src$modules$engine{constructor(){let b=new Map$$module$src$modules$map;this.updateRotation=this.updateRotation.bind(this);this.threads=this.res=2;this.workers=[];this.player=new Player$$module$src$modules$player(1.9,1.5);this.map=b.getMap(16,16);this.path=b.path;this.textures=[];this.texSize=64;this.textureAtlas=new Image;this.textureAtlas.src="textures.webp";this.canv=document.createElement("canvas");this.canv.width=window.innerWidth/this.res;this.canv.height=window.innerHeight/
this.res;this.canv.style.imageRendering="crisp-edges";this.canv.style.width="100vw";this.ctx=this.canv.getContext("2d",{alpha:!1});this.ctx.imageSmoothingEnabled=!1;document.body.appendChild(this.canv);this.backBufferCanv=document.createElement("canvas");this.backBufferCanv.width=this.canv.width;this.backBufferCanv.height=this.canv.height;this.backBufferCanv.style.imageRendering="pixelated";this.backBufferCtx=this.backBufferCanv.getContext("2d",{alpha:!1});this.backBufferCtx.imageSmoothingEnabled=
!1;this.canv.addEventListener("touchend",a=>{this.touched=!1;this.touchDY=this.touchDX=this.oldTouchDY=this.oldTouchDX=0;this.player.rot=0;this.player.forward=!1;this.player.backward=!1});this.canv.addEventListener("touchmove",a=>{this.touched&&(this.touchDX=-.1*(this.oldTouchDX-a.touches[0].clientX),this.touchDY=this.oldTouchDY-a.touches[0].clientY,0!=this.touchDY&&(this.player.forward=!0))},{passive:!1});this.canv.addEventListener("touchstart",a=>{this.touched=!0;this.oldTouchDX=a.touches[0].clientX;
this.oldTouchDY=a.touches[0].clientY},{passive:!1});this.canv.addEventListener("click",()=>{this.canv.requestPointerLock()});this.mouseLocked=!1;this.oldRot=this.oldTime=0;this.touched=!1;this.movSpeed=this.touchDY=this.touchDX=this.oldTouchDY=this.oldTouchDX=0;this.superSpeed=1;this.playing=!1;document.addEventListener("pointerlockchange",()=>{document.pointerLockElement==this.canv?document.addEventListener("mousemove",this.updateRotation,!1):document.removeEventListener("mousemove",this.updateRotation,
!1)},!1);document.addEventListener("keyup",a=>{switch(a.keyCode){case 87:this.player.forward=!1;break;case 83:this.player.backward=!1;break;case 65:this.player.left=!1;break;case 68:this.player.right=!1;break;case 16:this.superSpeed=1}},!1);document.addEventListener("keydown",a=>{switch(a.keyCode){case 87:this.player.forward=!0;break;case 83:this.player.backward=!0;break;case 65:this.player.left=!0;break;case 68:this.player.right=!0;break;case 16:this.superSpeed=2.5}},!1);window.addEventListener("resize",
()=>{this.ctx.imageSmoothingEnabled=!1})}backAnimation(){this.path.reverse();let b=1,a=0,c=setInterval(()=>{if(b<this.path.length-2){let c=Math.pow(1-a,2)*this.path[b].y+2*(1-a)*a*this.path[b+1].y+Math.pow(a,2)*this.path[b+2].y;this.player.posX=Math.pow(1-a,2)*this.path[b].x+2*(1-a)*a*this.path[b+1].x+Math.pow(a,2)*this.path[b+2].x+.5;this.player.posY=c+.5;a+=.04;1<=a&&(a=0,b+=2)}else clearInterval(c)},33)}async init(){return new Promise(b=>{this.textureAtlas.addEventListener("load",async a=>{a=document.createElement("canvas");
a.width=this.texSize;a.height=this.texSize;a.style.imageRendering="pixelated";var c=a.getContext("2d");for(var d=0;6>d;d++){c.drawImage(this.textureAtlas,d%3*this.texSize,Math.floor(d/3)*this.texSize,this.texSize,this.texSize,0,0,a.width,a.height);this.textures[d]=c.getImageData(0,0,a.width,a.height);if(4!=d)c.fillStyle="rgba(0,0,0,0.35)",c.fillRect(0,0,a.width,a.height);else{let b=a.toDataURL();document.querySelector("#imgExit").src=b}this.textures[d+6]=c.getImageData(0,0,a.width,a.height)}for(let b=
0;b<this.threads;b++)a=new Worker("./raycaster.js"),a.onmessage=a=>{a=new ImageData(new Uint8ClampedArray(a.data),this.canv.width,this.canv.height);this.workers[b].ctx.putImageData(a,0,0);this.backBufferCtx.drawImage(this.workers[b].canv,0,0);this.workers[b].done=!0},a.postMessage({width:this.canv.width,height:this.canv.height,textures:this.textures,map:this.map,threads:this.threads}),c=document.createElement("canvas"),c.width=this.canv.width,c.height=this.canv.height,c.style.imageRendering="pixelated",
d=c.getContext("2d",{alpha:!0}),d.imageSmoothingEnabled=!1,this.workers[b]={worker:a,canv:c,ctx:d,done:!0};b()})})}updateRotation(b){this.player.rot=b.movementX}update(b){if(this.playing){var a=(b-this.oldTime)/1E3;this.movSpeed=2*a*this.superSpeed;if(1==this.touched||this.player.rot!=this.oldRot){if(this.touched){var c=this.touchDX;this.movSpeed=this.touchDY/1E3}else c=(this.oldRot+this.player.rot)/2;this.oldRot=this.player.rot;a=c*a*-.1;c=this.player.dirX;this.player.dirX=this.player.dirX*Math.cos(a)-
this.player.dirY*Math.sin(a);this.player.dirY=c*Math.sin(a)+this.player.dirY*Math.cos(a);c=this.player.planeX;this.player.planeX=this.player.planeX*Math.cos(a)-this.player.planeY*Math.sin(a);this.player.planeY=c*Math.sin(a)+this.player.planeY*Math.cos(a)}try{this.player.forward&&(0==this.map[Math.floor(this.player.posX+this.player.dirX*this.movSpeed*this.player.collision)][Math.floor(this.player.posY)]&&(this.player.posX+=this.player.dirX*this.movSpeed),0==this.map[Math.floor(this.player.posX)][Math.floor(this.player.posY+
this.player.dirY*this.movSpeed*this.player.collision)]&&(this.player.posY+=this.player.dirY*this.movSpeed));if(this.player.right){const a=(this.player.dirX*Math.cos(Math.PI/2)-this.player.dirY*Math.sin(Math.PI/2))*this.movSpeed;0==this.map[Math.floor(this.player.posX-a*this.player.collision)][Math.floor(this.player.posY)]&&(this.player.posX-=a);const b=(this.player.dirX*Math.sin(Math.PI/2)+this.player.dirY*Math.cos(Math.PI/2))*this.movSpeed;0==this.map[Math.floor(this.player.posX)][Math.floor(this.player.posY-
b*this.player.collision)]&&(this.player.posY-=b)}if(this.player.left){const a=(this.player.dirX*Math.cos(-Math.PI/2)-this.player.dirY*Math.sin(-Math.PI/2))*this.movSpeed;0==this.map[Math.floor(this.player.posX-a*this.player.collision)][Math.floor(this.player.posY)]&&(this.player.posX-=a);const b=(this.player.dirX*Math.sin(-Math.PI/2)+this.player.dirY*Math.cos(-Math.PI/2))*this.movSpeed;0==this.map[Math.floor(this.player.posX)][Math.floor(this.player.posY-b*this.player.collision)]&&(this.player.posY-=
b)}this.player.backward&&(0==this.map[Math.floor(this.player.posX-this.player.dirX*this.movSpeed*this.player.collision)][Math.floor(this.player.posY)]&&(this.player.posX-=this.player.dirX*this.movSpeed),0==this.map[Math.floor(this.player.posX)][Math.floor(this.player.posY-this.player.dirY*this.movSpeed*this.player.collision)]&&(this.player.posY-=this.player.dirY*this.movSpeed))}catch(d){}this.oldTime=b;1.49>this.player.posX&&1<this.player.posY&&2>this.player.posY&&(document.querySelector("#win").style.display=
"flex",document.exitPointerLock(),this.playing=!1)}}render(){if(this.workers.filter(b=>1==b.done).length==this.threads){this.ctx.drawImage(this.backBufferCanv,0,0);for(let b=0;b<this.workers.length;b++)this.workers[b].done=!1,this.workers[b].worker.postMessage({start:b,player:this.player})}}}var module$src$modules$engine={};module$src$modules$engine.Engine=Engine$$module$src$modules$engine;const game$$module$src$app=new Engine$$module$src$modules$engine,gameStep$$module$src$app=function(b){game$$module$src$app.update(b);game$$module$src$app.render();window.requestAnimationFrame(gameStep$$module$src$app)};game$$module$src$app.init().then(()=>{window.requestAnimationFrame(gameStep$$module$src$app)});const btnStart$$module$src$app=document.querySelector("#btnStart");
btnStart$$module$src$app.onclick=b=>{document.querySelector("#start").style.display="none";game$$module$src$app.playing=!0;game$$module$src$app.backAnimation();let a=60,c=setInterval(()=>{const b=document.querySelector("#timer-sec");0<a?(b.textContent=a.toString(),a--):(clearInterval(c),document.querySelector("#loose").style.display="flex",document.exitPointerLock(),game$$module$src$app.playing=!1)},1E3)};const btnRetry$$module$src$app=document.querySelector("#btnRetry");
btnRetry$$module$src$app.onclick=b=>{location.reload()};const btnReload$$module$src$app=document.querySelector("#btnReload");btnReload$$module$src$app.onclick=b=>{location.reload()};var module$src$app={};
