"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[6087],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,m=p["".concat(l,".").concat(c)]||p[c]||u[c]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},r="What Will We Do",s={unversionedId:"Introduction/what",id:"Introduction/what",title:"What Will We Do",description:"Hopefully the previous page didn't scare you off. It's not going be too bad as",source:"@site/docs/Introduction/what.md",sourceDirName:"Introduction",slug:"/Introduction/what",permalink:"/hab-guide/docs/Introduction/what",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/docs/Introduction/what.md",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1674012352,formattedLastUpdatedAt:"Jan 18, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Target Audience",permalink:"/hab-guide/docs/Introduction/who"},next:{title:"Design Considerations",permalink:"/hab-guide/docs/Introduction/design"}},l={},d=[{value:"The Content vs The Commands",id:"the-content-vs-the-commands",level:2}],h={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-will-we-do"},"What Will We Do"),(0,a.kt)("p",null,"Hopefully the previous page didn't scare you off. It's not going be too bad as\nyou will see."),(0,a.kt)("p",null,"We have already outlined, in very broad strokes, what a HAB Node does in\n",(0,a.kt)("a",{parentName:"p",href:"/how#bitcoin-on-a-highly-available-node"},"How?")," So, let's now look a little\ncloser at ",(0,a.kt)("strong",{parentName:"p"},"what")," is needed to get that ",(0,a.kt)("em",{parentName:"p"},"how")," working. Looking at the\nmenu/outline at the left will get you a decent outline, but considering it seems\nlike a lot, let's bring some cohesion to it."),(0,a.kt)("p",null,"To create a Highly Available Bitcoin Node, we will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Design a cluster on paper tailored to your specific situation (up next)"),(0,a.kt)("li",{parentName:"ol"},"Review guide terminology and methodology for achieving that design"),(0,a.kt)("li",{parentName:"ol"},"Prep our Control Computer with needed software"),(0,a.kt)("li",{parentName:"ol"},"Name, organize, network and prep host computers, so they are ready to enter\ninto a cluster (Layer 1 - Hosts)"),(0,a.kt)("li",{parentName:"ol"},"Cluster these host computers together with Kubernetes (Layer 2 - K3s:\nVanilla)"),(0,a.kt)("li",{parentName:"ol"},"Provision our cluster with apps and services that make it welcoming for\nBitcoin (Layer 2 - K3s: Live)"),(0,a.kt)("li",{parentName:"ol"},"Add Bitcoin to the cluster (Layer 3 - Bitcoin)")),(0,a.kt)("p",null,"Undoubtedly, this can seem intimidating. But don't grow faint-hearted, the vast\nmajority of this guide is ",(0,a.kt)("em",{parentName:"p"},"reading and comprehension")," not ",(0,a.kt)("em",{parentName:"p"},"doing"),"."),(0,a.kt)("h2",{id:"the-content-vs-the-commands"},"The Content vs The Commands"),(0,a.kt)("p",null,"To that end, here is a (nearly) full list of the commands that will be required\nto spin up a HAB Node from this guide, assuming your hosts are imaged and\nnetworked, and your Control Computer has all the software installed correctly:"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"It should go without saying but, DO NOT run this code block. We will run these\ncommands one by one in the guide.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/gildedpleb/hab-plays.git\necho $0\necho \'alias apb="ansible-playbook"\' >> ~/.zshrc && source ~/.zshrc\nmkdir ~/.HAB\necho \'#!/bin/sh\\n\\necho \'"\\"$(/usr/bin/openssl rand -base64 63 | tr -d \'\\n\')\\"" > ~/.HAB/.ansible_vault_access\nchmod +x ~/.HAB/.ansible_vault_access\ncd hab-plays\nansible-config dump --only-changed\napb Hosts/validate-hostname.yml --extra-vars "hostName=test1"\napb Hosts/prep-raw-pis-for-boot-from-usb.yml -e "subnet=10.1.0.20-29"\napb Hosts/standup-vanilla.yml -e "rawhosts=pi1,pi2,pi3,pi4,pi5"\napb Hosts/standup-vanilla.yml -e "rawhosts=nuc1,nuc2 nameservers=10.1.0.1,1.1.1.1 timezone=EST"\ntouch ~/.HAB/vault-hosts\nansible-vault encrypt ~/.HAB/vault-hosts\ncat ~/.HAB/vault-hosts\nawk \'NR>=6\' ~/.HAB/inventory/host-plan.tpl > ~/.HAB/inventory/host-plan-$(date "+%Y-%m-%d")\napb Hosts/standup-live.yml -e "plan=host-plan-2022-03-17"\napb K3s/standup-vanilla.yml\nkubectl get nodes -o wide\napb K3s/standup-live.yml\nhelm repo add gildedpleb https://gildedpleb.github.io/helm-charts/\nhelm show values gildedpleb/hab > values.hab.yml\nhelm install hab gildedpled/hab -f values.hab.yaml\n')),(0,a.kt)("p",null,"Yup. That's it. That's the entire guide. Just short of 25 commands, many of\nwhich can be combined, and some of which are not needed but offer some fun or\nverification. Less than 25 commands will get you a production grade industrially\ndefended node, and nearly unlimited optionality, a setup not dissimilar to how\n",(0,a.kt)("em",{parentName:"p"},"trillions")," of value in the legacy web is presently managed and defended\u2014all\nfrom home. Of course, you will have to edit some text files, change some\nsettings, the exact commands you run will be slightly different, and you'll have\nto work with additional UIs, but the above commands constitute ",(0,a.kt)("em",{parentName:"p"},"all")," the heavy\nlifting."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"#WorthIt")),(0,a.kt)("p",null,"We are striving to make it so a full 95% of what this guide entails is ",(0,a.kt)("em",{parentName:"p"},"reading"),"\nto understand what the few lines of codes you are to execute are ",(0,a.kt)("em",{parentName:"p"},"doing"),". This\nis for at least two reasons:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We hope that this seems intuitively important; this will hopefully make any\nfuture HAB Node work that seeks to wrap these commands (or commands like\nthem) into a friendly GUI as easy as possible, so that future HAB Node setups\nmay not have to run commands ",(0,a.kt)("em",{parentName:"li"},"at all")," but instead can simply open up a\nmanagement GUI and drag and drop."),(0,a.kt)("li",{parentName:"ol"},"We hope that this teaches other developers unfamiliar with the stack the\nentry level architecture needed to get up to speed on the technology quickly\nso that they can start thinking about this stuff practically in how they\ndevelop other bitcoin ecosystem apps.")),(0,a.kt)("p",null,"This is also a note on just how fresh this technology truly is. We hope that\nfrom here, this guide would become two separate setup paths: a guide like\nRaspiBolt and a straightforward GUI solution."),(0,a.kt)("admonition",{title:'Is "One Click" Possible?',type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Unfortunately, we don't think it's feasible to get a HAB Node set up with \"1\nclick\" until we can codify best practices around choosing roles for hosts. The\ndifficulty lies in an answer to this question: Under what metrics should the\nquorum of leaders be distinguished from the workers? Presently, it depends on\nnumber of hosts, host type, location, compute, hardware, storage, stability,\nconnectivity, etc., and for all of those loose metrics, we must determine how\nthey are quantified. Until best practices are known, the answers here will be\nopinionated and dependent on operator capabilities, resources, and budget."),(0,a.kt)("p",{parentName:"admonition"},'Point is, it seems like there will be, for a while to come, a needed step where\nthe operator decides who is who among his hosts and how each should be\nprovisioned. As such, a HAB Node can not be created in "1 click". But let\'s not\noverstate that: with netbooting and a GUI, we can get ',(0,a.kt)("em",{parentName:"p"},"incredibly"),' close. It\'s\nnot inconceivable to get there with "n clicks" where n does not exceed the\nnumber of ',(0,a.kt)("em",{parentName:"p"},"hosts"),"."),(0,a.kt)("p",{parentName:"admonition"},"A first order solution to achieve that may be to investigate the feasibility of\nmaking ",(0,a.kt)("em",{parentName:"p"},"all")," hosts control plane hosts, so long as there are an odd number of\nthese hosts, and they meet control plane best practices, then make the remainder\n(if any) workers.")),(0,a.kt)("p",null,"Now that we have some more details about what we are about to do, let's address\na few design and practical considerations which will affect how we build our\nnode, the hardware that we choose to employ, and how we will think about roles."))}p.isMDXComponent=!0}}]);