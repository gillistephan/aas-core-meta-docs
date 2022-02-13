--- 
id: concept-description-v3rc02 
title: ConceptDescription 
sidebar_label: ConceptDescription 
---The semantics of a property or other elements that may have a semantic description
is defined by a concept description. The description of the concept should follow a
standardized schema (realized as data specification template).

<p>
Constraint AASd-051: A ConceptDescription shall have one of the following categories
VALUE, PROPERTY, REFERENCE, DOCUMENT, CAPABILITY, RELATIONSHIP, COLLECTION, FUNCTION
, EVENT, ENTITY, APPLICATION_CLASS, QUALIFIER, VIEW. Default: PROPERTY.
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
                    name: "IsCaseOf",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc02",
    }
    
                }]} /> 
 
