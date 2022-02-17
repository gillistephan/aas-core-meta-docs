"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[8910],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(r),p=a,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||c;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7462),a=r(7294),c=r(6010),o=r(3727),i=function(e){var t,r=e.type,n=e.isList,c=e.displayName,i=e.to;return t="Class"===r&&i?a.createElement(o.rU,{to:i},c):c,n?a.createElement("code",null,"List [ ",t," ]"):a.createElement("code",null,t)},l=function(e){var t=e.displayName,r=e.to;return"SELF"===t?a.createElement("span",{className:"font-bold"},"Own Props"):a.createElement("span",{className:"font-bold"},"From ",a.createElement(o.rU,{to:r},t))},s=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return a.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},a.createElement("span",null,t),a.createElement("div",null,a.createElement("span",{className:(0,c.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),a.createElement("dd",{className:"mt-1  sm:mt-0"},a.createElement("div",{className:"flex flex-col items-start justify-start"},a.createElement(i,n))))};var m=function(e){var t=e.items,r=function(e){var t={},r=e.reduce((function(e,r){return console.log(r),e[r.inheritedFrom.displayName]?e[r.inheritedFrom.displayName].push(r):(e[r.inheritedFrom.displayName]=[r],t[r.inheritedFrom.displayName]=r.inheritedFrom.to),e}),{});return[t,r]}(t),c=r[0],o=r[1],i=a.useState(!1),m=i[0],u=i[1];return a.createElement("div",{className:"px-4 py-5 sm:p-0"},a.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},a.createElement("span",null,"Group by Inheritance"),a.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:m,onChange:function(){return u((function(e){return!e}))}})),a.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},m?Object.keys(o).map((function(e){var t=o[e];return a.createElement("div",{className:"py-2",key:e},a.createElement(l,{displayName:e,to:c[e]}),t.map((function(e){return a.createElement(s,(0,n.Z)({key:e.displayName},e))})))})):t.map((function(e){return a.createElement(s,(0,n.Z)({key:e.displayName},e))}))))}},2398:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),o=(r(8215),r(6396),r(8086)),i=["components"],l={id:"model-reference-v3rc02",title:"ModelReference",sidebar_label:"ModelReference"},s=void 0,m={unversionedId:"v3rc02/content/model-reference-v3rc02",id:"v3rc02/content/model-reference-v3rc02",title:"ModelReference",description:"Properties",source:"@site/docs/v3rc02/content/Model_reference.mdx",sourceDirName:"v3rc02/content",slug:"/v3rc02/content/model-reference-v3rc02",permalink:"/aas-core-meta-docs/docs/v3rc02/content/model-reference-v3rc02",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc02/content/Model_reference.mdx",tags:[],version:"current",frontMatter:{id:"model-reference-v3rc02",title:"ModelReference",sidebar_label:"ModelReference"},sidebar:"v3rc02Sidebar",previous:{title:"LangStringSet",permalink:"/aas-core-meta-docs/docs/v3rc02/content/lang-string-set-v3rc02"},next:{title:"MultiLanguageProperty",permalink:"/aas-core-meta-docs/docs/v3rc02/content/multi-language-property-v3rc02"}},u=[{value:"Properties",id:"properties",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"properties"},"Properties"),(0,c.kt)(o.Z,{items:[{displayName:"Keys",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Key",to:"key-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"ReferredSemanticId",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ")}p.isMDXComponent=!0}}]);