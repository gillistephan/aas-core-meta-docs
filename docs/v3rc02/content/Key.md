--- 
id: key-v3rc02 
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
        to: "key-elements-v3rc02",
    }
    
                }, {
                    name: "Value",
                    isRequired: true,
                    typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc02",
    }
    
                }]} /> 
 
