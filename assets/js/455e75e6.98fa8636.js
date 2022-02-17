"use strict";(self.webpackChunkaas_core_meta_docs=self.webpackChunkaas_core_meta_docs||[]).push([[5013],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,y=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(y,c(c({ref:t},p),{},{components:r})):n.createElement(y,c({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},6396:function(e,t,r){r(7294),r(2389),r(9443);r(3616)},8086:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7462),a=r(7294),i=r(6010),c=r(3727),o=function(e){var t,r=e.type,n=e.isList,i=e.displayName,o=e.to;return t="Class"===r&&o?a.createElement(c.rU,{to:o},i):i,n?a.createElement("code",null,"List [ ",t," ]"):a.createElement("code",null,t)},s=function(e){var t=e.displayName,r=e.to;return"SELF"===t?a.createElement("span",{className:"font-bold"},"Own Props"):a.createElement("span",{className:"font-bold"},"From ",a.createElement(c.rU,{to:r},t))},l=function(e){var t=e.displayName,r=e.isRequired,n=e.typeDef;return a.createElement("div",{className:"py-2 sm:grid sm:grid-cols-4 sm:gap-4"},a.createElement("span",null,t),a.createElement("div",null,a.createElement("span",{className:(0,i.Z)(r?"bg-red-100 text-red-800":"bg-gray-100 text-gray-800","inline-flex  items-center justify-center rounded-md px-2.5 py-0.5 text-sm font-medium")},r?"Required":"Optional")),a.createElement("dd",{className:"mt-1  sm:mt-0"},a.createElement("div",{className:"flex flex-col items-start justify-start"},a.createElement(o,n))))};var p=function(e){var t=e.items,r=function(e){var t={},r=e.reduce((function(e,r){return console.log(r),e[r.inheritedFrom.displayName]?e[r.inheritedFrom.displayName].push(r):(e[r.inheritedFrom.displayName]=[r],t[r.inheritedFrom.displayName]=r.inheritedFrom.to),e}),{});return[t,r]}(t),i=r[0],c=r[1],o=a.useState(!1),p=o[0],m=o[1];return a.createElement("div",{className:"px-4 py-5 sm:p-0"},a.createElement("div",{className:"mb-4 flex min-w-0 items-center space-x-4 border-b border-gray-200"},a.createElement("span",null,"Group by Inheritance"),a.createElement("input",{type:"checkbox",className:"h-4 w-4",checked:p,onChange:function(){return m((function(e){return!e}))}})),a.createElement("div",{className:"sm:divide-y sm:divide-gray-200"},p?Object.keys(c).map((function(e){var t=c[e];return a.createElement("div",{className:"py-2",key:e},a.createElement(s,{displayName:e,to:i[e]}),t.map((function(e){return a.createElement(l,(0,n.Z)({key:e.displayName},e))})))})):t.map((function(e){return a.createElement(l,(0,n.Z)({key:e.displayName},e))}))))}},2560:function(e,t,r){var n=r(7294),a=r(3727);t.Z=function(e){var t=e.items;return n.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:p-0"},n.createElement("div",{className:" sm:divide-y sm:divide-gray-200"},t.map((function(e){return n.createElement("div",{key:e.displayName,className:"py-2 sm:grid sm:grid-cols-3 sm:gap-4"},n.createElement(a.rU,{to:e.to},n.createElement("span",null,e.displayName)),n.createElement("div",{className:"sm:col-span-2"},e.props.map((function(t,r){return n.createElement("span",null,t,r===e.props.length-1?"":", ")}))))}))))}},3914:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return y}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=(r(8215),r(6396),r(8086)),o=r(2560),s=["components"],l={id:"reference-v3rc01",title:"Reference",sidebar_label:"Reference"},p=void 0,m={unversionedId:"v3rc01/content/reference-v3rc01",id:"v3rc01/content/reference-v3rc01",title:"Reference",description:"Properties",source:"@site/docs/v3rc01/content/Reference.mdx",sourceDirName:"v3rc01/content",slug:"/v3rc01/content/reference-v3rc01",permalink:"/aas-core-meta-docs/docs/v3rc01/content/reference-v3rc01",editUrl:"https://github.com/gillistephan/aas-core-meta-docs/blob/main/docs/v3rc01/content/Reference.mdx",tags:[],version:"current",frontMatter:{id:"reference-v3rc01",title:"Reference",sidebar_label:"Reference"},sidebar:"v3rc01Sidebar",previous:{title:"ReferenceElement",permalink:"/aas-core-meta-docs/docs/v3rc01/content/reference-element-v3rc01"},next:{title:"Security",permalink:"/aas-core-meta-docs/docs/v3rc01/content/security-v3rc01"}},d=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],u={toc:d};function y(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)(c.Z,{items:[{displayName:"Keys",isRequired:!1,typeDef:{type:"Class",isList:!0,displayName:"Key",to:"key-v3rc01"},inheritedFrom:{displayName:"SELF",to:null}}],mdxType:"PropertiesList"})," ",(0,i.kt)("h2",{id:"usages"},"Usages"),(0,i.kt)(o.Z,{items:[{displayName:"HasSemantics",to:"has-semantics-v3rc01",props:["SemanticId"]},{displayName:"Extension",to:"extension-v3rc01",props:["SemanticId","RefersTo"]},{displayName:"Qualifier",to:"qualifier-v3rc01",props:["SemanticId","ValueId"]},{displayName:"AssetAdministrationShell",to:"asset-administration-shell-v3rc01",props:["DerivedFrom"]},{displayName:"AssetInformation",to:"asset-information-v3rc01",props:["GlobalAssetId"]},{displayName:"IdentifierKeyValuePair",to:"identifier-key-value-pair-v3rc01",props:["SemanticId","ExternalSubjectId"]},{displayName:"Submodel",to:"submodel-v3rc01",props:["SemanticId"]},{displayName:"SubmodelElement",to:"submodel-element-v3rc01",props:["SemanticId"]},{displayName:"RelationshipElement",to:"relationship-element-v3rc01",props:["SemanticId","First","Second"]},{displayName:"SubmodelElementCollection",to:"submodel-element-collection-v3rc01",props:["SemanticId"]},{displayName:"DataElement",to:"data-element-v3rc01",props:["SemanticId"]},{displayName:"Property",to:"property-v3rc01",props:["SemanticId","ValueId"]},{displayName:"MultiLanguageProperty",to:"multi-language-property-v3rc01",props:["SemanticId","ValueId"]},{displayName:"Range",to:"range-v3rc01",props:["SemanticId"]},{displayName:"ReferenceElement",to:"reference-element-v3rc01",props:["SemanticId","Value"]},{displayName:"Blob",to:"blob-v3rc01",props:["SemanticId"]},{displayName:"File",to:"file-v3rc01",props:["SemanticId"]},{displayName:"AnnotatedRelationshipElement",to:"annotated-relationship-element-v3rc01",props:["SemanticId","First","Second"]},{displayName:"Entity",to:"entity-v3rc01",props:["SemanticId","GlobalAssetId"]},{displayName:"Event",to:"event-v3rc01",props:["SemanticId"]},{displayName:"BasicEvent",to:"basic-event-v3rc01",props:["SemanticId","Observed"]},{displayName:"Operation",to:"operation-v3rc01",props:["SemanticId"]},{displayName:"Capability",to:"capability-v3rc01",props:["SemanticId"]},{displayName:"View",to:"view-v3rc01",props:["SemanticId"]},{displayName:"ValueReferencePair",to:"value-reference-pair-v3rc01",props:["ValueId"]},{displayName:"DataSpecificationIec61360",to:"data-specification-iec-61360-v3rc01",props:["UnitId","ValueId"]},{displayName:"ObjectAttributes",to:"object-attributes-v3rc01",props:["ObjectAttributes"]},{displayName:"Permission",to:"permission-v3rc01",props:["Permission"]},{displayName:"PermissionsPerObject",to:"permissions-per-object-v3rc01",props:["Object"]},{displayName:"AccessControl",to:"access-control-v3rc01",props:["SelectableSubjectAttributes","DefaultSubjectAttributes","SelectablePermissions","DefaultPermissions","SelectableEnvironmentAttributes","DefaultEnvironmentAttributes"]}],mdxType:"UsageList"}))}y.isMDXComponent=!0}}]);