"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[4083],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=c,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function d(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7294),c=r(6010),a=r(3727),o=function(e){var t,r=e.type,c=e.isList,o=e.displayName,i=e.to;return t="Class"===r&&i?n.createElement(a.rU,{to:i},o):o,c?n.createElement("code",null,"List [ ",t," ]"):n.createElement("code",null,t)},i=function(e){var t=e.name,r=e.isRequired,a=e.typeDef;return n.createElement("div",{className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement("dt",{className:"flex w-full items-center space-x-4"},n.createElement("span",{className:"w-56"},t),n.createElement("span",{className:(0,c.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),n.createElement("dd",{className:"mt-1 sm:col-span-2 sm:mt-0"},n.createElement("div",{className:"flex flex-col items-start justify-start"},n.createElement(o,a))))},s=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("dl",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement(i,e)}))))}},7512:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),c=r(3366),a=(r(7294),r(3905)),o=(r(8215),r(6396),r(8086)),i=["components"],s={id:"object-attributes-v3rc01",title:"ObjectAttributes",sidebar_label:"ObjectAttributes"},l=void 0,u={unversionedId:"v3rc01/content/object-attributes-v3rc01",id:"v3rc01/content/object-attributes-v3rc01",title:"ObjectAttributes",description:"A set of data elements that describe object attributes. These attributes need to",source:"@site/docs/v3rc01/content/ObjectAttributes.md",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/object-attributes-v3rc01",permalink:"/docs/v3rc01/content/object-attributes-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/ObjectAttributes.md",tags:[],version:"current",frontMatter:{id:"object-attributes-v3rc01",title:"ObjectAttributes",sidebar_label:"ObjectAttributes"},sidebar:"v3rc01Sidebar",previous:{title:"MultiLanguageProperty",permalink:"/docs/v3rc01/content/multi-language-property-v3rc01"},next:{title:"Operation",permalink:"/docs/v3rc01/content/operation-v3rc01"}},p=[{value:"Properties",id:"properties",children:[],level:2}],m={toc:p};function d(e){var t=e.components,r=(0,c.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A set of data elements that describe object attributes. These attributes need to\nrefer to a data element within an existing submodel."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(o.Z,{items:[{name:"ObjectAttributes",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc01"}}],mdxType:"PropertiesList"}))}d.isMDXComponent=!0}}]);