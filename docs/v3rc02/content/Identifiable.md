--- 
id: identifiable-v3rc02 
title: Identifiable 
sidebar_label: Identifiable 
---
 
import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 
<PropertiesList items={[ 
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
                    name: "ID",
                    isRequired: true,
                    typeDef: <code>Non_empty_string</code>
                }, 
{
                    name: "administration",
                    isRequired: false,
                    typeDef: <code>Administrative_information</code>
                }]} /> 
 
