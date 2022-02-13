"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[8765],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(r),f=c,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:c,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7294),c=r(6010),i=r(3727),o=function(e){var t,r=e.type,c=e.isList,o=e.displayName,a=e.to;return t="Class"===r&&a?n.createElement(i.rU,{to:a},o):o,c?n.createElement("code",null,"List [ ",t," ]"):n.createElement("code",null,t)},a=function(e){var t=e.name,r=e.isRequired,i=e.typeDef;return n.createElement("div",{className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement("dt",{className:"flex w-full items-center space-x-4"},n.createElement("span",{className:"w-56"},t),n.createElement("span",{className:(0,c.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),n.createElement("dd",{className:"mt-1 sm:col-span-2 sm:mt-0"},n.createElement("div",{className:"flex flex-col items-start justify-start"},n.createElement(o,i))))},s=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("dl",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement(a,e)}))))}},137:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),c=r(3366),i=(r(7294),r(3905)),o=(r(8215),r(6396),r(8086)),a=["components"],s={id:"security-v3rc01",title:"Security",sidebar_label:"Security"},l=void 0,u={unversionedId:"v3rc01/content/security-v3rc01",id:"v3rc01/content/security-v3rc01",title:"Security",description:"Container for security relevant information of the AAS.",source:"@site/docs/v3rc01/content/Security.md",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/security-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/security-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Security.md",tags:[],version:"current",frontMatter:{id:"security-v3rc01",title:"Security",sidebar_label:"Security"},sidebar:"v3rc01Sidebar",previous:{title:"Reference",permalink:"/aas-core-meta-docs/docs/v3rc01/content/reference-v3rc01"},next:{title:"SubjectAttributes",permalink:"/aas-core-meta-docs/docs/v3rc01/content/subject-attributes-v3rc01"}},p=[{value:"Properties",id:"properties",children:[],level:2}],m={toc:p};function f(e){var t=e.components,r=(0,c.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Container for security relevant information of the AAS."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(o.Z,{items:[{name:"AccessControlPolicyPoints",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"AccessControlPolicyPoints",to:"access-control-policy-points-v3rc01"}},{name:"Certificates",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Certificate",to:"certificate-v3rc01"}},{name:"RequiredCertificatesExtension",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc01"}}],mdxType:"PropertiesList"}))}f.isMDXComponent=!0}}]);