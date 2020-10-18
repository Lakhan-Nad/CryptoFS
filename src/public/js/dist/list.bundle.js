!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=5)}([function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return u}));var n="test",i="utf8",o="pubkey",u="privkey"},function(t,e,r){"use strict";r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return u})),r.d(e,"d",(function(){return a}));var n=r(0),i=function(){sessionStorage.removeItem(n.d),sessionStorage.removeItem(n.c)},o=function(t,e,r){var n=new Blob([t],{type:r}),i=window.URL.createObjectURL(n);!function(t,e){var r=document.createElement("a");r.href=t,r.download=e,document.body.appendChild(r),r.style="display: none",r.click(),r.remove()}(i,e),setTimeout((function(){return window.URL.revokeObjectURL(i)}),1e3)},u=function(t){document.querySelectorAll(t).forEach((function(t){t.style.display="none"}))},a=function(t){document.querySelectorAll(t).forEach((function(t){t.style.display=""}))}},function(t,e,r){"use strict";r.d(e,"c",(function(){return f})),r.d(e,"d",(function(){return s})),r.d(e,"e",(function(){return o})),r.d(e,"b",(function(){return u})),r.d(e,"f",(function(){return c})),r.d(e,"a",(function(){return a}));var n=r(0),i=r(1),o=function(t,e){return(t===n.d||t===n.c)&&((64===e.length||e instanceof Uint8Array)&&(sessionStorage.setItem(t,new Uint8Array(e).toString()),!0))},u=function(){var t=forge.pki.ed25519.generateKeyPair(),e=function(t){var e={publicKey:t.publicKey.toString(),privateKey:t.privateKey.toString()};return JSON.stringify(e)}(t);return Object(i.a)(e,"cryptoFs-keypair.json","application/json"),o(n.d,t.publicKey),o(n.c,t.privateKey),t},a=function(t){var e=JSON.parse(t);return e.publicKey=new Uint8Array(e.publicKey.split(",")),e.privateKey=new Uint8Array(e.privateKey.split(",")),e},f=function(){var t={publicKey:sessionStorage.pubkey,privateKey:sessionStorage.privkey};return t.publicKey||t.publicKey?(t.publicKey=new Uint8Array(t.publicKey.split(",")),t.privateKey=new Uint8Array(t.privateKey.split(",")),t):null},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.b,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.a,r=f(),i=r.privateKey;return i?new Uint8Array(forge.pki.ed25519.sign({message:t,encoding:e,privateKey:i})):null},c=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f().publicKey,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s(),o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.b;document.querySelector("#".concat(t,' input[name="fileContentHash"]')).value=e,document.querySelector("#".concat(t,' input[name="msg"]')).value=o,document.querySelector("#".concat(t,' input[name="signature"]')).value=i.toString(),document.querySelector("#".concat(t,' input[name="publicKey"]')).value=r.toString()}},function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return o}));var n=r(1),i=function(t){document.querySelector("#navSuccessMessage").innerHTML=t,Object(n.d)("#navSuccess")},o=function(t){document.querySelector("#navFailureMessage").innerHTML=t,Object(n.d)("#navFailure")}},function(t,e,r){"use strict";r.r(e);var n=r(1),i=r(2),o=r(0),u=r(3);r.d(e,"showSuccessMessage",(function(){return u.b})),r.d(e,"showFailureMessage",(function(){return u.a}));Object(n.b)("#navSuccess"),Object(n.b)("#navFailure"),Object(n.b)("#keyManagementDiv"),Object(i.c)()?(Object(n.b)("#login"),Object(n.d)("#logout")):Object(n.b)("#logout"),document.querySelector("#logout").addEventListener("click",(function(){Object(n.c)(),window.location.reload()})),document.querySelector("#login").addEventListener("click",(function(){Object(n.d)("#keyManagementDiv")})),document.querySelector("#generateKeyValuePairButton").addEventListener("click",(function(){Object(i.b)(),window.location.reload()})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector("input[name=keyUpload]").addEventListener("change",(function(t){var e=new FileReader;e.onload=function(){var t=Object(i.a)(e.result);try{Object(i.e)(o.c,t.privateKey),Object(i.e)(o.d,t.publicKey),Object(u.b)("Key Successfully uploaded!"),Object(n.b)("#keyManagementDiv"),Object(n.b)("#login"),Object(n.d)("#logout")}catch(t){Object(u.a)(t)}},e.readAsText(t.target.files[0])}))}))},function(t,e,r){"use strict";r.r(e),function(t){var e=r(2),n=r(0),i=r(4),o=r(1);document.addEventListener("DOMContentLoaded",(function(){var r=Object(e.c)();if(r){var u=Object(e.d)(),a=r.publicKey,f=document.querySelector("#table1 tbody");f.innerHTML='<tr><td colspan="5"><progress class="progress is-info" max="100"></progress></td></tr>',fetch("/listFiles",{method:"GET",headers:{msg:n.b,signature:u.toString(),publicKey:a.toString(),"Content-Type":"application/json;charset=utf-8"}}).then((function(t){return t.json()})).then((function(r){f.textContent="",r.map.forEach((function(r){var u=document.createElement("tr"),a=document.createElement("td");a.innerHTML=r.metaData.filename;var s,c,h=document.createElement("td");h.innerHTML=(s=r.metaData.dateUploaded,c=new Date(parseInt(s,10)),"".concat(c.toLocaleDateString()," ").concat(c.toLocaleTimeString()));var l=document.createElement("td");l.innerHTML=r.fileContentHash;var p=document.createElement("td"),d=document.createElement("button");d.addEventListener("click",(function(){!function(r,u){var a=Object(e.c)();if(a){var f=document.getElementById("fileDownload"),s=Object(e.d)(),c=a.publicKey,h=new URLSearchParams({msg:n.b,signature:s.toString(),publicKey:c.toString(),fileContentHash:r});fetch(f.getAttribute("action"),{method:f.getAttribute("method"),body:h,headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){return t.blob()})).then((function(t){return t.text()})).then((function(e){var r=forge.util.createBuffer(a.privateKey.slice(0,16)),n=forge.util.createBuffer(a.privateKey.slice(16,33)),i=forge.cipher.createDecipher("AES-CBC",r);i.start({iv:n}),i.update(forge.util.createBuffer(e)),i.finish();var f=t.from(i.output.getBytes(),"binary");Object(o.a)(f,u,"application/octet-stream")}))}else Object(i.showFailureMessage)("Please login to upload file")}(r.fileContentHash,r.metaData.filename)})),d.setAttribute("class","button is-info listDownloadButton"),d.innerHTML="Download",p.appendChild(d);var g=document.createElement("td"),y=document.createElement("button");y.addEventListener("click",(function(){var t;t=r.fileContentHash,Object(e.f)("fileDelete",t),document.forms.fileDelete.submit()})),y.setAttribute("class","button is-danger listDeleteButton"),y.innerHTML="Delete",g.appendChild(y),u.appendChild(a),u.appendChild(h),u.appendChild(l),u.appendChild(p),u.appendChild(g),f.appendChild(u)}))})).catch((function(t){Object(i.showFailureMessage)(t.toString())}))}else Object(i.showFailureMessage)("Please login to view list")}))}.call(this,r(6).Buffer)},function(t,e,r){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=r(8),i=r(9),o=r(10);function u(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=f.prototype:(null===t&&(t=new f(e)),t.length=e),t}function f(t,e,r){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return s(this,t,e,r)}function s(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n);f.TYPED_ARRAY_SUPPORT?(t=e).__proto__=f.prototype:t=l(t,e);return t}(t,e,r,n):"string"==typeof e?function(t,e,r){"string"==typeof r&&""!==r||(r="utf8");if(!f.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(e,r),i=(t=a(t,n)).write(e,r);i!==n&&(t=t.slice(0,i));return t}(t,e,r):function(t,e){if(f.isBuffer(e)){var r=0|p(e.length);return 0===(t=a(t,r)).length||e.copy(t,0,0,r),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(n=e.length)!=n?a(t,0):l(t,e);if("Buffer"===e.type&&o(e.data))return l(t,e.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function c(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e){if(c(e),t=a(t,e<0?0:0|p(e)),!f.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function l(t,e){var r=e.length<0?0:0|p(e.length);t=a(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function d(t,e){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return K(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return F(t).length;default:if(n)return K(t).length;e=(""+e).toLowerCase(),n=!0}}function g(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return O(this,e,r);case"utf8":case"utf-8":return T(this,e,r);case"ascii":return P(this,e,r);case"latin1":case"binary":return B(this,e,r);case"base64":return _(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return U(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function y(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,i){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(i)return-1;r=t.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof e&&(e=f.from(e,n)),f.isBuffer(e))return 0===e.length?-1:b(t,e,r,n,i);if("number"==typeof e)return e&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):b(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,r,n,i){var o,u=1,a=t.length,f=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;u=2,a/=2,f/=2,r/=2}function s(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(i){var c=-1;for(o=r;o<a;o++)if(s(t,o)===s(e,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===f)return c*u}else-1!==c&&(o-=o-c),c=-1}else for(r+f>a&&(r=a-f),o=r;o>=0;o--){for(var h=!0,l=0;l<f;l++)if(s(t,o+l)!==s(e,l)){h=!1;break}if(h)return o}return-1}function w(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var u=0;u<n;++u){var a=parseInt(e.substr(2*u,2),16);if(isNaN(a))return u;t[r+u]=a}return u}function m(t,e,r,n){return N(K(e,t.length-r),t,r,n)}function E(t,e,r,n){return N(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(e),t,r,n)}function A(t,e,r,n){return E(t,e,r,n)}function S(t,e,r,n){return N(F(e),t,r,n)}function R(t,e,r,n){return N(function(t,e){for(var r,n,i,o=[],u=0;u<t.length&&!((e-=2)<0);++u)r=t.charCodeAt(u),n=r>>8,i=r%256,o.push(i),o.push(n);return o}(e,t.length-r),t,r,n)}function _(t,e,r){return 0===e&&r===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(e,r))}function T(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;i<r;){var o,u,a,f,s=t[i],c=null,h=s>239?4:s>223?3:s>191?2:1;if(i+h<=r)switch(h){case 1:s<128&&(c=s);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&s)<<6|63&o)>127&&(c=f);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(f=(15&s)<<12|(63&o)<<6|63&u)>2047&&(f<55296||f>57343)&&(c=f);break;case 4:o=t[i+1],u=t[i+2],a=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&a)&&(f=(15&s)<<18|(63&o)<<12|(63&u)<<6|63&a)>65535&&f<1114112&&(c=f)}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=h}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}e.Buffer=f,e.SlowBuffer=function(t){+t!=t&&(t=0);return f.alloc(+t)},e.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=u(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,e,r){return s(null,t,e,r)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,e,r){return function(t,e,r,n){return c(e),e<=0?a(t,e):void 0!==r?"string"==typeof n?a(t,e).fill(r,n):a(t,e).fill(r):a(t,e)}(null,t,e,r)},f.allocUnsafe=function(t){return h(null,t)},f.allocUnsafeSlow=function(t){return h(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,e){if(!f.isBuffer(t)||!f.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=f.allocUnsafe(e),i=0;for(r=0;r<t.length;++r){var u=t[r];if(!f.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,i),i+=u.length}return n},f.byteLength=d,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):g.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,e,r,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),e<0||r>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&e>=r)return 0;if(n>=i)return-1;if(e>=r)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),u=(r>>>=0)-(e>>>=0),a=Math.min(o,u),s=this.slice(n,i),c=t.slice(e,r),h=0;h<a;++h)if(s[h]!==c[h]){o=s[h],u=c[h];break}return o<u?-1:u<o?1:0},f.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},f.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},f.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},f.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-e;if((void 0===r||r>i)&&(r=i),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return w(this,t,e,r);case"utf8":case"utf-8":return m(this,t,e,r);case"ascii":return E(this,t,e,r);case"latin1":case"binary":return A(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,r);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function P(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(127&t[i]);return n}function B(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;i<r;++i)n+=String.fromCharCode(t[i]);return n}function O(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var i="",o=e;o<r;++o)i+=x(t[o]);return i}function U(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function L(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function M(t,e,r,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function C(t,e,r,n){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);i<o;++i)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function j(t,e,r,n){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);i<o;++i)t[r+i]=e>>>8*(n?i:3-i)&255}function I(t,e,r,n,i,o){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function Y(t,e,r,n,o){return o||I(t,0,r,4),i.write(t,e,r,n,23,4),r+4}function D(t,e,r,n,o){return o||I(t,0,r,8),i.write(t,e,r,n,52,8),r+8}f.prototype.slice=function(t,e){var r,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t),f.TYPED_ARRAY_SUPPORT)(r=this.subarray(t,e)).__proto__=f.prototype;else{var i=e-t;r=new f(i,void 0);for(var o=0;o<i;++o)r[o]=this[o+t]}return r},f.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||L(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||L(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},f.prototype.readUInt8=function(t,e){return e||L(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,e){return e||L(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,e){return e||L(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,e){return e||L(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,e){return e||L(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||L(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*e)),n},f.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||L(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},f.prototype.readInt8=function(t,e){return e||L(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,e){e||L(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt16BE=function(t,e){e||L(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},f.prototype.readInt32LE=function(t,e){return e||L(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,e){return e||L(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,e){return e||L(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,e){return e||L(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,e){return e||L(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,e){return e||L(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||M(this,t,e,r,Math.pow(2,8*r)-1,0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},f.prototype.writeUIntBE=function(t,e,r,n){(t=+t,e|=0,r|=0,n)||M(this,t,e,r,Math.pow(2,8*r)-1,0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},f.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},f.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):C(this,t,e,!0),e+2},f.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):C(this,t,e,!1),e+2},f.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):j(this,t,e,!0),e+4},f.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):j(this,t,e,!1),e+4},f.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);M(this,t,e,r,i-1,-i)}var o=0,u=1,a=0;for(this[e]=255&t;++o<r&&(u*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/u>>0)-a&255;return e+r},f.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var i=Math.pow(2,8*r-1);M(this,t,e,r,i-1,-i)}var o=r-1,u=1,a=0;for(this[e+o]=255&t;--o>=0&&(u*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/u>>0)-a&255;return e+r},f.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},f.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):C(this,t,e,!0),e+2},f.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):C(this,t,e,!1),e+2},f.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):j(this,t,e,!0),e+4},f.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||M(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):j(this,t,e,!1),e+4},f.prototype.writeFloatLE=function(t,e,r){return Y(this,t,e,!0,r)},f.prototype.writeFloatBE=function(t,e,r){return Y(this,t,e,!1,r)},f.prototype.writeDoubleLE=function(t,e,r){return D(this,t,e,!0,r)},f.prototype.writeDoubleBE=function(t,e,r){return D(this,t,e,!1,r)},f.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var i,o=n-r;if(this===t&&r<e&&e<n)for(i=o-1;i>=0;--i)t[i+e]=this[i+r];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+o),e);return o},f.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;var o;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var u=f.isBuffer(t)?t:K(new f(t,n).toString()),a=u.length;for(o=0;o<r-e;++o)this[o+e]=u[o%a]}return this};var k=/[^+\/0-9A-Za-z-_]/g;function x(t){return t<16?"0"+t.toString(16):t.toString(16)}function K(t,e){var r;e=e||1/0;for(var n=t.length,i=null,o=[],u=0;u<n;++u){if((r=t.charCodeAt(u))>55295&&r<57344){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(u+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;o.push(r)}else if(r<2048){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function F(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(k,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function N(t,e,r,n){for(var i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=t[i];return i}}).call(this,r(7))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";e.byteLength=function(t){var e=s(t),r=e[0],n=e[1];return 3*(r+n)/4-n},e.toByteArray=function(t){var e,r,n=s(t),u=n[0],a=n[1],f=new o(function(t,e,r){return 3*(e+r)/4-r}(0,u,a)),c=0,h=a>0?u-4:u;for(r=0;r<h;r+=4)e=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)],f[c++]=e>>16&255,f[c++]=e>>8&255,f[c++]=255&e;2===a&&(e=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4,f[c++]=255&e);1===a&&(e=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2,f[c++]=e>>8&255,f[c++]=255&e);return f},e.fromByteArray=function(t){for(var e,r=t.length,i=r%3,o=[],u=0,a=r-i;u<a;u+=16383)o.push(c(t,u,u+16383>a?a:u+16383));1===i?(e=t[r-1],o.push(n[e>>2]+n[e<<4&63]+"==")):2===i&&(e=(t[r-2]<<8)+t[r-1],o.push(n[e>>10]+n[e>>4&63]+n[e<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,f=u.length;a<f;++a)n[a]=u[a],i[u.charCodeAt(a)]=a;function s(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");return-1===r&&(r=e),[r,r===e?0:4-r%4]}function c(t,e,r){for(var i,o,u=[],a=e;a<r;a+=3)i=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),u.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return u.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,r,n,i){var o,u,a=8*i-n-1,f=(1<<a)-1,s=f>>1,c=-7,h=r?i-1:0,l=r?-1:1,p=t[e+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=a;c>0;o=256*o+t[e+h],h+=l,c-=8);for(u=o&(1<<-c)-1,o>>=-c,c+=n;c>0;u=256*u+t[e+h],h+=l,c-=8);if(0===o)o=1-s;else{if(o===f)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),o-=s}return(p?-1:1)*u*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var u,a,f,s=8*o-i-1,c=(1<<s)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),(e+=u+h>=1?l/f:l*Math.pow(2,1-h))*f>=2&&(u++,f/=2),u+h>=c?(a=0,u=c):u+h>=1?(a=(e*f-1)*Math.pow(2,i),u+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),u=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(u=u<<i|a,s+=i;s>0;t[r+p]=255&u,p+=d,u/=256,s-=8);t[r+p-d]|=128*g}},function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}}]);