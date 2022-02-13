--- 
id: submodel-v3rc02 
title: Submodel 
sidebar_label: Submodel 
---A submodel defines a specific aspect of the asset represented by the AAS.

<p>
A submodel is used to structure the digital representation and technical
functionality of an Administration Shell into distinguishable parts. Each submodel
refers to a well-defined domain or subject matter. Submodels can become
standardized and, thus, become submodels templates.
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
                    name: "Id",
                    isRequired: true,
                    typeDef: 
    {
        type: "ConstrainedPrimitive",
        isList: false,
        displayName: "NonEmptyString",
        to: "non-empty-string-v3rc02",
    }
    
                }, {
                        name: "Administration",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "AdministrativeInformation",
        to: "administrative-information-v3rc02",
    }
    
                    }, {
                    name: "SubmodelElements",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "SubmodelElement",
        to: "submodel-element-v3rc02",
    }
    
                }]} /> 
 
