import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Bapzux9J.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./label-BlWOad-P.js";import{n as a,t as o}from"./checkbox-BQz1Gohm.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{s=t(),r(),a(),c=n(),l={title:`Primitives/Forms/Checkbox`,component:o,parameters:{layout:`centered`},tags:[`autodocs`]},u=({checked:e,defaultChecked:t,disabled:n,id:r,invalid:a,label:s,required:l})=>(0,c.jsxs)(`div`,{className:`flex items-center gap-0`,children:[(0,c.jsx)(o,{"aria-invalid":a||void 0,checked:e,defaultChecked:t,disabled:n,id:r,required:l}),(0,c.jsx)(i,{htmlFor:r,requiredIndicator:l,children:s})]}),d={render:()=>(0,c.jsx)(u,{id:`unchecked`,label:`동의하지 않음`})},f={render:()=>(0,c.jsx)(u,{checked:!0,id:`checked`,label:`동의함`})},p={render:()=>(0,c.jsx)(u,{checked:`indeterminate`,id:`indeterminate`,label:`일부 동의`}),parameters:{docs:{description:{story:`Use indeterminate only for a parent choice when some, but not all, child choices are selected. It is distinct from the checked state and resolves to checked on the next user activation.`}}}},m={render:function(){let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(`div`,{className:`flex items-center gap-0`,children:[(0,c.jsx)(o,{checked:e,id:`controlled`,onCheckedChange:t}),(0,c.jsx)(i,{htmlFor:`controlled`,children:`제어된 동의`})]})}},h={render:()=>(0,c.jsx)(u,{id:`invalid`,invalid:!0,label:`오류 상태`})},g={render:()=>(0,c.jsx)(u,{id:`required`,label:`필수 동의`,required:!0})},_={render:()=>(0,c.jsx)(u,{checked:!0,disabled:!0,id:`disabled`,label:`비활성 동의`})},v={render:()=>(0,c.jsx)(`div`,{className:`dark rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4`,children:(0,c.jsx)(u,{checked:!0,id:`dark`,label:`어두운 배경 동의`})})},y={render:function(){let[e,t]=(0,s.useState)(`아직 제출하지 않음`);return(0,c.jsxs)(`form`,{className:`flex items-center gap-3`,onSubmit:e=>{e.preventDefault(),t(new FormData(e.currentTarget).get(`terms`)?.toString()??`동의하지 않음`)},children:[(0,c.jsx)(o,{defaultChecked:!0,id:`terms`,name:`terms`,value:`agreed`}),(0,c.jsx)(i,{htmlFor:`terms`,children:`이용약관 동의`}),(0,c.jsx)(`button`,{type:`submit`,children:`제출`}),(0,c.jsx)(`output`,{children:e})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxField id="unchecked" label="동의하지 않음" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxField checked id="checked" label="동의함" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxField checked="indeterminate" id="indeterminate" label="일부 동의" />,
  parameters: {
    docs: {
      description: {
        story: 'Use indeterminate only for a parent choice when some, but not all, child choices are selected. It is distinct from the checked state and resolves to checked on the next user activation.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function ControlledStory() {
    const [checked, setChecked] = useState<CheckboxCheckedState>(false);
    return <div className="flex items-center gap-0">
        <Checkbox checked={checked} id="controlled" onCheckedChange={setChecked} />
        <Label htmlFor="controlled">제어된 동의</Label>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxField id="invalid" invalid label="오류 상태" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxField id="required" label="필수 동의" required />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxField checked disabled id="disabled" label="비활성 동의" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="dark rounded-[var(--radius-lg)] bg-[var(--color-surface-default)] p-4">
      <CheckboxField checked id="dark" label="어두운 배경 동의" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function FormSubmissionStory() {
    const [submittedValue, setSubmittedValue] = useState('아직 제출하지 않음');
    return <form className="flex items-center gap-3" onSubmit={event => {
      event.preventDefault();
      setSubmittedValue(new FormData(event.currentTarget).get('terms')?.toString() ?? '동의하지 않음');
    }}>
        <Checkbox defaultChecked id="terms" name="terms" value="agreed" />
        <Label htmlFor="terms">이용약관 동의</Label>
        <button type="submit">제출</button>
        <output>{submittedValue}</output>
      </form>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Unchecked`,`Checked`,`Indeterminate`,`Controlled`,`Invalid`,`Required`,`Disabled`,`Dark`,`FormSubmission`]})))()}x();export{f as Checked,m as Controlled,v as Dark,_ as Disabled,y as FormSubmission,p as Indeterminate,h as Invalid,g as Required,d as Unchecked,b as __namedExportsOrder,l as default};