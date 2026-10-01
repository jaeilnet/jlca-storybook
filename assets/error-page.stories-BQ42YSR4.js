import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-DoGXp6Tx.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./dist-BQI90tbb.js";import{n as a,t as o}from"./button-BWoq7HJf.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h}from"./variants-BctQ16Wz.js";var g,_,v;function y(){return(y=e((()=>{r(),g=t(),h(),_=n(),v=(0,g.forwardRef)(({actions:e,className:t,description:n,details:r,standalone:a=!1,support:o,title:h,...g},v)=>(0,_.jsx)(`main`,{...g,ref:v,"data-slot":`error-page`,"data-standalone":a?`true`:`false`,className:[i(`error-page`),f,a?u:c,t].filter(Boolean).join(` `),children:(0,_.jsxs)(`div`,{className:l,children:[(0,_.jsx)(`span`,{"aria-hidden":`true`,className:`${p} text-[var(--color-feedback-danger-background)]`,children:`500`}),(0,_.jsxs)(`div`,{className:`mt-2 space-y-3`,children:[(0,_.jsx)(`h1`,{className:m,children:h}),(0,_.jsx)(`p`,{className:s,children:n}),o?(0,_.jsx)(`p`,{className:`text-xs text-[var(--color-content-secondary)]`,children:o}):null]}),r?(0,_.jsx)(`div`,{className:`mt-4`,children:r}):null,(0,_.jsx)(`div`,{className:d,children:e})]})})),v.displayName=`ErrorPage`;try{v.displayName=`ErrorPage`,v.__docgenInfo={description:``,displayName:`ErrorPage`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/pages/error-page/error-page.tsx`,methods:[],props:{actions:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/pages/error-page/error-page.tsx`,name:`TypeLiteral`}],description:``,name:`actions`,required:!0,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/pages/error-page/error-page.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!0,tags:{},type:{name:`ReactNode`}},details:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/pages/error-page/error-page.tsx`,name:`TypeLiteral`}],description:``,name:`details`,required:!1,tags:{},type:{name:`ReactNode`}},standalone:{defaultValue:{value:`false`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/pages/error-page/error-page.tsx`,name:`TypeLiteral`}],description:``,name:`standalone`,required:!1,tags:{},type:{name:`boolean | undefined`}},support:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/pages/error-page/error-page.tsx`,name:`TypeLiteral`}],description:``,name:`support`,required:!1,tags:{},type:{name:`ReactNode`}},title:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/pages/error-page/error-page.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!0,tags:{},type:{name:`ReactNode`}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/pages/error-page/error-page.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}}},tags:{}}}catch{}})))()}var b,x,S,C,w,T,E;function D(){return(D=e((()=>{a(),y(),b=n(),x={title:`Primitives/Pages/ErrorPage`,component:v,tags:[`autodocs`],decorators:[e=>(0,b.jsx)(`div`,{className:`min-h-dvh [--header-height:0rem]`,children:(0,b.jsx)(e,{})})],parameters:{layout:`fullscreen`,docs:{description:{component:`페이지 오류를 위한 500 레이아웃입니다. 자세한 오류 정보와 도움말, 재시도·이동 동작은 소비자가 구성합니다. standalone은 앱 헤더가 없는 최상위 오류 경계에서 사용합니다.`}}}},S=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{type:`button`,size:`lg`,children:`다시 시도`}),(0,b.jsx)(o,{type:`button`,size:`lg`,variant:`secondary`,children:`홈으로`})]}),C={args:{title:`오류가 발생했습니다`,description:(0,b.jsxs)(b.Fragment,{children:[`일시적인 시스템 오류가 발생했습니다.`,(0,b.jsx)(`br`,{}),`잠시 후 다시 시도해주세요.`]}),support:(0,b.jsxs)(b.Fragment,{children:[`문제가 계속되면 `,(0,b.jsx)(`a`,{href:`mailto:support@example.com`,children:`문의하기`}),`를 이용해 주세요.`]}),details:(0,b.jsx)(o,{type:`button`,size:`sm`,variant:`secondary`,children:`오류 번호 복사`}),actions:S}},w={...C,args:{...C.args,standalone:!0,title:`페이지를 불러올 수 없습니다`}},T={...C,decorators:[e=>(0,b.jsx)(`div`,{className:`dark`,children:(0,b.jsx)(e,{})})]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: '오류가 발생했습니다',
    description: <>
        일시적인 시스템 오류가 발생했습니다.
        <br />
        잠시 후 다시 시도해주세요.
      </>,
    support: <>
        문제가 계속되면 <a href="mailto:support@example.com">문의하기</a>를
        이용해 주세요.
      </>,
    details: <Button type="button" size="sm" variant="secondary">
        오류 번호 복사
      </Button>,
    actions
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...RouteError,
  args: {
    ...RouteError.args,
    standalone: true,
    title: '페이지를 불러올 수 없습니다'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...RouteError,
  decorators: [Story => <div className="dark">
        <Story />
      </div>]
}`,...T.parameters?.docs?.source}}},E=[`RouteError`,`Standalone`,`Dark`]})))()}D();export{T as Dark,C as RouteError,w as Standalone,E as __namedExportsOrder,x as default};