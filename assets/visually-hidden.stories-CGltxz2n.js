import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-p08ZgMu4.js";import{n as i,t as a}from"./label-CCcBWVlb.js";import{n as o,t as s}from"./visually-hidden-BYdJlTZD.js";var c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o(),c=t(),l={title:`Primitives/Accessibility/VisuallyHidden`,component:s,tags:[`autodocs`],args:{children:`보조 콘텐츠`},parameters:{docs:{description:{component:`Preserves text and semantic relationships for assistive technology without adding visible layout. Hidden content must remain non-interactive; use SkipLink when content must become visible on focus.`}}}},u={render:()=>(0,c.jsxs)(a,{htmlFor:`verification-code`,children:[(0,c.jsx)(s,{children:`인증번호`}),(0,c.jsx)(r,{id:`verification-code`,inputMode:`numeric`})]})},d={render:()=>(0,c.jsxs)(`section`,{"aria-labelledby":`secondary-heading`,"data-testid":`semantic-region`,dir:`rtl`,children:[(0,c.jsx)(s,{asChild:!0,children:(0,c.jsx)(`h2`,{id:`secondary-heading`,children:`보조 제목`})}),(0,c.jsx)(`p`,{children:`제목으로 이름이 지정된 영역`})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Label htmlFor="verification-code">
      <VisuallyHidden>인증번호</VisuallyHidden>
      <Input id="verification-code" inputMode="numeric" />
    </Label>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <section aria-labelledby="secondary-heading" data-testid="semantic-region" dir="rtl">
      <VisuallyHidden asChild>
        <h2 id="secondary-heading">보조 제목</h2>
      </VisuallyHidden>
      <p>제목으로 이름이 지정된 영역</p>
    </section>
}`,...d.parameters?.docs?.source}}},f=[`FormLabel`,`SemanticHeading`]})))()}p();export{u as FormLabel,d as SemanticHeading,f as __namedExportsOrder,l as default};