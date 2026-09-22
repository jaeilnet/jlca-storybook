import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{D as n,E as r,H as i,R as a,c as o,i as s}from"./dist-ZSTR96gl.js";import{n as c,t as l}from"./choice-field-C-0b8UBb.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{i(),c(),u=t(),d={title:`Compositions/Forms/ChoiceField`,component:l,args:{children:()=>null,label:`알림 받기`},parameters:{layout:`centered`,docs:{description:{component:`ChoiceField connects one Checkbox, Radio, or Switch with its label and optional description. It owns neither the control value nor group-level instructions; combine it with FormGroup when several choices share a question.`}}},tags:[`autodocs`],decorators:[e=>(0,u.jsx)(s,{className:`[width:100%] [max-width:20rem]`,children:(0,u.jsx)(e,{})})]},f={render:()=>(0,u.jsx)(l,{description:`새로운 소식과 혜택을 알려드립니다.`,label:`이메일 알림`,children:e=>(0,u.jsx)(o,{...e})})},p={render:()=>(0,u.jsx)(n,{defaultValue:`visit`,children:(0,u.jsx)(l,{label:`매장 수령`,children:e=>(0,u.jsx)(r,{...e,value:`visit`})})})},m={render:()=>(0,u.jsx)(l,{description:`매장 주차장을 제공합니다.`,label:`주차 가능`,children:e=>(0,u.jsx)(a,{...e})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ChoiceField description="새로운 소식과 혜택을 알려드립니다." label="이메일 알림">
      {controlProps => <CheckboxControl {...controlProps} />}
    </ChoiceField>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="visit">
      <ChoiceField label="매장 수령">
        {controlProps => <RadioControl {...controlProps} value="visit" />}
      </ChoiceField>
    </RadioGroup>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ChoiceField description="매장 주차장을 제공합니다." label="주차 가능">
      {controlProps => <SwitchControl {...controlProps} />}
    </ChoiceField>
}`,...m.parameters?.docs?.source}}},h=[`Checkbox`,`Radio`,`Switch`]})))()}g();export{f as Checkbox,p as Radio,m as Switch,h as __namedExportsOrder,d as default};