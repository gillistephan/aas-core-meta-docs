--- 
id: relationship-element-v3rc02 
title: RelationshipElement 
sidebar_label: RelationshipElement 
---
 
import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 
<PropertiesList items={[ 
{
                    name: "data_specifications",
                    isRequired: true,
                    typeDef: <code>List[Reference]</code>
                }, 
{
                    name: "extensions",
                    isRequired: true,
                    typeDef: <code>List[Extension]</code>
                }, 
{
                    name: "ID_short",
                    isRequired: false,
                    typeDef: <code>string</code>
                }, 
{
                    name: "display_name",
                    isRequired: false,
                    typeDef: <code>Lang_string_set</code>
                }, 
{
                    name: "category",
                    isRequired: false,
                    typeDef: <code>string</code>
                }, 
{
                    name: "description",
                    isRequired: false,
                    typeDef: <code>Lang_string_set</code>
                }, 
{
                    name: "kind",
                    isRequired: false,
                    typeDef: <code>Modeling_kind</code>
                }, 
{
                    name: "semantic_ID",
                    isRequired: false,
                    typeDef: <code>Reference</code>
                }, 
{
                    name: "qualifiers",
                    isRequired: true,
                    typeDef: <code>List[Constraint]</code>
                }, 
{
                    name: "first",
                    isRequired: true,
                    typeDef: <code>Reference</code>
                }, 
{
                    name: "second",
                    isRequired: true,
                    typeDef: <code>Reference</code>
                }]} /> 
 
