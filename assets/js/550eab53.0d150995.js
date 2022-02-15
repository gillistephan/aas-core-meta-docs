"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[2953],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,v=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(v,c(c({ref:t},m),{},{components:n})):r.createElement(v,c({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},8086:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7462),i=n(7294),o=n(6010),c=n(3727),a=function(e){var t,n=e.type,r=e.isList,o=e.displayName,a=e.to;return t="Class"===n&&a?i.createElement(c.rU,{to:a},o):o,r?i.createElement("code",null,"List [ ",t," ]"):i.createElement("code",null,t)},s=function(e){var t=e.displayName,n=e.isRequired,r=e.typeDef;return i.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},i.createElement("span",null,t),i.createElement("div",null,i.createElement("span",{className:(0,o.Z)(n?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},n?"Required":"Optional")),i.createElement("dd",{className:"mt-1  sm:mt-0"},i.createElement("div",{className:"flex flex-col items-start justify-start"},i.createElement(a,r))))},l=function(e){var t=e.items;return i.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},i.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return i.createElement(s,(0,r.Z)({key:e.displayName},e))}))))}},5473:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=(n(8215),n(6396),n(8086)),a=["components"],s={id:"environment-v3rc02",title:"Environment",sidebar_label:"Environment"},l=void 0,m={unversionedId:"v3rc02/content/environment-v3rc02",id:"v3rc02/content/environment-v3rc02",title:"Environment",description:"Properties",source:"@site/docs/v3rc02/content/Environment.mdx",sourceDirName:"v3rc02/content",slug:"/v3rc02/content/environment-v3rc02",permalink:"/aas-core-meta-docs/docs/v3rc02/content/environment-v3rc02",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc02/content/Environment.mdx",tags:[],version:"current",frontMatter:{id:"environment-v3rc02",title:"Environment",sidebar_label:"Environment"},sidebar:"v3rc02Sidebar",previous:{title:"Entity",permalink:"/aas-core-meta-docs/docs/v3rc02/content/entity-v3rc02"},next:{title:"Extension",permalink:"/aas-core-meta-docs/docs/v3rc02/content/extension-v3rc02"}},p=[{value:"Properties",id:"properties",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)(c.Z,{items:[{displayName:"AssetAdministrationShells",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"AssetAdministrationShell",to:"asset-administration-shell-v3rc02"}},{displayName:"Submodels",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Submodel",to:"submodel-v3rc02"}},{displayName:"ConceptDescriptions",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"ConceptDescription",to:"concept-description-v3rc02"}}],mdxType:"PropertiesList"})," ")}d.isMDXComponent=!0}}]);