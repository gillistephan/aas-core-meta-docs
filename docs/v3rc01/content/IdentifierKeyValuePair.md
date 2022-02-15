--- 
id: identifier-key-value-pair-v3rc01 
title: IdentifierKeyValuePair 
sidebar_label: IdentifierKeyValuePair 
---An IdentifierKeyValuePair describes a generic identifier as key-value pair.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                        name: "SemanticId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }, {
                    name: "Key",
                    isRequired: true,
                    typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                }, {
                        name: "Value",
                        isRequired: false,
                        typeDef: 
    {
        type: "Primitive",
        isList: false,
        displayName: "PrimitiveType.STR",
        to: null,
    }
    
                    }, {
                        name: "ExternalSubjectId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }]} /> 
 