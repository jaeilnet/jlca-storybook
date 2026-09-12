import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./box-DEK_pih5.js";import{n as i,t as a}from"./text-qID-59Cm.js";import{n as o,t as s}from"./stack-DYzKO6QY.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),o(),i(),c=t(),l=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`],u=[`regular`,`medium`,`semibold`,`bold`],d=[`default`,`secondary`,`muted`,`accent`,`success`,`warning`,`danger`,`info`],f={title:`Primitives/Typography/Deprecated Text Compatibility`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Deprecated compatibility only: 기존 Text size, weight, as 조합을 단계적으로 이전하는 소비자를 위한 증거입니다. 새 코드에서는 Title, Subtitle, SectionTitle, Body, SupportingText, Caption과 Bold 역할을 사용하며 이 API 조합을 새로 추가하지 않습니다.`}}}},p={render:()=>(0,c.jsx)(s,{gap:`4`,children:l.map(e=>(0,c.jsx)(s,{gap:`1`,children:u.map(t=>(0,c.jsxs)(a,{size:e,weight:t,children:[e,` · `,t,` — 읽기 좋은 타이포그래피`]},t))},e))})},m=()=>(0,c.jsx)(s,{gap:`2`,children:d.map(e=>(0,c.jsxs)(a,{tone:e,children:[e,` — Semantic content tone`]},e))}),h={render:()=>(0,c.jsxs)(s,{gap:`4`,children:[(0,c.jsx)(r,{background:`surface.default`,padding:`6`,radius:`lg`,children:(0,c.jsx)(m,{})}),(0,c.jsx)(r,{background:`surface.default`,className:`dark`,padding:`6`,radius:`lg`,children:(0,c.jsx)(m,{})})]})},g={render:()=>(0,c.jsxs)(s,{gap:`4`,children:[(0,c.jsx)(a,{as:`a`,href:`#text-link`,tone:`accent`,weight:`semibold`,children:`네이티브 링크 의미를 보존하는 Text`}),(0,c.jsx)(r,{className:`[max-width:22.5rem]`,children:(0,c.jsx)(a,{wrap:`balance`,children:`Balance는 짧은 제목성 문장의 줄 길이를 고르게 조정합니다.`})}),(0,c.jsx)(a,{wrap:`nowrap`,children:`이 문장은 줄바꿈하지 않습니다.`})]})},_={render:()=>(0,c.jsxs)(s,{gap:`4`,children:[(0,c.jsx)(r,{className:`[max-width:17.5rem]`,children:(0,c.jsx)(a,{truncate:!0,children:`한 줄 말줄임은 보조 정보에만 사용하며 중요한 정보를 숨기지 않습니다.`})}),(0,c.jsx)(r,{className:`[max-width:20rem]`,children:(0,c.jsx)(a,{lineClamp:2,children:`여러 줄 clamp는 DOM 텍스트를 제거하지 않지만 시각적으로 내용을 감춥니다. 전체 내용을 찾을 수 있는 별도 경로가 있을 때만 사용합니다.`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      {sizes.map(size => <Stack gap="1" key={size}>
          {weights.map(weight => <Text key={weight} size={size} weight={weight}>
              {size} · {weight} — 읽기 좋은 타이포그래피
            </Text>)}
        </Stack>)}
    </Stack>
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Box background="surface.default" padding="6" radius="lg">
        <ToneMatrix />
      </Box>
      <Box background="surface.default" className="dark" padding="6" radius="lg">
        <ToneMatrix />
      </Box>
    </Stack>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Text as="a" href="#text-link" tone="accent" weight="semibold">
        네이티브 링크 의미를 보존하는 Text
      </Text>
      <Box className={'[max-width:22.5rem]'}>
        <Text wrap="balance">
          Balance는 짧은 제목성 문장의 줄 길이를 고르게 조정합니다.
        </Text>
      </Box>
      <Text wrap="nowrap">이 문장은 줄바꿈하지 않습니다.</Text>
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Box className={'[max-width:17.5rem]'}>
        <Text truncate>
          한 줄 말줄임은 보조 정보에만 사용하며 중요한 정보를 숨기지 않습니다.
        </Text>
      </Box>
      <Box className={'[max-width:20rem]'}>
        <Text lineClamp={2}>
          여러 줄 clamp는 DOM 텍스트를 제거하지 않지만 시각적으로 내용을
          감춥니다. 전체 내용을 찾을 수 있는 별도 경로가 있을 때만 사용합니다.
        </Text>
      </Box>
    </Stack>
}`,..._.parameters?.docs?.source}}},v=[`DeprecatedSizesAndWeights`,`DeprecatedTonesInLightAndDark`,`DeprecatedPolymorphismAndWrapping`,`DeprecatedTruncationAndClamp`]})))()}y();export{g as DeprecatedPolymorphismAndWrapping,p as DeprecatedSizesAndWeights,h as DeprecatedTonesInLightAndDark,_ as DeprecatedTruncationAndClamp,v as __namedExportsOrder,f as default};