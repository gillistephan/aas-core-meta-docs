"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[5282],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),y=i,u=d["".concat(c,".").concat(y)]||d[y]||m[y]||a;return r?n.createElement(u,s(s({ref:t},p),{},{components:r})):n.createElement(u,s({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7462),i=r(7294),a=r(6010),s=r(3727),o=function(e){var t,r=e.type,n=e.isList,a=e.displayName,o=e.to;return t="Class"===r&&o?i.createElement(s.rU,{to:o},a):a,n?i.createElement("code",null,"List [ ",t," ]"):i.createElement("code",null,t)},c=function(e){var t=e.displayName,r=e.to;return"SELF"===t?i.createElement("span",{className:"font-bold"},"Own Props"):i.createElement("span",{className:"font-bold"},"From ",i.createElement(s.rU,{to:r},t))},l=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return i.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},i.createElement("span",null,t),i.createElement("div",null,i.createElement("span",{className:(0,a.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),i.createElement("dd",{className:"mt-1  sm:mt-0"},i.createElement("div",{className:"flex flex-col items-start justify-start"},i.createElement(o,n))))};var p=function(e){var t=e.items,r=function(e){var t={},r=e.reduce((function(e,r){return console.log(r),e[r.inheritedFrom.displayName]?e[r.inheritedFrom.displayName].push(r):(e[r.inheritedFrom.displayName]=[r],t[r.inheritedFrom.displayName]=r.inheritedFrom.to),e}),{});return[t,r]}(t),a=r[0],s=r[1],o=i.useState(!1),p=o[0],m=o[1];return i.createElement("div",{className:"px-4 py-5 sm:p-0"},i.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},i.createElement("span",null,"Group by Inheritance"),i.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:p,onChange:function(){return m((function(e){return!e}))}})),i.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},p?Object.keys(s).map((function(e){var t=s[e];return i.createElement("div",{className:"py-2",key:e},i.createElement(c,{displayName:e,to:a[e]}),t.map((function(e){return i.createElement(l,(0,n.Z)({key:e.displayName},e))})))})):t.map((function(e){return i.createElement(l,(0,n.Z)({key:e.displayName},e))}))))}},6040:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return y}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),s=(r(8215),r(6396),r(8086)),o=["components"],c={id:"property-v3rc01",title:"Property",sidebar_label:"Property"},l=void 0,p={unversionedId:"v3rc01/content/property-v3rc01",id:"v3rc01/content/property-v3rc01",title:"Property",description:"Properties",source:"@site/docs/v3rc01/content/Property.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/property-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/property-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Property.mdx",tags:[],version:"current",frontMatter:{id:"property-v3rc01",title:"Property",sidebar_label:"Property"},sidebar:"v3rc01Sidebar",previous:{title:"PolicyInformationPoints",permalink:"/aas-core-meta-docs/docs/v3rc01/content/policy-information-points-v3rc01"},next:{title:"Qualifier",permalink:"/aas-core-meta-docs/docs/v3rc01/content/qualifier-v3rc01"}},m=[{value:"Properties",id:"properties",children:[],level:2}],d={toc:m};function y(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(s.Z,{items:[{displayName:"Extension",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Extension",to:"extension-v3rc01"},inheritedFrom:{displayName:"HasExtensions",to:"has-extensions-v3rc01"}},{displayName:"IdShort",isRequired:!1,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"},inheritedFrom:{displayName:"Referable",to:"referable-v3rc01"}},{displayName:"DisplayName",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc01"},inheritedFrom:{displayName:"Referable",to:"referable-v3rc01"}},{displayName:"Category",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"},inheritedFrom:{displayName:"Referable",to:"referable-v3rc01"}},{displayName:"Description",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc01"},inheritedFrom:{displayName:"Referable",to:"referable-v3rc01"}},{displayName:"Qualifiers",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Constraint",to:"constraint-v3rc01"},inheritedFrom:{displayName:"Qualifiable",to:"qualifiable-v3rc01"}},{displayName:"DataSpecifications",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc01"},inheritedFrom:{displayName:"HasDataSpecification",to:"has-data-specification-v3rc01"}},{displayName:"Kind",isRequired:!0,typeDef:{type:"Enumeration",isList:!1,displayName:"ModelingKind",to:"modeling-kind-v3rc01"},inheritedFrom:{displayName:"HasKind",to:"has-kind-v3rc01"}},{displayName:"SemanticId",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc01"},inheritedFrom:{displayName:"HasSemantics",to:"has-semantics-v3rc01"}},{displayName:"ValueType",isRequired:!1,typeDef:{type:"Enumeration",isList:!1,displayName:"DataTypeDef",to:"data-type-def-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"Value",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"ValueDataType",to:"value-data-type-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"ValueId",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ")}y.isMDXComponent=!0}}]);