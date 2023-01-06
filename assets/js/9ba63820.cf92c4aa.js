"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"A Caught in the Wild Case Study on HAB Node Importance",description:"Actual fail logs from a failed node, and the k8s responce",slug:"Case-study-1",authors:"endi",tags:["Case-Study","Failure-Recovery"],hide_table_of_contents:!1},i=void 0,l={permalink:"/hab-guide/blog/Case-study-1",editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/website/blog/2022-04-02-caught-in-the-wild.md",source:"@site/blog/2022-04-02-caught-in-the-wild.md",title:"A Caught in the Wild Case Study on HAB Node Importance",description:"Actual fail logs from a failed node, and the k8s responce",date:"2022-04-02T00:00:00.000Z",formattedDate:"April 2, 2022",tags:[{label:"Case-Study",permalink:"/hab-guide/blog/tags/case-study"},{label:"Failure-Recovery",permalink:"/hab-guide/blog/tags/failure-recovery"}],readingTime:2.785,hasTruncateMarker:!0,authors:[{name:"Gilded Pleb",title:"Maintainer of HAB Node Project",url:"https://github.com/GildedPleb",email:"gildedpleb@protonmail.com",imageURL:"https://github.com/gildedpleb.png",key:"endi"}],frontMatter:{title:"A Caught in the Wild Case Study on HAB Node Importance",description:"Actual fail logs from a failed node, and the k8s responce",slug:"Case-study-1",authors:"endi",tags:["Case-Study","Failure-Recovery"],hide_table_of_contents:!1}},c={authorsImageUrls:[void 0]},s=[],u={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To provide some context around why HAB Nodes are practically important, this is\na real log from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/btcsuite/btcd"},"btcd")," syncing the bitcoin\nlive net that we witnessed which demonstrates the power of HAB Nodes:"))}d.isMDXComponent=!0}}]);