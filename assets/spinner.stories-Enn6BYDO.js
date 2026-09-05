import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-Cnx8aNwG.js";var i,a,o;function s(){return(s=e((()=>{i={lg:`var(--feedback-spinner-size-lg)`,md:`var(--feedback-spinner-size-md)`,sm:`var(--feedback-spinner-size-sm)`},a=e=>({display:`inline-block`,flexShrink:0,height:i[e],verticalAlign:`middle`,width:i[e]}),o={fill:`none`,stroke:`var(--feedback-spinner-color)`,strokeLinecap:`round`,strokeWidth:`var(--feedback-spinner-stroke-width)`};try{a.displayName=`spinnerStyle`,a.__docgenInfo={description:``,displayName:`spinnerStyle`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/spinner/spinner.styles.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var c,l;function u(){return(u=e((()=>{s(),c=t(),l=({className:e,ref:t,size:n=`md`})=>(0,c.jsx)(`svg`,{"aria-hidden":`true`,className:e,"data-size":n,"data-slot":`spinner`,focusable:`false`,ref:t,style:a(n),viewBox:`0 0 24 24`,children:(0,c.jsx)(`path`,{className:`spinner-rotate`,d:`M21 12a9 9 0 1 1-6.219-8.56`,style:o})});try{l.displayName=`Spinner`,l.__docgenInfo={description:``,displayName:`Spinner`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/spinner/spinner.tsx`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/spinner/spinner.types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/spinner/spinner.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<SVGSVGElement> | undefined`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/spinner/spinner.types.ts`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`SpinnerSize | undefined`,value:[{value:`undefined`},{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}}},tags:{}}}catch{}})))()}var d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),u(),d=t(),f={title:`Primitives/Feedback/Spinner`,component:l,parameters:{layout:`padded`},args:{size:`md`},tags:[`autodocs`]},p={},m={render:()=>(0,d.jsx)(`div`,{className:`flex items-end gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,d.jsxs)(`div`,{className:`grid justify-items-center gap-2`,children:[(0,d.jsx)(l,{size:e}),(0,d.jsx)(`span`,{children:e})]},e))})},h=[[`secondary`,`var(--color-content-secondary)`],[`accent`,`var(--color-content-accent)`],[`danger`,`var(--color-content-danger)`]],g={render:()=>(0,d.jsx)(`div`,{className:`flex gap-6`,children:h.map(([e,t])=>(0,d.jsx)(`div`,{"data-testid":`color-${e}`,style:{color:t},children:(0,d.jsx)(l,{})},e))})},_={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,d.jsx)(r,{type:`button`,variant:`secondary`,children:`이전 작업`}),(0,d.jsxs)(r,{type:`button`,"aria-busy":`true`,children:[(0,d.jsx)(l,{size:`sm`}),` 저장 중`]}),(0,d.jsx)(`p`,{role:`status`,children:`처리 중입니다.`}),(0,d.jsx)(r,{type:`button`,variant:`secondary`,children:`다음 작업`})]})},v={render:()=>(0,d.jsx)(`div`,{className:`grid gap-4`,children:[`light`,`dark`].map(e=>(0,d.jsx)(`section`,{className:`${e} p-4`,"data-testid":`theme-${e}`,style:{background:`var(--color-surface-default)`,color:`var(--color-content-primary)`},children:(0,d.jsx)(l,{})},e))})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="grid justify-items-center gap-2">
          <Spinner size={size} />
          <span>{size}</span>
        </div>)}
    </div>
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      {inheritedColors.map(([name, color]) => <div key={name} data-testid={\`color-\${name}\`} style={{
      color
    }}>
          <Spinner />
        </div>)}
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button type="button" variant="secondary">
        이전 작업
      </Button>
      <Button type="button" aria-busy="true">
        <Spinner size="sm" /> 저장 중
      </Button>
      <p role="status">처리 중입니다.</p>
      <Button type="button" variant="secondary">
        다음 작업
      </Button>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4">
      {(['light', 'dark'] as const).map(theme => <section key={theme} className={\`\${theme} p-4\`} data-testid={\`theme-\${theme}\`} style={{
      background: 'var(--color-surface-default)',
      color: 'var(--color-content-primary)'
    }}>
          <Spinner />
        </section>)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Sizes`,`InheritedColor`,`ButtonAndStatus`,`Themes`]})))()}b();export{_ as ButtonAndStatus,p as Default,g as InheritedColor,m as Sizes,v as Themes,y as __namedExportsOrder,f as default};