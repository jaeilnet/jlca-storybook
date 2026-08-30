import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./stack-B-COTSVz.js";import{n as i,t as a}from"./box-34QNYOgX.js";import{n as o,t as s}from"./text-SLCD-k8b.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),n(),o(),c=t(),l=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`],u=[`regular`,`medium`,`semibold`,`bold`],d=[`default`,`secondary`,`muted`,`accent`,`success`,`warning`,`danger`,`info`],f={title:`Primitives/Typography/Text`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Usage: 본문과 짧은 UI 텍스트에 JLCA 크기·weight·tone을 적용합니다. Non-usage: Code, heading, 인용문, 목록 의미를 Text variant로 대체하지 않습니다.`}}}},p={render:()=>(0,c.jsx)(r,{gap:`4`,children:l.map(e=>(0,c.jsx)(r,{gap:`1`,children:u.map(t=>(0,c.jsxs)(s,{size:e,weight:t,children:[e,` · `,t,` — 읽기 좋은 타이포그래피`]},t))},e))})},m=()=>(0,c.jsx)(r,{gap:`2`,children:d.map(e=>(0,c.jsxs)(s,{tone:e,children:[e,` — Semantic content tone`]},e))}),h={render:()=>(0,c.jsxs)(r,{gap:`4`,children:[(0,c.jsx)(a,{background:`surface.default`,padding:`6`,radius:`lg`,children:(0,c.jsx)(m,{})}),(0,c.jsx)(a,{background:`surface.default`,className:`dark`,padding:`6`,radius:`lg`,children:(0,c.jsx)(m,{})})]})},g={render:()=>(0,c.jsxs)(r,{gap:`4`,children:[(0,c.jsx)(s,{as:`a`,href:`#text-link`,tone:`accent`,weight:`semibold`,children:`네이티브 링크 의미를 보존하는 Text`}),(0,c.jsx)(a,{style:{maxWidth:360},children:(0,c.jsx)(s,{wrap:`balance`,children:`Balance는 짧은 제목성 문장의 줄 길이를 고르게 조정합니다.`})}),(0,c.jsx)(s,{wrap:`nowrap`,children:`이 문장은 줄바꿈하지 않습니다.`})]})},_={render:()=>(0,c.jsxs)(r,{gap:`4`,children:[(0,c.jsx)(a,{style:{maxWidth:280},children:(0,c.jsx)(s,{truncate:!0,children:`한 줄 말줄임은 보조 정보에만 사용하며 중요한 정보를 숨기지 않습니다.`})}),(0,c.jsx)(a,{style:{maxWidth:320},children:(0,c.jsx)(s,{lineClamp:2,children:`여러 줄 clamp는 DOM 텍스트를 제거하지 않지만 시각적으로 내용을 감춥니다. 전체 내용을 찾을 수 있는 별도 경로가 있을 때만 사용합니다.`})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      <Box style={{
      maxWidth: 360
    }}>
        <Text wrap="balance">
          Balance는 짧은 제목성 문장의 줄 길이를 고르게 조정합니다.
        </Text>
      </Box>
      <Text wrap="nowrap">이 문장은 줄바꿈하지 않습니다.</Text>
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="4">
      <Box style={{
      maxWidth: 280
    }}>
        <Text truncate>
          한 줄 말줄임은 보조 정보에만 사용하며 중요한 정보를 숨기지 않습니다.
        </Text>
      </Box>
      <Box style={{
      maxWidth: 320
    }}>
        <Text lineClamp={2}>
          여러 줄 clamp는 DOM 텍스트를 제거하지 않지만 시각적으로 내용을
          감춥니다. 전체 내용을 찾을 수 있는 별도 경로가 있을 때만 사용합니다.
        </Text>
      </Box>
    </Stack>
}`,..._.parameters?.docs?.source}}},v=[`SizesAndWeights`,`TonesInLightAndDark`,`PolymorphismAndWrapping`,`TruncationAndClamp`]})))()}y();export{g as PolymorphismAndWrapping,p as SizesAndWeights,h as TonesInLightAndDark,_ as TruncationAndClamp,v as __namedExportsOrder,f as default};