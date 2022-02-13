--- 
id: key-v3rc01 
title: Key 
sidebar_label: Key 
---A key is a reference to an element by its id.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "Type",
                    isRequired: true,
                    typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "KeyElements",
        to: "key-elements-v3rc01",
    }
    
                },{
                    name: "Value",
                    isRequired: true,
                    typeDef: 
    {
        type: "Primitive",
        isList: false,
        displayName: "PrimitiveType.STR",
        to: null,
    }
    
                },{
                    name: "IdType",
                    isRequired: true,
                    typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "KeyType",
        to: "key-type-v3rc01",
    }
    
                }]} /> 
 
