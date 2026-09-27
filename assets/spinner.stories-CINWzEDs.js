import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-C4vqxwb2.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./visually-hidden-Bdwntdph.js";import{i as a,n as o,r as s,t as c}from"./button-BM5wT79C.js";import{s as l,t as u}from"./text-roles-BMhwHs-X.js";import{n as d,t as f}from"./box-BZ6mAdct.js";import{n as p,t as m}from"./center-DFoqop94.js";import{n as h,t as g}from"./container-abpSBdJY.js";import{n as _,t as v}from"./stack-v__dBasl.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{y=t(),l(),d(),o(),p(),h(),a(),_(),r(),b=n(),x={title:`Primitives/Feedback/Spinner`,component:s,parameters:{layout:`padded`},args:{size:`md`},tags:[`autodocs`]},S={},C={render:()=>(0,b.jsx)(`div`,{className:`flex items-end gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,b.jsxs)(`div`,{className:`grid justify-items-center gap-2`,children:[(0,b.jsx)(s,{size:e}),(0,b.jsx)(`span`,{children:e})]},e))})},w=[[`secondary`,`text-[var(--color-content-secondary)]`],[`accent`,`text-[var(--color-content-accent)]`],[`danger`,`text-[var(--color-content-danger)]`]],T={render:()=>(0,b.jsx)(`div`,{className:`flex gap-6`,children:w.map(([e,t])=>(0,b.jsx)(`div`,{"data-testid":`color-${e}`,className:t,children:(0,b.jsx)(s,{})},e))})},E={render:()=>(0,b.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,b.jsx)(c,{type:`button`,variant:`secondary`,children:`이전 작업`}),(0,b.jsxs)(c,{type:`button`,"aria-busy":`true`,children:[(0,b.jsx)(s,{size:`sm`}),` 저장 중`]}),(0,b.jsx)(`p`,{role:`status`,children:`처리 중입니다.`}),(0,b.jsx)(c,{type:`button`,variant:`secondary`,children:`다음 작업`})]})},D={render:()=>(0,b.jsx)(`div`,{className:`grid gap-4`,children:[`light`,`dark`].map(e=>(0,b.jsx)(`section`,{className:[`${e} p-4`,`[background:var(--color-surface-default)] [color:var(--color-content-primary)]`].filter(Boolean).join(` `),"data-testid":`theme-${e}`,children:(0,b.jsx)(s,{})},e))})},O={parameters:{layout:`fullscreen`},render:()=>(0,b.jsx)(m,{as:`main`,margin:`0`,padding:`0`,background:`surface.canvas`,fillMode:`viewport`,"data-testid":`loading-frame`,children:(0,b.jsx)(g,{size:`mobile.s`,gutter:`4`,"data-testid":`loading-container`,children:(0,b.jsxs)(m,{role:`status`,foreground:`content.accent`,paddingY:`8`,children:[(0,b.jsx)(s,{size:`lg`}),(0,b.jsx)(i,{children:`회원가입 폼 로딩 중`})]})})})},k={parameters:{layout:`fullscreen`},render:()=>(0,b.jsxs)(m,{as:v,fillMode:`viewport`,background:`surface.canvas`,children:[(0,b.jsx)(f,{as:`header`,padding:`4`,children:(0,b.jsx)(u,{children:`계정`})}),(0,b.jsx)(m,{as:`main`,fillMode:`grow`,margin:`0`,padding:`0`,"data-testid":`loading-frame`,children:(0,b.jsx)(g,{size:`mobile.s`,gutter:`4`,"data-testid":`loading-container`,children:(0,b.jsxs)(m,{role:`status`,foreground:`content.accent`,paddingY:`8`,children:[(0,b.jsx)(s,{size:`lg`}),(0,b.jsx)(i,{children:`회원가입 폼 로딩 중`})]})})})]})},A=()=>{let[e,t]=(0,y.useState)(`idle`);return(0,b.jsxs)(v,{padding:`4`,gap:`4`,children:[(0,b.jsxs)(v,{direction:`row`,gap:`2`,children:[(0,b.jsx)(c,{onClick:()=>t(`loading`),children:`불러오기`}),(0,b.jsx)(c,{onClick:()=>t(`complete`),children:`완료`})]}),(0,b.jsxs)(m,{role:`status`,foreground:`content.accent`,paddingY:`8`,children:[e===`loading`&&(0,b.jsx)(s,{}),e!==`idle`&&(0,b.jsx)(i,{children:e===`loading`?`콘텐츠를 불러오는 중`:`콘텐츠를 불러왔습니다`})]})]})},j={render:()=>(0,b.jsx)(A,{})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="grid justify-items-center gap-2">
          <Spinner size={size} />
          <span>{size}</span>
        </div>)}
    </div>
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      {inheritedColors.map(([name, color]) => <div key={name} data-testid={\`color-\${name}\`} className={color}>
          <Spinner />
        </div>)}
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button type="button" variant="secondary">
        이전 작업
      </Button>
      <Button type="button" aria-busy="true">
        <Spinner size="sm" /> 저장 중
      </Button>
      <p role="status">처리 중입니다.</p>
      <Button type="button" variant="secondary">
        다음 작업
      </Button>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4">
      {(['light', 'dark'] as const).map(theme => <section key={theme} className={[\`\${theme} p-4\`, '[background:var(--color-surface-default)] [color:var(--color-content-primary)]'].filter(Boolean).join(' ')} data-testid={\`theme-\${theme}\`}>
          <Spinner />
        </section>)}
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Center as="main" margin="0" padding="0" background="surface.canvas" fillMode="viewport" data-testid="loading-frame">
      <Container size="mobile.s" gutter="4" data-testid="loading-container">
        <Center role="status" foreground="content.accent" paddingY="8">
          <Spinner size="lg" />
          <VisuallyHidden>회원가입 폼 로딩 중</VisuallyHidden>
        </Center>
      </Container>
    </Center>
} satisfies Story`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
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
} satisfies Story`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <PersistentStatusExample />
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Sizes`,`InheritedColor`,`ButtonAndStatus`,`Themes`,`ViewportStatus`,`WithinShellStatus`,`PersistentStatus`]})))()}N();export{E as ButtonAndStatus,S as Default,T as InheritedColor,j as PersistentStatus,C as Sizes,D as Themes,O as ViewportStatus,k as WithinShellStatus,M as __namedExportsOrder,x as default};