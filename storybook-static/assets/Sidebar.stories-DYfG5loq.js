import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as d}from"./index-Bc2G9s8g.js";import"./button-BaFs26jy.js";import"./form-D5NF78QM.js";import"./top-nav-tlAE2T-F.js";import{t}from"./block-layout-Bc2hpV2c.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-iHhPfZGT.js";import"./cascader-UwHOzAH5.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";const y={title:"Navigation/Sidebar",component:t,parameters:{layout:"fullscreen"},argTypes:{collapsed:{control:"boolean",description:"Whether the sidebar is collapsed"},className:{control:"text",description:"Sidebar examples CSS Sidebar examples"}}},r={args:{collapsed:!1},render:s=>{const[a,p]=d.useState(s.collapsed||!1);return e.jsxs("div",{className:"flex h-screen w-full bg-background",children:[e.jsx("div",{children:e.jsx(t,{...s,collapsed:a,onCollapsedChange:p})}),e.jsxs("div",{className:"flex-1 p-6",children:[e.jsx("h1",{className:"text-2xl font-medium mb-4",children:"Navigation preview"}),e.jsx("p",{className:"text-muted-foreground",children:"Navigation preview. Sidebar examples Sidebar Navigation preview."}),e.jsxs("p",{className:"text-muted-foreground mt-2",children:["Sidebar examples",a?"Logo Sidebar examples":"Sidebar examples","Sidebar examples","Sidebar examples","Navigation preview."]}),e.jsxs("p",{className:"text-muted-foreground mt-2",children:["Example: ","Sidebar examples"]})]})]})}};var l,i,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    collapsed: false
  },
  render: args => {
    const [collapsed, setCollapsed] = useState(args.collapsed || false);
    return <div className="flex h-screen w-full bg-background">\r
        <div>\r
          <Sidebar {...args} collapsed={collapsed} onCollapsedChange={setCollapsed} />\r
        </div>\r
        <div className="flex-1 p-6">\r
          <h1 className="text-2xl font-medium mb-4">Navigation preview</h1>\r
          <p className="text-muted-foreground">\r
            Navigation preview. Sidebar examples Sidebar Navigation preview.\r
          </p>\r
          <p className="text-muted-foreground mt-2">\r
            Sidebar examples{collapsed ? 'Logo Sidebar examples' : 'Sidebar examples'}Sidebar examples{collapsed ? 'Sidebar examples' : 'Sidebar examples'}Navigation preview.\r
          </p>\r
          <p className="text-muted-foreground mt-2">\r
            Example: {collapsed ? 'Sidebar examples' : 'Sidebar examples'}\r
          </p>\r
        </div>\r
      </div>;
  }
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,y as default};
