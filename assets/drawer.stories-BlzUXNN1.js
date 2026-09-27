import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./dist-BQI90tbb.js";import{n as i,t as a}from"./button-BM5wT79C.js";import{a as o,n as s,s as c}from"./text-roles-BMhwHs-X.js";import{n as l,t as u}from"./box-BZ6mAdct.js";import{n as d,t as f}from"./stack-v__dBasl.js";import{a as p,c as m,i as h,l as g,n as _,o as v,r as y,s as b,t as x}from"./dist-DLKrXFAY.js";import{i as S,r as C}from"./title-BZey1Zkg.js";var w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{n(),g(),w=t(),T={left:`fixed start-0 top-0 z-[var(--z-modal)] flex h-[100dvh] w-full max-w-[32rem] flex-col overflow-hidden border-e border-[var(--color-border-default)] bg-[var(--color-surface-default)] text-[var(--color-content-primary)] shadow-[var(--shadow-float)] outline-none sm:inset-y-3 sm:start-3 sm:end-auto sm:h-auto sm:w-[28rem] sm:rounded-[var(--radius-xl)] sm:border`,right:`fixed end-0 top-0 z-[var(--z-modal)] flex h-[100dvh] w-full max-w-[32rem] flex-col overflow-hidden border-s border-[var(--color-border-default)] bg-[var(--color-surface-default)] text-[var(--color-content-primary)] shadow-[var(--shadow-float)] outline-none sm:inset-y-3 sm:end-3 sm:h-auto sm:w-[28rem] sm:rounded-[var(--radius-xl)] sm:border`},E={fade:{left:`motion-safe:data-[state=open]:animate-drawer-fade-in`,right:`motion-safe:data-[state=open]:animate-drawer-fade-in`},slide:{left:`motion-safe:data-[state=open]:animate-drawer-enter-from-left`,right:`motion-safe:data-[state=open]:animate-drawer-enter-from-right`}},D=({children:e,...t})=>(0,w.jsx)(x,{...t,modal:!0,children:e}),O=({ref:e,type:t=`button`,...n})=>(0,w.jsx)(m,{...n,"data-slot":`drawer-trigger`,ref:e,type:t,className:[r(`drawer`,{part:`trigger`}),n.className].filter(Boolean).join(` `)}),k=({ref:e,type:t=`button`,...n})=>(0,w.jsx)(_,{...n,"data-slot":`drawer-close`,ref:e,type:t,className:[r(`drawer`,{part:`close`}),n.className].filter(Boolean).join(` `)}),A=({children:e,className:t,closeLabel:n=`닫기`,closeOnEscape:i=!0,closeOnOutsideClick:a=!0,description:o,onCloseAutoFocus:s,onOpenAutoFocus:c,ref:l,showCloseButton:u=!0,side:d=`right`,motion:f=`slide`,title:m})=>{if(!m.trim())throw Error(`DrawerContent requires a non-empty title`);return(0,w.jsxs)(v,{children:[(0,w.jsx)(p,{"data-slot":`drawer-overlay`,className:`${r(`drawer`,{part:`overlay`})} fixed inset-0 z-[var(--z-modal-backdrop)] bg-[var(--shadow-overlay-color)] motion-safe:data-[state=open]:animate-fade-in`}),(0,w.jsxs)(y,{...o?{}:{"aria-describedby":void 0},"aria-modal":`true`,className:[r(`drawer`,{part:`content`}),T[d],E[f][d],t].filter(Boolean).join(` `),"data-motion":f,"data-side":d,"data-slot":`drawer-content`,onCloseAutoFocus:s,onEscapeKeyDown:e=>{i||e.preventDefault()},onOpenAutoFocus:c,onPointerDownOutside:e=>{a||e.preventDefault()},ref:l,children:[(0,w.jsxs)(`div`,{className:`shrink-0 space-y-2 border-b border-[var(--color-border-subtle)] p-6 pe-16 [overflow-wrap:anywhere]`,children:[(0,w.jsx)(b,{className:`text-xl font-semibold`,children:m}),o&&(0,w.jsx)(h,{className:`text-sm text-[var(--color-content-secondary)]`,children:o})]}),e,u&&(0,w.jsx)(_,{asChild:!0,children:(0,w.jsx)(`button`,{"aria-label":n,className:`absolute end-3 top-3 grid size-10 place-items-center rounded-[var(--radius-md)] text-xl text-[var(--color-content-primary)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)]`,type:`button`,children:(0,w.jsx)(`span`,{"aria-hidden":`true`,children:`×`})})})]})]})},j=({className:e,ref:t,...n})=>(0,w.jsx)(`div`,{...n,className:[r(`drawer`,{part:`body`}),`min-h-0 flex-1 overflow-y-auto overscroll-contain p-6 [scrollbar-color:var(--color-border-default)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--color-border-default)] [&::-webkit-scrollbar-thumb:hover]:bg-[var(--color-content-secondary)] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-1.5`,e].filter(Boolean).join(` `),"data-slot":`drawer-body`,ref:t}),M=({className:e,ref:t,...n})=>(0,w.jsx)(`div`,{...n,className:[r(`drawer`,{part:`footer`}),`flex shrink-0 flex-wrap justify-end gap-2 border-t border-[var(--color-border-subtle)] p-4`,e].filter(Boolean).join(` `),"data-slot":`drawer-footer`,ref:t});try{D.displayName=`Drawer`,D.__docgenInfo={description:``,displayName:`Drawer`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,methods:[],props:{defaultOpen:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`DrawerProps`}],description:``,name:`defaultOpen`,parent:{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`DrawerProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`DrawerProps`}],description:``,name:`onOpenChange`,parent:{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`DrawerProps`},required:!1,tags:{},type:{name:`((open: boolean) => void) | undefined`}},open:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`DrawerProps`}],description:``,name:`open`,parent:{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`DrawerProps`},required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{O.displayName=`DrawerTrigger`,O.__docgenInfo={description:``,displayName:`DrawerTrigger`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{k.displayName=`DrawerClose`,k.__docgenInfo={description:``,displayName:`DrawerClose`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{A.displayName=`DrawerContent`,A.__docgenInfo={description:``,displayName:`DrawerContent`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},closeLabel:{defaultValue:{value:`닫기`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`closeLabel`,required:!1,tags:{},type:{name:`string | undefined`}},closeOnEscape:{defaultValue:{value:`true`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`closeOnEscape`,required:!1,tags:{},type:{name:`boolean | undefined`}},closeOnOutsideClick:{defaultValue:{value:`true`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`closeOnOutsideClick`,required:!1,tags:{},type:{name:`boolean | undefined`}},description:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},onCloseAutoFocus:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`onCloseAutoFocus`,required:!1,tags:{},type:{name:`((event: Event) => void) | undefined`}},onOpenAutoFocus:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`onOpenAutoFocus`,required:!1,tags:{},type:{name:`((event: Event) => void) | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}},showCloseButton:{defaultValue:{value:`true`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`showCloseButton`,required:!1,tags:{},type:{name:`boolean | undefined`}},side:{defaultValue:{value:`right`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:`Panel edge. The default right side suits detail and inspector workflows.`,name:`side`,required:!1,tags:{},type:{name:`enum`,raw:`DrawerSide | undefined`,value:[{value:`undefined`},{value:`"left"`},{value:`"right"`}]}},motion:{defaultValue:{value:`slide`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:`Panel entrance. Slide follows the selected side; fade keeps its placement fixed.`,name:`motion`,required:!1,tags:{},type:{name:`enum`,raw:`DrawerMotion | undefined`,value:[{value:`undefined`},{value:`"fade"`},{value:`"slide"`}]}},title:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{j.displayName=`DrawerBody`,j.__docgenInfo={description:``,displayName:`DrawerBody`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,methods:[],props:{},tags:{}}}catch{}try{M.displayName=`DrawerFooter`,M.__docgenInfo={description:``,displayName:`DrawerFooter`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/overlays/drawer/drawer.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{i(),l(),d(),c(),S(),N(),P=t(),F={title:`Primitives/Overlays/Drawer`,component:A,argTypes:{motion:{control:`inline-radio`,options:[`slide`,`fade`]},side:{control:`inline-radio`,options:[`right`,`left`]}},parameters:{layout:`fullscreen`},tags:[`autodocs`]},I=({rows:e,title:t})=>(0,P.jsxs)(u,{background:`surface.subtle`,padding:`4`,radius:`lg`,children:[(0,P.jsx)(C,{order:3,children:t}),(0,P.jsx)(f,{gap:`2`,marginTop:`3`,children:e.map(([e,t])=>(0,P.jsxs)(`div`,{className:`flex justify-between gap-4`,children:[(0,P.jsx)(o,{children:e}),(0,P.jsx)(`div`,{className:`text-end`,children:(0,P.jsx)(s,{children:t})})]},e))})]}),L={args:{description:`선택한 거래의 결제와 배송 정보를 확인합니다.`,motion:`slide`,side:`right`,title:`거래 상세`},render:({description:e,motion:t,side:n,title:r})=>(0,P.jsxs)(D,{children:[(0,P.jsx)(O,{asChild:!0,children:(0,P.jsx)(a,{type:`button`,children:`거래 상세 보기`})}),(0,P.jsxs)(A,{description:e,motion:t,side:n,title:r,children:[(0,P.jsx)(j,{children:(0,P.jsxs)(f,{gap:`6`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(o,{children:`결제 금액`}),(0,P.jsx)(C,{order:2,children:`₩7,890,000`})]}),(0,P.jsx)(I,{title:`거래 정보`,rows:[[`고객 ID`,`548065`],[`주문 번호`,`91362`],[`거래 유형`,`판매`],[`상태`,`승인됨`],[`거래 일시`,`2026. 9. 23. 19:24`]]}),(0,P.jsx)(I,{title:`청구 정보`,rows:[[`주소`,`서울특별시 중구 세종대로`],[`우편번호`,`04524`],[`연락처`,`010-1234-5678`]]}),(0,P.jsx)(I,{title:`배송 정보`,rows:[[`수령인`,`홍길동`],[`주소`,`서울특별시 마포구 월드컵로`],[`배송 상태`,`배송 준비 중`]]})]})}),(0,P.jsx)(M,{children:(0,P.jsx)(k,{asChild:!0,children:(0,P.jsx)(a,{type:`button`,variant:`secondary`,children:`닫기`})})})]})]})},R={args:{title:`설정`},render:()=>(0,P.jsx)(D,{defaultOpen:!0,children:(0,P.jsx)(A,{title:`설정`,children:(0,P.jsx)(j,{children:`얇은 스크롤바가 적용된 본문입니다.`})})})},z={args:{description:`Controls에서 위치와 진입 모션을 바꿔 보세요.`,motion:`slide`,side:`right`,title:`Drawer 설정`},render:({description:e,motion:t,side:n,title:r})=>(0,P.jsx)(D,{defaultOpen:!0,children:(0,P.jsx)(A,{description:e,motion:t,side:n,title:r,children:(0,P.jsx)(j,{children:`Controls에서 side와 motion을 변경하면 즉시 적용됩니다.`})})},`${n}-${t}`)},B={args:{title:`필터`},render:()=>(0,P.jsx)(D,{defaultOpen:!0,children:(0,P.jsx)(A,{motion:`slide`,side:`left`,title:`필터`,children:(0,P.jsx)(j,{children:`왼쪽에서 슬라이드로 나타나는 Drawer입니다.`})})})},V={args:{title:`설정`},render:()=>(0,P.jsx)(D,{defaultOpen:!0,children:(0,P.jsx)(A,{motion:`fade`,side:`right`,title:`설정`,children:(0,P.jsx)(j,{children:`지정한 위치에서 fade로 나타나는 Drawer입니다.`})})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    description: '선택한 거래의 결제와 배송 정보를 확인합니다.',
    motion: 'slide',
    side: 'right',
    title: '거래 상세'
  },
  render: ({
    description,
    motion,
    side,
    title
  }) => <Drawer>
      <DrawerTrigger asChild>
        <Button type="button">거래 상세 보기</Button>
      </DrawerTrigger>
      <DrawerContent description={description} motion={motion} side={side} title={title}>
        <DrawerBody>
          <Stack gap="6">
            <div>
              <SupportingText>결제 금액</SupportingText>
              <Title order={2}>₩7,890,000</Title>
            </div>
            <DetailRows title="거래 정보" rows={[['고객 ID', '548065'], ['주문 번호', '91362'], ['거래 유형', '판매'], ['상태', '승인됨'], ['거래 일시', '2026. 9. 23. 19:24']]} />
            <DetailRows title="청구 정보" rows={[['주소', '서울특별시 중구 세종대로'], ['우편번호', '04524'], ['연락처', '010-1234-5678']]} />
            <DetailRows title="배송 정보" rows={[['수령인', '홍길동'], ['주소', '서울특별시 마포구 월드컵로'], ['배송 상태', '배송 준비 중']]} />
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button type="button" variant="secondary">
              닫기
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: '설정'
  },
  render: () => <Drawer defaultOpen>
      <DrawerContent title="설정">
        <DrawerBody>얇은 스크롤바가 적용된 본문입니다.</DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    description: 'Controls에서 위치와 진입 모션을 바꿔 보세요.',
    motion: 'slide',
    side: 'right',
    title: 'Drawer 설정'
  },
  render: ({
    description,
    motion,
    side,
    title
  }) => <Drawer defaultOpen key={\`\${side}-\${motion}\`}>
      <DrawerContent description={description} motion={motion} side={side} title={title}>
        <DrawerBody>
          Controls에서 side와 motion을 변경하면 즉시 적용됩니다.
        </DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: '필터'
  },
  render: () => <Drawer defaultOpen>
      <DrawerContent motion="slide" side="left" title="필터">
        <DrawerBody>왼쪽에서 슬라이드로 나타나는 Drawer입니다.</DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: '설정'
  },
  render: () => <Drawer defaultOpen>
      <DrawerContent motion="fade" side="right" title="설정">
        <DrawerBody>지정한 위치에서 fade로 나타나는 Drawer입니다.</DrawerBody>
      </DrawerContent>
    </Drawer>
}`,...V.parameters?.docs?.source}}},H=[`TransactionDetails`,`Open`,`Playground`,`LeftSlide`,`RightFade`]})))()}U();export{B as LeftSlide,R as Open,z as Playground,V as RightFade,L as TransactionDetails,H as __namedExportsOrder,F as default};