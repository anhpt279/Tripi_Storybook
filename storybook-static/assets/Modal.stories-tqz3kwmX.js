import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{B as r}from"./button-BaFs26jy.js";import{T as b}from"./form-D5NF78QM.js";import"./top-nav-tlAE2T-F.js";import{M as o}from"./block-layout-Bc2hpV2c.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-iHhPfZGT.js";import"./cascader-UwHOzAH5.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import{r as a}from"./index-Bc2G9s8g.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";const K={title:"Feedback/Modal",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Modal title"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Modal size"},children:{control:"text",description:"Modal content"},footer:{control:!1,description:"Modal footer content (Modal examples)"},open:{control:"boolean",description:"Open and close state"},onOpenChange:{action:"opened/closed",description:"Open and close state"}}},s=({height:t="h-24"})=>e.jsx("div",{className:`${t} w-full bg-purple-100 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center`,children:e.jsx(b,{variant:"body",className:"text-purple-600",children:"content area"})}),l={args:{title:"Example title",children:e.jsx(s,{})},render:t=>{const[n,u]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>u(!0),children:"Modal content"}),e.jsx(o,{...t,open:n,onOpenChange:u,children:t.children})]})}},c={render:()=>{const[t,n]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>n(!0),children:"Modal content"}),e.jsx(o,{open:t,onOpenChange:n,title:"Modal examples",size:"sm",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{children:"Modal content"})]}),children:e.jsx(s,{height:"h-16"})})]})}},i={render:()=>{const[t,n]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>n(!0),children:"Modal content"}),e.jsx(o,{open:t,onOpenChange:n,title:"Modal examples",size:"md",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{children:"Modal content"})]}),children:e.jsx(s,{height:"h-20"})})]})}},d={render:()=>{const[t,n]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>n(!0),children:"Modal content"}),e.jsx(o,{open:t,onOpenChange:n,title:"Modal examples",size:"lg",footer:e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",children:"Cancel"}),e.jsx(r,{children:"Modal content"})]}),children:e.jsx(s,{height:"h-32"})})]})}},p={render:()=>{const[t,n]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{onClick:()=>n(!0),children:"Modal content"}),e.jsx(o,{open:t,onOpenChange:n,title:"Modal examples",size:"md",children:e.jsx(s,{height:"h-24"})})]})}};var m,h,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Example title',
    children: <ContentAreaMarker />
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Modal content</Button>\r
        <Modal {...args} open={open} onOpenChange={setOpen}>\r
          {args.children}\r
        </Modal>\r
      </>;
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var M,g,j;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Modal content</Button>\r
        <Modal open={open} onOpenChange={setOpen} title="Modal examples" size="sm" footer={<>\r
              <Button variant="outline">Cancel</Button>\r
              <Button>Modal content</Button>\r
            </>}>\r
          <ContentAreaMarker height="h-16" />\r
        </Modal>\r
      </>;
  }
}`,...(j=(g=c.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var O,C,f;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Modal content</Button>\r
        <Modal open={open} onOpenChange={setOpen} title="Modal examples" size="md" footer={<>\r
              <Button variant="outline">Cancel</Button>\r
              <Button>Modal content</Button>\r
            </>}>\r
          <ContentAreaMarker height="h-20" />\r
        </Modal>\r
      </>;
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var B,k,S;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Modal content</Button>\r
        <Modal open={open} onOpenChange={setOpen} title="Modal examples" size="lg" footer={<>\r
              <Button variant="outline">Cancel</Button>\r
              <Button>Modal content</Button>\r
            </>}>\r
          <ContentAreaMarker height="h-32" />\r
        </Modal>\r
      </>;
  }
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var F,z,v;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Modal content</Button>\r
        <Modal open={open} onOpenChange={setOpen} title="Modal examples" size="md">\r
          <ContentAreaMarker height="h-24" />\r
        </Modal>\r
      </>;
  }
}`,...(v=(z=p.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const P=["Default","Small","Medium","Large","WithoutFooter"];export{l as Default,d as Large,i as Medium,c as Small,p as WithoutFooter,P as __namedExportsOrder,K as default};
