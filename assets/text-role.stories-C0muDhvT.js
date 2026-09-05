import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./box-34QNYOgX.js";import{n as i,t as a}from"./stack-BU6ic646.js";import{a as o,i as s,n as c,o as l,r as u,s as d,t as f}from"./text-roles-BXuwea4i.js";import{i as p,n as m,r as h,t as g}from"./title-DDZhQ1r5.js";var _,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),p(),d(),_=t(),v={title:`Primitives/Typography/Roles`,component:h,tags:[`autodocs`],parameters:{docs:{description:{component:`Usage: Title, Subtitle, SectionTitle, Body, SupportingText, Caption과 Bold 역할로 태그·크기·굵기를 이름에서 선택합니다. tone, align, lineClamp는 상태·정렬·오버플로에만 사용합니다. Non-usage: size, weight, order, as로 역할을 다시 조합하지 않습니다.`}}}},y={render:()=>(0,_.jsxs)(a,{gap:`4`,children:[(0,_.jsx)(h,{children:`Title · h1`}),(0,_.jsx)(m,{children:`Subtitle · h2`}),(0,_.jsx)(g,{children:`SectionTitle · h3`}),(0,_.jsx)(f,{children:`Body · regular`}),(0,_.jsx)(c,{children:`BodyBold · bold`}),(0,_.jsx)(o,{children:`SupportingText · regular`}),(0,_.jsx)(l,{children:`SupportingTextBold · bold`}),(0,_.jsx)(u,{children:`Caption · regular`}),(0,_.jsx)(s,{children:`CaptionBold · bold`})]})},b={render:()=>(0,_.jsxs)(a,{gap:`3`,children:[(0,_.jsx)(m,{align:`center`,tone:`accent`,children:`Centered accent subtitle`}),(0,_.jsx)(f,{tone:`secondary`,children:`Secondary body`}),(0,_.jsx)(u,{tone:`muted`,children:`Muted caption`})]})},x=`A long section title demonstrates one-line overflow handling`,S=`Supporting text demonstrates two-line overflow handling while its full DOM content remains available to assistive technology.`,C={render:()=>(0,_.jsxs)(a,{gap:`4`,children:[(0,_.jsx)(r,{background:`surface.default`,padding:`4`,radius:`lg`,style:{maxWidth:280},children:(0,_.jsxs)(a,{gap:`2`,children:[(0,_.jsx)(g,{lineClamp:1,children:x}),(0,_.jsx)(o,{lineClamp:2,children:S})]})}),(0,_.jsx)(r,{background:`surface.default`,className:`dark`,padding:`4`,radius:`lg`,style:{maxWidth:280},children:(0,_.jsxs)(a,{gap:`2`,children:[(0,_.jsx)(g,{lineClamp:1,children:x}),(0,_.jsx)(o,{lineClamp:2,children:S})]})})]})},w={render:()=>(0,_.jsxs)(a,{gap:`4`,children:[(0,_.jsxs)(r,{as:`section`,background:`surface.default`,padding:`4`,radius:`lg`,children:[(0,_.jsx)(g,{children:`New role code`}),(0,_.jsx)(`pre`,{"aria-label":`New role code example`,children:(0,_.jsx)(`code`,{children:`<Title>Page title</Title>
<Body>Body copy</Body>`})})]}),(0,_.jsxs)(r,{as:`section`,background:`surface.default`,padding:`4`,radius:`lg`,children:[(0,_.jsx)(g,{children:`Deprecated compatibility syntax`}),(0,_.jsx)(o,{tone:`muted`,children:`Existing callers may retain this syntax until a later major release; new code uses the fixed roles above.`}),(0,_.jsx)(`pre`,{"aria-label":`Deprecated compatibility syntax example`,children:(0,_.jsx)(`code`,{children:`<Title order={2}>Section title</Title>
<Text size="sm">Supporting copy</Text>`})})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      <Box background="surface.default" padding="4" radius="lg" style={{
      maxWidth: 280
    }}>
        <Stack gap="2">
          <SectionTitle lineClamp={1}>{clampedSectionTitle}</SectionTitle>
          <SupportingText lineClamp={2}>{clampedSupportingText}</SupportingText>
        </Stack>
      </Box>
      <Box background="surface.default" className="dark" padding="4" radius="lg" style={{
      maxWidth: 280
    }}>
        <Stack gap="2">
          <SectionTitle lineClamp={1}>{clampedSectionTitle}</SectionTitle>
          <SupportingText lineClamp={2}>{clampedSupportingText}</SupportingText>
        </Stack>
      </Box>
    </Stack>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Box as="section" background="surface.default" padding="4" radius="lg">
        <SectionTitle>New role code</SectionTitle>
        <pre aria-label="New role code example">
          <code>{'<Title>Page title</Title>\\n<Body>Body copy</Body>'}</code>
        </pre>
      </Box>
      <Box as="section" background="surface.default" padding="4" radius="lg">
        <SectionTitle>Deprecated compatibility syntax</SectionTitle>
        <SupportingText tone="muted">
          Existing callers may retain this syntax until a later major release;
          new code uses the fixed roles above.
        </SupportingText>
        <pre aria-label="Deprecated compatibility syntax example">
          <code>
            {'<Title order={2}>Section title</Title>\\n<Text size="sm">Supporting copy</Text>'}
          </code>
        </pre>
      </Box>
    </Stack>
}`,...w.parameters?.docs?.source}}},T=[`Hierarchy`,`Modifiers`,`ClampAndThemes`,`Migration`]})))()}E();export{C as ClampAndThemes,y as Hierarchy,w as Migration,b as Modifiers,T as __namedExportsOrder,v as default};