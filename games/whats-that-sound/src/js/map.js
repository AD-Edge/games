var FLOOR_TILE=1,SAFE_TILE=2,WALL_TILE=null,PLAYER_START=5,WIN_TILE=4,WARNING_TILE=6,DANGER_TILE=7,Map=function(a){this.level=a;this.mapAsset=createSprite("assets/img/sprites.png");this.data=level_1;this.height=this.data.length;this.width=this.data[0].length;this.playerPos=null;this.initialize()};Map.prototype.getTileFromCoordinates=function(a,b){return 0>a||0>b||a>this.width*TILE||b>this.height*TILE?WALL_TILE:this.data[Math.floor(b/TILE)][Math.floor(a/TILE)]};
Map.prototype.initialize=function(){for(var a=0;a<this.height;a++)for(var b=0;b<this.width;b++)this.data[a][b]==PLAYER_START&&null==this.playerPos&&(this.playerPos={x:b*TILE,y:a*TILE})};
