"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[4081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(c,l(l({ref:t},u),{},{components:a})):n.createElement(c,l({ref:t},u))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>N,default:()=>S,frontMatter:()=>b,metadata:()=>f,toc:()=>w});var n=a(7462),o=a(7294),i=a(3905),l=a(6010),r=a(2389),s=a(7392),p=a(7094),u=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function h(e){const{lazy:t,block:a,defaultValue:i,values:r,groupId:h,className:c}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=r??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,p.U)(),[w,v]=(0,o.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=f[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&v(e)}const P=e=>{const t=e.currentTarget,a=S.indexOf(t),n=g[a].value;n!==w&&(C(t),v(n),null!=h&&y(h,String(n)))},I=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]??S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]??S[S.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},c)},g.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:I,onClick:P},i,{className:(0,l.Z)("tabs__item",m,i?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,r.Z)();return o.createElement(h,(0,n.Z)({key:String(t)},e))}const k="tabItem_Ymn6";function g(e){let{children:t,hidden:a,className:n}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(k,n),hidden:a},t)}const b={sidebar_position:7},N="Stand-up Vanilla Hosts",f={unversionedId:"l1-hosts/vanilla-host",id:"l1-hosts/vanilla-host",title:"Stand-up Vanilla Hosts",description:"We will now be standing up Vanilla Hosts.",source:"@site/docs/l1-hosts/vanilla-host.mdx",sourceDirName:"l1-hosts",slug:"/l1-hosts/vanilla-host",permalink:"/hab-guide/docs/l1-hosts/vanilla-host",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/docs/l1-hosts/vanilla-host.mdx",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1673668922,formattedLastUpdatedAt:"Jan 14, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Stand-up Raw Hosts",permalink:"/hab-guide/docs/l1-hosts/networking"},next:{title:"Stand-up Vanilla Recap",permalink:"/hab-guide/docs/l1-hosts/vanilla-recap"}},y={},w=[{value:"Stand-up Vanilla RPi",id:"stand-up-vanilla-rpi",level:2},{value:"Boot From SSD",id:"boot-from-ssd",level:2},{value:"Prep Raw Raspberry Pi&#39;s",id:"prep-raw-raspberry-pis",level:2},{value:"First Imaging",id:"first-imaging",level:3},{value:"Second Imaging",id:"second-imaging",level:3},{value:"Stand-up Vanilla NUCs",id:"stand-up-vanilla-nucs",level:2},{value:"Prep Raw NUCs",id:"prep-raw-nucs",level:2},{value:"Stand-up Vanilla NUCs",id:"stand-up-vanilla-nucs-1",level:2},{value:"Stand-up Vanilla Generic Device",id:"stand-up-vanilla-generic-device",level:2}],v={toc:w};function S(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stand-up-vanilla-hosts"},"Stand-up Vanilla Hosts"),(0,i.kt)("p",null,"We will now be standing up Vanilla Hosts."),(0,i.kt)("p",null,"For each host type below, you will have to do a handful of particulars before\nstanding up the vanilla host. However, once those are complete, you will be\nrunning ",(0,i.kt)("em",{parentName:"p"},"the same")," command on your control computer with different arguments.\nSomething like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apb Hosts/standup-vanilla.yml -e "rawhosts=hostName"\n')),(0,i.kt)("p",null,"Before you set up your hosts as per their type, and before you run any commands,\nlet's review the final code block we will be running. Open up\n",(0,i.kt)("inlineCode",{parentName:"p"},"Hosts/standup-vanilla.yml")," in an editor. This time, see if you can figure out\nwhat it's doing without heavily commented code. We suggest DuckDuckGoing\nanything you do not understand with a simple copy/past. However, if that is too\nin the weeds, we have heavily commented the Ansible plays for\n",(0,i.kt)("inlineCode",{parentName:"p"},"Hosts/prep-raw-pis-for-boot-from-usb.yml")," open that file to get a better\nrundown of Ansible files."),(0,i.kt)("p",null,"But, to broadly explain the ",(0,i.kt)("inlineCode",{parentName:"p"},"Hosts/standup-vanilla.yml")," code that we will run\nfor all hosts, the commands will do this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add a handful of files to the ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.HAB/inventory")," directory that will assist\nin planing and managing the cluster for later steps."),(0,i.kt)("li",{parentName:"ol"},"Fact gather about the new hosts added in the command line, and add then to\nany previously added hosts."),(0,i.kt)("li",{parentName:"ol"},"Check for host name validity and uniqueness."),(0,i.kt)("li",{parentName:"ol"},"Make sure, according to OS, that the host is up-to-date, and the appropriate\nsettings are set for being able to receive k3s."),(0,i.kt)("li",{parentName:"ol"},"Also add some important quality of life improvements, like message-of-the-day\nwhen you ssh into a host."),(0,i.kt)("li",{parentName:"ol"},"Assert and double check everything looks good to go.")),(0,i.kt)("p",null,"With this in mind, let's now prep your hosts according to the type of host they\nare."),(0,i.kt)(c,{values:[{label:"Raspberry Pi",value:"1"},{label:"NUC",value:"2"},{label:"Generic",value:"3"}],defaultValue:"1",mdxType:"Tabs"},(0,i.kt)(g,{value:"1",mdxType:"TabItem"},(0,i.kt)("h2",{id:"stand-up-vanilla-rpi"},"Stand-up Vanilla RPi"),(0,i.kt)("p",null,"Raspberry Pi's need no introduction. At this point in time, we should probably\nassume a great deal of pleb-nodes run on Raspberry Pis and much of the following\nshould be familiar to all who run them."),(0,i.kt)("h2",{id:"boot-from-ssd"},"Boot From SSD"),(0,i.kt)("p",null,"Running k3s in high availability mode\u2014where there are three or more controlling\nnodes that can individually be killed without the cluster going down\u2014may kill\nyour SD card from too many etcd writes, and besides, your SD card read/write\ntimes are very slow in comparison to what is available. The\n",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/ha-embedded/"},"docs")," suggest\nthat running k3s in HA on a SD card is not a good idea. We could run the DB\nexternally, and have 2 master nodes, but that feels antithetical\u2014we'd rather\nhave a third node to run in HA mode than a NFS external database managing node\nstate\u2014as said NFS may not be able to function as a full node itself."),(0,i.kt)("p",null,"In light of this, we will provision our pi's to boot from a SSD card connected\nto USB."),(0,i.kt)("h2",{id:"prep-raw-raspberry-pis"},"Prep Raw Raspberry Pi's"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Be sure all hosts and all SD/SSD media do not have any information on them that\nis not backed up or can not be lost. ",(0,i.kt)("em",{parentName:"p"},"Imaging will erase this information."))),(0,i.kt)("p",null,"The purpose of this first official imaging is to gather data about our pis, to\n",(0,i.kt)("inlineCode",{parentName:"p"},"ssh")," in for the first time, and to make sure they are ready to boot from an\nexternal SSD. Only once they are ready to boot from an external drive, will we\nbe able to stand up vanilla pis."),(0,i.kt)("p",null,"A few notes to keep in mind before embarking:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Host Count")," If you only have one pi, that's fine.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SD Count")," If you only have 1 SD card but multiple pis, you will have to run\nthrough this entire thing for each pi, individually, but it'll work.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Add a Pi Later")," You must also go through these steps to add a new pi,\nregardless of the state of other pis (when adding a new pi, you only have to\nexecute all actions against the one new pi, the other pis are golden)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"User/Password")," This guide and the Ansible scripts herein rely on a uniform\nuser/password schema when in the raw and vanilla state. Though you can deviate\nfrom them, it will make your life just a little easier to stick with the same\nuser and password for ALL hosts in the vanilla state. We will secure the host\nwith far superior methods later on."),(0,i.kt)("admonition",{parentName:"li",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"With the first Pi imaging, it is important to stick with the given name and\npassword. These are explicitly tied to a script and only used one time as such\nfor the first imaging. Then you can change them."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Booting From USB")," The\n",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#raspberry-pi-4-boot-eeprom"},"recommended way of ensuring that booting from USB is enabled"),"\nis simpler. However, this way will provide some more logging if things go\nsouth and will update firmware if needed."))),(0,i.kt)("h3",{id:"first-imaging"},"First Imaging"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you are setting up multiple pis, none of the params in the below list\nwill change pi to pi, thus, setting ",(0,i.kt)("inlineCode",{parentName:"p"},"to always use")," means you do not have to\ndo this for each image write when completed in parallel. Or if you only have\n1 SD card, you can write one image and start at ",(0,i.kt)("strong",{parentName:"p"},"Step vii")," for each\nadditional pi in ",(0,i.kt)("strong",{parentName:"p"},"This Step"),". In such a case, be sure to continue to\n",(0,i.kt)("strong",{parentName:"p"},"Step 2")," and ",(0,i.kt)("strong",{parentName:"p"},"3"),", before moving on to the next pi. Repeat for each\nRaspberry Pi:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Insert SD card into control computer"),(0,i.kt)("li",{parentName:"ol"},"In Raspberry Pi Imager, choose image: ",(0,i.kt)("inlineCode",{parentName:"li"},"Raspberry Pi OS Lite (64-bit)")),(0,i.kt)("li",{parentName:"ol"},"Select appropriate SD card"),(0,i.kt)("li",{parentName:"ol"},"Click the \u2699\ufe0f Advanced Options:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Image customization options: ",(0,i.kt)("inlineCode",{parentName:"li"},"to alwasy use")),(0,i.kt)("li",{parentName:"ul"},"\u2705 Enable SSH",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u2705 User password authentication"))),(0,i.kt)("li",{parentName:"ul"},"\u2705 Set username and password"),(0,i.kt)("li",{parentName:"ul"},"Username: ",(0,i.kt)("inlineCode",{parentName:"li"},"pi")),(0,i.kt)("li",{parentName:"ul"},"Password: ",(0,i.kt)("inlineCode",{parentName:"li"},"raspberryRaw")),(0,i.kt)("li",{parentName:"ul"},"\u2705 Set locale setting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Time zone: ",(0,i.kt)("inlineCode",{parentName:"li"},"[your timezone]")),(0,i.kt)("li",{parentName:"ul"},"Keyboard layout: ",(0,i.kt)("inlineCode",{parentName:"li"},"[your keyboard layout]")),(0,i.kt)("li",{parentName:"ul"},"\u2705 Skip first-run wizard"),(0,i.kt)("li",{parentName:"ul"},"If you are using wifi for this (not officially recommended, but\ndoable), you should set that up here"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"WRITE THE IMAGE")),(0,i.kt)("li",{parentName:"ol"},"Eject"),(0,i.kt)("li",{parentName:"ol"},"Put into appropriate RPi"),(0,i.kt)("li",{parentName:"ol"},"Attach pi to the network via Ethernet if you are using Ethernet"),(0,i.kt)("li",{parentName:"ol"},"Power on (aka, plug into power)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once all the pis are powered on (or once each pi is individually if you only\nhave 1 SD card), run this command on your local computer, alter the subnet\nto the subnet your pis are on, it can be CIDR, a range, or a single IP\u2014(it\ngets past to ",(0,i.kt)("inlineCode",{parentName:"p"},"nmap")," in the play). Again, use the method we discussed in\n",(0,i.kt)("a",{parentName:"p",href:"/docs/l1-hosts/ansible"},"Ansible")," and review the code you are about to run\nbefore running, we have heavily commented it to help."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bahs"},'apb Hosts/prep-raw-pis-for-boot-from-usb.yml -e "subnet=10.1.0.20-29"\n')),(0,i.kt)("p",{parentName:"li"},"If all is well, Ansible will update the software, ensure that booting from\nUSB is enabled, update firmware, log pertinent info, and shut down ALL the\npis. If something fails, consult the Ansible logs and trouble shoot any\nissues.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once all the pis are shut down, remove the SD Card(s)."))),(0,i.kt)("p",null,"You should never have to do this step again for any pi that has already done it.\nBut it's idempotent, so it doesn't matter if you do just to make sure\u2014and thus\nthe power of idempotence."),(0,i.kt)("p",null,"You can now boot from a USB attached drive, so, let's do that..."),(0,i.kt)("h3",{id:"second-imaging"},"Second Imaging"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open Raspberry Pi Imager once again on control computer:"),(0,i.kt)("li",{parentName:"ol"},"This time, for each RPi:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Insert ",(0,i.kt)("strong",{parentName:"li"},"SSD")," (not to be confused with SD Card) into the control computer."),(0,i.kt)("li",{parentName:"ul"},"Choose image: ",(0,i.kt)("inlineCode",{parentName:"li"},"Raspberry Pi OS Lite (64-bit)")),(0,i.kt)("li",{parentName:"ul"},"Select appropriate SSD"),(0,i.kt)("li",{parentName:"ul"},"Click the \u2699\ufe0f Advanced Options. If you are setting up multiple pis, the only\nparam of the bellow settings that will change pi to pi is the hostname",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Image customization options: ",(0,i.kt)("inlineCode",{parentName:"li"},"to always use")),(0,i.kt)("li",{parentName:"ul"},"\u2705 Set the hostname. Use the hostname that is already defined in DHCP/DNS\nfor the device the SSD belongs to: e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"pi1"),"."),(0,i.kt)("li",{parentName:"ul"},"\u2705 Enable SSH",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u2705 User password authentication"))),(0,i.kt)("li",{parentName:"ul"},"\u2705 Set username and password (This password can be altered, but its just\neasier keep it as is. If you alter them, they must stay uniform across\nhosts)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Username: ",(0,i.kt)("inlineCode",{parentName:"li"},"hab")),(0,i.kt)("li",{parentName:"ul"},"Password: ",(0,i.kt)("inlineCode",{parentName:"li"},"vanillaHab")))),(0,i.kt)("li",{parentName:"ul"},"\u2705 Set locale setting",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Time zone: ",(0,i.kt)("inlineCode",{parentName:"li"},"[your timezone]")),(0,i.kt)("li",{parentName:"ul"},"Keyboard layout: ",(0,i.kt)("inlineCode",{parentName:"li"},"[your keyboard layout]")),(0,i.kt)("li",{parentName:"ul"},"\u2705 Skip first-run wizard"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WRITE THE IMAGE")))),(0,i.kt)("li",{parentName:"ol"},"Eject"),(0,i.kt)("li",{parentName:"ol"},"Put SSD into appropriate RPi"),(0,i.kt)("li",{parentName:"ol"},"Power on")),(0,i.kt)("p",null,"If you didn't change the user/password, on the control machine, edit the host\nnames below and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apb Hosts/standup-vanilla.yml -e "rawhosts=pi1,pi2,pi3,pi4,pi5"\n')),(0,i.kt)("p",null,"If you did change the user and password, edit the host names, user, and password\nbelow and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apb Hosts/standup-vanilla.yml -e "rawhosts=pi1,pi2,pi3,pi4,pi5 user=pi pass=raspberryRaw"\n')),(0,i.kt)("p",null,"If there are no failures, all raw pi's are now vanilla hosts \ud83d\ude4c")),(0,i.kt)(g,{value:"2",mdxType:"TabItem"},(0,i.kt)("h2",{id:"stand-up-vanilla-nucs"},"Stand-up Vanilla NUCs"),(0,i.kt)("p",null,"NUCs are extremely performant, low form-factor, extensible consumer grade\ndevices but can be more expensive than pis."),(0,i.kt)("h2",{id:"prep-raw-nucs"},"Prep Raw NUCs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"User/Password")," This guide and the Ansible scripts herein rely on a uniform\nuser/password schema when in the raw and vanilla state. Though you can deviate\nfrom them, it will make your life just a little easier to stick with the same\nuser and password for ALL hosts in the vanilla state. We will secure the host\nwith far superior methods later on.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Be sure all hosts and all SD/SSD media do not have any information on them that\nis not backed up or can not be lost. ",(0,i.kt)("em",{parentName:"p"},"Imaging will erase this information."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install all the hardware on the NUC: M.2 drive, SATA, RAM, etc."),(0,i.kt)("li",{parentName:"ol"},"Connect monitor and keyboard to NUC."),(0,i.kt)("li",{parentName:"ol"},"Connect Ethernet cable."),(0,i.kt)("li",{parentName:"ol"},"Connect power, but no need to power on yet."),(0,i.kt)("li",{parentName:"ol"},"Get the latest Ubuntu server 20.04 image from\n",(0,i.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/server"},"Ubuntu")," on your controlling computer"),(0,i.kt)("li",{parentName:"ol"},'On the Ubuntu website, select "Option 2 - Manual Server Installation"'),(0,i.kt)("li",{parentName:"ol"},"Make sure you are downloading ",(0,i.kt)("strong",{parentName:"li"},"AMD"),' architecture (you are usually and it\nwill say so in the name of the download, e.g.\n"ubuntu-20.04.4-live-server-amd64.iso")'),(0,i.kt)("li",{parentName:"ol"},"Click download"),(0,i.kt)("li",{parentName:"ol"},"Open the Raspberry Pi Imager"),(0,i.kt)("li",{parentName:"ol"},'Choose "Use Custom" and find the image you just downloaded.'),(0,i.kt)("li",{parentName:"ol"},"Insert a SD card into the control computer"),(0,i.kt)("li",{parentName:"ol"},'Select it in Imager as the "storage" option'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Click WRITE")),(0,i.kt)("li",{parentName:"ol"},"Once written, Eject card and put it in the NUC"),(0,i.kt)("li",{parentName:"ol"},"Power on the NUC and hold / press F10 on the keyboard until you see the\n",(0,i.kt)("inlineCode",{parentName:"li"},"boot from")," screen."),(0,i.kt)("li",{parentName:"ol"},"Select boot from USB / SD."),(0,i.kt)("li",{parentName:"ol"},"Go through the process of setting up the server.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No need to enter your name"),(0,i.kt)("li",{parentName:"ul"},"User and password (This password can be altered, but it's just easier to\nkeep it as is):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"User: ",(0,i.kt)("inlineCode",{parentName:"li"},"hab")),(0,i.kt)("li",{parentName:"ul"},"Password: ",(0,i.kt)("inlineCode",{parentName:"li"},"vanillaHab")))),(0,i.kt)("li",{parentName:"ul"},"SSH:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"No need to copy over keys just yet"),(0,i.kt)("li",{parentName:"ul"},"Make sure password authentication is enabled"))),(0,i.kt)("li",{parentName:"ul"},"Select disk partitions and boot drives as you find appropriate, generally,\nwe want at least one massive partition > 1.5 TB."))),(0,i.kt)("li",{parentName:"ol"},"Once everything is installed, it will indicate a successful install, and ask\nyou to eject the USB / SD media, Eject it."),(0,i.kt)("li",{parentName:"ol"},"Boot the device from disk"),(0,i.kt)("li",{parentName:"ol"},"Log in using provided user/pass"),(0,i.kt)("li",{parentName:"ol"},"Do not disconnect keyboard / monitor until you can confirm that you can ssh\nin from local control machine using user/pass given above",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you can not log in, you may need to start ",(0,i.kt)("inlineCode",{parentName:"li"},"sshd")," on the NUC, run:\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo systemctl enable sshd")," (this is a problem we had) but there could be\na\n",(0,i.kt)("a",{parentName:"li",href:"https://duckduckgo.com/?q=can+not+SSH+into+Ubuntu+Server+on+NUC&t=ffab&ia=web"},"handful"),"\nof other things going on.)"))),(0,i.kt)("li",{parentName:"ol"},"Once you have SSHed in, escalate the ubuntu user permissions to use sudo\nwithout a password",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"run: ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo visudo")),(0,i.kt)("li",{parentName:"ol"},"Add: ",(0,i.kt)("inlineCode",{parentName:"li"},"ubuntu ALL=(ALL) NOPASSWD:ALL")," to the end of the file"),(0,i.kt)("li",{parentName:"ol"},"To save changes: ",(0,i.kt)("inlineCode",{parentName:"li"},"CTRL + o")),(0,i.kt)("li",{parentName:"ol"},"Confirm changes: ",(0,i.kt)("inlineCode",{parentName:"li"},"ENTER")),(0,i.kt)("li",{parentName:"ol"},"Exit and apply : ",(0,i.kt)("inlineCode",{parentName:"li"},"CTRL + x")))),(0,i.kt)("li",{parentName:"ol"},"Set the host name",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"A hostname will never change from top to bottom in this guide for each\ncomputer. Use the hostname that is already defined for this device: e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"nuc1")),(0,i.kt)("li",{parentName:"ol"},"While still logged in, run this command, be sure to change the name to\nmatch the NUC its being applied to, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"nuc1")," etc:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo hostnamectl set-hostname nuc1\n"))),(0,i.kt)("li",{parentName:"ol"},"It might also be good to make sure firmware is up-to-date with:\n",(0,i.kt)("inlineCode",{parentName:"li"},"fwupdmgr get-updates --ipfs")),(0,i.kt)("li",{parentName:"ol"},"Additionally, it's probably a good idea to make sure your hard drive, volume\ngroups, and logical volumes are in order. Run, ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo pvs")," ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo vgs")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo lvs"),". Your physical volumes ('pv', from 'pvs') should reflect the\nexpected disk space you have. So too should vgs (volume groups) and lvs\n(logic volumes). See\n",(0,i.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/1106795/ubuntu-server-18-04-lvm-out-of-space-with-improper-default-partitioning"},"here"),".")),(0,i.kt)("h2",{id:"stand-up-vanilla-nucs-1"},"Stand-up Vanilla NUCs"),(0,i.kt)("p",null,"Once all the NUCs are raw, as per these steps, run this command on your local\ncomputer:"),(0,i.kt)("p",null,"If you didn't change the user/password, edit the host names below and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apb Hosts/standup-vanilla.yml -e "rawhosts=nuc1,nuc2 nameservers=10.1.0.1,1.1.1.1 timezone=EST"\n')),(0,i.kt)("p",null,"If you did change the user and password, edit the hostnames, user, and password\nbelow and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apb Hosts/standup-vanilla.yml -e "rawhosts=nuc1,nuc2 user=newUser pass=newPassword nameservers=10.1.0.1,1.1.1.1 timezone=EST"\n')),(0,i.kt)("p",null,"Passing in a ",(0,i.kt)("inlineCode",{parentName:"p"},"nameserver")," is optional, if you do not pass one in, ",(0,i.kt)("inlineCode",{parentName:"p"},"1.1.1.1")," will\nbe used. Likewise with ",(0,i.kt)("inlineCode",{parentName:"p"},"timezone"),", default is ",(0,i.kt)("inlineCode",{parentName:"p"},"US/Pacific")),(0,i.kt)("p",null,"If there are no failures, all raw NUC's are now vanilla hosts \ud83d\ude4c")),(0,i.kt)(g,{value:"3",mdxType:"TabItem"},(0,i.kt)("h2",{id:"stand-up-vanilla-generic-device"},"Stand-up Vanilla Generic Device"),(0,i.kt)("p",null,"Given the setup for Raspberry Pis and NUCs, we should now have some guidelines\non setting up a ",(0,i.kt)("em",{parentName:"p"},"generic")," device. Be sure to read the NUC setup steps in\nparticular."),(0,i.kt)("p",null,"Of first importance is to make sure the device meets ",(0,i.kt)("em",{parentName:"p"},"hardware")," requirements\noutlined ",(0,i.kt)("a",{parentName:"p",href:"/docs/l1-hosts/hardware"},"elsewhere"),". With that set, the easiest way\nforward is to start with Ubuntu server, as it will be generally the most\nwell-supported among a variety of hardware. What is more, with Ubuntu, getting\nit into a raw state shouldn't be dissimilar from setting up a NUC as we have\njust seen."),(0,i.kt)("p",null,"Here are some basic goalposts for adding a generic host that we should call\nattention to from the NUC guide."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Name the host uniquely in accordance with your naming plan."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Get ssh access from your control machine via password."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure ",(0,i.kt)("inlineCode",{parentName:"li"},"hostnamectl")," is set correctly."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure Ansible does not need to enter the password to use root\nprivileges.")),(0,i.kt)("p",null,"All of these have pathways in the NUC guide above, in fact, again, most of the\nNUC guide should apply."),(0,i.kt)("p",null,"You can then stand up a vanilla generic raw host using the same command we have\nalready seen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apb Hosts/standup-vanilla.yml -e "rawhosts=geriatric1"\n')),(0,i.kt)("p",null,"If there are no failures, all raw generic hosts are now vanilla hosts \ud83d\ude4c"))),(0,i.kt)("p",null,"If you don't have any other computers, you can proceed to the section:\n",(0,i.kt)("a",{parentName:"p",href:"/docs/l1-hosts/live-hosts"},"Stand-up Live Hosts"),". Otherwise, change the tab\nabove to the next set of hosts."),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"All the steps above will soon be irrelevant when\n",(0,i.kt)("a",{parentName:"p",href:"https://openfaas.gumroad.com/l/netbooting-raspberrypi"},"netbooting"),"\u2014booting,\nimaging, and provisioning a Raspberry Pi (or any computer) remotely\u2014makes it\ninto the guide!")))}S.isMDXComponent=!0}}]);