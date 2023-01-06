"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[3364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2635:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:6},o="Terminology",s={unversionedId:"Introduction/terminology",id:"Introduction/terminology",title:"Terminology",description:"We need to define some terms that will have specific meaning for this guide.",source:"@site/docs/Introduction/terminology.md",sourceDirName:"Introduction",slug:"/Introduction/terminology",permalink:"/hab-guide/docs/Introduction/terminology",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/docs/Introduction/terminology.md",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1672988399,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Practical Considerations",permalink:"/hab-guide/docs/Introduction/practical"},next:{title:"Plan of Attack",permalink:"/hab-guide/docs/Introduction/piping"}},l={},d=[{value:"Layers",id:"layers",level:2},{value:"Actions",id:"actions",level:2},{value:"Descriptors",id:"descriptors",level:2},{value:"A &#39;node&#39; vs a &#39;node&#39;",id:"a-node-vs-a-node",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"terminology"},"Terminology"),(0,i.kt)("p",null,"We need to define some terms that will have specific meaning for this guide."),(0,i.kt)("h2",{id:"layers"},"Layers"),(0,i.kt)("p",null,"This guide is divided into three layers, which are distinct from the broader\nlayers of Bitcoin and web1/2/3/etc:"),(0,i.kt)("p",null,"Layer 1: ",(0,i.kt)("strong",{parentName:"p"},"Hosts")," These are the physical machines, OSs, users, and other basic\nlow-level, groundwork, or foundational architecture."),(0,i.kt)("p",null,"Layer 2: ",(0,i.kt)("strong",{parentName:"p"},"K3s")," Can be thought of as the HAB node operating system. It is the\ninterim layer between Bitcoin and the physical machines."),(0,i.kt)("p",null,"Layer 3: ",(0,i.kt)("strong",{parentName:"p"},"Bitcoin")," This is the final layer of the node. It is the software\nrunning on the Operating System, running on the Hardware."),(0,i.kt)("p",null,"At the moment, this guide does not incorporate Lightning or other Bitcoin\nreliant L2 systems, so this is where the guide stops (hopefully to be expanded\nin the future!). The entire project is organized around these three layers, and\nthey correspond to the file structure of the repo where you will be executing\ncode, and the guide itself."),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,"For the purposes of this guide, a ",(0,i.kt)("inlineCode",{parentName:"p"},"standup")," takes a machine in a lower state and\nelevates it to the desired state. A ",(0,i.kt)("inlineCode",{parentName:"p"},"teardown")," take a machine from its current\nstate and demotes it to a lower state. Grammatically there may be a bit of\nconfusion here, as subject in one is a future state and in the other it is the\ncurrent state. However, this methodology is useful because it is linear: we can\nnot teardown a host which has not been first stood up."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"teardown live host")," means taking a live host and moving it to a vanilla\nstate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"standup live host")," means taking a vanilla host and elevating it to a live\nhost.")),(0,i.kt)("h2",{id:"descriptors"},"Descriptors"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raw")," : a raw describer indicates either fresh out of the box, or newly\nrepurposed, and ",(0,i.kt)("em",{parentName:"p"},"not")," ready to use. If its a host, it hasn't even been turned on\nor correctly imaged, or if it has, it is certainly not in any assured state of\nbeing ready to receive kubernetes."),(0,i.kt)("p",null,"Raw is almost exclusively used for devices: be it computers, hard drives, or\nother hardware. We neither ",(0,i.kt)("inlineCode",{parentName:"p"},"standup")," a raw device nor ",(0,i.kt)("inlineCode",{parentName:"p"},"teardown")," a raw device. A\nraw device is at the entry point to the ecosystem. Instead, we may add a new raw\ndevice to inventory, prep a raw device, and then ",(0,i.kt)("inlineCode",{parentName:"p"},"standup")," a vanilla device."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Vanilla")," : a vanilla describer indicates uniform, minimal, basic\ncharacteristics that allow for something to be eligible as generically useful."),(0,i.kt)("p",null,"When we ",(0,i.kt)("inlineCode",{parentName:"p"},"standup")," a vanilla device we take it from a known or unknown raw state,\nto a known, uniform, usable preliminary state. We generally have no need for\n",(0,i.kt)("inlineCode",{parentName:"p"},"teardown")," of a vanilla host and returning it to the raw state, because that\nwould mean returning something to an unknown state. However, we do have need to\n",(0,i.kt)("inlineCode",{parentName:"p"},"teardown")," higher vanilla layers, like a vanilla app in the cluster to shut the\ncluster down."),(0,i.kt)("p",null,"We should also note that hosts in the vanilla state are to be assumed insecure:\nthey are vanilla, they have nothing to defend."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Live")," : a live describer indicates active participation at the top of class."),(0,i.kt)("p",null,"When we ",(0,i.kt)("inlineCode",{parentName:"p"},"standup")," a live host we are putting it in the cluster, where the host\ncan now support layers that reside above it. When we ",(0,i.kt)("inlineCode",{parentName:"p"},"teardown")," a live host we\nare returning it to the vanilla state. This may be useful when redesigning the\ncluster topology. Say, if we need to distribute or service a device."),(0,i.kt)("p",null,"A host in the live state should have security assurances locked down."),(0,i.kt)("h2",{id:"a-node-vs-a-node"},"A 'node' vs a 'node'"),(0,i.kt)("p",null,"Kubernetes internally labels each host a 'node', and by putting a bitcoin node\non a k8s node, there is a conflict between what a node is: is it a software\nbitcoin node or a k8s hardware node? In this guide, we will use Node (node) to\nmean Bitcoin software as much as possible or the entire cluster acting as such,\nand Host (host) to mean Kubernetes/physical computer as much as possible. This\nis convenient because Ansible uses hosts to mean, essentially, the same thing as\nk8s nodes. Though of course, as you will see, this will get violated (mostly\nunintentionally), so do pay attention to the context with which the term is\nbeing mentioned."))}u.isMDXComponent=!0}}]);