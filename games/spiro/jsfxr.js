function ha(){this.A=function(b){b=b.split(",");this.t=parseInt(b[0])||0;this.c=parseFloat(b[1])||0;this.a=parseFloat(b[2])||0;this.C=parseFloat(b[3])||0;this.e=parseFloat(b[4])||0;this.r=parseFloat(b[5])||0;this.l=parseFloat(b[6])||0;this.n=parseFloat(b[7])||0;this.j=parseFloat(b[8])||0;this.F=parseFloat(b[9])||0;this.s=parseFloat(b[10])||0;this.d=parseFloat(b[11])||0;this.i=parseFloat(b[12])||0;this.B=parseFloat(b[13])||0;this.u=parseFloat(b[14])||0;this.m=parseFloat(b[15])||0;this.g=parseFloat(b[16])||
0;this.h=parseFloat(b[17])||0;this.f=parseFloat(b[18])||0;this.z=parseFloat(b[19])||0;this.p=parseFloat(b[20])||0;this.k=parseFloat(b[21])||0;this.w=parseFloat(b[22])||0;this.q=parseFloat(b[23])||0}};function C(){this.o=new ha;var b,m,n,g,s,t,D,u,E,F,T,U,V;this.b;var W,h,d,i,e,K,G,X,Y,H,Z,L,$,aa,I,k,ba,M,N,O,v,ca,o,x,y,P,p,da,q,j,ea,w,fa,z,l,Q,A,f,c,B,r;this.reset=function(b){var a=this.o;i=100/(a.r*a.r+0.0010);K=100/(a.l*a.l+0.0010);G=1-0.01*a.n*a.n*a.n;X=1E-6*-a.j*a.j*a.j;0==a.t&&(k=0.5-0.5*a.B,ba=5E-5*-a.u);$=0<a.d?1-0.9*a.d*a.d:1+10*a.d*a.d;aa=0;I=1==a.i?0:2E4*(1-a.i)*(1-a.i)+32;if(b){a.G=!1;m=a.q*a.q;n=a.t;0.01>a.a&&(a.a=0.01);b=a.c+a.a+a.e;0.18>b&&(b=0.18/b,a.c*=b,a.a*=b,a.e*=b);W=a.C;h=
0;Y=a.l;P=1!=a.f||0!=a.k;q=p=0;j=0.1*a.f*a.f*a.f;ea=1+1E-4*a.z;w=5/(1+20*a.p*a.p)*(0.01+j);0.8<w&&(w=0.8);w=1-w;fa=1!=a.f;z=0;l=0.1*a.k*a.k;Q=1+3E-4*a.w;H=0;Z=0.01*a.s*a.s;L=0.5*a.F;t=s=g=0;u=1E5*a.c*a.c;E=1E5*a.a*a.a;F=1E5*a.e*a.e+10;D=u;this.b=u+E+F;T=1/u;U=1/E;V=1/F;O=0!=a.g||0!=a.h;v=1020*a.g*a.g;0>a.g&&(v=-v);ca=0.2*a.h*a.h*a.h;x=0;y||(y=Array(1024));A||(A=Array(32));for(b=0;1024>b;b++)y[b]=0;for(b=0;32>b;b++)A[b]=2*Math.random()-1;M=0;N=0==a.m?0:parseInt(2E4*(1-a.m)*(1-a.m))+32}};this.D=function(u,
a){var R;R=R||44100;b=!1;for(var J=r=B=0;J<a;J++){if(b)return J;0!=N&&++M>=N&&(M=0,this.reset(!1));0!=I&&++aa>=I&&(I=0,i*=$);G+=X;i*=G;i>K&&(i=K,0<Y&&(b=!0));e=i;0<L&&(H+=Z,e=i*(1+Math.sin(H)*L));e=parseInt(e);8>e&&(e=8);0==n&&(k+=ba,0>k?k=0:0.5<k&&(k=0.5));if(++t>D)switch(t=0,++s){case 1:D=E;break;case 2:D=F}switch(s){case 0:g=t*T;break;case 1:g=1+2*(1-t*U)*W;break;case 2:g=1-t*V;break;case 3:g=0,b=!0}O&&(v+=ca,o=parseInt(v),0>o?o=-o:1023<o&&(o=1023));P&&0!=Q&&(l*=Q,1E-5>l?l=1E-5:0.1<l&&(l=0.1));
for(var ga=f=0;8>ga;ga++){h++;if(h>=e&&(h-=e,3==n))for(var S=0;32>S;S++)A[S]=2*Math.random()-1;switch(n){case 0:c=h/e<k?0.5:-0.5;break;case 1:c=1-2*(h/e);break;case 2:d=h/e;d=0.5<d?6.28318531*(d-1):6.28318531*d;c=0>d?1.27323954*d+0.405284735*d*d:1.27323954*d-0.405284735*d*d;c=0>c?0.225*(c*-c-c)+c:0.225*(c*c-c)+c;break;case 3:c=A[Math.abs(parseInt(32*h/parseInt(e)))]}P&&(da=p,j*=ea,0>j?j=0:0.1<j&&(j=0.1),fa?(q+=(c-p)*j,q*=w):(p=c,q=0),p+=q,z+=p-da,c=z*=1-l);O&&(y[x&1023]=c,c+=y[x-o+1024&1023],x=x+
1&1023);f+=c}f=0.125*m*g*f;1<f?f=1:-1>f&&(f=-1);r+=f;B++;if(44100==R||2==B)r/=B,B=0,u[J]=parseInt(32E3*r),r=0}return a}}
C.prototype.v=function(b){var m=new Uint8Array([82,73,70,70,0,0,0,0,87,65,86,69,102,109,116,32,16,0,0,0,1,0,1,0,68,172,0,0,136,88,1,0,2,0,16,0,100,97,116,97,0,0,0,0]);this.o.A(b);this.reset(!0);this.b=parseInt(this.b);var b=new Uint16Array(this.b),n=this.D(b,this.b),g=2*n,s=new Uint32Array(m.buffer);s[1]=36+g;s[10]=g;m=new Blob([m.buffer,b.subarray(0,n-1).buffer],{type:"audio/wav"});return(window.URL||window.webkitURL).createObjectURL(m)};window.SfxrSynth=C;C.prototype.getWave=C.prototype.v;
