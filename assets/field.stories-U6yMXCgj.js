import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-BmCVMZjn.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{r,t as i}from"./dist-BQI90tbb.js";import{n as a,t as o}from"./input-R8IdKes1.js";import{a as s,t as c}from"./dist-BJEh9qCG.js";import{n as l,t as u}from"./label-C8boC9Sf.js";import{n as d,t as f}from"./checkbox-BSkq8yLC.js";import{i as p,n as m,r as h,t as g}from"./radio-group-C00F0W78.js";import{a as _,d as v,i as y,l as b,n as x,o as S,r as C,t as w,u as T}from"./select-trigger-LgItTjO6.js";import{n as E,t as D}from"./switch-BdgnBRBp.js";import{n as O,t as k}from"./textarea-BN8s57On.js";var A,j,M;function N(){return(N=e((()=>{A=t(),j=(0,A.createContext)(null),M=()=>{let e=(0,A.useContext)(j);if(!e)throw Error(`Field parts must be rendered inside Field`);return e};try{j.displayName=`FieldContext`,j.__docgenInfo={description:``,displayName:`FieldContext`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/forms/field/provider.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{r(),s(),P=t(),l(),N(),F=n(),I=(e,t)=>P.Children.toArray(e).some(e=>(0,P.isValidElement)(e)&&(e.type===t||e.type===P.Fragment&&I(e.props.children,t))),L=(0,P.forwardRef)(({children:e,className:t,invalid:n=!1,required:r=!1,...a},o)=>{let s=(0,P.useId)(),[c,l]=(0,P.useState)(!1),[u,d]=(0,P.useState)(!1),f=I(e,B)||c,p=I(e,V)||u,m=(0,P.useMemo)(()=>({controlId:`${s}-control`,descriptionId:`${s}-description`,errorId:`${s}-error`,hasDescription:f,hasError:p,invalid:n,required:r,setHasDescription:l,setHasError:d}),[s,f,p,n,r]);return(0,F.jsx)(j.Provider,{value:m,children:(0,F.jsx)(`div`,{...a,className:[i(`field`),`grid min-w-0 gap-[var(--space-2)]`,t].filter(Boolean).join(` `),"data-slot":`field`,ref:o,children:e})})}),L.displayName=`Field`,R=(0,P.forwardRef)(({requiredIndicator:e,...t},n)=>{let{controlId:r,required:a}=M();return(0,F.jsx)(u,{...t,className:[i(`field`,{part:`label`}),t.className].filter(Boolean).join(` `),htmlFor:r,ref:n,requiredIndicator:e??a})}),R.displayName=`FieldLabel`,z=(0,P.forwardRef)(({children:e,"aria-describedby":t,"aria-invalid":n,"aria-required":r},i)=>{let a=M(),o=[t,a.hasDescription?a.descriptionId:void 0,a.invalid&&a.hasError?a.errorId:void 0].filter(Boolean).join(` `);return(0,F.jsx)(c,{"aria-describedby":o||void 0,"aria-invalid":a.invalid||n||void 0,"aria-required":a.required||r||void 0,id:a.controlId,ref:i,children:e})}),z.displayName=`FieldControl`,B=(0,P.forwardRef)(({className:e,...t},n)=>{let{descriptionId:r,setHasDescription:a}=M();return(0,P.useEffect)(()=>(a(!0),()=>a(!1)),[a]),(0,F.jsx)(`p`,{...t,className:[i(`field`,{part:`description`}),`text-sm text-[var(--color-content-secondary)]`,e].filter(Boolean).join(` `),"data-slot":`field-description`,id:r,ref:n})}),B.displayName=`FieldDescription`,V=(0,P.forwardRef)(({className:e,...t},n)=>{let{errorId:r,invalid:a,setHasError:o}=M();return(0,P.useEffect)(()=>{if(a)return o(!0),()=>o(!1)},[a,o]),a?(0,F.jsx)(`p`,{...t,className:[i(`field`,{part:`error`}),`text-sm text-[var(--color-feedback-danger-container-foreground)]`,e].filter(Boolean).join(` `),"data-slot":`field-error`,id:r,ref:n}):null}),V.displayName=`FieldError`;try{L.displayName=`Field`,L.__docgenInfo={description:``,displayName:`Field`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/forms/field/field.tsx`,methods:[],props:{invalid:{defaultValue:{value:`false`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:``,name:`invalid`,required:!1,tags:{},type:{name:`boolean | undefined`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean | undefined`}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}}},tags:{}}}catch{}try{R.displayName=`FieldLabel`,R.__docgenInfo={description:``,displayName:`FieldLabel`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/forms/field/field.tsx`,methods:[],props:{requiredIndicator:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/label/label.tsx`,name:`LabelProps`}],description:``,name:`requiredIndicator`,parent:{fileName:`jlca-design-system/packages/primitives/src/forms/label/label.tsx`,name:`LabelProps`},required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{z.displayName=`FieldControl`,z.__docgenInfo={description:``,displayName:`FieldControl`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/forms/field/field.tsx`,methods:[],props:{asChild:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:`Pass ID and ARIA description overrides here; the slotted child must not set them.`,name:`asChild`,required:!0,tags:{},type:{name:`true`}},"aria-describedby":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:``,name:`aria-describedby`,required:!1,tags:{},type:{name:`string | undefined`}},"aria-invalid":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:``,name:`aria-invalid`,required:!1,tags:{},type:{name:`boolean | "true" | "false" | undefined`}},"aria-required":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:``,name:`aria-required`,required:!1,tags:{},type:{name:`boolean | "true" | "false" | undefined`}}},tags:{}}}catch{}try{B.displayName=`FieldDescription`,B.__docgenInfo={description:``,displayName:`FieldDescription`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/forms/field/field.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}}},tags:{}}}catch{}try{V.displayName=`FieldError`,V.__docgenInfo={description:``,displayName:`FieldError`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/forms/field/field.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/forms/field/field.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}}},tags:{}}}catch{}})))()}var U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{U=t(),d(),a(),l(),p(),m(),v(),S(),y(),x(),O(),E(),H(),W=n(),G={title:`Primitives/Forms/Field`,component:L,parameters:{layout:`centered`,docs:{description:{component:`Field connects one focusable control to its visible label, description, and error. The application owns validation and submission. Use native fieldset/legend for groups of controls.`}}},tags:[`autodocs`]},K={render:()=>(0,W.jsxs)(L,{className:`w-80`,required:!0,children:[(0,W.jsx)(R,{children:`이메일`}),(0,W.jsx)(z,{asChild:!0,children:(0,W.jsx)(o,{placeholder:`name@example.com`,required:!0,type:`email`})}),(0,W.jsx)(B,{children:`확인 메시지를 받을 주소입니다.`})]})},q={render:()=>(0,W.jsxs)(L,{className:`w-80`,invalid:!0,children:[(0,W.jsx)(R,{children:`리뷰`}),(0,W.jsx)(z,{asChild:!0,children:(0,W.jsx)(k,{rows:4})}),(0,W.jsx)(B,{children:`구체적인 경험을 적어 주세요.`}),(0,W.jsx)(V,{children:`리뷰를 입력해 주세요.`})]})},J={render:()=>(0,W.jsxs)(L,{className:`w-80`,invalid:!0,required:!0,children:[(0,W.jsx)(R,{children:`지역`}),(0,W.jsxs)(b,{name:`region`,required:!0,children:[(0,W.jsx)(z,{asChild:!0,children:(0,W.jsx)(w,{children:(0,W.jsx)(T,{placeholder:`지역 선택`})})}),(0,W.jsxs)(_,{children:[(0,W.jsx)(C,{value:`seoul`,children:`서울`}),(0,W.jsx)(C,{value:`busan`,children:`부산`})]})]}),(0,W.jsx)(V,{children:`지역을 선택해 주세요.`})]})},Y={render:function(){let[e,t]=(0,U.useState)(!1);return(0,W.jsxs)(`div`,{className:`w-80 space-y-4`,children:[(0,W.jsxs)(L,{invalid:e,children:[(0,W.jsx)(R,{children:`이름`}),(0,W.jsx)(z,{asChild:!0,children:(0,W.jsx)(o,{})}),(0,W.jsx)(B,{children:`화면에 표시될 이름입니다.`}),(0,W.jsx)(V,{children:`이름을 입력해 주세요.`})]}),(0,W.jsx)(f,{"aria-label":`오류 상태 표시`,checked:e,onCheckedChange:e=>t(e===!0)})]})}},X={render:()=>(0,W.jsxs)(`div`,{className:`w-80 space-y-6`,children:[(0,W.jsxs)(L,{required:!0,children:[(0,W.jsx)(R,{children:`약관 동의`}),(0,W.jsx)(z,{asChild:!0,children:(0,W.jsx)(f,{required:!0})}),(0,W.jsx)(B,{children:`계속하려면 동의해 주세요.`})]}),(0,W.jsxs)(L,{children:[(0,W.jsx)(R,{children:`알림 받기`}),(0,W.jsx)(z,{asChild:!0,children:(0,W.jsx)(D,{})})]}),(0,W.jsxs)(`fieldset`,{className:`space-y-2`,children:[(0,W.jsx)(`legend`,{className:`text-sm font-medium`,children:`연락 방법`}),(0,W.jsxs)(g,{"aria-label":`연락 방법`,defaultValue:`email`,children:[(0,W.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,W.jsx)(h,{id:`contact-email`,value:`email`}),(0,W.jsx)(u,{htmlFor:`contact-email`,children:`이메일`})]}),(0,W.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,W.jsx)(h,{id:`contact-phone`,value:`phone`}),(0,W.jsx)(u,{htmlFor:`contact-phone`,children:`전화`})]})]})]})]})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Field className="w-80" required>
      <FieldLabel>이메일</FieldLabel>
      <FieldControl asChild>
        <Input placeholder="name@example.com" required type="email" />
      </FieldControl>
      <FieldDescription>확인 메시지를 받을 주소입니다.</FieldDescription>
    </Field>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Field className="w-80" invalid>
      <FieldLabel>리뷰</FieldLabel>
      <FieldControl asChild>
        <Textarea rows={4} />
      </FieldControl>
      <FieldDescription>구체적인 경험을 적어 주세요.</FieldDescription>
      <FieldError>리뷰를 입력해 주세요.</FieldError>
    </Field>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Field className="w-80" invalid required>
      <FieldLabel>지역</FieldLabel>
      <Select name="region" required>
        <FieldControl asChild>
          <SelectTrigger>
            <SelectValue placeholder="지역 선택" />
          </SelectTrigger>
        </FieldControl>
        <SelectContent>
          <SelectOption value="seoul">서울</SelectOption>
          <SelectOption value="busan">부산</SelectOption>
        </SelectContent>
      </Select>
      <FieldError>지역을 선택해 주세요.</FieldError>
    </Field>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function DynamicErrorStory() {
    const [invalid, setInvalid] = useState(false);
    return <div className="w-80 space-y-4">
        <Field invalid={invalid}>
          <FieldLabel>이름</FieldLabel>
          <FieldControl asChild>
            <Input />
          </FieldControl>
          <FieldDescription>화면에 표시될 이름입니다.</FieldDescription>
          <FieldError>이름을 입력해 주세요.</FieldError>
        </Field>
        <Checkbox aria-label="오류 상태 표시" checked={invalid} onCheckedChange={checked => setInvalid(checked === true)} />
      </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-6">
      <Field required>
        <FieldLabel>약관 동의</FieldLabel>
        <FieldControl asChild>
          <Checkbox required />
        </FieldControl>
        <FieldDescription>계속하려면 동의해 주세요.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel>알림 받기</FieldLabel>
        <FieldControl asChild>
          <Switch />
        </FieldControl>
      </Field>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">연락 방법</legend>
        <RadioGroup aria-label="연락 방법" defaultValue="email">
          <div className="flex items-center gap-2">
            <Radio id="contact-email" value="email" />
            <Label htmlFor="contact-email">이메일</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="contact-phone" value="phone" />
            <Label htmlFor="contact-phone">전화</Label>
          </div>
        </RadioGroup>
      </fieldset>
    </div>
}`,...X.parameters?.docs?.source}}},Z=[`InputWithHelp`,`InvalidTextarea`,`SelectWithError`,`DynamicError`,`ChoiceControls`]})))()}Q();export{X as ChoiceControls,Y as DynamicError,K as InputWithHelp,q as InvalidTextarea,J as SelectWithError,Z as __namedExportsOrder,G as default};