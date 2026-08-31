import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./stack-gTZorrgh.js";import{n as i,t as a}from"./box-B_OQwp3d.js";import{n as o,t as s}from"./input-VEzHNdLk.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),n(),o(),c=t(),l={title:`Primitives/Input`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:`Native input type`},disabled:{control:`boolean`,description:`Disable native input interactions`},readOnly:{control:`boolean`,description:`Keep the value readable without allowing edits`}}},u={args:{"aria-label":`기본 입력`,placeholder:`내용을 입력하세요`}},d={render:()=>(0,c.jsxs)(r,{gap:`3`,style:{width:`20rem`},children:[(0,c.jsx)(s,{"aria-label":`기본 입력`,placeholder:`Default`}),(0,c.jsx)(s,{"aria-label":`오류 입력`,"aria-invalid":!0,placeholder:`Invalid`}),(0,c.jsx)(s,{"aria-label":`비활성 입력`,disabled:!0,value:`Disabled`,readOnly:!0}),(0,c.jsx)(s,{"aria-label":`읽기 전용 입력`,readOnly:!0,value:`Read only`})]})},f={render:()=>(0,c.jsxs)(r,{gap:`2`,style:{width:`20rem`},children:[(0,c.jsx)(a,{as:`label`,className:`text-sm font-medium`,foreground:`content.secondary`,htmlFor:`storybook-email`,children:`이메일`}),(0,c.jsx)(s,{id:`storybook-email`,placeholder:`email@example.com`,type:`email`})]})},p={args:{"aria-label":`파일 업로드`,type:`file`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '기본 입력',
    'placeholder': '내용을 입력하세요'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" style={{
    width: '20rem'
  }}>
      <Input aria-label="기본 입력" placeholder="Default" />
      <Input aria-label="오류 입력" aria-invalid placeholder="Invalid" />
      <Input aria-label="비활성 입력" disabled value="Disabled" readOnly />
      <Input aria-label="읽기 전용 입력" readOnly value="Read only" />
    </Stack>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2" style={{
    width: '20rem'
  }}>
      <Box as="label" className="text-sm font-medium" foreground="content.secondary" htmlFor="storybook-email">
        이메일
      </Box>
      <Input id="storybook-email" placeholder="email@example.com" type="email" />
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '파일 업로드',
    'type': 'file'
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`States`,`WithLabel`,`FileUpload`]})))()}h();export{u as Default,p as FileUpload,d as States,f as WithLabel,m as __namedExportsOrder,l as default};