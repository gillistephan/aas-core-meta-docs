--- 
id: identifier-v3rc01 
title: Identifier 
sidebar_label: Identifier 
---Used to uniquely identify an entity by using an identifier.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "IdType",
                    isRequired: true,
                    typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "IdentifierType",
        to: "identifier-type-v3rc01",
    }
    
                }, {
                    name: "Id",
                    isRequired: true,
                    typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                }]} /> 
 