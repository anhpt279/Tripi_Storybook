import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{R as b}from"./index-Bc2G9s8g.js";import"./button-BaFs26jy.js";import"./form-D5NF78QM.js";import"./top-nav-tlAE2T-F.js";import{C as a,a as c}from"./block-layout-Bc2hpV2c.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-iHhPfZGT.js";import"./cascader-UwHOzAH5.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";const T={title:"Data Entry/Checkbox",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}},t={render:s=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"default",...s}),e.jsx(c,{htmlFor:"default",children:"Receive product updates"})]})},l={render:()=>{const[s,h]=b.useState({newsletter:!0,marketing:!1,analytics:!0,essential:!0}),d=(r,u)=>{h(k=>({...k,[r]:u}))};return e.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-md",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Receive product updates"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"newsletter",checked:s.newsletter,onCheckedChange:r=>d("newsletter",r)}),e.jsx(c,{htmlFor:"newsletter",children:"Receive product updates"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"marketing",checked:s.marketing,onCheckedChange:r=>d("marketing",r)}),e.jsx(c,{htmlFor:"marketing",children:"Receive product updates"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"analytics",checked:s.analytics,onCheckedChange:r=>d("analytics",r)}),e.jsx(c,{htmlFor:"analytics",children:"Receive product updates"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{id:"essential",checked:s.essential,disabled:!0}),e.jsx(c,{htmlFor:"essential",children:"Sample label (Receive product updates)"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Receive product updates"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(a,{id:"terms",className:"mt-0.5"}),e.jsxs(c,{htmlFor:"terms",children:["Receive product updates",e.jsx("a",{href:"#",className:"text-primary underline",children:"Receive product updates"}),"Receive product updates",e.jsx("a",{href:"#",className:"text-primary underline",children:"Receive product updates"})]})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(a,{id:"updates",className:"mt-0.5"}),e.jsx(c,{htmlFor:"updates",children:"Receive product updates"})]})]})]}),e.jsxs("div",{className:"p-4 bg-muted rounded-lg",children:[e.jsx("h4",{className:"font-medium mb-2",children:"Example: "}),e.jsxs("ul",{className:"text-sm space-y-1 text-muted-foreground",children:[e.jsxs("li",{children:["Checkbox examples: ",(s.newsletter,"Checkbox examples")]}),e.jsxs("li",{children:["Checkbox examples: ",(s.marketing,"Checkbox examples")]}),e.jsxs("li",{children:["Checkbox examples: ",(s.analytics,"Checkbox examples")]}),e.jsxs("li",{children:["Checkbox examples: ",(s.essential,"Checkbox examples")]})]})]})]})},parameters:{docs:{description:{story:"Receive product updates. "}}}};var i,n,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div className="flex items-center gap-2">\r
      <Checkbox id="default" {...args} />\r
      <CheckboxLabel htmlFor="default">\r
        Receive product updates\r
      </CheckboxLabel>\r
    </div>
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var o,p,x;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [preferences, setPreferences] = React.useState({
      newsletter: true,
      marketing: false,
      analytics: true,
      essential: true
    });
    const handlePreferenceChange = (key: string, checked: boolean) => {
      setPreferences(prev => ({
        ...prev,
        [key]: checked
      }));
    };
    return <div className="flex flex-col gap-6 w-full max-w-md">\r
        <div className="space-y-4">\r
          <h3 className="text-lg font-medium">Receive product updates</h3>\r
          <div className="space-y-3">\r
            <div className="flex items-center gap-2">\r
              <Checkbox id="newsletter" checked={preferences.newsletter} onCheckedChange={checked => handlePreferenceChange('newsletter', checked as boolean)} />\r
              <CheckboxLabel htmlFor="newsletter">\r
                Receive product updates\r
              </CheckboxLabel>\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <Checkbox id="marketing" checked={preferences.marketing} onCheckedChange={checked => handlePreferenceChange('marketing', checked as boolean)} />\r
              <CheckboxLabel htmlFor="marketing">\r
                Receive product updates\r
              </CheckboxLabel>\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <Checkbox id="analytics" checked={preferences.analytics} onCheckedChange={checked => handlePreferenceChange('analytics', checked as boolean)} />\r
              <CheckboxLabel htmlFor="analytics">\r
                Receive product updates\r
              </CheckboxLabel>\r
            </div>\r
            <div className="flex items-center gap-2">\r
              <Checkbox id="essential" checked={preferences.essential} disabled />\r
              <CheckboxLabel htmlFor="essential">\r
                Sample label (Receive product updates)\r
              </CheckboxLabel>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="space-y-4">\r
          <h3 className="text-lg font-medium">Receive product updates</h3>\r
          <div className="space-y-3">\r
            <div className="flex items-start gap-2">\r
              <Checkbox id="terms" className="mt-0.5" />\r
              <CheckboxLabel htmlFor="terms">\r
                Receive product updates<a href="#" className="text-primary underline">Receive product updates</a>Receive product updates<a href="#" className="text-primary underline">Receive product updates</a>\r
              </CheckboxLabel>\r
            </div>\r
            <div className="flex items-start gap-2">\r
              <Checkbox id="updates" className="mt-0.5" />\r
              <CheckboxLabel htmlFor="updates">\r
                Receive product updates\r
              </CheckboxLabel>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="p-4 bg-muted rounded-lg">\r
          <h4 className="font-medium mb-2">Example: </h4>\r
          <ul className="text-sm space-y-1 text-muted-foreground">\r
            <li>Checkbox examples: {preferences.newsletter ? 'Checkbox examples' : 'Checkbox examples'}</li>\r
            <li>Checkbox examples: {preferences.marketing ? 'Checkbox examples' : 'Checkbox examples'}</li>\r
            <li>Checkbox examples: {preferences.analytics ? 'Checkbox examples' : 'Checkbox examples'}</li>\r
            <li>Checkbox examples: {preferences.essential ? 'Checkbox examples' : 'Checkbox examples'}</li>\r
          </ul>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Receive product updates. '
      }
    }
  }
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const q=["Default","Examples"];export{t as Default,l as Examples,q as __namedExportsOrder,T as default};
