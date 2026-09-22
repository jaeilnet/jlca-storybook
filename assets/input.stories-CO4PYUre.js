import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-lMxhDw_P.js";import{n as i,t as a}from"./box-5xTIcLwd.js";import{n as o,t as s}from"./stack-tqqhhArH.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{i(),o(),n(),c=t(),l={title:`Primitives/Forms/Input`,component:r,parameters:{layout:`centered`,docs:{description:{component:"Input is the native single-line control. Give it an accessible name with `aria-label` or a connected `<label>`. Use `InputField` when a label, description, or validation message is required."}}},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:`Native input type`},disabled:{control:`boolean`,description:`Disable native input interactions`},readOnly:{control:`boolean`,description:`Keep the value readable without allowing edits`}}},u={args:{"aria-label":`기본 입력`,placeholder:`내용을 입력하세요`}},d={render:()=>(0,c.jsxs)(s,{gap:`3`,className:`[width:20rem]`,children:[(0,c.jsx)(r,{"aria-label":`기본 입력`,placeholder:`Default`}),(0,c.jsx)(r,{"aria-label":`오류 입력`,"aria-invalid":!0,placeholder:`Invalid`}),(0,c.jsx)(r,{"aria-label":`비활성 입력`,disabled:!0,value:`Disabled`,readOnly:!0}),(0,c.jsx)(r,{"aria-label":`읽기 전용 입력`,readOnly:!0,value:`Read only`})]})},f={render:()=>(0,c.jsxs)(s,{gap:`2`,className:`[width:20rem]`,children:[(0,c.jsx)(a,{as:`label`,className:`text-sm font-medium`,foreground:`content.secondary`,htmlFor:`storybook-email`,children:`이메일`}),(0,c.jsx)(r,{id:`storybook-email`,placeholder:`email@example.com`,type:`email`})]})},p={render:()=>(0,c.jsxs)(s,{gap:`4`,className:`[width:20rem]`,children:[(0,c.jsxs)(s,{gap:`2`,children:[(0,c.jsx)(a,{as:`label`,className:`text-sm font-medium`,foreground:`content.secondary`,htmlFor:`storybook-search`,children:`검색어`}),(0,c.jsx)(r,{id:`storybook-search`,placeholder:`검색어를 입력하세요`})]}),(0,c.jsx)(r,{"aria-label":`초대 코드`,placeholder:`초대 코드를 입력하세요`})]}),parameters:{docs:{description:{story:"A visible label is preferred. Use `aria-label` only when the surrounding UI already makes the input purpose clear."}}}},m={args:{"aria-label":`파일 업로드`,type:`file`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '기본 입력',
    placeholder: '내용을 입력하세요'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" className={'[width:20rem]'}>
      <Input aria-label="기본 입력" placeholder="Default" />
      <Input aria-label="오류 입력" aria-invalid placeholder="Invalid" />
      <Input aria-label="비활성 입력" disabled value="Disabled" readOnly />
      <Input aria-label="읽기 전용 입력" readOnly value="Read only" />
    </Stack>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2" className={'[width:20rem]'}>
      <Box as="label" className="text-sm font-medium" foreground="content.secondary" htmlFor="storybook-email">
        이메일
      </Box>
      <Input id="storybook-email" placeholder="email@example.com" type="email" />
    </Stack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4" className={'[width:20rem]'}>
      <Stack gap="2">
        <Box as="label" className="text-sm font-medium" foreground="content.secondary" htmlFor="storybook-search">
          검색어
        </Box>
        <Input id="storybook-search" placeholder="검색어를 입력하세요" />
      </Stack>

      <Input aria-label="초대 코드" placeholder="초대 코드를 입력하세요" />
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'A visible label is preferred. Use \`aria-label\` only when the surrounding UI already makes the input purpose clear.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '파일 업로드',
    type: 'file'
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`States`,`WithLabel`,`AccessibleNames`,`FileUpload`]})))()}g();export{p as AccessibleNames,u as Default,m as FileUpload,d as States,f as WithLabel,h as __namedExportsOrder,l as default};