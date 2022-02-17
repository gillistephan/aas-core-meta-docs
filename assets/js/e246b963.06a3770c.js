"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[8419],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7462),a=r(7294),i=r(6010),o=r(3727),c=function(e){var t,r=e.type,n=e.isList,i=e.displayName,c=e.to;return t="Class"===r&&c?a.createElement(o.rU,{to:c},i):i,n?a.createElement("code",null,"List [ ",t," ]"):a.createElement("code",null,t)},l=function(e){var t=e.displayName,r=e.to;return"SELF"===t?a.createElement("span",{className:"font-bold"},"Own Props"):a.createElement("span",{className:"font-bold"},"From ",a.createElement(o.rU,{to:r},t))},s=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return a.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},a.createElement("span",null,t),a.createElement("div",null,a.createElement("span",{className:(0,i.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),a.createElement("dd",{className:"mt-1  sm:mt-0"},a.createElement("div",{className:"flex flex-col items-start justify-start"},a.createElement(c,n))))};var p=function(e){var t=e.items,r=function(e){var t={},r=e.reduce((function(e,r){return console.log(r),e[r.inheritedFrom.displayName]?e[r.inheritedFrom.displayName].push(r):(e[r.inheritedFrom.displayName]=[r],t[r.inheritedFrom.displayName]=r.inheritedFrom.to),e}),{});return[t,r]}(t),i=r[0],o=r[1],c=a.useState(!1),p=c[0],m=c[1];return a.createElement("div",{className:"px-4 py-5 sm:p-0"},a.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},a.createElement("span",null,"Group by Inheritance"),a.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:p,onChange:function(){return m((function(e){return!e}))}})),a.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},p?Object.keys(o).map((function(e){var t=o[e];return a.createElement("div",{className:"py-2",key:e},a.createElement(l,{displayName:e,to:i[e]}),t.map((function(e){return a.createElement(s,(0,n.Z)({key:e.displayName},e))})))})):t.map((function(e){return a.createElement(s,(0,n.Z)({key:e.displayName},e))}))))}},2560:function(e,t,r){var n=r(7294),a=r(3727);t.Z=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("div",{className:" sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement("div",{key:e.displayName,className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement(a.rU,{to:e.to},n.createElement("span",null,e.displayName)),n.createElement("div",{className:"sm:col-span-2"},e.props.map((function(t,r){return n.createElement("span",null,t,r===e.props.length-1?"":", ")}))))}))))}},9677:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=(r(8215),r(6396),r(8086)),c=r(2560),l=["components"],s={id:"operation-variable-v3rc02",title:"OperationVariable",sidebar_label:"OperationVariable"},p=void 0,m={unversionedId:"v3rc02/content/operation-variable-v3rc02",id:"v3rc02/content/operation-variable-v3rc02",title:"OperationVariable",description:"Properties",source:"@site/docs/v3rc02/content/Operation_variable.mdx",sourceDirName:"v3rc02/content",slug:"/v3rc02/content/operation-variable-v3rc02",permalink:"/aas-core-meta-docs/docs/v3rc02/content/operation-variable-v3rc02",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc02/content/Operation_variable.mdx",tags:[],version:"current",frontMatter:{id:"operation-variable-v3rc02",title:"OperationVariable",sidebar_label:"OperationVariable"},sidebar:"v3rc02Sidebar",previous:{title:"Operation",permalink:"/aas-core-meta-docs/docs/v3rc02/content/operation-v3rc02"},next:{title:"Property",permalink:"/aas-core-meta-docs/docs/v3rc02/content/property-v3rc02"}},u=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],d={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(o.Z,{items:[{displayName:"Value",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"SubmodelElement",to:"submodel-element-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ",(0,i.kt)("h2",{id:"usages"},"Usages"),(0,i.kt)(c.Z,{items:[{displayName:"Operation",to:"operation-v3rc02",props:["InputVariables","OutputVariables","InoutputVariables"]}],mdxType:"UsageList"}))}f.isMDXComponent=!0}}]);