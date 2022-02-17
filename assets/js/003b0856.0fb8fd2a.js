"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[6723],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(r),u=i,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7462),i=r(7294),a=r(6010),c=r(3727),o=function(e){var t,r=e.type,n=e.isList,a=e.displayName,o=e.to;return t="Class"===r&&o?i.createElement(c.rU,{to:o},a):a,n?i.createElement("code",null,"List [ ",t," ]"):i.createElement("code",null,t)},s=function(e){var t=e.displayName,r=e.to;return"SELF"===t?i.createElement("span",{className:"font-bold"},"Own Props"):i.createElement("span",{className:"font-bold"},"From ",i.createElement(c.rU,{to:r},t))},l=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return i.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},i.createElement("span",null,t),i.createElement("div",null,i.createElement("span",{className:(0,a.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),i.createElement("dd",{className:"mt-1  sm:mt-0"},i.createElement("div",{className:"flex flex-col items-start justify-start"},i.createElement(o,n))))};var m=function(e){var t=e.items,r=function(e){var t={},r=e.reduce((function(e,r){return console.log(r),e[r.inheritedFrom.displayName]?e[r.inheritedFrom.displayName].push(r):(e[r.inheritedFrom.displayName]=[r],t[r.inheritedFrom.displayName]=r.inheritedFrom.to),e}),{});return[t,r]}(t),a=r[0],c=r[1],o=i.useState(!1),m=o[0],d=o[1];return i.createElement("div",{className:"px-4 py-5 sm:p-0"},i.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},i.createElement("span",null,"Group by Inheritance"),i.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:m,onChange:function(){return d((function(e){return!e}))}})),i.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},m?Object.keys(c).map((function(e){var t=c[e];return i.createElement("div",{className:"py-2",key:e},i.createElement(s,{displayName:e,to:a[e]}),t.map((function(e){return i.createElement(l,(0,n.Z)({key:e.displayName},e))})))})):t.map((function(e){return i.createElement(l,(0,n.Z)({key:e.displayName},e))}))))}},2560:function(e,t,r){var n=r(7294),i=r(3727);t.Z=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("div",{className:" sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement("div",{key:e.displayName,className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement(i.rU,{to:e.to},n.createElement("span",null,e.displayName)),n.createElement("div",{className:"sm:col-span-2"},e.props.map((function(t,r){return n.createElement("span",null,t,r===e.props.length-1?"":", ")}))))}))))}},6680:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),c=(r(8215),r(6396),r(8086)),o=r(2560),s=["components"],l={id:"identifier-v3rc01",title:"Identifier",sidebar_label:"Identifier"},m=void 0,d={unversionedId:"v3rc01/content/identifier-v3rc01",id:"v3rc01/content/identifier-v3rc01",title:"Identifier",description:"Properties",source:"@site/docs/v3rc01/content/Identifier.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/identifier-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/identifier-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Identifier.mdx",tags:[],version:"current",frontMatter:{id:"identifier-v3rc01",title:"Identifier",sidebar_label:"Identifier"},sidebar:"v3rc01Sidebar",previous:{title:"IdentifierKeyValuePair",permalink:"/aas-core-meta-docs/docs/v3rc01/content/identifier-key-value-pair-v3rc01"},next:{title:"Key",permalink:"/aas-core-meta-docs/docs/v3rc01/content/key-v3rc01"}},p=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],u={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(c.Z,{items:[{displayName:"IdType",isRequired:!1,typeDef:{type:"Enumeration",isList:!1,displayName:"IdentifierType",to:"identifier-type-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"Id",isRequired:!1,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ",(0,a.kt)("h2",{id:"usages"},"Usages"),(0,a.kt)(o.Z,{items:[{displayName:"Identifiable",to:"identifiable-v3rc01",props:["Identification"]},{displayName:"AssetAdministrationShell",to:"asset-administration-shell-v3rc01",props:["Identification"]},{displayName:"Asset",to:"asset-v3rc01",props:["Identification"]},{displayName:"Submodel",to:"submodel-v3rc01",props:["Identification"]},{displayName:"ConceptDescription",to:"concept-description-v3rc01",props:["Identification"]}],mdxType:"UsageList"}))}f.isMDXComponent=!0}}]);