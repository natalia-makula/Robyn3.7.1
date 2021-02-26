(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(88)),i={id:"installation",title:"Installation",slug:"/"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"It is necessary to have R installed in order to be able to run this code. R is a",source:"@site/docs/installation.md",slug:"/",permalink:"/Robyn/docs/",editUrl:"https://github.com/facebookexperimental/Robyn/docs/installation.md",version:"current",sidebar:"someSidebar",next:{title:"Quick Start",permalink:"/Robyn/docs/quick-start"}},l=[],b={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"It is necessary to have R installed in order to be able to run this code. R is a\nfree software environment for statistical computing and graphics. It compiles\nand runs on a wide variety of UNIX platforms, Windows and MacOS. To\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://cran.r-project.org/mirrors.html"}),"download R."),", please choose your\npreferred ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://cran.r-project.org/mirrors.html"}),"CRAN mirror.")),Object(a.b)("p",null,"There are four main script files within the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookexperimental/Robyn/tree/master/source"}),Object(a.b)("strong",{parentName:"a"},"code on Github")),":"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"fb","_",Object(a.b)("em",{parentName:"em"},"robyn_mmm"),"(...)func.R:"))," Where all the model functions are stored."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"fb","_",Object(a.b)("em",{parentName:"em"},"robyn_mmm"),"(...)exec.R:"))," Where the functions above are executed.\nThis will be the main script you will be working with."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"fb","_",Object(a.b)("em",{parentName:"em"},"robyn_mmm"),"(...)plot.R:"))," Where the functions to plot results are\nkept."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("em",{parentName:"strong"},"fb","_",Object(a.b)("em",{parentName:"em"},"robyn_mmm"),"(...)optm.R:"))," Where the optimiser functions reside.")),Object(a.b)("p",null,"Please ",Object(a.b)("strong",{parentName:"p"},"download")," and ",Object(a.b)("strong",{parentName:"p"},"open")," all of them in your R environment."))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||a;return n?o.a.createElement(f,c(c({ref:t},b),{},{components:n})):o.a.createElement(f,c({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);