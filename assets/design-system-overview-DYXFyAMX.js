import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-CUBFI5st.js";import{a as i,o as a}from"./blocks-CaBrnSOZ.js";function o(e){let t={a:`a`,blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Design System/Overview`}),`
`,(0,c.jsx)(t.h1,{id:`jlca-design-system`,children:`JLCA Design System`}),`
`,(0,c.jsxs)(t.p,{children:[`JLCA 제품들이 설치해서 사용하는 `,(0,c.jsx)(t.strong,{children:`제품 독립 Core 디자인 시스템`}),`입니다. 이 페이지는
현재 지원 범위와 소유권 경계, 다음 구축 조건을 빠르게 판단하는 Storybook 시작점입니다.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`현재 상태:`}),` Core 기준선 구현과 네 패키지 배포가 완료됐습니다. Storybook의 각
Story는 실제로 지원하는 렌더링 상태이며, 아직 Story가 없는 제품 화면은 Core
제공 범위로 간주하지 않습니다.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`설치-가능한-패키지`,children:`설치 가능한 패키지`}),`
`,(0,c.jsxs)(`table`,{"aria-label":`설치 가능한 패키지`,children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`col`,children:`계층`}),(0,c.jsx)(`th`,{scope:`col`,children:`현재 릴리스`}),(0,c.jsx)(`th`,{scope:`col`,children:`역할`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Tokens`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`@jaeilnet/design-tokens@0.1.0`})}),(0,c.jsx)(`td`,{children:`reference·semantic·component token과 Web CSS`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Foundation`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`@jaeilnet/design-foundation@0.1.0`})}),(0,c.jsx)(`td`,{children:`공통 base style, utility, theme 기반`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Primitives`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`@jaeilnet/design-primitives@0.2.0`})}),(0,c.jsx)(`td`,{children:`제품 의미를 모르는 React 기본 구성 요소`})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Compositions`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`code`,{children:`@jaeilnet/design-compositions@0.1.1`})}),(0,c.jsx)(`td`,{children:`Primitive를 조합한 재사용 가능 패턴`})]})]})]}),`
`,(0,c.jsx)(t.p,{children:`GitHub Packages 인증을 구성한 소비자에서 정확한 버전을 설치합니다.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`pnpm add @jaeilnet/design-tokens@0.1.0 \\
  @jaeilnet/design-foundation@0.1.0 \\
  @jaeilnet/design-primitives@0.2.0 \\
  @jaeilnet/design-compositions@0.1.1
`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import '@jaeilnet/design-foundation/styles.css';
import { Button, Stack, Text } from '@jaeilnet/design-primitives';
import { Breadcrumb, InputField } from '@jaeilnet/design-compositions';
`})}),`
`,(0,c.jsxs)(t.p,{children:[`패키지 root와 manifest의 `,(0,c.jsx)(t.code,{children:`exports`}),`에 선언된 경로만 공개 API입니다. `,(0,c.jsx)(t.code,{children:`src/`}),`, `,(0,c.jsx)(t.code,{children:`dist/`}),`,
개별 컴포넌트 폴더를 직접 import하지 않습니다.`]}),`
`,(0,c.jsx)(t.h2,{id:`현재-제공-범위`,children:`현재 제공 범위`}),`
`,(0,c.jsxs)(`table`,{"aria-label":`현재 제공 컴포넌트 범위`,children:[(0,c.jsx)(`thead`,{children:(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`col`,children:`Family`}),(0,c.jsx)(`th`,{scope:`col`,children:`제공 항목`}),(0,c.jsx)(`th`,{scope:`col`,children:`대표 Story`})]})}),(0,c.jsxs)(`tbody`,{children:[(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Layout`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(t.p,{children:`AspectRatio, Box, Center, Container, Flex, Grid, GridItem, Group,
RepeatGrid, Stack`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`a`,{href:`?path=/story/primitives-grid--responsive-dashboard`,children:(0,c.jsx)(t.p,{children:`Responsive Grid`})})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Typography`}),(0,c.jsx)(`td`,{children:`Blockquote, Code, Link, List, ListItem, Text, Title`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`a`,{href:`?path=/story/primitives-typography-text--tones-in-light-and-dark`,children:(0,c.jsx)(t.p,{children:`Typography tones`})})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Form`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(t.p,{children:`Button, Checkbox, Input, Label, RadioGroup, Select, Switch, Textarea,
Field, InputField, ChoiceField, FormGroup`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`a`,{href:`?path=/story/compositions-field--error`,children:`Field states`})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Table`}),(0,c.jsx)(`td`,{children:`native table anatomy와 접근 가능한 responsive scroll`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`a`,{href:`?path=/story/primitives-table--responsive-scroll`,children:(0,c.jsx)(t.p,{children:`Responsive Table`})})})]}),(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`th`,{scope:`row`,children:`Navigation`}),(0,c.jsx)(`td`,{children:`Link, Navigation, SkipLink, Breadcrumb, Pagination`}),(0,c.jsx)(`td`,{children:(0,c.jsx)(`a`,{href:`?path=/story/compositions-pagination--states`,children:(0,c.jsx)(t.p,{children:`Pagination states`})})})]})]})]}),`
`,(0,c.jsxs)(t.p,{children:[`왼쪽 탐색 메뉴의 `,(0,c.jsx)(t.code,{children:`Primitives`}),`와 `,(0,c.jsx)(t.code,{children:`Compositions`}),` 아래에서 지원 상태, 반응형 동작,
키보드 조작, dark mode, validation, reduced motion 예제를 확인할 수 있습니다.`]}),`
`,(0,c.jsx)(t.h2,{id:`클라이언트-소유-범위`,children:`클라이언트 소유 범위`}),`
`,(0,c.jsxs)(t.p,{children:[`다음 항목은 이 독립 저장소로 이동하지 않고 `,(0,c.jsx)(t.strong,{children:`각 제품 클라이언트가 소유`}),`합니다.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`@lotto/design-system-web`}),` 같은 framework adapter`]}),`
`,(0,c.jsx)(t.li,{children:`도메인 이름과 업무 규칙이 포함된 Product UI`}),`
`,(0,c.jsx)(t.li,{children:`route, query, store, analytics, 인증 상태와 결합된 화면`}),`
`,(0,c.jsx)(t.li,{children:`서버 데이터로 계산하는 페이지 범위, 권한, loading·empty·error 흐름`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`의존 방향은 항상 `,(0,c.jsx)(t.code,{children:`Core packages ← client adapter ← Product UI`}),`입니다. Core가
클라이언트 코드나 제품별 라이브러리를 import하면 경계 위반입니다.`]}),`
`,(0,c.jsx)(t.h2,{id:`다음-구축-계획`,children:`다음 구축 계획`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`현 Core 유지:`}),` 공개 export가 바뀔 때 Story, runtime/type test, package release를
같은 변경으로 갱신합니다.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`소비자 검증:`}),` 클라이언트가 package root만 사용하고 복사된 Core 구현이나 deep
import를 남기지 않았는지 지속적으로 확인합니다.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`수요 기반 확장:`}),` Media, Document Structure, Interactive Content는 반복되는
제품 수요와 접근성 계약이 확인된 뒤 별도 설계로 시작합니다.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`선택 기능 분리:`}),` Charts, Carousel, Maps는 Core 미완료 항목이 아니라 조건부
capability 후보입니다. 필요할 때 별도 의존성과 fallback을 승인합니다.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`새 작업을 요청할 때는 원하는 Family와 이 Storybook의 기존 상태를 함께 지정합니다.
제품 고유 화면이라면 클라이언트에서 만들고, 여러 제품에서 반복되는 중립적 계약이
확인되면 Core 승격을 검토합니다.`}),`
`,(0,c.jsx)(t.h2,{id:`정본과-운영-링크`,children:`정본과 운영 링크`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/jaeilnet/jlca-design-system`,rel:`nofollow`,children:`소스 저장소`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/jaeilnet/jlca-design-system/blob/main/docs/packages.md`,rel:`nofollow`,children:`현재 패키지와 인증 안내`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/jaeilnet/jlca-design-system/blob/main/docs/architecture.md`,rel:`nofollow`,children:`Core와 Product 경계`})}),`
`,(0,c.jsx)(t.li,{children:(0,c.jsx)(t.a,{href:`https://github.com/jaeilnet/jlca-design-system/blob/main/docs/components.md`,rel:`nofollow`,children:`컴포넌트 지원 목록`})}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`공식 문서 사이트는 현재 중단 상태입니다. 운영 지침은 저장소 handbook을, 렌더링
상태와 사용 예시는 이 Storybook을 기준으로 판단합니다.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};