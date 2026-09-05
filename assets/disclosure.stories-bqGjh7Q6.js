import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DvJtJGyv.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a,t as o}from"./disclosure-B_Bj4RTj.js";import{n as s,t as c}from"./button-Cnx8aNwG.js";import{n as l,t as u}from"./input-B7FSkRn8.js";function d(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(`div`,{className:`max-w-lg space-y-4`,children:[(0,p.jsx)(c,{onClick:()=>t(!e),children:`외부 전환`}),(0,p.jsxs)(o,{open:e,onOpenChange:t,children:[(0,p.jsx)(a,{children:`추가 정보`}),(0,p.jsxs)(i,{children:[(0,p.jsx)(u,{"aria-label":`메모`}),(0,p.jsx)(c,{onClick:()=>t(!1),children:`완료하고 접기`})]})]})]})}var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f=t(),r(),s(),l(),p=n(),m={title:`Primitives/Interactive Content/Disclosure`,component:o,parameters:{layout:`padded`}},h={render:e=>(0,p.jsxs)(o,{...e,className:`w-full max-w-lg`,children:[(0,p.jsx)(a,{children:`추가 정보`}),(0,p.jsx)(i,{children:`필요할 때 추가 정보를 펼쳐 확인할 수 있습니다.`})]})},g={...h,args:{disabled:!0}},_={render:()=>(0,p.jsxs)(o,{defaultOpen:!0,className:`max-w-lg`,children:[(0,p.jsx)(a,{children:`메모`}),(0,p.jsx)(i,{keepMounted:!0,children:(0,p.jsx)(u,{"aria-label":`메모`,placeholder:`접었다 펼쳐도 입력은 유지됩니다`})})]})},v={render:()=>(0,p.jsx)(d,{})},y={render:()=>(0,p.jsx)(`div`,{className:`grid max-w-3xl gap-6 sm:grid-cols-2`,children:[`light`,`dark`].map(e=>(0,p.jsx)(`div`,{"data-theme":e,className:`${e===`dark`?`dark `:``}min-w-0 bg-[var(--color-surface-default)] p-4`,children:(0,p.jsxs)(o,{defaultOpen:!0,children:[(0,p.jsx)(a,{children:`추가 정보와 설정을 확인하는 길이가 긴 제목`}),(0,p.jsx)(i,{children:`화면이 좁아져도 제목과 본문을 읽을 수 있습니다. 필요한 정보만 펼쳐서 확인하세요.`})]})},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Disclosure {...args} className="w-full max-w-lg">
      <DisclosureTrigger>추가 정보</DisclosureTrigger>
      <DisclosureContent>
        필요할 때 추가 정보를 펼쳐 확인할 수 있습니다.
      </DisclosureContent>
    </Disclosure>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Disclosure defaultOpen className="max-w-lg">
      <DisclosureTrigger>메모</DisclosureTrigger>
      <DisclosureContent keepMounted>
        <Input aria-label="메모" placeholder="접었다 펼쳐도 입력은 유지됩니다" />
      </DisclosureContent>
    </Disclosure>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledDemo />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
      {(['light', 'dark'] as const).map(theme => <div key={theme} data-theme={theme} className={\`\${theme === 'dark' ? 'dark ' : ''}min-w-0 bg-[var(--color-surface-default)] p-4\`}>
          <Disclosure defaultOpen>
            <DisclosureTrigger>
              추가 정보와 설정을 확인하는 길이가 긴 제목
            </DisclosureTrigger>
            <DisclosureContent>
              화면이 좁아져도 제목과 본문을 읽을 수 있습니다. 필요한 정보만
              펼쳐서 확인하세요.
            </DisclosureContent>
          </Disclosure>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Disabled`,`KeepMounted`,`Controlled`,`ThemesAndLongContent`]})))()}x();export{h as Basic,v as Controlled,g as Disabled,_ as KeepMounted,y as ThemesAndLongContent,b as __namedExportsOrder,m as default};