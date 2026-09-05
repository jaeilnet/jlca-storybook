import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./box-34QNYOgX.js";import{n as i,t as a}from"./stack-BU6ic646.js";import{n as o,t as s}from"./text-CQ8zwnSk.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{c={compact:{paddingBlock:`var(--table-density-compact-padding-block)`,paddingInline:`var(--table-density-compact-padding-inline)`},default:{paddingBlock:`var(--table-density-default-padding-block)`,paddingInline:`var(--table-density-default-padding-inline)`},relaxed:{paddingBlock:`var(--table-density-relaxed-padding-block)`,paddingInline:`var(--table-density-relaxed-padding-inline)`}},l={grid:{cell:`0.0625rem`,row:`0`},none:{cell:`0`,row:`0`},rows:{cell:`0`,row:`0.0625rem`}},u=`[&_[data-slot=table-body]>[data-slot=table-row]:nth-child(even)]:!bg-[var(--color-surface-subtle)]`,d=`!overflow-hidden !rounded-[var(--table-frame-radius)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:h-[var(--table-header-height)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:!bg-[var(--color-surface-subtle)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:!text-center [&_[data-slot=table-header]_[data-slot=table-header-cell]]:!text-[length:var(--table-header-font-size)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:!text-[var(--color-content-muted)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:![letter-spacing:var(--table-header-letter-spacing)] [&_[data-slot=table-body]>[data-slot=table-row]]:transition-colors [&_[data-slot=table-body]>[data-slot=table-row]]:duration-fast [&_[data-slot=table-body]>[data-slot=table-row]]:ease-standard [&_[data-slot=table-body]>[data-slot=table-row]:hover]:!bg-[var(--color-surface-subtle)] [&_[data-slot=table-body]>[data-slot=table-row]:last-child]:!border-b-0 motion-reduce:[&_[data-slot=table-body]>[data-slot=table-row]]:transition-none motion-reduce:[&_[data-slot=table-body]>[data-slot=table-row]]:duration-0`,f=`!border !border-solid !border-[var(--color-border-default)] !shadow-[var(--table-frame-shadow)] [&_[data-slot=table-header]>[data-slot=table-row]]:!border-[var(--color-border-default)]`,p=(e,t=!1,n=`rows`)=>[e,d,n!==`none`&&f,t&&u].filter(Boolean).join(` `),m=({borders:e=`rows`,density:t=`default`,layout:n=`auto`,style:r})=>({...r,"--table-cell-border-width":l[e].cell,"--table-cell-padding-block":c[t].paddingBlock,"--table-cell-padding-inline":c[t].paddingInline,"--table-row-border-width":l[e].row,backgroundColor:`var(--color-surface-default)`,borderCollapse:`collapse`,borderSpacing:0,color:`var(--color-content-primary)`,fontFamily:`var(--font-family-sans)`,fontSize:`var(--table-font-size)`,fontStyle:`normal`,fontWeight:`var(--font-weight-regular)`,letterSpacing:`var(--letter-spacing-default)`,lineHeight:`var(--table-line-height)`,tableLayout:n,width:`100%`}),h=(e=`top`,t)=>({...t,captionSide:e,color:`var(--color-content-secondary)`,fontFamily:`var(--font-family-sans)`,fontSize:`var(--table-font-size)`,fontStyle:`normal`,fontWeight:`var(--font-weight-medium)`,letterSpacing:`var(--letter-spacing-default)`,lineHeight:`var(--table-line-height)`,paddingBlock:`var(--table-caption-gap)`,textAlign:`start`}),g=e=>({...e}),_=e=>({...e,backgroundColor:`var(--color-surface-subtle)`,color:`var(--color-content-primary)`,fontFamily:`var(--font-family-sans)`,fontSize:`var(--table-font-size)`,fontStyle:`normal`,fontWeight:`var(--table-header-font-weight)`,letterSpacing:`var(--letter-spacing-default)`,lineHeight:`var(--table-line-height)`}),v=e=>({...e,backgroundColor:`transparent`,borderBlockEndColor:`var(--color-border-subtle)`,borderBlockEndStyle:`solid`,borderBlockEndWidth:`var(--table-row-border-width)`}),y=({align:e=`start`,header:t=!1,style:n,verticalAlign:r=`middle`})=>({...n,borderColor:`var(--color-border-default)`,borderStyle:`solid`,borderWidth:`var(--table-cell-border-width)`,color:`var(--color-content-primary)`,fontFamily:`var(--font-family-sans)`,fontSize:`var(--table-font-size)`,fontStyle:`normal`,fontWeight:t?`var(--table-header-font-weight)`:`var(--font-weight-regular)`,letterSpacing:`var(--letter-spacing-default)`,lineHeight:`var(--table-line-height)`,paddingBlock:`var(--table-cell-padding-block)`,paddingInline:`var(--table-cell-padding-inline)`,textAlign:e,verticalAlign:r}),b=`outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-default)] forced-colors:focus-visible:outline-2 forced-colors:focus-visible:outline-solid forced-colors:focus-visible:outline-[CanvasText] forced-colors:focus-visible:ring-0`,x=e=>[e,b].filter(Boolean).join(` `),S=e=>({...e,maxWidth:`100%`,overflowX:`auto`,WebkitOverflowScrolling:`touch`});try{m.displayName=`tableStyles`,m.__docgenInfo={description:``,displayName:`tableStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.styles.ts`,methods:[],props:{borders:{defaultValue:{value:`rows`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.styles.ts`,name:`TypeLiteral`}],description:``,name:`borders`,required:!1,tags:{},type:{name:`enum`,raw:`TableBorders | undefined`,value:[{value:`undefined`},{value:`"grid"`},{value:`"none"`},{value:`"rows"`}]}},density:{defaultValue:{value:`default`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.styles.ts`,name:`TypeLiteral`}],description:``,name:`density`,required:!1,tags:{},type:{name:`enum`,raw:`TableDensity | undefined`,value:[{value:`undefined`},{value:`"compact"`},{value:`"default"`},{value:`"relaxed"`}]}},layout:{defaultValue:{value:`auto`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.styles.ts`,name:`TypeLiteral`}],description:``,name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`TableLayout | undefined`,value:[{value:`undefined`},{value:`"auto"`},{value:`"fixed"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.styles.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableStyle | undefined`}}},tags:{}}}catch{}try{g.displayName=`tableColumnStyles`,g.__docgenInfo={description:``,displayName:`tableColumnStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.styles.ts`,methods:[],props:{},tags:{}}}catch{}try{_.displayName=`tableFooterStyles`,_.__docgenInfo={description:``,displayName:`tableFooterStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.styles.ts`,methods:[],props:{},tags:{}}}catch{}try{v.displayName=`tableRowStyles`,v.__docgenInfo={description:``,displayName:`tableRowStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.styles.ts`,methods:[],props:{},tags:{}}}catch{}try{y.displayName=`tableCellStyles`,y.__docgenInfo={description:``,displayName:`tableCellStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.styles.ts`,methods:[],props:{align:{defaultValue:{value:`start`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.styles.ts`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellAlign | undefined`,value:[{value:`undefined`},{value:`"center"`},{value:`"start"`},{value:`"end"`}]}},header:{defaultValue:{value:`false`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.styles.ts`,name:`TypeLiteral`}],description:``,name:`header`,required:!1,tags:{},type:{name:`boolean | undefined`}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.styles.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableCellStyle | undefined`}},verticalAlign:{defaultValue:{value:`middle`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.styles.ts`,name:`TypeLiteral`}],description:``,name:`verticalAlign`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellVerticalAlign | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"top"`},{value:`"middle"`}]}}},tags:{}}}catch{}try{x.displayName=`tableScrollAreaClassName`,x.__docgenInfo={description:``,displayName:`tableScrollAreaClassName`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.styles.ts`,methods:[],props:{},tags:{}}}catch{}try{S.displayName=`tableScrollAreaStyles`,S.__docgenInfo={description:``,displayName:`tableScrollAreaStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.styles.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=e((()=>{C(),w=t(),T=({borders:e,className:t,density:n,layout:r,ref:i,striped:a,style:o,...s})=>(0,w.jsx)(`table`,{...s,className:p(t,a,e),"data-slot":`table`,ref:i,style:m({borders:e,density:n,layout:r,style:o})}),E=({ref:e,side:t,style:n,...r})=>(0,w.jsx)(`caption`,{...r,"data-slot":`table-caption`,ref:e,style:h(t,n)}),D=({ref:e,...t})=>(0,w.jsx)(`colgroup`,{...t,"data-slot":`table-column-group`,ref:e}),O=({ref:e,style:t,...n})=>(0,w.jsx)(`col`,{...n,"data-slot":`table-column`,ref:e,style:g(t)}),k=({ref:e,...t})=>(0,w.jsx)(`thead`,{...t,"data-slot":`table-header`,ref:e}),A=({ref:e,...t})=>(0,w.jsx)(`tbody`,{...t,"data-slot":`table-body`,ref:e}),j=({ref:e,style:t,...n})=>(0,w.jsx)(`tfoot`,{...n,"data-slot":`table-footer`,ref:e,style:_(t)}),M=({ref:e,style:t,...n})=>(0,w.jsx)(`tr`,{...n,"data-slot":`table-row`,ref:e,style:v(t)}),N=({align:e,ref:t,scope:n,style:r,verticalAlign:i,...a})=>(0,w.jsx)(`th`,{...a,"data-slot":`table-header-cell`,ref:t,scope:n,style:y({align:e,header:!0,style:r,verticalAlign:i})}),P=({align:e,ref:t,style:n,verticalAlign:r,...i})=>(0,w.jsx)(`td`,{...i,"data-slot":`table-cell`,ref:t,style:y({align:e,style:n,verticalAlign:r})}),F=({className:e,ref:t,role:n,style:r,tabIndex:i,...a})=>(0,w.jsx)(`div`,{...a,className:x(e),"data-slot":`table-scroll-area`,ref:t,role:`region`,style:S(r),tabIndex:i??0});try{T.displayName=`Table`,T.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{borders:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`borders`,required:!1,tags:{},type:{name:`enum`,raw:`TableBorders | undefined`,value:[{value:`undefined`},{value:`"grid"`},{value:`"none"`},{value:`"rows"`}]}},density:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`density`,required:!1,tags:{},type:{name:`enum`,raw:`TableDensity | undefined`,value:[{value:`undefined`},{value:`"compact"`},{value:`"default"`},{value:`"relaxed"`}]}},layout:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`TableLayout | undefined`,value:[{value:`undefined`},{value:`"auto"`},{value:`"fixed"`}]}},striped:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`striped`,required:!1,tags:{},type:{name:`boolean | undefined`}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableStyle | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableElement> | undefined`}}},tags:{}}}catch{}try{E.displayName=`TableCaption`,E.__docgenInfo={description:``,displayName:`TableCaption`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{side:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`side`,required:!1,tags:{},type:{name:`enum`,raw:`TableCaptionSide | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"top"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableCaptionStyle | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement> | undefined`}}},tags:{}}}catch{}try{D.displayName=`TableColumnGroup`,D.__docgenInfo={description:``,displayName:`TableColumnGroup`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableColElement> | undefined`}}},tags:{}}}catch{}try{O.displayName=`TableColumn`,O.__docgenInfo={description:``,displayName:`TableColumn`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableColumnStyle | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableColElement> | undefined`}}},tags:{}}}catch{}try{k.displayName=`TableHeader`,k.__docgenInfo={description:``,displayName:`TableHeader`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableSectionElement> | undefined`}}},tags:{}}}catch{}try{A.displayName=`TableBody`,A.__docgenInfo={description:``,displayName:`TableBody`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableSectionElement> | undefined`}}},tags:{}}}catch{}try{j.displayName=`TableFooter`,j.__docgenInfo={description:``,displayName:`TableFooter`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableFooterStyle | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableSectionElement> | undefined`}}},tags:{}}}catch{}try{M.displayName=`TableRow`,M.__docgenInfo={description:``,displayName:`TableRow`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableRowStyle | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableRowElement> | undefined`}}},tags:{}}}catch{}try{N.displayName=`TableHeaderCell`,N.__docgenInfo={description:``,displayName:`TableHeaderCell`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{align:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellAlign | undefined`,value:[{value:`undefined`},{value:`"center"`},{value:`"start"`},{value:`"end"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableCellStyle | undefined`}},verticalAlign:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`verticalAlign`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellVerticalAlign | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"top"`},{value:`"middle"`}]}},abbr:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`abbr`,required:!1,tags:{},type:{name:`string | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableHeaderCellElement> | undefined`}},scope:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`scope`,required:!0,tags:{},type:{name:`enum`,raw:`"col" | "colgroup" | "row" | "rowgroup"`,value:[{value:`"col"`},{value:`"colgroup"`},{value:`"row"`},{value:`"rowgroup"`}]}}},tags:{}}}catch{}try{P.displayName=`TableCell`,P.__docgenInfo={description:``,displayName:`TableCell`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{align:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellAlign | undefined`,value:[{value:`undefined`},{value:`"center"`},{value:`"start"`},{value:`"end"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableCellStyle | undefined`}},verticalAlign:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`verticalAlign`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellVerticalAlign | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"top"`},{value:`"middle"`}]}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableDataCellElement> | undefined`}}},tags:{}}}catch{}try{F.displayName=`TableScrollArea`,F.__docgenInfo={description:``,displayName:`TableScrollArea`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/table/table.tsx`,methods:[],props:{"aria-label":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`},{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`aria-label`,required:!1,tags:{},type:{name:`string | undefined`}},"aria-labelledby":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`},{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`aria-labelledby`,required:!1,tags:{},type:{name:`string | undefined`}},role:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`role`,required:!1,tags:{},type:{name:`enum`,raw:`"region" | undefined`,value:[{value:`undefined`},{value:`"region"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableScrollAreaStyle | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/table/table.types.ts`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}}},tags:{}}}catch{}})))()}var L,R,z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{n(),i(),o(),I(),L=t(),R={title:`Primitives/Data Display/Table`,component:T,tags:[`autodocs`],parameters:{docs:{description:{component:`Usage: 논리적인 행·열 관계가 있는 정적 데이터를 native table, caption, scope와 header association으로 표현합니다. Non-usage: 페이지 배치, 카드 모음, editable spreadsheet, sorting·pagination·data fetching은 Table 책임이 아닙니다. 좁은 화면에서도 table DOM을 card로 바꾸지 않고, 필요한 경우 accessible name을 가진 TableScrollArea를 명시적으로 조합합니다. Interactive DataGrid는 별도 keyboard·focus·state 설계가 필요한 독립 family입니다. Canonical API는 @jaeilnet/design-primitives입니다.`}}}},z={render:()=>(0,L.jsxs)(T,{children:[(0,L.jsx)(E,{children:`분기별 제품 매출`}),(0,L.jsxs)(D,{children:[(0,L.jsx)(O,{style:{width:`40%`}}),(0,L.jsx)(O,{span:2})]}),(0,L.jsx)(k,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`col`,children:`제품`}),(0,L.jsx)(N,{align:`end`,scope:`col`,children:`1분기`}),(0,L.jsx)(N,{align:`end`,scope:`col`,children:`2분기`})]})}),(0,L.jsxs)(A,{children:[(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`row`,children:`Starter`}),(0,L.jsx)(P,{align:`end`,children:`₩42,000,000`}),(0,L.jsx)(P,{align:`end`,children:`₩48,000,000`})]}),(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`row`,children:`Professional`}),(0,L.jsx)(P,{align:`end`,children:`₩68,000,000`}),(0,L.jsx)(P,{align:`end`,children:`₩75,000,000`})]})]}),(0,L.jsx)(j,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`row`,children:`합계`}),(0,L.jsx)(P,{align:`end`,children:`₩110,000,000`}),(0,L.jsx)(P,{align:`end`,children:`₩123,000,000`})]})})]})},B={render:()=>(0,L.jsxs)(r,{style:{maxWidth:`48rem`,width:`calc(100vw - (2 * var(--space-4)))`},children:[(0,L.jsx)(s,{style:{marginBlockEnd:`var(--space-2)`},tone:`secondary`,weight:`semibold`,children:`서울`}),(0,L.jsxs)(T,{children:[(0,L.jsx)(E,{className:`sr-only`,children:`당첨 판매점 예시`}),(0,L.jsxs)(D,{children:[(0,L.jsx)(O,{style:{width:`20%`}}),(0,L.jsx)(O,{style:{width:`20%`}}),(0,L.jsx)(O,{style:{width:`40%`}}),(0,L.jsx)(O,{style:{width:`20%`}})]}),(0,L.jsx)(k,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`col`,children:`시`}),(0,L.jsx)(N,{scope:`col`,children:`구`}),(0,L.jsx)(N,{scope:`col`,children:`판매점`}),(0,L.jsx)(N,{scope:`col`,children:`구분`})]})}),(0,L.jsxs)(A,{children:[(0,L.jsxs)(M,{children:[(0,L.jsx)(P,{align:`center`,children:(0,L.jsx)(s,{weight:`medium`,children:`서울특별시`})}),(0,L.jsx)(P,{align:`center`,children:(0,L.jsx)(s,{tone:`muted`,children:`노원구`})}),(0,L.jsx)(P,{align:`center`,children:(0,L.jsx)(s,{weight:`medium`,children:`행운당`})}),(0,L.jsx)(P,{align:`center`,children:`자동`})]}),(0,L.jsxs)(M,{children:[(0,L.jsx)(P,{align:`center`,children:(0,L.jsx)(s,{weight:`medium`,children:`서울특별시`})}),(0,L.jsx)(P,{align:`center`,children:(0,L.jsx)(s,{tone:`muted`,children:`마포구`})}),(0,L.jsx)(P,{align:`center`,children:(0,L.jsx)(s,{weight:`medium`,children:`세명복권`})}),(0,L.jsx)(P,{align:`center`,children:`수동`})]})]})]})]}),parameters:{docs:{description:{story:`로또헌터 당첨 판매점 표에서 확인된 framed surface, subtle header, centered columns, row divider와 hover 표현을 제품 동작 없이 재현합니다. 좁은 화면의 카드 목록 전환과 당첨 구분 라벨은 소비자 책임입니다.`}}}},V={render:()=>(0,L.jsx)(a,{gap:`5`,children:[`compact`,`default`,`relaxed`].map(e=>(0,L.jsxs)(r,{children:[(0,L.jsx)(s,{tone:`secondary`,weight:`semibold`,children:e}),(0,L.jsxs)(T,{density:e,children:[(0,L.jsx)(k,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`col`,children:`상태`}),(0,L.jsx)(N,{scope:`col`,children:`담당`})]})}),(0,L.jsx)(A,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(P,{children:`검토 중`}),(0,L.jsx)(P,{children:`Design System`})]})})]})]},e))})},H={render:()=>(0,L.jsx)(a,{gap:`6`,children:[`none`,`rows`,`grid`].map(e=>(0,L.jsxs)(r,{children:[(0,L.jsx)(s,{tone:`secondary`,weight:`semibold`,children:e}),(0,L.jsxs)(T,{borders:e,striped:e===`grid`,children:[(0,L.jsx)(k,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`col`,children:`토큰`}),(0,L.jsx)(N,{scope:`col`,children:`상태`})]})}),(0,L.jsxs)(A,{children:[(0,L.jsxs)(M,{children:[(0,L.jsx)(P,{children:`surface.default`}),(0,L.jsx)(P,{children:`준비됨`})]}),(0,L.jsxs)(M,{children:[(0,L.jsx)(P,{children:`border.default`}),(0,L.jsx)(P,{children:`준비됨`})]})]})]})]},e))})},U={render:()=>(0,L.jsxs)(T,{children:[(0,L.jsx)(E,{children:`팀별 접근성 점검 결과`}),(0,L.jsx)(k,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`col`,children:`팀`}),(0,L.jsx)(N,{align:`center`,scope:`col`,children:`Keyboard`}),(0,L.jsx)(N,{align:`center`,scope:`col`,children:`Screen reader`})]})}),(0,L.jsxs)(A,{children:[(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`row`,children:`Core UI`}),(0,L.jsx)(P,{align:`center`,children:`통과`}),(0,L.jsx)(P,{align:`center`,children:`통과`})]}),(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`row`,children:`Product View`}),(0,L.jsx)(P,{align:`center`,children:`검토 중`}),(0,L.jsx)(P,{align:`center`,children:`통과`})]})]})]})},W={render:()=>(0,L.jsxs)(T,{"aria-describedby":`complex-table-note`,children:[(0,L.jsx)(E,{children:`2026년 반기별 제품 실적`}),(0,L.jsxs)(k,{children:[(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{id:`product`,rowSpan:2,scope:`col`,children:`제품`}),(0,L.jsx)(N,{colSpan:2,id:`first-half`,scope:`colgroup`,children:`상반기`}),(0,L.jsx)(N,{colSpan:2,id:`second-half`,scope:`colgroup`,children:`하반기`})]}),(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{id:`q1`,scope:`col`,children:`1분기`}),(0,L.jsx)(N,{id:`q2`,scope:`col`,children:`2분기`}),(0,L.jsx)(N,{id:`q3`,scope:`col`,children:`3분기`}),(0,L.jsx)(N,{id:`q4`,scope:`col`,children:`4분기`})]})]}),(0,L.jsx)(A,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{id:`core-plan`,scope:`row`,children:`Core Plan`}),(0,L.jsx)(P,{align:`end`,headers:`core-plan first-half q1`,children:`72`}),(0,L.jsx)(P,{align:`end`,headers:`core-plan first-half q2`,children:`81`}),(0,L.jsx)(P,{align:`end`,headers:`core-plan second-half q3`,children:`94`}),(0,L.jsx)(P,{align:`end`,headers:`core-plan second-half q4`,children:`103`})]})})]}),decorators:[e=>(0,L.jsxs)(a,{gap:`2`,children:[(0,L.jsx)(s,{id:`complex-table-note`,tone:`muted`,children:`상·하반기 그룹 header와 각 분기 header가 데이터 셀에 함께 연결됩니다.`}),(0,L.jsx)(e,{})]})]},G={render:()=>(0,L.jsx)(r,{style:{maxWidth:`20rem`,width:`calc(100vw - (2 * var(--space-4)))`},children:(0,L.jsx)(F,{"aria-labelledby":`responsive-table-caption`,children:(0,L.jsxs)(T,{children:[(0,L.jsx)(E,{id:`responsive-table-caption`,children:`좁은 화면의 배포 환경 비교`}),(0,L.jsxs)(D,{children:[(0,L.jsx)(O,{style:{minWidth:`10rem`}}),(0,L.jsx)(O,{span:4,style:{minWidth:`9rem`}})]}),(0,L.jsx)(k,{children:(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`col`,children:`환경`}),(0,L.jsx)(N,{scope:`col`,children:`Build`}),(0,L.jsx)(N,{scope:`col`,children:`Typecheck`}),(0,L.jsx)(N,{scope:`col`,children:`Accessibility`}),(0,L.jsx)(N,{scope:`col`,children:`Storybook`})]})}),(0,L.jsxs)(A,{children:[(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`row`,children:`Chromium mobile`}),(0,L.jsx)(P,{children:`통과`}),(0,L.jsx)(P,{children:`통과`}),(0,L.jsx)(P,{children:`통과`}),(0,L.jsx)(P,{children:`통과`})]}),(0,L.jsxs)(M,{children:[(0,L.jsx)(N,{scope:`row`,children:`Desktop forced colors`}),(0,L.jsx)(P,{children:`통과`}),(0,L.jsx)(P,{children:`통과`}),(0,L.jsx)(P,{children:`검토 중`}),(0,L.jsx)(P,{children:`통과`})]})]})]})})})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>분기별 제품 매출</TableCaption>
      <TableColumnGroup>
        <TableColumn style={{
        width: '40%'
      }} />
        <TableColumn span={2} />
      </TableColumnGroup>
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">제품</TableHeaderCell>
          <TableHeaderCell align="end" scope="col">
            1분기
          </TableHeaderCell>
          <TableHeaderCell align="end" scope="col">
            2분기
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell scope="row">Starter</TableHeaderCell>
          <TableCell align="end">₩42,000,000</TableCell>
          <TableCell align="end">₩48,000,000</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Professional</TableHeaderCell>
          <TableCell align="end">₩68,000,000</TableCell>
          <TableCell align="end">₩75,000,000</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableHeaderCell scope="row">합계</TableHeaderCell>
          <TableCell align="end">₩110,000,000</TableCell>
          <TableCell align="end">₩123,000,000</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Box style={{
    maxWidth: '48rem',
    width: 'calc(100vw - (2 * var(--space-4)))'
  }}>
      <Text style={{
      marginBlockEnd: 'var(--space-2)'
    }} tone="secondary" weight="semibold">
        서울
      </Text>
      <Table>
        <TableCaption className="sr-only">당첨 판매점 예시</TableCaption>
        <TableColumnGroup>
          <TableColumn style={{
          width: '20%'
        }} />
          <TableColumn style={{
          width: '20%'
        }} />
          <TableColumn style={{
          width: '40%'
        }} />
          <TableColumn style={{
          width: '20%'
        }} />
        </TableColumnGroup>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">시</TableHeaderCell>
            <TableHeaderCell scope="col">구</TableHeaderCell>
            <TableHeaderCell scope="col">판매점</TableHeaderCell>
            <TableHeaderCell scope="col">구분</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              <Text weight="medium">서울특별시</Text>
            </TableCell>
            <TableCell align="center">
              <Text tone="muted">노원구</Text>
            </TableCell>
            <TableCell align="center">
              <Text weight="medium">행운당</Text>
            </TableCell>
            <TableCell align="center">자동</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <Text weight="medium">서울특별시</Text>
            </TableCell>
            <TableCell align="center">
              <Text tone="muted">마포구</Text>
            </TableCell>
            <TableCell align="center">
              <Text weight="medium">세명복권</Text>
            </TableCell>
            <TableCell align="center">수동</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: '로또헌터 당첨 판매점 표에서 확인된 framed surface, subtle header, centered columns, row divider와 hover 표현을 제품 동작 없이 재현합니다. 좁은 화면의 카드 목록 전환과 당첨 구분 라벨은 소비자 책임입니다.'
      }
    }
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="5">
      {(['compact', 'default', 'relaxed'] as const).map(density => <Box key={density}>
          <Text tone="secondary" weight="semibold">
            {density}
          </Text>
          <Table density={density}>
            <TableHeader>
              <TableRow>
                <TableHeaderCell scope="col">상태</TableHeaderCell>
                <TableHeaderCell scope="col">담당</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>검토 중</TableCell>
                <TableCell>Design System</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>)}
    </Stack>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="6">
      {(['none', 'rows', 'grid'] as const).map(borders => <Box key={borders}>
          <Text tone="secondary" weight="semibold">
            {borders}
          </Text>
          <Table borders={borders} striped={borders === 'grid'}>
            <TableHeader>
              <TableRow>
                <TableHeaderCell scope="col">토큰</TableHeaderCell>
                <TableHeaderCell scope="col">상태</TableHeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>surface.default</TableCell>
                <TableCell>준비됨</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>border.default</TableCell>
                <TableCell>준비됨</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>)}
    </Stack>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>팀별 접근성 점검 결과</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">팀</TableHeaderCell>
          <TableHeaderCell align="center" scope="col">
            Keyboard
          </TableHeaderCell>
          <TableHeaderCell align="center" scope="col">
            Screen reader
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell scope="row">Core UI</TableHeaderCell>
          <TableCell align="center">통과</TableCell>
          <TableCell align="center">통과</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope="row">Product View</TableHeaderCell>
          <TableCell align="center">검토 중</TableCell>
          <TableCell align="center">통과</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Table aria-describedby="complex-table-note">
      <TableCaption>2026년 반기별 제품 실적</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHeaderCell id="product" rowSpan={2} scope="col">
            제품
          </TableHeaderCell>
          <TableHeaderCell colSpan={2} id="first-half" scope="colgroup">
            상반기
          </TableHeaderCell>
          <TableHeaderCell colSpan={2} id="second-half" scope="colgroup">
            하반기
          </TableHeaderCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell id="q1" scope="col">
            1분기
          </TableHeaderCell>
          <TableHeaderCell id="q2" scope="col">
            2분기
          </TableHeaderCell>
          <TableHeaderCell id="q3" scope="col">
            3분기
          </TableHeaderCell>
          <TableHeaderCell id="q4" scope="col">
            4분기
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableHeaderCell id="core-plan" scope="row">
            Core Plan
          </TableHeaderCell>
          <TableCell align="end" headers="core-plan first-half q1">
            72
          </TableCell>
          <TableCell align="end" headers="core-plan first-half q2">
            81
          </TableCell>
          <TableCell align="end" headers="core-plan second-half q3">
            94
          </TableCell>
          <TableCell align="end" headers="core-plan second-half q4">
            103
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>,
  decorators: [Story => <Stack gap="2">
        <Text id="complex-table-note" tone="muted">
          상·하반기 그룹 header와 각 분기 header가 데이터 셀에 함께 연결됩니다.
        </Text>
        <Story />
      </Stack>]
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Box style={{
    maxWidth: '20rem',
    width: 'calc(100vw - (2 * var(--space-4)))'
  }}>
      <TableScrollArea aria-labelledby="responsive-table-caption">
        <Table>
          <TableCaption id="responsive-table-caption">
            좁은 화면의 배포 환경 비교
          </TableCaption>
          <TableColumnGroup>
            <TableColumn style={{
            minWidth: '10rem'
          }} />
            <TableColumn span={4} style={{
            minWidth: '9rem'
          }} />
          </TableColumnGroup>
          <TableHeader>
            <TableRow>
              <TableHeaderCell scope="col">환경</TableHeaderCell>
              <TableHeaderCell scope="col">Build</TableHeaderCell>
              <TableHeaderCell scope="col">Typecheck</TableHeaderCell>
              <TableHeaderCell scope="col">Accessibility</TableHeaderCell>
              <TableHeaderCell scope="col">Storybook</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableHeaderCell scope="row">Chromium mobile</TableHeaderCell>
              <TableCell>통과</TableCell>
              <TableCell>통과</TableCell>
              <TableCell>통과</TableCell>
              <TableCell>통과</TableCell>
            </TableRow>
            <TableRow>
              <TableHeaderCell scope="row">
                Desktop forced colors
              </TableHeaderCell>
              <TableCell>통과</TableCell>
              <TableCell>통과</TableCell>
              <TableCell>검토 중</TableCell>
              <TableCell>통과</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableScrollArea>
    </Box>
}`,...G.parameters?.docs?.source}}},K=[`Anatomy`,`WinnerStoreStyle`,`Densities`,`BordersAndStripes`,`RowAndColumnHeaders`,`ComplexHeaderAssociations`,`ResponsiveScroll`]})))()}q();export{z as Anatomy,H as BordersAndStripes,W as ComplexHeaderAssociations,V as Densities,G as ResponsiveScroll,U as RowAndColumnHeaders,B as WinnerStoreStyle,K as __namedExportsOrder,R as default};