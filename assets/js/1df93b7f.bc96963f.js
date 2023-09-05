/*! For license information please see 1df93b7f.bc96963f.js.LICENSE.txt */
(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[3237],{1577:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>k});var n=a(7294),l=a(9960),r=a(2263),o=a(7961),i=a(7462),s=a(614);const c={fit:"w-fit",full:"w-full","1/2":"w-1/2","1/3":"w-1/3"},d=["border-4","flex","flex-row","items-center","bg-codeBg","text-black","border-black"],m=e=>{let{rainbow:t,children:a,language:l,title:r,width:o,shadowClass:i="shadow-neoblack"}=e;const m=[...t?d.filter((e=>!e.includes("shadow"))).concat("shadow-rainbow"):d,`${c[o]}`,i].join(" ");return n.createElement("div",{className:m},n.createElement(s.Z,{className:"!rounded-none !mb-0 px-4 py-2",language:l,title:r},a))},g=[{title:"Beautiful, Ready-to-Use Tools",description:n.createElement(n.Fragment,null,"NeoHaskell offers a clean and intuitive language design, complemented by a core library that provides all the tools you need to start creating amazing software right away.",n.createElement("br",null),"START CODING"),showcase:{language:"haskell",code:"processLogs rawLogs =\n  rawLogs\n  |> map parseLogs\n  |> collect\n  |> andThen (filter isImportant)\n  |> andThen (map toStructuredLog)"}},{title:"Hassle-Free Development Environment",description:n.createElement(n.Fragment,null,"NeoHaskell's CLI tool installs all required utilities and makes multi-platform support a breeze. Whether you're compiling to native code or generating WebAssembly for browser compatibility, you'll enjoy error messages that guide, not hinder.",n.createElement("br",null),"EMPOWER YOUR DEVELOPMENT"),showcase:{code:"",language:""}},{title:"Focus-Driven, Event-Driven",description:n.createElement(n.Fragment,null,"In NeoHaskell, you work directly events and functions that react to them. Say goodbye to the cognitive overhead of managing state or wrestling with dependency injection. Your focus stays where it belongs: on solving problems and crafting solutions.",n.createElement("br",null),"BEGIN YOUR JOURNEY"),showcase:{code:"",language:""}},{title:"Naturally Full-Stack",description:n.createElement(n.Fragment,null,"Relish the ease of crafting full-stack applications in a unified language environment. NeoHaskell takes care of frontend-backend communication, allowing you to focus solely on your application's logic.",n.createElement("br",null),"EXPERIENCE NATURAL FULL-STACK DEVELOPMENT"),showcase:{code:"",language:""}}];function u(e){let{title:t,showcase:a,description:l}=e;const r="code"in a?n.createElement(m,{language:a.language},a.code):n.createElement(a.img,null);return n.createElement("div",{className:"flex p-4"},r,n.createElement("div",{className:"p-7"},n.createElement("h3",null,t),n.createElement("p",null,l)))}function h(){return n.createElement("section",null,n.createElement("div",{className:"container"},n.createElement("div",{className:"col"},g.map(((e,t)=>n.createElement(u,(0,i.Z)({key:t},e)))))))}const b={fit:"w-fit",full:"w-full","1/2":"w-1/2","1/3":"w-1/3"},p=["px-8","py-4","dark:bg-slate-950","border-4","bg-white","text-black","border-black",...["bg-slate-950","text-white","border-white","shadow-neowhite"].map((e=>`dark:${e}`))],v=e=>{let{rainbow:t,children:a,width:l,shadowClass:r="shadow-neoblack"}=e;const o=[...t?p.filter((e=>!e.includes("shadow"))).concat("shadow-rainbow"):p,`${b[l]}`,r].join(" ");return n.createElement("div",{className:o},a)};var f=a(4184),w=a.n(f);const y=e=>{let{children:t,rounded:a="none",size:l="md",color:r="cyan",disabled:o}=e;return n.createElement("button",{className:w()("border-black border-2 text-black",{"bg-violet-200 hover:bg-violet-300 active:bg-violet-400":"violet"===r&&!o},{"bg-pink-200 hover:bg-pink-300 active:bg-pink-400":"pink"===r&&!o},{"bg-red-200 hover:bg-red-300 active:bg-red-400":"red"===r&&!o},{"bg-orange-200 hover:bg-orange-300 active:bg-orange-400":"orange"===r&&!o},{"bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400":"yellow"===r&&!o},{"bg-lime-200 hover:bg-lime-300 active:bg-lime-400":"lime"===r&&!o},{"bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400":"cyan"===r&&!o},{"rounded-none":"none"===a},{"rounded-md":"md"===a},{"rounded-full":"full"===a},{"h-10 px-4 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]":"sm"===l},{"h-12 px-5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]":"md"===l},{"h-14 px-5 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]":"lg"===l},{"border-[#727272] bg-[#D4D4D4] text-[#676767] hover:bg-[#D4D4D4] hover:shadow-none active:bg-[#D4D4D4]":o}),disabled:o},t)},E=(e,t)=>`dark:${e}-dark${t} ${e}-light${t}`;function x(){const{siteConfig:e}=(0,r.Z)();return n.createElement("header",{className:`${E("text","text")}`},n.createElement("div",{className:"px-8 my-24"},n.createElement("div",{className:"mb-10"},n.createElement("div",{className:""},n.createElement("h1",{className:"text-center tracking-supatight leading-relaxed lg:text-7xl md:text-6xl sm:text-5xl text-3xl"},"A language that triggers",n.createElement("br",null),n.createElement("span",{className:"dark:text-darkprimary text-lightsecondary underline decoration-wavy underline-offset-8"},"flow state."))))),n.createElement("div",{className:"mx-auto mb-4 lg:w-2/3"},n.createElement(v,{rainbow:!0},n.createElement("p",{className:"text-center md:text-2xl sm:text-xl text-lg justify-normal my-10 mx-auto md:w-3/4"},"Triggering joy with every event, with elegance in every line. You put the creativity, NeoHaskell gives you the reliability."," ",n.createElement("strong",null,"Learn on the fly, ship whenever you want.")))),n.createElement("div",{className:"relative text-center mx-auto my-24"},n.createElement(l.Z,{to:"/docs/intro"},n.createElement(y,{color:"yellow",rounded:"full",size:"lg"},n.createElement("h2",{className:"mx-4 my-2 text-2xl"},"Get Started!")))))}function k(){const{siteConfig:e}=(0,r.Z)();return n.createElement("div",{className:"container"},n.createElement(o.Z,{description:`${e.tagline}`},n.createElement(x,null),n.createElement("div",{className:"container grid grid-cols-1 gap-4"},n.createElement("p",{className:"text-red-500 font-extrabold text-5xl"},"If you're reading this, you probably found it by accident. This is a WIP project, and the site is far from finished. If you're curious about the project, better join the"," ",n.createElement("a",{className:"text-blue-500",href:"https://discord.com/invite/wDj3UYzec8"},"Discord server"),"!")),n.createElement("main",null,n.createElement(h,null))))}},4184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var o=l.apply(null,a);o&&e.push(o)}}else if("object"===r){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()}}]);