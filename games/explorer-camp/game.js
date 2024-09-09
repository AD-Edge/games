!function(t,e){"use strict";function i(t){var e=Math.floor(t%60),i=Math.floor(t/60%60);return i=i<10?"0"+i:i,e=e<10?"0"+e:e,i+":"+e}function r(t,e){return Math.floor(Math.random()*(e-t+1))+t}function l(t,e,i,r){for(var l=e.split("\n"),n=0;n<l.length;++n)t.fillText(l[n],i,r),r+=16}function n(t,e,i,r,l){this.w=isNaN(t)||t<5||t>999?20:t,this.h=isNaN(e)||e<5||e>999?20:e,this.map=[];for(var n=0;n<e;++n){this.map[n]=[];for(var h=0;h<t;++h)this.map[n][h]={N:0,S:0,E:0,W:0,V:0}}this.nextCell=void 0===i||"first"!=i&&"last"!=i&&"random"!=i?"random":i,this.startX=isNaN(r)||r<0||r>=t?0:r,this.startY=isNaN(l)||l<0||l>=e?0:l,this.build()}function h(){this.x=0,this.y=0}function o(t,i,r,l,n,h){this.width=r===e?0:r,this.height=l===e?this.width:l,n?(this.left=t===e?0:t,this.top=i===e?0:i):(this.x=t===e?0:t,this.y=i===e?0:i),this.t=h===e?-1:h}function a(t,e){return e>1&&e<H.gridH-1&&t>1&&t<H.gridW-1}function s(){var t,e=0,i=0;for(e=0;e<H.gridH;++e)for(i=0;i<H.gridW;++i)1===H.gridMap[e][i]?ct.push(new o(e*j,i*j,j,j,!0)):(t=0===i&&0===e||a(i,e)&&1===H.gridMap[e-1][i]&&0===H.gridMap[e+1][i]&&1===H.gridMap[e][i-1]&&0===H.gridMap[e][i+1]?2:0===i&&e===H.gridH-1||a(i,e)&&0===H.gridMap[e-1][i]&&1===H.gridMap[e+1][i]&&1===H.gridMap[e][i-1]&&0===H.gridMap[e][i+1]?3:i===H.gridW-1&&e===H.gridH-1||a(i,e)&&0===H.gridMap[e-1][i]&&1===H.gridMap[e+1][i]&&0===H.gridMap[e][i-1]&&1===H.gridMap[e][i+1]?4:i===H.gridW-1&&0===e||a(i,e)&&1===H.gridMap[e-1][i]&&0===H.gridMap[e+1][i]&&0===H.gridMap[e][i-1]&&1===H.gridMap[e][i+1]?5:i>1&&i<H.gridW-1&&1===H.gridMap[e][i-1]&&0===H.gridMap[e][i+1]&&1===H.gridMap[e-1][i]&&1===H.gridMap[e+1][i]?6:i>1&&i<H.gridW-1&&0===H.gridMap[e][i-1]&&1===H.gridMap[e][i+1]&&1===H.gridMap[e-1][i]&&1===H.gridMap[e+1][i]?7:e>1&&e<H.gridH-1&&0===H.gridMap[e-1][i]&&1===H.gridMap[e+1][i]&&1===H.gridMap[e][i+1]&&1===H.gridMap[e][i-1]?8:e>1&&e<H.gridH-1&&1===H.gridMap[e-1][i]&&0===H.gridMap[e+1][i]&&1===H.gridMap[e][i+1]&&1===H.gridMap[e][i-1]?9:0===i||i===H.gridW-1||i>1&&i<H.gridW-1&&1===H.gridMap[e][i-1]&&1===H.gridMap[e][i+1]||a(i,e)&&0===H.gridMap[e-1][i]&&0===H.gridMap[e+1][i]?1:0,pt.push(new o(e*j,i*j,j,j,!0,t)));ut.push(new o((e-2)*j,(i-2)*j,j,j,!0,1)),ut.push(new o((e-2)*j,(i-3)*j,j,j,!0,3)),ut.push(new o((e-3)*j,(i-2)*j,j,j,!0,0)),ut.push(new o((e-3)*j,(i-3)*j,j,j,!0,2)),O=H.gridH*j,J=H.gridW*j}function f(){D.textAlign="left",D.font="10px Verdana",D.fillStyle="#FFF"}function d(t,e,i,r,l,n){t.beginPath(),t.moveTo(e,i+n),t.lineTo(e,i+l-n),t.arcTo(e,i+l,e+n,i+l,n),t.lineTo(e+r-n,i+l),t.arcTo(e+r,i+l,e+r,i+l-n,n),t.lineTo(e+r,i+n),t.arcTo(e+r,i,e+r-n,i,n),t.lineTo(e+n,i),t.arcTo(e,i,e,i+n,n),t.stroke()}function g(){D.fillStyle="#A22C29",D.fillRect(B.width/2-150,B.height/2-50,290,100),D.textAlign="center",D.fillStyle="#FFF",D.font="32px Impact",D.fillText("Explorer Camp",B.width/2,B.height/2),~~(3*it)%2==1&&(D.font="12px Verdana",D.fillText("Press 'Enter' to start the game",B.width/2,B.height/2+20)),f()}function p(){D.fillStyle="#A22C29",D.fillRect(B.width/2-150,B.height/2-60,300,120),D.textAlign="center",D.fillStyle="#FFF",D.font="20px Impact",D.fillText("WIN",B.width/2,B.height/2-30),D.font="10px Verdana",D.fillText("Congratulations, you have become an Explorer!",B.width/2,B.height/2-10),~~(3*it)%2==1&&(D.font="12px Verdana",D.fillText("Press 'ESC' to restart the game",B.width/2,B.height/2+20)),f()}function c(){D.fillStyle="#A22C29",D.fillRect(B.width/2-150,B.height/2-50,290,100),D.textAlign="center",D.fillStyle="#FFF",D.font="20px Impact",D.fillText("PAUSE",B.width/2,B.height/2),~~(3*it)%2==1&&(D.font="12px Verdana",D.fillText("Press 'P' to pause/resume the game",B.width/2,B.height/2+20)),f()}function u(){D.fillStyle="#A22C29",D.fillRect(B.width/2-150,B.height/2-60,300,120),D.textAlign="center",D.fillStyle="#FFF",D.font="20px Impact",D.fillText("GAME OVER",B.width/2,B.height/2-30),D.font="10px Verdana",D.fillText(C,B.width/2,B.height/2-10),~~(3*it)%2==1&&(D.font="12px Verdana",D.fillText("Press 'ESC' to restart the game",B.width/2,B.height/2+20))}function w(){D.fillStyle="#80A1C1",D.fillRect(B.width/2-145,75,290,120),D.textAlign="center",D.fillStyle="#FFF",D.font="16px Verdana",D.fillText(k,B.width/2,100),D.font="12px Verdana",l(D,R,B.width/2,130),f()}function x(){D.fillStyle="#80A1C1",D.fillRect(B.width/2-200,75,400,350),D.textAlign="center",D.fillStyle="#FFF",D.font="16px Verdana",D.fillText("Instrucctions",B.width/2,100),D.textAlign="left",D.font="12px Verdana",D.fillText("To become an explorer you should find the exit of the maze,",B.width/2-185,140),D.fillText("but before you should search some objects that will help",B.width/2-185,157),D.fillText("you to escape.",B.width/2-185,174),D.fillText("Be careful! You are lost in a big maze and have a limited",B.width/2-185,208),D.fillText("time to escape.",B.width/2-185,225),D.fillText("Use arrow keys to move around, and press 'P' to pause.",B.width/2-185,260),D.textAlign="center",D.font="10px Verdana",D.strokeStyle="#FFF",D.fillText("Up",B.width/2,305),d(D,B.width/2-22.5,280,45,45,10),D.fillText("Left",B.width/2-50,356),d(D,B.width/2-72.5,330,45,45,10),D.fillText("Down",B.width/2,356),d(D,B.width/2-22.5,330,45,45,10),D.fillText("Right",B.width/2+50,356),d(D,B.width/2+27.5,330,45,45,10),f()}function m(){var t=0,e=0;for(t=0,e=pt.length;t<e;++t)D.drawImage(Tt,j*pt[t].t,0,j,j,pt[t].left-gt.x,pt[t].top-gt.y,j,j);for(t=0,e=ct.length;t<e;++t)D.drawImage(Ft,ct[t].left-gt.x,ct[t].top-gt.y);for(t=0,e=ut.length;t<e;++t)D.drawImage(St,j*ut[t].t,0,j,j,ut[t].left-gt.x,ut[t].top-gt.y,j,j)}function y(){var t=B.height-H.gridW*K-10-5;D.fillStyle="white",D.fillRect(10,t,H.gridH*K+10,H.gridW*K+10),D.fillStyle="#E8E0A0",D.fillRect(15,t+5,H.gridH*K,H.gridW*K),D.fillStyle="black";for(var e=0,i=pt.length;e<i;e+=1)D.fillRect(pt[e].left/j*K+10+5,pt[e].top/j*K+t+5,K,K);D.fillStyle="red",D.beginPath(),D.arc(yt.left/j*K+10+5+1,yt.top/j*K+t+5+1,2,0,2*Math.PI),D.fill(),D.fillStyle="green",D.beginPath(),D.arc(mt.left/j*K+10+5+1,mt.top/j*K+t+5+1,2,0,2*Math.PI),D.fill(),D.beginPath(),D.arc(xt.left/j*K+10+5+1,xt.top/j*K+t+5+1,2,0,2*Math.PI),D.fill(),D.fillStyle="#FFF"}function M(){D.fillStyle="black",D.fillRect(B.width/2-37,5,74,42),D.fillStyle="white",D.fillRect(B.width/2-32,10,64,32),D.fillStyle="black",D.textAlign="center",D.font="20px arial",D.fillText(i(rt),B.width/2,32),f()}function v(){D.fillStyle="#000",D.fillRect(0,0,B.width,B.height),m(),dt?D.drawImage(vt,j*Mt,~~(10*rt)%3*48,j,48,yt.left-gt.x,yt.top-gt.y,j,48):D.drawImage(vt,j*Mt,96,j,48,yt.left-gt.x,yt.top-gt.y,j,48),It||D.drawImage(bt,wt.left-gt.x,wt.top-gt.y),!Vt&&It&&D.drawImage(At,mt.left-gt.x,mt.top-gt.y),!Et&&It&&D.drawImage(Wt,xt.left-gt.x,xt.top-gt.y),kt>rt&&x(),Ht>rt&&w(),It&&Nt&&y(),ot&&(D.textAlign="center",st?g():ft?p():at?u():c(),D.textAlign="left"),M()}function T(t){for(var e=0,i=pt.length;e<i;e+=1)if(t.intersects(pt[e]))return!0;return!1}function F(){I("Well, Mini Map found!","You can show/hide the Map pressing 'M' \n \n Now, you should search a snorkel and a flipper",3),It=!0}function S(){var t="Now, you should search the exit, a small lake.";Et||(t="Now, you should search a flipper."),I("Well, Snorkel found!",t,3),Vt=!0}function b(){var t="Now, you should search the exit, a small lake.";Vt||(t="Now, you should search a snorkel."),I("Well, Flipper found!",t,3),Et=!0}function W(){yt.intersects(ut[0])&&(Vt&&Et?(ft=!0,ot=!0):(at=!0,C="You need a snorkel and a flipper, to become an Explorer!",ot=!0))}function A(t){kt=rt+t}function I(t,e,i){Ht=rt+i,k=t,R=e}function E(t){var e=0,i=0;if(it+=t,!ot){if(rt>60*lt&&(at=!0,C="You have run out of time!",ot=!0),rt+=t,ht[q]){for(Mt=2,dt=!0,yt.top-=120*t,e=0,i=pt.length;e<i;e+=1)yt.intersects(pt[e])&&(yt.top=pt[e].bottom);!It&&yt.intersects(wt)&&(F(),yt.top=wt.bottom),!Vt&&It&&yt.intersects(mt)&&(S(),yt.top=mt.bottom),!Et&&It&&yt.intersects(xt)&&(b(),yt.top=xt.bottom),W()}if(ht[L]){for(Mt=1,dt=!0,yt.left+=120*t,e=0,i=pt.length;e<i;e+=1)yt.intersects(pt[e])&&(yt.right=pt[e].left);!It&&yt.intersects(wt)&&(F(),yt.right=wt.left),!Vt&&It&&yt.intersects(mt)&&(S(),yt.right=mt.left),!Et&&It&&yt.intersects(xt)&&(b(),yt.right=xt.left),W()}if(ht[z]){for(Mt=0,dt=!0,yt.top+=120*t,e=0,i=pt.length;e<i;e+=1)yt.intersects(pt[e])&&(yt.bottom=pt[e].top);!It&&yt.intersects(wt)&&(F(),yt.bottom=wt.top),!Vt&&It&&yt.intersects(mt)&&(S(),yt.bottom=mt.top),!Et&&It&&yt.intersects(xt)&&(b(),yt.bottom=xt.top),W()}if(ht[Y]){for(Mt=3,dt=!0,yt.left-=120*t,e=0,i=pt.length;e<i;e+=1)yt.intersects(pt[e])&&(yt.left=pt[e].right);!It&&yt.intersects(wt)&&(F(),yt.left=wt.right),!Vt&&It&&yt.intersects(mt)&&(S(),yt.left=mt.right),!Et&&It&&yt.intersects(xt)&&(b(),yt.left=xt.right),W()}gt.focus(yt.left,yt.top)}st||nt!==G||(ot=!ot,nt=null),nt===P&&(ot=!1,st=!1,A(1)),nt===X&&(ft||at)&&N(),nt===U&&(Nt=!Nt,nt=null)}function V(){t.requestAnimationFrame(V);var e=Date.now(),i=(e-$)/1e3;i>1&&(i=0),$=e,tt+=1,(et+=i)>1&&(_=tt,tt=0,et-=1),E(i),v(D)}function N(){$=0,_=0,tt=0,et=0,it=0,rt=0,nt=null,ht=[],ot=!0,at=!1,st=!0,ft=!1,dt=!1,H=null,gt=null,pt=[],ct=[],ut=[],wt=null,xt=null,mt=null,yt=null,Mt=0,It=!1,Et=!1,Vt=!1,Nt=!0,Ht=0,k="",R="",kt=0,H=new n(Q,Z,"random",1,1),yt=new o(32,32,32,48,!0),gt=new h,s();var t=r(64,B.width-j),e=r(96,B.height-j);for(wt=new o(t,e,j,j,!0);t%j!=0||e%j!=0||T(wt);)t=r(64,B.width-j),e=r(96,B.height-j),wt=new o(t,e,j,j,!0);for(t=r(64,(H.gridH-4)*j),e=r(96,(H.gridW-4)*j),mt=new o(t,e,j,j,!0);t%j!=0||e%j!=0||T(mt)||mt.intersects(wt);)t=r(64,(H.gridH-4)*j),e=r(96,(H.gridW-4)*j),mt=new o(t,e,j,j,!0);for(t=r(64,(H.gridH-4)*j),e=r(96,(H.gridW-4)*j),xt=new o(t,e,j,j,!0);t%j!=0||e%j!=0||T(xt)||xt.intersects(wt)||xt.intersects(mt);)t=r(64,(H.gridH-4)*j),e=r(96,(H.gridW-4)*j),xt=new o(t,e,j,j,!0)}var H,k,R,C,P=13,Y=37,q=38,L=39,z=40,G=80,U=77,X=27,B=null,D=null,j=32,O=0,J=0,K=3,Q=16,Z=16,$=0,_=0,tt=0,et=0,it=0,rt=0,lt=5,nt=null,ht=[],ot=!0,at=!1,st=!0,ft=!1,dt=!1,gt=null,pt=[],ct=[],ut=[],wt=null,xt=null,mt=null,yt=null,Mt=0,vt=new Image,Tt=new Image,Ft=new Image,St=new Image,bt=new Image,Wt=new Image,At=new Image,It=!1,Et=!1,Vt=!1,Nt=!0,Ht=0,kt=0;n.prototype.toGrid=function(){for(var t=[],e=0;e<3*this.h+1;++e){t[e]=[];for(var i=0;i<3*this.w+1;++i)t[e][i]=0}for(var r=0;r<this.h;++r)for(var l=3*r+1,n=0;n<this.w;++n){var h=3*n+1;t[l][h]=1,t[l][h+1]=1,t[l+1][h]=1,t[l+1][h+1]=1,1===this.map[r][n].N&&(t[l-1][h]=1,t[l-1][h+1]=1),1===this.map[r][n].S&&(t[l+1][h]=1,t[l+1][h+1]=1),1===this.map[r][n].E&&(t[l][h+1]=1,t[l+1][h+1]=1),1===this.map[r][n].W&&(t[l][h-1]=1,t[l+1][h-1]=1)}this.gridMap=t,this.gridW=t.length,this.gridH=t[0].length},n.prototype.build=function(t){var e=[];e.push({x:this.startX,y:this.startY}),this.map[this.startY][this.startX].V=1;for(var i={N:{y:-1,x:0,o:"S"},S:{y:1,x:0,o:"N"},W:{y:0,x:-1,o:"E"},E:{y:0,x:1,o:"W"}};e.length>0;){var r="first"==this.nextCell?0:"last"==this.nextCell?e.length-1:Math.floor(1e4*Math.random()%e.length),l=e[r],n=[];if(l.x>0&&0===this.map[l.y][l.x-1].V&&n.push("W"),l.x<this.w-1&&0===this.map[l.y][l.x+1].V&&n.push("E"),l.y>0&&0===this.map[l.y-1][l.x].V&&n.push("N"),l.y<this.h-1&&0===this.map[l.y+1][l.x].V&&n.push("S"),0!==n.length){var h=n[Math.floor(1e4*Math.random()%n.length)],o=l.x+i[h].x,a=l.y+i[h].y;this.map[l.y][l.x][h]=1,this.map[a][o][i[h].o]=1,this.map[a][o].V=1,e.push({x:o,y:a})}else e.splice(r,1)}this.toGrid()},h.prototype={constructor:h,focus:function(t,e){this.x=t-B.width/2,this.y=e-B.height/2,this.x<0?this.x=0:this.x>O-B.width&&(this.x=O-B.width),this.y<0?this.y=0:this.y>J-B.height&&(this.y=J-B.height)}},o.prototype={left:0,top:0,width:0,height:0,get x(){return this.left+this.width/2},set x(t){this.left=t-this.width/2},get y(){return this.top+this.height/2},set y(t){this.top=t-this.height/2},get right(){return this.left+this.width},set right(t){this.left=t-this.width},get bottom(){return this.top+this.height},set bottom(t){this.top=t-this.height},intersects:function(t){if(t!==e)return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top}},t.addEventListener("load",function(){B=document.getElementById("canvas"),D=B.getContext("2d"),H=new n(Q,Z,"random",1,1),yt=new o(32,32,32,48,!0),gt=new h,vt.src="assets/player.png",Tt.src="assets/hedge.png",Ft.src="assets/terrain.png",bt.src="assets/box.png",St.src="assets/water.png",At.src="assets/snorkel.png",Wt.src="assets/flipper.png",s();var t=r(64,B.width-j),e=r(96,B.height-j);for(wt=new o(t,e,j,j,!0);t%j!=0||e%j!=0||T(wt);)t=r(64,B.width-j),e=r(96,B.height-j),wt=new o(t,e,j,j,!0);for(t=r(64,(H.gridH-4)*j),e=r(96,(H.gridW-4)*j),mt=new o(t,e,j,j,!0);t%j!=0||e%j!=0||T(mt)||mt.intersects(wt);)t=r(64,(H.gridH-4)*j),e=r(96,(H.gridW-4)*j),mt=new o(t,e,j,j,!0);for(t=r(64,(H.gridH-4)*j),e=r(96,(H.gridW-4)*j),xt=new o(t,e,j,j,!0);t%j!=0||e%j!=0||T(xt)||xt.intersects(wt)||xt.intersects(mt);)t=r(64,(H.gridH-4)*j),e=r(96,(H.gridW-4)*j),xt=new o(t,e,j,j,!0);V()},!1),t.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,17)},document.addEventListener("keydown",function(t){nt=t.which,ht[t.which]=!0},!1),document.addEventListener("keyup",function(t){ht[t.which]=!1,dt=!1},!1)}(window);