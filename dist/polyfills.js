//noinspection JSUnresolvedVariable,UnterminatedStatementJS
module.exports = function(){
    !function(d,l){"use strict";window.onerror=function(e,r,t,n,s){if(!(-1<e.indexOf("Script error")||l.host.indexOf("www.autoscout24")<0)){var o,i,a,c,u,f={httpUri:l.href,httpReferrer:document.referrer,pagePath:(o=l.pathname,i=o.split("/"),i.includes("nl")||i.includes("fr")?i.slice(1,3).join("/"):i[1]),jsSrc:r||"",jsLine:t||"",jsColumn:n||"",browserOs:d.platform,browserUseragent:d.userAgent,errorStacktrace:s?s.stack:"",errorMessage:e||""},p=-1<l.host.indexOf("dev-www.")?"dev-":"";a="https://"+p+"js-error-logger.infinity.eu-west-1.s24cloud.net/log",c=JSON.stringify(f),(u=new XMLHttpRequest).open("POST",a,!0),u.setRequestHeader("Content-Type","application/json"),u.send(c)}}}(navigator,location);
    
    if (window.location.hash.indexOf('systemfonts') < 0) {
    !function(){if(!(0<=location.href.indexOf("web-font=no"))){var e=document.createElement("style");e.innerHTML=".font-loaded body{font-family:Source Sans Pro,sans-serif;}";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),n("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&subset=latin,latin-ext","Source Sans Pro",[400,600],"font-loaded"),0<=location.href.indexOf("web-font=opensans")&&(n("https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=latin,latin-ext","Open Sans",[400,600],"font-loaded"),e.innerHTML=".font-loaded body{font-family:Open Sans,sans-serif;}")}function n(o,i,e,n){var t,a=window.requestAnimationFrame||function(e){return setTimeout(e,50)},l=window.cancelAnimationFrame||clearTimeout,c=["sans-serif","serif","monospace"],s=[];try{if(Date.now()-localStorage["font-loaded-"+i]<864e5)return d(),void r();!function(t){var e=document.createElement("link");e.media="only x",e.rel="stylesheet",e.href=o,e.onload=function(){this.media="all",this.onload=null,function e(){if(!document.body)return a(e);t()}()};var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)}(function(){e.forEach(function(o){c.forEach(function(e){var t=document.createElement("div");t.innerHTML='<object style="display:block;position:absolute;top:0;right:0;bottom:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;" type="text/html"></object>MXWmxwi0123',t.style.cssText="z-index:-1;overflow:hidden;pointer-events:none;position:absolute;visibility:hidden;display:inline-block;line-height:1;font-size:16px;font-family:"+e+";font-weight:"+o,document.body.appendChild(t),s.push(t);var n=t.querySelector("object");n.data="about:blank",n.onload=function(){this.contentDocument.defaultView.addEventListener("resize",f),f()},t.style.fontFamily=i+","+e})})})}catch(e){r()}function r(){document.write('<link rel="stylesheet" href="'+o+'">'),document.documentElement.className+=" "+n}function d(){try{localStorage["font-loaded-"+i]=Date.now()}catch(e){console.warn("Cannot save fonts to localStorage")}}function f(){t&&(l(t),t=null),t=a(function(){for(var e=!0,t=0;t<s.length;t+=c.length)e=e&&s[t].clientWidth===s[t+1].clientWidth&&s[t+1].clientWidth===s[t+2].clientWidth&&s[t].clientHeight===s[t+1].clientHeight&&s[t+1].clientHeight===s[t+2].clientHeight;e&&(document.documentElement.className+=" "+n,d(),s.forEach(function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}),f=function(){})})}}}();
    } else {
        document.write('<style>body,[data-showcar-ui]{font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, "Segoe UI Symbol" !important; }</style>');
    }
    
    /*! (C) Andrea Giammarchi - @WebReflection - Mit Style License */
(function(e){"use strict";function t(){return c.createDocumentFragment()}function n(e){return c.createElement(e)}function r(e,t){if(!e)throw new Error("Failed to construct "+t+": 1 argument required, but only 0 present.")}function i(e){if(e.length===1)return s(e[0]);for(var n=t(),r=R.call(e),i=0;i<e.length;i++)n.appendChild(s(r[i]));return n}function s(e){return typeof e=="string"?c.createTextNode(e):e}for(var o,u,a,f,l,c=e.document,h=Object.prototype.hasOwnProperty,p=Object.defineProperty||function(e,t,n){return h.call(n,"value")?e[t]=n.value:(h.call(n,"get")&&e.__defineGetter__(t,n.get),h.call(n,"set")&&e.__defineSetter__(t,n.set)),e},d=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},v=function(e){if(!e)throw"SyntaxError";if(w.test(e))throw"InvalidCharacterError";return e},m=function(e){var t=typeof e.className=="undefined",n=t?e.getAttribute("class")||"":e.className,r=t||typeof n=="object",i=(r?t?n:n.baseVal:n).replace(b,"");i.length&&q.push.apply(this,i.split(w)),this._isSVG=r,this._=e},g={get:function(){return new m(this)},set:function(){}},y="dom4-tmp-".concat(Math.random()*+(new Date)).replace(".","-"),b=/^\s+|\s+$/g,w=/\s+/,E=" ",S="classList",x=function(t,n){if(this.contains(t))n||this.remove(t);else if(n===undefined||n)n=!0,this.add(t);return!!n},T=e.DocumentFragment&&DocumentFragment.prototype,N=e.Node,C=(N||Element).prototype,k=e.CharacterData||N,L=k&&k.prototype,A=e.DocumentType,O=A&&A.prototype,M=(e.Element||N||e.HTMLElement).prototype,_=e.HTMLSelectElement||n("select").constructor,D=_.prototype.remove,P=e.ShadowRoot,H=e.SVGElement,B=/ /g,j="\\ ",F=function(e){var t=e==="querySelectorAll";return function(n){var r,i,s,o,u,a,f=this.parentNode;if(f){for(s=this.getAttribute("id")||y,o=s===y?s:s.replace(B,j),a=n.split(","),i=0;i<a.length;i++)a[i]="#"+o+" "+a[i];n=a.join(",")}s===y&&this.setAttribute("id",s),u=(f||this)[e](n),s===y&&this.removeAttribute("id");if(t){i=u.length,r=new Array(i);while(i--)r[i]=u[i]}else r=u;return r}},I=function(e){"query"in e||(e.query=M.query),"queryAll"in e||(e.queryAll=M.queryAll)},q=["matches",M.matchesSelector||M.webkitMatchesSelector||M.khtmlMatchesSelector||M.mozMatchesSelector||M.msMatchesSelector||M.oMatchesSelector||function(t){var n=this.parentNode;return!!n&&-1<d.call(n.querySelectorAll(t),this)},"closest",function(t){var n=this,r;while((r=n&&n.matches)&&!n.matches(t))n=n.parentNode;return r?n:null},"prepend",function(){var t=this.firstChild,n=i(arguments);t?this.insertBefore(n,t):this.appendChild(n)},"append",function(){this.appendChild(i(arguments))},"before",function(){var t=this.parentNode;t&&t.insertBefore(i(arguments),this)},"after",function(){var t=this.parentNode,n=this.nextSibling,r=i(arguments);t&&(n?t.insertBefore(r,n):t.appendChild(r))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var t=this.parentNode;t&&t.replaceChild(i(arguments),this)},"remove",function(){var t=this.parentNode;t&&t.removeChild(this)},"query",F("querySelector"),"queryAll",F("querySelectorAll")],R=q.slice,U=q.length;U;U-=2){u=q[U-2],u in M||(M[u]=q[U-1]),u==="remove"&&(_.prototype[u]=function(){return 0<arguments.length?D.apply(this,arguments):M.remove.call(this)}),/^(?:before|after|replace|replaceWith|remove)$/.test(u)&&(k&&!(u in L)&&(L[u]=q[U-1]),A&&!(u in O)&&(O[u]=q[U-1]));if(/^(?:append|prepend)$/.test(u))if(T)u in T||(T[u]=q[U-1]);else try{t().constructor.prototype[u]=q[U-1]}catch(z){}}I(c);if(T)I(T);else try{I(t().constructor.prototype)}catch(z){}P&&I(P.prototype),n("a").matches("a")||(M[u]=function(e){return function(n){return e.call(this.parentNode?this:t().appendChild(this),n)}}(M[u])),m.prototype={length:0,add:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)||q.push.call(this,u);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(n){return U=e.call(this,u=v(n)),-1<U}}([].indexOf||function(e){U=this.length;while(U--&&this[U]!==e);return U}),item:function(t){return this[t]||null},remove:function(){for(var t=0,n;t<arguments.length;t++)n=arguments[t],this.contains(n)&&q.splice.call(this,U,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:x,toString:function W(){return q.join.call(this,E)}},H&&!(S in H.prototype)&&p(H.prototype,S,g),S in c.documentElement?(f=n("div")[S],f.add("a","b","a"),"a b"!=f&&(a=f.constructor.prototype,"add"in a||(a=e.TemporaryTokenList.prototype),l=function(e){return function(){var t=0;while(t<arguments.length)e.call(this,arguments[t++])}},a.add=l(a.add),a.remove=l(a.remove),a.toggle=x)):p(M,S,g),"contains"in C||p(C,"contains",{value:function(e){while(e&&e!==this)e=e.parentNode;return this===e}}),"head"in c||p(c,"head",{get:function(){return o||(o=c.getElementsByTagName("head")[0])}}),function(){for(var t,n=e.requestAnimationFrame,r=e.cancelAnimationFrame,i=["o","ms","moz","webkit"],s=i.length;!r&&s--;)n=n||e[i[s]+"RequestAnimationFrame"],r=e[i[s]+"CancelAnimationFrame"]||e[i[s]+"CancelRequestAnimationFrame"];r||(n?(t=n,n=function(e){var n=!0;return t(function(){n&&e.apply(this,arguments)}),function(){n=!1}},r=function(e){e()}):(n=function(e){return setTimeout(e,15,15)},r=function(e){clearTimeout(e)})),e.requestAnimationFrame=n,e.cancelAnimationFrame=r}();try{new e.CustomEvent("?")}catch(z){e.CustomEvent=function(e,t){function n(n,i){var s=c.createEvent(e);if(typeof n!="string")throw new Error("An event name must be provided");return e=="Event"&&(s.initCustomEvent=r),i==null&&(i=t),s.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),s}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}try{new Event("_")}catch(z){z=function(e){function t(e,t){r(arguments.length,"Event");var n=c.createEvent("Event");return t||(t={}),n.initEvent(e,!!t.bubbles,!!t.cancelable),n}return t.prototype=e.prototype,t}(e.Event||function(){}),p(e,"Event",{value:z}),Event!==z&&(Event=z)}try{new KeyboardEvent("_",{})}catch(z){z=function(t){function a(e){for(var t=[],n=["ctrlKey","Control","shiftKey","Shift","altKey","Alt","metaKey","Meta","altGraphKey","AltGraph"],r=0;r<n.length;r+=2)e[n[r]]&&t.push(n[r+1]);return t.join(" ")}function f(e,t){for(var n in t)t.hasOwnProperty(n)&&!t.hasOwnProperty.call(e,n)&&(e[n]=t[n]);return e}function l(e,t,n){try{t[e]=n[e]}catch(r){}}function h(t,o){r(arguments.length,"KeyboardEvent"),o=f(o||{},i);var u=c.createEvent(s),h=o.ctrlKey,p=o.shiftKey,d=o.altKey,v=o.metaKey,m=o.altGraphKey,g=n>3?a(o):null,y=String(o.key),b=String(o.char),w=o.location,E=o.keyCode||(o.keyCode=y)&&y.charCodeAt(0)||0,S=o.charCode||(o.charCode=b)&&b.charCodeAt(0)||0,x=o.bubbles,T=o.cancelable,N=o.repeat,C=o.locale,k=o.view||e,L;o.which||(o.which=o.keyCode);if("initKeyEvent"in u)u.initKeyEvent(t,x,T,k,h,d,p,v,E,S);else if(0<n&&"initKeyboardEvent"in u){L=[t,x,T,k];switch(n){case 1:L.push(y,w,h,p,d,v,m);break;case 2:L.push(h,d,p,v,E,S);break;case 3:L.push(y,w,h,d,p,v,m);break;case 4:L.push(y,w,g,N,C);break;default:L.push(char,y,w,g,N,C)}u.initKeyboardEvent.apply(u,L)}else u.initEvent(t,x,T);for(y in u)i.hasOwnProperty(y)&&u[y]!==o[y]&&l(y,u,o);return u}var n=0,i={"char":"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,altGraphKey:!1,repeat:!1,locale:navigator.language,detail:0,bubbles:!1,cancelable:!1,keyCode:0,charCode:0,which:0},s;try{var o=c.createEvent("KeyboardEvent");o.initKeyboardEvent("keyup",!1,!1,e,"+",3,!0,!1,!0,!1,!1),n=(o.keyIdentifier||o.key)=="+"&&(o.keyLocation||o.location)==3&&(o.ctrlKey?o.altKey?1:3:o.shiftKey?2:4)||9}catch(u){}return s=0<n?"KeyboardEvent":"Event",h.prototype=t.prototype,h}(e.KeyboardEvent||function(){}),p(e,"KeyboardEvent",{value:z}),KeyboardEvent!==z&&(KeyboardEvent=z)}try{new MouseEvent("_",{})}catch(z){z=function(t){function n(t,n){r(arguments.length,"MouseEvent");var i=c.createEvent("MouseEvent");return n||(n={}),i.initMouseEvent(t,!!n.bubbles,!!n.cancelable,n.view||e,n.detail||1,n.screenX||0,n.screenY||0,n.clientX||0,n.clientY||0,!!n.ctrlKey,!!n.altKey,!!n.shiftKey,!!n.metaKey,n.button||0,n.relatedTarget||null),i}return n.prototype=t.prototype,n}(e.MouseEvent||function(){}),p(e,"MouseEvent",{value:z}),MouseEvent!==z&&(MouseEvent=z)}})(window),function(e){"use strict";function n(){}function r(e,t,n){function i(e){i.once&&(e.currentTarget.removeEventListener(e.type,t,i),i.removed=!0),i.passive&&(e.preventDefault=r.preventDefault),typeof i.callback=="function"?i.callback.call(this,e):i.callback&&i.callback.handleEvent(e),i.passive&&delete e.preventDefault}return i.type=e,i.callback=t,i.capture=!!n.capture,i.passive=!!n.passive,i.once=!!n.once,i.removed=!1,i}var t=e.WeakMap||function(){function s(e,i,s){n=s,t=!1,r=undefined,e.dispatchEvent(i)}function o(e){this.value=e}function u(){e++,this.__ce__=new i("@DOMMap:"+e+Math.random())}var e=0,t=!1,n=!1,r;return o.prototype.handleEvent=function(i){t=!0,n?i.currentTarget.removeEventListener(i.type,this,!1):r=this.value},u.prototype={constructor:u,"delete":function(n){return s(n,this.__ce__,!0),t},get:function(t){s(t,this.__ce__,!1);var n=r;return r=undefined,n},has:function(n){return s(n,this.__ce__,!1),t},set:function(t,n){return s(t,this.__ce__,!0),t.addEventListener(this.__ce__.type,new o(n),!1),this}},u}();n.prototype=(Object.create||Object)(null),r.preventDefault=function(){};var i=e.CustomEvent,s=Object.prototype.hasOwnProperty,o=e.dispatchEvent,u=e.addEventListener,a=e.removeEventListener,f=0,l=function(){f++},c=[].indexOf||function(t){var n=this.length;while(n--)if(this[n]===t)break;return n},h=function(e){return"".concat(e.capture?"1":"0",e.passive?"1":"0",e.once?"1":"0")},p,d;try{u("_",l,{once:!0}),o(new i("_")),o(new i("_")),a("_",l,{once:!0})}catch(v){}f!==1&&function(){function s(e){return function(s,o,u){if(u&&typeof u!="boolean"){var a=i.get(this),f=h(u),l,p,d;a||i.set(this,a=new n),s in a||(a[s]={handler:[],wrap:[]}),p=a[s],l=c.call(p.handler,o),l<0?(l=p.handler.push(o)-1,p.wrap[l]=d=new n):d=p.wrap[l],f in d||(d[f]=r(s,o,u),e.call(this,s,d[f],d[f].capture))}else e.call(this,s,o,u)}}function o(e){return function(n,r,s){if(s&&typeof s!="boolean"){var o=i.get(this),u,a,f,l;if(o&&n in o){f=o[n],a=c.call(f.handler,r);if(-1<a){u=h(s),l=f.wrap[a];if(u in l){e.call(this,n,l[u],l[u].capture),delete l[u];for(u in l)return;f.handler.splice(a,1),f.wrap.splice(a,1),f.handler.length===0&&delete o[n]}}}}else e.call(this,n,r,s)}}var i=new t;p=function(e){if(!e)return;var t=e.prototype;t.addEventListener=s(t.addEventListener),t.removeEventListener=o(t.removeEventListener)},e.EventTarget?p(EventTarget):(p(e.Text),p(e.Element||e.HTMLElement),p(e.HTMLDocument),p(e.Window||{prototype:e}),p(e.XMLHttpRequest))}()}(self);
    /*! (C) WebReflection Mit Style License */
(function(e,t,n,r){"use strict";function rt(e,t){for(var n=0,r=e.length;n<r;n++)vt(e[n],t)}function it(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],nt(r,b[ot(r)])}function st(e){return function(t){j(t)&&(vt(t,e),rt(t.querySelectorAll(w),e))}}function ot(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=S.call(y,t?v+t.toUpperCase():d+n);return t&&-1<r&&!ut(n,t)?-1:r}function ut(e,t){return-1<w.indexOf(e+'[is="'+t+'"]')}function at(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;Q&&(!i||i===t)&&t.attributeChangedCallback&&r!=="style"&&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[a]?null:e.prevValue,n===e[l]?null:e.newValue)}function ft(e){var t=st(e);return function(e){X.push(t,e.target)}}function lt(e){K&&(K=!1,e.currentTarget.removeEventListener(h,lt)),rt((e.target||t).querySelectorAll(w),e.detail===o?o:s),B&&pt()}function ct(e,t){var n=this;q.call(n,e,t),G.call(n,{target:n})}function ht(e,t){D(e,t),et?et.observe(e,z):(J&&(e.setAttribute=ct,e[i]=Z(e),e.addEventListener(p,G)),e.addEventListener(c,at)),e.createdCallback&&Q&&(e.created=!0,e.createdCallback(),e.created=!1)}function pt(){for(var e,t=0,n=F.length;t<n;t++)e=F[t],E.contains(e)||(n--,F.splice(t--,1),vt(e,o))}function dt(e){throw new Error("A "+e+" type is already registered")}function vt(e,t){var n,r=ot(e);-1<r&&(tt(e,b[r]),r=0,t===s&&!e[s]?(e[o]=!1,e[s]=!0,r=1,B&&S.call(F,e)<0&&F.push(e)):t===o&&!e[o]&&(e[s]=!1,e[o]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var i="__"+r+(Math.random()*1e5>>0),s="attached",o="detached",u="extends",a="ADDITION",f="MODIFICATION",l="REMOVAL",c="DOMAttrModified",h="DOMContentLoaded",p="DOMSubtreeModified",d="<",v="=",m=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,g=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],y=[],b=[],w="",E=t.documentElement,S=y.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},x=n.prototype,T=x.hasOwnProperty,N=x.isPrototypeOf,C=n.defineProperty,k=n.getOwnPropertyDescriptor,L=n.getOwnPropertyNames,A=n.getPrototypeOf,O=n.setPrototypeOf,M=!!n.__proto__,_=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},D=O||(M?function(e,t){return e.__proto__=t,e}:L&&k?function(){function e(e,t){for(var n,r=L(t),i=0,s=r.length;i<s;i++)n=r[i],T.call(e,n)||C(e,n,k(t,n))}return function(t,n){do e(t,n);while((n=A(n))&&!N.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),P=e.MutationObserver||e.WebKitMutationObserver,H=(e.HTMLElement||e.Element||e.Node).prototype,B=!N.call(H,E),j=B?function(e){return e.nodeType===1}:function(e){return N.call(H,e)},F=B&&[],I=H.cloneNode,q=H.setAttribute,R=H.removeAttribute,U=t.createElement,z=P&&{attributes:!0,characterData:!0,attributeOldValue:!0},W=P||function(e){J=!1,E.removeEventListener(c,W)},X,V=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},$=!1,J=!0,K=!0,Q=!0,G,Y,Z,et,tt,nt;O||M?(tt=function(e,t){N.call(t,e)||ht(e,t)},nt=ht):(tt=function(e,t){e[i]||(e[i]=n(!0),ht(e,t))},nt=tt),B?(J=!1,function(){var e=k(H,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(c,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[l]=t.attrChange=2,R.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(c,{bubbles:!0});q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[f]=i.attrChange=1:i[a]=i.attrChange=0,this.dispatchEvent(i)},s=function(e){var t=e.currentTarget,n=t[i],r=e.propertyName,s;n.hasOwnProperty(r)&&(n=n[r],s=new CustomEvent(c,{bubbles:!0}),s.attrName=n.name,s.prevValue=n.value||null,s.newValue=n.value=t[r]||null,s.prevValue==null?s[a]=s.attrChange=0:s[f]=s.attrChange=1,t.dispatchEvent(s))};e.value=function(e,o,u){e===c&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[i]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",s)),t.call(this,e,o,u)},C(H,"addEventListener",e)}()):P||(E.addEventListener(c,W),E.setAttribute(i,1),E.removeAttribute(i),J&&(G=function(e){var t=this,n,r,s;if(t===e.target){n=t[i],t[i]=r=Z(t);for(s in r){if(!(s in n))return Y(0,t,s,n[s],r[s],a);if(r[s]!==n[s])return Y(1,t,s,n[s],r[s],f)}for(s in n)if(!(s in r))return Y(2,t,s,n[s],r[s],l)}},Y=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,at(o)},Z=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(n,r){c=n.toUpperCase(),$||($=!0,P?(et=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new P(function(r){for(var i,s,o,u=0,a=r.length;u<a;u++)i=r[u],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,Q&&s.attributeChangedCallback&&i.attributeName!=="style"&&(o=s.getAttribute(i.attributeName),o!==i.oldValue&&s.attributeChangedCallback(i.attributeName,i.oldValue,o)))})}(st(s),st(o)),et.observe(t,{childList:!0,subtree:!0})):(X=[],V(function E(){while(X.length)X.shift().call(null,X.shift());V(E)}),t.addEventListener("DOMNodeInserted",ft(s)),t.addEventListener("DOMNodeRemoved",ft(o))),t.addEventListener(h,lt),t.addEventListener("readystatechange",lt),t.createElement=function(e,n){var r=U.apply(t,arguments),i=""+e,s=S.call(y,(n?v:d)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=ut(i.toUpperCase(),n))),Q=!t.createElement.innerHTMLHelper,o&&nt(r,b[s]),r},H.cloneNode=function(e){var t=I.call(this,!!e),n=ot(t);return-1<n&&nt(t,b[n]),e&&it(t.querySelectorAll(w)),t}),-2<S.call(y,v+c)+S.call(y,d+c)&&dt(n);if(!m.test(c)||-1<S.call(g,c))throw new Error("The type "+n+" is invalid");var i=function(){return f?t.createElement(l,c):t.createElement(l)},a=r||x,f=T.call(a,u),l=f?r[u].toUpperCase():c,c,p;return f&&-1<S.call(y,d+l)&&dt(l),p=y.push((f?v:d)+c)-1,w=w.concat(w.length?",":"",f?l+'[is="'+n.toLowerCase()+'"]':l),i.prototype=b[p]=T.call(a,"prototype")?a.prototype:_(H),rt(t.querySelectorAll(w),s),i}})(window,document,Object,"registerElement");
    Array.from||(Array.from=function(r){"use strict";return[].slice.call(r)}),Array.of||(Array.of=function(){return Array.prototype.slice.call(arguments)}),Array.prototype.includes||(Array.prototype.includes=function(r){"use strict";if(null==this)throw new TypeError("Array.prototype.includes called on null or undefined");var t=Object(this),e=parseInt(t.length,10)||0;if(0===e)return!1;var n,o,i=parseInt(arguments[1],10)||0;for(0<=i?n=i:(n=e+i)<0&&(n=0);n<e;){if(r===(o=t[n])||r!=r&&o!=o)return!0;n++}return!1}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),e=t.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var n=arguments[1],o=0;o<e;){var i=t[o];if(r.call(n,i,o,t))return i;o++}}});
    String.prototype.includes||(String.prototype.includes=function(t,n){"use strict";return"number"!=typeof n&&(n=0),!(n+t.length>this.length)&&-1!==this.indexOf(t,n)}),String.prototype.startsWith||(String.prototype.startsWith=function(t,n){return this.substr(!n||n<0?0:+n,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,n){return(void 0===n||n>this.length)&&(n=this.length),this.substring(n-t.length,n)===t});
    "function"!=typeof Object.assign&&(Object.assign=function(n){"use strict";if(null==n)throw new TypeError("Cannot convert undefined or null to object");n=Object(n);for(var t=1;t<arguments.length;t++){var r=arguments[t];if(null!=r)for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n});
    !function(){function l(e){global.setImmediate?setImmediate(e):global.importScripts?setTimeout(e):(n[++t]=e,global.postMessage(t,"*"))}function s(e){"use strict";function t(e,t,n,r){if(2==c)return r();if("object"!=typeof u&&"function"!=typeof u||"function"!=typeof e)r();else try{var o=0;e.call(u,function(e){o++||(u=e,t())},function(e){o++||(u=e,n())})}catch(e){u=e,n()}}function n(){var e;try{e=u&&u.then}catch(e){return u=e,c=2,n()}t(e,function(){c=1,n()},function(){c=2,n()},function(){try{1==c&&"function"==typeof r?u=r(u):2==c&&"function"==typeof o&&(u=o(u),c=1)}catch(e){return u=e,a()}u==i?(u=TypeError(),a()):t(e,function(){a(3)},a,function(){a(1==c&&3)})})}if("function"!=typeof e&&null!=e)throw TypeError();if("object"!=typeof this||this&&this.then)throw TypeError();var r,o,i=this,c=0,u=0,f=[];(i.promise=i).resolve=function(e){return r=i.fn,o=i.er,c||(u=e,c=1,l(n)),i},i.reject=function(e){return r=i.fn,o=i.er,c||(u=e,c=2,l(n)),i},i._d=1,i.then=function(e,t){if(1!=this._d)throw TypeError();var n=new s;return n.fn=e,n.er=t,3==c?n.resolve(u):4==c?n.reject(u):f.push(n),n},i.catch=function(e){return i.then(null,e)};var a=function(e){c=e||4,f.map(function(e){3==c&&e.resolve(u)||e.reject(u)})};try{"function"==typeof e&&e(i.resolve,i.reject)}catch(e){i.reject(e)}return i}global=this;var t=1,n={},r=!1;global.setImmediate||global.addEventListener("message",function(e){if(e.source==global)if(r)l(n[e.data]);else{r=!0;try{n[e.data]()}catch(e){}delete n[e.data],r=!1}}),s.resolve=function(t){if(1!=this._d)throw TypeError();return t instanceof s?t:new s(function(e){e(t)})},s.reject=function(n){if(1!=this._d)throw TypeError();return new s(function(e,t){t(n)})},s.all=function(r){if(1!=this._d)throw TypeError();if(!(r instanceof Array))return s.reject(TypeError());var o=new s;return function n(e,t){return t?o.resolve(t):e?o.reject(e):(0==r.reduce(function(e,t){return t&&t.then?e+1:e},0)&&o.resolve(r),void r.map(function(e,t){e&&e.then&&e.then(function(e){return r[t]=e,n(),e},n)}))}(),o},s.race=function(r){if(1!=this._d)throw TypeError();if(!(r instanceof Array))return s.reject(TypeError());if(0==r.length)return new s;var o=new s;return function n(e,t){return t?o.resolve(t):e?o.reject(e):(0==r.reduce(function(e,t){return t&&t.then?e+1:e},0)&&o.resolve(r),void r.map(function(e,t){e&&e.then&&e.then(function(e){n(null,e)},n)}))}(),o},s._d=1,"undefined"!=typeof module?module.exports=s:global.Promise=global.Promise||s}();
    !function(t){"use strict";if(!t.fetch){var e="URLSearchParams"in t,r="Symbol"in t&&"iterator"in Symbol,s="FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),o="FormData"in t,n="ArrayBuffer"in t;if(n)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=function(t){return t&&DataView.prototype.isPrototypeOf(t)},h=ArrayBuffer.isView||function(t){return t&&-1<i.indexOf(Object.prototype.toString.call(t))};c.prototype.append=function(t,e){t=d(t),e=y(e);var r=this.map[t];r||(r=[],this.map[t]=r),r.push(e)},c.prototype.delete=function(t){delete this.map[d(t)]},c.prototype.get=function(t){var e=this.map[d(t)];return e?e[0]:null},c.prototype.getAll=function(t){return this.map[d(t)]||[]},c.prototype.has=function(t){return this.map.hasOwnProperty(d(t))},c.prototype.set=function(t,e){this.map[d(t)]=[y(e)]},c.prototype.forEach=function(r,o){Object.getOwnPropertyNames(this.map).forEach(function(e){this.map[e].forEach(function(t){r.call(o,t,e,this)},this)},this)},c.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),p(r)},c.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),p(e)},c.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),p(r)},r&&(c.prototype[Symbol.iterator]=c.prototype.entries);var u=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},v.call(_.prototype),v.call(B.prototype),B.prototype.clone=function(){return new B(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},B.error=function(){var t=new B(null,{status:0,statusText:""});return t.type="error",t};var f=[301,302,303,307,308];B.redirect=function(t,e){if(-1===f.indexOf(e))throw new RangeError("Invalid status code");return new B(null,{status:e,headers:{location:t}})},t.Headers=c,t.Request=_,t.Response=B,t.fetch=function(r,n){return new Promise(function(o,t){var e=new _(r,n),i=new XMLHttpRequest;i.onload=function(){var t,n,e={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",n=new c,t.split("\r\n").forEach(function(t){var e=t.split(":"),r=e.shift().trim();if(r){var o=e.join(":").trim();n.append(r,o)}}),n)};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;o(new B(r,e))},i.onerror=function(){t(new TypeError("Network request failed"))},i.ontimeout=function(){t(new TypeError("Network request failed"))},i.open(e.method,e.url,!0),"include"===e.credentials&&(i.withCredentials=!0),"responseType"in i&&s&&(i.responseType="blob"),e.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===e._bodyInit?null:e._bodyInit)})},t.fetch.polyfill=!0}function d(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function y(t){return"string"!=typeof t&&(t=String(t)),t}function p(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach(function(t,e){this.append(e,t)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function l(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function b(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function m(t){var e=new FileReader,r=b(e);return e.readAsArrayBuffer(t),r}function w(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t)if("string"==typeof t)this._bodyText=t;else if(s&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(o&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(e&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(n&&s&&a(t))this._bodyArrayBuffer=w(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!n||!ArrayBuffer.prototype.isPrototypeOf(t)&&!h(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=w(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):e&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=l(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var t,e,r,o=l(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=b(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}function _(t,e){var r,o,n=(e=e||{}).body;if("string"==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new c(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new c(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),-1<u.indexOf(o)?o:r),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function A(t){var n=new FormData;return t.trim().split("&").forEach(function(t){if(t){var e=t.split("="),r=e.shift().replace(/\+/g," "),o=e.join("=").replace(/\+/g," ");n.append(decodeURIComponent(r),decodeURIComponent(o))}}),n}function B(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new c(e.headers),this.url=e.url||"",this._initBody(t)}}("undefined"!=typeof self?self:this);
    !function(r){"use strict";var t,n=r.URLSearchParams&&r.URLSearchParams.prototype.get?r.URLSearchParams:null,e=n&&"a=1"===new n({a:1}).toString(),o=n&&"+"===new n("s=%2B").get("s"),a="__URLSearchParams__",i=!n||((t=new n).append("s"," &"),"s=+%26"===t.toString()),s=h.prototype,f=!(!r.Symbol||!r.Symbol.iterator);if(!(n&&e&&o&&i)){s.append=function(t,n){y(this[a],t,n)},s.delete=function(t){delete this[a][t]},s.get=function(t){var n=this[a];return t in n?n[t][0]:null},s.getAll=function(t){var n=this[a];return t in n?n[t].slice(0):[]},s.has=function(t){return t in this[a]},s.set=function(t,n){this[a][t]=[""+n]},s.toString=function(){var t,n,r,e,o=this[a],i=[];for(n in o)for(r=l(n),t=0,e=o[n];t<e.length;t++)i.push(r+"="+l(e[t]));return i.join("&")};var u=!!o&&n&&!e&&r.Proxy;Object.defineProperty(r,"URLSearchParams",{value:u?new Proxy(n,{construct:function(t,n){return new t(new h(n[0]).toString())}}):h});var c=r.URLSearchParams.prototype;c.polyfill=!0,c.forEach=c.forEach||function(r,e){var t=v(this.toString());Object.getOwnPropertyNames(t).forEach(function(n){t[n].forEach(function(t){r.call(e,t,n,this)},this)},this)},c.sort=c.sort||function(){var t,n,r,e=v(this.toString()),o=[];for(t in e)o.push(t);for(o.sort(),n=0;n<o.length;n++)this.delete(o[n]);for(n=0;n<o.length;n++){var i=o[n],a=e[i];for(r=0;r<a.length;r++)this.append(i,a[r])}},c.keys=c.keys||function(){var r=[];return this.forEach(function(t,n){r.push(n)}),g(r)},c.values=c.values||function(){var n=[];return this.forEach(function(t){n.push(t)}),g(n)},c.entries=c.entries||function(){var r=[];return this.forEach(function(t,n){r.push([n,t])}),g(r)},f&&(c[r.Symbol.iterator]=c[r.Symbol.iterator]||c.entries)}function h(t){((t=t||"")instanceof URLSearchParams||t instanceof h)&&(t=t.toString()),this[a]=v(t)}function l(t){var n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g,function(t){return n[t]})}function p(t){return t.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,function(t){return decodeURIComponent(t)})}function g(n){var t={next:function(){var t=n.shift();return{done:void 0===t,value:t}}};return f&&(t[r.Symbol.iterator]=function(){return t}),t}function v(t){var n={};if("object"==typeof t)for(var r in t)t.hasOwnProperty(r)&&y(n,r,t[r]);else{0===t.indexOf("?")&&(t=t.slice(1));for(var e=t.split("&"),o=0;o<e.length;o++){var i=e[o],a=i.indexOf("=");-1<a?y(n,p(i.slice(0,a)),p(i.slice(a+1))):i&&y(n,p(i),"")}}return n}function y(t,n,r){var e="string"==typeof r?r:null!=r&&"function"==typeof r.toString?r.toString():JSON.stringify(r);n in t?t[n].push(e):t[n]=[e]}}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this);
    
    (function(w) {
        if(!w.__proto__){l('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')}
        if(!w.HTMLPictureElement){l('https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js',1)}
        function l(url,a){document.write('<script '+(a&&'async')+' src="'+url+'"></'+'script>')}
    }(window))
}
