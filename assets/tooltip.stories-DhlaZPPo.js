import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DvJtJGyv.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,r as a,t as o}from"./tooltip-DlljdR_o.js";import{n as s,t as c}from"./button-Cnx8aNwG.js";import{i as l,n as u,o as d,s as f,t as p}from"./dialog-jRuakQbr.js";import{a as m,i as h,r as g,t as _}from"./popover-DW6bb5p0.js";function v(){let[e,t]=(0,x.useState)(0),[n,r]=(0,x.useState)(0);return(0,S.jsxs)(`div`,{className:`space-y-8 p-8`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h2`,{className:`text-lg font-semibold`,children:`주소 공유`}),(0,S.jsx)(`p`,{className:`mt-2 text-sm text-[var(--color-content-secondary)]`,children:`복사 버튼에 마우스를 올리거나 Tab으로 이동해 보세요.`})]}),(0,S.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),r(e=>e+1)},className:`flex gap-4`,children:[(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,onClick:()=>t(e=>e+1),children:(0,S.jsx)(c,{children:`복사`})}),(0,S.jsx)(i,{children:`현재 페이지의 주소를 복사합니다.`})]}),(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(c,{type:`submit`,variant:`outline`,children:`저장`})}),(0,S.jsx)(i,{children:`변경사항을 저장합니다.`})]}),(0,S.jsx)(c,{variant:`ghost`,type:`button`,children:`다음 동작`})]}),(0,S.jsxs)(`p`,{role:`status`,className:`text-sm`,children:[`복사 `,e,`회 · 제출 `,n,`회`]})]})}function y({dark:e}){let[t,n]=(0,x.useState)(null);return(0,S.jsxs)(`section`,{"data-theme":e?`dark`:`light`,className:`${e?`dark `:``}min-h-64 bg-[var(--color-surface-default)] p-8 text-[var(--color-content-primary)]`,children:[(0,S.jsx)(`h2`,{className:`mb-12 text-base font-semibold`,children:e?`어두운 테마`:`밝은 테마`}),(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(c,{variant:`outline`,children:e?`다크 복사`:`라이트 복사`})}),(0,S.jsx)(`div`,{ref:n}),(0,S.jsx)(i,{portalContainer:t,children:`현재 페이지의 주소를 복사합니다.`})]})]})}function b(){return(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(c,{variant:`outline`,children:`주소 복사`})}),(0,S.jsx)(i,{children:`주소를 클립보드에 복사합니다.`})]})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{x=t(),s(),f(),m(),r(),S=n(),C={title:`Primitives/Interactive Content/Tooltip`,component:o,tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`짧은 보충 설명입니다. hover는 잠시 뒤, 키보드 포커스는 즉시 표시합니다. 설명으로 포커스를 옮기지 않습니다. 버튼 이름과 필수 정보는 별도로 제공하세요. 터치에서는 버튼의 원래 동작을 유지하며, 상호작용 콘텐츠는 Popover를 사용합니다.`}}}},w={render:()=>(0,S.jsx)(v,{})},T={render:()=>(0,S.jsx)(v,{})},E={render:function(){let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(`div`,{className:`flex gap-4 p-12`,children:[(0,S.jsxs)(o,{open:e,onOpenChange:t,children:[(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(c,{children:`복사`})}),(0,S.jsx)(i,{children:`현재 페이지의 주소를 복사합니다.`})]}),(0,S.jsx)(c,{variant:`outline`,onClick:()=>t(!0),children:`외부에서 안내 열기`}),(0,S.jsx)(c,{variant:`outline`,onClick:()=>t(!1),children:`외부에서 안내 닫기`}),(0,S.jsx)(`p`,{role:`status`,children:e?`열림`:`닫힘`})]})}},D={render:function(){let[e,t]=(0,x.useState)(!1);return(0,S.jsxs)(`div`,{className:`flex gap-4 p-12`,children:[(0,S.jsxs)(o,{delayDuration:1e3,children:[(0,S.jsx)(a,{asChild:!0,disabled:e,children:(0,S.jsx)(c,{children:`천천히 표시`})}),(0,S.jsx)(i,{children:`1초 동안 머무르면 표시됩니다.`})]}),(0,S.jsx)(c,{variant:`outline`,onClick:()=>t(e=>!e),children:`설명 비활성화 전환`})]})}},O={render:()=>(0,S.jsxs)(`div`,{className:`space-y-4 p-8`,children:[(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,disabled:!0,children:(0,S.jsx)(c,{children:`저장`})}),(0,S.jsx)(i,{children:`변경사항을 저장합니다.`})]}),(0,S.jsx)(`p`,{children:`저장할 변경사항이 없습니다. 터치·비활성 상태에 필요한 정보는 이처럼 화면에 제공합니다.`})]})},k={render:()=>(0,S.jsxs)(`div`,{className:`space-y-6 p-12`,children:[(0,S.jsx)(`p`,{id:`copy-help`,children:`현재 화면의 주소를 공유합니다.`}),(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,"aria-describedby":`copy-help`,children:(0,S.jsx)(c,{"aria-describedby":`copy-shortcut`,children:`복사`})}),(0,S.jsx)(i,{children:`클립보드에 주소를 복사합니다.`})]}),(0,S.jsx)(`p`,{id:`copy-shortcut`,children:`공유 전에 주소를 확인하세요.`})]})},A={render:()=>(0,S.jsxs)(`div`,{className:`grid max-w-3xl gap-4 sm:grid-cols-2`,children:[(0,S.jsx)(y,{dark:!1}),(0,S.jsx)(y,{dark:!0})]})},j={render:()=>(0,S.jsxs)(`div`,{className:`flex min-h-[calc(100dvh-2rem)] flex-col justify-between`,children:[(0,S.jsx)(`div`,{className:`flex justify-between`,children:[`top`,`right`].map(e=>(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(c,{variant:`outline`,children:e})}),(0,S.jsx)(i,{side:e,children:`가장자리에서는 표시할 수 있는 위치로 보정합니다.`})]},e))}),(0,S.jsx)(`div`,{className:`flex justify-between`,children:[`left`,`bottom`].map(e=>(0,S.jsxs)(o,{children:[(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(c,{variant:`outline`,children:e})}),(0,S.jsx)(i,{side:e,children:`길게이어진설명`.repeat(12)})]},e))})]})},M={render:()=>(0,S.jsx)(`div`,{className:`p-8`,children:(0,S.jsxs)(_,{children:[(0,S.jsx)(h,{asChild:!0,children:(0,S.jsx)(c,{children:`공유 설정 열기`})}),(0,S.jsxs)(g,{title:`공유 설정`,children:[(0,S.jsx)(`h2`,{className:`mb-4 text-base font-semibold`,children:`공유 설정`}),(0,S.jsx)(b,{})]})]})})},N={render:()=>(0,S.jsxs)(p,{children:[(0,S.jsx)(d,{asChild:!0,children:(0,S.jsx)(c,{children:`공유 모달 열기`})}),(0,S.jsx)(l,{title:`공유 설정`,children:(0,S.jsx)(u,{children:(0,S.jsx)(b,{})})})]})},P={render:function(){let[e,t]=(0,x.useState)(!0),[n,r]=(0,x.useState)(!1);return(0,S.jsxs)(`div`,{className:`flex gap-4 p-12`,children:[(0,S.jsxs)(o,{open:e,onOpenChange:t,children:[(0,S.jsx)(a,{asChild:!0,children:(0,S.jsx)(c,{children:`배경 복사`})}),(0,S.jsx)(i,{children:`배경 설명입니다.`})]}),(0,S.jsxs)(p,{open:n,onOpenChange:r,children:[(0,S.jsx)(d,{asChild:!0,children:(0,S.jsx)(c,{onClick:()=>{t(!1),r(!0)},children:`별도 모달 열기`})}),(0,S.jsx)(l,{title:`확인 안내`,children:(0,S.jsxs)(u,{children:[(0,S.jsx)(`p`,{children:`모달이 활성화되면 소비자가 배경 안내도 닫습니다.`}),(0,S.jsx)(c,{children:`확인`})]})})]})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [open, setOpen] = useState(false);
    return <div className="flex gap-4 p-12">
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild>
            <Button>복사</Button>
          </TooltipTrigger>
          <TooltipContent>현재 페이지의 주소를 복사합니다.</TooltipContent>
        </Tooltip>
        <Button variant="outline" onClick={() => setOpen(true)}>
          외부에서 안내 열기
        </Button>
        <Button variant="outline" onClick={() => setOpen(false)}>
          외부에서 안내 닫기
        </Button>
        <p role="status">{open ? '열림' : '닫힘'}</p>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function DelayedExample() {
    const [disabled, setDisabled] = useState(false);
    return <div className="flex gap-4 p-12">
        <Tooltip delayDuration={1000}>
          <TooltipTrigger asChild disabled={disabled}>
            <Button>천천히 표시</Button>
          </TooltipTrigger>
          <TooltipContent>1초 동안 머무르면 표시됩니다.</TooltipContent>
        </Tooltip>
        <Button variant="outline" onClick={() => setDisabled(value => !value)}>
          설명 비활성화 전환
        </Button>
      </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-8">
      <Tooltip>
        <TooltipTrigger asChild disabled>
          <Button>저장</Button>
        </TooltipTrigger>
        <TooltipContent>변경사항을 저장합니다.</TooltipContent>
      </Tooltip>
      <p>
        저장할 변경사항이 없습니다. 터치·비활성 상태에 필요한 정보는 이처럼
        화면에 제공합니다.
      </p>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-12">
      <p id="copy-help">현재 화면의 주소를 공유합니다.</p>
      <Tooltip>
        <TooltipTrigger asChild aria-describedby="copy-help">
          <Button aria-describedby="copy-shortcut">복사</Button>
        </TooltipTrigger>
        <TooltipContent>클립보드에 주소를 복사합니다.</TooltipContent>
      </Tooltip>
      <p id="copy-shortcut">공유 전에 주소를 확인하세요.</p>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
      <ThemeExample dark={false} />
      <ThemeExample dark />
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex min-h-[calc(100dvh-2rem)] flex-col justify-between">
      <div className="flex justify-between">
        {(['top', 'right'] as const).map(side => <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              가장자리에서는 표시할 수 있는 위치로 보정합니다.
            </TooltipContent>
          </Tooltip>)}
      </div>
      <div className="flex justify-between">
        {(['left', 'bottom'] as const).map(side => <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side}>
              {'길게이어진설명'.repeat(12)}
            </TooltipContent>
          </Tooltip>)}
      </div>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button>공유 설정 열기</Button>
        </PopoverTrigger>
        <PopoverContent title="공유 설정">
          <h2 className="mb-4 text-base font-semibold">공유 설정</h2>
          <CopyTooltip />
        </PopoverContent>
      </Popover>
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>공유 모달 열기</Button>
      </DialogTrigger>
      <DialogContent title="공유 설정">
        <DialogBody>
          <CopyTooltip />
        </DialogBody>
      </DialogContent>
    </Dialog>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function BackgroundModalExample() {
    const [open, setOpen] = useState(true);
    const [modal, setModal] = useState(false);
    return <div className="flex gap-4 p-12">
        <Tooltip open={open} onOpenChange={setOpen}>
          <TooltipTrigger asChild>
            <Button>배경 복사</Button>
          </TooltipTrigger>
          <TooltipContent>배경 설명입니다.</TooltipContent>
        </Tooltip>
        <Dialog open={modal} onOpenChange={setModal}>
          <DialogTrigger asChild>
            <Button onClick={() => {
            setOpen(false);
            setModal(true);
          }}>
              별도 모달 열기
            </Button>
          </DialogTrigger>
          <DialogContent title="확인 안내">
            <DialogBody>
              <p>모달이 활성화되면 소비자가 배경 안내도 닫습니다.</p>
              <Button>확인</Button>
            </DialogBody>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F=[`Basic`,`Keyboard`,`Controlled`,`Delayed`,`Disabled`,`Described`,`Themes`,`Placements`,`WithPopover`,`WithDialog`,`BackgroundModal`]})))()}I();export{P as BackgroundModal,w as Basic,E as Controlled,D as Delayed,k as Described,O as Disabled,T as Keyboard,j as Placements,A as Themes,N as WithDialog,M as WithPopover,F as __namedExportsOrder,C as default};