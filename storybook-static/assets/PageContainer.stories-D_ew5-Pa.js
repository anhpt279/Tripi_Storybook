import{j as e}from"./jsx-runtime-DFAAy_2V.js";import"./button-BaFs26jy.js";import{T as f}from"./form-CZeh-vxi.js";import"./top-nav-tlAE2T-F.js";import{k as b}from"./block-layout-CN-wBIVs.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-ye53cQ2m.js";import"./cascader-uB5K2ixH.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-Bc2G9s8g.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";import"./chevron-right-ByHdH1N4.js";import"./search-CHUBTwRr.js";const R={title:"Layout/PageContainer",component:b,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["full","centered"],description:"Page container layout variant"},asChild:{control:{type:"boolean"},description:"Whether to render as a child element"}}},o=({variant:n="full",height:x="h-96"})=>{const h=n==="full"?"Viewport: 1440px, padding: 32px":"Width: 768px, Page container examples: 24px",P=n==="full"?"max-w-full":"max-w-[768px] mx-auto";return e.jsx("div",{className:`${x} w-full bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center ${P}`,children:e.jsxs(f,{variant:"body",className:"text-blue-600 text-center",children:["Page content",e.jsx("br",{}),h,e.jsx("br",{}),"Page container examples: 40px",e.jsx("br",{}),"Page container examples(bg-sidebar)Page container examples(p-2)",e.jsx("br",{}),"Page content, Page container examples"]})})},r={args:{children:e.jsx(o,{})}},t={args:{variant:"centered",children:e.jsx(o,{variant:"centered",height:"h-80"})},parameters:{docs:{description:{story:"Page container examples, 768px, Page content. PageContainer. "}}}},a={args:{variant:"full",children:e.jsx(o,{variant:"full",height:"h-96"})},parameters:{docs:{description:{story:"Page container examples, PageContainer. Page content. "}}}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <ContentAreaMarker />
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    children: <ContentAreaMarker variant="centered" height="h-80" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Page container examples, 768px, Page content. PageContainer. '
      }
    }
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    children: <ContentAreaMarker variant="full" height="h-96" />
  },
  parameters: {
    docs: {
      description: {
        story: 'Page container examples, PageContainer. Page content. '
      }
    }
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const V=["Default","Centered","FullWidth"];export{t as Centered,r as Default,a as FullWidth,V as __namedExportsOrder,R as default};
