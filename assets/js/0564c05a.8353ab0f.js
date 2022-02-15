"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[6627],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=i,y=d["".concat(l,".").concat(u)]||d[u]||p[u]||s;return r?n.createElement(y,a(a({ref:t},m),{},{components:r})):n.createElement(y,a({ref:t},m))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7462),i=r(7294),s=r(6010),a=r(3727),o=function(e){var t,r=e.type,n=e.isList,s=e.displayName,o=e.to;return t="Class"===r&&o?i.createElement(a.rU,{to:o},s):s,n?i.createElement("code",null,"List [ ",t," ]"):i.createElement("code",null,t)},l=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return i.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},i.createElement("span",null,t),i.createElement("div",null,i.createElement("span",{className:(0,s.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),i.createElement("dd",{className:"mt-1  sm:mt-0"},i.createElement("div",{className:"flex flex-col items-start justify-start"},i.createElement(o,n))))},c=function(e){var t=e.items;return i.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},i.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return i.createElement(l,(0,n.Z)({key:e.displayName},e))}))))}},2560:function(e,t,r){var n=r(7294),i=r(3727);t.Z=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("div",{className:" sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement("div",{key:e.displayName,className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement(i.rU,{to:e.to},n.createElement("span",null,e.displayName)),n.createElement("div",{className:"sm:col-span-2"},e.props.map((function(t,r){return n.createElement("span",null,t,r===e.props.length-1?"":", ")}))))}))))}},7139:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return y}});var n=r(7462),i=r(3366),s=(r(7294),r(3905)),a=(r(8215),r(6396),r(8086)),o=r(2560),l=["components"],c={id:"asset-administration-shell-v3rc01",title:"AssetAdministrationShell",sidebar_label:"AssetAdministrationShell"},m=void 0,p={unversionedId:"v3rc01/content/asset-administration-shell-v3rc01",id:"v3rc01/content/asset-administration-shell-v3rc01",title:"AssetAdministrationShell",description:"Properties",source:"@site/docs/v3rc01/content/Asset_administration_shell.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/asset-administration-shell-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/asset-administration-shell-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Asset_administration_shell.mdx",tags:[],version:"current",frontMatter:{id:"asset-administration-shell-v3rc01",title:"AssetAdministrationShell",sidebar_label:"AssetAdministrationShell"},sidebar:"v3rc01Sidebar",previous:{title:"AnnotatedRelationshipElement",permalink:"/aas-core-meta-docs/docs/v3rc01/content/annotated-relationship-element-v3rc01"},next:{title:"AssetInformation",permalink:"/aas-core-meta-docs/docs/v3rc01/content/asset-information-v3rc01"}},d=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],u={toc:d};function y(e){var t=e.components,r=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)(a.Z,{items:[{displayName:"DataSpecifications",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc01"}},{displayName:"Extension",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Extension",to:"extension-v3rc01"}},{displayName:"IdShort",isRequired:!1,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"}},{displayName:"DisplayName",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc01"}},{displayName:"Category",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"}},{displayName:"Description",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc01"}},{displayName:"Administration",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"AdministrativeInformation",to:"administrative-information-v3rc01"}},{displayName:"Identification",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"Identifier",to:"identifier-v3rc01"}},{displayName:"DerivedFrom",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc01"}},{displayName:"Security",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Security",to:"security-v3rc01"}},{displayName:"AssetInformation",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"AssetInformation",to:"asset-information-v3rc01"}},{displayName:"Submodels",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"Reference",to:"reference-v3rc01"}},{displayName:"Views",isRequired:!0,typeDef:{type:"Class",isList:!0,displayName:"View",to:"view-v3rc01"}}],mdxType:"PropertiesList"})," ",(0,s.kt)("h2",{id:"usages"},"Usages"),(0,s.kt)(o.Z,{items:[{displayName:"Environment",to:"environment-v3rc01",props:["AssetAdministrationShells"]}],mdxType:"UsageList"}))}y.isMDXComponent=!0}}]);