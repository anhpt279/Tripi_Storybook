import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as V}from"./index-OHqKpUGr.js";import"./button-NcT16nQI.js";import"./block-layout-Dw9PdHLo.js";import"./form-BideY6ZX.js";import"./top-nav-DSY2LobA.js";import"./button-group-BGPHS66b.js";import"./color-palette-B17xLnjS.js";import{S as o,e as s,a as u,b as p,c,d as l,M as w,f as se,g as L,h as f,i as O}from"./city-select-BbWDj568.js";import"./cascader-D7FM2dTX.js";import"./tags-input-BS9oPatn.js";import"./toast-B5sNYK7O.js";import"./tags-Bw0lymRa.js";import{S as ce}from"./settings-PNgMeAzN.js";import{c as ie}from"./createLucideIcon-CH9xbzwY.js";import{M as de}from"./mail-DOHlxhzy.js";import"./index-A4AG4hhW.js";import"./index-DaSxx5jD.js";import"./utils-DagjsUos.js";/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue={name:"building-2",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]]};ue.node;const Se=ie(ue);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};pe.node;const me=ie(pe),Ge={title:"Data Entry/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"]},v={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"text-only",children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"option1",children:"Option 1"}),e.jsx(l,{value:"option2",children:"Option 2"}),e.jsx(l,{value:"option3",children:"Option 3"})]})]})})},h={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"with-icon",icon:e.jsx(ce,{className:"h-4 w-4"}),children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"basic",children:"Configuration option"}),e.jsx(l,{value:"advanced",children:"Configuration option"}),e.jsx(l,{value:"system",children:"Configuration option"})]})]})})},g={render:()=>{const[d,r]=V.useState([]),[T,M]=V.useState(!1),m=[{value:"frontend",label:"Frontend sample"},{value:"backend",label:"Backend sample"},{value:"fullstack",label:"Full Stack sample"},{value:"mobile",label:"Example option"},{value:"devops",label:"DevOps sample"},{value:"design",label:"UI/UX sample"}],D=m.reduce((n,t)=>(n[t.value]=t.label,n),{}),k=(n,t)=>{r(t?a=>[...a,n]:a=>a.filter(i=>i!==n))},E=n=>{r(t=>t.filter(a=>a!==n))};return e.jsx(s,{children:e.jsxs(o,{open:T,onOpenChange:M,children:[e.jsx(w,{display:"text-only",selectedValues:d,selectedLabels:D,onRemoveValue:E,placeholder:"Enter a value",maxDisplay:2}),e.jsx(c,{children:m.map(n=>e.jsx(se,{value:n.value,selected:d.includes(n.value),onToggle:k,children:n.label},n.value))})]})})}},x={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"with-icon",icon:e.jsx(Se,{className:"h-4 w-4"}),children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsxs(f,{children:[e.jsx(O,{children:"Configuration option"}),e.jsx(l,{value:"react",children:"React"}),e.jsx(l,{value:"vue",children:"Vue"}),e.jsx(l,{value:"angular",children:"Angular"})]}),e.jsx(L,{}),e.jsxs(f,{children:[e.jsx(O,{children:"Configuration option"}),e.jsx(l,{value:"nodejs",children:"Node.js"}),e.jsx(l,{value:"python",children:"Python"}),e.jsx(l,{value:"go",children:"Go"}),e.jsx(l,{value:"java",children:"Java"})]}),e.jsx(L,{}),e.jsxs(f,{children:[e.jsx(O,{children:"Configuration option"}),e.jsx(l,{value:"mysql",children:"MySQL"}),e.jsx(l,{value:"postgresql",children:"PostgreSQL"}),e.jsx(l,{value:"mongodb",children:"MongoDB"})]})]})]})})},j={render:()=>{const[d,r]=V.useState(["email","push"]),[T,M]=V.useState(!1),m={Channels:[{value:"email",label:"Email"},{value:"sms",label:"SMS"},{value:"push",label:"Push notifications"}],Frequency:[{value:"realtime",label:"Real-time"},{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"}],Topics:[{value:"system",label:"System"},{value:"security",label:"Security"},{value:"marketing",label:"Marketing"}]},k=Object.values(m).flat().reduce((t,a)=>(t[a.value]=a.label,t),{}),E=(t,a)=>{r(a?i=>[...i,t]:i=>i.filter(S=>S!==t))},n=t=>{r(a=>a.filter(i=>i!==t))};return e.jsx(s,{children:e.jsxs(o,{open:T,onOpenChange:M,children:[e.jsx(w,{display:"with-icon",icon:e.jsx(de,{className:"h-4 w-4"}),selectedValues:d,selectedLabels:k,onRemoveValue:n,placeholder:"Enter a value",maxDisplay:2}),e.jsx(c,{children:Object.entries(m).map(([t,a],i)=>e.jsxs("div",{children:[i>0&&e.jsx(L,{}),e.jsxs(f,{children:[e.jsx(O,{children:t}),a.map(S=>e.jsx(se,{value:S.value,selected:d.includes(S.value),onToggle:E,children:S.label},S.value))]})]},t))})]})})}},b={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"with-icon",icon:e.jsx(me,{className:"h-4 w-4"}),children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsx(c,{children:Array.from({length:20},(d,r)=>e.jsxs(l,{value:`country-${r}`,children:["sample ",r+1," - sample"]},r))})]})})},y={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs(o,{disabled:!0,children:[e.jsx(u,{display:"text-only",children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"option1",children:"Option 1"}),e.jsx(l,{value:"option2",children:"Option 2"})]})]})}),e.jsx(s,{children:e.jsxs(o,{disabled:!0,children:[e.jsx(w,{display:"with-icon",icon:e.jsx(ce,{className:"h-4 w-4"}),selectedValues:["option1","option2"],selectedLabels:{option1:"Option 1",option2:"Option 2"},placeholder:"Enter a value"}),e.jsxs(c,{children:[e.jsx(l,{value:"option1",children:"Option 1"}),e.jsx(l,{value:"option2",children:"Option 2"})]})]})})]})},I={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"text-only",children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"option1",children:"Configuration option"}),e.jsx(l,{value:"option2",disabled:!0,children:"Configuration option"}),e.jsx(l,{value:"option3",children:"Configuration option"}),e.jsx(l,{value:"option4",disabled:!0,children:"Configuration option"})]})]})})},C={parameters:{layout:"padded"},render:()=>e.jsx(s,{width:"full",children:e.jsxs(o,{children:[e.jsx(u,{children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"sample",children:"Configuration option"}),e.jsx(l,{value:"sample",children:"Configuration option"}),e.jsx(l,{value:"Other",children:"Other"}),e.jsx(l,{value:"sample",children:"Configuration option"})]})]})})};var G,R,N;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="text-only">\r
          <SelectValue placeholder="Enter a value" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="option1">Option 1</SelectItem>\r
          <SelectItem value="option2">Option 2</SelectItem>\r
          <SelectItem value="option3">Option 3</SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(N=(R=v.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var W,F,_;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="with-icon" icon={<Settings className="h-4 w-4" />}>\r
          <SelectValue placeholder="Enter a value" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="basic">Configuration option</SelectItem>\r
          <SelectItem value="advanced">Configuration option</SelectItem>\r
          <SelectItem value="system">Configuration option</SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(_=(F=h.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var q,B,P;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const options = [{
      value: 'frontend',
      label: 'Frontend sample'
    }, {
      value: 'backend',
      label: 'Backend sample'
    }, {
      value: 'fullstack',
      label: 'Full Stack sample'
    }, {
      value: 'mobile',
      label: 'Example option'
    }, {
      value: 'devops',
      label: 'DevOps sample'
    }, {
      value: 'design',
      label: 'UI/UX sample'
    }];
    const selectedLabels = options.reduce((acc, option) => {
      acc[option.value] = option.label;
      return acc;
    }, {} as Record<string, string>);
    const handleToggle = (value: string, selected: boolean) => {
      if (selected) {
        setSelectedValues(prev => [...prev, value]);
      } else {
        setSelectedValues(prev => prev.filter(v => v !== value));
      }
    };
    const handleRemove = (value: string) => {
      setSelectedValues(prev => prev.filter(v => v !== value));
    };
    return <SelectContainer>\r
        <Select open={isOpen} onOpenChange={setIsOpen}>\r
          <MultiSelectTrigger display="text-only" selectedValues={selectedValues} selectedLabels={selectedLabels} onRemoveValue={handleRemove} placeholder="Enter a value" maxDisplay={2} />\r
          <SelectContent>\r
            {options.map(option => <MultiSelectItem key={option.value} value={option.value} selected={selectedValues.includes(option.value)} onToggle={handleToggle}>\r
                {option.label}\r
              </MultiSelectItem>)}\r
          </SelectContent>\r
        </Select>\r
      </SelectContainer>;
  }
}`,...(P=(B=g.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var A,Q,U;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="with-icon" icon={<Building2 className="h-4 w-4" />}>\r
          <SelectValue placeholder="Enter a value" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectGroup>\r
            <SelectLabel>Configuration option</SelectLabel>\r
            <SelectItem value="react">React</SelectItem>\r
            <SelectItem value="vue">Vue</SelectItem>\r
            <SelectItem value="angular">Angular</SelectItem>\r
          </SelectGroup>\r
          <SelectSeparator />\r
          <SelectGroup>\r
            <SelectLabel>Configuration option</SelectLabel>\r
            <SelectItem value="nodejs">Node.js</SelectItem>\r
            <SelectItem value="python">Python</SelectItem>\r
            <SelectItem value="go">Go</SelectItem>\r
            <SelectItem value="java">Java</SelectItem>\r
          </SelectGroup>\r
          <SelectSeparator />\r
          <SelectGroup>\r
            <SelectLabel>Configuration option</SelectLabel>\r
            <SelectItem value="mysql">MySQL</SelectItem>\r
            <SelectItem value="postgresql">PostgreSQL</SelectItem>\r
            <SelectItem value="mongodb">MongoDB</SelectItem>\r
          </SelectGroup>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var z,$,J;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>(['email', 'push']);
    const [isOpen, setIsOpen] = useState(false);
    const options = {
      'Channels': [{
        value: 'email',
        label: 'Email'
      }, {
        value: 'sms',
        label: 'SMS'
      }, {
        value: 'push',
        label: 'Push notifications'
      }],
      'Frequency': [{
        value: 'realtime',
        label: 'Real-time'
      }, {
        value: 'daily',
        label: 'Daily'
      }, {
        value: 'weekly',
        label: 'Weekly'
      }],
      'Topics': [{
        value: 'system',
        label: 'System'
      }, {
        value: 'security',
        label: 'Security'
      }, {
        value: 'marketing',
        label: 'Marketing'
      }]
    };
    const allOptions = Object.values(options).flat();
    const selectedLabels = allOptions.reduce((acc, option) => {
      acc[option.value] = option.label;
      return acc;
    }, {} as Record<string, string>);
    const handleToggle = (value: string, selected: boolean) => {
      if (selected) {
        setSelectedValues(prev => [...prev, value]);
      } else {
        setSelectedValues(prev => prev.filter(v => v !== value));
      }
    };
    const handleRemove = (value: string) => {
      setSelectedValues(prev => prev.filter(v => v !== value));
    };
    return <SelectContainer>\r
        <Select open={isOpen} onOpenChange={setIsOpen}>\r
          <MultiSelectTrigger display="with-icon" icon={<Mail className="h-4 w-4" />} selectedValues={selectedValues} selectedLabels={selectedLabels} onRemoveValue={handleRemove} placeholder="Enter a value" maxDisplay={2} />\r
          <SelectContent>\r
            {Object.entries(options).map(([groupName, groupOptions], groupIndex) => <div key={groupName}>\r
                {groupIndex > 0 && <SelectSeparator />}\r
                <SelectGroup>\r
                  <SelectLabel>{groupName}</SelectLabel>\r
                  {groupOptions.map(option => <MultiSelectItem key={option.value} value={option.value} selected={selectedValues.includes(option.value)} onToggle={handleToggle}>\r
                      {option.label}\r
                    </MultiSelectItem>)}\r
                </SelectGroup>\r
              </div>)}\r
          </SelectContent>\r
        </Select>\r
      </SelectContainer>;
  }
}`,...(J=($=j.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var X,H,K;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="with-icon" icon={<Globe className="h-4 w-4" />}>\r
          <SelectValue placeholder="Enter a value" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          {Array.from({
          length: 20
        }, (_, i) => <SelectItem key={i} value={\`country-\${i}\`}>\r
              sample {i + 1} - sample\r
            </SelectItem>)}\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(K=(H=b.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">\r
      <SelectContainer>\r
        <Select disabled>\r
          <SelectTrigger display="text-only">\r
            <SelectValue placeholder="Enter a value" />\r
          </SelectTrigger>\r
          <SelectContent>\r
            <SelectItem value="option1">Option 1</SelectItem>\r
            <SelectItem value="option2">Option 2</SelectItem>\r
          </SelectContent>\r
        </Select>\r
      </SelectContainer>\r
\r
      <SelectContainer>\r
        <Select disabled>\r
          <MultiSelectTrigger display="with-icon" icon={<Settings className="h-4 w-4" />} selectedValues={['option1', 'option2']} selectedLabels={{
          option1: 'Option 1',
          option2: 'Option 2'
        }} placeholder="Enter a value" />\r
          <SelectContent>\r
            <SelectItem value="option1">Option 1</SelectItem>\r
            <SelectItem value="option2">Option 2</SelectItem>\r
          </SelectContent>\r
        </Select>\r
      </SelectContainer>\r
    </div>
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,te,ne;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <SelectContainer>\r
      <Select>\r
        <SelectTrigger display="text-only">\r
          <SelectValue placeholder="Enter a value" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="option1">Configuration option</SelectItem>\r
          <SelectItem value="option2" disabled>\r
            Configuration option\r
          </SelectItem>\r
          <SelectItem value="option3">Configuration option</SelectItem>\r
          <SelectItem value="option4" disabled>\r
            Configuration option\r
          </SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(ne=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,re,oe;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <SelectContainer width="full">\r
      <Select>\r
        <SelectTrigger>\r
          <SelectValue placeholder="Enter a value" />\r
        </SelectTrigger>\r
        <SelectContent>\r
          <SelectItem value="sample">Configuration option</SelectItem>\r
          <SelectItem value="sample">Configuration option</SelectItem>\r
          <SelectItem value="Other">Other</SelectItem>\r
          <SelectItem value="sample">Configuration option</SelectItem>\r
        </SelectContent>\r
      </Select>\r
    </SelectContainer>
}`,...(oe=(re=C.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Re=["Default","SingleWithIcon","MultipleTextOnly","WithGroups","MultipleWithGroups","LongList","Disabled","DisabledItems","FullWidth"];export{v as Default,y as Disabled,I as DisabledItems,C as FullWidth,b as LongList,g as MultipleTextOnly,j as MultipleWithGroups,h as SingleWithIcon,x as WithGroups,Re as __namedExportsOrder,Ge as default};
