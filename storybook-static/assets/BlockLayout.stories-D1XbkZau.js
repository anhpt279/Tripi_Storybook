import{j as e}from"./jsx-runtime-BjG_zV1W.js";import"./button-NcT16nQI.js";import{j as l}from"./block-layout-Dw9PdHLo.js";import{T as a}from"./form-BideY6ZX.js";import"./top-nav-DSY2LobA.js";import"./button-group-BGPHS66b.js";import"./color-palette-B17xLnjS.js";import"./city-select-BbWDj568.js";import"./cascader-D7FM2dTX.js";import"./tags-input-BS9oPatn.js";import"./toast-B5sNYK7O.js";import"./tags-Bw0lymRa.js";import"./index-OHqKpUGr.js";import"./index-A4AG4hhW.js";import"./index-DaSxx5jD.js";import"./utils-DagjsUos.js";import"./createLucideIcon-CH9xbzwY.js";const Y={title:"Layout/BlockLayout",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{padding:{control:{type:"select"},options:["sm","default"],description:"A reusable content container with consistent padding and shadow."},shadow:{control:{type:"select"},options:["none","sm"],description:"A reusable content container with consistent padding and shadow."},rounded:{control:{type:"select"},options:["md","lg"],description:"A reusable content container with consistent padding and shadow."},asChild:{control:{type:"boolean"},description:"Whether to render as a child element"}}},r=({padding:M="default",height:R="h-24"})=>{const D=M==="sm"?"16px":"24px";return e.jsx("div",{className:`${R} w-full bg-purple-100 border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center`,children:e.jsxs(a,{variant:"body",className:"text-purple-600 text-center",children:["content area",e.jsx("br",{}),"Padding: ",D,e.jsx("br",{}),"A reusable content panel with consistent spacing."]})})},d={args:{children:e.jsx(r,{})}},s={args:{padding:"sm",children:e.jsx(r,{padding:"sm",height:"h-20"})}},n={args:{padding:"default",children:e.jsx(r,{padding:"default",height:"h-24"})}},t={args:{shadow:"none",children:e.jsx(r,{height:"h-20"})}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"body",className:"mb-2 font-medium",children:"rounded-md"}),e.jsx(l,{rounded:"md",children:e.jsx(r,{height:"h-16"})})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"body",className:"mb-2 font-medium",children:"rounded-lg (Default)"}),e.jsx(l,{rounded:"lg",children:e.jsx(r,{height:"h-16"})})]})]})},i={args:{padding:"default",shadow:"sm",rounded:"lg",children:e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col space-y-1.5",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"Total Revenue"}),e.jsx("div",{className:"font-medium tracking-tight text-3xl",children:"$15,231.89"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"+20.1% from last month"})]})})},parameters:{docs:{description:{story:"Content panel with rounded border, themed background, and subtle shadow"}}}},c={args:{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"h3",children:"main container (24px Padding)"}),e.jsx(l,{padding:"sm",shadow:"none",rounded:"lg",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{variant:"body",children:"sample (16px Padding)"}),e.jsx(r,{padding:"sm",height:"h-16"})]})})]})}};var m,p,h;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <ContentAreaMarker />
  }
}`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var g,u,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    padding: 'sm',
    children: <ContentAreaMarker padding="sm" height="h-20" />
  }
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,v,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    padding: 'default',
    children: <ContentAreaMarker padding="default" height="h-24" />
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,b,N;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    shadow: 'none',
    children: <ContentAreaMarker height="h-20" />
  }
}`,...(N=(b=t.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var w,k,T;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <div>\r
        <Typography variant="body" className="mb-2 font-medium">rounded-md</Typography>\r
        <BlockLayout rounded="md">\r
          <ContentAreaMarker height="h-16" />\r
        </BlockLayout>\r
      </div>\r
      <div>\r
        <Typography variant="body" className="mb-2 font-medium">rounded-lg (Default)</Typography>\r
        <BlockLayout rounded="lg">\r
          <ContentAreaMarker height="h-16" />\r
        </BlockLayout>\r
      </div>\r
    </div>
}`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var C,S,A;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    padding: 'default',
    shadow: 'sm',
    rounded: 'lg',
    children: <div>\r
        <div className="flex flex-col space-y-1.5">\r
          <div className="text-sm text-muted-foreground">Total Revenue</div>\r
          <div className="font-medium tracking-tight text-3xl">$15,231.89</div>\r
          <div className="text-sm text-muted-foreground">+20.1% from last month</div>\r
        </div>\r
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Content panel with rounded border, themed background, and subtle shadow'
      }
    }
  }
}`,...(A=(S=i.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var L,P,B;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: <div className="space-y-4">\r
        <Typography variant="h3">main container (24px Padding)</Typography>\r
        <BlockLayout padding="sm" shadow="none" rounded="lg">\r
          <div className="space-y-2">\r
            <Typography variant="body">sample (16px Padding)</Typography>\r
            <ContentAreaMarker padding="sm" height="h-16" />\r
          </div>\r
        </BlockLayout>\r
      </div>
  }
}`,...(B=(P=c.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const Z=["Default","SmallPadding","LargePadding","NoShadow","RoundedVariants","ReferenceStyle","NestedContainers"];export{d as Default,n as LargePadding,c as NestedContainers,t as NoShadow,i as ReferenceStyle,o as RoundedVariants,s as SmallPadding,Z as __namedExportsOrder,Y as default};
