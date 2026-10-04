import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{r as n,t as r}from"./dist-BQI90tbb.js";import{n as i,s as a,t as o}from"./text-roles-D79udey9.js";import{n as s,t as c}from"./box-CDk1J8Sp.js";import{n as l,t as u}from"./stack-BHbN6iJ1.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{d=`[&_[data-slot=table-body]>[data-slot=table-row]:nth-child(even)]:!bg-[var(--color-surface-subtle)]`,f=`!overflow-hidden !rounded-[var(--table-frame-radius)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:h-[var(--table-header-height)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:!bg-[var(--table-header-background)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:!text-center [&_[data-slot=table-header]_[data-slot=table-header-cell]]:!text-[length:var(--table-header-font-size)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:!text-[var(--table-header-foreground)] [&_[data-slot=table-header]_[data-slot=table-header-cell]]:![letter-spacing:var(--table-header-letter-spacing)] [&_[data-slot=table-body]>[data-slot=table-row]]:transition-colors [&_[data-slot=table-body]>[data-slot=table-row]]:duration-fast [&_[data-slot=table-body]>[data-slot=table-row]]:ease-standard [&_[data-slot=table-body]>[data-slot=table-row]:hover]:!bg-[var(--color-surface-subtle)] [&_[data-slot=table-body]>[data-slot=table-row]:last-child]:!border-b-0 motion-reduce:[&_[data-slot=table-body]>[data-slot=table-row]]:transition-none motion-reduce:[&_[data-slot=table-body]>[data-slot=table-row]]:duration-0`,p=`!border !border-solid !border-[var(--color-border-default)] !shadow-[var(--table-frame-shadow)] [&_[data-slot=table-header]>[data-slot=table-row]]:!border-[var(--color-border-default)]`,m=(e,t=!1,n=`rows`)=>[e,f,n!==`none`&&p,t&&d].filter(Boolean).join(` `),h=({borders:e=`rows`,density:t=`default`,layout:n=`auto`,style:r})=>[`[background-color:var(--color-surface-default)] [border-collapse:collapse] [border-spacing:0] [color:var(--color-content-primary)] [font-family:var(--font-family-sans)] [font-size:var(--table-font-size)] [font-style:normal] [font-weight:var(--font-weight-regular)] [letter-spacing:var(--letter-spacing-default)] [line-height:var(--table-line-height)] [width:100%]`,{rows:`[--table-cell-border-width:0] [--table-row-border-width:0.0625rem]`,none:`[--table-cell-border-width:0] [--table-row-border-width:0]`,grid:`[--table-cell-border-width:0.0625rem] [--table-row-border-width:0]`}[String(e??`rows`)],{default:`[--table-cell-padding-block:var(--table-density-default-padding-block)] [--table-cell-padding-inline:var(--table-density-default-padding-inline)]`,compact:`[--table-cell-padding-block:var(--table-density-compact-padding-block)] [--table-cell-padding-inline:var(--table-density-compact-padding-inline)]`,relaxed:`[--table-cell-padding-block:var(--table-density-relaxed-padding-block)] [--table-cell-padding-inline:var(--table-density-relaxed-padding-inline)]`}[String(t??`default`)],{auto:`[table-layout:auto]`,fixed:`[table-layout:fixed]`}[String(n??`auto`)]].filter(Boolean).join(` `),g=(e=`top`,t)=>[`[color:var(--color-content-secondary)] [font-family:var(--font-family-sans)] [font-size:var(--table-font-size)] [font-style:normal] [font-weight:var(--font-weight-medium)] [letter-spacing:var(--letter-spacing-default)] [line-height:var(--table-line-height)] [padding-block:var(--table-caption-gap)] [text-align:start]`,{top:`[caption-side:top]`,bottom:`[caption-side:bottom]`}[String(e??`top`)]].filter(Boolean).join(` `),_=e=>``,v=e=>`[background-color:var(--table-footer-background)] [color:var(--table-footer-foreground)] [font-family:var(--font-family-sans)] [font-size:var(--table-font-size)] [font-style:normal] [font-weight:var(--table-header-font-weight)] [letter-spacing:var(--letter-spacing-default)] [line-height:var(--table-line-height)]`,y=e=>`[background-color:transparent] [border-block-end-color:var(--color-border-subtle)] [border-block-end-style:solid] [border-block-end-width:var(--table-row-border-width)]`,b=({align:e=`start`,header:t=!1,style:n,verticalAlign:r=`middle`})=>[`[border-color:var(--color-border-default)] [border-style:solid] [border-width:var(--table-cell-border-width)] [color:var(--color-content-primary)] [font-family:var(--font-family-sans)] [font-size:var(--table-font-size)] [font-style:normal] [letter-spacing:var(--letter-spacing-default)] [line-height:var(--table-line-height)] [padding-block:var(--table-cell-padding-block)] [padding-inline:var(--table-cell-padding-inline)]`,{start:`[text-align:start]`,center:`[text-align:center]`,end:`[text-align:end]`}[String(e??`start`)],{false:`[font-weight:var(--font-weight-regular)]`,true:`[font-weight:var(--table-header-font-weight)]`}[String(t??!1)],{middle:`[vertical-align:middle]`,top:`[vertical-align:top]`,bottom:`[vertical-align:bottom]`}[String(r??`middle`)]].filter(Boolean).join(` `),x=`outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-default)] forced-colors:focus-visible:outline-2 forced-colors:focus-visible:outline-solid forced-colors:focus-visible:outline-[CanvasText] forced-colors:focus-visible:ring-0`,S=e=>[e,x].filter(Boolean).join(` `),C=e=>`[max-width:100%] [overflow-x:auto] [-webkit-overflow-scrolling:touch]`;try{h.displayName=`tableStyles`,h.__docgenInfo={description:``,displayName:`tableStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,methods:[],props:{borders:{defaultValue:{value:`rows`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,name:`TypeLiteral`}],description:``,name:`borders`,required:!1,tags:{},type:{name:`enum`,raw:`TableBorders | undefined`,value:[{value:`undefined`},{value:`"none"`},{value:`"grid"`},{value:`"rows"`}]}},density:{defaultValue:{value:`default`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,name:`TypeLiteral`}],description:``,name:`density`,required:!1,tags:{},type:{name:`enum`,raw:`TableDensity | undefined`,value:[{value:`undefined`},{value:`"compact"`},{value:`"default"`},{value:`"relaxed"`}]}},layout:{defaultValue:{value:`auto`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,name:`TypeLiteral`}],description:``,name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`TableLayout | undefined`,value:[{value:`undefined`},{value:`"auto"`},{value:`"fixed"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableStyle | undefined`}}},tags:{}}}catch{}try{_.displayName=`tableColumnStyles`,_.__docgenInfo={description:``,displayName:`tableColumnStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,methods:[],props:{},tags:{}}}catch{}try{v.displayName=`tableFooterStyles`,v.__docgenInfo={description:``,displayName:`tableFooterStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,methods:[],props:{},tags:{}}}catch{}try{y.displayName=`tableRowStyles`,y.__docgenInfo={description:``,displayName:`tableRowStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,methods:[],props:{},tags:{}}}catch{}try{b.displayName=`tableCellStyles`,b.__docgenInfo={description:``,displayName:`tableCellStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,methods:[],props:{align:{defaultValue:{value:`start`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellAlign | undefined`,value:[{value:`undefined`},{value:`"center"`},{value:`"end"`},{value:`"start"`}]}},header:{defaultValue:{value:`false`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,name:`TypeLiteral`}],description:``,name:`header`,required:!1,tags:{},type:{name:`boolean | undefined`}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`TableCellStyle | undefined`}},verticalAlign:{defaultValue:{value:`middle`},declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,name:`TypeLiteral`}],description:``,name:`verticalAlign`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellVerticalAlign | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"top"`},{value:`"middle"`}]}}},tags:{}}}catch{}try{S.displayName=`tableScrollAreaClassName`,S.__docgenInfo={description:``,displayName:`tableScrollAreaClassName`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,methods:[],props:{},tags:{}}}catch{}try{C.displayName=`tableScrollAreaStyles`,C.__docgenInfo={description:``,displayName:`tableScrollAreaStyles`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/variants.ts`,methods:[],props:{},tags:{}}}catch{}})))()}var T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{n(),w(),T=t(),E=({borders:e,className:t,density:n,layout:i,ref:a,striped:o,style:s,...c})=>(0,T.jsx)(`table`,{...c,className:[[r(`table`),m(t,o,e)].filter(Boolean).join(` `),h({borders:e,density:n,layout:i,style:s})].filter(Boolean).join(` `),"data-slot":`table`,ref:a}),D=({ref:e,side:t,style:n,...i})=>(0,T.jsx)(`caption`,{...i,"data-slot":`table-caption`,ref:e,className:[[r(`table`,{part:`caption`}),i.className].filter(Boolean).join(` `),g(t,n)].filter(Boolean).join(` `)}),O=({ref:e,...t})=>(0,T.jsx)(`colgroup`,{...t,"data-slot":`table-column-group`,ref:e,className:[r(`table`,{part:`column-group`}),t.className].filter(Boolean).join(` `)}),k=({ref:e,style:t,...n})=>(0,T.jsx)(`col`,{...n,"data-slot":`table-column`,ref:e,className:[[r(`table`,{part:`column`}),n.className].filter(Boolean).join(` `),_(t)].filter(Boolean).join(` `)}),A=({ref:e,...t})=>(0,T.jsx)(`thead`,{...t,"data-slot":`table-header`,ref:e,className:[r(`table`,{part:`header`}),t.className].filter(Boolean).join(` `)}),j=({ref:e,...t})=>(0,T.jsx)(`tbody`,{...t,"data-slot":`table-body`,ref:e,className:[r(`table`,{part:`body`}),t.className].filter(Boolean).join(` `)}),M=({ref:e,style:t,...n})=>(0,T.jsx)(`tfoot`,{...n,"data-slot":`table-footer`,ref:e,className:[[r(`table`,{part:`footer`}),n.className].filter(Boolean).join(` `),v(t)].filter(Boolean).join(` `)}),N=({ref:e,style:t,...n})=>(0,T.jsx)(`tr`,{...n,"data-slot":`table-row`,ref:e,className:[[r(`table`,{part:`row`}),n.className].filter(Boolean).join(` `),y(t)].filter(Boolean).join(` `)}),P=({align:e,ref:t,scope:n,style:i,verticalAlign:a,...o})=>(0,T.jsx)(`th`,{...o,"data-slot":`table-header-cell`,ref:t,scope:n,className:[[r(`table`,{part:`header-cell`}),o.className].filter(Boolean).join(` `),b({align:e,header:!0,style:i,verticalAlign:a})].filter(Boolean).join(` `)}),F=({align:e,ref:t,style:n,verticalAlign:i,...a})=>(0,T.jsx)(`td`,{...a,"data-slot":`table-cell`,ref:t,className:[[r(`table`,{part:`cell`}),a.className].filter(Boolean).join(` `),b({align:e,style:n,verticalAlign:i})].filter(Boolean).join(` `)}),I=({className:e,ref:t,role:n,style:i,tabIndex:a,...o})=>(0,T.jsx)(`div`,{...o,className:[[r(`table`,{part:`scroll-area`}),S(e)].filter(Boolean).join(` `),C(i)].filter(Boolean).join(` `),"data-slot":`table-scroll-area`,ref:t,role:`region`,tabIndex:a??0});try{E.displayName=`Table`,E.__docgenInfo={description:``,displayName:`Table`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{borders:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`borders`,required:!1,tags:{},type:{name:`enum`,raw:`TableBorders | undefined`,value:[{value:`undefined`},{value:`"none"`},{value:`"grid"`},{value:`"rows"`}]}},density:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`density`,required:!1,tags:{},type:{name:`enum`,raw:`TableDensity | undefined`,value:[{value:`undefined`},{value:`"compact"`},{value:`"default"`},{value:`"relaxed"`}]}},layout:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`TableLayout | undefined`,value:[{value:`undefined`},{value:`"auto"`},{value:`"fixed"`}]}},striped:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`striped`,required:!1,tags:{},type:{name:`boolean | undefined`}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableElement> | undefined`}}},tags:{}}}catch{}try{D.displayName=`TableCaption`,D.__docgenInfo={description:``,displayName:`TableCaption`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{side:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`side`,required:!1,tags:{},type:{name:`enum`,raw:`TableCaptionSide | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"top"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLElement> | undefined`}}},tags:{}}}catch{}try{O.displayName=`TableColumnGroup`,O.__docgenInfo={description:``,displayName:`TableColumnGroup`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableColElement> | undefined`}}},tags:{}}}catch{}try{k.displayName=`TableColumn`,k.__docgenInfo={description:``,displayName:`TableColumn`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableColElement> | undefined`}}},tags:{}}}catch{}try{A.displayName=`TableHeader`,A.__docgenInfo={description:``,displayName:`TableHeader`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableSectionElement> | undefined`}}},tags:{}}}catch{}try{j.displayName=`TableBody`,j.__docgenInfo={description:``,displayName:`TableBody`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableSectionElement> | undefined`}}},tags:{}}}catch{}try{M.displayName=`TableFooter`,M.__docgenInfo={description:``,displayName:`TableFooter`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableSectionElement> | undefined`}}},tags:{}}}catch{}try{N.displayName=`TableRow`,N.__docgenInfo={description:``,displayName:`TableRow`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableRowElement> | undefined`}}},tags:{}}}catch{}try{P.displayName=`TableHeaderCell`,P.__docgenInfo={description:``,displayName:`TableHeaderCell`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{align:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellAlign | undefined`,value:[{value:`undefined`},{value:`"center"`},{value:`"end"`},{value:`"start"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}},verticalAlign:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`verticalAlign`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellVerticalAlign | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"top"`},{value:`"middle"`}]}},abbr:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`abbr`,required:!1,tags:{},type:{name:`string | undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableHeaderCellElement> | undefined`}},scope:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`scope`,required:!0,tags:{},type:{name:`enum`,raw:`"col" | "colgroup" | "row" | "rowgroup"`,value:[{value:`"col"`},{value:`"colgroup"`},{value:`"row"`},{value:`"rowgroup"`}]}}},tags:{}}}catch{}try{F.displayName=`TableCell`,F.__docgenInfo={description:``,displayName:`TableCell`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{align:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`align`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellAlign | undefined`,value:[{value:`undefined`},{value:`"center"`},{value:`"end"`},{value:`"start"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}},verticalAlign:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`verticalAlign`,required:!1,tags:{},type:{name:`enum`,raw:`TableCellVerticalAlign | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"top"`},{value:`"middle"`}]}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLTableDataCellElement> | undefined`}}},tags:{}}}catch{}try{I.displayName=`TableScrollArea`,I.__docgenInfo={description:``,displayName:`TableScrollArea`,filePath:`/home/runner/work/jlca-design-system/jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,methods:[],props:{"aria-label":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`},{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`aria-label`,required:!1,tags:{},type:{name:`string | undefined`}},"aria-labelledby":{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`},{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`aria-labelledby`,required:!1,tags:{},type:{name:`string | undefined`}},role:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`role`,required:!1,tags:{},type:{name:`enum`,raw:`"region" | undefined`,value:[{value:`undefined`},{value:`"region"`}]}},style:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`style`,required:!1,tags:{},type:{name:`undefined`}},ref:{defaultValue:null,declarations:[{fileName:`jlca-design-system/packages/primitives/src/data-display/table/table.tsx`,name:`TypeLiteral`}],description:``,name:`ref`,required:!1,tags:{},type:{name:`Ref<HTMLDivElement> | undefined`}}},tags:{}}}catch{}})))()}var R,z,B,V,H,U,W,G,K,q;function J(){return(J=e((()=>{s(),l(),a(),L(),R=t(),z={title:`Primitives/Data Display/Table`,component:E,tags:[`autodocs`],parameters:{docs:{description:{component:`Usage: 논리적인 행·열 관계가 있는 정적 데이터를 native table, caption, scope와 header association으로 표현합니다. Non-usage: 페이지 배치, 카드 모음, editable spreadsheet, sorting·pagination·data fetching은 Table 책임이 아닙니다. 좁은 화면에서도 table DOM을 card로 바꾸지 않고, 필요한 경우 accessible name을 가진 TableScrollArea를 명시적으로 조합합니다. Interactive DataGrid는 별도 keyboard·focus·state 설계가 필요한 독립 family입니다. Canonical API는 @jaeilnet/design-primitives입니다.`}}}},B={render:()=>(0,R.jsxs)(E,{children:[(0,R.jsx)(D,{children:`분기별 제품 매출`}),(0,R.jsxs)(O,{children:[(0,R.jsx)(k,{className:`[width:40%]`}),(0,R.jsx)(k,{span:2})]}),(0,R.jsx)(A,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`col`,children:`제품`}),(0,R.jsx)(P,{align:`end`,scope:`col`,children:`1분기`}),(0,R.jsx)(P,{align:`end`,scope:`col`,children:`2분기`})]})}),(0,R.jsxs)(j,{children:[(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`row`,children:`Starter`}),(0,R.jsx)(F,{align:`end`,children:`₩42,000,000`}),(0,R.jsx)(F,{align:`end`,children:`₩48,000,000`})]}),(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`row`,children:`Professional`}),(0,R.jsx)(F,{align:`end`,children:`₩68,000,000`}),(0,R.jsx)(F,{align:`end`,children:`₩75,000,000`})]})]}),(0,R.jsx)(M,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`row`,children:`합계`}),(0,R.jsx)(F,{align:`end`,children:`₩110,000,000`}),(0,R.jsx)(F,{align:`end`,children:`₩123,000,000`})]})})]})},V={render:()=>(0,R.jsxs)(c,{className:`[max-width:48rem] [width:calc(100vw_-_(2_*_var(--space-4)))]`,children:[(0,R.jsx)(i,{className:`[margin-block-end:var(--space-2)]`,tone:`secondary`,children:`서울`}),(0,R.jsxs)(E,{children:[(0,R.jsx)(D,{className:`sr-only`,children:`당첨 판매점 예시`}),(0,R.jsxs)(O,{children:[(0,R.jsx)(k,{className:`[width:20%]`}),(0,R.jsx)(k,{className:`[width:20%]`}),(0,R.jsx)(k,{className:`[width:40%]`}),(0,R.jsx)(k,{className:`[width:20%]`})]}),(0,R.jsx)(A,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`col`,children:`시`}),(0,R.jsx)(P,{scope:`col`,children:`구`}),(0,R.jsx)(P,{scope:`col`,children:`판매점`}),(0,R.jsx)(P,{scope:`col`,children:`구분`})]})}),(0,R.jsxs)(j,{children:[(0,R.jsxs)(N,{children:[(0,R.jsx)(F,{align:`center`,children:(0,R.jsx)(i,{children:`서울특별시`})}),(0,R.jsx)(F,{align:`center`,children:(0,R.jsx)(o,{tone:`muted`,children:`노원구`})}),(0,R.jsx)(F,{align:`center`,children:(0,R.jsx)(i,{children:`행운당`})}),(0,R.jsx)(F,{align:`center`,children:`자동`})]}),(0,R.jsxs)(N,{children:[(0,R.jsx)(F,{align:`center`,children:(0,R.jsx)(i,{children:`서울특별시`})}),(0,R.jsx)(F,{align:`center`,children:(0,R.jsx)(o,{tone:`muted`,children:`마포구`})}),(0,R.jsx)(F,{align:`center`,children:(0,R.jsx)(i,{children:`세명복권`})}),(0,R.jsx)(F,{align:`center`,children:`수동`})]})]})]})]}),parameters:{docs:{description:{story:`로또헌터 당첨 판매점 표에서 확인된 framed surface, subtle header, centered columns, row divider와 hover 표현을 제품 동작 없이 재현합니다. 좁은 화면의 카드 목록 전환과 당첨 구분 라벨은 소비자 책임입니다.`}}}},H={render:()=>(0,R.jsx)(u,{gap:`5`,children:[`compact`,`default`,`relaxed`].map(e=>(0,R.jsxs)(c,{children:[(0,R.jsx)(i,{tone:`secondary`,children:e}),(0,R.jsxs)(E,{density:e,children:[(0,R.jsx)(A,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`col`,children:`상태`}),(0,R.jsx)(P,{scope:`col`,children:`담당`})]})}),(0,R.jsx)(j,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(F,{children:`검토 중`}),(0,R.jsx)(F,{children:`Design System`})]})})]})]},e))})},U={render:()=>(0,R.jsx)(u,{gap:`6`,children:[`none`,`rows`,`grid`].map(e=>(0,R.jsxs)(c,{children:[(0,R.jsx)(i,{tone:`secondary`,children:e}),(0,R.jsxs)(E,{borders:e,striped:e===`grid`,children:[(0,R.jsx)(A,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`col`,children:`토큰`}),(0,R.jsx)(P,{scope:`col`,children:`상태`})]})}),(0,R.jsxs)(j,{children:[(0,R.jsxs)(N,{children:[(0,R.jsx)(F,{children:`surface.default`}),(0,R.jsx)(F,{children:`준비됨`})]}),(0,R.jsxs)(N,{children:[(0,R.jsx)(F,{children:`border.default`}),(0,R.jsx)(F,{children:`준비됨`})]})]})]})]},e))})},W={render:()=>(0,R.jsxs)(E,{children:[(0,R.jsx)(D,{children:`팀별 접근성 점검 결과`}),(0,R.jsx)(A,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`col`,children:`팀`}),(0,R.jsx)(P,{align:`center`,scope:`col`,children:`Keyboard`}),(0,R.jsx)(P,{align:`center`,scope:`col`,children:`Screen reader`})]})}),(0,R.jsxs)(j,{children:[(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`row`,children:`Core UI`}),(0,R.jsx)(F,{align:`center`,children:`통과`}),(0,R.jsx)(F,{align:`center`,children:`통과`})]}),(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`row`,children:`Product View`}),(0,R.jsx)(F,{align:`center`,children:`검토 중`}),(0,R.jsx)(F,{align:`center`,children:`통과`})]})]})]})},G={render:()=>(0,R.jsxs)(E,{"aria-describedby":`complex-table-note`,children:[(0,R.jsx)(D,{children:`2026년 반기별 제품 실적`}),(0,R.jsxs)(A,{children:[(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{id:`product`,rowSpan:2,scope:`col`,children:`제품`}),(0,R.jsx)(P,{colSpan:2,id:`first-half`,scope:`colgroup`,children:`상반기`}),(0,R.jsx)(P,{colSpan:2,id:`second-half`,scope:`colgroup`,children:`하반기`})]}),(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{id:`q1`,scope:`col`,children:`1분기`}),(0,R.jsx)(P,{id:`q2`,scope:`col`,children:`2분기`}),(0,R.jsx)(P,{id:`q3`,scope:`col`,children:`3분기`}),(0,R.jsx)(P,{id:`q4`,scope:`col`,children:`4분기`})]})]}),(0,R.jsx)(j,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{id:`core-plan`,scope:`row`,children:`Core Plan`}),(0,R.jsx)(F,{align:`end`,headers:`core-plan first-half q1`,children:`72`}),(0,R.jsx)(F,{align:`end`,headers:`core-plan first-half q2`,children:`81`}),(0,R.jsx)(F,{align:`end`,headers:`core-plan second-half q3`,children:`94`}),(0,R.jsx)(F,{align:`end`,headers:`core-plan second-half q4`,children:`103`})]})})]}),decorators:[e=>(0,R.jsxs)(u,{gap:`2`,children:[(0,R.jsx)(o,{id:`complex-table-note`,tone:`muted`,children:`상·하반기 그룹 header와 각 분기 header가 데이터 셀에 함께 연결됩니다.`}),(0,R.jsx)(e,{})]})]},K={render:()=>(0,R.jsx)(c,{className:`[max-width:20rem] [width:calc(100vw_-_(2_*_var(--space-4)))]`,children:(0,R.jsx)(I,{"aria-labelledby":`responsive-table-caption`,children:(0,R.jsxs)(E,{children:[(0,R.jsx)(D,{id:`responsive-table-caption`,children:`좁은 화면의 배포 환경 비교`}),(0,R.jsxs)(O,{children:[(0,R.jsx)(k,{className:`[min-width:10rem]`}),(0,R.jsx)(k,{span:4,className:`[min-width:9rem]`})]}),(0,R.jsx)(A,{children:(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`col`,children:`환경`}),(0,R.jsx)(P,{scope:`col`,children:`Build`}),(0,R.jsx)(P,{scope:`col`,children:`Typecheck`}),(0,R.jsx)(P,{scope:`col`,children:`Accessibility`}),(0,R.jsx)(P,{scope:`col`,children:`Storybook`})]})}),(0,R.jsxs)(j,{children:[(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`row`,children:`Chromium mobile`}),(0,R.jsx)(F,{children:`통과`}),(0,R.jsx)(F,{children:`통과`}),(0,R.jsx)(F,{children:`통과`}),(0,R.jsx)(F,{children:`통과`})]}),(0,R.jsxs)(N,{children:[(0,R.jsx)(P,{scope:`row`,children:`Desktop forced colors`}),(0,R.jsx)(F,{children:`통과`}),(0,R.jsx)(F,{children:`통과`}),(0,R.jsx)(F,{children:`검토 중`}),(0,R.jsx)(F,{children:`통과`})]})]})]})})})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>분기별 제품 매출</TableCaption>
      <TableColumnGroup>
        <TableColumn className={'[width:40%]'} />
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Box className={'[max-width:48rem] [width:calc(100vw_-_(2_*_var(--space-4)))]'}>
      <BodyBold className={'[margin-block-end:var(--space-2)]'} tone="secondary">
        서울
      </BodyBold>
      <Table>
        <TableCaption className="sr-only">당첨 판매점 예시</TableCaption>
        <TableColumnGroup>
          <TableColumn className={'[width:20%]'} />
          <TableColumn className={'[width:20%]'} />
          <TableColumn className={'[width:40%]'} />
          <TableColumn className={'[width:20%]'} />
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
              <BodyBold>서울특별시</BodyBold>
            </TableCell>
            <TableCell align="center">
              <Body tone="muted">노원구</Body>
            </TableCell>
            <TableCell align="center">
              <BodyBold>행운당</BodyBold>
            </TableCell>
            <TableCell align="center">자동</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              <BodyBold>서울특별시</BodyBold>
            </TableCell>
            <TableCell align="center">
              <Body tone="muted">마포구</Body>
            </TableCell>
            <TableCell align="center">
              <BodyBold>세명복권</BodyBold>
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="5">
      {(['compact', 'default', 'relaxed'] as const).map(density => <Box key={density}>
          <BodyBold tone="secondary">{density}</BodyBold>
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Stack gap="6">
      {(['none', 'rows', 'grid'] as const).map(borders => <Box key={borders}>
          <BodyBold tone="secondary">{borders}</BodyBold>
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
        <Body id="complex-table-note" tone="muted">
          상·하반기 그룹 header와 각 분기 header가 데이터 셀에 함께 연결됩니다.
        </Body>
        <Story />
      </Stack>]
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Box className={'[max-width:20rem] [width:calc(100vw_-_(2_*_var(--space-4)))]'}>
      <TableScrollArea aria-labelledby="responsive-table-caption">
        <Table>
          <TableCaption id="responsive-table-caption">
            좁은 화면의 배포 환경 비교
          </TableCaption>
          <TableColumnGroup>
            <TableColumn className={'[min-width:10rem]'} />
            <TableColumn span={4} className={'[min-width:9rem]'} />
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
}`,...K.parameters?.docs?.source}}},q=[`Anatomy`,`WinnerStoreStyle`,`Densities`,`BordersAndStripes`,`RowAndColumnHeaders`,`ComplexHeaderAssociations`,`ResponsiveScroll`]})))()}J();export{B as Anatomy,U as BordersAndStripes,G as ComplexHeaderAssociations,H as Densities,K as ResponsiveScroll,W as RowAndColumnHeaders,V as WinnerStoreStyle,q as __namedExportsOrder,z as default};