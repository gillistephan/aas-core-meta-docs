--- 
id: entity-v3rc02 
title: Entity 
sidebar_label: Entity 
---An entity is a submodel element that is used to model entities.

<p>
Constraint AASd-056: If the semanticId of a Entity submodel element
references a ConceptDescription then the ConceptDescription/category shall
be one of following values: ENTITY. The ConceptDescription describes the elements
assigned to the entity via Entity/statement.
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
                    name: "EntityType",
                    isRequired: true,
                    typeDef: 
    {
        type: "Enumeration",
        isList: false,
        displayName: "EntityType",
        to: "entity-type-v3rc02",
    }
    
                }, {
                    name: "Statements",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "SubmodelElement",
        to: "submodel-element-v3rc02",
    }
    
                }, {
                        name: "GlobalAssetId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc02",
    }
    
                    }, {
                        name: "SpecificAssetId",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "IdentifierKeyValuePair",
        to: "identifier-key-value-pair-v3rc02",
    }
    
                    }]} /> 
 
