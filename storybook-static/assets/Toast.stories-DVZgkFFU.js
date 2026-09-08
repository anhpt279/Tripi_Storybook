import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as r}from"./button-NcT16nQI.js";import{T as v,c as s}from"./toast-B5sNYK7O.js";import"./index-OHqKpUGr.js";import"./index-A4AG4hhW.js";import"./index-DaSxx5jD.js";import"./utils-DagjsUos.js";import"./createLucideIcon-CH9xbzwY.js";const de={title:"Feedback/Toast",component:v,parameters:{layout:"centered"},decorators:[g=>e.jsxs("div",{children:[e.jsx(g,{}),e.jsx(v,{})]})],tags:["autodocs"]},a={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>s("A default notification"),children:"Show default Toast"})})},o={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>s("Task complete",{description:"Your file was uploaded successfully"}),children:"With description Toast"})})},t={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>s.success("Action successful",{description:"Your settings have been saved"}),children:"Success Toast"})})},i={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{variant:"destructive",onClick:()=>s.error("Request failed",{description:"Please check your connection and try again."}),children:"Error Toast"})})},c={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>s.warning("Request failed",{description:"Please check your connection and try again."}),children:"Warning Toast"})})},n={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>s.info("Information",{description:"Please check your connection and try again.！"}),children:"Information Toast"})})},d={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>s.loading("Loading data...",{duration:2e3}),children:"Loading Toast"})})},l={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>s("Request failed",{description:"The operation is still in progress.",action:{label:"View details",onClick:()=>{console.log("Request failed"),s.success("Request failed")}}}),children:"Notification"})})},u={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>{const g=new Promise(($,ee)=>{setTimeout(()=>{Math.random()>.5?$("Request failed"):ee("Request failed")},2e3)});s.promise(g,{loading:"Loading...",success:"sample！",error:"Request failed"})},children:"Promise Toast"})})},m={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>s("Loading 10000ms...",{duration:1e4}),children:"Please check your connection and try again."})})},p={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsx(r,{onClick:()=>{s.success("Request failed"),setTimeout(()=>s.error("Request failed"),500),setTimeout(()=>s.warning("Request failed"),1e3)},children:"Multiple Toasts"})})},f={render:()=>e.jsxs("div",{className:"space-y-4 flex gap-4",children:[e.jsx(r,{onClick:()=>{s("sample 1"),s("sample 2"),s("sample 3")},children:"Show multiple Toasts"}),e.jsx(r,{variant:"outline",onClick:()=>s.dismiss(),children:"Dismiss all"})]})};var h,y,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast('A default notification')}>\r
        Show default Toast\r
      </Button>\r
    </div>
}`,...(k=(y=a.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var T,x,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast('Task complete', {
      description: 'Your file was uploaded successfully'
    })}>\r
        With description Toast\r
      </Button>\r
    </div>
}`,...(j=(x=o.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var C,B,N;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast.success('Action successful', {
      description: 'Your settings have been saved'
    })}>\r
        Success Toast\r
      </Button>\r
    </div>
}`,...(N=(B=t.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var R,q,S;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button variant="destructive" onClick={() => toast.error('Request failed', {
      description: 'Please check your connection and try again.'
    })}>\r
        Error Toast\r
      </Button>\r
    </div>
}`,...(S=(q=i.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var w,P,D;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast.warning('Request failed', {
      description: 'Please check your connection and try again.'
    })}>\r
        Warning Toast\r
      </Button>\r
    </div>
}`,...(D=(P=c.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var L,W,A;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast.info('Information', {
      description: 'Please check your connection and try again.！'
    })}>\r
        Information Toast\r
      </Button>\r
    </div>
}`,...(A=(W=n.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var E,I,M;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast.loading('Loading data...', {
      duration: 2000
    })}>\r
        Loading Toast\r
      </Button>\r
    </div>
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var b,Y,V;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast('Request failed', {
      description: 'The operation is still in progress.',
      action: {
        label: 'View details',
        onClick: () => {
          console.log('Request failed');
          toast.success('Request failed');
        }
      }
    })}>\r
        Notification\r
      </Button>\r
    </div>
}`,...(V=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var _,F,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => {
      const promise = new Promise<string>((resolve: (value: string) => void, reject: (reason?: string) => void) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve('Request failed');
          } else {
            reject('Request failed');
          }
        }, 2000);
      });
      toast.promise(promise, {
        loading: 'Loading...',
        success: 'sample！',
        error: 'Request failed'
      });
    }}>\r
        Promise Toast\r
      </Button>\r
    </div>
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var z,G,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => toast('Loading 10000ms...', {
      duration: 10000
    })}>\r
        Please check your connection and try again.\r
      </Button>\r
    </div>
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Button onClick={() => {
      toast.success('Request failed');
      setTimeout(() => toast.error('Request failed'), 500);
      setTimeout(() => toast.warning('Request failed'), 1000);
    }}>\r
        Multiple Toasts\r
      </Button>\r
    </div>
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 flex gap-4">\r
      <Button onClick={() => {
      toast('sample 1');
      toast('sample 2');
      toast('sample 3');
    }}>\r
        Show multiple Toasts\r
      </Button>\r
      <Button variant="outline" onClick={() => toast.dismiss()}>\r
        Dismiss all\r
      </Button>\r
    </div>
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const le=["Default","WithDescription","Success","Error","Warning","Info","Loading","WithActions","PromiseToast","CustomDuration","MultipleToasts","DismissAll"];export{m as CustomDuration,a as Default,f as DismissAll,i as Error,n as Info,d as Loading,p as MultipleToasts,u as PromiseToast,t as Success,c as Warning,l as WithActions,o as WithDescription,le as __namedExportsOrder,de as default};
