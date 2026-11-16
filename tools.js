var BMTOOLS3D=(()=>{var fl=Object.defineProperty;var hf=Object.getOwnPropertyDescriptor;var uf=Object.getOwnPropertyNames;var df=Object.prototype.hasOwnProperty;var ff=(i,e)=>{for(var t in e)fl(i,t,{get:e[t],enumerable:!0})},pf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of uf(e))!df.call(i,s)&&s!==t&&fl(i,s,{get:()=>e[s],enumerable:!(n=hf(e,s))||n.enumerable});return i};var mf=i=>pf(fl({},"__esModule",{value:!0}),i);var c1={};ff(c1,{list:()=>a1,makeHome:()=>qy,mount:()=>r1,spinner:()=>l1,thumb:()=>o1,tour:()=>i1});var Ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zh=0,Jl=1,Kh=2;var ts=1,oo=2,ks=3,ei=0,qt=1,mn=2,ns=0,Hs=1,$l=2,jl=3,Ql=4,Jh=5;var is=100,$h=101,jh=102,Qh=103,eu=104,tu=200,nu=201,iu=202,su=203,ec=204,tc=205,ru=206,au=207,ou=208,lu=209,cu=210,hu=211,uu=212,du=213,fu=214,Ca=0,Pa=1,Ia=2,ws=3,Da=4,La=5,Na=6,Ua=7,lo=0,pu=1,mu=2,ti=0,nc=1,ic=2,sc=3,rc=4,ac=5,oc=6,ni=7;var lc=300,ss=301,zs=302,co=303,ho=304,Ki=1e3,Rn=1001,Fa=1002,Qt=1003,gu=1004;var Or=1005;var fn=1006,uo=1007;var mi=1008;var _n=1009,cc=1010,hc=1011,Gs=1012,fo=1013,Vn=1014,Nn=1015,Wn=1016,po=1017,mo=1018,rs=1020,uc=35902,dc=35899,fc=1021,pc=1022,Xn=1023,di=1026,gi=1027,go=1028,_o=1029,Oi=1030,xo=1031;var yo=1033,Br=33776,kr=33777,Hr=33778,zr=33779,vo=35840,Mo=35841,bo=35842,So=35843,Eo=36196,wo=37492,To=37496,Ao=37488,Ro=37489,Gr=37490,Co=37491,Po=37808,Io=37809,Do=37810,Lo=37811,No=37812,Uo=37813,Fo=37814,Oo=37815,Bo=37816,ko=37817,Ho=37818,zo=37819,Go=37820,Vo=37821,Wo=36492,Xo=36494,qo=36495,Yo=36283,Zo=36284,Vr=36285,Ko=36286;var cr=2300,Oa=2301,Aa=2302,Ol=2303,Bl=2400,kl=2401,Hl=2402;var _u=3200;var Wr=0,xu=1,_i="",Wt="srgb",hr="srgb-linear",ur="linear",St="srgb";var Ra=7680;var yu=519,vu=512,Mu=513,bu=514,mc=515,Su=516,Eu=517,gc=518,_c=519,wu=35044;var xc="300 es",Cn=2e3,Ts=2001;function gf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _f(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){let i=dr("canvas");return i.style.display="block",i}var dh={},As=null;function yc(...i){let e="THREE."+i.shift();As?As("log",e,...i):console.log(e,...i)}function Au(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=Au(i);let e="THREE."+i.shift();if(As)As("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=Au(i);let e="THREE."+i.shift();if(As)As("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function sr(...i){let e=i.join(" ");e in dh||(dh[e]=!0,Ke(...i))}function Ru(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Cu={[Ca]:Ca,[Ia]:Na,[Da]:Da,[ws]:La,[Pa]:Pa,[Na]:Ia,[Ua]:Ua,[La]:ws},Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,rr=Math.PI/180,Rs=180/Math.PI;function as(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function vc(i,e){return(i%e+e)%e}function xf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function yf(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function vf(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function Mf(i,e=1){return e-Math.abs(vc(i,e*2)-e)}function bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ef(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wf(i,e){return i+Math.random()*(e-i)}function Tf(i){return i*(.5-Math.random())}function Af(i){i!==void 0&&(fh=i);let e=fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(i){return i*rr}function Cf(i){return i*Rs}function Pf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function If(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Df(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),p=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*_,l*d,o*c);break;case"YXY":i.set(l*d,o*u,l*_,o*c);break;case"ZYZ":i.set(l*_,l*d,o*u,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function bc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pu(i,e){if(e.constructor===Float32Array)return i;let t=bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Iu(i,e){if(e.constructor===Float32Array)return i;let t=bc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Sc={DEG2RAD:rr,RAD2DEG:Rs,generateUUID:as,clamp:ot,euclideanModulo:vc,mapLinear:xf,inverseLerp:yf,lerp:ar,damp:vf,pingpong:Mf,smoothstep:bf,smootherstep:Sf,randInt:Ef,randFloat:wf,randFloatSpread:Tf,seededRandom:Af,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:Pf,ceilPowerOfTwo:If,floorPowerOfTwo:Mc,setQuaternionFromProperEuler:Df,normalize:Iu,denormalize:Pu},pe=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],p=r[a+0],d=r[a+1],_=r[a+2],M=r[a+3];if(f!==M||l!==p||c!==d||u!==_){let g=l*p+c*d+u*_+f*M;g<0&&(p=-p,d=-d,_=-_,M=-M,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),E=Math.sin(b);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E,l=l*m+p*o,c=c*m+d*o,u=u*m+_*o,f=f*m+M*o}else{l=l*m+p*o,c=c*m+d*o,u=u*m+_*o,f=f*m+M*o;let b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],p=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*f+l*d-c*p,e[t+1]=l*_+u*p+c*f-o*d,e[t+2]=c*_+u*d+o*p-l*f,e[t+3]=u*_-o*f-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),p=l(n/2),d=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*u*f+c*d*_,this._y=c*d*f-p*u*_,this._z=c*u*_+p*d*f,this._w=c*u*f-p*d*_;break;case"YXZ":this._x=p*u*f+c*d*_,this._y=c*d*f-p*u*_,this._z=c*u*_-p*d*f,this._w=c*u*f+p*d*_;break;case"ZXY":this._x=p*u*f-c*d*_,this._y=c*d*f+p*u*_,this._z=c*u*_+p*d*f,this._w=c*u*f-p*d*_;break;case"ZYX":this._x=p*u*f-c*d*_,this._y=c*d*f+p*u*_,this._z=c*u*_-p*d*f,this._w=c*u*f+p*d*_;break;case"YZX":this._x=p*u*f+c*d*_,this._y=c*d*f+p*u*_,this._z=c*u*_-p*d*f,this._w=c*u*f-p*d*_;break;case"XZY":this._x=p*u*f-c*d*_,this._y=c*d*f-p*u*_,this._z=c*u*_+p*d*f,this._w=c*u*f+p*d*_;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],p=n+o+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pl=new z,ph=new en,Qe=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],p=n[2],d=n[5],_=n[8],M=s[0],g=s[3],m=s[6],b=s[1],E=s[4],v=s[7],R=s[2],A=s[5],x=s[8];return r[0]=a*M+o*b+l*R,r[3]=a*g+o*E+l*A,r[6]=a*m+o*v+l*x,r[1]=c*M+u*b+f*R,r[4]=c*g+u*E+f*A,r[7]=c*m+u*v+f*x,r[2]=p*M+d*b+_*R,r[5]=p*g+d*E+_*A,r[8]=p*m+d*v+_*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,p=o*l-u*r,d=c*r-a*l,_=t*f+n*p+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=f*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=p*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ml.makeScale(e,t)),this}rotate(e){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ml=new Qe,mh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lf(){let i={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===St&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hr]:{primaries:e,whitePoint:n,transfer:ur,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:n,transfer:St,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),i}var gt=Lf();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var hs,Ba=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=dr("canvas")),hs.width=e.width,hs.height=e.height;let s=hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nf=0,Cs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ba.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var Uf=0,_l=new z,pn=class i extends Hn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=fn,a=mi,o=Xn,l=_n,c=i.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=as(),this.name="",this.source=new Cs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=lc;pn.DEFAULT_ANISOTROPY=1;var It=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],p=l[1],d=l[5],_=l[9],M=l[2],g=l[6],m=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(d+1)/2,R=(m+1)/2,A=(u+p)/4,x=(f+M)/4,w=(_+g)/4;return E>v&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=x/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=x/r,s=w/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-_)*(g-_)+(f-M)*(f-M)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(g-_)/b,this.y=(f-M)/b,this.z=(p-u)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ka=class extends Hn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends ka{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fr=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Et=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,f,p,d,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,p,d,_,M,g)}set(e,t,n,s,r,a,o,l,c,u,f,p,d,_,M,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=p,m[3]=d,m[7]=_,m[11]=M,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/us.setFromMatrixColumn(e,0).length(),r=1/us.setFromMatrixColumn(e,1).length(),a=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*u,d=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=p-M*c,t[9]=-o*l,t[2]=M-p*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,d=l*f,_=c*u,M=c*f;t[0]=p+M*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=M+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,d=l*f,_=c*u,M=c*f;t[0]=p-M*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=M-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,d=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=p*c+M,t[1]=l*f,t[5]=M*c+p,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-p*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=p-M*f}else if(e.order==="XZY"){let p=a*l,d=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=p*f+M,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=M*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ff,e,Of)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Si.crossVectors(n,yn),Si.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Si.crossVectors(n,yn)),Si.normalize(),na.crossVectors(yn,Si),s[0]=Si.x,s[4]=na.x,s[8]=yn.x,s[1]=Si.y,s[5]=na.y,s[9]=yn.y,s[2]=Si.z,s[6]=na.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],p=n[9],d=n[13],_=n[2],M=n[6],g=n[10],m=n[14],b=n[3],E=n[7],v=n[11],R=n[15],A=s[0],x=s[4],w=s[8],k=s[12],I=s[1],U=s[5],F=s[9],N=s[13],C=s[2],B=s[6],Y=s[10],W=s[14],X=s[3],q=s[7],L=s[11],Q=s[15];return r[0]=a*A+o*I+l*C+c*X,r[4]=a*x+o*U+l*B+c*q,r[8]=a*w+o*F+l*Y+c*L,r[12]=a*k+o*N+l*W+c*Q,r[1]=u*A+f*I+p*C+d*X,r[5]=u*x+f*U+p*B+d*q,r[9]=u*w+f*F+p*Y+d*L,r[13]=u*k+f*N+p*W+d*Q,r[2]=_*A+M*I+g*C+m*X,r[6]=_*x+M*U+g*B+m*q,r[10]=_*w+M*F+g*Y+m*L,r[14]=_*k+M*N+g*W+m*Q,r[3]=b*A+E*I+v*C+R*X,r[7]=b*x+E*U+v*B+R*q,r[11]=b*w+E*F+v*Y+R*L,r[15]=b*k+E*N+v*W+R*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],p=e[10],d=e[14],_=e[3],M=e[7],g=e[11],m=e[15],b=l*d-c*p,E=o*d-c*f,v=o*p-l*f,R=a*d-c*u,A=a*p-l*u,x=a*f-o*u;return t*(M*b-g*E+m*v)-n*(_*b-g*R+m*A)+s*(_*E-M*R+m*x)-r*(_*v-M*A+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],p=e[10],d=e[11],_=e[12],M=e[13],g=e[14],m=e[15],b=t*o-n*a,E=t*l-s*a,v=t*c-r*a,R=n*l-s*o,A=n*c-r*o,x=s*c-r*l,w=u*M-f*_,k=u*g-p*_,I=u*m-d*_,U=f*g-p*M,F=f*m-d*M,N=p*m-d*g,C=b*N-E*F+v*U+R*I-A*k+x*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(o*N-l*F+c*U)*B,e[1]=(s*F-n*N-r*U)*B,e[2]=(M*x-g*A+m*R)*B,e[3]=(p*A-f*x-d*R)*B,e[4]=(l*I-a*N-c*k)*B,e[5]=(t*N-s*I+r*k)*B,e[6]=(g*v-_*x-m*E)*B,e[7]=(u*x-p*v+d*E)*B,e[8]=(a*F-o*I+c*w)*B,e[9]=(n*I-t*F-r*w)*B,e[10]=(_*A-M*v+m*b)*B,e[11]=(f*v-u*A-d*b)*B,e[12]=(o*k-a*U-l*w)*B,e[13]=(t*U-n*k+s*w)*B,e[14]=(M*E-_*R-g*b)*B,e[15]=(u*R-f*E+p*b)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,p=r*c,d=r*u,_=r*f,M=a*u,g=a*f,m=o*f,b=l*c,E=l*u,v=l*f,R=n.x,A=n.y,x=n.z;return s[0]=(1-(M+m))*R,s[1]=(d+v)*R,s[2]=(_-E)*R,s[3]=0,s[4]=(d-v)*A,s[5]=(1-(p+m))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(_+E)*x,s[9]=(g-b)*x,s[10]=(1-(p+M))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=us.set(s[0],s[1],s[2]).length(),o=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),On.copy(this);let c=1/a,u=1/o,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,t.setFromRotationMatrix(On),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),d=(n+s)/(n-s),_,M;if(l)_=r/(a-r),M=a*r/(a-r);else if(o===Cn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ts)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),d=-(n+s)/(n-s),_,M;if(l)_=1/(a-r),M=a/(a-r);else if(o===Cn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ts)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},us=new z,On=new Et,Ff=new z(0,0,0),Of=new z(1,1,1),Si=new z,na=new z,yn=new z,_h=new Et,xh=new en,Pn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bf=0,yh=new z,ds=new en,ai=new Et,ia=new z,$s=new z,kf=new z,Hf=new en,vh=new z(1,0,0),Mh=new z(0,1,0),bh=new z(0,0,1),Sh={type:"added"},zf={type:"removed"},fs={type:"childadded",child:null},xl={type:"childremoved",child:null},Dt=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,t=new Pn,n=new en,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new Qe}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt($s,ia,this.up):ai.lookAt(ia,$s,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(ai),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sh),fs.child=e,this.dispatchEvent(fs),fs.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zf),xl.child=e,this.dispatchEvent(xl),xl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sh),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,Hf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),p=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Dt.DEFAULT_UP=new z(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var je=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gf={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let g=t.getJointPose(M,n),m=this._getHandJoint(c,M);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&p>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},sa={h:0,s:0,l:0};function yl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=vc(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=yl(a,r,e+1/3),this.g=yl(a,r,e),this.b=yl(a,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let n=Du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return gt.workingToColorSpace(cn.copy(this),e),Math.round(ot(cn.r*255,0,255))*65536+Math.round(ot(cn.g*255,0,255))*256+Math.round(ot(cn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(cn.copy(this),t);let n=cn.r,s=cn.g,r=cn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Wt){gt.workingToColorSpace(cn.copy(this),e);let t=cn.r,n=cn.g,s=cn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(sa);let n=ar(Ei.h,sa.h,t),s=ar(Ei.s,sa.s,t),r=ar(Ei.l,sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new rt;rt.NAMES=Du;var In=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new z,oi=new z,vl=new z,li=new z,ps=new z,ms=new z,Eh=new z,Ml=new z,bl=new z,Sl=new z,El=new It,wl=new It,Tl=new It,Ri=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),oi.subVectors(n,t),vl.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(oi),l=Bn.dot(vl),c=oi.dot(oi),u=oi.dot(vl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(c*l-o*u)*p,_=(a*u-o*l)*p;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(a,li.y),l.addScaledVector(o,li.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return El.setScalar(0),wl.setScalar(0),Tl.setScalar(0),El.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,n),Tl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(El,r.x),a.addScaledVector(wl,r.y),a.addScaledVector(Tl,r.z),a}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),oi.subVectors(e,t),Bn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Bn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,n),ms.subVectors(r,n),Ml.subVectors(e,n);let l=ps.dot(Ml),c=ms.dot(Ml);if(l<=0&&c<=0)return t.copy(n);bl.subVectors(e,s);let u=ps.dot(bl),f=ms.dot(bl);if(u>=0&&f<=u)return t.copy(s);let p=l*f-u*c;if(p<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(ps,a);Sl.subVectors(e,r);let d=ps.dot(Sl),_=ms.dot(Sl);if(_>=0&&d<=_)return t.copy(r);let M=d*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ms,o);let g=u*_-d*f;if(g<=0&&f-u>=0&&d-_>=0)return Eh.subVectors(r,s),o=(f-u)/(f-u+(d-_)),t.copy(s).addScaledVector(Eh,o);let m=1/(g+M+p);return a=M*m,o=p*m,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kt=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(r,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),aa.subVectors(this.max,js),gs.subVectors(e.a,js),_s.subVectors(e.b,js),xs.subVectors(e.c,js),wi.subVectors(_s,gs),Ti.subVectors(xs,_s),Xi.subVectors(gs,xs);let t=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Xi.z,Xi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Xi.z,0,-Xi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Xi.y,Xi.x,0];return!Al(t,gs,_s,xs,aa)||(t=[1,0,0,0,1,0,0,0,1],!Al(t,gs,_s,xs,aa))?!1:(oa.crossVectors(wi,Ti),t=[oa.x,oa.y,oa.z],Al(t,gs,_s,xs,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ci=[new z,new z,new z,new z,new z,new z,new z,new z],kn=new z,ra=new kt,gs=new z,_s=new z,xs=new z,wi=new z,Ti=new z,Xi=new z,js=new z,aa=new z,oa=new z,qi=new z;function Al(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qi.fromArray(i,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Gt=new z,la=new pe,Vf=0,bn=class extends Hn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wu,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=e!==void 0?bc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Pu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Iu(e,this.array)}};var pr=class extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var mr=class extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wf=new kt,Qs=new z,Rl=new z,Dn=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);let t=Qs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Qs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Rl)),this.expandByPoint(Qs.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xf=0,An=new Et,Cl=new Dt,ys=new z,vn=new kt,er=new kt,jt=new z,Xt=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gf(e)?mr:pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];er.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(vn.min,er.min),vn.expandByPoint(jt),jt.addVectors(vn.max,er.max),vn.expandByPoint(jt)):(vn.expandByPoint(er.min),vn.expandByPoint(er.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),jt.add(ys)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let k=0;k<n.count;k++)o[k]=new z,l[k]=new z;let u=new z,f=new z,p=new z,d=new pe,_=new pe,M=new pe,g=new z,m=new z;function b(k,I,U){c[k]=c[I]=c[U]=1,u.fromBufferAttribute(n,k),f.fromBufferAttribute(n,I),p.fromBufferAttribute(n,U),d.fromBufferAttribute(r,k),_.fromBufferAttribute(r,I),M.fromBufferAttribute(r,U),f.sub(u),p.sub(u),_.sub(d),M.sub(d);let F=1/(_.x*M.y-M.x*_.y);isFinite(F)&&(g.copy(f).multiplyScalar(M.y).addScaledVector(p,-_.y).multiplyScalar(F),m.copy(p).multiplyScalar(_.x).addScaledVector(f,-M.x).multiplyScalar(F),o[k].add(g),o[I].add(g),o[U].add(g),l[k].add(m),l[I].add(m),l[U].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let k=0,I=E.length;k<I;++k){let U=E[k],F=U.start,N=U.count;for(let C=F,B=F+N;C<B;C+=3)b(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let v=new z,R=new z,A=new z,x=new z;function w(k){A.fromBufferAttribute(s,k),x.copy(A);let I=o[k];v.copy(I),v.sub(A.multiplyScalar(A.dot(I))).normalize(),R.crossVectors(x,I);let F=R.dot(l[k])<0?-1:1;a.setXYZW(k,v.x,v.y,v.z,F)}for(let k=0,I=n.count;k<I;++k)c[k]&&w(k);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let p=0,d=e.count;p<d;p+=3){let _=e.getX(p+0),M=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,p=new c.constructor(l.length*u),d=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let m=0;m<u;m++)p[_++]=c[d++]}return new bn(p,u,f)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let p=c[u],d=e(p,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,p=c.length;f<p;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let p=0,d=f.length;p<d;p++)u.push(f[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Pl=new z,qf=new z,Yf=new Qe,Mn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pl.subVectors(n,t).cross(qf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Pl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yf.getNormalMatrix(e),s=this.coplanarPoint(Pl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zf=0,Jn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Hs,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var hi=new z,Il=new z,ca=new z,ha=new z,Ci=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Il.copy(e).add(t).multiplyScalar(.5),ca.copy(t).sub(e).normalize(),ha.copy(this.origin).sub(Il);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ca),o=ha.dot(this.direction),l=-ha.dot(ca),c=ha.lengthSq(),u=Math.abs(1-a*a),f,p,d,_;if(u>0)if(f=a*l-o,p=a*o-l,_=r*u,f>=0)if(p>=-_)if(p<=_){let M=1/u;f*=M,p*=M,d=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;else p<=-_?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+c):p<=_?(f=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Il).addScaledVector(ca,p),d}intersectSphere(e,t){if(e.radius<0)return null;hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,p=e.y-a.y,d=e.z-a.z,_=t.x-a.x,M=t.y-a.y,g=t.z-a.z,m=n.x-a.x,b=n.y-a.y,E=n.z-a.z,v=Math.abs(l),R=Math.abs(c),A=Math.abs(u),x,w,k,I,U,F,N,C,B,Y,W,X;if(v>=R&&v>=A?(k=l,F=f,B=_,X=m,l>=0?(x=c,w=u,I=p,U=d,N=M,C=g,Y=b,W=E):(x=u,w=c,I=d,U=p,N=g,C=M,Y=E,W=b)):R>=A?(k=c,F=p,B=M,X=b,c>=0?(x=u,w=l,I=d,U=f,N=g,C=_,Y=E,W=m):(x=l,w=u,I=f,U=d,N=_,C=g,Y=m,W=E)):(k=u,F=d,B=g,X=E,u>=0?(x=l,w=c,I=f,U=p,N=_,C=M,Y=m,W=b):(x=c,w=l,I=p,U=f,N=M,C=_,Y=b,W=m)),k===0)return null;let q=x/k,L=w/k,Q=1/k,j=I-q*F,fe=U-L*F,Z=N-q*B,oe=C-L*B,me=Y-q*X,ye=W-L*X,re=me*oe-ye*Z,ve=j*ye-fe*me,nt=Z*fe-oe*j;if(s){if(re<0||ve<0||nt<0)return null}else if((re<0||ve<0||nt<0)&&(re>0||ve>0||nt>0))return null;let He=re+ve+nt;if(He===0)return null;let Be=Q*(re*F+ve*B+nt*X);return(He>0?Be<0:Be>0)?null:this.at(Be/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ji=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wh=new Et,Yi=new Ci,ua=new Dn,Th=new z,da=new z,fa=new z,pa=new z,Dl=new z,ma=new z,Ah=new z,ga=new z,De=class extends Dt{constructor(e=new Xt,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(Dl.fromBufferAttribute(f,e),a?ma.addScaledVector(Dl,u):ma.addScaledVector(Dl.sub(t),u))}t.add(ma)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(ua.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ua,Th)===null||Yi.origin.distanceToSquared(Th)>(e.far-e.near)**2))&&(wh.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(wh),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){let g=p[_],m=a[g.materialIndex],b=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,R=E;v<R;v+=3){let A=o.getX(v),x=o.getX(v+1),w=o.getX(v+2);s=_a(this,m,e,n,c,u,f,A,x,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=_,m=M;g<m;g+=3){let b=o.getX(g),E=o.getX(g+1),v=o.getX(g+2);s=_a(this,a,e,n,c,u,f,b,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){let g=p[_],m=a[g.materialIndex],b=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=b,R=E;v<R;v+=3){let A=v,x=v+1,w=v+2;s=_a(this,m,e,n,c,u,f,A,x,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=_,m=M;g<m;g+=3){let b=g,E=g+1,v=g+2;s=_a(this,a,e,n,c,u,f,b,E,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Kf(i,e,t,n,s,r,a,o){let l;if(e.side===qt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ei,o),l===null)return null;ga.copy(o),ga.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:i}}function _a(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,da),i.getVertexPosition(l,fa),i.getVertexPosition(c,pa);let u=Kf(i,e,t,n,da,fa,pa,Ah);if(u){let f=new z;Ri.getBarycoord(Ah,da,fa,pa,f),s&&(u.uv=Ri.getInterpolatedAttribute(s,o,l,c,f,new pe)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,l,c,f,new pe)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new z,materialIndex:0};Ri.getNormal(da,fa,pa,p.normal),u.face=p,u.barycoord=f}return u}var gr=class extends pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Qt,u=Qt,f,p){super(null,a,o,l,c,u,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class extends bn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},vs=new Et,Rh=new Et,xa=[],Ch=new kt,Jf=new Et,tr=new De,nr=new Dn,zn=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),Ch.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(Ch)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vs),nr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),e.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),Rh.multiplyMatrices(n,vs),tr.matrixWorld=Rh,tr.raycast(e,xa);for(let a=0,o=xa.length;a<o;a++){let l=xa[a];l.instanceId=r,l.object=this,t.push(l)}xa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(s*this.count),s,this.count,go,Nn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zi=new Dn,$f=new pe(.5,.5),ya=new z,Pi=class{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],p=r[6],d=r[7],_=r[8],M=r[9],g=r[10],m=r[11],b=r[12],E=r[13],v=r[14],R=r[15];if(s[0].setComponents(c-a,d-u,m-_,R-b).normalize(),s[1].setComponents(c+a,d+u,m+_,R+b).normalize(),s[2].setComponents(c+o,d+f,m+M,R+E).normalize(),s[3].setComponents(c-o,d-f,m-M,R-E).normalize(),n)s[4].setComponents(l,p,g,v).normalize(),s[5].setComponents(c-l,d-p,m-g,R-v).normalize();else if(s[4].setComponents(c-l,d-p,m-g,R-v).normalize(),t===Cn)s[5].setComponents(c+l,d+p,m+g,R+v).normalize();else if(t===Ts)s[5].setComponents(l,p,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=$f.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ya.x=s.normal.x>0?e.max.x:e.min.x,ya.y=s.normal.y>0?e.max.y:e.min.y,ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ph=new Et,za=class i{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ph.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Pi),n[s].setFromProjectionMatrix(Ph,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Pi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Ds=class extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ih=new Et,zl=new Ci,va=new Dn,Ma=new z,xr=class extends Dt{constructor(e=new Xt,t=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;Ih.copy(s).invert(),zl.copy(e.ray).applyMatrix4(Ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let p=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=p,M=d;_<M;_++){let g=c.getX(_);Ma.fromBufferAttribute(f,g),Dh(Ma,g,l,s,e,t,this)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=p,M=d;_<M;_++)Ma.fromBufferAttribute(f,_),Dh(Ma,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Dh(i,e,t,n,s,r,a){let o=zl.distanceSqToPoint(i);if(o<t){let l=new z;zl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var yr=class extends pn{constructor(e=[],t=ss,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ln=class extends pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends pn{constructor(e,t,n=Vn,s,r,a,o=Qt,l=Qt,c,u=di,f=1){if(u!==di&&u!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vr=class extends fi{constructor(e,t=Vn,n=ss,s,r,a=Qt,o=Qt,l,c=di){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mr=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lt=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],p=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(f,2));function _(M,g,m,b,E,v,R,A,x,w,k){let I=v/x,U=R/w,F=v/2,N=R/2,C=A/2,B=x+1,Y=w+1,W=0,X=0,q=new z;for(let L=0;L<Y;L++){let Q=L*U-N;for(let j=0;j<B;j++){let fe=j*I-F;q[M]=fe*b,q[g]=Q*E,q[m]=C,c.push(q.x,q.y,q.z),q[M]=0,q[g]=0,q[m]=A>0?1:-1,u.push(q.x,q.y,q.z),f.push(j/x),f.push(1-L/w),W+=1}}for(let L=0;L<w;L++)for(let Q=0;Q<x;Q++){let j=p+Q+B*L,fe=p+Q+B*(L+1),Z=p+(Q+1)+B*(L+1),oe=p+(Q+1)+B*L;l.push(j,fe,oe),l.push(fe,Z,oe),X+=6}o.addGroup(d,X,k),d+=X,p+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Nt=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],d=[],_=0,M=[],g=n/2,m=0;b(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(p,3)),this.setAttribute("uv",new _t(d,2));function b(){let v=new z,R=new z,A=0,x=(t-e)/n;for(let w=0;w<=r;w++){let k=[],I=w/r,U=I*(t-e)+e;for(let F=0;F<=s;F++){let N=F/s,C=N*l+o,B=Math.sin(C),Y=Math.cos(C);R.x=U*B,R.y=-I*n+g,R.z=U*Y,f.push(R.x,R.y,R.z),v.set(B,x,Y).normalize(),p.push(v.x,v.y,v.z),d.push(N,1-I),k.push(_++)}M.push(k)}for(let w=0;w<s;w++)for(let k=0;k<r;k++){let I=M[k][w],U=M[k+1][w],F=M[k+1][w+1],N=M[k][w+1];(e>0||k!==0)&&(u.push(I,U,N),A+=3),(t>0||k!==r-1)&&(u.push(U,F,N),A+=3)}c.addGroup(m,A,0),m+=A}function E(v){let R=_,A=new pe,x=new z,w=0,k=v===!0?e:t,I=v===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,g*I,0),p.push(0,I,0),d.push(.5,.5),_++;let U=_;for(let F=0;F<=s;F++){let C=F/s*l+o,B=Math.cos(C),Y=Math.sin(C);x.x=k*Y,x.y=g*I,x.z=k*B,f.push(x.x,x.y,x.z),p.push(0,I,0),A.x=B*.5+.5,A.y=Y*.5*I+.5,d.push(A.x,A.y),_++}for(let F=0;F<s;F++){let N=R+F,C=U+F;v===!0?u.push(C,C+1,N):u.push(C+1,C,N),w+=3}c.addGroup(m,w,v===!0?1:2),m+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class i extends Nt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var En=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new pe:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,s=[],r=[],a=[],o=new z,l=new Et;for(let d=0;d<=e;d++){let _=d/e;s[d]=this.getTangentAt(_,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ot(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ot(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],d*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ls=class extends En{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*f+this.aX,c=p*f+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ga=class extends Ls{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ec(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;p*=u,d*=u,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Lh=new z,Nh=new z,Ll=new Ec,Nl=new Ec,Ul=new Ec,wn=class extends En{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Nh.subVectors(s[0],s[1]).add(s[0]),c=Nh);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Lh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Lh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(u),d);M<1e-4&&(M=1),_<1e-4&&(_=M),g<1e-4&&(g=M),Ll.initNonuniformCatmullRom(c.x,f.x,p.x,u.x,_,M,g),Nl.initNonuniformCatmullRom(c.y,f.y,p.y,u.y,_,M,g),Ul.initNonuniformCatmullRom(c.z,f.z,p.z,u.z,_,M,g)}else this.curveType==="catmullrom"&&(Ll.initCatmullRom(c.x,f.x,p.x,u.x,this.tension),Nl.initCatmullRom(c.y,f.y,p.y,u.y,this.tension),Ul.initCatmullRom(c.z,f.z,p.z,u.z,this.tension));return n.set(Ll.calc(l),Nl.calc(l),Ul.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Uh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function jf(i,e){let t=1-i;return t*t*e}function Qf(i,e){return 2*(1-i)*i*e}function ep(i,e){return i*i*e}function or(i,e,t,n){return jf(i,e)+Qf(i,t)+ep(i,n)}function tp(i,e){let t=1-i;return t*t*t*e}function np(i,e){let t=1-i;return 3*t*t*i*e}function ip(i,e){return 3*(1-i)*i*i*e}function sp(i,e){return i*i*i*e}function lr(i,e,t,n,s){return tp(i,e)+np(i,t)+ip(i,n)+sp(i,s)}var br=class extends En{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends En{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(lr(e,s.x,r.x,a.x,o.x),lr(e,s.y,r.y,a.y,o.y),lr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sr=class extends En{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends En{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends En{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(or(e,s.x,r.x,a.x),or(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends En{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(or(e,s.x,r.x,a.x),or(e,s.y,r.y,a.y),or(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tr=class extends En{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Uh(o,l.x,c.x,u.x,f.x),Uh(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},Xa=Object.freeze({__proto__:null,ArcCurve:Ga,CatmullRomCurve3:wn,CubicBezierCurve:br,CubicBezierCurve3:Va,EllipseCurve:Ls,LineCurve:Sr,LineCurve3:Wa,QuadraticBezierCurve:Er,QuadraticBezierCurve3:wr,SplineCurve:Tr}),qa=class extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},tn=class extends qa{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Sr(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Er(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new br(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Tr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ls(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xt=class extends tn{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new tn().fromJSON(s))}return this}};function rp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Lu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=hp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,f=l;for(let p=t;p<s;p+=t){let d=i[p],_=i[p+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ar(r,a,t,o,l,c,0),a}function Lu(i,e,t,n,s){let r;if(s===Mp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Fh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Fh(a/n|0,i[a],i[a+1],r);return r&&Ns(r,r.next)&&(Cr(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ns(t,t.next)||Ft(t.prev,t,t.next)===0)){if(Cr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ar(i,e,t,n,s,r,a){if(!i)return;!a&&r&&mp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?op(i,n,s,r):ap(i)){e.push(l.i,i.i,c.i),Cr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=lp($i(i),e),Ar(i,e,t,n,s,r,2)):a===2&&cp(i,e,t,n,s,r):Ar($i(i),e,t,n,s,r,1);break}}}function ap(i){let e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),p=Math.max(s,r,a),d=Math.max(o,l,c),_=n.next;for(;_!==e;){if(_.x>=u&&_.x<=p&&_.y>=f&&_.y<=d&&ir(s,o,r,l,a,c,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function op(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Ft(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,p=a.y,d=Math.min(o,l,c),_=Math.min(u,f,p),M=Math.max(o,l,c),g=Math.max(u,f,p),m=Gl(d,_,e,t,n),b=Gl(M,g,e,t,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=m&&v&&v.z<=b;){if(E.x>=d&&E.x<=M&&E.y>=_&&E.y<=g&&E!==s&&E!==a&&ir(o,u,l,f,c,p,E.x,E.y)&&Ft(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=M&&v.y>=_&&v.y<=g&&v!==s&&v!==a&&ir(o,u,l,f,c,p,v.x,v.y)&&Ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=M&&E.y>=_&&E.y<=g&&E!==s&&E!==a&&ir(o,u,l,f,c,p,E.x,E.y)&&Ft(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=b;){if(v.x>=d&&v.x<=M&&v.y>=_&&v.y<=g&&v!==s&&v!==a&&ir(o,u,l,f,c,p,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ns(n,s)&&Uu(n,t,t.next,s)&&Rr(n,s)&&Rr(s,n)&&(e.push(n.i,t.i,s.i),Cr(t),Cr(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function cp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xp(a,o)){let l=Fu(a,o);a=$i(a,a.next),l=$i(l,l.next),Ar(a,e,t,n,s,r,0),Ar(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function hp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Lu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(_p(c))}s.sort(up);for(let r=0;r<s.length;r++)t=dp(s[r],t);return t}function up(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function dp(i,e){let t=fp(i,e);if(!t)return e;let n=Fu(t,i);return $i(n,n.next),$i(t,t.next)}function fp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Ns(i,t))return t;do{if(Ns(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Nu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Rr(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&pp(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function pp(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function mp(i,e,t,n){let s=i;do s.z===0&&(s.z=Gl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gp(s)}function gp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Gl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _p(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ir(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Nu(i,e,t,n,s,r,a,o)}function xp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yp(i,e)&&(Rr(i,e)&&Rr(e,i)&&vp(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||Ns(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ns(i,e){return i.x===e.x&&i.y===e.y}function Uu(i,e,t,n){let s=Sa(Ft(i,e,t)),r=Sa(Ft(i,e,n)),a=Sa(Ft(t,n,i)),o=Sa(Ft(t,n,e));return!!(s!==r&&a!==o||s===0&&ba(i,t,e)||r===0&&ba(i,n,e)||a===0&&ba(t,i,n)||o===0&&ba(t,e,n))}function ba(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sa(i){return i>0?1:i<0?-1:0}function yp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Uu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Rr(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function vp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fu(i,e){let t=Vl(i.i,i.x,i.y),n=Vl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Fh(i,e,t,n){let s=Vl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Wl=class{static triangulate(e,t,n=2){return rp(e,t,n)}},Kn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Oh(e),Bh(n,e);let a=e.length;t.forEach(Oh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Bh(n,t[l]);let o=Wl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Oh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var gn=class i extends Xt{constructor(e=new xt([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:bp,E,v=!1,R,A,x,w;if(m){E=m.getSpacedPoints(u),v=!0,p=!1;let ue=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(u,ue),A=new z,x=new z,w=new z}p||(g=0,d=0,_=0,M=0);let k=o.extractPoints(c),I=k.shape,U=k.holes;if(!Kn.isClockWise(I)){I=I.reverse();for(let ue=0,Ee=U.length;ue<Ee;ue++){let Me=U[ue];Kn.isClockWise(Me)&&(U[ue]=Me.reverse())}}function N(ue){let Me=10000000000000001e-36,Fe=ue[0];for(let Ie=1;Ie<=ue.length;Ie++){let st=Ie%ue.length,We=ue[st],dt=We.x-Fe.x,ft=We.y-Fe.y,vt=dt*dt+ft*ft,V=Math.max(Math.abs(We.x),Math.abs(We.y),Math.abs(Fe.x),Math.abs(Fe.y)),Ht=Me*V*V;if(vt<=Ht){ue.splice(st,1),Ie--;continue}Fe=We}}N(I),U.forEach(N);let C=U.length,B=I;for(let ue=0;ue<C;ue++){let Ee=U[ue];I=I.concat(Ee)}function Y(ue,Ee,Me){return Ee||Je("ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(Ee,Me)}let W=I.length;function X(ue,Ee,Me){let Fe,Ie,st,We=ue.x-Ee.x,dt=ue.y-Ee.y,ft=Me.x-ue.x,vt=Me.y-ue.y,V=We*We+dt*dt,Ht=We*vt-dt*ft;if(Math.abs(Ht)>Number.EPSILON){let ut=Math.sqrt(V),Tt=Math.sqrt(ft*ft+vt*vt),Re=Ee.x-dt/ut,Bt=Ee.y+We/ut,Ze=Me.x-vt/Tt,$e=Me.y+ft/Tt,D=((Ze-Re)*vt-($e-Bt)*ft)/(We*vt-dt*ft);Fe=Re+We*D-ue.x,Ie=Bt+dt*D-ue.y;let S=Fe*Fe+Ie*Ie;if(S<=2)return new pe(Fe,Ie);st=Math.sqrt(S/2)}else{let ut=!1;We>Number.EPSILON?ft>Number.EPSILON&&(ut=!0):We<-Number.EPSILON?ft<-Number.EPSILON&&(ut=!0):Math.sign(dt)===Math.sign(vt)&&(ut=!0),ut?(Fe=-dt,Ie=We,st=Math.sqrt(V)):(Fe=We,Ie=dt,st=Math.sqrt(V/2))}return new pe(Fe/st,Ie/st)}let q=[];for(let ue=0,Ee=B.length,Me=Ee-1,Fe=ue+1;ue<Ee;ue++,Me++,Fe++)Me===Ee&&(Me=0),Fe===Ee&&(Fe=0),q[ue]=X(B[ue],B[Me],B[Fe]);let L=[],Q,j=q.concat();for(let ue=0,Ee=C;ue<Ee;ue++){let Me=U[ue];Q=[];for(let Fe=0,Ie=Me.length,st=Ie-1,We=Fe+1;Fe<Ie;Fe++,st++,We++)st===Ie&&(st=0),We===Ie&&(We=0),Q[Fe]=X(Me[Fe],Me[st],Me[We]);L.push(Q),j=j.concat(Q)}let fe;if(g===0)fe=Kn.triangulateShape(B,U);else{let ue=[],Ee=[];for(let Me=0;Me<g;Me++){let Fe=Me/g,Ie=d*Math.cos(Fe*Math.PI/2),st=_*Math.sin(Fe*Math.PI/2)+M;for(let We=0,dt=B.length;We<dt;We++){let ft=Y(B[We],q[We],st);ve(ft.x,ft.y,-Ie),Fe===0&&ue.push(ft)}for(let We=0,dt=C;We<dt;We++){let ft=U[We];Q=L[We];let vt=[];for(let V=0,Ht=ft.length;V<Ht;V++){let ut=Y(ft[V],Q[V],st);ve(ut.x,ut.y,-Ie),Fe===0&&vt.push(ut)}Fe===0&&Ee.push(vt)}}fe=Kn.triangulateShape(ue,Ee)}let Z=fe.length,oe=_+M;for(let ue=0;ue<W;ue++){let Ee=p?Y(I[ue],j[ue],oe):I[ue];v?(x.copy(R.normals[0]).multiplyScalar(Ee.x),A.copy(R.binormals[0]).multiplyScalar(Ee.y),w.copy(E[0]).add(x).add(A),ve(w.x,w.y,w.z)):ve(Ee.x,Ee.y,0)}for(let ue=1;ue<=u;ue++)for(let Ee=0;Ee<W;Ee++){let Me=p?Y(I[Ee],j[Ee],oe):I[Ee];v?(x.copy(R.normals[ue]).multiplyScalar(Me.x),A.copy(R.binormals[ue]).multiplyScalar(Me.y),w.copy(E[ue]).add(x).add(A),ve(w.x,w.y,w.z)):ve(Me.x,Me.y,f/u*ue)}for(let ue=g-1;ue>=0;ue--){let Ee=ue/g,Me=d*Math.cos(Ee*Math.PI/2),Fe=_*Math.sin(Ee*Math.PI/2)+M;for(let Ie=0,st=B.length;Ie<st;Ie++){let We=Y(B[Ie],q[Ie],Fe);ve(We.x,We.y,f+Me)}for(let Ie=0,st=U.length;Ie<st;Ie++){let We=U[Ie];Q=L[Ie];for(let dt=0,ft=We.length;dt<ft;dt++){let vt=Y(We[dt],Q[dt],Fe);v?ve(vt.x,vt.y+E[u-1].y,E[u-1].x+Me):ve(vt.x,vt.y,f+Me)}}}me(),ye();function me(){let ue=s.length/3;if(p){let Ee=0,Me=W*Ee;for(let Fe=0;Fe<Z;Fe++){let Ie=fe[Fe];nt(Ie[2]+Me,Ie[1]+Me,Ie[0]+Me)}Ee=u+g*2,Me=W*Ee;for(let Fe=0;Fe<Z;Fe++){let Ie=fe[Fe];nt(Ie[0]+Me,Ie[1]+Me,Ie[2]+Me)}}else{for(let Ee=0;Ee<Z;Ee++){let Me=fe[Ee];nt(Me[2],Me[1],Me[0])}for(let Ee=0;Ee<Z;Ee++){let Me=fe[Ee];nt(Me[0]+W*u,Me[1]+W*u,Me[2]+W*u)}}n.addGroup(ue,s.length/3-ue,0)}function ye(){let ue=s.length/3,Ee=0;re(B,Ee),Ee+=B.length;for(let Me=0,Fe=U.length;Me<Fe;Me++){let Ie=U[Me];re(Ie,Ee),Ee+=Ie.length}n.addGroup(ue,s.length/3-ue,1)}function re(ue,Ee){let Me=ue.length;for(;--Me>=0;){let Fe=Me,Ie=Me-1;Ie<0&&(Ie=ue.length-1);for(let st=0,We=u+g*2;st<We;st++){let dt=W*st,ft=W*(st+1),vt=Ee+Fe+dt,V=Ee+Ie+dt,Ht=Ee+Ie+ft,ut=Ee+Fe+ft;He(vt,V,Ht,ut)}}}function ve(ue,Ee,Me){l.push(ue),l.push(Ee),l.push(Me)}function nt(ue,Ee,Me){Be(ue),Be(Ee),Be(Me);let Fe=s.length/3,Ie=b.generateTopUV(n,s,Fe-3,Fe-2,Fe-1);et(Ie[0]),et(Ie[1]),et(Ie[2])}function He(ue,Ee,Me,Fe){Be(ue),Be(Ee),Be(Fe),Be(Ee),Be(Me),Be(Fe);let Ie=s.length/3,st=b.generateSideWallUV(n,s,Ie-6,Ie-3,Ie-2,Ie-1);et(st[0]),et(st[1]),et(st[3]),et(st[1]),et(st[2]),et(st[3])}function Be(ue){s.push(l[ue*3+0]),s.push(l[ue*3+1]),s.push(l[ue*3+2])}function et(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xa[s.type]().fromJSON(s)),new i(n,e.options)}},bp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new pe(r,a),new pe(o,l),new pe(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],p=e[s*3],d=e[s*3+1],_=e[s*3+2],M=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new pe(a,1-l),new pe(c,1-f),new pe(p,1-_),new pe(M,1-m)]:[new pe(o,1-l),new pe(u,1-f),new pe(d,1-_),new pe(g,1-m)]}};function Sp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var $n=class i extends Xt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,f=new z,p=new pe,d=new z,_=new z,M=new z,g=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,d.x=m*1,d.y=-g,d.z=m*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(_)}for(let b=0;b<=t;b++){let E=n+b*u*s,v=Math.sin(E),R=Math.cos(E);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*v,f.y=e[A].y,f.z=e[A].x*R,a.push(f.x,f.y,f.z),p.x=b/t,p.y=A/(e.length-1),o.push(p.x,p.y);let x=l[3*A+0]*v,w=l[3*A+1],k=l[3*A+0]*R;c.push(x,w,k)}}for(let b=0;b<t;b++)for(let E=0;E<e.length-1;E++){let v=E+b*e.length,R=v,A=v+e.length,x=v+e.length+1,w=v+1;r.push(R,A,w),r.push(x,w,A)}this.setIndex(r),this.setAttribute("position",new _t(a,3)),this.setAttribute("uv",new _t(o,2)),this.setAttribute("normal",new _t(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Gn=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,p=t/l,d=[],_=[],M=[],g=[];for(let m=0;m<u;m++){let b=m*p-a;for(let E=0;E<c;E++){let v=E*f-r;_.push(v,-b,0),M.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let E=b+c*m,v=b+c*(m+1),R=b+1+c*(m+1),A=b+1+c*m;d.push(E,v,A),d.push(v,R,A)}this.setIndex(d),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Us=class i extends Xt{constructor(e=new xt([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(r,3)),this.setAttribute("uv",new _t(a,2));function c(u){let f=s.length/3,p=u.extractPoints(t),d=p.shape,_=p.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=_.length;g<m;g++){let b=_[g];Kn.isClockWise(b)===!0&&(_[g]=b.reverse())}let M=Kn.triangulateShape(d,_);for(let g=0,m=_.length;g<m;g++){let b=_[g];d=d.concat(b)}for(let g=0,m=d.length;g<m;g++){let b=d[g];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,m=M.length;g<m;g++){let b=M[g],E=b[0]+f,v=b[1]+f,R=b[2]+f;n.push(E,v,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ep(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Ep(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ot=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new z,p=new z,d=[],_=[],M=[],g=[];for(let m=0;m<=n;m++){let b=[],E=m/n,v=a+E*o,R=e*Math.cos(v),A=Math.sqrt(e*e-R*R),x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let k=w/t,I=s+k*r;f.x=-A*Math.cos(I),f.y=R,f.z=A*Math.sin(I),_.push(f.x,f.y,f.z),p.copy(f).normalize(),M.push(p.x,p.y,p.z),g.push(k+x,1-E),b.push(c++)}u.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let E=u[m][b+1],v=u[m][b],R=u[m+1][b],A=u[m+1][b+1];(m!==0||a>0)&&d.push(E,v,A),(m!==n-1||l<Math.PI)&&d.push(v,R,A)}this.setIndex(d),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rn=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],p=new z,d=new z,_=new z;for(let M=0;M<=n;M++){let g=a+M/n*o;for(let m=0;m<=s;m++){let b=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(b),d.y=(e+t*Math.cos(g))*Math.sin(b),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),p.x=e*Math.cos(b),p.y=e*Math.sin(b),_.subVectors(d,p).normalize(),u.push(_.x,_.y,_.z),f.push(m/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=s;g++){let m=(s+1)*M+g-1,b=(s+1)*(M-1)+g-1,E=(s+1)*(M-1)+g,v=(s+1)*M+g;l.push(m,b,v),l.push(b,E,v)}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var jn=class i extends Xt{constructor(e=new wr(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,l=new z,c=new pe,u=new z,f=[],p=[],d=[],_=[];M(),this.setIndex(_),this.setAttribute("position",new _t(f,3)),this.setAttribute("normal",new _t(p,3)),this.setAttribute("uv",new _t(d,2));function M(){for(let E=0;E<t;E++)g(E);g(r===!1?t:0),b(),m()}function g(E){u=e.getPointAt(E/t,u);let v=a.normals[E],R=a.binormals[E];for(let A=0;A<=s;A++){let x=A/s*Math.PI*2,w=Math.sin(x),k=-Math.cos(x);l.x=k*v.x+w*R.x,l.y=k*v.y+w*R.y,l.z=k*v.z+w*R.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let E=1;E<=t;E++)for(let v=1;v<=s;v++){let R=(s+1)*(E-1)+(v-1),A=(s+1)*E+(v-1),x=(s+1)*E+v,w=(s+1)*(E-1)+v;_.push(R,A,w),_.push(A,x,w)}}function b(){for(let E=0;E<=t;E++)for(let v=0;v<=s;v++)c.x=E/t,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Xa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function os(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(kh(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=os(i[t]);for(let s in n)e[s]=n[s]}return e}function kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Ou={clone:os,merge:hn},Tp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new It().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ya=class extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ne=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Pr=class extends Jn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ka=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ms(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ea(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ja=class extends Di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kl:r=e,o=2*t-n;break;case Hl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kl:a=e,l=2*n-t;break;case Hl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,_=(n-t)/(s-t),M=_*_,g=M*_,m=-p*g+2*p*M-p*_,b=(1+p)*g+(-1.5-2*p)*M+(-.5+p)*_+1,E=(-1-d)*g+(1.5+d)*M+.5*_,v=d*g-d*M;for(let R=0;R!==o;++R)r[R]=m*a[u+R]+b*a[c+R]+E*a[l+R]+v*a[f+R];return r}},$a=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*f+a[l+p]*u;return r}},ja=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends Di{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let _=(n-t)/(s-t),M=1-_;for(let g=0;g!==o;++g)r[g]=a[c+g]*M+a[l+g]*_;return r}let p=o*2,d=e-1;for(let _=0;_!==o;++_){let M=a[c+_],g=a[l+_],m=d*p+_*2,b=f[m],E=f[m+1],v=e*p+_*2,R=u[v],A=u[v+1],x=Cp(n,t,b,R,s);r[_]=Bu(x,M,E,A,g)}return r}};function Bu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Rp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Cp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Bu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Rp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ms(t,this.TimeBufferType),this.values=Ms(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ms(e.times,Array),values:Ms(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ea(e.settings)&&(n.settings={inTangents:Ms(e.settings.inTangents,Array),outTangents:Ms(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case cr:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case Aa:t=this.InterpolantFactoryMethodSmooth;break;case Ol:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Aa;case this.InterpolantFactoryMethodBezier:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ea(this.settings)&&(Hh(this.settings.inTangents,e),Hh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ea(this.settings)&&(zh(this.settings.inTangents,e),zh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&_f(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Aa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,p=f-n,d=f+n;for(let _=0;_!==n;++_){let M=t[f+_];if(M!==t[p+_]||M!==t[d+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ea(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Hh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function zh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Oa;var Li=class extends Tn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=cr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};eo.prototype.ValueTypeName="color";var to=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};to.prototype.ValueTypeName="number";var no=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ir=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new no(this.times,this.values,this.getValueSize(),e)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends Tn{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=cr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}};io.prototype.ValueTypeName="vector";var so=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=c.length;f<p;f+=2){let d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ku=new so,ro=class{constructor(e){this.manager=e!==void 0?e:ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ro.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji=class extends Dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Dr=class extends ji{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fl=new Et,Gh=new z,Vh=new z,Lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Gh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gh),Vh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Fl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ts||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wa=new z,Ta=new en,Zn=new z,Nr=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wa,Ta,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(wa,Ta,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Ta,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new z,Wh=new pe,Xh=new pe,Vt=class extends Nr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,Wh,Xh),t.subVectors(Xh,Wh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Xl=class extends Lr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},Qi=class extends ji{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},es=class extends Nr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ql=class extends Lr{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pi=class extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new ql}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Fs=class extends ji{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var bs=-90,Ss=1,Os=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(bs,Ss,e,t);s.layers=this.layers,this.add(s);let r=new Vt(bs,Ss,e,t);r.layers=this.layers,this.add(r);let a=new Vt(bs,Ss,e,t);a.layers=this.layers,this.add(a);let o=new Vt(bs,Ss,e,t);o.layers=this.layers,this.add(o);let l=new Vt(bs,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Vt(bs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,p,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ao=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Tc="\\[\\]\\.:\\/",Pp=new RegExp("["+Tc+"]","g"),Ac="[^"+Tc+"]",Ip="[^"+Tc.replace("\\.","")+"]",Dp=/((?:WC+[\/:])*)/.source.replace("WC",Ac),Lp=/(WCOD+)?/.source.replace("WCOD",Ip),Np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),Up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),Fp=new RegExp("^"+Dp+Lp+Np+Up+"$"),Op=["material","materials","bones","map"],Yl=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pp,"")}static parseTrackName(e){let t=Fp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Op.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Yl;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u1=new Float32Array(1);var qh=new Et,Ur=class{constructor(e,t,n=0,s=1/0){this.ray=new Ci(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(e,t=!0,n=[]){return Zl(e,this,n,t),n.sort(Yh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Zl(e[s],this,n,t);return n.sort(Yh),n}};function Yh(i,e){return i.distance-e.distance}function Zl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Zl(r[a],e,t,!0)}}var Bs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Kl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Fr=class extends Hn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Rc(i,e,t,n){let s=Bp(n);switch(t){case fc:return i*e;case go:return i*e/s.components*s.byteLength;case _o:return i*e/s.components*s.byteLength;case Oi:return i*e*2/s.components*s.byteLength;case xo:return i*e*2/s.components*s.byteLength;case pc:return i*e*3/s.components*s.byteLength;case Xn:return i*e*4/s.components*s.byteLength;case yo:return i*e*4/s.components*s.byteLength;case Br:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:case So:return Math.max(i,16)*Math.max(e,8)/4;case vo:case bo:return Math.max(i,8)*Math.max(e,8)/2;case Eo:case wo:case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case To:case Gr:case Co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wo:case Xo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vr:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bp(i){switch(i){case _n:case cc:return{byteLength:1,components:1};case Gs:case hc:case Wn:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Vn:case fo:case Nn:return{byteLength:4,components:1};case uc:case dc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function od(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hp(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let p=0;for(let d=1;d<f.length;d++){let _=f[p],M=f[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++p,f[p]=M)}f.length=p+1;for(let d=0,_=f.length;d<_;d++){let M=f[d];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,em=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",_m=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Dm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,km=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,r0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,a0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,M0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,R0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,K0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,og=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:zp,alphahash_pars_fragment:Gp,alphamap_fragment:Vp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:Zp,batching_pars_vertex:Kp,batching_vertex:Jp,begin_vertex:$p,beginnormal_vertex:jp,bsdfs:Qp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:am,color_pars_fragment:om,color_pars_vertex:lm,color_vertex:cm,common:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:_m,envmap_fragment:xm,envmap_common_pars_fragment:ym,envmap_pars_fragment:vm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Dm,envmap_vertex:bm,fog_vertex:Sm,fog_pars_vertex:Em,fog_fragment:wm,fog_pars_fragment:Tm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Im,lights_toon_fragment:Lm,lights_toon_pars_fragment:Nm,lights_phong_fragment:Um,lights_phong_pars_fragment:Fm,lights_physical_fragment:Om,lights_physical_pars_fragment:Bm,lights_fragment_begin:km,lights_fragment_maps:Hm,lights_fragment_end:zm,lightprobes_pars_fragment:Gm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Zm,map_particle_fragment:Km,map_particle_pars_fragment:Jm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:e0,morphnormal_vertex:t0,morphtarget_pars_vertex:n0,morphtarget_vertex:i0,normal_fragment_begin:s0,normal_fragment_maps:r0,normal_pars_fragment:a0,normal_pars_vertex:o0,normal_vertex:l0,normalmap_pars_fragment:c0,clearcoat_normal_fragment_begin:h0,clearcoat_normal_fragment_maps:u0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:f0,opaque_fragment:p0,packing:m0,premultiplied_alpha_fragment:g0,project_vertex:_0,dithering_fragment:x0,dithering_pars_fragment:y0,roughnessmap_fragment:v0,roughnessmap_pars_fragment:M0,shadowmap_pars_fragment:b0,shadowmap_pars_vertex:S0,shadowmap_vertex:E0,shadowmask_pars_fragment:w0,skinbase_vertex:T0,skinning_pars_vertex:A0,skinning_vertex:R0,skinnormal_vertex:C0,specularmap_fragment:P0,specularmap_pars_fragment:I0,tonemapping_fragment:D0,tonemapping_pars_fragment:L0,transmission_fragment:N0,transmission_pars_fragment:U0,uv_pars_fragment:F0,uv_pars_vertex:O0,uv_vertex:B0,worldpos_vertex:k0,background_vert:H0,background_frag:z0,backgroundCube_vert:G0,backgroundCube_frag:V0,cube_vert:W0,cube_frag:X0,depth_vert:q0,depth_frag:Y0,distance_vert:Z0,distance_frag:K0,equirect_vert:J0,equirect_frag:$0,linedashed_vert:j0,linedashed_frag:Q0,meshbasic_vert:eg,meshbasic_frag:tg,meshlambert_vert:ng,meshlambert_frag:ig,meshmatcap_vert:sg,meshmatcap_frag:rg,meshnormal_vert:ag,meshnormal_frag:og,meshphong_vert:lg,meshphong_frag:cg,meshphysical_vert:hg,meshphysical_frag:ug,meshtoon_vert:dg,meshtoon_frag:fg,points_vert:pg,points_frag:mg,shadow_vert:gg,shadow_frag:_g,sprite_vert:xg,sprite_frag:yg},Ne={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},si={basic:{uniforms:hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:hn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:hn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:hn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new rt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:hn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:hn([Ne.points,Ne.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:hn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:hn([Ne.common,Ne.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:hn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:hn([Ne.sprite,Ne.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:hn([Ne.common,Ne.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:hn([Ne.lights,Ne.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};si.physical={uniforms:hn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Jo={r:0,b:0,g:0},vg=new Et,ld=new Qe;ld.set(-1,0,0,0,1,0,0,0,1);function Mg(i,e,t,n,s,r){let a=new rt(0),o=s===!0?0:1,l,c,u=null,f=0,p=null;function d(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let v=b.backgroundBlurriness>0;E=e.get(E,v)}return E}function _(b){let E=!1,v=d(b);v===null?g(a,o):v&&v.isColor&&(g(v,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,E){let v=d(E);v&&v.isCubeTexture?(c===void 0&&(c=new De(new Lt(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:os(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ld),c.material.toneMapped=gt.getTransfer(v.colorSpace)!==St,(u!==v||f!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new De(new Gn(2,2),new Qn({name:"BackgroundMaterial",uniforms:os(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=gt.getTransfer(v.colorSpace)!==St,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,E){b.getRGB(Jo,wc(i)),t.buffers.color.setClear(Jo.r,Jo.g,Jo.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:_,addToRenderList:M,dispose:m}}function bg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(U,F,N,C,B){let Y=!1,W=f(U,C,N,F);r!==W&&(r=W,c(r.object)),Y=d(U,C,N,B),Y&&_(U,C,N,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(U,F,N,C),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function f(U,F,N,C){let B=C.wireframe===!0,Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);let W=U.isInstancedMesh===!0?U.id:0,X=Y[W];X===void 0&&(X={},Y[W]=X);let q=X[N.id];q===void 0&&(q={},X[N.id]=q);let L=q[B];return L===void 0&&(L=p(l()),q[B]=L),L}function p(U){let F=[],N=[],C=[];for(let B=0;B<t;B++)F[B]=0,N[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:C,object:U,attributes:{},index:null}}function d(U,F,N,C){let B=r.attributes,Y=F.attributes,W=0,X=N.getAttributes();for(let q in X)if(X[q].location>=0){let Q=B[q],j=Y[q];if(j===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),Q===void 0||Q.attribute!==j||j&&Q.data!==j.data)return!0;W++}return r.attributesNum!==W||r.index!==C}function _(U,F,N,C){let B={},Y=F.attributes,W=0,X=N.getAttributes();for(let q in X)if(X[q].location>=0){let Q=Y[q];Q===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor));let j={};j.attribute=Q,Q&&Q.data&&(j.data=Q.data),B[q]=j,W++}r.attributes=B,r.attributesNum=W,r.index=C}function M(){let U=r.newAttributes;for(let F=0,N=U.length;F<N;F++)U[F]=0}function g(U){m(U,0)}function m(U,F){let N=r.newAttributes,C=r.enabledAttributes,B=r.attributeDivisors;N[U]=1,C[U]===0&&(i.enableVertexAttribArray(U),C[U]=1),B[U]!==F&&(i.vertexAttribDivisor(U,F),B[U]=F)}function b(){let U=r.newAttributes,F=r.enabledAttributes;for(let N=0,C=F.length;N<C;N++)F[N]!==U[N]&&(i.disableVertexAttribArray(N),F[N]=0)}function E(U,F,N,C,B,Y,W){W===!0?i.vertexAttribIPointer(U,F,N,B,Y):i.vertexAttribPointer(U,F,N,C,B,Y)}function v(U,F,N,C){M();let B=C.attributes,Y=N.getAttributes(),W=F.defaultAttributeValues;for(let X in Y){let q=Y[X];if(q.location>=0){let L=B[X];if(L===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(L=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(L=U.instanceColor)),L!==void 0){let Q=L.normalized,j=L.itemSize,fe=e.get(L);if(fe===void 0)continue;let Z=fe.buffer,oe=fe.type,me=fe.bytesPerElement,ye=oe===i.INT||oe===i.UNSIGNED_INT||L.gpuType===fo;if(L.isInterleavedBufferAttribute){let re=L.data,ve=re.isInterleavedBuffer===!0?re.stride:re.itemSize,nt=L.offset;if(re.isInstancedInterleavedBuffer||re.isInstancedBufferAttribute){for(let He=0;He<q.locationSize;He++)m(q.location+He,re.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let He=0;He<q.locationSize;He++)g(q.location+He);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let He=0;He<q.locationSize;He++)E(q.location+He,j/q.locationSize,oe,Q,ve*me,(nt+j/q.locationSize*He)*me,ye)}else{if(L.isInstancedBufferAttribute){for(let re=0;re<q.locationSize;re++)m(q.location+re,L.meshPerAttribute);U.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let re=0;re<q.locationSize;re++)g(q.location+re);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let re=0;re<q.locationSize;re++)E(q.location+re,j/q.locationSize,oe,Q,j*me,j/q.locationSize*re*me,ye)}}else if(W!==void 0){let Q=W[X];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(q.location,Q);break;case 3:i.vertexAttrib3fv(q.location,Q);break;case 4:i.vertexAttrib4fv(q.location,Q);break;default:i.vertexAttrib1fv(q.location,Q)}}}}b()}function R(){k();for(let U in n){let F=n[U];for(let N in F){let C=F[N];for(let B in C){let Y=C[B];for(let W in Y)u(Y[W].object),delete Y[W];delete C[B]}}delete n[U]}}function A(U){if(n[U.id]===void 0)return;let F=n[U.id];for(let N in F){let C=F[N];for(let B in C){let Y=C[B];for(let W in Y)u(Y[W].object),delete Y[W];delete C[B]}}delete n[U.id]}function x(U){for(let F in n){let N=n[F];for(let C in N){let B=N[C];if(B[U.id]===void 0)continue;let Y=B[U.id];for(let W in Y)u(Y[W].object),delete Y[W];delete B[U.id]}}}function w(U){for(let F in n){let N=n[F],C=U.isInstancedMesh===!0?U.id:0,B=N[C];if(B!==void 0){for(let Y in B){let W=B[Y];for(let X in W)u(W[X].object),delete W[X];delete B[Y]}delete N[C],Object.keys(N).length===0&&delete n[F]}}}function k(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:g,disableUnusedAttributes:b}}function Sg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let p=0;for(let d=0;d<u;d++)p+=c[d];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Eg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Xn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let w=x===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==_n&&x!==Nn&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ke("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,maxSamples:R,samples:A}}function wg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Mn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,d){let _=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||_===null||_.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,E=b*4,v=m.clippingState||null;l.value=v,v=u(_,p,E,d);for(let R=0;R!==E;++R)v[R]=t[R];m.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,d,_){let M=f!==null?f.length:0,g=null;if(M!==0){if(g=l.value,_!==!0||g===null){let m=d+M*4,b=p.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,v=d;E!==M;++E,v+=4)a.copy(f[E]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}var Yr=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Lt(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:ns});r.uniforms.tEquirect.value=t;let a=new De(s,r),o=t.minFilter;return t.minFilter===mi&&(t.minFilter=fn),new Os(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Hu=256,Tg=3,Ag=20,cd=256,hd=16,Rg=3,Cg=new z,Pg=new rt,Bi=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Os(1,10,null),this._boxMesh=new De(new Lt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Cg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,p=l.autoClearColor,d=l.autoClearDepth,_=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(Pg));let g=new Os(n,s,u);return g.position.copy(o),g.update(l,e),l.autoClear=f,l.autoClearColor=p,l.autoClearDepth=d,l.autoClearStencil=_,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hu,Mc(e))}_fromTexture(e,t){e.mapping===ss||e.mapping===zs?this._setSize(e.image.length===0?Hu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=zu(e,!1,!1),n=Math.log2(e)-Tg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ss||e.mapping===zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ig(),this._integrationMaterial=Dg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/hd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Rg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(cd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function zu(i,e,t){return new Yr(i,{minFilter:mi,generateMipmaps:e,type:Wn,colorSpace:hr,depthBuffer:t})}function Zr(i,e,t){return new Qn({name:i,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:qt,blending:ns,depthTest:!1,depthWrite:!1})}function Ig(){return Zr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dg(){return Zr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Lg(){return Zr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ag}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Gu(){return Zr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vu(){return Zr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ng(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,d=!1){return p==null?null:d?a(p):r(p)}function r(p){if(p&&p.isTexture){let d=p.mapping;if(d===co||d===ho)if(e.has(p)){let _=e.get(p).texture;return o(_,p.mapping)}else{let _=p.image;if(_&&_.height>0){let M=new Yr(_.height);return M.fromEquirectangularTexture(i,p),e.set(p,M),p.addEventListener("dispose",c),o(M.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let d=p.mapping,_=d===co||d===ho,M=d===ss||d===zs;if(_||M){let g=t.get(p),m=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return n===null&&(n=new Bi(i)),g=_?n.fromEquirectangular(p,g):n.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{let b=p.image;return _&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Bi(i)),g=_?n.fromEquirectangular(p):n.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",u),g.texture):null}}}return p}function o(p,d){return d===co?p.mapping=ss:d===ho&&(p.mapping=zs),p}function l(p){let d=0,_=6;for(let M=0;M<_;M++)p[M]!==void 0&&d++;return d===_}function c(p){let d=p.target;d.removeEventListener("dispose",c);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(p){let d=p.target;d.removeEventListener("dispose",u);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Ug(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&sr("WebGLRenderer: "+n+" extension not supported."),s}}}function Fg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let g in _.attributes)e.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let M=r.get(_);M&&(e.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(_){let M=_.attributes;for(let g in M)e.update(M[g],i.ARRAY_BUFFER)}function f(_){let M=_.index,g=_.attributes.position,m=0;if(g===void 0)return;let b=M!==null?M.array.length:g.array.length/3-1,E=g.count>=65535?mr:pr,v=new E(Math.ceil(b/3)*6,1),R=v.array;if(M!==null){let x=M.array;m=M.version;for(let w=0,k=0;w<b;w+=3){let I=x[w+0],U=x[w+1],F=x[w+2];R[k++]=I,R[k++]=U,R[k++]=U,R[k++]=F,R[k++]=F,R[k++]=I}}else{m=g.version;for(let x=0,w=0;x<b;x+=3){let k=x+0,I=x+1,U=x+2;R[w++]=k,R[w++]=I,R[w++]=I,R[w++]=U,R[w++]=U,R[w++]=k}}v.version=m;let A=r.get(_);A&&e.remove(A),r.set(_,v)}function p(_){let M=r.get(_);if(M){let g=_.index;g!==null&&M.version<g.version&&f(_)}else f(_);return r.get(_)}function d(){for(let _ in s){let M=s[_].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:p,dispose:d}}function Og(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,d){d!==0&&(i.drawElementsInstanced(n,p,r,f*a,d),t.update(p,n,d))}function u(f,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,d);let M=0;for(let g=0;g<d;g++)M+=p[g];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Bg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,e,t){let n=new WeakMap,s=new It;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,p=n.get(o);if(p===void 0||p.count!==f){let k=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",k)};p!==void 0&&p.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;d===!0&&(E=1),_===!0&&(E=2),M===!0&&(E=3);let v=o.attributes.position.count*E,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*R*4*f),x=new fr(A,v,R,f);x.type=Nn,x.needsUpdate=!0;let w=E*4;for(let I=0;I<f;I++){let U=g[I],F=m[I],N=b[I],C=v*R*4*I;for(let B=0;B<U.count;B++){let Y=B*w;d===!0&&(s.fromBufferAttribute(U,B),A[C+Y+0]=s.x,A[C+Y+1]=s.y,A[C+Y+2]=s.z,A[C+Y+3]=0),_===!0&&(s.fromBufferAttribute(F,B),A[C+Y+4]=s.x,A[C+Y+5]=s.y,A[C+Y+6]=s.z,A[C+Y+7]=0),M===!0&&(s.fromBufferAttribute(N,B),A[C+Y+8]=s.x,A[C+Y+9]=s.y,A[C+Y+10]=s.z,A[C+Y+11]=N.itemSize===4?s.w:1)}}p={count:f,texture:x,size:new pe(v,R)},n.set(o,p),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Hg(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,p=e.get(c,f);if(r.get(p)!==u&&(e.update(p),r.set(p,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return p}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var zg={[nc]:"LINEAR_TONE_MAPPING",[ic]:"REINHARD_TONE_MAPPING",[sc]:"CINEON_TONE_MAPPING",[rc]:"ACES_FILMIC_TONE_MAPPING",[oc]:"AGX_TONE_MAPPING",[ni]:"NEUTRAL_TONE_MAPPING",[ac]:"CUSTOM_TONE_MAPPING"};function Gg(i,e,t,n,s,r){let a=new Sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Xt;u.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new _t([0,2,0,0,2,0],2));let f=new Ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new De(u,f),d=new es(-1,1,1,-1,0,1),_=null,M=null,g=!1,m,b=null,E=[],v=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),l!==null&&l.setSize(R,A);for(let x=0;x<E.length;x++){let w=E[x];w.setSize&&w.setSize(R,A)}},this.setEffects=function(R){E=R,v=E.length>0&&E[0].isRenderPass===!0;let A=a.width,x=a.height;E.length>0&&o===null&&(o=new Sn(A,x,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(A,x,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&E.some(k=>k.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new fi(A,x),r===!0&&(c.format=gi,c.type=rs)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let k=0;k<E.length;k++){let I=E[k];I.setSize&&I.setSize(A,x),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,A){if(g||R.toneMapping===ti&&E.length===0)return!1;if(b=A,A!==null){let x=A.width,w=A.height;(a.width!==x||a.height!==w)&&this.setSize(x,w)}return v===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=ti,!0},this.hasRenderPass=function(){return v},this.end=function(R,A){R.toneMapping=m,g=!0;let x=a,w=o;for(let k=0;k<E.length;k++){let I=E[k];I.enabled!==!1&&(I.render(R,w,x,A),I.needsSwap!==!1&&(x=w,w=w===o?l:o))}if(_!==R.outputColorSpace||M!==R.toneMapping){_=R.outputColorSpace,M=R.toneMapping,f.defines={},gt.getTransfer(_)===St&&(f.defines.SRGB_TRANSFER="");let k=zg[M];k&&(f.defines[k]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,R.setRenderTarget(b),R.render(p,d),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}var ud=new pn,dd=new fi(1,1),fd=new vr(1),pd=new fr,md=new Ha,gd=new yr,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),Zu=new Float32Array(4);function Ws(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jo(i,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Zu.set(n),i.uniformMatrix2fv(this.addr,!1,Zu),Zt(t,n)}}function Zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),Zt(t,n)}}function Kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),Zt(t,n)}}function Jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function e_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function Qo(i){return i.version===0&&(i.compareFunction=_c,i.needsUpdate=!0),i}function s_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Qo(dd):r=ud,t.setTexture2D(e||r,s)}function r_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||md,s)}function a_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Qo(fd):r=gd,t.setTextureCube(e||r,s)}function o_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pd,s)}function l_(i){switch(i){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return qg;case 35674:return Yg;case 35675:return Zg;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return $g;case 35668:case 35672:return jg;case 35669:case 35673:return Qg;case 5125:return e_;case 36294:return t_;case 36295:return n_;case 36296:return i_;case 35678:case 36198:case 36298:case 36306:case 35682:return s_;case 35679:case 36299:case 36307:return r_;case 35680:case 36300:case 36308:case 36293:return a_;case 36289:case 36303:case 36311:case 36292:return o_}}function c_(i,e){i.uniform1fv(this.addr,e)}function h_(i,e){let t=Ws(e,this.size,2);i.uniform2fv(this.addr,t)}function u_(i,e){let t=Ws(e,this.size,3);i.uniform3fv(this.addr,t)}function d_(i,e){let t=Ws(e,this.size,4);i.uniform4fv(this.addr,t)}function f_(i,e){let t=Ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p_(i,e){let t=Ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m_(i,e){let t=Ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g_(i,e){i.uniform1iv(this.addr,e)}function __(i,e){i.uniform2iv(this.addr,e)}function x_(i,e){i.uniform3iv(this.addr,e)}function y_(i,e){i.uniform4iv(this.addr,e)}function v_(i,e){i.uniform1uiv(this.addr,e)}function M_(i,e){i.uniform2uiv(this.addr,e)}function b_(i,e){i.uniform3uiv(this.addr,e)}function S_(i,e){i.uniform4uiv(this.addr,e)}function E_(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qo(dd):a=ud;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function w_(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||md,r[a])}function T_(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Qo(fd):a=gd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function A_(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||pd,r[a])}function R_(i){switch(i){case 5126:return c_;case 35664:return h_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return v_;case 36294:return M_;case 36295:return b_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return E_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return A_}}var Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l_(t.type)}},Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R_(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function Ku(i,e){i.seq.push(e),i.map[e.id]=e}function C_(i,e,t){let n=i.name,s=n.length;for(Cc.lastIndex=0;;){let r=Cc.exec(n),a=Cc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ku(t,c===void 0?new Ic(o,i,e):new Dc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Lc(o),Ku(t,f)),t=f}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);C_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ju(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var P_=37297,I_=0;function D_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var $u=new Qe;function L_(i){gt._getMatrix($u,gt.workingColorSpace,i);let e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case ur:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ju(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+D_(i.getShaderSource(e),o)}else return r}function N_(i,e){let t=L_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var U_={[nc]:"Linear",[ic]:"Reinhard",[sc]:"Cineon",[rc]:"ACESFilmic",[oc]:"AgX",[ni]:"Neutral",[ac]:"Custom"};function F_(i,e){let t=U_[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var $o=new z;function O_(){gt.getLuminanceCoefficients($o);let i=$o.x.toFixed(4),e=$o.y.toFixed(4),t=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function k_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qr(i){return i!==""}function Qu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(z_,G_)}function G_(i,e){let t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Nc(t)}var V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function td(i){return i.replace(V_,W_)}function W_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var X_={[ts]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function q_(i){return X_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Y_={[zs]:"ENVMAP_MODE_REFRACTION"};function Z_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Y_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var K_={[lo]:"ENVMAP_BLENDING_MULTIPLY",[pu]:"ENVMAP_BLENDING_MIX",[mu]:"ENVMAP_BLENDING_ADD"};function J_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":K_[i.combine]||"ENVMAP_BLENDING_NONE"}function $_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=q_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Z_(t),f=J_(t),p=B_(t),d=k_(r),_=s.createProgram(),M,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(qr).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(qr).join(`
`),g.length>0&&(g+=`
`)):(M=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),g=[nd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?ct.tonemapping_pars_fragment:"",t.toneMapping!==ti?F_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,N_("linearToOutputTexel",t.outputColorSpace),O_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=Nc(a),a=Qu(a,t),a=ed(a,t),o=Nc(o),o=Qu(o,t),o=ed(o,t),a=td(a),o=td(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=m+M+a,E=m+g+o,v=Ju(s,s.VERTEX_SHADER,b),R=Ju(s,s.FRAGMENT_SHADER,E);s.attachShader(_,v),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(v)||"",N=s.getShaderInfoLog(R)||"",C=U.trim(),B=F.trim(),Y=N.trim(),W=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,R);else{let q=ju(s,v,"vertex"),L=ju(s,R,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+q+`
`+L)}else C!==""?Ke("WebGLProgram: Program Info Log:",C):(B===""||Y==="")&&(X=!1);X&&(I.diagnostics={runnable:W,programLog:C,vertexShader:{log:B,prefix:M},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(v),s.deleteShader(R),x=new Vs(s,_),w=H_(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(_,P_)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=I_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=R,this}var j_=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fc(e),t.set(e,n)),n}},Fc=class{constructor(e){this.id=j_++,this.code=e,this.usedTimes=0}};function Q_(i){return i===Oi||i===Gr||i===Vr}function ex(i,e,t,n,s,r){let a=new Ps,o=new Uc,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,k,I,U,F){let N=I.fog,C=U.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||B,Y),X=p[x.type],q=n.precision;x.precision!==null&&(q=n.getMaxPrecision(x.precision),q!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",q,"instead."));let L=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,Q=L!==void 0?L.length:0,j=0;C.morphAttributes.position!==void 0&&(j=1),C.morphAttributes.normal!==void 0&&(j=2),C.morphAttributes.color!==void 0&&(j=3);let fe,Z,oe,me;if(X){let Le=si[X];fe=Le.vertexShader,Z=Le.fragmentShader}else{fe=x.vertexShader,Z=x.fragmentShader;let Le=o.getVertexShaderStage(x),wt=o.getFragmentShaderStage(x);o.update(x,Le,wt),oe=Le.id,me=wt.id}let ye=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),ve=U.isInstancedMesh===!0,nt=U.isBatchedMesh===!0,He=!!x.map,Be=!!x.matcap,et=!!W,ue=et&&W.isPMREMTexture===!0,Ee=!!x.aoMap,Me=!!x.lightMap,Fe=!!x.bumpMap&&x.wireframe===!1,Ie=!!x.normalMap,st=!!x.displacementMap,We=!!x.emissiveMap,dt=!!x.metalnessMap,ft=!!x.roughnessMap,vt=x.anisotropy>0,V=x.clearcoat>0,Ht=x.diffuseRoughness>0,ut=x.dispersion>0,Tt=x.retroreflectivity>0,Re=x.iridescence>0,Bt=x.sheen>0,Ze=x.transmission>0,$e=vt&&!!x.anisotropyMap,D=V&&!!x.clearcoatMap,S=V&&!!x.clearcoatNormalMap,J=V&&!!x.clearcoatRoughnessMap,ge=Ht&&!!x.diffuseRoughnessMap,de=Re&&!!x.iridescenceMap,be=Re&&!!x.iridescenceThicknessMap,Ce=Bt&&!!x.sheenColorMap,ae=Bt&&!!x.sheenRoughnessMap,le=!!x.specularMap,we=!!x.specularColorMap,H=!!x.specularIntensityMap,he=Ze&&!!x.transmissionMap,ie=Ze&&!!x.thicknessMap,Te=!!x.gradientMap,xe=!!x.alphaMap,Se=x.alphaTest>0,Xe=!!x.alphaHash,lt=!!x.extensions,_e=ti;x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(_e=i.toneMapping);let Ye=ue?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,at={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:fe,fragmentShader:Z,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:q,batching:nt,batchingColor:nt&&U._colorsTexture!==null,instancing:ve,instancingColor:ve&&U.instanceColor!==null,instancingMorph:ve&&U.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:Be,envMap:et,envMapMode:et&&W.mapping,envMapPMREM:ue,envMapMaxLod:ue?Ye.length-1:null,envMapSize:ue?Ye[0].width:null,aoMap:Ee,lightMap:Me,bumpMap:Fe,normalMap:Ie,displacementMap:st,emissiveMap:We,normalMapObjectSpace:Ie&&x.normalMapType===xu,normalMapTangentSpace:Ie&&x.normalMapType===Wr,packedNormalMap:Ie&&x.normalMapType===Wr&&Q_(x.normalMap.format),metalnessMap:dt,roughnessMap:ft,anisotropy:vt,anisotropyMap:$e,clearcoat:V,clearcoatMap:D,clearcoatNormalMap:S,clearcoatRoughnessMap:J,diffuseRoughness:Ht,diffuseRoughnessMap:ge,dispersion:ut,retroreflection:Tt,iridescence:Re,iridescenceMap:de,iridescenceThicknessMap:be,sheen:Bt,sheenColorMap:Ce,sheenRoughnessMap:ae,specularMap:le,specularColorMap:we,specularIntensityMap:H,transmission:Ze,transmissionMap:he,thicknessMap:ie,gradientMap:Te,opaque:x.transparent===!1&&x.blending===Hs&&x.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:Xe,combine:x.combine,mapUv:He&&d(x.map.channel),aoMapUv:Ee&&d(x.aoMap.channel),lightMapUv:Me&&d(x.lightMap.channel),bumpMapUv:Fe&&d(x.bumpMap.channel),normalMapUv:Ie&&d(x.normalMap.channel),displacementMapUv:st&&d(x.displacementMap.channel),emissiveMapUv:We&&d(x.emissiveMap.channel),metalnessMapUv:dt&&d(x.metalnessMap.channel),roughnessMapUv:ft&&d(x.roughnessMap.channel),anisotropyMapUv:$e&&d(x.anisotropyMap.channel),clearcoatMapUv:D&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ge&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:de&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:be&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ae&&d(x.sheenRoughnessMap.channel),specularMapUv:le&&d(x.specularMap.channel),specularColorMapUv:we&&d(x.specularColorMap.channel),specularIntensityMapUv:H&&d(x.specularIntensityMap.channel),transmissionMapUv:he&&d(x.transmissionMap.channel),thicknessMapUv:ie&&d(x.thicknessMap.channel),alphaMapUv:xe&&d(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Ie||vt),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!C.attributes.uv&&(He||xe),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&Ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:re,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:j,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:F.filter(Le=>Le.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:We&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:lt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&x.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function M(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)w.push(k),w.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(g(w,x),m(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function m(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let w=p[x.type],k;if(w){let I=si[w];k=Ou.clone(I.uniforms)}else k=x.uniforms;return k}function E(x,w){let k=u.get(w);return k!==void 0?++k.usedTimes:(k=new $_(i,w,x,s),c.push(k),u.set(w,k)),k}function v(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function R(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:b,acquireProgram:E,releaseProgram:v,releaseShaderCache:R,programs:c,dispose:A}}function tx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let d=0;return p.isInstancedMesh&&(d+=2),p.isSkinnedMesh&&(d+=1),d}function o(p,d,_,M,g,m){let b=i[e];return b===void 0?(b={id:p.id,object:p,geometry:d,material:_,materialVariant:a(p),groupOrder:M,renderOrder:p.renderOrder,z:g,group:m},i[e]=b):(b.id=p.id,b.object=p,b.geometry=d,b.material=_,b.materialVariant=a(p),b.groupOrder=M,b.renderOrder=p.renderOrder,b.z=g,b.group=m),e++,b}function l(p,d,_,M,g,m,b){b.reversedDepth===!0&&(g=-g);let E=o(p,d,_,M,g,m);_.transmission>0?n.push(E):_.transparent===!0?s.push(E):t.push(E)}function c(p,d,_,M,g,m){let b=o(p,d,_,M,g,m);_.transmission>0?n.unshift(b):_.transparent===!0?s.unshift(b):t.unshift(b)}function u(p,d){t.length>1&&t.sort(p||nx),n.length>1&&n.sort(d||id),s.length>1&&s.sort(d||id)}function f(){for(let p=e,d=i.length;p<d;p++){let _=i[p];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function ix(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new sd,i.set(n,[a])):s>=r.length?(a=new sd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new rt};break;case"SpotLight":t={position:new z,direction:new z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function rx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ax=0;function ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lx(i){let e=new sx,t=rx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new Et,a=new Et;function o(c){let u=0,f=0,p=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,_=0,M=0,g=0,m=0,b=0,E=0,v=0,R=0,A=0,x=0,w=0,k=0,I=0;c.sort(ox);for(let F=0,N=c.length;F<N;F++){let C=c[F],B=C.color,Y=C.intensity,W=C.distance,X=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Oi?X=C.shadow.map.texture:X=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=B.r*Y,f+=B.g*Y,p+=B.b*Y;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],Y);I++}else if(C.isSunLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let L=C.shadow,Q=t.get(C);Q.shadowIntensity=L.intensity,Q.shadowBias=L.bias,Q.shadowNormalBias=L.normalBias,Q.shadowRadius=L.radius,Q.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[_]=Q,n.sunShadowMap[_]=X;let j=L.getViewportCount();for(let fe=0;fe<j;fe++)n.sunShadowMatrix[M+fe]=L.getMatrix(fe),n.sunShadowCascade[M+fe]=L._cascadeData[fe];M+=j,_++}n.sun[d]=q,d++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let L=C.shadow,Q=t.get(C);Q.shadowIntensity=L.intensity,Q.shadowBias=L.bias,Q.shadowNormalBias=L.normalBias,Q.shadowRadius=L.radius,Q.shadowMapSize=L.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=C.shadow.matrix,R++}n.directional[g]=q,g++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(B).multiplyScalar(Y),q.distance=W,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[b]=q;let L=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,L.updateMatrices(C),C.castShadow&&k++),n.spotLightMatrix[b]=L.matrix,C.castShadow){let Q=t.get(C);Q.shadowIntensity=L.intensity,Q.shadowBias=L.bias,Q.shadowNormalBias=L.normalBias,Q.shadowRadius=L.radius,Q.shadowMapSize=L.mapSize,n.spotShadow[b]=Q,n.spotShadowMap[b]=X,x++}b++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(B).multiplyScalar(Y),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=q,E++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let L=C.shadow,Q=t.get(C);Q.shadowIntensity=L.intensity,Q.shadowBias=L.bias,Q.shadowNormalBias=L.normalBias,Q.shadowRadius=L.radius,Q.shadowMapSize=L.mapSize,Q.shadowCameraNear=L.camera.near,Q.shadowCameraFar=L.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=C.shadow.matrix,A++}n.point[m]=q,m++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(Y),q.groundColor.copy(C.groundColor).multiplyScalar(Y),n.hemi[v]=q,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=p;let U=n.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==m||U.spotLength!==b||U.rectAreaLength!==E||U.hemiLength!==v||U.numSunShadows!==_||U.numDirectionalShadows!==R||U.numPointShadows!==A||U.numSpotShadows!==x||U.numSpotMaps!==w||U.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=g,n.spot.length=b,n.rectArea.length=E,n.point.length=m,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-k,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=I,U.sunLength=d,U.directionalLength=g,U.pointLength=m,U.spotLength=b,U.rectAreaLength=E,U.hemiLength=v,U.numSunShadows=_,U.numDirectionalShadows=R,U.numPointShadows=A,U.numSpotShadows=x,U.numSpotMaps=w,U.numLightProbes=I,n.version=ax++)}function l(c,u){let f=0,p=0,d=0,_=0,M=0,g=0,m=u.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let v=c[b];if(v.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(m),f++}else if(v.isDirectionalLight){let R=n.directional[p];R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),p++}else if(v.isSpotLight){let R=n.spot[_];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),_++}else if(v.isRectAreaLight){let R=n.rectArea[M];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(v.width*.5,0,0),R.halfHeight.set(0,v.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let R=n.point[d];R.position.setFromMatrixPosition(v.matrixWorld),R.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(v.matrixWorld),R.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function rd(i){let e=new lx(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,p)=>f.priority-p.priority||f.id-p.id)}function c(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function cx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new rd(i),e.set(s,[o])):r>=a.length?(o=new rd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dx=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],fx=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],ad=new Et,Xr=new z,Pc=new z;function px(i,e,t){let n=new Pi,s=new pe,r=new pe,a=new It,o=new Za,l=new Ka,c={},u=t.maxTextureSize,f={[ei]:qt,[qt]:ei,[mn]:mn},p=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let _=new Xt;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new De(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ts;let m=this.type;this.render=function(A,x,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===oo&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ts);let k=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ns),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let N=m!==this.type;N&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=A.length;C<B;C++){let Y=A[C],W=Y.shadow;if(W===void 0){Ke("WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let X=W.getFrameExtents();s.multiply(X),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,W.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||N===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ks){if(Y.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Sn(s.x,s.y,{format:Oi,type:Wn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),W.map.texture.name=Y.name+".shadowMap",W.map.depthTexture=new fi(s.x,s.y,Nn),W.map.depthTexture.name=Y.name+".shadowMapDepth",W.map.depthTexture.format=di,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qt,W.map.depthTexture.magFilter=Qt}else Y.isPointLight?(W.map=new Yr(s.x),W.map.depthTexture=new vr(s.x,Vn)):(W.map=new Sn(s.x,s.y),W.map.depthTexture=new fi(s.x,s.y,Vn)),W.map.depthTexture.name=Y.name+".shadowMap",W.map.depthTexture.format=di,this.type===ts?(W.map.depthTexture.compareFunction=q?gc:mc,W.map.depthTexture.minFilter=fn,W.map.depthTexture.magFilter=fn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Qt,W.map.depthTexture.magFilter=Qt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let L=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();Y.isPointLight!==!0&&W.updateMatrices(Y,w);let Q=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:w.layers;for(let j=0;j<L;j++){let fe=W.getCamera(j);if(Y.isPointLight){let Z=W.camera,oe=W.matrix,me=Y.distance||Z.far;me!==Z.far&&(Z.far=me,Z.updateProjectionMatrix()),Xr.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(Xr),Pc.copy(Z.position),Pc.add(dx[j]),Z.up.copy(fx[j]),Z.lookAt(Pc),Z.updateMatrixWorld(),oe.makeTranslation(-Xr.x,-Xr.y,-Xr.z),ad.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ad,Z.coordinateSystem,Z.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,j),i.clear();else{j===0&&(i.setRenderTarget(W.map),i.clear());let Z=W.getViewport(j);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),F.viewport(a)}n=W.getFrustum(j),v(x,w,fe,Y,Q,this.type)}W.isPointLightShadow!==!0&&this.type===ks&&b(W,w),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(k,I,U)};function b(A,x){let w=e.update(M);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new Sn(s.x,s.y,{format:Oi,type:Wn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),p.uniforms.shadow_pass.value=A.map.depthTexture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(x,null,w,p,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(x,null,w,d,M,null)}function E(A,x,w,k){let I=null,U=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)I=U;else if(I=w.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=I.uuid,N=x.uuid,C=c[F];C===void 0&&(C={},c[F]=C);let B=C[N];B===void 0&&(B=I.clone(),C[N]=B,x.addEventListener("dispose",R)),I=B}if(I.visible=x.visible,I.wireframe=x.wireframe,k===ks?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:f[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let F=i.properties.get(I);F.light=w}return I}function v(A,x,w,k,I,U){if(A.visible===!1)return;if(A.layers.test(I)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===ks)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);let C=e.update(A),B=A.material;if(Array.isArray(B)){let Y=C.groups;for(let W=0,X=Y.length;W<X;W++){let q=Y[W],L=B[q.materialIndex];if(L&&L.visible){let Q=E(A,L,k,U);A.onBeforeShadow(i,A,x,w,C,Q,q),i.renderBufferDirect(w,null,C,Q,A,q),A.onAfterShadow(i,A,x,w,C,Q,q)}}}else if(B.visible){let Y=E(A,B,k,U);A.onBeforeShadow(i,A,x,w,C,Y,null),i.renderBufferDirect(w,null,C,Y,A,null),A.onAfterShadow(i,A,x,w,C,Y,null)}}let N=A.children;for(let C=0,B=N.length;C<B;C++)v(N[C],x,w,k,I,U)}function R(A){A.target.removeEventListener("dispose",R);for(let w in c){let k=c[w],I=A.target.uuid;I in k&&(k[I].dispose(),delete k[I])}}}function mx(i,e){function t(){let H=!1,he=new It,ie=null,Te=new It(0,0,0,0);return{setMask:function(xe){ie!==xe&&!H&&(i.colorMask(xe,xe,xe,xe),ie=xe)},setLocked:function(xe){H=xe},setClear:function(xe,Se,Xe,lt,_e){_e===!0&&(xe*=lt,Se*=lt,Xe*=lt),he.set(xe,Se,Xe,lt),Te.equals(he)===!1&&(i.clearColor(xe,Se,Xe,lt),Te.copy(he))},reset:function(){H=!1,ie=null,Te.set(-1,0,0,0)}}}function n(){let H=!1,he=!1,ie=null,Te=null,xe=null;return{setReversed:function(Se){if(he!==Se){let Xe=e.get("EXT_clip_control");Se?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),he=Se;let lt=xe;xe=null,this.setClear(lt)}},getReversed:function(){return he},setTest:function(Se){Se?re(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(Se){ie!==Se&&!H&&(i.depthMask(Se),ie=Se)},setFunc:function(Se){if(he&&(Se=Cu[Se]),Te!==Se){switch(Se){case Ca:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case Ia:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=Se}},setLocked:function(Se){H=Se},setClear:function(Se){xe!==Se&&(xe=Se,he&&(Se=1-Se),i.clearDepth(Se))},reset:function(){H=!1,ie=null,Te=null,xe=null,he=!1}}}function s(){let H=!1,he=null,ie=null,Te=null,xe=null,Se=null,Xe=null,lt=null,_e=null;return{setTest:function(Ye){H||(Ye?re(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(Ye){he!==Ye&&!H&&(i.stencilMask(Ye),he=Ye)},setFunc:function(Ye,at,Le){(ie!==Ye||Te!==at||xe!==Le)&&(i.stencilFunc(Ye,at,Le),ie=Ye,Te=at,xe=Le)},setOp:function(Ye,at,Le){(Se!==Ye||Xe!==at||lt!==Le)&&(i.stencilOp(Ye,at,Le),Se=Ye,Xe=at,lt=Le)},setLocked:function(Ye){H=Ye},setClear:function(Ye){_e!==Ye&&(i.clearStencil(Ye),_e=Ye)},reset:function(){H=!1,he=null,ie=null,Te=null,xe=null,Se=null,Xe=null,lt=null,_e=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,u={},f={},p={},d=new WeakMap,_=[],M=null,g=!1,m=null,b=null,E=null,v=null,R=null,A=null,x=null,w=new rt(0,0,0),k=0,I=!1,U=null,F=null,N=null,C=null,B=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=X>=2);let L=null,Q={},j=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),Z=new It().fromArray(j),oe=new It().fromArray(fe);function me(H,he,ie,Te){let xe=new Uint8Array(4),Se=i.createTexture();i.bindTexture(H,Se),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<ie;Xe++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(he+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return Se}let ye={};ye[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(ws),Fe(!1),Ie(Jl),re(i.CULL_FACE),Ee(ns);function re(H){u[H]!==!0&&(i.enable(H),u[H]=!0)}function ve(H){u[H]!==!1&&(i.disable(H),u[H]=!1)}function nt(H,he){return p[H]!==he?(i.bindFramebuffer(H,he),p[H]=he,H===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=he),H===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=he),!0):!1}function He(H,he){let ie=_,Te=!1;if(H){ie=d.get(he),ie===void 0&&(ie=[],d.set(he,ie));let xe=H.textures;if(ie.length!==xe.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Xe=xe.length;Se<Xe;Se++)ie[Se]=i.COLOR_ATTACHMENT0+Se;ie.length=xe.length,Te=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ie)}function Be(H){return M!==H?(i.useProgram(H),M=H,!0):!1}let et={[is]:i.FUNC_ADD,[$h]:i.FUNC_SUBTRACT,[jh]:i.FUNC_REVERSE_SUBTRACT};et[Qh]=i.MIN,et[eu]=i.MAX;let ue={[tu]:i.ZERO,[nu]:i.ONE,[iu]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[cu]:i.SRC_ALPHA_SATURATE,[ou]:i.DST_COLOR,[ru]:i.DST_ALPHA,[su]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[lu]:i.ONE_MINUS_DST_COLOR,[au]:i.ONE_MINUS_DST_ALPHA,[hu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[fu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(H,he,ie,Te,xe,Se,Xe,lt,_e,Ye){if(H===ns){g===!0&&(ve(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),H!==Jh){if(H!==m||Ye!==I){if((b!==is||R!==is)&&(i.blendEquation(i.FUNC_ADD),b=is,R=is),Ye)switch(H){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",H);break}else switch(H){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $l:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jl:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ql:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",H);break}E=null,v=null,A=null,x=null,w.set(0,0,0),k=0,m=H,I=Ye}return}xe=xe||he,Se=Se||ie,Xe=Xe||Te,(he!==b||xe!==R)&&(i.blendEquationSeparate(et[he],et[xe]),b=he,R=xe),(ie!==E||Te!==v||Se!==A||Xe!==x)&&(i.blendFuncSeparate(ue[ie],ue[Te],ue[Se],ue[Xe]),E=ie,v=Te,A=Se,x=Xe),(lt.equals(w)===!1||_e!==k)&&(i.blendColor(lt.r,lt.g,lt.b,_e),w.copy(lt),k=_e),m=H,I=!1}function Me(H,he){H.side===mn?ve(i.CULL_FACE):re(i.CULL_FACE);let ie=H.side===qt;he&&(ie=!ie),Fe(ie),H.blending===Hs&&H.transparent===!1?Ee(ns):Ee(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Te=H.stencilWrite;o.setTest(Te),Te&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),We(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(H){U!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),U=H)}function Ie(H){H!==Zh?(re(i.CULL_FACE),H!==F&&(H===Jl?i.cullFace(i.BACK):H===Kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),F=H}function st(H){H!==N&&(W&&i.lineWidth(H),N=H)}function We(H,he,ie){H?(re(i.POLYGON_OFFSET_FILL),(C!==he||B!==ie)&&(C=he,B=ie,a.getReversed()&&(he=-he,ie=-ie),i.polygonOffset(he,ie))):ve(i.POLYGON_OFFSET_FILL)}function dt(H){H?re(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function ft(H){H===void 0&&(H=i.TEXTURE0+Y-1),L!==H&&(i.activeTexture(H),L=H)}function vt(H,he,ie){ie===void 0&&(L===null?ie=i.TEXTURE0+Y-1:ie=L);let Te=Q[ie];Te===void 0&&(Te={type:void 0,texture:void 0},Q[ie]=Te),(Te.type!==H||Te.texture!==he)&&(L!==ie&&(i.activeTexture(ie),L=ie),i.bindTexture(H,he||ye[H]),Te.type=H,Te.texture=he)}function V(){let H=Q[L];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function Tt(){try{i.texSubImage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function Re(){try{i.texSubImage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function Bt(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function Ze(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function $e(){try{i.texStorage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function D(){try{i.texStorage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function S(){try{i.texImage2D(...arguments)}catch(H){Je("WebGLState:",H)}}function J(){try{i.texImage3D(...arguments)}catch(H){Je("WebGLState:",H)}}function ge(H){return f[H]!==void 0?f[H]:i.getParameter(H)}function de(H,he){f[H]!==he&&(i.pixelStorei(H,he),f[H]=he)}function be(H){Z.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Z.copy(H))}function Ce(H){oe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),oe.copy(H))}function ae(H,he){let ie=c.get(he);ie===void 0&&(ie=new WeakMap,c.set(he,ie));let Te=ie.get(H);Te===void 0&&(Te=i.getUniformBlockIndex(he,H.name),i.uniformBlockBinding(he,Te,Te),ie.set(H,Te))}function le(H,he,ie){let xe=c.get(he).get(H);l[xe]!==ie&&(i.bindBufferBase(i.UNIFORM_BUFFER,xe,ie),l[xe]=ie)}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},L=null,Q={},p={},l={},d=new WeakMap,_=[],M=null,g=!1,m=null,b=null,E=null,v=null,R=null,A=null,x=null,w=new rt(0,0,0),k=0,I=!1,U=null,F=null,N=null,C=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:ve,bindFramebuffer:nt,drawBuffers:He,useProgram:Be,setBlending:Ee,setMaterial:Me,setFlipSided:Fe,setCullFace:Ie,setLineWidth:st,setPolygonOffset:We,setScissorTest:dt,activeTexture:ft,bindTexture:vt,unbindTexture:V,compressedTexImage2D:Ht,compressedTexImage3D:ut,texImage2D:S,texImage3D:J,pixelStorei:de,getParameter:ge,updateUBOMapping:ae,uniformBlockBinding:le,texStorage2D:$e,texStorage3D:D,texSubImage2D:Tt,texSubImage3D:Re,compressedTexSubImage2D:Bt,compressedTexSubImage3D:Ze,scissor:be,viewport:Ce,reset:we}}function gx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap,f=new Set,p,d=new WeakMap,_=new Set,M=new FinalizationRegistry(D=>_.delete(D)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,S){return g?new OffscreenCanvas(D,S):dr("canvas")}function b(D,S,J){let ge=1,de=$e(D);if((de.width>J||de.height>J)&&(ge=J/Math.max(de.width,de.height)),ge<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let be=Math.floor(ge*de.width),Ce=Math.floor(ge*de.height);p===void 0&&(p=m(be,Ce));let ae=S?m(be,Ce):p;return ae.width=be,ae.height=Ce,ae.getContext("2d").drawImage(D,0,0,be,Ce),Ke("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+be+"x"+Ce+")."),ae}else return"data"in D&&Ke("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),D;return D}function E(D){return D.generateMipmaps}function v(D){i.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(D,S,J,ge,de,be=!1){if(D!==null){if(i[D]!==void 0)return i[D];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ce;ge&&(Ce=e.get("EXT_texture_norm16"),Ce||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=S;if(S===i.RED&&(J===i.FLOAT&&(ae=i.R32F),J===i.HALF_FLOAT&&(ae=i.R16F),J===i.UNSIGNED_BYTE&&(ae=i.R8),J===i.UNSIGNED_SHORT&&Ce&&(ae=Ce.R16_EXT),J===i.SHORT&&Ce&&(ae=Ce.R16_SNORM_EXT)),S===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.R8UI),J===i.UNSIGNED_SHORT&&(ae=i.R16UI),J===i.UNSIGNED_INT&&(ae=i.R32UI),J===i.BYTE&&(ae=i.R8I),J===i.SHORT&&(ae=i.R16I),J===i.INT&&(ae=i.R32I)),S===i.RG&&(J===i.FLOAT&&(ae=i.RG32F),J===i.HALF_FLOAT&&(ae=i.RG16F),J===i.UNSIGNED_BYTE&&(ae=i.RG8),J===i.UNSIGNED_SHORT&&Ce&&(ae=Ce.RG16_EXT),J===i.SHORT&&Ce&&(ae=Ce.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RG8UI),J===i.UNSIGNED_SHORT&&(ae=i.RG16UI),J===i.UNSIGNED_INT&&(ae=i.RG32UI),J===i.BYTE&&(ae=i.RG8I),J===i.SHORT&&(ae=i.RG16I),J===i.INT&&(ae=i.RG32I)),S===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RGB8UI),J===i.UNSIGNED_SHORT&&(ae=i.RGB16UI),J===i.UNSIGNED_INT&&(ae=i.RGB32UI),J===i.BYTE&&(ae=i.RGB8I),J===i.SHORT&&(ae=i.RGB16I),J===i.INT&&(ae=i.RGB32I)),S===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(ae=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(ae=i.RGBA16UI),J===i.UNSIGNED_INT&&(ae=i.RGBA32UI),J===i.BYTE&&(ae=i.RGBA8I),J===i.SHORT&&(ae=i.RGBA16I),J===i.INT&&(ae=i.RGBA32I)),S===i.RGB&&(J===i.UNSIGNED_SHORT&&Ce&&(ae=Ce.RGB16_EXT),J===i.SHORT&&Ce&&(ae=Ce.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(ae=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(ae=i.R11F_G11F_B10F)),S===i.RGBA){let le=be?ur:gt.getTransfer(de);J===i.FLOAT&&(ae=i.RGBA32F),J===i.HALF_FLOAT&&(ae=i.RGBA16F),J===i.UNSIGNED_BYTE&&(ae=le===St?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&Ce&&(ae=Ce.RGBA16_EXT),J===i.SHORT&&Ce&&(ae=Ce.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(ae=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(ae=i.RGB5_A1)}return(ae===i.R16F||ae===i.R32F||ae===i.RG16F||ae===i.RG32F||ae===i.RGBA16F||ae===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(D,S){let J;return D?S===null||S===Vn||S===rs?J=i.DEPTH24_STENCIL8:S===Nn?J=i.DEPTH32F_STENCIL8:S===Gs&&(J=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vn||S===rs?J=i.DEPTH_COMPONENT24:S===Nn?J=i.DEPTH_COMPONENT32F:S===Gs&&(J=i.DEPTH_COMPONENT16),J}function w(D,S){return E(D)===!0||D.isFramebufferTexture&&D.minFilter!==Qt&&D.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function k(D){let S=new WeakRef(D);n.get(D).__ref=S,_.add(S),M.register(D,S,S)}function I(D){let S=n.get(D).__ref;S!==void 0&&(_.delete(S),M.unregister(S))}function U(D){N(D.target)}function F(D){C(D.target)}function N(D){D.removeEventListener("dispose",U),I(D),Y(D),D.isVideoTexture&&u.delete(D),D.isHTMLTexture&&f.delete(D)}function C(D){D.removeEventListener("dispose",F),I(D),X(D)}function B(){for(let D of _){let S=D.deref();S!==void 0&&(S.isRenderTarget===!0?C(S):N(S))}_.clear(),f.clear()}function Y(D){let S=n.get(D);if(S.__webglInit===void 0)return;let J=D.source,ge=d.get(J);if(ge){let de=ge[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&W(D),Object.keys(ge).length===0&&d.delete(J)}n.remove(D)}function W(D){let S=n.get(D);i.deleteTexture(S.__webglTexture);let J=D.source,ge=d.get(J);delete ge[S.__cacheKey],a.memory.textures--}function X(D){let S=n.get(D);S.__depthDisposeCallback&&S.__depthDisposeCallback();let J=D.depthTexture;if(J&&J.renderTarget===D&&N(J),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(S.__webglFramebuffer[de]))for(let be=0;be<S.__webglFramebuffer[de].length;be++)i.deleteFramebuffer(S.__webglFramebuffer[de][be]);else i.deleteFramebuffer(S.__webglFramebuffer[de]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[de])}else{if(Array.isArray(S.__webglFramebuffer))for(let de=0;de<S.__webglFramebuffer.length;de++)i.deleteFramebuffer(S.__webglFramebuffer[de]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let de=0;de<S.__webglColorRenderbuffer.length;de++)S.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[de]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ge=D.textures;for(let de=0,be=ge.length;de<be;de++){let Ce=n.get(ge[de]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(ge[de])}n.remove(D)}let q=0;function L(){q=0}function Q(){return q}function j(D){q=D}function fe(){let D=q;return D>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,D}function Z(D){let S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.mipmapsAutoUpdate),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function oe(D,S){let J=n.get(D);if(D.isVideoTexture&&Bt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){let ge=D.image;if(ge===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(J,D,S);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+S)}function me(D,S){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Me(J,D,S);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+S)}function ye(D,S){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Me(J,D,S);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+S)}function re(D,S){let J=n.get(D);if(D.version>0&&J.__version!==D.version){Fe(J,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+S)}let ve={[Ki]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},nt={[Qt]:i.NEAREST,[gu]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},He={[vu]:i.NEVER,[_c]:i.ALWAYS,[Mu]:i.LESS,[mc]:i.LEQUAL,[bu]:i.EQUAL,[gc]:i.GEQUAL,[Su]:i.GREATER,[Eu]:i.NOTEQUAL};function Be(D,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===uo||S.magFilter===Or||S.magFilter===mi||S.minFilter===fn||S.minFilter===uo||S.minFilter===Or||S.minFilter===mi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ve[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ve[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ve[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,nt[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,nt[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,He[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Qt||S.minFilter!==Or&&S.minFilter!==mi||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function et(D,S){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",U),k(S));let ge=S.source,de=d.get(ge);de===void 0&&(de={},d.set(ge,de));let be=Z(S);if(be!==D.__cacheKey){de[be]===void 0&&(de[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,J=!0),de[be].usedTimes++;let Ce=de[D.__cacheKey];Ce!==void 0&&(de[D.__cacheKey].usedTimes--,Ce.usedTimes===0&&W(S)),D.__cacheKey=be,D.__webglTexture=de[be].texture}return J}function ue(D,S,J){return Math.floor(Math.floor(D/J)/S)}function Ee(D,S,J,ge){let be=D.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,J,ge,S.data);else{be.sort((H,he)=>H.start-he.start);let Ce=0;for(let H=1;H<be.length;H++){let he=be[Ce],ie=be[H],Te=he.start+he.count,xe=ue(ie.start,S.width,4),Se=ue(he.start,S.width,4);ie.start<=Te+1&&xe===Se&&ue(ie.start+ie.count-1,S.width,4)===xe?he.count=Math.max(he.count,ie.start+ie.count-he.start):(++Ce,be[Ce]=ie)}be.length=Ce+1;let ae=t.getParameter(i.UNPACK_ROW_LENGTH),le=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let H=0,he=be.length;H<he;H++){let ie=be[H],Te=Math.floor(ie.start/4),xe=Math.ceil(ie.count/4),Se=Te%S.width,Xe=Math.floor(Te/S.width),lt=xe,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Xe),t.texSubImage2D(i.TEXTURE_2D,0,Se,Xe,lt,_e,J,ge,S.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ae),t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Me(D,S,J){let ge=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ge=i.TEXTURE_3D);let de=et(D,S),be=S.source;t.bindTexture(ge,D.__webglTexture,i.TEXTURE0+J);let Ce=n.get(be);if(be.version!==Ce.__version||de===!0){if(t.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let _e=gt.getPrimaries(gt.workingColorSpace),Ye=S.colorSpace===_i?null:gt.getPrimaries(S.colorSpace),at=S.colorSpace===_i||_e===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let le=b(S.image,!1,s.maxTextureSize);le=Ze(S,le);let we=r.convert(S.format,S.colorSpace),H=r.convert(S.type),he=A(S.internalFormat,we,H,S.normalized,S.colorSpace,S.isVideoTexture);Be(ge,S);let ie,Te=S.mipmaps,xe=S.isVideoTexture!==!0,Se=Ce.__version===void 0||de===!0,Xe=be.dataReady,lt=w(S,le);if(S.isDepthTexture)he=x(S.format===gi,S.type),Se&&(xe?t.texStorage2D(i.TEXTURE_2D,1,he,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,he,le.width,le.height,0,we,H,null));else if(S.isDataTexture)if(Te.length>0){xe&&Se&&t.texStorage2D(i.TEXTURE_2D,lt,he,Te[0].width,Te[0].height);for(let _e=0,Ye=Te.length;_e<Ye;_e++)ie=Te[_e],xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,ie.width,ie.height,we,H,ie.data):t.texImage2D(i.TEXTURE_2D,_e,he,ie.width,ie.height,0,we,H,ie.data);S.generateMipmaps=!1}else xe?(Se&&t.texStorage2D(i.TEXTURE_2D,lt,he,le.width,le.height),Xe&&Ee(S,le,we,H)):t.texImage2D(i.TEXTURE_2D,0,he,le.width,le.height,0,we,H,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xe&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,he,Te[0].width,Te[0].height,le.depth);for(let _e=0,Ye=Te.length;_e<Ye;_e++)if(ie=Te[_e],S.format!==Xn)if(we!==null)if(xe){if(Xe)if(S.layerUpdates.size>0){let at=Rc(ie.width,ie.height,S.format,S.type);for(let Le of S.layerUpdates){let wt=ie.data.subarray(Le*at/ie.data.BYTES_PER_ELEMENT,(Le+1)*at/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Le,ie.width,ie.height,1,we,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,ie.width,ie.height,le.depth,we,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,he,ie.width,ie.height,le.depth,0,ie.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xe?Xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,ie.width,ie.height,le.depth,we,H,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,he,ie.width,ie.height,le.depth,0,we,H,ie.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{xe&&Se&&t.texStorage2D(i.TEXTURE_2D,lt,he,Te[0].width,Te[0].height);for(let _e=0,Ye=Te.length;_e<Ye;_e++)ie=Te[_e],S.format!==Xn?we!==null?xe?Xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,ie.width,ie.height,we,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,he,ie.width,ie.height,0,ie.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,ie.width,ie.height,we,H,ie.data):t.texImage2D(i.TEXTURE_2D,_e,he,ie.width,ie.height,0,we,H,ie.data)}else if(S.isDataArrayTexture)if(xe){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,he,le.width,le.height,le.depth),Xe)if(S.layerUpdates.size>0){let _e=Rc(le.width,le.height,S.format,S.type);for(let Ye of S.layerUpdates){let at=le.data.subarray(Ye*_e/le.data.BYTES_PER_ELEMENT,(Ye+1)*_e/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ye,le.width,le.height,1,we,H,at)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,we,H,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,le.width,le.height,le.depth,0,we,H,le.data);else if(S.isData3DTexture)xe?(Se&&t.texStorage3D(i.TEXTURE_3D,lt,he,le.width,le.height,le.depth),Xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,we,H,le.data)):t.texImage3D(i.TEXTURE_3D,0,he,le.width,le.height,le.depth,0,we,H,le.data);else if(S.isFramebufferTexture){if(Se)if(xe)t.texStorage2D(i.TEXTURE_2D,lt,he,le.width,le.height);else{let _e=le.width,Ye=le.height;for(let at=0;at<lt;at++)t.texImage2D(i.TEXTURE_2D,at,he,_e,Ye,0,we,H,null),_e>>=1,Ye>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),le.parentNode!==_e){_e.appendChild(le),f.add(S),_e.onpaint=Ye=>{let at=Ye.changedElements;for(let Le of f)at.includes(Le.image)&&(Le.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,le);else{let at=i.RGBA,Le=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,at,Le,wt,le)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Te.length>0){if(xe&&Se){let _e=$e(Te[0]);t.texStorage2D(i.TEXTURE_2D,lt,he,_e.width,_e.height)}for(let _e=0,Ye=Te.length;_e<Ye;_e++)ie=Te[_e],xe?Xe&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,we,H,ie):t.texImage2D(i.TEXTURE_2D,_e,he,we,H,ie);S.generateMipmaps=!1}else if(xe){if(Se){let _e=$e(le);t.texStorage2D(i.TEXTURE_2D,lt,he,_e.width,_e.height)}Xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,H,le)}else t.texImage2D(i.TEXTURE_2D,0,he,we,H,le);E(S)&&S.mipmapsAutoUpdate===!0&&v(ge),Ce.__version=be.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Fe(D,S,J){if(S.image.length!==6)return;let ge=et(D,S),de=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);let be=n.get(de);if(de.version!==be.__version||ge===!0){t.activeTexture(i.TEXTURE0+J);let Ce=gt.getPrimaries(gt.workingColorSpace),ae=S.colorSpace===_i?null:gt.getPrimaries(S.colorSpace),le=S.colorSpace===_i||Ce===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let we=S.isCompressedTexture||S.image[0].isCompressedTexture,H=S.image[0]&&S.image[0].isDataTexture,he=[];for(let Le=0;Le<6;Le++)!we&&!H?he[Le]=b(S.image[Le],!0,s.maxCubemapSize):he[Le]=H?S.image[Le].image:S.image[Le],he[Le]=Ze(S,he[Le]);let ie=he[0],Te=r.convert(S.format,S.colorSpace),xe=r.convert(S.type),Se=A(S.internalFormat,Te,xe,S.normalized,S.colorSpace),Xe=S.isVideoTexture!==!0,lt=be.__version===void 0||ge===!0,_e=de.dataReady,Ye=w(S,ie);Be(i.TEXTURE_CUBE_MAP,S);let at;if(S.isDepthTexture){if(Se=x(S.format===gi,S.type),lt)if(Xe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Se,ie.width,ie.height);else for(let Le=0;Le<6;Le++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,ie.width,ie.height,0,Te,xe,null)}else if(we){Xe&&lt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Se,ie.width,ie.height);for(let Le=0;Le<6;Le++){at=he[Le].mipmaps;for(let wt=0;wt<at.length;wt++){let Jt=at[wt];S.format!==Xn?Te!==null?Xe?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,0,0,Jt.width,Jt.height,Te,Jt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,Se,Jt.width,Jt.height,0,Jt.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,0,0,Jt.width,Jt.height,Te,xe,Jt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt,Se,Jt.width,Jt.height,0,Te,xe,Jt.data)}}}else{if(at=S.mipmaps,Xe&&lt){at.length>0&&Ye++;let Le=$e(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Se,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(H){Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,he[Le].width,he[Le].height,Te,xe,he[Le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,he[Le].width,he[Le].height,0,Te,xe,he[Le].data);for(let wt=0;wt<at.length;wt++){let Mi=at[wt].image[Le].image;Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,0,0,Mi.width,Mi.height,Te,xe,Mi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,Se,Mi.width,Mi.height,0,Te,xe,Mi.data)}}else{Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Te,xe,he[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Se,Te,xe,he[Le]);for(let wt=0;wt<at.length;wt++){let Jt=at[wt];Xe?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,0,0,Te,xe,Jt.image[Le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,wt+1,Se,Te,xe,Jt.image[Le])}}}E(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),be.__version=de.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Ie(D,S,J,ge,de,be){let Ce=r.convert(J.format,J.colorSpace),ae=r.convert(J.type),le=A(J.internalFormat,Ce,ae,J.normalized,J.colorSpace),we=n.get(S),H=n.get(J);if(H.__renderTarget=S,!we.__hasExternalTextures){let he=Math.max(1,S.width>>be),ie=Math.max(1,S.height>>be);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,be,le,he,ie,S.depth,0,Ce,ae,null):t.texImage2D(de,be,le,he,ie,0,Ce,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,de,H.__webglTexture,0,Tt(S)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,de,H.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(D,S,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){let ge=S.depthTexture,de=ge&&ge.isDepthTexture?ge.type:null,be=x(S.stencilBuffer,de),Ce=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(S),be,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(S),be,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,be,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,D)}else{let ge=S.textures;for(let de=0;de<ge.length;de++){let be=ge[de],Ce=r.convert(be.format,be.colorSpace),ae=r.convert(be.type),le=A(be.internalFormat,Ce,ae,be.normalized,be.colorSpace);Re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(S),le,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(S),le,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,le,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(D,S,J){let ge=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let de=n.get(S.depthTexture);de.__renderTarget=S;let be=ge?S.depthTexture.image[0]:S.depthTexture.image;(!de.__webglTexture||be.width!==S.width||be.height!==S.height)&&(be.width=S.width,be.height=S.height,S.depthTexture.needsUpdate=!0),ge?re(S.depthTexture,0):oe(S.depthTexture,0);let Ce=de.__webglTexture,ae=Tt(S),le=ge?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,we=S.depthTexture.format===gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===di)Re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,le,Ce,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,we,le,Ce,0);else if(S.depthTexture.format===gi)Re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,le,Ce,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,we,le,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(D){let S=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){let ge=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ge){let de=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ge.removeEventListener("dispose",de)};ge.addEventListener("dispose",de),S.__depthDisposeCallback=de}S.__boundDepthTexture=ge}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(J)for(let ge=0;ge<6;ge++)We(S.__webglFramebuffer[ge],D,ge);else D.texture.mipmaps.length>0?We(S.__webglFramebuffer[0],D,0):We(S.__webglFramebuffer,D,0);else if(J){S.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ge]),S.__webglDepthbuffer[ge]===void 0)S.__webglDepthbuffer[ge]=i.createRenderbuffer(),st(S.__webglDepthbuffer[ge],D,!1);else{let de=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=S.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,be)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),st(S.__webglDepthbuffer,D,!1);else{let de=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,be)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(D,S,J){let ge=n.get(D);S!==void 0&&Ie(ge.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&dt(D)}function vt(D){let S=D.texture,J=n.get(D),ge=n.get(S);D.addEventListener("dispose",F),k(D);let de=D.textures,be=D.isWebGLCubeRenderTarget===!0,Ce=de.length>1;if(Ce||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=S.version,a.memory.textures++),be){J.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps.length>0){J.__webglFramebuffer[ae]=[];for(let le=0;le<S.mipmaps.length;le++)J.__webglFramebuffer[ae][le]=i.createFramebuffer()}else J.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(S.mipmaps.length>0){J.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)J.__webglFramebuffer[ae]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ae=0,le=de.length;ae<le;ae++){let we=n.get(de[ae]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Re(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ae=0;ae<de.length;ae++){let le=de[ae];J.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[ae]);let we=r.convert(le.format,le.colorSpace),H=r.convert(le.type),he=A(le.internalFormat,we,H,le.normalized,le.colorSpace,D.isXRRenderTarget===!0),ie=Tt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,he,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,J.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),st(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),Be(i.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)Ie(J.__webglFramebuffer[ae][le],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,le);else Ie(J.__webglFramebuffer[ae],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);E(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let ae=0,le=de.length;ae<le;ae++){let we=de[ae],H=n.get(we),he=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,H.__webglTexture),Be(he,we),Ie(J.__webglFramebuffer,D,we,i.COLOR_ATTACHMENT0+ae,he,0),E(we)&&v(he)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ae=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,ge.__webglTexture),Be(ae,S),S.mipmaps.length>0)for(let le=0;le<S.mipmaps.length;le++)Ie(J.__webglFramebuffer[le],D,S,i.COLOR_ATTACHMENT0,ae,le);else Ie(J.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,ae,0);E(S)?v(ae):S.mipmaps.length>0&&i.texParameteri(ae,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&dt(D)}function V(D){let S=D.textures;for(let J=0,ge=S.length;J<ge;J++){let de=S[J];if(E(de)&&de.mipmapsAutoUpdate===!0){let be=R(D),Ce=n.get(de).__webglTexture;t.bindTexture(be,Ce),v(be),t.unbindTexture()}}}let Ht=[];function ut(D){if(D.samples>0){if(Re(D)===!1){let S=D.textures,J=D.width,ge=D.height,de=i.COLOR_BUFFER_BIT,be=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(D),ae=S.length>1;if(ae)for(let we=0;we<S.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let we=0;we<S.length;we++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);let H=n.get(S[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,H,0)}i.blitFramebuffer(0,0,J,ge,0,0,J,ge,de,i.NEAREST),l===!0&&(Ht.length=0,Ht.push(i.COLOR_ATTACHMENT0+we),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Ht.push(be),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<S.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[we]);let H=n.get(S[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,H,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Tt(D){return Math.min(s.maxSamples,D.samples)}function Re(D){let S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Bt(D){let S=a.render.frame;u.get(D)!==S&&(u.set(D,S),D.update())}function Ze(D,S){let J=D.colorSpace,ge=D.format,de=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==hr&&J!==_i&&(gt.getTransfer(J)===St?(ge!==Xn||de!==_n)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",J)),S}function $e(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=fe,this.resetTextureUnits=L,this.getTextureUnits=Q,this.setTextureUnits=j,this.setTexture2D=oe,this.setTexture2DArray=me,this.setTexture3D=ye,this.setTextureCube=re,this.rebindTextures=ft,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Re,this.dispose=B}function _x(i,e){function t(n,s=_i){let r,a=gt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cc)return i.BYTE;if(n===hc)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===Xn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===gi)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===yo)return i.RGBA_INTEGER;if(n===Br||n===kr||n===Hr||n===zr)if(a===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===bo||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Gr||n===Co)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===wo)return a===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Io||n===Do||n===Lo||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===Ho||n===zo||n===Go||n===Vo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zo)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return a===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===Zo||n===Vr||n===Ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Mr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qn({vertexShader:xx,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bc=class extends Hn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,p=null,d=null,_=null,M=typeof XRWebGLBinding<"u",g=new Oc,m={},b=t.getContextAttributes(),E=null,v=null,R=[],A=[],x=new pe,w=null,k=null,I=new Vt;I.viewport=new It;let U=new Vt;U.viewport=new It;let F=[I,U],N=new ao,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=R[Z];return oe===void 0&&(oe=new Is,R[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=R[Z];return oe===void 0&&(oe=new Is,R[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=R[Z];return oe===void 0&&(oe=new Is,R[Z]=oe),oe.getHandSpace()};function Y(Z){let oe=A.indexOf(Z.inputSource);if(oe===-1)return;let me=R[oe];me!==void 0&&(me.update(Z.inputSource,Z.frame,c||a),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function W(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let Z=0;Z<R.length;Z++){let oe=A[Z];oe!==null&&(A[Z]=null,R[Z].disconnect(oe))}C=null,B=null,g.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(E),d=null,p=null,f=null,s=null,v=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),k!==null){let Z=k.camera;Z.fov=k.fov,Z.zoom=k.zoom,Z.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ye=null,re=null;b.depth&&(re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?gi:di,ye=b.stencil?rs:Vn);let ve={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Sn(p.textureWidth,p.textureHeight,{format:Xn,type:_n,depthTexture:new fi(p.textureWidth,p.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Sn(d.framebufferWidth,d.framebufferHeight,{format:Xn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(Z){for(let oe=0;oe<Z.removed.length;oe++){let me=Z.removed[oe],ye=A.indexOf(me);ye>=0&&(A[ye]=null,R[ye].disconnect(me))}for(let oe=0;oe<Z.added.length;oe++){let me=Z.added[oe],ye=A.indexOf(me);if(ye===-1){for(let ve=0;ve<R.length;ve++)if(ve>=A.length){A.push(me),ye=ve;break}else if(A[ve]===null){A[ve]=me,ye=ve;break}if(ye===-1)break}let re=R[ye];re&&re.connect(me)}}function q(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let oe=Z.near,me=Z.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(me=g.depthFar)),N.near=U.near=I.near=oe,N.far=U.far=I.far=me,(C!==N.near||B!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),C=N.near,B=N.far),N.layers.mask=Z.layers.mask|6,I.layers.mask=N.layers.mask&-5,U.layers.mask=N.layers.mask&-3;let ye=Z.parent,re=N.cameras;q(N,ye);for(let ve=0;ve<re.length;ve++)q(re[ve],ye);N.projectionMatrix.copy(I.projectionMatrix),N.projectionMatrixInverse.copy(I.projectionMatrixInverse),k===null&&Z.isPerspectiveCamera&&(k={camera:Z,fov:Z.fov,zoom:Z.zoom}),L(Z,N,ye)};function L(Z,oe,me){me===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Rs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Z){return m[Z]};let Q=null;function j(Z,oe){if(u=oe.getViewerPose(c||a),_=oe,u!==null){let me=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ye=!1;me.length!==N.cameras.length&&(N.cameras.length=0,ye=!0);for(let He=0;He<me.length;He++){let Be=me[He],et=null;if(d!==null)et=d.getViewport(Be);else{let Ee=f.getViewSubImage(p,Be);et=Ee.viewport,He===0&&(e.setRenderTargetTextures(v,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(v))}let ue=F[He];ue===void 0&&(ue=new Vt,ue.layers.enable(He),ue.viewport=new It,F[He]=ue),ue.matrix.fromArray(Be.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Be.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(et.x,et.y,et.width,et.height),He===0&&(N.matrix.copy(ue.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ye===!0&&N.cameras.push(ue)}let re=s.enabledFeatures;if(re&&re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let He=f.getDepthInformation(me[0]);He&&He.isValid&&He.texture&&g.init(He,s.renderState)}if(re&&re.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let He=0;He<me.length;He++){let Be=me[He].camera;if(Be){let et=m[Be];et||(et=new Mr,m[Be]=et);let ue=f.getCameraImage(Be);et.sourceTexture=ue}}}}for(let me=0;me<R.length;me++){let ye=A[me],re=R[me];ye!==null&&re!==void 0&&re.update(ye,oe,c||a)}Q&&Q(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}let fe=new od;fe.setAnimationLoop(j),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}},vx=new Et,_d=new Qe;_d.set(-1,0,0,0,1,0,0,0,1);function Mx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,wc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,E,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),M(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),E=b.envMap,v=b.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(_d),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,b){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===qt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function M(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bx(i,e,t,n){let s={},r={};function a(b,E){let v=E.program;n.uniformBlockBinding(b,v,s[b.id])}function o(b,E){let v=s[b.id];v===void 0&&(_(b),v=l(b),s[b.id]=v,b.addEventListener("dispose",g));let R=E.program;n.updateUBOMapping(b,R);let A=e.render.frame;r[b.id]!==A&&(c(b),r[b.id]=A)}function l(b){let E=i.createBuffer(),v=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,v,R),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(b){let E=s[b.id],v=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,x=v.length;A<x;A++){let w=v[A];if(Array.isArray(w))for(let k=0,I=w.length;k<I;k++)u(w[k],A,k,R);else u(w,A,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,E,v,R){if(p(b,E,v,R)===!0){let A=b.__offset,x=b.value;if(Array.isArray(x)){let w=0;for(let k=0;k<x.length;k++){let I=x[k],U=M(I,!0);f(I,b.__data,w),w+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,b.__data)}}function f(b,E,v){typeof b=="number"||typeof b=="boolean"?E[v]=b:b.isMatrix3?(E[v]=b.elements[0],E[v+1]=b.elements[1],E[v+2]=b.elements[2],E[v+3]=0,E[v+4]=b.elements[3],E[v+5]=b.elements[4],E[v+6]=b.elements[5],E[v+7]=0,E[v+8]=b.elements[6],E[v+9]=b.elements[7],E[v+10]=b.elements[8],E[v+11]=0):ArrayBuffer.isView(b)?E.set(b.subarray(0,E.length-v),v):b.toArray(E,v)}function p(b,E,v,R){let A=b.value,x=E+"_"+v;if(Array.isArray(A)){R[x]===void 0&&(R[x]=[]);let w=R[x],k=!1;for(let I=0;I<A.length;I++)d(A[I],w,I)===!0&&(k=!0);return k}return d(A,R,x)}function d(b,E,v){if(E[v]===void 0)return typeof b=="number"||typeof b=="boolean"?E[v]=b:ArrayBuffer.isView(b)?E[v]=b.slice():E[v]=b.clone(),!0;{let R=E[v];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return E[v]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function _(b){let E=b.uniforms,v=0,R=16;for(let x=0,w=E.length;x<w;x++){let k=Array.isArray(E[x])?E[x]:[E[x]];for(let I=0,U=k.length;I<U;I++){let F=k[I],N=Array.isArray(F.value)?F.value:[F.value],C=Array.isArray(E[x])||Array.isArray(F.value),B=v;for(let W=0,X=N.length;W<X;W++){let q=N[W],L=M(q,C),Q=v%R,j=Q%L.boundary,fe=Q+j;v+=j,fe!==0&&R-fe<L.storage&&(v+=R-fe),W===0&&(B=v),v+=L.storage}let Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((v-B)/Float32Array.BYTES_PER_ELEMENT),F.__offset=B}}let A=v%R;return A>0&&(v+=R-A),b.__size=v,b.__cache={},this}function M(b,E){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=16,v.storage=48):b.isMatrix4?(v.boundary=16,v.storage=64):b.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",b),E===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(b){let E=b.target;E.removeEventListener("dispose",g),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}var Sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ii=null;function Ex(){return ii===null&&(ii=new gr(Sx,16,16,Oi,Wn),ii.name="DFG_LUT",ii.minFilter=fn,ii.magFilter=fn,ii.wrapS=Rn,ii.wrapT=Rn,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}var xi=class{constructor(e={}){let{canvas:t=Tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:d=_n}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let M=d,g=new Set([yo,xo,_o]),m=new Set([_n,Vn,Gs,rs,po,mo]),b=new Uint32Array(4),E=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},R=null,A=null,x=[],w=[],k=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,F=null,N=null,C=null,B=null;this._outputColorSpace=Wt;let Y=0,W=0,X=null,q=-1,L=null,Q=new It,j=new It,fe=null,Z=new rt(0),oe=0,me=t.width,ye=t.height,re=1,ve=null,nt=null,He=new It(0,0,me,ye),Be=new It(0,0,me,ye),et=!1,ue=new Pi,Ee=new za,Me=!1,Fe=!1,Ie=new Et,st=new z,We=new It,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function vt(){return X===null?re:1}let V=n;function Ht(T,G){return t.getContext(T,G)}let ut,Tt,Re,Bt,Ze,$e,D,S,J,ge,de,be,Ce,ae,le,we,H,he,ie,Te,xe,Se,Xe;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Le,!1),V===null){let G="webgl2";if(V=Ht(G,T),V===null)throw Ht(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}lt()}catch(T){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Je("WebGLRenderer: "+T.message),T}function lt(){ut=new Ug(V),ut.init(),xe=new _x(V,ut),Tt=new Eg(V,ut,e,xe),Re=new mx(V,ut),Tt.reversedDepthBuffer&&p&&Re.buffers.depth.setReversed(!0),N=V.createFramebuffer(),C=V.createFramebuffer(),B=V.createFramebuffer(),Bt=new Bg(V),Ze=new tx,$e=new gx(V,ut,Re,Ze,Tt,xe,Bt),D=new Ng(I),S=new Hp(V),Se=new bg(V,S),J=new Fg(V,S,Bt,Se),ge=new Hg(V,J,S,Se,Bt),he=new kg(V,Tt,$e),le=new wg(Ze),de=new ex(I,D,ut,Tt,Se,le),be=new Mx(I,Ze),Ce=new ix,ae=new cx(ut),H=new Mg(I,D,Re,ge,_,l),we=new px(I,ge,Tt),Xe=new bx(V,Bt,Tt,Re),ie=new Sg(V,ut,Bt),Te=new Og(V,ut,Bt),Bt.programs=de.programs,I.capabilities=Tt,I.extensions=ut,I.properties=Ze,I.renderLists=Ce,I.shadowMap=we,I.state=Re,I.info=Bt}M!==_n&&(k=new Gg(M,t.width,t.height,o,s,r));let _e=new Bc(I,V);this.xr=_e,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let T=ut.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ut.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(me,ye,!1))},this.getSize=function(T){return T.set(me,ye)},this.setSize=function(T,G,te=!0){if(_e.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}me=T,ye=G,t.width=Math.floor(T*re),t.height=Math.floor(G*re),te===!0&&(t.style.width=T+"px",t.style.height=G+"px"),k!==null&&k.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(me*re,ye*re).floor()},this.setDrawingBufferSize=function(T,G,te){me=T,ye=G,re=te,t.width=Math.floor(T*te),t.height=Math.floor(G*te),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(M===_n){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Q)},this.getViewport=function(T){return T.copy(He)},this.setViewport=function(T,G,te,K){T.isVector4?He.set(T.x,T.y,T.z,T.w):He.set(T,G,te,K),Re.viewport(Q.copy(He).multiplyScalar(vt()).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,G,te,K){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,G,te,K),Re.scissor(j.copy(Be).multiplyScalar(vt()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){Re.setScissorTest(et=T)},this.setOpaqueSort=function(T){ve=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,te=!0){let K=0;if(T){let $=!1;if(X!==null){let Pe=X.texture.format;$=g.has(Pe)}if($){let Pe=X.texture.type,ke=m.has(Pe),Ae=H.getClearColor(),Ue=H.getClearAlpha(),Ve=Ae.r,it=Ae.g,pt=Ae.b;ke?(b[0]=Ve,b[1]=it,b[2]=pt,b[3]=Ue,V.clearBufferuiv(V.COLOR,0,b)):(E[0]=Ve,E[1]=it,E[2]=pt,E[3]=Ue,V.clearBufferiv(V.COLOR,0,E))}else K|=V.COLOR_BUFFER_BIT}G&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),H.dispose(),Ce.dispose(),ae.dispose(),$e.dispose(),Ze.dispose(),D.dispose(),ge.dispose(),J.dispose(),Se.dispose(),Xe.dispose(),de.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",nh),_e.removeEventListener("sessionend",ih),Gi.stop()};function Ye(T){T.preventDefault(),yc("WebGLRenderer: Context Lost."),U=!0}function at(){yc("WebGLRenderer: Context Restored."),U=!1;let T=Bt.autoReset,G=we.enabled,te=we.autoUpdate,K=we.needsUpdate,$=we.type;lt(),Bt.autoReset=T,we.enabled=G,we.autoUpdate=te,we.needsUpdate=K,we.type=$}function Le(T){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function wt(T){let G=T.target;G.removeEventListener("dispose",wt),Jt(G)}function Jt(T){Mi(T),Ze.remove(T)}function Mi(T){let G=Ze.get(T).programs;G!==void 0&&(G.forEach(function(te){de.releaseProgram(te)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,te,K,$,Pe){G===null&&(G=dt);let ke=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ae=of(T,G,te,K,$);Re.setMaterial(K,ke);let Ue=te.index,Ve=1;if(K.wireframe===!0){if(Ue=J.getWireframeAttribute(te),Ue===void 0)return;Ve=2}let it=te.drawRange,pt=te.attributes.position,ze=it.start*Ve,mt=(it.start+it.count)*Ve;Pe!==null&&(ze=Math.max(ze,Pe.start*Ve),mt=Math.min(mt,(Pe.start+Pe.count)*Ve)),Ue!==null?(ze=Math.max(ze,0),mt=Math.min(mt,Ue.count)):pt!=null&&(ze=Math.max(ze,0),mt=Math.min(mt,pt.count));let zt=mt-ze;if(zt<0||zt===1/0)return;Se.setup($,K,Ae,te,Ue);let Rt,At=ie;if(Ue!==null&&(Rt=S.get(Ue),At=Te,At.setIndex(Rt)),$.isMesh)K.wireframe===!0?(Re.setLineWidth(K.wireframeLinewidth*vt()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if($.isLine){let an=K.linewidth;an===void 0&&(an=1),Re.setLineWidth(an*vt()),$.isLineSegments?At.setMode(V.LINES):$.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else $.isPoints?At.setMode(V.POINTS):$.isSprite&&At.setMode(V.TRIANGLES);if($.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))At.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let an=$._multiDrawStarts,Ge=$._multiDrawCounts,dn=$._multiDrawCount,Mt=Ue?S.get(Ue).bytesPerElement:1,Vi=Ze.get(K).currentProgram.getUniforms();for(let on=0;on<dn;on++)Vi.setValue(V,"_gl_DrawID",on),At.render(an[on]/Mt,Ge[on])}else if($.isInstancedMesh)At.renderInstances(ze,zt,$.count);else if(te.isInstancedBufferGeometry){let an=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ge=Math.min(te.instanceCount,an);At.renderInstances(ze,zt,Ge)}else At.render(ze,zt)};function th(T,G,te,K){F!==null&&T.isNodeMaterial&&F.setObject(K,T),Me===!0&&le.setState(T,te,!1),T.transparent===!0&&T.side===mn&&T.forceSinglePass===!1?(T.side=qt,T.needsUpdate=!0,Js(T,G,K),T.side=ei,T.needsUpdate=!0,Js(T,G,K),T.side=mn):Js(T,G,K)}this.compile=function(T,G,te=null){te===null&&(te=T),F!==null&&F.renderStart(T,G,te),A=ae.get(te),A.init(G),w.push(A),te.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),T!==te&&T.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(A.pushLight($),$.castShadow&&A.pushShadow($))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),Fe=this.localClippingEnabled,Me=le.init(this.clippingPlanes,Fe),Me===!0&&le.setGlobalState(this.clippingPlanes,G),F!==null&&we.render(A.state.shadowsArray,te,G);let K=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Pe=$.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){let Ae=Pe[ke];th(Ae,te,G,$),K.add(Ae)}else th(Pe,te,G,$),K.add(Pe)}),A=w.pop(),F!==null&&F.renderEnd(),K},this.compileAsync=function(T,G,te=null){let K=this.compile(T,G,te);return new Promise($=>{function Pe(){if(K.forEach(function(ke){let Ue=Ze.get(ke).currentProgram;(Ue===void 0||Ue.isReady())&&K.delete(ke)}),K.size===0){$(T);return}setTimeout(Pe,10)}ut.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ul=null;function rf(T){ul&&ul(T)}function nh(){Gi.stop()}function ih(){Gi.start()}let Gi=new od;Gi.setAnimationLoop(rf),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(T){ul=T,_e.setAnimationLoop(T),T===null?Gi.stop():Gi.start()},_e.addEventListener("sessionstart",nh),_e.addEventListener("sessionend",ih),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;F!==null&&F.renderStart(T,G);let te=_e.enabled===!0&&_e.isPresenting===!0,K=k!==null&&(X===null||te)&&k.begin(I,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(G),G=_e.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,G,X),A=ae.get(T,w.length),A.init(G),A.state.textureUnits=$e.getTextureUnits(),w.push(A),Ie.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?Ee.setFromArrayCamera(G):ue.setFromProjectionMatrix(Ie,Cn,G.reversedDepth),Fe=this.localClippingEnabled,Me=le.init(this.clippingPlanes,Fe),R=Ce.get(T,x.length),R.init(),x.push(R),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let ke=I.xr.getDepthSensingMesh();ke!==null&&dl(ke,G,-1/0,I.sortObjects)}dl(T,G,0,I.sortObjects),R.finish(),F!==null&&F.updateLights(A.state.lightsArray),I.sortObjects===!0&&R.sort(ve,nt),ft=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,ft&&H.addToRenderList(R,T),this.info.autoReset===!0&&this.info.reset(),Me===!0&&le.beginShadows();let $=A.state.shadowsArray;if(we.render($,T,G),Me===!0&&le.endShadows(),(K&&k.hasRenderPass())===!1){let ke=R.opaque,Ae=R.transmissive;if(A.setupLights(),G.isArrayCamera){let Ue=G.cameras;if(Ae.length>0)for(let Ve=0,it=Ue.length;Ve<it;Ve++){let pt=Ue[Ve];rh(ke,Ae,T,pt)}ft&&H.render(T);for(let Ve=0,it=Ue.length;Ve<it;Ve++){let pt=Ue[Ve];sh(R,T,pt,pt.viewport)}}else Ae.length>0&&rh(ke,Ae,T,G),ft&&H.render(T),sh(R,T,G)}X!==null&&W===0&&($e.updateMultisampleRenderTarget(X),$e.updateRenderTargetMipmap(X)),K&&k.end(I),T.isScene===!0&&T.onAfterRender(I,T,G),Se.resetDefaultState(),q=-1,L=null,w.pop(),w.length>0?(A=w[w.length-1],$e.setTextureUnits(A.state.textureUnits),Me===!0&&le.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?R=x[x.length-1]:R=null,F!==null&&F.renderEnd()};function dl(T,G,te,K){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){let ke=G.isArrayCamera?Ee:ue;if(!T.frustumCulled||T.intersectsFrustum(ke)){K&&We.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ie);let Ae=ge.update(T),Ue=T.material;Ue.visible&&R.push(T,Ae,Ue,te,We.z,null,G)}}else if(T.isMesh||T.isLine||T.isPoints){let ke=G.isArrayCamera?Ee:ue;if(!T.frustumCulled||T.intersectsFrustum(ke)){let Ae=ge.update(T),Ue=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),We.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),We.copy(Ae.boundingSphere.center)),We.applyMatrix4(T.matrixWorld).applyMatrix4(Ie)),Array.isArray(Ue)){let Ve=Ae.groups;for(let it=0,pt=Ve.length;it<pt;it++){let ze=Ve[it],mt=Ue[ze.materialIndex];mt&&mt.visible&&R.push(T,Ae,mt,te,We.z,ze,G)}}else Ue.visible&&R.push(T,Ae,Ue,te,We.z,null,G)}}}let Pe=T.children;for(let ke=0,Ae=Pe.length;ke<Ae;ke++)dl(Pe[ke],G,te,K)}function sh(T,G,te,K){let{opaque:$,transmissive:Pe,transparent:ke}=T;A.setupLightsView(te),Me===!0&&le.setGlobalState(I.clippingPlanes,te),K&&Re.viewport(Q.copy(K)),$.length>0&&ea($,G,te),Pe.length>0&&ea(Pe,G,te),ke.length>0&&ea(ke,G,te),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function rh(T,G,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){let ze=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new Sn(1,1,{generateMipmaps:!0,type:ze?Wn:_n,minFilter:mi,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Pe=A.state.transmissionRenderTarget[K.id],ke=K.viewport||Q;Pe.setSize(ke.z*I.transmissionResolutionScale,ke.w*I.transmissionResolutionScale);let Ae=I.getRenderTarget(),Ue=I.getActiveCubeFace(),Ve=I.getActiveMipmapLevel();I.setRenderTarget(Pe),I.getClearColor(Z),oe=I.getClearAlpha(),oe<1&&I.setClearColor(16777215,.5),I.clear(),ft&&H.render(te);let it=I.toneMapping;I.toneMapping=ti;let pt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),Me===!0&&le.setGlobalState(I.clippingPlanes,K),ea(T,te,K),$e.updateMultisampleRenderTarget(Pe),$e.updateRenderTargetMipmap(Pe),ut.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let mt=0,zt=G.length;mt<zt;mt++){let Rt=G[mt],{object:At,geometry:an,material:Ge,group:dn}=Rt;if(Ge.side===mn&&At.layers.test(K.layers)){let Mt=Ge.side;Ge.side=qt,Ge.needsUpdate=!0,ah(At,te,K,an,Ge,dn),Ge.side=Mt,Ge.needsUpdate=!0,ze=!0}}ze===!0&&($e.updateMultisampleRenderTarget(Pe),$e.updateRenderTargetMipmap(Pe))}I.setRenderTarget(Ae,Ue,Ve),I.setClearColor(Z,oe),pt!==void 0&&(K.viewport=pt),I.toneMapping=it}function ea(T,G,te){let K=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Pe=T.length;$<Pe;$++){let ke=T[$],{object:Ae,geometry:Ue,group:Ve}=ke,it=ke.material;it.allowOverride===!0&&K!==null&&(it=K),Ae.layers.test(te.layers)&&ah(Ae,G,te,Ue,it,Ve)}}function ah(T,G,te,K,$,Pe){F!==null&&$.isNodeMaterial&&F.setObject(T,$),T.onBeforeRender(I,G,te,K,$,Pe),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(I,G,te,K,T,Pe),$.transparent===!0&&$.side===mn&&$.forceSinglePass===!1?($.side=qt,$.needsUpdate=!0,I.renderBufferDirect(te,G,K,$,T,Pe),$.side=ei,$.needsUpdate=!0,I.renderBufferDirect(te,G,K,$,T,Pe),$.side=mn):I.renderBufferDirect(te,G,K,$,T,Pe),T.onAfterRender(I,G,te,K,$,Pe)}function oh(T){let G=0;for(let te of T)te.texture!==null&&G++;return G}function Js(T,G,te){G.isScene!==!0&&(G=dt);let K=Ze.get(T),$=A.state.lights,Pe=A.state.shadowsArray,ke=$.state.version,Ae=de.getParameters(T,$.state,Pe,G,te,A.state.lightProbeGridArray),Ue=de.getProgramCacheKey(Ae),Ve=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;let it=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=D.get(T.envMap||K.environment,it),K.envMapRotation=K.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ve===void 0&&(T.addEventListener("dispose",wt),Ve=new Map,K.programs=Ve,K.programVariants=new Map);let pt=Ve.get(Ue);if(pt!==void 0){if(K.currentProgram===pt&&K.lightsStateVersion===ke)return ch(T,Ae),pt}else Ae.uniforms=de.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,te,Ae),T.onBeforeCompile(Ae,I),pt=de.acquireProgram(Ae,Ue),Ve.set(Ue,pt),K.uniforms=Ae.uniforms;let ze=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=le.uniform),ch(T,Ae),K.needsLights=cf(T),K.lightsStateVersion=ke,K.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.sunLights.value=$.state.sun,ze.sunLightShadows.value=$.state.sunShadow,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.sunShadowMatrix.value=$.state.sunShadowMatrix,ze.sunShadowCascade.value=$.state.sunShadowCascade,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix),K.numLightProbeGrids=oh(A.state.lightProbeGridArray),K.currentProgram=pt,K.uniformsList=null,pt}function af(T,G,te,K,$){let Pe=Ze.get(T),ke=Pe.currentProgram.id+","+K+","+$,Ae=Pe.programVariants.get(ke);return Ae===void 0?(Ae=Js(T,G,te),Pe.programVariants.set(ke,Ae)):(Pe.currentProgram=Ae,Pe.uniformsList=null,Pe.outputColorSpace=K,Pe.toneMapping=$),Ae}function lh(T){if(T.uniformsList===null){let G=T.currentProgram.getUniforms();T.uniformsList=Vs.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function ch(T,G){let te=Ze.get(T);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function of(T,G,te,K,$){G.isScene!==!0&&(G=dt),$e.resetTextureUnits();let Pe=G.fog,ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,Ae=X===null?I.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:gt.workingColorSpace,Ue=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Ve=D.get(K.envMap||ke,Ue),it=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pt=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,zt=!!te.morphAttributes.color,Rt=ti;K.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Rt=I.toneMapping);let At=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,an=At!==void 0?At.length:0,Ge=Ze.get(K),dn=A.state.lights;if(Me===!0&&(Fe===!0||T!==L)){let Ut=T===L&&K.id===q;le.setState(K,T,Ut)}let Mt=!1,Vi=!1;K.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==dn.state.version||$.isBatchedMesh&&Ge.batching===!1||!$.isBatchedMesh&&Ge.batching===!0||$.isBatchedMesh&&Ge.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ge.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||$.isInstancedMesh&&Ge.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ge.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ge.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ge.instancingMorph===!1&&$.morphTexture!==null||Ge.envMap!==Ve||K.fog===!0&&Ge.fog!==Pe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==le.numPlanes||Ge.numIntersection!==le.numIntersection)||Ge.vertexAlphas!==it||Ge.vertexTangents!==pt||Ge.morphTargets!==ze||Ge.morphNormals!==mt||Ge.morphColors!==zt||Ge.morphTargetsCount!==an||Ge.numLightProbeGrids!==oh(A.state.lightProbeGridArray)?Mt=!0:(Ge.outputColorSpace!==Ae||Ge.toneMapping!==Rt)&&(Vi=!0):(Mt=!0,Ge.__version=K.version);let on=Ge.currentProgram;(Mt===!0||Vi===!0)&&(on=Vi===!0?af(K,G,$,Ae,Rt):Js(K,G,$),F&&K.isNodeMaterial&&F.onUpdateProgram(K,on,Ge));let ta=!1,bi=!1,Wi=!1,yt=on.getUniforms(),sn=Ge.uniforms;if(Re.useProgram(on.program)&&(ta=!0,bi=!0,Wi=!0),K.id!==q&&(q=K.id,bi=!0),ta||L!==T){Re.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(V,"projectionMatrix",T.projectionMatrix),yt.setValue(V,"viewMatrix",T.matrixWorldInverse);let $t=yt.map.cameraPosition;$t!==void 0&&$t.setValue(V,st.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&yt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&yt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),L!==T&&(L=T,bi=!0,Wi=!0)}if(Ge.needsLights&&(dn.state.sunShadowMap.length>0&&yt.setValue(V,"sunShadowMap",dn.state.sunShadowMap,$e),dn.state.directionalShadowMap.length>0&&yt.setValue(V,"directionalShadowMap",dn.state.directionalShadowMap,$e),dn.state.spotShadowMap.length>0&&yt.setValue(V,"spotShadowMap",dn.state.spotShadowMap,$e),dn.state.pointShadowMap.length>0&&yt.setValue(V,"pointShadowMap",dn.state.pointShadowMap,$e)),$.isSkinnedMesh){yt.setOptional(V,$,"bindMatrix"),yt.setOptional(V,$,"bindMatrixInverse");let Ut=$.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),yt.setValue(V,"boneTexture",Ut.boneTexture,$e))}$.isBatchedMesh&&(yt.setOptional(V,$,"batchingTexture"),yt.setValue(V,"batchingTexture",$._matricesTexture,$e),yt.setOptional(V,$,"batchingIdTexture"),yt.setValue(V,"batchingIdTexture",$._indirectTexture,$e),yt.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&yt.setValue(V,"batchingColorTexture",$._colorsTexture,$e));let Fn=te.morphAttributes;if((Fn.position!==void 0||Fn.normal!==void 0||Fn.color!==void 0)&&he.update($,te,on),(bi||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,yt.setValue(V,"receiveShadow",$.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(sn.envMapIntensity.value=G.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Ex()),bi){if(yt.setValue(V,"toneMappingExposure",I.toneMappingExposure),Ge.needsLights&&lf(sn,Wi),Pe&&K.fog===!0&&be.refreshFogUniforms(sn,Pe),be.refreshMaterialUniforms(sn,K,re,ye,A.state.transmissionRenderTarget[T.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let Ut=v,$t=0;for(let ri of A.state.lightProbeGridArray)ri.texture!==null&&(Ut.textures[$t]=ri.texture,Ut.min[$t]=ri.boundingBox.min,Ut.max[$t]=ri.boundingBox.max,Ut.resolution[$t]=ri.resolution,$t++);for(let ri in Ut)Ut[ri].length=$t;sn.probesSH.value=Ut.textures,sn.probesMin.value=Ut.min,sn.probesMax.value=Ut.max,sn.probesResolution.value=Ut.resolution}Vs.upload(V,lh(Ge),sn,$e)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Vs.upload(V,lh(Ge),sn,$e),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&yt.setValue(V,"center",$.center),yt.setValue(V,"modelViewMatrix",$.modelViewMatrix),yt.setValue(V,"normalMatrix",$.normalMatrix),yt.setValue(V,"modelMatrix",$.matrixWorld),K.uniformsGroups!==void 0){let Ut=K.uniformsGroups;for(let $t=0,ri=Ut.length;$t<ri;$t++){let uh=Ut[$t];Xe.update(uh,on),Xe.bind(uh,on)}}return on}function lf(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.sunLights.needsUpdate=G,T.sunLightShadows.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function cf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,G,te){let K=Ze.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ze.get(T.texture).__webglTexture=G,Ze.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){let te=Ze.get(T);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,te=0){X=T,Y=G,W=te;let K=null,$=!1,Pe=!1;if(T){let Ae=Ze.get(T);if(Ae.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),Q.copy(T.viewport),j.copy(T.scissor),fe=T.scissorTest,Re.viewport(Q),Re.scissor(j),Re.setScissorTest(fe),q=-1;return}else if(Ae.__webglFramebuffer===void 0)$e.setupRenderTarget(T);else if(Ae.__hasExternalTextures)$e.rebindTextures(T,Ze.get(T.texture).__webglTexture,Ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let it=T.depthTexture;if(Ae.__boundDepthTexture!==it){if(it!==null&&Ze.has(it)&&(T.width!==it.image.width||T.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(T)}}let Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Pe=!0);let Ve=Ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ve[G])?K=Ve[G][te]:K=Ve[G],$=!0):T.samples>0&&$e.useMultisampledRTT(T)===!1?K=Ze.get(T).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[te]:K=Ve,Q.copy(T.viewport),j.copy(T.scissor),fe=T.scissorTest}else Q.copy(He).multiplyScalar(re).floor(),j.copy(Be).multiplyScalar(re).floor(),fe=et;if(te!==0&&(K=N),Re.bindFramebuffer(V.FRAMEBUFFER,K)&&Re.drawBuffers(T,K),Re.viewport(Q),Re.scissor(j),Re.setScissorTest(fe),$){let Ae=Ze.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae.__webglTexture,te)}else if(Pe){let Ae=G;for(let Ue=0;Ue<T.textures.length;Ue++){let Ve=Ze.get(T.textures[Ue]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ue,Ve.__webglTexture,te,Ae)}}else if(T!==null&&te!==0){let Ae=Ze.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,te)}q=-1};function hh(T){let G=Ze.get(T);return(G.__readFormat!==T.format||G.__readType!==T.type)&&(G.__readFormat=T.format,G.__readType=T.type,G.__formatReadable=Tt.textureFormatReadable(T.format),G.__typeReadable=Tt.textureTypeReadable(T.type)),G}this.readRenderTargetPixels=function(T,G,te,K,$,Pe,ke,Ae=0){if(!(T&&T.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ke!==void 0&&(Ue=Ue[ke],Array.isArray(Ue)&&(Ue=Ue[0])),Ue){Re.bindFramebuffer(V.FRAMEBUFFER,Ue);try{let Ve=T.textures[Ae],it=Ve.format,pt=Ve.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);let ze=hh(Ve);if(ze.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-K&&te>=0&&te<=T.height-$&&V.readPixels(G,te,K,$,xe.convert(it),xe.convert(pt),Pe)}finally{let Ve=X!==null?Ze.get(X).__webglFramebuffer:null;Re.bindFramebuffer(V.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,G,te,K,$,Pe,ke,Ae=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ke!==void 0&&(Ue=Ue[ke],Array.isArray(Ue)&&(Ue=Ue[0])),Ue)if(G>=0&&G<=T.width-K&&te>=0&&te<=T.height-$){Re.bindFramebuffer(V.FRAMEBUFFER,Ue);let Ve=T.textures[Ae],it=Ve.format,pt=Ve.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae);let ze=hh(Ve);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.bufferData(V.PIXEL_PACK_BUFFER,Pe.byteLength,V.STREAM_READ),V.readPixels(G,te,K,$,xe.convert(it),xe.convert(pt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let zt=X!==null?Ze.get(X).__webglFramebuffer:null;Re.bindFramebuffer(V.FRAMEBUFFER,zt);let Rt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ru(V,Rt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,mt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Pe),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(mt),V.deleteSync(Rt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,te=0){let K=Math.pow(2,-te),$=Math.floor(T.image.width*K),Pe=Math.floor(T.image.height*K),ke=G!==null?G.x:0,Ae=G!==null?G.y:0;$e.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,te,0,0,ke,Ae,$,Pe),Re.unbindTexture()},this.copyTextureToTexture=function(T,G,te=null,K=null,$=0,Pe=0){let ke,Ae,Ue,Ve,it,pt,ze,mt,zt,Rt=T.isCompressedTexture?T.mipmaps[Pe]:T.image;if(te!==null)ke=te.max.x-te.min.x,Ae=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,Ve=te.min.x,it=te.min.y,pt=te.isBox3?te.min.z:0;else{let yt=Math.pow(2,-$);ke=Math.floor(Rt.width*yt),Ae=Math.floor(Rt.height*yt),T.isDataArrayTexture?Ue=Rt.depth:T.isData3DTexture?Ue=Math.floor(Rt.depth*yt):Ue=1,Ve=0,it=0,pt=0}K!==null?(ze=K.x,mt=K.y,zt=K.z):(ze=0,mt=0,zt=0);let At=xe.convert(G.format),an=xe.convert(G.type),Ge;G.isData3DTexture?($e.setTexture3D(G,0),Ge=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?($e.setTexture2DArray(G,0),Ge=V.TEXTURE_2D_ARRAY):($e.setTexture2D(G,0),Ge=V.TEXTURE_2D),Re.activeTexture(V.TEXTURE0),Re.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),Re.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),Re.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let dn=Re.getParameter(V.UNPACK_ROW_LENGTH),Mt=Re.getParameter(V.UNPACK_IMAGE_HEIGHT),Vi=Re.getParameter(V.UNPACK_SKIP_PIXELS),on=Re.getParameter(V.UNPACK_SKIP_ROWS),ta=Re.getParameter(V.UNPACK_SKIP_IMAGES);Re.pixelStorei(V.UNPACK_ROW_LENGTH,Rt.width),Re.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Rt.height),Re.pixelStorei(V.UNPACK_SKIP_PIXELS,Ve),Re.pixelStorei(V.UNPACK_SKIP_ROWS,it),Re.pixelStorei(V.UNPACK_SKIP_IMAGES,pt);let bi=T.isDataArrayTexture||T.isData3DTexture,Wi=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){let yt=Ze.get(T),sn=Ze.get(G),Fn=Ze.get(yt.__renderTarget),Ut=Ze.get(sn.__renderTarget);Re.bindFramebuffer(V.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Re.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let $t=0;$t<Ue;$t++)bi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ze.get(T).__webglTexture,$,pt+$t),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ze.get(G).__webglTexture,Pe,zt+$t)),V.blitFramebuffer(Ve,it,Ve+ke,it+Ae,ze,mt,ze+ke,mt+Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);Re.bindFramebuffer(V.READ_FRAMEBUFFER,null),Re.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Ze.has(T)){let yt=Ze.get(T),sn=Ze.get(G);Re.bindFramebuffer(V.READ_FRAMEBUFFER,C),Re.bindFramebuffer(V.DRAW_FRAMEBUFFER,B);for(let Fn=0;Fn<Ue;Fn++)bi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,yt.__webglTexture,$,pt+Fn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,yt.__webglTexture,$),Wi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,sn.__webglTexture,Pe,zt+Fn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,sn.__webglTexture,Pe),$!==0?V.blitFramebuffer(Ve,it,Ve+ke,it+Ae,ze,mt,ze+ke,mt+Ae,V.COLOR_BUFFER_BIT,V.NEAREST):Wi?V.copyTexSubImage3D(Ge,Pe,ze,mt,zt+Fn,Ve,it,ke,Ae):V.copyTexSubImage2D(Ge,Pe,ze,mt,Ve,it,ke,Ae);Re.bindFramebuffer(V.READ_FRAMEBUFFER,null),Re.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Wi?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Ge,Pe,ze,mt,zt,ke,Ae,Ue,At,an,Rt.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(Ge,Pe,ze,mt,zt,ke,Ae,Ue,At,Rt.data):V.texSubImage3D(Ge,Pe,ze,mt,zt,ke,Ae,Ue,At,an,Rt):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Pe,ze,mt,ke,Ae,At,an,Rt.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Pe,ze,mt,Rt.width,Rt.height,At,Rt.data):V.texSubImage2D(V.TEXTURE_2D,Pe,ze,mt,ke,Ae,At,an,Rt);Re.pixelStorei(V.UNPACK_ROW_LENGTH,dn),Re.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),Re.pixelStorei(V.UNPACK_SKIP_PIXELS,Vi),Re.pixelStorei(V.UNPACK_SKIP_ROWS,on),Re.pixelStorei(V.UNPACK_SKIP_IMAGES,ta),Pe===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&V.generateMipmap(Ge),Re.unbindTexture()},this.initRenderTarget=function(T){Ze.get(T).__webglFramebuffer===void 0&&$e.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?$e.setTextureCube(T,0):T.isData3DTexture?$e.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?$e.setTexture2DArray(T,0):$e.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){Y=0,W=0,X=null,Re.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var xd={type:"change"},Hc={type:"start"},vd={type:"end"},el=new Ci,yd=new Mn,Tx=Math.cos(70*Sc.DEG2RAD),Kt=new z,xn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},kc=1e-6,Kr=class extends Fr{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ui.ROTATE,MIDDLE:Ui.DOLLY,RIGHT:Ui.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new en,this._lastTargetPosition=new z,this._quat=new en().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bs,this._sphericalDelta=new Bs,this._scale=1,this._panOffset=new z,this._rotateStart=new pe,this._rotateEnd=new pe,this._rotateDelta=new pe,this._panStart=new pe,this._panEnd=new pe,this._panDelta=new pe,this._dollyStart=new pe,this._dollyEnd=new pe,this._dollyDelta=new pe,this._dollyDirection=new z,this._mouse=new pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Rx.bind(this),this._onPointerDown=Ax.bind(this),this._onPointerUp=Cx.bind(this),this._onContextMenu=Fx.bind(this),this._onMouseWheel=Dx.bind(this),this._onKeyDown=Lx.bind(this),this._onTouchStart=Nx.bind(this),this._onTouchMove=Ux.bind(this),this._onMouseDown=Px.bind(this),this._onMouseMove=Ix.bind(this),this._interceptControlDown=Ox.bind(this),this._interceptControlUp=Bx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=bt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xd),this.update(),this.state=bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Kt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(el.origin.copy(this.object.position),el.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(el.direction))<Tx?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),el.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>kc||this._lastTargetPosition.distanceToSquared(this.target)>kc?(this.dispatchEvent(xd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?xn/60*this.autoRotateSpeed*e:xn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Kt.copy(s).sub(this.target);let r=Kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Ax(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Rx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Cx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vd),this.state=bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Px(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case Ui.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case Ui.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Hc)}function Ix(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Dx(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(Hc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vd))}function Lx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Nx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1){this.state=bt.NONE;break}this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1){this.state=bt.NONE;break}this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Hc)}function Ux(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function Fx(i){this.enabled!==!1&&i.preventDefault()}function Ox(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var qs=class extends In{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Lt;e.deleteAttribute("uv");let t=new ne({side:qt}),n=new ne,s=new Qi(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new De(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new zn(e,n,6),o=new Dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new De(e,Xs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new De(e,Xs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new De(e,Xs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new De(e,Xs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let p=new De(e,Xs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);let d=new De(e,Xs(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Xs(i){return new Pr({color:0,emissive:16777215,emissiveIntensity:i})}var Jr=new z;function Un(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Jr.copy(e),Jr[n]=0,Jr.normalize();let c=.5*a/(a+o),u=1-Jr.angleTo(i)/l;return Math.sign(Jr[t])===1?u*c:o/(a+o)+c+c*(1-u)}var tl=class i extends Lt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new z,c=new z,u=new z(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,_=f.length/6,M=new z,g=.5/a;for(let m=0,b=0;m<f.length;m+=3,b+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[m+0]=u.x*Math.sign(l.x)+c.x*r,f[m+1]=u.y*Math.sign(l.y)+c.y*r,f[m+2]=u.z*Math.sign(l.z)+c.z*r,p[m+0]=c.x,p[m+1]=c.y,p[m+2]=c.z,Math.floor(m/_)){case 0:M.set(1,0,0),d[b+0]=Un(M,c,"z","y",r,n),d[b+1]=1-Un(M,c,"y","z",r,t);break;case 1:M.set(-1,0,0),d[b+0]=1-Un(M,c,"z","y",r,n),d[b+1]=1-Un(M,c,"y","z",r,t);break;case 2:M.set(0,1,0),d[b+0]=1-Un(M,c,"x","z",r,e),d[b+1]=Un(M,c,"z","x",r,n);break;case 3:M.set(0,-1,0),d[b+0]=1-Un(M,c,"x","z",r,e),d[b+1]=1-Un(M,c,"z","x",r,n);break;case 4:M.set(0,0,1),d[b+0]=1-Un(M,c,"x","y",r,e),d[b+1]=1-Un(M,c,"y","x",r,t);break;case 5:M.set(0,0,-1),d[b+0]=Un(M,c,"x","y",r,e),d[b+1]=1-Un(M,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var zc=Math.PI/180,kx=(i,e,t)=>new en().setFromEuler(new Pn(i*zc,e*zc,t*zc)),Oe=(i,e,t)=>new z(i,e,t);function sl(i,e,t=1,n=60){let s=document.createElement("canvas");s.width=1024,s.height=256;let r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,1024,256);let a=t,o=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<n;c++){let u=o()*256,f=4+o()*10,p=.004+o()*.008,d=o()*6;r.strokeStyle=e,r.globalAlpha=.12+o()*.3,r.lineWidth=.6+o()*2.2,r.beginPath();for(let _=0;_<=1024;_+=8){let M=u+Math.sin(_*p+d)*f+Math.sin(_*p*3.1+d)*f*.25;_?r.lineTo(_,M):r.moveTo(_,M)}r.stroke()}r.globalAlpha=.05;for(let c=0;c<1600;c++)r.fillStyle=o()<.5?e:"#fff",r.fillRect(o()*1024,o()*256,6+o()*14,1);let l=new Ln(s);return l.wrapS=l.wrapT=Ki,l.colorSpace=Wt,l.anisotropy=8,l}var y={beech:new ne({map:sl("#DDAA6A","#A8682E",3,80),roughness:.7}),beechDark:new ne({map:sl("#C48A4E","#7E4A1E",7,50),roughness:.55}),rose:new ne({map:sl("#5E2C1E","#2A100A",11,60),roughness:.42}),steel:new ne({color:12107978,metalness:.85,roughness:.32}),steelDark:new ne({color:9279139,metalness:.85,roughness:.35}),iron:new ne({color:2898511,metalness:.4,roughness:.45}),brass:new ne({color:13805126,metalness:.95,roughness:.3}),yellow:new ne({color:15909198,roughness:.45}),pink:new ne({color:15900840,roughness:.8}),graphite:new ne({color:3816e3,roughness:.5,metalness:.3}),pencilWood:new ne({color:15189914,roughness:.8}),line:new Ji({color:4012612}),kerf:new ne({color:3810326,roughness:1}),claret:new ne({color:9054789,roughness:.5})};function Rd(i=30){let e=document.createElement("canvas");e.width=2048,e.height=160;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,160);n.addColorStop(0,"#e9ecef"),n.addColorStop(1,"#c7cdd4"),t.fillStyle=n,t.fillRect(0,0,2048,160),t.fillStyle="#24272d";let s=2048/i;for(let a=0;a<=i*10;a++){let o=a*s/10,l=a%10===0?60:a%5===0?42:26;t.fillRect(o,0,2,l)}t.font="bold 30px Arial";for(let a=1;a<i;a++)t.fillText(a,a*s-8,96);let r=new Ln(e);return r.colorSpace=Wt,r.anisotropy=8,r}function Hx(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.strokeStyle="rgba(55,52,62,.85)",e.lineWidth=5;for(let n=-256;n<512;n+=34)e.beginPath(),e.moveTo(n,256),e.lineTo(n+256,0),e.stroke();let t=new Ln(i);return t.colorSpace=Wt,t}var Mb=Hx(),zi=i=>(i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i);function qc(){let i=new je,e=new xt;e.moveTo(-15,-1.25),e.lineTo(15,-1.25),e.absarc(15,0,1.25,-Math.PI/2,Math.PI/2,!1),e.lineTo(-15,1.25),e.closePath(),e.holes.push(new tn().absarc(15.35,0,.38,0,Math.PI*2,!0));let t=new gn(e,{depth:.08,bevelEnabled:!1,curveSegments:24});t.translate(0,0,-.04),t.rotateX(-Math.PI/2);let n=t.attributes.position,s=t.attributes.uv;for(let o=0;o<n.count;o++)s.setXY(o,(n.getX(o)+15)/30,(-n.getZ(o)+1.25)/2.5);let r=Rd();r.wrapS=Rn;let a=new ne({map:r,metalness:.65,roughness:.25});return i.add(new De(t,[a,y.steel])),zi(i)}function zx(){let i=new je,e=new De(new Ii(.11,.35,12),y.graphite);e.rotation.x=Math.PI,e.position.y=.175;let t=new De(new Nt(.35,.11,.9,6),y.pencilWood);t.position.y=.35+.45;let n=new De(new Nt(.35,.35,8,6),y.yellow);n.position.y=1.25+4;let s=new De(new Nt(.37,.37,.6,16),y.steel);s.position.y=9.55;let r=new De(new Nt(.34,.34,.5,16),y.pink);return r.position.y=10.1,i.add(e,t,n,s,r),zi(i)}function Yc(){let i=new je,e=new De(new Lt(11.5,1.8,2.6),y.rose);e.position.set(5.75,0,1.3);let t=new De(new Lt(11.5,1.5,.1),y.brass);t.position.set(5.75,0,.05);let n=[y.steel,y.steel,new ne({map:Rd(15),metalness:.55,roughness:.35}),y.steel,y.steel,y.steel],s=new Lt(2.4,.15,15.6),r=s.attributes.uv,a=new De(s,n);a.position.set(1.2,0,-7.2),n[2].map.center.set(.5,.5),n[2].map.rotation=Math.PI/2,i.add(e,t,a);for(let[o,l]of[[.7,.9],[1.7,1.8],[.7,2]]){let c=new De(new Nt(.2,.2,1.84,16),y.brass);c.position.set(o,0,l),i.add(c)}for(let o of[5.5,9.5]){let l=new De(new Nt(.16,.16,1.84,16),y.brass);l.position.set(o,0,1.3),i.add(l)}return zi(i)}function cl(){let i=new je,e=new De(new Lt(6,1.8,3.6),y.beechDark);e.position.set(0,.9,.3);let t=new De(new Lt(6,.06,3.6),y.brass);t.position.set(0,.03,.3);let n=new De(new Lt(1.3,15.5,1.3),y.beech);n.position.set(0,-1.4+7.75,.75);let s=new De(new Ii(.12,.5,12),y.steel);s.rotation.x=-Math.PI/2,s.position.set(0,-1,-.15),i.userData.pin=s;let r=new De(new Nt(.22,.22,.9,16),y.steel);r.rotation.z=Math.PI/2,r.position.set(3.4,.9,.75);let a=new De(new Ot(1,24,16),new ne({color:15909166,roughness:.35}));a.scale.set(.32,1.05,.75),a.position.set(4.15,.9,.75);let o=new De(new Nt(.4,.4,.35,20),new ne({color:15909166,roughness:.35}));return o.rotation.z=Math.PI/2,o.position.set(3.75,.9,.75),i.add(e,t,n,s,r,o,a),zi(i)}function Zc(){let i=new je,e=new xt;e.moveTo(0,8),e.lineTo(0,.3);for(let f=0;f<62;f++)e.lineTo(f*.4+.2,-.05),e.lineTo(f*.4+.4,.3);e.lineTo(25,8),e.closePath();let t=new De(new gn(e,{depth:.06,bevelEnabled:!1}),y.steel);t.position.z=-.03;let n=new De(new Lt(25.4,1.3,.45),y.brass);n.position.set(12.6,8.1,0);let s=[[22.5,9.4],[24.8,12.2],[26.4,12.9],[27.9,12.1],[31.7,7.4],[33.9,2.2],[33.1,.5],[30.5,.3],[27.4,2.5],[24.6,3.2],[22.5,3.6]],r=new xt;s.forEach(([f,p],d)=>d?r.lineTo(f,p):r.moveTo(f,p)),r.closePath();let a=[[25.9,4.6],[28.3,3.3],[30.1,4.3],[29,8.5],[27.5,10.1],[26,9.3],[25.6,6.8]],o=new tn;a.forEach(([f,p],d)=>d?o.lineTo(f,p):o.moveTo(f,p)),o.closePath(),r.holes.push(o);let l=new gn(r,{depth:1.45,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:1});l.translate(0,0,-.725);let c=l.attributes.uv;for(let f=0;f<c.count;f++)c.setXY(f,c.getX(f)/14,c.getY(f)/14);let u=new De(l,y.beechDark);i.add(t,n,u);for(let[f,p]of[[23.8,6.6],[25.4,3.6]]){let d=new De(new Nt(.35,.35,2,16),y.brass);d.rotation.x=Math.PI/2,d.position.set(f,p,0),i.add(d)}return zi(i)}function Kc(){let i=new je,e=.38,t=7.7,n=new xt;n.moveTo(-.9,0),n.lineTo(.9,0),n.lineTo(.9,-.07),n.lineTo(.6,-e),n.lineTo(-.6,-e),n.lineTo(-.9,-.07),n.closePath();let s=new gn(n,{depth:t,steps:7,bevelEnabled:!1});s.rotateX(-Math.PI/2);let r=s.attributes.position;for(let f=0;f<r.count;f++){let p=r.getY(f),d=r.getZ(f);r.setZ(f,Math.min(d,e*Math.max(0,p)/1.1))}s.computeVertexNormals();let a=new De(s,y.steel),o=new De(new Nt(.22,.3,.8,12),y.steel);o.position.set(0,8,e/2);let l=new De(new Nt(.6,.6,.9,20),y.brass);l.position.set(0,8.8,e/2);let c=[[.6,9.2],[.78,10],[.92,12.5],[.88,15],[.7,16.4],[.3,16.8],[0,16.85]].map(([f,p])=>new pe(f,p)),u=new De(new $n(c,28),y.beechDark);return u.position.z=e/2,i.add(a,o,l,u),zi(i)}function Jc(){let i=new je,e=new De(new Lt(4.2,5.2,9.5),y.beech),t=new De(new Lt(1.2,23.2,2.2),y.beechDark);return t.position.y=-20+23.2/2,i.add(e,t),zi(i)}function Gx(){let i=new je,e=new wn([Oe(0,0,0),Oe(0,6.2,0),Oe(.8,7.6,0),Oe(2.5,8,0),Oe(11,8,0),Oe(12.7,7.6,0),Oe(13.5,6.2,0),Oe(13.5,0,0)]);i.add(new De(new jn(e,60,.22,10),new ne({color:6054765,metalness:.75,roughness:.4})));let t=new De(new Lt(13.5,.25,.03),new ne({color:15133422,metalness:.95,roughness:.12}));t.position.set(6.75,.1,0),i.add(t);let n=[[.3,0],[.65,-.8],[.75,-3],[.7,-6.5],[.5,-7.6],[0,-7.7]].map(([r,a])=>new pe(r,a)),s=new De(new $n(n,24),new ne({color:3108800,roughness:.9}));return s.rotation.z=-Math.PI/2,s.position.set(-.1,.1,0),i.add(s),zi(i)}function Cd(){return Qc(24,5.8,"smooth")}function cs(i,e=256,t=[1,1]){let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d");i(s,e);let r=new Ln(n);return r.wrapS=r.wrapT=Ki,r.repeat.set(...t),r.colorSpace=Wt,r}var Md=cs((i,e)=>{i.fillStyle="#c9ced6",i.fillRect(0,0,e,e),i.strokeStyle="#6f7783",i.lineWidth=3;for(let t=-e;t<2*e;t+=16)i.beginPath(),i.moveTo(t,0),i.lineTo(t+e,e),i.stroke(),i.beginPath(),i.moveTo(t,e),i.lineTo(t+e,0),i.stroke()},256,[3,3]),Vx=cs((i,e)=>{i.fillStyle="#8a929c",i.fillRect(0,0,e,e),i.strokeStyle="#5d646d",i.lineWidth=2;for(let t=-e;t<2*e;t+=7)i.beginPath(),i.moveTo(t,0),i.lineTo(t+e*.5,e),i.stroke();i.strokeStyle="rgba(220,226,232,.5)",i.lineWidth=1;for(let t=-e;t<2*e;t+=11)i.beginPath(),i.moveTo(t,e),i.lineTo(t+e*.7,0),i.stroke()},256,[4,1]),Wx=cs((i,e)=>{i.fillStyle="#efe6d0",i.fillRect(0,0,e,e),i.strokeStyle="#c9b994";for(let t=4;t<e*.75;t+=9)i.lineWidth=2+Math.random()*2,i.beginPath(),i.arc(e/2,e/2,t,0,7),i.stroke()});Object.assign(y,{knurl:new ne({map:Md,metalness:.8,roughness:.4}),file:new ne({map:Vx,metalness:.7,roughness:.55}),blue:new ne({color:3105456,roughness:.35,metalness:.1}),red:new ne({color:13120058,roughness:.4}),orange:new ne({color:15235114,roughness:.4}),yellowP:new ne({color:15906354,roughness:.3}),black:new ne({color:2500652,roughness:.65}),hide:new ne({color:15524552,roughness:.85}),hideEnd:new ne({map:Wx,roughness:.85}),viceBlue:new ne({color:2906784,metalness:.35,roughness:.5}),castGrey:new ne({color:6977156,metalness:.5,roughness:.5}),leather:new ne({color:7027486,roughness:.8}),gold:new ne({color:13212220,metalness:.9,roughness:.3}),goldSharp:new ne({color:13607498,metalness:.9,roughness:.28,flatShading:!0}),steelShiny:new ne({color:14278372,metalness:1,roughness:.12}),steelDull:new ne({color:10068137,metalness:.7,roughness:.45}),knurlDull:new ne({map:Md,color:11580602,metalness:.65,roughness:.5}),blackMetal:new ne({color:2764082,metalness:.45,roughness:.45}),blackOxide:new ne({color:3816770,metalness:.6,roughness:.5}),dotRed:new ne({color:13775676,roughness:.5}),dotBlue:new ne({color:3105456,roughness:.5})});var tt=(i,e)=>{let t=new De(i,e);return t.castShadow=t.receiveShadow=!0,t},h=(i,e=0,t=0,n=0,s=0,r=0,a=0)=>(i.position.set(e,t,n),i.rotation.set(s,r,a),i),O=(i,e,t,n,s=28)=>tt(new Nt(i,e,t,s),n),P=(i,e,t,n)=>tt(new Lt(i,e,t),n),se=(i,e,t,n,s)=>tt(new tl(i,e,t,3,n),s),nn=(i,e,t=32)=>tt(new $n(i.map(([n,s])=>new pe(n,s)),t),e),$c=i=>{let e=new xt;return i.forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e},Pt=(i,e,t,n=0)=>{let s=new gn(Array.isArray(i)?$c(i):i,{depth:e,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:24});s.translate(0,0,-e/2);let r=s.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)/12,r.getY(a)/12);return tt(s,t)},qn=(i,e,t,n=80)=>tt(new jn(new wn(i.map(s=>Oe(...s))),n,e,12),t),ce=(...i)=>{let e=new je;return i.length&&e.add(...i),e},Xx=i=>(i.rotation.z=-Math.PI/2,i);function qx(){return ce(h(P(8,1.4,1.8,y.steelShiny),4,0,.9),h(P(1.4,.16,11,y.steelShiny),.7,0,-5.5),h(P(.4,.6,.4,y.steelDark),.2,0,.2))}function Yx(){let i=cl();i.children.forEach(t=>{(t.material===y.beechDark||t.material===y.beech)&&(t.material=y.rose)});let e=i.userData.pin.clone();return e.position.y=-1.8,i.add(e),i.add(h(P(.5,15,.12,y.brass),0,6.35,1.42),h(O(.35,.35,1,y.brass),0,14.6,.75),h(O(.55,.55,.3,y.knurl),0,15.2,.75)),i}function Pd(){return ce(nn([[0,0],[.06,.6],[.12,2.2],[.14,4],[0,4]],y.steelDull),h(O(.2,.2,6.4,y.knurlDull),0,7.2),h(O(.2,.2,.04,y.dotRed),0,10.42))}function Zx(){return ce(nn([[0,0],[.15,.35],[.36,1.6],[.42,2.4],[.42,9.7],[0,9.7]],y.steelDull),h(O(.45,.45,4.6,y.knurlDull),0,5.4),h(O(.42,.42,.04,y.dotRed),0,9.72))}function Kx(){return ce(nn([[0,.08],[.07,0],[.1,.05],[.1,.9],[.38,3.6],[.38,9.4],[.3,9.8],[0,9.85]],y.blackOxide),h(O(.4,.4,3.6,y.knurl),0,6.4))}function Jx(){let i=ce(),e=r=>{let a=.3*r,o=2.6*r-a,l=Math.hypot(o,12.6),c=O(.22,.05,l,y.steel,16);return c.position.set(a+o/2,12.85-12.6/2,0),c.rotation.z=Math.atan2(o,12.6),c},t=.34,n=new xt;n.absarc(0,0,1,-Math.PI/2+t,Math.PI*1.5-t,!1),n.absarc(0,0,.86,Math.PI*1.5-t,-Math.PI/2+t,!0),n.closePath();let s=Pt(n,.55,y.steel);return s.position.set(0,13.8,0),i.add(e(1),e(-1),s,h(O(.17,.17,1.3,y.knurl),0,15.4)),i.add(h(O(.06,.06,4.6,y.steelDark),0,7,0,0,0,Math.PI/2),h(O(.5,.5,.45,y.knurl),2.15,7,0,0,0,Math.PI/2)),i}function $x(){let i=e=>qn([[.22*e,13],[1.1*e,11],[2.5*e,7.2],[3.1*e,4],[2.7*e,1.5],[1.4*e,.25],[.3*e,0]],.17,y.steel);return ce(i(1),i(-1),h(O(.75,.75,.35,y.steel),0,13.2,0,Math.PI/2),h(O(.25,.25,.5,y.steelDark),0,13.2,0,Math.PI/2))}function jx(){return ce(qn([[.25,13],[.9,6],[1.25,.6]],.17,y.steel),h(nn([[0,0],[.1,.5],[.17,.9]],y.steel),1.28,0,0,0,0,.05),qn([[-.25,13],[-1.1,5],[-1.35,1.2],[-1.1,.45],[-.5,.3]],.17,y.steel),h(O(.75,.75,.35,y.steel),0,13.2,0,Math.PI/2),h(O(.25,.25,.5,y.steelDark),0,13.2,0,Math.PI/2))}function Id(){let i=$c([[2.4,9.6],[-4,9.6],[-6.4,7.2],[-6.8,2.4],[-5.2,.7],[2.4,.7]]);i.holes.push(new tn([[-4.4,2.1],[.9,2.1],[.9,8.2],[-3.6,8.2],[-5.1,6.6],[-5.3,3.4]].map(([t,n])=>new pe(t,n))));let e=Pt(i,1.6,y.yellowP,.25);return ce(qn([[30.5,.6],[30.6,8],[29.4,9.6],[4.2,9.6],[2.4,9.6]],.55,y.black),e,h(P(28.6,1.2,.06,y.steelShiny),16.2,1.3,0),h(O(.45,.45,.5,y.steel),30.6,1.3,0,Math.PI/2),h(P(1.4,.5,.15,y.steel),31.6,1.3,0))}function Qx(){let i=new ne({color:14211548,roughness:.5,metalness:.1}),t=qn([[0,.25,0],[.3,1.5,0],[1.4,5.7,0],[2.5,6.6,0],[7,6.6,0],[11.4,6.6,0],[12.8,6.1,0],[13.6,4.8,0],[14.3,2.4,0],[15.1,.2,.18],[15.8,-.9,.3],[16.9,-1.4,.2],[19.5,-1.5,0],[21.9,-1.45,0],[23,-1,0],[23.35,-.4,0],[23,.2,0],[21.9,.62,0],[19.5,.66,0],[17.1,.56,-.15],[16,.38,-.3],[15.3,.27,-.15],[15,.25,0]],.3,i,260),n=s=>h(O(.42,.42,.95,i,20),s,.2,0);return ce(t,n(0),n(15),h(P(14.6,.85,.05,new ne({color:3817286,metalness:.6,roughness:.4})),7.5,-.25,0))}var Dd=new ne({map:sl("#5c3b26","#2e1b10",31,60),roughness:.5});function ey(){let i=new xt;i.moveTo(0,0),i.lineTo(.95,1.6),i.lineTo(.95,9),i.lineTo(0,9),i.closePath();let e=new gn(i,{depth:.6,bevelEnabled:!1});return e.translate(-.47,0,-.3),e.rotateY(Math.PI/2),ce(tt(e,y.steel),h(O(.75,.75,.5,y.steel),0,9.25),h(O(.85,.85,.3,y.leather),0,9.65),h(nn([[.85,9.8],[1.05,11],[1.15,15],[1.05,19],[.9,20],[0,20.1]],Dd),0,0,0))}var jc=(i=y.beechDark)=>{let e=nn([[.75,.6],[.8,-4],[.95,-18],[1.05,-24],[.95,-27.5],[0,-27.8]],i);return e.scale.z=.72,e},ty=(i=y.steelDark)=>{let e=nn([[0,3.6],[.98,3.6],[1.02,3.42],[.78,2.6],[.68,1.8],[.92,1.05],[.95,-.9],[.7,-1.6],[.5,-2.2],[.55,-2.6],[0,-2.6]].reverse(),i,40);return e.rotation.z=-Math.PI/2,e};function ny(){return ce(ty(),h(tt(new Ot(1,32,20),y.steelDark),-3.4,0,0),jc())}function iy(){let i=nn([[0,3.6],[.98,3.6],[1.02,3.42],[.78,2.6],[.68,1.8],[.92,1.05],[.95,0],[0,0]].reverse(),y.steelDark,40);i.rotation.z=-Math.PI/2;let e=Pt([[0,-.95],[0,.95],[-3.6,.14],[-3.6,-.14]],1.8,y.steelDark);return ce(i,e,jc())}function Ld(){let i=e=>h(Pt(new xt().moveTo(0,.95).quadraticCurveTo(-3,1.25,-5.4,-2.1).lineTo(-5.25,-2.25).quadraticCurveTo(-2.9,-.35,0,-.9),.42,y.steelDark),0,0,.38*e);return ce(h(O(1,1,3.4,y.steelDark),1.7,0,0,0,0,Math.PI/2),i(1),i(-1),h(O(.85,.85,1.2,y.steelDark),0,-.3,0),h(nn([[.7,-.5],[.72,-12],[0,-12.1]],y.yellowP),0,0,0),h(nn([[.95,-11],[1.05,-17],[1.1,-26],[.95,-27.5],[0,-27.7]],y.black),0,0,0))}function sy(){let i=O(1.7,1.7,7.5,y.hide,36);return i.material=[y.hide,y.hideEnd,y.hideEnd],h(i,0,0,0,0,0,Math.PI/2),ce(i,h(O(1.75,1.75,2.4,y.castGrey,36),0,0,0,0,0,Math.PI/2),jc(y.beech))}function Qc(i=24,e=5.8,t){let n=new ne({color:11740718,metalness:.35,roughness:.4}),s=t==="jack"?n:t==="smooth"?y.steel:y.iron,r=t==="jack"?n:t==="smooth"?y.blackMetal:y.iron,a=t?y.steelShiny:y.iron,o=ce(),l=P(i,.6,e,a);l.position.y=.3;let c=P(i-2,3.4,.35,r);c.position.set(0,2.2,e/2-.18);let u=c.clone();u.position.z=-e/2+.18;let f=P(4,2,e-.8,s);h(f,-1.5,1.6,0,0,0,.75);let p=P(10,.25,e-1.2,y.steel);h(p,-1.6,3.6,0,0,0,.75);let d=se(7,.6,e-1.4,.25,s);h(d,-.8,3.8,0,0,0,.75);let _=P(1.2,.5,1.4,y.steel);h(_,-2.4,5.2,0,0,0,.75);let M=new xt;M.moveTo(0,0),M.lineTo(4.5,0),M.bezierCurveTo(5,4,5.5,7,4,8.3),M.bezierCurveTo(3,9,1.6,8.5,1.8,7),M.bezierCurveTo(2,5,1,2.5,0,1.2),M.closePath();let g=Pt(M,1.8,y.beechDark,.2);g.scale.x=-1,g.position.set(-i/2+4.5,.6,0);let m=nn([[0,0],[1.3,0],[1.5,1.2],[1.2,2.6],[.6,3.2],[0,3.3]],y.beechDark);return m.position.set(i/2-3.5,.6,0),o.add(l,c,u,f,p,d,_,g,m,h(O(.45,.45,.4,y.brass),-i/2+6.2,2,0,0,0,Math.PI/2)),o}function Nd(){return Qc(36,6.2,"jack")}function ry(){let i=Qc(21,3.6);return i.add(h(O(.22,.22,9,y.steel),4,1.2,5.5,Math.PI/2),h(O(.22,.22,9,y.steel),-4,1.2,5.5,Math.PI/2),h(se(15,2.6,.9,.2,y.iron),0,1.3,9.6),h(P(1.2,1.4,.5,y.brass),6,1.2,-2.1)),i}var Gc=new ne({color:3112271,metalness:.35,roughness:.4});function ay(){let i=ce(),e=P(20,4.5,.5,Gc);e.position.set(0,2.6,0);let t=se(9,4,1.6,.3,Gc);t.position.set(-1,3.4,.9);let n=new xt;n.moveTo(0,0),n.lineTo(4.5,0),n.bezierCurveTo(5,4,5.5,7,4,8.3),n.bezierCurveTo(3,9,1.6,8.5,1.8,7),n.bezierCurveTo(2,5,1,2.5,0,1.2),n.closePath();let s=Pt(n,1.6,y.beechDark,.2);s.scale.x=-1,s.position.set(-4,4.6,1);let r=P(.5,6,.4,y.steel);return h(r,1.5,4,0,0,0,.5),i.add(e,t,s,r,h(O(.25,.25,10,y.steel),5,2.4,5,Math.PI/2),h(O(.25,.25,10,y.steel),-6,2.4,5,Math.PI/2),h(se(17,3.4,.8,.2,Gc),0,2.2,8.8),h(O(.4,.4,.5,y.brass),5,2.4,1.1,Math.PI/2),h(O(.4,.4,.5,y.brass),-6,2.4,1.1,Math.PI/2)),i}function eh(i,e,t,n=2,s=.45,r=0){let a=new Nt(i,i,e,64,Math.round(e*24),!1),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l),u=o.getY(l),f=o.getZ(l),p=Math.atan2(f,c),d=Math.hypot(c,f);if(d<1e-6)continue;let _=(u+e/2)/e,M=1-s*Math.pow(Math.max(0,Math.cos(n/2*2*(p-_*t*Math.PI*2))),3);r&&(M*=1-.07*(.5+.5*Math.sin(p+u*Math.PI*2/r))),o.setX(l,c/d*d*M),o.setZ(l,f/d*d*M)}return a.computeVertexNormals(),a}function Ud(){return ce(h(O(.32,.32,4.5,y.gold),0,2.25),h(tt(eh(.32,7.2,1.6),y.gold),0,8.1),h(O(.32,0,.25,y.gold),0,11.83,0,Math.PI))}function oy(){let i=new ne({color:2961461,metalness:.6,roughness:.45,side:mn}),e=(o,l,c,u)=>ce(tt(new $n([[1.82,o],[2,o],[2,l],[1.97,l],[1.82,l-.38],[1.82,o]].map(([f,p])=>new pe(f,p)),56,c,u),y.steelShiny),tt(new $n([[1.815,o+.02],[1.815,Math.max(o+.03,l-.4)]].map(([f,p])=>new pe(f,p)),56,c,u),i)),t=ce(h(O(.3,.3,1.6,y.steel),0,.8),h(O(.26,.26,.25,y.blackOxide),0,1.72),h(O(.48,.48,2.2,y.steel),0,2.95),h(O(.44,.44,.35,y.blackOxide),0,4.22),h(O(1.97,1.97,.28,y.steel,64),0,4.53),h(O(1.82,1.82,.04,i,48),0,4.69)),n=.36,s=Math.PI/2;t.add(e(4.4,6,s+n,Math.PI-2*n),e(4.4,6,3*s+n,Math.PI-2*n)),t.add(e(4.4,5.1,s-n*.15,n*.15+.02),e(4.4,5.1,3*s-n*.15,n*.15+.02));let r=new xt;r.moveTo(-.7,0),r.lineTo(.7,0),r.lineTo(0,1.38),r.closePath();let a=new De(new gn(r,{depth:4,bevelEnabled:!1}),[y.steelShiny,i]);return a.geometry.translate(0,0,-2),a.geometry.rotateY(Math.PI/2),a.position.y=4.62,a.castShadow=!0,t.add(a,h(O(0,.13,.45,y.steelShiny,16),0,6.2)),t}function ly(){let i=new Ii(1.2,1.1,60,6),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getZ(t),r=Math.atan2(s,n);if(Math.hypot(n,s)<1e-6)continue;let o=(r/(2*Math.PI/5)%1+1)%1,l=1-.28*Math.min(1,o*3.5);e.setX(t,n*l),e.setZ(t,s*l)}return i.computeVertexNormals(),ce(h(O(.33,.33,5,y.gold),0,3.6),h(tt(i,y.goldSharp),0,.55,0,Math.PI),h(O(1.2,1.2,.14,y.gold,60),0,1.17),h(O(.4,.9,.35,y.gold),0,1.41))}function cy(){let i=e=>{let t=ce(nn([[.5,0],[.17,.34],[0,.34]],y.steel,32),h(tt(eh(.17,.5,.35,2,.35),y.steel),0,.59),h(O(0,.17,.13,y.steel,24),0,.9));return t.position.y=1.8*e,e<0&&(t.rotation.x=Math.PI),t};return ce(O(.5,.5,3.6,y.knurl),i(1),i(-1))}function Fd(i=y.red){return Xx(h(nn([[.6,0],[.9,1],[1,7],[.85,9],[0,9.2]],i),-10.5,0,0))}function Od(){let i=$c([[0,-1.1],[18,-1.1],[20,-.55],[20,.55],[18,1.1],[0,1.1]]),e=Pt(i,.45,y.file);return h(e,0,0,0,Math.PI/2),ce(e,h(P(3,.3,.5,y.steelDark),-1.5,0,0),Fd())}function hy(){let i=new xt;i.moveTo(-1.1,0),i.lineTo(1.1,0),i.quadraticCurveTo(1.05,.9,0,.95),i.quadraticCurveTo(-1.05,.9,-1.1,0);let e=new gn(i,{depth:20,steps:20,bevelEnabled:!1,curveSegments:16}),t=e.attributes.position;for(let s=0;s<t.count;s++){let r=t.getZ(s),a=r>15?1-(r-15)/5*.55:1;t.setX(s,t.getX(s)*a),t.setY(s,t.getY(s)*a)}let n=e.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,t.getZ(s)/5,t.getX(s)/2);return e.rotateY(Math.PI/2),e.computeVertexNormals(),ce(h(tt(e,y.file),0,-.25,0),h(P(3,.3,.5,y.steelDark),-1.5,0,0),Fd(y.blue))}function uy(){let i=new xt;i.absarc(-5.5,0,3.4,Math.PI/2,Math.PI*1.5,!1),i.lineTo(5.5,-3.4),i.absarc(5.5,0,3.4,-Math.PI/2,Math.PI/2,!1),i.closePath(),i.holes.push(new tn().absarc(0,0,1.3,0,Math.PI*2,!0));let e=Pt(i,.9,y.iron,.15);h(e,0,.45,0,Math.PI/2);let t=n=>h(nn([[0,0],[1.2,0],[1.5,1.5],[1.3,3],[.7,3.8],[0,3.9]],y.beechDark),n,.9);return ce(e,t(-6),t(6),h(O(.35,.35,7,y.steel),0,4.4),h(O(.75,.75,.6,y.knurl),0,5),h(P(.5,2.6,.5,y.steel),0,-.4),h(P(1.2,.3,.6,y.steel),.4,-1.6))}function Bd(){let i=s=>{let r=new xt;r.moveTo(-1,.05*s),r.lineTo(.95,.05*s),r.absarc(1.3,.05*s,.35,Math.PI,0,s<0),r.lineTo(3.8,.05*s),r.lineTo(3.95,.28*s),r.lineTo(2.5,.62*s),r.lineTo(.5,.9*s),r.lineTo(-1,.85*s),r.closePath();let a=ce(Pt(r,.8,y.steelDark));for(let o=0;o<9;o++)a.add(h(P(.07,.09,.8,y.steel),2+o*.2,.06*s,0));return a.add(h(P(.6,.07,.82,y.steelShiny),.6,.05*s,0)),a},e=s=>qn([[-1,.35*s],[-3.5,1*s],[-6.5,1.5*s],[-9.5,2*s]],.48,y.red),t=ce(h(i(1),0,0,-.2),e(-1)),n=ce(h(i(-1),0,0,.2),e(1));return t.rotation.z=.11,n.rotation.z=-.11,ce(t,n,h(O(.55,.55,1.1,y.steel),0,0,0,Math.PI/2))}function dy(){let i=new ne({color:10274536,roughness:.45}),e=a=>{let o=new xt;o.moveTo(1.6,-.3*a),o.lineTo(-9.6,-.04*a),o.quadraticCurveTo(-7.2,2.1*a,-1.6,2*a),o.lineTo(1.4,1.75*a),o.lineTo(3.4,1*a),o.lineTo(3.4,-.3*a),o.closePath();let l=ce(Pt(o,.34,y.steel,.04)),c=new xt;return c.moveTo(-9.4,0),c.lineTo(.8,-.18*a),c.lineTo(.8,.42*a),c.lineTo(-8.6,.32*a),c.closePath(),l.add(h(Pt(c,.02,y.steelShiny),0,0,.2*a)),l.add(h(se(2.2,.62,.06,.25,y.steelDark),-4.6,.95*a,.2*a,0,0,.08*a)),l},t=(a,o)=>{let l=new wn(a.map(([M,g])=>Oe(M,g,0)),!1,"centripetal"),c=90,u=.95,f=l.getSpacedPoints(c),p=[],d=[];for(let M=0;M<=c;M++){let g=l.getTangentAt(M/c),m=M>c-12?.75:1;p.push(new pe(f[M].x-g.y*u*m/2,f[M].y+g.x*u*m/2)),d.push(new pe(f[M].x+g.y*u*m/2,f[M].y-g.x*u*m/2))}let _=new xt([...p,...d.reverse()]);return h(Pt(_,.55,i,.12),0,0,.2*o)},n=t([[2.6,.75],[6,1.15],[12,1.7],[19,2.3],[21.4,2.55],[22.1,2.25],[22.2,1.85]],1),s=t([[2.6,-.75],[6,-1.35],[12,-2.15],[19,-2.95],[21.4,-3.2],[22.1,-2.9],[22.2,-2.45]],-1),r=tt(new Ot(.55,24,12,0,Math.PI*2,0,Math.PI/2),y.steelShiny);return r.rotation.x=Math.PI/2,r.scale.set(1,.45,1),r.position.set(0,0,.42),ce(h(e(1),0,0,.18),h(e(-1),0,0,-.18),n,s,r,h(O(.5,.5,.1,y.steel),0,0,-.42,Math.PI/2),h(se(.7,1.4,.5,.15,i),4.6,-.15,0),h(O(.12,.12,.9,y.steel),4.6,.45,0,Math.PI/2))}function fy(){let i=se(5,3.2,2.2,.4,y.castGrey);i.position.set(0,0,0);let e=ce(h(O(.6,.45,2,y.steel),3.4,.6,0,0,0,Math.PI/2),h(O(.18,.18,.6,y.steel),4.6,.6,0,0,0,Math.PI/2),h(O(.1,.1,.03,y.black,16),4.91,.6,0,0,0,Math.PI/2)),t=Pt([[-2.2,-1],[-.6,-1],[-2.6,-13],[-4.2,-12.6]],1.8,y.castGrey,.2),n=Pt([[-2.9,-6],[-1.5,-6.3],[-2.6,-13],[-4.2,-12.6]],2.1,y.black,.25),s=Pt([[1.6,1.2],[2.6,.4],[1.8,-12.5],[.3,-12.2]],1.4,y.castGrey,.2),r=Pt([[1.9,-5.8],[1.8,-12.5],[.3,-12.2],[.6,-5.6]],1.7,y.red,.25),a=ce(h(O(.06,.06,2.6,y.steelShiny,12),-1.3,0,0,0,0,Math.PI/2),h(O(.24,.24,.06,y.steel,20),.03,0,0,0,0,Math.PI/2),h(O(.12,.12,.55,y.steel,16),.33,0,0,0,0,Math.PI/2),h(O(.1,.1,.1,y.steel,12),.62,0,0,0,0,Math.PI/2));a.position.set(5,.6,0);let o=ce(i,e,t,n,s,r,h(O(.35,.35,2.6,y.steel),1.8,.9,0,Math.PI/2),a);return o.userData.anim=l=>{let c=l%4/4,u=p=>p*p*(3-2*p),f;c<.3?f=9-4.05*u(c/.3):c<.5?f=4.95:c<.8?f=4.95+4.05*u((c-.5)/.3):f=9,a.position.x=f},o}function al(i){let e=nn([[.7,0],[1.15,.8],[1.3,4],[1.25,8],[1.05,9.6],[0,9.9]],i?y.red:y.yellowP,8),t;if(i){let n=new $n([[0,-1.2],[.28,-.3],[.28,0]].map(([r,a])=>new pe(r,a)),48),s=n.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getZ(r),l=Math.atan2(o,a),c=.32+.68*Math.pow(Math.abs(Math.cos(2*l)),8);s.setX(r,a*c),s.setZ(r,o*c)}n.computeVertexNormals(),t=h(tt(n,y.steelDark),0,-12.15,0)}else t=h(P(.55,1.2,.12,y.steelDark),0,-12.6);return ce(e,h(O(.75,.75,.5,y.steel),0,-.1),h(O(.28,.28,12,y.steelDark),0,-6.2),t)}function py(){let i=new wn([[0,-.19],[17,-.19],[19.2,-.22],[20.2,-.68],[21.3,-1.25],[22.5,-.8],[22.85,0],[22.5,.8],[21.3,1.25],[20.2,.68],[19.2,.22],[17,.19],[0,.19]].map(([l,c])=>Oe(l,c,0)),!1,"centripetal"),e=160,t=.34,n=i.getSpacedPoints(e),s=[],r=[];for(let l=0;l<=e;l++){let c=i.getTangentAt(l/e),u=-c.y,f=c.x;s.push(new pe(n[l].x+u*t/2,n[l].y+f*t/2)),r.push(new pe(n[l].x-u*t/2,n[l].y-f*t/2))}let a=new xt([...s,...r.reverse()]),o=new ne({color:3646379,metalness:.25,roughness:.42});return ce(tt(new gn(a,{depth:1.1,bevelEnabled:!1,curveSegments:4}).translate(0,0,-.55),o))}function my(){let i=ce(h(P(.5,.9,.5,y.steel),0,.8),h(O(.4,.4,2.6,y.steel),0,-1),h(tt(eh(.48,4,0,3,.35,.35),y.steel),0,-4.3),h(O(.48,.15,.5,y.steel),0,-6.5,0,0));return ce(i,h(se(2.6,1.8,1.6,.3,y.black),0,.8),h(O(.4,.4,8,y.black),4.9,.8,0,0,0,Math.PI/2),h(O(.4,.4,8,y.black),-4.9,.8,0,0,0,Math.PI/2),h(O(.5,.5,.8,y.steel),0,2,0))}function gy(){let i=new xt;i.absarc(0,0,2.6,0,Math.PI*2,!1),i.holes.push(new tn().absarc(0,0,1.95,0,Math.PI*2,!0));let e=new xt;e.absarc(0,0,1.95,0,Math.PI*2,!1),e.holes.push(new tn().absarc(0,0,.55,0,Math.PI*2,!0));for(let n=0;n<4;n++){let s=n*Math.PI/2;e.holes.push(new tn().absarc(Math.cos(s)*1.05,Math.sin(s)*1.05,.35,0,Math.PI*2,!0))}let t=ce();for(let n=0;n<6;n++)t.add(h(new De(new rn(.53,.05,8,24),y.steelDark),0,-.38+n*.15,0,Math.PI/2,0,n*.2));return ce(t,h(Pt(i,1.2,y.steelDark,.1),0,0,0,Math.PI/2),h(Pt(e,.9,y.steel),0,0,0,Math.PI/2),h(O(.42,.42,9,y.knurl),7.2,0,0,0,0,Math.PI/2),h(O(.42,.42,9,y.knurl),-7.2,0,0,0,0,Math.PI/2),h(O(.6,.6,.6,y.steel),2.8,0,0,0,0,Math.PI/2),h(O(.6,.6,.6,y.steel),-2.8,0,0,0,0,Math.PI/2))}function _y(){return ce(nn([[.6,0],[1.1,1.2],[1.25,3.5],[1,6.5],[.5,7.6],[0,7.7]],y.beech),h(O(.5,.5,.4,y.brass),0,-.1),h(nn([[0,-5.8],[.17,-4.6],[.17,0],[0,0]],y.steel,20),0,-.2))}function xy(){return al(!1)}function yy(){return al(!0)}function kd(){let i=ce(h(se(20,9,2,.3,y.viceBlue),0,0,0),h(P(20,9,1,y.beech),0,0,1.5)),e=ce(h(se(20,9,2,.3,y.viceBlue),0,0,0),h(P(20,9,1,y.beech),0,0,-1.5));return e.position.z=6,ce(i,e,h(O(.6,.6,14,y.steel),-6,-2.5,3,Math.PI/2),h(O(.6,.6,14,y.steel),6,-2.5,3,Math.PI/2),h(O(.8,.8,12,y.knurl),0,-2.5,4,Math.PI/2),h(O(.45,.45,16,y.steel),0,-2.5,10.2,0,0,Math.PI/2),h(tt(new Ot(.75,20,14),y.steel),8.2,-2.5,10.2),h(tt(new Ot(.75,20,14),y.steel),-8.2,-2.5,10.2),h(O(1.3,1.3,1.6,y.viceBlue),0,-2.5,7.6,Math.PI/2))}function Hd(){let i=ce(h(se(9,2,12,.3,y.viceBlue),0,1,0),h(se(6,6,4,.4,y.viceBlue),0,5,-3.5),h(se(6,5,4,.4,y.viceBlue),0,4.5,2.6),h(se(4,1.2,8,.2,y.viceBlue),0,3,1));i.add(h(P(10,2.4,.4,y.steelDark),0,6.9,-1.3),h(P(10,2.4,.4,y.steelDark),0,6.9,.4),h(se(10,.8,4,.2,y.viceBlue),0,7.8,-3.5),h(se(10,.8,4,.2,y.viceBlue),0,7.5,2.6)),i.add(h(O(.5,.5,4,y.steel),0,3,6,Math.PI/2),h(O(.35,.35,11,y.steel),0,3,8,0,0,Math.PI/2),h(tt(new Ot(.6,16,12),y.steel),5.6,3,8),h(tt(new Ot(.6,16,12),y.steel),-5.6,3,8),h(se(6,1,2,.3,y.viceBlue),0,8.5,-4.2));let e=P(13,1.6,15,y.beech);e.position.y=-.8;let t=P(12,3,3.4,y.beechDark);t.position.set(0,-3.1,5.8),i.add(e,t);for(let[n,s]of[[-5.2,-6],[5.2,-6],[-5.2,6],[5.2,6]])i.add(h(O(.35,.35,.08,y.brass),n,.03,s));return i}function vy(){let i=t=>{let n=new xt;return n.moveTo(-1.5,-1.5),n.lineTo(1.5,-1.5),n.lineTo(1.5,1.5),n.lineTo(-1.5,1.5),n.closePath(),n.holes.push(new tn().absarc(t>0?.3:-.3,0,.6,0,Math.PI*2,!0)),h(Pt(n,1,y.castGrey,.12),t,.5,0,Math.PI/2)},e=ce(h(se(9,2,16,.3,y.castGrey),0,1,0),i(6),i(-6),h(se(9,4,2.4,.3,y.castGrey),0,4,-6),h(se(9,3.6,2.8,.3,y.castGrey),0,3.8,0));return e.add(h(P(8.6,2.2,.3,y.steelDark),0,4.6,-4.7),h(P(8.6,2.2,.3,y.steelDark),0,4.6,-1.5),h(O(.5,.5,9,y.steel),0,2.6,4.6,Math.PI/2),h(O(.3,.3,6,y.steel),0,2.6,9,0,0,Math.PI/2),h(O(.45,.45,1.4,y.black),3.4,2.6,9,0,0,Math.PI/2)),e}function My(){let i=t=>{let n=ce(Pt([[0,0],[.85*t,0],[1*t,7.6],[1.75*t,8.2],[1.75*t,10.2],[0,10.2]],1.3,y.blackMetal,.08),h(se(1.75,2,2.3,.12,y.blackMetal),.875*t,9.2,0),h(P(.12,1.8,2.1,y.knurl),.04*t,9.2,0));return n.rotation.z=-.09*t,n},e=ce(h(O(.55,.55,.7,y.blackMetal),2.4,5.2,0,0,0,Math.PI/2),h(Pt([[0,0],[.4,1.6],[.9,1.8],[.9,-1.8],[.4,-1.6]],.25,y.blackMetal),2.7,5.2,0,0,Math.PI/2,0));return ce(h(i(1),.08,0,0),h(i(-1),-.08,0,0),h(O(.22,.22,4.8,y.steelDark),0,5.2,0,0,0,Math.PI/2),e,h(O(.55,.55,1.6,y.blackMetal),0,.5,0,Math.PI/2),h(qn([[-1.2,2],[-1.8,3.5],[-1.2,4.8]],.12,y.steelDark),0,0,0))}function by(){let i=new xt;i.moveTo(-2,8),i.lineTo(4,8),i.lineTo(4,6.6),i.lineTo(-.6,6.6),i.quadraticCurveTo(-1.2,6.6,-1.2,5.8),i.lineTo(-1.2,-5.8),i.quadraticCurveTo(-1.2,-6.6,-.6,-6.6),i.lineTo(4,-6.6),i.lineTo(4,-8),i.lineTo(-2,-8),i.quadraticCurveTo(-3,-8,-3,-7),i.lineTo(-3,7),i.quadraticCurveTo(-3,8,-2,8);let e=ce(h(O(.4,.4,13,y.steel),0,-3.6),h(O(.9,.7,.5,y.steelDark),0,2.9),h(O(.3,.3,6,y.steel),0,-10.4,0,0,0,Math.PI/2),h(tt(new Ot(.45,14,10),y.steel),3,-10.4,0),h(tt(new Ot(.45,14,10),y.steel),-3,-10.4,0));e.position.x=2.6;let t=ce(Pt(i,1.4,y.red,.15),e);return t.userData.screw=e,t}function Sy(){let i=ce(h(P(48,.7,2.6,y.viceBlue),0,0,0),h(P(48,2.4,.6,y.viceBlue),0,-1.1,0)),e=ce(h(se(3,6,3.4,.3,y.viceBlue),22.5,1.8,0),h(O(.45,.45,7,y.steel),19.5,2.8,0,0,0,Math.PI/2),h(se(1.4,3.6,2.8,.2,y.steelDark),15.5,2.8,0),h(O(.25,.25,5,y.steel),24.5,2.8,0,Math.PI/2)),t=ce(h(se(3,6,3.4,.3,y.viceBlue),-14,1.8,0),h(O(.25,.25,4.4,y.steel),-14,-1,0,Math.PI/2));return ce(i,e,t)}function Ey(){let i=ce(),e=new ne({color:2768814,roughness:.38}),t=new ne({color:15909166,roughness:.45}),n=y.black,s=new ne({color:2829617,metalness:.5,roughness:.45}),r=new ne({color:9278620,metalness:.8,roughness:.35});i.add(h(P(.5,30,1.9,s),0,15,0));let a=ce(h(se(2.6,3.4,3.2,.5,e),0,-.2,.2),h(se(2.4,2.2,1.6,.4,n),0,-.4,1.7),h(se(2.4,1.8,7.4,.6,e),0,.6,-4.6),h(se(2.4,2.6,2.2,.6,e),0,1.4,-8.1),h(se(2.2,1.2,3.6,.3,e),0,1.8,-3.2,-.55,0,0),h(se(1.1,.5,1.1,.2,t),0,2.5,-7.3),h(se(3.2,.9,3.2,.35,n),0,2.9,-8.6)),o=p=>h(se(.08,2.6,3.4,.03,t),p,.4,-.6),l=ce(h(se(2.8,4.2,6.4,.6,e),0,.2,-.9),o(1.42),o(-1.42),h(se(2.4,1.8,4.6,.5,e),0,-.4,-5.6),h(se(3.2,.9,3.2,.35,n),0,-1.2,-8.4)),c=ce(h(se(2.1,2.2,7.4,.8,e),0,.5,3.7),h(se(2.2,1.4,6.2,.6,n),0,-.6,4.2));c.position.set(0,.6,1.6),c.rotation.x=-.28;let u=ce(h(se(.9,.55,4.6,.25,r),0,0,2.3));u.position.set(0,-1.9,1.9),u.rotation.x=-.12;let f=ce(l,c,u);return f.position.y=18,i.add(a,f),i.userData.mov=f,i}var ls=new ne({color:13225683,metalness:.7,roughness:.35});function wy(){return ce(h(P(10.4,2.6,.14,ls),0,6.85,-1.03),h(P(10.4,.14,2.2,ls),0,8.27,-2.06),h(P(10.4,2.6,.14,ls),0,6.85,.13),h(P(10.4,.14,2.2,ls),0,8.17,1.16))}function Ty(){let i=Hd();i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{let r=s.clone();return r.transparent=!0,r.opacity=.18,r.depthWrite=!1,r}),n.castShadow=!1)});let e=wy(),t=ce(i,e);return t.userData.anim=n=>{let s=n%4/4,r=a=>a*a*(3-2*a);e.position.y=s<.35?6*(1-r(s/.35)):s<.65?0:s<.9?6*r((s-.65)/.25):6},t}var ee={green:new ne({color:3107669,metalness:.35,roughness:.45}),grey:new ne({color:7306631,metalness:.45,roughness:.45}),blue:new ne({color:3104655,metalness:.35,roughness:.45}),cream:new ne({color:14275263,metalness:.25,roughness:.5}),orange:new ne({color:15234346,metalness:.25,roughness:.42}),yellow:new ne({color:15909166,metalness:.2,roughness:.45}),dark:new ne({color:2764082,metalness:.4,roughness:.5}),glass:new ne({color:2240576,metalness:.6,roughness:.12,transparent:!0,opacity:.75}),clear:new ne({color:13625077,metalness:.1,roughness:.05,transparent:!0,opacity:.28,depthWrite:!1}),grit:new ne({map:cs((i,e)=>{i.fillStyle="#4a3b2c",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++)i.fillStyle=Math.random()<.5?"#2c2219":"#6b5843",i.fillRect(Math.random()*e,Math.random()*e,1.6,1.6)},256,[4,1]),roughness:.95}),red:new ne({color:13772334,roughness:.4}),machRed:new ne({color:11874350,metalness:.35,roughness:.45}),lightOrange:new ne({color:15902821,metalness:.25,roughness:.5}),chevron:new ne({map:(()=>{let i=document.createElement("canvas");i.width=256,i.height=32;let e=i.getContext("2d");e.fillStyle="#1b1b1d",e.fillRect(0,0,256,32),e.fillStyle="#f2c12e";for(let n=-2;n<12;n++)e.beginPath(),e.moveTo(n*28,32),e.lineTo(n*28+14,32),e.lineTo(n*28+30,0),e.lineTo(n*28+16,0),e.fill();let t=new Ln(i);return t.colorSpace=Wt,t})(),roughness:.5}),glow:new ne({color:16734762,emissive:16726544,emissiveIntensity:1.2,roughness:.6}),powder:new ne({map:cs((i,e)=>{i.fillStyle="#e9eef2",i.fillRect(0,0,e,e);for(let t=0;t<4e3;t++)i.fillStyle=Math.random()<.5?"#cfd8df":"#ffffff",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,1.2,0,7),i.fill()},256,[2,2]),roughness:.9})},Zs=(i,e=y.steel,t=3)=>{let n=ce(h(new De(new rn(i,i*.09,10,36),e),0,0,0),h(O(i*.18,i*.18,i*.3,e),0,0,0,Math.PI/2));for(let s=0;s<t;s++){let r=s*2*Math.PI/t;n.add(h(P(i,i*.08,i*.08,e),Math.cos(r)*i/2,Math.sin(r)*i/2,0,0,0,r))}return n.add(h(O(i*.09,i*.09,i*.5,y.black),Math.cos(.3)*i,Math.sin(.3)*i,i*.25,Math.PI/2)),n},Ay=i=>ce(h(O(.45,.45,i,y.steel),0,i/2,0),h(tt(new Ot(1.1,18,12),y.black),0,i+.6,0)),Yn=()=>ce(h(O(1.4,1.4,1,ee.yellow),0,0,0,Math.PI/2),h(tt(new Ot(1.5,20,12,0,Math.PI*2,0,Math.PI/2),ee.red),0,0,.5,Math.PI/2));function zd(){let i=new xt;i.absarc(0,25,7,0,Math.PI,!1),i.absarc(0,-25,7,Math.PI,2*Math.PI,!1),i.holes.push(new tn().absarc(0,-25,6.4,0,-Math.PI,!0).absarc(0,25,6.4,Math.PI,0,!0));let e=Pt(i,15,ee.grit);return e.position.set(0,85,-4),e.rotation.y=-Math.PI/2,ce(h(P(44,3,40,ee.dark),0,1.5,0),h(se(40,48,36,1.5,ee.grey),0,27,0),h(se(30,36,1,.6,ee.grey),0,27,18.2),h(P(1,8,1.4,y.steelShiny),11,30,19),h(se(16,66,8,1,ee.grey),0,83,-16),e,h(O(6.2,6.2,15.4,y.steel,32),0,60,-4,0,0,Math.PI/2),h(O(6.2,6.2,15.4,y.steel,32),0,110,-4,0,0,Math.PI/2),h(se(15,46,7,.6,y.steelDark),0,85,-4),h(O(8,8,20,ee.yellow,28),-18,60,-4,0,0,Math.PI/2),h(se(20,11,22,1.2,ee.grey),0,116,-4),h(P(1,9,13,ee.grey),9.6,104,-4),h(P(1,9,13,ee.grey),-9.6,104,-4),h(se(30,2,20,.6,y.steel),0,58,13.6),h(P(.8,.1,18,ee.dark),6,59.05,13.6),h(se(6,7,8,.8,ee.grey),0,53.5,9),h(P(19,48,.6,y.steel),0,87,4.4),h(P(.6,48,8,y.steel),9.6,87,.7),h(P(.6,48,8,y.steel),-9.6,87,.7),(()=>{let t=new De(new Gn(19,3.2),ee.chevron);return t.position.set(0,64.7,4.72),t})(),h(vi(),-4,44,18.6),h(Yn(),8,44,18.6))}ee.go=new ne({color:3126106,roughness:.4});var vi=()=>ce(h(se(7,3.6,1.6,.4,y.black),0,0,0),h(O(1,1,.8,ee.go),-1.6,0,1,Math.PI/2),h(O(1,1,.8,ee.red),1.6,0,1,Math.PI/2));function Gd(){let i=new xt;i.moveTo(-15,-14),i.lineTo(15,-14),i.lineTo(15,14),i.lineTo(-15,14),i.closePath();for(let a of[-6.3,6.3]){let o=new tn;o.moveTo(a+.65,-4.5),o.lineTo(a+.65,4.5),o.absarc(a,4.5,.65,0,Math.PI,!1),o.lineTo(a-.65,-4.5),o.absarc(a,-4.5,.65,Math.PI,2*Math.PI,!1),i.holes.push(o)}let e=ce(h(se(40,5,32,1,ee.grey),0,2.5,0),h(O(3.6,3.6,110,y.steel,28),0,58,-9),h(Pt(i,2.6,ee.grey,.3),0,46,3,-Math.PI/2),h(se(10,6,10,1,ee.grey),0,43,-8),h(O(.6,.6,6,y.steel),7,43,-8,0,0,Math.PI/2),h(se(24,22,40,2,ee.machRed),0,100,0),h(se(18,4,32,1.5,ee.machRed),0,112,-2),h(O(8,8,24,ee.machRed,28),0,98,-28,Math.PI/2),h(O(2.4,2.4,10,y.steel),0,84,10),h(nn([[2.2,0],[2.2,4],[1.6,5.5],[.9,6.2],[0,6.3]].reverse().map(([a,o])=>[a,-o]),y.steelShiny,28),0,79,10),h(Ud(),0,75.5,10,Math.PI)),t=ce(h(O(1.8,1.8,2.2,y.steelDark),0,0,0,0,0,Math.PI/2));for(let a=0;a<3;a++){let o=Ay(13);o.rotation.x=.5+a*2*Math.PI/3,t.add(o)}t.position.set(17.2,95,6),e.add(h(O(1,1,4.4,y.steel),14.2,95,6,0,0,Math.PI/2),t);let n=-8,s=22.5,r=Math.hypot(n,s-10);return e.add(h(O(3,3,1.4,y.steelDark),0,86,10),h(P(r,1.2,1.4,y.steelDark),n/2,86,(10+s)/2,0,Math.atan2(-(s-10),n),0),h(O(.38,.38,19,y.knurl),n,95.5,s),h(P(3.6,1.6,4.6,ee.machRed),n,96,22),h(O(1,1,.8,y.brass,6),n,97.3,s),h(O(1,1,.8,y.brass,6),n,98.3,s),h(P(.2,9,1.6,y.steelShiny),n-2.2,94,20.2)),e.add(h(Yn(),6,104,20.4),h(vi(),-12.4,101,6,0,-Math.PI/2,0),h(new De(new Nt(5,5,12,28,1,!0),ee.clear),0,80,10)),e}function Vd(){return ce(h(se(26,8,56,2,ee.blue),0,4,0),h(se(20,24,10,2,ee.blue),0,18,-22),h(se(9,8,44,2,ee.blue),0,31,-3),h(se(4,6,6,.8,ee.blue),0,31,22),h(O(1.2,1.2,2,y.black),0,36,-23),h(se(28,2,30,.8,y.steel),0,20,14),h(se(6,11,6,1,ee.blue),0,13.5,14),h(O(1.4,1.4,.1,y.black),0,21.05,22),h(O(.06,.06,18,y.steelShiny,8),0,19,22),h(O(.35,.35,6.3,y.steel),1.2,24.85,22),h(P(2.6,.3,1.6,y.steel),1.2,21.55,22.4),h(P(3.8,6,.2,ee.clear),0,25,24.8),h(P(.2,6,3.6,ee.clear),1.9,25,23),h(P(.2,6,3.6,ee.clear),-1.9,25,23),h(qn([[-1.5,30,22],[-3,27,25],[-.8,23,23.5]],.3,ee.clear),0,0,0),h(O(7,7,14,ee.dark,24),8,12,-18,0,0,Math.PI/2),h(vi(),0,4,28.4),h(Yn(),8,4,28.4))}function Wd(){let i=ce(h(se(24,40,30,1.5,ee.cream),-34,20,0),h(se(24,40,30,1.5,ee.cream),34,20,0),h(se(96,4,34,1,ee.dark),0,42,-2),h(se(92,10,20,1,ee.cream),0,49,0),h(P(92,1,2,y.steelShiny),0,54.5,-6),h(P(92,1,2,y.steelShiny),0,54.5,6),h(se(28,30,26,2,ee.cream),-34,69,0),h(O(1.8,1.8,1.4,ee.dark),-26,78,13.2,Math.PI/2),h(O(1.8,1.8,1.4,ee.dark),-38,78,13.2,Math.PI/2),h(O(8,8,7,y.steel,36),-16.5,66,0,0,0,Math.PI/2),h(O(.6,.6,90,y.steel),0,46,10.5,0,0,Math.PI/2));for(let n=0;n<3;n++){let s=n*2*Math.PI/3;i.add(h(P(3,2.2,2.6,y.steelDark),-12.5,66+Math.cos(s)*5.6,Math.sin(s)*5.6,s,0,0))}i.add(h(O(1.6,1.6,10,y.brass),-7.5,66,0,0,0,Math.PI/2));let e=ce(h(se(16,6,24,.8,ee.cream),0,57,0),h(se(16,12,4,.8,ee.cream),0,49,12.5),h(se(10,3,14,.6,ee.cream),0,61.5,5),h(se(6,3,7,.5,ee.cream),0,64.5,7),h(se(4.4,4,4.4,.4,y.steelDark),0,68,8),h(P(1,1,5,y.steel),0,67.6,5),h(Zs(3.4),3,49,17.6),h(Zs(2.4),0,61.5,15.4),h(O(.4,.4,3,y.steel),3,49,15.6,Math.PI/2),h(O(.35,.35,3.4,y.steel),0,61.5,13.4,Math.PI/2));e.position.x=8,i.add(e);let t=ce(h(se(14,18,14,1.2,ee.cream),0,64,0),h(O(1.8,1.8,8,y.steel),-9,66,0,0,0,Math.PI/2),h(O(0,.6,2.4,y.steelShiny),-14,66,0,0,0,Math.PI/2),h(Zs(3.6),9,66,0));return t.children[3].rotation.y=Math.PI/2,t.position.x=34,i.add(t,h(Yn(),-24,72,13.4),h(vi(),-34,63,13.4)),i}function Xd(){let i=ce(h(se(6,40,30,1,ee.green),-40,20,0),h(se(6,40,30,1,ee.green),40,20,0),h(P(86,3,6,ee.green),0,42,-4),h(P(86,3,6,ee.green),0,42,4),h(se(18,22,18,2,ee.green),-34,54,0),h(O(7,7,18,ee.dark,28),-34,54,-16,Math.PI/2),h(O(1.4,1.4,6,y.steel),-22,58,0,0,0,Math.PI/2),h(O(2.6,2.6,1,y.steel,28),-19.5,58,0,0,0,Math.PI/2));for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;i.add(h(P(.6,.5,.5,y.steelShiny),-18.8,58+Math.cos(r)*1.6,Math.sin(r)*1.6))}let e=ce(h(se(12,16,12,1.2,ee.green),0,51,0),h(O(1.4,1.4,6,y.steel),-7,58,0,0,0,Math.PI/2),h(O(0,1,2,y.steelShiny),-10.5,58,0,0,0,Math.PI/2),h(Zs(6.8,y.black),8,58,0));e.children[3].rotation.y=Math.PI/2,e.position.x=29;let t=h(P(37,5,5,y.beech),-.5,58,0),n=ce(h(se(6,3,14,.6,y.steelDark),0,45,6),h(O(.9,.9,9.5,y.steel),0,51.25,4.4),h(P(26,1.2,1.4,y.steel),0,56.6,4.4),h(O(.6,.6,3,y.black),3,46,13,Math.PI/2));return ce(i,e,t,n,h(Yn(),-34,60,9.4),h(vi(),-34,50,9.4))}function qd(){let i=ce(h(O(1.8,1.8,2.4,y.steelDark),0,0,0,0,0,Math.PI/2),h(O(.8,.8,22,y.steel),1.2,6,9.5,1.1,0,0),h(tt(new Ot(2.2,18,12),y.black),1.2,11.2,19.4));return i.position.set(8.6,62,0),ce(h(se(34,5,30,1,ee.grey),0,2.5,0),h(se(6,5,8,.8,ee.grey),0,7.5,4),h(se(30,3,22,.8,y.steel),0,10.5,4),h(se(30,6,2,.5,y.steel),0,15,1),h(P(26,6,4,y.beech),0,15,4),h(se(18,6,1.6,.4,y.steel),0,15,6.8),h(se(6,6,2,.5,ee.grey),0,15,14),h(O(.6,.6,7,y.steel),0,15,11,Math.PI/2),h(Zs(3),0,15,15.6),h(se(2,5,6,.4,ee.grey),17,5,4),h(O(.8,.8,6,y.steel),20,5,4,0,0,Math.PI/2),h(Zs(5.4),23.2,5,4,0,Math.PI/2,0),h(O(3,3,70,y.steel,24),0,40,-11),h(se(14,18,14,1.5,ee.orange),0,56,-3),h(O(6.5,6.5,22,ee.orange,28),0,74,-3),h(se(10,4,10,1,ee.dark),0,86,-3),h(se(6,5,6,.6,ee.grey),0,47,4),h(P(1.6,8.5,1.6,y.steelShiny),0,40.25,4),h(P(1.65,2.4,.8,ee.dark),0,41.5,4),h(O(1.13,.85,.6,y.steelShiny,4),0,35.7,4,0,Math.PI/4,0),h(O(.6,.6,2,y.steelDark),0,34.9,4),h(O(.6,0,1,y.steelShiny),0,33.4,4),h(P(.3,15,3,y.black),7.05,56,0),i,h(P(4,1.6,4,ee.orange),-9,48,-3),h(O(.38,.38,11.3,y.knurl),-9,41.85,-3),h(O(1,1,.8,y.brass,6),-9,46.6,-3),h(O(1,1,.8,y.brass,6),-9,45.6,-3),h(O(4,4,2.4,ee.grey),0,15.6,-11),h(P(12,1.6,2,ee.grey),-4.5,15.6,-7,0,Math.atan2(-8,-9)+Math.PI,0),h(P(3.4,1.2,3.4,y.steelDark),-9,16.8,-3),h(Yn(),0,60,4.2),h(vi(),-7.2,56,-3,0,-Math.PI/2,0))}function Yd(){let i=new ne({map:cs((v,R)=>{v.fillStyle="#b8323a",v.fillRect(0,0,R,R);for(let A=0;A<5e3;A++)v.fillStyle=Math.random()<.5?"#952630":"#d9545b",v.fillRect(Math.random()*R,Math.random()*R,1.4,1.4)},256,[3,3]),roughness:.95}),e=14,t=31.2,n=new De(new Gn(31,25,28,22),i);n.rotation.x=-Math.PI/2,n.position.set(e,t,0);let s=n.geometry.attributes.position,r=s.array.slice(),a=ce(h(se(36,1.2,30,.5,ee.lightOrange),0,.6,15),h(P(10,1,1.2,y.black),0,1.5,29.2));a.position.set(e,34,-15),a.rotation.x=-1.85;let o=ce(h(P(80,4,36,ee.dark),-3,2,0),h(se(36,26,30,1.2,ee.lightOrange),e,17,0),h(P(36,4,2.5,ee.lightOrange),e,32,13.75),h(P(36,4,2.5,ee.lightOrange),e,32,-13.75),h(P(2.5,4,25,ee.lightOrange),e-16.75,32,0),h(P(2.5,4,25,ee.lightOrange),e+16.75,32,0),h(P(31,.1,25,ee.dark),e,30.05,0),n,a,h(O(.5,.5,34,y.steel),e,34,-15,0,0,Math.PI/2),h(se(30,40,30,1.5,ee.lightOrange),-20,24,0),h(se(24,26,1.4,.8,ee.lightOrange),-20,23,15.6),h(P(14,8,.4,ee.glass),-20,27,16.4),h(P(12,.6,.3,ee.glow),-20,25.5,16.1),h(O(.7,.7,10,y.steelShiny),-10,23,17.8),h(P(1,1,1.6,y.steelShiny),-10,27.5,16.9),h(P(1,1,1.6,y.steelShiny),-10,18.5,16.9),h(O(1.6,1.6,1,y.black),-28,40,15.4,Math.PI/2),h(O(.7,.7,.6,ee.red),-23,40,15.3,Math.PI/2),h(vi(),e,12,15.4),h(se(8,7,8,1,ee.blue),42,3.5,6),h(qn([[42,7,6],[42,10,2],[37,8,1],[32,8,1]],.7,y.black),0,0,0)),l=1400,c=new zn(new Ot(.13,5,3),new ne({roughness:.8}),l),u=new Dt,f=[];for(let v=0;v<l;v++)f.push([e+(Math.random()-.5)*30,(Math.random()-.5)*24,Math.random()*9,.6+Math.random()*1.6,.3+Math.random()*Math.random()*4.2,Math.random()*6]),c.setColorAt(v,new rt().setHSL(.99+Math.random()*.02,.62,.4+Math.random()*.22));let p=document.createElement("canvas");p.width=p.height=64;let d=p.getContext("2d"),_=d.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(230,90,95,.9)"),_.addColorStop(1,"rgba(230,90,95,0)"),d.fillStyle=_,d.fillRect(0,0,64,64);let M=160,g=new Float32Array(M*3),m=[];for(let v=0;v<M;v++)m.push([e+(Math.random()-.5)*28,(Math.random()-.5)*22,Math.random()*9,.3+Math.random()*.6]);let b=new Xt;b.setAttribute("position",new bn(g,3));let E=new xr(b,new Ds({map:new Ln(p),size:5,transparent:!0,opacity:.28,depthWrite:!1,sizeAttenuation:!0}));return o.add(c,E),o.userData.anim=v=>{for(let R=0;R<s.count;R++){let A=r[R*3],x=r[R*3+1];s.setZ(R,.05*Math.sin(A*2.3+v*7)+.04*Math.sin(x*2.9-v*6.3))}s.needsUpdate=!0,n.geometry.computeVertexNormals(),f.forEach(([R,A,x,w,k,I],U)=>{let F=.5-.5*Math.cos(v*w*2.2+x);u.position.set(Math.min(e+15.2,Math.max(e-15.2,R+.9*Math.sin(v*w+I))),t+.15+k*F+.25*Math.abs(Math.sin(v*9*w+x)),Math.max(-12,Math.min(12,A+.9*Math.cos(v*w*.8+I)))),u.updateMatrix(),c.setMatrixAt(U,u.matrix)}),c.instanceMatrix.needsUpdate=!0,m.forEach(([R,A,x,w],k)=>{g[k*3]=R+1.5*Math.sin(v*w+x),g[k*3+1]=t+1+2*(.5-.5*Math.cos(v*w*1.3+x)),g[k*3+2]=A+1.5*Math.cos(v*w*.9+x)}),b.attributes.position.needsUpdate=!0},o.userData.anim(0),o}function Zd(){ee.wire=new ne({color:16723992,emissive:16718336,emissiveIntensity:1.4,roughness:.5});let i=ce(h(O(.09,.09,60,ee.wire,8),0,9.3,-6.6,0,0,Math.PI/2),h(O(.09,.09,60,ee.wire,8),0,9.3,-5.4,0,0,Math.PI/2)),e=ce(h(P(62,.4,6.4,y.black),0,1.4,3.2),h(P(62,1.4,.3,y.black),0,.7,6.3),h(P(.3,1.4,6.4,y.black),-30.85,.7,3.2),h(P(.3,1.4,6.4,y.black),30.85,.7,3.2));e.position.set(0,9.6,-9.2);let t=ce(h(se(70,3,22,.8,y.black),0,1.5,0),h(se(66,6,18,.8,ee.yellow),0,6,0),h(P(64,.5,11,ls),0,9.25,2.5),h(P(62,.2,2.6,ee.dark),0,9.1,-6),h(P(62,.6,1.6,ls),0,9.3,-3.9),h(P(62,.6,1.6,ls),0,9.3,-8.1),i,e,h(O(.35,.35,62,y.steel),0,9.6,-9.2,0,0,Math.PI/2),h(se(4,9,20,.6,y.black),-34,5,0),h(se(4,9,20,.6,y.black),34,5,0),h(se(5,3,3,.4,y.black),-30,6,10.2),h(O(.6,.6,.6,ee.red),-30,6,11.8,Math.PI/2),h(qn([[-36,4,-6],[-42,3,-10],[-50,1,-12]],.4,y.black),0,0,0)),n=s=>s*s*(3-2*s);return t.userData.anim=s=>{ee.wire.emissiveIntensity=1.5+1.1*Math.sin(s*4);let r=s%7/7;e.rotation.x=-Math.PI*.97*(r<.35?1:r<.47?1-n((r-.35)/.12):r<.8?0:n((r-.8)/.12>1?1:(r-.8)/.12))},t.userData.anim(0),t}ee.copper=new ne({color:13136954,metalness:.9,roughness:.3});function Ry(){let i=new ne({color:15909166,metalness:.25,roughness:.45}),e=new ne({color:1908257,metalness:.35,roughness:.5}),t=new ne({color:16773824,emissive:16765562,emissiveIntensity:3,transparent:!0,opacity:0}),n=ce(h(se(24,3,30,1,e),0,1.5,-4),h(se(22,17,24,1.2,i),0,11,-6),h(se(22.6,3,24.6,1,e),0,20.5,-6),h(P(.3,9,16,e),11.2,11,-6),h(P(.3,9,16,e),-11.2,11,-6),h(se(12,7,1.4,.5,e),0,12,6.2),h(O(1.6,1.6,1,y.steelShiny),-3,12.5,7.2,Math.PI/2),h(Yn(),3.4,12.5,7.2),h(O(1.4,1.4,24,y.steelShiny),0,7,14,Math.PI/2),h(O(2,2,4,y.steelShiny),0,7,26),h(O(1,1,4,ee.copper),0,10.6,26),h(O(.3,1,1.4,ee.copper),0,13.2,26),h(P(.6,.25,10,y.steel),0,14,25)),s=new je;s.position.set(0,24,-8),n.add(s),s.add(h(P(5,4,6,y.steel),0,0,0),h(O(1.4,1.4,34,y.steelShiny),0,0,17,Math.PI/2),h(O(2,2,4,y.steelShiny),0,0,34),h(O(1,1,4,ee.copper),0,-3.6,34),h(O(1,.3,1.4,ee.copper),0,-6.2,34),h(O(.7,.7,30,y.steelShiny),0,7.5,13,1.1,0,0),h(O(1.4,1.4,7,e),0,15.8,29.5,1.1,0,0));let r=h(tt(new Ot(.7,12,8),t),0,14.3,26);return n.add(r),n.userData.anim=a=>{let o=a%4/4,l=f=>f*f*(3-2*f),c=o<.3?l(o/.3):o<.6?1:o<.85?1-l((o-.6)/.25):0;s.rotation.x=.012+.09*c;let u=o>.32&&o<.5?Math.abs(Math.sin((o-.32)*60)):0;t.opacity=u,r.scale.setScalar(.6+u)},n}function Cy(i=104,e=72){let t=new ne({color:9076594,roughness:.8}),n=new ne({color:3948614,metalness:.5,roughness:.4}),s=new xt;s.moveTo(0,0),s.lineTo(i,0),s.lineTo(0,i),s.closePath();let r=Pt(s,3,t);r.rotation.x=Math.PI/2,r.position.y=e-1.5;let a=ce(r);for(let[o,l]of[[4,4],[i-8,4],[4,i-8]])a.add(h(P(3,e-3,3,n),o,(e-3)/2,l));return a.add(h(P(i-14,2,2,n),i/2-3,14,4),h(P(2,2,i-14,n),4,14,i/2-3)),a}var ki=new ne({color:12856110,metalness:.35,roughness:.32}),yi=new ne({color:9313055,metalness:.25,roughness:.5}),Ys=new ne({color:15264494,metalness:1,roughness:.18}),Py=new ne({color:1908e3,roughness:.6});function Kd(i,e=0){let t=new je;t.add(i),i.updateMatrixWorld(!0);let n=new kt().setFromObject(i).getSize(Oe(0,0,0));n.z<=n.x&&n.z<=n.y?i.rotation.x=-Math.PI/2:n.x<=n.y&&n.x<=n.z&&(i.rotation.z=Math.PI/2);let s=new je;s.add(t),t.rotation.y=e,s.updateMatrixWorld(!0);let r=new kt().setFromObject(t),a=r.getCenter(Oe(0,0,0));return t.position.set(-a.x,-r.min.y,-a.z),s}function Iy(i){let e=r=>{let a=new xt;return r.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.closePath(),a},t=r=>{let a=new tn;return r.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.closePath(),a},n,s=5;switch(i){case"T":n=e([[0,6],[0,7],[5,7],[5,6],[3,6],[3,0],[2,0],[2,6]]);break;case"O":{n=new xt;let r=2.2;n.moveTo(r,0),n.lineTo(5-r,0),n.absarc(5-r,r,r,-Math.PI/2,0),n.lineTo(5,7-r),n.absarc(5-r,7-r,r,0,Math.PI/2),n.lineTo(r,7),n.absarc(r,7-r,r,Math.PI/2,Math.PI),n.lineTo(0,r),n.absarc(r,r,r,Math.PI,Math.PI*1.5);let a=new tn,o=1.3;a.moveTo(1+o,1),a.absarc(1+o,1+o,o,-Math.PI/2,-Math.PI,!0),a.lineTo(1,6-o),a.absarc(1+o,6-o,o,Math.PI,Math.PI/2,!0),a.lineTo(4-o,6),a.absarc(4-o,6-o,o,Math.PI/2,0,!0),a.lineTo(4,1+o),a.absarc(4-o,1+o,o,0,-Math.PI/2,!0),n.holes.push(a);break}case"L":n=e([[0,0],[4.5,0],[4.5,1],[1,1],[1,7],[0,7]]),s=4.5;break;case"I":n=e([[0,0],[1.1,0],[1.1,7],[0,7]]),s=1.1;break;case"B":n=e([[0,0],[3.8,0],[5,1.2],[5,2.7],[4.2,3.5],[5,4.3],[5,5.8],[3.8,7],[0,7]]),n.holes.push(t([[1,1],[1,3],[3.6,3],[4,2.6],[4,1.4],[3.6,1]]),t([[1,4],[1,6],[3.6,6],[4,5.6],[4,4.4],[3.6,4]]));break;case"R":n=e([[0,0],[1,0],[1,3],[2.6,3],[4,0],[5.2,0],[3.7,3.15],[4.2,3.5],[5,4.3],[5,5.8],[3.8,7],[0,7]]),n.holes.push(t([[1,4],[1,6],[3.6,6],[4,5.6],[4,4.4],[3.6,4]])),s=5.2;break;case"A":n=e([[0,0],[1.15,0],[1.6,1.8],[3.4,1.8],[3.85,0],[5,0],[3.05,7],[1.95,7]]),n.holes.push(t([[1.9,2.8],[2.5,5.2],[3.1,2.8]]));break;case"Y":n=e([[0,7],[1.2,7],[2.5,4.4],[3.8,7],[5,7],[3,3.2],[3,0],[2,0],[2,3.2]]);break;default:return{s:null,w:3}}return{s:n,w:s}}function Dy(i,e,t,n=.35){let s=new je,r=0,a=e/7;for(let l of i){let{s:c,w:u}=Iy(l);if(c){let f=new De(new gn(c,{depth:n/a,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:2}),t);f.position.x=r,s.add(f)}r+=u+1.1}s.scale.setScalar(a);let o=new je;return s.position.x=-(r-1.1)*a/2,o.add(s),o}var Ly=new ne({color:1315862,metalness:.4,roughness:.35});function Ny(i="TOOL LIBRARY"){let r=new je,a=ce(h(se(46,1.2,22,.5,ki),0,.6,0),h(se(46,20,.8,.3,ki),0,20/2,22/2-.8/2),h(se(46,20,.8,.3,ki),0,20/2,-22/2+.8/2),h(se(.8,20,22,.3,ki),46/2-.8/2,20/2,0),h(se(.8,20,22,.3,ki),-46/2+.8/2,20/2,0),h(P(46-2*.8,.2,22-2*.8,yi),0,1.25,0),h(P(46-2*.8,18,.1,yi),0,20/2,-22/2+.8+.05),h(P(46-2*.8,18,.1,yi),0,20/2,22/2-.8-.05),h(P(.1,18,22-2*.8,yi),46/2-.8-.05,20/2,0),h(P(.1,18,22-2*.8,yi),-46/2+.8+.05,20/2,0)),o=Dy(i,3.6,Ly);o.position.set(0,20*.5,22/2+.02),a.add(o);for(let _ of[-1,1])a.add(h(P(3,4,.8,Ys),_*20,20-3.5,22/2+.3),h(P(2.2,1.4,1.2,Ys),_*20,20-1.2,22/2+.5));a.add(h(P(43,.5,.4,yi),0,4,22/2+.15),h(P(43,.5,.4,yi),0,20-2.6,22/2+.15)),r.add(a);let l=new je,c=46/2-.8-.6,u=22/2-.8-.6,f=(_,M,g,m,b,E=1)=>{let v=Kd(_,b);v.scale.setScalar(E),v.updateMatrixWorld(!0);let R=new kt().setFromObject(v),A=R.getSize(Oe(0,0,0)),x=Math.min(1,2*c/A.x,2*u/A.z);v.scale.multiplyScalar(x*.96),v.updateMatrixWorld(!0),R=new kt().setFromObject(v);let w=(R.max.x-R.min.x)/2,k=(R.max.z-R.min.z)/2;v.position.set(Math.max(-c+w,Math.min(c-w,M)),g,Math.max(-u+k,Math.min(u-k,m))),v.updateMatrixWorld(!0);let I=new kt().setFromObject(v);I.max.y>20-1.2&&(v.position.y-=I.max.y-(20-1.2)),l.add(v)};f(Zc(),0,1.4,1,0,1.05),f(Id(),-1,3.4,-3,0),f(qc(),-2,6,-7,0),f(Ld(),4,6.6,4,.08),f(Od(),-10,7,1,.15),f(Jc(),-12,10,-3,.2),f(Bd(),12,9.8,-4,.4),f(Yc(),10,11,4,.25),f(Kc(),-2,13.2,6,Math.PI/2+.3),f(al(),4,13.6,-5,Math.PI/2-.2),f(al(),-6,14,-6,Math.PI/2+.25),f(cl(),-14,14,5,.5),f(Pd(),15,14.4,6,.9),r.add(l);let p=[];for(let _ of[-1,1]){let M=ce(h(se(22.4,6,21,1,ki),0,3,0),h(P(22.6,1.2,21.4,ki),0,.6,0),h(P(20,.5,18.5,yi),0,6.01,0),h(P(.5,5,18.5,yi),_*-3,3.6,0));M.add(h(O(.45,.45,3,y.brass),_*5,6.6,-3,0,0,Math.PI/2),h(O(.45,.45,3,y.brass),_*5,6.6,-1,0,0,Math.PI/2),h(P(4,.8,2,y.steelShiny),_*7,6.5,4)),M.add(h(se(46/2-.6,1.2,21,.6,ki),0,6.6,0));let g=h(P(.8,9,1,Ys),0,0,0),m=h(P(.8,9,1,Ys),0,0,0);r.add(g,m),r.add(M),p.push({t:M,sx:_,arm1:g,arm2:m})}let d=ce(h(O(.45,.45,7,Ys),-11,4,0),h(O(.45,.45,7,Ys),11,4,0),h(O(1.1,1.1,22,Py),0,7.5,0,0,0,Math.PI/2));return r.add(d),r.userData.open=_=>{_=Math.max(0,Math.min(1,_));let M=_*_*(3-2*_);p.forEach(({t:g,sx:m,arm1:b,arm2:E})=>{let v=m*46/4,R=v+m*46*.5*M,A=20+.2+7*Math.sin(M*Math.PI)*.8-1.2*M;g.position.set(R,A,0);let x=m*46*.18,w=17,k=R-m*2,I=A+1.5,U=Math.hypot(k-x,I-w);[b,E].forEach((F,N)=>{F.scale.y=U/9,F.position.set((x+k)/2,(w+I)/2,(N?-1:1)*(22/2+.25)),F.rotation.z=Math.atan2(-(k-x),I-w),F.visible=_>.02})}),d.position.y=20,d.visible=_<.05},r.userData.open(0),r}function Uy(i={}){let a=ce(h(se(120,6,48,.6,Dd),0,78-6/2,0));for(let l of[-1,1])for(let c of[-1,1])a.add(h(P(6,72,6,y.beech),l*(120/2-8),72/2,c*(48/2-6)));for(let l of[-1,1])a.add(h(P(110,6,3,y.beech),0,69,l*(48/2-4.5)));a.add(h(P(110,2.5,38,y.beech),0,16,0));for(let l of[-1,1])a.add(h(P(4,6,38,y.beech),l*(120/2-8),16,0));if(!i.bare){let l=kd();l.position.set(-120/2+24,78-4.5,48/2+1),a.add(l)}let o=(l,c,u,f,p=78,d=!0)=>{let _=d?Kd(l,f):(()=>{let M=new je,g=new je;g.add(l),M.add(g),g.rotation.y=f,M.updateMatrixWorld(!0);let m=new kt().setFromObject(g),b=m.getCenter(Oe(0,0,0));return g.position.set(-b.x,-m.min.y,-b.z),M})();return _.position.set(c,p,u),a.add(_),_};if(!i.bare){o(Zc(),18,4,.25),o(Yc(),-20,-10,-.4),o(Jc(),40,-12,1.1),o(Kc(),-2,12,-.9),o(qc(),5,-14,.1),o(cl(),-38,-8,.7);let l=h(P(34,2,4.5,y.beech),-28,79,10,0,.15,0);a.add(l)}return i.bare||(o(Nd(),-25,0,.2,17.25,!1),o(Cd(),12,-4,-.3,17.25,!1),a.add(h(P(30,4.5,9,y.beech),30,19.5,8,0,.1,0),h(P(22,2,4.5,y.beech),-8,18.3,10,0,-.2,0))),a}function Qr(i,e,t){let n=new ne({color:9076594,roughness:.8}),s=new ne({color:3948614,metalness:.5,roughness:.4}),r=ce(h(P(i,3,e,n),0,t-1.5,0));for(let a of[-1,1])for(let o of[-1,1])r.add(h(P(3,t-3,3,s),a*(i/2-3),(t-3)/2,o*(e/2-3)));return r.add(h(P(i-6,2,e-6,s),0,14,0)),r}function Jd(i={}){let e=new je,t=470,n=370,s=new ne({color:5987940,roughness:.92}),r=new ne({color:6975093,roughness:.9});e.add(h(P(t,4,n,s),0,-2,0),h(P(210,.3,150,r),0,.15,15));let a=[],o=[];e.userData.items=o;let l=(c,u,f,p=0,d=0,_)=>(c.rotation.y=p,c.position.set(u,d,f),e.add(c),c.userData.anim&&a.push(c.userData.anim),_&&(c.userData.key=_,o.push({key:_,obj:c})),c);i.noBench||l(Uy(),0,15,0,0,"bench"),l(Wd(),-75,-150,0,0,"centreLathe"),l(Xd(),70,-150,0,0,"woodLathe"),l(Gd(),-200,-12,Math.PI/2,0,"pillarDrill"),l(zd(),-200,85,Math.PI/2,0,"beltSander"),l(Qr(60,46,72),198,-55),l(qd(),198,-55,-Math.PI/2,72,"mortiser"),l(Qr(60,46,72),198,40),l(Vd(),198,40,-Math.PI/2,72,"fretSaw"),l(Qr(90,40,72),-80,155),l(Zd(),-80,155,0,72,"stripHeater"),l(Yd(),75,150,0,0,"fluidiser");{let c=Cy(),u=Ry();u.position.set(30,72,30),u.rotation.y=Math.PI/4,u.scale.setScalar(1.35),c.add(u),c.userData.anim=u.userData.anim,l(c,-233,-183,0,0,"spotWelder")}return e.userData.anim=c=>a.forEach(u=>u(c)),e}var ht={cream:new ne({color:15327951,metalness:.25,roughness:.5}),teal:new ne({color:2914939,metalness:.35,roughness:.45}),glass:new ne({color:13625077,transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1}),hot:new ne({color:16734762,emissive:16726544,emissiveIntensity:.9,roughness:.6}),sheet:new ne({color:15921906,roughness:.4,transparent:!0,opacity:.92}),granule:new ne({color:4891615,roughness:.6}),alu:new ne({color:12896976,metalness:.75,roughness:.32}),cavity:new ne({color:3817286,metalness:.6,roughness:.4,side:mn}),kayak:new ne({color:15226410,roughness:.35,metalness:.05}),powder:new ne({color:15966330,roughness:.9}),ovenIn:new ne({color:2761760,emissive:16734746,emissiveIntensity:0,roughness:.8}),win:new ne({color:2234902,emissive:16738848,emissiveIntensity:0,roughness:.2,metalness:.3}),screen:new ne({color:8378111,emissive:2779784,emissiveIntensity:.8})},qe=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function bd(i){let e=new ne({color:i,roughness:.3}),t=ce(h(se(12,7.2,6,.4,e),0,0,0));for(let n=0;n<4;n++)for(let s=0;s<2;s++)t.add(h(O(1.1,1.1,1.2,e,16),-4.5+n*3,4.2,-1.5+s*3));return t}function Fy(){let i=new ne({color:10270936,metalness:.3,roughness:.45}),e=new ne({color:15659250,roughness:.5}),t=new ne({color:2043755,roughness:.5}),n=new ne({color:15909166,metalness:.2,roughness:.45}),s=new ne({color:15895608,roughness:.45,side:mn}),r=new je;r.add(h(P(48,2,80,i),0,2,-20),h(P(48,50,2,i),0,26,-59),h(P(2,50,80,i),23,26,-20),h(P(2,18,80,i),-23,10,-20),h(P(2,32,36,i),-23,35,-41),h(P(.6,32,42,ht.glass),-23,35,0),h(P(2.4,1.4,44,y.steelDark),-23.2,19.4,0),h(P(48,30,2,i),0,16,21),h(P(44,19,.6,ht.glass),0,41,21),h(P(48,1.4,2.4,y.steelDark),0,31.4,21.2),h(P(44,46,1,ee.dark),0,26,-23),h(P(44,.4,42,ee.dark),0,3.2,0),h(P(48,2,6,y.steel),0,51.5,18),h(P(48,2,6,y.steel),0,51.5,-20),h(P(6,2,36,y.steel),21,51.5,-1),h(P(6,2,36,y.steel),-21,51.5,-1),h(P(48,2,36,i),0,51.5,-41));for(let X of[-20,20])for(let q of[-56,28])r.add(h(O(2,2,2,y.black),X,1,q));let a=ce(h(P(.4,4,.2,y.black),0,1.6,0));a.position.set(-15,22,33.6),r.add(h(se(52,26,12,1.5,e),0,15,27),h(P(44,6,.3,t),0,8,33.1),h(P(16,2,.3,new ne({color:12178414})),12,8,33.3),h(O(4,4,1,y.black),-15,22,33,Math.PI/2),h(O(3.5,3.5,.2,y.steelShiny),-15,22,33.6,Math.PI/2),a,h(Yn(),19,22,33.2),h(P(3,2,.6,ee.red),-20,15,33.2));for(let X=0;X<4;X++)r.add(h(O(1.8,2.2,2.2,y.black,20),-6+X*6,16,34,Math.PI/2),h(P(.4,1.6,.4,y.steelShiny),-6+X*6,16.6,35.2));r.add(h(P(8,3,.3,ee.machRed),-4,22,33.2));for(let X=0;X<3;X++)r.add(h(P(2,2,.4,new ne({color:16747066,emissive:16734736,emissiveIntensity:.5})),-6.4+X*2.4,22,33.4));let o=ce(h(P(34,2,26,y.steelDark),0,0,0),h(O(2,2,40,y.steelDark),0,-20,0),h(P(30,4,22,y.beech),0,3,0)),l=[];for(let X of[-9.5,0,9.5])for(let q of[-5,5])l.push([X,q]),o.add(h(se(7,5,7,1.2,y.beech),X,7.5,q));o.position.y=31,r.add(o);let c=new ne({color:5909018,emissive:16728080,emissiveIntensity:0,roughness:.6}),u=ce(h(se(46,10,38,1.5,i),0,0,0),h(P(46,9,.4,n),0,0,19.2),h(O(.8,.8,34,y.black),0,0,21.4,0,0,Math.PI/2),h(P(1.4,1.4,2.4,y.black),-16,0,20.2),h(P(1.4,1.4,2.4,y.black),16,0,20.2),h(P(40,.6,32,c),0,-5.1,0));for(let X=-3;X<=3;X++)u.add(h(P(38,.3,.8,c),0,-5.5,X*4.4));u.position.set(0,62,-40),r.add(u,h(P(2,5,78,y.steelDark),-24.5,55,-20),h(P(2,5,78,y.steelDark),24.5,55,-20));let f=new je;f.position.set(0,53.6,-21),r.add(f),f.add(h(P(44,1.6,4,y.steel),0,.8,2),h(P(44,1.6,4,y.steel),0,.8,40),h(P(4,1.6,36,y.steel),-20,.8,21),h(P(4,1.6,36,y.steel),20,.8,21),h(O(1,1,48,y.black),0,2.4,42,0,0,Math.PI/2),h(P(2,2.6,2,y.steelDark),-22,1.6,42),h(P(2,2.6,2,y.steelDark),22,1.6,42),h(O(1.4,1.4,46,y.steelDark),0,0,0,0,0,Math.PI/2));let p=ce(h(O(.8,.8,28,y.steel),0,14,0),h(tt(new Ot(2,14,10),y.black),0,28.5,0),h(O(2.6,2.6,2.4,y.steelDark),0,0,0,0,0,Math.PI/2));p.position.set(25.4,28,4),r.add(p);let d=(X,q)=>{let L=0;for(let[Q,j]of l){let fe=Math.min(3.5-Math.abs(X-Q),3.5-Math.abs(q-j));fe>0&&(L=Math.max(L,5*qe(fe/1.2)))}return L},_=(X,q)=>Math.max(Math.max(0,Math.abs(X)-15)/3,Math.max(0,Math.abs(q)-11)/7),M=(X,q)=>{let L=_(X,q);return L>0?4*(1-qe(L)):4.3+d(X,q)},g=(X,q)=>9.3*(1-qe(_(X,q)*1.1)),m=new je;r.add(m);let b=new Gn(44,44,66,66);b.rotateX(-Math.PI/2);let E=b.attributes.position,v=tt(b,s);m.add(v);let R=document.createElement("canvas");R.width=R.height=440;{let X=R.getContext("2d");X.fillStyle="#fff",X.fillRect(0,0,440,440),X.fillStyle="#000",X.fillRect(60,100,320,240)}let A=new ne({color:15895608,roughness:.45,side:mn,alphaMap:new Ln(R),transparent:!0,alphaTest:.02}),x=new De(b,A);x.visible=!1,m.add(x);let w=new Gn(32,24,48,36);w.rotateX(-Math.PI/2);{let X=w.attributes.position;for(let q=0;q<X.count;q++)X.setY(q,M(X.getX(q),X.getZ(q)));w.computeVertexNormals()}let k=tt(w,s);k.visible=!1,m.add(k);let I=[];{let X=[[-16,-12],[16,-12],[16,12],[-16,12],[-16,-12]];for(let q=0;q<=160;q++){let L=q/160*4,Q=Math.min(3,Math.floor(L)),j=L-Q,fe=X[Q][0]+(X[Q+1][0]-X[Q][0])*j,Z=X[Q][1]+(X[Q+1][1]-X[Q][1])*j;I.push(Oe(fe,M(fe,Z)+.35,Z))}}let U=new jn(new wn(I,!1,"catmullrom",0),320,.28,6),F=new De(U,new ne({color:2764082,roughness:.5}));F.visible=!1,m.add(F);let N=X=>{for(let q=0;q<E.count;q++)E.setY(q,X(E.getX(q),E.getZ(q)));E.needsUpdate=!0,b.computeVertexNormals()},C=Qr(40,36,44);C.position.set(62,0,0),r.add(C);let B=ce(h(P(40,1.5,32,ee.blue),0,.75,0),h(P(40,16,1.5,ee.blue),0,8,15.25),h(P(40,16,1.5,ee.blue),0,8,-15.25),h(P(1.5,16,32,ee.blue),19.25,8,0),h(P(1.5,16,32,ee.blue),-19.25,8,0));B.position.set(62,0,44),r.add(B);let Y=tt(w,s);Y.rotation.x=Math.PI,Y.position.set(62,11.2,44),r.add(Y);let W=!1;return r.userData.anim=X=>{let L=X%26,Q=X<26;if(Y.visible=!Q||L>23,L<2)m.position.set(0,53.3,70*(1-qe(L/2))),m.rotation.set(0,0,0);else if(L<15.5)m.position.set(0,53.3,0);else if(L<17.5){let me=qe((L-15.5)/2);m.position.set(62*me,53.3+22*Math.sin(Math.PI*me)+(44.2-53.3)*me,0)}else if(L<21)m.position.set(62,44.2,0),m.rotation.x=0;else if(L<23){let me=(L-21)/2,ye=qe(me);m.position.set(62,44.2+14*Math.sin(Math.PI*Math.min(1,me*1.3))-(44.2-11.8)*me*me,44*ye),m.rotation.x=Math.PI*ye}else m.position.set(62,11.8,44),m.rotation.x=Math.PI;f.rotation.x=-1.25*(L<2?1:L<3?1-qe(L-2):L<14?0:L<15?qe(L-14):1),u.position.z=L<3?-40:L<4?-40+40*qe(L-3):L<8?0:L<9?-40*qe(L-8):-40,c.emissiveIntensity=L>3&&L<9?Math.min(1,(L-3)/1.2)*(1.1+.25*Math.sin(X*5)):0;let j=L<9.2?0:L<11?qe((L-9.2)/1.8):L<13.5?1:L<14.5?1-qe(L-13.5):0;p.rotation.x=.35+1.5*j,o.position.y=31+21*j;let fe=L<11?0:L<12.6?qe((L-11)/1.6):L<14?1:L<15?1-qe(L-14):0;a.rotation.z=1.2-2.4*fe;let Z=L<4?0:L<9?2.6*qe((L-4)/5):2.6;if(L<2)N(()=>0),W=!1;else if(L<11){let me=Math.max(0,o.position.y-52+9.3)/9.3;N((ye,re)=>Math.max(-Z*Math.max(0,1-(ye/18)**2)*Math.max(0,1-(re/18)**2),g(ye,re)*me)),W=!1}else if(L<12.8){let me=qe((L-11)/1.6);N((ye,re)=>g(ye,re)+(M(ye,re)-g(ye,re))*me),W=!1}else W||(N(M),W=!0);F.visible=L>=17.8&&L<20.4,U.setDrawRange(0,Math.floor(U.index.count*Math.max(0,Math.min(1,(L-17.8)/1.5))/6)*6);let oe=L>=19.3;v.visible=!oe&&L<25.8,k.visible=oe&&L<25.8,x.visible=oe&&L<20.8,A.opacity=1-Math.max(0,Math.min(1,(L-19.8)/1)),x.position.y=oe?Math.max(0,(L-19.5)*10):0},r.userData.view=Oe(-.8,0,.75),r.userData.zoom=.8,r}function Oy(){let e=new ne({color:15886e3,roughness:.55}),t=new ne({color:16732072,emissive:12589162,emissiveIntensity:.55,roughness:.35}),n=new ne({color:16739e3,emissive:10096720,emissiveIntensity:.35,roughness:.4,transparent:!0,opacity:.6}),s=new ne({color:14266938,metalness:.35,roughness:.4}),r=new ne({color:2105894,metalness:.5,roughness:.5}),a=new je;a.add(h(se(210,40,46,2,ht.cream),0,20,0),h(se(66,24,40,2,ht.teal),-62,52,0),h(se(26,24,30,2,ee.dark),-96,52,0));let o=-8,l=74,c=-36;a.add(h(se(14,18,18,2,ht.teal),-51,l,0),h(O(5.5,5.5,22,y.steelShiny),-69,l,0,0,0,Math.PI/2),h(O(6.5,6.5,3,y.steelDark),-80,l,0,0,0,Math.PI/2),h(P(10,10,10,y.steelDark),-69,l-9,0)),a.add(h(O(5.4,5.4,72,ht.glass,28),o,l,0,0,0,Math.PI/2),h(O(2,3.4,8,y.steelShiny),o+40,l,0,0,0,Math.PI/2),h(P(8,12,8,y.steelDark),-20,l-8,0),h(P(8,12,8,y.steelDark),18,l-8,0));for(let F=0;F<4;F++)a.add(h(new De(new rn(5.7,.9,8,28),ht.hot),o-22+F*15,l,0,0,Math.PI/2,0));let u=new je;u.position.set(o-6,l,0),a.add(u),u.add(h(O(1.8,1.8,62,y.steelShiny),0,0,0,0,0,Math.PI/2),h(O(.2,1.8,4,y.steelShiny),33,0,0,0,0,-Math.PI/2));{let F=[];for(let N=0;N<=200;N++){let C=N/200,B=C*Math.PI*2*10;F.push(Oe(-29+58*C,Math.cos(B)*3.6,Math.sin(B)*3.6))}u.add(tt(new jn(new wn(F),400,.7,8),y.steelShiny))}let f=tt(new Nt(4.6,4.6,1,24),t);f.rotation.z=Math.PI/2,a.add(f);let p=tt(new Nt(4.5,4.5,1,24),n);p.rotation.z=Math.PI/2,a.add(p),a.add(h(O(3,3,10,y.steelShiny),c,l+10,0),h(O(22,4,34,ht.glass,32),c,l+32,0),h(new De(new rn(22,1,8,40),y.steelShiny),c,l+49,0,Math.PI/2),h(O(23,23,2,y.steelDark,32),c,l+51,0),h(O(9,9,14,y.steelShiny),c,l+59,0),h(O(10,10,2,y.steelDark),c,l+67,0),h(se(8,6,6,1,ee.dark),c+10,l+62,0)),a.add(h(O(14,14,32,ee.blue,28),-70,16,-48),h(O(13,13,.6,e,28),-70,32.4,-48),qn([[c+14,l+63,0],[c+26,l+68,-12],[-52,80,-40],[-66,46,-48],[-68,34,-48]],1.2,ee.dark));let d=320,_=new zn(new Ot(1.5,8,6),e,d),M=new Dt,g=[];for(let F=0;F<d;F++){let N=Math.random()*28,C=4+18*(N/34)-1.8,B=Math.random()*7,Y=Math.sqrt(Math.random())*C;g.push([c+Math.cos(B)*Y,l+15.5+N,Math.sin(B)*Y])}g.sort((F,N)=>F[1]-N[1]),g.forEach((F,N)=>{M.position.set(...F),M.updateMatrix(),_.setMatrixAt(N,M.matrix)}),a.add(_);let m=36,b=new zn(new Ot(1.3,8,6),e,m);a.add(b);let E=20,v=new zn(new Ot(1.3,8,6),e,E);a.add(v),a.add(h(P(6,46,46,ht.teal),30,63,0),h(P(6,46,46,ht.teal),96,63,0),h(O(7,7,20,y.steelShiny),109,63,0,0,0,Math.PI/2),h(O(8,8,3,y.steelDark),119,63,0,0,0,Math.PI/2));for(let F of[46,80])for(let N of[-18,18])a.add(h(O(1.6,1.6,72,y.steelShiny),64,F,N,0,0,Math.PI/2));let R=ce(h(P(8,22,22,ht.alu),0,0,0));R.position.set(37,63,0),a.add(R);for(let F of[-4.5,-1.5,1.5,4.5])for(let N of[-1.5,1.5])R.add(h(O(1.2,1.2,.3,r,16),4.1,N,F,0,0,Math.PI/2));R.add(h(P(.3,7.6,13,r),4.05,0,0));let A=ce(h(P(6,40,40,ht.teal),0,0,0),h(P(8,22,22,ht.alu),-7,0,0),h(P(.3,7.6,13,r),-11.05,0,0));A.position.set(52,63,0),a.add(A);let x=[];for(let F of[-1,1])for(let N=0;N<2;N++){let C=tt(new Lt(19.5,2,5),s);a.add(C),x.push([C,F,N])}a.add(h(P(72,44,1,ht.glass),64,64,24),h(P(72,2,2,y.steelDark),64,86,24),h(P(72,2,2,y.steelDark),64,42,24)),a.add(h(P(18,12,.6,y.black),44,25,23.2),h(P(14,1,26,y.steel),44,17,34,.5,0,0),h(P(1,3,26,y.steel),37,18.5,34,.5,0,0),h(P(1,3,26,y.steel),51,18.5,34,.5,0,0));let w=ce(h(P(36,1,30,ee.blue),0,1,0),h(P(36,14,1,ee.blue),0,7,15),h(P(36,14,1,ee.blue),0,7,-15),h(P(1,14,30,ee.blue),18,7,0),h(P(1,14,30,ee.blue),-18,7,0));w.position.set(44,0,52),a.add(w);for(let F=0;F<9;F++){let N=bd(15886e3);N.position.set(32+F%3*12+(Math.random()-.5)*3,4+Math.floor(F/3)*3.5,44+F*7%3*8),N.rotation.set(Math.random()*.4,Math.random()*3,Math.random()*.4),a.add(N)}let k=bd(15886e3);a.add(k);let I=new en().setFromAxisAngle(Oe(0,0,1),Math.PI/2).multiply(new en().setFromAxisAngle(Oe(0,1,0),Math.PI/2));a.add(h(se(22,30,6,1,ee.dark),-30,30,25),h(P(16,10,.3,ht.screen),-30,36,28.2),h(vi(),-34,24,28.4),h(Yn(),-24,24,28.4));let U=new Dt;return a.userData.anim=F=>{let C=F%8/8,B=48,Y=F%B;C<.4&&(u.rotation.x-=.16);let W=C<.4?-14:C<.5?-14+8*qe((C-.4)/.1):C<.78?-6:C<.92?-6-8*qe((C-.78)/.14):-14;u.position.x=W;let X=W+35,q=C<.4?Math.max(.3,(28-X)*qe(C/.4)):Math.max(.3,28-X);f.scale.y=q,f.position.set(X+q/2,l,0);let L=-12,Q=Math.max(.3,X-2-L);p.scale.y=Q,p.position.set(L+Q/2,l,0),A.position.x=C<.62?52:C<.7?52+12*qe((C-.62)/.08):C<.8?64:C<.9?64-12*qe((C-.8)/.1):52;let j=A.position.x+3,fe=93,Z=fe-j,oe=19.5,me=Math.sqrt(Math.max(0,oe*oe-(Z/2)**2));if(x.forEach(([re,ve,nt])=>{let He=nt?j+Z/2:j,Be=nt?fe:j+Z/2,et=63+ve*10+(nt?ve*me:0),ue=63+ve*10+(nt?0:ve*me);re.position.set((He+Be)/2,(et+ue)/2,0),re.rotation.z=Math.atan2(ue-et,Be-He)}),k.quaternion.copy(I),k.visible=C>.45,C<.7)k.position.set(A.position.x-7.4,63,0);else if(C<.74)k.position.set(64-7.4-6*qe((C-.7)/.04),63,0);else{let re=(C-.74)/.24;if(re<.22)k.position.set(50.6,63-23*(re/.22)**2,0),k.rotateX(re*6);else if(re<.38)k.visible=!1;else if(re<.75){let ve=(re-.38)/.37;k.position.set(44,25-12*ve,22+24*ve),k.quaternion.identity(),k.rotation.set(.5,0,0)}else{let ve=(re-.75)/.25;k.quaternion.identity(),k.position.set(44,13-6*ve,46+6*ve),k.rotation.set(.5*(1-ve),ve*1.5,0)}}for(let re=0;re<m;re++){let ve=(re/m+F*.35)%1,nt,He,Be=(re*37%7-3)*.5,et=1;if(ve<.35)nt=c+(re*13%5-2)*.5,He=l+15-12*(ve/.35);else{let ue=(ve-.35)/.65;nt=c+ue*(L-c+3),He=l+3.6-re*11%3*.6,et=ue>.75?1-(ue-.75)/.25:1}C>=.4&&(et=0),U.position.set(nt,He,Be),U.scale.setScalar(Math.max(.001,et)),U.updateMatrix(),b.setMatrixAt(re,U.matrix)}b.instanceMatrix.needsUpdate=!0;let ye=Y<42?1-.65*(Y/42):.35+.65*qe((Y-42)/5);_.count=Math.floor(d*Math.min(1,ye));for(let re=0;re<E;re++){let ve=Y>42&&Y<47.2,nt=(re/E+F*1.4)%1;U.position.set(c+(re*7%5-2)*1.2,l+50-28*nt,(re*3%5-2)*1.2),U.scale.setScalar(ve?1:.001),U.updateMatrix(),v.setMatrixAt(re,U.matrix)}v.instanceMatrix.needsUpdate=!0},a.userData.view=Oe(.25,0,1),a.userData.zoom=.62,a}var un=200,Ks=i=>16*Math.pow(Math.sin(Math.PI*i),.62),$d=i=>(5+3.5*Math.exp(-(((i-.47)/.13)**2)))*Math.pow(Math.sin(Math.PI*i),.3),By=i=>8.5*Math.pow(Math.sin(Math.PI*i),.55),Xc=i=>7*Math.pow(2*i-1,4),$r=-un/2+un*.47,Sd=21,Ed=11.5,Vc=(i,e)=>{let t=Math.min(.999,Math.max(.001,(i+un/2)/un)),n=Ks(t),s=Math.min(1,Math.abs(e)/n),r=Math.pow(s,2.4/2),a=Math.sqrt(Math.max(0,1-r*r));return Xc(t)+$d(t)*Math.pow(a,2/2.2)};function ky(){let t=[],n=[];for(let d=0;d<=100;d++){let _=d/100,M=-un/2+un*_,g=Ks(_),m=$d(_),b=By(_),E=Xc(_);for(let v=0;v<=56;v++){let R=v/56*Math.PI*2,A=Math.cos(R),x=Math.sin(R);t.push(M,E+(x>0?m*Math.pow(x,2/2.2):-b*Math.pow(-x,2/2.6)),g*Math.sign(A)*Math.pow(Math.abs(A),2/2.4))}}for(let d=0;d<100;d++)for(let _=0;_<56;_++){let M=d*57+_,g=M+56+1,m=-un/2+un*(d+.5)/100,b=(_+.5)/56*Math.PI*2,E=Ks((d+.5)/100)*Math.sign(Math.cos(b))*Math.pow(Math.abs(Math.cos(b)),2/2.4);Math.sin(b)>.2&&((m-$r)/Sd)**2+(E/Ed)**2<1||n.push(M,g,M+1,g,g+1,M+1)}let s=new Xt;s.setAttribute("position",new _t(t,3)),s.setIndex(n),s.computeVertexNormals();let r=ht.kayak2||(ht.kayak2=new ne({color:15226410,roughness:.32,metalness:.02,side:ei})),a=ht.kayakIn||(ht.kayakIn=new ne({color:4856332,roughness:.85,side:qt})),o=ce(tt(s,r),new De(s,a)),l=[];for(let d=0;d<=64;d++){let _=d/64*Math.PI*2,M=$r+Sd*1.04*Math.cos(_),g=Ed*1.06*Math.sin(_);l.push(Oe(M,Vc(M,g)+.5,g))}o.add(tt(new jn(new wn(l,!0),128,1.5,10,!0),y.black));let c=new ne({color:2764082,roughness:.7});o.add(h(se(20,2.4,17,1,c),$r+5,-5.4,0),h(se(3,9,15,1,c),$r+15,-1.5,0,0,0,.35),h(se(10,4,22,1.5,c),$r-28,-4,0));let u=50,f=Vc(u,0);o.add(h(O(8.5,8.5,1.6,y.black,32),u,f+.6,0),h(new De(new rn(8.5,.7,8,32),c),u,f+1.4,0,Math.PI/2));let p=d=>o.add(tt(new jn(new wn(d.map(([_,M])=>Oe(_,Vc(_,M)+.8,M))),40,.35,6),y.black));for(let d of[-1,1])p([[-70,-11*d],[-58,0],[-46,11*d]]),p([[85,-6*d],[75,0],[66,7*d]]);for(let d of[-un/2-1.5,un/2+1.5])o.add(h(new De(new rn(2.6,.6,8,20),y.black),d,Xc(d<0?0:1)-.5,0));return o}function wd(){let i=new xt;for(let e=0;e<=40;e++){let t=e/40;i[e?"lineTo":"moveTo"](-un/2+un*t,Ks(t)+.4)}for(let e=40;e>=0;e--){let t=e/40;i.lineTo(-un/2+un*t,-Ks(t)-.4)}return i}function Hy(i,e){let t=ce(h(new De(new rn(i,1.6,8,48),e),0,0,0,0,Math.PI/2,0),h(new De(new rn(i*.55,1.2,8,40),e),0,0,0,0,Math.PI/2,0),h(O(5,5,6,y.steelDark),0,0,0,0,0,Math.PI/2));for(let n=0;n<8;n++){let s=n*Math.PI/4;t.add(h(P(2,i,2,e),0,Math.cos(s)*i/2,Math.sin(s)*i/2,s,0,0))}return t}function zy(){let i=new je,e=-240,t=30,n=105,s=235,r=ee.lightOrange,a=new ne({color:13081146,metalness:.4,roughness:.45}),o=new ne({color:15250746,metalness:.3,roughness:.4}),l=new ne({color:15132906,metalness:.3,roughness:.4});i.add(h(P(320,8,180,r),0,s-4,-240),h(P(8,s,180,r),-156,s/2,-240),h(P(8,s,180,r),156,s/2,-240),h(P(320,s,8,r),0,s/2,-326));for(let N of[-152,152])i.add(h(P(12,s,10,y.steelDark),N,s/2,-150));i.add(h(P(320,12,10,y.steelDark),0,s-6,-150));let c=ht.ovenIn;i.add(h(P(304,1,164,c),0,s-8.5,-240),h(P(1,s-10,164,c),-151.5,(s-10)/2,-240),h(P(1,s-10,164,c),151.5,(s-10)/2,-240),h(P(304,s-10,1,c),0,(s-10)/2,-321.5),h(P(304,1,164,c),0,.6,-240));let u=new Qi(16742954,0,260,0);u.position.set(0,140,-240),i.add(u),i.add(h(P(670,10,10,y.steelDark),0,s+14,-145),h(P(8,s+18,8,y.steelDark),-331,(s+18)/2,-145),h(P(8,s+18,8,y.steelDark),331,(s+18)/2,-145));let f=new ne({color:16756848,emissive:16738848,emissiveIntensity:0,transparent:!0,opacity:.28,roughness:.1,depthWrite:!1}),p=[-1,1].map(N=>{let C=ce(h(P(161,40,6,r),0,s/2-20,0),h(P(161,55,6,r),0,-s/2+27.5,0),h(P(25,s-95,6,r),-68,-7.5,0),h(P(25,s-95,6,r),68,-7.5,0),h(P(111,s-95,1,f),0,-7.5,0),h(P(4,60,4,y.steelDark),-N*74,0,4),h(P(14,8,10,y.steelDark),-50,s/2+6,0),h(P(14,8,10,y.steelDark),50,s/2+6,0));return C.position.set(N*80.5,s/2,-147),i.add(C),C});i.add(h(se(70,34,56,3,ee.red),40,s+17,-290),h(O(9,9,70,y.steelDark),40,s+68,-290),h(se(30,20,20,2,ee.dark),-40,s+10,-300),h(O(3,3,60,ee.dark),-40,s+10,-270,Math.PI/2));let d=(N,C,B,Y)=>{let W=Math.hypot(B-N,Y-C),X=Math.atan2(Y-C,B-N);for(let L of[16,32])i.add(h(P(W,1.6,1.6,a),(N+B)/2,s+L,(C+Y)/2,0,-X,0));let q=Math.ceil(W/40);for(let L=0;L<=q;L++)i.add(h(P(1.8,32,1.8,a),N+(B-N)*L/q,s+16,C+(Y-C)*L/q))};d(-158,-152,158,-152),d(158,-152,158,-328),d(158,-328,-158,-328),d(-158,-328,-158,-200);{let Y=-7.2727272727272725,W=s/22,X=-180;for(let Q=0;Q<22;Q++)i.add(h(P(28,1.6,8,y.steelDark),X,W*(Q+1)-.8,-162+Y*(Q+.5)));let q=Math.hypot(s,-160),L=Math.atan2(s,160);for(let Q of[X-15,X+15])i.add(h(P(2,6,q,a),Q,s/2,-484/2,L,0,0));for(let Q of[X-15])i.add(h(P(1.6,1.6,q,a),Q,s/2+32,-484/2,L,0,0));for(let Q=0;Q<=4;Q++)i.add(h(P(1.6,32,1.6,a),X-15,s*Q/4+16,-162+-160*Q/4))}{let N=ce(h(se(22,74,30,2,ee.dark),0,37,0),h(P(.4,13,20,ht.screen),11.2,58,0),h(O(1,1,.6,ee.go||y.steel),11.4,46,-6,0,0,Math.PI/2),h(Yn(),11.4,46,6),h(O(2.4,2.4,1,y.black),11.4,36,0,0,0,Math.PI/2));N.children[3].rotation.set(0,Math.PI/2,0),N.position.set(171,0,-205),i.add(N)}for(let N of[-100,100])i.add(h(P(5,4,420,y.steelShiny),N,2,-120),h(P(14,1,420,y.steelDark),N,.5,-120));i.add(h(P(6,5,200,ee.blue),118,2.5,-60));let _=new je;_.position.z=t,i.add(_),_.add(h(P(240,8,110,ee.grey),0,16,0),h(P(250,4,4,y.black),0,13,57),h(P(250,4,4,y.black),0,13,-57));for(let N of[-100,100])for(let C of[-40,40])_.add(h(O(6,6,4,y.steelDark),N,10,C,0,0,Math.PI/2));for(let N of[-47,47])_.add(h(P(10,n-20,12,ee.grey),0,n/2+10,N),h(O(4,4,8,y.steelDark),0,n,N*.93,Math.PI/2));_.add(h(se(20,16,16,2,l),-20,30,-38),h(O(7,7,18,l),-36,30,-38,0,0,Math.PI/2),h(se(16,14,14,2,ee.grey),0,n-12,-56),h(O(6,6,12,l),0,n-12,-68,Math.PI/2));let M=new je;M.position.y=n,_.add(M);for(let N of[-41,41])M.add(h(P(276,5,5,ee.machRed),0,0,N));for(let N of[-138,138])M.add(h(P(6,6,88,ee.machRed),N,0,0),h(se(12,14,14,2,ee.dark),N,0,0));M.add(h(se(14,14,14,2,ee.dark),146,0,0),h(O(5,5,12,l),156,0,0,0,0,Math.PI/2));let g=new je;M.add(g);for(let N of[-121,121]){let C=Hy(32,y.steel);C.position.x=N,g.add(C,h(O(3,3,14,y.steelShiny),N+Math.sign(N)*9,0,0,0,0,Math.PI/2))}let m=44,b=16,E=232;g.add(h(P(E,b,m,ht.alu),0,-b/2,0),h(P(E+6,1.4,m+6,ht.alu),0,-.7,0));for(let N=-3;N<=3;N++)g.add(h(P(2,b,m+2,y.steelDark),N*34,-b/2,0));let v=tt(new Us(wd()),ht.cavity);v.rotation.x=-Math.PI/2,v.position.y=.05,g.add(v);let R=new je;R.position.set(0,0,-m/2),g.add(R),R.add(h(P(E,b,m,ht.alu),0,b/2,m/2),h(P(E+6,1.4,m+6,ht.alu),0,.7,m/2));for(let N=-3;N<=3;N++)R.add(h(P(2,b,m+2,y.steelDark),N*34,b/2,m/2));let A=tt(new Us(wd()),ht.cavity);A.rotation.x=Math.PI/2,A.position.set(0,-.05,m/2),R.add(A);for(let N=-3;N<=3;N++)g.add(h(P(4,6,3,y.steelDark),N*32+16*(N<3),-2,m/2+2)),R.add(h(P(4,6,3,y.steelDark),N*32+16*(N<3),2,m+2));for(let N=-2;N<=2;N++)g.add(h(O(1.6,1.6,8,y.steelDark),N*48,-1,-m/2-1,0,0,Math.PI/2));let x=900,w=new zn(new Ot(.8,5,4),ht.powder,x),k=new Dt;for(let N=0;N<x;N++){let C=.06+.88*Math.random(),B=-un/2+un*C,Y=(Math.random()*2-1)*Ks(C)*.85;k.position.set(B,.8+Math.random()*1.4,Y),k.updateMatrix(),w.setMatrixAt(N,k.matrix)}g.add(w);let I=Oe(0,38.6,150);for(let N of[-60,60])i.add(h(P(6,30,40,y.steelDark),N,15,150),h(se(10,3.6,40,1.2,y.black),N,31.8,150));let U=ky();U.visible=!1,i.add(U);let F=[];for(let N of[-1,1]){let C=ce(h(O(4,4,90,y.steelDark),0,45,0),h(P(40,4,40,y.steelDark),0,2,0)),B=ce(h(O(32,32,16,o,36,!0),0,0,0,0,0,Math.PI/2),h(new De(new rn(32,1.6,8,40),y.steelDark),-8*N,0,0,0,Math.PI/2,0),h(O(8,8,10,o),7*N,0,0,0,0,Math.PI/2));for(let W=0;W<4;W++)B.add(h(P(.8,64,.8,y.steelDark),-8*N,0,0,W*Math.PI/4,0,0));for(let W of[12,22])B.add(h(new De(new rn(W,.4,6,32),y.steelDark),-8*N,0,0,0,Math.PI/2,0));B.position.y=96,C.add(B);let Y=new je;for(let W=0;W<5;W++){let X=ce(h(P(1,26,8,y.steel),0,13,0,.3,0,0));X.rotation.x=W*2*Math.PI/5,Y.add(X)}Y.add(h(O(5,5,6,y.steelDark),0,0,0,0,0,Math.PI/2)),Y.position.y=96,C.add(Y),F.push(Y),C.position.set(N*205,0,t),i.add(C)}i.add(h(P(40,4,30,y.steelDark),-205,20,130),h(se(36,24,26,2,ee.blue),-205,34,130),h(P(32,1,22,ht.powder),-205,46.2,130));for(let N of[-222,-188])for(let C of[118,142])i.add(h(O(3,3,3,y.black),N,3,C,0,0,Math.PI/2),h(P(2,16,2,y.steelDark),N,12,C));return i.userData.anim=N=>{let B=N%34,Y=N<34;R.rotation.x=-1.9*(B<2.5?1:B<4?1-qe((B-2.5)/1.5):B<27?0:qe((B-27)/1.5)),w.count=B<2.5?Math.floor(x*qe(B/2.2)):B<9?x:0;let W=B<4?0:B<5?qe(B-4):B<8?1:B<9?1-qe(B-8):B<18?0:B<19?qe(B-18):B<22?1:B<23?1-qe(B-22):0;p.forEach((L,Q)=>L.position.x=(Q?1:-1)*(80.5+165*W)),_.position.z=B<5?t:B<8?t+(e-t)*qe((B-5)/3):B<19?e:B<22?e+(t-e)*qe((B-19)/3):t;let X=Math.max(0,Math.min(1,(B-5)/22));g.rotation.x=Math.PI*2*7*qe(X),M.rotation.z=.36*Math.sin(Math.PI*X)*Math.sin(2*Math.PI*(B-5)/5.5);let q=B<8?0:B<9?B-8:B<18?1:B<20?1-(B-18)/2:0;if(c.emissiveIntensity=.7*q,f.emissiveIntensity=.35*q,u.intensity=2.6*q*(.9+.1*Math.sin(N*3)),F.forEach(L=>L.rotation.x+=B>19&&B<27?.5:B>27&&B<28?.5*(28-B):0),B>=27){U.visible=!0;let L=Oe(0,n,t);if(B<29.5)U.position.copy(L);else if(B<31)U.position.set(0,n+50*qe((B-29.5)/1.5),t);else{let Q=qe((B-31)/2.5);U.position.set(0,n+50+(I.y-n-50)*Q*Q,t+(I.z-t)*Q)}}else!Y&&B<9.6?(U.visible=!0,U.position.copy(I),B>8&&(U.position.x=-600*((B-8)/1.6)**2)):U.visible=!1},i.userData.pinY=275,i.userData.focus=Oe(0,85,-70),i}var Wc=new ne({color:13114880,emissive:16726528,emissiveIntensity:1.3,roughness:.3});function rl(i,e,t){let n=t.clone().sub(e),s=n.length();i.position.copy(e).addScaledVector(n,.5),i.scale.set(1,Math.max(.001,s),1),i.quaternion.setFromUnitVectors(Oe(0,1,0),n.normalize())}function Td(i){let e=ce(h(new De(new rn(8,1.8,10,32),ht.alu),0,0,0),h(O(2.6,2.6,5,ht.alu,20),0,0,0,Math.PI/2));for(let t=0;t<5;t++){let n=t*Math.PI*2/5;e.add(h(P(1.6,7,1.6,ht.alu),Math.cos(n)*4.6,Math.sin(n)*4.6,0,0,0,n-Math.PI/2))}return e}function Ad(i){let e=i||ht.alu,t=ce(h(se(8,3.4,19,1.2,e),0,0,0),h(se(7,3,9,1.3,e),0,2.8,1));for(let n of[-3.7,3.7])for(let s of[-5.8,5.8])t.add(h(O(2,2,1.4,e,20),n,-1.4,s,0,0,Math.PI/2));return t}function Gy(){let i=new ne({color:4020851,metalness:.35,roughness:.45}),e=new ne({color:14266938,metalness:.35,roughness:.4}),t=new ne({color:2105894,metalness:.5,roughness:.5}),n=new je;n.add(h(se(230,36,60,2,i),0,18,0),h(se(60,20,44,2,i),-80,46,0)),n.add(h(O(9,9,44,y.steelShiny),-82,62,0,0,0,Math.PI/2),h(O(10,10,3,y.steelDark),-104,62,0,0,0,Math.PI/2),h(O(5,5,44,y.steelDark),-18,62,0,0,0,Math.PI/2),h(P(8,3,6,t),-12,66.6,0));let s=ce(h(O(2,2,40,y.steelShiny),0,0,0,0,0,Math.PI/2),h(O(4.4,4.4,4,y.steelShiny),20,0,0,0,0,Math.PI/2));s.position.set(-62,62,0),n.add(s),n.add(h(P(8,56,56,i),6,64,0),h(P(8,56,56,i),104,64,0),h(O(8,8,22,y.steelShiny),119,64,0,0,0,Math.PI/2));for(let b of[42,86])for(let E of[-22,22])n.add(h(O(2,2,100,y.steelShiny),55,b,E,0,0,Math.PI/2));let r=ce(h(P(12,36,36,y.steelDark),0,0,0),h(P(.3,9,22,t),6.1,0,0));r.position.set(16,64,0),n.add(r);let a=ce(h(P(8,50,50,i),0,0,0),h(P(12,36,36,y.steelDark),-10,0,0),h(P(.3,9,22,t),-16.1,0,0));a.position.set(38,64,0),n.add(a);let o=[];for(let b of[-1,1])for(let E=0;E<2;E++){let v=tt(new Lt(2.4,1,6),e);n.add(v),o.push([v,b,E])}n.add(h(P(80,58,1,ht.glass),55,66,30),h(P(80,2,2,y.steelDark),55,95,30),h(P(80,2,2,y.steelDark),55,37,30)),n.add(h(P(44,40,4,ee.grey),-70,20,82),h(P(44,40,4,ee.grey),-70,20,42),h(P(4,40,36,ee.grey),-90,20,62),h(P(4,40,36,ee.grey),-50,20,62),h(P(36,34,36,ee.dark),-70,17,62),h(P(36,.6,36,Wc),-70,34.6,62),h(P(44,2,4,y.steelDark),-70,41,82),h(P(44,2,4,y.steelDark),-70,41,42),h(P(4,2,44,y.steelDark),-48,41,62),h(P(4,2,44,y.steelDark),-92,41,62));let l=Oe(-34,92,40);n.add(h(O(5,6,92,y.steelDark),-34,46,40),h(se(14,10,14,2,ee.dark),-34,94,40));let c=tt(new Nt(1.6,1.6,1,12),ee.machRed);n.add(c);let u=ce(h(O(5,3.5,6,y.steelDark,20,!0),0,0,0),h(O(3.5,3.5,.4,y.steelDark,20),0,-3,0)),f=h(O(4.6,4.6,.4,Wc,20),0,1.6,0);u.add(f),n.add(u);let p=tt(new Nt(.8,.8,1,10),Wc);p.visible=!1,n.add(p);let d=ht.alu.clone(),_=Ad(d);n.add(_);let M=ce(h(P(36,1,30,ee.blue),0,1,0),h(P(36,14,1,ee.blue),0,7,15),h(P(36,14,1,ee.blue),0,7,-15),h(P(1,14,30,ee.blue),18,7,0),h(P(1,14,30,ee.blue),-18,7,0));M.position.set(40,0,62),n.add(M);for(let b=0;b<5;b++){let E=Ad();E.position.set(30+b%3*10,4.5+Math.floor(b/3)*4,58+b*2%3*4-4),E.rotation.set((Math.random()-.5)*.5,Math.random()*3,(Math.random()-.5)*.5),n.add(E)}n.add(h(P(14,1,30,y.steel),40,22,42,.6,0,0),h(P(16,10,.6,y.black),40,30,30.2)),n.add(h(se(22,30,6,1,ee.dark),-30,24,31),h(P(16,10,.3,ht.screen),-30,30,34.2),h(vi(),-34,18,34.4),h(Yn(),-24,18,34.4));let g=[[0,Oe(-50,82,58)],[1.6,Oe(-70,37,62)],[2.4,Oe(-70,37,62)],[3.4,Oe(-62,84,50)],[4.6,Oe(-12,76,0)],[6,Oe(-12,76,0)],[7.2,Oe(-50,82,58)]],m=b=>{for(let E=0;E<g.length-1;E++)if(b<=g[E+1][0]){let v=qe((b-g[E][0])/(g[E+1][0]-g[E][0]));return g[E][1].clone().lerp(g[E+1][1],v)}return g[g.length-1][1].clone()};return n.userData.anim=b=>{let v=b%13,R=m(v);u.position.copy(R),rl(c,l,R.clone().add(Oe(0,4,0)));let A=v>4.6&&v<6?Math.sin(Math.PI*(v-4.6)/1.4)*1.3:0;u.rotation.z=-A,f.visible=v>1.9&&v<5.6,p.visible=v>4.8&&v<5.8,p.visible&&rl(p,Oe(-9,74,0),Oe(-12,66,0)),s.position.x=v<6?-62:v<6.4?-62+30*qe((v-6)/.4):v<10.5?-32:v<12?-32-30*qe((v-10.5)/1.5):-62,a.position.x=v<8.4?38:v<9?38+22*qe((v-8.4)/.6):v<10.6?60:v<11.4?60-22*qe((v-10.6)/.8):38;let x=a.position.x+4,w=100,k=w-x,I=58/2+1,U=Math.sqrt(Math.max(0,I*I-(k/2)**2));o.forEach(([F,N,C])=>{let B=64+N*14;rl(F,Oe(C?x+k/2:x,B+(C?N*U:0),0),Oe(C?w:x+k/2,B+(C?0:N*U),0)),F.scale.x=F.scale.z=1}),_.visible=v>6.4;{let F=v<8.4?1:v<9.6?1-(v-8.4)/1.2:0;d.emissive.setRGB(1,.15,0),d.emissiveIntensity=1.4*F,d.color.setRGB(.77+.23*F,.79-.5*F,.82-.74*F)}if(v<9)_.position.set(a.position.x-16-2,64,0);else if(v<9.4)_.position.set(60-18.5-6*qe((v-9)/.4),64,0);else if(v<10.2){let F=(v-9.4)/.8;_.position.set(36,64-30*F*F,0)}else if(v<10.5)_.visible=!1;else if(v<12){let F=(v-10.5)/1.5;_.position.set(40,30-20*F,30+28*F)}else _.visible=!1},n.userData.view=Oe(-.3,0,1),n.userData.zoom=.8,n.userData.pinY=110,n}function Vy(){let i=new ne({map:cs((X,q)=>{X.fillStyle="#8a6a48",X.fillRect(0,0,q,q);for(let L=0;L<5e3;L++)X.fillStyle=Math.random()<.5?"#6e5236":"#a4835e",X.fillRect(Math.random()*q,Math.random()*q,1.5,1.5)},256,[2,2]),roughness:.95}),e=new ne({color:4935768,metalness:.6,roughness:.4}),t=new ne({color:1907223,roughness:1}),n=new ne({color:13114880,emissive:16726528,emissiveIntensity:1.3,roughness:.4}),s=new je,r=Qr(110,56,40);r.position.set(10,0,0),s.add(r),s.add(h(O(22,24,44,ee.grey,32),-82,22,0),h(new De(new rn(22.5,1.4,8,32),ee.machRed),-82,30,0,Math.PI/2),h(O(14,14,.4,n,24),-82,44.3,0),h(O(23,23,6,ee.grey,32),-82,47,-44),h(P(4,4,30,y.steelDark),-82,45,-24),h(O(2.4,2.4,44,y.steelDark),-82,22,-44),h(O(8,8,2,y.steelDark),-82,1,-44),h(O(3,3,20,y.steelDark),-104,10,14,0,0,1.2),h(se(10,8,8,1,ee.dark),-114,6,22));let a=X=>{let q=ce(h(P(44,X,2,e),0,X/2,15),h(P(44,X,2,e),0,X/2,-15),h(P(2,X,28,e),21,X/2,0),h(P(2,X,28,e),-21,X/2,0));for(let L of[-24,24])q.add(h(O(1,1,6,e),L,X/2,0,0,0,Math.PI/2));return q},o=40.2,l=14;s.add(h(P(48,1,34,y.beech),0,o+.5,0));let c=new je;c.position.set(0,o+1,0),s.add(c);let u=new je;u.position.y=l/2,c.add(u);let f=a(l);f.position.y=-l/2,u.add(f);let p=h(P(40,1,28,i),0,-l/2,0);u.add(p);let d=ce(h(O(8,8,5,y.beech,32),0,0,0),h(O(3,3,6,y.beechDark,20),0,0,0));d.position.set(0,-l/2+2.5,0),u.add(d);let _=h(O(9.6,9.6,.3,t,32),0,l+1.25,0);s.add(_),_.position.y=o+1+l+.2;let M=new je;s.add(M);let g=a(l);M.add(g);let m=h(P(40,l,28,i),0,l/2,0);M.add(m);let b=[h(O(2.2,3,18,y.beech,16),-14,9,0),h(O(3.6,3.6,18,y.beech,16),14,9,0)];b.forEach(X=>M.add(X));let E=[h(O(3,3,.3,t,16),-14,l+.2,0),h(O(3.6,3.6,.3,t,16),14,l+.2,0)];E.forEach(X=>M.add(X));let v=[h(O(3,3,.4,n,16),-14,l+.4,0),h(O(3.6,3.6,.4,n,16),14,l+.4,0)];v.forEach(X=>M.add(X));let R=ce(h(O(.9,.9,90,y.steelDark),0,0,0,0,0,Math.PI/2),h(P(2,10,2,y.steelDark),-45,0,0),h(P(2,2,16,y.black),-45,-5,0),h(P(2,10,2,y.steelDark),45,0,0),h(P(2,2,16,y.black),45,-5,0),h(new De(new rn(7.4,.8,8,24),y.steelDark),0,-2,0,Math.PI/2)),A=ce(h(O(7,5,14,new ne({color:5917248,roughness:.8}),20),0,-6,0),h(O(6.4,6.4,.3,n,20),0,.9,0));R.add(A),s.add(R);let x=tt(new Nt(.9,.9,1,10),n);s.add(x);let w=ce(),k=Td();k.rotation.x=Math.PI/2,w.add(k);let I=ce(h(O(2.2,3,18,ht.alu,16),-14,9,0),h(P(14,2,3,ht.alu),-7.5,0,0)),U=ce(h(O(3.6,3.6,18,ht.alu,16),14,9,0),h(P(8,2,3,ht.alu),11,0,0));w.add(I,U),s.add(w);let F=h(new De(new Ii(26,10,24),i),0,o+5,0);s.add(F);let N=Td();N.rotation.x=Math.PI/2,N.position.set(48,40+2.5,8),s.add(N);let C=ce(h(P(30,1,24,ee.blue),0,1,0),h(P(30,12,1,ee.blue),0,6,12),h(P(30,12,1,ee.blue),0,6,-12),h(P(1,12,24,ee.blue),15,6,0),h(P(1,12,24,ee.blue),-15,6,0));C.position.set(85,0,10),s.add(C);let B=Oe(-82,48,0),Y=Oe(-4,o+1+2*l+22,0),W=n.clone();return v.forEach(X=>X.material=W),s.userData.anim=X=>{let L=X%26;p.scale.y=l*(L<.3?0:L<2?qe((L-.3)/1.7):1),p.position.y=-l/2+p.scale.y/2,u.rotation.x=L<2?0:L<3?Math.PI*qe(L-2):Math.PI;let Q=L>7.4&&L<8.4?qe((L-7.4)/1):L>=8.4?1:0;d.visible=L<8.4,d.position.set(0,-l/2+2.5-22*Q,0),_.visible=L>=8.2&&L<19.5;let j=o+1+l,fe=j+40;L>=3&&L<7.2?fe=j+40*(1-qe((L-3)/.8)):L>=7.2&&L<8.6?fe=j+30*qe((L-7.2)/.6):L>=8.6&&L<17?fe=j+30*(1-qe((L-8.6)/.7)):L>=17&&(fe=j+60*qe((L-17)/.8)),M.position.set(0,fe,0),M.visible=L>=3&&L<17.8,m.scale.y=L<4?.001:L<6?qe((L-4)/2):1,m.position.y=l*m.scale.y/2,b.forEach(Be=>{Be.visible=L>=3.2&&L<7,Be.position.y=9+(L>6?20*qe((L-6)/.8):0)}),E.forEach(Be=>Be.visible=L>=6.6);let Z=[[9.5,B],[10.3,B.clone().add(Oe(0,40,0))],[11.4,Y.clone()],[13,Y.clone()],[14,B.clone().add(Oe(0,40,0))],[14.6,B]],oe=B.clone();for(let Be=0;Be<Z.length-1;Be++)L>=Z[Be][0]&&L<Z[Be+1][0]&&(oe=Z[Be][1].clone().lerp(Z[Be+1][1],qe((L-Z[Be][0])/(Z[Be+1][0]-Z[Be][0]))));R.position.copy(oe),A.rotation.z=L>11.4&&L<13?Math.sin(Math.PI*(L-11.4)/1.6)*1.1:0,x.visible=L>11.7&&L<12.8,x.visible&&rl(x,Oe(oe.x-7,oe.y-3,0),Oe(-14,j+l+.5,0));let me=L>=11.9,ye=L<11.9?0:L<14.6?1:L<17?1-(L-14.6)/2.4:0;v.forEach(Be=>Be.visible=me&&L<17.8),W.emissiveIntensity=1.3*ye,W.color.setRGB(.77+(.78-.77)*ye,.79-(.79-.12)*ye,.82-.82*ye),W.metalness=.75*(1-ye),W.roughness=.32+.1*ye,p.visible=L<17.4,f.visible=!0,F.visible=L>=17.4&&L<25,F.scale.set(1,L<18?qe((L-17.4)/.6):1,1),w.visible=L>=17.4;let re=Oe(0,o+1+2.5,0),ve=Oe(30,40+2.5+12,8),nt=Oe(48,40+2.5,8);if(L<18.2)w.position.copy(re);else if(L<19.6){let Be=qe((L-18.2)/1.4);w.position.copy(re.clone().lerp(ve,Be))}else L<20.4?w.position.copy(ve.clone().lerp(nt,qe((L-19.6)/.8))):w.position.copy(nt);let He=L<21?0:qe(Math.min(1,(L-21)/1.4));I.visible=U.visible=L<22.6;for(let[Be,et]of[[I,0],[U,0]])Be.position.set(37*He,-36*He+12*Math.sin(Math.PI*He),2*He);N.visible=L<17.4},s.userData.view=Oe(.15,0,1),s.userData.zoom=.75,s.userData.pinY=80,s}function jd(){let i=new je,e=-900,t=365,n=-370,s=230,r=new ne({color:5593439,roughness:.92}),a=new ne({color:14271322,roughness:.7});i.add(h(P(t-e,4,s-n,r),(e+t)/2,-2,(n+s)/2));let o=(u,f,p,d)=>{i.add(h(P(f-u,.4,2,a),(u+f)/2,.2,p),h(P(f-u,.4,2,a),(u+f)/2,.2,d),h(P(2,.4,d-p,a),u,.2,(p+d)/2),h(P(2,.4,d-p,a),f,.2,(p+d)/2))};o(-515,155,-355,212),o(172,352,-255,-8),o(172,352,30,212),o(-850,-545,-255,-30),o(-850,-545,50,212);let l=[];i.userData.items=l;let c=(u,f,p,d,_,M=0)=>(u.rotation.y=d||0,u.position.set(f,0,p),i.add(u),u.userData.key=_,u.userData.idle=M,l.push({key:_,obj:u,anim:u.userData.anim}),u.userData.anim&&u.userData.anim(M),u);return c(zy(),-178,0,0,"rotoMoulder",0),c(Oy(),250,-128,Math.PI/2,"injectionMoulder",0),c(Fy(),258,150,Math.PI/2,"vacuumFormer",2.6),c(Gy(),-700,-150,0,"dieCaster",0),c(Vy(),-705,135,0,"sandCasting",0),i.userData.center=Oe(-270,0,-60),i}var Wy=`.mkh{display:grid;grid-template-columns:1fr;gap:6px}.mkh.wide{grid-template-columns:1fr 1.25fr;gap:18px;align-items:end}
.mkp{display:block;width:100%;border:0;background:none;padding:0;margin:0;text-align:left;cursor:pointer;color:#F4F4F6;font:inherit;border-radius:18px;touch-action:manipulation}
.mkp:focus-visible{outline:3px solid #F4B3C2;outline-offset:3px}
.mkp canvas{display:block;width:100%;height:240px}.mkp.ws canvas{height:280px}.mkh.wide .mkp canvas{height:300px}.mkp.fc{grid-column:1/-1}.mkp.fc canvas{height:250px}.mkh.wide .mkp.fc canvas{height:330px}
.mkp .plab{display:block;padding:2px 8px 8px}.mkp .plab b{font-size:19px;font-weight:800}.mkp .plab small{font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;border:1.5px solid #F4B3C2;color:#F4B3C2;border-radius:6px;padding:0 4px;vertical-align:3px;margin-left:6px}
.mkp .plab span{display:block;font-size:13.5px;color:#BFC3C8;margin-top:2px}`;function Xy(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Ln(i)}function qy(i,e={}){if(!document.getElementById("mkcss")){let E=document.createElement("style");E.id="mkcss",E.textContent=Wy,document.head.appendChild(E)}i.innerHTML=`<div class="mkh"><button type="button" class="mkp box" aria-label="Tool library"><canvas></canvas><span class="plab"><b>Tool library</b><small>beta</small><span>Every N5 tool and machine in 3D</span></span></button>
   <button type="button" class="mkp ws" aria-label="Virtual workshop"><canvas></canvas><span class="plab"><b>Virtual workshop</b><small>beta</small><span>Make joints step by step</span></span></button>
   <button type="button" class="mkp fc" aria-label="The factory"><canvas></canvas><span class="plab"><b>The factory</b><small>beta</small><span>How products are made in industry, step by step</span></span></button></div>`;let t=i.querySelector(".mkh");function n(E,v,R,A){let x=new xi({canvas:E,antialias:!0,alpha:!0});x.toneMapping=ni,x.shadowMap.enabled=A==="real",x.shadowMap.type=oo;let w=new In;w.environment=new Bi(x).fromScene(new qs,.04).texture,w.environmentIntensity=.75;let k=new pi(16773596,2.2);k.position.set(140,320,220);let I=new pi(16767202,1);I.position.set(-160,80,-200),w.add(k,I,new Fs(16777215,.25),v),v.updateMatrixWorld(!0);let U=new kt().setFromObject(v),F=U.getCenter(Oe(0,0,0)),N=U.getBoundingSphere(new Dn).radius;if(A==="real"){k.castShadow=!0,k.target.position.copy(F),w.add(k.target);let Y=k.shadow;Y.mapSize.set(1024,1024),Object.assign(Y.camera,{left:-N,right:N,top:N,bottom:-N,near:1,far:1200}),Y.camera.updateProjectionMatrix(),Y.bias=-6e-4,Y.radius=4,v.traverse(W=>{W.isMesh&&(W.castShadow=!W.material.transparent,W.receiveShadow=!0)})}else{let Y=U.getSize(Oe(0,0,0)),W=new De(new Gn(Y.x*1.5,Y.z*2),new Ji({map:Xy(),transparent:!0,depthWrite:!1}));W.rotation.x=-Math.PI/2,W.position.set(F.x,U.min.y+.05,F.z),w.add(W)}let C=new es(-1,1,1,-1,.1,6e3),B=Oe(1,.82,1).normalize();return C.position.copy(F).addScaledVector(B,2500),C.lookAt(F),{r:x,sc:w,cam:C,R:N*R,obj:v}}let s=Ny(),r=Jd(),a=jd(),o=t.querySelector(".box"),l=t.querySelector(".ws"),c=t.querySelector(".fc"),u=[{el:o,cv:o.querySelector("canvas"),kind:"box"},{el:l,cv:l.querySelector("canvas"),kind:"ws"},{el:c,cv:c.querySelector("canvas"),kind:"fc"}];Object.assign(u[0],n(u[0].cv,s,1.35,"soft")),Object.assign(u[1],n(u[1].cv,r,.8,"real")),Object.assign(u[2],n(u[2].cv,a,.5,"real")),u[2].r.shadowMap.autoUpdate=!1,u[2].r.shadowMap.needsUpdate=!0,u[2].c0=u[2].cam.position.clone();{let E=new kt().setFromObject(a);u[2].ctr=E.getCenter(Oe(0,0,0))}let f=-1,p=!0,d=0,_=0,M=0;function g(){t.classList.toggle("wide",i.clientWidth>=640);let E=Math.min(2,devicePixelRatio||1);u.forEach(v=>{let R=v.cv.clientWidth,A=v.cv.clientHeight;if(!R||!A)return;v.r.setPixelRatio(E),v.r.setSize(R,A,!1);let x=R/A;Object.assign(v.cam,{left:-v.R*x,right:v.R*x,top:v.R,bottom:-v.R}),v.cam.updateProjectionMatrix()})}new ResizeObserver(g).observe(i),g(),new IntersectionObserver(E=>{p=E[0].isIntersecting}).observe(i),u[0].el.addEventListener("click",()=>{f<0&&(f=performance.now()/1e3,setTimeout(()=>{f=-1,e.onBox&&e.onBox()},1e3))}),u[1].el.addEventListener("click",()=>{e.onWs&&e.onWs()}),u[2].el.addEventListener("click",()=>{e.onFc&&e.onFc()});let m=E=>E<0?0:E>1?1:E;function b(E){if(d=requestAnimationFrame(b),!p||!i.offsetParent||E-_<33)return;_=E;let v=E/1e3,R;if(f>=0)R=m((v-f)/.8);else{let A=v%7/7;R=A<.35?0:A<.5?(A-.35)/.15:A<.8?1:1-(A-.8)/.15}s.userData.open(R),r.rotation.y=Math.sin(v*.2)*.06,r.userData.anim&&r.userData.anim(v);{let A=u[2],x=Math.sin(v*.18)*.12,w=A.c0.clone().sub(A.ctr);w.applyAxisAngle(Oe(0,1,0),x),A.cam.position.copy(A.ctr).add(w),A.cam.lookAt(A.ctr)}for(let A of u)(A.kind!=="fc"||++M%2===0)&&A.r.render(A.sc,A.cam)}return d=requestAnimationFrame(b),{stop(){cancelAnimationFrame(d)}}}var Qd={eye:{t:"Wear eye protection",c:"M004",g:'<circle cx="50" cy="40" r="20" fill="#fff"/><path d="M22 92c2-17 13-26 28-26s26 9 28 26z" fill="#fff"/><rect x="27" y="31" width="46" height="15" rx="7" fill="#fff" stroke="#005EB8" stroke-width="3"/><rect x="31" y="34" width="16" height="9" rx="4.5" fill="#005EB8"/><rect x="53" y="34" width="16" height="9" rx="4.5" fill="#005EB8"/>'},clothing:{t:"Wear an apron",c:"M010",g:'<path d="M41 28c0-8 4-13 9-13s9 5 9 13" fill="none" stroke="#fff" stroke-width="4"/><path d="M38 28h24v20l8 38H30l8-38z" fill="#fff"/><path d="M38 48H22M62 48h16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="43" y="58" width="14" height="11" rx="2" fill="none" stroke="#005EB8" stroke-width="3"/>'},gloves:{t:"Wear protective gloves",c:"M009",g:'<path d="M34 86V50c0-3 2-5 5-5V26c0-3 2-5 4.5-5S48 23 48 26v-4c0-3 2-5 4.5-5S57 19 57 22v4c0-3 2-5 4.5-5S66 23 66 26v6c0-3 2-5 4.5-5S75 29 75 32v28c0 14-6 26-14 26z" fill="#fff"/><path d="M34 78h41" stroke="#005EB8" stroke-width="3"/><path d="M39 45l-9-9c-2-2-5-2-7 0s-2 5 0 7l11 13" fill="#fff"/>'},mask:{t:"Wear a dust mask",c:"M016",g:'<circle cx="50" cy="38" r="20" fill="#fff"/><path d="M22 92c2-17 13-26 28-26s26 9 28 26z" fill="#fff"/><path d="M35 40c4 1 9 2 15 2s11-1 15-2v8c0 7-7 12-15 12s-15-5-15-12z" fill="#005EB8"/><path d="M30 38l6 4M70 38l-6 4" stroke="#005EB8" stroke-width="3"/>'}};function Yy(i){let e=Qd[i];return`<svg viewBox="0 0 100 100" role="img" aria-label="${e.t}"><circle cx="50" cy="50" r="48" fill="#005EB8"/><circle cx="50" cy="50" r="48" fill="none" stroke="#fff" stroke-width="2.5"/>${e.g}</svg>`}function ef(i){return`<div class="bmsigns">${i.map(e=>`<div class="bmsign">${Yy(e)}<span>${Qd[e].t}</span></div>`).join("")}</div>`}var tf=`.bmsigns{display:flex;flex-wrap:wrap;gap:10px;margin:2px 0 12px}.bmsign{display:flex;align-items:center;gap:8px;background:#fff;color:#003B75;border-radius:999px;padding:4px 12px 4px 4px;font-size:13.5px;font-weight:800;line-height:1.15;max-width:100%}
.bmsign svg{width:40px;height:40px;flex:none}`,nf="Stand up while you work: never sit at the bench or a machine.",Zy={"Steel rule":["Measures and marks out lengths accurately, in millimetres. Always measure from the zero end.",["Carry it flat and keep the edge clean.","Don\u2019t use it as a lever or scraper: it bends and the scale is lost."]],"Try square":["Marks lines at 90\xB0 to an edge on wood, and checks that corners and edges are square. Hold the stock tight against a straight edge.",["Keep the stock against the face edge so the line is true.","Store it flat so the blade stays at 90\xB0."]],"Engineer\u2019s square":["The all-steel version of the try square, used on metal and plastic. Marks and checks 90\xB0 with a scriber.",["Handle with care: dropping it can knock it out of square.","Watch the sharp corners of the blade."]],"Marking gauge":["Marks a line parallel to an edge of wood, such as the depth of a joint. The stock slides along the edge while the pin scratches the line.",["Keep fingers away from the pin.","Push the gauge away from you along the edge."]],"Mortise gauge":["Has two pins, so it marks two parallel lines at once, such as the width of a mortise or tenon.",["Keep fingers away from the pins.","Set both pins before marking, then lock the stock."]],Scriber:["Scratches fine marking-out lines on metal and plastic, where a pencil wouldn\u2019t show.",["The point is very sharp: carry it point down and put the cap on if it has one.","Never leave it lying where someone could kneel or lean on it."]],"Centre punch":["Makes a small dent at the centre of a hole on metal, so the drill bit starts in the right place and doesn\u2019t wander.",["Hold it upright and tap it with a ball-pein hammer, not a mallet.","Wear goggles in case of chips."]],Dividers:["Scribe circles and arcs on metal, and step off equal distances. One leg sits in a centre punch mark.",["Both points are sharp: carry them closed and point down."]],"Outside callipers":["Measure the outside size of round or curved work, such as a bar on the lathe. The setting is then checked against a rule.",["Stop the lathe before measuring work on it."]],"Odd-leg callipers":["Mark a line parallel to an edge on metal, or find the centre of a bar. One leg runs along the edge.",["The point is sharp: keep fingers clear and carry it closed."]],Pencil:["Marks out on wood. A sharp pencil gives fine, accurate lines; shade the waste so you know which side to cut.",["Keep it sharp with a sharpener, not a knife."]],"Tenon saw":["Makes straight cuts in wood, such as the shoulders of joints. The stiff back keeps the blade straight.",["Clamp the work first and keep your other hand behind the saw.","Start the cut gently with short strokes."]],"Coping saw":["Cuts curves in wood and plastic. The thin blade can be turned in the frame to follow the line.",["Fit the blade with the teeth pointing towards the handle.","Hold the work in a vice and keep fingers clear of the blade."]],Hacksaw:["Cuts metal and plastic. The fine teeth on the tensioned blade cut on the forward stroke.",["Fit the blade with the teeth pointing forwards and tension it well.","Hold the work low in the vice so it doesn\u2019t vibrate."]],"Junior hacksaw":["A small hacksaw for light cutting of thin metal, plastic and tube.",["Hold the work firmly in a vice.","Watch for sharp burrs on the cut edge."]],"Bevel-edge chisel":["Cuts and pares wood, for example to remove the waste from a housing or halving joint. The bevelled sides get into corners.",["Always keep both hands behind the cutting edge.","Clamp the work and chisel away from your body."]],"Mortise chisel":["A strong, thick chisel for chopping deep mortises in wood with a mallet.",["Clamp the work firmly.","Strike it with a mallet, never a hammer."]],"Ball-pein hammer":["A metalwork hammer: the flat face hits a centre punch or rivet, and the round ball end shapes metal and spreads rivets.",["Check the head is tight on the handle.","Wear goggles when striking metal."]],"Cross-pein hammer":["Its narrow pein starts small nails and pins held between the fingers, then the flat face drives them home.",["Check the head is tight on the handle.","Keep your fingers clear once the nail stands on its own."]],"Claw hammer":["Drives nails into wood, and the claw pulls nails out.",["Check the head is tight.","Keep your fingers clear once the nail is started."]],"Wooden mallet":["Strikes chisels and taps wooden joints together without damaging them.",["Never hit metal or a hammer with it.","Make sure the head is tight on the handle."]],"Hide mallet":["A soft-faced mallet for shaping thin sheet metal without marking or stretching it.",["Keep it for sheet metal work, not chisels."]],"Jack plane":["A long plane for flattening and straightening wood, and planing it down to size.",["Keep your hands behind the blade and lay the plane on its side when not in use.","Clamp the wood firmly."]],"Smoothing plane":["A shorter plane for the final smooth finish on wood.",["Lay it on its side so the blade isn\u2019t damaged.","Keep fingers away from the mouth of the plane."]],"Rebate plane":["Cuts a rebate (a step) along the edge of wood. The blade goes right to the side of the plane.",["Clamp the work and keep hands behind the blade."]],"Plough plane":["Cuts a groove along wood, for example to hold a drawer bottom or a back panel.",["Clamp the work and keep hands behind the blade."]],"Twist drill":["Drills holes in wood, metal and plastic. The spiral flutes carry the waste out of the hole.",["Hold the work in a machine vice or clamp it, never by hand.","Remove the chuck key before starting."]],"Forstner bit":["Drills clean, flat-bottomed holes in wood, such as for hinges.",["Clamp the work and use a slow speed.","Lift the bit out often to clear the chips."]],"Countersink bit":["Shapes the top of a hole into a cone so a countersunk screw sits flush with the surface.",["Clamp the work and use a slow speed."]],"Centre drill":["Drills a small, accurate starting hole, for example in the end of a bar on the centre lathe, before drilling the full size.",["Use a slow, steady feed; the small tip snaps easily."]],"Flat file":["Smooths and shapes flat surfaces and edges of metal and plastic, and removes burrs.",["Always use a file with a handle fitted.","Brush away filings; don\u2019t blow them."]],"Half-round file":["One flat side and one curved side, for shaping flat surfaces and inside curves.",["Always use it with a handle fitted."]],"Hand router":["Levels the bottom of a housing or groove in wood to an even depth.",["Clamp the work and keep both hands on the handles."]],Pliers:["Grip, bend and hold small parts and wire. The cutters at the jaws snip wire.",["Keep fingers clear of the cutters.","Don\u2019t use them on nuts: they slip and round the corners."]],"Pop-rivet gun":["Fixes thin sheet material together from one side using pop rivets. Squeezing the handles pulls the mandrel and spreads the rivet.",["Point it away from people: the snapped mandrel can fly out.","Keep fingers clear of the nose."]],"Flat screwdriver":["Drives and removes slotted screws. Choose a tip that fills the slot.",["Never use it as a chisel or lever.","Hold the work so the screwdriver can\u2019t slip into your hand."]],"Cross-head screwdriver":["Drives and removes cross-head screws. The tip should fit the screw head exactly.",["Push firmly so it doesn\u2019t slip.","Don\u2019t use it as a lever."]],"Tin snips":["Cut thin sheet metal, like scissors.",["The cut edges are very sharp: wear gloves and remove the burr with a file."]],"Bending bars":["Held in the vice, they grip sheet metal along a line so it can be folded cleanly.",["Tighten the vice firmly and watch for sharp sheet edges."]],"Tap and wrench":["Cuts an internal thread inside a drilled hole so a bolt can screw in. Turn forwards, then back a little to break the swarf.",["Keep the tap upright: taps are brittle and snap if forced."]],"Die and stock":["Cuts an external thread on a metal rod so a nut can screw on.",["Keep the die square to the rod and use cutting fluid."]],"Nail punch":["Knocks the head of a nail just below the surface of the wood, so the hole can be filled.",["Hold it upright and strike it squarely."]],Bradawl:["Makes a small starting hole in wood for a screw or nail.",["Push it in across the grain and keep your other hand clear."]],"Bench vice":["Holds wood firmly on the bench while you saw, chisel or plane it.",["Don\u2019t over-tighten or hit the handle with a hammer.","Keep the handle turned down so no one walks into it."]],"Engineer\u2019s vice":["Holds metal and plastic firmly for sawing, filing and bending.",["Use soft jaws to protect finished surfaces.","Don\u2019t leave the handle sticking out."]],"Machine vice":["Holds work flat and secure on the pillar drill table, so you never hold it by hand.",["Bolt or clamp it to the table if the work is large."]],"Hand vice":["Holds small or thin pieces safely while drilling or working on them, instead of using your fingers.",["Grip the work tightly before drilling."]],"Soft jaws (vice guards)":["Fit over the jaws of an engineer\u2019s vice to stop them marking soft or finished work.",["Check they sit firmly before tightening the vice."]],"G clamp":["Holds work to the bench or holds pieces together while glue sets.",["Use scrap wood under the jaws to protect the work.","Don\u2019t over-tighten."]],"Quick clamp":["A one-handed clamp: squeeze the trigger to tighten and press the button to release. Great for holding a guide block when sawing.",["Check it is tight before you start cutting."]],"Sash cramp":["A long cramp that holds a frame or wide panel together while the glue sets.",["Use scrap wood under the jaws and check the frame is square."]],"Belt sander":["Sands, smooths and shapes the edges and ends of wood. The belt runs down towards the table.",["Switch on the dust extraction first.","Rest the work on the table and keep fingers well away from the belt.","Only sand below the guard; never sand very small pieces by hand.","Wear goggles."]],"Pillar drill":["Drills accurate holes at 90\xB0 in wood, metal and plastic. The depth stop sets how deep the hole goes.",["Hold the work in a machine vice or clamp it, never by hand.","Lower the guard and remove the chuck key before starting.","Tie hair back, tuck in loose clothing and wear goggles."]],"Fret (scroll) saw":["Cuts curves and shapes in thin wood, MDF and acrylic with a fine blade that moves up and down quickly.",["Set the hold-down foot just above the work.","Keep fingers to the side of the blade, never in line with it.","Switch off and wait before clearing offcuts."]],"Centre lathe":["Turns metal (and some plastics) to make round parts: facing off, parallel turning, taper turning, knurling and drilling.",["Close the chuck guard and remove the chuck key.","Never touch swarf with your hands; use a brush.","Stop the machine before measuring. Wear goggles."]],"Wood lathe":["Turns wood to make round parts such as handles and legs, or bowls on a faceplate.",["Set the tool rest close to the work and spin the wood by hand before switching on.","Hold the tool firmly on the rest.","Wear goggles or a face shield."]],"Mortise machine":["Cuts square holes (mortises) in wood for mortise and tenon joints, using a hollow square chisel with an auger inside.",["Clamp the work against the fence.","Set the depth stop and keep hands away from the chisel."]],Fluidiser:["Plastic dip coating: a hot metal part is dipped into plastic powder kept moving by air, and the powder melts onto it as a smooth coating.",["Use tongs and heatproof gloves for hot metal.","Let the part cool on a heatproof surface.","Work with good ventilation."]],"Spot welder":["Joins two pieces of thin sheet steel. Pulling the lever down squeezes the sheets between the copper electrodes, and a large electric current melts a small spot where they touch.",["Keep fingers away from the electrodes; pull the lever down only when your hands are clear.","The metal stays very hot: hold it with pliers and let it cool.","Make sure the metal is clean so the weld is strong."]],"Strip heater":["Heats a narrow line across thermoplastic sheet such as acrylic so it can be bent along that line.",["Never touch the hot wires or the cover above them.","Don\u2019t overheat: bubbles mean it\u2019s too hot.","Switch off when finished and let it cool."]]},Ky={"Tin snips":["gloves"],"Bending bars":["gloves"],"Hide mallet":["gloves"],"Belt sander":["mask"],Fluidiser:["gloves"],"Strip heater":["gloves"],"Spot welder":["gloves"]},Jy=i=>["eye","clothing",...Ky[i]||[]],$y={bench:{n:"Workbench and bench vice",use:"Where most hand-tool work happens: marking out, sawing, chiselling and planing. The bench vice holds wood firmly while you work on it.",safe:["Keep the bench clear: put tools back once you have used them.","Clamp the work in the vice or to the bench, never hold it in your hand while you saw or chisel.","Keep both hands behind a chisel\u2019s cutting edge.","Carry tools with sharp edges pointing down."],ppe:null},pillarDrill:{n:"Pillar drill",use:"Drills accurate holes at 90\xB0 to the surface in wood, metal and plastic. The table moves up and down, and the depth stop sets how deep the hole goes.",safe:["Hold the work in a machine vice or clamp it to the table, never by hand.","Lower the guard over the chuck before you start.","Take the chuck key out straight away.","Tie hair back and tuck in loose clothing.","Know where the emergency stop is."],ppe:null},beltSander:{n:"Belt sander",use:"Sands, smooths and shapes the edges and ends of wood. The belt runs down towards the table, so the work is pushed onto the table, not lifted.",safe:["Switch on the dust extraction first.","Rest the work on the table and keep fingers well away from the belt.","Only sand below the guard, using the gap above the table.","Never sand very small pieces by hand."],ppe:null},fretSaw:{n:"Fret (scroll) saw",use:"Cuts curves and shapes in thin wood, MDF and acrylic. The fine blade moves up and down very quickly.",safe:["Set the hold-down foot just above the work.","Keep fingers to the side of the blade, never in line with it.","Feed the work gently; let the blade do the cutting.","Switch off and wait before clearing offcuts."],ppe:null},centreLathe:{n:"Centre lathe",use:"Turns metal (and some plastics) to make round parts. Processes include facing off, parallel turning, taper turning, knurling and drilling.",safe:["Close the chuck guard before starting.","Remove the chuck key: never leave it in the chuck.","Never touch swarf with your hands; use a brush.","Stop the machine before measuring the work.","Tie hair back and tuck in loose clothing."],ppe:null},woodLathe:{n:"Wood lathe",use:"Turns wood to make round parts such as handles and legs (between centres) or bowls (on a faceplate).",safe:["Set the tool rest close to the work and turn the wood by hand before switching on.","Check the speed is right for the size of the wood.","Hold the turning tool firmly on the tool rest.","Move the tool rest out of the way before sanding."],ppe:null},mortiser:{n:"Mortise machine",use:"Cuts square holes (mortises) in wood for mortise and tenon joints. A square hollow chisel cuts the sides while an auger bit inside clears the waste.",safe:["Clamp the work against the fence before cutting.","Set the depth stop so the chisel stops at the right depth.","Keep hands away from the chisel.","Lift the lever slowly to clear the chips."],ppe:null},fluidiser:{n:"Fluidiser (with oven)",use:"Plastic dip coating. A metal part is heated in the oven, then dipped into plastic powder that is kept moving by air from below. The powder melts onto the hot metal to give a smooth plastic coating.",safe:["Use tongs to move hot metal and heatproof gloves.","Hold the part in the powder for a few seconds only, then let it cool on a heatproof surface.","Keep the lid closed when not in use.","Work with good ventilation."],ppe:null},spotWelder:{n:"Spot welder",use:"Joins two pieces of thin sheet steel together. Pulling the lever down squeezes the sheets between the copper electrodes, then a large electric current melts a small spot where they touch, welding them.",safe:["Keep fingers well away from the electrodes: pull the lever down only when your hands are clear.","The metal stays very hot after welding: hold it with pliers and let it cool.","Sparks can fly: keep the area clear.","Make sure the metal is clean so the weld is strong."],ppe:null},stripHeater:{n:"Strip heater",use:"Heats a narrow line across a sheet of thermoplastic such as acrylic so that it can be bent along that line, often over a former or jig.",safe:["Never touch the hot wires or the plate above them.","Turn thicker sheet over to heat both sides evenly.","Do not overheat: bubbles mean it is too hot.","Switch off when finished and let it cool."],ppe:null}},jy={spotWelder:["eye","clothing","gloves"],beltSander:["eye","clothing","mask"],fluidiser:["eye","clothing","gloves"],stripHeater:["eye","clothing","gloves"]},Qy=["bench","pillarDrill","beltSander","centreLathe","woodLathe","mortiser","fretSaw","spotWelder","fluidiser","stripHeater"],e1={sandCasting:{n:"Sand casting",use:"Molten metal is poured into a mould made of sand. The mould is broken up to get the casting out, so each mould is used once: good for one-off and small batch production.",steps:[[0,2,"Sand is rammed into the drag (the bottom box) round the wooden pattern."],[2,3,"The drag is turned over so the flat face of the pattern is on top."],[3,6,"The cope (the top box) goes on. Pins for the sprue and the riser are put in, then the cope is rammed with sand."],[6,9.5,"The pins come out, the cope is lifted off and the pattern is taken out, leaving a hollow the shape of the product. The cope goes back on."],[9.5,14.6,"Molten aluminium is poured into the sprue until it shows at the riser. The riser lets air out and feeds the casting as it shrinks."],[14.6,17,"The metal cools and turns solid."],[17,20.5,"The sand is broken away and the casting is lifted out."],[20.5,23,"The sprue and riser are cut off, ready for the casting to be finished."]]},dieCaster:{n:"Die casting machine",use:"Molten metal is forced into a steel mould called a die. Dies are expensive but last for thousands of castings, so die casting suits mass production. This machine makes aluminium model cars.",steps:[[0,2.4,"A ladle scoops molten aluminium from the holding furnace."],[2.4,6,"The ladle pours the metal into the shot sleeve."],[6,6.4,"The plunger forces the metal into the closed die under high pressure."],[6.4,8.4,"The metal cools and turns solid in seconds."],[8.4,9.4,"The die opens and ejector pins push the casting out."],[9.4,12,"The finished car drops into the bin and the die closes, ready for the next one."]]},rotoMoulder:{n:"Rotational moulding machine",use:"Makes large hollow products in one piece, such as kayaks, traffic cones and water tanks. This machine is making a kayak.",steps:[[0,2.5,"Plastic powder is put into the bottom half of the mould."],[2.5,4,"The mould is closed and clamped."],[4,9,"The oven doors open and the mould moves into the oven."],[9,18,"The mould turns slowly on two axes while it heats, so the melting powder coats the inside evenly."],[18,22,"The mould comes back out of the oven."],[22,27,"It keeps turning while the fans cool it, so the plastic sets evenly."],[27,33.5,"The mould opens and the kayak is lifted out: one hollow piece."]]},injectionMoulder:{n:"Injection moulding machine",use:"Mass-produces accurate plastic parts with a good finish, such as bottle tops, casings and toy building bricks.",steps:[[0,3.2,"Plastic granules drop from the hopper into the barrel. Heater bands and the turning screw melt them, and molten plastic builds up at the front."],[3.2,4,"The screw rams forward, forcing the molten plastic into the closed mould."],[4,4.96,"The plastic cools and hardens in the mould."],[4.96,5.6,"The mould opens."],[5.6,7.85,"Ejector pins push the brick out and it drops into the bin."]]},vacuumFormer:{n:"Vacuum former",use:"Shapes a thermoplastic sheet over a mould. Used for trays, packaging and blister packs. This one is making a biscuit tray.",steps:[[0,3,"A thermoplastic sheet such as HIPS is clamped in the frame."],[3,9,"The heater slides over and the sheet softens."],[9,11,"The heater goes back and the lever raises the mould into the soft sheet."],[11,13.5,"The vacuum pump sucks the air out, pulling the sheet tight over the mould."],[13.5,17.5,"The mould is lowered, the frame is opened and the formed sheet is taken out."],[17.5,20.5,"The tray is trimmed out of the sheet."],[20.5,23,"The finished tray."]]}},t1=["sandCasting","dieCaster","rotoMoulder","injectionMoulder","vacuumFormer"],n1=`.bttw{position:absolute;inset:0;overflow:hidden;font-family:inherit;color:#F4F4F6}.bttview{position:absolute;inset:0}.bttview canvas{display:block;touch-action:none}
.bttpins{position:absolute;inset:0;pointer-events:none}
.bttpin{position:absolute;left:0;top:0;pointer-events:auto;display:flex;flex-direction:column;align-items:center;gap:4px;border:0;background:none;color:#fff;font:inherit;cursor:pointer;touch-action:manipulation}
.bttpin span{background:rgba(30,31,35,.88);border:1px solid rgba(244,179,194,.55);border-radius:999px;padding:4px 10px;font-size:13px;font-weight:700;white-space:nowrap}
.bttpin i{order:2;width:12px;height:12px;border-radius:50%;background:#F4B3C2;box-shadow:0 0 0 4px rgba(244,179,194,.3)}
.bttpin.bton span{background:#F4B3C2;color:#2B141D}.bttw.btfocus .bttpin:not(.bton){opacity:.35}
.btttop{position:absolute;left:12px;top:12px;background:rgba(30,31,35,.88);border-radius:14px;padding:8px 12px;pointer-events:none}
.btttop b{display:block;font-size:17px}.btttop span{font-size:13px;color:#BFC3C8}
.bttback{position:absolute;left:12px;top:68px;border:0;border-radius:999px;background:#B9E5CB;color:#1F4D33;font:inherit;font-weight:800;padding:9px 16px;cursor:pointer}
.bttcard{position:absolute;right:12px;top:12px;bottom:12px;width:min(380px,calc(100% - 24px));overflow:auto;background:rgba(30,31,35,.95);border:1px solid #3A3B41;border-radius:20px;padding:18px 18px 14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}
.bttcard h2{margin:0 40px 8px 0;font-size:22px;color:#F4B3C2!important}.bttcard h3{margin:14px 0 6px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#B9E5CB}
.bttuse{margin:0;font-size:15px;line-height:1.45;color:#E6E7EA}.bttsafe{margin:0;padding-left:20px;font-size:15px;line-height:1.45}.bttsafe li{margin:0 0 6px}.bttcard h3.bttmust{color:#8EC5FF}
.bttx{position:absolute;right:10px;top:10px;width:36px;height:36px;border:0;border-radius:50%;background:#3A3B41;color:#fff;font-size:16px;cursor:pointer}
.bttnav{display:flex;gap:8px;margin-top:14px}.bttnav button{flex:1;border:1px solid #3A3B41;background:#2A2B30;color:#F4F4F6;border-radius:12px;padding:10px;font:inherit;font-weight:700;cursor:pointer}
.bttsteps{list-style:none;margin:6px 0 0;padding:0;display:grid;gap:7px}
.bttstep{display:flex;gap:10px;align-items:flex-start;width:100%;text-align:left;border:1px solid #3A3B41;background:#26272C;color:#E6E7EA;border-radius:14px;padding:10px 12px;font:inherit;font-size:14.5px;line-height:1.4;cursor:pointer}
.bttstep b{flex:none;width:26px;height:26px;border-radius:50%;background:#3A3B41;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px}
.bttstep.btdone{opacity:.75}.bttstep.btdone b{background:#B9E5CB;color:#1F4D33}
.bttstep.bton{border-color:#F4B3C2;background:#33262C}.bttstep.bton b{background:#F4B3C2;color:#2B141D}
.bttstep.btnx{border-color:#8EC5FF}
.bttplay{display:flex;gap:8px;margin:12px 0 0}.bttplay button{flex:1;border:0;border-radius:12px;padding:10px;font:inherit;font-weight:800;cursor:pointer;background:#B9E5CB;color:#1F4D33}.bttplay button.btalt{background:#2A2B30;color:#F4F4F6;border:1px solid #3A3B41}
@media (max-width:700px){.bttcard{top:auto;right:8px;left:8px;width:auto;bottom:8px;max-height:56%}.bttw.btfocus .btttop span{display:none}.bttback{top:52px}}`;function i1(i,e={}){let t=!!e.factory,n=t?e1:$y,s=t?t1:Qy,r=jy;for(let[j,fe]of[["signcss",tf],["tourcss",n1]])if(!document.getElementById(j)){let Z=document.createElement("style");Z.id=j,Z.textContent=fe,document.head.appendChild(Z)}i.innerHTML=`<div class="bttw"><div class="bttview"></div><div class="bttpins"></div>
  <div class="btttop"><b>${e.title||(t?"The factory":"Workshop tour")}</b><span>${t?"Tap a machine, then tap each step":"Tap a machine to find out about it"}</span></div>
  <button class="bttback" hidden>\u2190 ${t?"Whole factory":"Whole workshop"}</button>
  <aside class="bttcard" hidden><button class="bttx" aria-label="Close">\u2715</button><h2></h2><p class="bttuse"></p>
   <div class="bttfac" ${t?"":"hidden"}><h3>Step by step</h3><ol class="bttsteps"></ol><div class="bttplay"><button class="bttall">\u25B6 Play all steps</button></div></div>
   <div class="bttws" ${t?"hidden":""}><h3 class="bttmust">You must wear</h3><div class="bttppe"></div><h3>Stay safe</h3><ul class="bttsafe"></ul></div>
   <div class="bttnav"><button class="bttprev">\u2039 Previous</button><button class="bttnext">Next \u203A</button></div></aside></div>`;let a=j=>i.querySelector(j),o=a(".bttview"),l=new xi({antialias:!0,powerPreference:"high-performance"});l.setPixelRatio(Math.min(1.5,devicePixelRatio||1)),l.toneMapping=ni,l.shadowMap.enabled=!0,l.shadowMap.type=ts,o.appendChild(l.domElement);let c=new In;c.background=new rt(1974051),c.environment=new Bi(l).fromScene(new qs,.04).texture,c.environmentIntensity=.7;let u=t?jd():Jd();c.add(u),u.traverse(j=>{j.isMesh&&(j.castShadow=!j.material.transparent,j.receiveShadow=!0)});let f=new pi(16773596,2.2);f.position.set(...t?[-10,650,360]:[140,320,220]),f.castShadow=!0,t&&(f.target.position.set(-270,0,-60),c.add(f.target));let p=t?700:240;Object.assign(f.shadow.camera,{left:-p,right:p,top:p,bottom:-p,near:1,far:t?1800:900}),f.shadow.mapSize.set(2048,2048),f.shadow.bias=-8e-4,f.shadow.normalBias=.6,f.shadow.autoUpdate=!1,l.shadowMap.autoUpdate=!1,l.shadowMap.needsUpdate=!0,c.add(f,new Dr(16777215,4473924,.35));let d=new Vt(36,1,1,5e3),_=new Kr(d,l.domElement);_.enableDamping=!0,_.maxPolarAngle=Math.PI*.46,_.minDistance=60,_.maxDistance=t?2200:950,_.enablePan=t,_.screenSpacePanning=!1;let M=t?{p:Oe(-150,860,1120),t:Oe(-270,30,-60)}:{p:Oe(400,440,520),t:Oe(0,10,0)};d.position.copy(M.p),_.target.copy(M.t);let g=null,m=null,b=null,E=-1,v=!0;_.addEventListener("change",()=>v=!0);let R=u.userData.items.map(j=>{j.obj.updateMatrixWorld(!0);let fe=new kt().setFromObject(j.obj);return{...j,c:j.obj.userData.focus?j.obj.localToWorld(j.obj.userData.focus.clone()):fe.getCenter(Oe(0,0,0)),top:Oe((fe.min.x+fe.max.x)/2,j.obj.userData.pinY||fe.max.y+8,(fe.min.z+fe.max.z)/2),rad:fe.getBoundingSphere(new Dn).radius}}),A=a(".bttpins");A.innerHTML=R.map(j=>`<button class="bttpin" data-k="${j.key}"><i></i><span>${{bench:"Workbench",fretSaw:"Fret saw",fluidiser:"Fluidiser",injectionMoulder:"Injection moulding",rotoMoulder:"Rotational moulding",dieCaster:"Die casting",sandCasting:"Sand casting"}[j.key]||n[j.key].n}</span></button>`).join("");let x={p:M.p.clone(),t:M.t.clone()};function w(){let j=o.clientWidth,fe=o.clientHeight;if(!j||!fe)return;l.setSize(j,fe),d.aspect=j/fe,d._ox=-1,d.updateProjectionMatrix();let Z=Math.max(1,(t?1.55:1.3)/d.aspect);M.p.copy(x.t).add(x.p.clone().sub(x.t).multiplyScalar(Z)),!m&&!g&&(d.position.copy(M.p),_.target.copy(M.t)),v=!0}new ResizeObserver(w).observe(o),w();function k(j,fe,Z=1100){g={p0:d.position.clone(),t0:_.target.clone(),p:j,t:fe,s:performance.now(),dur:Z}}let I=a(".bttsteps");function U(j,fe){let Z=R.find(oe=>oe.key===j);Z&&Z.anim&&(Z.anim(fe),l.shadowMap.needsUpdate=!0,v=!0)}function F(){let j=n[m].steps.length;I.querySelectorAll(".bttstep").forEach((fe,Z)=>{fe.classList.toggle("bton",Z===E&&!!b),fe.classList.toggle("btdone",Z<E||Z===E&&!b),fe.classList.toggle("btnx",!b&&Z===E+1)}),a(".bttall").textContent=b&&b.all?"\u275A\u275A Pause":E>=j-1&&!b?"\u21BA Play again":E>=0?"\u25B6 Play the rest":"\u25B6 Play all steps"}function N(j,fe){let Z=n[m].steps;if(j>=Z.length){b=null,F();return}E=j;let[oe,me]=Z[j];b={a:oe,b:me,t:oe,last:performance.now(),all:fe},U(m,oe),F();let ye=a(".bttcard"),re=I.children[j];if(ye&&re){let ve=re.offsetTop-ye.clientHeight*.3;ye.scrollTo({top:Math.max(0,ve),behavior:"smooth"})}}I.addEventListener("click",j=>{let fe=j.target.closest(".bttstep");fe&&N(+fe.dataset.i,!1)}),a(".bttall").onclick=()=>{let j=n[m].steps.length;if(b&&b.all){b=null,F();return}N(E>=j-1?0:E+1,!0)};function C(j){m=j,b=null,E=-1;let fe=R.find(re=>re.key===j),Z=n[j],oe=fe.obj.userData.view?fe.obj.userData.view.clone().applyQuaternion(fe.obj.getWorldQuaternion(new en)).setY(0).normalize():d.position.clone().sub(_.target).setY(0).normalize(),me=fe.c.clone(),ye=Math.max(140,fe.rad*(fe.obj.userData.zoom||1)*(fe.rad>200?1.75:3.3))*(o.clientWidth<=700?1.55:1);k(me.clone().add(oe.multiplyScalar(ye)).add(Oe(0,ye*.55,0)),me),a(".bttcard h2").textContent=Z.n,a(".bttuse").textContent=Z.use,t?(I.innerHTML=Z.steps.map((re,ve)=>`<li><button class="bttstep" data-i="${ve}"><b>${ve+1}</b><span>${re[2]}</span></button></li>`).join(""),U(j,Z.steps[0][0]),F()):(a(".bttsafe").innerHTML=`<li>${nf}</li>`+Z.safe.map(re=>`<li>${re}</li>`).join(""),a(".bttppe").innerHTML=ef(r[j]||["eye","clothing"])),a(".bttcard").hidden=!1,a(".bttcard").scrollTop=0,a(".bttback").hidden=!1,i.querySelector(".bttw").classList.add("btfocus"),A.querySelectorAll(".bttpin").forEach(re=>re.classList.toggle("bton",re.dataset.k===j))}function B(){t&&m&&U(m,R.find(j=>j.key===m).obj.userData.idle||0),m=null,b=null,k(M.p.clone(),M.t.clone()),a(".bttcard").hidden=!0,a(".bttback").hidden=!0,i.querySelector(".bttw").classList.remove("btfocus"),A.querySelectorAll(".bttpin").forEach(j=>j.classList.remove("bton"))}A.addEventListener("click",j=>{let fe=j.target.closest(".bttpin");fe&&C(fe.dataset.k)}),a(".bttx").onclick=B,a(".bttback").onclick=B,a(".bttnext").onclick=()=>{t&&m&&U(m,R.find(j=>j.key===m).obj.userData.idle||0),C(s[(s.indexOf(m)+1)%s.length])},a(".bttprev").onclick=()=>{t&&m&&U(m,R.find(j=>j.key===m).obj.userData.idle||0),C(s[(s.indexOf(m)+s.length-1)%s.length])};let Y=new Ur,W=null;l.domElement.addEventListener("pointerdown",j=>{W={x:j.clientX,y:j.clientY}}),l.domElement.addEventListener("pointerup",j=>{if(!W||Math.hypot(j.clientX-W.x,j.clientY-W.y)>6){W=null;return}W=null;let fe=l.domElement.getBoundingClientRect();Y.setFromCamera(Oe((j.clientX-fe.left)/fe.width*2-1,-(j.clientY-fe.top)/fe.height*2+1,0),d);let Z=Y.intersectObjects(R.map(oe=>oe.obj),!0)[0];if(Z){let oe=Z.object;for(;oe&&!oe.userData.key;)oe=oe.parent;oe&&C(oe.userData.key)}});let X=Oe(0,0,0),q=0,L=!0;function Q(j){if(!L)return;if(q=requestAnimationFrame(Q),!i.isConnected){L=!1,l.dispose();return}if(!o.offsetParent)return;if(g){let oe=Math.min(1,(j-g.s)/g.dur),me=oe<.5?4*oe*oe*oe:1-Math.pow(-2*oe+2,3)/2;d.position.lerpVectors(g.p0,g.p,me),_.target.lerpVectors(g.t0,g.t,me),oe>=1&&(g=null),v=!0}{let oe=o.clientWidth,me=o.clientHeight,ye=!!m,re=oe<=700,ve=ye&&!re?oe*.17:0,nt=ye&&re?me*.26:0;(d._ox!==ve||d._oy!==nt)&&(d._ox=ve,d._oy=nt,ve||nt?d.setViewOffset(oe,me,ve,nt,oe,me):d.clearViewOffset(),v=!0)}if(_.update(),t){if(b){let oe=Math.min(.1,(j-b.last)/1e3);if(b.last=j,b.t=Math.min(b.b,b.t+oe),U(m,b.t),b.t>=b.b){let me=b.all,ye=E;b=null,me?N(ye+1,!0):F()}}}else u.userData.anim&&(u.userData.anim(j/1e3),l.shadowMap.needsUpdate=!0,v=!0);if(!v)return;v=!1,l.render(c,d);let fe=o.clientWidth,Z=o.clientHeight;A.querySelectorAll(".bttpin").forEach((oe,me)=>{X.copy(R[me].top).project(d);let ye=X.z<1&&Math.abs(X.x)<1.05&&Math.abs(X.y)<1.05;oe.style.display=ye?"":"none",oe.style.transform=`translate(${(X.x*.5+.5)*fe}px,${(-X.y*.5+.5)*Z}px) translate(-50%,-100%)`})}return q=requestAnimationFrame(Q),{stop(){L=!1,cancelAnimationFrame(q)},home:B}}var sf=[["Measuring and marking out",[["Steel rule",qc,[70,0,-20]],["Try square",Yc,[65,25,0]],["Engineer\u2019s square",qx,[65,25,0]],["Marking gauge",cl,[15,-35,0]],["Mortise gauge",Yx,[15,-35,0]],["Scriber",Pd,[10,0,-60]],["Centre punch",Zx,[10,0,-55]],["Dividers",Jx,[5,-20,0]],["Outside callipers",$x,[5,-20,0]],["Odd-leg callipers",jx,[5,-20,0]],["Pencil",zx,[10,0,-60]]]],["Saws",[["Tenon saw",Zc,[5,-18,0]],["Coping saw",Gx,[5,-20,0]],["Hacksaw",Id,[5,-20,0]],["Junior hacksaw",Qx,[5,-20,0]]]],["Chisels",[["Bevel-edge chisel",Kc,[35,20,-60]],["Mortise chisel",ey,[15,-20,-55]]]],["Hammers and mallets",[["Ball-pein hammer",ny,[10,-30,-20]],["Cross-pein hammer",iy,[10,-30,-20]],["Claw hammer",Ld,[10,-30,-20]],["Wooden mallet",Jc,[10,-35,-20]],["Hide mallet",sy,[10,-30,-20]]]],["Planes",[["Jack plane",Nd,[25,-30,0]],["Smoothing plane",Cd,[25,-30,0]],["Rebate plane",ry,[25,-30,0]],["Plough plane",ay,[25,-30,0]]]],["Drill bits",[["Twist drill",Ud,[15,0,-35]],["Forstner bit",oy,[38,55,0]],["Countersink bit",ly,[20,0,-30]],["Centre drill",cy,[15,0,-55]]]],["Other hand tools",[["Flat file",Od,[40,-15,10]],["Half-round file",hy,[40,-15,10]],["Hand router",uy,[35,-25,0]],["Pliers",Bd,[15,-15,20]],["Pop-rivet gun",fy,[5,-25,0]],["Flat screwdriver",xy,[10,0,-55]],["Cross-head screwdriver",yy,[10,0,-55]],["Tin snips",dy,[8,-15,4]],["Bending bars",py,[20,-25,-8]],["Tap and wrench",my,[20,-20,0]],["Die and stock",gy,[55,-15,0]],["Nail punch",Kx,[10,0,-55]],["Bradawl",_y,[10,0,-55]]]],["Holding and clamping",[["Bench vice",kd,[20,-35,0]],["Engineer\u2019s vice",Hd,[20,-35,0]],["Machine vice",vy,[25,-35,0]],["Hand vice",My,[5,-18,0]],["Soft jaws (vice guards)",Ty,[22,-35,0]],["G clamp",by,[5,-25,0]],["Quick clamp",Ey,[100,-25,-90]],["Sash cramp",Sy,[20,-20,0]]]],["Machines",[["Belt sander",zd,[14,-30,0]],["Pillar drill",Gd,[8,-35,0]],["Fret (scroll) saw",Vd,[14,-40,0]],["Centre lathe",Wd,[16,-22,0]],["Wood lathe",Xd,[16,-22,0]],["Mortise machine",qd,[10,-35,0]],["Fluidiser",Yd,[30,-30,0]],["Strip heater",Zd,[28,-25,0]]]]];function ol(i,e){let t=i(),n=t.userData.anim;t.quaternion.copy(kx(...e));let s=new je;s.add(t),s.updateMatrixWorld(!0);let r=new kt().setFromObject(t),a=r.getCenter(Oe(0,0,0));t.position.sub(a);let o=new je;return o.add(s),o.userData.anim=n,{g:o,r:r.getSize(Oe(0,0,0)).length()/2}}function ll(i,e){i.environment=new Bi(e).fromScene(new qs,.04).texture,i.environmentIntensity=.7;let t=new pi(16773596,2.2);t.position.set(6,10,9);let n=new pi(12571903,1.8);n.position.set(-8,4,-10),i.add(t,n,new Fs(16777215,.25))}var s1=tf+`.tl-n{color:#BFC3C8;margin:0 0 6px;font-size:14px}
.tl-h{font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#F4B3C2;margin:22px 0 10px;font-family:inherit;font-weight:800}
.tl-g{background:none!important;padding:0!important;border:0!important;display:grid;grid-template-columns:repeat(auto-fill,minmax(98px,1fr));gap:10px}
.tl-t{border:1px solid rgba(255,255,255,.14);border-radius:14px;background:radial-gradient(120% 100% at 50% 15%,#3a3b41,#1d1e22 72%);padding:6px 6px 9px;cursor:pointer;color:#F4F4F6;display:flex;flex-direction:column;align-items:center;gap:4px;font:inherit}
.tl-t img{width:100%;aspect-ratio:1;background:rgba(255,255,255,.03);border-radius:10px}
.tl-t span{font-size:13px;font-weight:700;text-align:center;line-height:1.2}
.tl-t:active{transform:scale(.97)}.tl-t:focus-visible{outline:3px solid var(--rasp,#A83A60);outline-offset:2px}
#tlov{position:fixed;inset:0;display:none;z-index:999;touch-action:none;overscroll-behavior:contain;-webkit-user-select:none;user-select:none;background:radial-gradient(130% 90% at 50% 100%,#3a3b41 0%,#1e1f23 50%,#111214 100%)}
#tlov.on{display:block}#tlov *{touch-action:none}#tlovc canvas{position:absolute;inset:0;touch-action:none}
#tlovn{position:absolute;left:0;right:0;bottom:max(34px,env(safe-area-inset-bottom));text-align:center;font-size:24px;font-weight:800;color:#F4F4F6;pointer-events:none;padding:0 60px}
.tlob{position:absolute;border:0;border-radius:50%;width:46px;height:46px;background:rgba(255,255,255,.14);color:#fff;font-size:20px;cursor:pointer}
#tlovx{top:max(14px,env(safe-area-inset-top));right:14px}
#tlab{position:absolute;left:0;right:0;top:max(16px,env(safe-area-inset-top));display:flex;justify-content:center;gap:8px;pointer-events:none}
#tlab button{pointer-events:auto;border:0;border-radius:999px;padding:9px 16px;font:inherit;font-size:14px;font-weight:800;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3)}
#tlab [data-ab=use]{background:#B9E5CB;color:#1F4D33}#tlab [data-ab=safe]{background:#005EB8;color:#fff}#tlab button[aria-pressed=true]{outline:3px solid #fff;outline-offset:2px}
#tlinfo{position:absolute;left:50%;transform:translateX(-50%);top:calc(max(16px,env(safe-area-inset-top)) + 54px);width:min(460px,calc(100% - 28px));max-height:46%;overflow:auto;background:rgba(30,31,35,.94);border:1px solid #3A3B41;border-radius:18px;padding:14px 18px;color:#F4F4F6;box-shadow:0 10px 30px rgba(0,0,0,.4)}
#tlinfo h4{margin:0 0 6px;font-size:13px;letter-spacing:.06em;text-transform:uppercase}#tlinfo.use h4{color:#B9E5CB}#tlinfo.safe h4{color:#8EC5FF}#tlinfo.safe{border-color:#2F6FB5}
#tlinfo p{margin:0;font-size:15.5px;line-height:1.45}#tlinfo ul{margin:0;padding-left:20px;font-size:15.5px;line-height:1.45}#tlinfo li{margin:0 0 4px}#tlovp{left:14px;top:50%}#tlovnx{right:14px;top:50%}`;function r1(i){let e=document.createElement("style");e.textContent=s1,document.head.appendChild(e);let t=document.createElement("div");t.id="tlov",t.setAttribute("role","dialog"),t.setAttribute("aria-label","3D tool viewer"),t.innerHTML='<div id="tlovc"></div><div id="tlab"><button type="button" data-ab="use" aria-pressed="false">Tool use</button><button type="button" data-ab="safe" aria-pressed="false">Stay safe</button></div><div id="tlinfo" hidden></div><div id="tlovn"></div><button class="tlob" id="tlovx" aria-label="Close">\u2715</button><button class="tlob" id="tlovp" aria-label="Previous tool">\u2039</button><button class="tlob" id="tlovnx" aria-label="Next tool">\u203A</button>',document.body.appendChild(t);let n=[],s="";for(let[I,U]of sf){s+=`<h3 class="tl-h">${I}</h3><div class="tl-g">`;for(let[F,N,C]of U)s+=`<button type="button" class="tl-t" data-i="${n.length}"><img alt=""><span>${F}</span></button>`,n.push([F,N,C]);s+="</div>"}i.innerHTML=`<p class="tl-n">${n.length} tools and machines \xB7 tap one to see it turn. Drag to spin it yourself.</p>`+s;let r=new xi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});r.setSize(256,256),r.setPixelRatio(1),r.toneMapping=ni;let a=new In;ll(a,r);let o=new Vt(30,1,.1,800),l=i.querySelectorAll(".tl-t img"),c=0;(function I(){let U=performance.now();for(;c<n.length&&performance.now()-U<40;){let[F,N,C]=n[c],{g:B,r:Y}=ol(N,C);a.add(B),o.position.set(0,Y*.25,Y*3.6),o.lookAt(0,0,0),r.render(a,o),l[c].src=r.domElement.toDataURL(),a.remove(B),c++}c<n.length?setTimeout(I,16):r.dispose()})();let u=new xi({antialias:!0,alpha:!0});u.setPixelRatio(Math.min(2,devicePixelRatio||1)),u.toneMapping=ni,document.getElementById("tlovc").appendChild(u.domElement);let f=new In;ll(f,u);let p=new Vt(30,1,.1,800),d=new Kr(p,u.domElement);d.enablePan=!1,d.enableDamping=!0;let _=null,M=0,g=0,m=null;function b(I){M=(I+n.length)%n.length,_&&f.remove(_);let[U,F,N]=n[M],{g:C,r:B}=ol(F,N);_=C,f.add(C);let Y=Math.max(1,.85/Math.max(.3,innerWidth/innerHeight));p.position.set(0,B*.3*Y,B*3.4*Y),d.target.set(0,0,0),d.minDistance=B*1.5,d.maxDistance=B*12,d.update(),document.getElementById("tlovn").textContent=U,A(null)}let E=null,v=document.getElementById("tlinfo"),R=document.getElementById("tlab");function A(I){E=I;let U=Zy[n[M][0]];if(R.hidden=!U,R.querySelectorAll("button").forEach(F=>F.setAttribute("aria-pressed",F.dataset.ab===I)),!I||!U){v.hidden=!0;return}v.className=I,v.innerHTML=I==="use"?`<h4>Tool use</h4><p>${U[0]}</p>`:`<h4>Stay safe</h4>${ef(Jy(n[M][0]))}<ul><li>${nf}</li>${U[1].map(F=>`<li>${F}</li>`).join("")}</ul>`,v.hidden=!1}R.addEventListener("click",I=>{let U=I.target.closest("button");U&&A(E===U.dataset.ab?null:U.dataset.ab)});function x(){let I=innerWidth,U=innerHeight;u.setSize(I,U),p.aspect=I/U,p.updateProjectionMatrix()}function w(I){g=requestAnimationFrame(w),_&&(_.rotation.y+=.006,_.userData.anim&&_.userData.anim((I||0)/1e3)),d.update(),u.render(f,p)}function k(I){t.classList.contains("on")&&(t.classList.remove("on"),cancelAnimationFrame(g),!I&&history.state&&history.state.tlv&&history.back(),m&&m.focus({preventScroll:!0}))}addEventListener("popstate",()=>k(!0)),["gesturestart","gesturechange","dblclick"].forEach(I=>t.addEventListener(I,U=>U.preventDefault(),{passive:!1})),t.addEventListener("touchmove",I=>{I.touches.length>1&&I.target.tagName!=="CANVAS"&&I.preventDefault()},{passive:!1}),i.addEventListener("click",I=>{let U=I.target.closest(".tl-t");if(U){m=U,t.classList.add("on");try{history.pushState({tlv:1},"")}catch{}x(),b(+U.dataset.i),cancelAnimationFrame(g),w(),document.getElementById("tlovx").focus()}}),document.getElementById("tlovx").onclick=()=>k(),document.getElementById("tlovp").onclick=()=>b(M-1),document.getElementById("tlovnx").onclick=()=>b(M+1),addEventListener("keydown",I=>{t.classList.contains("on")&&(I.key==="Escape"&&k(),I.key==="ArrowLeft"&&b(M-1),I.key==="ArrowRight"&&b(M+1))}),addEventListener("resize",()=>{t.classList.contains("on")&&x()})}var hl=[];sf.forEach(([i,e],t)=>{e.forEach(([n,s,r])=>hl.push({id:n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),n,g:t,fn:s,pose:r}))});function a1(){return hl.map(({id:i,n:e,g:t})=>({id:i,n:e,g:t}))}var Hi=null,jr=null,nl=null,il={};function o1(i){if(il[i])return il[i];let e=hl.find(s=>s.id===i);if(!e)return"";Hi||(Hi=new xi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Hi.setSize(320,240),Hi.setPixelRatio(1),Hi.toneMapping=ni,jr=new In,ll(jr,Hi),nl=new Vt(30,4/3,.1,800));let{g:t,r:n}=ol(e.fn,e.pose);return jr.add(t),nl.position.set(0,n*.25,n*3.3),nl.lookAt(0,0,0),Hi.render(jr,nl),il[i]=Hi.domElement.toDataURL(),jr.remove(t),il[i]}function l1(){let i=document.createElement("canvas");i.className="spin3d";let e=new xi({canvas:i,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(2,devicePixelRatio||1)),e.toneMapping=ni;let t=new In;ll(t,e);let n=new Vt(30,4/3,.1,800),s=null,r=0,a=0,o=0;function l(){let u=i.parentElement;if(!u)return;let f=u.clientWidth,p=u.clientHeight;!f||!p||(i._w!==f||i._h!==p)&&(i._w=f,i._h=p,e.setSize(f,p,!1),n.aspect=f/p,n.updateProjectionMatrix())}function c(u){if(r=requestAnimationFrame(c),!i.isConnected||!s)return;let f=o?Math.min(.05,(u-o)/1e3):0;o=u,a+=f*.5,s.rotation.y=Math.sin(a)*.55,s.userData.anim&&s.userData.anim(u/1e3),l(),e.render(t,n)}return{canvas:i,show(u){let f=hl.find(_=>_.id===u);if(s&&t.remove(s),s=null,!f)return;let{g:p,r:d}=ol(f.fn,f.pose);s=p,t.add(p),a=0,n.position.set(0,d*.25,d*3.7),n.lookAt(0,0,0),r||(r=requestAnimationFrame(c))},stop(){cancelAnimationFrame(r),r=0,o=0}}}return mf(c1);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
