"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={title:"NHEP 6 - Better Default List Type",authors:["siriusstarr"],date:"2023-10-21T00:00"},o=void 0,l={permalink:"/blog/0006-better-default-list-type",editUrl:"https://github.com/neohaskell/nhep/edit/main/nhep/0006-better-default-list-type/index.mdx",source:"@site/blog/nhep/nhep/0006-better-default-list-type/index.mdx",title:"NHEP 6 - Better Default List Type",description:"Introduction",date:"2023-10-21T00:00:00.000Z",formattedDate:"October 21, 2023",tags:[],readingTime:1.675,hasTruncateMarker:!1,authors:[{name:"SiriusStarr",title:"NeoHaskell Contributor",url:"https://github.com/SiriusStarr",imageURL:"https://github.com/SiriusStarr.png",key:"siriusstarr"}],frontMatter:{title:"NHEP 6 - Better Default List Type",authors:["siriusstarr"],date:"2023-10-21T00:00"},prevItem:{title:"NHEP 4 - Semantic Versioning",permalink:"/blog/0004-semantic-versioning"},nextItem:{title:"NHEP 5 - Better Default String Type",permalink:"/blog/0005-better-default-string-type"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Impact on Principle of Least Astonishment",id:"impact-on-principle-of-least-astonishment",level:2},{value:"Impact on Principle of Developer Happiness",id:"impact-on-principle-of-developer-happiness",level:2},{value:"Impact on Principle of Least Effort",id:"impact-on-principle-of-least-effort",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Considerations",id:"considerations",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"STATUS - DRAFT",type:"tip"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"By default, Haskell's ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," type is a simple linked list and as such is inefficient for many common operations (getting by index, appending, iterating from the end, etc.). A number of other more efficient list-like data structures are available, most notably the array-like ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector")," and the list-like ",(0,r.kt)("inlineCode",{parentName:"p"},"Seq"),"."),(0,r.kt)("p",null,"NeoHaskell should choose one of these two data structures as its default list type and support literals via the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," syntax."),(0,r.kt)("h2",{id:"impact-on-principle-of-least-astonishment"},"Impact on Principle of Least Astonishment"),(0,r.kt)("p",null,"The fact that a simple list literal is inefficient to append or get by index and usually undesirable violates the Principle of Least Astonishment. Most new programmers expect sytactic sugar like ",(0,r.kt)("inlineCode",{parentName:"p"},'[1, 2, 3]"')," to produce a commonly desirable data type without any additional effort. This change will align NeoHaskell with those expectations."),(0,r.kt)("h2",{id:"impact-on-principle-of-developer-happiness"},"Impact on Principle of Developer Happiness"),(0,r.kt)("p",null,"As noted below, this change will require less boilerplate of developers and allow them to get to actual code faster, as well as gently guiding developers to choose a data type without them having to decide which to use."),(0,r.kt)("h2",{id:"impact-on-principle-of-least-effort"},"Impact on Principle of Least Effort"),(0,r.kt)("p",null,"Currently, nearly every Haskell project requires a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"containers")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"vector")," and files are littered with ",(0,r.kt)("inlineCode",{parentName:"p"},"import"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"{-# LANGUAGE OverloadedList #-}"),"s. This change will eliminate all of that overhead and allow the use of a sensible list type with better ergonomics."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"In early stages, this can be achieved via prelude and pragmas by the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"OverloadedLists")," with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"default IsList Vector -- or Seq\n")),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"Haskell's default lists are more efficient for LIFO queues than either of these data types.  There could, however, be a ",(0,r.kt)("inlineCode",{parentName:"p"},"Queue")," data type or the like to push developers in that when it's desirable."),(0,r.kt)("p",null,"List comprehensions (if they will be in NeoHaskell) would need to support this data type as well."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Vector")," is not pattern-matchable on.  ",(0,r.kt)("inlineCode",{parentName:"p"},"Seq")," does not have this issue, which might be a point in favor of it."))}u.isMDXComponent=!0}}]);