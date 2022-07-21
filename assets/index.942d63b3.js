const Cg=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};Cg();function bg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var to={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.element"),Ag=Symbol.for("react.portal"),Lg=Symbol.for("react.fragment"),Pg=Symbol.for("react.strict_mode"),Dg=Symbol.for("react.profiler"),Rg=Symbol.for("react.provider"),Ig=Symbol.for("react.context"),Fg=Symbol.for("react.forward_ref"),Ng=Symbol.for("react.suspense"),zg=Symbol.for("react.memo"),kg=Symbol.for("react.lazy"),mf=Symbol.iterator;function Ug(n){return n===null||typeof n!="object"?null:(n=mf&&n[mf]||n["@@iterator"],typeof n=="function"?n:null)}var Uh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oh=Object.assign,Bh={};function ns(n,e,t){this.props=n,this.context=e,this.refs=Bh,this.updater=t||Uh}ns.prototype.isReactComponent={};ns.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ns.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Vh(){}Vh.prototype=ns.prototype;function hc(n,e,t){this.props=n,this.context=e,this.refs=Bh,this.updater=t||Uh}var pc=hc.prototype=new Vh;pc.constructor=hc;Oh(pc,ns.prototype);pc.isPureReactComponent=!0;var gf=Array.isArray,Gh=Object.prototype.hasOwnProperty,mc={current:null},Hh={key:!0,ref:!0,__self:!0,__source:!0};function Wh(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gh.call(e,i)&&!Hh.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:no,type:n,key:s,ref:o,props:r,_owner:mc.current}}function Og(n,e){return{$$typeof:no,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function gc(n){return typeof n=="object"&&n!==null&&n.$$typeof===no}function Bg(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var vf=/\/+/g;function ol(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Bg(""+n.key):e.toString(36)}function Qo(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case no:case Ag:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+ol(o,0):i,gf(r)?(t="",n!=null&&(t=n.replace(vf,"$&/")+"/"),Qo(r,e,t,"",function(u){return u})):r!=null&&(gc(r)&&(r=Og(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",gf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+ol(s,a);o+=Qo(s,e,t,l,r)}else if(l=Ug(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+ol(s,a++),o+=Qo(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function po(n,e,t){if(n==null)return n;var i=[],r=0;return Qo(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Vg(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Ct={current:null},Jo={transition:null},Gg={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:mc};Ce.Children={map:po,forEach:function(n,e,t){po(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return po(n,function(){e++}),e},toArray:function(n){return po(n,function(e){return e})||[]},only:function(n){if(!gc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ce.Component=ns;Ce.Fragment=Lg;Ce.Profiler=Dg;Ce.PureComponent=hc;Ce.StrictMode=Pg;Ce.Suspense=Ng;Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gg;Ce.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Oh({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=mc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Gh.call(e,l)&&!Hh.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:no,type:n.type,key:r,ref:s,props:i,_owner:o}};Ce.createContext=function(n){return n={$$typeof:Ig,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Rg,_context:n},n.Consumer=n};Ce.createElement=Wh;Ce.createFactory=function(n){var e=Wh.bind(null,n);return e.type=n,e};Ce.createRef=function(){return{current:null}};Ce.forwardRef=function(n){return{$$typeof:Fg,render:n}};Ce.isValidElement=gc;Ce.lazy=function(n){return{$$typeof:kg,_payload:{_status:-1,_result:n},_init:Vg}};Ce.memo=function(n,e){return{$$typeof:zg,type:n,compare:e===void 0?null:e}};Ce.startTransition=function(n){var e=Jo.transition;Jo.transition={};try{n()}finally{Jo.transition=e}};Ce.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ce.useCallback=function(n,e){return Ct.current.useCallback(n,e)};Ce.useContext=function(n){return Ct.current.useContext(n)};Ce.useDebugValue=function(){};Ce.useDeferredValue=function(n){return Ct.current.useDeferredValue(n)};Ce.useEffect=function(n,e){return Ct.current.useEffect(n,e)};Ce.useId=function(){return Ct.current.useId()};Ce.useImperativeHandle=function(n,e,t){return Ct.current.useImperativeHandle(n,e,t)};Ce.useInsertionEffect=function(n,e){return Ct.current.useInsertionEffect(n,e)};Ce.useLayoutEffect=function(n,e){return Ct.current.useLayoutEffect(n,e)};Ce.useMemo=function(n,e){return Ct.current.useMemo(n,e)};Ce.useReducer=function(n,e,t){return Ct.current.useReducer(n,e,t)};Ce.useRef=function(n){return Ct.current.useRef(n)};Ce.useState=function(n){return Ct.current.useState(n)};Ce.useSyncExternalStore=function(n,e,t){return Ct.current.useSyncExternalStore(n,e,t)};Ce.useTransition=function(){return Ct.current.useTransition()};Ce.version="18.2.0";(function(n){n.exports=Ce})(to);const Hg=bg(to.exports);var fu={},jh={exports:{}},jt={},Xh={exports:{}},qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,D){var I=P.length;P.push(D);e:for(;0<I;){var q=I-1>>>1,X=P[q];if(0<r(X,D))P[q]=D,P[I]=X,I=q;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var D=P[0],I=P.pop();if(I!==D){P[0]=I;e:for(var q=0,X=P.length,Z=X>>>1;q<Z;){var oe=2*(q+1)-1,de=P[oe],G=oe+1,We=P[G];if(0>r(de,I))G<X&&0>r(We,de)?(P[q]=We,P[G]=I,q=G):(P[q]=de,P[oe]=I,q=oe);else if(G<X&&0>r(We,I))P[q]=We,P[G]=I,q=G;else break e}}return D}function r(P,D){var I=P.sortIndex-D.sortIndex;return I!==0?I:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,_=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var D=t(u);D!==null;){if(D.callback===null)i(u);else if(D.startTime<=P)i(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=t(u)}}function w(P){if(p=!1,x(P),!_)if(t(l)!==null)_=!0,V(M);else{var D=t(u);D!==null&&j(w,D.startTime-P)}}function M(P,D){_=!1,p&&(p=!1,m(y),y=-1),g=!0;var I=d;try{for(x(D),f=t(l);f!==null&&(!(f.expirationTime>D)||P&&!k());){var q=f.callback;if(typeof q=="function"){f.callback=null,d=f.priorityLevel;var X=q(f.expirationTime<=D);D=n.unstable_now(),typeof X=="function"?f.callback=X:f===t(l)&&i(l),x(D)}else i(l);f=t(l)}if(f!==null)var Z=!0;else{var oe=t(u);oe!==null&&j(w,oe.startTime-D),Z=!1}return Z}finally{f=null,d=I,g=!1}}var C=!1,L=null,y=-1,b=5,R=-1;function k(){return!(n.unstable_now()-R<b)}function ne(){if(L!==null){var P=n.unstable_now();R=P;var D=!0;try{D=L(!0,P)}finally{D?Q():(C=!1,L=null)}}else C=!1}var Q;if(typeof v=="function")Q=function(){v(ne)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,$=z.port2;z.port1.onmessage=ne,Q=function(){$.postMessage(null)}}else Q=function(){h(ne,0)};function V(P){L=P,C||(C=!0,Q())}function j(P,D){y=h(function(){P(n.unstable_now())},D)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){_||g||(_=!0,V(M))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var I=d;d=D;try{return P()}finally{d=I}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=d;d=P;try{return D()}finally{d=I}},n.unstable_scheduleCallback=function(P,D,I){var q=n.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?q+I:q):I=q,P){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=I+X,P={id:c++,callback:D,priorityLevel:P,startTime:I,expirationTime:X,sortIndex:-1},I>q?(P.sortIndex=I,e(u,P),t(l)===null&&P===t(u)&&(p?(m(y),y=-1):p=!0,j(w,I-q))):(P.sortIndex=X,e(l,P),_||g||(_=!0,V(M))),P},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(P){var D=d;return function(){var I=d;d=D;try{return P.apply(this,arguments)}finally{d=I}}}})(qh);(function(n){n.exports=qh})(Xh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $h=to.exports,Wt=Xh.exports;function Y(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yh=new Set,zs={};function tr(n,e){Wr(n,e),Wr(n+"Capture",e)}function Wr(n,e){for(zs[n]=e,n=0;n<e.length;n++)Yh.add(e[n])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,Wg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},xf={};function jg(n){return du.call(xf,n)?!0:du.call(_f,n)?!1:Wg.test(n)?xf[n]=!0:(_f[n]=!0,!1)}function Xg(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function qg(n,e,t,i){if(e===null||typeof e>"u"||Xg(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){dt[n]=new bt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];dt[e]=new bt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){dt[n]=new bt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){dt[n]=new bt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){dt[n]=new bt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){dt[n]=new bt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){dt[n]=new bt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){dt[n]=new bt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){dt[n]=new bt(n,5,!1,n.toLowerCase(),null,!1,!1)});var vc=/[\-:]([a-z])/g;function _c(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(vc,_c);dt[e]=new bt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(vc,_c);dt[e]=new bt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(vc,_c);dt[e]=new bt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){dt[n]=new bt(n,1,!1,n.toLowerCase(),null,!1,!1)});dt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){dt[n]=new bt(n,1,!1,n.toLowerCase(),null,!0,!0)});function xc(n,e,t,i){var r=dt.hasOwnProperty(e)?dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qg(e,t,r,i)&&(t=null),i||r===null?jg(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Zn=$h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),wr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),yc=Symbol.for("react.strict_mode"),hu=Symbol.for("react.profiler"),Zh=Symbol.for("react.provider"),Kh=Symbol.for("react.context"),Sc=Symbol.for("react.forward_ref"),pu=Symbol.for("react.suspense"),mu=Symbol.for("react.suspense_list"),Mc=Symbol.for("react.memo"),oi=Symbol.for("react.lazy"),Qh=Symbol.for("react.offscreen"),yf=Symbol.iterator;function cs(n){return n===null||typeof n!="object"?null:(n=yf&&n[yf]||n["@@iterator"],typeof n=="function"?n:null)}var qe=Object.assign,al;function Ss(n){if(al===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);al=e&&e[1]||""}return`
`+al+n}var ll=!1;function ul(n,e){if(!n||ll)return"";ll=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ll=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ss(n):""}function $g(n){switch(n.tag){case 5:return Ss(n.type);case 16:return Ss("Lazy");case 13:return Ss("Suspense");case 19:return Ss("SuspenseList");case 0:case 2:case 15:return n=ul(n.type,!1),n;case 11:return n=ul(n.type.render,!1),n;case 1:return n=ul(n.type,!0),n;default:return""}}function gu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Er:return"Fragment";case wr:return"Portal";case hu:return"Profiler";case yc:return"StrictMode";case pu:return"Suspense";case mu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Kh:return(n.displayName||"Context")+".Consumer";case Zh:return(n._context.displayName||"Context")+".Provider";case Sc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Mc:return e=n.displayName||null,e!==null?e:gu(n.type)||"Memo";case oi:e=n._payload,n=n._init;try{return gu(n(e))}catch{}}return null}function Yg(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gu(e);case 8:return e===yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Si(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Jh(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zg(n){var e=Jh(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function go(n){n._valueTracker||(n._valueTracker=Zg(n))}function ep(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Jh(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function da(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vu(n,e){var t=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Sf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Si(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tp(n,e){e=e.checked,e!=null&&xc(n,"checked",e,!1)}function _u(n,e){tp(n,e);var t=Si(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?xu(n,e.type,t):e.hasOwnProperty("defaultValue")&&xu(n,e.type,Si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Mf(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function xu(n,e,t){(e!=="number"||da(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ms=Array.isArray;function zr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Si(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function yu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Y(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function wf(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Y(92));if(Ms(t)){if(1<t.length)throw Error(Y(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Si(t)}}function np(n,e){var t=Si(e.value),i=Si(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Ef(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ip(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ip(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var vo,rp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ks(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kg=["Webkit","ms","Moz","O"];Object.keys(bs).forEach(function(n){Kg.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),bs[e]=bs[n]})});function sp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||bs.hasOwnProperty(n)&&bs[n]?(""+e).trim():e+"px"}function op(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=sp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Qg=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mu(n,e){if(e){if(Qg[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Y(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Y(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Y(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Y(62))}}function wu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function wc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Tu=null,kr=null,Ur=null;function Tf(n){if(n=so(n)){if(typeof Tu!="function")throw Error(Y(280));var e=n.stateNode;e&&(e=Ga(e),Tu(n.stateNode,n.type,e))}}function ap(n){kr?Ur?Ur.push(n):Ur=[n]:kr=n}function lp(){if(kr){var n=kr,e=Ur;if(Ur=kr=null,Tf(n),e)for(n=0;n<e.length;n++)Tf(e[n])}}function up(n,e){return n(e)}function cp(){}var cl=!1;function fp(n,e,t){if(cl)return n(e,t);cl=!0;try{return up(n,e,t)}finally{cl=!1,(kr!==null||Ur!==null)&&(cp(),lp())}}function Us(n,e){var t=n.stateNode;if(t===null)return null;var i=Ga(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Y(231,e,typeof t));return t}var Cu=!1;if(Xn)try{var fs={};Object.defineProperty(fs,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",fs,fs),window.removeEventListener("test",fs,fs)}catch{Cu=!1}function Jg(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var As=!1,ha=null,pa=!1,bu=null,e0={onError:function(n){As=!0,ha=n}};function t0(n,e,t,i,r,s,o,a,l){As=!1,ha=null,Jg.apply(e0,arguments)}function n0(n,e,t,i,r,s,o,a,l){if(t0.apply(this,arguments),As){if(As){var u=ha;As=!1,ha=null}else throw Error(Y(198));pa||(pa=!0,bu=u)}}function nr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function dp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Cf(n){if(nr(n)!==n)throw Error(Y(188))}function i0(n){var e=n.alternate;if(!e){if(e=nr(n),e===null)throw Error(Y(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Cf(r),n;if(s===i)return Cf(r),e;s=s.sibling}throw Error(Y(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(Y(189))}}if(t.alternate!==i)throw Error(Y(190))}if(t.tag!==3)throw Error(Y(188));return t.stateNode.current===t?n:e}function hp(n){return n=i0(n),n!==null?pp(n):null}function pp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=pp(n);if(e!==null)return e;n=n.sibling}return null}var mp=Wt.unstable_scheduleCallback,bf=Wt.unstable_cancelCallback,r0=Wt.unstable_shouldYield,s0=Wt.unstable_requestPaint,Ke=Wt.unstable_now,o0=Wt.unstable_getCurrentPriorityLevel,Ec=Wt.unstable_ImmediatePriority,gp=Wt.unstable_UserBlockingPriority,ma=Wt.unstable_NormalPriority,a0=Wt.unstable_LowPriority,vp=Wt.unstable_IdlePriority,Ua=null,bn=null;function l0(n){if(bn&&typeof bn.onCommitFiberRoot=="function")try{bn.onCommitFiberRoot(Ua,n,void 0,(n.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:f0,u0=Math.log,c0=Math.LN2;function f0(n){return n>>>=0,n===0?32:31-(u0(n)/c0|0)|0}var _o=64,xo=4194304;function ws(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ga(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ws(a):(s&=o,s!==0&&(i=ws(s)))}else o=t&~r,o!==0?i=ws(o):s!==0&&(i=ws(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-dn(e),r=1<<t,i|=n[t],e&=~r;return i}function d0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-dn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=d0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Au(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _p(){var n=_o;return _o<<=1,(_o&4194240)===0&&(_o=64),n}function fl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function io(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-dn(e),n[e]=t}function p0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-dn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Tc(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-dn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ze=0;function xp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var yp,Cc,Sp,Mp,wp,Lu=!1,yo=[],di=null,hi=null,pi=null,Os=new Map,Bs=new Map,li=[],m0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Af(n,e){switch(n){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":Os.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(e.pointerId)}}function ds(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=so(e),e!==null&&Cc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function g0(n,e,t,i,r){switch(e){case"focusin":return di=ds(di,n,e,t,i,r),!0;case"dragenter":return hi=ds(hi,n,e,t,i,r),!0;case"mouseover":return pi=ds(pi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Os.set(s,ds(Os.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bs.set(s,ds(Bs.get(s)||null,n,e,t,i,r)),!0}return!1}function Ep(n){var e=Ni(n.target);if(e!==null){var t=nr(e);if(t!==null){if(e=t.tag,e===13){if(e=dp(t),e!==null){n.blockedOn=e,wp(n.priority,function(){Sp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ea(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Pu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Eu=i,t.target.dispatchEvent(i),Eu=null}else return e=so(t),e!==null&&Cc(e),n.blockedOn=t,!1;e.shift()}return!0}function Lf(n,e,t){ea(n)&&t.delete(e)}function v0(){Lu=!1,di!==null&&ea(di)&&(di=null),hi!==null&&ea(hi)&&(hi=null),pi!==null&&ea(pi)&&(pi=null),Os.forEach(Lf),Bs.forEach(Lf)}function hs(n,e){n.blockedOn===e&&(n.blockedOn=null,Lu||(Lu=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,v0)))}function Vs(n){function e(r){return hs(r,n)}if(0<yo.length){hs(yo[0],n);for(var t=1;t<yo.length;t++){var i=yo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(di!==null&&hs(di,n),hi!==null&&hs(hi,n),pi!==null&&hs(pi,n),Os.forEach(e),Bs.forEach(e),t=0;t<li.length;t++)i=li[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<li.length&&(t=li[0],t.blockedOn===null);)Ep(t),t.blockedOn===null&&li.shift()}var Or=Zn.ReactCurrentBatchConfig,va=!0;function _0(n,e,t,i){var r=ze,s=Or.transition;Or.transition=null;try{ze=1,bc(n,e,t,i)}finally{ze=r,Or.transition=s}}function x0(n,e,t,i){var r=ze,s=Or.transition;Or.transition=null;try{ze=4,bc(n,e,t,i)}finally{ze=r,Or.transition=s}}function bc(n,e,t,i){if(va){var r=Pu(n,e,t,i);if(r===null)Sl(n,e,i,_a,t),Af(n,i);else if(g0(r,n,e,t,i))i.stopPropagation();else if(Af(n,i),e&4&&-1<m0.indexOf(n)){for(;r!==null;){var s=so(r);if(s!==null&&yp(s),s=Pu(n,e,t,i),s===null&&Sl(n,e,i,_a,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Sl(n,e,i,null,t)}}var _a=null;function Pu(n,e,t,i){if(_a=null,n=wc(i),n=Ni(n),n!==null)if(e=nr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=dp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return _a=n,null}function Tp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(o0()){case Ec:return 1;case gp:return 4;case ma:case a0:return 16;case vp:return 536870912;default:return 16}default:return 16}}var ci=null,Ac=null,ta=null;function Cp(){if(ta)return ta;var n,e=Ac,t=e.length,i,r="value"in ci?ci.value:ci.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ta=r.slice(n,1<i?1-i:void 0)}function na(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function So(){return!0}function Pf(){return!1}function Xt(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?So:Pf,this.isPropagationStopped=Pf,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lc=Xt(is),ro=qe({},is,{view:0,detail:0}),y0=Xt(ro),dl,hl,ps,Oa=qe({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ps&&(ps&&n.type==="mousemove"?(dl=n.screenX-ps.screenX,hl=n.screenY-ps.screenY):hl=dl=0,ps=n),dl)},movementY:function(n){return"movementY"in n?n.movementY:hl}}),Df=Xt(Oa),S0=qe({},Oa,{dataTransfer:0}),M0=Xt(S0),w0=qe({},ro,{relatedTarget:0}),pl=Xt(w0),E0=qe({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=Xt(E0),C0=qe({},is,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),b0=Xt(C0),A0=qe({},is,{data:0}),Rf=Xt(A0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=D0[n])?!!e[n]:!1}function Pc(){return R0}var I0=qe({},ro,{key:function(n){if(n.key){var e=L0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=na(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?P0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(n){return n.type==="keypress"?na(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?na(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),F0=Xt(I0),N0=qe({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),If=Xt(N0),z0=qe({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),k0=Xt(z0),U0=qe({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),O0=Xt(U0),B0=qe({},Oa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=Xt(B0),G0=[9,13,27,32],Dc=Xn&&"CompositionEvent"in window,Ls=null;Xn&&"documentMode"in document&&(Ls=document.documentMode);var H0=Xn&&"TextEvent"in window&&!Ls,bp=Xn&&(!Dc||Ls&&8<Ls&&11>=Ls),Ff=String.fromCharCode(32),Nf=!1;function Ap(n,e){switch(n){case"keyup":return G0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Tr=!1;function W0(n,e){switch(n){case"compositionend":return Lp(e);case"keypress":return e.which!==32?null:(Nf=!0,Ff);case"textInput":return n=e.data,n===Ff&&Nf?null:n;default:return null}}function j0(n,e){if(Tr)return n==="compositionend"||!Dc&&Ap(n,e)?(n=Cp(),ta=Ac=ci=null,Tr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bp&&e.locale!=="ko"?null:e.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!X0[n.type]:e==="textarea"}function Pp(n,e,t,i){ap(i),e=xa(e,"onChange"),0<e.length&&(t=new Lc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ps=null,Gs=null;function q0(n){Vp(n,0)}function Ba(n){var e=Ar(n);if(ep(e))return n}function $0(n,e){if(n==="change")return e}var Dp=!1;if(Xn){var ml;if(Xn){var gl="oninput"in document;if(!gl){var kf=document.createElement("div");kf.setAttribute("oninput","return;"),gl=typeof kf.oninput=="function"}ml=gl}else ml=!1;Dp=ml&&(!document.documentMode||9<document.documentMode)}function Uf(){Ps&&(Ps.detachEvent("onpropertychange",Rp),Gs=Ps=null)}function Rp(n){if(n.propertyName==="value"&&Ba(Gs)){var e=[];Pp(e,Gs,n,wc(n)),fp(q0,e)}}function Y0(n,e,t){n==="focusin"?(Uf(),Ps=e,Gs=t,Ps.attachEvent("onpropertychange",Rp)):n==="focusout"&&Uf()}function Z0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ba(Gs)}function K0(n,e){if(n==="click")return Ba(e)}function Q0(n,e){if(n==="input"||n==="change")return Ba(e)}function J0(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mn=typeof Object.is=="function"?Object.is:J0;function Hs(n,e){if(mn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!du.call(e,r)||!mn(n[r],e[r]))return!1}return!0}function Of(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Bf(n,e){var t=Of(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Of(t)}}function Ip(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ip(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Fp(){for(var n=window,e=da();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=da(n.document)}return e}function Rc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ev(n){var e=Fp(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ip(t.ownerDocument.documentElement,t)){if(i!==null&&Rc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Bf(t,s);var o=Bf(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var tv=Xn&&"documentMode"in document&&11>=document.documentMode,Cr=null,Du=null,Ds=null,Ru=!1;function Vf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ru||Cr==null||Cr!==da(i)||(i=Cr,"selectionStart"in i&&Rc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ds&&Hs(Ds,i)||(Ds=i,i=xa(Du,"onSelect"),0<i.length&&(e=new Lc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Cr)))}function Mo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var br={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},vl={},Np={};Xn&&(Np=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function Va(n){if(vl[n])return vl[n];if(!br[n])return n;var e=br[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Np)return vl[n]=e[t];return n}var zp=Va("animationend"),kp=Va("animationiteration"),Up=Va("animationstart"),Op=Va("transitionend"),Bp=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wi(n,e){Bp.set(n,e),tr(e,[n])}for(var _l=0;_l<Gf.length;_l++){var xl=Gf[_l],nv=xl.toLowerCase(),iv=xl[0].toUpperCase()+xl.slice(1);wi(nv,"on"+iv)}wi(zp,"onAnimationEnd");wi(kp,"onAnimationIteration");wi(Up,"onAnimationStart");wi("dblclick","onDoubleClick");wi("focusin","onFocus");wi("focusout","onBlur");wi(Op,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Es="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Es));function Hf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,n0(i,e,void 0,n),n.currentTarget=null}function Vp(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Hf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Hf(r,a,u),s=l}}}if(pa)throw n=bu,pa=!1,bu=null,n}function Be(n,e){var t=e[ku];t===void 0&&(t=e[ku]=new Set);var i=n+"__bubble";t.has(i)||(Gp(e,n,2,!1),t.add(i))}function yl(n,e,t){var i=0;e&&(i|=4),Gp(t,n,i,e)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Ws(n){if(!n[wo]){n[wo]=!0,Yh.forEach(function(t){t!=="selectionchange"&&(rv.has(t)||yl(t,!1,n),yl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[wo]||(e[wo]=!0,yl("selectionchange",!1,e))}}function Gp(n,e,t,i){switch(Tp(e)){case 1:var r=_0;break;case 4:r=x0;break;default:r=bc}t=r.bind(null,e,t,n),r=void 0,!Cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Sl(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ni(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}fp(function(){var u=s,c=wc(t),f=[];e:{var d=Bp.get(n);if(d!==void 0){var g=Lc,_=n;switch(n){case"keypress":if(na(t)===0)break e;case"keydown":case"keyup":g=F0;break;case"focusin":_="focus",g=pl;break;case"focusout":_="blur",g=pl;break;case"beforeblur":case"afterblur":g=pl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Df;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=k0;break;case zp:case kp:case Up:g=T0;break;case Op:g=O0;break;case"scroll":g=y0;break;case"wheel":g=V0;break;case"copy":case"cut":case"paste":g=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=If}var p=(e&4)!==0,h=!p&&n==="scroll",m=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,x;v!==null;){x=v;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,m!==null&&(w=Us(v,m),w!=null&&p.push(js(v,w,x)))),h)break;v=v.return}0<p.length&&(d=new g(d,_,null,t,c),f.push({event:d,listeners:p}))}}if((e&7)===0){e:{if(d=n==="mouseover"||n==="pointerover",g=n==="mouseout"||n==="pointerout",d&&t!==Eu&&(_=t.relatedTarget||t.fromElement)&&(Ni(_)||_[qn]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(_=t.relatedTarget||t.toElement,g=u,_=_?Ni(_):null,_!==null&&(h=nr(_),_!==h||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(p=Df,w="onMouseLeave",m="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(p=If,w="onPointerLeave",m="onPointerEnter",v="pointer"),h=g==null?d:Ar(g),x=_==null?d:Ar(_),d=new p(w,v+"leave",g,t,c),d.target=h,d.relatedTarget=x,w=null,Ni(c)===u&&(p=new p(m,v+"enter",_,t,c),p.target=x,p.relatedTarget=h,w=p),h=w,g&&_)t:{for(p=g,m=_,v=0,x=p;x;x=ar(x))v++;for(x=0,w=m;w;w=ar(w))x++;for(;0<v-x;)p=ar(p),v--;for(;0<x-v;)m=ar(m),x--;for(;v--;){if(p===m||m!==null&&p===m.alternate)break t;p=ar(p),m=ar(m)}p=null}else p=null;g!==null&&Wf(f,d,g,p,!1),_!==null&&h!==null&&Wf(f,h,_,p,!0)}}e:{if(d=u?Ar(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var M=$0;else if(zf(d))if(Dp)M=Q0;else{M=Z0;var C=Y0}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=K0);if(M&&(M=M(n,u))){Pp(f,M,t,c);break e}C&&C(n,d,u),n==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&xu(d,"number",d.value)}switch(C=u?Ar(u):window,n){case"focusin":(zf(C)||C.contentEditable==="true")&&(Cr=C,Du=u,Ds=null);break;case"focusout":Ds=Du=Cr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Vf(f,t,c);break;case"selectionchange":if(tv)break;case"keydown":case"keyup":Vf(f,t,c)}var L;if(Dc)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Tr?Ap(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(bp&&t.locale!=="ko"&&(Tr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Tr&&(L=Cp()):(ci=c,Ac="value"in ci?ci.value:ci.textContent,Tr=!0)),C=xa(u,y),0<C.length&&(y=new Rf(y,n,null,t,c),f.push({event:y,listeners:C}),L?y.data=L:(L=Lp(t),L!==null&&(y.data=L)))),(L=H0?W0(n,t):j0(n,t))&&(u=xa(u,"onBeforeInput"),0<u.length&&(c=new Rf("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=L))}Vp(f,e)})}function js(n,e,t){return{instance:n,listener:e,currentTarget:t}}function xa(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Us(n,t),s!=null&&i.unshift(js(n,s,r)),s=Us(n,e),s!=null&&i.push(js(n,s,r))),n=n.return}return i}function ar(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wf(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Us(t,s),l!=null&&o.unshift(js(t,l,a))):r||(l=Us(t,s),l!=null&&o.push(js(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var sv=/\r\n?/g,ov=/\u0000|\uFFFD/g;function jf(n){return(typeof n=="string"?n:""+n).replace(sv,`
`).replace(ov,"")}function Eo(n,e,t){if(e=jf(e),jf(n)!==e&&t)throw Error(Y(425))}function ya(){}var Iu=null,Fu=null;function Nu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,av=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,lv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(n){return Xf.resolve(null).then(n).catch(uv)}:zu;function uv(n){setTimeout(function(){throw n})}function Ml(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Vs(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Vs(e)}function mi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function qf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var rs=Math.random().toString(36).slice(2),Tn="__reactFiber$"+rs,Xs="__reactProps$"+rs,qn="__reactContainer$"+rs,ku="__reactEvents$"+rs,cv="__reactListeners$"+rs,fv="__reactHandles$"+rs;function Ni(n){var e=n[Tn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qn]||t[Tn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=qf(n);n!==null;){if(t=n[Tn])return t;n=qf(n)}return e}n=t,t=n.parentNode}return null}function so(n){return n=n[Tn]||n[qn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ar(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Y(33))}function Ga(n){return n[Xs]||null}var Uu=[],Lr=-1;function Ei(n){return{current:n}}function Ge(n){0>Lr||(n.current=Uu[Lr],Uu[Lr]=null,Lr--)}function Oe(n,e){Lr++,Uu[Lr]=n.current,n.current=e}var Mi={},xt=Ei(Mi),Rt=Ei(!1),Xi=Mi;function jr(n,e){var t=n.type.contextTypes;if(!t)return Mi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function It(n){return n=n.childContextTypes,n!=null}function Sa(){Ge(Rt),Ge(xt)}function $f(n,e,t){if(xt.current!==Mi)throw Error(Y(168));Oe(xt,e),Oe(Rt,t)}function Hp(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Y(108,Yg(n)||"Unknown",r));return qe({},t,i)}function Ma(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mi,Xi=xt.current,Oe(xt,n),Oe(Rt,Rt.current),!0}function Yf(n,e,t){var i=n.stateNode;if(!i)throw Error(Y(169));t?(n=Hp(n,e,Xi),i.__reactInternalMemoizedMergedChildContext=n,Ge(Rt),Ge(xt),Oe(xt,n)):Ge(Rt),Oe(Rt,t)}var On=null,Ha=!1,wl=!1;function Wp(n){On===null?On=[n]:On.push(n)}function dv(n){Ha=!0,Wp(n)}function Ti(){if(!wl&&On!==null){wl=!0;var n=0,e=ze;try{var t=On;for(ze=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}On=null,Ha=!1}catch(r){throw On!==null&&(On=On.slice(n+1)),mp(Ec,Ti),r}finally{ze=e,wl=!1}}return null}var Pr=[],Dr=0,wa=null,Ea=0,$t=[],Yt=0,qi=null,Vn=1,Gn="";function Pi(n,e){Pr[Dr++]=Ea,Pr[Dr++]=wa,wa=n,Ea=e}function jp(n,e,t){$t[Yt++]=Vn,$t[Yt++]=Gn,$t[Yt++]=qi,qi=n;var i=Vn;n=Gn;var r=32-dn(i)-1;i&=~(1<<r),t+=1;var s=32-dn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vn=1<<32-dn(e)+r|t<<r|i,Gn=s+n}else Vn=1<<s|t<<r|i,Gn=n}function Ic(n){n.return!==null&&(Pi(n,1),jp(n,1,0))}function Fc(n){for(;n===wa;)wa=Pr[--Dr],Pr[Dr]=null,Ea=Pr[--Dr],Pr[Dr]=null;for(;n===qi;)qi=$t[--Yt],$t[Yt]=null,Gn=$t[--Yt],$t[Yt]=null,Vn=$t[--Yt],$t[Yt]=null}var Ht=null,Gt=null,He=!1,cn=null;function Xp(n,e){var t=Kt(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Zf(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ht=n,Gt=mi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ht=n,Gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=qi!==null?{id:Vn,overflow:Gn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Kt(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ht=n,Gt=null,!0):!1;default:return!1}}function Ou(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bu(n){if(He){var e=Gt;if(e){var t=e;if(!Zf(n,e)){if(Ou(n))throw Error(Y(418));e=mi(t.nextSibling);var i=Ht;e&&Zf(n,e)?Xp(i,t):(n.flags=n.flags&-4097|2,He=!1,Ht=n)}}else{if(Ou(n))throw Error(Y(418));n.flags=n.flags&-4097|2,He=!1,Ht=n}}}function Kf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ht=n}function To(n){if(n!==Ht)return!1;if(!He)return Kf(n),He=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nu(n.type,n.memoizedProps)),e&&(e=Gt)){if(Ou(n))throw qp(),Error(Y(418));for(;e;)Xp(n,e),e=mi(e.nextSibling)}if(Kf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Y(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Gt=mi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Gt=null}}else Gt=Ht?mi(n.stateNode.nextSibling):null;return!0}function qp(){for(var n=Gt;n;)n=mi(n.nextSibling)}function Xr(){Gt=Ht=null,He=!1}function Nc(n){cn===null?cn=[n]:cn.push(n)}var hv=Zn.ReactCurrentBatchConfig;function ln(n,e){if(n&&n.defaultProps){e=qe({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Ta=Ei(null),Ca=null,Rr=null,zc=null;function kc(){zc=Rr=Ca=null}function Uc(n){var e=Ta.current;Ge(Ta),n._currentValue=e}function Vu(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Br(n,e){Ca=n,zc=Rr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Dt=!0),n.firstContext=null)}function en(n){var e=n._currentValue;if(zc!==n)if(n={context:n,memoizedValue:e,next:null},Rr===null){if(Ca===null)throw Error(Y(308));Rr=n,Ca.dependencies={lanes:0,firstContext:n}}else Rr=Rr.next=n;return e}var zi=null;function Oc(n){zi===null?zi=[n]:zi.push(n)}function $p(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Oc(e)):(t.next=r.next,r.next=t),e.interleaved=t,$n(n,i)}function $n(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ai=!1;function Bc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function gi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Le&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$n(n,t)}return r=i.interleaved,r===null?(e.next=e,Oc(i)):(e.next=r.next,r.next=e),i.interleaved=e,$n(n,t)}function ia(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Tc(n,t)}}function Qf(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ba(n,e,t,i){var r=n.updateQueue;ai=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,p=a;switch(d=e,g=t,p.tag){case 1:if(_=p.payload,typeof _=="function"){f=_.call(g,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=p.payload,d=typeof _=="function"?_.call(g,f,d):_,d==null)break e;f=qe({},f,d);break e;case 2:ai=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yi|=o,n.lanes=o,n.memoizedState=f}}function Jf(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(Y(191,r));r.call(i)}}}var Zp=new $h.Component().refs;function Gu(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:qe({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Wa={isMounted:function(n){return(n=n._reactInternals)?nr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=wt(),r=_i(n),s=Wn(i,r);s.payload=e,t!=null&&(s.callback=t),e=gi(n,s,r),e!==null&&(hn(e,n,r,i),ia(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=wt(),r=_i(n),s=Wn(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=gi(n,s,r),e!==null&&(hn(e,n,r,i),ia(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=wt(),i=_i(n),r=Wn(t,i);r.tag=2,e!=null&&(r.callback=e),e=gi(n,r,i),e!==null&&(hn(e,n,i,t),ia(e,n,i))}};function ed(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(t,i)||!Hs(r,s):!0}function Kp(n,e,t){var i=!1,r=Mi,s=e.contextType;return typeof s=="object"&&s!==null?s=en(s):(r=It(e)?Xi:xt.current,i=e.contextTypes,s=(i=i!=null)?jr(n,r):Mi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wa,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function td(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Wa.enqueueReplaceState(e,e.state,null)}function Hu(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Zp,Bc(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=en(s):(s=It(e)?Xi:xt.current,r.context=jr(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gu(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wa.enqueueReplaceState(r,r.state,null),ba(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ms(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Y(309));var i=t.stateNode}if(!i)throw Error(Y(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Zp&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(Y(284));if(!t._owner)throw Error(Y(290,n))}return n}function Co(n,e){throw n=Object.prototype.toString.call(e),Error(Y(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function nd(n){var e=n._init;return e(n._payload)}function Qp(n){function e(m,v){if(n){var x=m.deletions;x===null?(m.deletions=[v],m.flags|=16):x.push(v)}}function t(m,v){if(!n)return null;for(;v!==null;)e(m,v),v=v.sibling;return null}function i(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function r(m,v){return m=xi(m,v),m.index=0,m.sibling=null,m}function s(m,v,x){return m.index=x,n?(x=m.alternate,x!==null?(x=x.index,x<v?(m.flags|=2,v):x):(m.flags|=2,v)):(m.flags|=1048576,v)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,v,x,w){return v===null||v.tag!==6?(v=Pl(x,m.mode,w),v.return=m,v):(v=r(v,x),v.return=m,v)}function l(m,v,x,w){var M=x.type;return M===Er?c(m,v,x.props.children,w,x.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===oi&&nd(M)===v.type)?(w=r(v,x.props),w.ref=ms(m,v,x),w.return=m,w):(w=ua(x.type,x.key,x.props,null,m.mode,w),w.ref=ms(m,v,x),w.return=m,w)}function u(m,v,x,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Dl(x,m.mode,w),v.return=m,v):(v=r(v,x.children||[]),v.return=m,v)}function c(m,v,x,w,M){return v===null||v.tag!==7?(v=Gi(x,m.mode,w,M),v.return=m,v):(v=r(v,x),v.return=m,v)}function f(m,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Pl(""+v,m.mode,x),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mo:return x=ua(v.type,v.key,v.props,null,m.mode,x),x.ref=ms(m,null,v),x.return=m,x;case wr:return v=Dl(v,m.mode,x),v.return=m,v;case oi:var w=v._init;return f(m,w(v._payload),x)}if(Ms(v)||cs(v))return v=Gi(v,m.mode,x,null),v.return=m,v;Co(m,v)}return null}function d(m,v,x,w){var M=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return M!==null?null:a(m,v,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case mo:return x.key===M?l(m,v,x,w):null;case wr:return x.key===M?u(m,v,x,w):null;case oi:return M=x._init,d(m,v,M(x._payload),w)}if(Ms(x)||cs(x))return M!==null?null:c(m,v,x,w,null);Co(m,x)}return null}function g(m,v,x,w,M){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(x)||null,a(v,m,""+w,M);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mo:return m=m.get(w.key===null?x:w.key)||null,l(v,m,w,M);case wr:return m=m.get(w.key===null?x:w.key)||null,u(v,m,w,M);case oi:var C=w._init;return g(m,v,x,C(w._payload),M)}if(Ms(w)||cs(w))return m=m.get(x)||null,c(v,m,w,M,null);Co(v,w)}return null}function _(m,v,x,w){for(var M=null,C=null,L=v,y=v=0,b=null;L!==null&&y<x.length;y++){L.index>y?(b=L,L=null):b=L.sibling;var R=d(m,L,x[y],w);if(R===null){L===null&&(L=b);break}n&&L&&R.alternate===null&&e(m,L),v=s(R,v,y),C===null?M=R:C.sibling=R,C=R,L=b}if(y===x.length)return t(m,L),He&&Pi(m,y),M;if(L===null){for(;y<x.length;y++)L=f(m,x[y],w),L!==null&&(v=s(L,v,y),C===null?M=L:C.sibling=L,C=L);return He&&Pi(m,y),M}for(L=i(m,L);y<x.length;y++)b=g(L,m,y,x[y],w),b!==null&&(n&&b.alternate!==null&&L.delete(b.key===null?y:b.key),v=s(b,v,y),C===null?M=b:C.sibling=b,C=b);return n&&L.forEach(function(k){return e(m,k)}),He&&Pi(m,y),M}function p(m,v,x,w){var M=cs(x);if(typeof M!="function")throw Error(Y(150));if(x=M.call(x),x==null)throw Error(Y(151));for(var C=M=null,L=v,y=v=0,b=null,R=x.next();L!==null&&!R.done;y++,R=x.next()){L.index>y?(b=L,L=null):b=L.sibling;var k=d(m,L,R.value,w);if(k===null){L===null&&(L=b);break}n&&L&&k.alternate===null&&e(m,L),v=s(k,v,y),C===null?M=k:C.sibling=k,C=k,L=b}if(R.done)return t(m,L),He&&Pi(m,y),M;if(L===null){for(;!R.done;y++,R=x.next())R=f(m,R.value,w),R!==null&&(v=s(R,v,y),C===null?M=R:C.sibling=R,C=R);return He&&Pi(m,y),M}for(L=i(m,L);!R.done;y++,R=x.next())R=g(L,m,y,R.value,w),R!==null&&(n&&R.alternate!==null&&L.delete(R.key===null?y:R.key),v=s(R,v,y),C===null?M=R:C.sibling=R,C=R);return n&&L.forEach(function(ne){return e(m,ne)}),He&&Pi(m,y),M}function h(m,v,x,w){if(typeof x=="object"&&x!==null&&x.type===Er&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case mo:e:{for(var M=x.key,C=v;C!==null;){if(C.key===M){if(M=x.type,M===Er){if(C.tag===7){t(m,C.sibling),v=r(C,x.props.children),v.return=m,m=v;break e}}else if(C.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===oi&&nd(M)===C.type){t(m,C.sibling),v=r(C,x.props),v.ref=ms(m,C,x),v.return=m,m=v;break e}t(m,C);break}else e(m,C);C=C.sibling}x.type===Er?(v=Gi(x.props.children,m.mode,w,x.key),v.return=m,m=v):(w=ua(x.type,x.key,x.props,null,m.mode,w),w.ref=ms(m,v,x),w.return=m,m=w)}return o(m);case wr:e:{for(C=x.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(m,v.sibling),v=r(v,x.children||[]),v.return=m,m=v;break e}else{t(m,v);break}else e(m,v);v=v.sibling}v=Dl(x,m.mode,w),v.return=m,m=v}return o(m);case oi:return C=x._init,h(m,v,C(x._payload),w)}if(Ms(x))return _(m,v,x,w);if(cs(x))return p(m,v,x,w);Co(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(m,v.sibling),v=r(v,x),v.return=m,m=v):(t(m,v),v=Pl(x,m.mode,w),v.return=m,m=v),o(m)):t(m,v)}return h}var qr=Qp(!0),Jp=Qp(!1),oo={},An=Ei(oo),qs=Ei(oo),$s=Ei(oo);function ki(n){if(n===oo)throw Error(Y(174));return n}function Vc(n,e){switch(Oe($s,e),Oe(qs,n),Oe(An,oo),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Su(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Su(e,n)}Ge(An),Oe(An,e)}function $r(){Ge(An),Ge(qs),Ge($s)}function em(n){ki($s.current);var e=ki(An.current),t=Su(e,n.type);e!==t&&(Oe(qs,n),Oe(An,t))}function Gc(n){qs.current===n&&(Ge(An),Ge(qs))}var je=Ei(0);function Aa(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var El=[];function Hc(){for(var n=0;n<El.length;n++)El[n]._workInProgressVersionPrimary=null;El.length=0}var ra=Zn.ReactCurrentDispatcher,Tl=Zn.ReactCurrentBatchConfig,$i=0,Xe=null,nt=null,at=null,La=!1,Rs=!1,Ys=0,pv=0;function pt(){throw Error(Y(321))}function Wc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mn(n[t],e[t]))return!1;return!0}function jc(n,e,t,i,r,s){if($i=s,Xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ra.current=n===null||n.memoizedState===null?_v:xv,n=t(i,r),Rs){s=0;do{if(Rs=!1,Ys=0,25<=s)throw Error(Y(301));s+=1,at=nt=null,e.updateQueue=null,ra.current=yv,n=t(i,r)}while(Rs)}if(ra.current=Pa,e=nt!==null&&nt.next!==null,$i=0,at=nt=Xe=null,La=!1,e)throw Error(Y(300));return n}function Xc(){var n=Ys!==0;return Ys=0,n}function wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?Xe.memoizedState=at=n:at=at.next=n,at}function tn(){if(nt===null){var n=Xe.alternate;n=n!==null?n.memoizedState:null}else n=nt.next;var e=at===null?Xe.memoizedState:at.next;if(e!==null)at=e,nt=n;else{if(n===null)throw Error(Y(310));nt=n,n={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},at===null?Xe.memoizedState=at=n:at=at.next=n}return at}function Zs(n,e){return typeof e=="function"?e(n):e}function Cl(n){var e=tn(),t=e.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=n;var i=nt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if(($i&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Xe.lanes|=c,Yi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,mn(i,e.memoizedState)||(Dt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Xe.lanes|=s,Yi|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function bl(n){var e=tn(),t=e.queue;if(t===null)throw Error(Y(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);mn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function tm(){}function nm(n,e){var t=Xe,i=tn(),r=e(),s=!mn(i.memoizedState,r);if(s&&(i.memoizedState=r,Dt=!0),i=i.queue,qc(sm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||at!==null&&at.memoizedState.tag&1){if(t.flags|=2048,Ks(9,rm.bind(null,t,i,r,e),void 0,null),lt===null)throw Error(Y(349));($i&30)!==0||im(t,e,r)}return r}function im(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function rm(n,e,t,i){e.value=t,e.getSnapshot=i,om(e)&&am(n)}function sm(n,e,t){return t(function(){om(e)&&am(n)})}function om(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mn(n,t)}catch{return!0}}function am(n){var e=$n(n,1);e!==null&&hn(e,n,1,-1)}function id(n){var e=wn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zs,lastRenderedState:n},e.queue=n,n=n.dispatch=vv.bind(null,Xe,n),[e.memoizedState,n]}function Ks(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Xe.updateQueue,e===null?(e={lastEffect:null,stores:null},Xe.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function lm(){return tn().memoizedState}function sa(n,e,t,i){var r=wn();Xe.flags|=n,r.memoizedState=Ks(1|e,t,void 0,i===void 0?null:i)}function ja(n,e,t,i){var r=tn();i=i===void 0?null:i;var s=void 0;if(nt!==null){var o=nt.memoizedState;if(s=o.destroy,i!==null&&Wc(i,o.deps)){r.memoizedState=Ks(e,t,s,i);return}}Xe.flags|=n,r.memoizedState=Ks(1|e,t,s,i)}function rd(n,e){return sa(8390656,8,n,e)}function qc(n,e){return ja(2048,8,n,e)}function um(n,e){return ja(4,2,n,e)}function cm(n,e){return ja(4,4,n,e)}function fm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function dm(n,e,t){return t=t!=null?t.concat([n]):null,ja(4,4,fm.bind(null,e,n),t)}function $c(){}function hm(n,e){var t=tn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Wc(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function pm(n,e){var t=tn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Wc(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function mm(n,e,t){return($i&21)===0?(n.baseState&&(n.baseState=!1,Dt=!0),n.memoizedState=t):(mn(t,e)||(t=_p(),Xe.lanes|=t,Yi|=t,n.baseState=!0),e)}function mv(n,e){var t=ze;ze=t!==0&&4>t?t:4,n(!0);var i=Tl.transition;Tl.transition={};try{n(!1),e()}finally{ze=t,Tl.transition=i}}function gm(){return tn().memoizedState}function gv(n,e,t){var i=_i(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},vm(n))_m(e,t);else if(t=$p(n,e,t,i),t!==null){var r=wt();hn(t,n,i,r),xm(t,e,i)}}function vv(n,e,t){var i=_i(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(vm(n))_m(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,mn(a,o)){var l=e.interleaved;l===null?(r.next=r,Oc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=$p(n,e,r,i),t!==null&&(r=wt(),hn(t,n,i,r),xm(t,e,i))}}function vm(n){var e=n.alternate;return n===Xe||e!==null&&e===Xe}function _m(n,e){Rs=La=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function xm(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Tc(n,t)}}var Pa={readContext:en,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},_v={readContext:en,useCallback:function(n,e){return wn().memoizedState=[n,e===void 0?null:e],n},useContext:en,useEffect:rd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,sa(4194308,4,fm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return sa(4194308,4,n,e)},useInsertionEffect:function(n,e){return sa(4,2,n,e)},useMemo:function(n,e){var t=wn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=wn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=gv.bind(null,Xe,n),[i.memoizedState,n]},useRef:function(n){var e=wn();return n={current:n},e.memoizedState=n},useState:id,useDebugValue:$c,useDeferredValue:function(n){return wn().memoizedState=n},useTransition:function(){var n=id(!1),e=n[0];return n=mv.bind(null,n[1]),wn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Xe,r=wn();if(He){if(t===void 0)throw Error(Y(407));t=t()}else{if(t=e(),lt===null)throw Error(Y(349));($i&30)!==0||im(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,rd(sm.bind(null,i,s,n),[n]),i.flags|=2048,Ks(9,rm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=wn(),e=lt.identifierPrefix;if(He){var t=Gn,i=Vn;t=(i&~(1<<32-dn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ys++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=pv++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},xv={readContext:en,useCallback:hm,useContext:en,useEffect:qc,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:Cl,useRef:lm,useState:function(){return Cl(Zs)},useDebugValue:$c,useDeferredValue:function(n){var e=tn();return mm(e,nt.memoizedState,n)},useTransition:function(){var n=Cl(Zs)[0],e=tn().memoizedState;return[n,e]},useMutableSource:tm,useSyncExternalStore:nm,useId:gm,unstable_isNewReconciler:!1},yv={readContext:en,useCallback:hm,useContext:en,useEffect:qc,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:cm,useMemo:pm,useReducer:bl,useRef:lm,useState:function(){return bl(Zs)},useDebugValue:$c,useDeferredValue:function(n){var e=tn();return nt===null?e.memoizedState=n:mm(e,nt.memoizedState,n)},useTransition:function(){var n=bl(Zs)[0],e=tn().memoizedState;return[n,e]},useMutableSource:tm,useSyncExternalStore:nm,useId:gm,unstable_isNewReconciler:!1};function Yr(n,e){try{var t="",i=e;do t+=$g(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Al(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Wu(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Sv=typeof WeakMap=="function"?WeakMap:Map;function ym(n,e,t){t=Wn(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ra||(Ra=!0,ec=i),Wu(n,e)},t}function Sm(n,e,t){t=Wn(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Wu(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Wu(n,e),typeof i!="function"&&(vi===null?vi=new Set([this]):vi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function sd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Sv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Nv.bind(null,n,e,t),e.then(n,n))}function od(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ad(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Wn(-1,1),e.tag=2,gi(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var Mv=Zn.ReactCurrentOwner,Dt=!1;function Mt(n,e,t,i){e.child=n===null?Jp(e,null,t,i):qr(e,n.child,t,i)}function ld(n,e,t,i,r){t=t.render;var s=e.ref;return Br(e,r),i=jc(n,e,t,i,s,r),t=Xc(),n!==null&&!Dt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yn(n,e,r)):(He&&t&&Ic(e),e.flags|=1,Mt(n,e,i,r),e.child)}function ud(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!nf(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Mm(n,e,s,i,r)):(n=ua(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Hs,t(o,i)&&n.ref===e.ref)return Yn(n,e,r)}return e.flags|=1,n=xi(s,i),n.ref=e.ref,n.return=e,e.child=n}function Mm(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Hs(s,i)&&n.ref===e.ref)if(Dt=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Dt=!0);else return e.lanes=n.lanes,Yn(n,e,r)}return ju(n,e,t,i,r)}function wm(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Oe(Fr,Ot),Ot|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Oe(Fr,Ot),Ot|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Oe(Fr,Ot),Ot|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Oe(Fr,Ot),Ot|=i;return Mt(n,e,r,t),e.child}function Em(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ju(n,e,t,i,r){var s=It(t)?Xi:xt.current;return s=jr(e,s),Br(e,r),t=jc(n,e,t,i,s,r),i=Xc(),n!==null&&!Dt?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yn(n,e,r)):(He&&i&&Ic(e),e.flags|=1,Mt(n,e,t,r),e.child)}function cd(n,e,t,i,r){if(It(t)){var s=!0;Ma(e)}else s=!1;if(Br(e,r),e.stateNode===null)oa(n,e),Kp(e,t,i),Hu(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=en(u):(u=It(t)?Xi:xt.current,u=jr(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&td(e,o,i,u),ai=!1;var d=e.memoizedState;o.state=d,ba(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Rt.current||ai?(typeof c=="function"&&(Gu(e,t,c,i),l=e.memoizedState),(a=ai||ed(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Yp(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ln(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=en(l):(l=It(t)?Xi:xt.current,l=jr(e,l));var g=t.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&td(e,o,i,l),ai=!1,d=e.memoizedState,o.state=d,ba(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||Rt.current||ai?(typeof g=="function"&&(Gu(e,t,g,i),_=e.memoizedState),(u=ai||ed(e,t,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Xu(n,e,t,i,s,r)}function Xu(n,e,t,i,r,s){Em(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Yf(e,t,!1),Yn(n,e,s);i=e.stateNode,Mv.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=qr(e,n.child,null,s),e.child=qr(e,null,a,s)):Mt(n,e,a,s),e.memoizedState=i.state,r&&Yf(e,t,!0),e.child}function Tm(n){var e=n.stateNode;e.pendingContext?$f(n,e.pendingContext,e.pendingContext!==e.context):e.context&&$f(n,e.context,!1),Vc(n,e.containerInfo)}function fd(n,e,t,i,r){return Xr(),Nc(r),e.flags|=256,Mt(n,e,t,i),e.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function $u(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cm(n,e,t){var i=e.pendingProps,r=je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Oe(je,r&1),n===null)return Bu(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$a(o,i,0,null),n=Gi(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=$u(t),e.memoizedState=qu,n):Yc(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wv(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=xi(a,s):(s=Gi(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?$u(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=qu,i}return s=n.child,n=s.sibling,i=xi(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Yc(n,e){return e=$a({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function bo(n,e,t,i){return i!==null&&Nc(i),qr(e,n.child,null,t),n=Yc(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function wv(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Al(Error(Y(422))),bo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=$a({mode:"visible",children:i.children},r,0,null),s=Gi(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&qr(e,n.child,null,o),e.child.memoizedState=$u(o),e.memoizedState=qu,s);if((e.mode&1)===0)return bo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Y(419)),i=Al(s,i,void 0),bo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Dt||a){if(i=lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$n(n,r),hn(i,n,r,-1))}return tf(),i=Al(Error(Y(421))),bo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=zv.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Gt=mi(r.nextSibling),Ht=e,He=!0,cn=null,n!==null&&($t[Yt++]=Vn,$t[Yt++]=Gn,$t[Yt++]=qi,Vn=n.id,Gn=n.overflow,qi=e),e=Yc(e,i.children),e.flags|=4096,e)}function dd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Vu(n.return,e,t)}function Ll(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function bm(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Mt(n,e,i.children,t),i=je.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dd(n,t,e);else if(n.tag===19)dd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Oe(je,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Aa(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Ll(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Aa(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Ll(e,!0,t,null,s);break;case"together":Ll(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oa(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Yi|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(Y(153));if(e.child!==null){for(n=e.child,t=xi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=xi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Ev(n,e,t){switch(e.tag){case 3:Tm(e),Xr();break;case 5:em(e);break;case 1:It(e.type)&&Ma(e);break;case 4:Vc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Oe(Ta,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Oe(je,je.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?Cm(n,e,t):(Oe(je,je.current&1),n=Yn(n,e,t),n!==null?n.sibling:null);Oe(je,je.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return bm(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Oe(je,je.current),i)break;return null;case 22:case 23:return e.lanes=0,wm(n,e,t)}return Yn(n,e,t)}var Am,Yu,Lm,Pm;Am=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yu=function(){};Lm=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ki(An.current);var s=null;switch(t){case"input":r=vu(n,r),i=vu(n,i),s=[];break;case"select":r=qe({},r,{value:void 0}),i=qe({},i,{value:void 0}),s=[];break;case"textarea":r=yu(n,r),i=yu(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=ya)}Mu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Be("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pm=function(n,e,t,i){t!==i&&(e.flags|=4)};function gs(n,e){if(!He)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function mt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Tv(n,e,t){var i=e.pendingProps;switch(Fc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return It(e.type)&&Sa(),mt(e),null;case 3:return i=e.stateNode,$r(),Ge(Rt),Ge(xt),Hc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(To(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,cn!==null&&(ic(cn),cn=null))),Yu(n,e),mt(e),null;case 5:Gc(e);var r=ki($s.current);if(t=e.type,n!==null&&e.stateNode!=null)Lm(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return mt(e),null}if(n=ki(An.current),To(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Tn]=e,i[Xs]=s,n=(e.mode&1)!==0,t){case"dialog":Be("cancel",i),Be("close",i);break;case"iframe":case"object":case"embed":Be("load",i);break;case"video":case"audio":for(r=0;r<Es.length;r++)Be(Es[r],i);break;case"source":Be("error",i);break;case"img":case"image":case"link":Be("error",i),Be("load",i);break;case"details":Be("toggle",i);break;case"input":Sf(i,s),Be("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Be("invalid",i);break;case"textarea":wf(i,s),Be("invalid",i)}Mu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,a,n),r=["children",""+a]):zs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Be("scroll",i)}switch(t){case"input":go(i),Mf(i,s,!0);break;case"textarea":go(i),Ef(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ya)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ip(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Tn]=e,n[Xs]=i,Am(n,e,!1,!1),e.stateNode=n;e:{switch(o=wu(t,i),t){case"dialog":Be("cancel",n),Be("close",n),r=i;break;case"iframe":case"object":case"embed":Be("load",n),r=i;break;case"video":case"audio":for(r=0;r<Es.length;r++)Be(Es[r],n);r=i;break;case"source":Be("error",n),r=i;break;case"img":case"image":case"link":Be("error",n),Be("load",n),r=i;break;case"details":Be("toggle",n),r=i;break;case"input":Sf(n,i),r=vu(n,i),Be("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=qe({},i,{value:void 0}),Be("invalid",n);break;case"textarea":wf(n,i),r=yu(n,i),Be("invalid",n);break;default:r=i}Mu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?op(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&rp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ks(n,l):typeof l=="number"&&ks(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Be("scroll",n):l!=null&&xc(n,s,l,o))}switch(t){case"input":go(n),Mf(n,i,!1);break;case"textarea":go(n),Ef(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Si(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?zr(n,!!i.multiple,s,!1):i.defaultValue!=null&&zr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=ya)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(n&&e.stateNode!=null)Pm(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(t=ki($s.current),ki(An.current),To(e)){if(i=e.stateNode,t=e.memoizedProps,i[Tn]=e,(s=i.nodeValue!==t)&&(n=Ht,n!==null))switch(n.tag){case 3:Eo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Eo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Tn]=e,e.stateNode=i}return mt(e),null;case 13:if(Ge(je),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(He&&Gt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)qp(),Xr(),e.flags|=98560,s=!1;else if(s=To(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(Y(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[Tn]=e}else Xr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else cn!==null&&(ic(cn),cn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(je.current&1)!==0?it===0&&(it=3):tf())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return $r(),Yu(n,e),n===null&&Ws(e.stateNode.containerInfo),mt(e),null;case 10:return Uc(e.type._context),mt(e),null;case 17:return It(e.type)&&Sa(),mt(e),null;case 19:if(Ge(je),s=e.memoizedState,s===null)return mt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)gs(s,!1);else{if(it!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Aa(n),o!==null){for(e.flags|=128,gs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Oe(je,je.current&1|2),e.child}n=n.sibling}s.tail!==null&&Ke()>Zr&&(e.flags|=128,i=!0,gs(s,!1),e.lanes=4194304)}else{if(!i)if(n=Aa(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return mt(e),null}else 2*Ke()-s.renderingStartTime>Zr&&t!==1073741824&&(e.flags|=128,i=!0,gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,t=je.current,Oe(je,i?t&1|2:t&1),e):(mt(e),null);case 22:case 23:return ef(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Ot&1073741824)!==0&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(Y(156,e.tag))}function Cv(n,e){switch(Fc(e),e.tag){case 1:return It(e.type)&&Sa(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $r(),Ge(Rt),Ge(xt),Hc(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Gc(e),null;case 13:if(Ge(je),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));Xr()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ge(je),null;case 4:return $r(),null;case 10:return Uc(e.type._context),null;case 22:case 23:return ef(),null;case 24:return null;default:return null}}var Ao=!1,_t=!1,bv=typeof WeakSet=="function"?WeakSet:Set,ae=null;function Ir(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ze(n,e,i)}else t.current=null}function Zu(n,e,t){try{t()}catch(i){Ze(n,e,i)}}var hd=!1;function Av(n,e){if(Iu=va,n=Fp(),Rc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var g;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Fu={focusedElem:n,selectionRange:t},va=!1,ae=e;ae!==null;)if(e=ae,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ae=n;else for(;ae!==null;){e=ae;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var p=_.memoizedProps,h=_.memoizedState,m=e.stateNode,v=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:ln(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Y(163))}}catch(w){Ze(e,e.return,w)}if(n=e.sibling,n!==null){n.return=e.return,ae=n;break}ae=e.return}return _=hd,hd=!1,_}function Is(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Zu(e,t,s)}r=r.next}while(r!==i)}}function Xa(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ku(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Dm(n){var e=n.alternate;e!==null&&(n.alternate=null,Dm(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Tn],delete e[Xs],delete e[ku],delete e[cv],delete e[fv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rm(n){return n.tag===5||n.tag===3||n.tag===4}function pd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qu(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=ya));else if(i!==4&&(n=n.child,n!==null))for(Qu(n,e,t),n=n.sibling;n!==null;)Qu(n,e,t),n=n.sibling}function Ju(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ju(n,e,t),n=n.sibling;n!==null;)Ju(n,e,t),n=n.sibling}var ct=null,un=!1;function Qn(n,e,t){for(t=t.child;t!==null;)Im(n,e,t),t=t.sibling}function Im(n,e,t){if(bn&&typeof bn.onCommitFiberUnmount=="function")try{bn.onCommitFiberUnmount(Ua,t)}catch{}switch(t.tag){case 5:_t||Ir(t,e);case 6:var i=ct,r=un;ct=null,Qn(n,e,t),ct=i,un=r,ct!==null&&(un?(n=ct,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):ct.removeChild(t.stateNode));break;case 18:ct!==null&&(un?(n=ct,t=t.stateNode,n.nodeType===8?Ml(n.parentNode,t):n.nodeType===1&&Ml(n,t),Vs(n)):Ml(ct,t.stateNode));break;case 4:i=ct,r=un,ct=t.stateNode.containerInfo,un=!0,Qn(n,e,t),ct=i,un=r;break;case 0:case 11:case 14:case 15:if(!_t&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Zu(t,e,o),r=r.next}while(r!==i)}Qn(n,e,t);break;case 1:if(!_t&&(Ir(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ze(t,e,a)}Qn(n,e,t);break;case 21:Qn(n,e,t);break;case 22:t.mode&1?(_t=(i=_t)||t.memoizedState!==null,Qn(n,e,t),_t=i):Qn(n,e,t);break;default:Qn(n,e,t)}}function md(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new bv),e.forEach(function(i){var r=kv.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function nn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,un=!1;break e;case 3:ct=a.stateNode.containerInfo,un=!0;break e;case 4:ct=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(ct===null)throw Error(Y(160));Im(s,o,r),ct=null,un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ze(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fm(e,n),e=e.sibling}function Fm(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(nn(e,n),Mn(n),i&4){try{Is(3,n,n.return),Xa(3,n)}catch(p){Ze(n,n.return,p)}try{Is(5,n,n.return)}catch(p){Ze(n,n.return,p)}}break;case 1:nn(e,n),Mn(n),i&512&&t!==null&&Ir(t,t.return);break;case 5:if(nn(e,n),Mn(n),i&512&&t!==null&&Ir(t,t.return),n.flags&32){var r=n.stateNode;try{ks(r,"")}catch(p){Ze(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tp(r,s),wu(a,o);var u=wu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?op(r,f):c==="dangerouslySetInnerHTML"?rp(r,f):c==="children"?ks(r,f):xc(r,c,f,u)}switch(a){case"input":_u(r,s);break;case"textarea":np(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?zr(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?zr(r,!!s.multiple,s.defaultValue,!0):zr(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xs]=s}catch(p){Ze(n,n.return,p)}}break;case 6:if(nn(e,n),Mn(n),i&4){if(n.stateNode===null)throw Error(Y(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){Ze(n,n.return,p)}}break;case 3:if(nn(e,n),Mn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Vs(e.containerInfo)}catch(p){Ze(n,n.return,p)}break;case 4:nn(e,n),Mn(n);break;case 13:nn(e,n),Mn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qc=Ke())),i&4&&md(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(_t=(u=_t)||c,nn(e,n),_t=u):nn(e,n),Mn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(ae=n,c=n.child;c!==null;){for(f=ae=c;ae!==null;){switch(d=ae,g=d.child,d.tag){case 0:case 11:case 14:case 15:Is(4,d,d.return);break;case 1:Ir(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(p){Ze(i,t,p)}}break;case 5:Ir(d,d.return);break;case 22:if(d.memoizedState!==null){vd(f);continue}}g!==null?(g.return=d,ae=g):vd(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sp("display",o))}catch(p){Ze(n,n.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){Ze(n,n.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:nn(e,n),Mn(n),i&4&&md(n);break;case 21:break;default:nn(e,n),Mn(n)}}function Mn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Rm(t)){var i=t;break e}t=t.return}throw Error(Y(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ks(r,""),i.flags&=-33);var s=pd(n);Ju(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=pd(n);Qu(n,a,o);break;default:throw Error(Y(161))}}catch(l){Ze(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Lv(n,e,t){ae=n,Nm(n)}function Nm(n,e,t){for(var i=(n.mode&1)!==0;ae!==null;){var r=ae,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ao;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||_t;a=Ao;var u=_t;if(Ao=o,(_t=l)&&!u)for(ae=r;ae!==null;)o=ae,l=o.child,o.tag===22&&o.memoizedState!==null?_d(r):l!==null?(l.return=o,ae=l):_d(r);for(;s!==null;)ae=s,Nm(s),s=s.sibling;ae=r,Ao=a,_t=u}gd(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,ae=s):gd(n)}}function gd(n){for(;ae!==null;){var e=ae;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:_t||Xa(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!_t)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ln(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Jf(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Vs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Y(163))}_t||e.flags&512&&Ku(e)}catch(d){Ze(e,e.return,d)}}if(e===n){ae=null;break}if(t=e.sibling,t!==null){t.return=e.return,ae=t;break}ae=e.return}}function vd(n){for(;ae!==null;){var e=ae;if(e===n){ae=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ae=t;break}ae=e.return}}function _d(n){for(;ae!==null;){var e=ae;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Xa(4,e)}catch(l){Ze(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ze(e,r,l)}}var s=e.return;try{Ku(e)}catch(l){Ze(e,s,l)}break;case 5:var o=e.return;try{Ku(e)}catch(l){Ze(e,o,l)}}}catch(l){Ze(e,e.return,l)}if(e===n){ae=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ae=a;break}ae=e.return}}var Pv=Math.ceil,Da=Zn.ReactCurrentDispatcher,Zc=Zn.ReactCurrentOwner,Jt=Zn.ReactCurrentBatchConfig,Le=0,lt=null,et=null,ft=0,Ot=0,Fr=Ei(0),it=0,Qs=null,Yi=0,qa=0,Kc=0,Fs=null,Lt=null,Qc=0,Zr=1/0,kn=null,Ra=!1,ec=null,vi=null,Lo=!1,fi=null,Ia=0,Ns=0,tc=null,aa=-1,la=0;function wt(){return(Le&6)!==0?Ke():aa!==-1?aa:aa=Ke()}function _i(n){return(n.mode&1)===0?1:(Le&2)!==0&&ft!==0?ft&-ft:hv.transition!==null?(la===0&&(la=_p()),la):(n=ze,n!==0||(n=window.event,n=n===void 0?16:Tp(n.type)),n)}function hn(n,e,t,i){if(50<Ns)throw Ns=0,tc=null,Error(Y(185));io(n,t,i),((Le&2)===0||n!==lt)&&(n===lt&&((Le&2)===0&&(qa|=t),it===4&&ui(n,ft)),Ft(n,i),t===1&&Le===0&&(e.mode&1)===0&&(Zr=Ke()+500,Ha&&Ti()))}function Ft(n,e){var t=n.callbackNode;h0(n,e);var i=ga(n,n===lt?ft:0);if(i===0)t!==null&&bf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&bf(t),e===1)n.tag===0?dv(xd.bind(null,n)):Wp(xd.bind(null,n)),lv(function(){(Le&6)===0&&Ti()}),t=null;else{switch(xp(i)){case 1:t=Ec;break;case 4:t=gp;break;case 16:t=ma;break;case 536870912:t=vp;break;default:t=ma}t=Hm(t,zm.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function zm(n,e){if(aa=-1,la=0,(Le&6)!==0)throw Error(Y(327));var t=n.callbackNode;if(Vr()&&n.callbackNode!==t)return null;var i=ga(n,n===lt?ft:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Fa(n,i);else{e=i;var r=Le;Le|=2;var s=Um();(lt!==n||ft!==e)&&(kn=null,Zr=Ke()+500,Vi(n,e));do try{Iv();break}catch(a){km(n,a)}while(1);kc(),Da.current=s,Le=r,et!==null?e=0:(lt=null,ft=0,e=it)}if(e!==0){if(e===2&&(r=Au(n),r!==0&&(i=r,e=nc(n,r))),e===1)throw t=Qs,Vi(n,0),ui(n,i),Ft(n,Ke()),t;if(e===6)ui(n,i);else{if(r=n.current.alternate,(i&30)===0&&!Dv(r)&&(e=Fa(n,i),e===2&&(s=Au(n),s!==0&&(i=s,e=nc(n,s))),e===1))throw t=Qs,Vi(n,0),ui(n,i),Ft(n,Ke()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(Y(345));case 2:Di(n,Lt,kn);break;case 3:if(ui(n,i),(i&130023424)===i&&(e=Qc+500-Ke(),10<e)){if(ga(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){wt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=zu(Di.bind(null,n,Lt,kn),e);break}Di(n,Lt,kn);break;case 4:if(ui(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-dn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ke()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Pv(i/1960))-i,10<i){n.timeoutHandle=zu(Di.bind(null,n,Lt,kn),i);break}Di(n,Lt,kn);break;case 5:Di(n,Lt,kn);break;default:throw Error(Y(329))}}}return Ft(n,Ke()),n.callbackNode===t?zm.bind(null,n):null}function nc(n,e){var t=Fs;return n.current.memoizedState.isDehydrated&&(Vi(n,e).flags|=256),n=Fa(n,e),n!==2&&(e=Lt,Lt=t,e!==null&&ic(e)),n}function ic(n){Lt===null?Lt=n:Lt.push.apply(Lt,n)}function Dv(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!mn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ui(n,e){for(e&=~Kc,e&=~qa,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-dn(e),i=1<<t;n[t]=-1,e&=~i}}function xd(n){if((Le&6)!==0)throw Error(Y(327));Vr();var e=ga(n,0);if((e&1)===0)return Ft(n,Ke()),null;var t=Fa(n,e);if(n.tag!==0&&t===2){var i=Au(n);i!==0&&(e=i,t=nc(n,i))}if(t===1)throw t=Qs,Vi(n,0),ui(n,e),Ft(n,Ke()),t;if(t===6)throw Error(Y(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Di(n,Lt,kn),Ft(n,Ke()),null}function Jc(n,e){var t=Le;Le|=1;try{return n(e)}finally{Le=t,Le===0&&(Zr=Ke()+500,Ha&&Ti())}}function Zi(n){fi!==null&&fi.tag===0&&(Le&6)===0&&Vr();var e=Le;Le|=1;var t=Jt.transition,i=ze;try{if(Jt.transition=null,ze=1,n)return n()}finally{ze=i,Jt.transition=t,Le=e,(Le&6)===0&&Ti()}}function ef(){Ot=Fr.current,Ge(Fr)}function Vi(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,av(t)),et!==null)for(t=et.return;t!==null;){var i=t;switch(Fc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sa();break;case 3:$r(),Ge(Rt),Ge(xt),Hc();break;case 5:Gc(i);break;case 4:$r();break;case 13:Ge(je);break;case 19:Ge(je);break;case 10:Uc(i.type._context);break;case 22:case 23:ef()}t=t.return}if(lt=n,et=n=xi(n.current,null),ft=Ot=e,it=0,Qs=null,Kc=qa=Yi=0,Lt=Fs=null,zi!==null){for(e=0;e<zi.length;e++)if(t=zi[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}zi=null}return n}function km(n,e){do{var t=et;try{if(kc(),ra.current=Pa,La){for(var i=Xe.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}La=!1}if($i=0,at=nt=Xe=null,Rs=!1,Ys=0,Zc.current=null,t===null||t.return===null){it=1,Qs=e,et=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=od(o);if(g!==null){g.flags&=-257,ad(g,o,a,s,e),g.mode&1&&sd(s,u,e),e=g,l=u;var _=e.updateQueue;if(_===null){var p=new Set;p.add(l),e.updateQueue=p}else _.add(l);break e}else{if((e&1)===0){sd(s,u,e),tf();break e}l=Error(Y(426))}}else if(He&&a.mode&1){var h=od(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),ad(h,o,a,s,e),Nc(Yr(l,a));break e}}s=l=Yr(l,a),it!==4&&(it=2),Fs===null?Fs=[s]:Fs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=ym(s,l,e);Qf(s,m);break e;case 1:a=l;var v=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(vi===null||!vi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Sm(s,a,e);Qf(s,w);break e}}s=s.return}while(s!==null)}Bm(t)}catch(M){e=M,et===t&&t!==null&&(et=t=t.return);continue}break}while(1)}function Um(){var n=Da.current;return Da.current=Pa,n===null?Pa:n}function tf(){(it===0||it===3||it===2)&&(it=4),lt===null||(Yi&268435455)===0&&(qa&268435455)===0||ui(lt,ft)}function Fa(n,e){var t=Le;Le|=2;var i=Um();(lt!==n||ft!==e)&&(kn=null,Vi(n,e));do try{Rv();break}catch(r){km(n,r)}while(1);if(kc(),Le=t,Da.current=i,et!==null)throw Error(Y(261));return lt=null,ft=0,it}function Rv(){for(;et!==null;)Om(et)}function Iv(){for(;et!==null&&!r0();)Om(et)}function Om(n){var e=Gm(n.alternate,n,Ot);n.memoizedProps=n.pendingProps,e===null?Bm(n):et=e,Zc.current=null}function Bm(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Tv(t,e,Ot),t!==null){et=t;return}}else{if(t=Cv(t,e),t!==null){t.flags&=32767,et=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{it=6,et=null;return}}if(e=e.sibling,e!==null){et=e;return}et=e=n}while(e!==null);it===0&&(it=5)}function Di(n,e,t){var i=ze,r=Jt.transition;try{Jt.transition=null,ze=1,Fv(n,e,t,i)}finally{Jt.transition=r,ze=i}return null}function Fv(n,e,t,i){do Vr();while(fi!==null);if((Le&6)!==0)throw Error(Y(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Y(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(p0(n,s),n===lt&&(et=lt=null,ft=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||Lo||(Lo=!0,Hm(ma,function(){return Vr(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=Jt.transition,Jt.transition=null;var o=ze;ze=1;var a=Le;Le|=4,Zc.current=null,Av(n,t),Fm(t,n),ev(Fu),va=!!Iu,Fu=Iu=null,n.current=t,Lv(t),s0(),Le=a,ze=o,Jt.transition=s}else n.current=t;if(Lo&&(Lo=!1,fi=n,Ia=r),s=n.pendingLanes,s===0&&(vi=null),l0(t.stateNode),Ft(n,Ke()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ra)throw Ra=!1,n=ec,ec=null,n;return(Ia&1)!==0&&n.tag!==0&&Vr(),s=n.pendingLanes,(s&1)!==0?n===tc?Ns++:(Ns=0,tc=n):Ns=0,Ti(),null}function Vr(){if(fi!==null){var n=xp(Ia),e=Jt.transition,t=ze;try{if(Jt.transition=null,ze=16>n?16:n,fi===null)var i=!1;else{if(n=fi,fi=null,Ia=0,(Le&6)!==0)throw Error(Y(331));var r=Le;for(Le|=4,ae=n.current;ae!==null;){var s=ae,o=s.child;if((ae.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ae=u;ae!==null;){var c=ae;switch(c.tag){case 0:case 11:case 15:Is(8,c,s)}var f=c.child;if(f!==null)f.return=c,ae=f;else for(;ae!==null;){c=ae;var d=c.sibling,g=c.return;if(Dm(c),c===u){ae=null;break}if(d!==null){d.return=g,ae=d;break}ae=g}}}var _=s.alternate;if(_!==null){var p=_.child;if(p!==null){_.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}ae=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Is(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,ae=m;break e}ae=s.return}}var v=n.current;for(ae=v;ae!==null;){o=ae;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,ae=x;else e:for(o=v;ae!==null;){if(a=ae,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Xa(9,a)}}catch(M){Ze(a,a.return,M)}if(a===o){ae=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,ae=w;break e}ae=a.return}}if(Le=r,Ti(),bn&&typeof bn.onPostCommitFiberRoot=="function")try{bn.onPostCommitFiberRoot(Ua,n)}catch{}i=!0}return i}finally{ze=t,Jt.transition=e}}return!1}function yd(n,e,t){e=Yr(t,e),e=ym(n,e,1),n=gi(n,e,1),e=wt(),n!==null&&(io(n,1,e),Ft(n,e))}function Ze(n,e,t){if(n.tag===3)yd(n,n,t);else for(;e!==null;){if(e.tag===3){yd(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vi===null||!vi.has(i))){n=Yr(t,n),n=Sm(e,n,1),e=gi(e,n,1),n=wt(),e!==null&&(io(e,1,n),Ft(e,n));break}}e=e.return}}function Nv(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=wt(),n.pingedLanes|=n.suspendedLanes&t,lt===n&&(ft&t)===t&&(it===4||it===3&&(ft&130023424)===ft&&500>Ke()-Qc?Vi(n,0):Kc|=t),Ft(n,e)}function Vm(n,e){e===0&&((n.mode&1)===0?e=1:(e=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var t=wt();n=$n(n,e),n!==null&&(io(n,e,t),Ft(n,t))}function zv(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Vm(n,t)}function kv(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(Y(314))}i!==null&&i.delete(e),Vm(n,t)}var Gm;Gm=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Rt.current)Dt=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Dt=!1,Ev(n,e,t);Dt=(n.flags&131072)!==0}else Dt=!1,He&&(e.flags&1048576)!==0&&jp(e,Ea,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;oa(n,e),n=e.pendingProps;var r=jr(e,xt.current);Br(e,t),r=jc(null,e,i,n,r,t);var s=Xc();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,It(i)?(s=!0,Ma(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bc(e),r.updater=Wa,e.stateNode=r,r._reactInternals=e,Hu(e,i,n,t),e=Xu(null,e,i,!0,s,t)):(e.tag=0,He&&s&&Ic(e),Mt(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(oa(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ov(i),n=ln(i,n),r){case 0:e=ju(null,e,i,n,t);break e;case 1:e=cd(null,e,i,n,t);break e;case 11:e=ld(null,e,i,n,t);break e;case 14:e=ud(null,e,i,ln(i.type,n),t);break e}throw Error(Y(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ln(i,r),ju(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ln(i,r),cd(n,e,i,r,t);case 3:e:{if(Tm(e),n===null)throw Error(Y(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yp(n,e),ba(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Yr(Error(Y(423)),e),e=fd(n,e,i,t,r);break e}else if(i!==r){r=Yr(Error(Y(424)),e),e=fd(n,e,i,t,r);break e}else for(Gt=mi(e.stateNode.containerInfo.firstChild),Ht=e,He=!0,cn=null,t=Jp(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Xr(),i===r){e=Yn(n,e,t);break e}Mt(n,e,i,t)}e=e.child}return e;case 5:return em(e),n===null&&Bu(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Nu(i,r)?o=null:s!==null&&Nu(i,s)&&(e.flags|=32),Em(n,e),Mt(n,e,o,t),e.child;case 6:return n===null&&Bu(e),null;case 13:return Cm(n,e,t);case 4:return Vc(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=qr(e,null,i,t):Mt(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ln(i,r),ld(n,e,i,r,t);case 7:return Mt(n,e,e.pendingProps,t),e.child;case 8:return Mt(n,e,e.pendingProps.children,t),e.child;case 12:return Mt(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Oe(Ta,i._currentValue),i._currentValue=o,s!==null)if(mn(s.value,o)){if(s.children===r.children&&!Rt.current){e=Yn(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wn(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Vu(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Y(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Vu(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Mt(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Br(e,t),r=en(r),i=i(r),e.flags|=1,Mt(n,e,i,t),e.child;case 14:return i=e.type,r=ln(i,e.pendingProps),r=ln(i.type,r),ud(n,e,i,r,t);case 15:return Mm(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ln(i,r),oa(n,e),e.tag=1,It(i)?(n=!0,Ma(e)):n=!1,Br(e,t),Kp(e,i,r),Hu(e,i,r,t),Xu(null,e,i,!0,n,t);case 19:return bm(n,e,t);case 22:return wm(n,e,t)}throw Error(Y(156,e.tag))};function Hm(n,e){return mp(n,e)}function Uv(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(n,e,t,i){return new Uv(n,e,t,i)}function nf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ov(n){if(typeof n=="function")return nf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Sc)return 11;if(n===Mc)return 14}return 2}function xi(n,e){var t=n.alternate;return t===null?(t=Kt(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ua(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")nf(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Er:return Gi(t.children,r,s,e);case yc:o=8,r|=8;break;case hu:return n=Kt(12,t,e,r|2),n.elementType=hu,n.lanes=s,n;case pu:return n=Kt(13,t,e,r),n.elementType=pu,n.lanes=s,n;case mu:return n=Kt(19,t,e,r),n.elementType=mu,n.lanes=s,n;case Qh:return $a(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Zh:o=10;break e;case Kh:o=9;break e;case Sc:o=11;break e;case Mc:o=14;break e;case oi:o=16,i=null;break e}throw Error(Y(130,n==null?n:typeof n,""))}return e=Kt(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Gi(n,e,t,i){return n=Kt(7,n,i,e),n.lanes=t,n}function $a(n,e,t,i){return n=Kt(22,n,i,e),n.elementType=Qh,n.lanes=t,n.stateNode={isHidden:!1},n}function Pl(n,e,t){return n=Kt(6,n,null,e),n.lanes=t,n}function Dl(n,e,t){return e=Kt(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Bv(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fl(0),this.expirationTimes=fl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function rf(n,e,t,i,r,s,o,a,l){return n=new Bv(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(s),n}function Vv(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Wm(n){if(!n)return Mi;n=n._reactInternals;e:{if(nr(n)!==n||n.tag!==1)throw Error(Y(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(It(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Y(171))}if(n.tag===1){var t=n.type;if(It(t))return Hp(n,t,e)}return e}function jm(n,e,t,i,r,s,o,a,l){return n=rf(t,i,!0,n,r,s,o,a,l),n.context=Wm(null),t=n.current,i=wt(),r=_i(t),s=Wn(i,r),s.callback=e!=null?e:null,gi(t,s,r),n.current.lanes=r,io(n,r,i),Ft(n,i),n}function Ya(n,e,t,i){var r=e.current,s=wt(),o=_i(r);return t=Wm(t),e.context===null?e.context=t:e.pendingContext=t,e=Wn(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=gi(r,e,o),n!==null&&(hn(n,r,o,s),ia(n,r,o)),o}function Na(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function sf(n,e){Sd(n,e),(n=n.alternate)&&Sd(n,e)}function Gv(){return null}var Xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function of(n){this._internalRoot=n}Za.prototype.render=of.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Y(409));Ya(n,e,null,null)};Za.prototype.unmount=of.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Zi(function(){Ya(null,n,null,null)}),e[qn]=null}};function Za(n){this._internalRoot=n}Za.prototype.unstable_scheduleHydration=function(n){if(n){var e=Mp();n={blockedOn:null,target:n,priority:e};for(var t=0;t<li.length&&e!==0&&e<li[t].priority;t++);li.splice(t,0,n),t===0&&Ep(n)}};function af(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ka(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Md(){}function Hv(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Na(o);s.call(u)}}var o=jm(e,i,n,0,null,!1,!1,"",Md);return n._reactRootContainer=o,n[qn]=o.current,Ws(n.nodeType===8?n.parentNode:n),Zi(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Na(l);a.call(u)}}var l=rf(n,0,!1,null,null,!1,!1,"",Md);return n._reactRootContainer=l,n[qn]=l.current,Ws(n.nodeType===8?n.parentNode:n),Zi(function(){Ya(e,l,t,i)}),l}function Qa(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Na(o);a.call(l)}}Ya(e,o,n,r)}else o=Hv(t,e,n,r,i);return Na(o)}yp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ws(e.pendingLanes);t!==0&&(Tc(e,t|1),Ft(e,Ke()),(Le&6)===0&&(Zr=Ke()+500,Ti()))}break;case 13:Zi(function(){var i=$n(n,1);if(i!==null){var r=wt();hn(i,n,1,r)}}),sf(n,1)}};Cc=function(n){if(n.tag===13){var e=$n(n,134217728);if(e!==null){var t=wt();hn(e,n,134217728,t)}sf(n,134217728)}};Sp=function(n){if(n.tag===13){var e=_i(n),t=$n(n,e);if(t!==null){var i=wt();hn(t,n,e,i)}sf(n,e)}};Mp=function(){return ze};wp=function(n,e){var t=ze;try{return ze=n,e()}finally{ze=t}};Tu=function(n,e,t){switch(e){case"input":if(_u(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ga(i);if(!r)throw Error(Y(90));ep(i),_u(i,r)}}}break;case"textarea":np(n,t);break;case"select":e=t.value,e!=null&&zr(n,!!t.multiple,e,!1)}};up=Jc;cp=Zi;var Wv={usingClientEntryPoint:!1,Events:[so,Ar,Ga,ap,lp,Jc]},vs={findFiberByHostInstance:Ni,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jv={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=hp(n),n===null?null:n.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||Gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Po.isDisabled&&Po.supportsFiber)try{Ua=Po.inject(jv),bn=Po}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;jt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!af(e))throw Error(Y(200));return Vv(n,e,null,t)};jt.createRoot=function(n,e){if(!af(n))throw Error(Y(299));var t=!1,i="",r=Xm;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=rf(n,1,!1,null,null,t,!1,i,r),n[qn]=e.current,Ws(n.nodeType===8?n.parentNode:n),new of(e)};jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Y(188)):(n=Object.keys(n).join(","),Error(Y(268,n)));return n=hp(e),n=n===null?null:n.stateNode,n};jt.flushSync=function(n){return Zi(n)};jt.hydrate=function(n,e,t){if(!Ka(e))throw Error(Y(200));return Qa(null,n,e,!0,t)};jt.hydrateRoot=function(n,e,t){if(!af(n))throw Error(Y(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Xm;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=jm(e,null,n,1,t!=null?t:null,r,!1,s,o),n[qn]=e.current,Ws(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Za(e)};jt.render=function(n,e,t){if(!Ka(e))throw Error(Y(200));return Qa(null,n,e,!1,t)};jt.unmountComponentAtNode=function(n){if(!Ka(n))throw Error(Y(40));return n._reactRootContainer?(Zi(function(){Qa(null,null,n,!1,function(){n._reactRootContainer=null,n[qn]=null})}),!0):!1};jt.unstable_batchedUpdates=Jc;jt.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ka(t))throw Error(Y(200));if(n==null||n._reactInternals===void 0)throw Error(Y(38));return Qa(n,e,t,!1,i)};jt.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=jt})(jh);var wd=jh.exports;fu.createRoot=wd.createRoot,fu.hydrateRoot=wd.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lf="142",Xv=0,Ed=1,qv=2,qm=1,$v=2,Ts=3,Js=0,pn=1,Kr=2,Yv=1,yi=0,Gr=1,Td=2,Cd=3,bd=4,Zv=5,Mr=100,Kv=101,Qv=102,Ad=103,Ld=104,Jv=200,e_=201,t_=202,n_=203,$m=204,Ym=205,i_=206,r_=207,s_=208,o_=209,a_=210,l_=0,u_=1,c_=2,rc=3,f_=4,d_=5,h_=6,p_=7,Zm=0,m_=1,g_=2,jn=0,v_=1,__=2,x_=3,y_=4,S_=5,Km=300,Qr=301,Jr=302,sc=303,oc=304,Ja=306,ac=1e3,fn=1001,lc=1002,Pt=1003,Pd=1004,Dd=1005,Zt=1006,M_=1007,el=1008,Ki=1009,w_=1010,E_=1011,Qm=1012,T_=1013,Ui=1014,Oi=1015,eo=1016,C_=1017,b_=1018,Hr=1020,A_=1021,L_=1022,Cn=1023,P_=1024,D_=1025,Hi=1026,es=1027,R_=1028,I_=1029,F_=1030,N_=1031,z_=1033,Rl=33776,Il=33777,Fl=33778,Nl=33779,Rd=35840,Id=35841,Fd=35842,Nd=35843,k_=36196,zd=37492,kd=37496,Ud=37808,Od=37809,Bd=37810,Vd=37811,Gd=37812,Hd=37813,Wd=37814,jd=37815,Xd=37816,qd=37817,$d=37818,Yd=37819,Zd=37820,Kd=37821,Qd=36492,Qi=3e3,Ye=3001,U_=3200,O_=3201,Jm=0,B_=1,Un="srgb",Bi="srgb-linear",zl=7680,V_=519,Jd=35044,eh="300 es",uc=1035;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kl=Math.PI/180,cc=180/Math.PI;function ao(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gt[n&255]+gt[n>>8&255]+gt[n>>16&255]+gt[n>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[i&255]+gt[i>>8&255]+gt[i>>16&255]+gt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function G_(n,e){return(n%e+e)%e}function Ul(n,e,t){return(1-t)*n+t*e}function th(n){return(n&n-1)===0&&n!==0}function fc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],g=i[5],_=i[8],p=r[0],h=r[3],m=r[6],v=r[1],x=r[4],w=r[7],M=r[2],C=r[5],L=r[8];return s[0]=o*p+a*v+l*M,s[3]=o*h+a*x+l*C,s[6]=o*m+a*w+l*L,s[1]=u*p+c*v+f*M,s[4]=u*h+c*x+f*C,s[7]=u*m+c*w+f*L,s[2]=d*p+g*v+_*M,s[5]=d*h+g*x+_*C,s[8]=d*m+g*w+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,g=u*s-o*l,_=t*f+i*d+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=d*p,e[4]=(c*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=g*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*c,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*c,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function eg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ol={[Un]:{[Bi]:Wi},[Bi]:{[Un]:ca}},rn={legacyMode:!0,get workingColorSpace(){return Bi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Ol[e]&&Ol[e][t]!==void 0){const i=Ol[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},sn={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Bl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ro(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Bi){return this.r=e,this.g=t,this.b=i,rn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Bi){if(e=G_(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Bl(o,s,e+1/3),this.g=Bl(o,s,e),this.b=Bl(o,s,e-1/3)}return rn.toWorkingColorSpace(this,r),this}setStyle(e,t=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,rn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,rn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,c=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,rn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,rn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Un){const i=tg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return rn.fromWorkingColorSpace(Ro(this,tt),e),Bt(tt.r*255,0,255)<<16^Bt(tt.g*255,0,255)<<8^Bt(tt.b*255,0,255)<<0}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bi){rn.fromWorkingColorSpace(Ro(this,tt),t);const i=tt.r,r=tt.g,s=tt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Bi){return rn.fromWorkingColorSpace(Ro(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=Un){return rn.fromWorkingColorSpace(Ro(this,tt),e),e!==Un?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(sn),sn.h+=e,sn.s+=t,sn.l+=i,this.setHSL(sn.h,sn.s,sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sn),e.getHSL(Do);const i=Ul(sn.h,Do.h,t),r=Ul(sn.s,Do.s,t),s=Ul(sn.l,Do.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ve.NAMES=tg;let lr;class ng{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{lr===void 0&&(lr=za("canvas")),lr.width=e.width,lr.height=e.height;const i=lr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=lr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ig{constructor(e=null){this.isSource=!0,this.uuid=ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vl(r[o].image)):s.push(Vl(r[o]))}else s=Vl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ng.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let H_=0;class gn extends ss{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=fn,r=fn,s=Zt,o=el,a=Cn,l=Ki,u=1,c=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=ao(),this.name="",this.source=new ig(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ac:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ac:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Km;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],g=l[5],_=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+p)<.1&&Math.abs(_+h)<.1&&Math.abs(u+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,w=(g+1)/2,M=(m+1)/2,C=(c+d)/4,L=(f+p)/4,y=(_+h)/4;return x>w&&x>M?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=L/i):w>M?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=y/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=L/s,r=y/s),this.set(i,r,s,t),this}let v=Math.sqrt((h-_)*(h-_)+(f-p)*(f-p)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(h-_)/v,this.y=(f-p)/v,this.z=(d-c)/v,this.w=Math.acos((u+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ji extends ss{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ig(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rg extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class W_ extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],g=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=g,e[t+2]=_,e[t+3]=p;return}if(f!==p||l!==d||u!==g||c!==_){let h=1-a;const m=l*d+u*g+c*_+f*p,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const M=Math.sqrt(x),C=Math.atan2(M,m*v);h=Math.sin(h*C)/M,a=Math.sin(a*C)/M}const w=a*v;if(l=l*h+d*w,u=u*h+g*w,c=c*h+_*w,f=f*h+p*w,h===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],g=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*g-u*d,e[t+1]=l*_+c*d+u*f-a*g,e[t+2]=u*_+c*g+a*d-l*f,e[t+3]=c*_-a*f-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),g=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f-d*g*_;break;case"YXZ":this._x=d*c*f+u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f+d*g*_;break;case"ZXY":this._x=d*c*f-u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f-d*g*_;break;case"ZYX":this._x=d*c*f-u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f+d*g*_;break;case"YZX":this._x=d*c*f+u*g*_,this._y=u*g*f+d*c*_,this._z=u*c*_-d*g*f,this._w=u*c*f-d*g*_;break;case"XZY":this._x=d*c*f-u*g*_,this._y=u*g*f-d*c*_,this._z=u*c*_+d*g*f,this._w=u*c*f+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(c-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(i>a&&i>f){const g=2*Math.sqrt(1+i-a-f);this._w=(c-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(a>f){const g=2*Math.sqrt(1+a-i-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+c)/g}else{const g=2*Math.sqrt(1+f-i-a);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+c)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gl.copy(this).projectOnVector(e),this.sub(Gl)}reflect(e){return this.sub(Gl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gl=new N,nh=new lo;class uo{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<t&&(t=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)bi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bi)}else i.boundingBox===null&&i.computeBoundingBox(),Hl.copy(i.boundingBox),Hl.applyMatrix4(e.matrixWorld),this.union(Hl);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),Io.subVectors(this.max,_s),ur.subVectors(e.a,_s),cr.subVectors(e.b,_s),fr.subVectors(e.c,_s),Jn.subVectors(cr,ur),ei.subVectors(fr,cr),Ai.subVectors(ur,fr);let t=[0,-Jn.z,Jn.y,0,-ei.z,ei.y,0,-Ai.z,Ai.y,Jn.z,0,-Jn.x,ei.z,0,-ei.x,Ai.z,0,-Ai.x,-Jn.y,Jn.x,0,-ei.y,ei.x,0,-Ai.y,Ai.x,0];return!Wl(t,ur,cr,fr,Io)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,ur,cr,fr,Io))?!1:(Fo.crossVectors(Jn,ei),t=[Fo.x,Fo.y,Fo.z],Wl(t,ur,cr,fr,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new N,new N,new N,new N,new N,new N,new N,new N],bi=new N,Hl=new uo,ur=new N,cr=new N,fr=new N,Jn=new N,ei=new N,Ai=new N,_s=new N,Io=new N,Fo=new N,Li=new N;function Wl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Li.fromArray(n,s);const a=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),l=e.dot(Li),u=t.dot(Li),c=i.dot(Li);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const j_=new uo,ih=new N,No=new N,jl=new N;class uf{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):j_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){jl.subVectors(e,this.center);const t=jl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(jl.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?No.set(0,0,1).multiplyScalar(e.radius):No.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ih.copy(e.center).add(No)),this.expandByPoint(ih.copy(e.center).sub(No)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new N,Xl=new N,zo=new N,ti=new N,ql=new N,ko=new N,$l=new N;class X_{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.direction).multiplyScalar(t).add(this.origin),In.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xl.copy(e).add(t).multiplyScalar(.5),zo.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(Xl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zo),a=ti.dot(this.direction),l=-ti.dot(zo),u=ti.lengthSq(),c=Math.abs(1-o*o);let f,d,g,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const p=1/c;f*=p,d*=p,g=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),g=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(zo).multiplyScalar(d).add(Xl),g}intersectSphere(e,t){In.subVectors(e.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,i,r,s){ql.subVectors(t,e),ko.subVectors(i,e),$l.crossVectors(ql,ko);let o=this.direction.dot($l),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);const l=a*this.direction.dot(ko.crossVectors(ti,ko));if(l<0)return null;const u=a*this.direction.dot(ql.cross(ti));if(u<0||l+u>o)return null;const c=-a*ti.dot($l);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,s,o,a,l,u,c,f,d,g,_,p,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=g,m[7]=_,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/dr.setFromMatrixColumn(e,0).length(),s=1/dr.setFromMatrixColumn(e,1).length(),o=1/dr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,g=o*f,_=a*c,p=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=g+_*u,t[5]=d-p*u,t[9]=-a*l,t[2]=p-d*u,t[6]=_+g*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,g=l*f,_=u*c,p=u*f;t[0]=d+p*a,t[4]=_*a-g,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=g*a-_,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,g=l*f,_=u*c,p=u*f;t[0]=d-p*a,t[4]=-o*f,t[8]=_+g*a,t[1]=g+_*a,t[5]=o*c,t[9]=p-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,g=o*f,_=a*c,p=a*f;t[0]=l*c,t[4]=_*u-g,t[8]=d*u+p,t[1]=l*f,t[5]=p*u+d,t[9]=g*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=p-d*f,t[8]=_*f+g,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=g*f+_,t[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,g=o*u,_=a*l,p=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+p,t[5]=o*c,t[9]=g*f-_,t[2]=_*f-g,t[6]=a*c,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q_,e,$_)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),ni.crossVectors(i,kt),ni.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),ni.crossVectors(i,kt)),ni.normalize(),Uo.crossVectors(kt,ni),r[0]=ni.x,r[4]=Uo.x,r[8]=kt.x,r[1]=ni.y,r[5]=Uo.y,r[9]=kt.y,r[2]=ni.z,r[6]=Uo.z,r[10]=kt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],g=i[13],_=i[2],p=i[6],h=i[10],m=i[14],v=i[3],x=i[7],w=i[11],M=i[15],C=r[0],L=r[4],y=r[8],b=r[12],R=r[1],k=r[5],ne=r[9],Q=r[13],z=r[2],$=r[6],V=r[10],j=r[14],P=r[3],D=r[7],I=r[11],q=r[15];return s[0]=o*C+a*R+l*z+u*P,s[4]=o*L+a*k+l*$+u*D,s[8]=o*y+a*ne+l*V+u*I,s[12]=o*b+a*Q+l*j+u*q,s[1]=c*C+f*R+d*z+g*P,s[5]=c*L+f*k+d*$+g*D,s[9]=c*y+f*ne+d*V+g*I,s[13]=c*b+f*Q+d*j+g*q,s[2]=_*C+p*R+h*z+m*P,s[6]=_*L+p*k+h*$+m*D,s[10]=_*y+p*ne+h*V+m*I,s[14]=_*b+p*Q+h*j+m*q,s[3]=v*C+x*R+w*z+M*P,s[7]=v*L+x*k+w*$+M*D,s[11]=v*y+x*ne+w*V+M*I,s[15]=v*b+x*Q+w*j+M*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],g=e[14],_=e[3],p=e[7],h=e[11],m=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*g-i*l*g)+p*(+t*l*g-t*u*d+s*o*d-r*o*g+r*u*c-s*l*c)+h*(+t*u*f-t*a*g-s*o*f+i*o*g+s*a*c-i*u*c)+m*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],g=e[11],_=e[12],p=e[13],h=e[14],m=e[15],v=f*h*u-p*d*u+p*l*g-a*h*g-f*l*m+a*d*m,x=_*d*u-c*h*u-_*l*g+o*h*g+c*l*m-o*d*m,w=c*p*u-_*f*u+_*a*g-o*p*g-c*a*m+o*f*m,M=_*f*l-c*p*l-_*a*d+o*p*d+c*a*h-o*f*h,C=t*v+i*x+r*w+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=v*L,e[1]=(p*d*s-f*h*s-p*r*g+i*h*g+f*r*m-i*d*m)*L,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*L,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*g-i*l*g)*L,e[4]=x*L,e[5]=(c*h*s-_*d*s+_*r*g-t*h*g-c*r*m+t*d*m)*L,e[6]=(_*l*s-o*h*s-_*r*u+t*h*u+o*r*m-t*l*m)*L,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*g+t*l*g)*L,e[8]=w*L,e[9]=(_*f*s-c*p*s-_*i*g+t*p*g+c*i*m-t*f*m)*L,e[10]=(o*p*s-_*a*s+_*i*u-t*p*u-o*i*m+t*a*m)*L,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*g-t*a*g)*L,e[12]=M*L,e[13]=(c*p*r-_*f*r+_*i*d-t*p*d-c*i*h+t*f*h)*L,e[14]=(_*a*r-o*p*r-_*i*l+t*p*l+o*i*h-t*a*h)*L,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,g=s*c,_=s*f,p=o*c,h=o*f,m=a*f,v=l*u,x=l*c,w=l*f,M=i.x,C=i.y,L=i.z;return r[0]=(1-(p+m))*M,r[1]=(g+w)*M,r[2]=(_-x)*M,r[3]=0,r[4]=(g-w)*C,r[5]=(1-(d+m))*C,r[6]=(h+v)*C,r[7]=0,r[8]=(_+x)*L,r[9]=(h-v)*L,r[10]=(1-(d+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=dr.set(r[0],r[1],r[2]).length();const o=dr.set(r[4],r[5],r[6]).length(),a=dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);const u=1/s,c=1/o,f=1/a;return on.elements[0]*=u,on.elements[1]*=u,on.elements[2]*=u,on.elements[4]*=c,on.elements[5]*=c,on.elements[6]*=c,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),g=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,d=(i+r)*u,g=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const dr=new N,on=new st,q_=new N(0,0,0),$_=new N(1,1,1),ni=new N,Uo=new N,kt=new N,rh=new st,sh=new lo;class co{constructor(e=0,t=0,i=0,r=co.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sh.setFromEuler(this),this.setFromQuaternion(sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}co.DefaultOrder="XYZ";co.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class sg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Y_=0;const oh=new N,hr=new lo,Fn=new st,Oo=new N,xs=new N,Z_=new N,K_=new lo,ah=new N(1,0,0),lh=new N(0,1,0),uh=new N(0,0,1),Q_={type:"added"},ch={type:"removed"};class Nt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DefaultUp.clone();const e=new N,t=new co,i=new lo,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new Qt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.multiply(hr),this}rotateOnWorldAxis(e,t){return hr.setFromAxisAngle(e,t),this.quaternion.premultiply(hr),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(lh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(lh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Oo.copy(e):Oo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(xs,Oo,this.up):Fn.lookAt(Oo,xs,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),hr.setFromRotationMatrix(Fn),this.quaternion.premultiply(hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Q_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ch)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ch)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Z_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,K_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DefaultUp=new N(0,1,0);Nt.DefaultMatrixAutoUpdate=!0;const an=new N,Nn=new N,Yl=new N,zn=new N,pr=new N,mr=new N,fh=new N,Zl=new N,Kl=new N,Ql=new N;class Bn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){an.subVectors(r,t),Nn.subVectors(i,t),Yl.subVectors(e,t);const o=an.dot(an),a=an.dot(Nn),l=an.dot(Yl),u=Nn.dot(Nn),c=Nn.dot(Yl),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,g=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-g-_,_,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn),zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zn),l.set(0,0),l.addScaledVector(s,zn.x),l.addScaledVector(o,zn.y),l.addScaledVector(a,zn.z),l}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Nn.subVectors(e,t),an.cross(Nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),an.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Bn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;pr.subVectors(r,i),mr.subVectors(s,i),Zl.subVectors(e,i);const l=pr.dot(Zl),u=mr.dot(Zl);if(l<=0&&u<=0)return t.copy(i);Kl.subVectors(e,r);const c=pr.dot(Kl),f=mr.dot(Kl);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(pr,o);Ql.subVectors(e,s);const g=pr.dot(Ql),_=mr.dot(Ql);if(_>=0&&g<=_)return t.copy(s);const p=g*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(mr,a);const h=c*_-g*f;if(h<=0&&f-c>=0&&g-_>=0)return fh.subVectors(s,r),a=(f-c)/(f-c+(g-_)),t.copy(r).addScaledVector(fh,a);const m=1/(h+p+d);return o=p*m,a=d*m,t.copy(i).addScaledVector(pr,o).addScaledVector(mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let J_=0;class fo extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Gr,this.side=Js,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=$m,this.blendDst=Ym,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zl,this.stencilZFail=zl,this.stencilZPass=zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===Yv;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(i.blending=this.blending),this.side!==Js&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class og extends fo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new N,Bo=new Re;class Ln{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Jd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new Ve),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Re),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new N),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new rt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix3(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.applyMatrix4(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.applyNormalMatrix(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Je.fromBufferAttribute(this,t),Je.transformDirection(e),this.setXYZ(t,Je.x,Je.y,Je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class ag extends Ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class lg extends Ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ji extends Ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ex=0;const qt=new st,Jl=new Nt,gr=new N,Ut=new uo,ys=new uo,ot=new N;class ir extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eg(e)?lg:ag)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ji(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Ut.min,ys.min),Ut.expandByPoint(ot),ot.addVectors(Ut.max,ys.max),Ut.expandByPoint(ot)):(Ut.expandByPoint(ys.min),Ut.expandByPoint(ys.max))}Ut.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ot.fromBufferAttribute(a,u),l&&(gr.fromBufferAttribute(e,u),ot.add(gr)),r=Math.max(r,i.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let R=0;R<a;R++)u[R]=new N,c[R]=new N;const f=new N,d=new N,g=new N,_=new Re,p=new Re,h=new Re,m=new N,v=new N;function x(R,k,ne){f.fromArray(r,R*3),d.fromArray(r,k*3),g.fromArray(r,ne*3),_.fromArray(o,R*2),p.fromArray(o,k*2),h.fromArray(o,ne*2),d.sub(f),g.sub(f),p.sub(_),h.sub(_);const Q=1/(p.x*h.y-h.x*p.y);!isFinite(Q)||(m.copy(d).multiplyScalar(h.y).addScaledVector(g,-p.y).multiplyScalar(Q),v.copy(g).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(Q),u[R].add(m),u[k].add(m),u[ne].add(m),c[R].add(v),c[k].add(v),c[ne].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let R=0,k=w.length;R<k;++R){const ne=w[R],Q=ne.start,z=ne.count;for(let $=Q,V=Q+z;$<V;$+=3)x(i[$+0],i[$+1],i[$+2])}const M=new N,C=new N,L=new N,y=new N;function b(R){L.fromArray(s,R*3),y.copy(L);const k=u[R];M.copy(k),M.sub(L.multiplyScalar(L.dot(k))).normalize(),C.crossVectors(y,k);const Q=C.dot(c[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=Q}for(let R=0,k=w.length;R<k;++R){const ne=w[R],Q=ne.start,z=ne.count;for(let $=Q,V=Q+z;$<V;$+=3)b(i[$+0]),b(i[$+1]),b(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let d=0,g=e.count;d<g;d+=3){const _=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*t,c=Math.min(l.length,o.length-u);for(let f=0,d=u;f<c;f++,d++)o[d]=l[f]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let g=0,_=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*c;for(let m=0;m<c;m++)d[_++]=u[g++]}return new Ln(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],g=e(d,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,g=f.length;d<g;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const dh=new st,vr=new X_,eu=new uf,ii=new N,ri=new N,si=new N,tu=new N,nu=new N,iu=new N,Vo=new N,Go=new N,Ho=new N,Wo=new Re,jo=new Re,Xo=new Re,ru=new N,qo=new N;class Hn extends Nt{constructor(e=new ir,t=new og){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),eu.copy(i.boundingSphere),eu.applyMatrix4(s),e.ray.intersectsSphere(eu)===!1)||(dh.copy(s).invert(),vr.copy(e.ray).applyMatrix4(dh),i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,g=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],x=Math.max(m.start,_.start),w=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let M=x,C=w;M<C;M+=3){const L=a.getX(M),y=a.getX(M+1),b=a.getX(M+2);o=$o(this,v,e,vr,l,u,c,f,d,L,y,b),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const x=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);o=$o(this,r,e,vr,l,u,c,f,d,x,w,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=g.length;p<h;p++){const m=g[p],v=r[m.materialIndex],x=Math.max(m.start,_.start),w=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let M=x,C=w;M<C;M+=3){const L=M,y=M+1,b=M+2;o=$o(this,v,e,vr,l,u,c,f,d,L,y,b),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let m=p,v=h;m<v;m+=3){const x=m,w=m+1,M=m+2;o=$o(this,r,e,vr,l,u,c,f,d,x,w,M),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function tx(n,e,t,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==Kr,a),l===null)return null;qo.copy(a),qo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(qo);return u<t.near||u>t.far?null:{distance:u,point:qo.clone(),object:n}}function $o(n,e,t,i,r,s,o,a,l,u,c,f){ii.fromBufferAttribute(r,u),ri.fromBufferAttribute(r,c),si.fromBufferAttribute(r,f);const d=n.morphTargetInfluences;if(s&&d){Vo.set(0,0,0),Go.set(0,0,0),Ho.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=d[_],m=s[_];h!==0&&(tu.fromBufferAttribute(m,u),nu.fromBufferAttribute(m,c),iu.fromBufferAttribute(m,f),o?(Vo.addScaledVector(tu,h),Go.addScaledVector(nu,h),Ho.addScaledVector(iu,h)):(Vo.addScaledVector(tu.sub(ii),h),Go.addScaledVector(nu.sub(ri),h),Ho.addScaledVector(iu.sub(si),h)))}ii.add(Vo),ri.add(Go),si.add(Ho)}n.isSkinnedMesh&&(n.boneTransform(u,ii),n.boneTransform(c,ri),n.boneTransform(f,si));const g=tx(n,e,t,i,ii,ri,si,ru);if(g){a&&(Wo.fromBufferAttribute(a,u),jo.fromBufferAttribute(a,c),Xo.fromBufferAttribute(a,f),g.uv=Bn.getUV(ru,ii,ri,si,Wo,jo,Xo,new Re)),l&&(Wo.fromBufferAttribute(l,u),jo.fromBufferAttribute(l,c),Xo.fromBufferAttribute(l,f),g.uv2=Bn.getUV(ru,ii,ri,si,Wo,jo,Xo,new Re));const _={a:u,b:c,c:f,normal:new N,materialIndex:0};Bn.getNormal(ii,ri,si,_.normal),g.face=_}return g}class os extends ir{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,g=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ji(u,3)),this.setAttribute("normal",new ji(c,3)),this.setAttribute("uv",new ji(f,2));function _(p,h,m,v,x,w,M,C,L,y,b){const R=w/L,k=M/y,ne=w/2,Q=M/2,z=C/2,$=L+1,V=y+1;let j=0,P=0;const D=new N;for(let I=0;I<V;I++){const q=I*k-Q;for(let X=0;X<$;X++){const Z=X*R-ne;D[p]=Z*v,D[h]=q*x,D[m]=z,u.push(D.x,D.y,D.z),D[p]=0,D[h]=0,D[m]=C>0?1:-1,c.push(D.x,D.y,D.z),f.push(X/L),f.push(1-I/y),j+=1}}for(let I=0;I<y;I++)for(let q=0;q<L;q++){const X=d+q+$*I,Z=d+q+$*(I+1),oe=d+(q+1)+$*(I+1),de=d+(q+1)+$*I;l.push(X,Z,de),l.push(Z,oe,de),P+=6}a.addGroup(g,P,b),g+=P,d+=j}}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ts(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vt(n){const e={};for(let t=0;t<n.length;t++){const i=ts(n[t]);for(const r in i)e[r]=i[r]}return e}const nx={clone:ts,merge:vt};var ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends fo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=ix,this.fragmentShader=rx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ug extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vt extends ug{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=90,xr=1;class sx extends Nt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new Vt(_r,xr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new N(1,0,0)),this.add(r);const s=new Vt(_r,xr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const o=new Vt(_r,xr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new N(0,1,0)),this.add(o);const a=new Vt(_r,xr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new N(0,-1,0)),this.add(a);const l=new Vt(_r,xr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const u=new Vt(_r,xr,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new N(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=jn,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class cg extends gn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Qr,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ox extends Ji{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new cg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new os(5,5,5),s=new er({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:yi});s.uniforms.tEquirect.value=t;const o=new Hn(r,s),a=t.minFilter;return t.minFilter===el&&(t.minFilter=Zt),new sx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const su=new N,ax=new N,lx=new Qt;class Ri{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=su.subVectors(i,t).cross(ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lx.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new uf,Yo=new N;class cf{constructor(e=new Ri,t=new Ri,i=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],g=i[9],_=i[10],p=i[11],h=i[12],m=i[13],v=i[14],x=i[15];return t[0].setComponents(a-r,f-l,p-d,x-h).normalize(),t[1].setComponents(a+r,f+l,p+d,x+h).normalize(),t[2].setComponents(a+s,f+u,p+g,x+m).normalize(),t[3].setComponents(a-s,f-u,p-g,x-m).normalize(),t[4].setComponents(a-o,f-c,p-_,x-v).normalize(),t[5].setComponents(a+o,f+c,p+_,x+v).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSprite(e){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Yo.x=r.normal.x>0?e.max.x:e.min.x,Yo.y=r.normal.y>0?e.max.y:e.min.y,Yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ux(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,g=n.createBuffer();n.bindBuffer(c,g),n.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,g=c.updateRange;n.bindBuffer(f,u),g.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d,g.offset,g.count):n.bufferSubData(f,g.offset*d.BYTES_PER_ELEMENT,d.subarray(g.offset,g.offset+g.count)),g.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class ff extends ir{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,g=[],_=[],p=[],h=[];for(let m=0;m<c;m++){const v=m*d-o;for(let x=0;x<u;x++){const w=x*f-s;_.push(w,-v,0),p.push(0,0,1),h.push(x/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){const x=v+u*m,w=v+u*(m+1),M=v+1+u*(m+1),C=v+1+u*m;g.push(x,w,C),g.push(w,M,C)}this.setIndex(g),this.setAttribute("position",new ji(_,3)),this.setAttribute("normal",new ji(p,3)),this.setAttribute("uv",new ji(h,2))}static fromJSON(e){return new ff(e.width,e.height,e.widthSegments,e.heightSegments)}}var cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx="vec3 transformed = vec3( position );",vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,xx=`#ifdef USE_IRIDESCENCE
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
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
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
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,yx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lx=`#define PI 3.141592653589793
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
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dx=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",kx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,$x=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zx=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Kx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Qx=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,iy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ry=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_y=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Py=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Iy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vy=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gy=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Jy=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,eS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,tS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,nS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,iS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,sS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,oS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,dS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,pS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_S=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ES=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,AS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,PS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,RS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:cx,alphamap_pars_fragment:fx,alphatest_fragment:dx,alphatest_pars_fragment:hx,aomap_fragment:px,aomap_pars_fragment:mx,begin_vertex:gx,beginnormal_vertex:vx,bsdfs:_x,iridescence_fragment:xx,bumpmap_pars_fragment:yx,clipping_planes_fragment:Sx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Ex,color_fragment:Tx,color_pars_fragment:Cx,color_pars_vertex:bx,color_vertex:Ax,common:Lx,cube_uv_reflection_fragment:Px,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Rx,displacementmap_vertex:Ix,emissivemap_fragment:Fx,emissivemap_pars_fragment:Nx,encodings_fragment:zx,encodings_pars_fragment:kx,envmap_fragment:Ux,envmap_common_pars_fragment:Ox,envmap_pars_fragment:Bx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:Qx,envmap_vertex:Gx,fog_vertex:Hx,fog_pars_vertex:Wx,fog_fragment:jx,fog_pars_fragment:Xx,gradientmap_pars_fragment:qx,lightmap_fragment:$x,lightmap_pars_fragment:Yx,lights_lambert_vertex:Zx,lights_pars_begin:Kx,lights_toon_fragment:Jx,lights_toon_pars_fragment:ey,lights_phong_fragment:ty,lights_phong_pars_fragment:ny,lights_physical_fragment:iy,lights_physical_pars_fragment:ry,lights_fragment_begin:sy,lights_fragment_maps:oy,lights_fragment_end:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:fy,map_fragment:dy,map_pars_fragment:hy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:vy,morphcolor_vertex:_y,morphnormal_vertex:xy,morphtarget_pars_vertex:yy,morphtarget_vertex:Sy,normal_fragment_begin:My,normal_fragment_maps:wy,normal_pars_fragment:Ey,normal_pars_vertex:Ty,normal_vertex:Cy,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Py,iridescence_pars_fragment:Dy,output_fragment:Ry,packing:Iy,premultiplied_alpha_fragment:Fy,project_vertex:Ny,dithering_fragment:zy,dithering_pars_fragment:ky,roughnessmap_fragment:Uy,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:Vy,shadowmap_vertex:Gy,shadowmask_pars_fragment:Hy,skinbase_vertex:Wy,skinning_pars_vertex:jy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:$y,specularmap_pars_fragment:Yy,tonemapping_fragment:Zy,tonemapping_pars_fragment:Ky,transmission_fragment:Qy,transmission_pars_fragment:Jy,uv_pars_fragment:eS,uv_pars_vertex:tS,uv_vertex:nS,uv2_pars_fragment:iS,uv2_pars_vertex:rS,uv2_vertex:sS,worldpos_vertex:oS,background_vert:aS,background_frag:lS,cube_vert:uS,cube_frag:cS,depth_vert:fS,depth_frag:dS,distanceRGBA_vert:hS,distanceRGBA_frag:pS,equirect_vert:mS,equirect_frag:gS,linedashed_vert:vS,linedashed_frag:_S,meshbasic_vert:xS,meshbasic_frag:yS,meshlambert_vert:SS,meshlambert_frag:MS,meshmatcap_vert:wS,meshmatcap_frag:ES,meshnormal_vert:TS,meshnormal_frag:CS,meshphong_vert:bS,meshphong_frag:AS,meshphysical_vert:LS,meshphysical_frag:PS,meshtoon_vert:DS,meshtoon_frag:RS,points_vert:IS,points_frag:FS,shadow_vert:NS,shadow_frag:zS,sprite_vert:kS,sprite_frag:US},re={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qt},uv2Transform:{value:new Qt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qt}}},En={basic:{uniforms:vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:vt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:vt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:vt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:vt([re.points,re.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:vt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:vt([re.common,re.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:vt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:vt([re.sprite,re.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},cube:{uniforms:vt([re.envmap,{opacity:{value:1}}]),vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:vt([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:vt([re.lights,re.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};En.physical={uniforms:vt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};function OS(n,e,t,i,r,s){const o=new Ve(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function g(p,h){let m=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const x=n.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(v=null),v===null?_(o,a):v&&v.isColor&&(_(v,1),m=!0),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ja)?(u===void 0&&(u=new Hn(new os(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:ts(En.cube.uniforms),vertexShader:En.cube.vertexShader,fragmentShader:En.cube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Hn(new ff(2,2),new er({name:"BackgroundMaterial",uniforms:ts(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Js,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:g}}function BS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function f(z,$,V,j,P){let D=!1;if(o){const I=p(j,V,$);u!==I&&(u=I,g(u.object)),D=m(z,j,V,P),D&&v(z,j,V,P)}else{const I=$.wireframe===!0;(u.geometry!==j.id||u.program!==V.id||u.wireframe!==I)&&(u.geometry=j.id,u.program=V.id,u.wireframe=I,D=!0)}P!==null&&t.update(P,34963),(D||c)&&(c=!1,y(z,$,V,j),P!==null&&n.bindBuffer(34963,t.get(P).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function g(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,$,V){const j=V.wireframe===!0;let P=a[z.id];P===void 0&&(P={},a[z.id]=P);let D=P[$.id];D===void 0&&(D={},P[$.id]=D);let I=D[j];return I===void 0&&(I=h(d()),D[j]=I),I}function h(z){const $=[],V=[],j=[];for(let P=0;P<r;P++)$[P]=0,V[P]=0,j[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:V,attributeDivisors:j,object:z,attributes:{},index:null}}function m(z,$,V,j){const P=u.attributes,D=$.attributes;let I=0;const q=V.getAttributes();for(const X in q)if(q[X].location>=0){const oe=P[X];let de=D[X];if(de===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(de=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(de=z.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;I++}return u.attributesNum!==I||u.index!==j}function v(z,$,V,j){const P={},D=$.attributes;let I=0;const q=V.getAttributes();for(const X in q)if(q[X].location>=0){let oe=D[X];oe===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor));const de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),P[X]=de,I++}u.attributes=P,u.attributesNum=I,u.index=j}function x(){const z=u.newAttributes;for(let $=0,V=z.length;$<V;$++)z[$]=0}function w(z){M(z,0)}function M(z,$){const V=u.newAttributes,j=u.enabledAttributes,P=u.attributeDivisors;V[z]=1,j[z]===0&&(n.enableVertexAttribArray(z),j[z]=1),P[z]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,$),P[z]=$)}function C(){const z=u.newAttributes,$=u.enabledAttributes;for(let V=0,j=$.length;V<j;V++)$[V]!==z[V]&&(n.disableVertexAttribArray(V),$[V]=0)}function L(z,$,V,j,P,D){i.isWebGL2===!0&&(V===5124||V===5125)?n.vertexAttribIPointer(z,$,V,P,D):n.vertexAttribPointer(z,$,V,j,P,D)}function y(z,$,V,j){if(i.isWebGL2===!1&&(z.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const P=j.attributes,D=V.getAttributes(),I=$.defaultAttributeValues;for(const q in D){const X=D[q];if(X.location>=0){let Z=P[q];if(Z===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),Z!==void 0){const oe=Z.normalized,de=Z.itemSize,G=t.get(Z);if(G===void 0)continue;const We=G.buffer,Te=G.type,Se=G.bytesPerElement;if(Z.isInterleavedBufferAttribute){const le=Z.data,ke=le.stride,be=Z.offset;if(le.isInstancedInterleavedBuffer){for(let me=0;me<X.locationSize;me++)M(X.location+me,le.meshPerAttribute);z.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<X.locationSize;me++)w(X.location+me);n.bindBuffer(34962,We);for(let me=0;me<X.locationSize;me++)L(X.location+me,de/X.locationSize,Te,oe,ke*Se,(be+de/X.locationSize*me)*Se)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<X.locationSize;le++)M(X.location+le,Z.meshPerAttribute);z.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<X.locationSize;le++)w(X.location+le);n.bindBuffer(34962,We);for(let le=0;le<X.locationSize;le++)L(X.location+le,de/X.locationSize,Te,oe,de*Se,de/X.locationSize*le*Se)}}else if(I!==void 0){const oe=I[q];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(X.location,oe);break;case 3:n.vertexAttrib3fv(X.location,oe);break;case 4:n.vertexAttrib4fv(X.location,oe);break;default:n.vertexAttrib1fv(X.location,oe)}}}}C()}function b(){ne();for(const z in a){const $=a[z];for(const V in $){const j=$[V];for(const P in j)_(j[P].object),delete j[P];delete $[V]}delete a[z]}}function R(z){if(a[z.id]===void 0)return;const $=a[z.id];for(const V in $){const j=$[V];for(const P in j)_(j[P].object),delete j[P];delete $[V]}delete a[z.id]}function k(z){for(const $ in a){const V=a[$];if(V[z.id]===void 0)continue;const j=V[z.id];for(const P in j)_(j[P].object),delete j[P];delete V[z.id]}}function ne(){Q(),c=!0,u!==l&&(u=l,g(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:Q,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:w,disableUnusedAttributes:C}}function VS(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,g;if(r)d=n,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function GS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),g=n.getParameter(3379),_=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),m=n.getParameter(36348),v=n.getParameter(36349),x=d>0,w=o||e.has("OES_texture_float"),M=x&&w,C=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:C}}function HS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ri,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,g){const _=f.length!==0||d||i!==0||r;return r=d,t=c(f,g,0),i=f.length,_},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,g){const _=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,m=n.get(f);if(!r||_===null||_.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,x=v*4;let w=m.clippingState||null;l.value=w,w=c(_,d,x,g);for(let M=0;M!==x;++M)w[M]=t[M];m.clippingState=w,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,g,_){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const m=g+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<m)&&(h=new Float32Array(m));for(let x=0,w=g;x!==p;++x,w+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(h,w),h[w+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function WS(n){let e=new WeakMap;function t(o,a){return a===sc?o.mapping=Qr:a===oc&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===sc||a===oc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ox(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jS extends ug{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=4,hh=[.125,.215,.35,.446,.526,.582],Fi=20,ou=new jS,ph=new Ve;let au=null;const Ii=(1+Math.sqrt(5))/2,Sr=1/Ii,mh=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ii,Sr),new N(0,Ii,-Sr),new N(Sr,0,Ii),new N(-Sr,0,Ii),new N(Ii,Sr,0),new N(-Ii,Sr,0)];class gh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){au=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(au),e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),au=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:eo,format:Cn,encoding:Qi,depthBuffer:!1},r=vh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XS(s)),this._blurMaterial=qS(s,e,t)}return r}_compileMaterial(e){const t=new Hn(this._lodPlanes[0],e);this._renderer.compile(t,ou)}_sceneToCubeUV(e,t,i,r){const a=new Vt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(ph),c.toneMapping=jn,c.autoClear=!1;const g=new og({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new Hn(new os,g);let p=!1;const h=e.background;h?h.isColor&&(g.color.copy(h),e.background=null,p=!0):(g.color.copy(ph),p=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):v===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const x=this._cubeSize;Zo(r,v*x,m>2?x:0,x,x),c.setRenderTarget(r),p&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ou)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mh[(r-1)%mh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Hn(this._lodPlanes[r],u),d=u.uniforms,g=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Fi-1),p=s/_,h=isFinite(s)?1+Math.floor(c*p):Fi;h>Fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Fi}`);const m=[];let v=0;for(let L=0;L<Fi;++L){const y=L/p,b=Math.exp(-y*y/2);m.push(b),L===0?v+=b:L<h&&(v+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const w=this._sizeLods[r],M=3*w*(r>x-Nr?r-x+Nr:0),C=4*(this._cubeSize-w);Zo(t,M,C,3*w,2*w),l.setRenderTarget(t),l.render(f,ou)}}function XS(n){const e=[],t=[],i=[];let r=n;const s=n-Nr+1+hh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Nr?l=hh[o-n+Nr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],g=6,_=6,p=3,h=2,m=1,v=new Float32Array(p*_*g),x=new Float32Array(h*_*g),w=new Float32Array(m*_*g);for(let C=0;C<g;C++){const L=C%3*2/3-1,y=C>2?0:-1,b=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];v.set(b,p*_*C),x.set(d,h*_*C);const R=[C,C,C,C,C,C];w.set(R,m*_*C)}const M=new ir;M.setAttribute("position",new Ln(v,p)),M.setAttribute("uv",new Ln(x,h)),M.setAttribute("faceIndex",new Ln(w,m)),e.push(M),r>Nr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vh(n,e,t){const i=new Ji(n,e,t);return i.texture.mapping=Ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function qS(n,e,t){const i=new Float32Array(Fi),r=new N(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function _h(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function xh(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $S(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===sc||l===oc,c=l===Qr||l===Jr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new gh(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new gh(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function YS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ZS(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],34962);const g=f.morphAttributes;for(const _ in g){const p=g[_];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(f){const d=[],g=f.index,_=f.attributes.position;let p=0;if(g!==null){const v=g.array;p=g.version;for(let x=0,w=v.length;x<w;x+=3){const M=v[x+0],C=v[x+1],L=v[x+2];d.push(M,C,C,L,L,M)}}else{const v=_.array;p=_.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const M=x+0,C=x+1,L=x+2;d.push(M,C,C,L,L,M)}}const h=new(eg(d)?lg:ag)(d,1);h.version=p;const m=s.get(f);m&&e.remove(m),s.set(f,h)}function c(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function KS(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,g){n.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,_){if(_===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,g,a,d*l,_),t.update(g,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function QS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function JS(n,e){return n[0]-e[0]}function e1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function lu(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function t1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const g=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=p!==void 0?p.length:0;let m=s.get(c);if(m===void 0||m.count!==h){let V=function(){z.dispose(),s.delete(c),c.removeEventListener("dispose",V)};var _=V;m!==void 0&&m.texture.dispose();const w=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,L=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let R=0;w===!0&&(R=1),M===!0&&(R=2),C===!0&&(R=3);let k=c.attributes.position.count*R,ne=1;k>e.maxTextureSize&&(ne=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const Q=new Float32Array(k*ne*4*h),z=new rg(Q,k,ne,h);z.type=Oi,z.needsUpdate=!0;const $=R*4;for(let j=0;j<h;j++){const P=L[j],D=y[j],I=b[j],q=k*ne*4*j;for(let X=0;X<P.count;X++){const Z=X*$;w===!0&&(o.fromBufferAttribute(P,X),P.normalized===!0&&lu(o,P),Q[q+Z+0]=o.x,Q[q+Z+1]=o.y,Q[q+Z+2]=o.z,Q[q+Z+3]=0),M===!0&&(o.fromBufferAttribute(D,X),D.normalized===!0&&lu(o,D),Q[q+Z+4]=o.x,Q[q+Z+5]=o.y,Q[q+Z+6]=o.z,Q[q+Z+7]=0),C===!0&&(o.fromBufferAttribute(I,X),I.normalized===!0&&lu(o,I),Q[q+Z+8]=o.x,Q[q+Z+9]=o.y,Q[q+Z+10]=o.z,Q[q+Z+11]=I.itemSize===4?o.w:1)}}m={count:h,texture:z,size:new Re(k,ne)},s.set(c,m),c.addEventListener("dispose",V)}let v=0;for(let w=0;w<g.length;w++)v+=g[w];const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",g),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const p=g===void 0?0:g.length;let h=i[c.id];if(h===void 0||h.length!==p){h=[];for(let M=0;M<p;M++)h[M]=[M,0];i[c.id]=h}for(let M=0;M<p;M++){const C=h[M];C[0]=M,C[1]=g[M]}h.sort(e1);for(let M=0;M<8;M++)M<p&&h[M][1]?(a[M][0]=h[M][0],a[M][1]=h[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(JS);const m=c.morphAttributes.position,v=c.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const C=a[M],L=C[0],y=C[1];L!==Number.MAX_SAFE_INTEGER&&y?(m&&c.getAttribute("morphTarget"+M)!==m[L]&&c.setAttribute("morphTarget"+M,m[L]),v&&c.getAttribute("morphNormal"+M)!==v[L]&&c.setAttribute("morphNormal"+M,v[L]),r[M]=y,x+=y):(m&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),v&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const w=c.morphTargetsRelative?1:1-x;d.getUniforms().setValue(n,"morphTargetBaseInfluence",w),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function n1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const dg=new gn,hg=new rg,pg=new W_,mg=new cg,yh=[],Sh=[],Mh=new Float32Array(16),wh=new Float32Array(9),Eh=new Float32Array(4);function as(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=yh[r];if(s===void 0&&(s=new Float32Array(r),yh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tl(n,e){let t=Sh[e];t===void 0&&(t=new Int32Array(e),Sh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function i1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function r1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function s1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function a1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Eh.set(i),n.uniformMatrix2fv(this.addr,!1,Eh),Tt(t,i)}}function l1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;wh.set(i),n.uniformMatrix3fv(this.addr,!1,wh),Tt(t,i)}}function u1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,i))return;Mh.set(i),n.uniformMatrix4fv(this.addr,!1,Mh),Tt(t,i)}}function c1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function f1(n,e){const t=this.cache;Et(t,e)||(n.uniform2iv(this.addr,e),Tt(t,e))}function d1(n,e){const t=this.cache;Et(t,e)||(n.uniform3iv(this.addr,e),Tt(t,e))}function h1(n,e){const t=this.cache;Et(t,e)||(n.uniform4iv(this.addr,e),Tt(t,e))}function p1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function m1(n,e){const t=this.cache;Et(t,e)||(n.uniform2uiv(this.addr,e),Tt(t,e))}function g1(n,e){const t=this.cache;Et(t,e)||(n.uniform3uiv(this.addr,e),Tt(t,e))}function v1(n,e){const t=this.cache;Et(t,e)||(n.uniform4uiv(this.addr,e),Tt(t,e))}function _1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||dg,r)}function x1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pg,r)}function y1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mg,r)}function S1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hg,r)}function M1(n){switch(n){case 5126:return i1;case 35664:return r1;case 35665:return s1;case 35666:return o1;case 35674:return a1;case 35675:return l1;case 35676:return u1;case 5124:case 35670:return c1;case 35667:case 35671:return f1;case 35668:case 35672:return d1;case 35669:case 35673:return h1;case 5125:return p1;case 36294:return m1;case 36295:return g1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return S1}}function w1(n,e){n.uniform1fv(this.addr,e)}function E1(n,e){const t=as(e,this.size,2);n.uniform2fv(this.addr,t)}function T1(n,e){const t=as(e,this.size,3);n.uniform3fv(this.addr,t)}function C1(n,e){const t=as(e,this.size,4);n.uniform4fv(this.addr,t)}function b1(n,e){const t=as(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function A1(n,e){const t=as(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L1(n,e){const t=as(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function P1(n,e){n.uniform1iv(this.addr,e)}function D1(n,e){n.uniform2iv(this.addr,e)}function R1(n,e){n.uniform3iv(this.addr,e)}function I1(n,e){n.uniform4iv(this.addr,e)}function F1(n,e){n.uniform1uiv(this.addr,e)}function N1(n,e){n.uniform2uiv(this.addr,e)}function z1(n,e){n.uniform3uiv(this.addr,e)}function k1(n,e){n.uniform4uiv(this.addr,e)}function U1(n,e,t){const i=e.length,r=tl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||dg,r[s])}function O1(n,e,t){const i=e.length,r=tl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||pg,r[s])}function B1(n,e,t){const i=e.length,r=tl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||mg,r[s])}function V1(n,e,t){const i=e.length,r=tl(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||hg,r[s])}function G1(n){switch(n){case 5126:return w1;case 35664:return E1;case 35665:return T1;case 35666:return C1;case 35674:return b1;case 35675:return A1;case 35676:return L1;case 5124:case 35670:return P1;case 35667:case 35671:return D1;case 35668:case 35672:return R1;case 35669:case 35673:return I1;case 5125:return F1;case 36294:return N1;case 36295:return z1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return O1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return V1}}class H1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=M1(t.type)}}class W1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=G1(t.type)}}class j1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const uu=/(\w+)(\])?(\[|\.)?/g;function Th(n,e){n.seq.push(e),n.map[e.id]=e}function X1(n,e,t){const i=n.name,r=i.length;for(uu.lastIndex=0;;){const s=uu.exec(i),o=uu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Th(t,u===void 0?new H1(a,n,e):new W1(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new j1(a),Th(t,f)),t=f}}}class fa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);X1(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ch(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let q1=0;function $1(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Y1(n){switch(n){case Qi:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function bh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$1(n.getShaderSource(e),o)}else return r}function Z1(n,e){const t=Y1(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function K1(n,e){let t;switch(e){case v_:t="Linear";break;case __:t="Reinhard";break;case x_:t="OptimizedCineon";break;case y_:t="ACESFilmic";break;case S_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Q1(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function J1(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Cs(n){return n!==""}function Ah(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tM=/^[ \t]*#include +<([\w\d./]+)>/gm;function dc(n){return n.replace(tM,nM)}function nM(n,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return dc(t)}const iM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(n){return n.replace(rM,gg).replace(iM,sM)}function sM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),gg(n,e,t,i)}function gg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$v?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ts&&(e="SHADOWMAP_TYPE_VSM"),e}function aM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function uM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case m_:e="ENVMAP_BLENDING_MIX";break;case g_:e="ENVMAP_BLENDING_ADD";break}return e}function cM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=oM(t),u=aM(t),c=lM(t),f=uM(t),d=cM(t),g=t.isWebGL2?"":Q1(t),_=J1(s),p=r.createProgram();let h,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter(Cs).join(`
`),h.length>0&&(h+=`
`),m=[g,_].filter(Cs).join(`
`),m.length>0&&(m+=`
`)):(h=[Dh(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),m=[g,Dh(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==jn?K1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,Z1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=dc(o),o=Ah(o,t),o=Lh(o,t),a=dc(a),a=Ah(a,t),a=Lh(a,t),o=Ph(o),a=Ph(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+h+o,w=v+m+a,M=Ch(r,35633,x),C=Ch(r,35632,w);if(r.attachShader(p,M),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const b=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(M).trim(),k=r.getShaderInfoLog(C).trim();let ne=!0,Q=!0;if(r.getProgramParameter(p,35714)===!1){ne=!1;const z=bh(r,M,"vertex"),$=bh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+b+`
`+z+`
`+$)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(R===""||k==="")&&(Q=!1);Q&&(this.diagnostics={runnable:ne,programLog:b,vertexShader:{log:R,prefix:h},fragmentShader:{log:k,prefix:m}})}r.deleteShader(M),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new fa(r,p)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=eM(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=q1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=C,this}let dM=0;class hM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new pM(e);t.set(e,i)}return t.get(e)}}class pM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function mM(n,e,t,i,r,s,o){const a=new sg,l=new hM,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,b,R,k,ne){const Q=k.fog,z=ne.geometry,$=y.isMeshStandardMaterial?k.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),j=!!V&&V.mapping===Ja?V.image.height:null,P=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const D=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,I=D!==void 0?D.length:0;let q=0;z.morphAttributes.position!==void 0&&(q=1),z.morphAttributes.normal!==void 0&&(q=2),z.morphAttributes.color!==void 0&&(q=3);let X,Z,oe,de;if(P){const ke=En[P];X=ke.vertexShader,Z=ke.fragmentShader}else X=y.vertexShader,Z=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const G=n.getRenderTarget(),We=y.alphaTest>0,Te=y.clearcoat>0,Se=y.iridescence>0;return{isWebGL2:c,shaderID:P,shaderName:y.type,vertexShader:X,fragmentShader:Z,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:d,outputEncoding:G===null?n.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:Qi,map:!!y.map,matcap:!!y.matcap,envMap:!!V,envMapMode:V&&V.mapping,envMapCubeUVHeight:j,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===B_,tangentSpaceNormalMap:y.normalMapType===Jm,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ye,clearcoat:Te,clearcoatMap:Te&&!!y.clearcoatMap,clearcoatRoughnessMap:Te&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!y.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!y.iridescenceMap,iridescenceThicknessMap:Se&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Gr,alphaMap:!!y.alphaMap,alphaTest:We,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!Q,useFog:y.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:jn,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kr,flipSided:y.side===pn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)b.push(R),b.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(m(b,y),v(b,y),b.push(n.outputEncoding)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputEncoding),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.combine),y.push(b.vertexUvs),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.map&&a.enable(4),b.matcap&&a.enable(5),b.envMap&&a.enable(6),b.lightMap&&a.enable(7),b.aoMap&&a.enable(8),b.emissiveMap&&a.enable(9),b.bumpMap&&a.enable(10),b.normalMap&&a.enable(11),b.objectSpaceNormalMap&&a.enable(12),b.tangentSpaceNormalMap&&a.enable(13),b.clearcoat&&a.enable(14),b.clearcoatMap&&a.enable(15),b.clearcoatRoughnessMap&&a.enable(16),b.clearcoatNormalMap&&a.enable(17),b.iridescence&&a.enable(18),b.iridescenceMap&&a.enable(19),b.iridescenceThicknessMap&&a.enable(20),b.displacementMap&&a.enable(21),b.specularMap&&a.enable(22),b.roughnessMap&&a.enable(23),b.metalnessMap&&a.enable(24),b.gradientMap&&a.enable(25),b.alphaMap&&a.enable(26),b.alphaTest&&a.enable(27),b.vertexColors&&a.enable(28),b.vertexAlphas&&a.enable(29),b.vertexUvs&&a.enable(30),b.vertexTangents&&a.enable(31),b.uvsVertexOnly&&a.enable(32),b.fog&&a.enable(33),y.push(a.mask),a.disableAll(),b.useFog&&a.enable(0),b.flatShading&&a.enable(1),b.logarithmicDepthBuffer&&a.enable(2),b.skinning&&a.enable(3),b.morphTargets&&a.enable(4),b.morphNormals&&a.enable(5),b.morphColors&&a.enable(6),b.premultipliedAlpha&&a.enable(7),b.shadowMapEnabled&&a.enable(8),b.physicallyCorrectLights&&a.enable(9),b.doubleSided&&a.enable(10),b.flipSided&&a.enable(11),b.useDepthPacking&&a.enable(12),b.dithering&&a.enable(13),b.specularIntensityMap&&a.enable(14),b.specularColorMap&&a.enable(15),b.transmission&&a.enable(16),b.transmissionMap&&a.enable(17),b.thicknessMap&&a.enable(18),b.sheen&&a.enable(19),b.sheenColorMap&&a.enable(20),b.sheenRoughnessMap&&a.enable(21),b.decodeVideoTexture&&a.enable(22),b.opaque&&a.enable(23),y.push(a.mask)}function x(y){const b=_[y.type];let R;if(b){const k=En[b];R=nx.clone(k.uniforms)}else R=y.uniforms;return R}function w(y,b){let R;for(let k=0,ne=u.length;k<ne;k++){const Q=u[k];if(Q.cacheKey===b){R=Q,++R.usedTimes;break}}return R===void 0&&(R=new fM(n,b,y,s),u.push(R)),R}function M(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:w,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:L}}function gM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function vM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ih(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,g,_,p,h){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:g,groupOrder:_,renderOrder:f.renderOrder,z:p,group:h},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=g,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=p,m.group=h),e++,m}function a(f,d,g,_,p,h){const m=o(f,d,g,_,p,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function l(f,d,g,_,p,h){const m=o(f,d,g,_,p,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||vM),i.length>1&&i.sort(d||Rh),r.length>1&&r.sort(d||Rh)}function c(){for(let f=e,d=n.length;f<d;f++){const g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function _M(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Ih,n.set(i,[s])):r>=n.get(i).length?(s=new Ih,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function xM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ve};break;case"SpotLight":t={position:new N,direction:new N,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function yM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SM=0;function MM(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function wM(n,e){const t=new xM,i=yM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let c=0;c<9;c++)r.probe.push(new N);const s=new N,o=new st,a=new st;function l(c,f){let d=0,g=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let p=0,h=0,m=0,v=0,x=0,w=0,M=0,C=0;c.sort(MM);const L=f!==!0?Math.PI:1;for(let b=0,R=c.length;b<R;b++){const k=c[b],ne=k.color,Q=k.intensity,z=k.distance,$=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)d+=ne.r*Q*L,g+=ne.g*Q*L,_+=ne.b*Q*L;else if(k.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(k.sh.coefficients[V],Q);else if(k.isDirectionalLight){const V=t.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity*L),k.castShadow){const j=k.shadow,P=i.get(k);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,r.directionalShadow[p]=P,r.directionalShadowMap[p]=$,r.directionalShadowMatrix[p]=k.shadow.matrix,w++}r.directional[p]=V,p++}else if(k.isSpotLight){const V=t.get(k);if(V.position.setFromMatrixPosition(k.matrixWorld),V.color.copy(ne).multiplyScalar(Q*L),V.distance=z,V.coneCos=Math.cos(k.angle),V.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),V.decay=k.decay,k.castShadow){const j=k.shadow,P=i.get(k);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,r.spotShadow[m]=P,r.spotShadowMap[m]=$,r.spotShadowMatrix[m]=k.shadow.matrix,C++}r.spot[m]=V,m++}else if(k.isRectAreaLight){const V=t.get(k);V.color.copy(ne).multiplyScalar(Q),V.halfWidth.set(k.width*.5,0,0),V.halfHeight.set(0,k.height*.5,0),r.rectArea[v]=V,v++}else if(k.isPointLight){const V=t.get(k);if(V.color.copy(k.color).multiplyScalar(k.intensity*L),V.distance=k.distance,V.decay=k.decay,k.castShadow){const j=k.shadow,P=i.get(k);P.shadowBias=j.bias,P.shadowNormalBias=j.normalBias,P.shadowRadius=j.radius,P.shadowMapSize=j.mapSize,P.shadowCameraNear=j.camera.near,P.shadowCameraFar=j.camera.far,r.pointShadow[h]=P,r.pointShadowMap[h]=$,r.pointShadowMatrix[h]=k.shadow.matrix,M++}r.point[h]=V,h++}else if(k.isHemisphereLight){const V=t.get(k);V.skyColor.copy(k.color).multiplyScalar(Q*L),V.groundColor.copy(k.groundColor).multiplyScalar(Q*L),r.hemi[x]=V,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=g,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==p||y.pointLength!==h||y.spotLength!==m||y.rectAreaLength!==v||y.hemiLength!==x||y.numDirectionalShadows!==w||y.numPointShadows!==M||y.numSpotShadows!==C)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=v,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=C,y.directionalLength=p,y.pointLength=h,y.spotLength=m,y.rectAreaLength=v,y.hemiLength=x,y.numDirectionalShadows=w,y.numPointShadows=M,y.numSpotShadows=C,r.version=SM++)}function u(c,f){let d=0,g=0,_=0,p=0,h=0;const m=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const w=c[v];if(w.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(w.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),_++}else if(w.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),a.identity(),o.copy(w.matrixWorld),o.premultiply(m),a.extractRotation(o),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(m),g++}else if(w.isHemisphereLight){const M=r.hemi[h];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Fh(n,e){const t=new wM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function EM(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Fh(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Fh(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class TM extends fo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CM extends fo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LM(n,e,t){let i=new cf;const r=new Re,s=new Re,o=new rt,a=new TM({depthPacking:O_}),l=new CM,u={},c=t.maxTextureSize,f={0:pn,1:Js,2:Kr},d=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:bM,fragmentShader:AM}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new ir;_.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Hn(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qm,this.render=function(w,M,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const L=n.getRenderTarget(),y=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),R=n.state;R.setBlending(yi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let k=0,ne=w.length;k<ne;k++){const Q=w[k],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null){const j=this.type!==Ts?{minFilter:Pt,magFilter:Pt}:{};z.map=new Ji(r.x,r.y,j),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const V=z.getViewportCount();for(let j=0;j<V;j++){const P=z.getViewport(j);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),R.viewport(o),z.updateMatrices(Q,j),i=z.getFrustum(),x(M,C,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Ts&&m(z,C),z.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(L,y,b)};function m(w,M){const C=e.update(p);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,g.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ji(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,C,d,p,null),g.uniforms.shadow_pass.value=w.mapPass.texture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,C,g,p,null)}function v(w,M,C,L,y,b){let R=null;const k=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0?R=k:R=C.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const ne=R.uuid,Q=M.uuid;let z=u[ne];z===void 0&&(z={},u[ne]=z);let $=z[Q];$===void 0&&($=R.clone(),z[Q]=$),R=$}return R.visible=M.visible,R.wireframe=M.wireframe,b===Ts?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:f[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=L,R.farDistance=y),R}function x(w,M,C,L,y){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Ts)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const k=e.update(w),ne=w.material;if(Array.isArray(ne)){const Q=k.groups;for(let z=0,$=Q.length;z<$;z++){const V=Q[z],j=ne[V.materialIndex];if(j&&j.visible){const P=v(w,j,L,C.near,C.far,y);n.renderBufferDirect(C,null,k,P,w,V)}}}else if(ne.visible){const Q=v(w,ne,L,C.near,C.far,y);n.renderBufferDirect(C,null,k,Q,w,null)}}const R=w.children;for(let k=0,ne=R.length;k<ne;k++)x(R[k],M,C,L,y)}}function PM(n,e,t){const i=t.isWebGL2;function r(){let A=!1;const ie=new rt;let te=null;const pe=new rt(0,0,0,0);return{setMask:function(ce){te!==ce&&!A&&(n.colorMask(ce,ce,ce,ce),te=ce)},setLocked:function(ce){A=ce},setClear:function(ce,ve,J,_e,Ie){Ie===!0&&(ce*=_e,ve*=_e,J*=_e),ie.set(ce,ve,J,_e),pe.equals(ie)===!1&&(n.clearColor(ce,ve,J,_e),pe.copy(ie))},reset:function(){A=!1,te=null,pe.set(-1,0,0,0)}}}function s(){let A=!1,ie=null,te=null,pe=null;return{setTest:function(ce){ce?de(2929):G(2929)},setMask:function(ce){ie!==ce&&!A&&(n.depthMask(ce),ie=ce)},setFunc:function(ce){if(te!==ce){if(ce)switch(ce){case l_:n.depthFunc(512);break;case u_:n.depthFunc(519);break;case c_:n.depthFunc(513);break;case rc:n.depthFunc(515);break;case f_:n.depthFunc(514);break;case d_:n.depthFunc(518);break;case h_:n.depthFunc(516);break;case p_:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);te=ce}},setLocked:function(ce){A=ce},setClear:function(ce){pe!==ce&&(n.clearDepth(ce),pe=ce)},reset:function(){A=!1,ie=null,te=null,pe=null}}}function o(){let A=!1,ie=null,te=null,pe=null,ce=null,ve=null,J=null,_e=null,Ie=null;return{setTest:function(Fe){A||(Fe?de(2960):G(2960))},setMask:function(Fe){ie!==Fe&&!A&&(n.stencilMask(Fe),ie=Fe)},setFunc:function(Fe,yt,_n){(te!==Fe||pe!==yt||ce!==_n)&&(n.stencilFunc(Fe,yt,_n),te=Fe,pe=yt,ce=_n)},setOp:function(Fe,yt,_n){(ve!==Fe||J!==yt||_e!==_n)&&(n.stencilOp(Fe,yt,_n),ve=Fe,J=yt,_e=_n)},setLocked:function(Fe){A=Fe},setClear:function(Fe){Ie!==Fe&&(n.clearStencil(Fe),Ie=Fe)},reset:function(){A=!1,ie=null,te=null,pe=null,ce=null,ve=null,J=null,_e=null,Ie=null}}}const a=new r,l=new s,u=new o;let c={},f={},d=new WeakMap,g=[],_=null,p=!1,h=null,m=null,v=null,x=null,w=null,M=null,C=null,L=!1,y=null,b=null,R=null,k=null,ne=null;const Q=n.getParameter(35661);let z=!1,$=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=$>=2);let j=null,P={};const D=n.getParameter(3088),I=n.getParameter(2978),q=new rt().fromArray(D),X=new rt().fromArray(I);function Z(A,ie,te){const pe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(A,ce),n.texParameteri(A,10241,9728),n.texParameteri(A,10240,9728);for(let ve=0;ve<te;ve++)n.texImage2D(ie+ve,0,6408,1,1,0,6408,5121,pe);return ce}const oe={};oe[3553]=Z(3553,3553,1),oe[34067]=Z(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),de(2929),l.setFunc(rc),ht(!1),At(Ed),de(2884),be(yi);function de(A){c[A]!==!0&&(n.enable(A),c[A]=!0)}function G(A){c[A]!==!1&&(n.disable(A),c[A]=!1)}function We(A,ie){return f[A]!==ie?(n.bindFramebuffer(A,ie),f[A]=ie,i&&(A===36009&&(f[36160]=ie),A===36160&&(f[36009]=ie)),!0):!1}function Te(A,ie){let te=g,pe=!1;if(A)if(te=d.get(ie),te===void 0&&(te=[],d.set(ie,te)),A.isWebGLMultipleRenderTargets){const ce=A.texture;if(te.length!==ce.length||te[0]!==36064){for(let ve=0,J=ce.length;ve<J;ve++)te[ve]=36064+ve;te.length=ce.length,pe=!0}}else te[0]!==36064&&(te[0]=36064,pe=!0);else te[0]!==1029&&(te[0]=1029,pe=!0);pe&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function Se(A){return _!==A?(n.useProgram(A),_=A,!0):!1}const le={[Mr]:32774,[Kv]:32778,[Qv]:32779};if(i)le[Ad]=32775,le[Ld]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(le[Ad]=A.MIN_EXT,le[Ld]=A.MAX_EXT)}const ke={[Jv]:0,[e_]:1,[t_]:768,[$m]:770,[a_]:776,[s_]:774,[i_]:772,[n_]:769,[Ym]:771,[o_]:775,[r_]:773};function be(A,ie,te,pe,ce,ve,J,_e){if(A===yi){p===!0&&(G(3042),p=!1);return}if(p===!1&&(de(3042),p=!0),A!==Zv){if(A!==h||_e!==L){if((m!==Mr||w!==Mr)&&(n.blendEquation(32774),m=Mr,w=Mr),_e)switch(A){case Gr:n.blendFuncSeparate(1,771,1,771);break;case Td:n.blendFunc(1,1);break;case Cd:n.blendFuncSeparate(0,769,0,1);break;case bd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Gr:n.blendFuncSeparate(770,771,1,771);break;case Td:n.blendFunc(770,1);break;case Cd:n.blendFuncSeparate(0,769,0,1);break;case bd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}v=null,x=null,M=null,C=null,h=A,L=_e}return}ce=ce||ie,ve=ve||te,J=J||pe,(ie!==m||ce!==w)&&(n.blendEquationSeparate(le[ie],le[ce]),m=ie,w=ce),(te!==v||pe!==x||ve!==M||J!==C)&&(n.blendFuncSeparate(ke[te],ke[pe],ke[ve],ke[J]),v=te,x=pe,M=ve,C=J),h=A,L=null}function me(A,ie){A.side===Kr?G(2884):de(2884);let te=A.side===pn;ie&&(te=!te),ht(te),A.blending===Gr&&A.transparent===!1?be(yi):be(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);const pe=A.stencilWrite;u.setTest(pe),pe&&(u.setMask(A.stencilWriteMask),u.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),u.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),vn(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?de(32926):G(32926)}function ht(A){y!==A&&(A?n.frontFace(2304):n.frontFace(2305),y=A)}function At(A){A!==Xv?(de(2884),A!==b&&(A===Ed?n.cullFace(1029):A===qv?n.cullFace(1028):n.cullFace(1032))):G(2884),b=A}function zt(A){A!==R&&(z&&n.lineWidth(A),R=A)}function vn(A,ie,te){A?(de(32823),(k!==ie||ne!==te)&&(n.polygonOffset(ie,te),k=ie,ne=te)):G(32823)}function ut(A){A?de(3089):G(3089)}function Ue(A){A===void 0&&(A=33984+Q-1),j!==A&&(n.activeTexture(A),j=A)}function Pn(A,ie){j===null&&Ue();let te=P[j];te===void 0&&(te={type:void 0,texture:void 0},P[j]=te),(te.type!==A||te.texture!==ie)&&(n.bindTexture(A,ie||oe[A]),te.type=A,te.texture=ie)}function Dn(){const A=P[j];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function T(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function S(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function K(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function B(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(A){q.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),q.copy(A))}function fe(A){X.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),X.copy(A))}function ue(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},j=null,P={},f={},d=new WeakMap,g=[],_=null,p=!1,h=null,m=null,v=null,x=null,w=null,M=null,C=null,L=!1,y=null,b=null,R=null,k=null,ne=null,q.set(0,0,n.canvas.width,n.canvas.height),X.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:de,disable:G,bindFramebuffer:We,drawBuffers:Te,useProgram:Se,setBlending:be,setMaterial:me,setFlipSided:ht,setCullFace:At,setLineWidth:zt,setPolygonOffset:vn,setScissorTest:ut,activeTexture:Ue,bindTexture:Pn,unbindTexture:Dn,compressedTexImage2D:T,texImage2D:xe,texImage3D:B,texStorage2D:ee,texStorage3D:se,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:K,scissor:he,viewport:fe,reset:ue}}function DM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return m?new OffscreenCanvas(T,S):za("canvas")}function x(T,S,H,K){let ee=1;if((T.width>K||T.height>K)&&(ee=K/Math.max(T.width,T.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const se=S?fc:Math.floor,xe=se(ee*T.width),B=se(ee*T.height);p===void 0&&(p=v(xe,B));const he=H?v(xe,B):p;return he.width=xe,he.height=B,he.getContext("2d").drawImage(T,0,0,xe,B),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+B+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function w(T){return th(T.width)&&th(T.height)}function M(T){return a?!1:T.wrapS!==fn||T.wrapT!==fn||T.minFilter!==Pt&&T.minFilter!==Zt}function C(T,S){return T.generateMipmaps&&S&&T.minFilter!==Pt&&T.minFilter!==Zt}function L(T){n.generateMipmap(T)}function y(T,S,H,K,ee=!1){if(a===!1)return S;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=S;return S===6403&&(H===5126&&(se=33326),H===5131&&(se=33325),H===5121&&(se=33321)),S===33319&&(H===5126&&(se=33328),H===5131&&(se=33327),H===5121&&(se=33323)),S===6408&&(H===5126&&(se=34836),H===5131&&(se=34842),H===5121&&(se=K===Ye&&ee===!1?35907:32856),H===32819&&(se=32854),H===32820&&(se=32855)),(se===33325||se===33326||se===33327||se===33328||se===34842||se===34836)&&e.get("EXT_color_buffer_float"),se}function b(T,S,H){return C(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Pt&&T.minFilter!==Zt?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){return T===Pt||T===Pd||T===Dd?9728:9729}function k(T){const S=T.target;S.removeEventListener("dispose",k),Q(S),S.isVideoTexture&&_.delete(S)}function ne(T){const S=T.target;S.removeEventListener("dispose",ne),$(S)}function Q(T){const S=i.get(T);if(S.__webglInit===void 0)return;const H=T.source,K=h.get(H);if(K){const ee=K[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(T),Object.keys(K).length===0&&h.delete(H)}i.remove(T)}function z(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const H=T.source,K=h.get(H);delete K[S.__cacheKey],o.memory.textures--}function $(T){const S=T.texture,H=i.get(T),K=i.get(S);if(K.__webglTexture!==void 0&&(n.deleteTexture(K.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)n.deleteFramebuffer(H.__webglFramebuffer[ee]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[ee]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ee=0,se=S.length;ee<se;ee++){const xe=i.get(S[ee]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(T)}let V=0;function j(){V=0}function P(){const T=V;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),V+=1,T}function D(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function I(T,S){const H=i.get(T);if(T.isVideoTexture&&Pn(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(H,T,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,H.__webglTexture)}function q(T,S){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Te(H,T,S);return}t.activeTexture(33984+S),t.bindTexture(35866,H.__webglTexture)}function X(T,S){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Te(H,T,S);return}t.activeTexture(33984+S),t.bindTexture(32879,H.__webglTexture)}function Z(T,S){const H=i.get(T);if(T.version>0&&H.__version!==T.version){Se(H,T,S);return}t.activeTexture(33984+S),t.bindTexture(34067,H.__webglTexture)}const oe={[ac]:10497,[fn]:33071,[lc]:33648},de={[Pt]:9728,[Pd]:9984,[Dd]:9986,[Zt]:9729,[M_]:9985,[el]:9987};function G(T,S,H){if(H?(n.texParameteri(T,10242,oe[S.wrapS]),n.texParameteri(T,10243,oe[S.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,oe[S.wrapR]),n.texParameteri(T,10240,de[S.magFilter]),n.texParameteri(T,10241,de[S.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(S.wrapS!==fn||S.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,R(S.magFilter)),n.texParameteri(T,10241,R(S.minFilter)),S.minFilter!==Pt&&S.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(S.type===Oi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===eo&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function We(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",k));const K=S.source;let ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));const se=D(S);if(se!==T.__cacheKey){ee[se]===void 0&&(ee[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[se].usedTimes++;const xe=ee[T.__cacheKey];xe!==void 0&&(ee[T.__cacheKey].usedTimes--,xe.usedTimes===0&&z(S)),T.__cacheKey=se,T.__webglTexture=ee[se].texture}return H}function Te(T,S,H){let K=3553;S.isDataArrayTexture&&(K=35866),S.isData3DTexture&&(K=32879);const ee=We(T,S),se=S.source;if(t.activeTexture(33984+H),t.bindTexture(K,T.__webglTexture),se.version!==se.__currentVersion||ee===!0){n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const xe=M(S)&&w(S.image)===!1;let B=x(S.image,xe,!1,c);B=Dn(S,B);const he=w(B)||a,fe=s.convert(S.format,S.encoding);let ue=s.convert(S.type),A=y(S.internalFormat,fe,ue,S.encoding,S.isVideoTexture);G(K,S,he);let ie;const te=S.mipmaps,pe=a&&S.isVideoTexture!==!0,ce=se.__currentVersion===void 0||ee===!0,ve=b(S,B,he);if(S.isDepthTexture)A=6402,a?S.type===Oi?A=36012:S.type===Ui?A=33190:S.type===Hr?A=35056:A=33189:S.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Hi&&A===6402&&S.type!==Qm&&S.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ui,ue=s.convert(S.type)),S.format===es&&A===6402&&(A=34041,S.type!==Hr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Hr,ue=s.convert(S.type))),ce&&(pe?t.texStorage2D(3553,1,A,B.width,B.height):t.texImage2D(3553,0,A,B.width,B.height,0,fe,ue,null));else if(S.isDataTexture)if(te.length>0&&he){pe&&ce&&t.texStorage2D(3553,ve,A,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],pe?t.texSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ue,ie.data):t.texImage2D(3553,J,A,ie.width,ie.height,0,fe,ue,ie.data);S.generateMipmaps=!1}else pe?(ce&&t.texStorage2D(3553,ve,A,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,fe,ue,B.data)):t.texImage2D(3553,0,A,B.width,B.height,0,fe,ue,B.data);else if(S.isCompressedTexture){pe&&ce&&t.texStorage2D(3553,ve,A,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],S.format!==Cn?fe!==null?pe?t.compressedTexSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ie.data):t.compressedTexImage2D(3553,J,A,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?t.texSubImage2D(3553,J,0,0,ie.width,ie.height,fe,ue,ie.data):t.texImage2D(3553,J,A,ie.width,ie.height,0,fe,ue,ie.data)}else if(S.isDataArrayTexture)pe?(ce&&t.texStorage3D(35866,ve,A,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,fe,ue,B.data)):t.texImage3D(35866,0,A,B.width,B.height,B.depth,0,fe,ue,B.data);else if(S.isData3DTexture)pe?(ce&&t.texStorage3D(32879,ve,A,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,fe,ue,B.data)):t.texImage3D(32879,0,A,B.width,B.height,B.depth,0,fe,ue,B.data);else if(S.isFramebufferTexture){if(ce)if(pe)t.texStorage2D(3553,ve,A,B.width,B.height);else{let J=B.width,_e=B.height;for(let Ie=0;Ie<ve;Ie++)t.texImage2D(3553,Ie,A,J,_e,0,fe,ue,null),J>>=1,_e>>=1}}else if(te.length>0&&he){pe&&ce&&t.texStorage2D(3553,ve,A,te[0].width,te[0].height);for(let J=0,_e=te.length;J<_e;J++)ie=te[J],pe?t.texSubImage2D(3553,J,0,0,fe,ue,ie):t.texImage2D(3553,J,A,fe,ue,ie);S.generateMipmaps=!1}else pe?(ce&&t.texStorage2D(3553,ve,A,B.width,B.height),t.texSubImage2D(3553,0,0,0,fe,ue,B)):t.texImage2D(3553,0,A,fe,ue,B);C(S,he)&&L(K),se.__currentVersion=se.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Se(T,S,H){if(S.image.length!==6)return;const K=We(T,S),ee=S.source;if(t.activeTexture(33984+H),t.bindTexture(34067,T.__webglTexture),ee.version!==ee.__currentVersion||K===!0){n.pixelStorei(37440,S.flipY),n.pixelStorei(37441,S.premultiplyAlpha),n.pixelStorei(3317,S.unpackAlignment),n.pixelStorei(37443,0);const se=S.isCompressedTexture||S.image[0].isCompressedTexture,xe=S.image[0]&&S.image[0].isDataTexture,B=[];for(let J=0;J<6;J++)!se&&!xe?B[J]=x(S.image[J],!1,!0,u):B[J]=xe?S.image[J].image:S.image[J],B[J]=Dn(S,B[J]);const he=B[0],fe=w(he)||a,ue=s.convert(S.format,S.encoding),A=s.convert(S.type),ie=y(S.internalFormat,ue,A,S.encoding),te=a&&S.isVideoTexture!==!0,pe=ee.__currentVersion===void 0||K===!0;let ce=b(S,he,fe);G(34067,S,fe);let ve;if(se){te&&pe&&t.texStorage2D(34067,ce,ie,he.width,he.height);for(let J=0;J<6;J++){ve=B[J].mipmaps;for(let _e=0;_e<ve.length;_e++){const Ie=ve[_e];S.format!==Cn?ue!==null?te?t.compressedTexSubImage2D(34069+J,_e,0,0,Ie.width,Ie.height,ue,Ie.data):t.compressedTexImage2D(34069+J,_e,ie,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?t.texSubImage2D(34069+J,_e,0,0,Ie.width,Ie.height,ue,A,Ie.data):t.texImage2D(34069+J,_e,ie,Ie.width,Ie.height,0,ue,A,Ie.data)}}}else{ve=S.mipmaps,te&&pe&&(ve.length>0&&ce++,t.texStorage2D(34067,ce,ie,B[0].width,B[0].height));for(let J=0;J<6;J++)if(xe){te?t.texSubImage2D(34069+J,0,0,0,B[J].width,B[J].height,ue,A,B[J].data):t.texImage2D(34069+J,0,ie,B[J].width,B[J].height,0,ue,A,B[J].data);for(let _e=0;_e<ve.length;_e++){const Fe=ve[_e].image[J].image;te?t.texSubImage2D(34069+J,_e+1,0,0,Fe.width,Fe.height,ue,A,Fe.data):t.texImage2D(34069+J,_e+1,ie,Fe.width,Fe.height,0,ue,A,Fe.data)}}else{te?t.texSubImage2D(34069+J,0,0,0,ue,A,B[J]):t.texImage2D(34069+J,0,ie,ue,A,B[J]);for(let _e=0;_e<ve.length;_e++){const Ie=ve[_e];te?t.texSubImage2D(34069+J,_e+1,0,0,ue,A,Ie.image[J]):t.texImage2D(34069+J,_e+1,ie,ue,A,Ie.image[J])}}}C(S,fe)&&L(34067),ee.__currentVersion=ee.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function le(T,S,H,K,ee){const se=s.convert(H.format,H.encoding),xe=s.convert(H.type),B=y(H.internalFormat,se,xe,H.encoding);i.get(S).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,B,S.width,S.height,S.depth,0,se,xe,null):t.texImage2D(ee,0,B,S.width,S.height,0,se,xe,null)),t.bindFramebuffer(36160,T),Ue(S)?d.framebufferTexture2DMultisampleEXT(36160,K,ee,i.get(H).__webglTexture,0,ut(S)):n.framebufferTexture2D(36160,K,ee,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(T,S,H){if(n.bindRenderbuffer(36161,T),S.depthBuffer&&!S.stencilBuffer){let K=33189;if(H||Ue(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Oi?K=36012:ee.type===Ui&&(K=33190));const se=ut(S);Ue(S)?d.renderbufferStorageMultisampleEXT(36161,se,K,S.width,S.height):n.renderbufferStorageMultisample(36161,se,K,S.width,S.height)}else n.renderbufferStorage(36161,K,S.width,S.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(S.depthBuffer&&S.stencilBuffer){const K=ut(S);H&&Ue(S)===!1?n.renderbufferStorageMultisample(36161,K,35056,S.width,S.height):Ue(S)?d.renderbufferStorageMultisampleEXT(36161,K,35056,S.width,S.height):n.renderbufferStorage(36161,34041,S.width,S.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{const K=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<K.length;ee++){const se=K[ee],xe=s.convert(se.format,se.encoding),B=s.convert(se.type),he=y(se.internalFormat,xe,B,se.encoding),fe=ut(S);H&&Ue(S)===!1?n.renderbufferStorageMultisample(36161,fe,he,S.width,S.height):Ue(S)?d.renderbufferStorageMultisampleEXT(36161,fe,he,S.width,S.height):n.renderbufferStorage(36161,he,S.width,S.height)}}n.bindRenderbuffer(36161,null)}function be(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const K=i.get(S.depthTexture).__webglTexture,ee=ut(S);if(S.depthTexture.format===Hi)Ue(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,ee):n.framebufferTexture2D(36160,36096,3553,K,0);else if(S.depthTexture.format===es)Ue(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,ee):n.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function me(T){const S=i.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");be(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]=n.createRenderbuffer(),ke(S.__webglDepthbuffer[K],T,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ke(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function ht(T,S,H){const K=i.get(T);S!==void 0&&le(K.__webglFramebuffer,T,T.texture,36064,3553),H!==void 0&&me(T)}function At(T){const S=T.texture,H=i.get(T),K=i.get(S);T.addEventListener("dispose",ne),T.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,o.memory.textures++);const ee=T.isWebGLCubeRenderTarget===!0,se=T.isWebGLMultipleRenderTargets===!0,xe=w(T)||a;if(ee){H.__webglFramebuffer=[];for(let B=0;B<6;B++)H.__webglFramebuffer[B]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),se)if(r.drawBuffers){const B=T.texture;for(let he=0,fe=B.length;he<fe;he++){const ue=i.get(B[he]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ue(T)===!1){const B=se?S:[S];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let he=0;he<B.length;he++){const fe=B[he];H.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[he]);const ue=s.convert(fe.format,fe.encoding),A=s.convert(fe.type),ie=y(fe.internalFormat,ue,A,fe.encoding),te=ut(T);n.renderbufferStorageMultisample(36161,te,ie,T.width,T.height),n.framebufferRenderbuffer(36160,36064+he,36161,H.__webglColorRenderbuffer[he])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,K.__webglTexture),G(34067,S,xe);for(let B=0;B<6;B++)le(H.__webglFramebuffer[B],T,S,36064,34069+B);C(S,xe)&&L(34067),t.unbindTexture()}else if(se){const B=T.texture;for(let he=0,fe=B.length;he<fe;he++){const ue=B[he],A=i.get(ue);t.bindTexture(3553,A.__webglTexture),G(3553,ue,xe),le(H.__webglFramebuffer,T,ue,36064+he,3553),C(ue,xe)&&L(3553)}t.unbindTexture()}else{let B=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?B=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(B,K.__webglTexture),G(B,S,xe),le(H.__webglFramebuffer,T,S,36064,B),C(S,xe)&&L(B),t.unbindTexture()}T.depthBuffer&&me(T)}function zt(T){const S=w(T)||a,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let K=0,ee=H.length;K<ee;K++){const se=H[K];if(C(se,S)){const xe=T.isWebGLCubeRenderTarget?34067:3553,B=i.get(se).__webglTexture;t.bindTexture(xe,B),L(xe),t.unbindTexture()}}}function vn(T){if(a&&T.samples>0&&Ue(T)===!1){const S=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,K=T.height;let ee=16384;const se=[],xe=T.stencilBuffer?33306:36096,B=i.get(T),he=T.isWebGLMultipleRenderTargets===!0;if(he)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+fe,36161,null),t.bindFramebuffer(36160,B.__webglFramebuffer),n.framebufferTexture2D(36009,36064+fe,3553,null,0);t.bindFramebuffer(36008,B.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,B.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){se.push(36064+fe),T.depthBuffer&&se.push(xe);const ue=B.__ignoreDepthValues!==void 0?B.__ignoreDepthValues:!1;if(ue===!1&&(T.depthBuffer&&(ee|=256),T.stencilBuffer&&(ee|=1024)),he&&n.framebufferRenderbuffer(36008,36064,36161,B.__webglColorRenderbuffer[fe]),ue===!0&&(n.invalidateFramebuffer(36008,[xe]),n.invalidateFramebuffer(36009,[xe])),he){const A=i.get(S[fe]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,A,0)}n.blitFramebuffer(0,0,H,K,0,0,H,K,ee,9728),g&&n.invalidateFramebuffer(36008,se)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),he)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+fe,36161,B.__webglColorRenderbuffer[fe]);const ue=i.get(S[fe]).__webglTexture;t.bindFramebuffer(36160,B.__webglFramebuffer),n.framebufferTexture2D(36009,36064+fe,3553,ue,0)}t.bindFramebuffer(36009,B.__webglMultisampledFramebuffer)}}function ut(T){return Math.min(f,T.samples)}function Ue(T){const S=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pn(T){const S=o.render.frame;_.get(T)!==S&&(_.set(T,S),T.update())}function Dn(T,S){const H=T.encoding,K=T.format,ee=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===uc||H!==Qi&&(H===Ye?a===!1?e.has("EXT_sRGB")===!0&&K===Cn?(T.format=uc,T.minFilter=Zt,T.generateMipmaps=!1):S=ng.sRGBToLinear(S):(K!==Cn||ee!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=P,this.resetTextureUnits=j,this.setTexture2D=I,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=ht,this.setupRenderTarget=At,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ue}function RM(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Ki)return 5121;if(s===C_)return 32819;if(s===b_)return 32820;if(s===w_)return 5120;if(s===E_)return 5122;if(s===Qm)return 5123;if(s===T_)return 5124;if(s===Ui)return 5125;if(s===Oi)return 5126;if(s===eo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===A_)return 6406;if(s===Cn)return 6408;if(s===P_)return 6409;if(s===D_)return 6410;if(s===Hi)return 6402;if(s===es)return 34041;if(s===R_)return 6403;if(s===L_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===uc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===I_)return 36244;if(s===F_)return 33319;if(s===N_)return 33320;if(s===z_)return 36249;if(s===Rl||s===Il||s===Fl||s===Nl)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Rl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Rl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Il)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Rd||s===Id||s===Fd||s===Nd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Rd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Id)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===k_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zd||s===kd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zd)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===kd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ud||s===Od||s===Bd||s===Vd||s===Gd||s===Hd||s===Wd||s===jd||s===Xd||s===qd||s===$d||s===Yd||s===Zd||s===Kd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ud)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Od)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Hd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===qd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===$d)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kd)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Qd)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Hr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class IM extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ko extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FM={type:"move"};class cu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new Ko;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),g=.02,_=.005;u.inputState.pinching&&d>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(FM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class NM extends gn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Hi,c!==Hi&&c!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Hi&&(i=Ui),i===void 0&&c===es&&(i=Hr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}}class zM extends ss{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,g=null;const _=t.getContextAttributes();let p=null,h=null;const m=[],v=[],x=new Vt;x.layers.enable(1),x.viewport=new rt;const w=new Vt;w.layers.enable(2),w.viewport=new rt;const M=[x,w],C=new IM;C.layers.enable(1),C.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let I=m[D];return I===void 0&&(I=new cu,m[D]=I),I.getTargetRaySpace()},this.getControllerGrip=function(D){let I=m[D];return I===void 0&&(I=new cu,m[D]=I),I.getGripSpace()},this.getHand=function(D){let I=m[D];return I===void 0&&(I=new cu,m[D]=I),I.getHandSpace()};function b(D){const I=v.indexOf(D.inputSource);if(I===-1)return;const q=m[I];q!==void 0&&q.dispatchEvent({type:D.type,data:D.inputSource})}function R(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",k);for(let D=0;D<m.length;D++){const I=v[D];I!==null&&(v[D]=null,m[D].disconnect(I))}L=null,y=null,e.setRenderTarget(p),d=null,f=null,c=null,r=null,h=null,P.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",R),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const I={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,I),r.updateRenderState({baseLayer:d}),h=new Ji(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:Ki,encoding:e.outputEncoding})}else{let I=null,q=null,X=null;_.depth&&(X=_.stencil?35056:33190,I=_.stencil?es:Hi,q=_.stencil?Hr:Ui);const Z={colorFormat:32856,depthFormat:X,scaleFactor:s};c=new XRWebGLBinding(r,t),f=c.createProjectionLayer(Z),r.updateRenderState({layers:[f]}),h=new Ji(f.textureWidth,f.textureHeight,{format:Cn,type:Ki,depthTexture:new NM(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const oe=e.properties.get(h);oe.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),P.setContext(r),P.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(D){for(let I=0;I<D.removed.length;I++){const q=D.removed[I],X=v.indexOf(q);X>=0&&(v[X]=null,m[X].dispatchEvent({type:"disconnected",data:q}))}for(let I=0;I<D.added.length;I++){const q=D.added[I];let X=v.indexOf(q);if(X===-1){for(let oe=0;oe<m.length;oe++)if(oe>=v.length){v.push(q),X=oe;break}else if(v[oe]===null){v[oe]=q,X=oe;break}if(X===-1)break}const Z=m[X];Z&&Z.dispatchEvent({type:"connected",data:q})}}const ne=new N,Q=new N;function z(D,I,q){ne.setFromMatrixPosition(I.matrixWorld),Q.setFromMatrixPosition(q.matrixWorld);const X=ne.distanceTo(Q),Z=I.projectionMatrix.elements,oe=q.projectionMatrix.elements,de=Z[14]/(Z[10]-1),G=Z[14]/(Z[10]+1),We=(Z[9]+1)/Z[5],Te=(Z[9]-1)/Z[5],Se=(Z[8]-1)/Z[0],le=(oe[8]+1)/oe[0],ke=de*Se,be=de*le,me=X/(-Se+le),ht=me*-Se;I.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ht),D.translateZ(me),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const At=de+me,zt=G+me,vn=ke-ht,ut=be+(X-ht),Ue=We*G/zt*At,Pn=Te*G/zt*At;D.projectionMatrix.makePerspective(vn,ut,Ue,Pn,At,zt)}function $(D,I){I===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(I.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;C.near=w.near=x.near=D.near,C.far=w.far=x.far=D.far,(L!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,y=C.far);const I=D.parent,q=C.cameras;$(C,I);for(let Z=0;Z<q.length;Z++)$(q[Z],I);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),D.position.copy(C.position),D.quaternion.copy(C.quaternion),D.scale.copy(C.scale),D.matrix.copy(C.matrix),D.matrixWorld.copy(C.matrixWorld);const X=D.children;for(let Z=0,oe=X.length;Z<oe;Z++)X[Z].updateMatrixWorld(!0);q.length===2?z(C,x,w):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(D){f!==null&&(f.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)};let V=null;function j(D,I){if(u=I.getViewerPose(l||o),g=I,u!==null){const q=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let X=!1;q.length!==C.cameras.length&&(C.cameras.length=0,X=!0);for(let Z=0;Z<q.length;Z++){const oe=q[Z];let de=null;if(d!==null)de=d.getViewport(oe);else{const We=c.getViewSubImage(f,oe);de=We.viewport,Z===0&&(e.setRenderTargetTextures(h,We.colorTexture,f.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(h))}let G=M[Z];G===void 0&&(G=new Vt,G.layers.enable(Z),G.viewport=new rt,M[Z]=G),G.matrix.fromArray(oe.transform.matrix),G.projectionMatrix.fromArray(oe.projectionMatrix),G.viewport.set(de.x,de.y,de.width,de.height),Z===0&&C.matrix.copy(G.matrix),X===!0&&C.cameras.push(G)}}for(let q=0;q<m.length;q++){const X=v[q],Z=m[q];X!==null&&Z!==void 0&&Z.update(X,I,l||o)}V&&V(D,I),g=null}const P=new fg;P.setAnimationLoop(j),this.setAnimationLoop=function(D){V=D},this.dispose=function(){}}}function kM(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,x)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===pn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===pn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const w=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*w}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===pn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function UM(){const n=za("canvas");return n.style.display="block",n}function vg(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:UM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const g=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Qi,this.physicallyCorrectLights=!1,this.toneMapping=jn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,v=0,x=null,w=-1,M=null;const C=new rt,L=new rt;let y=null,b=e.width,R=e.height,k=1,ne=null,Q=null;const z=new rt(0,0,b,R),$=new rt(0,0,b,R);let V=!1;const j=new cf;let P=!1,D=!1,I=null;const q=new st,X=new Re,Z=new N,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return x===null?k:1}let G=t;function We(E,F){for(let O=0;O<E.length;O++){const U=E[O],W=e.getContext(U,F);if(W!==null)return W}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lf}`),e.addEventListener("webglcontextlost",A,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",te,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&F.shift(),G=We(F,E),G===null)throw We(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Te,Se,le,ke,be,me,ht,At,zt,vn,ut,Ue,Pn,Dn,T,S,H,K,ee,se,xe,B,he;function fe(){Te=new YS(G),Se=new GS(G,Te,n),Te.init(Se),B=new RM(G,Te,Se),le=new PM(G,Te,Se),ke=new QS,be=new gM,me=new DM(G,Te,le,be,Se,B,ke),ht=new WS(p),At=new $S(p),zt=new ux(G,Se),he=new BS(G,Te,zt,Se),vn=new ZS(G,zt,ke,he),ut=new n1(G,vn,zt,ke),ee=new t1(G,Se,me),S=new HS(be),Ue=new mM(p,ht,At,Te,Se,he,S),Pn=new kM(p,be),Dn=new _M,T=new EM(Te,Se),K=new OS(p,ht,le,ut,c,o),H=new LM(p,ut,Se),se=new VS(G,Te,ke,Se),xe=new KS(G,Te,ke,Se),ke.programs=Ue.programs,p.capabilities=Se,p.extensions=Te,p.properties=be,p.renderLists=Dn,p.shadowMap=H,p.state=le,p.info=ke}fe();const ue=new zM(p,G);this.xr=ue,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(b,R,!1))},this.getSize=function(E){return E.set(b,R)},this.setSize=function(E,F,O){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=E,R=F,e.width=Math.floor(E*k),e.height=Math.floor(F*k),O!==!1&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(b*k,R*k).floor()},this.setDrawingBufferSize=function(E,F,O){b=E,R=F,k=O,e.width=Math.floor(E*O),e.height=Math.floor(F*O),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,F,O,U){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,F,O,U),le.viewport(C.copy(z).multiplyScalar(k).floor())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,F,O,U){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,F,O,U),le.scissor(L.copy($).multiplyScalar(k).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(E){le.setScissorTest(V=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(E=!0,F=!0,O=!0){let U=0;E&&(U|=16384),F&&(U|=256),O&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",A,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",te,!1),Dn.dispose(),T.dispose(),be.dispose(),ht.dispose(),At.dispose(),ut.dispose(),he.dispose(),Ue.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ie),ue.removeEventListener("sessionend",Fe),I&&(I.dispose(),I=null),yt.stop()};function A(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const E=ke.autoReset,F=H.enabled,O=H.autoUpdate,U=H.needsUpdate,W=H.type;fe(),ke.autoReset=E,H.enabled=F,H.autoUpdate=O,H.needsUpdate=U,H.type=W}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pe(E){const F=E.target;F.removeEventListener("dispose",pe),ce(F)}function ce(E){ve(E),be.remove(E)}function ve(E){const F=be.get(E).programs;F!==void 0&&(F.forEach(function(O){Ue.releaseProgram(O)}),E.isShaderMaterial&&Ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,O,U,W,ge){F===null&&(F=oe);const ye=W.isMesh&&W.matrixWorld.determinant()<0,we=wg(E,F,O,U,W);le.setMaterial(U,ye);let Me=O.index;const Ne=O.attributes.position;if(Me===null){if(Ne===void 0||Ne.count===0)return}else if(Me.count===0)return;let Ae=1;U.wireframe===!0&&(Me=vn.getWireframeAttribute(O),Ae=2),he.setup(W,U,we,O,Me);let Pe,$e=se;Me!==null&&(Pe=zt.get(Me),$e=xe,$e.setIndex(Pe));const Ci=Me!==null?Me.count:Ne.count,rr=O.drawRange.start*Ae,sr=O.drawRange.count*Ae,xn=ge!==null?ge.start*Ae:0,De=ge!==null?ge.count*Ae:1/0,or=Math.max(rr,xn),Qe=Math.min(Ci,rr+sr,xn+De)-1,yn=Math.max(0,Qe-or+1);if(yn!==0){if(W.isMesh)U.wireframe===!0?(le.setLineWidth(U.wireframeLinewidth*de()),$e.setMode(1)):$e.setMode(4);else if(W.isLine){let Kn=U.linewidth;Kn===void 0&&(Kn=1),le.setLineWidth(Kn*de()),W.isLineSegments?$e.setMode(1):W.isLineLoop?$e.setMode(2):$e.setMode(3)}else W.isPoints?$e.setMode(0):W.isSprite&&$e.setMode(4);if(W.isInstancedMesh)$e.renderInstances(or,yn,W.count);else if(O.isInstancedBufferGeometry){const Kn=Math.min(O.instanceCount,O._maxInstanceCount);$e.renderInstances(or,yn,Kn)}else $e.render(or,yn)}},this.compile=function(E,F){d=T.get(E),d.init(),_.push(d),E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(p.physicallyCorrectLights),E.traverse(function(O){const U=O.material;if(U)if(Array.isArray(U))for(let W=0;W<U.length;W++){const ge=U[W];il(ge,E,O)}else il(U,E,O)}),_.pop(),d=null};let J=null;function _e(E){J&&J(E)}function Ie(){yt.stop()}function Fe(){yt.start()}const yt=new fg;yt.setAnimationLoop(_e),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(E){J=E,ue.setAnimationLoop(E),E===null?yt.stop():yt.start()},ue.addEventListener("sessionstart",Ie),ue.addEventListener("sessionend",Fe),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),E.isScene===!0&&E.onBeforeRender(p,E,F,x),d=T.get(E,_.length),d.init(),_.push(d),q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(q),D=this.localClippingEnabled,P=S.init(this.clippingPlanes,D,F),f=Dn.get(E,g.length),f.init(),g.push(f),_n(E,F,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ne,Q),P===!0&&S.beginShadows();const O=d.state.shadowsArray;if(H.render(O,E,F),P===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(f,E),d.setupLights(p.physicallyCorrectLights),F.isArrayCamera){const U=F.cameras;for(let W=0,ge=U.length;W<ge;W++){const ye=U[W];hf(f,E,ye,ye.viewport)}}else hf(f,E,F);x!==null&&(me.updateMultisampleRenderTarget(x),me.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(p,E,F),he.resetDefaultState(),w=-1,M=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,g.pop(),g.length>0?f=g[g.length-1]:f=null};function _n(E,F,O,U){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){U&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const ye=ut.update(E),we=E.material;we.visible&&f.push(E,ye,we,O,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ke.render.frame&&(E.skeleton.update(),E.skeleton.frame=ke.render.frame),!E.frustumCulled||j.intersectsObject(E))){U&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(q);const ye=ut.update(E),we=E.material;if(Array.isArray(we)){const Me=ye.groups;for(let Ne=0,Ae=Me.length;Ne<Ae;Ne++){const Pe=Me[Ne],$e=we[Pe.materialIndex];$e&&$e.visible&&f.push(E,ye,$e,O,Z.z,Pe)}}else we.visible&&f.push(E,ye,we,O,Z.z,null)}}const ge=E.children;for(let ye=0,we=ge.length;ye<we;ye++)_n(ge[ye],F,O,U)}function hf(E,F,O,U){const W=E.opaque,ge=E.transmissive,ye=E.transparent;d.setupLightsView(O),ge.length>0&&Sg(W,F,O),U&&le.viewport(C.copy(U)),W.length>0&&ho(W,F,O),ge.length>0&&ho(ge,F,O),ye.length>0&&ho(ye,F,O),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Sg(E,F,O){const U=Se.isWebGL2;I===null&&(I=new Ji(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?eo:Ki,minFilter:el,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(X),U?I.setSize(X.x,X.y):I.setSize(fc(X.x),fc(X.y));const W=p.getRenderTarget();p.setRenderTarget(I),p.clear();const ge=p.toneMapping;p.toneMapping=jn,ho(E,F,O),p.toneMapping=ge,me.updateMultisampleRenderTarget(I),me.updateRenderTargetMipmap(I),p.setRenderTarget(W)}function ho(E,F,O){const U=F.isScene===!0?F.overrideMaterial:null;for(let W=0,ge=E.length;W<ge;W++){const ye=E[W],we=ye.object,Me=ye.geometry,Ne=U===null?ye.material:U,Ae=ye.group;we.layers.test(O.layers)&&Mg(we,F,O,Me,Ne,Ae)}}function Mg(E,F,O,U,W,ge){E.onBeforeRender(p,F,O,U,W,ge),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(p,F,O,U,E,ge),W.transparent===!0&&W.side===Kr?(W.side=pn,W.needsUpdate=!0,p.renderBufferDirect(O,F,U,W,E,ge),W.side=Js,W.needsUpdate=!0,p.renderBufferDirect(O,F,U,W,E,ge),W.side=Kr):p.renderBufferDirect(O,F,U,W,E,ge),E.onAfterRender(p,F,O,U,W,ge)}function il(E,F,O){F.isScene!==!0&&(F=oe);const U=be.get(E),W=d.state.lights,ge=d.state.shadowsArray,ye=W.state.version,we=Ue.getParameters(E,W.state,ge,F,O),Me=Ue.getProgramCacheKey(we);let Ne=U.programs;U.environment=E.isMeshStandardMaterial?F.environment:null,U.fog=F.fog,U.envMap=(E.isMeshStandardMaterial?At:ht).get(E.envMap||U.environment),Ne===void 0&&(E.addEventListener("dispose",pe),Ne=new Map,U.programs=Ne);let Ae=Ne.get(Me);if(Ae!==void 0){if(U.currentProgram===Ae&&U.lightsStateVersion===ye)return pf(E,we),Ae}else we.uniforms=Ue.getUniforms(E),E.onBuild(O,we,p),E.onBeforeCompile(we,p),Ae=Ue.acquireProgram(we,Me),Ne.set(Me,Ae),U.uniforms=we.uniforms;const Pe=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=S.uniform),pf(E,we),U.needsLights=Tg(E),U.lightsStateVersion=ye,U.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMap.value=W.state.directionalShadowMap,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotShadowMap.value=W.state.spotShadowMap,Pe.spotShadowMatrix.value=W.state.spotShadowMatrix,Pe.pointShadowMap.value=W.state.pointShadowMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix);const $e=Ae.getUniforms(),Ci=fa.seqWithValue($e.seq,Pe);return U.currentProgram=Ae,U.uniformsList=Ci,Ae}function pf(E,F){const O=be.get(E);O.outputEncoding=F.outputEncoding,O.instancing=F.instancing,O.skinning=F.skinning,O.morphTargets=F.morphTargets,O.morphNormals=F.morphNormals,O.morphColors=F.morphColors,O.morphTargetsCount=F.morphTargetsCount,O.numClippingPlanes=F.numClippingPlanes,O.numIntersection=F.numClipIntersection,O.vertexAlphas=F.vertexAlphas,O.vertexTangents=F.vertexTangents,O.toneMapping=F.toneMapping}function wg(E,F,O,U,W){F.isScene!==!0&&(F=oe),me.resetTextureUnits();const ge=F.fog,ye=U.isMeshStandardMaterial?F.environment:null,we=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:Qi,Me=(U.isMeshStandardMaterial?At:ht).get(U.envMap||ye),Ne=U.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ae=!!U.normalMap&&!!O.attributes.tangent,Pe=!!O.morphAttributes.position,$e=!!O.morphAttributes.normal,Ci=!!O.morphAttributes.color,rr=U.toneMapped?p.toneMapping:jn,sr=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xn=sr!==void 0?sr.length:0,De=be.get(U),or=d.state.lights;if(P===!0&&(D===!0||E!==M)){const Sn=E===M&&U.id===w;S.setState(U,E,Sn)}let Qe=!1;U.version===De.__version?(De.needsLights&&De.lightsStateVersion!==or.state.version||De.outputEncoding!==we||W.isInstancedMesh&&De.instancing===!1||!W.isInstancedMesh&&De.instancing===!0||W.isSkinnedMesh&&De.skinning===!1||!W.isSkinnedMesh&&De.skinning===!0||De.envMap!==Me||U.fog===!0&&De.fog!==ge||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==S.numPlanes||De.numIntersection!==S.numIntersection)||De.vertexAlphas!==Ne||De.vertexTangents!==Ae||De.morphTargets!==Pe||De.morphNormals!==$e||De.morphColors!==Ci||De.toneMapping!==rr||Se.isWebGL2===!0&&De.morphTargetsCount!==xn)&&(Qe=!0):(Qe=!0,De.__version=U.version);let yn=De.currentProgram;Qe===!0&&(yn=il(U,F,W));let Kn=!1,ls=!1,rl=!1;const St=yn.getUniforms(),us=De.uniforms;if(le.useProgram(yn.program)&&(Kn=!0,ls=!0,rl=!0),U.id!==w&&(w=U.id,ls=!0),Kn||M!==E){if(St.setValue(G,"projectionMatrix",E.projectionMatrix),Se.logarithmicDepthBuffer&&St.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,ls=!0,rl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Sn=St.map.cameraPosition;Sn!==void 0&&Sn.setValue(G,Z.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&St.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||W.isSkinnedMesh)&&St.setValue(G,"viewMatrix",E.matrixWorldInverse)}if(W.isSkinnedMesh){St.setOptional(G,W,"bindMatrix"),St.setOptional(G,W,"bindMatrixInverse");const Sn=W.skeleton;Sn&&(Se.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),St.setValue(G,"boneTexture",Sn.boneTexture,me),St.setValue(G,"boneTextureSize",Sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sl=O.morphAttributes;return(sl.position!==void 0||sl.normal!==void 0||sl.color!==void 0&&Se.isWebGL2===!0)&&ee.update(W,O,U,yn),(ls||De.receiveShadow!==W.receiveShadow)&&(De.receiveShadow=W.receiveShadow,St.setValue(G,"receiveShadow",W.receiveShadow)),ls&&(St.setValue(G,"toneMappingExposure",p.toneMappingExposure),De.needsLights&&Eg(us,rl),ge&&U.fog===!0&&Pn.refreshFogUniforms(us,ge),Pn.refreshMaterialUniforms(us,U,k,R,I),fa.upload(G,De.uniformsList,us,me)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(fa.upload(G,De.uniformsList,us,me),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&St.setValue(G,"center",W.center),St.setValue(G,"modelViewMatrix",W.modelViewMatrix),St.setValue(G,"normalMatrix",W.normalMatrix),St.setValue(G,"modelMatrix",W.matrixWorld),yn}function Eg(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Tg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,F,O){be.get(E.texture).__webglTexture=F,be.get(E.depthTexture).__webglTexture=O;const U=be.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=O===void 0,U.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const O=be.get(E);O.__webglFramebuffer=F,O.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,O=0){x=E,m=F,v=O;let U=!0;if(E){const Me=be.get(E);Me.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),U=!1):Me.__webglFramebuffer===void 0?me.setupRenderTarget(E):Me.__hasExternalTextures&&me.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture)}let W=null,ge=!1,ye=!1;if(E){const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture)&&(ye=!0);const Ne=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(W=Ne[F],ge=!0):Se.isWebGL2&&E.samples>0&&me.useMultisampledRTT(E)===!1?W=be.get(E).__webglMultisampledFramebuffer:W=Ne,C.copy(E.viewport),L.copy(E.scissor),y=E.scissorTest}else C.copy(z).multiplyScalar(k).floor(),L.copy($).multiplyScalar(k).floor(),y=V;if(le.bindFramebuffer(36160,W)&&Se.drawBuffers&&U&&le.drawBuffers(E,W),le.viewport(C),le.scissor(L),le.setScissorTest(y),ge){const Me=be.get(E.texture);G.framebufferTexture2D(36160,36064,34069+F,Me.__webglTexture,O)}else if(ye){const Me=be.get(E.texture),Ne=F||0;G.framebufferTextureLayer(36160,36064,Me.__webglTexture,O||0,Ne)}w=-1},this.readRenderTargetPixels=function(E,F,O,U,W,ge,ye){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(we=we[ye]),we){le.bindFramebuffer(36160,we);try{const Me=E.texture,Ne=Me.format,Ae=Me.type;if(Ne!==Cn&&B.convert(Ne)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Pe=Ae===eo&&(Te.has("EXT_color_buffer_half_float")||Se.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Ae!==Ki&&B.convert(Ae)!==G.getParameter(35738)&&!(Ae===Oi&&(Se.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Pe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-U&&O>=0&&O<=E.height-W&&G.readPixels(F,O,U,W,B.convert(Ne),B.convert(Ae),ge)}finally{const Me=x!==null?be.get(x).__webglFramebuffer:null;le.bindFramebuffer(36160,Me)}}},this.copyFramebufferToTexture=function(E,F,O=0){const U=Math.pow(2,-O),W=Math.floor(F.image.width*U),ge=Math.floor(F.image.height*U);me.setTexture2D(F,0),G.copyTexSubImage2D(3553,O,0,0,E.x,E.y,W,ge),le.unbindTexture()},this.copyTextureToTexture=function(E,F,O,U=0){const W=F.image.width,ge=F.image.height,ye=B.convert(O.format),we=B.convert(O.type);me.setTexture2D(O,0),G.pixelStorei(37440,O.flipY),G.pixelStorei(37441,O.premultiplyAlpha),G.pixelStorei(3317,O.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,U,E.x,E.y,W,ge,ye,we,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,U,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):G.texSubImage2D(3553,U,E.x,E.y,ye,we,F.image),U===0&&O.generateMipmaps&&G.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,F,O,U,W=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=E.max.x-E.min.x+1,ye=E.max.y-E.min.y+1,we=E.max.z-E.min.z+1,Me=B.convert(U.format),Ne=B.convert(U.type);let Ae;if(U.isData3DTexture)me.setTexture3D(U,0),Ae=32879;else if(U.isDataArrayTexture)me.setTexture2DArray(U,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const Pe=G.getParameter(3314),$e=G.getParameter(32878),Ci=G.getParameter(3316),rr=G.getParameter(3315),sr=G.getParameter(32877),xn=O.isCompressedTexture?O.mipmaps[0]:O.image;G.pixelStorei(3314,xn.width),G.pixelStorei(32878,xn.height),G.pixelStorei(3316,E.min.x),G.pixelStorei(3315,E.min.y),G.pixelStorei(32877,E.min.z),O.isDataTexture||O.isData3DTexture?G.texSubImage3D(Ae,W,F.x,F.y,F.z,ge,ye,we,Me,Ne,xn.data):O.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ae,W,F.x,F.y,F.z,ge,ye,we,Me,xn.data)):G.texSubImage3D(Ae,W,F.x,F.y,F.z,ge,ye,we,Me,Ne,xn),G.pixelStorei(3314,Pe),G.pixelStorei(32878,$e),G.pixelStorei(3316,Ci),G.pixelStorei(3315,rr),G.pixelStorei(32877,sr),W===0&&U.generateMipmaps&&G.generateMipmap(Ae),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?me.setTextureCube(E,0):E.isData3DTexture?me.setTexture3D(E,0):E.isDataArrayTexture?me.setTexture2DArray(E,0):me.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){m=0,v=0,x=null,le.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class OM extends vg{}OM.prototype.isWebGL1Renderer=!0;class BM extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class VM extends fo{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jm,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class _g extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Nh=new st,zh=new N,kh=new N;class GM{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kh),t.updateMatrixWorld(),Nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HM extends GM{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=cc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class WM extends _g{constructor(e,t,i=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.shadow=new HM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jM extends _g{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lf);var xg={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XM=to.exports,qM=Symbol.for("react.element"),$M=Symbol.for("react.fragment"),YM=Object.prototype.hasOwnProperty,ZM=XM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KM={key:!0,ref:!0,__self:!0,__source:!0};function yg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)YM.call(e,i)&&!KM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qM,type:n,key:s,ref:o,props:r,_owner:ZM.current}}nl.Fragment=$M;nl.jsx=yg;nl.jsxs=yg;(function(n){n.exports=nl})(xg);const ka=xg.exports.jsx;function QM(){return to.exports.useEffect(()=>{const n=new BM,e=new Vt(50,window.innerWidth/window.innerHeight,1,1e3);e.position.z=96;const t=document.getElementById("myThreeJsCanvas"),i=new vg({canvas:t,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);const r=new jM(16761035,.5);r.castShadow=!0,n.add(r);const s=new WM(16777215,1);s.castShadow=!0,s.position.set(0,64,32),n.add(s);const o=new os(30,15,10),a=new VM,l=new Hn(o,a);n.add(l);var u=new(void 0)([cube],e,i.domElement);document.body.appendChild(i.domElement),u.addEventListener("dragstart",function(f){f.object.material.color.set(11184810)}),u.addEventListener("dragend",function(f){f.object.material.color.set(0)});const c=()=>{l.rotation.x+=.01,l.rotation.y+=.01,i.render(n,e),window.requestAnimationFrame(c)};c()},[]),ka("div",{children:ka("canvas",{id:"myThreeJsCanvas"})})}fu.createRoot(document.getElementById("root")).render(ka(Hg.StrictMode,{children:ka(QM,{})}));
