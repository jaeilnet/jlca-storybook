import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DvJtJGyv.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-Cnx8aNwG.js";import{n as a,t as o}from"./input-B7FSkRn8.js";import{i as s,n as c,o as l,r as u,s as d,t as f}from"./dialog-jRuakQbr.js";import{n as p,t as m}from"./label-i63QCiIw.js";import{a as h,i as g,n as _,r as v,t as y}from"./popover-DW6bb5p0.js";import{a as b,d as x,i as S,l as C,n as w,o as T,r as E,t as D,u as O}from"./select-trigger-BMyUH2QB.js";function k({id:e=`display-name`}){return(0,N.jsxs)(`div`,{className:`space-y-4`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h2`,{className:`text-base font-semibold`,children:`표시 설정`}),(0,N.jsx)(`p`,{className:`mt-1 text-[var(--color-content-secondary)]`,children:`화면에 사용할 이름을 입력하세요.`})]}),(0,N.jsxs)(`div`,{className:`space-y-2`,children:[(0,N.jsx)(m,{htmlFor:e,children:`표시 이름`}),(0,N.jsx)(o,{id:e,defaultValue:`방문자`})]}),(0,N.jsx)(_,{asChild:!0,children:(0,N.jsx)(i,{variant:`secondary`,children:`닫기`})})]})}function A({scoped:e=!1}){let[t,n]=(0,M.useState)(null),[r,a]=(0,M.useState)(0),[o,s]=(0,M.useState)(0);return(0,N.jsxs)(`div`,{className:`flex min-h-80 flex-wrap content-start items-start gap-4`,children:[(0,N.jsx)(`form`,{onSubmit:e=>{e.preventDefault(),s(e=>e+1)},children:(0,N.jsxs)(y,{children:[(0,N.jsx)(g,{asChild:!0,children:(0,N.jsx)(i,{children:`설정 열기`})}),e&&(0,N.jsx)(`div`,{ref:n}),(0,N.jsx)(v,{title:`표시 설정`,portalContainer:e?t:void 0,children:(0,N.jsx)(k,{})})]})}),(0,N.jsx)(i,{variant:`outline`,onClick:()=>a(e=>e+1),children:`외부 동작`}),(0,N.jsxs)(`p`,{role:`status`,children:[`외부 동작 `,r,`회 · 제출 `,o,`회`]})]})}function j({dark:e}){let[t,n]=(0,M.useState)(null);return(0,N.jsxs)(`section`,{"data-theme":e?`dark`:`light`,className:`${e?`dark `:``}min-h-80 bg-[var(--color-surface-default)] p-4 text-[var(--color-content-primary)]`,children:[(0,N.jsx)(`h2`,{className:`mb-4 text-base font-semibold`,children:e?`어두운 테마`:`밝은 테마`}),(0,N.jsxs)(y,{children:[(0,N.jsx)(g,{asChild:!0,children:(0,N.jsx)(i,{variant:`outline`,children:e?`다크 설정`:`라이트 설정`})}),(0,N.jsx)(`div`,{ref:n}),(0,N.jsx)(v,{title:e?`다크 표시 설정`:`라이트 표시 설정`,portalContainer:t,children:(0,N.jsx)(k,{id:e?`dark-name`:`light-name`})})]})]})}var M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{M=t(),r(),a(),p(),x(),w(),T(),S(),d(),h(),N=n(),P={title:`Primitives/Interactive Content/Popover`,component:v,args:{title:`표시 설정`},tags:[`autodocs`],parameters:{layout:`padded`,docs:{description:{component:`화면을 막지 않는 설정 패널입니다. Escape·닫기는 트리거로 돌아가고, Tab·바깥 클릭은 이동한 곳의 포커스를 유지합니다. 기본 body Portal은 페이지 테마를 따릅니다. 로컬 테마와 Tab 순서가 필요한 경우 portalContainer를 지정하세요. 닫힌 콘텐츠는 제거되며 저장은 소비자 책임입니다.`}}}},F={render:()=>(0,N.jsx)(A,{})},I={render:()=>(0,N.jsx)(A,{scoped:!0})},L={render:()=>(0,N.jsxs)(y,{children:[(0,N.jsx)(g,{asChild:!0,disabled:!0,children:(0,N.jsx)(i,{children:`설정 열기`})}),(0,N.jsx)(v,{title:`표시 설정`,children:(0,N.jsx)(k,{})})]})},R={render:()=>(0,N.jsxs)(y,{children:[(0,N.jsx)(g,{asChild:!0,children:(0,N.jsx)(i,{children:`안내 열기`})}),(0,N.jsx)(v,{title:`이름 안내`,children:(0,N.jsx)(`p`,{children:`표시 이름은 화면에만 사용됩니다. Escape를 눌러 닫으세요.`})})]})},z={render:function(){let[e,t]=(0,M.useState)(!1);return(0,N.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,N.jsxs)(y,{open:e,onOpenChange:t,children:[(0,N.jsx)(g,{asChild:!0,children:(0,N.jsx)(i,{children:`설정 열기`})}),(0,N.jsxs)(v,{title:`표시 설정`,children:[(0,N.jsx)(k,{}),(0,N.jsx)(i,{className:`mt-4`,onClick:()=>t(!1),children:`완료하고 닫기`})]})]}),(0,N.jsx)(i,{variant:`outline`,onClick:()=>t(!1),children:`외부에서 닫기`})]})}},B={render:()=>(0,N.jsx)(`div`,{className:`flex min-h-[calc(100dvh-2rem)] items-end justify-end`,children:(0,N.jsxs)(y,{children:[(0,N.jsx)(g,{asChild:!0,children:(0,N.jsx)(i,{children:`자세한 설정 열기`})}),(0,N.jsxs)(v,{title:`자세한 표시 설정`,children:[(0,N.jsx)(`h2`,{className:`text-base font-semibold`,children:`자세한 표시 설정`}),(0,N.jsx)(`div`,{className:`my-4 space-y-3`,children:Array.from({length:16},(e,t)=>(0,N.jsxs)(`p`,{children:[`안내 `,t+1,`. 긴 내용도 화면 안에서 읽고 조작할 수 있습니다. 설정은 저장 버튼을 누르는 소비자 화면에서 처리합니다.`]},t))}),(0,N.jsx)(_,{asChild:!0,children:(0,N.jsx)(i,{children:`닫기`})})]})]})})},V={render:()=>(0,N.jsxs)(`div`,{className:`grid max-w-3xl gap-4 sm:grid-cols-2`,children:[(0,N.jsx)(j,{dark:!1}),(0,N.jsx)(j,{dark:!0})]})},H={render:()=>(0,N.jsxs)(y,{children:[(0,N.jsx)(g,{asChild:!0,children:(0,N.jsx)(i,{children:`필터 열기`})}),(0,N.jsx)(v,{title:`지역 필터`,children:(0,N.jsxs)(`div`,{className:`space-y-4`,children:[(0,N.jsx)(`h2`,{className:`text-base font-semibold`,children:`지역 필터`}),(0,N.jsxs)(C,{defaultValue:`seoul`,children:[(0,N.jsx)(D,{"aria-label":`지역`,children:(0,N.jsx)(O,{})}),(0,N.jsxs)(b,{children:[(0,N.jsx)(E,{value:`seoul`,children:`서울`}),(0,N.jsx)(E,{value:`busan`,children:`부산`}),(0,N.jsx)(E,{value:`jeju`,children:`제주`})]})]}),(0,N.jsx)(_,{asChild:!0,children:(0,N.jsx)(i,{variant:`secondary`,children:`닫기`})})]})})]})},U={render:function(){let[e,t]=(0,M.useState)(!1);return(0,N.jsxs)(`div`,{className:`flex gap-4`,children:[(0,N.jsxs)(y,{open:!0,children:[(0,N.jsx)(g,{asChild:!0,children:(0,N.jsx)(i,{children:`열린 설정`})}),(0,N.jsxs)(v,{title:`배경 설정`,children:[(0,N.jsx)(k,{}),(0,N.jsx)(i,{className:`mt-4`,onClick:()=>t(!0),children:`모달 열기`})]})]}),(0,N.jsxs)(f,{open:e,onOpenChange:t,children:[(0,N.jsx)(l,{asChild:!0,children:(0,N.jsx)(i,{onClick:()=>t(!0),children:`별도 모달 열기`})}),(0,N.jsxs)(s,{title:`확인 안내`,children:[(0,N.jsx)(c,{children:(0,N.jsx)(`p`,{children:`모달이 열린 동안 배경 설정을 조작할 수 없습니다.`})}),(0,N.jsx)(u,{asChild:!0,children:(0,N.jsx)(i,{children:`모달 닫기`})})]})]})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample />
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <BasicExample scoped />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild disabled>
        <Button>설정 열기</Button>
      </PopoverTrigger>
      <PopoverContent title="표시 설정">
        <Settings />
      </PopoverContent>
    </Popover>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>안내 열기</Button>
      </PopoverTrigger>
      <PopoverContent title="이름 안내">
        <p>표시 이름은 화면에만 사용됩니다. Escape를 눌러 닫으세요.</p>
      </PopoverContent>
    </Popover>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [open, setOpen] = useState(false);
    return <div className="flex flex-wrap gap-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button>설정 열기</Button>
          </PopoverTrigger>
          <PopoverContent title="표시 설정">
            <Settings />
            <Button className="mt-4" onClick={() => setOpen(false)}>
              완료하고 닫기
            </Button>
          </PopoverContent>
        </Popover>
        <Button variant="outline" onClick={() => setOpen(false)}>
          외부에서 닫기
        </Button>
      </div>;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex min-h-[calc(100dvh-2rem)] items-end justify-end">
      <Popover>
        <PopoverTrigger asChild>
          <Button>자세한 설정 열기</Button>
        </PopoverTrigger>
        <PopoverContent title="자세한 표시 설정">
          <h2 className="text-base font-semibold">자세한 표시 설정</h2>
          <div className="my-4 space-y-3">
            {Array.from({
            length: 16
          }, (_, index) => <p key={index}>
                안내 {index + 1}. 긴 내용도 화면 안에서 읽고 조작할 수 있습니다.
                설정은 저장 버튼을 누르는 소비자 화면에서 처리합니다.
              </p>)}
          </div>
          <PopoverClose asChild>
            <Button>닫기</Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>
    </div>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
      <ThemeExample dark={false} />
      <ThemeExample dark />
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button>필터 열기</Button>
      </PopoverTrigger>
      <PopoverContent title="지역 필터">
        <div className="space-y-4">
          <h2 className="text-base font-semibold">지역 필터</h2>
          <Select defaultValue="seoul">
            <SelectTrigger aria-label="지역">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectOption value="seoul">서울</SelectOption>
              <SelectOption value="busan">부산</SelectOption>
              <SelectOption value="jeju">제주</SelectOption>
            </SelectContent>
          </Select>
          <PopoverClose asChild>
            <Button variant="secondary">닫기</Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function WithDialogExample() {
    const [modal, setModal] = useState(false);
    return <div className="flex gap-4">
        <Popover open>
          <PopoverTrigger asChild>
            <Button>열린 설정</Button>
          </PopoverTrigger>
          <PopoverContent title="배경 설정">
            <Settings />
            <Button className="mt-4" onClick={() => setModal(true)}>
              모달 열기
            </Button>
          </PopoverContent>
        </Popover>
        <Dialog open={modal} onOpenChange={setModal}>
          <DialogTrigger asChild>
            <Button onClick={() => setModal(true)}>별도 모달 열기</Button>
          </DialogTrigger>
          <DialogContent title="확인 안내">
            <DialogBody>
              <p>모달이 열린 동안 배경 설정을 조작할 수 없습니다.</p>
            </DialogBody>
            <DialogClose asChild>
              <Button>모달 닫기</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>;
  }
}`,...U.parameters?.docs?.source}}},W=[`Basic`,`Keyboard`,`Disabled`,`TextOnly`,`Controlled`,`LongContent`,`Themes`,`WithSelect`,`WithDialog`]})))()}G();export{F as Basic,z as Controlled,L as Disabled,I as Keyboard,B as LongContent,R as TextOnly,V as Themes,U as WithDialog,H as WithSelect,W as __namedExportsOrder,P as default};