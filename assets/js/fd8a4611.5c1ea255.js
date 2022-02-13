"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[537],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=l(n),d=i,u=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(u,c(c({ref:t},m),{},{components:n})):r.createElement(u,c({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},8086:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),i=n(6010),a=n(3727),c=function(e){var t,n=e.type,i=e.isList,c=e.displayName,o=e.to;return t="Class"===n&&o?r.createElement(a.rU,{to:o},c):c,i?r.createElement("code",null,"List [ ",t," ]"):r.createElement("code",null,t)},o=function(e){var t=e.name,n=e.isRequired,a=e.typeDef;return r.createElement("div",{className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},r.createElement("dt",{className:"flex w-full items-center space-x-4"},r.createElement("span",{className:"w-56"},t),r.createElement("span",{className:(0,i.Z)(n?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium")},n?"Required":"Optional")),r.createElement("dd",{className:"mt-1 sm:col-span-2 sm:mt-0"},r.createElement("div",{className:"flex flex-col items-start justify-start"},r.createElement(c,a))))},s=function(e){var t=e.items;return r.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},r.createElement("dl",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return r.createElement(o,e)}))))}},9484:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),c=(n(8215),n(6396),n(8086)),o=["components"],s={id:"reference-element-v3rc02",title:"ReferenceElement",sidebar_label:"ReferenceElement"},l=void 0,m={unversionedId:"v3rc02/content/reference-element-v3rc02",id:"v3rc02/content/reference-element-v3rc02",title:"ReferenceElement",description:"A reference element is a data element that defines a logical reference to another",source:"@site/docs/v3rc02/content/ReferenceElement.md",sourceDirName:"v3rc02/content",slug:"/v3rc02/content/reference-element-v3rc02",permalink:"/docs/v3rc02/content/reference-element-v3rc02",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc02/content/ReferenceElement.md",tags:[],version:"current",frontMatter:{id:"reference-element-v3rc02",title:"ReferenceElement",sidebar_label:"ReferenceElement"},sidebar:"v3rc02Sidebar",previous:{title:"Range",permalink:"/docs/v3rc02/content/range-v3rc02"},next:{title:"SubmodelElementList",permalink:"/docs/v3rc02/content/submodel-element-list-v3rc02"}},p=[{value:"Properties",id:"properties",children:[],level:2}],f={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A reference element is a data element that defines a logical reference to another\nelement within the same or another AAS or a reference to an external object or\nentity."),(0,a.kt)("div",null,(0,a.kt)("p",null,"Constraint AASd-054: If the semanticId of a ReferenceElement submodel element references a ConceptDescription then the ConceptDescription/category shall be one of following values: REFERENCE."),(0,a.kt)("p",null,"Constraint AASd-082: If the semanticId of a ReferenceElement references a ConceptDescription then DataSpecificationIEC61360/dataType shall be one of: STRING, IRI, IRDI.")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(c.Z,{items:[{name:"DataSpecifications",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc02"}},{name:"Extensions",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Extension",to:"extension-v3rc02"}},{name:"IdShort",isRequired:!1,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"}},{name:"DisplayName",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc02"}},{name:"Category",isRequired:!1,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"}},{name:"Description",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc02"}},{name:"Kind",isRequired:!1,typeDef:{type:"Enumeration",isList:!1,displayName:"ModelingKind",to:"modeling-kind-v3rc02"}},{name:"SemanticId",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc02"}},{name:"Qualifiers",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Constraint",to:"constraint-v3rc02"}},{name:"Reference",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc02"}}],mdxType:"PropertiesList"}))}d.isMDXComponent=!0}}]);