import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-CjmkHBOu.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./input-BjSs1uqH.js";import{n as a,t as o}from"./label-BrTQlK2B.js";import{n as s,t as c}from"./button-DSAOkeMQ.js";import{s as l,t as u}from"./text-roles-C_-F_uom.js";import{n as d,t as f}from"./stack-C4dKFxe2.js";import{a as p,d as m,i as h,l as g,n as _,o as v,r as y,t as b,u as x}from"./select-trigger-BNtNDbje.js";import{a as S,i as C,n as w,o as T,r as E,s as D,t as O}from"./dialog-DVUXN2cf.js";function k(){let[e,t]=(0,A.useState)(!1),[n,r]=(0,A.useState)(!1),[a,s]=(0,A.useState)(`ko`);return(0,j.jsxs)(f,{gap:`4`,children:[(0,j.jsxs)(O,{open:e,onOpenChange:t,children:[(0,j.jsx)(T,{asChild:!0,children:(0,j.jsx)(c,{children:`설정 변경`})}),(0,j.jsxs)(C,{title:`표시 설정`,description:`화면에 표시할 정보를 변경합니다.`,children:[(0,j.jsx)(w,{children:(0,j.jsx)(`form`,{id:`dialog-settings`,onSubmit:e=>{e.preventDefault(),r(!0),t(!1)},children:(0,j.jsxs)(f,{gap:`4`,children:[(0,j.jsx)(o,{htmlFor:`display-name`,children:`표시 이름`}),(0,j.jsx)(i,{id:`display-name`,required:!0,defaultValue:`방문자`}),(0,j.jsx)(o,{id:`language-label`,children:`언어`}),(0,j.jsxs)(g,{value:a,onValueChange:s,children:[(0,j.jsx)(b,{"aria-labelledby":`language-label`,children:(0,j.jsx)(x,{})}),(0,j.jsxs)(p,{children:[(0,j.jsx)(y,{disabled:!0,value:`unavailable`,children:`준비 중`}),(0,j.jsx)(y,{value:`ko`,children:`한국어`}),(0,j.jsx)(y,{value:`en`,children:`English`})]})]})]})})}),(0,j.jsxs)(S,{children:[(0,j.jsx)(E,{asChild:!0,children:(0,j.jsx)(c,{variant:`outline`,children:`취소`})}),(0,j.jsx)(c,{form:`dialog-settings`,type:`submit`,children:`저장`})]})]})]}),n&&(0,j.jsx)(u,{role:`status`,children:`설정이 저장되었습니다.`})]})}var A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{A=t(),s(),r(),a(),m(),v(),h(),_(),d(),l(),D(),j=n(),M={title:`Primitives/Overlays/Dialog`,component:C,tags:[`autodocs`],args:{title:`서비스 이용 안내`},parameters:{docs:{description:{component:"배경 조작을 차단하는 단일 작업용 모달입니다. 반복 작업에는 페이지 흐름을 사용하고, 팝업과 Drawer는 별도 구성 요소를 사용하세요. 저장·검증과 닫기 시점은 소비자가 제어하며, 폼을 담을 때는 `onOpenAutoFocus`로 첫 입력 컨트롤에 초점을 지정하세요."}}}},N={render:e=>(0,j.jsxs)(O,{children:[(0,j.jsx)(T,{asChild:!0,children:(0,j.jsx)(c,{children:`안내 열기`})}),(0,j.jsxs)(C,{...e,description:`내용을 확인하고 닫아 주세요.`,children:[(0,j.jsx)(w,{children:(0,j.jsx)(u,{children:`필요한 정보를 확인할 수 있는 기본 팝업입니다.`})}),(0,j.jsx)(S,{children:(0,j.jsx)(E,{asChild:!0,children:(0,j.jsx)(c,{children:`확인`})})})]})]})},P={render:()=>(0,j.jsx)(k,{})},F={render:()=>(0,j.jsxs)(O,{children:[(0,j.jsx)(T,{asChild:!0,children:(0,j.jsx)(c,{children:`긴 안내 열기`})}),(0,j.jsxs)(C,{title:`자세한 안내`,size:`lg`,children:[(0,j.jsx)(w,{children:(0,j.jsx)(f,{gap:`4`,children:Array.from({length:25},(e,t)=>(0,j.jsxs)(u,{children:[`안내 `,t+1,`. 내용이 길어져도 제목과 닫기 버튼은 유지되고 본문 영역에서 스크롤할 수 있습니다.`]},t))})}),(0,j.jsx)(S,{children:(0,j.jsx)(E,{asChild:!0,children:(0,j.jsx)(c,{children:`확인했습니다`})})})]})]})},I={render:()=>(0,j.jsxs)(O,{children:[(0,j.jsx)(T,{asChild:!0,children:(0,j.jsx)(c,{children:`닫기 제한 예제`})}),(0,j.jsxs)(C,{title:`작성 중인 내용`,closeOnEscape:!1,closeOnOutsideClick:!1,children:[(0,j.jsx)(w,{children:(0,j.jsx)(u,{children:`ESC나 바깥 클릭으로 닫히지 않습니다. 명시적인 닫기 버튼을 사용하세요.`})}),(0,j.jsx)(S,{children:(0,j.jsx)(E,{asChild:!0,children:(0,j.jsx)(c,{variant:`outline`,children:`닫기`})})})]})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog>
      <DialogTrigger asChild>
        <Button>안내 열기</Button>
      </DialogTrigger>
      <DialogContent {...args} description="내용을 확인하고 닫아 주세요.">
        <DialogBody>
          <Body>필요한 정보를 확인할 수 있는 기본 팝업입니다.</Body>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button>확인</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <FormExample />
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>긴 안내 열기</Button>
      </DialogTrigger>
      <DialogContent title="자세한 안내" size="lg">
        <DialogBody>
          <Stack gap="4">
            {Array.from({
            length: 25
          }, (_, index) => <Body key={index}>
                안내 {index + 1}. 내용이 길어져도 제목과 닫기 버튼은 유지되고
                본문 영역에서 스크롤할 수 있습니다.
              </Body>)}
          </Stack>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button>확인했습니다</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>닫기 제한 예제</Button>
      </DialogTrigger>
      <DialogContent title="작성 중인 내용" closeOnEscape={false} closeOnOutsideClick={false}>
        <DialogBody>
          <Body>
            ESC나 바깥 클릭으로 닫히지 않습니다. 명시적인 닫기 버튼을
            사용하세요.
          </Body>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">닫기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...I.parameters?.docs?.source}}},L=[`Basic`,`Form`,`LongContent`,`ExplicitDismissal`]})))()}R();export{N as Basic,I as ExplicitDismissal,P as Form,F as LongContent,L as __namedExportsOrder,M as default};