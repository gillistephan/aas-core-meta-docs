---
id: range-v3rc02
title: Range
sidebar_label: Range
---

A range data element is a data element that defines a range with min and max.

<div>
<p>Constraint AASd-053: If the semanticId of a Range submodel element references a
ConceptDescription then the ConceptDescription/category shall be one of following
values: PROPERTY.</p>
<p>Constraint AASd-068: If the semanticId of a Range submodel element references a
ConceptDescription then DataSpecificationIEC61360/dataType shall be a numerical
one, i.e. REAL_* or RATIONAL_*.</p>
<p>Constraint AASd-069: If the semanticId of a Range references a ConceptDescription
then DataSpecificationIEC61360/levelType shall be identical to the set Min, Max.</p>
</div>

import PropertiesList from '../../../src/components/PropertiesList'

## Properties

<PropertiesList
items={[
{
name: "DataSpecifications",
isRequired: true,
typeDef: {
type: "Class",
isList: true,
displayName: "Reference",
to: "reference-v3rc02",
},
},
{
name: "Extensions",
isRequired: true,
typeDef: {
type: "Class",
isList: true,
displayName: "Extension",
to: "extension-v3rc02",
},
},
{
name: "IdShort",
isRequired: false,
typeDef: {
type: "ConstrainedPrimitive",
isList: false,
displayName: "NonEmptyString",
to: "non-empty-string-v3rc02",
},
},
{
name: "DisplayName",
isRequired: false,
typeDef: {
type: "Class",
isList: false,
displayName: "LangStringSet",
to: "lang-string-set-v3rc02",
},
},
{
name: "Category",
isRequired: false,
typeDef: {
type: "ConstrainedPrimitive",
isList: false,
displayName: "NonEmptyString",
to: "non-empty-string-v3rc02",
},
},
{
name: "Description",
isRequired: false,
typeDef: {
type: "Class",
isList: false,
displayName: "LangStringSet",
to: "lang-string-set-v3rc02",
},
},
{
name: "Kind",
isRequired: false,
typeDef: {
type: "Enumeration",
isList: false,
displayName: "ModelingKind",
to: "modeling-kind-v3rc02",
},
},
{
name: "SemanticId",
isRequired: false,
typeDef: {
type: "Class",
isList: false,
displayName: "Reference",
to: "reference-v3rc02",
},
},
{
name: "Qualifiers",
isRequired: true,
typeDef: {
type: "Class",
isList: true,
displayName: "Constraint",
to: "constraint-v3rc02",
},
},
{
name: "ValueType",
isRequired: true,
typeDef: {
type: "Enumeration",
isList: false,
displayName: "DataTypeDef",
to: "data-type-def-v3rc02",
},
},
{
name: "Min",
isRequired: false,
typeDef: {
type: "ConstrainedPrimitive",
isList: false,
displayName: "NonEmptyString",
to: "non-empty-string-v3rc02",
},
},
{
name: "Max",
isRequired: false,
typeDef: {
type: "ConstrainedPrimitive",
isList: false,
displayName: "NonEmptyString",
to: "non-empty-string-v3rc02",
},
},
]}
/>;
