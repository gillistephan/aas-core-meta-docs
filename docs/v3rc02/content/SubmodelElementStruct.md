--- 
id: submodel-element-struct-v3rc02 
title: SubmodelElementStruct 
sidebar_label: SubmodelElementStruct 
---A submodel element struct is is a logical encapsulation of multiple values. It has
a number of of submodel elements.

<p>
Constraint AASd-092: If the semanticId of a SubmodelElementStruct references
a ConceptDescription then the ConceptDescription/category shall be ENTITY.
</p>

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
                    name: "DataSpecifications",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc02",
    }
    
                }, {
                    name: "Extensions",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Extension",
        to: "extension-v3rc02",
    }
    
                }, {
                        name: "IdShort",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc02",
    }
    
                    }, {
                        name: "DisplayName",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc02",
    }
    
                    }, {
                        name: "Category",
                        isRequired: false,
                        typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc02",
    }
    
                    }, {
                        name: "Description",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "LangStringSet",
        to: "lang-string-set-v3rc02",
    }
    
                    }, {
                        name: "Kind",
                        isRequired: false,
                        typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "ModelingKind",
        to: "modeling-kind-v3rc02",
    }
    
                    }, {
                        name: "SemanticId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc02",
    }
    
                    }, {
                    name: "Qualifiers",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Constraint",
        to: "constraint-v3rc02",
    }
    
                }, {
                    name: "Values",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "SubmodelElement",
        to: "submodel-element-v3rc02",
    }
    
                }]} /> 
 
