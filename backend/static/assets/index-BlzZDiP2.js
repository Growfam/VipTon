(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function fc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zs={exports:{}},ii={},Js={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=Symbol.for("react.element"),pc=Symbol.for("react.portal"),hc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),gc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),xc=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),kc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),Vo=Symbol.iterator;function Ec(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var qs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bs=Object.assign,ea={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ea,this.updater=n||qs}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ta(){}ta.prototype=sn.prototype;function Hl(e,t,n){this.props=e,this.context=t,this.refs=ea,this.updater=n||qs}var Wl=Hl.prototype=new ta;Wl.constructor=Hl;bs(Wl,sn.prototype);Wl.isPureReactComponent=!0;var $o=Array.isArray,na=Object.prototype.hasOwnProperty,Ql={current:null},ra={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)na.call(t,r)&&!ra.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:qn,type:e,key:l,ref:o,props:i,_owner:Ql.current}}function Nc(e,t){return{$$typeof:qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===qn}function Cc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Bo=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cc(""+e.key):t.toString(36)}function Sr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qn:case pc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ni(o,0):r,$o(i)?(n="",e!=null&&(n=e.replace(Bo,"$&/")+"/"),Sr(i,t,n,"",function(c){return c})):i!=null&&(Kl(i)&&(i=Nc(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Bo,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",$o(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Ni(l,s);o+=Sr(l,t,n,a,i)}else if(a=Ec(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Ni(l,s++),o+=Sr(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function lr(e,t,n){if(e==null)return e;var r=[],i=0;return Sr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function _c(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},Er={transition:null},Tc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:Er,ReactCurrentOwner:Ql};function la(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:lr,forEach:function(e,t,n){lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lr(e,function(){t++}),t},toArray:function(e){return lr(e,function(t){return t})||[]},only:function(e){if(!Kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=sn;P.Fragment=hc;P.Profiler=mc;P.PureComponent=Hl;P.StrictMode=vc;P.Suspense=wc;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tc;P.act=la;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bs({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ql.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)na.call(t,a)&&!ra.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:qn,type:e.type,key:i,ref:l,props:r,_owner:o}};P.createContext=function(e){return e={$$typeof:yc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gc,_context:e},e.Consumer=e};P.createElement=ia;P.createFactory=function(e){var t=ia.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:xc,render:e}};P.isValidElement=Kl;P.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:_c}};P.memo=function(e,t){return{$$typeof:kc,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=Er.transition;Er.transition={};try{e()}finally{Er.transition=t}};P.unstable_act=la;P.useCallback=function(e,t){return ae.current.useCallback(e,t)};P.useContext=function(e){return ae.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};P.useEffect=function(e,t){return ae.current.useEffect(e,t)};P.useId=function(){return ae.current.useId()};P.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return ae.current.useMemo(e,t)};P.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};P.useRef=function(e){return ae.current.useRef(e)};P.useState=function(e){return ae.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return ae.current.useTransition()};P.version="18.3.1";Js.exports=P;var b=Js.exports;const jc=fc(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=b,Pc=Symbol.for("react.element"),Fc=Symbol.for("react.fragment"),Lc=Object.prototype.hasOwnProperty,Dc=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Lc.call(t,r)&&!Rc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Pc,type:e,key:l,ref:o,props:i,_owner:Dc.current}}ii.Fragment=Fc;ii.jsx=oa;ii.jsxs=oa;Zs.exports=ii;var d=Zs.exports,Zi={},sa={exports:{}},xe={},aa={exports:{}},ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,j){var z=N.length;N.push(j);e:for(;0<z;){var W=z-1>>>1,G=N[W];if(0<i(G,j))N[W]=j,N[z]=G,z=W;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var j=N[0],z=N.pop();if(z!==j){N[0]=z;e:for(var W=0,G=N.length,rr=G>>>1;W<rr;){var yt=2*(W+1)-1,Ei=N[yt],xt=yt+1,ir=N[xt];if(0>i(Ei,z))xt<G&&0>i(ir,Ei)?(N[W]=ir,N[xt]=z,W=xt):(N[W]=Ei,N[yt]=z,W=yt);else if(xt<G&&0>i(ir,z))N[W]=ir,N[xt]=z,W=xt;else break e}}return j}function i(N,j){var z=N.sortIndex-j.sortIndex;return z!==0?z:N.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],g=1,m=null,p=3,v=!1,y=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var j=n(c);j!==null;){if(j.callback===null)r(c);else if(j.startTime<=N)r(c),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(c)}}function x(N){if(k=!1,h(N),!y)if(n(a)!==null)y=!0,ki(E);else{var j=n(c);j!==null&&Si(x,j.startTime-N)}}function E(N,j){y=!1,k&&(k=!1,f(T),T=-1),v=!0;var z=p;try{for(h(j),m=n(a);m!==null&&(!(m.expirationTime>j)||N&&!Te());){var W=m.callback;if(typeof W=="function"){m.callback=null,p=m.priorityLevel;var G=W(m.expirationTime<=j);j=e.unstable_now(),typeof G=="function"?m.callback=G:m===n(a)&&r(a),h(j)}else r(a);m=n(a)}if(m!==null)var rr=!0;else{var yt=n(c);yt!==null&&Si(x,yt.startTime-j),rr=!1}return rr}finally{m=null,p=z,v=!1}}var C=!1,_=null,T=-1,H=5,F=-1;function Te(){return!(e.unstable_now()-F<H)}function cn(){if(_!==null){var N=e.unstable_now();F=N;var j=!0;try{j=_(!0,N)}finally{j?dn():(C=!1,_=null)}}else C=!1}var dn;if(typeof u=="function")dn=function(){u(cn)};else if(typeof MessageChannel<"u"){var Uo=new MessageChannel,dc=Uo.port2;Uo.port1.onmessage=cn,dn=function(){dc.postMessage(null)}}else dn=function(){D(cn,0)};function ki(N){_=N,C||(C=!0,dn())}function Si(N,j){T=D(function(){N(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ki(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var j=3;break;default:j=p}var z=p;p=j;try{return N()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,j){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var z=p;p=N;try{return j()}finally{p=z}},e.unstable_scheduleCallback=function(N,j,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,N){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=z+G,N={id:g++,callback:j,priorityLevel:N,startTime:z,expirationTime:G,sortIndex:-1},z>W?(N.sortIndex=z,t(c,N),n(a)===null&&N===n(c)&&(k?(f(T),T=-1):k=!0,Si(x,z-W))):(N.sortIndex=G,t(a,N),y||v||(y=!0,ki(E))),N},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(N){var j=p;return function(){var z=p;p=j;try{return N.apply(this,arguments)}finally{p=z}}}})(ua);aa.exports=ua;var Ic=aa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=b,ye=Ic;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ca=new Set,In={};function Lt(e,t){bt(e,t),bt(e+"Capture",t)}function bt(e,t){for(In[e]=t,e=0;e<t.length;e++)ca.add(t[e])}var Ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ji=Object.prototype.hasOwnProperty,Mc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ho={},Wo={};function Ac(e){return Ji.call(Wo,e)?!0:Ji.call(Ho,e)?!1:Mc.test(e)?Wo[e]=!0:(Ho[e]=!0,!1)}function Uc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vc(e,t,n,r){if(t===null||typeof t>"u"||Uc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yl=/[\-:]([a-z])/g;function Xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yl,Xl);te[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yl,Xl);te[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yl,Xl);te[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Gl(e,t,n,r){var i=te.hasOwnProperty(t)?te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vc(t,n,i,r)&&(n=null),r||i===null?Ac(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),It=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Zl=Symbol.for("react.strict_mode"),qi=Symbol.for("react.profiler"),da=Symbol.for("react.provider"),fa=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),bi=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),ql=Symbol.for("react.memo"),be=Symbol.for("react.lazy"),pa=Symbol.for("react.offscreen"),Qo=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=Qo&&e[Qo]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Ci;function wn(e){if(Ci===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ci=t&&t[1]||""}return`
`+Ci+e}var _i=!1;function Ti(e,t){if(!e||_i)return"";_i=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{_i=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function $c(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case It:return"Portal";case qi:return"Profiler";case Zl:return"StrictMode";case bi:return"Suspense";case el:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fa:return(e.displayName||"Context")+".Consumer";case da:return(e._context.displayName||"Context")+".Provider";case Jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ql:return t=e.displayName||null,t!==null?t:tl(e.type)||"Memo";case be:t=e._payload,e=e._init;try{return tl(e(t))}catch{}}return null}function Bc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tl(t);case 8:return t===Zl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ha(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=ha(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sr(e){e._valueTracker||(e._valueTracker=Hc(e))}function va(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ha(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nl(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ko(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ma(e,t){t=t.checked,t!=null&&Gl(e,"checked",t,!1)}function rl(e,t){ma(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?il(e,t.type,n):t.hasOwnProperty("defaultValue")&&il(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function il(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(kn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function ga(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ya(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ya(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,xa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Wc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function wa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function ka(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Qc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sl(e,t){if(t){if(Qc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function bl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,Xt=null,Gt=null;function Zo(e){if(e=tr(e)){if(typeof cl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ui(t),cl(e.stateNode,e.type,t))}}function Sa(e){Xt?Gt?Gt.push(e):Gt=[e]:Xt=e}function Ea(){if(Xt){var e=Xt,t=Gt;if(Gt=Xt=null,Zo(e),t)for(e=0;e<t.length;e++)Zo(t[e])}}function Na(e,t){return e(t)}function Ca(){}var ji=!1;function _a(e,t,n){if(ji)return e(t,n);ji=!0;try{return Na(e,t,n)}finally{ji=!1,(Xt!==null||Gt!==null)&&(Ca(),Ea())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=ui(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var dl=!1;if(Ke)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){dl=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{dl=!1}function Kc(e,t,n,r,i,l,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Cn=!1,Ir=null,Or=!1,fl=null,Yc={onError:function(e){Cn=!0,Ir=e}};function Xc(e,t,n,r,i,l,o,s,a){Cn=!1,Ir=null,Kc.apply(Yc,arguments)}function Gc(e,t,n,r,i,l,o,s,a){if(Xc.apply(this,arguments),Cn){if(Cn){var c=Ir;Cn=!1,Ir=null}else throw Error(w(198));Or||(Or=!0,fl=c)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ta(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jo(e){if(Dt(e)!==e)throw Error(w(188))}function Zc(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Jo(i),e;if(l===r)return Jo(i),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function ja(e){return e=Zc(e),e!==null?za(e):null}function za(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=za(e);if(t!==null)return t;e=e.sibling}return null}var Pa=ye.unstable_scheduleCallback,qo=ye.unstable_cancelCallback,Jc=ye.unstable_shouldYield,qc=ye.unstable_requestPaint,Q=ye.unstable_now,bc=ye.unstable_getCurrentPriorityLevel,eo=ye.unstable_ImmediatePriority,Fa=ye.unstable_UserBlockingPriority,Mr=ye.unstable_NormalPriority,ed=ye.unstable_LowPriority,La=ye.unstable_IdlePriority,li=null,Ae=null;function td(e){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:id,nd=Math.log,rd=Math.LN2;function id(e){return e>>>=0,e===0?32:31-(nd(e)/rd|0)|0}var ur=64,cr=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ar(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Sn(s):(l&=o,l!==0&&(r=Sn(l)))}else o=n&~i,o!==0?r=Sn(o):l!==0&&(r=Sn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),i=1<<n,r|=e[n],t&=~i;return r}function ld(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Le(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=ld(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Da(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Le(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function to(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Ra(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ia,no,Oa,Ma,Aa,hl=!1,dr=[],lt=null,ot=null,st=null,An=new Map,Un=new Map,tt=[],ad="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bo(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function hn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=tr(t),t!==null&&no(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ud(e,t,n,r,i){switch(t){case"focusin":return lt=hn(lt,e,t,n,r,i),!0;case"dragenter":return ot=hn(ot,e,t,n,r,i),!0;case"mouseover":return st=hn(st,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return An.set(l,hn(An.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Un.set(l,hn(Un.get(l)||null,e,t,n,r,i)),!0}return!1}function Ua(e){var t=St(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Ta(n),t!==null){e.blockedOn=t,Aa(e.priority,function(){Oa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=tr(n),t!==null&&no(t),e.blockedOn=n,!1;t.shift()}return!0}function es(e,t,n){Nr(e)&&n.delete(t)}function cd(){hl=!1,lt!==null&&Nr(lt)&&(lt=null),ot!==null&&Nr(ot)&&(ot=null),st!==null&&Nr(st)&&(st=null),An.forEach(es),Un.forEach(es)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,hl||(hl=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,cd)))}function Vn(e){function t(i){return vn(i,e)}if(0<dr.length){vn(dr[0],e);for(var n=1;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&vn(lt,e),ot!==null&&vn(ot,e),st!==null&&vn(st,e),An.forEach(t),Un.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Ua(n),n.blockedOn===null&&tt.shift()}var Zt=Ze.ReactCurrentBatchConfig,Ur=!0;function dd(e,t,n,r){var i=R,l=Zt.transition;Zt.transition=null;try{R=1,ro(e,t,n,r)}finally{R=i,Zt.transition=l}}function fd(e,t,n,r){var i=R,l=Zt.transition;Zt.transition=null;try{R=4,ro(e,t,n,r)}finally{R=i,Zt.transition=l}}function ro(e,t,n,r){if(Ur){var i=vl(e,t,n,r);if(i===null)Ui(e,t,r,Vr,n),bo(e,r);else if(ud(i,e,t,n,r))r.stopPropagation();else if(bo(e,r),t&4&&-1<ad.indexOf(e)){for(;i!==null;){var l=tr(i);if(l!==null&&Ia(l),l=vl(e,t,n,r),l===null&&Ui(e,t,r,Vr,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ui(e,t,r,null,n)}}var Vr=null;function vl(e,t,n,r){if(Vr=null,e=bl(r),e=St(e),e!==null)if(t=Dt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ta(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function Va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bc()){case eo:return 1;case Fa:return 4;case Mr:case ed:return 16;case La:return 536870912;default:return 16}default:return 16}}var rt=null,io=null,Cr=null;function $a(){if(Cr)return Cr;var e,t=io,n=t.length,r,i="value"in rt?rt.value:rt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Cr=i.slice(e,1<r?1-r:void 0)}function _r(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function ts(){return!1}function we(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?fr:ts,this.isPropagationStopped=ts,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=we(an),er=$({},an,{view:0,detail:0}),pd=we(er),Pi,Fi,mn,oi=$({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mn&&(mn&&e.type==="mousemove"?(Pi=e.screenX-mn.screenX,Fi=e.screenY-mn.screenY):Fi=Pi=0,mn=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:Fi}}),ns=we(oi),hd=$({},oi,{dataTransfer:0}),vd=we(hd),md=$({},er,{relatedTarget:0}),Li=we(md),gd=$({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),yd=we(gd),xd=$({},an,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wd=we(xd),kd=$({},an,{data:0}),rs=we(kd),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ed={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Nd[e])?!!t[e]:!1}function oo(){return Cd}var _d=$({},er,{key:function(e){if(e.key){var t=Sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ed[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Td=we(_d),jd=$({},oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=we(jd),zd=$({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),Pd=we(zd),Fd=$({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ld=we(Fd),Dd=$({},oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=we(Dd),Id=[9,13,27,32],so=Ke&&"CompositionEvent"in window,_n=null;Ke&&"documentMode"in document&&(_n=document.documentMode);var Od=Ke&&"TextEvent"in window&&!_n,Ba=Ke&&(!so||_n&&8<_n&&11>=_n),ls=" ",os=!1;function Ha(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mt=!1;function Md(e,t){switch(e){case"compositionend":return Wa(t);case"keypress":return t.which!==32?null:(os=!0,ls);case"textInput":return e=t.data,e===ls&&os?null:e;default:return null}}function Ad(e,t){if(Mt)return e==="compositionend"||!so&&Ha(e,t)?(e=$a(),Cr=io=rt=null,Mt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ba&&t.locale!=="ko"?null:t.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ud[e.type]:t==="textarea"}function Qa(e,t,n,r){Sa(r),t=$r(t,"onChange"),0<t.length&&(n=new lo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,$n=null;function Vd(e){nu(e,0)}function si(e){var t=Vt(e);if(va(t))return e}function $d(e,t){if(e==="change")return t}var Ka=!1;if(Ke){var Di;if(Ke){var Ri="oninput"in document;if(!Ri){var as=document.createElement("div");as.setAttribute("oninput","return;"),Ri=typeof as.oninput=="function"}Di=Ri}else Di=!1;Ka=Di&&(!document.documentMode||9<document.documentMode)}function us(){Tn&&(Tn.detachEvent("onpropertychange",Ya),$n=Tn=null)}function Ya(e){if(e.propertyName==="value"&&si($n)){var t=[];Qa(t,$n,e,bl(e)),_a(Vd,t)}}function Bd(e,t,n){e==="focusin"?(us(),Tn=t,$n=n,Tn.attachEvent("onpropertychange",Ya)):e==="focusout"&&us()}function Hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return si($n)}function Wd(e,t){if(e==="click")return si(t)}function Qd(e,t){if(e==="input"||e==="change")return si(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Kd;function Bn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ji.call(t,i)||!Re(e[i],t[i]))return!1}return!0}function cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,t){var n=cs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cs(n)}}function Xa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ga(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yd(e){var t=Ga(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xa(n.ownerDocument.documentElement,n)){if(r!==null&&ao(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ds(n,l);var o=ds(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xd=Ke&&"documentMode"in document&&11>=document.documentMode,At=null,ml=null,jn=null,gl=!1;function fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gl||At==null||At!==Rr(r)||(r=At,"selectionStart"in r&&ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Bn(jn,r)||(jn=r,r=$r(ml,"onSelect"),0<r.length&&(t=new lo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=At)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},Ii={},Za={};Ke&&(Za=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function ai(e){if(Ii[e])return Ii[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Za)return Ii[e]=t[n];return e}var Ja=ai("animationend"),qa=ai("animationiteration"),ba=ai("animationstart"),eu=ai("transitionend"),tu=new Map,ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){tu.set(e,t),Lt(t,[e])}for(var Oi=0;Oi<ps.length;Oi++){var Mi=ps[Oi],Gd=Mi.toLowerCase(),Zd=Mi[0].toUpperCase()+Mi.slice(1);vt(Gd,"on"+Zd)}vt(Ja,"onAnimationEnd");vt(qa,"onAnimationIteration");vt(ba,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(eu,"onTransitionEnd");bt("onMouseEnter",["mouseout","mouseover"]);bt("onMouseLeave",["mouseout","mouseover"]);bt("onPointerEnter",["pointerout","pointerover"]);bt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gc(r,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;hs(i,s,c),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;hs(i,s,c),l=a}}}if(Or)throw e=fl,Or=!1,fl=null,e}function O(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(ru(t,e,2,!1),n.add(r))}function Ai(e,t,n){var r=0;t&&(r|=4),ru(n,e,r,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[hr]){e[hr]=!0,ca.forEach(function(n){n!=="selectionchange"&&(Jd.has(n)||Ai(n,!1,e),Ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,Ai("selectionchange",!1,t))}}function ru(e,t,n,r){switch(Va(t)){case 1:var i=dd;break;case 4:i=fd;break;default:i=ro}n=i.bind(null,t,n,e),i=void 0,!dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ui(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=St(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}_a(function(){var c=l,g=bl(n),m=[];e:{var p=tu.get(e);if(p!==void 0){var v=lo,y=e;switch(e){case"keypress":if(_r(n)===0)break e;case"keydown":case"keyup":v=Td;break;case"focusin":y="focus",v=Li;break;case"focusout":y="blur",v=Li;break;case"beforeblur":case"afterblur":v=Li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=vd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Pd;break;case Ja:case qa:case ba:v=yd;break;case eu:v=Ld;break;case"scroll":v=pd;break;case"wheel":v=Rd;break;case"copy":case"cut":case"paste":v=wd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=is}var k=(t&4)!==0,D=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var u=c,h;u!==null;){h=u;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,f!==null&&(x=Mn(u,f),x!=null&&k.push(Wn(u,x,h)))),D)break;u=u.return}0<k.length&&(p=new v(p,y,null,n,g),m.push({event:p,listeners:k}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==ul&&(y=n.relatedTarget||n.fromElement)&&(St(y)||y[Ye]))break e;if((v||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?St(y):null,y!==null&&(D=Dt(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(k=ns,x="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(k=is,x="onPointerLeave",f="onPointerEnter",u="pointer"),D=v==null?p:Vt(v),h=y==null?p:Vt(y),p=new k(x,u+"leave",v,n,g),p.target=D,p.relatedTarget=h,x=null,St(g)===c&&(k=new k(f,u+"enter",y,n,g),k.target=h,k.relatedTarget=D,x=k),D=x,v&&y)t:{for(k=v,f=y,u=0,h=k;h;h=Rt(h))u++;for(h=0,x=f;x;x=Rt(x))h++;for(;0<u-h;)k=Rt(k),u--;for(;0<h-u;)f=Rt(f),h--;for(;u--;){if(k===f||f!==null&&k===f.alternate)break t;k=Rt(k),f=Rt(f)}k=null}else k=null;v!==null&&vs(m,p,v,k,!1),y!==null&&D!==null&&vs(m,D,y,k,!0)}}e:{if(p=c?Vt(c):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var E=$d;else if(ss(p))if(Ka)E=Qd;else{E=Hd;var C=Bd}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Wd);if(E&&(E=E(e,c))){Qa(m,E,n,g);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&il(p,"number",p.value)}switch(C=c?Vt(c):window,e){case"focusin":(ss(C)||C.contentEditable==="true")&&(At=C,ml=c,jn=null);break;case"focusout":jn=ml=At=null;break;case"mousedown":gl=!0;break;case"contextmenu":case"mouseup":case"dragend":gl=!1,fs(m,n,g);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":fs(m,n,g)}var _;if(so)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Mt?Ha(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ba&&n.locale!=="ko"&&(Mt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Mt&&(_=$a()):(rt=g,io="value"in rt?rt.value:rt.textContent,Mt=!0)),C=$r(c,T),0<C.length&&(T=new rs(T,e,null,n,g),m.push({event:T,listeners:C}),_?T.data=_:(_=Wa(n),_!==null&&(T.data=_)))),(_=Od?Md(e,n):Ad(e,n))&&(c=$r(c,"onBeforeInput"),0<c.length&&(g=new rs("onBeforeInput","beforeinput",null,n,g),m.push({event:g,listeners:c}),g.data=_))}nu(m,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Mn(e,n),l!=null&&r.unshift(Wn(e,l,i)),l=Mn(e,t),l!=null&&r.push(Wn(e,l,i))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vs(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Mn(n,l),a!=null&&o.unshift(Wn(n,a,s))):i||(a=Mn(n,l),a!=null&&o.push(Wn(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var qd=/\r\n?/g,bd=/\u0000|\uFFFD/g;function ms(e){return(typeof e=="string"?e:""+e).replace(qd,`
`).replace(bd,"")}function vr(e,t,n){if(t=ms(t),ms(e)!==t&&n)throw Error(w(425))}function Br(){}var yl=null,xl=null;function wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,ef=typeof clearTimeout=="function"?clearTimeout:void 0,gs=typeof Promise=="function"?Promise:void 0,tf=typeof queueMicrotask=="function"?queueMicrotask:typeof gs<"u"?function(e){return gs.resolve(null).then(e).catch(nf)}:kl;function nf(e){setTimeout(function(){throw e})}function Vi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var un=Math.random().toString(36).slice(2),Me="__reactFiber$"+un,Qn="__reactProps$"+un,Ye="__reactContainer$"+un,Sl="__reactEvents$"+un,rf="__reactListeners$"+un,lf="__reactHandles$"+un;function St(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Me]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ys(e);e!==null;){if(n=e[Me])return n;e=ys(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Me]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ui(e){return e[Qn]||null}var El=[],$t=-1;function mt(e){return{current:e}}function M(e){0>$t||(e.current=El[$t],El[$t]=null,$t--)}function I(e,t){$t++,El[$t]=e.current,e.current=t}var ht={},le=mt(ht),fe=mt(!1),Tt=ht;function en(e,t){var n=e.type.contextTypes;if(!n)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function pe(e){return e=e.childContextTypes,e!=null}function Hr(){M(fe),M(le)}function xs(e,t,n){if(le.current!==ht)throw Error(w(168));I(le,t),I(fe,n)}function iu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Bc(e)||"Unknown",i));return $({},n,r)}function Wr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Tt=le.current,I(le,e),I(fe,fe.current),!0}function ws(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=iu(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,M(fe),M(le),I(le,e)):M(fe),I(fe,n)}var Be=null,ci=!1,$i=!1;function lu(e){Be===null?Be=[e]:Be.push(e)}function of(e){ci=!0,lu(e)}function gt(){if(!$i&&Be!==null){$i=!0;var e=0,t=R;try{var n=Be;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,ci=!1}catch(i){throw Be!==null&&(Be=Be.slice(e+1)),Pa(eo,gt),i}finally{R=t,$i=!1}}return null}var Bt=[],Ht=0,Qr=null,Kr=0,ke=[],Se=0,jt=null,He=1,We="";function wt(e,t){Bt[Ht++]=Kr,Bt[Ht++]=Qr,Qr=e,Kr=t}function ou(e,t,n){ke[Se++]=He,ke[Se++]=We,ke[Se++]=jt,jt=e;var r=He;e=We;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var l=32-Le(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,He=1<<32-Le(t)+i|n<<i|r,We=l+e}else He=1<<l|n<<i|r,We=e}function uo(e){e.return!==null&&(wt(e,1),ou(e,1,0))}function co(e){for(;e===Qr;)Qr=Bt[--Ht],Bt[Ht]=null,Kr=Bt[--Ht],Bt[Ht]=null;for(;e===jt;)jt=ke[--Se],ke[Se]=null,We=ke[--Se],ke[Se]=null,He=ke[--Se],ke[Se]=null}var ge=null,me=null,A=!1,Fe=null;function su(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,me=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,me=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(A){var t=me;if(t){var n=t;if(!ks(e,t)){if(Nl(e))throw Error(w(418));t=at(n.nextSibling);var r=ge;t&&ks(e,t)?su(r,n):(e.flags=e.flags&-4097|2,A=!1,ge=e)}}else{if(Nl(e))throw Error(w(418));e.flags=e.flags&-4097|2,A=!1,ge=e}}}function Ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function mr(e){if(e!==ge)return!1;if(!A)return Ss(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wl(e.type,e.memoizedProps)),t&&(t=me)){if(Nl(e))throw au(),Error(w(418));for(;t;)su(e,t),t=at(t.nextSibling)}if(Ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ge?at(e.stateNode.nextSibling):null;return!0}function au(){for(var e=me;e;)e=at(e.nextSibling)}function tn(){me=ge=null,A=!1}function fo(e){Fe===null?Fe=[e]:Fe.push(e)}var sf=Ze.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function gr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Es(e){var t=e._init;return t(e._payload)}function uu(e){function t(f,u){if(e){var h=f.deletions;h===null?(f.deletions=[u],f.flags|=16):h.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function i(f,u){return f=ft(f,u),f.index=0,f.sibling=null,f}function l(f,u,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<u?(f.flags|=2,u):h):(f.flags|=2,u)):(f.flags|=1048576,u)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,u,h,x){return u===null||u.tag!==6?(u=Xi(h,f.mode,x),u.return=f,u):(u=i(u,h),u.return=f,u)}function a(f,u,h,x){var E=h.type;return E===Ot?g(f,u,h.props.children,x,h.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===be&&Es(E)===u.type)?(x=i(u,h.props),x.ref=gn(f,u,h),x.return=f,x):(x=Dr(h.type,h.key,h.props,null,f.mode,x),x.ref=gn(f,u,h),x.return=f,x)}function c(f,u,h,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Gi(h,f.mode,x),u.return=f,u):(u=i(u,h.children||[]),u.return=f,u)}function g(f,u,h,x,E){return u===null||u.tag!==7?(u=_t(h,f.mode,x,E),u.return=f,u):(u=i(u,h),u.return=f,u)}function m(f,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Xi(""+u,f.mode,h),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case or:return h=Dr(u.type,u.key,u.props,null,f.mode,h),h.ref=gn(f,null,u),h.return=f,h;case It:return u=Gi(u,f.mode,h),u.return=f,u;case be:var x=u._init;return m(f,x(u._payload),h)}if(kn(u)||fn(u))return u=_t(u,f.mode,h,null),u.return=f,u;gr(f,u)}return null}function p(f,u,h,x){var E=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:s(f,u,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case or:return h.key===E?a(f,u,h,x):null;case It:return h.key===E?c(f,u,h,x):null;case be:return E=h._init,p(f,u,E(h._payload),x)}if(kn(h)||fn(h))return E!==null?null:g(f,u,h,x,null);gr(f,h)}return null}function v(f,u,h,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(h)||null,s(u,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case or:return f=f.get(x.key===null?h:x.key)||null,a(u,f,x,E);case It:return f=f.get(x.key===null?h:x.key)||null,c(u,f,x,E);case be:var C=x._init;return v(f,u,h,C(x._payload),E)}if(kn(x)||fn(x))return f=f.get(h)||null,g(u,f,x,E,null);gr(u,x)}return null}function y(f,u,h,x){for(var E=null,C=null,_=u,T=u=0,H=null;_!==null&&T<h.length;T++){_.index>T?(H=_,_=null):H=_.sibling;var F=p(f,_,h[T],x);if(F===null){_===null&&(_=H);break}e&&_&&F.alternate===null&&t(f,_),u=l(F,u,T),C===null?E=F:C.sibling=F,C=F,_=H}if(T===h.length)return n(f,_),A&&wt(f,T),E;if(_===null){for(;T<h.length;T++)_=m(f,h[T],x),_!==null&&(u=l(_,u,T),C===null?E=_:C.sibling=_,C=_);return A&&wt(f,T),E}for(_=r(f,_);T<h.length;T++)H=v(_,f,T,h[T],x),H!==null&&(e&&H.alternate!==null&&_.delete(H.key===null?T:H.key),u=l(H,u,T),C===null?E=H:C.sibling=H,C=H);return e&&_.forEach(function(Te){return t(f,Te)}),A&&wt(f,T),E}function k(f,u,h,x){var E=fn(h);if(typeof E!="function")throw Error(w(150));if(h=E.call(h),h==null)throw Error(w(151));for(var C=E=null,_=u,T=u=0,H=null,F=h.next();_!==null&&!F.done;T++,F=h.next()){_.index>T?(H=_,_=null):H=_.sibling;var Te=p(f,_,F.value,x);if(Te===null){_===null&&(_=H);break}e&&_&&Te.alternate===null&&t(f,_),u=l(Te,u,T),C===null?E=Te:C.sibling=Te,C=Te,_=H}if(F.done)return n(f,_),A&&wt(f,T),E;if(_===null){for(;!F.done;T++,F=h.next())F=m(f,F.value,x),F!==null&&(u=l(F,u,T),C===null?E=F:C.sibling=F,C=F);return A&&wt(f,T),E}for(_=r(f,_);!F.done;T++,F=h.next())F=v(_,f,T,F.value,x),F!==null&&(e&&F.alternate!==null&&_.delete(F.key===null?T:F.key),u=l(F,u,T),C===null?E=F:C.sibling=F,C=F);return e&&_.forEach(function(cn){return t(f,cn)}),A&&wt(f,T),E}function D(f,u,h,x){if(typeof h=="object"&&h!==null&&h.type===Ot&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case or:e:{for(var E=h.key,C=u;C!==null;){if(C.key===E){if(E=h.type,E===Ot){if(C.tag===7){n(f,C.sibling),u=i(C,h.props.children),u.return=f,f=u;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===be&&Es(E)===C.type){n(f,C.sibling),u=i(C,h.props),u.ref=gn(f,C,h),u.return=f,f=u;break e}n(f,C);break}else t(f,C);C=C.sibling}h.type===Ot?(u=_t(h.props.children,f.mode,x,h.key),u.return=f,f=u):(x=Dr(h.type,h.key,h.props,null,f.mode,x),x.ref=gn(f,u,h),x.return=f,f=x)}return o(f);case It:e:{for(C=h.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){n(f,u.sibling),u=i(u,h.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=Gi(h,f.mode,x),u.return=f,f=u}return o(f);case be:return C=h._init,D(f,u,C(h._payload),x)}if(kn(h))return y(f,u,h,x);if(fn(h))return k(f,u,h,x);gr(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(n(f,u.sibling),u=i(u,h),u.return=f,f=u):(n(f,u),u=Xi(h,f.mode,x),u.return=f,f=u),o(f)):n(f,u)}return D}var nn=uu(!0),cu=uu(!1),Yr=mt(null),Xr=null,Wt=null,po=null;function ho(){po=Wt=Xr=null}function vo(e){var t=Yr.current;M(Yr),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Xr=e,po=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if(Xr===null)throw Error(w(308));Wt=e,Xr.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Et=null;function mo(e){Et===null?Et=[e]:Et.push(e)}function du(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function go(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,mo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}function Ns(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var i=e.updateQueue;et=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?l=c:o.next=c,o=a;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==o&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=a))}if(l!==null){var m=i.baseState;o=0,g=c=a=null,s=l;do{var p=s.lane,v=s.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,k=s;switch(p=t,v=n,k.tag){case 1:if(y=k.payload,typeof y=="function"){m=y.call(v,m,p);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,p=typeof y=="function"?y.call(v,m,p):y,p==null)break e;m=$({},m,p);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=v,a=m):g=g.next=v,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(g===null&&(a=m),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=m}}function Cs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var nr={},Ue=mt(nr),Kn=mt(nr),Yn=mt(nr);function Nt(e){if(e===nr)throw Error(w(174));return e}function yo(e,t){switch(I(Yn,t),I(Kn,e),I(Ue,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}M(Ue),I(Ue,t)}function rn(){M(Ue),M(Kn),M(Yn)}function pu(e){Nt(Yn.current);var t=Nt(Ue.current),n=ol(t,e.type);t!==n&&(I(Kn,e),I(Ue,n))}function xo(e){Kn.current===e&&(M(Ue),M(Kn))}var U=mt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bi=[];function wo(){for(var e=0;e<Bi.length;e++)Bi[e]._workInProgressVersionPrimary=null;Bi.length=0}var jr=Ze.ReactCurrentDispatcher,Hi=Ze.ReactCurrentBatchConfig,zt=0,V=null,Y=null,Z=null,Jr=!1,zn=!1,Xn=0,af=0;function ne(){throw Error(w(321))}function ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,l){if(zt=l,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jr.current=e===null||e.memoizedState===null?ff:pf,e=n(r,i),zn){l=0;do{if(zn=!1,Xn=0,25<=l)throw Error(w(301));l+=1,Z=Y=null,t.updateQueue=null,jr.current=hf,e=n(r,i)}while(zn)}if(jr.current=qr,t=Y!==null&&Y.next!==null,zt=0,Z=Y=V=null,Jr=!1,t)throw Error(w(300));return e}function Eo(){var e=Xn!==0;return Xn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?V.memoizedState=Z=e:Z=Z.next=e,Z}function _e(){if(Y===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?V.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?V.memoizedState=Z=e:Z=Z.next=e}return Z}function Gn(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=_e(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,c=l;do{var g=c.lane;if((zt&g)===g)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,o=r):a=a.next=m,V.lanes|=g,Pt|=g}c=c.next}while(c!==null&&c!==l);a===null?o=r:a.next=s,Re(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,V.lanes|=l,Pt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qi(e){var t=_e(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Re(l,t.memoizedState)||(de=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function hu(){}function vu(e,t){var n=V,r=_e(),i=t(),l=!Re(r.memoizedState,i);if(l&&(r.memoizedState=i,de=!0),r=r.queue,No(yu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Zn(9,gu.bind(null,n,r,i,t),void 0,null),J===null)throw Error(w(349));zt&30||mu(n,t,i)}return i}function mu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gu(e,t,n,r){t.value=n,t.getSnapshot=r,xu(t)&&wu(e)}function yu(e,t,n){return n(function(){xu(t)&&wu(e)})}function xu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function wu(e){var t=Xe(e,1);t!==null&&De(t,e,1,-1)}function _s(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=df.bind(null,V,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return _e().memoizedState}function zr(e,t,n,r){var i=Oe();V.flags|=e,i.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function di(e,t,n,r){var i=_e();r=r===void 0?null:r;var l=void 0;if(Y!==null){var o=Y.memoizedState;if(l=o.destroy,r!==null&&ko(r,o.deps)){i.memoizedState=Zn(t,n,l,r);return}}V.flags|=e,i.memoizedState=Zn(1|t,n,l,r)}function Ts(e,t){return zr(8390656,8,e,t)}function No(e,t){return di(2048,8,e,t)}function Su(e,t){return di(4,2,e,t)}function Eu(e,t){return di(4,4,e,t)}function Nu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cu(e,t,n){return n=n!=null?n.concat([e]):null,di(4,4,Nu.bind(null,t,e),n)}function Co(){}function _u(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tu(e,t){var n=_e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ju(e,t,n){return zt&21?(Re(n,t)||(n=Da(),V.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function uf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),t()}finally{R=n,Hi.transition=r}}function zu(){return _e().memoizedState}function cf(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pu(e))Fu(t,n);else if(n=du(e,t,n,r),n!==null){var i=se();De(n,e,r,i),Lu(n,t,r)}}function df(e,t,n){var r=dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pu(e))Fu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Re(s,o)){var a=t.interleaved;a===null?(i.next=i,mo(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=du(e,t,i,r),n!==null&&(i=se(),De(n,e,r,i),Lu(n,t,r))}}function Pu(e){var t=e.alternate;return e===V||t!==null&&t===V}function Fu(e,t){zn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}var qr={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},ff={readContext:Ce,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ts,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,Nu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=cf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:_s,useDebugValue:Co,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=_s(!1),t=e[0];return e=uf.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,i=Oe();if(A){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),J===null)throw Error(w(349));zt&30||mu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ts(yu.bind(null,r,l,e),[e]),r.flags|=2048,Zn(9,gu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Oe(),t=J.identifierPrefix;if(A){var n=We,r=He;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=af++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pf={readContext:Ce,useCallback:_u,useContext:Ce,useEffect:No,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:Eu,useMemo:Tu,useReducer:Wi,useRef:ku,useState:function(){return Wi(Gn)},useDebugValue:Co,useDeferredValue:function(e){var t=_e();return ju(t,Y.memoizedState,e)},useTransition:function(){var e=Wi(Gn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:vu,useId:zu,unstable_isNewReconciler:!1},hf={readContext:Ce,useCallback:_u,useContext:Ce,useEffect:No,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:Eu,useMemo:Tu,useReducer:Qi,useRef:ku,useState:function(){return Qi(Gn)},useDebugValue:Co,useDeferredValue:function(e){var t=_e();return Y===null?t.memoizedState=e:ju(t,Y.memoizedState,e)},useTransition:function(){var e=Qi(Gn)[0],t=_e().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:vu,useId:zu,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Tl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fi={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),i=dt(e),l=Qe(r,i);l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,i),t!==null&&(De(t,e,i,r),Tr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),i=dt(e),l=Qe(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,i),t!==null&&(De(t,e,i,r),Tr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=dt(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ut(e,i,r),t!==null&&(De(t,e,r,n),Tr(t,e,r))}};function js(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Bn(n,r)||!Bn(i,l):!0}function Du(e,t,n){var r=!1,i=ht,l=t.contextType;return typeof l=="object"&&l!==null?l=Ce(l):(i=pe(t)?Tt:le.current,r=t.contextTypes,l=(r=r!=null)?en(e,i):ht),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fi.enqueueReplaceState(t,t.state,null)}function jl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},go(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ce(l):(l=pe(t)?Tt:le.current,i.context=en(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Tl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&fi.enqueueReplaceState(i,i.state,null),Gr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Ki(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vf=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ei||(ei=!0,Ul=r),zl(e,t)},n}function Iu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ps(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zf.bind(null,e,t,n),t.then(e,e))}function Fs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ls(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var mf=Ze.ReactCurrentOwner,de=!1;function oe(e,t,n,r){t.child=e===null?cu(t,null,n,r):nn(t,e.child,n,r)}function Ds(e,t,n,r,i){n=n.render;var l=t.ref;return Jt(t,i),r=So(e,t,n,r,l,i),n=Eo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(A&&n&&uo(t),t.flags|=1,oe(e,t,r,i),t.child)}function Rs(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Do(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Ou(e,t,l,r,i)):(e=Dr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(o,r)&&e.ref===t.ref)return Ge(e,t,i)}return t.flags|=1,e=ft(l,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Bn(l,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ge(e,t,i)}return Pl(e,t,n,r,i)}function Mu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Kt,ve),ve|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Kt,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,I(Kt,ve),ve|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,I(Kt,ve),ve|=r;return oe(e,t,i,n),t.child}function Au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pl(e,t,n,r,i){var l=pe(n)?Tt:le.current;return l=en(t,l),Jt(t,i),n=So(e,t,n,r,l,i),r=Eo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(A&&r&&uo(t),t.flags|=1,oe(e,t,n,i),t.child)}function Is(e,t,n,r,i){if(pe(n)){var l=!0;Wr(t)}else l=!1;if(Jt(t,i),t.stateNode===null)Pr(e,t),Du(t,n,r),jl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=pe(n)?Tt:le.current,c=en(t,c));var g=n.getDerivedStateFromProps,m=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&zs(t,o,r,c),et=!1;var p=t.memoizedState;o.state=p,Gr(t,r,o,i),a=t.memoizedState,s!==r||p!==a||fe.current||et?(typeof g=="function"&&(Tl(t,n,g,r),a=t.memoizedState),(s=et||js(t,n,s,r,p,a,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fu(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ze(t.type,s),o.props=c,m=t.pendingProps,p=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ce(a):(a=pe(n)?Tt:le.current,a=en(t,a));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||p!==a)&&zs(t,o,r,a),et=!1,p=t.memoizedState,o.state=p,Gr(t,r,o,i);var y=t.memoizedState;s!==m||p!==y||fe.current||et?(typeof v=="function"&&(Tl(t,n,v,r),y=t.memoizedState),(c=et||js(t,n,c,r,p,y,a)||!1)?(g||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,l,i)}function Fl(e,t,n,r,i,l){Au(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ws(t,n,!1),Ge(e,t,l);r=t.stateNode,mf.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=nn(t,e.child,null,l),t.child=nn(t,null,s,l)):oe(e,t,s,l),t.memoizedState=r.state,i&&ws(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?xs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xs(e,t.context,!1),yo(e,t.containerInfo)}function Os(e,t,n,r,i){return tn(),fo(i),t.flags|=256,oe(e,t,n,r),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vu(e,t,n){var r=t.pendingProps,i=U.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(U,i&1),e===null)return Cl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=vi(o,r,0,null),e=_t(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ll,e):_o(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return gf(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ft(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=ft(s,l):(l=_t(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Dl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,r}return l=e.child,e=l.sibling,r=ft(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _o(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&fo(r),nn(t,e.child,null,n),e=_o(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gf(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Ki(Error(w(422))),yr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=vi({mode:"visible",children:r.children},i,0,null),l=_t(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&nn(t,e.child,null,o),t.child.memoizedState=Dl(o),t.memoizedState=Ll,l);if(!(t.mode&1))return yr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(w(419)),r=Ki(l,r,void 0),yr(e,t,o,r)}if(s=(o&e.childLanes)!==0,de||s){if(r=J,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Xe(e,i),De(r,e,i,-1))}return Lo(),r=Ki(Error(w(421))),yr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,me=at(i.nextSibling),ge=t,A=!0,Fe=null,e!==null&&(ke[Se++]=He,ke[Se++]=We,ke[Se++]=jt,He=e.id,We=e.overflow,jt=t),t=_o(t,r.children),t.flags|=4096,t)}function Ms(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_l(e.return,t,n)}function Yi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function $u(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(oe(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ms(e,n,t);else if(e.tag===19)Ms(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(U,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yi(t,!0,n,null,l);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function yf(e,t,n){switch(t.tag){case 3:Uu(t),tn();break;case 5:pu(t);break;case 1:pe(t.type)&&Wr(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(Yr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Vu(e,t,n):(I(U,U.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);I(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $u(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Mu(e,t,n)}return Ge(e,t,n)}var Bu,Rl,Hu,Wu;Bu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rl=function(){};Hu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nt(Ue.current);var l=null;switch(n){case"input":i=nl(e,i),r=nl(e,r),l=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":i=ll(e,i),r=ll(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Br)}sl(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(In.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(In.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&O("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function xf(e,t,n){var r=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return pe(t.type)&&Hr(),re(t),null;case 3:return r=t.stateNode,rn(),M(fe),M(le),wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(mr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Fe!==null&&(Bl(Fe),Fe=null))),Rl(e,t),re(t),null;case 5:xo(t);var i=Nt(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return re(t),null}if(e=Nt(Ue.current),mr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Me]=t,r[Qn]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<En.length;i++)O(En[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Ko(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Xo(r,l),O("invalid",r)}sl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&vr(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&vr(r.textContent,s,e),i=["children",""+s]):In.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":sr(r),Yo(r,l,!0);break;case"textarea":sr(r),Go(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Br)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ya(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Me]=t,e[Qn]=r,Bu(e,t,!1,!1),t.stateNode=e;e:{switch(o=al(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<En.length;i++)O(En[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":Ko(e,r),i=nl(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),O("invalid",e);break;case"textarea":Xo(e,r),i=ll(e,r),O("invalid",e);break;default:i=r}sl(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?ka(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&xa(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&On(e,a):typeof a=="number"&&On(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(In.hasOwnProperty(l)?a!=null&&l==="onScroll"&&O("scroll",e):a!=null&&Gl(e,l,a,o))}switch(n){case"input":sr(e),Yo(e,r,!1);break;case"textarea":sr(e),Go(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Yt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Yt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Nt(Yn.current),Nt(Ue.current),mr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Me]=t,(l=r.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Me]=t,t.stateNode=r}return re(t),null;case 13:if(M(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&me!==null&&t.mode&1&&!(t.flags&128))au(),tn(),t.flags|=98560,l=!1;else if(l=mr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Me]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),l=!1}else Fe!==null&&(Bl(Fe),Fe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?X===0&&(X=3):Lo())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return rn(),Rl(e,t),e===null&&Hn(t.stateNode.containerInfo),re(t),null;case 10:return vo(t.type._context),re(t),null;case 17:return pe(t.type)&&Hr(),re(t),null;case 19:if(M(U),l=t.memoizedState,l===null)return re(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)yn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zr(e),o!==null){for(t.flags|=128,yn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(U,U.current&1|2),t.child}e=e.sibling}l.tail!==null&&Q()>on&&(t.flags|=128,r=!0,yn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!A)return re(t),null}else 2*Q()-l.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,yn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Q(),t.sibling=null,n=U.current,I(U,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return Fo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function wf(e,t){switch(co(t),t.tag){case 1:return pe(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),M(fe),M(le),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(M(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(U),null;case 4:return rn(),null;case 10:return vo(t.type._context),null;case 22:case 23:return Fo(),null;case 24:return null;default:return null}}var xr=!1,ie=!1,kf=typeof WeakSet=="function"?WeakSet:Set,S=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Il(e,t,n){try{n()}catch(r){B(e,t,r)}}var As=!1;function Sf(e,t){if(yl=Ur,e=Ga(),ao(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,g=0,m=e,p=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(s=o+i),m!==l||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break t;if(p===n&&++c===i&&(s=o),p===l&&++g===r&&(a=o),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(xl={focusedElem:e,selectionRange:n},Ur=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,D=y.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:ze(t.type,k),D);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(x){B(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return y=As,As=!1,y}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Il(t,n,l)}i=i.next}while(i!==r)}}function pi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ol(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[Qn],delete t[Sl],delete t[rf],delete t[lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ku(e){return e.tag===5||e.tag===3||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Br));else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var q=null,Pe=!1;function Je(e,t,n){for(n=n.child;n!==null;)Yu(e,t,n),n=n.sibling}function Yu(e,t,n){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(li,n)}catch{}switch(n.tag){case 5:ie||Qt(n,t);case 6:var r=q,i=Pe;q=null,Je(e,t,n),q=r,Pe=i,q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(Pe?(e=q,n=n.stateNode,e.nodeType===8?Vi(e.parentNode,n):e.nodeType===1&&Vi(e,n),Vn(e)):Vi(q,n.stateNode));break;case 4:r=q,i=Pe,q=n.stateNode.containerInfo,Pe=!0,Je(e,t,n),q=r,Pe=i;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Il(n,t,o),i=i.next}while(i!==r)}Je(e,t,n);break;case 1:if(!ie&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){B(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Je(e,t,n),ie=r):Je(e,t,n);break;default:Je(e,t,n)}}function Vs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kf),t.forEach(function(r){var i=Ff.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function je(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:q=s.stateNode,Pe=!1;break e;case 3:q=s.stateNode.containerInfo,Pe=!0;break e;case 4:q=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(q===null)throw Error(w(160));Yu(l,o,i),q=null,Pe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){B(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(je(t,e),Ie(e),r&4){try{Pn(3,e,e.return),pi(3,e)}catch(k){B(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){B(e,e.return,k)}}break;case 1:je(t,e),Ie(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(je(t,e),Ie(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var i=e.stateNode;try{On(i,"")}catch(k){B(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&ma(i,l),al(s,o);var c=al(s,l);for(o=0;o<a.length;o+=2){var g=a[o],m=a[o+1];g==="style"?ka(i,m):g==="dangerouslySetInnerHTML"?xa(i,m):g==="children"?On(i,m):Gl(i,g,m,c)}switch(s){case"input":rl(i,l);break;case"textarea":ga(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Yt(i,!!l.multiple,v,!1):p!==!!l.multiple&&(l.defaultValue!=null?Yt(i,!!l.multiple,l.defaultValue,!0):Yt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Qn]=l}catch(k){B(e,e.return,k)}}break;case 6:if(je(t,e),Ie(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){B(e,e.return,k)}}break;case 3:if(je(t,e),Ie(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vn(t.containerInfo)}catch(k){B(e,e.return,k)}break;case 4:je(t,e),Ie(e);break;case 13:je(t,e),Ie(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(zo=Q())),r&4&&Vs(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||g,je(t,e),ie=c):je(t,e),Ie(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(S=e,g=e.child;g!==null;){for(m=S=g;S!==null;){switch(p=S,v=p.child,p.tag){case 0:case 11:case 14:case 15:Pn(4,p,p.return);break;case 1:Qt(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){B(r,n,k)}}break;case 5:Qt(p,p.return);break;case 22:if(p.memoizedState!==null){Bs(m);continue}}v!==null?(v.return=p,S=v):Bs(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{i=m.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=wa("display",o))}catch(k){B(e,e.return,k)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(k){B(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:je(t,e),Ie(e),r&4&&Vs(e);break;case 21:break;default:je(t,e),Ie(e)}}function Ie(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ku(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(On(i,""),r.flags&=-33);var l=Us(e);Al(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Us(e);Ml(e,s,o);break;default:throw Error(w(161))}}catch(a){B(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e,t,n){S=e,Gu(e)}function Gu(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var i=S,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xr;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||ie;s=xr;var c=ie;if(xr=o,(ie=a)&&!c)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?Hs(i):a!==null?(a.return=o,S=a):Hs(i);for(;l!==null;)S=l,Gu(l),l=l.sibling;S=i,xr=s,ie=c}$s(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,S=l):$s(e)}}function $s(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||pi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Cs(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cs(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&Vn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ie||t.flags&512&&Ol(t)}catch(p){B(t,t.return,p)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function Bs(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function Hs(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pi(4,t)}catch(a){B(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){B(t,i,a)}}var l=t.return;try{Ol(t)}catch(a){B(t,l,a)}break;case 5:var o=t.return;try{Ol(t)}catch(a){B(t,o,a)}}}catch(a){B(t,t.return,a)}if(t===e){S=null;break}var s=t.sibling;if(s!==null){s.return=t.return,S=s;break}S=t.return}}var Nf=Math.ceil,br=Ze.ReactCurrentDispatcher,To=Ze.ReactCurrentOwner,Ne=Ze.ReactCurrentBatchConfig,L=0,J=null,K=null,ee=0,ve=0,Kt=mt(0),X=0,Jn=null,Pt=0,hi=0,jo=0,Fn=null,ce=null,zo=0,on=1/0,$e=null,ei=!1,Ul=null,ct=null,wr=!1,it=null,ti=0,Ln=0,Vl=null,Fr=-1,Lr=0;function se(){return L&6?Q():Fr!==-1?Fr:Fr=Q()}function dt(e){return e.mode&1?L&2&&ee!==0?ee&-ee:sf.transition!==null?(Lr===0&&(Lr=Da()),Lr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Va(e.type)),e):1}function De(e,t,n,r){if(50<Ln)throw Ln=0,Vl=null,Error(w(185));bn(e,n,r),(!(L&2)||e!==J)&&(e===J&&(!(L&2)&&(hi|=n),X===4&&nt(e,ee)),he(e,r),n===1&&L===0&&!(t.mode&1)&&(on=Q()+500,ci&&gt()))}function he(e,t){var n=e.callbackNode;od(e,t);var r=Ar(e,e===J?ee:0);if(r===0)n!==null&&qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&qo(n),t===1)e.tag===0?of(Ws.bind(null,e)):lu(Ws.bind(null,e)),tf(function(){!(L&6)&&gt()}),n=null;else{switch(Ra(r)){case 1:n=eo;break;case 4:n=Fa;break;case 16:n=Mr;break;case 536870912:n=La;break;default:n=Mr}n=rc(n,Zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zu(e,t){if(Fr=-1,Lr=0,L&6)throw Error(w(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Ar(e,e===J?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ni(e,r);else{t=r;var i=L;L|=2;var l=qu();(J!==e||ee!==t)&&($e=null,on=Q()+500,Ct(e,t));do try{Tf();break}catch(s){Ju(e,s)}while(!0);ho(),br.current=l,L=i,K!==null?t=0:(J=null,ee=0,t=X)}if(t!==0){if(t===2&&(i=pl(e),i!==0&&(r=i,t=$l(e,i))),t===1)throw n=Jn,Ct(e,0),nt(e,r),he(e,Q()),n;if(t===6)nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cf(i)&&(t=ni(e,r),t===2&&(l=pl(e),l!==0&&(r=l,t=$l(e,l))),t===1))throw n=Jn,Ct(e,0),nt(e,r),he(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:kt(e,ce,$e);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=zo+500-Q(),10<t)){if(Ar(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kl(kt.bind(null,e,ce,$e),t);break}kt(e,ce,$e);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Le(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nf(r/1960))-r,10<r){e.timeoutHandle=kl(kt.bind(null,e,ce,$e),r);break}kt(e,ce,$e);break;case 5:kt(e,ce,$e);break;default:throw Error(w(329))}}}return he(e,Q()),e.callbackNode===n?Zu.bind(null,e):null}function $l(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=ni(e,t),e!==2&&(t=ce,ce=n,t!==null&&Bl(t)),e}function Bl(e){ce===null?ce=e:ce.push.apply(ce,e)}function Cf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Re(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~jo,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Ws(e){if(L&6)throw Error(w(327));qt();var t=Ar(e,0);if(!(t&1))return he(e,Q()),null;var n=ni(e,t);if(e.tag!==0&&n===2){var r=pl(e);r!==0&&(t=r,n=$l(e,r))}if(n===1)throw n=Jn,Ct(e,0),nt(e,t),he(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,ce,$e),he(e,Q()),null}function Po(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(on=Q()+500,ci&&gt())}}function Ft(e){it!==null&&it.tag===0&&!(L&6)&&qt();var t=L;L|=1;var n=Ne.transition,r=R;try{if(Ne.transition=null,R=1,e)return e()}finally{R=r,Ne.transition=n,L=t,!(L&6)&&gt()}}function Fo(){ve=Kt.current,M(Kt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ef(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:rn(),M(fe),M(le),wo();break;case 5:xo(r);break;case 4:rn();break;case 13:M(U);break;case 19:M(U);break;case 10:vo(r.type._context);break;case 22:case 23:Fo()}n=n.return}if(J=e,K=e=ft(e.current,null),ee=ve=t,X=0,Jn=null,jo=hi=Pt=0,ce=Fn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Et=null}return e}function Ju(e,t){do{var n=K;try{if(ho(),jr.current=qr,Jr){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jr=!1}if(zt=0,Z=Y=V=null,zn=!1,Xn=0,To.current=null,n===null||n.return===null){X=1,Jn=t,K=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=ee,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,g=s,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Fs(o);if(v!==null){v.flags&=-257,Ls(v,o,s,l,t),v.mode&1&&Ps(l,c,t),t=v,a=c;var y=t.updateQueue;if(y===null){var k=new Set;k.add(a),t.updateQueue=k}else y.add(a);break e}else{if(!(t&1)){Ps(l,c,t),Lo();break e}a=Error(w(426))}}else if(A&&s.mode&1){var D=Fs(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Ls(D,o,s,l,t),fo(ln(a,s));break e}}l=a=ln(a,s),X!==4&&(X=2),Fn===null?Fn=[l]:Fn.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ru(l,a,t);Ns(l,f);break e;case 1:s=a;var u=l.type,h=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ct===null||!ct.has(h)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=Iu(l,s,t);Ns(l,x);break e}}l=l.return}while(l!==null)}ec(n)}catch(E){t=E,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function qu(){var e=br.current;return br.current=qr,e===null?qr:e}function Lo(){(X===0||X===3||X===2)&&(X=4),J===null||!(Pt&268435455)&&!(hi&268435455)||nt(J,ee)}function ni(e,t){var n=L;L|=2;var r=qu();(J!==e||ee!==t)&&($e=null,Ct(e,t));do try{_f();break}catch(i){Ju(e,i)}while(!0);if(ho(),L=n,br.current=r,K!==null)throw Error(w(261));return J=null,ee=0,X}function _f(){for(;K!==null;)bu(K)}function Tf(){for(;K!==null&&!Jc();)bu(K)}function bu(e){var t=nc(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?ec(e):K=t,To.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=wf(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(n=xf(n,t,ve),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);X===0&&(X=5)}function kt(e,t,n){var r=R,i=Ne.transition;try{Ne.transition=null,R=1,jf(e,t,n,r)}finally{Ne.transition=i,R=r}return null}function jf(e,t,n,r){do qt();while(it!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(sd(e,l),e===J&&(K=J=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wr||(wr=!0,rc(Mr,function(){return qt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var o=R;R=1;var s=L;L|=4,To.current=null,Sf(e,n),Xu(n,e),Yd(xl),Ur=!!yl,xl=yl=null,e.current=n,Ef(n),qc(),L=s,R=o,Ne.transition=l}else e.current=n;if(wr&&(wr=!1,it=e,ti=i),l=e.pendingLanes,l===0&&(ct=null),td(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ei)throw ei=!1,e=Ul,Ul=null,e;return ti&1&&e.tag!==0&&qt(),l=e.pendingLanes,l&1?e===Vl?Ln++:(Ln=0,Vl=e):Ln=0,gt(),null}function qt(){if(it!==null){var e=Ra(ti),t=Ne.transition,n=R;try{if(Ne.transition=null,R=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,ti=0,L&6)throw Error(w(331));var i=L;for(L|=4,S=e.current;S!==null;){var l=S,o=l.child;if(S.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(S=c;S!==null;){var g=S;switch(g.tag){case 0:case 11:case 15:Pn(8,g,l)}var m=g.child;if(m!==null)m.return=g,S=m;else for(;S!==null;){g=S;var p=g.sibling,v=g.return;if(Qu(g),g===c){S=null;break}if(p!==null){p.return=v,S=p;break}S=v}}}var y=l.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var D=k.sibling;k.sibling=null,k=D}while(k!==null)}}S=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,S=o;else e:for(;S!==null;){if(l=S,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,S=f;break e}S=l.return}}var u=e.current;for(S=u;S!==null;){o=S;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,S=h;else e:for(o=u;S!==null;){if(s=S,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:pi(9,s)}}catch(E){B(s,s.return,E)}if(s===o){S=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,S=x;break e}S=s.return}}if(L=i,gt(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(li,e)}catch{}r=!0}return r}finally{R=n,Ne.transition=t}}return!1}function Qs(e,t,n){t=ln(n,t),t=Ru(e,t,1),e=ut(e,t,1),t=se(),e!==null&&(bn(e,1,t),he(e,t))}function B(e,t,n){if(e.tag===3)Qs(e,e,n);else for(;t!==null;){if(t.tag===3){Qs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=ln(n,e),e=Iu(t,e,1),t=ut(t,e,1),e=se(),t!==null&&(bn(t,1,e),he(t,e));break}}t=t.return}}function zf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(ee&n)===n&&(X===4||X===3&&(ee&130023424)===ee&&500>Q()-zo?Ct(e,0):jo|=n),he(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=se();e=Xe(e,t),e!==null&&(bn(e,t,n),he(e,n))}function Pf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function Ff(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||fe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,yf(e,t,n);de=!!(e.flags&131072)}else de=!1,A&&t.flags&1048576&&ou(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var i=en(t,le.current);Jt(t,n),i=So(null,t,r,e,i,n);var l=Eo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pe(r)?(l=!0,Wr(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,go(t),i.updater=fi,t.stateNode=i,i._reactInternals=t,jl(t,r,e,n),t=Fl(null,t,r,!0,l,n)):(t.tag=0,A&&l&&uo(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Df(r),e=ze(r,e),i){case 0:t=Pl(null,t,r,e,n);break e;case 1:t=Is(null,t,r,e,n);break e;case 11:t=Ds(null,t,r,e,n);break e;case 14:t=Rs(null,t,r,ze(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Pl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Is(e,t,r,i,n);case 3:e:{if(Uu(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,i=l.element,fu(e,t),Gr(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=ln(Error(w(423)),t),t=Os(e,t,r,n,i);break e}else if(r!==i){i=ln(Error(w(424)),t),t=Os(e,t,r,n,i);break e}else for(me=at(t.stateNode.containerInfo.firstChild),ge=t,A=!0,Fe=null,n=cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===i){t=Ge(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return pu(t),e===null&&Cl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,wl(r,i)?o=null:l!==null&&wl(r,l)&&(t.flags|=32),Au(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Cl(t),null;case 13:return Vu(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Ds(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,I(Yr,r._currentValue),r._currentValue=o,l!==null)if(Re(l.value,o)){if(l.children===i.children&&!fe.current){t=Ge(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Qe(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?a.next=a:(a.next=g.next,g.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),_l(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(w(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),_l(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jt(t,n),i=Ce(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=ze(r,t.pendingProps),i=ze(r.type,i),Rs(e,t,r,i,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ze(r,i),Pr(e,t),t.tag=1,pe(r)?(e=!0,Wr(t)):e=!1,Jt(t,n),Du(t,r,i),jl(t,r,i,n),Fl(null,t,r,!0,e,n);case 19:return $u(e,t,n);case 22:return Mu(e,t,n)}throw Error(w(156,t.tag))};function rc(e,t){return Pa(e,t)}function Lf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Lf(e,t,n,r)}function Do(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Df(e){if(typeof e=="function")return Do(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jl)return 11;if(e===ql)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Do(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return _t(n.children,i,l,t);case Zl:o=8,i|=8;break;case qi:return e=Ee(12,n,t,i|2),e.elementType=qi,e.lanes=l,e;case bi:return e=Ee(13,n,t,i),e.elementType=bi,e.lanes=l,e;case el:return e=Ee(19,n,t,i),e.elementType=el,e.lanes=l,e;case pa:return vi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case da:o=10;break e;case fa:o=9;break e;case Jl:o=11;break e;case ql:o=14;break e;case be:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function _t(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function vi(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=pa,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Gi(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ro(e,t,n,r,i,l,o,s,a){return e=new Rf(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},go(l),e}function If(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return ht;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(pe(n))return iu(e,n,t)}return t}function lc(e,t,n,r,i,l,o,s,a){return e=Ro(n,r,!0,e,i,l,o,s,a),e.context=ic(null),n=e.current,r=se(),i=dt(n),l=Qe(r,i),l.callback=t??null,ut(n,l,i),e.current.lanes=i,bn(e,i,r),he(e,r),e}function mi(e,t,n,r){var i=t.current,l=se(),o=dt(i);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(i,t,o),e!==null&&(De(e,i,o,l),Tr(e,i,o)),o}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ks(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Io(e,t){Ks(e,t),(e=e.alternate)&&Ks(e,t)}function Of(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oo(e){this._internalRoot=e}gi.prototype.render=Oo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));mi(e,t,null,null)};gi.prototype.unmount=Oo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){mi(null,e,null,null)}),t[Ye]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ma();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Ua(e)}};function Mo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ys(){}function Mf(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=ri(o);l.call(c)}}var o=lc(t,r,e,0,null,!1,!1,"",Ys);return e._reactRootContainer=o,e[Ye]=o.current,Hn(e.nodeType===8?e.parentNode:e),Ft(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ri(a);s.call(c)}}var a=Ro(e,0,!1,null,null,!1,!1,"",Ys);return e._reactRootContainer=a,e[Ye]=a.current,Hn(e.nodeType===8?e.parentNode:e),Ft(function(){mi(t,a,n,r)}),a}function xi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=ri(o);s.call(a)}}mi(t,o,e,i)}else o=Mf(n,t,e,i,r);return ri(o)}Ia=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(to(t,n|1),he(t,Q()),!(L&6)&&(on=Q()+500,gt()))}break;case 13:Ft(function(){var r=Xe(e,1);if(r!==null){var i=se();De(r,e,1,i)}}),Io(e,1)}};no=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=se();De(t,e,134217728,n)}Io(e,134217728)}};Oa=function(e){if(e.tag===13){var t=dt(e),n=Xe(e,t);if(n!==null){var r=se();De(n,e,t,r)}Io(e,t)}};Ma=function(){return R};Aa=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};cl=function(e,t,n){switch(t){case"input":if(rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ui(r);if(!i)throw Error(w(90));va(r),rl(r,i)}}}break;case"textarea":ga(e,n);break;case"select":t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}};Na=Po;Ca=Ft;var Af={usingClientEntryPoint:!1,Events:[tr,Vt,ui,Sa,Ea,Po]},xn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uf={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ja(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{li=kr.inject(Uf),Ae=kr}catch{}}xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mo(t))throw Error(w(200));return If(e,t,null,n)};xe.createRoot=function(e,t){if(!Mo(e))throw Error(w(299));var n=!1,r="",i=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ro(e,1,!1,null,null,n,!1,r,i),e[Ye]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Oo(t)};xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=ja(t),e=e===null?null:e.stateNode,e};xe.flushSync=function(e){return Ft(e)};xe.hydrate=function(e,t,n){if(!yi(t))throw Error(w(200));return xi(null,e,t,!0,n)};xe.hydrateRoot=function(e,t,n){if(!Mo(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=oc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=lc(t,null,e,1,n??null,i,!1,l,o),e[Ye]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gi(t)};xe.render=function(e,t,n){if(!yi(t))throw Error(w(200));return xi(null,e,t,!1,n)};xe.unmountComponentAtNode=function(e){if(!yi(e))throw Error(w(40));return e._reactRootContainer?(Ft(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};xe.unstable_batchedUpdates=Po;xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yi(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return xi(e,t,n,!1,r)};xe.version="18.3.1-next-f1338f8080-20240426";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),sa.exports=xe;var Vf=sa.exports,Xs=Vf;Zi.createRoot=Xs.createRoot,Zi.hydrateRoot=Xs.hydrateRoot;class Dn{constructor(){var t;if(Dn.instance)return Dn.instance;this.config={apiUrl:"https://vipton-vipton.up.railway.app/api",authEndpoint:"/auth/telegram",verifyEndpoint:"/auth/verify",refreshEndpoint:"/auth/refresh",profileEndpoint:"/auth/profile",vipStatusEndpoint:"/auth/vip-status",autoRefresh:!0,refreshThreshold:3e5,maxRetries:3,retryDelay:1e3},this.state={isAuthenticated:!1,isAuthenticating:!1,authError:null,initPromise:null,refreshPromise:null,refreshTimeout:null,user:null,token:null},this.telegram=(t=window.Telegram)==null?void 0:t.WebApp,Dn.instance=this}async init(){if(this.state.initPromise)return this.state.initPromise;this.state.initPromise=this._performInit();try{return await this.state.initPromise}catch(t){throw this.state.initPromise=null,t}}async _performInit(){var t;console.log("🔐 Initializing VipTon Auth Service...");try{const n=localStorage.getItem("vipton_token"),r=localStorage.getItem("vipton_user");if(n&&r){if(console.log("📦 Found saved session"),await this.verifyToken(n))return this.state.token=n,this.state.user=JSON.parse(r),this.state.isAuthenticated=!0,!0;console.log("⚠️ Saved token is invalid"),this.clearSession()}return(t=this.telegram)!=null&&t.initData?(console.log("📱 Telegram initData available"),await this.authenticate()):(console.log("❌ No authentication data available"),!1)}catch(n){return console.error("❌ Auth init failed:",n),this.handleAuthError(n),!1}}async authenticate(){var t;if(this.state.isAuthenticating)return console.log("⏳ Authentication already in progress"),!1;if(!((t=this.telegram)!=null&&t.initData))throw new Error("No Telegram data available");this.state.isAuthenticating=!0,this.state.authError=null;try{console.log("🚀 Authenticating with VipTon...");const n=await fetch(`${this.config.apiUrl}${this.config.authEndpoint}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({initData:this.telegram.initData})}),r=await n.json();if(!n.ok||!r.success)throw new Error(r.error||"Authentication failed");return this.state.token=r.data.token,this.state.user=r.data.user,this.state.isAuthenticated=!0,localStorage.setItem("vipton_token",r.data.token),localStorage.setItem("vipton_user",JSON.stringify(r.data.user)),this.config.autoRefresh&&r.data.expires_in&&this.scheduleTokenRefresh(r.data.expires_in),console.log("✅ VipTon authentication successful"),!0}catch(n){throw console.error("❌ Authentication failed:",n),this.handleAuthError(n),n}finally{this.state.isAuthenticating=!1}}async verifyToken(t){var n;try{const r=await fetch(`${this.config.apiUrl}${this.config.verifyEndpoint}`,{method:"GET",headers:{Authorization:`Bearer ${t}`,Accept:"application/json"}});if(!r.ok)return!1;const i=await r.json();return(n=i.data)!=null&&n.user&&(this.state.user=i.data.user,localStorage.setItem("vipton_user",JSON.stringify(i.data.user))),i.success===!0}catch(r){return console.error("Token verification error:",r),!1}}async getVipStatus(){if(!this.state.token)throw new Error("Not authenticated");try{const t=await fetch(`${this.config.apiUrl}${this.config.vipStatusEndpoint}`,{method:"GET",headers:{Authorization:`Bearer ${this.state.token}`,Accept:"application/json"}}),n=await t.json();if(!t.ok||!n.success)throw new Error(n.error||"Failed to get VIP status");return n.data}catch(t){throw console.error("VIP status error:",t),t}}async updateProfile(t){if(!this.state.token)throw new Error("Not authenticated");try{const n=await fetch(`${this.config.apiUrl}${this.config.profileEndpoint}`,{method:"PUT",headers:{Authorization:`Bearer ${this.state.token}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}),r=await n.json();if(!n.ok||!r.success)throw new Error(r.error||"Profile update failed");return this.state.user=r.data.user,localStorage.setItem("vipton_user",JSON.stringify(r.data.user)),r.data.user}catch(n){throw console.error("Profile update error:",n),n}}async refreshToken(){var t;if(!this.state.token)throw new Error("No token to refresh");try{const n=await fetch(`${this.config.apiUrl}${this.config.refreshEndpoint}`,{method:"POST",headers:{Authorization:`Bearer ${this.state.token}`,"Content-Type":"application/json",Accept:"application/json"}}),r=await n.json();if(!n.ok||!r.success){if((t=this.telegram)!=null&&t.initData)return await this.authenticate();throw new Error(r.error||"Token refresh failed")}return this.state.token=r.data.token,localStorage.setItem("vipton_token",r.data.token),r.data.user&&(this.state.user=r.data.user,localStorage.setItem("vipton_user",JSON.stringify(r.data.user))),r.data.expires_in&&this.scheduleTokenRefresh(r.data.expires_in),r.data.token}catch(n){throw console.error("Token refresh error:",n),n}}scheduleTokenRefresh(t){this.state.refreshTimeout&&clearTimeout(this.state.refreshTimeout);const n=Math.max(t*1e3-this.config.refreshThreshold,6e4);console.log(`⏰ Token refresh scheduled in ${Math.round(n/1e3)}s`),this.state.refreshTimeout=setTimeout(()=>{this.refreshToken().catch(r=>{console.error("Scheduled refresh failed:",r)})},n)}async logout(){console.log("👋 Logging out from VipTon..."),this.state.refreshTimeout&&(clearTimeout(this.state.refreshTimeout),this.state.refreshTimeout=null),this.state.isAuthenticated=!1,this.state.user=null,this.state.token=null,this.state.authError=null,this.clearSession(),console.log("✅ Logged out successfully")}clearSession(){localStorage.removeItem("vipton_token"),localStorage.removeItem("vipton_user")}handleAuthError(t){this.state.authError=t,this.state.isAuthenticated=!1}getUser(){return this.state.user}getToken(){return this.state.token}isAuthenticated(){return this.state.isAuthenticated&&!!this.state.token}getAuthHeaders(){return this.state.token?{Authorization:`Bearer ${this.state.token}`}:{}}}const Ve=new Dn;class Rn{constructor(){if(Rn.instance)return Rn.instance;this.listeners=new Map,this.history=[],this.maxHistorySize=50,this.eventTypes={"auth:start":"Authentication process started","auth:success":"Authentication successful","auth:error":"Authentication error","auth:expired":"Authentication expired","auth:logout":"User logged out","auth:restored":"Session restored from storage","token:set":"Token was set","token:clear":"Token was cleared","token:expired":"Token expired","token:refreshed":"Token was refreshed","token:refresh:start":"Token refresh started","token:refresh:error":"Token refresh failed","user:login":"User logged in","user:logout":"User logged out","user:update":"User data updated","user:sync":"User data synced from another tab","user:profileUpdated":"User profile updated","vip:activated":"VIP status activated","vip:upgraded":"VIP level upgraded","vip:expired":"VIP status expired","vip:statusChanged":"VIP status changed","ton:balanceUpdated":"TON balance updated","ton:transactionCompleted":"TON transaction completed","ton:withdrawRequested":"TON withdrawal requested","permission:granted":"Permission granted","permission:denied":"Permission denied","permission:changed":"Permissions changed","network:online":"Network connection restored","network:offline":"Network connection lost","network:error":"Network error occurred","api:unauthorized":"401 response received","api:forbidden":"403 response received","api:badRequest":"400 response received","api:notFound":"404 response received","api:serverError":"5xx response received","api:rateLimited":"429 response received"},Rn.instance=this}on(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>this.off(t,n)}once(t,n){const r=i=>{n(i),this.off(t,r)};this.on(t,r)}off(t,n){const r=this.listeners.get(t);r&&(r.delete(n),r.size===0&&this.listeners.delete(t))}emit(t,n=null){this.addToHistory(t,n),this.isDevelopment()&&console.log(`📢 VipTon Event: ${t}`,n);const r=this.listeners.get(t);r&&r.forEach(i=>{try{i(n)}catch(l){console.error(`Error in ${t} handler:`,l)}}),window.dispatchEvent(new CustomEvent(`vipton:${t}`,{detail:n}))}waitFor(t,n=3e4){return new Promise((r,i)=>{const l=setTimeout(()=>{this.off(t,o),i(new Error(`Timeout waiting for ${t}`))},n),o=s=>{clearTimeout(l),this.off(t,o),r(s)};this.on(t,o)})}batchEmit(t){t.forEach(({event:n,data:r})=>{this.emit(n,r)})}removeAllListeners(t=null){t?this.listeners.delete(t):this.listeners.clear()}listenerCount(t){const n=this.listeners.get(t);return n?n.size:0}eventNames(){return Array.from(this.listeners.keys())}addToHistory(t,n){this.history.push({event:t,data:n,timestamp:Date.now()}),this.history.length>this.maxHistorySize&&this.history.shift()}getHistory(t=null){return t?this.history.filter(n=>n.event===t):[...this.history]}clearHistory(){this.history=[]}isDevelopment(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname.includes("railway.app")}createVipEmitter(){return{onActivated:t=>this.on("vip:activated",t),onUpgraded:t=>this.on("vip:upgraded",t),onExpired:t=>this.on("vip:expired",t),onStatusChanged:t=>this.on("vip:statusChanged",t),emitActivated:t=>this.emit("vip:activated",t),emitUpgraded:t=>this.emit("vip:upgraded",t),emitExpired:t=>this.emit("vip:expired",t),emitStatusChanged:t=>this.emit("vip:statusChanged",t)}}createTonEmitter(){return{onBalanceUpdated:t=>this.on("ton:balanceUpdated",t),onTransactionCompleted:t=>this.on("ton:transactionCompleted",t),onWithdrawRequested:t=>this.on("ton:withdrawRequested",t),emitBalanceUpdated:t=>this.emit("ton:balanceUpdated",t),emitTransactionCompleted:t=>this.emit("ton:transactionCompleted",t),emitWithdrawRequested:t=>this.emit("ton:withdrawRequested",t)}}debugMode(t=!0){t?(this._debugHandler=(n,r)=>{console.log(`[VipTon Events] ${n}:`,r)},Object.keys(this.eventTypes).forEach(n=>{this.on(n,r=>this._debugHandler(n,r))}),console.log("🔍 VipTon Events Debug Mode Enabled")):this._debugHandler&&(Object.keys(this.eventTypes).forEach(n=>{this.off(n,this._debugHandler)}),this._debugHandler=null,console.log("🔍 VipTon Events Debug Mode Disabled"))}getStats(){const t={totalEvents:this.history.length,eventCounts:{},listeners:{},lastEvent:this.history[this.history.length-1]||null};return this.history.forEach(n=>{t.eventCounts[n.event]=(t.eventCounts[n.event]||0)+1}),this.listeners.forEach((n,r)=>{t.listeners[r]=n.size}),t}}const qe=new Rn;class $f{constructor(){this.token=null,this.tokenExpiry=null,this.tokenPayload=null,this.config={tokenKey:"vipton_token",expiryKey:"vipton_token_expiry",expiryBuffer:3e5,validateOnGet:!0},this.loadToken()}async setToken(t,n=86400){if(!t)throw new Error("Token is required");const r=this.decodeToken(t);if(!r)throw new Error("Invalid token format");const i=Date.now()+n*1e3;this.token=t,this.tokenExpiry=i,this.tokenPayload=r,localStorage.setItem(this.config.tokenKey,t),localStorage.setItem(this.config.expiryKey,i.toString()),console.log("🔑 VipTon token saved, expires in",Math.round(n/60),"minutes")}getToken(){return this.token?this.config.validateOnGet&&!this.isTokenValid()?(console.warn("⚠️ VipTon token expired"),this.clearToken(),null):this.token:null}getTokenPayload(){return!this.token||!this.isTokenValid()?null:this.tokenPayload}getTokenExpiry(){return this.tokenExpiry}getTimeUntilExpiry(){return this.tokenExpiry?this.tokenExpiry-Date.now():-1}isTokenValid(){return!this.token||!this.tokenExpiry?!1:Date.now()<this.tokenExpiry-this.config.expiryBuffer}willExpireSoon(t=3e5){const n=this.getTimeUntilExpiry();return n>0&&n<t}async clearToken(){this.token=null,this.tokenExpiry=null,this.tokenPayload=null,localStorage.removeItem(this.config.tokenKey),localStorage.removeItem(this.config.expiryKey),console.log("🔑 VipTon token cleared")}async loadToken(){try{const t=localStorage.getItem(this.config.tokenKey),n=localStorage.getItem(this.config.expiryKey);if(!t)return!1;const r=this.decodeToken(t);if(!r)return console.warn("⚠️ Invalid stored VipTon token"),await this.clearToken(),!1;const i=n?parseInt(n):null;return!i&&r.exp?this.tokenExpiry=r.exp*1e3:this.tokenExpiry=i||Date.now()+864e5,this.token=t,this.tokenPayload=r,this.isTokenValid()?(console.log("🔑 VipTon token loaded from storage"),!0):(console.warn("⚠️ Stored VipTon token is expired"),await this.clearToken(),!1)}catch(t){return console.error("Failed to load token:",t),!1}}decodeToken(t){try{const n=t.split(".");return n.length!==3?null:JSON.parse(atob(n[1]))}catch(n){return console.error("Failed to decode token:",n),null}}getUserId(){const t=this.getTokenPayload();return(t==null?void 0:t.user_id)||(t==null?void 0:t.id)||(t==null?void 0:t.telegram_id)||null}getVipInfo(){const t=this.getTokenPayload();return{isVip:(t==null?void 0:t.is_vip)||!1,level:(t==null?void 0:t.vip_level)||0}}addTokenToHeaders(t={}){const n=this.getToken();return n?{...t,Authorization:`Bearer ${n}`}:t}getAuthHeader(){const t=this.getToken();return t?`Bearer ${t}`:null}monitorExpiry(t,n=3e5){const r=()=>{this.willExpireSoon(n)&&t()},i=setInterval(r,6e4);return r(),()=>{clearInterval(i)}}exportTokenData(){return{hasToken:!!this.token,isValid:this.isTokenValid(),expiresAt:this.tokenExpiry,timeUntilExpiry:this.getTimeUntilExpiry(),vipInfo:this.getVipInfo(),payload:this.tokenPayload?{...this.tokenPayload,iat:void 0,exp:void 0}:null}}}const Gs=new $f,ac=b.createContext(null),Bf=({children:e})=>{const[t,n]=b.useState({user:null,loading:!0,error:null,isAuthenticated:!1,vipStatus:null,tonBalance:0});b.useEffect(()=>(r(),c(),()=>{g()}),[]);const r=async()=>{try{if(n(v=>({...v,loading:!0,error:null})),await Ve.init()){const v=Ve.getUser(),y=Gs.getVipInfo();n(k=>({...k,user:v,isAuthenticated:!0,vipStatus:y,tonBalance:(v==null?void 0:v.ton_balance)||0,loading:!1})),s()}else n(v=>({...v,loading:!1,isAuthenticated:!1}))}catch(p){console.error("Auth initialization error:",p),n(v=>({...v,loading:!1,error:p.message}))}},i=async()=>{try{if(n(v=>({...v,loading:!0,error:null})),await Ve.authenticate()){const v=Ve.getUser(),y=Gs.getVipInfo();return n(k=>({...k,user:v,isAuthenticated:!0,vipStatus:y,tonBalance:(v==null?void 0:v.ton_balance)||0,loading:!1})),qe.emit("user:login",v),s(),!0}return!1}catch(p){return console.error("Login error:",p),n(v=>({...v,loading:!1,error:p.message})),!1}},l=async()=>{try{await Ve.logout(),n({user:null,loading:!1,error:null,isAuthenticated:!1,vipStatus:null,tonBalance:0}),qe.emit("user:logout")}catch(p){console.error("Logout error:",p)}},o=async p=>{try{const v=await Ve.updateProfile(p);return n(y=>({...y,user:v,tonBalance:(v==null?void 0:v.ton_balance)||0})),qe.emit("user:update",v),v}catch(v){throw console.error("Profile update error:",v),v}},s=async()=>{try{const p=await Ve.getVipStatus();return n(v=>({...v,vipStatus:p})),qe.emit("vip:statusChanged",p),p}catch(p){return console.error("VIP status fetch error:",p),null}},a=b.useCallback(p=>{n(v=>({...v,tonBalance:p,user:v.user?{...v.user,ton_balance:p}:null})),qe.emit("ton:balanceUpdated",{balance:p})},[]),c=()=>{const p=[qe.on("auth:expired",()=>{n(v=>({...v,isAuthenticated:!1,error:"Session expired"}))}),qe.on("user:update",v=>{n(y=>({...y,user:v,tonBalance:(v==null?void 0:v.ton_balance)||0}))}),qe.on("vip:statusChanged",v=>{n(y=>({...y,vipStatus:v}))})];window._viptonAuthUnsubscribers=p},g=()=>{window._viptonAuthUnsubscribers&&(window._viptonAuthUnsubscribers.forEach(p=>p()),delete window._viptonAuthUnsubscribers)},m={user:t.user,loading:t.loading,error:t.error,isAuthenticated:t.isAuthenticated,vipStatus:t.vipStatus,tonBalance:t.tonBalance,login:i,logout:l,updateProfile:o,fetchVipStatus:s,updateTonBalance:a,getToken:()=>Ve.getToken(),getAuthHeaders:()=>Ve.getAuthHeaders(),isVip:()=>{var p;return((p=t.vipStatus)==null?void 0:p.is_vip)||!1},getVipLevel:()=>{var p;return((p=t.vipStatus)==null?void 0:p.vip_level)||0}};return d.jsx(ac.Provider,{value:m,children:e})},wi=()=>{const e=b.useContext(ac);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},Ao=()=>{const{vipStatus:e,fetchVipStatus:t,isVip:n,getVipLevel:r}=wi();return{vipStatus:e,isVip:n(),level:r(),daysLeft:(e==null?void 0:e.days_left)||0,refresh:t}},uc=()=>{const{tonBalance:e,updateTonBalance:t}=wi();return{balance:e,formatted:new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(e||0),update:t}},Hf=({message:e="Initializing VipTon...",showProgress:t=!1,progress:n=0})=>{const[r,i]=b.useState("");return b.useEffect(()=>{const l=setInterval(()=>{i(o=>o.length>=3?"":o+".")},500);return()=>clearInterval(l)},[]),d.jsxs("div",{className:"vipton-loader-container",children:[d.jsx("style",{jsx:!0,children:`
                .vipton-loader-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: #000000;
                    padding: 20px;
                    position: relative;
                    overflow: hidden;
                }
                
                .vipton-loader-bg {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, 
                        rgba(255, 215, 0, 0.03) 0%, 
                        transparent 70%);
                    animation: vipton-pulse 4s ease-in-out infinite;
                }
                
                @keyframes vipton-pulse {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
                
                .vipton-loader-content {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 32px;
                }
                
                .vipton-spinner-wrapper {
                    position: relative;
                    width: 80px;
                    height: 80px;
                }
                
                .vipton-spinner-outer {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    border: 3px solid rgba(255, 215, 0, 0.1);
                }
                
                .vipton-spinner-inner {
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    border: 3px solid transparent;
                    border-top-color: #FFD700;
                    animation: vipton-spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
                }
                
                @keyframes vipton-spin {
                    to { transform: rotate(360deg); }
                }
                
                .vipton-logo {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 24px;
                    font-weight: 800;
                    background: linear-gradient(135deg, #FFD700, #FFED4E, #FFC107);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
                }
                
                .vipton-message {
                    font-size: 18px;
                    color: #FFFFFF;
                    text-align: center;
                    font-weight: 500;
                    letter-spacing: -0.4px;
                    display: flex;
                    align-items: center;
                    gap: 2px;
                }
                
                .vipton-dots {
                    display: inline-block;
                    width: 30px;
                    text-align: left;
                    color: #FFD700;
                    font-weight: bold;
                }
                
                .vipton-progress-container {
                    width: 200px;
                    height: 4px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                    position: relative;
                }
                
                .vipton-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FFD700, #FFED4E);
                    border-radius: 2px;
                    transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                }
                
                .vipton-progress-text {
                    margin-top: 8px;
                    font-size: 14px;
                    color: #8E8E93;
                    font-weight: 500;
                }
                
                /* Premium glow effect */
                .vipton-glow-orb {
                    position: absolute;
                    width: 120px;
                    height: 120px;
                    background: radial-gradient(circle, 
                        rgba(255, 215, 0, 0.3) 0%, 
                        transparent 70%);
                    border-radius: 50%;
                    filter: blur(40px);
                    animation: vipton-float 6s ease-in-out infinite;
                }
                
                .vipton-glow-orb:nth-child(1) {
                    top: -60px;
                    left: -60px;
                    animation-delay: 0s;
                }
                
                .vipton-glow-orb:nth-child(2) {
                    bottom: -60px;
                    right: -60px;
                    animation-delay: 3s;
                }
                
                @keyframes vipton-float {
                    0%, 100% { 
                        transform: translate(0, 0) scale(1); 
                        opacity: 0.5;
                    }
                    50% { 
                        transform: translate(30px, -30px) scale(1.2); 
                        opacity: 0.8;
                    }
                }
                
                /* Responsive */
                @media (max-width: 390px) {
                    .vipton-spinner-wrapper {
                        width: 60px;
                        height: 60px;
                    }
                    
                    .vipton-logo {
                        font-size: 18px;
                    }
                    
                    .vipton-message {
                        font-size: 16px;
                    }
                }
            `}),d.jsx("div",{className:"vipton-loader-bg"}),d.jsx("div",{className:"vipton-glow-orb"}),d.jsx("div",{className:"vipton-glow-orb"}),d.jsxs("div",{className:"vipton-loader-content",children:[d.jsxs("div",{className:"vipton-spinner-wrapper",children:[d.jsx("div",{className:"vipton-spinner-outer"}),d.jsx("div",{className:"vipton-spinner-inner"}),d.jsx("div",{className:"vipton-logo",children:"VT"})]}),d.jsxs("div",{className:"vipton-message",children:[e,d.jsx("span",{className:"vipton-dots",children:r})]}),t&&d.jsxs("div",{children:[d.jsx("div",{className:"vipton-progress-container",children:d.jsx("div",{className:"vipton-progress-fill",style:{width:`${Math.min(100,Math.max(0,n))}%`}})}),d.jsxs("div",{className:"vipton-progress-text",children:[n,"%"]})]})]})]})},Wf=({error:e=null,title:t="Authentication Error",message:n="Failed to authenticate with VipTon",canRetry:r=!0,onRetry:i=null,onClose:l=null})=>{const[o,s]=b.useState(!1),[a,c]=b.useState(!1),g=async()=>{if(i){c(!0);try{await i()}catch(y){console.error("Retry failed:",y)}finally{c(!1)}}},m=()=>{var y,k;l?l():(k=(y=window.Telegram)==null?void 0:y.WebApp)!=null&&k.close&&window.Telegram.WebApp.close()},v=(e==null?void 0:e.code)==="NO_TELEGRAM_DATA"?{icon:"🔒",title:"Telegram Required",message:"Please open VipTon in Telegram to continue"}:(e==null?void 0:e.code)==="NETWORK_ERROR"?{icon:"📡",title:"Connection Error",message:"Unable to connect to VipTon servers. Check your internet connection."}:(e==null?void 0:e.code)==="TOKEN_EXPIRED"?{icon:"⏰",title:"Session Expired",message:"Your session has expired. Please login again."}:{icon:"⚠️",title:t,message:n};return d.jsxs("div",{className:"vipton-error-container",children:[d.jsx("style",{jsx:!0,children:`
                .vipton-error-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    background: #000000;
                    padding: 20px;
                    position: relative;
                }
                
                .vipton-error-card {
                    background: rgba(28, 28, 30, 0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 215, 0, 0.1);
                    border-radius: 20px;
                    padding: 32px;
                    max-width: 400px;
                    width: 100%;
                    text-align: center;
                    box-shadow: 0 8px 40px rgba(255, 215, 0, 0.1);
                    position: relative;
                    overflow: hidden;
                }
                
                .vipton-error-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: linear-gradient(90deg, 
                        transparent 0%, 
                        #FF3B30 50%, 
                        transparent 100%);
                }
                
                .vipton-error-icon {
                    width: 80px;
                    height: 80px;
                    margin: 0 auto 24px;
                    background: rgba(255, 59, 48, 0.1);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 40px;
                    position: relative;
                }
                
                .vipton-error-icon::after {
                    content: '';
                    position: absolute;
                    inset: -10px;
                    border-radius: 50%;
                    background: radial-gradient(circle,
                        rgba(255, 59, 48, 0.2) 0%,
                        transparent 70%);
                    animation: vipton-error-pulse 2s ease-in-out infinite;
                }
                
                @keyframes vipton-error-pulse {
                    0%, 100% { 
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    50% { 
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .vipton-error-title {
                    font-size: 22px;
                    font-weight: 600;
                    color: #FFFFFF;
                    margin: 0 0 12px;
                    letter-spacing: -0.4px;
                }
                
                .vipton-error-message {
                    font-size: 16px;
                    color: #8E8E93;
                    line-height: 1.5;
                    margin: 0 0 32px;
                }
                
                .vipton-error-buttons {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                
                .vipton-btn {
                    padding: 14px 28px;
                    border-radius: 14px;
                    font-size: 16px;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    letter-spacing: -0.4px;
                    position: relative;
                    overflow: hidden;
                }
                
                .vipton-btn-retry {
                    background: linear-gradient(135deg, #FFD700, #FFED4E, #FFC107);
                    color: #000000;
                    min-width: 140px;
                }
                
                .vipton-btn-retry:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
                }
                
                .vipton-btn-retry:active:not(:disabled) {
                    transform: translateY(0);
                }
                
                .vipton-btn-retry:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                .vipton-btn-close {
                    background: #2C2C2E;
                    color: #8E8E93;
                    border: 1px solid rgba(255, 215, 0, 0.1);
                }
                
                .vipton-btn-close:hover {
                    background: #3A3A3C;
                    border-color: rgba(255, 215, 0, 0.2);
                    color: #FFFFFF;
                }
                
                .vipton-error-details-btn {
                    margin-top: 16px;
                    background: none;
                    border: none;
                    color: #FFD700;
                    font-size: 14px;
                    cursor: pointer;
                    padding: 8px;
                    transition: opacity 0.2s;
                }
                
                .vipton-error-details-btn:hover {
                    opacity: 0.8;
                }
                
                .vipton-error-details {
                    margin-top: 16px;
                    padding: 16px;
                    background: rgba(0, 0, 0, 0.3);
                    border-radius: 12px;
                    font-family: 'SF Mono', monospace;
                    font-size: 12px;
                    color: #8E8E93;
                    text-align: left;
                    word-break: break-word;
                    max-height: 200px;
                    overflow-y: auto;
                }
                
                .vipton-spinner {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    border: 2px solid rgba(0, 0, 0, 0.2);
                    border-top-color: #000000;
                    border-radius: 50%;
                    animation: vipton-spin 0.8s linear infinite;
                    margin-right: 8px;
                }
                
                @keyframes vipton-spin {
                    to { transform: rotate(360deg); }
                }
                
                /* Responsive */
                @media (max-width: 390px) {
                    .vipton-error-card {
                        padding: 24px;
                    }
                    
                    .vipton-error-title {
                        font-size: 20px;
                    }
                    
                    .vipton-error-message {
                        font-size: 15px;
                    }
                    
                    .vipton-btn {
                        padding: 12px 24px;
                        font-size: 15px;
                    }
                }
            `}),d.jsxs("div",{className:"vipton-error-card",children:[d.jsx("div",{className:"vipton-error-icon",children:v.icon}),d.jsx("h2",{className:"vipton-error-title",children:v.title}),d.jsx("p",{className:"vipton-error-message",children:v.message}),d.jsxs("div",{className:"vipton-error-buttons",children:[r&&i&&d.jsxs("button",{className:"vipton-btn vipton-btn-retry",onClick:g,disabled:a,children:[a&&d.jsx("span",{className:"vipton-spinner"}),a?"Retrying...":"Try Again"]}),d.jsx("button",{className:"vipton-btn vipton-btn-close",onClick:m,children:"Close"})]}),e&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{className:"vipton-error-details-btn",onClick:()=>s(!o),children:[o?"Hide":"Show"," Details"]}),o&&d.jsx("pre",{className:"vipton-error-details",children:JSON.stringify(e,null,2)})]})]})]})},cc=({variant:e="default",showVip:t=!0,showBalance:n=!0,showLogout:r=!0,onProfileClick:i=null})=>{const{user:l,logout:o,isAuthenticated:s}=wi(),{isVip:a,level:c}=Ao(),{formatted:g}=uc(),[m,p]=b.useState(!1),v=async()=>{if(window.confirm("Are you sure you want to logout?")){p(!0);try{await o()}finally{p(!1)}}},y=()=>{i&&i(l)},k=(l==null?void 0:l.first_name)||(l==null?void 0:l.username)||"Guest",D=k.charAt(0).toUpperCase();return!s||!l?d.jsxs("div",{className:"vipton-user-badge vipton-guest",children:[d.jsx("style",{jsx:!0,children:`
                    .vipton-guest {
                        display: inline-flex;
                        align-items: center;
                        gap: 12px;
                        padding: 8px 16px;
                        background: rgba(28, 28, 30, 0.8);
                        border: 1px solid rgba(255, 215, 0, 0.1);
                        border-radius: 24px;
                        color: #8E8E93;
                        font-size: 16px;
                        font-weight: 500;
                    }
                `}),d.jsx("span",{children:"👤"}),d.jsx("span",{children:"Guest"})]}):e==="compact"?d.jsxs("div",{className:"vipton-user-badge-compact",onClick:y,children:[d.jsx("style",{jsx:!0,children:`
                    .vipton-user-badge-compact {
                        position: relative;
                        cursor: pointer;
                        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }
                    
                    .vipton-user-badge-compact:hover {
                        transform: scale(1.05);
                    }
                    
                    .vipton-avatar-compact {
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                        overflow: hidden;
                        position: relative;
                        background: linear-gradient(135deg, #2C2C2E, #1C1C1E);
                        border: 2px solid rgba(255, 215, 0, 0.2);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .vipton-avatar-compact img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .vipton-avatar-letter {
                        font-size: 18px;
                        font-weight: 600;
                        color: #FFD700;
                    }
                    
                    .vipton-vip-indicator {
                        position: absolute;
                        bottom: -2px;
                        right: -2px;
                        width: 18px;
                        height: 18px;
                        background: linear-gradient(135deg, #FFD700, #FFC107);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 2px solid #000000;
                        font-size: 10px;
                        font-weight: bold;
                        color: #000000;
                    }
                `}),d.jsxs("div",{className:"vipton-avatar-compact",children:[l.photo_url?d.jsx("img",{src:l.photo_url,alt:k}):d.jsx("span",{className:"vipton-avatar-letter",children:D}),t&&a&&d.jsx("div",{className:"vipton-vip-indicator",children:c})]})]}):e==="full"?d.jsxs("div",{className:"vipton-user-badge-full",children:[d.jsx("style",{jsx:!0,children:`
                    .vipton-user-badge-full {
                        background: rgba(28, 28, 30, 0.9);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                        border: 1px solid rgba(255, 215, 0, 0.1);
                        border-radius: 20px;
                        padding: 24px;
                        width: 100%;
                        max-width: 400px;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                    }
                    
                    .vipton-user-header {
                        display: flex;
                        gap: 16px;
                        margin-bottom: 20px;
                    }
                    
                    .vipton-avatar-large {
                        width: 72px;
                        height: 72px;
                        border-radius: 50%;
                        overflow: hidden;
                        background: linear-gradient(135deg, #2C2C2E, #1C1C1E);
                        border: 3px solid rgba(255, 215, 0, 0.3);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                    }
                    
                    .vipton-avatar-large img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                    
                    .vipton-avatar-letter-large {
                        font-size: 32px;
                        font-weight: 600;
                        color: #FFD700;
                    }
                    
                    .vipton-user-info {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    
                    .vipton-user-name {
                        font-size: 20px;
                        font-weight: 600;
                        color: #FFFFFF;
                        margin: 0 0 4px;
                    }
                    
                    .vipton-user-username {
                        font-size: 14px;
                        color: #8E8E93;
                        margin: 0;
                    }
                    
                    .vipton-vip-badge-full {
                        display: inline-flex;
                        align-items: center;
                        gap: 6px;
                        padding: 4px 12px;
                        background: linear-gradient(135deg, #FFD700, #FFC107);
                        border-radius: 12px;
                        font-size: 12px;
                        font-weight: 600;
                        color: #000000;
                        margin-top: 8px;
                    }
                    
                    .vipton-stats-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 12px;
                        margin-bottom: 20px;
                    }
                    
                    .vipton-stat-card {
                        background: rgba(0, 0, 0, 0.3);
                        border-radius: 12px;
                        padding: 16px;
                        text-align: center;
                    }
                    
                    .vipton-stat-label {
                        font-size: 12px;
                        color: #8E8E93;
                        margin-bottom: 4px;
                    }
                    
                    .vipton-stat-value {
                        font-size: 20px;
                        font-weight: 600;
                        color: #FFD700;
                    }
                    
                    .vipton-actions {
                        display: flex;
                        gap: 12px;
                    }
                    
                    .vipton-btn {
                        flex: 1;
                        padding: 14px;
                        border: none;
                        border-radius: 14px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                    }
                    
                    .vipton-btn-primary {
                        background: linear-gradient(135deg, #FFD700, #FFC107);
                        color: #000000;
                    }
                    
                    .vipton-btn-primary:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 24px rgba(255, 215, 0, 0.3);
                    }
                    
                    .vipton-btn-secondary {
                        background: #2C2C2E;
                        color: #8E8E93;
                        border: 1px solid rgba(255, 215, 0, 0.1);
                    }
                    
                    .vipton-btn-secondary:hover {
                        background: #3A3A3C;
                        color: #FFFFFF;
                        border-color: rgba(255, 215, 0, 0.2);
                    }
                    
                    .vipton-btn:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                    }
                `}),d.jsxs("div",{className:"vipton-user-header",children:[d.jsx("div",{className:"vipton-avatar-large",children:l.photo_url?d.jsx("img",{src:l.photo_url,alt:k}):d.jsx("span",{className:"vipton-avatar-letter-large",children:D})}),d.jsxs("div",{className:"vipton-user-info",children:[d.jsx("h3",{className:"vipton-user-name",children:k}),l.username&&d.jsxs("p",{className:"vipton-user-username",children:["@",l.username]}),t&&a&&d.jsxs("div",{className:"vipton-vip-badge-full",children:["⭐ VIP Level ",c]})]})]}),d.jsxs("div",{className:"vipton-stats-grid",children:[d.jsxs("div",{className:"vipton-stat-card",children:[d.jsx("div",{className:"vipton-stat-label",children:"TON Balance"}),d.jsx("div",{className:"vipton-stat-value",children:g})]}),d.jsxs("div",{className:"vipton-stat-card",children:[d.jsx("div",{className:"vipton-stat-label",children:"VIP Status"}),d.jsx("div",{className:"vipton-stat-value",children:a?`Level ${c}`:"None"})]})]}),d.jsxs("div",{className:"vipton-actions",children:[d.jsx("button",{className:"vipton-btn vipton-btn-primary",onClick:y,children:"Profile"}),r&&d.jsx("button",{className:"vipton-btn vipton-btn-secondary",onClick:v,disabled:m,children:m?"Logging out...":"Logout"})]})]}):d.jsxs("div",{className:"vipton-user-badge-default",children:[d.jsx("style",{jsx:!0,children:`
                .vipton-user-badge-default {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    padding: 8px 12px 8px 8px;
                    background: rgba(28, 28, 30, 0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 215, 0, 0.1);
                    border-radius: 28px;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                
                .vipton-user-badge-default:hover {
                    background: rgba(28, 28, 30, 1);
                    border-color: rgba(255, 215, 0, 0.2);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 20px rgba(255, 215, 0, 0.1);
                }
                
                .vipton-badge-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    flex: 1;
                }
                
                .vipton-avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: linear-gradient(135deg, #2C2C2E, #1C1C1E);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255, 215, 0, 0.2);
                }
                
                .vipton-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .vipton-avatar-letter {
                    font-size: 16px;
                    font-weight: 600;
                    color: #FFD700;
                }
                
                .vipton-badge-info {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                
                .vipton-badge-name {
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFFFFF;
                    line-height: 1;
                }
                
                .vipton-badge-meta {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 4px;
                }
                
                .vipton-badge-balance {
                    font-size: 12px;
                    color: #FFD700;
                    font-weight: 500;
                }
                
                .vipton-vip-indicator-small {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    padding: 2px 6px;
                    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 193, 7, 0.2));
                    border-radius: 6px;
                    font-size: 10px;
                    font-weight: 600;
                    color: #FFD700;
                }
                
                .vipton-logout-icon {
                    width: 20px;
                    height: 20px;
                    color: #8E8E93;
                    transition: color 0.2s;
                    cursor: pointer;
                }
                
                .vipton-logout-icon:hover {
                    color: #FF3B30;
                }
            `}),d.jsxs("div",{className:"vipton-badge-left",onClick:y,children:[d.jsx("div",{className:"vipton-avatar",children:l.photo_url?d.jsx("img",{src:l.photo_url,alt:k}):d.jsx("span",{className:"vipton-avatar-letter",children:D})}),d.jsxs("div",{className:"vipton-badge-info",children:[d.jsx("span",{className:"vipton-badge-name",children:k}),d.jsxs("div",{className:"vipton-badge-meta",children:[n&&d.jsxs("span",{className:"vipton-badge-balance",children:[g," TON"]}),t&&a&&d.jsxs("span",{className:"vipton-vip-indicator-small",children:["VIP ",c]})]})]})]}),r&&d.jsx("svg",{className:"vipton-logout-icon",onClick:f=>{f.stopPropagation(),v()},viewBox:"0 0 24 24",fill:"currentColor",children:d.jsx("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})})]})},Qf=({size:e="medium",showLevel:t=!0,showProgress:n=!1,showExpiry:r=!1,animated:i=!0,onClick:l=null})=>{const{isVip:o,level:s,daysLeft:a,vipStatus:c,refresh:g}=Ao(),[m,p]=b.useState(!1);b.useEffect(()=>{o&&g()},[]);const v=async()=>{l?l():(p(!0),await g(),setTimeout(()=>p(!1),1e3))};if(!o)return null;const y={small:{badge:24,icon:12,font:10},medium:{badge:32,icon:16,font:12},large:{badge:48,icon:24,font:14},xl:{badge:64,icon:32,font:16}},k=y[e]||y.medium,D=(c==null?void 0:c.progress_to_next)||0,f=()=>{switch(s){case 1:return"linear-gradient(135deg, #C0C0C0, #E5E4E2)";case 2:return"linear-gradient(135deg, #FFD700, #FFED4E)";case 3:return"linear-gradient(135deg, #E5E4E2, #FAFAFA)";default:return"linear-gradient(135deg, #FFD700, #FFC107)"}};return d.jsxs("div",{className:`vipton-vip-badge vipton-vip-badge-${e}`,onClick:v,style:{cursor:l||!m?"pointer":"wait"},children:[d.jsx("style",{jsx:!0,children:`
                .vipton-vip-badge {
                    display: inline-block;
                    position: relative;
                }
                
                .vipton-badge-container {
                    position: relative;
                    width: ${k.badge}px;
                    height: ${k.badge}px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .vipton-badge-circle {
                    position: absolute;
                    inset: 0;
                    background: ${f()};
                    border-radius: 50%;
                    box-shadow: 
                        0 2px 8px rgba(255, 215, 0, 0.3),
                        inset 0 1px 2px rgba(255, 255, 255, 0.5);
                    ${i?"animation: vipton-badge-pulse 2s ease-in-out infinite;":""}
                }
                
                @keyframes vipton-badge-pulse {
                    0%, 100% { 
                        transform: scale(1);
                        box-shadow: 
                            0 2px 8px rgba(255, 215, 0, 0.3),
                            inset 0 1px 2px rgba(255, 255, 255, 0.5);
                    }
                    50% { 
                        transform: scale(1.05);
                        box-shadow: 
                            0 4px 16px rgba(255, 215, 0, 0.5),
                            inset 0 1px 2px rgba(255, 255, 255, 0.5);
                    }
                }
                
                .vipton-badge-icon {
                    position: relative;
                    z-index: 1;
                    font-size: ${k.icon}px;
                    ${m?"animation: vipton-spin 1s linear infinite;":""}
                }
                
                @keyframes vipton-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                .vipton-badge-level {
                    position: absolute;
                    bottom: -6px;
                    right: -6px;
                    background: #000000;
                    border: 2px solid ${f().split(",")[0].replace("linear-gradient(135deg","")};
                    border-radius: 8px;
                    padding: 2px 6px;
                    font-size: ${k.font}px;
                    font-weight: 700;
                    color: #FFD700;
                    min-width: 20px;
                    text-align: center;
                    z-index: 2;
                }
                
                .vipton-vip-tooltip {
                    position: absolute;
                    bottom: calc(100% + 8px);
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(28, 28, 30, 0.95);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 215, 0, 0.2);
                    border-radius: 12px;
                    padding: 12px;
                    min-width: 180px;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    pointer-events: none;
                    z-index: 1000;
                }
                
                .vipton-vip-badge:hover .vipton-vip-tooltip {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-50%) translateY(-4px);
                }
                
                .vipton-vip-tooltip::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    border: 6px solid transparent;
                    border-top-color: rgba(28, 28, 30, 0.95);
                }
                
                .vipton-tooltip-title {
                    font-size: 12px;
                    font-weight: 600;
                    color: #FFD700;
                    margin-bottom: 6px;
                }
                
                .vipton-tooltip-info {
                    font-size: 11px;
                    color: #8E8E93;
                    line-height: 1.4;
                }
                
                .vipton-tooltip-progress {
                    margin-top: 8px;
                    height: 4px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 2px;
                    overflow: hidden;
                }
                
                .vipton-tooltip-progress-fill {
                    height: 100%;
                    background: linear-gradient(90deg, #FFD700, #FFED4E);
                    border-radius: 2px;
                    transition: width 0.3s ease;
                }
                
                /* Size variations */
                .vipton-vip-badge-small .vipton-vip-tooltip {
                    min-width: 140px;
                    padding: 8px;
                }
                
                .vipton-vip-badge-xl {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                }
                
                .vipton-vip-badge-xl .vipton-badge-label {
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFD700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                
                /* Glow effect for high levels */
                .vipton-badge-glow {
                    position: absolute;
                    inset: -8px;
                    background: radial-gradient(circle, 
                        rgba(255, 215, 0, 0.3) 0%, 
                        transparent 70%);
                    border-radius: 50%;
                    filter: blur(8px);
                    opacity: 0;
                    animation: vipton-glow-fade 2s ease-in-out infinite;
                    pointer-events: none;
                }
                
                @keyframes vipton-glow-fade {
                    0%, 100% { opacity: 0; }
                    50% { opacity: 0.8; }
                }
            `}),d.jsxs("div",{className:"vipton-badge-container",children:[s>=3&&i&&d.jsx("div",{className:"vipton-badge-glow"}),d.jsx("div",{className:"vipton-badge-circle"}),d.jsx("div",{className:"vipton-badge-icon",children:s>=3?"💎":s===2?"👑":"⭐"}),t&&d.jsx("div",{className:"vipton-badge-level",children:s}),(n||r)&&d.jsxs("div",{className:"vipton-vip-tooltip",children:[d.jsxs("div",{className:"vipton-tooltip-title",children:["VIP Level ",s]}),d.jsxs("div",{className:"vipton-tooltip-info",children:[r&&a>0&&d.jsxs("div",{children:[a," days remaining"]}),n&&D>0&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{children:["Progress to Level ",s+1]}),d.jsx("div",{className:"vipton-tooltip-progress",children:d.jsx("div",{className:"vipton-tooltip-progress-fill",style:{width:`${Math.min(100,D)}%`}})})]})]})]})]}),e==="xl"&&d.jsx("div",{className:"vipton-badge-label",children:"VIP Member"})]})},Kf=()=>{const{user:e,loading:t,error:n,isAuthenticated:r,login:i,logout:l}=wi(),{isVip:o,level:s}=Ao(),{formatted:a}=uc(),[c,g]=b.useState("home"),[m,p]=b.useState(!1);return t?d.jsx(Hf,{message:"Loading VipTon...",showProgress:!1}):n&&!r?d.jsx(Wf,{error:{message:n},title:"Connection Error",message:n,canRetry:!0,onRetry:i}):r?d.jsxs("div",{className:"vipton-container",children:[d.jsx("style",{jsx:!0,children:`
                .vipton-container {
                    min-height: 100vh;
                    background: #000000;
                    display: flex;
                    flex-direction: column;
                    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
                }
                
                /* Header */
                .vipton-header {
                    background: rgba(28, 28, 30, 0.95);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
                    padding: 12px 16px;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }
                
                .vipton-header-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                
                .vipton-header-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .vipton-logo {
                    width: 36px;
                    height: 36px;
                    background: linear-gradient(135deg, #FFD700, #FFC107);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                    font-size: 16px;
                    color: #000000;
                }
                
                .vipton-balance {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 12px;
                    background: rgba(255, 215, 0, 0.1);
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                    color: #FFD700;
                }
                
                /* Main Content */
                .vipton-main {
                    flex: 1;
                    padding: 20px;
                    overflow-y: auto;
                    padding-bottom: 80px;
                }
                
                /* Bottom Navigation */
                .vipton-nav {
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(28, 28, 30, 0.98);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-top: 1px solid rgba(255, 215, 0, 0.1);
                    padding: 8px 0 env(safe-area-inset-bottom, 8px);
                    z-index: 100;
                }
                
                .vipton-nav-items {
                    display: flex;
                    justify-content: space-around;
                }
                
                .vipton-nav-item {
                    flex: 1;
                    padding: 8px;
                    background: none;
                    border: none;
                    color: #8E8E93;
                    cursor: pointer;
                    transition: all 0.2s;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    -webkit-tap-highlight-color: transparent;
                }
                
                .vipton-nav-item.active {
                    color: #FFD700;
                }
                
                .vipton-nav-icon {
                    font-size: 24px;
                }
                
                .vipton-nav-label {
                    font-size: 11px;
                    font-weight: 600;
                }
            `}),d.jsx("header",{className:"vipton-header",children:d.jsxs("div",{className:"vipton-header-content",children:[d.jsxs("div",{className:"vipton-header-left",children:[d.jsx("div",{className:"vipton-logo",children:"VT"}),d.jsxs("div",{className:"vipton-balance",children:["💰 ",a," TON"]}),o&&d.jsx(Qf,{size:"small",showLevel:!0})]}),d.jsx(cc,{variant:"compact"})]})}),d.jsxs("main",{className:"vipton-main",children:[c==="home"&&d.jsx(Xf,{user:e,tonBalance:a,vipLevel:s,isVip:o,miningActive:m,onStartMining:()=>p(!0)}),c==="mining"&&d.jsx(Gf,{miningActive:m,setMiningActive:p}),c==="tasks"&&d.jsx(Zf,{}),c==="referrals"&&d.jsx(Jf,{user:e}),c==="profile"&&d.jsx(qf,{user:e,onLogout:l})]}),d.jsx("nav",{className:"vipton-nav",children:d.jsx("div",{className:"vipton-nav-items",children:[{id:"home",icon:"🏠",label:"Home"},{id:"mining",icon:"⛏️",label:"Mining"},{id:"tasks",icon:"📋",label:"Tasks"},{id:"referrals",icon:"👥",label:"Referrals"},{id:"profile",icon:"👤",label:"Profile"}].map(v=>d.jsxs("button",{className:`vipton-nav-item ${c===v.id?"active":""}`,onClick:()=>g(v.id),children:[d.jsx("span",{className:"vipton-nav-icon",children:v.icon}),d.jsx("span",{className:"vipton-nav-label",children:v.label})]},v.id))})})]}):d.jsx(Yf,{onLogin:i})},Yf=({onLogin:e})=>d.jsxs("div",{className:"vipton-welcome",children:[d.jsx("style",{jsx:!0,children:`
            .vipton-welcome {
                min-height: 100vh;
                background: #000000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .vipton-bg-gradient {
                position: absolute;
                inset: 0;
                background: radial-gradient(circle at center top, 
                    rgba(255, 215, 0, 0.1) 0%, 
                    transparent 50%);
                pointer-events: none;
            }
            
            .vipton-welcome-content {
                position: relative;
                z-index: 1;
                max-width: 400px;
                width: 100%;
            }
            
            .vipton-logo-container {
                width: 120px;
                height: 120px;
                margin: 0 auto 32px;
                background: linear-gradient(135deg, #FFD700, #FFC107);
                border-radius: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
                font-weight: 800;
                color: #000000;
                box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
                animation: vipton-float 3s ease-in-out infinite;
            }
            
            @keyframes vipton-float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            .vipton-welcome-title {
                font-size: 36px;
                font-weight: 700;
                color: #FFFFFF;
                margin: 0 0 12px;
                letter-spacing: -1px;
            }
            
            .vipton-welcome-subtitle {
                font-size: 18px;
                color: #8E8E93;
                margin: 0 0 48px;
                line-height: 1.5;
            }
            
            .vipton-auth-btn {
                width: 100%;
                padding: 18px;
                background: linear-gradient(135deg, #FFD700, #FFED4E, #FFC107);
                color: #000000;
                border: none;
                border-radius: 16px;
                font-size: 18px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                box-shadow: 0 4px 24px rgba(255, 215, 0, 0.3);
            }
            
            .vipton-auth-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 32px rgba(255, 215, 0, 0.5);
            }
            
            .vipton-auth-btn:active {
                transform: translateY(0);
            }
            
            .vipton-features {
                margin-top: 48px;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }
            
            .vipton-feature {
                text-align: center;
            }
            
            .vipton-feature-icon {
                font-size: 32px;
                margin-bottom: 8px;
            }
            
            .vipton-feature-text {
                font-size: 12px;
                color: #8E8E93;
            }
        `}),d.jsx("div",{className:"vipton-bg-gradient"}),d.jsxs("div",{className:"vipton-welcome-content",children:[d.jsx("div",{className:"vipton-logo-container",children:"VT"}),d.jsx("h1",{className:"vipton-welcome-title",children:"VipTon"}),d.jsx("p",{className:"vipton-welcome-subtitle",children:"Premium TON Mining Platform"}),d.jsx("button",{className:"vipton-auth-btn",onClick:e,children:"Login with Telegram"}),d.jsxs("div",{className:"vipton-features",children:[d.jsxs("div",{className:"vipton-feature",children:[d.jsx("div",{className:"vipton-feature-icon",children:"💰"}),d.jsx("div",{className:"vipton-feature-text",children:"Earn TON"})]}),d.jsxs("div",{className:"vipton-feature",children:[d.jsx("div",{className:"vipton-feature-icon",children:"👑"}),d.jsx("div",{className:"vipton-feature-text",children:"VIP Benefits"})]}),d.jsxs("div",{className:"vipton-feature",children:[d.jsx("div",{className:"vipton-feature-icon",children:"🚀"}),d.jsx("div",{className:"vipton-feature-text",children:"Fast Mining"})]})]})]})]}),Xf=({user:e,tonBalance:t,vipLevel:n,isVip:r,miningActive:i,onStartMining:l})=>d.jsxs("div",{className:"vipton-home",children:[d.jsx("style",{jsx:!0,children:`
            .vipton-welcome-user {
                font-size: 28px;
                font-weight: 700;
                color: #FFFFFF;
                margin: 0 0 24px;
            }
            
            .vipton-stats-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
                margin-bottom: 32px;
            }
            
            .vipton-stat-card {
                background: rgba(28, 28, 30, 0.9);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                position: relative;
                overflow: hidden;
            }
            
            .vipton-stat-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg, 
                    transparent, rgba(255, 215, 0, 0.5), transparent);
            }
            
            .vipton-stat-icon {
                font-size: 32px;
                margin-bottom: 12px;
            }
            
            .vipton-stat-value {
                font-size: 24px;
                font-weight: 700;
                color: #FFD700;
                margin-bottom: 4px;
            }
            
            .vipton-stat-label {
                font-size: 14px;
                color: #8E8E93;
            }
            
            .vipton-action-buttons {
                display: grid;
                gap: 12px;
            }
            
            .vipton-action-btn {
                padding: 16px;
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 14px;
                color: #FFFFFF;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }
            
            .vipton-action-btn:hover {
                background: rgba(255, 215, 0, 0.1);
                border-color: rgba(255, 215, 0, 0.3);
                transform: translateY(-2px);
            }
            
            .vipton-action-btn.primary {
                background: linear-gradient(135deg, #FFD700, #FFC107);
                color: #000000;
                border: none;
            }
            
            .vipton-action-btn.mining-active {
                background: linear-gradient(135deg, #10B981, #059669);
                animation: pulse 2s infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.8; }
            }
        `}),d.jsxs("h1",{className:"vipton-welcome-user",children:["Welcome, ",(e==null?void 0:e.first_name)||"User","! 👋"]}),d.jsxs("div",{className:"vipton-stats-grid",children:[d.jsxs("div",{className:"vipton-stat-card",children:[d.jsx("div",{className:"vipton-stat-icon",children:"💰"}),d.jsx("div",{className:"vipton-stat-value",children:t}),d.jsx("div",{className:"vipton-stat-label",children:"TON Balance"})]}),d.jsxs("div",{className:"vipton-stat-card",children:[d.jsx("div",{className:"vipton-stat-icon",children:"👑"}),d.jsx("div",{className:"vipton-stat-value",children:r?`Level ${n}`:"None"}),d.jsx("div",{className:"vipton-stat-label",children:"VIP Status"})]}),d.jsxs("div",{className:"vipton-stat-card",children:[d.jsx("div",{className:"vipton-stat-icon",children:"👥"}),d.jsx("div",{className:"vipton-stat-value",children:(e==null?void 0:e.total_referrals)||0}),d.jsx("div",{className:"vipton-stat-label",children:"Referrals"})]}),d.jsxs("div",{className:"vipton-stat-card",children:[d.jsx("div",{className:"vipton-stat-icon",children:"🚀"}),d.jsx("div",{className:"vipton-stat-value",children:(e==null?void 0:e.total_earned)||0}),d.jsx("div",{className:"vipton-stat-label",children:"Total Earned"})]})]}),d.jsxs("div",{className:"vipton-action-buttons",children:[d.jsx("button",{className:`vipton-action-btn primary ${i?"mining-active":""}`,onClick:l,children:i?"⛏️ Mining Active...":"⛏️ Start Mining"}),d.jsx("button",{className:"vipton-action-btn",children:"🎁 Daily Reward"}),d.jsx("button",{className:"vipton-action-btn",children:"📊 View Tasks"})]})]}),Gf=({miningActive:e,setMiningActive:t})=>d.jsxs("div",{style:{padding:20,color:"#fff"},children:[d.jsx("h2",{children:"Mining"}),d.jsxs("p",{children:["Mining status: ",e?"Active":"Inactive"]}),d.jsx("button",{onClick:()=>t(!e),style:{padding:10,background:"#FFD700",color:"#000"},children:e?"Stop Mining":"Start Mining"})]}),Zf=()=>d.jsxs("div",{style:{padding:20,color:"#fff"},children:[d.jsx("h2",{children:"Tasks"}),d.jsx("p",{children:"Complete tasks to earn more TON"})]}),Jf=({user:e})=>d.jsxs("div",{style:{padding:20,color:"#fff"},children:[d.jsx("h2",{children:"Referrals"}),d.jsxs("p",{children:["Your referral code: ",(e==null?void 0:e.referral_code)||"VIP123"]}),d.jsxs("p",{children:["Total referrals: ",(e==null?void 0:e.total_referrals)||0]})]}),qf=({user:e,onLogout:t})=>d.jsxs("div",{style:{padding:20},children:[d.jsx(cc,{variant:"full"}),d.jsx("button",{style:{marginTop:20,padding:"14px 24px",background:"#2C2C2E",color:"#fff",border:"none",borderRadius:12,fontSize:16,fontWeight:600,cursor:"pointer",width:"100%"},onClick:t,children:"Logout"})]});function bf(){return d.jsx(Bf,{children:d.jsx(Kf,{})})}const ep=Zi.createRoot(document.getElementById("root"));ep.render(d.jsx(jc.StrictMode,{children:d.jsx(bf,{})}));window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".vipton-preloader");e&&setTimeout(()=>e.style.display="none",500)});
