import{j as f}from"./jsx-runtime-DFAAy_2V.js";import{r as d}from"./index-Bc2G9s8g.js";import{c as L}from"./utils-CJDSjbh9.js";import{c as O}from"./createLucideIcon-Si29XmKi.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=O("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=O("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=O("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=O("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);let te={data:""},re=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||te},ae=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ie=/\/\*[^]*?\*\/|  +/g,q=/\n+/g,k=(t,e)=>{let r="",i="",o="";for(let s in t){let a=t[s];s[0]=="@"?s[1]=="i"?r=s+" "+a+";":i+=s[1]=="f"?k(a,s):s+"{"+k(a,s[1]=="k"?"":e)+"}":typeof a=="object"?i+=k(a,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,n=>/&/.test(n)?n.replace(/&/g,l):l?l+" "+n:n)):s):a!=null&&(s=s[1]=="-"?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=k.p?k.p(s,a):s+":"+a+";")}return r+(e&&o?e+"{"+o+"}":o)+i},w={},B=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+B(t[r]);return e}return t},se=(t,e,r,i,o)=>{let s=B(t),a=w[s]||(w[s]=(n=>{let u=0,m=11;for(;u<n.length;)m=101*m+n.charCodeAt(u++)>>>0;return"go"+m})(s));if(!w[a]){let n=s!==t?t:(u=>{let m,c,p=[{}];for(;m=ae.exec(u.replace(ie,""));)m[4]?p.shift():m[3]?(c=m[3].replace(q," ").trim(),p.unshift(p[0][c]=p[0][c]||{})):p[0][m[1]]=m[2].replace(q," ").trim();return p[0]})(t);w[a]=k(o?{["@keyframes "+a]:n}:n,r?"":"."+a)}let l=r&&w.g;return r&&(w.g=w[a]),((n,u,m,c)=>{c?u.data=u.data.replace(c,n):u.data.indexOf(n)===-1&&(u.data=m?n+u.data:u.data+n)})(w[a],e,i,l),a},oe=(t,e,r)=>t.reduce((i,o,s)=>{let a=e[s];if(a&&a.call){let l=a(r),n=l&&l.props&&l.props.className||/^go/.test(l)&&l;a=n?"."+n:l&&typeof l=="object"?l.props?"":k(l,""):l===!1?"":l}return i+o+(a??"")},"");function T(t){let e=this||{},r=t.call?t(e.p):t;return se(r.unshift?r.raw?oe(r,[].slice.call(arguments,1),e.p):r.reduce((i,o)=>Object.assign(i,o&&o.call?o(e.p):o),{}):r,re(e.target),e.g,e.o,e.k)}let U,S,_;T.bind({g:1});let b=T.bind({k:1});function le(t,e,r,i){k.p=e,U=t,S=r,_=i}function C(t,e){let r=this||{};return function(){let i=arguments;function o(s,a){let l=Object.assign({},s),n=l.className||o.className;r.p=Object.assign({theme:S&&S()},l),r.o=/go\d/.test(n),l.className=T.apply(r,i)+(n?" "+n:"");let u=t;return t[0]&&(u=l.as||t,delete l.as),_&&u[0]&&_(l),U(u,l)}return e?e(o):o}}var ne=t=>typeof t=="function",I=(t,e)=>ne(t)?t(e):t,de=(()=>{let t=0;return()=>(++t).toString()})(),V=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),ce=20,F="default",X=(t,e)=>{let{toastLimit:r}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:i}=e;return X(t,{type:t.toasts.find(a=>a.id===i.id)?1:0,toast:i});case 3:let{toastId:o}=e;return{...t,toasts:t.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},D=[],Y={toasts:[],pausedAt:void 0,settings:{toastLimit:ce}},x={},Z=(t,e=F)=>{x[e]=X(x[e]||Y,t),D.forEach(([r,i])=>{r===e&&i(x[e])})},K=t=>Object.keys(x).forEach(e=>Z(t,e)),ue=t=>Object.keys(x).find(e=>x[e].toasts.some(r=>r.id===t)),z=(t=F)=>e=>{Z(e,t)},me={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},fe=(t={},e=F)=>{let[r,i]=d.useState(x[e]||Y),o=d.useRef(x[e]);d.useEffect(()=>(o.current!==x[e]&&i(x[e]),D.push([e,i]),()=>{let a=D.findIndex(([l])=>l===e);a>-1&&D.splice(a,1)}),[e]);let s=r.toasts.map(a=>{var l,n,u;return{...t,...t[a.type],...a,removeDelay:a.removeDelay||((l=t[a.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:a.duration||((n=t[a.type])==null?void 0:n.duration)||(t==null?void 0:t.duration)||me[a.type],style:{...t.style,...(u=t[a.type])==null?void 0:u.style,...a.style}}});return{...r,toasts:s}},pe=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||de()}),N=t=>(e,r)=>{let i=pe(e,t,r);return z(i.toasterId||ue(i.id))({type:2,toast:i}),i.id},g=(t,e)=>N("blank")(t,e);g.error=N("error");g.success=N("success");g.loading=N("loading");g.custom=N("custom");g.dismiss=(t,e)=>{let r={type:3,toastId:t};e?z(e)(r):K(r)};g.dismissAll=t=>g.dismiss(void 0,t);g.remove=(t,e)=>{let r={type:4,toastId:t};e?z(e)(r):K(r)};g.removeAll=t=>g.remove(void 0,t);g.promise=(t,e,r)=>{let i=g.loading(e.loading,{...r,...r==null?void 0:r.loading});return typeof t=="function"&&(t=t()),t.then(o=>{let s=e.success?I(e.success,o):void 0;return s?g.success(s,{id:i,...r,...r==null?void 0:r.success}):g.dismiss(i),o}).catch(o=>{let s=e.error?I(e.error,o):void 0;s?g.error(s,{id:i,...r,...r==null?void 0:r.error}):g.dismiss(i)}),t};var ge=1e3,ye=(t,e="default")=>{let{toasts:r,pausedAt:i}=fe(t,e),o=d.useRef(new Map).current,s=d.useCallback((c,p=ge)=>{if(o.has(c))return;let y=setTimeout(()=>{o.delete(c),a({type:4,toastId:c})},p);o.set(c,y)},[]);d.useEffect(()=>{if(i)return;let c=Date.now(),p=r.map(y=>{if(y.duration===1/0)return;let E=(y.duration||0)+y.pauseDuration-(c-y.createdAt);if(E<0){y.visible&&g.dismiss(y.id);return}return setTimeout(()=>g.dismiss(y.id,e),E)});return()=>{p.forEach(y=>y&&clearTimeout(y))}},[r,i,e]);let a=d.useCallback(z(e),[e]),l=d.useCallback(()=>{a({type:5,time:Date.now()})},[a]),n=d.useCallback((c,p)=>{a({type:1,toast:{id:c,height:p}})},[a]),u=d.useCallback(()=>{i&&a({type:6,time:Date.now()})},[i,a]),m=d.useCallback((c,p)=>{let{reverseOrder:y=!1,gutter:E=8,defaultPosition:R}=p||{},P=r.filter(h=>(h.position||R)===(c.position||R)&&h.height),Q=P.findIndex(h=>h.id===c.id),H=P.filter((h,M)=>M<Q&&h.visible).length;return P.filter(h=>h.visible).slice(...y?[H+1]:[0,H]).reduce((h,M)=>h+(M.height||0)+E,0)},[r]);return d.useEffect(()=>{r.forEach(c=>{if(c.dismissed)s(c.id,c.removeDelay);else{let p=o.get(c.id);p&&(clearTimeout(p),o.delete(c.id))}})},[r,s]),{toasts:r,handlers:{updateHeight:n,startPause:l,endPause:u,calculateOffset:m}}},he=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,xe=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ve=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${he} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${xe} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${be} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,we=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ke=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${we} 1s linear infinite;
`,je=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ce=b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ne=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${je} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ce} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ee=C("div")`
  position: absolute;
`,$e=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,De=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ie=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${De} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Oe=({toast:t})=>{let{icon:e,type:r,iconTheme:i}=t;return e!==void 0?typeof e=="string"?d.createElement(Ie,null,e):e:r==="blank"?null:d.createElement($e,null,d.createElement(ke,{...i}),r!=="loading"&&d.createElement(Ee,null,r==="error"?d.createElement(ve,{...i}):d.createElement(Ne,{...i})))},Te=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ze=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ae="0%{opacity:0;} 100%{opacity:1;}",Pe="0%{opacity:1;} 100%{opacity:0;}",Me=C("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,_e=(t,e)=>{let r=t.includes("top")?1:-1,[i,o]=V()?[Ae,Pe]:[Te(r),ze(r)];return{animation:e?`${b(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Le=d.memo(({toast:t,position:e,style:r,children:i})=>{let o=t.height?_e(t.position||e||"top-center",t.visible):{opacity:0},s=d.createElement(Oe,{toast:t}),a=d.createElement(Se,{...t.ariaProps},I(t.message,t));return d.createElement(Me,{className:t.className,style:{...o,...r,...t.style}},typeof i=="function"?i({icon:s,message:a}):d.createElement(d.Fragment,null,s,a))});le(d.createElement);var Fe=({id:t,className:e,style:r,onHeightUpdate:i,children:o})=>{let s=d.useCallback(a=>{if(a){let l=()=>{let n=a.getBoundingClientRect().height;i(t,n)};l(),new MutationObserver(l).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return d.createElement("div",{ref:s,className:e,style:r},o)},Re=(t,e)=>{let r=t.includes("top"),i=r?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:V()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...i,...o}},He=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,qe=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:i,children:o,toasterId:s,containerStyle:a,containerClassName:l})=>{let{toasts:n,handlers:u}=ye(r,s);return d.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...a},className:l,onMouseEnter:u.startPause,onMouseLeave:u.endPause},n.map(m=>{let c=m.position||e,p=u.calculateOffset(m,{reverseOrder:t,gutter:i,defaultPosition:e}),y=Re(c,p);return d.createElement(Fe,{id:m.id,key:m.id,onHeightUpdate:u.updateHeight,className:m.visible?He:"",style:y},m.type==="custom"?I(m.message,m):o?o(m):d.createElement(Le,{toast:m,position:c}))}))},v=g;const A=({toast:t})=>{const e=()=>{switch(t.type){case"success":return f.jsx(G,{className:"h-4 w-4 text-green-600"});case"error":return f.jsx(J,{className:"h-4 w-4 text-red-600"});default:return f.jsx(ee,{className:"h-4 w-4 text-blue-600"})}};return f.jsxs("div",{className:L("flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg","min-w-[300px] max-w-md mx-auto",t.visible?"animate-in slide-in-from-top-2 fade-in duration-200":"animate-out slide-out-to-top-2 fade-out duration-200"),children:[e(),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"text-sm font-medium text-foreground",children:String(t.message)}),t.description&&f.jsx("div",{className:"text-sm text-muted-foreground mt-1",children:String(t.description)})]}),t.action&&f.jsx("button",{onClick:t.action.onClick,className:"text-sm font-medium text-primary hover:text-primary/80 transition-colors",children:t.action.label}),f.jsx("button",{onClick:()=>v.dismiss(t.id),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]})},Be=({className:t,...e})=>f.jsx(qe,{position:"top-center",containerClassName:L("toaster",t),toastOptions:{duration:4e3,removeDelay:200,style:{background:"transparent",border:"none",padding:0,boxShadow:"none"}},...e,children:r=>f.jsx(A,{toast:r})}),j=(t,e)=>v.custom(r=>f.jsx(A,{toast:{...r,message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});j.success=(t,e)=>v.custom(r=>f.jsx(A,{toast:{...r,type:"success",message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});j.error=(t,e)=>v.custom(r=>f.jsx(A,{toast:{...r,type:"error",message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});j.warning=(t,e)=>v.custom(r=>f.jsxs("div",{className:L("flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg","min-w-[300px] max-w-md mx-auto",r.visible?"animate-in slide-in-from-top-2 fade-in duration-200":"animate-out slide-out-to-top-2 fade-out duration-200"),children:[f.jsx(W,{className:"h-4 w-4 text-yellow-600"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"text-sm font-medium text-foreground",children:t}),(e==null?void 0:e.description)&&f.jsx("div",{className:"text-sm text-muted-foreground mt-1",children:e.description})]}),(e==null?void 0:e.action)&&f.jsx("button",{onClick:e.action.onClick,className:"text-sm font-medium text-primary hover:text-primary/80 transition-colors",children:e.action.label}),f.jsx("button",{onClick:()=>v.dismiss(r.id),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});j.info=(t,e)=>j(t,e);j.loading=(t,e)=>v.loading(t,{id:e==null?void 0:e.id,duration:e==null?void 0:e.duration});j.promise=(t,e)=>v.promise(t,{loading:e.loading,success:e.success,error:e.error});j.dismiss=t=>v.dismiss(t);Be.__docgenInfo={description:"",methods:[],displayName:"Toaster",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["ToasterProps"]};export{G as C,ee as I,Be as T,W as a,j as c};
