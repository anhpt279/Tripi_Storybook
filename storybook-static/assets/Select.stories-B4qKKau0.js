import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as V}from"./index-Bc2G9s8g.js";import"./button-BaFs26jy.js";import"./form-D5NF78QM.js";import"./top-nav-tlAE2T-F.js";import"./block-layout-Bc2hpV2c.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import{S as o,e as s,a as u,b as p,c,d as l,M as w,f as ce,g as E,h as f,i as O}from"./city-select-iHhPfZGT.js";import"./cascader-UwHOzAH5.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import{S as ie}from"./settings-qnkFxni1.js";import{c as G}from"./createLucideIcon-Si29XmKi.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=G("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=G("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=G("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]),Ee={title:"Data Entry/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"]},v={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"text-only",children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"option1",children:"Option 1"}),e.jsx(l,{value:"option2",children:"Option 2"}),e.jsx(l,{value:"option3",children:"Option 3"})]})]})})},h={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"with-icon",icon:e.jsx(ie,{className:"h-4 w-4"}),children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"basic",children:"Configuration option"}),e.jsx(l,{value:"advanced",children:"Configuration option"}),e.jsx(l,{value:"system",children:"Configuration option"})]})]})})},g={render:()=>{const[d,r]=V.useState([]),[k,M]=V.useState(!1),m=[{value:"frontend",label:"Frontend sample"},{value:"backend",label:"Backend sample"},{value:"fullstack",label:"Full Stack sample"},{value:"mobile",label:"Example option"},{value:"devops",label:"DevOps sample"},{value:"design",label:"UI/UX sample"}],D=m.reduce((n,t)=>(n[t.value]=t.label,n),{}),T=(n,t)=>{r(t?a=>[...a,n]:a=>a.filter(i=>i!==n))},L=n=>{r(t=>t.filter(a=>a!==n))};return e.jsx(s,{children:e.jsxs(o,{open:k,onOpenChange:M,children:[e.jsx(w,{display:"text-only",selectedValues:d,selectedLabels:D,onRemoveValue:L,placeholder:"Enter a value",maxDisplay:2}),e.jsx(c,{children:m.map(n=>e.jsx(ce,{value:n.value,selected:d.includes(n.value),onToggle:T,children:n.label},n.value))})]})})}},x={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"with-icon",icon:e.jsx(ue,{className:"h-4 w-4"}),children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsxs(f,{children:[e.jsx(O,{children:"Configuration option"}),e.jsx(l,{value:"react",children:"React"}),e.jsx(l,{value:"vue",children:"Vue"}),e.jsx(l,{value:"angular",children:"Angular"})]}),e.jsx(E,{}),e.jsxs(f,{children:[e.jsx(O,{children:"Configuration option"}),e.jsx(l,{value:"nodejs",children:"Node.js"}),e.jsx(l,{value:"python",children:"Python"}),e.jsx(l,{value:"go",children:"Go"}),e.jsx(l,{value:"java",children:"Java"})]}),e.jsx(E,{}),e.jsxs(f,{children:[e.jsx(O,{children:"Configuration option"}),e.jsx(l,{value:"mysql",children:"MySQL"}),e.jsx(l,{value:"postgresql",children:"PostgreSQL"}),e.jsx(l,{value:"mongodb",children:"MongoDB"})]})]})]})})},j={render:()=>{const[d,r]=V.useState(["email","push"]),[k,M]=V.useState(!1),m={Channels:[{value:"email",label:"Email"},{value:"sms",label:"SMS"},{value:"push",label:"Push notifications"}],Frequency:[{value:"realtime",label:"Real-time"},{value:"daily",label:"Daily"},{value:"weekly",label:"Weekly"}],Topics:[{value:"system",label:"System"},{value:"security",label:"Security"},{value:"marketing",label:"Marketing"}]},T=Object.values(m).flat().reduce((t,a)=>(t[a.value]=a.label,t),{}),L=(t,a)=>{r(a?i=>[...i,t]:i=>i.filter(S=>S!==t))},n=t=>{r(a=>a.filter(i=>i!==t))};return e.jsx(s,{children:e.jsxs(o,{open:k,onOpenChange:M,children:[e.jsx(w,{display:"with-icon",icon:e.jsx(de,{className:"h-4 w-4"}),selectedValues:d,selectedLabels:T,onRemoveValue:n,placeholder:"Enter a value",maxDisplay:2}),e.jsx(c,{children:Object.entries(m).map(([t,a],i)=>e.jsxs("div",{children:[i>0&&e.jsx(E,{}),e.jsxs(f,{children:[e.jsx(O,{children:t}),a.map(S=>e.jsx(ce,{value:S.value,selected:d.includes(S.value),onToggle:L,children:S.label},S.value))]})]},t))})]})})}},y={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"with-icon",icon:e.jsx(pe,{className:"h-4 w-4"}),children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsx(c,{children:Array.from({length:20},(d,r)=>e.jsxs(l,{value:`country-${r}`,children:["sample ",r+1," - sample"]},r))})]})})},b={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{children:e.jsxs(o,{disabled:!0,children:[e.jsx(u,{display:"text-only",children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"option1",children:"Option 1"}),e.jsx(l,{value:"option2",children:"Option 2"})]})]})}),e.jsx(s,{children:e.jsxs(o,{disabled:!0,children:[e.jsx(w,{display:"with-icon",icon:e.jsx(ie,{className:"h-4 w-4"}),selectedValues:["option1","option2"],selectedLabels:{option1:"Option 1",option2:"Option 2"},placeholder:"Enter a value"}),e.jsxs(c,{children:[e.jsx(l,{value:"option1",children:"Option 1"}),e.jsx(l,{value:"option2",children:"Option 2"})]})]})})]})},I={render:()=>e.jsx(s,{children:e.jsxs(o,{children:[e.jsx(u,{display:"text-only",children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"option1",children:"Configuration option"}),e.jsx(l,{value:"option2",disabled:!0,children:"Configuration option"}),e.jsx(l,{value:"option3",children:"Configuration option"}),e.jsx(l,{value:"option4",disabled:!0,children:"Configuration option"})]})]})})},C={parameters:{layout:"padded"},render:()=>e.jsx(s,{width:"full",children:e.jsxs(o,{children:[e.jsx(u,{children:e.jsx(p,{placeholder:"Enter a value"})}),e.jsxs(c,{children:[e.jsx(l,{value:"sample",children:"Configuration option"}),e.jsx(l,{value:"sample",children:"Configuration option"}),e.jsx(l,{value:"Other",children:"Other"}),e.jsx(l,{value:"sample",children:"Configuration option"})]})]})})};var R,N,W;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(N=v.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var q,F,B;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(B=(F=h.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var P,A,Q;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Q=(A=g.parameters)==null?void 0:A.docs)==null?void 0:Q.source}}};var U,_,z;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(z=(_=x.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var J,X,$;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...($=(X=j.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var H,Z,K;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var Y,ee,le;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(le=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:le.source}}};var te,ne,ae;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,oe,se;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};const we=["Default","SingleWithIcon","MultipleTextOnly","WithGroups","MultipleWithGroups","LongList","Disabled","DisabledItems","FullWidth"];export{v as Default,b as Disabled,I as DisabledItems,C as FullWidth,y as LongList,g as MultipleTextOnly,j as MultipleWithGroups,h as SingleWithIcon,x as WithGroups,we as __namedExportsOrder,Ee as default};
