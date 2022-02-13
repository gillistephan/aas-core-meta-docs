--- 
id: model-reference-v3rc02 
title: ModelReference 
sidebar_label: ModelReference 
---Reference to a model element of the same or another AAS.
A model reference is an ordered list of keys, each key referencing an element.
The complete list of keys may for example be concatenated to a path that then gives
unique access to an element.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "Keys",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Key",
        to: "key-v3rc02",
    }
    
                },{
                        name: "ReferredSemanticId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc02",
    }
    
                    }]} /> 
 
