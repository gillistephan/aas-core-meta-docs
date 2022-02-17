"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[4876],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,y=d["".concat(s,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(y,a(a({ref:t},m),{},{components:n})):r.createElement(y,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},8086:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),i=n(7294),o=n(6010),a=n(3727),c=function(e){var t,n=e.type,r=e.isList,o=e.displayName,c=e.to;return t="Class"===n&&c?i.createElement(a.rU,{to:c},o):o,r?i.createElement("code",null,"List [ ",t," ]"):i.createElement("code",null,t)},s=function(e){var t=e.displayName,n=e.to;return"SELF"===t?i.createElement("span",{className:"font-bold"},"Own Props"):i.createElement("span",{className:"font-bold"},"From ",i.createElement(a.rU,{to:n},t))},l=function(e){var t=e.displayName,n=e.isRequired,r=e.typeDef;return i.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},i.createElement("span",null,t),i.createElement("div",null,i.createElement("span",{className:(0,o.Z)(n?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},n?"Required":"Optional")),i.createElement("dd",{className:"mt-1  sm:mt-0"},i.createElement("div",{className:"flex flex-col items-start justify-start"},i.createElement(c,r))))};var m=function(e){var t=e.items,n=function(e){var t={},n=e.reduce((function(e,n){return console.log(n),e[n.inheritedFrom.displayName]?e[n.inheritedFrom.displayName].push(n):(e[n.inheritedFrom.displayName]=[n],t[n.inheritedFrom.displayName]=n.inheritedFrom.to),e}),{});return[t,n]}(t),o=n[0],a=n[1],c=i.useState(!1),m=c[0],p=c[1];return i.createElement("div",{className:"px-4 py-5 sm:p-0"},i.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},i.createElement("span",null,"Group by Inheritance"),i.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:m,onChange:function(){return p((function(e){return!e}))}})),i.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},m?Object.keys(a).map((function(e){var t=a[e];return i.createElement("div",{className:"py-2",key:e},i.createElement(s,{displayName:e,to:o[e]}),t.map((function(e){return i.createElement(l,(0,r.Z)({key:e.displayName},e))})))})):t.map((function(e){return i.createElement(l,(0,r.Z)({key:e.displayName},e))}))))}},2560:function(e,t,n){var r=n(7294),i=n(3727);t.Z=function(e){var t=e.items;return r.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},r.createElement("div",{className:" sm:divide-y sm:divide-gray-200"},t.map((function(e){return r.createElement("div",{key:e.displayName,className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},r.createElement(i.rU,{to:e.to},r.createElement("span",null,e.displayName)),r.createElement("div",{className:"sm:col-span-2"},e.props.map((function(t,n){return r.createElement("span",null,t,n===e.props.length-1?"":", ")}))))}))))}},6568:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return y}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=(n(8215),n(6396),n(8086)),c=n(2560),s=["components"],l={id:"policy-administration-point-v3rc01",title:"PolicyAdministrationPoint",sidebar_label:"PolicyAdministrationPoint"},m=void 0,p={unversionedId:"v3rc01/content/policy-administration-point-v3rc01",id:"v3rc01/content/policy-administration-point-v3rc01",title:"PolicyAdministrationPoint",description:"Properties",source:"@site/docs/v3rc01/content/Policy_administration_point.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/policy-administration-point-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/policy-administration-point-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Policy_administration_point.mdx",tags:[],version:"current",frontMatter:{id:"policy-administration-point-v3rc01",title:"PolicyAdministrationPoint",sidebar_label:"PolicyAdministrationPoint"},sidebar:"v3rc01Sidebar",previous:{title:"PermissionsPerObject",permalink:"/aas-core-meta-docs/docs/v3rc01/content/permissions-per-object-v3rc01"},next:{title:"PolicyDecisionPoint",permalink:"/aas-core-meta-docs/docs/v3rc01/content/policy-decision-point-v3rc01"}},d=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],u={toc:d};function y(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)(a.Z,{items:[{displayName:"ExternalAccessControl",isRequired:!1,typeDef:{type:"Primitive",isList:!1,displayName:"boolean",to:null},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"LocalAccessControl",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"AccessControl",to:"access-control-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ",(0,o.kt)("h2",{id:"usages"},"Usages"),(0,o.kt)(c.Z,{items:[{displayName:"Certificate",to:"certificate-v3rc01",props:["PolicyAdministrationPoint"]},{displayName:"BlobCertificate",to:"blob-certificate-v3rc01",props:["PolicyAdministrationPoint"]},{displayName:"AccessControlPolicyPoints",to:"access-control-policy-points-v3rc01",props:["PolicyAdministrationPoint"]}],mdxType:"UsageList"}))}y.isMDXComponent=!0}}]);