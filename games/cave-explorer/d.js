eval('M=Math;W=window;D=document;und="undefined";~ clamp(d,a,b){^ d<a?a:d>b?b:d}~ cw(d,a,b,c){^ M.sqrt((b-d)*(b-d)+(c-a)*(c-a))}keys={};cv=0;cu=[];for(i=i=ev_co=0;255>i;i++)keys[i]=[0,0,1,0];addEventListener("keydown",~(d){d=d||W.ev;d=d.keyCode;keys[d][3]||(keys[d][0]=1,keys[d][2]=0,keys[d][3]=!0)},!1);addEventListener("keyup",~(d){d=d||W.ev;d=d.keyCode;keys[d][1]=1;keys[d][3]=!1;keys[d][2]=1},!1);ci_cu=~(){for(var d=ev_co-1;0<=d;d--){var a=cv-cu[d].start+1,b=cu[d].time+(0<cu[d].cr?M.floor(M.random()*cu[d].cr):0);0==parseInt(a)%parseInt(b)&&(cu[d].cq(),0<cu[d].cp&&(cu[d].co++,cu[d].co>=cu[d].cp&&(cu[d]=cu[ev_co-1],ev_co--)))}cv++};on__4=~(d,a,b,c){cu[ev_co]={start:cv,time:d,_4_var:a,cp:b,co:0,cq:c};ev_co++};W.cl=~(d){d=~(a){@.$=a.$||D.createElement("$");@.ctx=a.context||@.$.getContext("2d",{antialias:!1});@.Q=a.Q||(a.image?a.image.Q:640);@.\\=a.\\||(a.image?a.image.\\:480);@.$.Q=@.Q;@.$.\\=@.\\;a.image?(a.image instanceof Image?@.ctx.drawImage(a.image,0,0):@.ctx.drawImage(a.image.$,0,0),@.data=@.ctx.getImageData(0,0,@.Q,@.\\)):@.data=@.ctx.createImageData(@.Q,@.\\);^ @};d.`.g=~(a,b){var c=@.data.data;a=M.floor(a);b=M.floor(b);if(0>a||0>b||a>@.data.Q||b>@.data.\\)^[0,0,0,0];var d=4*(b*@.data.Q+a);^[c[d],c[d+1],c[d+2],c[d+3]]};d.`.s=~(a,b,c,d,f,e){var g=@.data.data;a=M.floor(a);b=M.floor(b);var h="array"==typeof c||"object"==typeof c;d=h?c[1]:d;f=h?c[2]:f;e=h?c[3]:e;a=4*(b*@.data.Q+a);g[a]=h?c[0]:c;g[a+1]=d;g[a+2]=f;g[a+3]=e};d.`.ci=~(){@.ctx.putImageData(@.data,0,0)};d.`.ch=~(a){var b=@.data.data,c=1-a,d=M.round(3.73*@.Q),f=Array(d),e;for(e=0;e<d;e++)f[e]=M.random()*a+c;e=0;for(il=b.length;e<il;e+=4)0<b[e]&&(b[e+0]=b[e+0]*f[e%d]|0,b[e+1]=b[e+1]*f[e%d]|0,b[e+2]=b[e+2]*f[e%d]|0);@.ci()};d.`.cd=~(){var a=new Image;a.src=@.$.toDataURL();^ a};^ d}(W.cl||{});W.Mask=~(d){d=~(a){@.create(a.Q,a.\\);^ @};d.`.create=~(a,b){var c;@.data=[];@.Q=a||640;@.\\=b||480;for(c=0;c<@.Q*@.\\;c++)@.data.push(0)};d.`.cc=~(a,b,c){@.create(a.Q,a.\\);var d=D.createElement("$"),f=d.getContext("2d",{antialias:!1});d.Q=a.Q;d.\\=a.\\;f.drawImage(a,0,0);for(var d=f.getImageData(0,0,a.Q,a.\\),e,f=0;f<a.\\;f++)for(e=0;e<a.Q;e++){var g=4*(f*a.Q+e),g=[d.data[g],d.data[g+1],d.data[g+2]].join(),h;for(h=0;h<b.length;h++)if(b[h].substring(0,g.length)==g){typeof c!=und?!0===c(@,e,f,h)&&@.s(e,f,h):@.s(e,f,h);break}}};d.`.cd=~(a){var b=D.createElement("$"),c=b.getContext("2d",{antialias:!1});b.Q=@.Q;b.\\=@.\\;var d=c.createImageData(@.Q,@.\\),f,e;for(f=0;f<@.\\;f++)for(e=0;e<@.Q;e++){var g=4*(f*@.Q+e),h=g,l=g+1,m=g+2,g=g+3,n=@.g(e,f),n=a[n];typeof n!=und&&(n=n.split(","),0<parseInt(n[3])&&(d.data[h]=parseInt(n[0]),d.data[l]=parseInt(n[1]),d.data[m]=parseInt(n[2]),d.data[g]=parseInt(n[3])))}c.clearRect(0,0,@.Q,@.\\);c.putImageData(d,0,0);a=new Image;a.src=b.toDataURL();^ a};d.`.g=~(a,b){a=M.floor(a);b=M.floor(b);^ @.data[a+b*@.Q]};d.`.s=~(a,b,c){a=M.floor(a);b=M.floor(b);@.data[a+b*@.Q]=c};^ d}(W.Mask||{});W.b0=~(d){d=~(a){var b=@.ctx;@.webgl=!1;@.data={};@.Q=a.Q||640;@.\\=a.\\||480;@.$=a.$||D.createElement("$");@.$.Q=@.Q;@.$.\\=@.\\;@.ctx=null;if(a.b9||!W.WebGLRenderingContext){b=@.ctx=@.$.getContext("2d",{antialias:!1});@.webgl=!1;@.font_bS=[];for(a=0;5>a;a++)for(b=0;5>b;b++)@.font_bS.push([b,a]);@.font_bTs={a:"0,1,2,3,4,5,9,10,11,12,13,14,15,19,20,24",b:"0,1,2,3,5,9,10,11,12,13,14,15,19,20,21,22,23",c:"0,1,2,3,4,5,10,15,20,21,22,23,24",d:"0,1,2,3,5,9,10,14,15,19,20,21,22,23",e:"0,1,2,3,4,5,10,11,12,13,15,20,21,22,23,24",f:"0,1,2,3,4,5,10,11,12,13,15,20",g:"0,1,2,3,4,5,10,12,13,14,15,19,20,21,22,23,24",h:"0,4,5,9,10,11,12,13,14,15,19,20,24",i:"0,1,2,3,4,7,12,17,20,21,22,23,24",j:"0,1,2,3,7,12,15,17,20,21,22",k:"0,3,5,7,10,11,15,17,20,23",l:"0,5,10,15,20,21,22,23",m:"0,4,5,6,8,9,10,12,14,15,19,20,24",n:"0,4,5,6,9,10,12,14,15,18,19,20,24",o:"0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24",p:"0,1,2,3,4,5,9,10,11,12,13,14,15,20",r:"0,1,2,3,4,5,9,10,11,12,13,14,15,18,20,24",s:"0,1,2,3,4,5,10,11,12,13,14,19,20,21,22,23,24",t:"0,1,2,3,4,7,12,17,22",u:"0,4,5,9,10,14,15,19,20,21,22,23,24",v:"0,4,5,9,11,13,16,18,22",w:"0,4,5,9,10,12,14,15,16,18,19,20,24",x:"0,4,6,8,12,16,18,20,24",y:"0,4,6,8,12,17,22",z:"0,1,2,3,4,8,12,16,20,21,22,23,24",0:"1,2,3,5,9,10,14,15,19,21,22,23",1:"1,2,7,12,17,22",2:"1,2,5,8,12,16,20,21,22,23",3:"0,1,2,3,8,11,12,13,18,20,21,22,23",4:"0,3,5,8,10,11,12,13,18,23",5:"1,2,3,5,10,11,12,13,18,20,21,22,23",6:"0,1,2,3,5,10,11,12,13,15,18,20,21,22,23",7:"0,1,2,3,8,12,16,20",8:"0,1,2,3,5,8,11,12,15,18,20,21,22,23",9:"0,1,2,3,5,8,10,11,12,13,18,20,21,22,23",".":"23","/":"3,7,12,17,21",_:"20,21,22,23,24"}}else @.ctx=@.$.getContext("webgl")||@.$.getContext("experimental-webgl"),null==@.ctx?(b=@.ctx=@.$.getContext("2d",{antialias:!1}),@.webgl=!1):(@.b6(),@.webgl=!0);^ @};d.`.b6=~(){var a=@.ctx;@.b5=@.ctx.createBuffer();@.texture=@.ctx.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,@.b5);a.bufferData(a.ARRAY_BUFFER,new Float32Array([1,1,0,0,1,0,1,0,0,0,0,0]),a.STATIC_DRAW);@.b5.co=4;@.b5.size=3;a.bindBuffer(a.ARRAY_BUFFER,@.texture);a.bufferData(a.ARRAY_BUFFER,new Float32Array([1,1,0,1,1,0,0,0]),a.STATIC_DRAW);@.texture.co=4;@.texture.size=2;var b=a.createShader(a.FRAGMENT_SHADER);a.shaderSource(b,"precision mediump float;varying vec2 vtc;uniform sampler2D us;void main(void){gl_FragColor=texture2D(us,vec2(vtc.s,vtc.t));}");a.compileShader(b);var c=a.createShader(a.VERTEX_SHADER);a.shaderSource(c,"attribute vec3 v;attribute vec2 tc;uniform mat4 mvm;uniform mat4 pm;varying vec2 vtc;void main(void){vtc=tc;gl_Position=pm*mvm*vec4(v,1.0);}");a.compileShader(c);@.sh=a.createProgram();a.attachShader(@.sh,b);a.attachShader(@.sh,c);a.linkProgram(@.sh);a.useProgram(@.sh);@.sh.vertexPositionAttribute=a.getAttribLocation(@.sh,"v");a.enableVertexAttribArray(@.sh.vertexPositionAttribute);@.sh.texCoordAttribute=a.getAttribLocation(@.sh,"tc");a.enableVertexAttribArray(@.sh.texCoordAttribute);@.sh.pMatrixUniform=a.getUniformLocation(@.sh,"pm");@.sh.mvMatrixUniform=a.getUniformLocation(@.sh,"mvm");@.b3=new Float32Array([2,0,0,0,0,-2,0,0,0,0,-1,0,-1,1,-0,1]);@.b2=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);a.bindBuffer(a.ARRAY_BUFFER,@.b5);a.vertexAttribPointer(@.sh.vertexPositionAttribute,@.b5.size,a.FLOAT,!1,0,0);a.bindBuffer(a.ARRAY_BUFFER,@.texture);a.vertexAttribPointer(@.sh.texCoordAttribute,@.texture.size,a.FLOAT,!1,0,0);a.uniformMatrix4fv(@.sh.pMatrixUniform,!1,@.b3);a.uniformMatrix4fv(@.sh.mvMatrixUniform,!1,@.b2);@.b1()};d.`.b1=~(){var a=@.ctx;@.texture=a.createTexture();a.bindTexture(a.TEXTURE_2D,@.texture);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.activeTexture(a.TEXTURE0);a.bindTexture(a.TEXTURE_2D,@.texture);a.uniform1i(a.getUniformLocation(@.sh,"us"),0)};d.`.bZ=~(a){var b=@.ctx;b.bindTexture(@.ctx.TEXTURE_2D,@.texture);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a)};d.`.bf_webgl_texture=~(a){var b=@.ctx;b.viewport(0,0,@.Q,@.\\);b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT);@.bZ(a);b.drawArrays(b.TRIANGLE_STRIP,0,@.b5.co)};d.`.clear=~(){var a=@.ctx;@.webgl?(a.clear(a.COLOR_BUFFER_BIT),a.clearColor(0,0,0,1)):(a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,@.$.Q,@.$.\\))};d.`.push=~(){@.ctx.save()};d.`.pop=~(){@.ctx.restore()};d.`.color=~(a){var b=@.ctx;b.fillStyle=a;b.strokeStyle=a};d.`.rect=~(a,b,c,d){@.ctx.fillRect(a,b,c||1,d||1)};d.`.line=~(a,b,c,d,f){var e=@.ctx;e.beginPath();e.moveTo(a,b);e.lineTo(c,d);e.lineWidth=f||1;e.closePath();e.stroke()};d.`.bX=~(a,b,c){var d=@.ctx;d.arc(a,b,c,0,2*M.PI,!1);d.fill()};d.`.bV=~(a,b,c,d,f){var e=0,g;c=c.toString().toLowerCase().split("");f=f||0;d=d||1;1==f?e=-(6*c.length*d-d)/2:2==f&&(e=-(6*c.length*d));e=M.floor(e);for(f=0;f<c.length;f++)if(g=c[f]," "!=g&&typeof @.font_bTs[g]!=und){g=@.font_bTs[g].split(",");for(var h=0;h<g.length;h++)@.rect(e+f*d+a+@.font_bS[g[h]][0]*d+5*f*d,b+@.font_bS[g[h]][1]*d,d,d)}};d.`.draw=~(a,b,c){var d=@.ctx;@.webgl?@.bf_webgl_texture(a):"object"==typeof a&&"~"==typeof a.ci?(a.ci(),d.drawImage(a.$,b||0,c||0,a.Q,a.\\)):d.drawImage(a,b||0,c||0,a.Q,a.\\)};d.`.bR=~(a,b,c,d,f,e,g,h){var l=@.ctx;h=h||!1;@.webgl||(e=a.Q/e,g=a.\\/g,h&&(l.save(),l.translate(a.Q,0),l.scale(-1,1)),"object"==typeof a&&"~"==typeof a.ci?(a.ci(),l.drawImage(a.$,d*e,f*g,e,g,b<<0,c<<0,e,g)):l.drawImage(a,d*e,f*g,e,g,(b*(h?-1:1)+(h?a.Q-e+1:0))<<0,c<<0,e,g),h&&l.restore())};d.`.translate=~(a,b){@.ctx.translate(a,b)};^ d}(W.b0||{});W.bK=~(d){d=~(a){@.el=a.el;@.fg=a.fg;@.mt=a.mt;@.mti=a.mti;@.Q=@.mt.Q||640;@.\\=@.mt.\\||480;@.fl=[];@.bJ=[];@.buffer=new Mask({Q:@.Q,\\:@.\\});@.bB_ind=@.mti;@.bG=@.flc=@.bH=0;@.bF=a.bF||1;for(a=0;a<@.Q;a++)for(var b=0;b<@.\\;b++)@.mt.g(a,b)==@.mti&&(@.mt.g(a+1,b)==@.mti&&@.mt.g(a-1,b)==@.mti&&@.mt.g(a,b+1)==@.mti?@.buffer.s(a,b,@.mti):(@.fl[@.flc]={x:a,y:b,dir:1,time:0,bE:-1,bA_all:!1,bC:@.mti,color:@.fg.g(a,b)},@.flc++)),10==@.mt.g(a,b)&&(@.bJ[@.bG]={x:a,y:b},@.mt.s(a,b,1),@.bG++);^ @};d.`.bB=~(a){@.buffer.s(@.fl[a].x,@.fl[a].y,@.bB_ind);@.fl[a]=@.fl[@.flc-1];@.flc--};d.`.bA=~(a){@.bm_hole(@.fl[a].x,@.fl[a].y);if(@.fl[a].bA_all||5!=@.mt.g(@.fl[a].x,@.fl[a].y))@.mt.s(@.fl[a].x,@.fl[a].y,0),@.fg.s(@.fl[a].x,@.fl[a].y,[0,0,0,0]);@.fl[a]=@.fl[@.flc-1];@.flc--};d.`.by=~(a,b){@.bm_hole(a,b);@.mt.s(a,b,0);@.fg.s(a,b,[0,0,0,0]);for(var c=0;c<@.flc;c++)if(@.fl[c].x==a&&@.fl[c].y==b){@.fl[c]=@.fl[@.flc-1];@.flc--;break}};d.`.bx=~(a,b,c){@.fl[a].bE=b;@.fl[a].bA_all=c||!1};d.`.create=~(a,b,c){@.buffer.s(a,b,1);@.fl[@.flc]={x:a,y:b,dir:c,time:0,bE:-1,bA_all:!1,bC:@.mti,color:@.fg.g(a,b)};@.flc++};d.`.bm_fl_=~(a,b,c){@.buffer.g(@.fl[c].x+a,@.fl[c].y+b)==@.bB_ind&&@.create(@.fl[c].x+a,@.fl[c].y+b,@.fl[c].dir)};d.`.bm_fl=~(a){@.bm_fl_(1,0,a);@.bm_fl_(-1,0,a);@.bm_fl_(0,-1,a)};d.`.bm_hole_=~(a,b){@.buffer.g(a,b)==@.bB_ind&&@.create(a,b,1)};d.`.bm_hole=~(a,b){@.bm_hole_(a+1,b);@.bm_hole_(a-1,b);@.bm_hole_(a,b-1)};d.`.ci=~(){var a,b,c,d=MIC.split(",");for(b=0;b<d.length;b++)d[b]=parseInt(d[b]);if(0<@.flc)for(a=@.flc-1;0<=a;a--){c=a;b=M.floor(20*M.random());if(0!=b)if(b=@.fl[c].y+1>@.mt.\\-1?-1:@.mt.g(@.fl[c].x,@.fl[c].y+1),5==b&&3==@.mti)b=M.floor(13*M.random()),@.bx(c,1),@.mt.s(@.fl[c].x,@.fl[c].y,5),@.fg.s(@.fl[c].x,@.fl[c].y,d[0]-b,d[1]-b,d[2]-b,d[3]),@.mt.s(@.fl[c].x,@.fl[c].y-1,5),@.fg.s(@.fl[c].x,@.fl[c].y-1,d[0]-b,d[1]-b,d[2]-b,d[3]);else if(4==b&&4==@.mti&&0<@.fl[c].bE)@.bx(c,3,!0);else if(4==b&&3==@.mti||3==b&&4==@.mti){for(b=0;b<@.el.fls.length;b++)@.el.fls[b].mti!=@.mti&&@.el.fls[b].by(@.fl[c].x,@.fl[c].y+1);@.el.hole(@.fl[c].x,@.fl[c].y+2,5,[0,3,4],2);@.bA(c)}else if(0==b)@.mt.s(@.fl[c].x,@.fl[c].y+1,@.mt.g(@.fl[c].x,@.fl[c].y)),@.mt.s(@.fl[c].x,@.fl[c].y,b),@.fl[c].bC=b,@.fg.s(@.fl[c].x,@.fl[c].y+1,@.fl[c].color[0],@.fl[c].color[1],@.fl[c].color[2],@.fl[c].color[3]),0==b&&@.fg.s(@.fl[c].x,@.fl[c].y,0,0,0,0),0!=b?(@.bA(c),@.el.hole(@.fl[c].x,@.fl[c].y+5,8,[3,4],2)):(@.bm_fl(c),@.fl[c].y++,@.fl[c].time=0);else if(b=@.fl[c].x+@.fl[c].dir>@.mt.Q-1?-1:0>@.fl[c].x+@.fl[c].dir?-1:@.mt.g(@.fl[c].x+@.fl[c].dir,@.fl[c].y),5==b&&3==@.mti)b=M.floor(13*M.random()),@.bx(c,1),@.mt.s(@.fl[c].x,@.fl[c].y,5),@.fg.s(@.fl[c].x,@.fl[c].y,d[0]-b,d[1]-b,d[2]-b,d[3]),@.mt.s(@.fl[c].x-@.fl[c].dir,@.fl[c].y,5),@.fg.s(@.fl[c].x-@.fl[c].dir,@.fl[c].y,d[0]-b,d[1]-b,d[2]-b,d[3]);else if(5==b&&4==@.mti)on__4(20,3,1,~(a,b,c){a.mt.s(b,c,0);a.fg.s(b,c,0,0,0,0);a.mt.s(b,c+1,0);a.fg.s(b,c+1,0,0,0,0);a.mt.s(b,c-1,0);a.fg.s(b,c-1,0,0,0,0)}.bind(@,@,@.fl[c].x,@.fl[c].y)),@.fl[c].x+=@.fl[c].dir,@.fl[c].time=0,@.bx(c,10,!0);else if(4==b&&3==@.mti||3==b&&4==@.mti){for(b=0;b<@.el.fls.length;b++)@.el.fls[b].mti!=@.mti&&@.el.fls[b].by(@.fl[c].x+@.fl[c].dir,@.fl[c].y);@.el.hole(@.fl[c].x+2*@.fl[c].dir,@.fl[c].y+5,8,[0,3,4],2);@.bA(c)}else if(0==b)@.mt.s(@.fl[c].x+@.fl[c].dir,@.fl[c].y,@.mt.g(@.fl[c].x,@.fl[c].y)),@.mt.s(@.fl[c].x,@.fl[c].y,b),@.fl[c].bC=b,@.fg.s(@.fl[c].x+@.fl[c].dir,@.fl[c].y,@.fl[c].color[0],@.fl[c].color[1],@.fl[c].color[2],@.fl[c].color[3]),0==b&&@.fg.s(@.fl[c].x,@.fl[c].y,0,0,0,0),0!==b?(@.bA(c),@.el.hole(@.fl[c].x+5*@.fl[c].dir,@.fl[c].y,5,[3,4],2)):(@.bm_fl(c),@.fl[c].x+=@.fl[c].dir,@.fl[c].time=0);else if(@.fl[c].dir*=-1,@.fl[c].time++,10<@.fl[c].time){var f;b=0;f=@.mt.g(@.fl[c].x+1,@.fl[c].y);0==f&&@.buffer.g(@.fl[c].x+1,@.fl[c].y)==@.bH&&(b=1);f=@.mt.g(@.fl[c].x-1,@.fl[c].y);0==f&&@.buffer.g(@.fl[c].x-1,@.fl[c].y)==@.bH&&(b=1);0==b?@.bB(c):@.fl[c].time=0}-1!=@.fl[c].bE&&(@.fl[c].bE--,0>=@.fl[c].bE&&@.bA(c))}for(a=@.bG-1;0<=a;a--)@.buffer.g(@.bJ[a].x,@.bJ[a].y)==@.bH&&(@.mt.s(@.bJ[a].x,@.bJ[a].y,@.mti),@.buffer.s(@.bJ[a].x,@.bJ[a].y,@.bB_ind),@.create(@.bJ[a].x,@.bJ[a].y,1))};^ d}(W.bK||{});W.br=~(d){d=~(a){@.els=[];@.bq=@.el=0;@.end=!1;a instanceof Array?(@.els=a,@.els[@.el]instanceof Image?@.image=@.els[@.el]:@.data=@.els[@.el]):typeof a.image!=und?@.image=a.image:@.data=a;typeof @.image!=und?(@.Q=@.image.Q,@.\\=@.image.\\):(@.Q=@.data.Q,@.\\=@.data.\\);@.bp();@.restart();^ @};d.`.bp=~(){var a=new b0({b9:!0,Q:@.Q+50,\\:@.\\+50});a.color("#413232");a.rect(0,0,@.Q+50,@.\\+50);a=new cl({image:a,Q:@.Q+50,\\:@.\\+50});a.ch(.1);prl=a.cd()};d.`.bm=~(a,b,c,d,f){var e=@.mt.g(a,b);if("object"==typeof c&&0<=c.indexOf(e)||c==e)for(@.mt.s(a,b,d),@.fg.s(a,b,MTC[d][0]-f,MTC[d][1]-f,MTC[d][2]-f,MTC[d][3]),c=0;c<@.fls.length;c++)@.fls[c].bm_hole(a,b)};d.`.hole=~(a,b,c,d,f){var e=c<<2>>1,g,h=e*e,l,m,n=1==(c&1)?e:e-2,p=2;a-=c>>1;b-=c>>1;for(var r=M.floor(15*M.random());;p+=4)for(g=(e-p)*(e-p);;n-=4)if(!(g+(e-n)*(e-n)<=h)){if(n<p){e=l=p>>2;for(g=c-l;l<g;){for(m=e;m<g;m++)@.bm(a+m,b+l,d,f,r);l++}^}m=(n>>2)+1;l=p>>2;g=c-m;for(var s=c-l-1;m<g;)@.bm(a+m,b+l,d,f,r),@.bm(a+m,b+s,d,f,r),@.bm(a+l,b+m,d,f,r),@.bm(a+s,b+m,d,f,r),m++;break}};d.`.ci=~(){if(!@.end){for(var a=0;a<@.fls.length;a++)@.fls[a].ci();null!=@.exit&&10>cw(@.exit[0],@.exit[1],pbe.x+pbe.vx,pbe.y+pbe.vy)&&(@.gold.length==pbe.gold?0==@.bq&&(msg="nice",msgt=180,0<@.els.length&&(@.bq=120)):(msg="get back and get more gold",msgt=180));0<@.bq&&(@.bq--,0==@.bq&&0<@.els.length&&(@.el++,@.el<@.els.length?(@.els[@.el]instanceof Image?@.image=@.els[@.el]:@.data=@.els[@.el],typeof @.image!=und?(@.Q=@.image.Q,@.\\=@.image.\\):(@.Q=@.data.Q,@.\\=@.data.\\),@.bp(),@.restart()):@.end=!0))}};d.`.bf=~(a){a.draw(@.fg)};d.`.restart=~(){var a=@;a.bq=0;bd=[];bc=0;a.Q=504;a.\\=418;typeof a.image!=und?(a.Q=a.image.Q,a.\\=a.image.\\):(a.Q=a.data.Q,a.\\=a.data.\\);a.bb=null;a.exit=null;a.gold=[];msgt=0;a.mt=new Mask({Q:a.Q,\\:a.\\});var b=~(b,c,d,g){^ 7==g?(a.bb=[c,d],!1):8==g?(a.exit=[c,d],!1):9==g?(a.gold.push([c,d]),!1):!0};typeof a.image!=und?a.mt.cc(a.image,_0,b):a.mt._9(a.data.data,a.Q,a.\\,b);for(b=0;b<a.gold.length;b++){var c=a.mt.g(a.gold[b][0],a.gold[b][1]-1);a.mt.s(a.gold[b][0],a.gold[b][1],c)}null!=a.bb&&pbe.bb(a.bb[0],a.bb[1]);null!=a.exit&&(bd[bc]=new _8({type:5,x:a.exit[0],y:a.exit[1]}),bc++);for(b=0;b<a.gold.length;b++)bd[bc]=new _8({type:4,x:a.gold[b][0],y:a.gold[b][1]}),bc++;b=a.mt.cd(_0);a.fg=new cl({image:b});a.fg.ch(.1);a.fls=[];c=[3,6,4];for(b=0;b<c.length;b++)a.fls.push(new bK({el:a,fg:a.fg,mt:a.mt,mti:c[b]}))};^ d}(W.br||{});W._8=~(d){d=~(a){@.x=a.x||0;@.y=a.y||0;@.vx=a.vx||0;@.vy=a.vy||0;@.type=a.type||0;@._6=!0;@.bE=a.bE||0;@._5=M.floor(M.random()*a._5)||0;@._4=0;^ @};d.`.ci=~(a){var b=M.floor(@.x+@.vx),c=M.floor(@.y+@.vy);if(0>b||0>c||b>a.Q-1||c>a.\\-1)@._6=!1;else{if(0==@.type){0==@._4%5&&shoot(@,3,3,2,.3,.5,0,30,180,4);var d=a.mt.g(b,c);if(1==d||2==d||5==d)@._6=!1,bd[bc]=new _8({type:1,x:@.x,y:@.y,bE:2}),bc++,c_time=c_time_max,a.hole(b,c,40,2,0)}else if(4==@.type)6>cw(b,c,pbe.x+pbe.vx,pbe.y+pbe.vy)&&(@._6=!1,pbe.gold++);else if(6==@.type){d=a.mt.g(b,c);if(1==d||2==d||5==d)@._6=!1,a.fg.s(b,c,214,0,0,255);@.vy+=.013}@.x+=@.vx;@.y+=@.vy;@._4++;3==@.type&&25<@._4&&(@._6=!1);0<@.bE&&@._4>=@.bE+@._5&&(@._6=!1)}};d.`.bf=~(a){var b=M.floor(@.x+@.vx),c=M.floor(@.y+@.vy);0==@.type?(a.color("#ffff00"),a.line(@.x,@.y,@.x-@.vx/2,@.y-@.vy/2,2),a.color("#727272"),a.line(@.x,@.y,@.x+@.vx,@.y+@.vy,2)):1==@.type?(a.color("#f1e99d"),a.bX(b,c,15)):2==@.type?(a.color("#ffff00"),a.rect(b,c,1,1)):3==@.type?(a.color("#_1"),a.rect(b,c,1,1)):4==@.type?(a.color("#ffff00"),a.rect(b-2,c-2,4,4)):5==@.type?(a.color("#262626"),a.rect(b-8,c-10,16,20)):6==@.type&&(a.color("#d60000"),a.rect(b,c,1,1))};^ d}(W._8||{});shoot=~(d,a,b,c,k,f,e,g,h,l){var m,n=typeof d.aimN!=und;if(n){if(!d._6)^;m=d.aimN}else m=-M.atan2(-d.vx,-d.vy)/M.PI*180;var p=d.x,r=d.y,s=d.vx,v=d.vy;b+=0<c?M.floor(M.random()*c):0;for(c=0;c<b;c++){var t=k+(0<f?M.floor(1E3*M.random()*f)/1E3:0),q=m+h-90,q=q+g/2-Math.floor(Math.random()*g),q=q/180*M.PI,u=M.cos(q)*(n?d.dir:1),q=M.sin(q);bd[bc]=new _8({x:p+u*l,y:r+q*l,vx:u*t+s*e,vy:q*t+v*e,type:a});bc++}};var MBC="0,0,0,0",MSC="93,56,11,255",MDC="156,93,18,255",MWC="38,160,199,100",MLC="207,69,19,200",MIC="196,246,255,128",MOC="30,30,30,255",MRC="0,255,0,255",MEC="0,0,255,255",MGC="255,255,0,255",MTC=[[0,0,0,0],[93,56,11,255],[156,93,18,255],[38,160,199,100],[207,69,19,200],[196,246,255,128],[30,30,30,255],[0,255,0,255],[0,0,255,255],[255,255,0,255]],_0=[MBC,MSC,MDC,MWC,MLC,MIC,MOC,MRC,MEC,MGC],J_COUNT=2,J_WIDTH=504,J_HEIGHT=418,J=new Image;J.src="a.png";var I=[],prl=new Image,H=new Image;H.src="b.png";var legs=new Image;legs.src="c.png";var G=0,F="explore caves0find all the gold and return00w/s aim0a/d walk0g shoot0h jetpack0r restart00gl hf".split(0),E="Unfortunately that is all...0I could not fit sounds or more levels0However it was fun to code00Made for js13k compo00Cheers0wesz".split(0),_D=[],C=0,B=30,bd=[],bc=0,msg="",msgt=0,c_=0,c_max=3,c_time=0,c_time_max=5,el,gl,fl,DOWN=0,LEFT=1,UP=2,_y=3,pbe={x:50,y:114,vx:0,vy:0,dir:1,bR:0,_x:[],w:!1,v:!1,u:!1,t:!1,s:0,aimN:90,r:!1,q:0,gold:0,_6:!0,p:0,o:[],chc:~(d,a,b){var c=0,k=0,f=0;switch(b){case DOWN:d+=-3;a+=-5;k=1;f=0;c=6;break;case LEFT:d+=3;a+=-4;k=0;f=1;c=8;break;case UP:d+=-3;a+=4;k=1;f=0;c=6;break;case _y:d+=-3,a+=-4,k=0,f=1,c=8}var e;for(@._x[b]=0;0<c;--c)e=el.mt.g(d,a),1!=e&&2!=e&&5!=e||++@._x[b],4!=e&&6!=e||@.die(),d+=k,a+=f},ci:~(){if(@._6&&!(0<el.bq)){var d=@.y+@.vy,a=parseInt(@.x+@.vx),b=parseInt(d);@.chc(a,b,DOWN);@.chc(a,b,LEFT);@.chc(a,b,UP);@.chc(a,b,_y);5>a?@._x[_y]+=5:a>el.Q-5&&(@._x[LEFT]+=5);5>b?@._x[DOWN]+=5:b>el.\\-5&&(@._x[UP]+=5);2>@._x[DOWN]&&0<@._x[UP]&&(0<@._x[LEFT]||0<@._x[_y])&&(@.y-=1,d-=1,b=parseInt(d),@.chc(a,b,LEFT),@.chc(a,b,_y));2>@._x[UP]&&0<@._x[DOWN]&&(0<@._x[LEFT]||0<@._x[_y])&&(@.y+=1,b=parseInt(d+1),@.chc(a,b,LEFT),@.chc(a,b,_y));1!=@._x[UP]&&1!=@._x[DOWN]||!(0<@._x[LEFT]||0<@._x[_y])||(@._x[UP]=0,@._x[DOWN]=0);d=el.mt.g(@.x,@.y);if(3==d){@.vx*=.96;@.vy*=.9;for(b=a=0;10>b;b++){d=el.mt.g(@.x,@.y+b);if(1==d||2==d||5==d)break;if(0==d){a=b;break}}0<a&&(@.vy+=.1)}0<@._x[UP]&&(@.vx*=.89);@.vx*=1;@.vy*=1;0<@.vx?0<@._x[LEFT]&&(@.vx=.1<@.vx?-.1*@.vx:0):0>@.vx&&0<@._x[_y]&&(@.vx=-.1>@.vx?-.1*@.vx:0);0<@.vy?0<@._x[UP]&&(@.vy=.1<@.vy?-.1*@.vy:0):0>@.vy&&0<@._x[DOWN]&&(@.vy=-.1>@.vy?-.1*@.vy:0);0==@._x[UP]&&(@.vy+=.0152);0<=@.vx?2>@._x[LEFT]&&(@.x+=@.vx):2>@._x[_y]&&(@.x+=@.vx);0<=@.vy?2>@._x[UP]&&(@.y+=@.vy):2>@._x[DOWN]&&(@.y+=@.vy);d=.065;0>=@._x[UP]&&(d*=.2);if(@.r){if(@.vy-=.05,@.q++,3<@.q){for(a=0;2>a;a++)bd[bc]=new _8({type:2,x:@.x+@.vx+-4*@.dir,y:@.y+@.vy+2,vx:M.random(),vy:.8,bE:5}),bc++;@.q=0}}else @.q=0;@.w&&!@.v?(-.8<@.vx&&(@.vx-=d),0<@.dir&&(@.dir=-1),@.g=!0):@.v&&!@.w?(.8>@.vx&&(@.vx+=d),0>@.dir&&(@.dir=1),@.g=!0):@.g=!1;@.s*=.7216;@.u&&(@.s-=.5);@.t&&(@.s+=.5);@.aimN+=@.s;0>@.aimN&&(@.s=@.aimN=0);180<@.aimN&&(@.aimN=180,@.s=0)}},bf:~(d){if(@._6&&!(0<el.bq)){var a=-1==@.dir?!0:!1,b=@.aimN/20;8<b&&(b=8);var c=pbe.aimN/180*M.PI+M.PI,k=M.floor(@.x+@.vx+-15*M.sin(c)*@.dir),c=M.floor(@.y+@.vy+15*M.cos(c));d.bR(H,@.x-4,@.y-6,parseInt(b),0,9,1,a);d.bR(legs,@.x-(a?0:3),@.y+1,@.bR,0,3,1,a);gl.color("#fff");gl.rect(k,c,1,1)}},bb:~(d,a){@.x=d;@.y=a;@.bR=@.vy=@.vx=0;@._x=[];@.t=@.u=@.v=@.w=!1;@.s=0;@.aimN=90;@.r=!1;@.gold=@.q=0;@._6=!0;@.p=0},die:~(){@._6&&(bd[bc]=new _8({type:1,x:@.x,y:@.y,bE:3}),bc++,shoot(@,6,30,20,.4,.3,0,360,0,2),c_time=c_time_max,@._6=!1,@.p=180)}};W.onload=~(){var d=new cl({image:J,Q:J_WIDTH,\\:J_HEIGHT}),a=[],b=[],c=[],k,f,e,g,h;for(k=0;k<J_COUNT;k++)a.push(new cl({Q:J_WIDTH,\\:J_HEIGHT})),b.push(0),c.push(0);for(k=0;k<J_WIDTH;k++)for(f=0;f<J_HEIGHT;f++)for(h=d.g(k,f),e=0;e<J_COUNT;e++)g=h[e],MTC[g]&&(a[e].s(k,f,MTC[g][0],MTC[g][1],MTC[g][2],255),0!=g&&(k>b[e]&&(b[e]=k),f>c[e]&&(c[e]=f)));for(k=0;k<J_COUNT;k++)a[k].$.Q=b[k],a[k].$.\\=c[k],a[k].ci(),I.push(a[k].cd());el=new br(I);gl=new b0({Q:320,\\:240,b9:!0});fl=new b0({Q:640,\\:480,$:D.getElementById("m"),b9:!1});gl.color("#ff0000");var l=0,m=0,n=0,p=~(){if(1==G){0==keys[65][2]?(pbe.w=!0,pbe.v=!1,0==n%5&&(pbe.bR++,2<pbe.bR&&(pbe.bR=0))):0==keys[68][2]?(pbe.w=!1,pbe.v=!0,0==n%5&&(pbe.bR++,2<pbe.bR&&(pbe.bR=0))):(pbe.w=!1,pbe.v=!1,pbe.bR=1);pbe.u=0==keys[87][2]?!0:!1;pbe.t=0==keys[83][2]?!0:!1;1==keys[71][0]&&shoot(pbe,0,1,0,3.3,0,.3,8,0,5);pbe.r=0==keys[72][2]?!0:!1;1==keys[82][0]&&el.restart();0>pbe.x&&(pbe.x=0);0>pbe.y&&(pbe.y=0);pbe.x>el.Q-1&&(pbe.x=el.Q-1);pbe.y>el.\\-1&&(pbe.y=el.\\-1);el.ci();pbe.ci();for(a=bc-1;0<=a;a--)bd[a].ci(el),bd[a]._6||(bd[a]=bd[bc-1],bc--);for(a=0;255>a;a++)keys[a][0]=0,keys[a][1]=0;n++}ci_cu();gl.clear();el.end&&0!=G&&(G=0,C=0,B=30,F=E,_D=[]);if(0==G){gl.color("#000000");gl.rect(0,0,320,240);0<B&&(B--,0==B&&(C>=F.length?(G=1,B=-1):(typeof _D[C]==und&&_D.push(""),_D[C]=F[C].substring(0,_D[C].length+1),_D[C].length==F[C].length?(C++,B=30):B=2,C>=F.length&&(B=120))));gl.color("#ffffff");for(var a=0;a<_D.length;a++)0<_D[a].length&&gl.bV(10,10+10*a,_D[a]);0==cv%5&&_D[C]&&gl.bV(10+6*_D[C].length,10*_D.length,"_")}else if(1==G){l=clamp(pbe.x,gl.Q/2,el.Q-gl.Q/2);m=clamp(pbe.y,gl.\\/2,el.\\-gl.\\/2);if(0<c_time){var b=c_time/c_time_max*c_max,a=-b+M.floor(2*M.random()*b),b=-b+M.floor(2*M.random()*b);c_time--;l+=a;m+=b}gl.push();gl.draw(prl,(-l+gl.Q/2)/(prl.Q-gl.Q)*(el.Q-gl.Q),(-m+gl.\\/2)*(prl.\\-gl.\\)/(el.\\-gl.\\));gl.translate(-l+gl.Q/2,-m+gl.\\/2);for(a=bc-1;0<=a;a--)bd[a].bf(gl);pbe.bf(gl);el.bf(gl);gl.pop();gl.color("#ffff00");gl.bV(5,5,pbe.gold+"/"+el.gold.length);gl.color("#ffffff");0<msgt&&(gl.bV(160,117,msg,1,1),msgt--)}fl.draw(gl.$);setTimeout(p,1E3/60)};setTimeout(p,1E3/60)};'.split('~').join('function').split('@').join('this').split('^').join('return').split('Q').join('width').split('\\').join('height').split('$').join('canvas').split('`').join('prototype'));
