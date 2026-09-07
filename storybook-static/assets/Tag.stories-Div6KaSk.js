import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{fn as r}from"./index-DeN4tkzB.js";import"./button-BaFs26jy.js";import"./form-D5NF78QM.js";import"./top-nav-tlAE2T-F.js";import"./block-layout-Bc2hpV2c.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-iHhPfZGT.js";import"./cascader-UwHOzAH5.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import{T as a}from"./tags--LNP6sCy.js";import"./index-Bc2G9s8g.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";const k={title:"Data Display/Tag",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","primary","success","warning","destructive"]},removable:{control:{type:"boolean"}},onRemove:{action:"remove"}},args:{onRemove:r()}},s={args:{children:"Featured",variant:"default"}},n={args:{children:"Featured",variant:"primary",removable:!0,onRemove:r()}},t={args:{children:"Tag"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Recommended"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"primary",children:"Recommended"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"destructive",children:"Error"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Recommended"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{variant:"primary",onRemove:r(),children:"JavaScript"}),e.jsx(a,{variant:"success",onRemove:r(),children:"Recommended"}),e.jsx(a,{variant:"warning",onRemove:r(),children:"Recommended"}),e.jsx(a,{variant:"destructive",onRemove:r(),children:"Recommended"})]})]})]})},i={args:{children:"Featured",variant:"primary"}};var o,m,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Featured',
    variant: 'default'
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Featured',
    variant: 'primary',
    removable: true,
    onRemove: fn()
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var v,g,u;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Tag'
  },
  render: () => <div className="space-y-4">\r
      <div className="space-y-2">\r
        <h3 className="text-sm font-medium">Recommended</h3>\r
        <div className="flex gap-2">\r
          <Tag variant="default">Default</Tag>\r
          <Tag variant="primary">Recommended</Tag>\r
          <Tag variant="success">Success</Tag>\r
          <Tag variant="warning">Warning</Tag>\r
          <Tag variant="destructive">Error</Tag>\r
        </div>\r
      </div>\r
\r
      <div className="space-y-2">\r
        <h3 className="text-sm font-medium">Recommended</h3>\r
        <div className="flex gap-2">\r
          <Tag variant="primary" onRemove={fn()}>JavaScript</Tag>\r
          <Tag variant="success" onRemove={fn()}>Recommended</Tag>\r
          <Tag variant="warning" onRemove={fn()}>Recommended</Tag>\r
          <Tag variant="destructive" onRemove={fn()}>Recommended</Tag>\r
        </div>\r
      </div>\r
    </div>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,x,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: 'Featured',
    variant: 'primary'
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const q=["Default","Removable","AllVariants","WithLongText"];export{t as AllVariants,s as Default,n as Removable,i as WithLongText,q as __namedExportsOrder,k as default};
