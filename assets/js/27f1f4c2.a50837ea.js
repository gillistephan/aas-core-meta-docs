"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[7342],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,f=u["".concat(a,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(f,s(s({ref:t},m),{},{components:r})):n.createElement(f,s({ref:t},m))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=u;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294),i=r(6010),o=r(3727),s=function(e){var t,r=e.type,i=e.isList,s=e.displayName,c=e.to;return t="Class"===r&&c?n.createElement(o.rU,{to:c},s):s,i?n.createElement("code",null,"List [ ",t," ]"):n.createElement("code",null,t)},c=function(e){var t=e.name,r=e.isRequired,o=e.typeDef;return n.createElement("div",{className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement("dt",{className:"flex w-full items-center space-x-4"},n.createElement("span",{className:"w-56"},t),n.createElement("span",{className:(0,i.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),n.createElement("dd",{className:"mt-1 sm:col-span-2 sm:mt-0"},n.createElement("div",{className:"flex flex-col items-start justify-start"},n.createElement(s,o))))},a=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("dl",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement(c,e)}))))}},857:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),s=(r(8215),r(6396),r(8086)),c=["components"],a={id:"permission-v3rc01",title:"Permission",sidebar_label:"Permission"},l=void 0,m={unversionedId:"v3rc01/content/permission-v3rc01",id:"v3rc01/content/permission-v3rc01",title:"Permission",description:"Description of a single permission.",source:"@site/docs/v3rc01/content/Permission.md",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/permission-v3rc01",permalink:"/docs/v3rc01/content/permission-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Permission.md",tags:[],version:"current",frontMatter:{id:"permission-v3rc01",title:"Permission",sidebar_label:"Permission"},sidebar:"v3rc01Sidebar",previous:{title:"OperationVariable",permalink:"/docs/v3rc01/content/operation-variable-v3rc01"},next:{title:"PermissionsPerObject",permalink:"/docs/v3rc01/content/permissions-per-object-v3rc01"}},p=[{value:"Properties",id:"properties",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Description of a single permission."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)(s.Z,{items:[{name:"Permission",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc01"}},{name:"KindOfPermission",isRequired:!0,typeDef:{type:"Enumeration",isList:!1,displayName:"PermissionKind",to:"permission-kind-v3rc01"}}],mdxType:"PropertiesList"}))}d.isMDXComponent=!0}}]);