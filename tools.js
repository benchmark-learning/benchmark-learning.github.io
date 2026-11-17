var BMTOOLS3D=(()=>{var Zl=Object.defineProperty;var Zf=Object.getOwnPropertyDescriptor;var jf=Object.getOwnPropertyNames;var $f=Object.prototype.hasOwnProperty;var Kf=(i,e)=>{for(var t in e)Zl(i,t,{get:e[t],enumerable:!0})},Jf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of jf(e))!$f.call(i,s)&&s!==t&&Zl(i,s,{get:()=>e[s],enumerable:!(n=Zf(e,s))||n.enumerable});return i};var Qf=i=>Jf(Zl({},"__esModule",{value:!0}),i);var cb={};Kf(cb,{list:()=>ab,makeHome:()=>qy,mount:()=>rb,spinner:()=>lb,thumb:()=>ob,tour:()=>ib});var ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Td=0,Ic=1,Ad=2;var vs=1,Oo=2,ur=3,pi=0,sn=1,en=2,Ms=0,fr=1,Dc=2,Lc=3,Nc=4,Rd=5;var Ss=100,Cd=101,Pd=102,Id=103,Dd=104,Ld=200,Nd=201,Fd=202,Ud=203,Fc=204,Uc=205,kd=206,Od=207,Bd=208,Hd=209,zd=210,Gd=211,Vd=212,Wd=213,Xd=214,ro=0,ao=1,oo=2,$s=3,lo=4,co=5,ho=6,uo=7,Bo=0,qd=1,Yd=2,mi=0,kc=1,Oc=2,Bc=3,Hc=4,zc=5,Gc=6,ti=7;var Vc=300,Es=301,pr=302,Ho=303,zo=304,Zi=1e3,Hn=1001,fo=1002,dn=1003,Zd=1004;var ha=1005;var Sn=1006,Go=1007;var Ni=1008;var Cn=1009,Wc=1010,Xc=1011,mr=1012,Vo=1013,ni=1014,Vn=1015,ii=1016,Wo=1017,Xo=1018,ws=1020,qc=35902,Yc=35899,Zc=1021,jc=1022,si=1023,Pi=1026,Fi=1027,qo=1028,Yo=1029,is=1030,Zo=1031;var jo=1033,da=33776,ua=33777,fa=33778,pa=33779,$o=35840,Ko=35841,Jo=35842,Qo=35843,el=36196,tl=37492,nl=37496,il=37488,sl=37489,ma=37490,rl=37491,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,dl=37813,ul=37814,fl=37815,pl=37816,ml=37817,gl=37818,xl=37819,_l=37820,yl=37821,bl=36492,vl=36494,Ml=36495,Sl=36283,El=36284,ga=36285,wl=36286;var Or=2300,po=2301,io=2302,_c=2303,yc=2400,bc=2401,vc=2402;var jd=3200;var xa=0,$d=1,Ui="",tn="srgb",Br="srgb-linear",Hr="linear",At="srgb";var so=7680;var Kd=519,Jd=512,Qd=513,eu=514,$c=515,tu=516,nu=517,Kc=518,Jc=519,iu=35044;var Qc="300 es",zn=2e3,Ks=2001;function ep(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function su(){let i=zr("canvas");return i.style.display="block",i}var Wh={},Js=null;function eh(...i){let e="THREE."+i.shift();Js?Js("log",e,...i):console.log(e,...i)}function ru(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function it(...i){i=ru(i);let e="THREE."+i.shift();if(Js)Js("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function rt(...i){i=ru(i);let e="THREE."+i.shift();if(Js)Js("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Lr(...i){let e=i.join(" ");e in Wh||(Wh[e]=!0,it(...i))}function au(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ou={[ro]:ro,[oo]:ho,[lo]:lo,[$s]:co,[ao]:ao,[ho]:oo,[uo]:uo,[co]:$s},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xh=1234567,Nr=Math.PI/180,Qs=180/Math.PI;function Ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function th(i,e){return(i%e+e)%e}function np(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ip(i,e,t){return i!==e?(t-i)/(e-i):0}function Fr(i,e,t){return(1-t)*i+t*e}function sp(i,e,t,n){return Fr(i,e,1-Math.exp(-t*n))}function rp(i,e=1){return e-Math.abs(th(i,e*2)-e)}function ap(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function op(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function cp(i,e){return i+Math.random()*(e-i)}function hp(i){return i*(.5-Math.random())}function dp(i){i!==void 0&&(Xh=i);let e=Xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function up(i){return i*Nr}function fp(i){return i*Qs}function pp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function mp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*_,l*p,o*c);break;case"YXY":i.set(l*p,o*d,l*_,o*c);break;case"ZYZ":i.set(l*_,l*p,o*d,o*c);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ih(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lu(i,e){if(e.constructor===Float32Array)return i;let t=ih(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function cu(i,e){if(e.constructor===Float32Array)return i;let t=ih(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var sh={DEG2RAD:Nr,RAD2DEG:Qs,generateUUID:Ts,clamp:pt,euclideanModulo:th,mapLinear:np,inverseLerp:ip,lerp:Fr,damp:sp,pingpong:rp,smoothstep:ap,smootherstep:op,randInt:lp,randFloat:cp,randFloatSpread:hp,seededRandom:dp,degToRad:up,radToDeg:fp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:nh,setQuaternionFromProperEuler:gp,normalize:cu,denormalize:lu},be=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],_=r[a+2],y=r[a+3];if(u!==y||l!==f||c!==p||d!==_){let m=l*f+c*p+d*_+u*y;m<0&&(f=-f,p=-p,_=-_,y=-y,m=-m);let x=1-o;if(m<.9995){let S=Math.acos(m),A=Math.sin(S);x=Math.sin(x*S)/A,o=Math.sin(o*S)/A,l=l*x+f*o,c=c*x+p*o,d=d*x+_*o,u=u*x+y*o}else{l=l*x+f*o,c=c*x+p*o,d=d*x+_*o,u=u*x+y*o;let S=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=S,c*=S,d*=S,u*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],f=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+d*u+l*p-c*f,e[t+1]=l*_+d*f+c*u-o*p,e[t+2]=c*_+d*p+o*f-l*u,e[t+3]=d*_-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*d*u+c*p*_,this._y=c*p*u-f*d*_,this._z=c*d*_+f*p*u,this._w=c*d*u-f*p*_;break;case"YXZ":this._x=f*d*u+c*p*_,this._y=c*p*u-f*d*_,this._z=c*d*_-f*p*u,this._w=c*d*u+f*p*_;break;case"ZXY":this._x=f*d*u-c*p*_,this._y=c*p*u+f*d*_,this._z=c*d*_+f*p*u,this._w=c*d*u-f*p*_;break;case"ZYX":this._x=f*d*u-c*p*_,this._y=c*p*u+f*d*_,this._z=c*d*_-f*p*u,this._w=c*d*u+f*p*_;break;case"YZX":this._x=f*d*u+c*p*_,this._y=c*p*u+f*d*_,this._z=c*d*_-f*p*u,this._w=c*d*u-f*p*_;break;case"XZY":this._x=f*d*u-c*p*_,this._y=c*p*u-f*d*_,this._z=c*d*_+f*p*u,this._w=c*d*u+f*p*_;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(d-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+d)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new Y,qh=new un,lt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],p=n[5],_=n[8],y=s[0],m=s[3],x=s[6],S=s[1],A=s[4],M=s[7],C=s[2],T=s[5],g=s[8];return r[0]=a*y+o*S+l*C,r[3]=a*m+o*A+l*T,r[6]=a*x+o*M+l*g,r[1]=c*y+d*S+u*C,r[4]=c*m+d*A+u*T,r[7]=c*x+d*M+u*g,r[2]=f*y+p*S+_*C,r[5]=f*m+p*A+_*T,r[8]=f*x+p*M+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=d*a-o*c,f=o*l-d*r,p=c*r-a*l,_=t*u+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=u*y,e[1]=(s*c-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=f*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($l.makeScale(e,t)),this}rotate(e){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($l.makeRotation(-e)),this}translate(e,t){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},$l=new lt,Yh=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xp(){let i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===At&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===At&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ui?Hr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:e,whitePoint:n,transfer:Hr,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var yt=xp();function Ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,mo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=zr("canvas")),Fs.width=e.width,Fs.height=e.height;let s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ci(t[n]/255)*255):t[n]=Ci(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_p=0,er=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kl(s[a].image)):r.push(Kl(s[a]))}else r=Kl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Kl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?mo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}var yp=0,Jl=new Y,En=class i extends Jn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=Sn,a=Ni,o=si,l=Cn,c=i.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Ts(),this.name="",this.source=new er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Vc;En.DEFAULT_ANISOTROPY=1;var Ot=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],p=l[5],_=l[9],y=l[2],m=l[6],x=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,M=(p+1)/2,C=(x+1)/2,T=(d+f)/4,g=(u+y)/4,w=(_+m)/4;return A>M&&A>C?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=g/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=w/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=g/r,s=w/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(u-y)*(u-y)+(f-d)*(f-d));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-y)/S,this.z=(f-d)/S,this.w=Math.acos((c+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},go=class extends Jn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new En({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new er(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Gr=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xo=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Rt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,d,u,f,p,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,u,f,p,_,y,m)}set(e,t,n,s,r,a,o,l,c,d,u,f,p,_,y,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=r,x[5]=a,x[9]=o,x[13]=l,x[2]=c,x[6]=d,x[10]=u,x[14]=f,x[3]=p,x[7]=_,x[11]=y,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*d,p=a*u,_=o*d,y=o*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=p+_*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*d,p=l*u,_=c*d,y=c*u;t[0]=f+y*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=p*o-_,t[6]=y+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*d,p=l*u,_=c*d,y=c*u;t[0]=f-y*o,t[4]=-a*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*d,t[9]=y-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*d,p=a*u,_=o*d,y=o*u;t[0]=l*d,t[4]=_*c-p,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*d,t[4]=y-f*u,t[8]=_*u+p,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=p*u+_,t[10]=f-y*u}else if(e.order==="XZY"){let f=a*l,p=a*c,_=o*l,y=o*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+y,t[5]=a*d,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*d,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bp,e,vp)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Gi.crossVectors(n,Dn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Gi.crossVectors(n,Dn)),Gi.normalize(),Da.crossVectors(Dn,Gi),s[0]=Gi.x,s[4]=Da.x,s[8]=Dn.x,s[1]=Gi.y,s[5]=Da.y,s[9]=Dn.y,s[2]=Gi.z,s[6]=Da.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],p=n[13],_=n[2],y=n[6],m=n[10],x=n[14],S=n[3],A=n[7],M=n[11],C=n[15],T=s[0],g=s[4],w=s[8],B=s[12],I=s[1],L=s[5],Z=s[9],K=s[13],F=s[2],X=s[6],N=s[10],j=s[14],H=s[3],U=s[7],z=s[11],$=s[15];return r[0]=a*T+o*I+l*F+c*H,r[4]=a*g+o*L+l*X+c*U,r[8]=a*w+o*Z+l*N+c*z,r[12]=a*B+o*K+l*j+c*$,r[1]=d*T+u*I+f*F+p*H,r[5]=d*g+u*L+f*X+p*U,r[9]=d*w+u*Z+f*N+p*z,r[13]=d*B+u*K+f*j+p*$,r[2]=_*T+y*I+m*F+x*H,r[6]=_*g+y*L+m*X+x*U,r[10]=_*w+y*Z+m*N+x*z,r[14]=_*B+y*K+m*j+x*$,r[3]=S*T+A*I+M*F+C*H,r[7]=S*g+A*L+M*X+C*U,r[11]=S*w+A*Z+M*N+C*z,r[15]=S*B+A*K+M*j+C*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],p=e[14],_=e[3],y=e[7],m=e[11],x=e[15],S=l*p-c*f,A=o*p-c*u,M=o*f-l*u,C=a*p-c*d,T=a*f-l*d,g=a*u-o*d;return t*(y*S-m*A+x*M)-n*(_*S-m*C+x*T)+s*(_*A-y*C+x*g)-r*(_*M-y*T+m*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],p=e[11],_=e[12],y=e[13],m=e[14],x=e[15],S=t*o-n*a,A=t*l-s*a,M=t*c-r*a,C=n*l-s*o,T=n*c-r*o,g=s*c-r*l,w=d*y-u*_,B=d*m-f*_,I=d*x-p*_,L=u*m-f*y,Z=u*x-p*y,K=f*x-p*m,F=S*K-A*Z+M*L+C*I-T*B+g*w;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/F;return e[0]=(o*K-l*Z+c*L)*X,e[1]=(s*Z-n*K-r*L)*X,e[2]=(y*g-m*T+x*C)*X,e[3]=(f*T-u*g-p*C)*X,e[4]=(l*I-a*K-c*B)*X,e[5]=(t*K-s*I+r*B)*X,e[6]=(m*M-_*g-x*A)*X,e[7]=(d*g-f*M+p*A)*X,e[8]=(a*Z-o*I+c*w)*X,e[9]=(n*I-t*Z-r*w)*X,e[10]=(_*T-y*M+x*S)*X,e[11]=(u*M-d*T-p*S)*X,e[12]=(o*B-a*L-l*w)*X,e[13]=(t*L-n*B+s*w)*X,e[14]=(y*A-_*C-m*S)*X,e[15]=(d*C-u*A+f*S)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,u=o+o,f=r*c,p=r*d,_=r*u,y=a*d,m=a*u,x=o*u,S=l*c,A=l*d,M=l*u,C=n.x,T=n.y,g=n.z;return s[0]=(1-(y+x))*C,s[1]=(p+M)*C,s[2]=(_-A)*C,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+x))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(_+A)*g,s[9]=(m-S)*g,s[10]=(1-(f+y))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Us.set(s[0],s[1],s[2]).length(),o=Us.set(s[4],s[5],s[6]).length(),l=Us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),jn.copy(this);let c=1/a,d=1/o,u=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=d,jn.elements[5]*=d,jn.elements[6]*=d,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=zn,l=!1){let c=this.elements,d=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),_,y;if(l)_=r/(a-r),y=a*r/(a-r);else if(o===zn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ks)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=zn,l=!1){let c=this.elements,d=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),_,y;if(l)_=1/(a-r),y=a/(a-r);else if(o===zn)_=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ks)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Us=new Y,jn=new Rt,bp=new Y(0,0,0),vp=new Y(1,1,1),Gi=new Y,Da=new Y,Dn=new Y,jh=new Rt,$h=new un,Gn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mp=0,Kh=new Y,ks=new un,Ei=new Rt,La=new Y,Tr=new Y,Sp=new Y,Ep=new un,Jh=new Y(1,0,0),Qh=new Y(0,1,0),ed=new Y(0,0,1),td={type:"added"},wp={type:"removed"},Os={type:"childadded",child:null},Ql={type:"childremoved",child:null},Bt=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Y,t=new Gn,n=new un,s=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new lt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Tr,La,this.up):Ei.lookAt(La,Tr,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Ei),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),Os.child=e,this.dispatchEvent(Os),Os.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wp),Ql.child=e,this.dispatchEvent(Ql),Ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,Sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new Y(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tp={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),x=this._getHandJoint(c,y);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Na={h:0,s:0,l:0};function ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=th(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ec(a,r,e+1/3),this.g=ec(a,r,e),this.b=ec(a,r,e-1/3)}return yt.colorSpaceToWorking(this,s),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return yt.workingToColorSpace(yn.copy(this),e),Math.round(pt(yn.r*255,0,255))*65536+Math.round(pt(yn.g*255,0,255))*256+Math.round(pt(yn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(yn.copy(this),t);let n=yn.r,s=yn.g,r=yn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=tn){yt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,s=yn.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Na);let n=Fr(Vi.h,Na.h,t),s=Fr(Vi.s,Na.s,t),r=Fr(Vi.l,Na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new tt;tt.NAMES=hu;var Tn=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new Y,wi=new Y,tc=new Y,Ti=new Y,Bs=new Y,Hs=new Y,nd=new Y,nc=new Y,ic=new Y,sc=new Y,rc=new Ot,ac=new Ot,oc=new Ot,Yi=class i{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),wi.subVectors(n,t),tc.subVectors(e,t);let a=$n.dot($n),o=$n.dot(wi),l=$n.dot(tc),c=wi.dot(wi),d=wi.dot(tc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*d)*f,_=(a*d-o*l)*f;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(a,Ti.y),l.addScaledVector(o,Ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return rc.setScalar(0),ac.setScalar(0),oc.setScalar(0),rc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(rc,r.x),a.addScaledVector(ac,r.y),a.addScaledVector(oc,r.z),a}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),wi.subVectors(e,t),$n.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bs.subVectors(s,n),Hs.subVectors(r,n),nc.subVectors(e,n);let l=Bs.dot(nc),c=Hs.dot(nc);if(l<=0&&c<=0)return t.copy(n);ic.subVectors(e,s);let d=Bs.dot(ic),u=Hs.dot(ic);if(d>=0&&u<=d)return t.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(n).addScaledVector(Bs,a);sc.subVectors(e,r);let p=Bs.dot(sc),_=Hs.dot(sc);if(_>=0&&p<=_)return t.copy(r);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Hs,o);let m=d*_-p*u;if(m<=0&&u-d>=0&&p-_>=0)return nd.subVectors(r,s),o=(u-d)/(u-d+(p-_)),t.copy(s).addScaledVector(nd,o);let x=1/(m+y+f);return a=y*x,o=f*x,t.copy(n).addScaledVector(Bs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ct=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kn):Kn.fromBufferAttribute(r,a),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Ua.subVectors(this.max,Ar),zs.subVectors(e.a,Ar),Gs.subVectors(e.b,Ar),Vs.subVectors(e.c,Ar),Wi.subVectors(Gs,zs),Xi.subVectors(Vs,Gs),us.subVectors(zs,Vs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-us.z,us.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,us.z,0,-us.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-us.y,us.x,0];return!lc(t,zs,Gs,Vs,Ua)||(t=[1,0,0,0,1,0,0,0,1],!lc(t,zs,Gs,Vs,Ua))?!1:(ka.crossVectors(Wi,Xi),t=[ka.x,ka.y,ka.z],lc(t,zs,Gs,Vs,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Kn=new Y,Fa=new Ct,zs=new Y,Gs=new Y,Vs=new Y,Wi=new Y,Xi=new Y,us=new Y,Ar=new Y,Ua=new Y,ka=new Y,fs=new Y;function lc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fs.fromArray(i,r);let o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),d=n.dot(fs);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Qt=new Y,Oa=new be,Ap=0,Nn=class extends Jn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=Vn,this.version=0,this._normalizationScale=e!==void 0?ih(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):lu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):cu(e,this.array)}};var Vr=class extends Nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wr=class extends Nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Nn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rp=new Ct,Rr=new Y,cc=new Y,Un=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Rp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(cc)),this.expandByPoint(Rr.copy(e.center).sub(cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cp=0,Bn=new Rt,hc=new Bt,Ws=new Y,Ln=new Ct,Cr=new Ct,hn=new Y,Xt=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ep(e)?Wr:Vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ct);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Cr.setFromBufferAttribute(o),this.morphTargetsRelative?(hn.addVectors(Ln.min,Cr.min),Ln.expandByPoint(hn),hn.addVectors(Ln.max,Cr.max),Ln.expandByPoint(hn)):(Ln.expandByPoint(Cr.min),Ln.expandByPoint(Cr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)hn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(hn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)hn.fromBufferAttribute(o,c),l&&(Ws.fromBufferAttribute(e,c),hn.add(Ws)),s=Math.max(s,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Nn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new Y,l[B]=new Y;let d=new Y,u=new Y,f=new Y,p=new be,_=new be,y=new be,m=new Y,x=new Y;function S(B,I,L){c[B]=c[I]=c[L]=1,d.fromBufferAttribute(n,B),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,L),p.fromBufferAttribute(r,B),_.fromBufferAttribute(r,I),y.fromBufferAttribute(r,L),u.sub(d),f.sub(d),_.sub(p),y.sub(p);let Z=1/(_.x*y.y-y.x*_.y);isFinite(Z)&&(m.copy(u).multiplyScalar(y.y).addScaledVector(f,-_.y).multiplyScalar(Z),x.copy(f).multiplyScalar(_.x).addScaledVector(u,-y.x).multiplyScalar(Z),o[B].add(m),o[I].add(m),o[L].add(m),l[B].add(x),l[I].add(x),l[L].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,I=A.length;B<I;++B){let L=A[B],Z=L.start,K=L.count;for(let F=Z,X=Z+K;F<X;F+=3)S(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let M=new Y,C=new Y,T=new Y,g=new Y;function w(B){T.fromBufferAttribute(s,B),g.copy(T);let I=o[B];M.copy(I),M.sub(T.multiplyScalar(T.dot(I))).normalize(),C.crossVectors(g,I);let Z=C.dot(l[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,Z)}for(let B=0,I=n.count;B<I;++B)c[B]&&w(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new Y,r=new Y,a=new Y,o=new Y,l=new Y,c=new Y,d=new Y,u=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){let _=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d),p=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let x=0;x<d;x++)f[_++]=c[p++]}return new Nn(f,d,u)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let f=c[d],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];d.push(p.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,p=u.length;f<p;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var dc=new Y,Pp=new Y,Ip=new lt,mn=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=dc.subVectors(n,t).cross(Pp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(dc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ip.getNormalMatrix(e),s=this.coplanarPoint(dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Dp=0,di=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=fr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Uc,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=so,this.stencilZFail=so,this.stencilZPass=so,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ri=new Y,uc=new Y,Ba=new Y,Ha=new Y,ji=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uc.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Ha.copy(this.origin).sub(uc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),o=Ha.dot(this.direction),l=-Ha.dot(Ba),c=Ha.lengthSq(),d=Math.abs(1-a*a),u,f,p,_;if(d>0)if(u=a*l-o,f=a*o-l,_=r*d,u>=0)if(f>=-_)if(f<=_){let y=1/d;u*=y,f*=y,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(uc).addScaledVector(Ba,f),p}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,x=n.x-a.x,S=n.y-a.y,A=n.z-a.z,M=Math.abs(l),C=Math.abs(c),T=Math.abs(d),g,w,B,I,L,Z,K,F,X,N,j,H;if(M>=C&&M>=T?(B=l,Z=u,X=_,H=x,l>=0?(g=c,w=d,I=f,L=p,K=y,F=m,N=S,j=A):(g=d,w=c,I=p,L=f,K=m,F=y,N=A,j=S)):C>=T?(B=c,Z=f,X=y,H=S,c>=0?(g=d,w=l,I=p,L=u,K=m,F=_,N=A,j=x):(g=l,w=d,I=u,L=p,K=_,F=m,N=x,j=A)):(B=d,Z=p,X=m,H=A,d>=0?(g=l,w=c,I=u,L=f,K=_,F=y,N=x,j=S):(g=c,w=l,I=f,L=u,K=y,F=_,N=S,j=x)),B===0)return null;let U=g/B,z=w/B,$=1/B,xe=I-U*Z,W=L-z*Z,G=K-U*X,ne=F-z*X,me=N-U*H,ge=j-z*H,Ee=me*ne-ge*G,He=xe*ge-W*me,at=G*W-ne*xe;if(s){if(Ee<0||He<0||at<0)return null}else if((Ee<0||He<0||at<0)&&(Ee>0||He>0||at>0))return null;let ze=Ee+He+at;if(ze===0)return null;let Ye=$*(Ee*Z+He*X+at*H);return(ze>0?Ye<0:Ye>0)?null:this.at(Ye/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ii=class extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},id=new Rt,ps=new ji,za=new Un,sd=new Y,Ga=new Y,Va=new Y,Wa=new Y,fc=new Y,Xa=new Y,rd=new Y,qa=new Y,Ie=class extends Bt{constructor(e=new Xt,t=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Xa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(fc.fromBufferAttribute(u,e),a?Xa.addScaledVector(fc,d):Xa.addScaledVector(fc.sub(t),d))}t.add(Xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(za.containsPoint(ps.origin)===!1&&(ps.intersectSphere(za,sd)===null||ps.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(id.copy(r).invert(),ps.copy(e.ray).applyMatrix4(id),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let m=f[_],x=a[m.materialIndex],S=Math.max(m.start,p.start),A=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,C=A;M<C;M+=3){let T=o.getX(M),g=o.getX(M+1),w=o.getX(M+2);s=Ya(this,x,e,n,c,d,u,T,g,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=_,x=y;m<x;m+=3){let S=o.getX(m),A=o.getX(m+1),M=o.getX(m+2);s=Ya(this,a,e,n,c,d,u,S,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=f.length;_<y;_++){let m=f[_],x=a[m.materialIndex],S=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=S,C=A;M<C;M+=3){let T=M,g=M+1,w=M+2;s=Ya(this,x,e,n,c,d,u,T,g,w),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,x=y;m<x;m+=3){let S=m,A=m+1,M=m+2;s=Ya(this,a,e,n,c,d,u,S,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Lp(i,e,t,n,s,r,a,o){let l;if(e.side===sn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===pi,o),l===null)return null;qa.copy(o),qa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(qa);return c<t.near||c>t.far?null:{distance:c,point:qa.clone(),object:i}}function Ya(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ga),i.getVertexPosition(l,Va),i.getVertexPosition(c,Wa);let d=Lp(i,e,t,n,Ga,Va,Wa,rd);if(d){let u=new Y;Yi.getBarycoord(rd,Ga,Va,Wa,u),s&&(d.uv=Yi.getInterpolatedAttribute(s,o,l,c,u,new be)),r&&(d.uv1=Yi.getInterpolatedAttribute(r,o,l,c,u,new be)),a&&(d.normal=Yi.getInterpolatedAttribute(a,o,l,c,u,new Y),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new Y,materialIndex:0};Yi.getNormal(Ga,Va,Wa,f.normal),d.face=f,d.barycoord=u}return d}var Xr=class extends En{constructor(e=null,t=1,n=1,s,r,a,o,l,c=dn,d=dn,u,f){super(null,a,o,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qr=class extends Nn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Xs=new Rt,ad=new Rt,Za=[],od=new Ct,Np=new Rt,Pr=new Ie,Ir=new Un,Qn=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Np)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ct),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),od.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(od)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xs),Ir.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(Ir)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),e.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xs),ad.multiplyMatrices(n,Xs),Pr.matrixWorld=ad,Pr.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){let l=Za[a];l.instanceId=r,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xr(new Float32Array(s*this.count),s,this.count,qo,Vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Un,Fp=new be(.5,.5),ja=new Y,$i=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],p=r[7],_=r[8],y=r[9],m=r[10],x=r[11],S=r[12],A=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,p-d,x-_,C-S).normalize(),s[1].setComponents(c+a,p+d,x+_,C+S).normalize(),s[2].setComponents(c+o,p+u,x+y,C+A).normalize(),s[3].setComponents(c-o,p-u,x-y,C-A).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,p-f,x-m,C-M).normalize();else if(s[4].setComponents(c-l,p-f,x-m,C-M).normalize(),t===zn)s[5].setComponents(c+l,p+f,x+m,C+M).normalize();else if(t===Ks)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=Fp.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ja.x=s.normal.x>0?e.max.x:e.min.x,ja.y=s.normal.y>0?e.max.y:e.min.y,ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ld=new Rt,_o=class i{constructor(){this.coordinateSystem=zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ld.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new $i),n[s].setFromProjectionMatrix(ld,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new $i),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var ir=class extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cd=new Rt,Mc=new ji,$a=new Un,Ka=new Y,Yr=class extends Bt{constructor(e=new Xt,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;cd.copy(s).invert(),Mc.copy(e.ray).applyMatrix4(cd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=f,y=p;_<y;_++){let m=c.getX(_);Ka.fromBufferAttribute(u,m),hd(Ka,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=f,y=p;_<y;_++)Ka.fromBufferAttribute(u,_),hd(Ka,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function hd(i,e,t,n,s,r,a){let o=Mc.distanceSqToPoint(i);if(o<t){let l=new Y;Mc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zr=class extends En{constructor(e=[],t=Es,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},An=class extends En{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends En{constructor(e,t,n=ni,s,r,a,o=dn,l=dn,c,d=Pi,u=1){if(d!==Pi&&d!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},jr=class extends Di{constructor(e,t=ni,n=Es,s,r,a=dn,o=dn,l,c=Pi){let d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$r=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ht=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],f=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2));function _(y,m,x,S,A,M,C,T,g,w,B){let I=M/g,L=C/w,Z=M/2,K=C/2,F=T/2,X=g+1,N=w+1,j=0,H=0,U=new Y;for(let z=0;z<N;z++){let $=z*L-K;for(let xe=0;xe<X;xe++){let W=xe*I-Z;U[y]=W*S,U[m]=$*A,U[x]=F,c.push(U.x,U.y,U.z),U[y]=0,U[m]=0,U[x]=T>0?1:-1,d.push(U.x,U.y,U.z),u.push(xe/g),u.push(1-z/w),j+=1}}for(let z=0;z<w;z++)for(let $=0;$<g;$++){let xe=f+$+X*z,W=f+$+X*(z+1),G=f+($+1)+X*(z+1),ne=f+($+1)+X*z;l.push(xe,W,ne),l.push(W,G,ne),H+=6}o.addGroup(p,H,B),p+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var sr=class i extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new Y,d=new be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),d.x=(a[f]/e+1)/2,d.y=(a[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Et=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],f=[],p=[],_=0,y=[],m=n/2,x=0;S(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function S(){let M=new Y,C=new Y,T=0,g=(t-e)/n;for(let w=0;w<=r;w++){let B=[],I=w/r,L=I*(t-e)+e;for(let Z=0;Z<=s;Z++){let K=Z/s,F=K*l+o,X=Math.sin(F),N=Math.cos(F);C.x=L*X,C.y=-I*n+m,C.z=L*N,u.push(C.x,C.y,C.z),M.set(X,g,N).normalize(),f.push(M.x,M.y,M.z),p.push(K,1-I),B.push(_++)}y.push(B)}for(let w=0;w<s;w++)for(let B=0;B<r;B++){let I=y[B][w],L=y[B+1][w],Z=y[B+1][w+1],K=y[B][w+1];(e>0||B!==0)&&(d.push(I,L,K),T+=3),(t>0||B!==r-1)&&(d.push(L,Z,K),T+=3)}c.addGroup(x,T,0),x+=T}function A(M){let C=_,T=new be,g=new Y,w=0,B=M===!0?e:t,I=M===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,m*I,0),f.push(0,I,0),p.push(.5,.5),_++;let L=_;for(let Z=0;Z<=s;Z++){let F=Z/s*l+o,X=Math.cos(F),N=Math.sin(F);g.x=B*N,g.y=m*I,g.z=B*X,u.push(g.x,g.y,g.z),f.push(0,I,0),T.x=X*.5+.5,T.y=N*.5*I+.5,p.push(T.x,T.y),_++}for(let Z=0;Z<s;Z++){let K=C+Z,F=L+Z;M===!0?d.push(F,F+1,K):d.push(F+1,F,K),w+=3}c.addGroup(x,w,M===!0?1:2),x+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ki=class i extends Et{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,p=(a-d)/f;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new be:new Y);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Y,s=[],r=[],a=[],o=new Y,l=new Rt;for(let p=0;p<=e;p++){let _=p/e;s[p]=this.getTangentAt(_,new Y)}r[0]=new Y,a[0]=new Y;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(pt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,_))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(pt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],p*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},rr=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*d-p*u+this.aX,c=f*u+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yo=class extends rr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let f=(a-r)/c-(o-r)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+u)+(l-o)/u;f*=d,p*=d,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var dd=new Y,ud=new Y,pc=new rh,mc=new rh,gc=new rh,nn=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Y){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(ud.subVectors(s[0],s[1]).add(s[0]),c=ud);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(dd.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=dd),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),pc.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,_,y,m),mc.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,_,y,m),gc.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,_,y,m)}else this.curveType==="catmullrom"&&(pc.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),mc.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),gc.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return n.set(pc.calc(l),mc.calc(l),gc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Y().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Up(i,e){let t=1-i;return t*t*e}function kp(i,e){return 2*(1-i)*i*e}function Op(i,e){return i*i*e}function Ur(i,e,t,n){return Up(i,e)+kp(i,t)+Op(i,n)}function Bp(i,e){let t=1-i;return t*t*t*e}function Hp(i,e){let t=1-i;return 3*t*t*i*e}function zp(i,e){return 3*(1-i)*i*i*e}function Gp(i,e){return i*i*i*e}function kr(i,e,t,n,s){return Bp(i,e)+Hp(i,t)+zp(i,n)+Gp(i,s)}var Kr=class extends kn{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},bo=class extends kn{constructor(e=new Y,t=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Y){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y),kr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jr=class extends kn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends kn{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends kn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ur(e,s.x,r.x,a.x),Ur(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends kn{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Ur(e,s.x,r.x,a.x),Ur(e,s.y,r.y,a.y),Ur(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(fd(o,l.x,c.x,d.x,u.x),fd(o,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},Mo=Object.freeze({__proto__:null,ArcCurve:yo,CatmullRomCurve3:nn,CubicBezierCurve:Kr,CubicBezierCurve3:bo,EllipseCurve:rr,LineCurve:Jr,LineCurve3:vo,QuadraticBezierCurve:Qr,QuadraticBezierCurve3:ea,SplineCurve:ta}),So=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Mo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ft=class extends So{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Jr(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Qr(this.currentPoint.clone(),new be(e,t),new be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Kr(this.currentPoint.clone(),new be(e,t),new be(n,s),new be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ta(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new rr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ct=class extends Ft{constructor(e){super(e),this.uuid=Ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ft().fromJSON(s))}return this}};function Vp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=du(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Zp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let d=o,u=l;for(let f=t;f<s;f+=t){let p=i[f],_=i[f+1];p<o&&(o=p),_<l&&(l=_),p>d&&(d=p),_>u&&(u=_)}c=Math.max(d-o,u-l),c=c!==0?32767/c:0}return na(r,a,t,o,l,c,0),a}function du(i,e,t,n,s){let r;if(s===rm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=pd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=pd(a/n|0,i[a],i[a+1],r);return r&&ar(r,r.next)&&(sa(r),r=r.next),r}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ar(t,t.next)||Wt(t.prev,t,t.next)===0)){if(sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function na(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Qp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Xp(i,n,s,r):Wp(i)){e.push(l.i,i.i,c.i),sa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=qp(gs(i),e),na(i,e,t,n,s,r,2)):a===2&&Yp(i,e,t,n,s,r):na(gs(i),e,t,n,s,r,1);break}}}function Wp(i){let e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),p=Math.max(o,l,c),_=n.next;for(;_!==e;){if(_.x>=d&&_.x<=f&&_.y>=u&&_.y<=p&&Dr(s,o,r,l,a,c,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Xp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Wt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,u=r.y,f=a.y,p=Math.min(o,l,c),_=Math.min(d,u,f),y=Math.max(o,l,c),m=Math.max(d,u,f),x=Sc(p,_,e,t,n),S=Sc(y,m,e,t,n),A=i.prevZ,M=i.nextZ;for(;A&&A.z>=x&&M&&M.z<=S;){if(A.x>=p&&A.x<=y&&A.y>=_&&A.y<=m&&A!==s&&A!==a&&Dr(o,d,l,u,c,f,A.x,A.y)&&Wt(A.prev,A,A.next)>=0||(A=A.prevZ,M.x>=p&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&Dr(o,d,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;A&&A.z>=x;){if(A.x>=p&&A.x<=y&&A.y>=_&&A.y<=m&&A!==s&&A!==a&&Dr(o,d,l,u,c,f,A.x,A.y)&&Wt(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;M&&M.z<=S;){if(M.x>=p&&M.x<=y&&M.y>=_&&M.y<=m&&M!==s&&M!==a&&Dr(o,d,l,u,c,f,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function qp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ar(n,s)&&fu(n,t,t.next,s)&&ia(n,s)&&ia(s,n)&&(e.push(n.i,t.i,s.i),sa(t),sa(t.next),t=i=s),t=t.next}while(t!==i);return gs(t)}function Yp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&nm(a,o)){let l=pu(a,o);a=gs(a,a.next),l=gs(l,l.next),na(a,e,t,n,s,r,0),na(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Zp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=du(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(tm(c))}s.sort(jp);for(let r=0;r<s.length;r++)t=$p(s[r],t);return t}function jp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function $p(i,e){let t=Kp(i,e);if(!t)return e;let n=pu(t,i);return gs(n,n.next),gs(t,t.next)}function Kp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ar(i,t))return t;do{if(ar(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&uu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ia(t,i)&&(u<d||u===d&&(t.x>a.x||t.x===a.x&&Jp(a,t)))&&(a=t,d=u)}t=t.next}while(t!==o);return a}function Jp(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function Qp(i,e,t,n){let s=i;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,em(s)}function em(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Sc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function tm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function uu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Dr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&uu(i,e,t,n,s,r,a,o)}function nm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!im(i,e)&&(ia(i,e)&&ia(e,i)&&sm(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||ar(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ar(i,e){return i.x===e.x&&i.y===e.y}function fu(i,e,t,n){let s=Qa(Wt(i,e,t)),r=Qa(Wt(i,e,n)),a=Qa(Wt(t,n,i)),o=Qa(Wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ja(i,t,e)||r===0&&Ja(i,n,e)||a===0&&Ja(t,i,n)||o===0&&Ja(t,e,n))}function Ja(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Qa(i){return i>0?1:i<0?-1:0}function im(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ia(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function sm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pu(i,e){let t=Ec(i.i,i.x,i.y),n=Ec(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function pd(i,e,t,n){let s=Ec(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ec(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var wc=class{static triangulate(e,t,n=2){return Vp(e,t,n)}},hi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];md(e),gd(n,e);let a=e.length;t.forEach(md);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,gd(n,t[l]);let o=wc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function md(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function gd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zt=class i extends Xt{constructor(e=new ct([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:am,A,M=!1,C,T,g,w;if(x){A=x.getSpacedPoints(d),M=!0,f=!1;let pe=x.isCatmullRomCurve3?x.closed:!1;C=x.computeFrenetFrames(d,pe),T=new Y,g=new Y,w=new Y}f||(m=0,p=0,_=0,y=0);let B=o.extractPoints(c),I=B.shape,L=B.holes;if(!hi.isClockWise(I)){I=I.reverse();for(let pe=0,ye=L.length;pe<ye;pe++){let Ae=L[pe];hi.isClockWise(Ae)&&(L[pe]=Ae.reverse())}}function K(pe){let Ae=10000000000000001e-36,Ue=pe[0];for(let De=1;De<=pe.length;De++){let qe=De%pe.length,Ne=pe[qe],et=Ne.x-Ue.x,ht=Ne.y-Ue.y,mt=et*et+ht*ht,q=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(Ue.x),Math.abs(Ue.y)),Tt=Ae*q*q;if(mt<=Tt){pe.splice(qe,1),De--;continue}Ue=Ne}}K(I),L.forEach(K);let F=L.length,X=I;for(let pe=0;pe<F;pe++){let ye=L[pe];I=I.concat(ye)}function N(pe,ye,Ae){return ye||rt("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(ye,Ae)}let j=I.length;function H(pe,ye,Ae){let Ue,De,qe,Ne=pe.x-ye.x,et=pe.y-ye.y,ht=Ae.x-pe.x,mt=Ae.y-pe.y,q=Ne*Ne+et*et,Tt=Ne*mt-et*ht;if(Math.abs(Tt)>Number.EPSILON){let ut=Math.sqrt(q),bt=Math.sqrt(ht*ht+mt*mt),Pe=ye.x-et/ut,It=ye.y+Ne/ut,Je=Ae.x-mt/bt,st=Ae.y+ht/bt,E=((Je-Pe)*mt-(st-It)*ht)/(Ne*mt-et*ht);Ue=Pe+Ne*E-pe.x,De=It+et*E-pe.y;let v=Ue*Ue+De*De;if(v<=2)return new be(Ue,De);qe=Math.sqrt(v/2)}else{let ut=!1;Ne>Number.EPSILON?ht>Number.EPSILON&&(ut=!0):Ne<-Number.EPSILON?ht<-Number.EPSILON&&(ut=!0):Math.sign(et)===Math.sign(mt)&&(ut=!0),ut?(Ue=-et,De=Ne,qe=Math.sqrt(q)):(Ue=Ne,De=et,qe=Math.sqrt(q/2))}return new be(Ue/qe,De/qe)}let U=[];for(let pe=0,ye=X.length,Ae=ye-1,Ue=pe+1;pe<ye;pe++,Ae++,Ue++)Ae===ye&&(Ae=0),Ue===ye&&(Ue=0),U[pe]=H(X[pe],X[Ae],X[Ue]);let z=[],$,xe=U.concat();for(let pe=0,ye=F;pe<ye;pe++){let Ae=L[pe];$=[];for(let Ue=0,De=Ae.length,qe=De-1,Ne=Ue+1;Ue<De;Ue++,qe++,Ne++)qe===De&&(qe=0),Ne===De&&(Ne=0),$[Ue]=H(Ae[Ue],Ae[qe],Ae[Ne]);z.push($),xe=xe.concat($)}let W;if(m===0)W=hi.triangulateShape(X,L);else{let pe=[],ye=[];for(let Ae=0;Ae<m;Ae++){let Ue=Ae/m,De=p*Math.cos(Ue*Math.PI/2),qe=_*Math.sin(Ue*Math.PI/2)+y;for(let Ne=0,et=X.length;Ne<et;Ne++){let ht=N(X[Ne],U[Ne],qe);He(ht.x,ht.y,-De),Ue===0&&pe.push(ht)}for(let Ne=0,et=F;Ne<et;Ne++){let ht=L[Ne];$=z[Ne];let mt=[];for(let q=0,Tt=ht.length;q<Tt;q++){let ut=N(ht[q],$[q],qe);He(ut.x,ut.y,-De),Ue===0&&mt.push(ut)}Ue===0&&ye.push(mt)}}W=hi.triangulateShape(pe,ye)}let G=W.length,ne=_+y;for(let pe=0;pe<j;pe++){let ye=f?N(I[pe],xe[pe],ne):I[pe];M?(g.copy(C.normals[0]).multiplyScalar(ye.x),T.copy(C.binormals[0]).multiplyScalar(ye.y),w.copy(A[0]).add(g).add(T),He(w.x,w.y,w.z)):He(ye.x,ye.y,0)}for(let pe=1;pe<=d;pe++)for(let ye=0;ye<j;ye++){let Ae=f?N(I[ye],xe[ye],ne):I[ye];M?(g.copy(C.normals[pe]).multiplyScalar(Ae.x),T.copy(C.binormals[pe]).multiplyScalar(Ae.y),w.copy(A[pe]).add(g).add(T),He(w.x,w.y,w.z)):He(Ae.x,Ae.y,u/d*pe)}for(let pe=m-1;pe>=0;pe--){let ye=pe/m,Ae=p*Math.cos(ye*Math.PI/2),Ue=_*Math.sin(ye*Math.PI/2)+y;for(let De=0,qe=X.length;De<qe;De++){let Ne=N(X[De],U[De],Ue);He(Ne.x,Ne.y,u+Ae)}for(let De=0,qe=L.length;De<qe;De++){let Ne=L[De];$=z[De];for(let et=0,ht=Ne.length;et<ht;et++){let mt=N(Ne[et],$[et],Ue);M?He(mt.x,mt.y+A[d-1].y,A[d-1].x+Ae):He(mt.x,mt.y,u+Ae)}}}me(),ge();function me(){let pe=s.length/3;if(f){let ye=0,Ae=j*ye;for(let Ue=0;Ue<G;Ue++){let De=W[Ue];at(De[2]+Ae,De[1]+Ae,De[0]+Ae)}ye=d+m*2,Ae=j*ye;for(let Ue=0;Ue<G;Ue++){let De=W[Ue];at(De[0]+Ae,De[1]+Ae,De[2]+Ae)}}else{for(let ye=0;ye<G;ye++){let Ae=W[ye];at(Ae[2],Ae[1],Ae[0])}for(let ye=0;ye<G;ye++){let Ae=W[ye];at(Ae[0]+j*d,Ae[1]+j*d,Ae[2]+j*d)}}n.addGroup(pe,s.length/3-pe,0)}function ge(){let pe=s.length/3,ye=0;Ee(X,ye),ye+=X.length;for(let Ae=0,Ue=L.length;Ae<Ue;Ae++){let De=L[Ae];Ee(De,ye),ye+=De.length}n.addGroup(pe,s.length/3-pe,1)}function Ee(pe,ye){let Ae=pe.length;for(;--Ae>=0;){let Ue=Ae,De=Ae-1;De<0&&(De=pe.length-1);for(let qe=0,Ne=d+m*2;qe<Ne;qe++){let et=j*qe,ht=j*(qe+1),mt=ye+Ue+et,q=ye+De+et,Tt=ye+De+ht,ut=ye+Ue+ht;ze(mt,q,Tt,ut)}}}function He(pe,ye,Ae){l.push(pe),l.push(ye),l.push(Ae)}function at(pe,ye,Ae){Ye(pe),Ye(ye),Ye(Ae);let Ue=s.length/3,De=S.generateTopUV(n,s,Ue-3,Ue-2,Ue-1);Qe(De[0]),Qe(De[1]),Qe(De[2])}function ze(pe,ye,Ae,Ue){Ye(pe),Ye(ye),Ye(Ue),Ye(ye),Ye(Ae),Ye(Ue);let De=s.length/3,qe=S.generateSideWallUV(n,s,De-6,De-3,De-2,De-1);Qe(qe[0]),Qe(qe[1]),Qe(qe[3]),Qe(qe[1]),Qe(qe[2]),Qe(qe[3])}function Ye(pe){s.push(l[pe*3+0]),s.push(l[pe*3+1]),s.push(l[pe*3+2])}function Qe(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return om(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mo[s.type]().fromJSON(s)),new i(n,e.options)}},am={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new be(r,a),new be(o,l),new be(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],f=e[s*3],p=e[s*3+1],_=e[s*3+2],y=e[r*3],m=e[r*3+1],x=e[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new be(a,1-l),new be(c,1-u),new be(f,1-_),new be(y,1-x)]:[new be(o,1-l),new be(d,1-u),new be(p,1-_),new be(m,1-x)]}};function om(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ui=class i extends Xt{constructor(e=[new be(0,-.5),new be(.5,0),new be(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=pt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/t,u=new Y,f=new be,p=new Y,_=new Y,y=new Y,m=0,x=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,x=e[S+1].y-e[S].y,p.x=x*1,p.y=-m,p.z=x*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=e[S+1].x-e[S].x,x=e[S+1].y-e[S].y,p.x=x*1,p.y=-m,p.z=x*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(_)}for(let S=0;S<=t;S++){let A=n+S*d*s,M=Math.sin(A),C=Math.cos(A);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*M,u.y=e[T].y,u.z=e[T].x*C,a.push(u.x,u.y,u.z),f.x=S/t,f.y=T/(e.length-1),o.push(f.x,f.y);let g=l[3*T+0]*M,w=l[3*T+1],B=l[3*T+0]*C;c.push(g,w,B)}}for(let S=0;S<t;S++)for(let A=0;A<e.length-1;A++){let M=A+S*e.length,C=M,T=M+e.length,g=M+e.length+1,w=M+1;r.push(C,T,w),r.push(g,w,T)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Rn=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=e/o,f=t/l,p=[],_=[],y=[],m=[];for(let x=0;x<d;x++){let S=x*f-a;for(let A=0;A<c;A++){let M=A*u-r;_.push(M,-S,0),y.push(0,0,1),m.push(A/o),m.push(1-x/l)}}for(let x=0;x<l;x++)for(let S=0;S<o;S++){let A=S+c*x,M=S+c*(x+1),C=S+1+c*(x+1),T=S+1+c*x;p.push(A,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},or=class i extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],d=[],u=e,f=(t-e)/s,p=new Y,_=new be;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let x=r+m/n*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,d.push(_.x,_.y)}u+=f}for(let y=0;y<s;y++){let m=y*(n+1);for(let x=0;x<n;x++){let S=x+m,A=S,M=S+n+1,C=S+n+2,T=S+1;o.push(A,M,T),o.push(M,C,T)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Li=class i extends Xt{constructor(e=new ct([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(a,2));function c(d){let u=s.length/3,f=d.extractPoints(t),p=f.shape,_=f.holes;hi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,x=_.length;m<x;m++){let S=_[m];hi.isClockWise(S)===!0&&(_[m]=S.reverse())}let y=hi.triangulateShape(p,_);for(let m=0,x=_.length;m<x;m++){let S=_[m];p=p.concat(S)}for(let m=0,x=p.length;m<x;m++){let S=p[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,x=y.length;m<x;m++){let S=y[m],A=S[0]+u,M=S[1]+u,C=S[2]+u;n.push(A,M,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return lm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function lm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var qt=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],u=new Y,f=new Y,p=[],_=[],y=[],m=[];for(let x=0;x<=n;x++){let S=[],A=x/n,M=a+A*o,C=e*Math.cos(M),T=Math.sqrt(e*e-C*C),g=0;x===0&&a===0?g=.5/t:x===n&&l===Math.PI&&(g=-.5/t);for(let w=0;w<=t;w++){let B=w/t,I=s+B*r;u.x=-T*Math.cos(I),u.y=C,u.z=T*Math.sin(I),_.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(B+g,1-A),S.push(c++)}d.push(S)}for(let x=0;x<n;x++)for(let S=0;S<t;S++){let A=d[x][S+1],M=d[x][S],C=d[x+1][S],T=d[x+1][S+1];(x!==0||a>0)&&p.push(A,M,T),(x!==n-1||l<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new dt(_,3)),this.setAttribute("normal",new dt(y,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zt=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],u=[],f=new Y,p=new Y,_=new Y;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let x=0;x<=s;x++){let S=x/s*r;p.x=(e+t*Math.cos(m))*Math.cos(S),p.y=(e+t*Math.cos(m))*Math.sin(S),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),_.subVectors(p,f).normalize(),d.push(_.x,_.y,_.z),u.push(x/s),u.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let x=(s+1)*y+m-1,S=(s+1)*(y-1)+m-1,A=(s+1)*(y-1)+m,M=(s+1)*y+m;l.push(x,S,M),l.push(S,A,M)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var wn=class i extends Xt{constructor(e=new ea(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new Y,l=new Y,c=new be,d=new Y,u=[],f=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(f,3)),this.setAttribute("uv",new dt(p,2));function y(){for(let A=0;A<t;A++)m(A);m(r===!1?t:0),S(),x()}function m(A){d=e.getPointAt(A/t,d);let M=a.normals[A],C=a.binormals[A];for(let T=0;T<=s;T++){let g=T/s*Math.PI*2,w=Math.sin(g),B=-Math.cos(g);l.x=B*M.x+w*C.x,l.y=B*M.y+w*C.y,l.z=B*M.z+w*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,u.push(o.x,o.y,o.z)}}function x(){for(let A=1;A<=t;A++)for(let M=1;M<=s;M++){let C=(s+1)*(A-1)+(M-1),T=(s+1)*A+(M-1),g=(s+1)*A+M,w=(s+1)*(A-1)+M;_.push(C,T,w),_.push(T,g,w)}}function S(){for(let A=0;A<=t;A++)for(let M=0;M<=s;M++)c.x=A/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Mo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function As(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(xd(s))s.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(xd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function bn(i){let e={};for(let t=0;t<i.length;t++){let n=As(i[t]);for(let s in n)e[s]=n[s]}return e}function xd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ah(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}var mu={clone:As,merge:bn},hm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hm,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=cm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m3":this.uniforms[n].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Eo=class extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},oe=class extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ra=class extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xa,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Bo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wo=class extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},To=class extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function eo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bc:r=e,o=2*t-n;break;case vc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bc:a=e,l=2*n-t;break;case vc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),y=_*_,m=y*_,x=-f*m+2*f*y-f*_,S=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*_+1,A=(-1-p)*m+(1.5+p)*y+.5*_,M=p*m-p*y;for(let C=0;C!==o;++C)r[C]=x*a[d+C]+S*a[c+C]+A*a[l+C]+M*a[u+C];return r}},Ro=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),u=1-d;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*d;return r}},Co=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Po=class extends Ji{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let _=(n-t)/(s-t),y=1-_;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*_;return r}let f=o*2,p=e-1;for(let _=0;_!==o;++_){let y=a[c+_],m=a[l+_],x=p*f+_*2,S=u[x],A=u[x+1],M=e*f+_*2,C=d[M],T=d[M+1],g=fm(n,t,S,C,s);r[_]=gu(g,y,A,T,m)}return r}};function gu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function um(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function fm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=gu(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=um(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qs(t,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qs(e.times,Array),values:qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),eo(e.settings)&&(n.settings={inTangents:qs(e.settings.inTangents,Array),outTangents:qs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Po(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Or:t=this.InterpolantFactoryMethodDiscrete;break;case po:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break;case _c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Or;case this.InterpolantFactoryMethodLinear:return po;case this.InterpolantFactoryMethodSmooth:return io;case this.InterpolantFactoryMethodBezier:return _c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;eo(this.settings)&&(_d(this.settings.inTangents,e),_d(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;eo(this.settings)&&(yd(this.settings.inTangents,e),yd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){rt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&tp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let _=0;_!==n;++_){let y=t[u+_];if(y!==t[f+_]||y!==t[p+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,eo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _d(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function yd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=po;var Qi=class extends On{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=Or;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Io.prototype.ValueTypeName="color";var Do=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};Do.prototype.ValueTypeName="number";var Lo=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}},aa=class extends On{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var es=class extends On{constructor(e,t,n){super(e,t,n)}};es.prototype.ValueTypeName="string";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Or;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends On{constructor(e,t,n,s){super(e,t,n,s)}};No.prototype.ValueTypeName="vector";var Fo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xu=new Fo,Uo=class{constructor(e){this.manager=e!==void 0?e:xu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends Bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_s=class extends xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xc=new Rt,bd=new Y,vd=new Y,oa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},to=new Y,no=new un,ci=new Y,la=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(to,no,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(to,no,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(to,no,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new Y,Md=new be,Sd=new be,Vt=class extends la{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Md,Sd),t.subVectors(Sd,Md)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Nr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tc=class extends oa{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},ys=class extends xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},bs=class extends la{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ac=class extends oa{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ei=class extends xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new Ac}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},lr=class extends xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ys=-90,Zs=1,cr=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Ys,Zs,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Ys,Zs,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Ys,Zs,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Ys,Zs,e,t);o.layers=this.layers,this.add(o);let l=new Vt(Ys,Zs,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Ys,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ko=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var oh="\\[\\]\\.:\\/",pm=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",mm="[^"+oh.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",lh),xm=/(WCOD+)?/.source.replace("WCOD",mm),_m=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),bm=new RegExp("^"+gm+xm+_m+ym+"$"),vm=["material","materials","bones","map"],Rc=class{constructor(e,t,n){let s=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(e){let t=bm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Rc;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var db=new Float32Array(1);var Ed=new Rt,hr=class{constructor(e,t,n=0,s=1/0){this.ray=new ji(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ed.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ed),this}intersectObject(e,t=!0,n=[]){return Cc(e,this,n,t),n.sort(wd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Cc(e[s],this,n,t);return n.sort(wd),n}};function wd(i,e){return i.distance-e.distance}function Cc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Cc(r[a],e,t,!0)}}var dr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Pc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};var ca=class extends Jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ch(i,e,t,n){let s=Mm(n);switch(t){case Zc:return i*e;case qo:return i*e/s.components*s.byteLength;case Yo:return i*e/s.components*s.byteLength;case is:return i*e*2/s.components*s.byteLength;case Zo:return i*e*2/s.components*s.byteLength;case jc:return i*e*3/s.components*s.byteLength;case si:return i*e*4/s.components*s.byteLength;case jo:return i*e*4/s.components*s.byteLength;case da:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:case Qo:return Math.max(i,16)*Math.max(e,8)/4;case $o:case Jo:return Math.max(i,8)*Math.max(e,8)/2;case el:case tl:case il:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nl:case ma:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bl:case vl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Sl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ga:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mm(i){switch(i){case Cn:case Wc:return{byteLength:1,components:1};case mr:case Xc:case ii:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case ni:case Vo:case Vn:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Em(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<u.length;p++){let _=u[f],y=u[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++f,u[f]=y)}u.length=f+1;for(let p=0,_=u.length;p<_;p++){let y=u[p];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tm=`#ifdef USE_ALPHAHASH
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
#endif`,Am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
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
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,km=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,Bm=`#ifdef USE_BUMPMAP
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Zm=`#define PI 3.141592653589793
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
} // validated`,jm=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e0="gl_FragColor = linearToOutputTexel( gl_FragColor );",t0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d0=`#ifdef USE_GRADIENTMAP
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
}`,u0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,g0=`#ifdef USE_ENVMAP
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
#endif`,x0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,M0=`uniform sampler2D dfgLUT;
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
}`,S0=`
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
#endif`,E0=`#if defined( RE_IndirectDiffuse )
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,A0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N0=`#if defined( USE_POINTS_UV )
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
#endif`,F0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O0=`#if defined( USE_MORPHCOLORS )
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
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`#ifdef USE_MORPHTARGETS
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
#endif`,z0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,V0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,W0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Y0=`#ifdef USE_NORMALMAP
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
#endif`,Z0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,K0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,og=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cg=`float getShadowMask() {
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
}`,hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dg=`#ifdef USE_SKINNING
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
#endif`,ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wg=`uniform sampler2D t2D;
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ag=`uniform float backgroundBlurriness;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`#include <common>
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
}`,Ig=`#if DEPTH_PACKING == 3200
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
}`,Dg=`#define DISTANCE
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
}`,Lg=`#define DISTANCE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,Bg=`uniform vec3 diffuse;
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
}`,Hg=`#define LAMBERT
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
}`,zg=`#define LAMBERT
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
}`,Gg=`#define MATCAP
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
}`,Vg=`#define MATCAP
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
}`,Wg=`#define NORMAL
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
}`,Xg=`#define NORMAL
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
}`,qg=`#define PHONG
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
}`,Yg=`#define PHONG
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
}`,Zg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,$g=`#define TOON
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
}`,Kg=`#define TOON
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
}`,Jg=`uniform float size;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,ex=`#include <common>
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
}`,tx=`uniform vec3 color;
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
}`,nx=`uniform float rotation;
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
}`,ix=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:wm,alphahash_pars_fragment:Tm,alphamap_fragment:Am,alphamap_pars_fragment:Rm,alphatest_fragment:Cm,alphatest_pars_fragment:Pm,aomap_fragment:Im,aomap_pars_fragment:Dm,batching_pars_vertex:Lm,batching_vertex:Nm,begin_vertex:Fm,beginnormal_vertex:Um,bsdfs:km,iridescence_fragment:Om,bumpmap_pars_fragment:Bm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:zm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Vm,color_fragment:Wm,color_pars_fragment:Xm,color_pars_vertex:qm,color_vertex:Ym,common:Zm,defaultnormal_vertex:jm,displacementmap_pars_vertex:$m,displacementmap_vertex:Km,emissivemap_fragment:Jm,emissivemap_pars_fragment:Qm,colorspace_fragment:e0,colorspace_pars_fragment:t0,envmap_fragment:n0,envmap_common_pars_fragment:i0,envmap_pars_fragment:s0,envmap_pars_vertex:r0,envmap_physical_pars_fragment:g0,envmap_vertex:a0,fog_vertex:o0,fog_pars_vertex:l0,fog_fragment:c0,fog_pars_fragment:h0,gradientmap_pars_fragment:d0,lightmap_pars_fragment:u0,lights_lambert_fragment:f0,lights_lambert_pars_fragment:p0,lights_pars_begin:m0,lights_toon_fragment:x0,lights_toon_pars_fragment:_0,lights_phong_fragment:y0,lights_phong_pars_fragment:b0,lights_physical_fragment:v0,lights_physical_pars_fragment:M0,lights_fragment_begin:S0,lights_fragment_maps:E0,lights_fragment_end:w0,lightprobes_pars_fragment:T0,logdepthbuf_fragment:A0,logdepthbuf_pars_fragment:R0,logdepthbuf_pars_vertex:C0,logdepthbuf_vertex:P0,map_fragment:I0,map_pars_fragment:D0,map_particle_fragment:L0,map_particle_pars_fragment:N0,metalnessmap_fragment:F0,metalnessmap_pars_fragment:U0,morphinstance_vertex:k0,morphcolor_vertex:O0,morphnormal_vertex:B0,morphtarget_pars_vertex:H0,morphtarget_vertex:z0,normal_fragment_begin:G0,normal_fragment_maps:V0,normal_pars_fragment:W0,normal_pars_vertex:X0,normal_vertex:q0,normalmap_pars_fragment:Y0,clearcoat_normal_fragment_begin:Z0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:$0,iridescence_pars_fragment:K0,opaque_fragment:J0,packing:Q0,premultiplied_alpha_fragment:eg,project_vertex:tg,dithering_fragment:ng,dithering_pars_fragment:ig,roughnessmap_fragment:sg,roughnessmap_pars_fragment:rg,shadowmap_pars_fragment:ag,shadowmap_pars_vertex:og,shadowmap_vertex:lg,shadowmask_pars_fragment:cg,skinbase_vertex:hg,skinning_pars_vertex:dg,skinning_vertex:ug,skinnormal_vertex:fg,specularmap_fragment:pg,specularmap_pars_fragment:mg,tonemapping_fragment:gg,tonemapping_pars_fragment:xg,transmission_fragment:_g,transmission_pars_fragment:yg,uv_pars_fragment:bg,uv_pars_vertex:vg,uv_vertex:Mg,worldpos_vertex:Sg,background_vert:Eg,background_frag:wg,backgroundCube_vert:Tg,backgroundCube_frag:Ag,cube_vert:Rg,cube_frag:Cg,depth_vert:Pg,depth_frag:Ig,distance_vert:Dg,distance_frag:Lg,equirect_vert:Ng,equirect_frag:Fg,linedashed_vert:Ug,linedashed_frag:kg,meshbasic_vert:Og,meshbasic_frag:Bg,meshlambert_vert:Hg,meshlambert_frag:zg,meshmatcap_vert:Gg,meshmatcap_frag:Vg,meshnormal_vert:Wg,meshnormal_frag:Xg,meshphong_vert:qg,meshphong_frag:Yg,meshphysical_vert:Zg,meshphysical_frag:jg,meshtoon_vert:$g,meshtoon_frag:Kg,points_vert:Jg,points_frag:Qg,shadow_vert:ex,shadow_frag:tx,sprite_vert:nx,sprite_frag:ix},Ve={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},xi={basic:{uniforms:bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:bn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:bn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:bn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new tt(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:bn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:bn([Ve.points,Ve.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:bn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:bn([Ve.common,Ve.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:bn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:bn([Ve.sprite,Ve.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:bn([Ve.common,Ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:bn([Ve.lights,Ve.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};xi.physical={uniforms:bn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new lt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};var Tl={r:0,b:0,g:0},sx=new Rt,Hu=new lt;Hu.set(-1,0,0,0,1,0,0,0,1);function rx(i,e,t,n,s,r){let a=new tt(0),o=s===!0?0:1,l,c,d=null,u=0,f=null;function p(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let M=S.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(S){let A=!1,M=p(S);M===null?m(a,o):M&&M.isColor&&(m(M,1),A=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,A){let M=p(A);M&&M.isCubeTexture?(c===void 0&&(c=new Ie(new Ht(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:As(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sx.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hu),c.material.toneMapped=yt.getTransfer(M.colorSpace)!==At,(d!==M||u!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ie(new Rn(2,2),new fi({name:"BackgroundMaterial",uniforms:As(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=yt.getTransfer(M.colorSpace)!==At,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,A){S.getRGB(Tl,ah(i)),t.buffers.color.setClear(Tl.r,Tl.g,Tl.b,A,r)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,A=1){a.set(S),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:_,addToRenderList:y,dispose:x}}function ax(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(L,Z,K,F,X){let N=!1,j=u(L,F,K,Z);r!==j&&(r=j,c(r.object)),N=p(L,F,K,X),N&&_(L,F,K,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(L,Z,K,F),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function u(L,Z,K,F){let X=F.wireframe===!0,N=n[Z.id];N===void 0&&(N={},n[Z.id]=N);let j=L.isInstancedMesh===!0?L.id:0,H=N[j];H===void 0&&(H={},N[j]=H);let U=H[K.id];U===void 0&&(U={},H[K.id]=U);let z=U[X];return z===void 0&&(z=f(l()),U[X]=z),z}function f(L){let Z=[],K=[],F=[];for(let X=0;X<t;X++)Z[X]=0,K[X]=0,F[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:K,attributeDivisors:F,object:L,attributes:{},index:null}}function p(L,Z,K,F){let X=r.attributes,N=Z.attributes,j=0,H=K.getAttributes();for(let U in H)if(H[U].location>=0){let $=X[U],xe=N[U];if(xe===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),$===void 0||$.attribute!==xe||xe&&$.data!==xe.data)return!0;j++}return r.attributesNum!==j||r.index!==F}function _(L,Z,K,F){let X={},N=Z.attributes,j=0,H=K.getAttributes();for(let U in H)if(H[U].location>=0){let $=N[U];$===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let xe={};xe.attribute=$,$&&$.data&&(xe.data=$.data),X[U]=xe,j++}r.attributes=X,r.attributesNum=j,r.index=F}function y(){let L=r.newAttributes;for(let Z=0,K=L.length;Z<K;Z++)L[Z]=0}function m(L){x(L,0)}function x(L,Z){let K=r.newAttributes,F=r.enabledAttributes,X=r.attributeDivisors;K[L]=1,F[L]===0&&(i.enableVertexAttribArray(L),F[L]=1),X[L]!==Z&&(i.vertexAttribDivisor(L,Z),X[L]=Z)}function S(){let L=r.newAttributes,Z=r.enabledAttributes;for(let K=0,F=Z.length;K<F;K++)Z[K]!==L[K]&&(i.disableVertexAttribArray(K),Z[K]=0)}function A(L,Z,K,F,X,N,j){j===!0?i.vertexAttribIPointer(L,Z,K,X,N):i.vertexAttribPointer(L,Z,K,F,X,N)}function M(L,Z,K,F){y();let X=F.attributes,N=K.getAttributes(),j=Z.defaultAttributeValues;for(let H in N){let U=N[H];if(U.location>=0){let z=X[H];if(z===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),z!==void 0){let $=z.normalized,xe=z.itemSize,W=e.get(z);if(W===void 0)continue;let G=W.buffer,ne=W.type,me=W.bytesPerElement,ge=ne===i.INT||ne===i.UNSIGNED_INT||z.gpuType===Vo;if(z.isInterleavedBufferAttribute){let Ee=z.data,He=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,at=z.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let ze=0;ze<U.locationSize;ze++)x(U.location+ze,Ee.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ze=0;ze<U.locationSize;ze++)m(U.location+ze);i.bindBuffer(i.ARRAY_BUFFER,G);for(let ze=0;ze<U.locationSize;ze++)A(U.location+ze,xe/U.locationSize,ne,$,He*me,(at+xe/U.locationSize*ze)*me,ge)}else{if(z.isInstancedBufferAttribute){for(let Ee=0;Ee<U.locationSize;Ee++)x(U.location+Ee,z.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Ee=0;Ee<U.locationSize;Ee++)m(U.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,G);for(let Ee=0;Ee<U.locationSize;Ee++)A(U.location+Ee,xe/U.locationSize,ne,$,xe*me,xe/U.locationSize*Ee*me,ge)}}else if(j!==void 0){let $=j[H];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(U.location,$);break;case 3:i.vertexAttrib3fv(U.location,$);break;case 4:i.vertexAttrib4fv(U.location,$);break;default:i.vertexAttrib1fv(U.location,$)}}}}S()}function C(){B();for(let L in n){let Z=n[L];for(let K in Z){let F=Z[K];for(let X in F){let N=F[X];for(let j in N)d(N[j].object),delete N[j];delete F[X]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let Z=n[L.id];for(let K in Z){let F=Z[K];for(let X in F){let N=F[X];for(let j in N)d(N[j].object),delete N[j];delete F[X]}}delete n[L.id]}function g(L){for(let Z in n){let K=n[Z];for(let F in K){let X=K[F];if(X[L.id]===void 0)continue;let N=X[L.id];for(let j in N)d(N[j].object),delete N[j];delete X[L.id]}}}function w(L){for(let Z in n){let K=n[Z],F=L.isInstancedMesh===!0?L.id:0,X=K[F];if(X!==void 0){for(let N in X){let j=X[N];for(let H in j)d(j[H].object),delete j[H];delete X[N]}delete K[F],Object.keys(K).length===0&&delete n[Z]}}}function B(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:g,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function ox(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let f=0;for(let p=0;p<d;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==si&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let w=g===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Cn&&g!==Vn&&!w&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(it("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&it("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:C,samples:T}}function cx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,p){let _=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,x=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?d(null):c();else{let S=r?0:n,A=S*4,M=x.clippingState||null;l.value=M,M=d(_,f,A,p);for(let C=0;C!==A;++C)M[C]=t[C];x.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,p,_){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,_!==!0||m===null){let x=p+y*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<x)&&(m=new Float32Array(x));for(let A=0,M=p;A!==y;++A,M+=4)a.copy(u[A]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ba=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ms});r.uniforms.tEquirect.value=t;let a=new Ie(s,r),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Sn),new cr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},_u=256,hx=3,dx=20,zu=256,Gu=16,ux=3,fx=new Y,px=new tt,ki=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cr(1,10,null),this._boxMesh=new Ie(new Ht(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=fx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,p=l.autoClearDepth,_=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(px));let m=new cr(n,s,d);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=p,l.autoClearStencil=_,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_u,nh(e))}_fromTexture(e,t){e.mapping===Es||e.mapping===pr?this._setSize(e.image.length===0?_u:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yu(e,!1,!1),n=Math.log2(e)-hx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Es||e.mapping===pr?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mx(),this._integrationMaterial=gx());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Gu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-ux)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(zu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xx());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function yu(i,e,t){return new ba(i,{minFilter:Ni,generateMipmaps:e,type:ii,colorSpace:Br,depthBuffer:t})}function va(i,e,t){return new fi({name:i,uniforms:e,vertexShader:gt.cube_vert,fragmentShader:t,side:sn,blending:Ms,depthTest:!1,depthWrite:!1})}function mx(){return va("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zu}u

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
	`)}function gx(){return va("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gu}},`

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
	`)}function xx(){return va("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${dx}
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
	`)}function bu(){return va("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vu(){return va("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _x(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Ho||p===zo)if(e.has(f)){let _=e.get(f).texture;return o(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let y=new ba(_.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,_=p===Ho||p===zo,y=p===Es||p===pr;if(_||y){let m=t.get(f),x=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new ki(i)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let S=f.image;return _&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new ki(i)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function o(f,p){return p===Ho?f.mapping=Es:p===zo&&(f.mapping=pr),f}function l(f){let p=0,_=6;for(let y=0;y<_;y++)f[y]!==void 0&&p++;return p===_}function c(f){let p=f.target;p.removeEventListener("dispose",c);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(f){let p=f.target;p.removeEventListener("dispose",d);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function yx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Lr("WebGLRenderer: "+n+" extension not supported."),s}}}function bx(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let y=r.get(_);y&&(e.remove(y),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function d(_){let y=_.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function u(_){let y=_.index,m=_.attributes.position,x=0;if(m===void 0)return;let S=y!==null?y.array.length:m.array.length/3-1,A=m.count>=65535?Wr:Vr,M=new A(Math.ceil(S/3)*6,1),C=M.array;if(y!==null){let g=y.array;x=y.version;for(let w=0,B=0;w<S;w+=3){let I=g[w+0],L=g[w+1],Z=g[w+2];C[B++]=I,C[B++]=L,C[B++]=L,C[B++]=Z,C[B++]=Z,C[B++]=I}}else{x=m.version;for(let g=0,w=0;g<S;g+=3){let B=g+0,I=g+1,L=g+2;C[w++]=B,C[w++]=I,C[w++]=I,C[w++]=L,C[w++]=L,C[w++]=B}}M.version=x;let T=r.get(_);T&&e.remove(T),r.set(_,M)}function f(_){let y=r.get(_);if(y){let m=_.index;m!==null&&y.version<m.version&&u(_)}else u(_);return r.get(_)}function p(){for(let _ in s){let y=s[_].deref();y!==void 0&&l(y)}}return{get:c,update:d,getWireframeAttribute:f,dispose:p}}function vx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*a,p),t.update(f,n,p))}function d(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let y=0;for(let m=0;m<p;m++)y+=f[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Mx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sx(i,e,t){let n=new WeakMap,s=new Ot;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==u){let B=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),y===!0&&(A=3);let M=o.attributes.position.count*A,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*C*4*u),g=new Gr(T,M,C,u);g.type=Vn,g.needsUpdate=!0;let w=A*4;for(let I=0;I<u;I++){let L=m[I],Z=x[I],K=S[I],F=M*C*4*I;for(let X=0;X<L.count;X++){let N=X*w;p===!0&&(s.fromBufferAttribute(L,X),T[F+N+0]=s.x,T[F+N+1]=s.y,T[F+N+2]=s.z,T[F+N+3]=0),_===!0&&(s.fromBufferAttribute(Z,X),T[F+N+4]=s.x,T[F+N+5]=s.y,T[F+N+6]=s.z,T[F+N+7]=0),y===!0&&(s.fromBufferAttribute(K,X),T[F+N+8]=s.x,T[F+N+9]=s.y,T[F+N+10]=s.z,T[F+N+11]=K.itemSize===4?s.w:1)}}f={count:u,texture:g,size:new be(M,C)},n.set(o,f),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ex(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return f}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var wx={[kc]:"LINEAR_TONE_MAPPING",[Oc]:"REINHARD_TONE_MAPPING",[Bc]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[ti]:"NEUTRAL_TONE_MAPPING",[zc]:"CUSTOM_TONE_MAPPING"};function Tx(i,e,t,n,s,r){let a=new Fn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new Xt;d.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new dt([0,2,0,0,2,0],2));let u=new Eo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ie(d,u),p=new bs(-1,1,1,-1,0,1),_=null,y=null,m=!1,x,S=null,A=[],M=!1;this.setSize=function(C,T){a.setSize(C,T),o!==null&&o.setSize(C,T),l!==null&&l.setSize(C,T);for(let g=0;g<A.length;g++){let w=A[g];w.setSize&&w.setSize(C,T)}},this.setEffects=function(C){A=C,M=A.length>0&&A[0].isRenderPass===!0;let T=a.width,g=a.height;A.length>0&&o===null&&(o=new Fn(T,g,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(T,g,{type:ii,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&A.some(B=>B.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new Di(T,g),r===!0&&(c.format=Fi,c.type=ws)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let B=0;B<A.length;B++){let I=A[B];I.setSize&&I.setSize(T,g),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(C,T){if(m||C.toneMapping===mi&&A.length===0)return!1;if(S=T,T!==null){let g=T.width,w=T.height;(a.width!==g||a.height!==w)&&this.setSize(g,w)}return M===!1&&C.setRenderTarget(a),x=C.toneMapping,C.toneMapping=mi,!0},this.hasRenderPass=function(){return M},this.end=function(C,T){C.toneMapping=x,m=!0;let g=a,w=o;for(let B=0;B<A.length;B++){let I=A[B];I.enabled!==!1&&(I.render(C,w,g,T),I.needsSwap!==!1&&(g=w,w=w===o?l:o))}if(_!==C.outputColorSpace||y!==C.toneMapping){_=C.outputColorSpace,y=C.toneMapping,u.defines={},yt.getTransfer(_)===At&&(u.defines.SRGB_TRANSFER="");let B=wx[y];B&&(u.defines[B]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(S),C.render(f,p),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),u.dispose()}}var Vu=new En,Wu=new Di(1,1),Xu=new jr(1),qu=new Gr,Yu=new xo,Zu=new Zr,Mu=[],Su=[],Eu=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function xr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rl(i,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ax(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function Px(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function Ix(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;Tu.set(n),i.uniformMatrix2fv(this.addr,!1,Tu),an(t,n)}}function Dx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;wu.set(n),i.uniformMatrix3fv(this.addr,!1,wu),an(t,n)}}function Lx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(rn(t,n))return;Eu.set(n),i.uniformMatrix4fv(this.addr,!1,Eu),an(t,n)}}function Nx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function Ox(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function Cl(i){return i.version===0&&(i.compareFunction=Jc,i.needsUpdate=!0),i}function Gx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Cl(Wu):r=Vu,t.setTexture2D(e||r,s)}function Vx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yu,s)}function Wx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Cl(Xu):r=Zu,t.setTextureCube(e||r,s)}function Xx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qu,s)}function qx(i){switch(i){case 5126:return Ax;case 35664:return Rx;case 35665:return Cx;case 35666:return Px;case 35674:return Ix;case 35675:return Dx;case 35676:return Lx;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ux;case 35669:case 35673:return kx;case 5125:return Ox;case 36294:return Bx;case 36295:return Hx;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Vx;case 35680:case 36300:case 36308:case 36293:return Wx;case 36289:case 36303:case 36311:case 36292:return Xx}}function Yx(i,e){i.uniform1fv(this.addr,e)}function Zx(i,e){let t=xr(e,this.size,2);i.uniform2fv(this.addr,t)}function jx(i,e){let t=xr(e,this.size,3);i.uniform3fv(this.addr,t)}function $x(i,e){let t=xr(e,this.size,4);i.uniform4fv(this.addr,t)}function Kx(i,e){let t=xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jx(i,e){let t=xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qx(i,e){let t=xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e1(i,e){i.uniform1iv(this.addr,e)}function t1(i,e){i.uniform2iv(this.addr,e)}function n1(i,e){i.uniform3iv(this.addr,e)}function i1(i,e){i.uniform4iv(this.addr,e)}function s1(i,e){i.uniform1uiv(this.addr,e)}function r1(i,e){i.uniform2uiv(this.addr,e)}function a1(i,e){i.uniform3uiv(this.addr,e)}function o1(i,e){i.uniform4uiv(this.addr,e)}function l1(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Cl(Wu):a=Vu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function c1(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yu,r[a])}function h1(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Cl(Xu):a=Zu;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function d1(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qu,r[a])}function u1(i){switch(i){case 5126:return Yx;case 35664:return Zx;case 35665:return jx;case 35666:return $x;case 35674:return Kx;case 35675:return Jx;case 35676:return Qx;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return s1;case 36294:return r1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}var uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qx(t.type)}},fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u1(t.type)}},ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},hh=/(\w+)(\])?(\[|\.)?/g;function Au(i,e){i.seq.push(e),i.map[e.id]=e}function f1(i,e,t){let n=i.name,s=n.length;for(hh.lastIndex=0;;){let r=hh.exec(n),a=hh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Au(t,c===void 0?new uh(o,i,e):new fh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new ph(o),Au(t,u)),t=u}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);f1(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ru(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var p1=37297,m1=0;function g1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Cu=new lt;function x1(i){yt._getMatrix(Cu,yt.workingColorSpace,i);let e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(i)){case Hr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+g1(i.getShaderSource(e),o)}else return r}function _1(i,e){let t=x1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var y1={[kc]:"Linear",[Oc]:"Reinhard",[Bc]:"Cineon",[Hc]:"ACESFilmic",[Gc]:"AgX",[ti]:"Neutral",[zc]:"Custom"};function b1(i,e){let t=y1[e];return t===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Al=new Y;function v1(){yt.getLuminanceCoefficients(Al);let i=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function S1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ya(i){return i!==""}function Iu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var w1=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(w1,T1)}function T1(i,e){let t=gt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return mh(t)}var A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(i){return i.replace(A1,R1)}function R1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var C1={[vs]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function P1(i){return C1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var I1={[pr]:"ENVMAP_MODE_REFRACTION"};function D1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":I1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var L1={[Bo]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[Yd]:"ENVMAP_BLENDING_ADD"};function N1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":L1[i.combine]||"ENVMAP_BLENDING_NONE"}function F1(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=P1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=D1(t),u=N1(t),f=M1(t),p=S1(r),_=s.createProgram(),y,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ya).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ya).join(`
`),m.length>0&&(m+=`
`)):(y=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?gt.tonemapping_pars_fragment:"",t.toneMapping!==mi?b1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,_1("linearToOutputTexel",t.outputColorSpace),v1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=mh(a),a=Iu(a,t),a=Du(a,t),o=mh(o),o=Iu(o,t),o=Du(o,t),a=Lu(a),o=Lu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=x+y+a,A=x+m+o,M=Ru(s,s.VERTEX_SHADER,S),C=Ru(s,s.FRAGMENT_SHADER,A);s.attachShader(_,M),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",Z=s.getShaderInfoLog(M)||"",K=s.getShaderInfoLog(C)||"",F=L.trim(),X=Z.trim(),N=K.trim(),j=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,C);else{let U=Pu(s,M,"vertex"),z=Pu(s,C,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+U+`
`+z)}else F!==""?it("WebGLProgram: Program Info Log:",F):(X===""||N==="")&&(H=!1);H&&(I.diagnostics={runnable:j,programLog:F,vertexShader:{log:X,prefix:y},fragmentShader:{log:N,prefix:m}})}s.deleteShader(M),s.deleteShader(C),g=new gr(s,_),w=E1(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(_,p1)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=C,this}var U1=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=U1++,this.code=e,this.usedTimes=0}};function k1(i){return i===is||i===ma||i===ga}function O1(i,e,t,n,s,r){let a=new tr,o=new gh,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,w,B,I,L,Z){let K=I.fog,F=L.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,N=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,j=e.get(g.envMap||X,N),H=f[g.type],U=n.precision;g.precision!==null&&(U=n.getMaxPrecision(g.precision),U!==g.precision&&it("WebGLProgram.getParameters:",g.precision,"not supported, using",U,"instead."));let z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$=z!==void 0?z.length:0,xe=0;F.morphAttributes.position!==void 0&&(xe=1),F.morphAttributes.normal!==void 0&&(xe=2),F.morphAttributes.color!==void 0&&(xe=3);let W,G,ne,me;if(H){let Fe=xi[H];W=Fe.vertexShader,G=Fe.fragmentShader}else{W=g.vertexShader,G=g.fragmentShader;let Fe=o.getVertexShaderStage(g),xt=o.getFragmentShaderStage(g);o.update(g,Fe,xt),ne=Fe.id,me=xt.id}let ge=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),He=L.isInstancedMesh===!0,at=L.isBatchedMesh===!0,ze=!!g.map,Ye=!!g.matcap,Qe=!!j,pe=Qe&&j.isPMREMTexture===!0,ye=!!g.aoMap,Ae=!!g.lightMap,Ue=!!g.bumpMap&&g.wireframe===!1,De=!!g.normalMap,qe=!!g.displacementMap,Ne=!!g.emissiveMap,et=!!g.metalnessMap,ht=!!g.roughnessMap,mt=g.anisotropy>0,q=g.clearcoat>0,Tt=g.diffuseRoughness>0,ut=g.dispersion>0,bt=g.retroreflectivity>0,Pe=g.iridescence>0,It=g.sheen>0,Je=g.transmission>0,st=mt&&!!g.anisotropyMap,E=q&&!!g.clearcoatMap,v=q&&!!g.clearcoatNormalMap,O=q&&!!g.clearcoatRoughnessMap,se=Tt&&!!g.diffuseRoughnessMap,le=Pe&&!!g.iridescenceMap,ue=Pe&&!!g.iridescenceThicknessMap,_e=It&&!!g.sheenColorMap,Q=It&&!!g.sheenRoughnessMap,ie=!!g.specularMap,ve=!!g.specularColorMap,k=!!g.specularIntensityMap,de=Je&&!!g.transmissionMap,ae=Je&&!!g.thicknessMap,we=!!g.gradientMap,Me=!!g.alphaMap,Te=g.alphaTest>0,Le=!!g.alphaHash,Oe=!!g.extensions,Se=mi;g.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Se=i.toneMapping);let Be=pe?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,nt={shaderID:H,shaderType:g.type,shaderName:g.name,vertexShader:W,fragmentShader:G,defines:g.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:U,batching:at,batchingColor:at&&L._colorsTexture!==null,instancing:He,instancingColor:He&&L.instanceColor!==null,instancingMorph:He&&L.morphTexture!==null,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ze,matcap:Ye,envMap:Qe,envMapMode:Qe&&j.mapping,envMapPMREM:pe,envMapMaxLod:pe?Be.length-1:null,envMapSize:pe?Be[0].width:null,aoMap:ye,lightMap:Ae,bumpMap:Ue,normalMap:De,displacementMap:qe,emissiveMap:Ne,normalMapObjectSpace:De&&g.normalMapType===$d,normalMapTangentSpace:De&&g.normalMapType===xa,packedNormalMap:De&&g.normalMapType===xa&&k1(g.normalMap.format),metalnessMap:et,roughnessMap:ht,anisotropy:mt,anisotropyMap:st,clearcoat:q,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:O,diffuseRoughness:Tt,diffuseRoughnessMap:se,dispersion:ut,retroreflection:bt,iridescence:Pe,iridescenceMap:le,iridescenceThicknessMap:ue,sheen:It,sheenColorMap:_e,sheenRoughnessMap:Q,specularMap:ie,specularColorMap:ve,specularIntensityMap:k,transmission:Je,transmissionMap:de,thicknessMap:ae,gradientMap:we,opaque:g.transparent===!1&&g.blending===fr&&g.alphaToCoverage===!1,alphaMap:Me,alphaTest:Te,alphaHash:Le,combine:g.combine,mapUv:ze&&p(g.map.channel),aoMapUv:ye&&p(g.aoMap.channel),lightMapUv:Ae&&p(g.lightMap.channel),bumpMapUv:Ue&&p(g.bumpMap.channel),normalMapUv:De&&p(g.normalMap.channel),displacementMapUv:qe&&p(g.displacementMap.channel),emissiveMapUv:Ne&&p(g.emissiveMap.channel),metalnessMapUv:et&&p(g.metalnessMap.channel),roughnessMapUv:ht&&p(g.roughnessMap.channel),anisotropyMapUv:st&&p(g.anisotropyMap.channel),clearcoatMapUv:E&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:le&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Q&&p(g.sheenRoughnessMap.channel),specularMapUv:ie&&p(g.specularMap.channel),specularColorMapUv:ve&&p(g.specularColorMap.channel),specularIntensityMapUv:k&&p(g.specularIntensityMap.channel),transmissionMapUv:de&&p(g.transmissionMap.channel),thicknessMapUv:ae&&p(g.thicknessMap.channel),alphaMapUv:Me&&p(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(De||mt),vertexNormals:!!F.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ze||Me),fog:!!K,useFog:g.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||F.attributes.normal===void 0&&De===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ee,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:Z.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:ze&&g.map.isVideoTexture===!0&&yt.getTransfer(g.map.colorSpace)===At,decodeVideoTextureEmissive:Ne&&g.emissiveMap.isVideoTexture===!0&&yt.getTransfer(g.emissiveMap.colorSpace)===At,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===en,flipSided:g.side===sn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Oe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&g.extensions.multiDraw===!0||at)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return nt.vertexUv1s=l.has(1),nt.vertexUv2s=l.has(2),nt.vertexUv3s=l.has(3),l.clear(),nt}function y(g){let w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(let B in g.defines)w.push(B),w.push(g.defines[B]);return g.isRawShaderMaterial===!1&&(m(w,g),x(w,g),w.push(i.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function m(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapPMREM),g.push(w.envMapMaxLod),g.push(w.envMapSize),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.diffuseRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.numSunLights),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numSunLightShadows),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.numLightProbeGrids),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function x(g,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){let w=f[g.type],B;if(w){let I=xi[w];B=mu.clone(I.uniforms)}else B=g.uniforms;return B}function A(g,w){let B=d.get(w);return B!==void 0?++B.usedTimes:(B=new F1(i,w,g,s),c.push(B),d.set(w,B)),B}function M(g){if(--g.usedTimes===0){let w=c.indexOf(g);c[w]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function C(g){o.remove(g)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:y,getUniforms:S,acquireProgram:A,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:T}}function B1(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function H1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Fu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,_,y,m,x){let S=i[e];return S===void 0?(S={id:f.id,object:f,geometry:p,material:_,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:m,group:x},i[e]=S):(S.id=f.id,S.object=f,S.geometry=p,S.material=_,S.materialVariant=a(f),S.groupOrder=y,S.renderOrder=f.renderOrder,S.z=m,S.group=x),e++,S}function l(f,p,_,y,m,x,S){S.reversedDepth===!0&&(m=-m);let A=o(f,p,_,y,m,x);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function c(f,p,_,y,m,x){let S=o(f,p,_,y,m,x);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function d(f,p){t.length>1&&t.sort(f||H1),n.length>1&&n.sort(p||Fu),s.length>1&&s.sort(p||Fu)}function u(){for(let f=e,p=i.length;f<p;f++){let _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function z1(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Uu,i.set(n,[a])):s>=r.length?(a=new Uu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function G1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new tt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function V1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var W1=0;function X1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function q1(i){let e=new G1,t=V1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let s=new Y,r=new Rt,a=new Rt;function o(c){let d=0,u=0,f=0;for(let Z=0;Z<9;Z++)n.probe[Z].set(0,0,0);let p=0,_=0,y=0,m=0,x=0,S=0,A=0,M=0,C=0,T=0,g=0,w=0,B=0,I=0;c.sort(X1);for(let Z=0,K=c.length;Z<K;Z++){let F=c[Z],X=F.color,N=F.intensity,j=F.distance,H=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===is?H=F.shadow.map.texture:H=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)d+=X.r*N,u+=X.g*N,f+=X.b*N;else if(F.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(F.sh.coefficients[U],N);I++}else if(F.isSunLight){let U=e.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let z=F.shadow,$=t.get(F);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[_]=$,n.sunShadowMap[_]=H;let xe=z.getViewportCount();for(let W=0;W<xe;W++)n.sunShadowMatrix[y+W]=z.getMatrix(W),n.sunShadowCascade[y+W]=z._cascadeData[W];y+=xe,_++}n.sun[p]=U,p++}else if(F.isDirectionalLight){let U=e.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let z=F.shadow,$=t.get(F);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=F.shadow.matrix,C++}n.directional[m]=U,m++}else if(F.isSpotLight){let U=e.get(F);U.position.setFromMatrixPosition(F.matrixWorld),U.color.copy(X).multiplyScalar(N),U.distance=j,U.coneCos=Math.cos(F.angle),U.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),U.decay=F.decay,n.spot[S]=U;let z=F.shadow;if(F.map&&(n.spotLightMap[w]=F.map,w++,z.updateMatrices(F),F.castShadow&&B++),n.spotLightMatrix[S]=z.matrix,F.castShadow){let $=t.get(F);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.spotShadow[S]=$,n.spotShadowMap[S]=H,g++}S++}else if(F.isRectAreaLight){let U=e.get(F);U.color.copy(X).multiplyScalar(N),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),n.rectArea[A]=U,A++}else if(F.isPointLight){let U=e.get(F);if(U.color.copy(F.color).multiplyScalar(F.intensity),U.distance=F.distance,U.decay=F.decay,F.castShadow){let z=F.shadow,$=t.get(F);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,n.pointShadow[x]=$,n.pointShadowMap[x]=H,n.pointShadowMatrix[x]=F.shadow.matrix,T++}n.point[x]=U,x++}else if(F.isHemisphereLight){let U=e.get(F);U.skyColor.copy(F.color).multiplyScalar(N),U.groundColor.copy(F.groundColor).multiplyScalar(N),n.hemi[M]=U,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==x||L.spotLength!==S||L.rectAreaLength!==A||L.hemiLength!==M||L.numSunShadows!==_||L.numDirectionalShadows!==C||L.numPointShadows!==T||L.numSpotShadows!==g||L.numSpotMaps!==w||L.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=m,n.spot.length=S,n.rectArea.length=A,n.point.length=x,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+w-B,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=I,L.sunLength=p,L.directionalLength=m,L.pointLength=x,L.spotLength=S,L.rectAreaLength=A,L.hemiLength=M,L.numSunShadows=_,L.numDirectionalShadows=C,L.numPointShadows=T,L.numSpotShadows=g,L.numSpotMaps=w,L.numLightProbes=I,n.version=W1++)}function l(c,d){let u=0,f=0,p=0,_=0,y=0,m=0,x=d.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let M=c[S];if(M.isSunLight){let C=n.sun[u];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(x),u++}else if(M.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),f++}else if(M.isSpotLight){let C=n.spot[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(x),_++}else if(M.isRectAreaLight){let C=n.rectArea[y];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),a.identity(),r.copy(M.matrixWorld),r.premultiply(x),a.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let C=n.point[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(x),p++}else if(M.isHemisphereLight){let C=n.hemi[m];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(x),m++}}}return{setup:o,setupView:l,state:n}}function ku(i){let e=new q1(i),t=[],n=[],s=[];function r(u){d.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Y1(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ku(i),e.set(s,[o])):r>=a.length?(o=new ku(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
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
}`,$1=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],K1=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Ou=new Rt,_a=new Y,dh=new Y;function J1(i,e,t){let n=new $i,s=new be,r=new be,a=new Ot,o=new wo,l=new To,c={},d=t.maxTextureSize,u={[pi]:sn,[sn]:pi,[en]:en},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:Z1,fragmentShader:j1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new Xt;_.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ie(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vs;let x=this.type;this.render=function(T,g,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Oo&&(it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vs);let B=i.getRenderTarget(),I=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Ms),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let K=x!==this.type;K&&g.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(X=>X.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,X=T.length;F<X;F++){let N=T[F],j=N.shadow;if(j===void 0){it("WebGLShadowMap:",N,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let H=j.getFrameExtents();s.multiply(H),r.copy(j.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/H.x),s.x=r.x*H.x,j.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/H.y),s.y=r.y*H.y,j.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(j.camera._reversedDepth=U,j.map===null||K===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===ur){if(N.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Fn(s.x,s.y,{format:is,type:ii,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),j.map.texture.name=N.name+".shadowMap",j.map.depthTexture=new Di(s.x,s.y,Vn),j.map.depthTexture.name=N.name+".shadowMapDepth",j.map.depthTexture.format=Pi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=dn,j.map.depthTexture.magFilter=dn}else N.isPointLight?(j.map=new ba(s.x),j.map.depthTexture=new jr(s.x,ni)):(j.map=new Fn(s.x,s.y),j.map.depthTexture=new Di(s.x,s.y,ni)),j.map.depthTexture.name=N.name+".shadowMap",j.map.depthTexture.format=Pi,this.type===vs?(j.map.depthTexture.compareFunction=U?Kc:$c,j.map.depthTexture.minFilter=Sn,j.map.depthTexture.magFilter=Sn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=dn,j.map.depthTexture.magFilter=dn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let z=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();N.isPointLight!==!0&&j.updateMatrices(N,w);let $=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:w.layers;for(let xe=0;xe<z;xe++){let W=j.getCamera(xe);if(N.isPointLight){let G=j.camera,ne=j.matrix,me=N.distance||G.far;me!==G.far&&(G.far=me,G.updateProjectionMatrix()),_a.setFromMatrixPosition(N.matrixWorld),G.position.copy(_a),dh.copy(G.position),dh.add($1[xe]),G.up.copy(K1[xe]),G.lookAt(dh),G.updateMatrixWorld(),ne.makeTranslation(-_a.x,-_a.y,-_a.z),Ou.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Ou,G.coordinateSystem,G.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)i.setRenderTarget(j.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(j.map),i.clear());let G=j.getViewport(xe);a.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),Z.viewport(a)}n=j.getFrustum(xe),M(g,w,W,N,$,this.type)}j.isPointLightShadow!==!0&&this.type===ur&&S(j,w),j.needsUpdate=!1}x=this.type,m.needsUpdate=!1,i.setRenderTarget(B,I,L)};function S(T,g){let w=e.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new Fn(s.x,s.y,{format:is,type:ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,w,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,w,p,y,null)}function A(T,g,w,B){let I=null,L=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)I=L;else if(I=w.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let Z=I.uuid,K=g.uuid,F=c[Z];F===void 0&&(F={},c[Z]=F);let X=F[K];X===void 0&&(X=I.clone(),F[K]=X,g.addEventListener("dispose",C)),I=X}if(I.visible=g.visible,I.wireframe=g.wireframe,B===ur?I.side=g.shadowSide!==null?g.shadowSide:g.side:I.side=g.shadowSide!==null?g.shadowSide:u[g.side],I.alphaMap=g.alphaMap,I.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,I.map=g.map,I.clipShadows=g.clipShadows,I.clippingPlanes=g.clippingPlanes,I.clipIntersection=g.clipIntersection,I.displacementMap=g.displacementMap,I.displacementScale=g.displacementScale,I.displacementBias=g.displacementBias,I.wireframeLinewidth=g.wireframeLinewidth,I.linewidth=g.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let Z=i.properties.get(I);Z.light=w}return I}function M(T,g,w,B,I,L){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ur)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);let F=e.update(T),X=T.material;if(Array.isArray(X)){let N=F.groups;for(let j=0,H=N.length;j<H;j++){let U=N[j],z=X[U.materialIndex];if(z&&z.visible){let $=A(T,z,B,L);T.onBeforeShadow(i,T,g,w,F,$,U),i.renderBufferDirect(w,null,F,$,T,U),T.onAfterShadow(i,T,g,w,F,$,U)}}}else if(X.visible){let N=A(T,X,B,L);T.onBeforeShadow(i,T,g,w,F,N,null),i.renderBufferDirect(w,null,F,N,T,null),T.onAfterShadow(i,T,g,w,F,N,null)}}let K=T.children;for(let F=0,X=K.length;F<X;F++)M(K[F],g,w,B,I,L)}function C(T){T.target.removeEventListener("dispose",C);for(let w in c){let B=c[w],I=T.target.uuid;I in B&&(B[I].dispose(),delete B[I])}}}function Q1(i,e){function t(){let k=!1,de=new Ot,ae=null,we=new Ot(0,0,0,0);return{setMask:function(Me){ae!==Me&&!k&&(i.colorMask(Me,Me,Me,Me),ae=Me)},setLocked:function(Me){k=Me},setClear:function(Me,Te,Le,Oe,Se){Se===!0&&(Me*=Oe,Te*=Oe,Le*=Oe),de.set(Me,Te,Le,Oe),we.equals(de)===!1&&(i.clearColor(Me,Te,Le,Oe),we.copy(de))},reset:function(){k=!1,ae=null,we.set(-1,0,0,0)}}}function n(){let k=!1,de=!1,ae=null,we=null,Me=null;return{setReversed:function(Te){if(de!==Te){let Le=e.get("EXT_clip_control");Te?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),de=Te;let Oe=Me;Me=null,this.setClear(Oe)}},getReversed:function(){return de},setTest:function(Te){Te?Ee(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(Te){ae!==Te&&!k&&(i.depthMask(Te),ae=Te)},setFunc:function(Te){if(de&&(Te=ou[Te]),we!==Te){switch(Te){case ro:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case lo:i.depthFunc(i.EQUAL);break;case co:i.depthFunc(i.GEQUAL);break;case ho:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Te}},setLocked:function(Te){k=Te},setClear:function(Te){Me!==Te&&(Me=Te,de&&(Te=1-Te),i.clearDepth(Te))},reset:function(){k=!1,ae=null,we=null,Me=null,de=!1}}}function s(){let k=!1,de=null,ae=null,we=null,Me=null,Te=null,Le=null,Oe=null,Se=null;return{setTest:function(Be){k||(Be?Ee(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(Be){de!==Be&&!k&&(i.stencilMask(Be),de=Be)},setFunc:function(Be,nt,Fe){(ae!==Be||we!==nt||Me!==Fe)&&(i.stencilFunc(Be,nt,Fe),ae=Be,we=nt,Me=Fe)},setOp:function(Be,nt,Fe){(Te!==Be||Le!==nt||Oe!==Fe)&&(i.stencilOp(Be,nt,Fe),Te=Be,Le=nt,Oe=Fe)},setLocked:function(Be){k=Be},setClear:function(Be){Se!==Be&&(i.clearStencil(Be),Se=Be)},reset:function(){k=!1,de=null,ae=null,we=null,Me=null,Te=null,Le=null,Oe=null,Se=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,d={},u={},f={},p=new WeakMap,_=[],y=null,m=!1,x=null,S=null,A=null,M=null,C=null,T=null,g=null,w=new tt(0,0,0),B=0,I=!1,L=null,Z=null,K=null,F=null,X=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,H=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),j=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),j=H>=2);let z=null,$={},xe=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),G=new Ot().fromArray(xe),ne=new Ot().fromArray(W);function me(k,de,ae,we){let Me=new Uint8Array(4),Te=i.createTexture();i.bindTexture(k,Te),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ae;Le++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(de+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Te}let ge={};ge[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(i.DEPTH_TEST),a.setFunc($s),Ue(!1),De(Ic),Ee(i.CULL_FACE),ye(Ms);function Ee(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function He(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function at(k,de){return f[k]!==de?(i.bindFramebuffer(k,de),f[k]=de,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=de),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=de),!0):!1}function ze(k,de){let ae=_,we=!1;if(k){ae=p.get(de),ae===void 0&&(ae=[],p.set(de,ae));let Me=k.textures;if(ae.length!==Me.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Le=Me.length;Te<Le;Te++)ae[Te]=i.COLOR_ATTACHMENT0+Te;ae.length=Me.length,we=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,we=!0);we&&i.drawBuffers(ae)}function Ye(k){return y!==k?(i.useProgram(k),y=k,!0):!1}let Qe={[Ss]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};Qe[Id]=i.MIN,Qe[Dd]=i.MAX;let pe={[Ld]:i.ZERO,[Nd]:i.ONE,[Fd]:i.SRC_COLOR,[Fc]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Bd]:i.DST_COLOR,[kd]:i.DST_ALPHA,[Ud]:i.ONE_MINUS_SRC_COLOR,[Uc]:i.ONE_MINUS_SRC_ALPHA,[Hd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Gd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(k,de,ae,we,Me,Te,Le,Oe,Se,Be){if(k===Ms){m===!0&&(He(i.BLEND),m=!1);return}if(m===!1&&(Ee(i.BLEND),m=!0),k!==Rd){if(k!==x||Be!==I){if((S!==Ss||C!==Ss)&&(i.blendEquation(i.FUNC_ADD),S=Ss,C=Ss),Be)switch(k){case fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.ONE,i.ONE);break;case Lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:rt("WebGLState: Invalid blending: ",k);break}else switch(k){case fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lc:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nc:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",k);break}A=null,M=null,T=null,g=null,w.set(0,0,0),B=0,x=k,I=Be}return}Me=Me||de,Te=Te||ae,Le=Le||we,(de!==S||Me!==C)&&(i.blendEquationSeparate(Qe[de],Qe[Me]),S=de,C=Me),(ae!==A||we!==M||Te!==T||Le!==g)&&(i.blendFuncSeparate(pe[ae],pe[we],pe[Te],pe[Le]),A=ae,M=we,T=Te,g=Le),(Oe.equals(w)===!1||Se!==B)&&(i.blendColor(Oe.r,Oe.g,Oe.b,Se),w.copy(Oe),B=Se),x=k,I=!1}function Ae(k,de){k.side===en?He(i.CULL_FACE):Ee(i.CULL_FACE);let ae=k.side===sn;de&&(ae=!ae),Ue(ae),k.blending===fr&&k.transparent===!1?ye(Ms):ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let we=k.stencilWrite;o.setTest(we),we&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ne(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(k){L!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),L=k)}function De(k){k!==Td?(Ee(i.CULL_FACE),k!==Z&&(k===Ic?i.cullFace(i.BACK):k===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),Z=k}function qe(k){k!==K&&(j&&i.lineWidth(k),K=k)}function Ne(k,de,ae){k?(Ee(i.POLYGON_OFFSET_FILL),(F!==de||X!==ae)&&(F=de,X=ae,a.getReversed()&&(de=-de,ae=-ae),i.polygonOffset(de,ae))):He(i.POLYGON_OFFSET_FILL)}function et(k){k?Ee(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function ht(k){k===void 0&&(k=i.TEXTURE0+N-1),z!==k&&(i.activeTexture(k),z=k)}function mt(k,de,ae){ae===void 0&&(z===null?ae=i.TEXTURE0+N-1:ae=z);let we=$[ae];we===void 0&&(we={type:void 0,texture:void 0},$[ae]=we),(we.type!==k||we.texture!==de)&&(z!==ae&&(i.activeTexture(ae),z=ae),i.bindTexture(k,de||ge[k]),we.type=k,we.texture=de)}function q(){let k=$[z];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Tt(){try{i.compressedTexImage2D(...arguments)}catch(k){rt("WebGLState:",k)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(k){rt("WebGLState:",k)}}function bt(){try{i.texSubImage2D(...arguments)}catch(k){rt("WebGLState:",k)}}function Pe(){try{i.texSubImage3D(...arguments)}catch(k){rt("WebGLState:",k)}}function It(){try{i.compressedTexSubImage2D(...arguments)}catch(k){rt("WebGLState:",k)}}function Je(){try{i.compressedTexSubImage3D(...arguments)}catch(k){rt("WebGLState:",k)}}function st(){try{i.texStorage2D(...arguments)}catch(k){rt("WebGLState:",k)}}function E(){try{i.texStorage3D(...arguments)}catch(k){rt("WebGLState:",k)}}function v(){try{i.texImage2D(...arguments)}catch(k){rt("WebGLState:",k)}}function O(){try{i.texImage3D(...arguments)}catch(k){rt("WebGLState:",k)}}function se(k){return u[k]!==void 0?u[k]:i.getParameter(k)}function le(k,de){u[k]!==de&&(i.pixelStorei(k,de),u[k]=de)}function ue(k){G.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),G.copy(k))}function _e(k){ne.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function Q(k,de){let ae=c.get(de);ae===void 0&&(ae=new WeakMap,c.set(de,ae));let we=ae.get(k);we===void 0&&(we=i.getUniformBlockIndex(de,k.name),i.uniformBlockBinding(de,we,we),ae.set(k,we))}function ie(k,de,ae){let Me=c.get(de).get(k);l[Me]!==ae&&(i.bindBufferBase(i.UNIFORM_BUFFER,Me,ae),l[Me]=ae)}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},z=null,$={},f={},l={},p=new WeakMap,_=[],y=null,m=!1,x=null,S=null,A=null,M=null,C=null,T=null,g=null,w=new tt(0,0,0),B=0,I=!1,L=null,Z=null,K=null,F=null,X=null,G.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ee,disable:He,bindFramebuffer:at,drawBuffers:ze,useProgram:Ye,setBlending:ye,setMaterial:Ae,setFlipSided:Ue,setCullFace:De,setLineWidth:qe,setPolygonOffset:Ne,setScissorTest:et,activeTexture:ht,bindTexture:mt,unbindTexture:q,compressedTexImage2D:Tt,compressedTexImage3D:ut,texImage2D:v,texImage3D:O,pixelStorei:le,getParameter:se,updateUBOMapping:Q,uniformBlockBinding:ie,texStorage2D:st,texStorage3D:E,texSubImage2D:bt,texSubImage3D:Pe,compressedTexSubImage2D:It,compressedTexSubImage3D:Je,scissor:ue,viewport:_e,reset:ve}}function e_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,d=new WeakMap,u=new Set,f,p=new WeakMap,_=new Set,y=new FinalizationRegistry(E=>_.delete(E)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,v){return m?new OffscreenCanvas(E,v):zr("canvas")}function S(E,v,O){let se=1,le=st(E);if((le.width>O||le.height>O)&&(se=O/Math.max(le.width,le.height)),se<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let ue=Math.floor(se*le.width),_e=Math.floor(se*le.height);f===void 0&&(f=x(ue,_e));let Q=v?x(ue,_e):f;return Q.width=ue,Q.height=_e,Q.getContext("2d").drawImage(E,0,0,ue,_e),it("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ue+"x"+_e+")."),Q}else return"data"in E&&it("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),E;return E}function A(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,v,O,se,le,ue=!1){if(E!==null){if(i[E]!==void 0)return i[E];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let _e;se&&(_e=e.get("EXT_texture_norm16"),_e||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8),O===i.UNSIGNED_SHORT&&_e&&(Q=_e.R16_EXT),O===i.SHORT&&_e&&(Q=_e.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8),O===i.UNSIGNED_SHORT&&_e&&(Q=_e.RG16_EXT),O===i.SHORT&&_e&&(Q=_e.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),O===i.UNSIGNED_INT&&(Q=i.RGB32UI),O===i.BYTE&&(Q=i.RGB8I),O===i.SHORT&&(Q=i.RGB16I),O===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),O===i.UNSIGNED_INT&&(Q=i.RGBA32UI),O===i.BYTE&&(Q=i.RGBA8I),O===i.SHORT&&(Q=i.RGBA16I),O===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&_e&&(Q=_e.RGB16_EXT),O===i.SHORT&&_e&&(Q=_e.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){let ie=ue?Hr:yt.getTransfer(le);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=ie===At?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&_e&&(Q=_e.RGBA16_EXT),O===i.SHORT&&_e&&(Q=_e.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(E,v){let O;return E?v===null||v===ni||v===ws?O=i.DEPTH24_STENCIL8:v===Vn?O=i.DEPTH32F_STENCIL8:v===mr&&(O=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ni||v===ws?O=i.DEPTH_COMPONENT24:v===Vn?O=i.DEPTH_COMPONENT32F:v===mr&&(O=i.DEPTH_COMPONENT16),O}function w(E,v){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==dn&&E.minFilter!==Sn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function B(E){let v=new WeakRef(E);n.get(E).__ref=v,_.add(v),y.register(E,v,v)}function I(E){let v=n.get(E).__ref;v!==void 0&&(_.delete(v),y.unregister(v))}function L(E){K(E.target)}function Z(E){F(E.target)}function K(E){E.removeEventListener("dispose",L),I(E),N(E),E.isVideoTexture&&d.delete(E),E.isHTMLTexture&&u.delete(E)}function F(E){E.removeEventListener("dispose",Z),I(E),H(E)}function X(){for(let E of _){let v=E.deref();v!==void 0&&(v.isRenderTarget===!0?F(v):K(v))}_.clear(),u.clear()}function N(E){let v=n.get(E);if(v.__webglInit===void 0)return;let O=E.source,se=p.get(O);if(se){let le=se[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&j(E),Object.keys(se).length===0&&p.delete(O)}n.remove(E)}function j(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let O=E.source,se=p.get(O);delete se[v.__cacheKey],a.memory.textures--}function H(E){let v=n.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();let O=E.depthTexture;if(O&&O.renderTarget===E&&K(O),E.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(v.__webglFramebuffer[le]))for(let ue=0;ue<v.__webglFramebuffer[le].length;ue++)i.deleteFramebuffer(v.__webglFramebuffer[le][ue]);else i.deleteFramebuffer(v.__webglFramebuffer[le]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[le])}else{if(Array.isArray(v.__webglFramebuffer))for(let le=0;le<v.__webglFramebuffer.length;le++)i.deleteFramebuffer(v.__webglFramebuffer[le]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let le=0;le<v.__webglColorRenderbuffer.length;le++)v.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[le]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let se=E.textures;for(let le=0,ue=se.length;le<ue;le++){let _e=n.get(se[le]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),a.memory.textures--),n.remove(se[le])}n.remove(E)}let U=0;function z(){U=0}function $(){return U}function xe(E){U=E}function W(){let E=U;return E>=s.maxTextures&&it("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,E}function G(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function ne(E,v){let O=n.get(E);if(E.isVideoTexture&&It(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){let se=E.image;if(se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(O,E,v);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function me(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Ae(O,E,v);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function ge(E,v){let O=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Ae(O,E,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function Ee(E,v){let O=n.get(E);if(E.version>0&&O.__version!==E.version){Ue(O,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let He={[Zi]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[fo]:i.MIRRORED_REPEAT},at={[dn]:i.NEAREST,[Zd]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},ze={[Jd]:i.NEVER,[Jc]:i.ALWAYS,[Qd]:i.LESS,[$c]:i.LEQUAL,[eu]:i.EQUAL,[Kc]:i.GEQUAL,[tu]:i.GREATER,[nu]:i.NOTEQUAL};function Ye(E,v){if(v.type===Vn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Sn||v.magFilter===Go||v.magFilter===ha||v.magFilter===Ni||v.minFilter===Sn||v.minFilter===Go||v.minFilter===ha||v.minFilter===Ni)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,He[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,He[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,He[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,at[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===dn||v.minFilter!==ha&&v.minFilter!==Ni||v.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Qe(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",L),B(v));let se=v.source,le=p.get(se);le===void 0&&(le={},p.set(se,le));let ue=G(v);if(ue!==E.__cacheKey){le[ue]===void 0&&(le[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),le[ue].usedTimes++;let _e=le[E.__cacheKey];_e!==void 0&&(le[E.__cacheKey].usedTimes--,_e.usedTimes===0&&j(v)),E.__cacheKey=ue,E.__webglTexture=le[ue].texture}return O}function pe(E,v,O){return Math.floor(Math.floor(E/O)/v)}function ye(E,v,O,se){let ue=E.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,se,v.data);else{ue.sort((k,de)=>k.start-de.start);let _e=0;for(let k=1;k<ue.length;k++){let de=ue[_e],ae=ue[k],we=de.start+de.count,Me=pe(ae.start,v.width,4),Te=pe(de.start,v.width,4);ae.start<=we+1&&Me===Te&&pe(ae.start+ae.count-1,v.width,4)===Me?de.count=Math.max(de.count,ae.start+ae.count-de.start):(++_e,ue[_e]=ae)}ue.length=_e+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let k=0,de=ue.length;k<de;k++){let ae=ue[k],we=Math.floor(ae.start/4),Me=Math.ceil(ae.count/4),Te=we%v.width,Le=Math.floor(we/v.width),Oe=Me,Se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(i.TEXTURE_2D,0,Te,Le,Oe,Se,O,se,v.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function Ae(E,v,O){let se=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=i.TEXTURE_3D);let le=Qe(E,v),ue=v.source;t.bindTexture(se,E.__webglTexture,i.TEXTURE0+O);let _e=n.get(ue);if(ue.version!==_e.__version||le===!0){if(t.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Se=yt.getPrimaries(yt.workingColorSpace),Be=v.colorSpace===Ui?null:yt.getPrimaries(v.colorSpace),nt=v.colorSpace===Ui||Se===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=S(v.image,!1,s.maxTextureSize);ie=Je(v,ie);let ve=r.convert(v.format,v.colorSpace),k=r.convert(v.type),de=T(v.internalFormat,ve,k,v.normalized,v.colorSpace,v.isVideoTexture);Ye(se,v);let ae,we=v.mipmaps,Me=v.isVideoTexture!==!0,Te=_e.__version===void 0||le===!0,Le=ue.dataReady,Oe=w(v,ie);if(v.isDepthTexture)de=g(v.format===Fi,v.type),Te&&(Me?t.texStorage2D(i.TEXTURE_2D,1,de,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,de,ie.width,ie.height,0,ve,k,null));else if(v.isDataTexture)if(we.length>0){Me&&Te&&t.texStorage2D(i.TEXTURE_2D,Oe,de,we[0].width,we[0].height);for(let Se=0,Be=we.length;Se<Be;Se++)ae=we[Se],Me?Le&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,ae.width,ae.height,ve,k,ae.data):t.texImage2D(i.TEXTURE_2D,Se,de,ae.width,ae.height,0,ve,k,ae.data);v.generateMipmaps=!1}else Me?(Te&&t.texStorage2D(i.TEXTURE_2D,Oe,de,ie.width,ie.height),Le&&ye(v,ie,ve,k)):t.texImage2D(i.TEXTURE_2D,0,de,ie.width,ie.height,0,ve,k,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Me&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,de,we[0].width,we[0].height,ie.depth);for(let Se=0,Be=we.length;Se<Be;Se++)if(ae=we[Se],v.format!==si)if(ve!==null)if(Me){if(Le)if(v.layerUpdates.size>0){let nt=ch(ae.width,ae.height,v.format,v.type);for(let Fe of v.layerUpdates){let xt=ae.data.subarray(Fe*nt/ae.data.BYTES_PER_ELEMENT,(Fe+1)*nt/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,Fe,ae.width,ae.height,1,ve,xt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,ae.width,ae.height,ie.depth,ve,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,de,ae.width,ae.height,ie.depth,0,ae.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,ae.width,ae.height,ie.depth,ve,k,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,de,ae.width,ae.height,ie.depth,0,ve,k,ae.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Me&&Te&&t.texStorage2D(i.TEXTURE_2D,Oe,de,we[0].width,we[0].height);for(let Se=0,Be=we.length;Se<Be;Se++)ae=we[Se],v.format!==si?ve!==null?Me?Le&&t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,ae.width,ae.height,ve,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,de,ae.width,ae.height,0,ae.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Le&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,ae.width,ae.height,ve,k,ae.data):t.texImage2D(i.TEXTURE_2D,Se,de,ae.width,ae.height,0,ve,k,ae.data)}else if(v.isDataArrayTexture)if(Me){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,de,ie.width,ie.height,ie.depth),Le)if(v.layerUpdates.size>0){let Se=ch(ie.width,ie.height,v.format,v.type);for(let Be of v.layerUpdates){let nt=ie.data.subarray(Be*Se/ie.data.BYTES_PER_ELEMENT,(Be+1)*Se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Be,ie.width,ie.height,1,ve,k,nt)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,k,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,ie.width,ie.height,ie.depth,0,ve,k,ie.data);else if(v.isData3DTexture)Me?(Te&&t.texStorage3D(i.TEXTURE_3D,Oe,de,ie.width,ie.height,ie.depth),Le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,k,ie.data)):t.texImage3D(i.TEXTURE_3D,0,de,ie.width,ie.height,ie.depth,0,ve,k,ie.data);else if(v.isFramebufferTexture){if(Te)if(Me)t.texStorage2D(i.TEXTURE_2D,Oe,de,ie.width,ie.height);else{let Se=ie.width,Be=ie.height;for(let nt=0;nt<Oe;nt++)t.texImage2D(i.TEXTURE_2D,nt,de,Se,Be,0,ve,k,null),Se>>=1,Be>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Se=i.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),ie.parentNode!==Se){Se.appendChild(ie),u.add(v),Se.onpaint=Be=>{let nt=Be.changedElements;for(let Fe of u)nt.includes(Fe.image)&&(Fe.needsUpdate=!0)},Se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let nt=i.RGBA,Fe=i.RGBA,xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,nt,Fe,xt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(we.length>0){if(Me&&Te){let Se=st(we[0]);t.texStorage2D(i.TEXTURE_2D,Oe,de,Se.width,Se.height)}for(let Se=0,Be=we.length;Se<Be;Se++)ae=we[Se],Me?Le&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,ve,k,ae):t.texImage2D(i.TEXTURE_2D,Se,de,ve,k,ae);v.generateMipmaps=!1}else if(Me){if(Te){let Se=st(ie);t.texStorage2D(i.TEXTURE_2D,Oe,de,Se.width,Se.height)}Le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,k,ie)}else t.texImage2D(i.TEXTURE_2D,0,de,ve,k,ie);A(v)&&v.mipmapsAutoUpdate===!0&&M(se),_e.__version=ue.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ue(E,v,O){if(v.image.length!==6)return;let se=Qe(E,v),le=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);let ue=n.get(le);if(le.version!==ue.__version||se===!0){t.activeTexture(i.TEXTURE0+O);let _e=yt.getPrimaries(yt.workingColorSpace),Q=v.colorSpace===Ui?null:yt.getPrimaries(v.colorSpace),ie=v.colorSpace===Ui||_e===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ve=v.isCompressedTexture||v.image[0].isCompressedTexture,k=v.image[0]&&v.image[0].isDataTexture,de=[];for(let Fe=0;Fe<6;Fe++)!ve&&!k?de[Fe]=S(v.image[Fe],!0,s.maxCubemapSize):de[Fe]=k?v.image[Fe].image:v.image[Fe],de[Fe]=Je(v,de[Fe]);let ae=de[0],we=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),Te=T(v.internalFormat,we,Me,v.normalized,v.colorSpace),Le=v.isVideoTexture!==!0,Oe=ue.__version===void 0||se===!0,Se=le.dataReady,Be=w(v,ae);Ye(i.TEXTURE_CUBE_MAP,v);let nt;if(v.isDepthTexture){if(Te=g(v.format===Fi,v.type),Oe)if(Le)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Te,ae.width,ae.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Te,ae.width,ae.height,0,we,Me,null)}else if(ve){Le&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,Te,ae.width,ae.height);for(let Fe=0;Fe<6;Fe++){nt=de[Fe].mipmaps;for(let xt=0;xt<nt.length;xt++){let kt=nt[xt];v.format!==si?we!==null?Le?Se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,xt,0,0,kt.width,kt.height,we,kt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,xt,Te,kt.width,kt.height,0,kt.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,xt,0,0,kt.width,kt.height,we,Me,kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,xt,Te,kt.width,kt.height,0,we,Me,kt.data)}}}else{if(nt=v.mipmaps,Le&&Oe){nt.length>0&&Be++;let Fe=st(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,Te,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(k){Le?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,de[Fe].width,de[Fe].height,we,Me,de[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Te,de[Fe].width,de[Fe].height,0,we,Me,de[Fe].data);for(let xt=0;xt<nt.length;xt++){let ln=nt[xt].image[Fe].image;Le?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,xt+1,0,0,ln.width,ln.height,we,Me,ln.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,xt+1,Te,ln.width,ln.height,0,we,Me,ln.data)}}else{Le?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,we,Me,de[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Te,we,Me,de[Fe]);for(let xt=0;xt<nt.length;xt++){let kt=nt[xt];Le?Se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,xt+1,0,0,we,Me,kt.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,xt+1,Te,we,Me,kt.image[Fe])}}}A(v)&&v.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),ue.__version=le.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function De(E,v,O,se,le,ue){let _e=r.convert(O.format,O.colorSpace),Q=r.convert(O.type),ie=T(O.internalFormat,_e,Q,O.normalized,O.colorSpace),ve=n.get(v),k=n.get(O);if(k.__renderTarget=v,!ve.__hasExternalTextures){let de=Math.max(1,v.width>>ue),ae=Math.max(1,v.height>>ue);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,ue,ie,de,ae,v.depth,0,_e,Q,null):t.texImage2D(le,ue,ie,de,ae,0,_e,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,le,k.__webglTexture,0,bt(v)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,le,k.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let se=v.depthTexture,le=se&&se.isDepthTexture?se.type:null,ue=g(v.stencilBuffer,le),_e=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(v),ue,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(v),ue,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ue,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,E)}else{let se=v.textures;for(let le=0;le<se.length;le++){let ue=se[le],_e=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),ie=T(ue.internalFormat,_e,Q,ue.normalized,ue.colorSpace);Pe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(v),ie,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(E,v,O){let se=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(v.depthTexture);le.__renderTarget=v;let ue=se?v.depthTexture.image[0]:v.depthTexture.image;(!le.__webglTexture||ue.width!==v.width||ue.height!==v.height)&&(ue.width=v.width,ue.height=v.height,v.depthTexture.needsUpdate=!0),se?Ee(v.depthTexture,0):ne(v.depthTexture,0);let _e=le.__webglTexture,Q=bt(v),ie=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ve=v.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pi)Pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ie,_e,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ie,_e,0);else if(v.depthTexture.format===Fi)Pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ie,_e,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ie,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(E){let v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let se=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),se){let le=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,se.removeEventListener("dispose",le)};se.addEventListener("dispose",le),v.__depthDisposeCallback=le}v.__boundDepthTexture=se}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let se=0;se<6;se++)Ne(v.__webglFramebuffer[se],E,se);else E.texture.mipmaps.length>0?Ne(v.__webglFramebuffer[0],E,0):Ne(v.__webglFramebuffer,E,0);else if(O){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]===void 0)v.__webglDepthbuffer[se]=i.createRenderbuffer(),qe(v.__webglDepthbuffer[se],E,!1);else{let le=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ue)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),qe(v.__webglDepthbuffer,E,!1);else{let le=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,ue)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(E,v,O){let se=n.get(E);v!==void 0&&De(se.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&et(E)}function mt(E){let v=E.texture,O=n.get(E),se=n.get(v);E.addEventListener("dispose",Z),B(E);let le=E.textures,ue=E.isWebGLCubeRenderTarget===!0,_e=le.length>1;if(_e||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=v.version,a.memory.textures++),ue){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let ie=0;ie<v.mipmaps.length;ie++)O.__webglFramebuffer[Q][ie]=i.createFramebuffer()}else O.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)O.__webglFramebuffer[Q]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_e)for(let Q=0,ie=le.length;Q<ie;Q++){let ve=n.get(le[Q]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Pe(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Q=0;Q<le.length;Q++){let ie=le[Q];O.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);let ve=r.convert(ie.format,ie.colorSpace),k=r.convert(ie.type),de=T(ie.internalFormat,ve,k,ie.normalized,ie.colorSpace,E.isXRRenderTarget===!0),ae=bt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,O.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)De(O.__webglFramebuffer[Q][ie],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ie);else De(O.__webglFramebuffer[Q],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);A(v)?M(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let Q=0,ie=le.length;Q<ie;Q++){let ve=le[Q],k=n.get(ve),de=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(de=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,k.__webglTexture),Ye(de,ve),De(O.__webglFramebuffer,E,ve,i.COLOR_ATTACHMENT0+Q,de,0),A(ve)&&M(de)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,se.__webglTexture),Ye(Q,v),v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)De(O.__webglFramebuffer[ie],E,v,i.COLOR_ATTACHMENT0,Q,ie);else De(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,Q,0);A(v)?M(Q):v.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&et(E)}function q(E){let v=E.textures;for(let O=0,se=v.length;O<se;O++){let le=v[O];if(A(le)&&le.mipmapsAutoUpdate===!0){let ue=C(E),_e=n.get(le).__webglTexture;t.bindTexture(ue,_e),M(ue),t.unbindTexture()}}}let Tt=[];function ut(E){if(E.samples>0){if(Pe(E)===!1){let v=E.textures,O=E.width,se=E.height,le=i.COLOR_BUFFER_BIT,ue=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(E),Q=v.length>1;if(Q)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);let k=n.get(v[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,O,se,0,0,O,se,le,i.NEAREST),l===!0&&(Tt.length=0,Tt.push(i.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Tt.push(ue),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ve]);let k=n.get(v[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function bt(E){return Math.min(s.maxSamples,E.samples)}function Pe(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function It(E){let v=a.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function Je(E,v){let O=E.colorSpace,se=E.format,le=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Br&&O!==Ui&&(yt.getTransfer(O)===At?(se!==si||le!==Cn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",O)),v}function st(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=$,this.setTextureUnits=xe,this.setTexture2D=ne,this.setTexture2DArray=me,this.setTexture3D=ge,this.setTextureCube=Ee,this.rebindTextures=ht,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=q,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Pe,this.dispose=X}function t_(i,e){function t(n,s=Ui){let r,a=yt.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===mr)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===jc)return i.RGB;if(n===si)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===Yo)return i.RED_INTEGER;if(n===is)return i.RG;if(n===Zo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===da||n===ua||n===fa||n===pa)if(a===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Ko||n===Jo||n===Qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===tl||n===nl||n===il||n===sl||n===ma||n===rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===el||n===tl)return a===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===il)return r.COMPRESSED_R11_EAC;if(n===sl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ma)return r.COMPRESSED_RG11_EAC;if(n===rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===al||n===ol||n===ll||n===cl||n===hl||n===dl||n===ul||n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yl)return a===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bl||n===vl||n===Ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bl)return a===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sl||n===El||n===ga||n===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new $r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fi({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends Jn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,p=null,_=null,y=typeof XRWebGLBinding<"u",m=new _h,x={},S=t.getContextAttributes(),A=null,M=null,C=[],T=[],g=new be,w=null,B=null,I=new Vt;I.viewport=new Ot;let L=new Vt;L.viewport=new Ot;let Z=[I,L],K=new ko,F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=C[G];return ne===void 0&&(ne=new nr,C[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=C[G];return ne===void 0&&(ne=new nr,C[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=C[G];return ne===void 0&&(ne=new nr,C[G]=ne),ne.getHandSpace()};function N(G){let ne=T.indexOf(G.inputSource);if(ne===-1)return;let me=C[ne];me!==void 0&&(me.update(G.inputSource,G.frame,c||a),me.dispatchEvent({type:G.type,data:G.inputSource}))}function j(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",H);for(let G=0;G<C.length;G++){let ne=T[G];ne!==null&&(T[G]=null,C[G].disconnect(ne))}F=null,X=null,m.reset();for(let G in x)delete x[G];if(e.setRenderTarget(A),p=null,f=null,u=null,s=null,M=null,W.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(g.width,g.height,!1),B!==null){let G=B.camera;G.fov=B.fov,G.zoom=B.zoom,G.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",j),s.addEventListener("inputsourceschange",H),S.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(g),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ge=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=S.stencil?Fi:Pi,ge=S.stencil?ws:ni);let He={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Fn(f.textureWidth,f.textureHeight,{format:si,type:Cn,depthTexture:new Di(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Fn(p.framebufferWidth,p.framebufferHeight,{format:si,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),W.setContext(s),W.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(G){for(let ne=0;ne<G.removed.length;ne++){let me=G.removed[ne],ge=T.indexOf(me);ge>=0&&(T[ge]=null,C[ge].disconnect(me))}for(let ne=0;ne<G.added.length;ne++){let me=G.added[ne],ge=T.indexOf(me);if(ge===-1){for(let He=0;He<C.length;He++)if(He>=T.length){T.push(me),ge=He;break}else if(T[He]===null){T[He]=me,ge=He;break}if(ge===-1)break}let Ee=C[ge];Ee&&Ee.connect(me)}}function U(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let ne=G.near,me=G.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(me=m.depthFar)),K.near=L.near=I.near=ne,K.far=L.far=I.far=me,(F!==K.near||X!==K.far)&&(s.updateRenderState({depthNear:K.near,depthFar:K.far}),F=K.near,X=K.far),K.layers.mask=G.layers.mask|6,I.layers.mask=K.layers.mask&-5,L.layers.mask=K.layers.mask&-3;let ge=G.parent,Ee=K.cameras;U(K,ge);for(let He=0;He<Ee.length;He++)U(Ee[He],ge);K.projectionMatrix.copy(I.projectionMatrix),K.projectionMatrixInverse.copy(I.projectionMatrixInverse),B===null&&G.isPerspectiveCamera&&(B={camera:G,fov:G.fov,zoom:G.zoom}),z(G,K,ge)};function z(G,ne,me){me===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(me.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(K)},this.getCameraTexture=function(G){return x[G]};let $=null;function xe(G,ne){if(d=ne.getViewerPose(c||a),_=ne,d!==null){let me=d.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let ge=!1;me.length!==K.cameras.length&&(K.cameras.length=0,ge=!0);for(let ze=0;ze<me.length;ze++){let Ye=me[ze],Qe=null;if(p!==null)Qe=p.getViewport(Ye);else{let ye=u.getViewSubImage(f,Ye);Qe=ye.viewport,ze===0&&(e.setRenderTargetTextures(M,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(M))}let pe=Z[ze];pe===void 0&&(pe=new Vt,pe.layers.enable(ze),pe.viewport=new Ot,Z[ze]=pe),pe.matrix.fromArray(Ye.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Ye.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),ze===0&&(K.matrix.copy(pe.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ge===!0&&K.cameras.push(pe)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let ze=u.getDepthInformation(me[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,s.renderState)}if(Ee&&Ee.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let ze=0;ze<me.length;ze++){let Ye=me[ze].camera;if(Ye){let Qe=x[Ye];Qe||(Qe=new $r,x[Ye]=Qe);let pe=u.getCameraImage(Ye);Qe.sourceTexture=pe}}}}for(let me=0;me<C.length;me++){let ge=T[me],Ee=C[me];ge!==null&&Ee!==void 0&&Ee.update(ge,ne,c||a)}$&&$(G,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}let W=new Bu;W.setAnimationLoop(xe),this.setAnimationLoop=function(G){$=G},this.dispose=function(){}}},s_=new Rt,ju=new lt;ju.set(-1,0,0,0,1,0,0,0,1);function r_(i,e){function t(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,ah(i)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function s(m,x,S,A,M){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?r(m,x):x.isMeshLambertMaterial?(r(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(r(m,x),u(m,x)):x.isMeshPhongMaterial?(r(m,x),d(m,x),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(r(m,x),f(m,x),x.isMeshPhysicalMaterial&&p(m,x,M)):x.isMeshMatcapMaterial?(r(m,x),_(m,x)):x.isMeshDepthMaterial?r(m,x):x.isMeshDistanceMaterial?(r(m,x),y(m,x)):x.isMeshNormalMaterial?r(m,x):x.isLineBasicMaterial?(a(m,x),x.isLineDashedMaterial&&o(m,x)):x.isPointsMaterial?l(m,x,S,A):x.isSpriteMaterial?c(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function r(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,t(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===sn&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,t(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===sn&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,t(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,t(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let S=e.get(x),A=S.envMap,M=S.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ju),m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,m.aoMapTransform))}function a(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform))}function o(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function l(m,x,S,A){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*S,m.scale.value=A*.5,x.map&&(m.map.value=x.map,t(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function c(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,t(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,t(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function d(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function f(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function p(m,x,S){m.ior.value=x.ior,x.diffuseRoughness>0&&(m.diffuseRoughness.value=x.diffuseRoughness,x.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=x.diffuseRoughnessMap,t(x.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===sn&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.retroreflectivity>0&&(m.retroreflectivity.value=x.retroreflectivity),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=x.iridescenceThicknessMaximum,x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,x){x.matcap&&(m.matcap.value=x.matcap)}function y(m,x){let S=e.get(x).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a_(i,e,t,n){let s={},r={};function a(S,A){let M=A.program;n.uniformBlockBinding(S,M,s[S.id])}function o(S,A){let M=s[S.id];M===void 0&&(_(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",m));let C=A.program;n.updateUBOMapping(S,C);let T=e.render.frame;r[S.id]!==T&&(c(S),r[S.id]=T)}function l(S){let A=i.createBuffer(),M=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,M,C),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(S){let A=s[S.id],M=S.uniforms,C=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,g=M.length;T<g;T++){let w=M[T];if(Array.isArray(w))for(let B=0,I=w.length;B<I;B++)d(w[B],T,B,C);else d(w,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,A,M,C){if(f(S,A,M,C)===!0){let T=S.__offset,g=S.value;if(Array.isArray(g)){let w=0;for(let B=0;B<g.length;B++){let I=g[B],L=y(I,!0);u(I,S.__data,w),w+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function u(S,A,M){typeof S=="number"||typeof S=="boolean"?A[M]=S:S.isMatrix3?(A[M]=S.elements[0],A[M+1]=S.elements[1],A[M+2]=S.elements[2],A[M+3]=0,A[M+4]=S.elements[3],A[M+5]=S.elements[4],A[M+6]=S.elements[5],A[M+7]=0,A[M+8]=S.elements[6],A[M+9]=S.elements[7],A[M+10]=S.elements[8],A[M+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-M),M):S.toArray(A,M)}function f(S,A,M,C){let T=S.value,g=A+"_"+M;if(Array.isArray(T)){C[g]===void 0&&(C[g]=[]);let w=C[g],B=!1;for(let I=0;I<T.length;I++)p(T[I],w,I)===!0&&(B=!0);return B}return p(T,C,g)}function p(S,A,M){if(A[M]===void 0)return typeof S=="number"||typeof S=="boolean"?A[M]=S:ArrayBuffer.isView(S)?A[M]=S.slice():A[M]=S.clone(),!0;{let C=A[M];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return A[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function _(S){let A=S.uniforms,M=0,C=16;for(let g=0,w=A.length;g<w;g++){let B=Array.isArray(A[g])?A[g]:[A[g]];for(let I=0,L=B.length;I<L;I++){let Z=B[I],K=Array.isArray(Z.value)?Z.value:[Z.value],F=Array.isArray(A[g])||Array.isArray(Z.value),X=M;for(let j=0,H=K.length;j<H;j++){let U=K[j],z=y(U,F),$=M%C,xe=$%z.boundary,W=$+xe;M+=xe,W!==0&&C-W<z.storage&&(M+=C-W),j===0&&(X=M),M+=z.storage}let N=Z.type==="int"?Int32Array:Z.type==="uint"?Uint32Array:Float32Array;Z.__data=new N((M-X)/Float32Array.BYTES_PER_ELEMENT),Z.__offset=X}}let T=M%C;return T>0&&(M+=C-T),S.__size=M,S.__cache={},this}function y(S,A){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):it("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(S){let A=S.target;A.removeEventListener("dispose",m),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function x(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:x}}var o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function l_(){return gi===null&&(gi=new Xr(o_,16,16,is,ii),gi.name="DFG_LUT",gi.minFilter=Sn,gi.magFilter=Sn,gi.wrapS=Hn,gi.wrapT=Hn,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var _i=class{constructor(e={}){let{canvas:t=su(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Cn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let y=p,m=new Set([jo,Zo,Yo]),x=new Set([Cn,ni,mr,ws,Wo,Xo]),S=new Uint32Array(4),A=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},C=null,T=null,g=[],w=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,Z=null,K=null,F=null,X=null;this._outputColorSpace=tn;let N=0,j=0,H=null,U=-1,z=null,$=new Ot,xe=new Ot,W=null,G=new tt(0),ne=0,me=t.width,ge=t.height,Ee=1,He=null,at=null,ze=new Ot(0,0,me,ge),Ye=new Ot(0,0,me,ge),Qe=!1,pe=new $i,ye=new _o,Ae=!1,Ue=!1,De=new Rt,qe=new Y,Ne=new Ot,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function mt(){return H===null?Ee:1}let q=n;function Tt(R,V){return t.getContext(R,V)}let ut,bt,Pe,It,Je,st,E,v,O,se,le,ue,_e,Q,ie,ve,k,de,ae,we,Me,Te,Le;try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),q===null){let V="webgl2";if(q=Tt(V,R),q===null)throw Tt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(R){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),rt("WebGLRenderer: "+R.message),R}function Oe(){ut=new yx(q),ut.init(),Me=new t_(q,ut),bt=new lx(q,ut,e,Me),Pe=new Q1(q,ut),bt.reversedDepthBuffer&&f&&Pe.buffers.depth.setReversed(!0),K=q.createFramebuffer(),F=q.createFramebuffer(),X=q.createFramebuffer(),It=new Mx(q),Je=new B1,st=new e_(q,ut,Pe,Je,bt,Me,It),E=new _x(I),v=new Em(q),Te=new ax(q,v),O=new bx(q,v,It,Te),se=new Ex(q,O,v,Te,It),de=new Sx(q,bt,st),ie=new cx(Je),le=new O1(I,E,ut,bt,Te,ie),ue=new r_(I,Je),_e=new z1,Q=new Y1(ut),k=new rx(I,E,Pe,se,_,l),ve=new J1(I,se,bt),Le=new a_(q,It,bt,Pe),ae=new ox(q,ut,It),we=new vx(q,ut,It),It.programs=le.programs,I.capabilities=bt,I.extensions=ut,I.properties=Je,I.renderLists=_e,I.shadowMap=ve,I.state=Pe,I.info=It}y!==Cn&&(B=new Tx(y,t.width,t.height,o,s,r));let Se=new yh(I,q);this.xr=Se,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let R=ut.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ut.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(R){R!==void 0&&(Ee=R,this.setSize(me,ge,!1))},this.getSize=function(R){return R.set(me,ge)},this.setSize=function(R,V,re=!0){if(Se.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}me=R,ge=V,t.width=Math.floor(R*Ee),t.height=Math.floor(V*Ee),re===!0&&(t.style.width=R+"px",t.style.height=V+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(me*Ee,ge*Ee).floor()},this.setDrawingBufferSize=function(R,V,re){me=R,ge=V,Ee=re,t.width=Math.floor(R*re),t.height=Math.floor(V*re),this.setViewport(0,0,R,V)},this.setEffects=function(R){if(y===Cn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let V=0;V<R.length;V++)if(R[V].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy($)},this.getViewport=function(R){return R.copy(ze)},this.setViewport=function(R,V,re,J){R.isVector4?ze.set(R.x,R.y,R.z,R.w):ze.set(R,V,re,J),Pe.viewport($.copy(ze).multiplyScalar(mt()).round())},this.getScissor=function(R){return R.copy(Ye)},this.setScissor=function(R,V,re,J){R.isVector4?Ye.set(R.x,R.y,R.z,R.w):Ye.set(R,V,re,J),Pe.scissor(xe.copy(Ye).multiplyScalar(mt()).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(R){Pe.setScissorTest(Qe=R)},this.setOpaqueSort=function(R){He=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,re=!0){let J=0;if(R){let te=!1;if(H!==null){let Re=H.texture.format;te=m.has(Re)}if(te){let Re=H.texture.type,Ge=x.has(Re),Ce=k.getClearColor(),ke=k.getClearAlpha(),je=Ce.r,ot=Ce.g,ft=Ce.b;Ge?(S[0]=je,S[1]=ot,S[2]=ft,S[3]=ke,q.clearBufferuiv(q.COLOR,0,S)):(A[0]=je,A[1]=ot,A[2]=ft,A[3]=ke,q.clearBufferiv(q.COLOR,0,A))}else J|=q.COLOR_BUFFER_BIT}V&&(J|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Z=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),k.dispose(),_e.dispose(),Q.dispose(),st.dispose(),Je.dispose(),E.dispose(),se.dispose(),O.dispose(),Te.dispose(),Le.dispose(),le.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Hi),Se.removeEventListener("sessionend",Er),Yn.stop()};function Be(R){R.preventDefault(),eh("WebGLRenderer: Context Lost."),L=!0}function nt(){eh("WebGLRenderer: Context Restored."),L=!1;let R=It.autoReset,V=ve.enabled,re=ve.autoUpdate,J=ve.needsUpdate,te=ve.type;Oe(),It.autoReset=R,ve.enabled=V,ve.autoUpdate=re,ve.needsUpdate=J,ve.type=te}function Fe(R){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){let V=R.target;V.removeEventListener("dispose",xt),kt(V)}function kt(R){ln(R),Je.remove(R)}function ln(R){let V=Je.get(R).programs;V!==void 0&&(V.forEach(function(re){le.releaseProgram(re)}),R.isShaderMaterial&&le.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,re,J,te,Re){V===null&&(V=et);let Ge=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ce=Pa(R,V,re,J,te);Pe.setMaterial(J,Ge);let ke=re.index,je=1;if(J.wireframe===!0){if(ke=O.getWireframeAttribute(re),ke===void 0)return;je=2}let ot=re.drawRange,ft=re.attributes.position,Ze=ot.start*je,_t=(ot.start+ot.count)*je;Re!==null&&(Ze=Math.max(Ze,Re.start*je),_t=Math.min(_t,(Re.start+Re.count)*je)),ke!==null?(Ze=Math.max(Ze,0),_t=Math.min(_t,ke.count)):ft!=null&&(Ze=Math.max(Ze,0),_t=Math.min(_t,ft.count));let Jt=_t-Ze;if(Jt<0||Jt===1/0)return;Te.setup(te,J,Ce,re,ke);let Dt,Pt=ae;if(ke!==null&&(Dt=v.get(ke),Pt=we,Pt.setIndex(Dt)),te.isMesh)J.wireframe===!0?(Pe.setLineWidth(J.wireframeLinewidth*mt()),Pt.setMode(q.LINES)):Pt.setMode(q.TRIANGLES);else if(te.isLine){let gn=J.linewidth;gn===void 0&&(gn=1),Pe.setLineWidth(gn*mt()),te.isLineSegments?Pt.setMode(q.LINES):te.isLineLoop?Pt.setMode(q.LINE_LOOP):Pt.setMode(q.LINE_STRIP)}else te.isPoints?Pt.setMode(q.POINTS):te.isSprite&&Pt.setMode(q.TRIANGLES);if(te.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Pt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let gn=te._multiDrawStarts,$e=te._multiDrawCounts,Mn=te._multiDrawCount,St=ke?v.get(ke).bytesPerElement:1,hs=Je.get(J).currentProgram.getUniforms();for(let xn=0;xn<Mn;xn++)hs.setValue(q,"_gl_DrawID",xn),Pt.render(gn[xn]/St,$e[xn])}else if(te.isInstancedMesh)Pt.renderInstances(Ze,Jt,te.count);else if(re.isInstancedBufferGeometry){let gn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,$e=Math.min(re.instanceCount,gn);Pt.renderInstances(Ze,Jt,$e)}else Pt.render(Ze,Jt)};function bi(R,V,re,J){Z!==null&&R.isNodeMaterial&&Z.setObject(J,R),Ae===!0&&ie.setState(R,re,!1),R.transparent===!0&&R.side===en&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,vi(R,V,J),R.side=pi,R.needsUpdate=!0,vi(R,V,J),R.side=en):vi(R,V,J)}this.compile=function(R,V,re=null){re===null&&(re=R),Z!==null&&Z.renderStart(R,V,re),T=Q.get(re),T.init(V),w.push(T),re.traverseVisible(function(te){te.isLight&&te.layers.test(V.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),R!==re&&R.traverseVisible(function(te){te.isLight&&te.layers.test(V.layers)&&(T.pushLight(te),te.castShadow&&T.pushShadow(te))}),T.setupLights(),Z!==null&&Z.updateLights(T.state.lightsArray),Ue=this.localClippingEnabled,Ae=ie.init(this.clippingPlanes,Ue),Ae===!0&&ie.setGlobalState(this.clippingPlanes,V),Z!==null&&ve.render(T.state.shadowsArray,re,V);let J=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Re=te.material;if(Re)if(Array.isArray(Re))for(let Ge=0;Ge<Re.length;Ge++){let Ce=Re[Ge];bi(Ce,re,V,te),J.add(Ce)}else bi(Re,re,V,te),J.add(Re)}),T=w.pop(),Z!==null&&Z.renderEnd(),J},this.compileAsync=function(R,V,re=null){let J=this.compile(R,V,re);return new Promise(te=>{function Re(){if(J.forEach(function(Ge){let ke=Je.get(Ge).currentProgram;(ke===void 0||ke.isReady())&&J.delete(Ge)}),J.size===0){te(R);return}setTimeout(Re,10)}ut.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let qn=null;function Xl(R){qn&&qn(R)}function Hi(){Yn.stop()}function Er(){Yn.start()}let Yn=new Bu;Yn.setAnimationLoop(Xl),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(R){qn=R,Se.setAnimationLoop(R),R===null?Yn.stop():Yn.start()},Se.addEventListener("sessionstart",Hi),Se.addEventListener("sessionend",Er),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;Z!==null&&Z.renderStart(R,V);let re=Se.enabled===!0&&Se.isPresenting===!0,J=B!==null&&(H===null||re)&&B.begin(I,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(V),V=Se.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,V,H),T=Q.get(R,w.length),T.init(V),T.state.textureUnits=st.getTextureUnits(),w.push(T),De.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?ye.setFromArrayCamera(V):pe.setFromProjectionMatrix(De,zn,V.reversedDepth),Ue=this.localClippingEnabled,Ae=ie.init(this.clippingPlanes,Ue),C=_e.get(R,g.length),C.init(),g.push(C),this.info.render.frame++,Se.enabled===!0&&Se.isPresenting===!0){let Ge=I.xr.getDepthSensingMesh();Ge!==null&&jt(Ge,V,-1/0,I.sortObjects)}jt(R,V,0,I.sortObjects),C.finish(),Z!==null&&Z.updateLights(T.state.lightsArray),I.sortObjects===!0&&C.sort(He,at),ht=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,ht&&k.addToRenderList(C,R),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&ie.beginShadows();let te=T.state.shadowsArray;if(ve.render(te,R,V),Ae===!0&&ie.endShadows(),(J&&B.hasRenderPass())===!1){let Ge=C.opaque,Ce=C.transmissive;if(T.setupLights(),V.isArrayCamera){let ke=V.cameras;if(Ce.length>0)for(let je=0,ot=ke.length;je<ot;je++){let ft=ke[je];$t(Ge,Ce,R,ft)}ht&&k.render(R);for(let je=0,ot=ke.length;je<ot;je++){let ft=ke[je];Lt(C,R,ft,ft.viewport)}}else Ce.length>0&&$t(Ge,Ce,R,V),ht&&k.render(R),Lt(C,R,V)}H!==null&&j===0&&(st.updateMultisampleRenderTarget(H),st.updateRenderTargetMipmap(H)),J&&B.end(I),R.isScene===!0&&R.onAfterRender(I,R,V),Te.resetDefaultState(),U=-1,z=null,w.pop(),w.length>0?(T=w[w.length-1],st.setTextureUnits(T.state.textureUnits),Ae===!0&&ie.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,Z!==null&&Z.renderEnd()};function jt(R,V,re,J){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){let Ge=V.isArrayCamera?ye:pe;if(!R.frustumCulled||R.intersectsFrustum(Ge)){J&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(De);let Ce=se.update(R),ke=R.material;ke.visible&&C.push(R,Ce,ke,re,Ne.z,null,V)}}else if(R.isMesh||R.isLine||R.isPoints){let Ge=V.isArrayCamera?ye:pe;if(!R.frustumCulled||R.intersectsFrustum(Ge)){let Ce=se.update(R),ke=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ne.copy(Ce.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(De)),Array.isArray(ke)){let je=Ce.groups;for(let ot=0,ft=je.length;ot<ft;ot++){let Ze=je[ot],_t=ke[Ze.materialIndex];_t&&_t.visible&&C.push(R,Ce,_t,re,Ne.z,Ze,V)}}else ke.visible&&C.push(R,Ce,ke,re,Ne.z,null,V)}}}let Re=R.children;for(let Ge=0,Ce=Re.length;Ge<Ce;Ge++)jt(Re[Ge],V,re,J)}function Lt(R,V,re,J){let{opaque:te,transmissive:Re,transparent:Ge}=R;T.setupLightsView(re),Ae===!0&&ie.setGlobalState(I.clippingPlanes,re),J&&Pe.viewport($.copy(J)),te.length>0&&Kt(te,V,re),Re.length>0&&Kt(Re,V,re),Ge.length>0&&Kt(Ge,V,re),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function $t(R,V,re,J){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[J.id]===void 0){let Ze=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[J.id]=new Fn(1,1,{generateMipmaps:!0,type:Ze?ii:Cn,minFilter:Ni,samples:Math.max(4,bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let Re=T.state.transmissionRenderTarget[J.id],Ge=J.viewport||$;Re.setSize(Ge.z*I.transmissionResolutionScale,Ge.w*I.transmissionResolutionScale);let Ce=I.getRenderTarget(),ke=I.getActiveCubeFace(),je=I.getActiveMipmapLevel();I.setRenderTarget(Re),I.getClearColor(G),ne=I.getClearAlpha(),ne<1&&I.setClearColor(16777215,.5),I.clear(),ht&&k.render(re);let ot=I.toneMapping;I.toneMapping=mi;let ft=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),T.setupLightsView(J),Ae===!0&&ie.setGlobalState(I.clippingPlanes,J),Kt(R,re,J),st.updateMultisampleRenderTarget(Re),st.updateRenderTargetMipmap(Re),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let _t=0,Jt=V.length;_t<Jt;_t++){let Dt=V[_t],{object:Pt,geometry:gn,material:$e,group:Mn}=Dt;if($e.side===en&&Pt.layers.test(J.layers)){let St=$e.side;$e.side=sn,$e.needsUpdate=!0,cs(Pt,re,J,gn,$e,Mn),$e.side=St,$e.needsUpdate=!0,Ze=!0}}Ze===!0&&(st.updateMultisampleRenderTarget(Re),st.updateRenderTargetMipmap(Re))}I.setRenderTarget(Ce,ke,je),I.setClearColor(G,ne),ft!==void 0&&(J.viewport=ft),I.toneMapping=ot}function Kt(R,V,re){let J=V.isScene===!0?V.overrideMaterial:null;for(let te=0,Re=R.length;te<Re;te++){let Ge=R[te],{object:Ce,geometry:ke,group:je}=Ge,ot=Ge.material;ot.allowOverride===!0&&J!==null&&(ot=J),Ce.layers.test(re.layers)&&cs(Ce,V,re,ke,ot,je)}}function cs(R,V,re,J,te,Re){Z!==null&&te.isNodeMaterial&&Z.setObject(R,te),R.onBeforeRender(I,V,re,J,te,Re),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(I,V,re,J,R,Re),te.transparent===!0&&te.side===en&&te.forceSinglePass===!1?(te.side=sn,te.needsUpdate=!0,I.renderBufferDirect(re,V,J,te,R,Re),te.side=pi,te.needsUpdate=!0,I.renderBufferDirect(re,V,J,te,R,Re),te.side=en):I.renderBufferDirect(re,V,J,te,R,Re),R.onAfterRender(I,V,re,J,te,Re)}function wr(R){let V=0;for(let re of R)re.texture!==null&&V++;return V}function vi(R,V,re){V.isScene!==!0&&(V=et);let J=Je.get(R),te=T.state.lights,Re=T.state.shadowsArray,Ge=te.state.version,Ce=le.getParameters(R,te.state,Re,V,re,T.state.lightProbeGridArray),ke=le.getProgramCacheKey(Ce),je=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?V.environment:null,J.fog=V.fog;let ot=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=E.get(R.envMap||J.environment,ot),J.envMapRotation=J.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",xt),je=new Map,J.programs=je,J.programVariants=new Map);let ft=je.get(ke);if(ft!==void 0){if(J.currentProgram===ft&&J.lightsStateVersion===Ge)return Ns(R,Ce),ft}else Ce.uniforms=le.getUniforms(R),Z!==null&&R.isNodeMaterial&&Z.build(R,re,Ce),R.onBeforeCompile(Ce,I),ft=le.acquireProgram(Ce,ke),je.set(ke,ft),J.uniforms=Ce.uniforms;let Ze=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=ie.uniform),Ns(R,Ce),J.needsLights=Yl(R),J.lightsStateVersion=Ge,J.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.sunLights.value=te.state.sun,Ze.sunLightShadows.value=te.state.sunShadow,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.sunShadowMatrix.value=te.state.sunShadowMatrix,Ze.sunShadowCascade.value=te.state.sunShadowCascade,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),J.numLightProbeGrids=wr(T.state.lightProbeGridArray),J.currentProgram=ft,J.uniformsList=null,ft}function Ca(R,V,re,J,te){let Re=Je.get(R),Ge=Re.currentProgram.id+","+J+","+te,Ce=Re.programVariants.get(Ge);return Ce===void 0?(Ce=vi(R,V,re),Re.programVariants.set(Ge,Ce)):(Re.currentProgram=Ce,Re.uniformsList=null,Re.outputColorSpace=J,Re.toneMapping=te),Ce}function Ls(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=gr.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Ns(R,V){let re=Je.get(R);re.outputColorSpace=V.outputColorSpace,re.batching=V.batching,re.batchingColor=V.batchingColor,re.instancing=V.instancing,re.instancingColor=V.instancingColor,re.instancingMorph=V.instancingMorph,re.skinning=V.skinning,re.morphTargets=V.morphTargets,re.morphNormals=V.morphNormals,re.morphColors=V.morphColors,re.morphTargetsCount=V.morphTargetsCount,re.numClippingPlanes=V.numClippingPlanes,re.numIntersection=V.numClipIntersection,re.vertexAlphas=V.vertexAlphas,re.vertexTangents=V.vertexTangents,re.toneMapping=V.toneMapping}function Pa(R,V,re,J,te){V.isScene!==!0&&(V=et),st.resetTextureUnits();let Re=V.fog,Ge=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?V.environment:null,Ce=H===null?I.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:yt.workingColorSpace,ke=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,je=E.get(J.envMap||Ge,ke),ot=J.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ft=!!re.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ze=!!re.morphAttributes.position,_t=!!re.morphAttributes.normal,Jt=!!re.morphAttributes.color,Dt=mi;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Dt=I.toneMapping);let Pt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,gn=Pt!==void 0?Pt.length:0,$e=Je.get(J),Mn=T.state.lights;if(Ae===!0&&(Ue===!0||R!==z)){let Gt=R===z&&J.id===U;ie.setState(J,R,Gt)}let St=!1,hs=!1;J.version===$e.__version?$e.needsLights&&$e.lightsStateVersion!==Mn.state.version||te.isBatchedMesh&&$e.batching===!1||!te.isBatchedMesh&&$e.batching===!0||te.isBatchedMesh&&$e.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&$e.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&$e.instancing===!1||!te.isInstancedMesh&&$e.instancing===!0||te.isSkinnedMesh&&$e.skinning===!1||!te.isSkinnedMesh&&$e.skinning===!0||te.isInstancedMesh&&$e.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&$e.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&$e.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&$e.instancingMorph===!1&&te.morphTexture!==null||$e.envMap!==je||J.fog===!0&&$e.fog!==Re||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ie.numPlanes||$e.numIntersection!==ie.numIntersection)||$e.vertexAlphas!==ot||$e.vertexTangents!==ft||$e.morphTargets!==Ze||$e.morphNormals!==_t||$e.morphColors!==Jt||$e.morphTargetsCount!==gn||$e.numLightProbeGrids!==wr(T.state.lightProbeGridArray)?St=!0:($e.outputColorSpace!==Ce||$e.toneMapping!==Dt)&&(hs=!0):(St=!0,$e.__version=J.version);let xn=$e.currentProgram;(St===!0||hs===!0)&&(xn=hs===!0?Ca(J,V,te,Ce,Dt):vi(J,V,te),Z&&J.isNodeMaterial&&Z.onUpdateProgram(J,xn,$e));let Ia=!1,zi=!1,ds=!1,vt=xn.getUniforms(),pn=$e.uniforms;if(Pe.useProgram(xn.program)&&(Ia=!0,zi=!0,ds=!0),J.id!==U&&(U=J.id,zi=!0),Ia||z!==R){Pe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),vt.setValue(q,"projectionMatrix",R.projectionMatrix),vt.setValue(q,"viewMatrix",R.matrixWorldInverse);let cn=vt.map.cameraPosition;cn!==void 0&&cn.setValue(q,qe.setFromMatrixPosition(R.matrixWorld)),bt.logarithmicDepthBuffer&&vt.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&vt.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,zi=!0,ds=!0)}if($e.needsLights&&(Mn.state.sunShadowMap.length>0&&vt.setValue(q,"sunShadowMap",Mn.state.sunShadowMap,st),Mn.state.directionalShadowMap.length>0&&vt.setValue(q,"directionalShadowMap",Mn.state.directionalShadowMap,st),Mn.state.spotShadowMap.length>0&&vt.setValue(q,"spotShadowMap",Mn.state.spotShadowMap,st),Mn.state.pointShadowMap.length>0&&vt.setValue(q,"pointShadowMap",Mn.state.pointShadowMap,st)),te.isSkinnedMesh){vt.setOptional(q,te,"bindMatrix"),vt.setOptional(q,te,"bindMatrixInverse");let Gt=te.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),vt.setValue(q,"boneTexture",Gt.boneTexture,st))}te.isBatchedMesh&&(vt.setOptional(q,te,"batchingTexture"),vt.setValue(q,"batchingTexture",te._matricesTexture,st),vt.setOptional(q,te,"batchingIdTexture"),vt.setValue(q,"batchingIdTexture",te._indirectTexture,st),vt.setOptional(q,te,"batchingColorTexture"),te._colorsTexture!==null&&vt.setValue(q,"batchingColorTexture",te._colorsTexture,st));let Zn=re.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&de.update(te,re,xn),(zi||$e.receiveShadow!==te.receiveShadow)&&($e.receiveShadow=te.receiveShadow,vt.setValue(q,"receiveShadow",te.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&V.environment!==null&&(pn.envMapIntensity.value=V.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=l_()),zi){if(vt.setValue(q,"toneMappingExposure",I.toneMappingExposure),$e.needsLights&&ql(pn,ds),Re&&J.fog===!0&&ue.refreshFogUniforms(pn,Re),ue.refreshMaterialUniforms(pn,J,Ee,ge,T.state.transmissionRenderTarget[R.id]),$e.needsLights&&$e.numLightProbeGrids>0){let Gt=M,cn=0;for(let Si of T.state.lightProbeGridArray)Si.texture!==null&&(Gt.textures[cn]=Si.texture,Gt.min[cn]=Si.boundingBox.min,Gt.max[cn]=Si.boundingBox.max,Gt.resolution[cn]=Si.resolution,cn++);for(let Si in Gt)Gt[Si].length=cn;pn.probesSH.value=Gt.textures,pn.probesMin.value=Gt.min,pn.probesMax.value=Gt.max,pn.probesResolution.value=Gt.resolution}gr.upload(q,Ls($e),pn,st)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(gr.upload(q,Ls($e),pn,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&vt.setValue(q,"center",te.center),vt.setValue(q,"modelViewMatrix",te.modelViewMatrix),vt.setValue(q,"normalMatrix",te.normalMatrix),vt.setValue(q,"modelMatrix",te.matrixWorld),J.uniformsGroups!==void 0){let Gt=J.uniformsGroups;for(let cn=0,Si=Gt.length;cn<Si;cn++){let Vh=Gt[cn];Le.update(Vh,xn),Le.bind(Vh,xn)}}return xn}function ql(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.sunLights.needsUpdate=V,R.sunLightShadows.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Yl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,V,re){let J=Je.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Je.get(R.texture).__webglTexture=V,Je.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:re,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){let re=Je.get(R);re.__webglFramebuffer=V,re.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,re=0){H=R,N=V,j=re;let J=null,te=!1,Re=!1;if(R){let Ce=Je.get(R);if(Ce.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(q.FRAMEBUFFER,Ce.__webglFramebuffer),$.copy(R.viewport),xe.copy(R.scissor),W=R.scissorTest,Pe.viewport($),Pe.scissor(xe),Pe.setScissorTest(W),U=-1;return}else if(Ce.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(Ce.__hasExternalTextures)st.rebindTextures(R,Je.get(R.texture).__webglTexture,Je.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ot=R.depthTexture;if(Ce.__boundDepthTexture!==ot){if(ot!==null&&Je.has(ot)&&(R.width!==ot.image.width||R.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}let ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Re=!0);let je=Je.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[V])?J=je[V][re]:J=je[V],te=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?J=Je.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?J=je[re]:J=je,$.copy(R.viewport),xe.copy(R.scissor),W=R.scissorTest}else $.copy(ze).multiplyScalar(Ee).floor(),xe.copy(Ye).multiplyScalar(Ee).floor(),W=Qe;if(re!==0&&(J=K),Pe.bindFramebuffer(q.FRAMEBUFFER,J)&&Pe.drawBuffers(R,J),Pe.viewport($),Pe.scissor(xe),Pe.setScissorTest(W),te){let Ce=Je.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,re)}else if(Re){let Ce=V;for(let ke=0;ke<R.textures.length;ke++){let je=Je.get(R.textures[ke]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+ke,je.__webglTexture,re,Ce)}}else if(R!==null&&re!==0){let Ce=Je.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ce.__webglTexture,re)}U=-1};function Mi(R){let V=Je.get(R);return(V.__readFormat!==R.format||V.__readType!==R.type)&&(V.__readFormat=R.format,V.__readType=R.type,V.__formatReadable=bt.textureFormatReadable(R.format),V.__typeReadable=bt.textureTypeReadable(R.type)),V}this.readRenderTargetPixels=function(R,V,re,J,te,Re,Ge,Ce=0){if(!(R&&R.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge],Array.isArray(ke)&&(ke=ke[0])),ke){Pe.bindFramebuffer(q.FRAMEBUFFER,ke);try{let je=R.textures[Ce],ot=je.format,ft=je.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ce);let Ze=Mi(je);if(Ze.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-J&&re>=0&&re<=R.height-te&&q.readPixels(V,re,J,te,Me.convert(ot),Me.convert(ft),Re)}finally{let je=H!==null?Je.get(H).__webglFramebuffer:null;Pe.bindFramebuffer(q.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,V,re,J,te,Re,Ge,Ce=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Je.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(ke=ke[Ge],Array.isArray(ke)&&(ke=ke[0])),ke)if(V>=0&&V<=R.width-J&&re>=0&&re<=R.height-te){Pe.bindFramebuffer(q.FRAMEBUFFER,ke);let je=R.textures[Ce],ot=je.format,ft=je.type;R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ce);let Ze=Mi(je);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,_t),q.bufferData(q.PIXEL_PACK_BUFFER,Re.byteLength,q.STREAM_READ),q.readPixels(V,re,J,te,Me.convert(ot),Me.convert(ft),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Jt=H!==null?Je.get(H).__webglFramebuffer:null;Pe.bindFramebuffer(q.FRAMEBUFFER,Jt);let Dt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await au(q,Dt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,_t),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Re),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(_t),q.deleteSync(Dt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,re=0){let J=Math.pow(2,-re),te=Math.floor(R.image.width*J),Re=Math.floor(R.image.height*J),Ge=V!==null?V.x:0,Ce=V!==null?V.y:0;st.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,re,0,0,Ge,Ce,te,Re),Pe.unbindTexture()},this.copyTextureToTexture=function(R,V,re=null,J=null,te=0,Re=0){let Ge,Ce,ke,je,ot,ft,Ze,_t,Jt,Dt=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(re!==null)Ge=re.max.x-re.min.x,Ce=re.max.y-re.min.y,ke=re.isBox3?re.max.z-re.min.z:1,je=re.min.x,ot=re.min.y,ft=re.isBox3?re.min.z:0;else{let vt=Math.pow(2,-te);Ge=Math.floor(Dt.width*vt),Ce=Math.floor(Dt.height*vt),R.isDataArrayTexture?ke=Dt.depth:R.isData3DTexture?ke=Math.floor(Dt.depth*vt):ke=1,je=0,ot=0,ft=0}J!==null?(Ze=J.x,_t=J.y,Jt=J.z):(Ze=0,_t=0,Jt=0);let Pt=Me.convert(V.format),gn=Me.convert(V.type),$e;V.isData3DTexture?(st.setTexture3D(V,0),$e=q.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(st.setTexture2DArray(V,0),$e=q.TEXTURE_2D_ARRAY):(st.setTexture2D(V,0),$e=q.TEXTURE_2D),Pe.activeTexture(q.TEXTURE0),Pe.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,V.flipY),Pe.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Pe.pixelStorei(q.UNPACK_ALIGNMENT,V.unpackAlignment);let Mn=Pe.getParameter(q.UNPACK_ROW_LENGTH),St=Pe.getParameter(q.UNPACK_IMAGE_HEIGHT),hs=Pe.getParameter(q.UNPACK_SKIP_PIXELS),xn=Pe.getParameter(q.UNPACK_SKIP_ROWS),Ia=Pe.getParameter(q.UNPACK_SKIP_IMAGES);Pe.pixelStorei(q.UNPACK_ROW_LENGTH,Dt.width),Pe.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Dt.height),Pe.pixelStorei(q.UNPACK_SKIP_PIXELS,je),Pe.pixelStorei(q.UNPACK_SKIP_ROWS,ot),Pe.pixelStorei(q.UNPACK_SKIP_IMAGES,ft);let zi=R.isDataArrayTexture||R.isData3DTexture,ds=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){let vt=Je.get(R),pn=Je.get(V),Zn=Je.get(vt.__renderTarget),Gt=Je.get(pn.__renderTarget);Pe.bindFramebuffer(q.READ_FRAMEBUFFER,Zn.__webglFramebuffer),Pe.bindFramebuffer(q.DRAW_FRAMEBUFFER,Gt.__webglFramebuffer);for(let cn=0;cn<ke;cn++)zi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Je.get(R).__webglTexture,te,ft+cn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Je.get(V).__webglTexture,Re,Jt+cn)),q.blitFramebuffer(je,ot,je+Ge,ot+Ce,Ze,_t,Ze+Ge,_t+Ce,q.DEPTH_BUFFER_BIT,q.NEAREST);Pe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||Je.has(R)){let vt=Je.get(R),pn=Je.get(V);Pe.bindFramebuffer(q.READ_FRAMEBUFFER,F),Pe.bindFramebuffer(q.DRAW_FRAMEBUFFER,X);for(let Zn=0;Zn<ke;Zn++)zi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,vt.__webglTexture,te,ft+Zn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,vt.__webglTexture,te),ds?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,pn.__webglTexture,Re,Jt+Zn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,pn.__webglTexture,Re),te!==0?q.blitFramebuffer(je,ot,je+Ge,ot+Ce,Ze,_t,Ze+Ge,_t+Ce,q.COLOR_BUFFER_BIT,q.NEAREST):ds?q.copyTexSubImage3D($e,Re,Ze,_t,Jt+Zn,je,ot,Ge,Ce):q.copyTexSubImage2D($e,Re,Ze,_t,je,ot,Ge,Ce);Pe.bindFramebuffer(q.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else ds?R.isDataTexture||R.isData3DTexture?q.texSubImage3D($e,Re,Ze,_t,Jt,Ge,Ce,ke,Pt,gn,Dt.data):V.isCompressedArrayTexture?q.compressedTexSubImage3D($e,Re,Ze,_t,Jt,Ge,Ce,ke,Pt,Dt.data):q.texSubImage3D($e,Re,Ze,_t,Jt,Ge,Ce,ke,Pt,gn,Dt):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Re,Ze,_t,Ge,Ce,Pt,gn,Dt.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Re,Ze,_t,Dt.width,Dt.height,Pt,Dt.data):q.texSubImage2D(q.TEXTURE_2D,Re,Ze,_t,Ge,Ce,Pt,gn,Dt);Pe.pixelStorei(q.UNPACK_ROW_LENGTH,Mn),Pe.pixelStorei(q.UNPACK_IMAGE_HEIGHT,St),Pe.pixelStorei(q.UNPACK_SKIP_PIXELS,hs),Pe.pixelStorei(q.UNPACK_SKIP_ROWS,xn),Pe.pixelStorei(q.UNPACK_SKIP_IMAGES,Ia),Re===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&q.generateMipmap($e),Pe.unbindTexture()},this.initRenderTarget=function(R){Je.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),Pe.unbindTexture()},this.resetState=function(){N=0,j=0,H=null,Pe.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};var $u={type:"change"},vh={type:"start"},Ju={type:"end"},Pl=new ji,Ku=new mn,h_=Math.cos(70*sh.DEG2RAD),on=new Y,Pn=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,_r=class extends ca{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new un,this._lastTargetPosition=new Y,this._quat=new un().setFromUnitVectors(e.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new dr,this._sphericalDelta=new dr,this._scale=1,this._panOffset=new Y,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new Y,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=u_.bind(this),this._onPointerDown=d_.bind(this),this._onPointerUp=f_.bind(this),this._onContextMenu=b_.bind(this),this._onMouseWheel=g_.bind(this),this._onKeyDown=x_.bind(this),this._onTouchStart=__.bind(this),this._onTouchMove=y_.bind(this),this._onMouseDown=p_.bind(this),this._onMouseMove=m_.bind(this),this._interceptControlDown=v_.bind(this),this._interceptControlUp=M_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=wt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($u),this.update(),this.state=wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Pn:n>Math.PI&&(n-=Pn),s<-Math.PI?s+=Pn:s>Math.PI&&(s-=Pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=on.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new Y(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Pl.origin.copy(this.object.position),Pl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Pl.direction))<h_?this.object.lookAt(this.target):(Ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),Pl.intersectPlane(Ku,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent($u),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pn/60*this.autoRotateSpeed*e:Pn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;on.copy(s).sub(this.target);let r=on.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function d_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function u_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function f_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ju),this.state=wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function p_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(vh)}function m_(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function g_(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ju))}function x_(i){this.enabled!==!1&&this._handleKeyDown(i)}function __(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1){this.state=wt.NONE;break}this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1){this.state=wt.NONE;break}this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(vh)}function y_(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function b_(i){this.enabled!==!1&&i.preventDefault()}function v_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Rs=class extends Tn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ht;e.deleteAttribute("uv");let t=new oe({side:sn}),n=new oe,s=new ys(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Qn(e,n,6),o=new Bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ie(e,yr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ie(e,yr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let d=new Ie(e,yr(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new Ie(e,yr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Ie(e,yr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Ie(e,yr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function yr(i){return new ra({color:0,emissive:16777215,emissiveIntensity:i})}var Ma=new Y;function Wn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ma.copy(e),Ma[n]=0,Ma.normalize();let c=.5*a/(a+o),d=1-Ma.angleTo(i)/l;return Math.sign(Ma[t])===1?d*c:o/(a+o)+c+c*(1-d)}var Il=class i extends Ht{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new Y,c=new Y,d=new Y(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,p=this.attributes.uv.array,_=u.length/6,y=new Y,m=.5/a;for(let x=0,S=0;x<u.length;x+=3,S+=2)switch(l.fromArray(u,x),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[x+0]=d.x*Math.sign(l.x)+c.x*r,u[x+1]=d.y*Math.sign(l.y)+c.y*r,u[x+2]=d.z*Math.sign(l.z)+c.z*r,f[x+0]=c.x,f[x+1]=c.y,f[x+2]=c.z,Math.floor(x/_)){case 0:y.set(1,0,0),p[S+0]=Wn(y,c,"z","y",r,n),p[S+1]=1-Wn(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),p[S+0]=1-Wn(y,c,"z","y",r,n),p[S+1]=1-Wn(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),p[S+0]=1-Wn(y,c,"x","z",r,e),p[S+1]=Wn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),p[S+0]=1-Wn(y,c,"x","z",r,e),p[S+1]=1-Wn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),p[S+0]=1-Wn(y,c,"x","y",r,e),p[S+1]=1-Wn(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),p[S+0]=Wn(y,c,"x","y",r,e),p[S+1]=1-Wn(y,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Mh=Math.PI/180,S_=(i,e,t)=>new un().setFromEuler(new Gn(i*Mh,e*Mh,t*Mh)),ee=(i,e,t)=>new Y(i,e,t);function Nl(i,e,t=1,n=60){let s=document.createElement("canvas");s.width=1024,s.height=256;let r=s.getContext("2d");r.fillStyle=i,r.fillRect(0,0,1024,256);let a=t,o=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<n;c++){let d=o()*256,u=4+o()*10,f=.004+o()*.008,p=o()*6;r.strokeStyle=e,r.globalAlpha=.12+o()*.3,r.lineWidth=.6+o()*2.2,r.beginPath();for(let _=0;_<=1024;_+=8){let y=d+Math.sin(_*f+p)*u+Math.sin(_*f*3.1+p)*u*.25;_?r.lineTo(_,y):r.moveTo(_,y)}r.stroke()}r.globalAlpha=.05;for(let c=0;c<1600;c++)r.fillStyle=o()<.5?e:"#fff",r.fillRect(o()*1024,o()*256,6+o()*14,1);let l=new An(s);return l.wrapS=l.wrapT=Zi,l.colorSpace=tn,l.anisotropy=8,l}var b={beech:new oe({map:Nl("#DDAA6A","#A8682E",3,80),roughness:.7}),beechDark:new oe({map:Nl("#C48A4E","#7E4A1E",7,50),roughness:.55}),rose:new oe({map:Nl("#5E2C1E","#2A100A",11,60),roughness:.42}),steel:new oe({color:12107978,metalness:.85,roughness:.32}),steelDark:new oe({color:9279139,metalness:.85,roughness:.35}),iron:new oe({color:2898511,metalness:.4,roughness:.45}),brass:new oe({color:13805126,metalness:.95,roughness:.3}),yellow:new oe({color:15909198,roughness:.45}),pink:new oe({color:15900840,roughness:.8}),graphite:new oe({color:3816e3,roughness:.5,metalness:.3}),pencilWood:new oe({color:15189914,roughness:.8}),line:new Ii({color:4012612}),kerf:new oe({color:3810326,roughness:1}),claret:new oe({color:9054789,roughness:.5})};function uf(i=30){let e=document.createElement("canvas");e.width=2048,e.height=160;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,160);n.addColorStop(0,"#e9ecef"),n.addColorStop(1,"#c7cdd4"),t.fillStyle=n,t.fillRect(0,0,2048,160),t.fillStyle="#24272d";let s=2048/i;for(let a=0;a<=i*10;a++){let o=a*s/10,l=a%10===0?60:a%5===0?42:26;t.fillRect(o,0,2,l)}t.font="bold 30px Arial";for(let a=1;a<i;a++)t.fillText(a,a*s-8,96);let r=new An(e);return r.colorSpace=tn,r.anisotropy=8,r}function E_(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.strokeStyle="rgba(55,52,62,.85)",e.lineWidth=5;for(let n=-256;n<512;n+=34)e.beginPath(),e.moveTo(n,256),e.lineTo(n+256,0),e.stroke();let t=new An(i);return t.colorSpace=tn,t}var y2=E_(),ls=i=>(i.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0)}),i);function Dh(){let i=new Xe,e=new ct;e.moveTo(-15,-1.25),e.lineTo(15,-1.25),e.absarc(15,0,1.25,-Math.PI/2,Math.PI/2,!1),e.lineTo(-15,1.25),e.closePath(),e.holes.push(new Ft().absarc(15.35,0,.38,0,Math.PI*2,!0));let t=new zt(e,{depth:.08,bevelEnabled:!1,curveSegments:24});t.translate(0,0,-.04),t.rotateX(-Math.PI/2);let n=t.attributes.position,s=t.attributes.uv;for(let o=0;o<n.count;o++)s.setXY(o,(n.getX(o)+15)/30,(-n.getZ(o)+1.25)/2.5);let r=uf();r.wrapS=Hn;let a=new oe({map:r,metalness:.65,roughness:.25});return i.add(new Ie(t,[a,b.steel])),ls(i)}function w_(){let i=new Xe,e=new Ie(new Ki(.11,.35,12),b.graphite);e.rotation.x=Math.PI,e.position.y=.175;let t=new Ie(new Et(.35,.11,.9,6),b.pencilWood);t.position.y=.35+.45;let n=new Ie(new Et(.35,.35,8,6),b.yellow);n.position.y=1.25+4;let s=new Ie(new Et(.37,.37,.6,16),b.steel);s.position.y=9.55;let r=new Ie(new Et(.34,.34,.5,16),b.pink);return r.position.y=10.1,i.add(e,t,n,s,r),ls(i)}function Lh(){let i=new Xe,e=new Ie(new Ht(11.5,1.8,2.6),b.rose);e.position.set(5.75,0,1.3);let t=new Ie(new Ht(11.5,1.5,.1),b.brass);t.position.set(5.75,0,.05);let n=[b.steel,b.steel,new oe({map:uf(15),metalness:.55,roughness:.35}),b.steel,b.steel,b.steel],s=new Ht(2.4,.15,15.6),r=s.attributes.uv,a=new Ie(s,n);a.position.set(1.2,0,-7.2),n[2].map.center.set(.5,.5),n[2].map.rotation=Math.PI/2,i.add(e,t,a);for(let[o,l]of[[.7,.9],[1.7,1.8],[.7,2]]){let c=new Ie(new Et(.2,.2,1.84,16),b.brass);c.position.set(o,0,l),i.add(c)}for(let o of[5.5,9.5]){let l=new Ie(new Et(.16,.16,1.84,16),b.brass);l.position.set(o,0,1.3),i.add(l)}return ls(i)}function Vl(){let i=new Xe,e=new Ie(new Ht(6,1.8,3.6),b.beechDark);e.position.set(0,.9,.3);let t=new Ie(new Ht(6,.06,3.6),b.brass);t.position.set(0,.03,.3);let n=new Ie(new Ht(1.3,15.5,1.3),b.beech);n.position.set(0,-1.4+7.75,.75);let s=new Ie(new Ki(.12,.5,12),b.steel);s.rotation.x=-Math.PI/2,s.position.set(0,-1,-.15),i.userData.pin=s;let r=new Ie(new Et(.22,.22,.9,16),b.steel);r.rotation.z=Math.PI/2,r.position.set(3.4,.9,.75);let a=new Ie(new qt(1,24,16),new oe({color:15909166,roughness:.35}));a.scale.set(.32,1.05,.75),a.position.set(4.15,.9,.75);let o=new Ie(new Et(.4,.4,.35,20),new oe({color:15909166,roughness:.35}));return o.rotation.z=Math.PI/2,o.position.set(3.75,.9,.75),i.add(e,t,n,s,r,o,a),ls(i)}function Nh(){let i=new Xe,e=new ct;e.moveTo(0,8),e.lineTo(0,.3);for(let u=0;u<62;u++)e.lineTo(u*.4+.2,-.05),e.lineTo(u*.4+.4,.3);e.lineTo(25,8),e.closePath();let t=new Ie(new zt(e,{depth:.06,bevelEnabled:!1}),b.steel);t.position.z=-.03;let n=new Ie(new Ht(25.4,1.3,.45),b.brass);n.position.set(12.6,8.1,0);let s=[[22.5,9.4],[24.8,12.2],[26.4,12.9],[27.9,12.1],[31.7,7.4],[33.9,2.2],[33.1,.5],[30.5,.3],[27.4,2.5],[24.6,3.2],[22.5,3.6]],r=new ct;s.forEach(([u,f],p)=>p?r.lineTo(u,f):r.moveTo(u,f)),r.closePath();let a=[[25.9,4.6],[28.3,3.3],[30.1,4.3],[29,8.5],[27.5,10.1],[26,9.3],[25.6,6.8]],o=new Ft;a.forEach(([u,f],p)=>p?o.lineTo(u,f):o.moveTo(u,f)),o.closePath(),r.holes.push(o);let l=new zt(r,{depth:1.45,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:1});l.translate(0,0,-.725);let c=l.attributes.uv;for(let u=0;u<c.count;u++)c.setXY(u,c.getX(u)/14,c.getY(u)/14);let d=new Ie(l,b.beechDark);i.add(t,n,d);for(let[u,f]of[[23.8,6.6],[25.4,3.6]]){let p=new Ie(new Et(.35,.35,2,16),b.brass);p.rotation.x=Math.PI/2,p.position.set(u,f,0),i.add(p)}return ls(i)}function Fh(){let i=new Xe,e=.38,t=7.7,n=new ct;n.moveTo(-.9,0),n.lineTo(.9,0),n.lineTo(.9,-.07),n.lineTo(.6,-e),n.lineTo(-.6,-e),n.lineTo(-.9,-.07),n.closePath();let s=new zt(n,{depth:t,steps:7,bevelEnabled:!1});s.rotateX(-Math.PI/2);let r=s.attributes.position;for(let u=0;u<r.count;u++){let f=r.getY(u),p=r.getZ(u);r.setZ(u,Math.min(p,e*Math.max(0,f)/1.1))}s.computeVertexNormals();let a=new Ie(s,b.steel),o=new Ie(new Et(.22,.3,.8,12),b.steel);o.position.set(0,8,e/2);let l=new Ie(new Et(.6,.6,.9,20),b.brass);l.position.set(0,8.8,e/2);let c=[[.6,9.2],[.78,10],[.92,12.5],[.88,15],[.7,16.4],[.3,16.8],[0,16.85]].map(([u,f])=>new be(u,f)),d=new Ie(new ui(c,28),b.beechDark);return d.position.z=e/2,i.add(a,o,l,d),ls(i)}function Uh(){let i=new Xe,e=new Ie(new Ht(4.2,5.2,9.5),b.beech),t=new Ie(new Ht(1.2,23.2,2.2),b.beechDark);return t.position.y=-20+23.2/2,i.add(e,t),ls(i)}function T_(){let i=new Xe,e=new nn([ee(0,0,0),ee(0,6.2,0),ee(.8,7.6,0),ee(2.5,8,0),ee(11,8,0),ee(12.7,7.6,0),ee(13.5,6.2,0),ee(13.5,0,0)]);i.add(new Ie(new wn(e,60,.22,10),new oe({color:6054765,metalness:.75,roughness:.4})));let t=new Ie(new Ht(13.5,.25,.03),new oe({color:15133422,metalness:.95,roughness:.12}));t.position.set(6.75,.1,0),i.add(t);let n=[[.3,0],[.65,-.8],[.75,-3],[.7,-6.5],[.5,-7.6],[0,-7.7]].map(([r,a])=>new be(r,a)),s=new Ie(new ui(n,24),new oe({color:3108800,roughness:.9}));return s.rotation.z=-Math.PI/2,s.position.set(-.1,.1,0),i.add(s),ls(i)}function ff(){return Bh(24,5.8,"smooth")}function Ds(i,e=256,t=[1,1]){let n=document.createElement("canvas");n.width=n.height=e;let s=n.getContext("2d");i(s,e);let r=new An(n);return r.wrapS=r.wrapT=Zi,r.repeat.set(...t),r.colorSpace=tn,r}var Qu=Ds((i,e)=>{i.fillStyle="#c9ced6",i.fillRect(0,0,e,e),i.strokeStyle="#6f7783",i.lineWidth=3;for(let t=-e;t<2*e;t+=16)i.beginPath(),i.moveTo(t,0),i.lineTo(t+e,e),i.stroke(),i.beginPath(),i.moveTo(t,e),i.lineTo(t+e,0),i.stroke()},256,[3,3]),A_=Ds((i,e)=>{i.fillStyle="#8a929c",i.fillRect(0,0,e,e),i.strokeStyle="#5d646d",i.lineWidth=2;for(let t=-e;t<2*e;t+=7)i.beginPath(),i.moveTo(t,0),i.lineTo(t+e*.5,e),i.stroke();i.strokeStyle="rgba(220,226,232,.5)",i.lineWidth=1;for(let t=-e;t<2*e;t+=11)i.beginPath(),i.moveTo(t,e),i.lineTo(t+e*.7,0),i.stroke()},256,[4,1]),R_=Ds((i,e)=>{i.fillStyle="#efe6d0",i.fillRect(0,0,e,e),i.strokeStyle="#c9b994";for(let t=4;t<e*.75;t+=9)i.lineWidth=2+Math.random()*2,i.beginPath(),i.arc(e/2,e/2,t,0,7),i.stroke()});Object.assign(b,{knurl:new oe({map:Qu,metalness:.8,roughness:.4}),file:new oe({map:A_,metalness:.7,roughness:.55}),blue:new oe({color:3105456,roughness:.35,metalness:.1}),red:new oe({color:13120058,roughness:.4}),orange:new oe({color:15235114,roughness:.4}),yellowP:new oe({color:15906354,roughness:.3}),black:new oe({color:2500652,roughness:.65}),hide:new oe({color:15524552,roughness:.85}),hideEnd:new oe({map:R_,roughness:.85}),viceBlue:new oe({color:2906784,metalness:.35,roughness:.5}),castGrey:new oe({color:6977156,metalness:.5,roughness:.5}),leather:new oe({color:7027486,roughness:.8}),gold:new oe({color:13212220,metalness:.9,roughness:.3}),goldSharp:new oe({color:13607498,metalness:.9,roughness:.28,flatShading:!0}),steelShiny:new oe({color:14278372,metalness:1,roughness:.12}),steelDull:new oe({color:10068137,metalness:.7,roughness:.45}),knurlDull:new oe({map:Qu,color:11580602,metalness:.65,roughness:.5}),blackMetal:new oe({color:2764082,metalness:.45,roughness:.45}),blackOxide:new oe({color:3816770,metalness:.6,roughness:.5}),dotRed:new oe({color:13775676,roughness:.5}),dotBlue:new oe({color:3105456,roughness:.5})});var We=(i,e)=>{let t=new Ie(i,e);return t.castShadow=t.receiveShadow=!0,t},h=(i,e=0,t=0,n=0,s=0,r=0,a=0)=>(i.position.set(e,t,n),i.rotation.set(s,r,a),i),D=(i,e,t,n,s=28)=>We(new Et(i,e,t,s),n),P=(i,e,t,n)=>We(new Ht(i,e,t),n),fe=(i,e,t,n,s)=>We(new Il(i,e,t,3,n),s),fn=(i,e,t=32)=>We(new ui(i.map(([n,s])=>new be(n,s)),t),e),kh=i=>{let e=new ct;return i.forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n)),e.closePath(),e},Ut=(i,e,t,n=0)=>{let s=new zt(Array.isArray(i)?kh(i):i,{depth:e,bevelEnabled:n>0,bevelThickness:n,bevelSize:n,bevelSegments:3,curveSegments:24});s.translate(0,0,-e/2);let r=s.attributes.uv;for(let a=0;a<r.count;a++)r.setXY(a,r.getX(a)/12,r.getY(a)/12);return We(s,t)},oi=(i,e,t,n=80)=>We(new wn(new nn(i.map(s=>ee(...s))),n,e,12),t),he=(...i)=>{let e=new Xe;return i.length&&e.add(...i),e},C_=i=>(i.rotation.z=-Math.PI/2,i);function P_(){return he(h(P(8,1.4,1.8,b.steelShiny),4,0,.9),h(P(1.4,.16,11,b.steelShiny),.7,0,-5.5),h(P(.4,.6,.4,b.steelDark),.2,0,.2))}function I_(){let i=Vl();i.children.forEach(t=>{(t.material===b.beechDark||t.material===b.beech)&&(t.material=b.rose)});let e=i.userData.pin.clone();return e.position.y=-1.8,i.add(e),i.add(h(P(.5,15,.12,b.brass),0,6.35,1.42),h(D(.35,.35,1,b.brass),0,14.6,.75),h(D(.55,.55,.3,b.knurl),0,15.2,.75)),i}function pf(){return he(fn([[0,0],[.06,.6],[.12,2.2],[.14,4],[0,4]],b.steelDull),h(D(.2,.2,6.4,b.knurlDull),0,7.2),h(D(.2,.2,.04,b.dotRed),0,10.42))}function D_(){return he(fn([[0,0],[.15,.35],[.36,1.6],[.42,2.4],[.42,9.7],[0,9.7]],b.steelDull),h(D(.45,.45,4.6,b.knurlDull),0,5.4),h(D(.42,.42,.04,b.dotRed),0,9.72))}function L_(){return he(fn([[0,.08],[.07,0],[.1,.05],[.1,.9],[.38,3.6],[.38,9.4],[.3,9.8],[0,9.85]],b.blackOxide),h(D(.4,.4,3.6,b.knurl),0,6.4))}function N_(){let i=he(),e=r=>{let a=.3*r,o=2.6*r-a,l=Math.hypot(o,12.6),c=D(.22,.05,l,b.steel,16);return c.position.set(a+o/2,12.85-12.6/2,0),c.rotation.z=Math.atan2(o,12.6),c},t=.34,n=new ct;n.absarc(0,0,1,-Math.PI/2+t,Math.PI*1.5-t,!1),n.absarc(0,0,.86,Math.PI*1.5-t,-Math.PI/2+t,!0),n.closePath();let s=Ut(n,.55,b.steel);return s.position.set(0,13.8,0),i.add(e(1),e(-1),s,h(D(.17,.17,1.3,b.knurl),0,15.4)),i.add(h(D(.06,.06,4.6,b.steelDark),0,7,0,0,0,Math.PI/2),h(D(.5,.5,.45,b.knurl),2.15,7,0,0,0,Math.PI/2)),i}function F_(){let i=e=>oi([[.22*e,13],[1.1*e,11],[2.5*e,7.2],[3.1*e,4],[2.7*e,1.5],[1.4*e,.25],[.3*e,0]],.17,b.steel);return he(i(1),i(-1),h(D(.75,.75,.35,b.steel),0,13.2,0,Math.PI/2),h(D(.25,.25,.5,b.steelDark),0,13.2,0,Math.PI/2))}function U_(){return he(oi([[.25,13],[.9,6],[1.25,.6]],.17,b.steel),h(fn([[0,0],[.1,.5],[.17,.9]],b.steel),1.28,0,0,0,0,.05),oi([[-.25,13],[-1.1,5],[-1.35,1.2],[-1.1,.45],[-.5,.3]],.17,b.steel),h(D(.75,.75,.35,b.steel),0,13.2,0,Math.PI/2),h(D(.25,.25,.5,b.steelDark),0,13.2,0,Math.PI/2))}function mf(){let i=kh([[2.4,9.6],[-4,9.6],[-6.4,7.2],[-6.8,2.4],[-5.2,.7],[2.4,.7]]);i.holes.push(new Ft([[-4.4,2.1],[.9,2.1],[.9,8.2],[-3.6,8.2],[-5.1,6.6],[-5.3,3.4]].map(([t,n])=>new be(t,n))));let e=Ut(i,1.6,b.yellowP,.25);return he(oi([[30.5,.6],[30.6,8],[29.4,9.6],[4.2,9.6],[2.4,9.6]],.55,b.black),e,h(P(28.6,1.2,.06,b.steelShiny),16.2,1.3,0),h(D(.45,.45,.5,b.steel),30.6,1.3,0,Math.PI/2),h(P(1.4,.5,.15,b.steel),31.6,1.3,0))}function k_(){let i=new oe({color:14211548,roughness:.5,metalness:.1}),t=oi([[0,.25,0],[.3,1.5,0],[1.4,5.7,0],[2.5,6.6,0],[7,6.6,0],[11.4,6.6,0],[12.8,6.1,0],[13.6,4.8,0],[14.3,2.4,0],[15.1,.2,.18],[15.8,-.9,.3],[16.9,-1.4,.2],[19.5,-1.5,0],[21.9,-1.45,0],[23,-1,0],[23.35,-.4,0],[23,.2,0],[21.9,.62,0],[19.5,.66,0],[17.1,.56,-.15],[16,.38,-.3],[15.3,.27,-.15],[15,.25,0]],.3,i,260),n=s=>h(D(.42,.42,.95,i,20),s,.2,0);return he(t,n(0),n(15),h(P(14.6,.85,.05,new oe({color:3817286,metalness:.6,roughness:.4})),7.5,-.25,0))}var gf=new oe({map:Nl("#5c3b26","#2e1b10",31,60),roughness:.5});function O_(){let i=new ct;i.moveTo(0,0),i.lineTo(.95,1.6),i.lineTo(.95,9),i.lineTo(0,9),i.closePath();let e=new zt(i,{depth:.6,bevelEnabled:!1});return e.translate(-.47,0,-.3),e.rotateY(Math.PI/2),he(We(e,b.steel),h(D(.75,.75,.5,b.steel),0,9.25),h(D(.85,.85,.3,b.leather),0,9.65),h(fn([[.85,9.8],[1.05,11],[1.15,15],[1.05,19],[.9,20],[0,20.1]],gf),0,0,0))}var Oh=(i=b.beechDark)=>{let e=fn([[.75,.6],[.8,-4],[.95,-18],[1.05,-24],[.95,-27.5],[0,-27.8]],i);return e.scale.z=.72,e},B_=(i=b.steelDark)=>{let e=fn([[0,3.6],[.98,3.6],[1.02,3.42],[.78,2.6],[.68,1.8],[.92,1.05],[.95,-.9],[.7,-1.6],[.5,-2.2],[.55,-2.6],[0,-2.6]].reverse(),i,40);return e.rotation.z=-Math.PI/2,e};function H_(){return he(B_(),h(We(new qt(1,32,20),b.steelDark),-3.4,0,0),Oh())}function z_(){let i=fn([[0,3.6],[.98,3.6],[1.02,3.42],[.78,2.6],[.68,1.8],[.92,1.05],[.95,0],[0,0]].reverse(),b.steelDark,40);i.rotation.z=-Math.PI/2;let e=Ut([[0,-.95],[0,.95],[-3.6,.14],[-3.6,-.14]],1.8,b.steelDark);return he(i,e,Oh())}function xf(){let i=e=>h(Ut(new ct().moveTo(0,.95).quadraticCurveTo(-3,1.25,-5.4,-2.1).lineTo(-5.25,-2.25).quadraticCurveTo(-2.9,-.35,0,-.9),.42,b.steelDark),0,0,.38*e);return he(h(D(1,1,3.4,b.steelDark),1.7,0,0,0,0,Math.PI/2),i(1),i(-1),h(D(.85,.85,1.2,b.steelDark),0,-.3,0),h(fn([[.7,-.5],[.72,-12],[0,-12.1]],b.yellowP),0,0,0),h(fn([[.95,-11],[1.05,-17],[1.1,-26],[.95,-27.5],[0,-27.7]],b.black),0,0,0))}function G_(){let i=D(1.7,1.7,7.5,b.hide,36);return i.material=[b.hide,b.hideEnd,b.hideEnd],h(i,0,0,0,0,0,Math.PI/2),he(i,h(D(1.75,1.75,2.4,b.castGrey,36),0,0,0,0,0,Math.PI/2),Oh(b.beech))}function Bh(i=24,e=5.8,t){let n=new oe({color:11740718,metalness:.35,roughness:.4}),s=t==="jack"?n:t==="smooth"?b.steel:b.iron,r=t==="jack"?n:t==="smooth"?b.blackMetal:b.iron,a=t?b.steelShiny:b.iron,o=he(),l=P(i,.6,e,a);l.position.y=.3;let c=P(i-2,3.4,.35,r);c.position.set(0,2.2,e/2-.18);let d=c.clone();d.position.z=-e/2+.18;let u=P(4,2,e-.8,s);h(u,-1.5,1.6,0,0,0,.75);let f=P(10,.25,e-1.2,b.steel);h(f,-1.6,3.6,0,0,0,.75);let p=fe(7,.6,e-1.4,.25,s);h(p,-.8,3.8,0,0,0,.75);let _=P(1.2,.5,1.4,b.steel);h(_,-2.4,5.2,0,0,0,.75);let y=new ct;y.moveTo(0,0),y.lineTo(4.5,0),y.bezierCurveTo(5,4,5.5,7,4,8.3),y.bezierCurveTo(3,9,1.6,8.5,1.8,7),y.bezierCurveTo(2,5,1,2.5,0,1.2),y.closePath();let m=Ut(y,1.8,b.beechDark,.2);m.scale.x=-1,m.position.set(-i/2+4.5,.6,0);let x=fn([[0,0],[1.3,0],[1.5,1.2],[1.2,2.6],[.6,3.2],[0,3.3]],b.beechDark);return x.position.set(i/2-3.5,.6,0),o.add(l,c,d,u,f,p,_,m,x,h(D(.45,.45,.4,b.brass),-i/2+6.2,2,0,0,0,Math.PI/2)),o}function _f(){return Bh(36,6.2,"jack")}function V_(){let i=Bh(21,3.6);return i.add(h(D(.22,.22,9,b.steel),4,1.2,5.5,Math.PI/2),h(D(.22,.22,9,b.steel),-4,1.2,5.5,Math.PI/2),h(fe(15,2.6,.9,.2,b.iron),0,1.3,9.6),h(P(1.2,1.4,.5,b.brass),6,1.2,-2.1)),i}var Sh=new oe({color:3112271,metalness:.35,roughness:.4});function W_(){let i=he(),e=P(20,4.5,.5,Sh);e.position.set(0,2.6,0);let t=fe(9,4,1.6,.3,Sh);t.position.set(-1,3.4,.9);let n=new ct;n.moveTo(0,0),n.lineTo(4.5,0),n.bezierCurveTo(5,4,5.5,7,4,8.3),n.bezierCurveTo(3,9,1.6,8.5,1.8,7),n.bezierCurveTo(2,5,1,2.5,0,1.2),n.closePath();let s=Ut(n,1.6,b.beechDark,.2);s.scale.x=-1,s.position.set(-4,4.6,1);let r=P(.5,6,.4,b.steel);return h(r,1.5,4,0,0,0,.5),i.add(e,t,s,r,h(D(.25,.25,10,b.steel),5,2.4,5,Math.PI/2),h(D(.25,.25,10,b.steel),-6,2.4,5,Math.PI/2),h(fe(17,3.4,.8,.2,Sh),0,2.2,8.8),h(D(.4,.4,.5,b.brass),5,2.4,1.1,Math.PI/2),h(D(.4,.4,.5,b.brass),-6,2.4,1.1,Math.PI/2)),i}function Hh(i,e,t,n=2,s=.45,r=0){let a=new Et(i,i,e,64,Math.round(e*24),!1),o=a.attributes.position;for(let l=0;l<o.count;l++){let c=o.getX(l),d=o.getY(l),u=o.getZ(l),f=Math.atan2(u,c),p=Math.hypot(c,u);if(p<1e-6)continue;let _=(d+e/2)/e,y=1-s*Math.pow(Math.max(0,Math.cos(n/2*2*(f-_*t*Math.PI*2))),3);r&&(y*=1-.07*(.5+.5*Math.sin(f+d*Math.PI*2/r))),o.setX(l,c/p*p*y),o.setZ(l,u/p*p*y)}return a.computeVertexNormals(),a}function yf(){return he(h(D(.32,.32,4.5,b.gold),0,2.25),h(We(Hh(.32,7.2,1.6),b.gold),0,8.1),h(D(.32,0,.25,b.gold),0,11.83,0,Math.PI))}function X_(){let i=new oe({color:2961461,metalness:.6,roughness:.45,side:en}),e=(o,l,c,d)=>he(We(new ui([[1.82,o],[2,o],[2,l],[1.97,l],[1.82,l-.38],[1.82,o]].map(([u,f])=>new be(u,f)),56,c,d),b.steelShiny),We(new ui([[1.815,o+.02],[1.815,Math.max(o+.03,l-.4)]].map(([u,f])=>new be(u,f)),56,c,d),i)),t=he(h(D(.3,.3,1.6,b.steel),0,.8),h(D(.26,.26,.25,b.blackOxide),0,1.72),h(D(.48,.48,2.2,b.steel),0,2.95),h(D(.44,.44,.35,b.blackOxide),0,4.22),h(D(1.97,1.97,.28,b.steel,64),0,4.53),h(D(1.82,1.82,.04,i,48),0,4.69)),n=.36,s=Math.PI/2;t.add(e(4.4,6,s+n,Math.PI-2*n),e(4.4,6,3*s+n,Math.PI-2*n)),t.add(e(4.4,5.1,s-n*.15,n*.15+.02),e(4.4,5.1,3*s-n*.15,n*.15+.02));let r=new ct;r.moveTo(-.7,0),r.lineTo(.7,0),r.lineTo(0,1.38),r.closePath();let a=new Ie(new zt(r,{depth:4,bevelEnabled:!1}),[b.steelShiny,i]);return a.geometry.translate(0,0,-2),a.geometry.rotateY(Math.PI/2),a.position.y=4.62,a.castShadow=!0,t.add(a,h(D(0,.13,.45,b.steelShiny,16),0,6.2)),t}function q_(){let i=new Ki(1.2,1.1,60,6),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),s=e.getZ(t),r=Math.atan2(s,n);if(Math.hypot(n,s)<1e-6)continue;let o=(r/(2*Math.PI/5)%1+1)%1,l=1-.28*Math.min(1,o*3.5);e.setX(t,n*l),e.setZ(t,s*l)}return i.computeVertexNormals(),he(h(D(.33,.33,5,b.gold),0,3.6),h(We(i,b.goldSharp),0,.55,0,Math.PI),h(D(1.2,1.2,.14,b.gold,60),0,1.17),h(D(.4,.9,.35,b.gold),0,1.41))}function Y_(){let i=e=>{let t=he(fn([[.5,0],[.17,.34],[0,.34]],b.steel,32),h(We(Hh(.17,.5,.35,2,.35),b.steel),0,.59),h(D(0,.17,.13,b.steel,24),0,.9));return t.position.y=1.8*e,e<0&&(t.rotation.x=Math.PI),t};return he(D(.5,.5,3.6,b.knurl),i(1),i(-1))}function bf(i=b.red){return C_(h(fn([[.6,0],[.9,1],[1,7],[.85,9],[0,9.2]],i),-10.5,0,0))}function vf(){let i=kh([[0,-1.1],[18,-1.1],[20,-.55],[20,.55],[18,1.1],[0,1.1]]),e=Ut(i,.45,b.file);return h(e,0,0,0,Math.PI/2),he(e,h(P(3,.3,.5,b.steelDark),-1.5,0,0),bf())}function Z_(){let i=new ct;i.moveTo(-1.1,0),i.lineTo(1.1,0),i.quadraticCurveTo(1.05,.9,0,.95),i.quadraticCurveTo(-1.05,.9,-1.1,0);let e=new zt(i,{depth:20,steps:20,bevelEnabled:!1,curveSegments:16}),t=e.attributes.position;for(let s=0;s<t.count;s++){let r=t.getZ(s),a=r>15?1-(r-15)/5*.55:1;t.setX(s,t.getX(s)*a),t.setY(s,t.getY(s)*a)}let n=e.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,t.getZ(s)/5,t.getX(s)/2);return e.rotateY(Math.PI/2),e.computeVertexNormals(),he(h(We(e,b.file),0,-.25,0),h(P(3,.3,.5,b.steelDark),-1.5,0,0),bf(b.blue))}function j_(){let i=new ct;i.absarc(-5.5,0,3.4,Math.PI/2,Math.PI*1.5,!1),i.lineTo(5.5,-3.4),i.absarc(5.5,0,3.4,-Math.PI/2,Math.PI/2,!1),i.closePath(),i.holes.push(new Ft().absarc(0,0,1.3,0,Math.PI*2,!0));let e=Ut(i,.9,b.iron,.15);h(e,0,.45,0,Math.PI/2);let t=n=>h(fn([[0,0],[1.2,0],[1.5,1.5],[1.3,3],[.7,3.8],[0,3.9]],b.beechDark),n,.9);return he(e,t(-6),t(6),h(D(.35,.35,7,b.steel),0,4.4),h(D(.75,.75,.6,b.knurl),0,5),h(P(.5,2.6,.5,b.steel),0,-.4),h(P(1.2,.3,.6,b.steel),.4,-1.6))}function Mf(){let i=s=>{let r=new ct;r.moveTo(-1,.05*s),r.lineTo(.95,.05*s),r.absarc(1.3,.05*s,.35,Math.PI,0,s<0),r.lineTo(3.8,.05*s),r.lineTo(3.95,.28*s),r.lineTo(2.5,.62*s),r.lineTo(.5,.9*s),r.lineTo(-1,.85*s),r.closePath();let a=he(Ut(r,.8,b.steelDark));for(let o=0;o<9;o++)a.add(h(P(.07,.09,.8,b.steel),2+o*.2,.06*s,0));return a.add(h(P(.6,.07,.82,b.steelShiny),.6,.05*s,0)),a},e=s=>oi([[-1,.35*s],[-3.5,1*s],[-6.5,1.5*s],[-9.5,2*s]],.48,b.red),t=he(h(i(1),0,0,-.2),e(-1)),n=he(h(i(-1),0,0,.2),e(1));return t.rotation.z=.11,n.rotation.z=-.11,he(t,n,h(D(.55,.55,1.1,b.steel),0,0,0,Math.PI/2))}function $_(){let i=new oe({color:10274536,roughness:.45}),e=a=>{let o=new ct;o.moveTo(1.6,-.3*a),o.lineTo(-9.6,-.04*a),o.quadraticCurveTo(-7.2,2.1*a,-1.6,2*a),o.lineTo(1.4,1.75*a),o.lineTo(3.4,1*a),o.lineTo(3.4,-.3*a),o.closePath();let l=he(Ut(o,.34,b.steel,.04)),c=new ct;return c.moveTo(-9.4,0),c.lineTo(.8,-.18*a),c.lineTo(.8,.42*a),c.lineTo(-8.6,.32*a),c.closePath(),l.add(h(Ut(c,.02,b.steelShiny),0,0,.2*a)),l.add(h(fe(2.2,.62,.06,.25,b.steelDark),-4.6,.95*a,.2*a,0,0,.08*a)),l},t=(a,o)=>{let l=new nn(a.map(([y,m])=>ee(y,m,0)),!1,"centripetal"),c=90,d=.95,u=l.getSpacedPoints(c),f=[],p=[];for(let y=0;y<=c;y++){let m=l.getTangentAt(y/c),x=y>c-12?.75:1;f.push(new be(u[y].x-m.y*d*x/2,u[y].y+m.x*d*x/2)),p.push(new be(u[y].x+m.y*d*x/2,u[y].y-m.x*d*x/2))}let _=new ct([...f,...p.reverse()]);return h(Ut(_,.55,i,.12),0,0,.2*o)},n=t([[2.6,.75],[6,1.15],[12,1.7],[19,2.3],[21.4,2.55],[22.1,2.25],[22.2,1.85]],1),s=t([[2.6,-.75],[6,-1.35],[12,-2.15],[19,-2.95],[21.4,-3.2],[22.1,-2.9],[22.2,-2.45]],-1),r=We(new qt(.55,24,12,0,Math.PI*2,0,Math.PI/2),b.steelShiny);return r.rotation.x=Math.PI/2,r.scale.set(1,.45,1),r.position.set(0,0,.42),he(h(e(1),0,0,.18),h(e(-1),0,0,-.18),n,s,r,h(D(.5,.5,.1,b.steel),0,0,-.42,Math.PI/2),h(fe(.7,1.4,.5,.15,i),4.6,-.15,0),h(D(.12,.12,.9,b.steel),4.6,.45,0,Math.PI/2))}function K_(){let i=fe(5,3.2,2.2,.4,b.castGrey);i.position.set(0,0,0);let e=he(h(D(.6,.45,2,b.steel),3.4,.6,0,0,0,Math.PI/2),h(D(.18,.18,.6,b.steel),4.6,.6,0,0,0,Math.PI/2),h(D(.1,.1,.03,b.black,16),4.91,.6,0,0,0,Math.PI/2)),t=Ut([[-2.2,-1],[-.6,-1],[-2.6,-13],[-4.2,-12.6]],1.8,b.castGrey,.2),n=Ut([[-2.9,-6],[-1.5,-6.3],[-2.6,-13],[-4.2,-12.6]],2.1,b.black,.25),s=Ut([[1.6,1.2],[2.6,.4],[1.8,-12.5],[.3,-12.2]],1.4,b.castGrey,.2),r=Ut([[1.9,-5.8],[1.8,-12.5],[.3,-12.2],[.6,-5.6]],1.7,b.red,.25),a=he(h(D(.06,.06,2.6,b.steelShiny,12),-1.3,0,0,0,0,Math.PI/2),h(D(.24,.24,.06,b.steel,20),.03,0,0,0,0,Math.PI/2),h(D(.12,.12,.55,b.steel,16),.33,0,0,0,0,Math.PI/2),h(D(.1,.1,.1,b.steel,12),.62,0,0,0,0,Math.PI/2));a.position.set(5,.6,0);let o=he(i,e,t,n,s,r,h(D(.35,.35,2.6,b.steel),1.8,.9,0,Math.PI/2),a);return o.userData.anim=l=>{let c=l%4/4,d=f=>f*f*(3-2*f),u;c<.3?u=9-4.05*d(c/.3):c<.5?u=4.95:c<.8?u=4.95+4.05*d((c-.5)/.3):u=9,a.position.x=u},o}function Ol(i){let e=fn([[.7,0],[1.15,.8],[1.3,4],[1.25,8],[1.05,9.6],[0,9.9]],i?b.red:b.yellowP,8),t;if(i){let n=new ui([[0,-1.2],[.28,-.3],[.28,0]].map(([r,a])=>new be(r,a)),48),s=n.attributes.position;for(let r=0;r<s.count;r++){let a=s.getX(r),o=s.getZ(r),l=Math.atan2(o,a),c=.32+.68*Math.pow(Math.abs(Math.cos(2*l)),8);s.setX(r,a*c),s.setZ(r,o*c)}n.computeVertexNormals(),t=h(We(n,b.steelDark),0,-12.15,0)}else t=h(P(.55,1.2,.12,b.steelDark),0,-12.6);return he(e,h(D(.75,.75,.5,b.steel),0,-.1),h(D(.28,.28,12,b.steelDark),0,-6.2),t)}function J_(){let i=new nn([[0,-.19],[17,-.19],[19.2,-.22],[20.2,-.68],[21.3,-1.25],[22.5,-.8],[22.85,0],[22.5,.8],[21.3,1.25],[20.2,.68],[19.2,.22],[17,.19],[0,.19]].map(([l,c])=>ee(l,c,0)),!1,"centripetal"),e=160,t=.34,n=i.getSpacedPoints(e),s=[],r=[];for(let l=0;l<=e;l++){let c=i.getTangentAt(l/e),d=-c.y,u=c.x;s.push(new be(n[l].x+d*t/2,n[l].y+u*t/2)),r.push(new be(n[l].x-d*t/2,n[l].y-u*t/2))}let a=new ct([...s,...r.reverse()]),o=new oe({color:3646379,metalness:.25,roughness:.42});return he(We(new zt(a,{depth:1.1,bevelEnabled:!1,curveSegments:4}).translate(0,0,-.55),o))}function Q_(){let i=he(h(P(.5,.9,.5,b.steel),0,.8),h(D(.4,.4,2.6,b.steel),0,-1),h(We(Hh(.48,4,0,3,.35,.35),b.steel),0,-4.3),h(D(.48,.15,.5,b.steel),0,-6.5,0,0));return he(i,h(fe(2.6,1.8,1.6,.3,b.black),0,.8),h(D(.4,.4,8,b.black),4.9,.8,0,0,0,Math.PI/2),h(D(.4,.4,8,b.black),-4.9,.8,0,0,0,Math.PI/2),h(D(.5,.5,.8,b.steel),0,2,0))}function ey(){let i=new ct;i.absarc(0,0,2.6,0,Math.PI*2,!1),i.holes.push(new Ft().absarc(0,0,1.95,0,Math.PI*2,!0));let e=new ct;e.absarc(0,0,1.95,0,Math.PI*2,!1),e.holes.push(new Ft().absarc(0,0,.55,0,Math.PI*2,!0));for(let n=0;n<4;n++){let s=n*Math.PI/2;e.holes.push(new Ft().absarc(Math.cos(s)*1.05,Math.sin(s)*1.05,.35,0,Math.PI*2,!0))}let t=he();for(let n=0;n<6;n++)t.add(h(new Ie(new Zt(.53,.05,8,24),b.steelDark),0,-.38+n*.15,0,Math.PI/2,0,n*.2));return he(t,h(Ut(i,1.2,b.steelDark,.1),0,0,0,Math.PI/2),h(Ut(e,.9,b.steel),0,0,0,Math.PI/2),h(D(.42,.42,9,b.knurl),7.2,0,0,0,0,Math.PI/2),h(D(.42,.42,9,b.knurl),-7.2,0,0,0,0,Math.PI/2),h(D(.6,.6,.6,b.steel),2.8,0,0,0,0,Math.PI/2),h(D(.6,.6,.6,b.steel),-2.8,0,0,0,0,Math.PI/2))}function ty(){return he(fn([[.6,0],[1.1,1.2],[1.25,3.5],[1,6.5],[.5,7.6],[0,7.7]],b.beech),h(D(.5,.5,.4,b.brass),0,-.1),h(fn([[0,-5.8],[.17,-4.6],[.17,0],[0,0]],b.steel,20),0,-.2))}function ny(){return Ol(!1)}function iy(){return Ol(!0)}function Sf(){let i=he(h(fe(20,9,2,.3,b.viceBlue),0,0,0),h(P(20,9,1,b.beech),0,0,1.5)),e=he(h(fe(20,9,2,.3,b.viceBlue),0,0,0),h(P(20,9,1,b.beech),0,0,-1.5));return e.position.z=6,he(i,e,h(D(.6,.6,14,b.steel),-6,-2.5,3,Math.PI/2),h(D(.6,.6,14,b.steel),6,-2.5,3,Math.PI/2),h(D(.8,.8,12,b.knurl),0,-2.5,4,Math.PI/2),h(D(.45,.45,16,b.steel),0,-2.5,10.2,0,0,Math.PI/2),h(We(new qt(.75,20,14),b.steel),8.2,-2.5,10.2),h(We(new qt(.75,20,14),b.steel),-8.2,-2.5,10.2),h(D(1.3,1.3,1.6,b.viceBlue),0,-2.5,7.6,Math.PI/2))}function Ef(){let i=he(h(fe(9,2,12,.3,b.viceBlue),0,1,0),h(fe(6,6,4,.4,b.viceBlue),0,5,-3.5),h(fe(6,5,4,.4,b.viceBlue),0,4.5,2.6),h(fe(4,1.2,8,.2,b.viceBlue),0,3,1));i.add(h(P(10,2.4,.4,b.steelDark),0,6.9,-1.3),h(P(10,2.4,.4,b.steelDark),0,6.9,.4),h(fe(10,.8,4,.2,b.viceBlue),0,7.8,-3.5),h(fe(10,.8,4,.2,b.viceBlue),0,7.5,2.6)),i.add(h(D(.5,.5,4,b.steel),0,3,6,Math.PI/2),h(D(.35,.35,11,b.steel),0,3,8,0,0,Math.PI/2),h(We(new qt(.6,16,12),b.steel),5.6,3,8),h(We(new qt(.6,16,12),b.steel),-5.6,3,8),h(fe(6,1,2,.3,b.viceBlue),0,8.5,-4.2));let e=P(13,1.6,15,b.beech);e.position.y=-.8;let t=P(12,3,3.4,b.beechDark);t.position.set(0,-3.1,5.8),i.add(e,t);for(let[n,s]of[[-5.2,-6],[5.2,-6],[-5.2,6],[5.2,6]])i.add(h(D(.35,.35,.08,b.brass),n,.03,s));return i}function sy(){let i=t=>{let n=new ct;return n.moveTo(-1.5,-1.5),n.lineTo(1.5,-1.5),n.lineTo(1.5,1.5),n.lineTo(-1.5,1.5),n.closePath(),n.holes.push(new Ft().absarc(t>0?.3:-.3,0,.6,0,Math.PI*2,!0)),h(Ut(n,1,b.castGrey,.12),t,.5,0,Math.PI/2)},e=he(h(fe(9,2,16,.3,b.castGrey),0,1,0),i(6),i(-6),h(fe(9,4,2.4,.3,b.castGrey),0,4,-6),h(fe(9,3.6,2.8,.3,b.castGrey),0,3.8,0));return e.add(h(P(8.6,2.2,.3,b.steelDark),0,4.6,-4.7),h(P(8.6,2.2,.3,b.steelDark),0,4.6,-1.5),h(D(.5,.5,9,b.steel),0,2.6,4.6,Math.PI/2),h(D(.3,.3,6,b.steel),0,2.6,9,0,0,Math.PI/2),h(D(.45,.45,1.4,b.black),3.4,2.6,9,0,0,Math.PI/2)),e}function ry(){let i=t=>{let n=he(Ut([[0,0],[.85*t,0],[1*t,7.6],[1.75*t,8.2],[1.75*t,10.2],[0,10.2]],1.3,b.blackMetal,.08),h(fe(1.75,2,2.3,.12,b.blackMetal),.875*t,9.2,0),h(P(.12,1.8,2.1,b.knurl),.04*t,9.2,0));return n.rotation.z=-.09*t,n},e=he(h(D(.55,.55,.7,b.blackMetal),2.4,5.2,0,0,0,Math.PI/2),h(Ut([[0,0],[.4,1.6],[.9,1.8],[.9,-1.8],[.4,-1.6]],.25,b.blackMetal),2.7,5.2,0,0,Math.PI/2,0));return he(h(i(1),.08,0,0),h(i(-1),-.08,0,0),h(D(.22,.22,4.8,b.steelDark),0,5.2,0,0,0,Math.PI/2),e,h(D(.55,.55,1.6,b.blackMetal),0,.5,0,Math.PI/2),h(oi([[-1.2,2],[-1.8,3.5],[-1.2,4.8]],.12,b.steelDark),0,0,0))}function ay(){let i=new ct;i.moveTo(-2,8),i.lineTo(4,8),i.lineTo(4,6.6),i.lineTo(-.6,6.6),i.quadraticCurveTo(-1.2,6.6,-1.2,5.8),i.lineTo(-1.2,-5.8),i.quadraticCurveTo(-1.2,-6.6,-.6,-6.6),i.lineTo(4,-6.6),i.lineTo(4,-8),i.lineTo(-2,-8),i.quadraticCurveTo(-3,-8,-3,-7),i.lineTo(-3,7),i.quadraticCurveTo(-3,8,-2,8);let e=he(h(D(.4,.4,13,b.steel),0,-3.6),h(D(.9,.7,.5,b.steelDark),0,2.9),h(D(.3,.3,6,b.steel),0,-10.4,0,0,0,Math.PI/2),h(We(new qt(.45,14,10),b.steel),3,-10.4,0),h(We(new qt(.45,14,10),b.steel),-3,-10.4,0));e.position.x=2.6;let t=he(Ut(i,1.4,b.red,.15),e);return t.userData.screw=e,t}function oy(){let i=he(h(P(48,.7,2.6,b.viceBlue),0,0,0),h(P(48,2.4,.6,b.viceBlue),0,-1.1,0)),e=he(h(fe(3,6,3.4,.3,b.viceBlue),22.5,1.8,0),h(D(.45,.45,7,b.steel),19.5,2.8,0,0,0,Math.PI/2),h(fe(1.4,3.6,2.8,.2,b.steelDark),15.5,2.8,0),h(D(.25,.25,5,b.steel),24.5,2.8,0,Math.PI/2)),t=he(h(fe(3,6,3.4,.3,b.viceBlue),-14,1.8,0),h(D(.25,.25,4.4,b.steel),-14,-1,0,Math.PI/2));return he(i,e,t)}function ly(){let i=he(),e=new oe({color:2768814,roughness:.38}),t=new oe({color:15909166,roughness:.45}),n=b.black,s=new oe({color:2829617,metalness:.5,roughness:.45}),r=new oe({color:9278620,metalness:.8,roughness:.35});i.add(h(P(.5,30,1.9,s),0,15,0));let a=he(h(fe(2.6,3.4,3.2,.5,e),0,-.2,.2),h(fe(2.4,2.2,1.6,.4,n),0,-.4,1.7),h(fe(2.4,1.8,7.4,.6,e),0,.6,-4.6),h(fe(2.4,2.6,2.2,.6,e),0,1.4,-8.1),h(fe(2.2,1.2,3.6,.3,e),0,1.8,-3.2,-.55,0,0),h(fe(1.1,.5,1.1,.2,t),0,2.5,-7.3),h(fe(3.2,.9,3.2,.35,n),0,2.9,-8.6)),o=f=>h(fe(.08,2.6,3.4,.03,t),f,.4,-.6),l=he(h(fe(2.8,4.2,6.4,.6,e),0,.2,-.9),o(1.42),o(-1.42),h(fe(2.4,1.8,4.6,.5,e),0,-.4,-5.6),h(fe(3.2,.9,3.2,.35,n),0,-1.2,-8.4)),c=he(h(fe(2.1,2.2,7.4,.8,e),0,.5,3.7),h(fe(2.2,1.4,6.2,.6,n),0,-.6,4.2));c.position.set(0,.6,1.6),c.rotation.x=-.28;let d=he(h(fe(.9,.55,4.6,.25,r),0,0,2.3));d.position.set(0,-1.9,1.9),d.rotation.x=-.12;let u=he(l,c,d);return u.position.y=18,i.add(a,u),i.userData.mov=u,i}var Is=new oe({color:13225683,metalness:.7,roughness:.35});function cy(){return he(h(P(10.4,2.6,.14,Is),0,6.85,-1.03),h(P(10.4,.14,2.2,Is),0,8.27,-2.06),h(P(10.4,2.6,.14,Is),0,6.85,.13),h(P(10.4,.14,2.2,Is),0,8.17,1.16))}function hy(){let i=Ef();i.traverse(n=>{n.isMesh&&(n.material=[].concat(n.material).map(s=>{let r=s.clone();return r.transparent=!0,r.opacity=.18,r.depthWrite=!1,r}),n.castShadow=!1)});let e=cy(),t=he(i,e);return t.userData.anim=n=>{let s=n%4/4,r=a=>a*a*(3-2*a);e.position.y=s<.35?6*(1-r(s/.35)):s<.65?0:s<.9?6*r((s-.65)/.25):6},t}var ce={green:new oe({color:3107669,metalness:.35,roughness:.45}),grey:new oe({color:7306631,metalness:.45,roughness:.45}),blue:new oe({color:3104655,metalness:.35,roughness:.45}),cream:new oe({color:14275263,metalness:.25,roughness:.5}),orange:new oe({color:15234346,metalness:.25,roughness:.42}),yellow:new oe({color:15909166,metalness:.2,roughness:.45}),dark:new oe({color:2764082,metalness:.4,roughness:.5}),glass:new oe({color:2240576,metalness:.6,roughness:.12,transparent:!0,opacity:.75}),clear:new oe({color:13625077,metalness:.1,roughness:.05,transparent:!0,opacity:.28,depthWrite:!1}),grit:new oe({map:Ds((i,e)=>{i.fillStyle="#4a3b2c",i.fillRect(0,0,e,e);for(let t=0;t<5e3;t++)i.fillStyle=Math.random()<.5?"#2c2219":"#6b5843",i.fillRect(Math.random()*e,Math.random()*e,1.6,1.6)},256,[4,1]),roughness:.95}),red:new oe({color:13772334,roughness:.4}),machRed:new oe({color:11874350,metalness:.35,roughness:.45}),lightOrange:new oe({color:15902821,metalness:.25,roughness:.5}),chevron:new oe({map:(()=>{let i=document.createElement("canvas");i.width=256,i.height=32;let e=i.getContext("2d");e.fillStyle="#1b1b1d",e.fillRect(0,0,256,32),e.fillStyle="#f2c12e";for(let n=-2;n<12;n++)e.beginPath(),e.moveTo(n*28,32),e.lineTo(n*28+14,32),e.lineTo(n*28+30,0),e.lineTo(n*28+16,0),e.fill();let t=new An(i);return t.colorSpace=tn,t})(),roughness:.5}),glow:new oe({color:16734762,emissive:16726544,emissiveIntensity:1.2,roughness:.6}),powder:new oe({map:Ds((i,e)=>{i.fillStyle="#e9eef2",i.fillRect(0,0,e,e);for(let t=0;t<4e3;t++)i.fillStyle=Math.random()<.5?"#cfd8df":"#ffffff",i.beginPath(),i.arc(Math.random()*e,Math.random()*e,1.2,0,7),i.fill()},256,[2,2]),roughness:.9})},Sr=(i,e=b.steel,t=3)=>{let n=he(h(new Ie(new Zt(i,i*.09,10,36),e),0,0,0),h(D(i*.18,i*.18,i*.3,e),0,0,0,Math.PI/2));for(let s=0;s<t;s++){let r=s*2*Math.PI/t;n.add(h(P(i,i*.08,i*.08,e),Math.cos(r)*i/2,Math.sin(r)*i/2,0,0,0,r))}return n.add(h(D(i*.09,i*.09,i*.5,b.black),Math.cos(.3)*i,Math.sin(.3)*i,i*.25,Math.PI/2)),n},dy=i=>he(h(D(.45,.45,i,b.steel),0,i/2,0),h(We(new qt(1.1,18,12),b.black),0,i+.6,0)),li=()=>he(h(D(1.4,1.4,1,ce.yellow),0,0,0,Math.PI/2),h(We(new qt(1.5,20,12,0,Math.PI*2,0,Math.PI/2),ce.red),0,0,.5,Math.PI/2));function wf(){let i=new ct;i.absarc(0,25,7,0,Math.PI,!1),i.absarc(0,-25,7,Math.PI,2*Math.PI,!1),i.holes.push(new Ft().absarc(0,-25,6.4,0,-Math.PI,!0).absarc(0,25,6.4,Math.PI,0,!0));let e=Ut(i,15,ce.grit);return e.position.set(0,85,-4),e.rotation.y=-Math.PI/2,he(h(P(44,3,40,ce.dark),0,1.5,0),h(fe(40,48,36,1.5,ce.grey),0,27,0),h(fe(30,36,1,.6,ce.grey),0,27,18.2),h(P(1,8,1.4,b.steelShiny),11,30,19),h(fe(16,66,8,1,ce.grey),0,83,-16),e,h(D(6.2,6.2,15.4,b.steel,32),0,60,-4,0,0,Math.PI/2),h(D(6.2,6.2,15.4,b.steel,32),0,110,-4,0,0,Math.PI/2),h(fe(15,46,7,.6,b.steelDark),0,85,-4),h(D(8,8,20,ce.yellow,28),-18,60,-4,0,0,Math.PI/2),h(fe(20,11,22,1.2,ce.grey),0,116,-4),h(P(1,9,13,ce.grey),9.6,104,-4),h(P(1,9,13,ce.grey),-9.6,104,-4),h(fe(30,2,20,.6,b.steel),0,58,13.6),h(P(.8,.1,18,ce.dark),6,59.05,13.6),h(fe(6,7,8,.8,ce.grey),0,53.5,9),h(P(19,48,.6,b.steel),0,87,4.4),h(P(.6,48,8,b.steel),9.6,87,.7),h(P(.6,48,8,b.steel),-9.6,87,.7),(()=>{let t=new Ie(new Rn(19,3.2),ce.chevron);return t.position.set(0,64.7,4.72),t})(),h(Bi(),-4,44,18.6),h(li(),8,44,18.6))}ce.go=new oe({color:3126106,roughness:.4});var Bi=()=>he(h(fe(7,3.6,1.6,.4,b.black),0,0,0),h(D(1,1,.8,ce.go),-1.6,0,1,Math.PI/2),h(D(1,1,.8,ce.red),1.6,0,1,Math.PI/2));function Tf(){let i=new ct;i.moveTo(-15,-14),i.lineTo(15,-14),i.lineTo(15,14),i.lineTo(-15,14),i.closePath();for(let a of[-6.3,6.3]){let o=new Ft;o.moveTo(a+.65,-4.5),o.lineTo(a+.65,4.5),o.absarc(a,4.5,.65,0,Math.PI,!1),o.lineTo(a-.65,-4.5),o.absarc(a,-4.5,.65,Math.PI,2*Math.PI,!1),i.holes.push(o)}let e=he(h(fe(40,5,32,1,ce.grey),0,2.5,0),h(D(3.6,3.6,110,b.steel,28),0,58,-9),h(Ut(i,2.6,ce.grey,.3),0,46,3,-Math.PI/2),h(fe(10,6,10,1,ce.grey),0,43,-8),h(D(.6,.6,6,b.steel),7,43,-8,0,0,Math.PI/2),h(fe(24,22,40,2,ce.machRed),0,100,0),h(fe(18,4,32,1.5,ce.machRed),0,112,-2),h(D(8,8,24,ce.machRed,28),0,98,-28,Math.PI/2),h(D(2.4,2.4,10,b.steel),0,84,10),h(fn([[2.2,0],[2.2,4],[1.6,5.5],[.9,6.2],[0,6.3]].reverse().map(([a,o])=>[a,-o]),b.steelShiny,28),0,79,10),h(yf(),0,75.5,10,Math.PI)),t=he(h(D(1.8,1.8,2.2,b.steelDark),0,0,0,0,0,Math.PI/2));for(let a=0;a<3;a++){let o=dy(13);o.rotation.x=.5+a*2*Math.PI/3,t.add(o)}t.position.set(17.2,95,6),e.add(h(D(1,1,4.4,b.steel),14.2,95,6,0,0,Math.PI/2),t);let n=-8,s=22.5,r=Math.hypot(n,s-10);return e.add(h(D(3,3,1.4,b.steelDark),0,86,10),h(P(r,1.2,1.4,b.steelDark),n/2,86,(10+s)/2,0,Math.atan2(-(s-10),n),0),h(D(.38,.38,19,b.knurl),n,95.5,s),h(P(3.6,1.6,4.6,ce.machRed),n,96,22),h(D(1,1,.8,b.brass,6),n,97.3,s),h(D(1,1,.8,b.brass,6),n,98.3,s),h(P(.2,9,1.6,b.steelShiny),n-2.2,94,20.2)),e.add(h(li(),6,104,20.4),h(Bi(),-12.4,101,6,0,-Math.PI/2,0),h(new Ie(new Et(5,5,12,28,1,!0),ce.clear),0,80,10)),e}function Af(){return he(h(fe(26,8,56,2,ce.blue),0,4,0),h(fe(20,24,10,2,ce.blue),0,18,-22),h(fe(9,8,44,2,ce.blue),0,31,-3),h(fe(4,6,6,.8,ce.blue),0,31,22),h(D(1.2,1.2,2,b.black),0,36,-23),h(fe(28,2,30,.8,b.steel),0,20,14),h(fe(6,11,6,1,ce.blue),0,13.5,14),h(D(1.4,1.4,.1,b.black),0,21.05,22),h(D(.06,.06,18,b.steelShiny,8),0,19,22),h(D(.35,.35,6.3,b.steel),1.2,24.85,22),h(P(2.6,.3,1.6,b.steel),1.2,21.55,22.4),h(P(3.8,6,.2,ce.clear),0,25,24.8),h(P(.2,6,3.6,ce.clear),1.9,25,23),h(P(.2,6,3.6,ce.clear),-1.9,25,23),h(oi([[-1.5,30,22],[-3,27,25],[-.8,23,23.5]],.3,ce.clear),0,0,0),h(D(7,7,14,ce.dark,24),8,12,-18,0,0,Math.PI/2),h(Bi(),0,4,28.4),h(li(),8,4,28.4))}function Rf(){let i=he(h(fe(24,40,30,1.5,ce.cream),-34,20,0),h(fe(24,40,30,1.5,ce.cream),34,20,0),h(fe(96,4,34,1,ce.dark),0,42,-2),h(fe(92,10,20,1,ce.cream),0,49,0),h(P(92,1,2,b.steelShiny),0,54.5,-6),h(P(92,1,2,b.steelShiny),0,54.5,6),h(fe(28,30,26,2,ce.cream),-34,69,0),h(D(1.8,1.8,1.4,ce.dark),-26,78,13.2,Math.PI/2),h(D(1.8,1.8,1.4,ce.dark),-38,78,13.2,Math.PI/2),h(D(8,8,7,b.steel,36),-16.5,66,0,0,0,Math.PI/2),h(D(.6,.6,90,b.steel),0,46,10.5,0,0,Math.PI/2));for(let n=0;n<3;n++){let s=n*2*Math.PI/3;i.add(h(P(3,2.2,2.6,b.steelDark),-12.5,66+Math.cos(s)*5.6,Math.sin(s)*5.6,s,0,0))}i.add(h(D(1.6,1.6,10,b.brass),-7.5,66,0,0,0,Math.PI/2));let e=he(h(fe(16,6,24,.8,ce.cream),0,57,0),h(fe(16,12,4,.8,ce.cream),0,49,12.5),h(fe(10,3,14,.6,ce.cream),0,61.5,5),h(fe(6,3,7,.5,ce.cream),0,64.5,7),h(fe(4.4,4,4.4,.4,b.steelDark),0,68,8),h(P(1,1,5,b.steel),0,67.6,5),h(Sr(3.4),3,49,17.6),h(Sr(2.4),0,61.5,15.4),h(D(.4,.4,3,b.steel),3,49,15.6,Math.PI/2),h(D(.35,.35,3.4,b.steel),0,61.5,13.4,Math.PI/2));e.position.x=8,i.add(e);let t=he(h(fe(14,18,14,1.2,ce.cream),0,64,0),h(D(1.8,1.8,8,b.steel),-9,66,0,0,0,Math.PI/2),h(D(0,.6,2.4,b.steelShiny),-14,66,0,0,0,Math.PI/2),h(Sr(3.6),9,66,0));return t.children[3].rotation.y=Math.PI/2,t.position.x=34,i.add(t,h(li(),-24,72,13.4),h(Bi(),-34,63,13.4)),i}function Cf(){let i=he(h(fe(6,40,30,1,ce.green),-40,20,0),h(fe(6,40,30,1,ce.green),40,20,0),h(P(86,3,6,ce.green),0,42,-4),h(P(86,3,6,ce.green),0,42,4),h(fe(18,22,18,2,ce.green),-34,54,0),h(D(7,7,18,ce.dark,28),-34,54,-16,Math.PI/2),h(D(1.4,1.4,6,b.steel),-22,58,0,0,0,Math.PI/2),h(D(2.6,2.6,1,b.steel,28),-19.5,58,0,0,0,Math.PI/2));for(let s=0;s<4;s++){let r=s*Math.PI/2+Math.PI/4;i.add(h(P(.6,.5,.5,b.steelShiny),-18.8,58+Math.cos(r)*1.6,Math.sin(r)*1.6))}let e=he(h(fe(12,16,12,1.2,ce.green),0,51,0),h(D(1.4,1.4,6,b.steel),-7,58,0,0,0,Math.PI/2),h(D(0,1,2,b.steelShiny),-10.5,58,0,0,0,Math.PI/2),h(Sr(6.8,b.black),8,58,0));e.children[3].rotation.y=Math.PI/2,e.position.x=29;let t=h(P(37,5,5,b.beech),-.5,58,0),n=he(h(fe(6,3,14,.6,b.steelDark),0,45,6),h(D(.9,.9,9.5,b.steel),0,51.25,4.4),h(P(26,1.2,1.4,b.steel),0,56.6,4.4),h(D(.6,.6,3,b.black),3,46,13,Math.PI/2));return he(i,e,t,n,h(li(),-34,60,9.4),h(Bi(),-34,50,9.4))}function Pf(){let i=he(h(D(1.8,1.8,2.4,b.steelDark),0,0,0,0,0,Math.PI/2),h(D(.8,.8,22,b.steel),1.2,6,9.5,1.1,0,0),h(We(new qt(2.2,18,12),b.black),1.2,11.2,19.4));return i.position.set(8.6,62,0),he(h(fe(34,5,30,1,ce.grey),0,2.5,0),h(fe(6,5,8,.8,ce.grey),0,7.5,4),h(fe(30,3,22,.8,b.steel),0,10.5,4),h(fe(30,6,2,.5,b.steel),0,15,1),h(P(26,6,4,b.beech),0,15,4),h(fe(18,6,1.6,.4,b.steel),0,15,6.8),h(fe(6,6,2,.5,ce.grey),0,15,14),h(D(.6,.6,7,b.steel),0,15,11,Math.PI/2),h(Sr(3),0,15,15.6),h(fe(2,5,6,.4,ce.grey),17,5,4),h(D(.8,.8,6,b.steel),20,5,4,0,0,Math.PI/2),h(Sr(5.4),23.2,5,4,0,Math.PI/2,0),h(D(3,3,70,b.steel,24),0,40,-11),h(fe(14,18,14,1.5,ce.orange),0,56,-3),h(D(6.5,6.5,22,ce.orange,28),0,74,-3),h(fe(10,4,10,1,ce.dark),0,86,-3),h(fe(6,5,6,.6,ce.grey),0,47,4),h(P(1.6,8.5,1.6,b.steelShiny),0,40.25,4),h(P(1.65,2.4,.8,ce.dark),0,41.5,4),h(D(1.13,.85,.6,b.steelShiny,4),0,35.7,4,0,Math.PI/4,0),h(D(.6,.6,2,b.steelDark),0,34.9,4),h(D(.6,0,1,b.steelShiny),0,33.4,4),h(P(.3,15,3,b.black),7.05,56,0),i,h(P(4,1.6,4,ce.orange),-9,48,-3),h(D(.38,.38,11.3,b.knurl),-9,41.85,-3),h(D(1,1,.8,b.brass,6),-9,46.6,-3),h(D(1,1,.8,b.brass,6),-9,45.6,-3),h(D(4,4,2.4,ce.grey),0,15.6,-11),h(P(12,1.6,2,ce.grey),-4.5,15.6,-7,0,Math.atan2(-8,-9)+Math.PI,0),h(P(3.4,1.2,3.4,b.steelDark),-9,16.8,-3),h(li(),0,60,4.2),h(Bi(),-7.2,56,-3,0,-Math.PI/2,0))}function If(){let i=new oe({map:Ds((M,C)=>{M.fillStyle="#b8323a",M.fillRect(0,0,C,C);for(let T=0;T<5e3;T++)M.fillStyle=Math.random()<.5?"#952630":"#d9545b",M.fillRect(Math.random()*C,Math.random()*C,1.4,1.4)},256,[3,3]),roughness:.95}),e=14,t=31.2,n=new Ie(new Rn(31,25,28,22),i);n.rotation.x=-Math.PI/2,n.position.set(e,t,0);let s=n.geometry.attributes.position,r=s.array.slice(),a=he(h(fe(36,1.2,30,.5,ce.lightOrange),0,.6,15),h(P(10,1,1.2,b.black),0,1.5,29.2));a.position.set(e,34,-15),a.rotation.x=-1.85;let o=he(h(P(80,4,36,ce.dark),-3,2,0),h(fe(36,26,30,1.2,ce.lightOrange),e,17,0),h(P(36,4,2.5,ce.lightOrange),e,32,13.75),h(P(36,4,2.5,ce.lightOrange),e,32,-13.75),h(P(2.5,4,25,ce.lightOrange),e-16.75,32,0),h(P(2.5,4,25,ce.lightOrange),e+16.75,32,0),h(P(31,.1,25,ce.dark),e,30.05,0),n,a,h(D(.5,.5,34,b.steel),e,34,-15,0,0,Math.PI/2),h(fe(30,40,30,1.5,ce.lightOrange),-20,24,0),h(fe(24,26,1.4,.8,ce.lightOrange),-20,23,15.6),h(P(14,8,.4,ce.glass),-20,27,16.4),h(P(12,.6,.3,ce.glow),-20,25.5,16.1),h(D(.7,.7,10,b.steelShiny),-10,23,17.8),h(P(1,1,1.6,b.steelShiny),-10,27.5,16.9),h(P(1,1,1.6,b.steelShiny),-10,18.5,16.9),h(D(1.6,1.6,1,b.black),-28,40,15.4,Math.PI/2),h(D(.7,.7,.6,ce.red),-23,40,15.3,Math.PI/2),h(Bi(),e,12,15.4),h(fe(8,7,8,1,ce.blue),42,3.5,6),h(oi([[42,7,6],[42,10,2],[37,8,1],[32,8,1]],.7,b.black),0,0,0)),l=1400,c=new Qn(new qt(.13,5,3),new oe({roughness:.8}),l),d=new Bt,u=[];for(let M=0;M<l;M++)u.push([e+(Math.random()-.5)*30,(Math.random()-.5)*24,Math.random()*9,.6+Math.random()*1.6,.3+Math.random()*Math.random()*4.2,Math.random()*6]),c.setColorAt(M,new tt().setHSL(.99+Math.random()*.02,.62,.4+Math.random()*.22));let f=document.createElement("canvas");f.width=f.height=64;let p=f.getContext("2d"),_=p.createRadialGradient(32,32,0,32,32,32);_.addColorStop(0,"rgba(230,90,95,.9)"),_.addColorStop(1,"rgba(230,90,95,0)"),p.fillStyle=_,p.fillRect(0,0,64,64);let y=160,m=new Float32Array(y*3),x=[];for(let M=0;M<y;M++)x.push([e+(Math.random()-.5)*28,(Math.random()-.5)*22,Math.random()*9,.3+Math.random()*.6]);let S=new Xt;S.setAttribute("position",new Nn(m,3));let A=new Yr(S,new ir({map:new An(f),size:5,transparent:!0,opacity:.28,depthWrite:!1,sizeAttenuation:!0}));return o.add(c,A),o.userData.anim=M=>{for(let C=0;C<s.count;C++){let T=r[C*3],g=r[C*3+1];s.setZ(C,.05*Math.sin(T*2.3+M*7)+.04*Math.sin(g*2.9-M*6.3))}s.needsUpdate=!0,n.geometry.computeVertexNormals(),u.forEach(([C,T,g,w,B,I],L)=>{let Z=.5-.5*Math.cos(M*w*2.2+g);d.position.set(Math.min(e+15.2,Math.max(e-15.2,C+.9*Math.sin(M*w+I))),t+.15+B*Z+.25*Math.abs(Math.sin(M*9*w+g)),Math.max(-12,Math.min(12,T+.9*Math.cos(M*w*.8+I)))),d.updateMatrix(),c.setMatrixAt(L,d.matrix)}),c.instanceMatrix.needsUpdate=!0,x.forEach(([C,T,g,w],B)=>{m[B*3]=C+1.5*Math.sin(M*w+g),m[B*3+1]=t+1+2*(.5-.5*Math.cos(M*w*1.3+g)),m[B*3+2]=T+1.5*Math.cos(M*w*.9+g)}),S.attributes.position.needsUpdate=!0},o.userData.anim(0),o}function Df(){ce.wire=new oe({color:16723992,emissive:16718336,emissiveIntensity:1.4,roughness:.5});let i=he(h(D(.09,.09,60,ce.wire,8),0,9.3,-6.6,0,0,Math.PI/2),h(D(.09,.09,60,ce.wire,8),0,9.3,-5.4,0,0,Math.PI/2)),e=he(h(P(62,.4,6.4,b.black),0,1.4,3.2),h(P(62,1.4,.3,b.black),0,.7,6.3),h(P(.3,1.4,6.4,b.black),-30.85,.7,3.2),h(P(.3,1.4,6.4,b.black),30.85,.7,3.2));e.position.set(0,9.6,-9.2);let t=he(h(fe(70,3,22,.8,b.black),0,1.5,0),h(fe(66,6,18,.8,ce.yellow),0,6,0),h(P(64,.5,11,Is),0,9.25,2.5),h(P(62,.2,2.6,ce.dark),0,9.1,-6),h(P(62,.6,1.6,Is),0,9.3,-3.9),h(P(62,.6,1.6,Is),0,9.3,-8.1),i,e,h(D(.35,.35,62,b.steel),0,9.6,-9.2,0,0,Math.PI/2),h(fe(4,9,20,.6,b.black),-34,5,0),h(fe(4,9,20,.6,b.black),34,5,0),h(fe(5,3,3,.4,b.black),-30,6,10.2),h(D(.6,.6,.6,ce.red),-30,6,11.8,Math.PI/2),h(oi([[-36,4,-6],[-42,3,-10],[-50,1,-12]],.4,b.black),0,0,0)),n=s=>s*s*(3-2*s);return t.userData.anim=s=>{ce.wire.emissiveIntensity=1.5+1.1*Math.sin(s*4);let r=s%7/7;e.rotation.x=-Math.PI*.97*(r<.35?1:r<.47?1-n((r-.35)/.12):r<.8?0:n((r-.8)/.12>1?1:(r-.8)/.12))},t.userData.anim(0),t}ce.copper=new oe({color:13136954,metalness:.9,roughness:.3});function uy(){let i=new oe({color:15909166,metalness:.25,roughness:.45}),e=new oe({color:1908257,metalness:.35,roughness:.5}),t=new oe({color:16773824,emissive:16765562,emissiveIntensity:3,transparent:!0,opacity:0}),n=he(h(fe(24,3,30,1,e),0,1.5,-4),h(fe(22,17,24,1.2,i),0,11,-6),h(fe(22.6,3,24.6,1,e),0,20.5,-6),h(P(.3,9,16,e),11.2,11,-6),h(P(.3,9,16,e),-11.2,11,-6),h(fe(12,7,1.4,.5,e),0,12,6.2),h(D(1.6,1.6,1,b.steelShiny),-3,12.5,7.2,Math.PI/2),h(li(),3.4,12.5,7.2),h(D(1.4,1.4,24,b.steelShiny),0,7,14,Math.PI/2),h(D(2,2,4,b.steelShiny),0,7,26),h(D(1,1,4,ce.copper),0,10.6,26),h(D(.3,1,1.4,ce.copper),0,13.2,26),h(P(.6,.25,10,b.steel),0,14,25)),s=new Xe;s.position.set(0,24,-8),n.add(s),s.add(h(P(5,4,6,b.steel),0,0,0),h(D(1.4,1.4,34,b.steelShiny),0,0,17,Math.PI/2),h(D(2,2,4,b.steelShiny),0,0,34),h(D(1,1,4,ce.copper),0,-3.6,34),h(D(1,.3,1.4,ce.copper),0,-6.2,34),h(D(.7,.7,30,b.steelShiny),0,7.5,13,1.1,0,0),h(D(1.4,1.4,7,e),0,15.8,29.5,1.1,0,0));let r=h(We(new qt(.7,12,8),t),0,14.3,26);return n.add(r),n.userData.anim=a=>{let o=a%4/4,l=u=>u*u*(3-2*u),c=o<.3?l(o/.3):o<.6?1:o<.85?1-l((o-.6)/.25):0;s.rotation.x=.012+.09*c;let d=o>.32&&o<.5?Math.abs(Math.sin((o-.32)*60)):0;t.opacity=d,r.scale.setScalar(.6+d)},n}function fy(i=104,e=72){let t=new oe({color:9076594,roughness:.8}),n=new oe({color:3948614,metalness:.5,roughness:.4}),s=new ct;s.moveTo(0,0),s.lineTo(i,0),s.lineTo(0,i),s.closePath();let r=Ut(s,3,t);r.rotation.x=Math.PI/2,r.position.y=e-1.5;let a=he(r);for(let[o,l]of[[4,4],[i-8,4],[4,i-8]])a.add(h(P(3,e-3,3,n),o,(e-3)/2,l));return a.add(h(P(i-14,2,2,n),i/2-3,14,4),h(P(2,2,i-14,n),4,14,i/2-3)),a}var ss=new oe({color:12856110,metalness:.35,roughness:.32}),Oi=new oe({color:9313055,metalness:.25,roughness:.5}),br=new oe({color:15264494,metalness:1,roughness:.18}),py=new oe({color:1908e3,roughness:.6});function Lf(i,e=0){let t=new Xe;t.add(i),i.updateMatrixWorld(!0);let n=new Ct().setFromObject(i).getSize(ee(0,0,0));n.z<=n.x&&n.z<=n.y?i.rotation.x=-Math.PI/2:n.x<=n.y&&n.x<=n.z&&(i.rotation.z=Math.PI/2);let s=new Xe;s.add(t),t.rotation.y=e,s.updateMatrixWorld(!0);let r=new Ct().setFromObject(t),a=r.getCenter(ee(0,0,0));return t.position.set(-a.x,-r.min.y,-a.z),s}function my(i){let e=r=>{let a=new ct;return r.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.closePath(),a},t=r=>{let a=new Ft;return r.forEach(([o,l],c)=>c?a.lineTo(o,l):a.moveTo(o,l)),a.closePath(),a},n,s=5;switch(i){case"T":n=e([[0,6],[0,7],[5,7],[5,6],[3,6],[3,0],[2,0],[2,6]]);break;case"O":{n=new ct;let r=2.2;n.moveTo(r,0),n.lineTo(5-r,0),n.absarc(5-r,r,r,-Math.PI/2,0),n.lineTo(5,7-r),n.absarc(5-r,7-r,r,0,Math.PI/2),n.lineTo(r,7),n.absarc(r,7-r,r,Math.PI/2,Math.PI),n.lineTo(0,r),n.absarc(r,r,r,Math.PI,Math.PI*1.5);let a=new Ft,o=1.3;a.moveTo(1+o,1),a.absarc(1+o,1+o,o,-Math.PI/2,-Math.PI,!0),a.lineTo(1,6-o),a.absarc(1+o,6-o,o,Math.PI,Math.PI/2,!0),a.lineTo(4-o,6),a.absarc(4-o,6-o,o,Math.PI/2,0,!0),a.lineTo(4,1+o),a.absarc(4-o,1+o,o,0,-Math.PI/2,!0),n.holes.push(a);break}case"L":n=e([[0,0],[4.5,0],[4.5,1],[1,1],[1,7],[0,7]]),s=4.5;break;case"I":n=e([[0,0],[1.1,0],[1.1,7],[0,7]]),s=1.1;break;case"B":n=e([[0,0],[3.8,0],[5,1.2],[5,2.7],[4.2,3.5],[5,4.3],[5,5.8],[3.8,7],[0,7]]),n.holes.push(t([[1,1],[1,3],[3.6,3],[4,2.6],[4,1.4],[3.6,1]]),t([[1,4],[1,6],[3.6,6],[4,5.6],[4,4.4],[3.6,4]]));break;case"R":n=e([[0,0],[1,0],[1,3],[2.6,3],[4,0],[5.2,0],[3.7,3.15],[4.2,3.5],[5,4.3],[5,5.8],[3.8,7],[0,7]]),n.holes.push(t([[1,4],[1,6],[3.6,6],[4,5.6],[4,4.4],[3.6,4]])),s=5.2;break;case"A":n=e([[0,0],[1.15,0],[1.6,1.8],[3.4,1.8],[3.85,0],[5,0],[3.05,7],[1.95,7]]),n.holes.push(t([[1.9,2.8],[2.5,5.2],[3.1,2.8]]));break;case"Y":n=e([[0,7],[1.2,7],[2.5,4.4],[3.8,7],[5,7],[3,3.2],[3,0],[2,0],[2,3.2]]);break;default:return{s:null,w:3}}return{s:n,w:s}}function gy(i,e,t,n=.35){let s=new Xe,r=0,a=e/7;for(let l of i){let{s:c,w:d}=my(l);if(c){let u=new Ie(new zt(c,{depth:n/a,bevelEnabled:!0,bevelThickness:.12,bevelSize:.12,bevelSegments:2}),t);u.position.x=r,s.add(u)}r+=d+1.1}s.scale.setScalar(a);let o=new Xe;return s.position.x=-(r-1.1)*a/2,o.add(s),o}var xy=new oe({color:1315862,metalness:.4,roughness:.35});function _y(i="TOOL LIBRARY"){let r=new Xe,a=he(h(fe(46,1.2,22,.5,ss),0,.6,0),h(fe(46,20,.8,.3,ss),0,20/2,22/2-.8/2),h(fe(46,20,.8,.3,ss),0,20/2,-22/2+.8/2),h(fe(.8,20,22,.3,ss),46/2-.8/2,20/2,0),h(fe(.8,20,22,.3,ss),-46/2+.8/2,20/2,0),h(P(46-2*.8,.2,22-2*.8,Oi),0,1.25,0),h(P(46-2*.8,18,.1,Oi),0,20/2,-22/2+.8+.05),h(P(46-2*.8,18,.1,Oi),0,20/2,22/2-.8-.05),h(P(.1,18,22-2*.8,Oi),46/2-.8-.05,20/2,0),h(P(.1,18,22-2*.8,Oi),-46/2+.8+.05,20/2,0)),o=gy(i,3.6,xy);o.position.set(0,20*.5,22/2+.02),a.add(o);for(let _ of[-1,1])a.add(h(P(3,4,.8,br),_*20,20-3.5,22/2+.3),h(P(2.2,1.4,1.2,br),_*20,20-1.2,22/2+.5));a.add(h(P(43,.5,.4,Oi),0,4,22/2+.15),h(P(43,.5,.4,Oi),0,20-2.6,22/2+.15)),r.add(a);let l=new Xe,c=46/2-.8-.6,d=22/2-.8-.6,u=(_,y,m,x,S,A=1)=>{let M=Lf(_,S);M.scale.setScalar(A),M.updateMatrixWorld(!0);let C=new Ct().setFromObject(M),T=C.getSize(ee(0,0,0)),g=Math.min(1,2*c/T.x,2*d/T.z);M.scale.multiplyScalar(g*.96),M.updateMatrixWorld(!0),C=new Ct().setFromObject(M);let w=(C.max.x-C.min.x)/2,B=(C.max.z-C.min.z)/2;M.position.set(Math.max(-c+w,Math.min(c-w,y)),m,Math.max(-d+B,Math.min(d-B,x))),M.updateMatrixWorld(!0);let I=new Ct().setFromObject(M);I.max.y>20-1.2&&(M.position.y-=I.max.y-(20-1.2)),l.add(M)};u(Nh(),0,1.4,1,0,1.05),u(mf(),-1,3.4,-3,0),u(Dh(),-2,6,-7,0),u(xf(),4,6.6,4,.08),u(vf(),-10,7,1,.15),u(Uh(),-12,10,-3,.2),u(Mf(),12,9.8,-4,.4),u(Lh(),10,11,4,.25),u(Fh(),-2,13.2,6,Math.PI/2+.3),u(Ol(),4,13.6,-5,Math.PI/2-.2),u(Ol(),-6,14,-6,Math.PI/2+.25),u(Vl(),-14,14,5,.5),u(pf(),15,14.4,6,.9),r.add(l);let f=[];for(let _ of[-1,1]){let y=he(h(fe(22.4,6,21,1,ss),0,3,0),h(P(22.6,1.2,21.4,ss),0,.6,0),h(P(20,.5,18.5,Oi),0,6.01,0),h(P(.5,5,18.5,Oi),_*-3,3.6,0));y.add(h(D(.45,.45,3,b.brass),_*5,6.6,-3,0,0,Math.PI/2),h(D(.45,.45,3,b.brass),_*5,6.6,-1,0,0,Math.PI/2),h(P(4,.8,2,b.steelShiny),_*7,6.5,4)),y.add(h(fe(46/2-.6,1.2,21,.6,ss),0,6.6,0));let m=h(P(.8,9,1,br),0,0,0),x=h(P(.8,9,1,br),0,0,0);r.add(m,x),r.add(y),f.push({t:y,sx:_,arm1:m,arm2:x})}let p=he(h(D(.45,.45,7,br),-11,4,0),h(D(.45,.45,7,br),11,4,0),h(D(1.1,1.1,22,py),0,7.5,0,0,0,Math.PI/2));return r.add(p),r.userData.open=_=>{_=Math.max(0,Math.min(1,_));let y=_*_*(3-2*_);f.forEach(({t:m,sx:x,arm1:S,arm2:A})=>{let M=x*46/4,C=M+x*46*.5*y,T=20+.2+7*Math.sin(y*Math.PI)*.8-1.2*y;m.position.set(C,T,0);let g=x*46*.18,w=17,B=C-x*2,I=T+1.5,L=Math.hypot(B-g,I-w);[S,A].forEach((Z,K)=>{Z.scale.y=L/9,Z.position.set((g+B)/2,(w+I)/2,(K?-1:1)*(22/2+.25)),Z.rotation.z=Math.atan2(-(B-g),I-w),Z.visible=_>.02})}),p.position.y=20,p.visible=_<.05},r.userData.open(0),r}function Nf(i={}){let a=he(h(fe(120,6,48,.6,gf),0,78-6/2,0));for(let l of[-1,1])for(let c of[-1,1])a.add(h(P(6,72,6,b.beech),l*(120/2-8),72/2,c*(48/2-6)));for(let l of[-1,1])a.add(h(P(110,6,3,b.beech),0,69,l*(48/2-4.5)));a.add(h(P(110,2.5,38,b.beech),0,16,0));for(let l of[-1,1])a.add(h(P(4,6,38,b.beech),l*(120/2-8),16,0));if(!i.bare){let l=Sf();l.position.set(-120/2+24,78-4.5,48/2+1),a.add(l)}let o=(l,c,d,u,f=78,p=!0)=>{let _=p?Lf(l,u):(()=>{let y=new Xe,m=new Xe;m.add(l),y.add(m),m.rotation.y=u,y.updateMatrixWorld(!0);let x=new Ct().setFromObject(m),S=x.getCenter(ee(0,0,0));return m.position.set(-S.x,-x.min.y,-S.z),y})();return _.position.set(c,f,d),a.add(_),_};if(!i.bare){o(Nh(),18,4,.25),o(Lh(),-20,-10,-.4),o(Uh(),40,-12,1.1),o(Fh(),-2,12,-.9),o(Dh(),5,-14,.1),o(Vl(),-38,-8,.7);let l=h(P(34,2,4.5,b.beech),-28,79,10,0,.15,0);a.add(l)}return i.bare||(o(_f(),-25,0,.2,17.25,!1),o(ff(),12,-4,-.3,17.25,!1),a.add(h(P(30,4.5,9,b.beech),30,19.5,8,0,.1,0),h(P(22,2,4.5,b.beech),-8,18.3,10,0,-.2,0))),a}function Aa(i,e,t){let n=new oe({color:9076594,roughness:.8}),s=new oe({color:3948614,metalness:.5,roughness:.4}),r=he(h(P(i,3,e,n),0,t-1.5,0));for(let a of[-1,1])for(let o of[-1,1])r.add(h(P(3,t-3,3,s),a*(i/2-3),(t-3)/2,o*(e/2-3)));return r.add(h(P(i-6,2,e-6,s),0,14,0)),r}function Ff(i={}){let e=new Xe,t=470,n=370,s=new oe({color:5987940,roughness:.92}),r=new oe({color:6975093,roughness:.9});e.add(h(P(t,4,n,s),0,-2,0),h(P(210,.3,150,r),0,.15,15));let a=[],o=[];e.userData.items=o;let l=(c,d,u,f=0,p=0,_)=>(c.rotation.y=f,c.position.set(d,p,u),e.add(c),c.userData.anim&&a.push(c.userData.anim),_&&(c.userData.key=_,o.push({key:_,obj:c})),c);i.noBench||l(Nf(),0,15,0,0,"bench"),l(Rf(),-75,-150,0,0,"centreLathe"),l(Cf(),70,-150,0,0,"woodLathe"),l(Tf(),-200,-12,Math.PI/2,0,"pillarDrill"),l(wf(),-200,85,Math.PI/2,0,"beltSander"),l(Aa(60,46,72),198,-55),l(Pf(),198,-55,-Math.PI/2,72,"mortiser"),l(Aa(60,46,72),198,40),l(Af(),198,40,-Math.PI/2,72,"fretSaw"),l(Aa(90,40,72),-80,155),l(Df(),-80,155,0,72,"stripHeater"),l(If(),75,150,0,0,"fluidiser");{let c=fy(),d=uy();d.position.set(30,72,30),d.rotation.y=Math.PI/4,d.scale.setScalar(1.35),c.add(d),c.userData.anim=d.userData.anim,l(c,-233,-183,0,0,"spotWelder")}return e.userData.anim=c=>a.forEach(d=>d(c)),e}var Mt={cream:new oe({color:15327951,metalness:.25,roughness:.5}),teal:new oe({color:2914939,metalness:.35,roughness:.45}),glass:new oe({color:13625077,transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1}),hot:new oe({color:16734762,emissive:16726544,emissiveIntensity:.9,roughness:.6}),sheet:new oe({color:15921906,roughness:.4,transparent:!0,opacity:.92}),granule:new oe({color:4891615,roughness:.6}),alu:new oe({color:12896976,metalness:.75,roughness:.32}),cavity:new oe({color:3817286,metalness:.6,roughness:.4,side:en}),kayak:new oe({color:15226410,roughness:.35,metalness:.05}),powder:new oe({color:15966330,roughness:.9}),ovenIn:new oe({color:2761760,emissive:16734746,emissiveIntensity:0,roughness:.8}),win:new oe({color:2234902,emissive:16738848,emissiveIntensity:0,roughness:.2,metalness:.3}),screen:new oe({color:8378111,emissive:2779784,emissiveIntensity:.8})},Ke=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function ef(i){let e=new oe({color:i,roughness:.3}),t=he(h(fe(12,7.2,6,.4,e),0,0,0));for(let n=0;n<4;n++)for(let s=0;s<2;s++)t.add(h(D(1.1,1.1,1.2,e,16),-4.5+n*3,4.2,-1.5+s*3));return t}function yy(){let i=new oe({color:10270936,metalness:.3,roughness:.45}),e=new oe({color:15659250,roughness:.5}),t=new oe({color:2043755,roughness:.5}),n=new oe({color:15909166,metalness:.2,roughness:.45}),s=new oe({color:15895608,roughness:.45,side:en}),r=new Xe;r.add(h(P(48,2,80,i),0,2,-20),h(P(48,50,2,i),0,26,-59),h(P(2,50,80,i),23,26,-20),h(P(2,18,80,i),-23,10,-20),h(P(2,32,36,i),-23,35,-41),h(P(.6,32,42,Mt.glass),-23,35,0),h(P(2.4,1.4,44,b.steelDark),-23.2,19.4,0),h(P(48,30,2,i),0,16,21),h(P(44,19,.6,Mt.glass),0,41,21),h(P(48,1.4,2.4,b.steelDark),0,31.4,21.2),h(P(44,46,1,ce.dark),0,26,-23),h(P(44,.4,42,ce.dark),0,3.2,0),h(P(48,2,6,b.steel),0,51.5,18),h(P(48,2,6,b.steel),0,51.5,-20),h(P(6,2,36,b.steel),21,51.5,-1),h(P(6,2,36,b.steel),-21,51.5,-1),h(P(48,2,36,i),0,51.5,-41));for(let H of[-20,20])for(let U of[-56,28])r.add(h(D(2,2,2,b.black),H,1,U));let a=he(h(P(.4,4,.2,b.black),0,1.6,0));a.position.set(-15,22,33.6),r.add(h(fe(52,26,12,1.5,e),0,15,27),h(P(44,6,.3,t),0,8,33.1),h(P(16,2,.3,new oe({color:12178414})),12,8,33.3),h(D(4,4,1,b.black),-15,22,33,Math.PI/2),h(D(3.5,3.5,.2,b.steelShiny),-15,22,33.6,Math.PI/2),a,h(li(),19,22,33.2),h(P(3,2,.6,ce.red),-20,15,33.2));for(let H=0;H<4;H++)r.add(h(D(1.8,2.2,2.2,b.black,20),-6+H*6,16,34,Math.PI/2),h(P(.4,1.6,.4,b.steelShiny),-6+H*6,16.6,35.2));r.add(h(P(8,3,.3,ce.machRed),-4,22,33.2));for(let H=0;H<3;H++)r.add(h(P(2,2,.4,new oe({color:16747066,emissive:16734736,emissiveIntensity:.5})),-6.4+H*2.4,22,33.4));let o=he(h(P(34,2,26,b.steelDark),0,0,0),h(D(2,2,40,b.steelDark),0,-20,0),h(P(30,4,22,b.beech),0,3,0)),l=new Xe;l.position.y=5,o.add(l),o.position.y=31,r.add(o);let c=new oe({color:5909018,emissive:16728080,emissiveIntensity:0,roughness:.6}),d=he(h(fe(46,10,38,1.5,i),0,0,0),h(P(46,9,.4,n),0,0,19.2),h(D(.8,.8,34,b.black),0,0,21.4,0,0,Math.PI/2),h(P(1.4,1.4,2.4,b.black),-16,0,20.2),h(P(1.4,1.4,2.4,b.black),16,0,20.2),h(P(40,.6,32,c),0,-5.1,0));for(let H=-3;H<=3;H++)d.add(h(P(38,.3,.8,c),0,-5.5,H*4.4));d.position.set(0,62,-40),r.add(d,h(P(2,5,78,b.steelDark),-24.5,55,-20),h(P(2,5,78,b.steelDark),24.5,55,-20));let u=new Xe;u.position.set(0,53.6,-21),r.add(u),u.add(h(P(44,1.6,4,b.steel),0,.8,2),h(P(44,1.6,4,b.steel),0,.8,40),h(P(4,1.6,36,b.steel),-20,.8,21),h(P(4,1.6,36,b.steel),20,.8,21),h(D(1,1,48,b.black),0,2.4,42,0,0,Math.PI/2),h(P(2,2.6,2,b.steelDark),-22,1.6,42),h(P(2,2.6,2,b.steelDark),22,1.6,42),h(D(1.4,1.4,46,b.steelDark),0,0,0,0,0,Math.PI/2));let f=he(h(D(.8,.8,28,b.steel),0,14,0),h(We(new qt(2,14,10),b.black),0,28.5,0),h(D(2.6,2.6,2.4,b.steelDark),0,0,0,0,0,Math.PI/2));f.position.set(25.4,28,4),r.add(f);let p=(H,U)=>Math.max(Math.max(0,Math.abs(H)-15)/3,Math.max(0,Math.abs(U)-11)/7),_=Ph(Ul.tray),y=(H,U)=>9.3*(1-Ke(p(H,U)*1.1)),m=new Xe;r.add(m);let x=new Rn(44,44,66,66);x.rotateX(-Math.PI/2);let S=x.attributes.position,A=We(x,s);m.add(A);let M=document.createElement("canvas");M.width=M.height=440;{let H=M.getContext("2d");H.fillStyle="#fff",H.fillRect(0,0,440,440),H.fillStyle="#000",H.fillRect(60,100,320,240)}let C=new oe({color:15895608,roughness:.45,side:en,alphaMap:new An(M),transparent:!0,alphaTest:.02}),T=new Ie(x,C);T.visible=!1,m.add(T);let g=new Rn(32,24,48,36);g.rotateX(-Math.PI/2);{let H=g.attributes.position;for(let U=0;U<H.count;U++)H.setY(U,_(H.getX(U),H.getZ(U)));g.computeVertexNormals()}let w=We(g,s);w.visible=!1,m.add(w);let B=[];{let H=[[-16,-12],[16,-12],[16,12],[-16,12],[-16,-12]];for(let U=0;U<=160;U++){let z=U/160*4,$=Math.min(3,Math.floor(z)),xe=z-$,W=H[$][0]+(H[$+1][0]-H[$][0])*xe,G=H[$][1]+(H[$+1][1]-H[$][1])*xe;B.push(ee(W,_(W,G)+.35,G))}}let I=new wn(new nn(B,!1,"catmullrom",0),320,.28,6),L=new Ie(I,new oe({color:2764082,roughness:.5}));L.visible=!1,m.add(L);let Z=H=>{for(let U=0;U<S.count;U++)S.setY(U,H(S.getX(U),S.getZ(U)));S.needsUpdate=!0,x.computeVertexNormals()},K=Aa(40,36,44);K.position.set(62,0,0),r.add(K);let F=he(h(P(40,1.5,32,ce.blue),0,.75,0),h(P(40,16,1.5,ce.blue),0,8,15.25),h(P(40,16,1.5,ce.blue),0,8,-15.25),h(P(1.5,16,32,ce.blue),19.25,8,0),h(P(1.5,16,32,ce.blue),-19.25,8,0));F.position.set(62,0,44),r.add(F);let X=We(g,s);X.rotation.x=Math.PI,X.position.set(62,11.2,44),r.add(X);let N=!1,j=(H,U)=>{_=Ph(Ul[H]);let z=Ul[H];l.clear();let $=new Rn(30,22,90,66);$.rotateX(-Math.PI/2);let xe=$.attributes.position;for(let ge=0;ge<xe.count;ge++)xe.setY(ge,z(xe.getX(ge),xe.getZ(ge)));$.computeVertexNormals(),l.add(We($,b.beech));let W=zf(H);w.geometry=W,X.geometry=W;let G=Hf[H]();{let ge=M.getContext("2d");ge.fillStyle="#fff",ge.fillRect(0,0,440,440),ge.fillStyle="#000",ge.beginPath(),G.getSpacedPoints(160).forEach((Ee,He)=>ge[He?"lineTo":"moveTo"]((Ee.x+22)*10,(Ee.y+22)*10)),ge.closePath(),ge.fill(),C.alphaMap.needsUpdate=!0}let ne=G.getSpacedPoints(200).map(ge=>ee(ge.x,_(ge.x,ge.y)+.35,ge.y));ne.push(ne[0].clone()),I=new wn(new nn(ne,!1,"catmullrom",0),320,.28,6),L.geometry=I;let me=U==="clear"?14675960:U;s.color.setHex(me),C.color.setHex(me),s.transparent=U==="clear",s.opacity=U==="clear"?.55:1,N=!1};return j("tray",15895608),r.userData.setProduct=j,r.userData.product={key:"tray",col:15895608,point:ee(62,16,44)},r.userData.anim=H=>{let z=H%26,$=H<26;if(X.visible=!$||z>23,z<2)m.position.set(0,53.3,70*(1-Ke(z/2))),m.rotation.set(0,0,0);else if(z<15.5)m.position.set(0,53.3,0);else if(z<17.5){let me=Ke((z-15.5)/2);m.position.set(62*me,53.3+22*Math.sin(Math.PI*me)+(44.2-53.3)*me,0)}else if(z<21)m.position.set(62,44.2,0),m.rotation.x=0;else if(z<23){let me=(z-21)/2,ge=Ke(me);m.position.set(62,44.2+14*Math.sin(Math.PI*Math.min(1,me*1.3))-(44.2-11.8)*me*me,44*ge),m.rotation.x=Math.PI*ge}else m.position.set(62,11.8,44),m.rotation.x=Math.PI;u.rotation.x=-1.25*(z<2?1:z<3?1-Ke(z-2):z<14?0:z<15?Ke(z-14):1),d.position.z=z<3?-40:z<4?-40+40*Ke(z-3):z<8?0:z<9?-40*Ke(z-8):-40,c.emissiveIntensity=z>3&&z<9?Math.min(1,(z-3)/1.2)*(1.1+.25*Math.sin(H*5)):0;let xe=z<9.2?0:z<11?Ke((z-9.2)/1.8):z<13.5?1:z<14.5?1-Ke(z-13.5):0;f.rotation.x=.35+1.5*xe,o.position.y=31+21*xe;let W=z<11?0:z<12.6?Ke((z-11)/1.6):z<14?1:z<15?1-Ke(z-14):0;a.rotation.z=1.2-2.4*W;let G=z<4?0:z<9?2.6*Ke((z-4)/5):2.6;if(z<2)Z(()=>0),N=!1;else if(z<11){let me=Math.max(0,o.position.y-52+9.3)/9.3;Z((ge,Ee)=>Math.max(-G*Math.max(0,1-(ge/18)**2)*Math.max(0,1-(Ee/18)**2),y(ge,Ee)*me)),N=!1}else if(z<12.8){let me=Ke((z-11)/1.6);Z((ge,Ee)=>y(ge,Ee)+(_(ge,Ee)-y(ge,Ee))*me),N=!1}else N||(Z(_),N=!0);L.visible=z>=17.8&&z<20.4,I.setDrawRange(0,Math.floor(I.index.count*Math.max(0,Math.min(1,(z-17.8)/1.5))/6)*6);let ne=z>=19.3;A.visible=!ne&&z<25.8,w.visible=ne&&z<25.8,T.visible=ne&&z<20.8,C.opacity=1-Math.max(0,Math.min(1,(z-19.8)/1)),T.position.y=ne?Math.max(0,(z-19.5)*10):0},r.userData.view=ee(-.8,0,.75),r.userData.zoom=.8,r}function by(){let e=new oe({color:10185727,roughness:.55}),t=new oe({color:11832575,emissive:5909200,emissiveIntensity:.55,roughness:.35}),n=new oe({color:12164095,emissive:4858016,emissiveIntensity:.35,roughness:.4,transparent:!0,opacity:.6}),s=new oe({color:14266938,metalness:.35,roughness:.4}),r=new oe({color:2105894,metalness:.5,roughness:.5}),a=new Xe;a.add(h(fe(210,40,46,2,Mt.cream),0,20,0),h(fe(66,24,40,2,Mt.teal),-62,52,0),h(fe(26,21,30,2,ce.dark),-97,50.5,0));let o=-8,l=74,c=-36;a.add(h(fe(14,18,18,2,Mt.teal),-51,l,0),h(D(5.5,5.5,22,b.steelShiny),-69,l,0,0,0,Math.PI/2),h(D(6.5,6.5,3,b.steelDark),-80,l,0,0,0,Math.PI/2),h(P(10,10,10,b.steelDark),-69,l-9,0)),a.add(h(D(5.4,5.4,72,Mt.glass,28),o,l,0,0,0,Math.PI/2),h(D(2,3.4,8,b.steelShiny),o+40,l,0,0,0,Math.PI/2),h(P(8,12,8,b.steelDark),-20,l-8,0),h(P(8,12,8,b.steelDark),18,l-8,0));let d=Mt.hot.clone();for(let W=0;W<4;W++)a.add(h(new Ie(new Zt(5.7,.9,8,28),d),o-22+W*15,l,0,0,Math.PI/2,0));let u=new Xe;u.position.set(o-6,l,0),a.add(u),u.add(h(D(1.8,1.8,62,b.steelShiny),0,0,0,0,0,Math.PI/2),h(D(.2,1.8,4,b.steelShiny),33,0,0,0,0,-Math.PI/2));{let W=[];for(let G=0;G<=200;G++){let ne=G/200,me=ne*Math.PI*2*10;W.push(ee(-29+58*ne,Math.cos(me)*3.6,Math.sin(me)*3.6))}u.add(We(new wn(new nn(W),400,.7,8),b.steelShiny))}let f=We(new Et(4.6,4.6,1,24),t);f.rotation.z=Math.PI/2,a.add(f);let p=We(new Et(4.5,4.5,1,24),n);p.rotation.z=Math.PI/2,a.add(p),a.add(h(D(3,3,10,b.steelShiny),c,l+10,0),h(D(22,4,34,Mt.glass,32),c,l+32,0),h(new Ie(new Zt(22,1,8,40),b.steelShiny),c,l+49,0,Math.PI/2),h(D(23,23,2,b.steelDark,32),c,l+51,0),h(D(9,9,14,b.steelShiny),c,l+59,0),h(D(10,10,2,b.steelDark),c,l+67,0),h(fe(8,6,6,1,ce.dark),c+10,l+62,0)),a.add(h(D(14,14,32,ce.blue,28),-70,16,-48),h(D(13,13,.6,e,28),-70,32.4,-48),oi([[c+14,l+63,0],[c+26,l+68,-12],[-52,80,-40],[-66,46,-48],[-68,34,-48]],1.2,ce.dark));let _=320,y=new Qn(new qt(1.5,8,6),e,_),m=new Bt,x=[];for(let W=0;W<_;W++){let G=Math.random()*28,ne=4+18*(G/34)-1.8,me=Math.random()*7,ge=Math.sqrt(Math.random())*ne;x.push([c+Math.cos(me)*ge,l+15.5+G,Math.sin(me)*ge])}x.sort((W,G)=>W[1]-G[1]),x.forEach((W,G)=>{m.position.set(...W),m.updateMatrix(),y.setMatrixAt(G,m.matrix)}),a.add(y);let S=36,A=new Qn(new qt(1.3,8,6),e,S);a.add(A);let M=20,C=new Qn(new qt(1.3,8,6),e,M);a.add(C),a.add(h(P(6,46,46,Mt.teal),30,63,0),h(P(6,46,46,Mt.teal),96,63,0),h(D(7,7,20,b.steelShiny),109,63,0,0,0,Math.PI/2),h(D(8,8,3,b.steelDark),119,63,0,0,0,Math.PI/2));for(let W of[46,80])for(let G of[-18,18])a.add(h(D(1.6,1.6,72,b.steelShiny),64,W,G,0,0,Math.PI/2));let T=he(h(P(8,22,22,Mt.alu),0,0,0));T.position.set(37,63,0),a.add(T);for(let W of[-4.5,-1.5,1.5,4.5])for(let G of[-1.5,1.5])T.add(h(D(1.2,1.2,.3,r,16),4.1,G,W,0,0,Math.PI/2));T.add(h(P(.3,7.6,13,r),4.05,0,0));let g=he(h(P(6,40,40,Mt.teal),0,0,0),h(P(8,22,22,Mt.alu),-7,0,0),h(P(.3,7.6,13,r),-11.05,0,0));g.position.set(52,63,0),a.add(g);let w=[];for(let W of[-1,1])for(let G=0;G<2;G++){let ne=We(new Ht(19.5,2,5),s);a.add(ne),w.push([ne,W,G])}a.add(h(P(72,44,1,Mt.glass),64,64,24),h(P(72,2,2,b.steelDark),64,86,24),h(P(72,2,2,b.steelDark),64,42,24)),a.add(h(P(18,12,.6,b.black),44,25,23.2),h(P(14,1,26,b.steel),44,17,34,.5,0,0),h(P(1,3,26,b.steel),37,18.5,34,.5,0,0),h(P(1,3,26,b.steel),51,18.5,34,.5,0,0));let B=he(h(P(36,1,30,ce.blue),0,1,0),h(P(36,14,1,ce.blue),0,7,15),h(P(36,14,1,ce.blue),0,7,-15),h(P(1,14,30,ce.blue),18,7,0),h(P(1,14,30,ce.blue),-18,7,0));B.position.set(44,0,52),a.add(B);let I=new Xe;a.add(I);for(let W=0;W<9;W++){let G=ef(10185727);G.position.set(32+W%3*12+(Math.random()-.5)*3,4+Math.floor(W/3)*3.5,44+W*7%3*8),G.rotation.set(Math.random()*.4,Math.random()*3,Math.random()*.4),I.add(G)}let L=ef(10185727);a.add(L);let Z=new un().setFromAxisAngle(ee(0,0,1),Math.PI/2).multiply(new un().setFromAxisAngle(ee(0,1,0),Math.PI/2));a.add(h(fe(22,30,6,1,ce.dark),-30,30,25),h(P(16,10,.3,Mt.screen),-30,36,28.2),h(Bi(),-34,24,28.4),h(li(),-24,24,28.4));let K=new Bt;a.userData.anim=W=>{let ne=W%8/8,me=48,ge=W%me;ne<.4&&(u.rotation.x-=.16);let Ee=ne<.4?-14:ne<.5?-14+8*Ke((ne-.4)/.1):ne<.78?-6:ne<.92?-6-8*Ke((ne-.78)/.14):-14;u.position.x=Ee;let He=Ee+35,at=ne<.4?Math.max(.3,(28-He)*Ke(ne/.4)):Math.max(.3,28-He);f.scale.y=at,f.position.set(He+at/2,l,0);let ze=-12,Ye=Math.max(.3,He-2-ze);p.scale.y=Ye,p.position.set(ze+Ye/2,l,0),g.position.x=ne<.62?52:ne<.7?52+12*Ke((ne-.62)/.08):ne<.8?64:ne<.9?64-12*Ke((ne-.8)/.1):52;let Qe=g.position.x+3,pe=93,ye=pe-Qe,Ae=19.5,Ue=Math.sqrt(Math.max(0,Ae*Ae-(ye/2)**2));if(w.forEach(([qe,Ne,et])=>{let ht=et?Qe+ye/2:Qe,mt=et?pe:Qe+ye/2,q=63+Ne*10+(et?Ne*Ue:0),Tt=63+Ne*10+(et?0:Ne*Ue);qe.position.set((ht+mt)/2,(q+Tt)/2,0),qe.rotation.z=Math.atan2(Tt-q,mt-ht)}),L.quaternion.copy(Z),L.visible=ne>.45,ne<.7)L.position.set(g.position.x-7.75,63,0);else if(ne<.74)L.position.set(64-7.75-6*Ke((ne-.7)/.04),63,0);else{let qe=(ne-.74)/.24;if(qe<.22)L.position.set(50.6,63-23*(qe/.22)**2,0),L.rotateX(qe*6);else if(qe<.38)L.visible=!1;else if(qe<.75){let Ne=(qe-.38)/.37;L.position.set(44,25-12*Ne,22+24*Ne),L.quaternion.identity(),L.rotation.set(.5,0,0)}else{let Ne=(qe-.75)/.25;L.quaternion.identity(),L.position.set(44,13-6*Ne,46+6*Ne),L.rotation.set(.5*(1-Ne),Ne*1.5,0)}}for(let qe=0;qe<S;qe++){let Ne=(qe/S+W*.35)%1,et,ht,mt=(qe*37%7-3)*.5,q=1;if(Ne<.35)et=c+(qe*13%5-2)*.5,ht=l+15-12*(Ne/.35);else{let Tt=(Ne-.35)/.65;et=c+Tt*(ze-c+3),ht=l+3.6-qe*11%3*.6,q=Tt>.75?1-(Tt-.75)/.25:1}ne>=.4&&(q=0),K.position.set(et,ht,mt),K.scale.setScalar(Math.max(.001,q)),K.updateMatrix(),A.setMatrixAt(qe,K.matrix)}A.instanceMatrix.needsUpdate=!0;let De=ge<42?1-.65*(ge/42):.35+.65*Ke((ge-42)/5);y.count=Math.floor(_*Math.min(1,De));for(let qe=0;qe<M;qe++){let Ne=ge>42&&ge<47.2,et=(qe/M+W*1.4)%1;K.position.set(c+(qe*7%5-2)*1.2,l+50-28*et,(qe*3%5-2)*1.2),K.scale.setScalar(Ne?1:.001),K.updateMatrix(),C.setMatrixAt(qe,K.matrix)}C.instanceMatrix.needsUpdate=!0};let F={pg:e.color.getHex(),mc:t.color.getHex(),me:t.emissive.getHex(),sc:n.color.getHex(),se:n.emissive.getHex()},X=()=>{let W=g.position.x+3,G=93,ne=G-W,me=19.5,ge=Math.sqrt(Math.max(0,me*me-(ne/2)**2));w.forEach(([Ee,He,at])=>{let ze=at?W+ne/2:W,Ye=at?G:W+ne/2,Qe=63+He*10+(at?He*ge:0),pe=63+He*10+(at?0:He*ge);Ee.position.set((ze+Ye)/2,(Qe+pe)/2,0),Ee.rotation.z=Math.atan2(pe-Qe,Ye-ze)})},N=null,j=null,H=(W,G)=>{let ne=new tt(G?14675960:W);e.color.copy(ne),e.transparent=!!G,e.opacity=G?.55:1,e.needsUpdate=!0,t.color.copy(ne).lerp(new tt(16777215),.15),t.emissive.copy(ne).multiplyScalar(.55),n.color.copy(ne),n.emissive.copy(ne).multiplyScalar(.35)},U=(W,G)=>{for(let ne=0;ne<S;ne++){let me=(ne/S+G*.35)%1,ge,Ee,He=(ne*37%7-3)*.5,at=1;if(me<.35)ge=c+(ne*13%5-2)*.5,Ee=l+15-12*(me/.35);else{let ze=(me-.35)/.65;ge=c+ze*(-12-c+3),Ee=l+3.6-ne*11%3*.6,at=ze>.75?1-(ze-.75)/.25:1}K.position.set(ge,Ee,He),K.scale.setScalar(W?Math.max(.001,at):.001),K.updateMatrix(),A.setMatrixAt(ne,K.matrix)}A.instanceMatrix.needsUpdate=!0},z=(W,G)=>{for(let ne=0;ne<M;ne++){let me=(ne/M+G*1.4)%1;K.position.set(c+(ne*7%5-2)*1.2,l+50-28*me,(ne*3%5-2)*1.2),K.scale.setScalar(W?1:.001),K.updateMatrix(),C.setMatrixAt(ne,K.matrix)}C.instanceMatrix.needsUpdate=!0},$=(W,G)=>{u.position.x=W;let ne=W+35;G=Math.max(.3,G),f.scale.y=G,f.position.set(ne+G/2,l,0);let me=Math.max(.3,ne-2+12);p.scale.y=me,p.position.set(-12+me/2,l,0)},xe=0;return a.userData.game={steps:{hop:2.6,heat:1.6,close:1.3,melt:3,inject:1.1,cool:2.2,open:1.3,eject:2.6},start(W,G,ne){H(W,G),I.visible=!1,L.visible=!1,y.count=0,d.emissiveIntensity=0,d.color.set(6974834),g.position.x=64,X(),$(-14,.3),p.visible=!1,f.visible=!1,U(!1,0),z(!1,0),N&&a.remove(N),N=ne,N.visible=!1,a.add(N),j=0},run(W,G,ne){if(xe=ne,W==="hop"&&(y.count=Math.floor(_*.95*Ke(G)),z(G<.97,ne)),W==="heat"&&(d.emissiveIntensity=.9*G,d.color.set(6974834).lerp(Mt.hot.color,G)),W==="close"&&(g.position.x=64-12*Ke(G),X()),W==="melt"&&(u.rotation.x-=.16,U(G<.92,ne),p.visible=f.visible=!0,$(-14,7*Ke(G)),y.count=Math.floor(_*(.95-.2*G))),W==="inject"){U(!1,ne);let me=-14+8*Ke(G);$(me,Math.max(.3,28-(me+35)))}if(W==="open"&&(g.position.x=52+12*Ke(G),X(),N.visible=!0,N.position.set(g.position.x-7.75,63,0),N.rotation.set(0,0,0)),W==="eject")if(G<.15)N.position.set(64-7.75-6*Ke(G/.15),63,0);else{let me=(G-.15)/.85;if(me<.25)N.position.set(50.6,63-23*(me/.25)**2,0),N.rotation.z=me*3;else if(me<.4)N.visible=!1;else if(me<.8){N.visible=!0;let ge=(me-.4)/.4;N.position.set(44,25-12*ge,22+24*ge),N.rotation.set(.5,0,0)}else{let ge=(me-.8)/.2;N.position.set(44,13-6*ge,46+6*ge),N.rotation.set(.5*(1-ge),ge*1.2,0)}}},end(){N&&(a.remove(N),N=null),e.color.setHex(F.pg),e.transparent=!1,e.opacity=1,e.needsUpdate=!0,t.color.setHex(F.mc),t.emissive.setHex(F.me),n.color.setHex(F.sc),n.emissive.setHex(F.se),d.color.copy(Mt.hot.color),d.emissiveIntensity=Mt.hot.emissiveIntensity,I.visible=!0,p.visible=f.visible=!0,z(!1,0)},binPoint:ee(44,14,52)},a.userData.product={key:"brick",col:10185727,point:ee(44,14,52)},a.userData.view=ee(.25,0,1),a.userData.zoom=.62,a}var Yt=200,yi=i=>16*Math.pow(Math.sin(Math.PI*i),.62),Mr=i=>(5+3.5*Math.exp(-(((i-.47)/.13)**2)))*Math.pow(Math.sin(Math.PI*i),.3),wa=i=>8.5*Math.pow(Math.sin(Math.PI*i),.55),ri=i=>7*Math.pow(2*i-1,4),as=-Yt/2+Yt*.47,Bl=21,zh=11.5,Ps=(i,e)=>{let t=Math.min(.999,Math.max(.001,(i+Yt/2)/Yt)),n=yi(t),s=Math.min(1,Math.abs(e)/n),r=Math.pow(s,2.4/2),a=Math.sqrt(Math.max(0,1-r*r));return ri(t)+Mr(t)*Math.pow(a,2/2.2)};function tf(){let i=new ct;for(let e=0;e<=40;e++){let t=e/40;i[e?"lineTo":"moveTo"](-Yt/2+Yt*t,yi(t)+.4)}for(let e=40;e>=0;e--){let t=e/40;i.lineTo(-Yt/2+Yt*t,-yi(t)-.4)}return i}function vy(i,e){let t=he(h(new Ie(new Zt(i,1.6,8,48),e),0,0,0,0,Math.PI/2,0),h(new Ie(new Zt(i*.55,1.2,8,40),e),0,0,0,0,Math.PI/2,0),h(D(5,5,6,b.steelDark),0,0,0,0,0,Math.PI/2));for(let n=0;n<8;n++){let s=n*Math.PI/4;t.add(h(P(2,i,2,e),0,Math.cos(s)*i/2,Math.sin(s)*i/2,s,0,0))}return t}function My(){let i=new Xe,e=-240,t=30,n=105,s=235,r=ce.lightOrange,a=new oe({color:13081146,metalness:.4,roughness:.45}),o=new oe({color:15250746,metalness:.3,roughness:.4}),l=new oe({color:15132906,metalness:.3,roughness:.4});i.add(h(P(320,8,180,r),0,s-4,-240),h(P(8,s,180,r),-156,s/2,-240),h(P(8,s,180,r),156,s/2,-240),h(P(320,s,8,r),0,s/2,-326));for(let N of[-152,152])i.add(h(P(12,s,10,b.steelDark),N,s/2,-150));i.add(h(P(320,12,10,b.steelDark),0,s-6,-150));let c=Mt.ovenIn;i.add(h(P(304,1,164,c),0,s-8.5,-240),h(P(1,s-10,164,c),-151.5,(s-10)/2,-240),h(P(1,s-10,164,c),151.5,(s-10)/2,-240),h(P(304,s-10,1,c),0,(s-10)/2,-321.5),h(P(304,1,164,c),0,.6,-240));let d=new ys(16742954,0,260,0);d.position.set(0,140,-240),i.add(d),i.add(h(P(670,10,10,b.steelDark),0,s+14,-145),h(P(8,s+18,8,b.steelDark),-331,(s+18)/2,-145),h(P(8,s+18,8,b.steelDark),331,(s+18)/2,-145));let u=new oe({color:16756848,emissive:16738848,emissiveIntensity:0,transparent:!0,opacity:.28,roughness:.1,depthWrite:!1}),f=[-1,1].map(N=>{let j=he(h(P(161,40,6,r),0,s/2-20,0),h(P(161,55,6,r),0,-s/2+27.5,0),h(P(25,s-95,6,r),-68,-7.5,0),h(P(25,s-95,6,r),68,-7.5,0),h(P(111,s-95,1,u),0,-7.5,0),h(P(4,60,4,b.steelDark),-N*74,0,4),h(P(14,8,10,b.steelDark),-50,s/2+6,0),h(P(14,8,10,b.steelDark),50,s/2+6,0));return j.position.set(N*80.5,s/2,-147),i.add(j),j});i.add(h(fe(70,34,56,3,ce.red),40,s+17,-290),h(D(9,9,70,b.steelDark),40,s+68,-290),h(fe(30,20,20,2,ce.dark),-40,s+10,-300),h(D(3,3,60,ce.dark),-40,s+10,-270,Math.PI/2));let p=(N,j,H,U)=>{let z=Math.hypot(H-N,U-j),$=Math.atan2(U-j,H-N);for(let W of[16,32])i.add(h(P(z,1.6,1.6,a),(N+H)/2,s+W,(j+U)/2,0,-$,0));let xe=Math.ceil(z/40);for(let W=0;W<=xe;W++)i.add(h(P(1.8,32,1.8,a),N+(H-N)*W/xe,s+16,j+(U-j)*W/xe))};p(-158,-152,158,-152),p(158,-152,158,-328),p(158,-328,-158,-328),p(-158,-328,-158,-200);{let U=-7.2727272727272725,z=s/22,$=-180;for(let G=0;G<22;G++)i.add(h(P(28,1.6,8,b.steelDark),$,z*(G+1)-.8,-162+U*(G+.5)));let xe=Math.hypot(s,-160),W=Math.atan2(s,160);for(let G of[$-15,$+15])i.add(h(P(2,6,xe,a),G,s/2,-484/2,W,0,0));for(let G of[$-15])i.add(h(P(1.6,1.6,xe,a),G,s/2+32,-484/2,W,0,0));for(let G=0;G<=4;G++)i.add(h(P(1.6,32,1.6,a),$-15,s*G/4+16,-162+-160*G/4))}{let N=he(h(fe(22,74,30,2,ce.dark),0,37,0),h(P(.4,13,20,Mt.screen),11.2,58,0),h(D(1,1,.6,ce.go||b.steel),11.4,46,-6,0,0,Math.PI/2),h(li(),11.4,46,6),h(D(2.4,2.4,1,b.black),11.4,36,0,0,0,Math.PI/2));N.children[3].rotation.set(0,Math.PI/2,0),N.position.set(171,0,-205),i.add(N)}for(let N of[-100,100])i.add(h(P(5,4,420,b.steelShiny),N,2,-120),h(P(14,1,420,b.steelDark),N,.5,-120));i.add(h(P(6,5,200,ce.blue),118,2.5,-60));let _=new Xe;_.position.z=t,i.add(_),_.add(h(P(240,8,110,ce.grey),0,16,0),h(P(250,4,4,b.black),0,13,57),h(P(250,4,4,b.black),0,13,-57));for(let N of[-100,100])for(let j of[-40,40])_.add(h(D(6,6,4,b.steelDark),N,10,j,0,0,Math.PI/2));for(let N of[-47,47])_.add(h(P(10,n-20,12,ce.grey),0,n/2+10,N),h(D(4,4,8,b.steelDark),0,n,N*.93,Math.PI/2));_.add(h(fe(20,16,16,2,l),-20,30,-38),h(D(7,7,18,l),-36,30,-38,0,0,Math.PI/2),h(fe(16,14,14,2,ce.grey),0,n-12,-56),h(D(6,6,12,l),0,n-12,-68,Math.PI/2));let y=new Xe;y.position.y=n,_.add(y);for(let N of[-41,41])y.add(h(P(276,5,5,ce.machRed),0,0,N));for(let N of[-138,138])y.add(h(P(6,6,88,ce.machRed),N,0,0),h(fe(12,14,14,2,ce.dark),N,0,0));y.add(h(fe(14,14,14,2,ce.dark),146,0,0),h(D(5,5,12,l),156,0,0,0,0,Math.PI/2));let m=new Xe;y.add(m);for(let N of[-121,121]){let j=vy(32,b.steel);j.position.x=N,m.add(j,h(D(3,3,14,b.steelShiny),N+Math.sign(N)*9,0,0,0,0,Math.PI/2))}let x=44,S=16,A=232;m.add(h(P(A,S,x,Mt.alu),0,-S/2,0),h(P(A+6,1.4,x+6,Mt.alu),0,-.7,0));for(let N=-3;N<=3;N++)m.add(h(P(2,S,x+2,b.steelDark),N*34,-S/2,0));let M=We(new Li(tf()),Mt.cavity);M.rotation.x=-Math.PI/2,M.position.y=.05,m.add(M);let C=new Xe;C.position.set(0,0,-x/2),m.add(C),C.add(h(P(A,S,x,Mt.alu),0,S/2,x/2),h(P(A+6,1.4,x+6,Mt.alu),0,.7,x/2));for(let N=-3;N<=3;N++)C.add(h(P(2,S,x+2,b.steelDark),N*34,S/2,x/2));let T=We(new Li(tf()),Mt.cavity);T.rotation.x=Math.PI/2,T.position.set(0,-.05,x/2),C.add(T);for(let N=-3;N<=3;N++)m.add(h(P(4,6,3,b.steelDark),N*32+16*(N<3),-2,x/2+2)),C.add(h(P(4,6,3,b.steelDark),N*32+16*(N<3),2,x+2));for(let N=-2;N<=2;N++)m.add(h(D(1.6,1.6,8,b.steelDark),N*48,-1,-x/2-1,0,0,Math.PI/2));let g=900,w=new Qn(new qt(.8,5,4),Mt.powder,g),B=new Bt;for(let N=0;N<g;N++){let j=.06+.88*Math.random(),H=-Yt/2+Yt*j,U=(Math.random()*2-1)*yi(j)*.85;B.position.set(H,.8+Math.random()*1.4,U),B.updateMatrix(),w.setMatrixAt(N,B.matrix)}m.add(w);let I=ee(0,38.6,150);for(let N of[-60,60])i.add(h(P(6,30,40,b.steelDark),N,15,150),h(fe(10,3.6,40,1.2,b.black),N,31.8,150));let L=new Xe;L.visible=!1,i.add(L);let Z=I.y,K=null,F=(N,j)=>{L.clear();let H=Hl(j==="clear"?14675960:j,{rough:.4}),U;if(K=null,N==="kayak"){let ne=Bf(H);U=ne.obj,K=ne.acc,K.visible=!1}else U=vn[N].make(H).obj,U.rotation.set(0,0,0);let z=new Ct().setFromObject(U),$=z.getSize(ee(0,0,0)),xe=Math.min(1,200/$.x,40/$.z,30/$.y);U.scale.multiplyScalar(xe);let W=new Ct().setFromObject(U),G=W.getCenter(ee(0,0,0));U.position.sub(G),L.add(U),Z=33.6+(W.max.y-W.min.y)/2,Mt.powder.color.set(j==="clear"?15790320:j).lerp(new tt(16777215),.25)};F("kayak",8378060),i.userData.setProduct=F,i.userData.product={key:"kayak",col:8378060,point:ee(0,62,150)};let X=[];for(let N of[-1,1]){let j=he(h(D(4,4,90,b.steelDark),0,45,0),h(P(40,4,40,b.steelDark),0,2,0)),H=he(h(D(32,32,16,o,36,!0),0,0,0,0,0,Math.PI/2),h(new Ie(new Zt(32,1.6,8,40),b.steelDark),-8*N,0,0,0,Math.PI/2,0),h(D(8,8,10,o),7*N,0,0,0,0,Math.PI/2));for(let z=0;z<4;z++)H.add(h(P(.8,64,.8,b.steelDark),-8*N,0,0,z*Math.PI/4,0,0));for(let z of[12,22])H.add(h(new Ie(new Zt(z,.4,6,32),b.steelDark),-8*N,0,0,0,Math.PI/2,0));H.position.y=96,j.add(H);let U=new Xe;for(let z=0;z<5;z++){let $=he(h(P(1,26,8,b.steel),0,13,0,.3,0,0));$.rotation.x=z*2*Math.PI/5,U.add($)}U.add(h(D(5,5,6,b.steelDark),0,0,0,0,0,Math.PI/2)),U.position.y=96,j.add(U),X.push(U),j.position.set(N*205,0,t),i.add(j)}i.add(h(P(40,4,30,b.steelDark),-205,20,130),h(fe(36,24,26,2,ce.blue),-205,34,130),h(P(32,1,22,Mt.powder),-205,46.2,130));for(let N of[-222,-188])for(let j of[118,142])i.add(h(D(3,3,3,b.black),N,3,j,0,0,Math.PI/2),h(P(2,16,2,b.steelDark),N,12,j));return i.userData.anim=N=>{let H=N%37,U=N<37;if(K){let W=Math.max(0,Math.min(1,(H-33.8)/2.4));K.visible=H>33.8||!U&&H<9.6,K.position.y=H>33.8?40*Math.pow(1-Ke(W),2):0}C.rotation.x=-1.9*(H<2.5?1:H<4?1-Ke((H-2.5)/1.5):H<27?0:Ke((H-27)/1.5)),w.count=H<2.5?Math.floor(g*Ke(H/2.2)):H<9?g:0;let z=H<4?0:H<5?Ke(H-4):H<8?1:H<9?1-Ke(H-8):H<18?0:H<19?Ke(H-18):H<22?1:H<23?1-Ke(H-22):0;f.forEach((W,G)=>W.position.x=(G?1:-1)*(80.5+165*z)),_.position.z=H<5?t:H<8?t+(e-t)*Ke((H-5)/3):H<19?e:H<22?e+(t-e)*Ke((H-19)/3):t;let $=Math.max(0,Math.min(1,(H-5)/22));m.rotation.x=Math.PI*2*7*Ke($),y.rotation.z=.36*Math.sin(Math.PI*$)*Math.sin(2*Math.PI*(H-5)/5.5);let xe=H<8?0:H<9?H-8:H<18?1:H<20?1-(H-18)/2:0;if(c.emissiveIntensity=.7*xe,u.emissiveIntensity=.35*xe,d.intensity=2.6*xe*(.9+.1*Math.sin(N*3)),X.forEach(W=>W.rotation.x+=H>19&&H<27?.5:H>27&&H<28?.5*(28-H):0),H>=27){L.visible=!0;let W=ee(0,n,t);if(H<29.5)L.position.copy(W);else if(H<31)L.position.set(0,n+50*Ke((H-29.5)/1.5),t);else{let G=Ke((H-31)/2.5);L.position.set(0,n+50+(Z-n-50)*G*G,t+(I.z-t)*G)}}else!U&&H<9.6?(L.visible=!0,L.position.set(I.x,Z,I.z),H>8&&(L.position.x=-600*((H-8)/1.6)**2)):L.visible=!1},i.userData.pinY=275,i.userData.focus=ee(0,85,-70),i}var Eh=new oe({color:13114880,emissive:16726528,emissiveIntensity:1.3,roughness:.3});function Fl(i,e,t){let n=t.clone().sub(e),s=n.length();i.position.copy(e).addScaledVector(n,.5),i.scale.set(1,Math.max(.001,s),1),i.quaternion.setFromUnitVectors(ee(0,1,0),n.normalize())}function nf(){let i=new oe({color:4020851,metalness:.35,roughness:.45}),e=new oe({color:14266938,metalness:.35,roughness:.4}),t=new oe({color:2105894,metalness:.5,roughness:.5}),n=new Xe;n.add(h(fe(230,36,60,2,i),0,18,0),h(fe(60,20,44,2,i),-80,46,0)),n.add(h(D(9,9,44,b.steelShiny),-82,62,0,0,0,Math.PI/2),h(D(10,10,3,b.steelDark),-104,62,0,0,0,Math.PI/2),h(D(5,5,44,b.steelDark),-18,62,0,0,0,Math.PI/2),h(P(8,3,6,t),-12,66.6,0));let s=he(h(D(2,2,40,b.steelShiny),0,0,0,0,0,Math.PI/2),h(D(4.4,4.4,4,b.steelShiny),20,0,0,0,0,Math.PI/2));s.position.set(-62,62,0),n.add(s),n.add(h(P(8,56,56,i),6,64,0),h(P(8,56,56,i),104,64,0),h(D(8,8,22,b.steelShiny),119,64,0,0,0,Math.PI/2));for(let C of[42,86])for(let T of[-22,22])n.add(h(D(2,2,100,b.steelShiny),55,C,T,0,0,Math.PI/2));let r=he(h(P(12,36,36,b.steelDark),0,0,0),h(P(.3,9,22,t),6.1,0,0));r.position.set(16,64,0),n.add(r);let a=he(h(P(8,50,50,i),0,0,0),h(P(12,36,36,b.steelDark),-10,0,0),h(P(.3,9,22,t),-16.1,0,0));a.position.set(38,64,0),n.add(a);let o=[];for(let C of[-1,1])for(let T=0;T<2;T++){let g=We(new Ht(2.4,1,6),e);n.add(g),o.push([g,C,T])}n.add(h(P(80,58,1,Mt.glass),55,66,30),h(P(80,2,2,b.steelDark),55,95,30),h(P(80,2,2,b.steelDark),55,37,30)),n.add(h(P(44,40,4,ce.grey),-70,20,82),h(P(44,40,4,ce.grey),-70,20,42),h(P(4,40,36,ce.grey),-90,20,62),h(P(4,40,36,ce.grey),-50,20,62),h(P(36,34,36,ce.dark),-70,17,62),h(P(36,.6,36,Eh),-70,34.6,62),h(P(44,2,4,b.steelDark),-70,41,82),h(P(44,2,4,b.steelDark),-70,41,42),h(P(4,2,44,b.steelDark),-48,41,62),h(P(4,2,44,b.steelDark),-92,41,62));let l=ee(-34,92,40);n.add(h(D(5,6,92,b.steelDark),-34,46,40),h(fe(14,10,14,2,ce.dark),-34,94,40));let c=We(new Et(1.6,1.6,1,12),ce.machRed);n.add(c);let d=he(h(D(5,3.5,6,b.steelDark,20,!0),0,0,0),h(D(3.5,3.5,.4,b.steelDark,20),0,-3,0)),u=h(D(4.6,4.6,.4,Eh,20),0,1.6,0);d.add(u),n.add(d);let f=We(new Et(.8,.8,1,10),Eh);f.visible=!1,n.add(f);let p=Mt.alu.clone(),_=new Xe;n.add(_);let y=new Xe;n.add(y);let m=he(h(P(36,1,30,ce.blue),0,1,0),h(P(36,14,1,ce.blue),0,7,15),h(P(36,14,1,ce.blue),0,7,-15),h(P(1,14,30,ce.blue),18,7,0),h(P(1,14,30,ce.blue),-18,7,0));m.position.set(40,0,62),n.add(m);let x=(C,T)=>{let g=vn[C].make(T).obj;return g.rotation.set(0,0,0),Of(g,19)},S=C=>{_.clear(),_.add(x(C,p)),y.clear();for(let T=0;T<5;T++){let g=x(C,Mt.alu);g.position.set(30+T%3*10,4.5+Math.floor(T/3)*4,58+T*2%3*4-4),g.rotation.set((Math.random()-.5)*.5,Math.random()*3,(Math.random()-.5)*.5),y.add(g)}};S("car"),n.userData.setProduct=S,n.userData.product={key:"car",col:"al",point:ee(40,12,62)},n.add(h(P(14,1,30,b.steel),40,22,42,.6,0,0),h(P(16,10,.6,b.black),40,30,30.2)),n.add(h(fe(22,30,6,1,ce.dark),-30,24,31),h(P(16,10,.3,Mt.screen),-30,30,34.2),h(Bi(),-34,18,34.4),h(li(),-24,18,34.4));let A=[[0,ee(-50,82,58)],[1.6,ee(-70,37,62)],[2.4,ee(-70,37,62)],[3.4,ee(-62,84,50)],[4.6,ee(-12,76,0)],[6,ee(-12,76,0)],[7.2,ee(-50,82,58)]],M=C=>{for(let T=0;T<A.length-1;T++)if(C<=A[T+1][0]){let g=Ke((C-A[T][0])/(A[T+1][0]-A[T][0]));return A[T][1].clone().lerp(A[T+1][1],g)}return A[A.length-1][1].clone()};return n.userData.anim=C=>{let g=C%13,w=M(g);d.position.copy(w),Fl(c,l,w.clone().add(ee(0,4,0)));let B=g>4.6&&g<6?Math.sin(Math.PI*(g-4.6)/1.4)*1.3:0;d.rotation.z=-B,u.visible=g>1.9&&g<5.6,f.visible=g>4.8&&g<5.8,f.visible&&Fl(f,ee(-9,74,0),ee(-12,66,0)),s.position.x=g<6?-62:g<6.4?-62+30*Ke((g-6)/.4):g<10.5?-32:g<12?-32-30*Ke((g-10.5)/1.5):-62,a.position.x=g<8.4?38:g<9?38+22*Ke((g-8.4)/.6):g<10.6?60:g<11.4?60-22*Ke((g-10.6)/.8):38;let I=a.position.x+4,L=100,Z=L-I,K=58/2+1,F=Math.sqrt(Math.max(0,K*K-(Z/2)**2));o.forEach(([X,N,j])=>{let H=64+N*14;Fl(X,ee(j?I+Z/2:I,H+(j?N*F:0),0),ee(j?L:I+Z/2,H+(j?0:N*F),0)),X.scale.x=X.scale.z=1}),_.visible=g>6.4;{let X=g<8.4?1:g<9.6?1-(g-8.4)/1.2:0;p.emissive.setRGB(1,.15,0),p.emissiveIntensity=1.4*X,p.color.setRGB(.77+.23*X,.79-.5*X,.82-.74*X)}if(g<9)_.position.set(a.position.x-16-2,64,0);else if(g<9.4)_.position.set(60-18.5-6*Ke((g-9)/.4),64,0);else if(g<10.2){let X=(g-9.4)/.8;_.position.set(36,64-30*X*X,0)}else if(g<10.5)_.visible=!1;else if(g<12){let X=(g-10.5)/1.5;_.position.set(40,30-20*X,30+28*X)}else _.visible=!1},n.userData.view=ee(-.3,0,1),n.userData.zoom=.8,n.userData.pinY=110,n}function Sy(){let i=new oe({map:Ds(($,xe)=>{$.fillStyle="#8a6a48",$.fillRect(0,0,xe,xe);for(let W=0;W<5e3;W++)$.fillStyle=Math.random()<.5?"#6e5236":"#a4835e",$.fillRect(Math.random()*xe,Math.random()*xe,1.5,1.5)},256,[2,2]),roughness:.95}),e=new oe({color:4935768,metalness:.6,roughness:.4}),t=new oe({color:1907223,roughness:1}),n=new oe({color:13114880,emissive:16726528,emissiveIntensity:1.3,roughness:.4}),s=new Xe,r=Aa(110,56,40);r.position.set(10,0,0),s.add(r),s.add(h(D(22,24,44,ce.grey,32),-82,22,0),h(new Ie(new Zt(22.5,1.4,8,32),ce.machRed),-82,30,0,Math.PI/2),h(D(14,14,.4,n,24),-82,44.3,0),h(D(23,23,6,ce.grey,32),-82,47,-44),h(P(4,4,30,b.steelDark),-82,45,-24),h(D(2.4,2.4,44,b.steelDark),-82,22,-44),h(D(8,8,2,b.steelDark),-82,1,-44),h(D(3,3,20,b.steelDark),-104,10,14,0,0,1.2),h(fe(10,8,8,1,ce.dark),-114,6,22));let a=$=>{let xe=he(h(P(44,$,2,e),0,$/2,15),h(P(44,$,2,e),0,$/2,-15),h(P(2,$,28,e),21,$/2,0),h(P(2,$,28,e),-21,$/2,0));for(let W of[-24,24])xe.add(h(D(1,1,6,e),W,$/2,0,0,0,Math.PI/2));return xe},o=40.2,l=14;s.add(h(P(48,1,34,b.beech),0,o+.5,0));let c=new Xe;c.position.set(0,o+1,0),s.add(c);let d=new Xe;d.position.y=l/2,c.add(d);let u=a(l);u.position.y=-l/2,d.add(u);let f=h(P(40,1,28,i),0,-l/2,0);d.add(f);let p=new Xe;p.position.set(0,-l/2+2.5,0),d.add(p);let _=h(D(9.6,9.6,.3,t,32),0,l+1.25,0);s.add(_),_.position.y=o+1+l+.2;let y=new Xe;s.add(y);let m=a(l);y.add(m);let x=h(P(40,l,28,i),0,l/2,0);y.add(x);let S=[h(D(2.2,3,18,b.beech,16),-14,9,0),h(D(3.6,3.6,18,b.beech,16),14,9,0)];S.forEach($=>y.add($));let A=[h(D(3,3,.3,t,16),-14,l+.2,0),h(D(3.6,3.6,.3,t,16),14,l+.2,0)];A.forEach($=>y.add($));let M=[h(D(3,3,.4,n,16),-14,l+.4,0),h(D(3.6,3.6,.4,n,16),14,l+.4,0)];M.forEach($=>y.add($));let C=he(h(D(.9,.9,90,b.steelDark),0,0,0,0,0,Math.PI/2),h(P(2,10,2,b.steelDark),-45,0,0),h(P(2,2,16,b.black),-45,-5,0),h(P(2,10,2,b.steelDark),45,0,0),h(P(2,2,16,b.black),45,-5,0),h(new Ie(new Zt(7.4,.8,8,24),b.steelDark),0,-2,0,Math.PI/2)),T=he(h(D(7,5,14,new oe({color:5917248,roughness:.8}),20),0,-6,0),h(D(6.4,6.4,.3,n,20),0,.9,0));C.add(T),s.add(C);let g=We(new Et(.9,.9,1,10),n);s.add(g);let w=Gh("al",{sand:!0}),B=he(),I=new Xe;I.rotation.x=Math.PI/2,B.add(I);let L=he(h(D(2.2,3,18,w,16),-14,9,0),h(P(14,2,3,w),-7.5,0,0)),Z=he(h(D(3.6,3.6,18,w,16),14,9,0),h(P(8,2,3,w),11,0,0));B.add(L,Z),s.add(B);let K=h(new Ie(new Ki(26,10,24),i),0,o+5,0);s.add(K);let F=new Xe;F.rotation.x=Math.PI/2,F.position.set(48,40+2.5,8),s.add(F);let X=($,xe)=>{let W=vn[$].make(xe).obj;return W.rotation.set(0,0,0),Of(W,19)},N=($,xe)=>{let W=ai[xe]||ai.al;w.color.setHex(W.col),w.metalness=W.metal,I.clear(),I.add(X($,w)),p.clear();let G=X($,b.beech);G.rotation.x=Math.PI/2,p.add(G),F.clear(),F.add(X($,w))};N("wheel","al"),s.userData.setProduct=N,s.userData.product={key:"wheel",col:"al",point:ee(48,46,8)};let j=he(h(P(30,1,24,ce.blue),0,1,0),h(P(30,12,1,ce.blue),0,6,12),h(P(30,12,1,ce.blue),0,6,-12),h(P(1,12,24,ce.blue),15,6,0),h(P(1,12,24,ce.blue),-15,6,0));j.position.set(85,0,10),s.add(j);let H=ee(-82,48,0),U=ee(-4,o+1+2*l+22,0),z=n.clone();return M.forEach($=>$.material=z),s.userData.anim=$=>{let W=$%26;f.scale.y=l*(W<.3?0:W<2?Ke((W-.3)/1.7):1),f.position.y=-l/2+f.scale.y/2,d.rotation.x=W<2?0:W<3?Math.PI*Ke(W-2):Math.PI;let G=W>7.4&&W<8.4?Ke((W-7.4)/1):W>=8.4?1:0;p.visible=W<8.4,p.position.set(0,-l/2+2.5-22*G,0),_.visible=W>=8.2&&W<19.5;let ne=o+1+l,me=ne+40;W>=3&&W<7.2?me=ne+40*(1-Ke((W-3)/.8)):W>=7.2&&W<8.6?me=ne+30*Ke((W-7.2)/.6):W>=8.6&&W<17?me=ne+30*(1-Ke((W-8.6)/.7)):W>=17&&(me=ne+60*Ke((W-17)/.8)),y.position.set(0,me,0),y.visible=W>=3&&W<17.8,x.scale.y=W<4?.001:W<6?Ke((W-4)/2):1,x.position.y=l*x.scale.y/2,S.forEach(ye=>{ye.visible=W>=3.2&&W<7,ye.position.y=9+(W>6?20*Ke((W-6)/.8):0)}),A.forEach(ye=>ye.visible=W>=6.6);let ge=[[9.5,H],[10.3,H.clone().add(ee(0,40,0))],[11.4,U.clone()],[13,U.clone()],[14,H.clone().add(ee(0,40,0))],[14.6,H]],Ee=H.clone();for(let ye=0;ye<ge.length-1;ye++)W>=ge[ye][0]&&W<ge[ye+1][0]&&(Ee=ge[ye][1].clone().lerp(ge[ye+1][1],Ke((W-ge[ye][0])/(ge[ye+1][0]-ge[ye][0]))));C.position.copy(Ee),T.rotation.z=W>11.4&&W<13?Math.sin(Math.PI*(W-11.4)/1.6)*1.1:0,g.visible=W>11.7&&W<12.8,g.visible&&Fl(g,ee(Ee.x-7,Ee.y-3,0),ee(-14,ne+l+.5,0));let He=W>=11.9,at=W<11.9?0:W<14.6?1:W<17?1-(W-14.6)/2.4:0;M.forEach(ye=>ye.visible=He&&W<17.8),z.emissiveIntensity=1.3*at,z.color.copy(w.color).lerp(new tt(.78,.12,0),at),z.metalness=.75*(1-at),z.roughness=.32+.1*at,f.visible=W<17.4,u.visible=!0,K.visible=W>=17.4&&W<25,K.scale.set(1,W<18?Ke((W-17.4)/.6):1,1),B.visible=W>=17.4;let ze=ee(0,o+1+2.5,0),Ye=ee(30,40+2.5+12,8),Qe=ee(48,40+2.5,8);if(W<18.2)B.position.copy(ze);else if(W<19.6){let ye=Ke((W-18.2)/1.4);B.position.copy(ze.clone().lerp(Ye,ye))}else W<20.4?B.position.copy(Ye.clone().lerp(Qe,Ke((W-19.6)/.8))):B.position.copy(Qe);let pe=W<21?0:Ke(Math.min(1,(W-21)/1.4));L.visible=Z.visible=W<22.6;for(let[ye,Ae]of[[L,0],[Z,0]])ye.position.set(37*pe,-36*pe+12*Math.sin(Math.PI*pe),2*pe);F.visible=W<17.4},s.userData.view=ee(.15,0,1),s.userData.zoom=.75,s.userData.pinY=80,s}function Uf(i){i=i||{};let e=new Xe,t=-900,n=365,s=-370,r=230,a=new oe({color:5593439,roughness:.92}),o=new oe({color:14271322,roughness:.7});e.add(h(P(n-t,4,r-s,a),(t+n)/2,-2,(s+r)/2));let l=(u,f,p,_)=>{e.add(h(P(f-u,.4,2,o),(u+f)/2,.2,p),h(P(f-u,.4,2,o),(u+f)/2,.2,_),h(P(2,.4,_-p,o),u,.2,(p+_)/2),h(P(2,.4,_-p,o),f,.2,(p+_)/2))};l(-515,155,-355,212),l(172,352,-255,-8),l(172,352,30,212),i.higher?l(-850,-545,-140,85):(l(-850,-545,-255,-30),l(-850,-545,50,212));let c=[];e.userData.items=c;let d=(u,f,p,_,y,m=0)=>(u.rotation.y=_||0,u.position.set(f,0,p),e.add(u),u.userData.key=y,u.userData.idle=m,c.push({key:y,obj:u,anim:u.userData.anim}),u.userData.anim&&u.userData.anim(m),u);return d(My(),-178,0,0,"rotoMoulder",0),d(by(),250,-128,Math.PI/2,"injectionMoulder",0),d(yy(),258,150,Math.PI/2,"vacuumFormer",2.6),i.higher?d(nf(),-700,-35,0,"dieCaster",0):(d(nf(),-700,-150,0,"dieCaster",0),d(Sy(),-705,135,0,"sandCasting",0)),e.userData.center=ee(-270,0,-60),e}var In={abs:{n:"ABS",full:"Acrylonitrile butadiene styrene",kind:"thermo",blurb:"Tough, hard and scratch resistant, with a high-quality glossy finish.",uses:"Games controllers, appliance casings, toys.",cols:[14168636,3108816,2303531,15921902,15886e3,3119706]},pp:{n:"Polypropylene",full:"Polypropylene (PP)",kind:"thermo",blurb:"Light, tough and flexible, with good chemical resistance. Can be bent many times without breaking (living hinges).",uses:"Phone cases, bottle caps, food containers.",cols:[15526624,14168636,3108816,3119706,15886e3,2303531]},hdpe:{n:"HDPE",full:"High density polyethylene",kind:"thermo",blurb:"Tough and stiff, with good chemical resistance. Slightly waxy feel.",uses:"Buckets, bottle caps, crates, bottles.",cols:[15921902,3108816,14168636,3119706,2303531]},acrylic:{n:"Acrylic",full:"Polymethyl methacrylate (PMMA)",kind:"thermo",blurb:"Rigid and hard, can be crystal clear. Glossy, but scratches easily and is brittle.",uses:"Light covers and lenses, displays, signs.",cols:["clear",14168636,3108816,5922662]},uf:{n:"Urea formaldehyde",full:"Urea formaldehyde (UF)",kind:"set",blurb:"Thermosetting: hard, brittle, heat resistant and a good electrical insulator.",uses:"Electrical plugs, sockets and switches."},mf:{n:"Melamine formaldehyde",full:"Melamine formaldehyde (MF)",kind:"set",blurb:"Thermosetting: hard, heat resistant, stain resistant and safe with food.",uses:"Tableware, kitchen worktop laminates."}},Ta={14168636:"Red",3108816:"Blue",2303531:"Black",15921902:"White",15886e3:"Pink",3119706:"Green",15526624:"Natural",5922662:"Smoke grey",clear:"Clear"};function Hl(i,e={}){let t=i==="clear";return new oe({color:t?14675960:i,roughness:e.rough??(t?.04:.3),metalness:0,side:en,transparent:t||!!e.tint,opacity:t?.42:e.tint?.6:1,depthWrite:!t})}var Xn=(i,e=.7)=>{let t=i.clone();return t.color.multiplyScalar(e),t};function Ey(i){let e=new Xe,t=32,n=16,s=9.6,r=1.2;e.add(h(P(t,r,n,i),0,s-r/2,0),h(P(t,s,r,i),0,s/2,n/2-r/2),h(P(t,s,r,i),0,s/2,-n/2+r/2),h(P(r,s,n,i),t/2-r/2,s/2,0),h(P(r,s,n,i),-t/2+r/2,s/2,0));for(let c=0;c<4;c++)for(let d=0;d<2;d++)e.add(h(D(2.4,2.4,1.8,i,24),-12+c*8,s+.9,-4+d*8));for(let c=0;c<3;c++)e.add(h(new Ie(new Et(3.25,3.25,s-r,24,1,!0),i),-8+c*8,(s-r)/2,0),h(new Ie(new Et(2.4,2.4,s-r,24,1,!0),i),-8+c*8,(s-r)/2,0),h(new Ie(new or(2.4,3.25,24),i),-8+c*8,.01,0,Math.PI/2));let a=new oe({color:new tt(i.color).multiplyScalar(.45),roughness:.85,side:en});for(let c of[-12,12])for(let d of[-4,4])e.add(h(D(1.3,1.3,.15,a,20),c,s-r-.09,d),h(new Ie(new Zt(1.3,.12,6,20),a),c,s-r-.1,d,Math.PI/2));e.add(h(D(1.1,.8,.6,a,16),-4,s-r-.3,0),h(D(1.1,.8,.6,a,16),4,s-r-.3,0));let o=new oe({color:new tt(i.color).multiplyScalar(.35),roughness:.6});return e.add(h(P(t+.14,.32,n+.14,o),0,.5,0)),e.position.y=-s/2,{obj:he(e),feat:[{o:e,p:ee(-4,s+1.8,4),t:"Fine detail",d:"Injection moulding copies every detail of the mould very accurately, like these crisp studs, with a glossy finish straight from the mould."},{o:e,p:ee(t/2+.1,.5,4),t:"Split line",d:"The thin line round the bottom edge is where the two halves of the mould met."},{o:e,p:ee(12,s-r-.2,4),t:"Ejector pin marks",d:"Round marks inside, where the ejector pins pushed the brick out of the mould.",pose:{x:-2.4,y:.25}},{o:e,p:ee(4,s-r-.6,0),t:"Injection points",d:"Small marks where the molten plastic was injected into the mould. They are hidden inside the brick.",pose:{x:-2.4,y:-.25}},{o:e,p:ee(-8,.2,0),t:"Hollow with tubes",d:"Thin walls of even thickness cool evenly and use less plastic. The tubes underneath grip the studs of the brick below.",pose:{x:-2.2,y:0}},{o:e,p:ee(-t/2-.1,6,-4),t:"Draft angle",d:"The sides taper very slightly so the product slides out of the mould easily."}]}}function sf(i=1,e=1){let t=[];for(let n=0;n<96;n++){let s=n/96*Math.PI*2,r=Math.cos(s),a=Math.sin(s),o=42*r,l=19*a,c=u=>Math.exp(-((((s-u+Math.PI*3)%(Math.PI*2)-Math.PI)/.5)**2)),d=24*(c(-2.2)+c(-.94));o+=d*r*.55,l+=d*a*1.1,a>0&&(l*=.8),t.push(new be(o*i,l*e))}return t}function Sa(i,e=!0,t=!1){let n=new ct(sf());e&&!t&&n.holes.push(new Ft(sf(.94,.88).reverse()));let s=new zt(n,{depth:i,bevelEnabled:t,bevelSize:1.4,bevelThickness:1.4,bevelSegments:3,curveSegments:24});return s.rotateX(-Math.PI/2),s}function wy(i){let e=new oe({color:2500652,roughness:.5}),t=Xn(i,.78),n=new Xe,s=new Xe;n.add(We(Sa(1.6,!1,!1),i),h(We(Sa(9),i),0,1.6,0));let r=[[-26,-4],[26,-4],[-36,20],[36,20]];for(let[u,f]of r){n.add(h(D(2.6,2.6,8.5,i,20),u,5.8,f),h(D(1,1,.2,e,12),u,10.1,f));for(let p=0;p<4;p++){let _=p*Math.PI/2,y=new ct([new be(0,0),new be(4,0),new be(0,6)]),m=We(new zt(y,{depth:.8,bevelEnabled:!1}),i);m.position.set(u+Math.cos(_)*2.4,1.6,f+Math.sin(_)*2.4),m.rotation.y=-_,a(m),n.add(m)}}function a(u){u.geometry.translate(0,0,-.4)}{let u=Xn(i,.8);for(let[f,p]of[[-8,10],[8,10],[-30,12],[30,12]])n.add(h(D(1.2,1.2,.1,u,16),f,1.66,p))}n.add(h(P(40,6,.9,i),0,4.6,-8),h(P(.9,6,26,i),-12,4.6,6),h(P(.9,6,26,i),12,4.6,6),h(P(14,5,.9,i),-30,4.1,8),h(P(14,5,.9,i),30,4.1,8)),s.add(h(We(Sa(5.6),i),0,0,0),h(We(Sa(1.4,!1,!0),i),0,5.6,0));for(let[u,f]of[[28,-10],[33,-5],[23,-5],[28,0]])s.add(h(D(2.2,2.2,2,t,20),u,8.4,f));s.add(h(P(9,1.6,3,t),-28,8.2,-5),h(P(3,1.6,9,t),-28,8.2,-5));for(let u of[-13,13])s.add(h(D(4.6,4.6,1,e,24),u,7.8,9),h(D(2,2,2.4,e,16),u,9,9),h(D(4.2,4.2,1.4,e,24),u,10.6,9));s.add(h(D(2.6,2.6,.8,t,20),0,7.9,-8));let o=Xn(i,.55),l=h(We(Sa(.25),o),0,10.5,0);l.scale.set(1.004,1,1.004),s.position.y=10.6;let c=he(n,s,l);return c.position.y=-8,{obj:he(c),feat:[{o:n,p:ee(43.2,10.6,0),t:"Split line",d:"The controller is made in two parts, a top and a bottom. A fine line shows where they join."},{o:s,p:ee(28,9.6,-5),t:"Fine detail",d:"Button holes, curves and textures are moulded in one go, with a high-quality finish straight from the mould."},{o:s,p:ee(-22,7.1,6),t:"Material",d:"ABS: tough, hard and scratch resistant, with a glossy finish. Ideal for products that get handled and dropped."},{o:n,p:ee(8,1.8,10),t:"Ejector pin marks",d:"Round marks on the inside, where ejector pins pushed each part out of the mould.",inside:!0},{o:n,p:ee(-26,10.3,-4),t:"Bosses",d:"Hollow pillars that screws go into to hold the two halves together.",inside:!0,higher:!0},{o:n,p:ee(6,7.7,-8),t:"Ribs",d:"Thin walls across the inside that make the part stiff and strong without making it thick and heavy.",inside:!0,higher:!0},{o:n,p:ee(39,4.6,20),t:"Webs",d:"Small triangular supports that brace the bosses so they do not snap.",inside:!0,higher:!0},{o:n,p:ee(-12,10.7,-15.6),t:"Thin, even walls",d:"Walls of the same thickness all over cool at the same rate, so the part does not warp or sink.",inside:!0}],explode:u=>{s.position.y=10.6+30*u,l.visible=u<.05}}}function Ty(i){let e=new oe({color:2500652,roughness:.6}),t=(o,l)=>{let c=new Xe,d=(S,A,M,C)=>new Et(S,A,M,40,1,!0,-Math.PI/2,Math.PI),u=We(d(14,14,70),i);u.rotation.z=Math.PI/2,c.add(u);let f=We(d(9,13.6,16),i);f.rotation.z=Math.PI/2,f.position.x=-43,c.add(f);let p=new sr(14,40,-Math.PI/2,Math.PI);p.rotateY(-Math.PI/2);let _=We(p,e);_.position.x=35,c.add(_);let y=We(d(8.5,9.5,46),i);y.position.set(10,-30,0),y.rotation.z=-.22,c.add(y);let m=new sr(9.5,30,0,Math.PI);m.rotateX(Math.PI/2);let x=We(m,i);if(x.position.set(5,-52.4,0),x.rotation.z=-.22,c.add(x),c.add(h(P(5,1.2,.6,e),-6,-8,13.9),h(P(2.4,3.4,1,Xn(i,.7)),9,-22,9)),l){for(let[S,A]of[[-20,0],[22,0],[8,-20],[13,-42]]){c.add(h(D(2.4,2.4,12,i,18),S,A,6,Math.PI/2),h(D(1,1,12.2,e,12),S,A,6,Math.PI/2));for(let M of[0,Math.PI]){let C=h(P(.8,5,8,i),S+Math.cos(M)*3.2,A,8);c.add(C)}}for(let S of[-28,-10,8,26]){let A=new or(10.6,14,32,1,-Math.PI/2,Math.PI);A.rotateY(-Math.PI/2);let M=We(A,i);M.position.x=S,c.add(M)}}return o<0&&(c.scale.z=-1),c},n=t(1,!1),s=t(-1,!0);n.position.z=.12,s.position.z=-.12;let r=he(n,s);return r.position.y=14,{obj:he(r),feat:[{o:s,p:ee(0,14,0),t:"Split line",d:"The casing is made in two halves that meet along this line."},{o:n,p:ee(-47,0,11),t:"Fine detail",d:"Smooth curves, the nozzle and the switch openings are all moulded in one go."},{o:n,p:ee(10,-30,9.6),t:"Material",d:"ABS: tough and hard, a good electrical insulator and has a glossy finish."},{o:s,p:ee(-20,0,.4),t:"Bosses",d:"Hollow pillars for the screws that hold the two halves together.",inside:!0,higher:!0},{o:s,p:ee(-28,12.3,.4),t:"Ribs",d:"Curved ribs inside stiffen the barrel without making the walls thick.",inside:!0,higher:!0},{o:s,p:ee(11.2,-17.5,6),t:"Webs",d:"Thin supports that brace each boss against the wall.",inside:!0,higher:!0}],explode:o=>{n.position.z=.12+42*o,r.rotation.x=-Math.PI/2*o,r.position.y=14-8*o}}}function os(i,e,t){let n=new ct;return n.moveTo(-i/2+t,-e/2),n.lineTo(i/2-t,-e/2),n.quadraticCurveTo(i/2,-e/2,i/2,-e/2+t),n.lineTo(i/2,e/2-t),n.quadraticCurveTo(i/2,e/2,i/2-t,e/2),n.lineTo(-i/2+t,e/2),n.quadraticCurveTo(-i/2,e/2,-i/2,e/2-t),n.lineTo(-i/2,-e/2+t),n.quadraticCurveTo(-i/2,-e/2,-i/2+t,-e/2),n}function Ay(i){let e=os(38,78,7),t=os(13,13,4),n=new Ft(os(13,13,4).getPoints(8).map(d=>new be(d.x-9,d.y+26)));e.holes.push(n);let s=new zt(e,{depth:1,bevelEnabled:!0,bevelSize:.6,bevelThickness:.6,bevelSegments:2});s.rotateX(-Math.PI/2);let r=os(38,78,7);r.holes.push(new Ft(os(35.6,75.6,6).getPoints(12).reverse()));let a=new zt(r,{depth:7,bevelEnabled:!1});a.rotateX(-Math.PI/2);let o=he(We(s,i),h(We(a,i),0,1,0),h(P(1.6,1.4,14,i),19.4,5,-10),h(P(1.6,1.4,8,i),-19.4,5,-12));for(let d of[-10,10,26])o.add(h(D(1.2,1.2,.1,Xn(i,.82),16),-6,1.62,d));o.rotation.x=.75,o.updateMatrix();let l=(d,u,f)=>ee(d,u,f).applyMatrix4(o.matrix);return{obj:he(o),feat:[{p:l(-9,1.6,-26),t:"Moulded-in holes",d:"Openings like this camera cut-out are formed by the mould, so no drilling or cutting is needed."},{p:l(19,7,8),t:"Thin, even walls",d:"Thin walls of the same thickness all round keep the case light and stop it warping as it cools."},{p:l(4,1.8,8),t:"Material",d:"Polypropylene: tough and flexible, so the case can bend to clip on and take knocks."},{p:l(-6,1.8,26),t:"Ejector pin marks",d:"Small round marks on the inside where ejector pins pushed the case out of the mould."}]}}function Ry(i){let e=new Xe,t=15,n=13;e.add(h(D(t,t,1.4,i,48),0,n-.7,0),h(new Ie(new Et(t,t,n-1.4,48,1,!0),i),0,(n-1.4)/2,0));for(let o=0;o<60;o++){let l=o/60*Math.PI*2;e.add(h(P(.7,n-3,.7,i),Math.cos(l)*(t+.25),n/2,Math.sin(l)*(t+.25),0,-l,0))}let s=[];for(let o=0;o<=200;o++){let l=o/200,c=l*Math.PI*2*2.2;s.push(ee(Math.cos(c)*(t-1.2),2+l*7,Math.sin(c)*(t-1.2)))}e.add(We(new wn(new nn(s),300,.75,8),i)),e.add(h(new Ie(new Et(t+.2,t+.2,2.6,48,1,!0),i),0,-2.4,0));for(let o=0;o<12;o++){let l=o/12*Math.PI*2;e.add(h(P(1,1.6,.6,i),Math.cos(l)*(t+.2),-.6,Math.sin(l)*(t+.2),0,-l,0))}e.position.y=-5,e.rotation.x=Math.PI+.75,e.updateMatrix();let r=(o,l,c)=>ee(o,l,c).applyMatrix4(e.matrix);return{obj:he(e),feat:[{p:r(0,5,-13.6),t:"Internal thread",d:"The screw thread inside is moulded at the same time as the rest of the cap."},{p:r(15.6,7,0),t:"Grip ribs",d:"Fine ribs round the outside make the cap easier to grip and twist."},{p:r(0,-3.6,15.4),t:"Tamper ring",d:"A ring joined by tiny bridges that snap when the cap is first opened."},{p:r(-15.6,9,0),t:"Material",d:"Polypropylene or HDPE: tough, slightly flexible to seal well, and unaffected by most drinks."}]}}function Cy(i){let e=new Xe;e.add(h(new Ie(new Et(24,18,34,48,1,!0),i),0,17,0),h(D(18,18,1.4,i,48),0,.7,0),h(new Ie(new Zt(24.6,1.2,10,48),i),0,34,0,Math.PI/2));for(let s of[-1,1])e.add(h(P(3,6,4,i),s*24.4,30,0));let t=[];for(let s=0;s<=40;s++){let r=Math.PI*s/40;t.push(ee(Math.cos(r)*25.5,30+Math.sin(r)*22,0))}return e.add(We(new wn(new nn(t),60,.6,8),b.steelShiny)),e.add(h(D(1.6,1.6,.2,Xn(i,.8),16),0,1.5,0)),e.position.y=-18,{obj:he(e),feat:[{p:ee(21,14,6),t:"Draft angle",d:"The sides taper outwards so the bucket slides off the mould easily, and so buckets stack inside each other."},{p:ee(0,16,24.5),t:"Rim",d:"A thicker rim round the top makes the thin wall stiff."},{p:ee(0,-16,0),t:"Injection point",d:"A small round mark in the middle of the base shows where the molten plastic was injected."},{p:ee(-20,-6,10),t:"Material",d:"HDPE or polypropylene: tough, stiff and resistant to chemicals."}]}}function Py(i){let e=new Xe,t=os(40,22,6),n=new zt(t,{depth:4,bevelEnabled:!0,bevelSize:1.6,bevelThickness:2,bevelSegments:4});n.rotateX(-Math.PI/2),e.add(We(n,i));for(let r=0;r<9;r++)e.add(h(P(1.2,1.2,18,i),-16+r*4,-.6,0,0,0,Math.PI/4));for(let r of[-1,1])e.add(h(P(4,4,2,i),r*18,-2,0));return e.rotation.x=.9,{obj:he(e),feat:[{p:ee(0,6,3),t:"Clear and glossy",d:"Acrylic can be crystal clear, with a glossy surface straight from the mould."},{p:ee(-12,0,-4),t:"Fine detail",d:"Tiny prisms on the back spread the light. Injection moulding copies detail this fine perfectly."},{p:ee(18,-2,0),t:"Clips",d:"Clips are moulded in so the lens snaps into the light without screws."},{p:ee(8,6,6),t:"Material",d:"Acrylic: rigid and clear, but brittle and scratches easily."}]}}var vn={brick:{n:"Toy building brick",make:Ey,mats:["abs"]},controller:{n:"Games controller",make:wy,mats:["abs"]},hairdryer:{n:"Hairdryer casing",make:Ty,mats:["abs"]},phonecase:{n:"Phone case",make:Ay,mats:["pp"]},cap:{n:"Bottle cap",make:Ry,mats:["pp","hdpe"]},bucket:{n:"Bucket",make:Cy,mats:["hdpe","pp"]},lens:{n:"Bike light lens",make:Py,mats:["acrylic"]}},kf={brick:"Studs and tubes need crisp, accurate detail.",controller:"Two shells with buttons, bosses and ribs.",hairdryer:"Two halves that screw together round the motor.",phonecase:"Thin and flexible, clips round your phone.",cap:"Thread and grip ribs moulded in one go.",bucket:"Tapered sides so it releases and stacks.",lens:"Crystal clear, with fine prisms on the back."},ai={al:{n:"Aluminium",kind:"nf",blurb:"Light, corrosion resistant and easy to cast. Melts at about 660 \xB0C.",uses:"Model cars, engine parts, cookware.",col:12896976,metal:.8,rough:.32},brass:{n:"Brass",kind:"nf",blurb:"An alloy of copper and zinc: corrosion resistant, attractive gold colour. Melts at about 900 \xB0C.",uses:"Taps, door handles, musical instruments.",col:14070364,metal:.85,rough:.3},cu:{n:"Copper",kind:"nf",blurb:"Soft, ductile and an excellent conductor of heat and electricity. Melts at about 1,085 \xB0C.",uses:"Pipes, wiring, cookware.",col:13072202,metal:.85,rough:.3},ci:{n:"Cast iron",kind:"fe",blurb:"Hard and strong in compression but brittle. Flows well when molten (about 1,150 \xB0C), so it casts very well.",uses:"Weights, engine blocks, vices, cookware.",col:5593439,metal:.6,rough:.75},ms:{n:"Mild steel",kind:"fe",blurb:"Tough and ductile, but rusts if not protected. Melts at about 1,450 \xB0C.",uses:"Car bodies, nuts and bolts, girders.",col:9278362,metal:.8,rough:.4},ss:{n:"Stainless steel",kind:"fe",blurb:"Hard and very corrosion resistant. Melts at about 1,450 \xB0C.",uses:"Cutlery, sinks, kitchen equipment.",col:12172996,metal:.9,rough:.22}};In.ps={n:"Polystyrene",full:"Polystyrene (including high impact polystyrene, HIPS)",kind:"thermo",blurb:"Light, rigid and cheap. Easy to mould. High impact polystyrene (HIPS) is tougher and is the sheet most used for vacuum forming.",uses:"Model kits, packaging, coat hangers, vacuum-formed trays.",cols:[15921902,2303531,14168636,3108816,3119706,10185727]};In.pe={n:"Polyethylene",full:"Polyethylene (PE)",kind:"thermo",extra:!0,blurb:"Tough and flexible, with excellent chemical resistance. Not on the National 5 materials list, but it is the plastic used most for rotational moulding.",uses:"Kayaks, water tanks, road barriers, bins.",cols:[8378060,14168636,3108816,3119706,15921902,2303531]};delete In.hdpe;vn.cap.mats=["pp"];vn.bucket.mats=["pp"];var Iy={8378060:"Turquoise",10185727:"Purple"};Object.assign(Ta,Iy);function Gh(i,e={}){let t=ai[i]||ai.al;if(e.sand){let n=new tt(t.col).lerp(new tt(9080209),.45).multiplyScalar(.82);return new oe({color:n,metalness:.35,roughness:.88,side:en,bumpMap:Dy(),bumpScale:2.2})}return new oe({color:t.col,metalness:t.metal,roughness:e.rough??t.rough,side:en})}var Cs=null;function Dy(){if(Cs)return Cs;let i=512,e=document.createElement("canvas");e.width=e.height=i;let t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,i,i);for(let s=0;s<2600;s++){let r=Math.random()*i,a=Math.random()*i,o=3+Math.random()*9,l=Math.random()<.6;for(let c of[-i,0,i])for(let d of[-i,0,i]){let u=t.createRadialGradient(r+c,a+d,0,r+c,a+d,o);u.addColorStop(0,l?"rgba(255,255,255,.22)":"rgba(0,0,0,.2)"),u.addColorStop(1,"rgba(128,128,128,0)"),t.fillStyle=u,t.fillRect(r+c-o,a+d-o,2*o,2*o)}}let n=t.getImageData(0,0,i,i);for(let s=0;s<n.data.length;s+=4){let r=(Math.random()-.5)*46;n.data[s]+=r,n.data[s+1]+=r,n.data[s+2]+=r}return t.putImageData(n,0,0),Cs=new An(e),Cs.wrapS=Cs.wrapT=Zi,Cs.repeat.set(2,2),Cs}function Ly(i,e,t=160,n=24){let s=i.computeFrenetFrames(t,!1),r=[],a=[];for(let c=0;c<=t;c++){let d=c/t,u=i.getPointAt(d),f=s.normals[c],p=s.binormals[c],_=e(d);for(let y=0;y<=n;y++){let m=y/n*Math.PI*2,x=Math.cos(m),S=Math.sin(m);r.push(u.x+_*(x*f.x+S*p.x),u.y+_*(x*f.y+S*p.y),u.z+_*(x*f.z+S*p.z))}}for(let c=0;c<t;c++)for(let d=0;d<n;d++){let u=c*(n+1)+d,f=u+n+1;a.push(u,f,u+1,f,f+1,u+1)}let o=new Xt;o.setAttribute("position",new dt(r,3));let l=[];for(let c=0;c<=t;c++)for(let d=0;d<=n;d++)l.push(c/t*4,d/n);return o.setAttribute("uv",new dt(l,2)),o.setIndex(a),o.computeVertexNormals(),o}function Of(i,e){let t=new Xe;t.add(i);let n=new Ct().setFromObject(i),s=e/Math.max(...n.getSize(ee(0,0,0)).toArray());i.scale.multiplyScalar(s);let r=new Ct().setFromObject(i).getCenter(ee(0,0,0));return i.position.sub(r),t}var Ra=(i,e=.6)=>{let t=i.clone();return t.color.multiplyScalar(e),t.bumpMap=null,t},wh=1.6;function rf(i){let n=[],s=[];for(let a=0;a<=100;a++){let o=a/100,l=-Yt/2+Yt*o,c=Math.max(0,yi(o)-i),d=Math.max(0,Mr(o)-i),u=Math.max(0,wa(o)-i),f=ri(o);for(let p=0;p<=56;p++){let _=p/56*Math.PI*2,y=Math.cos(_),m=Math.sin(_);n.push(l,f+(m>0?d*Math.pow(m,2/2.2):-u*Math.pow(-m,2/2.6)),c*Math.sign(y)*Math.pow(Math.abs(y),2/2.4))}}for(let a=0;a<100;a++)for(let o=0;o<56;o++){let l=a*57+o,c=l+56+1,d=-Yt/2+Yt*(a+.5)/100,u=(o+.5)/56*Math.PI*2,f=yi((a+.5)/100)*Math.sign(Math.cos(u))*Math.pow(Math.abs(Math.cos(u)),2/2.4);Math.sin(u)>.2&&((d-as)/Bl)**2+(f/zh)**2<1||s.push(l,c,l+1,c,c+1,l+1)}let r=new Xt;return r.setAttribute("position",new dt(n,3)),r.setIndex(s),r.computeVertexNormals(),r}function Ny(i){let e=new Xe,t=i.clone();t.side=sn,t.color=new tt(i.color).multiplyScalar(.62),i.side=pi,e.add(We(rf(0),i),new Ie(rf(0),t));let n=[];for(let s=0;s<=64;s++){let r=s/64*Math.PI*2,a=as+Bl*1.04*Math.cos(r),o=zh*1.06*Math.sin(r);n.push(ee(a,Ps(a,o)+.5,o))}return e.add(We(new wn(new nn(n,!0),128,1.5,10,!0),i)),{g:e,inner:t}}function Bf(i){(i.color.getHex()===15886e3||i.color.getHex()===16777215)&&i.color.setHex(8378060);let e=Ny(i),t=e.g,n=new oe({color:16738816,emissive:16727296,emissiveIntensity:.35,roughness:.5}),s=new oe({color:2764082,roughness:.6}),r=b.steelShiny,a=Xn(i,.55);for(let U of[1,-1]){let z=[];for(let $=2;$<=98;$++){let xe=$/100;z.push(ee(-Yt/2+Yt*xe,ri(xe),U*(yi(xe)+.15)))}t.add(We(new wn(new nn(z),120,.32,6),a))}let o=[[-70,-11],[-46,11],[-70,11],[-46,-11],[85,-6],[66,7],[85,6],[66,-7]];for(let[U,z]of o)t.add(h(D(.9,.9,.4,s,12),U,Ps(U,z)+.15,z));let l=new Xe;t.add(l);let c=U=>l.add(We(new wn(new nn(U.map(([z,$])=>ee(z,Ps(z,$)+1.4,$))),40,.5,6),n));for(let U of[-1,1])c([[-70,-11*U],[-58,0],[-46,11*U]]),c([[85,-6*U],[75,0],[66,7*U]]);for(let[U,z]of o){let $=Ps(U,z);l.add(h(new Ie(new Zt(1.4,.45,8,16),r),U,$+1.6,z,0,Math.atan2(z,U),0),h(D(.5,.5,4,r,10),U,$-.3,z),h(D(.95,.95,.5,r,12),U,$+2.6,z))}let d=50,u=Ps(d,0),f=he(h(D(8.5,8.5,1.6,s,32),0,0,0),h(new Ie(new Zt(8.5,.7,8,32),s),0,.8,0,Math.PI/2));f.position.set(d,u+.8,0),l.add(f),t.add(h(D(7.6,7.6,.3,s,32),d,u+.1,0)),l.add(h(fe(20,2.4,17,1,s),as+5,-5.4,0),h(fe(3,9,15,1,s),as+15,-1.5,0,0,0,.35));let p=new oe({color:new tt(i.color).multiplyScalar(.78),side:en,roughness:.5}),_=(U,z,$)=>{let xe=Math.cos(z),W=Math.sin(z),G=Math.max(0,yi(U)-$),ne=Math.max(0,Mr(U)-$),me=Math.max(0,wa(U)-$);return[G*Math.sign(xe)*Math.pow(Math.abs(xe),2/2.4),ri(U)+(W>0?ne*Math.pow(W,2/2.2):-me*Math.pow(-W,2/2.6))]},y=[];{let U=Ye=>ri(Ye)+Mr(Ye),z=Ye=>ri(Ye)-wa(Ye),$=Ye=>ri(Ye)+Mr(Ye)-wh,xe=Ye=>ri(Ye)-wa(Ye)+wh,W=Ye=>-Yt/2+Yt*Ye,G=Ye=>(Ye+Yt/2)/Yt,ne=G(as),me=G(as-Bl*1.02),ge=G(as+Bl*1.02),Ee=.045,He=.955,at=60,ze=(Ye,Qe,pe)=>{let ye=[],Ae=(Ue,De,qe)=>{for(let Ne=0;Ne<=at;Ne++){let et=Ue+(De-Ue)*Ne/at;ye.push(new be(W(et),qe(et)))}};return Ae(Ye,Qe,U),Ae(Qe,ne,z),Ae(ne,pe,xe),Ae(pe,Ye,$),new ct(ye)};y.push(new Li(ze(me,0,Ee)),new Li(ze(ge,1,He)))}let m=new Xe;y.forEach(U=>m.add(We(U,p))),m.visible=!1,t.add(m);let x=as,S=(x+Yt/2)/Yt,A=140,M=0;for(let U=0;U<=A;U++){let z=U/A*Math.PI;if(_(S,z,0)[0]<=zh*1.06){M=z;break}}let C=Math.PI-M,T=[],g=[];for(let U=0;U<=A;U++){let z=C+(2*Math.PI+M-C)*U/A;T.push(_(S,z,0)),g.push(_(S,z,wh))}let w=new ct;T.forEach(([U,z],$)=>w[$?"lineTo":"moveTo"](U,z));for(let U=g.length-1;U>=0;U--)w.lineTo(...g[U]);let B=new Li(w,1);B.rotateY(Math.PI/2);let I=We(B,p);I.position.x=x,I.visible=!1,t.add(I);let L=_(S,M,0),Z=new mn(ee(-1,0,0),1e5);[i,e.inner,a,s].forEach(U=>U.clippingPlanes=[Z]);let K=he(t),F=0,X=0,N=null,j=new mn(ee(0,0,-1),0),H=new mn(ee(-1,0,0),x);return{obj:K,acc:l,clip:!0,feat:[{o:t,p:ee(-30,Mr(.35)*.4+ri(.35),yi(.35)*.7),t:"Hollow, one piece",d:"Cut along its length, you can see the kayak is completely hollow, made in one piece with no joins to leak.",section:"long",zoom:.62},{o:t,p:ee(x,L[1]-3,L[0]-.8),t:"Even wall thickness",d:"Close up, the wall is about the same thickness all the way round, from the bottom of the hull up to the lip of the cockpit. The powder coats the inside of the mould evenly.",section:"cross",zoom:.2},{o:t,p:ee(-95,ri(.03)+1,0),t:"Large size",d:"This kayak is about 3 m long. Rotational moulding suits big hollow products because the moulds are fairly cheap and need no pressure."},{o:t,p:ee(-46,Ps(-46,11)+.5,11),t:"Fixing points",d:"Holes and threaded inserts can be built into the moulding so fittings like these deck-line hooks can be screwed on afterwards."},{o:t,p:ee(30,ri(.65),yi(.65)+.2),t:"Split line",d:"A fine line along the side where the two halves of the mould met."},{o:t,p:ee(10,-wa(.55)+1,4),t:"Surface finish",d:"The finish of the mould is copied onto the plastic, so it can be glossy or textured. No painting is needed: the colour goes all the way through."},{o:l,p:ee(-58,Ps(-58,0)+1.6,0),t:"Fittings",d:"Deck lines, hooks, the hatch cover and the seat are separate parts, added after moulding."}],tick:(U,z,$)=>{F=Math.min(1.2,F+z*.8);let xe=$&&$.section||null;xe&&xe!==N&&X>0?X=Math.max(0,X-z*3):(xe&&(N=xe),X=Math.max(0,Math.min(1,X+(xe?z:-z)*1.4))),X===0&&!xe&&(N=null);let W=!!N&&X>0,G=Ke(X),ne=Math.max(0,Math.min(1,(F-.75)*3.2)),me=ne<=0?0:1+2.2*Math.pow(ne-1,3)+1.2*Math.pow(ne-1,2);if(l.position.y=30*me*(1-G),l.visible=G<.5,N==="cross"?t.position.set(-x*G,-(L[1]-6)*G,-(L[0]-2)*G):t.position.set(0,0,0),(t.parent||t).updateMatrixWorld(!0),W){let ge=(N==="long"?j:H).clone(),Ee=N==="long"?40:Yt/2+12;ge.constant=(N==="long"?0:x)+(Ee-(N==="long"?0:x))*(1-G),Z.copy(ge).applyMatrix4(t.matrixWorld)}else Z.set(ee(-1,0,0),1e5);m.visible=N==="long"&&X>.97,I.visible=N==="cross"&&X>.97},pose:U=>U&&U.section==="long"?{y:0,x:.12}:U&&U.section==="cross"?{y:-Math.PI/2+.32,x:.12}:null}}function Fy(i){i.color.getHex()===15886e3&&i.color.setHex(14168636);let e=new ct;e.moveTo(-80,0),e.lineTo(-58,0),e.lineTo(-52,20),e.quadraticCurveTo(0,30,52,20),e.lineTo(58,0),e.lineTo(80,0),e.lineTo(80,64),e.quadraticCurveTo(80,72,72,74),e.lineTo(-72,74),e.quadraticCurveTo(-80,72,-80,64),e.lineTo(-80,0);let t=new Ft;t.moveTo(-40,52),t.lineTo(-20,52),t.quadraticCurveTo(-16,52,-16,56),t.quadraticCurveTo(-16,60,-20,60),t.lineTo(-40,60),t.quadraticCurveTo(-44,60,-44,56),t.quadraticCurveTo(-44,52,-40,52),e.holes.push(t);let n=new Ft;n.moveTo(20,52),n.lineTo(40,52),n.quadraticCurveTo(44,52,44,56),n.quadraticCurveTo(44,60,40,60),n.lineTo(20,60),n.quadraticCurveTo(16,60,16,56),n.quadraticCurveTo(16,52,20,52),e.holes.push(n);let s=new zt(e,{depth:30,bevelEnabled:!0,bevelSize:4,bevelThickness:4,bevelSegments:4,curveSegments:16});s.translate(0,0,-15);let r=he(We(s,i)),a=Xn(i,.6);return r.add(h(D(6,6,3,a,24),-60,79.5,0),h(D(4.5,4.5,3,Xn(i,.8),24),60,79.5,0),h(fe(8,30,10,2,i),84,32,0),h(fe(8,30,10,2,i),-84,52,0)),r.add(h(P(168,.6,.6,a),0,37,19.2)),r.position.y=-40,{obj:he(r),feat:[{o:r,p:ee(0,74,19),t:"Hollow",d:"The barrier is hollow so it is light to move. Once in place it is filled with water through the cap on top to make it heavy."},{o:r,p:ee(-60,81,0),t:"Moulded-in thread",d:"The filler neck has a thread moulded in, so the cap screws straight on."},{o:r,p:ee(60,40,19),t:"Split line",d:"A line round the middle where the two halves of the mould met."},{o:r,p:ee(-30,56,19),t:"Handles and holes",d:"Holes and handles go right through the hollow body. Rotational moulding can form them in one go."},{o:r,p:ee(84,47,5),t:"Interlocking lugs",d:"Lugs at each end let barriers link together."},{o:r,p:ee(-70,20,19),t:"Even wall thickness",d:"The wall is about the same thickness everywhere, so the barrier is strong for its weight."}]}}function Uy(i){let e=new Xe,t=new ct;t.moveTo(-95,-4),t.lineTo(-80,-4),t.absarc(-58,-4,22,Math.PI,0,!0),t.lineTo(36,-4),t.absarc(58,-4,22,Math.PI,0,!0),t.lineTo(94,-4),t.quadraticCurveTo(100,-2,100,6),t.quadraticCurveTo(96,13,62,16),t.lineTo(26,20),t.quadraticCurveTo(14,36,2,37),t.lineTo(-38,37),t.quadraticCurveTo(-52,35,-64,24),t.lineTo(-82,25),t.lineTo(-88,34),t.lineTo(-98,34),t.lineTo(-98,28),t.lineTo(-93,22),t.quadraticCurveTo(-99,10,-95,-4);let n=new zt(t,{depth:68,bevelEnabled:!0,bevelSize:4,bevelThickness:4,bevelSegments:5,curveSegments:24});n.translate(0,0,-34),n.rotateY(-Math.PI/2),e.add(We(n,i));let s=Xn(i,.82);for(let o of[-30,30])for(let l of[-58,58])e.add(h(D(18,18,13,i,36),o,-4,l,0,0,Math.PI/2),h(D(9,9,13.4,s,6),o,-4,l,0,0,Math.PI/2),h(D(3.2,3.2,13.8,i,16),o,-4,l,0,0,Math.PI/2));let r=Ra(i,.5);for(let o of[-42.2,42.2])e.add(h(P(.5,.7,186,r),o,6,0));for(let o of[-20,10,40])e.add(h(D(4.5,4.5,.6,r,18),0,-8.3,o));return e.add(h(P(14,5,1,r),0,8,-102.6)),e.add(h(P(60,.5,30,Xn(i,.9)),0,37.6,-18)),e.scale.setScalar(.25),{obj:he(e),feat:[{o:e,p:ee(42.4,6,30),t:"Split line",d:"A fine line all round the body where the two halves of the die met."},{o:e,p:ee(0,-8.6,10),t:"Ejector pin marks",d:"Round marks underneath where ejector pins pushed the casting out of the die.",pose:{x:-2.3,y:.3}},{o:e,p:ee(0,8,-103),t:"Injection point",d:"A small mark at the back where the molten metal entered the die. The runner has been cut off.",pose:{x:.2,y:Math.PI-.4}},{o:e,p:ee(-20,38,-10),t:"Fine detail",d:"Die casting copies fine detail accurately, like the panel lines and spoiler, with a smooth finish ready for painting."},{o:e,p:ee(-42,20,-50),t:"Draft angles",d:"The sides taper very slightly so the casting releases from the steel die."},{o:e,p:ee(30,-4,64),t:"Accurate and complex",d:"The whole body is cast as one accurate part, and thousands can be made exactly the same."}]}}function ky(i){let e=new Xe,t=new ct;t.moveTo(-13,0),t.lineTo(13,0),t.lineTo(11,16),t.lineTo(-11,16),t.lineTo(-13,0);let n=new zt(t,{depth:26,bevelEnabled:!0,bevelSize:1.2,bevelThickness:1.2,bevelSegments:3});n.translate(0,0,-13),e.add(We(n,i));let s=new oe({color:1908257,roughness:.6});e.add(h(D(4.2,4.2,.5,s,24),0,8,14.5,Math.PI/2),h(D(6,6,.4,Xn(i,.8),24),0,8,14.3,Math.PI/2));for(let o=0;o<8;o++)e.add(h(P(.9,14,1.2,i),-12.5+0*o,8,-10+o*2.8));for(let o=0;o<8;o++)e.add(h(P(.9,14,1.2,i),12.5,8,-10+o*2.8));e.add(h(P(16,.6,10,b.steelShiny),0,16.6,4,0,0,.08),h(D(1.6,1.6,1.2,b.steelShiny,12),-5,17.2,4),h(D(.6,.6,1.3,s,8),-5,17.3,4));let r=Ra(i,.6);return e.add(h(D(1.6,1.6,.3,r,12),-6,-.9,0),h(D(1.6,1.6,.3,r,12),6,-.9,0),h(P(28,.5,.5,r),0,8,-14.4)),e.position.y=-8,{obj:he(e),feat:[{o:e,p:ee(0,8,15),t:"Accurate hole",d:"The cone-shaped hole is cast accurately so the pencil sits at exactly the right angle to the blade."},{o:e,p:ee(-12.6,10,-4),t:"Grip ribs",d:"Ribs cast into the sides make it easy to hold."},{o:e,p:ee(-5,17.8,4),t:"Threaded hole",d:"The hole for the blade screw is cast in, then a thread is cut in it."},{o:e,p:ee(6,-1.2,0),t:"Ejector pin marks",d:"Round marks underneath where the casting was pushed out of the die.",pose:{x:-2.4,y:0}},{o:e,p:ee(8,10,-14.5),t:"Split line",d:"A fine line where the two halves of the die met."}]}}function Oy(i){let e=new Xe;e.add(h(fe(34,3,34,3,i),0,0,0));let t=new oe({color:1908257,roughness:.6});for(let s=0;s<4;s++){let r=Math.PI/4+s*Math.PI/2,a=Math.cos(r),o=Math.sin(r),l=he(h(P(56,3,7,i),28,0,0),h(P(50,4,1.2,i),30,2.5,0));l.rotation.y=-r,e.add(l);let c=a*58,d=o*58;e.add(h(D(9,9,3,i,32),c,0,d),h(D(4,4,6,i,20),c,1.5,d),h(D(1.6,1.6,6.2,t,12),c,1.5,d));for(let u=0;u<4;u++){let f=u*Math.PI/2;e.add(h(D(.9,.9,3.2,t,10),c+Math.cos(f)*6,0,d+Math.sin(f)*6))}}for(let[s,r]of[[-12,-12],[12,-12],[-12,12],[12,12]])e.add(h(D(2.4,2.4,6,i,16),s,3,r),h(D(1,1,6.2,t,10),s,3,r));return e.add(h(P(4,3.2,14,t),-6,0,0),h(P(4,3.2,14,t),6,0,0)),{obj:he(e),feat:[{o:e,p:ee(12,6,12),t:"Bosses",d:"Raised pillars with holes for screws, cast in one go with the frame.",higher:!0},{o:e,p:ee(Math.cos(Math.PI/4)*58,5,Math.sin(Math.PI/4)*58),t:"Motor mounts",d:"Accurate screw holes so each motor fits exactly. Every frame comes out the same."},{o:e,p:ee(Math.cos(3*Math.PI/4)*30,4.6,Math.sin(3*Math.PI/4)*30),t:"Ribs",d:"Thin ribs along each arm make it stiff without adding much weight.",higher:!0},{o:e,p:ee(0,1.8,5),t:"Strap slots",d:"Slots for the battery strap are cast in, so no machining is needed."},{o:e,p:ee(-17,1.5,0),t:"Thin, light walls",d:"Aluminium is light and die casting can make thin, accurate sections, so the frame is strong but light."}]}}function By(i){let e=Hy(i);return e.scale.setScalar(2.4),{obj:he(e),feat:[{o:e,p:ee(0,9.8,0),t:"Rough surface",d:"The casting copies the texture of the sand, so the surface is rough and grainy."},{o:e,p:ee(-6.4,6.4,1.8),t:"Sprue and riser marks",d:"Flat marks where the sprue and riser were cut off. They are filed smooth when the casting is fettled."},{o:e,p:ee(0,0,2.6),t:"Machined hole",d:"The hole in the middle is drilled or turned on a lathe afterwards to make it accurate."},{o:e,p:ee(9.8,0,0),t:"Parting line",d:"A line round the edge where the cope and drag met."}]}}function Hy(i){let e=he(h(new Ie(new Zt(8,1.8,10,32),i),0,0,0),h(D(2.6,2.6,5,i,20),0,0,0,Math.PI/2),h(D(1.1,1.1,5.1,new oe({color:1908257}),12),0,0,0,Math.PI/2));for(let t=0;t<5;t++){let n=t*Math.PI*2/5;e.add(h(P(1.6,7,1.6,i),Math.cos(n)*4.6,Math.sin(n)*4.6,0,0,0,n-Math.PI/2))}return e.add(h(P(2.2,.4,2.2,Ra(i,1.3)),-6.6,6.6,0,0,0,Math.PI/4)),e}function zy(i){let e=new Xe,t=new ct;t.absarc(0,0,30,0,Math.PI*2,!1);let n=new Ft;n.absarc(0,0,3.2,0,Math.PI*2,!0),t.holes.push(n);let s=new zt(t,{depth:4,bevelEnabled:!0,bevelSize:1,bevelThickness:1,bevelSegments:2,curveSegments:64});s.translate(0,0,-2),e.add(We(s,i)),e.add(h(new Ie(new Zt(28,2.2,12,64),i),0,0,1.2),h(new Ie(new Zt(7,1.8,10,40),i),0,0,1.6));for(let[a,o]of[[-14,8],[14,8]])new ct().absellipse(a,o,6,3,0,Math.PI*2);e.add(h(P(10,1,.6,Ra(i,1.25)),0,-31,0));let r=he(e);return r.rotation.x=-.35,{obj:r,feat:[{o:e,p:ee(14,10,3.3),t:"Rough surface",d:"The sand leaves a rough, grainy texture. For a weight plate that does not matter, so it is often just painted."},{o:e,p:ee(0,-31,1),t:"Sprue mark",d:"A ground-off mark on the edge where the sprue was cut away."},{o:e,p:ee(0,3.2,2.4),t:"Machined hole",d:"The centre hole is machined afterwards so it slides neatly onto the bar."},{o:e,p:ee(-28,-6,3.4),t:"Thick, heavy section",d:"Sand casting suits thick, heavy parts. Cast iron is cheap and dense, ideal for weights."},{o:e,p:ee(27,12,0),t:"Parting line",d:"A line round the rim where the cope and drag met."}]}}function Gy(i){let e=new Xe,t=new oe({color:1908257,roughness:.8}),n=Gh("ms",{rough:.3}),s=[];for(let u=0;u<=90;u++){let f=u/90,p=f*Math.PI*1.75,_=15+7*f;s.push(ee(Math.cos(p)*_,Math.sin(p)*_,0))}let r=s[s.length-1].clone(),a=s[s.length-1].clone().sub(s[s.length-2]).normalize();for(let u=1;u<=6;u++)s.push(r.clone().addScaledVector(a,u*3));let o=new nn(s);e.add(We(Ly(o,u=>3.5+6.5*Math.min(1,u*1.15)),i)),e.add(h(D(13,13,11,i,48),0,0,0,Math.PI/2),h(D(7.4,7.4,11.4,t,40),0,0,0,Math.PI/2),h(D(16,16,2.4,n,48),0,0,-6.4,Math.PI/2),h(new Ie(new Zt(13,1.2,10,48),i),0,0,5.4));let l=o.getPointAt(1);e.add(h(fe(3,23,23,2,n),l.x+1.5,l.y,0,0,0,0).rotateZ(0),h(D(6.6,6.6,3.4,t,28),l.x+2,l.y,0,0,0,Math.PI/2));for(let[u,f]of[[8,8],[8,-8],[-8,8],[-8,-8]])e.add(h(D(1.2,1.2,3.6,t,10),l.x+2,l.y+u,f,0,0,Math.PI/2));for(let u=0;u<6;u++){let f=u*Math.PI/3;e.add(h(D(1,1,3,t,10),Math.cos(f)*14.4,Math.sin(f)*14.4,-6.4,Math.PI/2))}let c=l.clone(),d=he(e);return d.rotation.y=-.5,{obj:d,feat:[{o:e,p:ee(-14,16,7),t:"Complex hollow shape",d:"The snail-shaped volute is hollow inside. Sand cores make the hollow, which would be very hard to do any other way."},{o:e,p:ee(-4,-20,8),t:"Rough surface",d:"Sand-cast parts have a rough, slightly bubbly texture copied from the sand, rather like orange peel."},{o:e,p:ee(c.x+3,c.y+9,9),t:"Machined faces",d:"Faces that bolt to other parts are machined flat and smooth afterwards, so they seal."},{o:e,p:ee(14.4,0,-7.8),t:"Bolt holes",d:"Holes are drilled and tapped after casting."},{o:e,p:ee(-21,-6,0),t:"Parting line",d:"A line round the middle where the cope and drag met."}]}}var Ul={tray:(i,e)=>{let t=0;for(let n of[-9.5,0,9.5])for(let s of[-5,5]){let r=Math.min(3.5-Math.abs(i-n),3.5-Math.abs(e-s));r>0&&(t=Math.max(t,5*Ke(r/1.2)))}return t},mask:(i,e)=>{let t=(i/12)**2+(e/9.6)**2;if(t>=1)return 0;let n=6.2*Math.sqrt(1-t);n+=2.6*Math.exp(-(i*i/5+(e+.5)**2/10));for(let s of[-4.4,4.4])n-=2.2*Math.exp(-((i-s)**2/3.2+(e+2.6)**2/2.2));return n-=1*Math.exp(-(i*i/6+(e-5)**2/1)),Math.max(0,n)},egg:(i,e)=>{let t=0;for(let n of[-7.2,7.2]){let s=((i-n)/6.4)**2+(e/9)**2;s<1&&(t=Math.max(t,6.5*Math.sqrt(1-s)))}return t}};function Ph(i){let e=(t,n)=>Math.max(Math.max(0,Math.abs(t)-15)/3,Math.max(0,Math.abs(n)-11)/7);return(t,n)=>{let s=e(t,n);return s>0?4*(1-Ke(s)):4.3+i(t,n)}}var Hf={tray:()=>os(31.4,23.4,3.6),mask:()=>{let i=new ct;return i.absellipse(0,0,13.2,10.8,0,Math.PI*2,!1),i},egg:()=>os(31.4,23.4,8)};function zf(i,e){let t=Ph(Ul[i]),n=Hf[i]().getSpacedPoints(180);n.pop();let s=64,r=n.length,a=[],o=[];for(let c=0;c<=s;c++){let d=c/s;for(let u=0;u<r;u++){let f=n[u].x*d,p=n[u].y*d;a.push(f,t(f,p),p)}}for(let c=0;c<s;c++)for(let d=0;d<r;d++){let u=c*r+d,f=c*r+(d+1)%r,p=(c+1)*r+d,_=(c+1)*r+(d+1)%r;o.push(u,p,f,f,p,_)}let l=new Xt;return l.setAttribute("position",new dt(a,3)),l.setIndex(o),l.computeVertexNormals(),l}function Th(i,e){return t=>{let n=he(We(zf(i,t),t));n.scale.setScalar(2.4),n.position.y=-6;let s=he(n);return s.rotation.x=.25,{obj:s,feat:e(n)}}}var Ah={tray:i=>[{o:i,p:ee(0,9.6,5),t:"Thin, even sheet",d:"The tray is formed from one thin sheet of plastic, so it is light and cheap."},{o:i,p:ee(13,7,5),t:"Thinning at corners",d:"The sheet stretches most at the deepest corners, so it gets thinner there."},{o:i,p:ee(-12.7,6,0),t:"Draft angles",d:"The sides of each pocket slope so the mould can be lifted out."},{o:i,p:ee(-4.75,8,-5),t:"Radiused corners",d:"Rounded corners help the sheet stretch evenly without tearing."},{o:i,p:ee(-15.4,.3,-9),t:"Trimmed edge",d:"The waste sheet round the edge has been cut off, following the shape of the tray."}],mask:i=>[{o:i,p:ee(0,12,0),t:"Open, shell-like form",d:"Vacuum forming makes open shapes from one side only: a shell with no back."},{o:i,p:ee(-4.4,7.4,-2.6),t:"Thinning",d:"The sheet stretches over the high points, so it is thinnest at the nose and cheeks."},{o:i,p:ee(10,6,0),t:"Draft angles",d:"Gently sloping sides let the mould come out."},{o:i,p:ee(-13,.3,0),t:"Trimmed edge",d:"The mask is cut out of the sheet round its outline after forming. Eye holes would be cut out too."}],egg:i=>[{o:i,p:ee(-7.2,10.6,0),t:"Thin, even sheet",d:"Easter egg packaging is formed from a thin sheet: light, cheap and see-through if you use clear plastic."},{o:i,p:ee(7.2,6,7),t:"Radiused curves",d:"Smooth, rounded curves form well and look good."},{o:i,p:ee(0,4.6,0),t:"Webbing risk",d:"If two parts of the mould are too close, the sheet can fold into a web between them. Leave space between shapes."},{o:i,p:ee(-15.4,.3,-8),t:"Trimmed edge",d:"The waste round the edge has been trimmed off, leaving a neat rounded edge."}]};function Vy(i){let e=new ct;e.moveTo(-40,0),e.lineTo(40,0),e.lineTo(3,26),e.lineTo(-3,26),e.lineTo(-40,0);let t=new Ft;t.moveTo(-32,2.6),t.lineTo(-3,22.6),t.lineTo(3,22.6),t.lineTo(32,2.6),t.lineTo(-32,2.6),e.holes.push(t);let n=new zt(e,{depth:3,bevelEnabled:!0,bevelSize:.6,bevelThickness:.6,bevelSegments:2});n.translate(0,0,-1.5);let s=he(We(n,i)),r=[];for(let l=0;l<=40;l++){let c=Math.PI*1.25*l/40;r.push(ee(-Math.cos(c)*6+6,34+Math.sin(c)*6,0))}r.unshift(ee(0,26,0),ee(0,32,0)),s.add(We(new wn(new nn(r),60,1.4,10),i));let a=Ra(i,.6);return s.add(h(D(1.4,1.4,.3,a,12),-20,6,1.9,Math.PI/2),h(D(1.4,1.4,.3,a,12),20,6,1.9,Math.PI/2),h(P(3,1.6,.4,a),0,.6,1.9)),s.position.y=-18,{obj:he(s),feat:[{o:s,p:ee(0,.6,2),t:"Injection point",d:"A small mark where the molten polystyrene entered the mould."},{o:s,p:ee(20,6,2),t:"Ejector pin marks",d:"Round marks where ejector pins pushed the hanger out."},{o:s,p:ee(-30,6,0),t:"Split line",d:"A fine line round the edge where the mould halves met."},{o:s,p:ee(6,38,0),t:"Material",d:"Polystyrene: light, rigid and cheap, ideal for products made in huge numbers."}]}}Object.assign(vn,{hanger:{n:"Coat hanger",make:Vy,mats:["ps"]},kayak:{n:"Kayak",make:Bf},barrier:{n:"Road barrier",make:Fy},car:{n:"Model car",make:Uy},sharpener:{n:"Pencil sharpener",make:ky},drone:{n:"Drone frame",make:Oy},wheel:{n:"Pulley wheel",make:By},dumbbell:{n:"Dumbbell weight plate",make:zy},turbo:{n:"Turbocharger housing",make:Gy},tray:{n:"Biscuit tray",make:Th("tray",Ah.tray)},mask:{n:"Mask",make:Th("mask",Ah.mask)},egg:{n:"Easter egg packaging",make:Th("egg",Ah.egg)}});Object.assign(kf,{hanger:"Made in their millions, cheap and light.",kayak:"A 3 m hollow hull in one piece.",barrier:"Hollow, so it can be filled with water.",car:"Every detail cast in one accurate part.",sharpener:"A small, accurate, hard-wearing part.",drone:"Light, stiff and full of screw holes.",wheel:"A simple shape: easy to cast in sand.",dumbbell:"Thick and heavy: perfect for cast iron.",turbo:"A complex hollow shape made with sand cores.",tray:"Pockets to hold the biscuits.",mask:"A shell shaped like a face.",egg:"Two egg-shaped pockets."});var Wy=`.mkh{display:grid;grid-template-columns:1fr;gap:6px}.mkh.wide{grid-template-columns:1fr 1fr;gap:18px;align-items:end}
.mkp{display:block;width:100%;border:0;background:none;padding:0;margin:0;text-align:left;cursor:pointer;color:#F4F4F6;font:inherit;border-radius:18px;touch-action:manipulation}
.mkp:focus-visible{outline:3px solid #F4B3C2;outline-offset:3px}
.mkp canvas{display:block;width:100%;height:240px}.mkp.ws canvas{height:280px}.mkh.wide .mkp canvas{height:300px}.mkp.fc canvas,.mkp.mk canvas{height:250px}.mkh.wide .mkp.fc canvas,.mkh.wide .mkp.mk canvas{height:300px}
.mkp .plab{display:block;padding:2px 8px 8px}.mkp .plab b{font-size:19px;font-weight:800}.mkp .plab small{font-size:10px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;border:1.5px solid #F4B3C2;color:#F4B3C2;border-radius:6px;padding:0 4px;vertical-align:3px;margin-left:6px}
.mkp .plab span{display:block;font-size:13.5px;color:#BFC3C8;margin-top:2px}`;function Xy(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(0,0,0,.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new An(i)}function qy(i,e={}){if(!document.getElementById("mkcss")){let C=document.createElement("style");C.id="mkcss",C.textContent=Wy,document.head.appendChild(C)}i.innerHTML=`<div class="mkh"><button type="button" class="mkp box" aria-label="Tool library"><canvas></canvas><span class="plab"><b>Tool library</b><small>beta</small><span>Every N5 tool and machine in 3D</span></span></button>
   <button type="button" class="mkp ws" aria-label="The workshop"><canvas></canvas><span class="plab"><b>The workshop</b><small>beta</small><span>Explore the machines and how to stay safe</span></span></button>
   <button type="button" class="mkp fc" aria-label="The factory"><canvas></canvas><span class="plab"><b>The factory</b><small>beta</small><span>How products are made in industry</span></span></button>
   <button type="button" class="mkp mk" aria-label="Bench skills"><canvas></canvas><span class="plab"><b>Bench skills</b><small>beta</small><span>Make joints step by step</span></span></button></div>`;let t=i.querySelector(".mkh");function n(C,T,g,w){let B=new _i({canvas:C,antialias:!0,alpha:!0});B.toneMapping=ti,B.shadowMap.enabled=w==="real",B.shadowMap.type=Oo;let I=new Tn;I.environment=new ki(B).fromScene(new Rs,.04).texture,I.environmentIntensity=.75;let L=new ei(16773596,2.2);L.position.set(140,320,220);let Z=new ei(16767202,1);Z.position.set(-160,80,-200),I.add(L,Z,new lr(16777215,.25),T),T.updateMatrixWorld(!0);let K=new Ct().setFromObject(T),F=K.getCenter(ee(0,0,0)),X=K.getBoundingSphere(new Un).radius;if(w==="real"){L.castShadow=!0,L.target.position.copy(F),I.add(L.target);let H=L.shadow;H.mapSize.set(1024,1024),Object.assign(H.camera,{left:-X,right:X,top:X,bottom:-X,near:1,far:1200}),H.camera.updateProjectionMatrix(),H.bias=-6e-4,H.radius=4,T.traverse(U=>{U.isMesh&&(U.castShadow=!U.material.transparent,U.receiveShadow=!0)})}else{let H=K.getSize(ee(0,0,0)),U=new Ie(new Rn(H.x*1.5,H.z*2),new Ii({map:Xy(),transparent:!0,depthWrite:!1}));U.rotation.x=-Math.PI/2,U.position.set(F.x,K.min.y+.05,F.z),I.add(U)}let N=new bs(-1,1,1,-1,.1,6e3),j=ee(1,.82,1).normalize();return N.position.copy(F).addScaledVector(j,2500),N.lookAt(F),{r:B,sc:I,cam:N,R:X*g,obj:T}}let s=_y(),r=Ff({noBench:!0}),a=Uf(),o=Nf(),l=t.querySelector(".box"),c=t.querySelector(".ws"),d=t.querySelector(".fc"),u=t.querySelector(".mk"),f=[{el:l,cv:l.querySelector("canvas"),kind:"box"},{el:c,cv:c.querySelector("canvas"),kind:"ws"},{el:d,cv:d.querySelector("canvas"),kind:"fc"},{el:u,cv:u.querySelector("canvas"),kind:"mk"}];Object.assign(f[0],n(f[0].cv,s,1.35,"soft")),Object.assign(f[1],n(f[1].cv,r,.8,"real")),Object.assign(f[2],n(f[2].cv,a,.5,"real")),Object.assign(f[3],n(f[3].cv,o,.85,"real")),f[3].r.shadowMap.autoUpdate=!1,f[3].r.shadowMap.needsUpdate=!0,f[2].r.shadowMap.autoUpdate=!1,f[2].r.shadowMap.needsUpdate=!0,f[2].c0=f[2].cam.position.clone();{let C=new Ct().setFromObject(a);f[2].ctr=C.getCenter(ee(0,0,0))}let p=-1,_=!0,y=0,m=0,x=0;function S(){t.classList.toggle("wide",i.clientWidth>=640);let C=Math.min(2,devicePixelRatio||1);f.forEach(T=>{let g=T.cv.clientWidth,w=T.cv.clientHeight;if(!g||!w)return;T.r.setPixelRatio(C),T.r.setSize(g,w,!1);let B=g/w;Object.assign(T.cam,{left:-T.R*B,right:T.R*B,top:T.R,bottom:-T.R}),T.cam.updateProjectionMatrix()})}new ResizeObserver(S).observe(i),S(),new IntersectionObserver(C=>{_=C[0].isIntersecting}).observe(i),f[0].el.addEventListener("click",()=>{p<0&&(p=performance.now()/1e3,setTimeout(()=>{p=-1,e.onBox&&e.onBox()},1e3))}),f[1].el.addEventListener("click",()=>{e.onWs&&e.onWs()}),f[2].el.addEventListener("click",()=>{e.onFc&&e.onFc()}),f[3].el.addEventListener("click",()=>{e.onMk&&e.onMk()});let A=C=>C<0?0:C>1?1:C;function M(C){if(y=requestAnimationFrame(M),!_||!i.offsetParent||C-m<33)return;m=C;let T=C/1e3,g;if(p>=0)g=A((T-p)/.8);else{let w=T%7/7;g=w<.35?0:w<.5?(w-.35)/.15:w<.8?1:1-(w-.8)/.15}s.userData.open(g),r.rotation.y=Math.sin(T*.2)*.06,o.rotation.y=Math.sin(T*.25+1)*.12,f[3].r.shadowMap.needsUpdate=!0,r.userData.anim&&r.userData.anim(T);{let w=f[2],B=Math.sin(T*.18)*.12,I=w.c0.clone().sub(w.ctr);I.applyAxisAngle(ee(0,1,0),B),w.cam.position.copy(w.ctr).add(I),w.cam.lookAt(w.ctr)}x++;for(let w of f)(w.kind!=="fc"&&w.kind!=="mk"||x%2===0)&&w.r.render(w.sc,w.cam)}return y=requestAnimationFrame(M),{stop(){cancelAnimationFrame(y)}}}var Gf={eye:{t:"Wear eye protection",c:"M004",g:'<circle cx="50" cy="40" r="20" fill="#fff"/><path d="M22 92c2-17 13-26 28-26s26 9 28 26z" fill="#fff"/><rect x="27" y="31" width="46" height="15" rx="7" fill="#fff" stroke="#005EB8" stroke-width="3"/><rect x="31" y="34" width="16" height="9" rx="4.5" fill="#005EB8"/><rect x="53" y="34" width="16" height="9" rx="4.5" fill="#005EB8"/>'},clothing:{t:"Wear an apron",c:"M010",g:'<path d="M41 28c0-8 4-13 9-13s9 5 9 13" fill="none" stroke="#fff" stroke-width="4"/><path d="M38 28h24v20l8 38H30l8-38z" fill="#fff"/><path d="M38 48H22M62 48h16" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="43" y="58" width="14" height="11" rx="2" fill="none" stroke="#005EB8" stroke-width="3"/>'},gloves:{t:"Wear protective gloves",c:"M009",g:'<path d="M34 86V50c0-3 2-5 5-5V26c0-3 2-5 4.5-5S48 23 48 26v-4c0-3 2-5 4.5-5S57 19 57 22v4c0-3 2-5 4.5-5S66 23 66 26v6c0-3 2-5 4.5-5S75 29 75 32v28c0 14-6 26-14 26z" fill="#fff"/><path d="M34 78h41" stroke="#005EB8" stroke-width="3"/><path d="M39 45l-9-9c-2-2-5-2-7 0s-2 5 0 7l11 13" fill="#fff"/>'},mask:{t:"Wear a dust mask",c:"M016",g:'<circle cx="50" cy="38" r="20" fill="#fff"/><path d="M22 92c2-17 13-26 28-26s26 9 28 26z" fill="#fff"/><path d="M35 40c4 1 9 2 15 2s11-1 15-2v8c0 7-7 12-15 12s-15-5-15-12z" fill="#005EB8"/><path d="M30 38l6 4M70 38l-6 4" stroke="#005EB8" stroke-width="3"/>'}};function Yy(i){let e=Gf[i];return`<svg viewBox="0 0 100 100" role="img" aria-label="${e.t}"><circle cx="50" cy="50" r="48" fill="#005EB8"/><circle cx="50" cy="50" r="48" fill="none" stroke="#fff" stroke-width="2.5"/>${e.g}</svg>`}function Vf(i){return`<div class="bmsigns">${i.map(e=>`<div class="bmsign">${Yy(e)}<span>${Gf[e].t}</span></div>`).join("")}</div>`}var Wf=`.bmsigns{display:flex;flex-wrap:wrap;gap:10px;margin:2px 0 12px}.bmsign{display:flex;align-items:center;gap:8px;background:#fff;color:#003B75;border-radius:999px;padding:4px 12px 4px 4px;font-size:13.5px;font-weight:800;line-height:1.15;max-width:100%}
.bmsign svg{width:40px;height:40px;flex:none}`,Xf="Stand up while you work: never sit at the bench or a machine.",Zy={"Steel rule":["Measures and marks out lengths accurately, in millimetres. Always measure from the zero end.",["Carry it flat and keep the edge clean.","Don\u2019t use it as a lever or scraper: it bends and the scale is lost."]],"Try square":["Marks lines at 90\xB0 to an edge on wood, and checks that corners and edges are square. Hold the stock tight against a straight edge.",["Keep the stock against the face edge so the line is true.","Store it flat so the blade stays at 90\xB0."]],"Engineer\u2019s square":["The all-steel version of the try square, used on metal and plastic. Marks and checks 90\xB0 with a scriber.",["Handle with care: dropping it can knock it out of square.","Watch the sharp corners of the blade."]],"Marking gauge":["Marks a line parallel to an edge of wood, such as the depth of a joint. The stock slides along the edge while the pin scratches the line.",["Keep fingers away from the pin.","Push the gauge away from you along the edge."]],"Mortise gauge":["Has two pins, so it marks two parallel lines at once, such as the width of a mortise or tenon.",["Keep fingers away from the pins.","Set both pins before marking, then lock the stock."]],Scriber:["Scratches fine marking-out lines on metal and plastic, where a pencil wouldn\u2019t show.",["The point is very sharp: carry it point down and put the cap on if it has one.","Never leave it lying where someone could kneel or lean on it."]],"Centre punch":["Makes a small dent at the centre of a hole on metal, so the drill bit starts in the right place and doesn\u2019t wander.",["Hold it upright and tap it with a ball-pein hammer, not a mallet.","Wear goggles in case of chips."]],Dividers:["Scribe circles and arcs on metal, and step off equal distances. One leg sits in a centre punch mark.",["Both points are sharp: carry them closed and point down."]],"Outside callipers":["Measure the outside size of round or curved work, such as a bar on the lathe. The setting is then checked against a rule.",["Stop the lathe before measuring work on it."]],"Odd-leg callipers":["Mark a line parallel to an edge on metal, or find the centre of a bar. One leg runs along the edge.",["The point is sharp: keep fingers clear and carry it closed."]],Pencil:["Marks out on wood. A sharp pencil gives fine, accurate lines; shade the waste so you know which side to cut.",["Keep it sharp with a sharpener, not a knife."]],"Tenon saw":["Makes straight cuts in wood, such as the shoulders of joints. The stiff back keeps the blade straight.",["Clamp the work first and keep your other hand behind the saw.","Start the cut gently with short strokes."]],"Coping saw":["Cuts curves in wood and plastic. The thin blade can be turned in the frame to follow the line.",["Fit the blade with the teeth pointing towards the handle.","Hold the work in a vice and keep fingers clear of the blade."]],Hacksaw:["Cuts metal and plastic. The fine teeth on the tensioned blade cut on the forward stroke.",["Fit the blade with the teeth pointing forwards and tension it well.","Hold the work low in the vice so it doesn\u2019t vibrate."]],"Junior hacksaw":["A small hacksaw for light cutting of thin metal, plastic and tube.",["Hold the work firmly in a vice.","Watch for sharp burrs on the cut edge."]],"Bevel-edge chisel":["Cuts and pares wood, for example to remove the waste from a housing or halving joint. The bevelled sides get into corners.",["Always keep both hands behind the cutting edge.","Clamp the work and chisel away from your body."]],"Mortise chisel":["A strong, thick chisel for chopping deep mortises in wood with a mallet.",["Clamp the work firmly.","Strike it with a mallet, never a hammer."]],"Ball-pein hammer":["A metalwork hammer: the flat face hits a centre punch or rivet, and the round ball end shapes metal and spreads rivets.",["Check the head is tight on the handle.","Wear goggles when striking metal."]],"Cross-pein hammer":["Its narrow pein starts small nails and pins held between the fingers, then the flat face drives them home.",["Check the head is tight on the handle.","Keep your fingers clear once the nail stands on its own."]],"Claw hammer":["Drives nails into wood, and the claw pulls nails out.",["Check the head is tight.","Keep your fingers clear once the nail is started."]],"Wooden mallet":["Strikes chisels and taps wooden joints together without damaging them.",["Never hit metal or a hammer with it.","Make sure the head is tight on the handle."]],"Hide mallet":["A soft-faced mallet for shaping thin sheet metal without marking or stretching it.",["Keep it for sheet metal work, not chisels."]],"Jack plane":["A long plane for flattening and straightening wood, and planing it down to size.",["Keep your hands behind the blade and lay the plane on its side when not in use.","Clamp the wood firmly."]],"Smoothing plane":["A shorter plane for the final smooth finish on wood.",["Lay it on its side so the blade isn\u2019t damaged.","Keep fingers away from the mouth of the plane."]],"Rebate plane":["Cuts a rebate (a step) along the edge of wood. The blade goes right to the side of the plane.",["Clamp the work and keep hands behind the blade."]],"Plough plane":["Cuts a groove along wood, for example to hold a drawer bottom or a back panel.",["Clamp the work and keep hands behind the blade."]],"Twist drill":["Drills holes in wood, metal and plastic. The spiral flutes carry the waste out of the hole.",["Hold the work in a machine vice or clamp it, never by hand.","Remove the chuck key before starting."]],"Forstner bit":["Drills clean, flat-bottomed holes in wood, such as for hinges.",["Clamp the work and use a slow speed.","Lift the bit out often to clear the chips."]],"Countersink bit":["Shapes the top of a hole into a cone so a countersunk screw sits flush with the surface.",["Clamp the work and use a slow speed."]],"Centre drill":["Drills a small, accurate starting hole, for example in the end of a bar on the centre lathe, before drilling the full size.",["Use a slow, steady feed; the small tip snaps easily."]],"Flat file":["Smooths and shapes flat surfaces and edges of metal and plastic, and removes burrs.",["Always use a file with a handle fitted.","Brush away filings; don\u2019t blow them."]],"Half-round file":["One flat side and one curved side, for shaping flat surfaces and inside curves.",["Always use it with a handle fitted."]],"Hand router":["Levels the bottom of a housing or groove in wood to an even depth.",["Clamp the work and keep both hands on the handles."]],Pliers:["Grip, bend and hold small parts and wire. The cutters at the jaws snip wire.",["Keep fingers clear of the cutters.","Don\u2019t use them on nuts: they slip and round the corners."]],"Pop-rivet gun":["Fixes thin sheet material together from one side using pop rivets. Squeezing the handles pulls the mandrel and spreads the rivet.",["Point it away from people: the snapped mandrel can fly out.","Keep fingers clear of the nose."]],"Flat screwdriver":["Drives and removes slotted screws. Choose a tip that fills the slot.",["Never use it as a chisel or lever.","Hold the work so the screwdriver can\u2019t slip into your hand."]],"Cross-head screwdriver":["Drives and removes cross-head screws. The tip should fit the screw head exactly.",["Push firmly so it doesn\u2019t slip.","Don\u2019t use it as a lever."]],"Tin snips":["Cut thin sheet metal, like scissors.",["The cut edges are very sharp: wear gloves and remove the burr with a file."]],"Bending bars":["Held in the vice, they grip sheet metal along a line so it can be folded cleanly.",["Tighten the vice firmly and watch for sharp sheet edges."]],"Tap and wrench":["Cuts an internal thread inside a drilled hole so a bolt can screw in. Turn forwards, then back a little to break the swarf.",["Keep the tap upright: taps are brittle and snap if forced."]],"Die and stock":["Cuts an external thread on a metal rod so a nut can screw on.",["Keep the die square to the rod and use cutting fluid."]],"Nail punch":["Knocks the head of a nail just below the surface of the wood, so the hole can be filled.",["Hold it upright and strike it squarely."]],Bradawl:["Makes a small starting hole in wood for a screw or nail.",["Push it in across the grain and keep your other hand clear."]],"Bench vice":["Holds wood firmly on the bench while you saw, chisel or plane it.",["Don\u2019t over-tighten or hit the handle with a hammer.","Keep the handle turned down so no one walks into it."]],"Engineer\u2019s vice":["Holds metal and plastic firmly for sawing, filing and bending.",["Use soft jaws to protect finished surfaces.","Don\u2019t leave the handle sticking out."]],"Machine vice":["Holds work flat and secure on the pillar drill table, so you never hold it by hand.",["Bolt or clamp it to the table if the work is large."]],"Hand vice":["Holds small or thin pieces safely while drilling or working on them, instead of using your fingers.",["Grip the work tightly before drilling."]],"Soft jaws (vice guards)":["Fit over the jaws of an engineer\u2019s vice to stop them marking soft or finished work.",["Check they sit firmly before tightening the vice."]],"G clamp":["Holds work to the bench or holds pieces together while glue sets.",["Use scrap wood under the jaws to protect the work.","Don\u2019t over-tighten."]],"Quick clamp":["A one-handed clamp: squeeze the trigger to tighten and press the button to release. Great for holding a guide block when sawing.",["Check it is tight before you start cutting."]],"Sash cramp":["A long cramp that holds a frame or wide panel together while the glue sets.",["Use scrap wood under the jaws and check the frame is square."]],"Belt sander":["Sands, smooths and shapes the edges and ends of wood. The belt runs down towards the table.",["Switch on the dust extraction first.","Rest the work on the table and keep fingers well away from the belt.","Only sand below the guard; never sand very small pieces by hand.","Wear goggles."]],"Pillar drill":["Drills accurate holes at 90\xB0 in wood, metal and plastic. The depth stop sets how deep the hole goes.",["Hold the work in a machine vice or clamp it, never by hand.","Lower the guard and remove the chuck key before starting.","Tie hair back, tuck in loose clothing and wear goggles."]],"Fret (scroll) saw":["Cuts curves and shapes in thin wood, MDF and acrylic with a fine blade that moves up and down quickly.",["Set the hold-down foot just above the work.","Keep fingers to the side of the blade, never in line with it.","Switch off and wait before clearing offcuts."]],"Centre lathe":["Turns metal (and some plastics) to make round parts: facing off, parallel turning, taper turning, knurling and drilling.",["Close the chuck guard and remove the chuck key.","Never touch swarf with your hands; use a brush.","Stop the machine before measuring. Wear goggles."]],"Wood lathe":["Turns wood to make round parts such as handles and legs, or bowls on a faceplate.",["Set the tool rest close to the work and spin the wood by hand before switching on.","Hold the tool firmly on the rest.","Wear goggles or a face shield."]],"Mortise machine":["Cuts square holes (mortises) in wood for mortise and tenon joints, using a hollow square chisel with an auger inside.",["Clamp the work against the fence.","Set the depth stop and keep hands away from the chisel."]],Fluidiser:["Plastic dip coating: a hot metal part is dipped into plastic powder kept moving by air, and the powder melts onto it as a smooth coating.",["Use tongs and heatproof gloves for hot metal.","Let the part cool on a heatproof surface.","Work with good ventilation."]],"Spot welder":["Joins two pieces of thin sheet steel. Pulling the lever down squeezes the sheets between the copper electrodes, and a large electric current melts a small spot where they touch.",["Keep fingers away from the electrodes; pull the lever down only when your hands are clear.","The metal stays very hot: hold it with pliers and let it cool.","Make sure the metal is clean so the weld is strong."]],"Strip heater":["Heats a narrow line across thermoplastic sheet such as acrylic so it can be bent along that line.",["Never touch the hot wires or the cover above them.","Don\u2019t overheat: bubbles mean it\u2019s too hot.","Switch off when finished and let it cool."]]},jy={"Tin snips":["gloves"],"Bending bars":["gloves"],"Hide mallet":["gloves"],"Belt sander":["mask"],Fluidiser:["gloves"],"Strip heater":["gloves"],"Spot welder":["gloves"]},$y=i=>["eye","clothing",...jy[i]||[]],Ky={bench:{n:"Workbench and bench vice",use:"Where most hand-tool work happens: marking out, sawing, chiselling and planing. The bench vice holds wood firmly while you work on it.",safe:["Keep the bench clear: put tools back once you have used them.","Clamp the work in the vice or to the bench, never hold it in your hand while you saw or chisel.","Keep both hands behind a chisel\u2019s cutting edge.","Carry tools with sharp edges pointing down."],ppe:null},pillarDrill:{n:"Pillar drill",use:"Drills accurate holes at 90\xB0 to the surface in wood, metal and plastic. The table moves up and down, and the depth stop sets how deep the hole goes.",safe:["Hold the work in a machine vice or clamp it to the table, never by hand.","Lower the guard over the chuck before you start.","Take the chuck key out straight away.","Tie hair back and tuck in loose clothing.","Know where the emergency stop is."],ppe:null},beltSander:{n:"Belt sander",use:"Sands, smooths and shapes the edges and ends of wood. The belt runs down towards the table, so the work is pushed onto the table, not lifted.",safe:["Switch on the dust extraction first.","Rest the work on the table and keep fingers well away from the belt.","Only sand below the guard, using the gap above the table.","Never sand very small pieces by hand."],ppe:null},fretSaw:{n:"Fret (scroll) saw",use:"Cuts curves and shapes in thin wood, MDF and acrylic. The fine blade moves up and down very quickly.",safe:["Set the hold-down foot just above the work.","Keep fingers to the side of the blade, never in line with it.","Feed the work gently; let the blade do the cutting.","Switch off and wait before clearing offcuts."],ppe:null},centreLathe:{n:"Centre lathe",use:"Turns metal (and some plastics) to make round parts. Processes include facing off, parallel turning, taper turning, knurling and drilling.",safe:["Close the chuck guard before starting.","Remove the chuck key: never leave it in the chuck.","Never touch swarf with your hands; use a brush.","Stop the machine before measuring the work.","Tie hair back and tuck in loose clothing."],ppe:null},woodLathe:{n:"Wood lathe",use:"Turns wood to make round parts such as handles and legs (between centres) or bowls (on a faceplate).",safe:["Set the tool rest close to the work and turn the wood by hand before switching on.","Check the speed is right for the size of the wood.","Hold the turning tool firmly on the tool rest.","Move the tool rest out of the way before sanding."],ppe:null},mortiser:{n:"Mortise machine",use:"Cuts square holes (mortises) in wood for mortise and tenon joints. A square hollow chisel cuts the sides while an auger bit inside clears the waste.",safe:["Clamp the work against the fence before cutting.","Set the depth stop so the chisel stops at the right depth.","Keep hands away from the chisel.","Lift the lever slowly to clear the chips."],ppe:null},fluidiser:{n:"Fluidiser (with oven)",use:"Plastic dip coating. A metal part is heated in the oven, then dipped into plastic powder that is kept moving by air from below. The powder melts onto the hot metal to give a smooth plastic coating.",safe:["Use tongs to move hot metal and heatproof gloves.","Hold the part in the powder for a few seconds only, then let it cool on a heatproof surface.","Keep the lid closed when not in use.","Work with good ventilation."],ppe:null},spotWelder:{n:"Spot welder",use:"Joins two pieces of thin sheet steel together. Pulling the lever down squeezes the sheets between the copper electrodes, then a large electric current melts a small spot where they touch, welding them.",safe:["Keep fingers well away from the electrodes: pull the lever down only when your hands are clear.","The metal stays very hot after welding: hold it with pliers and let it cool.","Sparks can fly: keep the area clear.","Make sure the metal is clean so the weld is strong."],ppe:null},stripHeater:{n:"Strip heater",use:"Heats a narrow line across a sheet of thermoplastic such as acrylic so that it can be bent along that line, often over a former or jig.",safe:["Never touch the hot wires or the plate above them.","Turn thicker sheet over to heat both sides evenly.","Do not overheat: bubbles mean it is too hot.","Switch off when finished and let it cool."],ppe:null}},Jy={spotWelder:["eye","clothing","gloves"],beltSander:["eye","clothing","mask"],fluidiser:["eye","clothing","gloves"],stripHeater:["eye","clothing","gloves"]},Qy=["bench","pillarDrill","beltSander","centreLathe","woodLathe","mortiser","fretSaw","spotWelder","fluidiser","stripHeater"],Ih={sandCasting:{n:"Sand casting",use:"Molten metal is poured into a mould made of sand. The mould is broken up to get the casting out, so each mould is used once: good for one-off and small batch production.",steps:[[0,2,"Sand is rammed into the drag (the bottom box) round the wooden pattern."],[2,3,"The drag is turned over so the flat face of the pattern is on top."],[3,6,"The cope (the top box) goes on. Pins for the sprue and the riser are put in, then the cope is rammed with sand."],[6,9.5,"The pins come out, the cope is lifted off and the pattern is taken out, leaving a hollow the shape of the product. The cope goes back on."],[9.5,14.6,"Molten aluminium is poured into the sprue until it shows at the riser. The riser lets air out and feeds the casting as it shrinks."],[14.6,17,"The metal cools and turns solid."],[17,20.5,"The sand is broken away and the casting is lifted out."],[20.5,23,"The sprue and riser are cut off. The casting is then fettled: rough edges are filed and smoothed."]]},dieCaster:{n:"Die casting machine",use:"Molten metal is forced into a steel mould called a die. Dies are expensive but last for thousands of castings, so die casting suits mass production. This machine makes aluminium model cars.",steps:[[0,2.4,"A ladle scoops molten aluminium from the holding furnace."],[2.4,6,"The ladle pours the metal into the shot sleeve."],[6,6.4,"The plunger forces the metal into the closed die under high pressure."],[6.4,8.4,"The metal cools and turns solid in seconds."],[8.4,9.4,"The die opens and ejector pins push the casting out."],[9.4,12,"The finished car drops into the bin and the die closes, ready for the next one."]]},rotoMoulder:{n:"Rotational moulding machine",use:"Makes large hollow products in one piece, such as kayaks, traffic cones and water tanks. This machine is making a kayak.",steps:[[0,2.5,"Plastic powder is put into the bottom half of the mould."],[2.5,4,"The mould is closed and clamped."],[4,9,"The oven doors open and the mould moves into the oven."],[9,18,"The mould turns slowly on two axes while it heats, so the melting powder coats the inside evenly."],[18,22,"The mould comes back out of the oven."],[22,27,"It keeps turning while the fans cool it, so the plastic sets evenly."],[27,33.5,"The mould opens and the kayak is lifted out: one hollow piece."],[33.5,36.5,"Fittings such as deck lines, hooks and the seat are added."]]},injectionMoulder:{n:"Injection moulding machine",use:"Mass-produces accurate plastic parts with a good finish, such as bottle tops, casings and toy building bricks.",steps:[[0,3.2,"Plastic granules drop from the hopper into the barrel. Heater bands and the turning screw melt them, and molten plastic builds up at the front."],[3.2,4,"The screw rams forward, forcing the molten plastic into the closed mould."],[4,4.96,"The plastic cools and hardens in the mould."],[4.96,5.6,"The mould opens."],[5.6,7.85,"Ejector pins push the brick out and it drops into the bin."]]},vacuumFormer:{n:"Vacuum former",use:"Shapes a thermoplastic sheet over a mould. Used for trays, packaging and blister packs. This one is making a biscuit tray.",steps:[[0,3,"A thermoplastic sheet, such as polystyrene (HIPS), is clamped in the frame."],[3,9,"The heater slides over and the sheet softens."],[9,11,"The heater goes back and the lever raises the mould into the soft sheet."],[11,13.5,"The vacuum pump sucks the air out, pulling the sheet tight over the mould."],[13.5,17.5,"The mould is lowered, the frame is opened and the formed sheet is taken out."],[17.5,20.5,"The tray is trimmed out of the sheet."],[20.5,23,"The finished tray."]]}},eb=()=>{let i=Object.assign({},Ih);return delete i.sandCasting,i.dieCaster=Object.assign({},Ih.dieCaster,{n:"High pressure die casting machine",use:"High pressure die casting: molten metal is forced into a steel mould called a die under high pressure. Dies are expensive but last for thousands of castings, so it suits mass production of complex, accurate metal parts. This machine makes aluminium model cars."}),i},af=["sandCasting","dieCaster","rotoMoulder","injectionMoulder","vacuumFormer"],tb=`.bttw [hidden]{display:none!important}.bttw{position:absolute;inset:0;overflow:hidden;font-family:inherit;color:#F4F4F6}.bttview{position:absolute;inset:0}.bttview canvas{display:block;touch-action:none}
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
@media (max-width:700px){.bttcard{top:auto;right:8px;left:8px;width:auto;bottom:8px;max-height:56%}.bttw.btfocus .btttop span{display:none}.bttback{top:52px}.bttov{inset:6px}.bttgrid{grid-template-columns:repeat(2,1fr)}}`,Rh=null;function kl(){if(!Rh){let i=new _i({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});i.setPixelRatio(Math.min(1.5,devicePixelRatio||1)),i.toneMapping=ti,i.localClippingEnabled=!0;let e=new ki(i).fromScene(new Rs,.04).texture;Rh={r:i,env:e}}return Rh}function qf(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);return t.addColorStop(0,"rgba(0,0,0,.55)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),new An(i)}function of(i){let e=kl(),t=new Tn;t.environment=e.env,t.environmentIntensity=.9;let n=new ei(16777215,1.6);n.position.set(40,80,60),t.add(n,new _s(16777215,3355443,.5),i);let s=new Ct().setFromObject(i),r=s.getBoundingSphere(new Un),a=new Ie(new Rn(1,1),new Ii({map:qf(),transparent:!0,depthWrite:!1}));return a.rotation.x=-Math.PI/2,a.scale.setScalar(r.radius*2.4),a.position.set(r.center.x,s.min.y-r.radius*.18,r.center.z),t.add(a),{sc:t,R:r.radius,c:r.center}}var lf=[["hop","Fill the hopper with plastic granules"],["heat","Switch on the heater bands"],["close","Close and clamp the mould"],["melt","Turn the screw to melt the plastic"],["inject","Ram the molten plastic into the mould"],["cool","Let the plastic cool and harden"],["open","Open the mould"],["eject","Push the product out with the ejector pins"]],nb={heat:[["hop","Fill the hopper with granules first."]],melt:[["hop","There's no plastic in the hopper yet!"],["heat","The plastic won't melt until the heater bands are on."]],inject:[["melt","There's no molten plastic to inject yet."],["close","Close the mould first, or the molten plastic would squirt out!"]],cool:[["inject","The mould is still empty."]],open:[["inject","There's nothing in the mould yet."],["cool","Wait! The plastic needs to cool and harden first."]],eject:[["open","The mould is still closed."]]},vr="Thermosetting plastics set hard for good the first time they are heated, so they can't be melted and shaped again. Try a thermoplastic.",cf=["abs","acrylic","pp","ps","uf","mf"],hf=["al","brass","cu","ci","ms","ss"],Ch={injectionMoulder:{type:"inj",mat:"plastic",list:cf,ok:{abs:1,acrylic:1,pp:1,ps:1},no:{uf:vr+" Products like plugs are compression moulded instead.",mf:vr+" Products like melamine plates are compression moulded instead."}},rotoMoulder:{mat:"plastic",list:["pe","pp","abs","acrylic","ps","uf","mf"],ok:{pe:1,pp:1},warn:{pe:"Polyethylene isn't on the National 5 materials list, so you don't need to learn it, but it's the plastic used most for rotational moulding."},no:{abs:"ABS isn't used for rotational moulding: as a powder in a mould with no pressure, it doesn't melt and flow together well.",acrylic:"Acrylic is too brittle and doesn't fuse together well as a powder, so it isn't rotationally moulded.",ps:"Polystyrene is too brittle and doesn't fuse together well as a powder, so it isn't rotationally moulded.",uf:vr,mf:vr},products:["kayak","barrier"],steps:[["Put plastic powder into the mould",0,2.5],["Close and clamp the mould",2.5,4],["Move the mould into the oven",4,9],["Heat it while it turns on two axes",9,18],["Move it out of the oven",18,22],["Cool it while it keeps turning",22,27],["Open the mould and take out the product",27,33.5],["Add the fittings",33.5,36.5]]},vacuumFormer:{mat:"plastic",list:cf,ok:{ps:1,acrylic:1,abs:1,pp:1},warn:{ps:"Polystyrene sheet (HIPS, high impact polystyrene) is the sheet most schools use: it is cheap and forms easily.",acrylic:"Acrylic sheet can be vacuum formed, but it needs care: if it is not hot enough it can crack.",abs:"ABS sheet is vacuum formed in industry for things like luggage and car parts.",pp:"Polypropylene sheet can be vacuum formed, but it sags quickly when hot, so it is tricky."},no:{uf:vr,mf:vr},products:["tray","mask","egg"],steps:[["Clamp the sheet in the frame",0,3],["Heat the sheet until it is soft",3,9],["Raise the mould into the soft sheet",9,11],["Switch on the vacuum pump",11,13.5],["Lower the mould and take out the sheet",13.5,17.5],["Trim the product out of the sheet",17.5,20.5],["Put the finished product in the crate",20.5,23]]},dieCaster:{mat:"metal",list:hf,ok:{al:1},no:{brass:"Brass can be die cast in industry, but this machine is set up for aluminium.",cu:"Copper melts at about 1,085 \xB0C. It would quickly wear out the steel die, so it is not die cast here.",ci:"Cast iron melts at about 1,150 \xB0C: far too hot for a steel die. Cast iron is sand cast instead.",ms:"Steel melts at about 1,450 \xB0C: far too hot for a steel die.",ss:"Stainless steel melts at about 1,450 \xB0C: far too hot for a steel die."},products:["car","sharpener","drone"],steps:[["Ladle molten aluminium from the furnace",0,2.4],["Pour it into the shot sleeve",2.4,6],["Inject it into the die with the plunger",6,6.4],["Let it cool and solidify",6.4,8.4],["Open the die and eject the casting",8.4,9.4],["Collect the casting",9.4,12]]},sandCasting:{mat:"metal",sand:!0,list:hf,ok:{al:1,ci:1,brass:1},no:{cu:"Pure copper is hard to cast cleanly: it soaks up gas and the casting ends up full of holes. It is usually cast as an alloy, such as brass.",ms:"Steel melts at about 1,450 \xB0C. It can be cast in heavy industry, but it's far too hot for a foundry like this one.",ss:"Stainless steel melts at about 1,450 \xB0C: far too hot for a foundry like this one."},products:["wheel","dumbbell","turbo"],steps:[["Ram sand into the drag round the pattern",0,2],["Turn the drag over",2,3],["Add the cope with the sprue and riser pins, and ram it",3,6],["Remove the pins and the pattern, then close the mould",6,9.5],["Pour in the molten metal",9.5,14.6],["Let the metal cool",14.6,17],["Break away the sand",17,20.5],["Cut off the sprue and riser",20.5,23]]}},df=(i,e)=>typeof i=="string"&&ai[i]?Gh(i,{sand:e}):Hl(i);function ib(i,e={}){let t=!!e.factory,n=t&&e.level==="H",s=t?n?eb():Ih:Ky,r=Jy,a=t?n?af.filter(E=>E!=="sandCasting"):af:Qy;for(let[E,v]of[["signcss",Wf],["tourcss",tb]]){let O=document.getElementById(E);O||(O=document.createElement("style"),O.id=E,document.head.appendChild(O)),O.textContent=v}i.innerHTML=`<div class="bttw"><div class="bttview"></div><div class="bttpins"></div>
  <div class="btttop"><b>${e.title||(t?"The factory":"Workshop tour")}</b><span>${t?"Tap a machine, then tap each step":"Tap a machine to find out about it"}</span></div>
  <button class="bttback" hidden>\u2190 ${t?"Whole factory":"Whole workshop"}</button>
  <aside class="bttcard" hidden><button class="bttx" aria-label="Close">\u2715</button><h2></h2><p class="bttuse"></p>
   <div class="bttfac" ${t?"":"hidden"}><h3>Step by step</h3><ol class="bttsteps"></ol><div class="bttplay"><button class="btlookb btgo" hidden>\u{1F50D} Take a closer look at what's been made</button><button class="bttall" hidden>\u25B6 Play all steps</button><button class="btgame" hidden>\u{1F3AE} Have a go yourself</button></div></div>
   <div class="bttopp" hidden></div>
   <div class="bttws" ${t?"hidden":""}><h3 class="bttmust">You must wear</h3><div class="bttppe"></div><h3>Stay safe</h3><ul class="bttsafe"></ul><div class="bttnav"><button class="bttprev">\u2039 Previous</button><button class="bttnext">Next \u203A</button></div></div></aside>
  <div class="bttov" hidden></div><div class="bttcele" hidden></div></div>`;let o=E=>i.querySelector(E),l=o(".bttview"),c=o(".bttov"),d=new _i({antialias:!0,powerPreference:"high-performance"});d.setPixelRatio(Math.min(1.5,devicePixelRatio||1)),d.toneMapping=ti,d.shadowMap.enabled=!0,d.shadowMap.type=vs,l.appendChild(d.domElement);let u=new Tn;u.background=new tt(1974051),u.environment=new ki(d).fromScene(new Rs,.04).texture,u.environmentIntensity=.7;let f=t?Uf({higher:n}):Ff({noBench:!!e.noBench});u.add(f),f.traverse(E=>{E.isMesh&&(E.castShadow=!E.material.transparent,E.receiveShadow=!0)});let p=new ei(16773596,2.2);p.position.set(...t?[-10,650,360]:[140,320,220]),p.castShadow=!0,t&&(p.target.position.set(-270,0,-60),u.add(p.target));let _=t?700:240;Object.assign(p.shadow.camera,{left:-_,right:_,top:_,bottom:-_,near:1,far:t?1800:900}),p.shadow.mapSize.set(2048,2048),p.shadow.bias=-8e-4,p.shadow.normalBias=.6,p.shadow.autoUpdate=!1,d.shadowMap.autoUpdate=!1,d.shadowMap.needsUpdate=!0,u.add(p,new _s(16777215,4473924,.35));let y=new Vt(36,1,1,5e3),m=new _r(y,d.domElement);m.enableDamping=!0,m.maxPolarAngle=Math.PI*.46,m.minDistance=60,m.maxDistance=t?2200:950,m.enablePan=t,m.screenSpacePanning=!1;let x=t?{p:ee(-150,860,1120),t:ee(-270,30,-60)}:{p:ee(400,440,520),t:ee(0,10,0)};y.position.copy(x.p),m.target.copy(x.t);let S=null,A=null,M=null,C=-1,T=null,g=null,w=null,B={},I={},L={};try{L=JSON.parse(localStorage.getItem("bt-unl")||"{}")}catch{}let Z=()=>{try{localStorage.setItem("bt-unl",JSON.stringify(L))}catch{}},K=!1,F=!0;m.addEventListener("change",()=>F=!0);let X=f.userData.items.map(E=>{E.obj.updateMatrixWorld(!0);let v=new Ct().setFromObject(E.obj);return{...E,c:E.obj.userData.focus?E.obj.localToWorld(E.obj.userData.focus.clone()):v.getCenter(ee(0,0,0)),top:ee((v.min.x+v.max.x)/2,E.obj.userData.pinY||v.max.y+8,(v.min.z+v.max.z)/2),rad:v.getBoundingSphere(new Un).radius}}),N=E=>X.find(v=>v.key===E);a=a.filter(E=>N(E));let j=o(".bttpins");j.innerHTML=X.map(E=>`<button class="bttpin" data-k="${E.key}"><i></i><span>${{bench:"Workbench",fretSaw:"Fret saw",fluidiser:"Fluidiser",injectionMoulder:"Injection moulding",rotoMoulder:"Rotational moulding",dieCaster:n?"High pressure die casting":"Die casting",sandCasting:"Sand casting"}[E.key]||s[E.key].n}</span></button>`).join("")+'<button class="bttpin btlook" hidden><i></i><span>Take a closer look</span></button>';let H=j.querySelector(".btlook"),U=null,z={p:x.p.clone(),t:x.t.clone()};function $(){let E=l.clientWidth,v=l.clientHeight;if(!E||!v)return;d.setSize(E,v),y.aspect=E/v,y._ox=-1,y.updateProjectionMatrix();let O=Math.max(1,(t?1.55:1.3)/y.aspect);x.p.copy(z.t).add(z.p.clone().sub(z.t).multiplyScalar(O)),!A&&!S&&(y.position.copy(x.p),m.target.copy(x.t)),F=!0}new ResizeObserver($).observe(l),$();function xe(E,v,O=1100){S={p0:y.position.clone(),t0:m.target.clone(),p:E,t:v,s:performance.now(),dur:O}}let W=o(".bttsteps");function G(E,v){let O=N(E);O&&O.anim&&(O.anim(v),d.shadowMap.needsUpdate=!0,F=!0)}function ne(E){let v=A&&N(A),O=v&&v.obj.userData.product;U=E&&O?v.obj.localToWorld(O.point.clone()):null,H.hidden=!U,o(".btlookb").hidden=!U,F=!0}function me(){let E=s[A].steps,v=E.length;W.querySelectorAll(".bttstep").forEach((O,se)=>{let le=!(se===0||B[A][se-1]);O.disabled=le,O.classList.toggle("btlock",le),O.classList.toggle("bton",se===C&&!!M),O.classList.toggle("btdone",!!B[A][se]&&!(se===C&&M)),O.classList.toggle("btrev",!!B[A][se]||se===C),O.classList.toggle("btnx",!M&&se===C+1)}),o(".bttall").textContent=M&&M.all?"\u275A\u275A Pause":C>=v-1&&!M?"\u21BA Play again":C>=0?"\u25B6 Play the rest":"\u25B6 Play all steps",I[A]&&ne(!0)}function ge(E,v){let O=s[A].steps;if(E>=O.length){M=null,me();return}C=E,B[A][E]=1;let[se,le]=O[E];M={a:se,b:le,t:se,last:performance.now(),all:v},G(A,se),me();let ue=o(".bttcard"),_e=W.children[E];if(ue&&_e){let Q=_e.offsetTop-ue.clientHeight*.3;ue.scrollTo({top:Math.max(0,Q),behavior:"smooth"})}}W.addEventListener("click",E=>{let v=E.target.closest(".bttstep");v&&!v.disabled&&!M&&!T&&ge(+v.dataset.i,!1)}),o(".bttall").onclick=()=>{let E=s[A].steps.length;if(M&&M.all){M=null,me();return}ge(C>=E-1?0:C+1,!0)};function Ee(E){let v=N(E);v&&v.anim&&G(E,v.obj.userData.idle||0)}function He(E){g&&ye(),ze(),A=E,M=null,C=-1;let v=N(E),O=s[E],se=v.obj.userData.view?v.obj.userData.view.clone().applyQuaternion(v.obj.getWorldQuaternion(new un)).setY(0).normalize():y.position.clone().sub(m.target).setY(0).normalize(),le=v.c.clone(),ue=Math.max(140,v.rad*(v.obj.userData.zoom||1)*(v.rad>200?1.75:3.3))*(l.clientWidth<=700?1.55:1);xe(le.clone().add(se.multiplyScalar(ue)).add(ee(0,ue*.55,0)),le),o(".bttcard h2").textContent=O.n,o(".bttuse").textContent=O.use,o(".bttopp").hidden=!0,t?(B[E]=B[E]||{},o(".bttfac").hidden=!1,W.innerHTML=O.steps.map((_e,Q)=>`<li><button class="bttstep" data-i="${Q}"><b>${Q+1}</b><span>${_e[2]}</span></button></li>`).join(""),o(".btgame").hidden=!(Ch[E]&&L[E]),G(E,O.steps[0][0]),ne(!1),me()):(o(".bttsafe").innerHTML=`<li>${Xf}</li>`+O.safe.map(_e=>`<li>${_e}</li>`).join(""),o(".bttppe").innerHTML=Vf(r[E]||["eye","clothing"])),o(".bttcard").hidden=!1,o(".bttcard").scrollTop=0,o(".bttback").hidden=!1,i.querySelector(".bttw").classList.add("btfocus"),j.querySelectorAll(".bttpin[data-k]").forEach(_e=>_e.classList.toggle("bton",_e.dataset.k===E))}function at(){g&&ye(),ze(),t&&A&&Ee(A),A=null,M=null,ne(!1),xe(x.p.clone(),x.t.clone()),o(".bttcard").hidden=!0,o(".bttback").hidden=!0,i.querySelector(".bttw").classList.remove("btfocus"),j.querySelectorAll(".bttpin[data-k]").forEach(E=>E.classList.remove("bton"))}j.addEventListener("click",E=>{let v=E.target.closest(".bttpin");if(v){if(v.classList.contains("btlook")){Qe();return}He(v.dataset.k)}}),o(".bttx").onclick=at,o(".bttback").onclick=at,o(".bttnext").onclick=()=>He(a[(a.indexOf(A)+1)%a.length]),o(".bttprev").onclick=()=>He(a[(a.indexOf(A)+a.length-1)%a.length]);function ze(){w&&(w.stop(),w=null);let E=!c.hidden;c.hidden=!0,c.innerHTML="",F=!0,E&&K&&A&&Ch[A]&&!L[A]&&(L[A]=1,Z(),Ye()),K=!1}function Ye(){let E=o(".bttcele");E.innerHTML=`<div class="btcbox"><div class="btconf">${Array.from({length:18},(v,O)=>`<i style="--x:${O*37%100}%;--d:${O%6*.12}s;--c:${["#B9E5CB","#F4B3C2","#8EC5FF","#FFD38A"][O%4]}"></i>`).join("")}</div><b>Well done!</b><p>You have watched the process and studied the product. Now it's your turn: choose a material and make your own.</p><div class="bttplay"><button class="btgo btcgo">\u{1F3AE} Let's make something</button><button class="btclater">Later</button></div></div>`,E.hidden=!1,o(".btgame").hidden=!1,E.querySelector(".btcgo").onclick=()=>{E.hidden=!0,Ue()},E.querySelector(".btclater").onclick=()=>{E.hidden=!0}}function Qe(){if(g&&g.done){pe(g.prod,g.col||g.mat,"Your "+vn[g.prod].n.toLowerCase(),"Made by "+s[A].n.replace(" machine","").toLowerCase()+" in "+(In[g.mat]||ai[g.mat]).n);return}let E=N(A),v=E.obj.userData.product;K=!0,pe(v.key,v.col,vn[v.key].n,s[A].n.replace(" machine",""))}o(".btlookb").onclick=Qe;function pe(E,v,O,se){let le=K;ze(),K=le;let ue=vn[E],_e=df(v,A==="sandCasting"),Q=ue.make(_e),ie=null;c.innerHTML=`<div class="bttovh"><div><small>${se}</small><b>${O}</b></div><button class="btclose">\u2715 Back</button></div><div class="bttovb"><div class="bttpvp"></div></div><div class="bttinfo" hidden><b></b><p></p></div>
   <div class="bttovf"><span>Drag to turn it round. Tap a dot to find out how you can tell how it was made.</span>${Q.explode?'<button class="btexp">Explode the product</button>':""}</div>`,c.hidden=!1,c.querySelector(".btclose").onclick=()=>{ze()};let ve=c.querySelector(".bttovb"),k=c.querySelector(".bttpvp"),de=c.querySelector(".bttinfo"),ae=kl();ve.appendChild(ae.r.domElement);let we=of(Q.obj),Me=new Vt(32,1,.5,4e3),Te=new Ct().setFromObject(Q.obj).getSize(ee(0,0,0)),Le=we.R/Math.sin(16*Math.PI/180)*1.08;Me.position.copy(we.c).add(ee(0,.42,1).normalize().multiplyScalar(Le));let Oe=new _r(Me,ae.r.domElement);Oe.target.copy(we.c),Oe.enablePan=!1,Oe.enableDamping=!0,Oe.enableZoom=!0,Oe.zoomSpeed=1.2,Oe.minDistance=Le*.12,Oe.maxDistance=Le*2.6;let Se=0;Oe.addEventListener("start",()=>Se=1);let Be=e.level||"N5";k.innerHTML=Q.feat.map((Lt,$t)=>{let Kt=Lt.higher&&Be==="N5";return`<button class="bttpin${Kt?" btdis":""}" data-i="${$t}" ${Lt.inside?"hidden":""} ${Kt?'disabled title="For Higher"':""}><i></i><span>${Lt.t}${Lt.higher?"<sup>Higher</sup>":""}</span></button>`}).join(""),k.addEventListener("click",Lt=>{let $t=Lt.target.closest(".bttpin");if(!$t)return;let Kt=Q.feat[+$t.dataset.i];if(ie===Kt){ie=null,$t.classList.remove("bton"),de.hidden=!0;return}ie=Kt,Se=0,k.querySelectorAll(".bttpin").forEach(cs=>cs.classList.toggle("bton",cs===$t)),de.hidden=!1,de.querySelector("b").textContent=Kt.t,de.querySelector("p").textContent=Kt.d}),k.insertAdjacentHTML("afterbegin",Q.feat.map((Lt,$t)=>`<b class="btln${Lt.higher&&Be==="N5"?" btdis":""}" data-i="${$t}"></b><i class="btdot${Lt.higher&&Be==="N5"?" btdis":""}" data-i="${$t}"></i>`).join(""));let nt=[...k.querySelectorAll(".bttpin")],Fe=[...k.querySelectorAll(".btdot")],xt=[...k.querySelectorAll(".btln")],kt=[];k.addEventListener("wheel",Lt=>{Lt.preventDefault(),ae.r.domElement.dispatchEvent(new WheelEvent("wheel",{deltaY:Lt.deltaY,deltaX:Lt.deltaX,deltaMode:Lt.deltaMode,clientX:Lt.clientX,clientY:Lt.clientY,bubbles:!0,cancelable:!0}))},{passive:!1});let ln=0,bi=0,qn=c.querySelector(".btexp");qn&&(qn.onclick=()=>{bi=bi?0:1,qn.textContent=bi?"Put it back together":"Explode the product",de.hidden=!0});let Xl=performance.now(),Hi=ee(0,0,0),Er=!0,Yn=0;function jt(Lt){if(!Er)return;Yn=requestAnimationFrame(jt);let $t=ve.clientWidth,Kt=ve.clientHeight;if(!$t||!Kt)return;if($t!==jt.w||Kt!==jt.h){jt.w=$t,jt.h=Kt,ae.r.setSize($t,Kt),Me.aspect=$t/Kt,Me.updateProjectionMatrix();let R=Math.tan(16*Math.PI/180),V=R*Me.aspect,re=Math.max(Te.x,Te.z)/2,J=Math.max(Te.y,Math.min(Te.x,Te.z)*.45)/2,te=Math.min(Te.x,Te.z)/2;Le=Math.max(re/V,J/R)*1.12+te,Me.userData.k=1;let Re=Me.position.clone().sub(Oe.target).normalize();Me.position.copy(Oe.target).add(Re.multiplyScalar(Le)),Oe.minDistance=Le*.12,Oe.maxDistance=Le*2.6,jt.zt=0,jt.ls=ie}let cs=Math.min(1,(Lt-Xl)/900),wr=1-Math.pow(1-cs,3),vi=Lt/1e3;Q.obj.position.y=-we.R*.8*(1-wr),Q.obj.scale.setScalar((.6+.4*wr)*(1-.22*ln));let Ca=Math.min(.1,(Lt-(jt.l||Lt))/1e3)*(window.__BTFAST||1);jt.l=Lt;let Ls=1-Math.pow(.92,Ca*60);Q.tick&&Q.tick(vi,Ca,ie);let Ns=ie&&ie.pose||Q.pose&&Q.pose(ie);{let R=Le*(Me.userData.k||1)*(ie&&ie.zoom||1);if(ie!==jt.ls&&(jt.ls=ie,jt.zt=R),jt.zt){let V=Me.position.clone().sub(Oe.target),re=V.length(),J=re+(jt.zt-re)*Ls;Me.position.copy(Oe.target).add(V.setLength(J)),Math.abs(J-jt.zt)<.5&&(jt.zt=0)}}if(Ns)Q.obj.rotation.x+=(Ns.x-Q.obj.rotation.x)*Ls,Q.obj.rotation.y+=(Ns.y-Q.obj.rotation.y)*Ls;else if(!Se){let R=.35*Math.sin(vi*.45),V=.06*Math.sin(vi*.33);Q.obj.rotation.y+=(R-Q.obj.rotation.y)*.05,Q.obj.rotation.x+=(V-Q.obj.rotation.x)*.05}Q.explode&&(ln+=(bi-ln)*.08,Q.explode(ln)),Oe.update(),ae.r.render(we.sc,Me);let Pa=we.c.clone().project(Me),ql=(Pa.x*.5+.5)*$t,Yl=(-Pa.y*.5+.5)*Kt,Mi=[];Q.feat.forEach((R,V)=>{let re=nt[V],J=R.inside&&ln<.6;if(re.hidden=J,Fe[V].style.display=xt[V].style.display=J?"none":"",J)return;Q.obj.updateMatrixWorld(!0),R.o?R.o.localToWorld(Hi.copy(R.p)):Hi.copy(R.p).applyMatrix4(Q.obj.matrixWorld),Hi.project(Me);let te=(Hi.x*.5+.5)*$t,Re=(-Hi.y*.5+.5)*Kt,Ge=te-ql,Ce=Re-Yl,ke=Math.hypot(Ge,Ce)||1;Ge/=ke,Ce/=ke,ke<4&&(Ge=0,Ce=-1);let je=re.offsetWidth||90,ot=re.offsetHeight||26,ft={x:te+Ge*(56+je*.3),y:Re+Ce*46-8},Ze=kt[V]||(kt[V]={x:ft.x,y:ft.y});Ze.x+=(ft.x-Ze.x)*.3,Ze.y+=(ft.y-Ze.y)*.3,Mi.push({i:V,ax:te,ay:Re,P:Ze,bw:je,bh:ot})});for(let R=0;R<8;R++)for(let V=0;V<Mi.length;V++)for(let re=V+1;re<Mi.length;re++){let J=Mi[V],te=Mi[re],Re=(J.bw+te.bw)/2+6-Math.abs(J.P.x-te.P.x),Ge=(J.bh+te.bh)/2+4-Math.abs(J.P.y-te.P.y);if(Re>0&&Ge>0)if(Ge<Re){let Ce=(J.P.y<te.P.y?-1:1)*Ge/2;J.P.y+=Ce,te.P.y-=Ce}else{let Ce=(J.P.x<te.P.x?-1:1)*Re/2;J.P.x+=Ce,te.P.x-=Ce}}Mi.forEach(({i:R,ax:V,ay:re,P:J,bw:te,bh:Re})=>{J.x=Math.max(te/2+6,Math.min($t-te/2-6,J.x)),J.y=Math.max(Re/2+6,Math.min(Kt-Re/2-6,J.y)),nt[R].style.transform=`translate(${J.x-te/2}px,${J.y-Re/2}px)`,Fe[R].style.transform=`translate(${V}px,${re}px)`;let Ge=J.x-V,Ce=J.y-re,ke=Math.max(0,Math.hypot(Ge,Ce)-Math.min(te,Re)/2);xt[R].style.width=ke+"px",xt[R].style.transform=`translate(${V}px,${re}px) rotate(${Math.atan2(Ce,Ge)}rad)`})}Yn=requestAnimationFrame(jt),w={stop(){Er=!1,cancelAnimationFrame(Yn),Oe.dispose()}}}o(".btgame").onclick=()=>Ue();function ye(){let E=N(A);if(E&&g&&g.cfg&&g.cfg.type==="inj"&&E.obj.userData.game&&E.obj.userData.game.end(),E&&g&&g.cfg&&g.cfg.type!=="inj"&&E.obj.userData.setProduct){let v=E.obj.userData.product;E.obj.userData.setProduct(v.key,v.col)}g=null,T=null,o(".bttopp").hidden=!0,o(".bttfac").hidden=!1,A&&Ee(A),ne(!!I[A])}function Ae(E,v,O,se){c.innerHTML=`<div class="bttovh"><div><small>${E}</small><b>${v}</b></div><button class="btclose">\u2715 Close</button></div>${O}<div class="bttovf">${se||""}</div>`,c.hidden=!1,c.querySelector(".btclose").onclick=()=>{ze(),g&&!g.running&&(g=null)}}function Ue(){M=null,me(),g={step:1,cfg:Ch[A]},De()}function De(){w&&(w.stop(),w=null);let E=g.cfg,v=E.mat==="metal",O=v?ai:In,se=E.colour===!1||v?3:4,le=Q=>{if(v)return`<span class="btpel" style="background:radial-gradient(circle at 35% 30%,#fff 0 6%,${"#"+ai[Q].col.toString(16).padStart(6,"0")} 35%,#2a2b30 95%)"></span>`;let ie=In[Q];return`<span class="btpel" style="background:radial-gradient(circle at 35% 30%,#fff 0 8%,${ie.kind==="set"?"#c8b7a0":"#e9d9c9"} 30%,${ie.kind==="set"?"#7a6a58":"#8f7f72"} 85%)"></span>`},ue=Q=>v?ai[Q].kind==="fe"?"Ferrous metal":"Non-ferrous metal":(In[Q].kind==="set"?"Thermosetting":"Thermoplastic")+(In[Q].extra?" \xB7 not in N5":"");Ae(`Have a go \xB7 Step 1 of ${se}`,v?"Choose your metal":"Choose your plastic",`<div class="bttgrid">${E.list.map(Q=>`<button class="bttopt" data-k="${Q}">${le(Q)}<b>${O[Q].n}</b><span class="bttag ${!v&&In[Q].kind==="set"?"set":""}">${ue(Q)}</span></button>`).join("")}</div><div class="bttdet" hidden></div>`,`<span>Tap a ${v?"metal":"plastic"} to find out about it. Not every one will work in this machine!</span>`);let _e=c.querySelector(".bttdet");c.querySelector(".bttgrid").addEventListener("click",Q=>{let ie=Q.target.closest(".bttopt");if(!ie)return;let ve=ie.dataset.k,k=O[ve];c.querySelectorAll(".bttopt").forEach(Te=>Te.classList.toggle("bton",Te===ie)),_e.hidden=!1;let de=E.ok[ve],ae=E.no&&E.no[ve],we=E.warn&&E.warn[ve];_e.innerHTML=`<b>${k.full||k.n}</b><p>${k.blurb}</p><p><i>Used for:</i> ${k.uses}</p>`+(de?(we?`<p class="note">${we}</p>`:"")+`<div class="bttplay"><button class="btgo">\u2713 Use ${k.n}</button></div>`:`<p class="warn">\u2715 ${ae||"This can't be used in this machine."}</p>`);let Me=_e.querySelector(".btgo");Me&&(Me.onclick=()=>{g.mat=ve,et()}),_e.scrollIntoView({block:"nearest"})})}let qe=De;function Ne(E,v){let O=kl(),se=vn[E].make(df(v,g&&g.cfg&&g.cfg.sand)),le=of(se.obj),ue=new Vt(30,4/3,.5,4e3),_e=le.R/Math.sin(15*Math.PI/180)*1.05;return ue.position.copy(le.c).add(ee(.5,.55,1).normalize().multiplyScalar(_e)),ue.lookAt(le.c),O.r.setSize(240,180,!1),O.r.render(le.sc,ue),O.r.domElement.toDataURL("image/png")}function et(){let E=g.cfg,v=E.mat==="metal",O=E.products||Object.keys(vn).filter(ue=>(vn[ue].mats||[]).includes(g.mat)),se=v?g.mat:In[g.mat].cols[0];Ae(`Have a go \xB7 Step 2 of ${v?3:4}`,"Choose a product to make in "+(v?ai:In)[g.mat].n,`<div class="bttgrid">${O.map(ue=>`<button class="bttopt" data-k="${ue}"><img alt="" src="${Ne(ue,se)}"><b>${vn[ue].n}</b><small>${kf[ue]}</small></button>`).join("")}</div>`,'<button class="btsec btbk">\u2039 Change material</button>'),c.querySelector(".btbk").onclick=De,c.querySelector(".bttgrid").addEventListener("click",ue=>{let _e=ue.target.closest(".bttopt");_e&&(g.prod=_e.dataset.k,v?mt():ht())})}function ht(){let E=In[g.mat].cols;Ae("Have a go \xB7 Step 3 of 4","Choose your colour",`<div class="bttovb"></div><div class="bttchips">${E.map((Le,Oe)=>`<button data-i="${Oe}"><i style="background:${Le==="clear"?"linear-gradient(135deg,#ffffff55,#cfe6f522)":"#"+Le.toString(16).padStart(6,"0")}"></i>${Ta[Le]}</button>`).join("")}</div>`,'<button class="btsec btbk">\u2039 Change product</button><span>Plastic granules come in lots of colours.</span><button class="btuse" disabled>Choose a colour</button>'),c.querySelector(".btbk").onclick=et;let v=c.querySelector(".bttovb"),O=kl();v.appendChild(O.r.domElement);let se=new Tn;se.environment=O.env;let le=new ei(16777215,1.6);le.position.set(20,40,30),se.add(le,new _s(16777215,3355443,.5));let ue=new Xe;se.add(ue);let _e=[],Q=new Et(.8,.8,1.3,14),ie=qf();E.forEach((Le,Oe)=>{let Se=new Xe,Be=Hl(Le,{rough:.18});for(let xt=0;xt<34;xt++){let kt=Math.random()*7,ln=Math.sqrt(Math.random())*3.4,bi=Math.max(0,(3.4-ln)*.7)*Math.random()+.6,qn=new Ie(Q,Be);qn.position.set(Math.cos(kt)*ln,bi,Math.sin(kt)*ln),qn.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),Se.add(qn)}let nt=new Ie(new Rn(9,9),new Ii({map:ie,transparent:!0,depthWrite:!1}));nt.rotation.x=-Math.PI/2,nt.position.y=.02,Se.add(nt);let Fe=Oe/E.length*Math.PI*2;Se.position.set(Math.cos(Fe)*10,0,Math.sin(Fe)*10),Se.userData.i=Oe,ue.add(Se),_e.push(Se)});let ve=new Vt(34,1,.5,500);ve.position.set(0,17,25),ve.lookAt(0,1,0);let k=-1,de=Le=>{k=Le,g.col=E[Le],c.querySelectorAll(".bttchips button").forEach((Se,Be)=>Se.classList.toggle("bton",Be===Le));let Oe=c.querySelector(".btuse");Oe.disabled=!1,Oe.textContent="\u2713 Use "+Ta[E[Le]].toLowerCase()};c.querySelector(".bttchips").addEventListener("click",Le=>{let Oe=Le.target.closest("button");Oe&&de(+Oe.dataset.i)});let ae=new hr;O.r.domElement.onclick=Le=>{let Oe=O.r.domElement.getBoundingClientRect();ae.setFromCamera(ee((Le.clientX-Oe.left)/Oe.width*2-1,-(Le.clientY-Oe.top)/Oe.height*2+1,0),ve);let Se=ae.intersectObjects(_e,!0)[0];if(Se){let Be=Se.object;for(;Be&&Be.userData.i===void 0;)Be=Be.parent;Be&&de(Be.userData.i)}},c.querySelector(".btuse").onclick=()=>{O.r.domElement.onclick=null,mt()};let we=!0,Me=0;function Te(Le){if(!we)return;Me=requestAnimationFrame(Te);let Oe=v.clientWidth,Se=v.clientHeight;if(!(!Oe||!Se)){if(O.r.domElement.width!==Math.round(Oe*O.r.getPixelRatio())||O.r.domElement.height!==Math.round(Se*O.r.getPixelRatio())){O.r.setSize(Oe,Se),ve.aspect=Oe/Se,ve.updateProjectionMatrix();let Be=Math.max(1,1.5/ve.aspect);ve.position.set(0,17*Be,25*Be),ve.lookAt(0,1,0)}ue.rotation.y=Le/1e3*.12,_e.forEach((Be,nt)=>{Be.rotation.y=-Le/1e3*.25;let Fe=nt===k?1.6:0;Be.position.y+=(Fe-Be.position.y)*.1,Be.scale.setScalar(1+(nt===k?.15:0))}),O.r.render(se,ve)}}Me=requestAnimationFrame(Te),w={stop(){we=!1,cancelAnimationFrame(Me)}}}function mt(){if(g.cfg.type!=="inj")return q();ze();let E=N(A),v=E.obj.userData.game;g.running=!0,g.done=!1,g.did={};let O=vn[g.prod].make(Hl(g.col)),se=O.obj,le=new Ct().setFromObject(se),ue=14/Math.max(...le.getSize(ee(0,0,0)).toArray());se.scale.setScalar(ue);let _e=new Xe;_e.add(se),v.start(g.col==="clear"?14675960:g.col,g.col==="clear",_e),d.shadowMap.needsUpdate=!0,F=!0,ne(!1);let Q=lf.map(de=>de).sort(()=>Math.random()-.5);o(".bttfac").hidden=!0;let ie=o(".bttopp");ie.hidden=!1,ie.innerHTML=`<h3>Have a go \xB7 Step 4 of 4</h3><p class="bttuse">Make your <b>${Ta[g.col].toLowerCase()} ${vn[g.prod].n.toLowerCase()}</b> in <b>${In[g.mat].n}</b>. Tap the steps in the right order to run the machine.</p>
   <div class="bttop">${Q.map(([de,ae])=>`<button data-k="${de}"><b>?</b><span>${ae}</span></button>`).join("")}</div><p class="bttmsg"></p><div class="bttplay"><button class="btlookb2 btgo" hidden>\u{1F50D} View your finished product</button><button class="btagain" hidden>\u{1F3AE} Make another</button><button class="btquit">Stop and go back</button></div>`,o(".bttcard").scrollTop=0;let ve=ie.querySelector(".bttmsg"),k=0;ie.querySelector(".btquit").onclick=()=>{ye()},ie.querySelector(".btagain").onclick=()=>{ye(),Ue()},ie.querySelector(".btlookb2").onclick=Qe,ie.querySelector(".bttop").addEventListener("click",de=>{let ae=de.target.closest("button");if(!ae||ae.classList.contains("btok"))return;let we=ae.dataset.k;if(T){ve.textContent="Wait for that step to finish.";return}if(T){ve.textContent="Wait for that step to finish.";return}let Me=(nb[we]||[]).find(([Te])=>!g.did[Te]);if(Me){ve.textContent=Me[1],ae.classList.remove("btno"),ae.offsetWidth,ae.classList.add("btno");return}k++,g.did[we]=1,ae.classList.add("btok"),ae.querySelector("b").textContent=k,ve.textContent="",T={k:we,u:0,dur:v.steps[we],last:performance.now(),btn:ae}})}function q(){ze();let E=N(A),v=g.cfg,O=v.mat==="metal";g.running=!0,g.done=!1,g.did={},g.n=0,E.obj.userData.setProduct(g.prod,O?g.mat:g.col),G(A,0),ne(!1);let se=v.steps.map((Q,ie)=>[ie,Q[0]]).sort(()=>Math.random()-.5),le=O?ai[g.mat].n:Ta[g.col].toLowerCase()+" "+In[g.mat].n;o(".bttfac").hidden=!0;let ue=o(".bttopp");ue.hidden=!1,ue.innerHTML=`<h3>Have a go \xB7 Last step</h3><p class="bttuse">Make your <b>${vn[g.prod].n.toLowerCase()}</b> in <b>${le}</b>. Tap the steps in the right order to run the machine.</p>
   <div class="bttop">${se.map(([Q,ie])=>`<button data-i="${Q}"><b>?</b><span>${ie}</span></button>`).join("")}</div><p class="bttmsg"></p><div class="bttplay"><button class="btlookb2 btgo" hidden>\u{1F50D} View your finished product</button><button class="btagain" hidden>\u{1F3AE} Make another</button><button class="btquit">Stop and go back</button></div>`,o(".bttcard").scrollTop=0;let _e=ue.querySelector(".bttmsg");ue.querySelector(".btquit").onclick=()=>{ye()},ue.querySelector(".btagain").onclick=()=>{ye(),Ue()},ue.querySelector(".btlookb2").onclick=Qe,ue.querySelector(".bttop").addEventListener("click",Q=>{let ie=Q.target.closest("button");if(!ie||ie.classList.contains("btok"))return;if(T){_e.textContent="Wait for that step to finish.";return}let ve=+ie.dataset.i;if(ve!==g.n){_e.textContent="Not yet. First: "+v.steps[g.n][0].toLowerCase()+".",ie.classList.remove("btno"),ie.offsetWidth,ie.classList.add("btno");return}g.n++,g.did[ve]=1,ie.classList.add("btok"),ie.querySelector("b").textContent=g.n,_e.textContent="",T={anim:!0,t:v.steps[ve][1],b:v.steps[ve][2],last:performance.now()}})}function Tt(){let E=N(A),v=g.cfg.type==="inj"?lf.length:g.cfg.steps.length;if(Object.keys(g.did).length===v){g.done=!0,g.running=!1;let O=o(".bttopp");O.querySelector(".bttmsg").textContent="Well done! Your product is finished. Take a closer look at it.",O.querySelector(".btlookb2").hidden=!1,O.querySelector(".btagain").hidden=!1,O.querySelector(".btquit").textContent="Back to the machine",U=E.obj.localToWorld((E.obj.userData.game?E.obj.userData.game.binPoint:E.obj.userData.product.point).clone()),H.hidden=!1,H.querySelector("span").textContent="View your finished product",F=!0}}let ut=new hr,bt=null;d.domElement.addEventListener("pointerdown",E=>{bt={x:E.clientX,y:E.clientY}}),d.domElement.addEventListener("pointerup",E=>{if(!bt||Math.hypot(E.clientX-bt.x,E.clientY-bt.y)>6){bt=null;return}if(bt=null,g&&g.running)return;let v=d.domElement.getBoundingClientRect();ut.setFromCamera(ee((E.clientX-v.left)/v.width*2-1,-(E.clientY-v.top)/v.height*2+1,0),y);let O=ut.intersectObjects(X.map(se=>se.obj),!0)[0];if(O){let se=O.object;for(;se&&!se.userData.key;)se=se.parent;se&&se.userData.key!==A&&He(se.userData.key)}});let Pe=ee(0,0,0),It=0,Je=!0;function st(E){if(!Je)return;if(It=requestAnimationFrame(st),!i.isConnected){Je=!1,d.dispose();return}if(!l.offsetParent)return;if(S){let se=Math.min(1,(E-S.s)/S.dur),le=se<.5?4*se*se*se:1-Math.pow(-2*se+2,3)/2;y.position.lerpVectors(S.p0,S.p,le),m.target.lerpVectors(S.t0,S.t,le),se>=1&&(S=null),F=!0}{let se=l.clientWidth,le=l.clientHeight,ue=!!A,_e=se<=700,Q=ue&&!_e?se*.17:0,ie=ue&&_e?le*.26:0;(y._ox!==Q||y._oy!==ie)&&(y._ox=Q,y._oy=ie,Q||ie?y.setViewOffset(se,le,Q,ie,se,le):y.clearViewOffset(),F=!0)}if(m.update(),t){if(M){let se=Math.min(.1,(E-M.last)/1e3)*(window.__BTFAST||1);if(M.last=E,M.t=Math.min(M.b,M.t+se),G(A,M.t),M.t>=M.b){let le=M.all,ue=C,_e=s[A].steps.length;M=null,ue>=_e-1&&(I[A]=1),le&&ue<_e-1?ge(ue+1,!0):(ue<_e-1&&(C=ue),me())}}if(T&&T.anim){let se=Math.min(.1,(E-T.last)/1e3)*(window.__BTFAST||1);T.last=E,T.t=Math.min(T.b,T.t+se),G(A,T.t),T.t>=T.b&&(T=null,Tt()),i.dataset.busy=T?"1":""}else if(T){let se=Math.min(.1,(E-T.last)/1e3)*(window.__BTFAST||1);T.last=E,T.u=Math.min(1,T.u+se/T.dur),N(A).obj.userData.game.run(T.k,T.u,E/1e3),d.shadowMap.needsUpdate=!0,F=!0,T.u>=1&&(T=null,Tt())}i.dataset.busy=T?"1":""}else f.userData.anim&&(f.userData.anim(E/1e3),d.shadowMap.needsUpdate=!0,F=!0);if(!c.hidden&&!F||!F)return;F=!1;{let se=Math.min(40,Math.max(1,y.position.distanceTo(m.target)*.04));Math.abs(se-y.near)>.5&&(y.near=se,y.updateProjectionMatrix())}d.render(u,y);let v=l.clientWidth,O=l.clientHeight;j.querySelectorAll(".bttpin[data-k]").forEach((se,le)=>{Pe.copy(X[le].top).project(y);let ue=Pe.z<1&&Math.abs(Pe.x)<1.05&&Math.abs(Pe.y)<1.05;se.style.display=ue?"":"none",se.style.transform=`translate(${(Pe.x*.5+.5)*v}px,${(-Pe.y*.5+.5)*O}px) translate(-50%,-100%)`}),U&&(Pe.copy(U).project(y),H.style.transform=`translate(${(Pe.x*.5+.5)*v}px,${(-Pe.y*.5+.5)*O}px) translate(-50%,-100%)`)}return It=requestAnimationFrame(st),i.__bt={viewProduct:pe,unlock:E=>{L[E]=1}},{stop(){Je=!1,cancelAnimationFrame(It)},home:at}}var Yf=[["Measuring and marking out",[["Steel rule",Dh,[70,0,-20]],["Try square",Lh,[65,25,0]],["Engineer\u2019s square",P_,[65,25,0]],["Marking gauge",Vl,[15,-35,0]],["Mortise gauge",I_,[15,-35,0]],["Scriber",pf,[10,0,-60]],["Centre punch",D_,[10,0,-55]],["Dividers",N_,[5,-20,0]],["Outside callipers",F_,[5,-20,0]],["Odd-leg callipers",U_,[5,-20,0]],["Pencil",w_,[10,0,-60]]]],["Saws",[["Tenon saw",Nh,[5,-18,0]],["Coping saw",T_,[5,-20,0]],["Hacksaw",mf,[5,-20,0]],["Junior hacksaw",k_,[5,-20,0]]]],["Chisels",[["Bevel-edge chisel",Fh,[35,20,-60]],["Mortise chisel",O_,[15,-20,-55]]]],["Hammers and mallets",[["Ball-pein hammer",H_,[10,-30,-20]],["Cross-pein hammer",z_,[10,-30,-20]],["Claw hammer",xf,[10,-30,-20]],["Wooden mallet",Uh,[10,-35,-20]],["Hide mallet",G_,[10,-30,-20]]]],["Planes",[["Jack plane",_f,[25,-30,0]],["Smoothing plane",ff,[25,-30,0]],["Rebate plane",V_,[25,-30,0]],["Plough plane",W_,[25,-30,0]]]],["Drill bits",[["Twist drill",yf,[15,0,-35]],["Forstner bit",X_,[38,55,0]],["Countersink bit",q_,[20,0,-30]],["Centre drill",Y_,[15,0,-55]]]],["Other hand tools",[["Flat file",vf,[40,-15,10]],["Half-round file",Z_,[40,-15,10]],["Hand router",j_,[35,-25,0]],["Pliers",Mf,[15,-15,20]],["Pop-rivet gun",K_,[5,-25,0]],["Flat screwdriver",ny,[10,0,-55]],["Cross-head screwdriver",iy,[10,0,-55]],["Tin snips",$_,[8,-15,4]],["Bending bars",J_,[20,-25,-8]],["Tap and wrench",Q_,[20,-20,0]],["Die and stock",ey,[55,-15,0]],["Nail punch",L_,[10,0,-55]],["Bradawl",ty,[10,0,-55]]]],["Holding and clamping",[["Bench vice",Sf,[20,-35,0]],["Engineer\u2019s vice",Ef,[20,-35,0]],["Machine vice",sy,[25,-35,0]],["Hand vice",ry,[5,-18,0]],["Soft jaws (vice guards)",hy,[22,-35,0]],["G clamp",ay,[5,-25,0]],["Quick clamp",ly,[100,-25,-90]],["Sash cramp",oy,[20,-20,0]]]],["Machines",[["Belt sander",wf,[14,-30,0]],["Pillar drill",Tf,[8,-35,0]],["Fret (scroll) saw",Af,[14,-40,0]],["Centre lathe",Rf,[16,-22,0]],["Wood lathe",Cf,[16,-22,0]],["Mortise machine",Pf,[10,-35,0]],["Fluidiser",If,[30,-30,0]],["Strip heater",Df,[28,-25,0]]]]];function zl(i,e){let t=i(),n=t.userData.anim;t.quaternion.copy(S_(...e));let s=new Xe;s.add(t),s.updateMatrixWorld(!0);let r=new Ct().setFromObject(t),a=r.getCenter(ee(0,0,0));t.position.sub(a);let o=new Xe;return o.add(s),o.userData.anim=n,{g:o,r:r.getSize(ee(0,0,0)).length()/2}}function Gl(i,e){i.environment=new ki(e).fromScene(new Rs,.04).texture,i.environmentIntensity=.7;let t=new ei(16773596,2.2);t.position.set(6,10,9);let n=new ei(12571903,1.8);n.position.set(-8,4,-10),i.add(t,n,new lr(16777215,.25))}var sb=Wf+`.tl-n{color:#BFC3C8;margin:0 0 6px;font-size:14px}
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
#tlinfo p{margin:0;font-size:15.5px;line-height:1.45}#tlinfo ul{margin:0;padding-left:20px;font-size:15.5px;line-height:1.45}#tlinfo li{margin:0 0 4px}#tlovp{left:14px;top:50%}#tlovnx{right:14px;top:50%}`;function rb(i){let e=document.createElement("style");e.textContent=sb,document.head.appendChild(e);let t=document.createElement("div");t.id="tlov",t.setAttribute("role","dialog"),t.setAttribute("aria-label","3D tool viewer"),t.innerHTML='<div id="tlovc"></div><div id="tlab"><button type="button" data-ab="use" aria-pressed="false">Tool use</button><button type="button" data-ab="safe" aria-pressed="false">Stay safe</button></div><div id="tlinfo" hidden></div><div id="tlovn"></div><button class="tlob" id="tlovx" aria-label="Close">\u2715</button><button class="tlob" id="tlovp" aria-label="Previous tool">\u2039</button><button class="tlob" id="tlovnx" aria-label="Next tool">\u203A</button>',document.body.appendChild(t);let n=[],s="";for(let[I,L]of Yf){s+=`<h3 class="tl-h">${I}</h3><div class="tl-g">`;for(let[Z,K,F]of L)s+=`<button type="button" class="tl-t" data-i="${n.length}"><img alt=""><span>${Z}</span></button>`,n.push([Z,K,F]);s+="</div>"}i.innerHTML=`<p class="tl-n">${n.length} tools and machines \xB7 tap one to see it turn. Drag to spin it yourself.</p>`+s;let r=new _i({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});r.setSize(256,256),r.setPixelRatio(1),r.toneMapping=ti;let a=new Tn;Gl(a,r);let o=new Vt(30,1,.1,800),l=i.querySelectorAll(".tl-t img"),c=0;(function I(){let L=performance.now();for(;c<n.length&&performance.now()-L<40;){let[Z,K,F]=n[c],{g:X,r:N}=zl(K,F);a.add(X),o.position.set(0,N*.25,N*3.6),o.lookAt(0,0,0),r.render(a,o),l[c].src=r.domElement.toDataURL(),a.remove(X),c++}c<n.length?setTimeout(I,16):r.dispose()})();let d=new _i({antialias:!0,alpha:!0});d.setPixelRatio(Math.min(2,devicePixelRatio||1)),d.toneMapping=ti,document.getElementById("tlovc").appendChild(d.domElement);let u=new Tn;Gl(u,d);let f=new Vt(30,1,.1,800),p=new _r(f,d.domElement);p.enablePan=!1,p.enableDamping=!0;let _=null,y=0,m=0,x=null;function S(I){y=(I+n.length)%n.length,_&&u.remove(_);let[L,Z,K]=n[y],{g:F,r:X}=zl(Z,K);_=F,u.add(F);let N=Math.max(1,.85/Math.max(.3,innerWidth/innerHeight));f.position.set(0,X*.3*N,X*3.4*N),p.target.set(0,0,0),p.minDistance=X*1.5,p.maxDistance=X*12,p.update(),document.getElementById("tlovn").textContent=L,T(null)}let A=null,M=document.getElementById("tlinfo"),C=document.getElementById("tlab");function T(I){A=I;let L=Zy[n[y][0]];if(C.hidden=!L,C.querySelectorAll("button").forEach(Z=>Z.setAttribute("aria-pressed",Z.dataset.ab===I)),!I||!L){M.hidden=!0;return}M.className=I,M.innerHTML=I==="use"?`<h4>Tool use</h4><p>${L[0]}</p>`:`<h4>Stay safe</h4>${Vf($y(n[y][0]))}<ul><li>${Xf}</li>${L[1].map(Z=>`<li>${Z}</li>`).join("")}</ul>`,M.hidden=!1}C.addEventListener("click",I=>{let L=I.target.closest("button");L&&T(A===L.dataset.ab?null:L.dataset.ab)});function g(){let I=innerWidth,L=innerHeight;d.setSize(I,L),f.aspect=I/L,f.updateProjectionMatrix()}function w(I){m=requestAnimationFrame(w),_&&(_.rotation.y+=.006,_.userData.anim&&_.userData.anim((I||0)/1e3)),p.update(),d.render(u,f)}function B(I){t.classList.contains("on")&&(t.classList.remove("on"),cancelAnimationFrame(m),!I&&history.state&&history.state.tlv&&history.back(),x&&x.focus({preventScroll:!0}))}addEventListener("popstate",()=>B(!0)),["gesturestart","gesturechange","dblclick"].forEach(I=>t.addEventListener(I,L=>L.preventDefault(),{passive:!1})),t.addEventListener("touchmove",I=>{I.touches.length>1&&I.target.tagName!=="CANVAS"&&I.preventDefault()},{passive:!1}),i.addEventListener("click",I=>{let L=I.target.closest(".tl-t");if(L){x=L,t.classList.add("on");try{history.pushState({tlv:1},"")}catch{}g(),S(+L.dataset.i),cancelAnimationFrame(m),w(),document.getElementById("tlovx").focus()}}),document.getElementById("tlovx").onclick=()=>B(),document.getElementById("tlovp").onclick=()=>S(y-1),document.getElementById("tlovnx").onclick=()=>S(y+1),addEventListener("keydown",I=>{t.classList.contains("on")&&(I.key==="Escape"&&B(),I.key==="ArrowLeft"&&S(y-1),I.key==="ArrowRight"&&S(y+1))}),addEventListener("resize",()=>{t.classList.contains("on")&&g()})}var Wl=[];Yf.forEach(([i,e],t)=>{e.forEach(([n,s,r])=>Wl.push({id:n.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),n,g:t,fn:s,pose:r}))});function ab(){return Wl.map(({id:i,n:e,g:t})=>({id:i,n:e,g:t}))}var rs=null,Ea=null,Dl=null,Ll={};function ob(i){if(Ll[i])return Ll[i];let e=Wl.find(s=>s.id===i);if(!e)return"";rs||(rs=new _i({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),rs.setSize(320,240),rs.setPixelRatio(1),rs.toneMapping=ti,Ea=new Tn,Gl(Ea,rs),Dl=new Vt(30,4/3,.1,800));let{g:t,r:n}=zl(e.fn,e.pose);return Ea.add(t),Dl.position.set(0,n*.25,n*3.3),Dl.lookAt(0,0,0),rs.render(Ea,Dl),Ll[i]=rs.domElement.toDataURL(),Ea.remove(t),Ll[i]}function lb(){let i=document.createElement("canvas");i.className="spin3d";let e=new _i({canvas:i,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(2,devicePixelRatio||1)),e.toneMapping=ti;let t=new Tn;Gl(t,e);let n=new Vt(30,4/3,.1,800),s=null,r=0,a=0,o=0;function l(){let d=i.parentElement;if(!d)return;let u=d.clientWidth,f=d.clientHeight;!u||!f||(i._w!==u||i._h!==f)&&(i._w=u,i._h=f,e.setSize(u,f,!1),n.aspect=u/f,n.updateProjectionMatrix())}function c(d){if(r=requestAnimationFrame(c),!i.isConnected||!s)return;let u=o?Math.min(.05,(d-o)/1e3):0;o=d,a+=u*.5,s.rotation.y=Math.sin(a)*.55,s.userData.anim&&s.userData.anim(d/1e3),l(),e.render(t,n)}return{canvas:i,show(d){let u=Wl.find(_=>_.id===d);if(s&&t.remove(s),s=null,!u)return;let{g:f,r:p}=zl(u.fn,u.pose);s=f,t.add(f),a=0,n.position.set(0,p*.25,p*3.7),n.lookAt(0,0,0),r||(r=requestAnimationFrame(c))},stop(){cancelAnimationFrame(r),r=0,o=0}}}return Qf(cb);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
