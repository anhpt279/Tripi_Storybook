import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as n}from"./button-NcT16nQI.js";import{P as t}from"./block-layout-Dw9PdHLo.js";import"./form-BideY6ZX.js";import"./top-nav-DSY2LobA.js";import"./button-group-BGPHS66b.js";import"./color-palette-B17xLnjS.js";import"./city-select-BbWDj568.js";import"./cascader-D7FM2dTX.js";import"./tags-input-BS9oPatn.js";import"./toast-B5sNYK7O.js";import"./tags-Bw0lymRa.js";import"./index-OHqKpUGr.js";import"./index-A4AG4hhW.js";import"./index-DaSxx5jD.js";import"./utils-DagjsUos.js";import"./createLucideIcon-CH9xbzwY.js";const R={title:"Feedback/Popconfirm",component:t,parameters:{layout:"centered"},tags:["autodocs"]},i={render:()=>e.jsx(t,{title:"Confirm deletion",description:"Are you sure you want to delete this item? ",onConfirm:()=>alert("Deleted"),children:e.jsx(n,{variant:"destructive",children:"Delete item"})})},o={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-12 bg-gray-50 rounded-xl",children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mb-4 text-sm font-medium",children:"This action cannot be undone."}),e.jsx(t,{placement:"top",title:"Delete item",description:"This action cannot be undone.",onConfirm:()=>alert("Delete item"),children:e.jsx(n,{children:"This action cannot be undone."})})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mb-4 text-sm font-medium",children:"This action cannot be undone."}),e.jsx(t,{placement:"bottom",title:"Delete item",description:"This action cannot be undone.",onConfirm:()=>alert("Delete item"),children:e.jsx(n,{children:"This action cannot be undone."})})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mb-4 text-sm font-medium",children:"This action cannot be undone."}),e.jsx(t,{placement:"left",title:"Delete item",description:"Delete item",onConfirm:()=>alert("Delete item"),children:e.jsx(n,{children:"This action cannot be undone."})})]}),e.jsxs("div",{className:"text-center",children:[e.jsx("h3",{className:"mb-4 text-sm font-medium",children:"Right"}),e.jsx(t,{placement:"right",title:"Delete item",description:"Delete item",onConfirm:()=>alert("Delete item"),children:e.jsx(n,{children:"This action cannot be undone."})})]})]})};var r,m,c;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <Popconfirm title="Confirm deletion" description="Are you sure you want to delete this item? " onConfirm={() => alert('Deleted')}>\r
      <Button variant="destructive">Delete item</Button>\r
    </Popconfirm>
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var s,a,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 p-12 bg-gray-50 rounded-xl">\r
      <div className="text-center">\r
        <h3 className="mb-4 text-sm font-medium">This action cannot be undone.</h3>\r
        <Popconfirm placement="top" title="Delete item" description="This action cannot be undone." onConfirm={() => alert('Delete item')}>\r
          <Button>This action cannot be undone.</Button>\r
        </Popconfirm>\r
      </div>\r
\r
      <div className="text-center">\r
        <h3 className="mb-4 text-sm font-medium">This action cannot be undone.</h3>\r
        <Popconfirm placement="bottom" title="Delete item" description="This action cannot be undone." onConfirm={() => alert('Delete item')}>\r
          <Button>This action cannot be undone.</Button>\r
        </Popconfirm>\r
      </div>\r
\r
      <div className="text-center">\r
        <h3 className="mb-4 text-sm font-medium">This action cannot be undone.</h3>\r
        <Popconfirm placement="left" title="Delete item" description="Delete item" onConfirm={() => alert('Delete item')}>\r
          <Button>This action cannot be undone.</Button>\r
        </Popconfirm>\r
      </div>\r
\r
      <div className="text-center">\r
        <h3 className="mb-4 text-sm font-medium">Right</h3>\r
        <Popconfirm placement="right" title="Delete item" description="Delete item" onConfirm={() => alert('Delete item')}>\r
          <Button>This action cannot be undone.</Button>\r
        </Popconfirm>\r
      </div>\r
    </div>
}`,...(l=(a=o.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const w=["Default","Placement"];export{i as Default,o as Placement,w as __namedExportsOrder,R as default};
