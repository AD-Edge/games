var _audC=new(window.AudioContext||window.webkitAudioContext);var _aud_MV=1;function tone(length,type){if(!_audC||!_aud_MV)return{f:function(){return this},v:function(){return this}};var current=_audC.currentTime;var oscillator=_audC.createOscillator();var gain=_audC.createGain();if(type)oscillator.type=type;oscillator.frequency.value=0;gain.gain.value=0;oscillator.connect(gain);gain.connect(_audC.destination);oscillator.start(0);oscillator.stop(current+length);return{f:function(){if(arguments.length==1){oscillator.frequency.value=arguments[0];return this}for(var i=0;i<arguments.length;i+=1)oscillator.frequency.linearRampToValueAtTime(arguments[i],current+i/(arguments.length-1)*length);return this},v:function(){if(arguments.length==1){gain.gain.value=arguments[0]*_aud_MV;return this}for(var i=0;i<arguments.length;i+=1)gain.gain.linearRampToValueAtTime(arguments[i]*_aud_MV,current+i/(arguments.length-1)*length);return this}}}var ae={score:()=>{tone(2).f(120,420).v(0,.3);tone(2).f(220,420).v(0,.5);tone(2).f(320,420).v(0,.3)},place:()=>{tone(.9,"square").f(100,200,50,50).v(.1,.3,0,0,.1,.05,0)},clk:()=>{tone(.1).f(200,220,200).v(.1,.3,0);tone(.1,"triangle").f(220,200,220).v(.3,.1,0)},note:(nl,mm)=>{let n=440*Math.pow(1.059,nl);tone(.35+Math.random()*.1).f(n,n+20,n-mm).v(.1,.3,0);tone(.1).f(n/2-mm/2,n/2+10,n/2).v(.3,.1,0)}};var ctl;function makeController(al,callb){let chosenActionIndex=-1;let hasChosen=0;let act=[];ctl=i=>{let ai=act[i];if(ai==null||hasChosen)return;$(".card").removeClass("act");$(".slot").removeClass("show");cards[ai].addClass("act");$("#s"+i).addClass("chosen");chosenActionIndex=ai;hasChosen=1;if(callb)callb()};$(".card").remove();let old=$("#s1").sel()[0];old.replaceWith(old.cloneNode(true));$("#s1").on("keydown",(e=>{switch(e.key){case"ArrowUp":ctl(1);break;case"ArrowRight":ctl(2);break;case"ArrowDown":ctl(3);break}console.log(e)}));let cards=al.map(((a,ai)=>{if(a.s==0)return null;let svg=$("<svg>").addClass("card").attr("viewBox",`-150 -150 300 300`);let an=dude.a[a.a];let x=-50;y=0;r=0;an.map(((s,i)=>{let sp=makeSprite(dude,svg);let op=.25+i/an.length*.75;sp.base().attr("opacity",op);x+=s.dx*2||0;y+=s.dy||0;r+=s.dr||0;sp.setF(s.f,x,y,r);return sp}));makeSprite(mrk,svg,-50,0).setF("b",0,0,0);$("#s"+a.s).append(svg);return svg}));return{set:actI=>{chosenActionIndex=actI[0];hasChosen=0;act=actI;$("#s1").sel()[0].focus();$(".card").removeClass("act").removeClass("chosen");var any=false;[1,2,3].forEach((i=>{let ac=actI[i];$("#s"+i).removeClass("chosen").removeClass("show");if(ac==null)return;$("#s"+i).addClass("show");let cd=cards[ac];cd.addClass("act");any=true}));$("#inst").toggleClass("show",any);return any},get:()=>chosenActionIndex}}var dude={cs:"wbtbwtwbwbaawb",f:{b:[-3,-7,5,-8,17,4,-1,-33,1,-16,-3,-7,-12,0,-1,-77,14,11,-12,7,3,2,10,6,-8,-43,20,-26,10,-51,-13,-41,-10,-65,16,-50,-4,-7,8,-6,20,-4,-2,-33,-9,-23,-4,-6,11,36,6,51,1,63,-1,6,11,20,12,36,-8,61,5,68,12,68,-9,61,-4,70,12,69,8,31,5,48,-4,66,-1,5,6,21,7,32],run1:[6,-10,14,-13,26,-7,-1,-33,1,-20,5,-9,-12,0,-1,-72,13,6,-12,7,3,2,10,6,-8,-43,20,-26,10,-51,-12,-38,-9,-63,16,-50,-16,-6,-6,-1,5,5,-2,-33,-11,-16,-16,-6,23,23,14,35,-2,46,-1,6,16,13,23,23,-6,46,-3,52,9,52,-16,65,-9,70,-1,70,-1,38,-8,55,-12,67,-5,6,-2,28,-1,40],run2:[13,-14,19,-13,33,-20,-1,-33,4,-21,12,-13,-12,0,3,-71,13,6,-12,5,3,1,14,8,-7,-40,21,-29,10,-51,-10,-38,-9,-63,16,-53,-23,-14,-14,-5,-8,12,-2,-33,-13,-21,-23,-12,18,34,24,46,24,68,6,5,15,24,19,34,20,68,26,71,35,67,-28,62,-27,71,-14,68,-1,38,-15,53,-22,66,-5,6,-2,28,-1,40],run3:[7,-15,11,-6,19,3,-1,-33,4,-21,6,-15,-15,5,-2,-75,16,6,-11,9,2,3,14,8,-7,-40,21,-29,10,-51,-10,-38,-13,-65,16,-53,-7,-12,-2,-6,3,3,-2,-33,-7,-21,-7,-11,18,34,15,49,11,67,1,9,15,24,19,34,8,64,11,70,23,67,-23,49,-23,51,-14,61,6,37,-9,46,-19,50,-5,6,5,22,7,37],run4:[-17,-10,-6,-6,7,-1,-1,-33,4,-18,10,-8,-12,0,-1,-77,14,11,-12,7,3,2,10,6,-3,-37,20,-26,10,-51,-5,-35,-10,-63,16,-54,9,-9,23,-3,33,-6,-2,-33,-9,-23,-16,-10,2,37,1,52,-9,63,-6,6,2,24,1,37,4,42,7,51,19,50,-9,61,-9,70,6,68,21,21,19,33,7,44,1,6,13,11,21,21],run5:[-21,-17,-19,-15,-5,1,-1,-33,7,-23,11,-15,-12,0,3,-71,13,6,-12,5,3,1,14,8,-7,-40,21,-29,10,-51,-10,-38,-9,-63,16,-53,11,-15,23,-14,33,-20,-2,-33,-14,-24,-24,-16,-1,37,-14,57,-24,64,-6,7,0,26,-1,37,21,62,26,67,39,62,-29,62,-22,68,-13,66,21,32,21,50,27,64,7,8,13,21,20,33],run6:[-6,-12,-6,-8,8,2,-1,-33,7,-26,7,-17,-15,5,-2,-75,16,6,-11,9,2,3,14,8,-7,-40,21,-29,10,-51,-10,-38,-13,-65,16,-53,7,-17,27,-8,26,-2,-2,-33,-8,-23,-5,-13,7,35,-5,48,-19,53,-3,11,1,25,7,36,8,64,11,70,23,67,-23,49,-23,51,-14,61,18,34,20,50,13,65,-5,8,13,21,18,32],crouch:[-16,9,-21,25,-20,40,4,-5,-4,1,-14,13,-20,32,16,-48,5,27,-18,36,-7,21,4,30,1,-14,22,-5,13,-27,-3,-10,-8,-34,19,-32,-14,14,-16,25,-16,40,5,-5,-5,1,-17,10,15,42,3,50,-4,62,-7,30,8,34,16,41,-10,61,-4,67,6,68,-12,61,-4,70,8,67,13,40,-2,51,-7,61,-11,34,2,40,12,40],h1:[24,-19,31,-33,36,-40,2,-27,11,-19,23,-12,-12,0,11,-75,14,11,-13,2,1,4,14,12,6,-38,35,-30,16,-53,2,-31,-8,-63,20,-56,22,-14,31,-19,46,-33,4,-31,15,-24,25,-16,6,33,0,50,-8,66,-1,6,4,23,5,34,-14,59,-9,69,-1,70,-11,59,-4,70,7,69,-4,34,-3,45,-7,61,-4,7,-2,15,-5,36],h2:[17,-63,23,-72,35,-80,6,-29,15,-37,26,-49,-12,0,11,-75,10,9,-13,2,5,-4,7,11,6,-38,35,-30,16,-53,2,-31,-8,-63,20,-56,26,-50,36,-54,47,-68,4,-31,4,-46,18,-62,6,33,-2,40,-20,37,-2,4,4,23,7,30,-23,30,-26,38,-17,42,-20,47,-20,55,-10,50,-4,34,-10,42,-16,50,-4,7,-2,15,-5,36],f1:[17,-63,23,-72,35,-80,6,-29,12,-22,21,-23,-12,0,14,-70,5,7,-13,2,5,-4,7,11,6,-38,26,-27,16,-53,2,-31,-8,-63,20,-56,20,-24,37,-23,39,-34,4,-31,4,-46,18,-62,27,-9,26,5,18,13,-2,4,13,-5,27,-9,15,8,15,16,22,19,-43,18,-44,24,-37,31,-14,27,-26,28,-38,23,-4,7,-6,21,-15,28],f2:[31,-29,23,-44,21,-50,6,-29,12,-22,31,-41,-12,0,14,-70,10,8,-13,2,5,-4,11,8,6,-38,24,-34,16,-53,2,-31,-10,-54,20,-56,31,-41,46,-56,44,-61,4,-31,19,-27,30,-29,22,1,26,5,14,20,-2,4,13,-5,24,0,9,20,11,24,25,19,-23,4,-28,11,-27,18,-8,25,-18,20,-25,8,-4,7,-6,21,-7,27],f3:[24,-28,42,-40,46,-35,1,-24,12,-22,31,-40,-12,0,9,-72,10,8,-13,2,5,-4,11,8,6,-38,21,-30,16,-53,6,-33,-10,-54,19,-54,31,-41,31,-51,36,-56,4,-31,12,-26,24,-28,20,4,26,5,33,21,-7,4,11,7,20,6,26,20,36,24,42,21,-24,10,-28,11,-33,23,-8,25,-18,20,-29,14,-4,7,-6,21,-7,27],climb1:[26,-14,43,-13,48,-3,8,-28,16,-19,28,-14,-9,11,16,-71,9,8,-10,14,1,10,10,6,8,-31,33,-26,22,-46,2,-29,-4,-55,26,-49,24,-6,38,-7,46,2,8,-27,14,-6,24,-6,27,16,36,32,46,35,0,11,17,7,28,16,44,39,54,35,52,24,-9,61,-4,70,12,69,8,31,5,48,-4,66,-6,14,1,23,7,32],vault:[1,7,-6,35,3,33,2,-17,-1,-3,0,10,-27,-4,26,-45,-8,13,-31,-3,-31,12,-13,13,-3,-13,20,-5,16,-25,-6,-11,-3,-43,24,-25,0,7,-5,33,6,33,0,-16,5,-2,1,11,5,0,2,10,-14,19,-28,5,-8,-1,6,-2,-19,16,-17,25,-8,27,-9,17,-3,29,4,20,6,4,1,17,-5,20,-25,10,-4,4,7,5],vault2:[-10,6,-21,25,-19,31,2,-17,-1,-3,-14,6,-30,-3,21,-47,-8,13,-32,0,-23,9,-13,13,-3,-13,25,-11,16,-25,-6,-11,-6,-36,21,-28,-14,6,-23,17,-22,31,0,-16,-5,-4,-10,7,5,0,2,10,1,26,-28,5,-8,-1,4,-1,-5,23,-2,29,10,25,-9,17,-3,29,4,20,6,4,1,17,-7,19,-25,10,-6,3,7,5],vaulth:[22,13,20,23,26,29,15,1,25,7,27,14,-12,-8,50,1,-8,13,-10,-5,-14,6,-8,10,26,1,44,8,37,-6,23,2,16,-14,41,-9,26,13,26,27,32,28,15,0,23,10,23,14,-17,15,-22,20,-25,29,-7,1,-17,6,-24,16,-33,27,-33,31,-24,34,-27,30,-24,33,-15,33,-24,15,-27,22,-30,29,-7,2,-12,10,-17,16],curl:[-12,-4,-6,11,2,16,2,-17,1,-16,-11,-4,-27,-4,26,-45,-8,13,-31,-3,-31,12,-13,13,0,-15,20,-11,16,-25,-6,-11,-3,-43,24,-26,-10,-4,5,2,10,10,3,-18,-9,-23,-12,-4,5,0,2,10,-14,19,-28,5,-8,-1,6,-2,-19,16,-17,25,-8,27,-9,17,-3,29,4,20,6,4,1,17,-5,20,-25,10,-4,4,7,5],curl2:[-14,-8,-6,11,2,16,2,-17,1,-16,-11,-4,-27,-4,29,-39,-8,13,-31,-3,-31,12,-11,9,1,-21,7,-9,18,-26,-5,-19,-3,-43,24,-26,-10,-4,5,2,10,10,3,-18,-9,-11,-14,-7,5,0,2,10,-14,19,-28,5,-8,-1,6,-2,-19,16,-13,23,-4,22,-3,21,-3,29,10,23,2,0,1,17,3,23,-25,10,-4,4,3,1],toe:[6,-4,16,7,27,11,2,-17,3,-8,11,-7,-27,-4,26,-45,-8,13,-31,-3,-31,12,-13,13,-1,-25,34,-27,8,-38,-2,-19,-14,-41,12,-39,11,-7,18,-3,27,-5,-3,-15,-7,-11,5,-2,2,16,8,18,24,16,-28,5,-19,11,-2,17,21,20,32,19,27,11,24,7,30,6,26,-5,6,4,17,6,27,4,-25,10,-4,4,7,5]},a:{run:[{f:"run1",t:25,dx:12},{f:"run2",t:30,dx:13},{f:"run3",t:30,dx:12},{f:"b",t:15,dx:13}],run2:[{f:"run4",t:25,dx:12},{f:"run5",t:30,dx:13},{f:"run6",t:30,dx:12},{f:"b",t:15,dx:13}],vaultup:[{f:"vault",t:50,dx:35,dy:-35,dr:-20},{f:"vault",t:20,dx:15,dy:0,dr:20}],vaultdown:[{f:"vault2",t:20,dx:25,dy:0},{f:"b",t:40,dx:25,dy:35}],vaulth:[{f:"vaulth",t:20,dx:15,dy:0},{f:"vault",t:40,dx:35,dy:0}],vaultr:[{f:"run1",t:5,dx:12,dy:-35},{f:"run2",t:25,dx:13},{f:"run3",t:25,dx:12},{f:"b",t:25,dx:13}],vclimb:[{f:"b",t:50,dx:0,dy:-35},{f:"climb1",t:80,dx:5,dy:-5,dr:10},{f:"vault",t:80,dx:55,dy:-25,dr:10},{f:"crouch",t:20,dx:-10,dy:-40,dr:-20}],vjump:[{f:"h2",t:40,dx:10,dy:-40,dr:160},{f:"curl",t:40,dx:20,dy:-50,dr:100},{f:"f1",t:20,dx:20,dy:-15,dr:100}],climb:[{f:"climb1",t:80,dx:5,dy:-5,dr:10},{f:"vault",t:80,dx:55,dy:-25,dr:10},{f:"crouch",t:20,dx:-10,dy:-40,dr:-20}],crashclimb:[{f:"curl",t:50,dx:25,dy:70,dr:-10},{f:"crouch",t:50,dx:-25,dy:0,dr:10},{f:"climb1",t:80,dx:5,dy:-5,dr:10},{f:"vault",t:80,dx:55,dy:-25,dr:10},{f:"crouch",t:20,dx:-10,dy:-40,dr:-20}],hop:[{f:"crouch",t:10,dx:0},{f:"h1",t:30,dx:0},{f:"h2",t:20,dx:20,dy:-40},{f:"crouch",t:20,dx:30,dy:-30}],jump:[{f:"crouch",t:30,dx:20,dy:10,dr:20},{f:"h1",t:30,dx:0},{f:"f1",t:30,dx:30,dy:-80,dr:-20}],fly:[{f:"f2",t:40,dx:25,dy:-20},{f:"f3",t:50,dx:25,dy:-10}],tfly:[{f:"toe",t:30,dx:20,dy:-20,dr:-20},{f:"toe",t:50,dx:30,dy:-10,dr:20}],rollfly:[{f:"curl",t:40,dx:25,dy:-20,dr:70},{f:"curl2",t:50,dx:25,dy:-10,dr:110}],fly2:[{f:"f2",t:50,dx:25,dy:10},{f:"curl",t:40,dx:25,dy:20}],rollfly2:[{f:"curl",t:50,dx:25,dy:10,dr:110},{f:"crouch",t:40,dx:25,dy:20,dr:70}],flycatch:[{f:"curl",t:40,dx:40,dy:0,dr:-15},{f:"crouch",t:30,dx:10,dy:-40,dr:15}],rollflycatch:[{f:"curl",t:40,dx:30,dy:0,dr:110},{f:"crouch",t:30,dx:20,dy:-40,dr:70}],droproll:[{f:"curl",t:30,dx:20,dy:60,dr:100},{f:"curl2",t:30,dx:30,dy:60,dr:110}],groll:[{f:"curl",t:30,dx:20,dy:30,dr:100},{f:"curl2",t:30,dx:30,dy:20,dr:110}],groll2:[{f:"curl",t:30,dx:30,dy:-10,dr:90},{f:"crouch",t:30,dx:20,dy:-40,dr:60}],grollcrash:[{f:"curl",t:30,dx:30,dy:-10,dr:90},{f:"crouch",t:70,dx:-20,dy:-40,dr:60},{f:"climb1",t:80,dx:-10,dy:-5,dr:10},{f:"vault",t:80,dx:55,dy:-25,dr:10},{f:"crouch",t:20,dx:-5,dy:-40,dr:-20}],drop:[{f:"crouch",t:30,dx:25,dy:20},{f:"crouch",t:30,dx:20,dy:40},{f:"b",t:10,dx:5,dy:10}],fall:[{f:"curl",t:30,dx:25,dy:20},{f:"curl2",t:20,dx:20,dy:40},{f:"curl",t:10,dx:5,dy:10}],toe:[{f:"curl2",t:20,dx:15,dy:20},{f:"toe",t:12,dx:10,dy:15},{f:"toe",t:13,dx:10,dy:15},{f:"curl",t:20,dx:15,dy:20}],rolldown:[{f:"curl",t:15,dx:5,dy:20,dr:80},{f:"curl2",t:20,dx:15,dy:30,dr:110},{f:"curl",t:20,dx:15,dy:30,dr:110},{f:"crouch",t:15,dx:15,dy:-10,dr:60}]}};var mrk={cs:"mmmm",f:{b:[-30,68,-1,67,27,68,-20,-53,0,-63,15,-53,-33,-53,0,-73,26,-54,-19,63,0,60,18,64],m:[-20,59,18,76,27,68,-7,-54,21,-66,21,-24,-21,-59,27,-71,26,-54,-2,50,9,62,14,48],q:[-20,74,0,84,19,72,-2,-27,42,-21,-1,9,-24,-77,-1,-76,27,-77,-3,29,3,21,-9,25]},a:{m:[{f:"m",dx:25,t:5},{f:"q",dx:20,t:10},{f:"q",dx:5,t:10},{f:"b",dx:0,t:5}],mu:[{f:"m",dx:25,dy:0,t:5},{f:"q",dx:20,dy:-70,t:10},{f:"q",dx:5,t:10},{f:"b",dx:0,t:5}],md:[{f:"m",dx:25,dy:0,t:5},{f:"b",dx:20,dy:70,t:10},{f:"q",dx:5,t:10},{f:"b",dx:0,t:5}],mz:[{f:"z",t:10,dx:50}],muz:[{f:"z",t:10,dx:50,dy:-70}],mdz:[{f:"z",t:10,dx:50,dy:70}],z:[{f:"z",dx:0,dy:0,t:5}]}};var hurdle={cs:"iiiiiii",f:{b:[24,20,39,31,56,35,14,-10,35,-6,60,8,21,45,23,21,22,-11,66,85,68,38,69,-8,59,5,59,45,58,62,15,42,40,52,60,63,13,-26,12,22,12,57],a:[24,20,35,18,52,20,14,-10,35,-6,54,-8,22,39,23,21,22,-11,66,85,68,38,69,-8,53,-9,52,17,44,43,15,42,34,41,50,37,13,-26,12,22,12,57]},a:{da:[{f:"b",t:400},{f:"a",t:200}]}};var hurdle2={cs:"iiiiii",f:{b:[39,63,42,34,47,-2,79,14,35,-14,19,-18,16,41,20,22,19,-19,66,85,68,38,70,8,53,70,56,38,57,6,29,51,31,25,33,-11]}};var cow={cs:"iiiiiiiij",f:{b:[56,33,71,37,74,24,41,1,-15,-9,-39,6,48,3,74,85,33,39,45,67,46,7,21,1,-49,7,-63,6,-61,29,-27,34,-39,30,-46,69,-57,68,-58,-2,-39,2,-8,33,37,21,32,69,53,55,60,57,58,62],a1:[52,11,65,16,70,1,41,1,-15,-9,-39,6,41,1,92,48,43,33,45,67,46,7,21,1,-49,7,-60,29,-69,29,-27,34,-39,30,-46,69,-57,68,-58,-2,-39,2,-8,33,37,21,32,69,60,35,67,40,67,47],a2:[56,18,72,23,70,9,41,-2,0,-9,-38,3,51,2,85,58,35,34,45,67,46,7,21,1,-49,7,-65,13,-61,25,-27,34,-39,30,-46,69,-57,68,-58,-2,-39,2,-8,33,37,21,32,69,57,39,53,46,59,41]},a:{da:[{f:"a1",t:50},{f:"a2",t:25},{f:"b",t:50}]}};var bhurdle={cs:"giiiijjkkkkkk",f:{b:[1,68,40,60,68,70,20,17,61,42,66,43,63,11,47,-2,19,-6,19,41,23,21,19,-6,62,81,68,38,63,9,25,-14,26,-16,27,-11,70,28,73,26,75,27,21,40,11,31,14,22,28,-16,30,-2,22,-14,27,-9,42,14,34,25,20,41,31,35,34,25,56,36,70,38,70,28,56,36,30,38,33,60],a:[1,68,40,60,68,70,20,17,61,42,66,43,63,11,47,-2,19,-6,19,41,23,21,19,-6,62,81,68,38,63,9,16,-17,15,-24,3,-23,80,3,76,6,76,15,21,40,2,27,29,10,18,-24,20,-11,11,-18,17,-16,37,2,34,25,20,41,31,35,34,25,76,13,87,40,63,40,64,40,37,28,33,60]},a:{da:[{f:"a",t:400}]}};var pcu={cs:"FD",f:{b:[0,70,20,75,50,68,1,140,13,105,0,68]},a:{}};var pcT={cs:"KKKKiij",f:{b:[10,-23,14,-31,11,-40,6,30,7,45,19,39,5,29,0,4,12,-22,18,-44,-1,-48,0,-69,-17,-39,2,-46,17,-39,-11,-23,1,-12,12,-23,1,-19,3,-38,-3,-21],a:[10,-23,14,-31,11,-40,6,30,7,45,19,39,5,29,0,4,12,-22,18,-44,-1,-48,0,-69,-17,-39,2,-46,17,-39,-11,-23,1,-12,12,-23,-1,-19,0,-29,3,-29]},a:{da:[{f:"a",t:30},{f:"b",t:30}]}};var bud={cs:"KKKKKijEE",f:{b:[7,-80,1,-74,2,-90,93,1,120,65,59,69,39,4,52,-32,24,-78,1,-100,37,-65,-4,-57,0,-51,40,-22,21,-76,-85,2,0,7,93,1,5,-68,0,-64,-6,-70,-100,65,-75,75,-50,80,50,80,75,70,100,70],a:[7,-85,1,-74,3,-89,93,1,120,65,59,69,39,4,52,-32,24,-78,1,-100,37,-65,-4,-57,0,-51,40,-22,21,-76,-85,2,0,7,93,1,5,-68,1,-73,-7,-74,-100,65,-75,75,-50,80,50,80,75,70,100,70]},a:{da:[{f:"a",t:80},{f:"b",t:20}]}};var stat={cs:"KKKK",f:{b:[22,97,34,75,9,48,-12,92,24,47,20,100,0,14,1,32,15,34,2,38,29,27,-3,54]}};var monk={cs:"wbtttt",f:{b:[48,18,61,21,51,1,58,25,50,65,49,28,61,1,49,8,41,-4,58,67,52,-31,37,67,10,68,23,54,57,67,44,25,50,8,42,-2],a:[48,18,62,22,51,1,66,33,50,65,50,23,62,6,49,8,47,-5,58,67,52,-31,37,67,10,68,23,54,57,67,44,25,50,8,46,-4]},a:{da:[{f:"a",t:120}]}};var dog={cs:"gwwwititiiiijw",f:{b:[51,70,0,78,-53,70,42,69,47,53,48,44,55,69,52,61,56,49,48,11,48,26,53,24,-15,58,-4,49,0,74,57,32,65,-2,45,8,3,25,30,27,0,9,60,54,44,-3,43,52,-22,71,-14,0,-1,11,-31,36,-51,35,-22,73,21,67,-5,70,1,27,-4,14,-4,8,-2,2,24,30,20,20,12,22,48,29,27,20,25,35],a1:[51,70,0,78,-53,70,42,69,43,57,48,44,55,69,60,61,56,49,46,11,43,24,53,24,-15,58,-4,49,0,74,57,32,65,-2,43,11,3,25,30,33,0,9,60,54,44,-3,43,52,-22,71,-14,0,-1,11,-54,49,-36,40,-22,73,21,67,-5,70,1,27,-4,14,-4,8,-2,2,23,34,16,37,13,26,48,29,22,25,25,35],a2:[51,70,0,78,-53,70,42,69,43,57,48,44,55,69,60,61,56,49,46,11,43,24,53,24,-15,58,-4,49,0,74,57,32,65,-2,43,11,3,25,30,33,0,9,60,54,44,-3,43,52,-22,71,-14,0,-1,11,-54,49,-36,40,-22,73,21,67,-5,70,1,27,-4,14,-4,8,-2,2,23,34,16,37,13,26,48,29,22,25,25,35]},a:{da:[{f:"a1",t:40},{f:"a2",t:20},{f:"b",t:20},{f:"a2",t:40},{f:"b",t:20}]}};var bloom={cs:"kkkjkkj",f:{b:[3,28,-3,10,5,-6,0,27,-4,21,-19,7,2,29,-1,14,5,-4,7,-10,8,-12,11,-16,11,-12,3,-1,5,-15,-18,7,-1,9,1,27,6,-11,4,-19,8,-13],a:[3,28,4,-6,12,-13,0,27,-11,6,-32,4,2,29,-1,14,13,-14,14,-16,16,-23,25,-26,28,-22,11,-2,4,-28,-32,4,-3,-10,1,27,11,-19,10,-25,16,-31]},a:{da:[{f:"a",t:100}]}};var tree={cs:"KKKKKKjj",f:{b:[4,45,-1,0,30,-46,24,2,17,-15,48,-41,37,-2,61,13,67,3,4,22,13,0,66,-7,2,44,-8,-42,7,-67,16,-23,8,-30,18,-62,64,13,67,9,65,5,-30,-36,-34,-39,-29,-45]}};var sl={cs:"F",f:{b:[0,70,20,57,50,73]}};var sl2={cs:"FF",f:{b:[0,70,20,57,50,72,-50,68,-25,68,0,70]}};var gl={cs:"gg",f:{b:[-3,70,10,60,51,73,45,70,40,80,5,73]}};var gu={cs:"gD",f:{b:[0,70,20,75,50,68,1,140,13,105,0,68]},a:{}};var gd={cs:"gg",f:{b:[5,50,21,70,51,70,1,1,-1,54,12,68]},a:{}};var gl2={cs:"ggg",f:{b:[-50,70,0,77,50,73,-45,70,-25,70,0,70,0,70,25,70,45,70]}};var tl={cs:"E",f:{b:[0,70,25,68,50,70]}};var tl2={cs:"EE",f:{b:[-50,70,25,68,50,70,-25,70,0,55,25,70]}};var tu={cs:"EEE",f:{b:[-20,110,-10,110,0,110,-10,90,-5,90,10,90,50,70,5,60,2,72]}};var td={cs:"EEE",f:{b:[18,66,41,64,51,70,0,42,0,65,20,67,1,1,-1,32,0,44]}};var rl={cs:"rKK",f:{b:[0,70,11,62,60,70,9,-166,50,-146,89,-167,0,-195,22,-100,150,0]}};var rlc={cs:"rKK",f:{b:[0,70,11,62,60,70,10,22,26,42,15,58,0,29,19,22,0,14]}};var ru={cs:"rr",f:{b:[-35,140,-10,130,3,60,56,72,22,68,1,70]}};var rd={cs:"rr",f:{b:[18,66,41,64,51,70,0,-2,-3,69,30,65]}};var sl_low={cs:"Fir",f:{b:[0,140,20,137,50,140,46,71,59,92,38,143,36,59,39,71,55,70]}};var sl_down={cs:"Fir",f:{b:[-39,74,-15,60,51,70,-5,1,-1,54,-11,67,-1,0,13,1,6,-12]},a:{}};(()=>{let argToElements=function(src){if(typeof src==="string"){const tagName=/^<(\w+)>$/.exec(src);if(tagName!==null){if(["path","g","svg"].includes(tagName[1]))return[document.createElementNS("http://www.w3.org/2000/svg",tagName[1])];return[document.createElement(tagName[1])]}else{return[...document.querySelectorAll(src)]}}else if(src instanceof HTMLElement){return[src]}else if(Array.isArray(src)){const elems=[];src.forEach((i=>elems.push(...argToElements(i))));return elems}else if("isFemtoJS"in src){return src.sel()}throw TypeError("Expected string | HTMLElement | Array | femtoJS,"+" got "+typeof src)};const $=function(...src){let sel=argToElements(src);let iter=sel.forEach.bind(sel);let insertToAdjacent=s=>function(e){iter(((j,i)=>i===0?e instanceof HTMLElement?e.insertAdjacentElement(s,j):e.sel()[0].insertAdjacentElement(s,j):sel[0].insertAdjacentElement("afterend",j)));return this};let insertAdjacent=s=>function(sOrE){if(typeof sOrE!=="string"){if(sOrE instanceof HTMLElement){sel[0].insertAdjacentElement(s,sOrE)}else if("isFemtoJS"in sOrE){const osel=sOrE.sel();sel[0].insertAdjacentElement(s,osel[0]);for(let i=1;i<osel.length;i++){osel[0].insertAdjacentElement("afterend",osel[i])}}}else{sel[0].insertAdjacentHTML(s,sOrE)}return this};return{on:function(type,fn){iter((i=>i.addEventListener(type,fn,false)));return this},css:function(s){iter((i=>i.style.cssText+=s));return this},html:function(h){iter((i=>i.innerHTML=h));return this},text:function(t){iter((i=>i.innerText=t));return this},textC:function(t){iter((i=>i.textContent=t));return this},addClass:function(t){iter((i=>i.classList.add(t)));return this},addClasses:function(l){l?.split(" ").forEach((t=>{iter((i=>i.classList.toggle(t,true)))}));return this},emptyClass:function(){iter((i=>i.className=""));return this},toggleClass:function(t,v){iter((i=>i.classList.toggle(t,v)));return this},removeClass:function(t){iter((i=>i.classList.remove(t)));return this},empty:function(){iter((i=>i.innerHTML=""));return this},attr:function(k,v){iter((i=>i.setAttribute(k,v)));return this},removeAttr:function(k){iter((i=>i.removeAttribute(k)));return this},parent:function(){iter(((e,i)=>{sel[i]=e.parentNode}));return this},remove:function(){iter((i=>i.remove()));return this},before:insertAdjacent("beforebegin"),after:insertAdjacent("afterend"),first:insertAdjacent("afterbegin"),last:insertAdjacent("beforeend"),insertBefore:insertToAdjacent("beforebegin"),insertAfter:insertToAdjacent("afterend"),insertFirst:insertToAdjacent("afterbegin"),insertLast:insertToAdjacent("beforeend"),prepend:insertAdjacent("afterbegin"),append:insertAdjacent("beforeend"),getAttr:v=>sel[0].getAttribute(v),value:()=>sel[0].value,setValue:v=>sel[0].value=v,offset:()=>sel[0].getBoundingClientRect(),sel:()=>sel,isFemtoJS:true}};$.fragment=()=>$(document.createDocumentFragment());window.$=$})();function start(){}function startLev(l){ae.clk(400);document.documentElement.requestFullscreen();switch(l){case 0:$("#rendertarget").attr("viewBox","-1200 -300 1200 300");break;case 1:startWorld("ggFGHGFGGhGggggUGggiicGgtGUgtGHGDgDtGggiicGDgggiicGUUTGHGDtGtGHGFGDDTGtGTG");break;case 2:startWorld("ggHGTGtGtGTGgghSsTSjjJBJsssTSTSmSssmSDsmSsmSDssmSsmSDmSsrrrTSmSjjJBJmSssRRRTSjjJBJmSTSRmSTSkSggtGtGtG");break;case 3:startWorld("llTLkLlYxyyXzzZllWXxyzxZDggFGHGgggiCgtGggHDYxXxxzZlTLlhLdllulluuTLlYxXyyXzzZllkLTLDDgggiCgglTLTL");break}}function buildPathElement(base,cls,si){let el=$("<path>").addClass(cls);let rf=getRenderFunction(cls);let chn;base.append(el);if(getRenderFunction(cls+"x"))chn=buildPathElement(base,cls+"x",si);return dp=>{el.attr("d",rf(dp[si],dp[si+1],dp[si+2],dp[si+3],dp[si+4],dp[si+5]));if(chn)chn(dp)}}function makeSprite(conf,base,x=0,y=0,r=0,noAction=null){if(!conf.f.z){conf.f.z=conf.f.b.map(((v,i,a)=>a[i-i%6+i%2]));if(!conf.a)conf.a={};conf.a.zb=[{f:"b",t:80}]}let gbase=$("<g>").addClass("sprite");base.prepend(gbase);let curves=[...conf.cs].map(((v,i)=>buildPathElement(gbase,v,i*6)));let aQ=[];let current=null;let lP=conf.f.b;let lF="z";let set=(d,nx,ny,nr=0)=>{lP=d;x=nx;y=ny;r=nr;gbase.attr("transform",`translate(${x},${y}) rotate(${r})`);curves.forEach((c=>c(d)))};set(conf.f.z,x,y);let sprite={x:()=>x,y:()=>y,r:()=>r,f:()=>lF,kill:()=>gbase.remove(),base:()=>gbase,setF:(fn,x,y,r)=>set(conf.f[fn],x,y,r),addA:an=>{aQ=[...aQ,...conf.a[an]]},tick:t=>{if(!current){if(!aQ.length){noAction?.(sprite);if(!aQ.length)return}let n=aQ.shift();current={sX:x,eX:x+(n.dx?n.dx:0),sY:y,eY:y+(n.dy?n.dy:0),sR:r,eR:r+(n.dr?n.dr:0),sD:lP,eD:conf.f[n.f],t:0,fT:n.t};lF=n.f}let rat=current.t/current.fT;if(rat>1)rat=1;let nx=inter(current.sX,current.eX,rat);let ny=inter(current.sY,current.eY,rat);let nr=inter(current.sR,current.eR,rat);set(intA(current.sD,current.eD,rat),nx,ny,nr);current.t+=t;if(rat==1)current=null}};return sprite}var ccls="wbaaffwbwbaawb";function setRender(){var base=$("#rendertarget").empty();buildSpriteElement(base,ccls)(initConfig,0,0)}function inter(a,b,r){return b*r+a*(1-r)}function intA(a,b,r){return a.map(((e,i)=>inter(a[i],b[i],r)))}function getRenderFunction(cls){switch(cls){case"s":return(x1,y1,x2,y2,x3,y3)=>`M ${x1} ${y1} Q ${x2} ${y2} ${x3} ${y3}`;case"tx":case"f":return(x1,y1,x2,y2,x3,y3)=>`M ${x1} ${y1} Q ${x2} ${y2} ${x3} ${y3} Z`;case"a":return createBSR(6,3,2);case"b":return createBSR(7,2,6);case"t":return createBSR(6,3,2);case"j":return createBSR(3,2,1);case"k":return createBSR(3,2,1);case"K":return createXMir(createBSR(3,2,1));case"i":return createBSR(4,3,1);case"w":return createBSR(4,3,1);case"d":case"D":return createCSR(25,25);case"Dx":return createOffsetB(-25,-25,createCSR(5,-5));case"Dxx":return createOffsetB(25,25,createCSR(5,-5));case"Fx":return createCSR(25,25);case"F":return createOffsetB(-25,-30,createCSR(5,-5));case"Fxx":return createOffsetB(25,225,createCSR(0,200));case"Fxxx":return createOffsetB(25,20,createCSR(5,-5));case"m":return createCSR(-2,3);case"E":return createCSR(25,25);case"g":return createVariantB(5,20,5,createCSR(25,25));case"gx":return createVariantB(10,20,10,createBSR(5,6,2));case"r":return createCSR(5,8)}return null}function norms(x1,y1,x2,y2){let x=x2-x1;let y=y2-y1;let n=Math.sqrt(x*x+y*y);if(n==0)return{x:0,y:0,nx:0,ny:0};x/=n;y/=n;return{x:x,y:y,nx:-y,ny:x}}function createBSR(w1,w2,w3){return(x1,y1,x2,y2,x3,y3)=>{let l=norms(x1,y1,x3,y3),l1=norms(x1,y1,x2,y2),l2=norms(x2,y2,x3,y3);return`M ${x1-l1.nx*w1} ${y1-l1.ny*w1} Q ${x2-l.nx*w2} ${y2-l.ny*w2} ${x3-l2.nx*w3} ${y3-l2.ny*w3}`+`Q ${x3+l2.x*w3} ${y3+l2.y*w3} ${x3+l2.nx*w3} ${y3+l2.ny*w3} `+`Q ${x2+l.nx*w2} ${y2+l.ny*w2} ${x1+l1.nx*w1} ${y1+l1.ny*w1} `+`Q ${x1-l1.x*w1} ${y1-l1.y*w1} ${x1-l1.nx*w1} ${y1-l1.ny*w1}`}}function createOffsetB(x,y,bf){return(x1,y1,x2,y2,x3,y3)=>bf(x1+x,y1+y,x2+x,y2+y,x3+x,y3+y)}function createXMir(bf){return(x1,y1,x2,y2,x3,y3)=>bf(x1,y1,x2,y2,x3,y3)+bf(-x1,y1,-x2,y2,-x3,y3)}function createVariantB(v1,v2,v3,bf){let v1x=v1*(-.5+Math.random());let v1y=v1*(-.5+Math.random());let v2x=v2*(-.5+Math.random());let v2y=v2*(-.5+Math.random());let v3x=v3*(-.5+Math.random());let v3y=v3*(-.5+Math.random());return(x1,y1,x2,y2,x3,y3)=>bf(x1+v1x,y1+v1y,x2+v2x,y2+v2y,x3+v3x,y3+v3y)}function createCSR(x,y){return(x1,y1,x2,y2,x3,y3)=>`M ${x1-x} ${y1-y} Q ${x2-x} ${y2-y} ${x3-x} ${y3-y}`+`L ${x3+x} ${y3+y}  `+`Q ${x2+x} ${y2+y} ${x1+x} ${y1+y} Z`}bits={l:{y:0,b:0,s:sl},L:{y:0,b:0,s:sl2},T:{y:0,b:0,s:pcT},u:{y:-1,b:0,s:pcu},d:{y:1,b:0,s:sl},h:{y:0,b:1,s:hurdle},H:{y:0,b:1,s:bhurdle},k:{y:0,b:1,s:hurdle2},i:{y:0,b:1,s:gl},g:{y:0,b:0,s:gl},G:{y:0,b:0,s:gl2},U:{y:-1,b:0,s:gu},D:{y:1,b:0,s:gd},F:{y:0,b:0,s:bloom},t:{y:0,b:0,s:tree},c:{y:0,b:1,s:cow},C:{y:0,b:1,s:dog},s:{y:0,b:0,s:tl},j:{y:0,b:1,s:tl},J:{y:0,b:1,s:stat},S:{y:0,b:0,s:tl2},m:{y:0,b:1,s:monk},B:{y:0,b:1,s:bud},r:{y:-1,b:0,s:tu},R:{y:1,b:0,s:td},x:{y:0,b:0,s:rl},X:{y:0,b:0,s:rlc},y:{y:-1,b:0,s:ru},Y:{y:0,b:0,s:sl_low},W:{y:0,b:0,s:sl_low},z:{y:1,b:0,s:rd},Z:{y:1,b:0,s:sl_down}};acts=[{a:"hop",y0:0,y:-1,spd:50,stl:60,s:1,fa:["run","run2","hop","drop","climb","groll2","vaultdown","vaultr","rolldown"],mm:-20},{a:"jump",y0:0,y1:5,y:-1,spd:70,stl:75,s:1,fa:["run","run2","groll2","vaultdown","vaultr"],mm:-80},{a:"vjump",y0:0,y1:5,y:-1,spd:70,stl:100,s:1,fa:["vaultup","vaulth"],mm:-90},{a:"vaultup",y0:0,y1:-1,y:-1,spd:90,stl:80,s:2,fa:["run","run2","hop","drop","climb","vaultdown","vaultr","rolldown","groll2"],mm:-20},{a:"vaulth",y0:0,y1:0,y:0,spd:100,stl:100,s:2,fa:["vaultup","vaulth"],mm:80},{a:"toe",y1:6,y:1,spd:70,stl:100,s:2,fa:["fly2","hop","rollfly2","toe","fall"],mm:20},{a:"tfly",y1:5,y:0,spd:90,stl:100,s:2,fa:["jump","vjump"],mm:50},{a:"groll",y0:0,y1:0,y:0,spd:90,stl:70,s:3,fa:["run","run2","hop","drop","climb","groll2","rolldown","vaultdown"],mm:40},{a:"rolldown",y0:0,y1:6,y:1,spd:100,stl:90,s:3,fa:["run","run2","hop","drop","rolldown"],mm:80},{a:"rollfly",y1:5,y:0,spd:90,stl:100,s:3,fa:["jump","vjump"],mm:-40},{a:"droproll",y0:6,y1:1,y:1,spd:90,stl:80,s:3,fa:["fly2","rollfly2","fall","hop","toe","groll2"],mm:50},{a:"fall",y1:6,y:1,spd:100,stl:70,s:0},{a:"drop",y1:1,y:1,spd:90,stl:60,s:0},{a:"climb",y0:0,y1:-1,y:-1,spd:30,stl:25,s:0},{a:"run",y0:0,y1:0,y:0,spd:80,stl:40,s:0},{a:"run2",y0:0,y1:0,y:0,spd:80,stl:35,s:0,fa:["run"]},{a:"crashclimb",y0:6,y1:0,spd:10,stl:5,y:0,s:0,mm:100},{a:"fly",y1:5,y:0,spd:90,stl:80,s:0,fa:["jump","vjump"],mm:-20},{a:"fly2",y1:5,y:0,spd:70,stl:80,s:0,fa:["fly","tfly"],mm:-30},{a:"rollfly2",y1:5,y:0,spd:70,stl:100,s:0,fa:["rollfly"],mm:-60},{a:"flycatch",y1:-1,y:-1,spd:60,stl:50,s:0,fa:["fly","tfly"]},{a:"rollflycatch",y1:-1,y:-1,spd:60,stl:50,s:0,fa:["rollfly"]},{a:"vaultdown",y0:0,y1:1,y:1,spd:100,stl:80,s:0,fa:["vaultup","vaulth"]},{a:"vaultr",y0:0,y1:0,y:0,spd:70,stl:50,s:0,fa:["vaultup","vaulth"]},{a:"vclimb",y0:0,y1:-1,y:-1,spd:10,stl:10,s:0,fa:["vaultup","vaulth"],mm:-80},{a:"groll2",y0:0,y1:5,y:0,spd:80,stl:90,s:0,fa:["groll","droproll"]},{a:"grollcrash",y0:0,y1:-1,y:-1,spd:10,stl:10,s:0,fa:["groll","droproll"],mm:100}];function startWorld(wld_s){let tf;let base=$("#rendertarget");let s_lst=[];let t_h=[];let wld_l=wld_s.length;$(".sprite").remove();let add=(sp,x,y,noA)=>{let rd=makeSprite(sp,base,x,y,0,noA);s_lst.push(rd);return rd};let addT=s=>{let a=[...s].map((c=>bits[c]));let yp=0;a.forEach(((b,xp)=>{yp+=b.y;let ts=add(b.s,xp*50,yp*70,(s=>{if(s.f()=="z"&&s.x()<rd.x()+420){s.addA("zb")}if(b.s.a.da){if(s.f()=="b"&&s.x()<rd.x()+120&&s.x()>rd.x()-200)s.addA("da")}}));t_h[xp]=t_h[xp]<yp?t_h[xp]:yp;t_h[xp+1]=yp-b.b}))};let vpm=0;let vpt=0;let rdxp=0;let rdyp=0;let spd=50;let dspd=0;let stl=0;let t_spd=0;let t_stl=0;let dstl=0;let lastA=null;let m_mod=0;let test_y=(cond,actual)=>{if(cond==null)return true;if(Math.abs(cond)<2)return cond==actual;if(cond==5)return actual>=0;if(cond==-5)return actual<=0;if(cond==6)return actual>=1;if(cond==-6)return actual<=1;throw"bad condition"};let canDoAction=a=>{let y0=t_h[rdxp]-rdyp;let y1=t_h[rdxp+1]-rdyp;if(a.fa&&!a.fa.includes(lastA))return false;return test_y(a.y0,y0)&&test_y(a.y1,y1)};let chooseNextAnimation=()=>{let cai=ctrl.get();let na=null;if(cai>=0){na=acts[cai];let lt=dude.a[na.a].reduce(((a,v)=>a+v.t),0);rdxp+=1;rdyp+=na.y;lastA=na.a;dspd=(na.spd-spd)/lt/2;dstl=((na.stl||0)-stl)/lt/2;t_spd+=spd;t_stl+=stl;rd.addA(na.a);m_mod=na.mm||0;if(rdxp>=wld_l){ctrl.set([0]);vpm=2;vpt=0;$("#spdf").textC(`Speed Rating ${Math.floor(t_spd/wld_l)}%`);$("#stlf").textC(`Style Rating ${Math.floor(t_stl/wld_l)}%`)}}let sa=acts.reduce(((a,ac,ai)=>{if(canDoAction(ac))a[ac.s]=ai;return a}),[]);if(vpm<2){let any=ctrl.set(sa);if(na)mk.addA((na.y?na.y>0?"md":"mu":"m")+(any?"":"z"))}};var ctrl=makeController(acts,(()=>mk.addA("z")));let mk=add(mrk,25,0);let rd=add(dude,0,0,chooseNextAnimation);rd.addA("zb");addT(wld_s);let pn=()=>{ae.note(-rd.y()/35,m_mod);if(vpm<2)setTimeout(pn,1e3-spd*6)};pn();let lt=0;let abTT=0;tick=tm=>{let t=tm-lt;if(lt==0)t=0;if(t>100)t=100;lt=tm;tf=.02+.05*spd/100;abTT+=t*tf;if(vpm<2){s_lst.forEach((s=>s.tick(t*tf)));spd+=dspd*t*tf;$("#spd").text(`Speed\n ${Math.floor(spd)}%`);stl+=dstl*t*tf;$("#stl").text(`Style\n ${Math.floor(stl)}%`)}else if(vpm==2){$("#spd").text("");$("#stl").text("")}if(vpm==0){let r=vpt/1e3;if(r>=1)vpm=1;base.attr("viewBox",`${inter(-1200,rd.x()-200,r)} ${inter(-300,rd.y()-150,r)} ${inter(1200,800,r)} 300`);vpt+=t}else if(vpm==1)base.attr("viewBox",`${rd.x()-200} ${rd.y()-150} 800 300`);else if(vpm==2){let r=vpt/8e3;if(r>=1){vpm=3;vpt=0}base.attr("viewBox",`${inter(rd.x()-200,0,r)} ${inter(rd.y()-150,-150,r)} ${inter(800,2e3,r)} 300`);vpt+=t}else if(vpm==3){let r=vpt/2e3;if(r>=1)vpm=4;base.attr("viewBox",`${inter(0,-1200,r)} ${inter(-150,300,r)} ${inter(2e3,1200,r)} 300`);vpt+=t}if(vpm<4)requestAnimationFrame(tick)};requestAnimationFrame(tick)}