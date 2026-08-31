import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-B6MoEi_i.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{c as r,h as i,r as a}from"./dist-DZHSpG2U.js";import{a as o,c as s,d as c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./select-trigger-CVIFrhAP.js";var _,v,y;function b(){return(b=e((()=>{_=t(),i(),m(),v=n(),y=(0,_.forwardRef)(({children:e,className:t,label:n},i)=>(0,v.jsxs)(a,{className:s(t),"data-slot":`select-group`,ref:i,children:[n===void 0?null:(0,v.jsx)(r,{className:`px-3 py-2 text-xs font-medium text-[var(--color-content-secondary)]`,"data-slot":`select-group-label`,children:n}),e]})),y.displayName=`SelectGroup`;try{y.displayName=`SelectGroup`,y.__docgenInfo={description:``,displayName:`SelectGroup`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/select/select-group.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/select/select.types.ts`,name:`SelectGroupProps`}],description:``,name:`label`,parent:{fileName:`jlca-design-system/packages/primitives/src/select/select.types.ts`,name:`SelectGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/select/select.types.ts`,name:`SelectGroupProps`}],description:``,name:`className`,parent:{fileName:`jlca-design-system/packages/primitives/src/select/select.types.ts`,name:`SelectGroupProps`},required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{x=t(),c(),f(),b(),l(),d(),S=n(),C={title:`Primitives/Select`,component:u,parameters:{layout:`centered`},tags:[`autodocs`]},w=()=>(0,S.jsxs)(o,{children:[(0,S.jsx)(p,{value:`서울`,children:`서울`}),(0,S.jsx)(p,{value:`부산`,children:`부산`}),(0,S.jsx)(p,{value:`대구`,children:`대구`}),(0,S.jsx)(p,{value:`제주`,children:`제주`})]}),T=({invalid:e})=>(0,S.jsx)(h,{"aria-invalid":e,"aria-label":`시/도`,children:(0,S.jsx)(g,{placeholder:`시/도 선택`})}),E={render:()=>(0,S.jsx)(`div`,{className:`w-72`,children:(0,S.jsxs)(u,{defaultValue:`서울`,name:`city`,children:[(0,S.jsx)(T,{}),(0,S.jsx)(w,{})]})})},D={render:()=>(0,S.jsx)(`div`,{className:`w-72`,children:(0,S.jsxs)(u,{name:`city`,children:[(0,S.jsx)(T,{}),(0,S.jsx)(w,{})]})})},O={render:function(){let[e,t]=(0,x.useState)(`서울`);return(0,S.jsxs)(`div`,{className:`w-72 space-y-3`,children:[(0,S.jsxs)(u,{name:`city`,value:e,onValueChange:t,children:[(0,S.jsx)(T,{}),(0,S.jsx)(w,{})]}),(0,S.jsxs)(`p`,{className:`text-sm text-[var(--color-content-secondary)]`,children:[`선택된 지역: `,e]})]})}},k={render:()=>(0,S.jsx)(`div`,{className:`w-72`,children:(0,S.jsxs)(u,{defaultValue:`서울`,children:[(0,S.jsx)(T,{}),(0,S.jsxs)(o,{children:[(0,S.jsxs)(y,{label:`특별시·광역시`,children:[(0,S.jsx)(p,{value:`서울`,children:`서울`}),(0,S.jsx)(p,{value:`부산`,children:`부산`}),(0,S.jsx)(p,{value:`대구`,children:`대구`})]}),(0,S.jsxs)(y,{label:`도`,children:[(0,S.jsx)(p,{value:`경기`,children:`경기`}),(0,S.jsx)(p,{value:`강원`,children:`강원`}),(0,S.jsx)(p,{value:`제주`,children:`제주`})]})]})]})})},A={render:()=>(0,S.jsx)(`div`,{className:`w-72`,children:(0,S.jsxs)(u,{defaultValue:`서울`,children:[(0,S.jsx)(T,{}),(0,S.jsxs)(o,{children:[(0,S.jsx)(p,{value:`서울`,children:`서울`}),(0,S.jsx)(p,{disabled:!0,value:`부산`,children:`부산 (선택 불가)`}),(0,S.jsx)(p,{value:`제주`,children:`제주`})]})]})})},j={render:()=>(0,S.jsx)(`div`,{className:`w-72`,children:(0,S.jsxs)(u,{disabled:!0,defaultValue:`서울`,children:[(0,S.jsx)(T,{}),(0,S.jsx)(w,{})]})})},M={render:()=>(0,S.jsxs)(`div`,{className:`w-72 space-y-2`,children:[(0,S.jsxs)(u,{required:!0,name:`city`,children:[(0,S.jsx)(T,{invalid:!0}),(0,S.jsx)(w,{})]}),(0,S.jsx)(`p`,{className:`text-sm text-[var(--color-feedback-danger-background)]`,children:`시/도를 선택해 주세요.`})]})},N={render:()=>(0,S.jsx)(`div`,{className:`w-72`,children:(0,S.jsxs)(u,{defaultValue:`long`,children:[(0,S.jsx)(T,{}),(0,S.jsxs)(o,{children:[(0,S.jsx)(p,{value:`서울`,children:`서울`}),(0,S.jsx)(p,{textValue:`긴 지역 이름`,value:`long`,children:`행정 구역명이 매우 길어 한 줄을 넘어갈 수 있는 선택 항목`})]})]})})},P={render:function(){return(0,x.useEffect)(()=>{let e=document.documentElement,t=e.classList.contains(`dark`);return e.classList.add(`dark`),()=>{t||e.classList.remove(`dark`)}},[]),(0,S.jsx)(`div`,{className:`w-80 rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4`,children:(0,S.jsxs)(u,{defaultValue:`서울`,children:[(0,S.jsx)(T,{}),(0,S.jsx)(w,{})]})})}},F={render:()=>(0,S.jsxs)(`div`,{className:`w-80 space-y-3`,children:[(0,S.jsx)(`p`,{className:`text-sm text-[var(--color-content-secondary)]`,children:`Enter로 열고 화살표, Home, End 또는 지역명의 첫 글자로 이동하세요. Escape로 닫으면 트리거로 초점이 돌아옵니다.`}),(0,S.jsxs)(u,{children:[(0,S.jsx)(T,{}),(0,S.jsx)(w,{})]})]})},I={render:()=>(0,S.jsxs)(`div`,{className:`w-72`,children:[(0,S.jsxs)(u,{children:[(0,S.jsx)(T,{}),(0,S.jsx)(w,{})]}),(0,S.jsx)(`div`,{className:`mt-4 h-10 rounded-[var(--radius-md)] bg-[var(--color-surface-subtle)]`,"data-testid":`select-layout-marker`})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select defaultValue="서울" name="city">
        <RegionTrigger />
        <RegionOptions />
      </Select>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select name="city">
        <RegionTrigger />
        <RegionOptions />
      </Select>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select disabled defaultValue="서울">
        <RegionTrigger />
        <RegionOptions />
      </Select>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72 space-y-2">
      <Select required name="city">
        <RegionTrigger invalid />
        <RegionOptions />
      </Select>
      <p className="text-sm text-[var(--color-feedback-danger-background)]">
        시/도를 선택해 주세요.
      </p>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Select>
        <RegionTrigger />
        <RegionOptions />
      </Select>
      <div className="mt-4 h-10 rounded-[var(--radius-md)] bg-[var(--color-surface-subtle)]" data-testid="select-layout-marker" />
    </div>
}`,...I.parameters?.docs?.source}}},L=[`Default`,`Placeholder`,`Controlled`,`Grouped`,`DisabledOption`,`DisabledRoot`,`Invalid`,`LongOption`,`Dark`,`Keyboard`,`LayoutStability`]})))()}R();export{O as Controlled,P as Dark,E as Default,A as DisabledOption,j as DisabledRoot,k as Grouped,M as Invalid,F as Keyboard,I as LayoutStability,N as LongOption,D as Placeholder,L as __namedExportsOrder,C as default};