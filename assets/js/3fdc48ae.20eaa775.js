"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[1825],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||c;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7462),a=r(7294),c=r(6010),i=r(3727),o=function(e){var t,r=e.type,n=e.isList,c=e.displayName,o=e.to;return t="Class"===r&&o?a.createElement(i.rU,{to:o},c):c,n?a.createElement("code",null,"List [ ",t," ]"):a.createElement("code",null,t)},s=function(e){var t=e.displayName,r=e.to;return"SELF"===t?a.createElement("span",{className:"font-bold"},"Own Props"):a.createElement("span",{className:"font-bold"},"From ",a.createElement(i.rU,{to:r},t))},l=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return a.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},a.createElement("span",null,t),a.createElement("div",null,a.createElement("span",{className:(0,c.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),a.createElement("dd",{className:"mt-1  sm:mt-0"},a.createElement("div",{className:"flex flex-col items-start justify-start"},a.createElement(o,n))))};var m=function(e){var t=e.items,r=function(e){var t={},r=e.reduce((function(e,r){return console.log(r),e[r.inheritedFrom.displayName]?e[r.inheritedFrom.displayName].push(r):(e[r.inheritedFrom.displayName]=[r],t[r.inheritedFrom.displayName]=r.inheritedFrom.to),e}),{});return[t,r]}(t),c=r[0],i=r[1],o=a.useState(!1),m=o[0],u=o[1];return a.createElement("div",{className:"px-4 py-5 sm:p-0"},a.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},a.createElement("span",null,"Group by Inheritance"),a.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:m,onChange:function(){return u((function(e){return!e}))}})),a.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},m?Object.keys(i).map((function(e){var t=i[e];return a.createElement("div",{className:"py-2",key:e},a.createElement(s,{displayName:e,to:c[e]}),t.map((function(e){return a.createElement(l,(0,n.Z)({key:e.displayName},e))})))})):t.map((function(e){return a.createElement(l,(0,n.Z)({key:e.displayName},e))}))))}},2560:function(e,t,r){var n=r(7294),a=r(3727);t.Z=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("div",{className:" sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement("div",{key:e.displayName,className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement(a.rU,{to:e.to},n.createElement("span",null,e.displayName)),n.createElement("div",{className:"sm:col-span-2"},e.props.map((function(t,r){return n.createElement("span",null,t,r===e.props.length-1?"":", ")}))))}))))}},8324:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),c=(r(7294),r(3905)),i=(r(8215),r(6396),r(8086)),o=r(2560),s=["components"],l={id:"object-attributes-v3rc01",title:"ObjectAttributes",sidebar_label:"ObjectAttributes"},m=void 0,u={unversionedId:"v3rc01/content/object-attributes-v3rc01",id:"v3rc01/content/object-attributes-v3rc01",title:"ObjectAttributes",description:"Properties",source:"@site/docs/v3rc01/content/Object_attributes.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/object-attributes-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/object-attributes-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Object_attributes.mdx",tags:[],version:"current",frontMatter:{id:"object-attributes-v3rc01",title:"ObjectAttributes",sidebar_label:"ObjectAttributes"},sidebar:"v3rc01Sidebar",previous:{title:"MultiLanguageProperty",permalink:"/aas-core-meta-docs/docs/v3rc01/content/multi-language-property-v3rc01"},next:{title:"Operation",permalink:"/aas-core-meta-docs/docs/v3rc01/content/operation-v3rc01"}},p=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"properties"},"Properties"),(0,c.kt)(i.Z,{items:[{displayName:"ObjectAttributes",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ",(0,c.kt)("h2",{id:"usages"},"Usages"),(0,c.kt)(o.Z,{items:[{displayName:"PermissionsPerObject",to:"permissions-per-object-v3rc01",props:["TargetObjectAttributes"]}],mdxType:"UsageList"}))}f.isMDXComponent=!0}}]);