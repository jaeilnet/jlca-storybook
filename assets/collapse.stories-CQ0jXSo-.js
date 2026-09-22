import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-czYKJxbX.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./input-lMxhDw_P.js";import{n as a,t as o}from"./button-iIRtSOqW.js";import{i as s,n as c,r as l,t as u}from"./collapse-D883Lmsi.js";function d(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(`div`,{className:`max-w-lg space-y-4`,children:[(0,p.jsx)(o,{onClick:()=>t(!e),children:`외부 전환`}),(0,p.jsxs)(u,{open:e,onOpenChange:t,children:[(0,p.jsx)(l,{children:`추가 정보`}),(0,p.jsxs)(c,{children:[(0,p.jsx)(i,{"aria-label":`메모`}),(0,p.jsx)(o,{onClick:()=>t(!1),children:`완료하고 접기`})]})]})]})}var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f=t(),a(),r(),s(),p=n(),m={title:`Primitives/Collapse/Collapse`,component:u,parameters:{layout:`padded`}},h={render:e=>(0,p.jsxs)(u,{...e,className:`w-full max-w-lg`,children:[(0,p.jsx)(l,{children:`추가 정보`}),(0,p.jsx)(c,{children:`필요할 때 추가 정보를 펼쳐 확인할 수 있습니다.`})]})},g={...h,args:{disabled:!0}},_={render:()=>(0,p.jsxs)(u,{defaultOpen:!0,className:`max-w-lg`,children:[(0,p.jsx)(l,{children:`메모`}),(0,p.jsx)(c,{keepMounted:!0,children:(0,p.jsx)(i,{"aria-label":`메모`,placeholder:`접었다 펼쳐도 입력은 유지됩니다`})})]})},v={render:()=>(0,p.jsx)(d,{})},y={render:()=>(0,p.jsx)(`div`,{className:`grid max-w-3xl gap-6 sm:grid-cols-2`,children:[`light`,`dark`].map(e=>(0,p.jsx)(`div`,{"data-theme":e,className:`${e===`dark`?`dark `:``}min-w-0 bg-[var(--color-surface-default)] p-4`,children:(0,p.jsxs)(u,{defaultOpen:!0,children:[(0,p.jsx)(l,{children:`추가 정보와 설정을 확인하는 길이가 긴 제목`}),(0,p.jsx)(c,{children:`화면이 좁아져도 제목과 본문을 읽을 수 있습니다. 필요한 정보만 펼쳐서 확인하세요.`})]})},e))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Collapse {...args} className="w-full max-w-lg">
      <CollapseTrigger>추가 정보</CollapseTrigger>
      <CollapseContent>
        필요할 때 추가 정보를 펼쳐 확인할 수 있습니다.
      </CollapseContent>
    </Collapse>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Basic,
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Collapse defaultOpen className="max-w-lg">
      <CollapseTrigger>메모</CollapseTrigger>
      <CollapseContent keepMounted>
        <Input aria-label="메모" placeholder="접었다 펼쳐도 입력은 유지됩니다" />
      </CollapseContent>
    </Collapse>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledDemo />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-3xl gap-6 sm:grid-cols-2">
      {(['light', 'dark'] as const).map(theme => <div key={theme} data-theme={theme} className={\`\${theme === 'dark' ? 'dark ' : ''}min-w-0 bg-[var(--color-surface-default)] p-4\`}>
          <Collapse defaultOpen>
            <CollapseTrigger>
              추가 정보와 설정을 확인하는 길이가 긴 제목
            </CollapseTrigger>
            <CollapseContent>
              화면이 좁아져도 제목과 본문을 읽을 수 있습니다. 필요한 정보만
              펼쳐서 확인하세요.
            </CollapseContent>
          </Collapse>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Basic`,`Disabled`,`KeepMounted`,`Controlled`,`ThemesAndLongContent`]})))()}x();export{h as Basic,v as Controlled,g as Disabled,_ as KeepMounted,y as ThemesAndLongContent,b as __namedExportsOrder,m as default};