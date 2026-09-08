import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as E}from"./index-Bc2G9s8g.js";import"./button-BaFs26jy.js";import"./form-CZeh-vxi.js";import"./top-nav-tlAE2T-F.js";import{A as r,g as n,h as s}from"./block-layout-CN-wBIVs.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-ye53cQ2m.js";import"./cascader-uB5K2ixH.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";import"./chevron-right-ByHdH1N4.js";import"./search-CHUBTwRr.js";const P={title:"FEEDBACK/Alert",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["info","destructive","success","warning"]},showIcon:{control:{type:"boolean"}},closable:{control:{type:"boolean"}}}},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Information alert"}),e.jsx(s,{children:"Your changes have been saved. "})]})}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(r,{showIcon:!0,children:[e.jsx(n,{children:"Information alert（Default）"}),e.jsx(s,{children:"Your changes have been saved. "})]}),e.jsxs(r,{variant:"success",showIcon:!0,children:[e.jsx(n,{children:"Your changes have been saved."}),e.jsx(s,{children:"Alert examples！Your changes have been saved. "})]}),e.jsxs(r,{variant:"warning",showIcon:!0,children:[e.jsx(n,{children:"Your changes have been saved."}),e.jsx(s,{children:"Example: Your changes have been saved. "})]}),e.jsxs(r,{variant:"destructive",showIcon:!0,children:[e.jsx(n,{children:"Your changes have been saved."}),e.jsx(s,{children:"Example: Your changes have been saved. "})]})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs(r,{variant:"success",showIcon:!0,children:[e.jsx(n,{children:"Your changes have been saved."}),e.jsx(s,{children:"Your changes have been saved. "})]}),e.jsxs(r,{variant:"warning",showIcon:!0,children:[e.jsx(n,{children:"Your changes have been saved."}),e.jsx(s,{children:"Your changes have been saved. "})]})]})},i={render:()=>{const[h,f]=E.useState([{id:1,type:"info",title:"Account notice",content:"Alert examples X Your changes have been saved. "},{id:2,type:"success",title:"Account notice",content:"Your changes have been saved. "},{id:3,type:"warning",title:"Account notice",content:"Your changes have been saved. "}]),T=t=>{f(h.filter(N=>N.id!==t))};return e.jsxs("div",{className:"space-y-4",children:[h.map(t=>e.jsxs(r,{variant:t.type,showIcon:!0,onClose:()=>T(t.id),children:[e.jsx(n,{children:t.title}),e.jsx(s,{children:t.content})]},t.id)),h.length===0&&e.jsx("p",{className:"text-muted-foreground text-center py-8",children:"Your changes have been saved. Your changes have been saved."})]})}},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"info",showIcon:!0,children:e.jsx(s,{children:"Your changes have been saved. "})}),e.jsx(r,{variant:"success",showIcon:!0,children:e.jsx(s,{children:"Alert examples！"})}),e.jsx(r,{variant:"warning",showIcon:!0,onClose:()=>console.log("Alert examples"),children:e.jsx(s,{children:"Your changes have been saved. "})})]})};var d,v,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <AlertTitle>Information alert</AlertTitle>\r
        <AlertDescription>Your changes have been saved. </AlertDescription>\r
      </>
  }
}`,...(p=(v=a.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var u,A,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Alert showIcon>\r
        <AlertTitle>Information alert（Default）</AlertTitle>\r
        <AlertDescription>Your changes have been saved. </AlertDescription>\r
      </Alert>\r
\r
      <Alert variant="success" showIcon>\r
        <AlertTitle>Your changes have been saved.</AlertTitle>\r
        <AlertDescription>Alert examples！Your changes have been saved. </AlertDescription>\r
      </Alert>\r
\r
      <Alert variant="warning" showIcon>\r
        <AlertTitle>Your changes have been saved.</AlertTitle>\r
        <AlertDescription>Example: Your changes have been saved. </AlertDescription>\r
      </Alert>\r
\r
      <Alert variant="destructive" showIcon>\r
        <AlertTitle>Your changes have been saved.</AlertTitle>\r
        <AlertDescription>Example: Your changes have been saved. </AlertDescription>\r
      </Alert>\r
    </div>
}`,...(m=(A=o.parameters)==null?void 0:A.docs)==null?void 0:m.source}}};var g,x,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Alert variant="success" showIcon>\r
        <AlertTitle>Your changes have been saved.</AlertTitle>\r
        <AlertDescription>Your changes have been saved. </AlertDescription>\r
      </Alert>\r
\r
      <Alert variant="warning" showIcon>\r
        <AlertTitle>Your changes have been saved.</AlertTitle>\r
        <AlertDescription>Your changes have been saved. </AlertDescription>\r
      </Alert>\r
    </div>
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var Y,j,w;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [alerts, setAlerts] = useState([{
      id: 1,
      type: 'info' as const,
      title: 'Account notice',
      content: 'Alert examples X Your changes have been saved. '
    }, {
      id: 2,
      type: 'success' as const,
      title: 'Account notice',
      content: 'Your changes have been saved. '
    }, {
      id: 3,
      type: 'warning' as const,
      title: 'Account notice',
      content: 'Your changes have been saved. '
    }]);
    const removeAlert = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };
    return <div className="space-y-4">\r
        {alerts.map(alert => <Alert key={alert.id} variant={alert.type} showIcon onClose={() => removeAlert(alert.id)}>\r
            <AlertTitle>{alert.title}</AlertTitle>\r
            <AlertDescription>{alert.content}</AlertDescription>\r
          </Alert>)}\r
        {alerts.length === 0 && <p className="text-muted-foreground text-center py-8">\r
            Your changes have been saved. Your changes have been saved.\r
          </p>}\r
      </div>;
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var D,I,y;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <Alert variant="info" showIcon>\r
        <AlertDescription>Your changes have been saved. </AlertDescription>\r
      </Alert>\r
\r
      <Alert variant="success" showIcon>\r
        <AlertDescription>Alert examples！</AlertDescription>\r
      </Alert>\r
\r
      <Alert variant="warning" showIcon onClose={() => console.log('Alert examples')}>\r
        <AlertDescription>Your changes have been saved. </AlertDescription>\r
      </Alert>\r
    </div>
}`,...(y=(I=l.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const Q=["Default","Variants","WithIcon","Closable","OnlyDescription"];export{i as Closable,a as Default,l as OnlyDescription,o as Variants,c as WithIcon,Q as __namedExportsOrder,P as default};
