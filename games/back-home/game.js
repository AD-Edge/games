function getGrad(e,i,t,a,o,r,d){var n=e.createLinearGradient(i,t,a,o);return n.addColorStop(0,r),n.addColorStop(1,d),n}function checkBounds(e,i,t,a,o){return px=e.pageX,py=e.pageY,px>i&&px<a&&py>t&&py<o}function getLineHeight(e){e.save();var i=e.measureText("M").width;return e.restore(),i}function resetGamestate(){position=0,car_x=0,car_speed=0,score=0,car_x=a.width/2,car_max_speed=120,health=100,fuel=100,direction=0,tdx=.2*a.width,tdy=Math.random()*a.height*.5+.2*a.height}function drawDigit(e,i,t,a,o){switch(a){case 0:drawTop(e,i,t,o),drawBottom(e,i,t,o),drawLeft(e,i,t,o),drawLeft(e,i,t+o,o),drawRight(e,i,t,o),drawRight(e,i,t+o,o);break;case 1:drawRight(e,i,t,o),drawRight(e,i,t+o,o);break;case 2:drawRight(e,i,t,o),drawLeft(e,i,t+o,o),drawTop(e,i,t,o),drawBottom(e,i,t,o),drawMiddle(e,i,t,o);break;case 3:drawTop(e,i,t,o),drawBottom(e,i,t,o),drawMiddle(e,i,t,o),drawRight(e,i,t,o),drawRight(e,i,t+o,o);break;case 4:drawMiddle(e,i,t,o),drawLeft(e,i,t,o),drawRight(e,i,t,o),drawRight(e,i,t+o,o);break;case 5:drawRight(e,i,t+o,o),drawLeft(e,i,t,o),drawTop(e,i,t,o),drawBottom(e,i,t,o),drawMiddle(e,i,t,o);break;case 6:drawTop(e,i,t,o),drawBottom(e,i,t,o),drawMiddle(e,i,t,o),drawLeft(e,i,t,o),drawLeft(e,i,t+o,o),drawRight(e,i,t+o,o);break;case 7:drawTop(e,i,t,o),drawRight(e,i,t,o),drawRight(e,i,t+o,o);break;case 8:drawTop(e,i,t,o),drawBottom(e,i,t,o),drawLeft(e,i,t,o),drawLeft(e,i,t+o,o),drawRight(e,i,t,o),drawRight(e,i,t+o,o),drawMiddle(e,i,t,o);break;case 9:drawTop(e,i,t,o),drawBottom(e,i,t,o),drawLeft(e,i,t,o),drawRight(e,i,t,o),drawRight(e,i,t+o,o),drawMiddle(e,i,t,o)}}function drawTop(e,i,t,a){e.beginPath(),e.moveTo(i+.1*a,t),e.lineTo(i+.9*a,t),e.lineTo(i+.8*a,t+.1*a),e.lineTo(i+.2*a,t+.1*a),e.fill()}function drawBottom(e,i,t,a){e.beginPath(),e.moveTo(i+.1*a,t+2*a),e.lineTo(i+.9*a,t+2*a),e.lineTo(i+.8*a,t-.1*a+2*a),e.lineTo(i+.2*a,t-.1*a+2*a),e.fill()}function drawMiddle(e,i,t,a){e.beginPath(),e.moveTo(i+.1*a,t+a),e.lineTo(i+.2*a,t-.1*a+a),e.lineTo(i+.8*a,t-.1*a+a),e.lineTo(i+.9*a,t+a),e.lineTo(i+.8*a,t+.1*a+a),e.lineTo(i+.2*a,t+.1*a+a),e.fill()}function drawLeft(e,i,t,a){e.beginPath(),e.moveTo(i,t+.1*a),e.lineTo(i,t+.9*a),e.lineTo(i+.1*a,t+.8*a),e.lineTo(i+.1*a,t-.1*a+.2*a),e.lineTo(i,t+.1*a),e.fill()}function drawRight(e,i,t,a){e.beginPath(),e.moveTo(i+a,t+.1*a),e.lineTo(i+a,t+.9*a),e.lineTo(i+a-.1*a,t+.8*a),e.lineTo(i+a-.1*a,t-.1*a+.2*a),e.fill()}function getdigit(e,i){for(n=1;n<i;n++)e/=10;return Math.floor(e%10)}function drawFuelIcon(e,i,t){e.fillStyle="#fff",e.beginPath(),e.moveTo(i+5,t+10),e.lineTo(i+5,t+45),e.lineTo(i,t+45),e.lineTo(i,t+50),e.lineTo(i+25,t+50),e.lineTo(i+25,t+45),e.lineTo(i+20,t+45),e.lineTo(i+20,t+10),e.fill()}function drawOilIcon(e,i,t){e.fillStyle="#fff",e.beginPath(),e.moveTo(i+5,t+10),e.lineTo(i+29,t+10),e.lineTo(i+29,t+5),e.lineTo(i+25,t+5),e.lineTo(i+25,t+2),e.lineTo(i+35,t+2),e.lineTo(i+35,t+5),e.lineTo(i+31,t+5),e.lineTo(i+31,t+10),e.lineTo(i+40,t+10),e.lineTo(i+45,t+15),e.lineTo(i+50,t+12),e.lineTo(i+55,t+16),e.lineTo(i+55,t+18),e.lineTo(i+45,t+14),e.lineTo(i+40,t+30),e.lineTo(i+15,t+30),e.lineTo(i+15,t+7),e.lineTo(i+8,t+7),e.lineTo(i+8,t+17),e.lineTo(i+5,t+17),e.fill()}function drawGuage(e,i,t,a){e.fillStyle="#fff",e.fillRect(i,t+32,100,4),e.fillRect(i+24,t,2,28),e.fillRect(i+49,t,2,28),e.fillRect(i+74,t,2,28),e.fillRect(i+92,t,8,28),e.fillStyle="#f11",e.fillRect(i,t,8,28),e.fillStyle="#fff",e.fillRect(i+a,t-4,4,32)}function resetUI(){x.fillStyle="#f00",x.fillRect(0,0,a.width,a.height),x.font=fnt,x.fillStyle="#fff"}function drawCar(e,i,t,a,o,r){e.fillStyle="#222",e.fillRect(i+.1*o+.05*a*o,t+.8*o,.2*o,.2*o),e.fillRect(i+.7*o+.05*a*o,t+.8*o,.2*o,.2*o),e.fillStyle="#c22",e.fillRect(i+.05*a*o,t+.5*o,o,.3*o),e.fillRect(i+.1*o+.05*a*o,t+.2*o,.8*o,.3*o),e.fillStyle="#622",e.fillRect(i+.2*o+.05*a*o,t+.25*o,.6*o,.2*o),e.fillStyle="#f00",e.beginPath(),e.arc(i+.15*o,t+.65*o,.1*o,0,2*Math.PI),e.fill(),e.beginPath(),e.arc(i+.85*o,t+.65*o,.1*o,0,2*Math.PI),e.fill()}function drawMiniVan(e,i,t,a,o){}function drawLorry(e,i,t,a,o){}function drawBus(e,i,t,a,o){}function drawBike(e,i,t,a,o){}function drawHorizon(e){e.fillStyle=stone,e.fillRect(a.width/2-.3*a.width+direction*(4*a.width/360),.1*a.height,.6*a.width,.1*a.height),e.fillRect(a.width/2-.3*a.width-4*a.width+direction*(4*a.width/360),.1*a.height,.6*a.width,.1*a.height),e.fillStyle=forest,e.fillRect(a.width/2-.3*a.width+a.width+direction*(4*a.width/360),.1*a.height,.6*a.width,.1*a.height),e.fillRect(a.width/2-.3*a.width-3*a.width+direction*(4*a.width/360),.1*a.height,.6*a.width,.1*a.height),e.fillStyle=sand,e.fillRect(a.width/2-.3*a.width+2*a.width+direction*(4*a.width/360),.1*a.height,.6*a.width,.1*a.height),e.fillRect(a.width/2-.3*a.width-2*a.width+direction*(4*a.width/360),.1*a.height,.6*a.width,.1*a.height),e.fillStyle=concrete,e.fillRect(a.width/2-.3*a.width+3*a.width+direction*(4*a.width/360),.1*a.height,.6*a.width,.1*a.height),e.fillRect(a.width/2-.3*a.width-a.width+direction*(4*a.width/360),.1*a.height,.6*a.width,.1*a.height),direction>360&&(direction-=360),direction<0&&(direction+=360)}function drawRoad(){x.fillStyle="#002",x.beginPath(),x.moveTo(.2*a.width,.8*a.height),x.lineTo(.8*a.width,.8*a.height),x.bezierCurveTo(.8*a.width,.8*a.height,.8*a.width,.6*a.height,.6*a.width+.009*a.width*current_road,.2*a.height),x.lineTo(.4*a.width+.009*a.width*current_road,.2*a.height),x.bezierCurveTo(.4*a.width+.009*a.width*current_road,.2*a.height,.2*a.width,.6*a.height,.2*a.width,.8*a.height),x.fill(),x.fillStyle="#fff",x.beginPath(),x.moveTo(.49*a.width,.8*a.height),x.lineTo(.51*a.width,.8*a.height),x.bezierCurveTo(.51*a.width,.8*a.height,.51*a.width,.6*a.height,.51*a.width+.009*a.width*current_road,.2*a.height),x.lineTo(.49*a.width+.009*a.width*current_road,.2*a.height),x.bezierCurveTo(.49*a.width+.009*a.width*current_road,.2*a.height,.49*a.width,.6*a.height,.49*a.width,.8*a.height),x.fill()}function calcActualX(e,i){var t=0,o=0;return console.log(e),o=(i/a.height-.2)/6*10,console.log("ratio : "+o),console.log("offset : "+e*current_road/50),i>=.2*a.height&&i<=.8*a.height&&(t=a.width/2+e*current_road*(1-o)/13),t}function updateRoad(){if(car_speed>0)switch(100*Math.random()<2&&(road_direction=Math.floor(3*Math.random())-1),road_direction){case-1:current_road>-50&&(current_road-=car_speed/60);break;case 0:current_road>2?current_road-=car_speed/60:current_road<-2&&(current_road+=car_speed/60);break;case 1:current_road<50&&(current_road+=car_speed/60)}}function drawTree(e,i,t,a){}function drawSign(e,i,t,a){}function drawRock(e,i,t,a){}function drawCactusVertical(e,i,t,a){e.fillStyle=cactus_low,e.beginPath(),e.moveTo(i+.3*a,t+a),e.lineTo(i+.3*a,t+.3*a),e.bezierCurveTo(i+.3*a,t+.3*a,i+.1*a,t+.5*a,i+.3*a,t+.7*a),e.lineTo(i+.3*a,t+.7*a),e.fill()}function drawCactusHorizontal(e,i,t,a,o){}function drawCactus(e,i,t,a){e.fillStyle=cactus_low,e.beginPath(),e.moveTo(i+.3*a,t+a),e.lineTo(i+.3*a,t+.3*a),e.bezierCurveTo(i+.3*a,t+.3*a,i+.5*a,t,i+.7*a,t+.3*a),e.lineTo(i+.7*a,t+a),e.fill(),e.fillStyle=cactus_green,e.beginPath(),e.moveTo(i+.3*a+2,t+a),e.lineTo(i+.3*a+2,t+.3*a),e.bezierCurveTo(i+.3*a+2,t+.3*a,i+.5*a,t+.1*a+1,i+.7*a,t+.3*a),e.lineTo(i+.7*a,t+a),e.fill()}function drawHouse(e,i,t,a){}function drawSkyScraper(e,i,t,a){}function drawHiker(e,i,t,a){}function drawCloud(e,i,t,a,o){}function drawStreetLight(e,i,t,a){}function drawTrafficLight(e,i,t,a){}function drawStreetSign(e,i,t,a,o,r){}var text_new_game="New Game",text_settings="Settings",text_back="Back",text_score="Score: ",fnt="40px Tahoma",speedo="60px Tahoma",gameTick=0,Key={_pressed:{},W:87,A:65,D:68,S:83,isDown:function(e){return this._pressed[e]},onKeydown:function(e){this._pressed[e.keyCode]=!0},onKeyup:function(e){delete this._pressed[e.keyCode]}};window.addEventListener("keyup",function(e){Key.onKeyup(e)},!1),window.addEventListener("keydown",function(e){Key.onKeydown(e)},!1);var position=0,car_x=0,car_y=0,car_speed=0,score=0,car_max_speed=120,tdy=0,tdx=0,current_road=0,road_direction=0,health=0,fuel=100,text_gameover="",speed_colors=["#1f1","#fb0","#f00"],cactus_green="#292",cactus_low="#2a2",cactus_high="#5e5",direction=0,sand="#DA2",sand="#DA2",stone="#333",concrete="#666",forest="#262";