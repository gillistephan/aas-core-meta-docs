"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[3354],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},8086:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),a=n(7294),o=n(6010),i=n(3727),c=function(e){var t,n=e.type,r=e.isList,o=e.displayName,c=e.to;return t="Class"===n&&c?a.createElement(i.rU,{to:c},o):o,r?a.createElement("code",null,"List [ ",t," ]"):a.createElement("code",null,t)},s=function(e){var t=e.displayName,n=e.to;return"SELF"===t?a.createElement("span",{className:"font-bold"},"Own Props"):a.createElement("span",{className:"font-bold"},"From ",a.createElement(i.rU,{to:n},t))},l=function(e){var t=e.displayName,n=e.isRequired,r=e.typeDef;return a.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},a.createElement("span",null,t),a.createElement("div",null,a.createElement("span",{className:(0,o.Z)(n?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},n?"Required":"Optional")),a.createElement("dd",{className:"mt-1  sm:mt-0"},a.createElement("div",{className:"flex flex-col items-start justify-start"},a.createElement(c,r))))};var m=function(e){var t=e.items,n=function(e){var t={},n=e.reduce((function(e,n){return console.log(n),e[n.inheritedFrom.displayName]?e[n.inheritedFrom.displayName].push(n):(e[n.inheritedFrom.displayName]=[n],t[n.inheritedFrom.displayName]=n.inheritedFrom.to),e}),{});return[t,n]}(t),o=n[0],i=n[1],c=a.useState(!1),m=c[0],u=c[1];return a.createElement("div",{className:"px-4 py-5 sm:p-0"},a.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},a.createElement("span",null,"Group by Inheritance"),a.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:m,onChange:function(){return u((function(e){return!e}))}})),a.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},m?Object.keys(i).map((function(e){var t=i[e];return a.createElement("div",{className:"py-2",key:e},a.createElement(s,{displayName:e,to:o[e]}),t.map((function(e){return a.createElement(l,(0,r.Z)({key:e.displayName},e))})))})):t.map((function(e){return a.createElement(l,(0,r.Z)({key:e.displayName},e))}))))}},5361:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(8215),n(6396),n(8086)),c=["components"],s={id:"has-extensions-v3rc01",title:"HasExtensions",sidebar_label:"HasExtensions"},l=void 0,m={unversionedId:"v3rc01/content/has-extensions-v3rc01",id:"v3rc01/content/has-extensions-v3rc01",title:"HasExtensions",description:"Properties",source:"@site/docs/v3rc01/content/Has_extensions.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/has-extensions-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/has-extensions-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Has_extensions.mdx",tags:[],version:"current",frontMatter:{id:"has-extensions-v3rc01",title:"HasExtensions",sidebar_label:"HasExtensions"},sidebar:"v3rc01Sidebar",previous:{title:"HasDataSpecification",permalink:"/aas-core-meta-docs/docs/v3rc01/content/has-data-specification-v3rc01"},next:{title:"HasKind",permalink:"/aas-core-meta-docs/docs/v3rc01/content/has-kind-v3rc01"}},u=[{value:"Properties",id:"properties",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)(i.Z,{items:[{displayName:"Extension",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Extension",to:"extension-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ")}d.isMDXComponent=!0}}]);