import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./label-BpHLPcuG.js";import{n as i,t as a}from"./textarea-KEkrpp9F.js";import{n as o,t as s}from"./stack-CEhke1HL.js";var c,l,u,d,f;function p(){return(p=e((()=>{o(),i(),n(),c=t(),l={title:`Primitives/Forms/Label`,component:r,parameters:{docs:{description:{component:"Label provides an accessible name for a native form control through `htmlFor`. `requiredIndicator` communicates the visual and spoken requirement marker; set `required` on the associated control to enforce the native form constraint."}}},tags:[`autodocs`]},u={args:{children:`리뷰`,htmlFor:`label-default`}},d={render:()=>(0,c.jsxs)(s,{gap:`2`,className:`[width:20rem]`,children:[(0,c.jsx)(r,{htmlFor:`required-review`,requiredIndicator:!0,children:`리뷰`}),(0,c.jsx)(a,{id:`required-review`,required:!0})]}),parameters:{docs:{description:{story:"Set `required` on the control as well as `requiredIndicator` on the label. The indicator does not change the control validation contract by itself."}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: '리뷰',
    htmlFor: 'label-default'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2" className={'[width:20rem]'}>
      <Label htmlFor="required-review" requiredIndicator>
        리뷰
      </Label>
      <Textarea id="required-review" required />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Set \`required\` on the control as well as \`requiredIndicator\` on the label. The indicator does not change the control validation contract by itself.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`Required`]})))()}p();export{u as Default,d as Required,f as __namedExportsOrder,l as default};