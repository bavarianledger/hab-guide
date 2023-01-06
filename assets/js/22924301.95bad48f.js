"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[5717],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),k=r,b=p["".concat(s,".").concat(k)]||p[k]||c[k]||l;return t?a.createElement(b,o(o({ref:n},d),{},{components:t})):a.createElement(b,o({ref:n},d))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=k;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1067:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:2},o="Stand-up Vanilla",i={unversionedId:"l2-k3s/standup-vanilla",id:"l2-k3s/standup-vanilla",title:"Stand-up Vanilla",description:"Now, let's finally get Kubernetes up and running.",source:"@site/docs/l2-k3s/standup-vanilla.md",sourceDirName:"l2-k3s",slug:"/l2-k3s/standup-vanilla",permalink:"/hab-guide/docs/l2-k3s/standup-vanilla",draft:!1,editUrl:"https://github.com/GildedPleb/hab-guide/edit/master/docs/l2-k3s/standup-vanilla.md",tags:[],version:"current",lastUpdatedBy:"GildedPleb",lastUpdatedAt:1672988399,formattedLastUpdatedAt:"Jan 6, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Control Prep",permalink:"/hab-guide/docs/l2-k3s/control-prep"},next:{title:"Tear-down Vanilla",permalink:"/hab-guide/docs/l2-k3s/teardown-vanilla"}},s={},u=[{value:"K3s",id:"k3s",level:2},{value:"Add New Vanilla Hosts",id:"add-new-vanilla-hosts",level:2}],d={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stand-up-vanilla"},"Stand-up Vanilla"),(0,r.kt)("p",null,"Now, let's finally get Kubernetes up and running."),(0,r.kt)("h2",{id:"k3s"},"K3s"),(0,r.kt)("p",null,"Let's inspect ",(0,r.kt)("inlineCode",{parentName:"p"},"K3s/standup-vanilla.yml"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The first thing we will do is a get a script from ",(0,r.kt)("inlineCode",{parentName:"li"},"https://get.k3s.io/")," that\ninstalls K3s, from the official k3s distribution source. If you would like to\nview that script, and you should, open up the link in a web browser."),(0,r.kt)("li",{parentName:"ol"},"Then we are going to create and save a server token which is used by our\nhosts to identify and join the cluster."),(0,r.kt)("li",{parentName:"ol"},"Then we are going to install k3s using the token on our Leader, followed by\nLieutenants, followed by Workers."),(0,r.kt)("li",{parentName:"ol"},"Once the worker hosts are ready, we will transfer the cluster credentials to\nthe control computer giving us access to the cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apb K3s/standup-vanilla.yml\n")),(0,r.kt)("p",null,"It may take a few minutes, so give it some time."),(0,r.kt)("p",null,"To confirm that everything is up and running, on your control machine run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get nodes -o wide\n")),(0,r.kt)("p",null,"And you should see something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"% kubectl get nodes -o wide\nNAME   STATUS   ROLES                       AGE     VERSION        INTERNAL-IP   EXTERNAL-IP   OS-IMAGE                         KERNEL-VERSION      CONTAINER-RUNTIME\nnuc1   Ready    control-plane,etcd,master   2m56s   v1.23.4+k3s1   10.1.0.30     <none>        Ubuntu 20.04.4 LTS               5.4.0-104-generic   containerd://1.5.9-k3s1\nnuc2   Ready    worker                      74s     v1.23.4+k3s1   10.1.0.31     <none>        Ubuntu 20.04.4 LTS               5.4.0-104-generic   containerd://1.5.9-k3s1\npi1    Ready    control-plane,etcd,master   99s     v1.23.4+k3s1   10.1.0.20     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1\npi2    Ready    control-plane,etcd,master   85s     v1.23.4+k3s1   10.1.0.21     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1\npi3    Ready    worker                      47s     v1.23.4+k3s1   10.1.0.22     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1\npi4    Ready    worker                      81s     v1.23.4+k3s1   10.1.0.23     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1\npi5    Ready    worker                      80s     v1.23.4+k3s1   10.1.0.24     <none>        Debian GNU/Linux 11 (bullseye)   5.10.103-v8+        containerd://1.5.9-k3s1\n\n")),(0,r.kt)("p",null,"You are now the proud owner of a Kubernetes Cluster\u2014Yet another Pleb is the\nserver farm now."),(0,r.kt)("h2",{id:"add-new-vanilla-hosts"},"Add New Vanilla Hosts"),(0,r.kt)("p",null,"If needed, we now have the ability to bring a new vanilla host into the cluster,\nwhich has been added to the host plan, with a one-liner command, without tearing\ndown or setting up anything but that host:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'apb Hosts/standup-live.yml -e "plan=host-plan-2022-03-17" && apb K3s/standup-vanilla.yml\n')),(0,r.kt)("p",null,"Now that we are up and running, let's investigate how to tear it down."))}p.isMDXComponent=!0}}]);