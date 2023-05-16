(()=>{var e={1725:e=>{"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},2974:e=>{e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},8059:(e,t,r)=>{var n=r(4155),o=/%[sdj%]/g;t.format=function(e){if(!d(e)){for(var t=[],r=0;r<arguments.length;r++)t.push(u(arguments[r]));return t.join(" ")}r=1;for(var n=arguments,i=n.length,s=String(e).replace(o,(function(e){if("%%"===e)return"%";if(r>=i)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return e}})),c=n[r];r<i;c=n[++r])v(c)||!w(c)?s+=" "+c:s+=" "+u(c);return s},t.deprecate=function(e,o){if(m(r.g.process))return function(){return t.deprecate(e,o).apply(this,arguments)};if(!0===n.noDeprecation)return e;var i=!1;return function(){if(!i){if(n.throwDeprecation)throw new Error(o);n.traceDeprecation?console.trace(o):console.error(o),i=!0}return e.apply(this,arguments)}};var i,s={};function u(e,r){var n={seen:[],stylize:a};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),h(r)?n.showHidden=r:r&&t._extend(n,r),m(n.showHidden)&&(n.showHidden=!1),m(n.depth)&&(n.depth=2),m(n.colors)&&(n.colors=!1),m(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),l(n,e,n.depth)}function c(e,t){var r=u.styles[t];return r?"["+u.colors[r][0]+"m"+e+"["+u.colors[r][1]+"m":e}function a(e,t){return e}function l(e,r,n){if(e.customInspect&&r&&S(r.inspect)&&r.inspect!==t.inspect&&(!r.constructor||r.constructor.prototype!==r)){var o=r.inspect(n,e);return d(o)||(o=l(e,o,n)),o}var i=function(e,t){if(m(t))return e.stylize("undefined","undefined");if(d(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return y(t)?e.stylize(""+t,"number"):h(t)?e.stylize(""+t,"boolean"):v(t)?e.stylize("null","null"):void 0}(e,r);if(i)return i;var s=Object.keys(r),u=function(e){var t={};return e.forEach((function(e,r){t[e]=!0})),t}(s);if(e.showHidden&&(s=Object.getOwnPropertyNames(r)),x(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(r);if(0===s.length){if(S(r)){var c=r.name?": "+r.name:"";return e.stylize("[Function"+c+"]","special")}if(b(r))return e.stylize(RegExp.prototype.toString.call(r),"regexp");if(j(r))return e.stylize(Date.prototype.toString.call(r),"date");if(x(r))return f(r)}var a,w="",O=!1,T=["{","}"];return g(r)&&(O=!0,T=["[","]"]),S(r)&&(w=" [Function"+(r.name?": "+r.name:"")+"]"),b(r)&&(w=" "+RegExp.prototype.toString.call(r)),j(r)&&(w=" "+Date.prototype.toUTCString.call(r)),x(r)&&(w=" "+f(r)),0!==s.length||O&&0!=r.length?n<0?b(r)?e.stylize(RegExp.prototype.toString.call(r),"regexp"):e.stylize("[Object]","special"):(e.seen.push(r),a=O?function(e,t,r,n,o){for(var i=[],s=0,u=t.length;s<u;++s)z(t,String(s))?i.push(p(e,t,r,n,String(s),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(e,t,r,n,o,!0))})),i}(e,r,n,u,s):s.map((function(t){return p(e,r,n,u,t,O)})),e.seen.pop(),function(e,t,r){return e.reduce((function(e,t){return t.indexOf("\n"),e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}(a,w,T)):T[0]+w+T[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,r,n,o,i){var s,u,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?u=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(u=e.stylize("[Setter]","special")),z(n,o)||(s="["+o+"]"),u||(e.seen.indexOf(c.value)<0?(u=v(r)?l(e,c.value,null):l(e,c.value,r-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+u.split("\n").map((function(e){return"   "+e})).join("\n")):u=e.stylize("[Circular]","special")),m(s)){if(i&&o.match(/^\d+$/))return u;(s=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=e.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=e.stylize(s,"string"))}return s+": "+u}function g(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function v(e){return null===e}function y(e){return"number"==typeof e}function d(e){return"string"==typeof e}function m(e){return void 0===e}function b(e){return w(e)&&"[object RegExp]"===O(e)}function w(e){return"object"==typeof e&&null!==e}function j(e){return w(e)&&"[object Date]"===O(e)}function x(e){return w(e)&&("[object Error]"===O(e)||e instanceof Error)}function S(e){return"function"==typeof e}function O(e){return Object.prototype.toString.call(e)}function T(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(e){if(m(i)&&(i=n.env.NODE_DEBUG||""),e=e.toUpperCase(),!s[e])if(new RegExp("\\b"+e+"\\b","i").test(i)){var r=n.pid;s[e]=function(){var n=t.format.apply(t,arguments);console.error("%s %d: %s",e,r,n)}}else s[e]=function(){};return s[e]},t.inspect=u,u.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=g,t.isBoolean=h,t.isNull=v,t.isNullOrUndefined=function(e){return null==e},t.isNumber=y,t.isString=d,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=m,t.isRegExp=b,t.isObject=w,t.isDate=j,t.isError=x,t.isFunction=S,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=r(2974);var E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){var e,r;console.log("%s - %s",(r=[T((e=new Date).getHours()),T(e.getMinutes()),T(e.getSeconds())].join(":"),[e.getDate(),E[e.getMonth()],r].join(" ")),t.format.apply(t,arguments))},t.inherits=r(1725),t._extend=function(e,t){if(!t||!w(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e}},2520:(e,t,r)=>{"use strict";var n=r(4155),o="win32"===n.platform,i=r(8059);function s(e,t){for(var r=[],n=0;n<e.length;n++){var o=e[n];o&&"."!==o&&(".."===o?r.length&&".."!==r[r.length-1]?r.pop():t&&r.push(".."):r.push(o))}return r}function u(e){for(var t=e.length-1,r=0;r<=t&&!e[r];r++);for(var n=t;n>=0&&!e[n];n--);return 0===r&&n===t?e:r>n?[]:e.slice(r,n+1)}var c=/^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/,a=/^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/,l={};function f(e){var t=c.exec(e),r=(t[1]||"")+(t[2]||""),n=t[3]||"",o=a.exec(n);return[r,o[1],o[2],o[3]]}function p(e){var t=c.exec(e),r=t[1]||"",n=!!r&&":"!==r[1];return{device:r,isUnc:n,isAbsolute:n||!!t[2],tail:t[3]}}function g(e){return"\\\\"+e.replace(/^[\\\/]+/,"").replace(/[\\\/]+/g,"\\")}l.resolve=function(){for(var e="",t="",r=!1,o=arguments.length-1;o>=-1;o--){var u;if(o>=0?u=arguments[o]:e?(u=n.env["="+e])&&u.substr(0,3).toLowerCase()===e.toLowerCase()+"\\"||(u=e+"\\"):u=n.cwd(),!i.isString(u))throw new TypeError("Arguments to path.resolve must be strings");if(u){var c=p(u),a=c.device,l=c.isUnc,f=c.isAbsolute,h=c.tail;if((!a||!e||a.toLowerCase()===e.toLowerCase())&&(e||(e=a),r||(t=h+"\\"+t,r=f),e&&r))break}}return l&&(e=g(e)),e+(r?"\\":"")+(t=s(t.split(/[\\\/]+/),!r).join("\\"))||"."},l.normalize=function(e){var t=p(e),r=t.device,n=t.isUnc,o=t.isAbsolute,i=t.tail,u=/[\\\/]$/.test(i);return(i=s(i.split(/[\\\/]+/),!o).join("\\"))||o||(i="."),i&&u&&(i+="\\"),n&&(r=g(r)),r+(o?"\\":"")+i},l.isAbsolute=function(e){return p(e).isAbsolute},l.join=function(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(!i.isString(r))throw new TypeError("Arguments to path.join must be strings");r&&e.push(r)}var n=e.join("\\");return/^[\\\/]{2}[^\\\/]/.test(e[0])||(n=n.replace(/^[\\\/]{2,}/,"\\")),l.normalize(n)},l.relative=function(e,t){e=l.resolve(e),t=l.resolve(t);for(var r=e.toLowerCase(),n=t.toLowerCase(),o=u(t.split("\\")),i=u(r.split("\\")),s=u(n.split("\\")),c=Math.min(i.length,s.length),a=c,f=0;f<c;f++)if(i[f]!==s[f]){a=f;break}if(0==a)return t;var p=[];for(f=a;f<i.length;f++)p.push("..");return(p=p.concat(o.slice(a))).join("\\")},l._makeLong=function(e){if(!i.isString(e))return e;if(!e)return"";var t=l.resolve(e);return/^[a-zA-Z]\:\\/.test(t)?"\\\\?\\"+t:/^\\\\[^?.]/.test(t)?"\\\\?\\UNC\\"+t.substring(2):e},l.dirname=function(e){var t=f(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},l.basename=function(e,t){var r=f(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},l.extname=function(e){return f(e)[3]},l.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);var r=e.dir,n=e.base||"";return r?r[r.length-1]===l.sep?r+n:r+l.sep+n:n},l.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=f(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},l.sep="\\",l.delimiter=";";var h=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,v={};function y(e){return h.exec(e).slice(1)}v.resolve=function(){for(var e="",t=!1,r=arguments.length-1;r>=-1&&!t;r--){var o=r>=0?arguments[r]:n.cwd();if(!i.isString(o))throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,t="/"===o[0])}return(t?"/":"")+(e=s(e.split("/"),!t).join("/"))||"."},v.normalize=function(e){var t=v.isAbsolute(e),r=e&&"/"===e[e.length-1];return(e=s(e.split("/"),!t).join("/"))||t||(e="."),e&&r&&(e+="/"),(t?"/":"")+e},v.isAbsolute=function(e){return"/"===e.charAt(0)},v.join=function(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];if(!i.isString(r))throw new TypeError("Arguments to path.join must be strings");r&&(e+=e?"/"+r:r)}return v.normalize(e)},v.relative=function(e,t){e=v.resolve(e).substr(1),t=v.resolve(t).substr(1);for(var r=u(e.split("/")),n=u(t.split("/")),o=Math.min(r.length,n.length),i=o,s=0;s<o;s++)if(r[s]!==n[s]){i=s;break}var c=[];for(s=i;s<r.length;s++)c.push("..");return(c=c.concat(n.slice(i))).join("/")},v._makeLong=function(e){return e},v.dirname=function(e){var t=y(e),r=t[0],n=t[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},v.basename=function(e,t){var r=y(e)[2];return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},v.extname=function(e){return y(e)[3]},v.format=function(e){if(!i.isObject(e))throw new TypeError("Parameter 'pathObject' must be an object, not "+typeof e);var t=e.root||"";if(!i.isString(t))throw new TypeError("'pathObject.root' must be a string or undefined, not "+typeof e.root);return(e.dir?e.dir+v.sep:"")+(e.base||"")},v.parse=function(e){if(!i.isString(e))throw new TypeError("Parameter 'pathString' must be a string, not "+typeof e);var t=y(e);if(!t||4!==t.length)throw new TypeError("Invalid path '"+e+"'");return t[1]=t[1]||"",t[2]=t[2]||"",t[3]=t[3]||"",{root:t[0],dir:t[0]+t[1].slice(0,-1),base:t[2],ext:t[3],name:t[2].slice(0,t[2].length-t[3].length)}},v.sep="/",v.delimiter=":",e.exports=o?l:v,e.exports.posix=v,e.exports.win32=l},4155:e=>{var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u,c=[],a=!1,l=-1;function f(){a&&u&&(a=!1,u.length?c=u.concat(c):l=-1,c.length&&p())}function p(){if(!a){var e=s(f);a=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function h(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new g(e,t)),1!==c.length||a||s(p)},g.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=h,n.addListener=h,n.once=h,n.off=h,n.removeListener=h,n.removeAllListeners=h,n.emit=h,n.prependListener=h,n.prependOnceListener=h,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},9496:e=>{"use strict";e.exports=require("vscode")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var n={};(()=>{"use strict";var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=r(9496),o=r(2520);function i(){const e=t.window.activeTextEditor;if(e){const r=e.document.uri.fsPath,n=function(e){const t=e.split("/"),r=t.indexOf("component");let n;n=-1!==r?t.slice(r+1):t;const o=n.indexOf("internal");-1!==o&&(n=n.slice(0,o));return"https://grafana.com/docs/agent/next/flow/reference/components/"+n.join(".")}(o.dirname(r));t.env.openExternal(t.Uri.parse(n))}}e.activate=function(e){let r=t.commands.registerCommand("extension.openNewTab",i);e.subscriptions.push(r)}})();var o=exports;for(var i in n)o[i]=n[i];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();