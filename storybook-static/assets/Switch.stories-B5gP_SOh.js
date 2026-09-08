import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{fn as x}from"./index-DeN4tkzB.js";import"./button-NcT16nQI.js";import{f as s}from"./block-layout-Dw9PdHLo.js";import"./form-BideY6ZX.js";import"./top-nav-DSY2LobA.js";import"./button-group-BGPHS66b.js";import"./color-palette-B17xLnjS.js";import"./city-select-BbWDj568.js";import"./cascader-D7FM2dTX.js";import"./tags-input-BS9oPatn.js";import"./toast-B5sNYK7O.js";import"./tags-Bw0lymRa.js";import"./index-OHqKpUGr.js";import"./index-A4AG4hhW.js";import"./index-DaSxx5jD.js";import"./utils-DagjsUos.js";import"./createLucideIcon-CH9xbzwY.js";const T={title:"Data Entry/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["sm","default"]},checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},args:{onCheckedChange:x()}},a={args:{checked:!1}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:!1}),e.jsx("span",{children:"Enable notifications"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:!0}),e.jsx("span",{children:"Enable notifications"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:!1,disabled:!0}),e.jsx("span",{children:"Enable notifications"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:!0,disabled:!0}),e.jsx("span",{children:"Enable notifications"})]})]}),parameters:{docs:{description:{story:"Example: Enable notifications, Enable notifications. "}}}},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{size:"sm",checked:!0}),e.jsx("span",{children:"Switch examples (sm)"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{size:"default",checked:!0}),e.jsx("span",{children:"Switch examples (default)"})]})]}),parameters:{docs:{description:{story:"Example: Small, Default. "}}}};var i,c,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,o,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center gap-4">\r
        <Switch checked={false} />\r
        <span>Enable notifications</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Switch checked={true} />\r
        <span>Enable notifications</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Switch checked={false} disabled />\r
        <span>Enable notifications</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Switch checked={true} disabled />\r
        <span>Enable notifications</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example: Enable notifications, Enable notifications. '
      }
    }
  }
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <div className="flex items-center gap-4">\r
        <Switch size="sm" checked={true} />\r
        <span>Switch examples (sm)</span>\r
      </div>\r
      <div className="flex items-center gap-4">\r
        <Switch size="default" checked={true} />\r
        <span>Switch examples (default)</span>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example: Small, Default. '
      }
    }
  }
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const q=["Default","States","Sizes"];export{a as Default,t as Sizes,r as States,q as __namedExportsOrder,T as default};
