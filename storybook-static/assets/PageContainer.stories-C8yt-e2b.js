import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./button-NcT16nQI.js";import{k as f}from"./block-layout-Dw9PdHLo.js";import{T as b}from"./form-BideY6ZX.js";import"./top-nav-DSY2LobA.js";import"./button-group-BGPHS66b.js";import"./color-palette-B17xLnjS.js";import"./city-select-BbWDj568.js";import"./cascader-D7FM2dTX.js";import"./tags-input-BS9oPatn.js";import"./toast-B5sNYK7O.js";import"./tags-Bw0lymRa.js";import"./index-OHqKpUGr.js";import"./index-A4AG4hhW.js";import"./index-DaSxx5jD.js";import"./utils-DagjsUos.js";import"./createLucideIcon-CH9xbzwY.js";const L={title:"Layout/PageContainer",component:f,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["full","centered"],description:"Page container layout variant"},asChild:{control:{type:"boolean"},description:"Whether to render as a child element"}}},n=({variant:o="full",height:x="h-96"})=>{const h=o==="full"?"Viewport: 1440px, padding: 32px":"Width: 768px, Page container examples: 24px",P=o==="full"?"max-w-full":"max-w-[768px] mx-auto";return e.jsx("div",{className:`${x} w-full bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center ${P}`,children:e.jsxs(b,{variant:"body",className:"text-blue-600 text-center",children:["Page content",e.jsx("br",{}),h,e.jsx("br",{}),"Page container examples: 40px",e.jsx("br",{}),"Page container examples(bg-sidebar)Page container examples(p-2)",e.jsx("br",{}),"Page content, Page container examples"]})})},r={args:{children:e.jsx(n,{})}},t={args:{variant:"centered",children:e.jsx(n,{variant:"centered",height:"h-80"})},parameters:{docs:{description:{story:"Page container examples, 768px, Page content. PageContainer. "}}}},a={args:{variant:"full",children:e.jsx(n,{variant:"full",height:"h-96"})},parameters:{docs:{description:{story:"Page container examples, PageContainer. Page content. "}}}};var s,i,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: <ContentAreaMarker />
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const O=["Default","Centered","FullWidth"];export{t as Centered,r as Default,a as FullWidth,O as __namedExportsOrder,L as default};
