"use strict";(self.webpackChunkneohaskell_github_io=self.webpackChunkneohaskell_github_io||[]).push([[367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),s=n(6550),o=n(1980),c=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[o,c]=m({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),b=(()=>{const e=o??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),h=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:h},l,{className:(0,i.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},165:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{issue:t,absolute:n}=e;const[r,i]=a.useState("loading"),[l,s]=a.useState();(0,a.useEffect)((()=>{try{fetch(`https://api.github.com/repos/neohaskell/neohaskell/issues/${t}`).then((e=>e.json())).then((e=>{e&&(i(e.state),s(e.title))}))}catch(e){console.error(e)}}),[]);const o=r?`NOT IMPLEMENTED YET: #${t} - ${l}`:"LOADING",c=`tooltip ${n?"absolute z-10 p-4":""}`;return a.createElement("a",{className:c,"data-tip":o,target:"_blank",href:`https://github.com/neohaskell/neohaskell/issues/${t}`},a.createElement("div",{className:`badge border-black ${{open:"badge-warning",closed:"hidden",loading:"badge-primary"}[r]} badge-lg`}))}},1645:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{src:t,sourceLink:n,alt:r}=e;return a.createElement("figure",{className:"!flex !flex-col !place-items-center"},a.createElement("img",{src:t,alt:r}),a.createElement("figcaption",{className:"!text-xs"},`Source: ${n}`))}},2813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162);n(165),n(1645);const s={sidebar_position:7},o="Pattern Matching",c={unversionedId:"essentials/pattern-matching",id:"essentials/pattern-matching",title:"Pattern Matching",description:"The documentation that you're reading is a design document where most of",source:"@site/docs/essentials/pattern-matching.mdx",sourceDirName:"essentials",slug:"/essentials/pattern-matching",permalink:"/docs/essentials/pattern-matching",draft:!1,editUrl:"https://github.com/neohaskell/neohaskell.github.io/tree/main/docs/essentials/pattern-matching.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"If-Then-Else",permalink:"/docs/essentials/if-then-else"},next:{title:"Strings",permalink:"/docs/essentials/strings"}},u={},p=[{value:"Understanding Pattern Matching",id:"understanding-pattern-matching",level:2},{value:"Pattern Matching with Integers",id:"pattern-matching-with-integers",level:2},{value:"Advantages of Pattern Matching",id:"advantages-of-pattern-matching",level:2},{value:"Pattern Matching with Enums",id:"pattern-matching-with-enums",level:2},{value:"Dealing with Complex Patterns",id:"dealing-with-complex-patterns",level:2},{value:"Best Practices and Pitfalls",id:"best-practices-and-pitfalls",level:2},{value:"Conclusion and Next Steps",id:"conclusion-and-next-steps",level:2}],h={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pattern-matching"},"Pattern Matching"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The documentation that you're reading is a design document where most of\nthe features you're reading are yet to be implemented. Check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/docs-intro"},"Note on the Docs"))),(0,r.kt)("p",null,"Now that you've got a handle on conditional expressions with ",(0,r.kt)("inlineCode",{parentName:"p"},"if-then-else"),", let's elevate your code with NeoHaskell's pattern matching. Unlike the ",(0,r.kt)("inlineCode",{parentName:"p"},"if-then-else")," which branches based on boolean conditions, pattern matching allows you to decompose and examine data directly, making your functions more intuitive and declarative."),(0,r.kt)("h2",{id:"understanding-pattern-matching"},"Understanding Pattern Matching"),(0,r.kt)("p",null,"Pattern matching in NeoHaskell is akin to a more powerful switch-case statement you might know from TypeScript, but with supercharged capabilities. You can match patterns against any value, as well as data types, such as enums and custom types, and execute code based on the structure of the data itself."),(0,r.kt)("h2",{id:"pattern-matching-with-integers"},"Pattern Matching with Integers"),(0,r.kt)("p",null,"Pattern matching isn't just for complex types. Even with integers, a fundamental type, pattern matching can streamline your code. Let's explore how NeoHaskell handles this with a straightforward example."),(0,r.kt)("p",null,"Suppose you want to execute different code based on whether an integer is 0, 1, or any other number. Here's how you would use pattern matching for that:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"NeoHaskell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'describeNumber :: Int -> String\ndescribeNumber n =\n  case n of\n    0 ->\n      "Zero, the absence of quantity."\n\n    1 ->\n      "One, the first natural number."\n\n    _ ->\n      "Some other number."\n'))),(0,r.kt)(l.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function describeNumber(n: number): string {\n  switch (n) {\n    case 0:\n      return "Zero, the absence of quantity.";\n    case 1:\n      return "One, the first natural number.";\n    default:\n      return "Some other number.";\n  }\n}\n')))),(0,r.kt)("p",null,"In the NeoHaskell snippet, ",(0,r.kt)("inlineCode",{parentName:"p"},"describeNumber")," is a function that takes an integer and uses a ",(0,r.kt)("inlineCode",{parentName:"p"},"case..of")," expression to match it against the patterns ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),", which is a wildcard that matches any number not previously matched."),(0,r.kt)("h2",{id:"advantages-of-pattern-matching"},"Advantages of Pattern Matching"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Readability"),": It makes the different cases you're checking against explicit, improving readability."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Refactor Safety"),": The compiler will warn you if a new case is added to a data type but not handled in your pattern matches.")),(0,r.kt)("p",null,"Remember, the power of pattern matching in functional programming is that it lets you work with the shape of your data, rather than just the values. Even with simple types like integers, it can make your code more expressive and intent-driven."),(0,r.kt)("h2",{id:"pattern-matching-with-enums"},"Pattern Matching with Enums"),(0,r.kt)("p",null,"Let's put this into practice by matching against the ",(0,r.kt)("inlineCode",{parentName:"p"},"LightbulbState")," enum we previously defined in the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/essentials/enums"},"Enums")," section. Here's how you would use pattern matching to describe the state of a lightbulb:"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"NeoHaskell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'describeLightbulb :: LightbulbState -> String\ndescribeLightbulb state =\n  case state of\n    On ->\n      "The lightbulb is shining bright."\n\n    Off ->\n      "It\'s dark; the lightbulb is off."\n'))),(0,r.kt)(l.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// TypeScript doesn\'t support pattern matching natively,\n// so we have to use a switch-case or if-else instead.\nfunction describeLightbulb(state: LightbulbState): string {\n  switch (state) {\n    case LightbulbState.On:\n      return "The lightbulb is shining bright.";\n    case LightbulbState.Off:\n      return "It\'s dark; the lightbulb is off.";\n  }\n}\n')))),(0,r.kt)("h2",{id:"dealing-with-complex-patterns"},"Dealing with Complex Patterns"),(0,r.kt)("p",null,"Pattern matching truly shines when you're dealing with complex data types that have attached values. Let's see how you can match and extract these values in a pattern. We'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Color")," type we defined in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/essentials/enums"},"Enums")," section."),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"NeoHaskell",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'describeColor :: Color -> String\ndescribeColor color =\n  case color of\n    -- This case only matches if it is an RGB with all 0s.\n    Rgb 0 0 0 ->\n      "This is actually black."\n\n    -- This case only matches if it is an RGB with all 255s.\n    Rgb 255 255 255 ->\n      "This is actually white."\n\n    -- This case matches any RGB with any values.\n    Rgb r g b ->\n      "A colorful RGB with red #{r}, green #{g}, and blue #{b}"\n\n    Grayscale intensity ->\n      "A grayscale color with intensity #{intensity}"\n\n    Hex code ->\n      "A hex color #{code}"\n'))),(0,r.kt)(l.Z,{value:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function describeColor(color: Color): string {\n  switch (color.type) {\n    // Note how in TypeScript, it is not possible to match\n    // against the values of the attached colors, instead\n    // we have to match against the type and then extract\n    // the values from the color object.\n    case ColorType.Rgb:\n      // We have to use an `if` statement to check the values\n      if (color.r === 0 && color.g === 0 && color.b === 0)\n        return "This is actually black.";\n\n      // Same here\n      if (color.r === 255 && color.g === 255 && color.b === 255)\n        return "This is actually white.";\n\n      return `A colorful RGB with red ${color.r}, green ${color.g}, and blue ${color.b}`;\n\n    case ColorType.Grayscale:\n      return `A grayscale color with intensity ${color.intensity}`;\n\n    case ColorType.Hex:\n      return `A hex color ${color.hexStr}`;\n  }\n}\n')))),(0,r.kt)("h2",{id:"best-practices-and-pitfalls"},"Best Practices and Pitfalls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exhaustiveness"),": Always cover all cases in your pattern matches. NeoHaskell will fail to compile your code if any are missing, helping prevent runtime errors."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wildcards"),": Use the wildcard ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," pattern to catch all other cases that you haven't explicitly handled, although use it judiciously to not mask missing cases that should be handled explicitly.")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Avoid overusing the wildcard pattern as it can hide potential match cases that should be explicitly handled, leading to unexpected behaviors."),(0,r.kt)("p",{parentName:"admonition"},"As a best practice, it is always recommended to delete the wildcard pattern and handle all cases explicitly.")),(0,r.kt)("h2",{id:"conclusion-and-next-steps"},"Conclusion and Next Steps"),(0,r.kt)("p",null,"With pattern matching, you can write more expressive and safer code. It's a cornerstone of functional programming in NeoHaskell, allowing for clear and concise data manipulation. As you grow more comfortable with pattern matching, you'll begin to see its power in simplifying complex data operations."))}m.isMDXComponent=!0}}]);