import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./stack-h9Yjo5S4.js";import{n as i,t as a}from"./box-DhLBuJrv.js";import{n as o,t as s}from"./textarea-5cUkwp4T.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{i(),n(),o(),c=t(),l={title:`Primitives/Textarea`,component:s,parameters:{layout:`centered`},tags:[`autodocs`]},u={args:{"aria-label":`리뷰 내용`,placeholder:`리뷰를 입력하세요`,rows:4}},d={render:()=>(0,c.jsxs)(r,{gap:`3`,style:{width:`20rem`},children:[(0,c.jsx)(s,{"aria-label":`기본 입력`,placeholder:`Default`}),(0,c.jsx)(s,{"aria-invalid":!0,"aria-label":`오류 입력`,placeholder:`Invalid`}),(0,c.jsx)(s,{"aria-label":`비활성 입력`,disabled:!0,value:`Disabled`}),(0,c.jsx)(s,{"aria-label":`읽기 전용 입력`,readOnly:!0,value:`Read only`})]})},f={render:()=>(0,c.jsxs)(r,{gap:`4`,style:{width:`20rem`},children:[(0,c.jsx)(a,{background:`surface.default`,className:`dark`,padding:`4`,radius:`lg`,children:(0,c.jsx)(s,{"aria-label":`다크 모드 입력`,placeholder:`Dark mode`})}),(0,c.jsx)(a,{background:`surface.default`,padding:`4`,radius:`lg`,children:(0,c.jsx)(`div`,{className:`motion-reduce:transition-none`,children:(0,c.jsx)(s,{"aria-label":`감소된 모션 입력`,placeholder:`Reduced motion`})})})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '리뷰 내용',
    'placeholder': '리뷰를 입력하세요',
    'rows': 4
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" style={{
    width: '20rem'
  }}>
      <Textarea aria-label="기본 입력" placeholder="Default" />
      <Textarea aria-invalid aria-label="오류 입력" placeholder="Invalid" />
      <Textarea aria-label="비활성 입력" disabled value="Disabled" />
      <Textarea aria-label="읽기 전용 입력" readOnly value="Read only" />
    </Stack>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4" style={{
    width: '20rem'
  }}>
      <Box background="surface.default" className="dark" padding="4" radius="lg">
        <Textarea aria-label="다크 모드 입력" placeholder="Dark mode" />
      </Box>
      <Box background="surface.default" padding="4" radius="lg">
        <div className="motion-reduce:transition-none">
          <Textarea aria-label="감소된 모션 입력" placeholder="Reduced motion" />
        </div>
      </Box>
    </Stack>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`States`,`DarkAndReducedMotion`]})))()}m();export{f as DarkAndReducedMotion,u as Default,d as States,p as __namedExportsOrder,l as default};