import{j as e}from"./jsx-runtime-DFAAy_2V.js";import"./button-BaFs26jy.js";import{I as r}from"./form-CZeh-vxi.js";import"./top-nav-tlAE2T-F.js";import"./block-layout-CN-wBIVs.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-ye53cQ2m.js";import"./cascader-uB5K2ixH.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-Bc2G9s8g.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";import"./chevron-right-ByHdH1N4.js";import"./search-CHUBTwRr.js";const A={title:"Data Entry/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url"]},inputSize:{control:{type:"select"},options:["sm","default","lg"]},placeholder:{control:"text"},disabled:{control:"boolean"}}},a={args:{placeholder:"Enter your name..."}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Small"}),e.jsx(r,{inputSize:"sm",placeholder:"Enter a value"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Default"}),e.jsx(r,{inputSize:"default",placeholder:"Enter a value"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-sm font-medium",children:"Large"}),e.jsx(r,{inputSize:"lg",placeholder:"Enter a value"})]})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(r,{type:"text",placeholder:"Enter a value"}),e.jsx(r,{type:"email",placeholder:"Enter a value"}),e.jsx(r,{type:"password",placeholder:"Password"}),e.jsx(r,{type:"number",placeholder:"Enter a value"}),e.jsx(r,{type:"tel",placeholder:"Enter a value"}),e.jsx(r,{type:"url",placeholder:"Enter a value"})]})},l={args:{placeholder:"Enter a value",disabled:!0}};var n,o,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your name...'
  }
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var d,c,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <div className="space-y-2">\r
        <div className="text-sm font-medium">Small</div>\r
        <Input inputSize="sm" placeholder="Enter a value" />\r
      </div>\r
      <div className="space-y-2">\r
        <div className="text-sm font-medium">Default</div>\r
        <Input inputSize="default" placeholder="Enter a value" />\r
      </div>\r
      <div className="space-y-2">\r
        <div className="text-sm font-medium">Large</div>\r
        <Input inputSize="lg" placeholder="Enter a value" />\r
      </div>\r
    </div>
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,u,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Input type="text" placeholder="Enter a value" />\r
      <Input type="email" placeholder="Enter a value" />\r
      <Input type="password" placeholder="Password" />\r
      <Input type="number" placeholder="Enter a value" />\r
      <Input type="tel" placeholder="Enter a value" />\r
      <Input type="url" placeholder="Enter a value" />\r
    </div>
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,h,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter a value',
    disabled: true
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const B=["Default","Sizes","Types","Disabled"];export{a as Default,l as Disabled,t as Sizes,s as Types,B as __namedExportsOrder,A as default};
