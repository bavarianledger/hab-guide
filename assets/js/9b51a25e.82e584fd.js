"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[8279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,b=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(b,r(r({ref:t},p),{},{components:n})):a.createElement(b,r({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Stand-up Live",l={unversionedId:"l3-bitcoin/standup-live",id:"l3-bitcoin/standup-live",title:"Stand-up Live",description:"Standing up a live Bitcoin node will require downloading the gildedpleb high",source:"@site/docs/l3-bitcoin/standup-live.md",sourceDirName:"l3-bitcoin",slug:"/l3-bitcoin/standup-live",permalink:"/hab-guide/docs/l3-bitcoin/standup-live",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/docs/l3-bitcoin/standup-live.md",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1673668922,formattedLastUpdatedAt:"Jan 14, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Layer 3 - Bitcoin",permalink:"/hab-guide/docs/category/layer-3---bitcoin"},next:{title:"Tear-down Live",permalink:"/hab-guide/docs/l3-bitcoin/teardown-live"}},s={},d=[],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stand-up-live"},"Stand-up Live"),(0,i.kt)("p",null,"Standing up a live Bitcoin node will require downloading the ",(0,i.kt)("inlineCode",{parentName:"p"},"gildedpleb")," high\navailability bitcoin helm chart, editing the values, and then installing the\nchart."),(0,i.kt)("p",null,"Before we do that, you should carefully read the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GildedPleb/helm-charts/blob/master/charts/hab/configuration.md"},"documentation"),"\non the HAB node chart, and browse\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GildedPleb/helm-charts/blob/master/charts/hab/examples.md"},"examples"),"\nof how to use it."),(0,i.kt)("p",null,"Importantly, you will need to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"values.hab.yml")," file which corresponds\nto your ",(0,i.kt)("inlineCode",{parentName:"p"},"host-plan")," and design objectives. This is where the rubber hits the\nroad. And there will be a great deal of customization and unique circumstances\ndictating exactly how your ",(0,i.kt)("inlineCode",{parentName:"p"},"values.hab.yml")," look. The original ",(0,i.kt)("inlineCode",{parentName:"p"},"values.hab.yml"),"\nfor the Ionico Base Node is\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GildedPleb/helm-charts/blob/master/charts/hab/examples.md#poc-hab-node"},"here"),"."),(0,i.kt)("p",null,"Once you have reviewed the documentation, and have an idea about how your node\ndeployment should look:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First let's get the chart into Helm. On the control computer run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add gildedpleb https://gildedpleb.github.io/helm-charts/\nhelm repo update\n")),(0,i.kt)("p",{parentName:"li"},"You can make sure it's added by running"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo list\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then lets copy over the default values to a new values file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm show values gildedpleb/hab > ~/.HAB/values.hab.yml\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"We will then edit ",(0,i.kt)("inlineCode",{parentName:"p"},"values.hab.yml")," according to configuration options,\nexamples, resources, and needs of your setup. This is the most difficult\nstep, again be mindful of ",(0,i.kt)("inlineCode",{parentName:"p"},".yml")," syntax.\n",(0,i.kt)("a",{parentName:"p",href:"https://www.linode.com/docs/guides/yaml-reference/"},"Here")," is a good primer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lastly, we will install the chart. First, create a new namespace for bitcoin,\nand get into that namespace:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace bitcoin\nkubectl ns bitcoin\n")),(0,i.kt)("p",{parentName:"li"},"Before installing, run a template and review it to make sure it looks good\nand passes validation:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm template gildedpleb/hab -f ~/.HAB/values.hab.yml > ./ChartBeingDeployed.yml\n")),(0,i.kt)("p",{parentName:"li"},"Then, if it looks good, install the bitcoin chart using the values you\ncreated."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm install hab gildedpled/hab -f ~/.HAB/values.hab.yml\n")))),(0,i.kt)("p",null,"Did it install without error? Congrats! You now have a Highly Available Bitcoin\nNode."),(0,i.kt)("p",null,"To make changes, edit ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.HAB/values.hab.yml")," and run the installation command\nagain."),(0,i.kt)("p",null,"Here are some useful commands to see it in action:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# View the pods, you should have 1 pod for each defined bitcoin instance, something like this:\n% kubectl get pods\nNAME                READY   STATUS     RESTARTS   AGE\nhab-bitcoind-ha-0   0/1     Init:0/1   0          16s\nhab-bitcoind-ha-1   0/1     Init:0/1   0          25s\nhab-bitcoind-ha-2   1/1     Running    0          35s\n\n# Take the name of one pod and look up the logs for it here:\n% kubectl logs hab-bitcoind-ha-2 --tail=5\nDefaulted container \"hab\" out of: hab, init-hab (init)\n2022-12-29T23:46:38Z New outbound peer connected: version: 70016, blocks=769471, peer=401 (block-relay-only)\n2022-12-29T23:50:14Z New outbound peer connected: version: 70015, blocks=769471, peer=402 (block-relay-only)\n2022-12-29T23:50:41Z UpdateTip: new best=000000000000000000026df884685dd8e297d9d5e686c35dcd5abe9dbf42e916 height=769472 version=0x20000000 log2_work=93.919827 tx=791945937 date='2022-12-29T23:50:26Z' progress=1.000000 cache=77.1MiB(566609txo)\n2022-12-30T00:02:06Z UpdateTip: new best=00000000000000000002aa7c40297d9c401b1f04aa35fedb2b3513f001357704 height=769473 version=0x20000004 log2_work=93.919839 tx=791948046 date='2022-12-30T00:01:50Z' progress=1.000000 cache=77.5MiB(569831txo)\n2022-12-30T00:06:03Z UpdateTip: new best=00000000000000000001371706efcda9dbf0489877d974a661804506577998bf height=769474 version=0x253ca000 log2_work=93.919850 tx=791949222 date='2022-12-30T00:06:00Z' progress=1.000000 cache=77.6MiB(570778txo)\n\n# To run commands against a bitcoin instance:\n% kubectl exec hab-bitcoind-ha-2 -- bitcoind --help\nDefaulted container \"hab\" out of: hab, init-hab (init)\nBitcoin Core version v22.0.0\nCopyright (C) 2009-2021 The Bitcoin Core developers\n\nPlease contribute if you find Bitcoin Core useful. Visit\n...\n")),(0,i.kt)("p",null,"Don't forget you can also navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"lh.gilded.lan")," (or whatever you changed\nit to) to see the provisioning and storage allocations."))}c.isMDXComponent=!0}}]);