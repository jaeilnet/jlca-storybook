import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CHhs32Pv.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,d as i,m as a,p as o,t as s}from"./dist-DlV4Nlrz.js";import{n as c,t as l}from"./field-Cp1OptBE.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{u=t(),a(),c(),d=n(),f={title:`Compositions/Field`,component:l,args:{children:()=>null},parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,d.jsx)(s,{style:{width:`20rem`},children:(0,d.jsx)(e,{})})]},p={render:()=>(0,d.jsx)(l,{label:`이메일`,children:e=>(0,d.jsx)(r,{...e,placeholder:`email@example.com`,type:`email`})})},m={render:()=>(0,d.jsx)(l,{id:`account-email`,label:`이메일`,children:e=>(0,d.jsx)(r,{...e,type:`email`})})},h={render:()=>(0,d.jsx)(l,{description:`로그인과 알림에 사용할 주소입니다.`,label:`이메일`,children:e=>(0,d.jsx)(r,{...e,type:`email`})})},g={render:()=>(0,d.jsx)(l,{description:`로그인에 사용할 주소입니다.`,error:`올바른 주소를 입력하세요`,label:`이메일`,children:e=>(0,d.jsx)(r,{...e,type:`email`})})},_={render:()=>(0,d.jsx)(l,{label:`이메일`,required:!0,children:e=>(0,d.jsx)(r,{...e,type:`email`})})},v={render:()=>(0,d.jsx)(l,{disabled:!0,label:`이메일`,children:e=>(0,d.jsx)(r,{...e,type:`email`,value:`user@example.com`})})},y={render:()=>(0,d.jsx)(l,{description:`문의 내용을 자세히 알려주세요.`,label:`문의 내용`,children:e=>(0,d.jsx)(o,{...e})})},b={render:()=>(0,d.jsx)(s,{background:`surface.default`,className:`dark`,padding:`4`,children:(0,d.jsx)(l,{description:`로그인과 알림에 사용할 주소입니다.`,error:`올바른 주소를 입력하세요`,label:`이메일`,required:!0,children:e=>(0,d.jsx)(r,{...e,type:`email`})})})},x=()=>{let[e,t]=(0,u.useState)(!1);return(0,d.jsxs)(i,{gap:`4`,children:[(0,d.jsx)(`button`,{onClick:()=>t(e=>!e),type:`button`,children:`오류 전환`}),(0,d.jsx)(l,{description:`로그인과 알림에 사용할 주소입니다.`,error:e?`올바른 주소를 입력하세요`:void 0,label:`이메일`,children:e=>(0,d.jsx)(r,{...e,type:`email`})}),(0,d.jsx)(s,{"data-testid":`field-layout-marker`,children:`다음 콘텐츠`})]})},S={render:()=>(0,d.jsx)(x,{})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Field label="이메일">
      {controlProps => <Input {...controlProps} placeholder="email@example.com" type="email" />}
    </Field>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Field id="account-email" label="이메일">
      {controlProps => <Input {...controlProps} type="email" />}
    </Field>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Field description="로그인과 알림에 사용할 주소입니다." label="이메일">
      {controlProps => <Input {...controlProps} type="email" />}
    </Field>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Field description="로그인에 사용할 주소입니다." error="올바른 주소를 입력하세요" label="이메일">
      {controlProps => <Input {...controlProps} type="email" />}
    </Field>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Field label="이메일" required>
      {controlProps => <Input {...controlProps} type="email" />}
    </Field>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Field disabled label="이메일">
      {controlProps => <Input {...controlProps} type="email" value="user@example.com" />}
    </Field>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Field description="문의 내용을 자세히 알려주세요." label="문의 내용">
      {controlProps => <Textarea {...controlProps} />}
    </Field>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box background="surface.default" className="dark" padding="4">
      <Field description="로그인과 알림에 사용할 주소입니다." error="올바른 주소를 입력하세요" label="이메일" required>
        {controlProps => <Input {...controlProps} type="email" />}
      </Field>
    </Box>
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <LayoutStabilityExample />
}`,...S.parameters?.docs?.source}}},C=[`GeneratedId`,`ExplicitId`,`Description`,`Error`,`Required`,`Disabled`,`TextareaControl`,`Dark`,`LayoutStability`]})))()}w();export{b as Dark,h as Description,v as Disabled,g as Error,m as ExplicitId,p as GeneratedId,S as LayoutStability,_ as Required,y as TextareaControl,C as __namedExportsOrder,f as default};