--- 
id: value-reference-pair-v3rc02 
title: ValueReferencePair 
sidebar_label: ValueReferencePair 
---A value reference pair within a value list. Each value has a global unique id
defining its semantic.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "Value",
                    isRequired: true,
                    typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc02",
    }
    
                },{
                    name: "ValueId",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc02",
    }
    
                }]} /> 
 
