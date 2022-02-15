"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[7090],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),u=i,f=d["".concat(o,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7462),i=r(7294),a=r(6010),s=r(3727),c=function(e){var t,r=e.type,n=e.isList,a=e.displayName,c=e.to;return t="Class"===r&&c?i.createElement(s.rU,{to:c},a):a,n?i.createElement("code",null,"List [ ",t," ]"):i.createElement("code",null,t)},o=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return i.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},i.createElement("span",null,t),i.createElement("div",null,i.createElement("span",{className:(0,a.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),i.createElement("dd",{className:"mt-1  sm:mt-0"},i.createElement("div",{className:"flex flex-col items-start justify-start"},i.createElement(c,n))))},l=function(e){var t=e.items;return i.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},i.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return i.createElement(o,(0,n.Z)({key:e.displayName},e))}))))}},3197:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=(r(8215),r(6396),r(8086)),c=["components"],o={id:"reference-element-v3rc02",title:"ReferenceElement",sidebar_label:"ReferenceElement"},l=void 0,p={unversionedId:"v3rc02/content/reference-element-v3rc02",id:"v3rc02/content/reference-element-v3rc02",title:"ReferenceElement",description:"Properties",source:"@site/docs/v3rc02/content/Reference_element.mdx",sourceDirName:"v3rc02/content",slug:"/v3rc02/content/reference-element-v3rc02",permalink:"/aas-core-meta-docs/docs/v3rc02/content/reference-element-v3rc02",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc02/content/Reference_element.mdx",tags:[],version:"current",frontMatter:{id:"reference-element-v3rc02",title:"ReferenceElement",sidebar_label:"ReferenceElement"},sidebar:"v3rc02Sidebar",previous:{title:"Range",permalink:"/aas-core-meta-docs/docs/v3rc02/content/range-v3rc02"},next:{title:"SubmodelElementList",permalink:"/aas-core-meta-docs/docs/v3rc02/content/submodel-element-list-v3rc02"}},m=[{value:"Properties",id:"properties",children:[],level:2}],d={toc:m};function u(e){var t=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(s.Z,{items:[{displayName:"DataSpecifications",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc02"}},{displayName:"Extensions",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Extension",to:"extension-v3rc02"}},{displayName:"IdShort",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"}},{displayName:"DisplayName",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc02"}},{displayName:"Category",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"}},{displayName:"Description",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc02"}},{displayName:"Kind",isRequired:!0,typeDef:{type:"Enumeration",isList:!1,displayName:"ModelingKind",to:"modeling-kind-v3rc02"}},{displayName:"SemanticId",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc02"}},{displayName:"Qualifiers",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Constraint",to:"constraint-v3rc02"}},{displayName:"Reference",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc02"}}],mdxType:"PropertiesList"})," ")}u.isMDXComponent=!0}}]);