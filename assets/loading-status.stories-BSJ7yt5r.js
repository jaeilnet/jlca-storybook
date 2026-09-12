import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-3rykzFFW.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CBIDVShO.js";import{n as a,t as o}from"./box-DEK_pih5.js";import{n as s,t as c}from"./center-DCqZNGR8.js";import{n as l,t as u}from"./container-DQZikCpt.js";import{s as d,t as f}from"./text-roles-CWe4uGfO.js";import{n as p,t as m}from"./spinner-Dd7-bOJT.js";import{n as h,t as g}from"./visually-hidden-BYdJlTZD.js";import{n as _,t as v}from"./stack-DYzKO6QY.js";var y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{y=t(),d(),a(),r(),s(),l(),p(),_(),h(),b=n(),x={title:`Primitives/Feedback/Loading status composition`,parameters:{layout:`fullscreen`},tags:[`autodocs`]},S={render:()=>(0,b.jsx)(c,{as:`main`,margin:`0`,padding:`0`,background:`surface.canvas`,fillMode:`viewport`,"data-testid":`loading-frame`,children:(0,b.jsx)(u,{size:`mobile.s`,gutter:`4`,"data-testid":`loading-container`,children:(0,b.jsxs)(c,{role:`status`,foreground:`content.accent`,paddingY:`8`,children:[(0,b.jsx)(m,{size:`lg`}),(0,b.jsx)(g,{children:`회원가입 폼 로딩 중`})]})})})},C={render:()=>(0,b.jsxs)(c,{as:v,fillMode:`viewport`,background:`surface.canvas`,children:[(0,b.jsx)(o,{as:`header`,padding:`4`,children:(0,b.jsx)(f,{children:`계정`})}),(0,b.jsx)(c,{as:`main`,fillMode:`grow`,margin:`0`,padding:`0`,"data-testid":`loading-frame`,children:(0,b.jsx)(u,{size:`mobile.s`,gutter:`4`,"data-testid":`loading-container`,children:(0,b.jsxs)(c,{role:`status`,foreground:`content.accent`,paddingY:`8`,children:[(0,b.jsx)(m,{size:`lg`}),(0,b.jsx)(g,{children:`회원가입 폼 로딩 중`})]})})})]})},w=()=>{let[e,t]=(0,y.useState)(`idle`);return(0,b.jsxs)(v,{padding:`4`,gap:`4`,children:[(0,b.jsxs)(v,{direction:`row`,gap:`2`,children:[(0,b.jsx)(i,{onClick:()=>t(`loading`),children:`불러오기`}),(0,b.jsx)(i,{onClick:()=>t(`complete`),children:`완료`})]}),(0,b.jsxs)(c,{role:`status`,foreground:`content.accent`,paddingY:`8`,children:[e===`loading`&&(0,b.jsx)(m,{}),e!==`idle`&&(0,b.jsx)(g,{children:e===`loading`?`콘텐츠를 불러오는 중`:`콘텐츠를 불러왔습니다`})]})]})},T={render:()=>(0,b.jsx)(w,{})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Center as="main" margin="0" padding="0" background="surface.canvas" fillMode="viewport" data-testid="loading-frame">
      <Container size="mobile.s" gutter="4" data-testid="loading-container">
        <Center role="status" foreground="content.accent" paddingY="8">
          <Spinner size="lg" />
          <VisuallyHidden>회원가입 폼 로딩 중</VisuallyHidden>
        </Center>
      </Container>
    </Center>
} satisfies Story`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Center as={Stack} fillMode="viewport" background="surface.canvas">
      <Box as="header" padding="4">
        <Body>계정</Body>
      </Box>
      <Center as="main" fillMode="grow" margin="0" padding="0" data-testid="loading-frame">
        <Container size="mobile.s" gutter="4" data-testid="loading-container">
          <Center role="status" foreground="content.accent" paddingY="8">
            <Spinner size="lg" />
            <VisuallyHidden>회원가입 폼 로딩 중</VisuallyHidden>
          </Center>
        </Container>
      </Center>
    </Center>
} satisfies Story`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <PersistentStatusExample />
}`,...T.parameters?.docs?.source}}},E=[`Viewport`,`WithinShell`,`PersistentStatus`]})))()}D();export{T as PersistentStatus,S as Viewport,C as WithinShell,E as __namedExportsOrder,x as default};