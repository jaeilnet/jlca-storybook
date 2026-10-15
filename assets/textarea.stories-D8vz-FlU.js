import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./stack-C4dKFxe2.js";import{n as i,t as a}from"./textarea-DA4k1eBv.js";import{n as o,t as s}from"./box-B4ngAJ19.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{o(),n(),i(),c=t(),l={title:`Primitives/Forms/Textarea`,component:a,parameters:{layout:`centered`,docs:{description:{component:"Textarea is the native multiline control for longer free-form content. Give it an accessible name with `aria-label` or a connected `<label>`; use `Field` for labels, descriptions, and validation messages. Native vertical resizing is supported, while autosizing and character counters are intentionally outside this primitive."}}},tags:[`autodocs`]},u={args:{"aria-label":`리뷰 내용`,placeholder:`리뷰를 입력하세요`,rows:4}},d={render:()=>(0,c.jsxs)(r,{gap:`3`,className:`[width:20rem]`,children:[(0,c.jsx)(a,{"aria-label":`기본 입력`,placeholder:`Default`}),(0,c.jsx)(a,{"aria-invalid":!0,"aria-label":`오류 입력`,placeholder:`Invalid`}),(0,c.jsx)(a,{"aria-label":`비활성 입력`,disabled:!0,value:`Disabled`}),(0,c.jsx)(a,{"aria-label":`읽기 전용 입력`,readOnly:!0,value:`Read only`})]})},f={render:()=>(0,c.jsxs)(r,{gap:`2`,className:`[width:20rem]`,children:[(0,c.jsx)(s,{as:`label`,className:`text-sm font-medium`,foreground:`content.secondary`,htmlFor:`storybook-review`,children:`리뷰 내용`}),(0,c.jsx)(a,{"aria-describedby":`storybook-review-help`,id:`storybook-review`,maxLength:500,placeholder:`리뷰를 입력하세요`,rows:5}),(0,c.jsx)(s,{as:`p`,foreground:`content.secondary`,id:`storybook-review-help`,children:`최대 500자까지 입력할 수 있습니다.`})]}),parameters:{docs:{description:{story:"Use a visible label and persistent description for long-form guidance. `maxLength` limits native input; the application owns any live character counter."}}}},p={render:()=>(0,c.jsxs)(r,{gap:`4`,className:`[width:20rem]`,children:[(0,c.jsx)(s,{background:`surface.default`,className:`dark`,padding:`4`,radius:`lg`,children:(0,c.jsx)(a,{"aria-label":`다크 모드 입력`,placeholder:`Dark mode`})}),(0,c.jsx)(s,{background:`surface.default`,padding:`4`,radius:`lg`,children:(0,c.jsx)(`div`,{className:`motion-reduce:transition-none`,children:(0,c.jsx)(a,{"aria-label":`감소된 모션 입력`,placeholder:`Reduced motion`})})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '리뷰 내용',
    placeholder: '리뷰를 입력하세요',
    rows: 4
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" className={'[width:20rem]'}>
      <Textarea aria-label="기본 입력" placeholder="Default" />
      <Textarea aria-invalid aria-label="오류 입력" placeholder="Invalid" />
      <Textarea aria-label="비활성 입력" disabled value="Disabled" />
      <Textarea aria-label="읽기 전용 입력" readOnly value="Read only" />
    </Stack>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2" className={'[width:20rem]'}>
      <Box as="label" className="text-sm font-medium" foreground="content.secondary" htmlFor="storybook-review">
        리뷰 내용
      </Box>
      <Textarea aria-describedby="storybook-review-help" id="storybook-review" maxLength={500} placeholder="리뷰를 입력하세요" rows={5} />
      <Box as="p" foreground="content.secondary" id="storybook-review-help">
        최대 500자까지 입력할 수 있습니다.
      </Box>
    </Stack>,
  parameters: {
    docs: {
      description: {
        story: 'Use a visible label and persistent description for long-form guidance. \`maxLength\` limits native input; the application owns any live character counter.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4" className={'[width:20rem]'}>
      <Box background="surface.default" className="dark" padding="4" radius="lg">
        <Textarea aria-label="다크 모드 입력" placeholder="Dark mode" />
      </Box>
      <Box background="surface.default" padding="4" radius="lg">
        <div className="motion-reduce:transition-none">
          <Textarea aria-label="감소된 모션 입력" placeholder="Reduced motion" />
        </div>
      </Box>
    </Stack>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`States`,`LongFormAccessible`,`DarkAndReducedMotion`]})))()}h();export{p as DarkAndReducedMotion,u as Default,f as LongFormAccessible,d as States,m as __namedExportsOrder,l as default};