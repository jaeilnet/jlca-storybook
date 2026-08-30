import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-C3J99paL.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./stack-B-COTSVz.js";import{n as a,t as o}from"./box-34QNYOgX.js";import{n as s,t as c}from"./form-control.styles-Dbs-J7Wq.js";var l;function u(){return(u=e((()=>{s(),l=({className:e}={})=>c(`flex h-10 px-3 py-2 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--color-content-primary)] ${e??``}`);try{l.displayName=`inputVariants`,l.__docgenInfo={description:``,displayName:`inputVariants`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/input/input.styles.ts`,methods:[],props:{className:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/input/input.types.ts`,name:`TypeLiteral`}],description:``,name:`className`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}var d,f,p;function m(){return(m=e((()=>{d=t(),u(),f=n(),p=(0,d.forwardRef)(({className:e,type:t,...n},r)=>(0,f.jsx)(`input`,{...n,className:l({className:e}),"data-slot":`input`,ref:r,type:t})),p.displayName=`Input`;try{p.displayName=`Input`,p.__docgenInfo={description:``,displayName:`Input`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/input/input.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{a(),r(),m(),h=n(),g={title:`Primitives/Input`,component:p,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{type:{control:`select`,options:[`text`,`email`,`password`,`number`,`tel`,`url`,`search`],description:`Native input type`},disabled:{control:`boolean`,description:`Disable native input interactions`},readOnly:{control:`boolean`,description:`Keep the value readable without allowing edits`}}},_={args:{"aria-label":`기본 입력`,placeholder:`내용을 입력하세요`}},v={render:()=>(0,h.jsxs)(i,{gap:`3`,style:{width:`20rem`},children:[(0,h.jsx)(p,{"aria-label":`기본 입력`,placeholder:`Default`}),(0,h.jsx)(p,{"aria-label":`오류 입력`,"aria-invalid":!0,placeholder:`Invalid`}),(0,h.jsx)(p,{"aria-label":`비활성 입력`,disabled:!0,value:`Disabled`,readOnly:!0}),(0,h.jsx)(p,{"aria-label":`읽기 전용 입력`,readOnly:!0,value:`Read only`})]})},y={render:()=>(0,h.jsxs)(i,{gap:`2`,style:{width:`20rem`},children:[(0,h.jsx)(o,{as:`label`,className:`text-sm font-medium`,foreground:`content.secondary`,htmlFor:`storybook-email`,children:`이메일`}),(0,h.jsx)(p,{id:`storybook-email`,placeholder:`email@example.com`,type:`email`})]})},b={args:{"aria-label":`파일 업로드`,type:`file`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '기본 입력',
    'placeholder': '내용을 입력하세요'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="3" style={{
    width: '20rem'
  }}>
      <Input aria-label="기본 입력" placeholder="Default" />
      <Input aria-label="오류 입력" aria-invalid placeholder="Invalid" />
      <Input aria-label="비활성 입력" disabled value="Disabled" readOnly />
      <Input aria-label="읽기 전용 입력" readOnly value="Read only" />
    </Stack>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="2" style={{
    width: '20rem'
  }}>
      <Box as="label" className="text-sm font-medium" foreground="content.secondary" htmlFor="storybook-email">
        이메일
      </Box>
      <Input id="storybook-email" placeholder="email@example.com" type="email" />
    </Stack>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    'aria-label': '파일 업로드',
    'type': 'file'
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`States`,`WithLabel`,`FileUpload`]})))()}S();export{_ as Default,b as FileUpload,v as States,y as WithLabel,x as __namedExportsOrder,g as default};