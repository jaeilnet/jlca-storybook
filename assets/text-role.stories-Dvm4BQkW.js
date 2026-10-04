import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{a as n,i as r,n as i,o as a,r as o,s,t as c}from"./text-roles-C7ngcJU-.js";import{n as l,t as u}from"./box-B_YI4jyi.js";import{n as d,t as f}from"./stack-C7TcKquQ.js";import{i as p,n as m,r as h,t as g}from"./title-K8Px_C0L.js";var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{l(),d(),p(),s(),_=t(),v={title:`Primitives/Typography/Roles`,component:h,tags:[`autodocs`],parameters:{docs:{description:{component:`Usage: Title, Subtitle, SectionTitle, Body, SupportingText, Caption과 Bold 역할로 태그·크기·굵기를 이름에서 선택합니다. tone, align, lineClamp는 상태·정렬·오버플로에만 사용합니다. Non-usage: size, weight, order, as로 역할을 다시 조합하지 않습니다.`}}}},y={render:()=>(0,_.jsxs)(f,{gap:`4`,children:[(0,_.jsx)(h,{children:`Title · h1`}),(0,_.jsx)(m,{children:`Subtitle · h2`}),(0,_.jsx)(g,{children:`SectionTitle · h3`}),(0,_.jsx)(c,{children:`Body · regular`}),(0,_.jsx)(i,{children:`BodyBold · bold`}),(0,_.jsx)(n,{children:`SupportingText · regular`}),(0,_.jsx)(a,{children:`SupportingTextBold · bold`}),(0,_.jsx)(o,{children:`Caption · regular`}),(0,_.jsx)(r,{children:`CaptionBold · bold`})]})},b={render:()=>(0,_.jsxs)(f,{gap:`3`,children:[(0,_.jsx)(m,{align:`center`,tone:`accent`,children:`Centered accent subtitle`}),(0,_.jsx)(c,{tone:`secondary`,children:`Secondary body`}),(0,_.jsx)(o,{tone:`muted`,children:`Muted caption`})]})},x=`A long section title demonstrates one-line overflow handling`,S=`Supporting text demonstrates two-line overflow handling while its full DOM content remains available to assistive technology.`,C={render:()=>(0,_.jsxs)(f,{gap:`4`,children:[(0,_.jsx)(u,{background:`surface.default`,padding:`4`,radius:`lg`,className:`[max-width:17.5rem]`,children:(0,_.jsxs)(f,{gap:`2`,children:[(0,_.jsx)(g,{lineClamp:1,children:x}),(0,_.jsx)(n,{lineClamp:2,children:S})]})}),(0,_.jsx)(u,{background:`surface.default`,className:[`dark`,`[max-width:17.5rem]`].filter(Boolean).join(` `),padding:`4`,radius:`lg`,children:(0,_.jsxs)(f,{gap:`2`,children:[(0,_.jsx)(g,{lineClamp:1,children:x}),(0,_.jsx)(n,{lineClamp:2,children:S})]})})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Title>Title · h1</Title>
      <Subtitle>Subtitle · h2</Subtitle>
      <SectionTitle>SectionTitle · h3</SectionTitle>
      <Body>Body · regular</Body>
      <BodyBold>BodyBold · bold</BodyBold>
      <SupportingText>SupportingText · regular</SupportingText>
      <SupportingTextBold>SupportingTextBold · bold</SupportingTextBold>
      <Caption>Caption · regular</Caption>
      <CaptionBold>CaptionBold · bold</CaptionBold>
    </Stack>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3">
      <Subtitle align="center" tone="accent">
        Centered accent subtitle
      </Subtitle>
      <Body tone="secondary">Secondary body</Body>
      <Caption tone="muted">Muted caption</Caption>
    </Stack>
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Box background="surface.default" padding="4" radius="lg" className={'[max-width:17.5rem]'}>
        <Stack gap="2">
          <SectionTitle lineClamp={1}>{clampedSectionTitle}</SectionTitle>
          <SupportingText lineClamp={2}>{clampedSupportingText}</SupportingText>
        </Stack>
      </Box>
      <Box background="surface.default" className={['dark', '[max-width:17.5rem]'].filter(Boolean).join(' ')} padding="4" radius="lg">
        <Stack gap="2">
          <SectionTitle lineClamp={1}>{clampedSectionTitle}</SectionTitle>
          <SupportingText lineClamp={2}>{clampedSupportingText}</SupportingText>
        </Stack>
      </Box>
    </Stack>
}`,...C.parameters?.docs?.source}}},w=[`Hierarchy`,`Modifiers`,`ClampAndThemes`]})))()}T();export{C as ClampAndThemes,y as Hierarchy,b as Modifiers,w as __namedExportsOrder,v as default};