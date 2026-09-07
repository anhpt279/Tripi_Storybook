import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as R}from"./index-Bc2G9s8g.js";import{C as u}from"./city-select-iHhPfZGT.js";import"./utils-CJDSjbh9.js";import"./index-BO6cjGmN.js";import"./index-DQ332JpS.js";import"./tags--LNP6sCy.js";import"./createLucideIcon-Si29XmKi.js";import"./cascader-UwHOzAH5.js";const Q={title:"Data Entry/CitySelect",component:u,parameters:{layout:"centered",docs:{description:{component:"location selector Select location selector Cascader Select a location（Select a location, location selector）. Select a location. "}}},tags:["autodocs"],argTypes:{level:{control:{type:"radio"},options:["province","city","area"],description:"Example: province（location selector）, city（location selector）, area（location selector）"},disabled:{control:{type:"boolean"},description:"Example description"},width:{control:{type:"radio"},options:["auto","full"],description:"Example description"},changeOnSelect:{control:{type:"boolean"},description:"Select a location. Select a location"}}},a=p=>{const[t,m]=R.useState({});return e.jsxs("div",{className:"w-96",children:[e.jsx(u,{...p,value:t,onValueChange:m}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded text-sm",children:[e.jsx("div",{className:"font-medium mb-2",children:"Example: "}),e.jsx("pre",{className:"text-xs",children:JSON.stringify(t,null,2)})]})]})},o={render:a,args:{level:"area",placeholder:"Enter a value",width:"auto"}},r={render:a,args:{level:"province",placeholder:"Enter a value",width:"auto"},parameters:{docs:{description:{story:"Select a location. location selector Select Select a location. "}}}},l={render:a,args:{level:"city",placeholder:"Enter a value",width:"auto"},parameters:{docs:{description:{story:"Select a location. location selector Cascader Select a location. "}}}},c={render:a,args:{level:"area",placeholder:"Enter a value",width:"auto"},parameters:{docs:{description:{story:"Select a location. location selector Cascader Select a location. "}}}},n={render:a,args:{level:"area",width:"full"},parameters:{docs:{description:{story:"Select a location. "}}}},s={render:a,args:{level:"area",disabled:!0,width:"auto"},parameters:{docs:{description:{story:"Select a location. "}}}},i={render:p=>{const[t,m]=R.useState({province:{code:"110000",name:"location selector"},city:{code:"110100",name:"location selector"},area:{code:"110101",name:"location selector"}});return e.jsxs("div",{className:"w-96",children:[e.jsx(u,{...p,value:t,onValueChange:m}),e.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded text-sm",children:[e.jsx("div",{className:"font-medium mb-2",children:"Example: "}),e.jsx("pre",{className:"text-xs",children:JSON.stringify(t,null,2)})]})]})},args:{level:"area",width:"auto"},parameters:{docs:{description:{story:"Select a location. "}}}},d={render:a,args:{level:"city",placeholder:"Enter a value",width:"auto",changeOnSelect:!0},parameters:{docs:{description:{story:'location selector"location selector"Select a location. location selector changeOnSelect Select a location. location selector（Select a location）, location selector"location selector"Select a location. Select a location"location selector → location selector"Select a location. '}}}};var S,v,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'area',
    placeholder: 'Enter a value',
    width: 'auto'
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,y,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'province',
    placeholder: 'Enter a value',
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. location selector Select Select a location. '
      }
    }
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,w,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'city',
    placeholder: 'Enter a value',
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. location selector Cascader Select a location. '
      }
    }
  }
}`,...(E=(w=l.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var f,N,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'area',
    placeholder: 'Enter a value',
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. location selector Cascader Select a location. '
      }
    }
  }
}`,...(b=(N=c.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var O,j,V;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'area',
    width: 'full'
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. '
      }
    }
  }
}`,...(V=(j=n.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var T,D,W;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'area',
    disabled: true,
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. '
      }
    }
  }
}`,...(W=(D=s.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var L,J,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => {
    const [value, setValue] = useState<CitySelectValue>({
      province: {
        code: '110000',
        name: 'location selector'
      },
      city: {
        code: '110100',
        name: 'location selector'
      },
      area: {
        code: '110101',
        name: 'location selector'
      }
    });
    return <div className="w-96">\r
        <CitySelect {...args} value={value} onValueChange={setValue} />\r
        <div className="mt-4 p-3 bg-gray-50 rounded text-sm">\r
          <div className="font-medium mb-2">Example: </div>\r
          <pre className="text-xs">{JSON.stringify(value, null, 2)}</pre>\r
        </div>\r
      </div>;
  },
  args: {
    level: 'area',
    width: 'auto'
  },
  parameters: {
    docs: {
      description: {
        story: 'Select a location. '
      }
    }
  }
}`,...(A=(J=i.parameters)==null?void 0:J.docs)==null?void 0:A.source}}};var F,P,_;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    level: 'city',
    placeholder: 'Enter a value',
    width: 'auto',
    changeOnSelect: true
  },
  parameters: {
    docs: {
      description: {
        story: 'location selector"location selector"Select a location. location selector changeOnSelect Select a location. location selector（Select a location）, location selector"location selector"Select a location. Select a location"location selector → location selector"Select a location. '
      }
    }
  }
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const U=["Default","ProvinceOnly","CityLevel","AreaLevel","FullWidth","Disabled","WithDefaultValue","CitySelectionWithChangeOnSelect"];export{c as AreaLevel,l as CityLevel,d as CitySelectionWithChangeOnSelect,o as Default,s as Disabled,n as FullWidth,r as ProvinceOnly,i as WithDefaultValue,U as __namedExportsOrder,Q as default};
