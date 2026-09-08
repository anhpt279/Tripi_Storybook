import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as C}from"./index-Bc2G9s8g.js";import{B as o}from"./button-BaFs26jy.js";import"./form-CZeh-vxi.js";import"./top-nav-tlAE2T-F.js";import{z as p,E as j,G as b,H as d,I as a,J as T,K as l,N as be,O as Te,Q as ue,U as je,V as ge,W as fe,C as B}from"./block-layout-CN-wBIVs.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-ye53cQ2m.js";import"./cascader-uB5K2ixH.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import{T as g}from"./tags--LNP6sCy.js";import{c as We}from"./createLucideIcon-Si29XmKi.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./chevron-right-ByHdH1N4.js";import"./search-CHUBTwRr.js";/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=We("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]),Je={title:"Data Display/Table",component:p,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{className:{control:"text"}}},D={render:()=>e.jsx("div",{className:"p-6",children:e.jsx(j,{bordered:!0,children:e.jsxs(p,{children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{variant:"status",children:"Status"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsxs(T,{children:[e.jsxs(d,{children:[e.jsx(l,{children:"John Doe"}),e.jsx(l,{variant:"status",children:e.jsx(g,{variant:"success",children:"Active"})}),e.jsx(l,{children:"john@example.com"}),e.jsx(l,{children:"Admin"})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Jane Smith"}),e.jsx(l,{variant:"status",children:e.jsx(g,{variant:"destructive",children:"Inactive"})}),e.jsx(l,{children:"jane@Example.com"}),e.jsx(l,{children:"User"})]}),e.jsxs(d,{children:[e.jsx(l,{children:"Bob Johnson"}),e.jsx(l,{variant:"status",children:e.jsx(g,{variant:"warning",children:"Pending"})}),e.jsx(l,{children:"bob@example.com"}),e.jsx(l,{children:"Moderator"})]})]})]})})})},v={render:()=>e.jsx("div",{className:"p-6",children:e.jsx(j,{bordered:!0,pageStickyHeader:!0,children:e.jsxs(p,{children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{variant:"numeric",children:"Email"}),e.jsx(a,{variant:"numeric",children:"Role"}),e.jsx(a,{children:"Status"}),e.jsx(a,{children:"Created"}),e.jsx(a,{variant:"status",children:"Actions"})]})}),e.jsx(T,{children:Array.from({length:15}).map((c,i)=>e.jsxs(d,{children:[e.jsxs(l,{children:["Example ",i+1]}),e.jsxs(l,{variant:"numeric",children:["¥",(Math.random()*1e3).toFixed(2)]}),e.jsx(l,{variant:"numeric",children:Math.floor(Math.random()*500)}),e.jsx(l,{children:"Details"}),e.jsxs(l,{children:["2024-",String(Math.floor(Math.random()*12)+1).padStart(2,"0"),"-",String(Math.floor(Math.random()*28)+1).padStart(2,"0")]}),e.jsx(l,{variant:"status",children:e.jsx(g,{variant:i%3===0?"success":i%3===1?"destructive":"warning",children:(i%3===0||i%3===1,"Example")})})]},i))})]})})}),parameters:{layout:"fullscreen"}},H={render:()=>{const[c,i]=C.useState([]),[r,h]=C.useState(!1),x=[{id:"1",name:"John Doe",email:"john@example.com",role:"Admin"},{id:"2",name:"Jane Smith",email:"jane@Example.com",role:"User"},{id:"3",name:"Bob Johnson",email:"bob@example.com",role:"Moderator"},{id:"4",name:"Alice Brown",email:"alice@Example.com",role:"User"}],f=s=>{h(s),i(s?x.map(t=>t.id):[])},W=(s,t)=>{t?i([...c,s]):(i(c.filter(u=>u!==s)),h(!1))};return e.jsx("div",{className:"p-6",children:e.jsx(j,{bordered:!0,children:e.jsxs(p,{children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{className:"w-16 p-0 relative",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(B,{checked:r,onCheckedChange:s=>f(!!s),"aria-label":"Select all"})})}),e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"}),e.jsx(a,{children:"Actions"})]})}),e.jsx(T,{children:x.map(s=>e.jsxs(d,{className:c.includes(s.id)?"bg-muted/50":"",children:[e.jsx(l,{className:"w-16 p-0 relative",children:e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(B,{checked:c.includes(s.id),onCheckedChange:t=>W(s.id,!!t),"aria-label":`Select ${s.name}`})})}),e.jsx(l,{children:s.name}),e.jsx(l,{children:s.email}),e.jsx(l,{children:s.role}),e.jsx(l,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",children:"Edit"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",children:"View"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-sm text-destructive",children:"Delete"})]})})]},s.id))})]})})})}},S={render:()=>e.jsx("div",{className:"p-6",children:e.jsx(j,{bordered:!0,children:e.jsxs(p,{children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{children:"Name"}),e.jsx(a,{children:"Status"}),e.jsx(a,{children:"Email"}),e.jsx(a,{children:"Role"})]})}),e.jsx(T,{children:e.jsx(d,{children:e.jsx(l,{colSpan:4,children:e.jsx(Te,{icon:e.jsx(Ce,{className:"h-10 w-10"}),title:"No users found",description:"There are no users in your workspace yet. Invite some users to get started.",action:e.jsx(o,{children:"Invite Users"})})})})})]})})})},y={render:()=>e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Example - Example"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Details. Details."})]}),e.jsx(j,{bordered:!0,children:e.jsxs(p,{className:"min-w-max",children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{cellWidth:"fit",children:"ID"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",variant:"status",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"auto",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"})]})}),e.jsx(T,{children:Array.from({length:8}).map((c,i)=>e.jsxs(d,{children:[e.jsx(l,{cellWidth:"fit",children:1001+i}),e.jsxs(l,{cellWidth:"fit",children:["Example",i+1]}),e.jsxs(l,{cellWidth:"fit",children:["employee",i+1,"@company.com"]}),e.jsx(l,{cellWidth:"fit",variant:"numeric",children:25+i}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"fit",children:(i%3===0||i%3===1,"Example")}),e.jsxs(l,{cellWidth:"fit",children:["+86 138-",String(1e3+i*11).padStart(4,"0"),"-",String(5678+i).padStart(4,"0")]}),e.jsxs(l,{cellWidth:"fit",variant:"date",children:["2024-0",i%6+1,"-",String(10+i).padStart(2,"0")]}),e.jsxs(l,{cellWidth:"fit",children:["P",i%4+6]}),e.jsx(l,{cellWidth:"fit",children:(i%2===0,"Example")}),e.jsx(l,{cellWidth:"fit",variant:"status",children:e.jsx(g,{variant:i%3===0?"success":i%3===1?"primary":"warning",children:(i%3===0||i%3===1,"Example")})}),e.jsxs(l,{cellWidth:"fit",children:["Example",Math.floor(i/2)+1]}),e.jsxs(l,{cellWidth:"fit",children:["Example ",String.fromCharCode(65+i%3)]}),e.jsx(l,{cellWidth:"auto",children:(i%2===0,"Details")}),e.jsx(l,{cellWidth:"fit",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"Details"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"Edit"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs text-destructive",children:"Details"})]})})]},i))})]})})]})},w={render:()=>e.jsx("div",{className:"p-6 space-y-6",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Details"}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h4",{className:"text-md font-medium mb-2",children:"Example: Example ≤ Example"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Example, auto-width, Details. "}),e.jsx(j,{bordered:!0,children:e.jsxs(p,{children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{cellWidth:"xs",children:"ID"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"md",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"auto",children:"Details"})]})}),e.jsx(T,{children:e.jsxs(d,{children:[e.jsx(l,{cellWidth:"xs",children:"001"}),e.jsx(l,{cellWidth:"sm",children:"Details"}),e.jsx(l,{cellWidth:"md",children:"138-0000-0000"}),e.jsx(l,{cellWidth:"sm",children:"Details"}),e.jsx(l,{cellWidth:"auto",children:"Details"})]})})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"text-md font-medium mb-2",children:"Example: Example > Example"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Use fit-width for compact identifiers and status columns that should stay on one line."}),e.jsx(j,{bordered:!0,children:e.jsxs(p,{className:"min-w-max",children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{cellWidth:"fit",children:"ID"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"xl",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"})]})}),e.jsxs(T,{children:[e.jsxs(d,{children:[e.jsx(l,{cellWidth:"fit",children:"1001"}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"fit",children:"lisi@example.com"}),e.jsx(l,{cellWidth:"fit",children:"138-1111-1111"}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"xl",children:"Details, Details, Example"}),e.jsx(l,{cellWidth:"fit",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"Edit"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs text-destructive",children:"Details"})]})})]}),e.jsxs(d,{children:[e.jsx(l,{cellWidth:"fit",children:"1002"}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"fit",children:"wangwu@example.com"}),e.jsx(l,{cellWidth:"fit",children:"139-2222-2222"}),e.jsx(l,{cellWidth:"fit",children:"UIText"}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"xl",children:"Details"}),e.jsx(l,{cellWidth:"fit",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"Edit"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs text-destructive",children:"Details"})]})})]}),e.jsxs(d,{children:[e.jsx(l,{cellWidth:"fit",children:"1003"}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"fit",children:"zhaoliu@Example.com"}),e.jsx(l,{cellWidth:"fit",children:"137-3333-3333"}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"fit",children:"Details"}),e.jsx(l,{cellWidth:"xl",children:"Details, Details, Example"}),e.jsx(l,{cellWidth:"fit",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs",children:"Edit"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-xs text-destructive",children:"Details"})]})})]})]})]})})]})]})})},N={render:()=>{const[c,i]=C.useState([]),[r,h]=C.useState(!1),x=[{id:"1001",name:"Example",email:"zhangsan@company.com",phone:"138-0000-0001",department:"Example",position:"Example",salary:"P7",location:"Example",manager:"Example",project:"ItemA",status:"active",notes:"Details, Example"},{id:"1002",name:"Example",email:"lisi@company.com",phone:"138-0000-0002",department:"Example",position:"Example",salary:"P6",location:"Example",manager:"Example",project:"ItemB",status:"active",notes:"Details, Example"},{id:"1003",name:"Example",email:"wangwu@company.com",phone:"138-0000-0003",department:"Example",position:"UIText",salary:"P5",location:"Example",manager:"Example",project:"ItemC",status:"trial",notes:"Details, Example"},{id:"1004",name:"Example",email:"zhaoliu@company.com",phone:"138-0000-0004",department:"Example",position:"Example",salary:"P4",location:"Example",manager:"Example",project:"ItemD",status:"leave",notes:"Details"},{id:"1005",name:"Example",email:"qianqi@company.com",phone:"138-0000-0005",department:"Example",position:"Example",salary:"P5",location:"Example",manager:"Example",project:"ItemE",status:"active",notes:"Details, Example"}],f=t=>{h(t),i(t?x.map(u=>u.id):[])},W=(t,u)=>{u?i([...c,t]):(i(c.filter(E=>E!==t)),h(!1))},s=t=>{switch(t){case"active":return"Example";case"trial":return"Example";case"leave":return"Example";default:return t}};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Details"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Details. Details."})]}),e.jsx(j,{bordered:!0,children:e.jsxs(p,{className:"min-w-max",children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(je,{stickyLeft:!0,checked:r,onCheckedChange:t=>f(!!t),"aria-label":"Select all"}),e.jsx(a,{stickyLeft:!0,cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",variant:"status",children:"Details"}),e.jsx(a,{cellWidth:"auto",children:"Details"})]})}),e.jsx(T,{children:x.map(t=>e.jsxs(d,{children:[e.jsx(ge,{stickyLeft:!0,checked:c.includes(t.id),onCheckedChange:u=>W(t.id,!!u),"aria-label":`Select ${t.name}`}),e.jsx(l,{stickyLeft:!0,cellWidth:"fit",children:t.name}),e.jsx(l,{cellWidth:"fit",children:t.email}),e.jsx(l,{cellWidth:"fit",children:t.phone}),e.jsx(l,{cellWidth:"fit",children:t.department}),e.jsx(l,{cellWidth:"fit",children:t.position}),e.jsx(l,{cellWidth:"fit",children:t.salary}),e.jsx(l,{cellWidth:"fit",children:t.location}),e.jsx(l,{cellWidth:"fit",children:t.manager}),e.jsx(l,{cellWidth:"fit",children:t.project}),e.jsx(l,{cellWidth:"fit",variant:"status",children:e.jsx(g,{variant:t.status==="active"?"success":t.status==="trial"?"primary":t.status==="leave"?"warning":"default",children:s(t.status)})}),e.jsx(l,{cellWidth:"auto",children:t.notes})]},t.id))})]})})]})}},k={render:()=>{const c=[{id:"1001",name:"Example",email:"zhangsan@company.com",phone:"138-0000-0001",department:"Example",position:"Example",salary:"P7",location:"Example",manager:"Example",project:"ItemA",status:"active",notes:"Details"},{id:"1002",name:"Example",email:"lisi@company.com",phone:"138-0000-0002",department:"Example",position:"Example",salary:"P6",location:"Example",manager:"Example",project:"ItemB",status:"active",notes:"Details"},{id:"1003",name:"Example",email:"wangwu@company.com",phone:"138-0000-0003",department:"Example",position:"UIText",salary:"P5",location:"Example",manager:"Example",project:"ItemC",status:"trial",notes:"Details"},{id:"1004",name:"Example",email:"zhaoliu@company.com",phone:"138-0000-0004",department:"Example",position:"Example",salary:"P4",location:"Example",manager:"Example",project:"ItemD",status:"leave",notes:"Details"},{id:"1005",name:"Example",email:"qianqi@company.com",phone:"138-0000-0005",department:"Example",position:"Example",salary:"P5",location:"Example",manager:"Example",project:"ItemE",status:"active",notes:"Details"}],i=r=>{switch(r){case"active":return"Example";case"trial":return"Example";case"leave":return"Example";default:return r}};return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Details"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Details. Details."})]}),e.jsx(j,{bordered:!0,children:e.jsxs(p,{className:"min-w-max",children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{cellWidth:"fit",children:"ID"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"fit",children:"Details"}),e.jsx(a,{cellWidth:"auto",children:"Details"}),e.jsx(a,{cellWidth:"fit",variant:"status",children:"Details"}),e.jsx(a,{stickyRight:!0,cellWidth:"fit",style:{right:"0px"},children:"Details"})]})}),e.jsx(T,{children:c.map(r=>e.jsxs(d,{children:[e.jsx(l,{cellWidth:"fit",children:r.id}),e.jsx(l,{cellWidth:"fit",children:r.name}),e.jsx(l,{cellWidth:"fit",children:r.email}),e.jsx(l,{cellWidth:"fit",children:r.phone}),e.jsx(l,{cellWidth:"fit",children:r.department}),e.jsx(l,{cellWidth:"fit",children:r.position}),e.jsx(l,{cellWidth:"fit",children:r.salary}),e.jsx(l,{cellWidth:"fit",children:r.location}),e.jsx(l,{cellWidth:"fit",children:r.manager}),e.jsx(l,{cellWidth:"fit",children:r.project}),e.jsx(l,{cellWidth:"auto",children:r.notes}),e.jsx(l,{cellWidth:"fit",variant:"status",children:e.jsx(g,{variant:r.status==="active"?"success":r.status==="trial"?"primary":r.status==="leave"?"warning":"default",children:i(r.status)})}),e.jsx(fe,{stickyRight:!0,style:{right:"0px"},actions:[{label:"Example option",onClick:()=>console.log("Example",r.name)},{label:"Edit",onClick:()=>console.log("Edit",r.name)},{label:"Example option",onClick:()=>console.log("Example",r.name),variant:"destructive"}]})]},r.id))})]})})]})}},R={render:()=>{const[c,i]=C.useState(1),r=5,h=Array.from({length:50},(n,m)=>({id:m+1,name:`Example${m+1}`,email:`employee${m+1}@company.com`,role:["Example","User","Edit"][m%3],status:["active","inactive","pending"][m%3],createTime:`2024-${String(Math.floor(m/10)+1).padStart(2,"0")}-${String(m%10+1).padStart(2,"0")}`})),x=(c-1)*r,f=x+r,W=h.slice(x,f),s={current:c,pageSize:r,total:h.length},t=n=>{i(n)},u=n=>{switch(n){case"active":return"success";case"inactive":return"destructive";case"pending":return"warning";default:return"default"}},E=n=>{switch(n){case"active":return"Example";case"inactive":return"Example";case"pending":return"Example";default:return n}};return e.jsxs("div",{className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Details"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Details."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(j,{bordered:!0,children:e.jsxs(p,{children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{cellWidth:"xs",children:"ID"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"md",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"})]})}),e.jsx(T,{children:W.map(n=>e.jsxs(d,{children:[e.jsx(l,{cellWidth:"xs",className:"font-mono text-muted-foreground",children:n.id}),e.jsx(l,{cellWidth:"sm",children:n.name}),e.jsx(l,{cellWidth:"md",children:n.email}),e.jsx(l,{cellWidth:"sm",children:n.role}),e.jsx(l,{cellWidth:"sm",children:e.jsx(g,{variant:u(n.status),children:E(n.status)})}),e.jsx(l,{cellWidth:"sm",children:n.createTime}),e.jsx(l,{cellWidth:"sm",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",children:"Edit"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-sm text-destructive",children:"Details"})]})})]},n.id))})]})}),e.jsx(be,{pagination:s,onPageChange:t,showTotal:(n,m)=>`Example ${n} Details ${m[0]}-${m[1]} Example`})]})]})}},P={render:()=>{const[c,i]=C.useState(1),r=8,h=Array.from({length:73},(n,m)=>({id:m+1,name:`User${m+1}`,email:`user${m+1}@Example.com`,role:["Example","User","Edit","Example"][m%4],status:["active","inactive","pending"][m%3],lastLogin:m%5===0?"Example":`2024-01-${String(m%28+1).padStart(2,"0")} ${String(m%12+10).padStart(2,"0")}:${String(m%60).padStart(2,"0")}`})),x={current:c,pageSize:r,total:h.length},f=n=>{i(n)},W=n=>{switch(n){case"active":return"success";case"inactive":return"destructive";case"pending":return"warning";default:return"default"}},s=n=>{switch(n){case"active":return"Example";case"inactive":return"Example";case"pending":return"Example";default:return n}},t=(c-1)*r,u=t+r,E=h.slice(t,u);return e.jsxs("div",{className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Details"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Example TableWithPagination Component, Details API."})]}),e.jsxs(ue,{data:h,columns:[],pagination:x,onPageChange:f,wrapperProps:{bordered:!0},children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{cellWidth:"xs",children:"ID"}),e.jsx(a,{cellWidth:"sm",children:"Username"}),e.jsx(a,{cellWidth:"md",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"md",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"})]})}),e.jsx(T,{children:E.map(n=>e.jsxs(d,{children:[e.jsx(l,{cellWidth:"xs",className:"font-mono text-muted-foreground",children:n.id}),e.jsx(l,{cellWidth:"sm",children:n.name}),e.jsx(l,{cellWidth:"md",children:n.email}),e.jsx(l,{cellWidth:"sm",children:n.role}),e.jsx(l,{cellWidth:"sm",children:e.jsx(g,{variant:W(n.status),children:s(n.status)})}),e.jsx(l,{cellWidth:"md",children:n.lastLogin}),e.jsx(l,{cellWidth:"sm",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-sm",children:"Edit"}),e.jsx(o,{variant:"link",size:"sm",className:"h-auto p-0 text-sm text-destructive",children:"Details"})]})})]},n.id))})]})]})}},I={render:()=>{const[c,i]=C.useState(1),r=6,h=Array.from({length:25},(s,t)=>({id:t+1,product:`Example ${t+1}`,price:(Math.random()*1e3).toFixed(2),stock:Math.floor(Math.random()*500),category:["Example","Example","Example","Example"][t%4],status:["Example","Example","Example"][t%3]})),x={current:c,pageSize:r,total:h.length},f=s=>{i(s)},W=h.slice((c-1)*r,c*r);return e.jsxs("div",{className:"p-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-2",children:"Details"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-4",children:"Details."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(j,{bordered:!0,children:e.jsxs(p,{children:[e.jsx(b,{children:e.jsxs(d,{children:[e.jsx(a,{cellWidth:"xs",children:"ID"}),e.jsx(a,{cellWidth:"md",children:"Details"}),e.jsx(a,{cellWidth:"sm",variant:"numeric",children:"Details"}),e.jsx(a,{cellWidth:"sm",variant:"numeric",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"}),e.jsx(a,{cellWidth:"sm",children:"Details"})]})}),e.jsx(T,{children:W.map(s=>e.jsxs(d,{children:[e.jsx(l,{cellWidth:"xs",className:"font-mono text-muted-foreground",children:s.id}),e.jsx(l,{cellWidth:"md",children:s.product}),e.jsxs(l,{cellWidth:"sm",variant:"numeric",children:["¥",s.price]}),e.jsx(l,{cellWidth:"sm",variant:"numeric",children:s.stock}),e.jsx(l,{cellWidth:"sm",children:s.category}),e.jsx(l,{cellWidth:"sm",children:e.jsx(g,{variant:s.status==="Example"?"success":s.status==="Example"?"destructive":"warning",children:s.status})})]},s.id))})]})}),e.jsx(be,{pagination:x,onPageChange:f,showTotal:(s,t)=>`Example ${t[0]}-${t[1]} Details ${s} Example`})]})]})}};var z,A,$;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <TableWrapper bordered>\r
        <Table>\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead>Name</TableHead>\r
              <TableHead variant="status">Status</TableHead>\r
              <TableHead>Email</TableHead>\r
              <TableHead>Role</TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            <TableRow>\r
              <TableCell>John Doe</TableCell>\r
              <TableCell variant="status">\r
                <Tag variant="success">Active</Tag>\r
              </TableCell>\r
              <TableCell>john@example.com</TableCell>\r
              <TableCell>Admin</TableCell>\r
            </TableRow>\r
            <TableRow>\r
              <TableCell>Jane Smith</TableCell>\r
              <TableCell variant="status">\r
                <Tag variant="destructive">Inactive</Tag>\r
              </TableCell>\r
              <TableCell>jane@Example.com</TableCell>\r
              <TableCell>User</TableCell>\r
            </TableRow>\r
            <TableRow>\r
              <TableCell>Bob Johnson</TableCell>\r
              <TableCell variant="status">\r
                <Tag variant="warning">Pending</Tag>\r
              </TableCell>\r
              <TableCell>bob@example.com</TableCell>\r
              <TableCell>Moderator</TableCell>\r
            </TableRow>\r
          </TableBody>\r
        </Table>\r
      </TableWrapper>\r
    </div>
}`,...($=(A=D.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var M,U,L;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      {/* Example, sticky */}\r
      <TableWrapper bordered pageStickyHeader>\r
        <Table>\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead>\r
                Name\r
              </TableHead>\r
              <TableHead variant="numeric">\r
                Email\r
              </TableHead>\r
              <TableHead variant="numeric">\r
                Role\r
              </TableHead>\r
              <TableHead>\r
                Status\r
              </TableHead>\r
              <TableHead>\r
                Created\r
              </TableHead>\r
              <TableHead variant="status">\r
                Actions\r
              </TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            {Array.from({
            length: 15
          }).map((_, i) => <TableRow key={i}>\r
                <TableCell>Example {i + 1}</TableCell>\r
                <TableCell variant="numeric">¥{(Math.random() * 1000).toFixed(2)}</TableCell>\r
                <TableCell variant="numeric">{Math.floor(Math.random() * 500)}</TableCell>\r
                <TableCell>Details</TableCell>\r
                <TableCell>2024-{String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-{String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}</TableCell>\r
                <TableCell variant="status">\r
                  <Tag variant={i % 3 === 0 ? 'success' : i % 3 === 1 ? 'destructive' : 'warning'}>\r
                    {i % 3 === 0 ? 'Example' : i % 3 === 1 ? 'Example' : 'Example'}\r
                  </Tag>\r
                </TableCell>\r
              </TableRow>)}\r
          </TableBody>\r
        </Table>\r
      </TableWrapper>\r
    </div>,
  parameters: {
    layout: 'fullscreen'
  }
}`,...(L=(U=v.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var J,_,q;H.parameters={...H.parameters,docs:{...(J=H.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const data = [{
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin'
    }, {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@Example.com',
      role: 'User'
    }, {
      id: '3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Moderator'
    }, {
      id: '4',
      name: 'Alice Brown',
      email: 'alice@Example.com',
      role: 'User'
    }];
    const handleSelectAll = (checked: boolean) => {
      setSelectAll(checked);
      setSelectedRows(checked ? data.map(item => item.id) : []);
    };
    const handleRowSelect = (id: string, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, id]);
      } else {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        setSelectAll(false);
      }
    };
    return <div className="p-6">\r
        <TableWrapper bordered>\r
          <Table>\r
            <TableHeader>\r
              <TableRow>\r
                <TableHead className="w-16 p-0 relative">\r
                  <div className="absolute inset-0 flex items-center justify-center">\r
                    <Checkbox checked={selectAll} onCheckedChange={checked => handleSelectAll(!!checked)} aria-label="Select all" />\r
                  </div>\r
                </TableHead>\r
                <TableHead>Name</TableHead>\r
                <TableHead>Email</TableHead>\r
                <TableHead>Role</TableHead>\r
                <TableHead>Actions</TableHead>\r
              </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
              {data.map(item => <TableRow key={item.id} className={selectedRows.includes(item.id) ? "bg-muted/50" : ""}>\r
                  <TableCell className="w-16 p-0 relative">\r
                    <div className="absolute inset-0 flex items-center justify-center">\r
                      <Checkbox checked={selectedRows.includes(item.id)} onCheckedChange={checked => handleRowSelect(item.id, !!checked)} aria-label={\`Select \${item.name}\`} />\r
                    </div>\r
                  </TableCell>\r
                  <TableCell>{item.name}</TableCell>\r
                  <TableCell>{item.email}</TableCell>\r
                  <TableCell>{item.role}</TableCell>\r
                  <TableCell>\r
                    <div className="flex items-center gap-2">\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm">\r
                        Edit\r
                      </Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm">\r
                        View\r
                      </Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">\r
                        Delete\r
                      </Button>\r
                    </div>\r
                  </TableCell>\r
                </TableRow>)}\r
            </TableBody>\r
          </Table>\r
        </TableWrapper>\r
      </div>;
  }
}`,...(q=(_=H.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var V,F,G;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <TableWrapper bordered>\r
        <Table>\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead>Name</TableHead>\r
              <TableHead>Status</TableHead>\r
              <TableHead>Email</TableHead>\r
              <TableHead>Role</TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            <TableRow>\r
              <TableCell colSpan={4}>\r
                <TableEmptyState icon={<FileX className="h-10 w-10" />} title="No users found" description="There are no users in your workspace yet. Invite some users to get started." action={<Button>\r
                      Invite Users\r
                    </Button>} />\r
              </TableCell>\r
            </TableRow>\r
          </TableBody>\r
        </Table>\r
      </TableWrapper>\r
    </div>
}`,...(G=(F=S.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var X,O,K;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="p-6">\r
      <div className="mb-4">\r
        <h3 className="text-lg font-medium mb-2">Example - Example</h3>\r
        <p className="text-sm text-muted-foreground">\r
          Details. Details.\r
        </p>\r
      </div>\r
\r
      <TableWrapper bordered>\r
        <Table className="min-w-max">\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead cellWidth="fit">ID</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit" variant="status">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
              <TableHead cellWidth="auto">Details</TableHead>\r
              <TableHead cellWidth="fit">Details</TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            {Array.from({
            length: 8
          }).map((_, i) => <TableRow key={i}>\r
                <TableCell cellWidth="fit">{1001 + i}</TableCell>\r
                <TableCell cellWidth="fit">Example{i + 1}</TableCell>\r
                <TableCell cellWidth="fit">employee{i + 1}@company.com</TableCell>\r
                <TableCell cellWidth="fit" variant="numeric">{25 + i}</TableCell>\r
                <TableCell cellWidth="fit">Details</TableCell>\r
                <TableCell cellWidth="fit">\r
                  {i % 3 === 0 ? 'Example' : i % 3 === 1 ? 'Example' : 'Example'}\r
                </TableCell>\r
                <TableCell cellWidth="fit">+86 138-{String(1000 + i * 11).padStart(4, '0')}-{String(5678 + i).padStart(4, '0')}</TableCell>\r
                <TableCell cellWidth="fit" variant="date">2024-0{i % 6 + 1}-{String(10 + i).padStart(2, '0')}</TableCell>\r
                <TableCell cellWidth="fit">P{i % 4 + 6}</TableCell>\r
                <TableCell cellWidth="fit">\r
                  {i % 2 === 0 ? 'Example' : 'Example'}\r
                </TableCell>\r
                <TableCell cellWidth="fit" variant="status">\r
                  <Tag variant={i % 3 === 0 ? 'success' : i % 3 === 1 ? 'primary' : 'warning'}>\r
                    {i % 3 === 0 ? 'Example' : i % 3 === 1 ? 'Example' : 'Example'}\r
                  </Tag>\r
                </TableCell>\r
                <TableCell cellWidth="fit">Example{Math.floor(i / 2) + 1}</TableCell>\r
                <TableCell cellWidth="fit">Example {String.fromCharCode(65 + i % 3)}</TableCell>\r
                <TableCell cellWidth="auto">\r
                  {i % 2 === 0 ? 'Details' : 'Details'}\r
                </TableCell>\r
                <TableCell cellWidth="fit">\r
                  <div className="flex items-center gap-1">\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">\r
                      Details\r
                    </Button>\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs">\r
                      Edit\r
                    </Button>\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">\r
                      Details\r
                    </Button>\r
                  </div>\r
                </TableCell>\r
              </TableRow>)}\r
          </TableBody>\r
        </Table>\r
      </TableWrapper>\r
    </div>
}`,...(K=(O=y.parameters)==null?void 0:O.docs)==null?void 0:K.source}}};var Q,Z,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="p-6 space-y-6">\r
      <div>\r
        <h3 className="text-lg font-medium mb-4">Details</h3>\r
\r
        {/* Example: Example */}\r
        <div className="mb-6">\r
          <h4 className="text-md font-medium mb-2">Example: Example ≤ Example</h4>\r
          <p className="text-sm text-muted-foreground mb-3">Example, auto-width, Details. </p>\r
\r
          <TableWrapper bordered>\r
            <Table>\r
              <TableHeader>\r
                <TableRow>\r
                  <TableHead cellWidth="xs">ID</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                  <TableHead cellWidth="md">Details</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                  <TableHead cellWidth="auto">Details</TableHead>\r
                </TableRow>\r
              </TableHeader>\r
              <TableBody>\r
                <TableRow>\r
                  <TableCell cellWidth="xs">001</TableCell>\r
                  <TableCell cellWidth="sm">Details</TableCell>\r
                  <TableCell cellWidth="md">138-0000-0000</TableCell>\r
                  <TableCell cellWidth="sm">Details</TableCell>\r
                  <TableCell cellWidth="auto">Details</TableCell>\r
                </TableRow>\r
              </TableBody>\r
            </Table>\r
          </TableWrapper>\r
        </div>\r
\r
        {/* Example: Example */}\r
        <div>\r
          <h4 className="text-md font-medium mb-2">Example: Example &gt; Example</h4>\r
          <p className="text-sm text-muted-foreground mb-3">Use fit-width for compact identifiers and status columns that should stay on one line.</p>\r
\r
          <TableWrapper bordered>\r
            <Table className="min-w-max">\r
              <TableHeader>\r
                <TableRow>\r
                  <TableHead cellWidth="fit">ID</TableHead>\r
                  <TableHead cellWidth="fit">Details</TableHead>\r
                  <TableHead cellWidth="fit">Details</TableHead>\r
                  <TableHead cellWidth="fit">Details</TableHead>\r
                  <TableHead cellWidth="fit">Details</TableHead>\r
                  <TableHead cellWidth="fit">Details</TableHead>\r
                  <TableHead cellWidth="xl">Details</TableHead>\r
                  <TableHead cellWidth="fit">Details</TableHead>\r
                </TableRow>\r
              </TableHeader>\r
              <TableBody>\r
                <TableRow>\r
                  <TableCell cellWidth="fit">1001</TableCell>\r
                  <TableCell cellWidth="fit">Details</TableCell>\r
                  <TableCell cellWidth="fit">lisi@example.com</TableCell>\r
                  <TableCell cellWidth="fit">138-1111-1111</TableCell>\r
                  <TableCell cellWidth="fit">Details</TableCell>\r
                  <TableCell cellWidth="fit">Details</TableCell>\r
                  <TableCell cellWidth="xl">Details, Details, Example</TableCell>\r
                  <TableCell cellWidth="fit">\r
                    <div className="flex items-center gap-1">\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">Edit</Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">Details</Button>\r
                    </div>\r
                  </TableCell>\r
                </TableRow>\r
                <TableRow>\r
                  <TableCell cellWidth="fit">1002</TableCell>\r
                  <TableCell cellWidth="fit">Details</TableCell>\r
                  <TableCell cellWidth="fit">wangwu@example.com</TableCell>\r
                  <TableCell cellWidth="fit">139-2222-2222</TableCell>\r
                  <TableCell cellWidth="fit">UIText</TableCell>\r
                  <TableCell cellWidth="fit">Details</TableCell>\r
                  <TableCell cellWidth="xl">Details</TableCell>\r
                  <TableCell cellWidth="fit">\r
                    <div className="flex items-center gap-1">\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">Edit</Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">Details</Button>\r
                    </div>\r
                  </TableCell>\r
                </TableRow>\r
                <TableRow>\r
                  <TableCell cellWidth="fit">1003</TableCell>\r
                  <TableCell cellWidth="fit">Details</TableCell>\r
                  <TableCell cellWidth="fit">zhaoliu@Example.com</TableCell>\r
                  <TableCell cellWidth="fit">137-3333-3333</TableCell>\r
                  <TableCell cellWidth="fit">Details</TableCell>\r
                  <TableCell cellWidth="fit">Details</TableCell>\r
                  <TableCell cellWidth="xl">Details, Details, Example</TableCell>\r
                  <TableCell cellWidth="fit">\r
                    <div className="flex items-center gap-1">\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">Edit</Button>\r
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs text-destructive">Details</Button>\r
                    </div>\r
                  </TableCell>\r
                </TableRow>\r
              </TableBody>\r
            </Table>\r
          </TableWrapper>\r
        </div>\r
      </div>\r
    </div>
}`,...(Y=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:Y.source}}};var ee,le,ae;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const data = [{
      id: '1001',
      name: 'Example',
      email: 'zhangsan@company.com',
      phone: '138-0000-0001',
      department: 'Example',
      position: 'Example',
      salary: 'P7',
      location: 'Example',
      manager: 'Example',
      project: 'ItemA',
      status: 'active',
      notes: 'Details, Example'
    }, {
      id: '1002',
      name: 'Example',
      email: 'lisi@company.com',
      phone: '138-0000-0002',
      department: 'Example',
      position: 'Example',
      salary: 'P6',
      location: 'Example',
      manager: 'Example',
      project: 'ItemB',
      status: 'active',
      notes: 'Details, Example'
    }, {
      id: '1003',
      name: 'Example',
      email: 'wangwu@company.com',
      phone: '138-0000-0003',
      department: 'Example',
      position: 'UIText',
      salary: 'P5',
      location: 'Example',
      manager: 'Example',
      project: 'ItemC',
      status: 'trial',
      notes: 'Details, Example'
    }, {
      id: '1004',
      name: 'Example',
      email: 'zhaoliu@company.com',
      phone: '138-0000-0004',
      department: 'Example',
      position: 'Example',
      salary: 'P4',
      location: 'Example',
      manager: 'Example',
      project: 'ItemD',
      status: 'leave',
      notes: 'Details'
    }, {
      id: '1005',
      name: 'Example',
      email: 'qianqi@company.com',
      phone: '138-0000-0005',
      department: 'Example',
      position: 'Example',
      salary: 'P5',
      location: 'Example',
      manager: 'Example',
      project: 'ItemE',
      status: 'active',
      notes: 'Details, Example'
    }];
    const handleSelectAll = (checked: boolean) => {
      setSelectAll(checked);
      setSelectedRows(checked ? data.map(item => item.id) : []);
    };
    const handleRowSelect = (id: string, checked: boolean) => {
      if (checked) {
        setSelectedRows([...selectedRows, id]);
      } else {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        setSelectAll(false);
      }
    };
    const getStatusText = (status: string) => {
      switch (status) {
        case 'active':
          return 'Example';
        case 'trial':
          return 'Example';
        case 'leave':
          return 'Example';
        default:
          return status;
      }
    };
    return <div className="p-6">\r
        <div className="mb-4">\r
          <h3 className="text-lg font-medium mb-2">Details</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Details. Details.\r
          </p>\r
        </div>\r
\r
        <TableWrapper bordered>\r
          <Table className="min-w-max">\r
            <TableHeader>\r
              <TableRow>\r
                <CheckboxHeaderCell stickyLeft checked={selectAll} onCheckedChange={checked => handleSelectAll(!!checked)} aria-label="Select all" />\r
                <TableHead stickyLeft cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit" variant="status">Details</TableHead>\r
                <TableHead cellWidth="auto">Details</TableHead>\r
              </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
              {data.map(item => <TableRow key={item.id}>\r
                  <CheckboxCell stickyLeft checked={selectedRows.includes(item.id)} onCheckedChange={checked => handleRowSelect(item.id, !!checked)} aria-label={\`Select \${item.name}\`} />\r
                  <TableCell stickyLeft cellWidth="fit">{item.name}</TableCell>\r
                  <TableCell cellWidth="fit">{item.email}</TableCell>\r
                  <TableCell cellWidth="fit">{item.phone}</TableCell>\r
                  <TableCell cellWidth="fit">{item.department}</TableCell>\r
                  <TableCell cellWidth="fit">{item.position}</TableCell>\r
                  <TableCell cellWidth="fit">{item.salary}</TableCell>\r
                  <TableCell cellWidth="fit">{item.location}</TableCell>\r
                  <TableCell cellWidth="fit">{item.manager}</TableCell>\r
                  <TableCell cellWidth="fit">{item.project}</TableCell>\r
                  <TableCell cellWidth="fit" variant="status">\r
                    <Tag variant={item.status === 'active' ? 'success' : item.status === 'trial' ? 'primary' : item.status === 'leave' ? 'warning' : 'default'}>\r
                      {getStatusText(item.status)}\r
                    </Tag>\r
                  </TableCell>\r
                  <TableCell cellWidth="auto">{item.notes}</TableCell>\r
                </TableRow>)}\r
            </TableBody>\r
          </Table>\r
        </TableWrapper>\r
      </div>;
  }
}`,...(ae=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var te,ie,re;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      id: '1001',
      name: 'Example',
      email: 'zhangsan@company.com',
      phone: '138-0000-0001',
      department: 'Example',
      position: 'Example',
      salary: 'P7',
      location: 'Example',
      manager: 'Example',
      project: 'ItemA',
      status: 'active',
      notes: 'Details'
    }, {
      id: '1002',
      name: 'Example',
      email: 'lisi@company.com',
      phone: '138-0000-0002',
      department: 'Example',
      position: 'Example',
      salary: 'P6',
      location: 'Example',
      manager: 'Example',
      project: 'ItemB',
      status: 'active',
      notes: 'Details'
    }, {
      id: '1003',
      name: 'Example',
      email: 'wangwu@company.com',
      phone: '138-0000-0003',
      department: 'Example',
      position: 'UIText',
      salary: 'P5',
      location: 'Example',
      manager: 'Example',
      project: 'ItemC',
      status: 'trial',
      notes: 'Details'
    }, {
      id: '1004',
      name: 'Example',
      email: 'zhaoliu@company.com',
      phone: '138-0000-0004',
      department: 'Example',
      position: 'Example',
      salary: 'P4',
      location: 'Example',
      manager: 'Example',
      project: 'ItemD',
      status: 'leave',
      notes: 'Details'
    }, {
      id: '1005',
      name: 'Example',
      email: 'qianqi@company.com',
      phone: '138-0000-0005',
      department: 'Example',
      position: 'Example',
      salary: 'P5',
      location: 'Example',
      manager: 'Example',
      project: 'ItemE',
      status: 'active',
      notes: 'Details'
    }];
    const getStatusText = (status: string) => {
      switch (status) {
        case 'active':
          return 'Example';
        case 'trial':
          return 'Example';
        case 'leave':
          return 'Example';
        default:
          return status;
      }
    };
    return <div className="p-6">\r
        <div className="mb-4">\r
          <h3 className="text-lg font-medium mb-2">Details</h3>\r
          <p className="text-sm text-muted-foreground">\r
            Details. Details.\r
          </p>\r
        </div>\r
\r
        <TableWrapper bordered>\r
          <Table className="min-w-max">\r
            <TableHeader>\r
              <TableRow>\r
                <TableHead cellWidth="fit">ID</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="fit">Details</TableHead>\r
                <TableHead cellWidth="auto">Details</TableHead>\r
                <TableHead cellWidth="fit" variant="status">Details</TableHead>\r
                <TableHead stickyRight cellWidth="fit" style={{
                right: '0px'
              }}>Details</TableHead>\r
              </TableRow>\r
            </TableHeader>\r
            <TableBody>\r
              {data.map(item => <TableRow key={item.id}>\r
                  <TableCell cellWidth="fit">{item.id}</TableCell>\r
                  <TableCell cellWidth="fit">{item.name}</TableCell>\r
                  <TableCell cellWidth="fit">{item.email}</TableCell>\r
                  <TableCell cellWidth="fit">{item.phone}</TableCell>\r
                  <TableCell cellWidth="fit">{item.department}</TableCell>\r
                  <TableCell cellWidth="fit">{item.position}</TableCell>\r
                  <TableCell cellWidth="fit">{item.salary}</TableCell>\r
                  <TableCell cellWidth="fit">{item.location}</TableCell>\r
                  <TableCell cellWidth="fit">{item.manager}</TableCell>\r
                  <TableCell cellWidth="fit">{item.project}</TableCell>\r
                  <TableCell cellWidth="auto">{item.notes}</TableCell>\r
                  <TableCell cellWidth="fit" variant="status">\r
                    <Tag variant={item.status === 'active' ? 'success' : item.status === 'trial' ? 'primary' : item.status === 'leave' ? 'warning' : 'default'}>\r
                      {getStatusText(item.status)}\r
                    </Tag>\r
                  </TableCell>\r
                  <ActionCell stickyRight style={{
                right: '0px'
              }} actions={[{
                label: 'Example option',
                onClick: () => console.log('Example', item.name)
              }, {
                label: 'Edit',
                onClick: () => console.log('Edit', item.name)
              }, {
                label: 'Example option',
                onClick: () => console.log('Example', item.name),
                variant: 'destructive'
              }]} />\r
                </TableRow>)}\r
            </TableBody>\r
          </Table>\r
        </TableWrapper>\r
      </div>;
  }
}`,...(re=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var se,ne,de;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    // Example
    const allData = Array.from({
      length: 50
    }, (_, i) => ({
      id: i + 1,
      name: \`Example\${i + 1}\`,
      email: \`employee\${i + 1}@company.com\`,
      role: ['Example', 'User', 'Edit'][i % 3],
      status: ['active', 'inactive', 'pending'][i % 3],
      createTime: \`2024-\${String(Math.floor(i / 10) + 1).padStart(2, '0')}-\${String(i % 10 + 1).padStart(2, '0')}\`
    }));

    // Example
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = allData.slice(startIndex, endIndex);
    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length
    };
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'active':
          return 'success';
        case 'inactive':
          return 'destructive';
        case 'pending':
          return 'warning';
        default:
          return 'default';
      }
    };
    const getStatusText = (status: string) => {
      switch (status) {
        case 'active':
          return 'Example';
        case 'inactive':
          return 'Example';
        case 'pending':
          return 'Example';
        default:
          return status;
      }
    };
    return <div className="p-6 space-y-6">\r
        <div>\r
          <h3 className="text-lg font-medium mb-2">Details</h3>\r
          <p className="text-sm text-muted-foreground mb-4">\r
            Details.\r
          </p>\r
        </div>\r
\r
        {/* Example TablePagination Example */}\r
        <div className="space-y-4">\r
          <TableWrapper bordered>\r
            <Table>\r
              <TableHeader>\r
                <TableRow>\r
                  <TableHead cellWidth="xs">ID</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                  <TableHead cellWidth="md">Details</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                </TableRow>\r
              </TableHeader>\r
              <TableBody>\r
                {currentData.map(item => <TableRow key={item.id}>\r
                    <TableCell cellWidth="xs" className="font-mono text-muted-foreground">\r
                      {item.id}\r
                    </TableCell>\r
                    <TableCell cellWidth="sm">{item.name}</TableCell>\r
                    <TableCell cellWidth="md">{item.email}</TableCell>\r
                    <TableCell cellWidth="sm">{item.role}</TableCell>\r
                    <TableCell cellWidth="sm">\r
                      <Tag variant={getStatusVariant(item.status)}>\r
                        {getStatusText(item.status)}\r
                      </Tag>\r
                    </TableCell>\r
                    <TableCell cellWidth="sm">{item.createTime}</TableCell>\r
                    <TableCell cellWidth="sm">\r
                      <div className="flex items-center gap-2">\r
                        <Button variant="link" size="sm" className="h-auto p-0 text-sm">\r
                          Edit\r
                        </Button>\r
                        <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">\r
                          Details\r
                        </Button>\r
                      </div>\r
                    </TableCell>\r
                  </TableRow>)}\r
              </TableBody>\r
            </Table>\r
          </TableWrapper>\r
\r
          <TablePagination pagination={pagination} onPageChange={handlePageChange} showTotal={(total, range) => \`Example \${total} Details \${range[0]}-\${range[1]} Example\`} />\r
        </div>\r
      </div>;
  }
}`,...(de=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ce,me,oe;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    // Example
    const allData = Array.from({
      length: 73
    }, (_, i) => ({
      id: i + 1,
      name: \`User\${i + 1}\`,
      email: \`user\${i + 1}@Example.com\`,
      role: ['Example', 'User', 'Edit', 'Example'][i % 4],
      status: ['active', 'inactive', 'pending'][i % 3],
      lastLogin: i % 5 === 0 ? 'Example' : \`2024-01-\${String(i % 28 + 1).padStart(2, '0')} \${String(i % 12 + 10).padStart(2, '0')}:\${String(i % 60).padStart(2, '0')}\`
    }));
    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length
    };
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    const getStatusVariant = (status: string) => {
      switch (status) {
        case 'active':
          return 'success';
        case 'inactive':
          return 'destructive';
        case 'pending':
          return 'warning';
        default:
          return 'default';
      }
    };
    const getStatusText = (status: string) => {
      switch (status) {
        case 'active':
          return 'Example';
        case 'inactive':
          return 'Example';
        case 'pending':
          return 'Example';
        default:
          return status;
      }
    };

    // Example
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = allData.slice(startIndex, endIndex);
    return <div className="p-6 space-y-6">\r
        <div>\r
          <h3 className="text-lg font-medium mb-2">Details</h3>\r
          <p className="text-sm text-muted-foreground mb-4">\r
            Example TableWithPagination Component, Details API.\r
          </p>\r
        </div>\r
\r
        <TableWithPagination data={allData} columns={[]} // Example
      pagination={pagination} onPageChange={handlePageChange} wrapperProps={{
        bordered: true
      }}>\r
          <TableHeader>\r
            <TableRow>\r
              <TableHead cellWidth="xs">ID</TableHead>\r
              <TableHead cellWidth="sm">Username</TableHead>\r
              <TableHead cellWidth="md">Details</TableHead>\r
              <TableHead cellWidth="sm">Details</TableHead>\r
              <TableHead cellWidth="sm">Details</TableHead>\r
              <TableHead cellWidth="md">Details</TableHead>\r
              <TableHead cellWidth="sm">Details</TableHead>\r
            </TableRow>\r
          </TableHeader>\r
          <TableBody>\r
            {currentData.map(item => <TableRow key={item.id}>\r
                <TableCell cellWidth="xs" className="font-mono text-muted-foreground">\r
                  {item.id}\r
                </TableCell>\r
                <TableCell cellWidth="sm">{item.name}</TableCell>\r
                <TableCell cellWidth="md">{item.email}</TableCell>\r
                <TableCell cellWidth="sm">{item.role}</TableCell>\r
                <TableCell cellWidth="sm">\r
                  <Tag variant={getStatusVariant(item.status)}>\r
                    {getStatusText(item.status)}\r
                  </Tag>\r
                </TableCell>\r
                <TableCell cellWidth="md">{item.lastLogin}</TableCell>\r
                <TableCell cellWidth="sm">\r
                  <div className="flex items-center gap-1">\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-sm">\r
                      Edit\r
                    </Button>\r
                    <Button variant="link" size="sm" className="h-auto p-0 text-sm text-destructive">\r
                      Details\r
                    </Button>\r
                  </div>\r
                </TableCell>\r
              </TableRow>)}\r
          </TableBody>\r
        </TableWithPagination>\r
      </div>;
  }
}`,...(oe=(me=P.parameters)==null?void 0:me.docs)==null?void 0:oe.source}}};var he,xe,pe;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const allData = Array.from({
      length: 25
    }, (_, i) => ({
      id: i + 1,
      product: \`Example \${i + 1}\`,
      price: (Math.random() * 1000).toFixed(2),
      stock: Math.floor(Math.random() * 500),
      category: ['Example', 'Example', 'Example', 'Example'][i % 4],
      status: ['Example', 'Example', 'Example'][i % 3]
    }));
    const pagination: PaginationState = {
      current: currentPage,
      pageSize: pageSize,
      total: allData.length
    };
    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };
    const currentData = allData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    return <div className="p-6 space-y-6">\r
        <div>\r
          <h3 className="text-lg font-medium mb-2">Details</h3>\r
          <p className="text-sm text-muted-foreground mb-4">\r
            Details.\r
          </p>\r
        </div>\r
\r
        <div className="space-y-4">\r
          <TableWrapper bordered>\r
            <Table>\r
              <TableHeader>\r
                <TableRow>\r
                  <TableHead cellWidth="xs">ID</TableHead>\r
                  <TableHead cellWidth="md">Details</TableHead>\r
                  <TableHead cellWidth="sm" variant="numeric">Details</TableHead>\r
                  <TableHead cellWidth="sm" variant="numeric">Details</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                  <TableHead cellWidth="sm">Details</TableHead>\r
                </TableRow>\r
              </TableHeader>\r
              <TableBody>\r
                {currentData.map(item => <TableRow key={item.id}>\r
                    <TableCell cellWidth="xs" className="font-mono text-muted-foreground">\r
                      {item.id}\r
                    </TableCell>\r
                    <TableCell cellWidth="md">{item.product}</TableCell>\r
                    <TableCell cellWidth="sm" variant="numeric">¥{item.price}</TableCell>\r
                    <TableCell cellWidth="sm" variant="numeric">{item.stock}</TableCell>\r
                    <TableCell cellWidth="sm">{item.category}</TableCell>\r
                    <TableCell cellWidth="sm">\r
                      <Tag variant={item.status === 'Example' ? 'success' : item.status === 'Example' ? 'destructive' : 'warning'}>\r
                        {item.status}\r
                      </Tag>\r
                    </TableCell>\r
                  </TableRow>)}\r
              </TableBody>\r
            </Table>\r
          </TableWrapper>\r
\r
          <TablePagination pagination={pagination} onPageChange={handlePageChange} showTotal={(total, range) => \`Example \${range[0]}-\${range[1]} Details \${total} Example\`} />\r
        </div>\r
      </div>;
  }
}`,...(pe=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:pe.source}}};const _e=["Default","PageStickyHeader","WithSelectableRows","EmptyState","HorizontalScroll","ColumnWidthGuide","LeftStickyColumns","RightStickyColumns","WithPagination","IntegratedPagination","CustomPaginationInfo"];export{w as ColumnWidthGuide,I as CustomPaginationInfo,D as Default,S as EmptyState,y as HorizontalScroll,P as IntegratedPagination,N as LeftStickyColumns,v as PageStickyHeader,k as RightStickyColumns,R as WithPagination,H as WithSelectableRows,_e as __namedExportsOrder,Je as default};
