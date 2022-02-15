--- 
id: qualifier-v3rc01 
title: Qualifier 
sidebar_label: Qualifier 
---A qualifier is a type-value-pair that makes additional statements w.r.t.  the value
of the element.

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
                    name: "Type",
                    isRequired: true,
                    typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                }, {
                    name: "ValueType",
                    isRequired: true,
                    typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "DataTypeDef",
        to: "data-type-def-v3rc01",
    }
    
                }, {
                        name: "Value",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "ValueDataType",
        to: "value-data-type-v3rc01",
    }
    
                    }, {
                        name: "ValueId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }]} /> 
 