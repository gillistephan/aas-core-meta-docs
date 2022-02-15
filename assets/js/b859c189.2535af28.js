"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[1962],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(o,".").concat(d)]||p[d]||u[d]||c;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7462),a=r(7294),c=r(6010),i=r(3727),s=function(e){var t,r=e.type,n=e.isList,c=e.displayName,s=e.to;return t="Class"===r&&s?a.createElement(i.rU,{to:s},c):c,n?a.createElement("code",null,"List [ ",t," ]"):a.createElement("code",null,t)},o=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return a.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},a.createElement("span",null,t),a.createElement("div",null,a.createElement("span",{className:(0,c.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),a.createElement("dd",{className:"mt-1  sm:mt-0"},a.createElement("div",{className:"flex flex-col items-start justify-start"},a.createElement(s,n))))},l=function(e){var t=e.items;return a.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},a.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return a.createElement(o,(0,n.Z)({key:e.displayName},e))}))))}},2566:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),i=(r(8215),r(6396),r(8086)),s=["components"],o={id:"has-semantics-v3rc02",title:"HasSemantics",sidebar_label:"HasSemantics"},l=void 0,m={unversionedId:"v3rc02/content/has-semantics-v3rc02",id:"v3rc02/content/has-semantics-v3rc02",title:"HasSemantics",description:"Properties",source:"@site/docs/v3rc02/content/Has_semantics.mdx",sourceDirName:"v3rc02/content",slug:"/v3rc02/content/has-semantics-v3rc02",permalink:"/aas-core-meta-docs/docs/v3rc02/content/has-semantics-v3rc02",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc02/content/Has_semantics.mdx",tags:[],version:"current",frontMatter:{id:"has-semantics-v3rc02",title:"HasSemantics",sidebar_label:"HasSemantics"},sidebar:"v3rc02Sidebar",previous:{title:"HasKind",permalink:"/aas-core-meta-docs/docs/v3rc02/content/has-kind-v3rc02"},next:{title:"Identifiable",permalink:"/aas-core-meta-docs/docs/v3rc02/content/identifiable-v3rc02"}},u=[{value:"Properties",id:"properties",children:[],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"properties"},"Properties"),(0,c.kt)(i.Z,{items:[{displayName:"SemanticId",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc02"}}],mdxType:"PropertiesList"})," ")}d.isMDXComponent=!0}}]);