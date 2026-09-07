import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as n}from"./index-Bc2G9s8g.js";import"./button-BaFs26jy.js";import"./form-D5NF78QM.js";import"./top-nav-tlAE2T-F.js";import{F as a}from"./block-layout-Bc2hpV2c.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-iHhPfZGT.js";import"./cascader-UwHOzAH5.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";const K={title:"Data Display/Filter",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},size:{control:{type:"radio"},options:["sm","default","lg"]},allowMultiple:{control:{type:"boolean"}}}},r={render:s=>{const[l,t]=n.useState([]),c=[{value:"all",label:"All"},{value:"pending",label:"Pending"},{value:"processing",label:"Pending"},{value:"completed",label:"Pending"},{value:"cancelled",label:"Pending"}];return e.jsxs("div",{className:"w-96",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Order status"}),e.jsx(a,{...s,options:c,selectedValues:l,onSelectedValuesChange:t})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["sample: ",l.length>0?l.join(", "):"sample"]})]})},args:{orientation:"horizontal",size:"default",allowMultiple:!0}},d={render:()=>{const[s,l]=n.useState(["medium"]),t=[{value:"low",label:"Pending"},{value:"medium",label:"Pending"},{value:"high",label:"Pending"},{value:"urgent",label:"Pending"}];return e.jsxs("div",{className:"w-96",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Priority filter"}),e.jsx(a,{options:t,selectedValues:s,onSelectedValuesChange:l,allowMultiple:!1})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["sample: ",s.length>0?s.join(", "):"sample"]})]})}},i={render:()=>{const[s,l]=n.useState(["frontend"]),[t,c]=n.useState(["backend"]),[y,z]=n.useState(["mobile"]),m=[{value:"frontend",label:"Pending"},{value:"backend",label:"Pending"},{value:"mobile",label:"Pending"},{value:"devops",label:"DevOps"}];return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Order status"}),e.jsx(a,{options:m,selectedValues:s,onSelectedValuesChange:l,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Order status"}),e.jsx(a,{options:m,selectedValues:t,onSelectedValuesChange:c,size:"default"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Order status"}),e.jsx(a,{options:m,selectedValues:y,onSelectedValuesChange:z,size:"lg"})]})]})}},o={render:()=>{const[s,l]=n.useState(["design","development"]),t=[{value:"design",label:"Pending"},{value:"development",label:"Pending"},{value:"testing",label:"Pending"},{value:"deployment",label:"Pending"},{value:"maintenance",label:"Pending"}];return e.jsxs("div",{className:"w-48",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Order status"}),e.jsx(a,{options:t,selectedValues:s,onSelectedValuesChange:l,orientation:"vertical"})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["sample: ",s.length>0?s.join(", "):"sample"]})]})}},u={render:()=>{const[s,l]=n.useState(["active"]),t=[{value:"active",label:"Pending"},{value:"inactive",label:"Pending"},{value:"pending",label:"Pending",disabled:!0},{value:"suspended",label:"Pending",disabled:!0},{value:"archived",label:"Pending"}];return e.jsxs("div",{className:"w-96",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Order status"}),e.jsx(a,{options:t,selectedValues:s,onSelectedValuesChange:l})]}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["sample: ",s.length>0?s.join(", "):"sample"]})]})}};var p,v,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const options: FilterOption[] = [{
      value: 'all',
      label: 'All'
    }, {
      value: 'pending',
      label: 'Pending'
    }, {
      value: 'processing',
      label: 'Pending'
    }, {
      value: 'completed',
      label: 'Pending'
    }, {
      value: 'cancelled',
      label: 'Pending'
    }];
    return <div className="w-96">\r
        <div className="mb-4">\r
          <h3 className="text-sm font-medium mb-2">Order status</h3>\r
          <FilterGroup {...args} options={options} selectedValues={selectedValues} onSelectedValuesChange={setSelectedValues} />\r
        </div>\r
        <div className="text-xs text-muted-foreground">\r
          sample: {selectedValues.length > 0 ? selectedValues.join(', ') : 'sample'}\r
        </div>\r
      </div>;
  },
  args: {
    orientation: 'horizontal',
    size: 'default',
    allowMultiple: true
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var b,h,V;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['medium']);
    const options: FilterOption[] = [{
      value: 'low',
      label: 'Pending'
    }, {
      value: 'medium',
      label: 'Pending'
    }, {
      value: 'high',
      label: 'Pending'
    }, {
      value: 'urgent',
      label: 'Pending'
    }];
    return <div className="w-96">\r
        <div className="mb-4">\r
          <h3 className="text-sm font-medium mb-2">Priority filter</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues} onSelectedValuesChange={setSelectedValues} allowMultiple={false} />\r
        </div>\r
        <div className="text-xs text-muted-foreground">\r
          sample: {selectedValues.length > 0 ? selectedValues.join(', ') : 'sample'}\r
        </div>\r
      </div>;
  }
}`,...(V=(h=d.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var x,S,P;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues1, setSelectedValues1] = useState<string[]>(['frontend']);
    const [selectedValues2, setSelectedValues2] = useState<string[]>(['backend']);
    const [selectedValues3, setSelectedValues3] = useState<string[]>(['mobile']);
    const options: FilterOption[] = [{
      value: 'frontend',
      label: 'Pending'
    }, {
      value: 'backend',
      label: 'Pending'
    }, {
      value: 'mobile',
      label: 'Pending'
    }, {
      value: 'devops',
      label: 'DevOps'
    }];
    return <div className="space-y-6">\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Order status</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues1} onSelectedValuesChange={setSelectedValues1} size="sm" />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Order status</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues2} onSelectedValuesChange={setSelectedValues2} size="default" />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Order status</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues3} onSelectedValuesChange={setSelectedValues3} size="lg" />\r
        </div>\r
      </div>;
  }
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var f,j,N;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['design', 'development']);
    const options: FilterOption[] = [{
      value: 'design',
      label: 'Pending'
    }, {
      value: 'development',
      label: 'Pending'
    }, {
      value: 'testing',
      label: 'Pending'
    }, {
      value: 'deployment',
      label: 'Pending'
    }, {
      value: 'maintenance',
      label: 'Pending'
    }];
    return <div className="w-48">\r
        <div className="mb-4">\r
          <h3 className="text-sm font-medium mb-2">Order status</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues} onSelectedValuesChange={setSelectedValues} orientation="vertical" />\r
        </div>\r
        <div className="text-xs text-muted-foreground">\r
          sample: {selectedValues.length > 0 ? selectedValues.join(', ') : 'sample'}\r
        </div>\r
      </div>;
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,w,F;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['active']);
    const options: FilterOption[] = [{
      value: 'active',
      label: 'Pending'
    }, {
      value: 'inactive',
      label: 'Pending'
    }, {
      value: 'pending',
      label: 'Pending',
      disabled: true
    }, {
      value: 'suspended',
      label: 'Pending',
      disabled: true
    }, {
      value: 'archived',
      label: 'Pending'
    }];
    return <div className="w-96">\r
        <div className="mb-4">\r
          <h3 className="text-sm font-medium mb-2">Order status</h3>\r
          <FilterGroup options={options} selectedValues={selectedValues} onSelectedValuesChange={setSelectedValues} />\r
        </div>\r
        <div className="text-xs text-muted-foreground">\r
          sample: {selectedValues.length > 0 ? selectedValues.join(', ') : 'sample'}\r
        </div>\r
      </div>;
  }
}`,...(F=(w=u.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const Q=["Default","SingleSelect","Sizes","VerticalLayout","WithDisabledOptions"];export{r as Default,d as SingleSelect,i as Sizes,o as VerticalLayout,u as WithDisabledOptions,Q as __namedExportsOrder,K as default};
