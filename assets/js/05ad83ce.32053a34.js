"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[2680],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||i;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(6010),i=r(3727),c=function(e){var t,r=e.type,a=e.isList,c=e.displayName,o=e.to;return t="Class"===r&&o?n.createElement(i.rU,{to:o},c):c,a?n.createElement("code",null,"List [ ",t," ]"):n.createElement("code",null,t)},o=function(e){var t=e.name,r=e.isRequired,i=e.typeDef;return n.createElement("div",{className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement("dt",{className:"flex w-full items-center space-x-4"},n.createElement("span",{className:"w-56"},t),n.createElement("span",{className:(0,a.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),n.createElement("dd",{className:"mt-1 sm:col-span-2 sm:mt-0"},n.createElement("div",{className:"flex flex-col items-start justify-start"},n.createElement(c,i))))},l=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("dl",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement(o,e)}))))}},6767:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return f},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=(r(8215),r(6396),r(8086)),o=["components"],l={id:"qualifiable-v3rc01",title:"Qualifiable",sidebar_label:"Qualifiable"},s=void 0,u={unversionedId:"v3rc01/content/qualifiable-v3rc01",id:"v3rc01/content/qualifiable-v3rc01",title:"Qualifiable",description:"The value of a qualifiable element may be further qualified by one or more",source:"@site/docs/v3rc01/content/Qualifiable.md",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/qualifiable-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/qualifiable-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Qualifiable.md",tags:[],version:"current",frontMatter:{id:"qualifiable-v3rc01",title:"Qualifiable",sidebar_label:"Qualifiable"},sidebar:"v3rc01Sidebar",previous:{title:"Identifiable",permalink:"/aas-core-meta-docs/docs/v3rc01/content/identifiable-v3rc01"},next:{title:"Referable",permalink:"/aas-core-meta-docs/docs/v3rc01/content/referable-v3rc01"}},f=[{value:"Properties",id:"properties",children:[],level:2}],m={toc:f};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The value of a qualifiable element may be further qualified by one or more\nqualifiers or complex formulas."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(c.Z,{items:[{name:"Qualifiers",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Constraint",to:"constraint-v3rc01"}}],mdxType:"PropertiesList"}))}p.isMDXComponent=!0}}]);