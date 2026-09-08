import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as G}from"./index-Bc2G9s8g.js";import{B as t,a as n}from"./button-BaFs26jy.js";import"./form-CZeh-vxi.js";import"./top-nav-tlAE2T-F.js";import"./block-layout-CN-wBIVs.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-ye53cQ2m.js";import"./cascader-uB5K2ixH.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import{c as _}from"./createLucideIcon-Si29XmKi.js";import{T as M,P as g}from"./trash-2-Cmy0WG0p.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./chevron-right-ByHdH1N4.js";import"./search-CHUBTwRr.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=_("ArchiveX",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]),de={title:"Base/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","destructive","outline","secondary","ghost","link"]},size:{control:{type:"select"},options:["default","sm","lg","withicon","sm-icon"]},disabled:{control:"boolean"},asChild:{control:"boolean"},tooltip:{control:"text",description:"Tooltip text shown when the button is hovered"}}},a={args:{children:"Button"}},r={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"link",children:"Link"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs(t,{children:[e.jsx(g,{className:"h-4 w-4"}),"Create task"]}),e.jsxs(t,{variant:"outline",children:[e.jsx(g,{className:"h-4 w-4"}),"Add project"]})]})},o={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{size:"sm-icon",variant:"ghost",tooltip:"Archive item",children:e.jsx(h,{className:"h-4 w-4"})}),e.jsx(t,{size:"sm-icon",variant:"ghost",tooltip:"Delete item",children:e.jsx(M,{className:"h-4 w-4"})}),e.jsx(t,{size:"withicon",variant:"ghost",tooltip:"Archive item",children:e.jsx(h,{className:"h-4 w-4"})})]})},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{children:"Normal"}),e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(n,{loading:!0,children:"Loading"})]})},d={render:()=>{const[m,u]=G.useState(!1),V=()=>{u(!0),setTimeout(()=>{u(!1)},2e3)};return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(n,{loading:!0,loadingText:"Saving...",children:"Save"}),e.jsx(n,{loading:!1,children:"Continue"}),e.jsx(n,{loading:!0,variant:"secondary",children:"Sync data"}),e.jsx(n,{loading:!0,variant:"outline",loadingText:"Publishing...",children:"Publish"})]}),e.jsxs("div",{className:"border-t pt-4",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(n,{loading:m,onClick:V,loadingText:"Submitting...",children:"Submit form"}),e.jsx(t,{variant:"outline",onClick:()=>u(!1),disabled:!m,size:"sm",children:"Cancel"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"The loading state resets after 2 seconds."})]})]})}},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(n,{loading:!0,size:"sm",loadingText:"Small",children:"Small"}),e.jsx(n,{loading:!0,size:"default",loadingText:"Default",children:"Default"}),e.jsx(n,{loading:!0,size:"lg",loadingText:"Large",children:"Large"})]})};var p,x,v;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var f,B,j;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Button variant="default">Default</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="destructive">Destructive</Button>\r
      <Button variant="outline">Outline</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="link">Link</Button>\r
    </div>
}`,...(j=(B=r.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var L,S,N;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">\r
      <Button size="sm">Small</Button>\r
      <Button size="default">Default</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,...(N=(S=s.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,z,b;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Button>\r
        <Plus className="h-4 w-4" />\r
        Create task\r
      </Button>\r
      <Button variant="outline">\r
        <Plus className="h-4 w-4" />\r
        Add project\r
      </Button>\r
    </div>
}`,...(b=(z=i.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var T,W,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">\r
      <Button size="sm-icon" variant="ghost" tooltip="Archive item">\r
        <ArchiveX className="h-4 w-4" />\r
      </Button>\r
      <Button size="sm-icon" variant="ghost" tooltip="Delete item">\r
        <Trash2 className="h-4 w-4" />\r
      </Button>\r
      <Button size="withicon" variant="ghost" tooltip="Archive item">\r
        <ArchiveX className="h-4 w-4" />\r
      </Button>\r
    </div>
}`,...(y=(W=o.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var k,D,C;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">\r
      <Button>Normal</Button>\r
      <Button disabled>Disabled</Button>\r
      <ButtonWithLoading loading>Loading</ButtonWithLoading>\r
    </div>
}`,...(C=(D=l.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,I,P;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
      setIsLoading(true);
      // Simulate an asynchronous submit action.
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    return <div className="flex flex-col gap-4">\r
        <div className="flex flex-wrap gap-2">\r
          <ButtonWithLoading loading loadingText="Saving...">Save</ButtonWithLoading>\r
          <ButtonWithLoading loading={false}>Continue</ButtonWithLoading>\r
          <ButtonWithLoading loading variant="secondary">Sync data</ButtonWithLoading>\r
          <ButtonWithLoading loading variant="outline" loadingText="Publishing...">Publish</ButtonWithLoading>\r
        </div>\r
\r
        <div className="border-t pt-4">\r
          <div className="flex gap-2 items-center">\r
            <ButtonWithLoading loading={isLoading} onClick={handleSubmit} loadingText="Submitting...">\r
              Submit form\r
            </ButtonWithLoading>\r
            <Button variant="outline" onClick={() => setIsLoading(false)} disabled={!isLoading} size="sm">\r
              Cancel\r
            </Button>\r
          </div>\r
          <p className="text-xs text-muted-foreground mt-2">\r
            The loading state resets after 2 seconds.\r
          </p>\r
        </div>\r
      </div>;
  }
}`,...(P=(I=d.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var X,E,O;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-2">\r
      <ButtonWithLoading loading size="sm" loadingText="Small">Small</ButtonWithLoading>\r
      <ButtonWithLoading loading size="default" loadingText="Default">Default</ButtonWithLoading>\r
      <ButtonWithLoading loading size="lg" loadingText="Large">Large</ButtonWithLoading>\r
    </div>
}`,...(O=(E=c.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const ce=["Default","Variants","Sizes","WithIcons","IconButtons","States","LoadingButton","LoadingSizes"];export{a as Default,o as IconButtons,d as LoadingButton,c as LoadingSizes,s as Sizes,l as States,r as Variants,i as WithIcons,ce as __namedExportsOrder,de as default};
