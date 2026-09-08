import{j as f}from"./jsx-runtime-BjG_zV1W.js";import{r as c}from"./index-OHqKpUGr.js";import{c as L}from"./utils-DagjsUos.js";import{c as _}from"./createLucideIcon-CH9xbzwY.js";/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};B.node;const te=_(B);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U={name:"circle-check-big",size:24,node:[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],aliases:["check-circle"]};U.node;const re=_(U);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};Y.node;const ae=_(Y);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};Z.node;const ie=_(Z);let se={data:""},oe=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||se},ne=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,le=/\/\*[^]*?\*\/|  +/g,q=/\n+/g,k=(t,e)=>{let r="",i="",o="";for(let s in t){let a=t[s];s[0]=="@"?s[1]=="i"?r=s+" "+a+";":i+=s[1]=="f"?k(a,s):s+"{"+k(a,s[1]=="k"?"":e)+"}":typeof a=="object"?i+=k(a,e?e.replace(/([^,])+/g,n=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,n):n?n+" "+l:l)):s):a!=null&&(s=s[1]=="-"?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=k.p?k.p(s,a):s+":"+a+";")}return r+(e&&o?e+"{"+o+"}":o)+i},w={},K=t=>{if(typeof t=="object"){let e="";for(let r in t)e+=r+K(t[r]);return e}return t},ce=(t,e,r,i,o)=>{let s=K(t),a=w[s]||(w[s]=(l=>{let u=0,m=11;for(;u<l.length;)m=101*m+l.charCodeAt(u++)>>>0;return"go"+m})(s));if(!w[a]){let l=s!==t?t:(u=>{let m,d,p=[{}];for(;m=ne.exec(u.replace(le,""));)m[4]?p.shift():m[3]?(d=m[3].replace(q," ").trim(),p.unshift(p[0][d]=p[0][d]||{})):p[0][m[1]]=m[2].replace(q," ").trim();return p[0]})(t);w[a]=k(o?{["@keyframes "+a]:l}:l,r?"":"."+a)}let n=r&&w.g;return r&&(w.g=w[a]),((l,u,m,d)=>{d?u.data=u.data.replace(d,l):u.data.indexOf(l)===-1&&(u.data=m?l+u.data:u.data+l)})(w[a],e,i,n),a},de=(t,e,r)=>t.reduce((i,o,s)=>{let a=e[s];if(a&&a.call){let n=a(r),l=n&&n.props&&n.props.className||/^go/.test(n)&&n;a=l?"."+l:n&&typeof n=="object"?n.props?"":k(n,""):n===!1?"":n}return i+o+(a??"")},"");function I(t){let e=this||{},r=t.call?t(e.p):t;return ce(r.unshift?r.raw?de(r,[].slice.call(arguments,1),e.p):r.reduce((i,o)=>Object.assign(i,o&&o.call?o(e.p):o),{}):r,oe(e.target),e.g,e.o,e.k)}let Q,M,S;I.bind({g:1});let b=I.bind({k:1});function ue(t,e,r,i){k.p=e,Q=t,M=r,S=i}function N(t,e){let r=this||{};return function(){let i=arguments;function o(s,a){let n=Object.assign({},s),l=n.className||o.className;r.p=Object.assign({theme:M&&M()},n),r.o=/go\d/.test(l),n.className=I.apply(r,i)+(l?" "+l:"");let u=t;return t[0]&&(u=n.as||t,delete n.as),S&&u[0]&&S(n),Q(u,n)}return e?e(o):o}}var me=t=>typeof t=="function",z=(t,e)=>me(t)?t(e):t,fe=(()=>{let t=0;return()=>(++t).toString()})(),V=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),pe=20,F="default",W=(t,e)=>{let{toastLimit:r}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,r)};case 1:return{...t,toasts:t.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:i}=e;return W(t,{type:t.toasts.find(a=>a.id===i.id)?1:0,toast:i});case 3:let{toastId:o}=e;return{...t,toasts:t.toasts.map(a=>a.id===o||o===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+s}))}}},D=[],X={toasts:[],pausedAt:void 0,settings:{toastLimit:pe}},x={},G=(t,e=F)=>{x[e]=W(x[e]||X,t),D.forEach(([r,i])=>{r===e&&i(x[e])})},J=t=>Object.keys(x).forEach(e=>G(t,e)),ge=t=>Object.keys(x).find(e=>x[e].toasts.some(r=>r.id===t)),O=(t=F)=>e=>{G(e,t)},ye={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},he=(t={},e=F)=>{let[r,i]=c.useState(x[e]||X),o=c.useRef(x[e]);c.useEffect(()=>(o.current!==x[e]&&i(x[e]),D.push([e,i]),()=>{let a=D.findIndex(([n])=>n===e);a>-1&&D.splice(a,1)}),[e]);let s=r.toasts.map(a=>{var n,l,u;return{...t,...t[a.type],...a,removeDelay:a.removeDelay||((n=t[a.type])==null?void 0:n.removeDelay)||(t==null?void 0:t.removeDelay),duration:a.duration||((l=t[a.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||ye[a.type],style:{...t.style,...(u=t[a.type])==null?void 0:u.style,...a.style}}});return{...r,toasts:s}},xe=(t,e="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...r,id:(r==null?void 0:r.id)||fe()}),C=t=>(e,r)=>{let i=xe(e,t,r);return O(i.toasterId||ge(i.id))({type:2,toast:i}),i.id},g=(t,e)=>C("blank")(t,e);g.error=C("error");g.success=C("success");g.loading=C("loading");g.custom=C("custom");g.dismiss=(t,e)=>{let r={type:3,toastId:t};e?O(e)(r):J(r)};g.dismissAll=t=>g.dismiss(void 0,t);g.remove=(t,e)=>{let r={type:4,toastId:t};e?O(e)(r):J(r)};g.removeAll=t=>g.remove(void 0,t);g.promise=(t,e,r)=>{let i=g.loading(e.loading,{...r,...r==null?void 0:r.loading});return typeof t=="function"&&(t=t()),t.then(o=>{let s=e.success?z(e.success,o):void 0;return s?g.success(s,{id:i,...r,...r==null?void 0:r.success}):g.dismiss(i),o}).catch(o=>{let s=e.error?z(e.error,o):void 0;s?g.error(s,{id:i,...r,...r==null?void 0:r.error}):g.dismiss(i)}),t};var be=1e3,ve=(t,e="default")=>{let{toasts:r,pausedAt:i}=he(t,e),o=c.useRef(new Map).current,s=c.useCallback((d,p=be)=>{if(o.has(d))return;let y=setTimeout(()=>{o.delete(d),a({type:4,toastId:d})},p);o.set(d,y)},[]);c.useEffect(()=>{if(i)return;let d=Date.now(),p=r.map(y=>{if(y.duration===1/0)return;let E=(y.duration||0)+y.pauseDuration-(d-y.createdAt);if(E<0){y.visible&&g.dismiss(y.id);return}return setTimeout(()=>g.dismiss(y.id,e),E)});return()=>{p.forEach(y=>y&&clearTimeout(y))}},[r,i,e]);let a=c.useCallback(O(e),[e]),n=c.useCallback(()=>{a({type:5,time:Date.now()})},[a]),l=c.useCallback((d,p)=>{a({type:1,toast:{id:d,height:p}})},[a]),u=c.useCallback(()=>{i&&a({type:6,time:Date.now()})},[i,a]),m=c.useCallback((d,p)=>{let{reverseOrder:y=!1,gutter:E=8,defaultPosition:R}=p||{},A=r.filter(h=>(h.position||R)===(d.position||R)&&h.height),ee=A.findIndex(h=>h.id===d.id),H=A.filter((h,P)=>P<ee&&h.visible).length;return A.filter(h=>h.visible).slice(...y?[H+1]:[0,H]).reduce((h,P)=>h+(P.height||0)+E,0)},[r]);return c.useEffect(()=>{r.forEach(d=>{if(d.dismissed)s(d.id,d.removeDelay);else{let p=o.get(d.id);p&&(clearTimeout(p),o.delete(d.id))}})},[r,s]),{toasts:r,handlers:{updateHeight:l,startPause:n,endPause:u,calculateOffset:m}}},we=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ke=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,je=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ne=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${we} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ke} 0.15s ease-out forwards;
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
    animation: ${je} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ce=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ee=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Ce} 1s linear infinite;
`,$e=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,De=b`
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
}`,ze=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${De} 0.2s ease-out forwards;
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
`,_e=N("div")`
  position: absolute;
`,Ie=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Oe=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Te=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Oe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ae=({toast:t})=>{let{icon:e,type:r,iconTheme:i}=t;return e!==void 0?typeof e=="string"?c.createElement(Te,null,e):e:r==="blank"?null:c.createElement(Ie,null,c.createElement(Ee,{...i}),r!=="loading"&&c.createElement(_e,null,r==="error"?c.createElement(Ne,{...i}):c.createElement(ze,{...i})))},Pe=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Me=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Se="0%{opacity:0;} 100%{opacity:1;}",Le="0%{opacity:1;} 100%{opacity:0;}",Fe=N("div")`
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
`,Re=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,He=(t,e)=>{let r=t.includes("top")?1:-1,[i,o]=V()?[Se,Le]:[Pe(r),Me(r)];return{animation:e?`${b(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},qe=c.memo(({toast:t,position:e,style:r,children:i})=>{let o=t.height?He(t.position||e||"top-center",t.visible):{opacity:0},s=c.createElement(Ae,{toast:t}),a=c.createElement(Re,{...t.ariaProps},z(t.message,t));return c.createElement(Fe,{className:t.className,style:{...o,...r,...t.style}},typeof i=="function"?i({icon:s,message:a}):c.createElement(c.Fragment,null,s,a))});ue(c.createElement);var Be=({id:t,className:e,style:r,onHeightUpdate:i,children:o})=>{let s=c.useCallback(a=>{if(a){let n=()=>{let l=a.getBoundingClientRect().height;i(t,l)};n(),new MutationObserver(n).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return c.createElement("div",{ref:s,className:e,style:r},o)},Ue=(t,e)=>{let r=t.includes("top"),i=r?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:V()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(r?1:-1)}px)`,...i,...o}},Ye=I`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Ze=({reverseOrder:t,position:e="top-center",toastOptions:r,gutter:i,children:o,toasterId:s,containerStyle:a,containerClassName:n})=>{let{toasts:l,handlers:u}=ve(r,s);return c.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...a},className:n,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(m=>{let d=m.position||e,p=u.calculateOffset(m,{reverseOrder:t,gutter:i,defaultPosition:e}),y=Ue(d,p);return c.createElement(Be,{id:m.id,key:m.id,onHeightUpdate:u.updateHeight,className:m.visible?Ye:"",style:y},m.type==="custom"?z(m.message,m):o?o(m):c.createElement(qe,{toast:m,position:d}))}))},v=g;const T=({toast:t})=>{const e=()=>{switch(t.type){case"success":return f.jsx(re,{className:"h-4 w-4 text-green-600"});case"error":return f.jsx(ae,{className:"h-4 w-4 text-red-600"});default:return f.jsx(ie,{className:"h-4 w-4 text-blue-600"})}};return f.jsxs("div",{className:L("flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg","min-w-[300px] max-w-md mx-auto",t.visible?"animate-in slide-in-from-top-2 fade-in duration-200":"animate-out slide-out-to-top-2 fade-out duration-200"),children:[e(),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"text-sm font-medium text-foreground",children:String(t.message)}),t.description&&f.jsx("div",{className:"text-sm text-muted-foreground mt-1",children:String(t.description)})]}),t.action&&f.jsx("button",{onClick:t.action.onClick,className:"text-sm font-medium text-primary hover:text-primary/80 transition-colors",children:t.action.label}),f.jsx("button",{onClick:()=>v.dismiss(t.id),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]})},Ke=({className:t,...e})=>f.jsx(Ze,{position:"top-center",containerClassName:L("toaster",t),toastOptions:{duration:4e3,removeDelay:200,style:{background:"transparent",border:"none",padding:0,boxShadow:"none"}},...e,children:r=>f.jsx(T,{toast:r})}),j=(t,e)=>v.custom(r=>f.jsx(T,{toast:{...r,message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});j.success=(t,e)=>v.custom(r=>f.jsx(T,{toast:{...r,type:"success",message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});j.error=(t,e)=>v.custom(r=>f.jsx(T,{toast:{...r,type:"error",message:t,...(e==null?void 0:e.description)&&{description:e.description},...(e==null?void 0:e.action)&&{action:e.action}}}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});j.warning=(t,e)=>v.custom(r=>f.jsxs("div",{className:L("flex items-center gap-3 rounded-lg border border-border bg-background p-4 shadow-lg","min-w-[300px] max-w-md mx-auto",r.visible?"animate-in slide-in-from-top-2 fade-in duration-200":"animate-out slide-out-to-top-2 fade-out duration-200"),children:[f.jsx(te,{className:"h-4 w-4 text-yellow-600"}),f.jsxs("div",{className:"flex-1",children:[f.jsx("div",{className:"text-sm font-medium text-foreground",children:t}),(e==null?void 0:e.description)&&f.jsx("div",{className:"text-sm text-muted-foreground mt-1",children:e.description})]}),(e==null?void 0:e.action)&&f.jsx("button",{onClick:e.action.onClick,className:"text-sm font-medium text-primary hover:text-primary/80 transition-colors",children:e.action.label}),f.jsx("button",{onClick:()=>v.dismiss(r.id),className:"text-muted-foreground hover:text-foreground transition-colors",children:"×"})]}),{id:e==null?void 0:e.id,duration:(e==null?void 0:e.duration)||4e3,removeDelay:200});j.info=(t,e)=>j(t,e);j.loading=(t,e)=>v.loading(t,{id:e==null?void 0:e.id,duration:e==null?void 0:e.duration});j.promise=(t,e)=>v.promise(t,{loading:e.loading,success:e.success,error:e.error});j.dismiss=t=>v.dismiss(t);Ke.__docgenInfo={description:"",methods:[],displayName:"Toaster",props:{className:{required:!1,tsType:{name:"string"},description:""}},composes:["ToasterProps"]};export{re as C,ie as I,Ke as T,te as a,j as c};
