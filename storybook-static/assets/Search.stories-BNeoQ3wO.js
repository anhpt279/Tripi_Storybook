import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as m}from"./index-Bc2G9s8g.js";import"./button-BaFs26jy.js";import"./form-CZeh-vxi.js";import"./top-nav-tlAE2T-F.js";import{S as o}from"./block-layout-CN-wBIVs.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-ye53cQ2m.js";import"./cascader-uB5K2ixH.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";import"./chevron-right-ByHdH1N4.js";import"./search-CHUBTwRr.js";const M={title:"Data Entry/Search",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","full"]}}},r={args:{placeholder:"Search..."}},t={args:{placeholder:"Search...",variant:"full"},parameters:{layout:"padded"}},s={render:()=>e.jsxs("div",{className:"space-y-4 max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium",children:"Compact width (256px)"}),e.jsx(o,{variant:"default",placeholder:"Enter a value"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium",children:"Search users"}),e.jsx(o,{variant:"full",placeholder:"Enter a value"})]})]}),parameters:{layout:"padded"}},l={render:()=>{const[d,c]=m.useState(""),[n,C]=m.useState([]),w=a=>{a.trim()&&!n.includes(a)&&C(i=>[a,...i.slice(0,4)])},E=()=>{c("")};return e.jsxs("div",{className:"w-96 space-y-4",children:[e.jsx(o,{placeholder:"Search input examples...",value:d,onChange:a=>c(a.target.value),onKeyDown:a=>{a.key==="Enter"&&w(d)},onClear:E}),n.length>0&&e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium mb-2",children:"Search with clear action"}),e.jsx("div",{className:"space-y-1",children:n.map((a,i)=>e.jsx("button",{className:"block w-full text-left text-sm p-2 rounded hover:bg-muted",onClick:()=>c(a),children:a},i))})]})]})}};var p,u,h;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...'
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,x,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search...',
    variant: 'full'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,y,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-4xl">\r
      <div>\r
        <label className="text-sm font-medium">Compact width (256px)</label>\r
        <SearchInput variant="default" placeholder="Enter a value" />\r
      </div>\r
      <div>\r
        <label className="text-sm font-medium">Search users</label>\r
        <SearchInput variant="full" placeholder="Enter a value" />\r
      </div>\r
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var b,j,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const handleSearch = (searchValue: string) => {
      if (searchValue.trim() && !searchHistory.includes(searchValue)) {
        setSearchHistory(prev => [searchValue, ...prev.slice(0, 4)]);
      }
    };
    const handleClear = () => {
      setValue('');
    };
    return <div className="w-96 space-y-4">\r
        <SearchInput placeholder="Search input examples..." value={value} onChange={e => setValue(e.target.value)} onKeyDown={e => {
        if (e.key === 'Enter') {
          handleSearch(value);
        }
      }} onClear={handleClear} />\r
\r
        {searchHistory.length > 0 && <div>\r
            <h4 className="text-sm font-medium mb-2">Search with clear action</h4>\r
            <div className="space-y-1">\r
              {searchHistory.map((item, index) => <button key={index} className="block w-full text-left text-sm p-2 rounded hover:bg-muted" onClick={() => setValue(item)}>\r
                  {item}\r
                </button>)}\r
            </div>\r
          </div>}\r
      </div>;
  }
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const P=["Default","FullWidth","WidthComparison","Interactive"];export{r as Default,t as FullWidth,l as Interactive,s as WidthComparison,P as __namedExportsOrder,M as default};
