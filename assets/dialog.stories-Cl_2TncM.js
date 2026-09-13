import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-0_RO4lcD.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./button-xosLdDoi.js";import{a,i as o,n as s,o as c,r as l,s as u,t as d}from"./dialog-CCMEealI.js";import{n as f,t as p}from"./input-12gTQCkZ.js";import{n as m,t as h}from"./text-BQQ8YqGs.js";import{n as g,t as _}from"./label-DpXl0-3D.js";import{a as v,d as y,i as b,l as x,n as S,o as C,r as w,t as T,u as E}from"./select-trigger-BOp72b2Q.js";import{n as D,t as O}from"./stack-18lY4d9M.js";function k(){let[e,t]=(0,A.useState)(!1),[n,r]=(0,A.useState)(!1),[u,f]=(0,A.useState)(`ko`);return(0,j.jsxs)(O,{gap:`4`,children:[(0,j.jsxs)(d,{open:e,onOpenChange:t,children:[(0,j.jsx)(c,{asChild:!0,children:(0,j.jsx)(i,{children:`설정 변경`})}),(0,j.jsxs)(o,{title:`표시 설정`,description:`화면에 표시할 정보를 변경합니다.`,children:[(0,j.jsx)(s,{children:(0,j.jsx)(`form`,{id:`dialog-settings`,onSubmit:e=>{e.preventDefault(),r(!0),t(!1)},children:(0,j.jsxs)(O,{gap:`4`,children:[(0,j.jsx)(_,{htmlFor:`display-name`,children:`표시 이름`}),(0,j.jsx)(p,{id:`display-name`,required:!0,defaultValue:`방문자`}),(0,j.jsx)(_,{id:`language-label`,children:`언어`}),(0,j.jsxs)(x,{value:u,onValueChange:f,children:[(0,j.jsx)(T,{"aria-labelledby":`language-label`,children:(0,j.jsx)(E,{})}),(0,j.jsxs)(v,{children:[(0,j.jsx)(w,{disabled:!0,value:`unavailable`,children:`준비 중`}),(0,j.jsx)(w,{value:`ko`,children:`한국어`}),(0,j.jsx)(w,{value:`en`,children:`English`})]})]})]})})}),(0,j.jsxs)(a,{children:[(0,j.jsx)(l,{asChild:!0,children:(0,j.jsx)(i,{variant:`outline`,children:`취소`})}),(0,j.jsx)(i,{form:`dialog-settings`,type:`submit`,children:`저장`})]})]})]}),n&&(0,j.jsx)(h,{role:`status`,children:`설정이 저장되었습니다.`})]})}var A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{A=t(),r(),f(),g(),y(),C(),b(),S(),D(),m(),u(),j=n(),M={title:`Primitives/Interactive Content/Dialog`,component:o,tags:[`autodocs`],args:{title:`서비스 이용 안내`},parameters:{docs:{description:{component:`배경 조작을 차단하는 범용 모달입니다. 공지 팝업과 Drawer는 별도 구성 요소입니다. 저장·검증과 닫기 시점은 소비자가 제어합니다.`}}}},N={render:e=>(0,j.jsxs)(d,{children:[(0,j.jsx)(c,{asChild:!0,children:(0,j.jsx)(i,{children:`안내 열기`})}),(0,j.jsxs)(o,{...e,description:`내용을 확인하고 닫아 주세요.`,children:[(0,j.jsx)(s,{children:(0,j.jsx)(h,{children:`필요한 정보를 확인할 수 있는 기본 팝업입니다.`})}),(0,j.jsx)(a,{children:(0,j.jsx)(l,{asChild:!0,children:(0,j.jsx)(i,{children:`확인`})})})]})]})},P={render:()=>(0,j.jsx)(k,{})},F={render:()=>(0,j.jsxs)(d,{children:[(0,j.jsx)(c,{asChild:!0,children:(0,j.jsx)(i,{children:`긴 안내 열기`})}),(0,j.jsxs)(o,{title:`자세한 안내`,size:`lg`,children:[(0,j.jsx)(s,{children:(0,j.jsx)(O,{gap:`4`,children:Array.from({length:25},(e,t)=>(0,j.jsxs)(h,{children:[`안내 `,t+1,`. 내용이 길어져도 제목과 닫기 버튼은 유지되고 본문 영역에서 스크롤할 수 있습니다.`]},t))})}),(0,j.jsx)(a,{children:(0,j.jsx)(l,{asChild:!0,children:(0,j.jsx)(i,{children:`확인했습니다`})})})]})]})},I={render:()=>(0,j.jsxs)(d,{children:[(0,j.jsx)(c,{asChild:!0,children:(0,j.jsx)(i,{children:`닫기 제한 예제`})}),(0,j.jsxs)(o,{title:`작성 중인 내용`,closeOnEscape:!1,closeOnOutsideClick:!1,children:[(0,j.jsx)(s,{children:(0,j.jsx)(h,{children:`ESC나 바깥 클릭으로 닫히지 않습니다. 명시적인 닫기 버튼을 사용하세요.`})}),(0,j.jsx)(a,{children:(0,j.jsx)(l,{asChild:!0,children:(0,j.jsx)(i,{variant:`outline`,children:`닫기`})})})]})]})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <Dialog>
      <DialogTrigger asChild>
        <Button>안내 열기</Button>
      </DialogTrigger>
      <DialogContent {...args} description="내용을 확인하고 닫아 주세요.">
        <DialogBody>
          <Text>필요한 정보를 확인할 수 있는 기본 팝업입니다.</Text>
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
          }, (_, index) => <Text key={index}>
                안내 {index + 1}. 내용이 길어져도 제목과 닫기 버튼은 유지되고
                본문 영역에서 스크롤할 수 있습니다.
              </Text>)}
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
          <Text>
            ESC나 바깥 클릭으로 닫히지 않습니다. 명시적인 닫기 버튼을
            사용하세요.
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">닫기</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...I.parameters?.docs?.source}}},L=[`Basic`,`Form`,`LongContent`,`ExplicitDismissal`]})))()}R();export{N as Basic,I as ExplicitDismissal,P as Form,F as LongContent,L as __namedExportsOrder,M as default};