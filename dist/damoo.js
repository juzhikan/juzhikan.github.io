!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("Damoo",[],n):"object"==typeof exports?exports.Damoo=n():t.Damoo=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/dist/",n(n.s=39)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){t.exports=!e(9)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(7),o=e(29),i=e(24),u=Object.defineProperty;n.f=e(1)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(3),o=e(11);t.exports=e(1)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(53),o=e(13);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(22)("wks"),o=e(12),i=e(0).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,n,e){var r=e(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(0),o=e(8),i=e(50),u=e(4),s=function(t,n,e){var f,c,a,l=t&s.F,p=t&s.G,h=t&s.S,y=t&s.P,d=t&s.B,v=t&s.W,m=p?o:o[n]||(o[n]={}),w=m.prototype,x=p?r:h?r[n]:(r[n]||{}).prototype;p&&(e=n);for(f in e)(c=!l&&x&&void 0!==x[f])&&f in m||(a=c?x[f]:e[f],m[f]=p&&"function"!=typeof x[f]?e[f]:d&&c?i(a,r):v&&x[f]==a?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(a):y&&"function"==typeof a?i(Function.call,a):a,y&&((m.virtual||(m.virtual={}))[f]=a,t&s.R&&w&&!w[f]&&u(w,f,a)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){t.exports={}},function(t,n){t.exports=!0},function(t,n,e){var r=e(34),o=e(14);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(3).f,o=e(2),i=e(6)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(22)("keys"),o=e(12);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(0),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(10);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(0),o=e(8),i=e(17),u=e(26),s=e(3).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||s(n,t,{value:u.f(t)})}},function(t,n,e){n.f=e(6)},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(10),o=e(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){t.exports=!e(1)&&!e(9)(function(){return 7!=Object.defineProperty(e(28)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){"use strict";var r=e(17),o=e(15),i=e(35),u=e(4),s=e(2),f=e(16),c=e(55),a=e(20),l=e(61),p=e(6)("iterator"),h=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,n,e,d,v,m,w){c(e,n,d);var x,b,g,S=function(t){if(!h&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",_="values"==v,j=!1,P=t.prototype,k=P[p]||P["@@iterator"]||v&&P[v],M=k||S(v),T=v?_?S("entries"):M:void 0,E="Array"==n?P.entries||k:k;if(E&&(g=l(E.call(new t)))!==Object.prototype&&g.next&&(a(g,O,!0),r||s(g,p)||u(g,p,y)),_&&k&&"values"!==k.name&&(j=!0,M=function(){return k.call(this)}),r&&!w||!h&&!j&&P[p]||u(P,p,M),f[n]=M,f[O]=y,v)if(x={values:_?M:S("values"),keys:m?M:S("keys"),entries:T},w)for(b in x)b in P||i(P,b,x[b]);else o(o.P+o.F*(h||j),n,x);return x}},function(t,n,e){var r=e(7),o=e(58),i=e(14),u=e(21)("IE_PROTO"),s=function(){},f=function(){var t,n=e(28)("iframe"),r=i.length;for(n.style.display="none",e(52).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;r--;)delete f.prototype[i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(s.prototype=r(t),e=new s,s.prototype=null,e[u]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(34),o=e(14).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2),o=e(5),i=e(49)(!1),u=e(21)("IE_PROTO");t.exports=function(t,n){var e,s=o(t),f=0,c=[];for(e in s)e!=u&&r(s,e)&&c.push(e);for(;n.length>f;)r(s,e=n[f++])&&(~i(c,e)||c.push(e));return c}},function(t,n,e){t.exports=e(4)},function(t,n,e){"use strict";function r(t){return t&&("string"==typeof t||"object"===(void 0===t?"undefined":i()(t))&&1===t.nodeType)||warn("element does not exist"),"string"==typeof t&&document.querySelector("#"+t)||t}n.a=r;var o=e(43),i=e.n(o)},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){"use strict";n.__esModule=!0;var r=e(40),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";function r(t,n){var e=document.createElement("canvas"),r=e.getContext("2d");return r.font=n,e.width=r.measureText(t.text).width,e.height=1.5*n.size,r.font=n,r.textAlign="start",r.textBaseline="top",t.shadow&&(r.shadowOffsetX=1,r.shadowOffsetY=1,r.shadowColor="#fff",r.shadowColor=t.shadow.color),r.fillStyle="#fff",r.fillStyle=t.color,r.fillText(t.text,0,0),e}function o(){this.canvas.clear();for(var t=0;t<this.thread.pool.length;t++){var n=this.thread.get(t),e=n.offset.x,r=n.offset.y;this.canvas.draw(n,e,r),n.offset.x-=n.speed,e<=-n.canvas.width&&this.thread.remove(t)}this._afid=l(o.bind(this))}Object.defineProperty(n,"__esModule",{value:!0});var i=e(37),u=e.n(i),s=e(38),f=e.n(s),c=e(36),a=function(){function t(n,e,r,o){u()(this,t),this.canvas=new h(n,e,r,o),this.thread=new d(this.canvas.rows)}return f()(t,[{key:"hide",value:function(){this.canvas.parent.removeChild(this.canvas.layer)}},{key:"emit",value:function(t){"string"==typeof t&&(t={text:t});var n=r(t,this.canvas.font);this.thread.push({canvas:n,fixed:t.fixed,index:this.thread.index,speed:.6*Math.pow(n.width,1/3),offset:{x:this.canvas.width,y:this.canvas.font.size*this.thread.index}})}},{key:"play",value:function(){return this.state||(this.emptyThreadPool(),o.call(this),this.state=1),this}},{key:"emptyThreadPool",value:function(){this.thread.empty()}},{key:"pause",value:function(){if(void 0===this.state)return this;p(this._afid),this.state=0}},{key:"resume",value:function(){return this.play()}}]),t}(),l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,17)},p=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame||function(t){clearTimeout(t)},h=function(){function t(n,r,o,i){u()(this,t),this.dpr=window.devicePixelRatio||1,this.parent=e.i(c.a)(n),this.id=r,this.rows=o,this.width=this.parent.offsetWidth*this.dpr,this.height=this.parent.offsetHeight*this.dpr,this.height/this.rows<24&&(this.rows=Math.floor(this.height/24)),this.font=new y(this.height/this.rows,i),this.layer=document.createElement("canvas"),this.layer.id=this.id,this.layer.width=this.width,this.layer.height=this.height,this.layer.style.width=this.width/this.dpr+"px",this.layer.style.height=this.height/this.dpr+"px",this.layer.style.display="block",this.layer.style.backgroundColor="transparent",this.ctx=this.layer.getContext("2d"),this.parent.appendChild(this.layer)}return f()(t,[{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"draw",value:function(t,n,e){t.fixed&&(n=(this.width-t.canvas.width)/2),this.ctx.drawImage(t.canvas,n,e)}}]),t}(),y=function(){function t(n,e){u()(this,t),this.size=n,this.family=e||"sans-serif"}return f()(t,[{key:"toString",value:function(){return this.size+"px "+this.family}}]),t}(),d=function(){function t(n){u()(this,t),this.index=0,this.rows=n,this.pool=[]}return f()(t,[{key:"push",value:function(t){this.index++,this.index>=this.rows&&(this.index=0),this.pool.push(t)}},{key:"get",value:function(t){return this.pool[t]}},{key:"remove",value:function(t){var n=this.get(t).index;this.index>n&&(this.index=n),this.pool.splice(t,1)}},{key:"empty",value:function(){this.index=0,this.pool=[]}}]),t}();n.default=a},function(t,n,e){t.exports={default:e(44),__esModule:!0}},function(t,n,e){t.exports={default:e(45),__esModule:!0}},function(t,n,e){t.exports={default:e(46),__esModule:!0}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(42),i=r(o),u=e(41),s=r(u),f="function"==typeof s.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};n.default="function"==typeof s.default&&"symbol"===f(i.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":f(t)}},function(t,n,e){e(67);var r=e(8).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){e(70),e(68),e(71),e(72),t.exports=e(8).Symbol},function(t,n,e){e(69),e(73),t.exports=e(26).f("iterator")},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(){}},function(t,n,e){var r=e(5),o=e(64),i=e(63);t.exports=function(t){return function(n,e,u){var s,f=r(n),c=o(f.length),a=i(u,c);if(t&&e!=e){for(;c>a;)if((s=f[a++])!=s)return!0}else for(;c>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(47);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(18),o=e(33),i=e(19);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,s=e(t),f=i.f,c=0;s.length>c;)f.call(t,u=s[c++])&&n.push(u);return n}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(27);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(31),o=e(11),i=e(20),u={};e(4)(u,e(6)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){var r=e(12)("meta"),o=e(10),i=e(2),u=e(3).f,s=0,f=Object.isExtensible||function(){return!0},c=!e(9)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;a(t)}return t[r].w},h=function(t){return c&&y.NEED&&f(t)&&!i(t,r)&&a(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:h}},function(t,n,e){var r=e(3),o=e(7),i=e(18);t.exports=e(1)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),s=u.length,f=0;s>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(19),o=e(11),i=e(5),u=e(24),s=e(2),f=e(29),c=Object.getOwnPropertyDescriptor;n.f=e(1)?c:function(t,n){if(t=i(t),n=u(n,!0),f)try{return c(t,n)}catch(t){}if(s(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(5),o=e(32).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?s(t):o(r(t))}},function(t,n,e){var r=e(2),o=e(65),i=e(21)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(23),o=e(13);t.exports=function(t){return function(n,e){var i,u,s=String(o(n)),f=r(e),c=s.length;return f<0||f>=c?t?"":void 0:(i=s.charCodeAt(f),i<55296||i>56319||f+1===c||(u=s.charCodeAt(f+1))<56320||u>57343?t?s.charAt(f):i:t?s.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},function(t,n,e){var r=e(23),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(23),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(13);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(48),o=e(56),i=e(16),u=e(5);t.exports=e(30)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n,e){var r=e(15);r(r.S+r.F*!e(1),"Object",{defineProperty:e(3).f})},function(t,n){},function(t,n,e){"use strict";var r=e(62)(!0);e(30)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){"use strict";var r=e(0),o=e(2),i=e(1),u=e(15),s=e(35),f=e(57).KEY,c=e(9),a=e(22),l=e(20),p=e(12),h=e(6),y=e(26),d=e(25),v=e(51),m=e(54),w=e(7),x=e(5),b=e(24),g=e(11),S=e(31),O=e(60),_=e(59),j=e(3),P=e(18),k=_.f,M=j.f,T=O.f,E=r.Symbol,A=r.JSON,F=A&&A.stringify,L=h("_hidden"),C=h("toPrimitive"),N={}.propertyIsEnumerable,R=a("symbol-registry"),I=a("symbols"),D=a("op-symbols"),G=Object.prototype,q="function"==typeof E,z=r.QObject,V=!z||!z.prototype||!z.prototype.findChild,W=i&&c(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=k(G,n);r&&delete G[n],M(t,n,e),r&&t!==G&&M(G,n,r)}:M,H=function(t){var n=I[t]=S(E.prototype);return n._k=t,n},B=q&&"symbol"==typeof E.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof E},J=function(t,n,e){return t===G&&J(D,n,e),w(t),n=b(n,!0),w(e),o(I,n)?(e.enumerable?(o(t,L)&&t[L][n]&&(t[L][n]=!1),e=S(e,{enumerable:g(0,!1)})):(o(t,L)||M(t,L,g(1,{})),t[L][n]=!0),W(t,n,e)):M(t,n,e)},K=function(t,n){w(t);for(var e,r=v(n=x(n)),o=0,i=r.length;i>o;)J(t,e=r[o++],n[e]);return t},Y=function(t,n){return void 0===n?S(t):K(S(t),n)},Q=function(t){var n=N.call(this,t=b(t,!0));return!(this===G&&o(I,t)&&!o(D,t))&&(!(n||!o(this,t)||!o(I,t)||o(this,L)&&this[L][t])||n)},U=function(t,n){if(t=x(t),n=b(n,!0),t!==G||!o(I,n)||o(D,n)){var e=k(t,n);return!e||!o(I,n)||o(t,L)&&t[L][n]||(e.enumerable=!0),e}},X=function(t){for(var n,e=T(x(t)),r=[],i=0;e.length>i;)o(I,n=e[i++])||n==L||n==f||r.push(n);return r},Z=function(t){for(var n,e=t===G,r=T(e?D:x(t)),i=[],u=0;r.length>u;)!o(I,n=r[u++])||e&&!o(G,n)||i.push(I[n]);return i};q||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===G&&n.call(D,e),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),W(this,t,g(1,e))};return i&&V&&W(G,t,{configurable:!0,set:n}),H(t)},s(E.prototype,"toString",function(){return this._k}),_.f=U,j.f=J,e(32).f=O.f=X,e(19).f=Q,e(33).f=Z,i&&!e(17)&&s(G,"propertyIsEnumerable",Q,!0),y.f=function(t){return H(h(t))}),u(u.G+u.W+u.F*!q,{Symbol:E});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)h($[tt++]);for(var nt=P(h.store),et=0;nt.length>et;)d(nt[et++]);u(u.S+u.F*!q,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=E(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var n in R)if(R[n]===t)return n},useSetter:function(){V=!0},useSimple:function(){V=!1}}),u(u.S+u.F*!q,"Object",{create:Y,defineProperty:J,defineProperties:K,getOwnPropertyDescriptor:U,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),A&&u(u.S+u.F*(!q||c(function(){var t=E();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!B(t)){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return n=r[1],"function"==typeof n&&(e=n),!e&&m(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!B(n))return n}),r[1]=n,F.apply(A,r)}}}),E.prototype[C]||e(4)(E.prototype,C,E.prototype.valueOf),l(E,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){e(25)("asyncIterator")},function(t,n,e){e(25)("observable")},function(t,n,e){e(66);for(var r=e(0),o=e(4),i=e(16),u=e(6)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<s.length;f++){var c=s[f],a=r[c],l=a&&a.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}}])});