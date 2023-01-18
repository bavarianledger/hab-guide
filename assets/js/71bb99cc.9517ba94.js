"use strict";(self.webpackChunkhab_guide=self.webpackChunkhab_guide||[]).push([[5462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?o.createElement(m,l(l({ref:t},h),{},{components:n})):o.createElement(m,l({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5364:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const i={title:"How does a HAB Node work?"},l="How does a HAB Node Work?",r={type:"mdx",permalink:"/hab-guide/how",source:"@site/src/pages/how.md",title:"How does a HAB Node work?",description:"A HAB node depends on a construct called Container Orchestration (CO for this",frontMatter:{title:"How does a HAB Node work?"}},s=[{value:"Turing",id:"turing",level:2},{value:"Containerization",id:"containerization",level:2},{value:"Orchestration",id:"orchestration",level:2},{value:"Kubernetes",id:"kubernetes",level:3},{value:"Bitcoin on a Highly Available Node",id:"bitcoin-on-a-highly-available-node",level:2},{value:"Scenario 1",id:"scenario-1",level:2},{value:"Scenario 2",id:"scenario-2",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-does-a-hab-node-work"},"How does a HAB Node Work?"),(0,a.kt)("p",null,"A HAB node depends on a construct called Container Orchestration (CO for this\narticle), which is what Kubernetes (k8s) does. There are many good technical\nintroductions to this, so if you are already deeply familiar with programming\nand computers, we suggest this one from\n",(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/cloud/learn/container-orchestration"},"IBM"),"."),(0,a.kt)("p",null,"That said, CO is a fairly niche concept. Many of the explanations of CO or\nKubernetes do not approach the topic from first principles, either assuming deep\nknowledge of how computers work (e.g. the explainer is intended for\nlong-established technical experts learning a new niche) or, on the contrary,\nthey do not have a wide enough understanding of the topic to ",(0,a.kt)("em",{parentName:"p"},"also")," explain or\ninclude the ",(0,a.kt)("em",{parentName:"p"},"why")," and ",(0,a.kt)("em",{parentName:"p"},"how"),' of the problem they solve in a relatable way (e.g.\n"Here\'s how to build a k8s cluster, to solve the problem of not being as hip as\nyou could be").'),(0,a.kt)("p",null,"In this explainer, we hope to avoid both of these pitfalls."),(0,a.kt)("h2",{id:"turing"},"Turing"),(0,a.kt)("p",null,"Let's start with something that exists in reality, that everyone should be\nfamiliar with, a cat:\n",(0,a.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg",alt:"Cat"})),(0,a.kt)("p",null,"Now, let's consider something else that exists in reality, a\ncomputer:",(0,a.kt)("img",{parentName:"p",src:"https://www.publicdomainpictures.net/pictures/160000/velka/ordinateur-de-bureau-pc-1456070535WEH.jpg",alt:"https://www.publicdomainpictures.net/pictures/160000/velka/ordinateur-de-bureau-pc-1456070535WEH.jpg"})),(0,a.kt)("p",null,"Where do these two things overlap?"),(0,a.kt)("p",null,"Well, for starters, the cat has the ability to see and recognize symbols, say,\nof another cat. As such, it has a symbol of what a cat looks like in its mind.\nWe humans have this ability too, we have a symbol (albeit imperfect) of a cat,\nor another human, or a computer in our head which allows us to recognize what we\nare looking at. Indeed, for humans it goes far deeper than this; a human who\nknows another human sufficiently well, can simulate with decent enough accuracy\nwhat that other person would think, say, or do, given a certain premise (for\nmore on this see the book,\n",(0,a.kt)("a",{parentName:"p",href:"https://www.goodreads.com/book/show/123471.I_Am_a_Strange_Loop"},"I am a Strange Loop by Douglas Hofstadter"),")."),(0,a.kt)("p",null,'Now, let\'s consider what the computer "thinks": a computer, too can think of a\ncomputer, but not in the same way that a cat or a human think of themselves. It\nhas a unique property in that it can, inside itself, simulate how another\ncomputer thinks. And this is important: it need not be a ',(0,a.kt)("em",{parentName:"p"},"symbol")," at all, it can\nbe a fully functioning computer, and it can be completely indistinguishable from\nitself: an ",(0,a.kt)("em",{parentName:"p"},"exact")," copy."),(0,a.kt)("p",null,"Without diving into the nuance, this ability is achievable by any computer in\nthe class of computers known as Turning Complete, as defined by Alan\nTurning.",(0,a.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/0/03/Turing_Machine_Model_Davey_2012.jpg",alt:"https://en.wikipedia.org/wiki/File:Turing_Machine_Model_Davey_2012.jpg"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/File:Turing_Machine_Model_Davey_2012.jpg"},"A basic Turing Machine")),(0,a.kt)("p",null,"Nearly all computers which can perform the simple functions of store data, read\ndata, and change data can do this. Even the originally conceived Turing Machine\nshown above. Yes, given enough tape, it can simulate a ",(0,a.kt)("em",{parentName:"p"},"MacBook"),". This is a very\npowerful concept:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A Turing machine is a mathematical model of computation describing an abstract\nmachine that manipulates symbols on a strip of tape according to a table of\nrules. Despite the model's simplicity, it is capable of implementing any\ncomputer algorithm. ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Turing_machine"},"Wikipedia"))),(0,a.kt)("p",null,"It is so powerful it can emulate entire computers which emulate computers which\nemulate computers, recursively forever (in theory, of course, in practice memory\nalways runs out). Which is to say, given enough tape, the above tape based\nTurning Machine can emulate a MacBook which is emulating a tap computer, which\nis emulating a MacBook... well, you get the idea."),(0,a.kt)("p",null,"The best visual example of this, of course, is\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"},"Conway's Game of Life"),",\na single player game that has the unique quality of also being Turing Complete,\nit can emulate itself (given an infinite playing board):"),(0,a.kt)("iframe",{width:"100%",height:"400vh",src:"https://www.youtube-nocookie.com/embed/4lO0iZDzzXk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope",allowFullScreen:!0}),(0,a.kt)("p",null,"Computers are good at many things like word processing, social media, or playing\ngames, but many of these uses do not employ the computers' ability to simulate\nitself. In fact, very little, historically speaking, of any consumer use cases\nrely on simulating other computers. One standout use case is for security: one\ncontainer can only communicate with another container via network routing\ndespite living on the same physical memory chips. To this end, entire extremely\nsecure OSes are built where ",(0,a.kt)("a",{parentName:"p",href:"https://www.qubes-os.org/"},"each app is a VM"),". But\nwhen the rubber hits the road, this may completely exceed consumer threat\nmodeling. And rightly so, there is by and large fundamentally no need to nest\ncomputers without extraneous reason, it is expensive and only gives you what you\nalready have. Emulation mostly exists as a cool, if not a bit weird, possibility\nin computing."),(0,a.kt)("p",null,"That was, until Docker came onto the scene in 2013, and put this on its head\nwith one very big use case: Containerization."),(0,a.kt)("h2",{id:"containerization"},"Containerization"),(0,a.kt)("p",null,"Containers are very lightweight virtual machines. They don't emulate the entire\ncomputer, but emulate just enough to find a good balance between form and\nfunction. And as it turns out, they are ",(0,a.kt)("em",{parentName:"p"},"extremely")," useful in attempting to\nsolve problems of\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lzf9LD1unTk"},"resource isolation and application packaging"),".\nIt is very easy to assign resources to a virtual computer that will never be\nexceeded when that computer has no way of knowing there are more resources to\nuse\u2014like one level of the game of life being unaware of any level which supports\nit. What is more, packaging an application is much easier and more reliable when\nall the dependencies all the way down to the OS can be included."),(0,a.kt)("p",null,'A container that has these declarative resources can also have defined\ninitialization steps. For instance, to set up a new server, generally, you would\nneed to install the OS, set users, set passwords, apply security measures,\nupdate, and add services to get the box into a working state. When the box\nitself is a virtual computer, you can begin to automate, remove, or simplify\nsteps, grouping similar work flows into what are now called "images"\u2014an "image"\nof a computer that is set up a particular way. If you want a container that will\nhost a website written in JavaScript, you might consider using any one of the\nNodeJS images, which are fully optimized to run NodeJs scripts, adding a few\nbuild steps to serve the website, and then saving that image. The upshot being,\nif you want to replicate the container running that image, all the processes\nwhich need to run to do so, are fully defined, easily sharable, and thus all the\ndifficulties of running the software are already overcome.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),", in 2013, was the first to market that did all\nthe above, and a bit more, to make containerization an easy-to-use development\nand operations tool. It changed the way people thought about virtualizing\ncomputers. And consequently, it began to show where new help was now needed:\nwhen all your apps and services were running in containers, organizing,\nautomating, scaling, and monitoring those containers became paramount."),(0,a.kt)("p",null,"Enter, orchestration."),(0,a.kt)("h2",{id:"orchestration"},"Orchestration"),(0,a.kt)("p",null,"Though many companies have worked through these issues as well, Google,\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=lsFDp-W1Ks0"},"perhaps"),", has the longest history\nand experience with orchestrating both physical machines and virtual ones.\nGoogle launched it's first production server on cheap, expected to fail,\nconsumer hardware using custom fault-tolerant software."),(0,a.kt)("p",null,'Eventually, that idea became an internal tool called\n"',(0,a.kt)("a",{parentName:"p",href:"https://research.google/pubs/pub43438/"},"Borg"),'".'),(0,a.kt)("p",null,"It solved problems like:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Making sure a container is healthy"),(0,a.kt)("li",{parentName:"ul"},"Making sure there are the right number of healthy containers"),(0,a.kt)("li",{parentName:"ul"},"Making sure these containers can talk to each other"),(0,a.kt)("li",{parentName:"ul"},"Making sure they are located on appropriate physical machines"),(0,a.kt)("li",{parentName:"ul"},"Making sure certain jobs run at certain times"),(0,a.kt)("li",{parentName:"ul"},"Etc")),(0,a.kt)("p",null,"Borg was (",(0,a.kt)("em",{parentName:"p"},"is"),') the "secret sauce" for Google, and it is how Google delivered\nall of its applicable products as highly fault-tolerant and scalable. This\nbecame the backdrop of what is now Kubernetes, a free and open source,\norchestration tool for containers.'),(0,a.kt)("h3",{id:"kubernetes"},"Kubernetes"),(0,a.kt)("p",null,"To put some scale on how incredible k8s is, one of the unique problems that\nKubernetes solves is scaling: adding more servers to a deployment as more\nresources are demanded, or, conversely, scaling down servers as less resources\nare needed. It does this by measuring how many hits a server might be getting\nand then adjusting the number of containers that would service those hits. 100\nhits per second might only need 2 containers, while a million hits per second\nmight need 10,000. A properly configured Kubernetes setup, would be able to\nseamlessly spin up or down any number of new servers according to whatever the\ndemand was."),(0,a.kt)("p",null,'These numbers are not exaggerations. Attached are two great examples of how\npowerful k8s is. This is k8s scaling up servers in a server farm \u2014 and then\nrolling out an update while maintaining steady latency and no downtime. To be\nclear, when the narrator says "servers" he is referring to containers. However,\nlet not the magic of Kubernetes be lost on anyone: when you watch these videos\ntry to imagine spinning up the stated number of ',(0,a.kt)("em",{parentName:"p"},"physical computers")," in ",(0,a.kt)("em",{parentName:"p"},"any"),"\namount of time. ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7TOWLerX0Ps"},"Example 1,")," and\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=9C6YeyyUUmI"},"Example 2"),"."),(0,a.kt)("p",null,"Kubernetes is tremendously powerful and important. In fact, we'd wager that it\nis in the top 5 most important pieces of software written in the last 20 years\n(along with Bitcoin and a short list of others). In summary, Kubernetes allows\nyou to coordinate ",(0,a.kt)("em",{parentName:"p"},"any set of computers")," into one single cluster\u2014and as long as\nthose computers have an internet connection, they can live anywhere on ",(0,a.kt)("em",{parentName:"p"},"earth"),".\nKubernetes is ",(0,a.kt)("em",{parentName:"p"},"software")," that makes applications ",(0,a.kt)("em",{parentName:"p"},"physical-reality-agnostic"),". It\nallows for hardware to completely fail, while keeping the ",(0,a.kt)("em",{parentName:"p"},"software")," still\nrunning. In short, for all practical interaction with the apps that run in CO\nenvironments, OC effectively divorces software from hardware."),(0,a.kt)("p",null,"Kubernetes is now the international standard for handling these problems and is\nresponsible for trillions in value as it supports large swaths of the legacy\ninternet. The Kubernetes landscape is\n",(0,a.kt)("a",{parentName:"p",href:"https://landscape.cncf.io/card-mode?grouping=no&sort=amount"},"presently funded"),"\nby a staggering $56 Billion."),(0,a.kt)("p",null,"Which brings us to the new internet, the peer internet, and Bitcoin."),(0,a.kt)("h2",{id:"bitcoin-on-a-highly-available-node"},"Bitcoin on a Highly Available Node"),(0,a.kt)("p",null,"Collectively, CO services like Kubernetes, in solving many of the problems just\nlisted, become what is known as Highly Available (or High Availability): they\nare very unlikely to go down under all kinds of different stress. This is where\nwe get the name ",(0,a.kt)("em",{parentName:"p"},"HA Bitcoin Node"),"."),(0,a.kt)("p",null,"In broad strokes, a HAB Node is set up and works like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A few bitcoin node-capable computers are spun up with reachable addresses."),(0,a.kt)("li",{parentName:"ol"},'They are then provisioned with Kubernetes, and their resources are cataloged,\nand health checked (they become a "cluster").'),(0,a.kt)("li",{parentName:"ol"},"Many implementations and versions of Bitcoin are made into images."),(0,a.kt)("li",{parentName:"ol"},"Those images are then organized into a plan, according to operator preference\nand resources, to be used in containers on the various hosts."),(0,a.kt)("li",{parentName:"ol"},'That "plan" is given to Kubernetes, and k8s looks at its health and\navailability of its resources and does what it thinks is best in deploying\nthat plan and keeping to that plan.'),(0,a.kt)("li",{parentName:"ol"},'If resources are degraded, it attempts to "move" the bitcoin container(s)\naway from the degraded resource and towards the healthy ones in accordance\nwith keeping the plan active.')),(0,a.kt)("p",null,"This setup allows for dynamic and fault-tolerant node operating scenarios."),(0,a.kt)("h2",{id:"scenario-1"},"Scenario 1"),(0,a.kt)("p",null,"In an obvious example, where we are vastly reducing the complexity of what is\nactually happening, let's say there are two host computers in the cluster. Both\nare local machines. The plan is such that, on each of the local machines, a\nbitcoin container and a lightning container runs, each with a full copy of the\nblockchain networked together (Fig. 1)."),(0,a.kt)("p",null,"For all Figures, \u2194 represent a peer-to-peer connection and \u2192 represent a\ndependency connection, and ... is a broken connection. Let's see how various\nentities in the cluster can fail, yet the cluster remain available:"),(0,a.kt)("p",null,"Fig. 1. Healthy two host HAB Node"),(0,a.kt)("mermaid",{value:"flowchart LR\n\tHABN:::HABNClass\n\tsubgraph HABN [Highly Available Bitcoin Node]\n\t\tsubgraph host1 [Computer 1]\n\t\t\tbtc1[Bitcoin Node 1]\n\t\t\tln1([Lightning Node 1])\n\t\tend\n\t\tsubgraph host2 [Computer 2]\n\t\t\tbtc2[Bitcoin Node 2]\n\t\t\tln2([Lightning Node 2])\n\t\tend\n\tend\n\n\tbtc((Bitcoin Network))\n\tln((Lightning Network))\n\n\tbtc1 <--\x3e btc2\n\tbtc <--\x3e btc1\n\tbtc <--\x3e btc2\n\n\tbtc1 --\x3e ln1\n\tbtc1 --\x3e ln2\n\tbtc2 --\x3e ln1\n\tbtc2 ---\x3e ln2\n\n\tln1 <--\x3e ln\n\tln2 <--\x3e ln1\n\tln2 <--\x3e ln\n\n\tstyle btc fill:orange,color:black\n\tstyle ln fill:yellow,color:black\n\n\tclassDef HABNClass display:inline-block\n"}),(0,a.kt)("p",null,"Fig. 2. HAB Node with failed Bitcoin Node 1"),(0,a.kt)("mermaid",{value:"flowchart LR\n\tHABN:::HABNClass\n\tsubgraph HABN [Highly Available Bitcoin Node]\n\t\tsubgraph host1 [Computer 1]\n\t\t\tbtc1[Bitcoin Node 1]\n\t\t\tln1([Lightning Node 1])\n\t\tend\n\t\tsubgraph host2 [Computer 2]\n\t\t\tbtc2[Bitcoin Node 2]\n\t\t\tln2([Lightning Node 2])\n\t\tend\n\tend\n\n\tbtc((Bitcoin Network))\n\tln((Lightning Network))\n\n\tbtc1 -.- btc2\n\tbtc -.- btc1\n\tbtc <--\x3e btc2\n\n\tbtc1 -.- ln1\n\tbtc1 -.- ln2\n\tbtc2 --\x3e ln1\n\tbtc2 ---\x3e ln2\n\n\tln1 <--\x3e ln\n\tln2 <--\x3e ln1\n\tln2 <--\x3e ln\n\n\tstyle btc fill:orange,color:black\n\tstyle ln fill:yellow,color:black\n\n\tclassDef HABNClass display:inline-block\n\tstyle btc1 fill:red\n"}),(0,a.kt)("p",null,"Fig. 3. HAB Node with failed Lightning Node 1"),(0,a.kt)("mermaid",{value:"flowchart LR\n\tHABN:::HABNClass\n\tsubgraph HABN [Highly Available Bitcoin Node]\n\t\tsubgraph host1 [Computer 1]\n\t\t\tbtc1[Bitcoin Node 1]\n\t\t\tln1([Lightning Node 1])\n\t\tend\n\t\tsubgraph host2 [Computer 2]\n\t\t\tbtc2[Bitcoin Node 2]\n\t\t\tln2([Lightning Node 2])\n\t\tend\n\tend\n\n\tbtc((Bitcoin Network))\n\tln((Lightning Network))\n\n\tbtc1 <--\x3e btc2\n\tbtc <--\x3e btc1\n\tbtc <--\x3e btc2\n\n\tbtc1 -.- ln1\n\tbtc1 --\x3e ln2\n\tbtc2 -.- ln1\n\tbtc2 ---\x3e ln2\n\n\tln1 -.- ln\n\tln2 -.- ln1\n\tln2 <--\x3e ln\n\n\tstyle btc fill:orange,color:black\n\tstyle ln fill:yellow,color:black\n\n\tclassDef HABNClass display:inline-block\n\tstyle ln1 fill:red"}),(0,a.kt)("p",null,"Fig. 4. HAB Node with failed Lightning Node 1, and failed Bitcoin Node 2"),(0,a.kt)("mermaid",{value:"flowchart LR\n\tHABN:::HABNClass\n\tsubgraph HABN [Highly Available Bitcoin Node]\n\t\tsubgraph host1 [Computer 1]\n\t\t\tbtc1[Bitcoin Node 1]\n\t\t\tln1([Lightning Node 1])\n\t\tend\n\t\tsubgraph host2 [Computer 2]\n\t\t\tbtc2[Bitcoin Node 2]\n\t\t\tln2([Lightning Node 2])\n\t\tend\n\n\tend\n\n\tbtc((Bitcoin Network))\n\tln((Lightning Network))\n\n\tbtc1 -.- btc2\n\tbtc <--\x3e btc1\n\tbtc -.- btc2\n\n\tbtc1 -.- ln1\n\tbtc1 --\x3e ln2\n\tbtc2 -.- ln1\n\tbtc2 -.- ln2\n\n\tln1 -.- ln\n\tln2 -.- ln1\n\tln2 <--\x3e ln\n\n\tstyle btc fill:orange,color:black\n\tstyle ln fill:yellow,color:black\n\n\tclassDef HABNClass display:inline-block\n\tstyle ln1 fill:red\n\tstyle btc2 fill:red"}),(0,a.kt)("p",null,"Fig. 5. HAB Node with failed Computer 1"),(0,a.kt)("mermaid",{value:"flowchart LR\n\tHABN:::HABNClass\n\tsubgraph HABN [Highly Available Bitcoin Node]\n\t\tsubgraph host1 [Computer 1]\n\t\t\tbtc1[Bitcoin Node 1]\n\t\t\tln1([Lightning Node 1])\n\t\tend\n\t\tsubgraph host2 [Computer 2]\n\t\t\tbtc2[Bitcoin Node 2]\n\t\t\tln2([Lightning Node 2])\n\t\tend\n\n\tend\n\n\tbtc((Bitcoin Network))\n\tln((Lightning Network))\n\n\tbtc1 -.- btc2\n  btc -.- btc1\n  btc <--\x3e btc2\n\n\tbtc1 -.- ln1\n\tbtc1 -.- ln2\n\tbtc2 -.- ln1\n\tbtc2 ---\x3e ln2\n\n\tln1 -.- ln\n\tln2 -.- ln1\n\tln2 <--\x3e ln\n\n\tstyle btc fill:orange,color:black\n\tstyle ln fill:yellow,color:black\n\n\tclassDef HABNClass display:inline-block\n\tstyle host1 fill:red"}),(0,a.kt)("p",null,"As you can see, the node can remain fully operational under a myriad of degraded\nconditions. In fact, we can think of the above node as a 1-of-2 schema, not\ndissimilar to a 1-of-2 multi-sig wallet. And this functionality dramatically\nimproves with more hosts added. However, we should note that this example is\nprimarily a static routing example, a lot more interesting options are possible\nin a HAB Node, including self-healing."),(0,a.kt)("h2",{id:"scenario-2"},"Scenario 2"),(0,a.kt)("p",null,"In a more advanced example (but again with dramatic reductions in complexity),\nlet's say there are three host computers in the cluster. Of the three hosts, one\nis a remote cloud server, and two are local machines. The plan is such that, on\neach of the local machines, a bitcoin container with a full copy of the\nblockchain and a Lightning container are running. The remote machine in the\ncloud acts as compute backup, or N+1. Nothing runs on that node unless there is\nan emergency, making it much cheaper to operate month to month."),(0,a.kt)("p",null,"Fig. 6, Healthy three Host HAB Node"),(0,a.kt)("mermaid",{value:'flowchart LR\n\tHABN:::HABNClass\n\tsubgraph HABN [Highly Available Bitcoin Node]\n\t\tdirection TB\n\t\tsubgraph host1 [Computer 1]\n\t\t\tbtc1[Bitcoin Node 1]\n\t\t\tln1([Lightning Node 1])\n\t\tend\n\t\tsubgraph host2 [Computer 2]\n\t\t\tbtc2[Bitcoin Node 2]\n\t\t\tln2([Lightning Node 2])\n\t\tend\n\t\tsubgraph host3 [Cloud 1]\n\t\t\tbtc3[" "]\n\t\t\tln3[" "]\n\t\tend\n\tend\n\n\tbtc((Bitcoin Network))\n\tln((Lightning Network))\n\n\tbtc1 <--\x3e btc2\n\tbtc <--\x3e btc1\n\tbtc <--\x3e btc2\n\tbtc3 === btc2\n\tbtc3 === btc\n\n\tbtc1 --\x3e ln1\n\tbtc1 --\x3e ln2\n\tbtc2 --\x3e ln1\n\tbtc2 --\x3e ln2\n\tbtc2 === ln3\n\n\tbtc3 === ln2\n\tbtc3 === ln3\n\n\tln1 <--\x3e ln\n\tln2 <--\x3e ln1\n\tln2 <--\x3e ln\n\tln3 === ln\n\tln3 === ln2\n\n\tstyle btc fill:orange,color:black\n\tstyle ln fill:yellow,color:black\n\tstyle btc3 stroke:none,fill:none,color:none\n\tstyle ln3 stroke:none,fill:none,color:none\n\n  linkStyle 3,4,9,10,11,15,16 stroke-width:0px\n\n\tclassDef HABNClass display:inline-block'}),(0,a.kt)("p",null,"To demonstrate the robustness of this model, let's now assume, in Figure 7, one\nof the host machines, Computer 1, has unknown issues:"),(0,a.kt)("p",null,"Fig. 7, Three Host HAB Node where one host fails"),(0,a.kt)("mermaid",{value:'flowchart LR\n\tHABN:::HABNClass\n\tsubgraph HABN [Highly Available Bitcoin Node]\n\t\tdirection TB\n\t\tsubgraph host1 [Computer 1]\n\t\t\tbtc1[Bitcoin Node 1]\n\t\t\tln1([Lightning Node 1])\n\t\tend\n\t\tsubgraph host2 [Computer 2]\n\t\t\tbtc2[Bitcoin Node 2]\n\t\t\tln2([Lightning Node 2])\n\t\tend\n\t\tsubgraph host3 [Cloud 1]\n\t\t\tbtc3[" "]\n\t\t\tln3[" "]\n\t\tend\n\tend\n\n\tbtc((Bitcoin Network))\n\tln((Lightning Network))\n\n\tbtc1 -.- btc2\n\tbtc -.- btc1\n\tbtc <--\x3e btc2\n\tbtc3 === btc2\n\tbtc3 === btc\n\n\tbtc1 -.- ln1\n\tbtc1 -.- ln2\n\tbtc2 -.- ln1\n\tbtc2 --\x3e ln2\n\tbtc2 === ln3\n\tbtc3 === ln2\n\tbtc3 === ln3\n\n\tln1 -.- ln\n\tln2 -.- ln1\n\tln2 <--\x3e ln\n\tln3 === ln\n\tln3 === ln2\n\n\tstyle btc fill:orange,color:black\n\tstyle ln fill:yellow,color:black\n\tstyle btc3 stroke:none,fill:none,color:none\n\tstyle ln3 stroke:none,fill:none,color:none\n\n\tstyle host1 fill:red\n\n  linkStyle 3,4,9,10,11,15,16 stroke-width:0px\n\n\tclassDef HABNClass display:inline-block'}),(0,a.kt)("p",null,"Kubernetes detects that there is service degradation on one of the bitcoin nodes\nand/or hosts. It then notes which image is running there and starts a new\ncontainer on the third host computer with that same image, networks the\ncontainer (and new node) with its local peer, and begins to sync the blockchain."),(0,a.kt)("p",null,"Fig. 8, Three Host HAB Node where one host fails, but the cluster recovered full\nredundancy, sans N+1"),(0,a.kt)("mermaid",{value:"flowchart LR\n\tHABN:::HABNClass\n\tsubgraph HABN [Highly Available Bitcoin Node]\n\t\tdirection TB\n\t\tsubgraph host1 [Computer 1]\n\t\t\tbtc1[Bitcoin Node 1]\n\t\t\tln1([Lightning Node 1])\n\t\tend\n\t\tsubgraph host2 [Computer 2]\n\t\t\tbtc2[Bitcoin Node 2]\n\t\t\tln2([Lightning Node 2])\n\t\tend\n\t\tsubgraph host3 [Cloud 1]\n\t\t\tbtc3[Bitcoin Node 3]\n\t\t\tln3[Lightning Node 3]\n\t\tend\n\tend\n\n\tbtc((Bitcoin Network))\n\tln((Lightning Network))\n\n\tbtc1 -.- btc2\n  btc -.- btc1\n  btc <--\x3e btc2\n\tbtc3 <--\x3e btc2\n\tbtc3 <--\x3e btc\n\n\tbtc1 -.- ln1\n\tbtc1 -.- ln2\n\tbtc2 -.- ln1\n\tbtc2 --\x3e ln2\n\tbtc2 --\x3e ln3\n\tbtc3 --\x3e ln2\n\tbtc3 --\x3e ln3\n\n\tln1 -.- ln\n\tln2 -.- ln1\n\tln2 <--\x3e ln\n\tln3 <--\x3e ln\n\tln3 <--\x3e ln2\n\n\tstyle btc fill:orange,color:black\n\tstyle ln fill:yellow,color:black\n\n\tstyle host1 fill:red\n\n\tclassDef HABNClass display:inline-block\n"}),(0,a.kt)("p",null,"During this failure event, the node operator has no downtime with respect to\nboth the Bitcoin network and the Lightning network. As such, all higher level\nself-hosted services which rely on high local bitcoin uptime remain unaffected.\nOnce the blockchain is synced, 2x redundancy is restored. Incredibly, k8s can\neven go further than this. Though it may take some custom hardware or scripting,\nk8s could even trigger a power cycle on the problematic host given the\nappropriate amount of failed health checks."),(0,a.kt)("p",null,"The above would happen in real time, as an automated process, and alerting could\nbe forwarded so that the operator can then troubleshoot the problematic host\nwhen available or if even needed, as opposed to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"we are actively in a\nliquidity crisis fix immediately")),". Once the host is back up, Kubernetes will\nstart a bitcoin node on Computer 1 and once synced, remove the Bitcoin node from\nthe cloud, to fully remediate the incident."),(0,a.kt)("p",null,"You should recognize the above process as one similar to (but distinctly\ndifferent from) a different kind of multi-signature transaction: m-of-3. In the\ncase of a 1-of-3 wallet where up to two of the keys can be lost, yet the wallet\nretains signing capabilities, we see a parallel in that 2 hosts can be down, and\nwe still have a working node. It is also similar to a 2-of-3 wallet where we\ncontrol two of the three keys, and a custodian controls the third. That model\nhas a parallel in that running a host in the cloud provides us more assurances\nwith our node that are hard to attain otherwise, like geographic diversity."),(0,a.kt)("p",null,"You will notice this model also cuts on different verticals to prevent downtime.\nIf we diversify Bitcoin implementations, and diversify Lightning\nimplementations, and, say, one implementation becomes unstable, the others can\nthen carry the uptime forward."),(0,a.kt)("p",null,"But let's not gloss over the bigger picture either:"),(0,a.kt)("p",null,"Computer : Cluster :: Bitcoin Node : Bitcoin Network"),(0,a.kt)("p",null,"What Kubernetes does for uptime is the ",(0,a.kt)("em",{parentName:"p"},"very same")," (but weaker) paradigm that\nbitcoin the network at large does with this key difference: Kubernetes adds the\nfunctionality of also centrally controlling the cluster of computers.\nThankfully, the bitcoin network doesn't have this functionality because at a\nmacro scale that would destroy bitcoin. Centralization of control is good when\ndealing with one operator having dominion over all his machines, and bad when\none operator can have dominion over all machines in existence."),(0,a.kt)("p",null,"To put a Copernican Shift on it... it took the legacy tech paradigm decades,\nbillions of dollars of investment, and millions of hours of developer time to\nachieve an imperfect, albeit incredibly powerful solution to availability in a\ndistributed system. Whereas Satoshi with a few years of thought, writing, and\ncoding created the ",(0,a.kt)("em",{parentName:"p"},"ideal")," solution to availability in a distributed system."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As you can imagine, failure cases, host counts, host types, N+x, and a slew of\nother strategies and tactics can provide unlimited scenarios to demonstrate the\ncapabilities and power of CO as a means of providing highly available\narchitecture. Indeed, the two scenarios presented here only scratch the surface.\nBut this is the simplified version of how a HAB Node works."),(0,a.kt)("p",null,"To bring the second scenario all the way back to how we first introduced\nvirtualization, this explanation applies directly to what a HAB Node does:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A computer is thinking of another computer. The computer it is thinking of\ncrashes. Thankfully, it was just a thought, so the computer thinks up another\ncomputer to replace it and carries on.")),(0,a.kt)("p",null,"Only it's for a bitcoin node. It is, without metaphor, this (and you can see\nthis in an actual example ",(0,a.kt)("a",{parentName:"p",href:"/blog/Case-study-1"},"here"),"):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"My cluster is running bitcoin node containers. One node it is running crashes.\nThankfully, it was just a container, so my cluster spins up another container\nto replace it and carries on.")),(0,a.kt)("p",null,"The idea of containers opened up new horizons for cloud computing. Now, it opens\nup new horizons for Bitcoin and the peer to peer internet. With the realization\nof HAB Nodes, we can apply billions of investment in CO underneath and in\nsupport of the ideal bitcoin peer-to-peer solution to uptime by attaching those\nsolutions to the individual bitcoin node."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To begin building your own HAB Node, start with the Introduction to the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/Introduction/intro"},"Guide")))}h.isMDXComponent=!0}}]);