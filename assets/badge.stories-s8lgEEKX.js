import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DvJtJGyv.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./bundle-mjs-C6fYOv-m.js";import{n as a,t as o}from"./button-Cnx8aNwG.js";var s,c,l,u,d,f;function p(){return(p=e((()=>{i(),s={xs:{fontSize:`var(--typography-text-2xs-font-size)`,lineHeight:`var(--typography-text-2xs-line-height)`,gap:`var(--space-0-5)`,paddingBlock:`var(--space-0-5)`,paddingInline:`var(--space-1)`,icon:`var(--space-2-5)`},sm:{fontSize:`var(--typography-text-xs-font-size)`,lineHeight:`var(--typography-text-xs-line-height)`,gap:`var(--space-1)`,paddingBlock:`var(--space-0-5)`,paddingInline:`var(--space-1-5)`,icon:`var(--space-3)`}},c={neutral:[`var(--color-surface-sunken)`,`var(--color-content-secondary)`],info:[`var(--color-feedback-info-container)`,`var(--color-feedback-info-container-foreground)`],success:[`var(--color-feedback-success-container)`,`var(--color-feedback-success-container-foreground)`],warning:[`var(--color-feedback-warning-container)`,`var(--color-feedback-warning-container-foreground)`],danger:[`var(--color-feedback-danger-container)`,`var(--color-feedback-danger-container-foreground)`]},l=e=>r(e,`forced-colors:!border-[CanvasText] forced-colors:!bg-[Canvas] forced-colors:!text-[CanvasText]`),u=(e,t,n,r)=>({...r,alignItems:`center`,backgroundColor:c[n][0],border:`0.0625rem solid transparent`,borderRadius:`var(--radius-${t===`pill`?`full`:`md`})`,color:c[n][1],display:`inline-flex`,flexShrink:0,fontFamily:`var(--font-family-sans)`,fontSize:s[e].fontSize,fontStyle:`normal`,fontWeight:`var(--font-weight-medium)`,gap:s[e].gap,letterSpacing:`var(--letter-spacing-default)`,lineHeight:s[e].lineHeight,maxWidth:`100%`,minWidth:0,paddingBlock:s[e].paddingBlock,paddingInline:s[e].paddingInline,verticalAlign:`middle`,whiteSpace:`nowrap`}),d=e=>({display:`inline-flex`,flexShrink:0,height:s[e].icon,width:s[e].icon}),f={minWidth:0,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`};try{l.displayName=`badgeClassName`,l.__docgenInfo={description:``,displayName:`badgeClassName`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/badge/badge.styles.ts`,methods:[],props:{},tags:{}}}catch{}try{d.displayName=`badgeIconStyle`,d.__docgenInfo={description:``,displayName:`badgeIconStyle`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/badge/badge.styles.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var m,h,g,_;function v(){return(v=e((()=>{m=t(),p(),h=n(),g=new Set([`as`,`asChild`,`dangerouslySetInnerHTML`,`role`,`tabIndex`,`contentEditable`,`autoFocus`,`aria-hidden`,`aria-live`,`aria-busy`,`aria-label`,`aria-labelledby`]),_=({children:e,className:t,icon:n,shape:r=`rounded`,size:i=`sm`,style:a,tone:o=`neutral`,ref:s,...c})=>{if(typeof e==`string`&&e.trim().length===0||typeof e==`number`&&!Number.isFinite(e))throw RangeError(`Badge children must be non-empty text or a finite number`);let p={};for(let[e,t]of Object.entries(c))!g.has(e)&&!/^on[A-Z]/.test(e)&&(p[e]=t);return(0,h.jsxs)(`span`,{...p,className:l(t),"data-shape":r,"data-size":i,"data-slot":`badge`,"data-tone":o,ref:s,style:u(i,r,o,a),children:[n?(0,h.jsx)(`span`,{"aria-hidden":`true`,"data-slot":`badge-icon`,style:d(i),children:(0,m.cloneElement)(n,{style:{...n.props.style,display:`block`,height:`100%`,width:`100%`}})}):null,(0,h.jsx)(`span`,{"data-slot":`badge-label`,style:f,children:e})]})};try{_.displayName=`Badge`,_.__docgenInfo={description:``,displayName:`Badge`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/badge/badge.tsx`,methods:[],props:{as:{defaultValue:null,description:``,name:`as`,required:!1,tags:{},type:{name:`undefined`}},autoFocus:{defaultValue:null,description:``,name:`autoFocus`,required:!1,tags:{},type:{name:`undefined`}},contentEditable:{defaultValue:null,description:``,name:`contentEditable`,required:!1,tags:{},type:{name:`undefined`}},tabIndex:{defaultValue:null,description:``,name:`tabIndex`,required:!1,tags:{},type:{name:`undefined`}},role:{defaultValue:null,description:``,name:`role`,required:!1,tags:{},type:{name:`undefined`}},"aria-busy":{defaultValue:null,description:``,name:`aria-busy`,required:!1,tags:{},type:{name:`undefined`}},"aria-hidden":{defaultValue:null,description:``,name:`aria-hidden`,required:!1,tags:{},type:{name:`undefined`}},"aria-label":{defaultValue:null,description:``,name:`aria-label`,required:!1,tags:{},type:{name:`undefined`}},"aria-labelledby":{defaultValue:null,description:``,name:`aria-labelledby`,required:!1,tags:{},type:{name:`undefined`}},"aria-live":{defaultValue:null,description:``,name:`aria-live`,required:!1,tags:{},type:{name:`undefined`}},asChild:{defaultValue:null,description:``,name:`asChild`,required:!1,tags:{},type:{name:`undefined`}},icon:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/badge/badge.types.ts`,name:`TypeLiteral`}],description:``,name:`icon`,required:!1,tags:{},type:{name:`ReactElement<SVGProps<SVGSVGElement>, string | JSXElementConstructor<any>> | undefined`}},shape:{defaultValue:{value:`rounded`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/badge/badge.types.ts`,name:`TypeLiteral`}],description:``,name:`shape`,required:!1,tags:{},type:{name:`enum`,raw:`BadgeShape | undefined`,value:[{value:`undefined`},{value:`"pill"`},{value:`"rounded"`}]}},size:{defaultValue:{value:`sm`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/badge/badge.types.ts`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`BadgeSize | undefined`,value:[{value:`undefined`},{value:`"xs"`},{value:`"sm"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/badge/badge.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`BadgeStyle | undefined`}},tone:{defaultValue:{value:`neutral`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/badge/badge.types.ts`,name:`TypeLiteral`}],description:``,name:`tone`,required:!1,tags:{},type:{name:`enum`,raw:`BadgeTone | undefined`,value:[{value:`undefined`},{value:`"danger"`},{value:`"success"`},{value:`"info"`},{value:`"neutral"`},{value:`"warning"`}]}}},tags:{}}}catch{}})))()}var y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{v(),a(),y=n(),b={title:`Primitives/Typography/Badge`,component:_,parameters:{layout:`padded`},args:{children:`상태`},tags:[`autodocs`]},x=[[`neutral`,`일반`],[`info`,`안내`],[`success`,`완료`],[`warning`,`주의`],[`danger`,`오류`]],S=e=>(0,y.jsx)(`svg`,{viewBox:`0 0 16 16`,...e,children:(0,y.jsx)(`path`,{d:`M5 2h6v2h2v2c0 2-1.5 3.5-3.5 3.9V12H12v2H4v-2h2.5V9.9C4.5 9.5 3 8 3 6V4h2V2Zm0 4c0 .8.4 1.4 1.1 1.8L5.8 4H5v2Zm5 1.8c.6-.4 1-1 1-1.8V4h-.8L10 7.8Z`,fill:`currentColor`})}),C={render:()=>(0,y.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:x.map(([e,t])=>(0,y.jsx)(_,{"data-testid":`tone-${e}`,tone:e,children:t},e))})},w={render:()=>(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,y.jsx)(_,{shape:`rounded`,size:`xs`,children:`작은 모서리`}),(0,y.jsx)(_,{shape:`pill`,size:`xs`,children:`작은 필`}),(0,y.jsx)(_,{shape:`rounded`,size:`sm`,children:`기본 모서리`}),(0,y.jsx)(_,{shape:`pill`,size:`sm`,children:`기본 필`})]})},T={render:()=>(0,y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,y.jsx)(_,{"data-testid":`icon-badge`,icon:(0,y.jsx)(S,{}),tone:`warning`,children:`1등`}),(0,y.jsx)(_,{"data-testid":`number-badge`,shape:`pill`,size:`xs`,tone:`info`,children:0})]})},E={render:()=>(0,y.jsxs)(`div`,{className:`grid w-[17.5rem] gap-3`,children:[(0,y.jsx)(_,{"data-testid":`long-korean`,children:`아주긴카테고리이름이작은화면에서영역밖으로넘치지않는예시입니다`}),(0,y.jsx)(_,{"data-testid":`long-english`,tone:`info`,children:`VeryLongUnbrokenCategoryNameThatMustRemainInsideTheViewport`})]})},D={render:()=>(0,y.jsx)(`div`,{className:`grid gap-4`,children:[`light`,`dark`].map(e=>(0,y.jsx)(`section`,{className:`${e} flex flex-wrap gap-2`,"data-testid":e,style:{background:`var(--color-surface-default)`,padding:`var(--space-4)`},children:x.map(([t,n])=>(0,y.jsx)(_,{"data-testid":`${e}-${t}`,tone:t,children:n},t))},e))})},O={render:()=>(0,y.jsxs)(`div`,{className:`grid max-w-sm gap-3`,children:[(0,y.jsx)(o,{type:`button`,children:`이전 작업`}),(0,y.jsx)(`div`,{children:(0,y.jsx)(_,{tone:`success`,children:`검토 완료`})}),(0,y.jsx)(`p`,{role:`status`,children:`상태가 변경되었습니다.`}),(0,y.jsx)(o,{type:`button`,children:`다음 작업`})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      {tones.map(([tone, label]) => <Badge key={tone} data-testid={\`tone-\${tone}\`} tone={tone}>
          {label}
        </Badge>)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Badge shape="rounded" size="xs">
        작은 모서리
      </Badge>
      <Badge shape="pill" size="xs">
        작은 필
      </Badge>
      <Badge shape="rounded" size="sm">
        기본 모서리
      </Badge>
      <Badge shape="pill" size="sm">
        기본 필
      </Badge>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Badge data-testid="icon-badge" icon={<Trophy />} tone="warning">
        1등
      </Badge>
      <Badge data-testid="number-badge" shape="pill" size="xs" tone="info">
        {0}
      </Badge>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-[17.5rem] gap-3">
      <Badge data-testid="long-korean">
        아주긴카테고리이름이작은화면에서영역밖으로넘치지않는예시입니다
      </Badge>
      <Badge data-testid="long-english" tone="info">
        VeryLongUnbrokenCategoryNameThatMustRemainInsideTheViewport
      </Badge>
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4">
      {(['light', 'dark'] as const).map(theme => <section key={theme} className={\`\${theme} flex flex-wrap gap-2\`} data-testid={theme} style={{
      background: 'var(--color-surface-default)',
      padding: 'var(--space-4)'
    }}>
          {tones.map(([tone, label]) => <Badge key={tone} data-testid={\`\${theme}-\${tone}\`} tone={tone}>
              {label}
            </Badge>)}
        </section>)}
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-sm gap-3">
      <Button type="button">이전 작업</Button>
      <div>
        <Badge tone="success">검토 완료</Badge>
      </div>
      <p role="status">상태가 변경되었습니다.</p>
      <Button type="button">다음 작업</Button>
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Tones`,`SizesAndShapes`,`IconAndNumber`,`LongContent`,`Themes`,`ParentStatus`]})))()}A();export{T as IconAndNumber,E as LongContent,O as ParentStatus,w as SizesAndShapes,D as Themes,C as Tones,k as __namedExportsOrder,b as default};