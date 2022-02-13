--- 
id: data-element-v3rc01 
title: DataElement 
sidebar_label: DataElement 
---

A data element is a submodel element that is not further composed out of
other submodel elements.

<div>
<p>A data element is a submodel element that has a value. The type of value differs
for different subtypes of data elements.</p>
<p>A controlled value is a value whose meaning is given in an external source
(see “ISO/TS 29002-10)</p>
<p>Constraint AASd-090: For data elements DataElement/category shall be one of the
following values: CONSTANT, PARAMETER or VARIABLE.
Exception: File and Blob data elements.</p>
</div>

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                        name: "Extension",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Extension",
        to: "extension-v3rc01",
    }
    
                    }, {
                    name: "IdShort",
                    isRequired: true,
                    typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                }, {
                        name: "DisplayName",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc01",
    }
    
                    }, {
                        name: "Category",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc01",
    }
    
                    }, {
                        name: "Description",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc01",
    }
    
                    }, {
                        name: "Qualifiers",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Constraint",
        to: "constraint-v3rc01",
    }
    
                    }, {
                        name: "DataSpecifications",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }, {
                        name: "Kind",
                        isRequired: false,
                        typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "ModelingKind",
        to: "modeling-kind-v3rc01",
    }
    
                    }, {
                        name: "SemanticId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }]} /> 
 
