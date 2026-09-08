import{j as e}from"./jsx-runtime-DFAAy_2V.js";import"./button-BaFs26jy.js";import{L as d}from"./form-CZeh-vxi.js";import"./top-nav-tlAE2T-F.js";import{T as a}from"./block-layout-CN-wBIVs.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-ye53cQ2m.js";import"./cascader-uB5K2ixH.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-Bc2G9s8g.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";import"./chevron-right-ByHdH1N4.js";import"./search-CHUBTwRr.js";const Q={title:"Data Entry/Textarea",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},required:{control:"boolean"},rows:{control:{type:"number",min:1,max:20}},cols:{control:{type:"number",min:10,max:100}}}},o={args:{placeholder:"Write a comment..."}},t={render:r=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(d,{htmlFor:"description",children:"Description"}),e.jsx(a,{id:"description",placeholder:"Write a comment...",...r})]})},s={args:{placeholder:"Enter a value",disabled:!0}},c={render:r=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(d,{htmlFor:"comment",children:"Comment"}),e.jsx(a,{id:"comment",placeholder:"Write a comment...",rows:6,...r})]})},m={render:r=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(d,{htmlFor:"feedback",required:!0,children:"feedback"}),e.jsx(a,{id:"feedback",placeholder:"Enter a required comment...",required:!0,...r})]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(d,{htmlFor:"message-error",required:!0,children:"Comment"}),e.jsx(a,{id:"message-error",placeholder:"Enter a value",className:"border-destructive",required:!0}),e.jsx("p",{className:"text-sm text-destructive",children:"Comment"})]})};var i,n,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Write a comment...'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,x,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">\r
      <Label htmlFor="description">Description</Label>\r
      <Textarea id="description" placeholder="Write a comment..." {...args} />\r
    </div>
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter a value',
    disabled: true
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,j,q;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">\r
      <Label htmlFor="comment">Comment</Label>\r
      <Textarea id="comment" placeholder="Write a comment..." rows={6} {...args} />\r
    </div>
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var L,N,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">\r
      <Label htmlFor="feedback" required>feedback</Label>\r
      <Textarea id="feedback" placeholder="Enter a required comment..." required {...args} />\r
    </div>
}`,...(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var E,F,T;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Label htmlFor="message-error" required>Comment</Label>\r
      <Textarea id="message-error" placeholder="Enter a value" className="border-destructive" required />\r
      <p className="text-sm text-destructive">Comment</p>\r
    </div>
}`,...(T=(F=l.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};const U=["Default","WithLabel","Disabled","WithRows","Required","WithError"];export{o as Default,s as Disabled,m as Required,l as WithError,t as WithLabel,c as WithRows,U as __namedExportsOrder,Q as default};
