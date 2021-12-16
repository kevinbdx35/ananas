"use strict";(self.webpackChunkcoursess=self.webpackChunkcoursess||[]).push([[7139],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=s,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8266:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),s=r(3366),o=(r(7294),r(3905)),i=["components"],a={sidebar_position:4},l="CSS 3 - partie 3",u={unversionedId:"front-end/css-3",id:"front-end/css-3",title:"CSS 3 - partie 3",description:"Relative vs Absolute",source:"@site/docs/front-end/css-3.md",sourceDirName:"front-end",slug:"/front-end/css-3",permalink:"/ananas/docs/front-end/css-3",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/front-end/css-3.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CSS 3 - partie 2",permalink:"/ananas/docs/front-end/css-2"},next:{title:"Les unit\xe9s en CSS",permalink:"/ananas/docs/front-end/unites-css"}},c=[{value:"Relative vs Absolute",id:"relative-vs-absolute",children:[],level:2},{value:"Float",id:"float",children:[],level:2},{value:"L&#39;art du centrage",id:"lart-du-centrage",children:[],level:2},{value:"Flexbox",id:"flexbox",children:[],level:2},{value:"Grid",id:"grid",children:[],level:2},{value:"Bonus sur les s\xe9lecteurs",id:"bonus-sur-les-s\xe9lecteurs",children:[],level:2},{value:"Exercices",id:"exercices",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"css-3---partie-3"},"CSS 3 - partie 3"),(0,o.kt)("h2",{id:"relative-vs-absolute"},"Relative vs Absolute"),(0,o.kt)("p",null,"Tu vas voir le positionnement des \xe9l\xe9ments. Jusqu'ici tous tes \xe9l\xe9ments \xe9taient des \xe9l\xe9ments \xe0 positionement relatif."),(0,o.kt)("p",null,"Cela signifie que leur position sur la page Web est d\xe9termin\xe9e par d'autres \xe9l\xe9ments."),(0,o.kt)("p",null,"D\xe9sormais, les \xe9l\xe9ments avec une position absolue peuvent \xeatre plac\xe9s n'importe o\xf9 dans leurs \xe9l\xe9ments parents."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/CSS/position"},(0,o.kt)("strong",{parentName:"a"},"Positionnement"))),(0,o.kt)("h2",{id:"float"},"Float"),(0,o.kt)("h2",{id:"lart-du-centrage"},"L'art du centrage"),(0,o.kt)("p",null,"Apprendre \xe0 centrer des \xe9l\xe9ments en CSS est une comp\xe9tence que tu dois absolument ma\xeetriser."),(0,o.kt)("p",null,"Tu peux centrer un \xe9lement de mani\xe8re traditionnelle ou en utilisant les propri\xe9t\xe9s Flexbox ou Grid."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://web.dev/centering-in-css/"},(0,o.kt)("strong",{parentName:"a"},"Centrer un \xe9l\xe9ment en css"))),(0,o.kt)("h2",{id:"flexbox"},"Flexbox"),(0,o.kt)("p",null,"Voici toutes les ressources pour apprendre ",(0,o.kt)("strong",{parentName:"p"},"Flexbox")," par toi-m\xeame. Flexbox t'aidera \xe0 organiser plus facilement la mise en page de tes sites Web."),(0,o.kt)("h2",{id:"grid"},"Grid"),(0,o.kt)("p",null,"Voici toutes les ressources pour apprendre ",(0,o.kt)("strong",{parentName:"p"},"Grid")," par toi-m\xeame. Grid t'aidera \xe0 organiser plus facilement la mise en page de tes sites Web."),(0,o.kt)("h2",{id:"bonus-sur-les-s\xe9lecteurs"},"Bonus sur les s\xe9lecteurs"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Selectors"},(0,o.kt)("strong",{parentName:"a"},"Bonus sur les s\xe9lecteurs"))),(0,o.kt)("h2",{id:"exercices"},"Exercices"))}d.isMDXComponent=!0}}]);