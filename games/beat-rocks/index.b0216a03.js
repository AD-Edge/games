function e(e){return e&&e.__esModule?e.default:e}const o=document.getElementById("C").getContext("webgl"),t="precision mediump float;attribute vec3 Position,Normal;attribute float Side,Life;uniform vec2 Translation;uniform float Rotation,RotationY,RotationZ,Thickness,Scale;uniform vec3 Color;varying vec3 VColor;varying float VBar,VLife;varying vec2 VPos;mat4 rotationMatrix(vec3 axis,float angle){axis=normalize(axis);float s=sin(angle),c=cos(angle),oc=1.-c;return mat4(oc*axis.x*axis.x+c,oc*axis.x*axis.y-axis.z*s,oc*axis.z*axis.x+axis.y*s,0.,oc*axis.x*axis.y+axis.z*s,oc*axis.y*axis.y+c,oc*axis.y*axis.z-axis.x*s,0.,oc*axis.z*axis.x-axis.y*s,oc*axis.y*axis.z+axis.x*s,oc*axis.z*axis.z+c,0.,0.,0.,0.,1.);}vec3 rotate(vec3 v,vec3 axis,float angle){mat4 m=rotationMatrix(axis,angle);return (m*vec4(v,1.)).xyz;}void main(){vec3 pos=Position,norm=Normal;pos*=Scale;vec3 rotationAxis=vec3(1.,1.,.2);pos=rotate(pos,rotationAxis,Rotation),norm=rotate(norm,rotationAxis,Rotation);mat3 RY=mat3(cos(RotationY),0,-sin(RotationY),0,1,0,sin(RotationY),0,cos(RotationY));pos=RY*pos,norm=RY*norm;vec2 pos2d=pos.xy,norm2d=norm.xy,binormal=normalize(vec2(norm2d.y,-norm2d.x));float pseudoDepth=pos.z*7.,depthScaleFactor=pow(2.,pseudoDepth);pos2d*=depthScaleFactor,pos2d=pos2d+binormal*Side*Thickness*depthScaleFactor;mat2 RZ=mat2(cos(RotationZ),-sin(RotationZ),sin(RotationZ),cos(RotationZ));pos2d=RZ*pos2d,pos2d*=vec2(1,1.777778),pos2d+=Translation*vec2(.0625,.111111),gl_Position=vec4(pos2d,-pos.z,1),VBar=Side,VColor=Color,VLife=Life,VPos=pos2d;}",n="precision mediump float;varying vec3 VColor;varying float VBar,VLife;uniform float LifeMax;void main(){float r1=max(0.,VBar),r2=-min(0.,VBar),r3=abs(VBar);r3*=r3,r3=1.-r3;float f=pow(pow(sin(gl_FragCoord.y),2.),.4);vec3 color=VColor*(VLife/LifeMax)*f;gl_FragColor=vec4(color,1);}",i=o.createShader(o.VERTEX_SHADER),s=o.createShader(o.FRAGMENT_SHADER),r=o.createShader(o.FRAGMENT_SHADER),a=o.createProgram(),l=o.createProgram();o.shaderSource(i,t),o.shaderSource(s,n),o.shaderSource(r,"precision mediump float;varying vec2 VPos;uniform vec2 Lights[4];uniform vec3 LightColors[4];float rand(vec2 c){return fract(sin(dot(c.xy,vec2(12.9898,78.233)))*43758.5453);}float noise(vec2 p,float freq){float unit=10./freq;vec2 ij=floor(p/unit),xy=mod(p,unit)/unit;xy=.5*(1.-cos(3.14159*xy));float a=rand(ij+vec2(0.,0.)),b=rand(ij+vec2(1.,0.)),c=rand(ij+vec2(0.,1.)),d=rand(ij+vec2(1.,1.)),x1=mix(a,b,xy.x),x2=mix(c,d,xy.x);return mix(x1,x2,xy.y);}float pNoise(vec2 p){float n=0.,normK=0.,f=4.,amp=1.;for(int i=0;i<8;i++)n+=amp*noise(p,f),f*=2.,normK+=amp,amp*=.5;float nf=n/normK;return nf*nf*nf*nf;}float sq(float x){return x*x;}void main(){vec3 color=vec3(0.,0.,0.);for(int i=0;i<3;++i){vec2 lightPos=Lights[i],adjustedLightPos=lightPos/vec2(16.,9.);vec3 light=LightColors[i];float dist2=sq(adjustedLightPos.x-VPos.x)+sq((adjustedLightPos.y-VPos.y)*9./16.),intensity=clamp(1.-dist2,0.,1.);color+=light*intensity*.1;}float n=pNoise(VPos+vec2(8.,4.))*20.,cl=clamp(n,0.,1.);color*=vec3(cl,cl,cl),gl_FragColor=vec4(color,1.);}"),o.compileShader(i),o.compileShader(s),o.compileShader(r),o.attachShader(a,i),o.attachShader(a,s),o.attachShader(l,i),o.attachShader(l,r),o.linkProgram(a),o.linkProgram(l);const c=o.getAttribLocation(a,"Position"),f=o.getAttribLocation(a,"Normal"),p=o.getAttribLocation(a,"Side"),u=o.getAttribLocation(a,"Life");function h(e){const t=o.createBuffer();return o.bindBuffer(o.ARRAY_BUFFER,t),o.bufferData(o.ARRAY_BUFFER,new Float32Array(e),o.STATIC_DRAW),t}let d=null;const m=new Float32Array(8),v=new Float32Array(12);function g({attributes:e,uniforms:t,elements:n,count:i}){return s=>{let r=s.lights?l:a;o.useProgram(r),o.enableVertexAttribArray(c),o.bindBuffer(o.ARRAY_BUFFER,e.Position.buf),o.vertexAttribPointer(c,3,o.FLOAT,!1,0,0),o.enableVertexAttribArray(f),o.bindBuffer(o.ARRAY_BUFFER,e.Normal.buf),o.vertexAttribPointer(f,3,o.FLOAT,!1,0,0),o.enableVertexAttribArray(p),o.bindBuffer(o.ARRAY_BUFFER,e.Side.buf),o.vertexAttribPointer(p,1,o.FLOAT,!1,0,0),"constant"in e.Life?(o.disableVertexAttribArray(u),o.vertexAttrib4f(u,1,0,0,0)):(o.bindBuffer(o.ARRAY_BUFFER,e.Life.buf),o.vertexAttribPointer(u,1,o.FLOAT,!1,0,0),o.enableVertexAttribArray(u)),o.uniform1f(o.getUniformLocation(r,"Rotation"),t.Rotation(0,s)),o.uniform1f(o.getUniformLocation(r,"RotationY"),t.RotationY(0,s)),o.uniform1f(o.getUniformLocation(r,"RotationZ"),t.RotationZ(0,s)),o.uniform2fv(o.getUniformLocation(r,"Translation"),t.Translation(0,s)),o.uniform1f(o.getUniformLocation(r,"Thickness"),t.Thickness(0,s)),o.uniform1f(o.getUniformLocation(r,"Scale"),t.Scale(0,s)),o.uniform3fv(o.getUniformLocation(r,"Color"),t.Color(0,s)),o.uniform1f(o.getUniformLocation(r,"LifeMax"),t.LifeMax(0,s)),s.lights&&(m.set(s.lights.flat()),o.uniform2fv(o.getUniformLocation(r,"Lights"),m),v.fill(0),v.set(s.lightColors.flat()),o.uniform3fv(o.getUniformLocation(r,"LightColors"),v)),o.disable(o.DEPTH_TEST),o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.buffer),o.drawElements(o.TRIANGLES,i?i(0,s):n.length,o.UNSIGNED_SHORT,0),o.enableVertexAttribArray(u)}}g.buffer=function(e){let t;return t=Array.isArray(e)?h(e):e.data?h(e.data):function(e){const t=o.createBuffer();return o.bindBuffer(o.ARRAY_BUFFER,t),o.bufferData(o.ARRAY_BUFFER,e,o.STREAM_DRAW),t}(e.length),{buf:t,subdata(e){o.bindBuffer(o.ARRAY_BUFFER,t),o.bufferSubData(o.ARRAY_BUFFER,0,new Float32Array(e.flatMap((e=>e))))}}},g.elements=function(e){const t=o.createBuffer();return o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t),o.bufferData(o.ELEMENT_ARRAY_BUFFER,new Int16Array(e.flatMap((e=>e))),o.STATIC_DRAW),{buffer:t,length:e.length,subdata(e){o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t),o.bufferSubData(o.ELEMENT_ARRAY_BUFFER,0,new Int16Array(e.flatMap((e=>e))))}}},g.frame=function(e){window.requestAnimationFrame((function o(t){d=t,e({time:t/1e3}),window.requestAnimationFrame(o)}))},g.clear=function({color:e}){o.clearColor(...e),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT)};var b,w=g;b=JSON.parse('{"verts":[[0.5,0,0.5],[-0.5,0,0.5],[-0.5,0,-0.5],[0.5,0,-0.5],[0.5,1,0.5],[-0.5,1,0.5],[0.5,1,-0.5],[-0.5,1,-0.5]],"elements":[[0,1],[1,2],[2,3],[3,0],[1,0],[0,4],[4,5],[5,1],[0,3],[3,6],[6,4],[4,0],[3,2],[2,7],[7,6],[6,3],[2,1],[1,5],[5,7],[7,2],[5,4],[4,6],[6,7],[7,5]]}');var A;A=JSON.parse('{"verts":[[0.27823292387637866,0.6731197734314913,0.5504444219489406],[1,0,0.2576565192551816],[0.422046679721816,0,0.9424770574950171],[0.9124665040009029,0.4394209657319785,0],[0.8249330080018058,0,-0.6211854122087753],[0.9124665040009029,2.1521448493247274e-18,0],[-0.7799474303347215,-0.483444278830994,0],[-1.012761932022466,0,0],[-0.6314468526269124,0.7918087664978339,0],[0.2253607328569716,0.9873695503187574,0],[0.9124665040009029,-0.4394209657319785,0],[0.2253607328569716,-0.9873695503187574,0],[-0.6314468526269124,-0.7918087664978339,0],[-0.7891756289917398,0,-0.666023217687051],[0.02867513506028989,-0.5877144296633471,-1.0322620431424978],[0.02867513506028989,0,-1.0322620431424978],[-0.1587073307804815,0.6731197734314913,-0.6333888351711773],[-0.4737169127015432,0,0.917594315308617],[-0.4737169127015432,-0.6873152120414554,0.917594315308617],[0.3476404737553102,-0.7226874525121854,0.917594315308617]],"elements":[[0,1],[1,2],[2,0],[3,1],[1,0],[0,3],[1,3],[3,4],[4,1],[3,5],[5,1],[1,3],[3,5],[5,4],[4,3],[12,13],[13,7],[7,6],[6,12],[13,14],[14,12],[12,13],[14,13],[13,15],[15,14],[13,16],[16,15],[15,13],[8,16],[16,13],[13,8],[16,8],[8,9],[9,16],[0,8],[8,9],[9,0],[8,0],[0,17],[17,8],[0,17],[17,2],[2,0],[18,2],[2,17],[17,18],[2,18],[18,19],[19,2],[19,11],[11,18],[18,19],[19,10],[10,11],[11,19],[1,19],[19,10],[10,1],[19,1],[1,2],[2,19],[4,10],[10,1],[1,4],[14,4],[4,10],[10,14],[4,14],[14,15],[15,4],[16,15],[15,4],[4,16],[16,4],[4,3],[3,16],[9,3],[3,16],[16,9],[3,9],[9,0],[0,3],[10,4],[4,5],[5,10],[4,1],[1,5],[5,4],[10,1],[1,5],[5,10],[14,10],[10,11],[11,14],[14,12],[12,11],[11,14],[18,11],[11,12],[12,18],[7,18],[18,12],[12,6],[6,7],[18,7],[7,17],[17,18],[7,17],[17,8],[8,7],[13,7],[7,8],[8,13]]}');var x;x=JSON.parse('{"verts":[[-0.26616498934972227,0.778708328983637,-0.17873764778787402],[-0.9804203694613558,0.1331051501144988,-0.18733027855085146],[-0.5146089826597042,-0.505206530985756,0.7267038778560846],[0.09680047443155947,0.23085404344069496,1],[0.7403153548352706,0.500408908474245,-0.1279157217645478],[-0.2501093902355055,0.13761091725655952,-0.9354515429020729],[0.2327166759583584,-0.84028847926472,-0.31853414863301077],[0.954179595444924,-0.34139393145174723,-0.16851426959528945]],"elements":[[0,1],[1,2],[2,3],[3,0],[0,3],[3,4],[4,0],[2,1],[1,5],[5,6],[6,2],[3,7],[7,4],[4,3],[5,4],[4,7],[7,5],[5,1],[1,0],[0,5],[3,2],[2,6],[6,7],[7,3],[5,0],[0,4],[4,5],[5,7],[7,6],[6,5]]}');var R;R=JSON.parse('{"verts":[[0,-0.3308774366732588,-0.8620745881937901],[0.9804048934048908,-0.3308774366732588,0.41187707131751694],[-0.9804048934048908,-0.3308774366732588,0.41187707131751694],[0,1,-0.012773354861002903]],"elements":[[0,3],[3,1],[1,0],[0,1],[1,2],[2,0],[1,3],[3,2],[2,1],[2,3],[3,0],[0,2]]}');var k;k=JSON.parse('{"verts":[[0,-0.24274690774293603,-0.37162310398305404],[1,0,-0.4054525853916859],[0,0,0],[0,0,-2.6617713810190264],[-1,0,-0.4054525853916859],[0,0.9031849302114461,-0.5181185459772288]],"elements":[[0,1],[1,2],[2,0],[0,3],[3,1],[1,0],[3,0],[0,4],[4,3],[4,0],[0,2],[2,4],[5,4],[4,2],[2,5],[5,3],[3,4],[4,5],[3,5],[5,1],[1,3],[1,5],[5,2],[2,1],[4,3],[3,1],[1,2],[2,4]]}');const{cos:E,sin:y,random:S,PI:L,pow:B,min:T,max:F,sqrt:M,sign:C}=Math,z=()=>.2*S(),P=()=>2*S()-1,_=e=>e*e,Y=2*L;function U(e,o,t){return e*(1-(t=F(0,T(1,t))))+o*t}function D(e){const o=e.elements.flatMap((([o,t])=>[e.verts[o],e.verts[t]])).flatMap((e=>[e,e])),t=[],n=[],i=[];for(let e=0;e<o.length;e+=4){const s=[o[e],o[e+2]],r=[s[1][0]-s[0][0],s[1][1]-s[0][1],s[1][2]-s[0][2]];t.push(r,r,r,r),n.push(-1,1,-1,1),i.push(e,e+1,e+2),i.push(e+2,e+1,e+3)}return{Position:w.buffer(o.flatMap((e=>e))),Normal:w.buffer(t.flatMap((e=>e))),Side:w.buffer(n),Elements:w.elements(i)}}function V(e,o){return w({vert:t,frag:n,primitive:"triangles",attributes:{Position:e.Position,Normal:e.Normal,Side:e.Side,Life:{constant:[1]}},elements:e.Elements,count:o?(e,t)=>o:void 0,uniforms:{Translation:(e,o)=>o.translation,Rotation:(e,o)=>o.rotation||0,RotationY:(e,o)=>o.rotationY||0,RotationZ:(e,o)=>o.rotationZ||0,Thickness:(e,o)=>.01*o.thickness||.01,Scale:(e,o)=>o.scale||.5,Color:(e,o)=>o.color||[1,1,0],LifeMax:()=>1}})}e(k).verts.forEach((e=>{[e[2],e[1]]=[e[1],-e[2]],e[1]-=.8})),e(b).verts.forEach((e=>e[1]-=.5));const N=V(D(e(b))),Z=V(D(e(A))),I=V(D(e(x))),O=V(D(e(R))),j=V(D(e(k))),q=V(D(function(){const e=[],o=[];for(let t=0;t<40;++t){const n=Y*t/40;e.push([E(n),y(n),0]),o.push([t,t+1])}return o[o.length-1][1]=0,{verts:e,elements:o}}())),H=V(D({verts:[[0,0,0],[0,1,0]],elements:[[0,1]]})),K=V(D(function(){const e=[],o=[];for(let t=-.7;t<=.8;t+=.7)for(let n=0;n<Y;n+=1.2){const i=M(1-t*t);e.push([E(n)*i,t,y(n)*i]),e.push([E(n)*(.5*i),.5*t,y(n)*(.5*i)]);const s=e.length;o.push([s-2,s-1])}return{verts:e,elements:o}}())),W=V(D({verts:[[-2,0,0],[-2,-1,0],[0,-2,0],[2,-1,0],[2,0,0],[2,1,0],[0,2,0],[-2,1,0],[-.5,-1,0],[-.5,1,0],[.5,1,0],[.5,-1,0]],elements:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[8,9],[9,10],[10,11],[11,8]]})),G=V(D({verts:[[-2,0,0],[-2,-1,0],[0,-2,0],[2,-1,0],[2,0,0],[2,1,0],[0,2,0],[-2,1,0],[-.5,-1,0],[-.5,1,0],[.5,1,0],[.5,-1,0]],elements:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,0],[8,9],[9,10],[10,11],[11,8]]}),24);var J={songData:[{i:[3,100,128,116,2,0,128,0,0,11,3,25,93,5,0,0,2,0,0,1,2,74,94,3,124,0,0,0,0],p:[,,,11,1,2,1,1,1,2,,,1,2,,,,,1,2,1,1,1,1,1,1,1,1],c:[{n:[111,,,,,,,,111],f:[]},{n:[111,,,,,,,,111,,,,115,,,111],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[,,,,,,,,,,,,127],f:[]}]},{i:[0,160,128,64,0,160,128,0,64,210,4,7,52,85,0,0,0,60,4,1,2,255,0,0,32,61,5,32,6],p:[,,,,1,1,1,1,1,1,1,1,1,1,,,,,,,1,1,1,1,1,1,1,1,1,1],c:[{n:[,,,,129,,,,,,110],f:[]}]},{i:[0,0,140,0,0,0,140,0,0,81,4,10,47,55,0,0,0,187,5,0,1,239,135,0,32,108,5,16,4],p:[,,1,1,2,1,1,2,1,1,1,2,1,2,,,1,1,1,2,1,1,1,2,1,1,1,1,1,2,1,2],c:[{n:[,,,,141,,,141,157,,,,127,,141],f:[]},{n:[,,127,,141,123,,,,,127,,127,,141,125],f:[]}]},{i:[2,100,128,0,3,201,128,0,0,0,0,6,29,0,0,0,0,195,4,1,3,50,184,119,244,147,6,84,6],p:[2,3,2,3,2,3,,,2,3,,,,,2,3,2,3,2,3],c:[{n:[123],f:[]},{n:[116,118,119,,123,,124,,,,,,,,,,,,,,,,,,,,,124,123,,116],f:[]},{n:[116,118,119,,123,,124,,,,,,,,,,,,,,,,,,,,,124,119,,115],f:[]}]},{i:[2,57,128,0,3,138,128,0,0,0,5,6,58,0,0,0,3,184,5,1,2,135,0,0,11,53,6,79,5],p:[,,,,,,27,27,27,33,27,27,27,33,,,15,15,15,28,15,15,15,28,15,15,15,28,15,15,15,30],c:[{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[152,,140,,,140,,,140,,,,140,147,146,143],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[,152,,140,143,,,145,,152,,147,155,,151,148],f:[8]},{n:[152,,140,,,140,,,140,,,,147,146,143,140],f:[]},{n:[],f:[]},{n:[152,,140,,,140,,,140],f:[]},{n:[],f:[]},{n:[],f:[]},{n:[,152,,140,143,,,145,,152,,152,151,,147],f:[8,,,,,,,,,,,,8,,8,,,,,,,,,,,,,,14]}]},{i:[3,37,140,0,1,88,128,3,0,0,92,0,5,91,0,0,3,179,5,1,2,124,135,11,8,150,3,157,6],p:[,,,,,,,,,,,,,,,,,,,,1,2,3,4,5,6,7,8,1],c:[{n:[128],f:[13,,,,,,,,,,,,,,,,53]},{n:[131],f:[]},{n:[135],f:[]},{n:[139,,,,,,,,142],f:[]},{n:[140],f:[]},{n:[143],f:[]},{n:[139],f:[]},{n:[136,,,,,,,,135,,,,131],f:[]}]},{i:[3,113,117,17,3,111,110,0,32,0,0,15,72,43,0,0,2,127,13,0,2,26,45,0,101,12,7,0,0],p:[,1,1,,1,,1],c:[{n:[,,,,,,,,,,,,,,,,123,123,123,123,123,,,,,,,,,,,,123,123,123,123,123],f:[10,,,,10,,,,,,,,,,,,,,,,116]}]},{i:[2,83,128,0,3,174,128,9,93,0,7,81,55,19,115,3,0,139,4,1,3,22,185,51,119,107,10,89,3],p:[,,,,,,,,,,,1],c:[{n:[128],f:[]}]},{i:[2,100,128,0,3,201,128,0,0,0,5,6,58,0,0,0,0,195,6,1,2,135,0,0,32,147,6,121,6],p:[],c:[]},{i:[1,36,128,1,1,36,128,2,1,77,7,5,52,0,112,4,0,104,3,0,2,141,110,4,37,172,3,55,2],p:[,,,,,,,,1],c:[{n:[128,,,128,,,,119,,,116],f:[10,,,,,,,10,,,,,,,,,,,,,,,,77]}]},{i:[0,45,152,0,0,76,152,12,0,130,0,0,60,0,0,0,0,0,0,0,2,15,0,1,28,13,3,45,1],p:[,,,,,1,,2],c:[{n:[128,,,,,,,,,,,,,,,,131,,,,,,,,,,,,,,,,135],f:[]},{n:[116,,,,,,,,,,,,,,,,119,,,,,,,,,,,,,,,,123],f:[]}]},{i:[2,43,128,0,3,65,128,0,0,0,5,44,72,48,0,0,0,195,6,0,3,55,170,18,68,147,6,31,2],p:[,,,1],c:[{n:[128,128,128,128,128,,,,,,,,,,,,,,,,135,,,,,,,,,,,,,,,,140],f:[8,8,8,8,8,,,,,,,,,,,,,18,83,145]}]},{i:[0,0,128,0,0,0,128,0,0,125,0,1,59,0,0,0,0,0,0,0,1,193,171,0,29,39,3,131,3],p:[,,,1],c:[{n:[,,,,128],f:[]}]}],rowLen:6615,patternLen:16,endPattern:31,numChannels:13};const $=new AudioContext,Q={...J,songData:J.songData.slice(0,6),numChannels:6};function X({endPattern:e},o){for(let t=0;t<=e;++t)if(J.songData[o].p[t])return t}function ee(e,o,t=0){const n=X(e,o),{i:i,p:s,c:r}=e.songData[o];return{...e,songData:[{i:i,p:[s[n]+t],c:r}],numChannels:1,endPattern:1}}function oe(e){const o=(l=function(e){return.003959503758*2**((e-128)/12)},c=function(e,o,t){var n,i,s,r,a,c,p=f[e.i[0]],u=e.i[1],h=e.i[3]/32,d=f[e.i[4]],m=e.i[5],v=e.i[8]/32,g=e.i[9],b=e.i[10]*e.i[10]*4,w=e.i[11]*e.i[11]*4,A=e.i[12]*e.i[12]*4,x=1/A,R=-e.i[13]/16,k=e.i[14],E=t*2**(2-e.i[15]),y=new Int32Array(b+w+A),L=0,B=0;for(n=0,i=0;n<b+w+A;n++,i++)i>=0&&(i-=E,a=l(o+(15&(k=k>>8|(255&k)<<4))+e.i[2]-128),c=l(o+(15&k)+e.i[6]-128)*(1+8e-4*e.i[7])),s=1,n<b?s=n/b:n>=b+w&&(s=(1-(s=(n-b-w)*x))*3**(R*s)),r=p(L+=a*s**h)*u,r+=d(B+=c*s**v)*m,g&&(r+=(2*S()-1)*g),y[n]=80*r*s|0;return y},f=[a=function(e){return y(6.283184*e)},function(e){return e%1<.5?1:-1},function(e){return e%1*2-1},function(e){var o=e%1*4;return o<2?o-1:3-o}],{init(e){t=e,n=e.endPattern,i=0,s=e.rowLen*e.patternLen*(n+1)*2,r=new Int32Array(s)},generate(){var e,o,l,p,u,h,d,m,v,g,b,w,A,x,R=new Int32Array(s),k=t.songData[i],E=t.rowLen,S=t.patternLen,L=0,B=0,T=!1,F=[];for(l=0;l<=n;++l)for(d=k.p[l],p=0;p<S;++p){var M=d?k.c[d-1].f[p]:0;M&&(k.i[M-1]=k.c[d-1].f[p+S]||0,M<17&&(F=[]));var C=f[k.i[16]],z=k.i[17]/512,P=2**(k.i[18]-9)/E,_=k.i[19],Y=k.i[20],U=135.82764118168*k.i[21]/44100,D=1-k.i[22]/255,V=1e-5*k.i[23],N=k.i[24]/32,Z=k.i[25]/512,I=6.283184*2**(k.i[26]-9)/E,O=k.i[27]/255,j=k.i[28]*E&-2;for(b=(l*S+p)*E,u=0;u<4;++u)if(h=d?k.c[d-1].n[p+u*S]:0){F[h]||(F[h]=c(k,h,E));var q=F[h];for(o=0,e=2*b;o<q.length;o++,e+=2)R[e]+=q[o]}for(o=0;o<E;o++)(g=R[m=2*(b+o)])||T?(w=U,_&&(w*=C(P*m)*z+.5),B+=(w=1.5*y(w))*(A=D*(g-B)-(L+=w*B)),g=3==Y?B:1==Y?A:L,V&&(g=(g*=V)<1?g>-1?a(.25*g):-1:1,g/=V),T=(g*=N)*g>1e-5,x=g*(1-(v=y(I*m)*Z+.5)),g*=v):x=0,m>=j&&(x+=R[m-j+1]*O,g+=R[m-j]*O),R[m]=0|x,R[m+1]=0|g,r[m]+=0|x,r[m+1]+=0|g}return++i/t.numChannels},createAudioBuffer(e){for(var o=e.createBuffer(2,s/2,44100),t=0;t<2;t++)for(var n=o.getChannelData(t),i=t;i<s;i+=2)n[i>>1]=r[i]/65536;return o}});var t,n,i,s,r,a,l,c,f;for(o.init(e);o.generate()<1;);return o.createAudioBuffer($)}function te(e,o=0){const t=$.createBufferSource();return t.buffer=e,t.connect($.destination),t}const ne=.6;function ie(){return function(){let{currentTime:e}=$;return e-(0|e/ne)*ne}()/ne}function se(){const e=ie(),o=e?1-e:0;return $.currentTime+o*ne}function re(e,{loop:o,now:t}={}){let n=oe(e);return()=>{let e=te(n);if(e.loop=o,o)return void e.start(se());if(t)return void e.start();let i=ie();if(i>.2)e.start(se());else if(i>.08){e=te(function(e,o){const t=0|o*e.sampleRate;console.log("woudl trim",{samplesToTrim:t,seconds:o,secondsPerBeat:ne});const n=$.createBuffer(2,e.length-t,e.sampleRate);return[0,1].forEach((o=>{const i=e.getChannelData(o).subarray(t);n.getChannelData(o).set(i)})),n}(n,.6*(i-.08))),e.start()}else e.start()}}const ae=re(Q,{loop:!0}),le=re(ee(J,6)),ce=re(ee(J,7)),fe=re(ee(J,9)),pe=re(function(e,o){const t=X(e,o),{i:n,p:i,c:s}=e.songData[o],{i:r,p:a,c:l}=e.songData[o+1];return{...e,songData:[{i:n,p:i.slice(t,t+1),c:s},{i:r,p:a.slice(t,t+1),c:l}],numChannels:2,endPattern:1}}(J,11)),ue=re(ee(J,10),{now:!0}),he=re(ee(J,10,1),{now:!0});let de=!1;function me(){de||(ae(),de=!0)}document.addEventListener("keydown",me),document.addEventListener("click",me);const ve={left:0,right:0,thrust:0,skill1:0,skill2:0,skill3:0},ge={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"thrust",KeyQ:"skill1",KeyW:"skill2",KeyE:"skill3"};window.addEventListener("keydown",(({code:e})=>{ve[ge[e]]=1})),window.addEventListener("keyup",(({code:e})=>{ve[ge[e]]=0}));var be=ve;const we=[];function Ae(e,o){const i=Array(e).fill(0).map((()=>({life:0,pos:[0,0,0],vec:[0,0,0],angle:0,cos:1,sin:0,angular:0}))),s=4*e,r={position:w.buffer({type:"float",length:12*s,usage:"stream"}),normal:w.buffer({type:"float",length:12*s,usage:"stream"}),side:w.buffer({type:"float",data:i.flatMap((()=>[-1,1,-1,1]))}),life:w.buffer({type:"float",length:4*s}),elements:w.elements(i.flatMap(((e,o)=>[4*o,4*o+1,4*o+2,4*o+2,4*o+1,4*o+3])))},a=w({vert:t,frag:n,primitive:"triangles",attributes:{Position:r.position,Normal:r.normal,Side:r.side,Life:r.life},elements:r.elements,count:(e,o)=>6*o.aliveParticles,uniforms:{Rotation:()=>0,RotationY:()=>0,RotationZ:()=>0,Translation:(e,o)=>o.translation||[0,0],Thickness:(e,t)=>o.thickness,Scale:()=>1,Color:()=>o.color,LifeMax:()=>o.life},depth:{enable:!1}});let l=0,c=0;return{alive:!0,pos:[0,0],vec:[0,0],variance:2,angularVariance:5,rate:0,emit(){const t={life:o.life,pos:[this.pos[0],this.pos[1],0],vec:[this.vec[0]+this.variance*P(),this.vec[1]+this.variance*P(),0],angle:0,cos:1,sin:0,angular:this.angularVariance*P()};t.angle=Math.atan2(t.vec[1],t.vec[0]);const n=l++;l%=e,i[n]=t},update(o){if(i.forEach((e=>{e.life-=o,e.angle+=e.angular*o,e.pos[0]+=e.vec[0]*o,e.pos[1]+=e.vec[1]*o,e.pos[2]+=e.vec[2]*o,e.cos=E(e.angle),e.sin=y(e.angle)})),"instant"===this.rate){this.rate="expired";for(let o=0;o<e;++o)this.emit()}else if(this.rate>0)for(c+=o;c>=this.rate;)c-=this.rate,this.emit();this.alive&&"expired"===this.rate&&!i.some((e=>e.life>0))&&(this.alive=!1)},render(){const{len:e=.005}=o,t=i.filter((e=>e.life>0));r.position.subdata(t.flatMap((({pos:o,cos:t,sin:n})=>{const i=[o[0]/16-e*t,o[1]/16-e*n,o[2]],s=[o[0]/16+e*t,o[1]/16+e*n,o[2]];return[i,i,s,s]})).flat()),r.normal.subdata(t.flatMap((({cos:e,sin:o})=>[[e,o,0],[e,o,0],[e,o,0],[e,o,0]])).flat()),r.life.subdata(t.flatMap((e=>[e.life,e.life,e.life,e.life]))),a({aliveParticles:t.length})}}}function xe(e={}){const o=6.28*S(),t=6.28*S();Ee.asteroids.push({pos:[16*E(t),9*y(t)],vec:[4*E(o),4*y(o)],rotation:0,rZ:S(),color:[.7+z(),.4+z(),.1+z()],colliderSize:1.6,children:[4,3],generation:0,...e})}function Re(){Object.assign(Ee,{title:!1,level:0,asteroids:[],bullets:[],mortars:[],enemyBullets:[],rotation:0,ship:{pos:[0,0],vec:[0,0],thrust:0,angle:1,colliderSize:.5,aura:0,hitTimer:0,powerups:0},auraSize:5,blasts:[],cooldowns:[0,0,0],scheduledBullets:[],mines:[],aliens:[],signs:[],powerups:[],win:0,score:0,combo:0,hp:9,title:!0,asteroids:[{pos:[-11,2],vec:[0,0],rotation:0,rZ:S(),color:[.7+z(),.4+z(),.1+z()],colliderSize:2.6,children:[],generation:0},{pos:[11,2],vec:[0,0],rotation:0,rZ:S(),color:[.7+z(),.4+z(),.1+z()],colliderSize:2.6,children:[],generation:0}],mines:[{pos:[0,-2],vec:[0,0],life:1,colliderSize:.5}],win:0})}function ke(e=0){Ee.title=!1,Ee.level=e,Ee.asteroids=[],Ee.mines=[],Ee.aliens=[],Ee.win=0,Ee.ship.pos=[0,0],Ee.ship.vec=[0,0],Ee.signs.push({index:e+4,life:2,pos:[0,0]});const o=[1,2,2,3,3,3][e],t=[[],["p"],["p"],["p","a"],["p"],["a"]];for(let e=0;e<o;++e)xe();e>0&&Array(e+1).fill(0).map(((o,n)=>xe({colliderSize:1,children:[5],generation:1,has:t[e][n],color:"a"==t[e][n]?[1,1,1]:void 0})))}const Ee={title:!1,level:0,asteroids:[],bullets:[],mortars:[],enemyBullets:[],rotation:0,ship:{pos:[0,0],vec:[0,0],thrust:0,angle:1,colliderSize:.5,aura:0,hitTimer:0,powerups:0},auraSize:5,blasts:[],cooldowns:[0,0,0],scheduledBullets:[],mines:[],aliens:[],signs:[],powerups:[],win:0,score:0,combo:0,hp:9};function ye(e){e>1||(Ee.rotation+=e,Ee.signs=Ee.signs.flatMap((o=>(o.life-=e,o.life>0?[o]:[]))),Ee.title||(Ee.ship.collides=!1,[...Ee.asteroids,...Ee.mines,...Ee.aliens].forEach((o=>{Pe(o,e),void 0!==o.rotation&&(o.rotation+=e),void 0!==o.life&&(o.life-=e),void 0!==o.inv&&(o.inv-=e),o.collides=!1,0===Ee.ship.hitTimer&&Fe(o,Ee.ship,Ee.ship.colliderSize),Ee.ship.aura&&Me(o,Ee.ship,Ee.ship.aura*Ee.auraSize),Ee.blasts.forEach((e=>{Me(o,e,3*e.size)}))})),Ee.powerups=Ee.powerups.flatMap((o=>(Pe(o,e),Fe(Ee.ship,o,1),o.collides?(Ee.ship.collides=!1,function(){if(Ee.ship.powerups>=4)return;const e=Ee.ship.powerups+=1;4===e&&(Ee.auraSize*=1.6);Ee.signs.push({pos:[0,2],life:4.8,size:.004,index:18+e})}(),[]):[o]))),Ee.bullets=Ee.bullets.flatMap((o=>(Pe(o,e),o.life-=e,o.life>0&&!o.collides?[o]:[]))),Ee.mortars=Ee.mortars.flatMap((o=>(Pe(o,e),o.life-=e,o.life>0?[o]:(Ee.blasts.push({pos:o.pos,life:.3,size:0}),[])))),Ee.enemyBullets.map((o=>{Pe(o,e),o.life-=e})),[...Ee.bullets,...Ee.enemyBullets].forEach((e=>{Ee.asteroids.forEach((o=>{Fe(o,e,0)}))})),Ee.bullets.forEach((e=>{[...Ee.mines,...Ee.aliens].forEach((o=>{Fe(o,e,0)}))})),0===Ee.ship.hitTimer&&Ee.enemyBullets.forEach((e=>{Fe(Ee.ship,e,0)})),Ee.enemyBullets=Ee.enemyBullets.flatMap((e=>e.life>0&&!e.collides?[e]:(Ee.ship.collides&&Ce(e.pos),[]))),Ee.asteroids=Ee.asteroids.flatMap((e=>{if(!e.collides)return[e];Le(),Ce(e.pos);const o=[...e.children];if(!o.length)return[];const t=o.shift();return"m"===e.has&&Ee.mines.push({pos:[...e.pos],vec:[S(),S()],colliderSize:.5,life:3,inv:1}),"p"===e.has&&Ee.powerups.push({pos:[...e.pos],vec:[S(),S()]}),"a"===e.has&&Ee.aliens.push({pos:[...e.pos],vec:[S(),S()],inv:1,colliderSize:1,hits:Ee.level<5?3:5,shootTimer:2.4}),Array(t).fill(0).map((t=>{const n=6*S();let i;const s=[0,0,.5,0,.8,.3][Ee.level];return 0===e.generation&&S()<s&&(i="m"),{pos:[...e.pos],vec:[4*E(n),4*y(n)],rotation:0,rZ:S(),color:"m"===i?[1,0,0]:[.7+z(),.4+z(),.1+z()],colliderSize:e.colliderSize/2,children:[...o],generation:e.generation+1,has:i}}))})),Ee.mines=Ee.mines.flatMap((e=>{if(e.collides&&e.inv<0)return Le(25),Ce(e.pos),[];if(e.life<0&&ie()<.05){Ce(e.pos);for(let o=0;o<Y;o+=Y/8)[15,8].map((t=>Ee.enemyBullets.push({life:.6,pos:[...e.pos],vec:[y(o)*t,E(o)*t],rotation:o})));return[]}return[e]})),Ee.aliens=Ee.aliens.flatMap((o=>{if(o.collides&&o.inv<0&&0===o.hits)return ze(o.pos,4),[];if(o.collides&&o.inv<0&&(Le(50),Ce(o.pos),o.hits-=1,o.pos=[6*P(),3*P()],o.shootTimer=.6*(4-ie()),o.shootCooldown=0,Ce(o.pos),o.inv=.3),o.shootTimer-=e,o.shootTimer<=0&&Ee.hp&&(pe(),o.shootTimer=.6*(4-ie()),o.shootCooldown=1.2,o.shootAngle=Math.atan2(Ee.ship.pos[0]-o.pos[0],Ee.ship.pos[1]-o.pos[1])),o.shootCooldown=F(0,o.shootCooldown-e),o.shootCooldown>.1&&o.shootCooldown<=.6&&!Ee.ship.hitTimer&&Ee.hp){const e=E(o.shootAngle),t=y(o.shootAngle);for(let n=0;n<30;++n){const i=[o.pos[0]+t*n,o.pos[1]+e*n];if(Fe(Ee.ship,{pos:i},0),Ee.ship.collides){Ce(Ee.ship.pos);break}}}return o.shootTimer?[o]:void 0})),function(e,o){const t=4,n=48;if(e.angle+=(be.right-be.left)*t*o,Ee.hp>0)if(e.collides){if(Ee.combo=0,0==--Ee.hp)return void ze(e.pos,5);e.hitTimer=1.2}else e.hitTimer=F(0,e.hitTimer-o);const i=y(e.angle),s=E(e.angle);Ee.hp>0&&(be.thrust&&(e.vec[0]+=n*o*i,e.vec[1]+=n*o*s),e.thrust+=(be.right-be.left)*o*4,e.vec[0]*=B(.5,2*o),e.vec[1]*=B(.5,2*o),e.thrust*=B(.5,3*o),Pe(e,o));Se||(Se={...Ae(15,{len:.01,thickness:.01,life:.7,color:[.5,.5,.8]}),rate:1.2});Se.pos=[e.pos[0]-.6*i,e.pos[1]-.6*s],Se.vec=[e.vec[0]-10*i,e.vec[1]-10*s],Se.variance=3,Se.rate=Ee.hp&&be.thrust?.02:100,Se.update(o),Ee.hp&&(Ee.scheduledBullets=Ee.scheduledBullets.flatMap((t=>(t-=o)>0?[t]:(e.powerups<3?Ee.bullets.push({life:1,pos:[e.pos[0]+i,e.pos[1]+s],vec:[33*i+e.vec[0],33*s+e.vec[1]],rotation:e.angle}):(Ee.bullets.push({life:1,pos:[e.pos[0]+i+.2*s,e.pos[1]+s-.2*i],vec:[33*i+e.vec[0],33*s+e.vec[1]],rotation:e.angle}),Ee.bullets.push({life:1,pos:[e.pos[0]+i-.2*s,e.pos[1]+s+.2*i],vec:[33*i+e.vec[0],33*s+e.vec[1]],rotation:e.angle})),[]))));Ee.hp&&Ee.scheduledMortar&&(Ee.scheduledMortar=F(0,Ee.scheduledMortar-o),Ee.scheduledMortar||Te(e,.3));Ee.ship.aura&&(Ee.ship.aura+=o,Ee.ship.aura>=.6&&(Ee.ship.aura=0));if(Ee.blasts=Ee.blasts.flatMap((e=>(e.life-=o,e.size+=2*o,e.life<0?[]:[e]))),Ee.hp){Ee.cooldowns=Ee.cooldowns.map((e=>F(0,e-o)));const t=.6*ie()+.2;Ee.ship.hitTimer||(be.skill1&&0===Ee.cooldowns[0]&&(Ee.cooldowns[0]=1.2,Be()&&(Ee.cooldowns[0]=2.4-t,le(),Ee.scheduledBullets.push(.15,.3,.45,.6,.75))),be.skill2&&0===Ee.cooldowns[1]&&Ee.ship.powerups>=1&&(Ee.cooldowns[1]=1.2,Be()&&(Ee.cooldowns[1]=4.8-t,ce(),Ee.ship.aura=.1)),be.skill3&&0===Ee.cooldowns[2]&&Ee.ship.powerups>=2&&(Ee.cooldowns[2]=1.2,Be()&&(Ee.cooldowns[2]=4.8-t,fe(),Te(e),Ee.scheduledMortar=.6*.75)))}}(Ee.ship,e),Ee.win||!Ee.hp||[...Ee.asteroids,...Ee.mines,...Ee.aliens].length||(Ee.win=1,Ee.signs.push({index:10+(0|4*S()),life:2,pos:[0,-5]}),setTimeout((()=>{Ee.level<5&&(ke(Ee.level+1),Ee.hp++)}),2200))))}Re();let Se=null;function Le(e=10){Ee.hp&&(Ee.score+=e+Ee.combo++)}function Be(e=.2){const o=ie();if(o>.75||o<.2)return console.debug("checkBeat",o,"true"),!0;const{pos:t}=Ee.ship;return Ee.signs.push({index:17,life:.7,v:0,pos:[t[0],t[1]-C(t[1])],size:.0025,color:[1,.5,.5]}),console.debug("checkBeat",o,"false"),Ee.combo=0,!1}function Te(e,o=0){Ee.mortars.push(...[-.3-o,.3+o].map((o=>({pos:[...e.pos],vec:[8*y(e.angle+o),8*E(e.angle+o)],rotation:e.angle+o,life:1.05}))))}function Fe(e,o,t){_(e.pos[0]-o.pos[0])+_(e.pos[1]-o.pos[1])<_(e.colliderSize+t)&&(e.collides=o.collides=!0)}function Me(e,o,t){_(e.pos[0]-o.pos[0])+_(e.pos[1]-o.pos[1])<_(t+e.colliderSize)&&(e.collides=!0)}function Ce(e){var o;(Math.random()<.5?ue:he)(),we.length<20&&we.push(...(o=e,[{...Ae(3,{len:.1,thickness:.002,life:.3,color:[1,1,1]}),pos:o,rate:"instant",variance:.001,angularVariance:0},{...Ae(60,{len:.005,thickness:.005,life:1.2,color:[.2,.2,.2]}),pos:o,rate:"instant",variance:3},{...Ae(20,{len:.005,thickness:.003,life:.5,color:[.7,.4,.2]}),pos:o,rate:"instant",variance:5},{...Ae(20,{len:.005,thickness:.003,life:.5,color:[.7,.7,.2]}),pos:o,rate:"instant",variance:5},{...Ae(6,{len:.07,thickness:.003,life:.15,color:[.7,.7,0]}),pos:o,rate:"instant",variance:20,angularVariance:0}]))}function ze(e,o){for(let t=0;t<o;++t)setTimeout((()=>Ce([e[0]+P(),e[1]+P()])),300*t)}function Pe({pos:e,vec:o},t){e[0]+=o[0]*t,e[1]+=o[1]*t,function(e){e[0]>17&&(e[0]-=34);e[0]<-17&&(e[0]+=34);e[1]>10&&(e[1]-=20);e[1]<-10&&(e[1]+=20)}(e)}window.addEventListener("keyup",(e=>{"KeyQ"==e.code&&Ee.title&&ke(),"Escape"==e.key&&Re(),"KeyR"==e.code&&(Ee.win&&5==Ee.level||!Ee.title&&0==Ee.hp)&&(Re(),ke())})),window.addEventListener("dblclick",(e=>{if(Ee.win&&5==Ee.level){const e=`I just beat ALL the rocks and scored ${10*Ee.score} in Beat Rocks! #js13k @beat_rocks_game`;window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(e)}`)}else if(!Ee.title&&0==Ee.hp){const e=`I just reached level ${Ee.level+1} and scored ${10*Ee.score} in Beat Rocks! #js13k @beat_rocks_game`;window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(e)}`)}})),window.state=Ee;const _e={A:[[-3,0,0,9,3,0],[-1,5,1,5]],B:[[-2,0,-2,9,1,9,3,7,1,5,3,3,0,0,0,0,-3]],C:[[2,9,-1,9,-2,7,-2,2,0,0,2,0]],D:[[-2,9,0,9,2,7,2,3,-1,0,-2,0,-2,9]],E:[[2,8,2,9,-2,9,-2,0,2,0,2,1],[-2,5,1,5]],F:[[2,8,2,9,-2,9,-2,0],[-2,5,1,5]],G:[[2,9,-1,9,-2,7,-2,2,0,0,2,0,3,4,1,4]],H:[[-3,9,-2,9,-2,0,-3,0],[3,9,2,9,2,0,3,0],[-2,5,2,5]],I:[[0,9.5,0,-.5]],J:[[1,9,1,1,0,0,-1,0,-2,1,-2,2]],K:[[-2,9,-2,0],[-2,5,2,9],[-2,5,2,0]],L:[[-2,9,-2,0,1,0,1,1]],M:[[-2,0,-2,9,0,3,2,9,2,0]],N:[[-2,0,-2,9,2,0,2,9]],O:[[-2,2,-2,7,-1,9,1,9,2,7,2,2,1,0,-1,0,-2,2]],P:[[-2,0,-2,9,1,9,2,8,2,6,0,5,-2,5]],Q:[[-2,2,-2,7,-1,9,1,9,2,7,2,2,1,0,-1,0,-2,2],[0,2,3,0]],R:[[-2,0,-2,9,1,9,2,8,2,6,0,5,-2,5,2,0]],S:[[2,8,1,9,-1,9,-2,7,2,3,2,2,1,0,-1,0,-2,2]],T:[[0,0,0,9],[-2,8,-2,9,2,9,2,8]],U:[[-2,9,-2,1,-1,0,1,0,2,1,2,9]],V:[[-3,9,-2,9,0,0,2,9,3,9]],W:[[-3,9,-2,0,0,9,2,0,3,9]],X:[[-2,9,2,0],[2,9,-2,0]],Y:[[-2,9,0,5,2,9],[0,5,0,0]],Z:[[-2,8,-2,9,2,9,-2,0,2,0,2,1]],0:[[-2,2,-2,7,-1,9,1,9,2,7,2,2,1,0,-1,0,-2,2],[1,8,-1,1]],1:[[-2,5,0,9,0,0],[-2,0,2,0]],2:[[-2,7,0,9,2,7,-2,0,2,0]],3:[[-2,7,0,9,2,7,0,5,2,2,0,0,-2,2]],4:[[1,9,-3,3,2,3],[0,4,0,0]],5:[[2,9,-2,9,-2,6,1,6,2,3,0,0,-2,2]],6:[[0,9,-2,7,-2,2,0,0,2,2,2,5,-2,5]],7:[[-2,9,2,9,-1,0],[-2,5,2,5]],8:[[0,9,2,7,-2,3,0,0,2,3,-2,7,0,9]],9:[[2,6,0,4,-2,6,0,9,2,6,2,2,-1,0]],"/":[[2,9,-2,0]],".":[[0,0,1,0]]};function Ye(e){const o=[],t=[];let n=0,i=0;for(const s of e.toUpperCase()){const e=n;n+=5.5,"\n"===s&&(n=0,i-=11);const r=_e[s];r&&r.forEach((n=>{for(let s=0;s<n.length;s+=2)o.push([n[s]+e,n[s+1]+i,0]),s&&t.push([o.length-2,o.length-1])}))}const s=F(...o.map((e=>e[0])));for(let e of o)e[0]-=s/2;return{verts:o,elements:t}}function Ue(e){const t=D(Ye(e));return e=>{V(t)(e),[t.Elements.buffer,t.Normal.buf,t.Position.buf,t.Side.buf].map((e=>o.deleteBuffer(e)))}}let De=null;const Ve=["beat","rocks","press Q to start","mind the rhythm","level 1/6\nwarm up the engines","level 2/6\naura sense","level 3/6\nmy house is full of traps","level 4/6\nmagicland dizzy","level 5/6\nminefield mahjong","level 6/6\nseason finale","well done","excellent","astounding","astoneding","q","w","e","beat\nmiss","POW","  Aura\nunlocked\n / W /"," Mortar\nunlocked\n / E /"," Cannon\namplified","  Aura\nempowered"].map((function(e){return V(D(Ye(e)))}));w.frame((e=>{const o=ie(),t=e.time-(De||e.time);De=e.time,ye(t),we.map((e=>e.update(t))),we.splice(0,we.length,...we.filter((e=>e.alive))),w.clear({color:[0,0,0,1]});const n=Ee.title?4:Ee.level,i=[[-6,69*n%16-8],[6,32*n%16-8]],s=[...[[[0,0,1],[0,1,0]],[[0,0,1],[1,0,1]],[[.5,.5,0],[1,.5,0]],[[.2,.2,1],[1,.2,0]],[[1,.3,0],[.5,0,0]],[[1,0,1],[0,1,0]]][n]];if(Ee.title||(i.push(Ee.ship.pos),s.push([.2,.2,1])),H({translation:[0,-9],thickness:100,scale:1.2,lights:i,lightColors:s}),Ee.asteroids.forEach((e=>{[Z,I,O][e.generation]({translation:e.pos,rotation:e.rotation+Ee.rotation,rotationZ:6*e.rZ,scale:.1*e.colliderSize/1.6,thickness:.2,color:e.color}),Ee.renderHitboxes&&q({translation:e.pos,scale:e.colliderSize/16,thickness:.4,color:e.collides?[1,0,0]:[.2,.2,.2]})})),Ee.mines.forEach((e=>{K({translation:e.pos,scale:.05,thickness:.2,rotationY:2*Ee.rotation+4*B(2,1.2-T(e.life,1.2)+1),color:[.3,0,0]}),(e.life>1.2?G:W)({translation:e.pos,scale:.008,thickness:.2,color:[1,0,0]}),q({translation:e.pos,scale:e.colliderSize/16,thickness:.2,color:[.3,0,0]})})),Ee.aliens.forEach((e=>{N({translation:e.pos,rotation:-Ee.rotation,rotationY:2*-Ee.rotation,scale:.1,thickness:.2,color:[1,1,1]}),N({translation:e.pos,rotation:2*-Ee.rotation,rotationY:-Ee.rotation,scale:.1,thickness:.2,color:[1,1,1]}),(ie()>.2?W:G)({translation:e.pos,scale:.01,thickness:.2,color:[1,1,1]});const o=e.shootCooldown;o>.6?H({translation:e.pos,rotationZ:e.shootAngle,scale:2.5,thickness:.1,color:[1,1,1]}):o&&(H({translation:e.pos,rotationZ:e.shootAngle,scale:2.5,thickness:2*(1-o),color:[o,o,o]}),H({translation:e.pos,rotationZ:e.shootAngle,scale:2.5,thickness:2*o,color:[2*o,1*o,2*o]}))})),[...Ee.bullets,...Ee.mortars].forEach((e=>{H({translation:e.pos,rotationZ:e.rotation,scale:.05,thickness:.3,color:[1,0,0]})})),Ee.enemyBullets.forEach((e=>{H({translation:e.pos,rotationZ:e.rotation,scale:.05,thickness:.3,color:[1,1,0]})})),Ee.title){const e=.1*(function(e){const o=Y/3;return 0===e?0:1===e?1:B(2,-10*e)*y((10*e-.75)*o)+1}(o)-1);Ve[0]({translation:[0,4],scale:.02,color:[1,1,1],thickness:U(.9,.3,o),rotationY:e}),Ve[1]({translation:[0,0],scale:.02,color:[1,1,1],thickness:U(.9,.3,o),rotationY:e}),Ve[2]({translation:[0,-6],scale:.008,color:[.5,.5,.5],thickness:.3}),Ve[3]({translation:[0,-8],scale:.008,color:[.5,.5,.5],thickness:.3})}else if(Ee.hp&&j({translation:Ee.ship.pos,rotation:Ee.ship.hitTimer?7*B(Ee.ship.hitTimer/1.2,3):0,rotationY:Ee.ship.thrust,rotationZ:Ee.ship.angle,scale:.05,thickness:U(.6,.1,o),color:[.2,.2,1]}),Ee.renderHitboxes&&q({translation:Ee.ship.pos,scale:Ee.ship.colliderSize/16,thickness:.4,color:Ee.ship.collides?[1,0,0]:[.2,.2,.2]}),Ee.ship.aura){const{pos:e,aura:o}=Ee.ship,{auraSize:t}=Ee,n=3*(.6-o);q({translation:e,scale:o*t/16,thickness:n,color:[1,0,1]}),[.8,.9,1.1,1.3].forEach((i=>{q({translation:e,scale:i*(o*t)/16,thickness:.5*n,color:[.4*i,0,.4/i]})}))}Ee.blasts.map((({pos:e,size:o})=>{const t=3*(.6-o);q({translation:e,scale:3*o/16,thickness:t,color:[1,0,1]}),[.8,.9,1.1,1.3].forEach((n=>{q({translation:e,scale:n*(3*o)/16,thickness:.5*t,color:[.4*n,.4/n,1]})}))})),Ee.powerups.map((({pos:e})=>{const o=[0,1,0];N({translation:e,rotation:3*Ee.rotation,rotationY:.02*Ee.rotation,scale:.08,thickness:.3,color:o}),q({translation:e,scale:.0625,thickness:.3,color:o}),Ve[18]({translation:[e[0],e[1]-.3],scale:.004,thickness:.3,color:o})})),we.forEach((e=>{e.render()})),Se&&Se.render(),Ee.signs.forEach((e=>{const{v:o=1}=e,t=F(0,1-e.life),n=30*B(t,3);Ve[e.index]({translation:e.pos,color:e.color||[1-t,1-t,1-t],scale:e.size||.004,thickness:.2,rotation:n*o})})),Ee.title||([-1,0,1].forEach(((e,t)=>{const n=Ee.ship.powerups<t,i=!n&&(Ee.cooldowns[t]>0?0:1),s=n?[.03,.03,.03]:i?[.7,.7,.7]:[.3,.3,.3];if(N({translation:[2*e,-7.4],rotation:-.2,rotationY:-.15,rotationZ:.04,scale:.08,thickness:.2,color:s}),Ve[15+e]({translation:[2*e,-7.7],scale:U(.005,.0055,B(1-o,2)*i),thickness:.2,color:s}),Ee.cooldowns[t]>0){Ue(""+Math.ceil((Ee.cooldowns[t]+.2)/.6))({translation:[2*e,-8.5],scale:.002,thickness:.2,color:[1,1,1]})}})),j({translation:[-15,-8],scale:.03,thickness:.2,rotationY:.2,rotationZ:.2,color:[.2,.2,1]}),Ue(`x${Ee.hp}`)({translation:[-14,-8],scale:.005,thickness:.2,color:[1,1,1]}),Ue(""+10*Ee.score)({translation:[12,-8],scale:.005,thickness:.2,color:[1,1,1]}),Ue("streak "+Ee.combo)({translation:[12,-8.6],scale:.002,thickness:.15,color:[1,1,1]})),Ee.win&&5==Ee.level&&Ue("Congratulations!\n\nFinal score\n"+10*Ee.score+"\n\nDouble click to tweet and share")({translation:[0,4],scale:.008,thickness:.2,color:[1,1,1]}),Ee.title||0!=Ee.hp||Ue("Game over!\n\nFinal score\n"+10*Ee.score+"\n\nDouble click to tweet and share\nR to start over")({translation:[0,4],scale:.008,thickness:.2,color:[1,1,1]})}));