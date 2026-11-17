var BMTOOLS3D=(()=>{var Zl=Object.defineProperty;var Xf=Object.getOwnPropertyDescriptor;var qf=Object.getOwnPropertyNames;var Yf=Object.prototype.hasOwnProperty;var Zf=(i,e)=>{for(var t in e)Zl(i,t,{get:e[t],enumerable:!0})},jf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of qf(e))!Yf.call(i,s)&&s!==t&&Zl(i,s,{get:()=>e[s],enumerable:!(n=Xf(e,s))||n.enumerable});return i};var $f=i=>jf(Zl({},"__esModule",{value:!0}),i);var lb={};Zf(lb,{list:()=>rb,makeHome:()=>Wy,mount:()=>sb,spinner:()=>ob,thumb:()=>ab,tour:()=>nb});var es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wd=0,Ic=1,Td=2;var bs=1,Bo=2,ur=3,pi=0,rn=1,en=2,vs=0,fr=1,Dc=2,Lc=3,Nc=4,Ad=5;var Ms=100,Rd=101,Cd=102,Pd=103,Id=104,Dd=200,Ld=201,Nd=202,Fd=203,Fc=204,Uc=205,Ud=206,kd=207,Od=208,Bd=209,Hd=210,zd=211,Gd=212,Vd=213,Wd=214,ao=0,oo=1,lo=2,$s=3,co=4,ho=5,uo=6,fo=7,Ho=0,Xd=1,qd=2,mi=0,kc=1,Oc=2,Bc=3,Hc=4,zc=5,Gc=6,ei=7;var Vc=300,Ss=301,pr=302,zo=303,Go=304,Yi=1e3,zn=1001,po=1002,dn=1003,Yd=1004;var fa=1005;var En=1006,Vo=1007;var Di=1008;var Pn=1009,Wc=1010,Xc=1011,mr=1012,Wo=1013,ti=1014,Wn=1015,ni=1016,Xo=1017,qo=1018,Es=1020,qc=35902,Yc=35899,Zc=1021,jc=1022,ii=1023,Ri=1026,Li=1027,Yo=1028,Zo=1029,ns=1030,jo=1031;var $o=1033,pa=33776,ma=33777,ga=33778,xa=33779,Ko=35840,Jo=35841,Qo=35842,el=35843,tl=36196,nl=37492,il=37496,sl=37488,rl=37489,_a=37490,al=37491,ol=37808,ll=37809,cl=37810,hl=37811,dl=37812,ul=37813,fl=37814,pl=37815,ml=37816,gl=37817,xl=37818,_l=37819,yl=37820,bl=37821,vl=36492,Ml=36494,Sl=36495,El=36283,wl=36284,ya=36285,Tl=36286;var zr=2300,mo=2301,so=2302,_c=2303,yc=2400,bc=2401,vc=2402;var Zd=3200;var ba=0,jd=1,Ni="",nn="srgb",Gr="srgb-linear",Vr="linear",At="srgb";var ro=7680;var $d=519,Kd=512,Jd=513,Qd=514,$c=515,eu=516,tu=517,Kc=518,Jc=519,nu=35044;var Qc="300 es",Gn=2e3,Ks=2001;function Kf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){let i=Wr("canvas");return i.style.display="block",i}var Vh={},Js=null;function eh(...i){let e="THREE."+i.shift();Js?Js("log",e,...i):console.log(e,...i)}function su(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function st(...i){i=su(i);let e="THREE."+i.shift();if(Js)Js("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=su(i);let e="THREE."+i.shift();if(Js)Js("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ur(...i){let e=i.join(" ");e in Vh||(Vh[e]=!0,st(...i))}function ru(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var au={[ao]:ao,[lo]:uo,[co]:co,[$s]:ho,[oo]:oo,[uo]:lo,[fo]:fo,[ho]:$s},Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,kr=Math.PI/180,Qs=180/Math.PI;function ws(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function th(i,e){return(i%e+e)%e}function Qf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ep(i,e,t){return i!==e?(t-i)/(e-i):0}function Or(i,e,t){return(1-t)*i+t*e}function tp(i,e,t,n){return Or(i,e,1-Math.exp(-t*n))}function np(i,e=1){return e-Math.abs(th(i,e*2)-e)}function ip(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ap(i,e){return i+Math.random()*(e-i)}function op(i){return i*(.5-Math.random())}function lp(i){i!==void 0&&(Wh=i);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cp(i){return i*kr}function hp(i){return i*Qs}function dp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*d,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*d,o*c);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ih(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ou(i,e){if(e.constructor===Float32Array)return i;let t=ih(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function lu(i,e){if(e.constructor===Float32Array)return i;let t=ih(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var sh={DEG2RAD:kr,RAD2DEG:Qs,generateUUID:ws,clamp:pt,euclideanModulo:th,mapLinear:Qf,inverseLerp:ep,lerp:Or,damp:tp,pingpong:np,smoothstep:ip,smootherstep:sp,randInt:rp,randFloat:ap,randFloatSpread:op,seededRandom:lp,degToRad:cp,radToDeg:hp,isPowerOfTwo:dp,ceilPowerOfTwo:up,floorPowerOfTwo:nh,setQuaternionFromProperEuler:fp,normalize:lu,denormalize:ou},be=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],m=r[a+2],y=r[a+3];if(u!==y||l!==f||c!==p||d!==m){let g=l*f+c*p+d*m+u*y;g<0&&(f=-f,p=-p,m=-m,y=-y,g=-g);let x=1-o;if(g<.9995){let v=Math.acos(g),C=Math.sin(v);x=Math.sin(x*v)/C,o=Math.sin(o*v)/C,l=l*x+f*o,c=c*x+p*o,d=d*x+m*o,u=u*x+y*o}else{l=l*x+f*o,c=c*x+p*o,d=d*x+m*o,u=u*x+y*o;let v=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=v,c*=v,d*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+d*u+l*p-c*f,e[t+1]=l*m+d*f+c*u-o*p,e[t+2]=c*m+d*p+o*f-l*u,e[t+3]=d*m-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*d*u+c*p*m,this._y=c*p*u-f*d*m,this._z=c*d*m+f*p*u,this._w=c*d*u-f*p*m;break;case"YXZ":this._x=f*d*u+c*p*m,this._y=c*p*u-f*d*m,this._z=c*d*m-f*p*u,this._w=c*d*u+f*p*m;break;case"ZXY":this._x=f*d*u-c*p*m,this._y=c*p*u+f*d*m,this._z=c*d*m+f*p*u,this._w=c*d*u-f*p*m;break;case"ZYX":this._x=f*d*u-c*p*m,this._y=c*p*u+f*d*m,this._z=c*d*m-f*p*u,this._w=c*d*u+f*p*m;break;case"YZX":this._x=f*d*u+c*p*m,this._y=c*p*u+f*d*m,this._z=c*d*m-f*p*u,this._w=c*d*u-f*p*m;break;case"XZY":this._x=f*d*u-c*p*m,this._y=c*p*u-f*d*m,this._z=c*d*m+f*p*u,this._w=c*d*u+f*p*m;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new Z,Xh=new un,ct=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],p=n[5],m=n[8],y=s[0],g=s[3],x=s[6],v=s[1],C=s[4],E=s[7],R=s[2],S=s[5],_=s[8];return r[0]=a*y+o*v+l*R,r[3]=a*g+o*C+l*S,r[6]=a*x+o*E+l*_,r[1]=c*y+d*v+u*R,r[4]=c*g+d*C+u*S,r[7]=c*x+d*E+u*_,r[2]=f*y+p*v+m*R,r[5]=f*g+p*C+m*S,r[8]=f*x+p*E+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,f=o*l-d*r,p=c*r-a*l,m=t*u+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=u*y,e[1]=(s*c-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($l.makeScale(e,t)),this}rotate(e){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($l.makeRotation(-e)),this}translate(e,t){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$l=new ct,qh=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){let i={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gr]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:At,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}var yt=pp();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,go=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=Wr("canvas")),Fs.width=e.width,Fs.height=e.height;let s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ai(t[n]/255)*255):t[n]=Ai(t[n]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mp=0,er=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ws(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var gp=0,Jl=new Z,wn=class i extends Kn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=zn,s=zn,r=En,a=Di,o=ii,l=Pn,c=i.DEFAULT_ANISOTROPY,d=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ws(),this.name="",this.source=new er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Vc;wn.DEFAULT_ANISOTROPY=1;var Bt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],m=l[9],y=l[2],g=l[6],x=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,E=(p+1)/2,R=(x+1)/2,S=(d+f)/4,_=(u+y)/4,w=(m+g)/4;return C>E&&C>R?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=S/n,r=_/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=S/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=w/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-y)*(u-y)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-y)/v,this.z=(f-d)/v,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xo=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new wn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new er(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends xo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xr=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends wn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Rt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,u,f,p,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,f,p,m,y,g)}set(e,t,n,s,r,a,o,l,c,d,u,f,p,m,y,g){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=d,x[10]=u,x[14]=f,x[3]=p,x[7]=m,x[11]=y,x[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*d,p=a*u,m=o*d,y=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*d,p=l*u,m=c*d,y=c*u;t[0]=f+y*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-m,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*d,p=l*u,m=c*d,y=c*u;t[0]=f-y*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*d,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*d,p=a*u,m=o*d,y=o*u;t[0]=l*d,t[4]=m*c-p,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,m=o*l,y=o*c;t[0]=l*d,t[4]=y-f*u,t[8]=m*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+m,t[10]=f-y*u}else if(e.order==="XZY"){let f=a*l,p=a*c,m=o*l,y=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+y,t[5]=a*d,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*d,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xp,e,_p)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),zi.crossVectors(n,Ln),zi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),zi.crossVectors(n,Ln)),zi.normalize(),La.crossVectors(Ln,zi),s[0]=zi.x,s[4]=La.x,s[8]=Ln.x,s[1]=zi.y,s[5]=La.y,s[9]=Ln.y,s[2]=zi.z,s[6]=La.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],p=n[13],m=n[2],y=n[6],g=n[10],x=n[14],v=n[3],C=n[7],E=n[11],R=n[15],S=s[0],_=s[4],w=s[8],z=s[12],I=s[1],L=s[5],q=s[9],$=s[13],U=s[2],X=s[6],N=s[10],j=s[14],O=s[3],F=s[7],H=s[11],K=s[15];return r[0]=a*S+o*I+l*U+c*O,r[4]=a*_+o*L+l*X+c*F,r[8]=a*w+o*q+l*N+c*H,r[12]=a*z+o*$+l*j+c*K,r[1]=d*S+u*I+f*U+p*O,r[5]=d*_+u*L+f*X+p*F,r[9]=d*w+u*q+f*N+p*H,r[13]=d*z+u*$+f*j+p*K,r[2]=m*S+y*I+g*U+x*O,r[6]=m*_+y*L+g*X+x*F,r[10]=m*w+y*q+g*N+x*H,r[14]=m*z+y*$+g*j+x*K,r[3]=v*S+C*I+E*U+R*O,r[7]=v*_+C*L+E*X+R*F,r[11]=v*w+C*q+E*N+R*H,r[15]=v*z+C*$+E*j+R*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],m=e[3],y=e[7],g=e[11],x=e[15],v=l*p-c*f,C=o*p-c*u,E=o*f-l*u,R=a*p-c*d,S=a*f-l*d,_=a*u-o*d;return t*(y*v-g*C+x*E)-n*(m*v-g*R+x*S)+s*(m*C-y*R+x*_)-r*(m*E-y*S+g*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],m=e[12],y=e[13],g=e[14],x=e[15],v=t*o-n*a,C=t*l-s*a,E=t*c-r*a,R=n*l-s*o,S=n*c-r*o,_=s*c-r*l,w=d*y-u*m,z=d*g-f*m,I=d*x-p*m,L=u*g-f*y,q=u*x-p*y,$=f*x-p*g,U=v*$-C*q+E*L+R*I-S*z+_*w;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/U;return e[0]=(o*$-l*q+c*L)*X,e[1]=(s*q-n*$-r*L)*X,e[2]=(y*_-g*S+x*R)*X,e[3]=(f*S-u*_-p*R)*X,e[4]=(l*I-a*$-c*z)*X,e[5]=(t*$-s*I+r*z)*X,e[6]=(g*E-m*_-x*C)*X,e[7]=(d*_-f*E+p*C)*X,e[8]=(a*q-o*I+c*w)*X,e[9]=(n*I-t*q-r*w)*X,e[10]=(m*S-y*E+x*v)*X,e[11]=(u*E-d*S-p*v)*X,e[12]=(o*z-a*L-l*w)*X,e[13]=(t*L-n*z+s*w)*X,e[14]=(y*C-m*R-g*v)*X,e[15]=(d*R-u*C+f*v)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,f=r*c,p=r*d,m=r*u,y=a*d,g=a*u,x=o*u,v=l*c,C=l*d,E=l*u,R=n.x,S=n.y,_=n.z;return s[0]=(1-(y+x))*R,s[1]=(p+E)*R,s[2]=(m-C)*R,s[3]=0,s[4]=(p-E)*S,s[5]=(1-(f+x))*S,s[6]=(g+v)*S,s[7]=0,s[8]=(m+C)*_,s[9]=(g-v)*_,s[10]=(1-(f+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let c=1/a,d=1/o,u=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Gn,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),m,y;if(l)m=r/(a-r),y=a*r/(a-r);else if(o===Gn)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ks)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gn,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),m,y;if(l)m=1/(a-r),y=a/(a-r);else if(o===Gn)m=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ks)m=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Us=new Z,Zn=new Rt,xp=new Z(0,0,0),_p=new Z(1,1,1),zi=new Z,La=new Z,Ln=new Z,Zh=new Rt,jh=new un,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jh.setFromEuler(this),this.setFromQuaternion(jh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yp=0,$h=new Z,ks=new un,Mi=new Rt,Na=new Z,Cr=new Z,bp=new Z,vp=new un,Kh=new Z(1,0,0),Jh=new Z(0,1,0),Qh=new Z(0,0,1),ed={type:"added"},Mp={type:"removed"},Os={type:"childadded",child:null},Ql={type:"childremoved",child:null},Ht=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Z,t=new Vn,n=new un,s=new Z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ct}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Kh,e)}rotateY(e){return this.rotateOnAxis(Jh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return $h.copy(e).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kh,e)}translateY(e){return this.translateOnAxis(Jh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Na.copy(e):Na.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Cr,Na,this.up):Mi.lookAt(Na,Cr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Mi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ed),Os.child=e,this.dispatchEvent(Os),Os.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mp),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ed),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,vp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new Z(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var We=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sp={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),x=this._getHandJoint(c,y);g!==null&&(x.matrix.fromArray(g.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=g.radius),x.visible=g!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var nt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=th(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ec(a,r,e+1/3),this.g=ec(a,r,e),this.b=ec(a,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){let n=cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return yt.workingToColorSpace(yn.copy(this),e),Math.round(pt(yn.r*255,0,255))*65536+Math.round(pt(yn.g*255,0,255))*256+Math.round(pt(yn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,r=yn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=nn){yt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Fa);let n=Or(Gi.h,Fa.h,t),s=Or(Gi.s,Fa.s,t),r=Or(Gi.l,Fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new nt;nt.NAMES=cu;var An=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new Z,Si=new Z,tc=new Z,Ei=new Z,Bs=new Z,Hs=new Z,td=new Z,nc=new Z,ic=new Z,sc=new Z,rc=new Bt,ac=new Bt,oc=new Bt,qi=class i{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),Si.subVectors(n,t),tc.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(Si),l=jn.dot(tc),c=Si.dot(Si),d=Si.dot(tc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*d)*f,m=(a*d-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return rc.setScalar(0),ac.setScalar(0),oc.setScalar(0),rc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(rc,r.x),a.addScaledVector(ac,r.y),a.addScaledVector(oc,r.z),a}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),Si.subVectors(e,t),jn.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bs.subVectors(s,n),Hs.subVectors(r,n),nc.subVectors(e,n);let l=Bs.dot(nc),c=Hs.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,s);let d=Bs.dot(ic),u=Hs.dot(ic);if(d>=0&&u<=d)return t.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(n).addScaledVector(Bs,a);sc.subVectors(e,r);let p=Bs.dot(sc),m=Hs.dot(sc);if(m>=0&&p<=m)return t.copy(r);let y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Hs,o);let g=d*m-p*u;if(g<=0&&u-d>=0&&p-m>=0)return td.subVectors(r,s),o=(u-d)/(u-d+(p-m)),t.copy(s).addScaledVector(td,o);let x=1/(g+y+f);return a=y*x,o=f*x,t.copy(n).addScaledVector(Bs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pt=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ua.copy(n.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),ka.subVectors(this.max,Pr),zs.subVectors(e.a,Pr),Gs.subVectors(e.b,Pr),Vs.subVectors(e.c,Pr),Vi.subVectors(Gs,zs),Wi.subVectors(Vs,Gs),ds.subVectors(zs,Vs);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-ds.z,ds.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,ds.z,0,-ds.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-ds.y,ds.x,0];return!lc(t,zs,Gs,Vs,ka)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,zs,Gs,Vs,ka))?!1:(Oa.crossVectors(Vi,Wi),t=[Oa.x,Oa.y,Oa.z],lc(t,zs,Gs,Vs,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],$n=new Z,Ua=new Pt,zs=new Z,Gs=new Z,Vs=new Z,Vi=new Z,Wi=new Z,ds=new Z,Pr=new Z,ka=new Z,Oa=new Z,us=new Z;function lc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),d=n.dot(us);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Qt=new Z,Ba=new be,Ep=0,Fn=class extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?ih(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ba.fromBufferAttribute(this,t),Ba.applyMatrix3(e),this.setXY(t,Ba.x,Ba.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ou(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):lu(e,this.array)}};var qr=class extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yr=class extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}},wp=new Pt,Ir=new Z,cc=new Z,kn=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(cc)),this.expandByPoint(Ir.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tp=0,Hn=new Rt,hc=new Ht,Ws=new Z,Nn=new Pt,Dr=new Pt,hn=new Z,Yt=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kf(e)?Yr:qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Nn.min,Dr.min),Nn.expandByPoint(hn),hn.addVectors(Nn.max,Dr.max),Nn.expandByPoint(hn)):(Nn.expandByPoint(Dr.min),Nn.expandByPoint(Dr.max))}Nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)hn.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(e,c),hn.add(Ws)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let z=0;z<n.count;z++)o[z]=new Z,l[z]=new Z;let d=new Z,u=new Z,f=new Z,p=new be,m=new be,y=new be,g=new Z,x=new Z;function v(z,I,L){c[z]=c[I]=c[L]=1,d.fromBufferAttribute(n,z),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,L),p.fromBufferAttribute(r,z),m.fromBufferAttribute(r,I),y.fromBufferAttribute(r,L),u.sub(d),f.sub(d),m.sub(p),y.sub(p);let q=1/(m.x*y.y-y.x*m.y);isFinite(q)&&(g.copy(u).multiplyScalar(y.y).addScaledVector(f,-m.y).multiplyScalar(q),x.copy(f).multiplyScalar(m.x).addScaledVector(u,-y.x).multiplyScalar(q),o[z].add(g),o[I].add(g),o[L].add(g),l[z].add(x),l[I].add(x),l[L].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,I=C.length;z<I;++z){let L=C[z],q=L.start,$=L.count;for(let U=q,X=q+$;U<X;U+=3)v(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let E=new Z,R=new Z,S=new Z,_=new Z;function w(z){S.fromBufferAttribute(s,z),_.copy(S);let I=o[z];E.copy(I),E.sub(S.multiplyScalar(S.dot(I))).normalize(),R.crossVectors(_,I);let q=R.dot(l[z])<0?-1:1;a.setXYZW(z,E.x,E.y,E.z,q)}for(let z=0,I=n.count;z<I;++z)c[z]&&w(z);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new Z,r=new Z,a=new Z,o=new Z,l=new Z,c=new Z,d=new Z,u=new Z;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d),p=0,m=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let x=0;x<d;x++)f[m++]=c[p++]}return new Fn(f,d,u)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dc=new Z,Ap=new Z,Rp=new ct,mn=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=dc.subVectors(n,t).cross(Ap.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rp.getNormalMatrix(e),s=this.coplanarPoint(dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cp=0,di=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=fr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Uc,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ti=new Z,uc=new Z,Ha=new Z,za=new Z,Zi=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uc.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),za.copy(this.origin).sub(uc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ha),o=za.dot(this.direction),l=-za.dot(Ha),c=za.lengthSq(),d=Math.abs(1-a*a),u,f,p,m;if(d>0)if(u=a*l-o,f=a*o-l,m=r*d,u>=0)if(f>=-m)if(f<=m){let y=1/d;u*=y,f*=y,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uc).addScaledVector(Ha,f),p}intersectSphere(e,t){if(e.radius<0)return null;Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,m=t.x-a.x,y=t.y-a.y,g=t.z-a.z,x=n.x-a.x,v=n.y-a.y,C=n.z-a.z,E=Math.abs(l),R=Math.abs(c),S=Math.abs(d),_,w,z,I,L,q,$,U,X,N,j,O;if(E>=R&&E>=S?(z=l,q=u,X=m,O=x,l>=0?(_=c,w=d,I=f,L=p,$=y,U=g,N=v,j=C):(_=d,w=c,I=p,L=f,$=g,U=y,N=C,j=v)):R>=S?(z=c,q=f,X=y,O=v,c>=0?(_=d,w=l,I=p,L=u,$=g,U=m,N=C,j=x):(_=l,w=d,I=u,L=p,$=m,U=g,N=x,j=C)):(z=d,q=p,X=g,O=C,d>=0?(_=l,w=c,I=u,L=f,$=m,U=y,N=x,j=v):(_=c,w=l,I=f,L=u,$=y,U=m,N=v,j=x)),z===0)return null;let F=_/z,H=w/z,K=1/z,xe=I-F*q,V=L-H*q,B=$-F*X,te=U-H*X,ge=N-F*O,ye=j-H*O,Ee=ge*te-ye*B,He=xe*ye-V*ge,it=B*V-te*xe;if(s){if(Ee<0||He<0||it<0)return null}else if((Ee<0||He<0||it<0)&&(Ee>0||He>0||it>0))return null;let qe=Ee+He+it;if(qe===0)return null;let Xe=K*(Ee*q+He*X+it*O);return(qe>0?Xe<0:Xe>0)?null:this.at(Xe/qe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ci=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},nd=new Rt,fs=new Zi,Ga=new kn,id=new Z,Va=new Z,Wa=new Z,Xa=new Z,fc=new Z,qa=new Z,sd=new Z,Ya=new Z,Ie=class extends Ht{constructor(e=new Yt,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(fc.fromBufferAttribute(u,e),a?qa.addScaledVector(fc,d):qa.addScaledVector(fc.sub(t),d))}t.add(qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Ga.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Ga,id)===null||fs.origin.distanceToSquared(id)>(e.far-e.near)**2))&&(nd.copy(r).invert(),fs.copy(e.ray).applyMatrix4(nd),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,y=f.length;m<y;m++){let g=f[m],x=a[g.materialIndex],v=Math.max(g.start,p.start),C=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let E=v,R=C;E<R;E+=3){let S=o.getX(E),_=o.getX(E+1),w=o.getX(E+2);s=Za(this,x,e,n,c,d,u,S,_,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let g=m,x=y;g<x;g+=3){let v=o.getX(g),C=o.getX(g+1),E=o.getX(g+2);s=Za(this,a,e,n,c,d,u,v,C,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,y=f.length;m<y;m++){let g=f[m],x=a[g.materialIndex],v=Math.max(g.start,p.start),C=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let E=v,R=C;E<R;E+=3){let S=E,_=E+1,w=E+2;s=Za(this,x,e,n,c,d,u,S,_,w),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,x=y;g<x;g+=3){let v=g,C=g+1,E=g+2;s=Za(this,a,e,n,c,d,u,v,C,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Pp(i,e,t,n,s,r,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===pi,o),l===null)return null;Ya.copy(o),Ya.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:i}}function Za(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Va),i.getVertexPosition(l,Wa),i.getVertexPosition(c,Xa);let d=Pp(i,e,t,n,Va,Wa,Xa,sd);if(d){let u=new Z;qi.getBarycoord(sd,Va,Wa,Xa,u),s&&(d.uv=qi.getInterpolatedAttribute(s,o,l,c,u,new be)),r&&(d.uv1=qi.getInterpolatedAttribute(r,o,l,c,u,new be)),a&&(d.normal=qi.getInterpolatedAttribute(a,o,l,c,u,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new Z,materialIndex:0};qi.getNormal(Va,Wa,Xa,f.normal),d.face=f,d.barycoord=u}return d}var Zr=class extends wn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=dn,d=dn,u,f){super(null,a,o,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class extends Fn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new Rt,rd=new Rt,ja=[],ad=new Pt,Ip=new Rt,Lr=new Ie,Nr=new kn,Jn=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ip)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),ad.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Nr.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),rd.multiplyMatrices(n,Xs),Lr.matrixWorld=rd,Lr.raycast(e,ja);for(let a=0,o=ja.length;a<o;a++){let l=ja[a];l.instanceId=r,l.object=this,t.push(l)}ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zr(new Float32Array(s*this.count),s,this.count,Yo,Wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ps=new kn,Dp=new be(.5,.5),$a=new Z,ji=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],p=r[7],m=r[8],y=r[9],g=r[10],x=r[11],v=r[12],C=r[13],E=r[14],R=r[15];if(s[0].setComponents(c-a,p-d,x-m,R-v).normalize(),s[1].setComponents(c+a,p+d,x+m,R+v).normalize(),s[2].setComponents(c+o,p+u,x+y,R+C).normalize(),s[3].setComponents(c-o,p-u,x-y,R-C).normalize(),n)s[4].setComponents(l,f,g,E).normalize(),s[5].setComponents(c-l,p-f,x-g,R-E).normalize();else if(s[4].setComponents(c-l,p-f,x-g,R-E).normalize(),t===Gn)s[5].setComponents(c+l,p+f,x+g,R+E).normalize();else if(t===Ks)s[5].setComponents(l,f,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);let t=Dp.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},od=new Rt,yo=class i{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];od.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ji),n[s].setFromProjectionMatrix(od,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ji),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ir=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ld=new Rt,Mc=new Zi,Ka=new kn,Ja=new Z,$r=class extends Ht{constructor(e=new Yt,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;ld.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let m=f,y=p;m<y;m++){let g=c.getX(m);Ja.fromBufferAttribute(u,g),cd(Ja,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let m=f,y=p;m<y;m++)Ja.fromBufferAttribute(u,m),cd(Ja,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cd(i,e,t,n,s,r,a){let o=Mc.distanceSqToPoint(i);if(o<t){let l=new Z;Mc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Kr=class extends wn{constructor(e=[],t=Ss,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Rn=class extends wn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Pi=class extends wn{constructor(e,t,n=ti,s,r,a,o=dn,l=dn,c,d=Ri,u=1){if(d!==Ri&&d!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jr=class extends Pi{constructor(e,t=ti,n=Ss,s,r,a=dn,o=dn,l,c=Ri){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qr=class extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zt=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(u,2));function m(y,g,x,v,C,E,R,S,_,w,z){let I=E/_,L=R/w,q=E/2,$=R/2,U=S/2,X=_+1,N=w+1,j=0,O=0,F=new Z;for(let H=0;H<N;H++){let K=H*L-$;for(let xe=0;xe<X;xe++){let V=xe*I-q;F[y]=V*v,F[g]=K*C,F[x]=U,c.push(F.x,F.y,F.z),F[y]=0,F[g]=0,F[x]=S>0?1:-1,d.push(F.x,F.y,F.z),u.push(xe/_),u.push(1-H/w),j+=1}}for(let H=0;H<w;H++)for(let K=0;K<_;K++){let xe=f+K+X*H,V=f+K+X*(H+1),B=f+(K+1)+X*(H+1),te=f+(K+1)+X*H;l.push(xe,V,te),l.push(V,B,te),O+=6}o.addGroup(p,O,z),p+=O,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var sr=class i extends Yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new Z,d=new be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Et=class i extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],f=[],p=[],m=0,y=[],g=n/2,x=0;v(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(p,2));function v(){let E=new Z,R=new Z,S=0,_=(t-e)/n;for(let w=0;w<=r;w++){let z=[],I=w/r,L=I*(t-e)+e;for(let q=0;q<=s;q++){let $=q/s,U=$*l+o,X=Math.sin(U),N=Math.cos(U);R.x=L*X,R.y=-I*n+g,R.z=L*N,u.push(R.x,R.y,R.z),E.set(X,_,N).normalize(),f.push(E.x,E.y,E.z),p.push($,1-I),z.push(m++)}y.push(z)}for(let w=0;w<s;w++)for(let z=0;z<r;z++){let I=y[z][w],L=y[z+1][w],q=y[z+1][w+1],$=y[z][w+1];(e>0||z!==0)&&(d.push(I,L,$),S+=3),(t>0||z!==r-1)&&(d.push(L,q,$),S+=3)}c.addGroup(x,S,0),x+=S}function C(E){let R=m,S=new be,_=new Z,w=0,z=E===!0?e:t,I=E===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,g*I,0),f.push(0,I,0),p.push(.5,.5),m++;let L=m;for(let q=0;q<=s;q++){let U=q/s*l+o,X=Math.cos(U),N=Math.sin(U);_.x=z*N,_.y=g*I,_.z=z*X,u.push(_.x,_.y,_.z),f.push(0,I,0),S.x=X*.5+.5,S.y=N*.5*I+.5,p.push(S.x,S.y),m++}for(let q=0;q<s;q++){let $=R+q,U=L+q;E===!0?d.push(U,U+1,$):d.push(U+1,U,$),w+=3}c.addGroup(x,w,E===!0?1:2),x+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$i=class i extends Et{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var On=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,p=(a-d)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new be:new Z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Z,s=[],r=[],a=[],o=new Z,l=new Rt;for(let p=0;p<=e;p++){let m=p/e;s[p]=this.getTangentAt(m,new Z)}r[0]=new Z,a[0]=new Z;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(pt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],p*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},rr=class extends On{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*u+this.aX,c=f*u+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bo=class extends rr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let f=(a-r)/c-(o-r)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+u)+(l-o)/u;f*=d,p*=d,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var hd=new Z,dd=new Z,pc=new rh,mc=new rh,gc=new rh,sn=class extends On{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(dd.subVectors(s[0],s[1]).add(s[0]),c=dd);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(hd.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=hd),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(d),p);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),pc.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,m,y,g),mc.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,m,y,g),gc.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,m,y,g)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),mc.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),gc.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return n.set(pc.calc(l),mc.calc(l),gc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ud(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Lp(i,e){let t=1-i;return t*t*e}function Np(i,e){return 2*(1-i)*i*e}function Fp(i,e){return i*i*e}function Br(i,e,t,n){return Lp(i,e)+Np(i,t)+Fp(i,n)}function Up(i,e){let t=1-i;return t*t*t*e}function kp(i,e){let t=1-i;return 3*t*t*i*e}function Op(i,e){return 3*(1-i)*i*i*e}function Bp(i,e){return i*i*i*e}function Hr(i,e,t,n,s){return Up(i,e)+kp(i,t)+Op(i,n)+Bp(i,s)}var ea=class extends On{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends On{constructor(e=new Z,t=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(e,s.x,r.x,a.x,o.x),Hr(e,s.y,r.y,a.y,o.y),Hr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends On{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends On{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends On{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Br(e,s.x,r.x,a.x),Br(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends On{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Br(e,s.x,r.x,a.x),Br(e,s.y,r.y,a.y),Br(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends On{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ud(o,l.x,c.x,d.x,u.x),ud(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},So=Object.freeze({__proto__:null,ArcCurve:bo,CatmullRomCurve3:sn,CubicBezierCurve:ea,CubicBezierCurve3:vo,EllipseCurve:rr,LineCurve:ta,LineCurve3:Mo,QuadraticBezierCurve:na,QuadraticBezierCurve3:ia,SplineCurve:sa}),Eo=class extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new So[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},kt=class extends Eo{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ta(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new na(this.currentPoint.clone(),new be(e,t),new be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ea(this.currentPoint.clone(),new be(e,t),new be(n,s),new be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new sa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new rr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ht=class extends kt{constructor(e){super(e),this.uuid=ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new kt().fromJSON(s))}return this}};function Hp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=hu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Xp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let d=o,u=l;for(let f=t;f<s;f+=t){let p=i[f],m=i[f+1];p<o&&(o=p),m<l&&(l=m),p>d&&(d=p),m>u&&(u=m)}c=Math.max(d-o,u-l),c=c!==0?32767/c:0}return ra(r,a,t,o,l,c,0),a}function hu(i,e,t,n,s){let r;if(s===nm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=fd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=fd(a/n|0,i[a],i[a+1],r);return r&&ar(r,r.next)&&(oa(r),r=r.next),r}function ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ar(t,t.next)||qt(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ra(i,e,t,n,s,r,a){if(!i)return;!a&&r&&$p(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gp(i,n,s,r):zp(i)){e.push(l.i,i.i,c.i),oa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Vp(ms(i),e),ra(i,e,t,n,s,r,2)):a===2&&Wp(i,e,t,n,s,r):ra(ms(i),e,t,n,s,r,1);break}}}function zp(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=f&&m.y>=u&&m.y<=p&&Fr(s,o,r,l,a,c,m.x,m.y)&&qt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Gp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),m=Math.min(d,u,f),y=Math.max(o,l,c),g=Math.max(d,u,f),x=Sc(p,m,e,t,n),v=Sc(y,g,e,t,n),C=i.prevZ,E=i.nextZ;for(;C&&C.z>=x&&E&&E.z<=v;){if(C.x>=p&&C.x<=y&&C.y>=m&&C.y<=g&&C!==s&&C!==a&&Fr(o,d,l,u,c,f,C.x,C.y)&&qt(C.prev,C,C.next)>=0||(C=C.prevZ,E.x>=p&&E.x<=y&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&Fr(o,d,l,u,c,f,E.x,E.y)&&qt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;C&&C.z>=x;){if(C.x>=p&&C.x<=y&&C.y>=m&&C.y<=g&&C!==s&&C!==a&&Fr(o,d,l,u,c,f,C.x,C.y)&&qt(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;E&&E.z<=v;){if(E.x>=p&&E.x<=y&&E.y>=m&&E.y<=g&&E!==s&&E!==a&&Fr(o,d,l,u,c,f,E.x,E.y)&&qt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Vp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ar(n,s)&&uu(n,t,t.next,s)&&aa(n,s)&&aa(s,n)&&(e.push(n.i,t.i,s.i),oa(t),oa(t.next),t=i=s),t=t.next}while(t!==i);return ms(t)}function Wp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Qp(a,o)){let l=fu(a,o);a=ms(a,a.next),l=ms(l,l.next),ra(a,e,t,n,s,r,0),ra(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=hu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jp(c))}s.sort(qp);for(let r=0;r<s.length;r++)t=Yp(s[r],t);return t}function qp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Yp(i,e){let t=Zp(i,e);if(!t)return e;let n=fu(t,i);return ms(n,n.next),ms(t,t.next)}function Zp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ar(i,t))return t;do{if(ar(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&du(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);aa(t,i)&&(u<d||u===d&&(t.x>a.x||t.x===a.x&&jp(a,t)))&&(a=t,d=u)}t=t.next}while(t!==o);return a}function jp(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function $p(i,e,t,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kp(s)}function Kp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function du(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Fr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&du(i,e,t,n,s,r,a,o)}function Qp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!em(i,e)&&(aa(i,e)&&aa(e,i)&&tm(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||ar(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ar(i,e){return i.x===e.x&&i.y===e.y}function uu(i,e,t,n){let s=eo(qt(i,e,t)),r=eo(qt(i,e,n)),a=eo(qt(t,n,i)),o=eo(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&Qa(i,t,e)||r===0&&Qa(i,n,e)||a===0&&Qa(t,i,n)||o===0&&Qa(t,e,n))}function Qa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function eo(i){return i>0?1:i<0?-1:0}function em(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&uu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function aa(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function tm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function fu(i,e){let t=Ec(i.i,i.x,i.y),n=Ec(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fd(i,e,t,n){let s=Ec(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ec(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function nm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var wc=class{static triangulate(e,t,n=2){return Hp(e,t,n)}},hi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];pd(e),md(n,e);let a=e.length;t.forEach(pd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,md(n,t[l]);let o=wc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function pd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function md(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Gt=class i extends Yt{constructor(e=new ht([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:im,C,E=!1,R,S,_,w;if(x){C=x.getSpacedPoints(d),E=!0,f=!1;let fe=x.isCatmullRomCurve3?x.closed:!1;R=x.computeFrenetFrames(d,fe),S=new Z,_=new Z,w=new Z}f||(g=0,p=0,m=0,y=0);let z=o.extractPoints(c),I=z.shape,L=z.holes;if(!hi.isClockWise(I)){I=I.reverse();for(let fe=0,ve=L.length;fe<ve;fe++){let Re=L[fe];hi.isClockWise(Re)&&(L[fe]=Re.reverse())}}function $(fe){let Re=10000000000000001e-36,ke=fe[0];for(let Ne=1;Ne<=fe.length;Ne++){let Ve=Ne%fe.length,Fe=fe[Ve],tt=Fe.x-ke.x,lt=Fe.y-ke.y,gt=tt*tt+lt*lt,Y=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(ke.x),Math.abs(ke.y)),Tt=Re*Y*Y;if(gt<=Tt){fe.splice(Ve,1),Ne--;continue}ke=Fe}}$(I),L.forEach($);let U=L.length,X=I;for(let fe=0;fe<U;fe++){let ve=L[fe];I=I.concat(ve)}function N(fe,ve,Re){return ve||ot("ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(ve,Re)}let j=I.length;function O(fe,ve,Re){let ke,Ne,Ve,Fe=fe.x-ve.x,tt=fe.y-ve.y,lt=Re.x-fe.x,gt=Re.y-fe.y,Y=Fe*Fe+tt*tt,Tt=Fe*gt-tt*lt;if(Math.abs(Tt)>Number.EPSILON){let dt=Math.sqrt(Y),xt=Math.sqrt(lt*lt+gt*gt),Le=ve.x-tt/dt,Dt=ve.y+Fe/dt,Qe=Re.x-gt/xt,J=Re.y+lt/xt,A=((Qe-Le)*gt-(J-Dt)*lt)/(Fe*gt-tt*lt);ke=Le+Fe*A-fe.x,Ne=Dt+tt*A-fe.y;let M=ke*ke+Ne*Ne;if(M<=2)return new be(ke,Ne);Ve=Math.sqrt(M/2)}else{let dt=!1;Fe>Number.EPSILON?lt>Number.EPSILON&&(dt=!0):Fe<-Number.EPSILON?lt<-Number.EPSILON&&(dt=!0):Math.sign(tt)===Math.sign(gt)&&(dt=!0),dt?(ke=-tt,Ne=Fe,Ve=Math.sqrt(Y)):(ke=Fe,Ne=tt,Ve=Math.sqrt(Y/2))}return new be(ke/Ve,Ne/Ve)}let F=[];for(let fe=0,ve=X.length,Re=ve-1,ke=fe+1;fe<ve;fe++,Re++,ke++)Re===ve&&(Re=0),ke===ve&&(ke=0),F[fe]=O(X[fe],X[Re],X[ke]);let H=[],K,xe=F.concat();for(let fe=0,ve=U;fe<ve;fe++){let Re=L[fe];K=[];for(let ke=0,Ne=Re.length,Ve=Ne-1,Fe=ke+1;ke<Ne;ke++,Ve++,Fe++)Ve===Ne&&(Ve=0),Fe===Ne&&(Fe=0),K[ke]=O(Re[ke],Re[Ve],Re[Fe]);H.push(K),xe=xe.concat(K)}let V;if(g===0)V=hi.triangulateShape(X,L);else{let fe=[],ve=[];for(let Re=0;Re<g;Re++){let ke=Re/g,Ne=p*Math.cos(ke*Math.PI/2),Ve=m*Math.sin(ke*Math.PI/2)+y;for(let Fe=0,tt=X.length;Fe<tt;Fe++){let lt=N(X[Fe],F[Fe],Ve);He(lt.x,lt.y,-Ne),ke===0&&fe.push(lt)}for(let Fe=0,tt=U;Fe<tt;Fe++){let lt=L[Fe];K=H[Fe];let gt=[];for(let Y=0,Tt=lt.length;Y<Tt;Y++){let dt=N(lt[Y],K[Y],Ve);He(dt.x,dt.y,-Ne),ke===0&&gt.push(dt)}ke===0&&ve.push(gt)}}V=hi.triangulateShape(fe,ve)}let B=V.length,te=m+y;for(let fe=0;fe<j;fe++){let ve=f?N(I[fe],xe[fe],te):I[fe];E?(_.copy(R.normals[0]).multiplyScalar(ve.x),S.copy(R.binormals[0]).multiplyScalar(ve.y),w.copy(C[0]).add(_).add(S),He(w.x,w.y,w.z)):He(ve.x,ve.y,0)}for(let fe=1;fe<=d;fe++)for(let ve=0;ve<j;ve++){let Re=f?N(I[ve],xe[ve],te):I[ve];E?(_.copy(R.normals[fe]).multiplyScalar(Re.x),S.copy(R.binormals[fe]).multiplyScalar(Re.y),w.copy(C[fe]).add(_).add(S),He(w.x,w.y,w.z)):He(Re.x,Re.y,u/d*fe)}for(let fe=g-1;fe>=0;fe--){let ve=fe/g,Re=p*Math.cos(ve*Math.PI/2),ke=m*Math.sin(ve*Math.PI/2)+y;for(let Ne=0,Ve=X.length;Ne<Ve;Ne++){let Fe=N(X[Ne],F[Ne],ke);He(Fe.x,Fe.y,u+Re)}for(let Ne=0,Ve=L.length;Ne<Ve;Ne++){let Fe=L[Ne];K=H[Ne];for(let tt=0,lt=Fe.length;tt<lt;tt++){let gt=N(Fe[tt],K[tt],ke);E?He(gt.x,gt.y+C[d-1].y,C[d-1].x+Re):He(gt.x,gt.y,u+Re)}}}ge(),ye();function ge(){let fe=s.length/3;if(f){let ve=0,Re=j*ve;for(let ke=0;ke<B;ke++){let Ne=V[ke];it(Ne[2]+Re,Ne[1]+Re,Ne[0]+Re)}ve=d+g*2,Re=j*ve;for(let ke=0;ke<B;ke++){let Ne=V[ke];it(Ne[0]+Re,Ne[1]+Re,Ne[2]+Re)}}else{for(let ve=0;ve<B;ve++){let Re=V[ve];it(Re[2],Re[1],Re[0])}for(let ve=0;ve<B;ve++){let Re=V[ve];it(Re[0]+j*d,Re[1]+j*d,Re[2]+j*d)}}n.addGroup(fe,s.length/3-fe,0)}function ye(){let fe=s.length/3,ve=0;Ee(X,ve),ve+=X.length;for(let Re=0,ke=L.length;Re<ke;Re++){let Ne=L[Re];Ee(Ne,ve),ve+=Ne.length}n.addGroup(fe,s.length/3-fe,1)}function Ee(fe,ve){let Re=fe.length;for(;--Re>=0;){let ke=Re,Ne=Re-1;Ne<0&&(Ne=fe.length-1);for(let Ve=0,Fe=d+g*2;Ve<Fe;Ve++){let tt=j*Ve,lt=j*(Ve+1),gt=ve+ke+tt,Y=ve+Ne+tt,Tt=ve+Ne+lt,dt=ve+ke+lt;qe(gt,Y,Tt,dt)}}}function He(fe,ve,Re){l.push(fe),l.push(ve),l.push(Re)}function it(fe,ve,Re){Xe(fe),Xe(ve),Xe(Re);let ke=s.length/3,Ne=v.generateTopUV(n,s,ke-3,ke-2,ke-1);et(Ne[0]),et(Ne[1]),et(Ne[2])}function qe(fe,ve,Re,ke){Xe(fe),Xe(ve),Xe(ke),Xe(ve),Xe(Re),Xe(ke);let Ne=s.length/3,Ve=v.generateSideWallUV(n,s,Ne-6,Ne-3,Ne-2,Ne-1);et(Ve[0]),et(Ve[1]),et(Ve[3]),et(Ve[1]),et(Ve[2]),et(Ve[3])}function Xe(fe){s.push(l[fe*3+0]),s.push(l[fe*3+1]),s.push(l[fe*3+2])}function et(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return sm(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new So[s.type]().fromJSON(s)),new i(n,e.options)}},im={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new be(r,a),new be(o,l),new be(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],m=e[s*3+2],y=e[r*3],g=e[r*3+1],x=e[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new be(a,1-l),new be(c,1-u),new be(f,1-m),new be(y,1-x)]:[new be(o,1-l),new be(d,1-u),new be(p,1-m),new be(g,1-x)]}};function sm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ui=class i extends Yt{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=pt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/t,u=new Z,f=new be,p=new Z,m=new Z,y=new Z,g=0,x=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,p.x=x*1,p.y=-g,p.z=x*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:g=e[v+1].x-e[v].x,x=e[v+1].y-e[v].y,p.x=x*1,p.y=-g,p.z=x*0,m.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(m)}for(let v=0;v<=t;v++){let C=n+v*d*s,E=Math.sin(C),R=Math.cos(C);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*E,u.y=e[S].y,u.z=e[S].x*R,a.push(u.x,u.y,u.z),f.x=v/t,f.y=S/(e.length-1),o.push(f.x,f.y);let _=l[3*S+0]*E,w=l[3*S+1],z=l[3*S+0]*R;c.push(_,w,z)}}for(let v=0;v<t;v++)for(let C=0;C<e.length-1;C++){let E=C+v*e.length,R=E,S=E+e.length,_=E+e.length+1,w=E+1;r.push(R,S,w),r.push(_,w,S)}this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("uv",new ut(o,2)),this.setAttribute("normal",new ut(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Cn=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,f=t/l,p=[],m=[],y=[],g=[];for(let x=0;x<d;x++){let v=x*f-a;for(let C=0;C<c;C++){let E=C*u-r;m.push(E,-v,0),y.push(0,0,1),g.push(C/o),g.push(1-x/l)}}for(let x=0;x<l;x++)for(let v=0;v<o;v++){let C=v+c*x,E=v+c*(x+1),R=v+1+c*(x+1),S=v+1+c*x;p.push(C,E,S),p.push(E,R,S)}this.setIndex(p),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},or=class i extends Yt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],u=e,f=(t-e)/s,p=new Z,m=new be;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let x=r+g/n*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,d.push(m.x,m.y)}u+=f}for(let y=0;y<s;y++){let g=y*(n+1);for(let x=0;x<n;x++){let v=x+g,C=v,E=v+n+1,R=v+n+2,S=v+1;o.push(C,E,S),o.push(E,R,S)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ii=class i extends Yt{constructor(e=new ht([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(r,3)),this.setAttribute("uv",new ut(a,2));function c(d){let u=s.length/3,f=d.extractPoints(t),p=f.shape,m=f.holes;hi.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,x=m.length;g<x;g++){let v=m[g];hi.isClockWise(v)===!0&&(m[g]=v.reverse())}let y=hi.triangulateShape(p,m);for(let g=0,x=m.length;g<x;g++){let v=m[g];p=p.concat(v)}for(let g=0,x=p.length;g<x;g++){let v=p[g];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,x=y.length;g<x;g++){let v=y[g],C=v[0]+u,E=v[1]+u,R=v[2]+u;n.push(C,E,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function rm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Zt=class i extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],u=new Z,f=new Z,p=[],m=[],y=[],g=[];for(let x=0;x<=n;x++){let v=[],C=x/n,E=a+C*o,R=e*Math.cos(E),S=Math.sqrt(e*e-R*R),_=0;x===0&&a===0?_=.5/t:x===n&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let z=w/t,I=s+z*r;u.x=-S*Math.cos(I),u.y=R,u.z=S*Math.sin(I),m.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),g.push(z+_,1-C),v.push(c++)}d.push(v)}for(let x=0;x<n;x++)for(let v=0;v<t;v++){let C=d[x][v+1],E=d[x][v],R=d[x+1][v],S=d[x+1][v+1];(x!==0||a>0)&&p.push(C,E,S),(x!==n-1||l<Math.PI)&&p.push(E,R,S)}this.setIndex(p),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(y,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $t=class i extends Yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],u=[],f=new Z,p=new Z,m=new Z;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let x=0;x<=s;x++){let v=x/s*r;p.x=(e+t*Math.cos(g))*Math.cos(v),p.y=(e+t*Math.cos(g))*Math.sin(v),p.z=t*Math.sin(g),c.push(p.x,p.y,p.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(p,f).normalize(),d.push(m.x,m.y,m.z),u.push(x/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let x=(s+1)*y+g-1,v=(s+1)*(y-1)+g-1,C=(s+1)*(y-1)+g,E=(s+1)*y+g;l.push(x,v,E),l.push(v,C,E)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Tn=class i extends Yt{constructor(e=new ia(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new Z,l=new Z,c=new be,d=new Z,u=[],f=[],p=[],m=[];y(),this.setIndex(m),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(p,2));function y(){for(let C=0;C<t;C++)g(C);g(r===!1?t:0),v(),x()}function g(C){d=e.getPointAt(C/t,d);let E=a.normals[C],R=a.binormals[C];for(let S=0;S<=s;S++){let _=S/s*Math.PI*2,w=Math.sin(_),z=-Math.cos(_);l.x=z*E.x+w*R.x,l.y=z*E.y+w*R.y,l.z=z*E.z+w*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,u.push(o.x,o.y,o.z)}}function x(){for(let C=1;C<=t;C++)for(let E=1;E<=s;E++){let R=(s+1)*(C-1)+(E-1),S=(s+1)*C+(E-1),_=(s+1)*C+E,w=(s+1)*(C-1)+E;m.push(R,S,w),m.push(S,_,w)}}function v(){for(let C=0;C<=t;C++)for(let E=0;E<=s;E++)c.x=C/t,c.y=E/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new So[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(gd(s))s.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=Ts(i[t]);for(let s in n)e[s]=n[s]}return e}function gd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function am(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var pu={clone:Ts,merge:bn},om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ct().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wo=class extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oe=class extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var la=class extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Ho,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},To=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ao=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function to(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ro=class extends Ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bc:r=e,o=2*t-n;break;case vc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:a=e,l=2*n-t;break;case vc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(s-t),y=m*m,g=y*m,x=-f*g+2*f*y-f*m,v=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*m+1,C=(-1-p)*g+(1.5+p)*y+.5*m,E=p*g-p*y;for(let R=0;R!==o;++R)r[R]=x*a[d+R]+v*a[c+R]+C*a[l+R]+E*a[u+R];return r}},Co=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*d;return r}},Po=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Io=class extends Ki{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let m=(n-t)/(s-t),y=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*m;return r}let f=o*2,p=e-1;for(let m=0;m!==o;++m){let y=a[c+m],g=a[l+m],x=p*f+m*2,v=u[x],C=u[x+1],E=e*f+m*2,R=d[E],S=d[E+1],_=hm(n,t,v,R,s);r[m]=mu(_,y,C,S,g)}return r}};function mu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function cm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function hm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=mu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=cm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),to(e.settings)&&(n.settings={inTangents:qs(e.settings.inTangents,Array),outTangents:qs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Io(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case mo:t=this.InterpolantFactoryMethodLinear;break;case so:t=this.InterpolantFactoryMethodSmooth;break;case _c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return st("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return _c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;to(this.settings)&&(xd(this.settings.inTangents,e),xd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;to(this.settings)&&(_d(this.settings.inTangents,e),_d(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ot("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Jf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===so,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let y=t[u+m];if(y!==t[f+m]||y!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,to(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function _d(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=mo;var Ji=class extends Bn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=zr;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Do.prototype.ValueTypeName="color";var Lo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Lo.prototype.ValueTypeName="number";var No=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}},ca=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends Bn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=zr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Fo.prototype.ValueTypeName="vector";var Uo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gu=new Uo,ko=class{constructor(e){this.manager=e!==void 0?e:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var gs=class extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xs=class extends gs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xc=new Rt,yd=new Z,bd=new Z,ha=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ji,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},no=new Z,io=new un,ci=new Z,da=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(no,io,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(no,io,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xi=new Z,vd=new be,Md=new be,Xt=class extends da{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,vd,Md),t.subVectors(Md,vd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tc=class extends ha{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},_s=class extends gs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ys=class extends da{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=class extends ha{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qn=class extends gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Ac}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},lr=class extends gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ys=-90,Zs=1,cr=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(Ys,Zs,e,t);s.layers=this.layers,this.add(s);let r=new Xt(Ys,Zs,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Ys,Zs,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Ys,Zs,e,t);o.layers=this.layers,this.add(o);let l=new Xt(Ys,Zs,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Ys,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Oo=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var oh="\\[\\]\\.:\\/",dm=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",um="[^"+oh.replace("\\.","")+"]",fm=/((?:WC+[\/:])*)/.source.replace("WC",lh),pm=/(WCOD+)?/.source.replace("WCOD",um),mm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),gm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),xm=new RegExp("^"+fm+pm+mm+gm+"$"),_m=["material","materials","bones","map"],Rc=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dm,"")}static parseTrackName(e){let t=xm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_m.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Rc;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hb=new Float32Array(1);var Sd=new Rt,hr=class{constructor(e,t,n=0,s=1/0){this.ray=new Zi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sd),this}intersectObject(e,t=!0,n=[]){return Cc(e,this,n,t),n.sort(Ed),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Cc(e[s],this,n,t);return n.sort(Ed),n}};function Ed(i,e){return i.distance-e.distance}function Cc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Cc(r[a],e,t,!0)}}var dr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Pc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var ua=class extends Kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ch(i,e,t,n){let s=ym(n);switch(t){case Zc:return i*e;case Yo:return i*e/s.components*s.byteLength;case Zo:return i*e/s.components*s.byteLength;case ns:return i*e*2/s.components*s.byteLength;case jo:return i*e*2/s.components*s.byteLength;case jc:return i*e*3/s.components*s.byteLength;case ii:return i*e*4/s.components*s.byteLength;case $o:return i*e*4/s.components*s.byteLength;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ga:case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:case el:return Math.max(i,16)*Math.max(e,8)/4;case Ko:case Qo:return Math.max(i,8)*Math.max(e,8)/2;case tl:case nl:case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:case _a:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _l:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vl:case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case El:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ya:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ym(i){switch(i){case Pn:case Wc:return{byteLength:1,components:1};case mr:case Xc:case ni:return{byteLength:2,components:1};case Xo:case qo:return{byteLength:2,components:4};case ti:case Wo:case Wn:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Ou(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vm(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],y=u[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let y=u[p];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Um=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,u0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
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
#endif`,y0=`uniform sampler2D dfgLUT;
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
}`,b0=`
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F0=`#if defined( USE_MORPHCOLORS )
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
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`#ifdef USE_MORPHTARGETS
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
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform float backgroundBlurriness;
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
}`,wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,Ug=`uniform vec3 diffuse;
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
}`,kg=`#define LAMBERT
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
}`,Og=`#define LAMBERT
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
}`,Bg=`#define MATCAP
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
}`,Hg=`#define MATCAP
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
}`,zg=`#define NORMAL
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
}`,Gg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define STANDARD
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
}`,Yg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,jg=`uniform float size;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Jg=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,ex=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Mm,alphahash_pars_fragment:Sm,alphamap_fragment:Em,alphamap_pars_fragment:wm,alphatest_fragment:Tm,alphatest_pars_fragment:Am,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Im,begin_vertex:Dm,beginnormal_vertex:Lm,bsdfs:Nm,iridescence_fragment:Fm,bumpmap_pars_fragment:Um,clipping_planes_fragment:km,clipping_planes_pars_fragment:Om,clipping_planes_pars_vertex:Bm,clipping_planes_vertex:Hm,color_fragment:zm,color_pars_fragment:Gm,color_pars_vertex:Vm,color_vertex:Wm,common:Xm,defaultnormal_vertex:qm,displacementmap_pars_vertex:Ym,displacementmap_vertex:Zm,emissivemap_fragment:jm,emissivemap_pars_fragment:$m,colorspace_fragment:Km,colorspace_pars_fragment:Jm,envmap_fragment:Qm,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:a0,fog_pars_fragment:o0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:d0,lights_pars_begin:u0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:x0,lights_physical_fragment:_0,lights_physical_pars_fragment:y0,lights_fragment_begin:b0,lights_fragment_maps:v0,lights_fragment_end:M0,lightprobes_pars_fragment:S0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:w0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:A0,map_fragment:R0,map_pars_fragment:C0,map_particle_fragment:P0,map_particle_pars_fragment:I0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:L0,morphinstance_vertex:N0,morphcolor_vertex:F0,morphnormal_vertex:U0,morphtarget_pars_vertex:k0,morphtarget_vertex:O0,normal_fragment_begin:B0,normal_fragment_maps:H0,normal_pars_fragment:z0,normal_pars_vertex:G0,normal_vertex:V0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:Z0,opaque_fragment:j0,packing:$0,premultiplied_alpha_fragment:K0,project_vertex:J0,dithering_fragment:Q0,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:ag,skinbase_vertex:og,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:dg,specularmap_pars_fragment:ug,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:xg,uv_pars_vertex:_g,uv_vertex:yg,worldpos_vertex:bg,background_vert:vg,background_frag:Mg,backgroundCube_vert:Sg,backgroundCube_frag:Eg,cube_vert:wg,cube_frag:Tg,depth_vert:Ag,depth_frag:Rg,distance_vert:Cg,distance_frag:Pg,equirect_vert:Ig,equirect_frag:Dg,linedashed_vert:Lg,linedashed_frag:Ng,meshbasic_vert:Fg,meshbasic_frag:Ug,meshlambert_vert:kg,meshlambert_frag:Og,meshmatcap_vert:Bg,meshmatcap_frag:Hg,meshnormal_vert:zg,meshnormal_frag:Gg,meshphong_vert:Vg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:qg,meshtoon_vert:Yg,meshtoon_frag:Zg,points_vert:jg,points_frag:$g,shadow_vert:Kg,shadow_frag:Jg,sprite_vert:Qg,sprite_frag:ex},ze={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},xi={basic:{uniforms:bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:bn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:bn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:bn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new nt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:bn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:bn([ze.points,ze.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:bn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:bn([ze.common,ze.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:bn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:bn([ze.sprite,ze.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:bn([ze.common,ze.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:bn([ze.lights,ze.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};xi.physical={uniforms:bn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};var Al={r:0,b:0,g:0},tx=new Rt,Bu=new ct;Bu.set(-1,0,0,0,1,0,0,0,1);function nx(i,e,t,n,s,r){let a=new nt(0),o=s===!0?0:1,l,c,d=null,u=0,f=null;function p(v){let C=v.isScene===!0?v.background:null;if(C&&C.isTexture){let E=v.backgroundBlurriness>0;C=e.get(C,E)}return C}function m(v){let C=!1,E=p(v);E===null?g(a,o):E&&E.isColor&&(g(E,1),C=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(v,C){let E=p(C);E&&E.isCubeTexture?(c===void 0&&(c=new Ie(new zt(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Ts(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bu),c.material.toneMapped=yt.getTransfer(E.colorSpace)!==At,(d!==E||u!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Ie(new Cn(2,2),new fi({name:"BackgroundMaterial",uniforms:Ts(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=yt.getTransfer(E.colorSpace)!==At,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,u=E.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,C){v.getRGB(Al,ah(i)),t.buffers.color.setClear(Al.r,Al.g,Al.b,C,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,C=1){a.set(v),o=C,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:y,dispose:x}}function ix(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(L,q,$,U,X){let N=!1,j=u(L,U,$,q);r!==j&&(r=j,c(r.object)),N=p(L,U,$,X),N&&m(L,U,$,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,E(L,q,$,U),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function u(L,q,$,U){let X=U.wireframe===!0,N=n[q.id];N===void 0&&(N={},n[q.id]=N);let j=L.isInstancedMesh===!0?L.id:0,O=N[j];O===void 0&&(O={},N[j]=O);let F=O[$.id];F===void 0&&(F={},O[$.id]=F);let H=F[X];return H===void 0&&(H=f(l()),F[X]=H),H}function f(L){let q=[],$=[],U=[];for(let X=0;X<t;X++)q[X]=0,$[X]=0,U[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:$,attributeDivisors:U,object:L,attributes:{},index:null}}function p(L,q,$,U){let X=r.attributes,N=q.attributes,j=0,O=$.getAttributes();for(let F in O)if(O[F].location>=0){let K=X[F],xe=N[F];if(xe===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),K===void 0||K.attribute!==xe||xe&&K.data!==xe.data)return!0;j++}return r.attributesNum!==j||r.index!==U}function m(L,q,$,U){let X={},N=q.attributes,j=0,O=$.getAttributes();for(let F in O)if(O[F].location>=0){let K=N[F];K===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let xe={};xe.attribute=K,K&&K.data&&(xe.data=K.data),X[F]=xe,j++}r.attributes=X,r.attributesNum=j,r.index=U}function y(){let L=r.newAttributes;for(let q=0,$=L.length;q<$;q++)L[q]=0}function g(L){x(L,0)}function x(L,q){let $=r.newAttributes,U=r.enabledAttributes,X=r.attributeDivisors;$[L]=1,U[L]===0&&(i.enableVertexAttribArray(L),U[L]=1),X[L]!==q&&(i.vertexAttribDivisor(L,q),X[L]=q)}function v(){let L=r.newAttributes,q=r.enabledAttributes;for(let $=0,U=q.length;$<U;$++)q[$]!==L[$]&&(i.disableVertexAttribArray($),q[$]=0)}function C(L,q,$,U,X,N,j){j===!0?i.vertexAttribIPointer(L,q,$,X,N):i.vertexAttribPointer(L,q,$,U,X,N)}function E(L,q,$,U){y();let X=U.attributes,N=$.getAttributes(),j=q.defaultAttributeValues;for(let O in N){let F=N[O];if(F.location>=0){let H=X[O];if(H===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(H=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(H=L.instanceColor)),H!==void 0){let K=H.normalized,xe=H.itemSize,V=e.get(H);if(V===void 0)continue;let B=V.buffer,te=V.type,ge=V.bytesPerElement,ye=te===i.INT||te===i.UNSIGNED_INT||H.gpuType===Wo;if(H.isInterleavedBufferAttribute){let Ee=H.data,He=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,it=H.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let qe=0;qe<F.locationSize;qe++)x(F.location+qe,Ee.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let qe=0;qe<F.locationSize;qe++)g(F.location+qe);i.bindBuffer(i.ARRAY_BUFFER,B);for(let qe=0;qe<F.locationSize;qe++)C(F.location+qe,xe/F.locationSize,te,K,He*ge,(it+xe/F.locationSize*qe)*ge,ye)}else{if(H.isInstancedBufferAttribute){for(let Ee=0;Ee<F.locationSize;Ee++)x(F.location+Ee,H.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let Ee=0;Ee<F.locationSize;Ee++)g(F.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,B);for(let Ee=0;Ee<F.locationSize;Ee++)C(F.location+Ee,xe/F.locationSize,te,K,xe*ge,xe/F.locationSize*Ee*ge,ye)}}else if(j!==void 0){let K=j[O];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(F.location,K);break;case 3:i.vertexAttrib3fv(F.location,K);break;case 4:i.vertexAttrib4fv(F.location,K);break;default:i.vertexAttrib1fv(F.location,K)}}}}v()}function R(){z();for(let L in n){let q=n[L];for(let $ in q){let U=q[$];for(let X in U){let N=U[X];for(let j in N)d(N[j].object),delete N[j];delete U[X]}}delete n[L]}}function S(L){if(n[L.id]===void 0)return;let q=n[L.id];for(let $ in q){let U=q[$];for(let X in U){let N=U[X];for(let j in N)d(N[j].object),delete N[j];delete U[X]}}delete n[L.id]}function _(L){for(let q in n){let $=n[q];for(let U in $){let X=$[U];if(X[L.id]===void 0)continue;let N=X[L.id];for(let j in N)d(N[j].object),delete N[j];delete X[L.id]}}}function w(L){for(let q in n){let $=n[q],U=L.isInstancedMesh===!0?L.id:0,X=$[U];if(X!==void 0){for(let N in X){let j=X[N];for(let O in j)d(j[O].object),delete j[O];delete X[N]}delete $[U],Object.keys($).length===0&&delete n[q]}}}function z(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:z,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function sx(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let f=0;for(let p=0;p<d;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==ii&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Pn&&_!==Wn&&!w&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(st("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&st("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:v,maxVaryings:C,maxFragmentUniforms:E,maxSamples:R,samples:S}}function ax(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,y=u.clipIntersection,g=u.clipShadows,x=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?d(null):c();else{let v=r?0:n,C=v*4,E=x.clippingState||null;l.value=E,E=d(m,f,C,p);for(let R=0;R!==C;++R)E[R]=t[R];x.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,p,m){let y=u!==null?u.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let x=p+y*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<x)&&(g=new Float32Array(x));for(let C=0,E=p;C!==y;++C,E+=4)a.copy(u[C]).applyMatrix4(v,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Sa=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Kr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:vs});r.uniforms.tEquirect.value=t;let a=new Ie(s,r),o=t.minFilter;return t.minFilter===Di&&(t.minFilter=En),new cr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},xu=256,ox=3,lx=20,Hu=256,zu=16,cx=3,hx=new Z,dx=new nt,Fi=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cr(1,10,null),this._boxMesh=new Ie(new zt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=hx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,m=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(dx));let g=new cr(n,s,d);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=m,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(xu,nh(e))}_fromTexture(e,t){e.mapping===Ss||e.mapping===pr?this._setSize(e.image.length===0?xu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=_u(e,!1,!1),n=Math.log2(e)-ox;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_u(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ss||e.mapping===pr?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ux(),this._integrationMaterial=fx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/zu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-cx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Hu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=px());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function _u(i,e,t){return new Sa(i,{minFilter:Di,generateMipmaps:e,type:ni,colorSpace:Gr,depthBuffer:t})}function Ea(i,e,t){return new fi({name:i,uniforms:e,vertexShader:mt.cube_vert,fragmentShader:t,side:rn,blending:vs,depthTest:!1,depthWrite:!1})}function ux(){return Ea("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hu}u

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
	`)}function fx(){return Ea("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:zu}},`

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
	`)}function px(){return Ea("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lx}
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
	`)}function yu(){return Ea("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function bu(){return Ea("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===zo||p===Go)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let y=new Sa(m.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,m=p===zo||p===Go,y=p===Ss||p===pr;if(m||y){let g=t.get(f),x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new Fi(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return m&&v&&v.height>0||y&&v&&l(v)?(n===null&&(n=new Fi(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",d),g.texture):null}}}return f}function o(f,p){return p===zo?f.mapping=Ss:p===Go&&(f.mapping=pr),f}function l(f){let p=0,m=6;for(let y=0;y<m;y++)f[y]!==void 0&&p++;return p===m}function c(f){let p=f.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(f){let p=f.target;p.removeEventListener("dispose",d);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function gx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ur("WebGLRenderer: "+n+" extension not supported."),s}}}function xx(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);let y=r.get(m);y&&(e.remove(y),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function d(m){let y=m.attributes;for(let g in y)e.update(y[g],i.ARRAY_BUFFER)}function u(m){let y=m.index,g=m.attributes.position,x=0;if(g===void 0)return;let v=y!==null?y.array.length:g.array.length/3-1,C=g.count>=65535?Yr:qr,E=new C(Math.ceil(v/3)*6,1),R=E.array;if(y!==null){let _=y.array;x=y.version;for(let w=0,z=0;w<v;w+=3){let I=_[w+0],L=_[w+1],q=_[w+2];R[z++]=I,R[z++]=L,R[z++]=L,R[z++]=q,R[z++]=q,R[z++]=I}}else{x=g.version;for(let _=0,w=0;_<v;_+=3){let z=_+0,I=_+1,L=_+2;R[w++]=z,R[w++]=I,R[w++]=I,R[w++]=L,R[w++]=L,R[w++]=z}}E.version=x;let S=r.get(m);S&&e.remove(S),r.set(m,E)}function f(m){let y=r.get(m);if(y){let g=m.index;g!==null&&y.version<g.version&&u(m)}else u(m);return r.get(m)}function p(){for(let m in s){let y=s[m].deref();y!==void 0&&l(y)}}return{get:c,update:d,getWireframeAttribute:f,dispose:p}}function _x(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*a,p),t.update(f,n,p))}function d(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let y=0;for(let g=0;g<p;g++)y+=f[g];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function yx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bx(i,e,t){let n=new WeakMap,s=new Bt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==u){let z=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",z)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],C=0;p===!0&&(C=1),m===!0&&(C=2),y===!0&&(C=3);let E=o.attributes.position.count*C,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let S=new Float32Array(E*R*4*u),_=new Xr(S,E,R,u);_.type=Wn,_.needsUpdate=!0;let w=C*4;for(let I=0;I<u;I++){let L=g[I],q=x[I],$=v[I],U=E*R*4*I;for(let X=0;X<L.count;X++){let N=X*w;p===!0&&(s.fromBufferAttribute(L,X),S[U+N+0]=s.x,S[U+N+1]=s.y,S[U+N+2]=s.z,S[U+N+3]=0),m===!0&&(s.fromBufferAttribute(q,X),S[U+N+4]=s.x,S[U+N+5]=s.y,S[U+N+6]=s.z,S[U+N+7]=0),y===!0&&(s.fromBufferAttribute($,X),S[U+N+8]=s.x,S[U+N+9]=s.y,S[U+N+10]=s.z,S[U+N+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new be(E,R)},n.set(o,f),o.addEventListener("dispose",z)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vx(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return f}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var Mx={[kc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[ei]:"NEUTRAL_TONE_MAPPING",[zc]:"CUSTOM_TONE_MAPPING"};function Sx(i,e,t,n,s,r){let a=new Un(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new Yt;d.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ut([0,2,0,0,2,0],2));let u=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ie(d,u),p=new ys(-1,1,1,-1,0,1),m=null,y=null,g=!1,x,v=null,C=[],E=!1;this.setSize=function(R,S){a.setSize(R,S),o!==null&&o.setSize(R,S),l!==null&&l.setSize(R,S);for(let _=0;_<C.length;_++){let w=C[_];w.setSize&&w.setSize(R,S)}},this.setEffects=function(R){C=R,E=C.length>0&&C[0].isRenderPass===!0;let S=a.width,_=a.height;C.length>0&&o===null&&(o=new Un(S,_,{type:ni,depthBuffer:!1,stencilBuffer:!1}),l=new Un(S,_,{type:ni,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&C.some(z=>z.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new Pi(S,_),r===!0&&(c.format=Li,c.type=Es)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let z=0;z<C.length;z++){let I=C[z];I.setSize&&I.setSize(S,_),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(R,S){if(g||R.toneMapping===mi&&C.length===0)return!1;if(v=S,S!==null){let _=S.width,w=S.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return E===!1&&R.setRenderTarget(a),x=R.toneMapping,R.toneMapping=mi,!0},this.hasRenderPass=function(){return E},this.end=function(R,S){R.toneMapping=x,g=!0;let _=a,w=o;for(let z=0;z<C.length;z++){let I=C[z];I.enabled!==!1&&(I.render(R,w,_,S),I.needsSwap!==!1&&(_=w,w=w===o?l:o))}if(m!==R.outputColorSpace||y!==R.toneMapping){m=R.outputColorSpace,y=R.toneMapping,u.defines={},yt.getTransfer(m)===At&&(u.defines.SRGB_TRANSFER="");let z=Mx[y];z&&(u.defines[z]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(v),R.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),u.dispose()}}var Gu=new wn,Vu=new Pi(1,1),Wu=new Jr(1),Xu=new Xr,qu=new _o,Yu=new Kr,vu=[],Mu=[],Su=new Float32Array(16),Eu=new Float32Array(9),wu=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vu[s];if(r===void 0&&(r=new Float32Array(s),vu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cl(i,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function Tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function Ax(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function Rx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;wu.set(n),i.uniformMatrix2fv(this.addr,!1,wu),on(t,n)}}function Cx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Eu.set(n),i.uniformMatrix3fv(this.addr,!1,Eu),on(t,n)}}function Px(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Su.set(n),i.uniformMatrix4fv(this.addr,!1,Su),on(t,n)}}function Ix(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function Fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function Ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function Pl(i){return i.version===0&&(i.compareFunction=Jc,i.needsUpdate=!0),i}function Bx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Pl(Vu):r=Gu,t.setTexture2D(e||r,s)}function Hx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qu,s)}function zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Pl(Wu):r=Yu,t.setTextureCube(e||r,s)}function Gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xu,s)}function Vx(i){switch(i){case 5126:return Ex;case 35664:return wx;case 35665:return Tx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Dx;case 35668:case 35672:return Lx;case 35669:case 35673:return Nx;case 5125:return Fx;case 36294:return Ux;case 36295:return kx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Hx;case 35680:case 36300:case 36308:case 36293:return zx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Wx(i,e){i.uniform1fv(this.addr,e)}function Xx(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function qx(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Yx(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function Zx(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jx(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $x(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kx(i,e){i.uniform1iv(this.addr,e)}function Jx(i,e){i.uniform2iv(this.addr,e)}function Qx(i,e){i.uniform3iv(this.addr,e)}function e1(i,e){i.uniform4iv(this.addr,e)}function t1(i,e){i.uniform1uiv(this.addr,e)}function n1(i,e){i.uniform2uiv(this.addr,e)}function i1(i,e){i.uniform3uiv(this.addr,e)}function s1(i,e){i.uniform4uiv(this.addr,e)}function r1(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Pl(Vu):a=Gu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function a1(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qu,r[a])}function o1(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Pl(Wu):a=Yu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function l1(i,e,t){let n=this.cache,s=e.length,r=Cl(t,s);an(n,r)||(i.uniform1iv(this.addr,r),on(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xu,r[a])}function c1(i){switch(i){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Zx;case 35675:return jx;case 35676:return $x;case 5124:case 35670:return Kx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return l1}}var uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vx(t.type)}},fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c1(t.type)}},ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},hh=/(\w+)(\])?(\[|\.)?/g;function Tu(i,e){i.seq.push(e),i.map[e.id]=e}function h1(i,e,t){let n=i.name,s=n.length;for(hh.lastIndex=0;;){let r=hh.exec(n),a=hh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tu(t,c===void 0?new uh(o,i,e):new fh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ph(o),Tu(t,u)),t=u}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);h1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Au(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var d1=37297,u1=0;function f1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ru=new ct;function p1(i){yt._getMatrix(Ru,yt.workingColorSpace,i);let e=`mat3( ${Ru.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+f1(i.getShaderSource(e),o)}else return r}function m1(i,e){let t=p1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var g1={[kc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[Hc]:"ACESFilmic",[Gc]:"AgX",[ei]:"Neutral",[zc]:"Custom"};function x1(i,e){let t=g1[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Rl=new Z;function _1(){yt.getLuminanceCoefficients(Rl);let i=Rl.x.toFixed(4),e=Rl.y.toFixed(4),t=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function b1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function v1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ma(i){return i!==""}function Pu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Iu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(M1,S1)}function S1(i,e){let t=mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return mh(t)}var E1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(i){return i.replace(E1,w1)}function w1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var T1={[bs]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function A1(i){return T1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var R1={[pr]:"ENVMAP_MODE_REFRACTION"};function C1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":R1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P1={[Ho]:"ENVMAP_BLENDING_MULTIPLY",[Xd]:"ENVMAP_BLENDING_MIX",[qd]:"ENVMAP_BLENDING_ADD"};function I1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P1[i.combine]||"ENVMAP_BLENDING_NONE"}function D1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=A1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=C1(t),u=I1(t),f=y1(t),p=b1(r),m=s.createProgram(),y,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ma).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ma).join(`
`),g.length>0&&(g+=`
`)):(y=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),g=[Lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?mt.tonemapping_pars_fragment:"",t.toneMapping!==mi?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,m1("linearToOutputTexel",t.outputColorSpace),_1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),a=mh(a),a=Pu(a,t),a=Iu(a,t),o=mh(o),o=Pu(o,t),o=Iu(o,t),a=Du(a),o=Du(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=x+y+a,C=x+g+o,E=Au(s,s.VERTEX_SHADER,v),R=Au(s,s.FRAGMENT_SHADER,C);s.attachShader(m,E),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function S(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(m)||"",q=s.getShaderInfoLog(E)||"",$=s.getShaderInfoLog(R)||"",U=L.trim(),X=q.trim(),N=$.trim(),j=!0,O=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,R);else{let F=Cu(s,E,"vertex"),H=Cu(s,R,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+F+`
`+H)}else U!==""?st("WebGLProgram: Program Info Log:",U):(X===""||N==="")&&(O=!1);O&&(I.diagnostics={runnable:j,programLog:U,vertexShader:{log:X,prefix:y},fragmentShader:{log:N,prefix:g}})}s.deleteShader(E),s.deleteShader(R),_=new gr(s,m),w=v1(s,m)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,d1)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=u1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=R,this}var L1=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=L1++,this.code=e,this.usedTimes=0}};function N1(i){return i===ns||i===_a||i===ya}function F1(i,e,t,n,s,r){let a=new tr,o=new gh,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,w,z,I,L,q){let $=I.fog,U=L.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||X,N),O=f[_.type],F=n.precision;_.precision!==null&&(F=n.getMaxPrecision(_.precision),F!==_.precision&&st("WebGLProgram.getParameters:",_.precision,"not supported, using",F,"instead."));let H=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,K=H!==void 0?H.length:0,xe=0;U.morphAttributes.position!==void 0&&(xe=1),U.morphAttributes.normal!==void 0&&(xe=2),U.morphAttributes.color!==void 0&&(xe=3);let V,B,te,ge;if(O){let Ue=xi[O];V=Ue.vertexShader,B=Ue.fragmentShader}else{V=_.vertexShader,B=_.fragmentShader;let Ue=o.getVertexShaderStage(_),bt=o.getFragmentShaderStage(_);o.update(_,Ue,bt),te=Ue.id,ge=bt.id}let ye=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),He=L.isInstancedMesh===!0,it=L.isBatchedMesh===!0,qe=!!_.map,Xe=!!_.matcap,et=!!j,fe=et&&j.isPMREMTexture===!0,ve=!!_.aoMap,Re=!!_.lightMap,ke=!!_.bumpMap&&_.wireframe===!1,Ne=!!_.normalMap,Ve=!!_.displacementMap,Fe=!!_.emissiveMap,tt=!!_.metalnessMap,lt=!!_.roughnessMap,gt=_.anisotropy>0,Y=_.clearcoat>0,Tt=_.diffuseRoughness>0,dt=_.dispersion>0,xt=_.retroreflectivity>0,Le=_.iridescence>0,Dt=_.sheen>0,Qe=_.transmission>0,J=gt&&!!_.anisotropyMap,A=Y&&!!_.clearcoatMap,M=Y&&!!_.clearcoatNormalMap,G=Y&&!!_.clearcoatRoughnessMap,me=Tt&&!!_.diffuseRoughnessMap,re=Le&&!!_.iridescenceMap,_e=Le&&!!_.iridescenceThicknessMap,ue=Dt&&!!_.sheenColorMap,ne=Dt&&!!_.sheenRoughnessMap,ae=!!_.specularMap,Te=!!_.specularColorMap,k=!!_.specularIntensityMap,he=Qe&&!!_.transmissionMap,le=Qe&&!!_.thicknessMap,we=!!_.gradientMap,Ae=!!_.alphaMap,Se=_.alphaTest>0,Ce=!!_.alphaHash,Je=!!_.extensions,Me=mi;_.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Me=i.toneMapping);let Ye=fe?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,rt={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:V,fragmentShader:B,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:F,batching:it,batchingColor:it&&L._colorsTexture!==null,instancing:He,instancingColor:He&&L.instanceColor!==null,instancingMorph:He&&L.morphTexture!==null,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qe,matcap:Xe,envMap:et,envMapMode:et&&j.mapping,envMapPMREM:fe,envMapMaxLod:fe?Ye.length-1:null,envMapSize:fe?Ye[0].width:null,aoMap:ve,lightMap:Re,bumpMap:ke,normalMap:Ne,displacementMap:Ve,emissiveMap:Fe,normalMapObjectSpace:Ne&&_.normalMapType===jd,normalMapTangentSpace:Ne&&_.normalMapType===ba,packedNormalMap:Ne&&_.normalMapType===ba&&N1(_.normalMap.format),metalnessMap:tt,roughnessMap:lt,anisotropy:gt,anisotropyMap:J,clearcoat:Y,clearcoatMap:A,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:Tt,diffuseRoughnessMap:me,dispersion:dt,retroreflection:xt,iridescence:Le,iridescenceMap:re,iridescenceThicknessMap:_e,sheen:Dt,sheenColorMap:ue,sheenRoughnessMap:ne,specularMap:ae,specularColorMap:Te,specularIntensityMap:k,transmission:Qe,transmissionMap:he,thicknessMap:le,gradientMap:we,opaque:_.transparent===!1&&_.blending===fr&&_.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Se,alphaHash:Ce,combine:_.combine,mapUv:qe&&p(_.map.channel),aoMapUv:ve&&p(_.aoMap.channel),lightMapUv:Re&&p(_.lightMap.channel),bumpMapUv:ke&&p(_.bumpMap.channel),normalMapUv:Ne&&p(_.normalMap.channel),displacementMapUv:Ve&&p(_.displacementMap.channel),emissiveMapUv:Fe&&p(_.emissiveMap.channel),metalnessMapUv:tt&&p(_.metalnessMap.channel),roughnessMapUv:lt&&p(_.roughnessMap.channel),anisotropyMapUv:J&&p(_.anisotropyMap.channel),clearcoatMapUv:A&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:re&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ne&&p(_.sheenRoughnessMap.channel),specularMapUv:ae&&p(_.specularMap.channel),specularColorMapUv:Te&&p(_.specularColorMap.channel),specularIntensityMapUv:k&&p(_.specularIntensityMap.channel),transmissionMapUv:he&&p(_.transmissionMap.channel),thicknessMapUv:le&&p(_.thicknessMap.channel),alphaMapUv:Ae&&p(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ne||gt),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(qe||Ae),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&Ne===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ee,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:xe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:q.filter(Ue=>Ue.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:qe&&_.map.isVideoTexture===!0&&yt.getTransfer(_.map.colorSpace)===At,decodeVideoTextureEmissive:Fe&&_.emissiveMap.isVideoTexture===!0&&yt.getTransfer(_.emissiveMap.colorSpace)===At,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&_.extensions.multiDraw===!0||it)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function y(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let z in _.defines)w.push(z),w.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(g(w,_),x(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function g(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function x(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let w=f[_.type],z;if(w){let I=xi[w];z=pu.clone(I.uniforms)}else z=_.uniforms;return z}function C(_,w){let z=d.get(w);return z!==void 0?++z.usedTimes:(z=new D1(i,w,_,s),c.push(z),d.set(w,z)),z}function E(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function S(){o.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:v,acquireProgram:C,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:S}}function U1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function k1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Nu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Fu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,y,g,x){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:m,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:x},i[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=m,v.materialVariant=a(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=g,v.group=x),e++,v}function l(f,p,m,y,g,x,v){v.reversedDepth===!0&&(g=-g);let C=o(f,p,m,y,g,x);m.transmission>0?n.push(C):m.transparent===!0?s.push(C):t.push(C)}function c(f,p,m,y,g,x){let v=o(f,p,m,y,g,x);m.transmission>0?n.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function d(f,p){t.length>1&&t.sort(f||k1),n.length>1&&n.sort(p||Nu),s.length>1&&s.sort(p||Nu)}function u(){for(let f=e,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function O1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Fu,i.set(n,[a])):s>=r.length?(a=new Fu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function B1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new nt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function H1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var z1=0;function G1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V1(i){let e=new B1,t=H1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let s=new Z,r=new Rt,a=new Rt;function o(c){let d=0,u=0,f=0;for(let q=0;q<9;q++)n.probe[q].set(0,0,0);let p=0,m=0,y=0,g=0,x=0,v=0,C=0,E=0,R=0,S=0,_=0,w=0,z=0,I=0;c.sort(G1);for(let q=0,$=c.length;q<$;q++){let U=c[q],X=U.color,N=U.intensity,j=U.distance,O=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ns?O=U.shadow.map.texture:O=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)d+=X.r*N,u+=X.g*N,f+=X.b*N;else if(U.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(U.sh.coefficients[F],N);I++}else if(U.isSunLight){let F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let H=U.shadow,K=t.get(U);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[m]=K,n.sunShadowMap[m]=O;let xe=H.getViewportCount();for(let V=0;V<xe;V++)n.sunShadowMatrix[y+V]=H.getMatrix(V),n.sunShadowCascade[y+V]=H._cascadeData[V];y+=xe,m++}n.sun[p]=F,p++}else if(U.isDirectionalLight){let F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let H=U.shadow,K=t.get(U);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=O,n.directionalShadowMatrix[g]=U.shadow.matrix,R++}n.directional[g]=F,g++}else if(U.isSpotLight){let F=e.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(X).multiplyScalar(N),F.distance=j,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,n.spot[v]=F;let H=U.shadow;if(U.map&&(n.spotLightMap[w]=U.map,w++,H.updateMatrices(U),U.castShadow&&z++),n.spotLightMatrix[v]=H.matrix,U.castShadow){let K=t.get(U);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=O,_++}v++}else if(U.isRectAreaLight){let F=e.get(U);F.color.copy(X).multiplyScalar(N),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),n.rectArea[C]=F,C++}else if(U.isPointLight){let F=e.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){let H=U.shadow,K=t.get(U);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=O,n.pointShadowMatrix[x]=U.shadow.matrix,S++}n.point[x]=F,x++}else if(U.isHemisphereLight){let F=e.get(U);F.skyColor.copy(U.color).multiplyScalar(N),F.groundColor.copy(U.groundColor).multiplyScalar(N),n.hemi[E]=F,E++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.sunLength!==p||L.directionalLength!==g||L.pointLength!==x||L.spotLength!==v||L.rectAreaLength!==C||L.hemiLength!==E||L.numSunShadows!==m||L.numDirectionalShadows!==R||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==w||L.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=g,n.spot.length=v,n.rectArea.length=C,n.point.length=x,n.hemi.length=E,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-z,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=I,L.sunLength=p,L.directionalLength=g,L.pointLength=x,L.spotLength=v,L.rectAreaLength=C,L.hemiLength=E,L.numSunShadows=m,L.numDirectionalShadows=R,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=w,L.numLightProbes=I,n.version=z1++)}function l(c,d){let u=0,f=0,p=0,m=0,y=0,g=0,x=d.matrixWorldInverse;for(let v=0,C=c.length;v<C;v++){let E=c[v];if(E.isSunLight){let R=n.sun[u];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(x),u++}else if(E.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),f++}else if(E.isSpotLight){let R=n.spot[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),m++}else if(E.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),a.identity(),r.copy(E.matrixWorld),r.premultiply(x),a.extractRotation(r),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(x),p++}else if(E.isHemisphereLight){let R=n.hemi[g];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(x),g++}}}return{setup:o,setupView:l,state:n}}function Uu(i){let e=new V1(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Uu(i),e.set(s,[o])):r>=a.length?(o=new Uu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var X1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q1=`uniform sampler2D shadow_pass;
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
}`,Y1=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Z1=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],ku=new Rt,va=new Z,dh=new Z;function j1(i,e,t){let n=new ji,s=new be,r=new be,a=new Bt,o=new To,l=new Ao,c={},d=t.maxTextureSize,u={[pi]:rn,[rn]:pi,[en]:en},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:X1,fragmentShader:q1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Yt;m.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ie(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let x=this.type;this.render=function(S,_,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Bo&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bs);let z=i.getRenderTarget(),I=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),q=i.state;q.setBlending(vs),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let $=x!==this.type;$&&_.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(X=>X.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,X=S.length;U<X;U++){let N=S[U],j=N.shadow;if(j===void 0){st("WebGLShadowMap:",N,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let O=j.getFrameExtents();s.multiply(O),r.copy(j.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/O.x),s.x=r.x*O.x,j.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/O.y),s.y=r.y*O.y,j.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=F,j.map===null||$===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===ur){if(N.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Un(s.x,s.y,{format:ns,type:ni,minFilter:En,magFilter:En,generateMipmaps:!1}),j.map.texture.name=N.name+".shadowMap",j.map.depthTexture=new Pi(s.x,s.y,Wn),j.map.depthTexture.name=N.name+".shadowMapDepth",j.map.depthTexture.format=Ri,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=dn,j.map.depthTexture.magFilter=dn}else N.isPointLight?(j.map=new Sa(s.x),j.map.depthTexture=new Jr(s.x,ti)):(j.map=new Un(s.x,s.y),j.map.depthTexture=new Pi(s.x,s.y,ti)),j.map.depthTexture.name=N.name+".shadowMap",j.map.depthTexture.format=Ri,this.type===bs?(j.map.depthTexture.compareFunction=F?Kc:$c,j.map.depthTexture.minFilter=En,j.map.depthTexture.magFilter=En):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=dn,j.map.depthTexture.magFilter=dn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let H=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();N.isPointLight!==!0&&j.updateMatrices(N,w);let K=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:w.layers;for(let xe=0;xe<H;xe++){let V=j.getCamera(xe);if(N.isPointLight){let B=j.camera,te=j.matrix,ge=N.distance||B.far;ge!==B.far&&(B.far=ge,B.updateProjectionMatrix()),va.setFromMatrixPosition(N.matrixWorld),B.position.copy(va),dh.copy(B.position),dh.add(Y1[xe]),B.up.copy(Z1[xe]),B.lookAt(dh),B.updateMatrixWorld(),te.makeTranslation(-va.x,-va.y,-va.z),ku.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j._frustum.setFromProjectionMatrix(ku,B.coordinateSystem,B.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(j.map),i.clear());let B=j.getViewport(xe);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),q.viewport(a)}n=j.getFrustum(xe),E(_,w,V,N,K,this.type)}j.isPointLightShadow!==!0&&this.type===ur&&v(j,w),j.needsUpdate=!1}x=this.type,g.needsUpdate=!1,i.setRenderTarget(z,I,L)};function v(S,_){let w=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new Un(s.x,s.y,{format:ns,type:ni}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,w,f,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,w,p,y,null)}function C(S,_,w,z){let I=null,L=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)I=L;else if(I=w.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let q=I.uuid,$=_.uuid,U=c[q];U===void 0&&(U={},c[q]=U);let X=U[$];X===void 0&&(X=I.clone(),U[$]=X,_.addEventListener("dispose",R)),I=X}if(I.visible=_.visible,I.wireframe=_.wireframe,z===ur?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let q=i.properties.get(I);q.light=w}return I}function E(S,_,w,z,I,L){if(S.visible===!1)return;if(S.layers.test(I)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&L===ur)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let U=e.update(S),X=S.material;if(Array.isArray(X)){let N=U.groups;for(let j=0,O=N.length;j<O;j++){let F=N[j],H=X[F.materialIndex];if(H&&H.visible){let K=C(S,H,z,L);S.onBeforeShadow(i,S,_,w,U,K,F),i.renderBufferDirect(w,null,U,K,S,F),S.onAfterShadow(i,S,_,w,U,K,F)}}}else if(X.visible){let N=C(S,X,z,L);S.onBeforeShadow(i,S,_,w,U,N,null),i.renderBufferDirect(w,null,U,N,S,null),S.onAfterShadow(i,S,_,w,U,N,null)}}let $=S.children;for(let U=0,X=$.length;U<X;U++)E($[U],_,w,z,I,L)}function R(S){S.target.removeEventListener("dispose",R);for(let w in c){let z=c[w],I=S.target.uuid;I in z&&(z[I].dispose(),delete z[I])}}}function $1(i,e){function t(){let k=!1,he=new Bt,le=null,we=new Bt(0,0,0,0);return{setMask:function(Ae){le!==Ae&&!k&&(i.colorMask(Ae,Ae,Ae,Ae),le=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,Se,Ce,Je,Me){Me===!0&&(Ae*=Je,Se*=Je,Ce*=Je),he.set(Ae,Se,Ce,Je),we.equals(he)===!1&&(i.clearColor(Ae,Se,Ce,Je),we.copy(he))},reset:function(){k=!1,le=null,we.set(-1,0,0,0)}}}function n(){let k=!1,he=!1,le=null,we=null,Ae=null;return{setReversed:function(Se){if(he!==Se){let Ce=e.get("EXT_clip_control");Se?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),he=Se;let Je=Ae;Ae=null,this.setClear(Je)}},getReversed:function(){return he},setTest:function(Se){Se?Ee(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(Se){le!==Se&&!k&&(i.depthMask(Se),le=Se)},setFunc:function(Se){if(he&&(Se=au[Se]),we!==Se){switch(Se){case ao:i.depthFunc(i.NEVER);break;case oo:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Ae!==Se&&(Ae=Se,he&&(Se=1-Se),i.clearDepth(Se))},reset:function(){k=!1,le=null,we=null,Ae=null,he=!1}}}function s(){let k=!1,he=null,le=null,we=null,Ae=null,Se=null,Ce=null,Je=null,Me=null;return{setTest:function(Ye){k||(Ye?Ee(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(Ye){he!==Ye&&!k&&(i.stencilMask(Ye),he=Ye)},setFunc:function(Ye,rt,Ue){(le!==Ye||we!==rt||Ae!==Ue)&&(i.stencilFunc(Ye,rt,Ue),le=Ye,we=rt,Ae=Ue)},setOp:function(Ye,rt,Ue){(Se!==Ye||Ce!==rt||Je!==Ue)&&(i.stencilOp(Ye,rt,Ue),Se=Ye,Ce=rt,Je=Ue)},setLocked:function(Ye){k=Ye},setClear:function(Ye){Me!==Ye&&(i.clearStencil(Ye),Me=Ye)},reset:function(){k=!1,he=null,le=null,we=null,Ae=null,Se=null,Ce=null,Je=null,Me=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,d={},u={},f={},p=new WeakMap,m=[],y=null,g=!1,x=null,v=null,C=null,E=null,R=null,S=null,_=null,w=new nt(0,0,0),z=0,I=!1,L=null,q=null,$=null,U=null,X=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,O=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),j=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),j=O>=2);let H=null,K={},xe=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),B=new Bt().fromArray(xe),te=new Bt().fromArray(V);function ge(k,he,le,we){let Ae=new Uint8Array(4),Se=i.createTexture();i.bindTexture(k,Se),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<le;Ce++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(he+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Se}let ye={};ye[i.TEXTURE_2D]=ge(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(i.DEPTH_TEST),a.setFunc($s),ke(!1),Ne(Ic),Ee(i.CULL_FACE),ve(vs);function Ee(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function He(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function it(k,he){return f[k]!==he?(i.bindFramebuffer(k,he),f[k]=he,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function qe(k,he){let le=m,we=!1;if(k){le=p.get(he),le===void 0&&(le=[],p.set(he,le));let Ae=k.textures;if(le.length!==Ae.length||le[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Ce=Ae.length;Se<Ce;Se++)le[Se]=i.COLOR_ATTACHMENT0+Se;le.length=Ae.length,we=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,we=!0);we&&i.drawBuffers(le)}function Xe(k){return y!==k?(i.useProgram(k),y=k,!0):!1}let et={[Ms]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};et[Pd]=i.MIN,et[Id]=i.MAX;let fe={[Dd]:i.ZERO,[Ld]:i.ONE,[Nd]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Ud]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[kd]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function ve(k,he,le,we,Ae,Se,Ce,Je,Me,Ye){if(k===vs){g===!0&&(He(i.BLEND),g=!1);return}if(g===!1&&(Ee(i.BLEND),g=!0),k!==Ad){if(k!==x||Ye!==I){if((v!==Ms||R!==Ms)&&(i.blendEquation(i.FUNC_ADD),v=Ms,R=Ms),Ye)switch(k){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",k);break}else switch(k){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",k);break}C=null,E=null,S=null,_=null,w.set(0,0,0),z=0,x=k,I=Ye}return}Ae=Ae||he,Se=Se||le,Ce=Ce||we,(he!==v||Ae!==R)&&(i.blendEquationSeparate(et[he],et[Ae]),v=he,R=Ae),(le!==C||we!==E||Se!==S||Ce!==_)&&(i.blendFuncSeparate(fe[le],fe[we],fe[Se],fe[Ce]),C=le,E=we,S=Se,_=Ce),(Je.equals(w)===!1||Me!==z)&&(i.blendColor(Je.r,Je.g,Je.b,Me),w.copy(Je),z=Me),x=k,I=!1}function Re(k,he){k.side===en?He(i.CULL_FACE):Ee(i.CULL_FACE);let le=k.side===rn;he&&(le=!le),ke(le),k.blending===fr&&k.transparent===!1?ve(vs):ve(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let we=k.stencilWrite;o.setTest(we),we&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(k){L!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),L=k)}function Ne(k){k!==wd?(Ee(i.CULL_FACE),k!==q&&(k===Ic?i.cullFace(i.BACK):k===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),q=k}function Ve(k){k!==$&&(j&&i.lineWidth(k),$=k)}function Fe(k,he,le){k?(Ee(i.POLYGON_OFFSET_FILL),(U!==he||X!==le)&&(U=he,X=le,a.getReversed()&&(he=-he,le=-le),i.polygonOffset(he,le))):He(i.POLYGON_OFFSET_FILL)}function tt(k){k?Ee(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function lt(k){k===void 0&&(k=i.TEXTURE0+N-1),H!==k&&(i.activeTexture(k),H=k)}function gt(k,he,le){le===void 0&&(H===null?le=i.TEXTURE0+N-1:le=H);let we=K[le];we===void 0&&(we={type:void 0,texture:void 0},K[le]=we),(we.type!==k||we.texture!==he)&&(H!==le&&(i.activeTexture(le),H=le),i.bindTexture(k,he||ye[k]),we.type=k,we.texture=he)}function Y(){let k=K[H];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Tt(){try{i.compressedTexImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function dt(){try{i.compressedTexImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function xt(){try{i.texSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Le(){try{i.texSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function Dt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function Qe(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function J(){try{i.texStorage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function A(){try{i.texStorage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function M(){try{i.texImage2D(...arguments)}catch(k){ot("WebGLState:",k)}}function G(){try{i.texImage3D(...arguments)}catch(k){ot("WebGLState:",k)}}function me(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function re(k,he){u[k]!==he&&(i.pixelStorei(k,he),u[k]=he)}function _e(k){B.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),B.copy(k))}function ue(k){te.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function ne(k,he){let le=c.get(he);le===void 0&&(le=new WeakMap,c.set(he,le));let we=le.get(k);we===void 0&&(we=i.getUniformBlockIndex(he,k.name),i.uniformBlockBinding(he,we,we),le.set(k,we))}function ae(k,he,le){let Ae=c.get(he).get(k);l[Ae]!==le&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ae,le),l[Ae]=le)}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},H=null,K={},f={},l={},p=new WeakMap,m=[],y=null,g=!1,x=null,v=null,C=null,E=null,R=null,S=null,_=null,w=new nt(0,0,0),z=0,I=!1,L=null,q=null,$=null,U=null,X=null,B.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ee,disable:He,bindFramebuffer:it,drawBuffers:qe,useProgram:Xe,setBlending:ve,setMaterial:Re,setFlipSided:ke,setCullFace:Ne,setLineWidth:Ve,setPolygonOffset:Fe,setScissorTest:tt,activeTexture:lt,bindTexture:gt,unbindTexture:Y,compressedTexImage2D:Tt,compressedTexImage3D:dt,texImage2D:M,texImage3D:G,pixelStorei:re,getParameter:me,updateUBOMapping:ne,uniformBlockBinding:ae,texStorage2D:J,texStorage3D:A,texSubImage2D:xt,texSubImage3D:Le,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Qe,scissor:_e,viewport:ue,reset:Te}}function K1(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,d=new WeakMap,u=new Set,f,p=new WeakMap,m=new Set,y=new FinalizationRegistry(A=>m.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,M){return g?new OffscreenCanvas(A,M):Wr("canvas")}function v(A,M,G){let me=1,re=J(A);if((re.width>G||re.height>G)&&(me=G/Math.max(re.width,re.height)),me<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let _e=Math.floor(me*re.width),ue=Math.floor(me*re.height);f===void 0&&(f=x(_e,ue));let ne=M?x(_e,ue):f;return ne.width=_e,ne.height=ue,ne.getContext("2d").drawImage(A,0,0,_e,ue),st("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+_e+"x"+ue+")."),ne}else return"data"in A&&st("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),A;return A}function C(A){return A.generateMipmaps}function E(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,M,G,me,re,_e=!1){if(A!==null){if(i[A]!==void 0)return i[A];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;me&&(ue=e.get("EXT_texture_norm16"),ue||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=M;if(M===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8),G===i.UNSIGNED_SHORT&&ue&&(ne=ue.R16_EXT),G===i.SHORT&&ue&&(ne=ue.R16_SNORM_EXT)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),M===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8),G===i.UNSIGNED_SHORT&&ue&&(ne=ue.RG16_EXT),G===i.SHORT&&ue&&(ne=ue.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RG8UI),G===i.UNSIGNED_SHORT&&(ne=i.RG16UI),G===i.UNSIGNED_INT&&(ne=i.RG32UI),G===i.BYTE&&(ne=i.RG8I),G===i.SHORT&&(ne=i.RG16I),G===i.INT&&(ne=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),G===i.UNSIGNED_INT&&(ne=i.RGB32UI),G===i.BYTE&&(ne=i.RGB8I),G===i.SHORT&&(ne=i.RGB16I),G===i.INT&&(ne=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),G===i.UNSIGNED_INT&&(ne=i.RGBA32UI),G===i.BYTE&&(ne=i.RGBA8I),G===i.SHORT&&(ne=i.RGBA16I),G===i.INT&&(ne=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_SHORT&&ue&&(ne=ue.RGB16_EXT),G===i.SHORT&&ue&&(ne=ue.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),M===i.RGBA){let ae=_e?Vr:yt.getTransfer(re);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=ae===At?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ue&&(ne=ue.RGBA16_EXT),G===i.SHORT&&ue&&(ne=ue.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(A,M){let G;return A?M===null||M===ti||M===Es?G=i.DEPTH24_STENCIL8:M===Wn?G=i.DEPTH32F_STENCIL8:M===mr&&(G=i.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ti||M===Es?G=i.DEPTH_COMPONENT24:M===Wn?G=i.DEPTH_COMPONENT32F:M===mr&&(G=i.DEPTH_COMPONENT16),G}function w(A,M){return C(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function z(A){let M=new WeakRef(A);n.get(A).__ref=M,m.add(M),y.register(A,M,M)}function I(A){let M=n.get(A).__ref;M!==void 0&&(m.delete(M),y.unregister(M))}function L(A){$(A.target)}function q(A){U(A.target)}function $(A){A.removeEventListener("dispose",L),I(A),N(A),A.isVideoTexture&&d.delete(A),A.isHTMLTexture&&u.delete(A)}function U(A){A.removeEventListener("dispose",q),I(A),O(A)}function X(){for(let A of m){let M=A.deref();M!==void 0&&(M.isRenderTarget===!0?U(M):$(M))}m.clear(),u.clear()}function N(A){let M=n.get(A);if(M.__webglInit===void 0)return;let G=A.source,me=p.get(G);if(me){let re=me[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&j(A),Object.keys(me).length===0&&p.delete(G)}n.remove(A)}function j(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let G=A.source,me=p.get(G);delete me[M.__cacheKey],a.memory.textures--}function O(A){let M=n.get(A);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=A.depthTexture;if(G&&G.renderTarget===A&&$(G),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(M.__webglFramebuffer[re]))for(let _e=0;_e<M.__webglFramebuffer[re].length;_e++)i.deleteFramebuffer(M.__webglFramebuffer[re][_e]);else i.deleteFramebuffer(M.__webglFramebuffer[re]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[re])}else{if(Array.isArray(M.__webglFramebuffer))for(let re=0;re<M.__webglFramebuffer.length;re++)i.deleteFramebuffer(M.__webglFramebuffer[re]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let re=0;re<M.__webglColorRenderbuffer.length;re++)M.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[re]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let me=A.textures;for(let re=0,_e=me.length;re<_e;re++){let ue=n.get(me[re]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(me[re])}n.remove(A)}let F=0;function H(){F=0}function K(){return F}function xe(A){F=A}function V(){let A=F;return A>=s.maxTextures&&st("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function B(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.mipmapsAutoUpdate),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function te(A,M){let G=n.get(A);if(A.isVideoTexture&&Dt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){let me=A.image;if(me===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(G,A,M);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function ge(A,M){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Re(G,A,M);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function ye(A,M){let G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){Re(G,A,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function Ee(A,M){let G=n.get(A);if(A.version>0&&G.__version!==A.version){ke(G,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}let He={[Yi]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},it={[dn]:i.NEAREST,[Yd]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},qe={[Kd]:i.NEVER,[Jc]:i.ALWAYS,[Jd]:i.LESS,[$c]:i.LEQUAL,[Qd]:i.EQUAL,[Kc]:i.GEQUAL,[eu]:i.GREATER,[tu]:i.NOTEQUAL};function Xe(A,M){if(M.type===Wn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===Vo||M.magFilter===fa||M.magFilter===Di||M.minFilter===En||M.minFilter===Vo||M.minFilter===fa||M.minFilter===Di)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,He[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,He[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,He[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,qe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==fa&&M.minFilter!==Di||M.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",L),z(M));let me=M.source,re=p.get(me);re===void 0&&(re={},p.set(me,re));let _e=B(M);if(_e!==A.__cacheKey){re[_e]===void 0&&(re[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),re[_e].usedTimes++;let ue=re[A.__cacheKey];ue!==void 0&&(re[A.__cacheKey].usedTimes--,ue.usedTimes===0&&j(M)),A.__cacheKey=_e,A.__webglTexture=re[_e].texture}return G}function fe(A,M,G){return Math.floor(Math.floor(A/G)/M)}function ve(A,M,G,me){let _e=A.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,me,M.data);else{_e.sort((k,he)=>k.start-he.start);let ue=0;for(let k=1;k<_e.length;k++){let he=_e[ue],le=_e[k],we=he.start+he.count,Ae=fe(le.start,M.width,4),Se=fe(he.start,M.width,4);le.start<=we+1&&Ae===Se&&fe(le.start+le.count-1,M.width,4)===Ae?he.count=Math.max(he.count,le.start+le.count-he.start):(++ue,_e[ue]=le)}_e.length=ue+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let k=0,he=_e.length;k<he;k++){let le=_e[k],we=Math.floor(le.start/4),Ae=Math.ceil(le.count/4),Se=we%M.width,Ce=Math.floor(we/M.width),Je=Ae,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce),t.texSubImage2D(i.TEXTURE_2D,0,Se,Ce,Je,Me,G,me,M.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Re(A,M,G){let me=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(me=i.TEXTURE_3D);let re=et(A,M),_e=M.source;t.bindTexture(me,A.__webglTexture,i.TEXTURE0+G);let ue=n.get(_e);if(_e.version!==ue.__version||re===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let Me=yt.getPrimaries(yt.workingColorSpace),Ye=M.colorSpace===Ni?null:yt.getPrimaries(M.colorSpace),rt=M.colorSpace===Ni||Me===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ae=v(M.image,!1,s.maxTextureSize);ae=Qe(M,ae);let Te=r.convert(M.format,M.colorSpace),k=r.convert(M.type),he=S(M.internalFormat,Te,k,M.normalized,M.colorSpace,M.isVideoTexture);Xe(me,M);let le,we=M.mipmaps,Ae=M.isVideoTexture!==!0,Se=ue.__version===void 0||re===!0,Ce=_e.dataReady,Je=w(M,ae);if(M.isDepthTexture)he=_(M.format===Li,M.type),Se&&(Ae?t.texStorage2D(i.TEXTURE_2D,1,he,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,he,ae.width,ae.height,0,Te,k,null));else if(M.isDataTexture)if(we.length>0){Ae&&Se&&t.texStorage2D(i.TEXTURE_2D,Je,he,we[0].width,we[0].height);for(let Me=0,Ye=we.length;Me<Ye;Me++)le=we[Me],Ae?Ce&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,le.width,le.height,Te,k,le.data):t.texImage2D(i.TEXTURE_2D,Me,he,le.width,le.height,0,Te,k,le.data);M.generateMipmaps=!1}else Ae?(Se&&t.texStorage2D(i.TEXTURE_2D,Je,he,ae.width,ae.height),Ce&&ve(M,ae,Te,k)):t.texImage2D(i.TEXTURE_2D,0,he,ae.width,ae.height,0,Te,k,ae.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ae&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,he,we[0].width,we[0].height,ae.depth);for(let Me=0,Ye=we.length;Me<Ye;Me++)if(le=we[Me],M.format!==ii)if(Te!==null)if(Ae){if(Ce)if(M.layerUpdates.size>0){let rt=ch(le.width,le.height,M.format,M.type);for(let Ue of M.layerUpdates){let bt=le.data.subarray(Ue*rt/le.data.BYTES_PER_ELEMENT,(Ue+1)*rt/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,Ue,le.width,le.height,1,Te,bt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,le.width,le.height,ae.depth,Te,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,he,le.width,le.height,ae.depth,0,le.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,le.width,le.height,ae.depth,Te,k,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,he,le.width,le.height,ae.depth,0,Te,k,le.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ae&&Se&&t.texStorage2D(i.TEXTURE_2D,Je,he,we[0].width,we[0].height);for(let Me=0,Ye=we.length;Me<Ye;Me++)le=we[Me],M.format!==ii?Te!==null?Ae?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,le.width,le.height,Te,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,he,le.width,le.height,0,le.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?Ce&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,le.width,le.height,Te,k,le.data):t.texImage2D(i.TEXTURE_2D,Me,he,le.width,le.height,0,Te,k,le.data)}else if(M.isDataArrayTexture)if(Ae){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Je,he,ae.width,ae.height,ae.depth),Ce)if(M.layerUpdates.size>0){let Me=ch(ae.width,ae.height,M.format,M.type);for(let Ye of M.layerUpdates){let rt=ae.data.subarray(Ye*Me/ae.data.BYTES_PER_ELEMENT,(Ye+1)*Me/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ye,ae.width,ae.height,1,Te,k,rt)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Te,k,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ae.width,ae.height,ae.depth,0,Te,k,ae.data);else if(M.isData3DTexture)Ae?(Se&&t.texStorage3D(i.TEXTURE_3D,Je,he,ae.width,ae.height,ae.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Te,k,ae.data)):t.texImage3D(i.TEXTURE_3D,0,he,ae.width,ae.height,ae.depth,0,Te,k,ae.data);else if(M.isFramebufferTexture){if(Se)if(Ae)t.texStorage2D(i.TEXTURE_2D,Je,he,ae.width,ae.height);else{let Me=ae.width,Ye=ae.height;for(let rt=0;rt<Je;rt++)t.texImage2D(i.TEXTURE_2D,rt,he,Me,Ye,0,Te,k,null),Me>>=1,Ye>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ae.parentNode!==Me){Me.appendChild(ae),u.add(M),Me.onpaint=Ye=>{let rt=Ye.changedElements;for(let Ue of u)rt.includes(Ue.image)&&(Ue.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let rt=i.RGBA,Ue=i.RGBA,bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,rt,Ue,bt,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Ae&&Se){let Me=J(we[0]);t.texStorage2D(i.TEXTURE_2D,Je,he,Me.width,Me.height)}for(let Me=0,Ye=we.length;Me<Ye;Me++)le=we[Me],Ae?Ce&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Te,k,le):t.texImage2D(i.TEXTURE_2D,Me,he,Te,k,le);M.generateMipmaps=!1}else if(Ae){if(Se){let Me=J(ae);t.texStorage2D(i.TEXTURE_2D,Je,he,Me.width,Me.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,k,ae)}else t.texImage2D(i.TEXTURE_2D,0,he,Te,k,ae);C(M)&&M.mipmapsAutoUpdate===!0&&E(me),ue.__version=_e.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ke(A,M,G){if(M.image.length!==6)return;let me=et(A,M),re=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);let _e=n.get(re);if(re.version!==_e.__version||me===!0){t.activeTexture(i.TEXTURE0+G);let ue=yt.getPrimaries(yt.workingColorSpace),ne=M.colorSpace===Ni?null:yt.getPrimaries(M.colorSpace),ae=M.colorSpace===Ni||ue===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Te=M.isCompressedTexture||M.image[0].isCompressedTexture,k=M.image[0]&&M.image[0].isDataTexture,he=[];for(let Ue=0;Ue<6;Ue++)!Te&&!k?he[Ue]=v(M.image[Ue],!0,s.maxCubemapSize):he[Ue]=k?M.image[Ue].image:M.image[Ue],he[Ue]=Qe(M,he[Ue]);let le=he[0],we=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Se=S(M.internalFormat,we,Ae,M.normalized,M.colorSpace),Ce=M.isVideoTexture!==!0,Je=_e.__version===void 0||me===!0,Me=re.dataReady,Ye=w(M,le);Xe(i.TEXTURE_CUBE_MAP,M);let rt;if(M.isDepthTexture){if(Se=_(M.format===Li,M.type),Je)if(Ce)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Se,le.width,le.height);else for(let Ue=0;Ue<6;Ue++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Se,le.width,le.height,0,we,Ae,null)}else if(Te){Ce&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Se,le.width,le.height);for(let Ue=0;Ue<6;Ue++){rt=he[Ue].mipmaps;for(let bt=0;bt<rt.length;bt++){let Ct=rt[bt];M.format!==ii?we!==null?Ce?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,bt,0,0,Ct.width,Ct.height,we,Ct.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,bt,Se,Ct.width,Ct.height,0,Ct.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,bt,0,0,Ct.width,Ct.height,we,Ae,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,bt,Se,Ct.width,Ct.height,0,we,Ae,Ct.data)}}}else{if(rt=M.mipmaps,Ce&&Je){rt.length>0&&Ye++;let Ue=J(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,Se,Ue.width,Ue.height)}for(let Ue=0;Ue<6;Ue++)if(k){Ce?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,he[Ue].width,he[Ue].height,we,Ae,he[Ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Se,he[Ue].width,he[Ue].height,0,we,Ae,he[Ue].data);for(let bt=0;bt<rt.length;bt++){let Mn=rt[bt].image[Ue].image;Ce?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,bt+1,0,0,Mn.width,Mn.height,we,Ae,Mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,bt+1,Se,Mn.width,Mn.height,0,we,Ae,Mn.data)}}else{Ce?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,we,Ae,he[Ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Se,we,Ae,he[Ue]);for(let bt=0;bt<rt.length;bt++){let Ct=rt[bt];Ce?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,bt+1,0,0,we,Ae,Ct.image[Ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,bt+1,Se,we,Ae,Ct.image[Ue])}}}C(M)&&M.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),_e.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ne(A,M,G,me,re,_e){let ue=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),ae=S(G.internalFormat,ue,ne,G.normalized,G.colorSpace),Te=n.get(M),k=n.get(G);if(k.__renderTarget=M,!Te.__hasExternalTextures){let he=Math.max(1,M.width>>_e),le=Math.max(1,M.height>>_e);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,_e,ae,he,le,M.depth,0,ue,ne,null):t.texImage2D(re,_e,ae,he,le,0,ue,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Le(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,re,k.__webglTexture,0,xt(M)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,re,k.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ve(A,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let me=M.depthTexture,re=me&&me.isDepthTexture?me.type:null,_e=_(M.stencilBuffer,re),ue=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(M),_e,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(M),_e,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_e,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,A)}else{let me=M.textures;for(let re=0;re<me.length;re++){let _e=me[re],ue=r.convert(_e.format,_e.colorSpace),ne=r.convert(_e.type),ae=S(_e.internalFormat,ue,ne,_e.normalized,_e.colorSpace);Le(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(M),ae,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(M),ae,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(A,M,G){let me=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let re=n.get(M.depthTexture);re.__renderTarget=M;let _e=me?M.depthTexture.image[0]:M.depthTexture.image;(!re.__webglTexture||_e.width!==M.width||_e.height!==M.height)&&(_e.width=M.width,_e.height=M.height,M.depthTexture.needsUpdate=!0),me?Ee(M.depthTexture,0):te(M.depthTexture,0);let ue=re.__webglTexture,ne=xt(M),ae=me?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Te=M.depthTexture.format===Li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ri)Le(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ae,ue,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,Te,ae,ue,0);else if(M.depthTexture.format===Li)Le(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,ae,ue,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,Te,ae,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(A){let M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let me=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),me){let re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,me.removeEventListener("dispose",re)};me.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=me}if(A.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let me=0;me<6;me++)Fe(M.__webglFramebuffer[me],A,me);else A.texture.mipmaps.length>0?Fe(M.__webglFramebuffer[0],A,0):Fe(M.__webglFramebuffer,A,0);else if(G){M.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[me]),M.__webglDepthbuffer[me]===void 0)M.__webglDepthbuffer[me]=i.createRenderbuffer(),Ve(M.__webglDepthbuffer[me],A,!1);else{let re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=M.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,_e)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Ve(M.__webglDepthbuffer,A,!1);else{let re=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,M,G){let me=n.get(A);M!==void 0&&Ne(me.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&tt(A)}function gt(A){let M=A.texture,G=n.get(A),me=n.get(M);A.addEventListener("dispose",q),z(A);let re=A.textures,_e=A.isWebGLCubeRenderTarget===!0,ue=re.length>1;if(ue||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=M.version,a.memory.textures++),_e){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let ae=0;ae<M.mipmaps.length;ae++)G.__webglFramebuffer[ne][ae]=i.createFramebuffer()}else G.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)G.__webglFramebuffer[ne]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ue)for(let ne=0,ae=re.length;ne<ae;ne++){let Te=n.get(re[ne]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Le(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<re.length;ne++){let ae=re[ne];G.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);let Te=r.convert(ae.format,ae.colorSpace),k=r.convert(ae.type),he=S(ae.internalFormat,Te,k,ae.normalized,ae.colorSpace,A.isXRRenderTarget===!0),le=xt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,he,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ve(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)Ne(G.__webglFramebuffer[ne][ae],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ae);else Ne(G.__webglFramebuffer[ne],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);C(M)?E(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ue){for(let ne=0,ae=re.length;ne<ae;ne++){let Te=re[ne],k=n.get(Te),he=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,k.__webglTexture),Xe(he,Te),Ne(G.__webglFramebuffer,A,Te,i.COLOR_ATTACHMENT0+ne,he,0),C(Te)&&E(he)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,me.__webglTexture),Xe(ne,M),M.mipmaps.length>0)for(let ae=0;ae<M.mipmaps.length;ae++)Ne(G.__webglFramebuffer[ae],A,M,i.COLOR_ATTACHMENT0,ne,ae);else Ne(G.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ne,0);C(M)?E(ne):M.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&tt(A)}function Y(A){let M=A.textures;for(let G=0,me=M.length;G<me;G++){let re=M[G];if(C(re)&&re.mipmapsAutoUpdate===!0){let _e=R(A),ue=n.get(re).__webglTexture;t.bindTexture(_e,ue),E(_e),t.unbindTexture()}}}let Tt=[];function dt(A){if(A.samples>0){if(Le(A)===!1){let M=A.textures,G=A.width,me=A.height,re=i.COLOR_BUFFER_BIT,_e=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(A),ne=M.length>1;if(ne)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Te]);let k=n.get(M[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,G,me,0,0,G,me,re,i.NEAREST),l===!0&&(Tt.length=0,Tt.push(i.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Tt.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ue.__webglColorRenderbuffer[Te]);let k=n.get(M[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function xt(A){return Math.min(s.maxSamples,A.samples)}function Le(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Dt(A){let M=a.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function Qe(A,M){let G=A.colorSpace,me=A.format,re=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Gr&&G!==Ni&&(yt.getTransfer(G)===At?(me!==ii||re!==Pn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",G)),M}function J(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.getTextureUnits=K,this.setTextureUnits=xe,this.setTexture2D=te,this.setTexture2DArray=ge,this.setTexture3D=ye,this.setTextureCube=Ee,this.rebindTextures=lt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Le,this.dispose=X}function J1(i,e){function t(n,s=Ni){let r,a=yt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===ti)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===ni)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===jc)return i.RGB;if(n===ii)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===Zo)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===pa||n===ma||n===ga||n===xa)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ko||n===Jo||n===Qo||n===el)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===_a||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===nl)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===il)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sl)return r.COMPRESSED_R11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_a)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ol||n===ll||n===cl||n===hl||n===dl||n===ul||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ll)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===Ml||n===Sl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vl)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===El||n===wl||n===ya||n===Tl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===El)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e_=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fi({vertexShader:Q1,fragmentShader:e_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends Kn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,m=null,y=typeof XRWebGLBinding<"u",g=new _h,x={},v=t.getContextAttributes(),C=null,E=null,R=[],S=[],_=new be,w=null,z=null,I=new Xt;I.viewport=new Bt;let L=new Xt;L.viewport=new Bt;let q=[I,L],$=new Oo,U=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let te=R[B];return te===void 0&&(te=new nr,R[B]=te),te.getTargetRaySpace()},this.getControllerGrip=function(B){let te=R[B];return te===void 0&&(te=new nr,R[B]=te),te.getGripSpace()},this.getHand=function(B){let te=R[B];return te===void 0&&(te=new nr,R[B]=te),te.getHandSpace()};function N(B){let te=S.indexOf(B.inputSource);if(te===-1)return;let ge=R[te];ge!==void 0&&(ge.update(B.inputSource,B.frame,c||a),ge.dispatchEvent({type:B.type,data:B.inputSource}))}function j(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",O);for(let B=0;B<R.length;B++){let te=S[B];te!==null&&(S[B]=null,R[B].disconnect(te))}U=null,X=null,g.reset();for(let B in x)delete x[B];if(e.setRenderTarget(C),p=null,f=null,u=null,s=null,E=null,V.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),z!==null){let B=z.camera;B.fov=z.fov,B.zoom=z.zoom,B.updateProjectionMatrix(),z=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",j),s.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ye=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=v.stencil?Li:Ri,ye=v.stencil?Es:ti);let He={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Un(f.textureWidth,f.textureHeight,{format:ii,type:Pn,depthTexture:new Pi(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Un(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),V.setContext(s),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(B){for(let te=0;te<B.removed.length;te++){let ge=B.removed[te],ye=S.indexOf(ge);ye>=0&&(S[ye]=null,R[ye].disconnect(ge))}for(let te=0;te<B.added.length;te++){let ge=B.added[te],ye=S.indexOf(ge);if(ye===-1){for(let He=0;He<R.length;He++)if(He>=S.length){S.push(ge),ye=He;break}else if(S[He]===null){S[He]=ge,ye=He;break}if(ye===-1)break}let Ee=R[ye];Ee&&Ee.connect(ge)}}function F(B,te){te===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(te.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let te=B.near,ge=B.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),$.near=L.near=I.near=te,$.far=L.far=I.far=ge,(U!==$.near||X!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),U=$.near,X=$.far),$.layers.mask=B.layers.mask|6,I.layers.mask=$.layers.mask&-5,L.layers.mask=$.layers.mask&-3;let ye=B.parent,Ee=$.cameras;F($,ye);for(let He=0;He<Ee.length;He++)F(Ee[He],ye);$.projectionMatrix.copy(I.projectionMatrix),$.projectionMatrixInverse.copy(I.projectionMatrixInverse),z===null&&B.isPerspectiveCamera&&(z={camera:B,fov:B.fov,zoom:B.zoom}),H(B,$,ye)};function H(B,te,ge){ge===null?B.matrix.copy(te.matrixWorld):(B.matrix.copy(ge.matrixWorld),B.matrix.invert(),B.matrix.multiply(te.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(te.projectionMatrix),B.projectionMatrixInverse.copy(te.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Qs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(B){l=B,f!==null&&(f.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(B){return x[B]};let K=null;function xe(B,te){if(d=te.getViewerPose(c||a),m=te,d!==null){let ge=d.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ye=!1;ge.length!==$.cameras.length&&($.cameras.length=0,ye=!0);for(let qe=0;qe<ge.length;qe++){let Xe=ge[qe],et=null;if(p!==null)et=p.getViewport(Xe);else{let ve=u.getViewSubImage(f,Xe);et=ve.viewport,qe===0&&(e.setRenderTargetTextures(E,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(E))}let fe=q[qe];fe===void 0&&(fe=new Xt,fe.layers.enable(qe),fe.viewport=new Bt,q[qe]=fe),fe.matrix.fromArray(Xe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Xe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(et.x,et.y,et.width,et.height),qe===0&&($.matrix.copy(fe.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),ye===!0&&$.cameras.push(fe)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let qe=u.getDepthInformation(ge[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,s.renderState)}if(Ee&&Ee.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let qe=0;qe<ge.length;qe++){let Xe=ge[qe].camera;if(Xe){let et=x[Xe];et||(et=new Qr,x[Xe]=et);let fe=u.getCameraImage(Xe);et.sourceTexture=fe}}}}for(let ge=0;ge<R.length;ge++){let ye=S[ge],Ee=R[ge];ye!==null&&Ee!==void 0&&Ee.update(ye,te,c||a)}K&&K(B,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let V=new Ou;V.setAnimationLoop(xe),this.setAnimationLoop=function(B){K=B},this.dispose=function(){}}},t_=new Rt,Zu=new ct;Zu.set(-1,0,0,0,1,0,0,0,1);function n_(i,e){function t(g,x){g.matrixAutoUpdate===!0&&g.updateMatrix(),x.value.copy(g.matrix)}function n(g,x){x.color.getRGB(g.fogColor.value,ah(i)),x.isFog?(g.fogNear.value=x.near,g.fogFar.value=x.far):x.isFogExp2&&(g.fogDensity.value=x.density)}function s(g,x,v,C,E){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(g,x):x.isMeshLambertMaterial?(r(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(g,x),u(g,x)):x.isMeshPhongMaterial?(r(g,x),d(g,x),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(g,x),f(g,x),x.isMeshPhysicalMaterial&&p(g,x,E)):x.isMeshMatcapMaterial?(r(g,x),m(g,x)):x.isMeshDepthMaterial?r(g,x):x.isMeshDistanceMaterial?(r(g,x),y(g,x)):x.isMeshNormalMaterial?r(g,x):x.isLineBasicMaterial?(a(g,x),x.isLineDashedMaterial&&o(g,x)):x.isPointsMaterial?l(g,x,v,C):x.isSpriteMaterial?c(g,x):x.isShadowMaterial?(g.color.value.copy(x.color),g.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(g,x){g.opacity.value=x.opacity,x.color&&g.diffuse.value.copy(x.color),x.emissive&&g.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.bumpMap&&(g.bumpMap.value=x.bumpMap,t(x.bumpMap,g.bumpMapTransform),g.bumpScale.value=x.bumpScale,x.side===rn&&(g.bumpScale.value*=-1)),x.normalMap&&(g.normalMap.value=x.normalMap,t(x.normalMap,g.normalMapTransform),g.normalScale.value.copy(x.normalScale),x.side===rn&&g.normalScale.value.negate()),x.displacementMap&&(g.displacementMap.value=x.displacementMap,t(x.displacementMap,g.displacementMapTransform),g.displacementScale.value=x.displacementScale,g.displacementBias.value=x.displacementBias),x.emissiveMap&&(g.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,g.emissiveMapTransform)),x.specularMap&&(g.specularMap.value=x.specularMap,t(x.specularMap,g.specularMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest);let v=e.get(x),C=v.envMap,E=v.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Zu),g.reflectivity.value=x.reflectivity,g.ior.value=x.ior,g.refractionRatio.value=x.refractionRatio),x.lightMap&&(g.lightMap.value=x.lightMap,g.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,g.lightMapTransform)),x.aoMap&&(g.aoMap.value=x.aoMap,g.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,g.aoMapTransform))}function a(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform))}function o(g,x){g.dashSize.value=x.dashSize,g.totalSize.value=x.dashSize+x.gapSize,g.scale.value=x.scale}function l(g,x,v,C){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.size.value=x.size*v,g.scale.value=C*.5,x.map&&(g.map.value=x.map,t(x.map,g.uvTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function c(g,x){g.diffuse.value.copy(x.color),g.opacity.value=x.opacity,g.rotation.value=x.rotation,x.map&&(g.map.value=x.map,t(x.map,g.mapTransform)),x.alphaMap&&(g.alphaMap.value=x.alphaMap,t(x.alphaMap,g.alphaMapTransform)),x.alphaTest>0&&(g.alphaTest.value=x.alphaTest)}function d(g,x){g.specular.value.copy(x.specular),g.shininess.value=Math.max(x.shininess,1e-4)}function u(g,x){x.gradientMap&&(g.gradientMap.value=x.gradientMap)}function f(g,x){g.metalness.value=x.metalness,x.metalnessMap&&(g.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,g.metalnessMapTransform)),g.roughness.value=x.roughness,x.roughnessMap&&(g.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,g.roughnessMapTransform)),x.envMap&&(g.envMapIntensity.value=x.envMapIntensity)}function p(g,x,v){g.ior.value=x.ior,x.diffuseRoughness>0&&(g.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),x.sheen>0&&(g.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),g.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(g.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,g.sheenColorMapTransform)),x.sheenRoughnessMap&&(g.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,g.sheenRoughnessMapTransform))),x.clearcoat>0&&(g.clearcoat.value=x.clearcoat,g.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(g.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,g.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(g.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===rn&&g.clearcoatNormalScale.value.negate())),x.dispersion>0&&(g.dispersion.value=x.dispersion),x.retroreflectivity>0&&(g.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(g.iridescence.value=x.iridescence,g.iridescenceIOR.value=x.iridescenceIOR,g.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(g.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,g.iridescenceMapTransform)),x.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),x.transmission>0&&(g.transmission.value=x.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),x.transmissionMap&&(g.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,g.transmissionMapTransform)),g.thickness.value=x.thickness,x.thicknessMap&&(g.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=x.attenuationDistance,g.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(g.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(g.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=x.specularIntensity,g.specularColor.value.copy(x.specularColor),x.specularColorMap&&(g.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,g.specularColorMapTransform)),x.specularIntensityMap&&(g.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,x){x.matcap&&(g.matcap.value=x.matcap)}function y(g,x){let v=e.get(x).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i_(i,e,t,n){let s={},r={};function a(v,C){let E=C.program;n.uniformBlockBinding(v,E,s[v.id])}function o(v,C){let E=s[v.id];E===void 0&&(m(v),E=l(v),s[v.id]=E,v.addEventListener("dispose",g));let R=C.program;n.updateUBOMapping(v,R);let S=e.render.frame;r[v.id]!==S&&(c(v),r[v.id]=S)}function l(v){let C=i.createBuffer(),E=v.__size,R=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),C}function c(v){let C=s[v.id],E=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let S=0,_=E.length;S<_;S++){let w=E[S];if(Array.isArray(w))for(let z=0,I=w.length;z<I;z++)d(w[z],S,z,R);else d(w,S,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,C,E,R){if(f(v,C,E,R)===!0){let S=v.__offset,_=v.value;if(Array.isArray(_)){let w=0;for(let z=0;z<_.length;z++){let I=_[z],L=y(I,!0);u(I,v.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,v.__data)}}function u(v,C,E){typeof v=="number"||typeof v=="boolean"?C[E]=v:v.isMatrix3?(C[E]=v.elements[0],C[E+1]=v.elements[1],C[E+2]=v.elements[2],C[E+3]=0,C[E+4]=v.elements[3],C[E+5]=v.elements[4],C[E+6]=v.elements[5],C[E+7]=0,C[E+8]=v.elements[6],C[E+9]=v.elements[7],C[E+10]=v.elements[8],C[E+11]=0):ArrayBuffer.isView(v)?C.set(v.subarray(0,C.length-E),E):v.toArray(C,E)}function f(v,C,E,R){let S=v.value,_=C+"_"+E;if(Array.isArray(S)){R[_]===void 0&&(R[_]=[]);let w=R[_],z=!1;for(let I=0;I<S.length;I++)p(S[I],w,I)===!0&&(z=!0);return z}return p(S,R,_)}function p(v,C,E){if(C[E]===void 0)return typeof v=="number"||typeof v=="boolean"?C[E]=v:ArrayBuffer.isView(v)?C[E]=v.slice():C[E]=v.clone(),!0;{let R=C[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(v){let C=v.uniforms,E=0,R=16;for(let _=0,w=C.length;_<w;_++){let z=Array.isArray(C[_])?C[_]:[C[_]];for(let I=0,L=z.length;I<L;I++){let q=z[I],$=Array.isArray(q.value)?q.value:[q.value],U=Array.isArray(C[_])||Array.isArray(q.value),X=E;for(let j=0,O=$.length;j<O;j++){let F=$[j],H=y(F,U),K=E%R,xe=K%H.boundary,V=K+xe;E+=xe,V!==0&&R-V<H.storage&&(E+=R-V),j===0&&(X=E),E+=H.storage}let N=q.type==="int"?Int32Array:q.type==="uint"?Uint32Array:Float32Array;q.__data=new N((E-X)/Float32Array.BYTES_PER_ELEMENT),q.__offset=X}}let S=E%R;return S>0&&(E+=R-S),v.__size=E,v.__cache={},this}function y(v,C){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=16,E.storage=48):v.isMatrix4?(E.boundary=16,E.storage=64):v.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):st("WebGLRenderer: Unsupported uniform value type.",v),C===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function g(v){let C=v.target;C.removeEventListener("dispose",g),i.deleteBuffer(s[C.id]),delete s[C.id],delete r[C.id]}function x(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:x}}var s_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function r_(){return gi===null&&(gi=new Zr(s_,16,16,ns,ni),gi.name="DFG_LUT",gi.minFilter=En,gi.magFilter=En,gi.wrapS=zn,gi.wrapT=zn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var _i=class{constructor(e={}){let{canvas:t=iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let y=p,g=new Set([$o,jo,Zo]),x=new Set([Pn,ti,mr,Es,Xo,qo]),v=new Uint32Array(4),C=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},R=null,S=null,_=[],w=[],z=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,q=null,$=null,U=null,X=null;this._outputColorSpace=nn;let N=0,j=0,O=null,F=-1,H=null,K=new Bt,xe=new Bt,V=null,B=new nt(0),te=0,ge=t.width,ye=t.height,Ee=1,He=null,it=null,qe=new Bt(0,0,ge,ye),Xe=new Bt(0,0,ge,ye),et=!1,fe=new ji,ve=new yo,Re=!1,ke=!1,Ne=new Rt,Ve=new Z,Fe=new Bt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function gt(){return O===null?Ee:1}let Y=n;function Tt(T,W){return t.getContext(T,W)}let dt,xt,Le,Dt,Qe,J,A,M,G,me,re,_e,ue,ne,ae,Te,k,he,le,we,Ae,Se,Ce;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),Y===null){let W="webgl2";if(Y=Tt(W,T),Y===null)throw Tt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(T){throw t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ot("WebGLRenderer: "+T.message),T}function Je(){dt=new gx(Y),dt.init(),Ae=new J1(Y,dt),xt=new rx(Y,dt,e,Ae),Le=new $1(Y,dt),xt.reversedDepthBuffer&&f&&Le.buffers.depth.setReversed(!0),$=Y.createFramebuffer(),U=Y.createFramebuffer(),X=Y.createFramebuffer(),Dt=new yx(Y),Qe=new U1,J=new K1(Y,dt,Le,Qe,xt,Ae,Dt),A=new mx(I),M=new vm(Y),Se=new ix(Y,M),G=new xx(Y,M,Dt,Se),me=new vx(Y,G,M,Se,Dt),he=new bx(Y,xt,J),ae=new ax(Qe),re=new F1(I,A,dt,xt,Se,ae),_e=new n_(I,Qe),ue=new O1,ne=new W1(dt),k=new nx(I,A,Le,me,m,l),Te=new j1(I,me,xt),Ce=new i_(Y,Dt,xt,Le),le=new sx(Y,dt,Dt),we=new _x(Y,dt,Dt),Dt.programs=re.programs,I.capabilities=xt,I.extensions=dt,I.properties=Qe,I.renderLists=ue,I.shadowMap=Te,I.state=Le,I.info=Dt}y!==Pn&&(z=new Sx(y,t.width,t.height,o,s,r));let Me=new yh(I,Y);this.xr=Me,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let T=dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(T){T!==void 0&&(Ee=T,this.setSize(ge,ye,!1))},this.getSize=function(T){return T.set(ge,ye)},this.setSize=function(T,W,se=!0){if(Me.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=T,ye=W,t.width=Math.floor(T*Ee),t.height=Math.floor(W*Ee),se===!0&&(t.style.width=T+"px",t.style.height=W+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(ge*Ee,ye*Ee).floor()},this.setDrawingBufferSize=function(T,W,se){ge=T,ye=W,Ee=se,t.width=Math.floor(T*se),t.height=Math.floor(W*se),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(y===Pn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(K)},this.getViewport=function(T){return T.copy(qe)},this.setViewport=function(T,W,se,ee){T.isVector4?qe.set(T.x,T.y,T.z,T.w):qe.set(T,W,se,ee),Le.viewport(K.copy(qe).multiplyScalar(gt()).round())},this.getScissor=function(T){return T.copy(Xe)},this.setScissor=function(T,W,se,ee){T.isVector4?Xe.set(T.x,T.y,T.z,T.w):Xe.set(T,W,se,ee),Le.scissor(xe.copy(Xe).multiplyScalar(gt()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){Le.setScissorTest(et=T)},this.setOpaqueSort=function(T){He=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,se=!0){let ee=0;if(T){let ie=!1;if(O!==null){let Pe=O.texture.format;ie=g.has(Pe)}if(ie){let Pe=O.texture.type,Oe=x.has(Pe),De=k.getClearColor(),Be=k.getClearAlpha(),Ke=De.r,at=De.g,ft=De.b;Oe?(v[0]=Ke,v[1]=at,v[2]=ft,v[3]=Be,Y.clearBufferuiv(Y.COLOR,0,v)):(C[0]=Ke,C[1]=at,C[2]=ft,C[3]=Be,Y.clearBufferiv(Y.COLOR,0,C))}else ee|=Y.COLOR_BUFFER_BIT}W&&(ee|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(ee|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&Y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),q=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),k.dispose(),ue.dispose(),ne.dispose(),J.dispose(),Qe.dispose(),A.dispose(),me.dispose(),G.dispose(),Se.dispose(),Ce.dispose(),re.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",wr),Me.removeEventListener("sessionend",Ds),Ft.stop()};function Ye(T){T.preventDefault(),eh("WebGLRenderer: Context Lost."),L=!0}function rt(){eh("WebGLRenderer: Context Restored."),L=!1;let T=Dt.autoReset,W=Te.enabled,se=Te.autoUpdate,ee=Te.needsUpdate,ie=Te.type;Je(),Dt.autoReset=T,Te.enabled=W,Te.autoUpdate=se,Te.needsUpdate=ee,Te.type=ie}function Ue(T){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function bt(T){let W=T.target;W.removeEventListener("dispose",bt),Ct(W)}function Ct(T){Mn(T),Qe.remove(T)}function Mn(T){let W=Qe.get(T).programs;W!==void 0&&(W.forEach(function(se){re.releaseProgram(se)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,se,ee,ie,Pe){W===null&&(W=tt);let Oe=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,De=ql(T,W,se,ee,ie);Le.setMaterial(ee,Oe);let Be=se.index,Ke=1;if(ee.wireframe===!0){if(Be=G.getWireframeAttribute(se),Be===void 0)return;Ke=2}let at=se.drawRange,ft=se.attributes.position,Ze=at.start*Ke,_t=(at.start+at.count)*Ke;Pe!==null&&(Ze=Math.max(Ze,Pe.start*Ke),_t=Math.min(_t,(Pe.start+Pe.count)*Ke)),Be!==null?(Ze=Math.max(Ze,0),_t=Math.min(_t,Be.count)):ft!=null&&(Ze=Math.max(Ze,0),_t=Math.min(_t,ft.count));let Jt=_t-Ze;if(Jt<0||Jt===1/0)return;Se.setup(ie,ee,De,se,Be);let Nt,It=le;if(Be!==null&&(Nt=M.get(Be),It=we,It.setIndex(Nt)),ie.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*gt()),It.setMode(Y.LINES)):It.setMode(Y.TRIANGLES);else if(ie.isLine){let gn=ee.linewidth;gn===void 0&&(gn=1),Le.setLineWidth(gn*gt()),ie.isLineSegments?It.setMode(Y.LINES):ie.isLineLoop?It.setMode(Y.LINE_LOOP):It.setMode(Y.LINE_STRIP)}else ie.isPoints?It.setMode(Y.POINTS):ie.isSprite&&It.setMode(Y.TRIANGLES);if(ie.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))It.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let gn=ie._multiDrawStarts,je=ie._multiDrawCounts,Sn=ie._multiDrawCount,St=Be?M.get(Be).bytesPerElement:1,cs=Qe.get(ee).currentProgram.getUniforms();for(let xn=0;xn<Sn;xn++)cs.setValue(Y,"_gl_DrawID",xn),It.render(gn[xn]/St,je[xn])}else if(ie.isInstancedMesh)It.renderInstances(Ze,Jt,ie.count);else if(se.isInstancedBufferGeometry){let gn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,je=Math.min(se.instanceCount,gn);It.renderInstances(Ze,Jt,je)}else It.render(Ze,Jt)};function li(T,W,se,ee){q!==null&&T.isNodeMaterial&&q.setObject(ee,T),Re===!0&&ae.setState(T,se,!1),T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Oi(T,W,ee),T.side=pi,T.needsUpdate=!0,Oi(T,W,ee),T.side=en):Oi(T,W,ee)}this.compile=function(T,W,se=null){se===null&&(se=T),q!==null&&q.renderStart(T,W,se),S=ne.get(se),S.init(W),w.push(S),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(S.pushLight(ie),ie.castShadow&&S.pushShadow(ie))}),T!==se&&T.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(S.pushLight(ie),ie.castShadow&&S.pushShadow(ie))}),S.setupLights(),q!==null&&q.updateLights(S.state.lightsArray),ke=this.localClippingEnabled,Re=ae.init(this.clippingPlanes,ke),Re===!0&&ae.setGlobalState(this.clippingPlanes,W),q!==null&&Te.render(S.state.shadowsArray,se,W);let ee=new Set;return T.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let Oe=0;Oe<Pe.length;Oe++){let De=Pe[Oe];li(De,se,W,ie),ee.add(De)}else li(Pe,se,W,ie),ee.add(Pe)}),S=w.pop(),q!==null&&q.renderEnd(),ee},this.compileAsync=function(T,W,se=null){let ee=this.compile(T,W,se);return new Promise(ie=>{function Pe(){if(ee.forEach(function(Oe){let Be=Qe.get(Oe).currentProgram;(Be===void 0||Be.isReady())&&ee.delete(Oe)}),ee.size===0){ie(T);return}setTimeout(Pe,10)}dt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Er=null;function ls(T){Er&&Er(T)}function wr(){Ft.stop()}function Ds(){Ft.start()}let Ft=new Ou;Ft.setAnimationLoop(ls),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(T){Er=T,Me.setAnimationLoop(T),T===null?Ft.stop():Ft.start()},Me.addEventListener("sessionstart",wr),Me.addEventListener("sessionend",Ds),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;q!==null&&q.renderStart(T,W);let se=Me.enabled===!0&&Me.isPresenting===!0,ee=z!==null&&(O===null||se)&&z.begin(I,O);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(W),W=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(I,T,W,O),S=ne.get(T,w.length),S.init(W),S.state.textureUnits=J.getTextureUnits(),w.push(S),Ne.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ve.setFromArrayCamera(W):fe.setFromProjectionMatrix(Ne,Gn,W.reversedDepth),ke=this.localClippingEnabled,Re=ae.init(this.clippingPlanes,ke),R=ue.get(T,_.length),R.init(),_.push(R),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){let Oe=I.xr.getDepthSensingMesh();Oe!==null&&Lt(Oe,W,-1/0,I.sortObjects)}Lt(T,W,0,I.sortObjects),R.finish(),q!==null&&q.updateLights(S.state.lightsArray),I.sortObjects===!0&&R.sort(He,it),lt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,lt&&k.addToRenderList(R,T),this.info.autoReset===!0&&this.info.reset(),Re===!0&&ae.beginShadows();let ie=S.state.shadowsArray;if(Te.render(ie,T,W),Re===!0&&ae.endShadows(),(ee&&z.hasRenderPass())===!1){let Oe=R.opaque,De=R.transmissive;if(S.setupLights(),W.isArrayCamera){let Be=W.cameras;if(De.length>0)for(let Ke=0,at=Be.length;Ke<at;Ke++){let ft=Be[Ke];tn(Oe,De,T,ft)}lt&&k.render(T);for(let Ke=0,at=Be.length;Ke<at;Ke++){let ft=Be[Ke];Kt(R,T,ft,ft.viewport)}}else De.length>0&&tn(Oe,De,T,W),lt&&k.render(T),Kt(R,T,W)}O!==null&&j===0&&(J.updateMultisampleRenderTarget(O),J.updateRenderTargetMipmap(O)),ee&&z.end(I),T.isScene===!0&&T.onAfterRender(I,T,W),Se.resetDefaultState(),F=-1,H=null,w.pop(),w.length>0?(S=w[w.length-1],J.setTextureUnits(S.state.textureUnits),Re===!0&&ae.setGlobalState(I.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,q!==null&&q.renderEnd()};function Lt(T,W,se,ee){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)se=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)S.pushLight(T),T.castShadow&&S.pushShadow(T);else if(T.isSprite){let Oe=W.isArrayCamera?ve:fe;if(!T.frustumCulled||T.intersectsFrustum(Oe)){ee&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ne);let De=me.update(T),Be=T.material;Be.visible&&R.push(T,De,Be,se,Fe.z,null,W)}}else if(T.isMesh||T.isLine||T.isPoints){let Oe=W.isArrayCamera?ve:fe;if(!T.frustumCulled||T.intersectsFrustum(Oe)){let De=me.update(T),Be=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),Fe.copy(De.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(Ne)),Array.isArray(Be)){let Ke=De.groups;for(let at=0,ft=Ke.length;at<ft;at++){let Ze=Ke[at],_t=Be[Ze.materialIndex];_t&&_t.visible&&R.push(T,De,_t,se,Fe.z,Ze,W)}}else Be.visible&&R.push(T,De,Be,se,Fe.z,null,W)}}}let Pe=T.children;for(let Oe=0,De=Pe.length;Oe<De;Oe++)Lt(Pe[Oe],W,se,ee)}function Kt(T,W,se,ee){let{opaque:ie,transmissive:Pe,transparent:Oe}=T;S.setupLightsView(se),Re===!0&&ae.setGlobalState(I.clippingPlanes,se),ee&&Le.viewport(K.copy(ee)),ie.length>0&&bi(ie,W,se),Pe.length>0&&bi(Pe,W,se),Oe.length>0&&bi(Oe,W,se),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function tn(T,W,se,ee){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[ee.id]===void 0){let Ze=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[ee.id]=new Un(1,1,{generateMipmaps:!0,type:Ze?ni:Pn,minFilter:Di,samples:Math.max(4,xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Pe=S.state.transmissionRenderTarget[ee.id],Oe=ee.viewport||K;Pe.setSize(Oe.z*I.transmissionResolutionScale,Oe.w*I.transmissionResolutionScale);let De=I.getRenderTarget(),Be=I.getActiveCubeFace(),Ke=I.getActiveMipmapLevel();I.setRenderTarget(Pe),I.getClearColor(B),te=I.getClearAlpha(),te<1&&I.setClearColor(16777215,.5),I.clear(),lt&&k.render(se);let at=I.toneMapping;I.toneMapping=mi;let ft=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),S.setupLightsView(ee),Re===!0&&ae.setGlobalState(I.clippingPlanes,ee),bi(T,se,ee),J.updateMultisampleRenderTarget(Pe),J.updateRenderTargetMipmap(Pe),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let _t=0,Jt=W.length;_t<Jt;_t++){let Nt=W[_t],{object:It,geometry:gn,material:je,group:Sn}=Nt;if(je.side===en&&It.layers.test(ee.layers)){let St=je.side;je.side=rn,je.needsUpdate=!0,Tr(It,se,ee,gn,je,Sn),je.side=St,je.needsUpdate=!0,Ze=!0}}Ze===!0&&(J.updateMultisampleRenderTarget(Pe),J.updateRenderTargetMipmap(Pe))}I.setRenderTarget(De,Be,Ke),I.setClearColor(B,te),ft!==void 0&&(ee.viewport=ft),I.toneMapping=at}function bi(T,W,se){let ee=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Pe=T.length;ie<Pe;ie++){let Oe=T[ie],{object:De,geometry:Be,group:Ke}=Oe,at=Oe.material;at.allowOverride===!0&&ee!==null&&(at=ee),De.layers.test(se.layers)&&Tr(De,W,se,Be,at,Ke)}}function Tr(T,W,se,ee,ie,Pe){q!==null&&ie.isNodeMaterial&&q.setObject(T,ie),T.onBeforeRender(I,W,se,ee,ie,Pe),T.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ie.onBeforeRender(I,W,se,ee,T,Pe),ie.transparent===!0&&ie.side===en&&ie.forceSinglePass===!1?(ie.side=rn,ie.needsUpdate=!0,I.renderBufferDirect(se,W,ee,ie,T,Pe),ie.side=pi,ie.needsUpdate=!0,I.renderBufferDirect(se,W,ee,ie,T,Pe),ie.side=en):I.renderBufferDirect(se,W,ee,ie,T,Pe),T.onAfterRender(I,W,se,ee,ie,Pe)}function Ls(T){let W=0;for(let se of T)se.texture!==null&&W++;return W}function Oi(T,W,se){W.isScene!==!0&&(W=tt);let ee=Qe.get(T),ie=S.state.lights,Pe=S.state.shadowsArray,Oe=ie.state.version,De=re.getParameters(T,ie.state,Pe,W,se,S.state.lightProbeGridArray),Be=re.getProgramCacheKey(De),Ke=ee.programs;ee.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?W.environment:null,ee.fog=W.fog;let at=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;ee.envMap=A.get(T.envMap||ee.environment,at),ee.envMapRotation=ee.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Ke===void 0&&(T.addEventListener("dispose",bt),Ke=new Map,ee.programs=Ke,ee.programVariants=new Map);let ft=Ke.get(Be);if(ft!==void 0){if(ee.currentProgram===ft&&ee.lightsStateVersion===Oe)return Rr(T,De),ft}else De.uniforms=re.getUniforms(T),q!==null&&T.isNodeMaterial&&q.build(T,se,De),T.onBeforeCompile(De,I),ft=re.acquireProgram(De,Be),Ke.set(Be,ft),ee.uniforms=De.uniforms;let Ze=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=ae.uniform),Rr(T,De),ee.needsLights=Bi(T),ee.lightsStateVersion=Oe,ee.needsLights&&(Ze.ambientLightColor.value=ie.state.ambient,Ze.lightProbe.value=ie.state.probe,Ze.sunLights.value=ie.state.sun,Ze.sunLightShadows.value=ie.state.sunShadow,Ze.directionalLights.value=ie.state.directional,Ze.directionalLightShadows.value=ie.state.directionalShadow,Ze.spotLights.value=ie.state.spot,Ze.spotLightShadows.value=ie.state.spotShadow,Ze.rectAreaLights.value=ie.state.rectArea,Ze.ltc_1.value=ie.state.rectAreaLTC1,Ze.ltc_2.value=ie.state.rectAreaLTC2,Ze.pointLights.value=ie.state.point,Ze.pointLightShadows.value=ie.state.pointShadow,Ze.hemisphereLights.value=ie.state.hemi,Ze.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ze.sunShadowCascade.value=ie.state.sunShadowCascade,Ze.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ie.state.spotLightMatrix,Ze.spotLightMap.value=ie.state.spotLightMap,Ze.pointShadowMatrix.value=ie.state.pointShadowMatrix),ee.numLightProbeGrids=Ls(S.state.lightProbeGridArray),ee.currentProgram=ft,ee.uniformsList=null,ft}function Ar(T,W,se,ee,ie){let Pe=Qe.get(T),Oe=Pe.currentProgram.id+","+ee+","+ie,De=Pe.programVariants.get(Oe);return De===void 0?(De=Oi(T,W,se),Pe.programVariants.set(Oe,De)):(Pe.currentProgram=De,Pe.uniformsList=null,Pe.outputColorSpace=ee,Pe.toneMapping=ie),De}function Ns(T){if(T.uniformsList===null){let W=T.currentProgram.getUniforms();T.uniformsList=gr.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Rr(T,W){let se=Qe.get(T);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function ql(T,W,se,ee,ie){W.isScene!==!0&&(W=tt),J.resetTextureUnits();let Pe=W.fog,Oe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?W.environment:null,De=O===null?I.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:yt.workingColorSpace,Be=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,Ke=A.get(ee.envMap||Oe,Be),at=ee.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ft=!!se.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!se.morphAttributes.position,_t=!!se.morphAttributes.normal,Jt=!!se.morphAttributes.color,Nt=mi;ee.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Nt=I.toneMapping);let It=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,gn=It!==void 0?It.length:0,je=Qe.get(ee),Sn=S.state.lights;if(Re===!0&&(ke===!0||T!==H)){let Wt=T===H&&ee.id===F;ae.setState(ee,T,Wt)}let St=!1,cs=!1;ee.version===je.__version?je.needsLights&&je.lightsStateVersion!==Sn.state.version||ie.isBatchedMesh&&je.batching===!1||!ie.isBatchedMesh&&je.batching===!0||ie.isBatchedMesh&&je.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&je.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&je.instancing===!1||!ie.isInstancedMesh&&je.instancing===!0||ie.isSkinnedMesh&&je.skinning===!1||!ie.isSkinnedMesh&&je.skinning===!0||ie.isInstancedMesh&&je.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&je.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&je.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&je.instancingMorph===!1&&ie.morphTexture!==null||je.envMap!==Ke||ee.fog===!0&&je.fog!==Pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ae.numPlanes||je.numIntersection!==ae.numIntersection)||je.vertexAlphas!==at||je.vertexTangents!==ft||je.morphTargets!==Ze||je.morphNormals!==_t||je.morphColors!==Jt||je.morphTargetsCount!==gn||je.numLightProbeGrids!==Ls(S.state.lightProbeGridArray)?St=!0:(je.outputColorSpace!==De||je.toneMapping!==Nt)&&(cs=!0):(St=!0,je.__version=ee.version);let xn=je.currentProgram;(St===!0||cs===!0)&&(xn=cs===!0?Ar(ee,W,ie,De,Nt):Oi(ee,W,ie),q&&ee.isNodeMaterial&&q.onUpdateProgram(ee,xn,je));let Da=!1,Hi=!1,hs=!1,vt=xn.getUniforms(),pn=je.uniforms;if(Le.useProgram(xn.program)&&(Da=!0,Hi=!0,hs=!0),ee.id!==F&&(F=ee.id,Hi=!0),Da||H!==T){Le.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),vt.setValue(Y,"projectionMatrix",T.projectionMatrix),vt.setValue(Y,"viewMatrix",T.matrixWorldInverse);let cn=vt.map.cameraPosition;cn!==void 0&&cn.setValue(Y,Ve.setFromMatrixPosition(T.matrixWorld)),xt.logarithmicDepthBuffer&&vt.setValue(Y,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&vt.setValue(Y,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,Hi=!0,hs=!0)}if(je.needsLights&&(Sn.state.sunShadowMap.length>0&&vt.setValue(Y,"sunShadowMap",Sn.state.sunShadowMap,J),Sn.state.directionalShadowMap.length>0&&vt.setValue(Y,"directionalShadowMap",Sn.state.directionalShadowMap,J),Sn.state.spotShadowMap.length>0&&vt.setValue(Y,"spotShadowMap",Sn.state.spotShadowMap,J),Sn.state.pointShadowMap.length>0&&vt.setValue(Y,"pointShadowMap",Sn.state.pointShadowMap,J)),ie.isSkinnedMesh){vt.setOptional(Y,ie,"bindMatrix"),vt.setOptional(Y,ie,"bindMatrixInverse");let Wt=ie.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),vt.setValue(Y,"boneTexture",Wt.boneTexture,J))}ie.isBatchedMesh&&(vt.setOptional(Y,ie,"batchingTexture"),vt.setValue(Y,"batchingTexture",ie._matricesTexture,J),vt.setOptional(Y,ie,"batchingIdTexture"),vt.setValue(Y,"batchingIdTexture",ie._indirectTexture,J),vt.setOptional(Y,ie,"batchingColorTexture"),ie._colorsTexture!==null&&vt.setValue(Y,"batchingColorTexture",ie._colorsTexture,J));let Yn=se.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&he.update(ie,se,xn),(Hi||je.receiveShadow!==ie.receiveShadow)&&(je.receiveShadow=ie.receiveShadow,vt.setValue(Y,"receiveShadow",ie.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&W.environment!==null&&(pn.envMapIntensity.value=W.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=r_()),Hi){if(vt.setValue(Y,"toneMappingExposure",I.toneMappingExposure),je.needsLights&&Yl(pn,hs),Pe&&ee.fog===!0&&_e.refreshFogUniforms(pn,Pe),_e.refreshMaterialUniforms(pn,ee,Ee,ye,S.state.transmissionRenderTarget[T.id]),je.needsLights&&je.numLightProbeGrids>0){let Wt=E,cn=0;for(let vi of S.state.lightProbeGridArray)vi.texture!==null&&(Wt.textures[cn]=vi.texture,Wt.min[cn]=vi.boundingBox.min,Wt.max[cn]=vi.boundingBox.max,Wt.resolution[cn]=vi.resolution,cn++);for(let vi in Wt)Wt[vi].length=cn;pn.probesSH.value=Wt.textures,pn.probesMin.value=Wt.min,pn.probesMax.value=Wt.max,pn.probesResolution.value=Wt.resolution}gr.upload(Y,Ns(je),pn,J)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(gr.upload(Y,Ns(je),pn,J),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&vt.setValue(Y,"center",ie.center),vt.setValue(Y,"modelViewMatrix",ie.modelViewMatrix),vt.setValue(Y,"normalMatrix",ie.normalMatrix),vt.setValue(Y,"modelMatrix",ie.matrixWorld),ee.uniformsGroups!==void 0){let Wt=ee.uniformsGroups;for(let cn=0,vi=Wt.length;cn<vi;cn++){let Gh=Wt[cn];Ce.update(Gh,xn),Ce.bind(Gh,xn)}}return xn}function Yl(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.sunLights.needsUpdate=W,T.sunLightShadows.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Bi(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(T,W,se){let ee=Qe.get(T);ee.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Qe.get(T.texture).__webglTexture=W,Qe.get(T.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:se,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){let se=Qe.get(T);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,se=0){O=T,N=W,j=se;let ee=null,ie=!1,Pe=!1;if(T){let De=Qe.get(T);if(De.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(Y.FRAMEBUFFER,De.__webglFramebuffer),K.copy(T.viewport),xe.copy(T.scissor),V=T.scissorTest,Le.viewport(K),Le.scissor(xe),Le.setScissorTest(V),F=-1;return}else if(De.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(De.__hasExternalTextures)J.rebindTextures(T,Qe.get(T.texture).__webglTexture,Qe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let at=T.depthTexture;if(De.__boundDepthTexture!==at){if(at!==null&&Qe.has(at)&&(T.width!==at.image.width||T.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Pe=!0);let Ke=Qe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ke[W])?ee=Ke[W][se]:ee=Ke[W],ie=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?ee=Qe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[se]:ee=Ke,K.copy(T.viewport),xe.copy(T.scissor),V=T.scissorTest}else K.copy(qe).multiplyScalar(Ee).floor(),xe.copy(Xe).multiplyScalar(Ee).floor(),V=et;if(se!==0&&(ee=$),Le.bindFramebuffer(Y.FRAMEBUFFER,ee)&&Le.drawBuffers(T,ee),Le.viewport(K),Le.scissor(xe),Le.setScissorTest(V),ie){let De=Qe.get(T.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,De.__webglTexture,se)}else if(Pe){let De=W;for(let Be=0;Be<T.textures.length;Be++){let Ke=Qe.get(T.textures[Be]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Be,Ke.__webglTexture,se,De)}}else if(T!==null&&se!==0){let De=Qe.get(T.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,De.__webglTexture,se)}F=-1};function Vt(T){let W=Qe.get(T);return(W.__readFormat!==T.format||W.__readType!==T.type)&&(W.__readFormat=T.format,W.__readType=T.type,W.__formatReadable=xt.textureFormatReadable(T.format),W.__typeReadable=xt.textureTypeReadable(T.type)),W}this.readRenderTargetPixels=function(T,W,se,ee,ie,Pe,Oe,De=0){if(!(T&&T.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe],Array.isArray(Be)&&(Be=Be[0])),Be){Le.bindFramebuffer(Y.FRAMEBUFFER,Be);try{let Ke=T.textures[De],at=Ke.format,ft=Ke.type;T.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+De);let Ze=Vt(Ke);if(Ze.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-ee&&se>=0&&se<=T.height-ie&&Y.readPixels(W,se,ee,ie,Ae.convert(at),Ae.convert(ft),Pe)}finally{let Ke=O!==null?Qe.get(O).__webglFramebuffer:null;Le.bindFramebuffer(Y.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(T,W,se,ee,ie,Pe,Oe,De=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Be=Be[Oe],Array.isArray(Be)&&(Be=Be[0])),Be)if(W>=0&&W<=T.width-ee&&se>=0&&se<=T.height-ie){Le.bindFramebuffer(Y.FRAMEBUFFER,Be);let Ke=T.textures[De],at=Ke.format,ft=Ke.type;T.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+De);let Ze=Vt(Ke);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,_t),Y.bufferData(Y.PIXEL_PACK_BUFFER,Pe.byteLength,Y.STREAM_READ),Y.readPixels(W,se,ee,ie,Ae.convert(at),Ae.convert(ft),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);let Jt=O!==null?Qe.get(O).__webglFramebuffer:null;Le.bindFramebuffer(Y.FRAMEBUFFER,Jt);let Nt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await ru(Y,Nt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,_t),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Pe),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(_t),Y.deleteSync(Nt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,se=0){let ee=Math.pow(2,-se),ie=Math.floor(T.image.width*ee),Pe=Math.floor(T.image.height*ee),Oe=W!==null?W.x:0,De=W!==null?W.y:0;J.setTexture2D(T,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,se,0,0,Oe,De,ie,Pe),Le.unbindTexture()},this.copyTextureToTexture=function(T,W,se=null,ee=null,ie=0,Pe=0){let Oe,De,Be,Ke,at,ft,Ze,_t,Jt,Nt=T.isCompressedTexture?T.mipmaps[Pe]:T.image;if(se!==null)Oe=se.max.x-se.min.x,De=se.max.y-se.min.y,Be=se.isBox3?se.max.z-se.min.z:1,Ke=se.min.x,at=se.min.y,ft=se.isBox3?se.min.z:0;else{let vt=Math.pow(2,-ie);Oe=Math.floor(Nt.width*vt),De=Math.floor(Nt.height*vt),T.isDataArrayTexture?Be=Nt.depth:T.isData3DTexture?Be=Math.floor(Nt.depth*vt):Be=1,Ke=0,at=0,ft=0}ee!==null?(Ze=ee.x,_t=ee.y,Jt=ee.z):(Ze=0,_t=0,Jt=0);let It=Ae.convert(W.format),gn=Ae.convert(W.type),je;W.isData3DTexture?(J.setTexture3D(W,0),je=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(J.setTexture2DArray(W,0),je=Y.TEXTURE_2D_ARRAY):(J.setTexture2D(W,0),je=Y.TEXTURE_2D),Le.activeTexture(Y.TEXTURE0),Le.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),Le.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Le.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);let Sn=Le.getParameter(Y.UNPACK_ROW_LENGTH),St=Le.getParameter(Y.UNPACK_IMAGE_HEIGHT),cs=Le.getParameter(Y.UNPACK_SKIP_PIXELS),xn=Le.getParameter(Y.UNPACK_SKIP_ROWS),Da=Le.getParameter(Y.UNPACK_SKIP_IMAGES);Le.pixelStorei(Y.UNPACK_ROW_LENGTH,Nt.width),Le.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Nt.height),Le.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ke),Le.pixelStorei(Y.UNPACK_SKIP_ROWS,at),Le.pixelStorei(Y.UNPACK_SKIP_IMAGES,ft);let Hi=T.isDataArrayTexture||T.isData3DTexture,hs=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){let vt=Qe.get(T),pn=Qe.get(W),Yn=Qe.get(vt.__renderTarget),Wt=Qe.get(pn.__renderTarget);Le.bindFramebuffer(Y.READ_FRAMEBUFFER,Yn.__webglFramebuffer),Le.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let cn=0;cn<Be;cn++)Hi&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qe.get(T).__webglTexture,ie,ft+cn),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qe.get(W).__webglTexture,Pe,Jt+cn)),Y.blitFramebuffer(Ke,at,Ke+Oe,at+De,Ze,_t,Ze+Oe,_t+De,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Le.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Le.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ie!==0||T.isRenderTargetTexture||Qe.has(T)){let vt=Qe.get(T),pn=Qe.get(W);Le.bindFramebuffer(Y.READ_FRAMEBUFFER,U),Le.bindFramebuffer(Y.DRAW_FRAMEBUFFER,X);for(let Yn=0;Yn<Be;Yn++)Hi?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,vt.__webglTexture,ie,ft+Yn):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,vt.__webglTexture,ie),hs?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,pn.__webglTexture,Pe,Jt+Yn):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,pn.__webglTexture,Pe),ie!==0?Y.blitFramebuffer(Ke,at,Ke+Oe,at+De,Ze,_t,Ze+Oe,_t+De,Y.COLOR_BUFFER_BIT,Y.NEAREST):hs?Y.copyTexSubImage3D(je,Pe,Ze,_t,Jt+Yn,Ke,at,Oe,De):Y.copyTexSubImage2D(je,Pe,Ze,_t,Ke,at,Oe,De);Le.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Le.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else hs?T.isDataTexture||T.isData3DTexture?Y.texSubImage3D(je,Pe,Ze,_t,Jt,Oe,De,Be,It,gn,Nt.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(je,Pe,Ze,_t,Jt,Oe,De,Be,It,Nt.data):Y.texSubImage3D(je,Pe,Ze,_t,Jt,Oe,De,Be,It,gn,Nt):T.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Pe,Ze,_t,Oe,De,It,gn,Nt.data):T.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Pe,Ze,_t,Nt.width,Nt.height,It,Nt.data):Y.texSubImage2D(Y.TEXTURE_2D,Pe,Ze,_t,Oe,De,It,gn,Nt);Le.pixelStorei(Y.UNPACK_ROW_LENGTH,Sn),Le.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,St),Le.pixelStorei(Y.UNPACK_SKIP_PIXELS,cs),Le.pixelStorei(Y.UNPACK_SKIP_ROWS,xn),Le.pixelStorei(Y.UNPACK_SKIP_IMAGES,Da),Pe===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&Y.generateMipmap(je),Le.unbindTexture()},this.initRenderTarget=function(T){Qe.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),Le.unbindTexture()},this.resetState=function(){N=0,j=0,O=null,Le.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var ju={type:"change"},vh={type:"start"},Ku={type:"end"},Il=new Zi,$u=new mn,o_=Math.cos(70*sh.DEG2RAD),ln=new Z,In=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,_r=class extends ua{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:es.ROTATE,MIDDLE:es.DOLLY,RIGHT:es.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new un,this._lastTargetPosition=new Z,this._quat=new un().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dr,this._sphericalDelta=new dr,this._scale=1,this._panOffset=new Z,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new Z,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=l_.bind(this),this._onPointerUp=h_.bind(this),this._onContextMenu=x_.bind(this),this._onMouseWheel=f_.bind(this),this._onKeyDown=p_.bind(this),this._onTouchStart=m_.bind(this),this._onTouchMove=g_.bind(this),this._onMouseDown=d_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=__.bind(this),this._interceptControlUp=y_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=wt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ju),this.update(),this.state=wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=In:n>Math.PI&&(n-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=ln.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Il.origin.copy(this.object.position),Il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Il.direction))<o_?this.object.lookAt(this.target):($u.setFromNormalAndCoplanarPoint(this.object.up,this.target),Il.intersectPlane($u,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(ju),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ln.copy(s).sub(this.target);let r=ln.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function l_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function h_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ku),this.state=wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function d_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case es.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case es.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(vh)}function u_(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function f_(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ku))}function p_(i){this.enabled!==!1&&this._handleKeyDown(i)}function m_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1){this.state=wt.NONE;break}this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1){this.state=wt.NONE;break}this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(vh)}function g_(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function x_(i){this.enabled!==!1&&i.preventDefault()}function __(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function y_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var As=class extends An{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new zt;e.deleteAttribute("uv");let t=new oe({side:rn}),n=new oe,s=new _s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Jn(e,n,6),o=new Ht;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ie(e,yr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ie(e,yr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let d=new Ie(e,yr(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new Ie(e,yr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Ie(e,yr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Ie(e,yr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function yr(i){return new la({color:0,emissive:16777215,emissiveIntensity:i})}var wa=new Z;function Xn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;wa.copy(e),wa[n]=0,wa.normalize();let c=.5*a/(a+o),d=1-wa.angleTo(i)/l;return Math.sign(wa[t])===1?d*c:o/(a+o)+c+c*(1-d)}var Dl=class i extends zt{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new Z,c=new Z,d=new Z(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,m=u.length/6,y=new Z,g=.5/a;for(let x=0,v=0;x<u.length;x+=3,v+=2)switch(l.fromArray(u,x),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[x+0]=d.x*Math.sign(l.x)+c.x*r,u[x+1]=d.y*Math.sign(l.y)+c.y*r,u[x+2]=d.z*Math.sign(l.z)+c.z*r,f[x+0]=c.x,f[x+1]=c.y,f[x+2]=c.z,Math.floor(x/m)){case 0:y.set(1,0,0),p[v+0]=Xn(y,c,"z","y",r,n),p[v+1]=1-Xn(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),p[v+0]=1-Xn(y,c,"z","y",r,n),p[v+1]=1-Xn(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),p[v+0]=1-Xn(y,c,"x","z",r,e),p[v+1]=Xn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),p[v+0]=1-Xn(y,c,"x","z",r,e),p[v+1]=1-Xn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),p[v+0]=1-Xn(y,c,"x","y",r,e),p[v+1]=1-Xn(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),p[v+0]=Xn(y,c,"x","y",r,e),p[v+1]=1-Xn(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Mh=Math.PI/180,b_=(i,e,t)=>new un().setFromEuler(new Vn(i*Mh,e*Mh,t*Mh)),Q=(i,e,t)=>new Z(i,e,t);function Fl(i,e,t=1,n=60){let s=document.createElement("canvas");s.width=1024,s.height=256;let r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,1024,256);let a=t,o=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<n;c++){let d=o()*256,u=4+o()*10,f=.004+o()*.008,p=o()*6;r.strokeStyle=e,r.globalAlpha=.12+o()*.3,r.lineWidth=.6+o()*2.2,r.beginPath();for(let m=0;m<=1024;m+=8){let y=d+Math.sin(m*f+p)*u+Math.sin(m*f*3.1+p)*u*.25;m?r.lineTo(m,y):r.moveTo(m,y)}r.stroke()}r.globalAlpha=.05;for(let c=0;c<1600;c++)r.fillStyle=o()<.5?e:"#fff",r.fillRect(o()*1024,o()*256,6+o()*14,1);let l=new Rn(s);return l.wrapS=l.wrapT=Yi,l.colorSpace=nn,l.anisotropy=8,l}var b={beech:new oe({map:Fl("#DDAA6A","#A8682E",3,80),roughness:.7}),beechDark:new oe({map:Fl("#C48A4E","#7E4A1E",7,50),roughness:.55}),rose:new oe({map:Fl("#5E2C1E","#2A100A",11,60),roughness:.42}),steel:new oe({color:12107978,metalness:.85,roughness:.32}),steelDark:new oe({color:9279139,metalness:.85,roughness:.35}),iron:new oe({color:2898511,metalness:.4,roughness:.45}),brass:new oe({color:13805126,metalness:.95,roughness:.3}),yellow:new oe({color:15909198,roughness:.45}),pink:new oe({color:15900840,roughness:.8}),graphite:new oe({color:3816e3,roughness:.5,metalness:.3}),pencilWood:new oe({color:15189914,roughness:.8}),line:new Ci({color:4012612}),kerf:new oe({color:3810326,roughness:1}),claret:new oe({color:9054789,roughness:.5})};function cf(i=30){let e=document.createElement("canvas");e.width=2048,e.height=160;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,160);n.addColorStop(0,"#e9ecef"),n.addColorStop(1,"#c7cdd4"),t.fillStyle=n,t.fillRect(0,0,2048,160),t.fillStyle="#24272d";let s=2048/i;for(let a=0;a<=i*10;a++){let o=a*s/10,l=a%10===0?60:a%5===0?42:26;t.fillRect(o,0,2,l)}t.font="bold 30px Arial";for(let a=1;a<i;a++)t.fillText(a,a*s-8,96);let r=new Rn(e);return r.colorSpace=nn,r.anisotropy=8,r}function v_(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.strokeStyle="rgba(55,52,62,.85)",e.lineWidth=5;for(let n=-256;n<512;n+=34)e.beginPath(),e.moveTo(n,256),e.lineTo(n+256,0),e.stroke();let t=new Rn(i);return t.colorSpace=nn,t}var _2=v_(),os=i=>(i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i);function Ih(){let i=new We,e=new ht;e.moveTo(-15,-1.25),e.lineTo(15,-1.25),e.absarc(15,0,1.25,-Math.PI/2,Math.PI/2,!1),e.lineTo(-15,1.25),e.closePath(),e.holes.push(new kt().absarc(15.35,0,.38,0,Math.PI*2,!0));let t=new Gt(e,{depth:.08,bevelEnabled:!1,curveSegments:24});t.translate(0,0,-.04),t.rotateX(-Math.PI/2);let n=t.attributes.position,s=t.attributes.uv;for(let o=0;o<n.count;o++)s.setXY(o,(n.getX(o)+15)/30,(-n.getZ(o)+1.25)/2.5);let r=cf();r.wrapS=zn;let a=new oe({map:r,metalness:.65,roughness:.25});return i.add(new Ie(t,[a,b.steel])),os(i)}function M_(){let i=new We,e=new Ie(new $i(.11,.35,12),b.graphite);e.rotation.x=Math.PI,e.position.y=.175;let t=new Ie(new Et(.35,.11,.9,6),b.pencilWood);t.position.y=.35+.45;let n=new Ie(new Et(.35,.35,8,6),b.yellow);n.position.y=1.25+4;let s=new Ie(new Et(.37,.37,.6,16),b.steel);s.position.y=9.55;let r=new Ie(new Et(.34,.34,.5,16),b.pink);return r.position.y=10.1,i.add(e,t,n,s,r),os(i)}function Dh(){let i=new We,e=new Ie(new zt(11.5,1.8,2.6),b.rose);e.position.set(5.75,0,1.3);let t=new Ie(new zt(11.5,1.5,.1),b.brass);t.position.set(5.75,0,.05);let n=[b.steel,b.steel,new oe({map:cf(15),metalness:.55,roughness:.35}),b.steel,b.steel,b.steel],s=new zt(2.4,.15,15.6),r=s.attributes.uv,a=new Ie(s,n);a.position.set(1.2,0,-7.2),n[2].map.center.set(.5,.5),n[2].map.rotation=Math.PI/2,i.add(e,t,a);for(let[o,l]of[[.7,.9],[1.7,1.8],[.7,2]]){let c=new Ie(new Et(.2,.2,1.84,16),b.brass);c.position.set(o,0,l),i.add(c)}for(let o of[5.5,9.5]){let l=new Ie(new Et(.16,.16,1.84,16),b.brass);l.position.set(o,0,1.3),i.add(l)}return os(i)}function Wl(){let i=new We,e=new Ie(new zt(6,1.8,3.6),b.beechDark);e.position.set(0,.9,.3);let t=new Ie(new zt(6,.06,3.6),b.brass);t.position.set(0,.03,.3);let n=new Ie(new zt(1.3,15.5,1.3),b.beech);n.position.set(0,-1.4+7.75,.75);let s=new Ie(new $i(.12,.5,12),b.steel);s.rotation.x=-Math.PI/2,s.position.set(0,-1,-.15),i.userData.pin=s;let r=new Ie(new Et(.22,.22,.9,16),b.steel);r.rotation.z=Math.PI/2,r.position.set(3.4,.9,.75);let a=new Ie(new Zt(1,24,16),new oe({color:15909166,roughness:.35}));a.scale.set(.32,1.05,.75),a.position.set(4.15,.9,.75);let o=new Ie(new Et(.4,.4,.35,20),new oe({color:15909166,roughness:.35}));return o.rotation.z=Math.PI/2,o.position.set(3.75,.9,.75),i.add(e,t,n,s,r,o,a),os(i)}function Lh(){let i=new We,e=new ht;e.moveTo(0,8),e.lineTo(0,.3);for(let u=0;u<62;u++)e.lineTo(u*.4+.2,-.05),e.lineTo(u*.4+.4,.3);e.lineTo(25,8),e.closePath();let t=new Ie(new Gt(e,{depth:.06,bevelEnabled:!1}),b.steel);t.position.z=-.03;let n=new Ie(new zt(25.4,1.3,.45),b.brass);n.position.set(12.6,8.1,0);let s=[[22.5,9.4],[24.8,12.2],[26.4,12.9],[27.9,12.1],[31.7,7.4],[33.9,2.2],[33.1,.5],[30.5,.3],[27.4,2.5],[24.6,3.2],[22.5,3.6]],r=new ht;s.forEach(([u,f],p)=>p?r.lineTo(u,f):r.moveTo(u,f)),r.closePath();let a=[[25.9,4.6],[28.3,3.3],[30.1,4.3],[29,8.5],[27.5,10.1],[26,9.3],[25.6,6.8]],o=new kt;a.forEach(([u,f],p)=>p?o.lineTo(u,f):o.moveTo(u,f)),o.closePath(),r.holes.push(o);let l=new Gt(r,{depth:1.45,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:1});l.translate(0,0,-.725);let c=l.attributes.uv;for(let u=0;u<c.count;u++)c.setXY(u,c.getX(u)/14,c.getY(u)/14);let d=new Ie(l,b.beechDark);i.add(t,n,d);for(let[u,f]of[[23.8,6.6],[25.4,3.6]]){let p=new Ie(new Et(.35,.35,2,16),b.brass);p.rotation.x=Math.PI/2,p.position.set(u,f,0),i.add(p)}return os(i)}function Nh(){let i=new We,e=.38,t=7.7,n=new ht;n.moveTo(-.9,0),n.lineTo(.9,0),n.lineTo(.9,-.07),n.lineTo(.6,-e),n.lineTo(-.6,-e),n.lineTo(-.9,-.07),n.closePath();let s=new Gt(n,{depth:t,steps:7,bevelEnabled:!1});s.rotateX(-Math.PI/2);let r=s.attributes.position;for(let u=0;u<r.count;u++){let f=r.getY(u),p=r.getZ(u);r.setZ(u,Math.min(p,e*Math.max(0,f)/1.1))}s.computeVertexNormals();let a=new Ie(s,b.steel),o=new Ie(new Et(.22,.3,.8,12),b.steel);o.position.set(0,8,e/2);let l=new Ie(new Et(.6,.6,.9,20),b.brass);l.position.set(0,8.8,e/2);let c=[[.6,9.2],[.78,10],[.92,12.5],[.88,15],[.7,16.4],[.3,16.8],[0,16.85]].map(([u,f])=>new be(u,f)),d=new Ie(new ui(c,28),b.beechDark);return d.position.z=e/2,i.add(a,o,l,d),os(i)}function Fh(){let i=new We,e=new Ie(new zt(4.2,5.2,9.5),b.beech),t=new Ie(new zt(1.2,23.2,2.2),b.beechDark);return t.position.y=-20+23.2/2,i.add(e,t),os(i)}function S_(){let i=new We,e=new sn([Q(0,0,0),Q(0,6.2,0),Q(.8,7.6,0),Q(2.5,8,0),Q(11,8,0),Q(12.7,7.6,0),Q(13.5,6.2,0),Q(13.5,0,0)]);i.add(new Ie(new Tn(e,60,.22,10),new oe({color:6054765,metalness:.75,roughness:.4})));let t=new Ie(new zt(13.5,.25,.03),new oe({color:15133422,metalness:.95,roughness:.12}));t.position.set(6.75,.1,0),i.add(t);let n=[[.3,0],[.65,-.8],[.75,-3],[.7,-6.5],[.5,-7.6],[0,-7.7]].map(([r,a])=>new be(r,a)),s=new Ie(new ui(n,24),new oe({color:3108800,roughness:.9}));return s.rotation.z=-Math.PI/2,s.position.set(-.1,.1,0),i.add(s),os(i)}function hf(){return Oh(24,5.8,"smooth")}function Is(i,e=256,t=[1,1]){let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d");i(s,e);let r=new Rn(n);return r.wrapS=r.wrapT=Yi,r.repeat.set(...t),r.colorSpace=nn,r}var Ju=Is((i,e)=>{i.fillStyle="#c9ced6",i.fillRect(0,0,e,e),i.strokeStyle="#6f7783",i.lineWidth=3;for(let t=-e;t<2*e;t+=16)i.beginPath(),i.moveTo(t,0),i.lineTo(t+e,e),i.stroke(),i.beginPath(),i.moveTo(t,e),i.lineTo(t+e,0),i.stroke()},256,[3,3]),E_=Is((i,e)=>{i.fillStyle="#8a929c",i.fillRect(0,0,e,e),i.strokeStyle="#5d646d",i.lineWidth=2;for(let t=-e;t<2*e;t+=7)i.beginPath(),i.moveTo(t,0),i.lineTo(t+e*.5,e),i.stroke();i.strokeStyle="rgba(220,226,232,.5)",i.lineWidth=1;for(let t=-e;t<2*e;t+=11)i.beginPath(),i.moveTo(t,e),i.lineTo(t+e*.7,0),i.stroke()},256,[4,1]),w_=Is((i,e)=>{i.fillStyle="#efe6d0",i.fillRect(0,0,e,e),i.strokeStyle="#c9b994";for(let t=4;t<e*.75;t+=9)i.lineWidth=2+Math.random()*2,i.beginPath(),i.arc(e/2,e/2,t,0,7),i.stroke()});Object.assign(b,{knurl:new oe({map:Ju,metalness:.8,roughness:.4}),file:new oe({map:E_,metalness:.7,roughness:.55}),blue:new oe({color:3105456,roughness:.35,metalness:.1}),red:new oe({color:13120058,roughness:.4}),orange:new oe({color:15235114,roughness:.4}),yellowP:new oe({color:15906354,roughness:.3}),black:new oe({color:2500652,roughness:.65}),hide:new oe({color:15524552,roughness:.85}),hideEnd:new oe({map:w_,roughness:.85}),viceBlue:new oe({color:2906784,metalness:.35,roughness:.5}),castGrey:new oe({color:6977156,metalness:.5,roughness:.5}),leather:new oe({color:7027486,roughness:.8}),gold:new oe({color:13212220,metalness:.9,roughness:.3}),goldSharp:new oe({color:13607498,metalness:.9,roughness:.28,flatShading:!0}),steelShiny:new oe({color:14278372,metalness:1,roughness:.12}),steelDull:new oe({color:10068137,metalness:.7,roughness:.45}),knurlDull:new oe({map:Ju,color:11580602,metalness:.65,roughness:.5}),blackMetal:new oe({color:2764082,metalness:.45,roughness:.45}),blackOxide:new oe({color:3816770,metalness:.6,roughness:.5}),dotRed:new oe({color:13775676,roughness:.5}),dotBlue:new oe({color:3105456,roughness:.5})});var Ge=(i,e)=>{let t=new Ie(i,e);return t.castShadow=t.receiveShadow=!0,t},h=(i,e=0,t=0,n=0,s=0,r=0,a=0)=>(i.position.set(e,t,n),i.rotation.set(s,r,a),i),D=(i,e,t,n,s=28)=>Ge(new Et(i,e,t,s),n),P=(i,e,t,n)=>Ge(new zt(i,e,t),n),pe=(i,e,t,n,s)=>Ge(new Dl(i,e,t,3,n),s),fn=(i,e,t=32)=>Ge(new ui(i.map(([n,s])=>new be(n,s)),t),e),Uh=i=>{let e=new ht;return i.forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e},Ot=(i,e,t,n=0)=>{let s=new Gt(Array.isArray(i)?Uh(i):i,{depth:e,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:24});s.translate(0,0,-e/2);let r=s.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)/12,r.getY(a)/12);return Ge(s,t)},ai=(i,e,t,n=80)=>Ge(new Tn(new sn(i.map(s=>Q(...s))),n,e,12),t),de=(...i)=>{let e=new We;return i.length&&e.add(...i),e},T_=i=>(i.rotation.z=-Math.PI/2,i);function A_(){return de(h(P(8,1.4,1.8,b.steelShiny),4,0,.9),h(P(1.4,.16,11,b.steelShiny),.7,0,-5.5),h(P(.4,.6,.4,b.steelDark),.2,0,.2))}function R_(){let i=Wl();i.children.forEach(t=>{(t.material===b.beechDark||t.material===b.beech)&&(t.material=b.rose)});let e=i.userData.pin.clone();return e.position.y=-1.8,i.add(e),i.add(h(P(.5,15,.12,b.brass),0,6.35,1.42),h(D(.35,.35,1,b.brass),0,14.6,.75),h(D(.55,.55,.3,b.knurl),0,15.2,.75)),i}function df(){return de(fn([[0,0],[.06,.6],[.12,2.2],[.14,4],[0,4]],b.steelDull),h(D(.2,.2,6.4,b.knurlDull),0,7.2),h(D(.2,.2,.04,b.dotRed),0,10.42))}function C_(){return de(fn([[0,0],[.15,.35],[.36,1.6],[.42,2.4],[.42,9.7],[0,9.7]],b.steelDull),h(D(.45,.45,4.6,b.knurlDull),0,5.4),h(D(.42,.42,.04,b.dotRed),0,9.72))}function P_(){return de(fn([[0,.08],[.07,0],[.1,.05],[.1,.9],[.38,3.6],[.38,9.4],[.3,9.8],[0,9.85]],b.blackOxide),h(D(.4,.4,3.6,b.knurl),0,6.4))}function I_(){let i=de(),e=r=>{let a=.3*r,o=2.6*r-a,l=Math.hypot(o,12.6),c=D(.22,.05,l,b.steel,16);return c.position.set(a+o/2,12.85-12.6/2,0),c.rotation.z=Math.atan2(o,12.6),c},t=.34,n=new ht;n.absarc(0,0,1,-Math.PI/2+t,Math.PI*1.5-t,!1),n.absarc(0,0,.86,Math.PI*1.5-t,-Math.PI/2+t,!0),n.closePath();let s=Ot(n,.55,b.steel);return s.position.set(0,13.8,0),i.add(e(1),e(-1),s,h(D(.17,.17,1.3,b.knurl),0,15.4)),i.add(h(D(.06,.06,4.6,b.steelDark),0,7,0,0,0,Math.PI/2),h(D(.5,.5,.45,b.knurl),2.15,7,0,0,0,Math.PI/2)),i}function D_(){let i=e=>ai([[.22*e,13],[1.1*e,11],[2.5*e,7.2],[3.1*e,4],[2.7*e,1.5],[1.4*e,.25],[.3*e,0]],.17,b.steel);return de(i(1),i(-1),h(D(.75,.75,.35,b.steel),0,13.2,0,Math.PI/2),h(D(.25,.25,.5,b.steelDark),0,13.2,0,Math.PI/2))}function L_(){return de(ai([[.25,13],[.9,6],[1.25,.6]],.17,b.steel),h(fn([[0,0],[.1,.5],[.17,.9]],b.steel),1.28,0,0,0,0,.05),ai([[-.25,13],[-1.1,5],[-1.35,1.2],[-1.1,.45],[-.5,.3]],.17,b.steel),h(D(.75,.75,.35,b.steel),0,13.2,0,Math.PI/2),h(D(.25,.25,.5,b.steelDark),0,13.2,0,Math.PI/2))}function uf(){let i=Uh([[2.4,9.6],[-4,9.6],[-6.4,7.2],[-6.8,2.4],[-5.2,.7],[2.4,.7]]);i.holes.push(new kt([[-4.4,2.1],[.9,2.1],[.9,8.2],[-3.6,8.2],[-5.1,6.6],[-5.3,3.4]].map(([t,n])=>new be(t,n))));let e=Ot(i,1.6,b.yellowP,.25);return de(ai([[30.5,.6],[30.6,8],[29.4,9.6],[4.2,9.6],[2.4,9.6]],.55,b.black),e,h(P(28.6,1.2,.06,b.steelShiny),16.2,1.3,0),h(D(.45,.45,.5,b.steel),30.6,1.3,0,Math.PI/2),h(P(1.4,.5,.15,b.steel),31.6,1.3,0))}function N_(){let i=new oe({color:14211548,roughness:.5,metalness:.1}),t=ai([[0,.25,0],[.3,1.5,0],[1.4,5.7,0],[2.5,6.6,0],[7,6.6,0],[11.4,6.6,0],[12.8,6.1,0],[13.6,4.8,0],[14.3,2.4,0],[15.1,.2,.18],[15.8,-.9,.3],[16.9,-1.4,.2],[19.5,-1.5,0],[21.9,-1.45,0],[23,-1,0],[23.35,-.4,0],[23,.2,0],[21.9,.62,0],[19.5,.66,0],[17.1,.56,-.15],[16,.38,-.3],[15.3,.27,-.15],[15,.25,0]],.3,i,260),n=s=>h(D(.42,.42,.95,i,20),s,.2,0);return de(t,n(0),n(15),h(P(14.6,.85,.05,new oe({color:3817286,metalness:.6,roughness:.4})),7.5,-.25,0))}var ff=new oe({map:Fl("#5c3b26","#2e1b10",31,60),roughness:.5});function F_(){let i=new ht;i.moveTo(0,0),i.lineTo(.95,1.6),i.lineTo(.95,9),i.lineTo(0,9),i.closePath();let e=new Gt(i,{depth:.6,bevelEnabled:!1});return e.translate(-.47,0,-.3),e.rotateY(Math.PI/2),de(Ge(e,b.steel),h(D(.75,.75,.5,b.steel),0,9.25),h(D(.85,.85,.3,b.leather),0,9.65),h(fn([[.85,9.8],[1.05,11],[1.15,15],[1.05,19],[.9,20],[0,20.1]],ff),0,0,0))}var kh=(i=b.beechDark)=>{let e=fn([[.75,.6],[.8,-4],[.95,-18],[1.05,-24],[.95,-27.5],[0,-27.8]],i);return e.scale.z=.72,e},U_=(i=b.steelDark)=>{let e=fn([[0,3.6],[.98,3.6],[1.02,3.42],[.78,2.6],[.68,1.8],[.92,1.05],[.95,-.9],[.7,-1.6],[.5,-2.2],[.55,-2.6],[0,-2.6]].reverse(),i,40);return e.rotation.z=-Math.PI/2,e};function k_(){return de(U_(),h(Ge(new Zt(1,32,20),b.steelDark),-3.4,0,0),kh())}function O_(){let i=fn([[0,3.6],[.98,3.6],[1.02,3.42],[.78,2.6],[.68,1.8],[.92,1.05],[.95,0],[0,0]].reverse(),b.steelDark,40);i.rotation.z=-Math.PI/2;let e=Ot([[0,-.95],[0,.95],[-3.6,.14],[-3.6,-.14]],1.8,b.steelDark);return de(i,e,kh())}function pf(){let i=e=>h(Ot(new ht().moveTo(0,.95).quadraticCurveTo(-3,1.25,-5.4,-2.1).lineTo(-5.25,-2.25).quadraticCurveTo(-2.9,-.35,0,-.9),.42,b.steelDark),0,0,.38*e);return de(h(D(1,1,3.4,b.steelDark),1.7,0,0,0,0,Math.PI/2),i(1),i(-1),h(D(.85,.85,1.2,b.steelDark),0,-.3,0),h(fn([[.7,-.5],[.72,-12],[0,-12.1]],b.yellowP),0,0,0),h(fn([[.95,-11],[1.05,-17],[1.1,-26],[.95,-27.5],[0,-27.7]],b.black),0,0,0))}function B_(){let i=D(1.7,1.7,7.5,b.hide,36);return i.material=[b.hide,b.hideEnd,b.hideEnd],h(i,0,0,0,0,0,Math.PI/2),de(i,h(D(1.75,1.75,2.4,b.castGrey,36),0,0,0,0,0,Math.PI/2),kh(b.beech))}function Oh(i=24,e=5.8,t){let n=new oe({color:11740718,metalness:.35,roughness:.4}),s=t==="jack"?n:t==="smooth"?b.steel:b.iron,r=t==="jack"?n:t==="smooth"?b.blackMetal:b.iron,a=t?b.steelShiny:b.iron,o=de(),l=P(i,.6,e,a);l.position.y=.3;let c=P(i-2,3.4,.35,r);c.position.set(0,2.2,e/2-.18);let d=c.clone();d.position.z=-e/2+.18;let u=P(4,2,e-.8,s);h(u,-1.5,1.6,0,0,0,.75);let f=P(10,.25,e-1.2,b.steel);h(f,-1.6,3.6,0,0,0,.75);let p=pe(7,.6,e-1.4,.25,s);h(p,-.8,3.8,0,0,0,.75);let m=P(1.2,.5,1.4,b.steel);h(m,-2.4,5.2,0,0,0,.75);let y=new ht;y.moveTo(0,0),y.lineTo(4.5,0),y.bezierCurveTo(5,4,5.5,7,4,8.3),y.bezierCurveTo(3,9,1.6,8.5,1.8,7),y.bezierCurveTo(2,5,1,2.5,0,1.2),y.closePath();let g=Ot(y,1.8,b.beechDark,.2);g.scale.x=-1,g.position.set(-i/2+4.5,.6,0);let x=fn([[0,0],[1.3,0],[1.5,1.2],[1.2,2.6],[.6,3.2],[0,3.3]],b.beechDark);return x.position.set(i/2-3.5,.6,0),o.add(l,c,d,u,f,p,m,g,x,h(D(.45,.45,.4,b.brass),-i/2+6.2,2,0,0,0,Math.PI/2)),o}function mf(){return Oh(36,6.2,"jack")}function H_(){let i=Oh(21,3.6);return i.add(h(D(.22,.22,9,b.steel),4,1.2,5.5,Math.PI/2),h(D(.22,.22,9,b.steel),-4,1.2,5.5,Math.PI/2),h(pe(15,2.6,.9,.2,b.iron),0,1.3,9.6),h(P(1.2,1.4,.5,b.brass),6,1.2,-2.1)),i}var Sh=new oe({color:3112271,metalness:.35,roughness:.4});function z_(){let i=de(),e=P(20,4.5,.5,Sh);e.position.set(0,2.6,0);let t=pe(9,4,1.6,.3,Sh);t.position.set(-1,3.4,.9);let n=new ht;n.moveTo(0,0),n.lineTo(4.5,0),n.bezierCurveTo(5,4,5.5,7,4,8.3),n.bezierCurveTo(3,9,1.6,8.5,1.8,7),n.bezierCurveTo(2,5,1,2.5,0,1.2),n.closePath();let s=Ot(n,1.6,b.beechDark,.2);s.scale.x=-1,s.position.set(-4,4.6,1);let r=P(.5,6,.4,b.steel);return h(r,1.5,4,0,0,0,.5),i.add(e,t,s,r,h(D(.25,.25,10,b.steel),5,2.4,5,Math.PI/2),h(D(.25,.25,10,b.steel),-6,2.4,5,Math.PI/2),h(pe(17,3.4,.8,.2,Sh),0,2.2,8.8),h(D(.4,.4,.5,b.brass),5,2.4,1.1,Math.PI/2),h(D(.4,.4,.5,b.brass),-6,2.4,1.1,Math.PI/2)),i}function Bh(i,e,t,n=2,s=.45,r=0){let a=new Et(i,i,e,64,Math.round(e*24),!1),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l),d=o.getY(l),u=o.getZ(l),f=Math.atan2(u,c),p=Math.hypot(c,u);if(p<1e-6)continue;let m=(d+e/2)/e,y=1-s*Math.pow(Math.max(0,Math.cos(n/2*2*(f-m*t*Math.PI*2))),3);r&&(y*=1-.07*(.5+.5*Math.sin(f+d*Math.PI*2/r))),o.setX(l,c/p*p*y),o.setZ(l,u/p*p*y)}return a.computeVertexNormals(),a}function gf(){return de(h(D(.32,.32,4.5,b.gold),0,2.25),h(Ge(Bh(.32,7.2,1.6),b.gold),0,8.1),h(D(.32,0,.25,b.gold),0,11.83,0,Math.PI))}function G_(){let i=new oe({color:2961461,metalness:.6,roughness:.45,side:en}),e=(o,l,c,d)=>de(Ge(new ui([[1.82,o],[2,o],[2,l],[1.97,l],[1.82,l-.38],[1.82,o]].map(([u,f])=>new be(u,f)),56,c,d),b.steelShiny),Ge(new ui([[1.815,o+.02],[1.815,Math.max(o+.03,l-.4)]].map(([u,f])=>new be(u,f)),56,c,d),i)),t=de(h(D(.3,.3,1.6,b.steel),0,.8),h(D(.26,.26,.25,b.blackOxide),0,1.72),h(D(.48,.48,2.2,b.steel),0,2.95),h(D(.44,.44,.35,b.blackOxide),0,4.22),h(D(1.97,1.97,.28,b.steel,64),0,4.53),h(D(1.82,1.82,.04,i,48),0,4.69)),n=.36,s=Math.PI/2;t.add(e(4.4,6,s+n,Math.PI-2*n),e(4.4,6,3*s+n,Math.PI-2*n)),t.add(e(4.4,5.1,s-n*.15,n*.15+.02),e(4.4,5.1,3*s-n*.15,n*.15+.02));let r=new ht;r.moveTo(-.7,0),r.lineTo(.7,0),r.lineTo(0,1.38),r.closePath();let a=new Ie(new Gt(r,{depth:4,bevelEnabled:!1}),[b.steelShiny,i]);return a.geometry.translate(0,0,-2),a.geometry.rotateY(Math.PI/2),a.position.y=4.62,a.castShadow=!0,t.add(a,h(D(0,.13,.45,b.steelShiny,16),0,6.2)),t}function V_(){let i=new $i(1.2,1.1,60,6),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getZ(t),r=Math.atan2(s,n);if(Math.hypot(n,s)<1e-6)continue;let o=(r/(2*Math.PI/5)%1+1)%1,l=1-.28*Math.min(1,o*3.5);e.setX(t,n*l),e.setZ(t,s*l)}return i.computeVertexNormals(),de(h(D(.33,.33,5,b.gold),0,3.6),h(Ge(i,b.goldSharp),0,.55,0,Math.PI),h(D(1.2,1.2,.14,b.gold,60),0,1.17),h(D(.4,.9,.35,b.gold),0,1.41))}function W_(){let i=e=>{let t=de(fn([[.5,0],[.17,.34],[0,.34]],b.steel,32),h(Ge(Bh(.17,.5,.35,2,.35),b.steel),0,.59),h(D(0,.17,.13,b.steel,24),0,.9));return t.position.y=1.8*e,e<0&&(t.rotation.x=Math.PI),t};return de(D(.5,.5,3.6,b.knurl),i(1),i(-1))}function xf(i=b.red){return T_(h(fn([[.6,0],[.9,1],[1,7],[.85,9],[0,9.2]],i),-10.5,0,0))}function _f(){let i=Uh([[0,-1.1],[18,-1.1],[20,-.55],[20,.55],[18,1.1],[0,1.1]]),e=Ot(i,.45,b.file);return h(e,0,0,0,Math.PI/2),de(e,h(P(3,.3,.5,b.steelDark),-1.5,0,0),xf())}function X_(){let i=new ht;i.moveTo(-1.1,0),i.lineTo(1.1,0),i.quadraticCurveTo(1.05,.9,0,.95),i.quadraticCurveTo(-1.05,.9,-1.1,0);let e=new Gt(i,{depth:20,steps:20,bevelEnabled:!1,curveSegments:16}),t=e.attributes.position;for(let s=0;s<t.count;s++){let r=t.getZ(s),a=r>15?1-(r-15)/5*.55:1;t.setX(s,t.getX(s)*a),t.setY(s,t.getY(s)*a)}let n=e.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,t.getZ(s)/5,t.getX(s)/2);return e.rotateY(Math.PI/2),e.computeVertexNormals(),de(h(Ge(e,b.file),0,-.25,0),h(P(3,.3,.5,b.steelDark),-1.5,0,0),xf(b.blue))}function q_(){let i=new ht;i.absarc(-5.5,0,3.4,Math.PI/2,Math.PI*1.5,!1),i.lineTo(5.5,-3.4),i.absarc(5.5,0,3.4,-Math.PI/2,Math.PI/2,!1),i.closePath(),i.holes.push(new kt().absarc(0,0,1.3,0,Math.PI*2,!0));let e=Ot(i,.9,b.iron,.15);h(e,0,.45,0,Math.PI/2);let t=n=>h(fn([[0,0],[1.2,0],[1.5,1.5],[1.3,3],[.7,3.8],[0,3.9]],b.beechDark),n,.9);return de(e,t(-6),t(6),h(D(.35,.35,7,b.steel),0,4.4),h(D(.75,.75,.6,b.knurl),0,5),h(P(.5,2.6,.5,b.steel),0,-.4),h(P(1.2,.3,.6,b.steel),.4,-1.6))}function yf(){let i=s=>{let r=new ht;r.moveTo(-1,.05*s),r.lineTo(.95,.05*s),r.absarc(1.3,.05*s,.35,Math.PI,0,s<0),r.lineTo(3.8,.05*s),r.lineTo(3.95,.28*s),r.lineTo(2.5,.62*s),r.lineTo(.5,.9*s),r.lineTo(-1,.85*s),r.closePath();let a=de(Ot(r,.8,b.steelDark));for(let o=0;o<9;o++)a.add(h(P(.07,.09,.8,b.steel),2+o*.2,.06*s,0));return a.add(h(P(.6,.07,.82,b.steelShiny),.6,.05*s,0)),a},e=s=>ai([[-1,.35*s],[-3.5,1*s],[-6.5,1.5*s],[-9.5,2*s]],.48,b.red),t=de(h(i(1),0,0,-.2),e(-1)),n=de(h(i(-1),0,0,.2),e(1));return t.rotation.z=.11,n.rotation.z=-.11,de(t,n,h(D(.55,.55,1.1,b.steel),0,0,0,Math.PI/2))}function Y_(){let i=new oe({color:10274536,roughness:.45}),e=a=>{let o=new ht;o.moveTo(1.6,-.3*a),o.lineTo(-9.6,-.04*a),o.quadraticCurveTo(-7.2,2.1*a,-1.6,2*a),o.lineTo(1.4,1.75*a),o.lineTo(3.4,1*a),o.lineTo(3.4,-.3*a),o.closePath();let l=de(Ot(o,.34,b.steel,.04)),c=new ht;return c.moveTo(-9.4,0),c.lineTo(.8,-.18*a),c.lineTo(.8,.42*a),c.lineTo(-8.6,.32*a),c.closePath(),l.add(h(Ot(c,.02,b.steelShiny),0,0,.2*a)),l.add(h(pe(2.2,.62,.06,.25,b.steelDark),-4.6,.95*a,.2*a,0,0,.08*a)),l},t=(a,o)=>{let l=new sn(a.map(([y,g])=>Q(y,g,0)),!1,"centripetal"),c=90,d=.95,u=l.getSpacedPoints(c),f=[],p=[];for(let y=0;y<=c;y++){let g=l.getTangentAt(y/c),x=y>c-12?.75:1;f.push(new be(u[y].x-g.y*d*x/2,u[y].y+g.x*d*x/2)),p.push(new be(u[y].x+g.y*d*x/2,u[y].y-g.x*d*x/2))}let m=new ht([...f,...p.reverse()]);return h(Ot(m,.55,i,.12),0,0,.2*o)},n=t([[2.6,.75],[6,1.15],[12,1.7],[19,2.3],[21.4,2.55],[22.1,2.25],[22.2,1.85]],1),s=t([[2.6,-.75],[6,-1.35],[12,-2.15],[19,-2.95],[21.4,-3.2],[22.1,-2.9],[22.2,-2.45]],-1),r=Ge(new Zt(.55,24,12,0,Math.PI*2,0,Math.PI/2),b.steelShiny);return r.rotation.x=Math.PI/2,r.scale.set(1,.45,1),r.position.set(0,0,.42),de(h(e(1),0,0,.18),h(e(-1),0,0,-.18),n,s,r,h(D(.5,.5,.1,b.steel),0,0,-.42,Math.PI/2),h(pe(.7,1.4,.5,.15,i),4.6,-.15,0),h(D(.12,.12,.9,b.steel),4.6,.45,0,Math.PI/2))}function Z_(){let i=pe(5,3.2,2.2,.4,b.castGrey);i.position.set(0,0,0);let e=de(h(D(.6,.45,2,b.steel),3.4,.6,0,0,0,Math.PI/2),h(D(.18,.18,.6,b.steel),4.6,.6,0,0,0,Math.PI/2),h(D(.1,.1,.03,b.black,16),4.91,.6,0,0,0,Math.PI/2)),t=Ot([[-2.2,-1],[-.6,-1],[-2.6,-13],[-4.2,-12.6]],1.8,b.castGrey,.2),n=Ot([[-2.9,-6],[-1.5,-6.3],[-2.6,-13],[-4.2,-12.6]],2.1,b.black,.25),s=Ot([[1.6,1.2],[2.6,.4],[1.8,-12.5],[.3,-12.2]],1.4,b.castGrey,.2),r=Ot([[1.9,-5.8],[1.8,-12.5],[.3,-12.2],[.6,-5.6]],1.7,b.red,.25),a=de(h(D(.06,.06,2.6,b.steelShiny,12),-1.3,0,0,0,0,Math.PI/2),h(D(.24,.24,.06,b.steel,20),.03,0,0,0,0,Math.PI/2),h(D(.12,.12,.55,b.steel,16),.33,0,0,0,0,Math.PI/2),h(D(.1,.1,.1,b.steel,12),.62,0,0,0,0,Math.PI/2));a.position.set(5,.6,0);let o=de(i,e,t,n,s,r,h(D(.35,.35,2.6,b.steel),1.8,.9,0,Math.PI/2),a);return o.userData.anim=l=>{let c=l%4/4,d=f=>f*f*(3-2*f),u;c<.3?u=9-4.05*d(c/.3):c<.5?u=4.95:c<.8?u=4.95+4.05*d((c-.5)/.3):u=9,a.position.x=u},o}function Bl(i){let e=fn([[.7,0],[1.15,.8],[1.3,4],[1.25,8],[1.05,9.6],[0,9.9]],i?b.red:b.yellowP,8),t;if(i){let n=new ui([[0,-1.2],[.28,-.3],[.28,0]].map(([r,a])=>new be(r,a)),48),s=n.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getZ(r),l=Math.atan2(o,a),c=.32+.68*Math.pow(Math.abs(Math.cos(2*l)),8);s.setX(r,a*c),s.setZ(r,o*c)}n.computeVertexNormals(),t=h(Ge(n,b.steelDark),0,-12.15,0)}else t=h(P(.55,1.2,.12,b.steelDark),0,-12.6);return de(e,h(D(.75,.75,.5,b.steel),0,-.1),h(D(.28,.28,12,b.steelDark),0,-6.2),t)}function j_(){let i=new sn([[0,-.19],[17,-.19],[19.2,-.22],[20.2,-.68],[21.3,-1.25],[22.5,-.8],[22.85,0],[22.5,.8],[21.3,1.25],[20.2,.68],[19.2,.22],[17,.19],[0,.19]].map(([l,c])=>Q(l,c,0)),!1,"centripetal"),e=160,t=.34,n=i.getSpacedPoints(e),s=[],r=[];for(let l=0;l<=e;l++){let c=i.getTangentAt(l/e),d=-c.y,u=c.x;s.push(new be(n[l].x+d*t/2,n[l].y+u*t/2)),r.push(new be(n[l].x-d*t/2,n[l].y-u*t/2))}let a=new ht([...s,...r.reverse()]),o=new oe({color:3646379,metalness:.25,roughness:.42});return de(Ge(new Gt(a,{depth:1.1,bevelEnabled:!1,curveSegments:4}).translate(0,0,-.55),o))}function $_(){let i=de(h(P(.5,.9,.5,b.steel),0,.8),h(D(.4,.4,2.6,b.steel),0,-1),h(Ge(Bh(.48,4,0,3,.35,.35),b.steel),0,-4.3),h(D(.48,.15,.5,b.steel),0,-6.5,0,0));return de(i,h(pe(2.6,1.8,1.6,.3,b.black),0,.8),h(D(.4,.4,8,b.black),4.9,.8,0,0,0,Math.PI/2),h(D(.4,.4,8,b.black),-4.9,.8,0,0,0,Math.PI/2),h(D(.5,.5,.8,b.steel),0,2,0))}function K_(){let i=new ht;i.absarc(0,0,2.6,0,Math.PI*2,!1),i.holes.push(new kt().absarc(0,0,1.95,0,Math.PI*2,!0));let e=new ht;e.absarc(0,0,1.95,0,Math.PI*2,!1),e.holes.push(new kt().absarc(0,0,.55,0,Math.PI*2,!0));for(let n=0;n<4;n++){let s=n*Math.PI/2;e.holes.push(new kt().absarc(Math.cos(s)*1.05,Math.sin(s)*1.05,.35,0,Math.PI*2,!0))}let t=de();for(let n=0;n<6;n++)t.add(h(new Ie(new $t(.53,.05,8,24),b.steelDark),0,-.38+n*.15,0,Math.PI/2,0,n*.2));return de(t,h(Ot(i,1.2,b.steelDark,.1),0,0,0,Math.PI/2),h(Ot(e,.9,b.steel),0,0,0,Math.PI/2),h(D(.42,.42,9,b.knurl),7.2,0,0,0,0,Math.PI/2),h(D(.42,.42,9,b.knurl),-7.2,0,0,0,0,Math.PI/2),h(D(.6,.6,.6,b.steel),2.8,0,0,0,0,Math.PI/2),h(D(.6,.6,.6,b.steel),-2.8,0,0,0,0,Math.PI/2))}function J_(){return de(fn([[.6,0],[1.1,1.2],[1.25,3.5],[1,6.5],[.5,7.6],[0,7.7]],b.beech),h(D(.5,.5,.4,b.brass),0,-.1),h(fn([[0,-5.8],[.17,-4.6],[.17,0],[0,0]],b.steel,20),0,-.2))}function Q_(){return Bl(!1)}function ey(){return Bl(!0)}function bf(){let i=de(h(pe(20,9,2,.3,b.viceBlue),0,0,0),h(P(20,9,1,b.beech),0,0,1.5)),e=de(h(pe(20,9,2,.3,b.viceBlue),0,0,0),h(P(20,9,1,b.beech),0,0,-1.5));return e.position.z=6,de(i,e,h(D(.6,.6,14,b.steel),-6,-2.5,3,Math.PI/2),h(D(.6,.6,14,b.steel),6,-2.5,3,Math.PI/2),h(D(.8,.8,12,b.knurl),0,-2.5,4,Math.PI/2),h(D(.45,.45,16,b.steel),0,-2.5,10.2,0,0,Math.PI/2),h(Ge(new Zt(.75,20,14),b.steel),8.2,-2.5,10.2),h(Ge(new Zt(.75,20,14),b.steel),-8.2,-2.5,10.2),h(D(1.3,1.3,1.6,b.viceBlue),0,-2.5,7.6,Math.PI/2))}function vf(){let i=de(h(pe(9,2,12,.3,b.viceBlue),0,1,0),h(pe(6,6,4,.4,b.viceBlue),0,5,-3.5),h(pe(6,5,4,.4,b.viceBlue),0,4.5,2.6),h(pe(4,1.2,8,.2,b.viceBlue),0,3,1));i.add(h(P(10,2.4,.4,b.steelDark),0,6.9,-1.3),h(P(10,2.4,.4,b.steelDark),0,6.9,.4),h(pe(10,.8,4,.2,b.viceBlue),0,7.8,-3.5),h(pe(10,.8,4,.2,b.viceBlue),0,7.5,2.6)),i.add(h(D(.5,.5,4,b.steel),0,3,6,Math.PI/2),h(D(.35,.35,11,b.steel),0,3,8,0,0,Math.PI/2),h(Ge(new Zt(.6,16,12),b.steel),5.6,3,8),h(Ge(new Zt(.6,16,12),b.steel),-5.6,3,8),h(pe(6,1,2,.3,b.viceBlue),0,8.5,-4.2));let e=P(13,1.6,15,b.beech);e.position.y=-.8;let t=P(12,3,3.4,b.beechDark);t.position.set(0,-3.1,5.8),i.add(e,t);for(let[n,s]of[[-5.2,-6],[5.2,-6],[-5.2,6],[5.2,6]])i.add(h(D(.35,.35,.08,b.brass),n,.03,s));return i}function ty(){let i=t=>{let n=new ht;return n.moveTo(-1.5,-1.5),n.lineTo(1.5,-1.5),n.lineTo(1.5,1.5),n.lineTo(-1.5,1.5),n.closePath(),n.holes.push(new kt().absarc(t>0?.3:-.3,0,.6,0,Math.PI*2,!0)),h(Ot(n,1,b.castGrey,.12),t,.5,0,Math.PI/2)},e=de(h(pe(9,2,16,.3,b.castGrey),0,1,0),i(6),i(-6),h(pe(9,4,2.4,.3,b.castGrey),0,4,-6),h(pe(9,3.6,2.8,.3,b.castGrey),0,3.8,0));return e.add(h(P(8.6,2.2,.3,b.steelDark),0,4.6,-4.7),h(P(8.6,2.2,.3,b.steelDark),0,4.6,-1.5),h(D(.5,.5,9,b.steel),0,2.6,4.6,Math.PI/2),h(D(.3,.3,6,b.steel),0,2.6,9,0,0,Math.PI/2),h(D(.45,.45,1.4,b.black),3.4,2.6,9,0,0,Math.PI/2)),e}function ny(){let i=t=>{let n=de(Ot([[0,0],[.85*t,0],[1*t,7.6],[1.75*t,8.2],[1.75*t,10.2],[0,10.2]],1.3,b.blackMetal,.08),h(pe(1.75,2,2.3,.12,b.blackMetal),.875*t,9.2,0),h(P(.12,1.8,2.1,b.knurl),.04*t,9.2,0));return n.rotation.z=-.09*t,n},e=de(h(D(.55,.55,.7,b.blackMetal),2.4,5.2,0,0,0,Math.PI/2),h(Ot([[0,0],[.4,1.6],[.9,1.8],[.9,-1.8],[.4,-1.6]],.25,b.blackMetal),2.7,5.2,0,0,Math.PI/2,0));return de(h(i(1),.08,0,0),h(i(-1),-.08,0,0),h(D(.22,.22,4.8,b.steelDark),0,5.2,0,0,0,Math.PI/2),e,h(D(.55,.55,1.6,b.blackMetal),0,.5,0,Math.PI/2),h(ai([[-1.2,2],[-1.8,3.5],[-1.2,4.8]],.12,b.steelDark),0,0,0))}function iy(){let i=new ht;i.moveTo(-2,8),i.lineTo(4,8),i.lineTo(4,6.6),i.lineTo(-.6,6.6),i.quadraticCurveTo(-1.2,6.6,-1.2,5.8),i.lineTo(-1.2,-5.8),i.quadraticCurveTo(-1.2,-6.6,-.6,-6.6),i.lineTo(4,-6.6),i.lineTo(4,-8),i.lineTo(-2,-8),i.quadraticCurveTo(-3,-8,-3,-7),i.lineTo(-3,7),i.quadraticCurveTo(-3,8,-2,8);let e=de(h(D(.4,.4,13,b.steel),0,-3.6),h(D(.9,.7,.5,b.steelDark),0,2.9),h(D(.3,.3,6,b.steel),0,-10.4,0,0,0,Math.PI/2),h(Ge(new Zt(.45,14,10),b.steel),3,-10.4,0),h(Ge(new Zt(.45,14,10),b.steel),-3,-10.4,0));e.position.x=2.6;let t=de(Ot(i,1.4,b.red,.15),e);return t.userData.screw=e,t}function sy(){let i=de(h(P(48,.7,2.6,b.viceBlue),0,0,0),h(P(48,2.4,.6,b.viceBlue),0,-1.1,0)),e=de(h(pe(3,6,3.4,.3,b.viceBlue),22.5,1.8,0),h(D(.45,.45,7,b.steel),19.5,2.8,0,0,0,Math.PI/2),h(pe(1.4,3.6,2.8,.2,b.steelDark),15.5,2.8,0),h(D(.25,.25,5,b.steel),24.5,2.8,0,Math.PI/2)),t=de(h(pe(3,6,3.4,.3,b.viceBlue),-14,1.8,0),h(D(.25,.25,4.4,b.steel),-14,-1,0,Math.PI/2));return de(i,e,t)}function ry(){let i=de(),e=new oe({color:2768814,roughness:.38}),t=new oe({color:15909166,roughness:.45}),n=b.black,s=new oe({color:2829617,metalness:.5,roughness:.45}),r=new oe({color:9278620,metalness:.8,roughness:.35});i.add(h(P(.5,30,1.9,s),0,15,0));let a=de(h(pe(2.6,3.4,3.2,.5,e),0,-.2,.2),h(pe(2.4,2.2,1.6,.4,n),0,-.4,1.7),h(pe(2.4,1.8,7.4,.6,e),0,.6,-4.6),h(pe(2.4,2.6,2.2,.6,e),0,1.4,-8.1),h(pe(2.2,1.2,3.6,.3,e),0,1.8,-3.2,-.55,0,0),h(pe(1.1,.5,1.1,.2,t),0,2.5,-7.3),h(pe(3.2,.9,3.2,.35,n),0,2.9,-8.6)),o=f=>h(pe(.08,2.6,3.4,.03,t),f,.4,-.6),l=de(h(pe(2.8,4.2,6.4,.6,e),0,.2,-.9),o(1.42),o(-1.42),h(pe(2.4,1.8,4.6,.5,e),0,-.4,-5.6),h(pe(3.2,.9,3.2,.35,n),0,-1.2,-8.4)),c=de(h(pe(2.1,2.2,7.4,.8,e),0,.5,3.7),h(pe(2.2,1.4,6.2,.6,n),0,-.6,4.2));c.position.set(0,.6,1.6),c.rotation.x=-.28;let d=de(h(pe(.9,.55,4.6,.25,r),0,0,2.3));d.position.set(0,-1.9,1.9),d.rotation.x=-.12;let u=de(l,c,d);return u.position.y=18,i.add(a,u),i.userData.mov=u,i}var Ps=new oe({color:13225683,metalness:.7,roughness:.35});function ay(){return de(h(P(10.4,2.6,.14,Ps),0,6.85,-1.03),h(P(10.4,.14,2.2,Ps),0,8.27,-2.06),h(P(10.4,2.6,.14,Ps),0,6.85,.13),h(P(10.4,.14,2.2,Ps),0,8.17,1.16))}function oy(){let i=vf();i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{let r=s.clone();return r.transparent=!0,r.opacity=.18,r.depthWrite=!1,r}),n.castShadow=!1)});let e=ay(),t=de(i,e);return t.userData.anim=n=>{let s=n%4/4,r=a=>a*a*(3-2*a);e.position.y=s<.35?6*(1-r(s/.35)):s<.65?0:s<.9?6*r((s-.65)/.25):6},t}var ce={green:new oe({color:3107669,metalness:.35,roughness:.45}),grey:new oe({color:7306631,metalness:.45,roughness:.45}),blue:new oe({color:3104655,metalness:.35,roughness:.45}),cream:new oe({color:14275263,metalness:.25,roughness:.5}),orange:new oe({color:15234346,metalness:.25,roughness:.42}),yellow:new oe({color:15909166,metalness:.2,roughness:.45}),dark:new oe({color:2764082,metalness:.4,roughness:.5}),glass:new oe({color:2240576,metalness:.6,roughness:.12,transparent:!0,opacity:.75}),clear:new oe({color:13625077,metalness:.1,roughness:.05,transparent:!0,opacity:.28,depthWrite:!1}),grit:new oe({map:Is((i,e)=>{i.fillStyle="#4a3b2c",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++)i.fillStyle=Math.random()<.5?"#2c2219":"#6b5843",i.fillRect(Math.random()*e,Math.random()*e,1.6,1.6)},256,[4,1]),roughness:.95}),red:new oe({color:13772334,roughness:.4}),machRed:new oe({color:11874350,metalness:.35,roughness:.45}),lightOrange:new oe({color:15902821,metalness:.25,roughness:.5}),chevron:new oe({map:(()=>{let i=document.createElement("canvas");i.width=256,i.height=32;let e=i.getContext("2d");e.fillStyle="#1b1b1d",e.fillRect(0,0,256,32),e.fillStyle="#f2c12e";for(let n=-2;n<12;n++)e.beginPath(),e.moveTo(n*28,32),e.lineTo(n*28+14,32),e.lineTo(n*28+30,0),e.lineTo(n*28+16,0),e.fill();let t=new Rn(i);return t.colorSpace=nn,t})(),roughness:.5}),glow:new oe({color:16734762,emissive:16726544,emissiveIntensity:1.2,roughness:.6}),powder:new oe({map:Is((i,e)=>{i.fillStyle="#e9eef2",i.fillRect(0,0,e,e);for(let t=0;t<4e3;t++)i.fillStyle=Math.random()<.5?"#cfd8df":"#ffffff",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,1.2,0,7),i.fill()},256,[2,2]),roughness:.9})},Sr=(i,e=b.steel,t=3)=>{let n=de(h(new Ie(new $t(i,i*.09,10,36),e),0,0,0),h(D(i*.18,i*.18,i*.3,e),0,0,0,Math.PI/2));for(let s=0;s<t;s++){let r=s*2*Math.PI/t;n.add(h(P(i,i*.08,i*.08,e),Math.cos(r)*i/2,Math.sin(r)*i/2,0,0,0,r))}return n.add(h(D(i*.09,i*.09,i*.5,b.black),Math.cos(.3)*i,Math.sin(.3)*i,i*.25,Math.PI/2)),n},ly=i=>de(h(D(.45,.45,i,b.steel),0,i/2,0),h(Ge(new Zt(1.1,18,12),b.black),0,i+.6,0)),oi=()=>de(h(D(1.4,1.4,1,ce.yellow),0,0,0,Math.PI/2),h(Ge(new Zt(1.5,20,12,0,Math.PI*2,0,Math.PI/2),ce.red),0,0,.5,Math.PI/2));function Mf(){let i=new ht;i.absarc(0,25,7,0,Math.PI,!1),i.absarc(0,-25,7,Math.PI,2*Math.PI,!1),i.holes.push(new kt().absarc(0,-25,6.4,0,-Math.PI,!0).absarc(0,25,6.4,Math.PI,0,!0));let e=Ot(i,15,ce.grit);return e.position.set(0,85,-4),e.rotation.y=-Math.PI/2,de(h(P(44,3,40,ce.dark),0,1.5,0),h(pe(40,48,36,1.5,ce.grey),0,27,0),h(pe(30,36,1,.6,ce.grey),0,27,18.2),h(P(1,8,1.4,b.steelShiny),11,30,19),h(pe(16,66,8,1,ce.grey),0,83,-16),e,h(D(6.2,6.2,15.4,b.steel,32),0,60,-4,0,0,Math.PI/2),h(D(6.2,6.2,15.4,b.steel,32),0,110,-4,0,0,Math.PI/2),h(pe(15,46,7,.6,b.steelDark),0,85,-4),h(D(8,8,20,ce.yellow,28),-18,60,-4,0,0,Math.PI/2),h(pe(20,11,22,1.2,ce.grey),0,116,-4),h(P(1,9,13,ce.grey),9.6,104,-4),h(P(1,9,13,ce.grey),-9.6,104,-4),h(pe(30,2,20,.6,b.steel),0,58,13.6),h(P(.8,.1,18,ce.dark),6,59.05,13.6),h(pe(6,7,8,.8,ce.grey),0,53.5,9),h(P(19,48,.6,b.steel),0,87,4.4),h(P(.6,48,8,b.steel),9.6,87,.7),h(P(.6,48,8,b.steel),-9.6,87,.7),(()=>{let t=new Ie(new Cn(19,3.2),ce.chevron);return t.position.set(0,64.7,4.72),t})(),h(ki(),-4,44,18.6),h(oi(),8,44,18.6))}ce.go=new oe({color:3126106,roughness:.4});var ki=()=>de(h(pe(7,3.6,1.6,.4,b.black),0,0,0),h(D(1,1,.8,ce.go),-1.6,0,1,Math.PI/2),h(D(1,1,.8,ce.red),1.6,0,1,Math.PI/2));function Sf(){let i=new ht;i.moveTo(-15,-14),i.lineTo(15,-14),i.lineTo(15,14),i.lineTo(-15,14),i.closePath();for(let a of[-6.3,6.3]){let o=new kt;o.moveTo(a+.65,-4.5),o.lineTo(a+.65,4.5),o.absarc(a,4.5,.65,0,Math.PI,!1),o.lineTo(a-.65,-4.5),o.absarc(a,-4.5,.65,Math.PI,2*Math.PI,!1),i.holes.push(o)}let e=de(h(pe(40,5,32,1,ce.grey),0,2.5,0),h(D(3.6,3.6,110,b.steel,28),0,58,-9),h(Ot(i,2.6,ce.grey,.3),0,46,3,-Math.PI/2),h(pe(10,6,10,1,ce.grey),0,43,-8),h(D(.6,.6,6,b.steel),7,43,-8,0,0,Math.PI/2),h(pe(24,22,40,2,ce.machRed),0,100,0),h(pe(18,4,32,1.5,ce.machRed),0,112,-2),h(D(8,8,24,ce.machRed,28),0,98,-28,Math.PI/2),h(D(2.4,2.4,10,b.steel),0,84,10),h(fn([[2.2,0],[2.2,4],[1.6,5.5],[.9,6.2],[0,6.3]].reverse().map(([a,o])=>[a,-o]),b.steelShiny,28),0,79,10),h(gf(),0,75.5,10,Math.PI)),t=de(h(D(1.8,1.8,2.2,b.steelDark),0,0,0,0,0,Math.PI/2));for(let a=0;a<3;a++){let o=ly(13);o.rotation.x=.5+a*2*Math.PI/3,t.add(o)}t.position.set(17.2,95,6),e.add(h(D(1,1,4.4,b.steel),14.2,95,6,0,0,Math.PI/2),t);let n=-8,s=22.5,r=Math.hypot(n,s-10);return e.add(h(D(3,3,1.4,b.steelDark),0,86,10),h(P(r,1.2,1.4,b.steelDark),n/2,86,(10+s)/2,0,Math.atan2(-(s-10),n),0),h(D(.38,.38,19,b.knurl),n,95.5,s),h(P(3.6,1.6,4.6,ce.machRed),n,96,22),h(D(1,1,.8,b.brass,6),n,97.3,s),h(D(1,1,.8,b.brass,6),n,98.3,s),h(P(.2,9,1.6,b.steelShiny),n-2.2,94,20.2)),e.add(h(oi(),6,104,20.4),h(ki(),-12.4,101,6,0,-Math.PI/2,0),h(new Ie(new Et(5,5,12,28,1,!0),ce.clear),0,80,10)),e}function Ef(){return de(h(pe(26,8,56,2,ce.blue),0,4,0),h(pe(20,24,10,2,ce.blue),0,18,-22),h(pe(9,8,44,2,ce.blue),0,31,-3),h(pe(4,6,6,.8,ce.blue),0,31,22),h(D(1.2,1.2,2,b.black),0,36,-23),h(pe(28,2,30,.8,b.steel),0,20,14),h(pe(6,11,6,1,ce.blue),0,13.5,14),h(D(1.4,1.4,.1,b.black),0,21.05,22),h(D(.06,.06,18,b.steelShiny,8),0,19,22),h(D(.35,.35,6.3,b.steel),1.2,24.85,22),h(P(2.6,.3,1.6,b.steel),1.2,21.55,22.4),h(P(3.8,6,.2,ce.clear),0,25,24.8),h(P(.2,6,3.6,ce.clear),1.9,25,23),h(P(.2,6,3.6,ce.clear),-1.9,25,23),h(ai([[-1.5,30,22],[-3,27,25],[-.8,23,23.5]],.3,ce.clear),0,0,0),h(D(7,7,14,ce.dark,24),8,12,-18,0,0,Math.PI/2),h(ki(),0,4,28.4),h(oi(),8,4,28.4))}function wf(){let i=de(h(pe(24,40,30,1.5,ce.cream),-34,20,0),h(pe(24,40,30,1.5,ce.cream),34,20,0),h(pe(96,4,34,1,ce.dark),0,42,-2),h(pe(92,10,20,1,ce.cream),0,49,0),h(P(92,1,2,b.steelShiny),0,54.5,-6),h(P(92,1,2,b.steelShiny),0,54.5,6),h(pe(28,30,26,2,ce.cream),-34,69,0),h(D(1.8,1.8,1.4,ce.dark),-26,78,13.2,Math.PI/2),h(D(1.8,1.8,1.4,ce.dark),-38,78,13.2,Math.PI/2),h(D(8,8,7,b.steel,36),-16.5,66,0,0,0,Math.PI/2),h(D(.6,.6,90,b.steel),0,46,10.5,0,0,Math.PI/2));for(let n=0;n<3;n++){let s=n*2*Math.PI/3;i.add(h(P(3,2.2,2.6,b.steelDark),-12.5,66+Math.cos(s)*5.6,Math.sin(s)*5.6,s,0,0))}i.add(h(D(1.6,1.6,10,b.brass),-7.5,66,0,0,0,Math.PI/2));let e=de(h(pe(16,6,24,.8,ce.cream),0,57,0),h(pe(16,12,4,.8,ce.cream),0,49,12.5),h(pe(10,3,14,.6,ce.cream),0,61.5,5),h(pe(6,3,7,.5,ce.cream),0,64.5,7),h(pe(4.4,4,4.4,.4,b.steelDark),0,68,8),h(P(1,1,5,b.steel),0,67.6,5),h(Sr(3.4),3,49,17.6),h(Sr(2.4),0,61.5,15.4),h(D(.4,.4,3,b.steel),3,49,15.6,Math.PI/2),h(D(.35,.35,3.4,b.steel),0,61.5,13.4,Math.PI/2));e.position.x=8,i.add(e);let t=de(h(pe(14,18,14,1.2,ce.cream),0,64,0),h(D(1.8,1.8,8,b.steel),-9,66,0,0,0,Math.PI/2),h(D(0,.6,2.4,b.steelShiny),-14,66,0,0,0,Math.PI/2),h(Sr(3.6),9,66,0));return t.children[3].rotation.y=Math.PI/2,t.position.x=34,i.add(t,h(oi(),-24,72,13.4),h(ki(),-34,63,13.4)),i}function Tf(){let i=de(h(pe(6,40,30,1,ce.green),-40,20,0),h(pe(6,40,30,1,ce.green),40,20,0),h(P(86,3,6,ce.green),0,42,-4),h(P(86,3,6,ce.green),0,42,4),h(pe(18,22,18,2,ce.green),-34,54,0),h(D(7,7,18,ce.dark,28),-34,54,-16,Math.PI/2),h(D(1.4,1.4,6,b.steel),-22,58,0,0,0,Math.PI/2),h(D(2.6,2.6,1,b.steel,28),-19.5,58,0,0,0,Math.PI/2));for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;i.add(h(P(.6,.5,.5,b.steelShiny),-18.8,58+Math.cos(r)*1.6,Math.sin(r)*1.6))}let e=de(h(pe(12,16,12,1.2,ce.green),0,51,0),h(D(1.4,1.4,6,b.steel),-7,58,0,0,0,Math.PI/2),h(D(0,1,2,b.steelShiny),-10.5,58,0,0,0,Math.PI/2),h(Sr(6.8,b.black),8,58,0));e.children[3].rotation.y=Math.PI/2,e.position.x=29;let t=h(P(37,5,5,b.beech),-.5,58,0),n=de(h(pe(6,3,14,.6,b.steelDark),0,45,6),h(D(.9,.9,9.5,b.steel),0,51.25,4.4),h(P(26,1.2,1.4,b.steel),0,56.6,4.4),h(D(.6,.6,3,b.black),3,46,13,Math.PI/2));return de(i,e,t,n,h(oi(),-34,60,9.4),h(ki(),-34,50,9.4))}function Af(){let i=de(h(D(1.8,1.8,2.4,b.steelDark),0,0,0,0,0,Math.PI/2),h(D(.8,.8,22,b.steel),1.2,6,9.5,1.1,0,0),h(Ge(new Zt(2.2,18,12),b.black),1.2,11.2,19.4));return i.position.set(8.6,62,0),de(h(pe(34,5,30,1,ce.grey),0,2.5,0),h(pe(6,5,8,.8,ce.grey),0,7.5,4),h(pe(30,3,22,.8,b.steel),0,10.5,4),h(pe(30,6,2,.5,b.steel),0,15,1),h(P(26,6,4,b.beech),0,15,4),h(pe(18,6,1.6,.4,b.steel),0,15,6.8),h(pe(6,6,2,.5,ce.grey),0,15,14),h(D(.6,.6,7,b.steel),0,15,11,Math.PI/2),h(Sr(3),0,15,15.6),h(pe(2,5,6,.4,ce.grey),17,5,4),h(D(.8,.8,6,b.steel),20,5,4,0,0,Math.PI/2),h(Sr(5.4),23.2,5,4,0,Math.PI/2,0),h(D(3,3,70,b.steel,24),0,40,-11),h(pe(14,18,14,1.5,ce.orange),0,56,-3),h(D(6.5,6.5,22,ce.orange,28),0,74,-3),h(pe(10,4,10,1,ce.dark),0,86,-3),h(pe(6,5,6,.6,ce.grey),0,47,4),h(P(1.6,8.5,1.6,b.steelShiny),0,40.25,4),h(P(1.65,2.4,.8,ce.dark),0,41.5,4),h(D(1.13,.85,.6,b.steelShiny,4),0,35.7,4,0,Math.PI/4,0),h(D(.6,.6,2,b.steelDark),0,34.9,4),h(D(.6,0,1,b.steelShiny),0,33.4,4),h(P(.3,15,3,b.black),7.05,56,0),i,h(P(4,1.6,4,ce.orange),-9,48,-3),h(D(.38,.38,11.3,b.knurl),-9,41.85,-3),h(D(1,1,.8,b.brass,6),-9,46.6,-3),h(D(1,1,.8,b.brass,6),-9,45.6,-3),h(D(4,4,2.4,ce.grey),0,15.6,-11),h(P(12,1.6,2,ce.grey),-4.5,15.6,-7,0,Math.atan2(-8,-9)+Math.PI,0),h(P(3.4,1.2,3.4,b.steelDark),-9,16.8,-3),h(oi(),0,60,4.2),h(ki(),-7.2,56,-3,0,-Math.PI/2,0))}function Rf(){let i=new oe({map:Is((E,R)=>{E.fillStyle="#b8323a",E.fillRect(0,0,R,R);for(let S=0;S<5e3;S++)E.fillStyle=Math.random()<.5?"#952630":"#d9545b",E.fillRect(Math.random()*R,Math.random()*R,1.4,1.4)},256,[3,3]),roughness:.95}),e=14,t=31.2,n=new Ie(new Cn(31,25,28,22),i);n.rotation.x=-Math.PI/2,n.position.set(e,t,0);let s=n.geometry.attributes.position,r=s.array.slice(),a=de(h(pe(36,1.2,30,.5,ce.lightOrange),0,.6,15),h(P(10,1,1.2,b.black),0,1.5,29.2));a.position.set(e,34,-15),a.rotation.x=-1.85;let o=de(h(P(80,4,36,ce.dark),-3,2,0),h(pe(36,26,30,1.2,ce.lightOrange),e,17,0),h(P(36,4,2.5,ce.lightOrange),e,32,13.75),h(P(36,4,2.5,ce.lightOrange),e,32,-13.75),h(P(2.5,4,25,ce.lightOrange),e-16.75,32,0),h(P(2.5,4,25,ce.lightOrange),e+16.75,32,0),h(P(31,.1,25,ce.dark),e,30.05,0),n,a,h(D(.5,.5,34,b.steel),e,34,-15,0,0,Math.PI/2),h(pe(30,40,30,1.5,ce.lightOrange),-20,24,0),h(pe(24,26,1.4,.8,ce.lightOrange),-20,23,15.6),h(P(14,8,.4,ce.glass),-20,27,16.4),h(P(12,.6,.3,ce.glow),-20,25.5,16.1),h(D(.7,.7,10,b.steelShiny),-10,23,17.8),h(P(1,1,1.6,b.steelShiny),-10,27.5,16.9),h(P(1,1,1.6,b.steelShiny),-10,18.5,16.9),h(D(1.6,1.6,1,b.black),-28,40,15.4,Math.PI/2),h(D(.7,.7,.6,ce.red),-23,40,15.3,Math.PI/2),h(ki(),e,12,15.4),h(pe(8,7,8,1,ce.blue),42,3.5,6),h(ai([[42,7,6],[42,10,2],[37,8,1],[32,8,1]],.7,b.black),0,0,0)),l=1400,c=new Jn(new Zt(.13,5,3),new oe({roughness:.8}),l),d=new Ht,u=[];for(let E=0;E<l;E++)u.push([e+(Math.random()-.5)*30,(Math.random()-.5)*24,Math.random()*9,.6+Math.random()*1.6,.3+Math.random()*Math.random()*4.2,Math.random()*6]),c.setColorAt(E,new nt().setHSL(.99+Math.random()*.02,.62,.4+Math.random()*.22));let f=document.createElement("canvas");f.width=f.height=64;let p=f.getContext("2d"),m=p.createRadialGradient(32,32,0,32,32,32);m.addColorStop(0,"rgba(230,90,95,.9)"),m.addColorStop(1,"rgba(230,90,95,0)"),p.fillStyle=m,p.fillRect(0,0,64,64);let y=160,g=new Float32Array(y*3),x=[];for(let E=0;E<y;E++)x.push([e+(Math.random()-.5)*28,(Math.random()-.5)*22,Math.random()*9,.3+Math.random()*.6]);let v=new Yt;v.setAttribute("position",new Fn(g,3));let C=new $r(v,new ir({map:new Rn(f),size:5,transparent:!0,opacity:.28,depthWrite:!1,sizeAttenuation:!0}));return o.add(c,C),o.userData.anim=E=>{for(let R=0;R<s.count;R++){let S=r[R*3],_=r[R*3+1];s.setZ(R,.05*Math.sin(S*2.3+E*7)+.04*Math.sin(_*2.9-E*6.3))}s.needsUpdate=!0,n.geometry.computeVertexNormals(),u.forEach(([R,S,_,w,z,I],L)=>{let q=.5-.5*Math.cos(E*w*2.2+_);d.position.set(Math.min(e+15.2,Math.max(e-15.2,R+.9*Math.sin(E*w+I))),t+.15+z*q+.25*Math.abs(Math.sin(E*9*w+_)),Math.max(-12,Math.min(12,S+.9*Math.cos(E*w*.8+I)))),d.updateMatrix(),c.setMatrixAt(L,d.matrix)}),c.instanceMatrix.needsUpdate=!0,x.forEach(([R,S,_,w],z)=>{g[z*3]=R+1.5*Math.sin(E*w+_),g[z*3+1]=t+1+2*(.5-.5*Math.cos(E*w*1.3+_)),g[z*3+2]=S+1.5*Math.cos(E*w*.9+_)}),v.attributes.position.needsUpdate=!0},o.userData.anim(0),o}function Cf(){ce.wire=new oe({color:16723992,emissive:16718336,emissiveIntensity:1.4,roughness:.5});let i=de(h(D(.09,.09,60,ce.wire,8),0,9.3,-6.6,0,0,Math.PI/2),h(D(.09,.09,60,ce.wire,8),0,9.3,-5.4,0,0,Math.PI/2)),e=de(h(P(62,.4,6.4,b.black),0,1.4,3.2),h(P(62,1.4,.3,b.black),0,.7,6.3),h(P(.3,1.4,6.4,b.black),-30.85,.7,3.2),h(P(.3,1.4,6.4,b.black),30.85,.7,3.2));e.position.set(0,9.6,-9.2);let t=de(h(pe(70,3,22,.8,b.black),0,1.5,0),h(pe(66,6,18,.8,ce.yellow),0,6,0),h(P(64,.5,11,Ps),0,9.25,2.5),h(P(62,.2,2.6,ce.dark),0,9.1,-6),h(P(62,.6,1.6,Ps),0,9.3,-3.9),h(P(62,.6,1.6,Ps),0,9.3,-8.1),i,e,h(D(.35,.35,62,b.steel),0,9.6,-9.2,0,0,Math.PI/2),h(pe(4,9,20,.6,b.black),-34,5,0),h(pe(4,9,20,.6,b.black),34,5,0),h(pe(5,3,3,.4,b.black),-30,6,10.2),h(D(.6,.6,.6,ce.red),-30,6,11.8,Math.PI/2),h(ai([[-36,4,-6],[-42,3,-10],[-50,1,-12]],.4,b.black),0,0,0)),n=s=>s*s*(3-2*s);return t.userData.anim=s=>{ce.wire.emissiveIntensity=1.5+1.1*Math.sin(s*4);let r=s%7/7;e.rotation.x=-Math.PI*.97*(r<.35?1:r<.47?1-n((r-.35)/.12):r<.8?0:n((r-.8)/.12>1?1:(r-.8)/.12))},t.userData.anim(0),t}ce.copper=new oe({color:13136954,metalness:.9,roughness:.3});function cy(){let i=new oe({color:15909166,metalness:.25,roughness:.45}),e=new oe({color:1908257,metalness:.35,roughness:.5}),t=new oe({color:16773824,emissive:16765562,emissiveIntensity:3,transparent:!0,opacity:0}),n=de(h(pe(24,3,30,1,e),0,1.5,-4),h(pe(22,17,24,1.2,i),0,11,-6),h(pe(22.6,3,24.6,1,e),0,20.5,-6),h(P(.3,9,16,e),11.2,11,-6),h(P(.3,9,16,e),-11.2,11,-6),h(pe(12,7,1.4,.5,e),0,12,6.2),h(D(1.6,1.6,1,b.steelShiny),-3,12.5,7.2,Math.PI/2),h(oi(),3.4,12.5,7.2),h(D(1.4,1.4,24,b.steelShiny),0,7,14,Math.PI/2),h(D(2,2,4,b.steelShiny),0,7,26),h(D(1,1,4,ce.copper),0,10.6,26),h(D(.3,1,1.4,ce.copper),0,13.2,26),h(P(.6,.25,10,b.steel),0,14,25)),s=new We;s.position.set(0,24,-8),n.add(s),s.add(h(P(5,4,6,b.steel),0,0,0),h(D(1.4,1.4,34,b.steelShiny),0,0,17,Math.PI/2),h(D(2,2,4,b.steelShiny),0,0,34),h(D(1,1,4,ce.copper),0,-3.6,34),h(D(1,.3,1.4,ce.copper),0,-6.2,34),h(D(.7,.7,30,b.steelShiny),0,7.5,13,1.1,0,0),h(D(1.4,1.4,7,e),0,15.8,29.5,1.1,0,0));let r=h(Ge(new Zt(.7,12,8),t),0,14.3,26);return n.add(r),n.userData.anim=a=>{let o=a%4/4,l=u=>u*u*(3-2*u),c=o<.3?l(o/.3):o<.6?1:o<.85?1-l((o-.6)/.25):0;s.rotation.x=.012+.09*c;let d=o>.32&&o<.5?Math.abs(Math.sin((o-.32)*60)):0;t.opacity=d,r.scale.setScalar(.6+d)},n}function hy(i=104,e=72){let t=new oe({color:9076594,roughness:.8}),n=new oe({color:3948614,metalness:.5,roughness:.4}),s=new ht;s.moveTo(0,0),s.lineTo(i,0),s.lineTo(0,i),s.closePath();let r=Ot(s,3,t);r.rotation.x=Math.PI/2,r.position.y=e-1.5;let a=de(r);for(let[o,l]of[[4,4],[i-8,4],[4,i-8]])a.add(h(P(3,e-3,3,n),o,(e-3)/2,l));return a.add(h(P(i-14,2,2,n),i/2-3,14,4),h(P(2,2,i-14,n),4,14,i/2-3)),a}var is=new oe({color:12856110,metalness:.35,roughness:.32}),Ui=new oe({color:9313055,metalness:.25,roughness:.5}),br=new oe({color:15264494,metalness:1,roughness:.18}),dy=new oe({color:1908e3,roughness:.6});function Pf(i,e=0){let t=new We;t.add(i),i.updateMatrixWorld(!0);let n=new Pt().setFromObject(i).getSize(Q(0,0,0));n.z<=n.x&&n.z<=n.y?i.rotation.x=-Math.PI/2:n.x<=n.y&&n.x<=n.z&&(i.rotation.z=Math.PI/2);let s=new We;s.add(t),t.rotation.y=e,s.updateMatrixWorld(!0);let r=new Pt().setFromObject(t),a=r.getCenter(Q(0,0,0));return t.position.set(-a.x,-r.min.y,-a.z),s}function uy(i){let e=r=>{let a=new ht;return r.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.closePath(),a},t=r=>{let a=new kt;return r.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.closePath(),a},n,s=5;switch(i){case"T":n=e([[0,6],[0,7],[5,7],[5,6],[3,6],[3,0],[2,0],[2,6]]);break;case"O":{n=new ht;let r=2.2;n.moveTo(r,0),n.lineTo(5-r,0),n.absarc(5-r,r,r,-Math.PI/2,0),n.lineTo(5,7-r),n.absarc(5-r,7-r,r,0,Math.PI/2),n.lineTo(r,7),n.absarc(r,7-r,r,Math.PI/2,Math.PI),n.lineTo(0,r),n.absarc(r,r,r,Math.PI,Math.PI*1.5);let a=new kt,o=1.3;a.moveTo(1+o,1),a.absarc(1+o,1+o,o,-Math.PI/2,-Math.PI,!0),a.lineTo(1,6-o),a.absarc(1+o,6-o,o,Math.PI,Math.PI/2,!0),a.lineTo(4-o,6),a.absarc(4-o,6-o,o,Math.PI/2,0,!0),a.lineTo(4,1+o),a.absarc(4-o,1+o,o,0,-Math.PI/2,!0),n.holes.push(a);break}case"L":n=e([[0,0],[4.5,0],[4.5,1],[1,1],[1,7],[0,7]]),s=4.5;break;case"I":n=e([[0,0],[1.1,0],[1.1,7],[0,7]]),s=1.1;break;case"B":n=e([[0,0],[3.8,0],[5,1.2],[5,2.7],[4.2,3.5],[5,4.3],[5,5.8],[3.8,7],[0,7]]),n.holes.push(t([[1,1],[1,3],[3.6,3],[4,2.6],[4,1.4],[3.6,1]]),t([[1,4],[1,6],[3.6,6],[4,5.6],[4,4.4],[3.6,4]]));break;case"R":n=e([[0,0],[1,0],[1,3],[2.6,3],[4,0],[5.2,0],[3.7,3.15],[4.2,3.5],[5,4.3],[5,5.8],[3.8,7],[0,7]]),n.holes.push(t([[1,4],[1,6],[3.6,6],[4,5.6],[4,4.4],[3.6,4]])),s=5.2;break;case"A":n=e([[0,0],[1.15,0],[1.6,1.8],[3.4,1.8],[3.85,0],[5,0],[3.05,7],[1.95,7]]),n.holes.push(t([[1.9,2.8],[2.5,5.2],[3.1,2.8]]));break;case"Y":n=e([[0,7],[1.2,7],[2.5,4.4],[3.8,7],[5,7],[3,3.2],[3,0],[2,0],[2,3.2]]);break;default:return{s:null,w:3}}return{s:n,w:s}}function fy(i,e,t,n=.35){let s=new We,r=0,a=e/7;for(let l of i){let{s:c,w:d}=uy(l);if(c){let u=new Ie(new Gt(c,{depth:n/a,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:2}),t);u.position.x=r,s.add(u)}r+=d+1.1}s.scale.setScalar(a);let o=new We;return s.position.x=-(r-1.1)*a/2,o.add(s),o}var py=new oe({color:1315862,metalness:.4,roughness:.35});function my(i="TOOL LIBRARY"){let r=new We,a=de(h(pe(46,1.2,22,.5,is),0,.6,0),h(pe(46,20,.8,.3,is),0,20/2,22/2-.8/2),h(pe(46,20,.8,.3,is),0,20/2,-22/2+.8/2),h(pe(.8,20,22,.3,is),46/2-.8/2,20/2,0),h(pe(.8,20,22,.3,is),-46/2+.8/2,20/2,0),h(P(46-2*.8,.2,22-2*.8,Ui),0,1.25,0),h(P(46-2*.8,18,.1,Ui),0,20/2,-22/2+.8+.05),h(P(46-2*.8,18,.1,Ui),0,20/2,22/2-.8-.05),h(P(.1,18,22-2*.8,Ui),46/2-.8-.05,20/2,0),h(P(.1,18,22-2*.8,Ui),-46/2+.8+.05,20/2,0)),o=fy(i,3.6,py);o.position.set(0,20*.5,22/2+.02),a.add(o);for(let m of[-1,1])a.add(h(P(3,4,.8,br),m*20,20-3.5,22/2+.3),h(P(2.2,1.4,1.2,br),m*20,20-1.2,22/2+.5));a.add(h(P(43,.5,.4,Ui),0,4,22/2+.15),h(P(43,.5,.4,Ui),0,20-2.6,22/2+.15)),r.add(a);let l=new We,c=46/2-.8-.6,d=22/2-.8-.6,u=(m,y,g,x,v,C=1)=>{let E=Pf(m,v);E.scale.setScalar(C),E.updateMatrixWorld(!0);let R=new Pt().setFromObject(E),S=R.getSize(Q(0,0,0)),_=Math.min(1,2*c/S.x,2*d/S.z);E.scale.multiplyScalar(_*.96),E.updateMatrixWorld(!0),R=new Pt().setFromObject(E);let w=(R.max.x-R.min.x)/2,z=(R.max.z-R.min.z)/2;E.position.set(Math.max(-c+w,Math.min(c-w,y)),g,Math.max(-d+z,Math.min(d-z,x))),E.updateMatrixWorld(!0);let I=new Pt().setFromObject(E);I.max.y>20-1.2&&(E.position.y-=I.max.y-(20-1.2)),l.add(E)};u(Lh(),0,1.4,1,0,1.05),u(uf(),-1,3.4,-3,0),u(Ih(),-2,6,-7,0),u(pf(),4,6.6,4,.08),u(_f(),-10,7,1,.15),u(Fh(),-12,10,-3,.2),u(yf(),12,9.8,-4,.4),u(Dh(),10,11,4,.25),u(Nh(),-2,13.2,6,Math.PI/2+.3),u(Bl(),4,13.6,-5,Math.PI/2-.2),u(Bl(),-6,14,-6,Math.PI/2+.25),u(Wl(),-14,14,5,.5),u(df(),15,14.4,6,.9),r.add(l);let f=[];for(let m of[-1,1]){let y=de(h(pe(22.4,6,21,1,is),0,3,0),h(P(22.6,1.2,21.4,is),0,.6,0),h(P(20,.5,18.5,Ui),0,6.01,0),h(P(.5,5,18.5,Ui),m*-3,3.6,0));y.add(h(D(.45,.45,3,b.brass),m*5,6.6,-3,0,0,Math.PI/2),h(D(.45,.45,3,b.brass),m*5,6.6,-1,0,0,Math.PI/2),h(P(4,.8,2,b.steelShiny),m*7,6.5,4)),y.add(h(pe(46/2-.6,1.2,21,.6,is),0,6.6,0));let g=h(P(.8,9,1,br),0,0,0),x=h(P(.8,9,1,br),0,0,0);r.add(g,x),r.add(y),f.push({t:y,sx:m,arm1:g,arm2:x})}let p=de(h(D(.45,.45,7,br),-11,4,0),h(D(.45,.45,7,br),11,4,0),h(D(1.1,1.1,22,dy),0,7.5,0,0,0,Math.PI/2));return r.add(p),r.userData.open=m=>{m=Math.max(0,Math.min(1,m));let y=m*m*(3-2*m);f.forEach(({t:g,sx:x,arm1:v,arm2:C})=>{let E=x*46/4,R=E+x*46*.5*y,S=20+.2+7*Math.sin(y*Math.PI)*.8-1.2*y;g.position.set(R,S,0);let _=x*46*.18,w=17,z=R-x*2,I=S+1.5,L=Math.hypot(z-_,I-w);[v,C].forEach((q,$)=>{q.scale.y=L/9,q.position.set((_+z)/2,(w+I)/2,($?-1:1)*(22/2+.25)),q.rotation.z=Math.atan2(-(z-_),I-w),q.visible=m>.02})}),p.position.y=20,p.visible=m<.05},r.userData.open(0),r}function If(i={}){let a=de(h(pe(120,6,48,.6,ff),0,78-6/2,0));for(let l of[-1,1])for(let c of[-1,1])a.add(h(P(6,72,6,b.beech),l*(120/2-8),72/2,c*(48/2-6)));for(let l of[-1,1])a.add(h(P(110,6,3,b.beech),0,69,l*(48/2-4.5)));a.add(h(P(110,2.5,38,b.beech),0,16,0));for(let l of[-1,1])a.add(h(P(4,6,38,b.beech),l*(120/2-8),16,0));if(!i.bare){let l=bf();l.position.set(-120/2+24,78-4.5,48/2+1),a.add(l)}let o=(l,c,d,u,f=78,p=!0)=>{let m=p?Pf(l,u):(()=>{let y=new We,g=new We;g.add(l),y.add(g),g.rotation.y=u,y.updateMatrixWorld(!0);let x=new Pt().setFromObject(g),v=x.getCenter(Q(0,0,0));return g.position.set(-v.x,-x.min.y,-v.z),y})();return m.position.set(c,f,d),a.add(m),m};if(!i.bare){o(Lh(),18,4,.25),o(Dh(),-20,-10,-.4),o(Fh(),40,-12,1.1),o(Nh(),-2,12,-.9),o(Ih(),5,-14,.1),o(Wl(),-38,-8,.7);let l=h(P(34,2,4.5,b.beech),-28,79,10,0,.15,0);a.add(l)}return i.bare||(o(mf(),-25,0,.2,17.25,!1),o(hf(),12,-4,-.3,17.25,!1),a.add(h(P(30,4.5,9,b.beech),30,19.5,8,0,.1,0),h(P(22,2,4.5,b.beech),-8,18.3,10,0,-.2,0))),a}function Pa(i,e,t){let n=new oe({color:9076594,roughness:.8}),s=new oe({color:3948614,metalness:.5,roughness:.4}),r=de(h(P(i,3,e,n),0,t-1.5,0));for(let a of[-1,1])for(let o of[-1,1])r.add(h(P(3,t-3,3,s),a*(i/2-3),(t-3)/2,o*(e/2-3)));return r.add(h(P(i-6,2,e-6,s),0,14,0)),r}function Df(i={}){let e=new We,t=470,n=370,s=new oe({color:5987940,roughness:.92}),r=new oe({color:6975093,roughness:.9});e.add(h(P(t,4,n,s),0,-2,0),h(P(210,.3,150,r),0,.15,15));let a=[],o=[];e.userData.items=o;let l=(c,d,u,f=0,p=0,m)=>(c.rotation.y=f,c.position.set(d,p,u),e.add(c),c.userData.anim&&a.push(c.userData.anim),m&&(c.userData.key=m,o.push({key:m,obj:c})),c);i.noBench||l(If(),0,15,0,0,"bench"),l(wf(),-75,-150,0,0,"centreLathe"),l(Tf(),70,-150,0,0,"woodLathe"),l(Sf(),-200,-12,Math.PI/2,0,"pillarDrill"),l(Mf(),-200,85,Math.PI/2,0,"beltSander"),l(Pa(60,46,72),198,-55),l(Af(),198,-55,-Math.PI/2,72,"mortiser"),l(Pa(60,46,72),198,40),l(Ef(),198,40,-Math.PI/2,72,"fretSaw"),l(Pa(90,40,72),-80,155),l(Cf(),-80,155,0,72,"stripHeater"),l(Rf(),75,150,0,0,"fluidiser");{let c=hy(),d=cy();d.position.set(30,72,30),d.rotation.y=Math.PI/4,d.scale.setScalar(1.35),c.add(d),c.userData.anim=d.userData.anim,l(c,-233,-183,0,0,"spotWelder")}return e.userData.anim=c=>a.forEach(d=>d(c)),e}var Mt={cream:new oe({color:15327951,metalness:.25,roughness:.5}),teal:new oe({color:2914939,metalness:.35,roughness:.45}),glass:new oe({color:13625077,transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1}),hot:new oe({color:16734762,emissive:16726544,emissiveIntensity:.9,roughness:.6}),sheet:new oe({color:15921906,roughness:.4,transparent:!0,opacity:.92}),granule:new oe({color:4891615,roughness:.6}),alu:new oe({color:12896976,metalness:.75,roughness:.32}),cavity:new oe({color:3817286,metalness:.6,roughness:.4,side:en}),kayak:new oe({color:15226410,roughness:.35,metalness:.05}),powder:new oe({color:15966330,roughness:.9}),ovenIn:new oe({color:2761760,emissive:16734746,emissiveIntensity:0,roughness:.8}),win:new oe({color:2234902,emissive:16738848,emissiveIntensity:0,roughness:.2,metalness:.3}),screen:new oe({color:8378111,emissive:2779784,emissiveIntensity:.8})},$e=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Qu(i){let e=new oe({color:i,roughness:.3}),t=de(h(pe(12,7.2,6,.4,e),0,0,0));for(let n=0;n<4;n++)for(let s=0;s<2;s++)t.add(h(D(1.1,1.1,1.2,e,16),-4.5+n*3,4.2,-1.5+s*3));return t}function gy(){let i=new oe({color:10270936,metalness:.3,roughness:.45}),e=new oe({color:15659250,roughness:.5}),t=new oe({color:2043755,roughness:.5}),n=new oe({color:15909166,metalness:.2,roughness:.45}),s=new oe({color:15895608,roughness:.45,side:en}),r=new We;r.add(h(P(48,2,80,i),0,2,-20),h(P(48,50,2,i),0,26,-59),h(P(2,50,80,i),23,26,-20),h(P(2,18,80,i),-23,10,-20),h(P(2,32,36,i),-23,35,-41),h(P(.6,32,42,Mt.glass),-23,35,0),h(P(2.4,1.4,44,b.steelDark),-23.2,19.4,0),h(P(48,30,2,i),0,16,21),h(P(44,19,.6,Mt.glass),0,41,21),h(P(48,1.4,2.4,b.steelDark),0,31.4,21.2),h(P(44,46,1,ce.dark),0,26,-23),h(P(44,.4,42,ce.dark),0,3.2,0),h(P(48,2,6,b.steel),0,51.5,18),h(P(48,2,6,b.steel),0,51.5,-20),h(P(6,2,36,b.steel),21,51.5,-1),h(P(6,2,36,b.steel),-21,51.5,-1),h(P(48,2,36,i),0,51.5,-41));for(let O of[-20,20])for(let F of[-56,28])r.add(h(D(2,2,2,b.black),O,1,F));let a=de(h(P(.4,4,.2,b.black),0,1.6,0));a.position.set(-15,22,33.6),r.add(h(pe(52,26,12,1.5,e),0,15,27),h(P(44,6,.3,t),0,8,33.1),h(P(16,2,.3,new oe({color:12178414})),12,8,33.3),h(D(4,4,1,b.black),-15,22,33,Math.PI/2),h(D(3.5,3.5,.2,b.steelShiny),-15,22,33.6,Math.PI/2),a,h(oi(),19,22,33.2),h(P(3,2,.6,ce.red),-20,15,33.2));for(let O=0;O<4;O++)r.add(h(D(1.8,2.2,2.2,b.black,20),-6+O*6,16,34,Math.PI/2),h(P(.4,1.6,.4,b.steelShiny),-6+O*6,16.6,35.2));r.add(h(P(8,3,.3,ce.machRed),-4,22,33.2));for(let O=0;O<3;O++)r.add(h(P(2,2,.4,new oe({color:16747066,emissive:16734736,emissiveIntensity:.5})),-6.4+O*2.4,22,33.4));let o=de(h(P(34,2,26,b.steelDark),0,0,0),h(D(2,2,40,b.steelDark),0,-20,0),h(P(30,4,22,b.beech),0,3,0)),l=new We;l.position.y=5,o.add(l),o.position.y=31,r.add(o);let c=new oe({color:5909018,emissive:16728080,emissiveIntensity:0,roughness:.6}),d=de(h(pe(46,10,38,1.5,i),0,0,0),h(P(46,9,.4,n),0,0,19.2),h(D(.8,.8,34,b.black),0,0,21.4,0,0,Math.PI/2),h(P(1.4,1.4,2.4,b.black),-16,0,20.2),h(P(1.4,1.4,2.4,b.black),16,0,20.2),h(P(40,.6,32,c),0,-5.1,0));for(let O=-3;O<=3;O++)d.add(h(P(38,.3,.8,c),0,-5.5,O*4.4));d.position.set(0,62,-40),r.add(d,h(P(2,5,78,b.steelDark),-24.5,55,-20),h(P(2,5,78,b.steelDark),24.5,55,-20));let u=new We;u.position.set(0,53.6,-21),r.add(u),u.add(h(P(44,1.6,4,b.steel),0,.8,2),h(P(44,1.6,4,b.steel),0,.8,40),h(P(4,1.6,36,b.steel),-20,.8,21),h(P(4,1.6,36,b.steel),20,.8,21),h(D(1,1,48,b.black),0,2.4,42,0,0,Math.PI/2),h(P(2,2.6,2,b.steelDark),-22,1.6,42),h(P(2,2.6,2,b.steelDark),22,1.6,42),h(D(1.4,1.4,46,b.steelDark),0,0,0,0,0,Math.PI/2));let f=de(h(D(.8,.8,28,b.steel),0,14,0),h(Ge(new Zt(2,14,10),b.black),0,28.5,0),h(D(2.6,2.6,2.4,b.steelDark),0,0,0,0,0,Math.PI/2));f.position.set(25.4,28,4),r.add(f);let p=(O,F)=>Math.max(Math.max(0,Math.abs(O)-15)/3,Math.max(0,Math.abs(F)-11)/7),m=Ph(kl.tray),y=(O,F)=>9.3*(1-$e(p(O,F)*1.1)),g=new We;r.add(g);let x=new Cn(44,44,66,66);x.rotateX(-Math.PI/2);let v=x.attributes.position,C=Ge(x,s);g.add(C);let E=document.createElement("canvas");E.width=E.height=440;{let O=E.getContext("2d");O.fillStyle="#fff",O.fillRect(0,0,440,440),O.fillStyle="#000",O.fillRect(60,100,320,240)}let R=new oe({color:15895608,roughness:.45,side:en,alphaMap:new Rn(E),transparent:!0,alphaTest:.02}),S=new Ie(x,R);S.visible=!1,g.add(S);let _=new Cn(32,24,48,36);_.rotateX(-Math.PI/2);{let O=_.attributes.position;for(let F=0;F<O.count;F++)O.setY(F,m(O.getX(F),O.getZ(F)));_.computeVertexNormals()}let w=Ge(_,s);w.visible=!1,g.add(w);let z=[];{let O=[[-16,-12],[16,-12],[16,12],[-16,12],[-16,-12]];for(let F=0;F<=160;F++){let H=F/160*4,K=Math.min(3,Math.floor(H)),xe=H-K,V=O[K][0]+(O[K+1][0]-O[K][0])*xe,B=O[K][1]+(O[K+1][1]-O[K][1])*xe;z.push(Q(V,m(V,B)+.35,B))}}let I=new Tn(new sn(z,!1,"catmullrom",0),320,.28,6),L=new Ie(I,new oe({color:2764082,roughness:.5}));L.visible=!1,g.add(L);let q=O=>{for(let F=0;F<v.count;F++)v.setY(F,O(v.getX(F),v.getZ(F)));v.needsUpdate=!0,x.computeVertexNormals()},$=Pa(40,36,44);$.position.set(62,0,0),r.add($);let U=de(h(P(40,1.5,32,ce.blue),0,.75,0),h(P(40,16,1.5,ce.blue),0,8,15.25),h(P(40,16,1.5,ce.blue),0,8,-15.25),h(P(1.5,16,32,ce.blue),19.25,8,0),h(P(1.5,16,32,ce.blue),-19.25,8,0));U.position.set(62,0,44),r.add(U);let X=Ge(_,s);X.rotation.x=Math.PI,X.position.set(62,11.2,44),r.add(X);let N=!1,j=(O,F)=>{m=Ph(kl[O]);let H=kl[O];l.clear();let K=new Cn(30,22,90,66);K.rotateX(-Math.PI/2);let xe=K.attributes.position;for(let ye=0;ye<xe.count;ye++)xe.setY(ye,H(xe.getX(ye),xe.getZ(ye)));K.computeVertexNormals(),l.add(Ge(K,b.beech));let V=Of(O);w.geometry=V,X.geometry=V;let B=kf[O]();{let ye=E.getContext("2d");ye.fillStyle="#fff",ye.fillRect(0,0,440,440),ye.fillStyle="#000",ye.beginPath(),B.getSpacedPoints(160).forEach((Ee,He)=>ye[He?"lineTo":"moveTo"]((Ee.x+22)*10,(Ee.y+22)*10)),ye.closePath(),ye.fill(),R.alphaMap.needsUpdate=!0}let te=B.getSpacedPoints(200).map(ye=>Q(ye.x,m(ye.x,ye.y)+.35,ye.y));te.push(te[0].clone()),I=new Tn(new sn(te,!1,"catmullrom",0),320,.28,6),L.geometry=I;let ge=F==="clear"?14675960:F;s.color.setHex(ge),R.color.setHex(ge),s.transparent=F==="clear",s.opacity=F==="clear"?.55:1,N=!1};return j("tray",15895608),r.userData.setProduct=j,r.userData.product={key:"tray",col:15895608,point:Q(62,16,44)},r.userData.anim=O=>{let H=O%26,K=O<26;if(X.visible=!K||H>23,H<2)g.position.set(0,53.3,70*(1-$e(H/2))),g.rotation.set(0,0,0);else if(H<15.5)g.position.set(0,53.3,0);else if(H<17.5){let ge=$e((H-15.5)/2);g.position.set(62*ge,53.3+22*Math.sin(Math.PI*ge)+(44.2-53.3)*ge,0)}else if(H<21)g.position.set(62,44.2,0),g.rotation.x=0;else if(H<23){let ge=(H-21)/2,ye=$e(ge);g.position.set(62,44.2+14*Math.sin(Math.PI*Math.min(1,ge*1.3))-(44.2-11.8)*ge*ge,44*ye),g.rotation.x=Math.PI*ye}else g.position.set(62,11.8,44),g.rotation.x=Math.PI;u.rotation.x=-1.25*(H<2?1:H<3?1-$e(H-2):H<14?0:H<15?$e(H-14):1),d.position.z=H<3?-40:H<4?-40+40*$e(H-3):H<8?0:H<9?-40*$e(H-8):-40,c.emissiveIntensity=H>3&&H<9?Math.min(1,(H-3)/1.2)*(1.1+.25*Math.sin(O*5)):0;let xe=H<9.2?0:H<11?$e((H-9.2)/1.8):H<13.5?1:H<14.5?1-$e(H-13.5):0;f.rotation.x=.35+1.5*xe,o.position.y=31+21*xe;let V=H<11?0:H<12.6?$e((H-11)/1.6):H<14?1:H<15?1-$e(H-14):0;a.rotation.z=1.2-2.4*V;let B=H<4?0:H<9?2.6*$e((H-4)/5):2.6;if(H<2)q(()=>0),N=!1;else if(H<11){let ge=Math.max(0,o.position.y-52+9.3)/9.3;q((ye,Ee)=>Math.max(-B*Math.max(0,1-(ye/18)**2)*Math.max(0,1-(Ee/18)**2),y(ye,Ee)*ge)),N=!1}else if(H<12.8){let ge=$e((H-11)/1.6);q((ye,Ee)=>y(ye,Ee)+(m(ye,Ee)-y(ye,Ee))*ge),N=!1}else N||(q(m),N=!0);L.visible=H>=17.8&&H<20.4,I.setDrawRange(0,Math.floor(I.index.count*Math.max(0,Math.min(1,(H-17.8)/1.5))/6)*6);let te=H>=19.3;C.visible=!te&&H<25.8,w.visible=te&&H<25.8,S.visible=te&&H<20.8,R.opacity=1-Math.max(0,Math.min(1,(H-19.8)/1)),S.position.y=te?Math.max(0,(H-19.5)*10):0},r.userData.view=Q(-.8,0,.75),r.userData.zoom=.8,r}function xy(){let e=new oe({color:10185727,roughness:.55}),t=new oe({color:11832575,emissive:5909200,emissiveIntensity:.55,roughness:.35}),n=new oe({color:12164095,emissive:4858016,emissiveIntensity:.35,roughness:.4,transparent:!0,opacity:.6}),s=new oe({color:14266938,metalness:.35,roughness:.4}),r=new oe({color:2105894,metalness:.5,roughness:.5}),a=new We;a.add(h(pe(210,40,46,2,Mt.cream),0,20,0),h(pe(66,24,40,2,Mt.teal),-62,52,0),h(pe(26,21,30,2,ce.dark),-97,50.5,0));let o=-8,l=74,c=-36;a.add(h(pe(14,18,18,2,Mt.teal),-51,l,0),h(D(5.5,5.5,22,b.steelShiny),-69,l,0,0,0,Math.PI/2),h(D(6.5,6.5,3,b.steelDark),-80,l,0,0,0,Math.PI/2),h(P(10,10,10,b.steelDark),-69,l-9,0)),a.add(h(D(5.4,5.4,72,Mt.glass,28),o,l,0,0,0,Math.PI/2),h(D(2,3.4,8,b.steelShiny),o+40,l,0,0,0,Math.PI/2),h(P(8,12,8,b.steelDark),-20,l-8,0),h(P(8,12,8,b.steelDark),18,l-8,0));let d=Mt.hot.clone();for(let V=0;V<4;V++)a.add(h(new Ie(new $t(5.7,.9,8,28),d),o-22+V*15,l,0,0,Math.PI/2,0));let u=new We;u.position.set(o-6,l,0),a.add(u),u.add(h(D(1.8,1.8,62,b.steelShiny),0,0,0,0,0,Math.PI/2),h(D(.2,1.8,4,b.steelShiny),33,0,0,0,0,-Math.PI/2));{let V=[];for(let B=0;B<=200;B++){let te=B/200,ge=te*Math.PI*2*10;V.push(Q(-29+58*te,Math.cos(ge)*3.6,Math.sin(ge)*3.6))}u.add(Ge(new Tn(new sn(V),400,.7,8),b.steelShiny))}let f=Ge(new Et(4.6,4.6,1,24),t);f.rotation.z=Math.PI/2,a.add(f);let p=Ge(new Et(4.5,4.5,1,24),n);p.rotation.z=Math.PI/2,a.add(p),a.add(h(D(3,3,10,b.steelShiny),c,l+10,0),h(D(22,4,34,Mt.glass,32),c,l+32,0),h(new Ie(new $t(22,1,8,40),b.steelShiny),c,l+49,0,Math.PI/2),h(D(23,23,2,b.steelDark,32),c,l+51,0),h(D(9,9,14,b.steelShiny),c,l+59,0),h(D(10,10,2,b.steelDark),c,l+67,0),h(pe(8,6,6,1,ce.dark),c+10,l+62,0)),a.add(h(D(14,14,32,ce.blue,28),-70,16,-48),h(D(13,13,.6,e,28),-70,32.4,-48),ai([[c+14,l+63,0],[c+26,l+68,-12],[-52,80,-40],[-66,46,-48],[-68,34,-48]],1.2,ce.dark));let m=320,y=new Jn(new Zt(1.5,8,6),e,m),g=new Ht,x=[];for(let V=0;V<m;V++){let B=Math.random()*28,te=4+18*(B/34)-1.8,ge=Math.random()*7,ye=Math.sqrt(Math.random())*te;x.push([c+Math.cos(ge)*ye,l+15.5+B,Math.sin(ge)*ye])}x.sort((V,B)=>V[1]-B[1]),x.forEach((V,B)=>{g.position.set(...V),g.updateMatrix(),y.setMatrixAt(B,g.matrix)}),a.add(y);let v=36,C=new Jn(new Zt(1.3,8,6),e,v);a.add(C);let E=20,R=new Jn(new Zt(1.3,8,6),e,E);a.add(R),a.add(h(P(6,46,46,Mt.teal),30,63,0),h(P(6,46,46,Mt.teal),96,63,0),h(D(7,7,20,b.steelShiny),109,63,0,0,0,Math.PI/2),h(D(8,8,3,b.steelDark),119,63,0,0,0,Math.PI/2));for(let V of[46,80])for(let B of[-18,18])a.add(h(D(1.6,1.6,72,b.steelShiny),64,V,B,0,0,Math.PI/2));let S=de(h(P(8,22,22,Mt.alu),0,0,0));S.position.set(37,63,0),a.add(S);for(let V of[-4.5,-1.5,1.5,4.5])for(let B of[-1.5,1.5])S.add(h(D(1.2,1.2,.3,r,16),4.1,B,V,0,0,Math.PI/2));S.add(h(P(.3,7.6,13,r),4.05,0,0));let _=de(h(P(6,40,40,Mt.teal),0,0,0),h(P(8,22,22,Mt.alu),-7,0,0),h(P(.3,7.6,13,r),-11.05,0,0));_.position.set(52,63,0),a.add(_);let w=[];for(let V of[-1,1])for(let B=0;B<2;B++){let te=Ge(new zt(19.5,2,5),s);a.add(te),w.push([te,V,B])}a.add(h(P(72,44,1,Mt.glass),64,64,24),h(P(72,2,2,b.steelDark),64,86,24),h(P(72,2,2,b.steelDark),64,42,24)),a.add(h(P(18,12,.6,b.black),44,25,23.2),h(P(14,1,26,b.steel),44,17,34,.5,0,0),h(P(1,3,26,b.steel),37,18.5,34,.5,0,0),h(P(1,3,26,b.steel),51,18.5,34,.5,0,0));let z=de(h(P(36,1,30,ce.blue),0,1,0),h(P(36,14,1,ce.blue),0,7,15),h(P(36,14,1,ce.blue),0,7,-15),h(P(1,14,30,ce.blue),18,7,0),h(P(1,14,30,ce.blue),-18,7,0));z.position.set(44,0,52),a.add(z);let I=new We;a.add(I);for(let V=0;V<9;V++){let B=Qu(10185727);B.position.set(32+V%3*12+(Math.random()-.5)*3,4+Math.floor(V/3)*3.5,44+V*7%3*8),B.rotation.set(Math.random()*.4,Math.random()*3,Math.random()*.4),I.add(B)}let L=Qu(10185727);a.add(L);let q=new un().setFromAxisAngle(Q(0,0,1),Math.PI/2).multiply(new un().setFromAxisAngle(Q(0,1,0),Math.PI/2));a.add(h(pe(22,30,6,1,ce.dark),-30,30,25),h(P(16,10,.3,Mt.screen),-30,36,28.2),h(ki(),-34,24,28.4),h(oi(),-24,24,28.4));let $=new Ht;a.userData.anim=V=>{let te=V%8/8,ge=48,ye=V%ge;te<.4&&(u.rotation.x-=.16);let Ee=te<.4?-14:te<.5?-14+8*$e((te-.4)/.1):te<.78?-6:te<.92?-6-8*$e((te-.78)/.14):-14;u.position.x=Ee;let He=Ee+35,it=te<.4?Math.max(.3,(28-He)*$e(te/.4)):Math.max(.3,28-He);f.scale.y=it,f.position.set(He+it/2,l,0);let qe=-12,Xe=Math.max(.3,He-2-qe);p.scale.y=Xe,p.position.set(qe+Xe/2,l,0),_.position.x=te<.62?52:te<.7?52+12*$e((te-.62)/.08):te<.8?64:te<.9?64-12*$e((te-.8)/.1):52;let et=_.position.x+3,fe=93,ve=fe-et,Re=19.5,ke=Math.sqrt(Math.max(0,Re*Re-(ve/2)**2));if(w.forEach(([Ve,Fe,tt])=>{let lt=tt?et+ve/2:et,gt=tt?fe:et+ve/2,Y=63+Fe*10+(tt?Fe*ke:0),Tt=63+Fe*10+(tt?0:Fe*ke);Ve.position.set((lt+gt)/2,(Y+Tt)/2,0),Ve.rotation.z=Math.atan2(Tt-Y,gt-lt)}),L.quaternion.copy(q),L.visible=te>.45,te<.7)L.position.set(_.position.x-7.75,63,0);else if(te<.74)L.position.set(64-7.75-6*$e((te-.7)/.04),63,0);else{let Ve=(te-.74)/.24;if(Ve<.22)L.position.set(50.6,63-23*(Ve/.22)**2,0),L.rotateX(Ve*6);else if(Ve<.38)L.visible=!1;else if(Ve<.75){let Fe=(Ve-.38)/.37;L.position.set(44,25-12*Fe,22+24*Fe),L.quaternion.identity(),L.rotation.set(.5,0,0)}else{let Fe=(Ve-.75)/.25;L.quaternion.identity(),L.position.set(44,13-6*Fe,46+6*Fe),L.rotation.set(.5*(1-Fe),Fe*1.5,0)}}for(let Ve=0;Ve<v;Ve++){let Fe=(Ve/v+V*.35)%1,tt,lt,gt=(Ve*37%7-3)*.5,Y=1;if(Fe<.35)tt=c+(Ve*13%5-2)*.5,lt=l+15-12*(Fe/.35);else{let Tt=(Fe-.35)/.65;tt=c+Tt*(qe-c+3),lt=l+3.6-Ve*11%3*.6,Y=Tt>.75?1-(Tt-.75)/.25:1}te>=.4&&(Y=0),$.position.set(tt,lt,gt),$.scale.setScalar(Math.max(.001,Y)),$.updateMatrix(),C.setMatrixAt(Ve,$.matrix)}C.instanceMatrix.needsUpdate=!0;let Ne=ye<42?1-.65*(ye/42):.35+.65*$e((ye-42)/5);y.count=Math.floor(m*Math.min(1,Ne));for(let Ve=0;Ve<E;Ve++){let Fe=ye>42&&ye<47.2,tt=(Ve/E+V*1.4)%1;$.position.set(c+(Ve*7%5-2)*1.2,l+50-28*tt,(Ve*3%5-2)*1.2),$.scale.setScalar(Fe?1:.001),$.updateMatrix(),R.setMatrixAt(Ve,$.matrix)}R.instanceMatrix.needsUpdate=!0};let U={pg:e.color.getHex(),mc:t.color.getHex(),me:t.emissive.getHex(),sc:n.color.getHex(),se:n.emissive.getHex()},X=()=>{let V=_.position.x+3,B=93,te=B-V,ge=19.5,ye=Math.sqrt(Math.max(0,ge*ge-(te/2)**2));w.forEach(([Ee,He,it])=>{let qe=it?V+te/2:V,Xe=it?B:V+te/2,et=63+He*10+(it?He*ye:0),fe=63+He*10+(it?0:He*ye);Ee.position.set((qe+Xe)/2,(et+fe)/2,0),Ee.rotation.z=Math.atan2(fe-et,Xe-qe)})},N=null,j=null,O=(V,B)=>{let te=new nt(B?14675960:V);e.color.copy(te),e.transparent=!!B,e.opacity=B?.55:1,e.needsUpdate=!0,t.color.copy(te).lerp(new nt(16777215),.15),t.emissive.copy(te).multiplyScalar(.55),n.color.copy(te),n.emissive.copy(te).multiplyScalar(.35)},F=(V,B)=>{for(let te=0;te<v;te++){let ge=(te/v+B*.35)%1,ye,Ee,He=(te*37%7-3)*.5,it=1;if(ge<.35)ye=c+(te*13%5-2)*.5,Ee=l+15-12*(ge/.35);else{let qe=(ge-.35)/.65;ye=c+qe*(-12-c+3),Ee=l+3.6-te*11%3*.6,it=qe>.75?1-(qe-.75)/.25:1}$.position.set(ye,Ee,He),$.scale.setScalar(V?Math.max(.001,it):.001),$.updateMatrix(),C.setMatrixAt(te,$.matrix)}C.instanceMatrix.needsUpdate=!0},H=(V,B)=>{for(let te=0;te<E;te++){let ge=(te/E+B*1.4)%1;$.position.set(c+(te*7%5-2)*1.2,l+50-28*ge,(te*3%5-2)*1.2),$.scale.setScalar(V?1:.001),$.updateMatrix(),R.setMatrixAt(te,$.matrix)}R.instanceMatrix.needsUpdate=!0},K=(V,B)=>{u.position.x=V;let te=V+35;B=Math.max(.3,B),f.scale.y=B,f.position.set(te+B/2,l,0);let ge=Math.max(.3,te-2+12);p.scale.y=ge,p.position.set(-12+ge/2,l,0)},xe=0;return a.userData.game={steps:{hop:2.6,heat:1.6,close:1.3,melt:3,inject:1.1,cool:2.2,open:1.3,eject:2.6},start(V,B,te){O(V,B),I.visible=!1,L.visible=!1,y.count=0,d.emissiveIntensity=0,d.color.set(6974834),_.position.x=64,X(),K(-14,.3),p.visible=!1,f.visible=!1,F(!1,0),H(!1,0),N&&a.remove(N),N=te,N.visible=!1,a.add(N),j=0},run(V,B,te){if(xe=te,V==="hop"&&(y.count=Math.floor(m*.95*$e(B)),H(B<.97,te)),V==="heat"&&(d.emissiveIntensity=.9*B,d.color.set(6974834).lerp(Mt.hot.color,B)),V==="close"&&(_.position.x=64-12*$e(B),X()),V==="melt"&&(u.rotation.x-=.16,F(B<.92,te),p.visible=f.visible=!0,K(-14,7*$e(B)),y.count=Math.floor(m*(.95-.2*B))),V==="inject"){F(!1,te);let ge=-14+8*$e(B);K(ge,Math.max(.3,28-(ge+35)))}if(V==="open"&&(_.position.x=52+12*$e(B),X(),N.visible=!0,N.position.set(_.position.x-7.75,63,0),N.rotation.set(0,0,0)),V==="eject")if(B<.15)N.position.set(64-7.75-6*$e(B/.15),63,0);else{let ge=(B-.15)/.85;if(ge<.25)N.position.set(50.6,63-23*(ge/.25)**2,0),N.rotation.z=ge*3;else if(ge<.4)N.visible=!1;else if(ge<.8){N.visible=!0;let ye=(ge-.4)/.4;N.position.set(44,25-12*ye,22+24*ye),N.rotation.set(.5,0,0)}else{let ye=(ge-.8)/.2;N.position.set(44,13-6*ye,46+6*ye),N.rotation.set(.5*(1-ye),ye*1.2,0)}}},end(){N&&(a.remove(N),N=null),e.color.setHex(U.pg),e.transparent=!1,e.opacity=1,e.needsUpdate=!0,t.color.setHex(U.mc),t.emissive.setHex(U.me),n.color.setHex(U.sc),n.emissive.setHex(U.se),d.color.copy(Mt.hot.color),d.emissiveIntensity=Mt.hot.emissiveIntensity,I.visible=!0,p.visible=f.visible=!0,H(!1,0)},binPoint:Q(44,14,52)},a.userData.product={key:"brick",col:10185727,point:Q(44,14,52)},a.userData.view=Q(.25,0,1),a.userData.zoom=.62,a}var jt=200,yi=i=>16*Math.pow(Math.sin(Math.PI*i),.62),Mr=i=>(5+3.5*Math.exp(-(((i-.47)/.13)**2)))*Math.pow(Math.sin(Math.PI*i),.3),Ra=i=>8.5*Math.pow(Math.sin(Math.PI*i),.55),si=i=>7*Math.pow(2*i-1,4),rs=-jt/2+jt*.47,Hl=21,Hh=11.5,Cs=(i,e)=>{let t=Math.min(.999,Math.max(.001,(i+jt/2)/jt)),n=yi(t),s=Math.min(1,Math.abs(e)/n),r=Math.pow(s,2.4/2),a=Math.sqrt(Math.max(0,1-r*r));return si(t)+Mr(t)*Math.pow(a,2/2.2)};function ef(){let i=new ht;for(let e=0;e<=40;e++){let t=e/40;i[e?"lineTo":"moveTo"](-jt/2+jt*t,yi(t)+.4)}for(let e=40;e>=0;e--){let t=e/40;i.lineTo(-jt/2+jt*t,-yi(t)-.4)}return i}function _y(i,e){let t=de(h(new Ie(new $t(i,1.6,8,48),e),0,0,0,0,Math.PI/2,0),h(new Ie(new $t(i*.55,1.2,8,40),e),0,0,0,0,Math.PI/2,0),h(D(5,5,6,b.steelDark),0,0,0,0,0,Math.PI/2));for(let n=0;n<8;n++){let s=n*Math.PI/4;t.add(h(P(2,i,2,e),0,Math.cos(s)*i/2,Math.sin(s)*i/2,s,0,0))}return t}function yy(){let i=new We,e=-240,t=30,n=105,s=235,r=ce.lightOrange,a=new oe({color:13081146,metalness:.4,roughness:.45}),o=new oe({color:15250746,metalness:.3,roughness:.4}),l=new oe({color:15132906,metalness:.3,roughness:.4});i.add(h(P(320,8,180,r),0,s-4,-240),h(P(8,s,180,r),-156,s/2,-240),h(P(8,s,180,r),156,s/2,-240),h(P(320,s,8,r),0,s/2,-326));for(let N of[-152,152])i.add(h(P(12,s,10,b.steelDark),N,s/2,-150));i.add(h(P(320,12,10,b.steelDark),0,s-6,-150));let c=Mt.ovenIn;i.add(h(P(304,1,164,c),0,s-8.5,-240),h(P(1,s-10,164,c),-151.5,(s-10)/2,-240),h(P(1,s-10,164,c),151.5,(s-10)/2,-240),h(P(304,s-10,1,c),0,(s-10)/2,-321.5),h(P(304,1,164,c),0,.6,-240));let d=new _s(16742954,0,260,0);d.position.set(0,140,-240),i.add(d),i.add(h(P(670,10,10,b.steelDark),0,s+14,-145),h(P(8,s+18,8,b.steelDark),-331,(s+18)/2,-145),h(P(8,s+18,8,b.steelDark),331,(s+18)/2,-145));let u=new oe({color:16756848,emissive:16738848,emissiveIntensity:0,transparent:!0,opacity:.28,roughness:.1,depthWrite:!1}),f=[-1,1].map(N=>{let j=de(h(P(161,40,6,r),0,s/2-20,0),h(P(161,55,6,r),0,-s/2+27.5,0),h(P(25,s-95,6,r),-68,-7.5,0),h(P(25,s-95,6,r),68,-7.5,0),h(P(111,s-95,1,u),0,-7.5,0),h(P(4,60,4,b.steelDark),-N*74,0,4),h(P(14,8,10,b.steelDark),-50,s/2+6,0),h(P(14,8,10,b.steelDark),50,s/2+6,0));return j.position.set(N*80.5,s/2,-147),i.add(j),j});i.add(h(pe(70,34,56,3,ce.red),40,s+17,-290),h(D(9,9,70,b.steelDark),40,s+68,-290),h(pe(30,20,20,2,ce.dark),-40,s+10,-300),h(D(3,3,60,ce.dark),-40,s+10,-270,Math.PI/2));let p=(N,j,O,F)=>{let H=Math.hypot(O-N,F-j),K=Math.atan2(F-j,O-N);for(let V of[16,32])i.add(h(P(H,1.6,1.6,a),(N+O)/2,s+V,(j+F)/2,0,-K,0));let xe=Math.ceil(H/40);for(let V=0;V<=xe;V++)i.add(h(P(1.8,32,1.8,a),N+(O-N)*V/xe,s+16,j+(F-j)*V/xe))};p(-158,-152,158,-152),p(158,-152,158,-328),p(158,-328,-158,-328),p(-158,-328,-158,-200);{let F=-7.2727272727272725,H=s/22,K=-180;for(let B=0;B<22;B++)i.add(h(P(28,1.6,8,b.steelDark),K,H*(B+1)-.8,-162+F*(B+.5)));let xe=Math.hypot(s,-160),V=Math.atan2(s,160);for(let B of[K-15,K+15])i.add(h(P(2,6,xe,a),B,s/2,-484/2,V,0,0));for(let B of[K-15])i.add(h(P(1.6,1.6,xe,a),B,s/2+32,-484/2,V,0,0));for(let B=0;B<=4;B++)i.add(h(P(1.6,32,1.6,a),K-15,s*B/4+16,-162+-160*B/4))}{let N=de(h(pe(22,74,30,2,ce.dark),0,37,0),h(P(.4,13,20,Mt.screen),11.2,58,0),h(D(1,1,.6,ce.go||b.steel),11.4,46,-6,0,0,Math.PI/2),h(oi(),11.4,46,6),h(D(2.4,2.4,1,b.black),11.4,36,0,0,0,Math.PI/2));N.children[3].rotation.set(0,Math.PI/2,0),N.position.set(171,0,-205),i.add(N)}for(let N of[-100,100])i.add(h(P(5,4,420,b.steelShiny),N,2,-120),h(P(14,1,420,b.steelDark),N,.5,-120));i.add(h(P(6,5,200,ce.blue),118,2.5,-60));let m=new We;m.position.z=t,i.add(m),m.add(h(P(240,8,110,ce.grey),0,16,0),h(P(250,4,4,b.black),0,13,57),h(P(250,4,4,b.black),0,13,-57));for(let N of[-100,100])for(let j of[-40,40])m.add(h(D(6,6,4,b.steelDark),N,10,j,0,0,Math.PI/2));for(let N of[-47,47])m.add(h(P(10,n-20,12,ce.grey),0,n/2+10,N),h(D(4,4,8,b.steelDark),0,n,N*.93,Math.PI/2));m.add(h(pe(20,16,16,2,l),-20,30,-38),h(D(7,7,18,l),-36,30,-38,0,0,Math.PI/2),h(pe(16,14,14,2,ce.grey),0,n-12,-56),h(D(6,6,12,l),0,n-12,-68,Math.PI/2));let y=new We;y.position.y=n,m.add(y);for(let N of[-41,41])y.add(h(P(276,5,5,ce.machRed),0,0,N));for(let N of[-138,138])y.add(h(P(6,6,88,ce.machRed),N,0,0),h(pe(12,14,14,2,ce.dark),N,0,0));y.add(h(pe(14,14,14,2,ce.dark),146,0,0),h(D(5,5,12,l),156,0,0,0,0,Math.PI/2));let g=new We;y.add(g);for(let N of[-121,121]){let j=_y(32,b.steel);j.position.x=N,g.add(j,h(D(3,3,14,b.steelShiny),N+Math.sign(N)*9,0,0,0,0,Math.PI/2))}let x=44,v=16,C=232;g.add(h(P(C,v,x,Mt.alu),0,-v/2,0),h(P(C+6,1.4,x+6,Mt.alu),0,-.7,0));for(let N=-3;N<=3;N++)g.add(h(P(2,v,x+2,b.steelDark),N*34,-v/2,0));let E=Ge(new Ii(ef()),Mt.cavity);E.rotation.x=-Math.PI/2,E.position.y=.05,g.add(E);let R=new We;R.position.set(0,0,-x/2),g.add(R),R.add(h(P(C,v,x,Mt.alu),0,v/2,x/2),h(P(C+6,1.4,x+6,Mt.alu),0,.7,x/2));for(let N=-3;N<=3;N++)R.add(h(P(2,v,x+2,b.steelDark),N*34,v/2,x/2));let S=Ge(new Ii(ef()),Mt.cavity);S.rotation.x=Math.PI/2,S.position.set(0,-.05,x/2),R.add(S);for(let N=-3;N<=3;N++)g.add(h(P(4,6,3,b.steelDark),N*32+16*(N<3),-2,x/2+2)),R.add(h(P(4,6,3,b.steelDark),N*32+16*(N<3),2,x+2));for(let N=-2;N<=2;N++)g.add(h(D(1.6,1.6,8,b.steelDark),N*48,-1,-x/2-1,0,0,Math.PI/2));let _=900,w=new Jn(new Zt(.8,5,4),Mt.powder,_),z=new Ht;for(let N=0;N<_;N++){let j=.06+.88*Math.random(),O=-jt/2+jt*j,F=(Math.random()*2-1)*yi(j)*.85;z.position.set(O,.8+Math.random()*1.4,F),z.updateMatrix(),w.setMatrixAt(N,z.matrix)}g.add(w);let I=Q(0,38.6,150);for(let N of[-60,60])i.add(h(P(6,30,40,b.steelDark),N,15,150),h(pe(10,3.6,40,1.2,b.black),N,31.8,150));let L=new We;L.visible=!1,i.add(L);let q=I.y,$=null,U=(N,j)=>{L.clear();let O=zl(j==="clear"?14675960:j,{rough:.4}),F;if($=null,N==="kayak"){let te=Uf(O);F=te.obj,$=te.acc,$.visible=!1}else F=vn[N].make(O).obj,F.rotation.set(0,0,0);let H=new Pt().setFromObject(F),K=H.getSize(Q(0,0,0)),xe=Math.min(1,200/K.x,40/K.z,30/K.y);F.scale.multiplyScalar(xe);let V=new Pt().setFromObject(F),B=V.getCenter(Q(0,0,0));F.position.sub(B),L.add(F),q=33.6+(V.max.y-V.min.y)/2,Mt.powder.color.set(j==="clear"?15790320:j).lerp(new nt(16777215),.25)};U("kayak",8378060),i.userData.setProduct=U,i.userData.product={key:"kayak",col:8378060,point:Q(0,62,150)};let X=[];for(let N of[-1,1]){let j=de(h(D(4,4,90,b.steelDark),0,45,0),h(P(40,4,40,b.steelDark),0,2,0)),O=de(h(D(32,32,16,o,36,!0),0,0,0,0,0,Math.PI/2),h(new Ie(new $t(32,1.6,8,40),b.steelDark),-8*N,0,0,0,Math.PI/2,0),h(D(8,8,10,o),7*N,0,0,0,0,Math.PI/2));for(let H=0;H<4;H++)O.add(h(P(.8,64,.8,b.steelDark),-8*N,0,0,H*Math.PI/4,0,0));for(let H of[12,22])O.add(h(new Ie(new $t(H,.4,6,32),b.steelDark),-8*N,0,0,0,Math.PI/2,0));O.position.y=96,j.add(O);let F=new We;for(let H=0;H<5;H++){let K=de(h(P(1,26,8,b.steel),0,13,0,.3,0,0));K.rotation.x=H*2*Math.PI/5,F.add(K)}F.add(h(D(5,5,6,b.steelDark),0,0,0,0,0,Math.PI/2)),F.position.y=96,j.add(F),X.push(F),j.position.set(N*205,0,t),i.add(j)}i.add(h(P(40,4,30,b.steelDark),-205,20,130),h(pe(36,24,26,2,ce.blue),-205,34,130),h(P(32,1,22,Mt.powder),-205,46.2,130));for(let N of[-222,-188])for(let j of[118,142])i.add(h(D(3,3,3,b.black),N,3,j,0,0,Math.PI/2),h(P(2,16,2,b.steelDark),N,12,j));return i.userData.anim=N=>{let O=N%37,F=N<37;if($){let V=Math.max(0,Math.min(1,(O-33.8)/2.4));$.visible=O>33.8||!F&&O<9.6,$.position.y=O>33.8?40*Math.pow(1-$e(V),2):0}R.rotation.x=-1.9*(O<2.5?1:O<4?1-$e((O-2.5)/1.5):O<27?0:$e((O-27)/1.5)),w.count=O<2.5?Math.floor(_*$e(O/2.2)):O<9?_:0;let H=O<4?0:O<5?$e(O-4):O<8?1:O<9?1-$e(O-8):O<18?0:O<19?$e(O-18):O<22?1:O<23?1-$e(O-22):0;f.forEach((V,B)=>V.position.x=(B?1:-1)*(80.5+165*H)),m.position.z=O<5?t:O<8?t+(e-t)*$e((O-5)/3):O<19?e:O<22?e+(t-e)*$e((O-19)/3):t;let K=Math.max(0,Math.min(1,(O-5)/22));g.rotation.x=Math.PI*2*7*$e(K),y.rotation.z=.36*Math.sin(Math.PI*K)*Math.sin(2*Math.PI*(O-5)/5.5);let xe=O<8?0:O<9?O-8:O<18?1:O<20?1-(O-18)/2:0;if(c.emissiveIntensity=.7*xe,u.emissiveIntensity=.35*xe,d.intensity=2.6*xe*(.9+.1*Math.sin(N*3)),X.forEach(V=>V.rotation.x+=O>19&&O<27?.5:O>27&&O<28?.5*(28-O):0),O>=27){L.visible=!0;let V=Q(0,n,t);if(O<29.5)L.position.copy(V);else if(O<31)L.position.set(0,n+50*$e((O-29.5)/1.5),t);else{let B=$e((O-31)/2.5);L.position.set(0,n+50+(q-n-50)*B*B,t+(I.z-t)*B)}}else!F&&O<9.6?(L.visible=!0,L.position.set(I.x,q,I.z),O>8&&(L.position.x=-600*((O-8)/1.6)**2)):L.visible=!1},i.userData.pinY=275,i.userData.focus=Q(0,85,-70),i}var Eh=new oe({color:13114880,emissive:16726528,emissiveIntensity:1.3,roughness:.3});function Ul(i,e,t){let n=t.clone().sub(e),s=n.length();i.position.copy(e).addScaledVector(n,.5),i.scale.set(1,Math.max(.001,s),1),i.quaternion.setFromUnitVectors(Q(0,1,0),n.normalize())}function by(){let i=new oe({color:4020851,metalness:.35,roughness:.45}),e=new oe({color:14266938,metalness:.35,roughness:.4}),t=new oe({color:2105894,metalness:.5,roughness:.5}),n=new We;n.add(h(pe(230,36,60,2,i),0,18,0),h(pe(60,20,44,2,i),-80,46,0)),n.add(h(D(9,9,44,b.steelShiny),-82,62,0,0,0,Math.PI/2),h(D(10,10,3,b.steelDark),-104,62,0,0,0,Math.PI/2),h(D(5,5,44,b.steelDark),-18,62,0,0,0,Math.PI/2),h(P(8,3,6,t),-12,66.6,0));let s=de(h(D(2,2,40,b.steelShiny),0,0,0,0,0,Math.PI/2),h(D(4.4,4.4,4,b.steelShiny),20,0,0,0,0,Math.PI/2));s.position.set(-62,62,0),n.add(s),n.add(h(P(8,56,56,i),6,64,0),h(P(8,56,56,i),104,64,0),h(D(8,8,22,b.steelShiny),119,64,0,0,0,Math.PI/2));for(let R of[42,86])for(let S of[-22,22])n.add(h(D(2,2,100,b.steelShiny),55,R,S,0,0,Math.PI/2));let r=de(h(P(12,36,36,b.steelDark),0,0,0),h(P(.3,9,22,t),6.1,0,0));r.position.set(16,64,0),n.add(r);let a=de(h(P(8,50,50,i),0,0,0),h(P(12,36,36,b.steelDark),-10,0,0),h(P(.3,9,22,t),-16.1,0,0));a.position.set(38,64,0),n.add(a);let o=[];for(let R of[-1,1])for(let S=0;S<2;S++){let _=Ge(new zt(2.4,1,6),e);n.add(_),o.push([_,R,S])}n.add(h(P(80,58,1,Mt.glass),55,66,30),h(P(80,2,2,b.steelDark),55,95,30),h(P(80,2,2,b.steelDark),55,37,30)),n.add(h(P(44,40,4,ce.grey),-70,20,82),h(P(44,40,4,ce.grey),-70,20,42),h(P(4,40,36,ce.grey),-90,20,62),h(P(4,40,36,ce.grey),-50,20,62),h(P(36,34,36,ce.dark),-70,17,62),h(P(36,.6,36,Eh),-70,34.6,62),h(P(44,2,4,b.steelDark),-70,41,82),h(P(44,2,4,b.steelDark),-70,41,42),h(P(4,2,44,b.steelDark),-48,41,62),h(P(4,2,44,b.steelDark),-92,41,62));let l=Q(-34,92,40);n.add(h(D(5,6,92,b.steelDark),-34,46,40),h(pe(14,10,14,2,ce.dark),-34,94,40));let c=Ge(new Et(1.6,1.6,1,12),ce.machRed);n.add(c);let d=de(h(D(5,3.5,6,b.steelDark,20,!0),0,0,0),h(D(3.5,3.5,.4,b.steelDark,20),0,-3,0)),u=h(D(4.6,4.6,.4,Eh,20),0,1.6,0);d.add(u),n.add(d);let f=Ge(new Et(.8,.8,1,10),Eh);f.visible=!1,n.add(f);let p=Mt.alu.clone(),m=new We;n.add(m);let y=new We;n.add(y);let g=de(h(P(36,1,30,ce.blue),0,1,0),h(P(36,14,1,ce.blue),0,7,15),h(P(36,14,1,ce.blue),0,7,-15),h(P(1,14,30,ce.blue),18,7,0),h(P(1,14,30,ce.blue),-18,7,0));g.position.set(40,0,62),n.add(g);let x=(R,S)=>{let _=vn[R].make(S).obj;return _.rotation.set(0,0,0),Ff(_,19)},v=R=>{m.clear(),m.add(x(R,p)),y.clear();for(let S=0;S<5;S++){let _=x(R,Mt.alu);_.position.set(30+S%3*10,4.5+Math.floor(S/3)*4,58+S*2%3*4-4),_.rotation.set((Math.random()-.5)*.5,Math.random()*3,(Math.random()-.5)*.5),y.add(_)}};v("car"),n.userData.setProduct=v,n.userData.product={key:"car",col:"al",point:Q(40,12,62)},n.add(h(P(14,1,30,b.steel),40,22,42,.6,0,0),h(P(16,10,.6,b.black),40,30,30.2)),n.add(h(pe(22,30,6,1,ce.dark),-30,24,31),h(P(16,10,.3,Mt.screen),-30,30,34.2),h(ki(),-34,18,34.4),h(oi(),-24,18,34.4));let C=[[0,Q(-50,82,58)],[1.6,Q(-70,37,62)],[2.4,Q(-70,37,62)],[3.4,Q(-62,84,50)],[4.6,Q(-12,76,0)],[6,Q(-12,76,0)],[7.2,Q(-50,82,58)]],E=R=>{for(let S=0;S<C.length-1;S++)if(R<=C[S+1][0]){let _=$e((R-C[S][0])/(C[S+1][0]-C[S][0]));return C[S][1].clone().lerp(C[S+1][1],_)}return C[C.length-1][1].clone()};return n.userData.anim=R=>{let _=R%13,w=E(_);d.position.copy(w),Ul(c,l,w.clone().add(Q(0,4,0)));let z=_>4.6&&_<6?Math.sin(Math.PI*(_-4.6)/1.4)*1.3:0;d.rotation.z=-z,u.visible=_>1.9&&_<5.6,f.visible=_>4.8&&_<5.8,f.visible&&Ul(f,Q(-9,74,0),Q(-12,66,0)),s.position.x=_<6?-62:_<6.4?-62+30*$e((_-6)/.4):_<10.5?-32:_<12?-32-30*$e((_-10.5)/1.5):-62,a.position.x=_<8.4?38:_<9?38+22*$e((_-8.4)/.6):_<10.6?60:_<11.4?60-22*$e((_-10.6)/.8):38;let I=a.position.x+4,L=100,q=L-I,$=58/2+1,U=Math.sqrt(Math.max(0,$*$-(q/2)**2));o.forEach(([X,N,j])=>{let O=64+N*14;Ul(X,Q(j?I+q/2:I,O+(j?N*U:0),0),Q(j?L:I+q/2,O+(j?0:N*U),0)),X.scale.x=X.scale.z=1}),m.visible=_>6.4;{let X=_<8.4?1:_<9.6?1-(_-8.4)/1.2:0;p.emissive.setRGB(1,.15,0),p.emissiveIntensity=1.4*X,p.color.setRGB(.77+.23*X,.79-.5*X,.82-.74*X)}if(_<9)m.position.set(a.position.x-16-2,64,0);else if(_<9.4)m.position.set(60-18.5-6*$e((_-9)/.4),64,0);else if(_<10.2){let X=(_-9.4)/.8;m.position.set(36,64-30*X*X,0)}else if(_<10.5)m.visible=!1;else if(_<12){let X=(_-10.5)/1.5;m.position.set(40,30-20*X,30+28*X)}else m.visible=!1},n.userData.view=Q(-.3,0,1),n.userData.zoom=.8,n.userData.pinY=110,n}function vy(){let i=new oe({map:Is((K,xe)=>{K.fillStyle="#8a6a48",K.fillRect(0,0,xe,xe);for(let V=0;V<5e3;V++)K.fillStyle=Math.random()<.5?"#6e5236":"#a4835e",K.fillRect(Math.random()*xe,Math.random()*xe,1.5,1.5)},256,[2,2]),roughness:.95}),e=new oe({color:4935768,metalness:.6,roughness:.4}),t=new oe({color:1907223,roughness:1}),n=new oe({color:13114880,emissive:16726528,emissiveIntensity:1.3,roughness:.4}),s=new We,r=Pa(110,56,40);r.position.set(10,0,0),s.add(r),s.add(h(D(22,24,44,ce.grey,32),-82,22,0),h(new Ie(new $t(22.5,1.4,8,32),ce.machRed),-82,30,0,Math.PI/2),h(D(14,14,.4,n,24),-82,44.3,0),h(D(23,23,6,ce.grey,32),-82,47,-44),h(P(4,4,30,b.steelDark),-82,45,-24),h(D(2.4,2.4,44,b.steelDark),-82,22,-44),h(D(8,8,2,b.steelDark),-82,1,-44),h(D(3,3,20,b.steelDark),-104,10,14,0,0,1.2),h(pe(10,8,8,1,ce.dark),-114,6,22));let a=K=>{let xe=de(h(P(44,K,2,e),0,K/2,15),h(P(44,K,2,e),0,K/2,-15),h(P(2,K,28,e),21,K/2,0),h(P(2,K,28,e),-21,K/2,0));for(let V of[-24,24])xe.add(h(D(1,1,6,e),V,K/2,0,0,0,Math.PI/2));return xe},o=40.2,l=14;s.add(h(P(48,1,34,b.beech),0,o+.5,0));let c=new We;c.position.set(0,o+1,0),s.add(c);let d=new We;d.position.y=l/2,c.add(d);let u=a(l);u.position.y=-l/2,d.add(u);let f=h(P(40,1,28,i),0,-l/2,0);d.add(f);let p=new We;p.position.set(0,-l/2+2.5,0),d.add(p);let m=h(D(9.6,9.6,.3,t,32),0,l+1.25,0);s.add(m),m.position.y=o+1+l+.2;let y=new We;s.add(y);let g=a(l);y.add(g);let x=h(P(40,l,28,i),0,l/2,0);y.add(x);let v=[h(D(2.2,3,18,b.beech,16),-14,9,0),h(D(3.6,3.6,18,b.beech,16),14,9,0)];v.forEach(K=>y.add(K));let C=[h(D(3,3,.3,t,16),-14,l+.2,0),h(D(3.6,3.6,.3,t,16),14,l+.2,0)];C.forEach(K=>y.add(K));let E=[h(D(3,3,.4,n,16),-14,l+.4,0),h(D(3.6,3.6,.4,n,16),14,l+.4,0)];E.forEach(K=>y.add(K));let R=de(h(D(.9,.9,90,b.steelDark),0,0,0,0,0,Math.PI/2),h(P(2,10,2,b.steelDark),-45,0,0),h(P(2,2,16,b.black),-45,-5,0),h(P(2,10,2,b.steelDark),45,0,0),h(P(2,2,16,b.black),45,-5,0),h(new Ie(new $t(7.4,.8,8,24),b.steelDark),0,-2,0,Math.PI/2)),S=de(h(D(7,5,14,new oe({color:5917248,roughness:.8}),20),0,-6,0),h(D(6.4,6.4,.3,n,20),0,.9,0));R.add(S),s.add(R);let _=Ge(new Et(.9,.9,1,10),n);s.add(_);let w=zh("al",{sand:!0}),z=de(),I=new We;I.rotation.x=Math.PI/2,z.add(I);let L=de(h(D(2.2,3,18,w,16),-14,9,0),h(P(14,2,3,w),-7.5,0,0)),q=de(h(D(3.6,3.6,18,w,16),14,9,0),h(P(8,2,3,w),11,0,0));z.add(L,q),s.add(z);let $=h(new Ie(new $i(26,10,24),i),0,o+5,0);s.add($);let U=new We;U.rotation.x=Math.PI/2,U.position.set(48,40+2.5,8),s.add(U);let X=(K,xe)=>{let V=vn[K].make(xe).obj;return V.rotation.set(0,0,0),Ff(V,19)},N=(K,xe)=>{let V=ri[xe]||ri.al;w.color.setHex(V.col),w.metalness=V.metal,I.clear(),I.add(X(K,w)),p.clear();let B=X(K,b.beech);B.rotation.x=Math.PI/2,p.add(B),U.clear(),U.add(X(K,w))};N("wheel","al"),s.userData.setProduct=N,s.userData.product={key:"wheel",col:"al",point:Q(48,46,8)};let j=de(h(P(30,1,24,ce.blue),0,1,0),h(P(30,12,1,ce.blue),0,6,12),h(P(30,12,1,ce.blue),0,6,-12),h(P(1,12,24,ce.blue),15,6,0),h(P(1,12,24,ce.blue),-15,6,0));j.position.set(85,0,10),s.add(j);let O=Q(-82,48,0),F=Q(-4,o+1+2*l+22,0),H=n.clone();return E.forEach(K=>K.material=H),s.userData.anim=K=>{let V=K%26;f.scale.y=l*(V<.3?0:V<2?$e((V-.3)/1.7):1),f.position.y=-l/2+f.scale.y/2,d.rotation.x=V<2?0:V<3?Math.PI*$e(V-2):Math.PI;let B=V>7.4&&V<8.4?$e((V-7.4)/1):V>=8.4?1:0;p.visible=V<8.4,p.position.set(0,-l/2+2.5-22*B,0),m.visible=V>=8.2&&V<19.5;let te=o+1+l,ge=te+40;V>=3&&V<7.2?ge=te+40*(1-$e((V-3)/.8)):V>=7.2&&V<8.6?ge=te+30*$e((V-7.2)/.6):V>=8.6&&V<17?ge=te+30*(1-$e((V-8.6)/.7)):V>=17&&(ge=te+60*$e((V-17)/.8)),y.position.set(0,ge,0),y.visible=V>=3&&V<17.8,x.scale.y=V<4?.001:V<6?$e((V-4)/2):1,x.position.y=l*x.scale.y/2,v.forEach(ve=>{ve.visible=V>=3.2&&V<7,ve.position.y=9+(V>6?20*$e((V-6)/.8):0)}),C.forEach(ve=>ve.visible=V>=6.6);let ye=[[9.5,O],[10.3,O.clone().add(Q(0,40,0))],[11.4,F.clone()],[13,F.clone()],[14,O.clone().add(Q(0,40,0))],[14.6,O]],Ee=O.clone();for(let ve=0;ve<ye.length-1;ve++)V>=ye[ve][0]&&V<ye[ve+1][0]&&(Ee=ye[ve][1].clone().lerp(ye[ve+1][1],$e((V-ye[ve][0])/(ye[ve+1][0]-ye[ve][0]))));R.position.copy(Ee),S.rotation.z=V>11.4&&V<13?Math.sin(Math.PI*(V-11.4)/1.6)*1.1:0,_.visible=V>11.7&&V<12.8,_.visible&&Ul(_,Q(Ee.x-7,Ee.y-3,0),Q(-14,te+l+.5,0));let He=V>=11.9,it=V<11.9?0:V<14.6?1:V<17?1-(V-14.6)/2.4:0;E.forEach(ve=>ve.visible=He&&V<17.8),H.emissiveIntensity=1.3*it,H.color.copy(w.color).lerp(new nt(.78,.12,0),it),H.metalness=.75*(1-it),H.roughness=.32+.1*it,f.visible=V<17.4,u.visible=!0,$.visible=V>=17.4&&V<25,$.scale.set(1,V<18?$e((V-17.4)/.6):1,1),z.visible=V>=17.4;let qe=Q(0,o+1+2.5,0),Xe=Q(30,40+2.5+12,8),et=Q(48,40+2.5,8);if(V<18.2)z.position.copy(qe);else if(V<19.6){let ve=$e((V-18.2)/1.4);z.position.copy(qe.clone().lerp(Xe,ve))}else V<20.4?z.position.copy(Xe.clone().lerp(et,$e((V-19.6)/.8))):z.position.copy(et);let fe=V<21?0:$e(Math.min(1,(V-21)/1.4));L.visible=q.visible=V<22.6;for(let[ve,Re]of[[L,0],[q,0]])ve.position.set(37*fe,-36*fe+12*Math.sin(Math.PI*fe),2*fe);U.visible=V<17.4},s.userData.view=Q(.15,0,1),s.userData.zoom=.75,s.userData.pinY=80,s}function Lf(){let i=new We,e=-900,t=365,n=-370,s=230,r=new oe({color:5593439,roughness:.92}),a=new oe({color:14271322,roughness:.7});i.add(h(P(t-e,4,s-n,r),(e+t)/2,-2,(n+s)/2));let o=(d,u,f,p)=>{i.add(h(P(u-d,.4,2,a),(d+u)/2,.2,f),h(P(u-d,.4,2,a),(d+u)/2,.2,p),h(P(2,.4,p-f,a),d,.2,(f+p)/2),h(P(2,.4,p-f,a),u,.2,(f+p)/2))};o(-515,155,-355,212),o(172,352,-255,-8),o(172,352,30,212),o(-850,-545,-255,-30),o(-850,-545,50,212);let l=[];i.userData.items=l;let c=(d,u,f,p,m,y=0)=>(d.rotation.y=p||0,d.position.set(u,0,f),i.add(d),d.userData.key=m,d.userData.idle=y,l.push({key:m,obj:d,anim:d.userData.anim}),d.userData.anim&&d.userData.anim(y),d);return c(yy(),-178,0,0,"rotoMoulder",0),c(xy(),250,-128,Math.PI/2,"injectionMoulder",0),c(gy(),258,150,Math.PI/2,"vacuumFormer",2.6),c(by(),-700,-150,0,"dieCaster",0),c(vy(),-705,135,0,"sandCasting",0),i.userData.center=Q(-270,0,-60),i}var Dn={abs:{n:"ABS",full:"Acrylonitrile butadiene styrene",kind:"thermo",blurb:"Tough, hard and scratch resistant, with a high-quality glossy finish.",uses:"Games controllers, appliance casings, toys.",cols:[14168636,3108816,2303531,15921902,15886e3,3119706]},pp:{n:"Polypropylene",full:"Polypropylene (PP)",kind:"thermo",blurb:"Light, tough and flexible, with good chemical resistance. Can be bent many times without breaking (living hinges).",uses:"Phone cases, bottle caps, food containers.",cols:[15526624,14168636,3108816,3119706,15886e3,2303531]},hdpe:{n:"HDPE",full:"High density polyethylene",kind:"thermo",blurb:"Tough and stiff, with good chemical resistance. Slightly waxy feel.",uses:"Buckets, bottle caps, crates, bottles.",cols:[15921902,3108816,14168636,3119706,2303531]},acrylic:{n:"Acrylic",full:"Polymethyl methacrylate (PMMA)",kind:"thermo",blurb:"Rigid and hard, can be crystal clear. Glossy, but scratches easily and is brittle.",uses:"Light covers and lenses, displays, signs.",cols:["clear",14168636,3108816,5922662]},uf:{n:"Urea formaldehyde",full:"Urea formaldehyde (UF)",kind:"set",blurb:"Thermosetting: hard, brittle, heat resistant and a good electrical insulator.",uses:"Electrical plugs, sockets and switches."},mf:{n:"Melamine formaldehyde",full:"Melamine formaldehyde (MF)",kind:"set",blurb:"Thermosetting: hard, heat resistant, stain resistant and safe with food.",uses:"Tableware, kitchen worktop laminates."}},Ca={14168636:"Red",3108816:"Blue",2303531:"Black",15921902:"White",15886e3:"Pink",3119706:"Green",15526624:"Natural",5922662:"Smoke grey",clear:"Clear"};function zl(i,e={}){let t=i==="clear";return new oe({color:t?14675960:i,roughness:e.rough??(t?.04:.3),metalness:0,side:en,transparent:t||!!e.tint,opacity:t?.42:e.tint?.6:1,depthWrite:!t})}var qn=(i,e=.7)=>{let t=i.clone();return t.color.multiplyScalar(e),t};function My(i){let e=new We,t=32,n=16,s=9.6,r=1.2;e.add(h(P(t,r,n,i),0,s-r/2,0),h(P(t,s,r,i),0,s/2,n/2-r/2),h(P(t,s,r,i),0,s/2,-n/2+r/2),h(P(r,s,n,i),t/2-r/2,s/2,0),h(P(r,s,n,i),-t/2+r/2,s/2,0));for(let c=0;c<4;c++)for(let d=0;d<2;d++)e.add(h(D(2.4,2.4,1.8,i,24),-12+c*8,s+.9,-4+d*8));for(let c=0;c<3;c++)e.add(h(new Ie(new Et(3.25,3.25,s-r,24,1,!0),i),-8+c*8,(s-r)/2,0),h(new Ie(new Et(2.4,2.4,s-r,24,1,!0),i),-8+c*8,(s-r)/2,0),h(new Ie(new or(2.4,3.25,24),i),-8+c*8,.01,0,Math.PI/2));let a=new oe({color:new nt(i.color).multiplyScalar(.45),roughness:.85,side:en});for(let c of[-12,12])for(let d of[-4,4])e.add(h(D(1.3,1.3,.15,a,20),c,s-r-.09,d),h(new Ie(new $t(1.3,.12,6,20),a),c,s-r-.1,d,Math.PI/2));e.add(h(D(1.1,.8,.6,a,16),-4,s-r-.3,0),h(D(1.1,.8,.6,a,16),4,s-r-.3,0));let o=new oe({color:new nt(i.color).multiplyScalar(.35),roughness:.6});return e.add(h(P(t+.14,.32,n+.14,o),0,.5,0)),e.position.y=-s/2,{obj:de(e),feat:[{o:e,p:Q(-4,s+1.8,4),t:"Fine detail",d:"Injection moulding copies every detail of the mould very accurately, like these crisp studs, with a glossy finish straight from the mould."},{o:e,p:Q(t/2+.1,.5,4),t:"Split line",d:"The thin line round the bottom edge is where the two halves of the mould met."},{o:e,p:Q(12,s-r-.2,4),t:"Ejector pin marks",d:"Round marks inside, where the ejector pins pushed the brick out of the mould.",pose:{x:-2.4,y:.25}},{o:e,p:Q(4,s-r-.6,0),t:"Injection points",d:"Small marks where the molten plastic was injected into the mould. They are hidden inside the brick.",pose:{x:-2.4,y:-.25}},{o:e,p:Q(-8,.2,0),t:"Hollow with tubes",d:"Thin walls of even thickness cool evenly and use less plastic. The tubes underneath grip the studs of the brick below.",pose:{x:-2.2,y:0}},{o:e,p:Q(-t/2-.1,6,-4),t:"Draft angle",d:"The sides taper very slightly so the product slides out of the mould easily."}]}}function tf(i=1,e=1){let t=[];for(let n=0;n<96;n++){let s=n/96*Math.PI*2,r=Math.cos(s),a=Math.sin(s),o=42*r,l=19*a,c=u=>Math.exp(-((((s-u+Math.PI*3)%(Math.PI*2)-Math.PI)/.5)**2)),d=24*(c(-2.2)+c(-.94));o+=d*r*.55,l+=d*a*1.1,a>0&&(l*=.8),t.push(new be(o*i,l*e))}return t}function Ta(i,e=!0,t=!1){let n=new ht(tf());e&&!t&&n.holes.push(new kt(tf(.94,.88).reverse()));let s=new Gt(n,{depth:i,bevelEnabled:t,bevelSize:1.4,bevelThickness:1.4,bevelSegments:3,curveSegments:24});return s.rotateX(-Math.PI/2),s}function Sy(i){let e=new oe({color:2500652,roughness:.5}),t=qn(i,.78),n=new We,s=new We;n.add(Ge(Ta(1.6,!1,!1),i),h(Ge(Ta(9),i),0,1.6,0));let r=[[-26,-4],[26,-4],[-36,20],[36,20]];for(let[u,f]of r){n.add(h(D(2.6,2.6,8.5,i,20),u,5.8,f),h(D(1,1,.2,e,12),u,10.1,f));for(let p=0;p<4;p++){let m=p*Math.PI/2,y=new ht([new be(0,0),new be(4,0),new be(0,6)]),g=Ge(new Gt(y,{depth:.8,bevelEnabled:!1}),i);g.position.set(u+Math.cos(m)*2.4,1.6,f+Math.sin(m)*2.4),g.rotation.y=-m,a(g),n.add(g)}}function a(u){u.geometry.translate(0,0,-.4)}{let u=qn(i,.8);for(let[f,p]of[[-8,10],[8,10],[-30,12],[30,12]])n.add(h(D(1.2,1.2,.1,u,16),f,1.66,p))}n.add(h(P(40,6,.9,i),0,4.6,-8),h(P(.9,6,26,i),-12,4.6,6),h(P(.9,6,26,i),12,4.6,6),h(P(14,5,.9,i),-30,4.1,8),h(P(14,5,.9,i),30,4.1,8)),s.add(h(Ge(Ta(5.6),i),0,0,0),h(Ge(Ta(1.4,!1,!0),i),0,5.6,0));for(let[u,f]of[[28,-10],[33,-5],[23,-5],[28,0]])s.add(h(D(2.2,2.2,2,t,20),u,8.4,f));s.add(h(P(9,1.6,3,t),-28,8.2,-5),h(P(3,1.6,9,t),-28,8.2,-5));for(let u of[-13,13])s.add(h(D(4.6,4.6,1,e,24),u,7.8,9),h(D(2,2,2.4,e,16),u,9,9),h(D(4.2,4.2,1.4,e,24),u,10.6,9));s.add(h(D(2.6,2.6,.8,t,20),0,7.9,-8));let o=qn(i,.55),l=h(Ge(Ta(.25),o),0,10.5,0);l.scale.set(1.004,1,1.004),s.position.y=10.6;let c=de(n,s,l);return c.position.y=-8,{obj:de(c),feat:[{o:n,p:Q(43.2,10.6,0),t:"Split line",d:"The controller is made in two parts, a top and a bottom. A fine line shows where they join."},{o:s,p:Q(28,9.6,-5),t:"Fine detail",d:"Button holes, curves and textures are moulded in one go, with a high-quality finish straight from the mould."},{o:s,p:Q(-22,7.1,6),t:"Material",d:"ABS: tough, hard and scratch resistant, with a glossy finish. Ideal for products that get handled and dropped."},{o:n,p:Q(8,1.8,10),t:"Ejector pin marks",d:"Round marks on the inside, where ejector pins pushed each part out of the mould.",inside:!0},{o:n,p:Q(-26,10.3,-4),t:"Bosses",d:"Hollow pillars that screws go into to hold the two halves together.",inside:!0,higher:!0},{o:n,p:Q(6,7.7,-8),t:"Ribs",d:"Thin walls across the inside that make the part stiff and strong without making it thick and heavy.",inside:!0,higher:!0},{o:n,p:Q(39,4.6,20),t:"Webs",d:"Small triangular supports that brace the bosses so they do not snap.",inside:!0,higher:!0},{o:n,p:Q(-12,10.7,-15.6),t:"Thin, even walls",d:"Walls of the same thickness all over cool at the same rate, so the part does not warp or sink.",inside:!0}],explode:u=>{s.position.y=10.6+30*u,l.visible=u<.05}}}function Ey(i){let e=new oe({color:2500652,roughness:.6}),t=(o,l)=>{let c=new We,d=(v,C,E,R)=>new Et(v,C,E,40,1,!0,-Math.PI/2,Math.PI),u=Ge(d(14,14,70),i);u.rotation.z=Math.PI/2,c.add(u);let f=Ge(d(9,13.6,16),i);f.rotation.z=Math.PI/2,f.position.x=-43,c.add(f);let p=new sr(14,40,-Math.PI/2,Math.PI);p.rotateY(-Math.PI/2);let m=Ge(p,e);m.position.x=35,c.add(m);let y=Ge(d(8.5,9.5,46),i);y.position.set(10,-30,0),y.rotation.z=-.22,c.add(y);let g=new sr(9.5,30,0,Math.PI);g.rotateX(Math.PI/2);let x=Ge(g,i);if(x.position.set(5,-52.4,0),x.rotation.z=-.22,c.add(x),c.add(h(P(5,1.2,.6,e),-6,-8,13.9),h(P(2.4,3.4,1,qn(i,.7)),9,-22,9)),l){for(let[v,C]of[[-20,0],[22,0],[8,-20],[13,-42]]){c.add(h(D(2.4,2.4,12,i,18),v,C,6,Math.PI/2),h(D(1,1,12.2,e,12),v,C,6,Math.PI/2));for(let E of[0,Math.PI]){let R=h(P(.8,5,8,i),v+Math.cos(E)*3.2,C,8);c.add(R)}}for(let v of[-28,-10,8,26]){let C=new or(10.6,14,32,1,-Math.PI/2,Math.PI);C.rotateY(-Math.PI/2);let E=Ge(C,i);E.position.x=v,c.add(E)}}return o<0&&(c.scale.z=-1),c},n=t(1,!1),s=t(-1,!0);n.position.z=.12,s.position.z=-.12;let r=de(n,s);return r.position.y=14,{obj:de(r),feat:[{o:s,p:Q(0,14,0),t:"Split line",d:"The casing is made in two halves that meet along this line."},{o:n,p:Q(-47,0,11),t:"Fine detail",d:"Smooth curves, the nozzle and the switch openings are all moulded in one go."},{o:n,p:Q(10,-30,9.6),t:"Material",d:"ABS: tough and hard, a good electrical insulator and has a glossy finish."},{o:s,p:Q(-20,0,.4),t:"Bosses",d:"Hollow pillars for the screws that hold the two halves together.",inside:!0,higher:!0},{o:s,p:Q(-28,12.3,.4),t:"Ribs",d:"Curved ribs inside stiffen the barrel without making the walls thick.",inside:!0,higher:!0},{o:s,p:Q(11.2,-17.5,6),t:"Webs",d:"Thin supports that brace each boss against the wall.",inside:!0,higher:!0}],explode:o=>{n.position.z=.12+42*o,r.rotation.x=-Math.PI/2*o,r.position.y=14-8*o}}}function as(i,e,t){let n=new ht;return n.moveTo(-i/2+t,-e/2),n.lineTo(i/2-t,-e/2),n.quadraticCurveTo(i/2,-e/2,i/2,-e/2+t),n.lineTo(i/2,e/2-t),n.quadraticCurveTo(i/2,e/2,i/2-t,e/2),n.lineTo(-i/2+t,e/2),n.quadraticCurveTo(-i/2,e/2,-i/2,e/2-t),n.lineTo(-i/2,-e/2+t),n.quadraticCurveTo(-i/2,-e/2,-i/2+t,-e/2),n}function wy(i){let e=as(38,78,7),t=as(13,13,4),n=new kt(as(13,13,4).getPoints(8).map(d=>new be(d.x-9,d.y+26)));e.holes.push(n);let s=new Gt(e,{depth:1,bevelEnabled:!0,bevelSize:.6,bevelThickness:.6,bevelSegments:2});s.rotateX(-Math.PI/2);let r=as(38,78,7);r.holes.push(new kt(as(35.6,75.6,6).getPoints(12).reverse()));let a=new Gt(r,{depth:7,bevelEnabled:!1});a.rotateX(-Math.PI/2);let o=de(Ge(s,i),h(Ge(a,i),0,1,0),h(P(1.6,1.4,14,i),19.4,5,-10),h(P(1.6,1.4,8,i),-19.4,5,-12));for(let d of[-10,10,26])o.add(h(D(1.2,1.2,.1,qn(i,.82),16),-6,1.62,d));o.rotation.x=.75,o.updateMatrix();let l=(d,u,f)=>Q(d,u,f).applyMatrix4(o.matrix);return{obj:de(o),feat:[{p:l(-9,1.6,-26),t:"Moulded-in holes",d:"Openings like this camera cut-out are formed by the mould, so no drilling or cutting is needed."},{p:l(19,7,8),t:"Thin, even walls",d:"Thin walls of the same thickness all round keep the case light and stop it warping as it cools."},{p:l(4,1.8,8),t:"Material",d:"Polypropylene: tough and flexible, so the case can bend to clip on and take knocks."},{p:l(-6,1.8,26),t:"Ejector pin marks",d:"Small round marks on the inside where ejector pins pushed the case out of the mould."}]}}function Ty(i){let e=new We,t=15,n=13;e.add(h(D(t,t,1.4,i,48),0,n-.7,0),h(new Ie(new Et(t,t,n-1.4,48,1,!0),i),0,(n-1.4)/2,0));for(let o=0;o<60;o++){let l=o/60*Math.PI*2;e.add(h(P(.7,n-3,.7,i),Math.cos(l)*(t+.25),n/2,Math.sin(l)*(t+.25),0,-l,0))}let s=[];for(let o=0;o<=200;o++){let l=o/200,c=l*Math.PI*2*2.2;s.push(Q(Math.cos(c)*(t-1.2),2+l*7,Math.sin(c)*(t-1.2)))}e.add(Ge(new Tn(new sn(s),300,.75,8),i)),e.add(h(new Ie(new Et(t+.2,t+.2,2.6,48,1,!0),i),0,-2.4,0));for(let o=0;o<12;o++){let l=o/12*Math.PI*2;e.add(h(P(1,1.6,.6,i),Math.cos(l)*(t+.2),-.6,Math.sin(l)*(t+.2),0,-l,0))}e.position.y=-5,e.rotation.x=Math.PI+.75,e.updateMatrix();let r=(o,l,c)=>Q(o,l,c).applyMatrix4(e.matrix);return{obj:de(e),feat:[{p:r(0,5,-13.6),t:"Internal thread",d:"The screw thread inside is moulded at the same time as the rest of the cap."},{p:r(15.6,7,0),t:"Grip ribs",d:"Fine ribs round the outside make the cap easier to grip and twist."},{p:r(0,-3.6,15.4),t:"Tamper ring",d:"A ring joined by tiny bridges that snap when the cap is first opened."},{p:r(-15.6,9,0),t:"Material",d:"Polypropylene or HDPE: tough, slightly flexible to seal well, and unaffected by most drinks."}]}}function Ay(i){let e=new We;e.add(h(new Ie(new Et(24,18,34,48,1,!0),i),0,17,0),h(D(18,18,1.4,i,48),0,.7,0),h(new Ie(new $t(24.6,1.2,10,48),i),0,34,0,Math.PI/2));for(let s of[-1,1])e.add(h(P(3,6,4,i),s*24.4,30,0));let t=[];for(let s=0;s<=40;s++){let r=Math.PI*s/40;t.push(Q(Math.cos(r)*25.5,30+Math.sin(r)*22,0))}return e.add(Ge(new Tn(new sn(t),60,.6,8),b.steelShiny)),e.add(h(D(1.6,1.6,.2,qn(i,.8),16),0,1.5,0)),e.position.y=-18,{obj:de(e),feat:[{p:Q(21,14,6),t:"Draft angle",d:"The sides taper outwards so the bucket slides off the mould easily, and so buckets stack inside each other."},{p:Q(0,16,24.5),t:"Rim",d:"A thicker rim round the top makes the thin wall stiff."},{p:Q(0,-16,0),t:"Injection point",d:"A small round mark in the middle of the base shows where the molten plastic was injected."},{p:Q(-20,-6,10),t:"Material",d:"HDPE or polypropylene: tough, stiff and resistant to chemicals."}]}}function Ry(i){let e=new We,t=as(40,22,6),n=new Gt(t,{depth:4,bevelEnabled:!0,bevelSize:1.6,bevelThickness:2,bevelSegments:4});n.rotateX(-Math.PI/2),e.add(Ge(n,i));for(let r=0;r<9;r++)e.add(h(P(1.2,1.2,18,i),-16+r*4,-.6,0,0,0,Math.PI/4));for(let r of[-1,1])e.add(h(P(4,4,2,i),r*18,-2,0));return e.rotation.x=.9,{obj:de(e),feat:[{p:Q(0,6,3),t:"Clear and glossy",d:"Acrylic can be crystal clear, with a glossy surface straight from the mould."},{p:Q(-12,0,-4),t:"Fine detail",d:"Tiny prisms on the back spread the light. Injection moulding copies detail this fine perfectly."},{p:Q(18,-2,0),t:"Clips",d:"Clips are moulded in so the lens snaps into the light without screws."},{p:Q(8,6,6),t:"Material",d:"Acrylic: rigid and clear, but brittle and scratches easily."}]}}var vn={brick:{n:"Toy building brick",make:My,mats:["abs"]},controller:{n:"Games controller",make:Sy,mats:["abs"]},hairdryer:{n:"Hairdryer casing",make:Ey,mats:["abs"]},phonecase:{n:"Phone case",make:wy,mats:["pp"]},cap:{n:"Bottle cap",make:Ty,mats:["pp","hdpe"]},bucket:{n:"Bucket",make:Ay,mats:["hdpe","pp"]},lens:{n:"Bike light lens",make:Ry,mats:["acrylic"]}},Nf={brick:"Studs and tubes need crisp, accurate detail.",controller:"Two shells with buttons, bosses and ribs.",hairdryer:"Two halves that screw together round the motor.",phonecase:"Thin and flexible, clips round your phone.",cap:"Thread and grip ribs moulded in one go.",bucket:"Tapered sides so it releases and stacks.",lens:"Crystal clear, with fine prisms on the back."},ri={al:{n:"Aluminium",kind:"nf",blurb:"Light, corrosion resistant and easy to cast. Melts at about 660 \xB0C.",uses:"Model cars, engine parts, cookware.",col:12896976,metal:.8,rough:.32},brass:{n:"Brass",kind:"nf",blurb:"An alloy of copper and zinc: corrosion resistant, attractive gold colour. Melts at about 900 \xB0C.",uses:"Taps, door handles, musical instruments.",col:14070364,metal:.85,rough:.3},cu:{n:"Copper",kind:"nf",blurb:"Soft, ductile and an excellent conductor of heat and electricity. Melts at about 1,085 \xB0C.",uses:"Pipes, wiring, cookware.",col:13072202,metal:.85,rough:.3},ci:{n:"Cast iron",kind:"fe",blurb:"Hard and strong in compression but brittle. Flows well when molten (about 1,150 \xB0C), so it casts very well.",uses:"Weights, engine blocks, vices, cookware.",col:5593439,metal:.6,rough:.75},ms:{n:"Mild steel",kind:"fe",blurb:"Tough and ductile, but rusts if not protected. Melts at about 1,450 \xB0C.",uses:"Car bodies, nuts and bolts, girders.",col:9278362,metal:.8,rough:.4},ss:{n:"Stainless steel",kind:"fe",blurb:"Hard and very corrosion resistant. Melts at about 1,450 \xB0C.",uses:"Cutlery, sinks, kitchen equipment.",col:12172996,metal:.9,rough:.22}};Dn.ps={n:"Polystyrene",full:"Polystyrene (including high impact polystyrene, HIPS)",kind:"thermo",blurb:"Light, rigid and cheap. Easy to mould. High impact polystyrene (HIPS) is tougher and is the sheet most used for vacuum forming.",uses:"Model kits, packaging, coat hangers, vacuum-formed trays.",cols:[15921902,2303531,14168636,3108816,3119706,10185727]};Dn.pe={n:"Polyethylene",full:"Polyethylene (PE)",kind:"thermo",extra:!0,blurb:"Tough and flexible, with excellent chemical resistance. Not on the National 5 materials list, but it is the plastic used most for rotational moulding.",uses:"Kayaks, water tanks, road barriers, bins.",cols:[8378060,14168636,3108816,3119706,15921902,2303531]};delete Dn.hdpe;vn.cap.mats=["pp"];vn.bucket.mats=["pp"];var Cy={8378060:"Turquoise",10185727:"Purple"};Object.assign(Ca,Cy);function zh(i,e={}){let t=ri[i]||ri.al;if(e.sand){let n=new nt(t.col).lerp(new nt(9080209),.45).multiplyScalar(.82);return new oe({color:n,metalness:.35,roughness:.88,side:en,bumpMap:Py(),bumpScale:2.2})}return new oe({color:t.col,metalness:t.metal,roughness:e.rough??t.rough,side:en})}var Rs=null;function Py(){if(Rs)return Rs;let i=512,e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,i,i);for(let s=0;s<2600;s++){let r=Math.random()*i,a=Math.random()*i,o=3+Math.random()*9,l=Math.random()<.6;for(let c of[-i,0,i])for(let d of[-i,0,i]){let u=t.createRadialGradient(r+c,a+d,0,r+c,a+d,o);u.addColorStop(0,l?"rgba(255,255,255,.22)":"rgba(0,0,0,.2)"),u.addColorStop(1,"rgba(128,128,128,0)"),t.fillStyle=u,t.fillRect(r+c-o,a+d-o,2*o,2*o)}}let n=t.getImageData(0,0,i,i);for(let s=0;s<n.data.length;s+=4){let r=(Math.random()-.5)*46;n.data[s]+=r,n.data[s+1]+=r,n.data[s+2]+=r}return t.putImageData(n,0,0),Rs=new Rn(e),Rs.wrapS=Rs.wrapT=Yi,Rs.repeat.set(2,2),Rs}function Iy(i,e,t=160,n=24){let s=i.computeFrenetFrames(t,!1),r=[],a=[];for(let c=0;c<=t;c++){let d=c/t,u=i.getPointAt(d),f=s.normals[c],p=s.binormals[c],m=e(d);for(let y=0;y<=n;y++){let g=y/n*Math.PI*2,x=Math.cos(g),v=Math.sin(g);r.push(u.x+m*(x*f.x+v*p.x),u.y+m*(x*f.y+v*p.y),u.z+m*(x*f.z+v*p.z))}}for(let c=0;c<t;c++)for(let d=0;d<n;d++){let u=c*(n+1)+d,f=u+n+1;a.push(u,f,u+1,f,f+1,u+1)}let o=new Yt;o.setAttribute("position",new ut(r,3));let l=[];for(let c=0;c<=t;c++)for(let d=0;d<=n;d++)l.push(c/t*4,d/n);return o.setAttribute("uv",new ut(l,2)),o.setIndex(a),o.computeVertexNormals(),o}function Ff(i,e){let t=new We;t.add(i);let n=new Pt().setFromObject(i),s=e/Math.max(...n.getSize(Q(0,0,0)).toArray());i.scale.multiplyScalar(s);let r=new Pt().setFromObject(i).getCenter(Q(0,0,0));return i.position.sub(r),t}var Ia=(i,e=.6)=>{let t=i.clone();return t.color.multiplyScalar(e),t.bumpMap=null,t},wh=1.6;function nf(i){let n=[],s=[];for(let a=0;a<=100;a++){let o=a/100,l=-jt/2+jt*o,c=Math.max(0,yi(o)-i),d=Math.max(0,Mr(o)-i),u=Math.max(0,Ra(o)-i),f=si(o);for(let p=0;p<=56;p++){let m=p/56*Math.PI*2,y=Math.cos(m),g=Math.sin(m);n.push(l,f+(g>0?d*Math.pow(g,2/2.2):-u*Math.pow(-g,2/2.6)),c*Math.sign(y)*Math.pow(Math.abs(y),2/2.4))}}for(let a=0;a<100;a++)for(let o=0;o<56;o++){let l=a*57+o,c=l+56+1,d=-jt/2+jt*(a+.5)/100,u=(o+.5)/56*Math.PI*2,f=yi((a+.5)/100)*Math.sign(Math.cos(u))*Math.pow(Math.abs(Math.cos(u)),2/2.4);Math.sin(u)>.2&&((d-rs)/Hl)**2+(f/Hh)**2<1||s.push(l,c,l+1,c,c+1,l+1)}let r=new Yt;return r.setAttribute("position",new ut(n,3)),r.setIndex(s),r.computeVertexNormals(),r}function Dy(i){let e=new We,t=i.clone();t.side=rn,t.color=new nt(i.color).multiplyScalar(.62),i.side=pi,e.add(Ge(nf(0),i),new Ie(nf(0),t));let n=[];for(let s=0;s<=64;s++){let r=s/64*Math.PI*2,a=rs+Hl*1.04*Math.cos(r),o=Hh*1.06*Math.sin(r);n.push(Q(a,Cs(a,o)+.5,o))}return e.add(Ge(new Tn(new sn(n,!0),128,1.5,10,!0),i)),{g:e,inner:t}}function Uf(i){(i.color.getHex()===15886e3||i.color.getHex()===16777215)&&i.color.setHex(8378060);let e=Dy(i),t=e.g,n=new oe({color:16738816,emissive:16727296,emissiveIntensity:.35,roughness:.5}),s=new oe({color:2764082,roughness:.6}),r=b.steelShiny,a=qn(i,.55);for(let F of[1,-1]){let H=[];for(let K=2;K<=98;K++){let xe=K/100;H.push(Q(-jt/2+jt*xe,si(xe),F*(yi(xe)+.15)))}t.add(Ge(new Tn(new sn(H),120,.32,6),a))}let o=[[-70,-11],[-46,11],[-70,11],[-46,-11],[85,-6],[66,7],[85,6],[66,-7]];for(let[F,H]of o)t.add(h(D(.9,.9,.4,s,12),F,Cs(F,H)+.15,H));let l=new We;t.add(l);let c=F=>l.add(Ge(new Tn(new sn(F.map(([H,K])=>Q(H,Cs(H,K)+1.4,K))),40,.5,6),n));for(let F of[-1,1])c([[-70,-11*F],[-58,0],[-46,11*F]]),c([[85,-6*F],[75,0],[66,7*F]]);for(let[F,H]of o){let K=Cs(F,H);l.add(h(new Ie(new $t(1.4,.45,8,16),r),F,K+1.6,H,0,Math.atan2(H,F),0),h(D(.5,.5,4,r,10),F,K-.3,H),h(D(.95,.95,.5,r,12),F,K+2.6,H))}let d=50,u=Cs(d,0),f=de(h(D(8.5,8.5,1.6,s,32),0,0,0),h(new Ie(new $t(8.5,.7,8,32),s),0,.8,0,Math.PI/2));f.position.set(d,u+.8,0),l.add(f),t.add(h(D(7.6,7.6,.3,s,32),d,u+.1,0)),l.add(h(pe(20,2.4,17,1,s),rs+5,-5.4,0),h(pe(3,9,15,1,s),rs+15,-1.5,0,0,0,.35));let p=new oe({color:new nt(i.color).multiplyScalar(.78),side:en,roughness:.5}),m=(F,H,K)=>{let xe=Math.cos(H),V=Math.sin(H),B=Math.max(0,yi(F)-K),te=Math.max(0,Mr(F)-K),ge=Math.max(0,Ra(F)-K);return[B*Math.sign(xe)*Math.pow(Math.abs(xe),2/2.4),si(F)+(V>0?te*Math.pow(V,2/2.2):-ge*Math.pow(-V,2/2.6))]},y=[];{let F=Xe=>si(Xe)+Mr(Xe),H=Xe=>si(Xe)-Ra(Xe),K=Xe=>si(Xe)+Mr(Xe)-wh,xe=Xe=>si(Xe)-Ra(Xe)+wh,V=Xe=>-jt/2+jt*Xe,B=Xe=>(Xe+jt/2)/jt,te=B(rs),ge=B(rs-Hl*1.02),ye=B(rs+Hl*1.02),Ee=.045,He=.955,it=60,qe=(Xe,et,fe)=>{let ve=[],Re=(ke,Ne,Ve)=>{for(let Fe=0;Fe<=it;Fe++){let tt=ke+(Ne-ke)*Fe/it;ve.push(new be(V(tt),Ve(tt)))}};return Re(Xe,et,F),Re(et,te,H),Re(te,fe,xe),Re(fe,Xe,K),new ht(ve)};y.push(new Ii(qe(ge,0,Ee)),new Ii(qe(ye,1,He)))}let g=new We;y.forEach(F=>g.add(Ge(F,p))),g.visible=!1,t.add(g);let x=rs,v=(x+jt/2)/jt,C=140,E=0;for(let F=0;F<=C;F++){let H=F/C*Math.PI;if(m(v,H,0)[0]<=Hh*1.06){E=H;break}}let R=Math.PI-E,S=[],_=[];for(let F=0;F<=C;F++){let H=R+(2*Math.PI+E-R)*F/C;S.push(m(v,H,0)),_.push(m(v,H,wh))}let w=new ht;S.forEach(([F,H],K)=>w[K?"lineTo":"moveTo"](F,H));for(let F=_.length-1;F>=0;F--)w.lineTo(..._[F]);let z=new Ii(w,1);z.rotateY(Math.PI/2);let I=Ge(z,p);I.position.x=x,I.visible=!1,t.add(I);let L=m(v,E,0),q=new mn(Q(-1,0,0),1e5);[i,e.inner,a,s].forEach(F=>F.clippingPlanes=[q]);let $=de(t),U=0,X=0,N=null,j=new mn(Q(0,0,-1),0),O=new mn(Q(-1,0,0),x);return{obj:$,acc:l,clip:!0,feat:[{o:t,p:Q(-30,Mr(.35)*.4+si(.35),yi(.35)*.7),t:"Hollow, one piece",d:"Cut along its length, you can see the kayak is completely hollow, made in one piece with no joins to leak.",section:"long",zoom:.62},{o:t,p:Q(x,L[1]-3,L[0]-.8),t:"Even wall thickness",d:"Close up, the wall is about the same thickness all the way round, from the bottom of the hull up to the lip of the cockpit. The powder coats the inside of the mould evenly.",section:"cross",zoom:.2},{o:t,p:Q(-95,si(.03)+1,0),t:"Large size",d:"This kayak is about 3 m long. Rotational moulding suits big hollow products because the moulds are fairly cheap and need no pressure."},{o:t,p:Q(-46,Cs(-46,11)+.5,11),t:"Fixing points",d:"Holes and threaded inserts can be built into the moulding so fittings like these deck-line hooks can be screwed on afterwards."},{o:t,p:Q(30,si(.65),yi(.65)+.2),t:"Split line",d:"A fine line along the side where the two halves of the mould met."},{o:t,p:Q(10,-Ra(.55)+1,4),t:"Surface finish",d:"The finish of the mould is copied onto the plastic, so it can be glossy or textured. No painting is needed: the colour goes all the way through."},{o:l,p:Q(-58,Cs(-58,0)+1.6,0),t:"Fittings",d:"Deck lines, hooks, the hatch cover and the seat are separate parts, added after moulding."}],tick:(F,H,K)=>{U=Math.min(1.2,U+H*.8);let xe=K&&K.section||null;xe&&xe!==N&&X>0?X=Math.max(0,X-H*3):(xe&&(N=xe),X=Math.max(0,Math.min(1,X+(xe?H:-H)*1.4))),X===0&&!xe&&(N=null);let V=!!N&&X>0,B=$e(X),te=Math.max(0,Math.min(1,(U-.75)*3.2)),ge=te<=0?0:1+2.2*Math.pow(te-1,3)+1.2*Math.pow(te-1,2);if(l.position.y=30*ge*(1-B),l.visible=B<.5,N==="cross"?t.position.set(-x*B,-(L[1]-6)*B,-(L[0]-2)*B):t.position.set(0,0,0),(t.parent||t).updateMatrixWorld(!0),V){let ye=(N==="long"?j:O).clone(),Ee=N==="long"?40:jt/2+12;ye.constant=(N==="long"?0:x)+(Ee-(N==="long"?0:x))*(1-B),q.copy(ye).applyMatrix4(t.matrixWorld)}else q.set(Q(-1,0,0),1e5);g.visible=N==="long"&&X>.97,I.visible=N==="cross"&&X>.97},pose:F=>F&&F.section==="long"?{y:0,x:.12}:F&&F.section==="cross"?{y:-Math.PI/2+.32,x:.12}:null}}function Ly(i){i.color.getHex()===15886e3&&i.color.setHex(14168636);let e=new ht;e.moveTo(-80,0),e.lineTo(-58,0),e.lineTo(-52,20),e.quadraticCurveTo(0,30,52,20),e.lineTo(58,0),e.lineTo(80,0),e.lineTo(80,64),e.quadraticCurveTo(80,72,72,74),e.lineTo(-72,74),e.quadraticCurveTo(-80,72,-80,64),e.lineTo(-80,0);let t=new kt;t.moveTo(-40,52),t.lineTo(-20,52),t.quadraticCurveTo(-16,52,-16,56),t.quadraticCurveTo(-16,60,-20,60),t.lineTo(-40,60),t.quadraticCurveTo(-44,60,-44,56),t.quadraticCurveTo(-44,52,-40,52),e.holes.push(t);let n=new kt;n.moveTo(20,52),n.lineTo(40,52),n.quadraticCurveTo(44,52,44,56),n.quadraticCurveTo(44,60,40,60),n.lineTo(20,60),n.quadraticCurveTo(16,60,16,56),n.quadraticCurveTo(16,52,20,52),e.holes.push(n);let s=new Gt(e,{depth:30,bevelEnabled:!0,bevelSize:4,bevelThickness:4,bevelSegments:4,curveSegments:16});s.translate(0,0,-15);let r=de(Ge(s,i)),a=qn(i,.6);return r.add(h(D(6,6,3,a,24),-60,79.5,0),h(D(4.5,4.5,3,qn(i,.8),24),60,79.5,0),h(pe(8,30,10,2,i),84,32,0),h(pe(8,30,10,2,i),-84,52,0)),r.add(h(P(168,.6,.6,a),0,37,19.2)),r.position.y=-40,{obj:de(r),feat:[{o:r,p:Q(0,74,19),t:"Hollow",d:"The barrier is hollow so it is light to move. Once in place it is filled with water through the cap on top to make it heavy."},{o:r,p:Q(-60,81,0),t:"Moulded-in thread",d:"The filler neck has a thread moulded in, so the cap screws straight on."},{o:r,p:Q(60,40,19),t:"Split line",d:"A line round the middle where the two halves of the mould met."},{o:r,p:Q(-30,56,19),t:"Handles and holes",d:"Holes and handles go right through the hollow body. Rotational moulding can form them in one go."},{o:r,p:Q(84,47,5),t:"Interlocking lugs",d:"Lugs at each end let barriers link together."},{o:r,p:Q(-70,20,19),t:"Even wall thickness",d:"The wall is about the same thickness everywhere, so the barrier is strong for its weight."}]}}function Ny(i){let e=new We,t=new ht;t.moveTo(-95,-4),t.lineTo(-80,-4),t.absarc(-58,-4,22,Math.PI,0,!0),t.lineTo(36,-4),t.absarc(58,-4,22,Math.PI,0,!0),t.lineTo(94,-4),t.quadraticCurveTo(100,-2,100,6),t.quadraticCurveTo(96,13,62,16),t.lineTo(26,20),t.quadraticCurveTo(14,36,2,37),t.lineTo(-38,37),t.quadraticCurveTo(-52,35,-64,24),t.lineTo(-82,25),t.lineTo(-88,34),t.lineTo(-98,34),t.lineTo(-98,28),t.lineTo(-93,22),t.quadraticCurveTo(-99,10,-95,-4);let n=new Gt(t,{depth:68,bevelEnabled:!0,bevelSize:4,bevelThickness:4,bevelSegments:5,curveSegments:24});n.translate(0,0,-34),n.rotateY(-Math.PI/2),e.add(Ge(n,i));let s=qn(i,.82);for(let o of[-30,30])for(let l of[-58,58])e.add(h(D(18,18,13,i,36),o,-4,l,0,0,Math.PI/2),h(D(9,9,13.4,s,6),o,-4,l,0,0,Math.PI/2),h(D(3.2,3.2,13.8,i,16),o,-4,l,0,0,Math.PI/2));let r=Ia(i,.5);for(let o of[-42.2,42.2])e.add(h(P(.5,.7,186,r),o,6,0));for(let o of[-20,10,40])e.add(h(D(4.5,4.5,.6,r,18),0,-8.3,o));return e.add(h(P(14,5,1,r),0,8,-102.6)),e.add(h(P(60,.5,30,qn(i,.9)),0,37.6,-18)),e.scale.setScalar(.25),{obj:de(e),feat:[{o:e,p:Q(42.4,6,30),t:"Split line",d:"A fine line all round the body where the two halves of the die met."},{o:e,p:Q(0,-8.6,10),t:"Ejector pin marks",d:"Round marks underneath where ejector pins pushed the casting out of the die.",pose:{x:-2.3,y:.3}},{o:e,p:Q(0,8,-103),t:"Injection point",d:"A small mark at the back where the molten metal entered the die. The runner has been cut off.",pose:{x:.2,y:Math.PI-.4}},{o:e,p:Q(-20,38,-10),t:"Fine detail",d:"Die casting copies fine detail accurately, like the panel lines and spoiler, with a smooth finish ready for painting."},{o:e,p:Q(-42,20,-50),t:"Draft angles",d:"The sides taper very slightly so the casting releases from the steel die."},{o:e,p:Q(30,-4,64),t:"Accurate and complex",d:"The whole body is cast as one accurate part, and thousands can be made exactly the same."}]}}function Fy(i){let e=new We,t=new ht;t.moveTo(-13,0),t.lineTo(13,0),t.lineTo(11,16),t.lineTo(-11,16),t.lineTo(-13,0);let n=new Gt(t,{depth:26,bevelEnabled:!0,bevelSize:1.2,bevelThickness:1.2,bevelSegments:3});n.translate(0,0,-13),e.add(Ge(n,i));let s=new oe({color:1908257,roughness:.6});e.add(h(D(4.2,4.2,.5,s,24),0,8,14.5,Math.PI/2),h(D(6,6,.4,qn(i,.8),24),0,8,14.3,Math.PI/2));for(let o=0;o<8;o++)e.add(h(P(.9,14,1.2,i),-12.5+0*o,8,-10+o*2.8));for(let o=0;o<8;o++)e.add(h(P(.9,14,1.2,i),12.5,8,-10+o*2.8));e.add(h(P(16,.6,10,b.steelShiny),0,16.6,4,0,0,.08),h(D(1.6,1.6,1.2,b.steelShiny,12),-5,17.2,4),h(D(.6,.6,1.3,s,8),-5,17.3,4));let r=Ia(i,.6);return e.add(h(D(1.6,1.6,.3,r,12),-6,-.9,0),h(D(1.6,1.6,.3,r,12),6,-.9,0),h(P(28,.5,.5,r),0,8,-14.4)),e.position.y=-8,{obj:de(e),feat:[{o:e,p:Q(0,8,15),t:"Accurate hole",d:"The cone-shaped hole is cast accurately so the pencil sits at exactly the right angle to the blade."},{o:e,p:Q(-12.6,10,-4),t:"Grip ribs",d:"Ribs cast into the sides make it easy to hold."},{o:e,p:Q(-5,17.8,4),t:"Threaded hole",d:"The hole for the blade screw is cast in, then a thread is cut in it."},{o:e,p:Q(6,-1.2,0),t:"Ejector pin marks",d:"Round marks underneath where the casting was pushed out of the die.",pose:{x:-2.4,y:0}},{o:e,p:Q(8,10,-14.5),t:"Split line",d:"A fine line where the two halves of the die met."}]}}function Uy(i){let e=new We;e.add(h(pe(34,3,34,3,i),0,0,0));let t=new oe({color:1908257,roughness:.6});for(let s=0;s<4;s++){let r=Math.PI/4+s*Math.PI/2,a=Math.cos(r),o=Math.sin(r),l=de(h(P(56,3,7,i),28,0,0),h(P(50,4,1.2,i),30,2.5,0));l.rotation.y=-r,e.add(l);let c=a*58,d=o*58;e.add(h(D(9,9,3,i,32),c,0,d),h(D(4,4,6,i,20),c,1.5,d),h(D(1.6,1.6,6.2,t,12),c,1.5,d));for(let u=0;u<4;u++){let f=u*Math.PI/2;e.add(h(D(.9,.9,3.2,t,10),c+Math.cos(f)*6,0,d+Math.sin(f)*6))}}for(let[s,r]of[[-12,-12],[12,-12],[-12,12],[12,12]])e.add(h(D(2.4,2.4,6,i,16),s,3,r),h(D(1,1,6.2,t,10),s,3,r));return e.add(h(P(4,3.2,14,t),-6,0,0),h(P(4,3.2,14,t),6,0,0)),{obj:de(e),feat:[{o:e,p:Q(12,6,12),t:"Bosses",d:"Raised pillars with holes for screws, cast in one go with the frame.",higher:!0},{o:e,p:Q(Math.cos(Math.PI/4)*58,5,Math.sin(Math.PI/4)*58),t:"Motor mounts",d:"Accurate screw holes so each motor fits exactly. Every frame comes out the same."},{o:e,p:Q(Math.cos(3*Math.PI/4)*30,4.6,Math.sin(3*Math.PI/4)*30),t:"Ribs",d:"Thin ribs along each arm make it stiff without adding much weight.",higher:!0},{o:e,p:Q(0,1.8,5),t:"Strap slots",d:"Slots for the battery strap are cast in, so no machining is needed."},{o:e,p:Q(-17,1.5,0),t:"Thin, light walls",d:"Aluminium is light and die casting can make thin, accurate sections, so the frame is strong but light."}]}}function ky(i){let e=Oy(i);return e.scale.setScalar(2.4),{obj:de(e),feat:[{o:e,p:Q(0,9.8,0),t:"Rough surface",d:"The casting copies the texture of the sand, so the surface is rough and grainy."},{o:e,p:Q(-6.4,6.4,1.8),t:"Sprue and riser marks",d:"Flat marks where the sprue and riser were cut off. They are filed smooth when the casting is fettled."},{o:e,p:Q(0,0,2.6),t:"Machined hole",d:"The hole in the middle is drilled or turned on a lathe afterwards to make it accurate."},{o:e,p:Q(9.8,0,0),t:"Parting line",d:"A line round the edge where the cope and drag met."}]}}function Oy(i){let e=de(h(new Ie(new $t(8,1.8,10,32),i),0,0,0),h(D(2.6,2.6,5,i,20),0,0,0,Math.PI/2),h(D(1.1,1.1,5.1,new oe({color:1908257}),12),0,0,0,Math.PI/2));for(let t=0;t<5;t++){let n=t*Math.PI*2/5;e.add(h(P(1.6,7,1.6,i),Math.cos(n)*4.6,Math.sin(n)*4.6,0,0,0,n-Math.PI/2))}return e.add(h(P(2.2,.4,2.2,Ia(i,1.3)),-6.6,6.6,0,0,0,Math.PI/4)),e}function By(i){let e=new We,t=new ht;t.absarc(0,0,30,0,Math.PI*2,!1);let n=new kt;n.absarc(0,0,3.2,0,Math.PI*2,!0),t.holes.push(n);let s=new Gt(t,{depth:4,bevelEnabled:!0,bevelSize:1,bevelThickness:1,bevelSegments:2,curveSegments:64});s.translate(0,0,-2),e.add(Ge(s,i)),e.add(h(new Ie(new $t(28,2.2,12,64),i),0,0,1.2),h(new Ie(new $t(7,1.8,10,40),i),0,0,1.6));for(let[a,o]of[[-14,8],[14,8]])new ht().absellipse(a,o,6,3,0,Math.PI*2);e.add(h(P(10,1,.6,Ia(i,1.25)),0,-31,0));let r=de(e);return r.rotation.x=-.35,{obj:r,feat:[{o:e,p:Q(14,10,3.3),t:"Rough surface",d:"The sand leaves a rough, grainy texture. For a weight plate that does not matter, so it is often just painted."},{o:e,p:Q(0,-31,1),t:"Sprue mark",d:"A ground-off mark on the edge where the sprue was cut away."},{o:e,p:Q(0,3.2,2.4),t:"Machined hole",d:"The centre hole is machined afterwards so it slides neatly onto the bar."},{o:e,p:Q(-28,-6,3.4),t:"Thick, heavy section",d:"Sand casting suits thick, heavy parts. Cast iron is cheap and dense, ideal for weights."},{o:e,p:Q(27,12,0),t:"Parting line",d:"A line round the rim where the cope and drag met."}]}}function Hy(i){let e=new We,t=new oe({color:1908257,roughness:.8}),n=zh("ms",{rough:.3}),s=[];for(let u=0;u<=90;u++){let f=u/90,p=f*Math.PI*1.75,m=15+7*f;s.push(Q(Math.cos(p)*m,Math.sin(p)*m,0))}let r=s[s.length-1].clone(),a=s[s.length-1].clone().sub(s[s.length-2]).normalize();for(let u=1;u<=6;u++)s.push(r.clone().addScaledVector(a,u*3));let o=new sn(s);e.add(Ge(Iy(o,u=>3.5+6.5*Math.min(1,u*1.15)),i)),e.add(h(D(13,13,11,i,48),0,0,0,Math.PI/2),h(D(7.4,7.4,11.4,t,40),0,0,0,Math.PI/2),h(D(16,16,2.4,n,48),0,0,-6.4,Math.PI/2),h(new Ie(new $t(13,1.2,10,48),i),0,0,5.4));let l=o.getPointAt(1);e.add(h(pe(3,23,23,2,n),l.x+1.5,l.y,0,0,0,0).rotateZ(0),h(D(6.6,6.6,3.4,t,28),l.x+2,l.y,0,0,0,Math.PI/2));for(let[u,f]of[[8,8],[8,-8],[-8,8],[-8,-8]])e.add(h(D(1.2,1.2,3.6,t,10),l.x+2,l.y+u,f,0,0,Math.PI/2));for(let u=0;u<6;u++){let f=u*Math.PI/3;e.add(h(D(1,1,3,t,10),Math.cos(f)*14.4,Math.sin(f)*14.4,-6.4,Math.PI/2))}let c=l.clone(),d=de(e);return d.rotation.y=-.5,{obj:d,feat:[{o:e,p:Q(-14,16,7),t:"Complex hollow shape",d:"The snail-shaped volute is hollow inside. Sand cores make the hollow, which would be very hard to do any other way."},{o:e,p:Q(-4,-20,8),t:"Rough surface",d:"Sand-cast parts have a rough, slightly bubbly texture copied from the sand, rather like orange peel."},{o:e,p:Q(c.x+3,c.y+9,9),t:"Machined faces",d:"Faces that bolt to other parts are machined flat and smooth afterwards, so they seal."},{o:e,p:Q(14.4,0,-7.8),t:"Bolt holes",d:"Holes are drilled and tapped after casting."},{o:e,p:Q(-21,-6,0),t:"Parting line",d:"A line round the middle where the cope and drag met."}]}}var kl={tray:(i,e)=>{let t=0;for(let n of[-9.5,0,9.5])for(let s of[-5,5]){let r=Math.min(3.5-Math.abs(i-n),3.5-Math.abs(e-s));r>0&&(t=Math.max(t,5*$e(r/1.2)))}return t},mask:(i,e)=>{let t=(i/12)**2+(e/9.6)**2;if(t>=1)return 0;let n=6.2*Math.sqrt(1-t);n+=2.6*Math.exp(-(i*i/5+(e+.5)**2/10));for(let s of[-4.4,4.4])n-=2.2*Math.exp(-((i-s)**2/3.2+(e+2.6)**2/2.2));return n-=1*Math.exp(-(i*i/6+(e-5)**2/1)),Math.max(0,n)},egg:(i,e)=>{let t=0;for(let n of[-7.2,7.2]){let s=((i-n)/6.4)**2+(e/9)**2;s<1&&(t=Math.max(t,6.5*Math.sqrt(1-s)))}return t}};function Ph(i){let e=(t,n)=>Math.max(Math.max(0,Math.abs(t)-15)/3,Math.max(0,Math.abs(n)-11)/7);return(t,n)=>{let s=e(t,n);return s>0?4*(1-$e(s)):4.3+i(t,n)}}var kf={tray:()=>as(31.4,23.4,3.6),mask:()=>{let i=new ht;return i.absellipse(0,0,13.2,10.8,0,Math.PI*2,!1),i},egg:()=>as(31.4,23.4,8)};function Of(i,e){let t=Ph(kl[i]),n=kf[i]().getSpacedPoints(180);n.pop();let s=64,r=n.length,a=[],o=[];for(let c=0;c<=s;c++){let d=c/s;for(let u=0;u<r;u++){let f=n[u].x*d,p=n[u].y*d;a.push(f,t(f,p),p)}}for(let c=0;c<s;c++)for(let d=0;d<r;d++){let u=c*r+d,f=c*r+(d+1)%r,p=(c+1)*r+d,m=(c+1)*r+(d+1)%r;o.push(u,p,f,f,p,m)}let l=new Yt;return l.setAttribute("position",new ut(a,3)),l.setIndex(o),l.computeVertexNormals(),l}function Th(i,e){return t=>{let n=de(Ge(Of(i,t),t));n.scale.setScalar(2.4),n.position.y=-6;let s=de(n);return s.rotation.x=.25,{obj:s,feat:e(n)}}}var Ah={tray:i=>[{o:i,p:Q(0,9.6,5),t:"Thin, even sheet",d:"The tray is formed from one thin sheet of plastic, so it is light and cheap."},{o:i,p:Q(13,7,5),t:"Thinning at corners",d:"The sheet stretches most at the deepest corners, so it gets thinner there."},{o:i,p:Q(-12.7,6,0),t:"Draft angles",d:"The sides of each pocket slope so the mould can be lifted out."},{o:i,p:Q(-4.75,8,-5),t:"Radiused corners",d:"Rounded corners help the sheet stretch evenly without tearing."},{o:i,p:Q(-15.4,.3,-9),t:"Trimmed edge",d:"The waste sheet round the edge has been cut off, following the shape of the tray."}],mask:i=>[{o:i,p:Q(0,12,0),t:"Open, shell-like form",d:"Vacuum forming makes open shapes from one side only: a shell with no back."},{o:i,p:Q(-4.4,7.4,-2.6),t:"Thinning",d:"The sheet stretches over the high points, so it is thinnest at the nose and cheeks."},{o:i,p:Q(10,6,0),t:"Draft angles",d:"Gently sloping sides let the mould come out."},{o:i,p:Q(-13,.3,0),t:"Trimmed edge",d:"The mask is cut out of the sheet round its outline after forming. Eye holes would be cut out too."}],egg:i=>[{o:i,p:Q(-7.2,10.6,0),t:"Thin, even sheet",d:"Easter egg packaging is formed from a thin sheet: light, cheap and see-through if you use clear plastic."},{o:i,p:Q(7.2,6,7),t:"Radiused curves",d:"Smooth, rounded curves form well and look good."},{o:i,p:Q(0,4.6,0),t:"Webbing risk",d:"If two parts of the mould are too close, the sheet can fold into a web between them. Leave space between shapes."},{o:i,p:Q(-15.4,.3,-8),t:"Trimmed edge",d:"The waste round the edge has been trimmed off, leaving a neat rounded edge."}]};function zy(i){let e=new ht;e.moveTo(-40,0),e.lineTo(40,0),e.lineTo(3,26),e.lineTo(-3,26),e.lineTo(-40,0);let t=new kt;t.moveTo(-32,2.6),t.lineTo(-3,22.6),t.lineTo(3,22.6),t.lineTo(32,2.6),t.lineTo(-32,2.6),e.holes.push(t);let n=new Gt(e,{depth:3,bevelEnabled:!0,bevelSize:.6,bevelThickness:.6,bevelSegments:2});n.translate(0,0,-1.5);let s=de(Ge(n,i)),r=[];for(let l=0;l<=40;l++){let c=Math.PI*1.25*l/40;r.push(Q(-Math.cos(c)*6+6,34+Math.sin(c)*6,0))}r.unshift(Q(0,26,0),Q(0,32,0)),s.add(Ge(new Tn(new sn(r),60,1.4,10),i));let a=Ia(i,.6);return s.add(h(D(1.4,1.4,.3,a,12),-20,6,1.9,Math.PI/2),h(D(1.4,1.4,.3,a,12),20,6,1.9,Math.PI/2),h(P(3,1.6,.4,a),0,.6,1.9)),s.position.y=-18,{obj:de(s),feat:[{o:s,p:Q(0,.6,2),t:"Injection point",d:"A small mark where the molten polystyrene entered the mould."},{o:s,p:Q(20,6,2),t:"Ejector pin marks",d:"Round marks where ejector pins pushed the hanger out."},{o:s,p:Q(-30,6,0),t:"Split line",d:"A fine line round the edge where the mould halves met."},{o:s,p:Q(6,38,0),t:"Material",d:"Polystyrene: light, rigid and cheap, ideal for products made in huge numbers."}]}}Object.assign(vn,{hanger:{n:"Coat hanger",make:zy,mats:["ps"]},kayak:{n:"Kayak",make:Uf},barrier:{n:"Road barrier",make:Ly},car:{n:"Model car",make:Ny},sharpener:{n:"Pencil sharpener",make:Fy},drone:{n:"Drone frame",make:Uy},wheel:{n:"Pulley wheel",make:ky},dumbbell:{n:"Dumbbell weight plate",make:By},turbo:{n:"Turbocharger housing",make:Hy},tray:{n:"Biscuit tray",make:Th("tray",Ah.tray)},mask:{n:"Mask",make:Th("mask",Ah.mask)},egg:{n:"Easter egg packaging",make:Th("egg",Ah.egg)}});Object.assign(Nf,{hanger:"Made in their millions, cheap and light.",kayak:"A 3 m hollow hull in one piece.",barrier:"Hollow, so it can be filled with water.",car:"Every detail cast in one accurate part.",sharpener:"A small, accurate, hard-wearing part.",drone:"Light, stiff and full of screw holes.",wheel:"A simple shape: easy to cast in sand.",dumbbell:"Thick and heavy: perfect for cast iron.",turbo:"A complex hollow shape made with sand cores.",tray:"Pockets to hold the biscuits.",mask:"A shell shaped like a face.",egg:"Two egg-shaped pockets."});var Gy=`.mkh{display:grid;grid-template-columns:1fr;gap:6px}.mkh.wide{grid-template-columns:1fr 1fr;gap:18px;align-items:end}
.mkp{display:block;width:100%;border:0;background:none;padding:0;margin:0;text-align:left;cursor:pointer;color:#F4F4F6;font:inherit;border-radius:18px;touch-action:manipulation}
.mkp:focus-visible{outline:3px solid #F4B3C2;outline-offset:3px}
.mkp canvas{display:block;width:100%;height:240px}.mkp.ws canvas{height:280px}.mkh.wide .mkp canvas{height:300px}.mkp.fc canvas,.mkp.mk canvas{height:250px}.mkh.wide .mkp.fc canvas,.mkh.wide .mkp.mk canvas{height:300px}
.mkp .plab{display:block;padding:2px 8px 8px}.mkp .plab b{font-size:19px;font-weight:800}.mkp .plab small{font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;border:1.5px solid #F4B3C2;color:#F4B3C2;border-radius:6px;padding:0 4px;vertical-align:3px;margin-left:6px}
.mkp .plab span{display:block;font-size:13.5px;color:#BFC3C8;margin-top:2px}`;function Vy(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Rn(i)}function Wy(i,e={}){if(!document.getElementById("mkcss")){let R=document.createElement("style");R.id="mkcss",R.textContent=Gy,document.head.appendChild(R)}i.innerHTML=`<div class="mkh"><button type="button" class="mkp box" aria-label="Tool library"><canvas></canvas><span class="plab"><b>Tool library</b><small>beta</small><span>Every N5 tool and machine in 3D</span></span></button>
   <button type="button" class="mkp ws" aria-label="The workshop"><canvas></canvas><span class="plab"><b>The workshop</b><small>beta</small><span>Explore the machines and how to stay safe</span></span></button>
   <button type="button" class="mkp fc" aria-label="The factory"><canvas></canvas><span class="plab"><b>The factory</b><small>beta</small><span>How products are made in industry</span></span></button>
   <button type="button" class="mkp mk" aria-label="Bench skills"><canvas></canvas><span class="plab"><b>Bench skills</b><small>beta</small><span>Make joints step by step</span></span></button></div>`;let t=i.querySelector(".mkh");function n(R,S,_,w){let z=new _i({canvas:R,antialias:!0,alpha:!0});z.toneMapping=ei,z.shadowMap.enabled=w==="real",z.shadowMap.type=Bo;let I=new An;I.environment=new Fi(z).fromScene(new As,.04).texture,I.environmentIntensity=.75;let L=new Qn(16773596,2.2);L.position.set(140,320,220);let q=new Qn(16767202,1);q.position.set(-160,80,-200),I.add(L,q,new lr(16777215,.25),S),S.updateMatrixWorld(!0);let $=new Pt().setFromObject(S),U=$.getCenter(Q(0,0,0)),X=$.getBoundingSphere(new kn).radius;if(w==="real"){L.castShadow=!0,L.target.position.copy(U),I.add(L.target);let O=L.shadow;O.mapSize.set(1024,1024),Object.assign(O.camera,{left:-X,right:X,top:X,bottom:-X,near:1,far:1200}),O.camera.updateProjectionMatrix(),O.bias=-6e-4,O.radius=4,S.traverse(F=>{F.isMesh&&(F.castShadow=!F.material.transparent,F.receiveShadow=!0)})}else{let O=$.getSize(Q(0,0,0)),F=new Ie(new Cn(O.x*1.5,O.z*2),new Ci({map:Vy(),transparent:!0,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.set(U.x,$.min.y+.05,U.z),I.add(F)}let N=new ys(-1,1,1,-1,.1,6e3),j=Q(1,.82,1).normalize();return N.position.copy(U).addScaledVector(j,2500),N.lookAt(U),{r:z,sc:I,cam:N,R:X*_,obj:S}}let s=my(),r=Df({noBench:!0}),a=Lf(),o=If(),l=t.querySelector(".box"),c=t.querySelector(".ws"),d=t.querySelector(".fc"),u=t.querySelector(".mk"),f=[{el:l,cv:l.querySelector("canvas"),kind:"box"},{el:c,cv:c.querySelector("canvas"),kind:"ws"},{el:d,cv:d.querySelector("canvas"),kind:"fc"},{el:u,cv:u.querySelector("canvas"),kind:"mk"}];Object.assign(f[0],n(f[0].cv,s,1.35,"soft")),Object.assign(f[1],n(f[1].cv,r,.8,"real")),Object.assign(f[2],n(f[2].cv,a,.5,"real")),Object.assign(f[3],n(f[3].cv,o,.85,"real")),f[3].r.shadowMap.autoUpdate=!1,f[3].r.shadowMap.needsUpdate=!0,f[2].r.shadowMap.autoUpdate=!1,f[2].r.shadowMap.needsUpdate=!0,f[2].c0=f[2].cam.position.clone();{let R=new Pt().setFromObject(a);f[2].ctr=R.getCenter(Q(0,0,0))}let p=-1,m=!0,y=0,g=0,x=0;function v(){t.classList.toggle("wide",i.clientWidth>=640);let R=Math.min(2,devicePixelRatio||1);f.forEach(S=>{let _=S.cv.clientWidth,w=S.cv.clientHeight;if(!_||!w)return;S.r.setPixelRatio(R),S.r.setSize(_,w,!1);let z=_/w;Object.assign(S.cam,{left:-S.R*z,right:S.R*z,top:S.R,bottom:-S.R}),S.cam.updateProjectionMatrix()})}new ResizeObserver(v).observe(i),v(),new IntersectionObserver(R=>{m=R[0].isIntersecting}).observe(i),f[0].el.addEventListener("click",()=>{p<0&&(p=performance.now()/1e3,setTimeout(()=>{p=-1,e.onBox&&e.onBox()},1e3))}),f[1].el.addEventListener("click",()=>{e.onWs&&e.onWs()}),f[2].el.addEventListener("click",()=>{e.onFc&&e.onFc()}),f[3].el.addEventListener("click",()=>{e.onMk&&e.onMk()});let C=R=>R<0?0:R>1?1:R;function E(R){if(y=requestAnimationFrame(E),!m||!i.offsetParent||R-g<33)return;g=R;let S=R/1e3,_;if(p>=0)_=C((S-p)/.8);else{let w=S%7/7;_=w<.35?0:w<.5?(w-.35)/.15:w<.8?1:1-(w-.8)/.15}s.userData.open(_),r.rotation.y=Math.sin(S*.2)*.06,o.rotation.y=Math.sin(S*.25+1)*.12,f[3].r.shadowMap.needsUpdate=!0,r.userData.anim&&r.userData.anim(S);{let w=f[2],z=Math.sin(S*.18)*.12,I=w.c0.clone().sub(w.ctr);I.applyAxisAngle(Q(0,1,0),z),w.cam.position.copy(w.ctr).add(I),w.cam.lookAt(w.ctr)}x++;for(let w of f)(w.kind!=="fc"&&w.kind!=="mk"||x%2===0)&&w.r.render(w.sc,w.cam)}return y=requestAnimationFrame(E),{stop(){cancelAnimationFrame(y)}}}var Bf={eye:{t:"Wear eye protection",c:"M004",g:'<circle cx="50" cy="40" r="20" fill="#fff"/><path d="M22 92c2-17 13-26 28-26s26 9 28 26z" fill="#fff"/><rect x="27" y="31" width="46" height="15" rx="7" fill="#fff" stroke="#005EB8" stroke-width="3"/><rect x="31" y="34" width="16" height="9" rx="4.5" fill="#005EB8"/><rect x="53" y="34" width="16" height="9" rx="4.5" fill="#005EB8"/>'},clothing:{t:"Wear an apron",c:"M010",g:'<path d="M41 28c0-8 4-13 9-13s9 5 9 13" fill="none" stroke="#fff" stroke-width="4"/><path d="M38 28h24v20l8 38H30l8-38z" fill="#fff"/><path d="M38 48H22M62 48h16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="43" y="58" width="14" height="11" rx="2" fill="none" stroke="#005EB8" stroke-width="3"/>'},gloves:{t:"Wear protective gloves",c:"M009",g:'<path d="M34 86V50c0-3 2-5 5-5V26c0-3 2-5 4.5-5S48 23 48 26v-4c0-3 2-5 4.5-5S57 19 57 22v4c0-3 2-5 4.5-5S66 23 66 26v6c0-3 2-5 4.5-5S75 29 75 32v28c0 14-6 26-14 26z" fill="#fff"/><path d="M34 78h41" stroke="#005EB8" stroke-width="3"/><path d="M39 45l-9-9c-2-2-5-2-7 0s-2 5 0 7l11 13" fill="#fff"/>'},mask:{t:"Wear a dust mask",c:"M016",g:'<circle cx="50" cy="38" r="20" fill="#fff"/><path d="M22 92c2-17 13-26 28-26s26 9 28 26z" fill="#fff"/><path d="M35 40c4 1 9 2 15 2s11-1 15-2v8c0 7-7 12-15 12s-15-5-15-12z" fill="#005EB8"/><path d="M30 38l6 4M70 38l-6 4" stroke="#005EB8" stroke-width="3"/>'}};function Xy(i){let e=Bf[i];return`<svg viewBox="0 0 100 100" role="img" aria-label="${e.t}"><circle cx="50" cy="50" r="48" fill="#005EB8"/><circle cx="50" cy="50" r="48" fill="none" stroke="#fff" stroke-width="2.5"/>${e.g}</svg>`}function Hf(i){return`<div class="bmsigns">${i.map(e=>`<div class="bmsign">${Xy(e)}<span>${Bf[e].t}</span></div>`).join("")}</div>`}var zf=`.bmsigns{display:flex;flex-wrap:wrap;gap:10px;margin:2px 0 12px}.bmsign{display:flex;align-items:center;gap:8px;background:#fff;color:#003B75;border-radius:999px;padding:4px 12px 4px 4px;font-size:13.5px;font-weight:800;line-height:1.15;max-width:100%}
.bmsign svg{width:40px;height:40px;flex:none}`,Gf="Stand up while you work: never sit at the bench or a machine.",qy={"Steel rule":["Measures and marks out lengths accurately, in millimetres. Always measure from the zero end.",["Carry it flat and keep the edge clean.","Don\u2019t use it as a lever or scraper: it bends and the scale is lost."]],"Try square":["Marks lines at 90\xB0 to an edge on wood, and checks that corners and edges are square. Hold the stock tight against a straight edge.",["Keep the stock against the face edge so the line is true.","Store it flat so the blade stays at 90\xB0."]],"Engineer\u2019s square":["The all-steel version of the try square, used on metal and plastic. Marks and checks 90\xB0 with a scriber.",["Handle with care: dropping it can knock it out of square.","Watch the sharp corners of the blade."]],"Marking gauge":["Marks a line parallel to an edge of wood, such as the depth of a joint. The stock slides along the edge while the pin scratches the line.",["Keep fingers away from the pin.","Push the gauge away from you along the edge."]],"Mortise gauge":["Has two pins, so it marks two parallel lines at once, such as the width of a mortise or tenon.",["Keep fingers away from the pins.","Set both pins before marking, then lock the stock."]],Scriber:["Scratches fine marking-out lines on metal and plastic, where a pencil wouldn\u2019t show.",["The point is very sharp: carry it point down and put the cap on if it has one.","Never leave it lying where someone could kneel or lean on it."]],"Centre punch":["Makes a small dent at the centre of a hole on metal, so the drill bit starts in the right place and doesn\u2019t wander.",["Hold it upright and tap it with a ball-pein hammer, not a mallet.","Wear goggles in case of chips."]],Dividers:["Scribe circles and arcs on metal, and step off equal distances. One leg sits in a centre punch mark.",["Both points are sharp: carry them closed and point down."]],"Outside callipers":["Measure the outside size of round or curved work, such as a bar on the lathe. The setting is then checked against a rule.",["Stop the lathe before measuring work on it."]],"Odd-leg callipers":["Mark a line parallel to an edge on metal, or find the centre of a bar. One leg runs along the edge.",["The point is sharp: keep fingers clear and carry it closed."]],Pencil:["Marks out on wood. A sharp pencil gives fine, accurate lines; shade the waste so you know which side to cut.",["Keep it sharp with a sharpener, not a knife."]],"Tenon saw":["Makes straight cuts in wood, such as the shoulders of joints. The stiff back keeps the blade straight.",["Clamp the work first and keep your other hand behind the saw.","Start the cut gently with short strokes."]],"Coping saw":["Cuts curves in wood and plastic. The thin blade can be turned in the frame to follow the line.",["Fit the blade with the teeth pointing towards the handle.","Hold the work in a vice and keep fingers clear of the blade."]],Hacksaw:["Cuts metal and plastic. The fine teeth on the tensioned blade cut on the forward stroke.",["Fit the blade with the teeth pointing forwards and tension it well.","Hold the work low in the vice so it doesn\u2019t vibrate."]],"Junior hacksaw":["A small hacksaw for light cutting of thin metal, plastic and tube.",["Hold the work firmly in a vice.","Watch for sharp burrs on the cut edge."]],"Bevel-edge chisel":["Cuts and pares wood, for example to remove the waste from a housing or halving joint. The bevelled sides get into corners.",["Always keep both hands behind the cutting edge.","Clamp the work and chisel away from your body."]],"Mortise chisel":["A strong, thick chisel for chopping deep mortises in wood with a mallet.",["Clamp the work firmly.","Strike it with a mallet, never a hammer."]],"Ball-pein hammer":["A metalwork hammer: the flat face hits a centre punch or rivet, and the round ball end shapes metal and spreads rivets.",["Check the head is tight on the handle.","Wear goggles when striking metal."]],"Cross-pein hammer":["Its narrow pein starts small nails and pins held between the fingers, then the flat face drives them home.",["Check the head is tight on the handle.","Keep your fingers clear once the nail stands on its own."]],"Claw hammer":["Drives nails into wood, and the claw pulls nails out.",["Check the head is tight.","Keep your fingers clear once the nail is started."]],"Wooden mallet":["Strikes chisels and taps wooden joints together without damaging them.",["Never hit metal or a hammer with it.","Make sure the head is tight on the handle."]],"Hide mallet":["A soft-faced mallet for shaping thin sheet metal without marking or stretching it.",["Keep it for sheet metal work, not chisels."]],"Jack plane":["A long plane for flattening and straightening wood, and planing it down to size.",["Keep your hands behind the blade and lay the plane on its side when not in use.","Clamp the wood firmly."]],"Smoothing plane":["A shorter plane for the final smooth finish on wood.",["Lay it on its side so the blade isn\u2019t damaged.","Keep fingers away from the mouth of the plane."]],"Rebate plane":["Cuts a rebate (a step) along the edge of wood. The blade goes right to the side of the plane.",["Clamp the work and keep hands behind the blade."]],"Plough plane":["Cuts a groove along wood, for example to hold a drawer bottom or a back panel.",["Clamp the work and keep hands behind the blade."]],"Twist drill":["Drills holes in wood, metal and plastic. The spiral flutes carry the waste out of the hole.",["Hold the work in a machine vice or clamp it, never by hand.","Remove the chuck key before starting."]],"Forstner bit":["Drills clean, flat-bottomed holes in wood, such as for hinges.",["Clamp the work and use a slow speed.","Lift the bit out often to clear the chips."]],"Countersink bit":["Shapes the top of a hole into a cone so a countersunk screw sits flush with the surface.",["Clamp the work and use a slow speed."]],"Centre drill":["Drills a small, accurate starting hole, for example in the end of a bar on the centre lathe, before drilling the full size.",["Use a slow, steady feed; the small tip snaps easily."]],"Flat file":["Smooths and shapes flat surfaces and edges of metal and plastic, and removes burrs.",["Always use a file with a handle fitted.","Brush away filings; don\u2019t blow them."]],"Half-round file":["One flat side and one curved side, for shaping flat surfaces and inside curves.",["Always use it with a handle fitted."]],"Hand router":["Levels the bottom of a housing or groove in wood to an even depth.",["Clamp the work and keep both hands on the handles."]],Pliers:["Grip, bend and hold small parts and wire. The cutters at the jaws snip wire.",["Keep fingers clear of the cutters.","Don\u2019t use them on nuts: they slip and round the corners."]],"Pop-rivet gun":["Fixes thin sheet material together from one side using pop rivets. Squeezing the handles pulls the mandrel and spreads the rivet.",["Point it away from people: the snapped mandrel can fly out.","Keep fingers clear of the nose."]],"Flat screwdriver":["Drives and removes slotted screws. Choose a tip that fills the slot.",["Never use it as a chisel or lever.","Hold the work so the screwdriver can\u2019t slip into your hand."]],"Cross-head screwdriver":["Drives and removes cross-head screws. The tip should fit the screw head exactly.",["Push firmly so it doesn\u2019t slip.","Don\u2019t use it as a lever."]],"Tin snips":["Cut thin sheet metal, like scissors.",["The cut edges are very sharp: wear gloves and remove the burr with a file."]],"Bending bars":["Held in the vice, they grip sheet metal along a line so it can be folded cleanly.",["Tighten the vice firmly and watch for sharp sheet edges."]],"Tap and wrench":["Cuts an internal thread inside a drilled hole so a bolt can screw in. Turn forwards, then back a little to break the swarf.",["Keep the tap upright: taps are brittle and snap if forced."]],"Die and stock":["Cuts an external thread on a metal rod so a nut can screw on.",["Keep the die square to the rod and use cutting fluid."]],"Nail punch":["Knocks the head of a nail just below the surface of the wood, so the hole can be filled.",["Hold it upright and strike it squarely."]],Bradawl:["Makes a small starting hole in wood for a screw or nail.",["Push it in across the grain and keep your other hand clear."]],"Bench vice":["Holds wood firmly on the bench while you saw, chisel or plane it.",["Don\u2019t over-tighten or hit the handle with a hammer.","Keep the handle turned down so no one walks into it."]],"Engineer\u2019s vice":["Holds metal and plastic firmly for sawing, filing and bending.",["Use soft jaws to protect finished surfaces.","Don\u2019t leave the handle sticking out."]],"Machine vice":["Holds work flat and secure on the pillar drill table, so you never hold it by hand.",["Bolt or clamp it to the table if the work is large."]],"Hand vice":["Holds small or thin pieces safely while drilling or working on them, instead of using your fingers.",["Grip the work tightly before drilling."]],"Soft jaws (vice guards)":["Fit over the jaws of an engineer\u2019s vice to stop them marking soft or finished work.",["Check they sit firmly before tightening the vice."]],"G clamp":["Holds work to the bench or holds pieces together while glue sets.",["Use scrap wood under the jaws to protect the work.","Don\u2019t over-tighten."]],"Quick clamp":["A one-handed clamp: squeeze the trigger to tighten and press the button to release. Great for holding a guide block when sawing.",["Check it is tight before you start cutting."]],"Sash cramp":["A long cramp that holds a frame or wide panel together while the glue sets.",["Use scrap wood under the jaws and check the frame is square."]],"Belt sander":["Sands, smooths and shapes the edges and ends of wood. The belt runs down towards the table.",["Switch on the dust extraction first.","Rest the work on the table and keep fingers well away from the belt.","Only sand below the guard; never sand very small pieces by hand.","Wear goggles."]],"Pillar drill":["Drills accurate holes at 90\xB0 in wood, metal and plastic. The depth stop sets how deep the hole goes.",["Hold the work in a machine vice or clamp it, never by hand.","Lower the guard and remove the chuck key before starting.","Tie hair back, tuck in loose clothing and wear goggles."]],"Fret (scroll) saw":["Cuts curves and shapes in thin wood, MDF and acrylic with a fine blade that moves up and down quickly.",["Set the hold-down foot just above the work.","Keep fingers to the side of the blade, never in line with it.","Switch off and wait before clearing offcuts."]],"Centre lathe":["Turns metal (and some plastics) to make round parts: facing off, parallel turning, taper turning, knurling and drilling.",["Close the chuck guard and remove the chuck key.","Never touch swarf with your hands; use a brush.","Stop the machine before measuring. Wear goggles."]],"Wood lathe":["Turns wood to make round parts such as handles and legs, or bowls on a faceplate.",["Set the tool rest close to the work and spin the wood by hand before switching on.","Hold the tool firmly on the rest.","Wear goggles or a face shield."]],"Mortise machine":["Cuts square holes (mortises) in wood for mortise and tenon joints, using a hollow square chisel with an auger inside.",["Clamp the work against the fence.","Set the depth stop and keep hands away from the chisel."]],Fluidiser:["Plastic dip coating: a hot metal part is dipped into plastic powder kept moving by air, and the powder melts onto it as a smooth coating.",["Use tongs and heatproof gloves for hot metal.","Let the part cool on a heatproof surface.","Work with good ventilation."]],"Spot welder":["Joins two pieces of thin sheet steel. Pulling the lever down squeezes the sheets between the copper electrodes, and a large electric current melts a small spot where they touch.",["Keep fingers away from the electrodes; pull the lever down only when your hands are clear.","The metal stays very hot: hold it with pliers and let it cool.","Make sure the metal is clean so the weld is strong."]],"Strip heater":["Heats a narrow line across thermoplastic sheet such as acrylic so it can be bent along that line.",["Never touch the hot wires or the cover above them.","Don\u2019t overheat: bubbles mean it\u2019s too hot.","Switch off when finished and let it cool."]]},Yy={"Tin snips":["gloves"],"Bending bars":["gloves"],"Hide mallet":["gloves"],"Belt sander":["mask"],Fluidiser:["gloves"],"Strip heater":["gloves"],"Spot welder":["gloves"]},Zy=i=>["eye","clothing",...Yy[i]||[]],jy={bench:{n:"Workbench and bench vice",use:"Where most hand-tool work happens: marking out, sawing, chiselling and planing. The bench vice holds wood firmly while you work on it.",safe:["Keep the bench clear: put tools back once you have used them.","Clamp the work in the vice or to the bench, never hold it in your hand while you saw or chisel.","Keep both hands behind a chisel\u2019s cutting edge.","Carry tools with sharp edges pointing down."],ppe:null},pillarDrill:{n:"Pillar drill",use:"Drills accurate holes at 90\xB0 to the surface in wood, metal and plastic. The table moves up and down, and the depth stop sets how deep the hole goes.",safe:["Hold the work in a machine vice or clamp it to the table, never by hand.","Lower the guard over the chuck before you start.","Take the chuck key out straight away.","Tie hair back and tuck in loose clothing.","Know where the emergency stop is."],ppe:null},beltSander:{n:"Belt sander",use:"Sands, smooths and shapes the edges and ends of wood. The belt runs down towards the table, so the work is pushed onto the table, not lifted.",safe:["Switch on the dust extraction first.","Rest the work on the table and keep fingers well away from the belt.","Only sand below the guard, using the gap above the table.","Never sand very small pieces by hand."],ppe:null},fretSaw:{n:"Fret (scroll) saw",use:"Cuts curves and shapes in thin wood, MDF and acrylic. The fine blade moves up and down very quickly.",safe:["Set the hold-down foot just above the work.","Keep fingers to the side of the blade, never in line with it.","Feed the work gently; let the blade do the cutting.","Switch off and wait before clearing offcuts."],ppe:null},centreLathe:{n:"Centre lathe",use:"Turns metal (and some plastics) to make round parts. Processes include facing off, parallel turning, taper turning, knurling and drilling.",safe:["Close the chuck guard before starting.","Remove the chuck key: never leave it in the chuck.","Never touch swarf with your hands; use a brush.","Stop the machine before measuring the work.","Tie hair back and tuck in loose clothing."],ppe:null},woodLathe:{n:"Wood lathe",use:"Turns wood to make round parts such as handles and legs (between centres) or bowls (on a faceplate).",safe:["Set the tool rest close to the work and turn the wood by hand before switching on.","Check the speed is right for the size of the wood.","Hold the turning tool firmly on the tool rest.","Move the tool rest out of the way before sanding."],ppe:null},mortiser:{n:"Mortise machine",use:"Cuts square holes (mortises) in wood for mortise and tenon joints. A square hollow chisel cuts the sides while an auger bit inside clears the waste.",safe:["Clamp the work against the fence before cutting.","Set the depth stop so the chisel stops at the right depth.","Keep hands away from the chisel.","Lift the lever slowly to clear the chips."],ppe:null},fluidiser:{n:"Fluidiser (with oven)",use:"Plastic dip coating. A metal part is heated in the oven, then dipped into plastic powder that is kept moving by air from below. The powder melts onto the hot metal to give a smooth plastic coating.",safe:["Use tongs to move hot metal and heatproof gloves.","Hold the part in the powder for a few seconds only, then let it cool on a heatproof surface.","Keep the lid closed when not in use.","Work with good ventilation."],ppe:null},spotWelder:{n:"Spot welder",use:"Joins two pieces of thin sheet steel together. Pulling the lever down squeezes the sheets between the copper electrodes, then a large electric current melts a small spot where they touch, welding them.",safe:["Keep fingers well away from the electrodes: pull the lever down only when your hands are clear.","The metal stays very hot after welding: hold it with pliers and let it cool.","Sparks can fly: keep the area clear.","Make sure the metal is clean so the weld is strong."],ppe:null},stripHeater:{n:"Strip heater",use:"Heats a narrow line across a sheet of thermoplastic such as acrylic so that it can be bent along that line, often over a former or jig.",safe:["Never touch the hot wires or the plate above them.","Turn thicker sheet over to heat both sides evenly.","Do not overheat: bubbles mean it is too hot.","Switch off when finished and let it cool."],ppe:null}},$y={spotWelder:["eye","clothing","gloves"],beltSander:["eye","clothing","mask"],fluidiser:["eye","clothing","gloves"],stripHeater:["eye","clothing","gloves"]},Ky=["bench","pillarDrill","beltSander","centreLathe","woodLathe","mortiser","fretSaw","spotWelder","fluidiser","stripHeater"],Jy={sandCasting:{n:"Sand casting",use:"Molten metal is poured into a mould made of sand. The mould is broken up to get the casting out, so each mould is used once: good for one-off and small batch production.",steps:[[0,2,"Sand is rammed into the drag (the bottom box) round the wooden pattern."],[2,3,"The drag is turned over so the flat face of the pattern is on top."],[3,6,"The cope (the top box) goes on. Pins for the sprue and the riser are put in, then the cope is rammed with sand."],[6,9.5,"The pins come out, the cope is lifted off and the pattern is taken out, leaving a hollow the shape of the product. The cope goes back on."],[9.5,14.6,"Molten aluminium is poured into the sprue until it shows at the riser. The riser lets air out and feeds the casting as it shrinks."],[14.6,17,"The metal cools and turns solid."],[17,20.5,"The sand is broken away and the casting is lifted out."],[20.5,23,"The sprue and riser are cut off. The casting is then fettled: rough edges are filed and smoothed."]]},dieCaster:{n:"Die casting machine",use:"Molten metal is forced into a steel mould called a die. Dies are expensive but last for thousands of castings, so die casting suits mass production. This machine makes aluminium model cars.",steps:[[0,2.4,"A ladle scoops molten aluminium from the holding furnace."],[2.4,6,"The ladle pours the metal into the shot sleeve."],[6,6.4,"The plunger forces the metal into the closed die under high pressure."],[6.4,8.4,"The metal cools and turns solid in seconds."],[8.4,9.4,"The die opens and ejector pins push the casting out."],[9.4,12,"The finished car drops into the bin and the die closes, ready for the next one."]]},rotoMoulder:{n:"Rotational moulding machine",use:"Makes large hollow products in one piece, such as kayaks, traffic cones and water tanks. This machine is making a kayak.",steps:[[0,2.5,"Plastic powder is put into the bottom half of the mould."],[2.5,4,"The mould is closed and clamped."],[4,9,"The oven doors open and the mould moves into the oven."],[9,18,"The mould turns slowly on two axes while it heats, so the melting powder coats the inside evenly."],[18,22,"The mould comes back out of the oven."],[22,27,"It keeps turning while the fans cool it, so the plastic sets evenly."],[27,33.5,"The mould opens and the kayak is lifted out: one hollow piece."],[33.5,36.5,"Fittings such as deck lines, hooks and the seat are added."]]},injectionMoulder:{n:"Injection moulding machine",use:"Mass-produces accurate plastic parts with a good finish, such as bottle tops, casings and toy building bricks.",steps:[[0,3.2,"Plastic granules drop from the hopper into the barrel. Heater bands and the turning screw melt them, and molten plastic builds up at the front."],[3.2,4,"The screw rams forward, forcing the molten plastic into the closed mould."],[4,4.96,"The plastic cools and hardens in the mould."],[4.96,5.6,"The mould opens."],[5.6,7.85,"Ejector pins push the brick out and it drops into the bin."]]},vacuumFormer:{n:"Vacuum former",use:"Shapes a thermoplastic sheet over a mould. Used for trays, packaging and blister packs. This one is making a biscuit tray.",steps:[[0,3,"A thermoplastic sheet, such as polystyrene (HIPS), is clamped in the frame."],[3,9,"The heater slides over and the sheet softens."],[9,11,"The heater goes back and the lever raises the mould into the soft sheet."],[11,13.5,"The vacuum pump sucks the air out, pulling the sheet tight over the mould."],[13.5,17.5,"The mould is lowered, the frame is opened and the formed sheet is taken out."],[17.5,20.5,"The tray is trimmed out of the sheet."],[20.5,23,"The finished tray."]]}},Qy=["sandCasting","dieCaster","rotoMoulder","injectionMoulder","vacuumFormer"],eb=`.bttw [hidden]{display:none!important}.bttw{position:absolute;inset:0;overflow:hidden;font-family:inherit;color:#F4F4F6}.bttview{position:absolute;inset:0}.bttview canvas{display:block;touch-action:none}
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
.bttstep.btlock{opacity:.38;cursor:default}.bttdet .note{color:#FFD38A}
.bttcele{position:absolute;inset:0;z-index:20;display:flex;align-items:center;justify-content:center;background:rgba(10,11,13,.55)}.btcbox{position:relative;overflow:hidden;width:min(420px,calc(100% - 32px));background:#26272C;border:1px solid #7FD3A4;border-radius:22px;padding:22px 20px 16px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.5);animation:btpop .5s cubic-bezier(.2,1.4,.4,1)}.btcbox b{font-size:24px;color:#B9E5CB}.btcbox p{font-size:15px;line-height:1.45;margin:8px 0 4px}
@keyframes btpop{from{transform:scale(.7);opacity:0}}.btconf{position:absolute;inset:0;pointer-events:none}.btconf i{position:absolute;top:-10px;left:var(--x);width:8px;height:12px;border-radius:2px;background:var(--c);animation:btfall 2.2s var(--d) ease-in forwards}@keyframes btfall{to{transform:translateY(340px) rotate(540deg);opacity:0}}
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
.bttpvp .bttpin{transform-origin:50% 50%}.bttpvp .bttpin i{display:none}.bttpvp .btdot{position:absolute;left:0;top:0;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:#B9E5CB;box-shadow:0 0 0 4px rgba(185,229,203,.3);pointer-events:none}.bttpvp .btdot.btdis{background:#8C9096;box-shadow:none;opacity:.5}.bttpvp .btln{position:absolute;left:0;top:0;height:1.5px;background:rgba(185,229,203,.75);transform-origin:0 50%;pointer-events:none}.bttpvp .btln.btdis{background:rgba(140,144,150,.45)}
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
@media (max-width:700px){.bttcard{top:auto;right:8px;left:8px;width:auto;bottom:8px;max-height:56%}.bttw.btfocus .btttop span{display:none}.bttback{top:52px}.bttov{inset:6px}.bttgrid{grid-template-columns:repeat(2,1fr)}}`,Rh=null;function Ol(){if(!Rh){let i=new _i({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setPixelRatio(Math.min(1.5,devicePixelRatio||1)),i.toneMapping=ei,i.localClippingEnabled=!0;let e=new Fi(i).fromScene(new As,.04).texture;Rh={r:i,env:e}}return Rh}function Vf(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new Rn(i)}function sf(i){let e=Ol(),t=new An;t.environment=e.env,t.environmentIntensity=.9;let n=new Qn(16777215,1.6);n.position.set(40,80,60),t.add(n,new xs(16777215,3355443,.5),i);let s=new Pt().setFromObject(i),r=s.getBoundingSphere(new kn),a=new Ie(new Cn(1,1),new Ci({map:Vf(),transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.scale.setScalar(r.radius*2.4),a.position.set(r.center.x,s.min.y-r.radius*.18,r.center.z),t.add(a),{sc:t,R:r.radius,c:r.center}}var rf=[["hop","Fill the hopper with plastic granules"],["heat","Switch on the heater bands"],["close","Close and clamp the mould"],["melt","Turn the screw to melt the plastic"],["inject","Ram the molten plastic into the mould"],["cool","Let the plastic cool and harden"],["open","Open the mould"],["eject","Push the product out with the ejector pins"]],tb={heat:[["hop","Fill the hopper with granules first."]],melt:[["hop","There's no plastic in the hopper yet!"],["heat","The plastic won't melt until the heater bands are on."]],inject:[["melt","There's no molten plastic to inject yet."],["close","Close the mould first, or the molten plastic would squirt out!"]],cool:[["inject","The mould is still empty."]],open:[["inject","There's nothing in the mould yet."],["cool","Wait! The plastic needs to cool and harden first."]],eject:[["open","The mould is still closed."]]},vr="Thermosetting plastics set hard for good the first time they are heated, so they can't be melted and shaped again. Try a thermoplastic.",af=["abs","acrylic","pp","ps","uf","mf"],of=["al","brass","cu","ci","ms","ss"],Ch={injectionMoulder:{type:"inj",mat:"plastic",list:af,ok:{abs:1,acrylic:1,pp:1,ps:1},no:{uf:vr+" Products like plugs are compression moulded instead.",mf:vr+" Products like melamine plates are compression moulded instead."}},rotoMoulder:{mat:"plastic",list:["pe","pp","abs","acrylic","ps","uf","mf"],ok:{pe:1,pp:1},warn:{pe:"Polyethylene isn't on the National 5 materials list, so you don't need to learn it, but it's the plastic used most for rotational moulding."},no:{abs:"ABS isn't used for rotational moulding: as a powder in a mould with no pressure, it doesn't melt and flow together well.",acrylic:"Acrylic is too brittle and doesn't fuse together well as a powder, so it isn't rotationally moulded.",ps:"Polystyrene is too brittle and doesn't fuse together well as a powder, so it isn't rotationally moulded.",uf:vr,mf:vr},products:["kayak","barrier"],steps:[["Put plastic powder into the mould",0,2.5],["Close and clamp the mould",2.5,4],["Move the mould into the oven",4,9],["Heat it while it turns on two axes",9,18],["Move it out of the oven",18,22],["Cool it while it keeps turning",22,27],["Open the mould and take out the product",27,33.5],["Add the fittings",33.5,36.5]]},vacuumFormer:{mat:"plastic",list:af,ok:{ps:1,acrylic:1,abs:1,pp:1},warn:{ps:"Polystyrene sheet (HIPS, high impact polystyrene) is the sheet most schools use: it is cheap and forms easily.",acrylic:"Acrylic sheet can be vacuum formed, but it needs care: if it is not hot enough it can crack.",abs:"ABS sheet is vacuum formed in industry for things like luggage and car parts.",pp:"Polypropylene sheet can be vacuum formed, but it sags quickly when hot, so it is tricky."},no:{uf:vr,mf:vr},products:["tray","mask","egg"],steps:[["Clamp the sheet in the frame",0,3],["Heat the sheet until it is soft",3,9],["Raise the mould into the soft sheet",9,11],["Switch on the vacuum pump",11,13.5],["Lower the mould and take out the sheet",13.5,17.5],["Trim the product out of the sheet",17.5,20.5],["Put the finished product in the crate",20.5,23]]},dieCaster:{mat:"metal",list:of,ok:{al:1},no:{brass:"Brass can be die cast in industry, but this machine is set up for aluminium.",cu:"Copper melts at about 1,085 \xB0C. It would quickly wear out the steel die, so it is not die cast here.",ci:"Cast iron melts at about 1,150 \xB0C: far too hot for a steel die. Cast iron is sand cast instead.",ms:"Steel melts at about 1,450 \xB0C: far too hot for a steel die.",ss:"Stainless steel melts at about 1,450 \xB0C: far too hot for a steel die."},products:["car","sharpener","drone"],steps:[["Ladle molten aluminium from the furnace",0,2.4],["Pour it into the shot sleeve",2.4,6],["Inject it into the die with the plunger",6,6.4],["Let it cool and solidify",6.4,8.4],["Open the die and eject the casting",8.4,9.4],["Collect the casting",9.4,12]]},sandCasting:{mat:"metal",sand:!0,list:of,ok:{al:1,ci:1,brass:1},no:{cu:"Pure copper is hard to cast cleanly: it soaks up gas and the casting ends up full of holes. It is usually cast as an alloy, such as brass.",ms:"Steel melts at about 1,450 \xB0C. It can be cast in heavy industry, but it's far too hot for a foundry like this one.",ss:"Stainless steel melts at about 1,450 \xB0C: far too hot for a foundry like this one."},products:["wheel","dumbbell","turbo"],steps:[["Ram sand into the drag round the pattern",0,2],["Turn the drag over",2,3],["Add the cope with the sprue and riser pins, and ram it",3,6],["Remove the pins and the pattern, then close the mould",6,9.5],["Pour in the molten metal",9.5,14.6],["Let the metal cool",14.6,17],["Break away the sand",17,20.5],["Cut off the sprue and riser",20.5,23]]}},lf=(i,e)=>typeof i=="string"&&ri[i]?zh(i,{sand:e}):zl(i);function nb(i,e={}){let t=!!e.factory,n=t?Jy:jy,s=$y,r=t?Qy:Ky;for(let[J,A]of[["signcss",zf],["tourcss",eb]]){let M=document.getElementById(J);M||(M=document.createElement("style"),M.id=J,document.head.appendChild(M)),M.textContent=A}i.innerHTML=`<div class="bttw"><div class="bttview"></div><div class="bttpins"></div>
  <div class="btttop"><b>${e.title||(t?"The factory":"Workshop tour")}</b><span>${t?"Tap a machine, then tap each step":"Tap a machine to find out about it"}</span></div>
  <button class="bttback" hidden>\u2190 ${t?"Whole factory":"Whole workshop"}</button>
  <aside class="bttcard" hidden><button class="bttx" aria-label="Close">\u2715</button><h2></h2><p class="bttuse"></p>
   <div class="bttfac" ${t?"":"hidden"}><h3>Step by step</h3><ol class="bttsteps"></ol><div class="bttplay"><button class="btlookb btgo" hidden>\u{1F50D} Take a closer look at what's been made</button><button class="bttall" hidden>\u25B6 Play all steps</button><button class="btgame" hidden>\u{1F3AE} Have a go yourself</button></div></div>
   <div class="bttopp" hidden></div>
   <div class="bttws" ${t?"hidden":""}><h3 class="bttmust">You must wear</h3><div class="bttppe"></div><h3>Stay safe</h3><ul class="bttsafe"></ul><div class="bttnav"><button class="bttprev">\u2039 Previous</button><button class="bttnext">Next \u203A</button></div></div></aside>
  <div class="bttov" hidden></div><div class="bttcele" hidden></div></div>`;let a=J=>i.querySelector(J),o=a(".bttview"),l=a(".bttov"),c=new _i({antialias:!0,powerPreference:"high-performance"});c.setPixelRatio(Math.min(1.5,devicePixelRatio||1)),c.toneMapping=ei,c.shadowMap.enabled=!0,c.shadowMap.type=bs,o.appendChild(c.domElement);let d=new An;d.background=new nt(1974051),d.environment=new Fi(c).fromScene(new As,.04).texture,d.environmentIntensity=.7;let u=t?Lf():Df({noBench:!!e.noBench});d.add(u),u.traverse(J=>{J.isMesh&&(J.castShadow=!J.material.transparent,J.receiveShadow=!0)});let f=new Qn(16773596,2.2);f.position.set(...t?[-10,650,360]:[140,320,220]),f.castShadow=!0,t&&(f.target.position.set(-270,0,-60),d.add(f.target));let p=t?700:240;Object.assign(f.shadow.camera,{left:-p,right:p,top:p,bottom:-p,near:1,far:t?1800:900}),f.shadow.mapSize.set(2048,2048),f.shadow.bias=-8e-4,f.shadow.normalBias=.6,f.shadow.autoUpdate=!1,c.shadowMap.autoUpdate=!1,c.shadowMap.needsUpdate=!0,d.add(f,new xs(16777215,4473924,.35));let m=new Xt(36,1,1,5e3),y=new _r(m,c.domElement);y.enableDamping=!0,y.maxPolarAngle=Math.PI*.46,y.minDistance=60,y.maxDistance=t?2200:950,y.enablePan=t,y.screenSpacePanning=!1;let g=t?{p:Q(-150,860,1120),t:Q(-270,30,-60)}:{p:Q(400,440,520),t:Q(0,10,0)};m.position.copy(g.p),y.target.copy(g.t);let x=null,v=null,C=null,E=-1,R=null,S=null,_=null,w={},z={},I={};try{I=JSON.parse(localStorage.getItem("bt-unl")||"{}")}catch{}let L=()=>{try{localStorage.setItem("bt-unl",JSON.stringify(I))}catch{}},q=!1,$=!0;y.addEventListener("change",()=>$=!0);let U=u.userData.items.map(J=>{J.obj.updateMatrixWorld(!0);let A=new Pt().setFromObject(J.obj);return{...J,c:J.obj.userData.focus?J.obj.localToWorld(J.obj.userData.focus.clone()):A.getCenter(Q(0,0,0)),top:Q((A.min.x+A.max.x)/2,J.obj.userData.pinY||A.max.y+8,(A.min.z+A.max.z)/2),rad:A.getBoundingSphere(new kn).radius}}),X=J=>U.find(A=>A.key===J);r=r.filter(J=>X(J));let N=a(".bttpins");N.innerHTML=U.map(J=>`<button class="bttpin" data-k="${J.key}"><i></i><span>${{bench:"Workbench",fretSaw:"Fret saw",fluidiser:"Fluidiser",injectionMoulder:"Injection moulding",rotoMoulder:"Rotational moulding",dieCaster:"Die casting",sandCasting:"Sand casting"}[J.key]||n[J.key].n}</span></button>`).join("")+'<button class="bttpin btlook" hidden><i></i><span>Take a closer look</span></button>';let j=N.querySelector(".btlook"),O=null,F={p:g.p.clone(),t:g.t.clone()};function H(){let J=o.clientWidth,A=o.clientHeight;if(!J||!A)return;c.setSize(J,A),m.aspect=J/A,m._ox=-1,m.updateProjectionMatrix();let M=Math.max(1,(t?1.55:1.3)/m.aspect);g.p.copy(F.t).add(F.p.clone().sub(F.t).multiplyScalar(M)),!v&&!x&&(m.position.copy(g.p),y.target.copy(g.t)),$=!0}new ResizeObserver(H).observe(o),H();function K(J,A,M=1100){x={p0:m.position.clone(),t0:y.target.clone(),p:J,t:A,s:performance.now(),dur:M}}let xe=a(".bttsteps");function V(J,A){let M=X(J);M&&M.anim&&(M.anim(A),c.shadowMap.needsUpdate=!0,$=!0)}function B(J){let A=v&&X(v),M=A&&A.obj.userData.product;O=J&&M?A.obj.localToWorld(M.point.clone()):null,j.hidden=!O,a(".btlookb").hidden=!O,$=!0}function te(){let J=n[v].steps,A=J.length;xe.querySelectorAll(".bttstep").forEach((M,G)=>{let me=!(G===0||w[v][G-1]);M.disabled=me,M.classList.toggle("btlock",me),M.classList.toggle("bton",G===E&&!!C),M.classList.toggle("btdone",!!w[v][G]&&!(G===E&&C)),M.classList.toggle("btrev",!!w[v][G]||G===E),M.classList.toggle("btnx",!C&&G===E+1)}),a(".bttall").textContent=C&&C.all?"\u275A\u275A Pause":E>=A-1&&!C?"\u21BA Play again":E>=0?"\u25B6 Play the rest":"\u25B6 Play all steps",z[v]&&B(!0)}function ge(J,A){let M=n[v].steps;if(J>=M.length){C=null,te();return}E=J,w[v][J]=1;let[G,me]=M[J];C={a:G,b:me,t:G,last:performance.now(),all:A},V(v,G),te();let re=a(".bttcard"),_e=xe.children[J];if(re&&_e){let ue=_e.offsetTop-re.clientHeight*.3;re.scrollTo({top:Math.max(0,ue),behavior:"smooth"})}}xe.addEventListener("click",J=>{let A=J.target.closest(".bttstep");A&&!A.disabled&&!C&&!R&&ge(+A.dataset.i,!1)}),a(".bttall").onclick=()=>{let J=n[v].steps.length;if(C&&C.all){C=null,te();return}ge(E>=J-1?0:E+1,!0)};function ye(J){let A=X(J);A&&A.anim&&V(J,A.obj.userData.idle||0)}function Ee(J){S&&fe(),it(),v=J,C=null,E=-1;let A=X(J),M=n[J],G=A.obj.userData.view?A.obj.userData.view.clone().applyQuaternion(A.obj.getWorldQuaternion(new un)).setY(0).normalize():m.position.clone().sub(y.target).setY(0).normalize(),me=A.c.clone(),re=Math.max(140,A.rad*(A.obj.userData.zoom||1)*(A.rad>200?1.75:3.3))*(o.clientWidth<=700?1.55:1);K(me.clone().add(G.multiplyScalar(re)).add(Q(0,re*.55,0)),me),a(".bttcard h2").textContent=M.n,a(".bttuse").textContent=M.use,a(".bttopp").hidden=!0,t?(w[J]=w[J]||{},a(".bttfac").hidden=!1,xe.innerHTML=M.steps.map((_e,ue)=>`<li><button class="bttstep" data-i="${ue}"><b>${ue+1}</b><span>${_e[2]}</span></button></li>`).join(""),a(".btgame").hidden=!(Ch[J]&&I[J]),V(J,M.steps[0][0]),B(!1),te()):(a(".bttsafe").innerHTML=`<li>${Gf}</li>`+M.safe.map(_e=>`<li>${_e}</li>`).join(""),a(".bttppe").innerHTML=Hf(s[J]||["eye","clothing"])),a(".bttcard").hidden=!1,a(".bttcard").scrollTop=0,a(".bttback").hidden=!1,i.querySelector(".bttw").classList.add("btfocus"),N.querySelectorAll(".bttpin[data-k]").forEach(_e=>_e.classList.toggle("bton",_e.dataset.k===J))}function He(){S&&fe(),it(),t&&v&&ye(v),v=null,C=null,B(!1),K(g.p.clone(),g.t.clone()),a(".bttcard").hidden=!0,a(".bttback").hidden=!0,i.querySelector(".bttw").classList.remove("btfocus"),N.querySelectorAll(".bttpin[data-k]").forEach(J=>J.classList.remove("bton"))}N.addEventListener("click",J=>{let A=J.target.closest(".bttpin");if(A){if(A.classList.contains("btlook")){Xe();return}Ee(A.dataset.k)}}),a(".bttx").onclick=He,a(".bttback").onclick=He,a(".bttnext").onclick=()=>Ee(r[(r.indexOf(v)+1)%r.length]),a(".bttprev").onclick=()=>Ee(r[(r.indexOf(v)+r.length-1)%r.length]);function it(){_&&(_.stop(),_=null);let J=!l.hidden;l.hidden=!0,l.innerHTML="",$=!0,J&&q&&v&&Ch[v]&&!I[v]&&(I[v]=1,L(),qe()),q=!1}function qe(){let J=a(".bttcele");J.innerHTML=`<div class="btcbox"><div class="btconf">${Array.from({length:18},(A,M)=>`<i style="--x:${M*37%100}%;--d:${M%6*.12}s;--c:${["#B9E5CB","#F4B3C2","#8EC5FF","#FFD38A"][M%4]}"></i>`).join("")}</div><b>Well done!</b><p>You have watched the process and studied the product. Now it's your turn: choose a material and make your own.</p><div class="bttplay"><button class="btgo btcgo">\u{1F3AE} Let's make something</button><button class="btclater">Later</button></div></div>`,J.hidden=!1,a(".btgame").hidden=!1,J.querySelector(".btcgo").onclick=()=>{J.hidden=!0,Re()},J.querySelector(".btclater").onclick=()=>{J.hidden=!0}}function Xe(){if(S&&S.done){et(S.prod,S.col||S.mat,"Your "+vn[S.prod].n.toLowerCase(),"Made by "+n[v].n.replace(" machine","").toLowerCase()+" in "+(Dn[S.mat]||ri[S.mat]).n);return}let J=X(v),A=J.obj.userData.product;q=!0,et(A.key,A.col,vn[A.key].n,n[v].n.replace(" machine",""))}a(".btlookb").onclick=Xe;function et(J,A,M,G){let me=q;it(),q=me;let re=vn[J],_e=lf(A,v==="sandCasting"),ue=re.make(_e),ne=null;l.innerHTML=`<div class="bttovh"><div><small>${G}</small><b>${M}</b></div><button class="btclose">\u2715 Back</button></div><div class="bttovb"><div class="bttpvp"></div></div><div class="bttinfo" hidden><b></b><p></p></div>
   <div class="bttovf"><span>Drag to turn it round. Tap a dot to find out how you can tell how it was made.</span>${ue.explode?'<button class="btexp">Explode the product</button>':""}</div>`,l.hidden=!1,l.querySelector(".btclose").onclick=()=>{it()};let ae=l.querySelector(".bttovb"),Te=l.querySelector(".bttpvp"),k=l.querySelector(".bttinfo"),he=Ol();ae.appendChild(he.r.domElement);let le=sf(ue.obj),we=new Xt(32,1,.5,4e3),Ae=new Pt().setFromObject(ue.obj).getSize(Q(0,0,0)),Se=le.R/Math.sin(16*Math.PI/180)*1.08;we.position.copy(le.c).add(Q(0,.42,1).normalize().multiplyScalar(Se));let Ce=new _r(we,he.r.domElement);Ce.target.copy(le.c),Ce.enablePan=!1,Ce.enableDamping=!0,Ce.enableZoom=!0,Ce.zoomSpeed=1.2,Ce.minDistance=Se*.12,Ce.maxDistance=Se*2.6;let Je=0;Ce.addEventListener("start",()=>Je=1);let Me=e.level||"N5";Te.innerHTML=ue.feat.map((Lt,Kt)=>{let tn=Lt.higher&&Me==="N5";return`<button class="bttpin${tn?" btdis":""}" data-i="${Kt}" ${Lt.inside?"hidden":""} ${tn?'disabled title="For Higher"':""}><i></i><span>${Lt.t}${Lt.higher?"<sup>Higher</sup>":""}</span></button>`}).join(""),Te.addEventListener("click",Lt=>{let Kt=Lt.target.closest(".bttpin");if(!Kt)return;let tn=ue.feat[+Kt.dataset.i];if(ne===tn){ne=null,Kt.classList.remove("bton"),k.hidden=!0;return}ne=tn,Je=0,Te.querySelectorAll(".bttpin").forEach(bi=>bi.classList.toggle("bton",bi===Kt)),k.hidden=!1,k.querySelector("b").textContent=tn.t,k.querySelector("p").textContent=tn.d}),Te.insertAdjacentHTML("afterbegin",ue.feat.map((Lt,Kt)=>`<b class="btln${Lt.higher&&Me==="N5"?" btdis":""}" data-i="${Kt}"></b><i class="btdot${Lt.higher&&Me==="N5"?" btdis":""}" data-i="${Kt}"></i>`).join(""));let Ye=[...Te.querySelectorAll(".bttpin")],rt=[...Te.querySelectorAll(".btdot")],Ue=[...Te.querySelectorAll(".btln")],bt=[];Te.addEventListener("wheel",Lt=>{Lt.preventDefault(),he.r.domElement.dispatchEvent(new WheelEvent("wheel",{deltaY:Lt.deltaY,deltaX:Lt.deltaX,deltaMode:Lt.deltaMode,clientX:Lt.clientX,clientY:Lt.clientY,bubbles:!0,cancelable:!0}))},{passive:!1});let Ct=0,Mn=0,li=l.querySelector(".btexp");li&&(li.onclick=()=>{Mn=Mn?0:1,li.textContent=Mn?"Put it back together":"Explode the product",k.hidden=!0});let Er=performance.now(),ls=Q(0,0,0),wr=!0,Ds=0;function Ft(Lt){if(!wr)return;Ds=requestAnimationFrame(Ft);let Kt=ae.clientWidth,tn=ae.clientHeight;if(!Kt||!tn)return;if(Kt!==Ft.w||tn!==Ft.h){Ft.w=Kt,Ft.h=tn,he.r.setSize(Kt,tn),we.aspect=Kt/tn,we.updateProjectionMatrix();let Vt=Math.tan(16*Math.PI/180),T=Vt*we.aspect,W=Math.max(Ae.x,Ae.z)/2,se=Math.max(Ae.y,Math.min(Ae.x,Ae.z)*.45)/2,ee=Math.min(Ae.x,Ae.z)/2;Se=Math.max(W/T,se/Vt)*1.12+ee,we.userData.k=1;let ie=we.position.clone().sub(Ce.target).normalize();we.position.copy(Ce.target).add(ie.multiplyScalar(Se)),Ce.minDistance=Se*.12,Ce.maxDistance=Se*2.6,Ft.zt=0,Ft.ls=ne}let bi=Math.min(1,(Lt-Er)/900),Tr=1-Math.pow(1-bi,3),Ls=Lt/1e3;ue.obj.position.y=-le.R*.8*(1-Tr),ue.obj.scale.setScalar((.6+.4*Tr)*(1-.22*Ct));let Oi=Math.min(.1,(Lt-(Ft.l||Lt))/1e3)*(window.__BTFAST||1);Ft.l=Lt;let Ar=1-Math.pow(.92,Oi*60);ue.tick&&ue.tick(Ls,Oi,ne);let Ns=ne&&ne.pose||ue.pose&&ue.pose(ne);{let Vt=Se*(we.userData.k||1)*(ne&&ne.zoom||1);if(ne!==Ft.ls&&(Ft.ls=ne,Ft.zt=Vt),Ft.zt){let T=we.position.clone().sub(Ce.target),W=T.length(),se=W+(Ft.zt-W)*Ar;we.position.copy(Ce.target).add(T.setLength(se)),Math.abs(se-Ft.zt)<.5&&(Ft.zt=0)}}if(Ns)ue.obj.rotation.x+=(Ns.x-ue.obj.rotation.x)*Ar,ue.obj.rotation.y+=(Ns.y-ue.obj.rotation.y)*Ar;else if(!Je){let Vt=.35*Math.sin(Ls*.45),T=.06*Math.sin(Ls*.33);ue.obj.rotation.y+=(Vt-ue.obj.rotation.y)*.05,ue.obj.rotation.x+=(T-ue.obj.rotation.x)*.05}ue.explode&&(Ct+=(Mn-Ct)*.08,ue.explode(Ct)),Ce.update(),he.r.render(le.sc,we);let Rr=le.c.clone().project(we),ql=(Rr.x*.5+.5)*Kt,Yl=(-Rr.y*.5+.5)*tn,Bi=[];ue.feat.forEach((Vt,T)=>{let W=Ye[T],se=Vt.inside&&Ct<.6;if(W.hidden=se,rt[T].style.display=Ue[T].style.display=se?"none":"",se)return;ue.obj.updateMatrixWorld(!0),Vt.o?Vt.o.localToWorld(ls.copy(Vt.p)):ls.copy(Vt.p).applyMatrix4(ue.obj.matrixWorld),ls.project(we);let ee=(ls.x*.5+.5)*Kt,ie=(-ls.y*.5+.5)*tn,Pe=ee-ql,Oe=ie-Yl,De=Math.hypot(Pe,Oe)||1;Pe/=De,Oe/=De,De<4&&(Pe=0,Oe=-1);let Be=W.offsetWidth||90,Ke=W.offsetHeight||26,at={x:ee+Pe*(56+Be*.3),y:ie+Oe*46-8},ft=bt[T]||(bt[T]={x:at.x,y:at.y});ft.x+=(at.x-ft.x)*.3,ft.y+=(at.y-ft.y)*.3,Bi.push({i:T,ax:ee,ay:ie,P:ft,bw:Be,bh:Ke})});for(let Vt=0;Vt<8;Vt++)for(let T=0;T<Bi.length;T++)for(let W=T+1;W<Bi.length;W++){let se=Bi[T],ee=Bi[W],ie=(se.bw+ee.bw)/2+6-Math.abs(se.P.x-ee.P.x),Pe=(se.bh+ee.bh)/2+4-Math.abs(se.P.y-ee.P.y);if(ie>0&&Pe>0)if(Pe<ie){let Oe=(se.P.y<ee.P.y?-1:1)*Pe/2;se.P.y+=Oe,ee.P.y-=Oe}else{let Oe=(se.P.x<ee.P.x?-1:1)*ie/2;se.P.x+=Oe,ee.P.x-=Oe}}Bi.forEach(({i:Vt,ax:T,ay:W,P:se,bw:ee,bh:ie})=>{se.x=Math.max(ee/2+6,Math.min(Kt-ee/2-6,se.x)),se.y=Math.max(ie/2+6,Math.min(tn-ie/2-6,se.y)),Ye[Vt].style.transform=`translate(${se.x-ee/2}px,${se.y-ie/2}px)`,rt[Vt].style.transform=`translate(${T}px,${W}px)`;let Pe=se.x-T,Oe=se.y-W,De=Math.max(0,Math.hypot(Pe,Oe)-Math.min(ee,ie)/2);Ue[Vt].style.width=De+"px",Ue[Vt].style.transform=`translate(${T}px,${W}px) rotate(${Math.atan2(Oe,Pe)}rad)`})}Ds=requestAnimationFrame(Ft),_={stop(){wr=!1,cancelAnimationFrame(Ds),Ce.dispose()}}}a(".btgame").onclick=()=>Re();function fe(){let J=X(v);if(J&&S&&S.cfg&&S.cfg.type==="inj"&&J.obj.userData.game&&J.obj.userData.game.end(),J&&S&&S.cfg&&S.cfg.type!=="inj"&&J.obj.userData.setProduct){let A=J.obj.userData.product;J.obj.userData.setProduct(A.key,A.col)}S=null,R=null,a(".bttopp").hidden=!0,a(".bttfac").hidden=!1,v&&ye(v),B(!!z[v])}function ve(J,A,M,G){l.innerHTML=`<div class="bttovh"><div><small>${J}</small><b>${A}</b></div><button class="btclose">\u2715 Close</button></div>${M}<div class="bttovf">${G||""}</div>`,l.hidden=!1,l.querySelector(".btclose").onclick=()=>{it(),S&&!S.running&&(S=null)}}function Re(){C=null,te(),S={step:1,cfg:Ch[v]},ke()}function ke(){_&&(_.stop(),_=null);let J=S.cfg,A=J.mat==="metal",M=A?ri:Dn,G=J.colour===!1||A?3:4,me=ue=>{if(A)return`<span class="btpel" style="background:radial-gradient(circle at 35% 30%,#fff 0 6%,${"#"+ri[ue].col.toString(16).padStart(6,"0")} 35%,#2a2b30 95%)"></span>`;let ne=Dn[ue];return`<span class="btpel" style="background:radial-gradient(circle at 35% 30%,#fff 0 8%,${ne.kind==="set"?"#c8b7a0":"#e9d9c9"} 30%,${ne.kind==="set"?"#7a6a58":"#8f7f72"} 85%)"></span>`},re=ue=>A?ri[ue].kind==="fe"?"Ferrous metal":"Non-ferrous metal":(Dn[ue].kind==="set"?"Thermosetting":"Thermoplastic")+(Dn[ue].extra?" \xB7 not in N5":"");ve(`Have a go \xB7 Step 1 of ${G}`,A?"Choose your metal":"Choose your plastic",`<div class="bttgrid">${J.list.map(ue=>`<button class="bttopt" data-k="${ue}">${me(ue)}<b>${M[ue].n}</b><span class="bttag ${!A&&Dn[ue].kind==="set"?"set":""}">${re(ue)}</span></button>`).join("")}</div><div class="bttdet" hidden></div>`,`<span>Tap a ${A?"metal":"plastic"} to find out about it. Not every one will work in this machine!</span>`);let _e=l.querySelector(".bttdet");l.querySelector(".bttgrid").addEventListener("click",ue=>{let ne=ue.target.closest(".bttopt");if(!ne)return;let ae=ne.dataset.k,Te=M[ae];l.querySelectorAll(".bttopt").forEach(Ae=>Ae.classList.toggle("bton",Ae===ne)),_e.hidden=!1;let k=J.ok[ae],he=J.no&&J.no[ae],le=J.warn&&J.warn[ae];_e.innerHTML=`<b>${Te.full||Te.n}</b><p>${Te.blurb}</p><p><i>Used for:</i> ${Te.uses}</p>`+(k?(le?`<p class="note">${le}</p>`:"")+`<div class="bttplay"><button class="btgo">\u2713 Use ${Te.n}</button></div>`:`<p class="warn">\u2715 ${he||"This can't be used in this machine."}</p>`);let we=_e.querySelector(".btgo");we&&(we.onclick=()=>{S.mat=ae,Fe()}),_e.scrollIntoView({block:"nearest"})})}let Ne=ke;function Ve(J,A){let M=Ol(),G=vn[J].make(lf(A,S&&S.cfg&&S.cfg.sand)),me=sf(G.obj),re=new Xt(30,4/3,.5,4e3),_e=me.R/Math.sin(15*Math.PI/180)*1.05;return re.position.copy(me.c).add(Q(.5,.55,1).normalize().multiplyScalar(_e)),re.lookAt(me.c),M.r.setSize(240,180,!1),M.r.render(me.sc,re),M.r.domElement.toDataURL("image/png")}function Fe(){let J=S.cfg,A=J.mat==="metal",M=J.products||Object.keys(vn).filter(re=>(vn[re].mats||[]).includes(S.mat)),G=A?S.mat:Dn[S.mat].cols[0];ve(`Have a go \xB7 Step 2 of ${A?3:4}`,"Choose a product to make in "+(A?ri:Dn)[S.mat].n,`<div class="bttgrid">${M.map(re=>`<button class="bttopt" data-k="${re}"><img alt="" src="${Ve(re,G)}"><b>${vn[re].n}</b><small>${Nf[re]}</small></button>`).join("")}</div>`,'<button class="btsec btbk">\u2039 Change material</button>'),l.querySelector(".btbk").onclick=ke,l.querySelector(".bttgrid").addEventListener("click",re=>{let _e=re.target.closest(".bttopt");_e&&(S.prod=_e.dataset.k,A?lt():tt())})}function tt(){let J=Dn[S.mat].cols;ve("Have a go \xB7 Step 3 of 4","Choose your colour",`<div class="bttovb"></div><div class="bttchips">${J.map((Se,Ce)=>`<button data-i="${Ce}"><i style="background:${Se==="clear"?"linear-gradient(135deg,#ffffff55,#cfe6f522)":"#"+Se.toString(16).padStart(6,"0")}"></i>${Ca[Se]}</button>`).join("")}</div>`,'<button class="btsec btbk">\u2039 Change product</button><span>Plastic granules come in lots of colours.</span><button class="btuse" disabled>Choose a colour</button>'),l.querySelector(".btbk").onclick=Fe;let A=l.querySelector(".bttovb"),M=Ol();A.appendChild(M.r.domElement);let G=new An;G.environment=M.env;let me=new Qn(16777215,1.6);me.position.set(20,40,30),G.add(me,new xs(16777215,3355443,.5));let re=new We;G.add(re);let _e=[],ue=new Et(.8,.8,1.3,14),ne=Vf();J.forEach((Se,Ce)=>{let Je=new We,Me=zl(Se,{rough:.18});for(let Ue=0;Ue<34;Ue++){let bt=Math.random()*7,Ct=Math.sqrt(Math.random())*3.4,Mn=Math.max(0,(3.4-Ct)*.7)*Math.random()+.6,li=new Ie(ue,Me);li.position.set(Math.cos(bt)*Ct,Mn,Math.sin(bt)*Ct),li.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),Je.add(li)}let Ye=new Ie(new Cn(9,9),new Ci({map:ne,transparent:!0,depthWrite:!1}));Ye.rotation.x=-Math.PI/2,Ye.position.y=.02,Je.add(Ye);let rt=Ce/J.length*Math.PI*2;Je.position.set(Math.cos(rt)*10,0,Math.sin(rt)*10),Je.userData.i=Ce,re.add(Je),_e.push(Je)});let ae=new Xt(34,1,.5,500);ae.position.set(0,17,25),ae.lookAt(0,1,0);let Te=-1,k=Se=>{Te=Se,S.col=J[Se],l.querySelectorAll(".bttchips button").forEach((Je,Me)=>Je.classList.toggle("bton",Me===Se));let Ce=l.querySelector(".btuse");Ce.disabled=!1,Ce.textContent="\u2713 Use "+Ca[J[Se]].toLowerCase()};l.querySelector(".bttchips").addEventListener("click",Se=>{let Ce=Se.target.closest("button");Ce&&k(+Ce.dataset.i)});let he=new hr;M.r.domElement.onclick=Se=>{let Ce=M.r.domElement.getBoundingClientRect();he.setFromCamera(Q((Se.clientX-Ce.left)/Ce.width*2-1,-(Se.clientY-Ce.top)/Ce.height*2+1,0),ae);let Je=he.intersectObjects(_e,!0)[0];if(Je){let Me=Je.object;for(;Me&&Me.userData.i===void 0;)Me=Me.parent;Me&&k(Me.userData.i)}},l.querySelector(".btuse").onclick=()=>{M.r.domElement.onclick=null,lt()};let le=!0,we=0;function Ae(Se){if(!le)return;we=requestAnimationFrame(Ae);let Ce=A.clientWidth,Je=A.clientHeight;if(!(!Ce||!Je)){if(M.r.domElement.width!==Math.round(Ce*M.r.getPixelRatio())||M.r.domElement.height!==Math.round(Je*M.r.getPixelRatio())){M.r.setSize(Ce,Je),ae.aspect=Ce/Je,ae.updateProjectionMatrix();let Me=Math.max(1,1.5/ae.aspect);ae.position.set(0,17*Me,25*Me),ae.lookAt(0,1,0)}re.rotation.y=Se/1e3*.12,_e.forEach((Me,Ye)=>{Me.rotation.y=-Se/1e3*.25;let rt=Ye===Te?1.6:0;Me.position.y+=(rt-Me.position.y)*.1,Me.scale.setScalar(1+(Ye===Te?.15:0))}),M.r.render(G,ae)}}we=requestAnimationFrame(Ae),_={stop(){le=!1,cancelAnimationFrame(we)}}}function lt(){if(S.cfg.type!=="inj")return gt();it();let J=X(v),A=J.obj.userData.game;S.running=!0,S.done=!1,S.did={};let M=vn[S.prod].make(zl(S.col)),G=M.obj,me=new Pt().setFromObject(G),re=14/Math.max(...me.getSize(Q(0,0,0)).toArray());G.scale.setScalar(re);let _e=new We;_e.add(G),A.start(S.col==="clear"?14675960:S.col,S.col==="clear",_e),c.shadowMap.needsUpdate=!0,$=!0,B(!1);let ue=rf.map(k=>k).sort(()=>Math.random()-.5);a(".bttfac").hidden=!0;let ne=a(".bttopp");ne.hidden=!1,ne.innerHTML=`<h3>Have a go \xB7 Step 4 of 4</h3><p class="bttuse">Make your <b>${Ca[S.col].toLowerCase()} ${vn[S.prod].n.toLowerCase()}</b> in <b>${Dn[S.mat].n}</b>. Tap the steps in the right order to run the machine.</p>
   <div class="bttop">${ue.map(([k,he])=>`<button data-k="${k}"><b>?</b><span>${he}</span></button>`).join("")}</div><p class="bttmsg"></p><div class="bttplay"><button class="btlookb2 btgo" hidden>\u{1F50D} View your finished product</button><button class="btagain" hidden>\u{1F3AE} Make another</button><button class="btquit">Stop and go back</button></div>`,a(".bttcard").scrollTop=0;let ae=ne.querySelector(".bttmsg"),Te=0;ne.querySelector(".btquit").onclick=()=>{fe()},ne.querySelector(".btagain").onclick=()=>{fe(),Re()},ne.querySelector(".btlookb2").onclick=Xe,ne.querySelector(".bttop").addEventListener("click",k=>{let he=k.target.closest("button");if(!he||he.classList.contains("btok"))return;let le=he.dataset.k;if(R){ae.textContent="Wait for that step to finish.";return}if(R){ae.textContent="Wait for that step to finish.";return}let we=(tb[le]||[]).find(([Ae])=>!S.did[Ae]);if(we){ae.textContent=we[1],he.classList.remove("btno"),he.offsetWidth,he.classList.add("btno");return}Te++,S.did[le]=1,he.classList.add("btok"),he.querySelector("b").textContent=Te,ae.textContent="",R={k:le,u:0,dur:A.steps[le],last:performance.now(),btn:he}})}function gt(){it();let J=X(v),A=S.cfg,M=A.mat==="metal";S.running=!0,S.done=!1,S.did={},S.n=0,J.obj.userData.setProduct(S.prod,M?S.mat:S.col),V(v,0),B(!1);let G=A.steps.map((ue,ne)=>[ne,ue[0]]).sort(()=>Math.random()-.5),me=M?ri[S.mat].n:Ca[S.col].toLowerCase()+" "+Dn[S.mat].n;a(".bttfac").hidden=!0;let re=a(".bttopp");re.hidden=!1,re.innerHTML=`<h3>Have a go \xB7 Last step</h3><p class="bttuse">Make your <b>${vn[S.prod].n.toLowerCase()}</b> in <b>${me}</b>. Tap the steps in the right order to run the machine.</p>
   <div class="bttop">${G.map(([ue,ne])=>`<button data-i="${ue}"><b>?</b><span>${ne}</span></button>`).join("")}</div><p class="bttmsg"></p><div class="bttplay"><button class="btlookb2 btgo" hidden>\u{1F50D} View your finished product</button><button class="btagain" hidden>\u{1F3AE} Make another</button><button class="btquit">Stop and go back</button></div>`,a(".bttcard").scrollTop=0;let _e=re.querySelector(".bttmsg");re.querySelector(".btquit").onclick=()=>{fe()},re.querySelector(".btagain").onclick=()=>{fe(),Re()},re.querySelector(".btlookb2").onclick=Xe,re.querySelector(".bttop").addEventListener("click",ue=>{let ne=ue.target.closest("button");if(!ne||ne.classList.contains("btok"))return;if(R){_e.textContent="Wait for that step to finish.";return}let ae=+ne.dataset.i;if(ae!==S.n){_e.textContent="Not yet. First: "+A.steps[S.n][0].toLowerCase()+".",ne.classList.remove("btno"),ne.offsetWidth,ne.classList.add("btno");return}S.n++,S.did[ae]=1,ne.classList.add("btok"),ne.querySelector("b").textContent=S.n,_e.textContent="",R={anim:!0,t:A.steps[ae][1],b:A.steps[ae][2],last:performance.now()}})}function Y(){let J=X(v),A=S.cfg.type==="inj"?rf.length:S.cfg.steps.length;if(Object.keys(S.did).length===A){S.done=!0,S.running=!1;let M=a(".bttopp");M.querySelector(".bttmsg").textContent="Well done! Your product is finished. Take a closer look at it.",M.querySelector(".btlookb2").hidden=!1,M.querySelector(".btagain").hidden=!1,M.querySelector(".btquit").textContent="Back to the machine",O=J.obj.localToWorld((J.obj.userData.game?J.obj.userData.game.binPoint:J.obj.userData.product.point).clone()),j.hidden=!1,j.querySelector("span").textContent="View your finished product",$=!0}}let Tt=new hr,dt=null;c.domElement.addEventListener("pointerdown",J=>{dt={x:J.clientX,y:J.clientY}}),c.domElement.addEventListener("pointerup",J=>{if(!dt||Math.hypot(J.clientX-dt.x,J.clientY-dt.y)>6){dt=null;return}if(dt=null,S&&S.running)return;let A=c.domElement.getBoundingClientRect();Tt.setFromCamera(Q((J.clientX-A.left)/A.width*2-1,-(J.clientY-A.top)/A.height*2+1,0),m);let M=Tt.intersectObjects(U.map(G=>G.obj),!0)[0];if(M){let G=M.object;for(;G&&!G.userData.key;)G=G.parent;G&&G.userData.key!==v&&Ee(G.userData.key)}});let xt=Q(0,0,0),Le=0,Dt=!0;function Qe(J){if(!Dt)return;if(Le=requestAnimationFrame(Qe),!i.isConnected){Dt=!1,c.dispose();return}if(!o.offsetParent)return;if(x){let G=Math.min(1,(J-x.s)/x.dur),me=G<.5?4*G*G*G:1-Math.pow(-2*G+2,3)/2;m.position.lerpVectors(x.p0,x.p,me),y.target.lerpVectors(x.t0,x.t,me),G>=1&&(x=null),$=!0}{let G=o.clientWidth,me=o.clientHeight,re=!!v,_e=G<=700,ue=re&&!_e?G*.17:0,ne=re&&_e?me*.26:0;(m._ox!==ue||m._oy!==ne)&&(m._ox=ue,m._oy=ne,ue||ne?m.setViewOffset(G,me,ue,ne,G,me):m.clearViewOffset(),$=!0)}if(y.update(),t){if(C){let G=Math.min(.1,(J-C.last)/1e3)*(window.__BTFAST||1);if(C.last=J,C.t=Math.min(C.b,C.t+G),V(v,C.t),C.t>=C.b){let me=C.all,re=E,_e=n[v].steps.length;C=null,re>=_e-1&&(z[v]=1),me&&re<_e-1?ge(re+1,!0):(re<_e-1&&(E=re),te())}}if(R&&R.anim){let G=Math.min(.1,(J-R.last)/1e3)*(window.__BTFAST||1);R.last=J,R.t=Math.min(R.b,R.t+G),V(v,R.t),R.t>=R.b&&(R=null,Y()),i.dataset.busy=R?"1":""}else if(R){let G=Math.min(.1,(J-R.last)/1e3)*(window.__BTFAST||1);R.last=J,R.u=Math.min(1,R.u+G/R.dur),X(v).obj.userData.game.run(R.k,R.u,J/1e3),c.shadowMap.needsUpdate=!0,$=!0,R.u>=1&&(R=null,Y())}i.dataset.busy=R?"1":""}else u.userData.anim&&(u.userData.anim(J/1e3),c.shadowMap.needsUpdate=!0,$=!0);if(!l.hidden&&!$||!$)return;$=!1;{let G=Math.min(40,Math.max(1,m.position.distanceTo(y.target)*.04));Math.abs(G-m.near)>.5&&(m.near=G,m.updateProjectionMatrix())}c.render(d,m);let A=o.clientWidth,M=o.clientHeight;N.querySelectorAll(".bttpin[data-k]").forEach((G,me)=>{xt.copy(U[me].top).project(m);let re=xt.z<1&&Math.abs(xt.x)<1.05&&Math.abs(xt.y)<1.05;G.style.display=re?"":"none",G.style.transform=`translate(${(xt.x*.5+.5)*A}px,${(-xt.y*.5+.5)*M}px) translate(-50%,-100%)`}),O&&(xt.copy(O).project(m),j.style.transform=`translate(${(xt.x*.5+.5)*A}px,${(-xt.y*.5+.5)*M}px) translate(-50%,-100%)`)}return Le=requestAnimationFrame(Qe),i.__bt={viewProduct:et,unlock:J=>{I[J]=1}},{stop(){Dt=!1,cancelAnimationFrame(Le)},home:He}}var Wf=[["Measuring and marking out",[["Steel rule",Ih,[70,0,-20]],["Try square",Dh,[65,25,0]],["Engineer\u2019s square",A_,[65,25,0]],["Marking gauge",Wl,[15,-35,0]],["Mortise gauge",R_,[15,-35,0]],["Scriber",df,[10,0,-60]],["Centre punch",C_,[10,0,-55]],["Dividers",I_,[5,-20,0]],["Outside callipers",D_,[5,-20,0]],["Odd-leg callipers",L_,[5,-20,0]],["Pencil",M_,[10,0,-60]]]],["Saws",[["Tenon saw",Lh,[5,-18,0]],["Coping saw",S_,[5,-20,0]],["Hacksaw",uf,[5,-20,0]],["Junior hacksaw",N_,[5,-20,0]]]],["Chisels",[["Bevel-edge chisel",Nh,[35,20,-60]],["Mortise chisel",F_,[15,-20,-55]]]],["Hammers and mallets",[["Ball-pein hammer",k_,[10,-30,-20]],["Cross-pein hammer",O_,[10,-30,-20]],["Claw hammer",pf,[10,-30,-20]],["Wooden mallet",Fh,[10,-35,-20]],["Hide mallet",B_,[10,-30,-20]]]],["Planes",[["Jack plane",mf,[25,-30,0]],["Smoothing plane",hf,[25,-30,0]],["Rebate plane",H_,[25,-30,0]],["Plough plane",z_,[25,-30,0]]]],["Drill bits",[["Twist drill",gf,[15,0,-35]],["Forstner bit",G_,[38,55,0]],["Countersink bit",V_,[20,0,-30]],["Centre drill",W_,[15,0,-55]]]],["Other hand tools",[["Flat file",_f,[40,-15,10]],["Half-round file",X_,[40,-15,10]],["Hand router",q_,[35,-25,0]],["Pliers",yf,[15,-15,20]],["Pop-rivet gun",Z_,[5,-25,0]],["Flat screwdriver",Q_,[10,0,-55]],["Cross-head screwdriver",ey,[10,0,-55]],["Tin snips",Y_,[8,-15,4]],["Bending bars",j_,[20,-25,-8]],["Tap and wrench",$_,[20,-20,0]],["Die and stock",K_,[55,-15,0]],["Nail punch",P_,[10,0,-55]],["Bradawl",J_,[10,0,-55]]]],["Holding and clamping",[["Bench vice",bf,[20,-35,0]],["Engineer\u2019s vice",vf,[20,-35,0]],["Machine vice",ty,[25,-35,0]],["Hand vice",ny,[5,-18,0]],["Soft jaws (vice guards)",oy,[22,-35,0]],["G clamp",iy,[5,-25,0]],["Quick clamp",ry,[100,-25,-90]],["Sash cramp",sy,[20,-20,0]]]],["Machines",[["Belt sander",Mf,[14,-30,0]],["Pillar drill",Sf,[8,-35,0]],["Fret (scroll) saw",Ef,[14,-40,0]],["Centre lathe",wf,[16,-22,0]],["Wood lathe",Tf,[16,-22,0]],["Mortise machine",Af,[10,-35,0]],["Fluidiser",Rf,[30,-30,0]],["Strip heater",Cf,[28,-25,0]]]]];function Gl(i,e){let t=i(),n=t.userData.anim;t.quaternion.copy(b_(...e));let s=new We;s.add(t),s.updateMatrixWorld(!0);let r=new Pt().setFromObject(t),a=r.getCenter(Q(0,0,0));t.position.sub(a);let o=new We;return o.add(s),o.userData.anim=n,{g:o,r:r.getSize(Q(0,0,0)).length()/2}}function Vl(i,e){i.environment=new Fi(e).fromScene(new As,.04).texture,i.environmentIntensity=.7;let t=new Qn(16773596,2.2);t.position.set(6,10,9);let n=new Qn(12571903,1.8);n.position.set(-8,4,-10),i.add(t,n,new lr(16777215,.25))}var ib=zf+`.tl-n{color:#BFC3C8;margin:0 0 6px;font-size:14px}
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
#tlinfo p{margin:0;font-size:15.5px;line-height:1.45}#tlinfo ul{margin:0;padding-left:20px;font-size:15.5px;line-height:1.45}#tlinfo li{margin:0 0 4px}#tlovp{left:14px;top:50%}#tlovnx{right:14px;top:50%}`;function sb(i){let e=document.createElement("style");e.textContent=ib,document.head.appendChild(e);let t=document.createElement("div");t.id="tlov",t.setAttribute("role","dialog"),t.setAttribute("aria-label","3D tool viewer"),t.innerHTML='<div id="tlovc"></div><div id="tlab"><button type="button" data-ab="use" aria-pressed="false">Tool use</button><button type="button" data-ab="safe" aria-pressed="false">Stay safe</button></div><div id="tlinfo" hidden></div><div id="tlovn"></div><button class="tlob" id="tlovx" aria-label="Close">\u2715</button><button class="tlob" id="tlovp" aria-label="Previous tool">\u2039</button><button class="tlob" id="tlovnx" aria-label="Next tool">\u203A</button>',document.body.appendChild(t);let n=[],s="";for(let[I,L]of Wf){s+=`<h3 class="tl-h">${I}</h3><div class="tl-g">`;for(let[q,$,U]of L)s+=`<button type="button" class="tl-t" data-i="${n.length}"><img alt=""><span>${q}</span></button>`,n.push([q,$,U]);s+="</div>"}i.innerHTML=`<p class="tl-n">${n.length} tools and machines \xB7 tap one to see it turn. Drag to spin it yourself.</p>`+s;let r=new _i({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});r.setSize(256,256),r.setPixelRatio(1),r.toneMapping=ei;let a=new An;Vl(a,r);let o=new Xt(30,1,.1,800),l=i.querySelectorAll(".tl-t img"),c=0;(function I(){let L=performance.now();for(;c<n.length&&performance.now()-L<40;){let[q,$,U]=n[c],{g:X,r:N}=Gl($,U);a.add(X),o.position.set(0,N*.25,N*3.6),o.lookAt(0,0,0),r.render(a,o),l[c].src=r.domElement.toDataURL(),a.remove(X),c++}c<n.length?setTimeout(I,16):r.dispose()})();let d=new _i({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(2,devicePixelRatio||1)),d.toneMapping=ei,document.getElementById("tlovc").appendChild(d.domElement);let u=new An;Vl(u,d);let f=new Xt(30,1,.1,800),p=new _r(f,d.domElement);p.enablePan=!1,p.enableDamping=!0;let m=null,y=0,g=0,x=null;function v(I){y=(I+n.length)%n.length,m&&u.remove(m);let[L,q,$]=n[y],{g:U,r:X}=Gl(q,$);m=U,u.add(U);let N=Math.max(1,.85/Math.max(.3,innerWidth/innerHeight));f.position.set(0,X*.3*N,X*3.4*N),p.target.set(0,0,0),p.minDistance=X*1.5,p.maxDistance=X*12,p.update(),document.getElementById("tlovn").textContent=L,S(null)}let C=null,E=document.getElementById("tlinfo"),R=document.getElementById("tlab");function S(I){C=I;let L=qy[n[y][0]];if(R.hidden=!L,R.querySelectorAll("button").forEach(q=>q.setAttribute("aria-pressed",q.dataset.ab===I)),!I||!L){E.hidden=!0;return}E.className=I,E.innerHTML=I==="use"?`<h4>Tool use</h4><p>${L[0]}</p>`:`<h4>Stay safe</h4>${Hf(Zy(n[y][0]))}<ul><li>${Gf}</li>${L[1].map(q=>`<li>${q}</li>`).join("")}</ul>`,E.hidden=!1}R.addEventListener("click",I=>{let L=I.target.closest("button");L&&S(C===L.dataset.ab?null:L.dataset.ab)});function _(){let I=innerWidth,L=innerHeight;d.setSize(I,L),f.aspect=I/L,f.updateProjectionMatrix()}function w(I){g=requestAnimationFrame(w),m&&(m.rotation.y+=.006,m.userData.anim&&m.userData.anim((I||0)/1e3)),p.update(),d.render(u,f)}function z(I){t.classList.contains("on")&&(t.classList.remove("on"),cancelAnimationFrame(g),!I&&history.state&&history.state.tlv&&history.back(),x&&x.focus({preventScroll:!0}))}addEventListener("popstate",()=>z(!0)),["gesturestart","gesturechange","dblclick"].forEach(I=>t.addEventListener(I,L=>L.preventDefault(),{passive:!1})),t.addEventListener("touchmove",I=>{I.touches.length>1&&I.target.tagName!=="CANVAS"&&I.preventDefault()},{passive:!1}),i.addEventListener("click",I=>{let L=I.target.closest(".tl-t");if(L){x=L,t.classList.add("on");try{history.pushState({tlv:1},"")}catch{}_(),v(+L.dataset.i),cancelAnimationFrame(g),w(),document.getElementById("tlovx").focus()}}),document.getElementById("tlovx").onclick=()=>z(),document.getElementById("tlovp").onclick=()=>v(y-1),document.getElementById("tlovnx").onclick=()=>v(y+1),addEventListener("keydown",I=>{t.classList.contains("on")&&(I.key==="Escape"&&z(),I.key==="ArrowLeft"&&v(y-1),I.key==="ArrowRight"&&v(y+1))}),addEventListener("resize",()=>{t.classList.contains("on")&&_()})}var Xl=[];Wf.forEach(([i,e],t)=>{e.forEach(([n,s,r])=>Xl.push({id:n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),n,g:t,fn:s,pose:r}))});function rb(){return Xl.map(({id:i,n:e,g:t})=>({id:i,n:e,g:t}))}var ss=null,Aa=null,Ll=null,Nl={};function ab(i){if(Nl[i])return Nl[i];let e=Xl.find(s=>s.id===i);if(!e)return"";ss||(ss=new _i({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),ss.setSize(320,240),ss.setPixelRatio(1),ss.toneMapping=ei,Aa=new An,Vl(Aa,ss),Ll=new Xt(30,4/3,.1,800));let{g:t,r:n}=Gl(e.fn,e.pose);return Aa.add(t),Ll.position.set(0,n*.25,n*3.3),Ll.lookAt(0,0,0),ss.render(Aa,Ll),Nl[i]=ss.domElement.toDataURL(),Aa.remove(t),Nl[i]}function ob(){let i=document.createElement("canvas");i.className="spin3d";let e=new _i({canvas:i,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(2,devicePixelRatio||1)),e.toneMapping=ei;let t=new An;Vl(t,e);let n=new Xt(30,4/3,.1,800),s=null,r=0,a=0,o=0;function l(){let d=i.parentElement;if(!d)return;let u=d.clientWidth,f=d.clientHeight;!u||!f||(i._w!==u||i._h!==f)&&(i._w=u,i._h=f,e.setSize(u,f,!1),n.aspect=u/f,n.updateProjectionMatrix())}function c(d){if(r=requestAnimationFrame(c),!i.isConnected||!s)return;let u=o?Math.min(.05,(d-o)/1e3):0;o=d,a+=u*.5,s.rotation.y=Math.sin(a)*.55,s.userData.anim&&s.userData.anim(d/1e3),l(),e.render(t,n)}return{canvas:i,show(d){let u=Xl.find(m=>m.id===d);if(s&&t.remove(s),s=null,!u)return;let{g:f,r:p}=Gl(u.fn,u.pose);s=f,t.add(f),a=0,n.position.set(0,p*.25,p*3.7),n.lookAt(0,0,0),r||(r=requestAnimationFrame(c))},stop(){cancelAnimationFrame(r),r=0,o=0}}}return $f(lb);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
