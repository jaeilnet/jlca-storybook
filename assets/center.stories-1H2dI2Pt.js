import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-3rykzFFW.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-CBIDVShO.js";import{n as a,t as o}from"./box-DEK_pih5.js";import{n as s,t as c}from"./center-DCqZNGR8.js";import{n as l,t as u}from"./container-DQZikCpt.js";import{n as d,t as f}from"./grid-DUqDHrWQ.js";import{s as p,t as m}from"./text-roles-CWe4uGfO.js";import{n as h,t as g}from"./stack-DYzKO6QY.js";import{i as _,r as v}from"./title-CsHs3a_i.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{y=t(),a(),r(),l(),d(),h(),p(),_(),s(),b=n(),x=({long:e=!1})=>(0,b.jsx)(u,{"data-testid":`center-container`,gutter:`4`,size:`mobile.s`,children:(0,b.jsxs)(g,{gap:`4`,children:[(0,b.jsx)(v,{children:`계정에 로그인`}),(0,b.jsx)(m,{children:e?`긴 번역과 확대 환경에서도 시작 내용과 마지막 동작에 접근할 수 있어야 합니다. `.repeat(18):`계속하려면 계정 정보를 확인하세요.`}),(0,b.jsx)(i,{children:`계속`})]})}),S={title:`Primitives/Layout/Center`,component:c,args:{background:`surface.subtle`,children:(0,b.jsx)(o,{background:`surface.raised`,padding:`4`,radius:`md`,children:`Centered content`}),padding:`8`},tags:[`autodocs`]},C={},w={args:{inline:!0,padding:`2`}},T={render:()=>(0,b.jsx)(c,{as:`main`,background:`surface.canvas`,"data-testid":`viewport-center`,fillMode:`viewport`,margin:`0`,padding:`0`,children:(0,b.jsx)(x,{})})},E={render:()=>(0,b.jsxs)(g,{"data-testid":`grow-shell`,className:`[min-height:30rem]`,children:[(0,b.jsx)(o,{as:`header`,padding:`4`,children:`Shell header`}),(0,b.jsx)(c,{"data-testid":`grow-center`,fillMode:`grow`,children:(0,b.jsx)(x,{})})]})},D={render:()=>(0,b.jsx)(c,{as:`main`,"data-testid":`long-viewport-center`,fillMode:`viewport`,margin:`0`,padding:`0`,children:(0,b.jsx)(x,{long:!0})})},O={render:()=>(0,b.jsxs)(f,{columns:1,gap:`4`,responsive:{tablet:{columns:2}},children:[(0,b.jsx)(o,{display:`flex`,className:`[min-height:20rem]`,children:(0,b.jsx)(c,{background:`surface.canvas`,"data-testid":`light-center`,fillMode:`grow`,children:(0,b.jsx)(x,{})})}),(0,b.jsx)(o,{className:[`dark`,`[min-height:20rem]`].filter(Boolean).join(` `),display:`flex`,children:(0,b.jsx)(c,{background:`surface.canvas`,"data-testid":`dark-center`,fillMode:`grow`,children:(0,b.jsx)(x,{})})})]})},k=()=>{let[e,t]=(0,y.useState)(),[n,r]=(0,y.useState)(!0);return(0,b.jsxs)(g,{"data-testid":`transition-shell`,className:`[height:30rem]`,children:[(0,b.jsxs)(o,{as:`header`,padding:`2`,children:[(0,b.jsx)(i,{onClick:()=>t(`grow`),children:`Use grow mode`}),(0,b.jsx)(i,{onClick:()=>t(`viewport`),children:`Use viewport mode`}),(0,b.jsx)(i,{onClick:()=>t(void 0),children:`Use default mode`}),(0,b.jsx)(i,{onClick:()=>{r(!1),t(`grow`)},children:`Use grow without caller style`})]}),(0,b.jsx)(c,{"data-testid":`transition-center`,fillMode:e,className:n?`[flex:1_1_0%] [flex-grow:2]`:void 0,children:`Transition content`})]})},A={render:()=>(0,b.jsx)(k,{})},j=()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i,{onClick:()=>t(!e),children:`Toggle logical minimum`}),(0,b.jsx)(c,{"data-testid":`logical-size-center`,fillMode:`viewport`,className:e?`[min-block-size:0.625rem] [min-height:0.625rem] [inline-size:0.625rem] [width:0.625rem] [max-inline-size:0.625rem] [max-width:0.625rem] [min-inline-size:62.5rem] [min-width:62.5rem]`:void 0,children:`Viewport content`})]})},M={render:()=>(0,b.jsx)(j,{})},N=e=>(0,b.jsx)(`div`,{...e}),P=({fillMode:e})=>{let t=(0,y.useRef)(null);return(0,y.useLayoutEffect)(()=>{let e=t.current,n=e.parentElement;e.dataset.measuredFlex=getComputedStyle(n).flex,e.dataset.measuredHeight=String(n.getBoundingClientRect().height)},[e]),(0,b.jsx)(`output`,{"data-testid":`layout-measurement`,ref:t,children:`Measured during child layout effect`})},F=()=>{let[e,t]=(0,y.useState)();return(0,b.jsxs)(g,{"data-testid":`custom-shell`,className:`[height:30rem]`,children:[(0,b.jsx)(o,{as:`header`,children:(0,b.jsx)(i,{onClick:()=>t(`grow`),children:`Grow custom host`})}),(0,b.jsx)(c,{as:N,"data-testid":`custom-center`,fillMode:e,className:`[flex:0_0_auto]`,children:(0,b.jsx)(P,{fillMode:e})})]})},I={render:()=>(0,b.jsx)(F,{})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    padding: '2'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Center as="main" background="surface.canvas" data-testid="viewport-center" fillMode="viewport" margin="0" padding="0">
      <AuthContent />
    </Center>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Stack data-testid="grow-shell" className={'[min-height:30rem]'}>
      <Box as="header" padding="4">
        Shell header
      </Box>
      <Center data-testid="grow-center" fillMode="grow">
        <AuthContent />
      </Center>
    </Stack>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Center as="main" data-testid="long-viewport-center" fillMode="viewport" margin="0" padding="0">
      <AuthContent long />
    </Center>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Grid columns={1} gap="4" responsive={{
    tablet: {
      columns: 2
    }
  }}>
      <Box display="flex" className={'[min-height:20rem]'}>
        <Center background="surface.canvas" data-testid="light-center" fillMode="grow">
          <AuthContent />
        </Center>
      </Box>
      <Box className={['dark', '[min-height:20rem]'].filter(Boolean).join(' ')} display="flex">
        <Center background="surface.canvas" data-testid="dark-center" fillMode="grow">
          <AuthContent />
        </Center>
      </Box>
    </Grid>
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <FlexTransitionFixture />
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <LogicalSizeTransitionFixture />
}`,...M.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <CustomHostFixture />
}`,...I.parameters?.docs?.source}}},L=[`Block`,`Inline`,`ViewportFrame`,`GrowFrame`,`LongViewportContent`,`Themes`,`FlexTransition`,`LogicalSizeTransition`,`CustomHost`]})))()}R();export{C as Block,I as CustomHost,A as FlexTransition,E as GrowFrame,w as Inline,M as LogicalSizeTransition,D as LongViewportContent,O as Themes,T as ViewportFrame,L as __namedExportsOrder,S as default};