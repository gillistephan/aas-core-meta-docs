"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[8687],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=l(r),d=s,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,c=new Array(i);c[0]=u;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:s,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),s=r(6010),i=r(3727),c=function(e){var t,r=e.type,s=e.isList,c=e.displayName,a=e.to;return t="Class"===r&&a?n.createElement(i.rU,{to:a},c):c,s?n.createElement("code",null,"List [ ",t," ]"):n.createElement("code",null,t)},a=function(e){var t=e.name,r=e.isRequired,i=e.typeDef;return n.createElement("div",{className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement("dt",{className:"flex w-full items-center space-x-4"},n.createElement("span",{className:"w-56"},t),n.createElement("span",{className:(0,s.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex items-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),n.createElement("dd",{className:"mt-1 sm:col-span-2 sm:mt-0"},n.createElement("div",{className:"flex flex-col items-start justify-start"},n.createElement(c,i))))},o=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("dl",{className:"sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement(a,e)}))))}},7643:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var n=r(7462),s=r(3366),i=(r(7294),r(3905)),c=(r(8215),r(6396),r(8086)),a=["components"],o={id:"access-permission-rule-v3rc01",title:"AccessPermissionRule",sidebar_label:"AccessPermissionRule"},l=void 0,m={unversionedId:"v3rc01/content/access-permission-rule-v3rc01",id:"v3rc01/content/access-permission-rule-v3rc01",title:"AccessPermissionRule",description:"Table that defines access permissions per authenticated subject for a set of objects",source:"@site/docs/v3rc01/content/AccessPermissionRule.md",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/access-permission-rule-v3rc01",permalink:"/docs/v3rc01/content/access-permission-rule-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/AccessPermissionRule.md",tags:[],version:"current",frontMatter:{id:"access-permission-rule-v3rc01",title:"AccessPermissionRule",sidebar_label:"AccessPermissionRule"},sidebar:"v3rc01Sidebar",previous:{title:"AccessControl",permalink:"/docs/v3rc01/content/access-control-v3rc01"},next:{title:"AdministrativeInformation",permalink:"/docs/v3rc01/content/administrative-information-v3rc01"}},p=[{value:"Properties",id:"properties",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Table that defines access permissions per authenticated subject for a set of objects\n(referable elements)."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(c.Z,{items:[{name:"Extension",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"Extension",to:"extension-v3rc01"}},{name:"IdShort",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"}},{name:"DisplayName",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc01"}},{name:"Category",isRequired:!1,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc01"}},{name:"Description",isRequired:!1,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc01"}},{name:"Qualifiers",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Constraint",to:"constraint-v3rc01"}},{name:"TargetSubjectAttributes",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"SubjectAttributes",to:"subject-attributes-v3rc01"}},{name:"PermissionsPerObject",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"PermissionsPerObject",to:"permissions-per-object-v3rc01"}}],mdxType:"PropertiesList"}))}d.isMDXComponent=!0}}]);