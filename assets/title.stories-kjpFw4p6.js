import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./stack-BU6ic646.js";import{a as i,s as a}from"./text-roles-BXuwea4i.js";import{i as o,n as s,r as c,t as l}from"./title-DDZhQ1r5.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),o(),u=t(),d={title:`Primitives/Typography/Title`,component:c,args:{children:`Title · h1`},render:()=>(0,u.jsxs)(r,{gap:`4`,children:[(0,u.jsx)(c,{children:`Title · h1`}),(0,u.jsx)(s,{children:`Subtitle · h2`}),(0,u.jsx)(l,{children:`SectionTitle · h3`})]}),tags:[`autodocs`],parameters:{docs:{description:{component:`Usage: Title, Subtitle, SectionTitle 역할이 각각 h1, h2, h3와 고정된 시각 recipe를 제공합니다. Non-usage: 새 코드에서 order, size, weight로 역할을 다시 조합하지 않습니다.`}}}},f={render:()=>(0,u.jsxs)(r,{gap:`4`,children:[(0,u.jsx)(c,{children:`Title · h1`}),(0,u.jsx)(s,{children:`Subtitle · h2`}),(0,u.jsx)(l,{children:`SectionTitle · h3`})]})},p={render:()=>(0,u.jsxs)(r,{gap:`4`,children:[(0,u.jsx)(c,{order:2,size:1,children:`h2 semantics with size 1`}),(0,u.jsx)(c,{order:3,size:5,children:`h3 semantics with size 5`}),(0,u.jsx)(i,{tone:`muted`,children:`size는 시각 표현만 바꾸며 order가 만드는 heading outline은 유지됩니다.`})]}),parameters:{docs:{description:{story:`Deprecated: existing semantic and visual split compatibility only. New code uses Title, Subtitle, and SectionTitle roles.`}}}},m={render:()=>(0,u.jsxs)(r,{as:`section`,gap:`3`,children:[(0,u.jsx)(s,{children:`섹션 제목`}),(0,u.jsx)(i,{children:`고정 역할이 문서 구조와 시각 recipe를 함께 제공합니다.`}),(0,u.jsx)(l,{children:`하위 섹션 제목`}),(0,u.jsx)(i,{tone:`muted`,children:`새 코드에서 자동 heading level 추론은 제공하지 않습니다.`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Title>Title · h1</Title>
      <Subtitle>Subtitle · h2</Subtitle>
      <SectionTitle>SectionTitle · h3</SectionTitle>
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Title order={2} size={1}>
        h2 semantics with size 1
      </Title>
      <Title order={3} size={5}>
        h3 semantics with size 5
      </Title>
      <SupportingText tone="muted">
        size는 시각 표현만 바꾸며 order가 만드는 heading outline은 유지됩니다.
      </SupportingText>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Deprecated: existing semantic and visual split compatibility only. New code uses Title, Subtitle, and SectionTitle roles.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Stack as="section" gap="3">
      <Subtitle>섹션 제목</Subtitle>
      <SupportingText>
        고정 역할이 문서 구조와 시각 recipe를 함께 제공합니다.
      </SupportingText>
      <SectionTitle>하위 섹션 제목</SectionTitle>
      <SupportingText tone="muted">
        새 코드에서 자동 heading level 추론은 제공하지 않습니다.
      </SupportingText>
    </Stack>
}`,...m.parameters?.docs?.source}}},h=[`FixedRoles`,`DeprecatedCompatibility`,`HeadingOutlineGuidance`]})))()}g();export{p as DeprecatedCompatibility,f as FixedRoles,m as HeadingOutlineGuidance,h as __namedExportsOrder,d as default};