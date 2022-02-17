"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[1269],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},8086:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(7462),o=n(7294),i=n(6010),a=n(3727),c=function(e){var t,n=e.type,r=e.isList,i=e.displayName,c=e.to;return t="Class"===n&&c?o.createElement(a.rU,{to:c},i):i,r?o.createElement("code",null,"List [ ",t," ]"):o.createElement("code",null,t)},s=function(e){var t=e.displayName,n=e.to;return"SELF"===t?o.createElement("span",{className:"font-bold"},"Own Props"):o.createElement("span",{className:"font-bold"},"From ",o.createElement(a.rU,{to:n},t))},l=function(e){var t=e.displayName,n=e.isRequired,r=e.typeDef;return o.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},o.createElement("span",null,t),o.createElement("div",null,o.createElement("span",{className:(0,i.Z)(n?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},n?"Required":"Optional")),o.createElement("dd",{className:"mt-1  sm:mt-0"},o.createElement("div",{className:"flex flex-col items-start justify-start"},o.createElement(c,r))))};var m=function(e){var t=e.items,n=function(e){var t={},n=e.reduce((function(e,n){return console.log(n),e[n.inheritedFrom.displayName]?e[n.inheritedFrom.displayName].push(n):(e[n.inheritedFrom.displayName]=[n],t[n.inheritedFrom.displayName]=n.inheritedFrom.to),e}),{});return[t,n]}(t),i=n[0],a=n[1],c=o.useState(!1),m=c[0],p=c[1];return o.createElement("div",{className:"px-4 py-5 sm:p-0"},o.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},o.createElement("span",null,"Group by Inheritance"),o.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:m,onChange:function(){return p((function(e){return!e}))}})),o.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},m?Object.keys(a).map((function(e){var t=a[e];return o.createElement("div",{className:"py-2",key:e},o.createElement(s,{displayName:e,to:i[e]}),t.map((function(e){return o.createElement(l,(0,r.Z)({key:e.displayName},e))})))})):t.map((function(e){return o.createElement(l,(0,r.Z)({key:e.displayName},e))}))))}},2560:function(e,t,n){var r=n(7294),o=n(3727);t.Z=function(e){var t=e.items;return r.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},r.createElement("div",{className:" sm:divide-y sm:divide-gray-200"},t.map((function(e){return r.createElement("div",{key:e.displayName,className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},r.createElement(o.rU,{to:e.to},r.createElement("span",null,e.displayName)),r.createElement("div",{className:"sm:col-span-2"},e.props.map((function(t,n){return r.createElement("span",null,t,n===e.props.length-1?"":", ")}))))}))))}},9012:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=(n(8215),n(6396),n(8086)),c=n(2560),s=["components"],l={id:"policy-information-points-v3rc01",title:"PolicyInformationPoints",sidebar_label:"PolicyInformationPoints"},m=void 0,p={unversionedId:"v3rc01/content/policy-information-points-v3rc01",id:"v3rc01/content/policy-information-points-v3rc01",title:"PolicyInformationPoints",description:"Properties",source:"@site/docs/v3rc01/content/Policy_information_points.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/policy-information-points-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/policy-information-points-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Policy_information_points.mdx",tags:[],version:"current",frontMatter:{id:"policy-information-points-v3rc01",title:"PolicyInformationPoints",sidebar_label:"PolicyInformationPoints"},sidebar:"v3rc01Sidebar",previous:{title:"PolicyEnforcementPoints",permalink:"/aas-core-meta-docs/docs/v3rc01/content/policy-enforcement-points-v3rc01"},next:{title:"Property",permalink:"/aas-core-meta-docs/docs/v3rc01/content/property-v3rc01"}},u=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(a.Z,{items:[{displayName:"ExternalInformationPoints",isRequired:!1,typeDef:{type:"Primitive",isList:!1,displayName:"boolean",to:null},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"InternalInformationPoints",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ",(0,i.kt)("h2",{id:"usages"},"Usages"),(0,i.kt)(c.Z,{items:[{displayName:"AccessControlPolicyPoints",to:"access-control-policy-points-v3rc01",props:["PolicyInformationPoints"]}],mdxType:"UsageList"}))}f.isMDXComponent=!0}}]);