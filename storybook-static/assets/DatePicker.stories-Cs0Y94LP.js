import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r}from"./index-Bc2G9s8g.js";import"./button-BaFs26jy.js";import"./form-D5NF78QM.js";import"./top-nav-tlAE2T-F.js";import{D as n,b as x}from"./block-layout-Bc2hpV2c.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-iHhPfZGT.js";import"./cascader-UwHOzAH5.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";const G={title:"Data Entry/DatePicker",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Select a date or date range using the calendar."},disabled:{control:"boolean",description:"Select a date or date range using the calendar."},formatStr:{control:"text",description:"Select a date or date range using the calendar."},width:{control:"select",options:["auto","full"],description:"Select a date or date range using the calendar."},showDropdowns:{control:"boolean",description:"Select a date or date range using the calendar."}}},s={render:a=>{const[t,l]=r.useState(void 0);return e.jsx(n,{...a,value:t,onChange:l})},args:{placeholder:"Enter a value",width:"auto",showDropdowns:!0}},d={render:()=>{const[a,t]=r.useState(void 0);return e.jsx(x,{value:a,onChange:t,placeholder:"Enter a value",width:"auto",showDropdowns:!0})}},o={render:()=>{const[a,t]=r.useState(void 0),[l,w]=r.useState(new Date),[f,j]=r.useState(void 0);return e.jsxs("div",{className:"space-y-6 w-full max-w-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Single date"}),e.jsx(n,{value:a,onChange:t,placeholder:"Enter a value",width:"auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Date range"}),e.jsx(n,{value:l,onChange:w,placeholder:"Enter a value",width:"auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Full-width picker"}),e.jsx(n,{disabled:!0,placeholder:"Enter a value",width:"auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Custom date format"}),e.jsx(n,{value:a,onChange:t,placeholder:"Enter a value",width:"full"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Disabled picker"}),e.jsx(x,{value:f,onChange:j,placeholder:"Enter a value",width:"auto"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Calendar dropdowns"}),e.jsx(n,{value:a,onChange:t,placeholder:"Enter a value",showDropdowns:!1,width:"auto"})]})]})}};var i,c,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    return <DatePicker {...args} value={date} onChange={setDate} />;
  },
  args: {
    placeholder: 'Enter a value',
    width: 'auto',
    showDropdowns: true
  }
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,h,p;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
    return <DateRangePicker value={dateRange} onChange={setDateRange} placeholder="Enter a value" width="auto" showDropdowns={true} />;
  }
}`,...(p=(h=d.parameters)==null?void 0:h.docs)==null?void 0:p.source}}};var g,v,D;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [date1, setDate1] = useState<Date | undefined>(undefined);
    const [date2, setDate2] = useState<Date | undefined>(new Date());
    const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
    return <div className="space-y-6 w-full max-w-lg">\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Single date</h3>\r
          <DatePicker value={date1} onChange={setDate1} placeholder="Enter a value" width="auto" />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Date range</h3>\r
          <DatePicker value={date2} onChange={setDate2} placeholder="Enter a value" width="auto" />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Full-width picker</h3>\r
          <DatePicker disabled placeholder="Enter a value" width="auto" />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Custom date format</h3>\r
          <DatePicker value={date1} onChange={setDate1} placeholder="Enter a value" width="full" />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Disabled picker</h3>\r
          <DateRangePicker value={dateRange} onChange={setDateRange} placeholder="Enter a value" width="auto" />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-sm font-medium mb-2">Calendar dropdowns</h3>\r
          <DatePicker value={date1} onChange={setDate1} placeholder="Enter a value" showDropdowns={false} width="auto" />\r
        </div>\r
      </div>;
  }
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const H=["Default","RangePicker","Examples"];export{s as Default,o as Examples,d as RangePicker,H as __namedExportsOrder,G as default};
