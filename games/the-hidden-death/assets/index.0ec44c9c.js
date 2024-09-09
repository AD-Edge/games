var Re=Object.defineProperty;var Ce=(e,t,n)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var A=(e,t,n)=>(Ce(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Q=1e-6,L=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function Me(){var e=new L(9);return L!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function F(){var e=new L(16);return L!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function ee(e,t,n,s,o,a,i,l,d,u,c,y,m,p,b,f){var g=new L(16);return g[0]=e,g[1]=t,g[2]=n,g[3]=s,g[4]=o,g[5]=a,g[6]=i,g[7]=l,g[8]=d,g[9]=u,g[10]=c,g[11]=y,g[12]=m,g[13]=p,g[14]=b,g[15]=f,g}function _e(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function O(e,t,n,s){var o=t[0],a=t[1],i=t[2],l=t[3],d=o+o,u=a+a,c=i+i,y=o*d,m=o*u,p=o*c,b=a*u,f=a*c,g=i*c,v=l*d,S=l*u,R=l*c,_=s[0],U=s[1],N=s[2];return e[0]=(1-(b+g))*_,e[1]=(m+R)*_,e[2]=(p-S)*_,e[3]=0,e[4]=(m-R)*U,e[5]=(1-(y+g))*U,e[6]=(f+v)*U,e[7]=0,e[8]=(p+S)*N,e[9]=(f-v)*N,e[10]=(1-(y+b))*N,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function Ne(e,t,n,s,o){var a=1/Math.tan(t/2),i;return e[0]=a/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,o!=null&&o!==1/0?(i=1/(s-o),e[10]=(o+s)*i,e[14]=2*o*s*i):(e[10]=-1,e[14]=-2*s),e}var ge=Ne;function me(e,t,n,s){var o,a,i,l,d,u,c,y,m,p,b=t[0],f=t[1],g=t[2],v=s[0],S=s[1],R=s[2],_=n[0],U=n[1],N=n[2];return Math.abs(b-_)<Q&&Math.abs(f-U)<Q&&Math.abs(g-N)<Q?_e(e):(c=b-_,y=f-U,m=g-N,p=1/Math.hypot(c,y,m),c*=p,y*=p,m*=p,o=S*m-R*y,a=R*c-v*m,i=v*y-S*c,p=Math.hypot(o,a,i),p?(p=1/p,o*=p,a*=p,i*=p):(o=0,a=0,i=0),l=y*i-m*a,d=m*o-c*i,u=c*a-y*o,p=Math.hypot(l,d,u),p?(p=1/p,l*=p,d*=p,u*=p):(l=0,d=0,u=0),e[0]=o,e[1]=l,e[2]=c,e[3]=0,e[4]=a,e[5]=d,e[6]=y,e[7]=0,e[8]=i,e[9]=u,e[10]=m,e[11]=0,e[12]=-(o*b+a*f+i*g),e[13]=-(l*b+d*f+u*g),e[14]=-(c*b+y*f+m*g),e[15]=1,e)}function te(){var e=new L(3);return L!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Ue(e){var t=e[0],n=e[1],s=e[2];return Math.hypot(t,n,s)}function w(e,t,n){var s=new L(3);return s[0]=e,s[1]=t,s[2]=n,s}function W(e,t,n,s){return e[0]=t,e[1]=n,e[2]=s,e}function De(e,t){var n=t[0],s=t[1],o=t[2],a=n*n+s*s+o*o;return a>0&&(a=1/Math.sqrt(a)),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a,e}function Pe(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Z(e,t,n){var s=t[0],o=t[1],a=t[2],i=n[0],l=n[1],d=n[2];return e[0]=o*d-a*l,e[1]=a*i-s*d,e[2]=s*l-o*i,e}function Be(e,t,n,s){var o=t[0],a=t[1],i=t[2];return e[0]=o+s*(n[0]-o),e[1]=a+s*(n[1]-a),e[2]=i+s*(n[2]-i),e}function Y(e,t,n){var s=t[0],o=t[1],a=t[2],i=n[3]*s+n[7]*o+n[11]*a+n[15];return i=i||1,e[0]=(n[0]*s+n[4]*o+n[8]*a+n[12])/i,e[1]=(n[1]*s+n[5]*o+n[9]*a+n[13])/i,e[2]=(n[2]*s+n[6]*o+n[10]*a+n[14])/i,e}var xe=Ue;(function(){var e=te();return function(t,n,s,o,a,i){var l,d;for(n||(n=3),s||(s=0),o?d=Math.min(o*n+s,t.length):d=t.length,l=s;l<d;l+=n)e[0]=t[l],e[1]=t[l+1],e[2]=t[l+2],a(e,e,i),t[l]=e[0],t[l+1]=e[1],t[l+2]=e[2];return t}})();function ve(){var e=new L(4);return L!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function x(e,t,n,s){var o=new L(4);return o[0]=e,o[1]=t,o[2]=n,o[3]=s,o}function Fe(e,t){var n=t[0],s=t[1],o=t[2],a=t[3],i=n*n+s*s+o*o+a*a;return i>0&&(i=1/Math.sqrt(i)),e[0]=n*i,e[1]=s*i,e[2]=o*i,e[3]=a*i,e}(function(){var e=ve();return function(t,n,s,o,a,i){var l,d;for(n||(n=4),s||(s=0),o?d=Math.min(o*n+s,t.length):d=t.length,l=s;l<d;l+=n)e[0]=t[l],e[1]=t[l+1],e[2]=t[l+2],e[3]=t[l+3],a(e,e,i),t[l]=e[0],t[l+1]=e[1],t[l+2]=e[2],t[l+3]=e[3];return t}})();function ie(){var e=new L(4);return L!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function Oe(e,t,n){n=n*.5;var s=Math.sin(n);return e[0]=s*t[0],e[1]=s*t[1],e[2]=s*t[2],e[3]=Math.cos(n),e}function J(e,t,n,s){var o=t[0],a=t[1],i=t[2],l=t[3],d=n[0],u=n[1],c=n[2],y=n[3],m,p,b,f,g;return p=o*d+a*u+i*c+l*y,p<0&&(p=-p,d=-d,u=-u,c=-c,y=-y),1-p>Q?(m=Math.acos(p),b=Math.sin(m),f=Math.sin((1-s)*m)/b,g=Math.sin(s*m)/b):(f=1-s,g=s),e[0]=f*o+g*d,e[1]=f*a+g*u,e[2]=f*i+g*c,e[3]=f*l+g*y,e}function ze(e,t){var n=t[0]+t[4]+t[8],s;if(n>0)s=Math.sqrt(n+1),e[3]=.5*s,s=.5/s,e[0]=(t[5]-t[7])*s,e[1]=(t[6]-t[2])*s,e[2]=(t[1]-t[3])*s;else{var o=0;t[4]>t[0]&&(o=1),t[8]>t[o*3+o]&&(o=2);var a=(o+1)%3,i=(o+2)%3;s=Math.sqrt(t[o*3+o]-t[a*3+a]-t[i*3+i]+1),e[o]=.5*s,s=.5/s,e[3]=(t[a*3+i]-t[i*3+a])*s,e[a]=(t[a*3+o]+t[o*3+a])*s,e[i]=(t[i*3+o]+t[o*3+i])*s}return e}var k=x,Te=Fe;(function(){var e=te(),t=w(1,0,0),n=w(0,1,0);return function(s,o,a){var i=Pe(o,a);return i<-.999999?(Z(e,t,o),xe(e)<1e-6&&Z(e,n,o),De(e,e),Oe(s,e,Math.PI),s):i>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(Z(e,o,a),s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=1+i,Te(s,s))}})();(function(){var e=ie(),t=ie();return function(n,s,o,a,i,l){return J(e,s,i,l),J(t,o,a,l),J(n,e,t,2*l*(1-l)),n}})();(function(){var e=Me();return function(t,n,s,o){return e[0]=s[0],e[3]=s[1],e[6]=s[2],e[1]=o[0],e[4]=o[1],e[7]=o[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],Te(t,ze(t,e))}})();const X=e=>t=>t.componentTypes.includes(e),ke=e=>t=>e.every(n=>n(t));class $e{constructor(t){A(this,"predicate");A(this,"entities",[]);this.predicate=t}addEntity(t){this.entities.push(t)}removeEntity(t){this.entities=this.entities.filter(n=>n!==t)}}const Ve=(e=0)=>t=>{t*=.001;const n=t-e;return e=t,n};class We{constructor({initialState:t,stateReducer:n}={}){A(this,"state");A(this,"stateReducer");A(this,"stateChangeSubscribers",[]);A(this,"eventSubsribers",[]);A(this,"getDelta",Ve());A(this,"queries",[]);A(this,"entities",{});A(this,"systems",[]);A(this,"startupSystems",[]);this.state=t,this.stateReducer=n}onStateChange(t){this.stateChangeSubscribers.push(t)}dispatch(t){let n=!0;const s=this.stateReducer(this.state,t);for(let o=0;o<this.stateChangeSubscribers.length;o++){const a=this.stateChangeSubscribers[o];a({previousState:this.state,newState:s,action:t})===!1&&(n=!1)}return n&&(this.state=s),this}getState(){return this.state}onEvent(t){this.eventSubsribers.push(t)}dispatchEvent(t){for(let n=0;n<this.eventSubsribers.length;n++){const s=this.eventSubsribers[n];s(t)}}createQuery(t){const n=new $e(t);return this.queries.push(n),n}spawnEntity(t){this.entities[t.name]=t;for(let n=0;n<this.queries.length;n++){const s=this.queries[n];s.predicate(t)&&s.addEntity(t)}return this}despawnEntity(t){this.entities[t.name]=void 0;for(let n=0;n<this.queries.length;n++){const s=this.queries[n];s.predicate(t)&&s.removeEntity(t)}return this}getEntity(t){return this.entities[t]}addSystem(t){return this.systems.push(t),this}addStartupSystem(t){return this.startupSystems.push(t),this}run(){for(let n=0;n<this.startupSystems.length;n++)this.startupSystems[n](this);const t=n=>{const s=this.getDelta(n);for(let o=0;o<this.systems.length;o++)this.systems[o](s,n);window.requestAnimationFrame(t)};return window.requestAnimationFrame(t),this}}const V=(e,t)=>({type:e,data:t}),Ee="TargetTransform",Ae=e=>V(Ee,e),we="Transform",be=e=>{const t={position:e.position,rotation:k(0,0,0,1),scale:e.scale,modelMatrix:ee(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)};return O(t.modelMatrix,t.rotation,t.position,t.scale),V(we,t)},ne="Tile",Ye=e=>V(ne,e),je="Player",Ge=e=>V(je,e),qe="Camera",He=e=>{const t={position:e.position,lookAt:e.lookAt,upVector:w(0,1,0),viewMatrix:ee(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),projectionMatrix:ee(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),fov:45,aspect:e.aspect,near:.1,far:1e3};return me(t.viewMatrix,t.position,t.lookAt,t.upVector),ge(t.projectionMatrix,t.fov,t.aspect,t.near,t.far),V(qe,t)},Qe=[-1,-1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1],Ke=[0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0],ce=[0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23],I={positions:Qe,normals:Ke,indices:ce,indicesLength:ce.length},Xe=0,h=1,r=2,T=3,E=4,re=Xe,Ze=h,Je=r,et=T,Se=E,tt=[[r,T,r],[r,r,r],[r,r,r],[r,r,r],[r,E,r]],nt=[[r,T,r],[r,h,r],[r,r,r],[r,r,r],[r,E,r]],rt=[[T,r,r],[h,h,r],[r,r,r],[r,r,r],[r,E,r]],st=[[r,h,T],[r,h,r],[r,r,r],[r,r,r],[r,E,r]],ot=[[r,r,r],[r,T,r],[h,h,r],[r,r,r],[r,E,r]],at=[[r,r,r],[r,r,r],[r,h,T],[r,r,h],[r,E,r]],it=[[r,r,r],[T,h,r],[h,h,r],[r,r,r],[r,E,r]],ct=[[r,r,r],[r,r,r],[r,T,h],[r,h,r],[r,E,r]],lt=[[r,r,r],[r,h,r],[T,r,r],[h,h,r],[r,E,r]],dt=[[r,T,r],[r,h,r],[r,r,r],[h,r,h],[r,E,r]],ht=[[r,r,r],[r,h,T],[r,h,r],[r,r,r],[r,E,h]],ut=[[T,r,h],[h,r,r],[h,h,r],[r,r,r],[r,E,r]],ft=[[r,h,T],[r,r,r],[r,h,h],[r,h,r],[r,E,r]],pt=[[h,h,r],[T,r,r],[h,h,r],[r,h,r],[r,E,r]],yt=[[h,T,r],[r,h,r],[r,r,r],[h,r,h],[r,E,r]],gt=[[r,r,r],[r,h,T],[r,r,h],[h,r,r],[r,E,r]],mt=[[r,h,r],[r,r,r],[r,h,T],[r,h,h],[r,E,r]],vt=[[r,r,r],[r,h,r],[T,h,r],[h,h,r],[r,E,r]],Tt=[[r,r,h],[h,T,h],[r,r,r],[r,h,r],[r,E,r]],Et=[[r,r,r],[r,h,r],[h,h,r],[T,h,r],[r,E,r]],At=[[h,h,r],[r,r,r],[r,h,T],[r,r,h],[r,E,r]],P=[tt,nt,rt,st,ot,at,it,ct,lt,dt,ht,ut,ft,pt,yt,gt,mt,vt,Tt,Et,At],wt={premultipliedAlpha:!1,alpha:!1,powerPreference:"high-performance",antialias:!0,desynchronized:!0},bt=(e,t)=>{const n=e.getContext("webgl2",{...wt,...t||{}});if(!n)throw new Error("cannot get webgl2 context");return n.viewport(0,0,e.width,e.height),n.clearColor(0,0,0,1),n.colorMask(!0,!0,!0,!1),n.enable(n.DEPTH_TEST),n.blendFunc(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA),n},le=(e,t,n)=>{const s=e.createShader(t);if(!s)throw new Error("could not create shader");if(e.shaderSource(s,n),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS))return s;throw console.error(e.getShaderInfoLog(s)),e.deleteShader(s),new Error("could not create shader")},St=(e,t,n)=>{const s=e.createProgram();if(!s)throw new Error("could not create program");if(e.attachShader(s,t),e.attachShader(s,n),e.linkProgram(s),e.getProgramParameter(s,e.LINK_STATUS))return s;throw console.error(e.getProgramInfoLog(s)),e.deleteProgram(s),new Error("could not create program")},j=(e,t,n)=>{const s=e.createBuffer();if(!s)throw new Error("could not create array buffer");return e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,t,n||e.STATIC_DRAW),s},G=(e,t,n,s=e.FLOAT,o=0,a=0)=>{e.enableVertexAttribArray(t),e.vertexAttribPointer(t,n,s,!1,o,a)},de=(e,t,n)=>{const s=e.createBuffer();if(!s)throw new Error("could not create element array buffer");return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,s),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,n||e.STATIC_DRAW),s},he=e=>{const t=e.createVertexArray();if(!t)throw new Error("could not create vertex array object");return e.bindVertexArray(t),t},ue=(e,t)=>{e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=0,e[4]=t[3],e[5]=t[4],e[6]=t[5],e[7]=0,e[8]=t[6],e[9]=t[7],e[10]=t[8],e[11]=0};class fe{constructor(t,n,s,o){A(this,"gl");A(this,"webglBuffer");A(this,"bufferData");A(this,"blockName");A(this,"binding");A(this,"config");A(this,"views",{});A(this,"mat3BufferLayoutFuckup",[0,0,0,0,0,0,0,0,0,0,0,0]);A(this,"arrayCache",[0]);this.gl=t,this.blockName=n,this.binding=s,this.config=o}bindToShaderProgram(t){const n=this.gl,s=n.getUniformBlockIndex(t,this.blockName);if(n.uniformBlockBinding(t,s,this.binding),!this.bufferData){const o=n.getActiveUniformBlockParameter(t,s,n.UNIFORM_BLOCK_DATA_SIZE);this.bufferData=new ArrayBuffer(o);const a=Object.keys(this.config),i=n.getUniformIndices(t,a),l=n.getActiveUniforms(t,i,n.UNIFORM_OFFSET);if(!l)throw new Error("invalid ubo config");this.views=a.reduce((d,u,c)=>(typeof this.config[u]=="number"?(this.arrayCache[0]=this.config[u],d[u]=new Float32Array(this.bufferData,l[c],1),d[u].set(this.arrayCache)):this.config[u].length===9?(d[u]=new Float32Array(this.bufferData,l[c],12),ue(this.mat3BufferLayoutFuckup,this.config[u]),d[u].set(this.mat3BufferLayoutFuckup)):(d[u]=new Float32Array(this.bufferData,l[c],this.config[u].length),d[u].set(this.config[u])),d),{}),this.webglBuffer=n.createBuffer(),n.bindBuffer(n.UNIFORM_BUFFER,this.webglBuffer),n.bufferData(n.UNIFORM_BUFFER,this.bufferData,n.DYNAMIC_DRAW),n.bindBufferBase(n.UNIFORM_BUFFER,this.binding,this.webglBuffer)}return this}bindBase(){const t=this.gl;return t.bindBufferBase(t.UNIFORM_BUFFER,this.binding,this.webglBuffer),this}setMat4(t,n){return this.views[t].set(n),this}setMat3(t,n){return ue(this.mat3BufferLayoutFuckup,n),this.views[t].set(this.mat3BufferLayoutFuckup),this}setVec4(t,n){return this.views[t].set(n),this}setVec3(t,n){return this.views[t].set(n),this}setVec2(t,n){return this.views[t].set(n),this}setScalar(t,n){return this.arrayCache[0]=n,this.views[t].set(this.arrayCache),this}update(){const t=this.gl;return t.bindBuffer(t.UNIFORM_BUFFER,this.webglBuffer),t.bufferSubData(t.UNIFORM_BUFFER,0,this.bufferData),this}cleanup(){return this.gl.deleteBuffer(this.webglBuffer),this}}const It=`
#version 300 es
layout(location = 0) in vec3 position;
layout(location = 1) in vec3 normal;
struct C { mat4 vm; mat4 pm; };
uniform SU { C c; };
struct T { mat4 mm; };
struct M { vec4 color; };
uniform EU { T t; M m; };
out vec3 vN;
void main() {
    vN = normal;
    vec4 worldPos = t.mm * vec4(position, 1.0);
    gl_Position = c.pm * c.vm * worldPos;
}
`.trim(),Lt=`
#version 300 es
precision highp float;
struct T { mat4 mm; };
struct M { vec4 color; };
uniform EU { T t; M m; };
in vec3 vN;
vec3 lightDiffuse = vec3(0.8, 0.8, 0.8);
out vec4 outColor;
void main() {
    vec3 ambient = m.color.rgb * 0.05;
    vec3 direction = normalize(vec3(0.5, 1.0, 3.0));
    vec3 normal = normalize(vN);
    float diff = max(dot(normal, direction), 0.0);
    vec3 diffuse = lightDiffuse * m.color.a * diff * m.color.rgb;
    outColor = vec4(ambient + diffuse, 1.0);
}
`.trim(),Rt={"c.vm":F(),"c.pm":F()},Ct={"t.mm":F(),"m.color":ve()},Mt=()=>{const e=[...I.positions],t=[...I.positions],n=[...I.positions],s=[...I.positions],o=te(),a=F();O(a,k(0,0,0,1),w(0,.35,0),w(.25,.25,.25));for(let c=0;c<e.length;c+=3){const y=e[c],m=e[c+1],p=e[c+2];W(o,y,m,p),Y(o,o,a),e[c]=o[0],e[c+1]=o[1],e[c+2]=o[2]}const i=F();O(i,k(0,0,0,1),w(-.35,-.25,0),w(.1,.2,.1));for(let c=0;c<t.length;c+=3){const y=t[c],m=t[c+1],p=t[c+2];W(o,y,m,p),Y(o,o,i),t[c]=o[0],t[c+1]=o[1],t[c+2]=o[2]}const l=F();O(l,k(0,0,0,1),w(.35,-.25,0),w(.1,.2,.1));for(let c=0;c<n.length;c+=3){const y=n[c],m=n[c+1],p=n[c+2];W(o,y,m,p),Y(o,o,l),n[c]=o[0],n[c+1]=o[1],n[c+2]=o[2]}const d=F();O(d,k(0,0,0,1),w(0,-.5,0),w(.2,.5,.2));for(let c=0;c<s.length;c+=3){const y=s[c],m=s[c+1],p=s[c+2];W(o,y,m,p),Y(o,o,d),s[c]=o[0],s[c+1]=o[1],s[c+2]=o[2]}const u=[...I.indices,...I.indices.map(c=>24+c),...I.indices.map(c=>48+c),...I.indices.map(c=>72+c)];return{positions:new Float32Array([...e,...s,...t,...n]),normals:new Float32Array([...I.normals,...I.normals,...I.normals,...I.normals]),indices:new Uint32Array(u),indicesLength:u.length}},q={positions:new Float32Array(I.positions),normals:new Float32Array(I.normals),indices:new Uint32Array(I.indices),indicesLength:I.indicesLength},H=Mt(),_t=e=>{const t=document.getElementById("canvas");t.width=window.innerWidth,t.height=window.innerHeight;const n=bt(t);n.clearColor(0,0,0,1),n.viewport(0,0,window.innerWidth,window.innerHeight);const s=le(n,n.VERTEX_SHADER,It),o=le(n,n.FRAGMENT_SHADER,Lt),a=St(n,s,o);n.useProgram(a);const i=new fe(n,"SU",0,Rt).bindToShaderProgram(a),l=new fe(n,"EU",1,Ct).bindToShaderProgram(a);window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,n.viewport(0,0,window.innerWidth,window.innerHeight);const f=e.getEntity("Camera").getComponent("Camera");f.data.aspect=window.innerWidth/window.innerHeight,f.data.position[2]=f.data.aspect<.48?20:window.innerWidth<1200?16:12,f.data.position[1]=window.innerWidth<1200?6:3,me(f.data.viewMatrix,f.data.position,f.data.lookAt,f.data.upVector),ge(f.data.projectionMatrix,f.data.fov,f.data.aspect,f.data.near,f.data.far),i.setMat4("c.vm",f.data.viewMatrix).setMat4("c.pm",f.data.projectionMatrix).update()});const d=e.createQuery(X(ne)).entities,u=[],c={},y=x(.31,.27,.89,.8),m={0:x(1,1,1,.3),1:x(1,1,1,.3),2:x(1,1,1,.3),3:x(0,1,0,.8),4:x(1,1,1,.3)},p=f=>{if(c[f.name]!==void 0)return u[c[f.name]];const v=f.getComponent("Tile").data,S=f.getComponent("Transform").data,R=he(n),_=j(n,q.positions);G(n,0,3);const U=j(n,q.normals);G(n,1,3);const N=de(n,q.indices),ae={entity:f,update:()=>{v.tile!==re&&(l.setMat4("t.mm",S.modelMatrix).setVec4("m.color",m[v.tile]).update(),n.bindVertexArray(R),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,N),n.drawElements(n.TRIANGLES,q.indicesLength,n.UNSIGNED_INT,0))},cleanup:()=>{n.deleteBuffer(_),n.deleteBuffer(U),n.deleteBuffer(N),n.deleteVertexArray(R)}};return u.push(ae),c[f.name]=u.length-1,ae};window.addEventListener("unload",()=>{i.cleanup();for(let f=0;f<u.length;f++)u[f].cleanup()});const b=f=>{const g=f.getComponent("Transform").data,v=he(n),S=j(n,H.positions);G(n,0,3);const R=j(n,H.normals);G(n,1,3);const _=de(n,H.indices);return{entity:f,update:()=>{l.setMat4("t.mm",g.modelMatrix).setVec4("m.color",y).update(),n.bindVertexArray(v),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,_),n.drawElements(n.TRIANGLES,H.indicesLength,n.UNSIGNED_INT,0)},cleanup:()=>{n.deleteBuffer(S),n.deleteBuffer(R),n.deleteBuffer(_),n.deleteVertexArray(v)}}};return()=>{const f=e.getEntity("Camera").getComponent("Camera");n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),i.setMat4("c.vm",f.data.viewMatrix).setMat4("c.pm",f.data.projectionMatrix).update();for(let v=0;v<d.length;v++){const S=d[v];p(S).update()}const g=e.getEntity("Player");return g&&b(g).update(),()=>{i.cleanup();for(let S=0;S<u.length;S++)u[S].cleanup();const v=e.getEntity("Player");v&&b(v).cleanup()}}},D=(e,t,n,s)=>o=>(o-e)*(s-n)/(t-e)+n,Nt=e=>Object.keys(e),M=e=>new Promise(t=>setTimeout(t,e)),K=new We({initialState:{status:"paused",currentLevel:0,deathCounter:0,sound:!0,discoveredDeadlyTilesPerLevel:{}},stateReducer:(e,t)=>{switch(t.type){case"SET_SOUND":return{...e,sound:t.sound};case"RUN_START_ANIMATION":return{...e,status:"animating"};case"START":return{...e,status:"running",currentLevel:0,deathCounter:0,discoveredDeadlyTilesPerLevel:{}};case"RUN_DYING_ANIMATION":return{...e,status:"animating"};case"DIE":return{...e,status:"dead",deathCounter:e.deathCounter+1,discoveredDeadlyTilesPerLevel:t.deadlyTile?{...e.discoveredDeadlyTilesPerLevel,[t.deadlyTile.level]:e.discoveredDeadlyTilesPerLevel[t.deadlyTile.level]?[...e.discoveredDeadlyTilesPerLevel[t.deadlyTile.level],t.deadlyTile.position]:[t.deadlyTile.position]}:e.discoveredDeadlyTilesPerLevel};case"RUN_LEVEL_UP_ANIMATION":return{...e,status:"animating",currentLevel:e.currentLevel+1};case"LEVEL_UP":return{...e,status:"running"};case"COMPLETE":return{...e,status:"completed"};case"RUN_RE_START_ANIMATION":return{...e,status:"animating",currentLevel:t.level,deathCounter:t.deaths,discoveredDeadlyTilesPerLevel:t.discoveredDeadlyTilesPerLevel};case"RE_START":return{...e,status:"running"};default:return e}}}),Ut=(e,t)=>t>1e4?null:(Math.pow(t,1.055)&128?1:-1)*Math.pow(e(t,1e4),2),pe=(e,t)=>{t=Math.pow(t,.96)*1.3;const n=9e4;return t>n?null:(t+Math.sin(t/1900)*80&64?1:-1)*Math.pow(e(t,n),3)},Dt=(e,t)=>{const n=[0,4,7,12,void 0,7,12],s=35e3;if(t>s)return null;const o=n.length*t/s|0,a=n[o];if(a===void 0)return 0;const i=Math.pow(2,a/12)*.8,l=e(t*n.length%s,s);return t*i&64?l:-l},Ie=(e,t)=>{if(t>11e4)return null;const s=e(t,11e4);return Math.sin(t*.001*Math.sin(.009*t+Math.sin(t/200))+Math.sin(t/100))*s*s},Pt=()=>{const e=(o,a)=>(a-o)/a,t=new AudioContext,n=t.createBuffer(1,96e3,48e3),s=n.getChannelData(0);return{play:o=>{if(!K.getState().sound)return;for(let i=96e3;i--;)s[i]=o(e,i);const a=t.createBufferSource();a.buffer=n,a.connect(t.destination),a.start()}}},z=Pt(),C=(e,t,n,s,o="easeOutQuart")=>{e.data.position[t]=n,e.data.easing.function=o,e.data.easing.time=0,e.data.easing.increment=s},Bt=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],xt=e=>Bt.includes(e),$=(e,t,n,s)=>{const o=t.getComponent("Player"),a=t.getComponent("TargetTransform");if(e==="ArrowDown"){o.data.z+=1;const d=D(0,n.length-1,-((n.length-1)/2),(n.length-1)/2);C(a,2,d(o.data.z)*2.35,2.3)}else if(e==="ArrowUp"){o.data.z-=1;const d=D(0,n.length-1,-((n.length-1)/2),(n.length-1)/2);C(a,2,d(o.data.z)*2.35,2.3)}else if(e==="ArrowLeft"){o.data.x-=1;const d=n[o.data.z]||[],u=D(0,d.length-1,-((d.length-1)/2),(d.length-1)/2);C(a,0,u(o.data.x)*2.35,2.3)}else if(e==="ArrowRight"){o.data.x+=1;const d=n[o.data.z]||[],u=D(0,d.length-1,-((d.length-1)/2),(d.length-1)/2);C(a,0,u(o.data.x)*2.35,2.3)}const i=n[o.data.z];if(!i){s.dispatch({type:"RUN_DYING_ANIMATION"}),M(300).then(()=>{C(a,1,-20,.1),s.dispatch({type:"DIE"})});return}const l=i[o.data.x];if(l===et){z.play(Dt);const{currentLevel:d}=s.getState();d===P.length-1?s.dispatch({type:"COMPLETE"}):s.dispatch({type:"RUN_LEVEL_UP_ANIMATION"})}else if(l===re||l===void 0)z.play(pe),s.dispatch({type:"RUN_DYING_ANIMATION"}),M(300).then(()=>{C(a,1,-20,.1),s.dispatch({type:"DIE"})});else if(l===Ze){z.play(pe),s.dispatch({type:"RUN_DYING_ANIMATION"});const u=s.getEntity(`Tile-${o.data.x}-${o.data.z}`).getComponent("TargetTransform");M(150).then(async()=>{C(u,1,-20,.1),await M(150),C(a,1,-20,.1),s.dispatch({type:"DIE",deadlyTile:{level:s.getState().currentLevel,position:{x:o.data.x,z:o.data.z}}})})}else l===Je&&z.play(Ut)},Ft={ArrowDown:(e,t,n)=>{$("ArrowDown",e,t,n)},ArrowUp:(e,t,n)=>{$("ArrowUp",e,t,n)},ArrowLeft:(e,t,n)=>{$("ArrowLeft",e,t,n)},ArrowRight:(e,t,n)=>{$("ArrowRight",e,t,n)}},ye=e=>{e.style.borderColor="green",M(150).then(()=>{e.style.borderColor="transparent"})},Ot=e=>{e.onStateChange(({action:t})=>{if(t.type==="START"){const n=e.getEntity("Player"),s={ArrowUp:document.getElementById("up"),ArrowLeft:document.getElementById("left"),ArrowRight:document.getElementById("right"),ArrowDown:document.getElementById("down")};document.addEventListener("keyup",o=>{if(!xt(o.key))return;const{currentLevel:a,status:i}=e.getState(),l=P[a];i==="running"&&(ye(s[o.key]),Ft[o.key](n,l,e))}),Nt(s).forEach(o=>{s[o].addEventListener("click",()=>{const{currentLevel:a,status:i}=e.getState(),l=P[a];i==="running"&&(ye(s[o]),$(o,n,l,e))})})}})},zt=e=>{const t=e.createQuery(X(ne)).entities;e.onStateChange(({action:n,newState:s})=>{(n.type==="RUN_LEVEL_UP_ANIMATION"||n.type==="RUN_RE_START_ANIMATION")&&M(200).then(async()=>{var u;const o=e.getEntity("Player"),a=o.getComponent("TargetTransform"),i=o.getComponent("Player");C(a,1,20,.05),await M(100);for(let c=0;c<t.length;c++){const m=t[c].getComponent("TargetTransform");C(m,1,20+c*c,1,"easeInQuart")}await M(1e3);const l=P[s.currentLevel],d=D(0,l.length-1,-((l.length-1)/2),(l.length-1)/2);for(let c=0;c<l.length;c++){const y=l[c],m=D(0,y.length-1,-((y.length-1)/2),(y.length-1)/2);for(let p=0;p<y.length;p++){const b=y[p];b===Se&&(i.data.x=p,i.data.z=c,a.data.position[0]=m(p)*2.35,a.data.position[2]=d(c)*2.35);const f=e.getEntity(`Tile-${p}-${c}`),g=f.getComponent("Tile"),v=f.getComponent("TargetTransform");g.data.x=p,g.data.z=c,g.data.tile=(u=s.discoveredDeadlyTilesPerLevel[s.currentLevel])!=null&&u.find(S=>S.x===p&&S.z===c)?re:b,v.data.position[0]=m(p)*2.35,v.data.position[2]=d(c)*2.35}}z.play(Ie);for(let c=0;c<t.length;c++){const m=t[c].getComponent("TargetTransform");C(m,1,0,.05)}await M(1e3),C(a,1,1.2,.1),await M(1e3),n.type==="RUN_LEVEL_UP_ANIMATION"&&e.dispatch({type:"LEVEL_UP"}),n.type==="RUN_RE_START_ANIMATION"&&e.dispatch({type:"RE_START"})})})},kt=(e,t)=>(e[t.type]=t,e),se=(e,t)=>{const n=t.reduce(kt,{});return{name:e,componentTypes:Object.keys(n),getComponent:s=>n[s]}},$t=(e,{tile:t,transform:n,targetTransform:s})=>se(e,[Ye(t),be(n),Ae(s)]),Vt=({player:e,transform:t,targetTransform:n})=>se("Player",[Ge(e),be(t),Ae(n)]),Wt=e=>se("Camera",[He(e)]),Yt=e=>{const t=window.innerWidth/window.innerHeight;e.spawnEntity(Wt({position:w(0,window.innerWidth<1200?6:3,t<.48?20:window.innerWidth<1200?16:12),lookAt:w(0,0,3),aspect:t})),e.onStateChange(({action:n,newState:s})=>{if(n.type==="RUN_START_ANIMATION"){z.play(Ie);const o=P[s.currentLevel],a=D(0,o.length-1,-((o.length-1)/2),(o.length-1)/2);let i=0;for(let l=0;l<o.length;l++){const d=o[l],u=d.length-1,c=D(0,u,-(u/2),u/2);for(let y=0;y<d.length;y++){const m=d[y];m===Se&&M(1e3).then(()=>{e.spawnEntity(Vt({player:{x:y,z:l},transform:{position:w(c(y)*2.35,20,a(l)*2.35),scale:w(1,1,1)},targetTransform:{position:w(c(y)*2.35,1.2,a(l)*2.35),scale:w(1,1,1),easing:{function:"easeOutQuart",time:0,increment:.1}}}))}),e.spawnEntity($t(`Tile-${y}-${l}`,{tile:{x:y,z:l,tile:m},transform:{position:w(c(y)*2.35,20+i*i,a(l)*2.35),scale:w(1,.2,1)},targetTransform:{position:w(c(y)*2.35,0,a(l)*2.35),scale:w(1,.2,1),easing:{function:"easeOutQuart",time:0,increment:.05}}})),i++,l===o.length-1&&y===d.length-1&&M(2e3).then(()=>{e.dispatch({type:"START"})})}}}})},jt=e=>e*e*e*e,Gt=e=>1-Math.pow(1-e,4),qt={easeInQuart:jt,easeOutQuart:Gt},Ht=e=>{const t=e.createQuery(ke([X(we),X(Ee)])).entities;return n=>{for(let s=0;s<t.length;s++){const o=t[s],a=o.getComponent("Transform"),i=o.getComponent("TargetTransform");Be(a.data.position,a.data.position,i.data.position,qt[i.data.easing.function](Math.min(i.data.easing.time,1))),i.data.easing.time<1&&(i.data.easing.time+=i.data.easing.increment*n),O(a.data.modelMatrix,a.data.rotation,a.data.position,a.data.scale)}}},oe=document.getElementById("dialog"),Qt=e=>{const t=document.getElementById("level");t.innerText=`Level: ${e+1} of ${P.length}`},Kt=e=>{const t=document.getElementById("deaths");t.innerText=`Deaths: ${e}`},Xt=e=>{const t=`
        <dialog id="game-menu">
            <form method="dialog">
                <h1>
                    The hidden Death
                </h1>
                <p>Move with the arrow keys and try to reach the green tile. But beware! Some tiles are not solid and if you stand on them, you will fall into the void.</p>
                <p>A little hint: Within the same level, the tiles dont change. Good luck!</p>
                <div id="settings">
                    <input id="sound" type="checkbox" checked />
                    <label>Sound</label>
                </div>
                <div>
                    <button id="start">Let's do this!</button>
                </div>
            </form>
        </dialog>
    `;oe.innerHTML=t;const n=document.getElementById("game-menu"),s=document.getElementById("start");setTimeout(()=>{n.show(),s.focus()},50);const o=document.getElementById("sound");o.onchange=a=>{e.dispatch({type:"SET_SOUND",sound:a.target.checked})},s.onclick=()=>{e.dispatch({type:"RUN_START_ANIMATION"}),n.close()}},Le=e=>`http://twitter.com/intent/tweet?text=${encodeURI(e)}&hashtags=js13k,js13k2022&url=https://js13kgames.com/entries/2022`,Zt=(e,t,n)=>{const s=`I reached level ${t} ${n>1?`but died ${n} times along the way`:"and just died once"} in @jarvispact 's js13k entry for 2022: "The hidden Death". Can you do better?`,o=n>1?`but died ${n} times along the way`:"and just died once",a=`
        <dialog id="game-menu">
            <form method="dialog">
                <h1>
                    You died
                </h1>
                <p>You reached level: ${t} ${o}</p>
                <div>
                    <button id="new">Continue</button>
                    <a id="twitter" href="${Le(s)}" target="_blank">Tweet it</a>
                </div>
            </form>
        </dialog>
    `;oe.innerHTML=a;const i=document.getElementById("game-menu"),l=document.getElementById("new");setTimeout(()=>{i.show(),l.focus()},50),l.onclick=()=>{e.dispatch({type:"RUN_RE_START_ANIMATION",level:t,deaths:n,discoveredDeadlyTilesPerLevel:e.getState().discoveredDeadlyTilesPerLevel}),i.close()}},Jt=(e,t)=>{const n=`I just completed all ${P.length} levels without dying a single time in @jarvispact 's js13k entry for 2022: "The hidden Death". I bet you cannot!?`,s=`I just completed all ${P.length} levels ${t>1?`but died ${t} times along the way`:"and only died once"} in @jarvispact 's js13k entry for 2022: "The hidden Death". Can you do better?`,o=Le(t===0?n:s),i=`
        <dialog id="game-menu">
            <form method="dialog">
                <h1>
                    Congratulations!
                </h1>
                <p>You completed all levels ${t===0?"and did not die a single time. Great job!":`and died ${t===1?"one time along the way":`${t} times along the way`}`}</p>
                <div>
                    <a id="twitter" href="${o}" target="_blank">Tweet it</a>
                    <button id="new">Play again</button>
                </div>
            </form>
        </dialog>
    `;oe.innerHTML=i;const l=document.getElementById("game-menu"),d=document.getElementById("twitter");setTimeout(()=>{l.show(),d.focus()},50);const u=document.getElementById("new");u.onclick=()=>{e.dispatch({type:"RUN_RE_START_ANIMATION",level:0,deaths:0,discoveredDeadlyTilesPerLevel:{}}),l.close()}},en=()=>{const e=document.getElementById("level-clear");e.style.opacity="1",e.style.fontSize="2rem",setTimeout(()=>{e.style.opacity="0",e.style.fontSize="1rem"},800)},B={setLevel:Qt,setDeaths:Kt,showStartDialog:Xt,showDiedDialog:Zt,showGameCompletedDialog:Jt,flashLevelClear:en},tn=e=>{B.showStartDialog(e),e.onStateChange(({action:t,newState:n})=>{t.type==="DIE"?(B.showDiedDialog(e,n.currentLevel,n.deathCounter),B.setDeaths(n.deathCounter)):t.type==="COMPLETE"?B.showGameCompletedDialog(e,n.deathCounter):(t.type==="RUN_LEVEL_UP_ANIMATION"||t.type==="START"||t.type==="RUN_RE_START_ANIMATION")&&(B.setLevel(n.currentLevel),B.setDeaths(n.deathCounter),t.type==="RUN_LEVEL_UP_ANIMATION"&&B.flashLevelClear())})};K.addStartupSystem(tn).addStartupSystem(Ot).addStartupSystem(zt).addStartupSystem(Yt).addSystem(Ht(K)).addSystem(_t(K)).run();
