--- 
id: capability-v3rc02 
title: Capability 
sidebar_label: Capability 
---A capability is the implementation-independent description of the potential of an
asset to achieve a certain effect in the physical or virtual world.

<div>
<p>Constraint AASd-058: If the semanticId of a Capability submodel element references
a ConceptDescription then the ConceptDescription/category shall be CAPABILITY.</p>
<p>The semanticId of a capability is typically an ontology. Thus, reasoning on
capabilities is enabled.</p>
</div>

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
    
                }]} /> 
 
