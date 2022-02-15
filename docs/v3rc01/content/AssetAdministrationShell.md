--- 
id: asset-administration-shell-v3rc01 
title: AssetAdministrationShell 
sidebar_label: AssetAdministrationShell 
---Structure a digital representation of an <see cref="Asset" />.

import PropertiesList from '../../../src/components/PropertiesList' 

## Properties 

<PropertiesList items={[ 
{
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
                        name: "Administration",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "AdministrativeInformation",
        to: "administrative-information-v3rc01",
    }
    
                    }, {
                    name: "Identification",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Identifier",
        to: "identifier-v3rc01",
    }
    
                }, {
                        name: "DerivedFrom",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }, {
                        name: "Security",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "Security",
        to: "security-v3rc01",
    }
    
                    }, {
                    name: "AssetInformation",
                    isRequired: true,
                    typeDef: 
    {
        type: "Class",
        isList: false,
        displayName: "AssetInformation",
        to: "asset-information-v3rc01",
    }
    
                }, {
                        name: "Submodels",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "Reference",
        to: "reference-v3rc01",
    }
    
                    }, {
                        name: "Views",
                        isRequired: false,
                        typeDef: 
    {
        type: "Class",
        isList: true,
        displayName: "View",
        to: "view-v3rc01",
    }
    
                    }]} /> 
 