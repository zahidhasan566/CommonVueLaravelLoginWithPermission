!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Compress=e():t.Compress=e()}(this,(function(){return(()=>{var t={666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),o=new S(n||[]);return a._invoke=function(t,e,r){var n=f;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return I()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var u=_(o,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,o),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function y(){}function m(){}var w={};c(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(k([])));x&&x!==r&&n.call(x,a)&&(w=x);var L=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(i,a,o,u){var c=l(t[i],t,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,u)}),(function(t){r("throw",t,o,u)})):e.resolve(f).then((function(t){s.value=t,o(s)}),(function(t){return r("throw",t,o,u)}))}u(c.arg)}var i;this._invoke=function(t,n){function a(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(a,a):a()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:I}}function I(){return{value:e,done:!0}}return y.prototype=m,c(L,"constructor",m),c(m,"constructor",y),y.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(P.prototype),c(P.prototype,o,(function(){return this})),t.AsyncIterator=P,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new P(s(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(L),c(L,u,"Generator"),c(L,a,(function(){return this})),c(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(z),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return u.type="throw",u.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),z(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;z(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},139:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={size:function(t){return(t.replace(/^data:image\/\w+;base64,/,"").length-814)/1.37},mime:function(t){return t.split(";")[0].match(/jpeg|png|gif/)[0]},data:function(t){return t.replace(/^data:image\/\w+;base64,/,"")},prefix:function(t){return"data:".concat(t,";base64,")}}},558:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={base64ToFile:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"image/jpeg",r=window.atob(t),n=[],i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return new window.Blob([new Uint8Array(n)],{type:e})},imageToCanvas:function(t,e,r){var n=document.createElement("canvas"),i=n.getContext("2d");return n.width=t,n.height=e,function(a){if(!r||r>8)return i.drawImage(a,0,0,n.width,n.height),n;switch(r>4&&(n.width=e,n.height=t),r){case 2:i.translate(t,0),i.scale(-1,1);break;case 3:i.translate(t,e),i.rotate(Math.PI);break;case 4:i.translate(0,e),i.scale(1,-1);break;case 5:i.rotate(.5*Math.PI),i.scale(1,-1);break;case 6:i.rotate(.5*Math.PI),i.translate(0,-e);break;case 7:i.rotate(.5*Math.PI),i.translate(t,-e),i.scale(-1,1);break;case 8:i.rotate(-.5*Math.PI),i.translate(-t,0)}return r>4?i.drawImage(a,0,0,n.height,n.width):i.drawImage(a,0,0,n.width,n.height),n}},canvasToBase64:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,r=t.toDataURL("image/jpeg",e);return r},size:function(t){return{KB:t/1e3,MB:t/1e6}}};e.default=r},865:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={load:function(t){return new Promise((function(e,r){var n=new window.FileReader;n.addEventListener("load",(function(t){return e(t.target.result)}),!1),n.addEventListener("error",r,!1),n.readAsDataURL(t)}))}};e.default=r},659:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={load:function(t){return new Promise((function(e,r){var n=new window.Image;n.addEventListener("load",(function(){return e(n)}),!1),n.addEventListener("error",r,!1),n.src=t}))},resize:function(t,e){return function(r,n){if(!t&&!e)return{width:r,height:n};var i,a,o=r/n;return o>t/e?a=(i=Math.min(r,t))/o:i=(a=Math.min(n,e))*o,{width:i,height:a}}}};e.default=r},115:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default=function t(e){var r=e.quality,n=void 0===r?.75:r,i=e.size,a=void 0===i?2:i,o=e.maxWidth,u=void 0===o?1920:o,c=e.maxHeight,s=void 0===c?1920:c,l=e.resize,f=void 0===l||l,h=e.rotate,d=void 0!==h&&h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.start=window.performance.now(),this.end=null,this.alt=null,this.ext=null,this.startSize=null,this.startWidth=null,this.startHeight=null,this.size=1e3*a*1e3,this.endSize=null,this.endWidth=null,this.endHeight=null,this.iterations=0,this.base64prefix=null,this.quality=n,this.resize=f,this.maxWidth=u,this.maxHeight=s,this.orientation=1,this.rotate=d}},969:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={orientation:function(t){return new Promise((function(e){var r=new window.FileReader;r.onload=function(t){var r=new DataView(t.target.result);65496!==r.getUint16(0,!1)&&e(-2);for(var n=r.byteLength,i=2;i<n;){var a=r.getUint16(i,!1);if(i+=2,65505===a){1165519206!==r.getUint32(i+=2,!1)&&e(-1);var o=18761===r.getUint16(i+=6,!1);i+=r.getUint32(i+4,o);var u=r.getUint16(i,o);i+=2;for(var c=0;c<u;c++)274===r.getUint16(i+12*c,o)&&e(r.getUint16(i+12*c+8,o))}else{if(65280!=(65280&a))break;i+=r.getUint16(i,!1)}}e(-1)},r.readAsArrayBuffer(t.slice(0,65536))}))}};e.default=r}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}var n={};return(()=>{"use strict";var t=n;t.default=void 0,r(666);var e=s(r(139)),i=s(r(558)),a=s(r(865)),o=s(r(659)),u=s(r(115)),c=s(r(969));function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e,r,n,i,a,o){try{var u=t[a](o),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,i)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function o(t){l(a,n,i,o,u,"next",t)}function u(t){l(a,n,i,o,u,"throw",t)}o(void 0)}))}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n;return e=t,n=[{key:"convertBase64ToFile",value:function(t,e){return i.default.base64ToFile(t,e)}}],(r=[{key:"attach",value:function(t,e){var r=this;return new Promise((function(n){var i=document.querySelector(t);i.setAttribute("accept","image/*"),i.addEventListener("change",(function(t){var i,a=r.compress(function(t){if(Array.isArray(t))return h(t)}(i=t.target.files)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),e);n(a)}),!1)}))}},{key:"compress",value:function(t,e){return Promise.all(t.map((function(t){return function(t,e){return g.apply(this,arguments)}(t,e)})))}}])&&d(e.prototype,r),n&&d(e,n),t}();function v(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,c=i.default.canvasToBase64(t,n),s=e.default.size(c);return s>a||n>o?v(t,s,n-.1,a,o,u+1):c}function g(){return(g=f(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=new u.default(r)).start=window.performance.now(),n.alt=e.name,n.ext=e.type,n.startSize=e.size,!n.rotate){t.next=11;break}return t.next=8,c.default.orientation(e);case 8:t.t0=t.sent,t.next=12;break;case 11:t.t0=0;case 12:return n.orientation=t.t0,t.t1=y(n),t.next=16,a.default.load(e);case 16:return t.t2=t.sent,t.abrupt("return",(0,t.t1)(t.t2));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return function(){var r=f(regeneratorRuntime.mark((function r(n){var a,u,c,s,l,f,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.default.load(n);case 2:return a=r.sent,t.startWidth=a.naturalWidth,t.startHeight=a.naturalHeight,t.resize?(u=o.default.resize(t.maxWidth,t.maxHeight)(a.naturalWidth,a.naturalHeight),c=u.width,s=u.height,t.endWidth=c,t.endHeight=s):(t.endWidth=a.naturalWidth,t.endHeight=a.naturalHeight),l=i.default.imageToCanvas(t.endWidth,t.endHeight,t.orientation)(a),t.iterations=1,t.base64prefix=e.default.prefix(t.ext),r.next=11,v(l,t.startSize,t.quality,t.size,t.minQuality,t.iterations);case 11:return f=r.sent,t.finalSize=e.default.size(f),t.end=window.performance.now(),h=t.end-t.start,r.abrupt("return",{data:e.default.data(f),prefix:t.base64prefix,elapsedTimeInSeconds:h/1e3,alt:t.alt,initialSizeInMb:i.default.size(t.startSize).MB,endSizeInMb:i.default.size(t.finalSize).MB,ext:t.ext,quality:t.quality,endWidthInPx:t.endWidth,endHeightInPx:t.endHeight,initialWidthInPx:t.startWidth,initialHeightInPx:t.startHeight,sizeReducedInPercent:(t.startSize-t.finalSize)/t.startSize*100,iterations:t.iterations});case 16:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}t.default=p})(),n.default})()}));