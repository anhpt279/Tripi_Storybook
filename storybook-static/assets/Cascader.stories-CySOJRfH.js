import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as b}from"./index-OHqKpUGr.js";import{C as v}from"./cascader-D7FM2dTX.js";import"./utils-DagjsUos.js";import"./index-DaSxx5jD.js";import"./createLucideIcon-CH9xbzwY.js";const o=[{value:"electronics",label:"Electronics",children:[{value:"phones",label:"Electronics",children:[{value:"iphone",label:"iPhone"},{value:"samsung",label:"Samsung"},{value:"huawei",label:"Huawei"}]},{value:"computers",label:"Electronics",children:[{value:"laptop",label:"Electronics"},{value:"desktop",label:"Electronics"},{value:"tablet",label:"Electronics"}]},{value:"accessories",label:"Electronics",children:[{value:"charger",label:"Electronics"},{value:"case",label:"Electronics"},{value:"headphones",label:"Electronics"}]}]},{value:"clothing",label:"Electronics",children:[{value:"mens",label:"Electronics",children:[{value:"shirts",label:"Electronics"},{value:"pants",label:"Electronics"},{value:"shoes",label:"Electronics"}]},{value:"womens",label:"Electronics",children:[{value:"dresses",label:"Electronics"},{value:"tops",label:"Electronics"},{value:"skirts",label:"Electronics"}]}]},{value:"books",label:"Electronics",children:[{value:"fiction",label:"Electronics",children:[{value:"mystery",label:"Electronics"},{value:"romance",label:"Electronics"},{value:"scifi",label:"Science fiction"}]},{value:"nonfiction",label:"Electronics",children:[{value:"history",label:"History"},{value:"science",label:"Electronics"},{value:"biography",label:"Electronics"}]}]}],K=[{value:"frontend",label:"Electronics",children:[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"}]},{value:"backend",label:"Electronics",children:[{value:"nodejs",label:"Node.js"},{value:"python",label:"Python"},{value:"java",label:"Java"}]},{value:"mobile",label:"Electronics",children:[{value:"ios",label:"iOS"},{value:"android",label:"Android"},{value:"flutter",label:"Flutter"}]}],Q={title:"Data Entry/Cascader",component:v,parameters:{layout:"centered",docs:{description:{component:"Hierarchical selection control for choosing a value from nested options."}}},tags:["autodocs"],argTypes:{width:{control:{type:"radio"},options:["auto","fill"],description:"Controls whether the selector uses its content width or fills the container."},maxLevel:{control:{type:"radio"},options:[2,3],description:"Limits how many levels of the option tree can be selected."},disabled:{control:{type:"boolean"},description:"Disables the selector when the value should not be changed."},allowClear:{control:{type:"boolean"},description:"Shows a clear action for the current selection."}}},t=a=>{const[e,r]=b.useState([]);return l.jsxs("div",{className:"w-96 space-y-4",children:[l.jsx(v,{...a,value:e,onChange:(n,H)=>{r(n),console.log("Selected path:",n),console.log("Selected options:",H)}}),l.jsxs("div",{className:"p-3 bg-gray-50 rounded text-sm",children:[l.jsx("div",{className:"font-medium mb-2",children:"Selected value"}),l.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:JSON.stringify({value:e,path:e.join(" > ")},null,2)})]})]})},s={render:t,args:{options:o,placeholder:"Enter a value",width:"auto",maxLevel:3,allowClear:!0}},i={render:t,args:{options:K,placeholder:"Enter a value",width:"auto",maxLevel:2,allowClear:!0},parameters:{docs:{description:{story:"Limits the selector to two levels of nested options."}}}},c={render:a=>{const[e,r]=b.useState([]);return l.jsxs("div",{className:"w-full max-w-md space-y-4",children:[l.jsx(v,{...a,value:e,onChange:r}),l.jsxs("div",{className:"p-3 bg-gray-50 rounded text-sm",children:[l.jsx("div",{className:"font-medium mb-2",children:"Selected value"}),l.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:JSON.stringify({value:e,path:e.join(" > ")},null,2)})]})]})},args:{options:o,placeholder:"Enter a value",width:"fill",maxLevel:3,allowClear:!0},parameters:{docs:{description:{story:"Expands the selector to fill the available container width."}}}},d={render:t,args:{options:o,placeholder:"Enter a value",width:"auto",maxLevel:3,disabled:!0,allowClear:!0},parameters:{docs:{description:{story:"Prevents changes while the selector is disabled."}}}},u={render:t,args:{options:o,placeholder:"Enter a value",width:"auto",maxLevel:3,allowClear:!1},parameters:{docs:{description:{story:"Keeps the current selection without rendering a clear action."}}}},p={render:a=>{const[e,r]=b.useState(["electronics","phones","iphone"]);return l.jsxs("div",{className:"w-96 space-y-4",children:[l.jsx(v,{...a,value:e,onChange:r}),l.jsxs("div",{className:"p-3 bg-gray-50 rounded text-sm",children:[l.jsx("div",{className:"font-medium mb-2",children:"Selected value"}),l.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:JSON.stringify({value:e,path:e.join(" > ")},null,2)})]})]})},args:{options:o,placeholder:"Enter a value",width:"auto",maxLevel:3,allowClear:!0},parameters:{docs:{description:{story:"Starts with a nested product option already selected."}}}},m={render:t,args:{options:[{value:"category1",label:"Electronics",children:[{value:"item1",label:"Item 1"},{value:"item2",label:"Wireless headphones (disabled)",disabled:!0},{value:"item3",label:"Third option"}]},{value:"category2",label:"Accessories (disabled)",disabled:!0,children:[{value:"item4",label:"Item 4"},{value:"item5",label:"Item 5"}]},{value:"category3",label:"Electronics",children:[{value:"item6",label:"Item 6"},{value:"item7",label:"Item 7"}]}],placeholder:"Enter a value",width:"auto",maxLevel:2,allowClear:!0},parameters:{docs:{description:{story:"Demonstrates disabled categories and individual options."}}}},h={render:t,args:{options:[{value:"short",label:"Electronics",children:[{value:"short1",label:"Short item 1"},{value:"short2",label:"Second option"}]},{value:"medium",label:"Electronics",children:Array.from({length:8},(a,e)=>({value:`medium${e+1}`,label:`Medium option ${e+1}`}))},{value:"long",label:"Electronics",children:Array.from({length:20},(a,e)=>({value:`long${e+1}`,label:`Long option ${e+1}`,children:e<3?Array.from({length:15},(r,n)=>({value:`long${e+1}_sub${n+1}`,label:`Sub-option ${e+1}.${n+1}`})):void 0}))}],placeholder:"Enter a value",width:"auto",maxLevel:3,allowClear:!0},parameters:{docs:{description:{story:"Demonstrates short, medium, and long option columns with nested children."}}}};var g,w,E;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    allowClear: true
  }
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var y,x,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: twoLevelOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 2,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Limits the selector to two levels of nested options.'
      }
    }
  }
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var C,S,L;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => {
    const [value, setValue] = useState<CascaderValue>([]);
    return <div className="w-full max-w-md space-y-4">\r
        <Cascader {...args} value={value} onChange={setValue} />\r
        <div className="p-3 bg-gray-50 rounded text-sm">\r
          <div className="font-medium mb-2">Selected value</div>\r
          <pre className="text-xs whitespace-pre-wrap">\r
            {JSON.stringify({
            value,
            path: value.join(' > ')
          }, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  },
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'fill',
    maxLevel: 3,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Expands the selector to fill the available container width.'
      }
    }
  }
}`,...(L=(S=c.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var N,j,O;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    disabled: true,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Prevents changes while the selector is disabled.'
      }
    }
  }
}`,...(O=(j=d.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var D,$,T;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    allowClear: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Keeps the current selection without rendering a clear action.'
      }
    }
  }
}`,...(T=($=u.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var V,k,A;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: any) => {
    const [value, setValue] = useState<CascaderValue>(['electronics', 'phones', 'iphone']);
    return <div className="w-96 space-y-4">\r
        <Cascader {...args} value={value} onChange={setValue} />\r
        <div className="p-3 bg-gray-50 rounded text-sm">\r
          <div className="font-medium mb-2">Selected value</div>\r
          <pre className="text-xs whitespace-pre-wrap">\r
            {JSON.stringify({
            value,
            path: value.join(' > ')
          }, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  },
  args: {
    options: mockOptions,
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Starts with a nested product option already selected.'
      }
    }
  }
}`,...(A=(k=p.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var I,_,W;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: [{
      value: 'category1',
      label: 'Electronics',
      children: [{
        value: 'item1',
        label: 'Item 1'
      }, {
        value: 'item2',
        label: 'Wireless headphones (disabled)',
        disabled: true
      }, {
        value: 'item3',
        label: 'Third option'
      }]
    }, {
      value: 'category2',
      label: 'Accessories (disabled)',
      disabled: true,
      children: [{
        value: 'item4',
        label: 'Item 4'
      }, {
        value: 'item5',
        label: 'Item 5'
      }]
    }, {
      value: 'category3',
      label: 'Electronics',
      children: [{
        value: 'item6',
        label: 'Item 6'
      }, {
        value: 'item7',
        label: 'Item 7'
      }]
    }],
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 2,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates disabled categories and individual options.'
      }
    }
  }
}`,...(W=(_=m.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var J,P,F;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: ControlledTemplate,
  args: {
    options: [{
      value: 'short',
      label: 'Electronics',
      children: [{
        value: 'short1',
        label: 'Short item 1'
      }, {
        value: 'short2',
        label: 'Second option'
      }]
    }, {
      value: 'medium',
      label: 'Electronics',
      children: Array.from({
        length: 8
      }, (_, i) => ({
        value: \`medium\${i + 1}\`,
        label: \`Medium option \${i + 1}\`
      }))
    }, {
      value: 'long',
      label: 'Electronics',
      children: Array.from({
        length: 20
      }, (_, i) => ({
        value: \`long\${i + 1}\`,
        label: \`Long option \${i + 1}\`,
        children: i < 3 ? Array.from({
          length: 15
        }, (_, j) => ({
          value: \`long\${i + 1}_sub\${j + 1}\`,
          label: \`Sub-option \${i + 1}.\${j + 1}\`
        })) : undefined
      }))
    }],
    placeholder: 'Enter a value',
    width: 'auto',
    maxLevel: 3,
    allowClear: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates short, medium, and long option columns with nested children.'
      }
    }
  }
}`,...(F=(P=h.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};const U=["Default","TwoLevel","FillWidth","Disabled","NoClear","WithDefaultValue","WithDisabledOptions","DifferentColumnLengths"];export{s as Default,h as DifferentColumnLengths,d as Disabled,c as FillWidth,u as NoClear,i as TwoLevel,p as WithDefaultValue,m as WithDisabledOptions,U as __namedExportsOrder,Q as default};
