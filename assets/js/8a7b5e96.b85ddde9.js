"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[7123],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(y,c(c({ref:t},p),{},{components:n})):r.createElement(y,c({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},6396:function(e,t,n){n(7294),n(2389),n(9443);n(3616)},8086:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7462),i=n(7294),o=n(6010),c=n(3727),a=function(e){var t,n=e.type,r=e.isList,o=e.displayName,a=e.to;return t="Class"===n&&a?i.createElement(c.rU,{to:a},o):o,r?i.createElement("code",null,"List [ ",t," ]"):i.createElement("code",null,t)},s=function(e){var t=e.displayName,n=e.isRequired,r=e.typeDef;return i.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},i.createElement("span",null,t),i.createElement("div",null,i.createElement("span",{className:(0,o.Z)(n?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},n?"Required":"Optional")),i.createElement("dd",{className:"mt-1  sm:mt-0"},i.createElement("div",{className:"flex flex-col items-start justify-start"},i.createElement(a,r))))},l=function(e){var t=e.items;return i.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},i.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return i.createElement(s,(0,r.Z)({key:e.displayName},e))}))))}},2560:function(e,t,n){var r=n(7294),i=n(3727);t.Z=function(e){var t=e.items;return r.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},r.createElement("div",{className:" sm:divide-y sm:divide-gray-200"},t.map((function(e){return r.createElement("div",{key:e.displayName,className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},r.createElement(i.rU,{to:e.to},r.createElement("span",null,e.displayName)),r.createElement("div",{className:"sm:col-span-2"},e.props.map((function(t,n){return r.createElement("span",null,t,n===e.props.length-1?"":", ")}))))}))))}},2745:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return y}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=(n(8215),n(6396),n(8086)),a=n(2560),s=["components"],l={id:"policy-decision-point-v3rc01",title:"PolicyDecisionPoint",sidebar_label:"PolicyDecisionPoint"},p=void 0,m={unversionedId:"v3rc01/content/policy-decision-point-v3rc01",id:"v3rc01/content/policy-decision-point-v3rc01",title:"PolicyDecisionPoint",description:"Properties",source:"@site/docs/v3rc01/content/Policy_decision_point.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/policy-decision-point-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/policy-decision-point-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Policy_decision_point.mdx",tags:[],version:"current",frontMatter:{id:"policy-decision-point-v3rc01",title:"PolicyDecisionPoint",sidebar_label:"PolicyDecisionPoint"},sidebar:"v3rc01Sidebar",previous:{title:"PolicyAdministrationPoint",permalink:"/aas-core-meta-docs/docs/v3rc01/content/policy-administration-point-v3rc01"},next:{title:"PolicyEnforcementPoints",permalink:"/aas-core-meta-docs/docs/v3rc01/content/policy-enforcement-points-v3rc01"}},d=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],u={toc:d};function y(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)(c.Z,{items:[{displayName:"ExternalPolicyDecisionPoints",isRequired:!1,typeDef:{type:"Primitive",isList:!1,displayName:"boolean",to:null}}],mdxType:"PropertiesList"})," ",(0,o.kt)("h2",{id:"usages"},"Usages"),(0,o.kt)(a.Z,{items:[{displayName:"AccessControlPolicyPoints",to:"access-control-policy-points-v3rc01",props:["PolicyDecisionPoint"]}],mdxType:"UsageList"}))}y.isMDXComponent=!0}}]);