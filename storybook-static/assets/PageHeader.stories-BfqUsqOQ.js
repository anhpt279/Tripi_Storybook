import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{B as a}from"./button-NcT16nQI.js";import{l as k}from"./block-layout-Dw9PdHLo.js";import{I as w}from"./form-BideY6ZX.js";import"./top-nav-DSY2LobA.js";import"./button-group-BGPHS66b.js";import"./color-palette-B17xLnjS.js";import{S as s,a as i,b as o,c as m,d as t}from"./city-select-BbWDj568.js";import"./cascader-D7FM2dTX.js";import"./tags-input-BS9oPatn.js";import"./toast-B5sNYK7O.js";import"./tags-Bw0lymRa.js";import"./index-OHqKpUGr.js";import"./index-A4AG4hhW.js";import"./index-DaSxx5jD.js";import"./utils-DagjsUos.js";import"./createLucideIcon-CH9xbzwY.js";const R={title:"Layout/PageHeader",component:k,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["title-only","title-with-actions","title-with-toolbar"]},showBack:{control:"boolean"},title:{control:"text"}}},r={args:{variant:"title-only",title:"Account settings",containerClassName:"p-6"}},l={args:{variant:"title-only",title:"Page with back button",showBack:!0,onBackClick:()=>alert("Back button clicked"),containerClassName:"p-6"}},n={args:{variant:"title-with-actions",title:"Account settings",showBack:!0,actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",size:"sm",children:"Cancel"}),e.jsx(a,{size:"sm",children:"Cancel"})]}),containerClassName:"p-6"}},c={args:{variant:"title-with-toolbar",title:"Account settings",showBack:!0,filters:e.jsxs(e.Fragment,{children:[e.jsx(w,{placeholder:"Header with actions...",className:"w-64"}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(o,{placeholder:"Enter a value"})}),e.jsxs(m,{children:[e.jsx(t,{value:"all",children:"All"}),e.jsx(t,{value:"pending",children:"Cancel"}),e.jsx(t,{value:"processing",children:"Cancel"}),e.jsx(t,{value:"completed",children:"Cancel"}),e.jsx(t,{value:"cancelled",children:"Cancel"})]})]}),e.jsxs(s,{children:[e.jsx(i,{children:e.jsx(o,{placeholder:"Enter a value"})}),e.jsxs(m,{children:[e.jsx(t,{value:"today",children:"Cancel"}),e.jsx(t,{value:"week",children:"Cancel"}),e.jsx(t,{value:"month",children:"Cancel"}),e.jsx(t,{value:"quarter",children:"Cancel"})]})]})]}),toolbarActions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",size:"sm",children:"Cancel"}),e.jsx(a,{variant:"outline",size:"sm",children:"Settings"}),e.jsx(a,{size:"sm",children:"Cancel"})]}),containerClassName:"p-6",headerClassName:"space-y-4"}};var u,p,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'title-only',
    title: 'Account settings',
    containerClassName: 'p-6'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,S,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'title-only',
    title: 'Page with back button',
    showBack: true,
    onBackClick: () => alert('Back button clicked'),
    containerClassName: 'p-6'
  }
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var C,v,x;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'title-with-actions',
    title: 'Account settings',
    showBack: true,
    actions: <>\r
        <Button variant="outline" size="sm">Cancel</Button>\r
        <Button size="sm">Cancel</Button>\r
      </>,
    containerClassName: 'p-6'
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,B,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'title-with-toolbar',
    title: 'Account settings',
    showBack: true,
    filters: <>\r
        <Input placeholder="Header with actions..." className="w-64" />\r
        <Select>\r
          <SelectTrigger>\r
            <SelectValue placeholder="Enter a value" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="all">All</SelectItem>\r
            <SelectItem value="pending">Cancel</SelectItem>\r
            <SelectItem value="processing">Cancel</SelectItem>\r
            <SelectItem value="completed">Cancel</SelectItem>\r
            <SelectItem value="cancelled">Cancel</SelectItem>\r
          </SelectContent>\r
        </Select>\r
        <Select>\r
          <SelectTrigger>\r
            <SelectValue placeholder="Enter a value" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="today">Cancel</SelectItem>\r
            <SelectItem value="week">Cancel</SelectItem>\r
            <SelectItem value="month">Cancel</SelectItem>\r
            <SelectItem value="quarter">Cancel</SelectItem>\r
          </SelectContent>\r
        </Select>\r
      </>,
    toolbarActions: <>\r
        <Button variant="outline" size="sm">Cancel</Button>\r
        <Button variant="outline" size="sm">Settings</Button>\r
        <Button size="sm">Cancel</Button>\r
      </>,
    containerClassName: 'p-6',
    headerClassName: 'space-y-4'
  }
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const D=["TitleOnly","TitleWithBack","TitleWithActions","TitleWithToolbar"];export{r as TitleOnly,n as TitleWithActions,l as TitleWithBack,c as TitleWithToolbar,D as __namedExportsOrder,R as default};
