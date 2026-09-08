import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as t}from"./index-OHqKpUGr.js";import{T as r}from"./tags-input-BS9oPatn.js";import"./utils-DagjsUos.js";import"./tags-Bw0lymRa.js";import"./createLucideIcon-CH9xbzwY.js";const P={title:"Data Entry/TagsInput",component:r,parameters:{layout:"centered",docs:{description:{component:"Add skills. Add skills, Add skills. "}}},tags:["autodocs"],argTypes:{disabled:{control:{type:"boolean"},description:"Enter tags separated by commas."},maxTags:{control:{type:"number"},description:"Enter tags separated by commas."},duplicateCheck:{control:{type:"boolean"},description:"Enter tags separated by commas."},placeholder:{control:{type:"text"},description:"Enter tags separated by commas."}}},c={render:s=>{const[a,l]=t.useState([]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{...s,value:a,onChange:l})})},args:{placeholder:"Tags input examples..."}},o={render:s=>{const[a,l]=t.useState(["React","TypeScript"]);return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{...s,value:a,onChange:l}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Example: "}),e.jsx("pre",{className:"text-xs bg-gray-100 p-2 rounded mt-2",children:JSON.stringify(a,null,2)})]})]})},args:{placeholder:"Tags input examples..."}},d={render:()=>{const[s,a]=t.useState([]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{value:s,onChange:a,placeholder:"Tags input examples..."})})}},i={render:()=>{const[s,a]=t.useState(["JavaScript","React"]);return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{value:s,onChange:a,maxTags:5,placeholder:"5..."}),e.jsxs("p",{className:"text-sm text-muted-foreground mt-2",children:["Tags input examples ",s.length,"/5 Tags input examples"]})]})}},g={render:()=>{const[s,a]=t.useState(["test"]);return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{value:s,onChange:a,duplicateCheck:!1,placeholder:"Tags input examples..."}),e.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:'Tags input examples "test" - Tags input examples'})]})}},m={render:()=>{const[s,a]=t.useState(["React","TypeScript","Disabled"]);return e.jsx("div",{className:"w-80",children:e.jsx(r,{disabled:!0,value:s,onChange:a,placeholder:"Tags input examples..."})})}},u={render:()=>{const[s,a]=t.useState(["Tags input examples"]),[l,_]=t.useState([]),T=n=>{_(p=>[...p.slice(-4),n])};return e.jsxs("div",{className:"w-80",children:[e.jsx(r,{value:s,onChange:a,onTagAdd:n=>T(`Tags input examples: ${n}`),onTagRemove:(n,p)=>T(`Tags input examples: ${n} (Tags input examples ${p})`),placeholder:"Tags input examples..."}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-sm font-medium mb-2",children:"Example: "}),e.jsx("div",{className:"text-xs bg-gray-100 p-2 rounded space-y-1",children:l.length===0?e.jsx("p",{className:"text-muted-foreground",children:"Add skills"}):l.map((n,p)=>e.jsx("div",{children:n},p))})]})]})}},x={args:{value:["Frontend","React","TypeScript","Tailwind CSS"],placeholder:"Tags input examples..."}};var v,h,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<string[]>([]);
    return <div className="w-80">\r
        <TagsInput {...args} value={tags} onChange={setTags} />\r
      </div>;
  },
  args: {
    placeholder: 'Tags input examples...'
  }
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var N,j,y;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);
    return <div className="w-80">\r
        <TagsInput {...args} value={tags} onChange={setTags} />\r
        <div className="mt-4">\r
          <p className="text-sm text-muted-foreground">Example: </p>\r
          <pre className="text-xs bg-gray-100 p-2 rounded mt-2">\r
            {JSON.stringify(tags, null, 2)}\r
          </pre>\r
        </div>\r
      </div>;
  },
  args: {
    placeholder: 'Tags input examples...'
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,b,f;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return <div className="w-80">\r
        <TagsInput value={tags} onChange={setTags} placeholder="Tags input examples..." />\r
      </div>;
  }
}`,...(f=(b=d.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var E,w,k;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['JavaScript', 'React']);
    return <div className="w-80">\r
        <TagsInput value={tags} onChange={setTags} maxTags={5} placeholder="5..." />\r
        <p className="text-sm text-muted-foreground mt-2">\r
          Tags input examples {tags.length}/5 Tags input examples\r
        </p>\r
      </div>;
  }
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var I,R,A;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['test']);
    return <div className="w-80">\r
        <TagsInput value={tags} onChange={setTags} duplicateCheck={false} placeholder="Tags input examples..." />\r
        <p className="text-sm text-muted-foreground mt-2">\r
          Tags input examples "test" - Tags input examples\r
        </p>\r
      </div>;
  }
}`,...(A=(R=g.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var D,$,J;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript', 'Disabled']);
    return <div className="w-80">\r
        <TagsInput disabled value={tags} onChange={setTags} placeholder="Tags input examples..." />\r
      </div>;
  }
}`,...(J=($=m.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var W,O,B;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['Tags input examples']);
    const [events, setEvents] = useState<string[]>([]);
    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), event]); // 5
    };
    return <div className="w-80">\r
        <TagsInput value={tags} onChange={setTags} onTagAdd={tag => addEvent(\`Tags input examples: \${tag}\`)} onTagRemove={(tag, index) => addEvent(\`Tags input examples: \${tag} (Tags input examples \${index})\`)} placeholder="Tags input examples..." />\r
        <div className="mt-4">\r
          <p className="text-sm font-medium mb-2">Example: </p>\r
          <div className="text-xs bg-gray-100 p-2 rounded space-y-1">\r
            {events.length === 0 ? <p className="text-muted-foreground">Add skills</p> : events.map((event, index) => <div key={index}>{event}</div>)}\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var F,M,U;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: ['Frontend', 'React', 'TypeScript', 'Tailwind CSS'],
    placeholder: 'Tags input examples...'
  }
}`,...(U=(M=x.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const Q=["Default","Controlled","BasicUsage","MaxTags","AllowDuplicates","Disabled","WithCallbacks","WithInitialTags"];export{g as AllowDuplicates,d as BasicUsage,o as Controlled,c as Default,m as Disabled,i as MaxTags,u as WithCallbacks,x as WithInitialTags,Q as __namedExportsOrder,P as default};
