import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-czYKJxbX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,h as i,r as a}from"./dist-DkfC12oa.js";import{r as o,t as s}from"./dist-DifBdbAQ.js";import{a as c,c as l,d as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./select-trigger-CjDNMtyv.js";var y,b,x;function S(){return(S=e((()=>{o(),i(),y=t(),g(),b=n(),x=(0,y.forwardRef)(({children:e,className:t,label:n},i)=>(0,b.jsxs)(a,{className:[s(`select`,{part:`group`}),l(t)].filter(Boolean).join(` `),"data-slot":`select-group`,ref:i,children:[n===void 0?null:(0,b.jsx)(r,{className:`${s(`select`,{part:`group-label`})} px-3 py-2 text-xs font-medium text-[var(--color-content-secondary)]`,"data-slot":`select-group-label`,children:n}),e]})),x.displayName=`SelectGroup`;try{x.displayName=`SelectGroup`,x.__docgenInfo={description:``,displayName:`SelectGroup`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/forms/select/select-group.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/select/select.tsx`,name:`SelectGroupProps`}],description:``,name:`label`,parent:{fileName:`jlca-design-system/packages/primitives/src/forms/select/select.tsx`,name:`SelectGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/select/select.tsx`,name:`SelectGroupProps`}],description:``,name:`className`,parent:{fileName:`jlca-design-system/packages/primitives/src/forms/select/select.tsx`,name:`SelectGroupProps`},required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{C=t(),u(),m(),S(),d(),p(),w=n(),T={title:`Primitives/Forms/Select`,component:f,parameters:{layout:`centered`,docs:{description:{component:"Select represents one choice from a predefined list. Give the trigger an accessible name with `aria-label` or `aria-labelledby`; use `FormGroup` with `Field` when the control needs a visible label, description, or validation message."}}},tags:[`autodocs`]},E=()=>(0,w.jsxs)(c,{children:[(0,w.jsx)(h,{value:`서울`,children:`서울`}),(0,w.jsx)(h,{value:`부산`,children:`부산`}),(0,w.jsx)(h,{value:`대구`,children:`대구`}),(0,w.jsx)(h,{value:`제주`,children:`제주`})]}),D=({invalid:e})=>(0,w.jsx)(_,{"aria-invalid":e,"aria-label":`시/도`,children:(0,w.jsx)(v,{placeholder:`시/도 선택`})}),O={render:()=>(0,w.jsx)(`div`,{className:`w-72`,children:(0,w.jsxs)(f,{defaultValue:`서울`,name:`city`,children:[(0,w.jsx)(D,{}),(0,w.jsx)(E,{})]})})},k={render:()=>(0,w.jsx)(`div`,{className:`w-72`,children:(0,w.jsxs)(f,{name:`city`,children:[(0,w.jsx)(D,{}),(0,w.jsx)(E,{})]})})},A={render:function(){let[e,t]=(0,C.useState)(`서울`);return(0,w.jsxs)(`div`,{className:`w-72 space-y-3`,children:[(0,w.jsxs)(f,{name:`city`,value:e,onValueChange:t,children:[(0,w.jsx)(D,{}),(0,w.jsx)(E,{})]}),(0,w.jsxs)(`p`,{className:`text-sm text-[var(--color-content-secondary)]`,children:[`선택된 지역: `,e]})]})}},j={render:()=>(0,w.jsx)(`div`,{className:`w-72`,children:(0,w.jsxs)(f,{defaultValue:`서울`,children:[(0,w.jsx)(D,{}),(0,w.jsxs)(c,{children:[(0,w.jsxs)(x,{label:`특별시·광역시`,children:[(0,w.jsx)(h,{value:`서울`,children:`서울`}),(0,w.jsx)(h,{value:`부산`,children:`부산`}),(0,w.jsx)(h,{value:`대구`,children:`대구`})]}),(0,w.jsxs)(x,{label:`도`,children:[(0,w.jsx)(h,{value:`경기`,children:`경기`}),(0,w.jsx)(h,{value:`강원`,children:`강원`}),(0,w.jsx)(h,{value:`제주`,children:`제주`})]})]})]})})},M={render:()=>(0,w.jsx)(`div`,{className:`w-72`,children:(0,w.jsxs)(f,{defaultValue:`서울`,children:[(0,w.jsx)(D,{}),(0,w.jsxs)(c,{children:[(0,w.jsx)(h,{value:`서울`,children:`서울`}),(0,w.jsx)(h,{disabled:!0,value:`부산`,children:`부산 (선택 불가)`}),(0,w.jsx)(h,{value:`제주`,children:`제주`})]})]})})},N={render:()=>(0,w.jsx)(`div`,{className:`w-72`,children:(0,w.jsxs)(f,{disabled:!0,defaultValue:`서울`,children:[(0,w.jsx)(D,{}),(0,w.jsx)(E,{})]})})},P={render:()=>(0,w.jsxs)(`div`,{className:`w-72 space-y-2`,children:[(0,w.jsxs)(f,{required:!0,name:`city`,children:[(0,w.jsx)(D,{invalid:!0}),(0,w.jsx)(E,{})]}),(0,w.jsx)(`p`,{className:`text-sm text-[var(--color-feedback-danger-background)]`,children:`시/도를 선택해 주세요.`})]})},F={render:()=>(0,w.jsx)(`div`,{className:`w-72`,children:(0,w.jsxs)(f,{defaultValue:`long`,children:[(0,w.jsx)(D,{}),(0,w.jsxs)(c,{children:[(0,w.jsx)(h,{value:`서울`,children:`서울`}),(0,w.jsx)(h,{textValue:`긴 지역 이름`,value:`long`,children:`행정 구역명이 매우 길어 한 줄을 넘어갈 수 있는 선택 항목`})]})]})})},I={render:function(){return(0,C.useEffect)(()=>{let e=document.documentElement,t=e.classList.contains(`dark`);return e.classList.add(`dark`),()=>{t||e.classList.remove(`dark`)}},[]),(0,w.jsx)(`div`,{className:`w-80 rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4`,children:(0,w.jsxs)(f,{defaultValue:`서울`,children:[(0,w.jsx)(D,{}),(0,w.jsx)(E,{})]})})}},L={render:()=>(0,w.jsxs)(`div`,{className:`w-80 space-y-3`,children:[(0,w.jsx)(`p`,{className:`text-sm text-[var(--color-content-secondary)]`,children:`Enter로 열고 화살표, Home, End 또는 지역명의 첫 글자로 이동하세요. Escape로 닫으면 트리거로 초점이 돌아옵니다.`}),(0,w.jsxs)(f,{children:[(0,w.jsx)(D,{}),(0,w.jsx)(E,{})]})]})},R={render:()=>(0,w.jsxs)(`div`,{className:`w-72`,children:[(0,w.jsxs)(f,{children:[(0,w.jsx)(D,{}),(0,w.jsx)(E,{})]}),(0,w.jsx)(`div`,{className:`mt-4 h-10 rounded-[var(--radius-md)] bg-[var(--color-surface-subtle)]`,"data-testid":`select-layout-marker`})]})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select defaultValue="서울" name="city">
        <RegionTrigger />
        <RegionOptions />
      </Select>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select name="city">
        <RegionTrigger />
        <RegionOptions />
      </Select>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [value, setValue] = useState('서울');
    return <div className="w-72 space-y-3">
        <Select name="city" value={value} onValueChange={setValue}>
          <RegionTrigger />
          <RegionOptions />
        </Select>
        <p className="text-sm text-[var(--color-content-secondary)]">
          선택된 지역: {value}
        </p>
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select defaultValue="서울">
        <RegionTrigger />
        <SelectContent>
          <SelectGroup label="특별시·광역시">
            <SelectOption value="서울">서울</SelectOption>
            <SelectOption value="부산">부산</SelectOption>
            <SelectOption value="대구">대구</SelectOption>
          </SelectGroup>
          <SelectGroup label="도">
            <SelectOption value="경기">경기</SelectOption>
            <SelectOption value="강원">강원</SelectOption>
            <SelectOption value="제주">제주</SelectOption>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select defaultValue="서울">
        <RegionTrigger />
        <SelectContent>
          <SelectOption value="서울">서울</SelectOption>
          <SelectOption disabled value="부산">
            부산 (선택 불가)
          </SelectOption>
          <SelectOption value="제주">제주</SelectOption>
        </SelectContent>
      </Select>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select disabled defaultValue="서울">
        <RegionTrigger />
        <RegionOptions />
      </Select>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72 space-y-2">
      <Select required name="city">
        <RegionTrigger invalid />
        <RegionOptions />
      </Select>
      <p className="text-sm text-[var(--color-feedback-danger-background)]">
        시/도를 선택해 주세요.
      </p>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select defaultValue="long">
        <RegionTrigger />
        <SelectContent>
          <SelectOption value="서울">서울</SelectOption>
          <SelectOption textValue="긴 지역 이름" value="long">
            행정 구역명이 매우 길어 한 줄을 넘어갈 수 있는 선택 항목
          </SelectOption>
        </SelectContent>
      </Select>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function DarkStory() {
    useEffect(() => {
      const root = document.documentElement;
      const wasDark = root.classList.contains('dark');
      root.classList.add('dark');
      return () => {
        if (!wasDark) root.classList.remove('dark');
      };
    }, []);
    return <div className="w-80 rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4">
        <Select defaultValue="서울">
          <RegionTrigger />
          <RegionOptions />
        </Select>
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-3">
      <p className="text-sm text-[var(--color-content-secondary)]">
        Enter로 열고 화살표, Home, End 또는 지역명의 첫 글자로 이동하세요.
        Escape로 닫으면 트리거로 초점이 돌아옵니다.
      </p>
      <Select>
        <RegionTrigger />
        <RegionOptions />
      </Select>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select>
        <RegionTrigger />
        <RegionOptions />
      </Select>
      <div className="mt-4 h-10 rounded-[var(--radius-md)] bg-[var(--color-surface-subtle)]" data-testid="select-layout-marker" />
    </div>
}`,...R.parameters?.docs?.source}}},z=[`Default`,`Placeholder`,`Controlled`,`Grouped`,`DisabledOption`,`DisabledRoot`,`Invalid`,`LongOption`,`Dark`,`Keyboard`,`LayoutStability`]})))()}B();export{A as Controlled,I as Dark,O as Default,M as DisabledOption,N as DisabledRoot,j as Grouped,P as Invalid,L as Keyboard,R as LayoutStability,F as LongOption,k as Placeholder,z as __namedExportsOrder,T as default};