import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CngikXIq.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{C as r,E as i,H as a,J as o,U as s,a as c,c as l,d as u,i as d,o as f,q as p,r as m,u as h}from"./dist-BJtT3k7V.js";import{n as g,t as _}from"./empty-state-DelL_7NA.js";function v({error:e=!1}){let[t,n]=(0,y.useState)(``);return(0,b.jsx)(l,{as:`main`,fillMode:`viewport`,background:`surface.default`,paddingY:`6`,children:(0,b.jsx)(u,{size:`mobile`,children:(0,b.jsxs)(_,{children:[(0,b.jsx)(p,{children:e?`오류가 발생했습니다`:`페이지를 찾을 수 없습니다`}),(0,b.jsx)(m,{children:e?`다시 시도하거나 문의해 주세요.`:`주소를 확인하거나 이전 화면으로 이동해 주세요.`}),e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(m,{children:[`오류 번호: `,(0,b.jsx)(h,{children:`example-event-0001`})]}),(0,b.jsx)(f,{variant:`outline`,onClick:()=>n(`오류 번호 복사 완료`),children:`오류 번호 복사`})]}),(0,b.jsxs)(r,{justify:`center`,gap:`2`,children:[(0,b.jsx)(f,{onClick:()=>n(e?`다시 시도 요청`:`이전 화면 이동 요청`),children:e?`다시 시도`:`뒤로 가기`}),(0,b.jsx)(i,{href:`#home`,children:`홈으로`})]}),e&&(0,b.jsx)(i,{href:`mailto:support@example.com`,children:`문의하기`}),(0,b.jsx)(s,{role:`status`,children:t})]})})})}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{o(),y=t(),g(),b=n(),x=()=>(0,b.jsx)(c,{"aria-hidden":!0,foreground:`content.muted`,children:(0,b.jsxs)(`svg`,{fill:`none`,focusable:`false`,height:`1.5rem`,viewBox:`0 0 24 24`,width:`1.5rem`,children:[(0,b.jsx)(`circle`,{cx:`11`,cy:`11`,r:`6`,stroke:`currentColor`,strokeWidth:`2`}),(0,b.jsx)(`path`,{d:`m16 16 4 4`,stroke:`currentColor`,strokeWidth:`2`})]})}),S=({emphasized:e=!1})=>(0,b.jsxs)(a,{align:`center`,gap:`1`,children:[e?(0,b.jsxs)(m,{children:[`검색 결과가 `,(0,b.jsx)(`strong`,{children:`없습니다`})]}):(0,b.jsx)(d,{children:`검색 결과가 없습니다`}),(0,b.jsx)(s,{tone:`muted`,children:`조건을 변경해 다시 검색해 보세요.`})]}),C={title:`Compositions/Feedback/EmptyState`,component:_,tags:[`autodocs`],parameters:{docs:{description:{component:`Token-backed root layout for composing existing design-system artwork, typography, content, and actions. It adds no product state, live region, or anatomy subcomponents.`}}}},w={parameters:{layout:`fullscreen`},render:()=>(0,b.jsx)(v,{})},T={parameters:{layout:`fullscreen`},render:()=>(0,b.jsx)(v,{error:!0})},E={render:()=>(0,b.jsxs)(_,{"data-testid":`default-empty-state`,children:[(0,b.jsx)(x,{}),(0,b.jsx)(S,{}),(0,b.jsx)(f,{children:`조건 초기화`})]})},D={render:()=>(0,b.jsxs)(_,{"data-testid":`compact-empty-state`,density:`compact`,surface:`outlined`,children:[(0,b.jsx)(x,{}),(0,b.jsx)(S,{}),(0,b.jsx)(f,{size:`sm`,children:`조건 초기화`})]})},O={render:()=>(0,b.jsxs)(_,{surface:`outlined`,children:[(0,b.jsx)(x,{}),(0,b.jsx)(d,{children:`저장된 항목이 없습니다`}),(0,b.jsx)(f,{children:`항목 찾기`})]})},k={render:()=>(0,b.jsxs)(_,{children:[(0,b.jsx)(x,{}),(0,b.jsx)(S,{})]})},A={render:()=>(0,b.jsxs)(_,{surface:`outlined`,children:[(0,b.jsx)(x,{}),(0,b.jsx)(S,{emphasized:!0}),(0,b.jsx)(f,{children:`조건 초기화`})]})},j={parameters:{layout:`fullscreen`},render:()=>(0,b.jsxs)(_,{"data-testid":`long-empty-state`,surface:`outlined`,children:[(0,b.jsx)(x,{}),(0,b.jsxs)(a,{align:`center`,gap:`1`,children:[(0,b.jsx)(d,{children:`VeryLongUnbrokenSearchResultDescriptionThatMustWrapInsideANarrowViewportWithoutCreatingHorizontalOverflow`}),(0,b.jsx)(s,{tone:`muted`,children:`검색 조건과 지역 범위를 변경한 뒤 다시 확인해 주세요. 이 설명은 글자 확대와 좁은 화면에서도 컨테이너 밖으로 밀려나지 않아야 합니다.`})]}),(0,b.jsx)(f,{children:`조건 초기화`})]})},M={parameters:{layout:`fullscreen`},render:()=>(0,b.jsxs)(a,{gap:`4`,padding:`4`,children:[(0,b.jsx)(c,{background:`surface.default`,className:`light`,padding:`4`,children:(0,b.jsxs)(_,{"data-testid":`light-empty-state`,surface:`outlined`,children:[(0,b.jsx)(x,{}),(0,b.jsx)(S,{})]})}),(0,b.jsx)(c,{background:`surface.default`,className:`dark`,padding:`4`,children:(0,b.jsxs)(_,{"data-testid":`dark-empty-state`,surface:`outlined`,children:[(0,b.jsx)(x,{}),(0,b.jsx)(S,{})]})})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <SystemStateExample />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <SystemStateExample error />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState data-testid="default-empty-state">
      <SearchArtwork />
      <SearchContent />
      <Button>조건 초기화</Button>
    </EmptyState>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState data-testid="compact-empty-state" density="compact" surface="outlined">
      <SearchArtwork />
      <SearchContent />
      <Button size="sm">조건 초기화</Button>
    </EmptyState>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState surface="outlined">
      <SearchArtwork />
      <BodyBold>저장된 항목이 없습니다</BodyBold>
      <Button>항목 찾기</Button>
    </EmptyState>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState>
      <SearchArtwork />
      <SearchContent />
    </EmptyState>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <EmptyState surface="outlined">
      <SearchArtwork />
      <SearchContent emphasized />
      <Button>조건 초기화</Button>
    </EmptyState>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <EmptyState data-testid="long-empty-state" surface="outlined">
      <SearchArtwork />
      <Stack align="center" gap="1">
        <BodyBold>
          VeryLongUnbrokenSearchResultDescriptionThatMustWrapInsideANarrowViewportWithoutCreatingHorizontalOverflow
        </BodyBold>
        <SupportingText tone="muted">
          검색 조건과 지역 범위를 변경한 뒤 다시 확인해 주세요. 이 설명은 글자
          확대와 좁은 화면에서도 컨테이너 밖으로 밀려나지 않아야 합니다.
        </SupportingText>
      </Stack>
      <Button>조건 초기화</Button>
    </EmptyState>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Stack gap="4" padding="4">
      <Box background="surface.default" className="light" padding="4">
        <EmptyState data-testid="light-empty-state" surface="outlined">
          <SearchArtwork />
          <SearchContent />
        </EmptyState>
      </Box>
      <Box background="surface.default" className="dark" padding="4">
        <EmptyState data-testid="dark-empty-state" surface="outlined">
          <SearchArtwork />
          <SearchContent />
        </EmptyState>
      </Box>
    </Stack>
}`,...M.parameters?.docs?.source}}},N=[`NotFoundPage`,`ErrorPage`,`Default`,`CompactOutlined`,`WithoutDescription`,`WithoutAction`,`PartialEmphasis`,`LongContent`,`Themes`]})))()}P();export{D as CompactOutlined,E as Default,T as ErrorPage,j as LongContent,w as NotFoundPage,A as PartialEmphasis,M as Themes,k as WithoutAction,O as WithoutDescription,N as __namedExportsOrder,C as default};