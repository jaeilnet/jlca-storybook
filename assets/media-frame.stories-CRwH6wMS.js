import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BphVQhSx.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{o as r,r as i,t as a}from"./dist-BQI90tbb.js";import{n as o,t as ee}from"./aspect-ratio-CbvEGcEh.js";import{n as te,t as s}from"./box-CWORcnc3.js";import{a as c,g as l,h as ne,r as u,t as re,y as ie}from"./dist-B_6p03tp.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{d=t(),f=new Set([`plain`,`rounded`]),p=new Set([`top-start`,`top-end`,`bottom-start`,`bottom-end`]),m=new Set([`button`,`details`,`embed`,`iframe`,`label`,`object`,`select`,`summary`,`textarea`]),h=e=>{if(!f.has(e))throw RangeError(`MediaFrame variant must be plain or rounded`)},g=e=>{if(!p.has(e))throw RangeError(`MediaFrameOverlay placement must be top-start, top-end, bottom-start, or bottom-end`)},_=e=>typeof e==`number`?Number.isInteger(e)&&e<0:typeof e==`string`&&/^-[1-9]\d*$/.test(e),v=e=>e!=null&&!_(e),y=e=>{if(e===!0)return!0;if(typeof e!=`string`)return!1;let t=e.trim().toLowerCase();return t===``||t===`true`||t===`plaintext-only`},b=(e,t)=>m.has(e)?!0:e===`a`||e===`area`?t.href!=null:e===`audio`||e===`video`?!!t.controls:e===`img`?!!t.useMap:e===`input`?typeof t.type!=`string`||t.type.toLowerCase()!==`hidden`:!1,x=e=>{let t=!1;return d.Children.forEach(e,e=>{if(t||!(0,d.isValidElement)(e))return;let n=e.props;if(e.type===d.Fragment){t=x(n.children);return}typeof e.type==`string`&&(t=b(e.type,n)||v(n.tabIndex)||y(n.contentEditable)||x(n.children))}),t},S=e=>{if(x(e))throw TypeError(`MediaFrameOverlay does not allow interactive native descendants`)},C=(e,t)=>{if(e!==!0)throw TypeError(`MediaFrameMedia asChild must be true`);let n;try{n=d.Children.only(t)}catch{throw TypeError(`MediaFrameMedia requires a single non-Fragment React element`)}if(!(0,d.isValidElement)(n)||n.type===d.Fragment)throw TypeError(`MediaFrameMedia requires a single non-Fragment React element`);return n};try{h.displayName=`assertMediaFrameVariant`,h.__docgenInfo={description:``,displayName:`assertMediaFrameVariant`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.validation.ts`,methods:[],props:{},tags:{}}}catch{}try{g.displayName=`assertMediaFrameOverlayPlacement`,g.__docgenInfo={description:``,displayName:`assertMediaFrameOverlayPlacement`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.validation.ts`,methods:[],props:{},tags:{}}}catch{}try{S.displayName=`assertMediaFrameOverlayChildren`,S.__docgenInfo={description:``,displayName:`assertMediaFrameOverlayChildren`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.validation.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D,O;function k(){return(k=e((()=>{T=e=>[`[overflow:hidden] [position:relative] [width:100%]`,{rounded:`[background-color:var(--media-frame-rounded-background)] [border-radius:var(--media-frame-rounded-radius)]`,plain:``}[String(e??`rounded`)]].filter(Boolean).join(` `),E=`[bottom:0] [display:block] [height:100%] [left:0] [object-fit:cover] [position:absolute] [right:0] [top:0] [width:100%] ![z-index:0]`,D=`[background-image:linear-gradient(to_top,_var(--media-frame-scrim-color-strong)_0%,_var(--media-frame-scrim-color-mid)_var(--media-frame-scrim-stop-mid),_transparent_100%)] [bottom:0] [left:0] [pointer-events:none] [position:absolute] [right:0] [top:0] [z-index:1]`,O=e=>[`[pointer-events:none] [position:absolute] [z-index:2]`,{"top-start":`[inset-block-start:var(--media-frame-overlay-inset)] [inset-inline-start:var(--media-frame-overlay-inset)]`,"top-end":`[inset-block-start:var(--media-frame-overlay-inset)] [inset-inline-end:var(--media-frame-overlay-inset)]`,"bottom-start":`[inset-block-end:var(--media-frame-overlay-inset)] [inset-inline-start:var(--media-frame-overlay-inset)]`,"bottom-end":`[inset-block-end:var(--media-frame-overlay-inset)] [inset-inline-end:var(--media-frame-overlay-inset)]`}[String(e??`top-start`)]].filter(Boolean).join(` `);try{T.displayName=`mediaFrameRootStyle`,T.__docgenInfo={description:``,displayName:`mediaFrameRootStyle`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/variants.ts`,methods:[],props:{},tags:{}}}catch{}try{O.displayName=`mediaFrameOverlayStyle`,O.__docgenInfo={description:``,displayName:`mediaFrameOverlayStyle`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/variants.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var A,j,M,N,P,F;function I(){return(I=e((()=>{i(),o(),te(),A=t(),w(),k(),j=n(),M=({children:e,ratio:t,ref:n,variant:i=`rounded`,...o})=>(h(i),(0,j.jsx)(ee,{...r(o),"data-slot":`media-frame`,"data-variant":i,ratio:t,ref:n,className:[[a(`media-frame`),r(o).className].filter(Boolean).join(` `),T(i)].filter(Boolean).join(` `),children:e})),N=({asChild:e,children:t,...n})=>{let i=C(e,t);return i.props.style,(0,A.cloneElement)(i,{...r(n),"data-slot":`media-frame-media`,style:void 0,className:[a(`media-frame`,{part:`media`}),i.props.className,E].filter(Boolean).join(` `)})},P=({ref:e,...t})=>(0,j.jsx)(s,{...r(t),"aria-hidden":`true`,"data-slot":`media-frame-scrim`,ref:e,className:[[a(`media-frame`,{part:`scrim`}),r(t).className].filter(Boolean).join(` `),D].filter(Boolean).join(` `)}),F=({children:e,placement:t,ref:n,...i})=>(g(t),S(e),(0,j.jsx)(s,{...r(i),"data-placement":t,"data-slot":`media-frame-overlay`,ref:n,className:[[a(`media-frame`,{part:`overlay`}),r(i).className].filter(Boolean).join(` `),O(t)].filter(Boolean).join(` `),children:e}));try{M.displayName=`MediaFrame`,M.__docgenInfo={description:``,displayName:`MediaFrame`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},ratio:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ratio`,required:!0,tags:{},type:{name:`number`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}},variant:{defaultValue:{value:`rounded`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`MediaFrameVariant | undefined`,value:[{value:`undefined`},{value:`"rounded"`},{value:`"plain"`}]}}},tags:{}}}catch{}try{N.displayName=`MediaFrameMedia`,N.__docgenInfo={description:``,displayName:`MediaFrameMedia`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},asChild:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`asChild`,required:!0,tags:{},type:{name:`true`}}},tags:{}}}catch{}try{P.displayName=`MediaFrameScrim`,P.__docgenInfo={description:``,displayName:`MediaFrameScrim`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},"aria-hidden":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`aria-hidden`,required:!1,tags:{},type:{name:`undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}}},tags:{}}}catch{}try{F.displayName=`MediaFrameOverlay`,F.__docgenInfo={description:``,displayName:`MediaFrameOverlay`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},"aria-hidden":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`aria-hidden`,required:!1,tags:{},type:{name:`undefined`}},placement:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`placement`,required:!0,tags:{},type:{name:`enum`,raw:`MediaFrameOverlayPlacement`,value:[{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`}]}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/media/media-frame/media-frame.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}}},tags:{}}}catch{}})))()}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ae;function oe(){return(oe=e((()=>{ie(),L=t(),I(),R=n(),z=`data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22 viewBox=%220 0 800 600%22%3E%3Crect width=%22800%22 height=%22600%22 fill=%22%2364748b%22/%3E%3Cpath d=%22M0 470 190 290l115 105 155-185 340 300v90H0Z%22 fill=%22%2394a3b8%22/%3E%3Ccircle cx=%22635%22 cy=%22135%22 r=%2270%22 fill=%22%23f8fafc%22/%3E%3C/svg%3E`,B=[`top-start`,`top-end`,`bottom-start`,`bottom-end`],V=class extends L.Component{state={rejected:!1};static getDerivedStateFromError(){return{rejected:!0}}render(){return this.state.rejected?(0,R.jsx)(`output`,{"data-testid":this.props.testId,children:`Rejected`}):this.props.children}},H=({testId:e})=>(0,R.jsx)(N,{asChild:!0,"data-testid":e,children:(0,R.jsx)(`img`,{alt:`Abstract landscape illustration`,src:z})}),U=({direction:e})=>(0,R.jsx)(l,{dir:e,className:`[width:min(100%,_20rem)]`,children:(0,R.jsxs)(M,{"data-testid":`${e}-placements-frame`,ratio:4/3,children:[(0,R.jsx)(H,{testId:`${e}-placements-media`}),B.map(t=>(0,R.jsx)(F,{"data-testid":`${e}-${t}`,placement:t,children:(0,R.jsx)(re,{tone:`info`,children:t})},t))]})}),W={title:`Primitives/Media/MediaFrame`,component:M,args:{children:null,ratio:4/3},tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`Product-independent media anatomy for ratio, fill/crop, clipping, scrim stacking, and logical display-only overlay placement.`}}}},G={render:()=>(0,R.jsxs)(l,{direction:`row`,gap:`4`,wrap:!0,children:[(0,R.jsx)(l,{className:`[width:min(100%,_18rem)]`,children:(0,R.jsx)(M,{"data-testid":`rounded-landscape-frame`,ratio:4/3,children:(0,R.jsx)(H,{testId:`rounded-landscape-media`})})}),(0,R.jsx)(l,{className:`[width:min(100%,_15rem)]`,children:(0,R.jsx)(M,{"data-testid":`rounded-portrait-frame`,ratio:5/6,children:(0,R.jsx)(H,{testId:`rounded-portrait-media`})})})]})},K={render:()=>(0,R.jsx)(l,{className:`[width:min(100%,_20rem)]`,children:(0,R.jsx)(M,{"data-testid":`plain-frame`,ratio:4/3,variant:`plain`,children:(0,R.jsx)(H,{testId:`plain-media`})})})},q={render:()=>(0,R.jsx)(U,{direction:`ltr`})},J={render:()=>(0,R.jsx)(l,{className:`[width:min(100%,_20rem)]`,children:(0,R.jsxs)(M,{"data-testid":`scrim-frame`,ratio:4/3,children:[(0,R.jsx)(H,{testId:`scrim-media`}),(0,R.jsx)(P,{"data-testid":`scrim-layer`}),(0,R.jsx)(F,{"data-testid":`scrim-overlay`,placement:`bottom-start`,children:(0,R.jsx)(u,{tone:`inverse`,children:`Descriptive label`})})]})})},Y={render:()=>(0,R.jsx)(l,{className:`[width:min(100%,_20rem)]`,children:(0,R.jsxs)(M,{"data-testid":`stacking-frame`,ratio:1,children:[(0,R.jsx)(N,{asChild:!0,"data-testid":`stacking-media`,children:(0,R.jsx)(`div`,{className:`[z-index:99]`,children:(0,R.jsx)(`span`,{"data-testid":`stacking-media-child`,className:`[height:6rem] [left:0.5rem] [position:absolute] [top:0.5rem] [width:6rem] [z-index:999]`})})}),(0,R.jsx)(P,{"data-testid":`stacking-scrim`}),(0,R.jsx)(F,{"data-testid":`stacking-overlay`,placement:`top-start`,children:(0,R.jsx)(`span`,{"data-testid":`stacking-overlay-content`,className:`[display:block] [height:6rem] [width:6rem]`,children:`Top layer`})})]})})},X={render:()=>(0,R.jsx)(U,{direction:`rtl`})},Z={parameters:{layout:`fullscreen`},render:()=>(0,R.jsx)(l,{padding:`2`,className:`[width:min(100%,_20rem)]`,children:(0,R.jsxs)(M,{"data-testid":`long-content-frame`,ratio:4/3,children:[(0,R.jsx)(H,{testId:`long-content-media`}),(0,R.jsx)(P,{"data-testid":`long-content-scrim`}),(0,R.jsx)(F,{"data-testid":`long-content-overlay`,placement:`bottom-start`,children:(0,R.jsx)(u,{tone:`inverse`,children:`ExtremelyLongGenericMediaDescriptionWithoutAnyProductSpecificMeaningOrPolicy`})})]})})},Q={render:()=>(0,R.jsxs)(l,{align:`start`,gap:`3`,children:[(0,R.jsx)(c,{type:`button`,children:`Before media`}),(0,R.jsx)(ne,{"aria-label":`Open media frame`,href:`#media-frame-target`,className:`[width:min(100%,_20rem)]`,variant:`standalone`,children:(0,R.jsxs)(M,{"data-testid":`external-link-frame`,ratio:4/3,children:[(0,R.jsx)(H,{testId:`external-link-media`}),(0,R.jsx)(P,{"data-testid":`external-link-scrim`}),(0,R.jsx)(F,{"data-testid":`external-link-overlay`,placement:`bottom-start`,children:(0,R.jsx)(u,{tone:`inverse`,children:`Display-only description`})})]})}),(0,R.jsx)(c,{type:`button`,children:`After media`})]})},$={parameters:{docs:{disable:!0}},render:()=>(0,R.jsxs)(l,{gap:`3`,children:[(0,R.jsx)(V,{testId:`integer-prefix-rejection`,children:(0,R.jsx)(F,{placement:`top-start`,children:(0,R.jsx)(`span`,{"data-testid":`integer-prefix-descendant`,tabIndex:`1foo`,children:`Integer-prefix focus target`})})}),(0,R.jsx)(V,{testId:`negative-decimal-rejection`,children:(0,R.jsx)(F,{placement:`top-start`,children:(0,R.jsx)(`span`,{"data-testid":`negative-decimal-descendant`,tabIndex:`-0.5`,children:`Decimal focus target`})})}),(0,R.jsx)(F,{placement:`top-start`,children:(0,R.jsx)(`span`,{"data-testid":`negative-integer-descendant`,tabIndex:`-1`,children:`Display-only text`})})]})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},ae=[`Rounded`,`Plain`,`OverlayPlacements`,`Scrim`,`StackingBoundary`,`RTL`,`LongContent`,`ExternalLink`,`TabIndexValidation`]})))()}oe();export{Q as ExternalLink,Z as LongContent,q as OverlayPlacements,K as Plain,X as RTL,G as Rounded,J as Scrim,Y as StackingBoundary,$ as TabIndexValidation,ae as __namedExportsOrder,W as default};