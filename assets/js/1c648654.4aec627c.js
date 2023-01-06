"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[18],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},i="Host Naming",l={unversionedId:"l1-hosts/host-naming",id:"l1-hosts/host-naming",title:"Host Naming",description:"Names don't need to be entered anywhere just yet, they only need to be assigned",source:"@site/docs/l1-hosts/host-naming.md",sourceDirName:"l1-hosts",slug:"/l1-hosts/host-naming",permalink:"/hab-guide/docs/l1-hosts/host-naming",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/docs/l1-hosts/host-naming.md",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1672988399,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Control Prep",permalink:"/hab-guide/docs/l1-hosts/control-prep"},next:{title:"Ansible",permalink:"/hab-guide/docs/l1-hosts/ansible"}},s={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"host-naming"},"Host Naming"),(0,o.kt)("p",null,"Names don't need to be entered anywhere just yet, they only need to be assigned\nin physical meat-space."),(0,o.kt)("admonition",{title:"Naming conventions",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All host names must be unique, valid\n",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names"},"dns subdomain names"),"\nas per RFC 1123 to comply with the Kubernetes spec. That means they must:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Contain no more than 253 characters"),(0,o.kt)("li",{parentName:"ul"},"Contain only lowercase alphanumeric characters, '-' or '.'"),(0,o.kt)("li",{parentName:"ul"},"Start with an alphanumeric character and end with an alphanumeric character"))),(0,o.kt)("p",null,"For example, our host names for our 7 machines in the Proof of Concept are as\nfollows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nuc1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nuc2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pi1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pi2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pi3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pi4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pi5"))),(0,o.kt)("p",null,"This is a pretty straightforward WYSIWUG naming convention, but you are welcome\nto get creative with naming as long as you stay within the naming spec."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It is advisable to ",(0,o.kt)("em",{parentName:"p"},"not")," name hosts by roles like ",(0,o.kt)("inlineCode",{parentName:"p"},"leader"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"master"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"slave")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"work-horse"),", etc. This guide is architecturally predicated on hosts being role\nagnostic. Highly available services assume failure and replacement of resources,\nor having interchangeable and expendable parts. Naming by role might add\nconfusion here.")),(0,o.kt)("p",null,"Importantly, a host name will also be used as a fully qualified domain name\n(FQDN). So, if you have hosts that are off site, and you do not have access to\nyour router to create custom DNS mappings (which don't need to be fully\nqualified, like 'pi1'), you will need to name them according to how they can be\nreached: e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"134.34.2.134"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"s8dj1-us-west.hostingservice.io"),". Most people\nwill not have to deal with this just yet, and this guide will not be working\nwith remote hosts at the present moment."),(0,o.kt)("admonition",{title:"Physically name the devices",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"It is advisable to keep track of these names by actually attaching them to the\nexterior of the physical device somehow, no need to be permanent, but this may\nhelp with troubleshooting later on.")),(0,o.kt)("p",null,"When you attempt to ",(0,o.kt)("inlineCode",{parentName:"p"},"standup")," a vanilla host, checks will be run to ensure that\nhost names meet the RFC 1123 standard. In fact, running these checks is the\nperfect opportunity to introduce Ansible. So, let's do that now."))}m.isMDXComponent=!0}}]);