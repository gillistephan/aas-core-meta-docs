"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[782],{3905:function(e,t,i){i.d(t,{Zo:function(){return p},kt:function(){return u}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(i),u=n,y=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return i?r.createElement(y,o(o({ref:t},p),{},{components:i})):r.createElement(y,o({ref:t},p))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},8215:function(e,t,i){i(7294)},6396:function(e,t,i){i(7294),i(2389),i(9443);i(3616)},8086:function(e,t,i){i.d(t,{Z:function(){return p}});var r=i(7462),n=i(7294),a=i(6010),o=i(3727),s=function(e){var t,i=e.type,r=e.isList,a=e.displayName,s=e.to;return t="Class"===i&&s?n.createElement(o.rU,{to:s},a):a,r?n.createElement("code",null,"List [ ",t," ]"):n.createElement("code",null,t)},c=function(e){var t=e.displayName,i=e.to;return"SELF"===t?n.createElement("span",{className:"font-bold"},"Own Props"):n.createElement("span",{className:"font-bold"},"From ",n.createElement(o.rU,{to:i},t))},l=function(e){var t=e.displayName,i=e.isRequired,r=e.typeDef;return n.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},n.createElement("span",null,t),n.createElement("div",null,n.createElement("span",{className:(0,a.Z)(i?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},i?"Required":"Optional")),n.createElement("dd",{className:"mt-1  sm:mt-0"},n.createElement("div",{className:"flex flex-col items-start justify-start"},n.createElement(s,r))))};var p=function(e){var t=e.items,i=function(e){var t={},i=e.reduce((function(e,i){return console.log(i),e[i.inheritedFrom.displayName]?e[i.inheritedFrom.displayName].push(i):(e[i.inheritedFrom.displayName]=[i],t[i.inheritedFrom.displayName]=i.inheritedFrom.to),e}),{});return[t,i]}(t),a=i[0],o=i[1],s=n.useState(!1),p=s[0],m=s[1];return n.createElement("div",{className:"px-4 py-5 sm:p-0"},n.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},n.createElement("span",null,"Group by Inheritance"),n.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:p,onChange:function(){return m((function(e){return!e}))}})),n.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},p?Object.keys(o).map((function(e){var t=o[e];return n.createElement("div",{className:"py-2",key:e},n.createElement(c,{displayName:e,to:a[e]}),t.map((function(e){return n.createElement(l,(0,r.Z)({key:e.displayName},e))})))})):t.map((function(e){return n.createElement(l,(0,r.Z)({key:e.displayName},e))}))))}},9819:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=i(7462),n=i(3366),a=(i(7294),i(3905)),o=(i(8215),i(6396),i(8086)),s=["components"],c={id:"data-specification-iec61360-v3rc02",title:"DataSpecificationIec61360",sidebar_label:"DataSpecificationIec61360"},l=void 0,p={unversionedId:"v3rc02/content/data-specification-iec61360-v3rc02",id:"v3rc02/content/data-specification-iec61360-v3rc02",title:"DataSpecificationIec61360",description:"Properties",source:"@site/docs/v3rc02/content/Data_specification_IEC61360.mdx",sourceDirName:"v3rc02/content",slug:"/v3rc02/content/data-specification-iec61360-v3rc02",permalink:"/aas-core-meta-docs/docs/v3rc02/content/data-specification-iec61360-v3rc02",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc02/content/Data_specification_IEC61360.mdx",tags:[],version:"current",frontMatter:{id:"data-specification-iec61360-v3rc02",title:"DataSpecificationIec61360",sidebar_label:"DataSpecificationIec61360"},sidebar:"v3rc02Sidebar",previous:{title:"ConceptDescription",permalink:"/aas-core-meta-docs/docs/v3rc02/content/concept-description-v3rc02"},next:{title:"DataSpecificationPhysicalUnit",permalink:"/aas-core-meta-docs/docs/v3rc02/content/data-specification-physical-unit-v3rc02"}},m=[{value:"Properties",id:"properties",children:[],level:2}],d={toc:m};function u(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(o.Z,{items:[{displayName:"PreferredName",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"ShortName",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"Unit",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"UnitId",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"SourceOfDefinition",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"Symbol",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"DataType",isRequired:!0,typeDef:{type:"Enumeration",isList:!1,displayName:"DataTypeIec61360",to:"data-type-iec61360-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"Definition",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"LangStringSet",to:"lang-string-set-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"ValueFormat",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"ValueList",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"ValueList",to:"value-list-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"Value",isRequired:!0,typeDef:{type:"ConstrainedPrimitive",isList:!1,displayName:"NonEmptyString",to:"non-empty-string-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"ValueId",isRequired:!0,typeDef:{type:"Class",isList:!1,displayName:"Reference",to:"reference-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}},{displayName:"LevelType",isRequired:!0,typeDef:{type:"Enumeration",isList:!1,displayName:"LevelType",to:"level-type-v3rc02"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ")}u.isMDXComponent=!0}}]);