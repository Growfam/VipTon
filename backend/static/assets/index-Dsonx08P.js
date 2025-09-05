(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function cc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Gs={exports:{}},li={},Zs={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qn=Symbol.for("react.element"),dc=Symbol.for("react.portal"),fc=Symbol.for("react.fragment"),pc=Symbol.for("react.strict_mode"),hc=Symbol.for("react.profiler"),mc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),vc=Symbol.for("react.forward_ref"),yc=Symbol.for("react.suspense"),xc=Symbol.for("react.memo"),wc=Symbol.for("react.lazy"),Vo=Symbol.iterator;function kc(e){return e===null||typeof e!="object"?null:(e=Vo&&e[Vo]||e["@@iterator"],typeof e=="function"?e:null)}var Js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qs=Object.assign,ea={};function an(e,t,n){this.props=e,this.context=t,this.refs=ea,this.updater=n||Js}an.prototype.isReactComponent={};an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ta(){}ta.prototype=an.prototype;function Hl(e,t,n){this.props=e,this.context=t,this.refs=ea,this.updater=n||Js}var Wl=Hl.prototype=new ta;Wl.constructor=Hl;qs(Wl,an.prototype);Wl.isPureReactComponent=!0;var Bo=Array.isArray,na=Object.prototype.hasOwnProperty,bl={current:null},ra={key:!0,ref:!0,__self:!0,__source:!0};function ia(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)na.call(t,r)&&!ra.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),d=0;d<a;d++)u[d]=arguments[d+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:qn,type:e,key:l,ref:o,props:i,_owner:bl.current}}function Sc(e,t){return{$$typeof:qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===qn}function jc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $o=/\/+/g;function Ei(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jc(""+e.key):t.toString(36)}function jr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case qn:case dc:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ei(o,0):r,Bo(i)?(n="",e!=null&&(n=e.replace($o,"$&/")+"/"),jr(i,t,n,"",function(d){return d})):i!=null&&(Ql(i)&&(i=Sc(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($o,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Bo(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+Ei(l,a);o+=jr(l,t,n,u,i)}else if(u=kc(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+Ei(l,a++),o+=jr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function or(e,t,n){if(e==null)return e;var r=[],i=0;return jr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Ec(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Er={transition:null},Nc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Er,ReactCurrentOwner:bl};function la(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=an;_.Fragment=fc;_.Profiler=hc;_.PureComponent=Hl;_.StrictMode=pc;_.Suspense=yc;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nc;_.act=la;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=qs({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=bl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)na.call(t,u)&&!ra.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var d=0;d<u;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:qn,type:e.type,key:i,ref:l,props:r,_owner:o}};_.createContext=function(e){return e={$$typeof:gc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mc,_context:e},e.Consumer=e};_.createElement=ia;_.createFactory=function(e){var t=ia.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:vc,render:e}};_.isValidElement=Ql;_.lazy=function(e){return{$$typeof:wc,_payload:{_status:-1,_result:e},_init:Ec}};_.memo=function(e,t){return{$$typeof:xc,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=Er.transition;Er.transition={};try{e()}finally{Er.transition=t}};_.unstable_act=la;_.useCallback=function(e,t){return ue.current.useCallback(e,t)};_.useContext=function(e){return ue.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};_.useEffect=function(e,t){return ue.current.useEffect(e,t)};_.useId=function(){return ue.current.useId()};_.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return ue.current.useMemo(e,t)};_.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};_.useRef=function(e){return ue.current.useRef(e)};_.useState=function(e){return ue.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return ue.current.useTransition()};_.version="18.3.1";Zs.exports=_;var G=Zs.exports;const Cc=cc(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fc=G,Tc=Symbol.for("react.element"),zc=Symbol.for("react.fragment"),_c=Object.prototype.hasOwnProperty,Pc=Fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lc={key:!0,ref:!0,__self:!0,__source:!0};function oa(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)_c.call(t,r)&&!Lc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tc,type:e,key:l,ref:o,props:i,_owner:Pc.current}}li.Fragment=zc;li.jsx=oa;li.jsxs=oa;Gs.exports=li;var s=Gs.exports,Gi={},sa={exports:{}},we={},aa={exports:{}},ua={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,T){var z=E.length;E.push(T);e:for(;0<z;){var b=z-1>>>1,Z=E[b];if(0<i(Z,T))E[b]=T,E[z]=Z,z=b;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var T=E[0],z=E.pop();if(z!==T){E[0]=z;e:for(var b=0,Z=E.length,ir=Z>>>1;b<ir;){var xt=2*(b+1)-1,ji=E[xt],wt=xt+1,lr=E[wt];if(0>i(ji,z))wt<Z&&0>i(lr,ji)?(E[b]=lr,E[wt]=z,b=wt):(E[b]=ji,E[xt]=z,b=xt);else if(wt<Z&&0>i(lr,z))E[b]=lr,E[wt]=z,b=wt;else break e}}return T}function i(E,T){var z=E.sortIndex-T.sortIndex;return z!==0?z:E.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],d=[],v=1,g=null,h=3,m=!1,w=!1,k=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(E){for(var T=n(d);T!==null;){if(T.callback===null)r(d);else if(T.startTime<=E)r(d),T.sortIndex=T.expirationTime,t(u,T);else break;T=n(d)}}function y(E){if(k=!1,p(E),!w)if(n(u)!==null)w=!0,ki(S);else{var T=n(d);T!==null&&Si(y,T.startTime-E)}}function S(E,T){w=!1,k&&(k=!1,f(F),F=-1),m=!0;var z=h;try{for(p(T),g=n(u);g!==null&&(!(g.expirationTime>T)||E&&!Te());){var b=g.callback;if(typeof b=="function"){g.callback=null,h=g.priorityLevel;var Z=b(g.expirationTime<=T);T=e.unstable_now(),typeof Z=="function"?g.callback=Z:g===n(u)&&r(u),p(T)}else r(u);g=n(u)}if(g!==null)var ir=!0;else{var xt=n(d);xt!==null&&Si(y,xt.startTime-T),ir=!1}return ir}finally{g=null,h=z,m=!1}}var N=!1,C=null,F=-1,W=5,L=-1;function Te(){return!(e.unstable_now()-L<W)}function dn(){if(C!==null){var E=e.unstable_now();L=E;var T=!0;try{T=C(!0,E)}finally{T?fn():(N=!1,C=null)}}else N=!1}var fn;if(typeof c=="function")fn=function(){c(dn)};else if(typeof MessageChannel<"u"){var Uo=new MessageChannel,uc=Uo.port2;Uo.port1.onmessage=dn,fn=function(){uc.postMessage(null)}}else fn=function(){I(dn,0)};function ki(E){C=E,N||(N=!0,fn())}function Si(E,T){F=I(function(){E(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||m||(w=!0,ki(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var z=h;h=T;try{return E()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,T){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=h;h=E;try{return T()}finally{h=z}},e.unstable_scheduleCallback=function(E,T,z){var b=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?b+z:b):z=b,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,E={id:v++,callback:T,priorityLevel:E,startTime:z,expirationTime:Z,sortIndex:-1},z>b?(E.sortIndex=z,t(d,E),n(u)===null&&E===n(d)&&(k?(f(F),F=-1):k=!0,Si(y,z-b))):(E.sortIndex=Z,t(u,E),w||m||(w=!0,ki(S))),E},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(E){var T=h;return function(){var z=h;h=T;try{return E.apply(this,arguments)}finally{h=z}}}})(ua);aa.exports=ua;var Dc=aa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=G,xe=Dc;function x(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ca=new Set,Mn={};function Dt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(Mn[e]=t,e=0;e<t.length;e++)ca.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zi=Object.prototype.hasOwnProperty,Ic=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ho={},Wo={};function Mc(e){return Zi.call(Wo,e)?!0:Zi.call(Ho,e)?!1:Ic.test(e)?Wo[e]=!0:(Ho[e]=!0,!1)}function Oc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ac(e,t,n,r){if(t===null||typeof t>"u"||Oc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Yl=/[\-:]([a-z])/g;function Kl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Yl,Kl);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Yl,Kl);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Yl,Kl);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ac(t,n,i,r)&&(n=null),r||i===null?Mc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),Ot=Symbol.for("react.fragment"),Gl=Symbol.for("react.strict_mode"),Ji=Symbol.for("react.profiler"),da=Symbol.for("react.provider"),fa=Symbol.for("react.context"),Zl=Symbol.for("react.forward_ref"),qi=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),pa=Symbol.for("react.offscreen"),bo=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=bo&&e[bo]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,Ni;function kn(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var Ci=!1;function Fi(e,t){if(!e||Ci)return"";Ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var u=`
`+i[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function Uc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=Fi(e.type,!1),e;case 11:return e=Fi(e.type.render,!1),e;case 1:return e=Fi(e.type,!0),e;default:return""}}function tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ot:return"Fragment";case Mt:return"Portal";case Ji:return"Profiler";case Gl:return"StrictMode";case qi:return"Suspense";case el:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fa:return(e.displayName||"Context")+".Consumer";case da:return(e._context.displayName||"Context")+".Provider";case Zl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:tl(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return tl(e(t))}catch{}}return null}function Vc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tl(t);case 8:return t===Gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ha(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bc(e){var t=ha(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Bc(e))}function ma(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ha(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ir(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nl(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ga(e,t){t=t.checked,t!=null&&Xl(e,"checked",t,!1)}function rl(e,t){ga(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?il(e,t.type,n):t.hasOwnProperty("defaultValue")&&il(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function il(e,t,n){(t!=="number"||Ir(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(x(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ko(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(x(92));if(Sn(n)){if(1<n.length)throw Error(x(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function va(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ya(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ol(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ya(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,xa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function On(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$c=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){$c.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function wa(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function ka(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wa(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hc=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sl(e,t){if(t){if(Hc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(x(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(x(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(x(61))}if(t.style!=null&&typeof t.style!="object")throw Error(x(62))}}function al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,Xt=null,Gt=null;function Go(e){if(e=nr(e)){if(typeof cl!="function")throw Error(x(280));var t=e.stateNode;t&&(t=ci(t),cl(e.stateNode,e.type,t))}}function Sa(e){Xt?Gt?Gt.push(e):Gt=[e]:Xt=e}function ja(){if(Xt){var e=Xt,t=Gt;if(Gt=Xt=null,Go(e),t)for(e=0;e<t.length;e++)Go(t[e])}}function Ea(e,t){return e(t)}function Na(){}var Ti=!1;function Ca(e,t,n){if(Ti)return e(t,n);Ti=!0;try{return Ea(e,t,n)}finally{Ti=!1,(Xt!==null||Gt!==null)&&(Na(),ja())}}function An(e,t){var n=e.stateNode;if(n===null)return null;var r=ci(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(x(231,t,typeof n));return n}var dl=!1;if(Ye)try{var hn={};Object.defineProperty(hn,"passive",{get:function(){dl=!0}}),window.addEventListener("test",hn,hn),window.removeEventListener("test",hn,hn)}catch{dl=!1}function Wc(e,t,n,r,i,l,o,a,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(v){this.onError(v)}}var Cn=!1,Mr=null,Or=!1,fl=null,bc={onError:function(e){Cn=!0,Mr=e}};function Qc(e,t,n,r,i,l,o,a,u){Cn=!1,Mr=null,Wc.apply(bc,arguments)}function Yc(e,t,n,r,i,l,o,a,u){if(Qc.apply(this,arguments),Cn){if(Cn){var d=Mr;Cn=!1,Mr=null}else throw Error(x(198));Or||(Or=!0,fl=d)}}function Rt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zo(e){if(Rt(e)!==e)throw Error(x(188))}function Kc(e){var t=e.alternate;if(!t){if(t=Rt(e),t===null)throw Error(x(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Zo(i),e;if(l===r)return Zo(i),t;l=l.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?e:t}function Ta(e){return e=Kc(e),e!==null?za(e):null}function za(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=za(e);if(t!==null)return t;e=e.sibling}return null}var _a=xe.unstable_scheduleCallback,Jo=xe.unstable_cancelCallback,Xc=xe.unstable_shouldYield,Gc=xe.unstable_requestPaint,Q=xe.unstable_now,Zc=xe.unstable_getCurrentPriorityLevel,eo=xe.unstable_ImmediatePriority,Pa=xe.unstable_UserBlockingPriority,Ar=xe.unstable_NormalPriority,Jc=xe.unstable_LowPriority,La=xe.unstable_IdlePriority,oi=null,Ue=null;function qc(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(oi,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:nd,ed=Math.log,td=Math.LN2;function nd(e){return e>>>=0,e===0?32:31-(ed(e)/td|0)|0}var cr=64,dr=4194304;function jn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=jn(a):(l&=o,l!==0&&(r=jn(l)))}else o=n&~i,o!==0?r=jn(o):l!==0&&(r=jn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),i=1<<n,r|=e[n],t&=~i;return r}function rd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function id(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-De(l),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=rd(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Da(){var e=cr;return cr<<=1,!(cr&4194240)&&(cr=64),e}function zi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function er(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function ld(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-De(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function to(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Ra(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ia,no,Ma,Oa,Aa,hl=!1,fr=[],ot=null,st=null,at=null,Un=new Map,Vn=new Map,nt=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qo(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vn.delete(t.pointerId)}}function mn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=nr(t),t!==null&&no(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sd(e,t,n,r,i){switch(t){case"focusin":return ot=mn(ot,e,t,n,r,i),!0;case"dragenter":return st=mn(st,e,t,n,r,i),!0;case"mouseover":return at=mn(at,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Un.set(l,mn(Un.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Vn.set(l,mn(Vn.get(l)||null,e,t,n,r,i)),!0}return!1}function Ua(e){var t=jt(e.target);if(t!==null){var n=Rt(t);if(n!==null){if(t=n.tag,t===13){if(t=Fa(n),t!==null){e.blockedOn=t,Aa(e.priority,function(){Ma(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ml(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=nr(n),t!==null&&no(t),e.blockedOn=n,!1;t.shift()}return!0}function es(e,t,n){Nr(e)&&n.delete(t)}function ad(){hl=!1,ot!==null&&Nr(ot)&&(ot=null),st!==null&&Nr(st)&&(st=null),at!==null&&Nr(at)&&(at=null),Un.forEach(es),Vn.forEach(es)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,hl||(hl=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,ad)))}function Bn(e){function t(i){return gn(i,e)}if(0<fr.length){gn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&gn(ot,e),st!==null&&gn(st,e),at!==null&&gn(at,e),Un.forEach(t),Vn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Ua(n),n.blockedOn===null&&nt.shift()}var Zt=Ze.ReactCurrentBatchConfig,Vr=!0;function ud(e,t,n,r){var i=R,l=Zt.transition;Zt.transition=null;try{R=1,ro(e,t,n,r)}finally{R=i,Zt.transition=l}}function cd(e,t,n,r){var i=R,l=Zt.transition;Zt.transition=null;try{R=4,ro(e,t,n,r)}finally{R=i,Zt.transition=l}}function ro(e,t,n,r){if(Vr){var i=ml(e,t,n,r);if(i===null)Ui(e,t,r,Br,n),qo(e,r);else if(sd(i,e,t,n,r))r.stopPropagation();else if(qo(e,r),t&4&&-1<od.indexOf(e)){for(;i!==null;){var l=nr(i);if(l!==null&&Ia(l),l=ml(e,t,n,r),l===null&&Ui(e,t,r,Br,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ui(e,t,r,null,n)}}var Br=null;function ml(e,t,n,r){if(Br=null,e=ql(r),e=jt(e),e!==null)if(t=Rt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function Va(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case eo:return 1;case Pa:return 4;case Ar:case Jc:return 16;case La:return 536870912;default:return 16}default:return 16}}var it=null,io=null,Cr=null;function Ba(){if(Cr)return Cr;var e,t=io,n=t.length,r,i="value"in it?it.value:it.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return Cr=i.slice(e,1<r?1-r:void 0)}function Fr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function ts(){return!1}function ke(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?pr:ts,this.isPropagationStopped=ts,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=ke(un),tr=$({},un,{view:0,detail:0}),dd=ke(tr),_i,Pi,vn,si=$({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(_i=e.screenX-vn.screenX,Pi=e.screenY-vn.screenY):Pi=_i=0,vn=e),_i)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),ns=ke(si),fd=$({},si,{dataTransfer:0}),pd=ke(fd),hd=$({},tr,{relatedTarget:0}),Li=ke(hd),md=$({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=ke(md),vd=$({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yd=ke(vd),xd=$({},un,{data:0}),rs=ke(xd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sd[e])?!!t[e]:!1}function oo(){return jd}var Ed=$({},tr,{key:function(e){if(e.key){var t=wd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oo,charCode:function(e){return e.type==="keypress"?Fr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nd=ke(Ed),Cd=$({},si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=ke(Cd),Fd=$({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oo}),Td=ke(Fd),zd=$({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),_d=ke(zd),Pd=$({},si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ld=ke(Pd),Dd=[9,13,27,32],so=Ye&&"CompositionEvent"in window,Fn=null;Ye&&"documentMode"in document&&(Fn=document.documentMode);var Rd=Ye&&"TextEvent"in window&&!Fn,$a=Ye&&(!so||Fn&&8<Fn&&11>=Fn),ls=" ",os=!1;function Ha(e,t){switch(e){case"keyup":return Dd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Id(e,t){switch(e){case"compositionend":return Wa(t);case"keypress":return t.which!==32?null:(os=!0,ls);case"textInput":return e=t.data,e===ls&&os?null:e;default:return null}}function Md(e,t){if(At)return e==="compositionend"||!so&&Ha(e,t)?(e=Ba(),Cr=io=it=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $a&&t.locale!=="ko"?null:t.data;default:return null}}var Od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Od[e.type]:t==="textarea"}function ba(e,t,n,r){Sa(r),t=$r(t,"onChange"),0<t.length&&(n=new lo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,$n=null;function Ad(e){nu(e,0)}function ai(e){var t=Bt(e);if(ma(t))return e}function Ud(e,t){if(e==="change")return t}var Qa=!1;if(Ye){var Di;if(Ye){var Ri="oninput"in document;if(!Ri){var as=document.createElement("div");as.setAttribute("oninput","return;"),Ri=typeof as.oninput=="function"}Di=Ri}else Di=!1;Qa=Di&&(!document.documentMode||9<document.documentMode)}function us(){Tn&&(Tn.detachEvent("onpropertychange",Ya),$n=Tn=null)}function Ya(e){if(e.propertyName==="value"&&ai($n)){var t=[];ba(t,$n,e,ql(e)),Ca(Ad,t)}}function Vd(e,t,n){e==="focusin"?(us(),Tn=t,$n=n,Tn.attachEvent("onpropertychange",Ya)):e==="focusout"&&us()}function Bd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ai($n)}function $d(e,t){if(e==="click")return ai(t)}function Hd(e,t){if(e==="input"||e==="change")return ai(t)}function Wd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Wd;function Hn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Zi.call(t,i)||!Ie(e[i],t[i]))return!1}return!0}function cs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,t){var n=cs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cs(n)}}function Ka(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ka(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xa(){for(var e=window,t=Ir();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function ao(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bd(e){var t=Xa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ka(n.ownerDocument.documentElement,n)){if(r!==null&&ao(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=ds(n,l);var o=ds(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qd=Ye&&"documentMode"in document&&11>=document.documentMode,Ut=null,gl=null,zn=null,vl=!1;function fs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||Ut==null||Ut!==Ir(r)||(r=Ut,"selectionStart"in r&&ao(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&Hn(zn,r)||(zn=r,r=$r(gl,"onSelect"),0<r.length&&(t=new lo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ut)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},Ii={},Ga={};Ye&&(Ga=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function ui(e){if(Ii[e])return Ii[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ga)return Ii[e]=t[n];return e}var Za=ui("animationend"),Ja=ui("animationiteration"),qa=ui("animationstart"),eu=ui("transitionend"),tu=new Map,ps="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){tu.set(e,t),Dt(t,[e])}for(var Mi=0;Mi<ps.length;Mi++){var Oi=ps[Mi],Yd=Oi.toLowerCase(),Kd=Oi[0].toUpperCase()+Oi.slice(1);gt(Yd,"on"+Kd)}gt(Za,"onAnimationEnd");gt(Ja,"onAnimationIteration");gt(qa,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(eu,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var En="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xd=new Set("cancel close invalid load scroll toggle".split(" ").concat(En));function hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yc(r,t,void 0,e),e.currentTarget=null}function nu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,d=a.currentTarget;if(a=a.listener,u!==l&&i.isPropagationStopped())break e;hs(i,a,d),l=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,d=a.currentTarget,a=a.listener,u!==l&&i.isPropagationStopped())break e;hs(i,a,d),l=u}}}if(Or)throw e=fl,Or=!1,fl=null,e}function O(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(ru(t,e,2,!1),n.add(r))}function Ai(e,t,n){var r=0;t&&(r|=4),ru(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[mr]){e[mr]=!0,ca.forEach(function(n){n!=="selectionchange"&&(Xd.has(n)||Ai(n,!1,e),Ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Ai("selectionchange",!1,t))}}function ru(e,t,n,r){switch(Va(t)){case 1:var i=ud;break;case 4:i=cd;break;default:i=ro}n=i.bind(null,t,n,e),i=void 0,!dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ui(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=jt(a),o===null)return;if(u=o.tag,u===5||u===6){r=l=o;continue e}a=a.parentNode}}r=r.return}Ca(function(){var d=l,v=ql(n),g=[];e:{var h=tu.get(e);if(h!==void 0){var m=lo,w=e;switch(e){case"keypress":if(Fr(n)===0)break e;case"keydown":case"keyup":m=Nd;break;case"focusin":w="focus",m=Li;break;case"focusout":w="blur",m=Li;break;case"beforeblur":case"afterblur":m=Li;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=pd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Td;break;case Za:case Ja:case qa:m=gd;break;case eu:m=_d;break;case"scroll":m=dd;break;case"wheel":m=Ld;break;case"copy":case"cut":case"paste":m=yd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=is}var k=(t&4)!==0,I=!k&&e==="scroll",f=k?h!==null?h+"Capture":null:h;k=[];for(var c=d,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=An(c,f),y!=null&&k.push(bn(c,y,p)))),I)break;c=c.return}0<k.length&&(h=new m(h,w,null,n,v),g.push({event:h,listeners:k}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==ul&&(w=n.relatedTarget||n.fromElement)&&(jt(w)||w[Ke]))break e;if((m||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=d,w=w?jt(w):null,w!==null&&(I=Rt(w),w!==I||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=d),m!==w)){if(k=ns,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(k=is,y="onPointerLeave",f="onPointerEnter",c="pointer"),I=m==null?h:Bt(m),p=w==null?h:Bt(w),h=new k(y,c+"leave",m,n,v),h.target=I,h.relatedTarget=p,y=null,jt(v)===d&&(k=new k(f,c+"enter",w,n,v),k.target=p,k.relatedTarget=I,y=k),I=y,m&&w)t:{for(k=m,f=w,c=0,p=k;p;p=It(p))c++;for(p=0,y=f;y;y=It(y))p++;for(;0<c-p;)k=It(k),c--;for(;0<p-c;)f=It(f),p--;for(;c--;){if(k===f||f!==null&&k===f.alternate)break t;k=It(k),f=It(f)}k=null}else k=null;m!==null&&ms(g,h,m,k,!1),w!==null&&I!==null&&ms(g,I,w,k,!0)}}e:{if(h=d?Bt(d):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var S=Ud;else if(ss(h))if(Qa)S=Hd;else{S=Bd;var N=Vd}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=$d);if(S&&(S=S(e,d))){ba(g,S,n,v);break e}N&&N(e,h,d),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&il(h,"number",h.value)}switch(N=d?Bt(d):window,e){case"focusin":(ss(N)||N.contentEditable==="true")&&(Ut=N,gl=d,zn=null);break;case"focusout":zn=gl=Ut=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,fs(g,n,v);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":fs(g,n,v)}var C;if(so)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else At?Ha(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&($a&&n.locale!=="ko"&&(At||F!=="onCompositionStart"?F==="onCompositionEnd"&&At&&(C=Ba()):(it=v,io="value"in it?it.value:it.textContent,At=!0)),N=$r(d,F),0<N.length&&(F=new rs(F,e,null,n,v),g.push({event:F,listeners:N}),C?F.data=C:(C=Wa(n),C!==null&&(F.data=C)))),(C=Rd?Id(e,n):Md(e,n))&&(d=$r(d,"onBeforeInput"),0<d.length&&(v=new rs("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:d}),v.data=C))}nu(g,t)})}function bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=An(e,n),l!=null&&r.unshift(bn(e,l,i)),l=An(e,t),l!=null&&r.push(bn(e,l,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ms(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,d=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&d!==null&&(a=d,i?(u=An(n,l),u!=null&&o.unshift(bn(n,u,a))):i||(u=An(n,l),u!=null&&o.push(bn(n,u,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gd=/\r\n?/g,Zd=/\u0000|\uFFFD/g;function gs(e){return(typeof e=="string"?e:""+e).replace(Gd,`
`).replace(Zd,"")}function gr(e,t,n){if(t=gs(t),gs(e)!==t&&n)throw Error(x(425))}function Hr(){}var yl=null,xl=null;function wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,Jd=typeof clearTimeout=="function"?clearTimeout:void 0,vs=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof vs<"u"?function(e){return vs.resolve(null).then(e).catch(ef)}:kl;function ef(e){setTimeout(function(){throw e})}function Vi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+cn,Qn="__reactProps$"+cn,Ke="__reactContainer$"+cn,Sl="__reactEvents$"+cn,tf="__reactListeners$"+cn,nf="__reactHandles$"+cn;function jt(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ys(e);e!==null;){if(n=e[Ae])return n;e=ys(e)}return t}e=n,n=e.parentNode}return null}function nr(e){return e=e[Ae]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(x(33))}function ci(e){return e[Qn]||null}var jl=[],$t=-1;function vt(e){return{current:e}}function A(e){0>$t||(e.current=jl[$t],jl[$t]=null,$t--)}function M(e,t){$t++,jl[$t]=e.current,e.current=t}var mt={},oe=vt(mt),pe=vt(!1),Tt=mt;function tn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function he(e){return e=e.childContextTypes,e!=null}function Wr(){A(pe),A(oe)}function xs(e,t,n){if(oe.current!==mt)throw Error(x(168));M(oe,t),M(pe,n)}function iu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(x(108,Vc(e)||"Unknown",i));return $({},n,r)}function br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Tt=oe.current,M(oe,e),M(pe,pe.current),!0}function ws(e,t,n){var r=e.stateNode;if(!r)throw Error(x(169));n?(e=iu(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,A(pe),A(oe),M(oe,e)):A(pe),M(pe,n)}var He=null,di=!1,Bi=!1;function lu(e){He===null?He=[e]:He.push(e)}function rf(e){di=!0,lu(e)}function yt(){if(!Bi&&He!==null){Bi=!0;var e=0,t=R;try{var n=He;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,di=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),_a(eo,yt),i}finally{R=t,Bi=!1}}return null}var Ht=[],Wt=0,Qr=null,Yr=0,Se=[],je=0,zt=null,We=1,be="";function kt(e,t){Ht[Wt++]=Yr,Ht[Wt++]=Qr,Qr=e,Yr=t}function ou(e,t,n){Se[je++]=We,Se[je++]=be,Se[je++]=zt,zt=e;var r=We;e=be;var i=32-De(r)-1;r&=~(1<<i),n+=1;var l=32-De(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,We=1<<32-De(t)+i|n<<i|r,be=l+e}else We=1<<l|n<<i|r,be=e}function uo(e){e.return!==null&&(kt(e,1),ou(e,1,0))}function co(e){for(;e===Qr;)Qr=Ht[--Wt],Ht[Wt]=null,Yr=Ht[--Wt],Ht[Wt]=null;for(;e===zt;)zt=Se[--je],Se[je]=null,be=Se[--je],Se[je]=null,We=Se[--je],Se[je]=null}var ye=null,ve=null,U=!1,Le=null;function su(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ks(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zt!==null?{id:We,overflow:be}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Nl(e){if(U){var t=ve;if(t){var n=t;if(!ks(e,t)){if(El(e))throw Error(x(418));t=ut(n.nextSibling);var r=ye;t&&ks(e,t)?su(r,n):(e.flags=e.flags&-4097|2,U=!1,ye=e)}}else{if(El(e))throw Error(x(418));e.flags=e.flags&-4097|2,U=!1,ye=e}}}function Ss(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function vr(e){if(e!==ye)return!1;if(!U)return Ss(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wl(e.type,e.memoizedProps)),t&&(t=ve)){if(El(e))throw au(),Error(x(418));for(;t;)su(e,t),t=ut(t.nextSibling)}if(Ss(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(x(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?ut(e.stateNode.nextSibling):null;return!0}function au(){for(var e=ve;e;)e=ut(e.nextSibling)}function nn(){ve=ye=null,U=!1}function fo(e){Le===null?Le=[e]:Le.push(e)}var lf=Ze.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,e))}return e}function yr(e,t){throw e=Object.prototype.toString.call(t),Error(x(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function js(e){var t=e._init;return t(e._payload)}function uu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=pt(f,c),f.index=0,f.sibling=null,f}function l(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=Ki(p,f.mode,y),c.return=f,c):(c=i(c,p),c.return=f,c)}function u(f,c,p,y){var S=p.type;return S===Ot?v(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&js(S)===c.type)?(y=i(c,p.props),y.ref=yn(f,c,p),y.return=f,y):(y=Rr(p.type,p.key,p.props,null,f.mode,y),y.ref=yn(f,c,p),y.return=f,y)}function d(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Xi(p,f.mode,y),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function v(f,c,p,y,S){return c===null||c.tag!==7?(c=Ft(p,f.mode,y,S),c.return=f,c):(c=i(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ki(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case sr:return p=Rr(c.type,c.key,c.props,null,f.mode,p),p.ref=yn(f,null,c),p.return=f,p;case Mt:return c=Xi(c,f.mode,p),c.return=f,c;case et:var y=c._init;return g(f,y(c._payload),p)}if(Sn(c)||pn(c))return c=Ft(c,f.mode,p,null),c.return=f,c;yr(f,c)}return null}function h(f,c,p,y){var S=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:return p.key===S?u(f,c,p,y):null;case Mt:return p.key===S?d(f,c,p,y):null;case et:return S=p._init,h(f,c,S(p._payload),y)}if(Sn(p)||pn(p))return S!==null?null:v(f,c,p,y,null);yr(f,p)}return null}function m(f,c,p,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case sr:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,S);case Mt:return f=f.get(y.key===null?p:y.key)||null,d(c,f,y,S);case et:var N=y._init;return m(f,c,p,N(y._payload),S)}if(Sn(y)||pn(y))return f=f.get(p)||null,v(c,f,y,S,null);yr(c,y)}return null}function w(f,c,p,y){for(var S=null,N=null,C=c,F=c=0,W=null;C!==null&&F<p.length;F++){C.index>F?(W=C,C=null):W=C.sibling;var L=h(f,C,p[F],y);if(L===null){C===null&&(C=W);break}e&&C&&L.alternate===null&&t(f,C),c=l(L,c,F),N===null?S=L:N.sibling=L,N=L,C=W}if(F===p.length)return n(f,C),U&&kt(f,F),S;if(C===null){for(;F<p.length;F++)C=g(f,p[F],y),C!==null&&(c=l(C,c,F),N===null?S=C:N.sibling=C,N=C);return U&&kt(f,F),S}for(C=r(f,C);F<p.length;F++)W=m(C,f,F,p[F],y),W!==null&&(e&&W.alternate!==null&&C.delete(W.key===null?F:W.key),c=l(W,c,F),N===null?S=W:N.sibling=W,N=W);return e&&C.forEach(function(Te){return t(f,Te)}),U&&kt(f,F),S}function k(f,c,p,y){var S=pn(p);if(typeof S!="function")throw Error(x(150));if(p=S.call(p),p==null)throw Error(x(151));for(var N=S=null,C=c,F=c=0,W=null,L=p.next();C!==null&&!L.done;F++,L=p.next()){C.index>F?(W=C,C=null):W=C.sibling;var Te=h(f,C,L.value,y);if(Te===null){C===null&&(C=W);break}e&&C&&Te.alternate===null&&t(f,C),c=l(Te,c,F),N===null?S=Te:N.sibling=Te,N=Te,C=W}if(L.done)return n(f,C),U&&kt(f,F),S;if(C===null){for(;!L.done;F++,L=p.next())L=g(f,L.value,y),L!==null&&(c=l(L,c,F),N===null?S=L:N.sibling=L,N=L);return U&&kt(f,F),S}for(C=r(f,C);!L.done;F++,L=p.next())L=m(C,f,F,L.value,y),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?F:L.key),c=l(L,c,F),N===null?S=L:N.sibling=L,N=L);return e&&C.forEach(function(dn){return t(f,dn)}),U&&kt(f,F),S}function I(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Ot&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:e:{for(var S=p.key,N=c;N!==null;){if(N.key===S){if(S=p.type,S===Ot){if(N.tag===7){n(f,N.sibling),c=i(N,p.props.children),c.return=f,f=c;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===et&&js(S)===N.type){n(f,N.sibling),c=i(N,p.props),c.ref=yn(f,N,p),c.return=f,f=c;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Ot?(c=Ft(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Rr(p.type,p.key,p.props,null,f.mode,y),y.ref=yn(f,c,p),y.return=f,f=y)}return o(f);case Mt:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Xi(p,f.mode,y),c.return=f,f=c}return o(f);case et:return N=p._init,I(f,c,N(p._payload),y)}if(Sn(p))return w(f,c,p,y);if(pn(p))return k(f,c,p,y);yr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Ki(p,f.mode,y),c.return=f,f=c),o(f)):n(f,c)}return I}var rn=uu(!0),cu=uu(!1),Kr=vt(null),Xr=null,bt=null,po=null;function ho(){po=bt=Xr=null}function mo(e){var t=Kr.current;A(Kr),e._currentValue=t}function Cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Xr=e,po=bt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function Ce(e){var t=e._currentValue;if(po!==e)if(e={context:e,memoizedValue:t,next:null},bt===null){if(Xr===null)throw Error(x(308));bt=e,Xr.dependencies={lanes:0,firstContext:e}}else bt=bt.next=e;return t}var Et=null;function go(e){Et===null?Et=[e]:Et.push(e)}function du(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,go(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xe(e,n)}return i=r.interleaved,i===null?(t.next=t,go(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xe(e,n)}function Tr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}function Es(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var i=e.updateQueue;tt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,d=u.next;u.next=null,o===null?l=d:o.next=d,o=u;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==o&&(a===null?v.firstBaseUpdate=d:a.next=d,v.lastBaseUpdate=u))}if(l!==null){var g=i.baseState;o=0,v=d=u=null,a=l;do{var h=a.lane,m=a.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(h=t,m=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){g=w.call(m,g,h);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,h=typeof w=="function"?w.call(m,g,h):w,h==null)break e;g=$({},g,h);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(d=v=m,u=g):v=v.next=m,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(v===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Pt|=o,e.lanes=o,e.memoizedState=g}}function Ns(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var rr={},Ve=vt(rr),Yn=vt(rr),Kn=vt(rr);function Nt(e){if(e===rr)throw Error(x(174));return e}function yo(e,t){switch(M(Kn,t),M(Yn,e),M(Ve,rr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ol(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ol(t,e)}A(Ve),M(Ve,t)}function ln(){A(Ve),A(Yn),A(Kn)}function pu(e){Nt(Kn.current);var t=Nt(Ve.current),n=ol(t,e.type);t!==n&&(M(Yn,e),M(Ve,n))}function xo(e){Yn.current===e&&(A(Ve),A(Yn))}var V=vt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function wo(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var zr=Ze.ReactCurrentDispatcher,Hi=Ze.ReactCurrentBatchConfig,_t=0,B=null,K=null,J=null,Jr=!1,_n=!1,Xn=0,of=0;function re(){throw Error(x(321))}function ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function So(e,t,n,r,i,l){if(_t=l,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?cf:df,e=n(r,i),_n){l=0;do{if(_n=!1,Xn=0,25<=l)throw Error(x(301));l+=1,J=K=null,t.updateQueue=null,zr.current=ff,e=n(r,i)}while(_n)}if(zr.current=qr,t=K!==null&&K.next!==null,_t=0,J=K=B=null,Jr=!1,t)throw Error(x(300));return e}function jo(){var e=Xn!==0;return Xn=0,e}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function Fe(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,K=e;else{if(e===null)throw Error(x(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function Gn(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Fe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,u=null,d=l;do{var v=d.lane;if((_t&v)===v)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:v,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(a=u=g,o=r):u=u.next=g,B.lanes|=v,Pt|=v}d=d.next}while(d!==null&&d!==l);u===null?o=r:u.next=a,Ie(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,B.lanes|=l,Pt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bi(e){var t=Fe(),n=t.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ie(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function hu(){}function mu(e,t){var n=B,r=Fe(),i=t(),l=!Ie(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,Eo(yu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Zn(9,vu.bind(null,n,r,i,t),void 0,null),q===null)throw Error(x(349));_t&30||gu(n,t,i)}return i}function gu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function vu(e,t,n,r){t.value=n,t.getSnapshot=r,xu(t)&&wu(e)}function yu(e,t,n){return n(function(){xu(t)&&wu(e)})}function xu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function wu(e){var t=Xe(e,1);t!==null&&Re(t,e,1,-1)}function Cs(e){var t=Oe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=uf.bind(null,B,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ku(){return Fe().memoizedState}function _r(e,t,n,r){var i=Oe();B.flags|=e,i.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function fi(e,t,n,r){var i=Fe();r=r===void 0?null:r;var l=void 0;if(K!==null){var o=K.memoizedState;if(l=o.destroy,r!==null&&ko(r,o.deps)){i.memoizedState=Zn(t,n,l,r);return}}B.flags|=e,i.memoizedState=Zn(1|t,n,l,r)}function Fs(e,t){return _r(8390656,8,e,t)}function Eo(e,t){return fi(2048,8,e,t)}function Su(e,t){return fi(4,2,e,t)}function ju(e,t){return fi(4,4,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Nu(e,t,n){return n=n!=null?n.concat([e]):null,fi(4,4,Eu.bind(null,t,e),n)}function No(){}function Cu(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fu(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ko(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Tu(e,t,n){return _t&21?(Ie(n,t)||(n=Da(),B.lanes|=n,Pt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function sf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Hi.transition;Hi.transition={};try{e(!1),t()}finally{R=n,Hi.transition=r}}function zu(){return Fe().memoizedState}function af(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_u(e))Pu(t,n);else if(n=du(e,t,n,r),n!==null){var i=ae();Re(n,e,r,i),Lu(n,t,r)}}function uf(e,t,n){var r=ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_u(e))Pu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ie(a,o)){var u=t.interleaved;u===null?(i.next=i,go(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=du(e,t,i,r),n!==null&&(i=ae(),Re(n,e,r,i),Lu(n,t,r))}}function _u(e){var t=e.alternate;return e===B||t!==null&&t===B}function Pu(e,t){_n=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,to(e,n)}}var qr={readContext:Ce,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},cf={readContext:Ce,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Fs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Oe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Oe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=af.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:Cs,useDebugValue:No,useDeferredValue:function(e){return Oe().memoizedState=e},useTransition:function(){var e=Cs(!1),t=e[0];return e=sf.bind(null,e[1]),Oe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,i=Oe();if(U){if(n===void 0)throw Error(x(407));n=n()}else{if(n=t(),q===null)throw Error(x(349));_t&30||gu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Fs(yu.bind(null,r,l,e),[e]),r.flags|=2048,Zn(9,vu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Oe(),t=q.identifierPrefix;if(U){var n=be,r=We;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=of++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},df={readContext:Ce,useCallback:Cu,useContext:Ce,useEffect:Eo,useImperativeHandle:Nu,useInsertionEffect:Su,useLayoutEffect:ju,useMemo:Fu,useReducer:Wi,useRef:ku,useState:function(){return Wi(Gn)},useDebugValue:No,useDeferredValue:function(e){var t=Fe();return Tu(t,K.memoizedState,e)},useTransition:function(){var e=Wi(Gn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:mu,useId:zu,unstable_isNewReconciler:!1},ff={readContext:Ce,useCallback:Cu,useContext:Ce,useEffect:Eo,useImperativeHandle:Nu,useInsertionEffect:Su,useLayoutEffect:ju,useMemo:Fu,useReducer:bi,useRef:ku,useState:function(){return bi(Gn)},useDebugValue:No,useDeferredValue:function(e){var t=Fe();return K===null?t.memoizedState=e:Tu(t,K.memoizedState,e)},useTransition:function(){var e=bi(Gn)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:hu,useSyncExternalStore:mu,useId:zu,unstable_isNewReconciler:!1};function _e(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pi={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),i=ft(e),l=Qe(r,i);l.payload=t,n!=null&&(l.callback=n),t=ct(e,l,i),t!==null&&(Re(t,e,i,r),Tr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),i=ft(e),l=Qe(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ct(e,l,i),t!==null&&(Re(t,e,i,r),Tr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ft(e),i=Qe(n,r);i.tag=2,t!=null&&(i.callback=t),t=ct(e,i,r),t!==null&&(Re(t,e,r,n),Tr(t,e,r))}};function Ts(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,r)||!Hn(i,l):!0}function Du(e,t,n){var r=!1,i=mt,l=t.contextType;return typeof l=="object"&&l!==null?l=Ce(l):(i=he(t)?Tt:oe.current,r=t.contextTypes,l=(r=r!=null)?tn(e,i):mt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function zs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function Tl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vo(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Ce(l):(l=he(t)?Tt:oe.current,i.context=tn(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Fl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pi.enqueueReplaceState(i,i.state,null),Gr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=Uc(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pf=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ti||(ti=!0,Ul=r),zl(e,t)},n}function Iu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){zl(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _s(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ff.bind(null,e,t,n),t.then(e,e))}function Ps(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ls(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var hf=Ze.ReactCurrentOwner,fe=!1;function se(e,t,n,r){t.child=e===null?cu(t,null,n,r):rn(t,e.child,n,r)}function Ds(e,t,n,r,i){n=n.render;var l=t.ref;return Jt(t,i),r=So(e,t,n,r,l,i),n=jo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(U&&n&&uo(t),t.flags|=1,se(e,t,r,i),t.child)}function Rs(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Do(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Mu(e,t,l,r,i)):(e=Rr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(o,r)&&e.ref===t.ref)return Ge(e,t,i)}return t.flags|=1,e=pt(l,r),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Hn(l,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Ge(e,t,i)}return _l(e,t,n,r,i)}function Ou(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Yt,ge),ge|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Yt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,M(Yt,ge),ge|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,M(Yt,ge),ge|=r;return se(e,t,i,n),t.child}function Au(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _l(e,t,n,r,i){var l=he(n)?Tt:oe.current;return l=tn(t,l),Jt(t,i),n=So(e,t,n,r,l,i),r=jo(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ge(e,t,i)):(U&&r&&uo(t),t.flags|=1,se(e,t,n,i),t.child)}function Is(e,t,n,r,i){if(he(n)){var l=!0;br(t)}else l=!1;if(Jt(t,i),t.stateNode===null)Pr(e,t),Du(t,n,r),Tl(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ce(d):(d=he(n)?Tt:oe.current,d=tn(t,d));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==d)&&zs(t,o,r,d),tt=!1;var h=t.memoizedState;o.state=h,Gr(t,r,o,i),u=t.memoizedState,a!==r||h!==u||pe.current||tt?(typeof v=="function"&&(Fl(t,n,v,r),u=t.memoizedState),(a=tt||Ts(t,n,a,r,h,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,fu(e,t),a=t.memoizedProps,d=t.type===t.elementType?a:_e(t.type,a),o.props=d,g=t.pendingProps,h=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ce(u):(u=he(n)?Tt:oe.current,u=tn(t,u));var m=n.getDerivedStateFromProps;(v=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==g||h!==u)&&zs(t,o,r,u),tt=!1,h=t.memoizedState,o.state=h,Gr(t,r,o,i);var w=t.memoizedState;a!==g||h!==w||pe.current||tt?(typeof m=="function"&&(Fl(t,n,m,r),w=t.memoizedState),(d=tt||Ts(t,n,d,r,h,w,u)||!1)?(v||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,u)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,l,i)}function Pl(e,t,n,r,i,l){Au(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ws(t,n,!1),Ge(e,t,l);r=t.stateNode,hf.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=rn(t,e.child,null,l),t.child=rn(t,null,a,l)):se(e,t,a,l),t.memoizedState=r.state,i&&ws(t,n,!0),t.child}function Uu(e){var t=e.stateNode;t.pendingContext?xs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xs(e,t.context,!1),yo(e,t.containerInfo)}function Ms(e,t,n,r,i){return nn(),fo(i),t.flags|=256,se(e,t,n,r),t.child}var Ll={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vu(e,t,n){var r=t.pendingProps,i=V.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),M(V,i&1),e===null)return Nl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=gi(o,r,0,null),e=Ft(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ll,e):Co(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return mf(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=pt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=pt(a,l):(l=Ft(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?Dl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Ll,r}return l=e.child,e=l.sibling,r=pt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Co(e,t){return t=gi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xr(e,t,n,r){return r!==null&&fo(r),rn(t,e.child,null,n),e=Co(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mf(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=Qi(Error(x(422))),xr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=gi({mode:"visible",children:r.children},i,0,null),l=Ft(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&rn(t,e.child,null,o),t.child.memoizedState=Dl(o),t.memoizedState=Ll,l);if(!(t.mode&1))return xr(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(x(419)),r=Qi(l,r,void 0),xr(e,t,o,r)}if(a=(o&e.childLanes)!==0,fe||a){if(r=q,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Xe(e,i),Re(r,e,i,-1))}return Lo(),r=Qi(Error(x(421))),xr(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Tf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ve=ut(i.nextSibling),ye=t,U=!0,Le=null,e!==null&&(Se[je++]=We,Se[je++]=be,Se[je++]=zt,We=e.id,be=e.overflow,zt=t),t=Co(t,r.children),t.flags|=4096,t)}function Os(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cl(e.return,t,n)}function Yi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Bu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(se(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Os(e,n,t);else if(e.tag===19)Os(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yi(t,!0,n,null,l);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Pt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(x(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gf(e,t,n){switch(t.tag){case 3:Uu(t),nn();break;case 5:pu(t);break;case 1:he(t.type)&&br(t);break;case 4:yo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;M(Kr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Vu(e,t,n):(M(V,V.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);M(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Bu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),M(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Ou(e,t,n)}return Ge(e,t,n)}var $u,Rl,Hu,Wu;$u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rl=function(){};Hu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nt(Ve.current);var l=null;switch(n){case"input":i=nl(e,i),r=nl(e,r),l=[];break;case"select":i=$({},i,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":i=ll(e,i),r=ll(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hr)}sl(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var a=i[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Mn.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var u=r[d];if(a=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==a&&(u!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&O("scroll",e),l||a===u||(l=[])):(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}};Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vf(e,t,n){var r=t.pendingProps;switch(co(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&Wr(),ie(t),null;case 3:return r=t.stateNode,ln(),A(pe),A(oe),wo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&($l(Le),Le=null))),Rl(e,t),ie(t),null;case 5:xo(t);var i=Nt(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(x(166));return ie(t),null}if(e=Nt(Ve.current),vr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ae]=t,r[Qn]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<En.length;i++)O(En[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Qo(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Ko(r,l),O("invalid",r)}sl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&gr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&gr(r.textContent,a,e),i=["children",""+a]):Mn.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&O("scroll",r)}switch(n){case"input":ar(r),Yo(r,l,!0);break;case"textarea":ar(r),Xo(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Hr)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ya(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ae]=t,e[Qn]=r,$u(e,t,!1,!1),t.stateNode=e;e:{switch(o=al(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<En.length;i++)O(En[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":Qo(e,r),i=nl(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=$({},r,{value:void 0}),O("invalid",e);break;case"textarea":Ko(e,r),i=ll(e,r),O("invalid",e);break;default:i=r}sl(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?ka(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xa(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&On(e,u):typeof u=="number"&&On(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Mn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&O("scroll",e):u!=null&&Xl(e,l,u,o))}switch(n){case"input":ar(e),Yo(e,r,!1);break;case"textarea":ar(e),Xo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Kt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(x(166));if(n=Nt(Kn.current),Nt(Ve.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ae]=t,(l=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ae]=t,t.stateNode=r}return ie(t),null;case 13:if(A(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&t.mode&1&&!(t.flags&128))au(),nn(),t.flags|=98560,l=!1;else if(l=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(x(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(x(317));l[Ae]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else Le!==null&&($l(Le),Le=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?X===0&&(X=3):Lo())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return ln(),Rl(e,t),e===null&&Wn(t.stateNode.containerInfo),ie(t),null;case 10:return mo(t.type._context),ie(t),null;case 17:return he(t.type)&&Wr(),ie(t),null;case 19:if(A(V),l=t.memoizedState,l===null)return ie(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)xn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zr(e),o!==null){for(t.flags|=128,xn(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(V,V.current&1|2),t.child}e=e.sibling}l.tail!==null&&Q()>sn&&(t.flags|=128,r=!0,xn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!U)return ie(t),null}else 2*Q()-l.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,r=!0,xn(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Q(),t.sibling=null,n=V.current,M(V,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Po(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(x(156,t.tag))}function yf(e,t){switch(co(t),t.tag){case 1:return he(t.type)&&Wr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(),A(pe),A(oe),wo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xo(t),null;case 13:if(A(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(x(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(V),null;case 4:return ln(),null;case 10:return mo(t.type._context),null;case 22:case 23:return Po(),null;case 24:return null;default:return null}}var wr=!1,le=!1,xf=typeof WeakSet=="function"?WeakSet:Set,j=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Il(e,t,n){try{n()}catch(r){H(e,t,r)}}var As=!1;function wf(e,t){if(yl=Vr,e=Xa(),ao(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,d=0,v=0,g=e,h=null;t:for(;;){for(var m;g!==n||i!==0&&g.nodeType!==3||(a=o+i),g!==l||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(m=g.firstChild)!==null;)h=g,g=m;for(;;){if(g===e)break t;if(h===n&&++d===i&&(a=o),h===l&&++v===r&&(u=o),(m=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=m}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xl={focusedElem:e,selectionRange:n},Vr=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,I=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:_e(t.type,k),I);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(y){H(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=As,As=!1,w}function Pn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Il(t,n,l)}i=i.next}while(i!==r)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ml(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bu(e){var t=e.alternate;t!==null&&(e.alternate=null,bu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ae],delete t[Qn],delete t[Sl],delete t[tf],delete t[nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hr));else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}var ee=null,Pe=!1;function Je(e,t,n){for(n=n.child;n!==null;)Yu(e,t,n),n=n.sibling}function Yu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(oi,n)}catch{}switch(n.tag){case 5:le||Qt(n,t);case 6:var r=ee,i=Pe;ee=null,Je(e,t,n),ee=r,Pe=i,ee!==null&&(Pe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Pe?(e=ee,n=n.stateNode,e.nodeType===8?Vi(e.parentNode,n):e.nodeType===1&&Vi(e,n),Bn(e)):Vi(ee,n.stateNode));break;case 4:r=ee,i=Pe,ee=n.stateNode.containerInfo,Pe=!0,Je(e,t,n),ee=r,Pe=i;break;case 0:case 11:case 14:case 15:if(!le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Il(n,t,o),i=i.next}while(i!==r)}Je(e,t,n);break;case 1:if(!le&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(le=(r=le)||n.memoizedState!==null,Je(e,t,n),le=r):Je(e,t,n);break;default:Je(e,t,n)}}function Vs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xf),t.forEach(function(r){var i=zf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ee=a.stateNode,Pe=!1;break e;case 3:ee=a.stateNode.containerInfo,Pe=!0;break e;case 4:ee=a.stateNode.containerInfo,Pe=!0;break e}a=a.return}if(ee===null)throw Error(x(160));Yu(l,o,i),ee=null,Pe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){H(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ku(t,e),t=t.sibling}function Ku(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Me(e),r&4){try{Pn(3,e,e.return),hi(3,e)}catch(k){H(e,e.return,k)}try{Pn(5,e,e.return)}catch(k){H(e,e.return,k)}}break;case 1:ze(t,e),Me(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(ze(t,e),Me(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var i=e.stateNode;try{On(i,"")}catch(k){H(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&ga(i,l),al(a,o);var d=al(a,l);for(o=0;o<u.length;o+=2){var v=u[o],g=u[o+1];v==="style"?ka(i,g):v==="dangerouslySetInnerHTML"?xa(i,g):v==="children"?On(i,g):Xl(i,v,g,d)}switch(a){case"input":rl(i,l);break;case"textarea":va(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var m=l.value;m!=null?Kt(i,!!l.multiple,m,!1):h!==!!l.multiple&&(l.defaultValue!=null?Kt(i,!!l.multiple,l.defaultValue,!0):Kt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Qn]=l}catch(k){H(e,e.return,k)}}break;case 6:if(ze(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(x(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){H(e,e.return,k)}}break;case 3:if(ze(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(k){H(e,e.return,k)}break;case 4:ze(t,e),Me(e);break;case 13:ze(t,e),Me(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(zo=Q())),r&4&&Vs(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(le=(d=le)||v,ze(t,e),le=d):ze(t,e),Me(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!v&&e.mode&1)for(j=e,v=e.child;v!==null;){for(g=j=v;j!==null;){switch(h=j,m=h.child,h.tag){case 0:case 11:case 14:case 15:Pn(4,h,h.return);break;case 1:Qt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){H(r,n,k)}}break;case 5:Qt(h,h.return);break;case 22:if(h.memoizedState!==null){$s(g);continue}}m!==null?(m.return=h,j=m):$s(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=wa("display",o))}catch(k){H(e,e.return,k)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(k){H(e,e.return,k)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ze(t,e),Me(e),r&4&&Vs(e);break;case 21:break;default:ze(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qu(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(On(i,""),r.flags&=-33);var l=Us(e);Al(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Us(e);Ol(e,a,o);break;default:throw Error(x(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kf(e,t,n){j=e,Xu(e)}function Xu(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var i=j,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wr;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||le;a=wr;var d=le;if(wr=o,(le=u)&&!d)for(j=i;j!==null;)o=j,u=o.child,o.tag===22&&o.memoizedState!==null?Hs(i):u!==null?(u.return=o,j=u):Hs(i);for(;l!==null;)j=l,Xu(l),l=l.sibling;j=i,wr=a,le=d}Bs(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,j=l):Bs(e)}}function Bs(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:_e(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ns(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ns(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var v=d.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&Bn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}le||t.flags&512&&Ml(t)}catch(h){H(t,t.return,h)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function $s(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Hs(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hi(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){H(t,i,u)}}var l=t.return;try{Ml(t)}catch(u){H(t,l,u)}break;case 5:var o=t.return;try{Ml(t)}catch(u){H(t,o,u)}}}catch(u){H(t,t.return,u)}if(t===e){j=null;break}var a=t.sibling;if(a!==null){a.return=t.return,j=a;break}j=t.return}}var Sf=Math.ceil,ei=Ze.ReactCurrentDispatcher,Fo=Ze.ReactCurrentOwner,Ne=Ze.ReactCurrentBatchConfig,D=0,q=null,Y=null,te=0,ge=0,Yt=vt(0),X=0,Jn=null,Pt=0,mi=0,To=0,Ln=null,de=null,zo=0,sn=1/0,$e=null,ti=!1,Ul=null,dt=null,kr=!1,lt=null,ni=0,Dn=0,Vl=null,Lr=-1,Dr=0;function ae(){return D&6?Q():Lr!==-1?Lr:Lr=Q()}function ft(e){return e.mode&1?D&2&&te!==0?te&-te:lf.transition!==null?(Dr===0&&(Dr=Da()),Dr):(e=R,e!==0||(e=window.event,e=e===void 0?16:Va(e.type)),e):1}function Re(e,t,n,r){if(50<Dn)throw Dn=0,Vl=null,Error(x(185));er(e,n,r),(!(D&2)||e!==q)&&(e===q&&(!(D&2)&&(mi|=n),X===4&&rt(e,te)),me(e,r),n===1&&D===0&&!(t.mode&1)&&(sn=Q()+500,di&&yt()))}function me(e,t){var n=e.callbackNode;id(e,t);var r=Ur(e,e===q?te:0);if(r===0)n!==null&&Jo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Jo(n),t===1)e.tag===0?rf(Ws.bind(null,e)):lu(Ws.bind(null,e)),qd(function(){!(D&6)&&yt()}),n=null;else{switch(Ra(r)){case 1:n=eo;break;case 4:n=Pa;break;case 16:n=Ar;break;case 536870912:n=La;break;default:n=Ar}n=rc(n,Gu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Gu(e,t){if(Lr=-1,Dr=0,D&6)throw Error(x(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Ur(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ri(e,r);else{t=r;var i=D;D|=2;var l=Ju();(q!==e||te!==t)&&($e=null,sn=Q()+500,Ct(e,t));do try{Nf();break}catch(a){Zu(e,a)}while(!0);ho(),ei.current=l,D=i,Y!==null?t=0:(q=null,te=0,t=X)}if(t!==0){if(t===2&&(i=pl(e),i!==0&&(r=i,t=Bl(e,i))),t===1)throw n=Jn,Ct(e,0),rt(e,r),me(e,Q()),n;if(t===6)rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!jf(i)&&(t=ri(e,r),t===2&&(l=pl(e),l!==0&&(r=l,t=Bl(e,l))),t===1))throw n=Jn,Ct(e,0),rt(e,r),me(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(x(345));case 2:St(e,de,$e);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=zo+500-Q(),10<t)){if(Ur(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kl(St.bind(null,e,de,$e),t);break}St(e,de,$e);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-De(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sf(r/1960))-r,10<r){e.timeoutHandle=kl(St.bind(null,e,de,$e),r);break}St(e,de,$e);break;case 5:St(e,de,$e);break;default:throw Error(x(329))}}}return me(e,Q()),e.callbackNode===n?Gu.bind(null,e):null}function Bl(e,t){var n=Ln;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=ri(e,t),e!==2&&(t=de,de=n,t!==null&&$l(t)),e}function $l(e){de===null?de=e:de.push.apply(de,e)}function jf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ie(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~To,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Ws(e){if(D&6)throw Error(x(327));qt();var t=Ur(e,0);if(!(t&1))return me(e,Q()),null;var n=ri(e,t);if(e.tag!==0&&n===2){var r=pl(e);r!==0&&(t=r,n=Bl(e,r))}if(n===1)throw n=Jn,Ct(e,0),rt(e,t),me(e,Q()),n;if(n===6)throw Error(x(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,St(e,de,$e),me(e,Q()),null}function _o(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(sn=Q()+500,di&&yt())}}function Lt(e){lt!==null&&lt.tag===0&&!(D&6)&&qt();var t=D;D|=1;var n=Ne.transition,r=R;try{if(Ne.transition=null,R=1,e)return e()}finally{R=r,Ne.transition=n,D=t,!(D&6)&&yt()}}function Po(){ge=Yt.current,A(Yt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Jd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(co(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wr();break;case 3:ln(),A(pe),A(oe),wo();break;case 5:xo(r);break;case 4:ln();break;case 13:A(V);break;case 19:A(V);break;case 10:mo(r.type._context);break;case 22:case 23:Po()}n=n.return}if(q=e,Y=e=pt(e.current,null),te=ge=t,X=0,Jn=null,To=mi=Pt=0,de=Ln=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}Et=null}return e}function Zu(e,t){do{var n=Y;try{if(ho(),zr.current=qr,Jr){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jr=!1}if(_t=0,J=K=B=null,_n=!1,Xn=0,Fo.current=null,n===null||n.return===null){X=1,Jn=t,Y=null;break}e:{var l=e,o=n.return,a=n,u=t;if(t=te,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,v=a,g=v.tag;if(!(v.mode&1)&&(g===0||g===11||g===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var m=Ps(o);if(m!==null){m.flags&=-257,Ls(m,o,a,l,t),m.mode&1&&_s(l,d,t),t=m,u=d;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){_s(l,d,t),Lo();break e}u=Error(x(426))}}else if(U&&a.mode&1){var I=Ps(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ls(I,o,a,l,t),fo(on(u,a));break e}}l=u=on(u,a),X!==4&&(X=2),Ln===null?Ln=[l]:Ln.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ru(l,u,t);Es(l,f);break e;case 1:a=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(dt===null||!dt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=Iu(l,a,t);Es(l,y);break e}}l=l.return}while(l!==null)}ec(n)}catch(S){t=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Ju(){var e=ei.current;return ei.current=qr,e===null?qr:e}function Lo(){(X===0||X===3||X===2)&&(X=4),q===null||!(Pt&268435455)&&!(mi&268435455)||rt(q,te)}function ri(e,t){var n=D;D|=2;var r=Ju();(q!==e||te!==t)&&($e=null,Ct(e,t));do try{Ef();break}catch(i){Zu(e,i)}while(!0);if(ho(),D=n,ei.current=r,Y!==null)throw Error(x(261));return q=null,te=0,X}function Ef(){for(;Y!==null;)qu(Y)}function Nf(){for(;Y!==null&&!Xc();)qu(Y)}function qu(e){var t=nc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?ec(e):Y=t,Fo.current=null}function ec(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(n=vf(n,t,ge),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);X===0&&(X=5)}function St(e,t,n){var r=R,i=Ne.transition;try{Ne.transition=null,R=1,Cf(e,t,n,r)}finally{Ne.transition=i,R=r}return null}function Cf(e,t,n,r){do qt();while(lt!==null);if(D&6)throw Error(x(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(x(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(ld(e,l),e===q&&(Y=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,rc(Ar,function(){return qt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ne.transition,Ne.transition=null;var o=R;R=1;var a=D;D|=4,Fo.current=null,wf(e,n),Ku(n,e),bd(xl),Vr=!!yl,xl=yl=null,e.current=n,kf(n),Gc(),D=a,R=o,Ne.transition=l}else e.current=n;if(kr&&(kr=!1,lt=e,ni=i),l=e.pendingLanes,l===0&&(dt=null),qc(n.stateNode),me(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ti)throw ti=!1,e=Ul,Ul=null,e;return ni&1&&e.tag!==0&&qt(),l=e.pendingLanes,l&1?e===Vl?Dn++:(Dn=0,Vl=e):Dn=0,yt(),null}function qt(){if(lt!==null){var e=Ra(ni),t=Ne.transition,n=R;try{if(Ne.transition=null,R=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,ni=0,D&6)throw Error(x(331));var i=D;for(D|=4,j=e.current;j!==null;){var l=j,o=l.child;if(j.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var d=a[u];for(j=d;j!==null;){var v=j;switch(v.tag){case 0:case 11:case 15:Pn(8,v,l)}var g=v.child;if(g!==null)g.return=v,j=g;else for(;j!==null;){v=j;var h=v.sibling,m=v.return;if(bu(v),v===d){j=null;break}if(h!==null){h.return=m,j=h;break}j=m}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var I=k.sibling;k.sibling=null,k=I}while(k!==null)}}j=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,j=o;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Pn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,j=f;break e}j=l.return}}var c=e.current;for(j=c;j!==null;){o=j;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,j=p;else e:for(o=c;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hi(9,a)}}catch(S){H(a,a.return,S)}if(a===o){j=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,j=y;break e}j=a.return}}if(D=i,yt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(oi,e)}catch{}r=!0}return r}finally{R=n,Ne.transition=t}}return!1}function bs(e,t,n){t=on(n,t),t=Ru(e,t,1),e=ct(e,t,1),t=ae(),e!==null&&(er(e,1,t),me(e,t))}function H(e,t,n){if(e.tag===3)bs(e,e,n);else for(;t!==null;){if(t.tag===3){bs(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=on(n,e),e=Iu(t,e,1),t=ct(t,e,1),e=ae(),t!==null&&(er(t,1,e),me(t,e));break}}t=t.return}}function Ff(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(X===4||X===3&&(te&130023424)===te&&500>Q()-zo?Ct(e,0):To|=n),me(e,t)}function tc(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=ae();e=Xe(e,t),e!==null&&(er(e,t,n),me(e,n))}function Tf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tc(e,n)}function zf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(t),tc(e,n)}var nc;nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,gf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,U&&t.flags&1048576&&ou(t,Yr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var i=tn(t,oe.current);Jt(t,n),i=So(null,t,r,e,i,n);var l=jo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(l=!0,br(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vo(t),i.updater=pi,t.stateNode=i,i._reactInternals=t,Tl(t,r,e,n),t=Pl(null,t,r,!0,l,n)):(t.tag=0,U&&l&&uo(t),se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Pf(r),e=_e(r,e),i){case 0:t=_l(null,t,r,e,n);break e;case 1:t=Is(null,t,r,e,n);break e;case 11:t=Ds(null,t,r,e,n);break e;case 14:t=Rs(null,t,r,_e(r.type,e),n);break e}throw Error(x(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),_l(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Is(e,t,r,i,n);case 3:e:{if(Uu(t),e===null)throw Error(x(387));r=t.pendingProps,l=t.memoizedState,i=l.element,fu(e,t),Gr(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=on(Error(x(423)),t),t=Ms(e,t,r,n,i);break e}else if(r!==i){i=on(Error(x(424)),t),t=Ms(e,t,r,n,i);break e}else for(ve=ut(t.stateNode.containerInfo.firstChild),ye=t,U=!0,Le=null,n=cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===i){t=Ge(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return pu(t),e===null&&Nl(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,wl(r,i)?o=null:l!==null&&wl(r,l)&&(t.flags|=32),Au(e,t),se(e,t,o,n),t.child;case 6:return e===null&&Nl(t),null;case 13:return Vu(e,t,n);case 4:return yo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Ds(e,t,r,i,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,M(Kr,r._currentValue),r._currentValue=o,l!==null)if(Ie(l.value,o)){if(l.children===i.children&&!pe.current){t=Ge(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Qe(-1,n&-n),u.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var v=d.pending;v===null?u.next=u:(u.next=v.next,v.next=u),d.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Cl(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cl(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jt(t,n),i=Ce(i),r=r(i),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,i=_e(r,t.pendingProps),i=_e(r.type,i),Rs(e,t,r,i,n);case 15:return Mu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:_e(r,i),Pr(e,t),t.tag=1,he(r)?(e=!0,br(t)):e=!1,Jt(t,n),Du(t,r,i),Tl(t,r,i,n),Pl(null,t,r,!0,e,n);case 19:return Bu(e,t,n);case 22:return Ou(e,t,n)}throw Error(x(156,t.tag))};function rc(e,t){return _a(e,t)}function _f(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new _f(e,t,n,r)}function Do(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pf(e){if(typeof e=="function")return Do(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zl)return 11;if(e===Jl)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rr(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")Do(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ot:return Ft(n.children,i,l,t);case Gl:o=8,i|=8;break;case Ji:return e=Ee(12,n,t,i|2),e.elementType=Ji,e.lanes=l,e;case qi:return e=Ee(13,n,t,i),e.elementType=qi,e.lanes=l,e;case el:return e=Ee(19,n,t,i),e.elementType=el,e.lanes=l,e;case pa:return gi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case da:o=10;break e;case fa:o=9;break e;case Zl:o=11;break e;case Jl:o=14;break e;case et:o=16,r=null;break e}throw Error(x(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Ft(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function gi(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=pa,e.lanes=n,e.stateNode={isHidden:!1},e}function Ki(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Xi(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zi(0),this.expirationTimes=zi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ro(e,t,n,r,i,l,o,a,u){return e=new Lf(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ee(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vo(l),e}function Df(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ic(e){if(!e)return mt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(x(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(x(171))}if(e.tag===1){var n=e.type;if(he(n))return iu(e,n,t)}return t}function lc(e,t,n,r,i,l,o,a,u){return e=Ro(n,r,!0,e,i,l,o,a,u),e.context=ic(null),n=e.current,r=ae(),i=ft(n),l=Qe(r,i),l.callback=t??null,ct(n,l,i),e.current.lanes=i,er(e,i,r),me(e,r),e}function vi(e,t,n,r){var i=t.current,l=ae(),o=ft(i);return n=ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(i,t,o),e!==null&&(Re(e,i,o,l),Tr(e,i,o)),o}function ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Io(e,t){Qs(e,t),(e=e.alternate)&&Qs(e,t)}function Rf(){return null}var oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Mo(e){this._internalRoot=e}yi.prototype.render=Mo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(x(409));vi(e,t,null,null)};yi.prototype.unmount=Mo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){vi(null,e,null,null)}),t[Ke]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Ua(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ys(){}function If(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=ii(o);l.call(d)}}var o=lc(t,r,e,0,null,!1,!1,"",Ys);return e._reactRootContainer=o,e[Ke]=o.current,Wn(e.nodeType===8?e.parentNode:e),Lt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var d=ii(u);a.call(d)}}var u=Ro(e,0,!1,null,null,!1,!1,"",Ys);return e._reactRootContainer=u,e[Ke]=u.current,Wn(e.nodeType===8?e.parentNode:e),Lt(function(){vi(t,u,n,r)}),u}function wi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var u=ii(o);a.call(u)}}vi(t,o,e,i)}else o=If(n,t,e,i,r);return ii(o)}Ia=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jn(t.pendingLanes);n!==0&&(to(t,n|1),me(t,Q()),!(D&6)&&(sn=Q()+500,yt()))}break;case 13:Lt(function(){var r=Xe(e,1);if(r!==null){var i=ae();Re(r,e,1,i)}}),Io(e,1)}};no=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ae();Re(t,e,134217728,n)}Io(e,134217728)}};Ma=function(e){if(e.tag===13){var t=ft(e),n=Xe(e,t);if(n!==null){var r=ae();Re(n,e,t,r)}Io(e,t)}};Oa=function(){return R};Aa=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};cl=function(e,t,n){switch(t){case"input":if(rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ci(r);if(!i)throw Error(x(90));ma(r),rl(r,i)}}}break;case"textarea":va(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Ea=_o;Na=Lt;var Mf={usingClientEntryPoint:!1,Events:[nr,Bt,ci,Sa,ja,_o]},wn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Of={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ta(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{oi=Sr.inject(Of),Ue=Sr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(t))throw Error(x(200));return Df(e,t,null,n)};we.createRoot=function(e,t){if(!Oo(e))throw Error(x(299));var n=!1,r="",i=oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ro(e,1,!1,null,null,n,!1,r,i),e[Ke]=t.current,Wn(e.nodeType===8?e.parentNode:e),new Mo(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(x(188)):(e=Object.keys(e).join(","),Error(x(268,e)));return e=Ta(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Lt(e)};we.hydrate=function(e,t,n){if(!xi(t))throw Error(x(200));return wi(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Oo(e))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=oc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=lc(t,null,e,1,n??null,i,!1,l,o),e[Ke]=t.current,Wn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new yi(t)};we.render=function(e,t,n){if(!xi(t))throw Error(x(200));return wi(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!xi(e))throw Error(x(40));return e._reactRootContainer?(Lt(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=_o;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xi(n))throw Error(x(200));if(e==null||e._reactInternals===void 0)throw Error(x(38));return wi(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)}catch(e){console.error(e)}}sc(),sa.exports=we;var Af=sa.exports,Ks=Af;Gi.createRoot=Ks.createRoot,Gi.hydrateRoot=Ks.hydrateRoot;const P={logo:e=>s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...e,children:[s.jsxs("defs",{children:[s.jsxs("radialGradient",{id:"vt-gradient",children:[s.jsx("stop",{offset:"0%",style:{stopColor:"#FFEB3B",stopOpacity:1}}),s.jsx("stop",{offset:"100%",style:{stopColor:"#FFC107",stopOpacity:1}})]}),s.jsx("style",{children:`
          @keyframes vt-pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .vt-animated {
            animation: vt-pulse 3s ease-in-out infinite;
            transform-origin: center;
          }
        `})]}),s.jsx("rect",{width:"24",height:"24",fill:"url(#vt-gradient)",rx:"3"}),s.jsx("text",{x:"12",y:"19",fontFamily:"Arial Black",fontSize:"20",fontWeight:"900",fill:"#000000",textAnchor:"middle",className:"vt-animated",children:"VT"})]}),shop:e=>s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...e,children:[s.jsx("path",{d:"M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2z"}),s.jsx("path",{d:"M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"})]}),history:e=>s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...e,children:[s.jsx("circle",{cx:"12",cy:"12",r:"10"}),s.jsx("polyline",{points:"12 6 12 12 16 14"})]}),notifications:e=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",...e,children:s.jsx("path",{d:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"})}),home:e=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}),mining:e=>s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...e,children:[s.jsx("path",{d:"M12.2651 3.70309C9.72917 3.47824 7.38425 4.16153 5.84197 5.4923C5.65153 5.65663 5.82289 5.9364 6.06757 5.87805C7.78468 5.46852 9.73866 5.38359 11.772 5.68067L12.2651 3.70309Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("path",{d:"M15.168 6.52739C17.1029 7.21968 18.7883 8.21203 20.1122 9.37977C20.3009 9.54616 20.5835 9.37959 20.4925 9.14509C19.7555 7.246 18.0058 5.5418 15.6611 4.5498L15.168 6.52739Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("rect",{x:"12.4812",y:"5.93628",width:"2",height:"5",transform:"rotate(14 12.4812 5.93628)",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("rect",{x:"10.7865",y:"10.6668",width:"3",height:"9.5",transform:"rotate(14 10.7865 10.6668)",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),s.jsx("rect",{x:"12.3583",y:"3.3291",width:"3.5",height:"2.75",transform:"rotate(14 12.3583 3.3291)",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})]}),tasks:e=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"})}),referrals:e=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"})}),wallet:e=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"})}),ton:e=>s.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 56 56",fill:"none",...e,children:[s.jsx("path",{d:"M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z",fill:"#000000"}),s.jsx("path",{d:"M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z",fill:"#FFD700"})]}),crown:e=>s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",...e,children:s.jsx("path",{d:"M2 6l2-2 2 2 2-3 2 3 2-2 2 2v7H2V6zm2 5h8v-3l-1.5 1.5L8 7l-2.5 2.5L4 8v3z"})}),diamond:e=>s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",...e,children:s.jsx("path",{d:"M6 2l-2 3h8l-2-3H6zm-3.5 4l5.5 8 5.5-8h-11z"})}),star:e=>s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",...e,children:s.jsx("path",{d:"M8 .5l2.09 4.23 4.67.68-3.38 3.29.8 4.65L8 11.14l-4.18 2.2.8-4.65L1.24 5.41l4.67-.68L8 .5z"})}),check:e=>s.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",...e,children:s.jsx("polyline",{points:"17 5 8 14 3 9"})}),arrowUp:e=>s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",...e,children:[s.jsx("line",{x1:"10",y1:"16",x2:"10",y2:"4"}),s.jsx("polyline",{points:"4 10 10 4 16 10"})]}),arrowDown:e=>s.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"2",...e,children:[s.jsx("line",{x1:"10",y1:"4",x2:"10",y2:"16"}),s.jsx("polyline",{points:"16 10 10 16 4 10"})]}),settings:e=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"})}),claim:e=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9L12 7.5 8.5 11H11v4h2v-4h2.5z"})}),upgrade:e=>s.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",...e,children:s.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})},Uf=({balance:e=0,vipLevel:t=0,notifications:n=0,onLogoClick:r,onBalanceClick:i,onShopClick:l,onHistoryClick:o,onNotificationClick:a})=>{const[u,d]=G.useState(!1);G.useEffect(()=>{const g=()=>{d(window.scrollY>10)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]);const v=g=>new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(g);return s.jsxs(s.Fragment,{children:[s.jsx("style",{jsx:!0,children:`
        .vipton-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: rgba(28, 28, 30, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .vipton-header.scrolled {
          background: rgba(28, 28, 30, 0.98);
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
        }

        .header-content {
          height: 100%;
          padding: 0 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Left Section */
        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 0 0 auto;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: transform 0.2s;
          -webkit-tap-highlight-color: transparent;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .logo-container:active {
          transform: scale(0.98);
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #FFD700, #FFC107);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(255, 215, 0, 0.3);
          position: relative;
        }

        .logo-icon::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent);
        }

        .logo-icon svg {
          width: 20px;
          height: 20px;
          color: #000000;
          position: relative;
          z-index: 1;
        }

        .logo-text {
          font-size: 18px;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.5px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
        }

        /* Center Section */
        .header-center {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          justify-content: center;
        }

        .balance-container {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 215, 0, 0.1);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid rgba(255, 215, 0, 0.1);
        }

        .balance-container:hover {
          background: rgba(255, 215, 0, 0.15);
          transform: translateY(-1px);
          border-color: rgba(255, 215, 0, 0.2);
        }

        .balance-container:active {
          transform: translateY(0);
        }

        .balance-icon {
          width: 16px;
          height: 16px;
          color: #FFD700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .balance-icon svg {
          width: 16px;
          height: 16px;
        }

        .balance-amount {
          font-size: 14px;
          font-weight: 600;
          color: #FFD700;
          font-family: 'SF Mono', monospace;
        }

        .balance-currency {
          font-size: 12px;
          color: rgba(255, 215, 0, 0.8);
          margin-left: 2px;
          font-weight: 500;
        }

        /* VIP Badge */
        .vip-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #FFD700, #FFC107);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
        }

        .vip-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .vip-badge:hover {
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(255, 215, 0, 0.4);
        }

        .vip-badge:active {
          transform: translateY(0);
        }

        .vip-badge svg {
          width: 14px;
          height: 14px;
          color: #000000;
          position: relative;
          z-index: 1;
        }

        .vip-level {
          font-size: 12px;
          font-weight: 700;
          color: #000000;
          position: relative;
          z-index: 1;
        }

        /* Right Section */
        .header-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 0 0 auto;
        }

        .header-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 215, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          -webkit-tap-highlight-color: transparent;
        }

        .header-btn:hover {
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.2);
          transform: translateY(-1px);
        }

        .header-btn:active {
          transform: translateY(0);
          background: rgba(255, 215, 0, 0.15);
        }

        .header-btn svg {
          width: 20px;
          height: 20px;
          color: #FFD700;
        }

        /* Notification Badge */
        .notification-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          min-width: 16px;
          height: 16px;
          padding: 0 4px;
          background: #FF3B30;
          border-radius: 8px;
          border: 2px solid #1C1C1E;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: #FFFFFF;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Mobile Responsive */
        @media (max-width: 390px) {
          .logo-text {
            display: none;
          }
          
          .balance-currency {
            display: none;
          }

          .header-content {
            padding: 0 12px;
          }

          .header-btn {
            width: 32px;
            height: 32px;
          }

          .header-btn svg {
            width: 18px;
            height: 18px;
          }
        }

        @media (max-width: 320px) {
          .vip-badge {
            padding: 3px 8px;
          }

          .vip-level {
            font-size: 11px;
          }

          .balance-container {
            padding: 5px 10px;
          }

          .balance-amount {
            font-size: 13px;
          }
        }
      `}),s.jsx("header",{className:`vipton-header ${u?"scrolled":""}`,children:s.jsxs("div",{className:"header-content",children:[s.jsx("div",{className:"header-left",children:s.jsxs("div",{className:"logo-container",onClick:r,children:[s.jsx("div",{className:"logo-icon",children:s.jsx(P.logo,{})}),s.jsx("span",{className:"logo-text",children:"VipTon"})]})}),s.jsxs("div",{className:"header-center",children:[s.jsxs("div",{className:"balance-container",onClick:i,children:[s.jsx("span",{className:"balance-icon",children:s.jsx(P.ton,{style:{width:20,height:20}})}),s.jsx("span",{className:"balance-amount",children:v(e)}),s.jsx("span",{className:"balance-currency",children:"TON"})]}),t>0&&s.jsxs("div",{className:"vip-badge",children:[t>=3?s.jsx(P.diamond,{}):t>=2?s.jsx(P.crown,{}):s.jsx(P.star,{}),s.jsxs("span",{className:"vip-level",children:["VIP ",t]})]})]}),s.jsxs("div",{className:"header-right",children:[s.jsx("button",{className:"header-btn",onClick:l,"aria-label":"Shop",children:s.jsx(P.shop,{})}),s.jsx("button",{className:"header-btn",onClick:o,"aria-label":"History",children:s.jsx(P.history,{})}),s.jsxs("button",{className:"header-btn",onClick:a,"aria-label":"Notifications",children:[s.jsx(P.notifications,{}),n>0&&s.jsx("span",{className:"notification-badge",children:n>9?"9+":n})]})]})]})})]})},Vf=({activeTab:e="home",onTabChange:t,showBadges:n={home:0,mining:0,tasks:0,referrals:0,wallet:0}})=>{const[r,i]=G.useState(e);G.useEffect(()=>{i(e)},[e]);const l=[{id:"home",icon:P.home,label:"Home",badge:n.home},{id:"mining",icon:P.mining,label:"Mining",badge:n.mining},{id:"tasks",icon:P.tasks,label:"Tasks",badge:n.tasks},{id:"referrals",icon:P.referrals,label:"Referrals",badge:n.referrals},{id:"wallet",icon:P.wallet,label:"Wallet",badge:n.wallet}],o=a=>{var u,d;i(a),t&&t(a),(d=(u=window.Telegram)==null?void 0:u.WebApp)!=null&&d.HapticFeedback&&window.Telegram.WebApp.HapticFeedback.impactOccurred("light")};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .vipton-tabbar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #000000;
          border-top: 0.5px solid rgba(255, 215, 0, 0.15);
          padding: 8px 0;
          padding-bottom: env(safe-area-inset-bottom, 8px);
          z-index: 100;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .tabbar-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0 8px;
          max-width: 500px;
          margin: 0 auto;
          height: 56px;
        }

        .tab-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4px;
          background: transparent;
          border: none;
          cursor: pointer;
          position: relative;
          transition: all 0.2s ease;
          -webkit-tap-highlight-color: transparent;
          outline: none;
          text-decoration: none;
        }

        .tab-item:active {
          transform: scale(0.95);
        }

        .tab-icon-wrapper {
          position: relative;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          transition: all 0.2s ease;
        }

        .tab-icon {
          width: 24px;
          height: 24px;
          color: #666666;
          transition: all 0.2s ease;
        }

        .tab-item.active .tab-icon {
          color: #FFD700;
        }

        .tab-item:hover .tab-icon {
          color: #FFC107;
        }

        .tab-icon svg {
          width: 100%;
          height: 100%;
          fill: currentColor;
        }

        .tab-label {
          font-size: 10px;
          font-weight: 500;
          color: #666666;
          transition: all 0.2s ease;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
          letter-spacing: -0.1px;
        }

        .tab-item.active .tab-label {
          color: #FFD700;
          font-weight: 600;
        }

        .tab-item:hover .tab-label {
          color: #FFC107;
        }

        /* Active indicator dot */
        .tab-item.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #FFD700;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
        }

        /* Badge */
        .tab-badge {
          position: absolute;
          top: -4px;
          right: 50%;
          transform: translateX(12px);
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          background: #FF3B30;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: #FFFFFF;
          border: 1.5px solid #000000;
          z-index: 2;
        }

        .tab-badge.large {
          background: #FFD700;
          color: #000000;
        }

        /* Mobile Responsive */
        @media (max-width: 390px) {
          .tabbar-container {
            height: 52px;
          }
          
          .tab-icon-wrapper {
            width: 22px;
            height: 22px;
          }

          .tab-icon {
            width: 22px;
            height: 22px;
          }

          .tab-label {
            font-size: 10px;
          }
        }

        @media (max-width: 320px) {
          .tab-label {
            font-size: 9px;
          }
        }
      `}),s.jsx("nav",{className:"vipton-tabbar",children:s.jsx("div",{className:"tabbar-container",children:l.map(a=>{const u=a.icon,d=r===a.id;return s.jsxs("button",{className:`tab-item ${d?"active":""}`,onClick:()=>o(a.id),"aria-label":a.label,"aria-current":d?"page":void 0,children:[s.jsxs("div",{className:"tab-icon-wrapper",children:[s.jsx("span",{className:"tab-icon",children:s.jsx(u,{})}),a.badge>0&&s.jsx("span",{className:`tab-badge ${a.badge>99?"large":""}`,children:a.badge>99?"99+":a.badge})]}),s.jsx("span",{className:"tab-label",children:a.label})]},a.id)})})})]})};class Rn{constructor(){var t;if(Rn.instance)return Rn.instance;this.config={apiUrl:"https://vipton-vipton.up.railway.app/api",authEndpoint:"/auth/telegram",verifyEndpoint:"/auth/verify",refreshEndpoint:"/auth/refresh",profileEndpoint:"/auth/profile",vipStatusEndpoint:"/auth/vip-status",autoRefresh:!0,refreshThreshold:3e5,maxRetries:3,retryDelay:1e3},this.state={isAuthenticated:!1,isAuthenticating:!1,authError:null,initPromise:null,refreshPromise:null,refreshTimeout:null,user:null,token:null},this.telegram=(t=window.Telegram)==null?void 0:t.WebApp,Rn.instance=this}async init(){if(this.state.initPromise)return this.state.initPromise;this.state.initPromise=this._performInit();try{return await this.state.initPromise}catch(t){throw this.state.initPromise=null,t}}async _performInit(){var t;console.log("🔐 Initializing VipTon Auth Service...");try{const n=localStorage.getItem("vipton_token"),r=localStorage.getItem("vipton_user");if(n&&r){if(console.log("📦 Found saved session"),await this.verifyToken(n))return this.state.token=n,this.state.user=JSON.parse(r),this.state.isAuthenticated=!0,!0;console.log("⚠️ Saved token is invalid"),this.clearSession()}return(t=this.telegram)!=null&&t.initData?(console.log("📱 Telegram initData available"),await this.authenticate()):(console.log("❌ No authentication data available"),!1)}catch(n){return console.error("❌ Auth init failed:",n),this.handleAuthError(n),!1}}async authenticate(){var t;if(this.state.isAuthenticating)return console.log("⏳ Authentication already in progress"),!1;if(!((t=this.telegram)!=null&&t.initData))throw new Error("No Telegram data available");this.state.isAuthenticating=!0,this.state.authError=null;try{console.log("🚀 Authenticating with VipTon...");const n=await fetch(`${this.config.apiUrl}${this.config.authEndpoint}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({initData:this.telegram.initData})}),r=await n.json();if(!n.ok||!r.success)throw new Error(r.error||"Authentication failed");return this.state.token=r.data.token,this.state.user=r.data.user,this.state.isAuthenticated=!0,localStorage.setItem("vipton_token",r.data.token),localStorage.setItem("vipton_user",JSON.stringify(r.data.user)),this.config.autoRefresh&&r.data.expires_in&&this.scheduleTokenRefresh(r.data.expires_in),console.log("✅ VipTon authentication successful"),!0}catch(n){throw console.error("❌ Authentication failed:",n),this.handleAuthError(n),n}finally{this.state.isAuthenticating=!1}}async verifyToken(t){var n;try{const r=await fetch(`${this.config.apiUrl}${this.config.verifyEndpoint}`,{method:"GET",headers:{Authorization:`Bearer ${t}`,Accept:"application/json"}});if(!r.ok)return!1;const i=await r.json();return(n=i.data)!=null&&n.user&&(this.state.user=i.data.user,localStorage.setItem("vipton_user",JSON.stringify(i.data.user))),i.success===!0}catch(r){return console.error("Token verification error:",r),!1}}async getVipStatus(){if(!this.state.token)throw new Error("Not authenticated");try{const t=await fetch(`${this.config.apiUrl}${this.config.vipStatusEndpoint}`,{method:"GET",headers:{Authorization:`Bearer ${this.state.token}`,Accept:"application/json"}}),n=await t.json();if(!t.ok||!n.success)throw new Error(n.error||"Failed to get VIP status");return n.data}catch(t){throw console.error("VIP status error:",t),t}}async updateProfile(t){if(!this.state.token)throw new Error("Not authenticated");try{const n=await fetch(`${this.config.apiUrl}${this.config.profileEndpoint}`,{method:"PUT",headers:{Authorization:`Bearer ${this.state.token}`,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}),r=await n.json();if(!n.ok||!r.success)throw new Error(r.error||"Profile update failed");return this.state.user=r.data.user,localStorage.setItem("vipton_user",JSON.stringify(r.data.user)),r.data.user}catch(n){throw console.error("Profile update error:",n),n}}async refreshToken(){var t;if(!this.state.token)throw new Error("No token to refresh");try{const n=await fetch(`${this.config.apiUrl}${this.config.refreshEndpoint}`,{method:"POST",headers:{Authorization:`Bearer ${this.state.token}`,"Content-Type":"application/json",Accept:"application/json"}}),r=await n.json();if(!n.ok||!r.success){if((t=this.telegram)!=null&&t.initData)return await this.authenticate();throw new Error(r.error||"Token refresh failed")}return this.state.token=r.data.token,localStorage.setItem("vipton_token",r.data.token),r.data.user&&(this.state.user=r.data.user,localStorage.setItem("vipton_user",JSON.stringify(r.data.user))),r.data.expires_in&&this.scheduleTokenRefresh(r.data.expires_in),r.data.token}catch(n){throw console.error("Token refresh error:",n),n}}scheduleTokenRefresh(t){this.state.refreshTimeout&&clearTimeout(this.state.refreshTimeout);const n=Math.max(t*1e3-this.config.refreshThreshold,6e4);console.log(`⏰ Token refresh scheduled in ${Math.round(n/1e3)}s`),this.state.refreshTimeout=setTimeout(()=>{this.refreshToken().catch(r=>{console.error("Scheduled refresh failed:",r)})},n)}async logout(){console.log("👋 Logging out from VipTon..."),this.state.refreshTimeout&&(clearTimeout(this.state.refreshTimeout),this.state.refreshTimeout=null),this.state.isAuthenticated=!1,this.state.user=null,this.state.token=null,this.state.authError=null,this.clearSession(),console.log("✅ Logged out successfully")}clearSession(){localStorage.removeItem("vipton_token"),localStorage.removeItem("vipton_user")}handleAuthError(t){this.state.authError=t,this.state.isAuthenticated=!1}getUser(){return this.state.user}getToken(){return this.state.token}isAuthenticated(){return this.state.isAuthenticated&&!!this.state.token}getAuthHeaders(){return this.state.token?{Authorization:`Bearer ${this.state.token}`}:{}}}const Be=new Rn;class In{constructor(){if(In.instance)return In.instance;this.listeners=new Map,this.history=[],this.maxHistorySize=50,this.eventTypes={"auth:start":"Authentication process started","auth:success":"Authentication successful","auth:error":"Authentication error","auth:expired":"Authentication expired","auth:logout":"User logged out","auth:restored":"Session restored from storage","token:set":"Token was set","token:clear":"Token was cleared","token:expired":"Token expired","token:refreshed":"Token was refreshed","token:refresh:start":"Token refresh started","token:refresh:error":"Token refresh failed","user:login":"User logged in","user:logout":"User logged out","user:update":"User data updated","user:sync":"User data synced from another tab","user:profileUpdated":"User profile updated","vip:activated":"VIP status activated","vip:upgraded":"VIP level upgraded","vip:expired":"VIP status expired","vip:statusChanged":"VIP status changed","ton:balanceUpdated":"TON balance updated","ton:transactionCompleted":"TON transaction completed","ton:withdrawRequested":"TON withdrawal requested","permission:granted":"Permission granted","permission:denied":"Permission denied","permission:changed":"Permissions changed","network:online":"Network connection restored","network:offline":"Network connection lost","network:error":"Network error occurred","api:unauthorized":"401 response received","api:forbidden":"403 response received","api:badRequest":"400 response received","api:notFound":"404 response received","api:serverError":"5xx response received","api:rateLimited":"429 response received"},In.instance=this}on(t,n){return this.listeners.has(t)||this.listeners.set(t,new Set),this.listeners.get(t).add(n),()=>this.off(t,n)}once(t,n){const r=i=>{n(i),this.off(t,r)};this.on(t,r)}off(t,n){const r=this.listeners.get(t);r&&(r.delete(n),r.size===0&&this.listeners.delete(t))}emit(t,n=null){this.addToHistory(t,n),this.isDevelopment()&&console.log(`📢 VipTon Event: ${t}`,n);const r=this.listeners.get(t);r&&r.forEach(i=>{try{i(n)}catch(l){console.error(`Error in ${t} handler:`,l)}}),window.dispatchEvent(new CustomEvent(`vipton:${t}`,{detail:n}))}waitFor(t,n=3e4){return new Promise((r,i)=>{const l=setTimeout(()=>{this.off(t,o),i(new Error(`Timeout waiting for ${t}`))},n),o=a=>{clearTimeout(l),this.off(t,o),r(a)};this.on(t,o)})}batchEmit(t){t.forEach(({event:n,data:r})=>{this.emit(n,r)})}removeAllListeners(t=null){t?this.listeners.delete(t):this.listeners.clear()}listenerCount(t){const n=this.listeners.get(t);return n?n.size:0}eventNames(){return Array.from(this.listeners.keys())}addToHistory(t,n){this.history.push({event:t,data:n,timestamp:Date.now()}),this.history.length>this.maxHistorySize&&this.history.shift()}getHistory(t=null){return t?this.history.filter(n=>n.event===t):[...this.history]}clearHistory(){this.history=[]}isDevelopment(){return window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname.includes("railway.app")}createVipEmitter(){return{onActivated:t=>this.on("vip:activated",t),onUpgraded:t=>this.on("vip:upgraded",t),onExpired:t=>this.on("vip:expired",t),onStatusChanged:t=>this.on("vip:statusChanged",t),emitActivated:t=>this.emit("vip:activated",t),emitUpgraded:t=>this.emit("vip:upgraded",t),emitExpired:t=>this.emit("vip:expired",t),emitStatusChanged:t=>this.emit("vip:statusChanged",t)}}createTonEmitter(){return{onBalanceUpdated:t=>this.on("ton:balanceUpdated",t),onTransactionCompleted:t=>this.on("ton:transactionCompleted",t),onWithdrawRequested:t=>this.on("ton:withdrawRequested",t),emitBalanceUpdated:t=>this.emit("ton:balanceUpdated",t),emitTransactionCompleted:t=>this.emit("ton:transactionCompleted",t),emitWithdrawRequested:t=>this.emit("ton:withdrawRequested",t)}}debugMode(t=!0){t?(this._debugHandler=(n,r)=>{console.log(`[VipTon Events] ${n}:`,r)},Object.keys(this.eventTypes).forEach(n=>{this.on(n,r=>this._debugHandler(n,r))}),console.log("🔍 VipTon Events Debug Mode Enabled")):this._debugHandler&&(Object.keys(this.eventTypes).forEach(n=>{this.off(n,this._debugHandler)}),this._debugHandler=null,console.log("🔍 VipTon Events Debug Mode Disabled"))}getStats(){const t={totalEvents:this.history.length,eventCounts:{},listeners:{},lastEvent:this.history[this.history.length-1]||null};return this.history.forEach(n=>{t.eventCounts[n.event]=(t.eventCounts[n.event]||0)+1}),this.listeners.forEach((n,r)=>{t.listeners[r]=n.size}),t}}const qe=new In;class Bf{constructor(){this.token=null,this.tokenExpiry=null,this.tokenPayload=null,this.config={tokenKey:"vipton_token",expiryKey:"vipton_token_expiry",expiryBuffer:3e5,validateOnGet:!0},this.loadToken()}async setToken(t,n=86400){if(!t)throw new Error("Token is required");const r=this.decodeToken(t);if(!r)throw new Error("Invalid token format");const i=Date.now()+n*1e3;this.token=t,this.tokenExpiry=i,this.tokenPayload=r,localStorage.setItem(this.config.tokenKey,t),localStorage.setItem(this.config.expiryKey,i.toString()),console.log("🔑 VipTon token saved, expires in",Math.round(n/60),"minutes")}getToken(){return this.token?this.config.validateOnGet&&!this.isTokenValid()?(console.warn("⚠️ VipTon token expired"),this.clearToken(),null):this.token:null}getTokenPayload(){return!this.token||!this.isTokenValid()?null:this.tokenPayload}getTokenExpiry(){return this.tokenExpiry}getTimeUntilExpiry(){return this.tokenExpiry?this.tokenExpiry-Date.now():-1}isTokenValid(){return!this.token||!this.tokenExpiry?!1:Date.now()<this.tokenExpiry-this.config.expiryBuffer}willExpireSoon(t=3e5){const n=this.getTimeUntilExpiry();return n>0&&n<t}async clearToken(){this.token=null,this.tokenExpiry=null,this.tokenPayload=null,localStorage.removeItem(this.config.tokenKey),localStorage.removeItem(this.config.expiryKey),console.log("🔑 VipTon token cleared")}async loadToken(){try{const t=localStorage.getItem(this.config.tokenKey),n=localStorage.getItem(this.config.expiryKey);if(!t)return!1;const r=this.decodeToken(t);if(!r)return console.warn("⚠️ Invalid stored VipTon token"),await this.clearToken(),!1;const i=n?parseInt(n):null;return!i&&r.exp?this.tokenExpiry=r.exp*1e3:this.tokenExpiry=i||Date.now()+864e5,this.token=t,this.tokenPayload=r,this.isTokenValid()?(console.log("🔑 VipTon token loaded from storage"),!0):(console.warn("⚠️ Stored VipTon token is expired"),await this.clearToken(),!1)}catch(t){return console.error("Failed to load token:",t),!1}}decodeToken(t){try{const n=t.split(".");return n.length!==3?null:JSON.parse(atob(n[1]))}catch(n){return console.error("Failed to decode token:",n),null}}getUserId(){const t=this.getTokenPayload();return(t==null?void 0:t.user_id)||(t==null?void 0:t.id)||(t==null?void 0:t.telegram_id)||null}getVipInfo(){const t=this.getTokenPayload();return{isVip:(t==null?void 0:t.is_vip)||!1,level:(t==null?void 0:t.vip_level)||0}}addTokenToHeaders(t={}){const n=this.getToken();return n?{...t,Authorization:`Bearer ${n}`}:t}getAuthHeader(){const t=this.getToken();return t?`Bearer ${t}`:null}monitorExpiry(t,n=3e5){const r=()=>{this.willExpireSoon(n)&&t()},i=setInterval(r,6e4);return r(),()=>{clearInterval(i)}}exportTokenData(){return{hasToken:!!this.token,isValid:this.isTokenValid(),expiresAt:this.tokenExpiry,timeUntilExpiry:this.getTimeUntilExpiry(),vipInfo:this.getVipInfo(),payload:this.tokenPayload?{...this.tokenPayload,iat:void 0,exp:void 0}:null}}}const Xs=new Bf,ac=G.createContext(null),$f=({children:e})=>{const[t,n]=G.useState({user:null,loading:!0,error:null,isAuthenticated:!1,vipStatus:null,tonBalance:0});G.useEffect(()=>(r(),d(),()=>{v()}),[]);const r=async()=>{try{if(n(m=>({...m,loading:!0,error:null})),await Be.init()){const m=Be.getUser(),w=Xs.getVipInfo();n(k=>({...k,user:m,isAuthenticated:!0,vipStatus:w,tonBalance:(m==null?void 0:m.ton_balance)||0,loading:!1})),a()}else n(m=>({...m,loading:!1,isAuthenticated:!1}))}catch(h){console.error("Auth initialization error:",h),n(m=>({...m,loading:!1,error:h.message}))}},i=async()=>{try{if(n(m=>({...m,loading:!0,error:null})),await Be.authenticate()){const m=Be.getUser(),w=Xs.getVipInfo();return n(k=>({...k,user:m,isAuthenticated:!0,vipStatus:w,tonBalance:(m==null?void 0:m.ton_balance)||0,loading:!1})),qe.emit("user:login",m),a(),!0}return!1}catch(h){return console.error("Login error:",h),n(m=>({...m,loading:!1,error:h.message})),!1}},l=async()=>{try{await Be.logout(),n({user:null,loading:!1,error:null,isAuthenticated:!1,vipStatus:null,tonBalance:0}),qe.emit("user:logout")}catch(h){console.error("Logout error:",h)}},o=async h=>{try{const m=await Be.updateProfile(h);return n(w=>({...w,user:m,tonBalance:(m==null?void 0:m.ton_balance)||0})),qe.emit("user:update",m),m}catch(m){throw console.error("Profile update error:",m),m}},a=async()=>{try{const h=await Be.getVipStatus();return n(m=>({...m,vipStatus:h})),qe.emit("vip:statusChanged",h),h}catch(h){return console.error("VIP status fetch error:",h),null}},u=G.useCallback(h=>{n(m=>({...m,tonBalance:h,user:m.user?{...m.user,ton_balance:h}:null})),qe.emit("ton:balanceUpdated",{balance:h})},[]),d=()=>{const h=[qe.on("auth:expired",()=>{n(m=>({...m,isAuthenticated:!1,error:"Session expired"}))}),qe.on("user:update",m=>{n(w=>({...w,user:m,tonBalance:(m==null?void 0:m.ton_balance)||0}))}),qe.on("vip:statusChanged",m=>{n(w=>({...w,vipStatus:m}))})];window._viptonAuthUnsubscribers=h},v=()=>{window._viptonAuthUnsubscribers&&(window._viptonAuthUnsubscribers.forEach(h=>h()),delete window._viptonAuthUnsubscribers)},g={user:t.user,loading:t.loading,error:t.error,isAuthenticated:t.isAuthenticated,vipStatus:t.vipStatus,tonBalance:t.tonBalance,login:i,logout:l,updateProfile:o,fetchVipStatus:a,updateTonBalance:u,getToken:()=>Be.getToken(),getAuthHeaders:()=>Be.getAuthHeaders(),isVip:()=>{var h;return((h=t.vipStatus)==null?void 0:h.is_vip)||!1},getVipLevel:()=>{var h;return((h=t.vipStatus)==null?void 0:h.vip_level)||0}};return s.jsx(ac.Provider,{value:g,children:e})},Ao=()=>{const e=G.useContext(ac);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},Hf=()=>{const{vipStatus:e,fetchVipStatus:t,isVip:n,getVipLevel:r}=Ao();return{vipStatus:e,isVip:n(),level:r(),daysLeft:(e==null?void 0:e.days_left)||0,refresh:t}},Wf=()=>{const{tonBalance:e,updateTonBalance:t}=Ao();return{balance:e,formatted:new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(e||0),update:t}},bf=({message:e="Initializing VipTon...",showProgress:t=!1,progress:n=0})=>{const[r,i]=G.useState("");return G.useEffect(()=>{const l=setInterval(()=>{i(o=>o.length>=3?"":o+".")},500);return()=>clearInterval(l)},[]),s.jsxs("div",{className:"vipton-loader-container",children:[s.jsx("style",{jsx:!0,children:`
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
            `}),s.jsx("div",{className:"vipton-loader-bg"}),s.jsx("div",{className:"vipton-glow-orb"}),s.jsx("div",{className:"vipton-glow-orb"}),s.jsxs("div",{className:"vipton-loader-content",children:[s.jsxs("div",{className:"vipton-spinner-wrapper",children:[s.jsx("div",{className:"vipton-spinner-outer"}),s.jsx("div",{className:"vipton-spinner-inner"}),s.jsx("div",{className:"vipton-logo",children:"VT"})]}),s.jsxs("div",{className:"vipton-message",children:[e,s.jsx("span",{className:"vipton-dots",children:r})]}),t&&s.jsxs("div",{children:[s.jsx("div",{className:"vipton-progress-container",children:s.jsx("div",{className:"vipton-progress-fill",style:{width:`${Math.min(100,Math.max(0,n))}%`}})}),s.jsxs("div",{className:"vipton-progress-text",children:[n,"%"]})]})]})]})},Qf=({error:e=null,title:t="Authentication Error",message:n="Failed to authenticate with VipTon",canRetry:r=!0,onRetry:i=null,onClose:l=null})=>{const[o,a]=G.useState(!1),[u,d]=G.useState(!1),v=async()=>{if(i){d(!0);try{await i()}catch(w){console.error("Retry failed:",w)}finally{d(!1)}}},g=()=>{var w,k;l?l():(k=(w=window.Telegram)==null?void 0:w.WebApp)!=null&&k.close&&window.Telegram.WebApp.close()},m=(e==null?void 0:e.code)==="NO_TELEGRAM_DATA"?{icon:"🔒",title:"Telegram Required",message:"Please open VipTon in Telegram to continue"}:(e==null?void 0:e.code)==="NETWORK_ERROR"?{icon:"📡",title:"Connection Error",message:"Unable to connect to VipTon servers. Check your internet connection."}:(e==null?void 0:e.code)==="TOKEN_EXPIRED"?{icon:"⏰",title:"Session Expired",message:"Your session has expired. Please login again."}:{icon:"⚠️",title:t,message:n};return s.jsxs("div",{className:"vipton-error-container",children:[s.jsx("style",{jsx:!0,children:`
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
            `}),s.jsxs("div",{className:"vipton-error-card",children:[s.jsx("div",{className:"vipton-error-icon",children:m.icon}),s.jsx("h2",{className:"vipton-error-title",children:m.title}),s.jsx("p",{className:"vipton-error-message",children:m.message}),s.jsxs("div",{className:"vipton-error-buttons",children:[r&&i&&s.jsxs("button",{className:"vipton-btn vipton-btn-retry",onClick:v,disabled:u,children:[u&&s.jsx("span",{className:"vipton-spinner"}),u?"Retrying...":"Try Again"]}),s.jsx("button",{className:"vipton-btn vipton-btn-close",onClick:g,children:"Close"})]}),e&&s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"vipton-error-details-btn",onClick:()=>a(!o),children:[o?"Hide":"Show"," Details"]}),o&&s.jsx("pre",{className:"vipton-error-details",children:JSON.stringify(e,null,2)})]})]})]})},Yf=()=>{const{user:e,loading:t,error:n,isAuthenticated:r,login:i,logout:l}=Ao(),{isVip:o,level:a}=Hf(),{balance:u}=Wf(),[d,v]=G.useState("home"),[g,h]=G.useState(3),[m,w]=G.useState({home:0,mining:2,tasks:5,referrals:1,wallet:0});if(t)return s.jsx(bf,{message:"Loading VipTon...",showProgress:!1});if(n&&!r)return s.jsx(Qf,{error:{message:n},title:"Connection Error",message:n,canRetry:!0,onRetry:i});if(!r)return s.jsx(Kf,{onLogin:i});const k=()=>{v("home")},I=()=>{v("wallet")},f=()=>{console.log("Opening shop...")},c=()=>{console.log("Opening history...")},p=()=>{h(0),console.log("Opening notifications...")},y=S=>{v(S),w(N=>({...N,[S]:0}))};return s.jsxs(s.Fragment,{children:[s.jsx("style",{jsx:!0,children:`
                .vipton-app {
                    min-height: 100vh;
                    background: #000000;
                    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
                    color: #FFFFFF;
                }

                .vipton-content {
                    padding-top: 60px; /* Header height */
                    padding-bottom: 80px; /* TabBar height */
                    min-height: 100vh;
                }

                .content-wrapper {
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                }

                /* Reset styles */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    background: #000000;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}),s.jsxs("div",{className:"vipton-app",children:[s.jsx(Uf,{balance:u,vipLevel:a,notifications:g,onLogoClick:k,onBalanceClick:I,onShopClick:f,onHistoryClick:c,onNotificationClick:p}),s.jsx("div",{className:"vipton-content",children:s.jsxs("div",{className:"content-wrapper",children:[d==="home"&&s.jsx(Xf,{user:e,tonBalance:u,vipLevel:a,isVip:o}),d==="mining"&&s.jsx(Gf,{user:e}),d==="tasks"&&s.jsx(Zf,{}),d==="referrals"&&s.jsx(Jf,{user:e}),d==="wallet"&&s.jsx(qf,{balance:u,user:e})]})}),s.jsx(Vf,{activeTab:d,onTabChange:y,showBadges:m})]})]})},Kf=({onLogin:e})=>s.jsxs(s.Fragment,{children:[s.jsx("style",{jsx:!0,children:`
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
                width: 48px;
                height: 48px;
                margin: 0 auto 8px;
                background: rgba(255, 215, 0, 0.1);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFD700;
            }
            
            .vipton-feature-icon svg {
                width: 24px;
                height: 24px;
            }
            
            .vipton-feature-text {
                font-size: 12px;
                color: #8E8E93;
            }
        `}),s.jsxs("div",{className:"vipton-welcome",children:[s.jsx("div",{className:"vipton-bg-gradient"}),s.jsxs("div",{className:"vipton-welcome-content",children:[s.jsx("div",{className:"vipton-logo-container",children:"VT"}),s.jsx("h1",{className:"vipton-welcome-title",children:"VipTon"}),s.jsx("p",{className:"vipton-welcome-subtitle",children:"Premium TON Mining Platform"}),s.jsx("button",{className:"vipton-auth-btn",onClick:e,children:"Login with Telegram"}),s.jsxs("div",{className:"vipton-features",children:[s.jsxs("div",{className:"vipton-feature",children:[s.jsx("div",{className:"vipton-feature-icon",children:s.jsx(P.ton,{style:{width:20,height:20}})}),s.jsx("div",{className:"vipton-feature-text",children:"Earn TON"})]}),s.jsxs("div",{className:"vipton-feature",children:[s.jsx("div",{className:"vipton-feature-icon",children:s.jsx(P.crown,{})}),s.jsx("div",{className:"vipton-feature-text",children:"VIP Benefits"})]}),s.jsxs("div",{className:"vipton-feature",children:[s.jsx("div",{className:"vipton-feature-icon",children:s.jsx(P.mining,{})}),s.jsx("div",{className:"vipton-feature-text",children:"Fast Mining"})]})]})]})]})]}),Xf=({user:e,tonBalance:t,vipLevel:n,isVip:r})=>s.jsxs(s.Fragment,{children:[s.jsx("style",{jsx:!0,children:`
            .home-container {
                display: flex;
                flex-direction: column;
                gap: 20px;
                animation: fadeIn 0.5s ease-in;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .welcome-section {
                margin-bottom: 8px;
            }

            .welcome-title {
                font-size: 28px;
                font-weight: 700;
                color: #FFFFFF;
                margin: 0 0 4px;
            }

            .welcome-subtitle {
                font-size: 16px;
                color: #8E8E93;
            }

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 16px;
            }

            .stat-card {
                background: rgba(28, 28, 30, 0.9);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                position: relative;
                overflow: hidden;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            }

            .stat-card:hover {
                transform: translateY(-2px);
                border-color: rgba(255, 215, 0, 0.2);
            }

            .stat-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 2px;
                background: linear-gradient(90deg, 
                    transparent, rgba(255, 215, 0, 0.5), transparent);
            }

            .stat-icon {
                width: 32px;
                height: 32px;
                margin: 0 auto 12px;
                color: #FFD700;
            }

            .stat-value {
                font-size: 24px;
                font-weight: 700;
                color: #FFD700;
                margin-bottom: 4px;
            }

            .stat-label {
                font-size: 14px;
                color: #8E8E93;
            }

            .action-section {
                margin-top: 12px;
            }

            .action-grid {
                display: grid;
                gap: 12px;
            }

            .action-btn {
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

            .action-btn:hover {
                background: rgba(255, 215, 0, 0.1);
                border-color: rgba(255, 215, 0, 0.3);
                transform: translateY(-2px);
            }

            .action-btn.primary {
                background: linear-gradient(135deg, #FFD700, #FFC107);
                color: #000000;
                border: none;
            }

            .action-btn.primary:hover {
                box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
            }

            .action-btn svg {
                width: 20px;
                height: 20px;
            }

            .info-card {
                background: rgba(28, 28, 30, 0.9);
                border-radius: 16px;
                padding: 20px;
                border: 1px solid rgba(255, 215, 0, 0.1);
                margin-top: 20px;
            }

            .info-title {
                font-size: 18px;
                font-weight: 600;
                color: #FFD700;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .info-title svg {
                width: 20px;
                height: 20px;
            }

            .info-text {
                font-size: 14px;
                color: #8E8E93;
                line-height: 1.5;
            }
        `}),s.jsxs("div",{className:"home-container",children:[s.jsxs("div",{className:"welcome-section",children:[s.jsxs("h1",{className:"welcome-title",children:["Welcome, ",(e==null?void 0:e.first_name)||"Miner","!"]}),s.jsx("p",{className:"welcome-subtitle",children:"Your mining empire awaits"})]}),s.jsxs("div",{className:"stats-grid",children:[s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(P.ton,{style:{width:20,height:20}})}),s.jsx("div",{className:"stat-value",children:t.toFixed(2)}),s.jsx("div",{className:"stat-label",children:"TON Balance"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",children:n>=3?s.jsx(P.diamond,{}):n>=2?s.jsx(P.crown,{}):s.jsx(P.star,{})}),s.jsx("div",{className:"stat-value",children:r?`Level ${n}`:"Free"}),s.jsx("div",{className:"stat-label",children:"VIP Status"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(P.referrals,{})}),s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.total_referrals)||0}),s.jsx("div",{className:"stat-label",children:"Referrals"})]}),s.jsxs("div",{className:"stat-card",children:[s.jsx("div",{className:"stat-icon",children:s.jsx(P.arrowUp,{})}),s.jsx("div",{className:"stat-value",children:(e==null?void 0:e.total_earned)||0}),s.jsx("div",{className:"stat-label",children:"Total Earned"})]})]}),s.jsx("div",{className:"action-section",children:s.jsxs("div",{className:"action-grid",children:[s.jsxs("button",{className:"action-btn primary",children:[s.jsx(P.mining,{}),s.jsx("span",{children:"Start Mining"})]}),s.jsxs("button",{className:"action-btn",children:[s.jsx(P.claim,{}),s.jsx("span",{children:"Claim Rewards"})]}),s.jsxs("button",{className:"action-btn",children:[s.jsx(P.upgrade,{}),s.jsx("span",{children:"Upgrade Miners"})]})]})}),!r&&s.jsxs("div",{className:"info-card",children:[s.jsxs("div",{className:"info-title",children:[s.jsx(P.crown,{}),s.jsx("span",{children:"Unlock VIP Benefits"})]}),s.jsx("p",{className:"info-text",children:"Get auto-claim, priority withdrawals, and exclusive bonuses. Upgrade to VIP today and maximize your earnings!"})]})]})]}),Gf=({user:e})=>s.jsxs(s.Fragment,{children:[s.jsx("style",{jsx:!0,children:`
            .mining-container {
                padding: 20px 0;
                animation: fadeIn 0.5s ease-in;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .mining-header {
                text-align: center;
                margin-bottom: 24px;
            }

            .mining-title {
                font-size: 24px;
                font-weight: 700;
                color: #FFFFFF;
                margin-bottom: 8px;
            }

            .mining-subtitle {
                font-size: 16px;
                color: #8E8E93;
            }

            .miners-list {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            .miner-card {
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
                position: relative;
            }

            .miner-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 12px;
            }

            .miner-name {
                font-size: 18px;
                font-weight: 600;
                color: #FFFFFF;
            }

            .miner-status {
                padding: 4px 12px;
                background: rgba(52, 199, 89, 0.2);
                color: #34C759;
                border-radius: 12px;
                font-size: 12px;
                font-weight: 600;
            }

            .miner-status.inactive {
                background: rgba(255, 59, 48, 0.2);
                color: #FF3B30;
            }

            .miner-stats {
                display: flex;
                justify-content: space-between;
                margin-bottom: 16px;
            }

            .miner-stat {
                text-align: center;
            }

            .miner-stat-value {
                font-size: 16px;
                font-weight: 600;
                color: #FFD700;
            }

            .miner-stat-label {
                font-size: 12px;
                color: #8E8E93;
                margin-top: 4px;
            }

            .miner-actions {
                display: flex;
                gap: 8px;
            }

            .miner-btn {
                flex: 1;
                padding: 10px;
                background: rgba(255, 215, 0, 0.1);
                border: 1px solid rgba(255, 215, 0, 0.2);
                border-radius: 10px;
                color: #FFD700;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }

            .miner-btn:hover {
                background: rgba(255, 215, 0, 0.2);
                transform: translateY(-1px);
            }
        `}),s.jsxs("div",{className:"mining-container",children:[s.jsxs("div",{className:"mining-header",children:[s.jsx("h2",{className:"mining-title",children:"Mining Dashboard"}),s.jsx("p",{className:"mining-subtitle",children:"Manage your mining operations"})]}),s.jsxs("div",{className:"miners-list",children:[s.jsxs("div",{className:"miner-card",children:[s.jsxs("div",{className:"miner-header",children:[s.jsx("span",{className:"miner-name",children:"Basic Miner"}),s.jsx("span",{className:"miner-status",children:"Active"})]}),s.jsxs("div",{className:"miner-stats",children:[s.jsxs("div",{className:"miner-stat",children:[s.jsx("div",{className:"miner-stat-value",children:"2.5"}),s.jsx("div",{className:"miner-stat-label",children:"TON/Day"})]}),s.jsxs("div",{className:"miner-stat",children:[s.jsx("div",{className:"miner-stat-value",children:"Level 1"}),s.jsx("div",{className:"miner-stat-label",children:"Current"})]}),s.jsxs("div",{className:"miner-stat",children:[s.jsx("div",{className:"miner-stat-value",children:"1:45:23"}),s.jsx("div",{className:"miner-stat-label",children:"Next Claim"})]})]}),s.jsxs("div",{className:"miner-actions",children:[s.jsx("button",{className:"miner-btn",children:"Claim"}),s.jsx("button",{className:"miner-btn",children:"Upgrade"})]})]}),s.jsxs("div",{className:"miner-card",children:[s.jsxs("div",{className:"miner-header",children:[s.jsx("span",{className:"miner-name",children:"Advanced Miner"}),s.jsx("span",{className:"miner-status inactive",children:"Inactive"})]}),s.jsxs("div",{className:"miner-stats",children:[s.jsxs("div",{className:"miner-stat",children:[s.jsx("div",{className:"miner-stat-value",children:"5.0"}),s.jsx("div",{className:"miner-stat-label",children:"TON/Day"})]}),s.jsxs("div",{className:"miner-stat",children:[s.jsx("div",{className:"miner-stat-value",children:"Level 2"}),s.jsx("div",{className:"miner-stat-label",children:"Current"})]}),s.jsxs("div",{className:"miner-stat",children:[s.jsx("div",{className:"miner-stat-value",children:"Ready"}),s.jsx("div",{className:"miner-stat-label",children:"Next Claim"})]})]}),s.jsxs("div",{className:"miner-actions",children:[s.jsx("button",{className:"miner-btn",children:"Activate"}),s.jsx("button",{className:"miner-btn",children:"Upgrade"})]})]})]})]})]}),Zf=()=>s.jsxs(s.Fragment,{children:[s.jsx("style",{jsx:!0,children:`
            .tasks-container {
                padding: 20px 0;
                animation: fadeIn 0.5s ease-in;
            }

            .tasks-header {
                text-align: center;
                margin-bottom: 24px;
            }

            .tasks-title {
                font-size: 24px;
                font-weight: 700;
                color: #FFFFFF;
                margin-bottom: 8px;
            }

            .tasks-subtitle {
                font-size: 16px;
                color: #8E8E93;
            }

            .tasks-list {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }

            .task-card {
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 14px;
                padding: 16px;
                display: flex;
                align-items: center;
                gap: 12px;
                cursor: pointer;
                transition: all 0.2s;
            }

            .task-card:hover {
                transform: translateX(4px);
                border-color: rgba(255, 215, 0, 0.2);
            }

            .task-icon {
                width: 40px;
                height: 40px;
                background: rgba(255, 215, 0, 0.1);
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFD700;
            }

            .task-info {
                flex: 1;
            }

            .task-name {
                font-size: 16px;
                font-weight: 600;
                color: #FFFFFF;
                margin-bottom: 4px;
            }

            .task-reward {
                font-size: 14px;
                color: #FFD700;
            }

            .task-arrow {
                width: 20px;
                height: 20px;
                color: #8E8E93;
            }
        `}),s.jsxs("div",{className:"tasks-container",children:[s.jsxs("div",{className:"tasks-header",children:[s.jsx("h2",{className:"tasks-title",children:"Available Tasks"}),s.jsx("p",{className:"tasks-subtitle",children:"Complete tasks to earn more TON"})]}),s.jsxs("div",{className:"tasks-list",children:[s.jsxs("div",{className:"task-card",children:[s.jsx("div",{className:"task-icon",children:s.jsx(P.check,{})}),s.jsxs("div",{className:"task-info",children:[s.jsx("div",{className:"task-name",children:"Subscribe to Channel"}),s.jsx("div",{className:"task-reward",children:"+0.5 TON"})]}),s.jsx("div",{className:"task-arrow",children:"→"})]}),s.jsxs("div",{className:"task-card",children:[s.jsx("div",{className:"task-icon",children:s.jsx(P.star,{})}),s.jsxs("div",{className:"task-info",children:[s.jsx("div",{className:"task-name",children:"Daily Check-in"}),s.jsx("div",{className:"task-reward",children:"+0.1 TON"})]}),s.jsx("div",{className:"task-arrow",children:"→"})]}),s.jsxs("div",{className:"task-card",children:[s.jsx("div",{className:"task-icon",children:s.jsx(P.referrals,{})}),s.jsxs("div",{className:"task-info",children:[s.jsx("div",{className:"task-name",children:"Invite 3 Friends"}),s.jsx("div",{className:"task-reward",children:"+2.0 TON"})]}),s.jsx("div",{className:"task-arrow",children:"→"})]})]})]})]}),Jf=({user:e})=>s.jsxs(s.Fragment,{children:[s.jsx("style",{jsx:!0,children:`
            .referrals-container {
                padding: 20px 0;
                animation: fadeIn 0.5s ease-in;
            }

            .referrals-header {
                text-align: center;
                margin-bottom: 24px;
            }

            .referrals-title {
                font-size: 24px;
                font-weight: 700;
                color: #FFFFFF;
                margin-bottom: 8px;
            }

            .referrals-subtitle {
                font-size: 16px;
                color: #8E8E93;
            }

            .referral-code-card {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 193, 7, 0.1));
                border: 1px solid rgba(255, 215, 0, 0.2);
                border-radius: 16px;
                padding: 20px;
                text-align: center;
                margin-bottom: 20px;
            }

            .referral-code-label {
                font-size: 14px;
                color: #8E8E93;
                margin-bottom: 8px;
            }

            .referral-code {
                font-size: 24px;
                font-weight: 700;
                color: #FFD700;
                margin-bottom: 16px;
                font-family: 'SF Mono', monospace;
            }

            .copy-btn {
                padding: 12px 24px;
                background: linear-gradient(135deg, #FFD700, #FFC107);
                color: #000000;
                border: none;
                border-radius: 12px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }

            .copy-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 16px rgba(255, 215, 0, 0.3);
            }

            .referral-stats {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
                margin-bottom: 20px;
            }

            .referral-stat {
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 12px;
                padding: 16px;
                text-align: center;
            }

            .referral-stat-value {
                font-size: 20px;
                font-weight: 600;
                color: #FFD700;
                margin-bottom: 4px;
            }

            .referral-stat-label {
                font-size: 12px;
                color: #8E8E93;
            }
        `}),s.jsxs("div",{className:"referrals-container",children:[s.jsxs("div",{className:"referrals-header",children:[s.jsx("h2",{className:"referrals-title",children:"Referral Program"}),s.jsx("p",{className:"referrals-subtitle",children:"Invite friends and earn rewards"})]}),s.jsxs("div",{className:"referral-code-card",children:[s.jsx("div",{className:"referral-code-label",children:"Your Referral Code"}),s.jsxs("div",{className:"referral-code",children:["VIP",(e==null?void 0:e.id)||"12345"]}),s.jsx("button",{className:"copy-btn",onClick:()=>{navigator.clipboard.writeText(`VIP${(e==null?void 0:e.id)||"12345"}`),alert("Referral code copied!")},children:"Copy Code"})]}),s.jsxs("div",{className:"referral-stats",children:[s.jsxs("div",{className:"referral-stat",children:[s.jsx("div",{className:"referral-stat-value",children:(e==null?void 0:e.total_referrals)||0}),s.jsx("div",{className:"referral-stat-label",children:"Total Referrals"})]}),s.jsxs("div",{className:"referral-stat",children:[s.jsx("div",{className:"referral-stat-value",children:"5%"}),s.jsx("div",{className:"referral-stat-label",children:"Commission Rate"})]}),s.jsxs("div",{className:"referral-stat",children:[s.jsx("div",{className:"referral-stat-value",children:"12.5"}),s.jsx("div",{className:"referral-stat-label",children:"Earned (TON)"})]}),s.jsxs("div",{className:"referral-stat",children:[s.jsx("div",{className:"referral-stat-value",children:"3"}),s.jsx("div",{className:"referral-stat-label",children:"Active Today"})]})]})]})]}),qf=({balance:e,user:t})=>s.jsxs(s.Fragment,{children:[s.jsx("style",{jsx:!0,children:`
            .wallet-container {
                padding: 20px 0;
                animation: fadeIn 0.5s ease-in;
            }

            .wallet-balance-card {
                background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(28, 28, 30, 0.9));
                border: 1px solid rgba(255, 215, 0, 0.2);
                border-radius: 20px;
                padding: 32px;
                text-align: center;
                margin-bottom: 24px;
                position: relative;
                overflow: hidden;
            }

            .wallet-balance-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
                animation: shimmer 3s infinite;
            }

            @keyframes shimmer {
                0% { left: -100%; }
                100% { left: 100%; }
            }

            .wallet-balance-label {
                font-size: 14px;
                color: #8E8E93;
                margin-bottom: 8px;
            }

            .wallet-balance-amount {
                font-size: 42px;
                font-weight: 700;
                color: #FFD700;
                margin-bottom: 4px;
                font-family: 'SF Mono', monospace;
            }

            .wallet-balance-currency {
                font-size: 18px;
                color: rgba(255, 215, 0, 0.8);
            }

            .wallet-actions {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 12px;
                margin-bottom: 24px;
            }

            .wallet-btn {
                padding: 16px;
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 14px;
                font-size: 16px;
                font-weight: 600;
                color: #FFFFFF;
                cursor: pointer;
                transition: all 0.2s;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }

            .wallet-btn:hover {
                background: rgba(255, 215, 0, 0.1);
                border-color: rgba(255, 215, 0, 0.2);
                transform: translateY(-2px);
            }

            .wallet-btn.primary {
                background: linear-gradient(135deg, #FFD700, #FFC107);
                color: #000000;
                border: none;
            }

            .wallet-btn svg {
                width: 24px;
                height: 24px;
            }

            .wallet-history {
                background: rgba(28, 28, 30, 0.9);
                border: 1px solid rgba(255, 215, 0, 0.1);
                border-radius: 16px;
                padding: 20px;
            }

            .wallet-history-title {
                font-size: 18px;
                font-weight: 600;
                color: #FFFFFF;
                margin-bottom: 16px;
            }

            .history-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid rgba(255, 215, 0, 0.05);
            }

            .history-item:last-child {
                border-bottom: none;
            }

            .history-info {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .history-icon {
                width: 32px;
                height: 32px;
                background: rgba(255, 215, 0, 0.1);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #FFD700;
            }

            .history-details {
                text-align: left;
            }

            .history-type {
                font-size: 14px;
                font-weight: 600;
                color: #FFFFFF;
            }

            .history-date {
                font-size: 12px;
                color: #8E8E93;
            }

            .history-amount {
                font-size: 16px;
                font-weight: 600;
            }

            .history-amount.positive {
                color: #34C759;
            }

            .history-amount.negative {
                color: #FF3B30;
            }
        `}),s.jsxs("div",{className:"wallet-container",children:[s.jsxs("div",{className:"wallet-balance-card",children:[s.jsx("div",{className:"wallet-balance-label",children:"Total Balance"}),s.jsx("div",{className:"wallet-balance-amount",children:e.toFixed(2)}),s.jsx("div",{className:"wallet-balance-currency",children:"TON"})]}),s.jsxs("div",{className:"wallet-actions",children:[s.jsxs("button",{className:"wallet-btn primary",children:[s.jsx(P.arrowDown,{}),s.jsx("span",{children:"Deposit"})]}),s.jsxs("button",{className:"wallet-btn",children:[s.jsx(P.arrowUp,{}),s.jsx("span",{children:"Withdraw"})]}),s.jsxs("button",{className:"wallet-btn",children:[s.jsx(P.history,{}),s.jsx("span",{children:"History"})]}),s.jsxs("button",{className:"wallet-btn",children:[s.jsx(P.settings,{}),s.jsx("span",{children:"Settings"})]})]}),s.jsxs("div",{className:"wallet-history",children:[s.jsx("h3",{className:"wallet-history-title",children:"Recent Transactions"}),s.jsxs("div",{className:"history-item",children:[s.jsxs("div",{className:"history-info",children:[s.jsx("div",{className:"history-icon",children:s.jsx(P.arrowDown,{})}),s.jsxs("div",{className:"history-details",children:[s.jsx("div",{className:"history-type",children:"Deposit"}),s.jsx("div",{className:"history-date",children:"Today, 14:23"})]})]}),s.jsx("div",{className:"history-amount positive",children:"+50.00"})]}),s.jsxs("div",{className:"history-item",children:[s.jsxs("div",{className:"history-info",children:[s.jsx("div",{className:"history-icon",children:s.jsx(P.claim,{})}),s.jsxs("div",{className:"history-details",children:[s.jsx("div",{className:"history-type",children:"Mining Claim"}),s.jsx("div",{className:"history-date",children:"Today, 12:00"})]})]}),s.jsx("div",{className:"history-amount positive",children:"+2.50"})]}),s.jsxs("div",{className:"history-item",children:[s.jsxs("div",{className:"history-info",children:[s.jsx("div",{className:"history-icon",children:s.jsx(P.shop,{})}),s.jsxs("div",{className:"history-details",children:[s.jsx("div",{className:"history-type",children:"Miner Purchase"}),s.jsx("div",{className:"history-date",children:"Yesterday"})]})]}),s.jsx("div",{className:"history-amount negative",children:"-25.00"})]})]})]})]}),ep=()=>s.jsx($f,{children:s.jsx(Yf,{})}),tp=Gi.createRoot(document.getElementById("root"));tp.render(s.jsx(Cc.StrictMode,{children:s.jsx(ep,{})}));window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".vipton-preloader");e&&setTimeout(()=>e.style.display="none",500)});
