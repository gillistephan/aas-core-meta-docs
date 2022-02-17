"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[1281],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,y=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return r?n.createElement(y,s(s({ref:t},m),{},{components:r})):n.createElement(y,s({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7462),a=r(7294),i=r(6010),s=r(3727),o=function(e){var t,r=e.type,n=e.isList,i=e.displayName,o=e.to;return t="Class"===r&&o?a.createElement(s.rU,{to:o},i):i,n?a.createElement("code",null,"List [ ",t," ]"):a.createElement("code",null,t)},c=function(e){var t=e.displayName,r=e.to;return"SELF"===t?a.createElement("span",{className:"font-bold"},"Own Props"):a.createElement("span",{className:"font-bold"},"From ",a.createElement(s.rU,{to:r},t))},l=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return a.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},a.createElement("span",null,t),a.createElement("div",null,a.createElement("span",{className:(0,i.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),a.createElement("dd",{className:"mt-1  sm:mt-0"},a.createElement("div",{className:"flex flex-col items-start justify-start"},a.createElement(o,n))))};var m=function(e){var t=e.items,r=function(e){var t={},r=e.reduce((function(e,r){return console.log(r),e[r.inheritedFrom.displayName]?e[r.inheritedFrom.displayName].push(r):(e[r.inheritedFrom.displayName]=[r],t[r.inheritedFrom.displayName]=r.inheritedFrom.to),e}),{});return[t,r]}(t),i=r[0],s=r[1],o=a.useState(!1),m=o[0],p=o[1];return a.createElement("div",{className:"px-4 py-5 sm:p-0"},a.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},a.createElement("span",null,"Group by Inheritance"),a.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:m,onChange:function(){return p((function(e){return!e}))}})),a.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},m?Object.keys(s).map((function(e){var t=s[e];return a.createElement("div",{className:"py-2",key:e},a.createElement(c,{displayName:e,to:i[e]}),t.map((function(e){return a.createElement(l,(0,n.Z)({key:e.displayName},e))})))})):t.map((function(e){return a.createElement(l,(0,n.Z)({key:e.displayName},e))}))))}},6904:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=(r(8215),r(6396),r(8086)),o=["components"],c={id:"event-v3rc01",title:"Event",sidebar_label:"Event"},l=void 0,m={unversionedId:"v3rc01/content/event-v3rc01",id:"v3rc01/content/event-v3rc01",title:"Event",description:"Properties",source:"@site/docs/v3rc01/content/Event.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/event-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/event-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Event.mdx",tags:[],version:"current",frontMatter:{id:"event-v3rc01",title:"Event",sidebar_label:"Event"},sidebar:"v3rc01Sidebar",previous:{title:"DataSpecificationContent",permalink:"/aas-core-meta-docs/docs/v3rc01/content/data-specification-content-v3rc01"},next:{title:"HasDataSpecification",permalink:"/aas-core-meta-docs/docs/v3rc01/content/has-data-specification-v3rc01"}},p=[{value:"Properties",id:"properties",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(s.Z,{items:[{displayName:"Extension",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Extension",to:"extension-v3rc01"},inheritedFrom:{displayName:"HasExtensions",to:"has-extensions-v3rc01"}},{displayName:"IdShort",isRequired:!1,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"},inheritedFrom:{displayName:"Referable",to:"referable-v3rc01"}},{displayName:"DisplayName",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc01"},inheritedFrom:{displayName:"Referable",to:"referable-v3rc01"}},{displayName:"Category",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"},inheritedFrom:{displayName:"Referable",to:"referable-v3rc01"}},{displayName:"Description",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc01"},inheritedFrom:{displayName:"Referable",to:"referable-v3rc01"}},{displayName:"Qualifiers",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Constraint",to:"constraint-v3rc01"},inheritedFrom:{displayName:"Qualifiable",to:"qualifiable-v3rc01"}},{displayName:"DataSpecifications",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc01"},inheritedFrom:{displayName:"HasDataSpecification",to:"has-data-specification-v3rc01"}},{displayName:"Kind",isRequired:!0,typeDef:{type:"Enumeration",isList:!1,displayName:"ModelingKind",to:"modeling-kind-v3rc01"},inheritedFrom:{displayName:"HasKind",to:"has-kind-v3rc01"}},{displayName:"SemanticId",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc01"},inheritedFrom:{displayName:"HasSemantics",to:"has-semantics-v3rc01"}}],mdxType:"PropertiesList"})," ")}u.isMDXComponent=!0}}]);