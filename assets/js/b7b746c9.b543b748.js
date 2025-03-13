(self.webpackChunkcigra_wiki=self.webpackChunkcigra_wiki||[]).push([[14105],{936329:(e,a,s)=>{var i={"./en/cigar.json":808241,"./zh-Hans/cigar.json":309397};function r(e){var a=n(e);return s(a)}function n(e){if(!s.o(i,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=n,e.exports=r,r.id=936329},454573:(e,a,s)=>{"use strict";s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>m});const i=JSON.parse('{"id":"cigar/davidoff/2000","title":"Davidoff 2000","description":"2000","source":"@site/docs/cigar/davidoff/2000.md","sourceDirName":"cigar/davidoff","slug":"/cigar/davidoff/2000","permalink":"/cigar/davidoff/2000","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"2000","title":"Davidoff 2000"},"sidebar":"cigarsSidebar","previous":{"title":"Davidoff 1000","permalink":"/cigar/davidoff/1000"},"next":{"title":"Davidoff 3000","permalink":"/cigar/davidoff/3000"}}');var r=s(474848),n=s(28453),t=s(330751);const c=JSON.parse('{"wk":"Davidoff","UU":"2000","rh":[{"name":"2000","images":["/img/cigars/davidoff-2000_387x51.jpg"],"details":{"Cigar Name":"2000","Factory Name":"Marevas","Construction":"Handmade.","Bands":"Standard band A.","Packaging":"Cardboard pack of 5 cigars. Slide lid box of 25 cigars.","Status":"A 1970s release. 1970-01-01Discontinued 1991."},"dimensions":{"ring_gauge":"42","length_mm":"129","length_in":"5\u215b\u2033"},"weight":"8.46g","ratings":{}}],"Wy":[]}');s(837700);const l={id:2e3,title:"Davidoff 2000"},d=void 0,o={},m=[{value:"2000",id:"2000",level:2},{value:"Special Release Images",id:"special-release-images",level:2}];function g(e){const a={h2:"h2",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"2000",children:"2000"}),"\n",(0,r.jsx)(t.O,{brand:c.wk,name:c.UU,sub_cigar:c.rh[0]}),"\n",(0,r.jsx)(a.h2,{id:"special-release-images",children:"Special Release Images"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:c.Wy.map(((e,a)=>(0,r.jsxs)("div",{style:{margin:"1rem",cursor:"pointer"},onClick:()=>window.open(e.image_urls[0],"_blank"),children:[(0,r.jsx)("img",{src:e.image_urls[0],alt:e.description,style:{maxWidth:"100%",maxHeight:"200px",borderRadius:"0.5rem"}}),(0,r.jsx)("p",{children:e.description})]},a)))})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},334549:(e,a,s)=>{"use strict";s.d(a,{A:()=>k});s(296540);const i="container_V4LF",r="inner_p2f9",n="tableCard_SAkd",t="tableHeader_oLNi",c="tableTitle_plVk",l="tableContainer_v7an",d="table_bUJr",o="tableRow_KCuu",m="tableCell_tY15",g="tableCellHeader_JFgF",h="imagesGrid_v8Ph",u="imageItem_Q90x",x="image_tBnB",N="noImage_ZJuq",p="dimensionPills_Jgl4",j="dimensionPill_pQzk",f="dimensionValue_xamF",v="dimensionLabel_rGn5",b="detailValue_SKt7";var _=s(837700),y=s(474848);const k=e=>{let{brand:a,name:s,sub_cigar:k}=e;const{t:w}=(0,_.A)();if(!k||!k.images)return(0,y.jsx)("div",{className:i,children:(0,y.jsx)("div",{className:r,children:(0,y.jsxs)("div",{className:n,children:[(0,y.jsx)("div",{className:t,children:(0,y.jsx)("h2",{className:c,children:w("cigar.errorLoading")})}),(0,y.jsxs)("div",{className:l,style:{padding:"2rem"},children:[(0,y.jsx)("p",{children:w("cigar.errorMessage")}),(0,y.jsx)("pre",{style:{marginTop:"1rem",padding:"1rem",background:"#f5f5f5",borderRadius:"0.5rem",overflow:"auto"},children:JSON.stringify({brand:a,name:s,sub_cigar:k},null,2)})]})]})})});const A=Array.isArray(k.images)?k.images:[],S=k.details||{},C=k.dimensions||{};return(0,y.jsx)("div",{className:i,children:(0,y.jsx)("div",{className:r,children:(0,y.jsx)("div",{className:n,children:(0,y.jsx)("div",{className:l,children:(0,y.jsx)("table",{className:d,children:(0,y.jsxs)("tbody",{children:[(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:g,children:w("cigar.images")}),(0,y.jsx)("td",{className:m,children:A.length>0?(0,y.jsx)("div",{className:h,children:A.map(((e,s)=>(0,y.jsx)("div",{className:u,onClick:()=>window.open(e,"_blank"),children:(0,y.jsx)("img",{src:e,alt:`${a} ${k.name} image ${s+1}`,className:x})},s)))}):(0,y.jsx)("div",{className:N,children:w("cigar.noImages")})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:g,children:w("cigar.name")}),(0,y.jsx)("td",{className:m,children:(0,y.jsx)("p",{className:b,children:k.name||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:g,children:w("cigar.factoryName")}),(0,y.jsx)("td",{className:m,children:(0,y.jsx)("p",{className:b,children:S["Factory Name"]||S["\u5382\u7528\u540d\u79f0"]||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:g,children:w("cigar.dimensions")}),(0,y.jsx)("td",{className:m,children:(0,y.jsxs)("div",{className:p,children:[(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("span",{className:f,children:C.ring_gauge||"N/A"}),(0,y.jsx)("span",{className:v,children:w("cigar.ringGauge")})]}),(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("span",{className:f,children:C.length_in||"N/A"}),(0,y.jsx)("span",{className:v,children:w("cigar.length")})]}),(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("span",{className:f,children:k.weight||"N/A"}),(0,y.jsx)("span",{className:v,children:w("cigar.weight")})]})]})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:g,children:w("cigar.construction")}),(0,y.jsx)("td",{className:m,children:(0,y.jsx)("p",{className:b,children:S.Construction||S["\u7ed3\u6784"]||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:g,children:w("cigar.bands")}),(0,y.jsx)("td",{className:m,children:(0,y.jsx)("p",{className:b,children:S.Bands||S["\u96ea\u8304\u6807\uff1a"]||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:g,children:w("cigar.packaging")}),(0,y.jsx)("td",{className:m,children:(0,y.jsx)("p",{className:b,children:S.Packaging||S["\u5305\u88c5\uff1a"]||"N/A"})})]}),(0,y.jsxs)("tr",{className:o,children:[(0,y.jsx)("td",{className:g,children:w("cigar.status")}),(0,y.jsx)("td",{className:m,children:(0,y.jsx)("p",{className:b,children:S.Status||S["\u73b0\u51b5\uff1a"]||"N/A"})})]})]})})})})})})}},837700:(e,a,s)=>{"use strict";let i;s.d(a,{A:()=>n});try{i=s(640797).A}catch(t){i=()=>({i18n:{currentLocale:"en"}})}const r=e=>{try{return s(936329)(`./${e}/cigar.json`)}catch(t){try{return s(808241)}catch(t){return{}}}};const n=function(){const{i18n:e}=i(),a=e?.currentLocale||"en",s=r(a);return{t:e=>{const a=e.split(".");let i=s;for(const s of a)if(i=i?.[s],void 0===i){let s=r("en");for(const i of a)if(s=s?.[i],void 0===s)return e;return s}return i},locale:a}}},330751:(e,a,s)=>{"use strict";s.d(a,{O:()=>i.A});var i=s(334549)},28453:(e,a,s)=>{"use strict";s.d(a,{R:()=>t,x:()=>c});var i=s(296540);const r={},n=i.createContext(r);function t(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(n.Provider,{value:a},e.children)}},808241:e=>{"use strict";e.exports=JSON.parse('{"cigar":{"images":"Images","name":"Name","factoryName":"Factory Name","dimensions":"Dimensions","ringGauge":"Ring Gauge","length":"Length","weight":"Weight","construction":"Construction","bands":"Bands","packaging":"Packaging","status":"Status","noImages":"No images available","errorLoading":"Error Loading Data","errorMessage":"Sorry, we couldn\'t load the cigar data. Please try again later."},"brandNotes":{"errorLoading":"Unable to load brand information","status":"Status","generally":"Generally","standardProduction":"Standard Production","specialReleases":"Special Releases","history":"History","historicalBands":"Historical Bands","period":"Period","description":"Description"},"specialReleases":{"title":"Special Release Images"}}')},309397:e=>{"use strict";e.exports=JSON.parse('{"cigar":{"images":"\u56fe\u7247","name":"\u540d\u79f0","factoryName":"\u5de5\u5382\u540d\u79f0","dimensions":"\u5c3a\u5bf8","ringGauge":"\u73af\u89c4","length":"\u957f\u5ea6","weight":"\u91cd\u91cf","construction":"\u6784\u9020","bands":"\u70df\u73af","packaging":"\u5305\u88c5","status":"\u72b6\u6001","noImages":"\u6682\u65e0\u56fe\u7247","errorLoading":"\u6570\u636e\u52a0\u8f7d\u9519\u8bef","errorMessage":"\u62b1\u6b49\uff0c\u6211\u4eec\u65e0\u6cd5\u52a0\u8f7d\u96ea\u8304\u6570\u636e\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002"},"brandNotes":{"errorLoading":"\u65e0\u6cd5\u52a0\u8f7d\u54c1\u724c\u4fe1\u606f","status":"\u72b6\u6001","generally":"\u6982\u8ff0","standardProduction":"\u6807\u51c6\u751f\u4ea7","specialReleases":"\u7279\u522b\u7248\u672c","history":"\u5386\u53f2","historicalBands":"\u5386\u53f2\u70df\u73af","period":"\u65f6\u671f","description":"\u63cf\u8ff0"},"specialReleases":{"title":"\u7279\u522b\u7248\u672c\u56fe\u7247"}}')}}]);