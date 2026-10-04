import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Bll5u-Cx.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{o as r,r as i,t as a}from"./dist-BQI90tbb.js";import{n as o,t as ee}from"./aspect-ratio-2z2icXeS.js";import{n as te,t as s}from"./box-CDk1J8Sp.js";import{a as c,g as l,h as u,r as d,t as ne,y as re}from"./dist-C2ydegst.js";var f,ie,p,m,h,g,_,v,ae,oe,y,b,se;function ce(){return(ce=e((()=>{f=t(),ie=new Set([`plain`,`rounded`]),p=new Set([`top-start`,`top-end`,`bottom-start`,`bottom-end`]),m=new Set([`button`,`details`,`embed`,`iframe`,`label`,`object`,`select`,`summary`,`textarea`]),h=e=>{if(!ie.has(e))throw RangeError(`MediaFrame variant must be plain or rounded`)},g=e=>{if(!p.has(e))throw RangeError(`MediaFrameOverlay placement must be top-start, top-end, bottom-start, or bottom-end`)},_=e=>typeof e==`number`?Number.isInteger(e)&&e<0:typeof e==`string`&&/^-[1-9]\d*$/.test(e),v=e=>e!=null&&!_(e),ae=e=>{if(e===!0)return!0;if(typeof e!=`string`)return!1;let t=e.trim().toLowerCase();return t===``||t===`true`||t===`plaintext-only`},oe=(e,t)=>m.has(e)?!0:e===`a`||e===`area`?t.href!=null:e===`audio`||e===`video`?!!t.controls:e===`img`?!!t.useMap:e===`input`?typeof t.type!=`string`||t.type.toLowerCase()!==`hidden`:!1,y=e=>{let t=!1;return f.Children.forEach(e,e=>{if(t||!(0,f.isValidElement)(e))return;let n=e.props;if(e.type===f.Fragment){t=y(n.children);return}typeof e.type==`string`&&(t=oe(e.type,n)||v(n.tabIndex)||ae(n.contentEditable)||y(n.children))}),t},b=e=>{if(y(e))throw TypeError(`MediaFrameOverlay does not allow interactive native descendants`)},se=(e,t)=>{if(e!==!0)throw TypeError(`MediaFrameMedia asChild must be true`);let n;try{n=f.Children.only(t)}catch{throw TypeError(`MediaFrameMedia requires a single non-Fragment React element`)}if(!(0,f.isValidElement)(n)||n.type===f.Fragment)throw TypeError(`MediaFrameMedia requires a single non-Fragment React element`);return n};try{h.displayName=`assertMediaFrameVariant`,h.__docgenInfo={description:``,displayName:`assertMediaFrameVariant`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.validation.ts`,methods:[],props:{},tags:{}}}catch{}try{g.displayName=`assertMediaFrameOverlayPlacement`,g.__docgenInfo={description:``,displayName:`assertMediaFrameOverlayPlacement`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.validation.ts`,methods:[],props:{},tags:{}}}catch{}try{b.displayName=`assertMediaFrameOverlayChildren`,b.__docgenInfo={description:``,displayName:`assertMediaFrameOverlayChildren`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.validation.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var x,le,ue,S,C,w;function T(){return(T=e((()=>{x=e=>[`[overflow:hidden] [position:relative] [width:100%]`,{rounded:`[background-color:var(--media-frame-rounded-background)] [border-radius:var(--media-frame-rounded-radius)]`,plain:``}[String(e??`rounded`)]].filter(Boolean).join(` `),le=`[bottom:0] [display:block] [height:100%] [left:0] [object-fit:cover] [position:absolute] [right:0] [top:0] [width:100%] ![z-index:0]`,ue=`[background-image:linear-gradient(to_top,_var(--media-frame-scrim-color-strong)_0%,_var(--media-frame-scrim-color-mid)_var(--media-frame-scrim-stop-mid),_transparent_100%)] [bottom:0] [left:0] [pointer-events:none] [position:absolute] [right:0] [top:0] [z-index:1]`,S=`[align-items:flex-start] [box-sizing:border-box] [color:var(--media-frame-content-foreground)] [display:flex] [flex-direction:column] [inset:0] [justify-content:center] [min-width:0] [padding-inline:var(--space-6)] [pointer-events:none] [position:absolute] [z-index:2] md:[padding-inline:var(--space-16)]`,C=`[align-items:flex-start] [box-sizing:border-box] [display:flex] [flex-direction:column] [margin:calc(var(--space-1)*-1)] [max-height:100%] [max-width:100%] [min-width:0] [overflow:auto] [padding:var(--space-1)] [pointer-events:auto]`,w=e=>[`[pointer-events:none] [position:absolute] [z-index:2]`,{"top-start":`[inset-block-start:var(--media-frame-overlay-inset)] [inset-inline-start:var(--media-frame-overlay-inset)]`,"top-end":`[inset-block-start:var(--media-frame-overlay-inset)] [inset-inline-end:var(--media-frame-overlay-inset)]`,"bottom-start":`[inset-block-end:var(--media-frame-overlay-inset)] [inset-inline-start:var(--media-frame-overlay-inset)]`,"bottom-end":`[inset-block-end:var(--media-frame-overlay-inset)] [inset-inline-end:var(--media-frame-overlay-inset)]`}[String(e??`top-start`)]].filter(Boolean).join(` `);try{x.displayName=`mediaFrameRootStyle`,x.__docgenInfo={description:``,displayName:`mediaFrameRootStyle`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/variants.ts`,methods:[],props:{},tags:{}}}catch{}try{w.displayName=`mediaFrameOverlayStyle`,w.__docgenInfo={description:``,displayName:`mediaFrameOverlayStyle`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/variants.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var de,E,D,O,k,A,j;function M(){return(M=e((()=>{i(),o(),te(),de=t(),ce(),T(),E=n(),D=({children:e,height:t,ratio:n,ref:i,variant:o=`rounded`,...te})=>{if(h(o),n===void 0==(t===void 0))throw TypeError(`MediaFrame requires exactly one of ratio or height`);if(t!==void 0&&t!==`lg`)throw RangeError(`MediaFrame height must be lg`);let c=r(te),l=[[a(`media-frame`),c.className].filter(Boolean).join(` `),x(o)].filter(Boolean).join(` `);return t===void 0?(0,E.jsx)(ee,{...c,"data-slot":`media-frame`,"data-variant":o,ratio:n,ref:i,className:l,children:e}):(0,E.jsx)(s,{...c,className:`${l} [height:var(--media-frame-height-lg)]`,"data-height":t,"data-slot":`media-frame`,"data-variant":o,ref:i,children:e})},O=({asChild:e,children:t,...n})=>{let i=se(e,t);return i.props.style,(0,de.cloneElement)(i,{...r(n),"data-slot":`media-frame-media`,style:void 0,className:[a(`media-frame`,{part:`media`}),i.props.className,le].filter(Boolean).join(` `)})},k=({ref:e,...t})=>(0,E.jsx)(s,{...r(t),"aria-hidden":`true`,"data-slot":`media-frame-scrim`,ref:e,className:[[a(`media-frame`,{part:`scrim`}),r(t).className].filter(Boolean).join(` `),ue].filter(Boolean).join(` `)}),A=({children:e,placement:t,ref:n,...i})=>(g(t),b(e),(0,E.jsx)(s,{...r(i),"data-placement":t,"data-slot":`media-frame-overlay`,ref:n,className:[[a(`media-frame`,{part:`overlay`}),r(i).className].filter(Boolean).join(` `),w(t)].filter(Boolean).join(` `),children:e})),j=({children:e,ref:t,...n})=>(0,E.jsx)(s,{...r(n),className:[a(`media-frame`,{part:`content`}),S].join(` `),"data-slot":`media-frame-content`,ref:t,children:(0,E.jsx)(`div`,{className:C,"data-slot":`media-frame-content-viewport`,children:e})});try{D.displayName=`MediaFrame`,D.__docgenInfo={description:``,displayName:`MediaFrame`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}},variant:{defaultValue:{value:`rounded`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`MediaFrameVariant | undefined`,value:[{value:`undefined`},{value:`"rounded"`},{value:`"plain"`}]}},ratio:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`},{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ratio`,required:!1,tags:{},type:{name:`number | undefined`}},height:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`},{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`height`,required:!1,tags:{},type:{name:`enum`,raw:`"lg" | undefined`,value:[{value:`undefined`},{value:`"lg"`}]}}},tags:{}}}catch{}try{O.displayName=`MediaFrameMedia`,O.__docgenInfo={description:``,displayName:`MediaFrameMedia`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},asChild:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!0,tags:{},type:{name:`true`}}},tags:{}}}catch{}try{k.displayName=`MediaFrameScrim`,k.__docgenInfo={description:``,displayName:`MediaFrameScrim`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},"aria-hidden":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`aria-hidden`,required:!1,tags:{},type:{name:`undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}}},tags:{}}}catch{}try{A.displayName=`MediaFrameOverlay`,A.__docgenInfo={description:``,displayName:`MediaFrameOverlay`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},"aria-hidden":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`aria-hidden`,required:!1,tags:{},type:{name:`undefined`}},placement:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`placement`,required:!0,tags:{},type:{name:`enum`,raw:`MediaFrameOverlayPlacement`,value:[{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`}]}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}}},tags:{}}}catch{}try{j.displayName=`MediaFrameContent`,j.__docgenInfo={description:``,displayName:`MediaFrameContent`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}}},tags:{}}}catch{}})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,fe;function pe(){return(pe=e((()=>{re(),N=t(),M(),P=n(),F=`data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22 viewBox=%220 0 800 600%22%3E%3Crect width=%22800%22 height=%22600%22 fill=%22%2364748b%22/%3E%3Cpath d=%22M0 470 190 290l115 105 155-185 340 300v90H0Z%22 fill=%22%2394a3b8%22/%3E%3Ccircle cx=%22635%22 cy=%22135%22 r=%2270%22 fill=%22%23f8fafc%22/%3E%3C/svg%3E`,I=[`top-start`,`top-end`,`bottom-start`,`bottom-end`],L=class extends N.Component{state={rejected:!1};static getDerivedStateFromError(){return{rejected:!0}}render(){return this.state.rejected?(0,P.jsx)(`output`,{"data-testid":this.props.testId,children:`Rejected`}):this.props.children}},R=({testId:e})=>(0,P.jsx)(O,{asChild:!0,"data-testid":e,children:(0,P.jsx)(`img`,{alt:`Abstract landscape illustration`,src:F})}),z=({direction:e})=>(0,P.jsx)(l,{dir:e,className:`[width:min(100%,_20rem)]`,children:(0,P.jsxs)(D,{"data-testid":`${e}-placements-frame`,ratio:4/3,children:[(0,P.jsx)(R,{testId:`${e}-placements-media`}),I.map(t=>(0,P.jsx)(A,{"data-testid":`${e}-${t}`,placement:t,children:(0,P.jsx)(ne,{tone:`info`,children:t})},t))]})}),B={title:`Primitives/Media/MediaFrame`,component:D,args:{children:null,ratio:4/3},tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Product-independent media anatomy for ratio, fill/crop, clipping, scrim stacking, and logical display-only overlay placement.`}}}},V={render:()=>(0,P.jsxs)(l,{direction:`row`,gap:`4`,wrap:!0,children:[(0,P.jsx)(l,{className:`[width:min(100%,_18rem)]`,children:(0,P.jsx)(D,{"data-testid":`rounded-landscape-frame`,ratio:4/3,children:(0,P.jsx)(R,{testId:`rounded-landscape-media`})})}),(0,P.jsx)(l,{className:`[width:min(100%,_15rem)]`,children:(0,P.jsx)(D,{"data-testid":`rounded-portrait-frame`,ratio:5/6,children:(0,P.jsx)(R,{testId:`rounded-portrait-media`})})})]})},H={render:()=>(0,P.jsxs)(D,{"data-testid":`fixed-height-frame`,height:`lg`,children:[(0,P.jsx)(R,{testId:`fixed-height-media`}),(0,P.jsx)(k,{}),(0,P.jsx)(A,{placement:`bottom-start`,children:(0,P.jsx)(d,{tone:`inverse`,children:`Featured landscape`})})]})},U=()=>{let[e,t]=(0,N.useState)(!1);return(0,P.jsxs)(l,{gap:`3`,children:[(0,P.jsx)(c,{type:`button`,children:`Before media`}),(0,P.jsxs)(D,{"data-testid":`interactive-content-frame`,height:`lg`,children:[(0,P.jsx)(R,{testId:`interactive-content-media`}),(0,P.jsx)(k,{}),(0,P.jsx)(j,{"data-testid":`interactive-content-layer`,children:(0,P.jsxs)(l,{align:`start`,gap:`2`,children:[(0,P.jsx)(d,{tone:`inherit`,children:`Featured stores`}),(0,P.jsx)(u,{href:`#interactive-content-target`,tone:`inherit`,variant:`standalone`,children:`View stores`}),(0,P.jsx)(c,{onClick:()=>t(!0),type:`button`,children:`Open dialog`})]})})]}),(0,P.jsx)(`output`,{role:`status`,children:e?`Opened`:`Ready`}),(0,P.jsx)(c,{type:`button`,children:`After media`})]})},W={render:()=>(0,P.jsx)(U,{})},G={render:()=>(0,P.jsxs)(D,{"data-testid":`long-interactive-frame`,height:`lg`,children:[(0,P.jsx)(R,{testId:`long-interactive-media`}),(0,P.jsx)(k,{}),(0,P.jsx)(j,{"data-testid":`long-interactive-content`,children:(0,P.jsxs)(l,{align:`start`,gap:`2`,children:[(0,P.jsx)(d,{tone:`inherit`,children:`Featured stores`}),(0,P.jsx)(`p`,{children:`Explore this month’s featured stores and their latest offers. Find a nearby location and check the details before you visit.`}),(0,P.jsx)(u,{href:`#long-interactive-target`,tone:`inherit`,variant:`standalone`,children:`View stores`}),(0,P.jsx)(c,{type:`button`,children:`Open details`})]})})]})},K={render:()=>(0,P.jsx)(l,{className:`[width:min(100%,_20rem)]`,children:(0,P.jsx)(D,{"data-testid":`plain-frame`,ratio:4/3,variant:`plain`,children:(0,P.jsx)(R,{testId:`plain-media`})})})},q={render:()=>(0,P.jsx)(z,{direction:`ltr`})},J={render:()=>(0,P.jsx)(l,{className:`[width:min(100%,_20rem)]`,children:(0,P.jsxs)(D,{"data-testid":`scrim-frame`,ratio:4/3,children:[(0,P.jsx)(R,{testId:`scrim-media`}),(0,P.jsx)(k,{"data-testid":`scrim-layer`}),(0,P.jsx)(A,{"data-testid":`scrim-overlay`,placement:`bottom-start`,children:(0,P.jsx)(d,{tone:`inverse`,children:`Descriptive label`})})]})})},Y={render:()=>(0,P.jsx)(l,{className:`[width:min(100%,_20rem)]`,children:(0,P.jsxs)(D,{"data-testid":`stacking-frame`,ratio:1,children:[(0,P.jsx)(O,{asChild:!0,"data-testid":`stacking-media`,children:(0,P.jsx)(`div`,{className:`[z-index:99]`,children:(0,P.jsx)(`span`,{"data-testid":`stacking-media-child`,className:`[height:6rem] [left:0.5rem] [position:absolute] [top:0.5rem] [width:6rem] [z-index:999]`})})}),(0,P.jsx)(k,{"data-testid":`stacking-scrim`}),(0,P.jsx)(A,{"data-testid":`stacking-overlay`,placement:`top-start`,children:(0,P.jsx)(`span`,{"data-testid":`stacking-overlay-content`,className:`[display:block] [height:6rem] [width:6rem]`,children:`Top layer`})})]})})},X={render:()=>(0,P.jsx)(z,{direction:`rtl`})},Z={parameters:{layout:`fullscreen`},render:()=>(0,P.jsx)(l,{padding:`2`,className:`[width:min(100%,_20rem)]`,children:(0,P.jsxs)(D,{"data-testid":`long-content-frame`,ratio:4/3,children:[(0,P.jsx)(R,{testId:`long-content-media`}),(0,P.jsx)(k,{"data-testid":`long-content-scrim`}),(0,P.jsx)(A,{"data-testid":`long-content-overlay`,placement:`bottom-start`,children:(0,P.jsx)(d,{tone:`inverse`,children:`ExtremelyLongGenericMediaDescriptionWithoutAnyProductSpecificMeaningOrPolicy`})})]})})},Q={render:()=>(0,P.jsxs)(l,{align:`start`,gap:`3`,children:[(0,P.jsx)(c,{type:`button`,children:`Before media`}),(0,P.jsx)(u,{"aria-label":`Open media frame`,href:`#media-frame-target`,className:`[width:min(100%,_20rem)]`,variant:`standalone`,children:(0,P.jsxs)(D,{"data-testid":`external-link-frame`,ratio:4/3,children:[(0,P.jsx)(R,{testId:`external-link-media`}),(0,P.jsx)(k,{"data-testid":`external-link-scrim`}),(0,P.jsx)(A,{"data-testid":`external-link-overlay`,placement:`bottom-start`,children:(0,P.jsx)(d,{tone:`inverse`,children:`Display-only description`})})]})}),(0,P.jsx)(c,{type:`button`,children:`After media`})]})},$={parameters:{docs:{disable:!0}},render:()=>(0,P.jsxs)(l,{gap:`3`,children:[(0,P.jsx)(L,{testId:`integer-prefix-rejection`,children:(0,P.jsx)(A,{placement:`top-start`,children:(0,P.jsx)(`span`,{"data-testid":`integer-prefix-descendant`,tabIndex:`1foo`,children:`Integer-prefix focus target`})})}),(0,P.jsx)(L,{testId:`negative-decimal-rejection`,children:(0,P.jsx)(A,{placement:`top-start`,children:(0,P.jsx)(`span`,{"data-testid":`negative-decimal-descendant`,tabIndex:`-0.5`,children:`Decimal focus target`})})}),(0,P.jsx)(A,{placement:`top-start`,children:(0,P.jsx)(`span`,{"data-testid":`negative-integer-descendant`,tabIndex:`-1`,children:`Display-only text`})})]})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" gap="4" wrap>
      <Stack className={'[width:min(100%,_18rem)]'}>
        <MediaFrame data-testid="rounded-landscape-frame" ratio={4 / 3}>
          <FrameImage testId="rounded-landscape-media" />
        </MediaFrame>
      </Stack>
      <Stack className={'[width:min(100%,_15rem)]'}>
        <MediaFrame data-testid="rounded-portrait-frame" ratio={5 / 6}>
          <FrameImage testId="rounded-portrait-media" />
        </MediaFrame>
      </Stack>
    </Stack>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <MediaFrame data-testid="fixed-height-frame" height="lg">
      <FrameImage testId="fixed-height-media" />
      <MediaFrameScrim />
      <MediaFrameOverlay placement="bottom-start">
        <BodyBold tone="inverse">Featured landscape</BodyBold>
      </MediaFrameOverlay>
    </MediaFrame>
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveContentDemo />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <MediaFrame data-testid="long-interactive-frame" height="lg">
      <FrameImage testId="long-interactive-media" />
      <MediaFrameScrim />
      <MediaFrameContent data-testid="long-interactive-content">
        <Stack align="start" gap="2">
          <BodyBold tone="inherit">Featured stores</BodyBold>
          <p>
            Explore this month’s featured stores and their latest offers. Find a
            nearby location and check the details before you visit.
          </p>
          <Link href="#long-interactive-target" tone="inherit" variant="standalone">
            View stores
          </Link>
          <Button type="button">Open details</Button>
        </Stack>
      </MediaFrameContent>
    </MediaFrame>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Stack className={'[width:min(100%,_20rem)]'}>
      <MediaFrame data-testid="plain-frame" ratio={4 / 3} variant="plain">
        <FrameImage testId="plain-media" />
      </MediaFrame>
    </Stack>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <PlacementFrame direction="ltr" />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Stack className={'[width:min(100%,_20rem)]'}>
      <MediaFrame data-testid="scrim-frame" ratio={4 / 3}>
        <FrameImage testId="scrim-media" />
        <MediaFrameScrim data-testid="scrim-layer" />
        <MediaFrameOverlay data-testid="scrim-overlay" placement="bottom-start">
          <BodyBold tone="inverse">Descriptive label</BodyBold>
        </MediaFrameOverlay>
      </MediaFrame>
    </Stack>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack className={'[width:min(100%,_20rem)]'}>
      <MediaFrame data-testid="stacking-frame" ratio={1}>
        <MediaFrameMedia asChild data-testid="stacking-media">
          <div className={'[z-index:99]'}>
            <span data-testid="stacking-media-child" className={'[height:6rem] [left:0.5rem] [position:absolute] [top:0.5rem] [width:6rem] [z-index:999]'} />
          </div>
        </MediaFrameMedia>
        <MediaFrameScrim data-testid="stacking-scrim" />
        <MediaFrameOverlay data-testid="stacking-overlay" placement="top-start">
          <span data-testid="stacking-overlay-content" className={'[display:block] [height:6rem] [width:6rem]'}>
            Top layer
          </span>
        </MediaFrameOverlay>
      </MediaFrame>
    </Stack>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <PlacementFrame direction="rtl" />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <Stack padding="2" className={'[width:min(100%,_20rem)]'}>
      <MediaFrame data-testid="long-content-frame" ratio={4 / 3}>
        <FrameImage testId="long-content-media" />
        <MediaFrameScrim data-testid="long-content-scrim" />
        <MediaFrameOverlay data-testid="long-content-overlay" placement="bottom-start">
          <BodyBold tone="inverse">
            ExtremelyLongGenericMediaDescriptionWithoutAnyProductSpecificMeaningOrPolicy
          </BodyBold>
        </MediaFrameOverlay>
      </MediaFrame>
    </Stack>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <Stack align="start" gap="3">
      <Button type="button">Before media</Button>
      <Link aria-label="Open media frame" href="#media-frame-target" className={'[width:min(100%,_20rem)]'} variant="standalone">
        <MediaFrame data-testid="external-link-frame" ratio={4 / 3}>
          <FrameImage testId="external-link-media" />
          <MediaFrameScrim data-testid="external-link-scrim" />
          <MediaFrameOverlay data-testid="external-link-overlay" placement="bottom-start">
            <BodyBold tone="inverse">Display-only description</BodyBold>
          </MediaFrameOverlay>
        </MediaFrame>
      </Link>
      <Button type="button">After media</Button>
    </Stack>
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      disable: true
    }
  },
  render: () => <Stack gap="3">
      <OverlayValidationBoundary testId="integer-prefix-rejection">
        <MediaFrameOverlay placement="top-start">
          <span data-testid="integer-prefix-descendant" tabIndex={'1foo' as unknown as number}>
            Integer-prefix focus target
          </span>
        </MediaFrameOverlay>
      </OverlayValidationBoundary>
      <OverlayValidationBoundary testId="negative-decimal-rejection">
        <MediaFrameOverlay placement="top-start">
          <span data-testid="negative-decimal-descendant" tabIndex={'-0.5' as unknown as number}>
            Decimal focus target
          </span>
        </MediaFrameOverlay>
      </OverlayValidationBoundary>
      <MediaFrameOverlay placement="top-start">
        <span data-testid="negative-integer-descendant" tabIndex={'-1' as unknown as number}>
          Display-only text
        </span>
      </MediaFrameOverlay>
    </Stack>
}`,...$.parameters?.docs?.source}}},fe=[`Rounded`,`FixedHeight`,`InteractiveContent`,`LongInteractiveContent`,`Plain`,`OverlayPlacements`,`Scrim`,`StackingBoundary`,`RTL`,`LongContent`,`ExternalLink`,`TabIndexValidation`]})))()}pe();export{Q as ExternalLink,H as FixedHeight,W as InteractiveContent,Z as LongContent,G as LongInteractiveContent,q as OverlayPlacements,K as Plain,X as RTL,V as Rounded,J as Scrim,Y as StackingBoundary,$ as TabIndexValidation,fe as __namedExportsOrder,B as default};