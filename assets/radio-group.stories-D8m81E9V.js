import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-D5BiCUtA.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./label-nOo9kLkm.js";import{i as a,n as o,r as s,t as c}from"./radio-group-aRnw8WEL.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l=t(),r(),a(),o(),u=n(),d={title:`Primitives/Forms/RadioGroup`,component:c,parameters:{layout:`centered`,docs:{description:{component:"RadioGroup represents one choice from a mutually exclusive set. Give the group an accessible name with `aria-label` or `aria-labelledby`; use a native `fieldset` and `legend` when the set needs a visible group label, and connect each Radio to its Label with matching `id` and `htmlFor` values."}}},tags:[`autodocs`]},f=({disabled:e,label:t,value:n})=>{let r=`radio-${n}`;return(0,u.jsxs)(`div`,{className:`flex items-center gap-0`,children:[(0,u.jsx)(s,{disabled:e,id:r,value:n}),(0,u.jsx)(i,{htmlFor:r,children:t})]})},p={render:()=>(0,u.jsxs)(c,{defaultValue:`visit`,"aria-label":`수령 방식`,children:[(0,u.jsx)(f,{label:`방문 수령`,value:`visit`}),(0,u.jsx)(f,{label:`배송`,value:`delivery`})]})},m={render:()=>(0,u.jsxs)(c,{defaultValue:`visit`,orientation:`horizontal`,"aria-label":`수령 방식`,children:[(0,u.jsx)(f,{label:`방문 수령`,value:`visit`}),(0,u.jsx)(f,{label:`배송`,value:`delivery`})]})},h={render:()=>(0,u.jsxs)(c,{required:!0,"aria-label":`필수 수령 방식`,name:`method`,children:[(0,u.jsx)(f,{label:`방문 수령`,value:`visit`}),(0,u.jsx)(f,{label:`배송`,value:`delivery`})]})},g={render:()=>(0,u.jsxs)(c,{defaultValue:`visit`,"aria-label":`수령 방식`,children:[(0,u.jsx)(f,{label:`방문 수령`,value:`visit`}),(0,u.jsx)(f,{disabled:!0,label:`배송 불가`,value:`delivery`})]})},_={render:()=>(0,u.jsxs)(c,{"aria-invalid":!0,"aria-label":`수령 방식`,children:[(0,u.jsx)(f,{label:`방문 수령`,value:`visit`}),(0,u.jsx)(f,{label:`배송`,value:`delivery`})]})},v={render:function(){let[e,t]=(0,l.useState)(`visit`);return(0,u.jsxs)(c,{"aria-label":`제어된 수령 방식`,name:`method`,value:e,onValueChange:t,children:[(0,u.jsx)(f,{label:`방문 수령`,value:`visit`}),(0,u.jsx)(f,{label:`배송`,value:`delivery`})]})}},y={render:()=>(0,u.jsx)(`div`,{className:`dark rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4`,children:(0,u.jsxs)(c,{defaultValue:`visit`,"aria-label":`어두운 배경 수령 방식`,children:[(0,u.jsx)(f,{label:`방문 수령`,value:`visit`}),(0,u.jsx)(f,{label:`배송`,value:`delivery`})]})})},b={render:()=>(0,u.jsxs)(`div`,{className:`space-y-3`,children:[(0,u.jsx)(`p`,{className:`text-sm text-[var(--color-content-secondary)]`,children:`라디오 버튼에 초점을 둔 뒤 위·아래 화살표 키로 선택 항목을 이동하세요.`}),(0,u.jsxs)(c,{defaultValue:`visit`,"aria-label":`키보드 수령 방식`,children:[(0,u.jsx)(f,{label:`방문 수령`,value:`visit`}),(0,u.jsx)(f,{label:`배송`,value:`delivery`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="visit" aria-label="수령 방식">
      <RadioField label="방문 수령" value="visit" />
      <RadioField label="배송" value="delivery" />
    </RadioGroup>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="visit" orientation="horizontal" aria-label="수령 방식">
      <RadioField label="방문 수령" value="visit" />
      <RadioField label="배송" value="delivery" />
    </RadioGroup>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup required aria-label="필수 수령 방식" name="method">
      <RadioField label="방문 수령" value="visit" />
      <RadioField label="배송" value="delivery" />
    </RadioGroup>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="visit" aria-label="수령 방식">
      <RadioField label="방문 수령" value="visit" />
      <RadioField disabled label="배송 불가" value="delivery" />
    </RadioGroup>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup aria-invalid aria-label="수령 방식">
      <RadioField label="방문 수령" value="visit" />
      <RadioField label="배송" value="delivery" />
    </RadioGroup>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [value, setValue] = useState('visit');
    return <RadioGroup aria-label="제어된 수령 방식" name="method" value={value} onValueChange={setValue}>
        <RadioField label="방문 수령" value="visit" />
        <RadioField label="배송" value="delivery" />
      </RadioGroup>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="dark rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4">
      <RadioGroup defaultValue="visit" aria-label="어두운 배경 수령 방식">
        <RadioField label="방문 수령" value="visit" />
        <RadioField label="배송" value="delivery" />
      </RadioGroup>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <p className="text-sm text-[var(--color-content-secondary)]">
        라디오 버튼에 초점을 둔 뒤 위·아래 화살표 키로 선택 항목을 이동하세요.
      </p>
      <RadioGroup defaultValue="visit" aria-label="키보드 수령 방식">
        <RadioField label="방문 수령" value="visit" />
        <RadioField label="배송" value="delivery" />
      </RadioGroup>
    </div>
}`,...b.parameters?.docs?.source}}},x=[`Vertical`,`Horizontal`,`Required`,`DisabledItem`,`Invalid`,`Controlled`,`Dark`,`Keyboard`]})))()}S();export{v as Controlled,y as Dark,g as DisabledItem,m as Horizontal,_ as Invalid,b as Keyboard,h as Required,p as Vertical,x as __namedExportsOrder,d as default};