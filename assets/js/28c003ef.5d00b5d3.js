"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[3524],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},8086:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(6010),o=n(3727),i=function(e){var t,n=e.type,a=e.isList,i=e.displayName,s=e.to;return t="Class"===n&&s?r.createElement(o.rU,{to:s},i):i,a?r.createElement("code",null,"List [ ",t," ]"):r.createElement("code",null,t)},s=function(e){var t=e.name,n=e.isRequired,o=e.typeDef;return r.createElement("div",{className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},r.createElement("dt",{className:"flex w-full items-center space-x-4"},r.createElement("span",{className:"w-56"},t),r.createElement("span",{className:(0,a.Z)(n?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium")},n?"Required":"Optional")),r.createElement("dd",{className:"mt-1 sm:col-span-2 sm:mt-0"},r.createElement("div",{className:"flex flex-col items-start justify-start"},r.createElement(i,o))))},c=function(e){var t=e.items;return r.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},r.createElement("dl",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return r.createElement(s,e)}))))}},2037:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(8215),n(6396),n(8086)),s=["components"],c={id:"has-extensions-v3rc01",title:"HasExtensions",sidebar_label:"HasExtensions"},l=void 0,p={unversionedId:"v3rc01/content/has-extensions-v3rc01",id:"v3rc01/content/has-extensions-v3rc01",title:"HasExtensions",description:"Element that can be extended by proprietary extensions.",source:"@site/docs/v3rc01/content/HasExtensions.md",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/has-extensions-v3rc01",permalink:"/docs/v3rc01/content/has-extensions-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/HasExtensions.md",tags:[],version:"current",frontMatter:{id:"has-extensions-v3rc01",title:"HasExtensions",sidebar_label:"HasExtensions"},sidebar:"v3rc01Sidebar",previous:{title:"HasDataSpecification",permalink:"/docs/v3rc01/content/has-data-specification-v3rc01"},next:{title:"HasKind",permalink:"/docs/v3rc01/content/has-kind-v3rc01"}},u=[{value:"Properties",id:"properties",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Element that can be extended by proprietary extensions."),(0,o.kt)("p",null,"Note: Extensions are proprietary, i.e. they do not support global interoperability."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)(i.Z,{items:[{name:"Extension",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"Extension",to:"extension-v3rc01"}}],mdxType:"PropertiesList"}))}d.isMDXComponent=!0}}]);