import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CltkTXVB.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./label-ClVNhe9V.js";import{n as a,t as o}from"./switch-BG1FNPt2.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{s=t(),r(),a(),c=n(),l={title:`Primitives/Forms/Switch`,component:o,parameters:{layout:`centered`,docs:{description:{component:`Switch is for settings that apply immediately when turned on or off, not pressed buttons.`}}},tags:[`autodocs`]},u=({checked:e,defaultChecked:t,disabled:n,id:r,invalid:a,label:s,required:l})=>(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,c.jsx)(o,{"aria-invalid":a||void 0,checked:e,defaultChecked:t,disabled:n,id:r,required:l}),(0,c.jsx)(i,{htmlFor:r,requiredIndicator:l,children:s})]}),d={render:()=>(0,c.jsx)(u,{id:`off`,label:`알림 끄기`})},f={render:()=>(0,c.jsx)(u,{checked:!0,id:`on`,label:`알림 켜기`})},p={render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,c.jsx)(o,{checked:e,id:`controlled`,onCheckedChange:t}),(0,c.jsx)(i,{htmlFor:`controlled`,children:`제어된 알림`})]})}},m={render:()=>(0,c.jsx)(u,{id:`required`,label:`필수 알림`,required:!0})},h={render:()=>(0,c.jsx)(u,{checked:!0,disabled:!0,id:`disabled`,label:`비활성 알림`})},g={render:()=>(0,c.jsx)(u,{id:`invalid`,invalid:!0,label:`오류 상태`})},_={render:function(){let[e,t]=(0,s.useState)(`아직 제출하지 않음`);return(0,c.jsxs)(`form`,{className:`flex items-center gap-3`,onSubmit:e=>{e.preventDefault(),t(new FormData(e.currentTarget).get(`parking`)?.toString()??`주차 불가`)},children:[(0,c.jsx)(o,{defaultChecked:!0,id:`parking`,name:`parking`,value:`yes`}),(0,c.jsx)(i,{htmlFor:`parking`,children:`주차 가능`}),(0,c.jsx)(`button`,{type:`submit`,children:`제출`}),(0,c.jsx)(`output`,{children:e})]})}},v={render:()=>(0,c.jsx)(`div`,{className:`dark rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4`,children:(0,c.jsx)(u,{checked:!0,id:`dark`,label:`어두운 배경 알림`})})},y={render:()=>(0,c.jsxs)(`div`,{className:`space-y-3`,children:[(0,c.jsx)(`p`,{className:`text-sm text-[var(--color-content-secondary)]`,children:`시스템의 동작 줄이기 설정에서는 트랙 색상과 손잡이 이동 전환이 제거됩니다.`}),(0,c.jsx)(u,{id:`reduced-motion`,label:`동작 줄이기`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SwitchField id="off" label="알림 끄기" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <SwitchField checked id="on" label="알림 켜기" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [checked, setChecked] = useState(false);
    return <div className="flex items-center gap-2">
        <Switch checked={checked} id="controlled" onCheckedChange={setChecked} />
        <Label htmlFor="controlled">제어된 알림</Label>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SwitchField id="required" label="필수 알림" required />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SwitchField checked disabled id="disabled" label="비활성 알림" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <SwitchField id="invalid" invalid label="오류 상태" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function FormParticipationStory() {
    const [submittedValue, setSubmittedValue] = useState('아직 제출하지 않음');
    return <form className="flex items-center gap-3" onSubmit={event => {
      event.preventDefault();
      setSubmittedValue(new FormData(event.currentTarget).get('parking')?.toString() ?? '주차 불가');
    }}>
        <Switch defaultChecked id="parking" name="parking" value="yes" />
        <Label htmlFor="parking">주차 가능</Label>
        <button type="submit">제출</button>
        <output>{submittedValue}</output>
      </form>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="dark rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4">
      <SwitchField checked id="dark" label="어두운 배경 알림" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <p className="text-sm text-[var(--color-content-secondary)]">
        시스템의 동작 줄이기 설정에서는 트랙 색상과 손잡이 이동 전환이
        제거됩니다.
      </p>
      <SwitchField id="reduced-motion" label="동작 줄이기" />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Off`,`On`,`Controlled`,`Required`,`Disabled`,`Invalid`,`FormParticipation`,`Dark`,`ReducedMotion`]})))()}x();export{p as Controlled,v as Dark,h as Disabled,_ as FormParticipation,g as Invalid,d as Off,f as On,y as ReducedMotion,m as Required,b as __namedExportsOrder,l as default};