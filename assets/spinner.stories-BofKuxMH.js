import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-CBIDVShO.js";import{n as i,t as a}from"./spinner-Dd7-bOJT.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o=t(),s={title:`Primitives/Feedback/Spinner`,component:a,parameters:{layout:`padded`},args:{size:`md`},tags:[`autodocs`]},c={},l={render:()=>(0,o.jsx)(`div`,{className:`flex items-end gap-6`,children:[`sm`,`md`,`lg`].map(e=>(0,o.jsxs)(`div`,{className:`grid justify-items-center gap-2`,children:[(0,o.jsx)(a,{size:e}),(0,o.jsx)(`span`,{children:e})]},e))})},u=[[`secondary`,`text-[var(--color-content-secondary)]`],[`accent`,`text-[var(--color-content-accent)]`],[`danger`,`text-[var(--color-content-danger)]`]],d={render:()=>(0,o.jsx)(`div`,{className:`flex gap-6`,children:u.map(([e,t])=>(0,o.jsx)(`div`,{"data-testid":`color-${e}`,className:t,children:(0,o.jsx)(a,{})},e))})},f={render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap items-center gap-4`,children:[(0,o.jsx)(r,{type:`button`,variant:`secondary`,children:`이전 작업`}),(0,o.jsxs)(r,{type:`button`,"aria-busy":`true`,children:[(0,o.jsx)(a,{size:`sm`}),` 저장 중`]}),(0,o.jsx)(`p`,{role:`status`,children:`처리 중입니다.`}),(0,o.jsx)(r,{type:`button`,variant:`secondary`,children:`다음 작업`})]})},p={render:()=>(0,o.jsx)(`div`,{className:`grid gap-4`,children:[`light`,`dark`].map(e=>(0,o.jsx)(`section`,{className:[`${e} p-4`,`[background:var(--color-surface-default)] [color:var(--color-content-primary)]`].filter(Boolean).join(` `),"data-testid":`theme-${e}`,children:(0,o.jsx)(a,{})},e))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} className="grid justify-items-center gap-2">
          <Spinner size={size} />
          <span>{size}</span>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      {inheritedColors.map(([name, color]) => <div key={name} data-testid={\`color-\${name}\`} className={color}>
          <Spinner />
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4">
      {(['light', 'dark'] as const).map(theme => <section key={theme} className={[\`\${theme} p-4\`, '[background:var(--color-surface-default)] [color:var(--color-content-primary)]'].filter(Boolean).join(' ')} data-testid={\`theme-\${theme}\`}>
          <Spinner />
        </section>)}
    </div>
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Sizes`,`InheritedColor`,`ButtonAndStatus`,`Themes`]})))()}h();export{f as ButtonAndStatus,c as Default,d as InheritedColor,l as Sizes,p as Themes,m as __namedExportsOrder,s as default};