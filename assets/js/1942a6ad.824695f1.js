"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[7265],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7462),a=r(7294),i=r(6010),c=r(3727),o=function(e){var t,r=e.type,n=e.isList,i=e.displayName,o=e.to;return t="Class"===r&&o?a.createElement(c.rU,{to:o},i):i,n?a.createElement("code",null,"List [ ",t," ]"):a.createElement("code",null,t)},l=function(e){var t=e.displayName,r=e.to;return"SELF"===t?a.createElement("span",{className:"font-bold"},"Own Props"):a.createElement("span",{className:"font-bold"},"From ",a.createElement(c.rU,{to:r},t))},s=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return a.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},a.createElement("span",null,t),a.createElement("div",null,a.createElement("span",{className:(0,i.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),a.createElement("dd",{className:"mt-1  sm:mt-0"},a.createElement("div",{className:"flex flex-col items-start justify-start"},a.createElement(o,n))))};var u=function(e){var t=e.items,r=function(e){var t={},r=e.reduce((function(e,r){return console.log(r),e[r.inheritedFrom.displayName]?e[r.inheritedFrom.displayName].push(r):(e[r.inheritedFrom.displayName]=[r],t[r.inheritedFrom.displayName]=r.inheritedFrom.to),e}),{});return[t,r]}(t),i=r[0],c=r[1],o=a.useState(!1),u=o[0],m=o[1];return a.createElement("div",{className:"px-4 py-5 sm:p-0"},a.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},a.createElement("span",null,"Group by Inheritance"),a.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:u,onChange:function(){return m((function(e){return!e}))}})),a.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},u?Object.keys(c).map((function(e){var t=c[e];return a.createElement("div",{className:"py-2",key:e},a.createElement(l,{displayName:e,to:i[e]}),t.map((function(e){return a.createElement(s,(0,n.Z)({key:e.displayName},e))})))})):t.map((function(e){return a.createElement(s,(0,n.Z)({key:e.displayName},e))}))))}},5352:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=(r(8215),r(6396),r(8086)),o=["components"],l={id:"qualifiable-v3rc02",title:"Qualifiable",sidebar_label:"Qualifiable"},s=void 0,u={unversionedId:"v3rc02/content/qualifiable-v3rc02",id:"v3rc02/content/qualifiable-v3rc02",title:"Qualifiable",description:"Properties",source:"@site/docs/v3rc02/content/Qualifiable.mdx",sourceDirName:"v3rc02/content",slug:"/v3rc02/content/qualifiable-v3rc02",permalink:"/aas-core-meta-docs/docs/v3rc02/content/qualifiable-v3rc02",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc02/content/Qualifiable.mdx",tags:[],version:"current",frontMatter:{id:"qualifiable-v3rc02",title:"Qualifiable",sidebar_label:"Qualifiable"},sidebar:"v3rc02Sidebar",previous:{title:"Identifiable",permalink:"/aas-core-meta-docs/docs/v3rc02/content/identifiable-v3rc02"},next:{title:"Referable",permalink:"/aas-core-meta-docs/docs/v3rc02/content/referable-v3rc02"}},m=[{value:"Properties",id:"properties",children:[],level:2}],p={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(c.Z,{items:[{displayName:"Qualifiers",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Constraint",to:"constraint-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ")}d.isMDXComponent=!0}}]);