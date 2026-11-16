var WS=(()=>{var Al=Object.defineProperty;var Cd=Object.getOwnPropertyDescriptor;var Pd=Object.getOwnPropertyNames;var Id=Object.prototype.hasOwnProperty;var Dd=(i,t)=>{for(var e in t)Al(i,e,{get:t[e],enumerable:!0})},Ld=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Pd(t))!Id.call(i,s)&&s!==e&&Al(i,s,{get:()=>t[s],enumerable:!(n=Cd(t,s))||n.enumerable});return i};var Nd=i=>Ld(Al({},"__esModule",{value:!0}),i);var Px={};Dd(Px,{mount:()=>Rx});var Yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vh=0,cc=1,Wh=2;var na=1,Co=2,Zs=3,Ji=0,Mn=1,Zn=2,hs=0,Js=1,hc=2,uc=3,dc=4,Xh=5;var us=100,qh=101,Yh=102,Zh=103,Jh=104,Kh=200,$h=201,jh=202,Qh=203,fc=204,pc=205,tu=206,eu=207,nu=208,iu=209,su=210,ru=211,au=212,ou=213,lu=214,Ka=0,$a=1,ja=2,Ns=3,Qa=4,to=5,eo=6,no=7,Po=0,cu=1,hu=2,gi=0,mc=1,gc=2,_c=3,xc=4,yc=5,vc=6,Ks=7;var Mc=300,ds=301,$s=302,Io=303,Do=304,Hi=1e3,Xn=1001,io=1002,_n=1003,uu=1004;var ia=1005;var An=1006,Lo=1007;var Di=1008;var In=1009,Sc=1010,bc=1011,js=1012,No=1013,ri=1014,Jn=1015,ai=1016,Uo=1017,Fo=1018,fs=1020,wc=35902,Ec=35899,Tc=1021,Ac=1022,oi=1023,Ri=1026,Li=1027,Oo=1028,Bo=1029,Ki=1030,ko=1031;var zo=1033,sa=33776,ra=33777,aa=33778,oa=33779,Ho=35840,Go=35841,Vo=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,Jo=37489,la=37490,Ko=37491,$o=37808,jo=37809,Qo=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,ca=36285,gl=36286;var Mr=2300,so=2301,Za=2302,$l=2303,jl=2400,Ql=2401,tc=2402;var du=3200;var ha=0,fu=1,Ni="",hn="srgb",Sr="srgb-linear",br="linear",Ze="srgb";var Ja=7680;var pu=519,mu=512,gu=513,_u=514,Rc=515,xu=516,yu=517,Cc=518,Pc=519,vu=35044;var Ic="300 es",qn=2e3,Us=2001;function Ud(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){let i=wr("canvas");return i.style.display="block",i}var ch={},Fs=null;function Dc(...i){let t="THREE."+i.shift();Fs?Fs("log",t,...i):console.log(t,...i)}function Su(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ge(...i){i=Su(i);let t="THREE."+i.shift();if(Fs)Fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function _e(...i){i=Su(i);let t="THREE."+i.shift();if(Fs)Fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function gr(...i){let t=i.join(" ");t in ch||(ch[t]=!0,ge(...i))}function bu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wu={[Ka]:Ka,[ja]:eo,[Qa]:Qa,[Ns]:to,[$a]:$a,[eo]:ja,[no]:no,[to]:Ns},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hh=1234567,_r=Math.PI/180,Os=180/Math.PI;function ps(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function Ce(i,t,e){return Math.max(t,Math.min(e,i))}function Lc(i,t){return(i%t+t)%t}function Od(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Bd(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function kd(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function zd(i,t=1){return t-Math.abs(Lc(i,t*2)-t)}function Hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Vd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wd(i,t){return i+Math.random()*(t-i)}function Xd(i){return i*(.5-Math.random())}function qd(i){i!==void 0&&(hh=i);let t=hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yd(i){return i*_r}function Zd(i){return i*Os}function Jd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $d(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Uc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Eu(i,t){if(t.constructor===Float32Array)return i;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Tu(i,t){if(t.constructor===Float32Array)return i;let e=Uc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Fc={DEG2RAD:_r,RAD2DEG:Os,generateUUID:ps,clamp:Ce,euclideanModulo:Lc,mapLinear:Od,inverseLerp:Bd,lerp:xr,damp:kd,pingpong:zd,smoothstep:Hd,smootherstep:Gd,randInt:Vd,randFloat:Wd,randFloatSpread:Xd,seededRandom:qd,degToRad:Yd,radToDeg:Zd,isPowerOfTwo:Jd,ceilPowerOfTwo:Kd,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:$d,normalize:Tu,denormalize:Eu},gt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},en=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(u!==y||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*y;m<0&&(f=-f,d=-d,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);p=Math.sin(p*b)/E,o=Math.sin(o*b)/E,l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+y*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+g*o,u=u*p+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new F,uh=new en,ve=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],b=s[1],E=s[4],M=s[7],R=s[2],A=s[5],_=s[8];return r[0]=a*y+o*b+l*R,r[3]=a*m+o*E+l*A,r[6]=a*p+o*M+l*_,r[1]=c*y+h*b+u*R,r[4]=c*m+h*E+u*A,r[7]=c*p+h*M+u*_,r[2]=f*y+d*b+g*R,r[5]=f*m+d*E+g*A,r[8]=f*p+d*M+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=f*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cl=new ve,dh=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jd(){let i={enabled:!0,workingColorSpace:Sr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(s.r=Ai(s.r),s.g=Ai(s.g),s.b=Ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:t,whitePoint:n,transfer:Ze,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}var Be=jd();function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ys,ro=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ys===void 0&&(ys=wr("canvas")),ys.width=t.width,ys.height=t.height;let s=ys.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ys}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qd=0,Bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=ps(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pl(s[a].image)):r.push(Pl(s[a]))}else r=Pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ge("Texture: Unable to serialize Texture."),{})}var tf=0,Il=new F,Rn=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Xn,s=Xn,r=An,a=Di,o=oi,l=In,c=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=ps(),this.name="",this.source=new Bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){ge(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ge(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hi:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hi:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Mc;Rn.DEFAULT_ANISOTROPY=1;var je=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(d+1)/2,R=(p+1)/2,A=(h+f)/4,_=(u+y)/4,w=(g+m)/4;return E>M&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=_/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=w/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=w/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-y)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this.w=Ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this.w=Ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ao=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new je(0,0,t,e),this.scissorTest=!1,this.viewport=new je(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oo=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var We=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),a=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,y=c*u;e[0]=f-y*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,g=o*h,y=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*u,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-y*u}else if(t.order==="XZY"){let f=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+y,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ef,t,nf)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Ui.crossVectors(n,Un),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Ui.crossVectors(n,Un)),Ui.normalize(),ba.crossVectors(Un,Ui),s[0]=Ui.x,s[4]=ba.x,s[8]=Un.x,s[1]=Ui.y,s[5]=ba.y,s[9]=Un.y,s[2]=Ui.z,s[6]=ba.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],b=n[3],E=n[7],M=n[11],R=n[15],A=s[0],_=s[4],w=s[8],V=s[12],L=s[1],H=s[5],J=s[9],j=s[13],P=s[2],tt=s[6],G=s[10],X=s[14],ct=s[3],it=s[7],ht=s[11],ft=s[15];return r[0]=a*A+o*L+l*P+c*ct,r[4]=a*_+o*H+l*tt+c*it,r[8]=a*w+o*J+l*G+c*ht,r[12]=a*V+o*j+l*X+c*ft,r[1]=h*A+u*L+f*P+d*ct,r[5]=h*_+u*H+f*tt+d*it,r[9]=h*w+u*J+f*G+d*ht,r[13]=h*V+u*j+f*X+d*ft,r[2]=g*A+y*L+m*P+p*ct,r[6]=g*_+y*H+m*tt+p*it,r[10]=g*w+y*J+m*G+p*ht,r[14]=g*V+y*j+m*X+p*ft,r[3]=b*A+E*L+M*P+R*ct,r[7]=b*_+E*H+M*tt+R*it,r[11]=b*w+E*J+M*G+R*ht,r[15]=b*V+E*j+M*X+R*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],b=l*d-c*f,E=o*d-c*u,M=o*f-l*u,R=a*d-c*h,A=a*f-l*h,_=a*u-o*h;return e*(y*b-m*E+p*M)-n*(g*b-m*R+p*A)+s*(g*E-y*R+p*_)-r*(g*M-y*A+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],b=e*o-n*a,E=e*l-s*a,M=e*c-r*a,R=n*l-s*o,A=n*c-r*o,_=s*c-r*l,w=h*y-u*g,V=h*m-f*g,L=h*p-d*g,H=u*m-f*y,J=u*p-d*y,j=f*p-d*m,P=b*j-E*J+M*H+R*L-A*V+_*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let tt=1/P;return t[0]=(o*j-l*J+c*H)*tt,t[1]=(s*J-n*j-r*H)*tt,t[2]=(y*_-m*A+p*R)*tt,t[3]=(f*A-u*_-d*R)*tt,t[4]=(l*L-a*j-c*V)*tt,t[5]=(e*j-s*L+r*V)*tt,t[6]=(m*M-g*_-p*E)*tt,t[7]=(h*_-f*M+d*E)*tt,t[8]=(a*J-o*L+c*w)*tt,t[9]=(n*L-e*J-r*w)*tt,t[10]=(g*A-y*M+p*b)*tt,t[11]=(u*M-h*A-d*b)*tt,t[12]=(o*V-a*H-l*w)*tt,t[13]=(e*H-n*V+s*w)*tt,t[14]=(y*E-g*R-m*b)*tt,t[15]=(h*R-u*E+f*b)*tt,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,y=a*h,m=a*u,p=o*u,b=l*c,E=l*h,M=l*u,R=n.x,A=n.y,_=n.z;return s[0]=(1-(y+p))*R,s[1]=(d+M)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(f+p))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+E)*_,s[9]=(m-b)*_,s[10]=(1-(f+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=vs.set(s[0],s[1],s[2]).length(),o=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Qn.copy(this);let c=1/a,h=1/o,u=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=qn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===qn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Us)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=qn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===qn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Us)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},vs=new F,Qn=new We,ef=new F(0,0,0),nf=new F(1,1,1),Ui=new F,ba=new F,Un=new F,ph=new We,mh=new en,Yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sf=0,gh=new F,Ms=new en,Si=new We,wa=new F,cr=new F,rf=new F,af=new en,_h=new F(1,0,0),xh=new F(0,1,0),yh=new F(0,0,1),vh={type:"added"},of={type:"removed"},Ss={type:"childadded",child:null},Dl={type:"childremoved",child:null},rn=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new Yn,n=new en,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new ve}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(cr,wa,this.up):Si.lookAt(wa,cr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),Ms.setFromRotationMatrix(Si),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(_e("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):_e("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(of),Dl.child=t,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};rn.DEFAULT_UP=new F(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fe=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},lf={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Ll(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Me=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Be.workingColorSpace){return this.r=t,this.g=e,this.b=n,Be.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Be.workingColorSpace){if(t=Lc(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ll(a,r,t+1/3),this.g=Ll(a,r,t),this.b=Ll(a,r,t-1/3)}return Be.colorSpaceToWorking(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&ge("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ge("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ge("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){let n=Au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):ge("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Be.workingToColorSpace(bn.copy(this),t),Math.round(Ce(bn.r*255,0,255))*65536+Math.round(Ce(bn.g*255,0,255))*256+Math.round(Ce(bn.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Be.workingColorSpace){Be.workingToColorSpace(bn.copy(this),e);let n=bn.r,s=bn.g,r=bn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Be.workingColorSpace){return Be.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=hn){Be.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,s=bn.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fi),this.setHSL(Fi.h+t,Fi.s+e,Fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fi),t.getHSL(Ea);let n=xr(Fi.h,Ea.h,e),s=xr(Fi.s,Ea.s,e),r=xr(Fi.l,Ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Me;Me.NAMES=Au;var Ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gi=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ti=new F,bi=new F,Nl=new F,wi=new F,bs=new F,ws=new F,Mh=new F,Ul=new F,Fl=new F,Ol=new F,Bl=new je,kl=new je,zl=new je,zi=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ti.subVectors(t,e),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ti.subVectors(s,e),bi.subVectors(n,e),Nl.subVectors(t,e);let a=ti.dot(ti),o=ti.dot(bi),l=ti.dot(Nl),c=bi.dot(bi),h=bi.dot(Nl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Bl.setScalar(0),kl.setScalar(0),zl.setScalar(0),Bl.fromBufferAttribute(t,e),kl.fromBufferAttribute(t,n),zl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Bl,r.x),a.addScaledVector(kl,r.y),a.addScaledVector(zl,r.z),a}static isFrontFacing(t,e,n,s){return ti.subVectors(n,e),bi.subVectors(t,e),ti.cross(bi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ti.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;bs.subVectors(s,n),ws.subVectors(r,n),Ul.subVectors(t,n);let l=bs.dot(Ul),c=ws.dot(Ul);if(l<=0&&c<=0)return e.copy(n);Fl.subVectors(t,s);let h=bs.dot(Fl),u=ws.dot(Fl);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(bs,a);Ol.subVectors(t,r);let d=bs.dot(Ol),g=ws.dot(Ol);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ws,o);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Mh.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Mh,o);let p=1/(m+y+f);return a=y*p,o=f*p,e.copy(n).addScaledVector(bs,a).addScaledVector(ws,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ei):ei.fromBufferAttribute(r,a),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(t.matrixWorld),this.union(Ta)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),Aa.subVectors(this.max,hr),Es.subVectors(t.a,hr),Ts.subVectors(t.b,hr),As.subVectors(t.c,hr),Oi.subVectors(Ts,Es),Bi.subVectors(As,Ts),ts.subVectors(Es,As);let e=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ts.z,ts.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ts.z,0,-ts.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ts.y,ts.x,0];return!Hl(e,Es,Ts,As,Aa)||(e=[1,0,0,0,1,0,0,0,1],!Hl(e,Es,Ts,As,Aa))?!1:(Ra.crossVectors(Oi,Bi),e=[Ra.x,Ra.y,Ra.z],Hl(e,Es,Ts,As,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ei=[new F,new F,new F,new F,new F,new F,new F,new F],ei=new F,Ta=new Cn,Es=new F,Ts=new F,As=new F,Oi=new F,Bi=new F,ts=new F,hr=new F,Aa=new F,Ra=new F,es=new F;function Hl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){es.fromArray(i,r);let o=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),h=n.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ln=new F,Ca=new gt,cf=0,Bn=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vu,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=t!==void 0?Uc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Eu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Tu(t,this.array)}};var Rr=class extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xe=class extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}},hf=new Cn,ur=new F,Gl=new F,Ci=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);let e=ur.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(Gl)),this.expandByPoint(ur.copy(t.center).sub(Gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},uf=0,Wn=new We,Vl=new rn,Rs=new F,Fn=new Cn,dr=new Cn,gn=new F,cn=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ve().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){_e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Fn.min,dr.min),Fn.expandByPoint(gn),gn.addVectors(Fn.max,dr.max),Fn.expandByPoint(gn)):(Fn.expandByPoint(dr.min),Fn.expandByPoint(dr.max))}Fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)gn.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(t,c),gn.add(Rs)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){_e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Bn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let V=0;V<n.count;V++)o[V]=new F,l[V]=new F;let h=new F,u=new F,f=new F,d=new gt,g=new gt,y=new gt,m=new F,p=new F;function b(V,L,H){c[V]=c[L]=c[H]=1,h.fromBufferAttribute(n,V),u.fromBufferAttribute(n,L),f.fromBufferAttribute(n,H),d.fromBufferAttribute(r,V),g.fromBufferAttribute(r,L),y.fromBufferAttribute(r,H),u.sub(h),f.sub(h),g.sub(d),y.sub(d);let J=1/(g.x*y.y-y.x*g.y);isFinite(J)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(J),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(J),o[V].add(m),o[L].add(m),o[H].add(m),l[V].add(p),l[L].add(p),l[H].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let V=0,L=E.length;V<L;++V){let H=E[V],J=H.start,j=H.count;for(let P=J,tt=J+j;P<tt;P+=3)b(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let M=new F,R=new F,A=new F,_=new F;function w(V){A.fromBufferAttribute(s,V),_.copy(A);let L=o[V];M.copy(L),M.sub(A.multiplyScalar(A.dot(L))).normalize(),R.crossVectors(_,L);let J=R.dot(l[V])<0?-1:1;a.setXYZW(V,M.x,M.y,M.z,J)}for(let V=0,L=n.count;V<L;++V)c[V]&&w(V);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Bn(f,h,u)}if(this.index===null)return ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wl=new F,df=new F,ff=new ve,On=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Wl.subVectors(n,e).cross(df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Wl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ff.getNormalMatrix(t),s=this.coplanarPoint(Wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pf=0,ii=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=Js,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){ge(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ge(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new On().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ti=new F,Xl=new F,Pa=new F,Ia=new F,ss=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xl.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Ia.copy(this.origin).sub(Xl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pa),o=Ia.dot(this.direction),l=-Ia.dot(Pa),c=Ia.lengthSq(),h=Math.abs(1-a*a),u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let y=1/h;u*=y,f*=y,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xl).addScaledVector(Pa,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ti.subVectors(t.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=n.x-a.x,b=n.y-a.y,E=n.z-a.z,M=Math.abs(l),R=Math.abs(c),A=Math.abs(h),_,w,V,L,H,J,j,P,tt,G,X,ct;if(M>=R&&M>=A?(V=l,J=u,tt=g,ct=p,l>=0?(_=c,w=h,L=f,H=d,j=y,P=m,G=b,X=E):(_=h,w=c,L=d,H=f,j=m,P=y,G=E,X=b)):R>=A?(V=c,J=f,tt=y,ct=b,c>=0?(_=h,w=l,L=d,H=u,j=m,P=g,G=E,X=p):(_=l,w=h,L=u,H=d,j=g,P=m,G=p,X=E)):(V=h,J=d,tt=m,ct=E,h>=0?(_=l,w=c,L=u,H=f,j=g,P=y,G=p,X=b):(_=c,w=l,L=f,H=u,j=y,P=g,G=b,X=p)),V===0)return null;let it=_/V,ht=w/V,ft=1/V,Ht=L-it*J,ae=H-ht*J,st=j-it*tt,pt=P-ht*tt,mt=G-it*ct,Ot=X-ht*ct,kt=mt*pt-Ot*st,$t=Ht*Ot-ae*mt,Ne=st*ae-pt*Ht;if(s){if(kt<0||$t<0||Ne<0)return null}else if((kt<0||$t<0||Ne<0)&&(kt>0||$t>0||Ne>0))return null;let ue=kt+$t+Ne;if(ue===0)return null;let Se=ft*(kt*J+$t*tt+Ne*ct);return(ue>0?Se<0:Se>0)?null:this.at(Se/ue,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pi=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Sh=new We,ns=new ss,Da=new Ci,bh=new F,La=new F,Na=new F,Ua=new F,ql=new F,Fa=new F,wh=new F,Oa=new F,qt=class extends rn{constructor(t=new cn,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(ql.fromBufferAttribute(u,t),a?Fa.addScaledVector(ql,h):Fa.addScaledVector(ql.sub(e),h))}e.add(Fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Da.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Da,bh)===null||ns.origin.distanceToSquared(bh)>(t.far-t.near)**2))&&(Sh.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,R=E;M<R;M+=3){let A=o.getX(M),_=o.getX(M+1),w=o.getX(M+2);s=Ba(this,p,t,n,c,h,u,A,_,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let b=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=Ba(this,a,t,n,c,h,u,b,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,R=E;M<R;M+=3){let A=M,_=M+1,w=M+2;s=Ba(this,p,t,n,c,h,u,A,_,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let b=m,E=m+1,M=m+2;s=Ba(this,a,t,n,c,h,u,b,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function mf(i,t,e,n,s,r,a,o){let l;if(t.side===Mn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ji,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:i}}function Ba(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,La),i.getVertexPosition(l,Na),i.getVertexPosition(c,Ua);let h=mf(i,t,e,n,La,Na,Ua,wh);if(h){let u=new F;zi.getBarycoord(wh,La,Na,Ua,u),s&&(h.uv=zi.getInterpolatedAttribute(s,o,l,c,u,new gt)),r&&(h.uv1=zi.getInterpolatedAttribute(r,o,l,c,u,new gt)),a&&(h.normal=zi.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};zi.getNormal(La,Na,Ua,f.normal),h.face=f,h.barycoord=u}return h}var Pr=class extends Rn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=_n,h=_n,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ir=class extends Bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cs=new We,Eh=new We,ka=[],Th=new Cn,gf=new We,fr=new qt,pr=new Ci,rs=class extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),Th.copy(t.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Th)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cs),pr.copy(t.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(pr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),t.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Eh.multiplyMatrices(n,Cs),fr.matrixWorld=Eh,fr.raycast(t,ka);for(let a=0,o=ka.length;a<o;a++){let l=ka[a];l.instanceId=r,l.object=this,e.push(l)}ka.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pr(new Float32Array(s*this.count),s,this.count,Oo,Jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},is=new Ci,_f=new gt(.5,.5),za=new F,Vi=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,a=new On){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],b=r[12],E=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-a,d-h,p-g,R-b).normalize(),s[1].setComponents(c+a,d+h,p+g,R+b).normalize(),s[2].setComponents(c+o,d+u,p+y,R+E).normalize(),s[3].setComponents(c-o,d-u,p-y,R-E).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,d-f,p-m,R-M).normalize();else if(s[4].setComponents(c-l,d-f,p-m,R-M).normalize(),e===qn)s[5].setComponents(c+l,d+f,p+m,R+M).normalize();else if(e===Us)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);let e=_f.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(za.x=s.normal.x>0?t.max.x:t.min.x,za.y=s.normal.y>0?t.max.y:t.min.y,za.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ah=new We,lo=class i{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ah.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Vi),n[s].setFromProjectionMatrix(Ah,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Vi),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var zs=class extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rh=new We,ec=new ss,Ha=new Ci,Ga=new F,Dr=class extends rn{constructor(t=new cn,e=new zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,t.ray.intersectsSphere(Ha)===!1)return;Rh.copy(s).invert(),ec.copy(t.ray).applyMatrix4(Rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,y=d;g<y;g++){let m=c.getX(g);Ga.fromBufferAttribute(u,m),Ch(Ga,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let g=f,y=d;g<y;g++)Ga.fromBufferAttribute(u,g),Ch(Ga,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ch(i,t,e,n,s,r,a){let o=ec.distanceSqToPoint(i);if(o<e){let l=new F;ec.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Lr=class extends Rn{constructor(t=[],e=ds,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fi=class extends Rn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ii=class extends Rn{constructor(t,e,n=ri,s,r,a,o=_n,l=_n,c,h=Ri,u=1){if(h!==Ri&&h!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Nr=class extends Ii{constructor(t,e=ri,n=ds,s,r,a=_n,o=_n,l,c=Ri){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ur=class extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Je=class i extends cn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function g(y,m,p,b,E,M,R,A,_,w,V){let L=M/_,H=R/w,J=M/2,j=R/2,P=A/2,tt=_+1,G=w+1,X=0,ct=0,it=new F;for(let ht=0;ht<G;ht++){let ft=ht*H-j;for(let Ht=0;Ht<tt;Ht++){let ae=Ht*L-J;it[y]=ae*b,it[m]=ft*E,it[p]=P,c.push(it.x,it.y,it.z),it[y]=0,it[m]=0,it[p]=A>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ht/_),u.push(1-ht/w),X+=1}}for(let ht=0;ht<w;ht++)for(let ft=0;ft<_;ft++){let Ht=f+ft+tt*ht,ae=f+ft+tt*(ht+1),st=f+(ft+1)+tt*(ht+1),pt=f+(ft+1)+tt*ht;l.push(Ht,ae,pt),l.push(ae,st,pt),ct+=6}o.addGroup(d,ct,V),d+=ct,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var un=class i extends cn{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,y=[],m=n/2,p=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(d,2));function b(){let M=new F,R=new F,A=0,_=(e-t)/n;for(let w=0;w<=r;w++){let V=[],L=w/r,H=L*(e-t)+t;for(let J=0;J<=s;J++){let j=J/s,P=j*l+o,tt=Math.sin(P),G=Math.cos(P);R.x=H*tt,R.y=-L*n+m,R.z=H*G,u.push(R.x,R.y,R.z),M.set(tt,_,G).normalize(),f.push(M.x,M.y,M.z),d.push(j,1-L),V.push(g++)}y.push(V)}for(let w=0;w<s;w++)for(let V=0;V<r;V++){let L=y[V][w],H=y[V+1][w],J=y[V+1][w+1],j=y[V][w+1];(t>0||V!==0)&&(h.push(L,H,j),A+=3),(e>0||V!==r-1)&&(h.push(H,J,j),A+=3)}c.addGroup(p,A,0),p+=A}function E(M){let R=g,A=new gt,_=new F,w=0,V=M===!0?t:e,L=M===!0?1:-1;for(let J=1;J<=s;J++)u.push(0,m*L,0),f.push(0,L,0),d.push(.5,.5),g++;let H=g;for(let J=0;J<=s;J++){let P=J/s*l+o,tt=Math.cos(P),G=Math.sin(P);_.x=V*G,_.y=m*L,_.z=V*tt,u.push(_.x,_.y,_.z),f.push(0,L,0),A.x=tt*.5+.5,A.y=G*.5*L+.5,d.push(A.x,A.y),g++}for(let J=0;J<s;J++){let j=R+J,P=H+J;M===!0?h.push(P,P+1,j):h.push(P+1,P,j),w+=3}c.addGroup(p,w,M===!0?1:2),p+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hs=class i extends un{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ge("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new gt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new We;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ce(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ce(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Gs=class extends zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new gt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},co=class extends Gs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Ph=new F,Ih=new F,Yl=new Oc,Zl=new Oc,Jl=new Oc,as=class extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Ih.subVectors(s[0],s[1]).add(s[0]),c=Ih);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ph.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ph),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),y=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Yl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,y,m),Zl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,y,m),Jl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Yl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Zl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Jl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Yl.calc(l),Zl.calc(l),Jl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Dh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function xf(i,t){let e=1-i;return e*e*t}function yf(i,t){return 2*(1-i)*i*t}function vf(i,t){return i*i*t}function yr(i,t,e,n){return xf(i,t)+yf(i,e)+vf(i,n)}function Mf(i,t){let e=1-i;return e*e*e*t}function Sf(i,t){let e=1-i;return 3*e*e*i*t}function bf(i,t){return 3*(1-i)*i*i*t}function wf(i,t){return i*i*i*t}function vr(i,t,e,n,s){return Mf(i,t)+Sf(i,e)+bf(i,n)+wf(i,s)}var Fr=class extends zn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ho=class extends zn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,s.x,r.x,a.x,o.x),vr(t,s.y,r.y,a.y,o.y),vr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Or=class extends zn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends zn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends zn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends zn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(yr(t,s.x,r.x,a.x),yr(t,s.y,r.y,a.y),yr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Dh(o,l.x,c.x,h.x,u.x),Dh(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new gt().fromArray(s))}return this}},fo=Object.freeze({__proto__:null,ArcCurve:co,CatmullRomCurve3:as,CubicBezierCurve:Fr,CubicBezierCurve3:ho,EllipseCurve:Gs,LineCurve:Or,LineCurve3:uo,QuadraticBezierCurve:Br,QuadraticBezierCurve3:kr,SplineCurve:zr}),po=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new fo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},si=class extends po{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Or(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Br(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Fr(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Gs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vn=class extends si{constructor(t){super(t),this.uuid=ps(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new si().fromJSON(s))}return this}};function Ef(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ru(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Pf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Hr(r,a,e,o,l,c,0),a}function Ru(i,t,e,n,s){let r;if(s===Hf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Lh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Lh(a/n|0,i[a],i[a+1],r);return r&&Vs(r,r.next)&&(Vr(r),r=r.next),r}function os(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Vs(e,e.next)||tn(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Uf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Af(i,n,s,r):Tf(i)){t.push(l.i,i.i,c.i),Vr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Rf(os(i),t),Hr(i,t,e,n,s,r,2)):a===2&&Cf(i,t,e,n,s,r):Hr(os(i),t,e,n,s,r,1);break}}}function Tf(i){let t=i.prev,e=i,n=i.next;if(tn(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&mr(s,o,r,l,a,c,g.x,g.y)&&tn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Af(i,t,e,n){let s=i.prev,r=i,a=i.next;if(tn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),g=Math.min(h,u,f),y=Math.max(o,l,c),m=Math.max(h,u,f),p=nc(d,g,t,e,n),b=nc(y,m,t,e,n),E=i.prevZ,M=i.nextZ;for(;E&&E.z>=p&&M&&M.z<=b;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&mr(o,h,l,u,c,f,E.x,E.y)&&tn(E.prev,E,E.next)>=0||(E=E.prevZ,M.x>=d&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&mr(o,h,l,u,c,f,M.x,M.y)&&tn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&mr(o,h,l,u,c,f,E.x,E.y)&&tn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=y&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&mr(o,h,l,u,c,f,M.x,M.y)&&tn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Rf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Vs(n,s)&&Pu(n,e,e.next,s)&&Gr(n,s)&&Gr(s,n)&&(t.push(n.i,e.i,s.i),Vr(e),Vr(e.next),e=i=s),e=e.next}while(e!==i);return os(e)}function Cf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Bf(a,o)){let l=Iu(a,o);a=os(a,a.next),l=os(l,l.next),Hr(a,t,e,n,s,r,0),Hr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Pf(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Ru(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Of(c))}s.sort(If);for(let r=0;r<s.length;r++)e=Df(s[r],e);return e}function If(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Df(i,t){let e=Lf(i,t);if(!e)return t;let n=Iu(e,i);return os(n,n.next),os(e,e.next)}function Lf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Vs(i,e))return e;do{if(Vs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Cu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Gr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Nf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Nf(i,t){return tn(i.prev,i,t.prev)<0&&tn(t.next,i,i.next)<0}function Uf(i,t,e,n){let s=i;do s.z===0&&(s.z=nc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ff(s)}function Ff(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function nc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Of(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function mr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Cu(i,t,e,n,s,r,a,o)}function Bf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!kf(i,t)&&(Gr(i,t)&&Gr(t,i)&&zf(i,t)&&(tn(i.prev,i,t.prev)||tn(i,t.prev,t))||Vs(i,t)&&tn(i.prev,i,i.next)>0&&tn(t.prev,t,t.next)>0)}function tn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Vs(i,t){return i.x===t.x&&i.y===t.y}function Pu(i,t,e,n){let s=Wa(tn(i,t,e)),r=Wa(tn(i,t,n)),a=Wa(tn(e,n,i)),o=Wa(tn(e,n,t));return!!(s!==r&&a!==o||s===0&&Va(i,e,t)||r===0&&Va(i,n,t)||a===0&&Va(e,i,n)||o===0&&Va(e,t,n))}function Va(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wa(i){return i>0?1:i<0?-1:0}function kf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gr(i,t){return tn(i.prev,i,i.next)<0?tn(i,t,i.next)>=0&&tn(i,i.prev,t)>=0:tn(i,t,i.prev)<0||tn(i,i.next,t)<0}function zf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Iu(i,t){let e=ic(i.i,i.x,i.y),n=ic(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lh(i,t,e,n){let s=ic(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ic(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var sc=class{static triangulate(t,e,n=2){return Ef(t,e,n)}},di=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Nh(t),Uh(n,t);let a=t.length;e.forEach(Nh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Uh(n,e[l]);let o=sc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var pi=class i extends cn{constructor(t=new vn([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Gf,E,M=!1,R,A,_,w;if(p){E=p.getSpacedPoints(h),M=!0,f=!1;let ut=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(h,ut),A=new F,_=new F,w=new F}f||(m=0,d=0,g=0,y=0);let V=o.extractPoints(c),L=V.shape,H=V.holes;if(!di.isClockWise(L)){L=L.reverse();for(let ut=0,Lt=H.length;ut<Lt;ut++){let It=H[ut];di.isClockWise(It)&&(H[ut]=It.reverse())}}function j(ut){let It=10000000000000001e-36,Xt=ut[0];for(let zt=1;zt<=ut.length;zt++){let me=zt%ut.length,te=ut[me],be=te.x-Xt.x,De=te.y-Xt.y,Pe=be*be+De*De,k=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(Xt.x),Math.abs(Xt.y)),Qe=It*k*k;if(Pe<=Qe){ut.splice(me,1),zt--;continue}Xt=te}}j(L),H.forEach(j);let P=H.length,tt=L;for(let ut=0;ut<P;ut++){let Lt=H[ut];L=L.concat(Lt)}function G(ut,Lt,It){return Lt||_e("ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(Lt,It)}let X=L.length;function ct(ut,Lt,It){let Xt,zt,me,te=ut.x-Lt.x,be=ut.y-Lt.y,De=It.x-ut.x,Pe=It.y-ut.y,k=te*te+be*be,Qe=te*Pe-be*De;if(Math.abs(Qe)>Number.EPSILON){let Ee=Math.sqrt(k),He=Math.sqrt(De*De+Pe*Pe),Nt=Lt.x-be/Ee,Ke=Lt.y+te/Ee,he=It.x-Pe/He,ne=It.y+De/He,T=((he-Nt)*Pe-(ne-Ke)*De)/(te*Pe-be*De);Xt=Nt+te*T-ut.x,zt=Ke+be*T-ut.y;let v=Xt*Xt+zt*zt;if(v<=2)return new gt(Xt,zt);me=Math.sqrt(v/2)}else{let Ee=!1;te>Number.EPSILON?De>Number.EPSILON&&(Ee=!0):te<-Number.EPSILON?De<-Number.EPSILON&&(Ee=!0):Math.sign(be)===Math.sign(Pe)&&(Ee=!0),Ee?(Xt=-be,zt=te,me=Math.sqrt(k)):(Xt=te,zt=be,me=Math.sqrt(k/2))}return new gt(Xt/me,zt/me)}let it=[];for(let ut=0,Lt=tt.length,It=Lt-1,Xt=ut+1;ut<Lt;ut++,It++,Xt++)It===Lt&&(It=0),Xt===Lt&&(Xt=0),it[ut]=ct(tt[ut],tt[It],tt[Xt]);let ht=[],ft,Ht=it.concat();for(let ut=0,Lt=P;ut<Lt;ut++){let It=H[ut];ft=[];for(let Xt=0,zt=It.length,me=zt-1,te=Xt+1;Xt<zt;Xt++,me++,te++)me===zt&&(me=0),te===zt&&(te=0),ft[Xt]=ct(It[Xt],It[me],It[te]);ht.push(ft),Ht=Ht.concat(ft)}let ae;if(m===0)ae=di.triangulateShape(tt,H);else{let ut=[],Lt=[];for(let It=0;It<m;It++){let Xt=It/m,zt=d*Math.cos(Xt*Math.PI/2),me=g*Math.sin(Xt*Math.PI/2)+y;for(let te=0,be=tt.length;te<be;te++){let De=G(tt[te],it[te],me);$t(De.x,De.y,-zt),Xt===0&&ut.push(De)}for(let te=0,be=P;te<be;te++){let De=H[te];ft=ht[te];let Pe=[];for(let k=0,Qe=De.length;k<Qe;k++){let Ee=G(De[k],ft[k],me);$t(Ee.x,Ee.y,-zt),Xt===0&&Pe.push(Ee)}Xt===0&&Lt.push(Pe)}}ae=di.triangulateShape(ut,Lt)}let st=ae.length,pt=g+y;for(let ut=0;ut<X;ut++){let Lt=f?G(L[ut],Ht[ut],pt):L[ut];M?(_.copy(R.normals[0]).multiplyScalar(Lt.x),A.copy(R.binormals[0]).multiplyScalar(Lt.y),w.copy(E[0]).add(_).add(A),$t(w.x,w.y,w.z)):$t(Lt.x,Lt.y,0)}for(let ut=1;ut<=h;ut++)for(let Lt=0;Lt<X;Lt++){let It=f?G(L[Lt],Ht[Lt],pt):L[Lt];M?(_.copy(R.normals[ut]).multiplyScalar(It.x),A.copy(R.binormals[ut]).multiplyScalar(It.y),w.copy(E[ut]).add(_).add(A),$t(w.x,w.y,w.z)):$t(It.x,It.y,u/h*ut)}for(let ut=m-1;ut>=0;ut--){let Lt=ut/m,It=d*Math.cos(Lt*Math.PI/2),Xt=g*Math.sin(Lt*Math.PI/2)+y;for(let zt=0,me=tt.length;zt<me;zt++){let te=G(tt[zt],it[zt],Xt);$t(te.x,te.y,u+It)}for(let zt=0,me=H.length;zt<me;zt++){let te=H[zt];ft=ht[zt];for(let be=0,De=te.length;be<De;be++){let Pe=G(te[be],ft[be],Xt);M?$t(Pe.x,Pe.y+E[h-1].y,E[h-1].x+It):$t(Pe.x,Pe.y,u+It)}}}mt(),Ot();function mt(){let ut=s.length/3;if(f){let Lt=0,It=X*Lt;for(let Xt=0;Xt<st;Xt++){let zt=ae[Xt];Ne(zt[2]+It,zt[1]+It,zt[0]+It)}Lt=h+m*2,It=X*Lt;for(let Xt=0;Xt<st;Xt++){let zt=ae[Xt];Ne(zt[0]+It,zt[1]+It,zt[2]+It)}}else{for(let Lt=0;Lt<st;Lt++){let It=ae[Lt];Ne(It[2],It[1],It[0])}for(let Lt=0;Lt<st;Lt++){let It=ae[Lt];Ne(It[0]+X*h,It[1]+X*h,It[2]+X*h)}}n.addGroup(ut,s.length/3-ut,0)}function Ot(){let ut=s.length/3,Lt=0;kt(tt,Lt),Lt+=tt.length;for(let It=0,Xt=H.length;It<Xt;It++){let zt=H[It];kt(zt,Lt),Lt+=zt.length}n.addGroup(ut,s.length/3-ut,1)}function kt(ut,Lt){let It=ut.length;for(;--It>=0;){let Xt=It,zt=It-1;zt<0&&(zt=ut.length-1);for(let me=0,te=h+m*2;me<te;me++){let be=X*me,De=X*(me+1),Pe=Lt+Xt+be,k=Lt+zt+be,Qe=Lt+zt+De,Ee=Lt+Xt+De;ue(Pe,k,Qe,Ee)}}}function $t(ut,Lt,It){l.push(ut),l.push(Lt),l.push(It)}function Ne(ut,Lt,It){Se(ut),Se(Lt),Se(It);let Xt=s.length/3,zt=b.generateTopUV(n,s,Xt-3,Xt-2,Xt-1);Re(zt[0]),Re(zt[1]),Re(zt[2])}function ue(ut,Lt,It,Xt){Se(ut),Se(Lt),Se(Xt),Se(Lt),Se(It),Se(Xt);let zt=s.length/3,me=b.generateSideWallUV(n,s,zt-6,zt-3,zt-2,zt-1);Re(me[0]),Re(me[1]),Re(me[3]),Re(me[1]),Re(me[2]),Re(me[3])}function Se(ut){s.push(l[ut*3+0]),s.push(l[ut*3+1]),s.push(l[ut*3+2])}function Re(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Vf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fo[s.type]().fromJSON(s)),new i(n,t.options)}},Gf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new gt(r,a),new gt(o,l),new gt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new gt(a,1-l),new gt(c,1-u),new gt(f,1-g),new gt(y,1-p)]:[new gt(o,1-l),new gt(h,1-u),new gt(d,1-g),new gt(m,1-p)]}};function Vf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ls=class i extends cn{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ce(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new F,f=new gt,d=new F,g=new F,y=new F,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(g)}for(let b=0;b<=e;b++){let E=n+b*h*s,M=Math.sin(E),R=Math.cos(E);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*R,a.push(u.x,u.y,u.z),f.x=b/e,f.y=A/(t.length-1),o.push(f.x,f.y);let _=l[3*A+0]*M,w=l[3*A+1],V=l[3*A+0]*R;c.push(_,w,V)}}for(let b=0;b<e;b++)for(let E=0;E<t.length-1;E++){let M=E+b*t.length,R=M,A=M+t.length,_=M+t.length+1,w=M+1;r.push(R,A,w),r.push(_,w,A)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var wn=class i extends cn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let b=p*f-a;for(let E=0;E<c;E++){let M=E*u-r;g.push(M,-b,0),y.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let E=b+c*p,M=b+c*(p+1),R=b+1+c*(p+1),A=b+1+c*p;d.push(E,M,A),d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Wr=class i extends cn{constructor(t=new vn([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Xe(s,3)),this.setAttribute("normal",new Xe(r,3)),this.setAttribute("uv",new Xe(a,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;di.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];di.isClockWise(b)===!0&&(g[m]=b.reverse())}let y=di.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];d=d.concat(b)}for(let m=0,p=d.length;m<p;m++){let b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=y.length;m<p;m++){let b=y[m],E=b[0]+u,M=b[1]+u,R=b[2]+u;n.push(E,M,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Wf(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Wf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Hn=class i extends cn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new F,f=new F,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let b=[],E=p/n,M=a+E*o,R=t*Math.cos(M),A=Math.sqrt(t*t-R*R),_=0;p===0&&a===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){let V=w/e,L=s+V*r;u.x=-A*Math.cos(L),u.y=R,u.z=A*Math.sin(L),g.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(V+_,1-E),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let E=h[p][b+1],M=h[p][b],R=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&d.push(E,M,A),(p!==n-1||l<Math.PI)&&d.push(M,R,A)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xr=class i extends cn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new F,d=new F,g=new F;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let b=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(b),d.y=(t+e*Math.cos(m))*Math.sin(b),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(b),f.y=t*Math.sin(b),g.subVectors(d,f).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,b=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(p,b,M),l.push(b,E,M)}this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ws=class i extends cn{constructor(t=new kr(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new gt,h=new F,u=[],f=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(d,2));function y(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),b(),p()}function m(E){h=t.getPointAt(E/e,h);let M=a.normals[E],R=a.binormals[E];for(let A=0;A<=s;A++){let _=A/s*Math.PI*2,w=Math.sin(_),V=-Math.cos(_);l.x=V*M.x+w*R.x,l.y=V*M.y+w*R.y,l.z=V*M.z+w*R.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=e;E++)for(let M=1;M<=s;M++){let R=(s+1)*(E-1)+(M-1),A=(s+1)*E+(M-1),_=(s+1)*E+M,w=(s+1)*(E-1)+M;g.push(R,A,w),g.push(A,_,w)}}function b(){for(let E=0;E<=e;E++)for(let M=0;M<=s;M++)c.x=E/e,c.y=M/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var qr=class extends ii{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Me(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Fh(s))s.isRenderTargetTexture?(ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Fh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function En(i){let t={};for(let e=0;e<i.length;e++){let n=ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Fh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}var Du={clone:ms,merge:En},qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(s.value);break;case"v2":this.uniforms[n].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new je().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m4":this.uniforms[n].value=new We().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mo=class extends mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ct=class extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Yr=class extends ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ha,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Po,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},go=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=du,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_o=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ps(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Xa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jl,endingEnd:jl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ql:r=t,o=2*e-n;break;case tc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ql:a=t,l=2*n-e;break;case tc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,b=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*y+.5*g,M=d*m-d*y;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+b*a[c+R]+E*a[l+R]+M*a[u+R];return r}},yo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},vo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mo=class extends Wi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=d*f+g*2,b=u[p],E=u[p+1],M=t*f+g*2,R=h[M],A=h[M+1],_=Jf(n,e,b,R,s);r[g]=Lu(_,y,E,A,m)}return r}};function Lu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Zf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Jf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Lu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Zf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ps(e,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ps(t.times,Array),values:Ps(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Xa(t.settings)&&(n.settings={inTangents:Ps(t.settings.inTangents,Array),outTangents:Ps(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case so:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break;case $l:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ge("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return $l}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Xa(this.settings)&&(Oh(this.settings.inTangents,t),Oh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Xa(this.settings)&&(Bh(this.settings.inTangents,t),Bh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(_e("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(_e("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){_e("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){_e("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Fd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){_e("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Xa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Oh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Bh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=so;var Xi=class extends Gn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Mr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}};So.prototype.ValueTypeName="color";var bo=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}};bo.prototype.ValueTypeName="number";var wo=class extends Wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)en.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zr=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends Gn{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Mr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Gn{constructor(t,e,n,s){super(t,e,n,s)}};Eo.prototype.ValueTypeName="vector";var To=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nu=new To,Ao=class{constructor(t){this.manager=t!==void 0?t:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";var cs=class extends rn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Jr=class extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Kl=new We,kh=new F,zh=new F,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(kh),zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Kl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Us||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Kl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qa=new F,Ya=new en,ui=new F,$r=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qa,Ya,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,ui.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(qa,Ya,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ki=new F,Hh=new gt,Gh=new gt,yn=class extends $r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ki.x,ki.y).multiplyScalar(-t/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-t/ki.z)}getViewSize(t,e){return this.getViewBounds(t,Hh,Gh),e.subVectors(Gh,Hh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var rc=class extends Kr{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}},jr=class extends cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new rc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Qr=class extends $r{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ac=class extends Kr{constructor(){super(new Qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new ac}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ta=class extends cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Is=-90,Ds=1,qs=class extends rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new yn(Is,Ds,t,e);s.layers=this.layers,this.add(s);let r=new yn(Is,Ds,t,e);r.layers=this.layers,this.add(r);let a=new yn(Is,Ds,t,e);a.layers=this.layers,this.add(a);let o=new yn(Is,Ds,t,e);o.layers=this.layers,this.add(o);let l=new yn(Is,Ds,t,e);l.layers=this.layers,this.add(l);let c=new yn(Is,Ds,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ro=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var kc="\\[\\]\\.:\\/",Kf=new RegExp("["+kc+"]","g"),zc="[^"+kc+"]",$f="[^"+kc.replace("\\.","")+"]",jf=/((?:WC+[\/:])*)/.source.replace("WC",zc),Qf=/(WCOD+)?/.source.replace("WCOD",$f),tp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),ep=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),np=new RegExp("^"+jf+Qf+tp+ep+"$"),ip=["material","materials","bones","map"],oc=class{constructor(t,e,n){let s=n||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kf,"")}static parseTrackName(t){let e=np.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ip.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){_e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){_e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){_e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){_e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){_e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){_e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;_e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){_e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=oc;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dx=new Float32Array(1);var Ys=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var lc=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var ea=class extends ni{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Hc(i,t,e,n){let s=sp(n);switch(e){case Tc:return i*t;case Oo:return i*t/s.components*s.byteLength;case Bo:return i*t/s.components*s.byteLength;case Ki:return i*t*2/s.components*s.byteLength;case ko:return i*t*2/s.components*s.byteLength;case Ac:return i*t*3/s.components*s.byteLength;case oi:return i*t*4/s.components*s.byteLength;case zo:return i*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:case Wo:return Math.max(i,16)*Math.max(t,8)/4;case Ho:case Vo:return Math.max(i,8)*Math.max(t,8)/2;case Xo:case qo:case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case la:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ul:case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ca:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sp(i){switch(i){case In:case Sc:return{byteLength:1,components:1};case js:case bc:case ai:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case ri:case No:case Jn:return{byteLength:4,components:1};case wc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function nd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ap(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],y=u[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,u[f]=y)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let y=u[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
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
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
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
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pp=`#define PI 3.141592653589793
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
} // validated`,Ip=`vec3 transformedNormal = objectNormal;
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
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,im=`PhysicalMaterial material;
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
#endif`,sm=`uniform sampler2D dfgLUT;
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
}`,rm=`
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
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
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gm=`#if defined( USE_POINTS_UV )
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
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
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
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xm=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o0=`uniform sampler2D t2D;
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform float backgroundBlurriness;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`#include <common>
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
}`,f0=`#if DEPTH_PACKING == 3200
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
}`,p0=`#define DISTANCE
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
}`,m0=`#define DISTANCE
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
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,y0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
}`,w0=`#define MATCAP
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
}`,E0=`#define MATCAP
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
}`,T0=`#define NORMAL
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
}`,A0=`#define NORMAL
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
}`,R0=`#define PHONG
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
}`,C0=`#define PHONG
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
}`,P0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,D0=`#define TOON
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
}`,L0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,U0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,O0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:op,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:xp,bsdfs:yp,iridescence_fragment:vp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Ep,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Pp,defaultnormal_vertex:Ip,displacementmap_pars_vertex:Dp,displacementmap_vertex:Lp,emissivemap_fragment:Np,emissivemap_pars_fragment:Up,colorspace_fragment:Fp,colorspace_pars_fragment:Op,envmap_fragment:Bp,envmap_common_pars_fragment:kp,envmap_pars_fragment:zp,envmap_pars_vertex:Hp,envmap_physical_pars_fragment:jp,envmap_vertex:Gp,fog_vertex:Vp,fog_pars_vertex:Wp,fog_fragment:Xp,fog_pars_fragment:qp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Kp,lights_pars_begin:$p,lights_toon_fragment:Qp,lights_toon_pars_fragment:tm,lights_phong_fragment:em,lights_phong_pars_fragment:nm,lights_physical_fragment:im,lights_physical_pars_fragment:sm,lights_fragment_begin:rm,lights_fragment_maps:am,lights_fragment_end:om,lightprobes_pars_fragment:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:xm,morphinstance_vertex:ym,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:bm,normal_fragment_begin:wm,normal_fragment_maps:Em,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Lm,opaque_fragment:Nm,packing:Um,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:km,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:$m,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:t0,transmission_pars_fragment:e0,uv_pars_fragment:n0,uv_pars_vertex:i0,uv_vertex:s0,worldpos_vertex:r0,background_vert:a0,background_frag:o0,backgroundCube_vert:l0,backgroundCube_frag:c0,cube_vert:h0,cube_frag:u0,depth_vert:d0,depth_frag:f0,distance_vert:p0,distance_frag:m0,equirect_vert:g0,equirect_frag:_0,linedashed_vert:x0,linedashed_frag:y0,meshbasic_vert:v0,meshbasic_frag:M0,meshlambert_vert:S0,meshlambert_frag:b0,meshmatcap_vert:w0,meshmatcap_frag:E0,meshnormal_vert:T0,meshnormal_frag:A0,meshphong_vert:R0,meshphong_frag:C0,meshphysical_vert:P0,meshphysical_frag:I0,meshtoon_vert:D0,meshtoon_frag:L0,points_vert:N0,points_frag:U0,shadow_vert:F0,shadow_frag:O0,sprite_vert:B0,sprite_frag:k0},Wt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},xi={basic:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:En([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:En([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:En([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:En([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:En([Wt.points,Wt.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:En([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:En([Wt.common,Wt.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:En([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:En([Wt.sprite,Wt.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distance:{uniforms:En([Wt.common,Wt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distance_vert,fragmentShader:Ie.distance_frag},shadow:{uniforms:En([Wt.lights,Wt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};xi.physical={uniforms:En([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var _l={r:0,b:0,g:0},z0=new We,id=new ve;id.set(-1,0,0,0,1,0,0,0,1);function H0(i,t,e,n,s,r){let a=new Me(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let M=b.backgroundBlurriness>0;E=t.get(E,M)}return E}function g(b){let E=!1,M=d(b);M===null?m(a,o):M&&M.isColor&&(m(M,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(b,E){let M=d(E);M&&M.isCubeTexture?(c===void 0&&(c=new qt(new Je(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:ms(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(id),c.material.toneMapped=Be.getTransfer(M.colorSpace)!==Ze,(h!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new qt(new wn(2,2),new mi({name:"BackgroundMaterial",uniforms:ms(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Be.getTransfer(M.colorSpace)!==Ze,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(_l,Bc(i)),e.buffers.color.setClear(_l.r,_l.g,_l.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:y,dispose:p}}function G0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(H,J,j,P,tt){let G=!1,X=u(H,P,j,J);r!==X&&(r=X,c(r.object)),G=d(H,P,j,tt),G&&g(H,P,j,tt),tt!==null&&t.update(tt,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(H,J,j,P),tt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return i.createVertexArray()}function c(H){return i.bindVertexArray(H)}function h(H){return i.deleteVertexArray(H)}function u(H,J,j,P){let tt=P.wireframe===!0,G=n[J.id];G===void 0&&(G={},n[J.id]=G);let X=H.isInstancedMesh===!0?H.id:0,ct=G[X];ct===void 0&&(ct={},G[X]=ct);let it=ct[j.id];it===void 0&&(it={},ct[j.id]=it);let ht=it[tt];return ht===void 0&&(ht=f(l()),it[tt]=ht),ht}function f(H){let J=[],j=[],P=[];for(let tt=0;tt<e;tt++)J[tt]=0,j[tt]=0,P[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:P,object:H,attributes:{},index:null}}function d(H,J,j,P){let tt=r.attributes,G=J.attributes,X=0,ct=j.getAttributes();for(let it in ct)if(ct[it].location>=0){let ft=tt[it],Ht=G[it];if(Ht===void 0&&(it==="instanceMatrix"&&H.instanceMatrix&&(Ht=H.instanceMatrix),it==="instanceColor"&&H.instanceColor&&(Ht=H.instanceColor)),ft===void 0||ft.attribute!==Ht||Ht&&ft.data!==Ht.data)return!0;X++}return r.attributesNum!==X||r.index!==P}function g(H,J,j,P){let tt={},G=J.attributes,X=0,ct=j.getAttributes();for(let it in ct)if(ct[it].location>=0){let ft=G[it];ft===void 0&&(it==="instanceMatrix"&&H.instanceMatrix&&(ft=H.instanceMatrix),it==="instanceColor"&&H.instanceColor&&(ft=H.instanceColor));let Ht={};Ht.attribute=ft,ft&&ft.data&&(Ht.data=ft.data),tt[it]=Ht,X++}r.attributes=tt,r.attributesNum=X,r.index=P}function y(){let H=r.newAttributes;for(let J=0,j=H.length;J<j;J++)H[J]=0}function m(H){p(H,0)}function p(H,J){let j=r.newAttributes,P=r.enabledAttributes,tt=r.attributeDivisors;j[H]=1,P[H]===0&&(i.enableVertexAttribArray(H),P[H]=1),tt[H]!==J&&(i.vertexAttribDivisor(H,J),tt[H]=J)}function b(){let H=r.newAttributes,J=r.enabledAttributes;for(let j=0,P=J.length;j<P;j++)J[j]!==H[j]&&(i.disableVertexAttribArray(j),J[j]=0)}function E(H,J,j,P,tt,G,X){X===!0?i.vertexAttribIPointer(H,J,j,tt,G):i.vertexAttribPointer(H,J,j,P,tt,G)}function M(H,J,j,P){y();let tt=P.attributes,G=j.getAttributes(),X=J.defaultAttributeValues;for(let ct in G){let it=G[ct];if(it.location>=0){let ht=tt[ct];if(ht===void 0&&(ct==="instanceMatrix"&&H.instanceMatrix&&(ht=H.instanceMatrix),ct==="instanceColor"&&H.instanceColor&&(ht=H.instanceColor)),ht!==void 0){let ft=ht.normalized,Ht=ht.itemSize,ae=t.get(ht);if(ae===void 0)continue;let st=ae.buffer,pt=ae.type,mt=ae.bytesPerElement,Ot=pt===i.INT||pt===i.UNSIGNED_INT||ht.gpuType===No;if(ht.isInterleavedBufferAttribute){let kt=ht.data,$t=kt.isInterleavedBuffer===!0?kt.stride:kt.itemSize,Ne=ht.offset;if(kt.isInstancedInterleavedBuffer||kt.isInstancedBufferAttribute){for(let ue=0;ue<it.locationSize;ue++)p(it.location+ue,kt.meshPerAttribute);H.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let ue=0;ue<it.locationSize;ue++)m(it.location+ue);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ue=0;ue<it.locationSize;ue++)E(it.location+ue,Ht/it.locationSize,pt,ft,$t*mt,(Ne+Ht/it.locationSize*ue)*mt,Ot)}else{if(ht.isInstancedBufferAttribute){for(let kt=0;kt<it.locationSize;kt++)p(it.location+kt,ht.meshPerAttribute);H.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<it.locationSize;kt++)m(it.location+kt);i.bindBuffer(i.ARRAY_BUFFER,st);for(let kt=0;kt<it.locationSize;kt++)E(it.location+kt,Ht/it.locationSize,pt,ft,Ht*mt,Ht/it.locationSize*kt*mt,Ot)}}else if(X!==void 0){let ft=X[ct];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(it.location,ft);break;case 3:i.vertexAttrib3fv(it.location,ft);break;case 4:i.vertexAttrib4fv(it.location,ft);break;default:i.vertexAttrib1fv(it.location,ft)}}}}b()}function R(){V();for(let H in n){let J=n[H];for(let j in J){let P=J[j];for(let tt in P){let G=P[tt];for(let X in G)h(G[X].object),delete G[X];delete P[tt]}}delete n[H]}}function A(H){if(n[H.id]===void 0)return;let J=n[H.id];for(let j in J){let P=J[j];for(let tt in P){let G=P[tt];for(let X in G)h(G[X].object),delete G[X];delete P[tt]}}delete n[H.id]}function _(H){for(let J in n){let j=n[J];for(let P in j){let tt=j[P];if(tt[H.id]===void 0)continue;let G=tt[H.id];for(let X in G)h(G[X].object),delete G[X];delete tt[H.id]}}}function w(H){for(let J in n){let j=n[J],P=H.isInstancedMesh===!0?H.id:0,tt=j[P];if(tt!==void 0){for(let G in tt){let X=tt[G];for(let ct in X)h(X[ct].object),delete X[ct];delete tt[G]}delete j[P],Object.keys(j).length===0&&delete n[J]}}}function V(){L(),a=!0,r!==s&&(r=s,c(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:V,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function V0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function W0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==oi&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==In&&_!==Jn&&!w&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:M,maxSamples:R,samples:A}}function X0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new On,o=new ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,E=b*4,M=p.clippingState||null;l.value=M,M=h(g,f,E,d);for(let R=0;R!==E;++R)M[R]=e[R];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=d+y*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=d;E!==y;++E,M+=4)a.copy(u[E]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var fa=class extends kn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:hs});r.uniforms.tEquirect.value=e;let a=new qt(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=An),new qs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Uu=256,q0=3,Y0=20,sd=256,rd=16,Z0=3,J0=new F,K0=new Me,gs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qs(1,10,null),this._boxMesh=new qt(new Je(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=J0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(K0));let m=new qs(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Uu,Nc(t))}_fromTexture(t,e){t.mapping===ds||t.mapping===$s?this._setSize(t.image.length===0?Uu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Fu(t,!1,!1),n=Math.log2(t)-q0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ds||t.mapping===$s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ou()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$0(),this._integrationMaterial=j0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/rd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Z0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(sd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Q0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Fu(i,t,e){return new fa(i,{minFilter:Di,generateMipmaps:t,type:ai,colorSpace:Sr,depthBuffer:e})}function ma(i,t,e){return new mi({name:i,uniforms:t,vertexShader:Ie.cube_vert,fragmentShader:e,side:Mn,blending:hs,depthTest:!1,depthWrite:!1})}function $0(){return ma("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sd}u

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
	`)}function j0(){return ma("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rd}},`

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
	`)}function Q0(){return ma("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Y0}
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
	`)}function Ou(){return ma("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Bu(){return ma("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Io||d===Do)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let y=new fa(g.height);return y.fromEquirectangularTexture(i,f),t.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,g=d===Io||d===Do,y=d===ds||d===$s;if(g||y){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new gs(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let b=f.image;return g&&b&&b.height>0||y&&b&&l(b)?(n===null&&(n=new gs(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===Io?f.mapping=ds:d===Do&&(f.mapping=$s),f}function l(f){let d=0,g=6;for(let y=0;y<g;y++)f[y]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function eg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&gr("WebGLRenderer: "+n+" extension not supported."),s}}}function ng(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let m in g.attributes)t.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let m in y)t.update(y[m],i.ARRAY_BUFFER)}function u(g){let y=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let b=y!==null?y.array.length:m.array.length/3-1,E=m.count>=65535?Cr:Rr,M=new E(Math.ceil(b/3)*6,1),R=M.array;if(y!==null){let _=y.array;p=y.version;for(let w=0,V=0;w<b;w+=3){let L=_[w+0],H=_[w+1],J=_[w+2];R[V++]=L,R[V++]=H,R[V++]=H,R[V++]=J,R[V++]=J,R[V++]=L}}else{p=m.version;for(let _=0,w=0;_<b;_+=3){let V=_+0,L=_+1,H=_+2;R[w++]=V,R[w++]=L,R[w++]=L,R[w++]=H,R[w++]=H,R[w++]=V}}M.version=p;let A=r.get(g);A&&t.remove(A),r.set(g,M)}function f(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&u(g)}else u(g);return r.get(g)}function d(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function ig(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*a,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let y=0;for(let m=0;m<d;m++)y+=f[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function sg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:_e("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function rg(i,t,e){let n=new WeakMap,s=new je;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let V=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",V)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let M=o.attributes.position.count*E,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*R*4*u),_=new Er(A,M,R,u);_.type=Jn,_.needsUpdate=!0;let w=E*4;for(let L=0;L<u;L++){let H=m[L],J=p[L],j=b[L],P=M*R*4*L;for(let tt=0;tt<H.count;tt++){let G=tt*w;d===!0&&(s.fromBufferAttribute(H,tt),A[P+G+0]=s.x,A[P+G+1]=s.y,A[P+G+2]=s.z,A[P+G+3]=0),g===!0&&(s.fromBufferAttribute(J,tt),A[P+G+4]=s.x,A[P+G+5]=s.y,A[P+G+6]=s.z,A[P+G+7]=0),y===!0&&(s.fromBufferAttribute(j,tt),A[P+G+8]=s.x,A[P+G+9]=s.y,A[P+G+10]=s.z,A[P+G+11]=j.itemSize===4?s.w:1)}}f={count:u,texture:_,size:new gt(M,R)},n.set(o,f),o.addEventListener("dispose",V)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ag(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var og={[mc]:"LINEAR_TONE_MAPPING",[gc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[xc]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[Ks]:"NEUTRAL_TONE_MAPPING",[yc]:"CUSTOM_TONE_MAPPING"};function lg(i,t,e,n,s,r){let a=new kn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new cn;h.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let u=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new qt(h,u),d=new Qr(-1,1,1,-1,0,1),g=null,y=null,m=!1,p,b=null,E=[],M=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),l!==null&&l.setSize(R,A);for(let _=0;_<E.length;_++){let w=E[_];w.setSize&&w.setSize(R,A)}},this.setEffects=function(R){E=R,M=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new kn(A,_,{type:ai,depthBuffer:!1,stencilBuffer:!1}),l=new kn(A,_,{type:ai,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&E.some(V=>V.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new Ii(A,_),r===!0&&(c.format=Li,c.type=fs)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let V=0;V<E.length;V++){let L=E[V];L.setSize&&L.setSize(A,_),w&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(c)}},this.begin=function(R,A){if(m||R.toneMapping===gi&&E.length===0)return!1;if(b=A,A!==null){let _=A.width,w=A.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return M===!1&&R.setRenderTarget(a),p=R.toneMapping,R.toneMapping=gi,!0},this.hasRenderPass=function(){return M},this.end=function(R,A){R.toneMapping=p,m=!0;let _=a,w=o;for(let V=0;V<E.length;V++){let L=E[V];L.enabled!==!1&&(L.render(R,w,_,A),L.needsSwap!==!1&&(_=w,w=w===o?l:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,u.defines={},Be.getTransfer(g)===Ze&&(u.defines.SRGB_TRANSFER="");let V=og[y];V&&(u.defines[V]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(b),R.render(f,d),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ad=new Rn,od=new Ii(1,1),ld=new Nr(1),cd=new Er,hd=new oo,ud=new Lr,ku=[],zu=[],Hu=new Float32Array(16),Gu=new Float32Array(9),Vu=new Float32Array(4);function tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=ku[s];if(r===void 0&&(r=new Float32Array(s),ku[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function dn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yl(i,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2fv(this.addr,t),fn(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(dn(e,t))return;i.uniform3fv(this.addr,t),fn(e,t)}}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4fv(this.addr,t),fn(e,t)}}function fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Vu.set(n),i.uniformMatrix2fv(this.addr,!1,Vu),fn(e,n)}}function pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Gu.set(n),i.uniformMatrix3fv(this.addr,!1,Gu),fn(e,n)}}function mg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(dn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fn(e,t)}else{if(dn(e,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),fn(e,n)}}function gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _g(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2iv(this.addr,t),fn(e,t)}}function xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3iv(this.addr,t),fn(e,t)}}function yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4iv(this.addr,t),fn(e,t)}}function vg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(dn(e,t))return;i.uniform2uiv(this.addr,t),fn(e,t)}}function Sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(dn(e,t))return;i.uniform3uiv(this.addr,t),fn(e,t)}}function bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(dn(e,t))return;i.uniform4uiv(this.addr,t),fn(e,t)}}function vl(i){return i.version===0&&(i.compareFunction=Pc,i.needsUpdate=!0),i}function wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=vl(od):r=ad,e.setTexture2D(t||r,s)}function Eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hd,s)}function Tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=vl(ld):r=ud,e.setTextureCube(t||r,s)}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cd,s)}function Rg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return yg;case 5125:return vg;case 36294:return Mg;case 36295:return Sg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return Tg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Cg(i,t){i.uniform1fv(this.addr,t)}function Pg(i,t){let e=tr(t,this.size,2);i.uniform2fv(this.addr,e)}function Ig(i,t){let e=tr(t,this.size,3);i.uniform3fv(this.addr,e)}function Dg(i,t){let e=tr(t,this.size,4);i.uniform4fv(this.addr,e)}function Lg(i,t){let e=tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ng(i,t){let e=tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ug(i,t){let e=tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fg(i,t){i.uniform1iv(this.addr,t)}function Og(i,t){i.uniform2iv(this.addr,t)}function Bg(i,t){i.uniform3iv(this.addr,t)}function kg(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function Hg(i,t){i.uniform2uiv(this.addr,t)}function Gg(i,t){i.uniform3uiv(this.addr,t)}function Vg(i,t){i.uniform4uiv(this.addr,t)}function Wg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vl(od):a=ad;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Xg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hd,r[a])}function qg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=vl(ld):a=ud;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Yg(i,t,e){let n=this.cache,s=t.length,r=yl(e,s);dn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cd,r[a])}function Zg(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Ig;case 35666:return Dg;case 35674:return Lg;case 35675:return Ng;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return zg;case 36294:return Hg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}var Wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rg(e.type)}},Xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zg(e.type)}},qc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Gc=/(\w+)(\])?(\[|\.)?/g;function Wu(i,t){i.seq.push(t),i.map[t.id]=t}function Jg(i,t,e){let n=i.name,s=n.length;for(Gc.lastIndex=0;;){let r=Gc.exec(n),a=Gc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wu(e,c===void 0?new Wc(o,i,t):new Xc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new qc(o),Wu(e,u)),e=u}}}var Qs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Jg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Kg=37297,$g=0;function jg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var qu=new ve;function Qg(i){Be._getMatrix(qu,Be.workingColorSpace,i);let t=`mat3( ${qu.elements.map(e=>e.toFixed(4))} )`;switch(Be.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return ge("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(t),o)}else return r}function t_(i,t){let e=Qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var e_={[mc]:"Linear",[gc]:"Reinhard",[_c]:"Cineon",[xc]:"ACESFilmic",[vc]:"AgX",[Ks]:"Neutral",[yc]:"Custom"};function n_(i,t){let e=e_[t];return e===void 0?(ge("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xl=new F;function i_(){Be.getLuminanceCoefficients(xl);let i=xl.x.toFixed(4),t=xl.y.toFixed(4),e=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function r_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function da(i){return i!==""}function Zu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(o_,l_)}function l_(i,t){let e=Ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Yc(e)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(i){return i.replace(c_,h_)}function h_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var u_={[na]:"SHADOWMAP_TYPE_PCF",[Zs]:"SHADOWMAP_TYPE_VSM"};function d_(i){return u_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var f_={[$s]:"ENVMAP_MODE_REFRACTION"};function p_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":f_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var m_={[Po]:"ENVMAP_BLENDING_MULTIPLY",[cu]:"ENVMAP_BLENDING_MIX",[hu]:"ENVMAP_BLENDING_ADD"};function g_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":m_[i.combine]||"ENVMAP_BLENDING_NONE"}function __(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=d_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=p_(e),u=g_(e),f=s_(e),d=r_(r),g=s.createProgram(),y,m,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(da).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(da).join(`
`),m.length>0&&(m+=`
`)):(y=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),m=[$u(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Ie.tonemapping_pars_fragment:"",e.toneMapping!==gi?n_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,t_("linearToOutputTexel",e.outputColorSpace),i_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),a=Yc(a),a=Zu(a,e),a=Ju(a,e),o=Yc(o),o=Zu(o,e),o=Ju(o,e),a=Ku(a),o=Ku(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=p+y+a,E=p+m+o,M=Xu(s,s.VERTEX_SHADER,b),R=Xu(s,s.FRAGMENT_SHADER,E);s.attachShader(g,M),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(L){if(i.debug.checkShaderErrors){let H=s.getProgramInfoLog(g)||"",J=s.getShaderInfoLog(M)||"",j=s.getShaderInfoLog(R)||"",P=H.trim(),tt=J.trim(),G=j.trim(),X=!0,ct=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,R);else{let it=Yu(s,M,"vertex"),ht=Yu(s,R,"fragment");_e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+it+`
`+ht)}else P!==""?ge("WebGLProgram: Program Info Log:",P):(tt===""||G==="")&&(ct=!1);ct&&(L.diagnostics={runnable:X,programLog:P,vertexShader:{log:tt,prefix:y},fragmentShader:{log:G,prefix:m}})}s.deleteShader(M),s.deleteShader(R),_=new Qs(s,g),w=a_(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(g,Kg)),V},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$g++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=R,this}var x_=0,Zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jc(t),e.set(t,n)),n}},Jc=class{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}};function y_(i){return i===Ki||i===la||i===ca}function v_(i,t,e,n,s,r){let a=new Tr,o=new Zc,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,w,V,L,H,J){let j=L.fog,P=H.geometry,tt=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||tt,G),ct=f[_.type],it=n.precision;_.precision!==null&&(it=n.getMaxPrecision(_.precision),it!==_.precision&&ge("WebGLProgram.getParameters:",_.precision,"not supported, using",it,"instead."));let ht=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ft=ht!==void 0?ht.length:0,Ht=0;P.morphAttributes.position!==void 0&&(Ht=1),P.morphAttributes.normal!==void 0&&(Ht=2),P.morphAttributes.color!==void 0&&(Ht=3);let ae,st,pt,mt;if(ct){let Gt=xi[ct];ae=Gt.vertexShader,st=Gt.fragmentShader}else{ae=_.vertexShader,st=_.fragmentShader;let Gt=o.getVertexShaderStage(_),qe=o.getFragmentShaderStage(_);o.update(_,Gt,qe),pt=Gt.id,mt=qe.id}let Ot=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),$t=H.isInstancedMesh===!0,Ne=H.isBatchedMesh===!0,ue=!!_.map,Se=!!_.matcap,Re=!!X,ut=Re&&X.isPMREMTexture===!0,Lt=!!_.aoMap,It=!!_.lightMap,Xt=!!_.bumpMap&&_.wireframe===!1,zt=!!_.normalMap,me=!!_.displacementMap,te=!!_.emissiveMap,be=!!_.metalnessMap,De=!!_.roughnessMap,Pe=_.anisotropy>0,k=_.clearcoat>0,Qe=_.diffuseRoughness>0,Ee=_.dispersion>0,He=_.retroreflectivity>0,Nt=_.iridescence>0,Ke=_.sheen>0,he=_.transmission>0,ne=Pe&&!!_.anisotropyMap,T=k&&!!_.clearcoatMap,v=k&&!!_.clearcoatNormalMap,K=k&&!!_.clearcoatRoughnessMap,_t=Qe&&!!_.diffuseRoughnessMap,dt=Nt&&!!_.iridescenceMap,Dt=Nt&&!!_.iridescenceThicknessMap,bt=Ke&&!!_.sheenColorMap,ot=Ke&&!!_.sheenRoughnessMap,lt=!!_.specularMap,Ut=!!_.specularColorMap,D=!!_.specularIntensityMap,at=he&&!!_.transmissionMap,rt=he&&!!_.thicknessMap,At=!!_.gradientMap,yt=!!_.alphaMap,Tt=_.alphaTest>0,ee=!!_.alphaHash,Te=!!_.extensions,vt=gi;_.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(vt=i.toneMapping);let ce=ut?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Ae={shaderID:ct,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:st,defines:_.defines,customVertexShaderID:pt,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:it,batching:Ne,batchingColor:Ne&&H._colorsTexture!==null,instancing:$t,instancingColor:$t&&H.instanceColor!==null,instancingMorph:$t&&H.morphTexture!==null,outputColorSpace:Ot===null?i.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:Be.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ue,matcap:Se,envMap:Re,envMapMode:Re&&X.mapping,envMapPMREM:ut,envMapMaxLod:ut?ce.length-1:null,envMapSize:ut?ce[0].width:null,aoMap:Lt,lightMap:It,bumpMap:Xt,normalMap:zt,displacementMap:me,emissiveMap:te,normalMapObjectSpace:zt&&_.normalMapType===fu,normalMapTangentSpace:zt&&_.normalMapType===ha,packedNormalMap:zt&&_.normalMapType===ha&&y_(_.normalMap.format),metalnessMap:be,roughnessMap:De,anisotropy:Pe,anisotropyMap:ne,clearcoat:k,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:K,diffuseRoughness:Qe,diffuseRoughnessMap:_t,dispersion:Ee,retroreflection:He,iridescence:Nt,iridescenceMap:dt,iridescenceThicknessMap:Dt,sheen:Ke,sheenColorMap:bt,sheenRoughnessMap:ot,specularMap:lt,specularColorMap:Ut,specularIntensityMap:D,transmission:he,transmissionMap:at,thicknessMap:rt,gradientMap:At,opaque:_.transparent===!1&&_.blending===Js&&_.alphaToCoverage===!1,alphaMap:yt,alphaTest:Tt,alphaHash:ee,combine:_.combine,mapUv:ue&&d(_.map.channel),aoMapUv:Lt&&d(_.aoMap.channel),lightMapUv:It&&d(_.lightMap.channel),bumpMapUv:Xt&&d(_.bumpMap.channel),normalMapUv:zt&&d(_.normalMap.channel),displacementMapUv:me&&d(_.displacementMap.channel),emissiveMapUv:te&&d(_.emissiveMap.channel),metalnessMapUv:be&&d(_.metalnessMap.channel),roughnessMapUv:De&&d(_.roughnessMap.channel),anisotropyMapUv:ne&&d(_.anisotropyMap.channel),clearcoatMapUv:T&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_t&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:dt&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:ot&&d(_.sheenRoughnessMap.channel),specularMapUv:lt&&d(_.specularMap.channel),specularColorMapUv:Ut&&d(_.specularColorMap.channel),specularIntensityMapUv:D&&d(_.specularIntensityMap.channel),transmissionMapUv:at&&d(_.transmissionMap.channel),thicknessMapUv:rt&&d(_.thicknessMap.channel),alphaMapUv:yt&&d(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(zt||Pe),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!P.attributes.uv&&(ue||yt),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&zt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:kt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ht,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:J.filter(Gt=>Gt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:ue&&_.map.isVideoTexture===!0&&Be.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:te&&_.emissiveMap.isVideoTexture===!0&&Be.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Zn,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Te&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&_.extensions.multiDraw===!0||Ne)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function y(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let V in _.defines)w.push(V),w.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(m(w,_),p(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function p(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let w=f[_.type],V;if(w){let L=xi[w];V=Du.clone(L.uniforms)}else V=_.uniforms;return V}function E(_,w){let V=h.get(w);return V!==void 0?++V.usedTimes:(V=new __(i,w,_,s),c.push(V),h.set(w,V)),V}function M(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:b,acquireProgram:E,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:A}}function M_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function S_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ju(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,y,m,p){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:p},i[t]=b):(b.id=f.id,b.object=f,b.geometry=d,b.material=g,b.materialVariant=a(f),b.groupOrder=y,b.renderOrder=f.renderOrder,b.z=m,b.group=p),t++,b}function l(f,d,g,y,m,p,b){b.reversedDepth===!0&&(m=-m);let E=o(f,d,g,y,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(f,d,g,y,m,p){let b=o(f,d,g,y,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(f,d){e.length>1&&e.sort(f||S_),n.length>1&&n.sort(d||ju),s.length>1&&s.sort(d||ju)}function u(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function b_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Qu,i.set(n,[a])):s>=r.length?(a=new Qu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function w_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Me};break;case"SpotLight":e={position:new F,direction:new F,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function E_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var T_=0;function A_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R_(i){let t=new w_,e=E_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new We,a=new We;function o(c){let h=0,u=0,f=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,b=0,E=0,M=0,R=0,A=0,_=0,w=0,V=0,L=0;c.sort(A_);for(let J=0,j=c.length;J<j;J++){let P=c[J],tt=P.color,G=P.intensity,X=P.distance,ct=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ki?ct=P.shadow.map.texture:ct=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=tt.r*G,u+=tt.g*G,f+=tt.b*G;else if(P.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(P.sh.coefficients[it],G);L++}else if(P.isSunLight){let it=t.get(P);if(it.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ht=P.shadow,ft=e.get(P);ft.shadowIntensity=ht.intensity,ft.shadowBias=ht.bias,ft.shadowNormalBias=ht.normalBias,ft.shadowRadius=ht.radius,ft.shadowMapSize.copy(ht.mapSize).multiply(ht.getFrameExtents()),n.sunShadow[g]=ft,n.sunShadowMap[g]=ct;let Ht=ht.getViewportCount();for(let ae=0;ae<Ht;ae++)n.sunShadowMatrix[y+ae]=ht.getMatrix(ae),n.sunShadowCascade[y+ae]=ht._cascadeData[ae];y+=Ht,g++}n.sun[d]=it,d++}else if(P.isDirectionalLight){let it=t.get(P);if(it.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ht=P.shadow,ft=e.get(P);ft.shadowIntensity=ht.intensity,ft.shadowBias=ht.bias,ft.shadowNormalBias=ht.normalBias,ft.shadowRadius=ht.radius,ft.shadowMapSize=ht.mapSize,n.directionalShadow[m]=ft,n.directionalShadowMap[m]=ct,n.directionalShadowMatrix[m]=P.shadow.matrix,R++}n.directional[m]=it,m++}else if(P.isSpotLight){let it=t.get(P);it.position.setFromMatrixPosition(P.matrixWorld),it.color.copy(tt).multiplyScalar(G),it.distance=X,it.coneCos=Math.cos(P.angle),it.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),it.decay=P.decay,n.spot[b]=it;let ht=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,ht.updateMatrices(P),P.castShadow&&V++),n.spotLightMatrix[b]=ht.matrix,P.castShadow){let ft=e.get(P);ft.shadowIntensity=ht.intensity,ft.shadowBias=ht.bias,ft.shadowNormalBias=ht.normalBias,ft.shadowRadius=ht.radius,ft.shadowMapSize=ht.mapSize,n.spotShadow[b]=ft,n.spotShadowMap[b]=ct,_++}b++}else if(P.isRectAreaLight){let it=t.get(P);it.color.copy(tt).multiplyScalar(G),it.halfWidth.set(P.width*.5,0,0),it.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=it,E++}else if(P.isPointLight){let it=t.get(P);if(it.color.copy(P.color).multiplyScalar(P.intensity),it.distance=P.distance,it.decay=P.decay,P.castShadow){let ht=P.shadow,ft=e.get(P);ft.shadowIntensity=ht.intensity,ft.shadowBias=ht.bias,ft.shadowNormalBias=ht.normalBias,ft.shadowRadius=ht.radius,ft.shadowMapSize=ht.mapSize,ft.shadowCameraNear=ht.camera.near,ft.shadowCameraFar=ht.camera.far,n.pointShadow[p]=ft,n.pointShadowMap[p]=ct,n.pointShadowMatrix[p]=P.shadow.matrix,A++}n.point[p]=it,p++}else if(P.isHemisphereLight){let it=t.get(P);it.skyColor.copy(P.color).multiplyScalar(G),it.groundColor.copy(P.groundColor).multiplyScalar(G),n.hemi[M]=it,M++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let H=n.hash;(H.sunLength!==d||H.directionalLength!==m||H.pointLength!==p||H.spotLength!==b||H.rectAreaLength!==E||H.hemiLength!==M||H.numSunShadows!==g||H.numDirectionalShadows!==R||H.numPointShadows!==A||H.numSpotShadows!==_||H.numSpotMaps!==w||H.numLightProbes!==L)&&(n.sun.length=d,n.directional.length=m,n.spot.length=b,n.rectArea.length=E,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-V,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=L,H.sunLength=d,H.directionalLength=m,H.pointLength=p,H.spotLength=b,H.rectAreaLength=E,H.hemiLength=M,H.numSunShadows=g,H.numDirectionalShadows=R,H.numPointShadows=A,H.numSpotShadows=_,H.numSpotMaps=w,H.numLightProbes=L,n.version=T_++)}function l(c,h){let u=0,f=0,d=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let M=c[b];if(M.isSunLight){let R=n.sun[u];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),u++}else if(M.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),f++}else if(M.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let R=n.point[d];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function td(i){let t=new R_(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function C_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new td(i),t.set(s,[o])):r>=a.length?(o=new td(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I_=`uniform sampler2D shadow_pass;
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
}`,D_=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],L_=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ed=new We,ua=new F,Vc=new F;function N_(i,t,e){let n=new Vi,s=new gt,r=new gt,a=new je,o=new go,l=new _o,c={},h=e.maxTextureSize,u={[Ji]:Mn,[Mn]:Ji,[Zn]:Zn},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:P_,fragmentShader:I_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new cn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new qt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let p=this.type;this.render=function(A,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Co&&(ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=na);let V=i.getRenderTarget(),L=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),J=i.state;J.setBlending(hs),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);let j=p!==this.type;j&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(tt=>tt.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,tt=A.length;P<tt;P++){let G=A[P],X=G.shadow;if(X===void 0){ge("WebGLShadowMap:",G,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ct=X.getFrameExtents();s.multiply(ct),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,X.mapSize.y=r.y));let it=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=it,X.map===null||j===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Zs){if(G.isPointLight){ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new kn(s.x,s.y,{format:Ki,type:ai,minFilter:An,magFilter:An,generateMipmaps:!1}),X.map.texture.name=G.name+".shadowMap",X.map.depthTexture=new Ii(s.x,s.y,Jn),X.map.depthTexture.name=G.name+".shadowMapDepth",X.map.depthTexture.format=Ri,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=_n,X.map.depthTexture.magFilter=_n}else G.isPointLight?(X.map=new fa(s.x),X.map.depthTexture=new Nr(s.x,ri)):(X.map=new kn(s.x,s.y),X.map.depthTexture=new Ii(s.x,s.y,ri)),X.map.depthTexture.name=G.name+".shadowMap",X.map.depthTexture.format=Ri,this.type===na?(X.map.depthTexture.compareFunction=it?Cc:Rc,X.map.depthTexture.minFilter=An,X.map.depthTexture.magFilter=An):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=_n,X.map.depthTexture.magFilter=_n);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ht=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();G.isPointLight!==!0&&X.updateMatrices(G,w);let ft=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:w.layers;for(let Ht=0;Ht<ht;Ht++){let ae=X.getCamera(Ht);if(G.isPointLight){let st=X.camera,pt=X.matrix,mt=G.distance||st.far;mt!==st.far&&(st.far=mt,st.updateProjectionMatrix()),ua.setFromMatrixPosition(G.matrixWorld),st.position.copy(ua),Vc.copy(st.position),Vc.add(D_[Ht]),st.up.copy(L_[Ht]),st.lookAt(Vc),st.updateMatrixWorld(),pt.makeTranslation(-ua.x,-ua.y,-ua.z),ed.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),X._frustum.setFromProjectionMatrix(ed,st.coordinateSystem,st.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Ht),i.clear();else{Ht===0&&(i.setRenderTarget(X.map),i.clear());let st=X.getViewport(Ht);a.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),J.viewport(a)}n=X.getFrustum(Ht),M(_,w,ae,G,ft,this.type)}X.isPointLightShadow!==!0&&this.type===Zs&&b(X,w),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(V,L,H)};function b(A,_){let w=t.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new kn(s.x,s.y,{format:Ki,type:ai}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,w,f,y,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,w,d,y,null)}function E(A,_,w,V){let L=null,H=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)L=H;else if(L=w.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let J=L.uuid,j=_.uuid,P=c[J];P===void 0&&(P={},c[J]=P);let tt=P[j];tt===void 0&&(tt=L.clone(),P[j]=tt,_.addEventListener("dispose",R)),L=tt}if(L.visible=_.visible,L.wireframe=_.wireframe,V===Zs?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:u[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,w.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let J=i.properties.get(L);J.light=w}return L}function M(A,_,w,V,L,H){if(A.visible===!1)return;if(A.layers.test(L)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&H===Zs)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);let P=t.update(A),tt=A.material;if(Array.isArray(tt)){let G=P.groups;for(let X=0,ct=G.length;X<ct;X++){let it=G[X],ht=tt[it.materialIndex];if(ht&&ht.visible){let ft=E(A,ht,V,H);A.onBeforeShadow(i,A,_,w,P,ft,it),i.renderBufferDirect(w,null,P,ft,A,it),A.onAfterShadow(i,A,_,w,P,ft,it)}}}else if(tt.visible){let G=E(A,tt,V,H);A.onBeforeShadow(i,A,_,w,P,G,null),i.renderBufferDirect(w,null,P,G,A,null),A.onAfterShadow(i,A,_,w,P,G,null)}}let j=A.children;for(let P=0,tt=j.length;P<tt;P++)M(j[P],_,w,V,L,H)}function R(A){A.target.removeEventListener("dispose",R);for(let w in c){let V=c[w],L=A.target.uuid;L in V&&(V[L].dispose(),delete V[L])}}}function U_(i,t){function e(){let D=!1,at=new je,rt=null,At=new je(0,0,0,0);return{setMask:function(yt){rt!==yt&&!D&&(i.colorMask(yt,yt,yt,yt),rt=yt)},setLocked:function(yt){D=yt},setClear:function(yt,Tt,ee,Te,vt){vt===!0&&(yt*=Te,Tt*=Te,ee*=Te),at.set(yt,Tt,ee,Te),At.equals(at)===!1&&(i.clearColor(yt,Tt,ee,Te),At.copy(at))},reset:function(){D=!1,rt=null,At.set(-1,0,0,0)}}}function n(){let D=!1,at=!1,rt=null,At=null,yt=null;return{setReversed:function(Tt){if(at!==Tt){let ee=t.get("EXT_clip_control");Tt?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT),at=Tt;let Te=yt;yt=null,this.setClear(Te)}},getReversed:function(){return at},setTest:function(Tt){Tt?kt(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(Tt){rt!==Tt&&!D&&(i.depthMask(Tt),rt=Tt)},setFunc:function(Tt){if(at&&(Tt=wu[Tt]),At!==Tt){switch(Tt){case Ka:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Ns:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case no:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=Tt}},setLocked:function(Tt){D=Tt},setClear:function(Tt){yt!==Tt&&(yt=Tt,at&&(Tt=1-Tt),i.clearDepth(Tt))},reset:function(){D=!1,rt=null,At=null,yt=null,at=!1}}}function s(){let D=!1,at=null,rt=null,At=null,yt=null,Tt=null,ee=null,Te=null,vt=null;return{setTest:function(ce){D||(ce?kt(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(ce){at!==ce&&!D&&(i.stencilMask(ce),at=ce)},setFunc:function(ce,Ae,Gt){(rt!==ce||At!==Ae||yt!==Gt)&&(i.stencilFunc(ce,Ae,Gt),rt=ce,At=Ae,yt=Gt)},setOp:function(ce,Ae,Gt){(Tt!==ce||ee!==Ae||Te!==Gt)&&(i.stencilOp(ce,Ae,Gt),Tt=ce,ee=Ae,Te=Gt)},setLocked:function(ce){D=ce},setClear:function(ce){vt!==ce&&(i.clearStencil(ce),vt=ce)},reset:function(){D=!1,at=null,rt=null,At=null,yt=null,Tt=null,ee=null,Te=null,vt=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],y=null,m=!1,p=null,b=null,E=null,M=null,R=null,A=null,_=null,w=new Me(0,0,0),V=0,L=!1,H=null,J=null,j=null,P=null,tt=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ct=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(it)[1]),X=ct>=1):it.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),X=ct>=2);let ht=null,ft={},Ht=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),st=new je().fromArray(Ht),pt=new je().fromArray(ae);function mt(D,at,rt,At){let yt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(D,Tt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<rt;ee++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(at+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Tt}let Ot={};Ot[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),kt(i.DEPTH_TEST),a.setFunc(Ns),Xt(!1),zt(cc),kt(i.CULL_FACE),Lt(hs);function kt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function $t(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Ne(D,at){return f[D]!==at?(i.bindFramebuffer(D,at),f[D]=at,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=at),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=at),!0):!1}function ue(D,at){let rt=g,At=!1;if(D){rt=d.get(at),rt===void 0&&(rt=[],d.set(at,rt));let yt=D.textures;if(rt.length!==yt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,ee=yt.length;Tt<ee;Tt++)rt[Tt]=i.COLOR_ATTACHMENT0+Tt;rt.length=yt.length,At=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,At=!0);At&&i.drawBuffers(rt)}function Se(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let Re={[us]:i.FUNC_ADD,[qh]:i.FUNC_SUBTRACT,[Yh]:i.FUNC_REVERSE_SUBTRACT};Re[Zh]=i.MIN,Re[Jh]=i.MAX;let ut={[Kh]:i.ZERO,[$h]:i.ONE,[jh]:i.SRC_COLOR,[fc]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[nu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[iu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[au]:i.ONE_MINUS_CONSTANT_COLOR,[ou]:i.CONSTANT_ALPHA,[lu]:i.ONE_MINUS_CONSTANT_ALPHA};function Lt(D,at,rt,At,yt,Tt,ee,Te,vt,ce){if(D===hs){m===!0&&($t(i.BLEND),m=!1);return}if(m===!1&&(kt(i.BLEND),m=!0),D!==Xh){if(D!==p||ce!==L){if((b!==us||R!==us)&&(i.blendEquation(i.FUNC_ADD),b=us,R=us),ce)switch(D){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.ONE,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_e("WebGLState: Invalid blending: ",D);break}else switch(D){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uc:_e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:_e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_e("WebGLState: Invalid blending: ",D);break}E=null,M=null,A=null,_=null,w.set(0,0,0),V=0,p=D,L=ce}return}yt=yt||at,Tt=Tt||rt,ee=ee||At,(at!==b||yt!==R)&&(i.blendEquationSeparate(Re[at],Re[yt]),b=at,R=yt),(rt!==E||At!==M||Tt!==A||ee!==_)&&(i.blendFuncSeparate(ut[rt],ut[At],ut[Tt],ut[ee]),E=rt,M=At,A=Tt,_=ee),(Te.equals(w)===!1||vt!==V)&&(i.blendColor(Te.r,Te.g,Te.b,vt),w.copy(Te),V=vt),p=D,L=!1}function It(D,at){D.side===Zn?$t(i.CULL_FACE):kt(i.CULL_FACE);let rt=D.side===Mn;at&&(rt=!rt),Xt(rt),D.blending===Js&&D.transparent===!1?Lt(hs):Lt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let At=D.stencilWrite;o.setTest(At),At&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?kt(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){H!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),H=D)}function zt(D){D!==Vh?(kt(i.CULL_FACE),D!==J&&(D===cc?i.cullFace(i.BACK):D===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),J=D}function me(D){D!==j&&(X&&i.lineWidth(D),j=D)}function te(D,at,rt){D?(kt(i.POLYGON_OFFSET_FILL),(P!==at||tt!==rt)&&(P=at,tt=rt,a.getReversed()&&(at=-at,rt=-rt),i.polygonOffset(at,rt))):$t(i.POLYGON_OFFSET_FILL)}function be(D){D?kt(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function De(D){D===void 0&&(D=i.TEXTURE0+G-1),ht!==D&&(i.activeTexture(D),ht=D)}function Pe(D,at,rt){rt===void 0&&(ht===null?rt=i.TEXTURE0+G-1:rt=ht);let At=ft[rt];At===void 0&&(At={type:void 0,texture:void 0},ft[rt]=At),(At.type!==D||At.texture!==at)&&(ht!==rt&&(i.activeTexture(rt),ht=rt),i.bindTexture(D,at||Ot[D]),At.type=D,At.texture=at)}function k(){let D=ft[ht];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(D){_e("WebGLState:",D)}}function Ee(){try{i.compressedTexImage3D(...arguments)}catch(D){_e("WebGLState:",D)}}function He(){try{i.texSubImage2D(...arguments)}catch(D){_e("WebGLState:",D)}}function Nt(){try{i.texSubImage3D(...arguments)}catch(D){_e("WebGLState:",D)}}function Ke(){try{i.compressedTexSubImage2D(...arguments)}catch(D){_e("WebGLState:",D)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(D){_e("WebGLState:",D)}}function ne(){try{i.texStorage2D(...arguments)}catch(D){_e("WebGLState:",D)}}function T(){try{i.texStorage3D(...arguments)}catch(D){_e("WebGLState:",D)}}function v(){try{i.texImage2D(...arguments)}catch(D){_e("WebGLState:",D)}}function K(){try{i.texImage3D(...arguments)}catch(D){_e("WebGLState:",D)}}function _t(D){return u[D]!==void 0?u[D]:i.getParameter(D)}function dt(D,at){u[D]!==at&&(i.pixelStorei(D,at),u[D]=at)}function Dt(D){st.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function bt(D){pt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),pt.copy(D))}function ot(D,at){let rt=c.get(at);rt===void 0&&(rt=new WeakMap,c.set(at,rt));let At=rt.get(D);At===void 0&&(At=i.getUniformBlockIndex(at,D.name),i.uniformBlockBinding(at,At,At),rt.set(D,At))}function lt(D,at,rt){let yt=c.get(at).get(D);l[yt]!==rt&&(i.bindBufferBase(i.UNIFORM_BUFFER,yt,rt),l[yt]=rt)}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ht=null,ft={},f={},l={},d=new WeakMap,g=[],y=null,m=!1,p=null,b=null,E=null,M=null,R=null,A=null,_=null,w=new Me(0,0,0),V=0,L=!1,H=null,J=null,j=null,P=null,tt=null,st.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:kt,disable:$t,bindFramebuffer:Ne,drawBuffers:ue,useProgram:Se,setBlending:Lt,setMaterial:It,setFlipSided:Xt,setCullFace:zt,setLineWidth:me,setPolygonOffset:te,setScissorTest:be,activeTexture:De,bindTexture:Pe,unbindTexture:k,compressedTexImage2D:Qe,compressedTexImage3D:Ee,texImage2D:v,texImage3D:K,pixelStorei:dt,getParameter:_t,updateUBOMapping:ot,uniformBlockBinding:lt,texStorage2D:ne,texStorage3D:T,texSubImage2D:He,texSubImage3D:Nt,compressedTexSubImage2D:Ke,compressedTexSubImage3D:he,scissor:Dt,viewport:bt,reset:Ut}}function F_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap,u=new Set,f,d=new WeakMap,g=new Set,y=new FinalizationRegistry(T=>g.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,v){return m?new OffscreenCanvas(T,v):wr("canvas")}function b(T,v,K){let _t=1,dt=ne(T);if((dt.width>K||dt.height>K)&&(_t=K/Math.max(dt.width,dt.height)),_t<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let Dt=Math.floor(_t*dt.width),bt=Math.floor(_t*dt.height);f===void 0&&(f=p(Dt,bt));let ot=v?p(Dt,bt):f;return ot.width=Dt,ot.height=bt,ot.getContext("2d").drawImage(T,0,0,Dt,bt),ge("WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+Dt+"x"+bt+")."),ot}else return"data"in T&&ge("WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),T;return T}function E(T){return T.generateMipmaps}function M(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,v,K,_t,dt,Dt=!1){if(T!==null){if(i[T]!==void 0)return i[T];ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let bt;_t&&(bt=t.get("EXT_texture_norm16"),bt||ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=v;if(v===i.RED&&(K===i.FLOAT&&(ot=i.R32F),K===i.HALF_FLOAT&&(ot=i.R16F),K===i.UNSIGNED_BYTE&&(ot=i.R8),K===i.UNSIGNED_SHORT&&bt&&(ot=bt.R16_EXT),K===i.SHORT&&bt&&(ot=bt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.R8UI),K===i.UNSIGNED_SHORT&&(ot=i.R16UI),K===i.UNSIGNED_INT&&(ot=i.R32UI),K===i.BYTE&&(ot=i.R8I),K===i.SHORT&&(ot=i.R16I),K===i.INT&&(ot=i.R32I)),v===i.RG&&(K===i.FLOAT&&(ot=i.RG32F),K===i.HALF_FLOAT&&(ot=i.RG16F),K===i.UNSIGNED_BYTE&&(ot=i.RG8),K===i.UNSIGNED_SHORT&&bt&&(ot=bt.RG16_EXT),K===i.SHORT&&bt&&(ot=bt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RG8UI),K===i.UNSIGNED_SHORT&&(ot=i.RG16UI),K===i.UNSIGNED_INT&&(ot=i.RG32UI),K===i.BYTE&&(ot=i.RG8I),K===i.SHORT&&(ot=i.RG16I),K===i.INT&&(ot=i.RG32I)),v===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),K===i.UNSIGNED_INT&&(ot=i.RGB32UI),K===i.BYTE&&(ot=i.RGB8I),K===i.SHORT&&(ot=i.RGB16I),K===i.INT&&(ot=i.RGB32I)),v===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),K===i.UNSIGNED_INT&&(ot=i.RGBA32UI),K===i.BYTE&&(ot=i.RGBA8I),K===i.SHORT&&(ot=i.RGBA16I),K===i.INT&&(ot=i.RGBA32I)),v===i.RGB&&(K===i.UNSIGNED_SHORT&&bt&&(ot=bt.RGB16_EXT),K===i.SHORT&&bt&&(ot=bt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),v===i.RGBA){let lt=Dt?br:Be.getTransfer(dt);K===i.FLOAT&&(ot=i.RGBA32F),K===i.HALF_FLOAT&&(ot=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ot=lt===Ze?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&bt&&(ot=bt.RGBA16_EXT),K===i.SHORT&&bt&&(ot=bt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function _(T,v){let K;return T?v===null||v===ri||v===fs?K=i.DEPTH24_STENCIL8:v===Jn?K=i.DEPTH32F_STENCIL8:v===js&&(K=i.DEPTH24_STENCIL8,ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ri||v===fs?K=i.DEPTH_COMPONENT24:v===Jn?K=i.DEPTH_COMPONENT32F:v===js&&(K=i.DEPTH_COMPONENT16),K}function w(T,v){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==_n&&T.minFilter!==An?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function V(T){let v=new WeakRef(T);n.get(T).__ref=v,g.add(v),y.register(T,v,v)}function L(T){let v=n.get(T).__ref;v!==void 0&&(g.delete(v),y.unregister(v))}function H(T){j(T.target)}function J(T){P(T.target)}function j(T){T.removeEventListener("dispose",H),L(T),G(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function P(T){T.removeEventListener("dispose",J),L(T),ct(T)}function tt(){for(let T of g){let v=T.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):j(v))}g.clear(),u.clear()}function G(T){let v=n.get(T);if(v.__webglInit===void 0)return;let K=T.source,_t=d.get(K);if(_t){let dt=_t[v.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&X(T),Object.keys(_t).length===0&&d.delete(K)}n.remove(T)}function X(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let K=T.source,_t=d.get(K);delete _t[v.__cacheKey],a.memory.textures--}function ct(T){let v=n.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();let K=T.depthTexture;if(K&&K.renderTarget===T&&j(K),T.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(v.__webglFramebuffer[dt]))for(let Dt=0;Dt<v.__webglFramebuffer[dt].length;Dt++)i.deleteFramebuffer(v.__webglFramebuffer[dt][Dt]);else i.deleteFramebuffer(v.__webglFramebuffer[dt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[dt])}else{if(Array.isArray(v.__webglFramebuffer))for(let dt=0;dt<v.__webglFramebuffer.length;dt++)i.deleteFramebuffer(v.__webglFramebuffer[dt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let dt=0;dt<v.__webglColorRenderbuffer.length;dt++)v.__webglColorRenderbuffer[dt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[dt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let _t=T.textures;for(let dt=0,Dt=_t.length;dt<Dt;dt++){let bt=n.get(_t[dt]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),a.memory.textures--),n.remove(_t[dt])}n.remove(T)}let it=0;function ht(){it=0}function ft(){return it}function Ht(T){it=T}function ae(){let T=it;return T>=s.maxTextures&&ge("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),it+=1,T}function st(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function pt(T,v){let K=n.get(T);if(T.isVideoTexture&&Ke(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&K.__version!==T.version){let _t=T.image;if(_t===null)ge("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ge("WebGLRenderer: Texture marked for update but image is incomplete");else{It(K,T,v);return}}else T.isExternalTexture&&(K.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+v)}function mt(T,v){let K=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&K.__version!==T.version){It(K,T,v);return}else T.isExternalTexture&&(K.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+v)}function Ot(T,v){let K=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&K.__version!==T.version){It(K,T,v);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+v)}function kt(T,v){let K=n.get(T);if(T.version>0&&K.__version!==T.version){Xt(K,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+v)}let $t={[Hi]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},Ne={[_n]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[ia]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},ue={[mu]:i.NEVER,[Pc]:i.ALWAYS,[gu]:i.LESS,[Rc]:i.LEQUAL,[_u]:i.EQUAL,[Cc]:i.GEQUAL,[xu]:i.GREATER,[yu]:i.NOTEQUAL};function Se(T,v){if(v.type===Jn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===An||v.magFilter===Lo||v.magFilter===ia||v.magFilter===Di||v.minFilter===An||v.minFilter===Lo||v.minFilter===ia||v.minFilter===Di)&&ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,$t[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,$t[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,$t[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Ne[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Ne[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ue[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===_n||v.minFilter!==ia&&v.minFilter!==Di||v.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Re(T,v){let K=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",H),V(v));let _t=v.source,dt=d.get(_t);dt===void 0&&(dt={},d.set(_t,dt));let Dt=st(v);if(Dt!==T.__cacheKey){dt[Dt]===void 0&&(dt[Dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),dt[Dt].usedTimes++;let bt=dt[T.__cacheKey];bt!==void 0&&(dt[T.__cacheKey].usedTimes--,bt.usedTimes===0&&X(v)),T.__cacheKey=Dt,T.__webglTexture=dt[Dt].texture}return K}function ut(T,v,K){return Math.floor(Math.floor(T/K)/v)}function Lt(T,v,K,_t){let Dt=T.updateRanges;if(Dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,K,_t,v.data);else{Dt.sort((D,at)=>D.start-at.start);let bt=0;for(let D=1;D<Dt.length;D++){let at=Dt[bt],rt=Dt[D],At=at.start+at.count,yt=ut(rt.start,v.width,4),Tt=ut(at.start,v.width,4);rt.start<=At+1&&yt===Tt&&ut(rt.start+rt.count-1,v.width,4)===yt?at.count=Math.max(at.count,rt.start+rt.count-at.start):(++bt,Dt[bt]=rt)}Dt.length=bt+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),Ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let D=0,at=Dt.length;D<at;D++){let rt=Dt[D],At=Math.floor(rt.start/4),yt=Math.ceil(rt.count/4),Tt=At%v.width,ee=Math.floor(At/v.width),Te=yt,vt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ee),e.texSubImage2D(i.TEXTURE_2D,0,Tt,ee,Te,vt,K,_t,v.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Ut)}}function It(T,v,K){let _t=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(_t=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(_t=i.TEXTURE_3D);let dt=Re(T,v),Dt=v.source;e.bindTexture(_t,T.__webglTexture,i.TEXTURE0+K);let bt=n.get(Dt);if(Dt.version!==bt.__version||dt===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let vt=Be.getPrimaries(Be.workingColorSpace),ce=v.colorSpace===Ni?null:Be.getPrimaries(v.colorSpace),Ae=v.colorSpace===Ni||vt===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let lt=b(v.image,!1,s.maxTextureSize);lt=he(v,lt);let Ut=r.convert(v.format,v.colorSpace),D=r.convert(v.type),at=A(v.internalFormat,Ut,D,v.normalized,v.colorSpace,v.isVideoTexture);Se(_t,v);let rt,At=v.mipmaps,yt=v.isVideoTexture!==!0,Tt=bt.__version===void 0||dt===!0,ee=Dt.dataReady,Te=w(v,lt);if(v.isDepthTexture)at=_(v.format===Li,v.type),Tt&&(yt?e.texStorage2D(i.TEXTURE_2D,1,at,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,at,lt.width,lt.height,0,Ut,D,null));else if(v.isDataTexture)if(At.length>0){yt&&Tt&&e.texStorage2D(i.TEXTURE_2D,Te,at,At[0].width,At[0].height);for(let vt=0,ce=At.length;vt<ce;vt++)rt=At[vt],yt?ee&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,rt.width,rt.height,Ut,D,rt.data):e.texImage2D(i.TEXTURE_2D,vt,at,rt.width,rt.height,0,Ut,D,rt.data);v.generateMipmaps=!1}else yt?(Tt&&e.texStorage2D(i.TEXTURE_2D,Te,at,lt.width,lt.height),ee&&Lt(v,lt,Ut,D)):e.texImage2D(i.TEXTURE_2D,0,at,lt.width,lt.height,0,Ut,D,lt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){yt&&Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Te,at,At[0].width,At[0].height,lt.depth);for(let vt=0,ce=At.length;vt<ce;vt++)if(rt=At[vt],v.format!==oi)if(Ut!==null)if(yt){if(ee)if(v.layerUpdates.size>0){let Ae=Hc(rt.width,rt.height,v.format,v.type);for(let Gt of v.layerUpdates){let qe=rt.data.subarray(Gt*Ae/rt.data.BYTES_PER_ELEMENT,(Gt+1)*Ae/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Gt,rt.width,rt.height,1,Ut,qe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,rt.width,rt.height,lt.depth,Ut,rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,at,rt.width,rt.height,lt.depth,0,rt.data,0,0);else ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?ee&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,rt.width,rt.height,lt.depth,Ut,D,rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,at,rt.width,rt.height,lt.depth,0,Ut,D,rt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{yt&&Tt&&e.texStorage2D(i.TEXTURE_2D,Te,at,At[0].width,At[0].height);for(let vt=0,ce=At.length;vt<ce;vt++)rt=At[vt],v.format!==oi?Ut!==null?yt?ee&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,rt.width,rt.height,Ut,rt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,at,rt.width,rt.height,0,rt.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?ee&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,rt.width,rt.height,Ut,D,rt.data):e.texImage2D(i.TEXTURE_2D,vt,at,rt.width,rt.height,0,Ut,D,rt.data)}else if(v.isDataArrayTexture)if(yt){if(Tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Te,at,lt.width,lt.height,lt.depth),ee)if(v.layerUpdates.size>0){let vt=Hc(lt.width,lt.height,v.format,v.type);for(let ce of v.layerUpdates){let Ae=lt.data.subarray(ce*vt/lt.data.BYTES_PER_ELEMENT,(ce+1)*vt/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,lt.width,lt.height,1,Ut,D,Ae)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ut,D,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,at,lt.width,lt.height,lt.depth,0,Ut,D,lt.data);else if(v.isData3DTexture)yt?(Tt&&e.texStorage3D(i.TEXTURE_3D,Te,at,lt.width,lt.height,lt.depth),ee&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ut,D,lt.data)):e.texImage3D(i.TEXTURE_3D,0,at,lt.width,lt.height,lt.depth,0,Ut,D,lt.data);else if(v.isFramebufferTexture){if(Tt)if(yt)e.texStorage2D(i.TEXTURE_2D,Te,at,lt.width,lt.height);else{let vt=lt.width,ce=lt.height;for(let Ae=0;Ae<Te;Ae++)e.texImage2D(i.TEXTURE_2D,Ae,at,vt,ce,0,Ut,D,null),vt>>=1,ce>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let vt=i.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),lt.parentNode!==vt){vt.appendChild(lt),u.add(v),vt.onpaint=ce=>{let Ae=ce.changedElements;for(let Gt of u)Ae.includes(Gt.image)&&(Gt.needsUpdate=!0)},vt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let Ae=i.RGBA,Gt=i.RGBA,qe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,Gt,qe,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(yt&&Tt){let vt=ne(At[0]);e.texStorage2D(i.TEXTURE_2D,Te,at,vt.width,vt.height)}for(let vt=0,ce=At.length;vt<ce;vt++)rt=At[vt],yt?ee&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ut,D,rt):e.texImage2D(i.TEXTURE_2D,vt,at,Ut,D,rt);v.generateMipmaps=!1}else if(yt){if(Tt){let vt=ne(lt);e.texStorage2D(i.TEXTURE_2D,Te,at,vt.width,vt.height)}ee&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ut,D,lt)}else e.texImage2D(i.TEXTURE_2D,0,at,Ut,D,lt);E(v)&&v.mipmapsAutoUpdate===!0&&M(_t),bt.__version=Dt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Xt(T,v,K){if(v.image.length!==6)return;let _t=Re(T,v),dt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+K);let Dt=n.get(dt);if(dt.version!==Dt.__version||_t===!0){e.activeTexture(i.TEXTURE0+K);let bt=Be.getPrimaries(Be.workingColorSpace),ot=v.colorSpace===Ni?null:Be.getPrimaries(v.colorSpace),lt=v.colorSpace===Ni||bt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Ut=v.isCompressedTexture||v.image[0].isCompressedTexture,D=v.image[0]&&v.image[0].isDataTexture,at=[];for(let Gt=0;Gt<6;Gt++)!Ut&&!D?at[Gt]=b(v.image[Gt],!0,s.maxCubemapSize):at[Gt]=D?v.image[Gt].image:v.image[Gt],at[Gt]=he(v,at[Gt]);let rt=at[0],At=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),Tt=A(v.internalFormat,At,yt,v.normalized,v.colorSpace),ee=v.isVideoTexture!==!0,Te=Dt.__version===void 0||_t===!0,vt=dt.dataReady,ce=w(v,rt);Se(i.TEXTURE_CUBE_MAP,v);let Ae;if(v.isDepthTexture){if(Tt=_(v.format===Li,v.type),Te)if(ee)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Tt,rt.width,rt.height);else for(let Gt=0;Gt<6;Gt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Tt,rt.width,rt.height,0,At,yt,null)}else if(Ut){ee&&Te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Tt,rt.width,rt.height);for(let Gt=0;Gt<6;Gt++){Ae=at[Gt].mipmaps;for(let qe=0;qe<Ae.length;qe++){let an=Ae[qe];v.format!==oi?At!==null?ee?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,qe,0,0,an.width,an.height,At,an.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,qe,Tt,an.width,an.height,0,an.data):ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,qe,0,0,an.width,an.height,At,yt,an.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,qe,Tt,an.width,an.height,0,At,yt,an.data)}}}else{if(Ae=v.mipmaps,ee&&Te){Ae.length>0&&ce++;let Gt=ne(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Tt,Gt.width,Gt.height)}for(let Gt=0;Gt<6;Gt++)if(D){ee?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,0,0,at[Gt].width,at[Gt].height,At,yt,at[Gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Tt,at[Gt].width,at[Gt].height,0,At,yt,at[Gt].data);for(let qe=0;qe<Ae.length;qe++){let li=Ae[qe].image[Gt].image;ee?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,qe+1,0,0,li.width,li.height,At,yt,li.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,qe+1,Tt,li.width,li.height,0,At,yt,li.data)}}else{ee?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,0,0,At,yt,at[Gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,Tt,At,yt,at[Gt]);for(let qe=0;qe<Ae.length;qe++){let an=Ae[qe];ee?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,qe+1,0,0,At,yt,an.image[Gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,qe+1,Tt,At,yt,an.image[Gt])}}}E(v)&&v.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),Dt.__version=dt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function zt(T,v,K,_t,dt,Dt){let bt=r.convert(K.format,K.colorSpace),ot=r.convert(K.type),lt=A(K.internalFormat,bt,ot,K.normalized,K.colorSpace),Ut=n.get(v),D=n.get(K);if(D.__renderTarget=v,!Ut.__hasExternalTextures){let at=Math.max(1,v.width>>Dt),rt=Math.max(1,v.height>>Dt);dt===i.TEXTURE_3D||dt===i.TEXTURE_2D_ARRAY?e.texImage3D(dt,Dt,lt,at,rt,v.depth,0,bt,ot,null):e.texImage2D(dt,Dt,lt,at,rt,0,bt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_t,dt,D.__webglTexture,0,He(v)):(dt===i.TEXTURE_2D||dt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_t,dt,D.__webglTexture,Dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(T,v,K){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let _t=v.depthTexture,dt=_t&&_t.isDepthTexture?_t.type:null,Dt=_(v.stencilBuffer,dt),bt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Nt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(v),Dt,v.width,v.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(v),Dt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,T)}else{let _t=v.textures;for(let dt=0;dt<_t.length;dt++){let Dt=_t[dt],bt=r.convert(Dt.format,Dt.colorSpace),ot=r.convert(Dt.type),lt=A(Dt.internalFormat,bt,ot,Dt.normalized,Dt.colorSpace);Nt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(v),lt,v.width,v.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(v),lt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,lt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function te(T,v,K){let _t=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let dt=n.get(v.depthTexture);dt.__renderTarget=v;let Dt=_t?v.depthTexture.image[0]:v.depthTexture.image;(!dt.__webglTexture||Dt.width!==v.width||Dt.height!==v.height)&&(Dt.width=v.width,Dt.height=v.height,v.depthTexture.needsUpdate=!0),_t?kt(v.depthTexture,0):pt(v.depthTexture,0);let bt=dt.__webglTexture,ot=He(v),lt=_t?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,Ut=v.depthTexture.format===Li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ri)Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,lt,bt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,lt,bt,0);else if(v.depthTexture.format===Li)Nt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,lt,bt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,lt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(T){let v=n.get(T),K=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let _t=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),_t){let dt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,_t.removeEventListener("dispose",dt)};_t.addEventListener("dispose",dt),v.__depthDisposeCallback=dt}v.__boundDepthTexture=_t}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(K)for(let _t=0;_t<6;_t++)te(v.__webglFramebuffer[_t],T,_t);else T.texture.mipmaps.length>0?te(v.__webglFramebuffer[0],T,0):te(v.__webglFramebuffer,T,0);else if(K){v.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[_t]),v.__webglDepthbuffer[_t]===void 0)v.__webglDepthbuffer[_t]=i.createRenderbuffer(),me(v.__webglDepthbuffer[_t],T,!1);else{let dt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=v.__webglDepthbuffer[_t];i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Dt)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),me(v.__webglDepthbuffer,T,!1);else{let dt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,Dt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function De(T,v,K){let _t=n.get(T);v!==void 0&&zt(_t.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&be(T)}function Pe(T){let v=T.texture,K=n.get(T),_t=n.get(v);T.addEventListener("dispose",J),V(T);let dt=T.textures,Dt=T.isWebGLCubeRenderTarget===!0,bt=dt.length>1;if(bt||(_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture()),_t.__version=v.version,a.memory.textures++),Dt){K.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps.length>0){K.__webglFramebuffer[ot]=[];for(let lt=0;lt<v.mipmaps.length;lt++)K.__webglFramebuffer[ot][lt]=i.createFramebuffer()}else K.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(v.mipmaps.length>0){K.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)K.__webglFramebuffer[ot]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ot=0,lt=dt.length;ot<lt;ot++){let Ut=n.get(dt[ot]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Nt(T)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ot=0;ot<dt.length;ot++){let lt=dt[ot];K.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ot]);let Ut=r.convert(lt.format,lt.colorSpace),D=r.convert(lt.type),at=A(lt.internalFormat,Ut,D,lt.normalized,lt.colorSpace,T.isXRRenderTarget===!0),rt=He(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,at,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,K.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),me(K.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Dt){e.bindTexture(i.TEXTURE_CUBE_MAP,_t.__webglTexture),Se(i.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps.length>0)for(let lt=0;lt<v.mipmaps.length;lt++)zt(K.__webglFramebuffer[ot][lt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,lt);else zt(K.__webglFramebuffer[ot],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);E(v)?M(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(bt){for(let ot=0,lt=dt.length;ot<lt;ot++){let Ut=dt[ot],D=n.get(Ut),at=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(at=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,D.__webglTexture),Se(at,Ut),zt(K.__webglFramebuffer,T,Ut,i.COLOR_ATTACHMENT0+ot,at,0),E(Ut)&&M(at)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,_t.__webglTexture),Se(ot,v),v.mipmaps.length>0)for(let lt=0;lt<v.mipmaps.length;lt++)zt(K.__webglFramebuffer[lt],T,v,i.COLOR_ATTACHMENT0,ot,lt);else zt(K.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ot,0);E(v)?M(ot):v.mipmaps.length>0&&i.texParameteri(ot,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&be(T)}function k(T){let v=T.textures;for(let K=0,_t=v.length;K<_t;K++){let dt=v[K];if(E(dt)&&dt.mipmapsAutoUpdate===!0){let Dt=R(T),bt=n.get(dt).__webglTexture;e.bindTexture(Dt,bt),M(Dt),e.unbindTexture()}}}let Qe=[];function Ee(T){if(T.samples>0){if(Nt(T)===!1){let v=T.textures,K=T.width,_t=T.height,dt=i.COLOR_BUFFER_BIT,Dt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(T),ot=v.length>1;if(ot)for(let Ut=0;Ut<v.length;Ut++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ut=0;Ut<v.length;Ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(dt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(dt|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ut]);let D=n.get(v[Ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,K,_t,0,0,K,_t,dt,i.NEAREST),l===!0&&(Qe.length=0,Qe.push(i.COLOR_ATTACHMENT0+Ut),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Qe.push(Dt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let Ut=0;Ut<v.length;Ut++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Ut]);let D=n.get(v[Ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ut,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function He(T){return Math.min(s.maxSamples,T.samples)}function Nt(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ke(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function he(T,v){let K=T.colorSpace,_t=T.format,dt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||K!==Sr&&K!==Ni&&(Be.getTransfer(K)===Ze?(_t!==oi||dt!==In)&&ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_e("WebGLTextures: Unsupported texture color space:",K)),v}function ne(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=ht,this.getTextureUnits=ft,this.setTextureUnits=Ht,this.setTexture2D=pt,this.setTexture2DArray=mt,this.setTexture3D=Ot,this.setTextureCube=kt,this.rebindTextures=De,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=Nt,this.dispose=tt}function O_(i,t){function e(n,s=Ni){let r,a=Be.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sc)return i.BYTE;if(n===bc)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===Tc)return i.ALPHA;if(n===Ac)return i.RGB;if(n===oi)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===Ki)return i.RG;if(n===ko)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===Ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ho||n===Go||n===Vo||n===Wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===la||n===Ko)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return r.COMPRESSED_R11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===Ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$o||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===dl||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===ca||n===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var B_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`,Kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mi({vertexShader:B_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends ni{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new Kc,p={},b=e.getContextAttributes(),E=null,M=null,R=[],A=[],_=new gt,w=null,V=null,L=new yn;L.viewport=new je;let H=new yn;H.viewport=new je;let J=[L,H],j=new Ro,P=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let pt=R[st];return pt===void 0&&(pt=new ks,R[st]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(st){let pt=R[st];return pt===void 0&&(pt=new ks,R[st]=pt),pt.getGripSpace()},this.getHand=function(st){let pt=R[st];return pt===void 0&&(pt=new ks,R[st]=pt),pt.getHandSpace()};function G(st){let pt=A.indexOf(st.inputSource);if(pt===-1)return;let mt=R[pt];mt!==void 0&&(mt.update(st.inputSource,st.frame,c||a),mt.dispatchEvent({type:st.type,data:st.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ct);for(let st=0;st<R.length;st++){let pt=A[st];pt!==null&&(A[st]=null,R[st].disconnect(pt))}P=null,tt=null,m.reset();for(let st in p)delete p[st];if(t.setRenderTarget(E),d=null,f=null,u=null,s=null,M=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),V!==null){let st=V.camera;st.fov=V.fov,st.zoom=V.zoom,st.updateProjectionMatrix(),V=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,n.isPresenting===!0&&ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ct),b.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ot=null,kt=null;b.depth&&(kt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=b.stencil?Li:Ri,Ot=b.stencil?fs:ri);let $t={colorFormat:e.RGBA8,depthFormat:kt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer($t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new kn(f.textureWidth,f.textureHeight,{format:oi,type:In,depthTexture:new Ii(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new kn(d.framebufferWidth,d.framebufferHeight,{format:oi,type:In,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ct(st){for(let pt=0;pt<st.removed.length;pt++){let mt=st.removed[pt],Ot=A.indexOf(mt);Ot>=0&&(A[Ot]=null,R[Ot].disconnect(mt))}for(let pt=0;pt<st.added.length;pt++){let mt=st.added[pt],Ot=A.indexOf(mt);if(Ot===-1){for(let $t=0;$t<R.length;$t++)if($t>=A.length){A.push(mt),Ot=$t;break}else if(A[$t]===null){A[$t]=mt,Ot=$t;break}if(Ot===-1)break}let kt=R[Ot];kt&&kt.connect(mt)}}function it(st,pt){pt===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(pt.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let pt=st.near,mt=st.far;m.texture!==null&&(m.depthNear>0&&(pt=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),j.near=H.near=L.near=pt,j.far=H.far=L.far=mt,(P!==j.near||tt!==j.far)&&(s.updateRenderState({depthNear:j.near,depthFar:j.far}),P=j.near,tt=j.far),j.layers.mask=st.layers.mask|6,L.layers.mask=j.layers.mask&-5,H.layers.mask=j.layers.mask&-3;let Ot=st.parent,kt=j.cameras;it(j,Ot);for(let $t=0;$t<kt.length;$t++)it(kt[$t],Ot);j.projectionMatrix.copy(L.projectionMatrix),j.projectionMatrixInverse.copy(L.projectionMatrixInverse),V===null&&st.isPerspectiveCamera&&(V={camera:st,fov:st.fov,zoom:st.zoom}),ht(st,j,Ot)};function ht(st,pt,mt){mt===null?st.matrix.copy(pt.matrixWorld):(st.matrix.copy(mt.matrixWorld),st.matrix.invert(),st.matrix.multiply(pt.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(pt.projectionMatrix),st.projectionMatrixInverse.copy(pt.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Os*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(j)},this.getCameraTexture=function(st){return p[st]};let ft=null;function Ht(st,pt){if(h=pt.getViewerPose(c||a),g=pt,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ot=!1;mt.length!==j.cameras.length&&(j.cameras.length=0,Ot=!0);for(let ue=0;ue<mt.length;ue++){let Se=mt[ue],Re=null;if(d!==null)Re=d.getViewport(Se);else{let Lt=u.getViewSubImage(f,Se);Re=Lt.viewport,ue===0&&(t.setRenderTargetTextures(M,Lt.colorTexture,Lt.depthStencilTexture),t.setRenderTarget(M))}let ut=J[ue];ut===void 0&&(ut=new yn,ut.layers.enable(ue),ut.viewport=new je,J[ue]=ut),ut.matrix.fromArray(Se.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Se.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Re.x,Re.y,Re.width,Re.height),ue===0&&(j.matrix.copy(ut.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Ot===!0&&j.cameras.push(ut)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let ue=u.getDepthInformation(mt[0]);ue&&ue.isValid&&ue.texture&&m.init(ue,s.renderState)}if(kt&&kt.includes("camera-access")&&y){t.state.unbindTexture(),u=n.getBinding();for(let ue=0;ue<mt.length;ue++){let Se=mt[ue].camera;if(Se){let Re=p[Se];Re||(Re=new Ur,p[Se]=Re);let ut=u.getCameraImage(Se);Re.sourceTexture=ut}}}}for(let mt=0;mt<R.length;mt++){let Ot=A[mt],kt=R[mt];Ot!==null&&kt!==void 0&&kt.update(Ot,pt,c||a)}ft&&ft(st,pt),pt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pt}),g=null}let ae=new nd;ae.setAnimationLoop(Ht),this.setAnimationLoop=function(st){ft=st},this.dispose=function(){}}},z_=new We,dd=new ve;dd.set(-1,0,0,0,1,0,0,0,1);function H_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),E=b.envMap,M=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,t,e,n){let s={},r={};function a(b,E){let M=E.program;n.uniformBlockBinding(b,M,s[b.id])}function o(b,E){let M=s[b.id];M===void 0&&(g(b),M=l(b),s[b.id]=M,b.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(b,R);let A=t.render.frame;r[b.id]!==A&&(c(b),r[b.id]=A)}function l(b){let E=i.createBuffer(),M=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(b){let E=s[b.id],M=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,_=M.length;A<_;A++){let w=M[A];if(Array.isArray(w))for(let V=0,L=w.length;V<L;V++)h(w[V],A,V,R);else h(w,A,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,E,M,R){if(f(b,E,M,R)===!0){let A=b.__offset,_=b.value;if(Array.isArray(_)){let w=0;for(let V=0;V<_.length;V++){let L=_[V],H=y(L,!0);u(L,b.__data,w),w+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,b.__data)}}function u(b,E,M){typeof b=="number"||typeof b=="boolean"?E[M]=b:b.isMatrix3?(E[M]=b.elements[0],E[M+1]=b.elements[1],E[M+2]=b.elements[2],E[M+3]=0,E[M+4]=b.elements[3],E[M+5]=b.elements[4],E[M+6]=b.elements[5],E[M+7]=0,E[M+8]=b.elements[6],E[M+9]=b.elements[7],E[M+10]=b.elements[8],E[M+11]=0):ArrayBuffer.isView(b)?E.set(b.subarray(0,E.length-M),M):b.toArray(E,M)}function f(b,E,M,R){let A=b.value,_=E+"_"+M;if(Array.isArray(A)){R[_]===void 0&&(R[_]=[]);let w=R[_],V=!1;for(let L=0;L<A.length;L++)d(A[L],w,L)===!0&&(V=!0);return V}return d(A,R,_)}function d(b,E,M){if(E[M]===void 0)return typeof b=="number"||typeof b=="boolean"?E[M]=b:ArrayBuffer.isView(b)?E[M]=b.slice():E[M]=b.clone(),!0;{let R=E[M];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return E[M]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function g(b){let E=b.uniforms,M=0,R=16;for(let _=0,w=E.length;_<w;_++){let V=Array.isArray(E[_])?E[_]:[E[_]];for(let L=0,H=V.length;L<H;L++){let J=V[L],j=Array.isArray(J.value)?J.value:[J.value],P=Array.isArray(E[_])||Array.isArray(J.value),tt=M;for(let X=0,ct=j.length;X<ct;X++){let it=j[X],ht=y(it,P),ft=M%R,Ht=ft%ht.boundary,ae=ft+Ht;M+=Ht,ae!==0&&R-ae<ht.storage&&(M+=R-ae),X===0&&(tt=M),M+=ht.storage}let G=J.type==="int"?Int32Array:J.type==="uint"?Uint32Array:Float32Array;J.__data=new G((M-tt)/Float32Array.BYTES_PER_ELEMENT),J.__offset=tt}}let A=M%R;return A>0&&(M+=R-A),b.__size=M,b.__cache={},this}function y(b,E){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=16,M.storage=48):b.isMatrix4?(M.boundary=16,M.storage=64):b.isTexture?ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):ge("WebGLRenderer: Unsupported uniform value type.",b),E===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(b){let E=b.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:p}}var V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_i=null;function W_(){return _i===null&&(_i=new Pr(V_,16,16,Ki,ai),_i.name="DFG_LUT",_i.minFilter=An,_i.magFilter=An,_i.wrapS=Xn,_i.wrapT=Xn,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}var pa=class{constructor(t={}){let{canvas:e=Mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=d,m=new Set([zo,ko,Bo]),p=new Set([In,ri,js,fs,Uo,Fo]),b=new Uint32Array(4),E=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},R=null,A=null,_=[],w=[],V=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,H=!1,J=null,j=null,P=null,tt=null;this._outputColorSpace=hn;let G=0,X=0,ct=null,it=-1,ht=null,ft=new je,Ht=new je,ae=null,st=new Me(0),pt=0,mt=e.width,Ot=e.height,kt=1,$t=null,Ne=null,ue=new je(0,0,mt,Ot),Se=new je(0,0,mt,Ot),Re=!1,ut=new Vi,Lt=new lo,It=!1,Xt=!1,zt=new We,me=new F,te=new je,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function Pe(){return ct===null?kt:1}let k=n;function Qe(S,O){return e.getContext(S,O)}let Ee,He,Nt,Ke,he,ne,T,v,K,_t,dt,Dt,bt,ot,lt,Ut,D,at,rt,At,yt,Tt,ee;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",ce,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Gt,!1),k===null){let O="webgl2";if(k=Qe(O,S),k===null)throw Qe(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(S){throw e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),_e("WebGLRenderer: "+S.message),S}function Te(){Ee=new eg(k),Ee.init(),yt=new O_(k,Ee),He=new W0(k,Ee,t,yt),Nt=new U_(k,Ee),He.reversedDepthBuffer&&f&&Nt.buffers.depth.setReversed(!0),j=k.createFramebuffer(),P=k.createFramebuffer(),tt=k.createFramebuffer(),Ke=new sg(k),he=new M_,ne=new F_(k,Ee,Nt,he,He,yt,Ke),T=new tg(L),v=new ap(k),Tt=new G0(k,v),K=new ng(k,v,Ke,Tt),_t=new ag(k,K,v,Tt,Ke),at=new rg(k,He,ne),lt=new X0(he),dt=new v_(L,T,Ee,He,Tt,lt),Dt=new H_(L,he),bt=new b_,ot=new C_(Ee),D=new H0(L,T,Nt,_t,g,l),Ut=new N_(L,_t,He),ee=new G_(k,Ke,He,Nt),rt=new V0(k,Ee,Ke),At=new ig(k,Ee,Ke),Ke.programs=dt.programs,L.capabilities=He,L.extensions=Ee,L.properties=he,L.renderLists=bt,L.shadowMap=Ut,L.state=Nt,L.info=Ke}y!==In&&(V=new lg(y,e.width,e.height,o,s,r));let vt=new $c(L,k);this.xr=vt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=Ee.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ee.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return kt},this.setPixelRatio=function(S){S!==void 0&&(kt=S,this.setSize(mt,Ot,!1))},this.getSize=function(S){return S.set(mt,Ot)},this.setSize=function(S,O,et=!0){if(vt.isPresenting){ge("WebGLRenderer: Can't change size while VR device is presenting.");return}mt=S,Ot=O,e.width=Math.floor(S*kt),e.height=Math.floor(O*kt),et===!0&&(e.style.width=S+"px",e.style.height=O+"px"),V!==null&&V.setSize(e.width,e.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(mt*kt,Ot*kt).floor()},this.setDrawingBufferSize=function(S,O,et){mt=S,Ot=O,kt=et,e.width=Math.floor(S*et),e.height=Math.floor(O*et),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(y===In){_e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}V.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ft)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,O,et,Y){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,O,et,Y),Nt.viewport(ft.copy(ue).multiplyScalar(Pe()).round())},this.getScissor=function(S){return S.copy(Se)},this.setScissor=function(S,O,et,Y){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,O,et,Y),Nt.scissor(Ht.copy(Se).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(S){Nt.setScissorTest(Re=S)},this.setOpaqueSort=function(S){$t=S},this.setTransparentSort=function(S){Ne=S},this.getClearColor=function(S){return S.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,et=!0){let Y=0;if(S){let Z=!1;if(ct!==null){let Bt=ct.texture.format;Z=m.has(Bt)}if(Z){let Bt=ct.texture.type,jt=p.has(Bt),Ft=D.getClearColor(),Vt=D.getClearAlpha(),ie=Ft.r,xe=Ft.g,Le=Ft.b;jt?(b[0]=ie,b[1]=xe,b[2]=Le,b[3]=Vt,k.clearBufferuiv(k.COLOR,0,b)):(E[0]=ie,E[1]=xe,E[2]=Le,E[3]=Vt,k.clearBufferiv(k.COLOR,0,E))}else Y|=k.COLOR_BUFFER_BIT}O&&(Y|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),J=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ce,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Gt,!1),D.dispose(),bt.dispose(),ot.dispose(),ne.dispose(),he.dispose(),T.dispose(),_t.dispose(),K.dispose(),Tt.dispose(),ee.dispose(),dt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",$n),vt.removeEventListener("sessionend",Pn),Tn.stop()};function ce(S){S.preventDefault(),Dc("WebGLRenderer: Context Lost."),H=!0}function Ae(){Dc("WebGLRenderer: Context Restored."),H=!1;let S=Ke.autoReset,O=Ut.enabled,et=Ut.autoUpdate,Y=Ut.needsUpdate,Z=Ut.type;Te(),Ke.autoReset=S,Ut.enabled=O,Ut.autoUpdate=et,Ut.needsUpdate=Y,Ut.type=Z}function Gt(S){_e("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function qe(S){let O=S.target;O.removeEventListener("dispose",qe),an(O)}function an(S){li(S),he.remove(S)}function li(S){let O=he.get(S).programs;O!==void 0&&(O.forEach(function(et){dt.releaseProgram(et)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,et,Y,Z,Bt){O===null&&(O=be);let jt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Ft=Tl(S,O,et,Y,Z);Nt.setMaterial(Y,jt);let Vt=et.index,ie=1;if(Y.wireframe===!0){if(Vt=K.getWireframeAttribute(et),Vt===void 0)return;ie=2}let xe=et.drawRange,Le=et.attributes.position,x=xe.start*ie,C=(xe.start+xe.count)*ie;Bt!==null&&(x=Math.max(x,Bt.start*ie),C=Math.min(C,(Bt.start+Bt.count)*ie)),Vt!==null?(x=Math.max(x,0),C=Math.min(C,Vt.count)):Le!=null&&(x=Math.max(x,0),C=Math.min(C,Le.count));let U=C-x;if(U<0||U===1/0)return;Tt.setup(Z,Y,Ft,et,Vt);let N,B=rt;if(Vt!==null&&(N=v.get(Vt),B=At,B.setIndex(N)),Z.isMesh)Y.wireframe===!0?(Nt.setLineWidth(Y.wireframeLinewidth*Pe()),B.setMode(k.LINES)):B.setMode(k.TRIANGLES);else if(Z.isLine){let nt=Y.linewidth;nt===void 0&&(nt=1),Nt.setLineWidth(nt*Pe()),Z.isLineSegments?B.setMode(k.LINES):Z.isLineLoop?B.setMode(k.LINE_LOOP):B.setMode(k.LINE_STRIP)}else Z.isPoints?B.setMode(k.POINTS):Z.isSprite&&B.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))B.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let nt=Z._multiDrawStarts,W=Z._multiDrawCounts,Q=Z._multiDrawCount,$=Vt?v.get(Vt).bytesPerElement:1,wt=he.get(Y).currentProgram.getUniforms();for(let Rt=0;Rt<Q;Rt++)wt.setValue(k,"_gl_DrawID",Rt),B.render(nt[Rt]/$,W[Rt])}else if(Z.isInstancedMesh)B.renderInstances(x,U,Z.count);else if(et.isInstancedBufferGeometry){let nt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,W=Math.min(et.instanceCount,nt);B.renderInstances(x,U,W)}else B.render(x,U)};function nn(S,O,et,Y){J!==null&&S.isNodeMaterial&&J.setObject(Y,S),It===!0&&lt.setState(S,et,!1),S.transparent===!0&&S.side===Zn&&S.forceSinglePass===!1?(S.side=Mn,S.needsUpdate=!0,yi(S,O,Y),S.side=Ji,S.needsUpdate=!0,yi(S,O,Y),S.side=Zn):yi(S,O,Y)}this.compile=function(S,O,et=null){et===null&&(et=S),J!==null&&J.renderStart(S,O,et),A=ot.get(et),A.init(O),w.push(A),et.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),S!==et&&S.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(A.pushLight(Z),Z.castShadow&&A.pushShadow(Z))}),A.setupLights(),J!==null&&J.updateLights(A.state.lightsArray),Xt=this.localClippingEnabled,It=lt.init(this.clippingPlanes,Xt),It===!0&&lt.setGlobalState(this.clippingPlanes,O),J!==null&&Ut.render(A.state.shadowsArray,et,O);let Y=new Set;return S.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Bt=Z.material;if(Bt)if(Array.isArray(Bt))for(let jt=0;jt<Bt.length;jt++){let Ft=Bt[jt];nn(Ft,et,O,Z),Y.add(Ft)}else nn(Bt,et,O,Z),Y.add(Bt)}),A=w.pop(),J!==null&&J.renderEnd(),Y},this.compileAsync=function(S,O,et=null){let Y=this.compile(S,O,et);return new Promise(Z=>{function Bt(){if(Y.forEach(function(jt){let Vt=he.get(jt).currentProgram;(Vt===void 0||Vt.isReady())&&Y.delete(jt)}),Y.size===0){Z(S);return}setTimeout(Bt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ge=null;function Vn(S){Ge&&Ge(S)}function $n(){Tn.stop()}function Pn(){Tn.start()}let Tn=new nd;Tn.setAnimationLoop(Vn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(S){Ge=S,vt.setAnimationLoop(S),S===null?Tn.stop():Tn.start()},vt.addEventListener("sessionstart",$n),vt.addEventListener("sessionend",Pn),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){_e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;J!==null&&J.renderStart(S,O);let et=vt.enabled===!0&&vt.isPresenting===!0,Y=V!==null&&(ct===null||et)&&V.begin(L,ct);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(V===null||V.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(O),O=vt.getCamera()),S.isScene===!0&&S.onBeforeRender(L,S,O,ct),A=ot.get(S,w.length),A.init(O),A.state.textureUnits=ne.getTextureUnits(),w.push(A),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Lt.setFromArrayCamera(O):ut.setFromProjectionMatrix(zt,qn,O.reversedDepth),Xt=this.localClippingEnabled,It=lt.init(this.clippingPlanes,Xt),R=bt.get(S,_.length),R.init(),_.push(R),this.info.render.frame++,vt.enabled===!0&&vt.isPresenting===!0){let jt=L.xr.getDepthSensingMesh();jt!==null&&jn(jt,O,-1/0,L.sortObjects)}jn(S,O,0,L.sortObjects),R.finish(),J!==null&&J.updateLights(A.state.lightsArray),L.sortObjects===!0&&R.sort($t,Ne),De=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,De&&D.addToRenderList(R,S),this.info.autoReset===!0&&this.info.reset(),It===!0&&lt.beginShadows();let Z=A.state.shadowsArray;if(Ut.render(Z,S,O),It===!0&&lt.endShadows(),(Y&&V.hasRenderPass())===!1){let jt=R.opaque,Ft=R.transmissive;if(A.setupLights(),O.isArrayCamera){let Vt=O.cameras;if(Ft.length>0)for(let ie=0,xe=Vt.length;ie<xe;ie++){let Le=Vt[ie];va(jt,Ft,S,Le)}De&&D.render(S);for(let ie=0,xe=Vt.length;ie<xe;ie++){let Le=Vt[ie];ya(R,S,Le,Le.viewport)}}else Ft.length>0&&va(jt,Ft,S,O),De&&D.render(S),ya(R,S,O)}ct!==null&&X===0&&(ne.updateMultisampleRenderTarget(ct),ne.updateRenderTargetMipmap(ct)),Y&&V.end(L),S.isScene===!0&&S.onAfterRender(L,S,O),Tt.resetDefaultState(),it=-1,ht=null,w.pop(),w.length>0?(A=w[w.length-1],ne.setTextureUnits(A.state.textureUnits),It===!0&&lt.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,J!==null&&J.renderEnd()};function jn(S,O,et,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)et=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){let jt=O.isArrayCamera?Lt:ut;if(!S.frustumCulled||S.intersectsFrustum(jt)){Y&&te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(zt);let Ft=_t.update(S),Vt=S.material;Vt.visible&&R.push(S,Ft,Vt,et,te.z,null,O)}}else if(S.isMesh||S.isLine||S.isPoints){let jt=O.isArrayCamera?Lt:ut;if(!S.frustumCulled||S.intersectsFrustum(jt)){let Ft=_t.update(S),Vt=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),te.copy(S.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),te.copy(Ft.boundingSphere.center)),te.applyMatrix4(S.matrixWorld).applyMatrix4(zt)),Array.isArray(Vt)){let ie=Ft.groups;for(let xe=0,Le=ie.length;xe<Le;xe++){let x=ie[xe],C=Vt[x.materialIndex];C&&C.visible&&R.push(S,Ft,C,et,te.z,x,O)}}else Vt.visible&&R.push(S,Ft,Vt,et,te.z,null,O)}}}let Bt=S.children;for(let jt=0,Ft=Bt.length;jt<Ft;jt++)jn(Bt[jt],O,et,Y)}function ya(S,O,et,Y){let{opaque:Z,transmissive:Bt,transparent:jt}=S;A.setupLightsView(et),It===!0&&lt.setGlobalState(L.clippingPlanes,et),Y&&Nt.viewport(ft.copy(Y)),Z.length>0&&xs(Z,O,et),Bt.length>0&&xs(Bt,O,et),jt.length>0&&xs(jt,O,et),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function va(S,O,et,Y){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Y.id]===void 0){let x=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Y.id]=new kn(1,1,{generateMipmaps:!0,type:x?ai:In,minFilter:Di,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Be.workingColorSpace})}let Bt=A.state.transmissionRenderTarget[Y.id],jt=Y.viewport||ft;Bt.setSize(jt.z*L.transmissionResolutionScale,jt.w*L.transmissionResolutionScale);let Ft=L.getRenderTarget(),Vt=L.getActiveCubeFace(),ie=L.getActiveMipmapLevel();L.setRenderTarget(Bt),L.getClearColor(st),pt=L.getClearAlpha(),pt<1&&L.setClearColor(16777215,.5),L.clear(),De&&D.render(et);let xe=L.toneMapping;L.toneMapping=gi;let Le=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),A.setupLightsView(Y),It===!0&&lt.setGlobalState(L.clippingPlanes,Y),xs(S,et,Y),ne.updateMultisampleRenderTarget(Bt),ne.updateRenderTargetMipmap(Bt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let x=!1;for(let C=0,U=O.length;C<U;C++){let N=O[C],{object:B,geometry:nt,material:W,group:Q}=N;if(W.side===Zn&&B.layers.test(Y.layers)){let $=W.side;W.side=Mn,W.needsUpdate=!0,Ma(B,et,Y,nt,W,Q),W.side=$,W.needsUpdate=!0,x=!0}}x===!0&&(ne.updateMultisampleRenderTarget(Bt),ne.updateRenderTargetMipmap(Bt))}L.setRenderTarget(Ft,Vt,ie),L.setClearColor(st,pt),Le!==void 0&&(Y.viewport=Le),L.toneMapping=xe}function xs(S,O,et){let Y=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Bt=S.length;Z<Bt;Z++){let jt=S[Z],{object:Ft,geometry:Vt,group:ie}=jt,xe=jt.material;xe.allowOverride===!0&&Y!==null&&(xe=Y),Ft.layers.test(et.layers)&&Ma(Ft,O,et,Vt,xe,ie)}}function Ma(S,O,et,Y,Z,Bt){J!==null&&Z.isNodeMaterial&&J.setObject(S,Z),S.onBeforeRender(L,O,et,Y,Z,Bt),S.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Z.onBeforeRender(L,O,et,Y,S,Bt),Z.transparent===!0&&Z.side===Zn&&Z.forceSinglePass===!1?(Z.side=Mn,Z.needsUpdate=!0,L.renderBufferDirect(et,O,Y,Z,S,Bt),Z.side=Ji,Z.needsUpdate=!0,L.renderBufferDirect(et,O,Y,Z,S,Bt),Z.side=Zn):L.renderBufferDirect(et,O,Y,Z,S,Bt),S.onAfterRender(L,O,et,Y,Z,Bt)}function ji(S){let O=0;for(let et of S)et.texture!==null&&O++;return O}function yi(S,O,et){O.isScene!==!0&&(O=be);let Y=he.get(S),Z=A.state.lights,Bt=A.state.shadowsArray,jt=Z.state.version,Ft=dt.getParameters(S,Z.state,Bt,O,et,A.state.lightProbeGridArray),Vt=dt.getProgramCacheKey(Ft),ie=Y.programs;Y.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let xe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;Y.envMap=T.get(S.envMap||Y.environment,xe),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,ie===void 0&&(S.addEventListener("dispose",qe),ie=new Map,Y.programs=ie,Y.programVariants=new Map);let Le=ie.get(Vt);if(Le!==void 0){if(Y.currentProgram===Le&&Y.lightsStateVersion===jt)return Qi(S,Ft),Le}else Ft.uniforms=dt.getUniforms(S),J!==null&&S.isNodeMaterial&&J.build(S,et,Ft),S.onBeforeCompile(Ft,L),Le=dt.acquireProgram(Ft,Vt),ie.set(Vt,Le),Y.uniforms=Ft.uniforms;let x=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(x.clippingPlanes=lt.uniform),Qi(S,Ft),Y.needsLights=ar(S),Y.lightsStateVersion=jt,Y.needsLights&&(x.ambientLightColor.value=Z.state.ambient,x.lightProbe.value=Z.state.probe,x.sunLights.value=Z.state.sun,x.sunLightShadows.value=Z.state.sunShadow,x.directionalLights.value=Z.state.directional,x.directionalLightShadows.value=Z.state.directionalShadow,x.spotLights.value=Z.state.spot,x.spotLightShadows.value=Z.state.spotShadow,x.rectAreaLights.value=Z.state.rectArea,x.ltc_1.value=Z.state.rectAreaLTC1,x.ltc_2.value=Z.state.rectAreaLTC2,x.pointLights.value=Z.state.point,x.pointLightShadows.value=Z.state.pointShadow,x.hemisphereLights.value=Z.state.hemi,x.sunShadowMatrix.value=Z.state.sunShadowMatrix,x.sunShadowCascade.value=Z.state.sunShadowCascade,x.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,x.spotLightMatrix.value=Z.state.spotLightMatrix,x.spotLightMap.value=Z.state.spotLightMap,x.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.numLightProbeGrids=ji(A.state.lightProbeGridArray),Y.currentProgram=Le,Y.uniformsList=null,Le}function El(S,O,et,Y,Z){let Bt=he.get(S),jt=Bt.currentProgram.id+","+Y+","+Z,Ft=Bt.programVariants.get(jt);return Ft===void 0?(Ft=yi(S,O,et),Bt.programVariants.set(jt,Ft)):(Bt.currentProgram=Ft,Bt.uniformsList=null,Bt.outputColorSpace=Y,Bt.toneMapping=Z),Ft}function ci(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=Qs.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Qi(S,O){let et=he.get(S);et.outputColorSpace=O.outputColorSpace,et.batching=O.batching,et.batchingColor=O.batchingColor,et.instancing=O.instancing,et.instancingColor=O.instancingColor,et.instancingMorph=O.instancingMorph,et.skinning=O.skinning,et.morphTargets=O.morphTargets,et.morphNormals=O.morphNormals,et.morphColors=O.morphColors,et.morphTargetsCount=O.morphTargetsCount,et.numClippingPlanes=O.numClippingPlanes,et.numIntersection=O.numClipIntersection,et.vertexAlphas=O.vertexAlphas,et.vertexTangents=O.vertexTangents,et.toneMapping=O.toneMapping}function Tl(S,O,et,Y,Z){O.isScene!==!0&&(O=be),ne.resetTextureUnits();let Bt=O.fog,jt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,Ft=ct===null?L.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Be.workingColorSpace,Vt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,ie=T.get(Y.envMap||jt,Vt),xe=Y.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Le=!!et.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),x=!!et.morphAttributes.position,C=!!et.morphAttributes.normal,U=!!et.morphAttributes.color,N=gi;Y.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(N=L.toneMapping);let B=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,nt=B!==void 0?B.length:0,W=he.get(Y),Q=A.state.lights;if(It===!0&&(Xt===!0||S!==ht)){let de=S===ht&&Y.id===it;lt.setState(Y,S,de)}let $=!1,wt=!1;Y.version===W.__version?W.needsLights&&W.lightsStateVersion!==Q.state.version||Z.isBatchedMesh&&W.batching===!1||!Z.isBatchedMesh&&W.batching===!0||Z.isBatchedMesh&&W.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&W.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&W.instancing===!1||!Z.isInstancedMesh&&W.instancing===!0||Z.isSkinnedMesh&&W.skinning===!1||!Z.isSkinnedMesh&&W.skinning===!0||Z.isInstancedMesh&&W.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&W.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&W.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&W.instancingMorph===!1&&Z.morphTexture!==null||W.envMap!==ie||Y.fog===!0&&W.fog!==Bt||W.numClippingPlanes!==void 0&&(W.numClippingPlanes!==lt.numPlanes||W.numIntersection!==lt.numIntersection)||W.vertexAlphas!==xe||W.vertexTangents!==Le||W.morphTargets!==x||W.morphNormals!==C||W.morphColors!==U||W.morphTargetsCount!==nt||W.numLightProbeGrids!==ji(A.state.lightProbeGridArray)?$=!0:(W.outputColorSpace!==Ft||W.toneMapping!==N)&&(wt=!0):($=!0,W.__version=Y.version);let Rt=W.currentProgram;($===!0||wt===!0)&&(Rt=wt===!0?El(Y,O,Z,Ft,N):yi(Y,O,Z),J&&Y.isNodeMaterial&&J.onUpdateProgram(Y,Rt,W));let Kt=!1,ye=!1,ke=!1,Et=Rt.getUniforms(),fe=W.uniforms;if(Nt.useProgram(Rt.program)&&(Kt=!0,ye=!0,ke=!0),Y.id!==it&&(it=Y.id,ye=!0),Kt||ht!==S){Nt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Et.setValue(k,"projectionMatrix",S.projectionMatrix),Et.setValue(k,"viewMatrix",S.matrixWorldInverse);let Mt=Et.map.cameraPosition;Mt!==void 0&&Mt.setValue(k,me.setFromMatrixPosition(S.matrixWorld)),He.logarithmicDepthBuffer&&Et.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Et.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),ht!==S&&(ht=S,ye=!0,ke=!0)}if(W.needsLights&&(Q.state.sunShadowMap.length>0&&Et.setValue(k,"sunShadowMap",Q.state.sunShadowMap,ne),Q.state.directionalShadowMap.length>0&&Et.setValue(k,"directionalShadowMap",Q.state.directionalShadowMap,ne),Q.state.spotShadowMap.length>0&&Et.setValue(k,"spotShadowMap",Q.state.spotShadowMap,ne),Q.state.pointShadowMap.length>0&&Et.setValue(k,"pointShadowMap",Q.state.pointShadowMap,ne)),Z.isSkinnedMesh){Et.setOptional(k,Z,"bindMatrix"),Et.setOptional(k,Z,"bindMatrixInverse");let de=Z.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),Et.setValue(k,"boneTexture",de.boneTexture,ne))}Z.isBatchedMesh&&(Et.setOptional(k,Z,"batchingTexture"),Et.setValue(k,"batchingTexture",Z._matricesTexture,ne),Et.setOptional(k,Z,"batchingIdTexture"),Et.setValue(k,"batchingIdTexture",Z._indirectTexture,ne),Et.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Et.setValue(k,"batchingColorTexture",Z._colorsTexture,ne));let oe=et.morphAttributes;if((oe.position!==void 0||oe.normal!==void 0||oe.color!==void 0)&&at.update(Z,et,Rt),(ye||W.receiveShadow!==Z.receiveShadow)&&(W.receiveShadow=Z.receiveShadow,Et.setValue(k,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(fe.envMapIntensity.value=O.environmentIntensity),fe.dfgLUT!==void 0&&(fe.dfgLUT.value=W_()),ye){if(Et.setValue(k,"toneMappingExposure",L.toneMappingExposure),W.needsLights&&vi(fe,ke),Bt&&Y.fog===!0&&Dt.refreshFogUniforms(fe,Bt),Dt.refreshMaterialUniforms(fe,Y,kt,Ot,A.state.transmissionRenderTarget[S.id]),W.needsLights&&W.numLightProbeGrids>0){let de=M,Mt=0;for(let xt of A.state.lightProbeGridArray)xt.texture!==null&&(de.textures[Mt]=xt.texture,de.min[Mt]=xt.boundingBox.min,de.max[Mt]=xt.boundingBox.max,de.resolution[Mt]=xt.resolution,Mt++);for(let xt in de)de[xt].length=Mt;fe.probesSH.value=de.textures,fe.probesMin.value=de.min,fe.probesMax.value=de.max,fe.probesResolution.value=de.resolution}Qs.upload(k,ci(W),fe,ne)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qs.upload(k,ci(W),fe,ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Et.setValue(k,"center",Z.center),Et.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Et.setValue(k,"normalMatrix",Z.normalMatrix),Et.setValue(k,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let de=Y.uniformsGroups;for(let Mt=0,xt=de.length;Mt<xt;Mt++){let St=de[Mt];ee.update(St,Rt),ee.bind(St,Rt)}}return Rt}function vi(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.sunLights.needsUpdate=O,S.sunLightShadows.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function ar(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(S,O,et){let Y=he.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),he.get(S.texture).__webglTexture=O,he.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:et,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let et=he.get(S);et.__webglFramebuffer=O,et.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,et=0){ct=S,G=O,X=et;let Y=null,Z=!1,Bt=!1;if(S){let Ft=he.get(S);if(Ft.__useDefaultFramebuffer!==void 0){Nt.bindFramebuffer(k.FRAMEBUFFER,Ft.__webglFramebuffer),ft.copy(S.viewport),Ht.copy(S.scissor),ae=S.scissorTest,Nt.viewport(ft),Nt.scissor(Ht),Nt.setScissorTest(ae),it=-1;return}else if(Ft.__webglFramebuffer===void 0)ne.setupRenderTarget(S);else if(Ft.__hasExternalTextures)ne.rebindTextures(S,he.get(S.texture).__webglTexture,he.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let xe=S.depthTexture;if(Ft.__boundDepthTexture!==xe){if(xe!==null&&he.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(S)}}let Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Bt=!0);let ie=he.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ie[O])?Y=ie[O][et]:Y=ie[O],Z=!0):S.samples>0&&ne.useMultisampledRTT(S)===!1?Y=he.get(S).__webglMultisampledFramebuffer:Array.isArray(ie)?Y=ie[et]:Y=ie,ft.copy(S.viewport),Ht.copy(S.scissor),ae=S.scissorTest}else ft.copy(ue).multiplyScalar(kt).floor(),Ht.copy(Se).multiplyScalar(kt).floor(),ae=Re;if(et!==0&&(Y=j),Nt.bindFramebuffer(k.FRAMEBUFFER,Y)&&Nt.drawBuffers(S,Y),Nt.viewport(ft),Nt.scissor(Ht),Nt.setScissorTest(ae),Z){let Ft=he.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ft.__webglTexture,et)}else if(Bt){let Ft=O;for(let Vt=0;Vt<S.textures.length;Vt++){let ie=he.get(S.textures[Vt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Vt,ie.__webglTexture,et,Ft)}}else if(S!==null&&et!==0){let Ft=he.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ft.__webglTexture,et)}it=-1};function Sa(S){let O=he.get(S);return(O.__readFormat!==S.format||O.__readType!==S.type)&&(O.__readFormat=S.format,O.__readType=S.type,O.__formatReadable=He.textureFormatReadable(S.format),O.__typeReadable=He.textureTypeReadable(S.type)),O}this.readRenderTargetPixels=function(S,O,et,Y,Z,Bt,jt,Ft=0){if(!(S&&S.isWebGLRenderTarget)){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=he.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&jt!==void 0&&(Vt=Vt[jt],Array.isArray(Vt)&&(Vt=Vt[0])),Vt){Nt.bindFramebuffer(k.FRAMEBUFFER,Vt);try{let ie=S.textures[Ft],xe=ie.format,Le=ie.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ft);let x=Sa(ie);if(x.__formatReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(x.__typeReadable===!1){_e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&et>=0&&et<=S.height-Z&&k.readPixels(O,et,Y,Z,yt.convert(xe),yt.convert(Le),Bt)}finally{let ie=ct!==null?he.get(ct).__webglFramebuffer:null;Nt.bindFramebuffer(k.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(S,O,et,Y,Z,Bt,jt,Ft=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=he.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&jt!==void 0&&(Vt=Vt[jt],Array.isArray(Vt)&&(Vt=Vt[0])),Vt)if(O>=0&&O<=S.width-Y&&et>=0&&et<=S.height-Z){Nt.bindFramebuffer(k.FRAMEBUFFER,Vt);let ie=S.textures[Ft],xe=ie.format,Le=ie.type;S.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ft);let x=Sa(ie);if(x.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(x.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let C=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,C),k.bufferData(k.PIXEL_PACK_BUFFER,Bt.byteLength,k.STREAM_READ),k.readPixels(O,et,Y,Z,yt.convert(xe),yt.convert(Le),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let U=ct!==null?he.get(ct).__webglFramebuffer:null;Nt.bindFramebuffer(k.FRAMEBUFFER,U);let N=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await bu(k,N,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,C),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Bt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(C),k.deleteSync(N),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,et=0){let Y=Math.pow(2,-et),Z=Math.floor(S.image.width*Y),Bt=Math.floor(S.image.height*Y),jt=O!==null?O.x:0,Ft=O!==null?O.y:0;ne.setTexture2D(S,0),k.copyTexSubImage2D(k.TEXTURE_2D,et,0,0,jt,Ft,Z,Bt),Nt.unbindTexture()},this.copyTextureToTexture=function(S,O,et=null,Y=null,Z=0,Bt=0){let jt,Ft,Vt,ie,xe,Le,x,C,U,N=S.isCompressedTexture?S.mipmaps[Bt]:S.image;if(et!==null)jt=et.max.x-et.min.x,Ft=et.max.y-et.min.y,Vt=et.isBox3?et.max.z-et.min.z:1,ie=et.min.x,xe=et.min.y,Le=et.isBox3?et.min.z:0;else{let Et=Math.pow(2,-Z);jt=Math.floor(N.width*Et),Ft=Math.floor(N.height*Et),S.isDataArrayTexture?Vt=N.depth:S.isData3DTexture?Vt=Math.floor(N.depth*Et):Vt=1,ie=0,xe=0,Le=0}Y!==null?(x=Y.x,C=Y.y,U=Y.z):(x=0,C=0,U=0);let B=yt.convert(O.format),nt=yt.convert(O.type),W;O.isData3DTexture?(ne.setTexture3D(O,0),W=k.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ne.setTexture2DArray(O,0),W=k.TEXTURE_2D_ARRAY):(ne.setTexture2D(O,0),W=k.TEXTURE_2D),Nt.activeTexture(k.TEXTURE0),Nt.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,O.flipY),Nt.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Nt.pixelStorei(k.UNPACK_ALIGNMENT,O.unpackAlignment);let Q=Nt.getParameter(k.UNPACK_ROW_LENGTH),$=Nt.getParameter(k.UNPACK_IMAGE_HEIGHT),wt=Nt.getParameter(k.UNPACK_SKIP_PIXELS),Rt=Nt.getParameter(k.UNPACK_SKIP_ROWS),Kt=Nt.getParameter(k.UNPACK_SKIP_IMAGES);Nt.pixelStorei(k.UNPACK_ROW_LENGTH,N.width),Nt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,N.height),Nt.pixelStorei(k.UNPACK_SKIP_PIXELS,ie),Nt.pixelStorei(k.UNPACK_SKIP_ROWS,xe),Nt.pixelStorei(k.UNPACK_SKIP_IMAGES,Le);let ye=S.isDataArrayTexture||S.isData3DTexture,ke=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Et=he.get(S),fe=he.get(O),oe=he.get(Et.__renderTarget),de=he.get(fe.__renderTarget);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,oe.__webglFramebuffer),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Mt=0;Mt<Vt;Mt++)ye&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,he.get(S).__webglTexture,Z,Le+Mt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,he.get(O).__webglTexture,Bt,U+Mt)),k.blitFramebuffer(ie,xe,ie+jt,xe+Ft,x,C,x+jt,C+Ft,k.DEPTH_BUFFER_BIT,k.NEAREST);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||S.isRenderTargetTexture||he.has(S)){let Et=he.get(S),fe=he.get(O);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,P),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,tt);for(let oe=0;oe<Vt;oe++)ye?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Et.__webglTexture,Z,Le+oe):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Et.__webglTexture,Z),ke?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,fe.__webglTexture,Bt,U+oe):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fe.__webglTexture,Bt),Z!==0?k.blitFramebuffer(ie,xe,ie+jt,xe+Ft,x,C,x+jt,C+Ft,k.COLOR_BUFFER_BIT,k.NEAREST):ke?k.copyTexSubImage3D(W,Bt,x,C,U+oe,ie,xe,jt,Ft):k.copyTexSubImage2D(W,Bt,x,C,ie,xe,jt,Ft);Nt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ke?S.isDataTexture||S.isData3DTexture?k.texSubImage3D(W,Bt,x,C,U,jt,Ft,Vt,B,nt,N.data):O.isCompressedArrayTexture?k.compressedTexSubImage3D(W,Bt,x,C,U,jt,Ft,Vt,B,N.data):k.texSubImage3D(W,Bt,x,C,U,jt,Ft,Vt,B,nt,N):S.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Bt,x,C,jt,Ft,B,nt,N.data):S.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Bt,x,C,N.width,N.height,B,N.data):k.texSubImage2D(k.TEXTURE_2D,Bt,x,C,jt,Ft,B,nt,N);Nt.pixelStorei(k.UNPACK_ROW_LENGTH,Q),Nt.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$),Nt.pixelStorei(k.UNPACK_SKIP_PIXELS,wt),Nt.pixelStorei(k.UNPACK_SKIP_ROWS,Rt),Nt.pixelStorei(k.UNPACK_SKIP_IMAGES,Kt),Bt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&k.generateMipmap(W),Nt.unbindTexture()},this.initRenderTarget=function(S){he.get(S).__webglFramebuffer===void 0&&ne.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ne.setTextureCube(S,0):S.isData3DTexture?ne.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ne.setTexture2DArray(S,0):ne.setTexture2D(S,0),Nt.unbindTexture()},this.resetState=function(){G=0,X=0,ct=null,Nt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),e.unpackColorSpace=Be._getUnpackColorSpace()}};var fd={type:"change"},Qc={type:"start"},md={type:"end"},Ml=new ss,pd=new On,q_=Math.cos(70*Fc.DEG2RAD),pn=new F,Dn=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jc=1e-6,Sl=class extends ea{constructor(t,e=null){super(t,e),this.state=Ye.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Yi.ROTATE,MIDDLE:Yi.DOLLY,RIGHT:Yi.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new en,this._lastTargetPosition=new F,this._quat=new en().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ys,this._sphericalDelta=new Ys,this._scale=1,this._panOffset=new F,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new F,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z_.bind(this),this._onPointerDown=Y_.bind(this),this._onPointerUp=J_.bind(this),this._onContextMenu=nx.bind(this),this._onMouseWheel=j_.bind(this),this._onKeyDown=Q_.bind(this),this._onTouchStart=tx.bind(this),this._onTouchMove=ex.bind(this),this._onMouseDown=K_.bind(this),this._onMouseMove=$_.bind(this),this._interceptControlDown=ix.bind(this),this._interceptControlUp=sx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ye.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fd),this.update(),this.state=Ye.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;pn.copy(e).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Dn:n>Math.PI&&(n-=Dn),s<-Math.PI?s+=Dn:s>Math.PI&&(s-=Dn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),e.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=pn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ml.origin.copy(this.object.position),Ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ml.direction))<q_?this.object.lookAt(this.target):(pd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ml.intersectPlane(pd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>jc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jc||this._lastTargetPosition.distanceToSquared(this.target)>jc?(this.dispatchEvent(fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Dn/60*this.autoRotateSpeed*t:Dn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){pn.setFromMatrixColumn(e,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,e){this.screenSpacePanning===!0?pn.setFromMatrixColumn(e,1):(pn.setFromMatrixColumn(e,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;pn.copy(s).sub(this.target);let r=pn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Y_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Z_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function J_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(md),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function K_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ye.DOLLY;break;case Yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ye.ROTATE}break;case Yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Qc)}function $_(i){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function j_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(i.preventDefault(),this.dispatchEvent(Qc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(md))}function Q_(i){this.enabled!==!1&&this._handleKeyDown(i)}function tx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1){this.state=Ye.NONE;break}this._handleTouchStartRotate(i),this.state=Ye.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1){this.state=Ye.NONE;break}this._handleTouchStartPan(i),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ye.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(Qc)}function ex(i){switch(this._trackPointer(i),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ye.NONE}}function nx(i){this.enabled!==!1&&i.preventDefault()}function ix(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ga=class extends Gi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Je;t.deleteAttribute("uv");let e=new Ct({side:Mn}),n=new Ct,s=new jr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new rs(t,n,6),o=new rn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new qt(t,er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new qt(t,er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new qt(t,er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new qt(t,er(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new qt(t,er(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new qt(t,er(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function er(i){return new Yr({color:0,emissive:16777215,emissiveIntensity:i})}var _a=new F;function Kn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;_a.copy(t),_a[n]=0,_a.normalize();let c=.5*a/(a+o),h=1-_a.angleTo(i)/l;return Math.sign(_a[e])===1?h*c:o/(a+o)+c+c*(1-h)}var bl=class i extends Je{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new F,c=new F,h=new F(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,y=new F,m=.5/a;for(let p=0,b=0;p<u.length;p+=3,b+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:y.set(1,0,0),d[b+0]=Kn(y,c,"z","y",r,n),d[b+1]=1-Kn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[b+0]=1-Kn(y,c,"z","y",r,n),d[b+1]=1-Kn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[b+0]=1-Kn(y,c,"x","z",r,t),d[b+1]=Kn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),d[b+0]=1-Kn(y,c,"x","z",r,t),d[b+1]=1-Kn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),d[b+0]=1-Kn(y,c,"x","y",r,t),d[b+1]=1-Kn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[b+0]=Kn(y,c,"x","y",r,t),d[b+1]=1-Kn(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var th=Math.PI/180,we=(i,t,e)=>new en().setFromEuler(new Yn(i*th,t*th,e*th)),z=(i,t,e)=>new F(i,t,e);function xa(i,t,e=1,n=60){let s=document.createElement("canvas");s.width=1024,s.height=256;let r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,1024,256);let a=e,o=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<n;c++){let h=o()*256,u=4+o()*10,f=.004+o()*.008,d=o()*6;r.strokeStyle=t,r.globalAlpha=.12+o()*.3,r.lineWidth=.6+o()*2.2,r.beginPath();for(let g=0;g<=1024;g+=8){let y=h+Math.sin(g*f+d)*u+Math.sin(g*f*3.1+d)*u*.25;g?r.lineTo(g,y):r.moveTo(g,y)}r.stroke()}r.globalAlpha=.05;for(let c=0;c<1600;c++)r.fillStyle=o()<.5?t:"#fff",r.fillRect(o()*1024,o()*256,6+o()*14,1);let l=new fi(s);return l.wrapS=l.wrapT=Hi,l.colorSpace=hn,l.anisotropy=8,l}var q={beech:new Ct({map:xa("#DDAA6A","#A8682E",3,80),roughness:.7}),beechDark:new Ct({map:xa("#C48A4E","#7E4A1E",7,50),roughness:.55}),rose:new Ct({map:xa("#5E2C1E","#2A100A",11,60),roughness:.42}),steel:new Ct({color:12107978,metalness:.85,roughness:.32}),steelDark:new Ct({color:9279139,metalness:.85,roughness:.35}),iron:new Ct({color:2898511,metalness:.4,roughness:.45}),brass:new Ct({color:13805126,metalness:.95,roughness:.3}),yellow:new Ct({color:15909198,roughness:.45}),pink:new Ct({color:15900840,roughness:.8}),graphite:new Ct({color:3816e3,roughness:.5,metalness:.3}),pencilWood:new Ct({color:15189914,roughness:.8}),line:new Pi({color:4012612}),kerf:new Ct({color:3810326,roughness:1}),claret:new Ct({color:9054789,roughness:.5})};function _d(i=30){let t=document.createElement("canvas");t.width=2048,t.height=160;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,160);n.addColorStop(0,"#e9ecef"),n.addColorStop(1,"#c7cdd4"),e.fillStyle=n,e.fillRect(0,0,2048,160),e.fillStyle="#24272d";let s=2048/i;for(let a=0;a<=i*10;a++){let o=a*s/10,l=a%10===0?60:a%5===0?42:26;e.fillRect(o,0,2,l)}e.font="bold 30px Arial";for(let a=1;a<i;a++)e.fillText(a,a*s-8,96);let r=new fi(t);return r.colorSpace=hn,r.anisotropy=8,r}function rx(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d");t.strokeStyle="rgba(55,52,62,.85)",t.lineWidth=5;for(let n=-256;n<512;n+=34)t.beginPath(),t.moveTo(n,256),t.lineTo(n+256,0),t.stroke();let e=new fi(i);return e.colorSpace=hn,e}var eh=rx(),$i=i=>(i.traverse(t=>{t.isMesh&&(t.castShadow=!0,t.receiveShadow=!0)}),i);function xd(){let i=new Fe,t=new vn;t.moveTo(-15,-1.25),t.lineTo(15,-1.25),t.absarc(15,0,1.25,-Math.PI/2,Math.PI/2,!1),t.lineTo(-15,1.25),t.closePath(),t.holes.push(new si().absarc(15.35,0,.38,0,Math.PI*2,!0));let e=new pi(t,{depth:.08,bevelEnabled:!1,curveSegments:24});e.translate(0,0,-.04),e.rotateX(-Math.PI/2);let n=e.attributes.position,s=e.attributes.uv;for(let o=0;o<n.count;o++)s.setXY(o,(n.getX(o)+15)/30,(-n.getZ(o)+1.25)/2.5);let r=_d();r.wrapS=Xn;let a=new Ct({map:r,metalness:.65,roughness:.25});return i.add(new qt(e,[a,q.steel])),$i(i)}function ax(){let i=new Fe,t=new qt(new Hs(.11,.35,12),q.graphite);t.rotation.x=Math.PI,t.position.y=.175;let e=new qt(new un(.35,.11,.9,6),q.pencilWood);e.position.y=.35+.45;let n=new qt(new un(.35,.35,8,6),q.yellow);n.position.y=1.25+4;let s=new qt(new un(.37,.37,.6,16),q.steel);s.position.y=9.55;let r=new qt(new un(.34,.34,.5,16),q.pink);return r.position.y=10.1,i.add(t,e,n,s,r),$i(i)}function yd(){let i=new Fe,t=new qt(new Je(11.5,1.8,2.6),q.rose);t.position.set(5.75,0,1.3);let e=new qt(new Je(11.5,1.5,.1),q.brass);e.position.set(5.75,0,.05);let n=[q.steel,q.steel,new Ct({map:_d(15),metalness:.55,roughness:.35}),q.steel,q.steel,q.steel],s=new Je(2.4,.15,15.6),r=s.attributes.uv,a=new qt(s,n);a.position.set(1.2,0,-7.2),n[2].map.center.set(.5,.5),n[2].map.rotation=Math.PI/2,i.add(t,e,a);for(let[o,l]of[[.7,.9],[1.7,1.8],[.7,2]]){let c=new qt(new un(.2,.2,1.84,16),q.brass);c.position.set(o,0,l),i.add(c)}for(let o of[5.5,9.5]){let l=new qt(new un(.16,.16,1.84,16),q.brass);l.position.set(o,0,1.3),i.add(l)}return $i(i)}function vd(){let i=new Fe,t=new qt(new Je(6,1.8,3.6),q.beechDark);t.position.set(0,.9,.3);let e=new qt(new Je(6,.06,3.6),q.brass);e.position.set(0,.03,.3);let n=new qt(new Je(1.3,15.5,1.3),q.beech);n.position.set(0,-1.4+7.75,.75);let s=new qt(new Hs(.12,.5,12),q.steel);s.rotation.x=-Math.PI/2,s.position.set(0,-1,-.15),i.userData.pin=s;let r=new qt(new un(.22,.22,.9,16),q.steel);r.rotation.z=Math.PI/2,r.position.set(3.4,.9,.75);let a=new qt(new Hn(1,24,16),new Ct({color:15909166,roughness:.35}));a.scale.set(.32,1.05,.75),a.position.set(4.15,.9,.75);let o=new qt(new un(.4,.4,.35,20),new Ct({color:15909166,roughness:.35}));return o.rotation.z=Math.PI/2,o.position.set(3.75,.9,.75),i.add(t,e,n,s,r,o,a),$i(i)}function Md(){let i=new Fe,t=new vn;t.moveTo(0,8),t.lineTo(0,.3);for(let u=0;u<62;u++)t.lineTo(u*.4+.2,-.05),t.lineTo(u*.4+.4,.3);t.lineTo(25,8),t.closePath();let e=new qt(new pi(t,{depth:.06,bevelEnabled:!1}),q.steel);e.position.z=-.03;let n=new qt(new Je(25.4,1.3,.45),q.brass);n.position.set(12.6,8.1,0);let s=[[22.5,9.4],[24.8,12.2],[26.4,12.9],[27.9,12.1],[31.7,7.4],[33.9,2.2],[33.1,.5],[30.5,.3],[27.4,2.5],[24.6,3.2],[22.5,3.6]],r=new vn;s.forEach(([u,f],d)=>d?r.lineTo(u,f):r.moveTo(u,f)),r.closePath();let a=[[25.9,4.6],[28.3,3.3],[30.1,4.3],[29,8.5],[27.5,10.1],[26,9.3],[25.6,6.8]],o=new si;a.forEach(([u,f],d)=>d?o.lineTo(u,f):o.moveTo(u,f)),o.closePath(),r.holes.push(o);let l=new pi(r,{depth:1.45,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:1});l.translate(0,0,-.725);let c=l.attributes.uv;for(let u=0;u<c.count;u++)c.setXY(u,c.getX(u)/14,c.getY(u)/14);let h=new qt(l,q.beechDark);i.add(e,n,h);for(let[u,f]of[[23.8,6.6],[25.4,3.6]]){let d=new qt(new un(.35,.35,2,16),q.brass);d.rotation.x=Math.PI/2,d.position.set(u,f,0),i.add(d)}return $i(i)}function Sd(){let i=new Fe,t=.38,e=7.7,n=new vn;n.moveTo(-.9,0),n.lineTo(.9,0),n.lineTo(.9,-.07),n.lineTo(.6,-t),n.lineTo(-.6,-t),n.lineTo(-.9,-.07),n.closePath();let s=new pi(n,{depth:e,steps:7,bevelEnabled:!1});s.rotateX(-Math.PI/2);let r=s.attributes.position;for(let u=0;u<r.count;u++){let f=r.getY(u),d=r.getZ(u);r.setZ(u,Math.min(d,t*Math.max(0,f)/1.1))}s.computeVertexNormals();let a=new qt(s,q.steel),o=new qt(new un(.22,.3,.8,12),q.steel);o.position.set(0,8,t/2);let l=new qt(new un(.6,.6,.9,20),q.brass);l.position.set(0,8.8,t/2);let c=[[.6,9.2],[.78,10],[.92,12.5],[.88,15],[.7,16.4],[.3,16.8],[0,16.85]].map(([u,f])=>new gt(u,f)),h=new qt(new ls(c,28),q.beechDark);return h.position.z=t/2,i.add(a,o,l,h),$i(i)}function bd(){let i=new Fe,t=new qt(new Je(4.2,5.2,9.5),q.beech),e=new qt(new Je(1.2,23.2,2.2),q.beechDark);return e.position.y=-20+23.2/2,i.add(t,e),$i(i)}function ox(){let i=new Fe,t=new as([z(0,0,0),z(0,6.2,0),z(.8,7.6,0),z(2.5,8,0),z(11,8,0),z(12.7,7.6,0),z(13.5,6.2,0),z(13.5,0,0)]);i.add(new qt(new Ws(t,60,.22,10),new Ct({color:6054765,metalness:.75,roughness:.4})));let e=new qt(new Je(13.5,.25,.03),new Ct({color:15133422,metalness:.95,roughness:.12}));e.position.set(6.75,.1,0),i.add(e);let n=[[.3,0],[.65,-.8],[.75,-3],[.7,-6.5],[.5,-7.6],[0,-7.7]].map(([r,a])=>new gt(r,a)),s=new qt(new ls(n,24),new Ct({color:3108800,roughness:.9}));return s.rotation.z=-Math.PI/2,s.position.set(-.1,.1,0),i.add(s),$i(i)}function wd(){return Td(24,5.8,"smooth")}function sr(i,t=256,e=[1,1]){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d");i(s,t);let r=new fi(n);return r.wrapS=r.wrapT=Hi,r.repeat.set(...e),r.colorSpace=hn,r}var gd=sr((i,t)=>{i.fillStyle="#c9ced6",i.fillRect(0,0,t,t),i.strokeStyle="#6f7783",i.lineWidth=3;for(let e=-t;e<2*t;e+=16)i.beginPath(),i.moveTo(e,0),i.lineTo(e+t,t),i.stroke(),i.beginPath(),i.moveTo(e,t),i.lineTo(e+t,0),i.stroke()},256,[3,3]),lx=sr((i,t)=>{i.fillStyle="#8a929c",i.fillRect(0,0,t,t),i.strokeStyle="#5d646d",i.lineWidth=2;for(let e=-t;e<2*t;e+=7)i.beginPath(),i.moveTo(e,0),i.lineTo(e+t*.5,t),i.stroke();i.strokeStyle="rgba(220,226,232,.5)",i.lineWidth=1;for(let e=-t;e<2*t;e+=11)i.beginPath(),i.moveTo(e,t),i.lineTo(e+t*.7,0),i.stroke()},256,[4,1]),cx=sr((i,t)=>{i.fillStyle="#efe6d0",i.fillRect(0,0,t,t),i.strokeStyle="#c9b994";for(let e=4;e<t*.75;e+=9)i.lineWidth=2+Math.random()*2,i.beginPath(),i.arc(t/2,t/2,e,0,7),i.stroke()});Object.assign(q,{knurl:new Ct({map:gd,metalness:.8,roughness:.4}),file:new Ct({map:lx,metalness:.7,roughness:.55}),blue:new Ct({color:3105456,roughness:.35,metalness:.1}),red:new Ct({color:13120058,roughness:.4}),orange:new Ct({color:15235114,roughness:.4}),yellowP:new Ct({color:15906354,roughness:.3}),black:new Ct({color:2500652,roughness:.65}),hide:new Ct({color:15524552,roughness:.85}),hideEnd:new Ct({map:cx,roughness:.85}),viceBlue:new Ct({color:2906784,metalness:.35,roughness:.5}),castGrey:new Ct({color:6977156,metalness:.5,roughness:.5}),leather:new Ct({color:7027486,roughness:.8}),gold:new Ct({color:13212220,metalness:.9,roughness:.3}),goldSharp:new Ct({color:13607498,metalness:.9,roughness:.28,flatShading:!0}),steelShiny:new Ct({color:14278372,metalness:1,roughness:.12}),steelDull:new Ct({color:10068137,metalness:.7,roughness:.45}),knurlDull:new Ct({map:gd,color:11580602,metalness:.65,roughness:.5}),blackMetal:new Ct({color:2764082,metalness:.45,roughness:.45}),blackOxide:new Ct({color:3816770,metalness:.6,roughness:.5}),dotRed:new Ct({color:13775676,roughness:.5}),dotBlue:new Ct({color:3105456,roughness:.5})});var Ln=(i,t)=>{let e=new qt(i,t);return e.castShadow=e.receiveShadow=!0,e},I=(i,t=0,e=0,n=0,s=0,r=0,a=0)=>(i.position.set(t,e,n),i.rotation.set(s,r,a),i),Zt=(i,t,e,n,s=28)=>Ln(new un(i,t,e,s),n),Jt=(i,t,e,n)=>Ln(new Je(i,t,e),n),Yt=(i,t,e,n,s)=>Ln(new bl(i,t,e,3,n),s),Ed=(i,t,e=32)=>Ln(new ls(i.map(([n,s])=>new gt(n,s)),e),t),hx=i=>{let t=new vn;return i.forEach(([e,n],s)=>s?t.lineTo(e,n):t.moveTo(e,n)),t.closePath(),t},wl=(i,t,e,n=0)=>{let s=new pi(Array.isArray(i)?hx(i):i,{depth:t,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:24});s.translate(0,0,-t/2);let r=s.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)/12,r.getY(a)/12);return Ln(s,e)},rh=(i,t,e,n=80)=>Ln(new Ws(new as(i.map(s=>z(...s))),n,t,12),e),Oe=(...i)=>{let t=new Fe;return i.length&&t.add(...i),t};var ux=new Ct({map:xa("#5c3b26","#2e1b10",31,60),roughness:.5});function Td(i=24,t=5.8,e){let n=new Ct({color:11740718,metalness:.35,roughness:.4}),s=e==="jack"?n:e==="smooth"?q.steel:q.iron,r=e==="jack"?n:e==="smooth"?q.blackMetal:q.iron,a=e?q.steelShiny:q.iron,o=Oe(),l=Jt(i,.6,t,a);l.position.y=.3;let c=Jt(i-2,3.4,.35,r);c.position.set(0,2.2,t/2-.18);let h=c.clone();h.position.z=-t/2+.18;let u=Jt(4,2,t-.8,s);I(u,-1.5,1.6,0,0,0,.75);let f=Jt(10,.25,t-1.2,q.steel);I(f,-1.6,3.6,0,0,0,.75);let d=Yt(7,.6,t-1.4,.25,s);I(d,-.8,3.8,0,0,0,.75);let g=Jt(1.2,.5,1.4,q.steel);I(g,-2.4,5.2,0,0,0,.75);let y=new vn;y.moveTo(0,0),y.lineTo(4.5,0),y.bezierCurveTo(5,4,5.5,7,4,8.3),y.bezierCurveTo(3,9,1.6,8.5,1.8,7),y.bezierCurveTo(2,5,1,2.5,0,1.2),y.closePath();let m=wl(y,1.8,q.beechDark,.2);m.scale.x=-1,m.position.set(-i/2+4.5,.6,0);let p=Ed([[0,0],[1.3,0],[1.5,1.2],[1.2,2.6],[.6,3.2],[0,3.3]],q.beechDark);return p.position.set(i/2-3.5,.6,0),o.add(l,c,h,u,f,d,g,m,p,I(Zt(.45,.45,.4,q.brass),-i/2+6.2,2,0,0,0,Math.PI/2)),o}function dx(){return Td(36,6.2,"jack")}var GM=new Ct({color:3112271,metalness:.35,roughness:.4});function fx(i,t,e,n=2,s=.45,r=0){let a=new un(i,i,t,64,Math.round(t*24),!1),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l),h=o.getY(l),u=o.getZ(l),f=Math.atan2(u,c),d=Math.hypot(c,u);if(d<1e-6)continue;let g=(h+t/2)/t,y=1-s*Math.pow(Math.max(0,Math.cos(n/2*2*(f-g*e*Math.PI*2))),3);r&&(y*=1-.07*(.5+.5*Math.sin(f+h*Math.PI*2/r))),o.setX(l,c/d*d*y),o.setZ(l,u/d*d*y)}return a.computeVertexNormals(),a}function px(){return Oe(I(Zt(.32,.32,4.5,q.gold),0,2.25),I(Ln(fx(.32,7.2,1.6),q.gold),0,8.1),I(Zt(.32,0,.25,q.gold),0,11.83,0,Math.PI))}function sh(){let i=Oe(I(Yt(20,9,2,.3,q.viceBlue),0,0,0),I(Jt(20,9,1,q.beech),0,0,1.5)),t=Oe(I(Yt(20,9,2,.3,q.viceBlue),0,0,0),I(Jt(20,9,1,q.beech),0,0,-1.5));return t.position.z=6,Oe(i,t,I(Zt(.6,.6,14,q.steel),-6,-2.5,3,Math.PI/2),I(Zt(.6,.6,14,q.steel),6,-2.5,3,Math.PI/2),I(Zt(.8,.8,12,q.knurl),0,-2.5,4,Math.PI/2),I(Zt(.45,.45,16,q.steel),0,-2.5,10.2,0,0,Math.PI/2),I(Ln(new Hn(.75,20,14),q.steel),8.2,-2.5,10.2),I(Ln(new Hn(.75,20,14),q.steel),-8.2,-2.5,10.2),I(Zt(1.3,1.3,1.6,q.viceBlue),0,-2.5,7.6,Math.PI/2))}function mx(){let i=new vn;i.moveTo(-2,8),i.lineTo(4,8),i.lineTo(4,6.6),i.lineTo(-.6,6.6),i.quadraticCurveTo(-1.2,6.6,-1.2,5.8),i.lineTo(-1.2,-5.8),i.quadraticCurveTo(-1.2,-6.6,-.6,-6.6),i.lineTo(4,-6.6),i.lineTo(4,-8),i.lineTo(-2,-8),i.quadraticCurveTo(-3,-8,-3,-7),i.lineTo(-3,7),i.quadraticCurveTo(-3,8,-2,8);let t=Oe(I(Zt(.4,.4,13,q.steel),0,-3.6),I(Zt(.9,.7,.5,q.steelDark),0,2.9),I(Zt(.3,.3,6,q.steel),0,-10.4,0,0,0,Math.PI/2),I(Ln(new Hn(.45,14,10),q.steel),3,-10.4,0),I(Ln(new Hn(.45,14,10),q.steel),-3,-10.4,0));t.position.x=2.6;let e=Oe(wl(i,1.4,q.red,.15),t);return e.userData.screw=t,e}function gx(){let i=Oe(),t=new Ct({color:2768814,roughness:.38}),e=new Ct({color:15909166,roughness:.45}),n=q.black,s=new Ct({color:2829617,metalness:.5,roughness:.45}),r=new Ct({color:9278620,metalness:.8,roughness:.35});i.add(I(Jt(.5,30,1.9,s),0,15,0));let a=Oe(I(Yt(2.6,3.4,3.2,.5,t),0,-.2,.2),I(Yt(2.4,2.2,1.6,.4,n),0,-.4,1.7),I(Yt(2.4,1.8,7.4,.6,t),0,.6,-4.6),I(Yt(2.4,2.6,2.2,.6,t),0,1.4,-8.1),I(Yt(2.2,1.2,3.6,.3,t),0,1.8,-3.2,-.55,0,0),I(Yt(1.1,.5,1.1,.2,e),0,2.5,-7.3),I(Yt(3.2,.9,3.2,.35,n),0,2.9,-8.6)),o=f=>I(Yt(.08,2.6,3.4,.03,e),f,.4,-.6),l=Oe(I(Yt(2.8,4.2,6.4,.6,t),0,.2,-.9),o(1.42),o(-1.42),I(Yt(2.4,1.8,4.6,.5,t),0,-.4,-5.6),I(Yt(3.2,.9,3.2,.35,n),0,-1.2,-8.4)),c=Oe(I(Yt(2.1,2.2,7.4,.8,t),0,.5,3.7),I(Yt(2.2,1.4,6.2,.6,n),0,-.6,4.2));c.position.set(0,.6,1.6),c.rotation.x=-.28;let h=Oe(I(Yt(.9,.55,4.6,.25,r),0,0,2.3));h.position.set(0,-1.9,1.9),h.rotation.x=-.12;let u=Oe(l,c,h);return u.position.y=18,i.add(a,u),i.userData.mov=u,i}var nh=new Ct({color:13225683,metalness:.7,roughness:.35});var Pt={green:new Ct({color:3107669,metalness:.35,roughness:.45}),grey:new Ct({color:7306631,metalness:.45,roughness:.45}),blue:new Ct({color:3104655,metalness:.35,roughness:.45}),cream:new Ct({color:14275263,metalness:.25,roughness:.5}),orange:new Ct({color:15234346,metalness:.25,roughness:.42}),yellow:new Ct({color:15909166,metalness:.2,roughness:.45}),dark:new Ct({color:2764082,metalness:.4,roughness:.5}),glass:new Ct({color:2240576,metalness:.6,roughness:.12,transparent:!0,opacity:.75}),clear:new Ct({color:13625077,metalness:.1,roughness:.05,transparent:!0,opacity:.28,depthWrite:!1}),grit:new Ct({map:sr((i,t)=>{i.fillStyle="#4a3b2c",i.fillRect(0,0,t,t);for(let e=0;e<5e3;e++)i.fillStyle=Math.random()<.5?"#2c2219":"#6b5843",i.fillRect(Math.random()*t,Math.random()*t,1.6,1.6)},256,[4,1]),roughness:.95}),red:new Ct({color:13772334,roughness:.4}),machRed:new Ct({color:11874350,metalness:.35,roughness:.45}),lightOrange:new Ct({color:15902821,metalness:.25,roughness:.5}),chevron:new Ct({map:(()=>{let i=document.createElement("canvas");i.width=256,i.height=32;let t=i.getContext("2d");t.fillStyle="#1b1b1d",t.fillRect(0,0,256,32),t.fillStyle="#f2c12e";for(let n=-2;n<12;n++)t.beginPath(),t.moveTo(n*28,32),t.lineTo(n*28+14,32),t.lineTo(n*28+30,0),t.lineTo(n*28+16,0),t.fill();let e=new fi(i);return e.colorSpace=hn,e})(),roughness:.5}),glow:new Ct({color:16734762,emissive:16726544,emissiveIntensity:1.2,roughness:.6}),powder:new Ct({map:sr((i,t)=>{i.fillStyle="#e9eef2",i.fillRect(0,0,t,t);for(let e=0;e<4e3;e++)i.fillStyle=Math.random()<.5?"#cfd8df":"#ffffff",i.beginPath(),i.arc(Math.random()*t,Math.random()*t,1.2,0,7),i.fill()},256,[2,2]),roughness:.9})},ir=(i,t=q.steel,e=3)=>{let n=Oe(I(new qt(new Xr(i,i*.09,10,36),t),0,0,0),I(Zt(i*.18,i*.18,i*.3,t),0,0,0,Math.PI/2));for(let s=0;s<e;s++){let r=s*2*Math.PI/e;n.add(I(Jt(i,i*.08,i*.08,t),Math.cos(r)*i/2,Math.sin(r)*i/2,0,0,0,r))}return n.add(I(Zt(i*.09,i*.09,i*.5,q.black),Math.cos(.3)*i,Math.sin(.3)*i,i*.25,Math.PI/2)),n},_x=i=>Oe(I(Zt(.45,.45,i,q.steel),0,i/2,0),I(Ln(new Hn(1.1,18,12),q.black),0,i+.6,0)),rr=()=>Oe(I(Zt(1.4,1.4,1,Pt.yellow),0,0,0,Math.PI/2),I(Ln(new Hn(1.5,20,12,0,Math.PI*2,0,Math.PI/2),Pt.red),0,0,.5,Math.PI/2));function xx(){let i=new vn;i.absarc(0,25,7,0,Math.PI,!1),i.absarc(0,-25,7,Math.PI,2*Math.PI,!1),i.holes.push(new si().absarc(0,-25,6.4,0,-Math.PI,!0).absarc(0,25,6.4,Math.PI,0,!0));let t=wl(i,15,Pt.grit);return t.position.set(0,85,-4),t.rotation.y=-Math.PI/2,Oe(I(Jt(44,3,40,Pt.dark),0,1.5,0),I(Yt(40,48,36,1.5,Pt.grey),0,27,0),I(Yt(30,36,1,.6,Pt.grey),0,27,18.2),I(Jt(1,8,1.4,q.steelShiny),11,30,19),I(Yt(16,66,8,1,Pt.grey),0,83,-16),t,I(Zt(6.2,6.2,15.4,q.steel,32),0,60,-4,0,0,Math.PI/2),I(Zt(6.2,6.2,15.4,q.steel,32),0,110,-4,0,0,Math.PI/2),I(Yt(15,46,7,.6,q.steelDark),0,85,-4),I(Zt(8,8,20,Pt.yellow,28),-18,60,-4,0,0,Math.PI/2),I(Yt(20,11,22,1.2,Pt.grey),0,116,-4),I(Jt(1,9,13,Pt.grey),9.6,104,-4),I(Jt(1,9,13,Pt.grey),-9.6,104,-4),I(Yt(30,2,20,.6,q.steel),0,58,13.6),I(Jt(.8,.1,18,Pt.dark),6,59.05,13.6),I(Yt(6,7,8,.8,Pt.grey),0,53.5,9),I(Jt(19,48,.6,q.steel),0,87,4.4),I(Jt(.6,48,8,q.steel),9.6,87,.7),I(Jt(.6,48,8,q.steel),-9.6,87,.7),(()=>{let e=new qt(new wn(19,3.2),Pt.chevron);return e.position.set(0,64.7,4.72),e})(),I(_s(),-4,44,18.6),I(rr(),8,44,18.6))}Pt.go=new Ct({color:3126106,roughness:.4});var _s=()=>Oe(I(Yt(7,3.6,1.6,.4,q.black),0,0,0),I(Zt(1,1,.8,Pt.go),-1.6,0,1,Math.PI/2),I(Zt(1,1,.8,Pt.red),1.6,0,1,Math.PI/2));function yx(){let i=new vn;i.moveTo(-15,-14),i.lineTo(15,-14),i.lineTo(15,14),i.lineTo(-15,14),i.closePath();for(let a of[-6.3,6.3]){let o=new si;o.moveTo(a+.65,-4.5),o.lineTo(a+.65,4.5),o.absarc(a,4.5,.65,0,Math.PI,!1),o.lineTo(a-.65,-4.5),o.absarc(a,-4.5,.65,Math.PI,2*Math.PI,!1),i.holes.push(o)}let t=Oe(I(Yt(40,5,32,1,Pt.grey),0,2.5,0),I(Zt(3.6,3.6,110,q.steel,28),0,58,-9),I(wl(i,2.6,Pt.grey,.3),0,46,3,-Math.PI/2),I(Yt(10,6,10,1,Pt.grey),0,43,-8),I(Zt(.6,.6,6,q.steel),7,43,-8,0,0,Math.PI/2),I(Yt(24,22,40,2,Pt.machRed),0,100,0),I(Yt(18,4,32,1.5,Pt.machRed),0,112,-2),I(Zt(8,8,24,Pt.machRed,28),0,98,-28,Math.PI/2),I(Zt(2.4,2.4,10,q.steel),0,84,10),I(Ed([[2.2,0],[2.2,4],[1.6,5.5],[.9,6.2],[0,6.3]].reverse().map(([a,o])=>[a,-o]),q.steelShiny,28),0,79,10),I(px(),0,75.5,10,Math.PI)),e=Oe(I(Zt(1.8,1.8,2.2,q.steelDark),0,0,0,0,0,Math.PI/2));for(let a=0;a<3;a++){let o=_x(13);o.rotation.x=.5+a*2*Math.PI/3,e.add(o)}e.position.set(17.2,95,6),t.add(I(Zt(1,1,4.4,q.steel),14.2,95,6,0,0,Math.PI/2),e);let n=-8,s=22.5,r=Math.hypot(n,s-10);return t.add(I(Zt(3,3,1.4,q.steelDark),0,86,10),I(Jt(r,1.2,1.4,q.steelDark),n/2,86,(10+s)/2,0,Math.atan2(-(s-10),n),0),I(Zt(.38,.38,19,q.knurl),n,95.5,s),I(Jt(3.6,1.6,4.6,Pt.machRed),n,96,22),I(Zt(1,1,.8,q.brass,6),n,97.3,s),I(Zt(1,1,.8,q.brass,6),n,98.3,s),I(Jt(.2,9,1.6,q.steelShiny),n-2.2,94,20.2)),t.add(I(rr(),6,104,20.4),I(_s(),-12.4,101,6,0,-Math.PI/2,0),I(new qt(new un(5,5,12,28,1,!0),Pt.clear),0,80,10)),t}function vx(){return Oe(I(Yt(26,8,56,2,Pt.blue),0,4,0),I(Yt(20,24,10,2,Pt.blue),0,18,-22),I(Yt(9,8,44,2,Pt.blue),0,31,-3),I(Yt(4,6,6,.8,Pt.blue),0,31,22),I(Zt(1.2,1.2,2,q.black),0,36,-23),I(Yt(28,2,30,.8,q.steel),0,20,14),I(Yt(6,11,6,1,Pt.blue),0,13.5,14),I(Zt(1.4,1.4,.1,q.black),0,21.05,22),I(Zt(.06,.06,18,q.steelShiny,8),0,19,22),I(Zt(.35,.35,6.3,q.steel),1.2,24.85,22),I(Jt(2.6,.3,1.6,q.steel),1.2,21.55,22.4),I(Jt(3.8,6,.2,Pt.clear),0,25,24.8),I(Jt(.2,6,3.6,Pt.clear),1.9,25,23),I(Jt(.2,6,3.6,Pt.clear),-1.9,25,23),I(rh([[-1.5,30,22],[-3,27,25],[-.8,23,23.5]],.3,Pt.clear),0,0,0),I(Zt(7,7,14,Pt.dark,24),8,12,-18,0,0,Math.PI/2),I(_s(),0,4,28.4),I(rr(),8,4,28.4))}function Mx(){let i=Oe(I(Yt(24,40,30,1.5,Pt.cream),-34,20,0),I(Yt(24,40,30,1.5,Pt.cream),34,20,0),I(Yt(96,4,34,1,Pt.dark),0,42,-2),I(Yt(92,10,20,1,Pt.cream),0,49,0),I(Jt(92,1,2,q.steelShiny),0,54.5,-6),I(Jt(92,1,2,q.steelShiny),0,54.5,6),I(Yt(28,30,26,2,Pt.cream),-34,69,0),I(Zt(1.8,1.8,1.4,Pt.dark),-26,78,13.2,Math.PI/2),I(Zt(1.8,1.8,1.4,Pt.dark),-38,78,13.2,Math.PI/2),I(Zt(8,8,7,q.steel,36),-16.5,66,0,0,0,Math.PI/2),I(Zt(.6,.6,90,q.steel),0,46,10.5,0,0,Math.PI/2));for(let n=0;n<3;n++){let s=n*2*Math.PI/3;i.add(I(Jt(3,2.2,2.6,q.steelDark),-12.5,66+Math.cos(s)*5.6,Math.sin(s)*5.6,s,0,0))}i.add(I(Zt(1.6,1.6,10,q.brass),-7.5,66,0,0,0,Math.PI/2));let t=Oe(I(Yt(16,6,24,.8,Pt.cream),0,57,0),I(Yt(16,12,4,.8,Pt.cream),0,49,12.5),I(Yt(10,3,14,.6,Pt.cream),0,61.5,5),I(Yt(6,3,7,.5,Pt.cream),0,64.5,7),I(Yt(4.4,4,4.4,.4,q.steelDark),0,68,8),I(Jt(1,1,5,q.steel),0,67.6,5),I(ir(3.4),3,49,17.6),I(ir(2.4),0,61.5,15.4),I(Zt(.4,.4,3,q.steel),3,49,15.6,Math.PI/2),I(Zt(.35,.35,3.4,q.steel),0,61.5,13.4,Math.PI/2));t.position.x=8,i.add(t);let e=Oe(I(Yt(14,18,14,1.2,Pt.cream),0,64,0),I(Zt(1.8,1.8,8,q.steel),-9,66,0,0,0,Math.PI/2),I(Zt(0,.6,2.4,q.steelShiny),-14,66,0,0,0,Math.PI/2),I(ir(3.6),9,66,0));return e.children[3].rotation.y=Math.PI/2,e.position.x=34,i.add(e,I(rr(),-24,72,13.4),I(_s(),-34,63,13.4)),i}function Sx(){let i=Oe(I(Yt(6,40,30,1,Pt.green),-40,20,0),I(Yt(6,40,30,1,Pt.green),40,20,0),I(Jt(86,3,6,Pt.green),0,42,-4),I(Jt(86,3,6,Pt.green),0,42,4),I(Yt(18,22,18,2,Pt.green),-34,54,0),I(Zt(7,7,18,Pt.dark,28),-34,54,-16,Math.PI/2),I(Zt(1.4,1.4,6,q.steel),-22,58,0,0,0,Math.PI/2),I(Zt(2.6,2.6,1,q.steel,28),-19.5,58,0,0,0,Math.PI/2));for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;i.add(I(Jt(.6,.5,.5,q.steelShiny),-18.8,58+Math.cos(r)*1.6,Math.sin(r)*1.6))}let t=Oe(I(Yt(12,16,12,1.2,Pt.green),0,51,0),I(Zt(1.4,1.4,6,q.steel),-7,58,0,0,0,Math.PI/2),I(Zt(0,1,2,q.steelShiny),-10.5,58,0,0,0,Math.PI/2),I(ir(6.8,q.black),8,58,0));t.children[3].rotation.y=Math.PI/2,t.position.x=29;let e=I(Jt(37,5,5,q.beech),-.5,58,0),n=Oe(I(Yt(6,3,14,.6,q.steelDark),0,45,6),I(Zt(.9,.9,9.5,q.steel),0,51.25,4.4),I(Jt(26,1.2,1.4,q.steel),0,56.6,4.4),I(Zt(.6,.6,3,q.black),3,46,13,Math.PI/2));return Oe(i,t,e,n,I(rr(),-34,60,9.4),I(_s(),-34,50,9.4))}function bx(){let i=Oe(I(Zt(1.8,1.8,2.4,q.steelDark),0,0,0,0,0,Math.PI/2),I(Zt(.8,.8,22,q.steel),1.2,6,9.5,1.1,0,0),I(Ln(new Hn(2.2,18,12),q.black),1.2,11.2,19.4));return i.position.set(8.6,62,0),Oe(I(Yt(34,5,30,1,Pt.grey),0,2.5,0),I(Yt(6,5,8,.8,Pt.grey),0,7.5,4),I(Yt(30,3,22,.8,q.steel),0,10.5,4),I(Yt(30,6,2,.5,q.steel),0,15,1),I(Jt(26,6,4,q.beech),0,15,4),I(Yt(18,6,1.6,.4,q.steel),0,15,6.8),I(Yt(6,6,2,.5,Pt.grey),0,15,14),I(Zt(.6,.6,7,q.steel),0,15,11,Math.PI/2),I(ir(3),0,15,15.6),I(Yt(2,5,6,.4,Pt.grey),17,5,4),I(Zt(.8,.8,6,q.steel),20,5,4,0,0,Math.PI/2),I(ir(5.4),23.2,5,4,0,Math.PI/2,0),I(Zt(3,3,70,q.steel,24),0,40,-11),I(Yt(14,18,14,1.5,Pt.orange),0,56,-3),I(Zt(6.5,6.5,22,Pt.orange,28),0,74,-3),I(Yt(10,4,10,1,Pt.dark),0,86,-3),I(Yt(6,5,6,.6,Pt.grey),0,47,4),I(Jt(1.6,8.5,1.6,q.steelShiny),0,40.25,4),I(Jt(1.65,2.4,.8,Pt.dark),0,41.5,4),I(Zt(1.13,.85,.6,q.steelShiny,4),0,35.7,4,0,Math.PI/4,0),I(Zt(.6,.6,2,q.steelDark),0,34.9,4),I(Zt(.6,0,1,q.steelShiny),0,33.4,4),I(Jt(.3,15,3,q.black),7.05,56,0),i,I(Jt(4,1.6,4,Pt.orange),-9,48,-3),I(Zt(.38,.38,11.3,q.knurl),-9,41.85,-3),I(Zt(1,1,.8,q.brass,6),-9,46.6,-3),I(Zt(1,1,.8,q.brass,6),-9,45.6,-3),I(Zt(4,4,2.4,Pt.grey),0,15.6,-11),I(Jt(12,1.6,2,Pt.grey),-4.5,15.6,-7,0,Math.atan2(-8,-9)+Math.PI,0),I(Jt(3.4,1.2,3.4,q.steelDark),-9,16.8,-3),I(rr(),0,60,4.2),I(_s(),-7.2,56,-3,0,-Math.PI/2,0))}function wx(){let i=new Ct({map:sr((M,R)=>{M.fillStyle="#b8323a",M.fillRect(0,0,R,R);for(let A=0;A<5e3;A++)M.fillStyle=Math.random()<.5?"#952630":"#d9545b",M.fillRect(Math.random()*R,Math.random()*R,1.4,1.4)},256,[3,3]),roughness:.95}),t=14,e=31.2,n=new qt(new wn(31,25,28,22),i);n.rotation.x=-Math.PI/2,n.position.set(t,e,0);let s=n.geometry.attributes.position,r=s.array.slice(),a=Oe(I(Yt(36,1.2,30,.5,Pt.lightOrange),0,.6,15),I(Jt(10,1,1.2,q.black),0,1.5,29.2));a.position.set(t,34,-15),a.rotation.x=-1.85;let o=Oe(I(Jt(80,4,36,Pt.dark),-3,2,0),I(Yt(36,26,30,1.2,Pt.lightOrange),t,17,0),I(Jt(36,4,2.5,Pt.lightOrange),t,32,13.75),I(Jt(36,4,2.5,Pt.lightOrange),t,32,-13.75),I(Jt(2.5,4,25,Pt.lightOrange),t-16.75,32,0),I(Jt(2.5,4,25,Pt.lightOrange),t+16.75,32,0),I(Jt(31,.1,25,Pt.dark),t,30.05,0),n,a,I(Zt(.5,.5,34,q.steel),t,34,-15,0,0,Math.PI/2),I(Yt(30,40,30,1.5,Pt.lightOrange),-20,24,0),I(Yt(24,26,1.4,.8,Pt.lightOrange),-20,23,15.6),I(Jt(14,8,.4,Pt.glass),-20,27,16.4),I(Jt(12,.6,.3,Pt.glow),-20,25.5,16.1),I(Zt(.7,.7,10,q.steelShiny),-10,23,17.8),I(Jt(1,1,1.6,q.steelShiny),-10,27.5,16.9),I(Jt(1,1,1.6,q.steelShiny),-10,18.5,16.9),I(Zt(1.6,1.6,1,q.black),-28,40,15.4,Math.PI/2),I(Zt(.7,.7,.6,Pt.red),-23,40,15.3,Math.PI/2),I(_s(),t,12,15.4),I(Yt(8,7,8,1,Pt.blue),42,3.5,6),I(rh([[42,7,6],[42,10,2],[37,8,1],[32,8,1]],.7,q.black),0,0,0)),l=1400,c=new rs(new Hn(.13,5,3),new Ct({roughness:.8}),l),h=new rn,u=[];for(let M=0;M<l;M++)u.push([t+(Math.random()-.5)*30,(Math.random()-.5)*24,Math.random()*9,.6+Math.random()*1.6,.3+Math.random()*Math.random()*4.2,Math.random()*6]),c.setColorAt(M,new Me().setHSL(.99+Math.random()*.02,.62,.4+Math.random()*.22));let f=document.createElement("canvas");f.width=f.height=64;let d=f.getContext("2d"),g=d.createRadialGradient(32,32,0,32,32,32);g.addColorStop(0,"rgba(230,90,95,.9)"),g.addColorStop(1,"rgba(230,90,95,0)"),d.fillStyle=g,d.fillRect(0,0,64,64);let y=160,m=new Float32Array(y*3),p=[];for(let M=0;M<y;M++)p.push([t+(Math.random()-.5)*28,(Math.random()-.5)*22,Math.random()*9,.3+Math.random()*.6]);let b=new cn;b.setAttribute("position",new Bn(m,3));let E=new Dr(b,new zs({map:new fi(f),size:5,transparent:!0,opacity:.28,depthWrite:!1,sizeAttenuation:!0}));return o.add(c,E),o.userData.anim=M=>{for(let R=0;R<s.count;R++){let A=r[R*3],_=r[R*3+1];s.setZ(R,.05*Math.sin(A*2.3+M*7)+.04*Math.sin(_*2.9-M*6.3))}s.needsUpdate=!0,n.geometry.computeVertexNormals(),u.forEach(([R,A,_,w,V,L],H)=>{let J=.5-.5*Math.cos(M*w*2.2+_);h.position.set(Math.min(t+15.2,Math.max(t-15.2,R+.9*Math.sin(M*w+L))),e+.15+V*J+.25*Math.abs(Math.sin(M*9*w+_)),Math.max(-12,Math.min(12,A+.9*Math.cos(M*w*.8+L)))),h.updateMatrix(),c.setMatrixAt(H,h.matrix)}),c.instanceMatrix.needsUpdate=!0,p.forEach(([R,A,_,w],V)=>{m[V*3]=R+1.5*Math.sin(M*w+_),m[V*3+1]=e+1+2*(.5-.5*Math.cos(M*w*1.3+_)),m[V*3+2]=A+1.5*Math.cos(M*w*.9+_)}),b.attributes.position.needsUpdate=!0},o.userData.anim(0),o}function Ex(){Pt.wire=new Ct({color:16723992,emissive:16718336,emissiveIntensity:1.4,roughness:.5});let i=Oe(I(Zt(.09,.09,60,Pt.wire,8),0,9.3,-6.6,0,0,Math.PI/2),I(Zt(.09,.09,60,Pt.wire,8),0,9.3,-5.4,0,0,Math.PI/2)),t=Oe(I(Jt(62,.4,6.4,q.black),0,1.4,3.2),I(Jt(62,1.4,.3,q.black),0,.7,6.3),I(Jt(.3,1.4,6.4,q.black),-30.85,.7,3.2),I(Jt(.3,1.4,6.4,q.black),30.85,.7,3.2));t.position.set(0,9.6,-9.2);let e=Oe(I(Yt(70,3,22,.8,q.black),0,1.5,0),I(Yt(66,6,18,.8,Pt.yellow),0,6,0),I(Jt(64,.5,11,nh),0,9.25,2.5),I(Jt(62,.2,2.6,Pt.dark),0,9.1,-6),I(Jt(62,.6,1.6,nh),0,9.3,-3.9),I(Jt(62,.6,1.6,nh),0,9.3,-8.1),i,t,I(Zt(.35,.35,62,q.steel),0,9.6,-9.2,0,0,Math.PI/2),I(Yt(4,9,20,.6,q.black),-34,5,0),I(Yt(4,9,20,.6,q.black),34,5,0),I(Yt(5,3,3,.4,q.black),-30,6,10.2),I(Zt(.6,.6,.6,Pt.red),-30,6,11.8,Math.PI/2),I(rh([[-36,4,-6],[-42,3,-10],[-50,1,-12]],.4,q.black),0,0,0)),n=s=>s*s*(3-2*s);return e.userData.anim=s=>{Pt.wire.emissiveIntensity=1.5+1.1*Math.sin(s*4);let r=s%7/7;t.rotation.x=-Math.PI*.97*(r<.35?1:r<.47?1-n((r-.35)/.12):r<.8?0:n((r-.8)/.12>1?1:(r-.8)/.12))},e.userData.anim(0),e}var VM=new Ct({color:12856110,metalness:.35,roughness:.32}),WM=new Ct({color:9313055,metalness:.25,roughness:.5}),XM=new Ct({color:15264494,metalness:1,roughness:.18}),qM=new Ct({color:1908e3,roughness:.6});function Tx(i,t=0){let e=new Fe;e.add(i),i.updateMatrixWorld(!0);let n=new Cn().setFromObject(i).getSize(z(0,0,0));n.z<=n.x&&n.z<=n.y?i.rotation.x=-Math.PI/2:n.x<=n.y&&n.x<=n.z&&(i.rotation.z=Math.PI/2);let s=new Fe;s.add(e),e.rotation.y=t,s.updateMatrixWorld(!0);let r=new Cn().setFromObject(e),a=r.getCenter(z(0,0,0));return e.position.set(-a.x,-r.min.y,-a.z),s}var YM=new Ct({color:1315862,metalness:.4,roughness:.35});function Ad(i={}){let a=Oe(I(Yt(120,6,48,.6,ux),0,78-6/2,0));for(let l of[-1,1])for(let c of[-1,1])a.add(I(Jt(6,72,6,q.beech),l*(120/2-8),72/2,c*(48/2-6)));for(let l of[-1,1])a.add(I(Jt(110,6,3,q.beech),0,69,l*(48/2-4.5)));a.add(I(Jt(110,2.5,38,q.beech),0,16,0));for(let l of[-1,1])a.add(I(Jt(4,6,38,q.beech),l*(120/2-8),16,0));if(!i.bare){let l=sh();l.position.set(-120/2+24,78-4.5,48/2+1),a.add(l)}let o=(l,c,h,u,f=78,d=!0)=>{let g=d?Tx(l,u):(()=>{let y=new Fe,m=new Fe;m.add(l),y.add(m),m.rotation.y=u,y.updateMatrixWorld(!0);let p=new Cn().setFromObject(m),b=p.getCenter(z(0,0,0));return m.position.set(-b.x,-p.min.y,-b.z),y})();return g.position.set(c,f,h),a.add(g),g};if(!i.bare){o(Md(),18,4,.25),o(yd(),-20,-10,-.4),o(bd(),40,-12,1.1),o(Sd(),-2,12,-.9),o(xd(),5,-14,.1),o(vd(),-38,-8,.7);let l=I(Jt(34,2,4.5,q.beech),-28,79,10,0,.15,0);a.add(l)}return i.bare||(o(dx(),-25,0,.2,17.25,!1),o(wd(),12,-4,-.3,17.25,!1),a.add(I(Jt(30,4.5,9,q.beech),30,19.5,8,0,.1,0),I(Jt(22,2,4.5,q.beech),-8,18.3,10,0,-.2,0))),a}function ih(i,t,e){let n=new Ct({color:9076594,roughness:.8}),s=new Ct({color:3948614,metalness:.5,roughness:.4}),r=Oe(I(Jt(i,3,t,n),0,e-1.5,0));for(let a of[-1,1])for(let o of[-1,1])r.add(I(Jt(3,e-3,3,s),a*(i/2-3),(e-3)/2,o*(t/2-3)));return r.add(I(Jt(i-6,2,t-6,s),0,14,0)),r}function Ax(i={}){let t=new Fe,e=360,n=270,s=new Ct({color:5987940,roughness:.92}),r=new Ct({color:6975093,roughness:.9});t.add(I(Jt(e,4,n,s),0,-2,0),I(Jt(e-70,.3,n-90,r),0,.15,10));let a=[],o=[];t.userData.items=o;let l=(c,h,u,f=0,d=0,g)=>(c.rotation.y=f,c.position.set(h,d,u),t.add(c),c.userData.anim&&a.push(c.userData.anim),g&&(c.userData.key=g,o.push({key:g,obj:c})),c);return i.noBench||l(Ad(),0,15,0,0,"bench"),l(Mx(),-62,-100,0,0,"centreLathe"),l(Sx(),55,-100,0,0,"woodLathe"),l(yx(),-150,-15,Math.PI/2,0,"pillarDrill"),l(xx(),-150,65,Math.PI/2,0,"beltSander"),l(ih(60,46,72),148,-35),l(bx(),148,-35,-Math.PI/2,72,"mortiser"),l(ih(60,46,72),148,45),l(vx(),148,45,-Math.PI/2,72,"fretSaw"),l(ih(90,40,72),-60,110),l(Ex(),-60,110,0,72,"stripHeater"),l(wx(),85,105,0,0,"fluidiser"),t.userData.anim=c=>a.forEach(h=>h(c)),t}var nr={halving:{name:"Cross halving joint",L:30,T:2,W:4.5,nx0:-2.25,nx1:2.25,depth:1,kerfs:[-2.19,0,2.19],cam:[18,16,25],tgt:[0,1.2,-3],txt:{measure:"Measure and mark the width of the joint with a steel rule and a pencil.",gauge:"Set the marking gauge to half the thickness. Gauge between the lines on both edges.",saw:"Saw on the waste side of each line, down to the gauge line. A cut in the middle makes chiselling easier.",second:["The second piece","Mark out and cut the second piece in exactly the same way."],fit:["Fit them together","Turn the second piece over and push the two halves together. The faces should finish flush."],done:"Both halves sit flush. Drag to spin it round."}},rebate:{name:"Corner rebate joint",L:30,T:2,W:4.5,nx0:13,nx1:15,depth:1,end:!0,kerfs:[13.04],bench:!0,cam:[12,22,22],tgt:[2,0,-5],txt:{measure:"Measure the width of the rebate from the end. It matches the thickness of the other piece.",gauge:"Set the marking gauge to half the thickness. Gauge along both edges and across the end.",done:"The second piece sits in the rebate, flush on the outside. Drag to spin it round."}},stopped:{name:"Stopped housing joint",L:30,T:2,W:4.5,nx0:-1,nx1:1,depth:1,kerfs:[-.94,.94],stopped:!0,cam:[20,19,29],tgt:[0,1.5,-3],txt:{measure:"Measure and mark the width of the housing. It must match the thickness of the shelf.",done:"The shelf sits in the housing and the front edge stays clean. Drag to spin it round."}},housing:{name:"Through housing joint",L:30,T:2,W:4.5,nx0:-1,nx1:1,depth:1,kerfs:[-.94,.94],cam:[20,19,29],tgt:[0,1.5,-3],txt:{measure:"Measure and mark the width of the housing. It must match the thickness of the shelf.",gauge:"Set the marking gauge to half the thickness. Gauge between the lines on both edges.",saw:"Saw on the waste side of each line, down to the gauge line.",second:["The shelf","The shelf only needs a square end, so it sits tight in the housing."],fit:["Fit the shelf","Slide the shelf into the housing. A through housing shows on both edges."],done:"The shelf sits tight in the housing. Drag to spin it round."}}};function Rx(i){if(i.__ws)return i.__ws;i.innerHTML=`
 <div class="wsx">
  <div class="wseg" id="wsJ"><button data-j="halving" class="on">Cross halving</button><button data-j="housing">Through housing</button><button data-j="rebate">Corner rebate</button><button data-j="stopped">Stopped housing</button></div>
  <div class="wseg wsmode"><button data-m="watch" class="on"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 10l1.3-4.6a2 2 0 0 1 2.4-1.4l12.6 3.3-.8 2.7"/><path d="M8.2 4.7l2.4 4.1M13 6l2.4 4"/></svg><span>Watch it</span></button><button data-m="try"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11"/><path d="M11 10V4.5a1.5 1.5 0 0 1 3 0V11"/><path d="M14 10.5V6a1.5 1.5 0 0 1 3 0v6.5"/><path d="M17 9.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1.2a6 6 0 0 1-4.6-2.2L4.3 15a1.6 1.6 0 0 1 2.4-2.1L8 14.2"/></svg><span>Try it</span></button></div>
  <div class="wsstage">
   <div class="wsview"><div class="wspill"></div><div class="wshint">Drag to spin \xB7 pinch to zoom</div></div>
   <button type="button" class="wsbig" aria-label="Play in full screen"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg><span>Play</span></button>
   <div class="wsfstop"><div class="wscap"><b></b><p></p></div><div class="wsdots"></div></div>
   <button type="button" class="wsclose" aria-label="Close full screen">\u2715</button>
   <div class="wsfsbot"><div class="wsfb"></div><div class="wstray wshide"></div><div class="wswin">Joint made! Nice work.</div>
    <div class="wsdone"><button class="wsexp">Exploded view</button><button class="wsagain">Do it again</button></div>
    <div class="wsctl"><button class="wsprev" hidden></button><button class="wsplay"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg><span>Play</span></button><button class="wsnext" hidden></button></div></div>
   <div class="wsrot">Turn your phone sideways for the best view</div>
  </div>
 </div>`;let t=x=>i.querySelector(x),e=t(".wsview"),n=new pa({antialias:!0,alpha:!0});n.setPixelRatio(Math.min(2,devicePixelRatio||1)),n.toneMapping=Ks,n.toneMappingExposure=.95,n.shadowMap.enabled=!0,n.shadowMap.type=Co,e.prepend(n.domElement);let s=new gs(n).fromScene(new ga,.04).texture,r=new Gi;r.environment=s,r.environmentIntensity=.55;let a=new Xs(16773596,2.1);a.position.set(14,26,16),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:1,far:90}),a.shadow.bias=-4e-4,a.shadow.radius=4,r.add(a,new Jr(16775406,14272952,.5));let o=new qt(new wn(240,240),new qr({opacity:.22}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,r.add(o);let l=new yn(34,1,.1,900),c=new Sl(l,n.domElement);c.enableDamping=!0,c.dampingFactor=.08,c.enablePan=!1,c.minDistance=10,c.maxDistance=100,c.maxPolarAngle=Math.PI*.49;function h(){let x=e.clientWidth,C=e.clientHeight;!x||!C||(n.setSize(x,C),l.aspect=x/C,l.updateProjectionMatrix())}new ResizeObserver(h).observe(e);let u={rule:{n:"Steel rule",make:xd},pencil:{n:"Pencil",make:ax},square:{n:"Try square",make:yd},gauge:{n:"Marking gauge",make:vd},tenon:{n:"Tenon saw",make:Md},chisel:{n:"Bevel-edge chisel",make:Sd},coping:{n:"Coping saw",make:ox},plane:{n:"Smoothing plane",make:wd},mallet:{n:"Mallet",make:bd,hidden:!0},vice:{n:"Bench vice",make:sh},gclamp:{n:"G clamp",make:mx},quick:{n:"Quick clamp",make:gx}},f=new Map;function d(x){if(!f.has(x)){let C=x.clone();C.color=new Me(13218458),f.set(x,C)}return f.get(x)}let g=z(36,12,12),y=5,m=6.3,p=-32,b=new Ct({map:xa("#6E4A32","#3A2416",21,70),roughness:.55}),E=new Fe;{let x=Ad({bare:!0});x.position.set(-18,-78,-24),x.traverse(U=>{U.isMesh&&(U.receiveShadow=!0)});let C=Ax({noBench:!0});C.position.set(-18,-78,-79),E.add(x,C),E.userData.shop=C}E.visible=!1,r.add(E),r.background=new Me(15131614),r.fog=new Ar(15131614,170,460);{let x=new Ct({color:14473425,roughness:.95}),C=new qt(new wn(520,240),x);C.position.set(-18,40,-235),E.add(C);let U=new qt(new wn(420,240),x);U.rotation.y=Math.PI/2,U.position.set(-200,40,-80),E.add(U)}let M=sh();M.position.set(p,-4.75,y-1.7),M.visible=!1,r.add(M);let R=[1,5,6,7,8].map(x=>M.children[x]);R.forEach(x=>x.userData.z0=x.position.z);let A=x=>R.forEach(C=>C.position.z=C.userData.z0+(x-6));function _(x,C=600){let U=R[0].position.z;return P(C,N=>A(U+(x-U)*N))}function w(x){let C=R[1],U=R[2],N=R[3];return P(x,B=>{let nt=B*Math.PI*3,W=-2.5+Math.sin(nt)*0;C.rotation.x=nt})}for(let x in u){let C=u[x].make();C.visible=!1,C.position.copy(g),r.add(C),u[x].obj=C}let V=[],L=!1,H=0,J=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2,j=x=>x;function P(x,C,U=J){if(L)return C(1),Promise.resolve();let N=H;return new Promise((B,nt)=>V.push({t0:performance.now(),dur:x,fn:C,e:U,res:B,ep:N}))}let tt=x=>L?Promise.resolve():new Promise(C=>setTimeout(C,x));function G(x,C,U,N=700,B=J){let nt=x.position.clone(),W=x.quaternion.clone();return P(N,Q=>{C&&x.position.lerpVectors(nt,C,Q),U&&x.quaternion.slerpQuaternions(W,U,Q)},B)}async function X(x,C,U,N=750){let B=u[x].obj;B.visible=!0,B.position.copy(g),B.quaternion.copy(U),await G(B,C,U,N)}async function ct(x,C=600){let U=u[x].obj;k===U&&(Ee.copy(Nt()),k=null),await G(U,g,null,C),U.visible=!1}let it={checked:!1},ht;function ft(){try{return ht=ht||new(window.AudioContext||window.webkitAudioContext),ht.state==="suspended"&&ht.resume(),ht}catch{return null}}function Ht(x,C=.15,U="sine",N=.12,B=0){if(L||!it.checked)return;let nt=ft();if(!nt)return;let W=nt.createOscillator(),Q=nt.createGain(),$=nt.currentTime+B;W.type=U,W.frequency.value=x,Q.gain.setValueAtTime(0,$),Q.gain.linearRampToValueAtTime(N,$+.01),Q.gain.exponentialRampToValueAtTime(1e-4,$+C),W.connect(Q).connect(nt.destination),W.start($),W.stop($+C+.02)}function ae(x=.12,C=2500,U=.08){if(L||!it.checked)return;let N=ft();if(!N)return;let B=N.sampleRate*x,nt=N.createBuffer(1,B,N.sampleRate),W=nt.getChannelData(0);for(let Rt=0;Rt<B;Rt++)W[Rt]=(Math.random()*2-1)*(1-Rt/B);let Q=N.createBufferSource();Q.buffer=nt;let $=N.createBiquadFilter();$.type="bandpass",$.frequency.value=C;let wt=N.createGain();wt.gain.value=U,Q.connect($).connect(wt).connect(N.destination),Q.start()}let st=()=>{Ht(150,.12,"triangle",.25),ae(.06,900,.12)},pt,mt,Ot;function kt(x){let C=x.attributes.position,U=x.attributes.normal,N=x.attributes.uv;for(let B=0;B<C.count;B++){let nt=C.getX(B),W=C.getY(B),Q=C.getZ(B);Math.abs(U.getY(B))>.5?N.setXY(B,nt/14,Q/3.4):Math.abs(U.getZ(B))>.5?N.setXY(B,nt/14,W/3.4+.31):N.setXY(B,Q/3.4+.6,W/3.4)}}function $t(x,C,U,N,B,nt,W=q.beech){let Q=new Je(x,C,U);Q.translate(N,B,nt),kt(Q);let $=d(W),wt=new qt(Q,[$,$,W,W,W,W]);return wt.castShadow=wt.receiveShadow=!0,wt}function Ne(x,C,U,N,B,nt){let W=new qt(new Je(x,C,U),q.line);return W.position.set(N,B,nt),W}function ue(x,C,U){let N=new vn(x.map(([nt,W])=>new gt(nt,W))),B=new pi(N,{depth:U-C,bevelEnabled:!1});return B.rotateY(-Math.PI/2),B.translate(U,0,0),B}function Se(x,C){let U=[];for(let B=0;B<x.length;B++){let nt=x[B],W=x[(B+1)%x.length],Q=C(nt[0],nt[1]),$=C(W[0],W[1]);if(Q<=1e-9&&U.push(nt),Q<-1e-9&&$>1e-9||Q>1e-9&&$<-1e-9){let wt=Q/(Q-$);U.push([nt[0]+(W[0]-nt[0])*wt,nt[1]+(W[1]-nt[1])*wt])}}let N=[];for(let B of U){let nt=N[N.length-1];(!nt||Math.hypot(nt[0]-B[0],nt[1]-B[1])>1e-6)&&N.push(B)}return N.length>1&&Math.hypot(N[0][0]-N[N.length-1][0],N[0][1]-N[N.length-1][1])<1e-6&&N.pop(),N}let Re=x=>{let C=0;for(let U=0;U<x.length;U++){let[N,B]=x[U],[nt,W]=x[(U+1)%x.length];C+=N*W-nt*B}return Math.abs(C/2)};function ut(x,C=!0){let{L:U,T:N,W:B}=x,nt=B/2,W=N/2,Q=new Fe,$=.012,wt=.05,Rt={c:x,mk:{ticks:[],top:[],edgeF:[],edgeB:[],gaugeF:null,gaugeB:null,hatch:[],kerf:[],kp:[]}};if(Q.userData=Rt,Q.position.y=W,!C)return Q.add($t(U,N,B,0,0,0)),Q;let{nx0:Kt,nx1:ye,depth:ke}=x,Et=W-ke,fe=Rt.mk;Q.add($t(Kt+U/2,N,B,(Kt-U/2)/2,0,0),$t(ye-Kt,N-ke,B,(Kt+ye)/2,(Et-W)/2,0)),x.end||Q.add($t(U/2-ye,N,B,(ye+U/2)/2,0,0)),Rt.poly=[[-nt,Et],[nt,Et],[nt,W],[-nt,W]];let oe=new qt(ue(Rt.poly,Kt,ye),[d(q.beech),q.beech]);kt(oe.geometry),oe.castShadow=oe.receiveShadow=!0,Q.add(oe),Rt.waste=oe;for(let Qt of x.end?[Kt]:[Kt,ye]){let se=Ne(wt,.004,.7,Qt,W+$,nt-.38);se.scale.z=.001,fe.ticks.push(se),Q.add(se);let re=new Fe;re.position.set(Qt,W+$,nt),re.add(Ne(wt,.004,B,0,0,-nt)),re.scale.z=.001,fe.top.push(re),Q.add(re);for(let[Ue,ze]of[[fe.edgeF,nt+$],[fe.edgeB,-nt-$]]){let Ve=new Fe;Ve.position.set(Qt,W,ze),Ve.add(Ne(wt,ke+.25,.004,0,-(ke+.25)/2,0)),Ve.scale.y=.001,Ue.push(Ve),Q.add(Ve)}}for(let[Qt,se]of[["gaugeF",nt+$],["gaugeB",-nt-$]]){let re=new Fe;re.position.set(Kt-.3,Et,se);let Ue=ye-Kt+(x.end?.3+$:.6);re.add(Ne(Ue,.035,.004,Ue/2,0,0)),re.scale.x=.001,fe[Qt]=re,Q.add(re)}let de=()=>new Pi({map:eh,transparent:!0,opacity:0,depthWrite:!1}),Mt=ye-Kt,xt=(Kt+ye)/2,St=new qt(new wn(Mt-.1,B-.1),de());St.rotation.x=-Math.PI/2,St.position.set(xt,W+$*1.5,0),St.material.map=eh.clone(),St.material.map.needsUpdate=!0,St.material.map.wrapS=St.material.map.wrapT=Hi,St.material.map.repeat.set(Mt/4.4,B/4.4);let le=new qt(new wn(Mt-.1,ke-.06),de());le.position.set(xt,W-ke/2+.02,nt+$*1.5);let pe=le.clone();if(pe.material=de(),pe.rotation.y=Math.PI,pe.position.z=-nt-$*1.5,fe.hatch.push(St,le,pe),Q.add(St,le,pe),x.end){let Qt=new Fe;Qt.position.set(U/2+$,Et,nt),Qt.add(Ne(.004,.035,B,0,0,-nt)),Qt.scale.z=.001,fe.gaugeE=Qt,Q.add(Qt);let se=new qt(new wn(B-.1,ke-.06),de());se.rotation.y=Math.PI/2,se.position.set(U/2+$*1.5,W-ke/2+.02,0),fe.hatch.push(se),Q.add(se);let re=new qt(new cn,new Pi({color:2759184,side:Zn}));re.visible=!1,fe.cheek=re,Q.add(re)}for(let Qt of x.kerfs){let se=new Fe;se.position.set(Qt,W+.002,0);let re=new qt(new Je(.07,ke,B+.03),q.kerf);re.position.y=-ke/2,se.add(re),se.scale.y=.001,se.visible=!1,fe.kerf.push(se),Q.add(se)}return Q}function Lt(x,C){let U=x.userData,N=U.c;if(U.poly=C,U.waste.geometry.dispose(),C.length<3||Re(C)<1e-4){U.waste.visible=!1,U.mk.kp.forEach(Q=>Q.visible=!1);return}U.waste.geometry=ue(C,N.nx0,N.nx1),kt(U.waste.geometry);let B=N.W/2,nt=N.T/2,W=C.map(([Q,$])=>[Q*1.005,$>=nt-1e-6?$+.005:$]);U.mk.kp.length||(U.mk.kp=N.kerfs.map(Q=>{let $=new qt(new cn,q.kerf);return $.userData.x=Q,x.add($),$})),U.mk.kp.forEach(Q=>{Q.geometry.dispose(),Q.geometry=ue(W,Q.userData.x-.035,Q.userData.x+.035),Q.visible=!0})}function It(x,C,U=1,N=650){if(C.length<3||Re(C)<1e-4)return Promise.resolve();let B=x.userData.c,nt=q.beech.clone();nt.transparent=!0;let W=d(q.beech).clone();W.transparent=!0;let Q=ue(C,B.nx0+.05,B.nx1-.05);kt(Q);let $=new qt(Q,[W,nt]);return $.castShadow=!0,x.add($),P(N,wt=>{$.position.set(Math.sin(wt*2)*.4,Math.sin(wt*Math.PI)*2.2+wt*.4,U*wt*5),$.rotation.set(U*wt*1.6,0,0),nt.opacity=W.opacity=1-wt*wt},j).then(()=>{x.remove($),Q.dispose()})}async function Xt(x,C,U,N=1){let B=x.userData.poly,nt=Se(B,(W,Q)=>-C(W,Q));Lt(x,Se(B,C)),await It(x,nt,N,U)}function zt(){mt&&r.remove(mt,Ot),mt=pt.stopped?qe(pt):ut(pt),pt===nr.halving?Ot=ut(pt):pt.stopped?Ot=an(pt):pt.bench?Ot=ut({L:16,T:1.98,W:4.5},!1):Ot=ut({L:14,T:1.98,W:4.5},!1),Ot.position.z=-22,r.add(mt,Ot),y=pt.W/2+1.5,m=y+1.3,E.position.z=y,M.position.z=y-1.7,E.visible=M.visible=!0,o.visible=!1,A(10),at&&(r.remove(at),at=null),pt.bench&&(mt.position.set(0,pt.T/2,0),Ot.position.set(0,1,-11))}let me=we(28,0,-14);async function te(x,C,U,N){let B=u.pencil.obj;await G(B,x,me,350),await P(U,nt=>{B.position.lerpVectors(x,C,nt),N&&N(nt)},j)}let be=(x,C)=>U=>{x.scale[C]=Math.max(.001,U)};async function De(x,C=1200){let U=x.userData.mk.hatch,N=x.userData.c,B=u.pencil.obj,nt=N.T;if(x!==mt||L){await P(C,wt=>U.forEach(Rt=>Rt.material.opacity=wt));return}let W=N.W/2,Q=[],$=Math.max(6,Math.round(N.W*1.6));for(let wt=0;wt<=$;wt++)Q.push(z(wt%2?N.nx1-.2:N.nx0+.2,nt,W-.2-(N.W-.4)*wt/$));await G(B,Q[0],me,350),await P(C,wt=>{let Rt=wt*(Q.length-1),Kt=Math.min(Q.length-2,Math.floor(Rt));B.position.lerpVectors(Q[Kt],Q[Kt+1],Rt-Kt),U.forEach(ye=>ye.material.opacity=Math.min(1,wt*1.15))},j)}let Pe=!0,k=null,Qe=z(0,0,0),Ee=z(0,0,0),He=z(18,16,25),Nt=()=>k?k.localToWorld(Qe.clone()):Ee.clone(),Ke=1.28;function he(){let x=Nt();c.target.copy(x),l.position.copy(x).add(He.clone().multiplyScalar(Ke))}function ne(x,C,U=800){return k=null,Ee.copy(x),C&&He.copy(C),Pe=!0,L?(he(),Promise.resolve()):tt(U)}function T(x,C,U){k=x,Qe=U?U.clone():z(0,0,0),C&&He.copy(C),Pe=!0,L&&he()}function v(x,C,U=900){return ne(C,x.clone().sub(C),U*.8)}c.addEventListener("start",()=>{Pe=!1,c.autoRotate=!1});let K=new en().setFromRotationMatrix(new We().makeBasis(z(0,1,0),z(0,0,1),z(1,0,0)));async function _t(x,C,U,N=1e3){let B=x.position.clone(),nt=x.quaternion.clone(),W=z((B.x+C.x)/2,Math.max(B.y,C.y)+10,(B.z+C.z)/2);await P(N,Q=>{let $=1-Q;x.position.set($*$*B.x+2*$*Q*W.x+Q*Q*C.x,$*$*B.y+2*$*Q*W.y+Q*Q*C.y,$*$*B.z+2*$*Q*W.z+Q*Q*C.z),x.quaternion.slerpQuaternions(nt,U,Q)})}async function dt(x,C=10){await _(10,300),await _t(x,z(p,C,m),K,1100),await _(6,600),st()}async function Dt(x){await _(9,300);let C=x.position.clone(),U=x.quaternion.clone(),N=new en().setFromAxisAngle(z(0,0,1),Math.PI).multiply(U);await P(1100,B=>{x.quaternion.slerpQuaternions(U,N,B),x.position.set(C.x,C.y+Math.sin(B*Math.PI)*6,C.z)}),await _(6,400),st()}let bt=p,ot=x=>z(bt,0,y+.3+x.userData.c.W/2);async function lt(x,C=new en){let U=x.userData.c.W;await _(6+U+1.5,300),T(x,z(14,14,30)),await _t(x,ot(x),C,1100),await _(6+U-2,600),st()}async function Ut(x){let C=x.userData.c.W;await _(6+C-1.2,300);let U=x.position.clone(),N=x.quaternion.clone(),B=new en().setFromAxisAngle(z(0,1,0),Math.PI).multiply(N);await P(1100,nt=>{x.quaternion.slerpQuaternions(N,B,nt),x.position.set(U.x,U.y+Math.sin(nt*Math.PI)*4,U.z)}),await _(6+C-2,400),st()}async function D(x,C){await _(10,350),await _t(x,C,new en,1e3)}let at=null;async function rt(x,C){let U=u.gclamp.obj,N=U.userData.screw,B=-5-(C-6.6)-2.9;N.position.y=B-4,N.rotation.y=0,await X("gclamp",z(x,C-6.6,y-1.1),we(0,90,0),700),await P(1e3,nt=>{N.position.y=B-4+4*nt,N.rotation.y=nt*Math.PI*5}),st()}async function At(x,C,U){let N=x.userData.c,B=x.position.y+N.T/2,nt=x.position.z,W=(C+U)/2,Q=C>=N.nx1-1e-6?-1:1;ne(z(W,B,nt+1),z(9*Q,9,15),0),at=$t(U-C,2.5,N.W+2,0,0,0,q.beechDark),at.position.set(W,B+1.25+9,nt),r.add(at),await G(at,z(W,B+1.25,nt),null,600,$=>1-(1-$)*(1-$)),Ht(260,.1,"triangle",.12),await rt(W,B+2.5)}async function yt(){let x=u.gclamp.obj.userData.screw,C=x.position.y;if(await P(500,U=>{x.position.y=C-3*U,x.rotation.y=Math.PI*5*(1-U)}),await ct("gclamp",450),at){let U=at;await G(U,U.position.clone().add(z(0,10,-6)),null,450),r.remove(U),at=null}}async function Tt(x,C,U,N=1){let B=x.parent.localToWorld(x.position.clone()).x,nt=C.position.y+C.userData.c.T/2,W=C.position.z,Q=u.tenon.obj,$=we(0,90,0);x.visible=!0,ne(z(B,nt-.5,W),z(7*N,14,15),0),Q.visible?await G(Q,z(B,nt+.4,W+9),$,450):await X("tenon",z(B,nt+.4,W+9),$),await P(1500,wt=>{let Rt=Math.sin(wt*Math.PI*8);Q.position.set(B,nt-wt*U,W+9+Rt*3),x.scale.y=Math.max(.001,wt),Math.random()<.08&&ae(.07,3200,.05)},j),await G(Q,z(B,nt+.4,W+9),null,250)}let ee=(x,C,U)=>new en().setFromRotationMatrix(new We().makeBasis(x,C,U));async function Te(x,C){let U=x.userData.c,N=U.W/2,B=U.T/2,nt=U.depth,W=B-nt,Q=N/nt,$=u.chisel.obj,wt=u.mallet.obj,Rt=U.nx1-U.nx0,Kt=Rt>3?[U.nx0+Rt*.27,U.nx1-Rt*.27]:[(U.nx0+U.nx1)/2],ye=(St,le,pe)=>x.localToWorld(z(St,le,pe)),ke=St=>St.clone().applyQuaternion(x.quaternion).normalize(),Et=()=>ke(z(0,1,0)).y>.5,fe=()=>Et()?ke(z(0,0,1)).z>0?1:-1:ke(z(0,0,1)).x>0?1:-1,oe=()=>Et()?Ut(x):Dt(x),de=16.85+4.75;function Mt(St,le){let pe=ke(z(0,1,0)),Qt=ke(z(0,0,le)),se=ke(z(1,0,0)),re=Qt.clone().multiplyScalar(Math.cos(St)).sub(pe.clone().multiplyScalar(Math.sin(St))).normalize(),Ue=pe.clone().sub(re.clone().multiplyScalar(re.dot(pe))).normalize(),ze=new F().crossVectors(re,Ue),Ve=z(0,-1,0);Ve.sub(re.clone().multiplyScalar(re.dot(Ve))).normalize();let sn=Ve.clone().negate(),mn=new F().crossVectors(sn,re).normalize();return{axis:re,qc:ee(ze,re,Ue),qm:ee(mn,sn,re)}}let xt=()=>{x.userData.mk.hatch.forEach(St=>St.visible=!1),x.userData.mk.kerf.forEach(St=>St.visible=!1)};if(C==="peak"){let St=Math.atan(nt/N),le=!0;for(let pe=0;pe<2;pe++){let Qt=fe(),{axis:se,qc:re,qm:Ue}=Mt(St,Qt);for(let ze of[.5,.75,1]){let Ve=B-nt*ze,sn=(mn,on)=>ye(mn,Ve+on*(B-Ve),Qt*(N-on*(B-Ve)*Q));for(let mn of Kt){let on=sn(mn,0).add(se.clone().multiplyScalar(.6)),xn=on.clone().add(se.clone().multiplyScalar(de+3));le?(await X("chisel",on,re,600),await X("mallet",xn,Ue,500),le=!1):await Promise.all([G($,on,re,300),G(wt,xn,Ue,300)]);for(let Nn of Kt.length>1?[1]:[.5,1]){let Mi=sn(mn,Nn),or=Mi.clone().add(se.clone().multiplyScalar(de));await G(wt,or.clone().add(se.clone().multiplyScalar(3)),null,160),await G(wt,or,null,110,hi=>hi*hi),st(),await G($,Mi,null,110)}}xt(),await G($,sn(Kt[0],0).add(se.clone().multiplyScalar(2.5)),null,200),await Xt(x,(mn,on)=>Qt*mn+(on-Ve)*Q-N,520,Qt),pe===0&&ze===.5&&await v(Et()?z(bt+15,9,y+24):z(p+27,15,27),Et()?z(bt,.5,y+2):z(p+1,10,m),1200)}pe===0&&(await Promise.all([G($,$.position.clone().add(se.clone().multiplyScalar(9)),null,350),G(wt,wt.position.clone().add(se.clone().multiplyScalar(9)),null,350)]),await oe())}await ct("mallet",450),await ct("chisel",450)}else{for(let St=0;St<2;St++){let le=fe(),{axis:pe,qc:Qt}=Mt(0,le);for(let se=0;se<Kt.length;se++){let re=Kt[se],Ue=W+.02,ze=ye(re,Ue,le*(N+.8)),Ve=ye(re,Ue,le*.05);St===0&&se===0?await X("chisel",ze,Qt,600):await G($,ze,Qt,300),await P(650,sn=>{$.position.lerpVectors(ze,Ve,sn),Math.random()<.1&&ae(.05,4200,.04)},j),await G($,ze,null,250)}await Xt(x,(se,re)=>le*se,520,le),St===0&&(await G($,$.position.clone().add(pe.clone().multiplyScalar(9)),null,300),await oe())}await ct("chisel")}}async function vt(x){let C=x.userData.c,U=C.W/2,N=C.T/2,B=C.depth,nt=U/B;x.userData.mk.hatch.forEach(W=>W.visible=!1),x.userData.mk.kerf.forEach(W=>W.visible=!1);for(let W of[1,-1])for(let Q of[.5,.75,1]){let $=N-B*Q;await Xt(x,(wt,Rt)=>W*wt+(Rt-$)*nt-U,260,W)}await Xt(x,(W,Q)=>W,260,1),await Xt(x,(W,Q)=>-W,260,-1)}function ce(x,{one:C=!1,endGauge:U=!1}={}){let N=x.W/2,B=x.T,nt=x.depth,W=x.L/2,Q=x.nx1-x.nx0;return[{tool:"rule",t:"Measure",x:x.txt.measure,near:{pencil:"Close: you will use the pencil too, but what do you measure with?"},async run(){let $=mt.userData.mk;ne(z(x.nx0+(C?0:Q/2),B,N-.6),z(5,9,11),0),await X("rule",z(0,B+.04,N-.8-1.25),C?we(0,180,0):we(0,0,0)),await X("pencil",z(x.nx0,B,N-.1),me,600);let wt=C?[x.nx0]:[x.nx0,x.nx1];for(let Rt=0;Rt<wt.length;Rt++)await te(z(wt[Rt],B,N-.05),z(wt[Rt],B,N-.75),380,be($.ticks[Rt],"z"));await Promise.all([ct("rule"),ct("pencil")])}},{tool:"square",t:C?"Square the shoulder line":"Square the lines",x:C?"Use the try square to carry the shoulder line across the face and down both edges.":"Hold the try square against the edge and draw the lines across the face, then down both edges.",near:{pencil:"You need the pencil too, but what keeps the line square?",rule:"A rule measures. What keeps the line at 90\xB0?"},async run(){let $=mt.userData.mk,wt=u.square.obj,Rt=C?[x.nx0]:[x.nx0,x.nx1];ne(z(x.nx0+(C?0:Q/2),B,0),z(-6,16,-2),0),await X("square",z(x.nx0-2.4,B+.075,N),we(0,0,0)),await X("pencil",z(x.nx0,B,N),me,500),T(u.pencil.obj,z(-6,16,-2));for(let Kt=0;Kt<Rt.length;Kt++)Kt&&await G(wt,z(Rt[Kt],B+.075,N),null,500),await te(z(Rt[Kt],B,N-.05),z(Rt[Kt],B,-N+.05),700,be($.top[Kt],"z"));ne(z(x.nx0+(C?0:Q/2),B-.5,N),z(-7,6,13),0),await G(wt,z(x.nx0-2.4,B,N+.08),we(-90,0,0),600);for(let Kt=0;Kt<Rt.length;Kt++)Kt&&await G(wt,z(Rt[Kt],B,N+.08),null,400),await te(z(Rt[Kt],B,N+.05),z(Rt[Kt],B-nt-.25,N+.05),450,be($.edgeF[Kt],"y"));await P(300,Kt=>$.edgeB.forEach(ye=>ye.scale.y=Math.max(.001,Kt))),await Promise.all([ct("square"),ct("pencil")])}},{tool:"gauge",t:"Gauge the depth",x:x.txt.gauge,near:{rule:"Which tool scores a line parallel to a face?",square:"The try square is done. Which tool marks the depth?"},async run(){let $=mt.userData.mk,wt=u.gauge.obj;wt.userData.pin.position.y=-nt;let Rt=z(0,-nt,0);if(U)T(wt,z(5,3.5,14),Rt),await X("gauge",z(x.nx0-.6,B,N),we(0,0,0)),await P(700,Kt=>{wt.position.x=x.nx0-.6+Kt*(Q+.6),$.gaugeF.scale.x=Math.max(.001,Kt)},j),T(wt,z(8,4,12),Rt),await G(wt,z(W,B,N+.6),we(0,90,0),450),await P(800,Kt=>{wt.position.z=N-Kt*x.W,$.gaugeE.scale.z=Math.max(.001,Kt)},j),T(wt,z(-5,3.5,-14),Rt),await G(wt,z(W,B,-N),we(0,180,0),450),await P(700,Kt=>{wt.position.x=W-Kt*(Q+.6),$.gaugeB.scale.x=Math.max(.001,Kt)},j);else{let Kt=Q+1.2;T(wt,z(5,3.5,14),Rt),await X("gauge",z(x.nx0-.6,B,N),we(0,0,0)),await P(900,ye=>{wt.position.x=x.nx0-.6+ye*Kt,$.gaugeF.scale.x=Math.max(.001,ye)},j),T(wt,z(-5,3.5,-14),Rt),await G(wt,z(x.nx1+.6,B+6,0),we(0,180,0),500),await G(wt,z(x.nx1+.6,B,-N),null,400),await P(900,ye=>{wt.position.x=x.nx1+.6-ye*Kt,$.gaugeB.scale.x=Math.max(.001,ye)},j)}await ct("gauge")}},{tool:"pencil",t:"Shade the waste",x:C?"Shade the waste on the face, the edges and the end.":"Shade the waste with a pencil so you know which part comes out.",near:{},async run(){ne(z(x.nx0+Q/2,B,0),z(4,12,9),0),await X("pencil",z(x.nx0,B+.5,N),me,500),T(u.pencil.obj,z(5,14,11)),await De(mt),await ct("pencil")}},{tool:["quick","gclamp"],t:"Clamp a guide block",x:"Clamp a scrap block on the keep side of the line. The saw runs against it for a straight, square cut.",near:{vice:"The vice comes later. What holds a block down on the bench?",quick:"A quick clamp would do it too. Here the G clamp holds the block.",tenon:"Set up a guide block first, so the cut stays straight.",square:"The lines are marked. What holds a guide block in place?"},async run(){await At(mt,x.nx0-3,x.nx0)}}]}function Ae(){let x=pt,C=x.txt,U=()=>mt.userData.mk;return[...ce(x),{tool:"tenon",t:"Saw the sides",x:C.saw,near:{coping:"A coping saw is for curves. Which saw gives a straight cut?",chisel:"Saw first, then chisel."},async run(){let N=U().kerf;await Tt(N[0],mt,x.depth),await G(u.tenon.obj,u.tenon.obj.position.clone().add(z(0,6,0)),null,300),await yt(),await At(mt,x.nx1,x.nx1+3),await Tt(N[N.length-1],mt,x.depth,-1),await yt(),N.length===3&&await Tt(N[1],mt,x.depth),await ct("tenon"),await v(z(...pt.cam),z(...pt.tgt),700)}},{tool:"vice",t:"Clamp it in the vice",x:"Slide the wood across and clamp it in the bench vice, face up, with the joint centred over the vice and raised clear of the jaws so you can chisel in from the edges.",near:{quick:"A quick clamp holds work on the bench. What grips it in the vice?",gclamp:"A G clamp holds work on the bench. What grips it in the vice?"},async run(){await v(z(bt+16,22,y+40),z(bt-6,0,y+2),900),await lt(mt)}},{tool:"chisel",t:"Chisel to a peak",x:"With a mallet, chisel halfway down the waste and up at an angle. Halve it again until you reach the gauge line. Turn the wood round and repeat from the other edge to leave a peak.",near:{plane:"A plane smooths a surface. Which tool removes the waste?",tenon:"The saw cuts are done. What takes the waste out?",coping:"The saw cuts are done. What takes the waste out?"},async run(){await v(z(bt+30,16,y+52),z(bt,-2,y+12),1e3),await Te(mt,"peak")}},{tool:"chisel",t:"Pare it flat",x:"Pare the peak away flat on the gauge line. Go only halfway in from each side so the far edge does not split.",near:{plane:"Close, but a plane will not reach into the joint. Which tool pares it flat?",tenon:"The sawing is done."},async run(){await v(z(bt+15,9,y+24),z(bt,.5,y+2),600),await Te(mt,"flat")}},{tool:null,t:C.second[0],x:C.second[1],async run(){if(await D(mt,z(0,x.T/2,0)),await v(z(...pt.cam),z(...pt.tgt),800),pt===nr.halving){let N=Ot.userData.mk;await G(Ot,z(0,x.T/2,-9),null,700),await P(400,B=>N.ticks.forEach(nt=>nt.scale.z=Math.max(.001,B))),await P(400,B=>{N.top.forEach(nt=>nt.scale.z=Math.max(.001,B)),[...N.edgeF,...N.edgeB].forEach(nt=>nt.scale.y=Math.max(.001,B))}),await P(400,B=>{N.gaugeF.scale.x=N.gaugeB.scale.x=Math.max(.001,B)}),await De(Ot,400),N.kerf.forEach(B=>B.visible=!0),await P(500,B=>N.kerf.forEach(nt=>nt.scale.y=Math.max(.001,B))),await vt(Ot)}else await G(Ot,z(0,1,-11),null,800),await X("square",z(-7,1.98+.075,-11+2.25),we(0,0,0),700),await tt(900),await ct("square",500)}},{tool:null,t:C.fit[0],x:C.fit[1],async run(){if(pt===nr.halving)await G(Ot,z(0,9,-6),null,700),await G(Ot,z(0,9,0),we(180,90,0),800),await G(Ot,z(0,x.T/2,0),null,700,N=>N*N);else{let N=x.T-x.depth;await G(Ot,z(0,10,-6),null,700),await G(Ot,z(0,N+7+3,0),we(0,0,90),900),await G(Ot,z(0,N+7,0),null,800,B=>B*B),await v(z(26,21,32),z(0,4.5,0))}Ht(523,.2,"sine",.14),Ht(784,.3,"sine",.12,.1)}}]}function Gt(){let x=pt,C=x.W/2,U=x.depth,N=x.nx1-x.nx0,B=x.L/2,nt=(Et,fe,oe)=>mt.localToWorld(z(Et,fe,oe)),W=null,Q=()=>[[-C,0],[C,0],[C,N],[-C,N]];function $(){let Et=mt.userData.mk.cheek;Et.visible=!0,Et.geometry.dispose();let fe=new vn(Q().map(([xt,St])=>new gt(xt,St))),oe=Se(Se(W,(xt,St)=>St-(N-.012)),(xt,St)=>Math.abs(xt)-(C-.012));if(oe.length>2&&Re(oe)>1e-4){let xt=oe.reduce((St,le)=>[St[0]+le[0]/oe.length,St[1]+le[1]/oe.length],[0,0]);fe.holes.push(new si(oe.map(([St,le])=>new gt(xt[0]+(St-xt[0])*.998,xt[1]+(le-xt[1])*.998))))}let de=new Wr(fe),Mt=de.attributes.position;for(let xt=0;xt<Mt.count;xt++){let St=Mt.getX(xt),le=Mt.getY(xt);Mt.setXYZ(xt,B-le,.05,St)}Et.geometry=de}async function wt(Et,fe=2400){let oe=u.tenon.obj,de=W,Mt=(Qt,se)=>nt(B-se,.05,Qt).y,xt=[-C,C].sort((Qt,se)=>Mt(se,0)-Mt(Qt,0))[0],St=Mt(xt,0)+.3,le=Math.min(Mt(-C,Et(-C,1)),Mt(C,Et(C,1))),pe=nt(B,.05,0).z;oe.visible?await G(oe,z(p-12,St+.5,pe),we(0,0,0),400):await X("tenon",z(p-12,St+.5,pe),we(0,0,0),700),await P(fe,Qt=>{let se=Math.sin(Qt*Math.PI*10);oe.position.set(p-12+se*3,St+(le-St)*Qt,pe),W=Se(de,(re,Ue)=>Et(re,Qt)-Ue),$(),Math.random()<.08&&ae(.07,3200,.05)},j),await G(oe,z(p-12,St+1.5,pe),null,250)}let Rt=Et=>new en().setFromAxisAngle(z(0,0,1),Et*Math.atan(N/x.W)).multiply(K),Kt=Et=>z(p,0,m).sub(z(B-8,0,0).applyQuaternion(Et));async function ye(Et,fe=1e3,oe=3){let de=mt.quaternion.clone();await P(fe,Mt=>{mt.quaternion.slerpQuaternions(de,Et,Mt);let xt=Kt(mt.quaternion.clone());mt.position.set(xt.x,xt.y+Math.sin(Mt*Math.PI)*oe,xt.z)})}let ke=Et=>new en().setFromAxisAngle(z(0,1,0),Math.PI).multiply(Et);return[...ce(x,{one:!0,endGauge:!0}),{tool:"tenon",t:"Saw the shoulder",x:"Saw down against the block, on the waste side of the line, to the gauge line halfway through.",near:{coping:"A coping saw is for curves. Which saw gives a straight cut?",chisel:"Saw first."},async run(){await Tt(mt.userData.mk.kerf[0],mt,U),await ct("tenon"),await yt()}},{tool:"vice",t:"Clamp it in the vice",x:"Clamp the wood upright in the bench vice, tilted a little, with the waste side facing you.",near:{quick:"A quick clamp holds work on the bench. What grips it upright?",gclamp:"A G clamp holds work flat on the bench. What grips it upright?",tenon:"Hold the wood safely first."},async run(){await v(z(p+30,22,46),z(p,4,y),900),await _(10,300);let Et=Rt(1);await _t(mt,Kt(Et),Et,1100),await _(6,700),st()}},{tool:"tenon",t:"Saw the cheek: rooftop cut",x:"Saw on the waste side of the gauge line: one diagonal, turn the wood round for the other diagonal, then upright down to the shoulder. The waste drops away.",near:{coping:"A coping saw is for curves. Which saw gives a straight cut?"},async run(){let Et=mt.userData.waste,fe=[].concat(Et.material).map(Mt=>{let xt=Mt.clone();return xt.transparent=!0,xt.opacity=.38,xt.depthWrite=!1,xt});Et.material=fe,mt.userData.mk.hatch.forEach(Mt=>Mt.material.opacity=.25),W=Q(),await wt((Mt,xt)=>(Mt+C)/x.W*N-(1-xt)*N),await G(u.tenon.obj,u.tenon.obj.position.clone().add(z(0,8,6)),null,300),await _(9,350),await ye(ke(Rt(-1)),1e3,3),await _(6,350),st(),await wt((Mt,xt)=>(C-Mt)/x.W*N-(1-xt)*N),await G(u.tenon.obj,u.tenon.obj.position.clone().add(z(0,8,6)),null,300),await _(9,350),await ye(K,1e3,3),await _(6,350),st(),await wt((Mt,xt)=>xt*N,1800),await ct("tenon");let oe=mt.userData.mk;oe.cheek.visible=!1,oe.kerf.forEach(Mt=>Mt.visible=!1),oe.hatch.forEach(Mt=>Mt.visible=!1);let de=Et.position.clone();await P(1e3,Mt=>{Et.position.set(de.x-Mt*Mt*12,de.y+Mt*2.5,de.z),Et.rotation.x=Mt*1.2,fe.forEach(xt=>xt.opacity=.38*(1-Mt))},j),Et.visible=!1,Ht(330,.15,"triangle",.12)}},{tool:"chisel",t:"Pare it square",x:"Leave it in the vice and pare the cheek with a chisel, down to the shoulder, for a clean 90\xB0 corner.",near:{plane:"A plane is too big for this. Which tool pares a small surface?",tenon:"The sawing is done. What cleans it up?"},async run(){await v(z(p+18,18,34),z(p,7,m),800);let Et=u.chisel.obj,fe=nt(B,0,0).z+.02,oe=nt(B,0,0).y,de=nt(x.nx0,0,0).y;for(let Mt=0;Mt<3;Mt++){let xt=p-C+1+Mt*(C-1),St=z(xt,oe+.6,fe),le=z(xt,de+.05,fe);Mt===0?await X("chisel",St,we(0,0,0),700):await G(Et,St,we(0,0,0),300);let pe=Jt(1.4,.6,.08,q.beech);r.add(pe),await P(700,Qt=>{Et.position.lerpVectors(St,le,Qt),pe.position.set(xt+.2,le.y-.3-Qt*Qt*6,fe+.4+Qt*2),pe.rotation.set(Qt*4,0,Qt*2),Math.random()<.1&&ae(.05,4200,.04)},j),r.remove(pe),await G(Et,St,null,250)}await ct("chisel")}},{tool:null,t:"Fit the corner",x:"Release the vice. The square end of the second piece sits in the rebate, flush on the outside.",async run(){await D(mt,z(0,x.T/2,0)),await v(z(28,22,30),z(8,5,-5),900),await G(Ot,z(x.nx0+N/2,14,0),we(0,0,90),1e3),await G(Ot,z(x.nx0+N/2,x.T-U+8,0),null,800,Et=>Et*Et),Ht(523,.2,"sine",.14),Ht(784,.3,"sine",.12,.1)}}]}function qe(x){let{L:C,T:U,W:N,nx0:B,nx1:nt,depth:W}=x,Q=N/2,$=U/2,wt=$-W,Rt=Q-N/3,Kt=Rt-1.2,ye=.012,ke=.05,Et=nt-B,fe=(B+nt)/2,oe=new Fe;oe.position.y=$;let de={ticks:[],top:[],edgeF:[],edgeB:[],hatch:[],kerf:[]},Mt={c:x,mk:de,zs:Rt,zp:Kt};oe.userData=Mt,oe.add($t(B+C/2,U,N,(B-C/2)/2,0,0),$t(C/2-nt,U,N,(nt+C/2)/2,0,0),$t(Et,U-W,N,fe,(wt-$)/2,0),$t(Et,W,Q-Rt,fe,(wt+$)/2,(Rt+Q)/2));let xt=(Ue,ze)=>{let Ve=$t(Et,W,ze-Ue,0,W/2,0);return Ve.position.set(fe,wt,(Ue+ze)/2),oe.add(Ve),Ve};Mt.rest=xt(-Q,Kt),Mt.pocket=xt(Kt,Rt);for(let Ue of[B,nt]){let ze=Ne(ke,.004,.7,Ue,$+ye,Q-.38);ze.scale.z=.001,de.ticks.push(ze),oe.add(ze);let Ve=new Fe;Ve.position.set(Ue,$+ye,Q),Ve.add(Ne(ke,.004,N,0,0,-Q)),Ve.scale.z=.001,de.top.push(Ve),oe.add(Ve);let sn=new Fe;sn.position.set(Ue,$,-Q-ye),sn.add(Ne(ke,W+.25,.004,0,-(W+.25)/2,0)),sn.scale.y=.001,de.edgeB.push(sn),oe.add(sn)}let St=new Fe;St.position.set(B-.3,wt,-Q-ye),St.add(Ne(Et+.6,.035,.004,(Et+.6)/2,0,0)),St.scale.x=.001,de.gaugeB=St,oe.add(St);let le=new Fe;le.position.set(nt+1.55,$+ye,Rt),le.add(Ne(.7,.004,ke,-.35,0,0)),le.scale.x=.001,de.tick3=le,oe.add(le);let pe=new Fe;pe.position.set(B-.3,$+ye,Rt),pe.add(Ne(Et+.6,.004,.035,(Et+.6)/2,0,0)),pe.scale.x=.001,de.stopL=pe,oe.add(pe);let Qt=()=>new Pi({map:eh,transparent:!0,opacity:0,depthWrite:!1}),se=new qt(new wn(Et-.1,Rt+Q-.1),Qt());se.rotation.x=-Math.PI/2,se.position.set(fe,$+ye*1.5,(Rt-Q)/2);let re=new qt(new wn(Et-.1,W-.06),Qt());re.rotation.y=Math.PI,re.position.set(fe,$-W/2+.02,-Q-ye*1.5),de.hatch.push(se,re),oe.add(se,re);for(let Ue of x.kerfs){let ze=new Fe;ze.position.set(Ue,$+.002,(Rt-Q)/2);let Ve=new qt(new Je(.07,W,Rt+Q+.02),q.kerf);Ve.position.y=-W/2,ze.add(Ve),ze.scale.y=.001,ze.visible=!1,de.kerf.push(ze),oe.add(ze)}return oe}function an(x){let{T:C,W:U,depth:N}=x,B=U/2,nt=B-U/3,W=14,Q=1.98,$=new Fe;return $.position.y=Q/2,$.add($t(W-N,Q,U,N/2,0,0),$t(N,Q,nt+B,-W/2+N/2,0,(nt-B)/2)),$.userData={c:{L:W,T:Q,W:U}},$}function li(){let x=pt,C=x.W/2,U=x.T,N=x.depth,B=x.T/2,nt=B-N,W=C-x.W/3,Q=W-1.2,$=(x.nx0+x.nx1)/2,wt=x.nx1-x.nx0,Rt=()=>mt.userData.mk,Kt=()=>u.square.obj,ye=()=>u.pencil.obj,ke=()=>u.gauge.obj,Et=we(0,180,0).multiply(we(-90,0,0)),fe=ee(z(-1,0,0),z(0,0,1),z(0,1,0)),oe=ee(z(0,0,-1),z(-1,0,0),z(0,1,0));async function de(Mt,xt,St){let le=u.chisel.obj,pe=u.mallet.obj,Qt=16.85+4.75;for(let se=0;se<xt;se++){let re=le.position.clone().add(z(0,Qt,0));await G(pe,re.clone().add(z(0,3,0)),null,140),await G(pe,re,null,100,Ue=>Ue*Ue),st(),await G(le,le.position.clone().add(z(0,-St,0)),null,90)}}return[ce(x)[0],{tool:"square",t:"Square the lines",x:"Use the try square to draw the lines across the face, then down the back edge only. The front edge stays clean.",near:{pencil:"You need the pencil too, but what keeps the line square?",rule:"A rule measures. What keeps the line at 90\xB0?"},async run(){let Mt=Rt();ne(z($,U,0),z(5,13,8),0),await X("square",z(x.nx0-2.4,U+.075,C),we(0,0,0)),await X("pencil",z(x.nx0,U,C),me,500),T(ye(),z(-6,16,-2));for(let xt=0;xt<2;xt++){let St=xt?x.nx1:x.nx0;xt&&await G(Kt(),z(St,U+.075,C),null,500),await te(z(St,U,C-.05),z(St,U,-C+.05),700,be(Mt.top[xt],"z"))}ne(z($,U-.5,-C),z(-5,5,-14),0),await G(Kt(),z(x.nx0,U,-C-.08),Et,700);for(let xt=0;xt<2;xt++){let St=xt?x.nx1:x.nx0;xt&&await G(Kt(),z(St+2.4,U,-C-.08),null,400),await te(z(St,U,-C-.05),z(St,U-N-.25,-C-.05),450,be(Mt.edgeB[xt],"y"))}await Promise.all([ct("square"),ct("pencil")])}},{tool:"gauge",t:"Gauge the depth",x:"Set the marking gauge to half the thickness and gauge between the lines on the back edge.",near:{rule:"Which tool scores a line parallel to a face?",square:"The try square is done. Which tool marks the depth?"},async run(){let Mt=Rt(),xt=ke();xt.userData.pin.position.y=-N,T(xt,z(-5,3.5,-14),z(0,-N,0)),await X("gauge",z(x.nx1+.6,U,-C),we(0,180,0)),await P(900,St=>{xt.position.x=x.nx1+.6-St*(wt+1.2),Mt.gaugeB.scale.x=Math.max(.001,St)},j),await ct("gauge")}},{tool:"rule",t:"Measure the stop",x:"Measure the width with the steel rule and mark one third in from the front edge. That is where the housing stops.",near:{gauge:"First find where the stop goes. What measures?",pencil:"You need the pencil too, but what measures?"},async run(){let Mt=Rt();ne(z(x.nx1+2,U,0),z(9,10,8),0),await X("rule",z(x.nx1+2.8,U+.04,C-15),we(0,90,0)),await X("pencil",z(x.nx1+1.5,U,W),me,500),await te(z(x.nx1+1.5,U,W),z(x.nx1+.85,U,W),380,be(Mt.tick3,"x")),await Promise.all([ct("rule"),ct("pencil")])}},{tool:"gauge",t:"Gauge the stop line",x:"Set the marking gauge to that third and run it along the face from the front edge, between the two lines.",near:{pencil:"A gauge gives a cleaner, parallel line. Which tool?",square:"The square works across the grain. What marks a line parallel to the edge?"},async run(){let Mt=Rt(),xt=ke();xt.userData.pin.position.y=-(C-W),ne(z($,U,W),z(12,13,2),0),await X("gauge",z(x.nx0-.6,U,C),fe),await P(900,St=>{xt.position.x=x.nx0-.6+St*(wt+1.2),Mt.stopL.scale.x=Math.max(.001,St)},j),xt.userData.pin.position.y=-N,await ct("gauge")}},{tool:"pencil",t:"Shade the waste",x:"Shade the waste on the face and the back edge. Nothing on the front third.",near:{},async run(){let Mt=Rt().hatch,xt=ye();ne(z($,U,-.5),z(4,12,9),0),await X("pencil",z(x.nx0+.2,U+.5,-C+.2),me,500),T(xt,z(5,14,11));let St=[];for(let le=0;le<=8;le++)St.push(z(le%2?x.nx1-.2:x.nx0+.2,U,-C+.2+(W+C-.4)*le/8));await P(1e3,le=>{let pe=le*(St.length-1),Qt=Math.min(St.length-2,Math.floor(pe));xt.position.lerpVectors(St[Qt],St[Qt+1],pe-Qt),Mt.forEach(se=>se.material.opacity=Math.min(1,le*1.15))},j),await ct("pencil")}},{tool:["gclamp","quick"],t:"Clamp it to the bench",x:"Clamp the wood to the bench with a G clamp so it cannot move while you chop.",near:{vice:"You will chop down into it on the bench first. What holds it flat?"},async run(){ne(z($+4,U,1),z(10,11,16),0),await rt(x.nx1+6,U)}},{tool:"chisel",t:"Chop the stop",x:"With a chisel the width of the housing, chop a small square at the stop line, bevel facing into the joint: tap 1, 2, 3 on each side. Pare out the inside, and repeat until you reach half depth.",near:{tenon:"Chop the stop first, so the saw has somewhere to finish.",coping:"Chop the stop first, so the saw has somewhere to finish."},async run(){let Mt=mt,xt=Mt.userData.pocket,St=u.chisel.obj,le=u.mallet.obj,pe=(re,Ue,ze)=>Mt.localToWorld(z(re,Ue,ze));T(xt,z(6,9,9),z(0,0,0));let Qt=[[z($,0,W),we(0,180,0)],[z(x.nx0,0,(Q+W)/2),we(0,90,0)],[z(x.nx1,0,(Q+W)/2),we(0,-90,0)],[z($,0,Q),we(0,0,0)]],se=!0;for(let re=0;re<3;re++){let Ue=B-re*N/3,ze=re?2:3,Ve=N/3/ze;for(let[xn,Nn]of Qt){let Mi=pe(xn.x,Ue+.25,xn.z);se?(await X("chisel",Mi,Nn,600),await X("mallet",Mi.clone().add(z(0,16.85+4.75+3,0)),oe,500),se=!1):await Promise.all([G(St,Mi,Nn,re?180:280),G(le,Mi.clone().add(z(0,16.85+4.75+3,0)),oe,re?180:280)]),await de(St,ze,N/3/ze+.25/ze)}await G(St,pe($,Ue-.1,Q-.6),we(-35,0,0),250),await G(St,pe($,Ue-N/3,W-.2),null,300);let sn=1-(re+1)/3,mn=$t(wt-.1,N/3,W-Q-.1,0,0,0);mn.position.copy(pe($,Ue-N/6,(Q+W)/2)),r.add(mn),xt.scale.y=Math.max(.001,sn),sn<.01&&(xt.visible=!1);let on=mn.position.clone();await P(450,xn=>{mn.position.set(on.x,on.y+xn*3,on.z-xn*3),mn.rotation.x=xn*3},j),r.remove(mn)}await ct("mallet",450),await ct("chisel",450)}},{tool:"tenon",t:"Saw the sides",x:"Clamp a guide block on the line and saw from the back edge into the chopped pocket, down to the gauge line. Then move the block and saw the other side.",near:{coping:"A coping saw is for curves. Which saw gives a straight cut?",chisel:"The stop is chopped. Now saw the sides."},async run(){await yt();let Mt=Rt().kerf,xt=u.tenon.obj,St=we(0,90,0);for(let le=0;le<2;le++){le===0?await At(mt,x.nx0-3,x.nx0):await At(mt,x.nx1,x.nx1+3);let pe=Mt[le],Qt=pe.parent.localToWorld(pe.position.clone()).x;pe.visible=!0,ne(z(Qt,U-.5,-.5),z(le?-7:7,14,15),0);let se=W-.25;xt.visible?await G(xt,z(Qt,U+.4,se),St,400):await X("tenon",z(Qt,U+.4,se),St),await P(1600,re=>{xt.position.set(Qt,U-re*N,se-(1+Math.sin(re*Math.PI*8))*1.2),pe.scale.y=Math.max(.001,re),Math.random()<.08&&ae(.07,3200,.05)},j),await G(xt,z(Qt,U+.4,se),null,250),await yt()}await ct("tenon")}},{tool:"vice",t:"Clamp it in the vice",x:"Slide it across and clamp it in the vice, face up, with the open back edge towards you.",near:{gclamp:"This time it needs holding in the vice.",quick:"This time it needs holding in the vice."},async run(){await lt(mt,we(0,180,0))}},{tool:"chisel",t:"Chisel out the waste",x:"Chisel straight in from the open edge with a mallet: halfway down, then halfway again, then on the gauge line, until it meets the pocket.",near:{plane:"A plane will not reach in. What takes the waste out?",tenon:"The sawing is done. What takes the waste out?"},async run(){let Mt=mt,xt=Mt.userData.rest,St=u.chisel.obj,le=u.mallet.obj,pe=(on,xn,Nn)=>Mt.localToWorld(z(on,xn,Nn));Rt().hatch.forEach(on=>on.visible=!1),Rt().kerf.forEach(on=>on.visible=!1);let Qt=z(0,0,-1).applyQuaternion(Mt.quaternion).normalize(),se=z(0,1,0).applyQuaternion(Mt.quaternion),re=z(1,0,0).applyQuaternion(Mt.quaternion),Ue=ee(new F().crossVectors(Qt,se),Qt,se),ze=z(0,-1,0).sub(Qt.clone().multiplyScalar(Qt.dot(z(0,-1,0)))).normalize(),Ve=ee(new F().crossVectors(ze.clone().negate(),Qt).normalize(),ze.clone().negate(),Qt),sn=16.85+4.75;await v(z(bt+16,10,y+30),pe($,nt,-C),900);let mn=!0;for(let on of[.5,.75,1]){let xn=B-N*on+.02,Nn=pe($,xn,-C-.6),Mi=pe($,xn,Q-.05);mn?(await X("chisel",Nn,Ue,600),await X("mallet",Nn.clone().add(Qt.clone().multiplyScalar(sn+3)),Ve,500),mn=!1):await Promise.all([G(St,Nn,Ue,300),G(le,Nn.clone().add(Qt.clone().multiplyScalar(sn+3)),Ve,300)]);for(let lr of[.5,1]){let ah=Nn.clone().lerp(Mi,lr),oh=ah.clone().add(Qt.clone().multiplyScalar(sn));await G(le,oh.clone().add(Qt.clone().multiplyScalar(3)),null,150),await G(le,oh,null,110,lh=>lh*lh),st(),await G(St,ah,null,110)}let or=(xn-nt)/N,hi=$t(wt-.1,xt.scale.y*N-(xn-nt),Q+C-.1,0,0,0);hi.position.copy(pe($,(xn+nt+xt.scale.y*N)/2,(Q-C)/2)),hi.quaternion.copy(Mt.quaternion),r.add(hi),xt.scale.y=Math.max(.001,or),or<.03&&(xt.visible=!1);let Rd=hi.position.clone();await P(500,lr=>{hi.position.copy(Rd).add(Qt.clone().multiplyScalar(lr*5)).add(z(0,Math.sin(lr*Math.PI)*2-lr*2,0)),hi.rotation.x+=.05},j),r.remove(hi),await G(St,Nn.clone().add(Qt.clone().multiplyScalar(1.5)),null,200)}await ct("mallet",450),await ct("chisel",450)}},{tool:null,t:"Fit the shelf",x:"The shelf has a small notch cut at its front corner, so it slides in and hides the end of the housing.",async run(){await D(mt,z(0,x.T/2,0)),await v(z(20,19,29),z(0,1.5,-3),800),await G(Ot,z(0,1,-11),null,700);let Mt=x.T-x.depth;await G(Ot,z(0,10,-6),null,700),await G(Ot,z(0,Mt+7+3,0),we(0,0,90),900),await G(Ot,z(0,Mt+7,0),null,800,xt=>xt*xt),await v(z(26,21,32),z(0,4.5,0)),Ht(523,.2,"sine",.14),Ht(784,.3,"sine",.12,.1)}}]}let nn=[],Ge=0,Vn="watch",$n=!1,Pn=!1,Tn=!1,jn=!1,ya=t(".wscap b"),va=t(".wscap p"),xs=t(".wsdots"),Ma=t(".wspill"),ji=t(".wsfb"),yi=t(".wstray");function El(){k=null,Ee.set(-12,0,-6),He.set(30,44,60),Pe=!0,he(),c.autoRotate=!1,c.update()}function ci(){H++,V.length=0,zt();for(let x in u){let C=u[x].obj;C.visible=!1,C.position.copy(g)}nn=pt.bench?Gt():pt.stopped?li():Ae(),ie(),Ge=0,Tn=!1,jn=!1,t(".wsexp").textContent="Exploded view",$n=!1,Pn=!1,t(".wsplay").innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg><span>Play</span>',El(),ar()}async function Qi(x){$n=!0,Pe=!0;let C=H;if(vi(x),await nn[x].run(),C!==H)throw"reset";$n=!1}async function Tl(x){ci(),L=!0;try{for(let C=0;C<x;C++)await nn[C].run()}finally{L=!1}Ge=x,vi(x)}function vi(x){let C=x>=nn.length,U=nn[Math.min(x,nn.length-1)];Ma.textContent=C?"Complete":`Step ${x+1} of ${nn.length}`,ya.textContent=C?pt.name:U.t,va.textContent=C?pt.txt.done:Vn==="try"&&U.tool&&x===Ge&&!$n?"Which tool do you need next?":U.x,xs.innerHTML=nn.map((N,B)=>`<i class="${B<x?"d":B===x?"c":""}"></i>`).join("")}function ar(){t(".wsdone").classList.toggle("on",Tn),t(".wswin").classList.toggle("on",Tn&&Vn==="try"),yi.classList.toggle("wshide",Tn||Vn!=="try"),t(".wsctl").classList.toggle("wshide",Vn!=="watch"||Tn);let x=t(".wsbig span");x&&(x.textContent=Vn==="watch"?Ge>0&&Ge<nn.length?"Carry on":"Play":"Start"),vi(Ge)}function Sa(x){t(".wsplay").innerHTML=x?'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5.5" width="4" height="13" rx="1" fill="currentColor" stroke="none"/><rect x="13.5" y="5.5" width="4" height="13" rx="1" fill="currentColor" stroke="none"/></svg><span>Pause</span>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg><span>Play</span>'}function S(){Tn=!0,Pe=!1,c.autoRotate=!0,c.autoRotateSpeed=1.4,ar()}async function O(){if(Pn)return;Pn=!0,t(".wsplay").innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5.5" width="4" height="13" rx="1" fill="currentColor" stroke="none"/><rect x="13.5" y="5.5" width="4" height="13" rx="1" fill="currentColor" stroke="none"/></svg><span>Pause</span>';let x=H;Ge>=nn.length&&(ci(),Pn=!0,t(".wsplay").innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="5.5" width="4" height="13" rx="1" fill="currentColor" stroke="none"/><rect x="13.5" y="5.5" width="4" height="13" rx="1" fill="currentColor" stroke="none"/></svg><span>Pause</span>');try{for(;Pn&&Ge<nn.length;)await Qi(Ge),Ge++,vi(Ge),await tt(450)}catch{return}x===H&&(Pn=!1,t(".wsplay").innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg><span>Play</span>',Ge>=nn.length&&S())}t(".wsplay").onclick=()=>{if(ft(),Pn){Pn=!1,t(".wsplay").innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg><span>Play</span>';return}O()},t(".wsnext").onclick=async()=>{if(ft(),!($n||Pn||Ge>=nn.length)){try{await Qi(Ge)}catch{return}Ge++,vi(Ge),Ge>=nn.length&&S()}},t(".wsprev").onclick=async()=>{$n||Pn||await Tl(Math.max(0,Ge-1))},t(".wsagain").onclick=()=>{ci(),Vn==="watch"&&O()};let et=t(".wsx"),Y=t(".wsstage"),Z=!1;function Bt(){if(!Z){Z=!0,et.classList.add("fs"),document.documentElement.style.overflow="hidden";try{let x=Y.requestFullscreen?Y.requestFullscreen({navigationUI:"hide"}):Y.webkitRequestFullscreen?Y.webkitRequestFullscreen():null;x&&x.then&&x.then(()=>{try{screen.orientation.lock("landscape").catch(()=>{})}catch{}}).catch(()=>{})}catch{}try{history.pushState({wsfs:1},"")}catch{}requestAnimationFrame(h)}}function jt(x){if(Z){Z=!1,Pn=!1,Sa(!1),et.classList.remove("fs"),document.documentElement.style.overflow="";try{document.fullscreenElement?document.exitFullscreen():document.webkitFullscreenElement&&document.webkitExitFullscreen()}catch{}try{screen.orientation.unlock()}catch{}!x&&history.state&&history.state.wsfs&&history.back(),requestAnimationFrame(h)}}addEventListener("popstate",()=>jt(!0)),document.addEventListener("fullscreenchange",()=>{!document.fullscreenElement&&Z&&document.webkitFullscreenElement}),t(".wsbig").onclick=()=>{ft(),Bt(),Vn==="watch"?(Ge>=nn.length&&ci(),O()):ar()},t(".wsclose").onclick=()=>jt(),addEventListener("keydown",x=>{Z&&x.key==="Escape"&&jt()});{let x=null;e.addEventListener("pointerdown",C=>{x={x:C.clientX,y:C.clientY,t:performance.now(),n:(x&&x.n||0)+1}}),e.addEventListener("pointerup",C=>{if(!x||!Z||Vn!=="watch"){x=null;return}let U=Math.hypot(C.clientX-x.x,C.clientY-x.y),N=performance.now()-x.t;x=null,U<8&&N<350&&t(".wsplay").click()})}t(".wsexp").onclick=async()=>{if($n)return;jn=!jn,t(".wsexp").textContent=jn?"Put together":"Exploded view";let x=Ot.position.clone();await G(Ot,pt.bench?z(Ot.position.x,pt.T-pt.depth+8+(jn?6:0),Ot.position.z):pt===nr.halving?z(0,jn?6.5:pt.T/2,0):z(0,jn?pt.T-pt.depth+7+5:pt.T-pt.depth+7,0),null,700)},i.querySelectorAll(".wsmode button").forEach(x=>x.onclick=()=>{Vn=x.dataset.m,i.querySelectorAll(".wsmode button").forEach(C=>C.classList.toggle("on",C===x)),ji.textContent="",ci()}),i.querySelectorAll("#wsJ button").forEach(x=>x.onclick=()=>{pt=nr[x.dataset.j],i.querySelectorAll("#wsJ button").forEach(C=>C.classList.toggle("on",C===x)),ji.textContent="",ci()});async function Ft(x,C){if(Vn!=="try"||$n||Tn)return;ft();let U=nn[Ge];if(Array.isArray(U.tool)?U.tool.includes(x):x===U.tool){C.classList.add("ok"),Ht(880,.15),Ht(1320,.18,"sine",.08,.08),ji.textContent="",setTimeout(()=>C.classList.remove("ok"),500);try{for(await Qi(Ge),Ge++;Ge<nn.length&&!nn[Ge].tool;)vi(Ge),await tt(400),await Qi(Ge),Ge++}catch{return}vi(Ge),Ge>=nn.length&&S()}else C.classList.add("no"),Ht(196,.2,"triangle",.15),setTimeout(()=>C.classList.remove("no"),450),ji.textContent=U.near&&U.near[x]||"Not that one yet. What needs doing next?"}let Vt={};(function(){let C=new pa({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});C.setSize(160,160),C.setPixelRatio(1),C.toneMapping=Ks;let U=new Gi;U.environment=new gs(C).fromScene(new ga,.04).texture,U.environmentIntensity=.8;let N=new Xs(16777215,1.8);N.position.set(5,10,8),U.add(N,new ta(16777215,.4));let B=new yn(30,1,.1,500),nt={},W={rule:we(35,-25,0),pencil:we(0,0,-55),square:we(55,25,0),gauge:we(15,-35,0),tenon:we(0,0,0),chisel:we(35,20,-60),coping:we(0,0,0),plane:we(20,-30,0),vice:we(20,-35,0),gclamp:we(5,-25,0),quick:we(100,-25,-90)};for(let Q in u){if(u[Q].hidden)continue;let $=u[Q].make();$.quaternion.copy(W[Q]),U.add($);let wt=new Cn().setFromObject($),Rt=wt.getCenter(z(0,0,0)),Kt=wt.getSize(z(0,0,0)).length();B.position.copy(Rt).add(z(0,0,Kt*1.75)),B.lookAt(Rt),C.render(U,B),nt[Q]=C.domElement.toDataURL(),U.remove($)}C.dispose(),Vt=nt})();function ie(){yi.innerHTML=["rule","pencil","square","gauge","quick","gclamp","vice","tenon","coping","chisel","plane"].map(x=>`<button class="wstl" data-k="${x}"><img src="${Vt[x]}" alt=""><span>${u[x].n}</span></button>`).join(""),yi.querySelectorAll(".wstl").forEach(x=>x.onclick=()=>Ft(x.dataset.k,x))}let xe=0;function Le(x){requestAnimationFrame(Le);let C=Math.min(.1,(x-(xe||x))/1e3);xe=x;for(let N=V.length-1;N>=0;N--){let B=V[N],nt=Math.min(1,(x-B.t0)/B.dur);try{B.fn(B.e(nt))}catch{}nt>=1&&(V.splice(N,1),B.res())}if(Pe){let N=Nt(),B=1-Math.exp(-C*1.25);c.target.lerp(N,B),l.position.lerp(N.add(He.clone().multiplyScalar(Ke)),B)}if(!e.offsetParent)return;let U=E.userData.shop;U&&U.userData.anim&&U.userData.anim(x/1e3),c.update(),n.render(r,l)}return pt=nr.halving,ci(),h(),requestAnimationFrame(Le),i.__ws={},i.__ws}var Cx=`.wsx{--wc:#F4B3C2;font-family:inherit;color:#E6E7EA}
.wsx svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}
.wsx .wseg{display:flex;background:#2A2B30;border:1px solid #3A3B41;border-radius:16px;padding:4px;gap:4px;margin:0 0 10px}
.wsx .wseg button{flex:1;display:flex;align-items:center;justify-content:center;gap:7px;border:0;background:none;border-radius:12px;padding:10px 6px;font-size:14px;font-weight:700;color:#BFC3C8;cursor:pointer;font-family:inherit;touch-action:manipulation}
.wsx #wsJ{display:grid;grid-template-columns:1fr 1fr}
.wsx #wsJ button.on{background:#F4B3C2;color:#2B141D}
.wsx .wsmode button[data-m="watch"].on{background:#B9E5CB;color:#1F4D33}
.wsx .wsmode button[data-m="try"].on{background:#DCC8F0;color:#46306E}
.wsx .wsstage{position:relative}
.wsx .wsview{position:relative;height:min(52vh,430px);border-radius:20px;overflow:hidden;background:radial-gradient(120% 90% at 50% 20%,#F4F5F8 0%,#E3E6EC 65%,#D3D8E0 100%);touch-action:none;margin-bottom:8px}
.wsx .wsview canvas{display:block;width:100%!important;height:100%!important}
.wsx .wspill{position:absolute;left:12px;top:12px;background:rgba(30,31,35,.82);color:#F4F4F6;font-weight:700;font-size:12px;border-radius:999px;padding:5px 11px}
.wsx .wshint{position:absolute;right:12px;bottom:10px;font-size:11px;color:#8b8f99}
.wsx .wsdots{display:flex;gap:5px;margin:0 2px 12px}.wsx .wsdots i{flex:1;height:6px;border-radius:6px;background:#3A3B41}.wsx .wsdots i.d{background:#7CC9A0}.wsx .wsdots i.c{background:#F4B3C2}
.wsx .wscap{background:#2A2B30;border:1px solid #3A3B41;border-radius:16px;padding:14px 16px;margin:0 0 12px;min-height:92px}
.wsx .wscap b{display:block;color:#F4B3C2;font-size:17px;margin-bottom:4px}
.wsx .wscap p{margin:0;font-size:15px;line-height:1.45;color:#E6E7EA}
.wsx .wsctl{display:flex;justify-content:center}
.wsx .wsfstop,.wsx .wsfsbot,.wsx .wsclose,.wsx .wsrot{display:none}
.wsx .wsbig{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:flex;align-items:center;gap:10px;border:0;border-radius:999px;padding:16px 30px 16px 24px;background:rgba(30,31,35,.86);color:#B9E5CB;font:inherit;font-size:18px;font-weight:800;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.35);touch-action:manipulation}
.wsx .wsbig svg{width:30px;height:30px}.wsx .wsbig:hover{background:rgba(30,31,35,.95)}
.wsx.fs .wsbig{display:none}
.wsx.fs .wsstage{position:fixed;inset:0;z-index:1000;background:#1E1F23}
.wsx.fs .wsview{position:absolute;inset:0;height:auto!important;border-radius:0;margin:0}
.wsx.fs .wspill{display:none}.wsx.fs .wshint{display:none}
.wsx.fs .wsfstop{display:block;position:absolute;left:12px;right:68px;top:max(12px,env(safe-area-inset-top));max-width:640px;pointer-events:none}
.wsx.fs .wsfstop .wscap{background:rgba(30,31,35,.86);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);min-height:0;padding:10px 14px;margin:0 0 6px}
.wsx.fs .wsfstop .wscap b{font-size:16px;margin-bottom:2px}.wsx.fs .wsfstop .wscap p{font-size:14px;line-height:1.35}
.wsx.fs .wsfstop .wsdots{margin:0;padding:0 2px}.wsx.fs .wsfstop .wsdots i{background:rgba(30,31,35,.55)}.wsx.fs .wsfstop .wsdots i.d{background:#7CC9A0}.wsx.fs .wsfstop .wsdots i.c{background:#F4B3C2}
.wsx.fs .wsclose{display:flex;align-items:center;justify-content:center;position:absolute;right:12px;top:max(12px,env(safe-area-inset-top));width:46px;height:46px;border:0;border-radius:50%;background:rgba(30,31,35,.86);color:#fff;font-size:20px;cursor:pointer;touch-action:manipulation}
.wsx.fs .wsfsbot{display:flex;flex-direction:column;align-items:center;gap:6px;position:absolute;left:0;right:0;bottom:max(12px,env(safe-area-inset-bottom));padding:0 12px;pointer-events:none}
.wsx.fs .wsfsbot>*{pointer-events:auto}
.wsx.fs .wsfb:empty{display:none}.wsx.fs .wsfb{background:rgba(30,31,35,.86);border-radius:12px;padding:6px 12px;margin:0}
.wsx.fs .wstray{display:flex!important;gap:8px;overflow-x:auto;max-width:100%;padding:4px 2px;scrollbar-width:none}.wsx.fs .wstray.wshide{display:none!important}
.wsx.fs .wstl{flex:none;width:84px;background:rgba(30,31,35,.9)}.wsx.fs .wstl img{max-width:56px}
.wsx.fs .wsdone{width:min(420px,100%)}
@media (orientation:portrait) and (max-width:700px){.wsx.fs .wsrot{display:block;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:rgba(30,31,35,.8);color:#fff;font-size:14px;font-weight:700;border-radius:12px;padding:10px 14px;pointer-events:none;animation:wsrot 4s forwards}}
@keyframes wsrot{0%,70%{opacity:1}100%{opacity:0}}
.wsx .wsctl .wsplay{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-width:160px;border:0;border-radius:999px;padding:13px 28px;font-size:16px;font-weight:800;cursor:pointer;background:#B9E5CB;color:#1F4D33;font-family:inherit;box-shadow:0 4px 14px rgba(0,0,0,.3);touch-action:manipulation}
.wsx .wsctl .wsplay svg{width:20px;height:20px}
.wsx .wshide,.wsx [hidden]{display:none!important}
.wsx .wsfb{min-height:20px;font-size:14px;color:#F4B3C2;margin:8px 2px 8px;font-weight:600}
.wsx .wstray{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.wsx .wstl{border:1px solid #3A3B41;background:#2A2B30;border-radius:14px;padding:6px 4px 8px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;font-family:inherit;touch-action:manipulation}
.wsx .wstl img{width:100%;max-width:74px;aspect-ratio:1}
.wsx .wstl span{font-size:11.5px;font-weight:600;color:#E6E7EA;line-height:1.15;text-align:center}
.wsx .wstl.ok{background:#1C3326;border-color:#7CC9A0}.wsx .wstl.no{background:#3D2320;border-color:#F2A0A8;animation:wssh .35s}
@keyframes wssh{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.wsx .wswin{display:none;background:#1C3326;color:#B9E5CB;font-weight:700;border-radius:12px;padding:10px 14px;margin:0 0 8px}.wsx .wswin.on{display:block}
.wsx .wsdone{display:none;gap:8px}.wsx .wsdone.on{display:flex}
.wsx .wsdone button{flex:1;border:1px solid #3A3B41;border-radius:14px;padding:13px;font-size:15px;font-weight:700;background:#2A2B30;color:#F4F4F6;cursor:pointer;font-family:inherit}`;if(typeof document<"u"&&!document.getElementById("wscss")){let i=document.createElement("style");i.id="wscss",i.textContent=Cx,document.head.appendChild(i)}try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}return Nd(Px);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
