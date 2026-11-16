var BMTOOLS3D=(()=>{var Sl=Object.defineProperty;var Tf=Object.getOwnPropertyDescriptor;var Af=Object.getOwnPropertyNames;var Rf=Object.prototype.hasOwnProperty;var Cf=(i,e)=>{for(var t in e)Sl(i,t,{get:e[t],enumerable:!0})},Pf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Af(e))!Rf.call(i,s)&&s!==t&&Sl(i,s,{get:()=>e[s],enumerable:!(n=Tf(e,s))||n.enumerable});return i};var If=i=>Pf(Sl({},"__esModule",{value:!0}),i);var Ly={};Cf(Ly,{list:()=>Py,makeHome:()=>my,mount:()=>Cy,spinner:()=>Dy,thumb:()=>Iy,tour:()=>Ay});var Bi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ru=0,ac=1,au=2;var as=1,xo=2,$s=3,ii=0,$t=1,un=2,os=0,Ks=1,oc=2,lc=3,cc=4,ou=5;var ls=100,lu=101,cu=102,hu=103,uu=104,du=200,fu=201,pu=202,mu=203,hc=204,uc=205,gu=206,xu=207,_u=208,yu=209,vu=210,Mu=211,bu=212,Su=213,Eu=214,ka=0,Ba=1,Ha=2,Ds=3,za=4,Ga=5,Va=6,Wa=7,_o=0,wu=1,Tu=2,si=0,dc=1,fc=2,pc=3,mc=4,gc=5,xc=6,qn=7;var _c=300,cs=301,Js=302,yo=303,vo=304,es=1e3,Ln=1001,Xa=1002,tn=1003,Au=1004;var qr=1005;var gn=1006,Mo=1007;var yi=1008;var vn=1009,yc=1010,vc=1011,js=1012,bo=1013,Yn=1014,On=1015,Zn=1016,So=1017,Eo=1018,hs=1020,Mc=35902,bc=35899,Sc=1021,Ec=1022,$n=1023,gi=1026,vi=1027,wo=1028,To=1029,zi=1030,Ao=1031;var Ro=1033,Yr=33776,Zr=33777,$r=33778,Kr=33779,Co=35840,Po=35841,Io=35842,Do=35843,Lo=36196,No=37492,Uo=37496,Fo=37488,Oo=37489,Jr=37490,ko=37491,Bo=37808,Ho=37809,zo=37810,Go=37811,Vo=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,Zo=37817,$o=37818,Ko=37819,Jo=37820,jo=37821,Qo=36492,el=36494,tl=36495,nl=36283,il=36284,jr=36285,sl=36286;var vr=2300,qa=2301,Fa=2302,Yl=2303,Zl=2400,$l=2401,Kl=2402;var Ru=3200;var Qr=0,Cu=1,Mi="",Yt="srgb",Mr="srgb-linear",br="linear",Rt="srgb";var Oa=7680;var Pu=519,Iu=512,Du=513,Lu=514,wc=515,Nu=516,Uu=517,Tc=518,Ac=519,Fu=35044;var Rc="300 es",Nn=2e3,Ls=2001;function Df(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Lf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ou(){let i=Sr("canvas");return i.style.display="block",i}var Sh={},Ns=null;function Cc(...i){let e="THREE."+i.shift();Ns?Ns("log",e,...i):console.log(e,...i)}function ku(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function rt(...i){i=ku(i);let e="THREE."+i.shift();if(Ns)Ns("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=ku(i);let e="THREE."+i.shift();if(Ns)Ns("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function mr(...i){let e=i.join(" ");e in Sh||(Sh[e]=!0,rt(...i))}function Bu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hu={[ka]:ka,[Ha]:Va,[za]:za,[Ds]:Ga,[Ba]:Ba,[Va]:Ha,[Wa]:Wa,[Ga]:Ds},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=1234567,gr=Math.PI/180,Us=180/Math.PI;function us(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Pc(i,e){return(i%e+e)%e}function Nf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Uf(i,e,t){return i!==e?(t-i)/(e-i):0}function xr(i,e,t){return(1-t)*i+t*e}function Ff(i,e,t,n){return xr(i,e,1-Math.exp(-t*n))}function Of(i,e=1){return e-Math.abs(Pc(i,e*2)-e)}function kf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Bf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zf(i,e){return i+Math.random()*(e-i)}function Gf(i){return i*(.5-Math.random())}function Vf(i){i!==void 0&&(Eh=i);let e=Eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wf(i){return i*gr}function Xf(i){return i*Us}function qf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ic(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*u,o*c);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Dc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zu(i,e){if(e.constructor===Float32Array)return i;let t=Dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Gu(i,e){if(e.constructor===Float32Array)return i;let t=Dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Lc={DEG2RAD:gr,RAD2DEG:Us,generateUUID:us,clamp:gt,euclideanModulo:Pc,mapLinear:Nf,inverseLerp:Uf,lerp:xr,damp:Ff,pingpong:Of,smoothstep:kf,smootherstep:Bf,randInt:Hf,randFloat:zf,randFloatSpread:Gf,seededRandom:Vf,degToRad:Wf,radToDeg:Xf,isPowerOfTwo:qf,ceilPowerOfTwo:Yf,floorPowerOfTwo:Ic,setQuaternionFromProperEuler:Zf,normalize:Gu,denormalize:zu},me=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],m=r[a+2],y=r[a+3];if(d!==y||l!==f||c!==p||u!==m){let g=l*f+c*p+u*m+d*y;g<0&&(f=-f,p=-p,m=-m,y=-y,g=-g);let x=1-o;if(g<.9995){let b=Math.acos(g),w=Math.sin(b);x=Math.sin(x*b)/w,o=Math.sin(o*b)/w,l=l*x+f*o,c=c*x+p*o,u=u*x+m*o,d=d*x+y*o}else{l=l*x+f*o,c=c*x+p*o,u=u*x+m*o,d=d*x+y*o;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+u*d+l*p-c*f,e[t+1]=l*m+u*f+c*d-o*p,e[t+2]=c*m+u*p+o*f-l*d,e[t+3]=u*m-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"YZX":this._x=f*u*d+c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d-f*p*m;break;case"XZY":this._x=f*u*d-c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d+f*p*m;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},El=new G,wh=new nn,ht=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],m=n[8],y=s[0],g=s[3],x=s[6],b=s[1],w=s[4],M=s[7],R=s[2],T=s[5],_=s[8];return r[0]=a*y+o*b+l*R,r[3]=a*g+o*w+l*T,r[6]=a*x+o*M+l*_,r[1]=c*y+u*b+d*R,r[4]=c*g+u*w+d*T,r[7]=c*x+u*M+d*_,r[2]=f*y+p*b+m*R,r[5]=f*g+p*w+m*T,r[8]=f*x+p*M+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,m=t*d+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=d*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wl.makeScale(e,t)),this}rotate(e){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wl.makeRotation(-e)),this}translate(e,t){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},wl=new ht,Th=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $f(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Rt&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Rt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:e,whitePoint:n,transfer:br,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:Rt,toXYZ:Th,fromXYZ:Ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}var bt=$f();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xs,Ya=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Sr("canvas")),xs.width=e.width,xs.height=e.height;let s=xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(mi(t[n]/255)*255):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kf=0,Fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tl(s[a].image)):r.push(Tl(s[a]))}else r=Tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}var Jf=0,Al=new G,xn=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Ln,s=Ln,r=gn,a=yi,o=$n,l=vn,c=i.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=us(),this.name="",this.source=new Fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Al).x}get height(){return this.source.getSize(Al).y}get depth(){return this.source.getSize(Al).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_c)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=_c;xn.DEFAULT_ANISOTROPY=1;var Nt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],m=l[9],y=l[2],g=l[6],x=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(p+1)/2,R=(x+1)/2,T=(u+f)/4,_=(d+y)/4,E=(m+g)/4;return w>M&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=_/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=E/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=E/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-y)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Za=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new xn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tn=class extends Za{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Er=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ct=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,d,f,p,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,f,p,m,y,g)}set(e,t,n,s,r,a,o,l,c,u,d,f,p,m,y,g){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=u,x[10]=d,x[14]=f,x[3]=p,x[7]=m,x[11]=y,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),a=1/_s.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*d,m=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*d,m=c*u,y=c*d;t[0]=f+y*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-m,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*d,m=c*u,y=c*d;t[0]=f-y*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*u,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*d,m=o*u,y=o*d;t[0]=l*u,t[4]=m*c-p,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,m=o*l,y=o*c;t[0]=l*u,t[4]=y-f*d,t[8]=m*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+m,t[10]=f-y*d}else if(e.order==="XZY"){let f=a*l,p=a*c,m=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=a*u,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,Qf)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ai.crossVectors(n,bn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ai.crossVectors(n,bn)),Ai.normalize(),ua.crossVectors(bn,Ai),s[0]=Ai.x,s[4]=ua.x,s[8]=bn.x,s[1]=Ai.y,s[5]=ua.y,s[9]=bn.y,s[2]=Ai.z,s[6]=ua.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],m=n[2],y=n[6],g=n[10],x=n[14],b=n[3],w=n[7],M=n[11],R=n[15],T=s[0],_=s[4],E=s[8],B=s[12],P=s[1],N=s[5],H=s[9],F=s[13],D=s[2],k=s[6],Y=s[10],Z=s[14],q=s[3],W=s[7],L=s[11],te=s[15];return r[0]=a*T+o*P+l*D+c*q,r[4]=a*_+o*N+l*k+c*W,r[8]=a*E+o*H+l*Y+c*L,r[12]=a*B+o*F+l*Z+c*te,r[1]=u*T+d*P+f*D+p*q,r[5]=u*_+d*N+f*k+p*W,r[9]=u*E+d*H+f*Y+p*L,r[13]=u*B+d*F+f*Z+p*te,r[2]=m*T+y*P+g*D+x*q,r[6]=m*_+y*N+g*k+x*W,r[10]=m*E+y*H+g*Y+x*L,r[14]=m*B+y*F+g*Z+x*te,r[3]=b*T+w*P+M*D+R*q,r[7]=b*_+w*N+M*k+R*W,r[11]=b*E+w*H+M*Y+R*L,r[15]=b*B+w*F+M*Z+R*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],y=e[7],g=e[11],x=e[15],b=l*p-c*f,w=o*p-c*d,M=o*f-l*d,R=a*p-c*u,T=a*f-l*u,_=a*d-o*u;return t*(y*b-g*w+x*M)-n*(m*b-g*R+x*T)+s*(m*w-y*R+x*_)-r*(m*M-y*T+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],y=e[13],g=e[14],x=e[15],b=t*o-n*a,w=t*l-s*a,M=t*c-r*a,R=n*l-s*o,T=n*c-r*o,_=s*c-r*l,E=u*y-d*m,B=u*g-f*m,P=u*x-p*m,N=d*g-f*y,H=d*x-p*y,F=f*x-p*g,D=b*F-w*H+M*N+R*P-T*B+_*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return e[0]=(o*F-l*H+c*N)*k,e[1]=(s*H-n*F-r*N)*k,e[2]=(y*_-g*T+x*R)*k,e[3]=(f*T-d*_-p*R)*k,e[4]=(l*P-a*F-c*B)*k,e[5]=(t*F-s*P+r*B)*k,e[6]=(g*M-m*_-x*w)*k,e[7]=(u*_-f*M+p*w)*k,e[8]=(a*H-o*P+c*E)*k,e[9]=(n*P-t*H-r*E)*k,e[10]=(m*T-y*M+x*b)*k,e[11]=(d*M-u*T-p*b)*k,e[12]=(o*B-a*N-l*E)*k,e[13]=(t*N-n*B+s*E)*k,e[14]=(y*w-m*R-g*b)*k,e[15]=(u*R-d*w+f*b)*k,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,m=r*d,y=a*u,g=a*d,x=o*d,b=l*c,w=l*u,M=l*d,R=n.x,T=n.y,_=n.z;return s[0]=(1-(y+x))*R,s[1]=(p+M)*R,s[2]=(m-w)*R,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+x))*T,s[6]=(g+b)*T,s[7]=0,s[8]=(m+w)*_,s[9]=(g-b)*_,s[10]=(1-(f+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),l=_s.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Hn.copy(this);let c=1/a,u=1/o,d=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=u,Hn.elements[5]*=u,Hn.elements[6]*=u,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,t.setFromRotationMatrix(Hn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===Nn)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ls)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Nn,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===Nn)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ls)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_s=new G,Hn=new Ct,jf=new G(0,0,0),Qf=new G(1,1,1),Ai=new G,ua=new G,bn=new G,Rh=new Ct,Ch=new nn,Un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ep=0,Ph=new G,ys=new nn,hi=new Ct,da=new G,lr=new G,tp=new G,np=new nn,Ih=new G(1,0,0),Dh=new G(0,1,0),Lh=new G(0,0,1),Nh={type:"added"},ip={type:"removed"},vs={type:"childadded",child:null},Rl={type:"childremoved",child:null},Ut=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new G,t=new Un,n=new nn,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new ht}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Lh,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Lh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?da.copy(e):da.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(lr,da,this.up):hi.lookAt(da,lr,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(hi),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),vs.child=e,this.dispatchEvent(vs),vs.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ip),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ut.DEFAULT_UP=new G(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},sp={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),x=this._getHandJoint(c,y);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Cl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ut=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Pc(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cl(a,r,e+1/3),this.g=Cl(a,r,e),this.b=Cl(a,r,e-1/3)}return bt.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=Vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return bt.workingToColorSpace(hn.copy(this),e),Math.round(gt(hn.r*255,0,255))*65536+Math.round(gt(hn.g*255,0,255))*256+Math.round(gt(hn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(hn.copy(this),t);let n=hn.r,s=hn.g,r=hn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Yt){bt.workingToColorSpace(hn.copy(this),e);let t=hn.r,n=hn.g,s=hn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(fa);let n=xr(Ri.h,fa.h,t),s=xr(Ri.s,fa.s,t),r=xr(Ri.l,fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new ut;ut.NAMES=Vu;var yn=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=new G,ui=new G,Pl=new G,di=new G,Ms=new G,bs=new G,Uh=new G,Il=new G,Dl=new G,Ll=new G,Nl=new Nt,Ul=new Nt,Fl=new Nt,Di=class i{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),ui.subVectors(n,t),Pl.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(ui),l=zn.dot(Pl),c=ui.dot(ui),u=ui.dot(Pl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,m=(a*u-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Nl.setScalar(0),Ul.setScalar(0),Fl.setScalar(0),Nl.fromBufferAttribute(e,t),Ul.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Nl,r.x),a.addScaledVector(Ul,r.y),a.addScaledVector(Fl,r.z),a}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),ui.subVectors(e,t),zn.cross(ui).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),zn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),bs.subVectors(r,n),Il.subVectors(e,n);let l=Ms.dot(Il),c=bs.dot(Il);if(l<=0&&c<=0)return t.copy(n);Dl.subVectors(e,s);let u=Ms.dot(Dl),d=bs.dot(Dl);if(u>=0&&d<=u)return t.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Ms,a);Ll.subVectors(e,r);let p=Ms.dot(Ll),m=bs.dot(Ll);if(m>=0&&p<=m)return t.copy(r);let y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(bs,o);let g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return Uh.subVectors(r,s),o=(d-u)/(d-u+(p-m)),t.copy(s).addScaledVector(Uh,o);let x=1/(g+y+f);return a=y*x,o=f*x,t.copy(n).addScaledVector(Ms,a).addScaledVector(bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ht=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(r,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),ma.subVectors(this.max,cr),Ss.subVectors(e.a,cr),Es.subVectors(e.b,cr),ws.subVectors(e.c,cr),Ci.subVectors(Es,Ss),Pi.subVectors(ws,Es),Ki.subVectors(Ss,ws);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-Ki.z,Ki.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,Ki.z,0,-Ki.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-Ki.y,Ki.x,0];return!Ol(t,Ss,Es,ws,ma)||(t=[1,0,0,0,1,0,0,0,1],!Ol(t,Ss,Es,ws,ma))?!1:(ga.crossVectors(Ci,Pi),t=[ga.x,ga.y,ga.z],Ol(t,Ss,Es,ws,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},fi=[new G,new G,new G,new G,new G,new G,new G,new G],Gn=new G,pa=new Ht,Ss=new G,Es=new G,ws=new G,Ci=new G,Pi=new G,Ki=new G,cr=new G,ma=new G,ga=new G,Ji=new G;function Ol(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var qt=new G,xa=new me,rp=0,wn=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fu,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=e!==void 0?Dc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gu(e,this.array)}};var wr=class extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Tr=class extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ap=new Ht,hr=new G,kl=new G,An=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ap.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(kl)),this.expandByPoint(hr.copy(e.center).sub(kl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},op=0,Dn=new Ct,Bl=new Ut,Ts=new G,Sn=new Ht,ur=new Ht,en=new G,Vt=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Df(e)?Tr:wr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new An);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Sn.min,ur.min),Sn.expandByPoint(en),en.addVectors(Sn.max,ur.max),Sn.expandByPoint(en)):(Sn.expandByPoint(ur.min),Sn.expandByPoint(ur.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)en.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(en));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(e,c),en.add(Ts)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new wn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new G,l[B]=new G;let u=new G,d=new G,f=new G,p=new me,m=new me,y=new me,g=new G,x=new G;function b(B,P,N){c[B]=c[P]=c[N]=1,u.fromBufferAttribute(n,B),d.fromBufferAttribute(n,P),f.fromBufferAttribute(n,N),p.fromBufferAttribute(r,B),m.fromBufferAttribute(r,P),y.fromBufferAttribute(r,N),d.sub(u),f.sub(u),m.sub(p),y.sub(p);let H=1/(m.x*y.y-y.x*m.y);isFinite(H)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(f,-m.y).multiplyScalar(H),x.copy(f).multiplyScalar(m.x).addScaledVector(d,-y.x).multiplyScalar(H),o[B].add(g),o[P].add(g),o[N].add(g),l[B].add(x),l[P].add(x),l[N].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let B=0,P=w.length;B<P;++B){let N=w[B],H=N.start,F=N.count;for(let D=H,k=H+F;D<k;D+=3)b(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new G,R=new G,T=new G,_=new G;function E(B){T.fromBufferAttribute(s,B),_.copy(T);let P=o[B];M.copy(P),M.sub(T.multiplyScalar(T.dot(P))).normalize(),R.crossVectors(_,P);let H=R.dot(l[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,H)}for(let B=0,P=n.count;B<P;++B)c[B]&&E(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,u=new G,d=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let x=0;x<u;x++)f[m++]=c[p++]}return new wn(f,u,d)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hl=new G,lp=new G,cp=new ht,En=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Hl.subVectors(n,t).cross(lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Hl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cp.getNormalMatrix(e),s=this.coplanarPoint(Hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hp=0,ei=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Ks,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var pi=new G,zl=new G,_a=new G,ya=new G,Li=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){zl.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),ya.copy(this.origin).sub(zl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_a),o=ya.dot(this.direction),l=-ya.dot(_a),c=ya.lengthSq(),u=Math.abs(1-a*a),d,f,p,m;if(u>0)if(d=a*l-o,f=a*o-l,m=r*u,d>=0)if(f>=-m)if(f<=m){let y=1/u;d*=y,f*=y,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zl).addScaledVector(_a,f),p}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,p=e.z-a.z,m=t.x-a.x,y=t.y-a.y,g=t.z-a.z,x=n.x-a.x,b=n.y-a.y,w=n.z-a.z,M=Math.abs(l),R=Math.abs(c),T=Math.abs(u),_,E,B,P,N,H,F,D,k,Y,Z,q;if(M>=R&&M>=T?(B=l,H=d,k=m,q=x,l>=0?(_=c,E=u,P=f,N=p,F=y,D=g,Y=b,Z=w):(_=u,E=c,P=p,N=f,F=g,D=y,Y=w,Z=b)):R>=T?(B=c,H=f,k=y,q=b,c>=0?(_=u,E=l,P=p,N=d,F=g,D=m,Y=w,Z=x):(_=l,E=u,P=d,N=p,F=m,D=g,Y=x,Z=w)):(B=u,H=p,k=g,q=w,u>=0?(_=l,E=c,P=d,N=f,F=m,D=y,Y=x,Z=b):(_=c,E=l,P=f,N=d,F=y,D=m,Y=b,Z=x)),B===0)return null;let W=_/B,L=E/B,te=1/B,Ie=P-W*H,de=N-L*H,X=F-W*k,j=D-L*k,ge=Y-W*q,be=Z-L*q,Se=ge*j-be*X,Ve=Ie*be-de*ge,dt=X*de-j*Ie;if(s){if(Se<0||Ve<0||dt<0)return null}else if((Se<0||Ve<0||dt<0)&&(Se>0||Ve>0||dt>0))return null;let Xe=Se+Ve+dt;if(Xe===0)return null;let Ye=te*(Se*H+Ve*k+dt*q);return(Xe>0?Ye<0:Ye>0)?null:this.at(Ye/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xi=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Fh=new Ct,ji=new Li,va=new An,Oh=new G,Ma=new G,ba=new G,Sa=new G,Gl=new G,Ea=new G,kh=new G,wa=new G,Ne=class extends Ut{constructor(e=new Vt,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Gl.fromBufferAttribute(d,e),a?Ea.addScaledVector(Gl,u):Ea.addScaledVector(Gl.sub(t),u))}t.add(Ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(va.containsPoint(ji.origin)===!1&&(ji.intersectSphere(va,Oh)===null||ji.origin.distanceToSquared(Oh)>(e.far-e.near)**2))&&(Fh.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=f.length;m<y;m++){let g=f[m],x=a[g.materialIndex],b=Math.max(g.start,p.start),w=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=b,R=w;M<R;M+=3){let T=o.getX(M),_=o.getX(M+1),E=o.getX(M+2);s=Ta(this,x,e,n,c,u,d,T,_,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=m,x=y;g<x;g+=3){let b=o.getX(g),w=o.getX(g+1),M=o.getX(g+2);s=Ta(this,a,e,n,c,u,d,b,w,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=f.length;m<y;m++){let g=f[m],x=a[g.materialIndex],b=Math.max(g.start,p.start),w=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=b,R=w;M<R;M+=3){let T=M,_=M+1,E=M+2;s=Ta(this,x,e,n,c,u,d,T,_,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,x=y;g<x;g+=3){let b=g,w=g+1,M=g+2;s=Ta(this,a,e,n,c,u,d,b,w,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function up(i,e,t,n,s,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ii,o),l===null)return null;wa.copy(o),wa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wa);return c<t.near||c>t.far?null:{distance:c,point:wa.clone(),object:i}}function Ta(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ma),i.getVertexPosition(l,ba),i.getVertexPosition(c,Sa);let u=up(i,e,t,n,Ma,ba,Sa,kh);if(u){let d=new G;Di.getBarycoord(kh,Ma,ba,Sa,d),s&&(u.uv=Di.getInterpolatedAttribute(s,o,l,c,d,new me)),r&&(u.uv1=Di.getInterpolatedAttribute(r,o,l,c,d,new me)),a&&(u.normal=Di.getInterpolatedAttribute(a,o,l,c,d,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new G,materialIndex:0};Di.getNormal(Ma,ba,Sa,f.normal),u.face=f,u.barycoord=d}return u}var Ar=class extends xn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=tn,u=tn,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends wn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new Ct,Bh=new Ct,Aa=[],Hh=new Ht,dp=new Ct,dr=new Ne,fr=new An,Wn=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,dp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ht),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),Hh.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(Hh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new An),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),fr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(n),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),Bh.multiplyMatrices(n,As),dr.matrixWorld=Bh,dr.raycast(e,Aa);for(let a=0,o=Aa.length;a<o;a++){let l=Aa[a];l.instanceId=r,l.object=this,t.push(l)}Aa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(s*this.count),s,this.count,wo,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qi=new An,fp=new me(.5,.5),Ra=new G,Ni=class{constructor(e=new En,t=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],p=r[7],m=r[8],y=r[9],g=r[10],x=r[11],b=r[12],w=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-a,p-u,x-m,R-b).normalize(),s[1].setComponents(c+a,p+u,x+m,R+b).normalize(),s[2].setComponents(c+o,p+d,x+y,R+w).normalize(),s[3].setComponents(c-o,p-d,x-y,R-w).normalize(),n)s[4].setComponents(l,f,g,M).normalize(),s[5].setComponents(c-l,p-f,x-g,R-M).normalize();else if(s[4].setComponents(c-l,p-f,x-g,R-M).normalize(),t===Nn)s[5].setComponents(c+l,p+f,x+g,R+M).normalize();else if(t===Ls)s[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);let t=fp.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ra.x=s.normal.x>0?e.max.x:e.min.x,Ra.y=s.normal.y>0?e.max.y:e.min.y,Ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zh=new Ct,Ka=class i{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];zh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ni),n[s].setFromProjectionMatrix(zh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ni),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Bs=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gh=new Ct,Jl=new Li,Ca=new An,Pa=new G,Cr=class extends Ut{constructor(e=new Vt,t=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),Ca.radius+=r,e.ray.intersectsSphere(Ca)===!1)return;Gh.copy(s).invert(),Jl.copy(e.ray).applyMatrix4(Gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=f,y=p;m<y;m++){let g=c.getX(m);Pa.fromBufferAttribute(d,g),Vh(Pa,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=f,y=p;m<y;m++)Pa.fromBufferAttribute(d,m),Vh(Pa,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vh(i,e,t,n,s,r,a){let o=Jl.distanceSqToPoint(i);if(o<t){let l=new G;Jl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pr=class extends xn{constructor(e=[],t=cs,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rn=class extends xn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends xn{constructor(e,t,n=Yn,s,r,a,o=tn,l=tn,c,u=gi,d=1){if(u!==gi&&u!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ir=class extends _i{constructor(e,t=Yn,n=cs,s,r,a=tn,o=tn,l,c=gi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Dr=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ft=class i extends Vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2));function m(y,g,x,b,w,M,R,T,_,E,B){let P=M/_,N=R/E,H=M/2,F=R/2,D=T/2,k=_+1,Y=E+1,Z=0,q=0,W=new G;for(let L=0;L<Y;L++){let te=L*N-F;for(let Ie=0;Ie<k;Ie++){let de=Ie*P-H;W[y]=de*b,W[g]=te*w,W[x]=D,c.push(W.x,W.y,W.z),W[y]=0,W[g]=0,W[x]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(Ie/_),d.push(1-L/E),Z+=1}}for(let L=0;L<E;L++)for(let te=0;te<_;te++){let Ie=f+te+k*L,de=f+te+k*(L+1),X=f+(te+1)+k*(L+1),j=f+(te+1)+k*L;l.push(Ie,de,j),l.push(de,X,j),q+=6}o.addGroup(p,q,B),p+=q,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Hs=class i extends Vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new G,u=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class i extends Vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],m=0,y=[],g=n/2,x=0;b(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function b(){let M=new G,R=new G,T=0,_=(t-e)/n;for(let E=0;E<=r;E++){let B=[],P=E/r,N=P*(t-e)+e;for(let H=0;H<=s;H++){let F=H/s,D=F*l+o,k=Math.sin(D),Y=Math.cos(D);R.x=N*k,R.y=-P*n+g,R.z=N*Y,d.push(R.x,R.y,R.z),M.set(k,_,Y).normalize(),f.push(M.x,M.y,M.z),p.push(F,1-P),B.push(m++)}y.push(B)}for(let E=0;E<s;E++)for(let B=0;B<r;B++){let P=y[B][E],N=y[B+1][E],H=y[B+1][E+1],F=y[B][E+1];(e>0||B!==0)&&(u.push(P,N,F),T+=3),(t>0||B!==r-1)&&(u.push(N,H,F),T+=3)}c.addGroup(x,T,0),x+=T}function w(M){let R=m,T=new me,_=new G,E=0,B=M===!0?e:t,P=M===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,g*P,0),f.push(0,P,0),p.push(.5,.5),m++;let N=m;for(let H=0;H<=s;H++){let D=H/s*l+o,k=Math.cos(D),Y=Math.sin(D);_.x=B*Y,_.y=g*P,_.z=B*k,d.push(_.x,_.y,_.z),f.push(0,P,0),T.x=k*.5+.5,T.y=Y*.5*P+.5,p.push(T.x,T.y),m++}for(let H=0;H<s;H++){let F=R+H,D=N+H;M===!0?u.push(D,D+1,F):u.push(D+1,D,F),E+=3}c.addGroup(x,E,M===!0?1:2),x+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ui=class i extends Tt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(a-u)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new G);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new G,s=[],r=[],a=[],o=new G,l=new Ct;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new G)}r[0]=new G,a[0]=new G;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(gt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(gt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},zs=class extends Cn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ja=class extends zs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,p*=u,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Wh=new G,Xh=new G,Vl=new Nc,Wl=new Nc,Xl=new Nc,_n=class extends Cn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new G){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Xh.subVectors(s[0],s[1]).add(s[0]),c=Xh);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Wh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Wh),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(u),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Vl.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,m,y,g),Wl.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,m,y,g),Xl.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,m,y,g)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Wl.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Xl.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(Vl.calc(l),Wl.calc(l),Xl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new G().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function qh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function pp(i,e){let t=1-i;return t*t*e}function mp(i,e){return 2*(1-i)*i*e}function gp(i,e){return i*i*e}function _r(i,e,t,n){return pp(i,e)+mp(i,t)+gp(i,n)}function xp(i,e){let t=1-i;return t*t*t*e}function _p(i,e){let t=1-i;return 3*t*t*i*e}function yp(i,e){return 3*(1-i)*i*i*e}function vp(i,e){return i*i*i*e}function yr(i,e,t,n,s){return xp(i,e)+_p(i,t)+yp(i,n)+vp(i,s)}var Lr=class extends Cn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ja=class extends Cn{constructor(e=new G,t=new G,n=new G,s=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(yr(e,s.x,r.x,a.x,o.x),yr(e,s.y,r.y,a.y,o.y),yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nr=class extends Cn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Cn{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ur=class extends Cn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends Cn{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Or=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(qh(o,l.x,c.x,u.x,d.x),qh(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},eo=Object.freeze({__proto__:null,ArcCurve:Ja,CatmullRomCurve3:_n,CubicBezierCurve:Lr,CubicBezierCurve3:ja,EllipseCurve:zs,LineCurve:Nr,LineCurve3:Qa,QuadraticBezierCurve:Ur,QuadraticBezierCurve3:Fr,SplineCurve:Or}),to=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new eo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Wt=class extends to{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Nr(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ur(this.currentPoint.clone(),new me(e,t),new me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Lr(this.currentPoint.clone(),new me(e,t),new me(n,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Or(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new zs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yt=class extends Wt{constructor(e){super(e),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Wt().fromJSON(s))}return this}};function Mp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Wu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Tp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let f=t;f<s;f+=t){let p=i[f],m=i[f+1];p<o&&(o=p),m<l&&(l=m),p>u&&(u=p),m>d&&(d=m)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return kr(r,a,t,o,l,c,0),a}function Wu(i,e,t,n,s){let r;if(s===Op(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Yh(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Yh(a/n|0,i[a],i[a+1],r);return r&&Gs(r,r.next)&&(Hr(r),r=r.next),r}function ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gs(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Hr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function kr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Ip(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Sp(i,n,s,r):bp(i)){e.push(l.i,i.i,c.i),Hr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ep(ts(i),e),kr(i,e,t,n,s,r,2)):a===2&&wp(i,e,t,n,s,r):kr(ts(i),e,t,n,s,r,1);break}}}function bp(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&pr(s,o,r,l,a,c,m.x,m.y)&&Bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Sp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Bt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,f=a.y,p=Math.min(o,l,c),m=Math.min(u,d,f),y=Math.max(o,l,c),g=Math.max(u,d,f),x=jl(p,m,e,t,n),b=jl(y,g,e,t,n),w=i.prevZ,M=i.nextZ;for(;w&&w.z>=x&&M&&M.z<=b;){if(w.x>=p&&w.x<=y&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&pr(o,u,l,d,c,f,w.x,w.y)&&Bt(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=p&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&pr(o,u,l,d,c,f,M.x,M.y)&&Bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=x;){if(w.x>=p&&w.x<=y&&w.y>=m&&w.y<=g&&w!==s&&w!==a&&pr(o,u,l,d,c,f,w.x,w.y)&&Bt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=b;){if(M.x>=p&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==a&&pr(o,u,l,d,c,f,M.x,M.y)&&Bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Ep(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gs(n,s)&&qu(n,t,t.next,s)&&Br(n,s)&&Br(s,n)&&(e.push(n.i,t.i,s.i),Hr(t),Hr(t.next),t=i=s),t=t.next}while(t!==i);return ts(t)}function wp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Np(a,o)){let l=Yu(a,o);a=ts(a,a.next),l=ts(l,l.next),kr(a,e,t,n,s,r,0),kr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Tp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Wu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Lp(c))}s.sort(Ap);for(let r=0;r<s.length;r++)t=Rp(s[r],t);return t}function Ap(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Rp(i,e){let t=Cp(i,e);if(!t)return e;let n=Yu(t,i);return ts(n,n.next),ts(t,t.next)}function Cp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Gs(i,t))return t;do{if(Gs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Xu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Br(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Pp(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Pp(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function Ip(i,e,t,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dp(s)}function Dp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function jl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Lp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Xu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function pr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Xu(i,e,t,n,s,r,a,o)}function Np(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Up(i,e)&&(Br(i,e)&&Br(e,i)&&Fp(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||Gs(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gs(i,e){return i.x===e.x&&i.y===e.y}function qu(i,e,t,n){let s=Da(Bt(i,e,t)),r=Da(Bt(i,e,n)),a=Da(Bt(t,n,i)),o=Da(Bt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ia(i,t,e)||r===0&&Ia(i,n,e)||a===0&&Ia(t,i,n)||o===0&&Ia(t,e,n))}function Ia(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Da(i){return i>0?1:i<0?-1:0}function Up(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&qu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Br(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function Fp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Yu(i,e){let t=Ql(i.i,i.x,i.y),n=Ql(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yh(i,e,t,n){let s=Ql(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ql(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Op(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ec=class{static triangulate(e,t,n=2){return Mp(e,t,n)}},Qn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Zh(e),$h(n,e);let a=e.length;t.forEach(Zh);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$h(n,t[l]);let o=ec.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Zh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $h(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Zt=class i extends Vt{constructor(e=new yt([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:kp,w,M=!1,R,T,_,E;if(x){w=x.getSpacedPoints(u),M=!0,f=!1;let pe=x.isCatmullRomCurve3?x.closed:!1;R=x.computeFrenetFrames(u,pe),T=new G,_=new G,E=new G}f||(g=0,p=0,m=0,y=0);let B=o.extractPoints(c),P=B.shape,N=B.holes;if(!Qn.isClockWise(P)){P=P.reverse();for(let pe=0,Re=N.length;pe<Re;pe++){let De=N[pe];Qn.isClockWise(De)&&(N[pe]=De.reverse())}}function F(pe){let De=10000000000000001e-36,ze=pe[0];for(let Fe=1;Fe<=pe.length;Fe++){let We=Fe%pe.length,Ue=pe[We],tt=Ue.x-ze.x,lt=Ue.y-ze.y,mt=tt*tt+lt*lt,z=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(ze.x),Math.abs(ze.y)),oe=De*z*z;if(mt<=oe){pe.splice(We,1),Fe--;continue}ze=Ue}}F(P),N.forEach(F);let D=N.length,k=P;for(let pe=0;pe<D;pe++){let Re=N[pe];P=P.concat(Re)}function Y(pe,Re,De){return Re||ot("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(Re,De)}let Z=P.length;function q(pe,Re,De){let ze,Fe,We,Ue=pe.x-Re.x,tt=pe.y-Re.y,lt=De.x-pe.x,mt=De.y-pe.y,z=Ue*Ue+tt*tt,oe=Ue*mt-tt*lt;if(Math.abs(oe)>Number.EPSILON){let fe=Math.sqrt(z),Ee=Math.sqrt(lt*lt+mt*mt),ee=Re.x-tt/fe,it=Re.y+Ue/fe,Le=De.x-mt/Ee,Ce=De.y+lt/Ee,I=((Le-ee)*mt-(Ce-it)*lt)/(Ue*mt-tt*lt);ze=ee+Ue*I-pe.x,Fe=it+tt*I-pe.y;let S=ze*ze+Fe*Fe;if(S<=2)return new me(ze,Fe);We=Math.sqrt(S/2)}else{let fe=!1;Ue>Number.EPSILON?lt>Number.EPSILON&&(fe=!0):Ue<-Number.EPSILON?lt<-Number.EPSILON&&(fe=!0):Math.sign(tt)===Math.sign(mt)&&(fe=!0),fe?(ze=-tt,Fe=Ue,We=Math.sqrt(z)):(ze=Ue,Fe=tt,We=Math.sqrt(z/2))}return new me(ze/We,Fe/We)}let W=[];for(let pe=0,Re=k.length,De=Re-1,ze=pe+1;pe<Re;pe++,De++,ze++)De===Re&&(De=0),ze===Re&&(ze=0),W[pe]=q(k[pe],k[De],k[ze]);let L=[],te,Ie=W.concat();for(let pe=0,Re=D;pe<Re;pe++){let De=N[pe];te=[];for(let ze=0,Fe=De.length,We=Fe-1,Ue=ze+1;ze<Fe;ze++,We++,Ue++)We===Fe&&(We=0),Ue===Fe&&(Ue=0),te[ze]=q(De[ze],De[We],De[Ue]);L.push(te),Ie=Ie.concat(te)}let de;if(g===0)de=Qn.triangulateShape(k,N);else{let pe=[],Re=[];for(let De=0;De<g;De++){let ze=De/g,Fe=p*Math.cos(ze*Math.PI/2),We=m*Math.sin(ze*Math.PI/2)+y;for(let Ue=0,tt=k.length;Ue<tt;Ue++){let lt=Y(k[Ue],W[Ue],We);Ve(lt.x,lt.y,-Fe),ze===0&&pe.push(lt)}for(let Ue=0,tt=D;Ue<tt;Ue++){let lt=N[Ue];te=L[Ue];let mt=[];for(let z=0,oe=lt.length;z<oe;z++){let fe=Y(lt[z],te[z],We);Ve(fe.x,fe.y,-Fe),ze===0&&mt.push(fe)}ze===0&&Re.push(mt)}}de=Qn.triangulateShape(pe,Re)}let X=de.length,j=m+y;for(let pe=0;pe<Z;pe++){let Re=f?Y(P[pe],Ie[pe],j):P[pe];M?(_.copy(R.normals[0]).multiplyScalar(Re.x),T.copy(R.binormals[0]).multiplyScalar(Re.y),E.copy(w[0]).add(_).add(T),Ve(E.x,E.y,E.z)):Ve(Re.x,Re.y,0)}for(let pe=1;pe<=u;pe++)for(let Re=0;Re<Z;Re++){let De=f?Y(P[Re],Ie[Re],j):P[Re];M?(_.copy(R.normals[pe]).multiplyScalar(De.x),T.copy(R.binormals[pe]).multiplyScalar(De.y),E.copy(w[pe]).add(_).add(T),Ve(E.x,E.y,E.z)):Ve(De.x,De.y,d/u*pe)}for(let pe=g-1;pe>=0;pe--){let Re=pe/g,De=p*Math.cos(Re*Math.PI/2),ze=m*Math.sin(Re*Math.PI/2)+y;for(let Fe=0,We=k.length;Fe<We;Fe++){let Ue=Y(k[Fe],W[Fe],ze);Ve(Ue.x,Ue.y,d+De)}for(let Fe=0,We=N.length;Fe<We;Fe++){let Ue=N[Fe];te=L[Fe];for(let tt=0,lt=Ue.length;tt<lt;tt++){let mt=Y(Ue[tt],te[tt],ze);M?Ve(mt.x,mt.y+w[u-1].y,w[u-1].x+De):Ve(mt.x,mt.y,d+De)}}}ge(),be();function ge(){let pe=s.length/3;if(f){let Re=0,De=Z*Re;for(let ze=0;ze<X;ze++){let Fe=de[ze];dt(Fe[2]+De,Fe[1]+De,Fe[0]+De)}Re=u+g*2,De=Z*Re;for(let ze=0;ze<X;ze++){let Fe=de[ze];dt(Fe[0]+De,Fe[1]+De,Fe[2]+De)}}else{for(let Re=0;Re<X;Re++){let De=de[Re];dt(De[2],De[1],De[0])}for(let Re=0;Re<X;Re++){let De=de[Re];dt(De[0]+Z*u,De[1]+Z*u,De[2]+Z*u)}}n.addGroup(pe,s.length/3-pe,0)}function be(){let pe=s.length/3,Re=0;Se(k,Re),Re+=k.length;for(let De=0,ze=N.length;De<ze;De++){let Fe=N[De];Se(Fe,Re),Re+=Fe.length}n.addGroup(pe,s.length/3-pe,1)}function Se(pe,Re){let De=pe.length;for(;--De>=0;){let ze=De,Fe=De-1;Fe<0&&(Fe=pe.length-1);for(let We=0,Ue=u+g*2;We<Ue;We++){let tt=Z*We,lt=Z*(We+1),mt=Re+ze+tt,z=Re+Fe+tt,oe=Re+Fe+lt,fe=Re+ze+lt;Xe(mt,z,oe,fe)}}}function Ve(pe,Re,De){l.push(pe),l.push(Re),l.push(De)}function dt(pe,Re,De){Ye(pe),Ye(Re),Ye(De);let ze=s.length/3,Fe=b.generateTopUV(n,s,ze-3,ze-2,ze-1);at(Fe[0]),at(Fe[1]),at(Fe[2])}function Xe(pe,Re,De,ze){Ye(pe),Ye(Re),Ye(ze),Ye(Re),Ye(De),Ye(ze);let Fe=s.length/3,We=b.generateSideWallUV(n,s,Fe-6,Fe-3,Fe-2,Fe-1);at(We[0]),at(We[1]),at(We[3]),at(We[1]),at(We[2]),at(We[3])}function Ye(pe){s.push(l[pe*3+0]),s.push(l[pe*3+1]),s.push(l[pe*3+2])}function at(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new eo[s.type]().fromJSON(s)),new i(n,e.options)}},kp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new me(r,a),new me(o,l),new me(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],f=e[s*3],p=e[s*3+1],m=e[s*3+2],y=e[r*3],g=e[r*3+1],x=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-d),new me(f,1-m),new me(y,1-x)]:[new me(o,1-l),new me(u,1-d),new me(p,1-m),new me(g,1-x)]}};function Bp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ti=class i extends Vt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=gt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new G,f=new me,p=new G,m=new G,y=new G,g=0,x=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,x=e[b+1].y-e[b].y,p.x=x*1,p.y=-g,p.z=x*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:g=e[b+1].x-e[b].x,x=e[b+1].y-e[b].y,p.x=x*1,p.y=-g,p.z=x*0,m.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(m)}for(let b=0;b<=t;b++){let w=n+b*u*s,M=Math.sin(w),R=Math.cos(w);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*M,d.y=e[T].y,d.z=e[T].x*R,a.push(d.x,d.y,d.z),f.x=b/t,f.y=T/(e.length-1),o.push(f.x,f.y);let _=l[3*T+0]*M,E=l[3*T+1],B=l[3*T+0]*R;c.push(_,E,B)}}for(let b=0;b<t;b++)for(let w=0;w<e.length-1;w++){let M=w+b*e.length,R=M,T=M+e.length,_=M+e.length+1,E=M+1;r.push(R,T,E),r.push(_,E,T)}this.setIndex(r),this.setAttribute("position",new xt(a,3)),this.setAttribute("uv",new xt(o,2)),this.setAttribute("normal",new xt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Pn=class i extends Vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,p=[],m=[],y=[],g=[];for(let x=0;x<u;x++){let b=x*f-a;for(let w=0;w<c;w++){let M=w*d-r;m.push(M,-b,0),y.push(0,0,1),g.push(w/o),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let b=0;b<o;b++){let w=b+c*x,M=b+c*(x+1),R=b+1+c*(x+1),T=b+1+c*x;p.push(w,M,T),p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Vs=class i extends Vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,f=(t-e)/s,p=new G,m=new me;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let x=r+g/n*a;p.x=d*Math.cos(x),p.y=d*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,u.push(m.x,m.y)}d+=f}for(let y=0;y<s;y++){let g=y*(n+1);for(let x=0;x<n;x++){let b=x+g,w=b,M=b+n+1,R=b+n+2,T=b+1;o.push(w,M,T),o.push(M,R,T)}}this.setIndex(o),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ws=class i extends Vt{constructor(e=new yt([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(a,2));function c(u){let d=s.length/3,f=u.extractPoints(t),p=f.shape,m=f.holes;Qn.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,x=m.length;g<x;g++){let b=m[g];Qn.isClockWise(b)===!0&&(m[g]=b.reverse())}let y=Qn.triangulateShape(p,m);for(let g=0,x=m.length;g<x;g++){let b=m[g];p=p.concat(b)}for(let g=0,x=p.length;g<x;g++){let b=p[g];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,x=y.length;g<x;g++){let b=y[g],w=b[0]+d,M=b[1]+d,R=b[2]+d;n.push(w,M,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Hp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Hp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var zt=class i extends Vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new G,f=new G,p=[],m=[],y=[],g=[];for(let x=0;x<=n;x++){let b=[],w=x/n,M=a+w*o,R=e*Math.cos(M),T=Math.sqrt(e*e-R*R),_=0;x===0&&a===0?_=.5/t:x===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let B=E/t,P=s+B*r;d.x=-T*Math.cos(P),d.y=R,d.z=T*Math.sin(P),m.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(B+_,1-w),b.push(c++)}u.push(b)}for(let x=0;x<n;x++)for(let b=0;b<t;b++){let w=u[x][b+1],M=u[x][b],R=u[x+1][b],T=u[x+1][b+1];(x!==0||a>0)&&p.push(w,M,T),(x!==n-1||l<Math.PI)&&p.push(M,R,T)}this.setIndex(p),this.setAttribute("position",new xt(m,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var sn=class i extends Vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],f=new G,p=new G,m=new G;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let x=0;x<=s;x++){let b=x/s*r;p.x=(e+t*Math.cos(g))*Math.cos(b),p.y=(e+t*Math.cos(g))*Math.sin(b),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),d.push(x/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let x=(s+1)*y+g-1,b=(s+1)*(y-1)+g-1,w=(s+1)*(y-1)+g,M=(s+1)*y+g;l.push(x,b,M),l.push(b,w,M)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Fn=class i extends Vt{constructor(e=new Fr(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new G,l=new G,c=new me,u=new G,d=[],f=[],p=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(p,2));function y(){for(let w=0;w<t;w++)g(w);g(r===!1?t:0),b(),x()}function g(w){u=e.getPointAt(w/t,u);let M=a.normals[w],R=a.binormals[w];for(let T=0;T<=s;T++){let _=T/s*Math.PI*2,E=Math.sin(_),B=-Math.cos(_);l.x=B*M.x+E*R.x,l.y=B*M.y+E*R.y,l.z=B*M.z+E*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function x(){for(let w=1;w<=t;w++)for(let M=1;M<=s;M++){let R=(s+1)*(w-1)+(M-1),T=(s+1)*w+(M-1),_=(s+1)*w+M,E=(s+1)*(w-1)+M;m.push(R,T,E),m.push(T,_,E)}}function b(){for(let w=0;w<=t;w++)for(let M=0;M<=s;M++)c.x=w/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new eo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kh(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=ds(i[t]);for(let s in n)e[s]=n[s]}return e}function Kh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}var Zu={clone:ds,merge:dn},Gp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gp,this.fragmentShader=Vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},no=class extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},se=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zr=class extends ei{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=_o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},io=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},so=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Rs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function La(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ro=class extends Fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zl,endingEnd:Zl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $l:r=e,o=2*t-n;break;case Kl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $l:a=e,l=2*n-t;break;case Kl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(s-t),y=m*m,g=y*m,x=-f*g+2*f*y-f*m,b=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*m+1,w=(-1-p)*g+(1.5+p)*y+.5*m,M=p*g-p*y;for(let R=0;R!==o;++R)r[R]=x*a[u+R]+b*a[c+R]+w*a[l+R]+M*a[d+R];return r}},ao=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},oo=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},lo=class extends Fi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(n-t)/(s-t),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let f=o*2,p=e-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],x=p*f+m*2,b=d[x],w=d[x+1],M=e*f+m*2,R=u[M],T=u[M+1],_=Xp(n,t,b,R,s);r[m]=$u(_,y,w,T,g)}return r}};function $u(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Wp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Xp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=$u(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Wp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Rs(t,this.TimeBufferType),this.values=Rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Rs(e.times,Array),values:Rs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),La(e.settings)&&(n.settings={inTangents:Rs(e.settings.inTangents,Array),outTangents:Rs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new lo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case qa:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break;case Yl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return rt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Fa;case this.InterpolantFactoryMethodBezier:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;La(this.settings)&&(Jh(this.settings.inTangents,e),Jh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;La(this.settings)&&(jh(this.settings.inTangents,e),jh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ot("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Lf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let m=0;m!==n;++m){let y=t[d+m];if(y!==t[f+m]||y!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,La(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function jh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=qa;var Oi=class extends In{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=vr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};co.prototype.ValueTypeName="color";var ho=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};ho.prototype.ValueTypeName="number";var uo=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gr=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new uo(this.times,this.values,this.getValueSize(),e)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends In{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=vr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};fo.prototype.ValueTypeName="vector";var po=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ku=new po,mo=class{constructor(e){this.manager=e!==void 0?e:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};mo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ns=class extends Ut{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},is=class extends ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ql=new Ct,Qh=new G,eu=new G,Vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qh),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ql,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ql)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Na=new G,Ua=new nn,jn=new G,Wr=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Na,Ua,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Ua,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Na,Ua,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Ua,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ii=new G,tu=new me,nu=new me,kt=class extends Wr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,tu,nu),t.subVectors(nu,tu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var tc=class extends Vr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},ss=class extends ns{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new tc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},rs=class extends Wr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nc=class extends Vr{constructor(){super(new rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xn=class extends ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new nc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Xs=class extends ns{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Cs=-90,Ps=1,qs=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Cs,Ps,e,t);s.layers=this.layers,this.add(s);let r=new kt(Cs,Ps,e,t);r.layers=this.layers,this.add(r);let a=new kt(Cs,Ps,e,t);a.layers=this.layers,this.add(a);let o=new kt(Cs,Ps,e,t);o.layers=this.layers,this.add(o);let l=new kt(Cs,Ps,e,t);l.layers=this.layers,this.add(l);let c=new kt(Cs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},go=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Fc="\\[\\]\\.:\\/",qp=new RegExp("["+Fc+"]","g"),Oc="[^"+Fc+"]",Yp="[^"+Fc.replace("\\.","")+"]",Zp=/((?:WC+[\/:])*)/.source.replace("WC",Oc),$p=/(WCOD+)?/.source.replace("WCOD",Yp),Kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),Jp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),jp=new RegExp("^"+Zp+$p+Kp+Jp+"$"),Qp=["material","materials","bones","map"],ic=class{constructor(e,t,n){let s=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qp,"")}static parseTrackName(e){let t=jp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Dt.Composite=ic;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Uy=new Float32Array(1);var iu=new Ct,Ys=class{constructor(e,t,n=0,s=1/0){this.ray=new Li(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(e,t=!0,n=[]){return sc(e,this,n,t),n.sort(su),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sc(e[s],this,n,t);return n.sort(su),n}};function su(i,e){return i.distance-e.distance}function sc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)sc(r[a],e,t,!0)}}var Zs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var rc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var Xr=class extends Vn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function kc(i,e,t,n){let s=em(n);switch(t){case Sc:return i*e;case wo:return i*e/s.components*s.byteLength;case To:return i*e/s.components*s.byteLength;case zi:return i*e*2/s.components*s.byteLength;case Ao:return i*e*2/s.components*s.byteLength;case Ec:return i*e*3/s.components*s.byteLength;case $n:return i*e*4/s.components*s.byteLength;case Ro:return i*e*4/s.components*s.byteLength;case Yr:case Zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $r:case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:case Do:return Math.max(i,16)*Math.max(e,8)/4;case Co:case Io:return Math.max(i,8)*Math.max(e,8)/2;case Lo:case No:case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uo:case Jr:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qo:case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*8;case jr:case sl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function em(i){switch(i){case vn:case yc:return{byteLength:1,components:1};case js:case vc:case Zn:return{byteLength:2,components:1};case So:case Eo:return{byteLength:2,components:4};case Yn:case bo:case On:return{byteLength:4,components:1};case Mc:case bc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function _d(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nm(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],y=d[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let y=d[p];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
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
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cm=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,um=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gm=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Am=`vec3 transformedNormal = objectNormal;
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
#endif`,Rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vm=`#ifdef USE_GRADIENTMAP
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
}`,Wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zm=`#ifdef USE_ENVMAP
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
#endif`,$m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qm=`PhysicalMaterial material;
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
#endif`,e0=`uniform sampler2D dfgLUT;
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
}`,t0=`
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
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
#endif`,i0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g0=`#if defined( USE_MORPHCOLORS )
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
#endif`,x0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`#ifdef USE_MORPHTARGETS
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
#endif`,y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w0=`#ifdef USE_NORMALMAP
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
#endif`,T0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z0=`float getShadowMask() {
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
}`,G0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V0=`#ifdef USE_SKINNING
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
#endif`,W0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K0=`#ifdef USE_TRANSMISSION
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
#endif`,J0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ng=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ig=`uniform sampler2D t2D;
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
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform float backgroundBlurriness;
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`#include <common>
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
}`,cg=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`uniform float scale;
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
}`,mg=`uniform vec3 diffuse;
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
}`,gg=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,Mg=`#define MATCAP
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
}`,bg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,wg=`#define PHONG
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
}`,Tg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Cg=`#define TOON
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
}`,Pg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Lg=`uniform vec3 color;
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
}`,Ng=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:lm,aomap_fragment:cm,aomap_pars_fragment:hm,batching_pars_vertex:um,batching_vertex:dm,begin_vertex:fm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:xm,clipping_planes_fragment:_m,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:vm,clipping_planes_vertex:Mm,color_fragment:bm,color_pars_fragment:Sm,color_pars_vertex:Em,color_vertex:wm,common:Tm,defaultnormal_vertex:Am,displacementmap_pars_vertex:Rm,displacementmap_vertex:Cm,emissivemap_fragment:Pm,emissivemap_pars_fragment:Im,colorspace_fragment:Dm,colorspace_pars_fragment:Lm,envmap_fragment:Nm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Fm,envmap_pars_vertex:Om,envmap_physical_pars_fragment:Zm,envmap_vertex:km,fog_vertex:Bm,fog_pars_vertex:Hm,fog_fragment:zm,fog_pars_fragment:Gm,gradientmap_pars_fragment:Vm,lightmap_pars_fragment:Wm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:qm,lights_pars_begin:Ym,lights_toon_fragment:$m,lights_toon_pars_fragment:Km,lights_phong_fragment:Jm,lights_phong_pars_fragment:jm,lights_physical_fragment:Qm,lights_physical_pars_fragment:e0,lights_fragment_begin:t0,lights_fragment_maps:n0,lights_fragment_end:i0,lightprobes_pars_fragment:s0,logdepthbuf_fragment:r0,logdepthbuf_pars_fragment:a0,logdepthbuf_pars_vertex:o0,logdepthbuf_vertex:l0,map_fragment:c0,map_pars_fragment:h0,map_particle_fragment:u0,map_particle_pars_fragment:d0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:p0,morphinstance_vertex:m0,morphcolor_vertex:g0,morphnormal_vertex:x0,morphtarget_pars_vertex:_0,morphtarget_vertex:y0,normal_fragment_begin:v0,normal_fragment_maps:M0,normal_pars_fragment:b0,normal_pars_vertex:S0,normal_vertex:E0,normalmap_pars_fragment:w0,clearcoat_normal_fragment_begin:T0,clearcoat_normal_fragment_maps:A0,clearcoat_pars_fragment:R0,iridescence_pars_fragment:C0,opaque_fragment:P0,packing:I0,premultiplied_alpha_fragment:D0,project_vertex:L0,dithering_fragment:N0,dithering_pars_fragment:U0,roughnessmap_fragment:F0,roughnessmap_pars_fragment:O0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:B0,shadowmap_vertex:H0,shadowmask_pars_fragment:z0,skinbase_vertex:G0,skinning_pars_vertex:V0,skinning_vertex:W0,skinnormal_vertex:X0,specularmap_fragment:q0,specularmap_pars_fragment:Y0,tonemapping_fragment:Z0,tonemapping_pars_fragment:$0,transmission_fragment:K0,transmission_pars_fragment:J0,uv_pars_fragment:j0,uv_pars_vertex:Q0,uv_vertex:eg,worldpos_vertex:tg,background_vert:ng,background_frag:ig,backgroundCube_vert:sg,backgroundCube_frag:rg,cube_vert:ag,cube_frag:og,depth_vert:lg,depth_frag:cg,distance_vert:hg,distance_frag:ug,equirect_vert:dg,equirect_frag:fg,linedashed_vert:pg,linedashed_frag:mg,meshbasic_vert:gg,meshbasic_frag:xg,meshlambert_vert:_g,meshlambert_frag:yg,meshmatcap_vert:vg,meshmatcap_frag:Mg,meshnormal_vert:bg,meshnormal_frag:Sg,meshphong_vert:Eg,meshphong_frag:wg,meshphysical_vert:Tg,meshphysical_frag:Ag,meshtoon_vert:Rg,meshtoon_frag:Cg,points_vert:Pg,points_frag:Ig,shadow_vert:Dg,shadow_frag:Lg,sprite_vert:Ng,sprite_frag:Ug},He={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ai={basic:{uniforms:dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:dn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:dn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:dn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:dn([He.points,He.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:dn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:dn([He.common,He.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:dn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:dn([He.sprite,He.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:dn([He.common,He.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:dn([He.lights,He.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ai.physical={uniforms:dn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var rl={r:0,b:0,g:0},Fg=new Ct,yd=new ht;yd.set(-1,0,0,0,1,0,0,0,1);function Og(i,e,t,n,s,r){let a=new ut(0),o=s===!0?0:1,l,c,u=null,d=0,f=null;function p(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let M=b.backgroundBlurriness>0;w=e.get(w,M)}return w}function m(b){let w=!1,M=p(b);M===null?g(a,o):M&&M.isColor&&(g(M,1),w=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,w){let M=p(w);M&&M.isCubeTexture?(c===void 0&&(c=new Ne(new Ft(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ds(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Fg.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yd),c.material.toneMapped=bt.getTransfer(M.colorSpace)!==Rt,(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ne(new Pn(2,2),new ni({name:"BackgroundMaterial",uniforms:ds(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=bt.getTransfer(M.colorSpace)!==Rt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,w){b.getRGB(rl,Uc(i)),t.buffers.color.setClear(rl.r,rl.g,rl.b,w,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:m,addToRenderList:y,dispose:x}}function kg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(N,H,F,D,k){let Y=!1,Z=d(N,D,F,H);r!==Z&&(r=Z,c(r.object)),Y=p(N,D,F,k),Y&&m(N,D,F,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(N,H,F,D),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function d(N,H,F,D){let k=D.wireframe===!0,Y=n[H.id];Y===void 0&&(Y={},n[H.id]=Y);let Z=N.isInstancedMesh===!0?N.id:0,q=Y[Z];q===void 0&&(q={},Y[Z]=q);let W=q[F.id];W===void 0&&(W={},q[F.id]=W);let L=W[k];return L===void 0&&(L=f(l()),W[k]=L),L}function f(N){let H=[],F=[],D=[];for(let k=0;k<t;k++)H[k]=0,F[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:F,attributeDivisors:D,object:N,attributes:{},index:null}}function p(N,H,F,D){let k=r.attributes,Y=H.attributes,Z=0,q=F.getAttributes();for(let W in q)if(q[W].location>=0){let te=k[W],Ie=Y[W];if(Ie===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Ie=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Ie=N.instanceColor)),te===void 0||te.attribute!==Ie||Ie&&te.data!==Ie.data)return!0;Z++}return r.attributesNum!==Z||r.index!==D}function m(N,H,F,D){let k={},Y=H.attributes,Z=0,q=F.getAttributes();for(let W in q)if(q[W].location>=0){let te=Y[W];te===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(te=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(te=N.instanceColor));let Ie={};Ie.attribute=te,te&&te.data&&(Ie.data=te.data),k[W]=Ie,Z++}r.attributes=k,r.attributesNum=Z,r.index=D}function y(){let N=r.newAttributes;for(let H=0,F=N.length;H<F;H++)N[H]=0}function g(N){x(N,0)}function x(N,H){let F=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;F[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),k[N]!==H&&(i.vertexAttribDivisor(N,H),k[N]=H)}function b(){let N=r.newAttributes,H=r.enabledAttributes;for(let F=0,D=H.length;F<D;F++)H[F]!==N[F]&&(i.disableVertexAttribArray(F),H[F]=0)}function w(N,H,F,D,k,Y,Z){Z===!0?i.vertexAttribIPointer(N,H,F,k,Y):i.vertexAttribPointer(N,H,F,D,k,Y)}function M(N,H,F,D){y();let k=D.attributes,Y=F.getAttributes(),Z=H.defaultAttributeValues;for(let q in Y){let W=Y[q];if(W.location>=0){let L=k[q];if(L===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(L=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(L=N.instanceColor)),L!==void 0){let te=L.normalized,Ie=L.itemSize,de=e.get(L);if(de===void 0)continue;let X=de.buffer,j=de.type,ge=de.bytesPerElement,be=j===i.INT||j===i.UNSIGNED_INT||L.gpuType===bo;if(L.isInterleavedBufferAttribute){let Se=L.data,Ve=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,dt=L.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Xe=0;Xe<W.locationSize;Xe++)x(W.location+Xe,Se.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Xe=0;Xe<W.locationSize;Xe++)g(W.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Xe=0;Xe<W.locationSize;Xe++)w(W.location+Xe,Ie/W.locationSize,j,te,Ve*ge,(dt+Ie/W.locationSize*Xe)*ge,be)}else{if(L.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)x(W.location+Se,L.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let Se=0;Se<W.locationSize;Se++)g(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,X);for(let Se=0;Se<W.locationSize;Se++)w(W.location+Se,Ie/W.locationSize,j,te,Ie*ge,Ie/W.locationSize*Se*ge,be)}}else if(Z!==void 0){let te=Z[q];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(W.location,te);break;case 3:i.vertexAttrib3fv(W.location,te);break;case 4:i.vertexAttrib4fv(W.location,te);break;default:i.vertexAttrib1fv(W.location,te)}}}}b()}function R(){B();for(let N in n){let H=n[N];for(let F in H){let D=H[F];for(let k in D){let Y=D[k];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete D[k]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let H=n[N.id];for(let F in H){let D=H[F];for(let k in D){let Y=D[k];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete D[k]}}delete n[N.id]}function _(N){for(let H in n){let F=n[H];for(let D in F){let k=F[D];if(k[N.id]===void 0)continue;let Y=k[N.id];for(let Z in Y)u(Y[Z].object),delete Y[Z];delete k[N.id]}}}function E(N){for(let H in n){let F=n[H],D=N.isInstancedMesh===!0?N.id:0,k=F[D];if(k!==void 0){for(let Y in k){let Z=k[Y];for(let q in Z)u(Z[q].object),delete Z[q];delete k[Y]}delete F[D],Object.keys(F).length===0&&delete n[H]}}}function B(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function Bg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Hg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==$n&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let E=_===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==vn&&_!==On&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(rt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:M,maxSamples:R,samples:T}}function zg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new En,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,x=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let b=r?0:n,w=b*4,M=x.clippingState||null;l.value=M,M=u(m,f,w,p);for(let R=0;R!==w;++R)M[R]=t[R];x.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,p,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let x=p+y*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<x)&&(g=new Float32Array(x));for(let w=0,M=p;w!==y;++w,M+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var na=class extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:os});r.uniforms.tEquirect.value=t;let a=new Ne(s,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=gn),new qs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ju=256,Gg=3,Vg=20,vd=256,Md=16,Wg=3,Xg=new G,qg=new ut,bi=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qs(1,10,null),this._boxMesh=new Ne(new Ft(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Xg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(qg));let g=new qs(n,s,u);return g.position.copy(o),g.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=m,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ju,Ic(e))}_fromTexture(e,t){e.mapping===cs||e.mapping===Js?this._setSize(e.image.length===0?Ju:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ju(e,!1,!1),n=Math.log2(e)-Gg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ju(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===cs||e.mapping===Js?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Qu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Yg(),this._integrationMaterial=Zg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Md);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Wg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(vd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=$g());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function ju(i,e,t){return new na(i,{minFilter:yi,generateMipmaps:e,type:Zn,colorSpace:Mr,depthBuffer:t})}function ia(i,e,t){return new ni({name:i,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:t,side:$t,blending:os,depthTest:!1,depthWrite:!1})}function Yg(){return ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vd}u

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
	`)}function Zg(){return ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Md}},`

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
	`)}function $g(){return ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vg}
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
	`)}function Qu(){return ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ed(){return ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Kg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===yo||p===vo)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let y=new na(m.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,m=p===yo||p===vo,y=p===cs||p===Js;if(m||y){let g=t.get(f),x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new bi(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let b=f.image;return m&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new bi(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,p){return p===yo?f.mapping=cs:p===vo&&(f.mapping=Js),f}function l(f){let p=0,m=6;for(let y=0;y<m;y++)f[y]!==void 0&&p++;return p===m}function c(f){let p=f.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Jg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&mr("WebGLRenderer: "+n+" extension not supported."),s}}}function jg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let y=r.get(m);y&&(e.remove(y),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function u(m){let y=m.attributes;for(let g in y)e.update(y[g],i.ARRAY_BUFFER)}function d(m){let y=m.index,g=m.attributes.position,x=0;if(g===void 0)return;let b=y!==null?y.array.length:g.array.length/3-1,w=g.count>=65535?Tr:wr,M=new w(Math.ceil(b/3)*6,1),R=M.array;if(y!==null){let _=y.array;x=y.version;for(let E=0,B=0;E<b;E+=3){let P=_[E+0],N=_[E+1],H=_[E+2];R[B++]=P,R[B++]=N,R[B++]=N,R[B++]=H,R[B++]=H,R[B++]=P}}else{x=g.version;for(let _=0,E=0;_<b;_+=3){let B=_+0,P=_+1,N=_+2;R[E++]=B,R[E++]=P,R[E++]=P,R[E++]=N,R[E++]=N,R[E++]=B}}M.version=x;let T=r.get(m);T&&e.remove(T),r.set(m,M)}function f(m){let y=r.get(m);if(y){let g=m.index;g!==null&&y.version<g.version&&d(m)}else d(m);return r.get(m)}function p(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:f,dispose:p}}function Qg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let y=0;for(let g=0;g<p;g++)y+=f[g];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ex(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tx(i,e,t){let n=new WeakMap,s=new Nt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let B=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;p===!0&&(w=1),m===!0&&(w=2),y===!0&&(w=3);let M=o.attributes.position.count*w,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*R*4*d),_=new Er(T,M,R,d);_.type=On,_.needsUpdate=!0;let E=w*4;for(let P=0;P<d;P++){let N=g[P],H=x[P],F=b[P],D=M*R*4*P;for(let k=0;k<N.count;k++){let Y=k*E;p===!0&&(s.fromBufferAttribute(N,k),T[D+Y+0]=s.x,T[D+Y+1]=s.y,T[D+Y+2]=s.z,T[D+Y+3]=0),m===!0&&(s.fromBufferAttribute(H,k),T[D+Y+4]=s.x,T[D+Y+5]=s.y,T[D+Y+6]=s.z,T[D+Y+7]=0),y===!0&&(s.fromBufferAttribute(F,k),T[D+Y+8]=s.x,T[D+Y+9]=s.y,T[D+Y+10]=s.z,T[D+Y+11]=F.itemSize===4?s.w:1)}}f={count:d,texture:_,size:new me(M,R)},n.set(o,f),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function nx(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,f=e.get(c,d);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var ix={[dc]:"LINEAR_TONE_MAPPING",[fc]:"REINHARD_TONE_MAPPING",[pc]:"CINEON_TONE_MAPPING",[mc]:"ACES_FILMIC_TONE_MAPPING",[xc]:"AGX_TONE_MAPPING",[qn]:"NEUTRAL_TONE_MAPPING",[gc]:"CUSTOM_TONE_MAPPING"};function sx(i,e,t,n,s,r){let a=new Tn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Vt;u.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new xt([0,2,0,0,2,0],2));let d=new no({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ne(u,d),p=new rs(-1,1,1,-1,0,1),m=null,y=null,g=!1,x,b=null,w=[],M=!1;this.setSize=function(R,T){a.setSize(R,T),o!==null&&o.setSize(R,T),l!==null&&l.setSize(R,T);for(let _=0;_<w.length;_++){let E=w[_];E.setSize&&E.setSize(R,T)}},this.setEffects=function(R){w=R,M=w.length>0&&w[0].isRenderPass===!0;let T=a.width,_=a.height;w.length>0&&o===null&&(o=new Tn(T,_,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),l=new Tn(T,_,{type:Zn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&w.some(B=>B.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new _i(T,_),r===!0&&(c.format=vi,c.type=hs)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let B=0;B<w.length;B++){let P=w[B];P.setSize&&P.setSize(T,_),E&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,T){if(g||R.toneMapping===si&&w.length===0)return!1;if(b=T,T!==null){let _=T.width,E=T.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return M===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=si,!0},this.hasRenderPass=function(){return M},this.end=function(R,T){R.toneMapping=x,g=!0;let _=a,E=o;for(let B=0;B<w.length;B++){let P=w[B];P.enabled!==!1&&(P.render(R,E,_,T),P.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(m!==R.outputColorSpace||y!==R.toneMapping){m=R.outputColorSpace,y=R.toneMapping,d.defines={},bt.getTransfer(m)===Rt&&(d.defines.SRGB_TRANSFER="");let B=ix[y];B&&(d.defines[B]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(b),R.render(f,p),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var bd=new xn,Sd=new _i(1,1),Ed=new Ir(1),wd=new Er,Td=new $a,Ad=new Pr,td=[],nd=[],id=new Float32Array(16),sd=new Float32Array(9),rd=new Float32Array(4);function er(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ol(i,e){let t=nd[e];t===void 0&&(t=new Int32Array(e),nd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;rd.set(n),i.uniformMatrix2fv(this.addr,!1,rd),Jt(t,n)}}function hx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;sd.set(n),i.uniformMatrix3fv(this.addr,!1,sd),Jt(t,n)}}function ux(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Kt(t,n))return;id.set(n),i.uniformMatrix4fv(this.addr,!1,id),Jt(t,n)}}function dx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function _x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function ll(i){return i.version===0&&(i.compareFunction=Ac,i.needsUpdate=!0),i}function vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ll(Sd):r=bd,t.setTexture2D(e||r,s)}function Mx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Td,s)}function bx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ll(Ed):r=Ad,t.setTextureCube(e||r,s)}function Sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wd,s)}function Ex(i){switch(i){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return xx;case 36295:return _x;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Sx}}function wx(i,e){i.uniform1fv(this.addr,e)}function Tx(i,e){let t=er(e,this.size,2);i.uniform2fv(this.addr,t)}function Ax(i,e){let t=er(e,this.size,3);i.uniform3fv(this.addr,t)}function Rx(i,e){let t=er(e,this.size,4);i.uniform4fv(this.addr,t)}function Cx(i,e){let t=er(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Px(i,e){let t=er(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ix(i,e){let t=er(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dx(i,e){i.uniform1iv(this.addr,e)}function Lx(i,e){i.uniform2iv(this.addr,e)}function Nx(i,e){i.uniform3iv(this.addr,e)}function Ux(i,e){i.uniform4iv(this.addr,e)}function Fx(i,e){i.uniform1uiv(this.addr,e)}function Ox(i,e){i.uniform2uiv(this.addr,e)}function kx(i,e){i.uniform3uiv(this.addr,e)}function Bx(i,e){i.uniform4uiv(this.addr,e)}function Hx(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ll(Sd):a=bd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function zx(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Td,r[a])}function Gx(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ll(Ed):a=Ad;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Vx(i,e,t){let n=this.cache,s=e.length,r=ol(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),Jt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wd,r[a])}function Wx(i){switch(i){case 5126:return wx;case 35664:return Tx;case 35665:return Ax;case 35666:return Rx;case 35674:return Cx;case 35675:return Px;case 35676:return Ix;case 5124:case 35670:return Dx;case 35667:case 35671:return Lx;case 35668:case 35672:return Nx;case 35669:case 35673:return Ux;case 5125:return Fx;case 36294:return Ox;case 36295:return kx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Hx;case 35679:case 36299:case 36307:return zx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Vx}}var zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ex(t.type)}},Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wx(t.type)}},Vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Bc=/(\w+)(\])?(\[|\.)?/g;function ad(i,e){i.seq.push(e),i.map[e.id]=e}function Xx(i,e,t){let n=i.name,s=n.length;for(Bc.lastIndex=0;;){let r=Bc.exec(n),a=Bc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ad(t,c===void 0?new zc(o,i,e):new Gc(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Vc(o),ad(t,d)),t=d}}}var Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Xx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var qx=37297,Yx=0;function Zx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ld=new ht;function $x(i){bt._getMatrix(ld,bt.workingColorSpace,i);let e=`mat3( ${ld.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case br:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function cd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Zx(i.getShaderSource(e),o)}else return r}function Kx(i,e){let t=$x(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Jx={[dc]:"Linear",[fc]:"Reinhard",[pc]:"Cineon",[mc]:"ACESFilmic",[xc]:"AgX",[qn]:"Neutral",[gc]:"Custom"};function jx(i,e){let t=Jx[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var al=new G;function Qx(){bt.getLuminanceCoefficients(al);let i=al.x.toFixed(4),e=al.y.toFixed(4),t=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function t_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ta(i){return i!==""}function hd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ud(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wc(i){return i.replace(i_,s_)}function s_(i,e){let t=_t[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wc(t)}var r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dd(i){return i.replace(r_,a_)}function a_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var o_={[as]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function l_(i){return o_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var c_={[Js]:"ENVMAP_MODE_REFRACTION"};function h_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":c_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var u_={[_o]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[Tu]:"ENVMAP_BLENDING_ADD"};function d_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":u_[i.combine]||"ENVMAP_BLENDING_NONE"}function f_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=l_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=h_(t),d=d_(t),f=e_(t),p=t_(r),m=s.createProgram(),y,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ta).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ta).join(`
`),g.length>0&&(g+=`
`)):(y=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),g=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?_t.tonemapping_pars_fragment:"",t.toneMapping!==si?jx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Kx("linearToOutputTexel",t.outputColorSpace),Qx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),a=Wc(a),a=hd(a,t),a=ud(a,t),o=Wc(o),o=hd(o,t),o=ud(o,t),a=dd(a),o=dd(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=x+y+a,w=x+g+o,M=od(s,s.VERTEX_SHADER,b),R=od(s,s.FRAGMENT_SHADER,w);s.attachShader(m,M),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function T(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(m)||"",H=s.getShaderInfoLog(M)||"",F=s.getShaderInfoLog(R)||"",D=N.trim(),k=H.trim(),Y=F.trim(),Z=!0,q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,M,R);else{let W=cd(s,M,"vertex"),L=cd(s,R,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+W+`
`+L)}else D!==""?rt("WebGLProgram: Program Info Log:",D):(k===""||Y==="")&&(q=!1);q&&(P.diagnostics={runnable:Z,programLog:D,vertexShader:{log:k,prefix:y},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(M),s.deleteShader(R),_=new Qs(s,m),E=n_(s,m)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,qx)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=R,this}var p_=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qc(e),t.set(e,n)),n}},qc=class{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}};function m_(i){return i===zi||i===Jr||i===jr}function g_(i,e,t,n,s,r){let a=new Os,o=new Xc,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,E,B,P,N,H){let F=P.fog,D=N.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Z=e.get(_.envMap||k,Y),q=f[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&rt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let L=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=L!==void 0?L.length:0,Ie=0;D.morphAttributes.position!==void 0&&(Ie=1),D.morphAttributes.normal!==void 0&&(Ie=2),D.morphAttributes.color!==void 0&&(Ie=3);let de,X,j,ge;if(q){let Be=ai[q];de=Be.vertexShader,X=Be.fragmentShader}else{de=_.vertexShader,X=_.fragmentShader;let Be=o.getVertexShaderStage(_),Et=o.getFragmentShaderStage(_);o.update(_,Be,Et),j=Be.id,ge=Et.id}let be=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ve=N.isInstancedMesh===!0,dt=N.isBatchedMesh===!0,Xe=!!_.map,Ye=!!_.matcap,at=!!Z,pe=at&&Z.isPMREMTexture===!0,Re=!!_.aoMap,De=!!_.lightMap,ze=!!_.bumpMap&&_.wireframe===!1,Fe=!!_.normalMap,We=!!_.displacementMap,Ue=!!_.emissiveMap,tt=!!_.metalnessMap,lt=!!_.roughnessMap,mt=_.anisotropy>0,z=_.clearcoat>0,oe=_.diffuseRoughness>0,fe=_.dispersion>0,Ee=_.retroreflectivity>0,ee=_.iridescence>0,it=_.sheen>0,Le=_.transmission>0,Ce=mt&&!!_.anisotropyMap,I=z&&!!_.clearcoatMap,S=z&&!!_.clearcoatNormalMap,$=z&&!!_.clearcoatRoughnessMap,xe=oe&&!!_.diffuseRoughnessMap,he=ee&&!!_.iridescenceMap,_e=ee&&!!_.iridescenceThicknessMap,Te=it&&!!_.sheenColorMap,ie=it&&!!_.sheenRoughnessMap,ue=!!_.specularMap,ve=!!_.specularColorMap,O=!!_.specularIntensityMap,ae=Le&&!!_.transmissionMap,Q=Le&&!!_.thicknessMap,Ae=!!_.gradientMap,we=!!_.alphaMap,Pe=_.alphaTest>0,Ze=!!_.alphaHash,ct=!!_.extensions,Me=si;_.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(Me=i.toneMapping);let qe=pe?Z.isCompressedCubeTexture?Z.image[0].mipmaps:Z.mipmaps:null,st={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:de,fragmentShader:X,defines:_.defines,customVertexShaderID:j,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:dt,batchingColor:dt&&N._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&N.instanceColor!==null,instancingMorph:Ve&&N.morphTexture!==null,outputColorSpace:be===null?i.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Xe,matcap:Ye,envMap:at,envMapMode:at&&Z.mapping,envMapPMREM:pe,envMapMaxLod:pe?qe.length-1:null,envMapSize:pe?qe[0].width:null,aoMap:Re,lightMap:De,bumpMap:ze,normalMap:Fe,displacementMap:We,emissiveMap:Ue,normalMapObjectSpace:Fe&&_.normalMapType===Cu,normalMapTangentSpace:Fe&&_.normalMapType===Qr,packedNormalMap:Fe&&_.normalMapType===Qr&&m_(_.normalMap.format),metalnessMap:tt,roughnessMap:lt,anisotropy:mt,anisotropyMap:Ce,clearcoat:z,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:$,diffuseRoughness:oe,diffuseRoughnessMap:xe,dispersion:fe,retroreflection:Ee,iridescence:ee,iridescenceMap:he,iridescenceThicknessMap:_e,sheen:it,sheenColorMap:Te,sheenRoughnessMap:ie,specularMap:ue,specularColorMap:ve,specularIntensityMap:O,transmission:Le,transmissionMap:ae,thicknessMap:Q,gradientMap:Ae,opaque:_.transparent===!1&&_.blending===Ks&&_.alphaToCoverage===!1,alphaMap:we,alphaTest:Pe,alphaHash:Ze,combine:_.combine,mapUv:Xe&&p(_.map.channel),aoMapUv:Re&&p(_.aoMap.channel),lightMapUv:De&&p(_.lightMap.channel),bumpMapUv:ze&&p(_.bumpMap.channel),normalMapUv:Fe&&p(_.normalMap.channel),displacementMapUv:We&&p(_.displacementMap.channel),emissiveMapUv:Ue&&p(_.emissiveMap.channel),metalnessMapUv:tt&&p(_.metalnessMap.channel),roughnessMapUv:lt&&p(_.roughnessMap.channel),anisotropyMapUv:Ce&&p(_.anisotropyMap.channel),clearcoatMapUv:I&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:he&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ie&&p(_.sheenRoughnessMap.channel),specularMapUv:ue&&p(_.specularMap.channel),specularColorMapUv:ve&&p(_.specularColorMap.channel),specularIntensityMapUv:O&&p(_.specularIntensityMap.channel),transmissionMapUv:ae&&p(_.transmissionMap.channel),thicknessMapUv:Q&&p(_.thicknessMap.channel),alphaMapUv:we&&p(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Fe||mt),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Xe||we),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.filter(Be=>Be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:Xe&&_.map.isVideoTexture===!0&&bt.getTransfer(_.map.colorSpace)===Rt,decodeVideoTextureEmissive:Ue&&_.emissiveMap.isVideoTexture===!0&&bt.getTransfer(_.emissiveMap.colorSpace)===Rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ct&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&_.extensions.multiDraw===!0||dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function y(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)E.push(B),E.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(g(E,_),x(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function x(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let E=f[_.type],B;if(E){let P=ai[E];B=Zu.clone(P.uniforms)}else B=_.uniforms;return B}function w(_,E){let B=u.get(E);return B!==void 0?++B.usedTimes:(B=new f_(i,E,_,s),c.push(B),u.set(E,B)),B}function M(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function T(){o.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:b,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:T}}function x_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function __(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function md(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,y,g,x){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:p,material:m,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:x},i[e]=b):(b.id=f.id,b.object=f,b.geometry=p,b.material=m,b.materialVariant=a(f),b.groupOrder=y,b.renderOrder=f.renderOrder,b.z=g,b.group=x),e++,b}function l(f,p,m,y,g,x,b){b.reversedDepth===!0&&(g=-g);let w=o(f,p,m,y,g,x);m.transmission>0?n.push(w):m.transparent===!0?s.push(w):t.push(w)}function c(f,p,m,y,g,x){let b=o(f,p,m,y,g,x);m.transmission>0?n.unshift(b):m.transparent===!0?s.unshift(b):t.unshift(b)}function u(f,p){t.length>1&&t.sort(f||__),n.length>1&&n.sort(p||pd),s.length>1&&s.sort(p||pd)}function d(){for(let f=e,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function y_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new md,i.set(n,[a])):s>=r.length?(a=new md,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function v_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new ut};break;case"SpotLight":t={position:new G,direction:new G,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function M_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var b_=0;function S_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E_(i){let e=new v_,t=M_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new Ct,a=new Ct;function o(c){let u=0,d=0,f=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,m=0,y=0,g=0,x=0,b=0,w=0,M=0,R=0,T=0,_=0,E=0,B=0,P=0;c.sort(S_);for(let H=0,F=c.length;H<F;H++){let D=c[H],k=D.color,Y=D.intensity,Z=D.distance,q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zi?q=D.shadow.map.texture:q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*Y,d+=k.g*Y,f+=k.b*Y;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],Y);P++}else if(D.isSunLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let L=D.shadow,te=t.get(D);te.shadowIntensity=L.intensity,te.shadowBias=L.bias,te.shadowNormalBias=L.normalBias,te.shadowRadius=L.radius,te.shadowMapSize.copy(L.mapSize).multiply(L.getFrameExtents()),n.sunShadow[m]=te,n.sunShadowMap[m]=q;let Ie=L.getViewportCount();for(let de=0;de<Ie;de++)n.sunShadowMatrix[y+de]=L.getMatrix(de),n.sunShadowCascade[y+de]=L._cascadeData[de];y+=Ie,m++}n.sun[p]=W,p++}else if(D.isDirectionalLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let L=D.shadow,te=t.get(D);te.shadowIntensity=L.intensity,te.shadowBias=L.bias,te.shadowNormalBias=L.normalBias,te.shadowRadius=L.radius,te.shadowMapSize=L.mapSize,n.directionalShadow[g]=te,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=D.shadow.matrix,R++}n.directional[g]=W,g++}else if(D.isSpotLight){let W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(k).multiplyScalar(Y),W.distance=Z,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[b]=W;let L=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,L.updateMatrices(D),D.castShadow&&B++),n.spotLightMatrix[b]=L.matrix,D.castShadow){let te=t.get(D);te.shadowIntensity=L.intensity,te.shadowBias=L.bias,te.shadowNormalBias=L.normalBias,te.shadowRadius=L.radius,te.shadowMapSize=L.mapSize,n.spotShadow[b]=te,n.spotShadowMap[b]=q,_++}b++}else if(D.isRectAreaLight){let W=e.get(D);W.color.copy(k).multiplyScalar(Y),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=W,w++}else if(D.isPointLight){let W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){let L=D.shadow,te=t.get(D);te.shadowIntensity=L.intensity,te.shadowBias=L.bias,te.shadowNormalBias=L.normalBias,te.shadowRadius=L.radius,te.shadowMapSize=L.mapSize,te.shadowCameraNear=L.camera.near,te.shadowCameraFar=L.camera.far,n.pointShadow[x]=te,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=D.shadow.matrix,T++}n.point[x]=W,x++}else if(D.isHemisphereLight){let W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(Y),W.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[M]=W,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=He.LTC_FLOAT_1,n.rectAreaLTC2=He.LTC_FLOAT_2):(n.rectAreaLTC1=He.LTC_HALF_1,n.rectAreaLTC2=He.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==p||N.directionalLength!==g||N.pointLength!==x||N.spotLength!==b||N.rectAreaLength!==w||N.hemiLength!==M||N.numSunShadows!==m||N.numDirectionalShadows!==R||N.numPointShadows!==T||N.numSpotShadows!==_||N.numSpotMaps!==E||N.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=g,n.spot.length=b,n.rectArea.length=w,n.point.length=x,n.hemi.length=M,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-B,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=P,N.sunLength=p,N.directionalLength=g,N.pointLength=x,N.spotLength=b,N.rectAreaLength=w,N.hemiLength=M,N.numSunShadows=m,N.numDirectionalShadows=R,N.numPointShadows=T,N.numSpotShadows=_,N.numSpotMaps=E,N.numLightProbes=P,n.version=b_++)}function l(c,u){let d=0,f=0,p=0,m=0,y=0,g=0,x=u.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let M=c[b];if(M.isSunLight){let R=n.sun[d];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(x),d++}else if(M.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),f++}else if(M.isSpotLight){let R=n.spot[m];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),m++}else if(M.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),a.identity(),r.copy(M.matrixWorld),r.premultiply(x),a.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(x),p++}else if(M.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(x),g++}}}return{setup:o,setupView:l,state:n}}function gd(i){let e=new E_(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function w_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new gd(i),e.set(s,[o])):r>=a.length?(o=new gd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A_=`uniform sampler2D shadow_pass;
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
}`,R_=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],C_=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],xd=new Ct,ea=new G,Hc=new G;function P_(i,e,t){let n=new Ni,s=new me,r=new me,a=new Nt,o=new io,l=new so,c={},u=t.maxTextureSize,d={[ii]:$t,[$t]:ii,[un]:un},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:T_,fragmentShader:A_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Vt;m.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ne(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let x=this.type;this.render=function(T,_,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===xo&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=as);let B=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),H=i.state;H.setBlending(os),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let F=x!==this.type;F&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=T.length;D<k;D++){let Y=T[D],Z=Y.shadow;if(Z===void 0){rt("WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let q=Z.getFrameExtents();s.multiply(q),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,Z.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=W,Z.map===null||F===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===$s){if(Y.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Tn(s.x,s.y,{format:zi,type:Zn,minFilter:gn,magFilter:gn,generateMipmaps:!1}),Z.map.texture.name=Y.name+".shadowMap",Z.map.depthTexture=new _i(s.x,s.y,On),Z.map.depthTexture.name=Y.name+".shadowMapDepth",Z.map.depthTexture.format=gi,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=tn,Z.map.depthTexture.magFilter=tn}else Y.isPointLight?(Z.map=new na(s.x),Z.map.depthTexture=new Ir(s.x,Yn)):(Z.map=new Tn(s.x,s.y),Z.map.depthTexture=new _i(s.x,s.y,Yn)),Z.map.depthTexture.name=Y.name+".shadowMap",Z.map.depthTexture.format=gi,this.type===as?(Z.map.depthTexture.compareFunction=W?Tc:wc,Z.map.depthTexture.minFilter=gn,Z.map.depthTexture.magFilter=gn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=tn,Z.map.depthTexture.magFilter=tn);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let L=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Y.isPointLight!==!0&&Z.updateMatrices(Y,E);let te=(Z.camera.layers.mask&4294967294)!==0?Z.camera.layers:E.layers;for(let Ie=0;Ie<L;Ie++){let de=Z.getCamera(Ie);if(Y.isPointLight){let X=Z.camera,j=Z.matrix,ge=Y.distance||X.far;ge!==X.far&&(X.far=ge,X.updateProjectionMatrix()),ea.setFromMatrixPosition(Y.matrixWorld),X.position.copy(ea),Hc.copy(X.position),Hc.add(R_[Ie]),X.up.copy(C_[Ie]),X.lookAt(Hc),X.updateMatrixWorld(),j.makeTranslation(-ea.x,-ea.y,-ea.z),xd.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(xd,X.coordinateSystem,X.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(Z.map),i.clear());let X=Z.getViewport(Ie);a.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),H.viewport(a)}n=Z.getFrustum(Ie),M(_,E,de,Y,te,this.type)}Z.isPointLightShadow!==!0&&this.type===$s&&b(Z,E),Z.needsUpdate=!1}x=this.type,g.needsUpdate=!1,i.setRenderTarget(B,P,N)};function b(T,_){let E=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Tn(s.x,s.y,{format:zi,type:Zn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,E,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,E,p,y,null)}function w(T,_,E,B){let P=null,N=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)P=N;else if(P=E.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let H=P.uuid,F=_.uuid,D=c[H];D===void 0&&(D={},c[H]=D);let k=D[F];k===void 0&&(k=P.clone(),D[F]=k,_.addEventListener("dispose",R)),P=k}if(P.visible=_.visible,P.wireframe=_.wireframe,B===$s?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:d[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=i.properties.get(P);H.light=E}return P}function M(T,_,E,B,P,N){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===$s)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let D=e.update(T),k=T.material;if(Array.isArray(k)){let Y=D.groups;for(let Z=0,q=Y.length;Z<q;Z++){let W=Y[Z],L=k[W.materialIndex];if(L&&L.visible){let te=w(T,L,B,N);T.onBeforeShadow(i,T,_,E,D,te,W),i.renderBufferDirect(E,null,D,te,T,W),T.onAfterShadow(i,T,_,E,D,te,W)}}}else if(k.visible){let Y=w(T,k,B,N);T.onBeforeShadow(i,T,_,E,D,Y,null),i.renderBufferDirect(E,null,D,Y,T,null),T.onAfterShadow(i,T,_,E,D,Y,null)}}let F=T.children;for(let D=0,k=F.length;D<k;D++)M(F[D],_,E,B,P,N)}function R(T){T.target.removeEventListener("dispose",R);for(let E in c){let B=c[E],P=T.target.uuid;P in B&&(B[P].dispose(),delete B[P])}}}function I_(i,e){function t(){let O=!1,ae=new Nt,Q=null,Ae=new Nt(0,0,0,0);return{setMask:function(we){Q!==we&&!O&&(i.colorMask(we,we,we,we),Q=we)},setLocked:function(we){O=we},setClear:function(we,Pe,Ze,ct,Me){Me===!0&&(we*=ct,Pe*=ct,Ze*=ct),ae.set(we,Pe,Ze,ct),Ae.equals(ae)===!1&&(i.clearColor(we,Pe,Ze,ct),Ae.copy(ae))},reset:function(){O=!1,Q=null,Ae.set(-1,0,0,0)}}}function n(){let O=!1,ae=!1,Q=null,Ae=null,we=null;return{setReversed:function(Pe){if(ae!==Pe){let Ze=e.get("EXT_clip_control");Pe?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),ae=Pe;let ct=we;we=null,this.setClear(ct)}},getReversed:function(){return ae},setTest:function(Pe){Pe?Se(i.DEPTH_TEST):Ve(i.DEPTH_TEST)},setMask:function(Pe){Q!==Pe&&!O&&(i.depthMask(Pe),Q=Pe)},setFunc:function(Pe){if(ae&&(Pe=Hu[Pe]),Ae!==Pe){switch(Pe){case ka:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case Ha:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=Pe}},setLocked:function(Pe){O=Pe},setClear:function(Pe){we!==Pe&&(we=Pe,ae&&(Pe=1-Pe),i.clearDepth(Pe))},reset:function(){O=!1,Q=null,Ae=null,we=null,ae=!1}}}function s(){let O=!1,ae=null,Q=null,Ae=null,we=null,Pe=null,Ze=null,ct=null,Me=null;return{setTest:function(qe){O||(qe?Se(i.STENCIL_TEST):Ve(i.STENCIL_TEST))},setMask:function(qe){ae!==qe&&!O&&(i.stencilMask(qe),ae=qe)},setFunc:function(qe,st,Be){(Q!==qe||Ae!==st||we!==Be)&&(i.stencilFunc(qe,st,Be),Q=qe,Ae=st,we=Be)},setOp:function(qe,st,Be){(Pe!==qe||Ze!==st||ct!==Be)&&(i.stencilOp(qe,st,Be),Pe=qe,Ze=st,ct=Be)},setLocked:function(qe){O=qe},setClear:function(qe){Me!==qe&&(i.clearStencil(qe),Me=qe)},reset:function(){O=!1,ae=null,Q=null,Ae=null,we=null,Pe=null,Ze=null,ct=null,Me=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],y=null,g=!1,x=null,b=null,w=null,M=null,R=null,T=null,_=null,E=new ut(0,0,0),B=0,P=!1,N=null,H=null,F=null,D=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,q=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),Z=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Z=q>=2);let L=null,te={},Ie=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),X=new Nt().fromArray(Ie),j=new Nt().fromArray(de);function ge(O,ae,Q,Ae){let we=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(O,Pe),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<Q;Ze++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(ae+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Pe}let be={};be[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),a.setFunc(Ds),ze(!1),Fe(ac),Se(i.CULL_FACE),Re(os);function Se(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function Ve(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function dt(O,ae){return f[O]!==ae?(i.bindFramebuffer(O,ae),f[O]=ae,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ae),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function Xe(O,ae){let Q=m,Ae=!1;if(O){Q=p.get(ae),Q===void 0&&(Q=[],p.set(ae,Q));let we=O.textures;if(Q.length!==we.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Pe=0,Ze=we.length;Pe<Ze;Pe++)Q[Pe]=i.COLOR_ATTACHMENT0+Pe;Q.length=we.length,Ae=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(Q)}function Ye(O){return y!==O?(i.useProgram(O),y=O,!0):!1}let at={[ls]:i.FUNC_ADD,[lu]:i.FUNC_SUBTRACT,[cu]:i.FUNC_REVERSE_SUBTRACT};at[hu]=i.MIN,at[uu]=i.MAX;let pe={[du]:i.ZERO,[fu]:i.ONE,[pu]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[vu]:i.SRC_ALPHA_SATURATE,[_u]:i.DST_COLOR,[gu]:i.DST_ALPHA,[mu]:i.ONE_MINUS_SRC_COLOR,[uc]:i.ONE_MINUS_SRC_ALPHA,[yu]:i.ONE_MINUS_DST_COLOR,[xu]:i.ONE_MINUS_DST_ALPHA,[Mu]:i.CONSTANT_COLOR,[bu]:i.ONE_MINUS_CONSTANT_COLOR,[Su]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function Re(O,ae,Q,Ae,we,Pe,Ze,ct,Me,qe){if(O===os){g===!0&&(Ve(i.BLEND),g=!1);return}if(g===!1&&(Se(i.BLEND),g=!0),O!==ou){if(O!==x||qe!==P){if((b!==ls||R!==ls)&&(i.blendEquation(i.FUNC_ADD),b=ls,R=ls),qe)switch(O){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",O);break}else switch(O){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",O);break}w=null,M=null,T=null,_=null,E.set(0,0,0),B=0,x=O,P=qe}return}we=we||ae,Pe=Pe||Q,Ze=Ze||Ae,(ae!==b||we!==R)&&(i.blendEquationSeparate(at[ae],at[we]),b=ae,R=we),(Q!==w||Ae!==M||Pe!==T||Ze!==_)&&(i.blendFuncSeparate(pe[Q],pe[Ae],pe[Pe],pe[Ze]),w=Q,M=Ae,T=Pe,_=Ze),(ct.equals(E)===!1||Me!==B)&&(i.blendColor(ct.r,ct.g,ct.b,Me),E.copy(ct),B=Me),x=O,P=!1}function De(O,ae){O.side===un?Ve(i.CULL_FACE):Se(i.CULL_FACE);let Q=O.side===$t;ae&&(Q=!Q),ze(Q),O.blending===Ks&&O.transparent===!1?Re(os):Re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Ae=O.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ue(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(O){N!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),N=O)}function Fe(O){O!==ru?(Se(i.CULL_FACE),O!==H&&(O===ac?i.cullFace(i.BACK):O===au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ve(i.CULL_FACE),H=O}function We(O){O!==F&&(Z&&i.lineWidth(O),F=O)}function Ue(O,ae,Q){O?(Se(i.POLYGON_OFFSET_FILL),(D!==ae||k!==Q)&&(D=ae,k=Q,a.getReversed()&&(ae=-ae,Q=-Q),i.polygonOffset(ae,Q))):Ve(i.POLYGON_OFFSET_FILL)}function tt(O){O?Se(i.SCISSOR_TEST):Ve(i.SCISSOR_TEST)}function lt(O){O===void 0&&(O=i.TEXTURE0+Y-1),L!==O&&(i.activeTexture(O),L=O)}function mt(O,ae,Q){Q===void 0&&(L===null?Q=i.TEXTURE0+Y-1:Q=L);let Ae=te[Q];Ae===void 0&&(Ae={type:void 0,texture:void 0},te[Q]=Ae),(Ae.type!==O||Ae.texture!==ae)&&(L!==Q&&(i.activeTexture(Q),L=Q),i.bindTexture(O,ae||be[O]),Ae.type=O,Ae.texture=ae)}function z(){let O=te[L];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function oe(){try{i.compressedTexImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function fe(){try{i.compressedTexImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Ee(){try{i.texSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function ee(){try{i.texSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function Ce(){try{i.texStorage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function I(){try{i.texStorage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function S(){try{i.texImage2D(...arguments)}catch(O){ot("WebGLState:",O)}}function $(){try{i.texImage3D(...arguments)}catch(O){ot("WebGLState:",O)}}function xe(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function he(O,ae){d[O]!==ae&&(i.pixelStorei(O,ae),d[O]=ae)}function _e(O){X.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),X.copy(O))}function Te(O){j.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function ie(O,ae){let Q=c.get(ae);Q===void 0&&(Q=new WeakMap,c.set(ae,Q));let Ae=Q.get(O);Ae===void 0&&(Ae=i.getUniformBlockIndex(ae,O.name),i.uniformBlockBinding(ae,Ae,Ae),Q.set(O,Ae))}function ue(O,ae,Q){let we=c.get(ae).get(O);l[we]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,we,Q),l[we]=Q)}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},L=null,te={},f={},l={},p=new WeakMap,m=[],y=null,g=!1,x=null,b=null,w=null,M=null,R=null,T=null,_=null,E=new ut(0,0,0),B=0,P=!1,N=null,H=null,F=null,D=null,k=null,X.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:Ve,bindFramebuffer:dt,drawBuffers:Xe,useProgram:Ye,setBlending:Re,setMaterial:De,setFlipSided:ze,setCullFace:Fe,setLineWidth:We,setPolygonOffset:Ue,setScissorTest:tt,activeTexture:lt,bindTexture:mt,unbindTexture:z,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:S,texImage3D:$,pixelStorei:he,getParameter:xe,updateUBOMapping:ie,uniformBlockBinding:ue,texStorage2D:Ce,texStorage3D:I,texSubImage2D:Ee,texSubImage3D:ee,compressedTexSubImage2D:it,compressedTexSubImage3D:Le,scissor:_e,viewport:Te,reset:ve}}function D_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,y=new FinalizationRegistry(I=>m.delete(I)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return g?new OffscreenCanvas(I,S):Sr("canvas")}function b(I,S,$){let xe=1,he=Ce(I);if((he.width>$||he.height>$)&&(xe=$/Math.max(he.width,he.height)),xe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let _e=Math.floor(xe*he.width),Te=Math.floor(xe*he.height);f===void 0&&(f=x(_e,Te));let ie=S?x(_e,Te):f;return ie.width=_e,ie.height=Te,ie.getContext("2d").drawImage(I,0,0,_e,Te),rt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+_e+"x"+Te+")."),ie}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function w(I){return I.generateMipmaps}function M(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(I,S,$,xe,he,_e=!1){if(I!==null){if(i[I]!==void 0)return i[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Te;xe&&(Te=e.get("EXT_texture_norm16"),Te||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=S;if(S===i.RED&&($===i.FLOAT&&(ie=i.R32F),$===i.HALF_FLOAT&&(ie=i.R16F),$===i.UNSIGNED_BYTE&&(ie=i.R8),$===i.UNSIGNED_SHORT&&Te&&(ie=Te.R16_EXT),$===i.SHORT&&Te&&(ie=Te.R16_SNORM_EXT)),S===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.R8UI),$===i.UNSIGNED_SHORT&&(ie=i.R16UI),$===i.UNSIGNED_INT&&(ie=i.R32UI),$===i.BYTE&&(ie=i.R8I),$===i.SHORT&&(ie=i.R16I),$===i.INT&&(ie=i.R32I)),S===i.RG&&($===i.FLOAT&&(ie=i.RG32F),$===i.HALF_FLOAT&&(ie=i.RG16F),$===i.UNSIGNED_BYTE&&(ie=i.RG8),$===i.UNSIGNED_SHORT&&Te&&(ie=Te.RG16_EXT),$===i.SHORT&&Te&&(ie=Te.RG16_SNORM_EXT)),S===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RG8UI),$===i.UNSIGNED_SHORT&&(ie=i.RG16UI),$===i.UNSIGNED_INT&&(ie=i.RG32UI),$===i.BYTE&&(ie=i.RG8I),$===i.SHORT&&(ie=i.RG16I),$===i.INT&&(ie=i.RG32I)),S===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),$===i.UNSIGNED_INT&&(ie=i.RGB32UI),$===i.BYTE&&(ie=i.RGB8I),$===i.SHORT&&(ie=i.RGB16I),$===i.INT&&(ie=i.RGB32I)),S===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),$===i.UNSIGNED_INT&&(ie=i.RGBA32UI),$===i.BYTE&&(ie=i.RGBA8I),$===i.SHORT&&(ie=i.RGBA16I),$===i.INT&&(ie=i.RGBA32I)),S===i.RGB&&($===i.UNSIGNED_SHORT&&Te&&(ie=Te.RGB16_EXT),$===i.SHORT&&Te&&(ie=Te.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),S===i.RGBA){let ue=_e?br:bt.getTransfer(he);$===i.FLOAT&&(ie=i.RGBA32F),$===i.HALF_FLOAT&&(ie=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ie=ue===Rt?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&Te&&(ie=Te.RGBA16_EXT),$===i.SHORT&&Te&&(ie=Te.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(I,S){let $;return I?S===null||S===Yn||S===hs?$=i.DEPTH24_STENCIL8:S===On?$=i.DEPTH32F_STENCIL8:S===js&&($=i.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yn||S===hs?$=i.DEPTH_COMPONENT24:S===On?$=i.DEPTH_COMPONENT32F:S===js&&($=i.DEPTH_COMPONENT16),$}function E(I,S){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function B(I){let S=new WeakRef(I);n.get(I).__ref=S,m.add(S),y.register(I,S,S)}function P(I){let S=n.get(I).__ref;S!==void 0&&(m.delete(S),y.unregister(S))}function N(I){F(I.target)}function H(I){D(I.target)}function F(I){I.removeEventListener("dispose",N),P(I),Y(I),I.isVideoTexture&&u.delete(I),I.isHTMLTexture&&d.delete(I)}function D(I){I.removeEventListener("dispose",H),P(I),q(I)}function k(){for(let I of m){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?D(S):F(S))}m.clear(),d.clear()}function Y(I){let S=n.get(I);if(S.__webglInit===void 0)return;let $=I.source,xe=p.get($);if(xe){let he=xe[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&Z(I),Object.keys(xe).length===0&&p.delete($)}n.remove(I)}function Z(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let $=I.source,xe=p.get($);delete xe[S.__cacheKey],a.memory.textures--}function q(I){let S=n.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let $=I.depthTexture;if($&&$.renderTarget===I&&F($),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(S.__webglFramebuffer[he]))for(let _e=0;_e<S.__webglFramebuffer[he].length;_e++)i.deleteFramebuffer(S.__webglFramebuffer[he][_e]);else i.deleteFramebuffer(S.__webglFramebuffer[he]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[he])}else{if(Array.isArray(S.__webglFramebuffer))for(let he=0;he<S.__webglFramebuffer.length;he++)i.deleteFramebuffer(S.__webglFramebuffer[he]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let he=0;he<S.__webglColorRenderbuffer.length;he++)S.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[he]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let xe=I.textures;for(let he=0,_e=xe.length;he<_e;he++){let Te=n.get(xe[he]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(xe[he])}n.remove(I)}let W=0;function L(){W=0}function te(){return W}function Ie(I){W=I}function de(){let I=W;return I>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,I}function X(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function j(I,S){let $=n.get(I);if(I.isVideoTexture&&it(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&$.__version!==I.version){let xe=I.image;if(xe===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{De($,I,S);return}}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+S)}function ge(I,S){let $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){De($,I,S);return}else I.isExternalTexture&&($.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+S)}function be(I,S){let $=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&$.__version!==I.version){De($,I,S);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+S)}function Se(I,S){let $=n.get(I);if(I.version>0&&$.__version!==I.version){ze($,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+S)}let Ve={[es]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},dt={[tn]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Xe={[Iu]:i.NEVER,[Ac]:i.ALWAYS,[Du]:i.LESS,[wc]:i.LEQUAL,[Lu]:i.EQUAL,[Tc]:i.GEQUAL,[Nu]:i.GREATER,[Uu]:i.NOTEQUAL};function Ye(I,S){if(S.type===On&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===Mo||S.magFilter===qr||S.magFilter===yi||S.minFilter===gn||S.minFilter===Mo||S.minFilter===qr||S.minFilter===yi)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Ve[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Ve[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Ve[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,dt[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,dt[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===tn||S.minFilter!==qr&&S.minFilter!==yi||S.type===On&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function at(I,S){let $=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",N),B(S));let xe=S.source,he=p.get(xe);he===void 0&&(he={},p.set(xe,he));let _e=X(S);if(_e!==I.__cacheKey){he[_e]===void 0&&(he[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,$=!0),he[_e].usedTimes++;let Te=he[I.__cacheKey];Te!==void 0&&(he[I.__cacheKey].usedTimes--,Te.usedTimes===0&&Z(S)),I.__cacheKey=_e,I.__webglTexture=he[_e].texture}return $}function pe(I,S,$){return Math.floor(Math.floor(I/$)/S)}function Re(I,S,$,xe){let _e=I.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,$,xe,S.data);else{_e.sort((O,ae)=>O.start-ae.start);let Te=0;for(let O=1;O<_e.length;O++){let ae=_e[Te],Q=_e[O],Ae=ae.start+ae.count,we=pe(Q.start,S.width,4),Pe=pe(ae.start,S.width,4);Q.start<=Ae+1&&we===Pe&&pe(Q.start+Q.count-1,S.width,4)===we?ae.count=Math.max(ae.count,Q.start+Q.count-ae.start):(++Te,_e[Te]=Q)}_e.length=Te+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),ue=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let O=0,ae=_e.length;O<ae;O++){let Q=_e[O],Ae=Math.floor(Q.start/4),we=Math.ceil(Q.count/4),Pe=Ae%S.width,Ze=Math.floor(Ae/S.width),ct=we,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ze),t.texSubImage2D(i.TEXTURE_2D,0,Pe,Ze,ct,Me,$,xe,S.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function De(I,S,$){let xe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(xe=i.TEXTURE_3D);let he=at(I,S),_e=S.source;t.bindTexture(xe,I.__webglTexture,i.TEXTURE0+$);let Te=n.get(_e);if(_e.version!==Te.__version||he===!0){if(t.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let Me=bt.getPrimaries(bt.workingColorSpace),qe=S.colorSpace===Mi?null:bt.getPrimaries(S.colorSpace),st=S.colorSpace===Mi||Me===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ue=b(S.image,!1,s.maxTextureSize);ue=Le(S,ue);let ve=r.convert(S.format,S.colorSpace),O=r.convert(S.type),ae=T(S.internalFormat,ve,O,S.normalized,S.colorSpace,S.isVideoTexture);Ye(xe,S);let Q,Ae=S.mipmaps,we=S.isVideoTexture!==!0,Pe=Te.__version===void 0||he===!0,Ze=_e.dataReady,ct=E(S,ue);if(S.isDepthTexture)ae=_(S.format===vi,S.type),Pe&&(we?t.texStorage2D(i.TEXTURE_2D,1,ae,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ae,ue.width,ue.height,0,ve,O,null));else if(S.isDataTexture)if(Ae.length>0){we&&Pe&&t.texStorage2D(i.TEXTURE_2D,ct,ae,Ae[0].width,Ae[0].height);for(let Me=0,qe=Ae.length;Me<qe;Me++)Q=Ae[Me],we?Ze&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Q.width,Q.height,ve,O,Q.data):t.texImage2D(i.TEXTURE_2D,Me,ae,Q.width,Q.height,0,ve,O,Q.data);S.generateMipmaps=!1}else we?(Pe&&t.texStorage2D(i.TEXTURE_2D,ct,ae,ue.width,ue.height),Ze&&Re(S,ue,ve,O)):t.texImage2D(i.TEXTURE_2D,0,ae,ue.width,ue.height,0,ve,O,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){we&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ae,Ae[0].width,Ae[0].height,ue.depth);for(let Me=0,qe=Ae.length;Me<qe;Me++)if(Q=Ae[Me],S.format!==$n)if(ve!==null)if(we){if(Ze)if(S.layerUpdates.size>0){let st=kc(Q.width,Q.height,S.format,S.type);for(let Be of S.layerUpdates){let Et=Q.data.subarray(Be*st/Q.data.BYTES_PER_ELEMENT,(Be+1)*st/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,Be,Q.width,Q.height,1,ve,Et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Q.width,Q.height,ue.depth,ve,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,ae,Q.width,Q.height,ue.depth,0,Q.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Ze&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,Q.width,Q.height,ue.depth,ve,O,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,ae,Q.width,Q.height,ue.depth,0,ve,O,Q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{we&&Pe&&t.texStorage2D(i.TEXTURE_2D,ct,ae,Ae[0].width,Ae[0].height);for(let Me=0,qe=Ae.length;Me<qe;Me++)Q=Ae[Me],S.format!==$n?ve!==null?we?Ze&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,Q.width,Q.height,ve,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,ae,Q.width,Q.height,0,Q.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Ze&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Q.width,Q.height,ve,O,Q.data):t.texImage2D(i.TEXTURE_2D,Me,ae,Q.width,Q.height,0,ve,O,Q.data)}else if(S.isDataArrayTexture)if(we){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,ae,ue.width,ue.height,ue.depth),Ze)if(S.layerUpdates.size>0){let Me=kc(ue.width,ue.height,S.format,S.type);for(let qe of S.layerUpdates){let st=ue.data.subarray(qe*Me/ue.data.BYTES_PER_ELEMENT,(qe+1)*Me/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,ue.width,ue.height,1,ve,O,st)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,O,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,ue.width,ue.height,ue.depth,0,ve,O,ue.data);else if(S.isData3DTexture)we?(Pe&&t.texStorage3D(i.TEXTURE_3D,ct,ae,ue.width,ue.height,ue.depth),Ze&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,O,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ae,ue.width,ue.height,ue.depth,0,ve,O,ue.data);else if(S.isFramebufferTexture){if(Pe)if(we)t.texStorage2D(i.TEXTURE_2D,ct,ae,ue.width,ue.height);else{let Me=ue.width,qe=ue.height;for(let st=0;st<ct;st++)t.texImage2D(i.TEXTURE_2D,st,ae,Me,qe,0,ve,O,null),Me>>=1,qe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ue.parentNode!==Me){Me.appendChild(ue),d.add(S),Me.onpaint=qe=>{let st=qe.changedElements;for(let Be of d)st.includes(Be.image)&&(Be.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ue);else{let st=i.RGBA,Be=i.RGBA,Et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,st,Be,Et,ue)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(we&&Pe){let Me=Ce(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ct,ae,Me.width,Me.height)}for(let Me=0,qe=Ae.length;Me<qe;Me++)Q=Ae[Me],we?Ze&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,ve,O,Q):t.texImage2D(i.TEXTURE_2D,Me,ae,ve,O,Q);S.generateMipmaps=!1}else if(we){if(Pe){let Me=Ce(ue);t.texStorage2D(i.TEXTURE_2D,ct,ae,Me.width,Me.height)}Ze&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,O,ue)}else t.texImage2D(i.TEXTURE_2D,0,ae,ve,O,ue);w(S)&&S.mipmapsAutoUpdate===!0&&M(xe),Te.__version=_e.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function ze(I,S,$){if(S.image.length!==6)return;let xe=at(I,S),he=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+$);let _e=n.get(he);if(he.version!==_e.__version||xe===!0){t.activeTexture(i.TEXTURE0+$);let Te=bt.getPrimaries(bt.workingColorSpace),ie=S.colorSpace===Mi?null:bt.getPrimaries(S.colorSpace),ue=S.colorSpace===Mi||Te===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ve=S.isCompressedTexture||S.image[0].isCompressedTexture,O=S.image[0]&&S.image[0].isDataTexture,ae=[];for(let Be=0;Be<6;Be++)!ve&&!O?ae[Be]=b(S.image[Be],!0,s.maxCubemapSize):ae[Be]=O?S.image[Be].image:S.image[Be],ae[Be]=Le(S,ae[Be]);let Q=ae[0],Ae=r.convert(S.format,S.colorSpace),we=r.convert(S.type),Pe=T(S.internalFormat,Ae,we,S.normalized,S.colorSpace),Ze=S.isVideoTexture!==!0,ct=_e.__version===void 0||xe===!0,Me=he.dataReady,qe=E(S,Q);Ye(i.TEXTURE_CUBE_MAP,S);let st;if(S.isDepthTexture){if(Pe=_(S.format===vi,S.type),ct)if(Ze)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Pe,Q.width,Q.height);else for(let Be=0;Be<6;Be++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Pe,Q.width,Q.height,0,Ae,we,null)}else if(ve){Ze&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Pe,Q.width,Q.height);for(let Be=0;Be<6;Be++){st=ae[Be].mipmaps;for(let Et=0;Et<st.length;Et++){let Gt=st[Et];S.format!==$n?Ae!==null?Ze?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Et,0,0,Gt.width,Gt.height,Ae,Gt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Et,Pe,Gt.width,Gt.height,0,Gt.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Et,0,0,Gt.width,Gt.height,Ae,we,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Et,Pe,Gt.width,Gt.height,0,Ae,we,Gt.data)}}}else{if(st=S.mipmaps,Ze&&ct){st.length>0&&qe++;let Be=Ce(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Pe,Be.width,Be.height)}for(let Be=0;Be<6;Be++)if(O){Ze?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,ae[Be].width,ae[Be].height,Ae,we,ae[Be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Pe,ae[Be].width,ae[Be].height,0,Ae,we,ae[Be].data);for(let Et=0;Et<st.length;Et++){let pn=st[Et].image[Be].image;Ze?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Et+1,0,0,pn.width,pn.height,Ae,we,pn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Et+1,Pe,pn.width,pn.height,0,Ae,we,pn.data)}}else{Ze?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,Ae,we,ae[Be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Pe,Ae,we,ae[Be]);for(let Et=0;Et<st.length;Et++){let Gt=st[Et];Ze?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Et+1,0,0,Ae,we,Gt.image[Be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Et+1,Pe,Ae,we,Gt.image[Be])}}}w(S)&&S.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),_e.__version=he.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Fe(I,S,$,xe,he,_e){let Te=r.convert($.format,$.colorSpace),ie=r.convert($.type),ue=T($.internalFormat,Te,ie,$.normalized,$.colorSpace),ve=n.get(S),O=n.get($);if(O.__renderTarget=S,!ve.__hasExternalTextures){let ae=Math.max(1,S.width>>_e),Q=Math.max(1,S.height>>_e);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,_e,ue,ae,Q,S.depth,0,Te,ie,null):t.texImage2D(he,_e,ue,ae,Q,0,Te,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),ee(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,he,O.__webglTexture,0,Ee(S)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,he,O.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(I,S,$){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let xe=S.depthTexture,he=xe&&xe.isDepthTexture?xe.type:null,_e=_(S.stencilBuffer,he),Te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ee(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(S),_e,S.width,S.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(S),_e,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_e,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,I)}else{let xe=S.textures;for(let he=0;he<xe.length;he++){let _e=xe[he],Te=r.convert(_e.format,_e.colorSpace),ie=r.convert(_e.type),ue=T(_e.internalFormat,Te,ie,_e.normalized,_e.colorSpace);ee(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(S),ue,S.width,S.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(S),ue,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ue,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(I,S,$){let xe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=n.get(S.depthTexture);he.__renderTarget=S;let _e=xe?S.depthTexture.image[0]:S.depthTexture.image;(!he.__webglTexture||_e.width!==S.width||_e.height!==S.height)&&(_e.width=S.width,_e.height=S.height,S.depthTexture.needsUpdate=!0),xe?Se(S.depthTexture,0):j(S.depthTexture,0);let Te=he.__webglTexture,ie=Ee(S),ue=xe?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,ve=S.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===gi)ee(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,Te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,Te,0);else if(S.depthTexture.format===vi)ee(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,Te,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(I){let S=n.get(I),$=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let xe=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),xe){let he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,xe.removeEventListener("dispose",he)};xe.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=xe}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if($)for(let xe=0;xe<6;xe++)Ue(S.__webglFramebuffer[xe],I,xe);else I.texture.mipmaps.length>0?Ue(S.__webglFramebuffer[0],I,0):Ue(S.__webglFramebuffer,I,0);else if($){S.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[xe]),S.__webglDepthbuffer[xe]===void 0)S.__webglDepthbuffer[xe]=i.createRenderbuffer(),We(S.__webglDepthbuffer[xe],I,!1);else{let he=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,_e)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),We(S.__webglDepthbuffer,I,!1);else{let he=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(I,S,$){let xe=n.get(I);S!==void 0&&Fe(xe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&tt(I)}function mt(I){let S=I.texture,$=n.get(I),xe=n.get(S);I.addEventListener("dispose",H),B(I);let he=I.textures,_e=I.isWebGLCubeRenderTarget===!0,Te=he.length>1;if(Te||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=S.version,a.memory.textures++),_e){$.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps.length>0){$.__webglFramebuffer[ie]=[];for(let ue=0;ue<S.mipmaps.length;ue++)$.__webglFramebuffer[ie][ue]=i.createFramebuffer()}else $.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(S.mipmaps.length>0){$.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)$.__webglFramebuffer[ie]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ie=0,ue=he.length;ie<ue;ie++){let ve=n.get(he[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&ee(I)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ie=0;ie<he.length;ie++){let ue=he[ie];$.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[ie]);let ve=r.convert(ue.format,ue.colorSpace),O=r.convert(ue.type),ae=T(ue.internalFormat,ve,O,ue.normalized,ue.colorSpace,I.isXRRenderTarget===!0),Q=Ee(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ae,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,$.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),We($.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Fe($.__webglFramebuffer[ie][ue],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ue);else Fe($.__webglFramebuffer[ie],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);w(S)?M(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let ie=0,ue=he.length;ie<ue;ie++){let ve=he[ie],O=n.get(ve),ae=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ae=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,O.__webglTexture),Ye(ae,ve),Fe($.__webglFramebuffer,I,ve,i.COLOR_ATTACHMENT0+ie,ae,0),w(ve)&&M(ae)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ie=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,xe.__webglTexture),Ye(ie,S),S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Fe($.__webglFramebuffer[ue],I,S,i.COLOR_ATTACHMENT0,ie,ue);else Fe($.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,ie,0);w(S)?M(ie):S.mipmaps.length>0&&i.texParameteri(ie,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&tt(I)}function z(I){let S=I.textures;for(let $=0,xe=S.length;$<xe;$++){let he=S[$];if(w(he)&&he.mipmapsAutoUpdate===!0){let _e=R(I),Te=n.get(he).__webglTexture;t.bindTexture(_e,Te),M(_e),t.unbindTexture()}}}let oe=[];function fe(I){if(I.samples>0){if(ee(I)===!1){let S=I.textures,$=I.width,xe=I.height,he=i.COLOR_BUFFER_BIT,_e=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(I),ie=S.length>1;if(ie)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let O=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,$,xe,0,0,$,xe,he,i.NEAREST),l===!0&&(oe.length=0,oe.push(i.COLOR_ATTACHMENT0+ve),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&oe.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Te.__webglColorRenderbuffer[ve]);let O=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ee(I){return Math.min(s.maxSamples,I.samples)}function ee(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function it(I){let S=a.render.frame;u.get(I)!==S&&(u.set(I,S),I.update())}function Le(I,S){let $=I.colorSpace,xe=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||$!==Mr&&$!==Mi&&(bt.getTransfer($)===Rt?(xe!==$n||he!==vn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",$)),S}function Ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=de,this.resetTextureUnits=L,this.getTextureUnits=te,this.setTextureUnits=Ie,this.setTexture2D=j,this.setTexture2DArray=ge,this.setTexture3D=be,this.setTextureCube=Se,this.rebindTextures=lt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=ee,this.dispose=k}function L_(i,e){function t(n,s=Mi){let r,a=bt.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===So)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Mc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yc)return i.BYTE;if(n===vc)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===bo)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===$n)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===wo)return i.RED;if(n===To)return i.RED_INTEGER;if(n===zi)return i.RG;if(n===Ao)return i.RG_INTEGER;if(n===Ro)return i.RGBA_INTEGER;if(n===Yr||n===Zr||n===$r||n===Kr)if(a===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Io||n===Do)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===No||n===Uo||n===Fo||n===Oo||n===Jr||n===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===No)return a===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fo)return r.COMPRESSED_R11_EAC;if(n===Oo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Jr)return r.COMPRESSED_RG11_EAC;if(n===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bo||n===Ho||n===zo||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===$o||n===Ko||n===Jo||n===jo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ho)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$o)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return a===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===el||n===tl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Qo)return a===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nl||n===il||n===jr||n===sl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
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

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Dr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ni({vertexShader:N_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zc=class extends Vn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,m=null,y=typeof XRWebGLBinding<"u",g=new Yc,x={},b=t.getContextAttributes(),w=null,M=null,R=[],T=[],_=new me,E=null,B=null,P=new kt;P.viewport=new Nt;let N=new kt;N.viewport=new Nt;let H=[P,N],F=new go,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let j=R[X];return j===void 0&&(j=new ks,R[X]=j),j.getTargetRaySpace()},this.getControllerGrip=function(X){let j=R[X];return j===void 0&&(j=new ks,R[X]=j),j.getGripSpace()},this.getHand=function(X){let j=R[X];return j===void 0&&(j=new ks,R[X]=j),j.getHandSpace()};function Y(X){let j=T.indexOf(X.inputSource);if(j===-1)return;let ge=R[j];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||a),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",q);for(let X=0;X<R.length;X++){let j=T[X];j!==null&&(T[X]=null,R[X].disconnect(j))}D=null,k=null,g.reset();for(let X in x)delete x[X];if(e.setRenderTarget(w),p=null,f=null,d=null,s=null,M=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),B!==null){let X=B.camera;X.fov=B.fov,X.zoom=B.zoom,X.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,be=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=b.stencil?vi:gi,be=b.stencil?hs:Yn);let Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Tn(f.textureWidth,f.textureHeight,{format:$n,type:vn,depthTexture:new _i(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Tn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(X){for(let j=0;j<X.removed.length;j++){let ge=X.removed[j],be=T.indexOf(ge);be>=0&&(T[be]=null,R[be].disconnect(ge))}for(let j=0;j<X.added.length;j++){let ge=X.added[j],be=T.indexOf(ge);if(be===-1){for(let Ve=0;Ve<R.length;Ve++)if(Ve>=T.length){T.push(ge),be=Ve;break}else if(T[Ve]===null){T[Ve]=ge,be=Ve;break}if(be===-1)break}let Se=R[be];Se&&Se.connect(ge)}}function W(X,j){j===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(j.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let j=X.near,ge=X.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),F.near=N.near=P.near=j,F.far=N.far=P.far=ge,(D!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,k=F.far),F.layers.mask=X.layers.mask|6,P.layers.mask=F.layers.mask&-5,N.layers.mask=F.layers.mask&-3;let be=X.parent,Se=F.cameras;W(F,be);for(let Ve=0;Ve<Se.length;Ve++)W(Se[Ve],be);F.projectionMatrix.copy(P.projectionMatrix),F.projectionMatrixInverse.copy(P.projectionMatrixInverse),B===null&&X.isPerspectiveCamera&&(B={camera:X,fov:X.fov,zoom:X.zoom}),L(X,F,be)};function L(X,j,ge){ge===null?X.matrix.copy(j.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(j.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(j.projectionMatrix),X.projectionMatrixInverse.copy(j.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Us*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(X){return x[X]};let te=null;function Ie(X,j){if(u=j.getViewerPose(c||a),m=j,u!==null){let ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let be=!1;ge.length!==F.cameras.length&&(F.cameras.length=0,be=!0);for(let Xe=0;Xe<ge.length;Xe++){let Ye=ge[Xe],at=null;if(p!==null)at=p.getViewport(Ye);else{let Re=d.getViewSubImage(f,Ye);at=Re.viewport,Xe===0&&(e.setRenderTargetTextures(M,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(M))}let pe=H[Xe];pe===void 0&&(pe=new kt,pe.layers.enable(Xe),pe.viewport=new Nt,H[Xe]=pe),pe.matrix.fromArray(Ye.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ye.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(at.x,at.y,at.width,at.height),Xe===0&&(F.matrix.copy(pe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),be===!0&&F.cameras.push(pe)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Xe=d.getDepthInformation(ge[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<ge.length;Xe++){let Ye=ge[Xe].camera;if(Ye){let at=x[Ye];at||(at=new Dr,x[Ye]=at);let pe=d.getCameraImage(Ye);at.sourceTexture=pe}}}}for(let ge=0;ge<R.length;ge++){let be=T[ge],Se=R[ge];be!==null&&Se!==void 0&&Se.update(be,j,c||a)}te&&te(X,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let de=new _d;de.setAnimationLoop(Ie),this.setAnimationLoop=function(X){te=X},this.dispose=function(){}}},F_=new Ct,Rd=new ht;Rd.set(-1,0,0,0,1,0,0,0,1);function O_(i,e){function t(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function n(g,x){x.color.getRGB(g.fogColor.value,Uc(i)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,b,w,M){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),d(g,x)):x.isMeshPhongMaterial?(r(g,x),u(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),f(g,x),x.isMeshPhysicalMaterial&&p(g,x,M)):x.isMeshMatcapMaterial?(r(g,x),m(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),y(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(a(g,x),x.isLineDashedMaterial&&o(g,x)):x.isPointsMaterial?l(g,x,b,w):x.isSpriteMaterial?c(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,t(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===$t&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,t(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===$t&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,t(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,t(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let b=e.get(x),w=b.envMap,M=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rd),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,g.aoMapTransform))}function a(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform))}function o(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,b,w){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*b,g.scale.value=w*.5,x.map&&(g.map.value=x.map,t(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function c(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function u(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function d(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function f(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function p(g,x,b){g.ior.value=x.ior,x.diffuseRoughness>0&&(g.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===$t&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,x){x.matcap&&(g.matcap.value=x.matcap)}function y(g,x){let b=e.get(x).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k_(i,e,t,n){let s={},r={};function a(b,w){let M=w.program;n.uniformBlockBinding(b,M,s[b.id])}function o(b,w){let M=s[b.id];M===void 0&&(m(b),M=l(b),s[b.id]=M,b.addEventListener("dispose",g));let R=w.program;n.updateUBOMapping(b,R);let T=e.render.frame;r[b.id]!==T&&(c(b),r[b.id]=T)}function l(b){let w=i.createBuffer(),M=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(b){let w=s[b.id],M=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,_=M.length;T<_;T++){let E=M[T];if(Array.isArray(E))for(let B=0,P=E.length;B<P;B++)u(E[B],T,B,R);else u(E,T,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,w,M,R){if(f(b,w,M,R)===!0){let T=b.__offset,_=b.value;if(Array.isArray(_)){let E=0;for(let B=0;B<_.length;B++){let P=_[B],N=y(P,!0);d(P,b.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,b.__data)}}function d(b,w,M){typeof b=="number"||typeof b=="boolean"?w[M]=b:b.isMatrix3?(w[M]=b.elements[0],w[M+1]=b.elements[1],w[M+2]=b.elements[2],w[M+3]=0,w[M+4]=b.elements[3],w[M+5]=b.elements[4],w[M+6]=b.elements[5],w[M+7]=0,w[M+8]=b.elements[6],w[M+9]=b.elements[7],w[M+10]=b.elements[8],w[M+11]=0):ArrayBuffer.isView(b)?w.set(b.subarray(0,w.length-M),M):b.toArray(w,M)}function f(b,w,M,R){let T=b.value,_=w+"_"+M;if(Array.isArray(T)){R[_]===void 0&&(R[_]=[]);let E=R[_],B=!1;for(let P=0;P<T.length;P++)p(T[P],E,P)===!0&&(B=!0);return B}return p(T,R,_)}function p(b,w,M){if(w[M]===void 0)return typeof b=="number"||typeof b=="boolean"?w[M]=b:ArrayBuffer.isView(b)?w[M]=b.slice():w[M]=b.clone(),!0;{let R=w[M];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return w[M]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function m(b){let w=b.uniforms,M=0,R=16;for(let _=0,E=w.length;_<E;_++){let B=Array.isArray(w[_])?w[_]:[w[_]];for(let P=0,N=B.length;P<N;P++){let H=B[P],F=Array.isArray(H.value)?H.value:[H.value],D=Array.isArray(w[_])||Array.isArray(H.value),k=M;for(let Z=0,q=F.length;Z<q;Z++){let W=F[Z],L=y(W,D),te=M%R,Ie=te%L.boundary,de=te+Ie;M+=Ie,de!==0&&R-de<L.storage&&(M+=R-de),Z===0&&(k=M),M+=L.storage}let Y=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new Y((M-k)/Float32Array.BYTES_PER_ELEMENT),H.__offset=k}}let T=M%R;return T>0&&(M+=R-T),b.__size=M,b.__cache={},this}function y(b,w){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=16,M.storage=48):b.isMatrix4?(M.boundary=16,M.storage=64):b.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",b),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(b){let w=b.target;w.removeEventListener("dispose",g),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function x(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:x}}var B_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ri=null;function H_(){return ri===null&&(ri=new Ar(B_,16,16,zi,Zn),ri.name="DFG_LUT",ri.minFilter=gn,ri.magFilter=gn,ri.wrapS=Ln,ri.wrapT=Ln,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}var oi=class{constructor(e={}){let{canvas:t=Ou(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=p,g=new Set([Ro,Ao,To]),x=new Set([vn,Yn,js,hs,So,Eo]),b=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,T=null,_=[],E=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,H=null,F=null,D=null,k=null;this._outputColorSpace=Yt;let Y=0,Z=0,q=null,W=-1,L=null,te=new Nt,Ie=new Nt,de=null,X=new ut(0),j=0,ge=t.width,be=t.height,Se=1,Ve=null,dt=null,Xe=new Nt(0,0,ge,be),Ye=new Nt(0,0,ge,be),at=!1,pe=new Ni,Re=new Ka,De=!1,ze=!1,Fe=new Ct,We=new G,Ue=new Nt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function mt(){return q===null?Se:1}let z=n;function oe(A,V){return t.getContext(A,V)}let fe,Ee,ee,it,Le,Ce,I,S,$,xe,he,_e,Te,ie,ue,ve,O,ae,Q,Ae,we,Pe,Ze;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Be,!1),z===null){let V="webgl2";if(z=oe(V,A),z===null)throw oe(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(A){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),ot("WebGLRenderer: "+A.message),A}function ct(){fe=new Jg(z),fe.init(),we=new L_(z,fe),Ee=new Hg(z,fe,e,we),ee=new I_(z,fe),Ee.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),F=z.createFramebuffer(),D=z.createFramebuffer(),k=z.createFramebuffer(),it=new ex(z),Le=new x_,Ce=new D_(z,fe,ee,Le,Ee,we,it),I=new Kg(P),S=new nm(z),Pe=new kg(z,S),$=new jg(z,S,it,Pe),xe=new nx(z,$,S,Pe,it),ae=new tx(z,Ee,Ce),ue=new zg(Le),he=new g_(P,I,fe,Ee,Pe,ue),_e=new O_(P,Le),Te=new y_,ie=new w_(fe),O=new Og(P,I,ee,xe,m,l),ve=new P_(P,xe,Ee),Ze=new k_(z,it,Ee,ee),Q=new Bg(z,fe,it),Ae=new Qg(z,fe,it),it.programs=he.programs,P.capabilities=Ee,P.extensions=fe,P.properties=Le,P.renderLists=Te,P.shadowMap=ve,P.state=ee,P.info=it}y!==vn&&(B=new sx(y,t.width,t.height,o,s,r));let Me=new Zc(P,z);this.xr=Me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let A=fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(A){A!==void 0&&(Se=A,this.setSize(ge,be,!1))},this.getSize=function(A){return A.set(ge,be)},this.setSize=function(A,V,re=!0){if(Me.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=A,be=V,t.width=Math.floor(A*Se),t.height=Math.floor(V*Se),re===!0&&(t.style.width=A+"px",t.style.height=V+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(ge*Se,be*Se).floor()},this.setDrawingBufferSize=function(A,V,re){ge=A,be=V,Se=re,t.width=Math.floor(A*re),t.height=Math.floor(V*re),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(y===vn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(Xe)},this.setViewport=function(A,V,re,K){A.isVector4?Xe.set(A.x,A.y,A.z,A.w):Xe.set(A,V,re,K),ee.viewport(te.copy(Xe).multiplyScalar(mt()).round())},this.getScissor=function(A){return A.copy(Ye)},this.setScissor=function(A,V,re,K){A.isVector4?Ye.set(A.x,A.y,A.z,A.w):Ye.set(A,V,re,K),ee.scissor(Ie.copy(Ye).multiplyScalar(mt()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){ee.setScissorTest(at=A)},this.setOpaqueSort=function(A){Ve=A},this.setTransparentSort=function(A){dt=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,re=!0){let K=0;if(A){let J=!1;if(q!==null){let ke=q.texture.format;J=g.has(ke)}if(J){let ke=q.texture.type,$e=x.has(ke),Oe=O.getClearColor(),Ge=O.getClearAlpha(),et=Oe.r,ft=Oe.g,vt=Oe.b;$e?(b[0]=et,b[1]=ft,b[2]=vt,b[3]=Ge,z.clearBufferuiv(z.COLOR,0,b)):(w[0]=et,w[1]=ft,w[2]=vt,w[3]=Ge,z.clearBufferiv(z.COLOR,0,w))}else K|=z.COLOR_BUFFER_BIT}V&&(K|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),H=A},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),O.dispose(),Te.dispose(),ie.dispose(),Ce.dispose(),Le.dispose(),I.dispose(),xe.dispose(),$.dispose(),Pe.dispose(),Ze.dispose(),he.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",fh),Me.removeEventListener("sessionend",ph),Yi.stop()};function qe(A){A.preventDefault(),Cc("WebGLRenderer: Context Lost."),N=!0}function st(){Cc("WebGLRenderer: Context Restored."),N=!1;let A=it.autoReset,V=ve.enabled,re=ve.autoUpdate,K=ve.needsUpdate,J=ve.type;ct(),it.autoReset=A,ve.enabled=V,ve.autoUpdate=re,ve.needsUpdate=K,ve.type=J}function Be(A){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Et(A){let V=A.target;V.removeEventListener("dispose",Et),Gt(V)}function Gt(A){pn(A),Le.remove(A)}function pn(A){let V=Le.get(A).programs;V!==void 0&&(V.forEach(function(re){he.releaseProgram(re)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,re,K,J,ke){V===null&&(V=tt);let $e=J.isMesh&&J.matrixWorld.determinantAffine()<0,Oe=Sf(A,V,re,K,J);ee.setMaterial(K,$e);let Ge=re.index,et=1;if(K.wireframe===!0){if(Ge=$.getWireframeAttribute(re),Ge===void 0)return;et=2}let ft=re.drawRange,vt=re.attributes.position,Ke=ft.start*et,Mt=(ft.start+ft.count)*et;ke!==null&&(Ke=Math.max(Ke,ke.start*et),Mt=Math.min(Mt,(ke.start+ke.count)*et)),Ge!==null?(Ke=Math.max(Ke,0),Mt=Math.min(Mt,Ge.count)):vt!=null&&(Ke=Math.max(Ke,0),Mt=Math.min(Mt,vt.count));let Xt=Mt-Ke;if(Xt<0||Xt===1/0)return;Pe.setup(J,K,Oe,re,Ge);let It,Pt=Q;if(Ge!==null&&(It=S.get(Ge),Pt=Ae,Pt.setIndex(It)),J.isMesh)K.wireframe===!0?(ee.setLineWidth(K.wireframeLinewidth*mt()),Pt.setMode(z.LINES)):Pt.setMode(z.TRIANGLES);else if(J.isLine){let on=K.linewidth;on===void 0&&(on=1),ee.setLineWidth(on*mt()),J.isLineSegments?Pt.setMode(z.LINES):J.isLineLoop?Pt.setMode(z.LINE_LOOP):Pt.setMode(z.LINE_STRIP)}else J.isPoints?Pt.setMode(z.POINTS):J.isSprite&&Pt.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(fe.get("WEBGL_multi_draw"))Pt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let on=J._multiDrawStarts,Je=J._multiDrawCounts,mn=J._multiDrawCount,wt=Ge?S.get(Ge).bytesPerElement:1,Zi=Le.get(K).currentProgram.getUniforms();for(let ln=0;ln<mn;ln++)Zi.setValue(z,"_gl_DrawID",ln),Pt.render(on[ln]/wt,Je[ln])}else if(J.isInstancedMesh)Pt.renderInstances(Ke,Xt,J.count);else if(re.isInstancedBufferGeometry){let on=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Je=Math.min(re.instanceCount,on);Pt.renderInstances(Ke,Xt,Je)}else Pt.render(Ke,Xt)};function gs(A,V,re,K){H!==null&&A.isNodeMaterial&&H.setObject(K,A),De===!0&&ue.setState(A,re,!1),A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=$t,A.needsUpdate=!0,or(A,V,K),A.side=ii,A.needsUpdate=!0,or(A,V,K),A.side=un):or(A,V,K)}this.compile=function(A,V,re=null){re===null&&(re=A),H!==null&&H.renderStart(A,V,re),T=ie.get(re),T.init(V),E.push(T),re.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),A!==re&&A.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),ze=this.localClippingEnabled,De=ue.init(this.clippingPlanes,ze),De===!0&&ue.setGlobalState(this.clippingPlanes,V),H!==null&&ve.render(T.state.shadowsArray,re,V);let K=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let ke=J.material;if(ke)if(Array.isArray(ke))for(let $e=0;$e<ke.length;$e++){let Oe=ke[$e];gs(Oe,re,V,J),K.add(Oe)}else gs(ke,re,V,J),K.add(ke)}),T=E.pop(),H!==null&&H.renderEnd(),K},this.compileAsync=function(A,V,re=null){let K=this.compile(A,V,re);return new Promise(J=>{function ke(){if(K.forEach(function($e){let Ge=Le.get($e).currentProgram;(Ge===void 0||Ge.isReady())&&K.delete($e)}),K.size===0){J(A);return}setTimeout(ke,10)}fe.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let li=null;function Mf(A){li&&li(A)}function fh(){Yi.stop()}function ph(){Yi.start()}let Yi=new _d;Yi.setAnimationLoop(Mf),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(A){li=A,Me.setAnimationLoop(A),A===null?Yi.stop():Yi.start()},Me.addEventListener("sessionstart",fh),Me.addEventListener("sessionend",ph),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;H!==null&&H.renderStart(A,V);let re=Me.enabled===!0&&Me.isPresenting===!0,K=B!==null&&(q===null||re)&&B.begin(P,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(V),V=Me.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,V,q),T=ie.get(A,E.length),T.init(V),T.state.textureUnits=Ce.getTextureUnits(),E.push(T),Fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?Re.setFromArrayCamera(V):pe.setFromProjectionMatrix(Fe,Nn,V.reversedDepth),ze=this.localClippingEnabled,De=ue.init(this.clippingPlanes,ze),R=Te.get(A,_.length),R.init(),_.push(R),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){let $e=P.xr.getDepthSensingMesh();$e!==null&&bl($e,V,-1/0,P.sortObjects)}bl(A,V,0,P.sortObjects),R.finish(),H!==null&&H.updateLights(T.state.lightsArray),P.sortObjects===!0&&R.sort(Ve,dt),lt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,lt&&O.addToRenderList(R,A),this.info.autoReset===!0&&this.info.reset(),De===!0&&ue.beginShadows();let J=T.state.shadowsArray;if(ve.render(J,A,V),De===!0&&ue.endShadows(),(K&&B.hasRenderPass())===!1){let $e=R.opaque,Oe=R.transmissive;if(T.setupLights(),V.isArrayCamera){let Ge=V.cameras;if(Oe.length>0)for(let et=0,ft=Ge.length;et<ft;et++){let vt=Ge[et];gh($e,Oe,A,vt)}lt&&O.render(A);for(let et=0,ft=Ge.length;et<ft;et++){let vt=Ge[et];mh(R,A,vt,vt.viewport)}}else Oe.length>0&&gh($e,Oe,A,V),lt&&O.render(A),mh(R,A,V)}q!==null&&Z===0&&(Ce.updateMultisampleRenderTarget(q),Ce.updateRenderTargetMipmap(q)),K&&B.end(P),A.isScene===!0&&A.onAfterRender(P,A,V),Pe.resetDefaultState(),W=-1,L=null,E.pop(),E.length>0?(T=E[E.length-1],Ce.setTextureUnits(T.state.textureUnits),De===!0&&ue.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,H!==null&&H.renderEnd()};function bl(A,V,re,K){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){let $e=V.isArrayCamera?Re:pe;if(!A.frustumCulled||A.intersectsFrustum($e)){K&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Fe);let Oe=xe.update(A),Ge=A.material;Ge.visible&&R.push(A,Oe,Ge,re,Ue.z,null,V)}}else if(A.isMesh||A.isLine||A.isPoints){let $e=V.isArrayCamera?Re:pe;if(!A.frustumCulled||A.intersectsFrustum($e)){let Oe=xe.update(A),Ge=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ue.copy(Oe.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ge)){let et=Oe.groups;for(let ft=0,vt=et.length;ft<vt;ft++){let Ke=et[ft],Mt=Ge[Ke.materialIndex];Mt&&Mt.visible&&R.push(A,Oe,Mt,re,Ue.z,Ke,V)}}else Ge.visible&&R.push(A,Oe,Ge,re,Ue.z,null,V)}}}let ke=A.children;for(let $e=0,Oe=ke.length;$e<Oe;$e++)bl(ke[$e],V,re,K)}function mh(A,V,re,K){let{opaque:J,transmissive:ke,transparent:$e}=A;T.setupLightsView(re),De===!0&&ue.setGlobalState(P.clippingPlanes,re),K&&ee.viewport(te.copy(K)),J.length>0&&ca(J,V,re),ke.length>0&&ca(ke,V,re),$e.length>0&&ca($e,V,re),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function gh(A,V,re,K){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){let Ke=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new Tn(1,1,{generateMipmaps:!0,type:Ke?Zn:vn,minFilter:yi,samples:Math.max(4,Ee.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let ke=T.state.transmissionRenderTarget[K.id],$e=K.viewport||te;ke.setSize($e.z*P.transmissionResolutionScale,$e.w*P.transmissionResolutionScale);let Oe=P.getRenderTarget(),Ge=P.getActiveCubeFace(),et=P.getActiveMipmapLevel();P.setRenderTarget(ke),P.getClearColor(X),j=P.getClearAlpha(),j<1&&P.setClearColor(16777215,.5),P.clear(),lt&&O.render(re);let ft=P.toneMapping;P.toneMapping=si;let vt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),De===!0&&ue.setGlobalState(P.clippingPlanes,K),ca(A,re,K),Ce.updateMultisampleRenderTarget(ke),Ce.updateRenderTargetMipmap(ke),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Mt=0,Xt=V.length;Mt<Xt;Mt++){let It=V[Mt],{object:Pt,geometry:on,material:Je,group:mn}=It;if(Je.side===un&&Pt.layers.test(K.layers)){let wt=Je.side;Je.side=$t,Je.needsUpdate=!0,xh(Pt,re,K,on,Je,mn),Je.side=wt,Je.needsUpdate=!0,Ke=!0}}Ke===!0&&(Ce.updateMultisampleRenderTarget(ke),Ce.updateRenderTargetMipmap(ke))}P.setRenderTarget(Oe,Ge,et),P.setClearColor(X,j),vt!==void 0&&(K.viewport=vt),P.toneMapping=ft}function ca(A,V,re){let K=V.isScene===!0?V.overrideMaterial:null;for(let J=0,ke=A.length;J<ke;J++){let $e=A[J],{object:Oe,geometry:Ge,group:et}=$e,ft=$e.material;ft.allowOverride===!0&&K!==null&&(ft=K),Oe.layers.test(re.layers)&&xh(Oe,V,re,Ge,ft,et)}}function xh(A,V,re,K,J,ke){H!==null&&J.isNodeMaterial&&H.setObject(A,J),A.onBeforeRender(P,V,re,K,J,ke),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(P,V,re,K,A,ke),J.transparent===!0&&J.side===un&&J.forceSinglePass===!1?(J.side=$t,J.needsUpdate=!0,P.renderBufferDirect(re,V,K,J,A,ke),J.side=ii,J.needsUpdate=!0,P.renderBufferDirect(re,V,K,J,A,ke),J.side=un):P.renderBufferDirect(re,V,K,J,A,ke),A.onAfterRender(P,V,re,K,J,ke)}function _h(A){let V=0;for(let re of A)re.texture!==null&&V++;return V}function or(A,V,re){V.isScene!==!0&&(V=tt);let K=Le.get(A),J=T.state.lights,ke=T.state.shadowsArray,$e=J.state.version,Oe=he.getParameters(A,J.state,ke,V,re,T.state.lightProbeGridArray),Ge=he.getProgramCacheKey(Oe),et=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,K.fog=V.fog;let ft=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=I.get(A.envMap||K.environment,ft),K.envMapRotation=K.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Et),et=new Map,K.programs=et,K.programVariants=new Map);let vt=et.get(Ge);if(vt!==void 0){if(K.currentProgram===vt&&K.lightsStateVersion===$e)return vh(A,Oe),vt}else Oe.uniforms=he.getUniforms(A),H!==null&&A.isNodeMaterial&&H.build(A,re,Oe),A.onBeforeCompile(Oe,P),vt=he.acquireProgram(Oe,Ge),et.set(Ge,vt),K.uniforms=Oe.uniforms;let Ke=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=ue.uniform),vh(A,Oe),K.needsLights=wf(A),K.lightsStateVersion=$e,K.needsLights&&(Ke.ambientLightColor.value=J.state.ambient,Ke.lightProbe.value=J.state.probe,Ke.sunLights.value=J.state.sun,Ke.sunLightShadows.value=J.state.sunShadow,Ke.directionalLights.value=J.state.directional,Ke.directionalLightShadows.value=J.state.directionalShadow,Ke.spotLights.value=J.state.spot,Ke.spotLightShadows.value=J.state.spotShadow,Ke.rectAreaLights.value=J.state.rectArea,Ke.ltc_1.value=J.state.rectAreaLTC1,Ke.ltc_2.value=J.state.rectAreaLTC2,Ke.pointLights.value=J.state.point,Ke.pointLightShadows.value=J.state.pointShadow,Ke.hemisphereLights.value=J.state.hemi,Ke.sunShadowMatrix.value=J.state.sunShadowMatrix,Ke.sunShadowCascade.value=J.state.sunShadowCascade,Ke.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ke.spotLightMatrix.value=J.state.spotLightMatrix,Ke.spotLightMap.value=J.state.spotLightMap,Ke.pointShadowMatrix.value=J.state.pointShadowMatrix),K.numLightProbeGrids=_h(T.state.lightProbeGridArray),K.currentProgram=vt,K.uniformsList=null,vt}function bf(A,V,re,K,J){let ke=Le.get(A),$e=ke.currentProgram.id+","+K+","+J,Oe=ke.programVariants.get($e);return Oe===void 0?(Oe=or(A,V,re),ke.programVariants.set($e,Oe)):(ke.currentProgram=Oe,ke.uniformsList=null,ke.outputColorSpace=K,ke.toneMapping=J),Oe}function yh(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Qs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function vh(A,V){let re=Le.get(A);re.outputColorSpace=V.outputColorSpace,re.batching=V.batching,re.batchingColor=V.batchingColor,re.instancing=V.instancing,re.instancingColor=V.instancingColor,re.instancingMorph=V.instancingMorph,re.skinning=V.skinning,re.morphTargets=V.morphTargets,re.morphNormals=V.morphNormals,re.morphColors=V.morphColors,re.morphTargetsCount=V.morphTargetsCount,re.numClippingPlanes=V.numClippingPlanes,re.numIntersection=V.numClipIntersection,re.vertexAlphas=V.vertexAlphas,re.vertexTangents=V.vertexTangents,re.toneMapping=V.toneMapping}function Sf(A,V,re,K,J){V.isScene!==!0&&(V=tt),Ce.resetTextureUnits();let ke=V.fog,$e=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?V.environment:null,Oe=q===null?P.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:bt.workingColorSpace,Ge=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,et=I.get(K.envMap||$e,Ge),ft=K.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,vt=!!re.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ke=!!re.morphAttributes.position,Mt=!!re.morphAttributes.normal,Xt=!!re.morphAttributes.color,It=si;K.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(It=P.toneMapping);let Pt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,on=Pt!==void 0?Pt.length:0,Je=Le.get(K),mn=T.state.lights;if(De===!0&&(ze===!0||A!==L)){let Ot=A===L&&K.id===W;ue.setState(K,A,Ot)}let wt=!1,Zi=!1;K.version===Je.__version?Je.needsLights&&Je.lightsStateVersion!==mn.state.version||J.isBatchedMesh&&Je.batching===!1||!J.isBatchedMesh&&Je.batching===!0||J.isBatchedMesh&&Je.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Je.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Je.instancing===!1||!J.isInstancedMesh&&Je.instancing===!0||J.isSkinnedMesh&&Je.skinning===!1||!J.isSkinnedMesh&&Je.skinning===!0||J.isInstancedMesh&&Je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Je.instancingMorph===!1&&J.morphTexture!==null||Je.envMap!==et||K.fog===!0&&Je.fog!==ke||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ue.numPlanes||Je.numIntersection!==ue.numIntersection)||Je.vertexAlphas!==ft||Je.vertexTangents!==vt||Je.morphTargets!==Ke||Je.morphNormals!==Mt||Je.morphColors!==Xt||Je.morphTargetsCount!==on||Je.numLightProbeGrids!==_h(T.state.lightProbeGridArray)?wt=!0:(Je.outputColorSpace!==Oe||Je.toneMapping!==It)&&(Zi=!0):(wt=!0,Je.__version=K.version);let ln=Je.currentProgram;(wt===!0||Zi===!0)&&(ln=Zi===!0?bf(K,V,J,Oe,It):or(K,V,J),H&&K.isNodeMaterial&&H.onUpdateProgram(K,ln,Je));let ha=!1,Ti=!1,$i=!1,St=ln.getUniforms(),an=Je.uniforms;if(ee.useProgram(ln.program)&&(ha=!0,Ti=!0,$i=!0),K.id!==W&&(W=K.id,Ti=!0),ha||L!==A){ee.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(z,"projectionMatrix",A.projectionMatrix),St.setValue(z,"viewMatrix",A.matrixWorldInverse);let Qt=St.map.cameraPosition;Qt!==void 0&&Qt.setValue(z,We.setFromMatrixPosition(A.matrixWorld)),Ee.logarithmicDepthBuffer&&St.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&St.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,Ti=!0,$i=!0)}if(Je.needsLights&&(mn.state.sunShadowMap.length>0&&St.setValue(z,"sunShadowMap",mn.state.sunShadowMap,Ce),mn.state.directionalShadowMap.length>0&&St.setValue(z,"directionalShadowMap",mn.state.directionalShadowMap,Ce),mn.state.spotShadowMap.length>0&&St.setValue(z,"spotShadowMap",mn.state.spotShadowMap,Ce),mn.state.pointShadowMap.length>0&&St.setValue(z,"pointShadowMap",mn.state.pointShadowMap,Ce)),J.isSkinnedMesh){St.setOptional(z,J,"bindMatrix"),St.setOptional(z,J,"bindMatrixInverse");let Ot=J.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),St.setValue(z,"boneTexture",Ot.boneTexture,Ce))}J.isBatchedMesh&&(St.setOptional(z,J,"batchingTexture"),St.setValue(z,"batchingTexture",J._matricesTexture,Ce),St.setOptional(z,J,"batchingIdTexture"),St.setValue(z,"batchingIdTexture",J._indirectTexture,Ce),St.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&St.setValue(z,"batchingColorTexture",J._colorsTexture,Ce));let Bn=re.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&ae.update(J,re,ln),(Ti||Je.receiveShadow!==J.receiveShadow)&&(Je.receiveShadow=J.receiveShadow,St.setValue(z,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&V.environment!==null&&(an.envMapIntensity.value=V.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=H_()),Ti){if(St.setValue(z,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&Ef(an,$i),ke&&K.fog===!0&&_e.refreshFogUniforms(an,ke),_e.refreshMaterialUniforms(an,K,Se,be,T.state.transmissionRenderTarget[A.id]),Je.needsLights&&Je.numLightProbeGrids>0){let Ot=M,Qt=0;for(let ci of T.state.lightProbeGridArray)ci.texture!==null&&(Ot.textures[Qt]=ci.texture,Ot.min[Qt]=ci.boundingBox.min,Ot.max[Qt]=ci.boundingBox.max,Ot.resolution[Qt]=ci.resolution,Qt++);for(let ci in Ot)Ot[ci].length=Qt;an.probesSH.value=Ot.textures,an.probesMin.value=Ot.min,an.probesMax.value=Ot.max,an.probesResolution.value=Ot.resolution}Qs.upload(z,yh(Je),an,Ce)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Qs.upload(z,yh(Je),an,Ce),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&St.setValue(z,"center",J.center),St.setValue(z,"modelViewMatrix",J.modelViewMatrix),St.setValue(z,"normalMatrix",J.normalMatrix),St.setValue(z,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){let Ot=K.uniformsGroups;for(let Qt=0,ci=Ot.length;Qt<ci;Qt++){let bh=Ot[Qt];Ze.update(bh,ln),Ze.bind(bh,ln)}}return ln}function Ef(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function wf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,V,re){let K=Le.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Le.get(A.texture).__webglTexture=V,Le.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:re,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let re=Le.get(A);re.__webglFramebuffer=V,re.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,re=0){q=A,Y=V,Z=re;let K=null,J=!1,ke=!1;if(A){let Oe=Le.get(A);if(Oe.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(z.FRAMEBUFFER,Oe.__webglFramebuffer),te.copy(A.viewport),Ie.copy(A.scissor),de=A.scissorTest,ee.viewport(te),ee.scissor(Ie),ee.setScissorTest(de),W=-1;return}else if(Oe.__webglFramebuffer===void 0)Ce.setupRenderTarget(A);else if(Oe.__hasExternalTextures)Ce.rebindTextures(A,Le.get(A.texture).__webglTexture,Le.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let ft=A.depthTexture;if(Oe.__boundDepthTexture!==ft){if(ft!==null&&Le.has(ft)&&(A.width!==ft.image.width||A.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(A)}}let Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ke=!0);let et=Le.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[V])?K=et[V][re]:K=et[V],J=!0):A.samples>0&&Ce.useMultisampledRTT(A)===!1?K=Le.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?K=et[re]:K=et,te.copy(A.viewport),Ie.copy(A.scissor),de=A.scissorTest}else te.copy(Xe).multiplyScalar(Se).floor(),Ie.copy(Ye).multiplyScalar(Se).floor(),de=at;if(re!==0&&(K=F),ee.bindFramebuffer(z.FRAMEBUFFER,K)&&ee.drawBuffers(A,K),ee.viewport(te),ee.scissor(Ie),ee.setScissorTest(de),J){let Oe=Le.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe.__webglTexture,re)}else if(ke){let Oe=V;for(let Ge=0;Ge<A.textures.length;Ge++){let et=Le.get(A.textures[Ge]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ge,et.__webglTexture,re,Oe)}}else if(A!==null&&re!==0){let Oe=Le.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Oe.__webglTexture,re)}W=-1};function Mh(A){let V=Le.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=Ee.textureFormatReadable(A.format),V.__typeReadable=Ee.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,re,K,J,ke,$e,Oe=0){if(!(A&&A.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$e!==void 0&&(Ge=Ge[$e],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){ee.bindFramebuffer(z.FRAMEBUFFER,Ge);try{let et=A.textures[Oe],ft=et.format,vt=et.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Oe);let Ke=Mh(et);if(Ke.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ke.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-K&&re>=0&&re<=A.height-J&&z.readPixels(V,re,K,J,we.convert(ft),we.convert(vt),ke)}finally{let et=q!==null?Le.get(q).__webglFramebuffer:null;ee.bindFramebuffer(z.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,V,re,K,J,ke,$e,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=Le.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$e!==void 0&&(Ge=Ge[$e],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(V>=0&&V<=A.width-K&&re>=0&&re<=A.height-J){ee.bindFramebuffer(z.FRAMEBUFFER,Ge);let et=A.textures[Oe],ft=et.format,vt=et.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Oe);let Ke=Mh(et);if(Ke.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ke.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Mt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Mt),z.bufferData(z.PIXEL_PACK_BUFFER,ke.byteLength,z.STREAM_READ),z.readPixels(V,re,K,J,we.convert(ft),we.convert(vt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Xt=q!==null?Le.get(q).__webglFramebuffer:null;ee.bindFramebuffer(z.FRAMEBUFFER,Xt);let It=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Bu(z,It,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Mt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ke),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Mt),z.deleteSync(It),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,re=0){let K=Math.pow(2,-re),J=Math.floor(A.image.width*K),ke=Math.floor(A.image.height*K),$e=V!==null?V.x:0,Oe=V!==null?V.y:0;Ce.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,$e,Oe,J,ke),ee.unbindTexture()},this.copyTextureToTexture=function(A,V,re=null,K=null,J=0,ke=0){let $e,Oe,Ge,et,ft,vt,Ke,Mt,Xt,It=A.isCompressedTexture?A.mipmaps[ke]:A.image;if(re!==null)$e=re.max.x-re.min.x,Oe=re.max.y-re.min.y,Ge=re.isBox3?re.max.z-re.min.z:1,et=re.min.x,ft=re.min.y,vt=re.isBox3?re.min.z:0;else{let St=Math.pow(2,-J);$e=Math.floor(It.width*St),Oe=Math.floor(It.height*St),A.isDataArrayTexture?Ge=It.depth:A.isData3DTexture?Ge=Math.floor(It.depth*St):Ge=1,et=0,ft=0,vt=0}K!==null?(Ke=K.x,Mt=K.y,Xt=K.z):(Ke=0,Mt=0,Xt=0);let Pt=we.convert(V.format),on=we.convert(V.type),Je;V.isData3DTexture?(Ce.setTexture3D(V,0),Je=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Ce.setTexture2DArray(V,0),Je=z.TEXTURE_2D_ARRAY):(Ce.setTexture2D(V,0),Je=z.TEXTURE_2D),ee.activeTexture(z.TEXTURE0),ee.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),ee.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ee.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);let mn=ee.getParameter(z.UNPACK_ROW_LENGTH),wt=ee.getParameter(z.UNPACK_IMAGE_HEIGHT),Zi=ee.getParameter(z.UNPACK_SKIP_PIXELS),ln=ee.getParameter(z.UNPACK_SKIP_ROWS),ha=ee.getParameter(z.UNPACK_SKIP_IMAGES);ee.pixelStorei(z.UNPACK_ROW_LENGTH,It.width),ee.pixelStorei(z.UNPACK_IMAGE_HEIGHT,It.height),ee.pixelStorei(z.UNPACK_SKIP_PIXELS,et),ee.pixelStorei(z.UNPACK_SKIP_ROWS,ft),ee.pixelStorei(z.UNPACK_SKIP_IMAGES,vt);let Ti=A.isDataArrayTexture||A.isData3DTexture,$i=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let St=Le.get(A),an=Le.get(V),Bn=Le.get(St.__renderTarget),Ot=Le.get(an.__renderTarget);ee.bindFramebuffer(z.READ_FRAMEBUFFER,Bn.__webglFramebuffer),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Qt=0;Qt<Ge;Qt++)Ti&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.get(A).__webglTexture,J,vt+Qt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Le.get(V).__webglTexture,ke,Xt+Qt)),z.blitFramebuffer(et,ft,et+$e,ft+Oe,Ke,Mt,Ke+$e,Mt+Oe,z.DEPTH_BUFFER_BIT,z.NEAREST);ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||Le.has(A)){let St=Le.get(A),an=Le.get(V);ee.bindFramebuffer(z.READ_FRAMEBUFFER,D),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,k);for(let Bn=0;Bn<Ge;Bn++)Ti?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,J,vt+Bn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,St.__webglTexture,J),$i?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,an.__webglTexture,ke,Xt+Bn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,an.__webglTexture,ke),J!==0?z.blitFramebuffer(et,ft,et+$e,ft+Oe,Ke,Mt,Ke+$e,Mt+Oe,z.COLOR_BUFFER_BIT,z.NEAREST):$i?z.copyTexSubImage3D(Je,ke,Ke,Mt,Xt+Bn,et,ft,$e,Oe):z.copyTexSubImage2D(Je,ke,Ke,Mt,et,ft,$e,Oe);ee.bindFramebuffer(z.READ_FRAMEBUFFER,null),ee.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else $i?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Je,ke,Ke,Mt,Xt,$e,Oe,Ge,Pt,on,It.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Je,ke,Ke,Mt,Xt,$e,Oe,Ge,Pt,It.data):z.texSubImage3D(Je,ke,Ke,Mt,Xt,$e,Oe,Ge,Pt,on,It):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ke,Ke,Mt,$e,Oe,Pt,on,It.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ke,Ke,Mt,It.width,It.height,Pt,It.data):z.texSubImage2D(z.TEXTURE_2D,ke,Ke,Mt,$e,Oe,Pt,on,It);ee.pixelStorei(z.UNPACK_ROW_LENGTH,mn),ee.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt),ee.pixelStorei(z.UNPACK_SKIP_PIXELS,Zi),ee.pixelStorei(z.UNPACK_SKIP_ROWS,ln),ee.pixelStorei(z.UNPACK_SKIP_IMAGES,ha),ke===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&z.generateMipmap(Je),ee.unbindTexture()},this.initRenderTarget=function(A){Le.get(A).__webglFramebuffer===void 0&&Ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ce.setTextureCube(A,0):A.isData3DTexture?Ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ce.setTexture2DArray(A,0):Ce.setTexture2D(A,0),ee.unbindTexture()},this.resetState=function(){Y=0,Z=0,q=null,ee.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}};var Cd={type:"change"},Kc={type:"start"},Id={type:"end"},cl=new Li,Pd=new En,G_=Math.cos(70*Lc.DEG2RAD),jt=new G,Mn=2*Math.PI,At={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$c=1e-6,tr=class extends Xr{constructor(e,t=null){super(e,t),this.state=At.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bi.ROTATE,MIDDLE:Bi.DOLLY,RIGHT:Bi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new nn,this._lastTargetPosition=new G,this._quat=new nn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zs,this._sphericalDelta=new Zs,this._scale=1,this._panOffset=new G,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new G,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=W_.bind(this),this._onPointerDown=V_.bind(this),this._onPointerUp=X_.bind(this),this._onContextMenu=j_.bind(this),this._onMouseWheel=Z_.bind(this),this._onKeyDown=$_.bind(this),this._onTouchStart=K_.bind(this),this._onTouchMove=J_.bind(this),this._onMouseDown=q_.bind(this),this._onMouseMove=Y_.bind(this),this._interceptControlDown=Q_.bind(this),this._interceptControlUp=e1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=At.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cd),this.update(),this.state=At.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===At.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Mn:n>Math.PI&&(n-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=jt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(cl.origin.copy(this.object.position),cl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cl.direction))<G_?this.object.lookAt(this.target):(Pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),cl.intersectPlane(Pd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>$c||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$c||this._lastTargetPosition.distanceToSquared(this.target)>$c?(this.dispatchEvent(Cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function V_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function W_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function X_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Id),this.state=At.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function q_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=At.DOLLY;break;case Bi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}break;case Bi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=At.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=At.PAN}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Kc)}function Y_(i){switch(this.state){case At.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case At.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Z_(i){this.enabled===!1||this.enableZoom===!1||this.state!==At.NONE||(i.preventDefault(),this.dispatchEvent(Kc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Id))}function $_(i){this.enabled!==!1&&this._handleKeyDown(i)}function K_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1){this.state=At.NONE;break}this._handleTouchStartRotate(i),this.state=At.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1){this.state=At.NONE;break}this._handleTouchStartPan(i),this.state=At.TOUCH_PAN;break;default:this.state=At.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=At.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=At.TOUCH_DOLLY_ROTATE;break;default:this.state=At.NONE}break;default:this.state=At.NONE}this.state!==At.NONE&&this.dispatchEvent(Kc)}function J_(i){switch(this._trackPointer(i),this.state){case At.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case At.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case At.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case At.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=At.NONE}}function j_(i){this.enabled!==!1&&i.preventDefault()}function Q_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function e1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var fs=class extends yn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ft;e.deleteAttribute("uv");let t=new se({side:$t}),n=new se,s=new ss(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ne(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Wn(e,n,6),o=new Ut;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ne(e,nr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ne(e,nr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ne(e,nr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Ne(e,nr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let f=new Ne(e,nr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Ne(e,nr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function nr(i){return new zr({color:0,emissive:16777215,emissiveIntensity:i})}var sa=new G;function kn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;sa.copy(e),sa[n]=0,sa.normalize();let c=.5*a/(a+o),u=1-sa.angleTo(i)/l;return Math.sign(sa[t])===1?u*c:o/(a+o)+c+c*(1-u)}var hl=class i extends Ft{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new G,c=new G,u=new G(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,m=d.length/6,y=new G,g=.5/a;for(let x=0,b=0;x<d.length;x+=3,b+=2)switch(l.fromArray(d,x),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[x+0]=u.x*Math.sign(l.x)+c.x*r,d[x+1]=u.y*Math.sign(l.y)+c.y*r,d[x+2]=u.z*Math.sign(l.z)+c.z*r,f[x+0]=c.x,f[x+1]=c.y,f[x+2]=c.z,Math.floor(x/m)){case 0:y.set(1,0,0),p[b+0]=kn(y,c,"z","y",r,n),p[b+1]=1-kn(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),p[b+0]=1-kn(y,c,"z","y",r,n),p[b+1]=1-kn(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),p[b+0]=1-kn(y,c,"x","z",r,e),p[b+1]=kn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),p[b+0]=1-kn(y,c,"x","z",r,e),p[b+1]=1-kn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),p[b+0]=1-kn(y,c,"x","y",r,e),p[b+1]=1-kn(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),p[b+0]=kn(y,c,"x","y",r,e),p[b+1]=1-kn(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Jc=Math.PI/180,t1=(i,e,t)=>new nn().setFromEuler(new Un(i*Jc,e*Jc,t*Jc)),ye=(i,e,t)=>new G(i,e,t);function pl(i,e,t=1,n=60){let s=document.createElement("canvas");s.width=1024,s.height=256;let r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,1024,256);let a=t,o=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<n;c++){let u=o()*256,d=4+o()*10,f=.004+o()*.008,p=o()*6;r.strokeStyle=e,r.globalAlpha=.12+o()*.3,r.lineWidth=.6+o()*2.2,r.beginPath();for(let m=0;m<=1024;m+=8){let y=u+Math.sin(m*f+p)*d+Math.sin(m*f*3.1+p)*d*.25;m?r.lineTo(m,y):r.moveTo(m,y)}r.stroke()}r.globalAlpha=.05;for(let c=0;c<1600;c++)r.fillStyle=o()<.5?e:"#fff",r.fillRect(o()*1024,o()*256,6+o()*14,1);let l=new Rn(s);return l.wrapS=l.wrapT=es,l.colorSpace=Yt,l.anisotropy=8,l}var v={beech:new se({map:pl("#DDAA6A","#A8682E",3,80),roughness:.7}),beechDark:new se({map:pl("#C48A4E","#7E4A1E",7,50),roughness:.55}),rose:new se({map:pl("#5E2C1E","#2A100A",11,60),roughness:.42}),steel:new se({color:12107978,metalness:.85,roughness:.32}),steelDark:new se({color:9279139,metalness:.85,roughness:.35}),iron:new se({color:2898511,metalness:.4,roughness:.45}),brass:new se({color:13805126,metalness:.95,roughness:.3}),yellow:new se({color:15909198,roughness:.45}),pink:new se({color:15900840,roughness:.8}),graphite:new se({color:3816e3,roughness:.5,metalness:.3}),pencilWood:new se({color:15189914,roughness:.8}),line:new xi({color:4012612}),kerf:new se({color:3810326,roughness:1}),claret:new se({color:9054789,roughness:.5})};function Gd(i=30){let e=document.createElement("canvas");e.width=2048,e.height=160;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,160);n.addColorStop(0,"#e9ecef"),n.addColorStop(1,"#c7cdd4"),t.fillStyle=n,t.fillRect(0,0,2048,160),t.fillStyle="#24272d";let s=2048/i;for(let a=0;a<=i*10;a++){let o=a*s/10,l=a%10===0?60:a%5===0?42:26;t.fillRect(o,0,2,l)}t.font="bold 30px Arial";for(let a=1;a<i;a++)t.fillText(a,a*s-8,96);let r=new Rn(e);return r.colorSpace=Yt,r.anisotropy=8,r}function n1(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.strokeStyle="rgba(55,52,62,.85)",e.lineWidth=5;for(let n=-256;n<512;n+=34)e.beginPath(),e.moveTo(n,256),e.lineTo(n+256,0),e.stroke();let t=new Rn(i);return t.colorSpace=Yt,t}var Vb=n1(),qi=i=>(i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i);function sh(){let i=new nt,e=new yt;e.moveTo(-15,-1.25),e.lineTo(15,-1.25),e.absarc(15,0,1.25,-Math.PI/2,Math.PI/2,!1),e.lineTo(-15,1.25),e.closePath(),e.holes.push(new Wt().absarc(15.35,0,.38,0,Math.PI*2,!0));let t=new Zt(e,{depth:.08,bevelEnabled:!1,curveSegments:24});t.translate(0,0,-.04),t.rotateX(-Math.PI/2);let n=t.attributes.position,s=t.attributes.uv;for(let o=0;o<n.count;o++)s.setXY(o,(n.getX(o)+15)/30,(-n.getZ(o)+1.25)/2.5);let r=Gd();r.wrapS=Ln;let a=new se({map:r,metalness:.65,roughness:.25});return i.add(new Ne(t,[a,v.steel])),qi(i)}function i1(){let i=new nt,e=new Ne(new Ui(.11,.35,12),v.graphite);e.rotation.x=Math.PI,e.position.y=.175;let t=new Ne(new Tt(.35,.11,.9,6),v.pencilWood);t.position.y=.35+.45;let n=new Ne(new Tt(.35,.35,8,6),v.yellow);n.position.y=1.25+4;let s=new Ne(new Tt(.37,.37,.6,16),v.steel);s.position.y=9.55;let r=new Ne(new Tt(.34,.34,.5,16),v.pink);return r.position.y=10.1,i.add(e,t,n,s,r),qi(i)}function rh(){let i=new nt,e=new Ne(new Ft(11.5,1.8,2.6),v.rose);e.position.set(5.75,0,1.3);let t=new Ne(new Ft(11.5,1.5,.1),v.brass);t.position.set(5.75,0,.05);let n=[v.steel,v.steel,new se({map:Gd(15),metalness:.55,roughness:.35}),v.steel,v.steel,v.steel],s=new Ft(2.4,.15,15.6),r=s.attributes.uv,a=new Ne(s,n);a.position.set(1.2,0,-7.2),n[2].map.center.set(.5,.5),n[2].map.rotation=Math.PI/2,i.add(e,t,a);for(let[o,l]of[[.7,.9],[1.7,1.8],[.7,2]]){let c=new Ne(new Tt(.2,.2,1.84,16),v.brass);c.position.set(o,0,l),i.add(c)}for(let o of[5.5,9.5]){let l=new Ne(new Tt(.16,.16,1.84,16),v.brass);l.position.set(o,0,1.3),i.add(l)}return qi(i)}function vl(){let i=new nt,e=new Ne(new Ft(6,1.8,3.6),v.beechDark);e.position.set(0,.9,.3);let t=new Ne(new Ft(6,.06,3.6),v.brass);t.position.set(0,.03,.3);let n=new Ne(new Ft(1.3,15.5,1.3),v.beech);n.position.set(0,-1.4+7.75,.75);let s=new Ne(new Ui(.12,.5,12),v.steel);s.rotation.x=-Math.PI/2,s.position.set(0,-1,-.15),i.userData.pin=s;let r=new Ne(new Tt(.22,.22,.9,16),v.steel);r.rotation.z=Math.PI/2,r.position.set(3.4,.9,.75);let a=new Ne(new zt(1,24,16),new se({color:15909166,roughness:.35}));a.scale.set(.32,1.05,.75),a.position.set(4.15,.9,.75);let o=new Ne(new Tt(.4,.4,.35,20),new se({color:15909166,roughness:.35}));return o.rotation.z=Math.PI/2,o.position.set(3.75,.9,.75),i.add(e,t,n,s,r,o,a),qi(i)}function ah(){let i=new nt,e=new yt;e.moveTo(0,8),e.lineTo(0,.3);for(let d=0;d<62;d++)e.lineTo(d*.4+.2,-.05),e.lineTo(d*.4+.4,.3);e.lineTo(25,8),e.closePath();let t=new Ne(new Zt(e,{depth:.06,bevelEnabled:!1}),v.steel);t.position.z=-.03;let n=new Ne(new Ft(25.4,1.3,.45),v.brass);n.position.set(12.6,8.1,0);let s=[[22.5,9.4],[24.8,12.2],[26.4,12.9],[27.9,12.1],[31.7,7.4],[33.9,2.2],[33.1,.5],[30.5,.3],[27.4,2.5],[24.6,3.2],[22.5,3.6]],r=new yt;s.forEach(([d,f],p)=>p?r.lineTo(d,f):r.moveTo(d,f)),r.closePath();let a=[[25.9,4.6],[28.3,3.3],[30.1,4.3],[29,8.5],[27.5,10.1],[26,9.3],[25.6,6.8]],o=new Wt;a.forEach(([d,f],p)=>p?o.lineTo(d,f):o.moveTo(d,f)),o.closePath(),r.holes.push(o);let l=new Zt(r,{depth:1.45,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:1});l.translate(0,0,-.725);let c=l.attributes.uv;for(let d=0;d<c.count;d++)c.setXY(d,c.getX(d)/14,c.getY(d)/14);let u=new Ne(l,v.beechDark);i.add(t,n,u);for(let[d,f]of[[23.8,6.6],[25.4,3.6]]){let p=new Ne(new Tt(.35,.35,2,16),v.brass);p.rotation.x=Math.PI/2,p.position.set(d,f,0),i.add(p)}return qi(i)}function oh(){let i=new nt,e=.38,t=7.7,n=new yt;n.moveTo(-.9,0),n.lineTo(.9,0),n.lineTo(.9,-.07),n.lineTo(.6,-e),n.lineTo(-.6,-e),n.lineTo(-.9,-.07),n.closePath();let s=new Zt(n,{depth:t,steps:7,bevelEnabled:!1});s.rotateX(-Math.PI/2);let r=s.attributes.position;for(let d=0;d<r.count;d++){let f=r.getY(d),p=r.getZ(d);r.setZ(d,Math.min(p,e*Math.max(0,f)/1.1))}s.computeVertexNormals();let a=new Ne(s,v.steel),o=new Ne(new Tt(.22,.3,.8,12),v.steel);o.position.set(0,8,e/2);let l=new Ne(new Tt(.6,.6,.9,20),v.brass);l.position.set(0,8.8,e/2);let c=[[.6,9.2],[.78,10],[.92,12.5],[.88,15],[.7,16.4],[.3,16.8],[0,16.85]].map(([d,f])=>new me(d,f)),u=new Ne(new ti(c,28),v.beechDark);return u.position.z=e/2,i.add(a,o,l,u),qi(i)}function lh(){let i=new nt,e=new Ne(new Ft(4.2,5.2,9.5),v.beech),t=new Ne(new Ft(1.2,23.2,2.2),v.beechDark);return t.position.y=-20+23.2/2,i.add(e,t),qi(i)}function s1(){let i=new nt,e=new _n([ye(0,0,0),ye(0,6.2,0),ye(.8,7.6,0),ye(2.5,8,0),ye(11,8,0),ye(12.7,7.6,0),ye(13.5,6.2,0),ye(13.5,0,0)]);i.add(new Ne(new Fn(e,60,.22,10),new se({color:6054765,metalness:.75,roughness:.4})));let t=new Ne(new Ft(13.5,.25,.03),new se({color:15133422,metalness:.95,roughness:.12}));t.position.set(6.75,.1,0),i.add(t);let n=[[.3,0],[.65,-.8],[.75,-3],[.7,-6.5],[.5,-7.6],[0,-7.7]].map(([r,a])=>new me(r,a)),s=new Ne(new ti(n,24),new se({color:3108800,roughness:.9}));return s.rotation.z=-Math.PI/2,s.position.set(-.1,.1,0),i.add(s),qi(i)}function Vd(){return uh(24,5.8,"smooth")}function ms(i,e=256,t=[1,1]){let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d");i(s,e);let r=new Rn(n);return r.wrapS=r.wrapT=es,r.repeat.set(...t),r.colorSpace=Yt,r}var Dd=ms((i,e)=>{i.fillStyle="#c9ced6",i.fillRect(0,0,e,e),i.strokeStyle="#6f7783",i.lineWidth=3;for(let t=-e;t<2*e;t+=16)i.beginPath(),i.moveTo(t,0),i.lineTo(t+e,e),i.stroke(),i.beginPath(),i.moveTo(t,e),i.lineTo(t+e,0),i.stroke()},256,[3,3]),r1=ms((i,e)=>{i.fillStyle="#8a929c",i.fillRect(0,0,e,e),i.strokeStyle="#5d646d",i.lineWidth=2;for(let t=-e;t<2*e;t+=7)i.beginPath(),i.moveTo(t,0),i.lineTo(t+e*.5,e),i.stroke();i.strokeStyle="rgba(220,226,232,.5)",i.lineWidth=1;for(let t=-e;t<2*e;t+=11)i.beginPath(),i.moveTo(t,e),i.lineTo(t+e*.7,0),i.stroke()},256,[4,1]),a1=ms((i,e)=>{i.fillStyle="#efe6d0",i.fillRect(0,0,e,e),i.strokeStyle="#c9b994";for(let t=4;t<e*.75;t+=9)i.lineWidth=2+Math.random()*2,i.beginPath(),i.arc(e/2,e/2,t,0,7),i.stroke()});Object.assign(v,{knurl:new se({map:Dd,metalness:.8,roughness:.4}),file:new se({map:r1,metalness:.7,roughness:.55}),blue:new se({color:3105456,roughness:.35,metalness:.1}),red:new se({color:13120058,roughness:.4}),orange:new se({color:15235114,roughness:.4}),yellowP:new se({color:15906354,roughness:.3}),black:new se({color:2500652,roughness:.65}),hide:new se({color:15524552,roughness:.85}),hideEnd:new se({map:a1,roughness:.85}),viceBlue:new se({color:2906784,metalness:.35,roughness:.5}),castGrey:new se({color:6977156,metalness:.5,roughness:.5}),leather:new se({color:7027486,roughness:.8}),gold:new se({color:13212220,metalness:.9,roughness:.3}),goldSharp:new se({color:13607498,metalness:.9,roughness:.28,flatShading:!0}),steelShiny:new se({color:14278372,metalness:1,roughness:.12}),steelDull:new se({color:10068137,metalness:.7,roughness:.45}),knurlDull:new se({map:Dd,color:11580602,metalness:.65,roughness:.5}),blackMetal:new se({color:2764082,metalness:.45,roughness:.45}),blackOxide:new se({color:3816770,metalness:.6,roughness:.5}),dotRed:new se({color:13775676,roughness:.5}),dotBlue:new se({color:3105456,roughness:.5})});var je=(i,e)=>{let t=new Ne(i,e);return t.castShadow=t.receiveShadow=!0,t},h=(i,e=0,t=0,n=0,s=0,r=0,a=0)=>(i.position.set(e,t,n),i.rotation.set(s,r,a),i),U=(i,e,t,n,s=28)=>je(new Tt(i,e,t,s),n),C=(i,e,t,n)=>je(new Ft(i,e,t),n),le=(i,e,t,n,s)=>je(new hl(i,e,t,3,n),s),rn=(i,e,t=32)=>je(new ti(i.map(([n,s])=>new me(n,s)),t),e),ch=i=>{let e=new yt;return i.forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e},Lt=(i,e,t,n=0)=>{let s=new Zt(Array.isArray(i)?ch(i):i,{depth:e,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:24});s.translate(0,0,-e/2);let r=s.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)/12,r.getY(a)/12);return je(s,t)},Kn=(i,e,t,n=80)=>je(new Fn(new _n(i.map(s=>ye(...s))),n,e,12),t),ce=(...i)=>{let e=new nt;return i.length&&e.add(...i),e},o1=i=>(i.rotation.z=-Math.PI/2,i);function l1(){return ce(h(C(8,1.4,1.8,v.steelShiny),4,0,.9),h(C(1.4,.16,11,v.steelShiny),.7,0,-5.5),h(C(.4,.6,.4,v.steelDark),.2,0,.2))}function c1(){let i=vl();i.children.forEach(t=>{(t.material===v.beechDark||t.material===v.beech)&&(t.material=v.rose)});let e=i.userData.pin.clone();return e.position.y=-1.8,i.add(e),i.add(h(C(.5,15,.12,v.brass),0,6.35,1.42),h(U(.35,.35,1,v.brass),0,14.6,.75),h(U(.55,.55,.3,v.knurl),0,15.2,.75)),i}function Wd(){return ce(rn([[0,0],[.06,.6],[.12,2.2],[.14,4],[0,4]],v.steelDull),h(U(.2,.2,6.4,v.knurlDull),0,7.2),h(U(.2,.2,.04,v.dotRed),0,10.42))}function h1(){return ce(rn([[0,0],[.15,.35],[.36,1.6],[.42,2.4],[.42,9.7],[0,9.7]],v.steelDull),h(U(.45,.45,4.6,v.knurlDull),0,5.4),h(U(.42,.42,.04,v.dotRed),0,9.72))}function u1(){return ce(rn([[0,.08],[.07,0],[.1,.05],[.1,.9],[.38,3.6],[.38,9.4],[.3,9.8],[0,9.85]],v.blackOxide),h(U(.4,.4,3.6,v.knurl),0,6.4))}function d1(){let i=ce(),e=r=>{let a=.3*r,o=2.6*r-a,l=Math.hypot(o,12.6),c=U(.22,.05,l,v.steel,16);return c.position.set(a+o/2,12.85-12.6/2,0),c.rotation.z=Math.atan2(o,12.6),c},t=.34,n=new yt;n.absarc(0,0,1,-Math.PI/2+t,Math.PI*1.5-t,!1),n.absarc(0,0,.86,Math.PI*1.5-t,-Math.PI/2+t,!0),n.closePath();let s=Lt(n,.55,v.steel);return s.position.set(0,13.8,0),i.add(e(1),e(-1),s,h(U(.17,.17,1.3,v.knurl),0,15.4)),i.add(h(U(.06,.06,4.6,v.steelDark),0,7,0,0,0,Math.PI/2),h(U(.5,.5,.45,v.knurl),2.15,7,0,0,0,Math.PI/2)),i}function f1(){let i=e=>Kn([[.22*e,13],[1.1*e,11],[2.5*e,7.2],[3.1*e,4],[2.7*e,1.5],[1.4*e,.25],[.3*e,0]],.17,v.steel);return ce(i(1),i(-1),h(U(.75,.75,.35,v.steel),0,13.2,0,Math.PI/2),h(U(.25,.25,.5,v.steelDark),0,13.2,0,Math.PI/2))}function p1(){return ce(Kn([[.25,13],[.9,6],[1.25,.6]],.17,v.steel),h(rn([[0,0],[.1,.5],[.17,.9]],v.steel),1.28,0,0,0,0,.05),Kn([[-.25,13],[-1.1,5],[-1.35,1.2],[-1.1,.45],[-.5,.3]],.17,v.steel),h(U(.75,.75,.35,v.steel),0,13.2,0,Math.PI/2),h(U(.25,.25,.5,v.steelDark),0,13.2,0,Math.PI/2))}function Xd(){let i=ch([[2.4,9.6],[-4,9.6],[-6.4,7.2],[-6.8,2.4],[-5.2,.7],[2.4,.7]]);i.holes.push(new Wt([[-4.4,2.1],[.9,2.1],[.9,8.2],[-3.6,8.2],[-5.1,6.6],[-5.3,3.4]].map(([t,n])=>new me(t,n))));let e=Lt(i,1.6,v.yellowP,.25);return ce(Kn([[30.5,.6],[30.6,8],[29.4,9.6],[4.2,9.6],[2.4,9.6]],.55,v.black),e,h(C(28.6,1.2,.06,v.steelShiny),16.2,1.3,0),h(U(.45,.45,.5,v.steel),30.6,1.3,0,Math.PI/2),h(C(1.4,.5,.15,v.steel),31.6,1.3,0))}function m1(){let i=new se({color:14211548,roughness:.5,metalness:.1}),t=Kn([[0,.25,0],[.3,1.5,0],[1.4,5.7,0],[2.5,6.6,0],[7,6.6,0],[11.4,6.6,0],[12.8,6.1,0],[13.6,4.8,0],[14.3,2.4,0],[15.1,.2,.18],[15.8,-.9,.3],[16.9,-1.4,.2],[19.5,-1.5,0],[21.9,-1.45,0],[23,-1,0],[23.35,-.4,0],[23,.2,0],[21.9,.62,0],[19.5,.66,0],[17.1,.56,-.15],[16,.38,-.3],[15.3,.27,-.15],[15,.25,0]],.3,i,260),n=s=>h(U(.42,.42,.95,i,20),s,.2,0);return ce(t,n(0),n(15),h(C(14.6,.85,.05,new se({color:3817286,metalness:.6,roughness:.4})),7.5,-.25,0))}var qd=new se({map:pl("#5c3b26","#2e1b10",31,60),roughness:.5});function g1(){let i=new yt;i.moveTo(0,0),i.lineTo(.95,1.6),i.lineTo(.95,9),i.lineTo(0,9),i.closePath();let e=new Zt(i,{depth:.6,bevelEnabled:!1});return e.translate(-.47,0,-.3),e.rotateY(Math.PI/2),ce(je(e,v.steel),h(U(.75,.75,.5,v.steel),0,9.25),h(U(.85,.85,.3,v.leather),0,9.65),h(rn([[.85,9.8],[1.05,11],[1.15,15],[1.05,19],[.9,20],[0,20.1]],qd),0,0,0))}var hh=(i=v.beechDark)=>{let e=rn([[.75,.6],[.8,-4],[.95,-18],[1.05,-24],[.95,-27.5],[0,-27.8]],i);return e.scale.z=.72,e},x1=(i=v.steelDark)=>{let e=rn([[0,3.6],[.98,3.6],[1.02,3.42],[.78,2.6],[.68,1.8],[.92,1.05],[.95,-.9],[.7,-1.6],[.5,-2.2],[.55,-2.6],[0,-2.6]].reverse(),i,40);return e.rotation.z=-Math.PI/2,e};function _1(){return ce(x1(),h(je(new zt(1,32,20),v.steelDark),-3.4,0,0),hh())}function y1(){let i=rn([[0,3.6],[.98,3.6],[1.02,3.42],[.78,2.6],[.68,1.8],[.92,1.05],[.95,0],[0,0]].reverse(),v.steelDark,40);i.rotation.z=-Math.PI/2;let e=Lt([[0,-.95],[0,.95],[-3.6,.14],[-3.6,-.14]],1.8,v.steelDark);return ce(i,e,hh())}function Yd(){let i=e=>h(Lt(new yt().moveTo(0,.95).quadraticCurveTo(-3,1.25,-5.4,-2.1).lineTo(-5.25,-2.25).quadraticCurveTo(-2.9,-.35,0,-.9),.42,v.steelDark),0,0,.38*e);return ce(h(U(1,1,3.4,v.steelDark),1.7,0,0,0,0,Math.PI/2),i(1),i(-1),h(U(.85,.85,1.2,v.steelDark),0,-.3,0),h(rn([[.7,-.5],[.72,-12],[0,-12.1]],v.yellowP),0,0,0),h(rn([[.95,-11],[1.05,-17],[1.1,-26],[.95,-27.5],[0,-27.7]],v.black),0,0,0))}function v1(){let i=U(1.7,1.7,7.5,v.hide,36);return i.material=[v.hide,v.hideEnd,v.hideEnd],h(i,0,0,0,0,0,Math.PI/2),ce(i,h(U(1.75,1.75,2.4,v.castGrey,36),0,0,0,0,0,Math.PI/2),hh(v.beech))}function uh(i=24,e=5.8,t){let n=new se({color:11740718,metalness:.35,roughness:.4}),s=t==="jack"?n:t==="smooth"?v.steel:v.iron,r=t==="jack"?n:t==="smooth"?v.blackMetal:v.iron,a=t?v.steelShiny:v.iron,o=ce(),l=C(i,.6,e,a);l.position.y=.3;let c=C(i-2,3.4,.35,r);c.position.set(0,2.2,e/2-.18);let u=c.clone();u.position.z=-e/2+.18;let d=C(4,2,e-.8,s);h(d,-1.5,1.6,0,0,0,.75);let f=C(10,.25,e-1.2,v.steel);h(f,-1.6,3.6,0,0,0,.75);let p=le(7,.6,e-1.4,.25,s);h(p,-.8,3.8,0,0,0,.75);let m=C(1.2,.5,1.4,v.steel);h(m,-2.4,5.2,0,0,0,.75);let y=new yt;y.moveTo(0,0),y.lineTo(4.5,0),y.bezierCurveTo(5,4,5.5,7,4,8.3),y.bezierCurveTo(3,9,1.6,8.5,1.8,7),y.bezierCurveTo(2,5,1,2.5,0,1.2),y.closePath();let g=Lt(y,1.8,v.beechDark,.2);g.scale.x=-1,g.position.set(-i/2+4.5,.6,0);let x=rn([[0,0],[1.3,0],[1.5,1.2],[1.2,2.6],[.6,3.2],[0,3.3]],v.beechDark);return x.position.set(i/2-3.5,.6,0),o.add(l,c,u,d,f,p,m,g,x,h(U(.45,.45,.4,v.brass),-i/2+6.2,2,0,0,0,Math.PI/2)),o}function Zd(){return uh(36,6.2,"jack")}function M1(){let i=uh(21,3.6);return i.add(h(U(.22,.22,9,v.steel),4,1.2,5.5,Math.PI/2),h(U(.22,.22,9,v.steel),-4,1.2,5.5,Math.PI/2),h(le(15,2.6,.9,.2,v.iron),0,1.3,9.6),h(C(1.2,1.4,.5,v.brass),6,1.2,-2.1)),i}var jc=new se({color:3112271,metalness:.35,roughness:.4});function b1(){let i=ce(),e=C(20,4.5,.5,jc);e.position.set(0,2.6,0);let t=le(9,4,1.6,.3,jc);t.position.set(-1,3.4,.9);let n=new yt;n.moveTo(0,0),n.lineTo(4.5,0),n.bezierCurveTo(5,4,5.5,7,4,8.3),n.bezierCurveTo(3,9,1.6,8.5,1.8,7),n.bezierCurveTo(2,5,1,2.5,0,1.2),n.closePath();let s=Lt(n,1.6,v.beechDark,.2);s.scale.x=-1,s.position.set(-4,4.6,1);let r=C(.5,6,.4,v.steel);return h(r,1.5,4,0,0,0,.5),i.add(e,t,s,r,h(U(.25,.25,10,v.steel),5,2.4,5,Math.PI/2),h(U(.25,.25,10,v.steel),-6,2.4,5,Math.PI/2),h(le(17,3.4,.8,.2,jc),0,2.2,8.8),h(U(.4,.4,.5,v.brass),5,2.4,1.1,Math.PI/2),h(U(.4,.4,.5,v.brass),-6,2.4,1.1,Math.PI/2)),i}function dh(i,e,t,n=2,s=.45,r=0){let a=new Tt(i,i,e,64,Math.round(e*24),!1),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l),u=o.getY(l),d=o.getZ(l),f=Math.atan2(d,c),p=Math.hypot(c,d);if(p<1e-6)continue;let m=(u+e/2)/e,y=1-s*Math.pow(Math.max(0,Math.cos(n/2*2*(f-m*t*Math.PI*2))),3);r&&(y*=1-.07*(.5+.5*Math.sin(f+u*Math.PI*2/r))),o.setX(l,c/p*p*y),o.setZ(l,d/p*p*y)}return a.computeVertexNormals(),a}function $d(){return ce(h(U(.32,.32,4.5,v.gold),0,2.25),h(je(dh(.32,7.2,1.6),v.gold),0,8.1),h(U(.32,0,.25,v.gold),0,11.83,0,Math.PI))}function S1(){let i=new se({color:2961461,metalness:.6,roughness:.45,side:un}),e=(o,l,c,u)=>ce(je(new ti([[1.82,o],[2,o],[2,l],[1.97,l],[1.82,l-.38],[1.82,o]].map(([d,f])=>new me(d,f)),56,c,u),v.steelShiny),je(new ti([[1.815,o+.02],[1.815,Math.max(o+.03,l-.4)]].map(([d,f])=>new me(d,f)),56,c,u),i)),t=ce(h(U(.3,.3,1.6,v.steel),0,.8),h(U(.26,.26,.25,v.blackOxide),0,1.72),h(U(.48,.48,2.2,v.steel),0,2.95),h(U(.44,.44,.35,v.blackOxide),0,4.22),h(U(1.97,1.97,.28,v.steel,64),0,4.53),h(U(1.82,1.82,.04,i,48),0,4.69)),n=.36,s=Math.PI/2;t.add(e(4.4,6,s+n,Math.PI-2*n),e(4.4,6,3*s+n,Math.PI-2*n)),t.add(e(4.4,5.1,s-n*.15,n*.15+.02),e(4.4,5.1,3*s-n*.15,n*.15+.02));let r=new yt;r.moveTo(-.7,0),r.lineTo(.7,0),r.lineTo(0,1.38),r.closePath();let a=new Ne(new Zt(r,{depth:4,bevelEnabled:!1}),[v.steelShiny,i]);return a.geometry.translate(0,0,-2),a.geometry.rotateY(Math.PI/2),a.position.y=4.62,a.castShadow=!0,t.add(a,h(U(0,.13,.45,v.steelShiny,16),0,6.2)),t}function E1(){let i=new Ui(1.2,1.1,60,6),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getZ(t),r=Math.atan2(s,n);if(Math.hypot(n,s)<1e-6)continue;let o=(r/(2*Math.PI/5)%1+1)%1,l=1-.28*Math.min(1,o*3.5);e.setX(t,n*l),e.setZ(t,s*l)}return i.computeVertexNormals(),ce(h(U(.33,.33,5,v.gold),0,3.6),h(je(i,v.goldSharp),0,.55,0,Math.PI),h(U(1.2,1.2,.14,v.gold,60),0,1.17),h(U(.4,.9,.35,v.gold),0,1.41))}function w1(){let i=e=>{let t=ce(rn([[.5,0],[.17,.34],[0,.34]],v.steel,32),h(je(dh(.17,.5,.35,2,.35),v.steel),0,.59),h(U(0,.17,.13,v.steel,24),0,.9));return t.position.y=1.8*e,e<0&&(t.rotation.x=Math.PI),t};return ce(U(.5,.5,3.6,v.knurl),i(1),i(-1))}function Kd(i=v.red){return o1(h(rn([[.6,0],[.9,1],[1,7],[.85,9],[0,9.2]],i),-10.5,0,0))}function Jd(){let i=ch([[0,-1.1],[18,-1.1],[20,-.55],[20,.55],[18,1.1],[0,1.1]]),e=Lt(i,.45,v.file);return h(e,0,0,0,Math.PI/2),ce(e,h(C(3,.3,.5,v.steelDark),-1.5,0,0),Kd())}function T1(){let i=new yt;i.moveTo(-1.1,0),i.lineTo(1.1,0),i.quadraticCurveTo(1.05,.9,0,.95),i.quadraticCurveTo(-1.05,.9,-1.1,0);let e=new Zt(i,{depth:20,steps:20,bevelEnabled:!1,curveSegments:16}),t=e.attributes.position;for(let s=0;s<t.count;s++){let r=t.getZ(s),a=r>15?1-(r-15)/5*.55:1;t.setX(s,t.getX(s)*a),t.setY(s,t.getY(s)*a)}let n=e.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,t.getZ(s)/5,t.getX(s)/2);return e.rotateY(Math.PI/2),e.computeVertexNormals(),ce(h(je(e,v.file),0,-.25,0),h(C(3,.3,.5,v.steelDark),-1.5,0,0),Kd(v.blue))}function A1(){let i=new yt;i.absarc(-5.5,0,3.4,Math.PI/2,Math.PI*1.5,!1),i.lineTo(5.5,-3.4),i.absarc(5.5,0,3.4,-Math.PI/2,Math.PI/2,!1),i.closePath(),i.holes.push(new Wt().absarc(0,0,1.3,0,Math.PI*2,!0));let e=Lt(i,.9,v.iron,.15);h(e,0,.45,0,Math.PI/2);let t=n=>h(rn([[0,0],[1.2,0],[1.5,1.5],[1.3,3],[.7,3.8],[0,3.9]],v.beechDark),n,.9);return ce(e,t(-6),t(6),h(U(.35,.35,7,v.steel),0,4.4),h(U(.75,.75,.6,v.knurl),0,5),h(C(.5,2.6,.5,v.steel),0,-.4),h(C(1.2,.3,.6,v.steel),.4,-1.6))}function jd(){let i=s=>{let r=new yt;r.moveTo(-1,.05*s),r.lineTo(.95,.05*s),r.absarc(1.3,.05*s,.35,Math.PI,0,s<0),r.lineTo(3.8,.05*s),r.lineTo(3.95,.28*s),r.lineTo(2.5,.62*s),r.lineTo(.5,.9*s),r.lineTo(-1,.85*s),r.closePath();let a=ce(Lt(r,.8,v.steelDark));for(let o=0;o<9;o++)a.add(h(C(.07,.09,.8,v.steel),2+o*.2,.06*s,0));return a.add(h(C(.6,.07,.82,v.steelShiny),.6,.05*s,0)),a},e=s=>Kn([[-1,.35*s],[-3.5,1*s],[-6.5,1.5*s],[-9.5,2*s]],.48,v.red),t=ce(h(i(1),0,0,-.2),e(-1)),n=ce(h(i(-1),0,0,.2),e(1));return t.rotation.z=.11,n.rotation.z=-.11,ce(t,n,h(U(.55,.55,1.1,v.steel),0,0,0,Math.PI/2))}function R1(){let i=new se({color:10274536,roughness:.45}),e=a=>{let o=new yt;o.moveTo(1.6,-.3*a),o.lineTo(-9.6,-.04*a),o.quadraticCurveTo(-7.2,2.1*a,-1.6,2*a),o.lineTo(1.4,1.75*a),o.lineTo(3.4,1*a),o.lineTo(3.4,-.3*a),o.closePath();let l=ce(Lt(o,.34,v.steel,.04)),c=new yt;return c.moveTo(-9.4,0),c.lineTo(.8,-.18*a),c.lineTo(.8,.42*a),c.lineTo(-8.6,.32*a),c.closePath(),l.add(h(Lt(c,.02,v.steelShiny),0,0,.2*a)),l.add(h(le(2.2,.62,.06,.25,v.steelDark),-4.6,.95*a,.2*a,0,0,.08*a)),l},t=(a,o)=>{let l=new _n(a.map(([y,g])=>ye(y,g,0)),!1,"centripetal"),c=90,u=.95,d=l.getSpacedPoints(c),f=[],p=[];for(let y=0;y<=c;y++){let g=l.getTangentAt(y/c),x=y>c-12?.75:1;f.push(new me(d[y].x-g.y*u*x/2,d[y].y+g.x*u*x/2)),p.push(new me(d[y].x+g.y*u*x/2,d[y].y-g.x*u*x/2))}let m=new yt([...f,...p.reverse()]);return h(Lt(m,.55,i,.12),0,0,.2*o)},n=t([[2.6,.75],[6,1.15],[12,1.7],[19,2.3],[21.4,2.55],[22.1,2.25],[22.2,1.85]],1),s=t([[2.6,-.75],[6,-1.35],[12,-2.15],[19,-2.95],[21.4,-3.2],[22.1,-2.9],[22.2,-2.45]],-1),r=je(new zt(.55,24,12,0,Math.PI*2,0,Math.PI/2),v.steelShiny);return r.rotation.x=Math.PI/2,r.scale.set(1,.45,1),r.position.set(0,0,.42),ce(h(e(1),0,0,.18),h(e(-1),0,0,-.18),n,s,r,h(U(.5,.5,.1,v.steel),0,0,-.42,Math.PI/2),h(le(.7,1.4,.5,.15,i),4.6,-.15,0),h(U(.12,.12,.9,v.steel),4.6,.45,0,Math.PI/2))}function C1(){let i=le(5,3.2,2.2,.4,v.castGrey);i.position.set(0,0,0);let e=ce(h(U(.6,.45,2,v.steel),3.4,.6,0,0,0,Math.PI/2),h(U(.18,.18,.6,v.steel),4.6,.6,0,0,0,Math.PI/2),h(U(.1,.1,.03,v.black,16),4.91,.6,0,0,0,Math.PI/2)),t=Lt([[-2.2,-1],[-.6,-1],[-2.6,-13],[-4.2,-12.6]],1.8,v.castGrey,.2),n=Lt([[-2.9,-6],[-1.5,-6.3],[-2.6,-13],[-4.2,-12.6]],2.1,v.black,.25),s=Lt([[1.6,1.2],[2.6,.4],[1.8,-12.5],[.3,-12.2]],1.4,v.castGrey,.2),r=Lt([[1.9,-5.8],[1.8,-12.5],[.3,-12.2],[.6,-5.6]],1.7,v.red,.25),a=ce(h(U(.06,.06,2.6,v.steelShiny,12),-1.3,0,0,0,0,Math.PI/2),h(U(.24,.24,.06,v.steel,20),.03,0,0,0,0,Math.PI/2),h(U(.12,.12,.55,v.steel,16),.33,0,0,0,0,Math.PI/2),h(U(.1,.1,.1,v.steel,12),.62,0,0,0,0,Math.PI/2));a.position.set(5,.6,0);let o=ce(i,e,t,n,s,r,h(U(.35,.35,2.6,v.steel),1.8,.9,0,Math.PI/2),a);return o.userData.anim=l=>{let c=l%4/4,u=f=>f*f*(3-2*f),d;c<.3?d=9-4.05*u(c/.3):c<.5?d=4.95:c<.8?d=4.95+4.05*u((c-.5)/.3):d=9,a.position.x=d},o}function xl(i){let e=rn([[.7,0],[1.15,.8],[1.3,4],[1.25,8],[1.05,9.6],[0,9.9]],i?v.red:v.yellowP,8),t;if(i){let n=new ti([[0,-1.2],[.28,-.3],[.28,0]].map(([r,a])=>new me(r,a)),48),s=n.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getZ(r),l=Math.atan2(o,a),c=.32+.68*Math.pow(Math.abs(Math.cos(2*l)),8);s.setX(r,a*c),s.setZ(r,o*c)}n.computeVertexNormals(),t=h(je(n,v.steelDark),0,-12.15,0)}else t=h(C(.55,1.2,.12,v.steelDark),0,-12.6);return ce(e,h(U(.75,.75,.5,v.steel),0,-.1),h(U(.28,.28,12,v.steelDark),0,-6.2),t)}function P1(){let i=new _n([[0,-.19],[17,-.19],[19.2,-.22],[20.2,-.68],[21.3,-1.25],[22.5,-.8],[22.85,0],[22.5,.8],[21.3,1.25],[20.2,.68],[19.2,.22],[17,.19],[0,.19]].map(([l,c])=>ye(l,c,0)),!1,"centripetal"),e=160,t=.34,n=i.getSpacedPoints(e),s=[],r=[];for(let l=0;l<=e;l++){let c=i.getTangentAt(l/e),u=-c.y,d=c.x;s.push(new me(n[l].x+u*t/2,n[l].y+d*t/2)),r.push(new me(n[l].x-u*t/2,n[l].y-d*t/2))}let a=new yt([...s,...r.reverse()]),o=new se({color:3646379,metalness:.25,roughness:.42});return ce(je(new Zt(a,{depth:1.1,bevelEnabled:!1,curveSegments:4}).translate(0,0,-.55),o))}function I1(){let i=ce(h(C(.5,.9,.5,v.steel),0,.8),h(U(.4,.4,2.6,v.steel),0,-1),h(je(dh(.48,4,0,3,.35,.35),v.steel),0,-4.3),h(U(.48,.15,.5,v.steel),0,-6.5,0,0));return ce(i,h(le(2.6,1.8,1.6,.3,v.black),0,.8),h(U(.4,.4,8,v.black),4.9,.8,0,0,0,Math.PI/2),h(U(.4,.4,8,v.black),-4.9,.8,0,0,0,Math.PI/2),h(U(.5,.5,.8,v.steel),0,2,0))}function D1(){let i=new yt;i.absarc(0,0,2.6,0,Math.PI*2,!1),i.holes.push(new Wt().absarc(0,0,1.95,0,Math.PI*2,!0));let e=new yt;e.absarc(0,0,1.95,0,Math.PI*2,!1),e.holes.push(new Wt().absarc(0,0,.55,0,Math.PI*2,!0));for(let n=0;n<4;n++){let s=n*Math.PI/2;e.holes.push(new Wt().absarc(Math.cos(s)*1.05,Math.sin(s)*1.05,.35,0,Math.PI*2,!0))}let t=ce();for(let n=0;n<6;n++)t.add(h(new Ne(new sn(.53,.05,8,24),v.steelDark),0,-.38+n*.15,0,Math.PI/2,0,n*.2));return ce(t,h(Lt(i,1.2,v.steelDark,.1),0,0,0,Math.PI/2),h(Lt(e,.9,v.steel),0,0,0,Math.PI/2),h(U(.42,.42,9,v.knurl),7.2,0,0,0,0,Math.PI/2),h(U(.42,.42,9,v.knurl),-7.2,0,0,0,0,Math.PI/2),h(U(.6,.6,.6,v.steel),2.8,0,0,0,0,Math.PI/2),h(U(.6,.6,.6,v.steel),-2.8,0,0,0,0,Math.PI/2))}function L1(){return ce(rn([[.6,0],[1.1,1.2],[1.25,3.5],[1,6.5],[.5,7.6],[0,7.7]],v.beech),h(U(.5,.5,.4,v.brass),0,-.1),h(rn([[0,-5.8],[.17,-4.6],[.17,0],[0,0]],v.steel,20),0,-.2))}function N1(){return xl(!1)}function U1(){return xl(!0)}function Qd(){let i=ce(h(le(20,9,2,.3,v.viceBlue),0,0,0),h(C(20,9,1,v.beech),0,0,1.5)),e=ce(h(le(20,9,2,.3,v.viceBlue),0,0,0),h(C(20,9,1,v.beech),0,0,-1.5));return e.position.z=6,ce(i,e,h(U(.6,.6,14,v.steel),-6,-2.5,3,Math.PI/2),h(U(.6,.6,14,v.steel),6,-2.5,3,Math.PI/2),h(U(.8,.8,12,v.knurl),0,-2.5,4,Math.PI/2),h(U(.45,.45,16,v.steel),0,-2.5,10.2,0,0,Math.PI/2),h(je(new zt(.75,20,14),v.steel),8.2,-2.5,10.2),h(je(new zt(.75,20,14),v.steel),-8.2,-2.5,10.2),h(U(1.3,1.3,1.6,v.viceBlue),0,-2.5,7.6,Math.PI/2))}function ef(){let i=ce(h(le(9,2,12,.3,v.viceBlue),0,1,0),h(le(6,6,4,.4,v.viceBlue),0,5,-3.5),h(le(6,5,4,.4,v.viceBlue),0,4.5,2.6),h(le(4,1.2,8,.2,v.viceBlue),0,3,1));i.add(h(C(10,2.4,.4,v.steelDark),0,6.9,-1.3),h(C(10,2.4,.4,v.steelDark),0,6.9,.4),h(le(10,.8,4,.2,v.viceBlue),0,7.8,-3.5),h(le(10,.8,4,.2,v.viceBlue),0,7.5,2.6)),i.add(h(U(.5,.5,4,v.steel),0,3,6,Math.PI/2),h(U(.35,.35,11,v.steel),0,3,8,0,0,Math.PI/2),h(je(new zt(.6,16,12),v.steel),5.6,3,8),h(je(new zt(.6,16,12),v.steel),-5.6,3,8),h(le(6,1,2,.3,v.viceBlue),0,8.5,-4.2));let e=C(13,1.6,15,v.beech);e.position.y=-.8;let t=C(12,3,3.4,v.beechDark);t.position.set(0,-3.1,5.8),i.add(e,t);for(let[n,s]of[[-5.2,-6],[5.2,-6],[-5.2,6],[5.2,6]])i.add(h(U(.35,.35,.08,v.brass),n,.03,s));return i}function F1(){let i=t=>{let n=new yt;return n.moveTo(-1.5,-1.5),n.lineTo(1.5,-1.5),n.lineTo(1.5,1.5),n.lineTo(-1.5,1.5),n.closePath(),n.holes.push(new Wt().absarc(t>0?.3:-.3,0,.6,0,Math.PI*2,!0)),h(Lt(n,1,v.castGrey,.12),t,.5,0,Math.PI/2)},e=ce(h(le(9,2,16,.3,v.castGrey),0,1,0),i(6),i(-6),h(le(9,4,2.4,.3,v.castGrey),0,4,-6),h(le(9,3.6,2.8,.3,v.castGrey),0,3.8,0));return e.add(h(C(8.6,2.2,.3,v.steelDark),0,4.6,-4.7),h(C(8.6,2.2,.3,v.steelDark),0,4.6,-1.5),h(U(.5,.5,9,v.steel),0,2.6,4.6,Math.PI/2),h(U(.3,.3,6,v.steel),0,2.6,9,0,0,Math.PI/2),h(U(.45,.45,1.4,v.black),3.4,2.6,9,0,0,Math.PI/2)),e}function O1(){let i=t=>{let n=ce(Lt([[0,0],[.85*t,0],[1*t,7.6],[1.75*t,8.2],[1.75*t,10.2],[0,10.2]],1.3,v.blackMetal,.08),h(le(1.75,2,2.3,.12,v.blackMetal),.875*t,9.2,0),h(C(.12,1.8,2.1,v.knurl),.04*t,9.2,0));return n.rotation.z=-.09*t,n},e=ce(h(U(.55,.55,.7,v.blackMetal),2.4,5.2,0,0,0,Math.PI/2),h(Lt([[0,0],[.4,1.6],[.9,1.8],[.9,-1.8],[.4,-1.6]],.25,v.blackMetal),2.7,5.2,0,0,Math.PI/2,0));return ce(h(i(1),.08,0,0),h(i(-1),-.08,0,0),h(U(.22,.22,4.8,v.steelDark),0,5.2,0,0,0,Math.PI/2),e,h(U(.55,.55,1.6,v.blackMetal),0,.5,0,Math.PI/2),h(Kn([[-1.2,2],[-1.8,3.5],[-1.2,4.8]],.12,v.steelDark),0,0,0))}function k1(){let i=new yt;i.moveTo(-2,8),i.lineTo(4,8),i.lineTo(4,6.6),i.lineTo(-.6,6.6),i.quadraticCurveTo(-1.2,6.6,-1.2,5.8),i.lineTo(-1.2,-5.8),i.quadraticCurveTo(-1.2,-6.6,-.6,-6.6),i.lineTo(4,-6.6),i.lineTo(4,-8),i.lineTo(-2,-8),i.quadraticCurveTo(-3,-8,-3,-7),i.lineTo(-3,7),i.quadraticCurveTo(-3,8,-2,8);let e=ce(h(U(.4,.4,13,v.steel),0,-3.6),h(U(.9,.7,.5,v.steelDark),0,2.9),h(U(.3,.3,6,v.steel),0,-10.4,0,0,0,Math.PI/2),h(je(new zt(.45,14,10),v.steel),3,-10.4,0),h(je(new zt(.45,14,10),v.steel),-3,-10.4,0));e.position.x=2.6;let t=ce(Lt(i,1.4,v.red,.15),e);return t.userData.screw=e,t}function B1(){let i=ce(h(C(48,.7,2.6,v.viceBlue),0,0,0),h(C(48,2.4,.6,v.viceBlue),0,-1.1,0)),e=ce(h(le(3,6,3.4,.3,v.viceBlue),22.5,1.8,0),h(U(.45,.45,7,v.steel),19.5,2.8,0,0,0,Math.PI/2),h(le(1.4,3.6,2.8,.2,v.steelDark),15.5,2.8,0),h(U(.25,.25,5,v.steel),24.5,2.8,0,Math.PI/2)),t=ce(h(le(3,6,3.4,.3,v.viceBlue),-14,1.8,0),h(U(.25,.25,4.4,v.steel),-14,-1,0,Math.PI/2));return ce(i,e,t)}function H1(){let i=ce(),e=new se({color:2768814,roughness:.38}),t=new se({color:15909166,roughness:.45}),n=v.black,s=new se({color:2829617,metalness:.5,roughness:.45}),r=new se({color:9278620,metalness:.8,roughness:.35});i.add(h(C(.5,30,1.9,s),0,15,0));let a=ce(h(le(2.6,3.4,3.2,.5,e),0,-.2,.2),h(le(2.4,2.2,1.6,.4,n),0,-.4,1.7),h(le(2.4,1.8,7.4,.6,e),0,.6,-4.6),h(le(2.4,2.6,2.2,.6,e),0,1.4,-8.1),h(le(2.2,1.2,3.6,.3,e),0,1.8,-3.2,-.55,0,0),h(le(1.1,.5,1.1,.2,t),0,2.5,-7.3),h(le(3.2,.9,3.2,.35,n),0,2.9,-8.6)),o=f=>h(le(.08,2.6,3.4,.03,t),f,.4,-.6),l=ce(h(le(2.8,4.2,6.4,.6,e),0,.2,-.9),o(1.42),o(-1.42),h(le(2.4,1.8,4.6,.5,e),0,-.4,-5.6),h(le(3.2,.9,3.2,.35,n),0,-1.2,-8.4)),c=ce(h(le(2.1,2.2,7.4,.8,e),0,.5,3.7),h(le(2.2,1.4,6.2,.6,n),0,-.6,4.2));c.position.set(0,.6,1.6),c.rotation.x=-.28;let u=ce(h(le(.9,.55,4.6,.25,r),0,0,2.3));u.position.set(0,-1.9,1.9),u.rotation.x=-.12;let d=ce(l,c,u);return d.position.y=18,i.add(a,d),i.userData.mov=d,i}var ps=new se({color:13225683,metalness:.7,roughness:.35});function z1(){return ce(h(C(10.4,2.6,.14,ps),0,6.85,-1.03),h(C(10.4,.14,2.2,ps),0,8.27,-2.06),h(C(10.4,2.6,.14,ps),0,6.85,.13),h(C(10.4,.14,2.2,ps),0,8.17,1.16))}function G1(){let i=ef();i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{let r=s.clone();return r.transparent=!0,r.opacity=.18,r.depthWrite=!1,r}),n.castShadow=!1)});let e=z1(),t=ce(i,e);return t.userData.anim=n=>{let s=n%4/4,r=a=>a*a*(3-2*a);e.position.y=s<.35?6*(1-r(s/.35)):s<.65?0:s<.9?6*r((s-.65)/.25):6},t}var ne={green:new se({color:3107669,metalness:.35,roughness:.45}),grey:new se({color:7306631,metalness:.45,roughness:.45}),blue:new se({color:3104655,metalness:.35,roughness:.45}),cream:new se({color:14275263,metalness:.25,roughness:.5}),orange:new se({color:15234346,metalness:.25,roughness:.42}),yellow:new se({color:15909166,metalness:.2,roughness:.45}),dark:new se({color:2764082,metalness:.4,roughness:.5}),glass:new se({color:2240576,metalness:.6,roughness:.12,transparent:!0,opacity:.75}),clear:new se({color:13625077,metalness:.1,roughness:.05,transparent:!0,opacity:.28,depthWrite:!1}),grit:new se({map:ms((i,e)=>{i.fillStyle="#4a3b2c",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++)i.fillStyle=Math.random()<.5?"#2c2219":"#6b5843",i.fillRect(Math.random()*e,Math.random()*e,1.6,1.6)},256,[4,1]),roughness:.95}),red:new se({color:13772334,roughness:.4}),machRed:new se({color:11874350,metalness:.35,roughness:.45}),lightOrange:new se({color:15902821,metalness:.25,roughness:.5}),chevron:new se({map:(()=>{let i=document.createElement("canvas");i.width=256,i.height=32;let e=i.getContext("2d");e.fillStyle="#1b1b1d",e.fillRect(0,0,256,32),e.fillStyle="#f2c12e";for(let n=-2;n<12;n++)e.beginPath(),e.moveTo(n*28,32),e.lineTo(n*28+14,32),e.lineTo(n*28+30,0),e.lineTo(n*28+16,0),e.fill();let t=new Rn(i);return t.colorSpace=Yt,t})(),roughness:.5}),glow:new se({color:16734762,emissive:16726544,emissiveIntensity:1.2,roughness:.6}),powder:new se({map:ms((i,e)=>{i.fillStyle="#e9eef2",i.fillRect(0,0,e,e);for(let t=0;t<4e3;t++)i.fillStyle=Math.random()<.5?"#cfd8df":"#ffffff",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,1.2,0,7),i.fill()},256,[2,2]),roughness:.9})},rr=(i,e=v.steel,t=3)=>{let n=ce(h(new Ne(new sn(i,i*.09,10,36),e),0,0,0),h(U(i*.18,i*.18,i*.3,e),0,0,0,Math.PI/2));for(let s=0;s<t;s++){let r=s*2*Math.PI/t;n.add(h(C(i,i*.08,i*.08,e),Math.cos(r)*i/2,Math.sin(r)*i/2,0,0,0,r))}return n.add(h(U(i*.09,i*.09,i*.5,v.black),Math.cos(.3)*i,Math.sin(.3)*i,i*.25,Math.PI/2)),n},V1=i=>ce(h(U(.45,.45,i,v.steel),0,i/2,0),h(je(new zt(1.1,18,12),v.black),0,i+.6,0)),Jn=()=>ce(h(U(1.4,1.4,1,ne.yellow),0,0,0,Math.PI/2),h(je(new zt(1.5,20,12,0,Math.PI*2,0,Math.PI/2),ne.red),0,0,.5,Math.PI/2));function tf(){let i=new yt;i.absarc(0,25,7,0,Math.PI,!1),i.absarc(0,-25,7,Math.PI,2*Math.PI,!1),i.holes.push(new Wt().absarc(0,-25,6.4,0,-Math.PI,!0).absarc(0,25,6.4,Math.PI,0,!0));let e=Lt(i,15,ne.grit);return e.position.set(0,85,-4),e.rotation.y=-Math.PI/2,ce(h(C(44,3,40,ne.dark),0,1.5,0),h(le(40,48,36,1.5,ne.grey),0,27,0),h(le(30,36,1,.6,ne.grey),0,27,18.2),h(C(1,8,1.4,v.steelShiny),11,30,19),h(le(16,66,8,1,ne.grey),0,83,-16),e,h(U(6.2,6.2,15.4,v.steel,32),0,60,-4,0,0,Math.PI/2),h(U(6.2,6.2,15.4,v.steel,32),0,110,-4,0,0,Math.PI/2),h(le(15,46,7,.6,v.steelDark),0,85,-4),h(U(8,8,20,ne.yellow,28),-18,60,-4,0,0,Math.PI/2),h(le(20,11,22,1.2,ne.grey),0,116,-4),h(C(1,9,13,ne.grey),9.6,104,-4),h(C(1,9,13,ne.grey),-9.6,104,-4),h(le(30,2,20,.6,v.steel),0,58,13.6),h(C(.8,.1,18,ne.dark),6,59.05,13.6),h(le(6,7,8,.8,ne.grey),0,53.5,9),h(C(19,48,.6,v.steel),0,87,4.4),h(C(.6,48,8,v.steel),9.6,87,.7),h(C(.6,48,8,v.steel),-9.6,87,.7),(()=>{let t=new Ne(new Pn(19,3.2),ne.chevron);return t.position.set(0,64.7,4.72),t})(),h(wi(),-4,44,18.6),h(Jn(),8,44,18.6))}ne.go=new se({color:3126106,roughness:.4});var wi=()=>ce(h(le(7,3.6,1.6,.4,v.black),0,0,0),h(U(1,1,.8,ne.go),-1.6,0,1,Math.PI/2),h(U(1,1,.8,ne.red),1.6,0,1,Math.PI/2));function nf(){let i=new yt;i.moveTo(-15,-14),i.lineTo(15,-14),i.lineTo(15,14),i.lineTo(-15,14),i.closePath();for(let a of[-6.3,6.3]){let o=new Wt;o.moveTo(a+.65,-4.5),o.lineTo(a+.65,4.5),o.absarc(a,4.5,.65,0,Math.PI,!1),o.lineTo(a-.65,-4.5),o.absarc(a,-4.5,.65,Math.PI,2*Math.PI,!1),i.holes.push(o)}let e=ce(h(le(40,5,32,1,ne.grey),0,2.5,0),h(U(3.6,3.6,110,v.steel,28),0,58,-9),h(Lt(i,2.6,ne.grey,.3),0,46,3,-Math.PI/2),h(le(10,6,10,1,ne.grey),0,43,-8),h(U(.6,.6,6,v.steel),7,43,-8,0,0,Math.PI/2),h(le(24,22,40,2,ne.machRed),0,100,0),h(le(18,4,32,1.5,ne.machRed),0,112,-2),h(U(8,8,24,ne.machRed,28),0,98,-28,Math.PI/2),h(U(2.4,2.4,10,v.steel),0,84,10),h(rn([[2.2,0],[2.2,4],[1.6,5.5],[.9,6.2],[0,6.3]].reverse().map(([a,o])=>[a,-o]),v.steelShiny,28),0,79,10),h($d(),0,75.5,10,Math.PI)),t=ce(h(U(1.8,1.8,2.2,v.steelDark),0,0,0,0,0,Math.PI/2));for(let a=0;a<3;a++){let o=V1(13);o.rotation.x=.5+a*2*Math.PI/3,t.add(o)}t.position.set(17.2,95,6),e.add(h(U(1,1,4.4,v.steel),14.2,95,6,0,0,Math.PI/2),t);let n=-8,s=22.5,r=Math.hypot(n,s-10);return e.add(h(U(3,3,1.4,v.steelDark),0,86,10),h(C(r,1.2,1.4,v.steelDark),n/2,86,(10+s)/2,0,Math.atan2(-(s-10),n),0),h(U(.38,.38,19,v.knurl),n,95.5,s),h(C(3.6,1.6,4.6,ne.machRed),n,96,22),h(U(1,1,.8,v.brass,6),n,97.3,s),h(U(1,1,.8,v.brass,6),n,98.3,s),h(C(.2,9,1.6,v.steelShiny),n-2.2,94,20.2)),e.add(h(Jn(),6,104,20.4),h(wi(),-12.4,101,6,0,-Math.PI/2,0),h(new Ne(new Tt(5,5,12,28,1,!0),ne.clear),0,80,10)),e}function sf(){return ce(h(le(26,8,56,2,ne.blue),0,4,0),h(le(20,24,10,2,ne.blue),0,18,-22),h(le(9,8,44,2,ne.blue),0,31,-3),h(le(4,6,6,.8,ne.blue),0,31,22),h(U(1.2,1.2,2,v.black),0,36,-23),h(le(28,2,30,.8,v.steel),0,20,14),h(le(6,11,6,1,ne.blue),0,13.5,14),h(U(1.4,1.4,.1,v.black),0,21.05,22),h(U(.06,.06,18,v.steelShiny,8),0,19,22),h(U(.35,.35,6.3,v.steel),1.2,24.85,22),h(C(2.6,.3,1.6,v.steel),1.2,21.55,22.4),h(C(3.8,6,.2,ne.clear),0,25,24.8),h(C(.2,6,3.6,ne.clear),1.9,25,23),h(C(.2,6,3.6,ne.clear),-1.9,25,23),h(Kn([[-1.5,30,22],[-3,27,25],[-.8,23,23.5]],.3,ne.clear),0,0,0),h(U(7,7,14,ne.dark,24),8,12,-18,0,0,Math.PI/2),h(wi(),0,4,28.4),h(Jn(),8,4,28.4))}function rf(){let i=ce(h(le(24,40,30,1.5,ne.cream),-34,20,0),h(le(24,40,30,1.5,ne.cream),34,20,0),h(le(96,4,34,1,ne.dark),0,42,-2),h(le(92,10,20,1,ne.cream),0,49,0),h(C(92,1,2,v.steelShiny),0,54.5,-6),h(C(92,1,2,v.steelShiny),0,54.5,6),h(le(28,30,26,2,ne.cream),-34,69,0),h(U(1.8,1.8,1.4,ne.dark),-26,78,13.2,Math.PI/2),h(U(1.8,1.8,1.4,ne.dark),-38,78,13.2,Math.PI/2),h(U(8,8,7,v.steel,36),-16.5,66,0,0,0,Math.PI/2),h(U(.6,.6,90,v.steel),0,46,10.5,0,0,Math.PI/2));for(let n=0;n<3;n++){let s=n*2*Math.PI/3;i.add(h(C(3,2.2,2.6,v.steelDark),-12.5,66+Math.cos(s)*5.6,Math.sin(s)*5.6,s,0,0))}i.add(h(U(1.6,1.6,10,v.brass),-7.5,66,0,0,0,Math.PI/2));let e=ce(h(le(16,6,24,.8,ne.cream),0,57,0),h(le(16,12,4,.8,ne.cream),0,49,12.5),h(le(10,3,14,.6,ne.cream),0,61.5,5),h(le(6,3,7,.5,ne.cream),0,64.5,7),h(le(4.4,4,4.4,.4,v.steelDark),0,68,8),h(C(1,1,5,v.steel),0,67.6,5),h(rr(3.4),3,49,17.6),h(rr(2.4),0,61.5,15.4),h(U(.4,.4,3,v.steel),3,49,15.6,Math.PI/2),h(U(.35,.35,3.4,v.steel),0,61.5,13.4,Math.PI/2));e.position.x=8,i.add(e);let t=ce(h(le(14,18,14,1.2,ne.cream),0,64,0),h(U(1.8,1.8,8,v.steel),-9,66,0,0,0,Math.PI/2),h(U(0,.6,2.4,v.steelShiny),-14,66,0,0,0,Math.PI/2),h(rr(3.6),9,66,0));return t.children[3].rotation.y=Math.PI/2,t.position.x=34,i.add(t,h(Jn(),-24,72,13.4),h(wi(),-34,63,13.4)),i}function af(){let i=ce(h(le(6,40,30,1,ne.green),-40,20,0),h(le(6,40,30,1,ne.green),40,20,0),h(C(86,3,6,ne.green),0,42,-4),h(C(86,3,6,ne.green),0,42,4),h(le(18,22,18,2,ne.green),-34,54,0),h(U(7,7,18,ne.dark,28),-34,54,-16,Math.PI/2),h(U(1.4,1.4,6,v.steel),-22,58,0,0,0,Math.PI/2),h(U(2.6,2.6,1,v.steel,28),-19.5,58,0,0,0,Math.PI/2));for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;i.add(h(C(.6,.5,.5,v.steelShiny),-18.8,58+Math.cos(r)*1.6,Math.sin(r)*1.6))}let e=ce(h(le(12,16,12,1.2,ne.green),0,51,0),h(U(1.4,1.4,6,v.steel),-7,58,0,0,0,Math.PI/2),h(U(0,1,2,v.steelShiny),-10.5,58,0,0,0,Math.PI/2),h(rr(6.8,v.black),8,58,0));e.children[3].rotation.y=Math.PI/2,e.position.x=29;let t=h(C(37,5,5,v.beech),-.5,58,0),n=ce(h(le(6,3,14,.6,v.steelDark),0,45,6),h(U(.9,.9,9.5,v.steel),0,51.25,4.4),h(C(26,1.2,1.4,v.steel),0,56.6,4.4),h(U(.6,.6,3,v.black),3,46,13,Math.PI/2));return ce(i,e,t,n,h(Jn(),-34,60,9.4),h(wi(),-34,50,9.4))}function of(){let i=ce(h(U(1.8,1.8,2.4,v.steelDark),0,0,0,0,0,Math.PI/2),h(U(.8,.8,22,v.steel),1.2,6,9.5,1.1,0,0),h(je(new zt(2.2,18,12),v.black),1.2,11.2,19.4));return i.position.set(8.6,62,0),ce(h(le(34,5,30,1,ne.grey),0,2.5,0),h(le(6,5,8,.8,ne.grey),0,7.5,4),h(le(30,3,22,.8,v.steel),0,10.5,4),h(le(30,6,2,.5,v.steel),0,15,1),h(C(26,6,4,v.beech),0,15,4),h(le(18,6,1.6,.4,v.steel),0,15,6.8),h(le(6,6,2,.5,ne.grey),0,15,14),h(U(.6,.6,7,v.steel),0,15,11,Math.PI/2),h(rr(3),0,15,15.6),h(le(2,5,6,.4,ne.grey),17,5,4),h(U(.8,.8,6,v.steel),20,5,4,0,0,Math.PI/2),h(rr(5.4),23.2,5,4,0,Math.PI/2,0),h(U(3,3,70,v.steel,24),0,40,-11),h(le(14,18,14,1.5,ne.orange),0,56,-3),h(U(6.5,6.5,22,ne.orange,28),0,74,-3),h(le(10,4,10,1,ne.dark),0,86,-3),h(le(6,5,6,.6,ne.grey),0,47,4),h(C(1.6,8.5,1.6,v.steelShiny),0,40.25,4),h(C(1.65,2.4,.8,ne.dark),0,41.5,4),h(U(1.13,.85,.6,v.steelShiny,4),0,35.7,4,0,Math.PI/4,0),h(U(.6,.6,2,v.steelDark),0,34.9,4),h(U(.6,0,1,v.steelShiny),0,33.4,4),h(C(.3,15,3,v.black),7.05,56,0),i,h(C(4,1.6,4,ne.orange),-9,48,-3),h(U(.38,.38,11.3,v.knurl),-9,41.85,-3),h(U(1,1,.8,v.brass,6),-9,46.6,-3),h(U(1,1,.8,v.brass,6),-9,45.6,-3),h(U(4,4,2.4,ne.grey),0,15.6,-11),h(C(12,1.6,2,ne.grey),-4.5,15.6,-7,0,Math.atan2(-8,-9)+Math.PI,0),h(C(3.4,1.2,3.4,v.steelDark),-9,16.8,-3),h(Jn(),0,60,4.2),h(wi(),-7.2,56,-3,0,-Math.PI/2,0))}function lf(){let i=new se({map:ms((M,R)=>{M.fillStyle="#b8323a",M.fillRect(0,0,R,R);for(let T=0;T<5e3;T++)M.fillStyle=Math.random()<.5?"#952630":"#d9545b",M.fillRect(Math.random()*R,Math.random()*R,1.4,1.4)},256,[3,3]),roughness:.95}),e=14,t=31.2,n=new Ne(new Pn(31,25,28,22),i);n.rotation.x=-Math.PI/2,n.position.set(e,t,0);let s=n.geometry.attributes.position,r=s.array.slice(),a=ce(h(le(36,1.2,30,.5,ne.lightOrange),0,.6,15),h(C(10,1,1.2,v.black),0,1.5,29.2));a.position.set(e,34,-15),a.rotation.x=-1.85;let o=ce(h(C(80,4,36,ne.dark),-3,2,0),h(le(36,26,30,1.2,ne.lightOrange),e,17,0),h(C(36,4,2.5,ne.lightOrange),e,32,13.75),h(C(36,4,2.5,ne.lightOrange),e,32,-13.75),h(C(2.5,4,25,ne.lightOrange),e-16.75,32,0),h(C(2.5,4,25,ne.lightOrange),e+16.75,32,0),h(C(31,.1,25,ne.dark),e,30.05,0),n,a,h(U(.5,.5,34,v.steel),e,34,-15,0,0,Math.PI/2),h(le(30,40,30,1.5,ne.lightOrange),-20,24,0),h(le(24,26,1.4,.8,ne.lightOrange),-20,23,15.6),h(C(14,8,.4,ne.glass),-20,27,16.4),h(C(12,.6,.3,ne.glow),-20,25.5,16.1),h(U(.7,.7,10,v.steelShiny),-10,23,17.8),h(C(1,1,1.6,v.steelShiny),-10,27.5,16.9),h(C(1,1,1.6,v.steelShiny),-10,18.5,16.9),h(U(1.6,1.6,1,v.black),-28,40,15.4,Math.PI/2),h(U(.7,.7,.6,ne.red),-23,40,15.3,Math.PI/2),h(wi(),e,12,15.4),h(le(8,7,8,1,ne.blue),42,3.5,6),h(Kn([[42,7,6],[42,10,2],[37,8,1],[32,8,1]],.7,v.black),0,0,0)),l=1400,c=new Wn(new zt(.13,5,3),new se({roughness:.8}),l),u=new Ut,d=[];for(let M=0;M<l;M++)d.push([e+(Math.random()-.5)*30,(Math.random()-.5)*24,Math.random()*9,.6+Math.random()*1.6,.3+Math.random()*Math.random()*4.2,Math.random()*6]),c.setColorAt(M,new ut().setHSL(.99+Math.random()*.02,.62,.4+Math.random()*.22));let f=document.createElement("canvas");f.width=f.height=64;let p=f.getContext("2d"),m=p.createRadialGradient(32,32,0,32,32,32);m.addColorStop(0,"rgba(230,90,95,.9)"),m.addColorStop(1,"rgba(230,90,95,0)"),p.fillStyle=m,p.fillRect(0,0,64,64);let y=160,g=new Float32Array(y*3),x=[];for(let M=0;M<y;M++)x.push([e+(Math.random()-.5)*28,(Math.random()-.5)*22,Math.random()*9,.3+Math.random()*.6]);let b=new Vt;b.setAttribute("position",new wn(g,3));let w=new Cr(b,new Bs({map:new Rn(f),size:5,transparent:!0,opacity:.28,depthWrite:!1,sizeAttenuation:!0}));return o.add(c,w),o.userData.anim=M=>{for(let R=0;R<s.count;R++){let T=r[R*3],_=r[R*3+1];s.setZ(R,.05*Math.sin(T*2.3+M*7)+.04*Math.sin(_*2.9-M*6.3))}s.needsUpdate=!0,n.geometry.computeVertexNormals(),d.forEach(([R,T,_,E,B,P],N)=>{let H=.5-.5*Math.cos(M*E*2.2+_);u.position.set(Math.min(e+15.2,Math.max(e-15.2,R+.9*Math.sin(M*E+P))),t+.15+B*H+.25*Math.abs(Math.sin(M*9*E+_)),Math.max(-12,Math.min(12,T+.9*Math.cos(M*E*.8+P)))),u.updateMatrix(),c.setMatrixAt(N,u.matrix)}),c.instanceMatrix.needsUpdate=!0,x.forEach(([R,T,_,E],B)=>{g[B*3]=R+1.5*Math.sin(M*E+_),g[B*3+1]=t+1+2*(.5-.5*Math.cos(M*E*1.3+_)),g[B*3+2]=T+1.5*Math.cos(M*E*.9+_)}),b.attributes.position.needsUpdate=!0},o.userData.anim(0),o}function cf(){ne.wire=new se({color:16723992,emissive:16718336,emissiveIntensity:1.4,roughness:.5});let i=ce(h(U(.09,.09,60,ne.wire,8),0,9.3,-6.6,0,0,Math.PI/2),h(U(.09,.09,60,ne.wire,8),0,9.3,-5.4,0,0,Math.PI/2)),e=ce(h(C(62,.4,6.4,v.black),0,1.4,3.2),h(C(62,1.4,.3,v.black),0,.7,6.3),h(C(.3,1.4,6.4,v.black),-30.85,.7,3.2),h(C(.3,1.4,6.4,v.black),30.85,.7,3.2));e.position.set(0,9.6,-9.2);let t=ce(h(le(70,3,22,.8,v.black),0,1.5,0),h(le(66,6,18,.8,ne.yellow),0,6,0),h(C(64,.5,11,ps),0,9.25,2.5),h(C(62,.2,2.6,ne.dark),0,9.1,-6),h(C(62,.6,1.6,ps),0,9.3,-3.9),h(C(62,.6,1.6,ps),0,9.3,-8.1),i,e,h(U(.35,.35,62,v.steel),0,9.6,-9.2,0,0,Math.PI/2),h(le(4,9,20,.6,v.black),-34,5,0),h(le(4,9,20,.6,v.black),34,5,0),h(le(5,3,3,.4,v.black),-30,6,10.2),h(U(.6,.6,.6,ne.red),-30,6,11.8,Math.PI/2),h(Kn([[-36,4,-6],[-42,3,-10],[-50,1,-12]],.4,v.black),0,0,0)),n=s=>s*s*(3-2*s);return t.userData.anim=s=>{ne.wire.emissiveIntensity=1.5+1.1*Math.sin(s*4);let r=s%7/7;e.rotation.x=-Math.PI*.97*(r<.35?1:r<.47?1-n((r-.35)/.12):r<.8?0:n((r-.8)/.12>1?1:(r-.8)/.12))},t.userData.anim(0),t}ne.copper=new se({color:13136954,metalness:.9,roughness:.3});function W1(){let i=new se({color:15909166,metalness:.25,roughness:.45}),e=new se({color:1908257,metalness:.35,roughness:.5}),t=new se({color:16773824,emissive:16765562,emissiveIntensity:3,transparent:!0,opacity:0}),n=ce(h(le(24,3,30,1,e),0,1.5,-4),h(le(22,17,24,1.2,i),0,11,-6),h(le(22.6,3,24.6,1,e),0,20.5,-6),h(C(.3,9,16,e),11.2,11,-6),h(C(.3,9,16,e),-11.2,11,-6),h(le(12,7,1.4,.5,e),0,12,6.2),h(U(1.6,1.6,1,v.steelShiny),-3,12.5,7.2,Math.PI/2),h(Jn(),3.4,12.5,7.2),h(U(1.4,1.4,24,v.steelShiny),0,7,14,Math.PI/2),h(U(2,2,4,v.steelShiny),0,7,26),h(U(1,1,4,ne.copper),0,10.6,26),h(U(.3,1,1.4,ne.copper),0,13.2,26),h(C(.6,.25,10,v.steel),0,14,25)),s=new nt;s.position.set(0,24,-8),n.add(s),s.add(h(C(5,4,6,v.steel),0,0,0),h(U(1.4,1.4,34,v.steelShiny),0,0,17,Math.PI/2),h(U(2,2,4,v.steelShiny),0,0,34),h(U(1,1,4,ne.copper),0,-3.6,34),h(U(1,.3,1.4,ne.copper),0,-6.2,34),h(U(.7,.7,30,v.steelShiny),0,7.5,13,1.1,0,0),h(U(1.4,1.4,7,e),0,15.8,29.5,1.1,0,0));let r=h(je(new zt(.7,12,8),t),0,14.3,26);return n.add(r),n.userData.anim=a=>{let o=a%4/4,l=d=>d*d*(3-2*d),c=o<.3?l(o/.3):o<.6?1:o<.85?1-l((o-.6)/.25):0;s.rotation.x=.012+.09*c;let u=o>.32&&o<.5?Math.abs(Math.sin((o-.32)*60)):0;t.opacity=u,r.scale.setScalar(.6+u)},n}function X1(i=104,e=72){let t=new se({color:9076594,roughness:.8}),n=new se({color:3948614,metalness:.5,roughness:.4}),s=new yt;s.moveTo(0,0),s.lineTo(i,0),s.lineTo(0,i),s.closePath();let r=Lt(s,3,t);r.rotation.x=Math.PI/2,r.position.y=e-1.5;let a=ce(r);for(let[o,l]of[[4,4],[i-8,4],[4,i-8]])a.add(h(C(3,e-3,3,n),o,(e-3)/2,l));return a.add(h(C(i-14,2,2,n),i/2-3,14,4),h(C(2,2,i-14,n),4,14,i/2-3)),a}var Gi=new se({color:12856110,metalness:.35,roughness:.32}),Si=new se({color:9313055,metalness:.25,roughness:.5}),ir=new se({color:15264494,metalness:1,roughness:.18}),q1=new se({color:1908e3,roughness:.6});function hf(i,e=0){let t=new nt;t.add(i),i.updateMatrixWorld(!0);let n=new Ht().setFromObject(i).getSize(ye(0,0,0));n.z<=n.x&&n.z<=n.y?i.rotation.x=-Math.PI/2:n.x<=n.y&&n.x<=n.z&&(i.rotation.z=Math.PI/2);let s=new nt;s.add(t),t.rotation.y=e,s.updateMatrixWorld(!0);let r=new Ht().setFromObject(t),a=r.getCenter(ye(0,0,0));return t.position.set(-a.x,-r.min.y,-a.z),s}function Y1(i){let e=r=>{let a=new yt;return r.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.closePath(),a},t=r=>{let a=new Wt;return r.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.closePath(),a},n,s=5;switch(i){case"T":n=e([[0,6],[0,7],[5,7],[5,6],[3,6],[3,0],[2,0],[2,6]]);break;case"O":{n=new yt;let r=2.2;n.moveTo(r,0),n.lineTo(5-r,0),n.absarc(5-r,r,r,-Math.PI/2,0),n.lineTo(5,7-r),n.absarc(5-r,7-r,r,0,Math.PI/2),n.lineTo(r,7),n.absarc(r,7-r,r,Math.PI/2,Math.PI),n.lineTo(0,r),n.absarc(r,r,r,Math.PI,Math.PI*1.5);let a=new Wt,o=1.3;a.moveTo(1+o,1),a.absarc(1+o,1+o,o,-Math.PI/2,-Math.PI,!0),a.lineTo(1,6-o),a.absarc(1+o,6-o,o,Math.PI,Math.PI/2,!0),a.lineTo(4-o,6),a.absarc(4-o,6-o,o,Math.PI/2,0,!0),a.lineTo(4,1+o),a.absarc(4-o,1+o,o,0,-Math.PI/2,!0),n.holes.push(a);break}case"L":n=e([[0,0],[4.5,0],[4.5,1],[1,1],[1,7],[0,7]]),s=4.5;break;case"I":n=e([[0,0],[1.1,0],[1.1,7],[0,7]]),s=1.1;break;case"B":n=e([[0,0],[3.8,0],[5,1.2],[5,2.7],[4.2,3.5],[5,4.3],[5,5.8],[3.8,7],[0,7]]),n.holes.push(t([[1,1],[1,3],[3.6,3],[4,2.6],[4,1.4],[3.6,1]]),t([[1,4],[1,6],[3.6,6],[4,5.6],[4,4.4],[3.6,4]]));break;case"R":n=e([[0,0],[1,0],[1,3],[2.6,3],[4,0],[5.2,0],[3.7,3.15],[4.2,3.5],[5,4.3],[5,5.8],[3.8,7],[0,7]]),n.holes.push(t([[1,4],[1,6],[3.6,6],[4,5.6],[4,4.4],[3.6,4]])),s=5.2;break;case"A":n=e([[0,0],[1.15,0],[1.6,1.8],[3.4,1.8],[3.85,0],[5,0],[3.05,7],[1.95,7]]),n.holes.push(t([[1.9,2.8],[2.5,5.2],[3.1,2.8]]));break;case"Y":n=e([[0,7],[1.2,7],[2.5,4.4],[3.8,7],[5,7],[3,3.2],[3,0],[2,0],[2,3.2]]);break;default:return{s:null,w:3}}return{s:n,w:s}}function Z1(i,e,t,n=.35){let s=new nt,r=0,a=e/7;for(let l of i){let{s:c,w:u}=Y1(l);if(c){let d=new Ne(new Zt(c,{depth:n/a,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:2}),t);d.position.x=r,s.add(d)}r+=u+1.1}s.scale.setScalar(a);let o=new nt;return s.position.x=-(r-1.1)*a/2,o.add(s),o}var $1=new se({color:1315862,metalness:.4,roughness:.35});function K1(i="TOOL LIBRARY"){let r=new nt,a=ce(h(le(46,1.2,22,.5,Gi),0,.6,0),h(le(46,20,.8,.3,Gi),0,20/2,22/2-.8/2),h(le(46,20,.8,.3,Gi),0,20/2,-22/2+.8/2),h(le(.8,20,22,.3,Gi),46/2-.8/2,20/2,0),h(le(.8,20,22,.3,Gi),-46/2+.8/2,20/2,0),h(C(46-2*.8,.2,22-2*.8,Si),0,1.25,0),h(C(46-2*.8,18,.1,Si),0,20/2,-22/2+.8+.05),h(C(46-2*.8,18,.1,Si),0,20/2,22/2-.8-.05),h(C(.1,18,22-2*.8,Si),46/2-.8-.05,20/2,0),h(C(.1,18,22-2*.8,Si),-46/2+.8+.05,20/2,0)),o=Z1(i,3.6,$1);o.position.set(0,20*.5,22/2+.02),a.add(o);for(let m of[-1,1])a.add(h(C(3,4,.8,ir),m*20,20-3.5,22/2+.3),h(C(2.2,1.4,1.2,ir),m*20,20-1.2,22/2+.5));a.add(h(C(43,.5,.4,Si),0,4,22/2+.15),h(C(43,.5,.4,Si),0,20-2.6,22/2+.15)),r.add(a);let l=new nt,c=46/2-.8-.6,u=22/2-.8-.6,d=(m,y,g,x,b,w=1)=>{let M=hf(m,b);M.scale.setScalar(w),M.updateMatrixWorld(!0);let R=new Ht().setFromObject(M),T=R.getSize(ye(0,0,0)),_=Math.min(1,2*c/T.x,2*u/T.z);M.scale.multiplyScalar(_*.96),M.updateMatrixWorld(!0),R=new Ht().setFromObject(M);let E=(R.max.x-R.min.x)/2,B=(R.max.z-R.min.z)/2;M.position.set(Math.max(-c+E,Math.min(c-E,y)),g,Math.max(-u+B,Math.min(u-B,x))),M.updateMatrixWorld(!0);let P=new Ht().setFromObject(M);P.max.y>20-1.2&&(M.position.y-=P.max.y-(20-1.2)),l.add(M)};d(ah(),0,1.4,1,0,1.05),d(Xd(),-1,3.4,-3,0),d(sh(),-2,6,-7,0),d(Yd(),4,6.6,4,.08),d(Jd(),-10,7,1,.15),d(lh(),-12,10,-3,.2),d(jd(),12,9.8,-4,.4),d(rh(),10,11,4,.25),d(oh(),-2,13.2,6,Math.PI/2+.3),d(xl(),4,13.6,-5,Math.PI/2-.2),d(xl(),-6,14,-6,Math.PI/2+.25),d(vl(),-14,14,5,.5),d(Wd(),15,14.4,6,.9),r.add(l);let f=[];for(let m of[-1,1]){let y=ce(h(le(22.4,6,21,1,Gi),0,3,0),h(C(22.6,1.2,21.4,Gi),0,.6,0),h(C(20,.5,18.5,Si),0,6.01,0),h(C(.5,5,18.5,Si),m*-3,3.6,0));y.add(h(U(.45,.45,3,v.brass),m*5,6.6,-3,0,0,Math.PI/2),h(U(.45,.45,3,v.brass),m*5,6.6,-1,0,0,Math.PI/2),h(C(4,.8,2,v.steelShiny),m*7,6.5,4)),y.add(h(le(46/2-.6,1.2,21,.6,Gi),0,6.6,0));let g=h(C(.8,9,1,ir),0,0,0),x=h(C(.8,9,1,ir),0,0,0);r.add(g,x),r.add(y),f.push({t:y,sx:m,arm1:g,arm2:x})}let p=ce(h(U(.45,.45,7,ir),-11,4,0),h(U(.45,.45,7,ir),11,4,0),h(U(1.1,1.1,22,q1),0,7.5,0,0,0,Math.PI/2));return r.add(p),r.userData.open=m=>{m=Math.max(0,Math.min(1,m));let y=m*m*(3-2*m);f.forEach(({t:g,sx:x,arm1:b,arm2:w})=>{let M=x*46/4,R=M+x*46*.5*y,T=20+.2+7*Math.sin(y*Math.PI)*.8-1.2*y;g.position.set(R,T,0);let _=x*46*.18,E=17,B=R-x*2,P=T+1.5,N=Math.hypot(B-_,P-E);[b,w].forEach((H,F)=>{H.scale.y=N/9,H.position.set((_+B)/2,(E+P)/2,(F?-1:1)*(22/2+.25)),H.rotation.z=Math.atan2(-(B-_),P-E),H.visible=m>.02})}),p.position.y=20,p.visible=m<.05},r.userData.open(0),r}function uf(i={}){let a=ce(h(le(120,6,48,.6,qd),0,78-6/2,0));for(let l of[-1,1])for(let c of[-1,1])a.add(h(C(6,72,6,v.beech),l*(120/2-8),72/2,c*(48/2-6)));for(let l of[-1,1])a.add(h(C(110,6,3,v.beech),0,69,l*(48/2-4.5)));a.add(h(C(110,2.5,38,v.beech),0,16,0));for(let l of[-1,1])a.add(h(C(4,6,38,v.beech),l*(120/2-8),16,0));if(!i.bare){let l=Qd();l.position.set(-120/2+24,78-4.5,48/2+1),a.add(l)}let o=(l,c,u,d,f=78,p=!0)=>{let m=p?hf(l,d):(()=>{let y=new nt,g=new nt;g.add(l),y.add(g),g.rotation.y=d,y.updateMatrixWorld(!0);let x=new Ht().setFromObject(g),b=x.getCenter(ye(0,0,0));return g.position.set(-b.x,-x.min.y,-b.z),y})();return m.position.set(c,f,u),a.add(m),m};if(!i.bare){o(ah(),18,4,.25),o(rh(),-20,-10,-.4),o(lh(),40,-12,1.1),o(oh(),-2,12,-.9),o(sh(),5,-14,.1),o(vl(),-38,-8,.7);let l=h(C(34,2,4.5,v.beech),-28,79,10,0,.15,0);a.add(l)}return i.bare||(o(Zd(),-25,0,.2,17.25,!1),o(Vd(),12,-4,-.3,17.25,!1),a.add(h(C(30,4.5,9,v.beech),30,19.5,8,0,.1,0),h(C(22,2,4.5,v.beech),-8,18.3,10,0,-.2,0))),a}function la(i,e,t){let n=new se({color:9076594,roughness:.8}),s=new se({color:3948614,metalness:.5,roughness:.4}),r=ce(h(C(i,3,e,n),0,t-1.5,0));for(let a of[-1,1])for(let o of[-1,1])r.add(h(C(3,t-3,3,s),a*(i/2-3),(t-3)/2,o*(e/2-3)));return r.add(h(C(i-6,2,e-6,s),0,14,0)),r}function df(i={}){let e=new nt,t=470,n=370,s=new se({color:5987940,roughness:.92}),r=new se({color:6975093,roughness:.9});e.add(h(C(t,4,n,s),0,-2,0),h(C(210,.3,150,r),0,.15,15));let a=[],o=[];e.userData.items=o;let l=(c,u,d,f=0,p=0,m)=>(c.rotation.y=f,c.position.set(u,p,d),e.add(c),c.userData.anim&&a.push(c.userData.anim),m&&(c.userData.key=m,o.push({key:m,obj:c})),c);i.noBench||l(uf(),0,15,0,0,"bench"),l(rf(),-75,-150,0,0,"centreLathe"),l(af(),70,-150,0,0,"woodLathe"),l(nf(),-200,-12,Math.PI/2,0,"pillarDrill"),l(tf(),-200,85,Math.PI/2,0,"beltSander"),l(la(60,46,72),198,-55),l(of(),198,-55,-Math.PI/2,72,"mortiser"),l(la(60,46,72),198,40),l(sf(),198,40,-Math.PI/2,72,"fretSaw"),l(la(90,40,72),-80,155),l(cf(),-80,155,0,72,"stripHeater"),l(lf(),75,150,0,0,"fluidiser");{let c=X1(),u=W1();u.position.set(30,72,30),u.rotation.y=Math.PI/4,u.scale.setScalar(1.35),c.add(u),c.userData.anim=u.userData.anim,l(c,-233,-183,0,0,"spotWelder")}return e.userData.anim=c=>a.forEach(u=>u(c)),e}var pt={cream:new se({color:15327951,metalness:.25,roughness:.5}),teal:new se({color:2914939,metalness:.35,roughness:.45}),glass:new se({color:13625077,transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1}),hot:new se({color:16734762,emissive:16726544,emissiveIntensity:.9,roughness:.6}),sheet:new se({color:15921906,roughness:.4,transparent:!0,opacity:.92}),granule:new se({color:4891615,roughness:.6}),alu:new se({color:12896976,metalness:.75,roughness:.32}),cavity:new se({color:3817286,metalness:.6,roughness:.4,side:un}),kayak:new se({color:15226410,roughness:.35,metalness:.05}),powder:new se({color:15966330,roughness:.9}),ovenIn:new se({color:2761760,emissive:16734746,emissiveIntensity:0,roughness:.8}),win:new se({color:2234902,emissive:16738848,emissiveIntensity:0,roughness:.2,metalness:.3}),screen:new se({color:8378111,emissive:2779784,emissiveIntensity:.8})},Qe=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Ld(i){let e=new se({color:i,roughness:.3}),t=ce(h(le(12,7.2,6,.4,e),0,0,0));for(let n=0;n<4;n++)for(let s=0;s<2;s++)t.add(h(U(1.1,1.1,1.2,e,16),-4.5+n*3,4.2,-1.5+s*3));return t}function J1(){let i=new se({color:10270936,metalness:.3,roughness:.45}),e=new se({color:15659250,roughness:.5}),t=new se({color:2043755,roughness:.5}),n=new se({color:15909166,metalness:.2,roughness:.45}),s=new se({color:15895608,roughness:.45,side:un}),r=new nt;r.add(h(C(48,2,80,i),0,2,-20),h(C(48,50,2,i),0,26,-59),h(C(2,50,80,i),23,26,-20),h(C(2,18,80,i),-23,10,-20),h(C(2,32,36,i),-23,35,-41),h(C(.6,32,42,pt.glass),-23,35,0),h(C(2.4,1.4,44,v.steelDark),-23.2,19.4,0),h(C(48,30,2,i),0,16,21),h(C(44,19,.6,pt.glass),0,41,21),h(C(48,1.4,2.4,v.steelDark),0,31.4,21.2),h(C(44,46,1,ne.dark),0,26,-23),h(C(44,.4,42,ne.dark),0,3.2,0),h(C(48,2,6,v.steel),0,51.5,18),h(C(48,2,6,v.steel),0,51.5,-20),h(C(6,2,36,v.steel),21,51.5,-1),h(C(6,2,36,v.steel),-21,51.5,-1),h(C(48,2,36,i),0,51.5,-41));for(let q of[-20,20])for(let W of[-56,28])r.add(h(U(2,2,2,v.black),q,1,W));let a=ce(h(C(.4,4,.2,v.black),0,1.6,0));a.position.set(-15,22,33.6),r.add(h(le(52,26,12,1.5,e),0,15,27),h(C(44,6,.3,t),0,8,33.1),h(C(16,2,.3,new se({color:12178414})),12,8,33.3),h(U(4,4,1,v.black),-15,22,33,Math.PI/2),h(U(3.5,3.5,.2,v.steelShiny),-15,22,33.6,Math.PI/2),a,h(Jn(),19,22,33.2),h(C(3,2,.6,ne.red),-20,15,33.2));for(let q=0;q<4;q++)r.add(h(U(1.8,2.2,2.2,v.black,20),-6+q*6,16,34,Math.PI/2),h(C(.4,1.6,.4,v.steelShiny),-6+q*6,16.6,35.2));r.add(h(C(8,3,.3,ne.machRed),-4,22,33.2));for(let q=0;q<3;q++)r.add(h(C(2,2,.4,new se({color:16747066,emissive:16734736,emissiveIntensity:.5})),-6.4+q*2.4,22,33.4));let o=ce(h(C(34,2,26,v.steelDark),0,0,0),h(U(2,2,40,v.steelDark),0,-20,0),h(C(30,4,22,v.beech),0,3,0)),l=[];for(let q of[-9.5,0,9.5])for(let W of[-5,5])l.push([q,W]),o.add(h(le(7,5,7,1.2,v.beech),q,7.5,W));o.position.y=31,r.add(o);let c=new se({color:5909018,emissive:16728080,emissiveIntensity:0,roughness:.6}),u=ce(h(le(46,10,38,1.5,i),0,0,0),h(C(46,9,.4,n),0,0,19.2),h(U(.8,.8,34,v.black),0,0,21.4,0,0,Math.PI/2),h(C(1.4,1.4,2.4,v.black),-16,0,20.2),h(C(1.4,1.4,2.4,v.black),16,0,20.2),h(C(40,.6,32,c),0,-5.1,0));for(let q=-3;q<=3;q++)u.add(h(C(38,.3,.8,c),0,-5.5,q*4.4));u.position.set(0,62,-40),r.add(u,h(C(2,5,78,v.steelDark),-24.5,55,-20),h(C(2,5,78,v.steelDark),24.5,55,-20));let d=new nt;d.position.set(0,53.6,-21),r.add(d),d.add(h(C(44,1.6,4,v.steel),0,.8,2),h(C(44,1.6,4,v.steel),0,.8,40),h(C(4,1.6,36,v.steel),-20,.8,21),h(C(4,1.6,36,v.steel),20,.8,21),h(U(1,1,48,v.black),0,2.4,42,0,0,Math.PI/2),h(C(2,2.6,2,v.steelDark),-22,1.6,42),h(C(2,2.6,2,v.steelDark),22,1.6,42),h(U(1.4,1.4,46,v.steelDark),0,0,0,0,0,Math.PI/2));let f=ce(h(U(.8,.8,28,v.steel),0,14,0),h(je(new zt(2,14,10),v.black),0,28.5,0),h(U(2.6,2.6,2.4,v.steelDark),0,0,0,0,0,Math.PI/2));f.position.set(25.4,28,4),r.add(f);let p=(q,W)=>{let L=0;for(let[te,Ie]of l){let de=Math.min(3.5-Math.abs(q-te),3.5-Math.abs(W-Ie));de>0&&(L=Math.max(L,5*Qe(de/1.2)))}return L},m=(q,W)=>Math.max(Math.max(0,Math.abs(q)-15)/3,Math.max(0,Math.abs(W)-11)/7),y=(q,W)=>{let L=m(q,W);return L>0?4*(1-Qe(L)):4.3+p(q,W)},g=(q,W)=>9.3*(1-Qe(m(q,W)*1.1)),x=new nt;r.add(x);let b=new Pn(44,44,66,66);b.rotateX(-Math.PI/2);let w=b.attributes.position,M=je(b,s);x.add(M);let R=document.createElement("canvas");R.width=R.height=440;{let q=R.getContext("2d");q.fillStyle="#fff",q.fillRect(0,0,440,440),q.fillStyle="#000",q.fillRect(60,100,320,240)}let T=new se({color:15895608,roughness:.45,side:un,alphaMap:new Rn(R),transparent:!0,alphaTest:.02}),_=new Ne(b,T);_.visible=!1,x.add(_);let E=new Pn(32,24,48,36);E.rotateX(-Math.PI/2);{let q=E.attributes.position;for(let W=0;W<q.count;W++)q.setY(W,y(q.getX(W),q.getZ(W)));E.computeVertexNormals()}let B=je(E,s);B.visible=!1,x.add(B);let P=[];{let q=[[-16,-12],[16,-12],[16,12],[-16,12],[-16,-12]];for(let W=0;W<=160;W++){let L=W/160*4,te=Math.min(3,Math.floor(L)),Ie=L-te,de=q[te][0]+(q[te+1][0]-q[te][0])*Ie,X=q[te][1]+(q[te+1][1]-q[te][1])*Ie;P.push(ye(de,y(de,X)+.35,X))}}let N=new Fn(new _n(P,!1,"catmullrom",0),320,.28,6),H=new Ne(N,new se({color:2764082,roughness:.5}));H.visible=!1,x.add(H);let F=q=>{for(let W=0;W<w.count;W++)w.setY(W,q(w.getX(W),w.getZ(W)));w.needsUpdate=!0,b.computeVertexNormals()},D=la(40,36,44);D.position.set(62,0,0),r.add(D);let k=ce(h(C(40,1.5,32,ne.blue),0,.75,0),h(C(40,16,1.5,ne.blue),0,8,15.25),h(C(40,16,1.5,ne.blue),0,8,-15.25),h(C(1.5,16,32,ne.blue),19.25,8,0),h(C(1.5,16,32,ne.blue),-19.25,8,0));k.position.set(62,0,44),r.add(k);let Y=je(E,s);Y.rotation.x=Math.PI,Y.position.set(62,11.2,44),r.add(Y);let Z=!1;return r.userData.anim=q=>{let L=q%26,te=q<26;if(Y.visible=!te||L>23,L<2)x.position.set(0,53.3,70*(1-Qe(L/2))),x.rotation.set(0,0,0);else if(L<15.5)x.position.set(0,53.3,0);else if(L<17.5){let ge=Qe((L-15.5)/2);x.position.set(62*ge,53.3+22*Math.sin(Math.PI*ge)+(44.2-53.3)*ge,0)}else if(L<21)x.position.set(62,44.2,0),x.rotation.x=0;else if(L<23){let ge=(L-21)/2,be=Qe(ge);x.position.set(62,44.2+14*Math.sin(Math.PI*Math.min(1,ge*1.3))-(44.2-11.8)*ge*ge,44*be),x.rotation.x=Math.PI*be}else x.position.set(62,11.8,44),x.rotation.x=Math.PI;d.rotation.x=-1.25*(L<2?1:L<3?1-Qe(L-2):L<14?0:L<15?Qe(L-14):1),u.position.z=L<3?-40:L<4?-40+40*Qe(L-3):L<8?0:L<9?-40*Qe(L-8):-40,c.emissiveIntensity=L>3&&L<9?Math.min(1,(L-3)/1.2)*(1.1+.25*Math.sin(q*5)):0;let Ie=L<9.2?0:L<11?Qe((L-9.2)/1.8):L<13.5?1:L<14.5?1-Qe(L-13.5):0;f.rotation.x=.35+1.5*Ie,o.position.y=31+21*Ie;let de=L<11?0:L<12.6?Qe((L-11)/1.6):L<14?1:L<15?1-Qe(L-14):0;a.rotation.z=1.2-2.4*de;let X=L<4?0:L<9?2.6*Qe((L-4)/5):2.6;if(L<2)F(()=>0),Z=!1;else if(L<11){let ge=Math.max(0,o.position.y-52+9.3)/9.3;F((be,Se)=>Math.max(-X*Math.max(0,1-(be/18)**2)*Math.max(0,1-(Se/18)**2),g(be,Se)*ge)),Z=!1}else if(L<12.8){let ge=Qe((L-11)/1.6);F((be,Se)=>g(be,Se)+(y(be,Se)-g(be,Se))*ge),Z=!1}else Z||(F(y),Z=!0);H.visible=L>=17.8&&L<20.4,N.setDrawRange(0,Math.floor(N.index.count*Math.max(0,Math.min(1,(L-17.8)/1.5))/6)*6);let j=L>=19.3;M.visible=!j&&L<25.8,B.visible=j&&L<25.8,_.visible=j&&L<20.8,T.opacity=1-Math.max(0,Math.min(1,(L-19.8)/1)),_.position.y=j?Math.max(0,(L-19.5)*10):0},r.userData.view=ye(-.8,0,.75),r.userData.zoom=.8,r}function j1(){let e=new se({color:15886e3,roughness:.55}),t=new se({color:16732072,emissive:12589162,emissiveIntensity:.55,roughness:.35}),n=new se({color:16739e3,emissive:10096720,emissiveIntensity:.35,roughness:.4,transparent:!0,opacity:.6}),s=new se({color:14266938,metalness:.35,roughness:.4}),r=new se({color:2105894,metalness:.5,roughness:.5}),a=new nt;a.add(h(le(210,40,46,2,pt.cream),0,20,0),h(le(66,24,40,2,pt.teal),-62,52,0),h(le(26,21,30,2,ne.dark),-97,50.5,0));let o=-8,l=74,c=-36;a.add(h(le(14,18,18,2,pt.teal),-51,l,0),h(U(5.5,5.5,22,v.steelShiny),-69,l,0,0,0,Math.PI/2),h(U(6.5,6.5,3,v.steelDark),-80,l,0,0,0,Math.PI/2),h(C(10,10,10,v.steelDark),-69,l-9,0)),a.add(h(U(5.4,5.4,72,pt.glass,28),o,l,0,0,0,Math.PI/2),h(U(2,3.4,8,v.steelShiny),o+40,l,0,0,0,Math.PI/2),h(C(8,12,8,v.steelDark),-20,l-8,0),h(C(8,12,8,v.steelDark),18,l-8,0));let u=pt.hot.clone();for(let de=0;de<4;de++)a.add(h(new Ne(new sn(5.7,.9,8,28),u),o-22+de*15,l,0,0,Math.PI/2,0));let d=new nt;d.position.set(o-6,l,0),a.add(d),d.add(h(U(1.8,1.8,62,v.steelShiny),0,0,0,0,0,Math.PI/2),h(U(.2,1.8,4,v.steelShiny),33,0,0,0,0,-Math.PI/2));{let de=[];for(let X=0;X<=200;X++){let j=X/200,ge=j*Math.PI*2*10;de.push(ye(-29+58*j,Math.cos(ge)*3.6,Math.sin(ge)*3.6))}d.add(je(new Fn(new _n(de),400,.7,8),v.steelShiny))}let f=je(new Tt(4.6,4.6,1,24),t);f.rotation.z=Math.PI/2,a.add(f);let p=je(new Tt(4.5,4.5,1,24),n);p.rotation.z=Math.PI/2,a.add(p),a.add(h(U(3,3,10,v.steelShiny),c,l+10,0),h(U(22,4,34,pt.glass,32),c,l+32,0),h(new Ne(new sn(22,1,8,40),v.steelShiny),c,l+49,0,Math.PI/2),h(U(23,23,2,v.steelDark,32),c,l+51,0),h(U(9,9,14,v.steelShiny),c,l+59,0),h(U(10,10,2,v.steelDark),c,l+67,0),h(le(8,6,6,1,ne.dark),c+10,l+62,0)),a.add(h(U(14,14,32,ne.blue,28),-70,16,-48),h(U(13,13,.6,e,28),-70,32.4,-48),Kn([[c+14,l+63,0],[c+26,l+68,-12],[-52,80,-40],[-66,46,-48],[-68,34,-48]],1.2,ne.dark));let m=320,y=new Wn(new zt(1.5,8,6),e,m),g=new Ut,x=[];for(let de=0;de<m;de++){let X=Math.random()*28,j=4+18*(X/34)-1.8,ge=Math.random()*7,be=Math.sqrt(Math.random())*j;x.push([c+Math.cos(ge)*be,l+15.5+X,Math.sin(ge)*be])}x.sort((de,X)=>de[1]-X[1]),x.forEach((de,X)=>{g.position.set(...de),g.updateMatrix(),y.setMatrixAt(X,g.matrix)}),a.add(y);let b=36,w=new Wn(new zt(1.3,8,6),e,b);a.add(w);let M=20,R=new Wn(new zt(1.3,8,6),e,M);a.add(R),a.add(h(C(6,46,46,pt.teal),30,63,0),h(C(6,46,46,pt.teal),96,63,0),h(U(7,7,20,v.steelShiny),109,63,0,0,0,Math.PI/2),h(U(8,8,3,v.steelDark),119,63,0,0,0,Math.PI/2));for(let de of[46,80])for(let X of[-18,18])a.add(h(U(1.6,1.6,72,v.steelShiny),64,de,X,0,0,Math.PI/2));let T=ce(h(C(8,22,22,pt.alu),0,0,0));T.position.set(37,63,0),a.add(T);for(let de of[-4.5,-1.5,1.5,4.5])for(let X of[-1.5,1.5])T.add(h(U(1.2,1.2,.3,r,16),4.1,X,de,0,0,Math.PI/2));T.add(h(C(.3,7.6,13,r),4.05,0,0));let _=ce(h(C(6,40,40,pt.teal),0,0,0),h(C(8,22,22,pt.alu),-7,0,0),h(C(.3,7.6,13,r),-11.05,0,0));_.position.set(52,63,0),a.add(_);let E=[];for(let de of[-1,1])for(let X=0;X<2;X++){let j=je(new Ft(19.5,2,5),s);a.add(j),E.push([j,de,X])}a.add(h(C(72,44,1,pt.glass),64,64,24),h(C(72,2,2,v.steelDark),64,86,24),h(C(72,2,2,v.steelDark),64,42,24)),a.add(h(C(18,12,.6,v.black),44,25,23.2),h(C(14,1,26,v.steel),44,17,34,.5,0,0),h(C(1,3,26,v.steel),37,18.5,34,.5,0,0),h(C(1,3,26,v.steel),51,18.5,34,.5,0,0));let B=ce(h(C(36,1,30,ne.blue),0,1,0),h(C(36,14,1,ne.blue),0,7,15),h(C(36,14,1,ne.blue),0,7,-15),h(C(1,14,30,ne.blue),18,7,0),h(C(1,14,30,ne.blue),-18,7,0));B.position.set(44,0,52),a.add(B);let P=new nt;a.add(P);for(let de=0;de<9;de++){let X=Ld(15886e3);X.position.set(32+de%3*12+(Math.random()-.5)*3,4+Math.floor(de/3)*3.5,44+de*7%3*8),X.rotation.set(Math.random()*.4,Math.random()*3,Math.random()*.4),P.add(X)}let N=Ld(15886e3);a.add(N);let H=new nn().setFromAxisAngle(ye(0,0,1),Math.PI/2).multiply(new nn().setFromAxisAngle(ye(0,1,0),Math.PI/2));a.add(h(le(22,30,6,1,ne.dark),-30,30,25),h(C(16,10,.3,pt.screen),-30,36,28.2),h(wi(),-34,24,28.4),h(Jn(),-24,24,28.4));let F=new Ut;a.userData.anim=de=>{let j=de%8/8,ge=48,be=de%ge;j<.4&&(d.rotation.x-=.16);let Se=j<.4?-14:j<.5?-14+8*Qe((j-.4)/.1):j<.78?-6:j<.92?-6-8*Qe((j-.78)/.14):-14;d.position.x=Se;let Ve=Se+35,dt=j<.4?Math.max(.3,(28-Ve)*Qe(j/.4)):Math.max(.3,28-Ve);f.scale.y=dt,f.position.set(Ve+dt/2,l,0);let Xe=-12,Ye=Math.max(.3,Ve-2-Xe);p.scale.y=Ye,p.position.set(Xe+Ye/2,l,0),_.position.x=j<.62?52:j<.7?52+12*Qe((j-.62)/.08):j<.8?64:j<.9?64-12*Qe((j-.8)/.1):52;let at=_.position.x+3,pe=93,Re=pe-at,De=19.5,ze=Math.sqrt(Math.max(0,De*De-(Re/2)**2));if(E.forEach(([We,Ue,tt])=>{let lt=tt?at+Re/2:at,mt=tt?pe:at+Re/2,z=63+Ue*10+(tt?Ue*ze:0),oe=63+Ue*10+(tt?0:Ue*ze);We.position.set((lt+mt)/2,(z+oe)/2,0),We.rotation.z=Math.atan2(oe-z,mt-lt)}),N.quaternion.copy(H),N.visible=j>.45,j<.7)N.position.set(_.position.x-7.75,63,0);else if(j<.74)N.position.set(64-7.75-6*Qe((j-.7)/.04),63,0);else{let We=(j-.74)/.24;if(We<.22)N.position.set(50.6,63-23*(We/.22)**2,0),N.rotateX(We*6);else if(We<.38)N.visible=!1;else if(We<.75){let Ue=(We-.38)/.37;N.position.set(44,25-12*Ue,22+24*Ue),N.quaternion.identity(),N.rotation.set(.5,0,0)}else{let Ue=(We-.75)/.25;N.quaternion.identity(),N.position.set(44,13-6*Ue,46+6*Ue),N.rotation.set(.5*(1-Ue),Ue*1.5,0)}}for(let We=0;We<b;We++){let Ue=(We/b+de*.35)%1,tt,lt,mt=(We*37%7-3)*.5,z=1;if(Ue<.35)tt=c+(We*13%5-2)*.5,lt=l+15-12*(Ue/.35);else{let oe=(Ue-.35)/.65;tt=c+oe*(Xe-c+3),lt=l+3.6-We*11%3*.6,z=oe>.75?1-(oe-.75)/.25:1}j>=.4&&(z=0),F.position.set(tt,lt,mt),F.scale.setScalar(Math.max(.001,z)),F.updateMatrix(),w.setMatrixAt(We,F.matrix)}w.instanceMatrix.needsUpdate=!0;let Fe=be<42?1-.65*(be/42):.35+.65*Qe((be-42)/5);y.count=Math.floor(m*Math.min(1,Fe));for(let We=0;We<M;We++){let Ue=be>42&&be<47.2,tt=(We/M+de*1.4)%1;F.position.set(c+(We*7%5-2)*1.2,l+50-28*tt,(We*3%5-2)*1.2),F.scale.setScalar(Ue?1:.001),F.updateMatrix(),R.setMatrixAt(We,F.matrix)}R.instanceMatrix.needsUpdate=!0};let D={pg:e.color.getHex(),mc:t.color.getHex(),me:t.emissive.getHex(),sc:n.color.getHex(),se:n.emissive.getHex()},k=()=>{let de=_.position.x+3,X=93,j=X-de,ge=19.5,be=Math.sqrt(Math.max(0,ge*ge-(j/2)**2));E.forEach(([Se,Ve,dt])=>{let Xe=dt?de+j/2:de,Ye=dt?X:de+j/2,at=63+Ve*10+(dt?Ve*be:0),pe=63+Ve*10+(dt?0:Ve*be);Se.position.set((Xe+Ye)/2,(at+pe)/2,0),Se.rotation.z=Math.atan2(pe-at,Ye-Xe)})},Y=null,Z=null,q=(de,X)=>{let j=new ut(X?14675960:de);e.color.copy(j),e.transparent=!!X,e.opacity=X?.55:1,e.needsUpdate=!0,t.color.copy(j).lerp(new ut(16777215),.15),t.emissive.copy(j).multiplyScalar(.55),n.color.copy(j),n.emissive.copy(j).multiplyScalar(.35)},W=(de,X)=>{for(let j=0;j<b;j++){let ge=(j/b+X*.35)%1,be,Se,Ve=(j*37%7-3)*.5,dt=1;if(ge<.35)be=c+(j*13%5-2)*.5,Se=l+15-12*(ge/.35);else{let Xe=(ge-.35)/.65;be=c+Xe*(-12-c+3),Se=l+3.6-j*11%3*.6,dt=Xe>.75?1-(Xe-.75)/.25:1}F.position.set(be,Se,Ve),F.scale.setScalar(de?Math.max(.001,dt):.001),F.updateMatrix(),w.setMatrixAt(j,F.matrix)}w.instanceMatrix.needsUpdate=!0},L=(de,X)=>{for(let j=0;j<M;j++){let ge=(j/M+X*1.4)%1;F.position.set(c+(j*7%5-2)*1.2,l+50-28*ge,(j*3%5-2)*1.2),F.scale.setScalar(de?1:.001),F.updateMatrix(),R.setMatrixAt(j,F.matrix)}R.instanceMatrix.needsUpdate=!0},te=(de,X)=>{d.position.x=de;let j=de+35;X=Math.max(.3,X),f.scale.y=X,f.position.set(j+X/2,l,0);let ge=Math.max(.3,j-2+12);p.scale.y=ge,p.position.set(-12+ge/2,l,0)},Ie=0;return a.userData.game={steps:{hop:2.6,heat:1.6,close:1.3,melt:3,inject:1.1,cool:2.2,open:1.3,eject:2.6},start(de,X,j){q(de,X),P.visible=!1,N.visible=!1,y.count=0,u.emissiveIntensity=0,u.color.set(6974834),_.position.x=64,k(),te(-14,.3),p.visible=!1,f.visible=!1,W(!1,0),L(!1,0),Y&&a.remove(Y),Y=j,Y.visible=!1,a.add(Y),Z=0},run(de,X,j){if(Ie=j,de==="hop"&&(y.count=Math.floor(m*.95*Qe(X)),L(X<.97,j)),de==="heat"&&(u.emissiveIntensity=.9*X,u.color.set(6974834).lerp(pt.hot.color,X)),de==="close"&&(_.position.x=64-12*Qe(X),k()),de==="melt"&&(d.rotation.x-=.16,W(X<.92,j),p.visible=f.visible=!0,te(-14,7*Qe(X)),y.count=Math.floor(m*(.95-.2*X))),de==="inject"){W(!1,j);let ge=-14+8*Qe(X);te(ge,Math.max(.3,28-(ge+35)))}if(de==="open"&&(_.position.x=52+12*Qe(X),k(),Y.visible=!0,Y.position.set(_.position.x-7.75,63,0),Y.rotation.set(0,0,0)),de==="eject")if(X<.15)Y.position.set(64-7.75-6*Qe(X/.15),63,0);else{let ge=(X-.15)/.85;if(ge<.25)Y.position.set(50.6,63-23*(ge/.25)**2,0),Y.rotation.z=ge*3;else if(ge<.4)Y.visible=!1;else if(ge<.8){Y.visible=!0;let be=(ge-.4)/.4;Y.position.set(44,25-12*be,22+24*be),Y.rotation.set(.5,0,0)}else{let be=(ge-.8)/.2;Y.position.set(44,13-6*be,46+6*be),Y.rotation.set(.5*(1-be),be*1.2,0)}}},end(){Y&&(a.remove(Y),Y=null),e.color.setHex(D.pg),e.transparent=!1,e.opacity=1,e.needsUpdate=!0,t.color.setHex(D.mc),t.emissive.setHex(D.me),n.color.setHex(D.sc),n.emissive.setHex(D.se),u.color.copy(pt.hot.color),u.emissiveIntensity=pt.hot.emissiveIntensity,P.visible=!0,p.visible=f.visible=!0,L(!1,0)},binPoint:ye(44,14,52)},a.userData.product={key:"brick",col:15886e3,point:ye(44,14,52)},a.userData.view=ye(.25,0,1),a.userData.zoom=.62,a}var fn=200,ar=i=>16*Math.pow(Math.sin(Math.PI*i),.62),ff=i=>(5+3.5*Math.exp(-(((i-.47)/.13)**2)))*Math.pow(Math.sin(Math.PI*i),.3),Q1=i=>8.5*Math.pow(Math.sin(Math.PI*i),.55),ih=i=>7*Math.pow(2*i-1,4),ra=-fn/2+fn*.47,Nd=21,Ud=11.5,Qc=(i,e)=>{let t=Math.min(.999,Math.max(.001,(i+fn/2)/fn)),n=ar(t),s=Math.min(1,Math.abs(e)/n),r=Math.pow(s,2.4/2),a=Math.sqrt(Math.max(0,1-r*r));return ih(t)+ff(t)*Math.pow(a,2/2.2)};function ey(){let t=[],n=[];for(let p=0;p<=100;p++){let m=p/100,y=-fn/2+fn*m,g=ar(m),x=ff(m),b=Q1(m),w=ih(m);for(let M=0;M<=56;M++){let R=M/56*Math.PI*2,T=Math.cos(R),_=Math.sin(R);t.push(y,w+(_>0?x*Math.pow(_,2/2.2):-b*Math.pow(-_,2/2.6)),g*Math.sign(T)*Math.pow(Math.abs(T),2/2.4))}}for(let p=0;p<100;p++)for(let m=0;m<56;m++){let y=p*57+m,g=y+56+1,x=-fn/2+fn*(p+.5)/100,b=(m+.5)/56*Math.PI*2,w=ar((p+.5)/100)*Math.sign(Math.cos(b))*Math.pow(Math.abs(Math.cos(b)),2/2.4);Math.sin(b)>.2&&((x-ra)/Nd)**2+(w/Ud)**2<1||n.push(y,g,y+1,g,g+1,y+1)}let s=new Vt;s.setAttribute("position",new xt(t,3)),s.setIndex(n),s.computeVertexNormals();let r=pt.kayak2||(pt.kayak2=new se({color:15226410,roughness:.32,metalness:.02,side:ii})),a=pt.kayakIn||(pt.kayakIn=new se({color:4856332,roughness:.85,side:$t})),o=ce(je(s,r),new Ne(s,a)),l=[];for(let p=0;p<=64;p++){let m=p/64*Math.PI*2,y=ra+Nd*1.04*Math.cos(m),g=Ud*1.06*Math.sin(m);l.push(ye(y,Qc(y,g)+.5,g))}o.add(je(new Fn(new _n(l,!0),128,1.5,10,!0),v.black));let c=new se({color:2764082,roughness:.7});o.add(h(le(20,2.4,17,1,c),ra+5,-5.4,0),h(le(3,9,15,1,c),ra+15,-1.5,0,0,0,.35),h(le(10,4,22,1.5,c),ra-28,-4,0));let u=50,d=Qc(u,0);o.add(h(U(8.5,8.5,1.6,v.black,32),u,d+.6,0),h(new Ne(new sn(8.5,.7,8,32),c),u,d+1.4,0,Math.PI/2));let f=p=>o.add(je(new Fn(new _n(p.map(([m,y])=>ye(m,Qc(m,y)+.8,y))),40,.35,6),v.black));for(let p of[-1,1])f([[-70,-11*p],[-58,0],[-46,11*p]]),f([[85,-6*p],[75,0],[66,7*p]]);for(let p of[-fn/2-1.5,fn/2+1.5])o.add(h(new Ne(new sn(2.6,.6,8,20),v.black),p,ih(p<0?0:1)-.5,0));return o}function Fd(){let i=new yt;for(let e=0;e<=40;e++){let t=e/40;i[e?"lineTo":"moveTo"](-fn/2+fn*t,ar(t)+.4)}for(let e=40;e>=0;e--){let t=e/40;i.lineTo(-fn/2+fn*t,-ar(t)-.4)}return i}function ty(i,e){let t=ce(h(new Ne(new sn(i,1.6,8,48),e),0,0,0,0,Math.PI/2,0),h(new Ne(new sn(i*.55,1.2,8,40),e),0,0,0,0,Math.PI/2,0),h(U(5,5,6,v.steelDark),0,0,0,0,0,Math.PI/2));for(let n=0;n<8;n++){let s=n*Math.PI/4;t.add(h(C(2,i,2,e),0,Math.cos(s)*i/2,Math.sin(s)*i/2,s,0,0))}return t}function ny(){let i=new nt,e=-240,t=30,n=105,s=235,r=ne.lightOrange,a=new se({color:13081146,metalness:.4,roughness:.45}),o=new se({color:15250746,metalness:.3,roughness:.4}),l=new se({color:15132906,metalness:.3,roughness:.4});i.add(h(C(320,8,180,r),0,s-4,-240),h(C(8,s,180,r),-156,s/2,-240),h(C(8,s,180,r),156,s/2,-240),h(C(320,s,8,r),0,s/2,-326));for(let F of[-152,152])i.add(h(C(12,s,10,v.steelDark),F,s/2,-150));i.add(h(C(320,12,10,v.steelDark),0,s-6,-150));let c=pt.ovenIn;i.add(h(C(304,1,164,c),0,s-8.5,-240),h(C(1,s-10,164,c),-151.5,(s-10)/2,-240),h(C(1,s-10,164,c),151.5,(s-10)/2,-240),h(C(304,s-10,1,c),0,(s-10)/2,-321.5),h(C(304,1,164,c),0,.6,-240));let u=new ss(16742954,0,260,0);u.position.set(0,140,-240),i.add(u),i.add(h(C(670,10,10,v.steelDark),0,s+14,-145),h(C(8,s+18,8,v.steelDark),-331,(s+18)/2,-145),h(C(8,s+18,8,v.steelDark),331,(s+18)/2,-145));let d=new se({color:16756848,emissive:16738848,emissiveIntensity:0,transparent:!0,opacity:.28,roughness:.1,depthWrite:!1}),f=[-1,1].map(F=>{let D=ce(h(C(161,40,6,r),0,s/2-20,0),h(C(161,55,6,r),0,-s/2+27.5,0),h(C(25,s-95,6,r),-68,-7.5,0),h(C(25,s-95,6,r),68,-7.5,0),h(C(111,s-95,1,d),0,-7.5,0),h(C(4,60,4,v.steelDark),-F*74,0,4),h(C(14,8,10,v.steelDark),-50,s/2+6,0),h(C(14,8,10,v.steelDark),50,s/2+6,0));return D.position.set(F*80.5,s/2,-147),i.add(D),D});i.add(h(le(70,34,56,3,ne.red),40,s+17,-290),h(U(9,9,70,v.steelDark),40,s+68,-290),h(le(30,20,20,2,ne.dark),-40,s+10,-300),h(U(3,3,60,ne.dark),-40,s+10,-270,Math.PI/2));let p=(F,D,k,Y)=>{let Z=Math.hypot(k-F,Y-D),q=Math.atan2(Y-D,k-F);for(let L of[16,32])i.add(h(C(Z,1.6,1.6,a),(F+k)/2,s+L,(D+Y)/2,0,-q,0));let W=Math.ceil(Z/40);for(let L=0;L<=W;L++)i.add(h(C(1.8,32,1.8,a),F+(k-F)*L/W,s+16,D+(Y-D)*L/W))};p(-158,-152,158,-152),p(158,-152,158,-328),p(158,-328,-158,-328),p(-158,-328,-158,-200);{let Y=-7.2727272727272725,Z=s/22,q=-180;for(let te=0;te<22;te++)i.add(h(C(28,1.6,8,v.steelDark),q,Z*(te+1)-.8,-162+Y*(te+.5)));let W=Math.hypot(s,-160),L=Math.atan2(s,160);for(let te of[q-15,q+15])i.add(h(C(2,6,W,a),te,s/2,-484/2,L,0,0));for(let te of[q-15])i.add(h(C(1.6,1.6,W,a),te,s/2+32,-484/2,L,0,0));for(let te=0;te<=4;te++)i.add(h(C(1.6,32,1.6,a),q-15,s*te/4+16,-162+-160*te/4))}{let F=ce(h(le(22,74,30,2,ne.dark),0,37,0),h(C(.4,13,20,pt.screen),11.2,58,0),h(U(1,1,.6,ne.go||v.steel),11.4,46,-6,0,0,Math.PI/2),h(Jn(),11.4,46,6),h(U(2.4,2.4,1,v.black),11.4,36,0,0,0,Math.PI/2));F.children[3].rotation.set(0,Math.PI/2,0),F.position.set(171,0,-205),i.add(F)}for(let F of[-100,100])i.add(h(C(5,4,420,v.steelShiny),F,2,-120),h(C(14,1,420,v.steelDark),F,.5,-120));i.add(h(C(6,5,200,ne.blue),118,2.5,-60));let m=new nt;m.position.z=t,i.add(m),m.add(h(C(240,8,110,ne.grey),0,16,0),h(C(250,4,4,v.black),0,13,57),h(C(250,4,4,v.black),0,13,-57));for(let F of[-100,100])for(let D of[-40,40])m.add(h(U(6,6,4,v.steelDark),F,10,D,0,0,Math.PI/2));for(let F of[-47,47])m.add(h(C(10,n-20,12,ne.grey),0,n/2+10,F),h(U(4,4,8,v.steelDark),0,n,F*.93,Math.PI/2));m.add(h(le(20,16,16,2,l),-20,30,-38),h(U(7,7,18,l),-36,30,-38,0,0,Math.PI/2),h(le(16,14,14,2,ne.grey),0,n-12,-56),h(U(6,6,12,l),0,n-12,-68,Math.PI/2));let y=new nt;y.position.y=n,m.add(y);for(let F of[-41,41])y.add(h(C(276,5,5,ne.machRed),0,0,F));for(let F of[-138,138])y.add(h(C(6,6,88,ne.machRed),F,0,0),h(le(12,14,14,2,ne.dark),F,0,0));y.add(h(le(14,14,14,2,ne.dark),146,0,0),h(U(5,5,12,l),156,0,0,0,0,Math.PI/2));let g=new nt;y.add(g);for(let F of[-121,121]){let D=ty(32,v.steel);D.position.x=F,g.add(D,h(U(3,3,14,v.steelShiny),F+Math.sign(F)*9,0,0,0,0,Math.PI/2))}let x=44,b=16,w=232;g.add(h(C(w,b,x,pt.alu),0,-b/2,0),h(C(w+6,1.4,x+6,pt.alu),0,-.7,0));for(let F=-3;F<=3;F++)g.add(h(C(2,b,x+2,v.steelDark),F*34,-b/2,0));let M=je(new Ws(Fd()),pt.cavity);M.rotation.x=-Math.PI/2,M.position.y=.05,g.add(M);let R=new nt;R.position.set(0,0,-x/2),g.add(R),R.add(h(C(w,b,x,pt.alu),0,b/2,x/2),h(C(w+6,1.4,x+6,pt.alu),0,.7,x/2));for(let F=-3;F<=3;F++)R.add(h(C(2,b,x+2,v.steelDark),F*34,b/2,x/2));let T=je(new Ws(Fd()),pt.cavity);T.rotation.x=Math.PI/2,T.position.set(0,-.05,x/2),R.add(T);for(let F=-3;F<=3;F++)g.add(h(C(4,6,3,v.steelDark),F*32+16*(F<3),-2,x/2+2)),R.add(h(C(4,6,3,v.steelDark),F*32+16*(F<3),2,x+2));for(let F=-2;F<=2;F++)g.add(h(U(1.6,1.6,8,v.steelDark),F*48,-1,-x/2-1,0,0,Math.PI/2));let _=900,E=new Wn(new zt(.8,5,4),pt.powder,_),B=new Ut;for(let F=0;F<_;F++){let D=.06+.88*Math.random(),k=-fn/2+fn*D,Y=(Math.random()*2-1)*ar(D)*.85;B.position.set(k,.8+Math.random()*1.4,Y),B.updateMatrix(),E.setMatrixAt(F,B.matrix)}g.add(E);let P=ye(0,38.6,150);for(let F of[-60,60])i.add(h(C(6,30,40,v.steelDark),F,15,150),h(le(10,3.6,40,1.2,v.black),F,31.8,150));let N=ey();N.visible=!1,i.add(N);let H=[];for(let F of[-1,1]){let D=ce(h(U(4,4,90,v.steelDark),0,45,0),h(C(40,4,40,v.steelDark),0,2,0)),k=ce(h(U(32,32,16,o,36,!0),0,0,0,0,0,Math.PI/2),h(new Ne(new sn(32,1.6,8,40),v.steelDark),-8*F,0,0,0,Math.PI/2,0),h(U(8,8,10,o),7*F,0,0,0,0,Math.PI/2));for(let Z=0;Z<4;Z++)k.add(h(C(.8,64,.8,v.steelDark),-8*F,0,0,Z*Math.PI/4,0,0));for(let Z of[12,22])k.add(h(new Ne(new sn(Z,.4,6,32),v.steelDark),-8*F,0,0,0,Math.PI/2,0));k.position.y=96,D.add(k);let Y=new nt;for(let Z=0;Z<5;Z++){let q=ce(h(C(1,26,8,v.steel),0,13,0,.3,0,0));q.rotation.x=Z*2*Math.PI/5,Y.add(q)}Y.add(h(U(5,5,6,v.steelDark),0,0,0,0,0,Math.PI/2)),Y.position.y=96,D.add(Y),H.push(Y),D.position.set(F*205,0,t),i.add(D)}i.add(h(C(40,4,30,v.steelDark),-205,20,130),h(le(36,24,26,2,ne.blue),-205,34,130),h(C(32,1,22,pt.powder),-205,46.2,130));for(let F of[-222,-188])for(let D of[118,142])i.add(h(U(3,3,3,v.black),F,3,D,0,0,Math.PI/2),h(C(2,16,2,v.steelDark),F,12,D));return i.userData.anim=F=>{let k=F%34,Y=F<34;R.rotation.x=-1.9*(k<2.5?1:k<4?1-Qe((k-2.5)/1.5):k<27?0:Qe((k-27)/1.5)),E.count=k<2.5?Math.floor(_*Qe(k/2.2)):k<9?_:0;let Z=k<4?0:k<5?Qe(k-4):k<8?1:k<9?1-Qe(k-8):k<18?0:k<19?Qe(k-18):k<22?1:k<23?1-Qe(k-22):0;f.forEach((L,te)=>L.position.x=(te?1:-1)*(80.5+165*Z)),m.position.z=k<5?t:k<8?t+(e-t)*Qe((k-5)/3):k<19?e:k<22?e+(t-e)*Qe((k-19)/3):t;let q=Math.max(0,Math.min(1,(k-5)/22));g.rotation.x=Math.PI*2*7*Qe(q),y.rotation.z=.36*Math.sin(Math.PI*q)*Math.sin(2*Math.PI*(k-5)/5.5);let W=k<8?0:k<9?k-8:k<18?1:k<20?1-(k-18)/2:0;if(c.emissiveIntensity=.7*W,d.emissiveIntensity=.35*W,u.intensity=2.6*W*(.9+.1*Math.sin(F*3)),H.forEach(L=>L.rotation.x+=k>19&&k<27?.5:k>27&&k<28?.5*(28-k):0),k>=27){N.visible=!0;let L=ye(0,n,t);if(k<29.5)N.position.copy(L);else if(k<31)N.position.set(0,n+50*Qe((k-29.5)/1.5),t);else{let te=Qe((k-31)/2.5);N.position.set(0,n+50+(P.y-n-50)*te*te,t+(P.z-t)*te)}}else!Y&&k<9.6?(N.visible=!0,N.position.copy(P),k>8&&(N.position.x=-600*((k-8)/1.6)**2)):N.visible=!1},i.userData.pinY=275,i.userData.focus=ye(0,85,-70),i}var eh=new se({color:13114880,emissive:16726528,emissiveIntensity:1.3,roughness:.3});function ml(i,e,t){let n=t.clone().sub(e),s=n.length();i.position.copy(e).addScaledVector(n,.5),i.scale.set(1,Math.max(.001,s),1),i.quaternion.setFromUnitVectors(ye(0,1,0),n.normalize())}function Od(i){let e=ce(h(new Ne(new sn(8,1.8,10,32),pt.alu),0,0,0),h(U(2.6,2.6,5,pt.alu,20),0,0,0,Math.PI/2));for(let t=0;t<5;t++){let n=t*Math.PI*2/5;e.add(h(C(1.6,7,1.6,pt.alu),Math.cos(n)*4.6,Math.sin(n)*4.6,0,0,0,n-Math.PI/2))}return e}function kd(i){let e=i||pt.alu,t=ce(h(le(8,3.4,19,1.2,e),0,0,0),h(le(7,3,9,1.3,e),0,2.8,1));for(let n of[-3.7,3.7])for(let s of[-5.8,5.8])t.add(h(U(2,2,1.4,e,20),n,-1.4,s,0,0,Math.PI/2));return t}function iy(){let i=new se({color:4020851,metalness:.35,roughness:.45}),e=new se({color:14266938,metalness:.35,roughness:.4}),t=new se({color:2105894,metalness:.5,roughness:.5}),n=new nt;n.add(h(le(230,36,60,2,i),0,18,0),h(le(60,20,44,2,i),-80,46,0)),n.add(h(U(9,9,44,v.steelShiny),-82,62,0,0,0,Math.PI/2),h(U(10,10,3,v.steelDark),-104,62,0,0,0,Math.PI/2),h(U(5,5,44,v.steelDark),-18,62,0,0,0,Math.PI/2),h(C(8,3,6,t),-12,66.6,0));let s=ce(h(U(2,2,40,v.steelShiny),0,0,0,0,0,Math.PI/2),h(U(4.4,4.4,4,v.steelShiny),20,0,0,0,0,Math.PI/2));s.position.set(-62,62,0),n.add(s),n.add(h(C(8,56,56,i),6,64,0),h(C(8,56,56,i),104,64,0),h(U(8,8,22,v.steelShiny),119,64,0,0,0,Math.PI/2));for(let b of[42,86])for(let w of[-22,22])n.add(h(U(2,2,100,v.steelShiny),55,b,w,0,0,Math.PI/2));let r=ce(h(C(12,36,36,v.steelDark),0,0,0),h(C(.3,9,22,t),6.1,0,0));r.position.set(16,64,0),n.add(r);let a=ce(h(C(8,50,50,i),0,0,0),h(C(12,36,36,v.steelDark),-10,0,0),h(C(.3,9,22,t),-16.1,0,0));a.position.set(38,64,0),n.add(a);let o=[];for(let b of[-1,1])for(let w=0;w<2;w++){let M=je(new Ft(2.4,1,6),e);n.add(M),o.push([M,b,w])}n.add(h(C(80,58,1,pt.glass),55,66,30),h(C(80,2,2,v.steelDark),55,95,30),h(C(80,2,2,v.steelDark),55,37,30)),n.add(h(C(44,40,4,ne.grey),-70,20,82),h(C(44,40,4,ne.grey),-70,20,42),h(C(4,40,36,ne.grey),-90,20,62),h(C(4,40,36,ne.grey),-50,20,62),h(C(36,34,36,ne.dark),-70,17,62),h(C(36,.6,36,eh),-70,34.6,62),h(C(44,2,4,v.steelDark),-70,41,82),h(C(44,2,4,v.steelDark),-70,41,42),h(C(4,2,44,v.steelDark),-48,41,62),h(C(4,2,44,v.steelDark),-92,41,62));let l=ye(-34,92,40);n.add(h(U(5,6,92,v.steelDark),-34,46,40),h(le(14,10,14,2,ne.dark),-34,94,40));let c=je(new Tt(1.6,1.6,1,12),ne.machRed);n.add(c);let u=ce(h(U(5,3.5,6,v.steelDark,20,!0),0,0,0),h(U(3.5,3.5,.4,v.steelDark,20),0,-3,0)),d=h(U(4.6,4.6,.4,eh,20),0,1.6,0);u.add(d),n.add(u);let f=je(new Tt(.8,.8,1,10),eh);f.visible=!1,n.add(f);let p=pt.alu.clone(),m=kd(p);n.add(m);let y=ce(h(C(36,1,30,ne.blue),0,1,0),h(C(36,14,1,ne.blue),0,7,15),h(C(36,14,1,ne.blue),0,7,-15),h(C(1,14,30,ne.blue),18,7,0),h(C(1,14,30,ne.blue),-18,7,0));y.position.set(40,0,62),n.add(y);for(let b=0;b<5;b++){let w=kd();w.position.set(30+b%3*10,4.5+Math.floor(b/3)*4,58+b*2%3*4-4),w.rotation.set((Math.random()-.5)*.5,Math.random()*3,(Math.random()-.5)*.5),n.add(w)}n.add(h(C(14,1,30,v.steel),40,22,42,.6,0,0),h(C(16,10,.6,v.black),40,30,30.2)),n.add(h(le(22,30,6,1,ne.dark),-30,24,31),h(C(16,10,.3,pt.screen),-30,30,34.2),h(wi(),-34,18,34.4),h(Jn(),-24,18,34.4));let g=[[0,ye(-50,82,58)],[1.6,ye(-70,37,62)],[2.4,ye(-70,37,62)],[3.4,ye(-62,84,50)],[4.6,ye(-12,76,0)],[6,ye(-12,76,0)],[7.2,ye(-50,82,58)]],x=b=>{for(let w=0;w<g.length-1;w++)if(b<=g[w+1][0]){let M=Qe((b-g[w][0])/(g[w+1][0]-g[w][0]));return g[w][1].clone().lerp(g[w+1][1],M)}return g[g.length-1][1].clone()};return n.userData.anim=b=>{let M=b%13,R=x(M);u.position.copy(R),ml(c,l,R.clone().add(ye(0,4,0)));let T=M>4.6&&M<6?Math.sin(Math.PI*(M-4.6)/1.4)*1.3:0;u.rotation.z=-T,d.visible=M>1.9&&M<5.6,f.visible=M>4.8&&M<5.8,f.visible&&ml(f,ye(-9,74,0),ye(-12,66,0)),s.position.x=M<6?-62:M<6.4?-62+30*Qe((M-6)/.4):M<10.5?-32:M<12?-32-30*Qe((M-10.5)/1.5):-62,a.position.x=M<8.4?38:M<9?38+22*Qe((M-8.4)/.6):M<10.6?60:M<11.4?60-22*Qe((M-10.6)/.8):38;let _=a.position.x+4,E=100,B=E-_,P=58/2+1,N=Math.sqrt(Math.max(0,P*P-(B/2)**2));o.forEach(([H,F,D])=>{let k=64+F*14;ml(H,ye(D?_+B/2:_,k+(D?F*N:0),0),ye(D?E:_+B/2,k+(D?0:F*N),0)),H.scale.x=H.scale.z=1}),m.visible=M>6.4;{let H=M<8.4?1:M<9.6?1-(M-8.4)/1.2:0;p.emissive.setRGB(1,.15,0),p.emissiveIntensity=1.4*H,p.color.setRGB(.77+.23*H,.79-.5*H,.82-.74*H)}if(M<9)m.position.set(a.position.x-16-2,64,0);else if(M<9.4)m.position.set(60-18.5-6*Qe((M-9)/.4),64,0);else if(M<10.2){let H=(M-9.4)/.8;m.position.set(36,64-30*H*H,0)}else if(M<10.5)m.visible=!1;else if(M<12){let H=(M-10.5)/1.5;m.position.set(40,30-20*H,30+28*H)}else m.visible=!1},n.userData.view=ye(-.3,0,1),n.userData.zoom=.8,n.userData.pinY=110,n}function sy(){let i=new se({map:ms((q,W)=>{q.fillStyle="#8a6a48",q.fillRect(0,0,W,W);for(let L=0;L<5e3;L++)q.fillStyle=Math.random()<.5?"#6e5236":"#a4835e",q.fillRect(Math.random()*W,Math.random()*W,1.5,1.5)},256,[2,2]),roughness:.95}),e=new se({color:4935768,metalness:.6,roughness:.4}),t=new se({color:1907223,roughness:1}),n=new se({color:13114880,emissive:16726528,emissiveIntensity:1.3,roughness:.4}),s=new nt,r=la(110,56,40);r.position.set(10,0,0),s.add(r),s.add(h(U(22,24,44,ne.grey,32),-82,22,0),h(new Ne(new sn(22.5,1.4,8,32),ne.machRed),-82,30,0,Math.PI/2),h(U(14,14,.4,n,24),-82,44.3,0),h(U(23,23,6,ne.grey,32),-82,47,-44),h(C(4,4,30,v.steelDark),-82,45,-24),h(U(2.4,2.4,44,v.steelDark),-82,22,-44),h(U(8,8,2,v.steelDark),-82,1,-44),h(U(3,3,20,v.steelDark),-104,10,14,0,0,1.2),h(le(10,8,8,1,ne.dark),-114,6,22));let a=q=>{let W=ce(h(C(44,q,2,e),0,q/2,15),h(C(44,q,2,e),0,q/2,-15),h(C(2,q,28,e),21,q/2,0),h(C(2,q,28,e),-21,q/2,0));for(let L of[-24,24])W.add(h(U(1,1,6,e),L,q/2,0,0,0,Math.PI/2));return W},o=40.2,l=14;s.add(h(C(48,1,34,v.beech),0,o+.5,0));let c=new nt;c.position.set(0,o+1,0),s.add(c);let u=new nt;u.position.y=l/2,c.add(u);let d=a(l);d.position.y=-l/2,u.add(d);let f=h(C(40,1,28,i),0,-l/2,0);u.add(f);let p=ce(h(U(8,8,5,v.beech,32),0,0,0),h(U(3,3,6,v.beechDark,20),0,0,0));p.position.set(0,-l/2+2.5,0),u.add(p);let m=h(U(9.6,9.6,.3,t,32),0,l+1.25,0);s.add(m),m.position.y=o+1+l+.2;let y=new nt;s.add(y);let g=a(l);y.add(g);let x=h(C(40,l,28,i),0,l/2,0);y.add(x);let b=[h(U(2.2,3,18,v.beech,16),-14,9,0),h(U(3.6,3.6,18,v.beech,16),14,9,0)];b.forEach(q=>y.add(q));let w=[h(U(3,3,.3,t,16),-14,l+.2,0),h(U(3.6,3.6,.3,t,16),14,l+.2,0)];w.forEach(q=>y.add(q));let M=[h(U(3,3,.4,n,16),-14,l+.4,0),h(U(3.6,3.6,.4,n,16),14,l+.4,0)];M.forEach(q=>y.add(q));let R=ce(h(U(.9,.9,90,v.steelDark),0,0,0,0,0,Math.PI/2),h(C(2,10,2,v.steelDark),-45,0,0),h(C(2,2,16,v.black),-45,-5,0),h(C(2,10,2,v.steelDark),45,0,0),h(C(2,2,16,v.black),45,-5,0),h(new Ne(new sn(7.4,.8,8,24),v.steelDark),0,-2,0,Math.PI/2)),T=ce(h(U(7,5,14,new se({color:5917248,roughness:.8}),20),0,-6,0),h(U(6.4,6.4,.3,n,20),0,.9,0));R.add(T),s.add(R);let _=je(new Tt(.9,.9,1,10),n);s.add(_);let E=ce(),B=Od();B.rotation.x=Math.PI/2,E.add(B);let P=ce(h(U(2.2,3,18,pt.alu,16),-14,9,0),h(C(14,2,3,pt.alu),-7.5,0,0)),N=ce(h(U(3.6,3.6,18,pt.alu,16),14,9,0),h(C(8,2,3,pt.alu),11,0,0));E.add(P,N),s.add(E);let H=h(new Ne(new Ui(26,10,24),i),0,o+5,0);s.add(H);let F=Od();F.rotation.x=Math.PI/2,F.position.set(48,40+2.5,8),s.add(F);let D=ce(h(C(30,1,24,ne.blue),0,1,0),h(C(30,12,1,ne.blue),0,6,12),h(C(30,12,1,ne.blue),0,6,-12),h(C(1,12,24,ne.blue),15,6,0),h(C(1,12,24,ne.blue),-15,6,0));D.position.set(85,0,10),s.add(D);let k=ye(-82,48,0),Y=ye(-4,o+1+2*l+22,0),Z=n.clone();return M.forEach(q=>q.material=Z),s.userData.anim=q=>{let L=q%26;f.scale.y=l*(L<.3?0:L<2?Qe((L-.3)/1.7):1),f.position.y=-l/2+f.scale.y/2,u.rotation.x=L<2?0:L<3?Math.PI*Qe(L-2):Math.PI;let te=L>7.4&&L<8.4?Qe((L-7.4)/1):L>=8.4?1:0;p.visible=L<8.4,p.position.set(0,-l/2+2.5-22*te,0),m.visible=L>=8.2&&L<19.5;let Ie=o+1+l,de=Ie+40;L>=3&&L<7.2?de=Ie+40*(1-Qe((L-3)/.8)):L>=7.2&&L<8.6?de=Ie+30*Qe((L-7.2)/.6):L>=8.6&&L<17?de=Ie+30*(1-Qe((L-8.6)/.7)):L>=17&&(de=Ie+60*Qe((L-17)/.8)),y.position.set(0,de,0),y.visible=L>=3&&L<17.8,x.scale.y=L<4?.001:L<6?Qe((L-4)/2):1,x.position.y=l*x.scale.y/2,b.forEach(Ye=>{Ye.visible=L>=3.2&&L<7,Ye.position.y=9+(L>6?20*Qe((L-6)/.8):0)}),w.forEach(Ye=>Ye.visible=L>=6.6);let X=[[9.5,k],[10.3,k.clone().add(ye(0,40,0))],[11.4,Y.clone()],[13,Y.clone()],[14,k.clone().add(ye(0,40,0))],[14.6,k]],j=k.clone();for(let Ye=0;Ye<X.length-1;Ye++)L>=X[Ye][0]&&L<X[Ye+1][0]&&(j=X[Ye][1].clone().lerp(X[Ye+1][1],Qe((L-X[Ye][0])/(X[Ye+1][0]-X[Ye][0]))));R.position.copy(j),T.rotation.z=L>11.4&&L<13?Math.sin(Math.PI*(L-11.4)/1.6)*1.1:0,_.visible=L>11.7&&L<12.8,_.visible&&ml(_,ye(j.x-7,j.y-3,0),ye(-14,Ie+l+.5,0));let ge=L>=11.9,be=L<11.9?0:L<14.6?1:L<17?1-(L-14.6)/2.4:0;M.forEach(Ye=>Ye.visible=ge&&L<17.8),Z.emissiveIntensity=1.3*be,Z.color.setRGB(.77+(.78-.77)*be,.79-(.79-.12)*be,.82-.82*be),Z.metalness=.75*(1-be),Z.roughness=.32+.1*be,f.visible=L<17.4,d.visible=!0,H.visible=L>=17.4&&L<25,H.scale.set(1,L<18?Qe((L-17.4)/.6):1,1),E.visible=L>=17.4;let Se=ye(0,o+1+2.5,0),Ve=ye(30,40+2.5+12,8),dt=ye(48,40+2.5,8);if(L<18.2)E.position.copy(Se);else if(L<19.6){let Ye=Qe((L-18.2)/1.4);E.position.copy(Se.clone().lerp(Ve,Ye))}else L<20.4?E.position.copy(Ve.clone().lerp(dt,Qe((L-19.6)/.8))):E.position.copy(dt);let Xe=L<21?0:Qe(Math.min(1,(L-21)/1.4));P.visible=N.visible=L<22.6;for(let[Ye,at]of[[P,0],[N,0]])Ye.position.set(37*Xe,-36*Xe+12*Math.sin(Math.PI*Xe),2*Xe);F.visible=L<17.4},s.userData.view=ye(.15,0,1),s.userData.zoom=.75,s.userData.pinY=80,s}function pf(){let i=new nt,e=-900,t=365,n=-370,s=230,r=new se({color:5593439,roughness:.92}),a=new se({color:14271322,roughness:.7});i.add(h(C(t-e,4,s-n,r),(e+t)/2,-2,(n+s)/2));let o=(u,d,f,p)=>{i.add(h(C(d-u,.4,2,a),(u+d)/2,.2,f),h(C(d-u,.4,2,a),(u+d)/2,.2,p),h(C(2,.4,p-f,a),u,.2,(f+p)/2),h(C(2,.4,p-f,a),d,.2,(f+p)/2))};o(-515,155,-355,212),o(172,352,-255,-8),o(172,352,30,212),o(-850,-545,-255,-30),o(-850,-545,50,212);let l=[];i.userData.items=l;let c=(u,d,f,p,m,y=0)=>(u.rotation.y=p||0,u.position.set(d,0,f),i.add(u),u.userData.key=m,u.userData.idle=y,l.push({key:m,obj:u,anim:u.userData.anim}),u.userData.anim&&u.userData.anim(y),u);return c(ny(),-178,0,0,"rotoMoulder",0),c(j1(),250,-128,Math.PI/2,"injectionMoulder",0),c(J1(),258,150,Math.PI/2,"vacuumFormer",2.6),c(iy(),-700,-150,0,"dieCaster",0),c(sy(),-705,135,0,"sandCasting",0),i.userData.center=ye(-270,0,-60),i}var Vi={abs:{n:"ABS",full:"Acrylonitrile butadiene styrene",kind:"thermo",blurb:"Tough, hard and scratch resistant, with a high-quality glossy finish.",uses:"Games controllers, appliance casings, toys.",cols:[14168636,3108816,2303531,15921902,15886e3,3119706]},pp:{n:"Polypropylene",full:"Polypropylene (PP)",kind:"thermo",blurb:"Light, tough and flexible, with good chemical resistance. Can be bent many times without breaking (living hinges).",uses:"Phone cases, bottle caps, food containers.",cols:[15526624,14168636,3108816,3119706,15886e3,2303531]},hdpe:{n:"HDPE",full:"High density polyethylene",kind:"thermo",blurb:"Tough and stiff, with good chemical resistance. Slightly waxy feel.",uses:"Buckets, bottle caps, crates, bottles.",cols:[15921902,3108816,14168636,3119706,2303531]},acrylic:{n:"Acrylic",full:"Polymethyl methacrylate (PMMA)",kind:"thermo",blurb:"Rigid and hard, can be crystal clear. Glossy, but scratches easily and is brittle.",uses:"Light covers and lenses, displays, signs.",cols:["clear",14168636,3108816,5922662]},uf:{n:"Urea formaldehyde",full:"Urea formaldehyde (UF)",kind:"set",blurb:"Thermosetting: hard, brittle, heat resistant and a good electrical insulator.",uses:"Electrical plugs, sockets and switches."},mf:{n:"Melamine formaldehyde",full:"Melamine formaldehyde (MF)",kind:"set",blurb:"Thermosetting: hard, heat resistant, stain resistant and safe with food.",uses:"Tableware, kitchen worktop laminates."}},th={14168636:"Red",3108816:"Blue",2303531:"Black",15921902:"White",15886e3:"Pink",3119706:"Green",15526624:"Natural",5922662:"Smoke grey",clear:"Clear"};function ul(i,e={}){let t=i==="clear";return new se({color:t?14675960:i,roughness:e.rough??(t?.04:.3),metalness:0,side:un,transparent:t||!!e.tint,opacity:t?.42:e.tint?.6:1,depthWrite:!t})}var Xi=(i,e=.7)=>{let t=i.clone();return t.color.multiplyScalar(e),t};function ry(i){let e=new nt,t=32,n=16,s=9.6,r=1.2;e.add(h(C(t,r,n,i),0,s-r/2,0),h(C(t,s,r,i),0,s/2,n/2-r/2),h(C(t,s,r,i),0,s/2,-n/2+r/2),h(C(r,s,n,i),t/2-r/2,s/2,0),h(C(r,s,n,i),-t/2+r/2,s/2,0));for(let c=0;c<4;c++)for(let u=0;u<2;u++)e.add(h(U(2.4,2.4,1.8,i,24),-12+c*8,s+.9,-4+u*8));for(let c=0;c<3;c++)e.add(h(new Ne(new Tt(3.25,3.25,s-r,24,1,!0),i),-8+c*8,(s-r)/2,0),h(new Ne(new Tt(2.4,2.4,s-r,24,1,!0),i),-8+c*8,(s-r)/2,0),h(new Ne(new Vs(2.4,3.25,24),i),-8+c*8,.01,0,Math.PI/2));let a=Xi(i,.82);for(let c of[-12,-4,4,12])e.add(h(U(1,1,.12,a,16),c,s-r-.07,0));let o=Xi(i,.6);return e.add(h(C(t+.06,.18,n+.06,o),0,.4,0)),e.position.y=-s/2,{obj:ce(e),feat:[{p:ye(0,6.2,0),t:"Fine detail",d:"Injection moulding copies every detail of the mould very accurately, like these crisp studs, and gives a glossy finish straight from the mould: no further finishing needed."},{p:ye(4,-4.9,0),t:"Ejector pin marks",d:"Small round marks where the ejector pins pushed the product out of the mould. They are usually on a hidden face: turn the brick over to find them."},{p:ye(16,-4.4,8),t:"Split line",d:"A fine line where the two halves of the mould met. Designers place it where it will hardly be seen."},{p:ye(-16,1,8),t:"Draft angle",d:"The sides taper very slightly so the product slides out of the mould easily."},{p:ye(-8,-4.8,0),t:"Hollow with tubes",d:"Thin walls of even thickness cool evenly and use less plastic. The tubes underneath grip the studs of the brick below."}]}}function Bd(i=1,e=1){let t=[];for(let n=0;n<96;n++){let s=n/96*Math.PI*2,r=Math.cos(s),a=Math.sin(s),o=42*r,l=19*a,c=d=>Math.exp(-((((s-d+Math.PI*3)%(Math.PI*2)-Math.PI)/.5)**2)),u=24*(c(-2.2)+c(-.94));o+=u*r*.55,l+=u*a*1.1,a>0&&(l*=.8),t.push(new me(o*i,l*e))}return t}function aa(i,e=!0,t=!1){let n=new yt(Bd());e&&!t&&n.holes.push(new Wt(Bd(.94,.88).reverse()));let s=new Zt(n,{depth:i,bevelEnabled:t,bevelSize:1.4,bevelThickness:1.4,bevelSegments:3,curveSegments:24});return s.rotateX(-Math.PI/2),s}function ay(i){let e=new se({color:2500652,roughness:.5}),t=Xi(i,.78),n=new nt,s=new nt;n.add(je(aa(1.6,!1,!1),i),h(je(aa(9),i),0,1.6,0));let r=[[-26,-4],[26,-4],[-36,20],[36,20]];for(let[d,f]of r){n.add(h(U(2.6,2.6,8.5,i,20),d,5.8,f),h(U(1,1,.2,e,12),d,10.1,f));for(let p=0;p<4;p++){let m=p*Math.PI/2,y=new yt([new me(0,0),new me(4,0),new me(0,6)]),g=je(new Zt(y,{depth:.8,bevelEnabled:!1}),i);g.position.set(d+Math.cos(m)*2.4,1.6,f+Math.sin(m)*2.4),g.rotation.y=-m,a(g),n.add(g)}}function a(d){d.geometry.translate(0,0,-.4)}{let d=Xi(i,.8);for(let[f,p]of[[-8,10],[8,10],[-30,12],[30,12]])n.add(h(U(1.2,1.2,.1,d,16),f,1.66,p))}n.add(h(C(40,6,.9,i),0,4.6,-8),h(C(.9,6,26,i),-12,4.6,6),h(C(.9,6,26,i),12,4.6,6),h(C(14,5,.9,i),-30,4.1,8),h(C(14,5,.9,i),30,4.1,8)),s.add(h(je(aa(5.6),i),0,0,0),h(je(aa(1.4,!1,!0),i),0,5.6,0));for(let[d,f]of[[28,-10],[33,-5],[23,-5],[28,0]])s.add(h(U(2.2,2.2,2,t,20),d,8.4,f));s.add(h(C(9,1.6,3,t),-28,8.2,-5),h(C(3,1.6,9,t),-28,8.2,-5));for(let d of[-13,13])s.add(h(U(4.6,4.6,1,e,24),d,7.8,9),h(U(2,2,2.4,e,16),d,9,9),h(U(4.2,4.2,1.4,e,24),d,10.6,9));s.add(h(U(2.6,2.6,.8,t,20),0,7.9,-8));let o=Xi(i,.55),l=h(je(aa(.25),o),0,10.5,0);l.scale.set(1.004,1,1.004),s.position.y=10.6;let c=ce(n,s,l);return c.position.y=-8,{obj:ce(c),feat:[{o:n,p:ye(43.2,10.6,0),t:"Split line",d:"The controller is made in two parts, a top and a bottom. A fine line shows where they join."},{o:s,p:ye(28,9.6,-5),t:"Fine detail",d:"Button holes, curves and textures are moulded in one go, with a high-quality finish straight from the mould."},{o:s,p:ye(-22,7.1,6),t:"Material",d:"ABS: tough, hard and scratch resistant, with a glossy finish. Ideal for products that get handled and dropped."},{o:n,p:ye(8,1.8,10),t:"Ejector pin marks",d:"Round marks on the inside, where ejector pins pushed each part out of the mould.",inside:!0},{o:n,p:ye(-26,10.3,-4),t:"Bosses",d:"Hollow pillars that screws go into to hold the two halves together.",inside:!0,higher:!0},{o:n,p:ye(6,7.7,-8),t:"Ribs",d:"Thin walls across the inside that make the part stiff and strong without making it thick and heavy.",inside:!0,higher:!0},{o:n,p:ye(39,4.6,20),t:"Webs",d:"Small triangular supports that brace the bosses so they do not snap.",inside:!0,higher:!0},{o:n,p:ye(-12,10.7,-15.6),t:"Thin, even walls",d:"Walls of the same thickness all over cool at the same rate, so the part does not warp or sink.",inside:!0}],explode:d=>{s.position.y=10.6+30*d,l.visible=d<.05}}}function oy(i){let e=new se({color:2500652,roughness:.6}),t=(o,l)=>{let c=new nt,u=(b,w,M,R)=>new Tt(b,w,M,40,1,!0,-Math.PI/2,Math.PI),d=je(u(14,14,70),i);d.rotation.z=Math.PI/2,c.add(d);let f=je(u(9,13.6,16),i);f.rotation.z=Math.PI/2,f.position.x=-43,c.add(f);let p=new Hs(14,40,-Math.PI/2,Math.PI);p.rotateY(-Math.PI/2);let m=je(p,e);m.position.x=35,c.add(m);let y=je(u(8.5,9.5,46),i);y.position.set(10,-30,0),y.rotation.z=-.22,c.add(y);let g=new Hs(9.5,30,0,Math.PI);g.rotateX(Math.PI/2);let x=je(g,i);if(x.position.set(5,-52.4,0),x.rotation.z=-.22,c.add(x),c.add(h(C(5,1.2,.6,e),-6,-8,13.9),h(C(2.4,3.4,1,Xi(i,.7)),9,-22,9)),l){for(let[b,w]of[[-20,0],[22,0],[8,-20],[13,-42]]){c.add(h(U(2.4,2.4,12,i,18),b,w,6,Math.PI/2),h(U(1,1,12.2,e,12),b,w,6,Math.PI/2));for(let M of[0,Math.PI]){let R=h(C(.8,5,8,i),b+Math.cos(M)*3.2,w,8);c.add(R)}}for(let b of[-28,-10,8,26]){let w=new Vs(10.6,14,32,1,-Math.PI/2,Math.PI);w.rotateY(-Math.PI/2);let M=je(w,i);M.position.x=b,c.add(M)}}return o<0&&(c.scale.z=-1),c},n=t(1,!1),s=t(-1,!0);n.position.z=.12,s.position.z=-.12;let r=ce(n,s);return r.position.y=14,{obj:ce(r),feat:[{o:s,p:ye(0,14,0),t:"Split line",d:"The casing is made in two halves that meet along this line."},{o:n,p:ye(-47,0,11),t:"Fine detail",d:"Smooth curves, the nozzle and the switch openings are all moulded in one go."},{o:n,p:ye(10,-30,9.6),t:"Material",d:"ABS: tough and hard, a good electrical insulator and has a glossy finish."},{o:s,p:ye(-20,0,.4),t:"Bosses",d:"Hollow pillars for the screws that hold the two halves together.",inside:!0,higher:!0},{o:s,p:ye(-28,12.3,.4),t:"Ribs",d:"Curved ribs inside stiffen the barrel without making the walls thick.",inside:!0,higher:!0},{o:s,p:ye(11.2,-17.5,6),t:"Webs",d:"Thin supports that brace each boss against the wall.",inside:!0,higher:!0}],explode:o=>{n.position.z=.12+42*o,r.rotation.x=-Math.PI/2*o,r.position.y=14-8*o}}}function sr(i,e,t){let n=new yt;return n.moveTo(-i/2+t,-e/2),n.lineTo(i/2-t,-e/2),n.quadraticCurveTo(i/2,-e/2,i/2,-e/2+t),n.lineTo(i/2,e/2-t),n.quadraticCurveTo(i/2,e/2,i/2-t,e/2),n.lineTo(-i/2+t,e/2),n.quadraticCurveTo(-i/2,e/2,-i/2,e/2-t),n.lineTo(-i/2,-e/2+t),n.quadraticCurveTo(-i/2,-e/2,-i/2+t,-e/2),n}function ly(i){let e=sr(38,78,7),t=sr(13,13,4),n=new Wt(sr(13,13,4).getPoints(8).map(u=>new me(u.x-9,u.y+26)));e.holes.push(n);let s=new Zt(e,{depth:1,bevelEnabled:!0,bevelSize:.6,bevelThickness:.6,bevelSegments:2});s.rotateX(-Math.PI/2);let r=sr(38,78,7);r.holes.push(new Wt(sr(35.6,75.6,6).getPoints(12).reverse()));let a=new Zt(r,{depth:7,bevelEnabled:!1});a.rotateX(-Math.PI/2);let o=ce(je(s,i),h(je(a,i),0,1,0),h(C(1.6,1.4,14,i),19.4,5,-10),h(C(1.6,1.4,8,i),-19.4,5,-12));for(let u of[-10,10,26])o.add(h(U(1.2,1.2,.1,Xi(i,.82),16),-6,1.62,u));o.rotation.x=.75,o.updateMatrix();let l=(u,d,f)=>ye(u,d,f).applyMatrix4(o.matrix);return{obj:ce(o),feat:[{p:l(-9,1.6,-26),t:"Moulded-in holes",d:"Openings like this camera cut-out are formed by the mould, so no drilling or cutting is needed."},{p:l(19,7,8),t:"Thin, even walls",d:"Thin walls of the same thickness all round keep the case light and stop it warping as it cools."},{p:l(4,1.8,8),t:"Material",d:"Polypropylene: tough and flexible, so the case can bend to clip on and take knocks."},{p:l(-6,1.8,26),t:"Ejector pin marks",d:"Small round marks on the inside where ejector pins pushed the case out of the mould."}]}}function cy(i){let e=new nt,t=15,n=13;e.add(h(U(t,t,1.4,i,48),0,n-.7,0),h(new Ne(new Tt(t,t,n-1.4,48,1,!0),i),0,(n-1.4)/2,0));for(let o=0;o<60;o++){let l=o/60*Math.PI*2;e.add(h(C(.7,n-3,.7,i),Math.cos(l)*(t+.25),n/2,Math.sin(l)*(t+.25),0,-l,0))}let s=[];for(let o=0;o<=200;o++){let l=o/200,c=l*Math.PI*2*2.2;s.push(ye(Math.cos(c)*(t-1.2),2+l*7,Math.sin(c)*(t-1.2)))}e.add(je(new Fn(new _n(s),300,.75,8),i)),e.add(h(new Ne(new Tt(t+.2,t+.2,2.6,48,1,!0),i),0,-2.4,0));for(let o=0;o<12;o++){let l=o/12*Math.PI*2;e.add(h(C(1,1.6,.6,i),Math.cos(l)*(t+.2),-.6,Math.sin(l)*(t+.2),0,-l,0))}e.position.y=-5,e.rotation.x=Math.PI+.75,e.updateMatrix();let r=(o,l,c)=>ye(o,l,c).applyMatrix4(e.matrix);return{obj:ce(e),feat:[{p:r(0,5,-13.6),t:"Internal thread",d:"The screw thread inside is moulded at the same time as the rest of the cap."},{p:r(15.6,7,0),t:"Grip ribs",d:"Fine ribs round the outside make the cap easier to grip and twist."},{p:r(0,-3.6,15.4),t:"Tamper ring",d:"A ring joined by tiny bridges that snap when the cap is first opened."},{p:r(-15.6,9,0),t:"Material",d:"Polypropylene or HDPE: tough, slightly flexible to seal well, and unaffected by most drinks."}]}}function hy(i){let e=new nt;e.add(h(new Ne(new Tt(24,18,34,48,1,!0),i),0,17,0),h(U(18,18,1.4,i,48),0,.7,0),h(new Ne(new sn(24.6,1.2,10,48),i),0,34,0,Math.PI/2));for(let s of[-1,1])e.add(h(C(3,6,4,i),s*24.4,30,0));let t=[];for(let s=0;s<=40;s++){let r=Math.PI*s/40;t.push(ye(Math.cos(r)*25.5,30+Math.sin(r)*22,0))}return e.add(je(new Fn(new _n(t),60,.6,8),v.steelShiny)),e.add(h(U(1.6,1.6,.2,Xi(i,.8),16),0,1.5,0)),e.position.y=-18,{obj:ce(e),feat:[{p:ye(21,14,6),t:"Draft angle",d:"The sides taper outwards so the bucket slides off the mould easily, and so buckets stack inside each other."},{p:ye(0,16,24.5),t:"Rim",d:"A thicker rim round the top makes the thin wall stiff."},{p:ye(0,-16,0),t:"Injection point",d:"A small round mark in the middle of the base shows where the molten plastic was injected."},{p:ye(-20,-6,10),t:"Material",d:"HDPE or polypropylene: tough, stiff and resistant to chemicals."}]}}function uy(i){let e=new nt,t=sr(40,22,6),n=new Zt(t,{depth:4,bevelEnabled:!0,bevelSize:1.6,bevelThickness:2,bevelSegments:4});n.rotateX(-Math.PI/2),e.add(je(n,i));for(let r=0;r<9;r++)e.add(h(C(1.2,1.2,18,i),-16+r*4,-.6,0,0,0,Math.PI/4));for(let r of[-1,1])e.add(h(C(4,4,2,i),r*18,-2,0));return e.rotation.x=.9,{obj:ce(e),feat:[{p:ye(0,6,3),t:"Clear and glossy",d:"Acrylic can be crystal clear, with a glossy surface straight from the mould."},{p:ye(-12,0,-4),t:"Fine detail",d:"Tiny prisms on the back spread the light. Injection moulding copies detail this fine perfectly."},{p:ye(18,-2,0),t:"Clips",d:"Clips are moulded in so the lens snaps into the light without screws."},{p:ye(8,6,6),t:"Material",d:"Acrylic: rigid and clear, but brittle and scratches easily."}]}}var Ei={brick:{n:"Toy building brick",make:ry,mats:["abs"]},controller:{n:"Games controller",make:ay,mats:["abs"]},hairdryer:{n:"Hairdryer casing",make:oy,mats:["abs"]},phonecase:{n:"Phone case",make:ly,mats:["pp"]},cap:{n:"Bottle cap",make:cy,mats:["pp","hdpe"]},bucket:{n:"Bucket",make:hy,mats:["hdpe","pp"]},lens:{n:"Bike light lens",make:uy,mats:["acrylic"]}},dy={brick:"Studs and tubes need crisp, accurate detail.",controller:"Two shells with buttons, bosses and ribs.",hairdryer:"Two halves that screw together round the motor.",phonecase:"Thin and flexible, clips round your phone.",cap:"Thread and grip ribs moulded in one go.",bucket:"Tapered sides so it releases and stacks.",lens:"Crystal clear, with fine prisms on the back."},fy=`.mkh{display:grid;grid-template-columns:1fr;gap:6px}.mkh.wide{grid-template-columns:1fr 1fr;gap:18px;align-items:end}
.mkp{display:block;width:100%;border:0;background:none;padding:0;margin:0;text-align:left;cursor:pointer;color:#F4F4F6;font:inherit;border-radius:18px;touch-action:manipulation}
.mkp:focus-visible{outline:3px solid #F4B3C2;outline-offset:3px}
.mkp canvas{display:block;width:100%;height:240px}.mkp.ws canvas{height:280px}.mkh.wide .mkp canvas{height:300px}.mkp.fc canvas,.mkp.mk canvas{height:250px}.mkh.wide .mkp.fc canvas,.mkh.wide .mkp.mk canvas{height:300px}
.mkp .plab{display:block;padding:2px 8px 8px}.mkp .plab b{font-size:19px;font-weight:800}.mkp .plab small{font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;border:1.5px solid #F4B3C2;color:#F4B3C2;border-radius:6px;padding:0 4px;vertical-align:3px;margin-left:6px}
.mkp .plab span{display:block;font-size:13.5px;color:#BFC3C8;margin-top:2px}`;function py(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Rn(i)}function my(i,e={}){if(!document.getElementById("mkcss")){let R=document.createElement("style");R.id="mkcss",R.textContent=fy,document.head.appendChild(R)}i.innerHTML=`<div class="mkh"><button type="button" class="mkp box" aria-label="Tool library"><canvas></canvas><span class="plab"><b>Tool library</b><small>beta</small><span>Every N5 tool and machine in 3D</span></span></button>
   <button type="button" class="mkp ws" aria-label="The workshop"><canvas></canvas><span class="plab"><b>The workshop</b><small>beta</small><span>Explore the machines and how to stay safe</span></span></button>
   <button type="button" class="mkp fc" aria-label="The factory"><canvas></canvas><span class="plab"><b>The factory</b><small>beta</small><span>How products are made in industry</span></span></button>
   <button type="button" class="mkp mk" aria-label="Bench skills"><canvas></canvas><span class="plab"><b>Bench skills</b><small>beta</small><span>Make joints step by step</span></span></button></div>`;let t=i.querySelector(".mkh");function n(R,T,_,E){let B=new oi({canvas:R,antialias:!0,alpha:!0});B.toneMapping=qn,B.shadowMap.enabled=E==="real",B.shadowMap.type=xo;let P=new yn;P.environment=new bi(B).fromScene(new fs,.04).texture,P.environmentIntensity=.75;let N=new Xn(16773596,2.2);N.position.set(140,320,220);let H=new Xn(16767202,1);H.position.set(-160,80,-200),P.add(N,H,new Xs(16777215,.25),T),T.updateMatrixWorld(!0);let F=new Ht().setFromObject(T),D=F.getCenter(ye(0,0,0)),k=F.getBoundingSphere(new An).radius;if(E==="real"){N.castShadow=!0,N.target.position.copy(D),P.add(N.target);let q=N.shadow;q.mapSize.set(1024,1024),Object.assign(q.camera,{left:-k,right:k,top:k,bottom:-k,near:1,far:1200}),q.camera.updateProjectionMatrix(),q.bias=-6e-4,q.radius=4,T.traverse(W=>{W.isMesh&&(W.castShadow=!W.material.transparent,W.receiveShadow=!0)})}else{let q=F.getSize(ye(0,0,0)),W=new Ne(new Pn(q.x*1.5,q.z*2),new xi({map:py(),transparent:!0,depthWrite:!1}));W.rotation.x=-Math.PI/2,W.position.set(D.x,F.min.y+.05,D.z),P.add(W)}let Y=new rs(-1,1,1,-1,.1,6e3),Z=ye(1,.82,1).normalize();return Y.position.copy(D).addScaledVector(Z,2500),Y.lookAt(D),{r:B,sc:P,cam:Y,R:k*_,obj:T}}let s=K1(),r=df({noBench:!0}),a=pf(),o=uf(),l=t.querySelector(".box"),c=t.querySelector(".ws"),u=t.querySelector(".fc"),d=t.querySelector(".mk"),f=[{el:l,cv:l.querySelector("canvas"),kind:"box"},{el:c,cv:c.querySelector("canvas"),kind:"ws"},{el:u,cv:u.querySelector("canvas"),kind:"fc"},{el:d,cv:d.querySelector("canvas"),kind:"mk"}];Object.assign(f[0],n(f[0].cv,s,1.35,"soft")),Object.assign(f[1],n(f[1].cv,r,.8,"real")),Object.assign(f[2],n(f[2].cv,a,.5,"real")),Object.assign(f[3],n(f[3].cv,o,.85,"real")),f[3].r.shadowMap.autoUpdate=!1,f[3].r.shadowMap.needsUpdate=!0,f[2].r.shadowMap.autoUpdate=!1,f[2].r.shadowMap.needsUpdate=!0,f[2].c0=f[2].cam.position.clone();{let R=new Ht().setFromObject(a);f[2].ctr=R.getCenter(ye(0,0,0))}let p=-1,m=!0,y=0,g=0,x=0;function b(){t.classList.toggle("wide",i.clientWidth>=640);let R=Math.min(2,devicePixelRatio||1);f.forEach(T=>{let _=T.cv.clientWidth,E=T.cv.clientHeight;if(!_||!E)return;T.r.setPixelRatio(R),T.r.setSize(_,E,!1);let B=_/E;Object.assign(T.cam,{left:-T.R*B,right:T.R*B,top:T.R,bottom:-T.R}),T.cam.updateProjectionMatrix()})}new ResizeObserver(b).observe(i),b(),new IntersectionObserver(R=>{m=R[0].isIntersecting}).observe(i),f[0].el.addEventListener("click",()=>{p<0&&(p=performance.now()/1e3,setTimeout(()=>{p=-1,e.onBox&&e.onBox()},1e3))}),f[1].el.addEventListener("click",()=>{e.onWs&&e.onWs()}),f[2].el.addEventListener("click",()=>{e.onFc&&e.onFc()}),f[3].el.addEventListener("click",()=>{e.onMk&&e.onMk()});let w=R=>R<0?0:R>1?1:R;function M(R){if(y=requestAnimationFrame(M),!m||!i.offsetParent||R-g<33)return;g=R;let T=R/1e3,_;if(p>=0)_=w((T-p)/.8);else{let E=T%7/7;_=E<.35?0:E<.5?(E-.35)/.15:E<.8?1:1-(E-.8)/.15}s.userData.open(_),r.rotation.y=Math.sin(T*.2)*.06,o.rotation.y=Math.sin(T*.25+1)*.12,f[3].r.shadowMap.needsUpdate=!0,r.userData.anim&&r.userData.anim(T);{let E=f[2],B=Math.sin(T*.18)*.12,P=E.c0.clone().sub(E.ctr);P.applyAxisAngle(ye(0,1,0),B),E.cam.position.copy(E.ctr).add(P),E.cam.lookAt(E.ctr)}x++;for(let E of f)(E.kind!=="fc"&&E.kind!=="mk"||x%2===0)&&E.r.render(E.sc,E.cam)}return y=requestAnimationFrame(M),{stop(){cancelAnimationFrame(y)}}}var mf={eye:{t:"Wear eye protection",c:"M004",g:'<circle cx="50" cy="40" r="20" fill="#fff"/><path d="M22 92c2-17 13-26 28-26s26 9 28 26z" fill="#fff"/><rect x="27" y="31" width="46" height="15" rx="7" fill="#fff" stroke="#005EB8" stroke-width="3"/><rect x="31" y="34" width="16" height="9" rx="4.5" fill="#005EB8"/><rect x="53" y="34" width="16" height="9" rx="4.5" fill="#005EB8"/>'},clothing:{t:"Wear an apron",c:"M010",g:'<path d="M41 28c0-8 4-13 9-13s9 5 9 13" fill="none" stroke="#fff" stroke-width="4"/><path d="M38 28h24v20l8 38H30l8-38z" fill="#fff"/><path d="M38 48H22M62 48h16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="43" y="58" width="14" height="11" rx="2" fill="none" stroke="#005EB8" stroke-width="3"/>'},gloves:{t:"Wear protective gloves",c:"M009",g:'<path d="M34 86V50c0-3 2-5 5-5V26c0-3 2-5 4.5-5S48 23 48 26v-4c0-3 2-5 4.5-5S57 19 57 22v4c0-3 2-5 4.5-5S66 23 66 26v6c0-3 2-5 4.5-5S75 29 75 32v28c0 14-6 26-14 26z" fill="#fff"/><path d="M34 78h41" stroke="#005EB8" stroke-width="3"/><path d="M39 45l-9-9c-2-2-5-2-7 0s-2 5 0 7l11 13" fill="#fff"/>'},mask:{t:"Wear a dust mask",c:"M016",g:'<circle cx="50" cy="38" r="20" fill="#fff"/><path d="M22 92c2-17 13-26 28-26s26 9 28 26z" fill="#fff"/><path d="M35 40c4 1 9 2 15 2s11-1 15-2v8c0 7-7 12-15 12s-15-5-15-12z" fill="#005EB8"/><path d="M30 38l6 4M70 38l-6 4" stroke="#005EB8" stroke-width="3"/>'}};function gy(i){let e=mf[i];return`<svg viewBox="0 0 100 100" role="img" aria-label="${e.t}"><circle cx="50" cy="50" r="48" fill="#005EB8"/><circle cx="50" cy="50" r="48" fill="none" stroke="#fff" stroke-width="2.5"/>${e.g}</svg>`}function gf(i){return`<div class="bmsigns">${i.map(e=>`<div class="bmsign">${gy(e)}<span>${mf[e].t}</span></div>`).join("")}</div>`}var xf=`.bmsigns{display:flex;flex-wrap:wrap;gap:10px;margin:2px 0 12px}.bmsign{display:flex;align-items:center;gap:8px;background:#fff;color:#003B75;border-radius:999px;padding:4px 12px 4px 4px;font-size:13.5px;font-weight:800;line-height:1.15;max-width:100%}
.bmsign svg{width:40px;height:40px;flex:none}`,_f="Stand up while you work: never sit at the bench or a machine.",xy={"Steel rule":["Measures and marks out lengths accurately, in millimetres. Always measure from the zero end.",["Carry it flat and keep the edge clean.","Don\u2019t use it as a lever or scraper: it bends and the scale is lost."]],"Try square":["Marks lines at 90\xB0 to an edge on wood, and checks that corners and edges are square. Hold the stock tight against a straight edge.",["Keep the stock against the face edge so the line is true.","Store it flat so the blade stays at 90\xB0."]],"Engineer\u2019s square":["The all-steel version of the try square, used on metal and plastic. Marks and checks 90\xB0 with a scriber.",["Handle with care: dropping it can knock it out of square.","Watch the sharp corners of the blade."]],"Marking gauge":["Marks a line parallel to an edge of wood, such as the depth of a joint. The stock slides along the edge while the pin scratches the line.",["Keep fingers away from the pin.","Push the gauge away from you along the edge."]],"Mortise gauge":["Has two pins, so it marks two parallel lines at once, such as the width of a mortise or tenon.",["Keep fingers away from the pins.","Set both pins before marking, then lock the stock."]],Scriber:["Scratches fine marking-out lines on metal and plastic, where a pencil wouldn\u2019t show.",["The point is very sharp: carry it point down and put the cap on if it has one.","Never leave it lying where someone could kneel or lean on it."]],"Centre punch":["Makes a small dent at the centre of a hole on metal, so the drill bit starts in the right place and doesn\u2019t wander.",["Hold it upright and tap it with a ball-pein hammer, not a mallet.","Wear goggles in case of chips."]],Dividers:["Scribe circles and arcs on metal, and step off equal distances. One leg sits in a centre punch mark.",["Both points are sharp: carry them closed and point down."]],"Outside callipers":["Measure the outside size of round or curved work, such as a bar on the lathe. The setting is then checked against a rule.",["Stop the lathe before measuring work on it."]],"Odd-leg callipers":["Mark a line parallel to an edge on metal, or find the centre of a bar. One leg runs along the edge.",["The point is sharp: keep fingers clear and carry it closed."]],Pencil:["Marks out on wood. A sharp pencil gives fine, accurate lines; shade the waste so you know which side to cut.",["Keep it sharp with a sharpener, not a knife."]],"Tenon saw":["Makes straight cuts in wood, such as the shoulders of joints. The stiff back keeps the blade straight.",["Clamp the work first and keep your other hand behind the saw.","Start the cut gently with short strokes."]],"Coping saw":["Cuts curves in wood and plastic. The thin blade can be turned in the frame to follow the line.",["Fit the blade with the teeth pointing towards the handle.","Hold the work in a vice and keep fingers clear of the blade."]],Hacksaw:["Cuts metal and plastic. The fine teeth on the tensioned blade cut on the forward stroke.",["Fit the blade with the teeth pointing forwards and tension it well.","Hold the work low in the vice so it doesn\u2019t vibrate."]],"Junior hacksaw":["A small hacksaw for light cutting of thin metal, plastic and tube.",["Hold the work firmly in a vice.","Watch for sharp burrs on the cut edge."]],"Bevel-edge chisel":["Cuts and pares wood, for example to remove the waste from a housing or halving joint. The bevelled sides get into corners.",["Always keep both hands behind the cutting edge.","Clamp the work and chisel away from your body."]],"Mortise chisel":["A strong, thick chisel for chopping deep mortises in wood with a mallet.",["Clamp the work firmly.","Strike it with a mallet, never a hammer."]],"Ball-pein hammer":["A metalwork hammer: the flat face hits a centre punch or rivet, and the round ball end shapes metal and spreads rivets.",["Check the head is tight on the handle.","Wear goggles when striking metal."]],"Cross-pein hammer":["Its narrow pein starts small nails and pins held between the fingers, then the flat face drives them home.",["Check the head is tight on the handle.","Keep your fingers clear once the nail stands on its own."]],"Claw hammer":["Drives nails into wood, and the claw pulls nails out.",["Check the head is tight.","Keep your fingers clear once the nail is started."]],"Wooden mallet":["Strikes chisels and taps wooden joints together without damaging them.",["Never hit metal or a hammer with it.","Make sure the head is tight on the handle."]],"Hide mallet":["A soft-faced mallet for shaping thin sheet metal without marking or stretching it.",["Keep it for sheet metal work, not chisels."]],"Jack plane":["A long plane for flattening and straightening wood, and planing it down to size.",["Keep your hands behind the blade and lay the plane on its side when not in use.","Clamp the wood firmly."]],"Smoothing plane":["A shorter plane for the final smooth finish on wood.",["Lay it on its side so the blade isn\u2019t damaged.","Keep fingers away from the mouth of the plane."]],"Rebate plane":["Cuts a rebate (a step) along the edge of wood. The blade goes right to the side of the plane.",["Clamp the work and keep hands behind the blade."]],"Plough plane":["Cuts a groove along wood, for example to hold a drawer bottom or a back panel.",["Clamp the work and keep hands behind the blade."]],"Twist drill":["Drills holes in wood, metal and plastic. The spiral flutes carry the waste out of the hole.",["Hold the work in a machine vice or clamp it, never by hand.","Remove the chuck key before starting."]],"Forstner bit":["Drills clean, flat-bottomed holes in wood, such as for hinges.",["Clamp the work and use a slow speed.","Lift the bit out often to clear the chips."]],"Countersink bit":["Shapes the top of a hole into a cone so a countersunk screw sits flush with the surface.",["Clamp the work and use a slow speed."]],"Centre drill":["Drills a small, accurate starting hole, for example in the end of a bar on the centre lathe, before drilling the full size.",["Use a slow, steady feed; the small tip snaps easily."]],"Flat file":["Smooths and shapes flat surfaces and edges of metal and plastic, and removes burrs.",["Always use a file with a handle fitted.","Brush away filings; don\u2019t blow them."]],"Half-round file":["One flat side and one curved side, for shaping flat surfaces and inside curves.",["Always use it with a handle fitted."]],"Hand router":["Levels the bottom of a housing or groove in wood to an even depth.",["Clamp the work and keep both hands on the handles."]],Pliers:["Grip, bend and hold small parts and wire. The cutters at the jaws snip wire.",["Keep fingers clear of the cutters.","Don\u2019t use them on nuts: they slip and round the corners."]],"Pop-rivet gun":["Fixes thin sheet material together from one side using pop rivets. Squeezing the handles pulls the mandrel and spreads the rivet.",["Point it away from people: the snapped mandrel can fly out.","Keep fingers clear of the nose."]],"Flat screwdriver":["Drives and removes slotted screws. Choose a tip that fills the slot.",["Never use it as a chisel or lever.","Hold the work so the screwdriver can\u2019t slip into your hand."]],"Cross-head screwdriver":["Drives and removes cross-head screws. The tip should fit the screw head exactly.",["Push firmly so it doesn\u2019t slip.","Don\u2019t use it as a lever."]],"Tin snips":["Cut thin sheet metal, like scissors.",["The cut edges are very sharp: wear gloves and remove the burr with a file."]],"Bending bars":["Held in the vice, they grip sheet metal along a line so it can be folded cleanly.",["Tighten the vice firmly and watch for sharp sheet edges."]],"Tap and wrench":["Cuts an internal thread inside a drilled hole so a bolt can screw in. Turn forwards, then back a little to break the swarf.",["Keep the tap upright: taps are brittle and snap if forced."]],"Die and stock":["Cuts an external thread on a metal rod so a nut can screw on.",["Keep the die square to the rod and use cutting fluid."]],"Nail punch":["Knocks the head of a nail just below the surface of the wood, so the hole can be filled.",["Hold it upright and strike it squarely."]],Bradawl:["Makes a small starting hole in wood for a screw or nail.",["Push it in across the grain and keep your other hand clear."]],"Bench vice":["Holds wood firmly on the bench while you saw, chisel or plane it.",["Don\u2019t over-tighten or hit the handle with a hammer.","Keep the handle turned down so no one walks into it."]],"Engineer\u2019s vice":["Holds metal and plastic firmly for sawing, filing and bending.",["Use soft jaws to protect finished surfaces.","Don\u2019t leave the handle sticking out."]],"Machine vice":["Holds work flat and secure on the pillar drill table, so you never hold it by hand.",["Bolt or clamp it to the table if the work is large."]],"Hand vice":["Holds small or thin pieces safely while drilling or working on them, instead of using your fingers.",["Grip the work tightly before drilling."]],"Soft jaws (vice guards)":["Fit over the jaws of an engineer\u2019s vice to stop them marking soft or finished work.",["Check they sit firmly before tightening the vice."]],"G clamp":["Holds work to the bench or holds pieces together while glue sets.",["Use scrap wood under the jaws to protect the work.","Don\u2019t over-tighten."]],"Quick clamp":["A one-handed clamp: squeeze the trigger to tighten and press the button to release. Great for holding a guide block when sawing.",["Check it is tight before you start cutting."]],"Sash cramp":["A long cramp that holds a frame or wide panel together while the glue sets.",["Use scrap wood under the jaws and check the frame is square."]],"Belt sander":["Sands, smooths and shapes the edges and ends of wood. The belt runs down towards the table.",["Switch on the dust extraction first.","Rest the work on the table and keep fingers well away from the belt.","Only sand below the guard; never sand very small pieces by hand.","Wear goggles."]],"Pillar drill":["Drills accurate holes at 90\xB0 in wood, metal and plastic. The depth stop sets how deep the hole goes.",["Hold the work in a machine vice or clamp it, never by hand.","Lower the guard and remove the chuck key before starting.","Tie hair back, tuck in loose clothing and wear goggles."]],"Fret (scroll) saw":["Cuts curves and shapes in thin wood, MDF and acrylic with a fine blade that moves up and down quickly.",["Set the hold-down foot just above the work.","Keep fingers to the side of the blade, never in line with it.","Switch off and wait before clearing offcuts."]],"Centre lathe":["Turns metal (and some plastics) to make round parts: facing off, parallel turning, taper turning, knurling and drilling.",["Close the chuck guard and remove the chuck key.","Never touch swarf with your hands; use a brush.","Stop the machine before measuring. Wear goggles."]],"Wood lathe":["Turns wood to make round parts such as handles and legs, or bowls on a faceplate.",["Set the tool rest close to the work and spin the wood by hand before switching on.","Hold the tool firmly on the rest.","Wear goggles or a face shield."]],"Mortise machine":["Cuts square holes (mortises) in wood for mortise and tenon joints, using a hollow square chisel with an auger inside.",["Clamp the work against the fence.","Set the depth stop and keep hands away from the chisel."]],Fluidiser:["Plastic dip coating: a hot metal part is dipped into plastic powder kept moving by air, and the powder melts onto it as a smooth coating.",["Use tongs and heatproof gloves for hot metal.","Let the part cool on a heatproof surface.","Work with good ventilation."]],"Spot welder":["Joins two pieces of thin sheet steel. Pulling the lever down squeezes the sheets between the copper electrodes, and a large electric current melts a small spot where they touch.",["Keep fingers away from the electrodes; pull the lever down only when your hands are clear.","The metal stays very hot: hold it with pliers and let it cool.","Make sure the metal is clean so the weld is strong."]],"Strip heater":["Heats a narrow line across thermoplastic sheet such as acrylic so it can be bent along that line.",["Never touch the hot wires or the cover above them.","Don\u2019t overheat: bubbles mean it\u2019s too hot.","Switch off when finished and let it cool."]]},_y={"Tin snips":["gloves"],"Bending bars":["gloves"],"Hide mallet":["gloves"],"Belt sander":["mask"],Fluidiser:["gloves"],"Strip heater":["gloves"],"Spot welder":["gloves"]},yy=i=>["eye","clothing",..._y[i]||[]],vy={bench:{n:"Workbench and bench vice",use:"Where most hand-tool work happens: marking out, sawing, chiselling and planing. The bench vice holds wood firmly while you work on it.",safe:["Keep the bench clear: put tools back once you have used them.","Clamp the work in the vice or to the bench, never hold it in your hand while you saw or chisel.","Keep both hands behind a chisel\u2019s cutting edge.","Carry tools with sharp edges pointing down."],ppe:null},pillarDrill:{n:"Pillar drill",use:"Drills accurate holes at 90\xB0 to the surface in wood, metal and plastic. The table moves up and down, and the depth stop sets how deep the hole goes.",safe:["Hold the work in a machine vice or clamp it to the table, never by hand.","Lower the guard over the chuck before you start.","Take the chuck key out straight away.","Tie hair back and tuck in loose clothing.","Know where the emergency stop is."],ppe:null},beltSander:{n:"Belt sander",use:"Sands, smooths and shapes the edges and ends of wood. The belt runs down towards the table, so the work is pushed onto the table, not lifted.",safe:["Switch on the dust extraction first.","Rest the work on the table and keep fingers well away from the belt.","Only sand below the guard, using the gap above the table.","Never sand very small pieces by hand."],ppe:null},fretSaw:{n:"Fret (scroll) saw",use:"Cuts curves and shapes in thin wood, MDF and acrylic. The fine blade moves up and down very quickly.",safe:["Set the hold-down foot just above the work.","Keep fingers to the side of the blade, never in line with it.","Feed the work gently; let the blade do the cutting.","Switch off and wait before clearing offcuts."],ppe:null},centreLathe:{n:"Centre lathe",use:"Turns metal (and some plastics) to make round parts. Processes include facing off, parallel turning, taper turning, knurling and drilling.",safe:["Close the chuck guard before starting.","Remove the chuck key: never leave it in the chuck.","Never touch swarf with your hands; use a brush.","Stop the machine before measuring the work.","Tie hair back and tuck in loose clothing."],ppe:null},woodLathe:{n:"Wood lathe",use:"Turns wood to make round parts such as handles and legs (between centres) or bowls (on a faceplate).",safe:["Set the tool rest close to the work and turn the wood by hand before switching on.","Check the speed is right for the size of the wood.","Hold the turning tool firmly on the tool rest.","Move the tool rest out of the way before sanding."],ppe:null},mortiser:{n:"Mortise machine",use:"Cuts square holes (mortises) in wood for mortise and tenon joints. A square hollow chisel cuts the sides while an auger bit inside clears the waste.",safe:["Clamp the work against the fence before cutting.","Set the depth stop so the chisel stops at the right depth.","Keep hands away from the chisel.","Lift the lever slowly to clear the chips."],ppe:null},fluidiser:{n:"Fluidiser (with oven)",use:"Plastic dip coating. A metal part is heated in the oven, then dipped into plastic powder that is kept moving by air from below. The powder melts onto the hot metal to give a smooth plastic coating.",safe:["Use tongs to move hot metal and heatproof gloves.","Hold the part in the powder for a few seconds only, then let it cool on a heatproof surface.","Keep the lid closed when not in use.","Work with good ventilation."],ppe:null},spotWelder:{n:"Spot welder",use:"Joins two pieces of thin sheet steel together. Pulling the lever down squeezes the sheets between the copper electrodes, then a large electric current melts a small spot where they touch, welding them.",safe:["Keep fingers well away from the electrodes: pull the lever down only when your hands are clear.","The metal stays very hot after welding: hold it with pliers and let it cool.","Sparks can fly: keep the area clear.","Make sure the metal is clean so the weld is strong."],ppe:null},stripHeater:{n:"Strip heater",use:"Heats a narrow line across a sheet of thermoplastic such as acrylic so that it can be bent along that line, often over a former or jig.",safe:["Never touch the hot wires or the plate above them.","Turn thicker sheet over to heat both sides evenly.","Do not overheat: bubbles mean it is too hot.","Switch off when finished and let it cool."],ppe:null}},My={spotWelder:["eye","clothing","gloves"],beltSander:["eye","clothing","mask"],fluidiser:["eye","clothing","gloves"],stripHeater:["eye","clothing","gloves"]},by=["bench","pillarDrill","beltSander","centreLathe","woodLathe","mortiser","fretSaw","spotWelder","fluidiser","stripHeater"],Sy={sandCasting:{n:"Sand casting",use:"Molten metal is poured into a mould made of sand. The mould is broken up to get the casting out, so each mould is used once: good for one-off and small batch production.",steps:[[0,2,"Sand is rammed into the drag (the bottom box) round the wooden pattern."],[2,3,"The drag is turned over so the flat face of the pattern is on top."],[3,6,"The cope (the top box) goes on. Pins for the sprue and the riser are put in, then the cope is rammed with sand."],[6,9.5,"The pins come out, the cope is lifted off and the pattern is taken out, leaving a hollow the shape of the product. The cope goes back on."],[9.5,14.6,"Molten aluminium is poured into the sprue until it shows at the riser. The riser lets air out and feeds the casting as it shrinks."],[14.6,17,"The metal cools and turns solid."],[17,20.5,"The sand is broken away and the casting is lifted out."],[20.5,23,"The sprue and riser are cut off. The casting is then fettled: rough edges are filed and smoothed."]]},dieCaster:{n:"Die casting machine",use:"Molten metal is forced into a steel mould called a die. Dies are expensive but last for thousands of castings, so die casting suits mass production. This machine makes aluminium model cars.",steps:[[0,2.4,"A ladle scoops molten aluminium from the holding furnace."],[2.4,6,"The ladle pours the metal into the shot sleeve."],[6,6.4,"The plunger forces the metal into the closed die under high pressure."],[6.4,8.4,"The metal cools and turns solid in seconds."],[8.4,9.4,"The die opens and ejector pins push the casting out."],[9.4,12,"The finished car drops into the bin and the die closes, ready for the next one."]]},rotoMoulder:{n:"Rotational moulding machine",use:"Makes large hollow products in one piece, such as kayaks, traffic cones and water tanks. This machine is making a kayak.",steps:[[0,2.5,"Plastic powder is put into the bottom half of the mould."],[2.5,4,"The mould is closed and clamped."],[4,9,"The oven doors open and the mould moves into the oven."],[9,18,"The mould turns slowly on two axes while it heats, so the melting powder coats the inside evenly."],[18,22,"The mould comes back out of the oven."],[22,27,"It keeps turning while the fans cool it, so the plastic sets evenly."],[27,33.5,"The mould opens and the kayak is lifted out: one hollow piece."]]},injectionMoulder:{n:"Injection moulding machine",use:"Mass-produces accurate plastic parts with a good finish, such as bottle tops, casings and toy building bricks.",steps:[[0,3.2,"Plastic granules drop from the hopper into the barrel. Heater bands and the turning screw melt them, and molten plastic builds up at the front."],[3.2,4,"The screw rams forward, forcing the molten plastic into the closed mould."],[4,4.96,"The plastic cools and hardens in the mould."],[4.96,5.6,"The mould opens."],[5.6,7.85,"Ejector pins push the brick out and it drops into the bin."]]},vacuumFormer:{n:"Vacuum former",use:"Shapes a thermoplastic sheet over a mould. Used for trays, packaging and blister packs. This one is making a biscuit tray.",steps:[[0,3,"A thermoplastic sheet such as HIPS is clamped in the frame."],[3,9,"The heater slides over and the sheet softens."],[9,11,"The heater goes back and the lever raises the mould into the soft sheet."],[11,13.5,"The vacuum pump sucks the air out, pulling the sheet tight over the mould."],[13.5,17.5,"The mould is lowered, the frame is opened and the formed sheet is taken out."],[17.5,20.5,"The tray is trimmed out of the sheet."],[20.5,23,"The finished tray."]]}},Ey=["sandCasting","dieCaster","rotoMoulder","injectionMoulder","vacuumFormer"],wy=`.bttw [hidden]{display:none!important}.bttw{position:absolute;inset:0;overflow:hidden;font-family:inherit;color:#F4F4F6}.bttview{position:absolute;inset:0}.bttview canvas{display:block;touch-action:none}
.bttpins{position:absolute;inset:0;pointer-events:none}
.bttpin{position:absolute;left:0;top:0;pointer-events:auto;display:flex;flex-direction:column;align-items:center;gap:4px;border:0;background:none;color:#fff;font:inherit;cursor:pointer;touch-action:manipulation}
.bttpin span{background:rgba(30,31,35,.88);border:1px solid rgba(244,179,194,.55);border-radius:999px;padding:4px 10px;font-size:13px;font-weight:700;white-space:nowrap}
.bttpin i{order:2;width:12px;height:12px;border-radius:50%;background:#F4B3C2;box-shadow:0 0 0 4px rgba(244,179,194,.3)}
.bttpin.bton span{background:#F4B3C2;color:#2B141D}.bttw.btfocus .bttpin:not(.bton):not(.btlook){opacity:.35}
.bttpin.btlook span{background:#B9E5CB;color:#1F4D33;border-color:#B9E5CB}.bttpin.btlook i{background:#B9E5CB;box-shadow:0 0 0 5px rgba(185,229,203,.35);animation:btpulse 1.6s ease-in-out infinite}
@keyframes btpulse{50%{box-shadow:0 0 0 10px rgba(185,229,203,.12)}}
.btttop{position:absolute;left:12px;top:12px;background:rgba(30,31,35,.88);border-radius:14px;padding:8px 12px;pointer-events:none}
.btttop b{display:block;font-size:17px}.btttop span{font-size:13px;color:#BFC3C8}
.bttback{position:absolute;left:12px;top:68px;border:0;border-radius:999px;background:#B9E5CB;color:#1F4D33;font:inherit;font-weight:800;padding:9px 16px;cursor:pointer}
.bttcard{position:absolute;right:calc(12px + env(safe-area-inset-right));top:12px;bottom:12px;width:clamp(250px,33%,380px);overflow:auto;background:rgba(30,31,35,.95);border:1px solid #3A3B41;border-radius:20px;padding:18px 18px 14px;box-shadow:0 10px 30px rgba(0,0,0,.4)}
.bttcard h2{margin:0 40px 8px 0;font-size:22px;color:#F4B3C2!important}.bttcard h3{margin:14px 0 6px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#B9E5CB!important}
.bttuse{margin:0;font-size:15px;line-height:1.45;color:#E6E7EA}.bttsafe{margin:0;padding-left:20px;font-size:15px;line-height:1.45}.bttsafe li{margin:0 0 6px}.bttcard h3.bttmust{color:#8EC5FF!important}
.bttx{position:absolute;right:10px;top:10px;width:36px;height:36px;border:0;border-radius:50%;background:#3A3B41;color:#fff;font-size:16px;cursor:pointer}
.bttnav{display:flex;gap:8px;margin-top:14px}.bttnav button{flex:1;border:1px solid #3A3B41;background:#2A2B30;color:#F4F4F6;border-radius:12px;padding:10px;font:inherit;font-weight:700;cursor:pointer}
.bttsteps{list-style:none;margin:6px 0 0;padding:0;display:grid;gap:7px}
.bttstep{display:flex;gap:10px;align-items:center;width:100%;min-height:44px;text-align:left;border:1px solid transparent;background:none;color:#E6E7EA;border-radius:14px;padding:6px 8px;font:inherit;font-size:14.5px;line-height:1.4;cursor:pointer}
.bttstep b{flex:none;width:32px;height:32px;border-radius:50%;background:#3A3B41;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px}
.bttstep span{display:none}.bttstep em{font-style:normal;font-size:13px;color:#8C9096}
.bttstep.btrev span{display:block}.bttstep.btrev em{display:none}.bttstep.btrev{background:#26272C;border-color:#3A3B41}
.bttstep.btdone b{background:#B9E5CB;color:#1F4D33}
.bttstep.bton{border-color:#7FD3A4;background:#1F3A2B}.bttstep.bton b{background:#7FD3A4;color:#12301F}.bttstep.bton span{color:#fff}
.bttstep.btnx b{box-shadow:0 0 0 3px rgba(185,229,203,.55);animation:btpulse 1.6s ease-in-out infinite}
.bttplay{display:grid;gap:8px;margin:14px 0 0}.bttplay button{border:0;border-radius:12px;padding:11px;font:inherit;font-weight:800;cursor:pointer;background:#2A2B30;color:#F4F4F6;border:1px solid #3A3B41}
.bttplay button.btgo{background:#B9E5CB;color:#1F4D33;border-color:#B9E5CB}.bttplay button.btgame{background:#F4B3C2;color:#2B141D;border-color:#F4B3C2}
.bttop{display:grid;gap:7px;margin-top:8px}.bttop button{display:flex;gap:10px;align-items:center;text-align:left;border:1px solid #3A3B41;background:#26272C;color:#E6E7EA;border-radius:12px;padding:10px 12px;font:inherit;font-size:14.5px;cursor:pointer}
.bttop button b{flex:none;width:28px;height:28px;border-radius:50%;background:#3A3B41;display:flex;align-items:center;justify-content:center;font-size:13px}
.bttop button.btok{border-color:#7FD3A4;background:#1F3A2B;cursor:default}.bttop button.btok b{background:#7FD3A4;color:#12301F}
.bttop button.btno{animation:btshake .4s}@keyframes btshake{25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
.bttmsg{margin:10px 0 0;min-height:22px;font-size:14.5px;color:#F4B3C2}
.bttov{position:absolute;inset:14px;border-radius:22px;background:rgba(14,15,18,.84);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);border:1px solid #3A3B41;box-shadow:0 18px 50px rgba(0,0,0,.55);overflow:hidden;display:flex;flex-direction:column}
.bttovh{display:flex;align-items:center;gap:10px;padding:14px 16px 6px}.bttovh div{flex:1;min-width:0}.bttovh small{display:block;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:#B9E5CB}.bttovh b{display:block;font-size:20px}
.bttovh button{border:0;border-radius:999px;background:#3A3B41;color:#fff;font:inherit;font-weight:700;padding:8px 14px;cursor:pointer}
.bttovb{position:relative;flex:1;min-height:0}.bttovb canvas{display:block;width:100%;height:100%;touch-action:none}
.bttpvp{position:absolute;inset:0;pointer-events:none}.bttpvp .bttpin i{background:#B9E5CB;box-shadow:0 0 0 4px rgba(185,229,203,.3)}.bttpvp .bttpin span{border-color:rgba(185,229,203,.55)}.bttpvp .bttpin.bton span{background:#B9E5CB;color:#1F4D33}
.bttpvp .bttpin sup{font-size:10px;margin-left:5px;color:#F4B3C2}.bttpvp .bttpin.btdis{opacity:.4;filter:grayscale(1);pointer-events:none}.bttpvp .bttpin.btdis i{background:#8C9096;box-shadow:none}
.bttinfo{position:absolute;left:14px;right:14px;bottom:62px;max-width:440px;margin:auto;background:rgba(30,31,35,.96);border:1px solid #4A4B52;border-radius:16px;padding:12px 14px}.bttinfo b{display:block;color:#B9E5CB;margin-bottom:3px}.bttinfo p{margin:0;font-size:14.5px;line-height:1.45}
.bttovf{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:8px 16px 14px}.bttovf span{flex:1;font-size:13px;color:#A9ADB3;min-width:160px}
.bttovf button{border:0;border-radius:12px;padding:10px 14px;font:inherit;font-weight:800;cursor:pointer;background:#F4B3C2;color:#2B141D}.bttovf button.btsec{background:#2A2B30;color:#F4F4F6;border:1px solid #3A3B41}
.bttgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px;padding:8px 16px;overflow:auto;align-content:start}
.bttopt{border:1px solid #3A3B41;background:#26272C;color:#E6E7EA;border-radius:16px;padding:12px;text-align:left;font:inherit;cursor:pointer;display:flex;flex-direction:column;gap:6px}
.bttopt.bton{border-color:#7FD3A4;background:#1F3A2B}.bttopt b{font-size:16px}.bttopt small{font-size:12.5px;color:#A9ADB3;line-height:1.35}.bttopt img{width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:10px;background:#1B1C20}
.bttopt .btpel{width:38px;height:38px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff 0 8%,#cfd3d8 30%,#7d838b 80%)}.bttopt .bttag{font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:#B9E5CB}.bttopt .bttag.set{color:#F4B3C2}
.bttdet{margin:0 16px 4px;background:#26272C;border:1px solid #3A3B41;border-radius:16px;padding:12px 14px;font-size:14.5px;line-height:1.45}.bttdet p{margin:4px 0}.bttdet .warn{color:#F4B3C2}
.bttchips{display:flex;flex-wrap:wrap;gap:8px;padding:6px 16px}.bttchips button{display:flex;gap:7px;align-items:center;border:1px solid #3A3B41;background:#26272C;color:#E6E7EA;border-radius:999px;padding:6px 12px 6px 6px;font:inherit;font-size:14px;cursor:pointer}
.bttchips button i{width:20px;height:20px;border-radius:50%;border:1px solid rgba(255,255,255,.3)}.bttchips button.bton{border-color:#7FD3A4;background:#1F3A2B}
@media (max-height:520px) and (min-width:701px){.bttcard{padding:12px 12px 10px;border-radius:16px;top:8px;bottom:8px}.bttcard h2{font-size:17px;margin-bottom:4px}.bttuse{font-size:13px;line-height:1.35}.bttcard h3{margin:8px 0 4px;font-size:11px}.bttstep{font-size:12.5px;min-height:36px;padding:4px 6px}.bttstep b{width:26px;height:26px;font-size:12px}.bttsteps{gap:4px}.bttplay{margin-top:8px;gap:6px}.bttplay button{padding:8px;font-size:13px}.bttop button{font-size:12.5px;padding:7px 9px}.bttx{width:30px;height:30px}.btttop{padding:6px 10px}.btttop b{font-size:14px}.btttop span{display:none}.bttback{top:44px;padding:7px 12px;font-size:13px}.bttw.btfocus .btttop{display:none}.bttw.btfocus .bttback{top:8px}.bttpin span{font-size:11.5px;padding:3px 8px}.bttovh b{font-size:16px}.bttovh{padding:10px 12px 4px}.bttovf{padding:6px 12px 10px}.bttopt{padding:8px}.bttopt b{font-size:14px}.bttgrid{grid-template-columns:repeat(auto-fill,minmax(130px,1fr))}.bttinfo{bottom:52px}}
.bttw .btttop,.bttw .bttback{margin-left:env(safe-area-inset-left)}
@media (max-width:700px){.bttcard{top:auto;right:8px;left:8px;width:auto;bottom:8px;max-height:56%}.bttw.btfocus .btttop span{display:none}.bttback{top:52px}.bttov{inset:6px}.bttgrid{grid-template-columns:repeat(2,1fr)}}`,nh=null;function gl(){if(!nh){let i=new oi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setPixelRatio(Math.min(1.5,devicePixelRatio||1)),i.toneMapping=qn;let e=new bi(i).fromScene(new fs,.04).texture;nh={r:i,env:e}}return nh}function yf(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Rn(i)}function Hd(i){let e=gl(),t=new yn;t.environment=e.env,t.environmentIntensity=.9;let n=new Xn(16777215,1.6);n.position.set(40,80,60),t.add(n,new is(16777215,3355443,.5),i);let s=new Ht().setFromObject(i),r=s.getBoundingSphere(new An),a=new Ne(new Pn(1,1),new xi({map:yf(),transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.scale.setScalar(r.radius*2.4),a.position.set(r.center.x,s.min.y-r.radius*.18,r.center.z),t.add(a),{sc:t,R:r.radius,c:r.center}}var zd=[["hop","Fill the hopper with plastic granules"],["heat","Switch on the heater bands"],["close","Close and clamp the mould"],["melt","Turn the screw to melt the plastic"],["inject","Ram the molten plastic into the mould"],["cool","Let the plastic cool and harden"],["open","Open the mould"],["eject","Push the product out with the ejector pins"]],Ty={heat:[["hop","Fill the hopper with granules first."]],melt:[["hop","There's no plastic in the hopper yet!"],["heat","The plastic won't melt until the heater bands are on."]],inject:[["melt","There's no molten plastic to inject yet."],["close","Close the mould first, or the molten plastic would squirt out!"]],cool:[["inject","The mould is still empty."]],open:[["inject","There's nothing in the mould yet."],["cool","Wait! The plastic needs to cool and harden first."]],eject:[["open","The mould is still closed."]]};function Ay(i,e={}){let t=!!e.factory,n=t?Sy:vy,s=My,r=t?Ey:by;for(let[oe,fe]of[["signcss",xf],["tourcss",wy]]){let Ee=document.getElementById(oe);Ee||(Ee=document.createElement("style"),Ee.id=oe,document.head.appendChild(Ee)),Ee.textContent=fe}i.innerHTML=`<div class="bttw"><div class="bttview"></div><div class="bttpins"></div>
  <div class="btttop"><b>${e.title||(t?"The factory":"Workshop tour")}</b><span>${t?"Tap a machine, then tap each step":"Tap a machine to find out about it"}</span></div>
  <button class="bttback" hidden>\u2190 ${t?"Whole factory":"Whole workshop"}</button>
  <aside class="bttcard" hidden><button class="bttx" aria-label="Close">\u2715</button><h2></h2><p class="bttuse"></p>
   <div class="bttfac" ${t?"":"hidden"}><h3>Step by step</h3><ol class="bttsteps"></ol><div class="bttplay"><button class="btlookb btgo" hidden>\u{1F50D} Take a closer look at what's been made</button><button class="bttall">\u25B6 Play all steps</button><button class="btgame" hidden>\u{1F3AE} Have a go yourself</button></div></div>
   <div class="bttopp" hidden></div>
   <div class="bttws" ${t?"hidden":""}><h3 class="bttmust">You must wear</h3><div class="bttppe"></div><h3>Stay safe</h3><ul class="bttsafe"></ul><div class="bttnav"><button class="bttprev">\u2039 Previous</button><button class="bttnext">Next \u203A</button></div></div></aside>
  <div class="bttov" hidden></div></div>`;let a=oe=>i.querySelector(oe),o=a(".bttview"),l=a(".bttov"),c=new oi({antialias:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(1.5,devicePixelRatio||1)),c.toneMapping=qn,c.shadowMap.enabled=!0,c.shadowMap.type=as,o.appendChild(c.domElement);let u=new yn;u.background=new ut(1974051),u.environment=new bi(c).fromScene(new fs,.04).texture,u.environmentIntensity=.7;let d=t?pf():df({noBench:!!e.noBench});u.add(d),d.traverse(oe=>{oe.isMesh&&(oe.castShadow=!oe.material.transparent,oe.receiveShadow=!0)});let f=new Xn(16773596,2.2);f.position.set(...t?[-10,650,360]:[140,320,220]),f.castShadow=!0,t&&(f.target.position.set(-270,0,-60),u.add(f.target));let p=t?700:240;Object.assign(f.shadow.camera,{left:-p,right:p,top:p,bottom:-p,near:1,far:t?1800:900}),f.shadow.mapSize.set(2048,2048),f.shadow.bias=-8e-4,f.shadow.normalBias=.6,f.shadow.autoUpdate=!1,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0,u.add(f,new is(16777215,4473924,.35));let m=new kt(36,1,1,5e3),y=new tr(m,c.domElement);y.enableDamping=!0,y.maxPolarAngle=Math.PI*.46,y.minDistance=60,y.maxDistance=t?2200:950,y.enablePan=t,y.screenSpacePanning=!1;let g=t?{p:ye(-150,860,1120),t:ye(-270,30,-60)}:{p:ye(400,440,520),t:ye(0,10,0)};m.position.copy(g.p),y.target.copy(g.t);let x=null,b=null,w=null,M=-1,R=null,T=null,_=null,E={},B={},P=!0;y.addEventListener("change",()=>P=!0);let N=d.userData.items.map(oe=>{oe.obj.updateMatrixWorld(!0);let fe=new Ht().setFromObject(oe.obj);return{...oe,c:oe.obj.userData.focus?oe.obj.localToWorld(oe.obj.userData.focus.clone()):fe.getCenter(ye(0,0,0)),top:ye((fe.min.x+fe.max.x)/2,oe.obj.userData.pinY||fe.max.y+8,(fe.min.z+fe.max.z)/2),rad:fe.getBoundingSphere(new An).radius}}),H=oe=>N.find(fe=>fe.key===oe);r=r.filter(oe=>H(oe));let F=a(".bttpins");F.innerHTML=N.map(oe=>`<button class="bttpin" data-k="${oe.key}"><i></i><span>${{bench:"Workbench",fretSaw:"Fret saw",fluidiser:"Fluidiser",injectionMoulder:"Injection moulding",rotoMoulder:"Rotational moulding",dieCaster:"Die casting",sandCasting:"Sand casting"}[oe.key]||n[oe.key].n}</span></button>`).join("")+'<button class="bttpin btlook" hidden><i></i><span>Take a closer look</span></button>';let D=F.querySelector(".btlook"),k=null,Y={p:g.p.clone(),t:g.t.clone()};function Z(){let oe=o.clientWidth,fe=o.clientHeight;if(!oe||!fe)return;c.setSize(oe,fe),m.aspect=oe/fe,m._ox=-1,m.updateProjectionMatrix();let Ee=Math.max(1,(t?1.55:1.3)/m.aspect);g.p.copy(Y.t).add(Y.p.clone().sub(Y.t).multiplyScalar(Ee)),!b&&!x&&(m.position.copy(g.p),y.target.copy(g.t)),P=!0}new ResizeObserver(Z).observe(o),Z();function q(oe,fe,Ee=1100){x={p0:m.position.clone(),t0:y.target.clone(),p:oe,t:fe,s:performance.now(),dur:Ee}}let W=a(".bttsteps");function L(oe,fe){let Ee=H(oe);Ee&&Ee.anim&&(Ee.anim(fe),c.shadowMap.needsUpdate=!0,P=!0)}function te(oe){let fe=b&&H(b),Ee=fe&&fe.obj.userData.product;k=oe&&Ee?fe.obj.localToWorld(Ee.point.clone()):null,D.hidden=!k,a(".btlookb").hidden=!k,P=!0}function Ie(){let oe=n[b].steps,fe=oe.length;W.querySelectorAll(".bttstep").forEach((Ee,ee)=>{Ee.classList.toggle("bton",ee===M&&!!w),Ee.classList.toggle("btdone",!!E[b][ee]&&!(ee===M&&w)),Ee.classList.toggle("btrev",!!E[b][ee]||ee===M),Ee.classList.toggle("btnx",!w&&ee===M+1)}),a(".bttall").textContent=w&&w.all?"\u275A\u275A Pause":M>=fe-1&&!w?"\u21BA Play again":M>=0?"\u25B6 Play the rest":"\u25B6 Play all steps",B[b]&&te(!0)}function de(oe,fe){let Ee=n[b].steps;if(oe>=Ee.length){w=null,Ie();return}M=oe,E[b][oe]=1;let[ee,it]=Ee[oe];w={a:ee,b:it,t:ee,last:performance.now(),all:fe},L(b,ee),Ie();let Le=a(".bttcard"),Ce=W.children[oe];if(Le&&Ce){let I=Ce.offsetTop-Le.clientHeight*.3;Le.scrollTo({top:Math.max(0,I),behavior:"smooth"})}}W.addEventListener("click",oe=>{let fe=oe.target.closest(".bttstep");fe&&de(+fe.dataset.i,!1)}),a(".bttall").onclick=()=>{let oe=n[b].steps.length;if(w&&w.all){w=null,Ie();return}de(M>=oe-1?0:M+1,!0)};function X(oe){let fe=H(oe);fe&&fe.anim&&L(oe,fe.obj.userData.idle||0)}function j(oe){T&&dt(),be(),b=oe,w=null,M=-1;let fe=H(oe),Ee=n[oe],ee=fe.obj.userData.view?fe.obj.userData.view.clone().applyQuaternion(fe.obj.getWorldQuaternion(new nn)).setY(0).normalize():m.position.clone().sub(y.target).setY(0).normalize(),it=fe.c.clone(),Le=Math.max(140,fe.rad*(fe.obj.userData.zoom||1)*(fe.rad>200?1.75:3.3))*(o.clientWidth<=700?1.55:1);q(it.clone().add(ee.multiplyScalar(Le)).add(ye(0,Le*.55,0)),it),a(".bttcard h2").textContent=Ee.n,a(".bttuse").textContent=Ee.use,a(".bttopp").hidden=!0,t?(E[oe]=E[oe]||{},a(".bttfac").hidden=!1,W.innerHTML=Ee.steps.map((Ce,I)=>`<li><button class="bttstep" data-i="${I}"><b>${I+1}</b><span>${Ce[2]}</span></button></li>`).join(""),a(".btgame").hidden=!fe.obj.userData.game,L(oe,Ee.steps[0][0]),te(!1),Ie()):(a(".bttsafe").innerHTML=`<li>${_f}</li>`+Ee.safe.map(Ce=>`<li>${Ce}</li>`).join(""),a(".bttppe").innerHTML=gf(s[oe]||["eye","clothing"])),a(".bttcard").hidden=!1,a(".bttcard").scrollTop=0,a(".bttback").hidden=!1,i.querySelector(".bttw").classList.add("btfocus"),F.querySelectorAll(".bttpin[data-k]").forEach(Ce=>Ce.classList.toggle("bton",Ce.dataset.k===oe))}function ge(){T&&dt(),be(),t&&b&&X(b),b=null,w=null,te(!1),q(g.p.clone(),g.t.clone()),a(".bttcard").hidden=!0,a(".bttback").hidden=!0,i.querySelector(".bttw").classList.remove("btfocus"),F.querySelectorAll(".bttpin[data-k]").forEach(oe=>oe.classList.remove("bton"))}F.addEventListener("click",oe=>{let fe=oe.target.closest(".bttpin");if(fe){if(fe.classList.contains("btlook")){Se();return}j(fe.dataset.k)}}),a(".bttx").onclick=ge,a(".bttback").onclick=ge,a(".bttnext").onclick=()=>j(r[(r.indexOf(b)+1)%r.length]),a(".bttprev").onclick=()=>j(r[(r.indexOf(b)+r.length-1)%r.length]);function be(){_&&(_.stop(),_=null),l.hidden=!0,l.innerHTML="",P=!0}function Se(){if(T&&T.done){Ve(T.prod,T.col,"Your "+Ei[T.prod].n.toLowerCase(),"Made by injection moulding in "+Vi[T.mat].n);return}let oe=H(b),fe=oe.obj.userData.product;Ve(fe.key,fe.col,Ei[fe.key].n,n[b].n.replace(" machine",""))}a(".btlookb").onclick=Se;function Ve(oe,fe,Ee,ee){be();let it=Ei[oe],Le=ul(fe),Ce=it.make(Le);l.innerHTML=`<div class="bttovh"><div><small>${ee}</small><b>${Ee}</b></div><button class="btclose">\u2715 Back</button></div><div class="bttovb"><div class="bttpvp"></div></div><div class="bttinfo" hidden><b></b><p></p></div>
   <div class="bttovf"><span>Drag to turn it round. Tap a dot to find out how you can tell it was injection moulded.</span>${Ce.explode?'<button class="btexp">Explode the product</button>':""}</div>`,l.hidden=!1,l.querySelector(".btclose").onclick=()=>{be()};let I=l.querySelector(".bttovb"),S=l.querySelector(".bttpvp"),$=l.querySelector(".bttinfo"),xe=gl();I.appendChild(xe.r.domElement);let he=Hd(Ce.obj),_e=new kt(32,1,.5,4e3),Te=he.R/Math.sin(16*Math.PI/180)*1.08;_e.position.copy(he.c).add(ye(0,.42,1).normalize().multiplyScalar(Te));let ie=new tr(_e,xe.r.domElement);ie.target.copy(he.c),ie.enablePan=!1,ie.enableDamping=!0,ie.minDistance=Te*.45,ie.maxDistance=Te*1.8;let ue=0;ie.addEventListener("start",()=>ue=1);let ve=e.level||"N5";S.innerHTML=Ce.feat.map((Me,qe)=>{let st=Me.higher&&ve==="N5";return`<button class="bttpin${st?" btdis":""}" data-i="${qe}" ${Me.inside?"hidden":""} ${st?'disabled title="For Higher"':""}><i></i><span>${Me.t}${Me.higher?"<sup>Higher</sup>":""}</span></button>`}).join(""),S.addEventListener("click",Me=>{let qe=Me.target.closest(".bttpin");if(!qe)return;let st=Ce.feat[+qe.dataset.i];S.querySelectorAll(".bttpin").forEach(Be=>Be.classList.toggle("bton",Be===qe)),$.hidden=!1,$.querySelector("b").textContent=st.t,$.querySelector("p").textContent=st.d});let O=0,ae=0,Q=l.querySelector(".btexp");Q&&(Q.onclick=()=>{ae=ae?0:1,Q.textContent=ae?"Put it back together":"Explode the product",$.hidden=!0});let Ae=performance.now(),we=ye(0,0,0),Pe=!0,Ze=0;function ct(Me){if(!Pe)return;Ze=requestAnimationFrame(ct);let qe=I.clientWidth,st=I.clientHeight;if(!qe||!st)return;if(xe.r.domElement.width!==Math.round(qe*xe.r.getPixelRatio())||xe.r.domElement.height!==Math.round(st*xe.r.getPixelRatio())){xe.r.setSize(qe,st),_e.aspect=qe/st,_e.updateProjectionMatrix();let pn=Math.max(1,1.15/_e.aspect),gs=_e.position.clone().sub(ie.target).normalize();_e.position.copy(ie.target).add(gs.multiplyScalar(Te*pn)),ie.maxDistance=Te*pn*1.8}let Be=Math.min(1,(Me-Ae)/900),Et=1-Math.pow(1-Be,3),Gt=Me/1e3;Ce.obj.position.y=-he.R*.8*(1-Et),Ce.obj.scale.setScalar((.6+.4*Et)*(1-.22*O)),ue||(Ce.obj.rotation.y=.35*Math.sin(Gt*.45),Ce.obj.rotation.x=.06*Math.sin(Gt*.33)),Ce.explode&&(O+=(ae-O)*.08,Ce.explode(O)),ie.update(),xe.r.render(he.sc,_e),S.querySelectorAll(".bttpin").forEach((pn,gs)=>{let li=Ce.feat[gs];if(li.inside&&O<.6){pn.hidden=!0;return}pn.hidden=!1,Ce.obj.updateMatrixWorld(!0),li.o?li.o.localToWorld(we.copy(li.p)):we.copy(li.p).applyMatrix4(Ce.obj.matrixWorld),we.project(_e),pn.style.transform=`translate(${(we.x*.5+.5)*qe}px,${(-we.y*.5+.5)*st}px) translate(-50%,-100%)`})}Ze=requestAnimationFrame(ct),_={stop(){Pe=!1,cancelAnimationFrame(Ze),ie.dispose()}}}a(".btgame").onclick=()=>Ye();function dt(){let oe=H(b);oe&&oe.obj.userData.game&&oe.obj.userData.game.end(),T=null,R=null,a(".bttopp").hidden=!0,a(".bttfac").hidden=!1,b&&X(b),te(!!B[b])}function Xe(oe,fe,Ee,ee){l.innerHTML=`<div class="bttovh"><div><small>${oe}</small><b>${fe}</b></div><button class="btclose">\u2715 Close</button></div>${Ee}<div class="bttovf">${ee||""}</div>`,l.hidden=!1,l.querySelector(".btclose").onclick=()=>{be(),T&&!T.running&&(T=null)}}function Ye(){w=null,Ie(),T={step:1},at()}function at(){_&&(_.stop(),_=null);let oe=Object.keys(Vi);Xe("Have a go \xB7 Step 1 of 4","Choose your plastic",`<div class="bttgrid">${oe.map(Ee=>{let ee=Vi[Ee];return`<button class="bttopt" data-k="${Ee}"><span class="btpel" style="background:radial-gradient(circle at 35% 30%,#fff 0 8%,${ee.kind==="set"?"#c8b7a0":"#e9d9c9"} 30%,${ee.kind==="set"?"#7a6a58":"#8f7f72"} 85%)"></span><b>${ee.n}</b><span class="bttag ${ee.kind==="set"?"set":""}">${ee.kind==="set"?"Thermosetting":"Thermoplastic"}</span></button>`}).join("")}</div><div class="bttdet" hidden></div>`,"<span>Tap a plastic to find out about it.</span>");let fe=l.querySelector(".bttdet");l.querySelector(".bttgrid").addEventListener("click",Ee=>{let ee=Ee.target.closest(".bttopt");if(!ee)return;l.querySelectorAll(".bttopt").forEach(Ce=>Ce.classList.toggle("bton",Ce===ee));let it=Vi[ee.dataset.k];fe.hidden=!1,fe.innerHTML=`<b>${it.full}</b><p>${it.blurb}</p><p><i>Used for:</i> ${it.uses}</p>`+(it.kind==="set"?`<p class="warn">Thermosetting plastics set hard for good the first time they are heated, so they can't be melted down in an injection moulding machine. Products like these are made by compression moulding instead. Try a thermoplastic.</p>`:`<div class="bttplay"><button class="btgo">\u2713 Use ${it.n}</button></div>`);let Le=fe.querySelector(".btgo");Le&&(Le.onclick=()=>{T.mat=ee.dataset.k,Re()}),fe.scrollIntoView({block:"nearest"})})}function pe(oe,fe){let Ee=gl(),ee=Ei[oe].make(ul(fe)),it=Hd(ee.obj),Le=new kt(30,4/3,.5,4e3),Ce=it.R/Math.sin(15*Math.PI/180)*1.05;return Le.position.copy(it.c).add(ye(.5,.55,1).normalize().multiplyScalar(Ce)),Le.lookAt(it.c),Ee.r.setSize(240,180,!1),Ee.r.render(it.sc,Le),Ee.r.domElement.toDataURL("image/png")}function Re(){let oe=Object.keys(Ei).filter(Ee=>Ei[Ee].mats.includes(T.mat)),fe=Vi[T.mat].cols[0];Xe("Have a go \xB7 Step 2 of 4","Choose a product to make in "+Vi[T.mat].n,`<div class="bttgrid">${oe.map(Ee=>`<button class="bttopt" data-k="${Ee}"><img alt="" src="${pe(Ee,fe)}"><b>${Ei[Ee].n}</b><small>${dy[Ee]}</small></button>`).join("")}</div>`,'<button class="btsec btbk">\u2039 Change plastic</button>'),l.querySelector(".btbk").onclick=at,l.querySelector(".bttgrid").addEventListener("click",Ee=>{let ee=Ee.target.closest(".bttopt");ee&&(T.prod=ee.dataset.k,De())})}function De(){let oe=Vi[T.mat].cols;Xe("Have a go \xB7 Step 3 of 4","Choose your colour",`<div class="bttovb"></div><div class="bttchips">${oe.map((ve,O)=>`<button data-i="${O}"><i style="background:${ve==="clear"?"linear-gradient(135deg,#ffffff55,#cfe6f522)":"#"+ve.toString(16).padStart(6,"0")}"></i>${th[ve]}</button>`).join("")}</div>`,'<button class="btsec btbk">\u2039 Change product</button><span>Plastic granules come in lots of colours.</span><button class="btuse" disabled>Choose a colour</button>'),l.querySelector(".btbk").onclick=Re;let fe=l.querySelector(".bttovb"),Ee=gl();fe.appendChild(Ee.r.domElement);let ee=new yn;ee.environment=Ee.env;let it=new Xn(16777215,1.6);it.position.set(20,40,30),ee.add(it,new is(16777215,3355443,.5));let Le=new nt;ee.add(Le);let Ce=[],I=new Tt(.8,.8,1.3,14),S=yf();oe.forEach((ve,O)=>{let ae=new nt,Q=ul(ve,{rough:.18});for(let Pe=0;Pe<34;Pe++){let Ze=Math.random()*7,ct=Math.sqrt(Math.random())*3.4,Me=Math.max(0,(3.4-ct)*.7)*Math.random()+.6,qe=new Ne(I,Q);qe.position.set(Math.cos(Ze)*ct,Me,Math.sin(Ze)*ct),qe.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),ae.add(qe)}let Ae=new Ne(new Pn(9,9),new xi({map:S,transparent:!0,depthWrite:!1}));Ae.rotation.x=-Math.PI/2,Ae.position.y=.02,ae.add(Ae);let we=O/oe.length*Math.PI*2;ae.position.set(Math.cos(we)*10,0,Math.sin(we)*10),ae.userData.i=O,Le.add(ae),Ce.push(ae)});let $=new kt(34,1,.5,500);$.position.set(0,17,25),$.lookAt(0,1,0);let xe=-1,he=ve=>{xe=ve,T.col=oe[ve],l.querySelectorAll(".bttchips button").forEach((ae,Q)=>ae.classList.toggle("bton",Q===ve));let O=l.querySelector(".btuse");O.disabled=!1,O.textContent="\u2713 Use "+th[oe[ve]].toLowerCase()};l.querySelector(".bttchips").addEventListener("click",ve=>{let O=ve.target.closest("button");O&&he(+O.dataset.i)});let _e=new Ys;Ee.r.domElement.onclick=ve=>{let O=Ee.r.domElement.getBoundingClientRect();_e.setFromCamera(ye((ve.clientX-O.left)/O.width*2-1,-(ve.clientY-O.top)/O.height*2+1,0),$);let ae=_e.intersectObjects(Ce,!0)[0];if(ae){let Q=ae.object;for(;Q&&Q.userData.i===void 0;)Q=Q.parent;Q&&he(Q.userData.i)}},l.querySelector(".btuse").onclick=()=>{Ee.r.domElement.onclick=null,ze()};let Te=!0,ie=0;function ue(ve){if(!Te)return;ie=requestAnimationFrame(ue);let O=fe.clientWidth,ae=fe.clientHeight;if(!(!O||!ae)){if(Ee.r.domElement.width!==Math.round(O*Ee.r.getPixelRatio())||Ee.r.domElement.height!==Math.round(ae*Ee.r.getPixelRatio())){Ee.r.setSize(O,ae),$.aspect=O/ae,$.updateProjectionMatrix();let Q=Math.max(1,1.5/$.aspect);$.position.set(0,17*Q,25*Q),$.lookAt(0,1,0)}Le.rotation.y=ve/1e3*.12,Ce.forEach((Q,Ae)=>{Q.rotation.y=-ve/1e3*.25;let we=Ae===xe?1.6:0;Q.position.y+=(we-Q.position.y)*.1,Q.scale.setScalar(1+(Ae===xe?.15:0))}),Ee.r.render(ee,$)}}ie=requestAnimationFrame(ue),_={stop(){Te=!1,cancelAnimationFrame(ie)}}}function ze(){be();let oe=H(b),fe=oe.obj.userData.game;T.running=!0,T.done=!1,T.did={};let Ee=Ei[T.prod].make(ul(T.col)),ee=Ee.obj,it=new Ht().setFromObject(ee),Le=14/Math.max(...it.getSize(ye(0,0,0)).toArray());ee.scale.setScalar(Le);let Ce=new nt;Ce.add(ee),fe.start(T.col==="clear"?14675960:T.col,T.col==="clear",Ce),c.shadowMap.needsUpdate=!0,P=!0,te(!1);let I=zd.map(he=>he).sort(()=>Math.random()-.5);a(".bttfac").hidden=!0;let S=a(".bttopp");S.hidden=!1,S.innerHTML=`<h3>Have a go \xB7 Step 4 of 4</h3><p class="bttuse">Make your <b>${th[T.col].toLowerCase()} ${Ei[T.prod].n.toLowerCase()}</b> in <b>${Vi[T.mat].n}</b>. Tap the steps in the right order to run the machine.</p>
   <div class="bttop">${I.map(([he,_e])=>`<button data-k="${he}"><b>?</b><span>${_e}</span></button>`).join("")}</div><p class="bttmsg"></p><div class="bttplay"><button class="btlookb2 btgo" hidden>\u{1F50D} View your finished product</button><button class="btagain" hidden>\u{1F3AE} Make another</button><button class="btquit">Stop and go back</button></div>`,a(".bttcard").scrollTop=0;let $=S.querySelector(".bttmsg"),xe=0;S.querySelector(".btquit").onclick=()=>{dt()},S.querySelector(".btagain").onclick=()=>{dt(),Ye()},S.querySelector(".btlookb2").onclick=Se,S.querySelector(".bttop").addEventListener("click",he=>{let _e=he.target.closest("button");if(!_e||_e.classList.contains("btok"))return;let Te=_e.dataset.k;if(R){$.textContent="Wait for that step to finish.";return}if(R){$.textContent="Wait for that step to finish.";return}let ie=(Ty[Te]||[]).find(([ue])=>!T.did[ue]);if(ie){$.textContent=ie[1],_e.classList.remove("btno"),_e.offsetWidth,_e.classList.add("btno");return}xe++,T.did[Te]=1,_e.classList.add("btok"),_e.querySelector("b").textContent=xe,$.textContent="",R={k:Te,u:0,dur:fe.steps[Te],last:performance.now(),btn:_e}})}function Fe(){let oe=H(b);if(Object.keys(T.did).length===zd.length){T.done=!0,T.running=!1;let fe=a(".bttopp");fe.querySelector(".bttmsg").textContent="Well done! Your product has dropped into the bin.",fe.querySelector(".btlookb2").hidden=!1,fe.querySelector(".btagain").hidden=!1,fe.querySelector(".btquit").textContent="Back to the machine",k=oe.obj.localToWorld(oe.obj.userData.game.binPoint.clone()),D.hidden=!1,D.querySelector("span").textContent="View your finished product",P=!0}}let We=new Ys,Ue=null;c.domElement.addEventListener("pointerdown",oe=>{Ue={x:oe.clientX,y:oe.clientY}}),c.domElement.addEventListener("pointerup",oe=>{if(!Ue||Math.hypot(oe.clientX-Ue.x,oe.clientY-Ue.y)>6){Ue=null;return}if(Ue=null,T&&T.running)return;let fe=c.domElement.getBoundingClientRect();We.setFromCamera(ye((oe.clientX-fe.left)/fe.width*2-1,-(oe.clientY-fe.top)/fe.height*2+1,0),m);let Ee=We.intersectObjects(N.map(ee=>ee.obj),!0)[0];if(Ee){let ee=Ee.object;for(;ee&&!ee.userData.key;)ee=ee.parent;ee&&ee.userData.key!==b&&j(ee.userData.key)}});let tt=ye(0,0,0),lt=0,mt=!0;function z(oe){if(!mt)return;if(lt=requestAnimationFrame(z),!i.isConnected){mt=!1,c.dispose();return}if(!o.offsetParent)return;if(x){let ee=Math.min(1,(oe-x.s)/x.dur),it=ee<.5?4*ee*ee*ee:1-Math.pow(-2*ee+2,3)/2;m.position.lerpVectors(x.p0,x.p,it),y.target.lerpVectors(x.t0,x.t,it),ee>=1&&(x=null),P=!0}{let ee=o.clientWidth,it=o.clientHeight,Le=!!b,Ce=ee<=700,I=Le&&!Ce?ee*.17:0,S=Le&&Ce?it*.26:0;(m._ox!==I||m._oy!==S)&&(m._ox=I,m._oy=S,I||S?m.setViewOffset(ee,it,I,S,ee,it):m.clearViewOffset(),P=!0)}if(y.update(),t){if(w){let ee=Math.min(.1,(oe-w.last)/1e3);if(w.last=oe,w.t=Math.min(w.b,w.t+ee),L(b,w.t),w.t>=w.b){let it=w.all,Le=M,Ce=n[b].steps.length;w=null,Le>=Ce-1&&(B[b]=1),it&&Le<Ce-1?de(Le+1,!0):(Le<Ce-1&&(M=Le),Ie())}}if(R){let ee=Math.min(.1,(oe-R.last)/1e3)*(window.__BTFAST||1);R.last=oe,R.u=Math.min(1,R.u+ee/R.dur),H(b).obj.userData.game.run(R.k,R.u,oe/1e3),c.shadowMap.needsUpdate=!0,P=!0,R.u>=1&&(R=null,Fe())}i.dataset.busy=R?"1":""}else d.userData.anim&&(d.userData.anim(oe/1e3),c.shadowMap.needsUpdate=!0,P=!0);if(!l.hidden&&!P||!P)return;P=!1;{let ee=Math.min(40,Math.max(1,m.position.distanceTo(y.target)*.04));Math.abs(ee-m.near)>.5&&(m.near=ee,m.updateProjectionMatrix())}c.render(u,m);let fe=o.clientWidth,Ee=o.clientHeight;F.querySelectorAll(".bttpin[data-k]").forEach((ee,it)=>{tt.copy(N[it].top).project(m);let Le=tt.z<1&&Math.abs(tt.x)<1.05&&Math.abs(tt.y)<1.05;ee.style.display=Le?"":"none",ee.style.transform=`translate(${(tt.x*.5+.5)*fe}px,${(-tt.y*.5+.5)*Ee}px) translate(-50%,-100%)`}),k&&(tt.copy(k).project(m),D.style.transform=`translate(${(tt.x*.5+.5)*fe}px,${(-tt.y*.5+.5)*Ee}px) translate(-50%,-100%)`)}return lt=requestAnimationFrame(z),i.__bt={viewProduct:Ve},{stop(){mt=!1,cancelAnimationFrame(lt)},home:ge}}var vf=[["Measuring and marking out",[["Steel rule",sh,[70,0,-20]],["Try square",rh,[65,25,0]],["Engineer\u2019s square",l1,[65,25,0]],["Marking gauge",vl,[15,-35,0]],["Mortise gauge",c1,[15,-35,0]],["Scriber",Wd,[10,0,-60]],["Centre punch",h1,[10,0,-55]],["Dividers",d1,[5,-20,0]],["Outside callipers",f1,[5,-20,0]],["Odd-leg callipers",p1,[5,-20,0]],["Pencil",i1,[10,0,-60]]]],["Saws",[["Tenon saw",ah,[5,-18,0]],["Coping saw",s1,[5,-20,0]],["Hacksaw",Xd,[5,-20,0]],["Junior hacksaw",m1,[5,-20,0]]]],["Chisels",[["Bevel-edge chisel",oh,[35,20,-60]],["Mortise chisel",g1,[15,-20,-55]]]],["Hammers and mallets",[["Ball-pein hammer",_1,[10,-30,-20]],["Cross-pein hammer",y1,[10,-30,-20]],["Claw hammer",Yd,[10,-30,-20]],["Wooden mallet",lh,[10,-35,-20]],["Hide mallet",v1,[10,-30,-20]]]],["Planes",[["Jack plane",Zd,[25,-30,0]],["Smoothing plane",Vd,[25,-30,0]],["Rebate plane",M1,[25,-30,0]],["Plough plane",b1,[25,-30,0]]]],["Drill bits",[["Twist drill",$d,[15,0,-35]],["Forstner bit",S1,[38,55,0]],["Countersink bit",E1,[20,0,-30]],["Centre drill",w1,[15,0,-55]]]],["Other hand tools",[["Flat file",Jd,[40,-15,10]],["Half-round file",T1,[40,-15,10]],["Hand router",A1,[35,-25,0]],["Pliers",jd,[15,-15,20]],["Pop-rivet gun",C1,[5,-25,0]],["Flat screwdriver",N1,[10,0,-55]],["Cross-head screwdriver",U1,[10,0,-55]],["Tin snips",R1,[8,-15,4]],["Bending bars",P1,[20,-25,-8]],["Tap and wrench",I1,[20,-20,0]],["Die and stock",D1,[55,-15,0]],["Nail punch",u1,[10,0,-55]],["Bradawl",L1,[10,0,-55]]]],["Holding and clamping",[["Bench vice",Qd,[20,-35,0]],["Engineer\u2019s vice",ef,[20,-35,0]],["Machine vice",F1,[25,-35,0]],["Hand vice",O1,[5,-18,0]],["Soft jaws (vice guards)",G1,[22,-35,0]],["G clamp",k1,[5,-25,0]],["Quick clamp",H1,[100,-25,-90]],["Sash cramp",B1,[20,-20,0]]]],["Machines",[["Belt sander",tf,[14,-30,0]],["Pillar drill",nf,[8,-35,0]],["Fret (scroll) saw",sf,[14,-40,0]],["Centre lathe",rf,[16,-22,0]],["Wood lathe",af,[16,-22,0]],["Mortise machine",of,[10,-35,0]],["Fluidiser",lf,[30,-30,0]],["Strip heater",cf,[28,-25,0]]]]];function _l(i,e){let t=i(),n=t.userData.anim;t.quaternion.copy(t1(...e));let s=new nt;s.add(t),s.updateMatrixWorld(!0);let r=new Ht().setFromObject(t),a=r.getCenter(ye(0,0,0));t.position.sub(a);let o=new nt;return o.add(s),o.userData.anim=n,{g:o,r:r.getSize(ye(0,0,0)).length()/2}}function yl(i,e){i.environment=new bi(e).fromScene(new fs,.04).texture,i.environmentIntensity=.7;let t=new Xn(16773596,2.2);t.position.set(6,10,9);let n=new Xn(12571903,1.8);n.position.set(-8,4,-10),i.add(t,n,new Xs(16777215,.25))}var Ry=xf+`.tl-n{color:#BFC3C8;margin:0 0 6px;font-size:14px}
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
#tlinfo p{margin:0;font-size:15.5px;line-height:1.45}#tlinfo ul{margin:0;padding-left:20px;font-size:15.5px;line-height:1.45}#tlinfo li{margin:0 0 4px}#tlovp{left:14px;top:50%}#tlovnx{right:14px;top:50%}`;function Cy(i){let e=document.createElement("style");e.textContent=Ry,document.head.appendChild(e);let t=document.createElement("div");t.id="tlov",t.setAttribute("role","dialog"),t.setAttribute("aria-label","3D tool viewer"),t.innerHTML='<div id="tlovc"></div><div id="tlab"><button type="button" data-ab="use" aria-pressed="false">Tool use</button><button type="button" data-ab="safe" aria-pressed="false">Stay safe</button></div><div id="tlinfo" hidden></div><div id="tlovn"></div><button class="tlob" id="tlovx" aria-label="Close">\u2715</button><button class="tlob" id="tlovp" aria-label="Previous tool">\u2039</button><button class="tlob" id="tlovnx" aria-label="Next tool">\u203A</button>',document.body.appendChild(t);let n=[],s="";for(let[P,N]of vf){s+=`<h3 class="tl-h">${P}</h3><div class="tl-g">`;for(let[H,F,D]of N)s+=`<button type="button" class="tl-t" data-i="${n.length}"><img alt=""><span>${H}</span></button>`,n.push([H,F,D]);s+="</div>"}i.innerHTML=`<p class="tl-n">${n.length} tools and machines \xB7 tap one to see it turn. Drag to spin it yourself.</p>`+s;let r=new oi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});r.setSize(256,256),r.setPixelRatio(1),r.toneMapping=qn;let a=new yn;yl(a,r);let o=new kt(30,1,.1,800),l=i.querySelectorAll(".tl-t img"),c=0;(function P(){let N=performance.now();for(;c<n.length&&performance.now()-N<40;){let[H,F,D]=n[c],{g:k,r:Y}=_l(F,D);a.add(k),o.position.set(0,Y*.25,Y*3.6),o.lookAt(0,0,0),r.render(a,o),l[c].src=r.domElement.toDataURL(),a.remove(k),c++}c<n.length?setTimeout(P,16):r.dispose()})();let u=new oi({antialias:!0,alpha:!0});u.setPixelRatio(Math.min(2,devicePixelRatio||1)),u.toneMapping=qn,document.getElementById("tlovc").appendChild(u.domElement);let d=new yn;yl(d,u);let f=new kt(30,1,.1,800),p=new tr(f,u.domElement);p.enablePan=!1,p.enableDamping=!0;let m=null,y=0,g=0,x=null;function b(P){y=(P+n.length)%n.length,m&&d.remove(m);let[N,H,F]=n[y],{g:D,r:k}=_l(H,F);m=D,d.add(D);let Y=Math.max(1,.85/Math.max(.3,innerWidth/innerHeight));f.position.set(0,k*.3*Y,k*3.4*Y),p.target.set(0,0,0),p.minDistance=k*1.5,p.maxDistance=k*12,p.update(),document.getElementById("tlovn").textContent=N,T(null)}let w=null,M=document.getElementById("tlinfo"),R=document.getElementById("tlab");function T(P){w=P;let N=xy[n[y][0]];if(R.hidden=!N,R.querySelectorAll("button").forEach(H=>H.setAttribute("aria-pressed",H.dataset.ab===P)),!P||!N){M.hidden=!0;return}M.className=P,M.innerHTML=P==="use"?`<h4>Tool use</h4><p>${N[0]}</p>`:`<h4>Stay safe</h4>${gf(yy(n[y][0]))}<ul><li>${_f}</li>${N[1].map(H=>`<li>${H}</li>`).join("")}</ul>`,M.hidden=!1}R.addEventListener("click",P=>{let N=P.target.closest("button");N&&T(w===N.dataset.ab?null:N.dataset.ab)});function _(){let P=innerWidth,N=innerHeight;u.setSize(P,N),f.aspect=P/N,f.updateProjectionMatrix()}function E(P){g=requestAnimationFrame(E),m&&(m.rotation.y+=.006,m.userData.anim&&m.userData.anim((P||0)/1e3)),p.update(),u.render(d,f)}function B(P){t.classList.contains("on")&&(t.classList.remove("on"),cancelAnimationFrame(g),!P&&history.state&&history.state.tlv&&history.back(),x&&x.focus({preventScroll:!0}))}addEventListener("popstate",()=>B(!0)),["gesturestart","gesturechange","dblclick"].forEach(P=>t.addEventListener(P,N=>N.preventDefault(),{passive:!1})),t.addEventListener("touchmove",P=>{P.touches.length>1&&P.target.tagName!=="CANVAS"&&P.preventDefault()},{passive:!1}),i.addEventListener("click",P=>{let N=P.target.closest(".tl-t");if(N){x=N,t.classList.add("on");try{history.pushState({tlv:1},"")}catch{}_(),b(+N.dataset.i),cancelAnimationFrame(g),E(),document.getElementById("tlovx").focus()}}),document.getElementById("tlovx").onclick=()=>B(),document.getElementById("tlovp").onclick=()=>b(y-1),document.getElementById("tlovnx").onclick=()=>b(y+1),addEventListener("keydown",P=>{t.classList.contains("on")&&(P.key==="Escape"&&B(),P.key==="ArrowLeft"&&b(y-1),P.key==="ArrowRight"&&b(y+1))}),addEventListener("resize",()=>{t.classList.contains("on")&&_()})}var Ml=[];vf.forEach(([i,e],t)=>{e.forEach(([n,s,r])=>Ml.push({id:n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),n,g:t,fn:s,pose:r}))});function Py(){return Ml.map(({id:i,n:e,g:t})=>({id:i,n:e,g:t}))}var Wi=null,oa=null,dl=null,fl={};function Iy(i){if(fl[i])return fl[i];let e=Ml.find(s=>s.id===i);if(!e)return"";Wi||(Wi=new oi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Wi.setSize(320,240),Wi.setPixelRatio(1),Wi.toneMapping=qn,oa=new yn,yl(oa,Wi),dl=new kt(30,4/3,.1,800));let{g:t,r:n}=_l(e.fn,e.pose);return oa.add(t),dl.position.set(0,n*.25,n*3.3),dl.lookAt(0,0,0),Wi.render(oa,dl),fl[i]=Wi.domElement.toDataURL(),oa.remove(t),fl[i]}function Dy(){let i=document.createElement("canvas");i.className="spin3d";let e=new oi({canvas:i,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(2,devicePixelRatio||1)),e.toneMapping=qn;let t=new yn;yl(t,e);let n=new kt(30,4/3,.1,800),s=null,r=0,a=0,o=0;function l(){let u=i.parentElement;if(!u)return;let d=u.clientWidth,f=u.clientHeight;!d||!f||(i._w!==d||i._h!==f)&&(i._w=d,i._h=f,e.setSize(d,f,!1),n.aspect=d/f,n.updateProjectionMatrix())}function c(u){if(r=requestAnimationFrame(c),!i.isConnected||!s)return;let d=o?Math.min(.05,(u-o)/1e3):0;o=u,a+=d*.5,s.rotation.y=Math.sin(a)*.55,s.userData.anim&&s.userData.anim(u/1e3),l(),e.render(t,n)}return{canvas:i,show(u){let d=Ml.find(m=>m.id===u);if(s&&t.remove(s),s=null,!d)return;let{g:f,r:p}=_l(d.fn,d.pose);s=f,t.add(f),a=0,n.position.set(0,p*.25,p*3.7),n.lookAt(0,0,0),r||(r=requestAnimationFrame(c))},stop(){cancelAnimationFrame(r),r=0,o=0}}}return If(Ly);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
