import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{r as C}from"./index-Bc2G9s8g.js";import"./button-BaFs26jy.js";import"./form-CZeh-vxi.js";import"./top-nav-tlAE2T-F.js";import{u as i}from"./block-layout-CN-wBIVs.js";import"./button-group-EZfk3CSA.js";import"./color-palette-B3zZTyh2.js";import"./city-select-ye53cQ2m.js";import"./cascader-uB5K2ixH.js";import"./tags-input-DnWhU4pZ.js";import"./toast-B2bv34x0.js";import"./tags--LNP6sCy.js";import"./index-DQ332JpS.js";import"./index-BO6cjGmN.js";import"./utils-CJDSjbh9.js";import"./createLucideIcon-Si29XmKi.js";import"./chevron-right-ByHdH1N4.js";import"./search-CHUBTwRr.js";const ke={title:"Navigation/Steps",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["default","sm"]},orientation:{control:{type:"select"},options:["horizontal","vertical"]},clickable:{control:"boolean"},current:{control:{type:"number",min:0,max:4}}}},r=[{id:"step1",title:"Personal information",description:"Enter your basic information"},{id:"step2",title:"Contact information",description:"Provide a phone number and email"},{id:"step3",title:"Identity verification",description:"Upload an identity document"},{id:"step4",title:"Complete registration",description:"Confirm and submit information"}],a={args:{steps:r,current:1},render:t=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(i,{...t})})},c={args:{steps:r,current:1,size:"sm"},render:t=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(i,{...t})})},d={args:{steps:r,current:1,clickable:!0},render:t=>{const[n,s]=C.useState(t.current||0);return e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(i,{...t,current:n,onStepClick:o=>s(o)})})}},l={args:{steps:[{id:"step1",title:"Order confirmation",description:"Confirm order information",status:"completed"},{id:"step2",title:"Payment",description:"Choose a payment method",status:"current"},{id:"step3",title:"Delivery",description:"Confirm the information before continuing.",status:"pending"},{id:"step4",title:"Done",description:"Confirm the information before continuing.",status:"pending"}]},render:t=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(i,{...t})})},m={args:{steps:[{id:"step1",title:"Review details",description:"Confirm the information before continuing.",status:"completed"},{id:"step2",title:"Review details",description:"Confirm the information before continuing.",status:"error"},{id:"step3",title:"Review details",description:"Confirm the information before continuing.",status:"pending"}]}},p={args:{steps:[{id:"step1",title:"Review details",description:"Confirm the information before continuing."},{id:"step2",title:"Review details",description:"Confirm the information before continuing."},{id:"step3",title:"Review details",description:"UI/UX design"},{id:"step4",title:"Review details",description:"Confirm the information before continuing."},{id:"step5",title:"Review details",description:"Confirm the information before continuing."},{id:"step6",title:"Review details",description:"Confirm the information before continuing."}],current:3,size:"sm"}},u={args:{steps:r},render:()=>{const[t,n]=C.useState(0),s=()=>{t<r.length-1&&n(t+1)},o=()=>{t>0&&n(t-1)},oe=ae=>{n(ae)};return e.jsxs("div",{className:"space-y-8",children:[e.jsx(i,{steps:r,current:t,clickable:!0,onStepClick:oe}),e.jsxs("div",{className:"flex gap-4 justify-center",children:[e.jsx("button",{onClick:o,disabled:t===0,className:"px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300",children:"Continue"}),e.jsx("button",{onClick:s,disabled:t===r.length-1,className:"px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600",children:"Continue"})]}),e.jsxs("div",{className:"text-center text-sm text-gray-600",children:["sample: ",t+1," / ",r.length]})]})}},f={args:{steps:r},render:()=>e.jsxs("div",{className:"space-y-12 max-w-4xl",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Continue"}),e.jsx(i,{steps:r,current:1})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Continue"}),e.jsx(i,{steps:r,current:1,size:"sm"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Continue"}),e.jsx(i,{steps:[{id:"1",title:"Review details",description:"Confirm the information before continuing.",status:"completed"},{id:"2",title:"Review details",description:"Confirm the information before continuing.",status:"current"},{id:"3",title:"Review details",description:"Confirm the information before continuing.",status:"error"},{id:"4",title:"Review details",description:"Confirm the information before continuing.",status:"pending"}]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Continue"}),e.jsx(i,{steps:[{id:"1",title:"Review details"},{id:"2",title:"Review details"},{id:"3",title:"Review details"},{id:"4",title:"Review details"}],current:2})]})]})},g={args:{steps:r,current:1,orientation:"vertical"},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(i,{...t})})},v={args:{steps:r,current:1,orientation:"vertical",size:"sm"},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(i,{...t})})},b={args:{steps:r,current:1,orientation:"vertical",clickable:!0},render:t=>{const[n,s]=C.useState(t.current||0);return e.jsx("div",{className:"max-w-md",children:e.jsx(i,{...t,current:n,onStepClick:o=>s(o)})})}},h={args:{steps:[{id:"step1",title:"Review details",description:"Confirm the information before continuing.",status:"completed"},{id:"step2",title:"Review details",description:"Confirm the information before continuing.",status:"completed"},{id:"step3",title:"Review details",description:"Confirm the information before continuing.",status:"current"},{id:"step4",title:"Review details",description:"Confirm the information before continuing.",status:"pending"},{id:"step5",title:"Review details",description:"Confirm the information before continuing.",status:"pending"}],orientation:"vertical"},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(i,{...t})})},x={args:{steps:[{id:"step1",title:"Review details",description:"Confirm the information before continuing.",status:"completed"},{id:"step2",title:"Review details",description:"Confirm the information before continuing.",status:"error"},{id:"step3",title:"Review details",description:"Confirm the information before continuing.",status:"pending"}],orientation:"vertical"},render:t=>e.jsx("div",{className:"max-w-md",children:e.jsx(i,{...t})})};var w,S,R;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1
  },
  render: args => <div className="w-full max-w-4xl">\r
      <Steps {...args} />\r
    </div>
}`,...(R=(S=a.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var N,j,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    size: 'sm'
  },
  render: args => <div className="w-full max-w-4xl">\r
      <Steps {...args} />\r
    </div>
}`,...(y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var k,V,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    clickable: true
  },
  render: args => {
    const [current, setCurrent] = useState(args.current || 0);
    return <div className="w-full max-w-4xl">\r
        <Steps {...args} current={current} onStepClick={step => setCurrent(step)} />\r
      </div>;
  }
}`,...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var P,E,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: 'Order confirmation',
      description: 'Confirm order information',
      status: 'completed'
    }, {
      id: 'step2',
      title: 'Payment',
      description: 'Choose a payment method',
      status: 'current'
    }, {
      id: 'step3',
      title: 'Delivery',
      description: 'Confirm the information before continuing.',
      status: 'pending'
    }, {
      id: 'step4',
      title: 'Done',
      description: 'Confirm the information before continuing.',
      status: 'pending'
    }]
  },
  render: args => <div className="w-full max-w-4xl">\r
      <Steps {...args} />\r
    </div>
}`,...(W=(E=l.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var D,I,U;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'completed'
    }, {
      id: 'step2',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'error'
    }, {
      id: 'step3',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'pending'
    }]
  }
}`,...(U=(I=m.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var O,A,L;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: 'Review details',
      description: 'Confirm the information before continuing.'
    }, {
      id: 'step2',
      title: 'Review details',
      description: 'Confirm the information before continuing.'
    }, {
      id: 'step3',
      title: 'Review details',
      description: 'UI/UX design'
    }, {
      id: 'step4',
      title: 'Review details',
      description: 'Confirm the information before continuing.'
    }, {
      id: 'step5',
      title: 'Review details',
      description: 'Confirm the information before continuing.'
    }, {
      id: 'step6',
      title: 'Review details',
      description: 'Confirm the information before continuing.'
    }],
    current: 3,
    size: 'sm'
  }
}`,...(L=(A=p.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var X,_,T;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    steps: basicSteps
  },
  render: () => {
    const [current, setCurrent] = useState(0);
    const handleNext = () => {
      if (current < basicSteps.length - 1) {
        setCurrent(current + 1);
      }
    };
    const handlePrev = () => {
      if (current > 0) {
        setCurrent(current - 1);
      }
    };
    const handleStepClick = (step: number) => {
      setCurrent(step);
    };
    return <div className="space-y-8">\r
        <Steps steps={basicSteps} current={current} clickable onStepClick={handleStepClick} />\r
        <div className="flex gap-4 justify-center">\r
          <button onClick={handlePrev} disabled={current === 0} className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300">\r
            Continue\r
          </button>\r
          <button onClick={handleNext} disabled={current === basicSteps.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600">\r
            Continue\r
          </button>\r
        </div>\r
        <div className="text-center text-sm text-gray-600">\r
          sample: {current + 1} / {basicSteps.length}\r
        </div>\r
      </div>;
  }
}`,...(T=(_=u.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var q,B,F;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps: basicSteps
  },
  render: () => {
    return <div className="space-y-12 max-w-4xl">\r
        <div>\r
          <h3 className="text-lg font-medium mb-4">Continue</h3>\r
          <Steps steps={basicSteps} current={1} />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-lg font-medium mb-4">Continue</h3>\r
          <Steps steps={basicSteps} current={1} size="sm" />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-lg font-medium mb-4">Continue</h3>\r
          <Steps steps={[{
          id: '1',
          title: 'Review details',
          description: 'Confirm the information before continuing.',
          status: 'completed'
        }, {
          id: '2',
          title: 'Review details',
          description: 'Confirm the information before continuing.',
          status: 'current'
        }, {
          id: '3',
          title: 'Review details',
          description: 'Confirm the information before continuing.',
          status: 'error'
        }, {
          id: '4',
          title: 'Review details',
          description: 'Confirm the information before continuing.',
          status: 'pending'
        }]} />\r
        </div>\r
\r
        <div>\r
          <h3 className="text-lg font-medium mb-4">Continue</h3>\r
          <Steps steps={[{
          id: '1',
          title: 'Review details'
        }, {
          id: '2',
          title: 'Review details'
        }, {
          id: '3',
          title: 'Review details'
        }, {
          id: '4',
          title: 'Review details'
        }]} current={2} />\r
        </div>\r
      </div>;
  }
}`,...(F=(B=f.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical'
  },
  render: args => <div className="max-w-md">\r
      <Steps {...args} />\r
    </div>
}`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical',
    size: 'sm'
  },
  render: args => <div className="max-w-md">\r
      <Steps {...args} />\r
    </div>
}`,...(Q=(M=v.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    orientation: 'vertical',
    clickable: true
  },
  render: args => {
    const [current, setCurrent] = useState(args.current || 0);
    return <div className="max-w-md">\r
        <Steps {...args} current={current} onStepClick={step => setCurrent(step)} />\r
      </div>;
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ie;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'completed'
    }, {
      id: 'step2',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'completed'
    }, {
      id: 'step3',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'current'
    }, {
      id: 'step4',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'pending'
    }, {
      id: 'step5',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'pending'
    }],
    orientation: 'vertical'
  },
  render: args => <div className="max-w-md">\r
      <Steps {...args} />\r
    </div>
}`,...(ie=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var re,ne,se;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: 'step1',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'completed'
    }, {
      id: 'step2',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'error'
    }, {
      id: 'step3',
      title: 'Review details',
      description: 'Confirm the information before continuing.',
      status: 'pending'
    }],
    orientation: 'vertical'
  },
  render: args => <div className="max-w-md">\r
      <Steps {...args} />\r
    </div>
}`,...(se=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};const Ve=["Default","Small","Clickable","WithCustomStatus","WithError","LongProcess","Interactive","AllVariants","Vertical","VerticalSmall","VerticalClickable","VerticalWithCustomStatus","VerticalWithError"];export{f as AllVariants,d as Clickable,a as Default,u as Interactive,p as LongProcess,c as Small,g as Vertical,b as VerticalClickable,v as VerticalSmall,h as VerticalWithCustomStatus,x as VerticalWithError,l as WithCustomStatus,m as WithError,Ve as __namedExportsOrder,ke as default};
