"use strict";function broadcast(t,s,e){t.socket.broadcast.to(t.socket.id).emit(s,e),t.socket.emit(s,e)}function listRooms(t){return games.filter(function(s){return s.status==t}).map(function(t){return t.toJSON()})}function findGameByDungeonId(t){for(var s=0;s<games.length;s++)for(var e=0;e<games[s].dungeons.length;e++)if(games[s].dungeons[e].id===t)return games[s]}function findGameById(t){return find(games,t)}function ServerController(t){this.socket=t,this.id=t.id,this.init()}function Game(t,s,e,i){this.socket=t,this.id=this.socket.id,this.name=s,this.dungeons=[],this.status=G_STATUS_SETUP,this.time=0,this.options=i||[SWL,STDY],this.configTemplate=e||new Config}function Dungeon(t,s,e){this.id=t,this.status=D_STATUS_SETUP,this.area=new Area,this.life=100,this.money=100,this.lastUpdateTime=0,this.name=e||t,this.player,this.config=new Config(s),this.createArea(this.config.areaColumns,this.config.areaRows),this.modifiers={timeLimitMalus:0}}function Area(t,s){this.reset(t,s)}function Config(t){this.fromJSON(t)}var controllers=[],games=[];ServerController.prototype={init:function(){var t=this;this.socket.on(GECD,function(s){var e=findGameById(t.id);if(e)console.warn("A game already exists for given id.");else{e=new Game(t.socket,s.name||t.id,new Config(s));var i=new Dungeon(t.id,e.configTemplate);e.addDungeon(i),games.push(e),t.socket.emit(GECDD,e.toJSON())}}),this.socket.on(GELD,function(){t.socket.emit(GELDED,listRooms(G_STATUS_SETUP))}),this.socket.on("disconnect",function(){for(var s=findGameByDungeonId(t.id);s;)s.removeDungeon(t.id),s.dungeons.length<=0&&games.splice(findIndex(games,s.id),1),broadcast(s,GEEDT,s.toJSON()),s=findGameByDungeonId(t.id);var e=findIndex(controllers,t.id);e&&controllers.splice(e,1),console.log("Disconnected: "+t.socket.id)}),this.socket.on(GEJN,function(s){var e=findGameById(s.gameId);if(e&&e.status===G_STATUS_SETUP){t.socket.join(s.gameId);var i=new Dungeon(t.id,e.configTemplate,s.dungeonName);e.addDungeon(i)&&(broadcast(e,GEEDT,e.toJSON()),console.log(t.id+" has joined: "+e.id))}else console.log("Error : can't connect to game "+s.gameId)}),this.socket.on(PEMV,function(s){var e=findGameByDungeonId(t.id);if(e&&e.status===G_STATUS_RUNNING){var i=find(e.dungeons,t.id);i&&i.movePlayer(s)&&(i.lastUpdateTime=0,broadcast(e,PEEU,e.toJSON()))}}),this.socket.on(PEAP,function(s){var e=findGameByDungeonId(t.id);if(e&&e.status===G_STATUS_RUNNING){var i=find(e.dungeons,t.id),n=find(e.dungeons,s.opponentId);i&&n&&n.applyState(s.x,s.y,s.state,i)&&(i.deduceMoney(s.state),broadcast(e,PEEU,e.toJSON()))}}),this.socket.on(GESTD,function(s){var e=findGameByDungeonId(t.id);if(e&&e.status===G_STATUS_SETUP){var i=find(e.dungeons,t.id);i.status=D_STATUS_READY,i.name=s.name||i.name||t.id;var n=e.startIfReady();broadcast(e,GEEDT,e.toJSON()),n<e.dungeons.length&&broadcast(e,D_STATUS_READY,{dungeon:i,readyPlayers:n})}})}},Game.prototype={removeDungeon:function(t){var s=findIndex(this.dungeons,t);s>=0&&(broadcast(this,GELV,this.dungeons[s].toJSON()),this.dungeons.splice(s,1))},addDungeon:function(t){var s=this;return find(this.dungeons,t.id)?(console.warn(t.id+" already in game "+this.id),!1):(this.socket.join(t.id),this.dungeons.push(t),setTimeout(function(){broadcast(s,GEJN,t.toJSON())},1e3),!0)},startIfReady:function(){var t=1;if(this.status===G_STATUS_SETUP){for(var s=0;s<this.dungeons.length;s++){if(this.dungeons[s].status!==D_STATUS_READY)return t;t++}this.status=G_STATUS_RUNNING,this.dungeons.map(function(t){t.status=D_STATUS_PLAYING}),this.time=0,this.clock=setInterval(this.checkClock.bind(this),1e3),broadcast(this,GESTDED,this.toJSON()),broadcast(this,PEEU,this.toJSON())}return t},stop:function(){var t=this;t.status=G_STATUS_FINISHED,clearInterval(t.clock),broadcast(t,GEFD,t.toJSON()),setTimeout(function(){t.socket.disconnect(!1)},6e4)},stopIfFinishedOnClock:function(){var t,s=this,e=!1,i=0;s.dungeons.forEach(function(n){n.reduceLifeOnClock()&&(e=!0),n.addBonusOnClock(s.time)&&(e=!0),n.updateStatus()&&!n.hasLost&&(e=!0,n.status===D_STATUS_LOST&&broadcast(s,PELS,s.toJSON()),n.hasLost=!0),n.status===D_STATUS_PLAYING&&(t=n,i++)}),e&&broadcast(s,PEEU,s.toJSON()),i<=1&&(t&&(t.status=DSW,broadcast(s,DSW,s.toJSON())),this.stop())},checkClock:function(){this.time++,this.time>MAX_CLOCK_TIME&&this.stop(),this.stopIfFinishedOnClock(),this.startIfReady()},toJSON:function(){return{id:this.id,name:this.name,status:this.status,dungeons:this.dungeons.map(function(t){return t.toJSON?t.toJSON():t}),options:this.options}}},Dungeon.prototype={applyState:function(t,s,e,i){if(this.status!=D_STATUS_PLAYING||i.status!=D_STATUS_PLAYING)return!1;var n=this.area.getState(t,s);if(this.id===i.id){if(!(!(e&STMO)||n&SWL||n&SPL)||!(!(e&STRH)||n&SWL||n&SPL))return this.area.setState(t,s,n&STDY|e),!0;if(e&STDY&&n&SWL&&i.money>=this.config.dynamiteCost)return this.area.setState(t,s,STD|STBM),!0}else{if(e&SWL&&!(n&(SWL|SPL))&&i.money>=this.config.wallCost)return this.area.setState(t,s,e),!0;if(e&STDY&&!(n&(SWL|STDY|SPL))&&i.money>=this.config.dynamiteCost)return this.area.setState(t,s,n|e),!0}return!1},deduceMoney:function(t){t&SWL?this.money-=this.config.wallCost:t&STDY&&(this.money-=this.config.dynamiteCost)},movePlayer:function(t){if(this.status!=D_STATUS_PLAYING)return!1;var s=this.player.y,e=this.player.x,i=s,n=e;switch(t){case MUP:i--;break;case MDW:i++;break;case MLT:n--;break;case MRH:n++;break;default:console.log("Error can't move "+t)}n=n%this.area.columns+1?n%this.area.columns:this.area.columns-1,i=i%this.area.rows+1?i%this.area.rows:this.area.rows-1;var a=this.area.getState(n,i);return!(a&SWL)&&(this.area.setState(e,s,STD),this.area.setState(n,i,SPL),this.player.x=n,this.player.y=i,this.life--,this.lastUpdateTime=0,a&STRH&&(this.life+=this.config.rhumBonusValue),a&STMO&&(this.money+=this.config.moneyBonusValue),a&STDY&&this.applyTrap(e,s,t),!0)},applyTrap:function(t,s,e){var i;switch(e){case MUP:i=MDW;break;case MDW:i=MUP;break;case MLT:i=MRH;break;case MRH:i=MLT;break;default:console.log("Error can't move "+e)}for(var n=0;n<=this.config.dynamiteFeedback;n++)this.movePlayer(i);this.area.setState(t,s,STBM)},createArea:function(t,s){this.area.reset(t,s);var e=Math.floor((t-1)/2),i=Math.floor((s-1)/2);this.player={x:e,y:i},this.area.setState(e,i,SPL)},applyModifier:function(t){return this.config[t]+this.modifiers[t]},reduceLifeOnClock:function(){var t=this.lastUpdateTime++,s=this.config.timeLimit,e=!1;return t>=s&&t%s==0&&(this.life-=this.applyModifier("timeLimitMalus"),this.modifiers.timeLimitMalus++,e=!0),t<s&&(this.modifiers.timeLimitMalus=0),this.life<=0&&(this.status=D_STATUS_LOST,e=!0),e},addBonusOnClock:function(t){var s=!1;if(t%parseInt(this.config.bonusInterval,10)==0){s=!0;var e=bonusMapState[Math.ceil(Math.random()*bonusMapState.length-1)],i=Math.floor(Math.random()*parseInt(this.area.columns,10)),n=Math.floor(Math.random()*parseInt(this.area.rows,10));this.applyState(i,n,e,this)}return s},updateStatus:function(){return this.life<=0&&(this.status=D_STATUS_LOST,!0)},toJSON:function(){return{id:this.id,name:this.name,area:this.area.toJSON(),life:this.life,money:this.money,lastUpdateTime:this.lastUpdateTime,player:this.player,status:this.status,config:this.config.toJSON(),modifiers:this.modifiers}}},Area.prototype={reset:function(t,s){this.columns=t||0,this.rows=s||0,this.states=[];for(var e=0;e<this.rows;e++){this.states.push([]);for(var i=0;i<this.columns;i++)this.states[e].push({state:STD})}},getState:function(t,s){return this.states[s][t].state},setState:function(t,s,e){this.states[s][t].state=e},toJSON:function(){return{columns:this.columns,rows:this.rows,states:this.states}}},Config.prototype={fromJSON:function(t){t=t||{},this.dynamiteFeedback=t.dynamiteFeedback||this.dynamiteFeedback||3,this.dynamiteCost=t.dynamiteCost||this.dynamiteCost||15,this.wallCost=t.wallCost||this.wallCost||5,this.timeLimit=t.timeLimit||this.timeLimit||5,this.timeLimitMalus=t.timeLimitMalus||this.timeLimitMalus||1,this.bonusInterval=t.bonusInterval||this.bonusInterval||5,this.rhumBonusValue=t.rhumBonusValue||this.rhumBonusValue||10,this.moneyBonusValue=t.moneyBonusValue||this.moneyBonusValue||15,this.areaColumns=t.areaColumns||this.areaColumns||11,this.areaRows=t.areaRows||this.areaRows||15},toJSON:function(){return{dynamiteFeedback:this.dynamiteFeedback,dynamiteCost:this.dynamiteCost,wallCost:this.wallCost,timeLimit:this.timeLimit,timeLimitMalus:this.timeLimitMalus,bonusInterval:this.bonusInterval,rhumBonusValue:this.rhumBonusValue,moneyBonusValue:this.moneyBonusValue,areaColumns:this.areaColumns,areaRows:this.areaRows}}},module.exports=function(t){var s=new ServerController(t);controllers.push(s),console.log("Connected: "+t.id)};